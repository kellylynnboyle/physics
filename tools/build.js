// Builds every generated file in this repo from tools/content/*.js.
//   node tools/build.js
// Needs the `docx` npm package. Run `python3 tools/diagrams.py` first if assets/diagrams is empty.
const fs = require("fs");
const path = require("path");
const D = require("docx");

const ROOT = path.join(__dirname, "..");
const UNITS = fs.readdirSync(path.join(__dirname, "content")).filter((f) => f.endsWith(".js")).sort()
  .map((f) => require("./content/" + f));

// How each learning target is checked. Order matches `targets` in the content files.
const EVIDENCE = {
  kinematics: ["Cornell cues 1.1–1.3; quiz Q2", "Practice problems 1–2; IXL Physics D.2–D.3", "Graph-matching lab; practice problem 6; quiz Q3, Q6, Q8, Q10", "Practice problems 2 and 5; IXL Physics D.4", "Practice problems 3–4; free-fall lab; quiz Q1, Q5, Q7"],
  projectile: ["Practice problem 1; IXL Physics C.2–C.3", "Cornell cues in section 2; quiz Q2, Q3, Q7, Q10", "Practice problems 2, 4, 6; hit-the-target lab", "Practice problem 3; IXL Physics E.2", "Practice problem 5; launch-angle lab; quiz Q5, Q6, Q8"],
  newton: ["Free-body diagram check; practice problem 3", "Cornell cues in section 2; quiz Q2, Q4, Q7, Q9", "Cart-and-hanging-mass lab report (HS-PS2-1); practice problems 2–5", "Practice problem 6; quiz Q1, Q5", "Practice problems 1 and 4; friction lab; quiz Q6"],
  momentum: ["Practice problem 1; quiz Q8", "Practice problem 2; IXL “Calculate linear momentum and impulse”", "Egg-drop design report (HS-PS2-3); practice problem 3; quiz Q3", "Cart-collision lab (HS-PS2-2); practice problems 4–6; IXL Physics G.1", "Practice problem 6; quiz Q1, Q9"],
  energy: ["Practice problem 1; IXL Physics H.1; quiz Q1, Q5", "Practice problem 2; quiz Q2, Q8", "Practice problems 3–5; ramp or pendulum lab; IXL Physics H.2", "Energy bar charts; spreadsheet model (HS-PS3-1); device report (HS-PS3-3)", "Practice problem 6; stair-climb lab; quiz Q7"],
};

const NAVY = "1F3864", PURPLE = "5B2C83", GRAY = "7F7F7F";
const FILL = { head: "D9E2F3", cue: "EEF3FA", ixl: "EDE4F5", mem: "E2EFDA", sum: "FFF2CC" };
const FONT = "Calibri";
const W = { cue: 2700, notes: 6660, all: 9360 };

// ---------------------------------------------------------------- docx helpers
const run = (text, o = {}) => new D.TextRun({ text, font: FONT, size: 21, ...o });
/** Turns "plain **bold** plain" into runs. */
function rich(text, o = {}) {
  return text.split("**").map((part, i) => part && run(part, { ...o, bold: i % 2 === 1 || o.bold })).filter(Boolean);
}
const para = (children, o = {}) => new D.Paragraph({ children: [].concat(children), spacing: { before: 0, after: 60 }, ...o });
const bullet = (text, o = {}) => para(rich(text, o.run), { numbering: { reference: "dots", level: 0 }, spacing: { before: 0, after: 40 }, ...o.para });
const shade = (fill) => ({ type: D.ShadingType.CLEAR, color: "auto", fill });
const MARGINS = { top: 70, bottom: 70, left: 110, right: 110 };
const thin = { style: D.BorderStyle.SINGLE, size: 4, color: "8EA9DB" };
const BORDERS = { top: thin, bottom: thin, left: thin, right: thin };
const none = { style: D.BorderStyle.NONE, size: 0, color: "FFFFFF" };
const NOBORDERS = { top: none, bottom: none, left: none, right: none };

function cell(children, width, o = {}) {
  return new D.TableCell({ children, width: { size: width, type: D.WidthType.DXA }, margins: MARGINS, borders: BORDERS,
    verticalAlign: D.VerticalAlign.TOP, ...(o.fill ? { shading: shade(o.fill) } : {}), ...(o.span ? { columnSpan: o.span } : {}) });
}
const row = (cells, o = {}) => new D.TableRow({ children: cells, cantSplit: true, ...o });
const fullRow = (children, fill) => row([cell(children, W.all, { fill, span: 2 })]);
const rule = (color) => ({ bottom: { style: D.BorderStyle.SINGLE, size: 12, color, space: 2 } });
const pageBreak = () => new D.Paragraph({ children: [new D.PageBreak()] });
const ixlCode = ([course, code]) => `${course} ${code}`;

