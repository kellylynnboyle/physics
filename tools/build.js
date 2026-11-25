// Builds every generated file in the project from tools/content/*.js.
//   node tools/build.js
// Outputs per unit: README.md, cornell-notes.md, cornell-notes.docx, quiz.html
// Outputs for the project: README.md, index.html, docs/standards-map.md, docs/assessment.md
const fs = require('fs');
const path = require('path');
const D = require('docx');
const { Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, AlignmentType } = D;

const ROOT = path.join(__dirname, '..');
const UNITS = ['01-kinematics', '02-projectile-motion', '03-newtons-laws', '04-momentum', '05-work-energy'].map((f) => require('./content/' + f));
const QUIZ_GOAL = 8;
const write = (rel, text) => { const p = path.join(ROOT, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, text); };

// ---------------------------------------------------------------- shared text
const STUDY_METHOD = [
  'Cover the Notes column and answer each cue question aloud.',
  'Uncover, check, and mark every cue you missed.',
  'Redraw each Visual Memory Aid from memory, with labels and its equation.',
  'Repeat the next day and again a few days later. Recall spread over days builds memory that rereading does not.',
  'Finish the IXL Practice Plan to SmartScore 80+ before the test.',
];
const SELF_TEST = 'Self-test tip: cover the Notes column, answer each cue aloud, then redo every worked example on blank paper without looking.';
const SCALE = [
  ['4', 'Extending', 'Solves unfamiliar, multi-step problems; explains the reasoning and corrects a common misconception for someone else.'],
  ['3', 'Proficient (the goal)', 'Solves standard problems correctly with units and direction; explains the concept in their own words.'],
  ['2', 'Developing', 'Solves routine problems with a formula sheet or hints; explanations are partly correct.'],
  ['1', 'Beginning', 'Recognizes vocabulary and equations but cannot yet apply them without step-by-step help.'],
];
const NGSS = [
  ['HS-PS2-1', "Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration.", 'Unit 3 (assessed); Units 1–2 build the acceleration skills it needs'],
  ['HS-PS2-2', 'Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system.', 'Unit 4'],
  ['HS-PS2-3', 'Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision.', 'Unit 4 (egg-drop project)'],
  ['HS-PS3-1', 'Create a computational model to calculate the change in the energy of one component in a system when the change in energy of the other component(s) and energy flows in and out of the system are known.', 'Unit 5 (spreadsheet model)'],
  ['HS-PS3-2', 'Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as a combination of energy associated with the motions of particles (objects) and energy associated with the relative positions of particles (objects).', 'Unit 5 (energy bar charts)'],
  ['HS-PS3-3', 'Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy.', 'Unit 5 (energy conversion device)'],
  ['HS-ETS1-2, HS-ETS1-3', 'Break a complex real-world problem into smaller problems that can be solved through engineering; evaluate a solution against prioritized criteria and trade-offs.', 'Units 4 and 5 (design projects)'],
];

// ---------------------------------------------------------------- markdown
const sectionNum = (s) => s.title.split('.')[0];
function allIxl(u) {
  const seen = new Map();
  u.sections.forEach((s) => s.ixl.forEach(([code, name]) => {
    const k = code + '|' + name;
    if (!seen.has(k)) seen.set(k, { code, name, secs: [] });
    seen.get(k).secs.push(sectionNum(s));
  }));
  const group = (c) => (/^Physics [AB]\b/.test(c) ? 0 : /^(Physics C\b|Precalculus)/.test(c) ? 1 : /^Grade 8/.test(c) ? 2 : 3);
  const numOf = (c) => { const m = c.match(/\.(\d+)$/); return m ? Number(m[1]) : 0; };
  return [...seen.values()].sort((a, b) => group(a.code) - group(b.code) || a.code.replace(/\.\d+$/, '').localeCompare(b.code.replace(/\.\d+$/, '')) || numOf(a.code) - numOf(b.code));
}

