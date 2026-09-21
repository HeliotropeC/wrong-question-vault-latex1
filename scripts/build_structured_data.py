#!/usr/bin/env python3
"""Merge reviewed text/LaTeX transcriptions into the application data files."""

from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BASE_PATH = ROOT / "data" / "questions.json"
TRANSCRIPTIONS_PATH = ROOT / "data" / "transcriptions.jsonl"
JS_PATH = ROOT / "data" / "questions.js"


def load_transcriptions() -> dict[str, dict]:
    rows: dict[str, dict] = {}
    for line_number, line in enumerate(
        TRANSCRIPTIONS_PATH.read_text(encoding="utf-8").splitlines(), start=1
    ):
        if not line.strip():
            continue
        row = json.loads(line)
        question_id = row["id"]
        if question_id in rows:
            raise SystemExit(f"第 {line_number} 行存在重复 ID：{question_id}")
        rows[question_id] = row
    return rows


def main() -> None:
    payload = json.loads(BASE_PATH.read_text(encoding="utf-8"))
    transcriptions = load_transcriptions()
    base_ids = {question["id"] for question in payload["questions"]}
    missing = base_ids - transcriptions.keys()
    extra = transcriptions.keys() - base_ids
    if missing or extra:
        raise SystemExit(f"转写数据不完整：missing={sorted(missing)} extra={sorted(extra)}")

    questions = []
    for base in payload["questions"]:
        transcription = transcriptions[base["id"]]
        question = {
            key: value
            for key, value in base.items()
            if key not in {"image", "ocrConfidence", "label", "questionNo"}
        }
        question.update(transcription)
        question.setdefault("answer", "")
        question.setdefault("analysis", "")
        question.setdefault("errorCause", "")
        question.setdefault("knowledgePoints", [question["chapterTitle"]])
        question.setdefault(
            "similarQuestionPrompt",
            f"围绕“{question['chapterTitle']}”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
        )
        question["transcriptionStatus"] = "verified"
        questions.append(question)

    payload.update(
        {
            "schemaVersion": 2,
            "contentFormat": "markdown+latex",
            "count": len(questions),
            "questions": questions,
        }
    )
    serialized = json.dumps(payload, ensure_ascii=False, indent=2)
    BASE_PATH.write_text(serialized + "\n", encoding="utf-8")
    JS_PATH.write_text(f"window.WRONG_QUESTIONS = {serialized};\n", encoding="utf-8")
    print(f"Built {len(questions)} structured questions")


if __name__ == "__main__":
    main()
