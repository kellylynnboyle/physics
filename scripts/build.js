// Builds every generated file from content/*.js:
//   units/<slug>/README.md            unit plan (targets, objectives, resources, practice, quiz key)
//   units/<slug>/cornell-notes.md     Cornell notes for reading on GitHub
//   units/<slug>/cornell-notes.docx   printable Cornell notes (Word)
//   docs/PROGRESS-TRACKER.md          student checklist
//   quiz/index.html                   interactive quiz (data injected into quiz/template.html)
// Run: python3 scripts/diagrams.py && node scripts/build.js
const fs = require("fs");
const path = require("path");
const D = require("docx");

const ROOT = path.join(__dirname, "..");
const UNITS = fs.readdirSync(path.join(ROOT, "content")).filter((f) => f.endsWith(".js")).sort()
  .map((f) => require(path.join(ROOT, "content", f)));

// ---------- shared text helpers ----------
const SUB = /([A-Za-zΔ]+)_([A-Za-z0-9]+)/g;
const mdInline = (s) => s.replace(SUB, "$1<sub>$2</sub>");
const plain = (s) => s.replace(/\*\*/g, "");

// Split "**bold** and v_i" into [{text, bold, sub}]
function segments(s) {
  const out = [];
  s.split("**").forEach((part, i) => {
    const bold = i % 2 === 1;
    let last = 0;
    part.replace(SUB, (m, base, sub, idx) => {
      if (idx + base.length > last) out.push({ text: part.slice(last, idx + base.length), bold });
      out.push({ text: sub, bold, sub: true });
      last = idx + m.length;
      return m;
    });
    if (last < part.length) out.push({ text: part.slice(last), bold });
  });
  return out;
}

// "Physics D.2" -> {group:"Physics", letter:"D", n:2}
function parseCode(code) {
  const m = code.match(/^(.*) ([A-Z]+)\.(\d+)$/);
  return m ? { group: m[1], letter: m[2], n: +m[3] } : null;
}
function compressCodes(ixl) {
  const groups = new Map();
  const loose = [];
  for (const [code] of ixl) {
    const p = parseCode(code);
    if (!p) { loose.push(code.replace(/ \(new.*\)/, " (new)")); continue; }
    const key = p.group + " " + p.letter;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(p.n);
  }
  const parts = [];
  for (const [key, ns] of groups) {
    ns.sort((a, b) => a - b);
    const ranges = [];
    for (let i = 0; i < ns.length; i++) {
      let j = i;
      while (j + 1 < ns.length && ns[j + 1] === ns[j] + 1) j++;
      ranges.push(j > i ? `${ns[i]}–${ns[j]}` : `${ns[i]}`);
      i = j;
    }
    parts.push(`${key}.${ranges.join(", ")}`);
  }
  return parts.concat(loose).join(", ");
}
function ixlCategory(code) {
  if (/^(Physics [AB]\b|Physics [AB]\.|Grade 8 (KK|A|B|C)\.)/.test(code)) return 0; // lab and measurement
  if (/^(Physics C\.|Precalculus)/.test(code)) return 1; // vectors
  return 2; // core topics
}
function ixlPlan(unit) {
  const seen = new Set();
  const rows = [];
  unit.sections.forEach((sec) => {
    for (const [code, name] of sec.ixl) {
      const key = code + name;
      if (seen.has(key)) continue;
      seen.add(key);
      rows.push({ code, name, section: sec.title.split(".")[0], cat: ixlCategory(code), order: rows.length });
    }
  });
  rows.sort((a, b) => a.cat - b.cat || a.order - b.order);
  return rows;
}
// Deterministic choice order for printed quizzes (the web quiz shuffles live).
function printedChoices(q, i) {
  const k = (i * 3 + 1) % q.choices.length;
  const order = q.choices.map((_, j) => (j + k) % q.choices.length);
  return { choices: order.map((j) => q.choices[j]), answer: order.indexOf(q.answer) };
}