function heading(text, color, o = {}) {
  return para(run(text, { bold: true, size: 28, color }), { border: rule(color), spacing: { before: 0, after: 160 }, keepNext: true, ...o });
}

// ---------------------------------------------------------------- Cornell notes (.docx)
function coverPage(u) {
  const out = [
    para(run(`Cornell Notes: ${u.title}`, { bold: true, size: 36, color: NAVY }), { spacing: { after: 40 } }),
    para(run(u.subtitle, { italics: true, size: 20, color: "404040" }), { spacing: { after: 140 } }),
    para(run("Name: ______________________________     Period: ________     Date: ______________", { size: 20 }), { spacing: { after: 160 } }),
    para(run("Learning Targets", { bold: true, size: 22, color: NAVY }), { spacing: { after: 40 } }),
    ...u.targets.map((t) => bullet(t, { run: { size: 19 }, para: { spacing: { after: 20 } } })),
    para([run("Essential Question: ", { bold: true, size: 20, color: NAVY }), run(u.essentialQuestion, { italics: true, size: 20 })], { spacing: { before: 120, after: 160 } }),
    para(run("OUTLINE", { bold: true, size: 24, color: NAVY }), { border: rule(NAVY), spacing: { after: 100 } }),
  ];
  for (const s of u.sections) {
    out.push(para(run(s.title, { bold: true, size: 20, color: NAVY }), { spacing: { before: 60, after: 10 }, keepNext: true }));
    out.push(para(run(s.cues.map((c) => c.q).join(" • "), { size: 17 }), { indent: { left: 280 }, spacing: { after: 10 }, keepNext: true }));
    out.push(para(run(s.ixlShort, { size: 17, color: PURPLE, bold: true }), { indent: { left: 280 }, spacing: { after: 30 } }));
  }
  out.push(para(run("Memory Tricks • Summary • Visual Memory Aids • Memory Tricks & Study Methods • IXL Practice Plan • Self-Test Tip", { size: 18, bold: true, color: NAVY }), { spacing: { before: 100 } }));
  out.push(pageBreak());
  return out;
}

function cornellTable(u) {
  const rows = [new D.TableRow({ tableHeader: true, cantSplit: true, children: [
    cell([para(run("CUES / QUESTIONS", { bold: true, color: NAVY }))], W.cue, { fill: FILL.head }),
    cell([para(run("NOTES", { bold: true, color: NAVY }))], W.notes, { fill: FILL.head }),
  ] })];
  for (const s of u.sections) {
    rows.push(fullRow([para(run(s.title, { bold: true, size: 24, color: NAVY }), { keepNext: true })], FILL.head));
    s.cues.forEach((c, ci) => {
      // The last cue of a section stays on the same page as the IXL box that follows it.
      const keep = ci === s.cues.length - 1 ? { keepNext: true } : {};
      rows.push(row([
        cell([para(run(c.q, { bold: true, color: NAVY }), keep)], W.cue, { fill: FILL.cue }),
        cell(c.notes.map((n) => bullet(n, { para: keep })), W.notes),
      ]));
    });
    const ixlKids = [para(run("IXL PRACTICE (goal: SmartScore 80+)", { bold: true, color: PURPLE, size: 19 }))];
    if (s.ixl.length) for (const x of s.ixl) ixlKids.push(bullet(`**${ixlCode(x)}** ${x[2]}`, { run: { size: 19 } }));
    if (s.noIxl) ixlKids.push(para(run(s.noIxl, { size: 19 })));
    rows.push(fullRow(ixlKids, FILL.ixl));
  }
  rows.push(fullRow([para(run("MEMORY TRICKS", { bold: true, color: "375623" })), ...u.mnemonics.map((m) => bullet(`**${m[0]}**`))], FILL.mem));
  rows.push(fullRow([para(run("SUMMARY", { bold: true, color: "7F6000" })), para(run(u.summary))], FILL.sum));
  return new D.Table({ width: { size: W.all, type: D.WidthType.DXA }, columnWidths: [W.cue, W.notes], rows });
}

