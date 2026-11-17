# 11th Grade Physics: Semester 1 Learning Project

A shareable outline for students and instructors covering the five first-semester units: Kinematics, Projectile Motion, Newton's Laws, Momentum, and Work & Energy. Learning goals follow the California NGSS (Physics in the Universe / Physics & Earth Science course model).

Each unit has the same five parts, so students always know where to look:

1. **Unit outline and checklist** (`README.md`): objectives, key concepts, resources, labs, practice problems with answers, real-world applications, and the IXL plan.
2. **Cornell notes** (`cornell-notes.md` to read online, `.docx` to print): cue questions, notes with worked examples, memory tricks, a summary, and visual memory aids.
3. **Missed-question quiz**: ten interactive questions per unit, each built on a common mistake, with an explanation after every answer.
4. **Labs and investigations** tied to the NGSS performance expectations.
5. **Assessment criteria** so students and instructors can track mastery.

## Project outline

| # | Unit | Pacing | NGSS focus | Outline | Cornell notes | Quiz |
|---|---|---|---|---|---|---|
| 1 | Kinematics | Weeks 1–4 | Foundation for HS-PS2-1 | [Outline](units/01-kinematics/README.md) | [Online](units/01-kinematics/cornell-notes.md) · [Word](units/01-kinematics/Cornell-Notes-Kinematics.docx) | [Quiz](quizzes/index.html#kinematics) |
| 2 | Projectile Motion | Weeks 5–7 | Extension of HS-PS2-1 | [Outline](units/02-projectile-motion/README.md) | [Online](units/02-projectile-motion/cornell-notes.md) · [Word](units/02-projectile-motion/Cornell-Notes-Projectile-Motion.docx) | [Quiz](quizzes/index.html#projectile) |
| 3 | Newton's Laws | Weeks 8–11 | HS-PS2-1 | [Outline](units/03-newtons-laws/README.md) | [Online](units/03-newtons-laws/cornell-notes.md) · [Word](units/03-newtons-laws/Cornell-Notes-Newtons-Laws.docx) | [Quiz](quizzes/index.html#newton) |
| 4 | Momentum | Weeks 12–14 | HS-PS2-2, HS-PS2-3 | [Outline](units/04-momentum/README.md) | [Online](units/04-momentum/cornell-notes.md) · [Word](units/04-momentum/Cornell-Notes-Momentum.docx) | [Quiz](quizzes/index.html#momentum) |
| 5 | Work & Energy | Weeks 15–18 | HS-PS3-1, HS-PS3-2, HS-PS3-3 | [Outline](units/05-work-and-energy/README.md) | [Online](units/05-work-and-energy/cornell-notes.md) · [Word](units/05-work-and-energy/Cornell-Notes-Work-and-Energy.docx) | [Quiz](quizzes/index.html#energy) |

The pacing is a suggested 18-week plan. Adjust it to the school calendar.

**To use the quizzes:** download `quizzes/index.html` and open it in any browser. It is a single file with all five units and needs no login. GitHub shows the file's code rather than running it, so students need the downloaded file or a hosted copy.

## Student checklist

For each unit, in order:

- [ ] Read the unit outline and the learning objectives
- [ ] Fill in or study the Cornell notes
- [ ] Self-test: cover the Notes column and answer every cue aloud; mark the ones you miss
- [ ] Redraw each visual memory aid from memory
- [ ] Work the six practice problems, showing givens, equation, substitution, and units
- [ ] Complete the unit labs
- [ ] Reach SmartScore 80+ on each IXL skill in the unit plan
- [ ] Score 8 out of 10 or better on the missed-question quiz; retry missed questions until you can explain each one
- [ ] Take the unit test

Units completed:

- [ ] Unit 1: Kinematics
- [ ] Unit 2: Projectile Motion
- [ ] Unit 3: Newton's Laws
- [ ] Unit 4: Momentum
- [ ] Unit 5: Work & Energy

## Instructor checklist

- [ ] Check the pacing against the school calendar and the district scope and sequence
- [ ] Compare the learning targets and essential questions in each unit with the ones you post in class, and edit `tools/content/` where they differ
- [ ] Confirm the lab list matches the equipment you have
- [ ] Decide how students report quiz scores (the quiz saves progress only in each student's own browser)
- [ ] Use the [mastery tracker](docs/assessment.md#mastery-tracker) to record evidence for each objective
- [ ] Use the "Most-missed ideas" list at the end of each unit outline to plan reteaching

## Supporting documents

- [Standards map](docs/standards-map.md): which NGSS performance expectations, practices, and crosscutting concepts each unit addresses, and where each is assessed.
- [Assessment guide](docs/assessment.md): the 4-point proficiency scale, lab and design rubrics, grade weighting, and the mastery tracker.

## Semester 2 (not built yet)

Electricity, magnetism, waves, light, plate tectonics, earthquakes, and nuclear physics. The same unit structure can be reused: add a content file to `tools/content/` and rebuild.

## Editing and rebuilding

All unit files are generated from the content files in `tools/content/` (one per unit). To change a note, a quiz question, or a practice problem, edit the content file and rebuild:

```bash
python3 tools/diagrams.py   # redraws the visual memory aids (needs matplotlib and numpy)
node tools/build.js         # rebuilds unit outlines, Cornell notes (.md and .docx), and the quiz (needs the docx npm package)
```

Do not edit files under `units/` or `quizzes/` directly; the next build overwrites them.

## Sources

- California NGSS standards: <https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp>
- NGSS performance expectations: [HS-PS2](https://www.nextgenscience.org/dci-arrangement/hs-ps2-motion-and-stability-forces-and-interactions), [HS-PS3](https://www.nextgenscience.org/dci-arrangement/hs-ps3-energy)
- IXL skill lists (codes checked 17 November 2026): [Physics](https://www.ixl.com/science/physics), [Precalculus](https://www.ixl.com/math/precalculus), [Grade 8 science](https://www.ixl.com/science/grade-8)
- Free learning resources linked in each unit: The Physics Classroom, PhET Interactive Simulations, Khan Academy, OpenStax Physics
