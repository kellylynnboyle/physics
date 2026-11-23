// Build the Cornell Notes .docx for each unit from tools/units/*.js
// Usage: node tools/build_notes.js   (requires the `docx` npm package)
const fs = require('fs');
const path = require('path');
const D = require('docx');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun, Footer, PageNumber, PageBreak,
  AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType, VerticalAlign } = D;

const ROOT = path.join(__dirname, '..');
const UNITS = require('./units');
const NAVY = '1F3864', PURPLE = '5B2C83', BLUE = 'D9E2F3', CUE = 'EEF3FA', IXLFILL = 'EDE4F5', GREEN = 'E2EFDA', YELLOW = 'FFF2CC', GRAY = '808080';
const W1 = 2700, W2 = 6660, WT = 9360;
const thin = { style: BorderStyle.SINGLE, size: 4, color: '8EA9DB' };
const borders = { top: thin, bottom: thin, left: thin, right: thin };
const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: none, bottom: none, left: none, right: none };
const margins = { top: 70, bottom: 70, left: 110, right: 110 };

// "**bold** text" -> TextRuns
function runs(text, base = {}) {
  return text.split('**').filter((s, i) => s !== '' || i === 0).map((s, i) => new TextRun({ text: s, bold: i % 2 === 1 || base.bold, ...Object.fromEntries(Object.entries(base).filter(([k]) => k !== 'bold')) })).filter(r => r);
}
const P = (text, o = {}) => new Paragraph({ spacing: { before: o.before ?? 0, after: o.after ?? 60 }, alignment: o.align, keepNext: o.keepNext, indent: o.indent, border: o.border, shading: o.shading, children: runs(text, o.run || {}) });
const bullet = (text, run) => new Paragraph({ numbering: { reference: 'bullets', level: 0 }, spacing: { before: 0, after: 40 }, children: runs(text, run || {}) });
const cell = (children, width, o = {}) => new TableCell({ children, width: { size: width, type: WidthType.DXA }, borders: o.borders || borders, margins, columnSpan: o.span, verticalAlign: o.valign, shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: 'auto' } : undefined });
const row = (cells, o = {}) => new TableRow({ children: cells, cantSplit: true, tableHeader: o.header });
const rule = (color) => ({ bottom: { style: BorderStyle.SINGLE, size: 12, color, space: 2 } });

function ixlRanges(list) {
  const groups = new Map(); const extra = [];
  for (const [code] of list) {
    const m = code.match(/^(Physics|Precalculus|Grade 8) ([A-Z]+)\.(\d+)$/);
    if (!m) { const e = code.replace(', unnumbered', ''); if (!extra.includes(e)) extra.push(e); continue; }
    const key = `${m[1]}|${m[2]}`; if (!groups.has(key)) groups.set(key, new Set()); groups.get(key).add(+m[3]);
  }
  const bySubject = new Map();
  for (const [key, set] of groups) {
    const [subj, sec] = key.split('|'); const nums = [...set].sort((a, b) => a - b); const parts = [];
    for (let i = 0; i < nums.length; i++) { let j = i; while (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) j++; parts.push(i === j ? `${sec}.${nums[i]}` : `${sec}.${nums[i]}–${nums[j]}`); i = j; }
    if (!bySubject.has(subj)) bySubject.set(subj, []); bySubject.get(subj).push(...parts);
  }
  return [...[...bySubject].map(([s, p]) => `${s} ${p.join(', ')}`), ...extra].join('; ');
}

function pngSize(file) { const b = fs.readFileSync(file); return { w: b.readUInt32BE(16), h: b.readUInt32BE(20), data: b }; }

