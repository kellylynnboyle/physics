#!/usr/bin/env node
/**
 * Builds every shareable file from the unit content in /content.
 *
 *   node tools/build.js
 *
 * Writes: README.md, PROGRESS.md, ASSESSMENT.md,
 *         units/<unit>/README.md, cornell-notes.md, cornell-notes-<unit>.docx,
 *         quizzes/index.html, quizzes/answer-key.md
 * Edit the files in /content (and tools/quiz-template.html), then rebuild.
 * Diagrams come from tools/diagrams.py.
 */
const fs = require("fs");
const path = require("path");
const { buildDocx } = require("./docx-notes");

const ROOT = path.join(__dirname, "..");
const units = fs.readdirSync(path.join(ROOT, "content")).filter((f) => f.endsWith(".js")).sort()
  .map((f) => require(path.join(ROOT, "content", f)));

const IXL_CHECKED = "November 27, 2026";
const MASTERY = 80;
const write = (rel, text) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, text);
  console.log("wrote", rel);
};
const cell = (s) => String(s).replace(/\|/g, "\\|");
const slug = (u) => `cornell-notes-${u.id}.docx`;
const letter = (i) => "ABCDEFGH"[i];

/** Every IXL skill in a unit, labs first, without repeats. */
function ixlPlan(u) {
  const seen = new Set();
  const rows = [];
  const ordered = [...u.sections.filter((s) => /^Labs/.test(s.title)), ...u.sections.filter((s) => !/^Labs/.test(s.title))];
  for (const s of ordered) {
    for (const [code, name] of s.ixl || []) {
      const key = code + name;
      if (seen.has(key)) continue;
      seen.add(key);
      rows.push({ code, name, section: u.sections.indexOf(s) + 1 });
    }
  }
  return rows;
}

// ───────────────────────── unit guide ─────────────────────────
function unitGuide(u) {
  const L = [];
  L.push(`# Unit ${u.num}: ${u.title}`, "");
  L.push(`**Suggested pacing:** ${u.weeks} of semester 1  `);
  L.push(`**Essential question:** ${u.essentialQuestion}`, "");
  L.push("## Materials in this folder", "");
  L.push(`| File | What it is |`, `|---|---|`);
  L.push(`| [cornell-notes.md](cornell-notes.md) | Cornell notes, readable here on GitHub |`);
  L.push(`| [${slug(u)}](${slug(u)}) | The same notes as a printable Word document with a cover page, visual memory aids, and an IXL practice plan |`);
  L.push(`| [Quiz](../../quizzes/index.html) | Interactive quiz on the most often missed questions (open \`quizzes/index.html\` in a browser and choose ${u.title}) |`);
  L.push("");
  L.push("## Standards (NGSS for California, high school)", "");
  for (const n of u.ngss) L.push(`- **${n.code}** ${n.text}`);
  L.push("");
  L.push("## Learning objectives", "", "Check each box when you can do it without notes.", "");
  for (const t of u.targets) L.push(`- [ ] ${t}`);
  L.push("");
  L.push("## Key concepts to master", "", "| Concept | What you need to know |", "|---|---|");
  for (const [term, def] of u.keyConcepts) L.push(`| **${cell(term)}** | ${cell(def)} |`);
  L.push("");
  L.push("## Visual memory aids", "");
  for (const v of u.visuals) L.push(`<img src="../../assets/diagrams/${v.file}" width="380" alt="${v.caption.replace(/"/g, "'")}">`, "", `${v.caption} **Rule:** ${v.rule}`, "");
  L.push("## Learning resources", "", "| Resource | Use it for |", "|---|---|");
  for (const [name, url, what] of u.resources) L.push(`| [${cell(name)}](${url}) | ${cell(what)} |`);
  L.push("");
  const plan = ixlPlan(u);
  L.push("### IXL practice plan", "", `Goal: SmartScore 80+ on each skill before the unit test. Codes were checked against the live IXL skill lists on ${IXL_CHECKED}; IXL renumbers skills from time to time, so search by skill name if a code has moved.`, "");
  L.push("| Done | Skill | Skill name | Notes section |", "|---|---|---|---|");
  for (const r of plan) L.push(`| ☐ | ${r.code} | ${cell(r.name)} | ${r.section} |`);
  L.push("");
  const gaps = u.sections.filter((s) => s.ixlNote).map((s) => `**${s.title}:** ${s.ixlNote}`);
  if (gaps.length) L.push("No exact IXL match:", "", ...gaps.map((g) => `- ${g}`), "");
  L.push("## Practice problems", "", "Use g = 9.8 m/s². Show givens, equation, substitution, and units. Answers are hidden under each problem.", "");
  u.practice.forEach(([level, q, a], i) => {
    L.push(`${i + 1}. **${level}.** ${q}`, "", `   <details><summary>Answer</summary>${a}</details>`, "");
  });
  L.push("## Real-world applications", "");
  for (const r of u.realWorld) L.push(`- ${r}`);
  L.push("");
  L.push("## Assessment criteria", "", `Scored on a 4-point scale. A 3 (Proficient) meets the standard. See [ASSESSMENT.md](../../ASSESSMENT.md) for how scores are collected.`, "");
  L.push("| Skill | 1 Beginning | 2 Developing | 3 Proficient | 4 Advanced |", "|---|---|---|---|---|");
  for (const row of u.criteria) L.push(`| **${cell(row[0])}** | ${row.slice(1).map(cell).join(" | ")} |`);
  L.push("");
  L.push("## Unit checklist", "");
  L.push(`- [ ] Read the Cornell notes and answer every cue aloud with the notes column covered`);
  L.push(`- [ ] Redraw each visual memory aid from memory`);
  L.push(`- [ ] Complete the practice problems (all Foundation and Proficient; at least one Challenge)`);
  L.push(`- [ ] Score ${MASTERY}% or higher on the unit quiz`);
  L.push(`- [ ] Reach SmartScore 80+ on the IXL skills above`);
  L.push(`- [ ] Complete the lab and its write-up`);
  L.push(`- [ ] Check off every learning objective above`);
  L.push("", "[Back to the project outline](../../README.md)", "");
  return L.join("\n");
}

