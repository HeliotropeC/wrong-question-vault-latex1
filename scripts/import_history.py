#!/usr/bin/env python3
"""Apply a reviewed history batch without replacing existing questions or notes.

Exact normalized matches are merged. Semantic matches require an explicit,
reviewed targetId plus expectedStem. Similarity alone never deletes a question.
"""
from __future__ import annotations

import argparse
import copy
import hashlib
import json
import re
import unicodedata
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data/questions.json"
TRANSCRIPTIONS = ROOT / "data/transcriptions.jsonl"
JS = ROOT / "data/questions.js"


def normalized(text: str) -> str:
    text = unicodedata.normalize("NFKC", text)
    # Only presentation differences; never remove signs, limits or numbers.
    for command in (r"\displaystyle", r"\left", r"\right", r"\,", r"\!", r"\;"):
        text = text.replace(command, "")
    text = text.replace(r"\dfrac", r"\frac").replace(r"\tfrac", r"\frac")
    return re.sub(r"\s+", "", text)


def fingerprint(question: dict) -> str:
    parts = [question["subject"], normalized(question["stem"])]
    parts.extend(normalized(option["text"]) for option in question.get("options", []))
    return hashlib.sha256("\n".join(parts).encode()).hexdigest()


def union(existing: list, incoming: list) -> list:
    result = copy.deepcopy(existing)
    for value in incoming:
        if value not in result:
            result.append(copy.deepcopy(value))
    return result


def apply_batch(payload: dict, batch: dict) -> tuple[dict, dict]:
    payload = copy.deepcopy(payload)
    questions = payload["questions"]
    by_id = {q["id"]: q for q in questions}
    if len(by_id) != len(questions):
        raise ValueError("Existing dataset has duplicate IDs")
    by_fingerprint = {fingerprint(q): q for q in questions}
    audit = []
    counts = Counter()
    for row in batch["records"]:
        incoming = copy.deepcopy(row["question"])
        if row["action"] == "merge":
            target = by_id[row["targetId"]]
            if target["stem"] != row["expectedStem"]:
                raise ValueError(f"Source changed: {row['targetId']}; review before merging")
            reason = row["matchReason"]
            decision = "merge-reviewed"
        else:
            target = by_id.get(incoming["id"])
            if target is not None:
                if fingerprint(target) != fingerprint(incoming):
                    raise ValueError(f"ID conflict: {incoming['id']}")
                reason, decision = "Stable history ID; repeated import", "already-imported"
            else:
                target = by_fingerprint.get(fingerprint(incoming))
                reason, decision = "Same normalized full stem and options", "merge-exact"
            if target is None:
                target = incoming
                questions.append(target)
                by_id[target["id"]] = target
                by_fingerprint[fingerprint(target)] = target
                reason, decision = "Full problem manually reviewed; distinct from existing questions", "added"

        for field in ("tags", "knowledgePoints", "historySources"):
            target[field] = union(target.get(field, []), incoming.get(field, []))
        # Keep user data. Conflicting annotations remain visible for review.
        for field in ("answer", "analysis", "errorCause", "reviewFocus"):
            old, new = target.get(field, ""), incoming.get(field, "")
            if not old and new:
                target[field] = new
            elif old and new and old != new:
                conflict = {"batchId": batch["batchId"], "field": field, "proposed": new}
                target["historyConflicts"] = union(target.get("historyConflicts", []), [conflict])
        if target.get("mistakeType", "待归类") == "待归类":
            target["mistakeType"] = incoming.get("mistakeType", "待归类")
        for field in ("answerVerification", "errorCauseEvidence"):
            if incoming.get(field) and not target.get(field):
                target[field] = incoming[field]
        target["historyImportBatches"] = union(target.get("historyImportBatches", []), [batch["batchId"]])
        target["contentFingerprint"] = fingerprint(target)
        audit.append({"candidateId": row["candidateId"], "targetId": target["id"],
                      "decision": decision, "reason": reason})
        counts[decision] += 1
    payload["count"] = len(questions)
    payload["title"] = "考研数学错题库（原书圈题 + 历史对话）"
    payload["updatedAt"] = batch["importedAt"]
    payload["historyImportBatches"] = union(payload.get("historyImportBatches", []), [batch["batchId"]])
    return payload, {"batchId": batch["batchId"], "counts": dict(counts), "decisions": audit}


def write_dataset(payload: dict) -> None:
    serialized = json.dumps(payload, ensure_ascii=False, indent=2) + "\n"
    DATA.write_text(serialized, encoding="utf-8")
    JS.write_text("window.WRONG_QUESTIONS = " + serialized.rstrip() + ";\n", encoding="utf-8")
    current = [json.loads(line) for line in TRANSCRIPTIONS.read_text(encoding="utf-8").splitlines() if line.strip()]
    by_id = {row["id"]: row for row in current}
    for question in payload["questions"]:
        if not question.get("historyImportBatches"):
            continue
        row = by_id.get(question["id"])
        if row is None:
            row = {"id": question["id"]}
            current.append(row)
        # Synchronize edited fields so future rebuilds do not erase annotations.
        for field in ("questionNo", "questionType", "stem", "options", "answer", "analysis",
                      "knowledgePoints", "errorCause", "reviewFocus", "similarQuestionPrompt",
                      "transcriptionNote", "transcriptionStatus"):
            if field in question:
                row[field] = copy.deepcopy(question[field])
    TRANSCRIPTIONS.write_text("\n".join(json.dumps(row, ensure_ascii=False) for row in current) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("batch", type=Path)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    batch = json.loads(args.batch.read_text(encoding="utf-8"))
    payload = json.loads(DATA.read_text(encoding="utf-8"))
    updated, audit = apply_batch(payload, batch)
    if not args.dry_run:
        write_dataset(updated)
    print(json.dumps({"dryRun": args.dry_run, "before": payload["count"], "after": updated["count"], **audit}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