function cornellMd(u) {
  let m = `# Cornell Notes: ${u.title}\n\n*${u.subtitle}*\n\nName: ________________  Period: ______  Date: __________\n\n`;
  m += `A print-ready Word version with the same content is in [cornell-notes.docx](cornell-notes.docx).\n\n`;
  m += `**Learning targets**\n\n${u.targets.map((t) => `- [ ] ${t}`).join('\n')}\n\n**Essential question:** ${u.essentialQuestion}\n\n`;
  m += `> **How to use these notes:** the left column is your self-test. Cover the right column, answer each cue question aloud, then check.\n\n`;
  u.sections.forEach((s) => {
    m += `## ${s.title}\n\n| Cues / Questions | Notes |\n|---|---|\n`;
    s.rows.forEach((r) => { m += `| **${r.cue}** | ${r.notes.map((n) => '• ' + n.replace(/\|/g, '\\|')).join('<br>')} |\n`; });
    m += `\n**IXL practice (goal: SmartScore 80+):** `;
    m += s.ixl.length ? s.ixl.map(([c, n]) => `**${c}** ${n}`).join(' · ') : '';
    if (s.ixlNote) m += (s.ixl.length ? ' · ' : '') + s.ixlNote;
    m += '\n\n';
  });
  m += `## Memory Tricks\n\n${u.tricks.map(([n, w]) => `- **${n}.** ${w}`).join('\n')}\n\n`;
  m += `## Summary\n\n${u.summary}\n\n`;
  m += `## Visual Memory Aids\n\n`;
  u.visuals.forEach(([f, cap, rule]) => { m += `![${cap}](figures/${f})\n\n${cap} **${rule}**\n\n`; });
  m += `## Study Method\n\n${STUDY_METHOD.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\n`;
  m += `## IXL Practice Plan\n\nReach SmartScore 80+ on each skill before the test.\n\n| Done | # | Skill | Skill name | Notes section |\n|---|---|---|---|---|\n`;
  allIxl(u).forEach((x, i) => { m += `| ☐ | ${i + 1} | ${x.code} | ${x.name} | ${x.secs.join(', ')} |\n`; });
  const noMatch = u.sections.filter((s) => s.ixlNote).map((s) => s.title.replace(/^\d+\.\s*/, ''));
  if (noMatch.length) m += `\nNo full IXL match (use physicsclassroom.com Concept Builders): ${noMatch.join('; ')}.\n`;
  m += `\n*${SELF_TEST}*\n`;
  return m;
}

