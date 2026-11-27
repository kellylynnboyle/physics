/**
 * Builds one unit's Cornell notes as a Word document (US Letter, 1 in margins).
 * Layout: cover page with outline, Cornell table, visual memory aids,
 * memory tricks and study methods, IXL practice plan.
 */
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun, Footer, PageNumber,
  AlignmentType, WidthType, ShadingType, BorderStyle, LevelFormat, PageBreak, VerticalAlign,
} = require("docx");

const NAVY = "1F3864", PURPLE = "5B2C83", GRAY = "7F7F7F";
const FILL = { head: "D9E2F3", cue: "EEF3FA", ixl: "EDE4F5", tricks: "E2EFDA", summary: "FFF2CC" };
const W_CUE = 2700, W_NOTES = 6660, W_ALL = 9360;
const thin = { style: BorderStyle.SINGLE, size: 4, color: "8EA9DB" };
const BORDERS = { top: thin, bottom: thin, left: thin, right: thin };
const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const NO_BORDERS = { top: none, bottom: none, left: none, right: none };
const MARGINS = { top: 70, bottom: 70, left: 110, right: 110 };

/** "**bold** text" → runs */
function runs(text, opts = {}) {
  return String(text).split(/(\*\*[^*]+\*\*)/).filter(Boolean).map((part) => {
    const bold = part.startsWith("**");
    return new TextRun({ text: bold ? part.slice(2, -2) : part, ...opts, bold: bold || opts.bold });
  });
}
const p = (text, o = {}) => new Paragraph({ children: runs(text, o.run), spacing: { before: 0, after: 60, ...(o.spacing || {}) }, ...(o.para || {}) });
const bullet = (text, o = {}) => new Paragraph({ children: runs(text, o.run), numbering: { reference: "bullets", level: 0 }, spacing: { before: 0, after: 40 }, ...(o.para || {}) });
const rule = (color) => ({ bottom: { style: BorderStyle.SINGLE, size: 12, color, space: 2 } });
const shade = (fill) => ({ type: ShadingType.CLEAR, fill, color: "auto" });

function tcell(children, width, fill, extra = {}) {
  return new TableCell({ children, width: { size: width, type: WidthType.DXA }, shading: fill ? shade(fill) : undefined, margins: MARGINS, borders: BORDERS, ...extra });
}
const fullRow = (children, fill) => new TableRow({ cantSplit: true, children: [tcell(children, W_ALL, fill, { columnSpan: 2 })] });

/** "Physics D.1, D.2, D.3; Grade 8 H.1" → "Physics D.1–3; Grade 8 H.1" */
function compress(codes) {
  const groups = new Map();
  for (const code of codes) {
    const m = code.match(/^(.*) ([A-Z]+)\.(\d+)$/);
    const course = m ? m[1] : code.replace(/ [A-Z]+ \(New\)$/, "");
    if (!groups.has(course)) groups.set(course, { nums: new Map(), other: new Set() });
    const g = groups.get(course);
    if (m) {
      if (!g.nums.has(m[2])) g.nums.set(m[2], new Set());
      g.nums.get(m[2]).add(+m[3]);
    } else g.other.add(code.slice(course.length + 1));
  }
  const out = [];
  for (const [course, g] of groups) {
    const parts = [];
    for (const [sec, set] of g.nums) {
      const n = [...set].sort((a, b) => a - b);
      let i = 0;
      while (i < n.length) {
        let j = i;
        while (j + 1 < n.length && n[j + 1] === n[j] + 1) j++;
        parts.push(j > i ? `${sec}.${n[i]}–${n[j]}` : `${sec}.${n[i]}`);
        i = j + 1;
      }
    }
    for (const o of g.other) parts.push(o);
    out.push(`${course} ${parts.join(", ")}`);
  }
  return out.join("; ");
}

function pngSize(file) {
  const b = fs.readFileSync(file);
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20), data: b };
}

