(function () {
  "use strict";
  var D = window.PHYSICS_DATA, KEY = "physics-s1-progress-v1";
  var state = load(), current = state.last || D.topics[0].id, tab = "overview";
  var quiz = null; // {topic, order:[], i, picked, score, missed:[]}

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { topics: {} }; } catch (e) { return { topics: {} }; }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function tp(id) { return state.topics[id] || (state.topics[id] = { checks: {}, best: null, notes: {}, attempts: 0 }); }
  function topic() { return D.topics.filter(function (t) { return t.id === current; })[0]; }
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pct(t) { var s = tp(t.id); var c = t.objectives.filter(function (o, i) { return s.checks["o" + i]; }).length + (s.checks.lab ? 1 : 0) + (s.best != null && s.best >= D.proficiency ? 1 : 0); return Math.round(100 * c / (t.objectives.length + 2)); }

  function renderNav() {
    var nav = document.getElementById("topics"); nav.textContent = "";
    D.topics.forEach(function (t) {
      nav.appendChild(el("button", { text: t.num + ". " + t.title + " (" + pct(t) + "%)", "aria-current": String(t.id === current),
        onclick: function () { current = t.id; state.last = current; save(); quiz = null; render(); } }));
    });
  }
  function bar(p) { return el("div", { class: "bar", role: "progressbar", "aria-valuenow": String(p), "aria-valuemin": "0", "aria-valuemax": "100" }, [el("i", { style: "width:" + p + "%" })]); }

  function render() {
    renderNav();
    var t = topic(), m = document.getElementById("main"); m.textContent = "";
    m.appendChild(el("h2", { text: t.title }));
    m.appendChild(el("p", { class: "mut", text: t.big_idea }));
    var names = [["overview", "Overview"], ["cornell", "Cornell notes"], ["quiz", "Quiz"], ["practice", "Practice"], ["resources", "Resources & labs"], ["progress", "Objectives & progress"]];
    var tabs = el("div", { class: "tabs", role: "tablist" });
    names.forEach(function (n) { tabs.appendChild(el("button", { text: n[1], role: "tab", "aria-selected": String(tab === n[0]), onclick: function () { tab = n[0]; render(); } })); });
    m.appendChild(tabs);
    ({ overview: overview, cornell: cornell, quiz: renderQuiz, practice: practice, resources: resources, progress: progress })[tab](t, m);
  }

  function overview(t, m) {
    var c = el("div", { class: "card" });
    c.appendChild(el("h3", { text: "California NGSS performance expectations" }));
    var ul = el("ul"); t.ngss.forEach(function (n) { ul.appendChild(el("li", {}, [el("strong", { text: n[0] + ": " }), n[1]])); }); c.appendChild(ul);
    c.appendChild(el("p", { class: "small", text: "Practices: " + t.sep + " Crosscutting concepts: " + t.ccc }));
    m.appendChild(c);
    var k = el("div", { class: "card" }); k.appendChild(el("h3", { text: "Key concepts" }));
    var tb = el("table"); t.concepts.forEach(function (r) { tb.appendChild(el("tr", {}, [el("th", { text: r[0] }), el("td", { text: r[1] })])); }); k.appendChild(tb);
    k.appendChild(el("h4", { text: "Equations" }));
    k.appendChild(el("p", {}, t.equations.map(function (e) { return el("code", { text: e + "  " }); })));
    k.appendChild(el("p", { class: "mut", text: "Vocabulary: " + t.vocab.join(", ") })); m.appendChild(k);
    var w = el("div", { class: "card" }); w.appendChild(el("h3", { text: "Real-world connections" }));
    var l = el("ul"); t.real_world.forEach(function (x) { l.appendChild(el("li", { text: x })); }); w.appendChild(l); m.appendChild(w);
  }

  function cornell(t, m) {
    var s = tp(t.id), c = t.cornell, g = el("div", { class: "cornell" });
    m.appendChild(el("h3", { text: c.title }));
    m.appendChild(el("p", { class: "small", text: "Cover the notes column and answer each cue from memory (type below), then compare. Use your browser's Print for a paper copy." }));
    c.rows.forEach(function (r, i) {
      g.appendChild(el("div", { class: "cue", text: r[0] }));
      var cell = el("div", {}, [el("details", {}, [el("summary", { text: "Show model notes" }), r[1]])]);
      var ta = el("textarea", { "aria-label": "My answer: " + r[0], placeholder: "My answer…" });
      ta.value = s.notes["r" + i] || "";
      ta.addEventListener("input", function () { s.notes["r" + i] = ta.value; save(); });
      cell.appendChild(ta); g.appendChild(cell);
    });
    g.appendChild(el("div", { class: "sum" }, [el("strong", { text: "Summary: " }), c.summary]));
    m.appendChild(g);
  }

  function renderQuiz(t, m) {
    var s = tp(t.id);
    if (!quiz || quiz.topic !== t.id) {
      m.appendChild(el("div", { class: "card" }, [
        el("h3", { text: "Most-missed questions: " + t.title }),
        el("p", { text: t.quiz.length + " questions. Every answer shows an explanation and the misconception behind it. Goal: " + D.proficiency + "% or higher." }),
        el("p", { class: "mut", text: s.best == null ? "No attempts yet." : "Best score: " + s.best + "% (" + s.attempts + " attempt" + (s.attempts === 1 ? "" : "s") + ")" }),
        el("button", { text: "Start quiz", onclick: function () { startQuiz(t, t.quiz.map(function (_, i) { return i; })); } })]));
      return;
    }
    if (quiz.i >= quiz.order.length) return result(t, m);
    var q = t.quiz[quiz.order[quiz.i]];
    if (!quiz.choices) quiz.choices = shuffle(q.choices.map(function (c, j) { return { text: c, ok: j === q.answer }; }));
    var card = el("div", { class: "card" });
    card.appendChild(el("p", { class: "small", text: "Question " + (quiz.i + 1) + " of " + quiz.order.length }));
    card.appendChild(bar(Math.round(100 * quiz.i / quiz.order.length)));
    card.appendChild(el("h3", { text: q.q }));
    quiz.choices.forEach(function (c, j) {
      var cls = "choice";
      if (quiz.picked != null) cls += c.ok ? " right" : (j === quiz.picked ? " wrong" : "");
      var b = el("button", { class: cls, text: "ABCD".charAt(j) + ".  " + c.text, onclick: function () { pick(t, q, j); } });
      if (quiz.picked != null) b.disabled = true;
      card.appendChild(b);
    });
    if (quiz.picked != null) {
      var ok = quiz.choices[quiz.picked].ok;
      card.appendChild(el("div", { class: "fb", role: "status" }, [
        el("strong", { text: ok ? "Correct. " : "Not quite. " }), q.why,
        el("p", { class: "small", text: "Common misconception: " + q.misconception })]));
      card.appendChild(el("button", { text: quiz.i + 1 < quiz.order.length ? "Next question" : "See results", onclick: function () { quiz.i++; quiz.picked = null; quiz.choices = null; render(); } }));
    }
    m.appendChild(card);
  }
  function startQuiz(t, idx) { quiz = { topic: t.id, order: shuffle(idx), i: 0, picked: null, score: 0, missed: [], total: idx.length, choices: null }; render(); }
  function pick(t, q, j) {
    if (quiz.picked != null) return;
    quiz.picked = j;
    if (quiz.choices[j].ok) quiz.score++; else quiz.missed.push(quiz.order[quiz.i]);
    render();
  }
  function result(t, m) {
    var s = tp(t.id), p = Math.round(100 * quiz.score / quiz.total), full = quiz.total === t.quiz.length;
    if (!quiz.saved) { quiz.saved = true; if (full) { s.attempts++; if (s.best == null || p > s.best) s.best = p; save(); renderNav(); } }
    var c = el("div", { class: "card" }, [
      el("h3", { text: "Score: " + quiz.score + " / " + quiz.total + " (" + p + "%)" }),
      el("p", { text: p >= D.proficiency ? "Proficient. Nice work." : "Below " + D.proficiency + "%. Review the explanations, then retry the questions you missed." })]);
    if (quiz.missed.length) {
      var ul = el("ul"); quiz.missed.forEach(function (i) { ul.appendChild(el("li", {}, [t.quiz[i].q, el("br"), el("span", { class: "small", text: "Misconception: " + t.quiz[i].misconception })])); });
      c.appendChild(el("h4", { text: "Review these" })); c.appendChild(ul);
      c.appendChild(el("button", { text: "Retry missed (" + quiz.missed.length + ")", onclick: function () { startQuiz(t, quiz.missed.slice()); } }));
      c.appendChild(document.createTextNode(" "));
    }
    c.appendChild(el("button", { class: "ghost", text: "Full quiz again", onclick: function () { startQuiz(t, t.quiz.map(function (_, i) { return i; })); } }));
    m.appendChild(c);
  }

  function practice(t, m) {
    m.appendChild(el("h3", { text: "Practice problems" }));
    m.appendChild(el("p", { class: "small", text: "Show setup, units, and sign conventions. Try first, then reveal the answer to check." }));
    t.practice.forEach(function (p, i) {
      m.appendChild(el("div", { class: "card" }, [el("p", { text: (i + 1) + ". " + p[0] }), el("details", {}, [el("summary", { text: "Check answer" }), p[1]])]));
    });
  }

  function resources(t, m) {
    var c = el("div", { class: "card" }); c.appendChild(el("h3", { text: "Learning resources" }));
    var ul = el("ul"); t.resources.forEach(function (r) { ul.appendChild(el("li", {}, [el("strong", { text: r[0] }), " (" + r[1] + ") — " + r[2]])); }); c.appendChild(ul); m.appendChild(c);
    var l = el("div", { class: "card" }); l.appendChild(el("h3", { text: "Labs & activities" }));
    var u2 = el("ul"); t.labs.forEach(function (x) { u2.appendChild(el("li", { text: x })); }); l.appendChild(u2); m.appendChild(l);
  }

  function progress(t, m) {
    var s = tp(t.id);
    var c = el("div", { class: "card" }); c.appendChild(el("h3", { text: "Learning objectives" }));
    function chk(key, label) {
      var cb = el("input", { type: "checkbox" }); cb.checked = !!s.checks[key];
      cb.addEventListener("change", function () { s.checks[key] = cb.checked; save(); renderNav(); });
      return el("label", { class: "chk" }, [cb, el("span", { text: label })]);
    }
    t.objectives.forEach(function (o, i) { c.appendChild(chk("o" + i, "I can: " + o)); });
    c.appendChild(chk("lab", "Lab / design challenge complete (CER write-up)"));
    c.appendChild(el("p", { class: "mut", text: "Quiz best: " + (s.best == null ? "not taken" : s.best + "%") + (s.best != null && s.best >= D.proficiency ? " (proficient)" : "") })); m.appendChild(c);
    var r = el("div", { class: "card" }); r.appendChild(el("h3", { text: "Assessment criteria" }));
    var tb = el("table"); Object.keys(t.rubric).forEach(function (k) { tb.appendChild(el("tr", {}, [el("th", { text: k }), el("td", { text: t.rubric[k] })])); });
    r.appendChild(tb); r.appendChild(el("p", { class: "small", text: "Overall unit progress: " + pct(t) + "%" })); r.appendChild(bar(pct(t))); m.appendChild(r);
  }

  function exportText() {
    var out = ["Physics Semester 1 progress", ""];
    D.topics.forEach(function (t) { var s = tp(t.id); out.push(t.title + ": " + pct(t) + "% complete; quiz best " + (s.best == null ? "n/a" : s.best + "%") + "; attempts " + s.attempts); });
    var txt = out.join("\n");
    try { if (navigator.clipboard) navigator.clipboard.writeText(txt); } catch (e) {}
    window.prompt("Copy your progress summary:", txt.replace(/\n/g, " | "));
  }
  document.getElementById("export").addEventListener("click", exportText);
  document.getElementById("reset").addEventListener("click", function () {
    if (window.confirm("Erase all saved progress, quiz scores, and notes in this browser?")) { state = { topics: {} }; save(); quiz = null; render(); }
  });
  render();
})();
