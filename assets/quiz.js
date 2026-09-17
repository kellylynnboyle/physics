/*
  Generic self-grading quiz engine.
  Each topic's quiz.html loads a quiz-data.js first, which defines:
    QUIZ_TITLE   (string)
    QUIZ_INTRO   (string)
    QUIZ_DATA    (array of { question, choices, correctIndex, explanation, commonMistake })
  Then loads this file, which renders into <div id="quiz-root"></div>.
*/
(function () {
  const root = document.getElementById("quiz-root");
  if (!root || typeof QUIZ_DATA === "undefined") return;

  const state = {
    current: 0,
    answered: new Array(QUIZ_DATA.length).fill(null),
    correctCount: 0,
  };

  function renderHeader() {
    const header = document.createElement("div");
    header.className = "quiz-header";
    header.innerHTML = `
      <a class="back-link" href="./resources.md">&larr; Back to topic resources</a>
      <h1>${QUIZ_TITLE}</h1>
      <p>${QUIZ_INTRO}</p>
      <div id="quiz-progress"><div id="quiz-progress-bar"></div></div>
    `;
    root.appendChild(header);
  }

  function updateProgress() {
    const answeredCount = state.answered.filter((a) => a !== null).length;
    const pct = Math.round((answeredCount / QUIZ_DATA.length) * 100);
    const bar = document.getElementById("quiz-progress-bar");
    if (bar) bar.style.width = pct + "%";
  }

  function renderQuestion(index) {
    const q = QUIZ_DATA[index];
    const card = document.createElement("div");
    card.className = "quiz-card";
    card.id = "q-" + index;

    const meta = document.createElement("div");
    meta.className = "q-meta";
    meta.textContent = `Question ${index + 1} of ${QUIZ_DATA.length}`;
    card.appendChild(meta);

    const qText = document.createElement("p");
    qText.className = "q-text";
    qText.textContent = q.question;
    card.appendChild(qText);

    const choiceButtons = [];
    q.choices.forEach((choiceText, i) => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.textContent = choiceText;
      btn.addEventListener("click", () => handleAnswer(index, i, choiceButtons, card));
      card.appendChild(btn);
      choiceButtons.push(btn);
    });

    const feedback = document.createElement("div");
    feedback.className = "feedback";
    feedback.id = "feedback-" + index;
    card.appendChild(feedback);

    root.appendChild(card);
  }

  function handleAnswer(index, chosenIndex, buttons, card) {
    if (state.answered[index] !== null) return;
    const q = QUIZ_DATA[index];
    const isCorrect = chosenIndex === q.correctIndex;
    state.answered[index] = isCorrect;
    if (isCorrect) state.correctCount += 1;

    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correctIndex) btn.classList.add("correct");
      else if (i === chosenIndex) btn.classList.add("incorrect");
    });

    const feedback = document.getElementById("feedback-" + index);
    feedback.classList.add("show", isCorrect ? "right" : "wrong");
    feedback.innerHTML = `
      <strong>${isCorrect ? "Correct." : "Not quite."}</strong> ${q.explanation}
      ${q.commonMistake ? `<span class="why-missed"><b>Why this one trips people up:</b> ${q.commonMistake}</span>` : ""}
    `;

    updateProgress();

    if (state.answered.every((a) => a !== null)) {
      renderSummary();
    }
  }

  function renderSummary() {
    const existing = document.getElementById("quiz-summary");
    if (existing) existing.remove();

    const summary = document.createElement("div");
    summary.className = "quiz-summary";
    summary.id = "quiz-summary";
    const pct = Math.round((state.correctCount / QUIZ_DATA.length) * 100);
    let note = "Solid — you know this topic well. Revisit any missed questions above.";
    if (pct < 50) note = "This topic needs another pass. Re-read the Cornell notes, then retake this quiz.";
    else if (pct < 80) note = "Good progress. Review the explanations on missed questions before your next practice set.";

    summary.innerHTML = `
      <h2>Quiz complete</h2>
      <div class="score">${state.correctCount} / ${QUIZ_DATA.length} (${pct}%)</div>
      <div class="score-note">${note}</div>
      <button class="primary" id="retake-btn">Retake Quiz</button>
    `;
    root.appendChild(summary);

    document.getElementById("retake-btn").addEventListener("click", () => {
      window.location.reload();
    });
  }

  renderHeader();
  QUIZ_DATA.forEach((_, i) => renderQuestion(i));
  updateProgress();
})();