// ---------- Markdown ----------
function unitReadme(u) {
  const L = [];
  L.push(`# Unit ${u.num}: ${u.title}`, "", `*${u.short}* | Suggested pacing: ${u.pacing}`, "");
  L.push(`**Essential question:** ${u.essentialQuestion}`, "");
  L.push(`**NGSS connections:** ${u.ngss.join("; ")}`, "");
  L.push("## In this folder", "",
    "- [Cornell notes (read online)](cornell-notes.md)",
    "- [Cornell notes (Word, printable)](cornell-notes.docx) with visual memory aids and an IXL practice plan",
    `- [Interactive quiz](../../quiz/index.html#${u.slug.slice(3)}) on the questions students miss most`, "");
  L.push("## Key concepts to master", "", ...u.concepts.map((c) => `- ${mdInline(c)}`), "");
  L.push("## Learning targets", "", ...u.targets.map((t) => `- [ ] ${mdInline(t)}`), "");
  L.push("## Learning objectives and evidence of mastery", "", "| ID | Objective | Evidence of mastery |", "|---|---|---|",
    ...u.objectives.map((o) => `| ${o.id} | ${mdInline(o.text)} | ${mdInline(o.evidence)} |`), "");
  L.push("Scores use the 4-level scale in [docs/ASSESSMENT.md](../../docs/ASSESSMENT.md). A unit is complete when every objective is at level 3 or higher.", "");
  L.push("## Unit checklist", "",
    "- [ ] Read the Cornell notes and answer every cue question aloud with the Notes column covered",
    "- [ ] Redraw each visual memory aid from memory",
    `- [ ] Score ${Math.ceil(u.quiz.length * 0.8)} of ${u.quiz.length} or better on the interactive quiz`,
    "- [ ] Finish the practice problems below and check the answers",
    "- [ ] Reach SmartScore 80+ on the IXL skills in the practice plan",
    "- [ ] Complete the unit lab and lab report",
    "- [ ] Pass the unit test", "");
  L.push("## Learning resources", "", ...u.resources.map((r) => `- [${r.name}](${r.url}): ${r.what}`), "");
  L.push("### IXL practice plan (goal: SmartScore 80+)", "", "| Done | Skill | Skill name | Notes section |", "|---|---|---|---|",
    ...ixlPlan(u).map((r) => `| ☐ | ${r.code} | ${r.name} | ${r.section} |`), "", `No IXL match: ${u.noIxl}`, "");
  L.push("## Practice problems", "", "Use g = 9.8 m/s². Work each problem before opening the answer.", "");
  u.practice.forEach((p, i) => L.push(`${i + 1}. ${mdInline(p.q)}`, "", `   <details><summary>Answer</summary>${mdInline(p.a)}</details>`, ""));
  L.push("## Real-world applications", "", ...u.realWorld.map((r) => `- ${mdInline(r)}`), "");
  L.push("## Most-missed questions (print version)", "",
    "These are the questions that most often trip students up, based on well-documented physics misconceptions. The [interactive quiz](../../quiz/index.html) gives instant feedback on the same questions.", "");
  u.quiz.forEach((q, i) => {
    const pc = printedChoices(q, i);
    L.push(`**${i + 1}. ${mdInline(q.q)}**`, "", ...pc.choices.map((c, j) => `- ${"ABCD"[j]}. ${mdInline(c)}`), "",
      `<details><summary>Answer and explanation</summary><b>${"ABCD"[pc.answer]}.</b> ${mdInline(q.why)} <i>Common mistake: ${q.misconception}.</i></details>`, "");
  });
  return L.join("\n");
}

