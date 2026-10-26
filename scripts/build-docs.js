#!/usr/bin/env node
/* Generates the shareable Markdown (README outline, per-unit pages, assessment)
 * from site/js/data.js so the site and the printable docs never drift apart.
 * Usage: node scripts/build-docs.js */
const fs = require("fs");
const path = require("path");
const C = require("../site/js/data.js");

const root = path.join(__dirname, "..");
const unitsDir = path.join(root, "docs", "units");
fs.mkdirSync(unitsDir, { recursive: true });
const letters = "ABCD";
const cell = (s) => String(s).replace(/\|/g, "\\|").replace(/\n/g, " ");

function unitDoc(u, i) {
  const L = [];
  L.push(`# Unit ${i + 1}: ${u.title}`, "", `[← Course outline](../../README.md)`, "");
  L.push("## NGSS standards addressed", "");
  u.ngss.forEach((s) => L.push(`- **${s.code}** — ${s.text}`));
  L.push("", "## Learning objectives (student checklist)", "");
  u.objectives.forEach((o) => L.push(`- [ ] I can ${o.charAt(0).toLowerCase() + o.slice(1)}`));
  L.push("", "## Key concepts", "");
  u.concepts.forEach((c) => L.push(`- **${c.term}:** ${c.def}`));
  L.push("", "## Key equations", "");
  u.equations.forEach((e) => L.push(`- \`${e}\``));
  L.push("", "## Cornell notes", "", `**Topic:** ${u.cornell.topic}  `, "**Name:** ____________  **Date:** ____________", "");
  L.push("| Cue / question | Notes |", "|---|---|");
  u.cornell.rows.forEach((r) => L.push(`| ${cell(r.cue)} | ${cell(r.notes)} |`));
  L.push("", `**Summary:** ${u.cornell.summary}`, "");
  L.push("## Quiz: most-missed questions", "", "_Interactive version: open `site/index.html`. Answers are at the end of this section._", "");
  u.quiz.forEach((q, n) => {
    L.push(`${n + 1}. ${q.q}`);
    q.options.forEach((o, k) => L.push(`   - ${letters[k]}. ${o}`));
  });
  L.push("", "<details><summary>Answer key and explanations</summary>", "");
  u.quiz.forEach((q, n) => L.push(`${n + 1}. **${letters[q.answer]}** — ${q.why} _(Misconception: ${q.miss})_`));
  L.push("", "</details>", "");
  L.push("## Practice problems", "");
  u.practice.forEach((p, n) => L.push(`${n + 1}. ${p.q}`));
  L.push("", "<details><summary>Answers</summary>", "");
  u.practice.forEach((p, n) => L.push(`${n + 1}. ${p.a}`));
  L.push("", "</details>", "", "## Lab / investigation", "", u.lab, "");
  L.push("## Real-world applications", "");
  u.realWorld.forEach((r) => L.push(`- ${r}`));
  L.push("", "## Learning resources", "", "| Resource | Type | Use it for |", "|---|---|---|");
  u.resources.forEach((r) => L.push(`| [${cell(r.name)}](${r.url}) | ${r.type} | ${cell(r.note)} |`));
  L.push("", "## Assessment criteria", "");
  L.push(`- **Formative:** ${u.assessment.formative}`, `- **Summative:** ${u.assessment.summative}`,
    `- **Performance task / lab:** ${u.assessment.performance}`, `- **Mastery criterion:** ${u.assessment.mastery}`, "");
  return L.join("\n");
}