function unitReadme(u) {
  let m = `# Unit ${u.num}: ${u.title}\n\n*${u.subtitle}*\n\n`;
  m += `**Suggested pacing:** ${u.weeks}  \n**Essential question:** ${u.essentialQuestion}\n\n`;
  m += `| Open this | What it is |\n|---|---|\n| [Cornell notes (web)](cornell-notes.md) | Cue questions, notes, worked examples, diagrams |\n| [Cornell notes (Word)](cornell-notes.docx) | Print-ready version of the same notes |\n| [Interactive quiz](quiz.html) | ${u.quiz.length} most-missed questions with instant feedback (download and open in a browser) |\n\n`;
  m += `## Standards (CA NGSS)\n\n${u.ngss.map((n) => `- ${n}`).join('\n')}\n\n`;
  m += `## Key concepts to master\n\n| Concept | What you need to know |\n|---|---|\n${u.concepts.map(([a, b]) => `| **${a}** | ${b} |`).join('\n')}\n\n`;
  m += `## Learning objectives and assessment criteria\n\nEach objective is scored on the 4-level scale in [docs/assessment.md](../../docs/assessment.md). Level 3 (Proficient) is the goal.\n\n| ID | Objective: I can... | Evidence used to assess it |\n|---|---|---|\n${u.objectives.map(([id, t, e]) => `| ${id} | ${t} | ${e} |`).join('\n')}\n\n`;
  m += `**Unit mastery check:** quiz score ${QUIZ_GOAL}/${u.quiz.length} or better, IXL plan at SmartScore 80+, and Level 3 on every objective above.\n\n`;
  m += `## Student checklist\n\n- [ ] Read the Cornell notes and answer every cue aloud\n${u.targets.map((t) => `- [ ] ${t}`).join('\n')}\n- [ ] Complete the practice problems below and check answers\n- [ ] Score ${QUIZ_GOAL}/${u.quiz.length} or better on the interactive quiz\n- [ ] Finish the IXL Practice Plan (SmartScore 80+)\n- [ ] Complete the unit lab(s) and turn in the report\n\n`;
  m += `## Instructor checklist\n\n- [ ] Post learning targets and essential question\n- [ ] Run the lab(s) in the "Labs" section of the notes\n- [ ] Assign the IXL Practice Plan\n- [ ] Use the quiz as a formative check; reteach the two most-missed items\n- [ ] Record objective levels in the progress tracker\n\n`;
  m += `## Learning resources\n\n| Resource | Why use it |\n|---|---|\n${u.resources.map(([n, url, w]) => `| [${n}](${url}) | ${w} |`).join('\n')}\n\n`;
  m += `## Practice problems\n\nUse g = 9.8 m/s² and ignore air resistance unless told otherwise. Show the given values, the equation, the substitution, and units.\n\n`;
  u.practice.forEach(([q], i) => { m += `${i + 1}. ${q}\n`; });
  m += `\n<details><summary>Answers</summary>\n\n`;
  u.practice.forEach(([, a], i) => { m += `${i + 1}. ${a}\n`; });
  m += `\n</details>\n\n`;
  m += `## Real-world applications\n\n${u.realWorld.map((r) => `- ${r}`).join('\n')}\n\n`;
  m += `## Most-missed questions (print version)\n\nThe same questions as the interactive quiz. The first choice listed is correct; the quiz shuffles them.\n\n<details><summary>Show questions, answers, and the misconception behind each</summary>\n\n`;
  u.quiz.forEach((q, i) => { m += `**Q${i + 1}. ${q.q}**\n\n- Answer: ${q.choices[q.a]}\n- Other choices: ${q.choices.filter((_, j) => j !== q.a).join(' / ')}\n- Why: ${q.why}\n- Why it gets missed: ${q.miss}\n\n`; });
  m += `</details>\n`;
  return m;
}

function rootReadme() {
  let m = `# Physics: Semester 1 Learning Project (Grade 11)\n\n`;
  m += `A shareable project outline for students and instructors covering the five first-semester mechanics units. Each unit has Cornell notes, an interactive quiz built from the questions students miss most, practice problems with answers, learning resources, real-world applications, and trackable learning objectives. Learning goals follow the California NGSS (Physics and Earth Science course model): see the [standards map](docs/standards-map.md).\n\n`;
  m += `## Project outline\n\n| # | Unit | Pacing | Overview | Cornell notes | Quiz | NGSS focus |\n|---|---|---|---|---|---|---|\n`;
  UNITS.forEach((u) => { m += `| ${u.num} | **${u.title}** | ${u.weeks} | [Unit page](units/${u.id}/README.md) | [Web](units/${u.id}/cornell-notes.md) · [Word](units/${u.id}/cornell-notes.docx) | [Quiz](units/${u.id}/quiz.html) | ${u.ngss[0].split(/[:(]/)[0].trim()} |\n`; });
  m += `\nThe quizzes are single HTML files. Download one and open it in any browser, or turn on GitHub Pages for this repository and use [index.html](index.html) as the quiz menu.\n\n`;
  m += `## What students need to master\n\n`;
  UNITS.forEach((u) => { m += `### Unit ${u.num}: ${u.title}\n\n*${u.essentialQuestion}*\n\n${u.concepts.map(([a, b]) => `- **${a}:** ${b}`).join('\n')}\n\n`; });
  m += `## Semester checklist\n\n`;
  UNITS.forEach((u) => {
    m += `### Unit ${u.num}: ${u.title} (${u.weeks})\n\n- [ ] Cornell notes read and self-tested\n${u.objectives.map(([id, t]) => `- [ ] **${id}** ${t}`).join('\n')}\n- [ ] Practice problems complete\n- [ ] Quiz ${QUIZ_GOAL}/${u.quiz.length} or better\n- [ ] IXL Practice Plan at SmartScore 80+\n- [ ] Lab or project turned in\n\n`;
  });
  m += `## Assessment and progress tracking\n\n- [docs/assessment.md](docs/assessment.md): the 4-level proficiency scale, what counts as evidence, lab and engineering rubrics, and a printable progress tracker for all ${UNITS.reduce((n, u) => n + u.objectives.length, 0)} objectives.\n- [docs/standards-map.md](docs/standards-map.md): which NGSS performance expectations each unit addresses.\n\n`;
  m += `## Semester 2 (not built yet)\n\nElectricity, magnetism, waves, light, plate tectonics, earthquakes, and nuclear physics. The same unit template can be reused: add a content file in \`tools/content/\` and rebuild.\n\n`;
  m += `## For instructors: editing and rebuilding\n\nAll unit content lives in one file per unit under \`tools/content/\`. Every notes page, Word document, quiz, and checklist is generated from those files, so edit there and rebuild:\n\n\`\`\`\nnpm install                 # once, installs the docx library\npip install matplotlib      # once, for the diagrams\npython3 tools/figures.py    # redraw diagrams\nnode tools/build.js         # rebuild all pages, notes, and quizzes\n\`\`\`\n\n`;
  m += `## Sources and checks\n\n- IXL skill codes were copied from the live IXL Physics, Precalculus, and Grade 8 science pages in November 2026. Codes change; skills marked "New!" had no number yet.\n- Learning targets and essential questions were written for this project from the course description. Check them against what the teacher posts.\n- Resource links point to The Physics Classroom, PhET, OpenStax, and Khan Academy.\n`;
  return m;
}

