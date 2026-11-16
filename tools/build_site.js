// Build the Markdown outlines, answer key, progress tracker and quiz page from content/*.js.
// Usage: node tools/build_site.js
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const units = require("./units");
const write = (rel, text) => { const p = path.join(ROOT, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, text); console.log("wrote", rel); };
const KEYS = ["A", "B", "C", "D"];
const notesFile = (u) => `cornell-notes-${u.id}`;
const slug = (u) => u.id.replace(/^\d+-/, "");

// ---------------------------------------------------------------- unit READMEs
for (const u of units) {
  const L = [];
  L.push(`# Unit ${u.num}: ${u.title}`, "");
  L.push(`**Pacing:** ${u.weeks} (suggested)  `, `**Essential question:** ${u.essentialQuestion}`, "");
  L.push("**In this folder**", "");
  L.push(`- [Cornell notes (Word)](${notesFile(u)}.docx) and [PDF](${notesFile(u)}.pdf)`);
  L.push(`- [Interactive quiz](../../quiz/index.html#${slug(u)}) (open the file in a browser) and the [printable quiz](quiz.md)`);
  L.push("- [Answer key for instructors](answer-key.md)", "- `figures/`: the diagrams used in the notes", "");

  L.push("## Unit checklist", "");
  L.push("- [ ] Read the Cornell notes and answer every cue aloud with the Notes column covered");
  L.push("- [ ] Redraw the four Visual Memory Aids from memory");
  L.push("- [ ] Finish the practice problems below and check the answers");
  L.push("- [ ] Complete the lab and hand in the lab report");
  L.push("- [ ] Score 8/10 or better on the missed-question quiz");
  L.push("- [ ] Reach SmartScore 80+ on every IXL skill in the practice plan");
  L.push("- [ ] Pass the unit test (70% or better; retake after corrections if below)", "");

  L.push("## NGSS alignment (California, Physics in the Universe)", "");
  L.push("| Standard | How this unit addresses it |", "|---|---|");
  u.ngss.forEach(([c, t]) => L.push(`| ${c} | ${t} |`));
  L.push("");

  L.push("## Key concepts to master", "");
  L.push("| Concept | What students need to know |", "|---|---|");
  u.concepts.forEach(([c, t]) => L.push(`| **${c}** | ${t} |`));
  L.push("");

  L.push("## Learning objectives and assessment criteria", "");
  L.push("Score each objective on the 4-point scale in the [progress tracker](../../PROGRESS-TRACKER.md). \"Proficient\" (3) is described below.", "");
  L.push("| ID | Students can... | Evidence of proficiency (score 3) | Assessed by |", "|---|---|---|---|");
  u.objectives.forEach(([id, t, c]) => {
    const by = /lab|Design|design/.test(t) ? "Lab report or design project" : "Quiz, IXL, unit test";
    L.push(`| ${id} | ${t} | ${c} | ${by} |`);
  });
  L.push("");

  L.push("## Lesson sequence", "");
  L.push("| # | Section | Cue questions students should be able to answer |", "|---|---|---|");
  u.sections.forEach((s, i) => L.push(`| ${i + 1} | ${s.title} | ${s.rows.map((r) => r[0]).join("<br>")} |`));
  L.push("");

  L.push("## Learning resources", "");
  u.resources.forEach(([n, url, note]) => L.push(`- [${n}](${url}): ${note}`));
  L.push("");
  L.push("**IXL skills** (codes copied from the live IXL pages on 2026-11-16; IXL renumbers skills from time to time)", "");
  const seen = new Set();
  u.sections.forEach((s) => s.ixl.forEach(([code, name]) => { if (!seen.has(code)) { seen.add(code); L.push(`- [ ] **${code}** ${name}`); } }));
  L.push("", `No IXL match: ${u.noIxl}`, "");

  L.push("## Practice problems", "");
  u.practice.forEach(([q], i) => L.push(`${i + 1}. ${q}`));
  L.push("", "<details><summary>Answers</summary>", "");
  u.practice.forEach(([, a], i) => L.push(`${i + 1}. ${a}`));
  L.push("", "</details>", "");

  L.push("## Real-world applications", "");
  u.applications.forEach((a) => L.push(`- ${a}`));
  L.push("");

  L.push("## Lab", "");
  const lab = u.sections[u.sections.length - 1];
  lab.rows.forEach(([cue, notes]) => { L.push(`**${cue}**`, ""); notes.forEach((n) => L.push(`- ${n}`)); L.push(""); });
  write(`units/${u.id}/README.md`, L.join("\n"));

  // printable quiz (no answers)
  const Q = [`# Unit ${u.num}: ${u.title} — Missed-Question Quiz`, "", "Name: ______________________  Period: ______  Date: ____________", "",
    "Each question targets a mistake students commonly make. Use g = 9.8 m/s² and ignore air resistance unless told otherwise.", ""];
  u.quiz.forEach((it, i) => { Q.push(`**${i + 1}.** ${it.q}`, ""); it.choices.forEach((c, k) => Q.push(`- ${KEYS[k]}. ${c}`)); Q.push(""); });
  Q.push("Score: ____ / 10  (goal: 8 or better)", "");
  write(`units/${u.id}/quiz.md`, Q.join("\n"));

  // answer key
  const A = [`# Unit ${u.num}: ${u.title} — Answer Key (instructors)`, "", "## Quiz", "", "| # | Answer | Why | Mistake this question targets | Objective |", "|---|---|---|---|---|"];
  u.quiz.forEach((it, i) => A.push(`| ${i + 1} | **${KEYS[it.answer]}.** ${it.choices[it.answer]} | ${it.why} | ${it.trap} | |`));
  A.push("", "Use the last column to tag each question with the objective ID you want it to count toward.", "", "## Practice problems", "");
  u.practice.forEach(([q, a], i) => A.push(`${i + 1}. ${q}  `, `   **Answer:** ${a}`));
  A.push("");
  write(`units/${u.id}/answer-key.md`, A.join("\n"));
}

