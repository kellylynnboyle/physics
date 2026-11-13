// Builds quizzes/answer-key.md from quizzes/questions.js.
// Run after editing the question bank:  node tools/build-answer-key.js

const fs = require("fs");
const path = require("path");
const QUIZ = require("../quizzes/questions.js");

const lines = [
  "# Most-Missed Quizzes: Answer Key",
  "",
  "*Generated from `questions.js` by `tools/build-answer-key.js`. Edit the question bank, not this file.*",
  "",
  "For instructors. Each question targets one common misconception. The quiz shuffles question and answer order on every attempt, so the numbers below are for reference only.",
  ""
];

QUIZ.forEach((unit, u) => {
  lines.push(`## Unit ${u + 1}: ${unit.title}`, "");
  unit.questions.forEach((q, i) => {
    lines.push(`**Q${i + 1}. ${q.q}** (objective ${q.obj})`, "");
    q.choices.forEach((choice, c) => {
      lines.push(`- ${c === q.answer ? "**" + choice + "** ✓" : choice}`);
    });
    lines.push("", `*Misconception:* ${q.trap}`, "", `*Explanation:* ${q.why}`, "");
  });
});

const out = path.join(__dirname, "..", "quizzes", "answer-key.md");
fs.writeFileSync(out, lines.join("\n"));
console.log(`Wrote ${out}`);
