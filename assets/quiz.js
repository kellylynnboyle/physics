/**
 * Reusable "most-missed questions" quiz engine.
 * Usage (see any unit's quiz.html):
 *   renderQuiz('quiz-root', QUESTIONS, { title, subtitle, backHref, backLabel });
 * QUESTIONS = [{ q, missed, choices: [...], answer: <index>, explain }]
 */
function renderQuiz(rootId, questions, opts) {
  opts = opts || {};
  var root = document.getElementById(rootId);
  var state = questions.map(function () { return null; });

  function scoreText() {
    var answered = state.filter(function (s) { return s !== null; }).length;
    var correct = state.reduce(function (n, s, i) {
      return n + (s === questions[i].answer ? 1 : 0);
    }, 0);
    return { answered: answered, correct: correct };
  }

  function renderProgress() {
    var s = scoreText();
    var pct = Math.round((s.answered / questions.length) * 100);
    return (
      '<div class="quiz-progress">' +
        '<span>' + s.answered + ' / ' + questions.length + ' answered</span>' +
        '<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:' + pct + '%"></div></div>' +
      '</div>'
    );
  }

  function selectChoice(qIndex, cIndex) {
    if (state[qIndex] !== null) return;
    state[qIndex] = cIndex;
    render();
    if (state.every(function (s) { return s !== null; })) {
      setTimeout(showResults, 150);
    }
  }

  function retry() {
    state = questions.map(function () { return null; });
    render();
    window.scrollTo({ top: root.offsetTop, behavior: 'smooth' });
  }

  function showResults() {
    var s = scoreText();
    var pct = Math.round((s.correct / questions.length) * 100);
    var msg;
    if (pct === 100) msg = "Perfect score. This unit's trouble spots are handled.";
    else if (pct >= 80) msg = 'Strong grasp — review the missed items below.';
    else if (pct >= 50) msg = 'Getting there — revisit the Cornell notes for the missed concepts.';
    else msg = "This is exactly the kind of question that trips people up — re-read the unit notes and retry.";
    var el = document.getElementById(rootId + '-results');
    if (el) {
      el.classList.add('show');
      el.innerHTML =
        '<h2>Results</h2>' +
        '<div class="quiz-score">' + s.correct + ' / ' + questions.length + '</div>' +
        '<p>' + msg + '</p>' +
        '<button class="quiz-retry" onclick="__quizRetry_' + rootId + '()">Retry Quiz</button>';
    }
  }

  window['__quizRetry_' + rootId] = retry;
  window['__quizSelect_' + rootId] = selectChoice;

  function render() {
    var html = '';
    html += '<div class="quiz-header"><h1>' + (opts.title || 'Quiz') + '</h1>';
    if (opts.subtitle) html += '<p>' + opts.subtitle + '</p>';
    html += '</div>';
    html += renderProgress();

    questions.forEach(function (item, qi) {
      var picked = state[qi];
      html += '<div class="quiz-card">';
      if (item.missed) html += '<span class="quiz-missed-tag">Frequently missed</span>';
      html += '<p class="quiz-question">' + (qi + 1) + '. ' + item.q + '</p>';
      item.choices.forEach(function (choice, ci) {
        var cls = 'quiz-choice';
        if (picked !== null) {
          if (ci === item.answer) cls += ' correct';
          else if (ci === picked) cls += ' incorrect';
        }
        var disabled = picked !== null ? 'disabled' : '';
        html +=
          '<button class="' + cls + '" ' + disabled +
          ' onclick="__quizSelect_' + rootId + '(' + qi + ',' + ci + ')">' +
          choice + '</button>';
      });
      html += '<div class="quiz-explain' + (picked !== null ? ' show' : '') + '">' +
        '<strong>' + (picked === item.answer ? 'Correct.' : 'Not quite.') + '</strong>' +
        item.explain +
        '</div>';
      html += '</div>';
    });

    html += '<div class="quiz-results" id="' + rootId + '-results"></div>';
    if (opts.backHref) {
      html += '<a class="quiz-footer-link" href="' + opts.backHref + '">&larr; ' + (opts.backLabel || 'Back to unit notes') + '</a>';
    }
    root.innerHTML = html;
    if (state.every(function (s) { return s !== null; })) showResults();
  }

  document.body.classList.add('quiz-body');
  render();
}
