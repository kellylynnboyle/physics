// Builds the Cornell notes .docx for each unit from tools/.build/*.json (run tools/build.py first).
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun, Footer, PageNumber, PageBreak,
  AlignmentType, WidthType, ShadingType, BorderStyle, LevelFormat, VerticalAlign,
} = require("docx");

const NAVY = "1F3864", PURPLE = "5B2C83", GRAY = "7F7F7F";
const FILL = { head: "D9E2F3", cue: "EEF3FA", ixl: "EDE4F5", tricks: "E2EFDA", summary: "FFF2CC" };
const W_CUE = 2700, W_NOTES = 6660, W_ALL = 9360;
const thin = { style: BorderStyle.SINGLE, size: 4, color: "A6B4CF" };
const BORDERS = { top: thin, bottom: thin, left: thin, right: thin };
const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const NOBORDERS = { top: none, bottom: none, left: none, right: none };
const MARGINS = { top: 70, bottom: 70, left: 110, right: 110 };

// "**bold** text" -> TextRuns
function runs(text, base = {}) {
  return text.split("**").filter((p, i) => p !== "" || i === 0).map((part, i) =>
    new TextRun({ text: part, ...base, bold: i % 2 === 1 ? true : base.bold }));
}
function runsFrom(text, base = {}) {
  const parts = text.split("**");
  return parts.map((part, i) => new TextRun({ text: part, ...base, bold: i % 2 === 1 ? true : base.bold })).filter((_, i) => parts[i] !== "");
}
const para = (text, opts = {}, run = {}) => new Paragraph({ spacing: { before: 0, after: 60 }, ...opts, children: runsFrom(text, run) });
const bullet = (text, run = {}) => new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { before: 0, after: 40 }, children: runsFrom(text, run) });
const shade = (fill) => ({ type: ShadingType.CLEAR, color: "auto", fill });

function cell(children, width, fill, extra = {}) {
  return new TableCell({ children, width: { size: width, type: WidthType.DXA }, shading: fill ? shade(fill) : undefined, margins: MARGINS, borders: BORDERS, ...extra });
}
function fullRow(children, fill) {
  return new TableRow({ cantSplit: true, children: [cell(children, W_ALL, fill, { columnSpan: 2 })] });
}
function ruleHeading(text, color) {
  return new Paragraph({
    spacing: { before: 120, after: 120 }, keepNext: true,
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color, space: 2 } },
    children: [new TextRun({ text, bold: true, size: 28, color })],
  });
}

