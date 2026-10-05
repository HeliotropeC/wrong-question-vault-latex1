# 考研数学错题仓（文本 + LaTeX 版）

从做题本圈选标记、历史学习对话与考研真题中整理出的个人错题库。当前包含 **270 道人工校对题目**，其中 **14 道归入“考研真题 / 2017年 / 数学一”**。本次真题导入新增10道、与既有历史题合并4道。题干和选项均为可检索文本，数学表达式使用 LaTeX；仓库不包含题目截图或原始 PDF。

## 功能

- 按科目、章节、历史来源、题型、复习状态、错误原因、难度和原始标记筛选
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

只导出历史对话新增题目：

```bash
python3 scripts/export_questions.py \
  --count 10 --source new-history --format md \
  --output output/历史错题卷.md
```

`--source history` 包含历史新增题与合并到旧题的历史记录；`--source book` 排除考研真题分类；`--source exam` 筛选考研真题。网页的“题目来源”筛选同样提供“考研真题”。

## 考研真题导入

审核记录保存在 `data/exam-imports/2017-math1-2026-10-05.json`。本次附件为2017年数学一试卷3页，标记题号为2、3、6、7、8、12、15、16、17、18、19、20、22、23。第3、6、7、20题与既有历史题合并，保留稳定ID、复习状态、个人笔记及既有答案和错因；只圈选小问的题保留整题，并用 `wrongSubquestions` 记录标记范围。附件未提供作答过程的新题，其具体错因保持待归类。

```bash
python3 scripts/export_questions.py --count 14 --source exam --format json --output output/2017真题错题.json --ordered
```

## 历史对话导入

历史审核批次位于 `data/history-imports/`。`2026-09-21.json` 是首批导入；`2026-09-22-complete-search.json` 记录了对当前可访问历史对话索引和错题图片的完整检索结果。导入器按标准化题干与选项进行精确去重，并对人工确认的同题执行显式合并：

```bash
python3 scripts/import_history.py \
  data/history-imports/2026-09-21.json

python3 scripts/import_history.py \
  data/history-imports/2026-09-22-complete-search.json
```

导入器可重复执行而不会重复添题，并保留已有复习状态、笔记、答案与解析。原记录不完整、缺少题图或条件互相冲突的材料保留在各批次的 `pending` 区，不进入可抽题题库。

## GitHub 建议

- 仓库设为 **Private**，仅用于个人复习。
- 不要提交原始 PDF、题目截图或其他版权材料。
- 浏览器中新增的答案与解析不会自动写回 Git；请先导出 JSON 备份，或直接修改 `data/questions.json` 后提交。

## 校对说明

- 270 道题均为文本与 LaTeX 数据；原书题保留 PDF 页码与书内页码，历史题保留来源说明，真题保留年份、卷别、题号及标记范围。
- 原题中仅用于说明边界或位置的图已改写为完整文字条件。
- 少数原题自身存在下标范围或记号歧义，已在 `transcriptionNote` 中按原文注明。
