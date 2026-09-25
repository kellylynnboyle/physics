// Generic renderer for the unit quizzes. Each quiz.html sets window.QUIZ_DATA
// before loading this file: { title, unit, storageKey, questions: [{q, choices, answer, explain, missRate}] }
(function () {
  const data = window.QUIZ_DATA;
  if (!data) return;

  const root = document.getElementById("quiz-root");
  const scoreBar = document.getElementById("score-bar");

  function bestScore() {
    try {
      const raw = localStorage.getItem(data.storageKey);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveBest(score, total) {
    try {
      const prev = bestScore();
      if (!prev || score > prev.score) {
        localStorage.setItem(data.storageKey, JSON.stringify({ score, total }));
      }
    } catch (e) {
      /* private browsing / storage disabled: skip silently */
    }
  }

  function renderScoreBar() {
    const prev = bestScore();
    scoreBar.innerHTML =
      '<div><strong>' + data.questions.length + " questions</strong> &middot; most commonly missed on this topic</div>" +
      '<div class="best">' + (prev ? "Best score on this device: " + prev.score + "/" + prev.total : "No attempts yet on this device") + "</div>";
  }

  function renderQuestions() {
    root.innerHTML = "";
    data.questions.forEach((item, qi) => {
      const card = document.createElement("div");
      card.className = "question-card";
      card.dataset.index = qi;

      const num = document.createElement("div");
      num.className = "qnum";
      num.textContent = "Question " + (qi + 1) + " of " + data.questions.length;
      card.appendChild(num);

      const qtext = document.createElement("div");
      qtext.className = "qtext";
      qtext.textContent = item.q;
      card.appendChild(qtext);

      item.choices.forEach((choiceText, ci) => {
        const label = document.createElement("label");
        label.className = "choice";
        label.dataset.choice = ci;

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "q" + qi;
        input.value = ci;

        const span = document.createElement("span");
        span.textContent = choiceText;

        label.appendChild(input);
        label.appendChild(span);
        card.appendChild(label);
      });

      const explain = document.createElement("div");
      explain.className = "explain";
      explain.innerHTML = "<strong>Why:</strong> " + item.explain;
      card.appendChild(explain);

      if (item.missRate) {
        const miss = document.createElement("div");
        miss.className = "miss-rate";
        miss.textContent = item.missRate;
        card.appendChild(miss);
      }

      root.appendChild(card);
    });
  }

  function checkAnswers() {
    let score = 0;
    data.questions.forEach((item, qi) => {
      const card = root.querySelector('.question-card[data-index="' + qi + '"]');
      const selected = card.querySelector('input[name="q' + qi + '"]:checked');
      const explain = card.querySelector(".explain");
      explain.classList.add("show");

      card.querySelectorAll(".choice").forEach((label) => {
        const ci = Number(label.dataset.choice);
        label.querySelectorAll("input")[0].disabled = true;
        if (ci === item.answer) label.classList.add("correct-answer");
      });

      if (selected) {
        const chosenIndex = Number(selected.value);
        const isCorrect = chosenIndex === item.answer;
        if (isCorrect) {
          score++;
        } else {
          card.querySelector('.choice[data-choice="' + chosenIndex + '"]').classList.add("wrong-answer");
        }
        const num = card.querySelector(".qnum");
        const icon = document.createElement("span");
        icon.className = "result-icon " + (isCorrect ? "correct" : "incorrect");
        icon.textContent = isCorrect ? "✓ Correct" : "✗ Missed it";
        num.appendChild(icon);
      } else {
        const num = card.querySelector(".qnum");
        const icon = document.createElement("span");
        icon.className = "result-icon incorrect";
        icon.textContent = "(no answer selected)";
        num.appendChild(icon);
      }
    });

    document.getElementById("check-btn").disabled = true;
    saveBest(score, data.questions.length);

    const prev = bestScore();
    scoreBar.innerHTML =
      '<div><strong>Score: ' + score + " / " + data.questions.length + "</strong></div>" +
      '<div class="best">' + (prev ? "Best score on this device: " + prev.score + "/" + prev.total : "") + "</div>";
  }

  function reset() {
    renderScoreBar();
    renderQuestions();
    document.getElementById("check-btn").disabled = false;
  }

  document.getElementById("quiz-title").textContent = data.title;
  document.getElementById("quiz-unit").textContent = data.unit;
  document.getElementById("check-btn").addEventListener("click", checkAnswers);
  document.getElementById("reset-btn").addEventListener("click", reset);

  reset();
})();
