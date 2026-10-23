// Generates README.md (shareable outline + checklist) from site/js/data.js.  Usage: node scripts/build-readme.js
const fs = require("fs");
const path = require("path");
const ctx = { window: {} };
new Function("window", fs.readFileSync(path.join(__dirname, "../site/js/data.js"), "utf8"))(ctx.window);
const D = ctx.window.PHYSICS_DATA;
const L = [];
L.push(`# ${D.course.title}`, "", `${D.course.grade}`, "",
  "A shareable learning project for students and instructors. Open `site/index.html` in a browser (no install or server needed) for the interactive version: Cornell notes, quizzes, progress tracking. This README is the plain-text outline and checklist.", "",
  `Learning goals come from the [California NGSS standards](${D.course.standardsUrl}) (Physics & Earth Science course model).`, "",
  "## Semester 1 standards", "");
D.standards.forEach((s) => L.push(`- **${s.id}** — ${s.text}`));
L.push("", "## Units at a glance", "", "| Unit | Weeks | NGSS |", "|---|---|---|");
D.topics.forEach((t) => L.push(`| [${t.name}](#${t.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}) | ${t.weeks} | ${t.standards.join(", ")} |`));
D.topics.forEach((t, n) => {
  L.push("", `## ${t.name}`, "", `*${t.weeks} · ${t.standards.join(", ")}* — ${t.summary}`, "", `> ${t.note}`, "", "### Learning objectives (student checklist)", "");
  t.objectives.forEach((o) => L.push(`- [ ] I can ${o.charAt(0).toLowerCase() + o.slice(1)}`));
  L.push("", "### Key concepts", "");
  t.concepts.forEach((c) => L.push(`- **${c.term}:** ${c.def}`));
  L.push("", "### Cornell notes", "", `**Topic:** ${t.cornell.topic}`, "", "| Cues / Questions | Notes |", "|---|---|");
  t.cornell.cues.forEach((c, i) => L.push(`| ${c} | ${t.cornell.notes[i]} |`));
  L.push("", `**Summary:** ${t.cornell.summary}`, "", `### Most-missed-questions quiz (${t.quiz.length} items)`, "", "Take it interactively in the site. Misconceptions it targets:", "");
  t.quiz.forEach((q) => L.push(`- ${q.miss}`));
  L.push("", "### Practice problems", "");
  t.practice.forEach((p, i) => L.push(`${i + 1}. ${p.p}`));
  L.push("", "<details><summary>Answers</summary>", "");
  t.practice.forEach((p, i) => L.push(`${i + 1}. ${p.a}`));
  L.push("", "</details>", "", "### Resources", "");
  t.resources.forEach((r) => L.push(`- [${r.name}](${r.url}) — ${r.type}: ${r.use}`));
  L.push("", "### Real-world applications", "");
  t.realWorld.forEach((r) => L.push(`- ${r}`));
  L.push("", `### Lab / project`, "", t.lab, "", "### Assessment criteria", "");
  t.assess.forEach((a) => L.push(`- [ ] ${a}`));
});
L.push("", "## Scoring rubric (performance tasks)", "", `| Criterion | ${D.rubric.levels.join(" | ")} |`, `|---|${D.rubric.levels.map(() => "---").join("|")}|`);
D.rubric.criteria.forEach((c) => L.push(`| ${c.name} | ${c.d.join(" | ")} |`));
L.push("", `**${D.rubric.mastery}**`, "",
  "## Instructor notes", "",
  "- All content lives in `site/js/data.js`. Edit it, then run `node scripts/build-readme.js` to refresh this README.",
  "- Student progress is saved only in the student's own browser (localStorage); nothing is sent anywhere.",
  "- Quiz items target common misconceptions; review class results to choose what to reteach.",
  "- Semester 2 (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) can be added as new topic entries in `data.js`.",
  "- Resource links point to site home pages; confirm current availability before assigning.", "");
fs.writeFileSync(path.join(__dirname, "../README.md"), L.join("\n"));
