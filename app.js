(function () {
  var C = window.COURSE, app = document.getElementById("app"), nav = document.getElementById("nav");
  var KEY = "physics-s1-progress-v1";
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }
  var prog = load();
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function tp(id) { return prog[id] || (prog[id] = { checks: {}, best: 0 }); }

  // The mastery checklist is the same list of items on the topic page and on the home progress bar.
  function checklist(t) {
    var items = t.objectives.map(function (o, i) { return ["obj" + i, "Objective: " + o]; });
    items.push(["cornell", "Completed Cornell notes (cues + notes + summary)"],
      ["quiz", "Scored 80% or higher on the quiz"],
      ["practice", "Completed the practice problems"],
      ["lab", "Completed the lab / design challenge"]);
    return items;
  }
  function pct(t) {
    var items = checklist(t), p = tp(t.id), n = 0;
    items.forEach(function (i) { if (p.checks[i[0]]) n++; });
    return Math.round(100 * n / items.length);
  }
  function stds(t) {
    return t.standards.map(function (s) { return '<span class="pill" title="' + esc(C.standards[s]) + '">' + s + "</span>"; }).join("");
  }

  function home() {
    var h = "<h1>" + esc(C.title) + "</h1><p>Learning project for 11th grade physics. Each unit has objectives, Cornell notes, an interactive quiz on the most-missed questions, practice problems, resources, real-world connections, and assessment criteria.</p>";
    h += '<div class="grid">';
    C.topics.forEach(function (t) {
      h += '<a class="card" href="#/t/' + t.id + '/overview"><div style="font-size:28px">' + t.icon + "</div><h3>" + t.num + ". " + esc(t.title) + "</h3><p class=note>" + esc(t.summary) + "</p><div>" + stds(t) + '<span class="pill">' + t.weeks + "</span></div>" +
        '<div class="bar"><i style="width:' + pct(t) + '%"></i></div><div class="note">' + pct(t) + "% complete · best quiz " + tp(t.id).best + "%</div></a>";
    });
    h += "</div><h2>Standards (learning goals)</h2><p class=note>" + esc(C.standardsNote) + "</p><table>";
    Object.keys(C.standards).forEach(function (k) { h += "<tr><th>" + k + "</th><td>" + esc(C.standards[k]) + "</td></tr>"; });
    h += "</table><h2>How work is assessed</h2><div class=grid><div class=card><h3>Weighting</h3><table>";
    C.grading.weights.forEach(function (w) { h += "<tr><td>" + esc(w[0]) + "</td><td>" + w[1] + "%</td></tr>"; });
    h += "</table></div><div class=card><h3>Mastery scale</h3><table>";
    C.grading.scale.forEach(function (s) { h += "<tr><th>" + esc(s[0]) + "</th><td>" + esc(s[1]) + "</td></tr>"; });
    h += "</table></div></div><p class=note>Weights are a suggested default for instructors; edit them in data.js.</p>";
    return h;
  }

  var TABS = [["overview", "Overview & goals"], ["notes", "Cornell notes"], ["quiz", "Quiz"], ["practice", "Practice"], ["resources", "Resources & real world"], ["assess", "Assessment & checklist"]];

  function overview(t) {
    var h = "<h2>Learning objectives</h2><ul>" + t.objectives.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul>";
    h += "<h2>Key concepts</h2><table>" + t.concepts.map(function (c) { return "<tr><th>" + esc(c[0]) + "</th><td>" + esc(c[1]) + "</td></tr>"; }).join("") + "</table>";
    h += "<h2>Vocabulary</h2><p>" + t.vocab.map(function (v) { return '<span class="pill">' + esc(v) + "</span>"; }).join("") + "</p>";
    h += "<h2>Standards</h2><ul>" + t.standards.map(function (s) { return "<li><b>" + s + ":</b> " + esc(C.standards[s]) + "</li>"; }).join("") + "</ul>";
    return h;
  }
  function notes(t) {
    var n = t.cornell;
    var h = "<h2>Cornell notes: " + esc(n.topic) + '</h2><p class=note>Print this page (Ctrl/Cmd+P). Cover the right column and use the left column as self-test questions.</p><table class="cornell"><tr><th>Cue / question</th><th>Notes</th></tr>';
    n.rows.forEach(function (r) { h += "<tr><td>" + esc(r[0]) + "</td><td>" + esc(r[1]) + "</td></tr>"; });
    h += '</table><div class="summary"><b>Summary:</b> ' + esc(n.summary) + "</div>";
    return h;
  }
  function quiz(t) {
    var h = "<h2>Most-missed questions: " + esc(t.title) + '</h2><p class=note>Pick an answer for instant feedback. Read every explanation — they target the common misconceptions.</p><div id="qz"></div><div id="qres"></div>';
    return h;
  }
  function wireQuiz(t) {
    var box = document.getElementById("qz"), res = document.getElementById("qres"), answered = {}, score = 0;
    box.innerHTML = t.quiz.map(function (q, i) {
      return '<div class="q card"><b>' + (i + 1) + ". " + esc(q.q) + "</b>" + q.o.map(function (o, j) { return '<button class="opt" data-q="' + i + '" data-o="' + j + '">' + esc(o) + "</button>"; }).join("") + '<div class="why" hidden></div></div>';
    }).join("");
    box.onclick = function (e) {
      var b = e.target.closest(".opt"); if (!b) return;
      var i = +b.dataset.q, j = +b.dataset.o, q = t.quiz[i]; if (answered[i] !== undefined) return;
      answered[i] = j; if (j === q.a) score++;
      var card = b.parentNode; card.querySelectorAll(".opt").forEach(function (x, k) { x.disabled = true; if (k === q.a) x.classList.add("ok"); else if (k === j) x.classList.add("bad"); });
      var w = card.querySelector(".why"); w.hidden = false; w.innerHTML = (j === q.a ? "✅ Correct. " : "❌ Not quite. ") + esc(q.why);
      if (Object.keys(answered).length === t.quiz.length) {
        var p = Math.round(100 * score / t.quiz.length), r = tp(t.id);
        if (p > r.best) r.best = p; if (p >= 80) r.checks.quiz = true; save(prog);
        res.innerHTML = '<div class="card"><h3>Score: ' + score + "/" + t.quiz.length + " (" + p + "%)</h3><p>" + (p >= 80 ? "Mastery reached — quiz item checked off." : "Below 80%. Review your Cornell notes and retry.") + '</p><button class="btn" id="retry">Retry</button></div>';
        document.getElementById("retry").onclick = function () { wireQuiz(t); res.innerHTML = ""; window.scrollTo(0, 0); };
      }
    };
  }
  function practice(t) {
    var h = "<h2>Practice problems</h2><p class=note>Try each on paper first, showing knowns, equation, substitution, and units. Then check.</p><ol>";
    t.practice.forEach(function (p) { h += "<li><p>" + esc(p.p) + "</p><details><summary>Show answer</summary><p><b>" + esc(p.ans) + "</b></p></details></li>"; });
    return h + "</ol><p class=note>Use g = 9.8 m/s² unless told otherwise.</p>";
  }
  function resources(t) {
    var h = "<h2>Learning resources</h2><ul>" + t.resources.map(function (r) { return '<li><a href="' + esc(r[1]) + '" target="_blank" rel="noopener">' + esc(r[0]) + "</a> — " + esc(r[2]) + "</li>"; }).join("") + "</ul>";
    h += "<h2>Lab / design challenge</h2><p>" + esc(t.lab) + "</p><h2>Real-world applications</h2><ul>" + t.realWorld.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>";
    return h;
  }
  function assess(t) {
    var h = "<h2>Assessment criteria</h2><table><tr><th>Criterion</th><th>Proficient (3) looks like…</th></tr>" + t.assessment.map(function (a) { return "<tr><td>" + esc(a[0]) + "</td><td>" + esc(a[1]) + "</td></tr>"; }).join("") + "</table>";
    h += '<h2>Mastery checklist</h2><ul class="check">' + checklist(t).map(function (c) { return '<li><label><input type="checkbox" data-k="' + c[0] + '"' + (tp(t.id).checks[c[0]] ? " checked" : "") + "> " + esc(c[1]) + "</label></li>"; }).join("") + "</ul>";
    return h + '<p class="note">Best quiz score: ' + tp(t.id).best + "%. Progress is stored in this browser.</p>";
  }

  function topic(id, tab) {
    var t = C.topics.filter(function (x) { return x.id === id; })[0]; if (!t) return "<p>Unknown topic.</p>";
    tab = tab || "overview";
    var h = "<h1>" + t.icon + " " + t.num + ". " + esc(t.title) + "</h1><p>" + esc(t.summary) + "</p><div>" + stds(t) + '<span class="pill">' + t.weeks + '</span></div><div class="tabs">';
    TABS.forEach(function (x) { h += '<a href="#/t/' + id + "/" + x[0] + '" class="' + (x[0] === tab ? "on" : "") + '">' + x[1] + "</a>"; });
    h += "</div>";
    var fn = { overview: overview, notes: notes, quiz: quiz, practice: practice, resources: resources, assess: assess }[tab] || overview;
    return h + fn(t);
  }

  function printAll() {
    var h = "<h1>" + esc(C.title) + " — Project Outline</h1><p class=note>Print or save as PDF.</p>";
    C.topics.forEach(function (t) {
      h += "<h2>" + t.num + ". " + esc(t.title) + " (" + t.weeks + ")</h2><p>" + t.standards.join(", ") + "</p><ul class=check>" + checklist(t).map(function (c) { return "<li>☐ " + esc(c[1]) + "</li>"; }).join("") + "</ul>";
    });
    return h;
  }

  function route() {
    var parts = (location.hash || "#/").slice(2).split("/"), h;
    if (parts[0] === "t") h = topic(parts[1], parts[2]);
    else if (parts[0] === "print") h = printAll();
    else h = home();
    app.innerHTML = h;
    nav.innerHTML = '<a href="#/" class="' + (parts[0] === "" ? "on" : "") + '">Home</a>' + C.topics.map(function (t) { return '<a href="#/t/' + t.id + '/overview" class="' + (parts[1] === t.id ? "on" : "") + '">' + esc(t.title) + "</a>"; }).join("");
    if (parts[0] === "t" && parts[2] === "quiz") { var t = C.topics.filter(function (x) { return x.id === parts[1]; })[0]; if (t) wireQuiz(t); }
    window.scrollTo(0, 0);
  }
  app.addEventListener("change", function (e) {
    var k = e.target.dataset && e.target.dataset.k; if (!k) return;
    var id = location.hash.split("/")[2]; tp(id).checks[k] = e.target.checked; save(prog);
  });
  window.addEventListener("hashchange", route);
  route();
})();
