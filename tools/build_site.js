// Build the quiz page and all Markdown outlines from tools/units/*.js
// Usage: node tools/build_site.js [artifact-output-path]
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const UNITS = require('./units');
const w = (rel, text) => { const f = path.join(ROOT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, text); console.log('wrote', rel); };
const slug = u => u.id.replace(/^\d+-/, '');
const notesFile = u => `Cornell-Notes-${u.title.replace(/'/g, '').replace(/[^A-Za-z]+/g, '-')}.docx`;
const plain = s => s.replace(/\*\*/g, '');

// ---------- Quiz page ----------
const data = UNITS.map(u => ({ id: u.id, slug: slug(u), n: u.n, title: u.title, quiz: u.quiz }));
const tpl = fs.readFileSync(path.join(__dirname, 'quiz_template.html'), 'utf8').replace('/*DATA*/', JSON.stringify(data).replace(/</g, '\\u003c'));
const split = tpl.indexOf('<div class="wrap">');
w('quizzes/index.html', `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n${tpl.slice(0, split)}</head>\n<body style="margin:0">\n${tpl.slice(split)}</body>\n</html>\n`);
if (process.argv[2]) { fs.mkdirSync(path.dirname(process.argv[2]), { recursive: true }); fs.writeFileSync(process.argv[2], tpl); }

// ---------- Unit outlines ----------
const SCALE = `| Level | Meaning | Evidence |
|---|---|---|
| 4 Extends | Applies the idea to a new situation and explains the reasoning | Solves an unfamiliar problem or explains a classmate's error |
| 3 Meets | Meets the objective independently | Correct method and answer with units on quiz, test, or lab |
| 2 Approaching | Meets the objective with notes or hints | Sets up correctly but makes errors, or needs the worked example |
| 1 Beginning | Not yet able to start without help | Cannot yet choose a method |`;

UNITS.forEach(u => {
  const L = [];
  L.push(`# Unit ${u.n}: ${u.title}`, '', `**Pacing:** ${u.pacing} | **Essential question:** ${u.essentialQuestion}`, '');
  L.push('## Materials in this folder', '', `- [ ] **Cornell notes** (Word, print-ready): [${notesFile(u)}](${encodeURI(notesFile(u))})`, `- [ ] **Most-missed questions quiz** (interactive): [quizzes/index.html](../quizzes/index.html#${slug(u)}), choose "${u.title}"`, '- [ ] **This outline**: key concepts, objectives, resources, practice problems, applications, assessment', '');
  L.push('## NGSS alignment (California, Physics in the Universe)', '', '| Standard | How this unit addresses it |', '|---|---|', ...u.ngss.map(([c, t]) => `| ${c} | ${t} |`), '');
  L.push('## Key concepts to master', '', '| Concept | What students need to know |', '|---|---|', ...u.concepts.map(([c, t]) => `| **${c}** | ${t} |`), '');
  L.push('## Learning objectives', '', 'Rate each objective 1 to 4 using the proficiency scale under Assessment. The target is 3 or higher on every objective.', '', '| ID | Objective ("I can...") | Self-rating | Teacher rating |', '|---|---|---|---|', ...u.objectives.map(([id, t]) => `| ${id} | ${t} | | |`), '');
  L.push('## Cornell notes outline', '', 'Each section of the notes lists cue questions to answer aloud from memory, worked examples, and matching IXL skills.', '');
  u.sections.forEach(s => { L.push(`**${s.title}**`, '', ...s.rows.map(r => `- ${r.c}`), ''); });
  L.push('## Visual memory aids', '', ...u.visuals.flatMap(([img, says, rule]) => [`![${says}](../assets/diagrams/${img}.png)`, '', `${says} **Rule:** ${rule}`, '']));
  L.push('## Most-missed questions', '', `The [interactive quiz](../quizzes/index.html#${slug(u)}) has one question for each of these common mistakes. Each explanation says why the tempting answer is wrong.`, '', ...u.quiz.map((q, i) => `${i + 1}. ${q.m}`), '');
  L.push('## Learning resources', '', '| Resource | Use it for |', '|---|---|', ...u.resources.map(([n, url, t]) => `| [${n}](${url}) | ${t} |`), '');
  L.push('## Practice problems', '', 'Use g = 9.8 m/s² and ignore air resistance. Show the knowns, the equation, the substitution, and units.', '', ...u.practice.map(([q], i) => `${i + 1}. ${q}`), '', '<details>', '<summary>Answer key</summary>', '', ...u.practice.map(([, a], i) => `${i + 1}. ${a}`), '', '</details>', '');
  const lab = u.sections.find(s => /Labs/.test(s.title));
  L.push('## Labs and investigations', '', ...lab.rows.map(r => `- **${r.c}** ${plain(r.n.join(' '))}`), '');
  L.push('## Real-world applications', '', ...u.applications.map(a => `- ${a}`), '');
  L.push('## Assessment criteria', '', SCALE, '', '**Unit completion checklist**', '',
    '- [ ] Cornell notes complete; every cue question answered aloud from memory',
    '- [ ] Each Visual Memory Aid redrawn from memory',
    '- [ ] Most-missed questions quiz: 8 of 10 or better',
    '- [ ] IXL Practice Plan (last page of the notes): SmartScore 80+ on every skill',
    '- [ ] Practice problems: at least 5 of 6 correct with work shown',
    '- [ ] Lab report submitted and scored 3 or higher on the lab rubric',
    '- [ ] Unit test: 3 or higher on every objective', '',
    'Rubrics for lab reports and design projects are in [ASSESSMENT.md](../ASSESSMENT.md).', '',
    `**Not included in this unit:** ${u.excluded}`, '');
  w(`${u.id}/README.md`, L.join('\n'));
});

