(() => {
  const source = window.WRONG_QUESTIONS || { questions: [], count: 0 };
  const storageKey = "wrong-question-vault:v2";
  const colorNames = { red: "红圈", blue: "蓝圈", mixed: "双色圈", history: "历史对话" };
  const editableFields = [
    "status", "difficulty", "mistakeType", "questionNo", "note", "answer",
    "analysis", "errorCause", "knowledgePoints", "similarQuestionPrompt"
  ];
  let saved = readSaved();
  let selected = new Set();
  let visible = [];
  let typesetTimer;

  const $ = (id) => document.getElementById(id);
  const elements = {
    grid: $("questionGrid"), template: $("questionTemplate"), empty: $("emptyState"),
    search: $("searchInput"), subject: $("subjectFilter"), chapter: $("chapterFilter"),
    origin: $("sourceFilter"), questionType: $("questionTypeFilter"), status: $("statusFilter"),
    mistake: $("mistakeFilter"), difficulty: $("difficultyFilter"), color: $("colorFilter"),
    chips: $("chapterChips"), exportDialog: $("exportDialog")
  };

  function readSaved() {
    try { return JSON.parse(localStorage.getItem(storageKey) || "{}"); }
    catch { return {}; }
  }

  function mergedQuestion(question) {
    return { ...question, ...(saved[question.id] || {}) };
  }

  function allQuestions() { return source.questions.map(mergedQuestion); }
  function chapterKey(q) { return `${q.subject}|${q.chapter}`; }
  function questionLabel(q) { return `第${q.questionNo}题`; }
  function listText(value) { return Array.isArray(value) ? value.join("，") : (value || ""); }
  function sourceLabel(q) {
    return q.sourcePage == null ? q.sourceRef : q.sourceRef + " · PDF 第 " + q.sourcePage + " 页";
  }
  function compareQuestions(a, b) {
    return a.subject.localeCompare(b.subject, "zh-CN") ||
      a.chapter - b.chapter || (a.sourcePage ?? Infinity) - (b.sourcePage ?? Infinity) ||
      a.questionNo - b.questionNo || a.id.localeCompare(b.id);
  }

  function persist(question, field, value) {
    saved[question.id] ||= {};
    if (field === "questionNo") saved[question.id][field] = Number(value) || question.questionNo;
    else if (field === "knowledgePoints") saved[question.id][field] = value.split(/[，,]/).map(item => item.trim()).filter(Boolean);
    else saved[question.id][field] = value;
    localStorage.setItem(storageKey, JSON.stringify(saved));
  }

  function populateFilters() {
    const questions = allQuestions();
    [...new Set(questions.map(q => q.subject))].sort().forEach(subject => {
      elements.subject.add(new Option(subject, subject));
    });
    [...new Set(questions.map(q => q.questionType))].sort().forEach(type => {
      elements.questionType.add(new Option(type, type));
    });
    const chapters = [...new Map(questions.map(q => [chapterKey(q), q])).values()]
      .sort(compareQuestions);
    chapters.forEach(q => {
      const label = `${q.subject} · 第${q.chapter}章 ${q.chapterTitle}`;
      elements.chapter.add(new Option(label, chapterKey(q)));
      const chip = document.createElement("button");
      chip.className = "chip";
      chip.dataset.chapter = chapterKey(q);
      chip.textContent = q.subject + " · " + q.chapterTitle;
      chip.addEventListener("click", () => {
        elements.chapter.value = elements.chapter.value === chip.dataset.chapter ? "" : chip.dataset.chapter;
        render();
      });
      elements.chips.appendChild(chip);
    });
  }

  function applyFilters() {
    const term = elements.search.value.trim().toLowerCase();
    return allQuestions().filter(q => {
      const haystack = [
        q.subject, q.chapterTitle, q.questionType, questionLabel(q), q.sourceRef,
        q.stem, q.note, q.answer, q.analysis, q.errorCause, q.reviewFocus,
        q.transcriptionNote, q.similarQuestionPrompt,
        ...(q.tags || []), ...(q.knowledgePoints || []),
        ...(q.options || []).map(option => `${option.label} ${option.text}`)
      ].join(" ").toLowerCase();
      return (!term || haystack.includes(term)) &&
        (!elements.subject.value || q.subject === elements.subject.value) &&
        (!elements.origin.value ||
          (elements.origin.value === "history" && q.historySources?.length) ||
          (elements.origin.value === "new-history" && q.sourceType === "history") ||
          (elements.origin.value === "exam" && q.sourceCategory === "考研真题") ||
          (elements.origin.value === "book" && q.sourceType !== "history" && q.sourceCategory !== "考研真题")) &&
        (!elements.chapter.value || chapterKey(q) === elements.chapter.value) &&
        (!elements.questionType.value || q.questionType === elements.questionType.value) &&
        (!elements.status.value || q.status === elements.status.value) &&
        (!elements.mistake.value || q.mistakeType === elements.mistake.value) &&
        (!elements.difficulty.value || q.difficulty === elements.difficulty.value) &&
        (!elements.color.value || q.markerColor === elements.color.value);
    });
  }

  function scheduleTypeset(nodes = [elements.grid]) {
    clearTimeout(typesetTimer);
    typesetTimer = setTimeout(() => {
      if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise(nodes).catch(console.error);
    }, 40);
  }

  function render() {
    visible = applyFilters();
    elements.grid.replaceChildren();
    visible.forEach(renderCard);
    elements.empty.hidden = visible.length !== 0;
    $("visibleCount").textContent = visible.length;
    $("selectedCount").textContent = selected.size;
    $("masteredCount").textContent = allQuestions().filter(q => q.status === "已掌握").length;
    [...elements.chips.children].forEach(chip => chip.classList.toggle("active", chip.dataset.chapter === elements.chapter.value));
    scheduleTypeset();
  }

  function renderCard(question) {
    const card = elements.template.content.firstElementChild.cloneNode(true);
    card.dataset.id = question.id;
    const checkbox = card.querySelector('.select-question input');
    checkbox.checked = selected.has(question.id);
    checkbox.addEventListener("change", () => {
      checkbox.checked ? selected.add(question.id) : selected.delete(question.id);
      $("selectedCount").textContent = selected.size;
    });
    const badge = card.querySelector(".marker-badge");
    badge.textContent = colorNames[question.markerColor] || question.markerColor;
    badge.classList.add(question.markerColor);
    card.querySelector(".type-badge").textContent = question.questionType;
    card.querySelector(".question-title strong").textContent = questionLabel(question);
    card.querySelector(".question-title span").textContent = sourceLabel(question);
    card.querySelector(".chapter-name").textContent = `${question.subject} · 第${question.chapter}章 ${question.chapterTitle}`;
    card.querySelector(".question-stem").textContent = question.stem;
    const context = card.querySelector(".history-context");
    const contextParts = [
      question.transcriptionNote && "来源说明：" + question.transcriptionNote,
      question.reviewFocus && "复盘重点：" + question.reviewFocus
    ].filter(Boolean);
    if (!contextParts.length) context.remove();
    else context.querySelector("p").textContent = contextParts.join("\n");
    const optionList = card.querySelector(".option-list");
    if (!question.options?.length) optionList.remove();
    else question.options.forEach(option => {
      const item = document.createElement("li");
      item.value = option.label.charCodeAt(0) - 64;
      item.textContent = option.text;
      optionList.appendChild(item);
    });
    editableFields.forEach(field => {
      const control = card.querySelector(`[data-field="${field}"]`);
      if (!control) return;
      control.value = field === "knowledgePoints" ? listText(question[field]) : (question[field] ?? "");
      control.addEventListener("change", () => {
        persist(question, field, control.value);
        if (["status", "questionNo"].includes(field)) render();
      });
    });
    elements.grid.appendChild(card);
  }

  function exportPool() {
    const selectedQuestions = allQuestions().filter(q => selected.has(q.id));
    return selectedQuestions.length ? selectedQuestions : visible;
  }

  function chosenQuestions() {
    const pool = [...exportPool()];
    const count = Math.max(1, Math.min(Number($("exportCount").value) || 1, pool.length));
    if ($("exportOrder").value === "random") {
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
    } else {
      pool.sort(compareQuestions);
    }
    return pool.slice(0, count);
  }

  function openExport() {
    const pool = exportPool();
    $("exportSourceHint").textContent = selected.size ? `从已选 ${pool.length} 题中生成` : `从当前筛选的 ${pool.length} 题中生成`;
    $("exportCount").max = Math.max(1, pool.length);
    $("exportCount").value = Math.min(10, Math.max(1, pool.length));
    elements.exportDialog.showModal();
  }

  function questionHtml(q, index, includeNotes, includeAnswers) {
    const options = (q.options || []).map(option => `<li>${escapeHtml(option.text)}</li>`).join("");
    const answerBlock = includeAnswers && (q.answer || q.analysis) ? `<section class="answer">
      ${q.answer ? `<p><b>答案：</b>${escapeHtml(q.answer)}</p>` : ""}
      ${q.analysis ? `<p><b>解析：</b>${escapeHtml(q.analysis)}</p>` : ""}
    </section>` : "";
    return `<section class="item">
      <header><b>${index + 1}. ${escapeHtml(questionLabel(q))}</b><span>${escapeHtml(q.subject)} · 第${q.chapter}章 ${escapeHtml(q.chapterTitle)}</span></header>
      <div class="stem">${escapeHtml(q.stem)}</div>
      ${options ? `<ol type="A">${options}</ol>` : ""}
      ${answerBlock}
      ${includeNotes && q.note ? `<p class="note"><b>复盘：</b>${escapeHtml(q.note)}</p>` : ""}
    </section>`;
  }

  function exportPdf() {
    const questions = chosenQuestions();
    if (!questions.length) return alert("当前没有可导出的题目。");
    const perPage = Number($("questionsPerPage").value) || 2;
    const cards = questions.map((q, index) => questionHtml(q, index, $("includeNotes").checked, $("includeAnswers").checked)).join("");
    const printWindow = window.open("", "_blank");
    if (!printWindow) return alert("浏览器阻止了打印窗口，请允许弹窗后重试。");
    printWindow.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>错题练习卷</title>
      <script>window.MathJax={tex:{inlineMath:[['\\\\(','\\\\)']],displayMath:[['\\\\[','\\\\]']]}};<\/script>
      <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><\/script>
      <style>@page{size:A4;margin:14mm}*{box-sizing:border-box}body{margin:0;color:#111;font:12px Arial,"Microsoft YaHei",sans-serif}
      h1{margin:0 0 3mm;font-size:20px}.meta{display:flex;justify-content:space-between;margin-bottom:5mm;padding-bottom:3mm;border-bottom:1px solid #bbb;color:#555}
      main{display:grid;gap:5mm}.item{break-inside:avoid;min-height:calc((267mm - ${(perPage - 1) * 5}mm) / ${perPage});padding:4mm;border:1px solid #ccc;border-radius:3mm}
      .item header{display:flex;justify-content:space-between;gap:8mm;margin-bottom:3mm}.item header span{color:#666;text-align:right}.stem{font-size:13px;line-height:1.8;white-space:pre-wrap}.item li{margin:2mm 0;line-height:1.6}.answer,.note{margin:4mm 0 0;padding-top:3mm;border-top:1px dashed #aaa;white-space:pre-wrap}.answer{color:#234f3d}.note{color:#555}
      @media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}</style></head><body><h1>错题练习卷</h1>
      <div class="meta"><span>共 ${questions.length} 题</span><span>日期：____年__月__日　用时：______　得分：______</span></div><main>${cards}</main>
      <script>window.addEventListener('load',()=>{const ready=window.MathJax?.startup?.promise||Promise.resolve();ready.then(()=>setTimeout(()=>window.print(),250));});<\/script></body></html>`);
    printWindow.document.close();
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[ch]));
  }

  function download(name, text, type) {
    const anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(new Blob([text], { type }));
    anchor.download = name;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(anchor.href), 1000);
  }

  function safeCsv(value) {
    let text = String(value ?? "").replace(/"/g, '""');
    if (/^[=+\-@]/.test(text)) text = `'${text}`;
    return `"${text}"`;
  }

  function exportMarkdown() {
    const includeNotes = $("includeNotes").checked;
    const includeAnswers = $("includeAnswers").checked;
    const lines = ["# 错题练习清单", ""];
    chosenQuestions().forEach((q, index) => {
      lines.push(
        `## ${index + 1}. ${questionLabel(q)}`, "",
        `- 分类：${q.subject} / 第${q.chapter}章 ${q.chapterTitle} / ${q.questionType}`,
        `- 来源：${sourceLabel(q)}`,
        `- 知识点：${listText(q.knowledgePoints)}`, "", q.stem, ""
      );
      (q.options || []).forEach(option => lines.push(`${option.label}. ${option.text}`));
      if (q.options?.length) lines.push("");
      if (includeAnswers && q.answer) lines.push(`**答案：** ${q.answer}`, "");
      if (includeAnswers && q.analysis) lines.push(`**解析：** ${q.analysis}`, "");
      if (includeNotes && q.note) lines.push(`> 复盘：${q.note}`, "");
    });
    download("错题练习清单.md", lines.join("\n"), "text/markdown;charset=utf-8");
  }

  function exportCsv() {
    const headers = ["题号","科目","章","章节","题型","题干LaTeX","选项","知识点","状态","难度","错误原因","具体错因","答案","解析","同类题提示","PDF页","书内页码","复盘笔记"];
    const rows = chosenQuestions().map(q => [
      q.questionNo,q.subject,q.chapter,q.chapterTitle,q.questionType,q.stem,
      (q.options || []).map(option => `${option.label}. ${option.text}`).join("\n"),listText(q.knowledgePoints),
      q.status,q.difficulty,q.mistakeType,q.errorCause,q.answer,q.analysis,q.similarQuestionPrompt,q.sourcePage,q.sourceRef,q.note
    ]);
    download("错题清单.csv", "\ufeff" + [headers, ...rows].map(row => row.map(safeCsv).join(",")).join("\n"), "text/csv;charset=utf-8");
  }

  function exportJson() {
    download("错题清单.json", JSON.stringify({ schemaVersion: 2, contentFormat: "markdown+latex", exportedAt: new Date().toISOString(), questions: chosenQuestions() }, null, 2), "application/json");
  }

  function backup() {
    download("错题仓进度备份.json", JSON.stringify({ version: 2, savedAt: new Date().toISOString(), edits: saved }, null, 2), "application/json");
  }

  async function restore(file) {
    try {
      const parsed = JSON.parse(await file.text());
      if (!parsed.edits || typeof parsed.edits !== "object") throw new Error("备份格式不正确");
      saved = parsed.edits;
      localStorage.setItem(storageKey, JSON.stringify(saved));
      render();
    } catch (error) { alert(`恢复失败：${error.message}`); }
  }

  [elements.search, elements.subject, elements.origin, elements.chapter, elements.questionType, elements.status, elements.mistake, elements.difficulty, elements.color]
    .forEach(control => control.addEventListener(control === elements.search ? "input" : "change", render));
  $("resetButton").addEventListener("click", () => {
    [elements.search, elements.subject, elements.origin, elements.chapter, elements.questionType, elements.status, elements.mistake, elements.difficulty, elements.color]
      .forEach(control => control.value = "");
    render();
  });
  $("selectVisibleButton").addEventListener("click", () => { visible.forEach(q => selected.add(q.id)); render(); });
  $("clearSelectionButton").addEventListener("click", () => { selected.clear(); render(); });
  $("openExportButton").addEventListener("click", openExport);
  $("printPdfButton").addEventListener("click", exportPdf);
  $("downloadMarkdownButton").addEventListener("click", exportMarkdown);
  $("downloadCsvButton").addEventListener("click", exportCsv);
  $("downloadJsonButton").addEventListener("click", exportJson);
  $("backupButton").addEventListener("click", backup);
  $("restoreInput").addEventListener("change", event => event.target.files[0] && restore(event.target.files[0]));
  $("sourceTitle").textContent = source.title || "错题库";
  $("questionCountSubtitle").textContent = source.questions.length + " 道文本与 LaTeX 错题，支持科目、章节、错因和考研真题来源筛选。";
  populateFilters();
  render();
})();
