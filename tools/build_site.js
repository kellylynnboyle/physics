// Builds the markdown pages and the quiz page from content/*.js
// Run: node tools/build_site.js
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const units = require('./units');
const site = JSON.parse(fs.readFileSync(process.env.SITE_JSON || path.join(__dirname, 'site.json'), 'utf8'));
const md = s => String(s).replace(/_\{([^}]*)\}/g, '<sub>$1</sub>').replace(/\|/g, '\\|');
const w = (rel, text) => { fs.mkdirSync(path.dirname(path.join(ROOT, rel)), { recursive: true }); fs.writeFileSync(path.join(ROOT, rel), text); console.log('wrote', rel); };
const quizLink = site.quizUrl ? `[open the online quiz page](${site.quizUrl})` : 'download `quizzes/index.html` and open it in a browser';

// ---------- quiz page ----------
const data = units.map(u => ({ id: u.id, num: u.num, title: u.title, quiz: u.quiz }));
const body = fs.readFileSync(path.join(__dirname, 'quiz_template.html'), 'utf8').replace('/*DATA*/', JSON.stringify(data).replace(/</g, '\\u003c'));
const split = body.indexOf('<div class="wrap"');
w('quizzes/index.html', `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n${body.slice(0, split)}</head>\n<body>\n${body.slice(split)}</body>\n</html>\n`);
if (site.artifactOut) { fs.mkdirSync(path.dirname(site.artifactOut), { recursive: true }); fs.writeFileSync(site.artifactOut, body); }

