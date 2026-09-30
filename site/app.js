(function () {
  var C = window.COURSE, app = document.getElementById("app"), nav = document.getElementById("nav");
  var KEY = "physics-project-v1";
  var state = load();

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function get(t) { return (state[t] = state[t] || { obj: {}, best: 0, notes: false, problems: 0 }); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pct(t) {
    var s = get(t.id), o = Object.keys(s.obj).filter(function (k) { return s.obj[k]; }).length;
    var parts = [o / t.objectives.length, s.notes ? 1 : 0, Math.min(s.best / 80, 1)];
    return Math.round(parts.reduce(function (a, b) { return a + b; }, 0) / 3 * 100);
  }

  function renderNav(cur) {
    nav.innerHTML = '<a href="#home" class="' + (cur === "home" ? "on" : "") + '">Overview</a>' +
      C.topics.map(function (t) { return '<a href="#' + t.id + '" class="' + (cur === t.id ? "on" : "") + '">' + t.icon + " " + esc(t.name) + "</a>"; }).join("");
  }

  function home() {
    var h = '<section class="card"><h2>' + esc(C.title) + "</h2><p>" + esc(C.standardsNote) + "</p></section>";
    h += '<section class="card"><h2>Topics &amp; progress</h2><div class="grid">' + C.topics.map(function (t) {
      return '<a class="tile" href="#' + t.id + '"><strong>' + t.icon + " " + esc(t.name) + '</strong> <span class="muted">' + t.weeks + "</span><br>" +
        '<span class="muted">' + esc(t.summary) + '</span><div class="bar"><i style="width:' + pct(t) + '%"></i></div><small>' + pct(t) + "% complete · best quiz " + get(t.id).best + "%</small></a>";
    }).join("") + "</div></section>";
    h += '<section class="card"><h2>NGSS learning goals</h2><table><tr><th>Standard</th><th>Performance expectation</th></tr>' +
      Object.keys(C.standards).map(function (k) { return "<tr><td><b>" + k + "</b></td><td>" + esc(C.standards[k]) + "</td></tr>"; }).join("") + "</table></section>";
    h += '<section class="card"><h2>Assessment criteria</h2><table><tr><th>Component</th><th>Weight</th><th>Success criteria</th></tr>' +
      C.assessment.map(function (a) { return "<tr><td>" + esc(a.what) + "</td><td>" + a.weight + "</td><td>" + esc(a.criteria) + "</td></tr>"; }).join("") + "</table>" +
      "<h3>Mastery scale</h3><table>" + C.rubric.map(function (r) { return "<tr><td><b>" + esc(r.level) + "</b></td><td>" + esc(r.desc) + "</td></tr>"; }).join("") + "</table>" +
      '<p class="noprint"><button class="ghost" id="reset">Reset my progress</button></p></section>';
    app.innerHTML = h;
    document.getElementById("reset").onclick = function () { if (confirm("Clear all saved progress on this device?")) { state = {}; save(); home(); } };
  }

  function topic(t) {
    var s = get(t.id), h = "";
    h += '<section class="card"><h2>' + t.icon + " " + esc(t.name) + '</h2><p class="muted">' + esc(t.summary) + "</p>" +
      t.standards.map(function (x) { return '<span class="tag" title="' + esc(C.standards[x]) + '">' + x + "</span>"; }).join("") + '<span class="tag">' + t.weeks + "</span></section>";

    h += '<section class="card"><h2>1 · Learning objectives</h2><p class="muted noprint">Check each one when you can do it without notes.</p>' +
      t.objectives.map(function (o, i) { return '<label class="chk"><input type="checkbox" data-obj="' + i + '"' + (s.obj[i] ? " checked" : "") + "> <span>" + esc(o) + "</span></label>"; }).join("") + "</section>";

    h += '<section class="card"><h2>2 · Key concepts</h2><table><tr><th>Concept</th><th>What to master</th></tr>' +
      t.concepts.map(function (c) { return "<tr><td><b>" + esc(c[0]) + "</b></td><td>" + esc(c[1]) + "</td></tr>"; }).join("") + "</table></section>";

    h += '<section class="card"><h2>3 · Cornell notes</h2><p class="muted noprint">Cover the right column and use the cues to quiz yourself. <button class="ghost" onclick="window.print()">Print</button></p>' +
      '<table class="cornell"><tr><th>Cues / questions</th><th>Notes</th></tr>' +
      t.cornell.rows.map(function (r) { return "<tr><td>" + esc(r[0]) + "</td><td>" + esc(r[1]) + "</td></tr>"; }).join("") + "</table>" +
      '<div class="summary"><b>Summary:</b> ' + esc(t.cornell.summary) + "</div>" +
      '<label class="chk noprint" style="margin-top:8px"><input type="checkbox" id="notesDone"' + (s.notes ? " checked" : "") + "> I wrote my own cues and summary and self-quizzed.</label></section>";

    h += '<section class="card" id="quizCard"><h2>4 · Quiz: most-missed questions</h2><div id="quiz"></div></section>';

    h += '<section class="card"><h2>5 · Practice problems</h2><p class="muted">Use GUESS: Given, Unknown, Equation, Substitute, Solve (units!).</p>' +
      t.problems.map(function (p, i) { return "<details><summary>" + (i + 1) + ". " + esc(p.p) + "</summary><p><b>Answer:</b> " + esc(p.ans) + "</p></details>"; }).join("") + "</section>";

    h += '<section class="card"><h2>6 · Resources &amp; real-world connections</h2><h3>Learning resources</h3><ul>' +
      t.resources.map(function (r) { return '<li><a href="' + esc(r[1]) + '" target="_blank" rel="noopener">' + esc(r[0]) + "</a> — " + esc(r[2]) + "</li>"; }).join("") +
      "</ul><h3>Real-world applications</h3><ul>" + t.realWorld.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul></section>";

    app.innerHTML = h;
    app.querySelectorAll("[data-obj]").forEach(function (el) { el.onchange = function () { s.obj[el.dataset.obj] = el.checked; save(); }; });
    document.getElementById("notesDone").onchange = function (e) { s.notes = e.target.checked; save(); };
    quiz(t);
  }

  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = a[i]; a[i] = a[j]; a[j] = x; } return a; }

  function quiz(t) {
    var box = document.getElementById("quiz"), s = get(t.id);
    var items = t.quiz.map(function (q) {
      var order = shuffle(q.opts.map(function (_, i) { return i; }));
      return { q: q, order: order };
    });
    items = shuffle(items);
    var answered = 0, correct = 0, total = items.length;
    box.innerHTML = '<p class="muted">Best score: <b>' + s.best + '%</b> · Goal: 80%</p>' + items.map(function (it, n) {
      return '<div class="q" data-n="' + n + '"><b>' + (n + 1) + ". " + esc(it.q.q) + "</b>" +
        it.order.map(function (oi) { return '<button class="opt" data-o="' + oi + '">' + esc(it.q.opts[oi]) + "</button>"; }).join("") + '<div class="why" hidden></div></div>';
    }).join("") + '<p><span class="score" id="score"></span> <button id="retry" class="ghost" hidden>Retake (reshuffled)</button></p>';
    box.querySelectorAll(".q").forEach(function (div) {
      var it = items[+div.dataset.n];
      div.querySelectorAll(".opt").forEach(function (b) {
        b.onclick = function () {
          var pick = +b.dataset.o, ok = pick === it.q.a;
          div.querySelectorAll(".opt").forEach(function (x) { x.disabled = true; if (+x.dataset.o === it.q.a) x.classList.add("right"); });
          if (!ok) b.classList.add("wrong");
          var w = div.querySelector(".why"); w.hidden = false; w.innerHTML = (ok ? "✅ Correct. " : "❌ Not quite. ") + "<b>Why this is missed:</b> " + esc(it.q.why);
          answered++; if (ok) correct++;
          if (answered === total) {
            var p = Math.round(correct / total * 100);
            document.getElementById("score").textContent = "Score: " + correct + "/" + total + " (" + p + "%) " + (p >= 80 ? "— proficient! 🎉" : "— review the explanations, then retake.");
            if (p > s.best) { s.best = p; save(); renderNav(t.id); }
            var r = document.getElementById("retry"); r.hidden = false; r.onclick = function () { quiz(t); };
          }
        };
      });
    });
  }

  function route() {
    var id = location.hash.slice(1) || "home", t = C.topics.filter(function (x) { return x.id === id; })[0];
    renderNav(t ? id : "home"); window.scrollTo(0, 0);
    if (t) topic(t); else home();
  }
  window.addEventListener("hashchange", route); route();
})();
