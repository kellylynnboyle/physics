// Shared self-grading quiz engine used by every topic's quiz.html.
// Each topic supplies a `questions` array of:
//   { question, choices: [...], correct: <index>, misconception, explanation }
function PhysicsQuiz(containerId, title, subtitle, questions) {
  var container = document.getElementById(containerId);
  var answered = new Array(questions.length).fill(null);

  function render() {
    container.innerHTML = "";

    var header = document.createElement("div");
    header.className = "quiz-header";
    header.innerHTML =
      "<h2>" + title + "</h2><p class=\"quiz-sub\">" + subtitle + "</p>";
    container.appendChild(header);

    questions.forEach(function (q, i) {
      container.appendChild(renderQuestion(q, i));
    });

    var submitBtn = document.createElement("button");
    submitBtn.className = "quiz-submit";
    submitBtn.type = "button";
    submitBtn.textContent = "Check All Answers";
    submitBtn.addEventListener("click", submitQuiz);
    container.appendChild(submitBtn);

    var resetBtn = document.createElement("button");
    resetBtn.className = "quiz-reset";
    resetBtn.type = "button";
    resetBtn.textContent = "Retake Quiz";
    resetBtn.addEventListener("click", function () {
      answered = new Array(questions.length).fill(null);
      render();
    });
    container.appendChild(resetBtn);

    var scoreDiv = document.createElement("div");
    scoreDiv.id = "quiz-score";
    scoreDiv.className = "quiz-score";
    container.appendChild(scoreDiv);
  }

  function renderQuestion(q, i) {
    var div = document.createElement("div");
    div.className = "quiz-question";
    div.id = "q-" + i;

    var html =
      '<p class="q-text"><span class="q-num">' +
      (i + 1) +
      '.</span> ' +
      q.question +
      '</p><div class="q-choices">';
    q.choices.forEach(function (c, ci) {
      html +=
        '<label class="q-choice"><input type="radio" name="q' +
        i +
        '" value="' +
        ci +
        '"' +
        (answered[i] === ci ? " checked" : "") +
        '> <span>' +
        c +
        "</span></label>";
    });
    html += '</div><div class="q-feedback" id="fb-' + i + '"></div>';
    div.innerHTML = html;

    div.querySelectorAll("input").forEach(function (input) {
      input.addEventListener("change", function (e) {
        answered[i] = parseInt(e.target.value, 10);
      });
    });

    return div;
  }

  function submitQuiz() {
    var score = 0;
    questions.forEach(function (q, i) {
      var fb = document.getElementById("fb-" + i);
      var qDiv = document.getElementById("q-" + i);
      var labels = qDiv.querySelectorAll(".q-choice");
      labels.forEach(function (label, ci) {
        label.classList.remove("correct", "incorrect");
        if (ci === q.correct) label.classList.add("correct");
        else if (ci === answered[i]) label.classList.add("incorrect");
      });

      if (answered[i] === q.correct) {
        score++;
        fb.innerHTML =
          '<p class="fb-correct">Correct. ' + q.explanation + "</p>";
      } else if (answered[i] === null) {
        fb.innerHTML =
          '<p class="fb-missing">Not answered. Correct answer: <strong>' +
          q.choices[q.correct] +
          "</strong>. " +
          q.explanation +
          "</p>";
      } else {
        fb.innerHTML =
          '<p class="fb-incorrect"><strong>Common miss:</strong> ' +
          (q.misconception || "") +
          " " +
          q.explanation +
          "</p>";
      }
    });

    var scoreDiv = document.getElementById("quiz-score");
    var pct = Math.round((100 * score) / questions.length);
    scoreDiv.textContent =
      "Score: " + score + " / " + questions.length + " (" + pct + "%)";
    scoreDiv.className = "quiz-score show";
    scoreDiv.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  render();
}
