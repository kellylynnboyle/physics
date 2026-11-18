// Builds, for every unit in tools/content: Cornell notes (.docx), an interactive quiz (.html)
// and the unit outline (README.md). Also writes the quiz hub (index.html).
// Usage: python3 tools/diagrams.py assets/diagrams && node tools/build.js
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType,
  BorderStyle, AlignmentType, LevelFormat, ImageRun, PageBreak, Footer, PageNumber, VerticalAlign,
} = require('docx');

const ROOT = path.join(__dirname, '..');
const IMG = path.join(ROOT, 'assets', 'diagrams');
const UNITS = ['u1', 'u2', 'u3', 'u4', 'u5'].map((f) => require('./content/' + f));

const NAVY = '1F3864', PURPLE = '5B2C83', GRAY = '7F7F7F';
const FILL = { head: 'D9E2F3', cue: 'EEF3FA', ixl: 'EDE4F5', trick: 'E2EFDA', sum: 'FFF2CC' };
const FONT = 'Calibri';
const W = 9360, CUE_W = 2700, NOTE_W = 6660;

// ---------- helpers ----------
function runs(text, o = {}) {
  return text.split('**').map((part, i) => new TextRun({
    text: part, font: FONT, size: o.size || 21, bold: o.bold || i % 2 === 1,
    italics: o.italics, color: o.color,
  })).filter((r, i, a) => text.split('**')[i] !== '');
}
function P(text, o = {}) {
  return new Paragraph({
    children: runs(text, o), alignment: o.align, keepNext: o.keepNext,
    spacing: { before: o.before || 0, after: o.after === undefined ? 60 : o.after, line: o.line },
    indent: o.indent ? { left: o.indent } : undefined, border: o.border, shading: o.shading,
    numbering: o.bullet ? { reference: 'bul', level: 0 } : o.num ? { reference: o.num, level: 0 } : undefined,
  });
}
const thin = { style: BorderStyle.SINGLE, size: 4, color: 'A6A6A6' };
const borders = { top: thin, bottom: thin, left: thin, right: thin };
const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: none, bottom: none, left: none, right: none };
const margins = { top: 70, bottom: 70, left: 110, right: 110 };
function cell(children, width, fill, o = {}) {
  return new TableCell({
    children, width: { size: width, type: WidthType.DXA }, borders: o.borders || borders, margins,
    shading: fill ? { fill, type: ShadingType.CLEAR, color: 'auto' } : undefined,
    columnSpan: o.span, verticalAlign: o.valign || VerticalAlign.TOP,
  });
}
const row = (cells, o = {}) => new TableRow({ children: cells, cantSplit: true, tableHeader: o.header });
const rule = (color) => ({ bottom: { style: BorderStyle.SINGLE, size: 12, color, space: 2 } });
const pageBreak = () => new Paragraph({ children: [new PageBreak()] });
const plain = (s) => s.replace(/\*\*/g, '');