// ───────────────────────── Cornell notes (markdown) ─────────────────────────
function cornellMd(u) {
  const L = [];
  L.push(`# Cornell Notes: ${u.title}`, "", `*${u.subtitle}*`, "");
  L.push("Name: ________________  Period: ______  Date: __________", "");
  L.push("**Learning targets**", "");
  for (const t of u.targets) L.push(`- ${t}`);
  L.push("", `**Essential question:** ${u.essentialQuestion}`, "");
  L.push("**How to use these notes:** cover the Notes column, answer each cue question aloud, then uncover and check. Mark the ones you miss and try them again tomorrow.", "");
  u.sections.forEach((s, i) => {
    L.push(`## ${i + 1}. ${s.title}`, "", "| Cues / Questions | Notes |", "|---|---|");
    for (const c of s.cues) L.push(`| **${cell(c.q)}** | ${c.notes.map((n) => "• " + cell(n)).join("<br>")} |`);
    L.push("");
    const ixl = (s.ixl || []).map(([code, name]) => `**${code}** ${name}`);
    if (ixl.length) L.push(`> **IXL practice (goal: SmartScore 80+):** ${ixl.join(" · ")}`);
    if (s.ixlNote) L.push(`> ${ixl.length ? "" : "**IXL practice:** "}${s.ixlNote}`);
    L.push("");
  });
  L.push("## Memory tricks", "");
  for (const [name, text, use] of u.mnemonics) L.push(`- **${name}.** ${text} *Use it for:* ${use}`);
  L.push("", "## Summary", "", u.summary, "");
  L.push("## Visual memory aids", "");
  for (const v of u.visuals) L.push(`<img src="../../assets/diagrams/${v.file}" width="380" alt="${v.caption.replace(/"/g, "'")}">`, "", `${v.caption} **Rule:** ${v.rule}`, "");
  L.push("## Study method", "");
  L.push("1. Cover the Notes column and answer each cue aloud.", "2. Check, and mark the ones you missed.", "3. Redraw each visual memory aid from memory.", "4. Repeat the next day and again a few days later. Recall spread over days builds memory that rereading does not.", "5. Finish the IXL plan to SmartScore 80+ before the test.", "");
  L.push(`Printable version: [${slug(u)}](${slug(u)}) · [Unit guide](README.md)`, "");
  return L.join("\n");
}

// ───────────────────────── quiz page ─────────────────────────
function quizHtml() {
  const data = units.map((u) => ({
    id: u.id, num: u.num, title: u.title,
    questions: u.quiz.map((q) => ({ q: q.q, choices: q.choices, answer: q.answer, why: q.why, trap: q.misconception })),
  }));
  const tpl = fs.readFileSync(path.join(__dirname, "quiz-template.html"), "utf8");
  const page = tpl.replace("/*__QUIZ_DATA__*/[]", () => JSON.stringify(data).replace(/</g, "\\u003c"));
  // The template is a body fragment (the form the hosted copy needs); add a document shell for opening the file directly.
  return `<!doctype html>\n<html lang="en">\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n${page}</html>\n`;
}

