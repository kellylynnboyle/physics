// Build the Cornell Notes .docx for every unit from content/*.js.
// Usage: NODE_PATH=$(npm root -g) node tools/build_notes.js
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType,
  BorderStyle, AlignmentType, PageBreak, ImageRun, Footer, PageNumber, LevelFormat, VerticalAlign,
} = require("docx");

const ROOT = path.join(__dirname, "..");
const units = require("./units");

const NAVY = "1F3864", PURPLE = "5B2C83", GRAY = "7F7F7F";
const FILL = { head: "D9E2F3", cue: "EEF3FA", ixl: "EDE4F5", tricks: "E2EFDA", summary: "FFF2CC" };
const W_CUE = 2700, W_NOTES = 6660, W_ALL = 9360;
const FONT = "Calibri";

// "**bold** text" -> TextRuns
function runs(text, base = {}) {
  return text.split(/(\*\*[^*]+\*\*)/).filter(Boolean).map((part) => {
    const bold = part.startsWith("**");
    return new TextRun({ text: bold ? part.slice(2, -2) : part, font: FONT, size: 21, ...base, bold: bold || base.bold });
  });
}
const para = (text, opts = {}, base = {}) => new Paragraph({ spacing: { before: 0, after: 60 }, ...opts, children: runs(text, base) });
const bullet = (text, base = {}) => new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { before: 0, after: 50 }, children: runs(text, base) });
const shade = (fill) => ({ type: ShadingType.CLEAR, color: "auto", fill });
const margins = { top: 70, bottom: 70, left: 110, right: 110 };
const thin = { style: BorderStyle.SINGLE, size: 4, color: "8EA9DB" };
const borders = { top: thin, bottom: thin, left: thin, right: thin };
const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: none, bottom: none, left: none, right: none };

function cell(children, width, fill, span) {
  return new TableCell({ children, width: { size: width, type: WidthType.DXA }, shading: fill ? shade(fill) : undefined, margins, borders, columnSpan: span, verticalAlign: VerticalAlign.TOP });
}
const row = (cells, opts = {}) => new TableRow({ children: cells, cantSplit: true, ...opts });
const fullRow = (children, fill) => row([cell(children, W_ALL, fill, 2)]);