function visualAids(u) {
  const half = W.all / 2;
  const panel = (v) => new D.TableCell({ width: { size: half, type: D.WidthType.DXA }, borders: NOBORDERS,
    margins: { top: 60, bottom: 160, left: 80, right: 80 }, children: [
      para(new D.ImageRun({ type: "png", data: fs.readFileSync(path.join(ROOT, "assets", "diagrams", v[0] + ".png")),
        transformation: { width: 290, height: 214 } }), { alignment: D.AlignmentType.CENTER }),
      para(run(v[1], { size: 19 }), { spacing: { after: 30 } }),
      para([run("Rule: ", { bold: true, size: 19, color: NAVY }), run(v[2], { bold: true, size: 19 })]),
    ] });
  const rows = [];
  for (let i = 0; i < u.visuals.length; i += 2) rows.push(new D.TableRow({ cantSplit: true, children: [panel(u.visuals[i]), panel(u.visuals[i + 1])] }));
  return [pageBreak(), heading("VISUAL MEMORY AIDS", NAVY),
    para(run("Each panel shows one key idea three ways: a diagram, a sentence, and the rule. Redraw each from memory.", { italics: true, size: 19 }), { spacing: { after: 120 } }),
    new D.Table({ width: { size: W.all, type: D.WidthType.DXA }, columnWidths: [half, half], rows })];
}

function studyPage(u) {
  const steps = [
    "**Cover the Notes column** and answer each cue aloud.",
    "**Check and mark misses.** Put a small dot next to every cue you could not answer.",
    "**Redraw each Visual Memory Aid** from memory, with labels and the rule.",
    "**Repeat the next day and again a few days later.** Recall spread over days builds retention that rereading does not.",
    "**Finish the IXL plan** to SmartScore 80+ before the test, and score 8 out of 10 on the unit's missed-question quiz.",
  ];
  return [pageBreak(),
    para(run("MEMORY TRICKS & STUDY METHODS", { bold: true, size: 28, color: "375623" }), { shading: shade(FILL.mem), spacing: { after: 160 } }),
    para(run("Tricks and rules of thumb for this unit", { bold: true, size: 23, color: NAVY }), { spacing: { after: 80 } }),
    ...u.mnemonics.flatMap((m) => [para(run(m[0], { bold: true }), { spacing: { after: 10 }, keepNext: true }), para(run(m[1], { size: 20, color: "404040" }), { indent: { left: 280 }, spacing: { after: 90 } })]),
    para(run("How to study from these notes", { bold: true, size: 23, color: NAVY }), { spacing: { before: 160, after: 80 } }),
    ...steps.map((s) => new D.Paragraph({ children: rich(s), numbering: { reference: "steps", level: 0 }, spacing: { after: 70 } })),
  ];
}

function ixlList(u) {
  const group = ([course, code]) => (course === "Physics" && /^[AB]\./.test(code)) || (course === "Grade 8" && /^KK/.test(code)) ? 0
    : (course === "Physics" && /^C\./.test(code)) || course === "Precalculus" ? 1 : course === "Grade 8" ? 2 : 3;
  const seen = new Map();
  u.sections.forEach((s, si) => s.ixl.forEach((x) => {
    const k = ixlCode(x) + x[2];
    if (!seen.has(k)) seen.set(k, { x, secs: [] });
    seen.get(k).secs.push(si + 1);
  }));
  const all = [...seen.values()].map((v, i) => ({ ...v, i }));
  return all.sort((a, b) => group(a.x) - group(b.x) || a.i - b.i);
}

function ixlPlan(u) {
  const widths = [700, 500, 1900, 4860, 1400];
  const hd = ["Done", "#", "Skill", "Skill name", "Notes section"];
  const c = (t, i, o = {}) => new D.TableCell({ width: { size: widths[i], type: D.WidthType.DXA }, margins: MARGINS, borders: BORDERS,
    ...(o.fill ? { shading: shade(o.fill) } : {}), children: [para(run(t, { size: 19, bold: !!o.bold, color: o.color }), { alignment: i < 2 ? D.AlignmentType.CENTER : D.AlignmentType.LEFT })] });
  const rows = [new D.TableRow({ tableHeader: true, children: hd.map((h, i) => c(h, i, { fill: FILL.ixl, bold: true, color: PURPLE })) })];
  ixlList(u).forEach((e, n) => rows.push(new D.TableRow({ cantSplit: true, children: [
    c("☐", 0), c(String(n + 1), 1), c(ixlCode(e.x), 2, { bold: true }), c(e.x[2], 3), c(e.secs.join(", "), 4)] })));
  const noMatch = u.sections.filter((s) => s.noIxl).map((s) => s.title.replace(/^\d+\.\s*/, ""));
  return [pageBreak(), heading("IXL PRACTICE PLAN", PURPLE),
    para(run("Work each skill to SmartScore 80+ before the unit test. Check the box when you reach it.", { size: 20 }), { spacing: { after: 120 } }),
    new D.Table({ width: { size: W.all, type: D.WidthType.DXA }, columnWidths: widths, rows }),
    para([run("No IXL match: ", { bold: true, size: 19, color: PURPLE }), run(noMatch.length
      ? `${noMatch.join("; ")}. Practice these with the Concept Builders at physicsclassroom.com.`
      : "every section of this unit has at least one IXL skill. The Concept Builders at physicsclassroom.com give extra practice.", { size: 19 })], { spacing: { before: 160, after: 80 } }),
    para(run("IXL skills marked (New) have no number on IXL yet; find them by name in the Physics skill list.", { size: 18, color: GRAY })),
    para(run("Self-test tip: cover the Notes column, answer each cue aloud, then redo every worked example on blank paper without looking.", { italics: true, size: 20 }), { spacing: { before: 120 } }),
  ];
}