// ---------- Cornell notes (.docx) ----------
async function buildDocx(u) {
  const unitName = `Unit ${u.num} ${u.title}`;
  const kids = [];

  // Cover page
  kids.push(P(`Cornell Notes: ${unitName}`, { size: 36, bold: true, color: NAVY, after: 40 }));
  kids.push(P(u.subtitle, { italics: true, size: 20, after: 120 }));
  kids.push(P('Name: ______________________________   Period: ________   Date: ______________', { size: 20, after: 140 }));
  kids.push(P('Learning Targets', { bold: true, color: NAVY, size: 22, after: 40 }));
  u.targets.forEach((t) => kids.push(P(t, { bullet: true, size: 19, after: 10 })));
  kids.push(P('Essential Question', { bold: true, color: NAVY, size: 22, before: 100, after: 40 }));
  kids.push(P(u.eq, { italics: true, size: 20, after: 120 }));
  kids.push(P('OUTLINE', { bold: true, color: NAVY, size: 24, border: rule(NAVY), after: 80 }));
  u.sections.forEach((s) => {
    kids.push(P(s.title, { bold: true, color: NAVY, size: 20, after: 0, keepNext: true }));
    kids.push(P(s.rows.map((r) => r[0]).join(' • '), { size: 17, indent: 360, after: 0, keepNext: true }));
    kids.push(P(s.ixlShort, { size: 17, indent: 360, color: PURPLE, after: 50 }));
  });
  kids.push(P('Memory Tricks • Summary • Visual Memory Aids • Memory Tricks & Study Methods • IXL Practice Plan • Self-Test Tip', { size: 17, bold: true, color: NAVY, before: 40 }));
  kids.push(pageBreak());

  // Cornell table
  const rows = [row([
    cell([P('CUES / QUESTIONS', { bold: true, color: NAVY, size: 20, after: 0 })], CUE_W, FILL.head),
    cell([P('NOTES', { bold: true, color: NAVY, size: 20, after: 0 })], NOTE_W, FILL.head),
  ], { header: true })];
  u.sections.forEach((s) => {
    rows.push(row([cell([P(s.title, { bold: true, color: NAVY, size: 24, after: 0, keepNext: true })], W, FILL.head, { span: 2 })]));
    s.rows.forEach(([cue, notes], ri) => {
      const last = ri === s.rows.length - 1; // keep the last row with its IXL box
      rows.push(row([
        cell([P(cue, { bold: true, color: NAVY, size: 20, after: 0, keepNext: last })], CUE_W, FILL.cue),
        cell(notes.map((n) => P(n, { bullet: true, after: 30, keepNext: last })), NOTE_W),
      ]));
    });
    const ixlKids = [P('IXL PRACTICE (goal: SmartScore 80+)', { bold: true, color: PURPLE, size: 19, after: 30 })];
    if (s.ixl.length) s.ixl.forEach(([code, name]) => ixlKids.push(P(`**${code}** ${name}`, { bullet: true, size: 19, after: 10 })));
    else ixlKids.push(P(s.note, { size: 19, after: 10 }));
    rows.push(row([cell(ixlKids, W, FILL.ixl, { span: 2 })]));
  });
  const trickKids = [P('MEMORY TRICKS', { bold: true, color: NAVY, size: 22, after: 30, keepNext: true })];
  u.tricks.forEach(([t]) => trickKids.push(P(t, { bullet: true, after: 10, keepNext: true })));
  rows.push(row([cell(trickKids, W, FILL.trick, { span: 2 })]));
  rows.push(row([cell([P('SUMMARY', { bold: true, color: NAVY, size: 22, after: 30 }), P(u.summary, { after: 0 })], W, FILL.sum, { span: 2 })]));
  kids.push(new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [CUE_W, NOTE_W], rows }));

  // Visual memory aids
  kids.push(pageBreak());
  kids.push(P('VISUAL MEMORY AIDS', { bold: true, color: NAVY, size: 28, border: rule(NAVY), after: 60 }));
  kids.push(P('Each panel has a diagram, one sentence saying what it shows, and the rule that goes with it. Redraw each one from memory.', { italics: true, size: 19, after: 120 }));
  const vrows = [];
  for (let i = 0; i < u.visuals.length; i += 2) {
    vrows.push(new TableRow({
      cantSplit: true,
      children: u.visuals.slice(i, i + 2).map(([file, sentence, ruleText]) => cell([
        new Paragraph({
          alignment: AlignmentType.CENTER, spacing: { after: 60 },
          children: [new ImageRun({ type: 'png', data: fs.readFileSync(path.join(IMG, file)), transformation: { width: 290, height: 209 } })],
        }),
        P(sentence, { size: 19, after: 40 }),
        P(ruleText, { bold: true, color: NAVY, size: 21, align: AlignmentType.CENTER, after: 160 }),
      ], W / 2, undefined, { borders: noBorders })),
    }));
  }
  kids.push(new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W / 2, W / 2], rows: vrows }));

  // Memory tricks & study methods
  kids.push(pageBreak());
  kids.push(P('MEMORY TRICKS & STUDY METHODS', { bold: true, color: NAVY, size: 28, after: 140, shading: { fill: FILL.trick, type: ShadingType.CLEAR, color: 'auto' } }));
  kids.push(P('Memory tricks and rules of thumb', { bold: true, color: NAVY, size: 23, after: 80 }));
  u.tricks.forEach(([t, when]) => {
    kids.push(P(t, { bold: true, bullet: true, after: 10, keepNext: true }));
    kids.push(P(`Use it for: ${when}`, { indent: 720, size: 20, after: 90 }));
  });
  kids.push(P('Study method', { bold: true, color: NAVY, size: 23, before: 160, after: 80 }));
  [
    'Cover the Notes column and answer each cue question aloud.',
    'Uncover, check your answer, and mark every cue you missed.',
    'Redraw each Visual Memory Aid from memory, with labels and the rule.',
    'Repeat tomorrow and again a few days later. Recall spread over several days builds memory that rereading does not.',
    'Finish the IXL Practice Plan to SmartScore 80+ and take the unit quiz before the test.',
  ].forEach((s) => kids.push(P(s, { num: 'steps', after: 60 })));

  // IXL practice plan
  kids.push(pageBreak());
  kids.push(P('IXL PRACTICE PLAN', { bold: true, color: PURPLE, size: 28, border: rule(PURPLE), after: 80 }));
  kids.push(P('Reach SmartScore 80+ on every skill before the unit test. Work from top to bottom and tick each one off.', { size: 20, after: 120 }));
  const pw = [700, 500, 1900, 4860, 1400];
  const seen = new Set();
  const plan = [];
  const ordered = [...u.sections.filter((s) => s.lab), ...u.sections.filter((s) => !s.lab)];
  ordered.forEach((s) => s.ixl.forEach(([code, name]) => {
    if (seen.has(code + name)) return;
    seen.add(code + name);
    plan.push([code, name, s.title.split('.')[0]]);
  }));
  const hc = (t, w) => cell([P(t, { bold: true, color: PURPLE, size: 19, after: 0 })], w, FILL.ixl);
  const prow = [row([hc('Done', pw[0]), hc('#', pw[1]), hc('Skill', pw[2]), hc('Skill name', pw[3]), hc('Notes section', pw[4])], { header: true })];
  plan.forEach(([code, name, sec], i) => prow.push(row([
    cell([P('☐', { size: 22, after: 0, align: AlignmentType.CENTER })], pw[0]),
    cell([P(String(i + 1), { size: 19, after: 0 })], pw[1]),
    cell([P(code, { size: 19, bold: true, after: 0 })], pw[2]),
    cell([P(name, { size: 19, after: 0 })], pw[3]),
    cell([P(`Section ${sec}`, { size: 19, after: 0 })], pw[4]),
  ])));
  kids.push(new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: pw, rows: prow }));
  kids.push(P(`**No IXL match:** ${u.noIxl}`, { size: 20, before: 160, after: 100 }));
  kids.push(P('Self-test tip: cover the Notes column, answer every cue aloud, then redo each worked example on blank paper without looking. Anything you cannot do from memory goes on tomorrow\'s list.', { italics: true, size: 20 }));

  const doc = new Document({
    creator: 'Physics learning project', title: `Cornell Notes: ${unitName}`,
    styles: { default: { document: { run: { font: FONT, size: 21 } } } },
    numbering: { config: [
      { reference: 'bul', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 300, hanging: 200 } } } }] },
      { reference: 'steps', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 500, hanging: 320 } } } }] },
    ] },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
        new TextRun({ text: `${unitName} Cornell Notes | Page `, font: FONT, size: 16, color: GRAY }),
        new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: GRAY }),
      ] })] }) },
      children: kids,
    }],
  });
  const out = path.join(ROOT, 'units', u.id, `cornell-notes-${u.id}.docx`);
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  return plan;
}