function ixlRanges(list) {
  // Compress codes into ranges per course: "Physics C.1-3, Grade 8 H.1-5"
  const groups = new Map();
  const extras = [];
  for (const [code] of list) {
    const m = code.match(/^(.*) ([A-Z]+)\.(\d+)$/);
    if (!m) { extras.push(code); continue; }
    const key = `${m[1]} ${m[2]}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(Number(m[3]));
  }
  const out = [];
  for (const [key, nums] of groups) {
    const s = [...new Set(nums)].sort((a, b) => a - b);
    const parts = [];
    for (let i = 0; i < s.length; i++) {
      let j = i;
      while (j + 1 < s.length && s[j + 1] === s[j] + 1) j++;
      parts.push(j > i ? `${s[i]}–${s[j]}` : `${s[i]}`);
      i = j;
    }
    out.push(`${key}.${parts.join(", ")}`);
  }
  return out.concat(extras).join(", ");
}

function heading(text, color, ruleColor) {
  return new Paragraph({
    spacing: { before: 0, after: 140 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: ruleColor, space: 2 } },
    children: [new TextRun({ text, font: FONT, size: 30, bold: true, color })],
  });
}

function build(u) {
  const kids = [];
  // ---- Cover page
  kids.push(new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: `Cornell Notes: ${u.title}`, font: FONT, size: 36, bold: true, color: NAVY })] }));
  kids.push(new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: u.subtitle, font: FONT, size: 21, italics: true })] }));
  kids.push(para("Name: ______________________________     Period: ________     Date: ______________", { spacing: { after: 140 } }));
  kids.push(para("Learning Targets", { spacing: { after: 40 } }, { bold: true, color: NAVY, size: 22 }));
  u.targets.forEach((t) => kids.push(bullet(t, { size: 19 })));
  kids.push(new Paragraph({ spacing: { before: 80, after: 120 }, children: [
    new TextRun({ text: "Essential Question: ", font: FONT, size: 21, bold: true, color: NAVY }),
    new TextRun({ text: u.essentialQuestion, font: FONT, size: 21, italics: true }),
  ] }));
  kids.push(new Paragraph({ spacing: { after: 80 }, border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 2 } },
    children: [new TextRun({ text: "OUTLINE", font: FONT, size: 22, bold: true, color: NAVY })] }));
  u.sections.forEach((s, i) => {
    kids.push(new Paragraph({ spacing: { before: 50, after: 0 }, keepNext: true, children: [new TextRun({ text: `${i + 1}. ${s.title}`, font: FONT, size: 20, bold: true, color: NAVY })] }));
    kids.push(new Paragraph({ indent: { left: 280 }, spacing: { after: 0 }, children: [new TextRun({ text: s.rows.map((r) => r[0]).join(" • "), font: FONT, size: 17 })] }));
    const ix = s.ixl.length ? `IXL: ${ixlRanges(s.ixl)}` : "IXL: none (Concept Builders)";
    kids.push(new Paragraph({ indent: { left: 280 }, spacing: { after: 0 }, children: [new TextRun({ text: ix, font: FONT, size: 17, color: PURPLE })] }));
  });
  kids.push(new Paragraph({ spacing: { before: 90 }, children: [
    new TextRun({ text: "Memory Tricks • Summary • Visual Memory Aids • Memory Tricks & Study Methods • IXL Practice Plan • Self-Test Tip", font: FONT, size: 17, bold: true, color: NAVY }),
    new PageBreak(),
  ] }));

  // ---- Cornell table
  const rows = [];
  rows.push(new TableRow({ tableHeader: true, cantSplit: true, children: [
    cell([para("CUES / QUESTIONS", {}, { bold: true, color: NAVY })], W_CUE, FILL.head),
    cell([para("NOTES", {}, { bold: true, color: NAVY })], W_NOTES, FILL.head),
  ] }));
  u.sections.forEach((s, i) => {
    // The section header and its first cue row share one unsplittable row (a nested table),
    // so a header can never be stranded alone at the bottom of a page.
    const cueRow = ([cue, notes]) => row([
      cell([para(cue, {}, { bold: true, color: NAVY })], W_CUE, FILL.cue),
      cell(notes.map((n) => bullet(n)), W_NOTES),
    ]);
    rows.push(row([new TableCell({
      width: { size: W_ALL, type: WidthType.DXA }, columnSpan: 2, shading: shade(FILL.head), borders,
      margins: { top: 0, bottom: 0, left: 0, right: 0 },
      children: [
        new Paragraph({ spacing: { before: 70, after: 70 }, indent: { left: 110 }, keepNext: true, children: [new TextRun({ text: `${i + 1}. ${s.title}`, font: FONT, size: 24, bold: true, color: NAVY })] }),
        new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: [W_CUE, W_NOTES], rows: [new TableRow({ cantSplit: true, children: [
          new TableCell({ children: [para(s.rows[0][0], {}, { bold: true, color: NAVY })], width: { size: W_CUE, type: WidthType.DXA }, shading: shade(FILL.cue), margins, borders: { top: thin, right: thin, left: none, bottom: none } }),
          new TableCell({ children: s.rows[0][1].map((n) => bullet(n)), width: { size: W_NOTES, type: WidthType.DXA }, shading: shade("FFFFFF"), margins, borders: { top: thin, left: thin, right: none, bottom: none } }),
        ] })] }),
        new Paragraph({ spacing: { before: 0, after: 0, line: 20, lineRule: "exact" }, children: [] }),
      ],
    })]));
    s.rows.slice(1).forEach((r) => rows.push(cueRow(r)));
    const ixlKids = [new Paragraph({ spacing: { after: 40 }, keepNext: true, children: [new TextRun({ text: "IXL PRACTICE (goal: SmartScore 80+)", font: FONT, size: 20, bold: true, color: PURPLE })] })];
    s.ixl.forEach(([code, name]) => ixlKids.push(bullet(`**${code}** ${name}`, { size: 20 })));
    if (s.ixlNote) ixlKids.push(para(s.ixlNote, {}, { size: 20, italics: true }));
    rows.push(fullRow(ixlKids, FILL.ixl));
  });
  const trickKids = [para("MEMORY TRICKS", { keepNext: true }, { bold: true, color: "375623", size: 24 })];
  u.tricks.forEach(([name]) => trickKids.push(bullet(`**${name}**`)));
  rows.push(fullRow(trickKids, FILL.tricks));
  rows.push(fullRow([para("SUMMARY", { keepNext: true }, { bold: true, color: "7F6000", size: 24 }), para(u.summary)], FILL.summary));
  kids.push(new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: [W_CUE, W_NOTES], rows }));

  // ---- Visual memory aids
  kids.push(new Paragraph({ children: [new PageBreak()] }));
  kids.push(heading("VISUAL MEMORY AIDS", NAVY, NAVY));
  const vrows = [];
  for (let i = 0; i < u.visuals.length; i += 2) {
    const cells = [0, 1].map((k) => {
      const v = u.visuals[i + k];
      if (!v) return new TableCell({ children: [new Paragraph("")], width: { size: 4680, type: WidthType.DXA }, borders: noBorders });
      const img = fs.readFileSync(path.join(ROOT, "units", u.id, "figures", v[0] + ".png"));
      return new TableCell({
        width: { size: 4680, type: WidthType.DXA }, borders: noBorders, margins: { top: 80, bottom: 160, left: 100, right: 100 },
        children: [
          new Paragraph({ alignment: AlignmentType.CENTER, keepNext: true, children: [new ImageRun({ type: "png", data: img, transformation: { width: 288, height: 208 }, altText: { title: v[0], description: v[1], name: v[0] } })] }),
          para(v[1], { keepNext: true, spacing: { before: 60, after: 40 } }, { size: 20 }),
          para(v[2], { alignment: AlignmentType.CENTER }, { bold: true, color: NAVY, size: 21 }),
        ],
      });
    });
    vrows.push(new TableRow({ children: cells, cantSplit: true }));
  }
  kids.push(new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: [4680, 4680], rows: vrows, borders: { ...noBorders, insideHorizontal: none, insideVertical: none } }));

  // ---- Memory tricks & study methods
  kids.push(new Paragraph({ children: [new PageBreak()] }));
  kids.push(new Paragraph({ shading: shade(FILL.tricks), spacing: { after: 140 }, children: [new TextRun({ text: "MEMORY TRICKS & STUDY METHODS", font: FONT, size: 30, bold: true, color: "375623" })] }));
  kids.push(para("Memory tricks for this unit", { spacing: { after: 60 } }, { bold: true, color: NAVY, size: 23 }));
  u.tricks.forEach(([name, when]) => kids.push(bullet(`**${name}.** ${when}`)));
  kids.push(para("How to study with these notes", { spacing: { before: 200, after: 60 } }, { bold: true, color: NAVY, size: 23 }));
  [
    "Cover the Notes column. Read each cue and answer it **aloud** from memory.",
    "Uncover and check. Put a mark next to every cue you missed.",
    "Redraw each Visual Memory Aid from memory, with its labels and its rule.",
    "Repeat tomorrow, and again a few days later. Recall spread over several days builds memory that rereading does not.",
    "Take the unit quiz and read the explanation for every question you miss.",
    "Finish the IXL plan to SmartScore 80+ before the test.",
  ].forEach((t) => kids.push(new Paragraph({ numbering: { reference: `steps-${u.id}`, level: 0 }, spacing: { after: 60 }, children: runs(t) })));

  // ---- IXL practice plan
  kids.push(new Paragraph({ children: [new PageBreak()] }));
  kids.push(heading("IXL PRACTICE PLAN", PURPLE, PURPLE));
  kids.push(para("Work each skill to a SmartScore of 80 or higher before the unit test. Check the box when you reach it.", { spacing: { after: 120 } }));
  const PW = [700, 500, 1900, 4860, 1400];
  const plan = [];
  const seen = new Set();
  const order = [u.sections.length - 1, ...u.sections.map((_, i) => i).slice(0, -1)]; // lab and measurement basics first
  order.forEach((si) => u.sections[si].ixl.forEach(([code, name]) => {
    if (seen.has(code)) return;
    seen.add(code);
    plan.push([code, name, String(si + 1)]);
  }));
  const pcell = (t, w, fill, base = {}) => cell([para(t, { spacing: { after: 0 } }, { size: 20, ...base })], w, fill);
  const prows = [new TableRow({ tableHeader: true, children: ["Done", "#", "Skill", "Skill name", "Notes section"].map((h, i) => pcell(h, PW[i], FILL.ixl, { bold: true, color: PURPLE })) })];
  plan.forEach(([code, name, sec], i) => prows.push(row([pcell("☐", PW[0]), pcell(String(i + 1), PW[1]), pcell(code, PW[2], undefined, { bold: true }), pcell(name, PW[3]), pcell(sec, PW[4])])));
  kids.push(new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: PW, rows: prows }));
  kids.push(para(`**No IXL match:** ${u.noIxl}`, { spacing: { before: 160, after: 100 } }));
  kids.push(para("Self-test tip: cover the Notes column, answer each cue aloud, then redo every worked example on blank paper without looking at the solution.", {}, { italics: true }));

  const doc = new Document({
    styles: { default: { document: { run: { font: FONT, size: 21 } } } },
    numbering: { config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 260, hanging: 200 } } } }] },
      { reference: `steps-${u.id}`, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 300 } } } }] },
    ] },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
        new TextRun({ text: `${u.title} Cornell Notes | Page `, font: FONT, size: 16, color: GRAY }),
        new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: GRAY }),
      ] })] }) },
      children: kids,
    }],
  });
  return Packer.toBuffer(doc).then((buf) => {
    const out = path.join(ROOT, "units", u.id, `cornell-notes-${u.id}.docx`);
    fs.writeFileSync(out, buf);
    console.log("wrote", path.relative(ROOT, out));
  });
}

Promise.all(units.map(build)).catch((e) => { console.error(e); process.exit(1); });
