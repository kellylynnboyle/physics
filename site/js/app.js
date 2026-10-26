(function () {
  "use strict";
  var UNITS = COURSE.units;
  var KEY = "physics-progress-v1";
  var main = document.getElementById("main");
  var nav = document.getElementById("nav");

  /* ---------- helpers ---------- */
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), attrs[k]);
      else if (k.slice(0, 5) === "aria-" && typeof attrs[k] === "boolean") n.setAttribute(k, String(attrs[k]));
      else if (attrs[k] !== false && attrs[k] != null) n.setAttribute(k, attrs[k] === true ? "" : attrs[k]);
    });
    (kids || []).forEach(function (c) { n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* ---------- progress (localStorage, optional) ---------- */
  var mem = { objectives: {}, quiz: {}, practice: {} };
  function load() { try { var s = localStorage.getItem(KEY); if (s) mem = Object.assign(mem, JSON.parse(s)); } catch (e) {} }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) {} }
  load();
  function objDone(u) { var a = mem.objectives[u.id] || []; return u.objectives.filter(function (_, i) { return a[i]; }).length; }
  function pct(u) {
    var q = mem.quiz[u.id];
    var qp = q ? q.best / q.total : 0;
    var op = objDone(u) / u.objectives.length;
    return Math.round((qp * 0.5 + op * 0.5) * 100);
  }

  /* ---------- nav ---------- */
  function renderNav(current) {
    nav.textContent = "";
    UNITS.forEach(function (u) {
      nav.appendChild(el("a", { href: "#/unit/" + u.id, text: u.title, "aria-current": current === u.id ? "page" : false }));
    });
    nav.appendChild(el("a", { href: "#/assessment", text: "Assessment", "aria-current": current === "assessment" ? "page" : false }));
  }

  /* ---------- home ---------- */
  function home() {
    renderNav("");
    var d = el("div");
    d.appendChild(el("h1", { text: COURSE.title }));
    d.appendChild(el("p", { class: "lead", text: COURSE.grade + ". Five units with learning objectives, Cornell notes, interactive quizzes of the most-missed questions, practice problems, resources and assessment criteria." }));
    var g = el("div", { class: "grid" });
    UNITS.forEach(function (u, i) {
      var p = pct(u);
      g.appendChild(el("a", { class: "card", href: "#/unit/" + u.id }, [
        el("div", { class: "meta", text: "Unit " + (i + 1) + " · " + u.short }),
        el("h2", { text: u.title, style: "margin:.2em 0 .6em" }),
        el("div", { class: "bar", role: "progressbar", "aria-valuenow": p, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": u.title + " progress" }, [el("i", { style: "width:" + p + "%" })]),
        el("div", { class: "meta", text: p + "% · " + objDone(u) + "/" + u.objectives.length + " objectives · quiz best " + (mem.quiz[u.id] ? mem.quiz[u.id].best + "/" + mem.quiz[u.id].total : "—") })
      ]));
    });
    d.appendChild(g);
    d.appendChild(el("h2", { text: "How to use this project" }));
    var ol = el("ol");
    ["Read the unit's learning objectives and check them off as you master them.",
     "Complete the Cornell notes: cover the right column, answer each cue, then check.",
     "Take the quiz — it uses the questions students miss most often, and explains each misconception.",
     "Work the practice problems, then open the resources for simulations and extra help.",
     "Check the assessment page so you know what proficiency looks like."
    ].forEach(function (t) { ol.appendChild(el("li", { text: t })); });
    d.appendChild(ol);
    d.appendChild(el("p", { class: "meta", text: "Progress is saved only in this browser." }));
    d.appendChild(el("button", { class: "ghost", text: "Reset my progress", onclick: function () {
      if (confirm("Clear saved objectives and quiz scores in this browser?")) { mem = { objectives: {}, quiz: {}, practice: {} }; save(); home(); }
    } }));
    show(d);
  }

  function show(node) { main.textContent = ""; main.appendChild(node); main.focus(); window.scrollTo(0, 0); }

  /* ---------- unit ---------- */
  var TABS = ["Objectives", "Cornell notes", "Quiz", "Practice", "Resources", "Assessment"];
  function unit(id, tab) {
    var u = UNITS.filter(function (x) { return x.id === id; })[0];
    if (!u) return home();
    renderNav(id);
    tab = tab || 0;
    var d = el("div");
    d.appendChild(el("h1", { text: u.title }));
    var tabs = el("div", { class: "tabs", role: "tablist" });
    var panel = el("div", { class: "panel", role: "tabpanel" });
    TABS.forEach(function (t, i) {
      tabs.appendChild(el("button", { role: "tab", "aria-selected": i === tab, text: t, onclick: function () {
        Array.prototype.forEach.call(tabs.children, function (b, j) { b.setAttribute("aria-selected", j === i); });
        panel.textContent = ""; panel.appendChild(view[i](u));
      } }));
    });
    d.appendChild(tabs); d.appendChild(panel);
    panel.appendChild(view[tab](u));
    show(d);
  }

  var view = [objectivesView, cornellView, quizView, practiceView, resourcesView, unitAssessView];

  function objectivesView(u) {
    var w = el("div");
    w.appendChild(el("h2", { text: "NGSS standards addressed" }));
    var ul = el("ul");
    u.ngss.forEach(function (s) { ul.appendChild(el("li", {}, [el("b", { text: s.code + ": " }), s.text])); });
    w.appendChild(ul);
    w.appendChild(el("h2", { text: "Learning objectives — I can…" }));
    var list = el("ul", { class: "check" });
    var arr = mem.objectives[u.id] || (mem.objectives[u.id] = []);
    u.objectives.forEach(function (o, i) {
      list.appendChild(el("li", {}, [el("label", {}, [
        el("input", { type: "checkbox", checked: !!arr[i], onchange: function (e) { arr[i] = e.target.checked; save(); } }),
        el("span", { text: o })])]));
    });
    w.appendChild(list);
    w.appendChild(el("h2", { text: "Key concepts" }));
    var dl = el("dl");
    u.concepts.forEach(function (c) { dl.appendChild(el("dt", { text: c.term, style: "font-weight:700;margin-top:8px" })); dl.appendChild(el("dd", { text: c.def, style: "margin-left:16px" })); });
    w.appendChild(dl);
    w.appendChild(el("h2", { text: "Key equations" }));
    var eq = el("div");
    u.equations.forEach(function (e) { eq.appendChild(el("span", { class: "eq", text: e })); });
    w.appendChild(eq);
    return w;
  }

  function cornellView(u) {
    var c = u.cornell, w = el("div");
    w.appendChild(el("p", { class: "meta noprint", text: "Study tip: cover the right column, answer each cue aloud, then check yourself. Use your browser's Print for a paper copy." }));
    var box = el("div", { class: "cornell" });
    box.appendChild(el("div", { class: "hd" }, [el("span", { text: "Topic: " + c.topic }), el("span", { text: "Name: ______  Date: ______" })]));
    var hide = false;
    c.rows.forEach(function (r) {
      box.appendChild(el("div", { class: "row" }, [el("div", { class: "cue", text: r.cue }), el("div", { class: "nt", text: r.notes })]));
    });
    box.appendChild(el("div", { class: "sum" }, [el("b", { text: "Summary" }), c.summary]));
    w.appendChild(box);
    w.appendChild(el("button", { class: "ghost noprint", text: "Quiz-yourself mode (hide notes)", onclick: function (e) {
      hide = !hide;
      Array.prototype.forEach.call(box.querySelectorAll(".nt"), function (n) { n.style.visibility = hide ? "hidden" : "visible"; });
      e.target.textContent = hide ? "Show notes" : "Quiz-yourself mode (hide notes)";
    } }));
    return w;
  }

  function quizView(u) {
    var w = el("div");
    function start(pool) {
      w.textContent = "";
      var items = shuffle(pool).map(function (q) {
        var order = shuffle(q.options.map(function (_, i) { return i; }));
        return { q: q, order: order };
      });
      var score = 0, answered = 0, missed = [];
      var status = el("p", { class: "meta", role: "status" });
      var qs = el("div");
      var done = el("div");
      w.appendChild(el("p", { class: "lead", text: u.title + " — the most commonly missed questions. Pick an answer for instant feedback." }));
      w.appendChild(status); w.appendChild(qs); w.appendChild(done);
      function upd() { status.textContent = "Answered " + answered + " of " + items.length + " · Correct " + score; }
      upd();
      items.forEach(function (it, n) {
        var box = el("div", { class: "card q" });
        box.appendChild(el("h3", { text: (n + 1) + ". " + it.q.q }));
        var opts = el("div", { class: "opts", role: "group", "aria-label": "Answer choices" });
        var fb = el("div", { "aria-live": "polite" });
        var btns = [];
        it.order.forEach(function (oi) {
          var b = el("button", { class: "opt", text: it.q.options[oi], onclick: function () {
            btns.forEach(function (x) { x.disabled = true; });
            var right = oi === it.q.answer;
            b.classList.add(right ? "ok" : "bad");
            if (!right) btns[it.order.indexOf(it.q.answer)].classList.add("ok");
            answered++; if (right) score++; else missed.push(it.q);
            fb.appendChild(el("div", { class: "fb " + (right ? "ok" : "bad") }, [
              el("b", { text: right ? "Correct. " : "Not quite. " }), it.q.why,
              el("div", { class: "meta", text: "Common misconception: " + it.q.miss })]));
            upd();
            if (answered === items.length) finish();
          } });
          btns.push(b); opts.appendChild(b);
        });
        box.appendChild(opts); box.appendChild(fb); qs.appendChild(box);
      });
      function finish() {
        var rec = mem.quiz[u.id] || { best: 0, total: items.length };
        if (pool.length === u.quiz.length && score >= rec.best) rec = { best: score, total: items.length };
        if (pool.length === u.quiz.length) { mem.quiz[u.id] = rec; save(); }
        var p = Math.round(score / items.length * 100);
        done.appendChild(el("div", { class: "card" }, [
          el("h2", { text: "Score: " + score + "/" + items.length + " (" + p + "%)", style: "margin-top:0" }),
          el("p", { text: p >= 80 ? "Mastery level reached (≥ 80%). Move on to the practice problems." : "Below the 80% mastery target. Review the Cornell notes for the missed ideas and retry." }),
          missed.length ? el("button", { class: "primary", text: "Retry missed questions only", onclick: function () { start(missed); } }) : "",
          " ", el("button", { class: "ghost", text: "Restart full quiz", onclick: function () { start(u.quiz); } })]));
        done.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
    start(u.quiz);
    return w;
  }

  function practiceView(u) {
    var w = el("div");
    w.appendChild(el("p", { class: "lead", text: "Show your work: draw a diagram, list knowns with units, pick an equation. Then check the answer." }));
    u.practice.forEach(function (p, i) {
      w.appendChild(el("div", { class: "card" }, [
        el("b", { text: (i + 1) + ". " }), p.q,
        el("details", {}, [el("summary", { text: "Show answer" }), el("p", { text: p.a })])]));
    });
    w.appendChild(el("h2", { text: "Lab / investigation" }));
    w.appendChild(el("p", { text: u.lab }));
    w.appendChild(el("h2", { text: "Real-world applications" }));
    var ul = el("ul"); u.realWorld.forEach(function (r) { ul.appendChild(el("li", { text: r })); }); w.appendChild(ul);
    return w;
  }

  function resourcesView(u) {
    var w = el("div");
    w.appendChild(el("p", { class: "meta", text: "Links open external sites; ask your teacher if one is unavailable." }));
    var t = el("table");
    t.appendChild(el("tr", {}, [el("th", { text: "Resource" }), el("th", { text: "Type" }), el("th", { text: "Use it for" })]));
    u.resources.forEach(function (r) {
      t.appendChild(el("tr", {}, [el("td", {}, [el("a", { href: r.url, target: "_blank", rel: "noopener noreferrer", text: r.name })]), el("td", { text: r.type }), el("td", { text: r.note })]));
    });
    w.appendChild(t);
    return w;
  }

  function unitAssessView(u) {
    var a = u.assessment, w = el("div");
    var t = el("table");
    [["Formative", a.formative], ["Summative", a.summative], ["Performance task / lab", a.performance], ["Mastery criterion", a.mastery]].forEach(function (r) {
      t.appendChild(el("tr", {}, [el("th", { text: r[0] }), el("td", { text: r[1] })]));
    });
    w.appendChild(t);
    w.appendChild(el("p", { class: "meta", text: "See the Assessment page (top menu) for the 4-level proficiency rubric and grade weighting." }));
    return w;
  }

  /* ---------- course-wide assessment page ---------- */
  function assessment() {
    renderNav("assessment");
    var d = el("div");
    d.appendChild(el("h1", { text: "Assessment criteria & progress tracking" }));
    d.appendChild(el("h2", { text: "Proficiency rubric (applies to every learning objective)" }));
    var t = el("table");
    t.appendChild(el("tr", {}, [el("th", { text: "Level" }), el("th", { text: "Name" }), el("th", { text: "What it looks like" })]));
    COURSE.rubric.forEach(function (r) { t.appendChild(el("tr", {}, [el("td", { text: String(r.level) }), el("td", { text: r.name }), el("td", { text: r.desc })])); });
    d.appendChild(t);
    d.appendChild(el("h2", { text: "Suggested grade weighting" }));
    var w = el("table");
    w.appendChild(el("tr", {}, [el("th", { text: "Category" }), el("th", { text: "Weight" })]));
    COURSE.weights.forEach(function (r) { w.appendChild(el("tr", {}, [el("td", { text: r.category }), el("td", { text: r.pct + "%" })])); });
    d.appendChild(w);
    d.appendChild(el("h2", { text: "Your progress" }));
    var p = el("table");
    p.appendChild(el("tr", {}, [el("th", { text: "Unit" }), el("th", { text: "Objectives checked" }), el("th", { text: "Quiz best" }), el("th", { text: "Mastery (≥ 80%)" })]));
    UNITS.forEach(function (u) {
      var q = mem.quiz[u.id];
      p.appendChild(el("tr", {}, [el("td", {}, [el("a", { href: "#/unit/" + u.id, text: u.title })]),
        el("td", { text: objDone(u) + " / " + u.objectives.length }),
        el("td", { text: q ? q.best + "/" + q.total : "—" }),
        el("td", { text: q && q.best / q.total >= 0.8 ? "✔ Yes" : "Not yet" })]));
    });
    d.appendChild(p);
    d.appendChild(el("p", { class: "meta", text: "Students can screenshot or print this page for a conference or portfolio." }));
    show(d);
  }

  /* ---------- router ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, "").split("/");
    if (h[0] === "unit" && h[1]) unit(h[1]);
    else if (h[0] === "assessment") assessment();
    else home();
  }
  window.addEventListener("hashchange", route);
  route();
})();
