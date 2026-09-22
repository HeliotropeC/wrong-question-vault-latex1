window.WRONG_QUESTIONS = {
  "title": "考研数学错题库（原书圈题 + 历史对话）",
  "source": "27张宇《1000题_强化篇》数一做题本【留空】4.7.pdf",
  "generatedAt": "2026-09-17",
  "count": 179,
  "questions": [
    {
      "id": "高等数学-ch01-u001-p003",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 3,
      "printedPage": 4,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "方法不熟",
      "tags": [
        "函数极限与连续",
        "历史对话导入",
        "幂指函数极限",
        "对数变换",
        "等价无穷小"
      ],
      "note": "",
      "sourceRef": "P211",
      "questionType": "填空题",
      "stem": "计算极限：\\(\\displaystyle \\lim_{x\\to+\\infty}\\left(x^{\\frac{2}{x}}-1\\right)^{\\frac{2}{\\ln x}}=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "\\(e^{-2}\\)。",
      "analysis": "设 \\(u=x^{2/x}-1\\sim2\\ln x/x\\)。对原式取对数，得 \\(\\frac2{\\ln x}\\ln u=\\frac2{\\ln x}[\\ln2+\\ln\\ln x-\\ln x+o(1)]\\to-2\\)，原式极限为 \\(e^{-2}\\)。",
      "errorCause": "把 \\(\\ln u\\) 与 \\(u\\) 当作等价无穷小；这里 \\(u\\to0^+\\)，而 \\(\\ln u\\to-\\infty\\)。",
      "knowledgePoints": [
        "函数极限与连续",
        "幂指函数极限",
        "对数变换",
        "等价无穷小"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "kind": "history-conversation",
          "date": "2026-07-26",
          "verification": "历史订正检索与现有原题交叉核对",
          "sourceLabel": "历史订正：第3题"
        }
      ],
      "answerVerification": "本次独立推导复核",
      "errorCauseEvidence": "历史订正检索；保留原题正文",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "852715c221edff0fd587ef567ed80c34e457a6180c5031bad0a012599151d8a8",
      "questionNo": 3
    },
    {
      "id": "高等数学-ch01-u002-p004",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 4,
      "printedPage": 5,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "方法不熟",
      "tags": [
        "函数极限与连续",
        "历史对话导入",
        "积分极限",
        "定积分换元",
        "一致渐近展开"
      ],
      "note": "",
      "sourceRef": "P212",
      "questionType": "计算题",
      "stem": "计算：\\(\\displaystyle \\lim_{x\\to0}\\frac{\\int_0^x\\left[e^{(t-x)^2}-1\\right]\\sin t\\,\\mathrm dt}{x^2\\left(e^{x^2}-1\\right)}\\)。",
      "options": [],
      "answer": "\\(\\frac1{12}\\)。",
      "analysis": "令 \\(t=xu,dt=x\\,du\\)，积分区间恒为 \\(0\\le u\\le1\\)。分子为 \\(\\int_0^1[e^{x^2(u-1)^2}-1]\\sin(xu)x\\,du=x^4\\int_0^1u(u-1)^2\\,du+o(x^4)\\)。分母 \\(x^2(e^{x^2}-1)\\sim x^4\\)，所以极限为 \\(\\int_0^1u(u-1)^2du=1/12\\)。",
      "errorCause": "换元 \\(t=xu\\) 后误把微分写为 \\(dt=du/x\\)，应为 \\(dt=x\\,du\\)。",
      "knowledgePoints": [
        "函数极限与连续",
        "积分极限",
        "定积分换元",
        "一致渐近展开"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "kind": "history-conversation",
          "date": "2026-07-26",
          "verification": "历史订正检索与现有原题交叉核对",
          "sourceLabel": "历史订正：第4题"
        }
      ],
      "answerVerification": "本次独立推导复核",
      "errorCauseEvidence": "历史订正检索；保留原题正文",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "5c1072a1ebe71c387f1e868c7d5c392ceb14f07dc831637f0a260e316d5ae0c6",
      "questionNo": 4
    },
    {
      "id": "高等数学-ch01-u003-p005",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 5,
      "printedPage": 6,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P212",
      "questionType": "计算题",
      "stem": "设函数 \\(f(x)\\) 在点 \\(x=3\\) 的邻域内可微，且 \\(\\displaystyle \\lim_{x\\to3}f(x)=0\\)，\\(\\displaystyle \\lim_{x\\to3}f'(x)=4016\\)。求 \\(\\displaystyle \\lim_{x\\to3}\\frac{\\int_3^x\\left[\\int_t^3 f(s)\\,\\mathrm ds\\right]\\mathrm dt}{(3-x)^3}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 6
    },
    {
      "id": "高等数学-ch01-u004-p006",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 6,
      "printedPage": 7,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P213",
      "questionType": "选择题",
      "stem": "当 \\(x\\to0\\) 时，\\(\\displaystyle a\\int_0^{x^2}\\cos(t^2)\\,\\mathrm dt\\) 与 \\(\\sin x-b\\ln(1+x)\\) 是等价无穷小，则 \\((a,b)=\\)（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\((1,2)\\)"
        },
        {
          "label": "B",
          "text": "\\((-1,2)\\)"
        },
        {
          "label": "C",
          "text": "\\(\\left(\\frac12,1\\right)\\)"
        },
        {
          "label": "D",
          "text": "\\(\\left(-\\frac12,1\\right)\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 8
    },
    {
      "id": "高等数学-ch01-u005-p006",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 6,
      "printedPage": 7,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P213",
      "questionType": "填空题",
      "stem": "已知 \\(\\displaystyle \\lim_{x\\to3}\\frac{x^3-3x^2+bx^2+x-3bx-3}{x+a}=25\\)，则 \\(ab=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 10
    },
    {
      "id": "高等数学-ch01-u006-p008",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 8,
      "printedPage": 9,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P215",
      "questionType": "选择题",
      "stem": "设 \\(\\displaystyle f(x)=\\lim_{n\\to\\infty}n^x\\left[\\left(1+\\frac1n\\right)^n-e\\right]\\)，则 \\(f(x)\\) 在 \\(x=1\\) 处（ ）。",
      "options": [
        {
          "label": "A",
          "text": "左极限存在，右极限不存在"
        },
        {
          "label": "B",
          "text": "左极限不存在，右极限存在"
        },
        {
          "label": "C",
          "text": "左、右极限都存在，但不相等"
        },
        {
          "label": "D",
          "text": "连续"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 13
    },
    {
      "id": "高等数学-ch01-u007-p008",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 8,
      "printedPage": 9,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "方法不熟",
      "tags": [
        "函数极限与连续",
        "历史对话导入",
        "泰勒展开",
        "指数型极限",
        "代数提取因子"
      ],
      "note": "",
      "sourceRef": "P215",
      "questionType": "计算题",
      "stem": "计算：\\(\\displaystyle \\lim_{x\\to+\\infty}\\left[\\frac{x^{x+1}}{(1+x)^x}-\\frac{x}{e}\\right]\\)。",
      "options": [],
      "answer": "\\(\\frac1{2e}\\)。",
      "analysis": "原式为 \\(\\frac xe\\{\\exp[1-x\\ln(1+1/x)]-1\\}\\)。因 \\(1-x\\ln(1+1/x)=\\frac1{2x}+O(x^{-2})\\)，再用 \\(e^t-1\\sim t\\)，得极限 \\(1/(2e)\\)。",
      "errorCause": "提取 \\(x/e\\) 时把括号内应补的因子 \\(e\\) 写成 \\(1/e\\)，同时混淆指数中的常数项。",
      "knowledgePoints": [
        "函数极限与连续",
        "泰勒展开",
        "指数型极限",
        "代数提取因子"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "kind": "history-conversation",
          "date": "2026-07-26",
          "verification": "历史订正检索与现有原题交叉核对",
          "sourceLabel": "历史订正：第14题"
        }
      ],
      "answerVerification": "本次独立推导复核",
      "errorCauseEvidence": "历史订正检索；保留原题正文",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "c6f3dbf691f474488dab199e92cd7c0795aa57ae2ca7a19515b0e5ee866a41e7",
      "questionNo": 14
    },
    {
      "id": "高等数学-ch01-u008-p009",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 9,
      "printedPage": 10,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P215",
      "questionType": "选择题",
      "stem": "设函数 \\(f(x)\\) 在 \\(x=0\\) 的某邻域内有定义，且 \\(\\displaystyle \\lim_{x\\to0}\\frac{x-f(x)}{\\ln(1+x)}=1\\)。判断下列叙述：① \\(f(0)=0\\)；② \\(\\displaystyle \\lim_{x\\to0}f(x)=f(0)\\)；③ \\(\\displaystyle \\lim_{x\\to0}\\frac{f(x)}x=1\\)；④ 当 \\(x\\to0\\) 时，\\(f(x)\\) 是 \\(x\\) 的高阶无穷小。正确叙述的个数为（ ）。",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "2"
        },
        {
          "label": "C",
          "text": "3"
        },
        {
          "label": "D",
          "text": "4"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 17
    },
    {
      "id": "高等数学-ch01-u009-p010",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 10,
      "printedPage": 11,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P216",
      "questionType": "选择题",
      "stem": "函数 \\(f(x)\\) 在 \\(x=0\\) 的某邻域内有定义，则“\\(\\displaystyle \\lim_{x\\to0}\\frac{|f(x)|}{x}\\) 存在”是“\\(\\displaystyle \\lim_{x\\to0}\\frac{f(x)}x=0\\)”的（ ）。",
      "options": [
        {
          "label": "A",
          "text": "充分必要条件"
        },
        {
          "label": "B",
          "text": "充分非必要条件"
        },
        {
          "label": "C",
          "text": "必要非充分条件"
        },
        {
          "label": "D",
          "text": "既非充分又非必要条件"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 18
    },
    {
      "id": "高等数学-ch01-u010-p011",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 11,
      "printedPage": 12,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P216",
      "questionType": "计算题",
      "stem": "设函数 \\(f(x)\\) 在点 \\(x=0\\) 的某一邻域内可导，且 \\(f(0)=0\\)，\\(f'(0)\\ne0\\)。求 \\(\\displaystyle \\lim_{x\\to0}\\frac{\\int_0^{x^2}f(t)\\,\\mathrm dt}{x^2\\int_0^x f(t)\\,\\mathrm dt}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 20
    },
    {
      "id": "高等数学-ch01-u011-p013",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 13,
      "printedPage": 14,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P218",
      "questionType": "选择题",
      "stem": "当 \\(x\\to0\\) 时，\\((3+2\\tan x)^x-3^x\\) 是 \\(3\\sin^2x+x^3\\cos\\frac1x\\) 的（ ）。",
      "options": [
        {
          "label": "A",
          "text": "高阶无穷小"
        },
        {
          "label": "B",
          "text": "低阶无穷小"
        },
        {
          "label": "C",
          "text": "等价无穷小"
        },
        {
          "label": "D",
          "text": "同阶但非等价无穷小"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 25
    },
    {
      "id": "高等数学-ch01-u012-p015",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 15,
      "printedPage": 16,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P220",
      "questionType": "计算题",
      "stem": "已知 \\(\\displaystyle \\lim_{x\\to0}\\left[a\\frac{2+e^{1/x}}{1+e^{4/x}}+(1+|x|)^{1/x}\\right]\\) 存在，求 \\(a\\) 的值。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 32
    },
    {
      "id": "高等数学-ch01-u013-p016",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 16,
      "printedPage": 17,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P220",
      "questionType": "选择题",
      "stem": "设函数 \\(\\displaystyle f(x)=\\sqrt{\\frac{1+x}{1-x}}\\) 在 \\(x=0\\) 处的二阶泰勒多项式为 \\(a+bx+cx^2\\)，则（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(a=1,b=1,c=1\\)"
        },
        {
          "label": "B",
          "text": "\\(a=1,b=1,c=\\frac12\\)"
        },
        {
          "label": "C",
          "text": "\\(a=0,b=-1,c=\\frac12\\)"
        },
        {
          "label": "D",
          "text": "\\(a=0,b=-1,c=1\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 33
    },
    {
      "id": "高等数学-ch01-u014-p016",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 16,
      "printedPage": 17,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P220",
      "questionType": "选择题",
      "stem": "设 \\(f(x)\\) 在 \\((0,+\\infty)\\) 内可导，\\(a\\) 为常数。判断：① 若 \\(\\displaystyle \\lim_{x\\to+\\infty}f'(x)=a\\)，则 \\(\\displaystyle \\lim_{x\\to+\\infty}\\frac{f(x)}x=a\\)；② 若 \\(\\displaystyle \\lim_{x\\to+\\infty}\\frac{f(x)}x=a\\)，则 \\(\\displaystyle \\lim_{x\\to+\\infty}f'(x)=a\\)。以下正确的是（ ）。",
      "options": [
        {
          "label": "A",
          "text": "①正确，②错误"
        },
        {
          "label": "B",
          "text": "①错误，②正确"
        },
        {
          "label": "C",
          "text": "①与②均正确"
        },
        {
          "label": "D",
          "text": "①与②均错误"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 34
    },
    {
      "id": "高等数学-ch01-u015-p017",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 17,
      "printedPage": 18,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P221",
      "questionType": "选择题",
      "stem": "函数 \\(\\displaystyle f(x)=\\frac{|\\ln|x||}{x^2-1}\\) 有（ ）。",
      "options": [
        {
          "label": "A",
          "text": "两个跳跃间断点，一个无穷间断点"
        },
        {
          "label": "B",
          "text": "两个可去间断点，一个无穷间断点"
        },
        {
          "label": "C",
          "text": "一个可去间断点，一个跳跃间断点，一个无穷间断点"
        },
        {
          "label": "D",
          "text": "三个无穷间断点"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 35
    },
    {
      "id": "高等数学-ch01-u016-p018",
      "subject": "高等数学",
      "chapter": 1,
      "chapterTitle": "函数极限与连续",
      "sourcePage": 18,
      "printedPage": 19,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "函数极限与连续"
      ],
      "note": "",
      "sourceRef": "P222",
      "questionType": "选择题",
      "stem": "函数 \\(\\displaystyle f(x)=|x-1|^{\\frac{1}{x(2-x)}}\\) 的第二类间断点的个数是（ ）。",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "3"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "函数极限与连续"
      ],
      "similarQuestionPrompt": "围绕“函数极限与连续”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 37
    },
    {
      "id": "高等数学-ch02-u017-p020",
      "subject": "高等数学",
      "chapter": 2,
      "chapterTitle": "数列极限",
      "sourcePage": 20,
      "printedPage": 21,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "数列极限"
      ],
      "note": "",
      "sourceRef": "P223",
      "questionType": "选择题",
      "stem": "已知数列 \\(\\{a_n\\}\\) 发散，\\(b_n=a_ne^{a_n}\\)，则（ ）。",
      "options": [
        {
          "label": "A",
          "text": "当 \\(a_n>0\\) 时，\\(\\{b_n\\}\\) 收敛"
        },
        {
          "label": "B",
          "text": "当 \\(a_n<0\\) 时，\\(\\{b_n\\}\\) 收敛"
        },
        {
          "label": "C",
          "text": "当 \\(a_n>0\\) 时，\\(\\{b_n\\}\\) 发散"
        },
        {
          "label": "D",
          "text": "当 \\(a_n<0\\) 时，\\(\\{b_n\\}\\) 发散"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "数列极限"
      ],
      "similarQuestionPrompt": "围绕“数列极限”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 3
    },
    {
      "id": "高等数学-ch02-u018-p020",
      "subject": "高等数学",
      "chapter": 2,
      "chapterTitle": "数列极限",
      "sourcePage": 20,
      "printedPage": 21,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "数列极限"
      ],
      "note": "",
      "sourceRef": "P223",
      "questionType": "选择题",
      "stem": "设 \\(\\displaystyle a_n=\\int_0^1x^n\\sqrt{1-x^2}\\,\\mathrm dx\\)，\\(\\displaystyle b_n=\\int_0^{\\pi/2}\\sin^n t\\,\\mathrm dt\\)，则 \\(\\displaystyle \\lim_{n\\to\\infty}\\left[\\frac{(n+1)a_n}{b_n}\\right]^n=\\)（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(0\\)"
        },
        {
          "label": "B",
          "text": "\\(e\\)"
        },
        {
          "label": "C",
          "text": "\\(e^{-1}\\)"
        },
        {
          "label": "D",
          "text": "\\(+\\infty\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "数列极限"
      ],
      "similarQuestionPrompt": "围绕“数列极限”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 4
    },
    {
      "id": "高等数学-ch02-u019-p022",
      "subject": "高等数学",
      "chapter": 2,
      "chapterTitle": "数列极限",
      "sourcePage": 22,
      "printedPage": 23,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "数列极限"
      ],
      "note": "",
      "sourceRef": "P224",
      "questionType": "证明计算题",
      "stem": "设数列 \\(\\{x_n\\}\\) 满足 \\(0<x_n<\\frac\\pi2\\)，\\(\\cos x_{n+1}-x_{n+1}=\\cos x_n\\)，\\(n=1,2,\\ldots\\)。(1) 证明 \\(\\displaystyle \\lim_{n\\to\\infty}x_n\\) 存在并求其值；(2) 计算 \\(\\displaystyle \\lim_{n\\to\\infty}\\frac{x_{n+1}}{x_n^2}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "数列极限"
      ],
      "similarQuestionPrompt": "围绕“数列极限”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 7
    },
    {
      "id": "高等数学-ch02-u020-p023",
      "subject": "高等数学",
      "chapter": 2,
      "chapterTitle": "数列极限",
      "sourcePage": 23,
      "printedPage": 24,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "数列极限"
      ],
      "note": "",
      "sourceRef": "P226",
      "questionType": "计算题",
      "stem": "设数列 \\(\\{a_n\\}\\) 的通项为 \\(\\displaystyle a_n=\\int_0^{+\\infty}\\frac{\\mathrm dx}{(1+x^2)^n}\\)，\\(n=2,3,\\ldots\\)。计算 \\(\\displaystyle \\lim_{n\\to\\infty}\\left(\\frac{a_{n+1}}{a_n}\\right)^{\\ln(1+e^n)}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "数列极限"
      ],
      "similarQuestionPrompt": "围绕“数列极限”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 10
    },
    {
      "id": "高等数学-ch03-u021-p025",
      "subject": "高等数学",
      "chapter": 3,
      "chapterTitle": "一元函数微分学的概念",
      "sourcePage": 25,
      "printedPage": 26,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的概念"
      ],
      "note": "",
      "sourceRef": "P227",
      "questionType": "选择题",
      "stem": "函数 \\(f(x)=(e^x-1)|x^3-x^2+x|\\) 的不可导点的个数为（ ）。",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "3"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的概念"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的概念”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 1
    },
    {
      "id": "高等数学-ch03-u022-p025",
      "subject": "高等数学",
      "chapter": 3,
      "chapterTitle": "一元函数微分学的概念",
      "sourcePage": 25,
      "printedPage": 26,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的概念"
      ],
      "note": "",
      "sourceRef": "P227",
      "questionType": "选择题",
      "stem": "设 \\(f(x+x_0)=\\alpha f(x)\\) 恒成立，\\(f'(0)=\\beta\\)，其中 \\(\\alpha,\\beta\\) 为非零常数，则 \\(f(x)\\) 在点 \\(x_0\\) 处（ ）。",
      "options": [
        {
          "label": "A",
          "text": "可导且 \\(f'(x_0)=\\alpha\\beta\\)"
        },
        {
          "label": "B",
          "text": "可导且 \\(f'(x_0)=\\alpha\\)"
        },
        {
          "label": "C",
          "text": "可导且 \\(f'(x_0)=\\beta\\)"
        },
        {
          "label": "D",
          "text": "不可导"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的概念"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的概念”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 2
    },
    {
      "id": "高等数学-ch03-u023-p026",
      "subject": "高等数学",
      "chapter": 3,
      "chapterTitle": "一元函数微分学的概念",
      "sourcePage": 26,
      "printedPage": 27,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的概念"
      ],
      "note": "",
      "sourceRef": "P227",
      "questionType": "选择题",
      "stem": "设 \\(\\displaystyle f(x)=\\begin{cases}x^2\\sin\\frac{t}{x},&x\\ne0,\\\\0,&x=0,\\end{cases}\\) 其中 \\(t\\) 为非零常数，则 \\(f(x)\\) 在 \\(x=0\\) 处（ ）。",
      "options": [
        {
          "label": "A",
          "text": "不连续"
        },
        {
          "label": "B",
          "text": "连续但不可导"
        },
        {
          "label": "C",
          "text": "可导但 \\(f'(x)\\) 不连续"
        },
        {
          "label": "D",
          "text": "可导且 \\(f'(x)\\) 连续"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的概念"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的概念”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 3
    },
    {
      "id": "高等数学-ch03-u024-p027",
      "subject": "高等数学",
      "chapter": 3,
      "chapterTitle": "一元函数微分学的概念",
      "sourcePage": 27,
      "printedPage": 28,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的概念"
      ],
      "note": "",
      "sourceRef": "P228",
      "questionType": "选择题",
      "stem": "设函数 \\(y=f(x)\\) 由参数方程 \\(\\displaystyle \\begin{cases}x=t^3+\\frac\\pi2-1,\\\\y=e^{t^2}\\end{cases}\\) 确定，则 \\(\\displaystyle \\lim_{n\\to\\infty}n\\left[f\\left(\\frac\\pi2+\\frac2n\\right)-f\\left(\\frac\\pi2\\right)\\right]=\\)（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(2e\\)"
        },
        {
          "label": "B",
          "text": "\\(\\frac{4e}{3}\\)"
        },
        {
          "label": "C",
          "text": "\\(\\frac{2e}{3}\\)"
        },
        {
          "label": "D",
          "text": "\\(\\frac{e}{3}\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的概念"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的概念”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 6
    },
    {
      "id": "高等数学-ch03-u025-p028",
      "subject": "高等数学",
      "chapter": 3,
      "chapterTitle": "一元函数微分学的概念",
      "sourcePage": 28,
      "printedPage": 29,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的概念"
      ],
      "note": "",
      "sourceRef": "P228",
      "questionType": "计算题",
      "stem": "设 \\(f(0)=a>0\\)，\\(f'(0)=b\\)，求 \\(\\displaystyle \\lim_{x\\to0}\\frac{f(x)^{f(x)}-f(0)^{f(x)}}{x}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的概念"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的概念”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 7
    },
    {
      "id": "高等数学-ch03-u026-p030",
      "subject": "高等数学",
      "chapter": 3,
      "chapterTitle": "一元函数微分学的概念",
      "sourcePage": 30,
      "printedPage": 31,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的概念"
      ],
      "note": "",
      "sourceRef": "P230",
      "questionType": "证明计算题",
      "stem": "设 \\(f(x)\\) 有二阶连续导函数，且 \\(f(0)=0\\)，令 \\(\\displaystyle g(x)=\\begin{cases}\\frac{f(x)}x,&x\\ne0,\\\\f'(0),&x=0.\\end{cases}\\) (1) 求 \\(g'(x)\\)；(2) 讨论 \\(g'(x)\\) 在点 \\(x=0\\) 处的连续性。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的概念"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的概念”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 11
    },
    {
      "id": "高等数学-ch03-u027-p030",
      "subject": "高等数学",
      "chapter": 3,
      "chapterTitle": "一元函数微分学的概念",
      "sourcePage": 30,
      "printedPage": 31,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的概念"
      ],
      "note": "",
      "sourceRef": "P230",
      "questionType": "讨论题",
      "stem": "设 \\(\\displaystyle f(x)=\\begin{cases}x\\arctan\\frac1{\\sqrt{x}},&x>0,\\\\\\frac\\pi2(e^{\\sin x}-1),&x\\le0.\\end{cases}\\) 讨论 \\(f(x)\\) 在点 \\(x=0\\) 处的连续性和可导性；若可导，讨论其导函数 \\(f'(x)\\) 在 \\(x=0\\) 处的连续性。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的概念"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的概念”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 12
    },
    {
      "id": "高等数学-ch03-u028-p032",
      "subject": "高等数学",
      "chapter": 3,
      "chapterTitle": "一元函数微分学的概念",
      "sourcePage": 32,
      "printedPage": 33,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的概念"
      ],
      "note": "",
      "sourceRef": "P232",
      "questionType": "选择题",
      "stem": "设 \\(f(x)\\) 在 \\(x=a\\) 的某邻域内有定义，在 \\(x=a\\) 的某去心邻域内可导，下述论断正确的是（ ）。",
      "options": [
        {
          "label": "A",
          "text": "若 \\(\\displaystyle \\lim_{x\\to a}f'(x)=A\\)，则 \\(f'(a)=A\\)"
        },
        {
          "label": "B",
          "text": "若 \\(f'(a)=A\\)，则 \\(\\displaystyle \\lim_{x\\to a}f'(x)=A\\)"
        },
        {
          "label": "C",
          "text": "若 \\(\\displaystyle \\lim_{x\\to a}f'(x)=\\infty\\)，则 \\(f'(a)\\) 不存在"
        },
        {
          "label": "D",
          "text": "若 \\(f'(a)\\) 不存在，则 \\(\\displaystyle \\lim_{x\\to a}f'(x)=\\infty\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的概念"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的概念”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 17
    },
    {
      "id": "高等数学-ch03-u029-p033",
      "subject": "高等数学",
      "chapter": 3,
      "chapterTitle": "一元函数微分学的概念",
      "sourcePage": 33,
      "printedPage": 34,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的概念"
      ],
      "note": "",
      "sourceRef": "P233",
      "questionType": "填空题",
      "stem": "设 \\(\\displaystyle f(x)=\\frac{\\ln|x|}{2x^2-\\ln|x|}\\)，则 \\(f'(-1)=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的概念"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的概念”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 18
    },
    {
      "id": "高等数学-ch04-u030-p035",
      "subject": "高等数学",
      "chapter": 4,
      "chapterTitle": "一元函数微分学的计算",
      "sourcePage": 35,
      "printedPage": 36,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的计算"
      ],
      "note": "",
      "sourceRef": "P235",
      "questionType": "计算题",
      "stem": "设 \\(f(x)\\) 在 \\(x=0\\) 的某邻域内具有连续导数，且 \\(f(0)=1\\)，\\(\\displaystyle f'(x)=\\frac12f(x)[f(x)-1]\\)，求 \\(f''(0)\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的计算"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的计算”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 2
    },
    {
      "id": "高等数学-ch04-u031-p038",
      "subject": "高等数学",
      "chapter": 4,
      "chapterTitle": "一元函数微分学的计算",
      "sourcePage": 38,
      "printedPage": 39,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的计算"
      ],
      "note": "",
      "sourceRef": "P236",
      "questionType": "填空题",
      "stem": "设 \\(y=y(x)\\) 由方程 \\(\\displaystyle x=\\int_1^{y-x}\\sin^2\\left(\\frac{\\pi}{4}t\\right)\\mathrm dt\\) 确定，则 \\(\\displaystyle \\left.\\frac{\\mathrm d^2y}{\\mathrm dx^2}\\right|_{x=0}=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的计算"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的计算”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 8
    },
    {
      "id": "高等数学-ch04-u032-p038",
      "subject": "高等数学",
      "chapter": 4,
      "chapterTitle": "一元函数微分学的计算",
      "sourcePage": 38,
      "printedPage": 39,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的计算"
      ],
      "note": "",
      "sourceRef": "P236",
      "questionType": "填空题",
      "stem": "设函数 \\(y=y(x)\\) 由 \\(\\displaystyle \\begin{cases}x=t^2-2t+1,\\\\e^y\\sin t-y+1=0\\end{cases}\\) 确定，则 \\(\\displaystyle \\left.\\frac{\\mathrm d^2y}{\\mathrm dx^2}\\right|_{t=0}=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的计算"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的计算”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 9
    },
    {
      "id": "高等数学-ch04-u033-p038",
      "subject": "高等数学",
      "chapter": 4,
      "chapterTitle": "一元函数微分学的计算",
      "sourcePage": 38,
      "printedPage": 39,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的计算"
      ],
      "note": "",
      "sourceRef": "P237",
      "questionType": "填空题",
      "stem": "设 \\(x=x(y)\\) 由方程 \\(\\displaystyle y=\\int_1^{x-y}\\cos^2\\left(\\frac{\\pi t}{4}\\right)\\mathrm dt\\) 确定，则 \\(\\displaystyle \\lim_{n\\to\\infty}\\left[nx\\left(\\frac1n\\right)-n\\right]=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的计算"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的计算”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 10
    },
    {
      "id": "高等数学-ch04-u034-p039",
      "subject": "高等数学",
      "chapter": 4,
      "chapterTitle": "一元函数微分学的计算",
      "sourcePage": 39,
      "printedPage": 40,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的计算"
      ],
      "note": "",
      "sourceRef": "P237",
      "questionType": "填空题",
      "stem": "设 \\(f(x)=\\ln(1+x+x^2)\\)，则 \\(f^{(5)}(0)=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的计算"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的计算”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 13
    },
    {
      "id": "高等数学-ch04-u035-p040",
      "subject": "高等数学",
      "chapter": 4,
      "chapterTitle": "一元函数微分学的计算",
      "sourcePage": 40,
      "printedPage": 41,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的计算"
      ],
      "note": "",
      "sourceRef": "P237",
      "questionType": "填空题",
      "stem": "设 \\(\\displaystyle f(x)=\\frac{1+x+x^2}{1-x+x^2}\\)，则 \\(f^{(4)}(0)=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的计算"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的计算”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 14
    },
    {
      "id": "高等数学-ch04-u036-p040",
      "subject": "高等数学",
      "chapter": 4,
      "chapterTitle": "一元函数微分学的计算",
      "sourcePage": 40,
      "printedPage": 41,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的计算"
      ],
      "note": "",
      "sourceRef": "P238",
      "questionType": "填空题",
      "stem": "设 \\(\\displaystyle f(x)=\\arctan\\frac{1+x}{1-x}\\)，整数 \\(n\\ge0\\)，则 \\(f^{(2n+1)}(0)=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的计算"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的计算”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 15
    },
    {
      "id": "高等数学-ch04-u037-p040",
      "subject": "高等数学",
      "chapter": 4,
      "chapterTitle": "一元函数微分学的计算",
      "sourcePage": 40,
      "printedPage": 41,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的计算"
      ],
      "note": "",
      "sourceRef": "P238",
      "questionType": "选择题",
      "stem": "设 \\(f(x)=|x|\\sin^2x\\)，则使 \\(f^{(n)}(0)\\) 存在的阶数 \\(n\\) 的最大值为（ ）。",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "2"
        },
        {
          "label": "C",
          "text": "3"
        },
        {
          "label": "D",
          "text": "4"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的计算"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的计算”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 16
    },
    {
      "id": "高等数学-ch05-u038-p041",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 41,
      "printedPage": 42,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P239",
      "questionType": "选择题",
      "stem": "设 \\(f(x)=|\\ln|x||\\)，则（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(x=1\\) 不是 \\(f(x)\\) 的极值点"
        },
        {
          "label": "B",
          "text": "\\((1,0)\\) 不是 \\(y=f(x)\\) 的拐点"
        },
        {
          "label": "C",
          "text": "\\(x=-1\\) 不是 \\(f(x)\\) 的驻点"
        },
        {
          "label": "D",
          "text": "\\(x=0\\) 不是 \\(y=f(x)\\) 的渐近线"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 1
    },
    {
      "id": "高等数学-ch05-u039-p042",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 42,
      "printedPage": 43,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P241",
      "questionType": "选择题",
      "stem": "设函数 \\(f(x)=(x^2+a)e^x\\)。若 \\(f(x)\\) 既没有极值点也没有拐点，则 \\(a\\) 的取值范围是（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\([0,1)\\)"
        },
        {
          "label": "B",
          "text": "\\([1,+\\infty)\\)"
        },
        {
          "label": "C",
          "text": "\\([1,2)\\)"
        },
        {
          "label": "D",
          "text": "\\([2,+\\infty)\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 4
    },
    {
      "id": "高等数学-ch05-u040-p042",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 42,
      "printedPage": 43,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P241",
      "questionType": "填空题",
      "stem": "设 \\(e^{ax}\\ge1+x\\) 对任意实数 \\(x\\) 均成立，则 \\(a\\) 的取值范围为 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 6
    },
    {
      "id": "高等数学-ch05-u041-p043",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 43,
      "printedPage": 44,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P241",
      "questionType": "选择题",
      "stem": "设函数 \\(\\displaystyle f(x)=\\int_0^1|t(t-x)|\\,\\mathrm dt\\)，\\(0<x<1\\)。则 \\(f(x)\\) 的单调区间及曲线 \\(y=f(x)\\) 的凹凸区间分别为（ ）。",
      "options": [
        {
          "label": "A",
          "text": "单调增区间 \\(\\left(\\frac{\\sqrt2}{2},1\\right)\\)，单调减区间 \\(\\left(0,\\frac{\\sqrt2}{2}\\right)\\)；在 \\((0,1)\\) 内曲线为凹"
        },
        {
          "label": "B",
          "text": "单调减区间 \\(\\left(\\frac{\\sqrt2}{2},1\\right)\\)，单调增区间 \\(\\left(0,\\frac{\\sqrt2}{2}\\right)\\)；在 \\((0,1)\\) 内曲线为凹"
        },
        {
          "label": "C",
          "text": "单调增区间 \\(\\left(\\frac{\\sqrt2}{2},1\\right)\\)，单调减区间 \\(\\left(0,\\frac{\\sqrt2}{2}\\right)\\)；在 \\((0,1)\\) 内曲线为凸"
        },
        {
          "label": "D",
          "text": "单调减区间 \\(\\left(\\frac{\\sqrt2}{2},1\\right)\\)，单调增区间 \\(\\left(0,\\frac{\\sqrt2}{2}\\right)\\)；在 \\((0,1)\\) 内曲线为凸"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 7
    },
    {
      "id": "高等数学-ch05-u042-p046",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 46,
      "printedPage": 47,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P243",
      "questionType": "选择题",
      "stem": "设函数 \\(f(x),g(x)\\) 在 \\([a,b]\\) 上连续，在 \\((a,b)\\) 内可导，且 \\(g'(x)>0\\)。则在 \\((a,b)\\) 上，“\\(\\displaystyle \\frac{f'(x)}{g'(x)}\\) 严格单调递增”是“\\(\\displaystyle \\frac{f(x)-f(a)}{g(x)-g(a)}\\) 严格单调递增”的（ ）。",
      "options": [
        {
          "label": "A",
          "text": "充分非必要条件"
        },
        {
          "label": "B",
          "text": "必要非充分条件"
        },
        {
          "label": "C",
          "text": "充分必要条件"
        },
        {
          "label": "D",
          "text": "既非充分又非必要条件"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 14
    },
    {
      "id": "高等数学-ch05-u043-p047",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 47,
      "printedPage": 48,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P244",
      "questionType": "选择题",
      "stem": "曲线 \\(y=(5x-3)e^{-1/x}\\) 有渐近线（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(x=0,\\ y=5x+2\\)"
        },
        {
          "label": "B",
          "text": "\\(x=0,\\ y=5x-8\\)"
        },
        {
          "label": "C",
          "text": "\\(x=0,\\ y=5x-3\\)"
        },
        {
          "label": "D",
          "text": "\\(x=0,\\ y=5x-2\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 15
    },
    {
      "id": "高等数学-ch05-u044-p047",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 47,
      "printedPage": 48,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P245",
      "questionType": "选择题",
      "stem": "曲线 \\(\\displaystyle y=\\frac{\\sqrt{x^2-x+1}}{e^x-1}\\) 的渐近线共有（ ）。",
      "options": [
        {
          "label": "A",
          "text": "1 条"
        },
        {
          "label": "B",
          "text": "2 条"
        },
        {
          "label": "C",
          "text": "3 条"
        },
        {
          "label": "D",
          "text": "4 条或 4 条以上"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 16
    },
    {
      "id": "高等数学-ch05-u045-p047",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 47,
      "printedPage": 48,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P245",
      "questionType": "选择题",
      "stem": "极坐标曲线 \\(r(3\\theta-\\pi)=1\\) 的斜渐近线为（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(y=\\sqrt2x-\\frac32\\)"
        },
        {
          "label": "B",
          "text": "\\(y=\\sqrt2x+\\frac32\\)"
        },
        {
          "label": "C",
          "text": "\\(y=\\sqrt3x-\\frac23\\)"
        },
        {
          "label": "D",
          "text": "\\(y=\\sqrt3x+\\frac23\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 17
    },
    {
      "id": "高等数学-ch05-u046-p048",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 48,
      "printedPage": 49,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P246",
      "questionType": "计算题",
      "stem": "求曲线 \\(\\displaystyle y=x^2\\left[\\frac{\\left(1+\\frac1x\\right)^x}{e}-1\\right]\\)，\\(x>0\\) 的斜渐近线。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 19
    },
    {
      "id": "高等数学-ch05-u047-p048",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 48,
      "printedPage": 49,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P246",
      "questionType": "选择题",
      "stem": "设函数 \\(f(x)\\) 在 \\(x=2\\) 的某邻域内连续，且 \\(\\displaystyle \\lim_{x\\to0}\\frac{\\ln\\left[f(x+2)+e^{x^2}\\right]}{1-\\cos x}=4\\)，则 \\(x=2\\) 是 \\(f(x)\\) 的（ ）。",
      "options": [
        {
          "label": "A",
          "text": "不可导点"
        },
        {
          "label": "B",
          "text": "驻点且是极大值点"
        },
        {
          "label": "C",
          "text": "驻点且是极小值点"
        },
        {
          "label": "D",
          "text": "可导点但不是驻点"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 20
    },
    {
      "id": "高等数学-ch05-u048-p049",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 49,
      "printedPage": 50,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P246",
      "questionType": "选择题",
      "stem": "设函数 \\(f(x)\\) 在 \\(( -\\infty,+\\infty)\\) 内连续，其一阶导函数 \\(f'(x)\\) 的图形具有如下特征：在 \\(x<0\\) 时为开口向上的曲线，与横轴有两个交点且有一个极小点；在 \\(x>0\\) 时 \\(f'(x)\\) 从正值严格下降，经过横轴后继续为负；\\(f'(x)\\) 存在处 \\(f''(x)\\) 也存在。则曲线 \\(y=f(x)\\) 的拐点个数为（ ）。",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "2"
        },
        {
          "label": "C",
          "text": "3"
        },
        {
          "label": "D",
          "text": "4"
        }
      ],
      "transcriptionNote": "原题含 f'(x) 示意图，已转写为图形的定性特征。",
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 21
    },
    {
      "id": "高等数学-ch05-u049-p050",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 50,
      "printedPage": 51,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P248",
      "questionType": "填空题",
      "stem": "设 \\(y=\\tan^n x\\) 在 \\(x=\\frac\\pi4\\) 处的切线在 \\(x\\) 轴上的截距为 \\(x_n\\)，则 \\(\\displaystyle \\lim_{n\\to\\infty}y(x_n)=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 24
    },
    {
      "id": "高等数学-ch05-u050-p051",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 51,
      "printedPage": 52,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P248",
      "questionType": "计算题",
      "stem": "过椭圆 \\(\\displaystyle \\frac{x^2}{4}+y^2=1\\)，\\(x>0,y>0\\) 上任意一点作该曲线的切线。切线夹在两坐标轴之间的部分为 \\(L\\)。求 \\(L\\) 的最小长度，以及 \\(L\\) 的长度达到最小时的切点坐标。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 25
    },
    {
      "id": "高等数学-ch05-u051-p051",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 51,
      "printedPage": 52,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P250",
      "questionType": "计算题",
      "stem": "求 \\(\\displaystyle f(x)=\\int_0^1|\\ln|x-t||\\,\\mathrm dt\\)，\\(0\\le x\\le1\\) 的最大值。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 26
    },
    {
      "id": "高等数学-ch05-u052-p052",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 52,
      "printedPage": 53,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P250",
      "questionType": "计算题",
      "stem": "设 \\(y=y(x)\\) 满足微分方程 \\((xy'-2)\\ln x+y=0\\)，\\(y(e)=2\\)。(1) 求 \\(y=y(x)\\) 的表达式及其定义域；(2) 求函数 \\(y=y(x)\\) 的极值。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 27
    },
    {
      "id": "高等数学-ch05-u053-p054",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 54,
      "printedPage": 55,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P251",
      "questionType": "填空题",
      "stem": "设函数 \\(y=y(x)\\) 由参数方程 \\(\\displaystyle \\begin{cases}x=2e^t+t+1,\\\\y=4(t-1)e^t+t^2\\end{cases}\\) 确定，则曲线 \\(y=y(x)\\) 在 \\(t=0\\) 对应点处的曲率为 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 31
    },
    {
      "id": "高等数学-ch05-u054-p054",
      "subject": "高等数学",
      "chapter": 5,
      "chapterTitle": "一元函数微分学的应用（一）—几何应用",
      "sourcePage": 54,
      "printedPage": 55,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P252",
      "questionType": "填空题",
      "stem": "设圆与曲线 \\(x=y^2\\) 在 \\((0,0)\\) 处有公切线，且它们关于 \\(y\\) 的二阶导数值相同，则该圆的方程为 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 33
    },
    {
      "id": "高等数学-ch06-u055-p055",
      "subject": "高等数学",
      "chapter": 6,
      "chapterTitle": "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式",
      "sourcePage": 55,
      "printedPage": 56,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "note": "",
      "sourceRef": "P253",
      "questionType": "选择题",
      "stem": "设 \\(f(x)\\) 在 \\((0,+\\infty)\\) 内可导。判断：① 若 \\(\\displaystyle \\lim_{x\\to+\\infty}f(x)\\) 存在，且 \\(\\displaystyle \\lim_{x\\to+\\infty}f'(x)\\) 存在，则 \\(\\displaystyle \\lim_{x\\to+\\infty}f'(x)=0\\)；② 若 \\(\\displaystyle \\lim_{x\\to+\\infty}[f(x)+f'(x)]\\) 存在，则 \\(\\displaystyle \\lim_{x\\to+\\infty}f'(x)=0\\)。正确的是（ ）。",
      "options": [
        {
          "label": "A",
          "text": "①正确，②错误"
        },
        {
          "label": "B",
          "text": "①错误，②正确"
        },
        {
          "label": "C",
          "text": "①与②均正确"
        },
        {
          "label": "D",
          "text": "①与②均错误"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（二）—中值定理、微分等式与微分不等式”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 2
    },
    {
      "id": "高等数学-ch06-u056-p056",
      "subject": "高等数学",
      "chapter": 6,
      "chapterTitle": "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式",
      "sourcePage": 56,
      "printedPage": 57,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "note": "",
      "sourceRef": "P253",
      "questionType": "证明题",
      "stem": "设函数 \\(f(x)\\) 在 \\([0,+\\infty)\\) 上可导。(1) 若 \\(\\displaystyle f(0)=\\lim_{x\\to+\\infty}f(x)=0\\)，证明：存在 \\(\\xi\\in(0,+\\infty)\\)，使 \\(f'(\\xi)=0\\)；(2) 若 \\(\\displaystyle 0\\le f(x)\\le\\ln\\frac{2x+1}{x+\\sqrt{1+x^2}}\\)，证明：存在 \\(\\xi\\in(0,+\\infty)\\)，使 \\(\\displaystyle f'(\\xi)=\\frac{2}{2\\xi+1}-\\frac1{\\sqrt{1+\\xi^2}}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（二）—中值定理、微分等式与微分不等式”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 4
    },
    {
      "id": "高等数学-ch06-u057-p059",
      "subject": "高等数学",
      "chapter": 6,
      "chapterTitle": "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式",
      "sourcePage": 59,
      "printedPage": 60,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "note": "",
      "sourceRef": "P255",
      "questionType": "选择题",
      "stem": "若可导函数 \\(f(x)\\) 满足 \\(f'(x)<2f(x)\\)，则当 \\(b>a>0\\) 时，有（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(b^2f(a)>a^2f(b)\\)"
        },
        {
          "label": "B",
          "text": "\\(b^2f(\\ln a)>a^2f(\\ln b)\\)"
        },
        {
          "label": "C",
          "text": "\\(b^2f(a)<a^2f(b)\\)"
        },
        {
          "label": "D",
          "text": "\\(b^2f(\\ln a)<a^2f(\\ln b)\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（二）—中值定理、微分等式与微分不等式”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 9
    },
    {
      "id": "高等数学-ch06-u058-p060",
      "subject": "高等数学",
      "chapter": 6,
      "chapterTitle": "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式",
      "sourcePage": 60,
      "printedPage": 61,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "note": "",
      "sourceRef": "P256",
      "questionType": "证明题",
      "stem": "设 \\(f(x)\\) 在 \\([2,4]\\) 上二阶可导，且 \\(f'(x)\\ge M>0\\)，\\(f(2)>0\\)。证明：(1) 对任意 \\(x\\in[3,4]\\)，均有 \\(f(x)>M\\)；(2) 存在 \\(\\xi\\in(3,4)\\)，使 \\(\\displaystyle f(\\xi)>M\\frac{e^{\\xi-3}}{e-1}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（二）—中值定理、微分等式与微分不等式”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 11
    },
    {
      "id": "高等数学-ch06-u059-p061",
      "subject": "高等数学",
      "chapter": 6,
      "chapterTitle": "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式",
      "sourcePage": 61,
      "printedPage": 62,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "note": "",
      "sourceRef": "P256",
      "questionType": "选择题",
      "stem": "设函数 \\(f(x)\\) 在 \\([0,1]\\) 上二阶可导，且 \\(\\displaystyle \\int_0^1f(x)\\,\\mathrm dx=0\\)，则（ ）。",
      "options": [
        {
          "label": "A",
          "text": "当 \\(f'(x)<0\\) 时，\\(f(\\frac12)<0\\)"
        },
        {
          "label": "B",
          "text": "当 \\(f''(x)<0\\) 时，\\(f(\\frac12)<0\\)"
        },
        {
          "label": "C",
          "text": "当 \\(f'(x)>0\\) 时，\\(f(\\frac12)<0\\)"
        },
        {
          "label": "D",
          "text": "当 \\(f''(x)>0\\) 时，\\(f(\\frac12)<0\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（二）—中值定理、微分等式与微分不等式”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 13
    },
    {
      "id": "高等数学-ch06-u060-p062",
      "subject": "高等数学",
      "chapter": 6,
      "chapterTitle": "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式",
      "sourcePage": 62,
      "printedPage": 63,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "note": "",
      "sourceRef": "P258",
      "questionType": "计算题",
      "stem": "确定常数 \\(k\\) 的取值范围，使方程 \\(x-\\arctan x=kx^3\\) 在 \\((0,1]\\) 内有实根。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（二）—中值定理、微分等式与微分不等式”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 16
    },
    {
      "id": "高等数学-ch06-u061-p063",
      "subject": "高等数学",
      "chapter": 6,
      "chapterTitle": "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式",
      "sourcePage": 63,
      "printedPage": 64,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "note": "",
      "sourceRef": "P259",
      "questionType": "选择题",
      "stem": "设 \\(b>0>a\\)，则（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(ae^a(e^b-1)>be^b(e^a-1)\\)"
        },
        {
          "label": "B",
          "text": "\\(ae^a(e^b-1)<be^b(e^a-1)\\)"
        },
        {
          "label": "C",
          "text": "\\(be^a(e^b-1)>ae^b(e^a-1)\\)"
        },
        {
          "label": "D",
          "text": "\\(be^a(e^b-1)<ae^b(e^a-1)\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数微分学的应用（二）—中值定理、微分等式与微分不等式"
      ],
      "similarQuestionPrompt": "围绕“一元函数微分学的应用（二）—中值定理、微分等式与微分不等式”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 18
    },
    {
      "id": "高等数学-ch08-u062-p068",
      "subject": "高等数学",
      "chapter": 8,
      "chapterTitle": "一元函数积分学的概念与性质",
      "sourcePage": 68,
      "printedPage": 69,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的概念与性质"
      ],
      "note": "",
      "sourceRef": "P262",
      "questionType": "计算题",
      "stem": "计算 \\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^n\\frac{1-\\cos\\frac{\\pi}{\\sqrt n}}{1+\\cos\\frac{i\\pi}{2n}}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的概念与性质"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的概念与性质”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 1
    },
    {
      "id": "高等数学-ch08-u063-p068",
      "subject": "高等数学",
      "chapter": 8,
      "chapterTitle": "一元函数积分学的概念与性质",
      "sourcePage": 68,
      "printedPage": 69,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的概念与性质"
      ],
      "note": "",
      "sourceRef": "P263",
      "questionType": "选择题",
      "stem": "设 \\(f(x)\\) 连续，则 \\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{k=1}^n\\frac{k-\\frac12+n}{n^2}f\\left(\\frac{2k-1}{2n}\\right)=\\)（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(\\displaystyle \\int_0^1\\left(x+\\frac12\\right)f(x)\\,\\mathrm dx\\)"
        },
        {
          "label": "B",
          "text": "\\(\\displaystyle \\int_0^1\\left(x+1-\\frac1{2n}\\right)f\\left(x-\\frac1{2n}\\right)\\mathrm dx\\)"
        },
        {
          "label": "C",
          "text": "\\(\\displaystyle \\int_0^1(x+1)f(x)\\,\\mathrm dx\\)"
        },
        {
          "label": "D",
          "text": "\\(\\displaystyle \\int_0^1\\left(x+\\frac12+\\frac1n\\right)f\\left(x-\\frac1n\\right)\\mathrm dx\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的概念与性质"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的概念与性质”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 2
    },
    {
      "id": "高等数学-ch08-u064-p069",
      "subject": "高等数学",
      "chapter": 8,
      "chapterTitle": "一元函数积分学的概念与性质",
      "sourcePage": 69,
      "printedPage": 70,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的概念与性质"
      ],
      "note": "",
      "sourceRef": "P263",
      "questionType": "选择题",
      "stem": "设 \\(f(x)\\) 在 \\([0,1]\\) 上可积，则 \\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=0}^{n-1}\\ln\\left[1+\\frac1n f\\left(\\frac in\\right)\\right]=\\)（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(\\displaystyle \\int_0^1\\ln\\left[1+\\frac{f(x)}n\\right]\\mathrm dx\\)"
        },
        {
          "label": "B",
          "text": "\\(\\displaystyle \\int_0^1\\ln[1+f(x)]\\,\\mathrm dx\\)"
        },
        {
          "label": "C",
          "text": "\\(\\displaystyle \\int_0^1f(x)\\,\\mathrm dx\\)"
        },
        {
          "label": "D",
          "text": "\\(\\displaystyle \\int_0^1f^2(x)\\,\\mathrm dx\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的概念与性质"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的概念与性质”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 3
    },
    {
      "id": "高等数学-ch08-u065-p069",
      "subject": "高等数学",
      "chapter": 8,
      "chapterTitle": "一元函数积分学的概念与性质",
      "sourcePage": 69,
      "printedPage": 70,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的概念与性质"
      ],
      "note": "",
      "sourceRef": "P263",
      "questionType": "选择题",
      "stem": "记 \\(I_1=\\int_0^{2\\pi}\\frac{\\sin x}{x}\\,\\mathrm dx\\)，\\(I_2=\\int_0^{2\\pi}\\frac{\\sin x}{2\\pi-x}\\,\\mathrm dx\\)，\\(I_3=\\int_0^{2\\pi}\\frac{\\sin x}{x(2\\pi-x)}\\,\\mathrm dx\\)，则（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(I_3<I_1<I_2\\)"
        },
        {
          "label": "B",
          "text": "\\(I_3<I_2<I_1\\)"
        },
        {
          "label": "C",
          "text": "\\(I_2<I_3<I_1\\)"
        },
        {
          "label": "D",
          "text": "\\(I_1<I_2<I_3\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的概念与性质"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的概念与性质”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 4
    },
    {
      "id": "高等数学-ch08-u066-p070",
      "subject": "高等数学",
      "chapter": 8,
      "chapterTitle": "一元函数积分学的概念与性质",
      "sourcePage": 70,
      "printedPage": 71,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的概念与性质"
      ],
      "note": "",
      "sourceRef": "P264",
      "questionType": "选择题",
      "stem": "设 \\(f(x)=\\int_0^{|\\sin x|}e^{t^2}\\,\\mathrm dt\\)，\\(g(x)=\\int_0^{|x|}\\sin(t^2)\\,\\mathrm dt\\)，则在 \\((-\\pi,\\pi)\\) 内（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(f(x)\\) 是可导的奇函数"
        },
        {
          "label": "B",
          "text": "\\(g(x)\\) 是可导的偶函数"
        },
        {
          "label": "C",
          "text": "\\(f(x)\\) 是奇函数且 \\(f'(0)\\) 不存在"
        },
        {
          "label": "D",
          "text": "\\(g(x)\\) 是偶函数且 \\(g'(0)\\) 不存在"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的概念与性质"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的概念与性质”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 7
    },
    {
      "id": "高等数学-ch08-u067-p071",
      "subject": "高等数学",
      "chapter": 8,
      "chapterTitle": "一元函数积分学的概念与性质",
      "sourcePage": 71,
      "printedPage": 72,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的概念与性质"
      ],
      "note": "",
      "sourceRef": "P265",
      "questionType": "选择题",
      "stem": "设常数 \\(m>0,n>0\\)，则 \\(\\displaystyle \\int_0^n\\sqrt{x}\\left[\\frac mx\\right]\\mathrm dx\\)（\\([\\cdot]\\) 为取整符号）的敛散性（ ）。",
      "options": [
        {
          "label": "A",
          "text": "仅与 \\(m\\) 有关"
        },
        {
          "label": "B",
          "text": "仅与 \\(n\\) 有关"
        },
        {
          "label": "C",
          "text": "与 \\(m,n\\) 均有关"
        },
        {
          "label": "D",
          "text": "与 \\(m,n\\) 均无关"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的概念与性质"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的概念与性质”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 9
    },
    {
      "id": "高等数学-ch08-u068-p072",
      "subject": "高等数学",
      "chapter": 8,
      "chapterTitle": "一元函数积分学的概念与性质",
      "sourcePage": 72,
      "printedPage": 73,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的概念与性质"
      ],
      "note": "",
      "sourceRef": "P265",
      "questionType": "选择题",
      "stem": "设 \\(p,q\\) 为正常数。若 \\(\\displaystyle \\int_0^1\\frac{1}{x^p|\\ln x|^q}\\,\\mathrm dx\\) 收敛，则（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(p<1,q<1\\)"
        },
        {
          "label": "B",
          "text": "\\(p>1,q<1\\)"
        },
        {
          "label": "C",
          "text": "\\(p<1,q>1\\)"
        },
        {
          "label": "D",
          "text": "\\(p>1,q>1\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的概念与性质"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的概念与性质”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 10
    },
    {
      "id": "高等数学-ch08-u069-p073",
      "subject": "高等数学",
      "chapter": 8,
      "chapterTitle": "一元函数积分学的概念与性质",
      "sourcePage": 73,
      "printedPage": 74,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的概念与性质"
      ],
      "note": "",
      "sourceRef": "P266",
      "questionType": "选择题",
      "stem": "设非负函数 \\(f(x)\\) 在 \\([0,+\\infty)\\) 上具有有界导数。判断：① \\(\\int_0^{+\\infty}f^2(x)\\,\\mathrm dx\\) 收敛可推出 \\(\\int_0^{+\\infty}f(x)\\,\\mathrm dx\\) 收敛；② 后者收敛可推出前者收敛；③ 若 \\(\\lim_{x\\to+\\infty}x^2f(x)\\) 存在，则 \\(\\int_0^{+\\infty}f(x)\\,\\mathrm dx\\) 收敛；④ 若该积分收敛，则 \\(\\lim_{x\\to+\\infty}x^2f(x)\\) 存在。真命题个数为（ ）。",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "2"
        },
        {
          "label": "C",
          "text": "3"
        },
        {
          "label": "D",
          "text": "4"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的概念与性质"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的概念与性质”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 13
    },
    {
      "id": "高等数学-ch08-u070-p074",
      "subject": "高等数学",
      "chapter": 8,
      "chapterTitle": "一元函数积分学的概念与性质",
      "sourcePage": 74,
      "printedPage": 75,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的概念与性质"
      ],
      "note": "",
      "sourceRef": "P267",
      "questionType": "选择题",
      "stem": "下列反常积分中发散的是（ ）。",
      "options": [
        {
          "label": "A",
          "text": "\\(\\int_0^{+\\infty}\\frac{e^x}{\\sqrt{x}}\\,\\mathrm dx\\)"
        },
        {
          "label": "B",
          "text": "\\(\\int_0^{+\\infty}x^2e^{-x^2}\\,\\mathrm dx\\)"
        },
        {
          "label": "C",
          "text": "\\(\\int_0^{+\\infty}\\frac{\\mathrm dx}{x\\ln^2x}\\)"
        },
        {
          "label": "D",
          "text": "\\(\\int_0^{+\\infty}\\frac{\\mathrm dx}{(x+2)\\ln^2(x+2)}\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的概念与性质"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的概念与性质”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 15
    },
    {
      "id": "高等数学-ch08-u071-p075",
      "subject": "高等数学",
      "chapter": 8,
      "chapterTitle": "一元函数积分学的概念与性质",
      "sourcePage": 75,
      "printedPage": 76,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的概念与性质"
      ],
      "note": "",
      "sourceRef": "P268",
      "questionType": "计算题",
      "stem": "设 \\(\\displaystyle f(x)=\\lim_{n\\to\\infty}\\frac xn\\sum_{k=1}^ne^{-k^2x^2/n^2}\\)。(1) 求 \\(f(x)\\) 的表达式；(2) 求曲线 \\(y=e^xf(x)\\) 的拐点。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的概念与性质"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的概念与性质”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 18
    },
    {
      "id": "高等数学-ch10-u072-p090",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 90,
      "printedPage": 91,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P280",
      "questionType": "填空题",
      "stem": "曲线 \\(y=\\sqrt{x}\\) 与 \\(y=x^2\\) 所围平面有界区域绕直线 \\(y=x\\) 旋转一周所得旋转体的体积为 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 5
    },
    {
      "id": "高等数学-ch10-u073-p091",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 91,
      "printedPage": 92,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P281",
      "questionType": "计算题",
      "stem": "过坐标原点作曲线 \\(y=e^x\\) 的切线，该切线与曲线 \\(y=e^x\\) 以及 \\(x\\) 轴围成的向 \\(x\\) 轴负向无限伸展的图形记为 \\(D\\)。(1) 求 \\(D\\) 的面积；(2) 求 \\(D\\) 绕直线 \\(x=1\\) 旋转一周所得旋转体体积。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 6
    },
    {
      "id": "高等数学-ch10-u074-p091",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 91,
      "printedPage": 92,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P281",
      "questionType": "计算题",
      "stem": "求曲线 \\(y=e^{-x/2}\\sqrt{\\sin x}\\)，\\(x\\ge0\\) 绕 \\(x\\) 轴旋转一周所成旋转体的体积。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 7
    },
    {
      "id": "高等数学-ch10-u075-p092",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 92,
      "printedPage": 93,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P281",
      "questionType": "计算题",
      "stem": "设曲线 \\(y=ax^2\\)，\\(x>0,a>0\\) 与 \\(y=1-x^2\\) 交于点 \\(A\\)，过原点 \\(O\\) 和点 \\(A\\) 的直线与曲线 \\(y=ax^2\\) 围成平面图形 \\(D\\)。(1) 求 \\(D\\) 绕 \\(x\\) 轴旋转一周所得体积 \\(V(a)\\)；(2) 求使 \\(V(a)\\) 最大的 \\(a\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 8
    },
    {
      "id": "高等数学-ch10-u076-p092",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 92,
      "printedPage": 93,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P282",
      "questionType": "计算题",
      "stem": "设函数 \\(f(x)\\) 在 \\([0,1]\\) 上连续，在 \\((0,1)\\) 内可导，且满足 \\(xf'(x)=f(x)+x^2\\)。已知曲线 \\(y=f(x)\\) 与 \\(x=0,x=1,y=0\\) 所围图形 \\(S\\) 的面积为 2。求 \\(f(x)\\) 的表达式，以及图形 \\(S\\) 绕 \\(x\\) 轴旋转一周所得旋转体的体积。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 9
    },
    {
      "id": "高等数学-ch10-u077-p093",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 93,
      "printedPage": 94,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P282",
      "questionType": "填空题",
      "stem": "当 \\(x>0\\) 时，在曲线 \\(y=e^{-2x}\\) 上面作一个台阶曲线，台阶的宽度皆为 1。每一级台阶的左端点位于曲线上，求图中无穷多个阴影部分的面积之和 \\(S=\\underline{\\qquad}\\)。",
      "options": [],
      "transcriptionNote": "原题含示意图，已将图形关系转写为文字条件。",
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 10
    },
    {
      "id": "高等数学-ch10-u078-p093",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 93,
      "printedPage": 94,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P282",
      "questionType": "计算题",
      "stem": "设函数 \\(y=f(x)\\) 满足微分方程 \\(y'+y=\\dfrac{e^{-x}\\cos x}{2\\sqrt{\\sin x}}\\)，且 \\(f(\\pi)=0\\)，求曲线 \\(y=f(x)\\)（\\(x\\ge0\\)）绕 \\(x\\) 轴旋转一周所得旋转体的体积。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 11
    },
    {
      "id": "高等数学-ch10-u079-p094",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 94,
      "printedPage": 95,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P283",
      "questionType": "计算题",
      "stem": "设 \\(f(x)\\) 在 \\(( -\\infty,+\\infty)\\) 内非负连续，且 \\(\\displaystyle\\int_0^x t f(x^2)f(x^2-t^2)\\,dt=\\sin^2 x^2\\)，求 \\(f(x)\\) 在 \\([0,\\pi]\\) 上的平均值。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 12
    },
    {
      "id": "高等数学-ch10-u080-p094",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 94,
      "printedPage": 95,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P284",
      "questionType": "填空题",
      "stem": "已知 \\(\\dfrac{1}{1+e^{1/x}}\\) 是函数 \\(f(x)\\) 的一个原函数，则 \\(f(x)\\) 在 \\([-1,1]\\) 上的平均值为 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 13
    },
    {
      "id": "高等数学-ch10-u081-p095",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 95,
      "printedPage": 96,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P284",
      "questionType": "填空题",
      "stem": "设函数 \\(f(x)\\) 非负连续，且 \\(f(x)\\displaystyle\\int_0^1 f(xt)\\,dt=2x^2\\)，则 \\(f(x)\\) 在区间 \\([0,2]\\) 上的平均值为 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 15
    },
    {
      "id": "高等数学-ch10-u082-p095",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 95,
      "printedPage": 96,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P285",
      "questionType": "填空题",
      "stem": "设 \\(f(x)\\) 为 \\([0,3]\\) 上的非负连续函数，且满足 \\(f(x)\\displaystyle\\int_1^2 f(xt-x)\\,dt=2x^2\\)，\\(x\\in[0,3]\\)，则 \\(f(x)\\) 在区间 \\([1,3]\\) 上的平均值为 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 16
    },
    {
      "id": "高等数学-ch10-u083-p095",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 95,
      "printedPage": 96,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P285",
      "questionType": "填空题",
      "stem": "已知函数 \\(f(x)\\) 在 \\(\\left[0,\\dfrac{3\\pi}{2}\\right]\\) 上连续，在 \\(\\left(0,\\dfrac{3\\pi}{2}\\right)\\) 内是函数 \\(\\dfrac{\\cos x}{2x-3\\pi}\\) 的一个原函数，且 \\(f(0)=0\\)，则 \\(f(x)\\) 在区间 \\(\\left[0,\\dfrac{3\\pi}{2}\\right]\\) 上的平均值为 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 17
    },
    {
      "id": "高等数学-ch10-u084-p096",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 96,
      "printedPage": 97,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P285",
      "questionType": "计算题",
      "stem": "设 \\(f(x)=\\displaystyle\\int_{-1}^{x}t|t|\\,dt\\)，求曲线 \\(y=f(x)\\) 与 \\(x\\) 轴所围成的封闭图形的面积。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 18
    },
    {
      "id": "高等数学-ch10-u085-p096",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 96,
      "printedPage": 97,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P285",
      "questionType": "计算题",
      "stem": "已知函数 \\(f(x),g(x)\\) 分别满足 \\(f'(x)=2\\sqrt{f(x)}\\)，\\(g'(x)=\\dfrac{g(x)}{x-2}+\\dfrac{x-2}{x}\\)，\\(f(0)=1\\)，\\(g(1)=0\\)，求曲线 \\(f(x)+g(y)=0\\) 所围图形绕直线 \\(x=-1\\) 旋转一周所得旋转体体积。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 19
    },
    {
      "id": "高等数学-ch10-u086-p097",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 97,
      "printedPage": 98,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P286",
      "questionType": "计算题",
      "stem": "在曲线 \\(\\sqrt{x}+\\sqrt{y}=1\\) 上横坐标为 \\(a\\)（\\(0<a<1\\)）处作曲线的切线，将切线与 \\(x\\) 轴、\\(y\\) 轴所围成的图形绕 \\(y\\) 轴旋转一周，使所得旋转体的体积最大，求 \\(a\\) 的值。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 20
    },
    {
      "id": "高等数学-ch10-u087-p098",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 98,
      "printedPage": 99,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P288",
      "questionType": "计算题",
      "stem": "设非负函数 \\(y(x)\\) 是微分方程 \\(2yy'=\\cos x\\) 满足条件 \\(y(0)=0\\) 的解，求曲线 \\(f_n(x)=n\\displaystyle\\int_0^{x/n}y(t)\\,dt\\)（\\(0\\le x\\le n\\pi\\)）的弧长。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 23
    },
    {
      "id": "高等数学-ch10-u088-p099",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 99,
      "printedPage": 100,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P288",
      "questionType": "证明题",
      "stem": "设函数 \\(y=f(x)\\) 在区间 \\([0,a]\\) 上非负，\\(f''(x)>0\\)，且 \\(f(0)=0\\)。有一块质量均匀分布的平板 \\(D\\)，其占据的区域是曲线 \\(y=f(x)\\)、直线 \\(x=a\\) 以及 \\(x\\) 轴围成的平面图形。用 \\(\\bar{x}\\) 表示平板 \\(D\\) 的质心的横坐标，证明：\\(\\bar{x}>\\dfrac{2}{3}a\\)。",
      "options": [],
      "transcriptionNote": "原题附区域示意图，区域边界已完整写入题干。",
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 24
    },
    {
      "id": "高等数学-ch10-u089-p099",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 99,
      "printedPage": 100,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P289",
      "questionType": "计算题",
      "stem": "求摆线的一拱 \\(\\begin{cases}x=a(t-\\sin t),\\\\y=a(1-\\cos t)\\end{cases}\\)（\\(0\\le t\\le2\\pi,\\ a>0\\)）与 \\(x\\) 轴围成的平面图形绕 \\(x\\) 轴旋转一周所形成的旋转体的体积与表面积。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 25
    },
    {
      "id": "高等数学-ch10-u090-p100",
      "subject": "高等数学",
      "chapter": 10,
      "chapterTitle": "一元函数积分学的应用（一）—几何应用",
      "sourcePage": 100,
      "printedPage": 101,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "note": "",
      "sourceRef": "P289",
      "questionType": "计算题",
      "stem": "已知摆线的参数方程为 \\(\\begin{cases}x=a(t-\\sin t),\\\\y=a(1-\\cos t)\\end{cases}\\)，其中 \\(0\\le t\\le2\\pi\\)，常数 \\(a>0\\)。设该摆线一拱的弧长的数值等于该弧段绕 \\(x\\) 轴旋转一周所形成的旋转曲面面积的数值，求 \\(a\\) 的值。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（一）—几何应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（一）—几何应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 26
    },
    {
      "id": "高等数学-ch11-u091-p102",
      "subject": "高等数学",
      "chapter": 11,
      "chapterTitle": "一元函数积分学的应用（二）—积分等式与积分不等式",
      "sourcePage": 102,
      "printedPage": 103,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（二）—积分等式与积分不等式"
      ],
      "note": "",
      "sourceRef": "P290",
      "questionType": "选择题",
      "stem": "设 \\(f(x)\\) 是 \\([0,1]\\) 上的可导函数，\\(f(0)=f(1)=1\\)，\\(\\displaystyle\\max_{0\\le x\\le1}|f'(x)|=1\\)，则（　）。",
      "options": [
        {
          "label": "A",
          "text": "\\(\\dfrac14<\\displaystyle\\int_0^1f(x)\\,dx<\\dfrac12\\)"
        },
        {
          "label": "B",
          "text": "\\(\\dfrac12<\\displaystyle\\int_0^1f(x)\\,dx<\\dfrac34\\)"
        },
        {
          "label": "C",
          "text": "\\(\\dfrac34<\\displaystyle\\int_0^1f(x)\\,dx<\\dfrac54\\)"
        },
        {
          "label": "D",
          "text": "\\(\\dfrac54<\\displaystyle\\int_0^1f(x)\\,dx<\\dfrac74\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（二）—积分等式与积分不等式"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（二）—积分等式与积分不等式”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 3
    },
    {
      "id": "高等数学-ch11-u092-p103",
      "subject": "高等数学",
      "chapter": 11,
      "chapterTitle": "一元函数积分学的应用（二）—积分等式与积分不等式",
      "sourcePage": 103,
      "printedPage": 104,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（二）—积分等式与积分不等式"
      ],
      "note": "",
      "sourceRef": "P291",
      "questionType": "证明题",
      "stem": "设函数 \\(f(x),g(x)\\) 在区间 \\([a,b]\\) 上连续，对任意的 \\(x\\in[a,b]\\)，满足 \\(\\displaystyle\\int_a^x g(t)\\,dt<\\int_a^x f(t)\\,dt\\)，且 \\(\\displaystyle\\int_a^b g(t)\\,dt=\\int_a^b f(t)\\,dt\\)。证明：\\(\\displaystyle\\int_a^b x f(x)\\,dx<\\int_a^b x g(x)\\,dx\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（二）—积分等式与积分不等式"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（二）—积分等式与积分不等式”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 5
    },
    {
      "id": "高等数学-ch11-u093-p103",
      "subject": "高等数学",
      "chapter": 11,
      "chapterTitle": "一元函数积分学的应用（二）—积分等式与积分不等式",
      "sourcePage": 103,
      "printedPage": 104,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（二）—积分等式与积分不等式"
      ],
      "note": "",
      "sourceRef": "P291",
      "questionType": "证明题",
      "stem": "设 \\(f(x)\\) 在 \\([a,b]\\) 上可导，且 \\(f'(x)\\) 连续，\\(f(a)=0\\)。证明：\\(\\displaystyle\\int_a^b f^2(x)\\,dx\\le\\dfrac{(b-a)^2}{2}\\int_a^b[f'(x)]^2\\,dx\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（二）—积分等式与积分不等式"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（二）—积分等式与积分不等式”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 6
    },
    {
      "id": "高等数学-ch11-u094-p104",
      "subject": "高等数学",
      "chapter": 11,
      "chapterTitle": "一元函数积分学的应用（二）—积分等式与积分不等式",
      "sourcePage": 104,
      "printedPage": 105,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（二）—积分等式与积分不等式"
      ],
      "note": "",
      "sourceRef": "P292",
      "questionType": "选择题",
      "stem": "设 \\(f(x)\\) 是 \\([0,1]\\) 上单调增加的连续函数，则（　）。",
      "options": [
        {
          "label": "A",
          "text": "\\(\\displaystyle\\int_0^{\\int_0^1e^{-t^2}\\,dt}f(x)\\,dx\\ge\\int_0^1f(x)e^{-x^2}\\,dx\\)"
        },
        {
          "label": "B",
          "text": "\\(\\displaystyle\\int_0^{\\int_0^1e^{-t^2}\\,dt}f(x)\\,dx\\le\\int_0^1f(x)e^{-x^2}\\,dx\\)"
        },
        {
          "label": "C",
          "text": "\\(\\displaystyle\\int_0^{\\int_0^1e^{-t^2}\\,dt}f(x)\\,dx\\ge\\int_0^1f(x)\\,dx\\)"
        },
        {
          "label": "D",
          "text": "\\(\\displaystyle\\int_0^{\\int_0^1e^{-t^2}\\,dt}f(x)\\,dx\\le\\int_0^1f(x)\\,dx\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（二）—积分等式与积分不等式"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（二）—积分等式与积分不等式”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 7
    },
    {
      "id": "高等数学-ch11-u095-p105",
      "subject": "高等数学",
      "chapter": 11,
      "chapterTitle": "一元函数积分学的应用（二）—积分等式与积分不等式",
      "sourcePage": 105,
      "printedPage": 106,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（二）—积分等式与积分不等式"
      ],
      "note": "",
      "sourceRef": "P293",
      "questionType": "证明题",
      "stem": "设 \\(f(x)\\) 在 \\([0,1]\\) 上具有二阶导数，\\(f(0)=f(1)=0\\)，\\(f''(x)<0\\)，\\(0<f(x)<1\\)。记曲线 \\(y=f(x)\\) 在 \\([0,1]\\) 上的长度为 \\(a\\)，证明：(1) 存在 \\(\\xi\\in(0,1)\\)，使得对任意 \\(x\\in(0,\\xi)\\)，有 \\(f'(x)>0\\)；(2) \\(a<3\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（二）—积分等式与积分不等式"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（二）—积分等式与积分不等式”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 9
    },
    {
      "id": "高等数学-ch12-u096-p107",
      "subject": "高等数学",
      "chapter": 12,
      "chapterTitle": "一元函数积分学的应用（三）—物理应用",
      "sourcePage": 107,
      "printedPage": 108,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（三）—物理应用"
      ],
      "note": "",
      "sourceRef": "P295",
      "questionType": "填空题",
      "stem": "半径为 \\(a\\) 的球浸没在与其密度 \\(\\rho\\) 相同的某液体中，球与水面相切，\\(g\\) 为重力加速度。若将球取出，所做的功至少为 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（三）—物理应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（三）—物理应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 3
    },
    {
      "id": "高等数学-ch12-u097-p107",
      "subject": "高等数学",
      "chapter": 12,
      "chapterTitle": "一元函数积分学的应用（三）—物理应用",
      "sourcePage": 107,
      "printedPage": 108,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（三）—物理应用"
      ],
      "note": "",
      "sourceRef": "P295",
      "questionType": "选择题",
      "stem": "设有半圆形板 \\(x^2+y^2\\le a^2\\)（\\(y\\ge0\\)），它在点 \\(P(x,y)\\) 的密度与点 \\(P\\) 到原点的距离成正比，则半圆形板的重心坐标为（　）。",
      "options": [
        {
          "label": "A",
          "text": "\\(0,\\dfrac{\\pi a}{3}\\)"
        },
        {
          "label": "B",
          "text": "\\(0,\\dfrac{\\pi a}{2}\\)"
        },
        {
          "label": "C",
          "text": "\\(0,\\dfrac{4a}{3\\pi}\\)"
        },
        {
          "label": "D",
          "text": "\\(0,\\dfrac{3a}{2\\pi}\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（三）—物理应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（三）—物理应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 4
    },
    {
      "id": "高等数学-ch12-u098-p107",
      "subject": "高等数学",
      "chapter": 12,
      "chapterTitle": "一元函数积分学的应用（三）—物理应用",
      "sourcePage": 107,
      "printedPage": 108,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "一元函数积分学的应用（三）—物理应用"
      ],
      "note": "",
      "sourceRef": "P295",
      "questionType": "填空题",
      "stem": "曲线 \\(y=e^x\\) 与直线 \\(x=1\\)、\\(x=-1\\) 及 \\(x\\) 轴所围平面有界区域 \\(D\\) 的形心为 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "一元函数积分学的应用（三）—物理应用"
      ],
      "similarQuestionPrompt": "围绕“一元函数积分学的应用（三）—物理应用”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 5
    },
    {
      "id": "高等数学-ch13-u099-p110",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 110,
      "printedPage": 111,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P297",
      "questionType": "计算题",
      "stem": "设函数 \\(u(x,y)\\) 的全微分 \\(du=[e^x+f'(x)]y\\,dx+f'(x)\\,dy\\)，其中 \\(f(x)\\) 在 \\(( -\\infty,+\\infty)\\) 内具有一阶连续的导数，且 \\(f(0)=4\\)，\\(f'(0)=3\\)，求 \\(f(x)\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 5
    },
    {
      "id": "高等数学-ch13-u100-p112",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 112,
      "printedPage": 113,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P299",
      "questionType": "填空题",
      "stem": "设函数 \\(f(x,y)=\\displaystyle\\int_0^{xy}e^{xt^2}\\,dt\\)，则 \\(\\left.\\dfrac{\\partial^2f}{\\partial x\\partial y}\\right|_{(1,1)}=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 10
    },
    {
      "id": "高等数学-ch13-u101-p112",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 112,
      "printedPage": 113,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P299",
      "questionType": "填空题",
      "stem": "设 \\(z=z(x,y)\\) 是由 \\(z+e^z=xy\\) 所确定的二元函数，则 \\(\\left.\\dfrac{\\partial^2z}{\\partial x\\partial y}\\right|_{z=0}=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 11
    },
    {
      "id": "高等数学-ch13-u102-p113",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 113,
      "printedPage": 114,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P300",
      "questionType": "计算题",
      "stem": "设 \\(z=z(x,y)\\) 是由方程 \\(z+\\ln z-\\displaystyle\\int_y^x e^{-t^2}\\,dt=1\\) 确定的函数，计算 \\(\\left.\\dfrac{\\partial^2z}{\\partial x\\partial y}\\right|_{(0,0)}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 15
    },
    {
      "id": "高等数学-ch13-u103-p114",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 114,
      "printedPage": 115,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P301",
      "questionType": "选择题",
      "stem": "设 \\(F(u,v)\\) 具有一阶连续偏导数，且 \\(z=z(x,y)\\) 由方程 \\(F\\!\\left(\\dfrac{x}{z},yz\\right)=0\\) 所确定。设题中出现的分母不为零，则 \\(x\\dfrac{\\partial z}{\\partial x}-y\\dfrac{\\partial z}{\\partial y}=\\)（　）。",
      "options": [
        {
          "label": "A",
          "text": "\\(0\\)"
        },
        {
          "label": "B",
          "text": "\\(z\\)"
        },
        {
          "label": "C",
          "text": "\\(\\dfrac1z\\)"
        },
        {
          "label": "D",
          "text": "\\(1\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 17
    },
    {
      "id": "高等数学-ch13-u104-p115",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 115,
      "printedPage": 116,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P302",
      "questionType": "计算题",
      "stem": "设 \\(f(u,v)\\) 存在二阶连续偏导数，\\(z=z(x,y)\\) 是由方程 \\(f(z-x,z-y)=1\\) 确定的隐函数，求 \\(\\dfrac{\\partial^2z}{\\partial x\\partial y}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 20
    },
    {
      "id": "高等数学-ch13-u105-p116",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 116,
      "printedPage": 117,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P302",
      "questionType": "填空题",
      "stem": "设 \\(u=e^{x+y+z}\\)，其中 \\(y(x)\\) 和 \\(z(x)\\) 由方程组 \\(\\begin{cases}\\displaystyle\\int_0^x e^{t^2}\\,dt+\\ln(1+y)=0,\\\\e^{y+z}=e+z\\ln z\\end{cases}\\) 确定，则 \\(\\left.\\dfrac{du}{dx}\\right|_{x=0}=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 21
    },
    {
      "id": "高等数学-ch13-u106-p116",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 116,
      "printedPage": 117,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P302",
      "questionType": "选择题",
      "stem": "函数 \\(f(x,y)=x^2+y^2\\) 在约束条件 \\((x-1)^3=y^2\\) 下（　）。",
      "options": [
        {
          "label": "A",
          "text": "有最大值，无最小值"
        },
        {
          "label": "B",
          "text": "无最大值，有最小值"
        },
        {
          "label": "C",
          "text": "有最大值，有最小值"
        },
        {
          "label": "D",
          "text": "无最大值，无最小值"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 22
    },
    {
      "id": "高等数学-ch13-u107-p117",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 117,
      "printedPage": 118,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P303",
      "questionType": "选择题",
      "stem": "设 \\(f(x,y)=\\begin{cases}(y-e^{-1/x^2})(y-3e^{1/x^2}),&x\\ne0,\\\\y^2,&x=0,\\end{cases}\\) 则点 \\((0,0)\\)（　）。",
      "options": [
        {
          "label": "A",
          "text": "是 \\(f(x,x)\\) 的极小值点，也是 \\(f(x,y)\\) 的极小值点"
        },
        {
          "label": "B",
          "text": "是 \\(f(x,x)\\) 的极小值点，不是 \\(f(x,y)\\) 的极小值点"
        },
        {
          "label": "C",
          "text": "不是 \\(f(x,x)\\) 的极小值点，是 \\(f(x,y)\\) 的极小值点"
        },
        {
          "label": "D",
          "text": "不是 \\(f(x,x)\\) 的极小值点，也不是 \\(f(x,y)\\) 的极小值点"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 24
    },
    {
      "id": "高等数学-ch13-u108-p119",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 119,
      "printedPage": 120,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P305",
      "questionType": "计算题",
      "stem": "求 \\(|z|\\) 在约束条件 \\(\\begin{cases}x^2+9y^2-2z^2=0,\\\\x+3y+3z=5\\end{cases}\\) 下的最大值与最小值。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 28
    },
    {
      "id": "高等数学-ch13-u109-p120",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 120,
      "printedPage": 121,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P305",
      "questionType": "计算题",
      "stem": "求函数 \\(u=\\sqrt{x^2+y^2+z^2}\\) 在约束条件 \\(x+2y=1\\) 与 \\(x^2+2y^2+z^2=1\\) 下的最值。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 30
    },
    {
      "id": "高等数学-ch13-u110-p123",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 123,
      "printedPage": 124,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P309",
      "questionType": "计算题",
      "stem": "设 \\(D=\\{(x,y)\\mid x+y\\le3,\\ x\\ge0,\\ y\\ge0\\}\\)，求函数 \\(f(x,y)=2x^3+2y^3-6x-6y+5\\) 在区域 \\(D\\) 上的最大值与最小值。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 36
    },
    {
      "id": "高等数学-ch13-u111-p123",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 123,
      "printedPage": 124,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P309",
      "questionType": "计算题",
      "stem": "设 \\(f(x,y)=4x^2(x-2y)+16y(xy-3)-33x\\)，求其在平面区域 \\(D=\\{(x,y)\\mid0\\le y\\le x\\le3\\}\\) 上的取值范围。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 37
    },
    {
      "id": "高等数学-ch13-u112-p124",
      "subject": "高等数学",
      "chapter": 13,
      "chapterTitle": "多元函数微分学",
      "sourcePage": 124,
      "printedPage": 125,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "多元函数微分学"
      ],
      "note": "",
      "sourceRef": "P310",
      "questionType": "计算题",
      "stem": "已知可微函数 \\(f(u,v)\\) 满足 \\(\\dfrac{\\partial f(u,v)}{\\partial u}+\\dfrac{\\partial f(u,v)}{\\partial v}=6(u+v)-3u^2\\)，且 \\(f(u,0)=3u^2-u^3\\)。记 \\(g(x,y)=f(x,x-y)\\)。(1) 计算 \\(\\dfrac{\\partial g(x,y)}{\\partial x}\\)；(2) 求 \\(f(x,y)\\) 在有界闭区域 \\(D=\\{(x,y)\\mid x^2+y^2\\le16\\}\\) 上的最值。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "多元函数微分学"
      ],
      "similarQuestionPrompt": "围绕“多元函数微分学”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 39
    },
    {
      "id": "高等数学-ch14-u113-p127",
      "subject": "高等数学",
      "chapter": 14,
      "chapterTitle": "二重积分",
      "sourcePage": 127,
      "printedPage": 128,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "二重积分"
      ],
      "note": "",
      "sourceRef": "P312",
      "questionType": "计算题",
      "stem": "设 \\(f(x)\\) 是 \\([0,1]\\) 上的连续函数且其在 \\([0,1]\\) 上的平均值 \\(\\bar f=\\dfrac12\\)，满足 \\(f(x)+a\\displaystyle\\int_1^x f(y)f(y-x)\\,dy=1\\)，求常数 \\(a\\) 的值。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "二重积分"
      ],
      "similarQuestionPrompt": "围绕“二重积分”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 4
    },
    {
      "id": "高等数学-ch14-u114-p128",
      "subject": "高等数学",
      "chapter": 14,
      "chapterTitle": "二重积分",
      "sourcePage": 128,
      "printedPage": 129,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "二重积分"
      ],
      "note": "",
      "sourceRef": "P313",
      "questionType": "选择题",
      "stem": "设 \\(I_1=\\displaystyle\\iint_{0\\le x\\le1,\\ 0\\le y\\le1}(\\sin x^2+\\cos y^2)\\,d\\sigma\\)，\\(I_2=\\displaystyle\\iint_{|x|+|y|\\le1/2}\\left[2+\\ln\\left(\\sqrt{x^2+y^2}+\\dfrac12\\right)\\right]\\,d\\sigma\\)，则（　）。",
      "options": [
        {
          "label": "A",
          "text": "\\(1\\le I_1\\le I_2\\)"
        },
        {
          "label": "B",
          "text": "\\(I_1\\le I_2\\le1\\)"
        },
        {
          "label": "C",
          "text": "\\(I_2\\le I_1\\le1\\)"
        },
        {
          "label": "D",
          "text": "\\(I_2\\le1\\le I_1\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "二重积分"
      ],
      "similarQuestionPrompt": "围绕“二重积分”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 5
    },
    {
      "id": "高等数学-ch14-u115-p128",
      "subject": "高等数学",
      "chapter": 14,
      "chapterTitle": "二重积分",
      "sourcePage": 128,
      "printedPage": 129,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "二重积分"
      ],
      "note": "",
      "sourceRef": "P313",
      "questionType": "填空题",
      "stem": "计算 \\(\\displaystyle\\int_{-1}^{0}dx\\int_{(1-x^{2/3})^{3/2}}^{(1-x^2)^{1/2}}(1-\\sin x\\cos y)\\,dy+\\int_0^1dx\\int_{(1-x^{2/3})^{3/2}}^{(1-x^2)^{1/2}}(1-\\sin x\\cos y)\\,dy=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "二重积分"
      ],
      "similarQuestionPrompt": "围绕“二重积分”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 6
    },
    {
      "id": "高等数学-ch14-u116-p129",
      "subject": "高等数学",
      "chapter": 14,
      "chapterTitle": "二重积分",
      "sourcePage": 129,
      "printedPage": 130,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "二重积分"
      ],
      "note": "",
      "sourceRef": "P314",
      "questionType": "计算题",
      "stem": "设有界区域 \\(D\\) 是由圆 \\(x^2+y^2=1\\)、直线 \\(y=x\\) 以及 \\(x\\) 轴所围成的在第一象限的图形，计算二重积分 \\(\\displaystyle\\iint_D e^{(x+y)^2}(x^2-y^2)\\,dx\\,dy\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "二重积分"
      ],
      "similarQuestionPrompt": "围绕“二重积分”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 7
    },
    {
      "id": "高等数学-ch14-u117-p130",
      "subject": "高等数学",
      "chapter": 14,
      "chapterTitle": "二重积分",
      "sourcePage": 130,
      "printedPage": 131,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "二重积分"
      ],
      "note": "",
      "sourceRef": "P316",
      "questionType": "填空题",
      "stem": "设平面区域 \\(D=\\{(x,y)\\mid x^2+y^2\\le1\\}\\)，则 \\(\\displaystyle\\iint_D(x-2y)^2\\,dx\\,dy=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "二重积分"
      ],
      "similarQuestionPrompt": "围绕“二重积分”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 11
    },
    {
      "id": "高等数学-ch14-u118-p131",
      "subject": "高等数学",
      "chapter": 14,
      "chapterTitle": "二重积分",
      "sourcePage": 131,
      "printedPage": 132,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "二重积分"
      ],
      "note": "",
      "sourceRef": "P316",
      "questionType": "计算题",
      "stem": "设 \\(D=\\left\\{(x,y)\\middle|\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}\\le1\\right\\}\\)，常数 \\(a>0,b>0,a\\ne b\\)，计算 \\(I=\\displaystyle\\iint_D[(x-1)^2+(2y+3)^2]\\,dx\\,dy\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "二重积分"
      ],
      "similarQuestionPrompt": "围绕“二重积分”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 12
    },
    {
      "id": "高等数学-ch14-u119-p132",
      "subject": "高等数学",
      "chapter": 14,
      "chapterTitle": "二重积分",
      "sourcePage": 132,
      "printedPage": 133,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "二重积分"
      ],
      "note": "",
      "sourceRef": "P318",
      "questionType": "填空题",
      "stem": "计算 \\(\\displaystyle\\int_{-1}^{1}dy\\int_{-1}^{y}y\\sqrt{1+x^2-y^2}\\,dx=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "二重积分"
      ],
      "similarQuestionPrompt": "围绕“二重积分”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 14
    },
    {
      "id": "高等数学-ch14-u120-p132",
      "subject": "高等数学",
      "chapter": 14,
      "chapterTitle": "二重积分",
      "sourcePage": 132,
      "printedPage": 133,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "二重积分"
      ],
      "note": "",
      "sourceRef": "P318",
      "questionType": "填空题",
      "stem": "计算 \\(\\displaystyle\\int_{-1}^{1}dx\\int_{x^2}^{\\sqrt{2-x^2}}(x+1)y\\,dy=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "二重积分"
      ],
      "similarQuestionPrompt": "围绕“二重积分”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 15
    },
    {
      "id": "高等数学-ch14-u121-p133",
      "subject": "高等数学",
      "chapter": 14,
      "chapterTitle": "二重积分",
      "sourcePage": 133,
      "printedPage": 134,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "二重积分"
      ],
      "note": "",
      "sourceRef": "P318",
      "questionType": "计算题",
      "stem": "计算二重积分 \\(\\displaystyle\\iint_D\\left|x^2+y^2-\\sqrt2(x+y)\\right|\\,dx\\,dy\\)，其中 \\(D=\\{(x,y)\\mid x^2+y^2\\le4\\}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "二重积分"
      ],
      "similarQuestionPrompt": "围绕“二重积分”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 17
    },
    {
      "id": "高等数学-ch14-u122-p133",
      "subject": "高等数学",
      "chapter": 14,
      "chapterTitle": "二重积分",
      "sourcePage": 133,
      "printedPage": 134,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "二重积分"
      ],
      "note": "",
      "sourceRef": "P318",
      "questionType": "计算题",
      "stem": "设 \\(D=\\{(x,y)\\mid0\\le x\\le2,\\ 0\\le y\\le2\\}\\)，计算 \\(\\displaystyle\\iint_D|xy-1|\\,d\\sigma\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "二重积分"
      ],
      "similarQuestionPrompt": "围绕“二重积分”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 18
    },
    {
      "id": "高等数学-ch14-u123-p134",
      "subject": "高等数学",
      "chapter": 14,
      "chapterTitle": "二重积分",
      "sourcePage": 134,
      "printedPage": 135,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "二重积分"
      ],
      "note": "",
      "sourceRef": "P320",
      "questionType": "计算题",
      "stem": "设平面区域 \\(D=\\{(x,y)\\mid(x-1)^2+y^2\\ge1,\\ (x-2)^2+y^2\\le4,\\ y\\ge x\\}\\)，计算 \\(\\displaystyle\\iint_D(x^2+y^2)\\,d\\sigma\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "二重积分"
      ],
      "similarQuestionPrompt": "围绕“二重积分”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 19
    },
    {
      "id": "高等数学-ch14-u124-p135",
      "subject": "高等数学",
      "chapter": 14,
      "chapterTitle": "二重积分",
      "sourcePage": 135,
      "printedPage": 136,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "二重积分"
      ],
      "note": "",
      "sourceRef": "P320",
      "questionType": "计算题",
      "stem": "设 \\(D=\\{(x,y)\\mid0\\le x\\le\\sqrt\\pi,\\ 0\\le y\\le\\sqrt\\pi\\}\\)，计算二重积分 \\(\\displaystyle\\iint_D\\sin(\\max\\{x^2,y^2\\})\\,d\\sigma\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "二重积分"
      ],
      "similarQuestionPrompt": "围绕“二重积分”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 21
    },
    {
      "id": "高等数学-ch15-u125-p145",
      "subject": "高等数学",
      "chapter": 15,
      "chapterTitle": "微分方程",
      "sourcePage": 145,
      "printedPage": 146,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "微分方程"
      ],
      "note": "",
      "sourceRef": "P333",
      "questionType": "选择题",
      "stem": "每一个解 \\(y=y(x)\\) 都满足 \\(\\displaystyle\\lim_{x\\to+\\infty}y(x)=0\\) 的微分方程是（　）。",
      "options": [
        {
          "label": "A",
          "text": "\\(y'+\\dfrac{y}{\\sqrt{1+x^3}}=0\\)"
        },
        {
          "label": "B",
          "text": "\\(y'-\\dfrac{y}{\\sqrt{1+x^3}}=0\\)"
        },
        {
          "label": "C",
          "text": "\\(y'+\\dfrac{y}{\\sqrt[4]{1+x^3}}=0\\)"
        },
        {
          "label": "D",
          "text": "\\(y'-\\dfrac{y}{\\sqrt[4]{1+x^3}}=0\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "微分方程"
      ],
      "similarQuestionPrompt": "围绕“微分方程”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 2
    },
    {
      "id": "高等数学-ch15-u126-p146",
      "subject": "高等数学",
      "chapter": 15,
      "chapterTitle": "微分方程",
      "sourcePage": 146,
      "printedPage": 147,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "微分方程"
      ],
      "note": "",
      "sourceRef": "P334",
      "questionType": "选择题",
      "stem": "设 \\(f(x)\\) 在 \\([0,+\\infty)\\) 上连续且有水平渐近线 \\(y=b\\ne0\\)，则（　）。",
      "options": [
        {
          "label": "A",
          "text": "当 \\(a>0\\) 时，\\(y'+ay=f(x)\\) 的任意解都满足 \\(\\displaystyle\\lim_{x\\to+\\infty}y(x)=\\dfrac ba\\)"
        },
        {
          "label": "B",
          "text": "当 \\(a>0\\) 时，\\(y'+ay=f(x)\\) 的任意解都满足 \\(\\displaystyle\\lim_{x\\to+\\infty}y(x)=\\dfrac ab\\)"
        },
        {
          "label": "C",
          "text": "当 \\(a<0\\) 时，\\(y'+ay=f(x)\\) 的任意解都满足 \\(\\displaystyle\\lim_{x\\to+\\infty}y(x)=\\dfrac ba\\)"
        },
        {
          "label": "D",
          "text": "当 \\(a<0\\) 时，\\(y'+ay=f(x)\\) 的任意解都满足 \\(\\displaystyle\\lim_{x\\to+\\infty}y(x)=\\dfrac ab\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "微分方程"
      ],
      "similarQuestionPrompt": "围绕“微分方程”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 4
    },
    {
      "id": "高等数学-ch15-u127-p146",
      "subject": "高等数学",
      "chapter": 15,
      "chapterTitle": "微分方程",
      "sourcePage": 146,
      "printedPage": 147,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "微分方程"
      ],
      "note": "",
      "sourceRef": "P335",
      "questionType": "选择题",
      "stem": "若二阶常系数齐次微分方程 \\(y''+ay'+by=0\\) 的解在 \\(( -\\infty,+\\infty)\\) 上均有周期性，则（　）。",
      "options": [
        {
          "label": "A",
          "text": "\\(a<0,b<0\\)"
        },
        {
          "label": "B",
          "text": "\\(a>0,b>0\\)"
        },
        {
          "label": "C",
          "text": "\\(a=0,b<0\\)"
        },
        {
          "label": "D",
          "text": "\\(a=0,b>0\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "微分方程"
      ],
      "similarQuestionPrompt": "围绕“微分方程”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 5
    },
    {
      "id": "高等数学-ch15-u128-p147",
      "subject": "高等数学",
      "chapter": 15,
      "chapterTitle": "微分方程",
      "sourcePage": 147,
      "printedPage": 148,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "微分方程"
      ],
      "note": "",
      "sourceRef": "P335",
      "questionType": "选择题",
      "stem": "如果对于微分方程 \\(y''-(2k-4)y'+ky=0\\) 的任一解 \\(y(x)\\)，反常积分 \\(\\displaystyle\\int_0^{+\\infty}y(x)\\,dx\\) 均收敛，则 \\(k\\) 的取值范围为（　）。",
      "options": [
        {
          "label": "A",
          "text": "\\(( -\\infty,1]\\)"
        },
        {
          "label": "B",
          "text": "\\((0,1]\\)"
        },
        {
          "label": "C",
          "text": "\\(( -\\infty,2)\\)"
        },
        {
          "label": "D",
          "text": "\\((0,2)\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "微分方程"
      ],
      "similarQuestionPrompt": "围绕“微分方程”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 6
    },
    {
      "id": "高等数学-ch15-u129-p148",
      "subject": "高等数学",
      "chapter": 15,
      "chapterTitle": "微分方程",
      "sourcePage": 148,
      "printedPage": 149,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "微分方程"
      ],
      "note": "",
      "sourceRef": "P336",
      "questionType": "填空题",
      "stem": "微分方程 \\((x+y)\\,dy+(y+1)\\,dx=0\\) 满足 \\(y|_{x=1}=2\\) 的特解是 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "微分方程"
      ],
      "similarQuestionPrompt": "围绕“微分方程”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 9
    },
    {
      "id": "高等数学-ch15-u130-p148",
      "subject": "高等数学",
      "chapter": 15,
      "chapterTitle": "微分方程",
      "sourcePage": 148,
      "printedPage": 149,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "微分方程"
      ],
      "note": "",
      "sourceRef": "P336",
      "questionType": "填空题",
      "stem": "设当 \\(x\\ge0\\) 时，\\(f(x)\\) 有连续的一阶导数，并且满足 \\(f(x)=-1+x+2\\displaystyle\\int_0^x(x-t)f(t)f'(t)\\,dt\\)，则 \\(f(x)=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "微分方程"
      ],
      "similarQuestionPrompt": "围绕“微分方程”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 11
    },
    {
      "id": "高等数学-ch15-u131-p150",
      "subject": "高等数学",
      "chapter": 15,
      "chapterTitle": "微分方程",
      "sourcePage": 150,
      "printedPage": 151,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "微分方程"
      ],
      "note": "",
      "sourceRef": "P337",
      "questionType": "填空题",
      "stem": "已知函数 \\(y=y(x)\\) 满足 \\(y'+2\\sqrt2\\,x\\sqrt y=0\\)，且其积分曲线的拐点的横坐标为 \\(-2\\)，则 \\(y(x)=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "微分方程"
      ],
      "similarQuestionPrompt": "围绕“微分方程”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 14
    },
    {
      "id": "高等数学-ch15-u132-p150",
      "subject": "高等数学",
      "chapter": 15,
      "chapterTitle": "微分方程",
      "sourcePage": 150,
      "printedPage": 151,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "微分方程"
      ],
      "note": "",
      "sourceRef": "P337",
      "questionType": "计算题",
      "stem": "若函数 \\(f(x)\\) 满足关系式 \\(f'(x)+af(x)=\\displaystyle\\int_x^0f(t)\\,dt\\)，\\(a>0\\)，求 \\(\\displaystyle\\int_0^{+\\infty}f(x)\\,dx\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "微分方程"
      ],
      "similarQuestionPrompt": "围绕“微分方程”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 15
    },
    {
      "id": "高等数学-ch16-u133-p162",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 162,
      "printedPage": 163,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P348",
      "questionType": "选择题",
      "stem": "设级数 ① \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{1+1/n}}\\)，② \\(\\displaystyle\\sum_{n=2}^{\\infty}\\dfrac{1}{n^{1+1/\\sqrt{\\ln n}}}\\)，则（　）。",
      "options": [
        {
          "label": "A",
          "text": "①收敛，②发散"
        },
        {
          "label": "B",
          "text": "①发散，②收敛"
        },
        {
          "label": "C",
          "text": "①②均收敛"
        },
        {
          "label": "D",
          "text": "①②均发散"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 1
    },
    {
      "id": "高等数学-ch16-u134-p163",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 163,
      "printedPage": 164,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P349",
      "questionType": "选择题",
      "stem": "设数列 \\(\\{a_n\\},\\{b_n\\}\\) 满足 \\(0\\le a_{n+1}\\le a_n+b_n\\)，\\(n\\in\\mathbb N_+\\)，则“\\(\\{a_n\\}\\) 收敛”是“\\(\\displaystyle\\sum_{n=1}^{\\infty}b_n\\) 收敛”的（　）。",
      "options": [
        {
          "label": "A",
          "text": "充分非必要条件"
        },
        {
          "label": "B",
          "text": "必要非充分条件"
        },
        {
          "label": "C",
          "text": "充分必要条件"
        },
        {
          "label": "D",
          "text": "既非充分又非必要条件"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 3
    },
    {
      "id": "高等数学-ch16-u135-p165",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 165,
      "printedPage": 166,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P351",
      "questionType": "证明题",
      "stem": "设数列 \\(\\{a_n\\},\\{b_n\\}\\) 满足 \\(e^{a_n}-e^{-a_n}=a_n(e^{b_n}+e^{-b_n})\\)，\\(0<a_n<1\\)，\\(0<b_n<1\\)，\\(n=1,2,\\cdots\\)，且 \\(\\displaystyle\\sum_{n=1}^{\\infty}b_n\\) 收敛。证明：(1) \\(a_n>b_n\\)，\\(n=1,2,\\cdots\\)；(2) \\(\\displaystyle\\sum_{n=1}^{\\infty}(b_n-a_n)\\) 收敛。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 7
    },
    {
      "id": "高等数学-ch16-u136-p166",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 166,
      "printedPage": 167,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P352",
      "questionType": "计算题",
      "stem": "设 \\(n\\) 为正整数，\\(y=y_n(x)\\) 是微分方程 \\(xy'-ny=0\\) 满足条件 \\(y_n(1)=(n+1)(n+3)\\) 的解。(1) 求 \\(y_n(x)\\)；(2) 求级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}y_n(x)\\) 的收敛域及和函数。",
      "options": [],
      "transcriptionNote": "原标记位于第 (2) 问，结构化题库保留了完整题干。",
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 9
    },
    {
      "id": "高等数学-ch16-u137-p166",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 166,
      "printedPage": 167,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P353",
      "questionType": "计算题",
      "stem": "设数列 \\(\\{x_n\\}\\) 满足 \\(x_{n+1}=\\dfrac{a+x_n}{1+x_n}\\)，\\(0<a<1\\)，\\(x_1\\ge0\\)。(1) 证明 \\(\\displaystyle\\sum_{n=1}^{\\infty}(x_{n+1}-x_n)\\) 绝对收敛；(2) 求 \\(\\displaystyle\\lim_{n\\to\\infty}\\sum_{i=1}^{n}(x_{i+1}-x_i)\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 10
    },
    {
      "id": "高等数学-ch16-u138-p167",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 167,
      "printedPage": 168,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P353",
      "questionType": "计算题",
      "stem": "已知函数 \\(f(x)\\) 满足 \\(f''(x)+f'(x)=0\\) 及 \\(f''(x)+2f'(x)+f(x)=-1\\)，且 \\(f(0)=0\\)。(1) 求 \\(f(x)\\) 的表达式；(2) 设 \\(a>0\\)，级数 \\(\\displaystyle\\sum_{n=2}^{\\infty}f(n^{-a}\\ln n)\\) 收敛，求 \\(a\\) 的取值范围。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 11
    },
    {
      "id": "高等数学-ch16-u139-p167",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 167,
      "printedPage": 168,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P354",
      "questionType": "选择题",
      "stem": "若数项级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}a_n\\) 条件收敛，则幂级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}na_n(x+2)^n\\) 在 \\(x=-\\sqrt2\\) 处（　）。",
      "options": [
        {
          "label": "A",
          "text": "绝对收敛"
        },
        {
          "label": "B",
          "text": "条件收敛"
        },
        {
          "label": "C",
          "text": "发散"
        },
        {
          "label": "D",
          "text": "敛散性不能确定"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 12
    },
    {
      "id": "高等数学-ch16-u140-p168",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 168,
      "printedPage": 169,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P354",
      "questionType": "选择题",
      "stem": "设 \\(\\displaystyle\\sum_{n=0}^{\\infty}a_nx^n\\)、\\(\\displaystyle\\sum_{n=0}^{\\infty}b_nx^n\\) 的收敛半径均为 \\(r\\)（\\(0<r<+\\infty\\)），则以下级数的收敛半径仍为 \\(r\\) 的是（　）。",
      "options": [
        {
          "label": "A",
          "text": "\\(\\displaystyle\\sum_{n=0}^{\\infty}(a_n+b_n)x^n\\)"
        },
        {
          "label": "B",
          "text": "\\(\\displaystyle\\sum_{n=0}^{\\infty}(a_n+nb_n)x^n\\)"
        },
        {
          "label": "C",
          "text": "\\(\\displaystyle\\sum_{n=0}^{\\infty}\\left(a_n+\\dfrac{b_n}{2^n}\\right)x^n\\)"
        },
        {
          "label": "D",
          "text": "\\(\\displaystyle\\sum_{n=0}^{\\infty}\\left(a_n+\\dfrac{b_n}{n+1}\\right)x^n\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 14
    },
    {
      "id": "高等数学-ch16-u141-p169",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 169,
      "printedPage": 170,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P355",
      "questionType": "计算题",
      "stem": "设 \\(a_n\\) 表示由曲线 \\(y=x^n\\) 与 \\(y=x^{n+1}\\) 所围成的平面图形的面积，\\(n=1,2,\\cdots\\)。(1) 求幂级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}a_nx^n\\) 的收敛域与和函数 \\(S(x)\\)；(2) 求数项级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n}{n(n+1)2^n}\\) 的和。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 15
    },
    {
      "id": "高等数学-ch16-u142-p169",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 169,
      "printedPage": 170,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P356",
      "questionType": "计算题",
      "stem": "设 \\(a_n=\\displaystyle\\int_0^1x^n\\sqrt{1-x^2}\\,dx\\)，\\(b_n=\\displaystyle\\int_0^{\\pi/2}\\sin^nt\\,dt\\)，\\(n=1,2,\\cdots\\)，计算 \\(\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{b_n}{(2n+1)a_n}x^{2n}\\)。",
      "options": [],
      "transcriptionNote": "求和下标按原题保留为 n=0；原题同时将 a_n、b_n 声明为 n=1,2,…。",
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 16
    },
    {
      "id": "高等数学-ch16-u143-p170",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 170,
      "printedPage": 171,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P357",
      "questionType": "计算题",
      "stem": "设 \\(a_n=\\displaystyle\\int_0^1x^2\\ln^n x\\,dx\\)，\\(n=0,1,2,\\cdots\\)。(1) 求 \\(a_n\\) 的表达式；(2) 计算 \\(\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{a_n}{n!}\\)。",
      "options": [],
      "transcriptionNote": "原标记位于第 (2) 问，结构化题库保留了完整题干。",
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 18
    },
    {
      "id": "高等数学-ch16-u144-p171",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 171,
      "printedPage": 172,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P357",
      "questionType": "计算题",
      "stem": "设函数 \\(y=f(x)\\) 满足 \\(y''+2y'+5y=0\\)，且 \\(f(0)=1\\)，\\(f'(0)=-1\\)。(1) 求 \\(f(x)\\) 的表达式；(2) 设 \\(a_n=\\displaystyle\\int_{n\\pi}^{+\\infty}f(x)\\,dx\\)，求 \\(\\displaystyle\\sum_{n=1}^{\\infty}a_n\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 19
    },
    {
      "id": "高等数学-ch16-u145-p171",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 171,
      "printedPage": 172,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P357",
      "questionType": "证明题",
      "stem": "设数列 \\(\\{a_n\\}\\) 满足 \\(a_1=1\\)，\\((n+1)a_{n+1}=\\left(n+\\dfrac12\\right)a_n\\)。证明：当 \\(|x|<1\\) 时，幂级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}a_nx^n\\) 收敛，并求其和函数。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 20
    },
    {
      "id": "高等数学-ch16-u146-p172",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 172,
      "printedPage": 173,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数",
        "历史对话导入",
        "递推幂级数",
        "生成函数",
        "首项修正"
      ],
      "note": "",
      "sourceRef": "P358",
      "questionType": "填空题",
      "stem": "设级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}a_nx^n\\) 的系数 \\(a_n\\) 满足关系式 \\(a_n=\\dfrac{a_{n-1}}{n}+1-\\dfrac1n\\)，\\(n=2,3,\\cdots\\)，\\(a_1=2\\)，则当 \\(|x|<1\\) 时，级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}a_nx^n\\) 的和函数 \\(S(x)=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "\\(S(x)=\\frac{x}{1-x}+e^x-1,\\quad |x|<1\\)。",
      "analysis": "将递推改写为 \\(a_n-1=(a_{n-1}-1)/n\\)，且 \\(a_1-1=1\\)，可得 \\(a_n=1+1/n!\\)。因此 \\(S(x)=\\sum_{n\\ge1}x^n+\\sum_{n\\ge1}x^n/n!=x/(1-x)+e^x-1\\)。也可求得 \\(S'-S=2+x/(1-x)^2\\)，用 \\(S(0)=0\\) 定常数。",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数",
        "递推幂级数",
        "生成函数",
        "首项修正"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "kind": "history-conversation",
          "date": "2026-08-30",
          "verification": "历史订正检索与现有原题交叉核对",
          "sourceLabel": "历史订正：第21题"
        }
      ],
      "answerVerification": "本次独立推导复核",
      "errorCauseEvidence": "未确认个人具体错因",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "60a3bf1238cdc35f3fb3af6bc1960a80cd5225a1fd9bed3b33126fdd38cba0ad",
      "questionNo": 21
    },
    {
      "id": "高等数学-ch16-u147-p172",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 172,
      "printedPage": 173,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P358",
      "questionType": "选择题",
      "stem": "当 \\(|x|<1\\) 时，\\(\\displaystyle\\sum_{n=1}^{\\infty}\\left(1+\\dfrac1{2!}+\\dfrac1{3!}+\\cdots+\\dfrac1{n!}\\right)x^n=\\)（　）。",
      "options": [
        {
          "label": "A",
          "text": "\\(\\dfrac{e^x-e^{-x}}{1+x}\\)"
        },
        {
          "label": "B",
          "text": "\\(\\dfrac{e^x-e^{-x}}{1-x}\\)"
        },
        {
          "label": "C",
          "text": "\\(\\dfrac{e^x-1}{1+x}\\)"
        },
        {
          "label": "D",
          "text": "\\(\\dfrac{e^x-1}{1-x}\\)"
        }
      ],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 22
    },
    {
      "id": "高等数学-ch16-u148-p173",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 173,
      "printedPage": 174,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P359",
      "questionType": "证明题",
      "stem": "设数列 \\(\\{a_n\\},\\{b_n\\}\\) 满足 \\(\\displaystyle\\int_{a_n}^{\\tan a_n}e^{x^2}\\,dx=\\ln(1+b_n)^{b_n}\\)，\\(a_n>0\\)，\\(b_n>0\\)，\\(n=1,2,\\cdots\\)，且级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}a_n\\) 收敛。证明：(1) \\(\\displaystyle\\lim_{n\\to\\infty}b_n=0\\)；(2) 级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{b_n^2}{a_n^2}\\) 收敛。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 24
    },
    {
      "id": "高等数学-ch16-u149-p174",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 174,
      "printedPage": 175,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P360",
      "questionType": "计算题",
      "stem": "求级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n n^2}{2^n}\\) 的和。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 25
    },
    {
      "id": "高等数学-ch16-u150-p174",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 174,
      "printedPage": 175,
      "markerColor": "mixed",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P360",
      "questionType": "计算题",
      "stem": "设曲线 \\(y=x^{1/n}\\) 与其在点 \\((1,1)\\) 处的切线和 \\(y\\) 轴所围成的平面图形的面积为 \\(a_n\\)，其中 \\(n=2,3,\\cdots\\)。(1) 求 \\(a_n\\) 的表达式；(2) 求幂级数 \\(\\displaystyle\\sum_{n=2}^{\\infty}a_nx^n\\) 的收敛域与和函数 \\(S(x)\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 26
    },
    {
      "id": "高等数学-ch16-u151-p175",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 175,
      "printedPage": 176,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P361",
      "questionType": "计算题",
      "stem": "将函数 \\(f(x)=\\dfrac1{x^2}\\) 展开成 \\(x+1\\) 的幂级数，求该幂级数的收敛域，并求 \\(\\displaystyle\\sum_{n=1}^{\\infty}n^2(x+1)^n\\) 的和函数 \\(S(x)\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 28
    },
    {
      "id": "高等数学-ch16-u152-p177",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 177,
      "printedPage": 178,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "方法不熟",
      "tags": [
        "无穷级数",
        "历史对话导入",
        "高斯积分",
        "交错消项",
        "有限部分和"
      ],
      "note": "",
      "sourceRef": "P362",
      "questionType": "计算题",
      "stem": "设 \\(a_n=\\displaystyle\\int_0^{+\\infty}e^{-n^2x^2}\\,dx\\)，\\(n=1,2,\\cdots\\)，求 \\(\\displaystyle\\sum_{n=1}^{\\infty}(-1)^n a_na_{n+2}\\)。",
      "options": [],
      "answer": "\\(-\\frac{\\pi}{16}\\)。",
      "analysis": "\\(a_n=\\sqrt\\pi/(2n)\\)。故所求为 \\(\\frac\\pi4\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n(n+2)}=\\frac\\pi8\\sum_{n=1}^{\\infty}(-1)^n(\\frac1n-\\frac1{n+2})\\)。后一有限部分和为 \\(-\\frac12+(-1)^N(\\frac1{N+1}-\\frac1{N+2})\\)，令 \\(N\\to\\infty\\) 得 \\(-\\pi/16\\)。",
      "errorCause": "在无穷和中直接写不存在的“最后一项”，混淆求和变量n与部分和上限N。",
      "knowledgePoints": [
        "无穷级数",
        "高斯积分",
        "交错消项",
        "有限部分和"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "kind": "history-conversation",
          "date": "2026-08-30",
          "verification": "历史订正检索与现有原题交叉核对",
          "sourceLabel": "历史订正：第31题"
        }
      ],
      "answerVerification": "本次独立推导复核",
      "errorCauseEvidence": "历史订正检索；保留原题正文",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "dc887c9bba45b3b6281574bca02e18d5e9e20088694670050efe6403e74ab563",
      "questionNo": 31
    },
    {
      "id": "高等数学-ch16-u153-p177",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 177,
      "printedPage": 178,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P362",
      "questionType": "填空题",
      "stem": "级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{2n-1}{n!}\\) 的和为 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 32
    },
    {
      "id": "高等数学-ch16-u154-p177",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 177,
      "printedPage": 178,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P363",
      "questionType": "填空题",
      "stem": "\\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac1{(n+2)\\cdot n!}=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 33
    },
    {
      "id": "高等数学-ch16-u155-p178",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 178,
      "printedPage": 179,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P363",
      "questionType": "填空题",
      "stem": "\\(\\displaystyle\\sum_{n=0}^{\\infty}x^2 2^{-nx}\\)（\\(x>0\\)）的和函数 \\(S(x)=\\underline{\\qquad}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 34
    },
    {
      "id": "高等数学-ch16-u156-p178",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 178,
      "printedPage": 179,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P363",
      "questionType": "计算题",
      "stem": "求级数 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^n}{n(2n-1)}\\) 的和。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 35
    },
    {
      "id": "高等数学-ch16-u157-p179",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 179,
      "printedPage": 180,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数",
        "历史对话导入",
        "傅里叶级数",
        "狄利克雷收敛定理",
        "跳跃点左右极限"
      ],
      "note": "",
      "sourceRef": "P365",
      "questionType": "选择题",
      "stem": "设 \\(f(x)=\\begin{cases}x+1,&0\\le x\\le\\pi,\\\\0,&-\\pi\\le x<0,\\end{cases}\\) \\(S(x)=\\dfrac{a_0}{2}+\\displaystyle\\sum_{n=1}^{\\infty}(a_n\\cos nx+b_n\\sin nx)\\) 是 \\(f(x)\\) 以 \\(2\\pi\\) 为周期的傅里叶级数，则 \\(\\displaystyle\\sum_{n=1}^{\\infty}a_n=\\)（　）。",
      "options": [
        {
          "label": "A",
          "text": "\\(-\\dfrac\\pi4\\)"
        },
        {
          "label": "B",
          "text": "\\(\\dfrac\\pi4\\)"
        },
        {
          "label": "C",
          "text": "\\(-\\dfrac\\pi2\\)"
        },
        {
          "label": "D",
          "text": "\\(\\dfrac\\pi2\\)"
        }
      ],
      "answer": "A，\\(-\\frac\\pi4\\)。",
      "analysis": "\\(a_0=\\frac1\\pi\\int_0^\\pi(x+1)\\,dx=\\frac\\pi2+1\\)。在跳跃点0，傅里叶级数之和为 \\(S(0)=[f(0-)+f(0+)]/2=1/2\\)，不是 \\(f(0)=1\\)。因此 \\(\\sum_{n\\ge1}a_n=S(0)-a_0/2=-\\pi/4\\)。",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数",
        "傅里叶级数",
        "狄利克雷收敛定理",
        "跳跃点左右极限"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "kind": "history-conversation",
          "date": "2026-08-30",
          "verification": "历史订正检索与现有原题交叉核对",
          "sourceLabel": "历史订正：第37题"
        }
      ],
      "answerVerification": "本次独立推导复核",
      "errorCauseEvidence": "未确认个人具体错因",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "049625fb2addf8f264e19c9c0c7ff0f7ba2e58f67764b864cc1dfe9c389d729c",
      "questionNo": 37
    },
    {
      "id": "高等数学-ch16-u158-p180",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 180,
      "printedPage": 181,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P365",
      "questionType": "填空题",
      "stem": "设 \\(f(x)\\) 在 \\([-\\pi,\\pi]\\) 上连续且满足 \\(f(x+\\pi)=-f(x)\\)，则 \\(f(x)\\) 的傅里叶系数 \\(a_{2n}=\\underline{\\qquad}\\)（\\(n=1,2,\\cdots\\)）。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 39
    },
    {
      "id": "高等数学-ch16-u159-p181",
      "subject": "高等数学",
      "chapter": 16,
      "chapterTitle": "无穷级数",
      "sourcePage": 181,
      "printedPage": 182,
      "markerColor": "red",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "无穷级数"
      ],
      "note": "",
      "sourceRef": "P366",
      "questionType": "计算题",
      "stem": "设 \\(f(x)=1-x^2\\)（\\(0\\le x\\le\\pi\\)），\\(S(x)=\\dfrac{a_0}{2}+\\displaystyle\\sum_{n=1}^{\\infty}a_n\\cos nx\\)，\\(x\\in\\mathbb R\\)，其中 \\(a_n=\\dfrac2\\pi\\displaystyle\\int_0^\\pi f(x)\\cos nx\\,dx\\)，计算 \\(S(-\\pi)+\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n^2}\\)。",
      "options": [],
      "answer": "",
      "analysis": "",
      "errorCause": "",
      "knowledgePoints": [
        "无穷级数"
      ],
      "similarQuestionPrompt": "围绕“无穷级数”的核心考点，保持原题题型与难度，替换参数、函数或情境，生成一道可独立求解的新题；使用 LaTeX，并给出答案与分步解析。",
      "transcriptionStatus": "verified",
      "questionNo": 40
    },
    {
      "id": "hist-20260921-prob-cdf-mixture",
      "subject": "概率论与数理统计",
      "chapter": 2,
      "chapterTitle": "随机变量及其分布",
      "sourceRef": "历史对话 2026-09-21 · 例2.3",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "历史对话导入",
        "混合型分布",
        "条件均匀分布",
        "分布函数右连续"
      ],
      "note": "",
      "questionType": "计算题",
      "stem": "假设随机变量 \\(X\\) 的绝对值不大于 \\(1\\)，\\(P(X=-1)=\\frac18\\)，\\(P(X=1)=\\frac14\\)。在事件 \\(\\{-1<X<1\\}\\) 出现的条件下，\\(X\\) 在 \\((-1,1)\\) 内任一子区间上取值的条件概率与该子区间长度成正比。求分布函数 \\(F(x)=P(X\\le x)\\)。",
      "options": [],
      "knowledgePoints": [
        "混合型分布",
        "条件均匀分布",
        "分布函数右连续"
      ],
      "answer": "\\(F(x)=\\begin{cases}0,&x<-1,\\\\\\frac18+\\frac5{16}(x+1),&-1\\le x<1,\\\\1,&x\\ge1.\\end{cases}\\)",
      "analysis": "区间内概率质量为 \\(1-\\frac18-\\frac14=\\frac58\\)。条件密度为 \\(\\frac12\\)，故无条件连续部分密度为 \\(\\frac58\\cdot\\frac12=\\frac5{16}\\)。对 \\(-1\\le x<1\\)，累计概率必须加左端点质量 \\(\\frac18\\)；在 \\(x=1\\) 再跳跃 \\(\\frac14\\)。",
      "errorCause": "",
      "reviewFocus": "区分条件分布和无条件分布；累计概率不能漏掉端点质量。",
      "similarQuestionPrompt": "围绕混合型分布、条件均匀分布、分布函数右连续生成一道同类型但不同参数的考研数学题；使用文本和LaTeX，明确所有条件，并独立验证答案与解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_57546c1e4cac8191840ecc95b50b9567",
          "fileName": "FC56C887-664C-4078-BC44-4B367DB6C239.png",
          "kind": "history-image",
          "date": "2026-09-21",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；历史答案不直接作为正确性依据",
      "errorCauseEvidence": "未确认个人具体错因",
      "sourceLabel": "例2.3",
      "relatedGroup": "mixed-cdf-endpoints",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "bf3292f962c0a9f407b48a28275fd3eacee04fa43441ce7b2464bfcba53518a4",
      "questionNo": 3
    },
    {
      "id": "hist-20260921-prob-cdf-parameters",
      "subject": "概率论与数理统计",
      "chapter": 2,
      "chapterTitle": "随机变量及其分布",
      "sourceRef": "历史对话 2026-09-21 · 例2.2",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "概念不清",
      "tags": [
        "历史对话导入",
        "分布函数右连续",
        "端点开闭",
        "左极限"
      ],
      "note": "",
      "questionType": "填空题",
      "stem": "已知随机变量 \\(X\\) 的分布函数为 \\[F(x)=\\begin{cases}0,&x<-1,\\\\\\frac18,&x=-1,\\\\ax+b,&-1<x<1,\\\\1,&x\\ge1.\\end{cases}\\] 若 \\(P(-1<X<1)=\\frac58\\)，求 \\(a,b\\) 及 \\(P(-1\\le X<0)\\)。",
      "options": [],
      "knowledgePoints": [
        "分布函数右连续",
        "端点开闭",
        "左极限"
      ],
      "answer": "\\(a=\\frac5{16},\\quad b=\\frac7{16},\\quad P(-1\\le X<0)=\\frac7{16}\\)。",
      "analysis": "由右连续性 \\(F(-1+)=F(-1)\\)，得 \\(-a+b=\\frac18\\)。又 \\(P(-1<X<1)=F(1-)-F(-1)=a+b-\\frac18=\\frac58\\)，故 \\(a+b=\\frac34\\)。解得 \\(a=\\frac5{16},b=\\frac7{16}\\)。最后 \\(P(-1\\le X<0)=F(0-)-F(-1-)=b-0=\\frac7{16}\\)。",
      "errorCause": "混淆分布函数与区间概率，忽略左极限及端点是否计入。",
      "reviewFocus": "",
      "similarQuestionPrompt": "围绕分布函数右连续、端点开闭、左极限生成一道同类型但不同参数的考研数学题；使用文本和LaTeX，明确所有条件，并独立验证答案与解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_86427e78c3e08191b8330c3d2bb66331",
          "fileName": "0873C077-A863-4F51-8895-026128B08F5B.png",
          "kind": "history-image",
          "date": "2026-09-21",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；历史答案不直接作为正确性依据",
      "errorCauseEvidence": "历史订正检索；未将系统复盘建议冒充用户原始笔迹",
      "sourceLabel": "例2.2",
      "relatedGroup": "mixed-cdf-endpoints",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "61a0f84e38a60c3e894757065aaa3d61c9cc298f94899d51fe5277c24c2573ab",
      "questionNo": 2
    },
    {
      "id": "hist-20260921-prob-zero-event",
      "subject": "概率论与数理统计",
      "chapter": 1,
      "chapterTitle": "随机事件与概率",
      "sourceRef": "历史对话 2026-09-21 · 题1",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "概念不清",
      "tags": [
        "历史对话导入",
        "零概率事件",
        "事件包含",
        "互斥与独立"
      ],
      "note": "",
      "questionType": "选择题",
      "stem": "设 \\(P(A)=P(AB)\\)，且 \\(P(A),P(B)\\in(0,1)\\)。下列四个结论中，必然正确的个数为（ ）。① \\(A\\) 与 \\(\\overline B\\) 互斥；② \\(A\\subset B\\)；③ \\(A\\) 与 \\(B\\) 独立；④ \\(\\overline A\\cup B=\\Omega\\)。",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "3"
        }
      ],
      "knowledgePoints": [
        "零概率事件",
        "事件包含",
        "互斥与独立"
      ],
      "answer": "A（0个；按一般概率空间的严格集合定义）。",
      "analysis": "由条件只能推出 \\(P(A\\cap\\overline B)=0\\)，不能推出 \\(A\\cap\\overline B=\\varnothing\\)。例如 \\(\\Omega=[0,1]\\) 上均匀取点，\\(B=[0,\\frac12]\\)，\\(A=B\\cup\\{1\\}\\)，①②④均不成立。若独立，则 \\(P(A)=P(A)P(B)\\)，因 \\(P(A)>0\\) 得 \\(P(B)=1\\)，与题设矛盾。",
      "errorCause": "将概率为0的事件等同于空事件，从而把概率相等误推为严格集合包含。",
      "reviewFocus": "",
      "similarQuestionPrompt": "围绕零概率事件、事件包含、互斥与独立生成一道同类型但不同参数的考研数学题；使用文本和LaTeX，明确所有条件，并独立验证答案与解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_99b86f00534881918da18733e49c055c",
          "fileName": "B719C792-7012-438E-ADF4-8D53193A4150.png",
          "kind": "history-image",
          "date": "2026-09-21",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；历史答案不直接作为正确性依据",
      "errorCauseEvidence": "历史订正检索；未将系统复盘建议冒充用户原始笔迹",
      "transcriptionNote": "将原题“正确”解释为由题设必然推出。若另加有限等可能且每个样本点概率为正的假设，①②④才可推出；原题未给此假设。",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "c8cacd9cb0eddaa68928b3c89d9cb1eb367b8bc8d28c90ac04a7b4bdb47a9fb4",
      "questionNo": 1
    },
    {
      "id": "hist-20260921-prob-match",
      "subject": "概率论与数理统计",
      "chapter": 1,
      "chapterTitle": "随机事件与概率",
      "sourceRef": "历史对话 2026-09-21 · 题9",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "计算错误",
      "tags": [
        "历史对话导入",
        "独立重复试验",
        "二项分布",
        "比赛提前结束"
      ],
      "note": "",
      "questionType": "计算题",
      "stem": "甲、乙进行围棋比赛，甲每局获胜的概率为 \\(0.6\\)，各局互不干扰。比赛可采用三局两胜制或五局三胜制，哪种赛制对甲更有利？",
      "options": [],
      "knowledgePoints": [
        "独立重复试验",
        "二项分布",
        "比赛提前结束"
      ],
      "answer": "三局两胜胜率 \\(0.648\\)，五局三胜胜率 \\(0.68256\\)；五局三胜更有利。",
      "analysis": "可补足未实际进行的独立比赛，不改变最终获胜事件。三局胜率为 \\(\\binom32 0.6^2 0.4+0.6^3=0.648\\)。五局胜率为 \\(\\binom53 0.6^3 0.4^2+\\binom54 0.6^4 0.4+0.6^5=0.68256\\)。",
      "errorCause": "用反面事件计算三局胜率时漏减三局全输的概率 \\(0.4^3\\)。",
      "reviewFocus": "",
      "similarQuestionPrompt": "围绕独立重复试验、二项分布、比赛提前结束生成一道同类型但不同参数的考研数学题；使用文本和LaTeX，明确所有条件，并独立验证答案与解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_b6341d3deedc8191a47877dd4965299a",
          "fileName": "38CC60C5-A1ED-4AFC-B492-99DFC14BE290.png",
          "kind": "history-image",
          "date": "2026-09-21",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；历史答案不直接作为正确性依据",
      "errorCauseEvidence": "历史订正检索；未将系统复盘建议冒充用户原始笔迹",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "cbd37e38e96c9171796714af331b59efc886b18f07c34d6150bd3d4a1a380368",
      "questionNo": 9
    },
    {
      "id": "hist-20260921-prob-first-hit",
      "subject": "概率论与数理统计",
      "chapter": 1,
      "chapterTitle": "随机事件与概率",
      "sourceRef": "历史对话 2026-09-21 · 题10",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "计算错误",
      "tags": [
        "历史对话导入",
        "首次成功",
        "等比级数",
        "独立事件乘法"
      ],
      "note": "",
      "questionType": "计算题",
      "stem": "甲乙两人轮流射击，甲先射，甲乙每次中靶的概率分别为 \\(0.3\\) 和 \\(0.4\\)，各次射击相互独立。求甲首先中靶的概率。",
      "options": [],
      "knowledgePoints": [
        "首次成功",
        "等比级数",
        "独立事件乘法"
      ],
      "answer": "\\(\\frac{15}{29}\\)。",
      "analysis": "若前 \\(k\\) 轮两人都未中，第 \\(k+1\\) 轮甲命中，其概率为 \\((0.7\\cdot0.6)^k0.3\\)。这些事件互斥，故所求为 \\(\\sum_{k=0}^{\\infty}0.42^k0.3=\\frac{0.3}{1-0.42}=\\frac{15}{29}\\)。",
      "errorCause": "第二轮甲首次命中的一项漏乘第一轮甲未中的概率 \\(0.7\\)；应为 \\(0.7\\cdot0.6\\cdot0.3\\)。",
      "reviewFocus": "",
      "similarQuestionPrompt": "围绕首次成功、等比级数、独立事件乘法生成一道同类型但不同参数的考研数学题；使用文本和LaTeX，明确所有条件，并独立验证答案与解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_14f60ced8ef48191981be4dd194d93eb",
          "fileName": "38868ED9-D6F6-4779-ADAA-32097C11F981.png",
          "kind": "history-image",
          "date": "2026-09-21",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；历史答案不直接作为正确性依据",
      "errorCauseEvidence": "历史订正检索；未将系统复盘建议冒充用户原始笔迹",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "0470dfd15849a6147eadf512c21f4912273e8b74d026802b0e6ca246f52dca70",
      "questionNo": 10
    },
    {
      "id": "hist-20260921-prob-basketball",
      "subject": "概率论与数理统计",
      "chapter": 1,
      "chapterTitle": "随机事件与概率",
      "sourceRef": "历史对话 2026-09-21 · 题12",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "历史对话导入",
        "二项分布",
        "互斥分类",
        "独立事件乘法"
      ],
      "note": "",
      "questionType": "计算题",
      "stem": "甲、乙两人投篮，命中率分别为 \\(0.7\\) 和 \\(0.6\\)，每人投两次。求甲比乙进球数多的概率。",
      "options": [],
      "knowledgePoints": [
        "二项分布",
        "互斥分类",
        "独立事件乘法"
      ],
      "answer": "\\(0.3808\\)（按各次投篮独立的通常模型）。",
      "analysis": "设甲乙进球数分别为 \\(X,Y\\)。按独立投篮模型，\\(X\\sim B(2,0.7),Y\\sim B(2,0.6)\\)，且相互独立。枚举 \\((X,Y)=(1,0),(2,0),(2,1)\\)：\\(P(X>Y)=0.42\\cdot0.16+0.49\\cdot0.16+0.49\\cdot0.48=0.3808\\)。",
      "errorCause": "",
      "reviewFocus": "先列出互斥的进球数组合，再分别计算概率，不混用排列与组合。",
      "similarQuestionPrompt": "围绕二项分布、互斥分类、独立事件乘法生成一道同类型但不同参数的考研数学题；使用文本和LaTeX，明确所有条件，并独立验证答案与解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_6d66139c4cdc8191a1b243a1a1db6cd4",
          "fileName": "76010D83-1985-4D06-BE24-2F069A919EBA.png",
          "kind": "history-image",
          "date": "2026-09-21",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；历史答案不直接作为正确性依据",
      "errorCauseEvidence": "未确认个人具体错因",
      "transcriptionNote": "原图未显式写明各次投篮独立。上述解答基于通常独立投篮模型；只给边际命中率而不约定独立性，概率不能唯一确定。",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "51ebc0f0926fe249ee770712b1f0dc26cca30c6af1aee82ecf410296ce529219",
      "questionNo": 12
    },
    {
      "id": "hist-20260921-prob-defects",
      "subject": "概率论与数理统计",
      "chapter": 1,
      "chapterTitle": "随机事件与概率",
      "sourceRef": "历史对话 2026-09-21 · 题8",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "审题错误",
      "tags": [
        "历史对话导入",
        "古典概型",
        "位置法",
        "抽样停止时刻",
        "题意辨析"
      ],
      "note": "",
      "questionType": "填空题",
      "stem": "10个同规格的零件中混入3个次品，现进行逐个检查，则查完5个零件时正好查出3个次品的概率为 \\(\\underline{\\qquad}\\)。",
      "options": [],
      "knowledgePoints": [
        "古典概型",
        "位置法",
        "抽样停止时刻",
        "题意辨析"
      ],
      "answer": "配套解析采用“第5次首次找齐3个次品”：\\(\\frac{\\binom42}{\\binom{10}3}=\\frac1{20}\\)。若仅表示“前5个中共有3个次品”，则为 \\(\\frac{\\binom53}{\\binom{10}3}=\\frac1{12}\\)。",
      "analysis": "按配套解析，第5个位置必须为次品，另两个次品的位置从前4个位置选，共 \\(\\binom42\\) 种；全部次品位置共 \\(\\binom{10}3\\) 种。位置样本空间中不再乘 \\(\\binom72\\)，否则混用了“选零件身份”和“选次品位置”两个空间。若不要求第5个首次找齐，则次品位置可为前5个任取3个，得另一答案。",
      "errorCause": "历史提问集中于为什么不乘组合数C(7,2)；历史回答与后续配套解析对“正好查出”的解释存在冲突，不能单据其中一条判定个人错误。",
      "reviewFocus": "",
      "similarQuestionPrompt": "围绕古典概型、位置法、抽样停止时刻、题意辨析生成一道同类型但不同参数的考研数学题；使用文本和LaTeX，明确所有条件，并独立验证答案与解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_a174b15e728481919900313d59c3b679",
          "fileName": "A973F71D-CFC0-49DF-ADB1-CC42BF3939B2.png",
          "kind": "history-image",
          "date": "2026-09-21",
          "verification": "原始图片目视转写"
        },
        {
          "fileId": "libfile_ac4d117ee7448191918287f702dd1ddf",
          "fileName": "E2960067-DDE1-4390-A132-12053F7065B5.png",
          "kind": "history-image",
          "date": "2026-09-21",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；历史答案不直接作为正确性依据",
      "errorCauseEvidence": "历史订正检索；未将系统复盘建议冒充用户原始笔迹",
      "transcriptionNote": "保留原题歧义，配套解析截图明确为1/20；历史回答出现1/12，已同时注明适用题意。",
      "interpretationStatus": "ambiguous-source-resolved-by-supplied-solution",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "870e7377909744e8ed135736eaf4f4a4a424599477c1abe2e731345667269727",
      "questionNo": 8
    },
    {
      "id": "hist-20260920-prob-event-simplify",
      "subject": "概率论与数理统计",
      "chapter": 1,
      "chapterTitle": "随机事件与概率",
      "sourceRef": "历史对话 2026-09-20 · 例1.1",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "历史对话导入",
        "事件运算",
        "德摩根律",
        "条件概率"
      ],
      "note": "",
      "questionType": "计算题",
      "stem": "已知 \\(P(A)=\\frac12\\)，\\(P(ABC)=\\frac14\\)。求 \\[P\\!\\left[(A+B)(A+\\overline B)+\\overline{\\overline A+B}\\,\\middle|\\,(\\overline A+\\overline B+\\overline C)\\right].\\] 其中加号表示事件的并，乘积表示交。",
      "options": [],
      "knowledgePoints": [
        "事件运算",
        "德摩根律",
        "条件概率"
      ],
      "answer": "\\(\\frac13\\)。",
      "analysis": "条件左侧事件：\\((A+B)(A+\\overline B)=A\\)，且 \\(\\overline{\\overline A+B}=A\\overline B\\subseteq A\\)，故整个事件化为 \\(A\\)。条件事件为 \\(\\overline{ABC}\\)。所以 \\(P(A\\mid\\overline{ABC})=\\frac{P(A)-P(ABC)}{1-P(ABC)}=\\frac{1/4}{3/4}=\\frac13\\)。",
      "errorCause": "",
      "reviewFocus": "先做事件集合化简；条件概率的分母是条件事件概率。",
      "similarQuestionPrompt": "围绕事件运算、德摩根律、条件概率生成一道同类型但不同参数的考研数学题；使用文本和LaTeX，明确所有条件，并独立验证答案与解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_c9b7f5029cdc8191870ace7c796704f5",
          "fileName": "474B3CB0-5623-424D-8D3D-8146A5849EE4.png",
          "date": "2026-09-20",
          "kind": "history-image",
          "verification": "原图目视核对条件概率竖线及双层补号"
        }
      ],
      "answerVerification": "本次独立推导复核；历史答案不直接作为正确性依据",
      "errorCauseEvidence": "未确认个人具体错因",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "39115bd4ea610166c399cd6953730910be7522b6f8b5d210f0513e9c97c8fbca",
      "questionNo": 1
    },
    {
      "id": "hist-20260921-prob-pairwise",
      "subject": "概率论与数理统计",
      "chapter": 1,
      "chapterTitle": "随机事件与概率",
      "sourceRef": "历史对话 2026-09-21 · 题9",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "历史对话导入",
        "几何概率",
        "两两独立",
        "相互独立"
      ],
      "note": "",
      "questionType": "选择题",
      "stem": "在区域 \\(D=\\{(x,y):|x|\\le1,\\ |y|\\le1\\}\\) 上等可能取点。设 \\(A_1=\\{x\\ge0\\}\\)，\\(A_2=\\{y\\ge0\\}\\)，\\(A_3=\\{xy\\ge0\\}\\)，\\(A_4=\\{|x|+|y|\\le1\\}\\)。下列哪组事件两两独立但不相互独立？",
      "options": [
        {
          "label": "A",
          "text": "\\(A_1,A_2,A_3\\)"
        },
        {
          "label": "B",
          "text": "\\(A_1,A_2,A_4\\)"
        },
        {
          "label": "C",
          "text": "\\(A_1,A_3,A_4\\)"
        },
        {
          "label": "D",
          "text": "\\(A_2,A_3,A_4\\)"
        }
      ],
      "knowledgePoints": [
        "几何概率",
        "两两独立",
        "相互独立"
      ],
      "answer": "A。",
      "analysis": "四个事件概率均为 \\(\\frac12\\)。\\(A_1,A_2,A_3\\) 任意两事件交集概率均为 \\(\\frac14\\)，但三者交集为第一象限，概率 \\(\\frac14\\ne\\frac18\\)，故不相互独立。其余三组的任意二重交为 \\(\\frac14\\)，三重交均为 \\(\\frac18\\)。",
      "errorCause": "",
      "reviewFocus": "两两独立只检查二重交；三个事件相互独立还必须检查三重交。",
      "similarQuestionPrompt": "围绕几何概率、两两独立、相互独立生成一道同类型但不同参数的考研数学题；使用文本和LaTeX，明确所有条件，并独立验证答案与解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_ac7f52c9178c8191b3d28c0266622bb1",
          "fileName": "186AD621-DA45-4B3B-A2D3-19D81AD74F11.png",
          "kind": "history-image",
          "date": "2026-09-21",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；历史答案不直接作为正确性依据",
      "errorCauseEvidence": "未确认个人具体错因",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "24091d42ea8d92d44ef3565d981f2d220992a2e61cfe3440c91940a0aadfd06a",
      "questionNo": 9
    },
    {
      "id": "hist-20260920-prob-exactly-one",
      "subject": "概率论与数理统计",
      "chapter": 1,
      "chapterTitle": "随机事件与概率",
      "sourceRef": "历史对话 2026-09-20 · 例1.3（2020）",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "历史对话导入",
        "恰有一个发生",
        "容斥原理",
        "事件分解"
      ],
      "note": "",
      "questionType": "选择题",
      "stem": "设 \\(A,B,C\\) 为三个随机事件，\\(P(A)=P(B)=P(C)=\\frac14\\)，\\(P(AB)=0\\)，\\(P(AC)=P(BC)=\\frac1{12}\\)。求三事件中恰有一个发生的概率。",
      "options": [
        {
          "label": "A",
          "text": "\\(\\frac34\\)"
        },
        {
          "label": "B",
          "text": "\\(\\frac23\\)"
        },
        {
          "label": "C",
          "text": "\\(\\frac12\\)"
        },
        {
          "label": "D",
          "text": "\\(\\frac5{12}\\)"
        }
      ],
      "knowledgePoints": [
        "恰有一个发生",
        "容斥原理",
        "事件分解"
      ],
      "answer": "D，\\(\\frac5{12}\\)。",
      "analysis": "由 \\(ABC\\subseteq AB\\) 得 \\(P(ABC)=0\\)。恰有一个发生的概率为 \\(P(A)+P(B)+P(C)-2[P(AB)+P(AC)+P(BC)]+3P(ABC)=\\frac34-2\\cdot\\frac16=\\frac5{12}\\)。",
      "errorCause": "",
      "reviewFocus": "“恰有一个”不是“至少一个”，二重交应减两次。",
      "similarQuestionPrompt": "围绕恰有一个发生、容斥原理、事件分解生成一道同类型但不同参数的考研数学题；使用文本和LaTeX，明确所有条件，并独立验证答案与解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_487fcde2cdfc8191b0403649449f0c2f",
          "fileName": "2CE55EE7-5862-4C07-8A68-5020B78AA451.png",
          "date": "2026-09-20",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；历史答案不直接作为正确性依据",
      "errorCauseEvidence": "未确认个人具体错因",
      "sourceLabel": "例1.3（2020）",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "997790afc2be39e3c516a9c411d5b0d3b11659a79e1501a345b291784d9f3c58",
      "questionNo": 3
    },
    {
      "id": "hist-20260914-linear-jordan",
      "subject": "线性代数",
      "chapter": 5,
      "chapterTitle": "特征值、特征向量与相似",
      "sourceRef": "历史对话 2026-09-14 · 题21",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "方法不熟",
      "tags": [
        "历史对话导入",
        "相似变换",
        "按列比较",
        "广义特征向量",
        "几何重数"
      ],
      "note": "",
      "questionType": "证明与计算题",
      "stem": "设 \\(A\\) 为三阶方阵，存在可逆矩阵 \\(P=(p_1,p_2,p_3)\\)，使 \\(P^{-1}AP=J=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&0&1\\end{pmatrix}\\)。\n（1）证明 \\(p_1,p_2\\) 是 \\((E-A)x=0\\) 的解，\\(p_3\\) 是 \\((E-A)x=-p_2\\) 的解，且 \\(A\\) 不可相似对角化。\n（2）当 \\(A=\\begin{pmatrix}2&-1&-1\\\\2&-1&-2\\\\-1&1&2\\end{pmatrix}\\) 时，求一个满足上述等式的可逆矩阵 \\(P\\)。",
      "options": [],
      "knowledgePoints": [
        "相似变换",
        "按列比较",
        "广义特征向量",
        "几何重数"
      ],
      "answer": "可取 \\(P=\\begin{pmatrix}1&1&1\\\\1&2&0\\\\0&-1&0\\end{pmatrix}\\)，此时 \\(\\det P=-1\\)，\\(AP=PJ\\)。",
      "analysis": "由 \\(AP=PJ\\) 按列得 \\(Ap_1=p_1,Ap_2=p_2,Ap_3=p_2+p_3\\)，即所需方程。\\(A\\) 的唯一特征值是1，但 \\(A\\ne E\\)（否则 \\(J=E\\)），故不可能相似对角化。具体矩阵满足 \\(A-E=\\begin{pmatrix}1&-1&-1\\\\2&-2&-2\\\\-1&1&1\\end{pmatrix}\\)，核空间为 \\(x_1=x_2+x_3\\)。选 \\(p_3=(1,0,0)^T\\)，则 \\(p_2=(A-E)p_3=(1,2,-1)^T\\)，再取与之无关的核向量 \\(p_1=(1,1,0)^T\\)。",
      "errorCause": "行变换把相关行误化成额外主元；混淆任意特征向量与可作为(A-E)p3的p2；移项时遗漏负号。",
      "reviewFocus": "",
      "similarQuestionPrompt": "围绕相似变换、按列比较、广义特征向量、几何重数生成一道同类型不同参数的考研数学题；使用LaTeX，独立验证条件、答案和解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_2dfb42e5f0688191bd3d61f906abac29",
          "fileName": "C8196F87-DAA6-4B6A-8121-17B6668EABA3.png",
          "date": "2026-09-14",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        },
        {
          "fileId": "libfile_c687eca708d48191a1591500a3441492",
          "fileName": "1BE99A56-B842-41A0-B22E-38160F5E4304.png",
          "date": "2026-09-15",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；不直接照抄历史答案",
      "errorCauseEvidence": "历史订正检索",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "7fc66fd4442db5c836e5009411f6b40f991fcca824664f758e423a306fcf2cbd",
      "questionNo": 21
    },
    {
      "id": "hist-20260914-linear-rayleigh",
      "subject": "线性代数",
      "chapter": 6,
      "chapterTitle": "二次型",
      "sourceRef": "历史对话 2026-09-14 · 二次型最值例1（2022数二、三）",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "方法不熟",
      "tags": [
        "历史对话导入",
        "正交对角化",
        "特征向量单位化",
        "瑞利商"
      ],
      "note": "",
      "questionType": "证明与计算题",
      "stem": "已知二次型 \\(f(x_1,x_2,x_3)=3x_1^2+4x_2^2+3x_3^2+2x_1x_3\\)。（1）求正交变换 \\(x=Qy\\) 化为标准形；（2）证明 \\(\\min_{x\\ne0}\\frac{f(x)}{x^Tx}=2\\)。",
      "options": [],
      "knowledgePoints": [
        "正交对角化",
        "特征向量单位化",
        "瑞利商"
      ],
      "answer": "可取 \\(Q=\\begin{pmatrix}1/\\sqrt2&0&1/\\sqrt2\\\\0&1&0\\\\1/\\sqrt2&0&-1/\\sqrt2\\end{pmatrix}\\)，标准形 \\(4y_1^2+4y_2^2+2y_3^2\\)；最小值为2。",
      "analysis": "矩阵 \\(A=\\begin{pmatrix}3&0&1\\\\0&4&0\\\\1&0&3\\end{pmatrix}\\) 的特征值为 \\(4,4,2\\)，选取正交单位特征向量作为 \\(Q\\) 的列。因 \\(Q^TQ=E\\)，\\(x^Tx=y^Ty\\)，商值为 \\(\\frac{4y_1^2+4y_2^2+2y_3^2}{y_1^2+y_2^2+y_3^2}\\ge2\\)，在 \\(y_1=y_2=0,y_3\\ne0\\) 时等号成立。",
      "errorCause": "取特征向量(1,0,±1)后未单位化，不能直接把该矩阵当正交矩阵。",
      "reviewFocus": "",
      "similarQuestionPrompt": "围绕正交对角化、特征向量单位化、瑞利商生成一道同类型不同参数的考研数学题；使用LaTeX，独立验证条件、答案和解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_ede1c6ee961c8191b1d4f81b8dea0b68",
          "fileName": "9EFD4DD6-7ECC-4465-BEED-5E88036A6092.png",
          "date": "2026-09-14",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        },
        {
          "fileId": "libfile_eb04befc1ed88191ad906d5f24fd95a4",
          "fileName": "158C8B99-36F6-45AE-99DB-A9DE25BB5112.png",
          "date": "2026-09-14",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；不直接照抄历史答案",
      "errorCauseEvidence": "历史订正检索",
      "sourceLabel": "二次型最值例1（2022数二、三）",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "fce1f73c78ea0b13922d548ff31cac6bec9c8febb0a38233d16cf8042e7744f7",
      "questionNo": 1
    },
    {
      "id": "hist-20260914-linear-adjugate-bound",
      "subject": "线性代数",
      "chapter": 6,
      "chapterTitle": "二次型",
      "sourceRef": "历史对话 2026-09-14 · 二次型最值例2",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "历史对话导入",
        "伴随矩阵特征值",
        "实对称矩阵",
        "二次型界"
      ],
      "note": "",
      "questionType": "填空题",
      "stem": "设三阶实对称矩阵 \\(A\\) 的特征值为 \\(2,3,4\\)，\\(A^*\\) 为伴随矩阵。若任意三维实列向量 \\(x\\) 都满足 \\(\\left|x^TA^*x-x^TAx\\right|\\le a x^Tx\\)，求 \\(a\\) 的最小值。",
      "options": [],
      "knowledgePoints": [
        "伴随矩阵特征值",
        "实对称矩阵",
        "二次型界"
      ],
      "answer": "\\(a_{\\min}=10\\)。",
      "analysis": "因 \\(\\det A=24\\)，\\(A^*=24A^{-1}\\)。在 \\(A\\) 的正交特征基下，\\(A^*-A\\) 的特征值依次为 \\(12-2=10,8-3=5,6-4=2\\)。故 \\(|x^T(A^*-A)x|\\le10x^Tx\\)，且在特征值2对应的非零特征向量上取等号。",
      "errorCause": "",
      "reviewFocus": "对A*与A使用同一组特征向量，先算差矩阵的特征值，再取绝对值最大者。",
      "similarQuestionPrompt": "围绕伴随矩阵特征值、实对称矩阵、二次型界生成一道同类型不同参数的考研数学题；使用LaTeX，独立验证条件、答案和解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_ede1c6ee961c8191b1d4f81b8dea0b68",
          "fileName": "9EFD4DD6-7ECC-4465-BEED-5E88036A6092.png",
          "date": "2026-09-14",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        },
        {
          "fileId": "libfile_eb04befc1ed88191ad906d5f24fd95a4",
          "fileName": "158C8B99-36F6-45AE-99DB-A9DE25BB5112.png",
          "date": "2026-09-14",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；不直接照抄历史答案",
      "errorCauseEvidence": "未确认个人具体错因",
      "sourceLabel": "二次型最值例2",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "966e8701bf4c1d3a928a6c38ac2eb4302d9553486bd2aae3e141c2074557adfc",
      "questionNo": 2
    },
    {
      "id": "hist-20260914-linear-congruence-maximum",
      "subject": "线性代数",
      "chapter": 6,
      "chapterTitle": "二次型",
      "sourceRef": "历史对话 2026-09-14 · 二次型最值例3",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "历史对话导入",
        "合同变换",
        "惯性定律",
        "单位球面最值"
      ],
      "note": "",
      "questionType": "计算题",
      "stem": "已知二次型 \\(f(x_1,x_2,x_3)=x_1^2+2x_2^2+ax_3^2+2x_1x_3\\) 经可逆线性变换 \\(x=Py\\) 化为 \\(y_1^2+y_3^2\\)。\n（1）求 \\(a\\) 及一个可逆矩阵 \\(P\\)。\n（2）在 \\(x^Tx=1\\) 时求 \\(f\\) 的最大值，并求满足 \\(x_1=x_2>0\\) 的最大值点。",
      "options": [],
      "knowledgePoints": [
        "合同变换",
        "惯性定律",
        "单位球面最值"
      ],
      "answer": "\\(a=1\\)，可取 \\(P=\\begin{pmatrix}1&-1&0\\\\0&0&1/\\sqrt2\\\\0&1&0\\end{pmatrix}\\)。最大值为2；所求点为 \\((1/\\sqrt3,1/\\sqrt3,1/\\sqrt3)\\)。",
      "analysis": "目标二次型秩为2且半正定。原矩阵行列式为 \\(2(a-1)\\)，故 \\(a=1\\)，这时 \\(f=(x_1+x_3)^2+2x_2^2\\)。令 \\(x_1=y_1-y_2,x_3=y_2,x_2=y_3/\\sqrt2\\) 即得所需合同变换。另 \\(f\\le2(x_1^2+x_2^2+x_3^2)=2\\)，等号条件为 \\(x_1=x_3\\)。再由 \\(x_1=x_2>0\\) 和单位长度，得三个坐标均为 \\(1/\\sqrt3\\)。",
      "errorCause": "",
      "reviewFocus": "一般可逆变换不保持长度，不能直接在合同标准形上把原约束替换成y的单位球面。",
      "similarQuestionPrompt": "围绕合同变换、惯性定律、单位球面最值生成一道同类型不同参数的考研数学题；使用LaTeX，独立验证条件、答案和解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_ede1c6ee961c8191b1d4f81b8dea0b68",
          "fileName": "9EFD4DD6-7ECC-4465-BEED-5E88036A6092.png",
          "date": "2026-09-14",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        },
        {
          "fileId": "libfile_eb04befc1ed88191ad906d5f24fd95a4",
          "fileName": "158C8B99-36F6-45AE-99DB-A9DE25BB5112.png",
          "date": "2026-09-14",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；不直接照抄历史答案",
      "errorCauseEvidence": "未确认个人具体错因",
      "sourceLabel": "二次型最值例3",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "52f96d55c9f31e5b68f579198d5aef12e95ccf11c3901267f4c9a7a2fb449df7",
      "questionNo": 3
    },
    {
      "id": "hist-20260915-linear-congruence",
      "subject": "线性代数",
      "chapter": 6,
      "chapterTitle": "二次型",
      "sourceRef": "历史对话 2026-09-15 · 题5",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "概念不清",
      "tags": [
        "历史对话导入",
        "合同与相似",
        "正负惯性指数",
        "特征多项式"
      ],
      "note": "",
      "questionType": "选择题",
      "stem": "二次型 \\(f=x_1^2+ax_2^2+x_3^2+2bx_1x_3\\) 经可逆线性变换 \\(x=Py\\) 可化为 \\(g=-y_1^2-3y_2^2+3y_3^2+8y_2y_3\\)。求参数 \\(a,b\\) 的取值范围。",
      "options": [
        {
          "label": "A",
          "text": "\\(a>0,-1<b<1\\)"
        },
        {
          "label": "B",
          "text": "\\(a<0,-1<b<1\\)"
        },
        {
          "label": "C",
          "text": "\\(a>0,b>1\\text{或}b<-1\\)"
        },
        {
          "label": "D",
          "text": "\\(a<0,b>1\\text{或}b<-1\\)"
        }
      ],
      "knowledgePoints": [
        "合同与相似",
        "正负惯性指数",
        "特征多项式"
      ],
      "answer": "D：\\(a<0,\\ |b|>1\\)。",
      "analysis": "目标矩阵 \\(B=\\begin{pmatrix}-1&0&0\\\\0&-3&4\\\\0&4&3\\end{pmatrix}\\) 的特征值为 \\(-1,-5,5\\)，正负惯性指数为 \\((1,2)\\)。原矩阵特征值为 \\(a,1+b,1-b\\)。后两者之和为2，若要整体只有1个正值、2个负值，必须 \\(a<0\\) 且 \\(1+b,1-b\\) 一正一负，即 \\(|b|>1\\)。",
      "errorCause": "将合同关系误当成相似关系，要求特征值相同；并在(λ+3)(λ-3)-16的常数项计算中出错。",
      "reviewFocus": "",
      "similarQuestionPrompt": "围绕合同与相似、正负惯性指数、特征多项式生成一道同类型不同参数的考研数学题；使用LaTeX，独立验证条件、答案和解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_4a0329ced6a08191b9e71298786d75d0",
          "fileName": "CBC490FD-65C7-4374-A175-A7822AFD2406.png",
          "date": "2026-09-15",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        },
        {
          "fileId": "libfile_1f55eff9ec60819186d5a10242fe3539",
          "fileName": "B438CEA1-7A2E-4F12-B45E-E812ECE30457.png",
          "date": "2026-09-15",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；不直接照抄历史答案",
      "errorCauseEvidence": "历史订正检索",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "e7877d4580468b4d2c48250845ceaafed4a28d222551a3e4144c549bc4f32649",
      "questionNo": 5
    },
    {
      "id": "hist-20260915-linear-matrix-expression",
      "subject": "线性代数",
      "chapter": 6,
      "chapterTitle": "二次型",
      "sourceRef": "历史对话 2026-09-15 · 题1",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "历史对话导入",
        "二次型矩阵表示",
        "对称化",
        "交叉项系数"
      ],
      "note": "",
      "questionType": "选择题",
      "stem": "已知二次型 \\(f=x_1^2+3x_2^2+5x_3^2-4x_1x_2+8x_2x_3\\)。下列哪个矩阵表达式等于 \\(f\\)？",
      "options": [
        {
          "label": "A",
          "text": "\\(x^T\\begin{pmatrix}1&-1&2\\\\-3&3&2\\\\-2&6&5\\end{pmatrix}x\\)"
        },
        {
          "label": "B",
          "text": "\\(x^T\\begin{pmatrix}1&-2&0\\\\-2&5&4\\\\0&4&3\\end{pmatrix}x\\)"
        },
        {
          "label": "C",
          "text": "\\(x^T\\begin{pmatrix}1&0&-2\\\\0&3&4\\\\-2&4&5\\end{pmatrix}x\\)"
        },
        {
          "label": "D",
          "text": "\\(x^T\\begin{pmatrix}1&-2&4\\\\-2&3&0\\\\4&0&5\\end{pmatrix}x\\)"
        }
      ],
      "knowledgePoints": [
        "二次型矩阵表示",
        "对称化",
        "交叉项系数"
      ],
      "answer": "A。",
      "analysis": "一般矩阵 \\(M\\) 也可以放入 \\(x^TMx\\)，且 \\(x^TMx=x^T\\frac{M+M^T}{2}x\\)。交叉项 \\(x_ix_j\\) 的系数是 \\(m_{ij}+m_{ji}\\)。A项的对角元为1、3、5，交叉项系数依次为 \\(-1-3=-4,\\ 2-2=0,\\ 2+6=8\\)，完全符合。",
      "errorCause": "",
      "reviewFocus": "标准二次型矩阵取对称矩阵，但表达式x^TMx里的M本身不必对称。",
      "similarQuestionPrompt": "围绕二次型矩阵表示、对称化、交叉项系数生成一道同类型不同参数的考研数学题；使用LaTeX，独立验证条件、答案和解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_d7d0c1436fa88191a7b496082c71e726",
          "fileName": "08FF0C9E-5B6A-426F-9CB9-7EB29F791938.png",
          "date": "2026-09-15",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；不直接照抄历史答案",
      "errorCauseEvidence": "未确认个人具体错因",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "a497da5c1ebf1f76d825aef57bbf3a3f80382d4b51e8297d6cf93e0dc9b31924",
      "questionNo": 1
    },
    {
      "id": "hist-20260915-linear-inertia-equal",
      "subject": "线性代数",
      "chapter": 6,
      "chapterTitle": "二次型",
      "sourceRef": "历史对话 2026-09-15 · 题6",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "计算错误",
      "tags": [
        "历史对话导入",
        "惯性指数",
        "零特征值",
        "特征值移项"
      ],
      "note": "",
      "questionType": "填空题",
      "stem": "设二次型 \\(f=x_1^2+ax_2^2+x_3^2+2x_1x_2+2ax_1x_3+2x_2x_3\\) 的正、负惯性指数相同，求 \\(a\\)。",
      "options": [],
      "knowledgePoints": [
        "惯性指数",
        "零特征值",
        "特征值移项"
      ],
      "answer": "\\(a=-2\\)。",
      "analysis": "矩阵 \\(A=\\begin{pmatrix}1&1&a\\\\1&a&1\\\\a&1&1\\end{pmatrix}\\) 的特征值为 \\(1-a,a-1,a+2\\)。三维空间中正负惯性指数相同，必须有零特征值。候选 \\(a=1\\) 给出 \\(0,0,3\\)，不满足；\\(a=-2\\) 给出 \\(3,-3,0\\)，满足。",
      "errorCause": "把 \\(\\lambda-a+1=0\\) 解成 \\(1-a\\)，正确应为 \\(\\lambda=a-1\\)。",
      "reviewFocus": "",
      "similarQuestionPrompt": "围绕惯性指数、零特征值、特征值移项生成一道同类型不同参数的考研数学题；使用LaTeX，独立验证条件、答案和解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_4aae80a535b88191a2618c3da234ced0",
          "fileName": "7E460139-9F12-4105-A765-B412437CA826.png",
          "date": "2026-09-15",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        },
        {
          "fileId": "libfile_422b79215cd881919aae4b1a79137864",
          "fileName": "162A1CAA-C719-412A-A40F-632D9889DDF7.png",
          "date": "2026-09-15",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；不直接照抄历史答案",
      "errorCauseEvidence": "历史订正检索",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "bceaeecc729a1ab955e197d4623d53dd3e278214eef8e8b99b32b859958dc249",
      "questionNo": 6
    },
    {
      "id": "hist-20260920-calculus-stokes",
      "subject": "高等数学",
      "chapter": 17,
      "chapterTitle": "曲线积分与曲面积分",
      "sourceRef": "历史对话 2026-09-20 · 曲线曲面积分例18",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "历史对话导入",
        "第二类曲线积分",
        "斯托克斯公式",
        "格林公式",
        "方向一致性"
      ],
      "note": "",
      "questionType": "填空题",
      "stem": "设 \\(L\\) 是柱面 \\(x^2+y^2=1\\) 与平面 \\(z=x+y\\) 的交线，从 \\(z\\) 轴正向往负向看为逆时针方向。计算 \\(\\displaystyle\\oint_L xz\\,dx+x\\,dy+\\frac{y^2}{2}\\,dz\\)。",
      "options": [],
      "knowledgePoints": [
        "第二类曲线积分",
        "斯托克斯公式",
        "格林公式",
        "方向一致性"
      ],
      "answer": "\\(\\pi\\)。",
      "analysis": "在曲线上 \\(z=x+y,dz=dx+dy\\)，原积分化为 \\(\\oint_C(x^2+xy+y^2/2)\\,dx+(x+y^2/2)\\,dy\\)，其中 \\(C\\) 为单位圆正向。用格林公式得 \\(\\iint_{x^2+y^2\\le1}[1-(x+y)]\\,dx\\,dy=\\pi\\)。也可用旋度 \\((y,x,1)\\) 与向上面积向量 \\((-1,-1,1)dxdy\\) 的点积得到相同结果。",
      "errorCause": "",
      "reviewFocus": "投影方向必须与曲线方向一致；代入z后，dz也要同步替换。",
      "similarQuestionPrompt": "围绕第二类曲线积分、斯托克斯公式、格林公式、方向一致性生成一道同类型不同参数的考研数学题；使用LaTeX，独立验证条件、答案和解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_a492f535b3c081919fcff6f8f4c3e4e7",
          "fileName": "DED5FF56-AAE2-4B2A-B365-A750617344F9.png",
          "date": "2026-09-20",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        },
        {
          "fileId": "libfile_49c454fbd2788191b7570d6426a3c9f9",
          "fileName": "6597BF2B-CF0D-40B2-86F5-EBC9E480BAF5.png",
          "date": "2026-09-20",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；不直接照抄历史答案",
      "errorCauseEvidence": "未确认个人具体错因",
      "sourceLabel": "曲线曲面积分例18",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "0514ac74390db8a20dc97130e760a98e5c84623568a594b6fd98697fc441b5f8",
      "questionNo": 18
    },
    {
      "id": "hist-20260920-calculus-rotation-flux",
      "subject": "高等数学",
      "chapter": 17,
      "chapterTitle": "曲线积分与曲面积分",
      "sourceRef": "历史对话 2026-09-20 · 题20",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "待归类",
      "tags": [
        "历史对话导入",
        "旋转曲面方程",
        "高斯公式",
        "补面法",
        "对称性"
      ],
      "note": "",
      "questionType": "计算题",
      "stem": "已知 \\(A(1,0,0),B(1,1,1)\\)。\\(\\Sigma\\) 为直线 \\(AB\\) 绕 \\(Oz\\) 轴旋转一周所得曲面在 \\(z=0\\) 与 \\(z=1\\) 之间部分的外侧，\\(f\\) 在实数范围内有连续导数。\n（1）求 \\(\\Sigma\\) 的方程；\n（2）计算 \\[I=\\iint_\\Sigma [xf(xy)-2x]\\,dy\\,dz+[y^2-yf(xy)]\\,dz\\,dx+(z+1)^2\\,dx\\,dy.\\]",
      "options": [],
      "knowledgePoints": [
        "旋转曲面方程",
        "高斯公式",
        "补面法",
        "对称性"
      ],
      "answer": "\\(\\Sigma:x^2+y^2=1+z^2,\\ 0\\le z\\le1\\)；\\(I=-\\frac{11\\pi}{2}\\)。",
      "analysis": "母线可取 \\((1,t,t)\\)，旋转半径平方为 \\(1+t^2\\)，故得曲面方程。补上上下圆盘构成闭曲面。散度为 \\(f(xy)+xyf'(xy)-2+2y-f(xy)-xyf'(xy)+2(z+1)=2y+2z\\)。利用对称性，总通量为 \\(\\int_0^1 2z\\pi(1+z^2)\\,dz=\\frac{3\\pi}{2}\\)。上盘外向通量为 \\(4\\cdot2\\pi=8\\pi\\)，下盘为 \\(-\\pi\\)，侧面通量为 \\(\\frac{3\\pi}{2}-8\\pi+\\pi=-\\frac{11\\pi}{2}\\)。",
      "errorCause": "",
      "reviewFocus": "绕z轴旋转保留z及到z轴距离，而不是简单令x=y；闭曲面总通量必须扣掉两个补面。",
      "similarQuestionPrompt": "围绕旋转曲面方程、高斯公式、补面法、对称性生成一道同类型不同参数的考研数学题；使用LaTeX，独立验证条件、答案和解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_c138ff23a0108191a77af6420ff5dc91",
          "fileName": "4126ED82-5185-40B0-B0C2-005E190D6FE3.png",
          "date": "2026-09-20",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；不直接照抄历史答案",
      "errorCauseEvidence": "未确认个人具体错因",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "02e359092de146822423b4649609a042f2e083b49840d76de625b3058778a862",
      "questionNo": 20
    },
    {
      "id": "hist-20260920-calculus-hemisphere",
      "subject": "高等数学",
      "chapter": 17,
      "chapterTitle": "曲线积分与曲面积分",
      "sourceRef": "历史对话 2026-09-20 · 曲线曲面积分例15",
      "sourceType": "history",
      "sourcePage": null,
      "printedPage": null,
      "markerColor": "history",
      "status": "未复习",
      "difficulty": "未标注",
      "mistakeType": "概念不清",
      "tags": [
        "历史对话导入",
        "第二类曲面积分",
        "高斯公式",
        "曲面代入与空间延拓",
        "补面方向"
      ],
      "note": "",
      "questionType": "计算题",
      "stem": "计算 \\[\\iint_\\Sigma\\frac{ax\\,dy\\,dz+(z+a)^2\\,dx\\,dy}{\\sqrt{x^2+y^2+z^2}},\\] 其中 \\(\\Sigma\\) 为下半球面 \\(z=-\\sqrt{a^2-x^2-y^2}\\) 的上侧，\\(a>0\\)。",
      "options": [],
      "knowledgePoints": [
        "第二类曲面积分",
        "高斯公式",
        "曲面代入与空间延拓",
        "补面方向"
      ],
      "answer": "\\(-\\frac{\\pi a^3}{2}\\)。",
      "analysis": "先在曲面上将分母化为常数 \\(a\\)，再对新空间向量场 \\((x,0,(z+a)^2/a)\\) 用高斯公式。其散度为 \\(3+2z/a\\)。下半球体体积为 \\(2\\pi a^3/3\\)，且 \\(\\iiint_\\Omega z\\,dV=-\\pi a^4/4\\)，所以内向闭曲面通量为 \\(-3\\pi a^3/2\\)。补上的赤道圆盘取下侧，通量为 \\(-\\pi a^3\\)，原上侧半球通量为 \\(-3\\pi a^3/2-(-\\pi a^3)=-\\pi a^3/2\\)。",
      "errorCause": "未区分在曲面上先化简被积函数与在空间求导时强行使用边界约束。",
      "reviewFocus": "允许先在曲面化简并选取新的光滑空间延拓；但求某个已固定空间场的散度时，x、y、z必须作为独立变量。",
      "similarQuestionPrompt": "围绕第二类曲面积分、高斯公式、曲面代入与空间延拓、补面方向生成一道同类型不同参数的考研数学题；使用LaTeX，独立验证条件、答案和解析。",
      "transcriptionStatus": "verified",
      "historySources": [
        {
          "fileId": "libfile_15f55a9e8ecc81919bb0a44a240ad629",
          "fileName": "4362DB18-7C96-4AD0-B153-7E8D1EF25C47.jpeg",
          "date": "2026-09-20",
          "kind": "history-image",
          "verification": "原始图片目视转写"
        }
      ],
      "answerVerification": "本次独立推导复核；不直接照抄历史答案",
      "errorCauseEvidence": "历史订正检索",
      "sourceLabel": "曲线曲面积分例15",
      "historyImportBatches": [
        "history-2026-09-21-v1"
      ],
      "contentFingerprint": "2940ab21c06b2c98b5b74d3599039017816c4b7571a6095aa70e1ae51f4c92e8",
      "questionNo": 15
    }
  ],
  "schemaVersion": 2,
  "contentFormat": "markdown+latex",
  "updatedAt": "2026-09-21",
  "historyImportBatches": [
    "history-2026-09-21-v1"
  ]
};