// ---------------------------------------------------------------- progress tracker
{
  const L = ["# Progress Tracker", "", "Student: ______________________  Period: ______", "",
    "## How progress is scored", "",
    "| Score | Level | What it looks like |", "|---|---|---|",
    "| 4 | Advanced | Solves unfamiliar, multi-step problems and can explain the reasoning to someone else. |",
    "| 3 | Proficient | Meets the evidence listed for the objective, working independently. This is the goal. |",
    "| 2 | Developing | Gets there with notes, hints, or a worked example to follow. |",
    "| 1 | Beginning | Can state the idea or the formula but cannot yet apply it. |", "",
    "## What counts as mastering a unit", "",
    "| Evidence | Target | Weight (suggested) |", "|---|---|---|",
    "| Cornell notes self-test (cues answered aloud, visuals redrawn) | Completed twice, on different days | 10% |",
    "| IXL practice plan | SmartScore 80+ on every listed skill | 15% |",
    "| Missed-question quiz | 8/10 or better | 15% |",
    "| Lab report or design project | 3 or better on the lab objective | 25% |",
    "| Unit test | 70% or better; corrections and retake if below | 35% |", "",
    "Weights are a starting point for the instructor to adjust to the school's grading policy.", ""];
  for (const u of units) {
    L.push(`## Unit ${u.num}: ${u.title}`, "", "| ID | Objective | Score (1-4) | Date | Evidence / notes |", "|---|---|---|---|---|");
    u.objectives.forEach(([id, t]) => L.push(`| ${id} | ${t} |  |  |  |`));
    L.push("", "- [ ] Notes self-test 1   - [ ] Notes self-test 2   - [ ] IXL plan at 80+   - [ ] Quiz 8/10   - [ ] Lab report   - [ ] Unit test 70%+", "", "Quiz score: ____ / 10     Unit test: ____ %", "");
  }
  write("PROGRESS-TRACKER.md", L.join("\n"));
}