function standardsMd() {
  let m = `# Standards Map (CA NGSS)\n\nSource: [NGSS for California Public Schools](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp), high school physical science standards ([PDF](https://www.cde.ca.gov/pd/ca/sc/documents/ngsshsphyicalscidci.pdf)). Wording below follows the published performance expectations; confirm against the PDF before using it in official documents.\n\n`;
  m += `| Performance expectation | What students do | Where it is addressed |\n|---|---|---|\n${NGSS.map(([c, t, w]) => `| **${c}** | ${t} | ${w} |`).join('\n')}\n\n`;
  m += `Kinematics and projectile motion are not separate NGSS performance expectations. They are taught first because students must be able to measure and describe acceleration before they can analyze data for HS-PS2-1. HS-PS2-4 (gravitational and electrostatic forces) is previewed in Unit 3 and belongs with the Semester 2 work on fields.\n\n`;
  m += `## Science and engineering practices emphasized\n\n| Practice | Where students use it |\n|---|---|\n| Analyzing and interpreting data | Motion graphs (Unit 1), second-law lab (Unit 3), collision lab (Unit 4) |\n| Using mathematics and computational thinking | Kinematic equations, projectile predictions, momentum and energy calculations, spreadsheet energy model |\n| Developing and using models | Free-body diagrams, motion maps, energy bar charts |\n| Planning and carrying out investigations | Every unit lab: identify independent, dependent, and controlled variables |\n| Designing solutions | Egg-drop device (Unit 4), energy conversion device (Unit 5) |\n\n`;
  m += `## Objectives by unit\n\n`;
  UNITS.forEach((u) => { m += `### Unit ${u.num}: ${u.title}\n\n${u.ngss.map((n) => `- ${n}`).join('\n')}\n\n| ID | Objective |\n|---|---|\n${u.objectives.map(([id, t]) => `| ${id} | ${t} |`).join('\n')}\n\n`; });
  return m;
}

