#!/usr/bin/env python3
import copy
import json
import unittest
from pathlib import Path
from import_history import apply_batch, fingerprint

ROOT = Path(__file__).resolve().parents[1]


class HistoryImportTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.batch = json.loads((ROOT / "data/history-imports/2026-09-21.json").read_text())
        cls.data = json.loads((ROOT / "data/questions.json").read_text())

    def test_reimport_is_idempotent(self):
        once, _ = apply_batch(self.data, self.batch)
        twice, _ = apply_batch(once, self.batch)
        self.assertEqual(once, twice)

    def test_original_ids_still_present(self):
        updated, _ = apply_batch(self.data, self.batch)
        self.assertTrue({q["id"] for q in self.data["questions"]} <= {q["id"] for q in updated["questions"]})

    def test_signed_terms_not_merged(self):
        a = {"subject": "高等数学", "stem": r"\(x+1\)", "options": []}
        b = {**a, "stem": r"\(x-1\)"}
        self.assertNotEqual(fingerprint(a), fingerprint(b))
        self.assertNotEqual(fingerprint(a), fingerprint({**a, "stem": r"\(x+2\)"}))

    def test_preserves_review_status_and_notes(self):
        data = copy.deepcopy(self.data)
        target = next(q for q in data["questions"] if q["id"] == "高等数学-ch01-u001-p003")
        target.update(status="已掌握", note="用户笔记", answer="用户答案")
        updated, _ = apply_batch(data, self.batch)
        result = next(q for q in updated["questions"] if q["id"] == target["id"])
        self.assertEqual(result["status"], "已掌握")
        self.assertEqual(result["note"], "用户笔记")
        self.assertEqual(result["answer"], "用户答案")
        self.assertTrue(result["historyConflicts"])

    def test_expected_stem_guard(self):
        data = copy.deepcopy(self.data)
        next(q for q in data["questions"] if q["id"] == "高等数学-ch01-u001-p003")["stem"] += "修改条件"
        with self.assertRaises(ValueError):
            apply_batch(data, self.batch)

    def test_exact_duplicate_other_id_is_merged(self):
        q = self.batch["records"][0]["question"]
        same = copy.deepcopy(q)
        same["id"] = "other-id"
        data = {"questions": [same], "count": 1}
        batch = {**self.batch, "records": [self.batch["records"][0]]}
        updated, audit = apply_batch(data, batch)
        self.assertEqual(updated["count"], 1)
        self.assertEqual(audit["counts"], {"merge-exact": 1})


if __name__ == "__main__":
    unittest.main()