function answerKey() {
  const L = ["# Quiz answer key (instructors)", "", "Each question targets one common misconception. Questions were written for this project from misconceptions that are well documented in physics teaching; they are not drawn from this class's own test data. Swap in questions your students actually miss as you collect results.", ""];
  for (const u of units) {
    L.push(`## Unit ${u.num}: ${u.title}`, "", "| # | Question | Answer | Misconception it targets |", "|---|---|---|---|");
    u.quiz.forEach((q, i) => L.push(`| ${i + 1} | ${cell(q.q)} | ${letter(q.answer)}. ${cell(q.choices[q.answer])} | ${cell(q.misconception)} |`));
    L.push("");
  }
  return L.join("\n");
}

// ───────────────────────── project outline ─────────────────────────
function readme() {
  const L = [];
  L.push("# Physics: Semester 1 Learning Project", "");
  L.push("A study and teaching kit for 11th grade physics covering the five first-semester topics: kinematics, projectile motion, Newton's laws, momentum, and work and energy. Each unit has Cornell notes, an interactive quiz on the most often missed questions, practice problems, resources, learning objectives, and assessment criteria.", "");
  L.push("Learning goals follow the [Next Generation Science Standards for California](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp), high school Physics and Earth Science course model.", "");
  L.push("## Semester at a glance", "");
  L.push("| Unit | Suggested weeks | Standards | Unit guide | Cornell notes | Printable notes |", "|---|---|---|---|---|---|");
  for (const u of units) L.push(`| ${u.num}. ${u.title} | ${u.weeks.replace("Weeks ", "")} | ${u.ngss.filter((n) => /^HS-/.test(n.code)).map((n) => n.code).join(", ")} | [Guide](units/${u.dir}/README.md) | [Notes](units/${u.dir}/cornell-notes.md) | [Word](units/${u.dir}/${slug(u)}) |`);
  L.push("| Review and semester final | 18 | All of the above | [Assessment plan](ASSESSMENT.md) | | |", "");
  L.push("**Quizzes:** open [`quizzes/index.html`](quizzes/index.html) in any browser. It works offline and holds all five unit quizzes. Instructors: see the [answer key](quizzes/answer-key.md).", "");
  L.push("## How to use this project", "");
  L.push("**Students**", "");
  L.push("1. Open the unit guide and read the learning objectives.", "2. Study the Cornell notes: cover the Notes column and answer each cue question aloud.", "3. Work the practice problems, then check the hidden answers.", `4. Take the unit quiz. Read the explanation for anything you miss, then retry the missed questions until you score ${MASTERY}% or higher.`, "5. Tick off the unit in [PROGRESS.md](PROGRESS.md).", "");
  L.push("**Instructors**", "");
  L.push("1. Adjust the suggested pacing to your calendar.", "2. Use each unit's assessment criteria table as the rubric for labs, problem sets, and tests.", "3. Record scores in the class tracker in [ASSESSMENT.md](ASSESSMENT.md).", "4. Replace quiz questions with ones your own students miss most; edit the files in `content/` and rebuild.", "");
  L.push("## Project outline and checklist", "");
  for (const u of units) {
    L.push(`### Unit ${u.num}: ${u.title} (${u.weeks.toLowerCase()})`, "");
    L.push(`*${u.essentialQuestion}*`, "");
    L.push("Key concepts: " + u.keyConcepts.map((k) => k[0].toLowerCase()).join(", ") + ".", "");
    L.push("Learning objectives:", "");
    for (const t of u.targets) L.push(`- [ ] ${t}`);
    L.push("", "Work to complete:", "");
    L.push(`- [ ] [Cornell notes](units/${u.dir}/cornell-notes.md) studied with the cover-and-recall method`);
    L.push(`- [ ] [Practice problems](units/${u.dir}/README.md#practice-problems) (${u.practice.length} problems, three levels)`);
    L.push(`- [ ] [Quiz](quizzes/index.html) at ${MASTERY}% or higher (${u.quiz.length} questions)`);
    L.push(`- [ ] [IXL practice plan](units/${u.dir}/README.md#ixl-practice-plan) to SmartScore 80+ (${ixlPlan(u).length} skills)`);
    L.push(`- [ ] Lab: ${labLine(u)}`);
    L.push("");
    L.push("Real-world connections: " + u.realWorld.map((r) => r.split(":")[0].split(/, (?:which|where)| to keep/)[0].toLowerCase()).join("; ") + ".", "");
  }
  L.push("## Assessment and progress tracking", "");
  L.push(`Every unit is scored on a 4-point proficiency scale against three skills. A student has mastered a unit when every skill is at 3 or higher, the quiz is at ${MASTERY}% or higher, and the lab write-up is complete. Details, the grading evidence for each unit, and blank trackers are in [ASSESSMENT.md](ASSESSMENT.md) and [PROGRESS.md](PROGRESS.md).`, "");
  L.push("## Semester 2 (not built yet)", "");
  L.push("Electricity, magnetism, waves, light, plate tectonics, earthquakes, and nuclear physics follow the same pattern. Add a file per unit in `content/` and rebuild.", "");
  L.push("## Please check before sharing", "");
  L.push("- **Learning objectives and essential questions** were written from the NGSS performance expectations, not from a class syllabus. Compare them with what the teacher has posted.");
  L.push("- **Pacing** is a suggestion that fits five units into about 17 weeks.");
  L.push("- **Quiz questions** target misconceptions that are well documented in physics teaching. They are not taken from this class's own results.");
  L.push(`- **IXL skill codes** were copied from the live IXL Physics, Grade 8 science, and Precalculus lists on ${IXL_CHECKED}. Skills marked "(New)" had no number on that date.`);
  L.push("- **Kinematics and projectile motion** have no performance expectation of their own in NGSS. They are taught here as the foundation for HS-PS2-1.", "");
  L.push("## Rebuilding", "");
  L.push("All notes, guides, and quizzes are generated from the files in `content/`.", "", "```bash", "npm install docx            # once", "python3 tools/diagrams.py   # redraw diagrams (needs matplotlib)", "node tools/build.js         # rebuild guides, notes, Word files, and quizzes", "```", "");
  return L.join("\n");
}