function assessmentMd() {
  let m = `# Assessment Criteria and Progress Tracking\n\n## Proficiency scale\n\nEvery learning objective is scored on the same scale. Level 3 is the goal for all students.\n\n| Level | Name | What it looks like |\n|---|---|---|\n${SCALE.map(([l, n, d]) => `| ${l} | ${n} | ${d} |`).join('\n')}\n\n`;
  m += `## What counts as evidence\n\n| Evidence | Mastery criterion | What it shows |\n|---|---|---|\n| Cornell notes self-test | Answers every cue aloud without looking | Recall of concepts and vocabulary |\n| Practice problems | At least 80% correct with given values, equation, substitution, and units shown | Problem-solving method |\n| Interactive quiz | ${QUIZ_GOAL}/10 or better on a full attempt | Common misconceptions are resolved |\n| IXL Practice Plan | SmartScore 80+ on each listed skill | Fluency |\n| Lab report | Level 3 on the lab rubric | Data analysis and reasoning from evidence |\n| Design project (Units 4 and 5) | Level 3 on the engineering rubric | Applying ideas to a real problem |\n| Unit test | 80% or better, or Level 3 on each objective | Independent performance |\n\nAn objective is marked **met** when two different kinds of evidence are at Level 3 or the mastery criterion.\n\n`;
  m += `## Lab report rubric\n\n| Criterion | 4 | 3 | 2 | 1 |\n|---|---|---|---|---|\n| Question and variables | Variables and controls identified and justified | Independent, dependent, and controlled variables correct | One variable misidentified | Variables missing |\n| Data and graph | Graph is correct, with best-fit line and slope interpreted with units | Labeled graph with correct axes, units, and best-fit line | Graph has missing labels or units | No graph or unusable data |\n| Claim, evidence, reasoning | Claim supported by data and physics principle; limits discussed | Claim supported by specific data and the correct principle | Claim stated with weak or partial evidence | Claim missing or unsupported |\n| Error analysis | Sources of error ranked, with a tested or specific improvement | Main sources of error named with their effect on results | "Human error" only | Not addressed |\n\n`;
  m += `## Engineering design rubric (HS-PS2-3, HS-PS3-3)\n\n| Criterion | 4 | 3 | 2 | 1 |\n|---|---|---|---|---|\n| Criteria and constraints | Prioritized, with trade-offs explained | Clearly stated and measurable | Vague or incomplete | Missing |\n| Physics explanation | Quantitative use of impulse or energy to justify the design | Correct use of impulse-momentum or energy conservation to explain the design | Physics mentioned but misapplied | No physics connection |\n| Testing and data | Multiple trials with a comparison between versions | Device tested with recorded data | Tested once, little data | Not tested |\n| Refinement | Two or more refinements, each tied to data | At least one refinement based on test results | Changes made without reference to data | No refinement |\n\n`;
  m += `## Progress tracker\n\nCopy this table for each student, or keep one for the class. Record the level (1–4) and the date each time an objective is assessed.\n\n`;
  UNITS.forEach((u) => {
    m += `### Unit ${u.num}: ${u.title}\n\n| ID | Objective | Check 1 | Check 2 | Final level | Met? |\n|---|---|---|---|---|---|\n${u.objectives.map(([id, t]) => `| ${id} | ${t} |  |  |  | ☐ |`).join('\n')}\n\n`;
    m += `| Unit milestones | Score or date |\n|---|---|\n| Quiz (goal ${QUIZ_GOAL}/${u.quiz.length}) |  |\n| IXL plan complete (SmartScore 80+) |  |\n| Lab report or project level |  |\n| Unit test |  |\n\n`;
  });
  m += `## Reading the results\n\n- **Most objectives at 3 or 4:** move on; use Level 4 extension problems.\n- **One or two objectives at 2:** redo the matching Cornell notes section and its quiz questions (each unit page lists which quiz questions go with each objective).\n- **Several objectives at 1 or 2:** reteach with the PhET simulation for that unit, then repeat the practice problems before retaking the quiz.\n`;
  return m;
}

function quizHtml(u) {
  const t = fs.readFileSync(path.join(__dirname, 'quiz-template.html'), 'utf8');
  return t.replace(/__TITLE__/g, u.title.replace(/&/g, '&amp;')).replace(/__ID__/g, u.id).replace(/__COUNT__/g, String(u.quiz.length))
    .replace(/__GOAL__/g, String(QUIZ_GOAL)).replace('__DATA__', JSON.stringify(u.quiz).replace(/</g, '\\u003c'));
}