async function buildDocx(u) {
  const doc = new D.Document({
    styles: { default: { document: { run: { font: FONT, size: 21 } } } },
    numbering: { config: [
      { reference: "dots", levels: [{ level: 0, format: D.LevelFormat.BULLET, text: "•", alignment: D.AlignmentType.LEFT, style: { paragraph: { indent: { left: 260, hanging: 200 } } } }] },
      { reference: "steps", levels: [{ level: 0, format: D.LevelFormat.DECIMAL, text: "%1.", alignment: D.AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 300 } } } }] },
    ] },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      footers: { default: new D.Footer({ children: [new D.Paragraph({ alignment: D.AlignmentType.CENTER, children: [
        run(`${u.title} Cornell Notes | Page `, { size: 16, color: GRAY }), new D.TextRun({ children: [D.PageNumber.CURRENT], font: FONT, size: 16, color: GRAY })] })] }) },
      children: [...coverPage(u), cornellTable(u), ...visualAids(u), ...studyPage(u), ...ixlPlan(u)],
    }],
  });
  const file = path.join(ROOT, "units", u.dir, `Cornell-Notes-${u.title.replace(/'/g, "").replace(/[^A-Za-z]+/g, "-")}.docx`);
  fs.writeFileSync(file, await D.Packer.toBuffer(doc));
  return path.basename(file);
}

// ---------------------------------------------------------------- Markdown
const mdCell = (s) => s.replace(/\|/g, "\\|");

function cornellMd(u, docxName) {
  let m = `# Cornell Notes: ${u.title}\n\n*${u.subtitle}*\n\n> Printable version with the Visual Memory Aids laid out for class: [${docxName}](${encodeURI(docxName)})\n\n`;
  m += `**Essential question:** ${u.essentialQuestion}\n\n**Learning targets**\n\n${u.targets.map((t) => `- ${t}`).join("\n")}\n\n`;
  m += `**How to use:** cover the Notes column, answer each cue aloud, then check.\n\n`;
  for (const s of u.sections) {
    m += `## ${s.title}\n\n| Cues / Questions | Notes |\n|---|---|\n`;
    for (const c of s.cues) m += `| **${mdCell(c.q)}** | ${c.notes.map((n) => "• " + mdCell(n)).join("<br>")} |\n`;
    m += `\n**IXL practice (goal: SmartScore 80+):** ${s.ixl.length ? s.ixl.map((x) => `**${ixlCode(x)}** ${x[2]}`).join("; ") : ""}${s.noIxl ? (s.ixl.length ? " " : "") + s.noIxl : ""}\n\n`;
  }
  m += `## Memory tricks\n\n${u.mnemonics.map((x) => `- **${x[0]}.** ${x[1]}`).join("\n")}\n\n## Summary\n\n${u.summary}\n\n## Visual memory aids\n\n`;
  m += `| | |\n|---|---|\n`;
  for (let i = 0; i < u.visuals.length; i += 2) {
    const p = (v) => `<img src="../../assets/diagrams/${v[0]}.png" width="360" alt="${v[1].replace(/"/g, "")}"><br>${mdCell(v[1])}<br>**Rule:** ${mdCell(v[2])}`;
    m += `| ${p(u.visuals[i])} | ${p(u.visuals[i + 1])} |\n`;
  }
  return m;
}