function labLine(u) {
  const lab = u.sections.find((s) => /^Labs/.test(s.title));
  const first = lab.cues[0].q;
  const names = {
    kinematics: "constant-velocity buggy lab and cart-on-a-ramp acceleration lab",
    projectile: "marble-launch prediction lab and launch-angle investigation",
    newton: "cart and hanging mass lab (acceleration vs. force and vs. mass)",
    momentum: "cart collision lab and egg-drop design challenge",
    energy: "pendulum or ramp energy lab and staircase power lab",
  };
  return names[u.id] || first;
}

function progress() {
  const L = ["# Progress tracker", "", `Copy this file (or print it) for each student. A unit is mastered when every box in its row is ticked. Quiz mastery is ${MASTERY}% or higher.`, "", "Student: ________________  Period: ______", ""];
  L.push("## Unit checklist", "", "| Unit | Notes self-test | Practice problems | Quiz score | IXL plan | Lab | Mastered |", "|---|---|---|---|---|---|---|");
  for (const u of units) L.push(`| ${u.num}. ${u.title} | ☐ | ☐ | ____ / ${u.quiz.length} | ☐ | ☐ | ☐ |`);
  L.push("");
  L.push("## Learning objectives", "", "Rate yourself after each unit: 1 = not yet, 2 = with help, 3 = on my own, 4 = I could teach it.", "");
  for (const u of units) {
    L.push(`### Unit ${u.num}: ${u.title}`, "", "| Objective | 1 | 2 | 3 | 4 |", "|---|---|---|---|---|");
    for (const t of u.targets) L.push(`| ${cell(t)} | ☐ | ☐ | ☐ | ☐ |`);
    L.push("");
  }
  L.push("## Quiz log", "", "Record every attempt. The goal is improvement, so a low first score is useful information.", "", "| Date | Unit | Score | Questions missed | What I will review |", "|---|---|---|---|---|", "| | | | | |", "| | | | | |", "| | | | | |", "| | | | | |", "| | | | | |", "");
  return L.join("\n");
}