// ---------- Assessment ----------
const A = ['# Assessment and Progress Tracking', '', 'Semester 1 Physics. One proficiency scale is used for every learning objective, so progress can be tracked the same way in all five units.', '',
  '## Proficiency scale', '', SCALE, '',
  '## Evidence collected in each unit', '',
  '| Evidence | What it shows | Mastery threshold |', '|---|---|---|',
  '| Cornell notes self-test | Recall of definitions, rules, and worked examples | Answers every cue aloud with the Notes column covered |',
  '| Most-missed questions quiz | Whether common misconceptions have been replaced | 8 of 10 (80%) |',
  '| IXL Practice Plan | Fluency with calculations | SmartScore 80+ on each listed skill |',
  '| Practice problems | Multi-step problem solving with work shown | 5 of 6 correct |',
  '| Lab report | Science and engineering practices | 3 or higher on each rubric row |',
  '| Unit test | Independent performance on each objective | 3 or higher on each objective |', '',
  '## Suggested grade weighting', '', 'Adjust to match the course syllabus. This is a suggestion, not the teacher\'s policy.', '',
  '| Category | Weight |', '|---|---|', '| Unit tests | 40% |', '| Labs and design projects | 30% |', '| Quizzes | 15% |', '| Notes, IXL, and practice | 15% |', '',
  '## Lab report rubric', '',
  '| Criterion | 4 | 3 | 2 | 1 |', '|---|---|---|---|---|',
  '| Question and variables | States a testable question; independent, dependent, and controlled variables all correct, with reasons | Question and all variables correct | One variable missing or misidentified | Question or variables missing |',
  '| Data | Organized table, units, at least three trials, appropriate significant figures | Table with units and repeated trials | Missing units or only one trial | Data incomplete |',
  '| Graph and analysis | Correct graph with labeled axes; slope or area interpreted with units and linked to the physics | Correct graph; relationship stated | Graph has errors or relationship not stated | No graph or analysis |',
  '| Claim, evidence, reasoning | Claim answers the question; cites specific data; reasoning uses the unit\'s principle; names and estimates error sources | Claim supported by data and a correct principle | Claim stated with weak evidence or reasoning | Claim missing or unsupported |', '',
  '## Engineering design rubric (HS-PS2-3 collision device, HS-PS3-3 energy converter)', '',
  '| Criterion | 4 | 3 | 2 | 1 |', '|---|---|---|---|---|',
  '| Criteria and constraints | Quantified criteria and all constraints stated; trade-offs discussed | Criteria and constraints stated | Partly stated | Missing |',
  '| Physics justification | Design choices explained with correct equations and estimates (F·t = m·Δv or energy accounting) | Choices explained with the correct principle | Principle named but not applied | No physics reasoning |',
  '| Testing and data | Repeated tests with measurements recorded and compared with criteria | Tested with data recorded | Tested once or without measurements | Not tested |',
  '| Refinement | At least one change made from test evidence, retested, and the result evaluated | One evidence-based change made | Change made without evidence | No refinement |', '',
  '## Objective tracker', '', 'Record the date and level each time an objective is assessed. An objective is mastered at level 3 or higher on the unit test or a retake.', ''];
UNITS.forEach(u => A.push(`### Unit ${u.n}: ${u.title}`, '', '| ID | Objective | Quiz | Lab | Test | Mastered |', '|---|---|---|---|---|---|', ...u.objectives.map(([id, t]) => `| ${id} | ${t} | | | | ☐ |`), ''));
w('ASSESSMENT.md', A.join('\n'));

