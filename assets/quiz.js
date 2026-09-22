/* Shared quiz engine for Physics 11 topic quizzes.
   Each quiz page defines a QUESTIONS array and calls initQuiz(QUESTIONS, storageKey). */

function initQuiz(QUESTIONS, storageKey) {
  const root = document.getElementById("quiz-root");
  const progressFill = document.getElementById("progress-bar-fill");
  const resultsEl = document.getElementById("results");
  let answered = 0;
  let correctCount = 0;
  const missed = [];

  QUESTIONS.forEach((q, qi) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const meta = document.createElement("div");
    meta.className = "question-meta";
    meta.textContent = `Question ${qi + 1} of ${QUESTIONS.length}`;
    card.appendChild(meta);

    if (q.misconception) {
      const tag = document.createElement("div");
      tag.className = "misconception-tag";
      tag.textContent = "⚠ Commonly missed: " + q.misconception;
      card.appendChild(tag);
    }

    const qText = document.createElement("div");
    qText.className = "question-text";
    qText.textContent = q.question;
    card.appendChild(qText);

    const explanation = document.createElement("div");
    explanation.className = "explanation";
    explanation.textContent = q.explanation;

    q.choices.forEach((choice, ci) => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.textContent = choice;
      btn.addEventListener("click", () => {
        const buttons = card.querySelectorAll(".choice");
        buttons.forEach((b) => (b.disabled = true));

        if (ci === q.answer) {
          btn.classList.add("correct");
          correctCount++;
        } else {
          btn.classList.add("incorrect");
          buttons[q.answer].classList.add("reveal-correct");
          missed.push({ question: q.question, misconception: q.misconception });
        }
        explanation.classList.add("show");
        answered++;
        progressFill.style.width = `${(answered / QUESTIONS.length) * 100}%`;
        if (answered === QUESTIONS.length) showResults();
      });
      card.appendChild(btn);
    });

    card.appendChild(explanation);
    root.appendChild(card);
  });

  function showResults() {
    resultsEl.classList.add("show");
    const pct = Math.round((correctCount / QUESTIONS.length) * 100);
    resultsEl.innerHTML = `
      <div id="score-big">${correctCount} / ${QUESTIONS.length}</div>
      <p>${pct}% correct</p>
      ${
        missed.length
          ? `<div class="missed-list"><strong>Review these concepts:</strong><ul>${missed
              .map((m) => `<li>${m.misconception || m.question}</li>`)
              .join("")}</ul></div>`
          : "<p>Great work — no missed concepts this round!</p>"
      }
      <button class="primary" onclick="location.reload()">Retry Quiz</button>
    `;
    resultsEl.scrollIntoView({ behavior: "smooth" });
    try {
      const history = JSON.parse(localStorage.getItem(storageKey) || "[]");
      history.push({ date: new Date().toISOString(), score: correctCount, total: QUESTIONS.length });
      localStorage.setItem(storageKey, JSON.stringify(history));
    } catch (e) {
      /* localStorage unavailable (private browsing, etc.) — skip saving history */
    }
  }
}