function build(u) {
  const body = [];
  // ---------- Cover ----------
  body.push(P(`Cornell Notes: ${u.title}`, { run: { bold: true, size: 36, color: NAVY }, after: 40 }));
  body.push(P(u.subtitle, { run: { italics: true, size: 20 }, after: 100 }));
  body.push(P('Name: ______________________________    Period: ________    Date: ______________', { after: 120 }));
  body.push(P('Learning Targets', { run: { bold: true, color: NAVY, size: 22 }, after: 40 }));
  u.objectives.forEach(([id, t]) => body.push(bullet(`**${id}** ${t}`, { size: 19 })));
  body.push(P('Essential Question', { run: { bold: true, color: NAVY, size: 22 }, before: 100, after: 40 }));
  body.push(P(u.essentialQuestion, { run: { italics: true }, after: 120 }));
  body.push(P('OUTLINE', { run: { bold: true, color: NAVY, size: 24 }, border: rule(NAVY), after: 80 }));
  u.sections.forEach(s => {
    body.push(P(s.title, { run: { bold: true, color: NAVY, size: 20 }, after: 10, keepNext: true }));
    body.push(P(s.rows.map(r => r.c).join(' • '), { run: { size: 17 }, indent: { left: 280 }, after: 10, keepNext: s.ixl.length > 0 }));
    if (s.ixl.length) body.push(P(`IXL: ${ixlRanges(s.ixl)}`, { run: { size: 17, color: PURPLE }, indent: { left: 280 }, after: 60 }));
    else body.push(P('IXL: none; see Physics Classroom Concept Builders', { run: { size: 17, color: PURPLE }, indent: { left: 280 }, after: 60 }));
  });
  body.push(P('Memory Tricks • Summary • Visual Memory Aids • Memory Tricks & Study Methods • IXL Practice Plan • Self-Test Tip', { run: { size: 17, bold: true, color: NAVY }, before: 40 }));
  body.push(new Paragraph({ children: [new PageBreak()] }));

  // ---------- Cornell table ----------
  const rowsT = [row([cell([P('CUES / QUESTIONS', { run: { bold: true, color: NAVY }, after: 0 })], W1, { fill: BLUE }), cell([P('NOTES', { run: { bold: true, color: NAVY }, after: 0 })], W2, { fill: BLUE })], { header: true })];
  u.sections.forEach(s => {
    rowsT.push(row([cell([P(s.title, { run: { bold: true, color: NAVY, size: 24 }, after: 0, keepNext: true })], WT, { span: 2, fill: BLUE })]));
    s.rows.forEach((r, ri) => rowsT.push(row([
      // keep only the last cue row with the IXL box, so the box is never orphaned
      cell([P(r.c, { run: { bold: true, color: NAVY }, after: 0, keepNext: ri === s.rows.length - 1 })], W1, { fill: CUE }),
      cell(r.n.map(l => bullet(l)), W2),
    ])));
    const ixl = [P('IXL PRACTICE (goal: SmartScore 80+)', { run: { bold: true, color: PURPLE }, after: 40 })];
    s.ixl.forEach(([c, n]) => ixl.push(bullet(`**${c}** ${n}`)));
    if (s.ixlNote) ixl.push(P(s.ixlNote, { run: { italics: true }, after: 0 }));
    rowsT.push(row([cell(ixl, WT, { span: 2, fill: IXLFILL })]));
  });
  rowsT.push(row([cell([P('MEMORY TRICKS', { run: { bold: true, color: '375623' }, after: 40 }), ...u.tricks.map(([t]) => bullet(t))], WT, { span: 2, fill: GREEN })]));
  rowsT.push(row([cell([P('SUMMARY', { run: { bold: true, color: '7F6000' }, after: 40 }), P(u.summary, { after: 0 })], WT, { span: 2, fill: YELLOW })]));
  body.push(new Table({ width: { size: WT, type: WidthType.DXA }, columnWidths: [W1, W2], rows: rowsT }));

  // ---------- Visual Memory Aids ----------
  body.push(new Paragraph({ children: [new PageBreak()] }));
  body.push(P('VISUAL MEMORY AIDS', { run: { bold: true, color: NAVY, size: 28 }, border: rule(NAVY), after: 60 }));
  body.push(P('Each panel has a diagram, what it shows, and the rule that goes with it. Redraw each one from memory when you study.', { run: { italics: true }, after: 100 }));
  const HALF = WT / 2;
  const panel = (v) => {
    if (!v) return cell([P('', { after: 0 })], HALF, { borders: noBorders });
    const [img, says, ruleText] = v; const s = pngSize(path.join(ROOT, 'assets', 'diagrams', img + '.png'));
    const w = 285, h = Math.round(w * s.h / s.w);
    return cell([
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 }, children: [new ImageRun({ type: 'png', data: s.data, transformation: { width: w, height: h }, altText: { title: img, description: says, name: img } })] }),
      P(says, { run: { size: 19 }, after: 30 }),
      P(`**Rule:** ${ruleText}`, { run: { size: 19, color: NAVY }, after: 160 }),
    ], HALF, { borders: noBorders });
  };
  const vr = [];
  for (let i = 0; i < u.visuals.length; i += 2) vr.push(row([panel(u.visuals[i]), panel(u.visuals[i + 1])]));
  body.push(new Table({ width: { size: WT, type: WidthType.DXA }, columnWidths: [HALF, HALF], rows: vr }));

  // ---------- Memory Tricks & Study Methods ----------
  body.push(new Paragraph({ children: [new PageBreak()] }));
  body.push(P('MEMORY TRICKS & STUDY METHODS', { run: { bold: true, color: '375623', size: 28 }, shading: { fill: GREEN, type: ShadingType.CLEAR, color: 'auto' }, after: 120 }));
  body.push(P('Rules of thumb for this unit', { run: { bold: true, color: NAVY, size: 22 }, after: 60 }));
  u.tricks.forEach(([t, when]) => { body.push(P(t, { run: { bold: true }, after: 10, keepNext: true })); body.push(P(when, { indent: { left: 280 }, after: 90 })); });
  body.push(P('How to study from these notes', { run: { bold: true, color: NAVY, size: 22 }, before: 120, after: 60 }));
  [
    '**Cover the Notes column** and answer each cue question aloud.',
    '**Check** your answer against the notes and mark every cue you missed.',
    '**Redraw each Visual Memory Aid** from memory, with its labels and its rule.',
    '**Repeat the next day and again a few days later.** Recall spread over several days builds retention that rereading does not.',
    '**Finish the IXL Practice Plan** to SmartScore 80+ and score 80% or better on the unit\'s Most-Missed Questions quiz before the test.',
  ].forEach(t => body.push(new Paragraph({ numbering: { reference: 'steps', level: 0 }, spacing: { after: 70 }, children: runs(t) })));

  // ---------- IXL Practice Plan ----------
  body.push(new Paragraph({ children: [new PageBreak()] }));
  body.push(P('IXL PRACTICE PLAN', { run: { bold: true, color: PURPLE, size: 28 }, border: rule(PURPLE), after: 80 }));
  body.push(P('Reach **SmartScore 80+** on each skill before the unit test. Check the box when you get there. Work from top to bottom.', { after: 100 }));
  const plan = []; const seen = new Map();
  u.sections.forEach((s, si) => s.ixl.forEach(([code, name]) => {
    const key = /unnumbered/.test(code) ? name : code; const nm = name.replace(/ \(free-fall items\)$/, '');
    if (seen.has(key)) { seen.get(key).secs.push(si + 1); return; }
    const isLab = /^\d+\. Labs/.test(s.title); const isVec = /vector/i.test(name);
    const e = { code: code.replace(', unnumbered', ''), name: nm, secs: [si + 1], grp: isLab ? 0 : isVec ? 1 : 2, ord: plan.length }; seen.set(key, e); plan.push(e);
  }));
  plan.sort((a, b) => a.grp - b.grp || a.ord - b.ord);
  const PW = [700, 500, 1900, 4860, 1400];
  const hc = (t, w) => cell([P(t, { run: { bold: true, color: PURPLE }, after: 0 })], w, { fill: IXLFILL });
  const pr = [row(['Done', '#', 'Skill', 'Skill name', 'Notes section'].map((t, i) => hc(t, PW[i])), { header: true })];
  plan.forEach((e, i) => pr.push(row([
    cell([P('☐', { align: AlignmentType.CENTER, after: 0, run: { size: 24 } })], PW[0]), cell([P(String(i + 1), { after: 0 })], PW[1]),
    cell([P(e.code, { run: { bold: true }, after: 0 })], PW[2]), cell([P(e.name, { after: 0 })], PW[3]), cell([P([...new Set(e.secs)].join(', '), { after: 0 })], PW[4]),
  ])));
  body.push(new Table({ width: { size: WT, type: WidthType.DXA }, columnWidths: PW, rows: pr }));
  body.push(P(`**No IXL match:** ${u.noIxl}`, { before: 140, after: 80 }));
  body.push(P('Skill codes were copied from the live IXL pages (ixl.com/science/physics, ixl.com/math/precalculus, ixl.com/science/grade-8) in November 2026. IXL renumbers skills from time to time, so search by skill name if a code does not match. Skills marked "new" had no number on the live page.', { run: { size: 17, color: GRAY }, after: 100 }));
  body.push(P('Self-test tip: cover the Notes column, answer each cue aloud, then redo every worked example on blank paper without looking. If you cannot explain a step, that is the step to study.', { run: { italics: true } }));

  const doc = new Document({
    creator: 'Physics course project', title: `Cornell Notes: ${u.title}`,
    styles: { default: { document: { run: { font: 'Calibri', size: 21 } } } },
    numbering: { config: [
      { reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 300, hanging: 200 } } } }] },
      { reference: 'steps', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 300 } } } }] },
    ] },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${u.title} Cornell Notes | Page `, size: 16, color: GRAY }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: GRAY })] })] }) },
      children: body,
    }],
  });
  const out = path.join(ROOT, u.id, `Cornell-Notes-${u.title.replace(/'/g, '').replace(/[^A-Za-z]+/g, '-')}.docx`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  return Packer.toBuffer(doc).then(b => { fs.writeFileSync(out, b); console.log('wrote', path.relative(ROOT, out)); });
}

Promise.all(UNITS.map(build)).catch(e => { console.error(e); process.exit(1); });