function assessment() {
  const L = ["# Assessment plan", "", "How progress is measured across the semester, for students and instructors.", ""];
  L.push("## Proficiency scale", "", "| Score | Level | Meaning |", "|---|---|---|", "| 4 | Advanced | Applies the skill to unfamiliar or multi-step situations and explains the reasoning |", "| 3 | Proficient | Meets the standard independently, with correct units and reasoning |", "| 2 | Developing | Shows the idea but makes errors or needs prompting |", "| 1 | Beginning | Shows a misconception or cannot start without help |", "");
  L.push("## Evidence collected in every unit", "", "| Evidence | What it shows | Target |", "|---|---|---|");
  L.push(`| Cornell notes self-test | Recall of definitions, rules, and methods | Every cue answered aloud from memory |`);
  L.push(`| Practice problems | Problem-solving method and units | All Foundation and Proficient problems correct; one Challenge attempted |`);
  L.push(`| Misconception quiz | Conceptual understanding | ${MASTERY}% or higher (retakes allowed) |`);
  L.push(`| IXL practice plan | Fluency with calculations | SmartScore 80+ on each listed skill |`);
  L.push(`| Lab and write-up | Science practices: data, graphs, claims from evidence | 3 or higher on the lab rubric below |`);
  L.push(`| Unit test | Standards mastery | 3 or higher on each unit skill |`, "");
  L.push("## Mastery rule", "", `A unit is mastered when every skill in its criteria table is at 3 or higher, the quiz is at ${MASTERY}% or higher, and the lab write-up is complete. Students below that reteach from the missed quiz questions (each explanation names the misconception) and retake.`, "");
  L.push("## Lab write-up rubric (all units)", "", "| Part | 1 Beginning | 2 Developing | 3 Proficient | 4 Advanced |", "|---|---|---|---|---|");
  L.push("| Question and variables | Missing | Question stated; variables unclear | Testable question with independent, dependent, and controlled variables | Also justifies the design choices |");
  L.push("| Data and graph | Incomplete data | Data table present; graph missing labels or units | Organized table; labeled graph with units and best-fit line | Includes repeated trials and an uncertainty estimate |");
  L.push("| Analysis | No calculation | Calculation with errors | Correct calculation of slope, area, or the quantity asked for | Compares the result with the accepted value using percent error |");
  L.push("| Claim, evidence, reasoning | Claim only | Claim with some data | Claim supported by data and tied to the physics principle | Also discusses error sources and an improvement |", "");
  L.push("## Unit criteria", "");
  for (const u of units) {
    L.push(`### Unit ${u.num}: ${u.title}`, "", `Standards: ${u.ngss.map((n) => n.code).join("; ")}`, "", "| Skill | 1 Beginning | 2 Developing | 3 Proficient | 4 Advanced |", "|---|---|---|---|---|");
    for (const row of u.criteria) L.push(`| **${cell(row[0])}** | ${row.slice(1).map(cell).join(" | ")} |`);
    L.push("");
  }
  L.push("## Class tracker (instructors)", "", "One row per student. Enter the 1 to 4 score for each unit skill (three per unit), then the quiz percentage.", "");
  L.push("| Student | " + units.map((u) => `U${u.num} skills (a/b/c)`).join(" | ") + " | " + units.map((u) => `U${u.num} quiz %`).join(" | ") + " |");
  L.push("|---|" + units.map(() => "---|").join("") + units.map(() => "---|").join(""));
  for (let i = 0; i < 5; i++) L.push("| | " + units.map(() => " / / ").join(" | ") + " | " + units.map(() => " ").join(" | ") + " |");
  L.push("", "Skill key:", "");
  for (const u of units) L.push(`- **Unit ${u.num}:** ${u.criteria.map((r, i) => `(${"abc"[i]}) ${r[0].toLowerCase()}`).join("; ")}`);
  L.push("", "## Semester final", "", "A cumulative test in week 18 with questions from all five units, weighted by instructional time, plus one multi-unit problem (for example, a collision followed by a climb up a ramp, which needs momentum and energy together).", "");
  return L.join("\n");
}

// ───────────────────────── run ─────────────────────────
(async () => {
  for (const u of units) {
    write(`units/${u.dir}/README.md`, unitGuide(u));
    write(`units/${u.dir}/cornell-notes.md`, cornellMd(u));
    const buf = await buildDocx(u, ixlPlan(u), path.join(ROOT, "assets", "diagrams"));
    fs.writeFileSync(path.join(ROOT, "units", u.dir, slug(u)), buf);
    console.log("wrote", `units/${u.dir}/${slug(u)}`);
  }
  write("quizzes/index.html", quizHtml());
  write("quizzes/answer-key.md", answerKey());
  write("README.md", readme());
  write("PROGRESS.md", progress());
  write("ASSESSMENT.md", assessment());
})();
