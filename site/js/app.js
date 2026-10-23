// Renders window.PHYSICS_DATA. Progress (quiz bests, objective checkboxes) lives in localStorage only.
(function () {
  const D = window.PHYSICS_DATA;
  const KEY = "physics-project-v1";
  const $ = (sel, el = document) => el.querySelector(sel);
  const app = $("#app");
  const nav = $("#nav");

  // ---------- storage (may throw in private windows) ----------
  let state = { best: {}, checked: {} };
  try { state = Object.assign(state, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { /* run without persistence */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ } };

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const topicById = (id) => D.topics.find((t) => t.id === id);
  const pct = (t) => (state.best[t.id] == null ? null : Math.round((state.best[t.id] / t.quiz.length) * 100));
  const objDone = (t) => t.objectives.filter((_, i) => state.checked[`${t.id}:${i}`]).length;

  // ---------- navigation ----------
  function renderNav(active) {
    const items = [["home", "Overview", "🏠"], ...D.topics.map((t) => [t.id, t.name, t.icon]), ["progress", "My Progress", "📈"], ["rubric", "Assessment", "📋"]];
    nav.innerHTML = items.map(([id, label, icon]) =>
      `<a href="#/${id}" class="${id === active ? "active" : ""}" ${id === active ? 'aria-current="page"' : ""}><span aria-hidden="true">${icon}</span> ${esc(label)}</a>`
    ).join("");
  }

  // ---------- pages ----------
  function home() {
    const stds = D.standards.map((s) => `<li><strong>${esc(s.id)}</strong> — ${esc(s.text)}</li>`).join("");
    const cards = D.topics.map((t) => {
      const p = pct(t);
      return `<a class="card topic-card" href="#/${t.id}">
        <div class="icon" aria-hidden="true">${t.icon}</div>
        <h3>${esc(t.name)}</h3>
        <p class="muted">${esc(t.weeks)} · ${t.standards.map(esc).join(", ")}</p>
        <p>${esc(t.summary)}</p>
        <p class="muted small">${p == null ? "Quiz not taken" : "Best quiz: " + p + "%"} · ${objDone(t)}/${t.objectives.length} objectives</p>
      </a>`;
    }).join("");
    app.innerHTML = `
      <h1>${esc(D.course.title)}</h1>
      <p class="lead">${esc(D.course.grade)}. Five units — Kinematics, Projectile Motion, Newton's Laws, Momentum, Work &amp; Energy — each with objectives, Cornell notes, a most-missed-questions quiz, practice problems, resources, real-world connections and assessment criteria.</p>
      <div class="grid">${cards}</div>
      <h2>How to use this project</h2>
      <ol>
        <li>Open a unit and read the <strong>objectives</strong>; check them off when you can do them without help.</li>
        <li>Fill in or study the <strong>Cornell notes</strong> (cues on the left, notes on the right, summary at the bottom). Print them from the Notes tab.</li>
        <li>Take the <strong>quiz</strong>. Every wrong answer names the misconception behind it. Retake until you reach 80%.</li>
        <li>Work the <strong>practice problems</strong>, then use the <strong>resources</strong> to fill gaps.</li>
        <li>Check the <strong>Assessment</strong> page to see how the lab or design task will be scored.</li>
      </ol>
      <h2>Learning goals: California NGSS</h2>
      <p>Standards come from the <a href="${esc(D.course.standardsUrl)}" target="_blank" rel="noopener">California NGSS standards</a> (Physics &amp; Earth Science course model). Semester 1 targets:</p>
      <ul class="stds">${stds}</ul>
      <p class="muted small">Semester 2 (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) will extend this project.</p>`;
  }

  const TABS = [["objectives", "Objectives"], ["notes", "Cornell Notes"], ["quiz", "Quiz"], ["practice", "Practice"], ["resources", "Resources"], ["assess", "Assessment"]];

  function topicPage(t, tab) {
    tab = TABS.some(([k]) => k === tab) ? tab : "objectives";
    const tabs = TABS.map(([k, label]) => `<a role="tab" href="#/${t.id}/${k}" class="${k === tab ? "active" : ""}" aria-selected="${k === tab}">${label}</a>`).join("");
    app.innerHTML = `
      <p class="crumb"><a href="#/home">Overview</a> › ${esc(t.name)}</p>
      <h1>${t.icon} ${esc(t.name)}</h1>
      <p class="muted">${esc(t.weeks)} · Standards: ${t.standards.map(esc).join(", ")}</p>
      <div class="tabs" role="tablist">${tabs}</div>
      <div id="panel"></div>`;
    ({ objectives, notes, quiz, practice, resources, assess })[tab](t, $("#panel"));
  }

  function objectives(t, el) {
    const std = t.standards.map((id) => D.standards.find((s) => s.id === id)).filter(Boolean)
      .map((s) => `<li><strong>${esc(s.id)}</strong> — ${esc(s.text)}</li>`).join("");
    const boxes = t.objectives.map((o, i) => {
      const k = `${t.id}:${i}`;
      return `<li><label><input type="checkbox" data-k="${k}" ${state.checked[k] ? "checked" : ""}> I can: ${esc(o)}</label></li>`;
    }).join("");
    const concepts = t.concepts.map((c) => `<tr><th scope="row">${esc(c.term)}</th><td>${esc(c.def)}</td></tr>`).join("");
    el.innerHTML = `
      <p class="lead">${esc(t.summary)}</p>
      <h2>Learning objectives</h2>
      <ul class="checklist">${boxes}</ul>
      <p class="muted small" id="objcount"></p>
      <h2>Key concepts</h2>
      <table class="concepts"><tbody>${concepts}</tbody></table>
      <h2>NGSS alignment</h2>
      <ul>${std}</ul>
      <p class="muted small">${esc(t.note)}</p>
      <h2>Real-world applications</h2>
      <ul>${t.realWorld.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
      <h2>Hands-on lab</h2>
      <p>${esc(t.lab)}</p>`;
    const count = () => { $("#objcount", el).textContent = `${objDone(t)} of ${t.objectives.length} objectives checked`; };
    count();
    el.querySelectorAll("input[data-k]").forEach((cb) => cb.addEventListener("change", () => {
      state.checked[cb.dataset.k] = cb.checked; save(); count();
    }));
  }

  function notes(t, el) {
    const c = t.cornell;
    const rows = c.cues.map((cue, i) => `<tr><td class="cue">${esc(cue)}</td><td>${esc(c.notes[i] || "")}</td></tr>`).join("");
    el.innerHTML = `
      <div class="cornell">
        <div class="cornell-head"><strong>Topic:</strong> ${esc(c.topic)} <span class="spacer"></span> Name: __________ Date: ______ Period: ___</div>
        <table><thead><tr><th>Cues / Questions</th><th>Notes</th></tr></thead><tbody>${rows}</tbody></table>
        <div class="cornell-sum"><strong>Summary:</strong> ${esc(c.summary)}</div>
      </div>
      <p><button class="btn" id="print">Print / save as PDF</button>
      <button class="btn secondary" id="blank">Show blank version for students</button></p>`;
    $("#print").onclick = () => window.print();
    $("#blank").onclick = () => {
      el.querySelectorAll(".cornell tbody td:last-child").forEach((td) => { td.textContent = ""; td.style.height = "5.5rem"; });
      const s = $(".cornell-sum", el); s.innerHTML = "<strong>Summary:</strong><div style='height:4rem'></div>";
    };
  }

  function quiz(t, el) {
    const answers = new Array(t.quiz.length).fill(null);
    // Shuffle display order so the right answer isn't predictable; radio values and `ans` still use the original index.
    const order = t.quiz.map((q) => q.opts.map((_, i) => i).sort(() => Math.random() - 0.5));
    const qs = t.quiz.map((q, qi) => `
      <fieldset class="q" data-i="${qi}">
        <legend>${qi + 1}. ${esc(q.q)}</legend>
        ${order[qi].map((oi) => `<label class="opt" data-o="${oi}"><input type="radio" name="q${qi}" value="${oi}"> ${esc(q.opts[oi])}</label>`).join("")}
        <div class="fb" aria-live="polite"></div>
      </fieldset>`).join("");
    el.innerHTML = `
      <p class="lead">${t.quiz.length} of the most commonly missed questions on ${esc(t.name)}. Each explanation names the misconception.</p>
      ${qs}
      <p><button class="btn" id="check">Check answers</button> <button class="btn secondary" id="retry">Retry</button></p>
      <div id="result" aria-live="polite"></div>`;
    el.querySelectorAll("input[type=radio]").forEach((r) => r.addEventListener("change", () => {
      answers[+r.name.slice(1)] = +r.value;
    }));
    $("#check").onclick = () => {
      if (answers.includes(null)) { $("#result").innerHTML = `<p class="warn">Answer all ${t.quiz.length} questions first.</p>`; return; }
      let score = 0;
      t.quiz.forEach((q, i) => {
        const ok = answers[i] === q.ans; if (ok) score++;
        const fs = el.querySelector(`.q[data-i="${i}"]`);
        fs.classList.toggle("right", ok); fs.classList.toggle("wrong", !ok);
        fs.querySelectorAll("input").forEach((inp) => { inp.disabled = true; });
        fs.querySelector(`.opt[data-o="${q.ans}"]`).classList.add("key");
        $(".fb", fs).innerHTML = `<strong>${ok ? "Correct." : "Not quite."}</strong> ${ok ? "" : `Common misconception: <em>${esc(q.miss)}</em>. `}${esc(q.why)}`;
      });
      const p = Math.round((score / t.quiz.length) * 100);
      if (state.best[t.id] == null || score > state.best[t.id]) { state.best[t.id] = score; save(); }
      $("#result").innerHTML = `<p class="score ${p >= 80 ? "pass" : ""}">Score: ${score}/${t.quiz.length} (${p}%) — ${p >= 80 ? "mastery reached 🎉" : "review the explanations and retry (80% = mastery)"}</p>`;
    };
    $("#retry").onclick = () => quiz(t, el);
  }

  function practice(t, el) {
    el.innerHTML = `
      <p class="lead">Try each problem on paper first, then reveal the answer.</p>
      <ol class="practice">${t.practice.map((x) => `<li><p>${esc(x.p)}</p><details><summary>Show answer</summary><p>${esc(x.a)}</p></details></li>`).join("")}</ol>`;
  }

  function resources(t, el) {
    el.innerHTML = `
      <p class="lead">Free and school-supported resources for ${esc(t.name)}. Links go to each site's home page — search for the topic named.</p>
      <table class="res"><thead><tr><th>Resource</th><th>Type</th><th>Use it for</th></tr></thead><tbody>
      ${t.resources.map((r) => `<tr><td><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)}</a></td><td>${esc(r.type)}</td><td>${esc(r.use)}</td></tr>`).join("")}
      </tbody></table>`;
  }

  function assess(t, el) {
    el.innerHTML = `
      <h2>What you will be asked to show</h2>
      <ul>${t.assess.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
      <p>${esc(D.rubric.mastery)}</p>
      <p><a href="#/rubric">See the full scoring rubric →</a></p>`;
  }

  function rubric() {
    const R = D.rubric;
    app.innerHTML = `
      <h1>📋 Assessment criteria</h1>
      <p class="lead">${esc(R.mastery)}</p>
      <div class="scroll"><table class="rubric"><thead><tr><th>Criterion</th>${R.levels.map((l) => `<th>${esc(l)}</th>`).join("")}</tr></thead><tbody>
      ${R.criteria.map((c) => `<tr><th scope="row">${esc(c.name)}</th>${c.d.map((x) => `<td>${esc(x)}</td>`).join("")}</tr>`).join("")}
      </tbody></table></div>
      <h2>Per-unit evidence</h2>
      ${D.topics.map((t) => `<h3>${t.icon} ${esc(t.name)}</h3><ul>${t.assess.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>`).join("")}`;
  }

  function progress() {
    const rows = D.topics.map((t) => {
      const p = pct(t);
      return `<tr><th scope="row"><a href="#/${t.id}">${t.icon} ${esc(t.name)}</a></th>
        <td>${objDone(t)}/${t.objectives.length}</td>
        <td>${p == null ? "—" : p + "%"}</td>
        <td>${p == null ? "Not started" : p >= 80 ? "✅ Mastered quiz" : "🔁 Keep practicing"}</td></tr>`;
    }).join("");
    app.innerHTML = `
      <h1>📈 My progress</h1>
      <p class="lead">Saved in this browser only. Show your teacher this page, or print it.</p>
      <table class="res"><thead><tr><th>Unit</th><th>Objectives checked</th><th>Best quiz</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>
      <p><button class="btn" onclick="window.print()">Print</button> <button class="btn secondary" id="reset">Reset all progress</button></p>`;
    $("#reset").onclick = () => { if (confirm("Erase all saved progress in this browser?")) { state = { best: {}, checked: {} }; save(); progress(); } };
  }

  // ---------- router ----------
  function route() {
    const [id = "home", tab] = location.hash.replace(/^#\/?/, "").split("/");
    renderNav(id);
    const t = topicById(id);
    if (t) topicPage(t, tab);
    else if (id === "progress") progress();
    else if (id === "rubric") rubric();
    else home();
    document.title = (t ? t.name + " · " : "") + "Physics Learning Project";
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