function cover(u) {
  const out = [
    new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: `Cornell Notes: ${u.title}`, bold: true, size: 36, color: NAVY })] }),
    new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: `Physics | Unit ${u.num} | ${u.subtitle}`, italics: true, color: GRAY })] }),
    para("Name: ______________________________   Period: ________   Date: ______________", { spacing: { after: 120 } }),
    new Paragraph({ spacing: { after: 30 }, children: [new TextRun({ text: "Learning Targets", bold: true, color: NAVY, size: 22 })] }),
    ...u.targets.map((t) => bullet(t, { size: 19 })),
    new Paragraph({ spacing: { before: 80, after: 80 }, children: [new TextRun({ text: "Essential Question: ", bold: true, color: NAVY }), new TextRun({ text: u.essential_question, italics: true })] }),
    new Paragraph({
      spacing: { before: 80, after: 80 }, border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: NAVY, space: 2 } },
      children: [new TextRun({ text: "OUTLINE", bold: true, size: 24, color: NAVY })],
    }),
  ];
  for (const s of u.outline) {
    out.push(new Paragraph({ spacing: { before: 60, after: 0 }, keepNext: true, children: [new TextRun({ text: s.title, bold: true, color: NAVY, size: 20 })] }));
    const kids = [new TextRun({ text: s.cues, size: 17 })];
    if (s.ixl) kids.push(new TextRun({ text: `   IXL: ${s.ixl}`, size: 17, color: PURPLE, bold: true }));
    out.push(new Paragraph({ indent: { left: 360 }, spacing: { before: 0, after: 0 }, children: kids }));
  }
  out.push(new Paragraph({
    spacing: { before: 100 },
    children: [new TextRun({ text: "Memory Tricks • Summary • Visual Memory Aids • Memory Tricks & Study Methods • IXL Practice Plan • Self-Test Tip", size: 17, italics: true, color: NAVY })],
  }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

function cornellTable(u) {
  const rows = [new TableRow({
    tableHeader: true, cantSplit: true,
    children: [
      cell([new Paragraph({ children: [new TextRun({ text: "CUES / QUESTIONS", bold: true, color: NAVY })] })], W_CUE, FILL.head),
      cell([new Paragraph({ children: [new TextRun({ text: "NOTES", bold: true, color: NAVY })] })], W_NOTES, FILL.head),
    ],
  })];
  u.sections.forEach((s, i) => {
    rows.push(fullRow([new Paragraph({ keepNext: true, children: [new TextRun({ text: `${i + 1}. ${s.title}`, bold: true, color: NAVY, size: 24 })] })], FILL.head));
    s.cues.forEach(([q, notes], ci) => {
      const keep = ci === s.cues.length - 1; // keep the last cue row with its IXL box
      rows.push(new TableRow({
        cantSplit: true,
        children: [
          cell([new Paragraph({ keepNext: keep, children: [new TextRun({ text: q, bold: true, color: NAVY })] })], W_CUE, FILL.cue),
          cell(notes.map((n) => new Paragraph({ numbering: { reference: "bullets", level: 0 }, keepNext: keep, spacing: { before: 0, after: 40 }, children: runsFrom(n) })), W_NOTES),
        ],
      }));
    });
    const kids = [new Paragraph({ spacing: { after: 30 }, children: [new TextRun({ text: "IXL PRACTICE (goal: SmartScore 80+)", bold: true, color: PURPLE })] })];
    if (s.ixl.length) s.ixl.forEach(([c, n]) => kids.push(bullet(`**${c}** ${n}`)));
    else kids.push(para("No IXL skill fits this section. Use the Concept Builders at physicsclassroom.com/Concept-Builders."));
    rows.push(fullRow(kids, FILL.ixl));
  });
  rows.push(fullRow([
    new Paragraph({ spacing: { after: 30 }, children: [new TextRun({ text: "MEMORY TRICKS", bold: true, color: NAVY })] }),
    ...u.mnemonics.map(([m]) => bullet(m)),
  ], FILL.tricks));
  rows.push(fullRow([
    new Paragraph({ spacing: { after: 30 }, children: [new TextRun({ text: "SUMMARY", bold: true, color: NAVY })] }),
    para(u.summary),
  ], FILL.summary));
  return new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: [W_CUE, W_NOTES], rows });
}

function visuals(u) {
  const half = W_ALL / 2;
  const panel = ([name, sentence, rule]) => new TableCell({
    width: { size: half, type: WidthType.DXA }, borders: NOBORDERS, margins: { top: 80, bottom: 160, left: 80, right: 80 }, verticalAlign: VerticalAlign.TOP,
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, keepNext: true, children: [new ImageRun({ type: "png", data: fs.readFileSync(path.join(u.image_dir, name + ".png")), transformation: { width: 290, height: 207 } })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, keepNext: true, spacing: { before: 40, after: 20 }, children: [new TextRun({ text: sentence, size: 19 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: rule, bold: true, color: NAVY, size: 19 })] }),
    ],
  });
  const rows = [];
  for (let i = 0; i < u.visuals.length; i += 2) rows.push(new TableRow({ cantSplit: true, children: u.visuals.slice(i, i + 2).map(panel) }));
  return [
    new Paragraph({ children: [new PageBreak()] }),
    ruleHeading("VISUAL MEMORY AIDS", NAVY),
    para("Each panel shows a standard diagram, what it shows, and the rule that goes with it. Redraw each one from memory.", { spacing: { after: 120 } }, { italics: true }),
    new Table({ width: { size: W_ALL, type: WidthType.DXA }, columnWidths: [half, half], rows }),
  ];
}

