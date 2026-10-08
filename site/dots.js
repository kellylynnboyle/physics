// Interactive dot-diagram (ticker-tape) lesson. Exposes window.renderDots(panel).
(function () {
  var NS = "http://www.w3.org/2000/svg";
  var X0 = 30, SC = 18, W = 800, H = 130; // px offset, px per cm, viewBox

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function r2(x) { return Math.round(x * 100) / 100; }

  // positions (cm) -> SVG string. hi = index of the highlighted gap (or -1). showVals toggles gap labels.
  function diagram(pos, hi, showVals) {
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Dot diagram with ruler in centimeters" style="width:100%;height:auto">';
    s += '<line x1="' + X0 + '" y1="95" x2="' + (X0 + 40 * SC) + '" y2="95" stroke="currentColor" stroke-width="1.5"/>';
    for (var c = 0; c <= 40; c++) {
      var x = X0 + c * SC, big = c % 5 === 0;
      s += '<line x1="' + x + '" y1="95" x2="' + x + '" y2="' + (big ? 107 : 101) + '" stroke="currentColor" stroke-width="1"/>';
      if (big) s += '<text x="' + x + '" y="121" text-anchor="middle" font-size="12" fill="currentColor">' + c + '</text>';
    }
    s += '<text x="' + (X0 + 40 * SC + 4) + '" y="121" font-size="12" fill="currentColor">cm</text>';
    for (var i = 0; i < pos.length - 1; i++) {
      var a = X0 + pos[i] * SC, b = X0 + pos[i + 1] * SC, on = i === hi;
      if (on) s += '<rect x="' + a + '" y="22" width="' + (b - a) + '" height="52" fill="var(--accent)" opacity=".15"/>';
      if (showVals && b - a >= 22) s += '<text x="' + ((a + b) / 2) + '" y="' + (on ? 18 : 18) + '" text-anchor="middle" font-size="12" fill="currentColor">' + r2(pos[i + 1] - pos[i]) + '</text>';
    }
    pos.forEach(function (p, i) { s += '<circle cx="' + (X0 + p * SC) + '" cy="48" r="6" fill="var(--accent)"/><line x1="' + (X0 + p * SC) + '" y1="56" x2="' + (X0 + p * SC) + '" y2="95" stroke="currentColor" stroke-width=".5" stroke-dasharray="2 3" opacity=".5"/>'; });
    return s + "</svg>";
  }

  function classify(gaps) {
    var d = gaps[gaps.length - 1] - gaps[0], tol = 1e-6;
    return Math.abs(d) < tol ? "constant" : d > 0 ? "speeding" : "slowing";
  }
  var LABEL = { constant: "Constant speed (a = 0)", speeding: "Speeding up", slowing: "Slowing down" };

  window.renderDots = function (p) {
    p.innerHTML =
      '<div class="card"><h3 style="margin-top:0">1. The big idea</h3>' +
      '<p>A dot diagram drops one dot at <b>equal time intervals</b> (Δt). Since the time between dots never changes, <b>the gap between dots tells you the speed</b>: bigger gap = faster.</p>' +
      '<p class="muted"><b>Speed in a gap:</b> v = gap ÷ Δt. &nbsp; <b>Acceleration:</b> a = change in speed ÷ time between those speeds.</p></div>' +

      '<div class="card"><h3 style="margin-top:0">2. Explore: you control the motion</h3>' +
      '<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:end">' +
      '<label>Motion<br><select id="dm" style="font:inherit;padding:6px"><option value="constant">Constant speed</option><option value="speeding" selected>Speeding up</option><option value="slowing">Slowing down</option></select></label>' +
      '<label>Starting speed (cm/s)<br><input id="dv" type="range" min="2" max="40" value="4"><output id="dvo"></output></label>' +
      '<label>Acceleration size (cm/s²)<br><input id="da" type="range" min="2" max="40" value="10"><output id="dao"></output></label>' +
      '<label>Time between dots Δt (s)<br><select id="dt" style="font:inherit;padding:6px"><option>0.1</option><option selected>0.2</option><option>0.5</option></select></label>' +
      '<button class="primary" id="drop">▶ Drop dots</button></div>' +
      '<div id="exsvg" style="margin-top:8px"></div>' +
      '<div id="extbl" aria-live="polite"></div>' +
      '<p class="muted">Try it: make the motion "speeding up" and notice the gaps grow by the same amount each time. That equal growth is <i>constant acceleration</i>.</p></div>' +

      '<div class="card"><h3 style="margin-top:0">3. Challenge: read the diagram</h3>' +
      '<p class="muted">Measure with the ruler (numbers above the dots show each gap in cm). Answer in m/s, so convert cm → m.</p>' +
      '<div id="chal"></div></div>' +

      '<div class="card"><h3 style="margin-top:0">4. Ways to remember it</h3><ul>' +
      '<li><b>"Spread = speed, squished = slow."</b> Dots far apart means fast; dots close together means slow.</li>' +
      '<li><b>Footprints:</b> picture someone leaving a footprint every second. Long strides (big gaps) = running; short steps (small gaps) = creeping. The time between footprints is always the same, just like Δt.</li>' +
      '<li><b>Strobe light:</b> a camera flash fires at a steady beat and snaps the object each time. Same beat, so more distance between flashes means more speed.</li>' +
      '<li><b>"Count the spaces, not the faces."</b> N dots make N − 1 gaps (6 dots = 5 intervals).</li>' +
      '<li><b>"Growing gaps, going faster. Shrinking gaps, slowing."</b> Even gaps = cruise control.</li>' +
      '<li><b>G.O.T.:</b> <u>G</u>ap <u>O</u>ver <u>T</u>ime gives speed: v = gap ÷ Δt.</li>' +
      '<li><b>"Change in gap, over time squared"</b> gives acceleration: a = (change in gap) ÷ Δt².</li>' +
      '<li><b>cm → m:</b> slide the decimal point <b>2 places left</b> (3.0 cm = 0.030 m).</li>' +
      '<li><b>Sketch trick:</b> draw a quick dot strip when stuck. Speeding up looks like <span style="letter-spacing:2px">• • &nbsp;• &nbsp;&nbsp;• &nbsp;&nbsp;&nbsp;•</span>, the dots "run away" from each other.</li></ul></div>' +

      '<div class="card"><h3 style="margin-top:0">5. Cheat sheet</h3><ul>' +
      '<li>Count the <b>gaps</b> (intervals), not the dots.</li>' +
      '<li>Even gaps → constant speed. Growing gaps → speeding up. Shrinking gaps → slowing down.</li>' +
      '<li>Gap grows by the same amount each time → constant acceleration. Then a = (change in gap) ÷ Δt².</li>' +
      '<li>Convert cm to m before finishing (÷100).</li></ul></div>';

    explore(p); challenge(p);
  };

  function explore(p) {
    var $ = function (id) { return p.querySelector("#" + id); };
    var timer = null;
    function params() {
      var mode = $("dm").value, v0 = +$("dv").value, a = mode === "speeding" ? +$("da").value : mode === "slowing" ? -$("da").value : 0, dt = +$("dt").value;
      $("dvo").textContent = " " + v0; $("dao").textContent = " " + $("da").value;
      $("da").disabled = mode === "constant";
      return { mode: mode, v0: v0, a: a, dt: dt };
    }
    function positions(q) {
      var out = [0];
      for (var n = 1; n <= 12; n++) {
        var t = n * q.dt, v = q.v0 + q.a * t, x = q.v0 * t + 0.5 * q.a * t * t;
        if (v < 0 || x > 38) break; // stop when it would reverse or run off the ruler
        out.push(r2(x));
      }
      return out;
    }
    function table(pos, q) {
      var rows = "";
      for (var i = 0; i < pos.length - 1; i++) { var g = r2(pos[i + 1] - pos[i]); rows += "<tr><td>" + (i + 1) + "</td><td>" + g + " cm</td><td>" + r2(g / 100 / q.dt) + " m/s</td></tr>"; }
      var gaps = pos.slice(1).map(function (x, i) { return x - pos[i]; });
      var note = gaps.length > 1 ? "<p><b>" + LABEL[classify(gaps)] + "</b>" + (q.a ? ". Acceleration ≈ " + r2(Math.abs(q.a) / 100) + " m/s² " + (q.a > 0 ? "in the direction of motion" : "opposite the motion") : "") + "</p>" : "";
      return note + '<table><thead><tr><th>Gap #</th><th>Gap</th><th>Speed = gap ÷ Δt</th></tr></thead><tbody>' + rows + "</tbody></table>";
    }
    function draw(n) {
      var q = params(), pos = positions(q);
      $("exsvg").innerHTML = diagram(pos.slice(0, n == null ? pos.length : n), -1, true);
      $("extbl").innerHTML = (n == null || n >= pos.length) ? table(pos, q) : "";
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    ["dm", "dv", "da", "dt"].forEach(function (id) { $(id).oninput = function () { stop(); draw(); }; });
    var DEF = { constant: [8, 10], speeding: [4, 10], slowing: [20, 8] }; // [start speed, acceleration size] that give a full-length strip
    $("dm").onchange = function () { var d = DEF[$("dm").value]; $("dv").value = d[0]; $("da").value = d[1]; stop(); draw(); };
    $("drop").onclick = function () {
      stop(); var q = params(), pos = positions(q), n = 1; draw(1);
      timer = setInterval(function () { n++; draw(n); if (n >= pos.length) stop(); }, 450);
    };
    draw();
  }

  // Adds a "Hint" button that reveals one more hint each click.
  function hints(box, list) {
    var wrap = box.querySelector("#hintbox"); if (!wrap) return;
    var n = 0, out = document.createElement("div"), btn = document.createElement("button");
    out.setAttribute("aria-live", "polite"); btn.className = "secondary"; btn.textContent = "💡 Hint";
    btn.onclick = function () {
      if (n >= list.length) return;
      var d = document.createElement("div"); d.className = "fb"; d.style.marginTop = "6px"; d.innerHTML = "<b>Hint " + (n + 1) + ":</b> " + list[n]; out.appendChild(d); n++;
      btn.textContent = n >= list.length ? "No more hints" : "💡 Another hint"; if (n >= list.length) btn.disabled = true;
    };
    wrap.appendChild(btn); wrap.appendChild(out);
  }

  function newProblem() {
    var kind = pick(["constant", "speeding", "slowing"]), dt = pick([0.1, 0.2, 0.5]), gaps = [], N = rnd(5, 6);
    if (kind === "constant") { var g = rnd(2, 6); for (var i = 0; i < N; i++) gaps.push(g); }
    else { var d = rnd(1, 2), start = kind === "speeding" ? rnd(1, 2) : rnd(1, 2) + d * (N - 1); for (var j = 0; j < N; j++) gaps.push(kind === "speeding" ? start + d * j : start - d * j); }
    var pos = [rnd(1, 3)]; gaps.forEach(function (g) { pos.push(pos[pos.length - 1] + g); });
    var hi = rnd(0, N - 1), d2 = gaps[1] - gaps[0];
    return { kind: kind, dt: dt, gaps: gaps, pos: pos, hi: hi, speed: r2(gaps[hi] / 100 / dt), acc: r2(d2 / 100 / (dt * dt)) };
  }

  function challenge(p) {
    var box = p.querySelector("#chal"), score = { right: 0, tried: 0 }, prob, step;
    function ui(inner) {
      box.innerHTML = '<div class="muted">Score: ' + score.right + ' / ' + score.tried + ' questions</div>' + diagram(prob.pos, step === 2 ? prob.hi : -1, true) + inner;
    }
    function fresh() { prob = newProblem(); step = 1; q1(); }
    function q1() {
      ui('<p><b>Δt = ' + prob.dt + ' s</b> between dots.</p><p><b>Q1.</b> What kind of motion is this?</p><div id="b1"></div><div id="hintbox" style="margin:8px 0"></div><div id="fb" aria-live="polite"></div>');
      hints(box, ["Compare the gap at the left end with the gap at the right end.", "Remember: spread = speed, squished = slow. Are the gaps all equal, growing, or shrinking?", "Equal gaps = constant speed. Growing gaps = speeding up. Shrinking gaps = slowing down. (Read left to right.)"]);
      var b = box.querySelector("#b1");
      ["constant", "speeding", "slowing"].forEach(function (k) {
        var btn = document.createElement("button"); btn.className = "opt"; btn.textContent = LABEL[k]; btn.style.display = "inline-block"; btn.style.width = "auto"; btn.style.marginRight = "6px";
        btn.onclick = function () {
          score.tried++; var ok = k === prob.kind; if (ok) score.right++;
          b.querySelectorAll("button").forEach(function (x) { x.disabled = true; });
          btn.classList.add(ok ? "right" : "wrong");
          var why = prob.kind === "constant" ? "The gaps are all the same size, so the speed is constant." : prob.kind === "speeding" ? "The gaps get bigger, so the object covers more distance each interval: speeding up." : "The gaps get smaller, so the object covers less distance each interval: slowing down.";
          box.querySelector("#fb").innerHTML = '<div class="fb"><b>' + (ok ? "Correct." : "Not quite.") + "</b> " + why + '</div><p><button class="primary" id="nx">Next: find a speed</button></p>';
          box.querySelector("#nx").onclick = function () { step = 2; q2(); };
        };
        b.appendChild(btn);
      });
    }
    function q2() {
      ui('<p><b>Q2.</b> Find the speed in the <b>shaded gap</b> (gap #' + (prob.hi + 1) + '), in <b>m/s</b>.</p><p><input id="ans" type="number" step="any" style="font:inherit;padding:8px;width:130px" aria-label="Speed in m/s"> m/s <button class="primary" id="chk">Check</button></p><div id="hintbox" style="margin:8px 0"></div><div id="fb" aria-live="polite"></div>');
      hints(box, ["Read the shaded gap's number in cm (printed above it).", "G.O.T.: speed = Gap Over Time, so v = gap ÷ Δt, and Δt = " + prob.dt + " s.", "Convert first: " + prob.gaps[prob.hi] + " cm = " + r2(prob.gaps[prob.hi] / 100) + " m (slide the decimal 2 places left).", "Now divide: " + r2(prob.gaps[prob.hi] / 100) + " m ÷ " + prob.dt + " s."]);
      var inp = box.querySelector("#ans"); inp.focus();
      function check() {
        if (inp.value === "") return;
        score.tried++; var v = +inp.value, ok = Math.abs(v - prob.speed) <= Math.max(0.02 * prob.speed, 0.005); if (ok) score.right++;
        var g = prob.gaps[prob.hi];
        box.querySelector("#fb").innerHTML = '<div class="fb"><b>' + (ok ? "Correct." : "Not quite.") + "</b> Gap = " + g + " cm = " + r2(g / 100) + " m. Speed = " + r2(g / 100) + " m ÷ " + prob.dt + " s = <b>" + prob.speed + " m/s</b>." + (!ok && Math.abs(v - prob.speed * 100) < 0.05 * prob.speed * 100 ? " (Looks like you left it in cm/s. Divide by 100.)" : "") + '</div><p><button class="primary" id="nx">' + (prob.kind === "constant" ? "New diagram" : "Next: find acceleration") + "</button></p>";
        box.querySelector("#chk").disabled = true; inp.disabled = true;
        box.querySelector("#nx").onclick = prob.kind === "constant" ? fresh : function () { step = 3; q3(); };
      }
      box.querySelector("#chk").onclick = check; inp.onkeydown = function (e) { if (e.key === "Enter") check(); };
    }
    function q3() {
      ui('<p><b>Q3.</b> The gaps change by the same amount each interval, so the acceleration is constant. Find its <b>size</b> in m/s².</p><p class="muted">Use the hint button if you get stuck.</p><p><input id="ans" type="number" step="any" style="font:inherit;padding:8px;width:130px" aria-label="Acceleration in m/s squared"> m/s² <button class="primary" id="chk">Check</button></p><div id="hintbox" style="margin:8px 0"></div><div id="fb" aria-live="polite"></div>');
      var dgh = Math.abs(prob.gaps[1] - prob.gaps[0]);
      hints(box, ["\"Change in gap, over time squared.\" First find how much the gap changes each interval.", "The gap changes by " + dgh + " cm = " + r2(dgh / 100) + " m each interval.", "a = " + r2(dgh / 100) + " m ÷ (" + prob.dt + " s)². Square the time first: " + r2(prob.dt * prob.dt) + " s²."]);
      var inp = box.querySelector("#ans"); inp.focus();
      function check() {
        if (inp.value === "") return;
        score.tried++; var target = Math.abs(prob.acc), v = Math.abs(+inp.value), ok = Math.abs(v - target) <= Math.max(0.03 * target, 0.01); if (ok) score.right++;
        var dg = Math.abs(prob.gaps[1] - prob.gaps[0]);
        box.querySelector("#fb").innerHTML = '<div class="fb"><b>' + (ok ? "Correct." : "Not quite.") + "</b> a = " + r2(dg / 100) + " m ÷ (" + prob.dt + " s)² = <b>" + r2(target) + " m/s²</b>, " + (prob.kind === "speeding" ? "in the direction of motion (speeding up)." : "opposite the motion (slowing down).") + '</div><p><button class="primary" id="nx">New diagram</button></p>';
        box.querySelector("#chk").disabled = true; inp.disabled = true;
        box.querySelector("#nx").onclick = fresh;
      }
      box.querySelector("#chk").onclick = check; inp.onkeydown = function (e) { if (e.key === "Enter") check(); };
    }
    fresh();
  }
})();
