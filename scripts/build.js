#!/usr/bin/env node
// Generates topics/*/*.md and site/data.js from content/*.js (single source of truth).
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const order = ["kinematics", "projectile", "newton", "momentum", "energy"];
const topics = order.map((id) => require(path.join(root, "content", id)));
const letters = ["A", "B", "C", "D"];

function validate(t) {
  const errs = [];
  t.quiz.forEach((q, i) => {
    if (q.options.length !== 4) errs.push(`${t.id} Q${i + 1}: needs 4 options`);
    if (!(q.answer >= 0 && q.answer < q.options.length)) errs.push(`${t.id} Q${i + 1}: bad answer index`);
    if (!q.explain || !q.misconception) errs.push(`${t.id} Q${i + 1}: missing explain/misconception`);
  });
  if (errs.length) { console.error(errs.join("\n")); process.exit(1); }
}

function write(rel, text) {
  const p = path.join(root, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, text.replace(/\n{3,}/g, "\n\n").trimEnd() + "\n");
}

const esc = (s) => s.replace(/\|/g, "\\|");

function topicReadme(t) {
  return `# ${t.number}. ${t.title}
*${t.tagline}*

**Big idea:** ${t.bigIdea}

**Quick links:** [Cornell notes](cornell-notes.md) · [Quiz + answer key](quiz.md) · [Interactive quiz](../../site/index.html#${t.id})

## NGSS alignment (California)
${t.standards.map((s) => `- **${s.code}** — ${s.note}`).join("\n")}

- Science & Engineering Practices: ${t.practices.join("; ")}
- Crosscutting Concepts: ${t.crosscutting.join("; ")}

## Key concepts to master
${t.concepts.map((c) => `- [ ] **${c.term}.** ${c.def}`).join("\n")}

## Learning objectives & assessment criteria
| ID | Objective | Evidence of mastery |
|----|-----------|---------------------|
${t.objectives.map((o) => `| ${o.id} | ${esc(o.text)} | ${esc(o.criteria)} |`).join("\n")}

Track progress with the checklist in [docs/assessment-and-tracking.md](../../docs/assessment-and-tracking.md).

## Practice problems
Try each problem before opening the answer.

${t.practice.map((p, i) => `${i + 1}. ${p.problem}\n   <details><summary>Answer</summary>\n\n   ${p.answer}\n\n   </details>`).join("\n\n")}

## Learning resources
| Resource | Type | How to use it |
|----------|------|---------------|
${t.resources.map((r) => `| ${r.url ? `[${esc(r.name)}](${r.url})` : esc(r.name)} | ${r.type} | ${esc(r.use)} |`).join("\n")}

## Real-world applications
${t.applications.map((a) => `- ${a}`).join("\n")}

## Checklist
- [ ] Completed Cornell notes (cues, notes, summary)
- [ ] Took the interactive quiz and reviewed every missed question
- [ ] Solved all practice problems
- [ ] Completed the lab or simulation
- [ ] Self-assessed every objective (${t.objectives.map((o) => o.id).join(", ")})
`;
}

function cornell(t) {
  const c = t.cornell;
  return `# Cornell Notes: ${c.topic}

**Name:** ______________  **Date:** ______________  **Period:** ______

**Essential question:** ${t.bigIdea}
**NGSS:** ${t.standards.map((s) => s.code).join(", ")}

| Cues / Questions | Notes |
|------------------|-------|
${c.cues.map((r) => `| ${esc(r.cue)} | ${esc(r.notes)} |`).join("\n")}

## Summary
${c.summary}

## Self-quiz (cover the right column and answer each cue from memory)
${c.cues.map((r, i) => `${i + 1}. ${r.cue}`).join("\n")}

_Student's own summary (2–3 sentences in your own words):_

&nbsp;

&nbsp;
`;
}

function quizMd(t) {
  return `# ${t.title}: Most-Missed Questions
Take the [interactive version](../../site/index.html#${t.id}) for instant feedback. The "Misconception" line names the trap each question targets.

${t.quiz.map((q, i) => `### ${i + 1}. ${q.q}\n${q.options.map((o, j) => `- ${letters[j]}. ${o}`).join("\n")}`).join("\n\n")}

---

## Answer key
${t.quiz.map((q, i) => `${i + 1}. **${letters[q.answer]}** — *Misconception: ${q.misconception}.* ${q.explain}`).join("\n")}
`;
}

topics.forEach((t) => {
  validate(t);
  const dir = `topics/${String(t.number).padStart(2, "0")}-${t.id}`;
  write(`${dir}/README.md`, topicReadme(t));
  write(`${dir}/cornell-notes.md`, cornell(t));
  write(`${dir}/quiz.md`, quizMd(t));
});

fs.writeFileSync(path.join(root, "site", "data.js"), "window.PHYSICS_DATA = " + JSON.stringify(topics, null, 1) + ";\n");
console.log(`Built ${topics.length} topics, ${topics.reduce((n, t) => n + t.quiz.length, 0)} quiz questions.`);
