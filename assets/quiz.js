// Shared renderer for the "most-often-missed" unit quizzes.
// Each quiz.html defines QUIZ_TITLE, QUIZ_SUBTITLE, and QUIZ_DATA, then calls renderQuiz().
function renderQuiz(containerId, questions) {
  const container = document.getElementById(containerId);
  let score = 0;
  const answered = new Array(questions.length).fill(false);

  const scoreBar = document.createElement('div');
  scoreBar.className = 'quiz-score';
  scoreBar.textContent = `Score: 0 / ${questions.length}`;
  container.appendChild(scoreBar);

  questions.forEach((q, qi) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-question';

    if (q.tag) {
      const tag = document.createElement('span');
      tag.className = 'quiz-tag';
      tag.textContent = q.tag;
      qDiv.appendChild(tag);
    }

    const qTitle = document.createElement('p');
    qTitle.className = 'quiz-question-text';
    qTitle.innerHTML = `<strong>Q${qi + 1}.</strong> ${q.question}`;
    qDiv.appendChild(qTitle);

    const optList = document.createElement('div');
    optList.className = 'quiz-options';

    const explain = document.createElement('div');
    explain.className = 'quiz-explanation';
    explain.hidden = true;

    q.options.forEach((opt, oi) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        if (answered[qi]) return;
        answered[qi] = true;

        const buttons = optList.querySelectorAll('button');
        buttons.forEach((b, bi) => {
          b.disabled = true;
          if (bi === q.correct) b.classList.add('correct');
        });

        if (oi === q.correct) {
          score++;
        } else {
          btn.classList.add('incorrect');
        }

        scoreBar.textContent = `Score: ${score} / ${questions.length}`;
        explain.hidden = false;
        explain.innerHTML = (oi === q.correct ? '✅ Correct. ' : '❌ Not quite. ') + q.explanation;
      });
      optList.appendChild(btn);
    });

    qDiv.appendChild(optList);
    qDiv.appendChild(explain);
    container.appendChild(qDiv);
  });

  const resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.className = 'quiz-reset';
  resetBtn.textContent = 'Reset Quiz';
  resetBtn.addEventListener('click', () => location.reload());
  container.appendChild(resetBtn);
}
