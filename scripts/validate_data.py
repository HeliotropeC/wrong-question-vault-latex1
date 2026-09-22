#!/usr/bin/env python3
"""Validate the structured wrong-question dataset."""

from __future__ import annotations

import json
from pathlib import Path

from import_history import fingerprint


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "questions.json"
REQUIRED = {
    "id", "subject", "chapter", "chapterTitle", "questionNo", "sourceRef",
    "questionType", "stem", "options", "knowledgePoints", "answer", "analysis",
    "errorCause", "similarQuestionPrompt", "transcriptionStatus",
}


def latex_balanced(text: str) -> bool:
    return text.count(r"\(") == text.count(r"\)") and text.count(r"\[") == text.count(r"\]")


def main() -> None:
    payload = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    questions = payload["questions"]
    errors: list[str] = []
    ids: set[str] = set()
    fingerprints: dict[str, str] = {}
    for question in questions:
        missing = REQUIRED - question.keys()
        if missing:
            errors.append(f"{question.get('id', '?')}: missing {sorted(missing)}")
        if question.get("id") in ids:
            errors.append(f"{question['id']}: duplicate ID")
        ids.add(question.get("id"))
        content_fingerprint = fingerprint(question)
        if content_fingerprint in fingerprints:
            errors.append(
                f"{question.get('id', '?')}: duplicate content with {fingerprints[content_fingerprint]}"
            )
        fingerprints[content_fingerprint] = question.get("id", "?")
        text_fields = [
            question.get(field, "")
            for field in ("stem", "answer", "analysis", "errorCause", "reviewFocus", "transcriptionNote")
        ]
        text_fields.extend(option.get("text", "") for option in question.get("options", []))
        if not all(latex_balanced(text) for text in text_fields):
            errors.append(f"{question.get('id', '?')}: unbalanced LaTeX delimiters")
        if any(key in question for key in ("image", "ocrConfidence")):
            errors.append(f"{question.get('id', '?')}: contains an image/OCR field")
    if payload.get("count") != len(questions):
        errors.append(f"count={payload.get('count')} but found {len(questions)} questions")
    js_path = DATA_PATH.with_suffix(".js")
    expected_js = "window.WRONG_QUESTIONS = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"
    if js_path.read_text(encoding="utf-8") != expected_js:
        errors.append("data/questions.js is not synchronized with data/questions.json")
    if errors:
        raise SystemExit("\n".join(errors))
    print(f"Validated {len(questions)} structured questions; no image fields found")


if __name__ == "__main__":
    main()