function cornellMd(u) {
  const L = [];
  L.push(`# Cornell Notes: ${u.title}`, "", `*${u.subtitle}*`, "", "Name: ____________________  Period: ______  Date: __________", "");
  L.push("**Learning targets**", "", ...u.targets.map((t) => `- ${mdInline(t)}`), "", `**Essential question:** ${u.essentialQuestion}`, "");
  L.push("How to use these notes: cover the Notes column, answer each cue question aloud, then check.", "");
  for (const sec of u.sections) {
    L.push(`## ${sec.title}`, "", "| Cues / Questions | Notes |", "|---|---|");
    for (const r of sec.rows) L.push(`| **${mdInline(r.cue)}** | ${r.notes.map((n) => "• " + mdInline(n)).join("<br>")} |`);
    L.push("");
    if (sec.ixl.length) L.push("**IXL practice (goal: SmartScore 80+):** " + sec.ixl.map(([c, n]) => `**${c}** ${n}`).join("; "), "");
    else L.push(`**Practice:** ${sec.ixlNote}`, "");
  }
  L.push("## Memory tricks", "", ...u.mnemonics.map((m) => `- **${mdInline(m.trick.replace(/\.$/, ""))}.** ${mdInline(m.when)}`), "");
  L.push("## Summary", "", mdInline(u.summary), "");
  L.push("## Visual memory aids", "");
  for (const v of u.visuals) {
    L.push(`<img src="../../assets/diagrams/${u.slug}/${v.img}" alt="${plain(v.caption)}" width="360">`, "", `${mdInline(v.caption)} **${mdInline(v.rule)}**`, "");
  }
  L.push("## Study method", "",
    "1. Cover the Notes column and answer each cue aloud.",
    "2. Check your answer and mark the ones you missed.",
    "3. Redraw each visual memory aid from memory.",
    "4. Repeat the next day and again a few days later. Recall spread over several days builds memory that rereading does not.",
    "5. Finish the IXL plan to SmartScore 80+ before the test.", "");
  return L.join("\n");
}

function tracker() {
  const L = ["# Progress Tracker", "",
    "One copy per student. Check a box when the evidence is in. Teachers can record the level (1–4) from [ASSESSMENT.md](ASSESSMENT.md) next to each objective.", ""];
  for (const u of UNITS) {
    L.push(`## Unit ${u.num}: ${u.title} (${u.pacing})`, "", "| Objective | Level (1–4) | Date |", "|---|---|---|",
      ...u.objectives.map((o) => `| ${o.id}. ${mdInline(o.text)} | | |`), "",
      "- [ ] Cornell notes self-test: every cue answered aloud from memory",
      `- [ ] Interactive quiz: ${Math.ceil(u.quiz.length * 0.8)} of ${u.quiz.length} or better`,
      "- [ ] Practice problems complete and checked",
      "- [ ] IXL plan at SmartScore 80+",
      "- [ ] Lab report submitted",
      "- [ ] Unit test passed", "");
  }
  return L.join("\n");
}

// ---------- Word (.docx) ----------
const NAVY = "1F3864", PURPLE = "5B2C83", HEAD = "D9E2F3", CUE = "EEF3FA", IXLFILL = "EDE4F5", GREEN = "E2EFDA", YELLOW = "FFF2CC";
const W_CUE = 2700, W_NOTES = 6660, W_ALL = 9360;
const BORDER = { style: D.BorderStyle.SINGLE, size: 4, color: "8EA9DB" };
const BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER };
const NOBORDER = { style: D.BorderStyle.NONE, size: 0, color: "FFFFFF" };
const NOBORDERS = { top: NOBORDER, bottom: NOBORDER, left: NOBORDER, right: NOBORDER };
const MARGINS = { top: 70, bottom: 70, left: 110, right: 110 };

function runs(s, base = {}) {
  return segments(s).map((g) => new D.TextRun({ text: g.text, bold: g.bold || base.bold, subScript: !!g.sub, ...base, ...(g.bold ? { bold: true } : {}) }));
}
function para(s, opts = {}, runOpts = {}) {
  return new D.Paragraph({ spacing: { after: 60 }, ...opts, children: runs(s, runOpts) });
}
function bullet(s, runOpts = {}) {
  return new D.Paragraph({ numbering: { reference: "bul", level: 0 }, spacing: { after: 40 }, children: runs(s, runOpts) });
}
function cell(children, width, fill, span) {
  return new D.TableCell({
    children, width: { size: width, type: D.WidthType.DXA }, borders: BORDERS, margins: MARGINS,
    shading: fill ? { type: D.ShadingType.CLEAR, color: "auto", fill } : undefined, columnSpan: span,
  });
}
function fullRow(children, fill) {
  return new D.TableRow({ cantSplit: true, children: [cell(children, W_ALL, fill, 2)] });
}
function label(text, color, keepNext = false) {
  return new D.Paragraph({ spacing: { after: 60 }, keepNext, children: [new D.TextRun({ text, bold: true, color, size: 22 })] });
}
function pngSize(file) {
  const b = fs.readFileSync(file);
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
}
function rule(color) {
  return { bottom: { style: D.BorderStyle.SINGLE, size: 12, color, space: 2 } };
}
function pageBreak() {
  return new D.Paragraph({ children: [new D.PageBreak()] });
}