function indexHtml() {
  const items = UNITS.map((u) => `<li><a href="units/${u.id}/quiz.html">Unit ${u.num}: ${u.title.replace(/&/g, '&amp;')}</a><span>${u.quiz.length} questions · ${u.weeks}</span></li>`).join('\n    ');
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Physics Quizzes</title>
<style>
  :root { --bg:#f6f7fb; --card:#fff; --ink:#1b2333; --muted:#5b6475; --line:#d5dae6; --navy:#1f3864; --accent:#2f5bd0; }
  @media (prefers-color-scheme: dark) { :root { --bg:#12151c; --card:#1b202b; --ink:#e8ebf2; --muted:#a3acbd; --line:#343b4b; --navy:#a9c0f5; --accent:#8fb0ff; } }
  body { margin:0; background:var(--bg); color:var(--ink); font:16px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  main { max-width:720px; margin:0 auto; padding:24px 16px 64px; } h1 { color:var(--navy); font-size:1.5rem; margin:0 0 4px; } p { color:var(--muted); }
  ul { list-style:none; padding:0; } li { background:var(--card); border:1px solid var(--line); border-radius:12px; padding:16px 20px; margin-bottom:12px; }
  a { color:var(--accent); font-weight:600; font-size:1.125rem; text-decoration:none; } a:hover { text-decoration:underline; } span { display:block; color:var(--muted); font-size:.875rem; }
</style></head>
<body><main>
  <h1>Physics, Semester 1: Most-Missed Question Quizzes</h1>
  <p>Pick a unit. Each quiz gives instant feedback and explains the mistake behind each wrong answer. Goal: ${QUIZ_GOAL} or more correct.</p>
  <ul>
    ${items}
  </ul>
</main></body></html>
`;
}

// ---------------------------------------------------------------- docx
const NAVY = '1F3864', PURPLE = '5B2C83', FONT = 'Calibri';
const border = { style: BorderStyle.SINGLE, size: 4, color: '8EA9DB' };
const borders = { top: border, bottom: border, left: border, right: border };
const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: none, bottom: none, left: none, right: none };
const W1 = 2700, W2 = 6660, WT = 9360;
const cellMargins = { top: 70, bottom: 70, left: 110, right: 110 };

function runs(text, opts = {}) {
  return text.split('**').map((part, i) => new TextRun({ text: part, bold: i % 2 === 1 || opts.bold, font: FONT, size: opts.size || 21, color: opts.color, italics: opts.italics })).filter((r, i, a) => a.length === 1 || text.split('**')[i] !== '');
}
const para = (text, opts = {}) => new Paragraph({ children: runs(text, opts), spacing: { before: opts.before || 0, after: opts.after === undefined ? 60 : opts.after }, indent: opts.indent, keepNext: opts.keepNext, alignment: opts.align, border: opts.border, shading: opts.shading, pageBreakBefore: opts.pageBreak });
const bullet = (text, opts = {}) => new Paragraph({ children: runs(text, opts), numbering: { reference: 'bullets', level: 0 }, spacing: { before: 0, after: 40 } });
const rule = (color) => ({ bottom: { style: BorderStyle.SINGLE, size: 12, color, space: 2 } });
function cell(children, width, opts = {}) {
  return new TableCell({ children, width: { size: width, type: WidthType.DXA }, columnSpan: opts.span, borders: opts.borders || borders, margins: cellMargins,
    shading: opts.fill ? { fill: opts.fill, type: ShadingType.CLEAR, color: 'auto' } : undefined, verticalAlign: opts.valign });
}
const fullRow = (children, fill) => new TableRow({ cantSplit: true, children: [cell(children, WT, { span: 2, fill })] });

function buildDocx(u) {
  const kids = [];
  // 1. cover
  kids.push(para(`Cornell Notes: ${u.title}`, { size: 36, bold: true, color: NAVY, after: 40 }));
  kids.push(para(u.subtitle, { italics: true, size: 20, after: 100 }));
  kids.push(para('Name: ______________________________   Period: ________   Date: ______________', { after: 120 }));
  kids.push(para('Learning Targets', { bold: true, color: NAVY, size: 22, after: 40 }));
  u.targets.forEach((t) => kids.push(bullet(t, { size: 20 })));
  kids.push(para(`**Essential Question:** ${u.essentialQuestion}`, { before: 80, after: 120, size: 20 }));
  kids.push(para('OUTLINE', { bold: true, color: NAVY, size: 24, border: rule(NAVY), after: 80 }));
  u.sections.forEach((s) => {
    kids.push(para(s.title, { bold: true, color: NAVY, size: 20, after: 0, keepNext: true }));
    kids.push(para(s.rows.map((r) => r.cue).join(' • '), { size: 17, indent: { left: 280 }, after: 0, keepNext: true }));
    kids.push(para(`IXL: ${s.ixlRange}`, { size: 17, color: PURPLE, indent: { left: 280 }, after: 60 }));
  });
  kids.push(para('Memory Tricks • Summary • Visual Memory Aids • Memory Tricks & Study Methods • IXL Practice Plan • Self-Test Tip', { size: 18, bold: true, color: NAVY, before: 60 }));

  // 2. Cornell table
  const rows = [new TableRow({ tableHeader: true, cantSplit: true, children: [
    cell([para('CUES / QUESTIONS', { bold: true, color: NAVY, after: 0 })], W1, { fill: 'D9E2F3' }),
    cell([para('NOTES', { bold: true, color: NAVY, after: 0 })], W2, { fill: 'D9E2F3' })] })];
  u.sections.forEach((s) => {
    rows.push(fullRow([para(s.title, { bold: true, color: NAVY, size: 24, after: 0, keepNext: true })], 'D9E2F3'));
    s.rows.forEach((r) => rows.push(new TableRow({ cantSplit: true, children: [
      cell([para(r.cue, { bold: true, color: NAVY, after: 0, keepNext: true })], W1, { fill: 'EEF3FA' }),
      cell(r.notes.map((n) => bullet(n)), W2)] })));
    const ix = [para('IXL PRACTICE (goal: SmartScore 80+)', { bold: true, color: PURPLE, size: 19, after: 30 })];
    s.ixl.forEach(([c, n]) => ix.push(bullet(`**${c}** ${n}`, { size: 19 })));
    if (s.ixlNote) ix.push(para(s.ixlNote, { size: 19, after: 0 }));
    rows.push(fullRow(ix, 'EDE4F5'));
  });
  rows.push(fullRow([para('MEMORY TRICKS', { bold: true, color: '375623', size: 22, after: 30 }), ...u.tricks.map(([n, w]) => bullet(`**${n}.** ${w}`))], 'E2EFDA'));
  rows.push(fullRow([para('SUMMARY', { bold: true, color: '7F6000', size: 22, after: 30 }), para(u.summary, { after: 0 })], 'FFF2CC'));
  kids.push(new Paragraph({ children: [], pageBreakBefore: true, spacing: { after: 0 } }));
  kids.push(new Table({ width: { size: WT, type: WidthType.DXA }, columnWidths: [W1, W2], rows }));

  // 3. Visual memory aids
  kids.push(para('VISUAL MEMORY AIDS', { bold: true, color: NAVY, size: 28, border: rule(NAVY), after: 60, pageBreak: true }));
  kids.push(para('Each panel has a diagram, one sentence saying what it shows, and the rule that goes with it. Redraw each one from memory.', { size: 19, after: 100 }));
  const vrows = [];
  for (let i = 0; i < u.visuals.length; i += 2) {
    vrows.push(new TableRow({ cantSplit: true, children: [0, 1].map((k) => {
      const v = u.visuals[i + k];
      if (!v) return cell([para('')], WT / 2, { borders: noBorders });
      const file = path.join(ROOT, 'units', u.id, 'figures', v[0]);
      const buf = fs.readFileSync(file);
      const w = buf.readUInt32BE(16), h = buf.readUInt32BE(20);
      const pw = 288, ph = Math.round((288 * h) / w);
      return cell([
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 }, children: [new D.ImageRun({ type: 'png', data: buf, transformation: { width: pw, height: ph }, altText: { title: v[0], description: v[1], name: v[0] } })] }),
        para(v[1], { size: 19, after: 30 }),
        para(v[2], { bold: true, color: NAVY, size: 20, after: 140 }),
      ], WT / 2, { borders: noBorders });
    }) }));
  }
  kids.push(new Table({ width: { size: WT, type: WidthType.DXA }, columnWidths: [WT / 2, WT / 2], rows: vrows }));

  // 4. Memory tricks & study methods
  kids.push(para('MEMORY TRICKS & STUDY METHODS', { bold: true, color: '375623', size: 28, pageBreak: true, after: 120, shading: { fill: 'E2EFDA', type: ShadingType.CLEAR, color: 'auto' } }));
  kids.push(para('Memory tricks for this unit', { bold: true, color: NAVY, size: 24, after: 60 }));
  u.tricks.forEach(([n, w]) => kids.push(bullet(`**${n}.** ${w}`)));
  kids.push(para('How to study these notes', { bold: true, color: NAVY, size: 24, before: 200, after: 60 }));
  STUDY_METHOD.forEach((s, i) => kids.push(para(`**${i + 1}.** ${s}`, { indent: { left: 280 }, after: 80 })));

  // 5. IXL plan
  kids.push(para('IXL PRACTICE PLAN', { bold: true, color: PURPLE, size: 28, border: rule(PURPLE), after: 80, pageBreak: true }));
  kids.push(para('Reach SmartScore 80+ on every skill before the test. Work top to bottom: lab and measurement basics, then vectors, then the core skills.', { after: 100 }));
  const PW = [700, 500, 1900, 4860, 1400];
  const prow = (vals, head) => new TableRow({ cantSplit: true, tableHeader: head, children: vals.map((v, i) => cell([para(v, { bold: head, color: head ? PURPLE : undefined, size: 20, after: 0, align: i < 2 ? AlignmentType.CENTER : undefined })], PW[i], { fill: head ? 'EDE4F5' : undefined })) });
  kids.push(new Table({ width: { size: WT, type: WidthType.DXA }, columnWidths: PW, rows: [prow(['Done', '#', 'Skill', 'Skill name', 'Notes section'], true), ...allIxl(u).map((x, i) => prow(['☐', String(i + 1), x.code, x.name, x.secs.join(', ')], false))] }));
  const noMatch = u.sections.filter((s) => s.ixlNote).map((s) => s.title.replace(/^\d+\.\s*/, ''));
  if (noMatch.length) kids.push(para(`**No full IXL match** (use physicsclassroom.com Concept Builders): ${noMatch.join('; ')}.`, { before: 140 }));
  kids.push(para(SELF_TEST, { italics: true, before: 140 }));

  const doc = new D.Document({
    creator: 'Physics Semester 1 Learning Project', title: `Cornell Notes: ${u.title}`,
    styles: { default: { document: { run: { font: FONT, size: 21 } } } },
    numbering: { config: [{ reference: 'bullets', levels: [{ level: 0, format: D.LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 300, hanging: 200 } } } }] }] },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      footers: { default: new D.Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
        new TextRun({ text: `${u.title} Cornell Notes | Page `, font: FONT, size: 16, color: '808080' }),
        new TextRun({ children: [D.PageNumber.CURRENT], font: FONT, size: 16, color: '808080' })] })] }) },
      children: kids,
    }],
  });
  return D.Packer.toBuffer(doc);
}

// ---------------------------------------------------------------- run
(async () => {
  for (const u of UNITS) {
    write(`units/${u.id}/README.md`, unitReadme(u));
    write(`units/${u.id}/cornell-notes.md`, cornellMd(u));
    write(`units/${u.id}/quiz.html`, quizHtml(u));
    fs.writeFileSync(path.join(ROOT, 'units', u.id, 'cornell-notes.docx'), await buildDocx(u));
    console.log('built', u.id, `(${u.sections.length} sections, ${u.quiz.length} quiz questions, ${u.practice.length} practice problems)`);
  }
  write('README.md', rootReadme());
  write('index.html', indexHtml());
  write('docs/standards-map.md', standardsMd());
  write('docs/assessment.md', assessmentMd());
  console.log('built project pages');
})();