// ---------- Root README ----------
const R = ['# Physics, Semester 1: Learning Project', '',
  'An 11th grade physics course project covering kinematics, projectile motion, Newton\'s laws, momentum, and work and energy. The learning goals are the California NGSS high school physical science standards, organized as in the Physics in the Universe course model.', '',
  '## Course outline', '',
  '| Unit | Topic | Pacing | NGSS focus | Outline | Cornell notes | Quiz |', '|---|---|---|---|---|---|---|',
  ...UNITS.map(u => `| ${u.n} | ${u.title} | ${u.pacing} | ${u.ngss.filter(([c]) => /^HS-/.test(c)).map(([c]) => c).join('; ')} | [Outline](${u.id}/README.md) | [Word file](${u.id}/${encodeURI(notesFile(u))}) | [Quiz](quizzes/index.html#${slug(u)}) |`), '',
  'Pacing totals 18 weeks, one semester. Semester 2 (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) is not built yet.', '',
  '## What each unit contains', '',
  '- **Outline** (`README.md`): key concepts, learning objectives with NGSS alignment, resources, practice problems with an answer key, labs, real-world applications, and assessment criteria.',
  '- **Cornell notes** (`.docx`): a cover page with learning targets and an outline, cue questions with notes and worked examples, visual memory aids, memory tricks and study methods, and an IXL practice plan.',
  '- **Most-missed questions quiz**: ten interactive questions per unit, each built on a documented misconception, with an explanation for every answer.', '',
  '## How to use it', '',
  '**Students**', '',
  '1. Read the unit outline and rate yourself on each objective.',
  '2. Study the Cornell notes: cover the Notes column, answer each cue aloud, and redraw the visual aids from memory.',
  '3. Take the quiz. Retry missed questions until you score 8 of 10 or better.',
  '4. Work the practice problems, then check the answer key.',
  '5. Finish the IXL Practice Plan on the last page of the notes.',
  '6. Tick the unit completion checklist and rate yourself again.', '',
  '**Instructors**', '',
  '- Use the objective IDs (K1, P1, N1, M1, E1, and so on) to tag quiz and test items, then record levels in [ASSESSMENT.md](ASSESSMENT.md).',
  '- The quiz misconception lists make quick warm-up or exit-ticket prompts.',
  '- Lab and design rubrics are in [ASSESSMENT.md](ASSESSMENT.md).', '',
  '**Opening the quiz:** GitHub shows HTML files as source code. Download `quizzes/index.html` and open it in a browser, or turn on GitHub Pages for this repository and visit `/quizzes/`.', '',
  '## Semester checklist', '',
  ...UNITS.flatMap(u => [`**Unit ${u.n}: ${u.title}**`, '', '- [ ] Notes self-test complete', '- [ ] Quiz at 80% or better', '- [ ] IXL plan at SmartScore 80+', '- [ ] Practice problems done', '- [ ] Lab report submitted', '- [ ] Unit test: every objective at level 3 or higher', '']),
  '## Standards', '',
  '- [NGSS for California Public Schools](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp) (California Department of Education)',
  '- [Grades 9-12 Physical Science standards by Disciplinary Core Idea (PDF)](https://www.cde.ca.gov/pd/ca/sc/documents/ngsshsphyicalscidci.pdf)',
  '- [2016 California Science Framework](https://www.cde.ca.gov/pd/ca/sc/cf/cascienceframework2016.asp), which describes the Physics in the Universe course', '',
  'Performance expectations used this semester: **HS-PS2-1** (Newton\'s second law), **HS-PS2-2** (conservation of momentum), **HS-PS2-3** (collision design), **HS-PS3-1**, **HS-PS3-2**, **HS-PS3-3** (energy), with **HS-ETS1-2** and **HS-ETS1-3** in the design projects. Kinematics and projectile motion have no performance expectation of their own; they build the motion skills that HS-PS2-1 requires.', '',
  '## Things to check before handing out', '',
  '- **Learning targets and essential questions** were written from the unit content. Compare them with what the teacher has posted and edit to match.',
  '- **Worked examples and answer keys** were written for this project, not taken from a class handout. Every calculation was recomputed, but the numbers will not match the teacher\'s own worksheets.',
  '- **IXL codes** were copied from the live IXL pages in November 2026. Three skills were marked "New" with no number on the live page and are labeled "(new)" in the notes. IXL renumbers skills, so search by skill name if a code does not match.',
  '- **"Most-missed"** means questions built on misconceptions that physics education research reports as common. They are not drawn from this class\'s own test data.',
  '- **Grade weighting** in ASSESSMENT.md is a suggestion.', '',
  '## Rebuilding', '',
  'All content lives in `tools/units/*.js`. After editing, regenerate everything:', '',
  '```bash', 'python3 tools/diagrams.py        # diagrams (needs matplotlib, numpy)', 'node tools/build_notes.js        # Cornell notes (needs the docx npm package)', 'node tools/build_site.js         # quiz page and Markdown outlines', '```', ''];
w('README.md', R.join('\n'));