function unitMd(u, docxName) {
  const ev = EVIDENCE[u.id];
  let m = `# Unit ${u.num}: ${u.title}\n\n**Pacing:** ${u.weeks} of Semester 1  \n**Essential question:** ${u.essentialQuestion}\n\n`;
  m += `**NGSS (California) alignment**\n\n${u.ngss.map((n) => `- ${n}`).join("\n")}\n\n`;
  m += `## Unit checklist\n\n- [ ] Read the key concepts below\n- [ ] Complete the Cornell notes: [view online](cornell-notes.md) or [print the Word file](${encodeURI(docxName)})\n- [ ] Self-test: cover the Notes column and answer every cue aloud\n- [ ] Work the six practice problems and check the answers\n- [ ] Complete the labs and hand in the lab report\n- [ ] Reach SmartScore 80+ on each IXL skill listed\n- [ ] Score 8 out of 10 or better on the [missed-question quiz](../../quizzes/index.html#${u.id})\n- [ ] Pass the unit test (70% or better; 85% or better for mastery)\n\n`;
  m += `## Learning objectives and how each is assessed\n\n| # | I can… | Evidence | Mastered? |\n|---|---|---|---|\n`;
  u.targets.forEach((t, i) => { m += `| ${u.num}.${i + 1} | ${mdCell(t.replace(/^I can /, ""))} | ${mdCell(ev[i])} | ☐ |\n`; });
  m += `\nScoring for each objective uses the 4-point scale in [docs/assessment.md](../../docs/assessment.md). An objective is mastered at level 3 or higher.\n\n`;
  m += `## Key concepts\n\n| Concept | What students need to know |\n|---|---|\n${u.concepts.map((c) => `| **${c[0]}** | ${mdCell(c[1])} |`).join("\n")}\n\n`;
  m += `## Learning resources\n\n${u.resources.map((r) => `- [${r[0]}](${r[1]}): ${r[2]}`).join("\n")}\n\n`;
  m += `## Labs and investigations\n\n${u.labs.map((l) => `- ${l}`).join("\n")}\n\n`;
  m += `## Practice problems\n\nUse g = 9.8 m/s². Show the givens, the equation, the substitution, and units. Open each answer only after you have tried the problem.\n\n`;
  u.practice.forEach((p, i) => { m += `${i + 1}. ${p[0]}\n   <details><summary>Answer</summary>${p[1]}</details>\n`; });
  m += `\n## Real-world applications\n\n${u.realWorld.map((r) => `- ${r}`).join("\n")}\n\n`;
  m += `## IXL practice plan\n\nGoal: SmartScore 80+ on each skill. Codes were checked against the live IXL skill lists on 17 November 2026; IXL renumbers skills from time to time, so search by name if a code has moved.\n\n| Done | Skill | Skill name |\n|---|---|---|\n`;
  for (const e of ixlList(u)) m += `| ☐ | ${ixlCode(e.x)} | ${e.x[2]} |\n`;
  m += `\n## Most-missed ideas in this unit\n\nThese are the traps the unit quiz is built around.\n\n${u.quiz.map((q) => `- ${q.trap}`).join("\n")}\n`;
  return m;
}

// ---------------------------------------------------------------- Quiz page
function buildQuiz() {
  const data = UNITS.map((u) => ({ id: u.id, num: u.num, title: u.title, quiz: u.quiz }));
  for (const u of data) for (const q of u.quiz) if (q.c.length !== 4 || q.a < 0 || q.a > 3) throw new Error("bad quiz item: " + q.q);
  const fragment = fs.readFileSync(path.join(__dirname, "quiz-template.html"), "utf8").replace("/*DATA*/[]", JSON.stringify(data));
  fs.mkdirSync(path.join(ROOT, "quizzes"), { recursive: true });
  fs.writeFileSync(path.join(ROOT, "quizzes", "index.html"),
    `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n</head>\n${fragment}</html>\n`);
  if (process.env.QUIZ_FRAGMENT_OUT) fs.writeFileSync(process.env.QUIZ_FRAGMENT_OUT, fragment);
}

(async () => {
  for (const u of UNITS) {
    fs.mkdirSync(path.join(ROOT, "units", u.dir), { recursive: true });
    const docxName = await buildDocx(u);
    fs.writeFileSync(path.join(ROOT, "units", u.dir, "cornell-notes.md"), cornellMd(u, docxName));
    fs.writeFileSync(path.join(ROOT, "units", u.dir, "README.md"), unitMd(u, docxName));
    console.log(`unit ${u.num}: ${u.title} (${u.sections.length} sections, ${u.quiz.length} quiz questions)`);
  }
  buildQuiz();
  console.log("quiz page written");
})();
