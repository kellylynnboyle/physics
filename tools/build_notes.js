// Builds units/<unit>/cornell-notes.docx for every unit from content/*.js
// Run: node tools/build_notes.js   (needs the "docx" npm package)
const fs = require('fs');
const path = require('path');
const D = require('docx');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun, Footer, PageNumber, PageBreak,
  AlignmentType, WidthType, ShadingType, BorderStyle, LevelFormat, VerticalAlign } = D;

const ROOT = path.join(__dirname, '..');
const units = require('./units');
const NAVY = '1F3864', PURPLE = '5B2C83', FONT = 'Calibri';
const W_CUE = 2700, W_NOTE = 6660, W_ALL = 9360;

// "**bold** and v_{x}" -> TextRuns
function runs(text, o = {}) {
  const out = [];
  String(text).split('**').forEach((part, i) => {
    const bold = o.bold || i % 2 === 1;
    part.split(/_\{([^}]*)\}/).forEach((seg, j) => {
      if (seg === '') return;
      out.push(new TextRun({ text: seg, bold, italics: o.italics, color: o.color, size: o.size || 21, font: FONT, subScript: j % 2 === 1 }));
    });
  });
  return out;
}
const P = (text, o = {}) => new Paragraph({ children: runs(text, o), spacing: { before: o.before || 0, after: o.after == null ? 60 : o.after }, alignment: o.align, keepNext: o.keepNext, indent: o.indent, border: o.border });
const bullet = (text, o = {}) => new Paragraph({ children: runs(text, o), numbering: { reference: 'bullets', level: 0 }, spacing: { before: 0, after: 40 } });
const rule = (color) => ({ bottom: { style: BorderStyle.SINGLE, size: 12, color, space: 2 } });
const line = { style: BorderStyle.SINGLE, size: 4, color: '8EA9DB' };
const borders = { top: line, bottom: line, left: line, right: line };
const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: none, bottom: none, left: none, right: none };
const margins = { top: 70, bottom: 70, left: 110, right: 110 };

function cell(children, width, fill, span) {
  return new TableCell({ children, width: { size: width, type: WidthType.DXA }, columnSpan: span, borders, margins,
    shading: fill ? { fill, type: ShadingType.CLEAR, color: 'auto' } : undefined });
}
const fullRow = (children, fill) => new TableRow({ cantSplit: true, children: [cell(children, W_ALL, fill, 2)] });

function compressIxl(list) {
  const groups = new Map();
  list.forEach(([code]) => {
    const m = code.match(/^(.*) ([A-Z]+)\.(\d+)$/);
    const course = m ? m[1] : code.replace(/ [A-Z]+ \(New\)$/, '');
    if (!groups.has(course)) groups.set(course, []);
    groups.get(course).push(m ? { letter: m[2], n: +m[3] } : { raw: code.slice(course.length + 1) });
  });
  const parts = [];
  groups.forEach((items, course) => {
    const bits = [];
    const byLetter = new Map();
    items.forEach(it => { if (it.raw) bits.push(it.raw); else { if (!byLetter.has(it.letter)) byLetter.set(it.letter, []); byLetter.get(it.letter).push(it.n); } });
    byLetter.forEach((ns, letter) => {
      ns = [...new Set(ns)].sort((a, b) => a - b);
      let i = 0;
      while (i < ns.length) { let j = i; while (j + 1 < ns.length && ns[j + 1] === ns[j] + 1) j++; bits.push(i === j ? `${letter}.${ns[i]}` : `${letter}.${ns[i]}–${ns[j]}`); i = j + 1; }
    });
    parts.push(`${course} ${bits.join(', ')}`);
  });
  return parts.join('; ');
}

function pngSize(file) { const b = fs.readFileSync(file); return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) }; }