function assessmentDoc() {
  const L = ["# Assessment criteria & progress tracking", "", "[← Course outline](../README.md)", ""];
  L.push("## Proficiency rubric (every learning objective)", "", "| Level | Name | What it looks like |", "|---|---|---|");
  C.rubric.forEach((r) => L.push(`| ${r.level} | ${r.name} | ${cell(r.desc)} |`));
  L.push("", "## Suggested grade weighting", "", "| Category | Weight |", "|---|---|");
  C.weights.forEach((w) => L.push(`| ${w.category} | ${w.pct}% |`));
  L.push("", "## Student progress tracker", "", "| Unit | Objectives (✔ / total) | Quiz score | Lab/task level (1–4) | Unit test | Mastered? |", "|---|---|---|---|---|---|");
  C.units.forEach((u) => L.push(`| ${u.title} | __ / ${u.objectives.length} | __ / ${u.quiz.length} | __ | __ % | ☐ |`));
  L.push("", "**Mastery rule:** ≥ 80% on the unit quiz and Level 3 (Proficient) on the unit's performance task. Students who miss mastery retry only the missed quiz items after reviewing their Cornell notes.", "");
  L.push("## Standards map", "", "| Unit | NGSS performance expectations |", "|---|---|");
  C.units.forEach((u) => L.push(`| ${u.title} | ${u.ngss.filter((s) => /^HS-/.test(s.code)).map((s) => s.code).join(", ")} |`));
  L.push("", `Standards source: ${C.standardsUrl}`, "");
  return L.join("\n");
}

function readme() {
  const L = [`# ${C.title}`, "", `${C.grade}. A shareable learning project for students and instructors.`, ""];
  L.push("## Open the interactive site", "", "Open `site/index.html` in any browser (no install or server needed). It has Cornell notes with a self-test mode, interactive quizzes with instant feedback, practice problems with answers, resources, and a progress tracker saved in the browser.", "",
    "Or serve it locally: `npx serve site` (or `python3 -m http.server -d site`).", "");
  L.push("## Course roadmap (Semester 1)", "", "- [ ] " + C.units.map((u, i) => `[Unit ${i + 1}: ${u.title}](docs/units/${String(i + 1).padStart(2, "0")}-${u.id}.md)`).join("\n- [ ] "), "",
    "Semester 2 (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) follows the same structure; copy a unit object in `site/js/data.js` to add one.", "");
  C.units.forEach((u, i) => {
    L.push(`## Unit ${i + 1}: ${u.title}`, "");
    L.push(`**Standards:** ${u.ngss.filter((s) => /^HS-/.test(s.code)).map((s) => s.code).join(", ")}  `);
    L.push(`**Details:** [Full unit page](docs/units/${String(i + 1).padStart(2, "0")}-${u.id}.md)`, "", "**Learning objectives**", "");
    u.objectives.forEach((o) => L.push(`- [ ] ${o}`));
    L.push("", "**Key concepts:** " + u.concepts.map((c) => c.term).join("; "), "", "**Deliverables**", "",
      "- [ ] Cornell notes complete", `- [ ] Quiz of most-missed questions ≥ 80% (${u.quiz.length} questions)`, `- [ ] Practice problems (${u.practice.length})`,
      `- [ ] Lab / performance task: ${u.lab.split(":")[0]}`, "");
  });
  L.push("## Assessment", "", "See [docs/assessment.md](docs/assessment.md) for the 4-level rubric, grade weighting, standards map and the student progress tracker.", "",
    "## Project structure", "", "```", "site/            interactive web app (index.html, css/, js/)", "site/js/data.js  all course content (single source of truth)",
    "docs/            generated printable Markdown (units + assessment)", "scripts/build-docs.js  regenerates README and docs from data.js", "```", "",
    "Regenerate docs after editing content: `node scripts/build-docs.js`.", "",
    `## Standards\n\nGoals come from the California NGSS Physics & Earth Science course model: ${C.standardsUrl}. Kinematics supports HS-PS2-1 (it is not its own performance expectation). Please verify performance-expectation wording against the CDE site before publishing. External resource links should be spot-checked each term.`, "");
  return L.join("\n");
}

C.units.forEach((u, i) => fs.writeFileSync(path.join(unitsDir, `${String(i + 1).padStart(2, "0")}-${u.id}.md`), unitDoc(u, i)));
fs.writeFileSync(path.join(root, "docs", "assessment.md"), assessmentDoc());
fs.writeFileSync(path.join(root, "README.md"), readme());
console.log("Docs generated.");