function buildDocx(u) {
  const kids = [];
  // 1. Cover page
  kids.push(new D.Paragraph({ spacing: { after: 40 }, children: [new D.TextRun({ text: `Cornell Notes: ${u.title}`, bold: true, size: 36, color: NAVY })] }));
  kids.push(new D.Paragraph({ spacing: { after: 140 }, children: [new D.TextRun({ text: u.subtitle, italics: true, size: 20, color: "444444" })] }));
  kids.push(para("Name: ______________________________    Period: ________    Date: ______________", { spacing: { after: 160 } }));
  kids.push(label("Learning Targets", NAVY));
  u.targets.forEach((t) => kids.push(bullet(t)));
  kids.push(new D.Paragraph({ spacing: { before: 100, after: 140 }, children: [new D.TextRun({ text: "Essential Question: ", bold: true, color: NAVY }), ...runs(u.essentialQuestion)] }));
  kids.push(new D.Paragraph({ spacing: { after: 100 }, border: rule(NAVY), children: [new D.TextRun({ text: "OUTLINE", bold: true, color: NAVY, size: 24 })] }));
  for (const sec of u.sections) {
    kids.push(new D.Paragraph({ spacing: { before: 70, after: 20 }, keepNext: true, children: [new D.TextRun({ text: sec.title, bold: true, color: NAVY, size: 20 })] }));
    kids.push(new D.Paragraph({ indent: { left: 360 }, spacing: { after: 20 }, keepNext: sec.ixl.length > 0, children: runs(sec.rows.map((r) => r.cue).join(" • "), { size: 17 }) }));
    if (sec.ixl.length) kids.push(new D.Paragraph({ indent: { left: 360 }, spacing: { after: 30 }, children: [new D.TextRun({ text: "IXL: " + compressCodes(sec.ixl), size: 17, color: PURPLE, bold: true })] }));
  }
  kids.push(new D.Paragraph({ spacing: { before: 120 }, children: [new D.TextRun({ text: "Memory Tricks • Summary • Visual Memory Aids • Memory Tricks & Study Methods • IXL Practice Plan • Self-Test Tip", size: 17, italics: true, color: NAVY })] }));
  kids.push(pageBreak());

  // 2. Cornell table
  const rows = [new D.TableRow({
    tableHeader: true, cantSplit: true,
    children: [cell([label("CUES / QUESTIONS", NAVY)], W_CUE, HEAD), cell([label("NOTES", NAVY)], W_NOTES, HEAD)],
  })];
  for (const sec of u.sections) {
    rows.push(fullRow([new D.Paragraph({ keepNext: true, spacing: { after: 40 }, children: [new D.TextRun({ text: sec.title, bold: true, color: NAVY, size: 24 })] })], HEAD));
    sec.rows.forEach((r, ri) => {
      // Keep the last notes row with the IXL box so the box is never orphaned.
      const last = ri === sec.rows.length - 1;
      rows.push(new D.TableRow({
        cantSplit: true,
        children: [
          cell([new D.Paragraph({ keepNext: last, children: runs(r.cue, { bold: true, color: NAVY }) })], W_CUE, CUE),
          cell(r.notes.map((n) => new D.Paragraph({ numbering: { reference: "bul", level: 0 }, spacing: { after: 40 }, keepNext: last, children: runs(n) })), W_NOTES),
        ],
      }));
    });
    const ixlKids = [label("IXL PRACTICE (goal: SmartScore 80+)", PURPLE)];
    if (sec.ixl.length) sec.ixl.forEach(([c, n]) => ixlKids.push(bullet(`**${c}** ${n}`)));
    else ixlKids.push(para(sec.ixlNote));
    rows.push(fullRow(ixlKids, IXLFILL));
  }
  rows.push(fullRow([label("MEMORY TRICKS", "375623"), ...u.mnemonics.map((m) => bullet(`**${m.trick.replace(/\.$/, "")}.** ${m.when}`))], GREEN));
  rows.push(fullRow([label("SUMMARY", "7F6000"), para(u.summary)], YELLOW));
  kids.push(new D.Table({ width: { size: W_ALL, type: D.WidthType.DXA }, columnWidths: [W_CUE, W_NOTES], rows }));

  // 3. Visual memory aids
  kids.push(pageBreak());
  kids.push(new D.Paragraph({ spacing: { after: 160 }, border: rule(NAVY), children: [new D.TextRun({ text: "VISUAL MEMORY AIDS", bold: true, color: NAVY, size: 28 })] }));
  const vrows = [];
  for (let i = 0; i < u.visuals.length; i += 2) {
    const cells = [0, 1].map((k) => {
      const v = u.visuals[i + k];
      if (!v) return new D.TableCell({ children: [new D.Paragraph("")], width: { size: 4680, type: D.WidthType.DXA }, borders: NOBORDERS });
      const file = path.join(ROOT, "assets", "diagrams", u.slug, v.img);
      const { w, h } = pngSize(file);
      const maxW = 280, maxH = 250;
      const scale = Math.min(maxW / w, maxH / h);
      return new D.TableCell({
        width: { size: 4680, type: D.WidthType.DXA }, borders: NOBORDERS, margins: { top: 100, bottom: 160, left: 100, right: 100 },
        children: [
          new D.Paragraph({ alignment: D.AlignmentType.CENTER, keepNext: true, children: [new D.ImageRun({ type: "png", data: fs.readFileSync(file), transformation: { width: Math.round(w * scale), height: Math.round(h * scale) }, altText: { title: v.img, description: plain(v.caption), name: v.img } })] }),
          para(v.caption, { keepNext: true, spacing: { before: 60, after: 40 } }),
          new D.Paragraph({ children: runs(v.rule, { bold: true, color: NAVY, size: 22 }) }),
        ],
      });
    });
    vrows.push(new D.TableRow({ cantSplit: true, children: cells }));
  }
  kids.push(new D.Table({ width: { size: W_ALL, type: D.WidthType.DXA }, columnWidths: [4680, 4680], rows: vrows }));

  // 4. Memory tricks and study methods
  kids.push(pageBreak());
  kids.push(new D.Paragraph({ spacing: { after: 160 }, shading: { type: D.ShadingType.CLEAR, color: "auto", fill: GREEN }, children: [new D.TextRun({ text: "MEMORY TRICKS & STUDY METHODS", bold: true, color: "375623", size: 28 })] }));
  kids.push(label("Rules of thumb for this unit", NAVY));
  u.mnemonics.forEach((m) => {
    kids.push(new D.Paragraph({ spacing: { before: 80, after: 20 }, children: runs(m.trick, { bold: true }) }));
    kids.push(new D.Paragraph({ indent: { left: 360 }, spacing: { after: 60 }, children: [new D.TextRun({ text: "Use it when: ", italics: true }), ...runs(m.when)] }));
  });
  kids.push(new D.Paragraph({ spacing: { before: 240, after: 80 }, children: [new D.TextRun({ text: "Study method", bold: true, color: NAVY, size: 22 })] }));
  [
    "Cover the Notes column and answer each cue aloud.",
    "Check your answer and mark the cues you missed.",
    "Redraw each Visual Memory Aid from memory.",
    "Repeat the next day and again a few days later. Recall spread over several days builds memory that rereading does not.",
    "Finish the IXL plan to SmartScore 80+ before the test.",
  ].forEach((s) => kids.push(new D.Paragraph({ numbering: { reference: "num", level: 0 }, spacing: { after: 60 }, children: runs(s) })));

  // 5. IXL practice plan
  kids.push(pageBreak());
  kids.push(new D.Paragraph({ spacing: { after: 120 }, border: rule(PURPLE), children: [new D.TextRun({ text: "IXL PRACTICE PLAN", bold: true, color: PURPLE, size: 28 })] }));
  kids.push(para("Work each skill until your SmartScore is 80 or higher. Finish the whole list before the unit test.", { spacing: { after: 140 } }));
  const PW = [700, 500, 1900, 4860, 1400];
  const prow = (vals, head) => new D.TableRow({
    cantSplit: true, tableHeader: head,
    children: vals.map((v, i) => cell([new D.Paragraph({ alignment: i < 2 ? D.AlignmentType.CENTER : D.AlignmentType.LEFT, children: [new D.TextRun({ text: v, bold: head || i === 2, color: head ? PURPLE : undefined })] })], PW[i], head ? IXLFILL : undefined)),
  });
  kids.push(new D.Table({
    width: { size: W_ALL, type: D.WidthType.DXA }, columnWidths: PW,
    rows: [prow(["Done", "#", "Skill", "Skill name", "Notes section"], true), ...ixlPlan(u).map((r, i) => prow(["☐", String(i + 1), r.code, r.name, r.section], false))],
  }));
  kids.push(new D.Paragraph({ spacing: { before: 200, after: 120 }, children: [new D.TextRun({ text: "No IXL match: ", bold: true, color: PURPLE }), ...runs(u.noIxl)] }));
  kids.push(new D.Paragraph({ children: [new D.TextRun({ text: "Self-test tip: cover the Notes column, answer each cue aloud, and redo every worked example without looking.", italics: true })] }));

  return new D.Document({
    creator: "Physics course project",
    title: `Cornell Notes: ${u.title}`,
    styles: { default: { document: { run: { font: "Calibri", size: 21 } } } },
    numbering: {
      config: [
        { reference: "bul", levels: [{ level: 0, format: D.LevelFormat.BULLET, text: "•", alignment: D.AlignmentType.LEFT, style: { paragraph: { indent: { left: 300, hanging: 200 } } } }] },
        { reference: "num", levels: [{ level: 0, format: D.LevelFormat.DECIMAL, text: "%1.", alignment: D.AlignmentType.LEFT, style: { paragraph: { indent: { left: 420, hanging: 300 } } } }] },
      ],
    },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
      footers: {
        default: new D.Footer({
          children: [new D.Paragraph({ alignment: D.AlignmentType.CENTER, children: [new D.TextRun({ text: `${u.title} Cornell Notes | Page `, size: 16, color: "808080" }), new D.TextRun({ children: [D.PageNumber.CURRENT], size: 16, color: "808080" })] })],
        }),
      },
      children: kids,
    }],
  });
}

// ---------- write everything ----------
(async () => {
  for (const u of UNITS) {
    const dir = path.join(ROOT, "units", u.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "README.md"), unitReadme(u));
    fs.writeFileSync(path.join(dir, "cornell-notes.md"), cornellMd(u));
    fs.writeFileSync(path.join(dir, "cornell-notes.docx"), await D.Packer.toBuffer(buildDocx(u)));
  }
  fs.writeFileSync(path.join(ROOT, "docs", "PROGRESS-TRACKER.md"), tracker());
  const quizData = UNITS.map((u) => ({
    id: u.slug.slice(3), num: u.num, title: u.title, short: u.short,
    questions: u.quiz.map((q) => ({ q: q.q, choices: q.choices, answer: q.answer, why: q.why, miss: q.misconception })),
  }));
  const tpl = fs.readFileSync(path.join(ROOT, "quiz", "template.html"), "utf8");
  fs.writeFileSync(path.join(ROOT, "quiz", "index.html"), tpl.replace("/*QUIZ_DATA*/[]", () => JSON.stringify(quizData)));
  console.log(`built ${UNITS.length} units, ${UNITS.reduce((n, u) => n + u.quiz.length, 0)} quiz questions`);
})();