async function buildDocx(u, plan, diagramDir) {
  const body = [];

  // ── Cover page ──
  body.push(new Paragraph({ children: [new TextRun({ text: `Cornell Notes: ${u.title}`, bold: true, size: 36, color: NAVY })], spacing: { after: 40 } }));
  body.push(p(u.subtitle, { run: { italics: true }, spacing: { after: 120 } }));
  body.push(p("Name: ______________________________   Period: ________   Date: ______________", { spacing: { after: 160 } }));
  body.push(p("Learning Targets", { run: { bold: true, color: NAVY, size: 22 }, spacing: { after: 40 } }));
  for (const t of u.targets) body.push(bullet(t, { run: { size: 20 } }));
  body.push(new Paragraph({ children: [new TextRun({ text: "Essential Question: ", bold: true, color: NAVY, size: 22 }), new TextRun({ text: u.essentialQuestion, italics: true, size: 21 })], spacing: { before: 100, after: 140 } }));
  body.push(new Paragraph({ children: [new TextRun({ text: "OUTLINE", bold: true, color: NAVY, size: 24 })], border: rule(NAVY), spacing: { after: 100 } }));
  u.sections.forEach((s, i) => {
    body.push(new Paragraph({ children: [new TextRun({ text: `${i + 1}. ${s.title}`, bold: true, color: NAVY, size: 20 })], spacing: { before: 60, after: 10 }, keepNext: true }));
    body.push(new Paragraph({ children: [new TextRun({ text: s.cues.map((c) => c.q).join(" • "), size: 17 })], indent: { left: 300 }, spacing: { after: 10 }, keepNext: (s.ixl || []).length > 0 }));
    if ((s.ixl || []).length) body.push(new Paragraph({ children: [new TextRun({ text: "IXL: " + compress(s.ixl.map((x) => x[0])), size: 17, color: PURPLE })], indent: { left: 300 }, spacing: { after: 10 } }));
  });
  body.push(new Paragraph({ children: [new TextRun({ text: "Memory Tricks • Summary • Visual Memory Aids • Memory Tricks & Study Methods • IXL Practice Plan • Self-Test Tip", size: 18, color: NAVY, bold: true })], spacing: { before: 120 } }));
  body.push(new Paragraph({ children: [new PageBreak()] }));

  // ── Cornell table ──
  const rows = [];
  rows.push(new TableRow({ tableHeader: true, cantSplit: true, children: [
    tcell([p("CUES / QUESTIONS", { run: { bold: true, color: NAVY }, spacing: { after: 0 } })], W_CUE, FILL.head),
    tcell([p("NOTES", { run: { bold: true, color: NAVY }, spacing: { after: 0 } })], W_NOTES, FILL.head),
  ] }));
  u.sections.forEach((s, i) => {
    rows.push(fullRow([new Paragraph({ children: [new TextRun({ text: `${i + 1}. ${s.title}`, bold: true, color: NAVY, size: 24 })], keepNext: true, spacing: { before: 20, after: 20 } })], FILL.head));
    s.cues.forEach((c, ci) => {
      const keepNext = false; // rows never split (cantSplit); only section headers are tied to the row after them
      rows.push(new TableRow({ cantSplit: true, children: [
        tcell([p(c.q, { run: { bold: true, color: NAVY }, para: { keepNext } })], W_CUE, FILL.cue),
        tcell(c.notes.map((n) => bullet(n, { para: { keepNext } })), W_NOTES),
      ] }));
    });
    const ixl = [new Paragraph({ children: [new TextRun({ text: "IXL PRACTICE (goal: SmartScore 80+)", bold: true, color: PURPLE })], spacing: { after: 40 } })];
    for (const [code, name] of s.ixl || []) ixl.push(bullet(`**${code}** ${name}`));
    if (s.ixlNote) ixl.push(p(s.ixlNote, { run: { italics: true } }));
    rows.push(fullRow(ixl, FILL.ixl));
  });
  const tricks = [p("MEMORY TRICKS", { run: { bold: true, color: "375623", size: 24 } })];
  for (const [name, text] of u.mnemonics) tricks.push(bullet(`**${name}:** ${text}`));
  rows.push(fullRow(tricks, FILL.tricks));
  rows.push(fullRow([p("SUMMARY", { run: { bold: true, color: "7F6000", size: 24 } }), p(u.summary)], FILL.summary));
  body.push(new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: [W_CUE, W_NOTES], rows }));

  // ── Visual memory aids ──
  body.push(new Paragraph({ children: [new PageBreak()] }));
  body.push(new Paragraph({ children: [new TextRun({ text: "VISUAL MEMORY AIDS", bold: true, color: NAVY, size: 28 })], border: rule(NAVY), spacing: { after: 80 } }));
  body.push(p("Each panel has a diagram, one sentence saying what it shows, and the rule that goes with it. Redraw each one from memory.", { run: { italics: true }, spacing: { after: 120 } }));
  const half = W_ALL / 2;
  const panel = (v) => {
    const img = pngSize(path.join(diagramDir, v.file));
    const w = 268, h = Math.round((img.h / img.w) * w);
    return tcell([
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ type: "png", data: img.data, transformation: { width: w, height: h }, altText: { title: v.file, description: v.caption, name: v.file } })], spacing: { after: 60 } }),
      p(v.caption, { run: { size: 19 }, spacing: { after: 40 } }),
      p(`**Rule:** ${v.rule}`, { run: { size: 19, color: NAVY }, spacing: { after: 120 } }),
    ], half, undefined, { borders: NO_BORDERS, verticalAlign: VerticalAlign.TOP });
  };
  const vrows = [];
  for (let i = 0; i < u.visuals.length; i += 2) {
    const pair = [panel(u.visuals[i])];
    pair.push(u.visuals[i + 1] ? panel(u.visuals[i + 1]) : tcell([p("")], half, undefined, { borders: NO_BORDERS }));
    vrows.push(new TableRow({ cantSplit: true, children: pair }));
  }
  body.push(new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: [half, half], rows: vrows }));

  // ── Memory tricks & study methods ──
  body.push(new Paragraph({ children: [new PageBreak()] }));
  body.push(new Paragraph({ children: [new TextRun({ text: "MEMORY TRICKS & STUDY METHODS", bold: true, color: "375623", size: 28 })], shading: shade(FILL.tricks), spacing: { after: 140 } }));
  body.push(p("Rules of thumb for this unit", { run: { bold: true, color: NAVY, size: 23 } }));
  for (const [name, text, use] of u.mnemonics) {
    body.push(new Paragraph({ children: [new TextRun({ text: name, bold: true })], spacing: { before: 80, after: 20 }, keepNext: true }));
    body.push(p(text, { para: { indent: { left: 300 }, keepNext: true }, spacing: { after: 10 } }));
    body.push(p(`When to use it: ${use}`, { run: { italics: true, color: "595959" }, para: { indent: { left: 300 } } }));
  }
  body.push(p("How to study these notes", { run: { bold: true, color: NAVY, size: 23 }, spacing: { before: 240, after: 60 } }));
  [
    "Cover the Notes column and answer each cue aloud.",
    "Check your answer and mark the ones you missed.",
    "Redraw each Visual Memory Aid from memory.",
    "Repeat the next day and again a few days later. Recall spread over days builds memory that rereading does not.",
    "Finish the IXL plan to SmartScore 80+ before the test.",
  ].forEach((s) => body.push(new Paragraph({ children: runs(s), numbering: { reference: "steps", level: 0 }, spacing: { after: 50 } })));

  // ── IXL practice plan ──
  body.push(new Paragraph({ children: [new PageBreak()] }));
  body.push(new Paragraph({ children: [new TextRun({ text: "IXL PRACTICE PLAN", bold: true, color: PURPLE, size: 28 })], border: rule(PURPLE), spacing: { after: 80 } }));
  body.push(p("Work each skill to a SmartScore of 80 or higher before the test. Tick the box when you get there.", { spacing: { after: 120 } }));
  const PW = [700, 500, 1900, 4860, 1400];
  const prow = (cells, head) => new TableRow({ cantSplit: true, tableHeader: !!head, children: cells.map((c, i) => tcell([p(c, { run: head ? { bold: true, color: PURPLE } : (i === 2 ? { bold: true } : {}), spacing: { after: 0 }, para: { alignment: i < 2 || i === 4 ? AlignmentType.CENTER : AlignmentType.LEFT } })], PW[i], head ? FILL.ixl : undefined)) });
  body.push(new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: PW, rows: [
    prow(["Done", "#", "Skill", "Skill name", "Notes section"], true),
    ...plan.map((r, i) => prow(["☐", String(i + 1), r.code, r.name, String(r.section)])),
  ] }));
  const gaps = u.sections.filter((s) => s.ixlNote);
  if (gaps.length) {
    body.push(p("**No IXL match:** " + gaps.map((s) => `${s.title}. ${s.ixlNote}`).join(" "), { spacing: { before: 160, after: 80 } }));
  }
  body.push(p("Self-test tip: cover the Notes column, answer the cues aloud, and redo each worked example on blank paper before you look at the solution.", { run: { italics: true }, spacing: { before: 120 } }));

  const doc = new Document({
    creator: "Physics learning project",
    title: `Cornell Notes: ${u.title}`,
    styles: { default: { document: { run: { font: "Calibri", size: 21 } } } },
    numbering: { config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 260, hanging: 200 } } } }] },
      { reference: "steps", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 300 } } } }] },
    ] },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${u.title} Cornell Notes | Page `, size: 16, color: GRAY }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: GRAY })] })] }) },
      children: body,
    }],
  });
  return Packer.toBuffer(doc);
}

module.exports = { buildDocx, compress };