function studyPage(u) {
  const band = (text) => new Paragraph({ shading: shade(FILL.tricks), spacing: { before: 0, after: 140 }, children: [new TextRun({ text, bold: true, size: 28, color: NAVY })] });
  const sub = (text) => new Paragraph({ spacing: { before: 160, after: 80 }, keepNext: true, children: [new TextRun({ text, bold: true, color: NAVY, size: 24 })] });
  const steps = [
    "**Cover the Notes column** and answer each cue aloud.",
    "**Check**, and mark the cues you missed.",
    "**Redraw each Visual Memory Aid** from memory, with labels and the rule.",
    "**Repeat the next day, and again a few days later.** Recall spread over days builds memory that rereading does not.",
    "**Finish the IXL plan** to SmartScore 80+ before the test.",
  ];
  return [
    new Paragraph({ children: [new PageBreak()] }),
    band("MEMORY TRICKS & STUDY METHODS"),
    sub("Tricks and rules of thumb"),
    ...u.mnemonics.flatMap(([m, when]) => [
      new Paragraph({ spacing: { before: 60, after: 0 }, keepNext: true, children: [new TextRun({ text: m, bold: true })] }),
      new Paragraph({ indent: { left: 360 }, spacing: { before: 0, after: 60 }, children: [new TextRun({ text: "Use it when: ", italics: true, color: GRAY }), new TextRun({ text: when })] }),
    ]),
    sub("Study method"),
    ...steps.map((s) => new Paragraph({ numbering: { reference: "steps", level: 0 }, spacing: { before: 0, after: 70 }, children: runsFrom(s) })),
  ];
}

function ixlPlan(u) {
  const widths = [700, 500, 1900, 4860, 1400];
  const head = ["Done", "#", "Skill", "Skill name", "Notes section"];
  const row = (vals, fill, bold) => new TableRow({
    cantSplit: true, tableHeader: !!bold,
    children: vals.map((v, i) => cell([new Paragraph({ alignment: i < 2 ? AlignmentType.CENTER : AlignmentType.LEFT, children: [new TextRun({ text: String(v), bold: !!bold, size: 19, color: bold ? PURPLE : undefined })] })], widths[i], fill)),
  });
  const secNum = (name) => { const k = u.sections.findIndex((s) => s.title === name); return name === "Labs" ? String(u.sections.length) : String(k + 1); };
  return [
    new Paragraph({ children: [new PageBreak()] }),
    ruleHeading("IXL PRACTICE PLAN", PURPLE),
    para("Work each skill until your SmartScore is 80 or higher before the test. Check it off when done.", { spacing: { after: 120 } }),
    new Table({
      width: { size: W_ALL, type: WidthType.DXA }, columnWidths: widths,
      rows: [row(head, FILL.ixl, true), ...u.ixl_plan.map(([c, n, s], i) => row(["☐", i + 1, c, n, "Section " + secNum(s)]))],
    }),
    new Paragraph({ spacing: { before: 160, after: 80 }, children: [new TextRun({ text: "No IXL match: ", bold: true, color: PURPLE }), new TextRun({ text: u.no_ixl })] }),
    new Paragraph({ spacing: { before: 80 }, children: [new TextRun({ text: "Self-test tip: cover the Notes column, answer the cues aloud, and redo each worked example on paper without looking.", italics: true })] }),
  ];
}

async function build(file) {
  const u = JSON.parse(fs.readFileSync(file, "utf8"));
  const doc = new Document({
    styles: { default: { document: { run: { font: "Calibri", size: 21 } } } },
    numbering: {
      config: [
        { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 260, hanging: 200 } } } }] },
        { reference: "steps", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 300 } } } }] },
      ],
    },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: `${u.title} Cornell Notes | Page `, size: 16, color: GRAY }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: GRAY })],
          })],
        }),
      },
      children: [...cover(u), cornellTable(u), ...visuals(u), ...studyPage(u), ...ixlPlan(u)],
    }],
  });
  fs.writeFileSync(u.out, await Packer.toBuffer(doc));
  console.log("wrote", path.relative(path.join(__dirname, ".."), u.out));
}

(async () => {
  const dir = path.join(__dirname, ".build");
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".json")).sort()) await build(path.join(dir, f));
})();