function build(u) {
  const dir = path.join(ROOT, 'units', u.id);
  const kids = [];
  // ---- Cover ----
  kids.push(P(`Cornell Notes: ${u.title}`, { bold: true, color: NAVY, size: 36, after: 40 }));
  kids.push(P(u.subtitle, { italics: true, size: 19, after: 100 }));
  kids.push(P('Name: ______________________________   Period: ________   Date: ______________', { size: 20, after: 140 }));
  kids.push(P('Learning Targets', { bold: true, color: NAVY, size: 22, after: 40 }));
  u.targets.forEach(t => kids.push(bullet(t, { size: 19 })));
  kids.push(P(`**Essential Question:** ${u.essential}`, { size: 20, before: 80, after: 140 }));
  kids.push(P('OUTLINE', { bold: true, color: NAVY, size: 24, after: 80, border: rule(NAVY) }));
  u.sections.forEach((s, i) => {
    kids.push(P(`${i + 1}. ${s.title}`, { bold: true, color: NAVY, size: 20, after: 10, before: 50 }));
    kids.push(P(s.rows.map(r => r[0]).join(' • '), { size: 17, after: 10, indent: { left: 300 } }));
    kids.push(P(s.ixl.length ? `IXL: ${compressIxl(s.ixl)}` : 'IXL: none (physicsclassroom.com Concept Builders)', { size: 17, color: PURPLE, after: 20, indent: { left: 300 } }));
  });
  kids.push(P('Memory Tricks • Summary • Visual Memory Aids • Memory Tricks & Study Methods • IXL Practice Plan • Self-Test Tip', { size: 17, italics: true, before: 100, after: 0 }));
  kids.push(new Paragraph({ children: [new PageBreak()] }));

  // ---- Cornell table ----
  const rows = [new TableRow({ tableHeader: true, cantSplit: true, children: [
    cell([P('CUES / QUESTIONS', { bold: true, color: NAVY, size: 20, after: 0 })], W_CUE, 'D9E2F3'),
    cell([P('NOTES', { bold: true, color: NAVY, size: 20, after: 0 })], W_NOTE, 'D9E2F3')] })];
  u.sections.forEach((s, i) => {
    rows.push(fullRow([P(`${i + 1}. ${s.title}`, { bold: true, color: NAVY, size: 24, after: 0, keepNext: true })], 'D9E2F3'));
    s.rows.forEach(([cue, notes]) => rows.push(new TableRow({ cantSplit: true, children: [
      cell([P(cue, { bold: true, color: NAVY, size: 20, after: 0, keepNext: true })], W_CUE, 'EEF3FA'),
      cell(notes.map(n => bullet(n)), W_NOTE)] })));
    const ix = [P('IXL PRACTICE (goal: SmartScore 80+)', { bold: true, color: PURPLE, size: 19, after: 40 })];
    s.ixl.forEach(([code, name]) => ix.push(bullet(`**${code}** ${name}`, { size: 19 })));
    if (s.noIxl) ix.push(P(s.noIxl, { size: 19, italics: true, after: 0 }));
    rows.push(fullRow(ix, 'EDE4F5'));
  });
  rows.push(fullRow([P('MEMORY TRICKS', { bold: true, color: '375623', size: 22, after: 40 }), ...u.mnemonics.map(m => bullet(m[0]))], 'E2EFDA'));
  rows.push(fullRow([P('SUMMARY', { bold: true, color: '7F6000', size: 22, after: 40 }), P(u.summary, { after: 0 })], 'FFF2CC'));
  kids.push(new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: [W_CUE, W_NOTE], rows }));

  // ---- Visual memory aids ----
  kids.push(new Paragraph({ children: [new PageBreak()] }));
  kids.push(P('VISUAL MEMORY AIDS', { bold: true, color: NAVY, size: 28, after: 60, border: rule(NAVY) }));
  kids.push(P('Each panel has a diagram, one sentence saying what it shows, and the rule that goes with it. Redraw each one from memory.', { italics: true, size: 19, after: 120 }));
  const vcell = (v) => {
    if (!v) return new TableCell({ children: [P('')], width: { size: 4680, type: WidthType.DXA }, borders: noBorders });
    const f = path.join(dir, 'img', v.img); const { w, h } = pngSize(f); const W = 285;
    return new TableCell({ width: { size: 4680, type: WidthType.DXA }, borders: noBorders, margins: { top: 80, bottom: 160, left: 100, right: 100 }, children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [new ImageRun({ type: 'png', data: fs.readFileSync(f), transformation: { width: W, height: Math.round(W * h / w) }, altText: { title: v.img, description: v.caption, name: v.img } })] }),
      P(v.caption, { size: 19, after: 30 }),
      P(`**Rule:** ${v.rule}`, { size: 19, color: NAVY, after: 0 })] });
  };
  const vrows = [];
  for (let i = 0; i < u.visuals.length; i += 2) vrows.push(new TableRow({ cantSplit: true, children: [vcell(u.visuals[i]), vcell(u.visuals[i + 1])] }));
  kids.push(new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: [4680, 4680], rows: vrows }));

  // ---- Memory tricks & study methods ----
  kids.push(new Paragraph({ children: [new PageBreak()] }));
  kids.push(new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: [W_ALL], rows: [new TableRow({ children: [
    new TableCell({ width: { size: W_ALL, type: WidthType.DXA }, borders: noBorders, margins, shading: { fill: 'E2EFDA', type: ShadingType.CLEAR, color: 'auto' },
      children: [P('MEMORY TRICKS & STUDY METHODS', { bold: true, color: '375623', size: 28, after: 0 })] })] })] }));
  kids.push(P('Memory tricks and when to use them', { bold: true, color: NAVY, size: 23, before: 200, after: 80 }));
  u.mnemonics.forEach(m => { kids.push(P(`**${m[0]}**`, { after: 10 })); kids.push(P(`Use it: ${m[1]}`, { size: 19, after: 90, indent: { left: 300 } })); });
  kids.push(P('Study method', { bold: true, color: NAVY, size: 23, before: 160, after: 80 }));
  ['Cover the Notes column and answer each cue question aloud.',
    'Uncover, check, and mark every cue you missed.',
    'Redraw each Visual Memory Aid from memory, with its rule.',
    'Repeat the next day and again a few days later. Recall spread over several days builds memory that rereading does not.',
    'Finish the IXL Practice Plan to SmartScore 80+ before the test, then take the unit quiz and retry the questions you missed.'
  ].forEach((s, i) => kids.push(new Paragraph({ children: runs(s), numbering: { reference: `steps${u.num}`, level: 0 }, spacing: { after: 60 } })));

  // ---- IXL plan ----
  kids.push(new Paragraph({ children: [new PageBreak()] }));
  kids.push(P('IXL PRACTICE PLAN', { bold: true, color: PURPLE, size: 28, after: 60, border: rule(PURPLE) }));
  kids.push(P('Reach SmartScore 80+ on each skill before the test. Check the box when done.', { size: 20, after: 120 }));
  const plan = [];
  const add = (s, idx) => s.ixl.forEach(([code, name]) => { if (!plan.some(p => p[0] === code)) plan.push([code, name, idx + 1]); });
  u.sections.forEach((s, i) => { if (s.lab) add(s, i); });
  u.sections.forEach((s, i) => { if (!s.lab) add(s, i); });
  const PW = [700, 500, 1900, 4860, 1400];
  const pc = (t, w, o = {}) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders, margins: { top: 50, bottom: 50, left: 90, right: 90 }, verticalAlign: VerticalAlign.CENTER,
    shading: o.fill ? { fill: o.fill, type: ShadingType.CLEAR, color: 'auto' } : undefined, children: [P(t, { size: 19, after: 0, bold: o.bold, color: o.color, align: o.center ? AlignmentType.CENTER : undefined })] });
  const prow = [new TableRow({ tableHeader: true, children: ['Done', '#', 'Skill', 'Skill name', 'Notes section'].map((h, i) => pc(h, PW[i], { bold: true, color: PURPLE, fill: 'EDE4F5', center: i < 2 })) })];
  plan.forEach((p, i) => prow.push(new TableRow({ cantSplit: true, children: [pc('☐', PW[0], { center: true }), pc(String(i + 1), PW[1], { center: true }), pc(p[0], PW[2], { bold: true, color: PURPLE }), pc(p[1], PW[3]), pc(`Section ${p[2]}`, PW[4])] })));
  kids.push(new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: PW, rows: prow }));
  const gaps = u.sections.filter(s => !s.ixl.length).map(s => s.title);
  kids.push(P(`**No IXL match:** ${gaps.length ? gaps.join('; ') + '. Practice these with the Concept Builders at physicsclassroom.com.' : 'every section in this unit has at least one IXL skill.'}`, { size: 20, before: 160, after: 80 }));
  if (plan.some(p => /\(New\)/.test(p[0]))) kids.push(P('Skills marked (New) are listed on IXL without a number yet. Find them by name in that section.', { size: 19, italics: true, after: 80 }));
  kids.push(P('Self-test tip: cover the Notes column, answer the cue questions aloud, then redo each worked example on blank paper without looking.', { italics: true, size: 20, after: 0 }));

  const doc = new Document({
    creator: 'Physics course project', title: `Cornell Notes: ${u.title}`,
    styles: { default: { document: { run: { font: FONT, size: 21 } } } },
    numbering: { config: [
      { reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 300, hanging: 200 } } } }] },
      { reference: `steps${u.num}`, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 300 } } } }] }] },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
        new TextRun({ text: `${u.title} Cornell Notes | Page `, size: 16, color: '808080', font: FONT }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: '808080', font: FONT })] })] }) },
      children: kids }]
  });
  return Packer.toBuffer(doc).then(buf => { fs.writeFileSync(path.join(dir, 'cornell-notes.docx'), buf); console.log('wrote', u.id, 'cornell-notes.docx'); });
}

Promise.all(units.map(build)).catch(e => { console.error(e); process.exit(1); });