// ---------- Unit outline (README.md) ----------
function buildReadme(u, plan) {
  const L = [];
  const nav = UNITS.map((x) => (x === u ? `**${x.num}. ${x.title}**` : `[${x.num}. ${x.title}](../${x.id}/README.md)`)).join(' · ');
  L.push(`# Unit ${u.num}: ${u.title}`, '', `[Project home](../../README.md) · ${nav}`, '');
  L.push(`**Pacing:** ${u.weeks} · **Essential question:** ${u.eq}`, '', u.overview, '');
  L.push('## Materials in this folder', '',
    `| File | What it is |`, `|---|---|`,
    `| [cornell-notes-${u.id}.docx](cornell-notes-${u.id}.docx) | Printable Cornell notes: cue questions, notes with worked examples, visual memory aids, study method, IXL practice plan |`,
    `| [quiz.html](quiz.html) | Interactive quiz on the ${u.quiz.length} most commonly missed ideas, with an explanation after every answer |`, '');
  L.push('## Standards (CA NGSS)', '');
  u.ngss.forEach(([c, t]) => L.push(`- **${c}** – ${t}`));
  L.push('', '## Key concepts to master', '');
  u.concepts.forEach((c) => L.push(`- ${c}`));
  L.push('', '## Learning objectives and how each is assessed', '', '| # | Students can… | Evidence |', '|---|---|---|');
  u.objectives.forEach(([o, e], i) => L.push(`| ${u.num}.${i + 1} | ${o} | ${e} |`));
  L.push('', `Score each objective on the 4-point scale in [Assessment and progress tracking](../../docs/assessment-and-tracking.md). The unit is mastered when every objective is at 3 or above.`, '');
  L.push('## Cue questions (self-test)', '', 'Cover the answers in the Cornell notes and answer these aloud.', '');
  u.sections.forEach((s) => {
    L.push(`**${s.title}**`, '');
    s.rows.forEach((r) => L.push(`- ${r[0]}`));
    L.push('');
  });
  L.push('## Visual memory aids', '', '| | |', '|---|---|');
  for (let i = 0; i < u.visuals.length; i += 2) {
    const c = u.visuals.slice(i, i + 2).map(([f, s, r]) => `<img src="../../assets/diagrams/${f}" width="340" alt="${s}"><br>${s}<br>**${r}**`);
    L.push(`| ${c.join(' | ')} |`);
  }
  L.push('', '## Most commonly missed ideas', '', `Each of these is a question in the [interactive quiz](quiz.html).`, '');
  u.quiz.forEach((q, i) => L.push(`${i + 1}. ${q.trap}`));
  L.push('', '## Learning resources', '');
  u.resources.forEach(([n, url, note]) => L.push(`- [${n}](${url}) – ${note}`));
  L.push('', '## IXL practice plan (goal: SmartScore 80+)', '', '| Done | Skill | Skill name |', '|---|---|---|');
  plan.forEach(([c, n]) => L.push(`| ☐ | ${c} | ${n} |`));
  L.push('', `*No IXL match:* ${u.noIxl}`, '');
  L.push('## Practice problems', '', 'Use g = 9.8 m/s². Try each one before opening the answer.', '');
  u.practice.forEach(([q, a], i) => L.push(`${i + 1}. ${q}`, `   <details><summary>Answer</summary>${a.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</details>`, ''));
  L.push('## Labs and investigations', '');
  u.labs.forEach((x) => L.push(`- ${x}`));
  L.push('', '## Real-world applications', '');
  u.apps.forEach((x) => L.push(`- ${x}`));
  L.push('', '## Unit checklist', '', '**Student**', '',
    '- [ ] Cornell notes read; every cue question answered aloud from memory',
    '- [ ] All visual memory aids redrawn from memory',
    '- [ ] Practice problems completed and checked',
    '- [ ] IXL practice plan at SmartScore 80+',
    '- [ ] Interactive quiz at 80% or higher',
    '- [ ] Lab report submitted',
    '- [ ] Unit test taken; missed objectives retested', '',
    '**Instructor**', '',
    '- [ ] Learning targets and essential question posted',
    '- [ ] Quiz given as a pre-assessment to find misconceptions',
    '- [ ] Lab(s) run and scored with the lab rubric',
    '- [ ] Quiz repeated as a post-assessment; results recorded in the tracker',
    '- [ ] Reteach plan made for any objective below 3', '');
  fs.writeFileSync(path.join(ROOT, 'units', u.id, 'README.md'), L.join('\n'));
}

