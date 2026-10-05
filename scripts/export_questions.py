#!/usr/bin/env python3
"""Export a filtered, fixed-size structured practice set."""

from __future__ import annotations

import argparse
import csv
import json
import random
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="错题仓离线导出器（文本 + LaTeX）")
    parser.add_argument("--data", type=Path, default=Path("data/questions.json"))
    parser.add_argument("--count", type=int, required=True)
    parser.add_argument("--format", choices=["md", "csv", "json"], default="md")
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--subject")
    parser.add_argument("--chapter", type=int)
    parser.add_argument("--question-type")
    parser.add_argument("--knowledge-point")
    parser.add_argument("--status")
    parser.add_argument("--difficulty")
    parser.add_argument("--mistake-type")
    parser.add_argument("--marker-color", choices=["red", "blue", "mixed", "history"])
    parser.add_argument("--source", choices=["history", "new-history", "book", "exam"])
    parser.add_argument("--ordered", action="store_true", help="按原书顺序抽取；默认随机")
    parser.add_argument("--seed", type=int)
    parser.add_argument("--include-answers", action="store_true")
    return parser.parse_args()


def select_questions(payload: dict, args: argparse.Namespace) -> list[dict]:
    questions = list(payload["questions"])
    filters = {
        "subject": args.subject,
        "chapter": args.chapter,
        "questionType": args.question_type,
        "status": args.status,
        "difficulty": args.difficulty,
        "mistakeType": args.mistake_type,
        "markerColor": args.marker_color,
    }
    for field, expected in filters.items():
        if expected is not None:
            questions = [question for question in questions if question.get(field) == expected]
    if args.knowledge_point:
        questions = [question for question in questions if args.knowledge_point in question.get("knowledgePoints", [])]
    if args.source == "history":
        questions = [question for question in questions if question.get("historySources")]
    elif args.source == "new-history":
        questions = [question for question in questions if question.get("sourceType") == "history"]
    elif args.source == "book":
        questions = [question for question in questions if question.get("sourceType") != "history" and question.get("sourceCategory") != "考研真题"]
    elif args.source == "exam":
        questions = [question for question in questions if question.get("sourceCategory") == "考研真题"]
    if not questions:
        raise SystemExit("筛选后没有题目。")
    if args.count < 1:
        raise SystemExit("--count 必须大于 0。")
    if args.count > len(questions):
        raise SystemExit(f"仅有 {len(questions)} 题符合条件，不能导出 {args.count} 题。")
    if args.ordered:
        questions.sort(key=lambda q: (
            q["subject"], q["chapter"], q.get("sourcePage") or float("inf"),
            q["questionNo"], q["id"],
        ))
        return questions[: args.count]
    return random.Random(args.seed).sample(questions, args.count)


def label(question: dict) -> str:
    return f"第{question['questionNo']}题"


def options_text(question: dict) -> str:
    return "\n".join(f"{option['label']}. {option['text']}" for option in question.get("options", []))


def source_text(question: dict) -> str:
    page = question.get("sourcePage")
    return question["sourceRef"] if page is None else f"{question['sourceRef']}（PDF 第 {page} 页）"


def export_markdown(questions: list[dict], output: Path, include_answers: bool) -> None:
    lines = ["# 错题练习清单", ""]
    for index, question in enumerate(questions, start=1):
        lines.extend([
            f"## {index}. {label(question)}", "",
            f"- 分类：{question['subject']} / 第{question['chapter']}章 {question['chapterTitle']} / {question['questionType']}",
            f"- 来源：{source_text(question)}",
            f"- 知识点：{'，'.join(question.get('knowledgePoints', []))}", "",
            question["stem"], "",
        ])
        if question.get("options"):
            lines.extend([options_text(question), ""])
        if include_answers and question.get("answer"):
            lines.extend([f"**答案：** {question['answer']}", ""])
        if include_answers and question.get("analysis"):
            lines.extend([f"**解析：** {question['analysis']}", ""])
    output.write_text("\n".join(lines), encoding="utf-8")


def export_csv(questions: list[dict], output: Path) -> None:
    with output.open("w", encoding="utf-8-sig", newline="") as stream:
        writer = csv.writer(stream)
        writer.writerow(["题号", "科目", "章", "章节", "题型", "题干LaTeX", "选项", "知识点", "状态", "难度", "错误原因", "答案", "解析", "同类题提示", "PDF页", "书内页码"])
        for question in questions:
            writer.writerow([
                question["questionNo"], question["subject"], question["chapter"], question["chapterTitle"], question["questionType"],
                question["stem"], options_text(question), "，".join(question.get("knowledgePoints", [])), question["status"],
                question["difficulty"], question["mistakeType"], question.get("answer", ""), question.get("analysis", ""),
                question.get("similarQuestionPrompt", ""), question.get("sourcePage"), question["sourceRef"],
            ])


def main() -> None:
    args = parse_args()
    payload = json.loads(args.data.read_text(encoding="utf-8"))
    questions = select_questions(payload, args)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    if args.format == "md":
        export_markdown(questions, args.output, args.include_answers)
    elif args.format == "csv":
        export_csv(questions, args.output)
    else:
        args.output.write_text(json.dumps({"schemaVersion": 2, "contentFormat": "markdown+latex", "questions": questions}, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Exported {len(questions)} questions to {args.output}")


if __name__ == "__main__":
    main()