// ---------------------------------------------------------------- root README
{
  const total = units.reduce((n, u) => n + u.objectives.length, 0);
  const L = [];
  L.push("# Physics: Semester 1 Learning Project", "");
  L.push("An 11th grade physics course outline for students and instructors, covering the five Semester 1 units: kinematics, projectile motion, Newton's laws, momentum, and work and energy. Each unit has Cornell notes, an interactive quiz built from the questions students most often miss, practice problems, labs, resources, and objectives that can be tracked.", "");
  L.push("Learning goals follow the California Next Generation Science Standards (CA NGSS), high school three-course model, *Physics in the Universe* (physics integrated with Earth and space science).", "");

  L.push("## Start here", "");
  L.push("| If you are a... | Do this |", "|---|---|");
  L.push("| Student | Open your unit folder below, work through its checklist, and record scores in the [progress tracker](PROGRESS-TRACKER.md). |");
  L.push("| Instructor | Review the [course outline](#course-outline) and each unit's objectives table; answer keys are in each unit folder. Check the [items to confirm](#items-for-the-instructor-to-confirm) first. |");
  L.push("");
  L.push("**Interactive quizzes:** open [`quiz/index.html`](quiz/index.html) in any browser. It works offline and needs no account.", "");

  L.push("## Course outline", "");
  L.push("| Unit | Topic | Pacing | NGSS focus | Notes | Quiz | Objectives |", "|---|---|---|---|---|---|---|");
  units.forEach((u) => L.push(`| ${u.num} | [${u.title}](units/${u.id}/README.md) | ${u.weeks} | ${u.ngss.filter(([c]) => c.startsWith("HS-")).map(([c]) => c).join(", ")} | [docx](units/${u.id}/${notesFile(u)}.docx) · [pdf](units/${u.id}/${notesFile(u)}.pdf) | [interactive](quiz/index.html#${slug(u)}) · [print](units/${u.id}/quiz.md) | ${u.objectives.length} |`));
  L.push("", `Pacing assumes an 18-week semester and is a suggestion. There are ${total} objectives in all.`, "");

  L.push("## Project checklist", "");
  for (const u of units) {
    L.push(`### Unit ${u.num}: ${u.title}`, "", `*${u.essentialQuestion}*`, "");
    L.push("Key concepts: " + u.concepts.map(([c]) => c).join("; ") + ".", "");
    u.objectives.forEach(([id, t]) => L.push(`- [ ] **${id}** ${t}`));
    L.push(`- [ ] Quiz 8/10 or better · IXL plan at SmartScore 80+ · lab report · unit test 70%+`, "");
  }

  L.push("## What is in each unit folder", "");
  L.push("| File | For | What it is |", "|---|---|---|");
  L.push("| `README.md` | Everyone | Unit outline: checklist, NGSS alignment, key concepts, objectives with assessment criteria, lesson sequence, resources, practice problems with answers, real-world applications, lab. |");
  L.push("| `cornell-notes-*.docx` / `.pdf` | Students | Cornell notes: cover page with learning targets and outline, cue questions beside notes with worked examples, memory tricks, summary, visual memory aids, study method, IXL practice plan. |");
  L.push("| `quiz.md` | Students | Printable version of the 10-question quiz, without answers. |");
  L.push("| `answer-key.md` | Instructors | Quiz answers with the reasoning and the mistake each question targets, plus practice-problem answers. |");
  L.push("| `figures/` | Everyone | The diagrams used in the notes, as PNG files. |");
  L.push("");

  L.push("## How students are assessed", "");
  L.push("Every objective is scored on a 4-point scale (1 beginning, 2 developing, 3 proficient, 4 advanced). The evidence that counts as proficient is written next to each objective in the unit README. A unit is mastered when the student has:", "");
  L.push("1. Self-tested from the Cornell notes on two different days.");
  L.push("2. Reached SmartScore 80+ on the unit's IXL skills.");
  L.push("3. Scored 8/10 or better on the missed-question quiz.");
  L.push("4. Earned a 3 or better on the lab or design objective.");
  L.push("5. Scored 70% or better on the unit test.", "");
  L.push("The [progress tracker](PROGRESS-TRACKER.md) has the scale, suggested weights, and a table for every objective.", "");

  L.push("## NGSS performance expectations covered", "");
  L.push("| Code | Performance expectation | Unit |", "|---|---|---|");
  const pe = new Map();
  const PE = {
    "HS-PS2-1": "Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration.",
    "HS-PS2-4": "Use mathematical representations of Newton's law of gravitation and Coulomb's law to describe and predict the gravitational and electrostatic forces between objects. (Introduced here through weight; completed in Semester 2.)",
  };
  units.forEach((u) => u.ngss.filter(([c]) => c.startsWith("HS-")).forEach(([c, t]) => { if (!pe.has(c)) pe.set(c, [PE[c] || t, []]); pe.get(c)[1].push(u.num); }));
  [...pe.entries()].sort().forEach(([c, [t, us]]) => L.push(`| ${c} | ${t} | ${us.join(", ")} |`));
  L.push("", "Standards source: [NGSS for California Public Schools, K-12](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp) (California Department of Education), Grades 9-12 Physical Science. Kinematics and projectile motion have no performance expectation of their own; they supply the motion analysis that HS-PS2-1 depends on. The Earth and space science expectations in this course model (plate tectonics, earthquakes) belong to Semester 2.", "");

  L.push("## Semester 2 (not built yet)", "");
  L.push("Electricity, magnetism, waves, light, plate tectonics, earthquakes, and nuclear physics. The same structure can be extended: add a file to `content/` and rerun the build.", "");

  L.push("## Items for the instructor to confirm", "");
  L.push("- **Learning targets and essential questions** were written from the NGSS and standard physics content, not from the class's own slides. Compare them with what is posted in class.");
  L.push("- **\"Most often missed\" questions** are based on well-documented student misconceptions in introductory physics (the kind probed by concept inventories), not on this class's own test data. Swap in items from your gradebook as they become available.");
  L.push("- **Labs** are standard suggestions (buggy lab, marble launch, cart and hanging mass, cart collisions and egg drop, stair-climb power). Replace them with the labs the class actually runs.");
  L.push("- **Vocabulary** follows The Physics Classroom (vi, vf, Fgrav, Fnorm, Ffrict). Change it in `content/` if the class uses different symbols.");
  L.push("- **g = 9.8 m/s²** is used throughout. Some classes round to 10.");
  L.push("- **IXL codes** were copied from the live IXL pages on 2026-11-16 and may be renumbered by IXL later.");
  L.push("");

  L.push("## Rebuilding", "");
  L.push("All notes, quizzes, and outlines are generated from the five files in `content/`, so a correction is made once and appears everywhere.", "");
  L.push("```sh", "sh tools/render.sh   # needs Node with the docx package, Python with matplotlib, and LibreOffice", "```", "");
  write("README.md", L.join("\n"));
}

// ---------------------------------------------------------------- quiz page
{
  const data = units.map((u) => ({ num: u.num, title: u.title, slug: slug(u), quiz: u.quiz }));
  const tpl = fs.readFileSync(path.join(__dirname, "quiz_template.html"), "utf8");
  const fragment = tpl.replace("/*__DATA__*/[]", () => JSON.stringify(data).replace(/</g, "\\u003c"));
  const m = fragment.match(/^([\s\S]*?<\/style>)([\s\S]*)$/);
  const page = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n${m[1]}\n</head>\n<body>${m[2]}</body>\n</html>\n`;
  write("quiz/index.html", page);
  if (process.env.QUIZ_FRAGMENT) { fs.writeFileSync(process.env.QUIZ_FRAGMENT, fragment); console.log("wrote fragment"); }
}