// ---------- Interactive quiz (quiz.html) ----------
const QUIZ_CSS = fs.readFileSync(path.join(__dirname, 'quiz.css'), 'utf8');
const QUIZ_JS = fs.readFileSync(path.join(__dirname, 'quiz.js'), 'utf8');
function buildQuiz(u) {
  const data = { id: u.id, title: u.title, num: u.num, questions: u.quiz };
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Unit ${u.num} ${u.title} Quiz</title>
<style>
${QUIZ_CSS}</style>
</head>
<body>
<main>
  <p class="crumb"><a href="../../index.html">All quizzes</a> · Unit ${u.num}</p>
  <h1>${u.title}: most-missed questions</h1>
  <p class="lede">${u.quiz.length} questions built on the ideas students most often get wrong. Pick an answer to see why it is right or wrong. Aim for 80% or higher.</p>
  <div id="app"></div>
  <noscript>This quiz needs JavaScript. The same questions are listed in this unit's README.</noscript>
</main>
<script>
const QUIZ = ${JSON.stringify(data).replace(/</g, '\\u003c')};
${QUIZ_JS}</script>
</body>
</html>
`;
  fs.writeFileSync(path.join(ROOT, 'units', u.id, 'quiz.html'), html);
}

function buildHub() {
  const cards = UNITS.map((u) => `    <a class="card" href="units/${u.id}/quiz.html"><span class="n">Unit ${u.num}</span><strong>${u.title}</strong><span>${u.quiz.length} questions · ${u.weeks}</span></a>`).join('\n');
  fs.writeFileSync(path.join(ROOT, 'index.html'), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Physics Quizzes</title>
<style>
${QUIZ_CSS}</style>
</head>
<body>
<main>
  <h1>Grade 11 Physics: Semester 1 quizzes</h1>
  <p class="lede">One quiz per unit, built on the ideas students most often get wrong. Each answer comes with an explanation.</p>
  <div class="cards">
${cards}
  </div>
</main>
</body>
</html>
`);
}

(async () => {
  for (const u of UNITS) {
    fs.mkdirSync(path.join(ROOT, 'units', u.id), { recursive: true });
    const plan = await buildDocx(u);
    buildReadme(u, plan);
    buildQuiz(u);
    console.log(`built ${u.id}: ${u.sections.length} sections, ${u.quiz.length} quiz questions, ${plan.length} IXL skills`);
  }
  buildHub();
})();
