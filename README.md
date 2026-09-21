# 错题仓（文本 + LaTeX 版）

从《张宇 1000 题·强化篇》做题本的圈选标记中整理出的个人错题库。当前包含 **159 道人工校对题目**，题干和选项均为可检索文本，数学表达式使用 LaTeX；仓库不包含题目截图或原始 PDF。

## 功能

- 按科目、章节、题型、复习状态、错误原因、难度和原始标记颜色筛选
- 全文检索题干、选项、知识点、答案、解析、错因、标签和复盘笔记
- 为每道题维护知识点、答案、解题分析、具体错因及同类题生成提示
- 从已选题目或当前筛选结果中指定数量抽题
- 支持随机抽题或按原书顺序组卷
- 导出 PDF、Markdown、CSV、JSON
- PDF 组卷由浏览器中的 MathJax 排版公式
- 浏览器修改自动保存在本机，并可备份/恢复为 JSON

## 使用

在仓库目录启动静态服务器：

```bash
python3 -m http.server 8000
```

浏览器打开 `http://localhost:8000`。首次载入公式需要联网获取 MathJax。

导出 PDF：点击“生成错题卷 → 导出 PDF”，在系统打印窗口选择“存储为 PDF”。可选择是否附带答案、解析与复盘笔记。

## 数据结构

主数据位于 `data/questions.json`，同时生成可供静态网页直接加载的 `data/questions.js`。每道题包括：

```json
{
  "id": "稳定题目 ID",
  "subject": "高等数学",
  "chapter": 1,
  "chapterTitle": "函数极限与连续",
  "questionNo": 1,
  "sourceRef": "P201",
  "questionType": "选择题",
  "stem": "中文题干与 \\(LaTeX\\)",
  "options": [{ "label": "A", "text": "\\(公式\\)" }],
  "knowledgePoints": ["函数极限与连续"],
  "answer": "",
  "analysis": "",
  "errorCause": "",
  "similarQuestionPrompt": "..."
}
```

公式约定：行内公式使用 `\\(...\\)`，独立公式使用 `\\[...\\]`。`data/transcriptions.jsonl` 是逐题校对源；修改后运行下列命令可重新构建主数据：

```bash
python3 scripts/build_structured_data.py
```

## 命令行导出

例如，从第 16 章随机抽取 12 题：

```bash
python3 scripts/export_questions.py \
  --count 12 --chapter 16 --format md \
  --output output/第16章错题卷.md
```

`--format` 支持 `md`、`csv`、`json`；还可使用 `--question-type`、`--knowledge-point`、`--ordered`、`--seed` 和 `--include-answers`。PDF 需要 MathJax 视觉排版，因此统一从网页导出。

## GitHub 建议

- 仓库设为 **Private**，仅用于个人复习。
- 不要提交原始 PDF、题目截图或其他版权材料。
- 浏览器中新增的答案与解析不会自动写回 Git；请先导出 JSON 备份，或直接修改 `data/questions.json` 后提交。

## 校对说明

- 159 道题均已逐题转写，保留 PDF 页码与书内页码以便回查。
- 原题中仅用于说明边界或位置的图已改写为完整文字条件。
- 少数原题自身存在下标范围或记号歧义，已在 `transcriptionNote` 中按原文注明。
