(function () {
  var app = document.getElementById('app');
  var KEY = 'physics-quiz-best-' + QUIZ.id;
  var order, pos, right, missed, answered;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function best() { try { return Number(localStorage.getItem(KEY)) || 0; } catch (e) { return 0; } }
  function saveBest(p) { try { if (p > best()) localStorage.setItem(KEY, String(p)); } catch (e) { /* storage unavailable */ } }

  function start(indices) {
    order = shuffle(indices.slice());
    pos = 0; right = 0; missed = [];
    show();
  }

  function show() {
    answered = false;
    var qi = order[pos], q = QUIZ.questions[qi];
    app.innerHTML = '';
    var meta = el('div', 'meta');
    meta.appendChild(el('span', '', 'Question ' + (pos + 1) + ' of ' + order.length));
    meta.appendChild(el('span', '', 'Correct so far: ' + right));
    app.appendChild(meta);
    var bar = el('div', 'bar'), fill = el('div');
    fill.style.width = (100 * pos / order.length) + '%';
    bar.appendChild(fill); app.appendChild(bar);

    var card = el('section', 'q');
    card.appendChild(el('p', 'stem', q.q));
    var list = el('div', 'choices');
    var opts = shuffle(q.c.map(function (text, i) { return { text: text, ok: i === q.a }; }));
    var fb = el('div', 'fb'); fb.hidden = true; fb.setAttribute('aria-live', 'polite');
    opts.forEach(function (o, i) {
      var b = el('button', 'choice');
      b.type = 'button';
      b.appendChild(el('span', 'tag', String.fromCharCode(65 + i) + '.'));
      b.appendChild(document.createTextNode(o.text));
      b.addEventListener('click', function () {
        if (answered) return;
        answered = true;
        Array.prototype.forEach.call(list.children, function (c, k) {
          c.disabled = true;
          if (opts[k].ok) c.classList.add('right');
        });
        if (o.ok) { right++; } else { b.classList.add('wrong'); missed.push(qi); }
        fb.hidden = false;
        fb.appendChild(el('p', 'verdict ' + (o.ok ? 'ok' : 'no'), o.ok ? 'Correct.' : 'Not quite.'));
        fb.appendChild(el('p', '', q.why));
        var trap = el('p', 'trap');
        trap.appendChild(el('strong', '', 'Common mistake: '));
        trap.appendChild(document.createTextNode(q.trap));
        fb.appendChild(trap);
        var next = el('button', 'btn', pos + 1 < order.length ? 'Next question' : 'See results');
        next.type = 'button';
        next.addEventListener('click', function () { pos++; if (pos < order.length) show(); else results(); });
        var act = el('div', 'actions'); act.appendChild(next); fb.appendChild(act);
        next.focus();
      });
      list.appendChild(b);
    });
    card.appendChild(list); card.appendChild(fb); app.appendChild(card);
  }

  function results() {
    var pct = Math.round(100 * right / order.length);
    var full = order.length === QUIZ.questions.length;
    if (full) saveBest(pct);
    app.innerHTML = '';
    var card = el('section', 'q');
    card.appendChild(el('h2', '', full ? 'Your result' : 'Retry result'));
    card.appendChild(el('p', 'score', right + ' / ' + order.length + ' (' + pct + '%)'));
    var msg = pct >= 80 ? 'At or above the 80% goal. Explain each answer aloud to make it stick.'
      : pct >= 60 ? 'Getting there. Reread the notes sections for the questions below, then retry them.'
      : 'These ideas trip up most students at first. Go back through the Cornell notes cue questions, then retry.';
    card.appendChild(el('p', '', msg));
    if (full && best()) card.appendChild(el('p', 'meta', 'Best full-quiz score on this device: ' + best() + '%'));
    if (missed.length) {
      card.appendChild(el('h2', '', 'Review these'));
      var ul = el('ol', 'missed');
      missed.forEach(function (qi) {
        var q = QUIZ.questions[qi], li = el('li');
        li.appendChild(el('strong', '', q.q));
        li.appendChild(el('div', '', 'Answer: ' + q.c[q.a]));
        li.appendChild(el('div', 'meta', q.why));
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }
    var act = el('div', 'actions');
    if (missed.length) {
      var r = el('button', 'btn', 'Retry missed questions (' + missed.length + ')');
      r.type = 'button'; var m = missed.slice();
      r.addEventListener('click', function () { start(m); });
      act.appendChild(r);
    }
    var again = el('button', 'btn ghost', 'Start over');
    again.type = 'button';
    again.addEventListener('click', function () { start(QUIZ.questions.map(function (_, i) { return i; })); });
    act.appendChild(again);
    card.appendChild(act); app.appendChild(card);
  }

  start(QUIZ.questions.map(function (_, i) { return i; }));
})();