// ---------- per-unit pages ----------
units.forEach(u => {
  const plan = [];
  u.sections.forEach((s, i) => s.ixl.forEach(([c, n]) => { if (!plan.some(p => p[0] === c)) plan.push([c, n, i + 1]); }));
  let g = `# Unit ${u.num}: ${u.title}\n\n*${u.subtitle}*\n\n**Suggested time:** ${u.weeks}  \n**Essential question:** ${u.essential}\n\n`;
  g += `| Material | File |\n|---|---|\n| Cornell notes (print or fill in) | [cornell-notes.docx](cornell-notes.docx) |\n| Cornell notes (read online) | [cornell-notes.md](cornell-notes.md) |\n| Interactive quiz | [quizzes/index.html](../../quizzes/index.html)${site.quizUrl ? ` or [online](${site.quizUrl}#${u.id})` : ''} |\n\n`;
  g += `## Standards (CA NGSS)\n\n${u.ngss.map(n => `- ${n}`).join('\n')}\n\n`;
  g += `## Key concepts\n\n${u.keyConcepts.map(k => `- ${md(k)}`).join('\n')}\n\n`;
  g += `## Learning objectives and assessment criteria\n\nScore each objective on the 4-point mastery scale in the [project outline](../../README.md#assessment-and-progress-tracking).\n\n| ID | Objective: the student can... | Standard | Evidence of mastery (level 3) |\n|---|---|---|---|\n${u.objectives.map(o => `| ${o[0]} | ${md(o[1])} | ${md(o[2])} | ${md(o[3])} |`).join('\n')}\n\n`;
  g += `## Student checklist\n\n- [ ] Read the Cornell notes and answer every cue question aloud with the Notes column covered\n- [ ] Redraw the ${u.visuals.length} Visual Memory Aids from memory\n- [ ] Complete the practice problems below and check the answers\n- [ ] Reach SmartScore 80+ on the ${plan.length} IXL skills in the practice plan\n- [ ] Score ${Math.ceil(u.quiz.length * 0.8)}/${u.quiz.length} or better on the unit quiz, then retry any missed questions\n- [ ] Complete the unit lab and its write-up\n\n`;
  g += `## Practice problems\n\n${u.practice.map((p, i) => `${i + 1}. ${md(p[0])}\n   <details><summary>Answer</summary>${md(p[1])}</details>`).join('\n')}\n\n`;
  g += `## Most often missed questions\n\nThe quiz targets these mistakes. Each one is a well-known misconception for this topic.\n\n${u.quiz.map(q => `- ${md(q.trap)}`).join('\n')}\n\n`;
  g += `## Learning resources\n\n| Resource | Use it for |\n|---|---|\n${u.resources.map(r => `| [${md(r[0])}](${r[1]}) | ${md(r[2])} |`).join('\n')}\n\n`;
  g += `## IXL practice plan\n\n| Skill | Skill name | Notes section |\n|---|---|---|\n${plan.map(p => `| ${p[0]} | ${md(p[1])} | ${p[2]} |`).join('\n')}\n\n`;
  g += `## Real-world applications\n\n${u.applications.map(a => `- ${md(a)}`).join('\n')}\n`;
  w(`units/${u.id}/README.md`, g);

  let n = `# Cornell Notes: ${u.title}\n\n*${u.subtitle}*\n\nPrintable version: [cornell-notes.docx](cornell-notes.docx)\n\n**Essential question:** ${u.essential}\n\n**Learning targets**\n\n${u.targets.map(t => `- ${md(t)}`).join('\n')}\n\n`;
  u.sections.forEach((s, i) => {
    n += `## ${i + 1}. ${s.title}\n\n| Cues / Questions | Notes |\n|---|---|\n${s.rows.map(r => `| **${md(r[0])}** | ${r[1].map(x => md(x)).join('<br>')} |`).join('\n')}\n\n`;
    n += `**IXL practice (goal: SmartScore 80+):** ${s.ixl.length ? s.ixl.map(x => `${x[0]} ${x[1]}`).join('; ') + '.' : ''}${s.noIxl ? ' ' + s.noIxl : ''}\n\n`;
  });
  n += `## Memory tricks\n\n${u.mnemonics.map(m => `- **${md(m[0])}** Use it: ${md(m[1])}`).join('\n')}\n\n## Summary\n\n${md(u.summary)}\n\n## Visual memory aids\n\n`;
  u.visuals.forEach(v => { n += `![${md(v.caption).replace(/<\/?sub>/g, '')}](img/${v.img})\n\n${md(v.caption)}  \n**Rule:** ${md(v.rule)}\n\n`; });
  n += `## Study method\n\n1. Cover the Notes column and answer each cue question aloud.\n2. Uncover, check, and mark every cue you missed.\n3. Redraw each Visual Memory Aid from memory.\n4. Repeat the next day and again a few days later.\n5. Finish the IXL plan to SmartScore 80+ and take the unit quiz before the test.\n`;
  w(`units/${u.id}/cornell-notes.md`, n);
});

// ---------- project outline ----------
const total = units.reduce((a, u) => a + u.quiz.length, 0);
let r = `# Physics: Semester 1 Learning Project\n\nA shareable project outline for an 11th-grade physics course (California NGSS, Physics and Earth Science course model). It covers the five first-semester topics. Each unit has Cornell notes, an interactive quiz on the most often missed questions, practice problems, resources, and objectives with assessment criteria.\n\n`;
r += `## Start here\n\n**Students:** pick your unit in the table, work through its checklist, and record your quiz score.  \n**Instructors:** the objectives, evidence of mastery, and tracker are under [Assessment and progress tracking](#assessment-and-progress-tracking).\n\n**Interactive quizzes (${total} questions):** ${quizLink}.\n\n`;
r += `| # | Unit | Time | Unit guide | Cornell notes | Standards |\n|---|---|---|---|---|---|\n${units.map(u => `| ${u.num} | ${u.title} | ${u.weeks} | [guide](units/${u.id}/README.md) | [docx](units/${u.id}/cornell-notes.docx) · [online](units/${u.id}/cornell-notes.md) | ${u.ngss.filter(x => /^HS-/.test(x)).map(x => x.split(/[: ]/)[0]).join(', ')} |`).join('\n')}\n\nTimes are suggestions that add up to 17 weeks, leaving one week for review and the semester final.\n\n`;
r += `## Course overview\n\nThis course provides lab experience, real-world connections, and a theoretical framework for many topics in physics.\n\n- **Semester 1 (this project):** kinematics, projectile motion, Newton's laws, momentum, work and energy.\n- **Semester 2 (not built yet):** electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics.\n\nThe learning goals are the [California NGSS standards](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp), using the high school [physical science](https://www.cde.ca.gov/pd/ca/sc/documents/ngsshsphyicalscidci.pdf) and [engineering design](https://www.cde.ca.gov/pd/ca/sc/documents/cangsshsengdesign-dci.pdf) standards.\n\n`;
r += `## Standards alignment\n\n| Standard | What students do | Units |\n|---|---|---|\n| HS-PS2-1 | Analyze data to support the claim that Newton's second law describes the relationship among net force, mass and acceleration | 3 (core); 1 and 2 build the motion skills it needs |\n| HS-PS2-2 | Use mathematical representations to support the claim that total momentum is conserved when there is no net force on the system | 4 |\n| HS-PS2-3 | Design, evaluate and refine a device that minimizes the force on an object during a collision | 4 |\n| HS-PS3-1 | Create a computational model to calculate the change in energy of one component of a system | 5 |\n| HS-PS3-2 | Develop and use models showing energy as motion of objects and relative position of objects | 5 |\n| HS-PS3-3 | Design, build and refine a device that converts one form of energy into another | 5 |\n| HS-ETS1-2, HS-ETS1-3 | Break a design problem into parts; evaluate solutions against criteria and constraints | 4, 5 |\n\nThe standards are summarized here, not quoted in full. NGSS has no separate high school performance expectation for kinematics or projectile motion; Units 1 and 2 are taught as the motion and math foundation for HS-PS2-1.\n\n`;
r += `## Project checklist\n\n`;
units.forEach(u => {
  r += `### Unit ${u.num}: ${u.title} (${u.weeks})\n\n*${u.essential}*\n\n**Key concepts**\n\n${u.keyConcepts.map(k => `- ${md(k)}`).join('\n')}\n\n**Learning objectives**\n\n${u.objectives.map(o => `- [ ] **${o[0]}** ${md(o[1])} (${md(o[2])})`).join('\n')}\n\n**Work to complete**\n\n- [ ] [Cornell notes](units/${u.id}/cornell-notes.docx): ${u.sections.length} sections, ${u.sections.reduce((a, s) => a + s.rows.length, 0)} cue questions\n- [ ] [Practice problems](units/${u.id}/README.md#practice-problems) (${u.practice.length})\n- [ ] [IXL practice plan](units/${u.id}/README.md#ixl-practice-plan) to SmartScore 80+\n- [ ] Unit quiz: ${Math.ceil(u.quiz.length * 0.8)}/${u.quiz.length} or better\n- [ ] Unit lab: ${md(u.sections.find(s => s.lab).rows[0][0].replace(/^In an? /, '').replace(/,.*$/, ''))}\n\n**Real-world connections:** ${u.applications.map(a => md(a).replace(/ \(.*\)$/, '')).join('; ')}.\n\n`;
});
r += `## Assessment and progress tracking\n\n### Mastery scale (used for every objective)\n\n| Level | Meaning | What it looks like |\n|---|---|---|\n| 4 | Extending | Applies the idea to a new situation and explains the reasoning without help |\n| 3 | Proficient (goal) | Meets the "evidence of mastery" listed for the objective in the unit guide |\n| 2 | Developing | Correct with notes or hints; makes one of the common mistakes when working alone |\n| 1 | Beginning | Cannot yet start the problem or explain the idea |\n\n### Evidence collected in each unit\n\n| Evidence | Criterion | Suggested weight |\n|---|---|---|\n| Cornell notes self-test | Answers at least 80% of cue questions aloud with the Notes column covered | 10% |\n| IXL practice plan | SmartScore 80+ on every listed skill | 15% |\n| Missed-question quiz | 80% or better; all missed questions retried and corrected | 15% |\n| Practice problems | Work shown: givens, equation, units, sense check | 10% |\n| Lab report | Labeled data and graph; claim supported by evidence and reasoning | 25% |\n| Unit test | Level 3 or better on each objective | 25% |\n\nThe weights are a starting point for the instructor to adjust.\n\n### Tracker\n\nCopy this table for each student, or see [PROGRESS.md](PROGRESS.md) for a full-page version with every objective.\n\n| Unit | Notes self-test | IXL 80+ | Quiz score | Practice | Lab | Test level (1-4) |\n|---|---|---|---|---|---|---|\n${units.map(u => `| ${u.num}. ${u.title} | ☐ | ☐ | __ / ${u.quiz.length} | ☐ | ☐ | __ |`).join('\n')}\n\n`;
r += `## What to check before using this with a class\n\n- **Learning targets and essential questions** were written from the unit content, not from a class deck. Compare them with what the teacher has posted.\n- **"Most often missed" questions** are based on misconceptions that are well documented for these topics. They are not drawn from this class's own test results. Swap in questions from your own item analysis when you have it.\n- **Labs** are suggested standard labs. Replace them with the labs the class actually runs.\n- **IXL codes** were read from the live IXL pages on 20 November 2026. IXL renumbers skills from time to time. Skills marked (New) had no number on that date.\n- **Pacing and grade weights** are suggestions.\n\n`;
r += `## Rebuilding the files\n\nAll notes, guides and quiz questions are generated from the files in \`content/\`. Edit a unit there, then run:\n\n\`\`\`\npython3 tools/diagrams.py     # needs matplotlib and numpy\nnode tools/build_notes.js     # needs the docx npm package\nnode tools/build_site.js\n\`\`\`\n\n## Sources\n\n- [CA NGSS standards, California Department of Education](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp)\n- [IXL Physics](https://www.ixl.com/science/physics), [IXL Precalculus](https://www.ixl.com/math/precalculus), [IXL Grade 8 science](https://www.ixl.com/science/grade-8)\n- [The Physics Classroom](https://www.physicsclassroom.com/), [PhET simulations](https://phet.colorado.edu/), [OpenStax Physics](https://openstax.org/details/books/physics)\n`;
w('README.md', r);

// ---------- progress tracker ----------
let p = `# Progress Tracker\n\nStudent: ______________________   Period: ______\n\nMastery levels: 1 Beginning, 2 Developing, 3 Proficient (goal), 4 Extending. See the [mastery scale](README.md#assessment-and-progress-tracking).\n\n`;
units.forEach(u => {
  p += `## Unit ${u.num}: ${u.title}\n\n| Objective | Evidence of mastery | Level (1-4) | Date |\n|---|---|---|---|\n${u.objectives.map(o => `| **${o[0]}** ${md(o[1])} | ${md(o[3])} | | |`).join('\n')}\n\n- [ ] Notes self-test (80% of cues)   - [ ] IXL plan at 80+   - [ ] Quiz: ____ / ${u.quiz.length}   - [ ] Practice problems   - [ ] Lab report\n\n`;
});
w('PROGRESS.md', p);
