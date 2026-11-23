# Physics, Semester 1: Learning Project

An 11th grade physics course project covering kinematics, projectile motion, Newton's laws, momentum, and work and energy. The learning goals are the California NGSS high school physical science standards, organized as in the Physics in the Universe course model.

## Course outline

| Unit | Topic | Pacing | NGSS focus | Outline | Cornell notes | Quiz |
|---|---|---|---|---|---|---|
| 1 | Kinematics | 4 weeks | HS-PS2-1 (foundation) | [Outline](01-kinematics/README.md) | [Word file](01-kinematics/Cornell-Notes-Kinematics.docx) | [Quiz](quizzes/index.html#kinematics) |
| 2 | Projectile Motion | 3 weeks | HS-PS2-1 (foundation); HS-PS2-4 (connection) | [Outline](02-projectile-motion/README.md) | [Word file](02-projectile-motion/Cornell-Notes-Projectile-Motion.docx) | [Quiz](quizzes/index.html#projectile-motion) |
| 3 | Newton's Laws | 4 weeks | HS-PS2-1; HS-PS2-4 (connection) | [Outline](03-newtons-laws/README.md) | [Word file](03-newtons-laws/Cornell-Notes-Newtons-Laws.docx) | [Quiz](quizzes/index.html#newtons-laws) |
| 4 | Momentum | 3 weeks | HS-PS2-2; HS-PS2-3; HS-ETS1-2 / HS-ETS1-3 | [Outline](04-momentum/README.md) | [Word file](04-momentum/Cornell-Notes-Momentum.docx) | [Quiz](quizzes/index.html#momentum) |
| 5 | Work and Energy | 4 weeks | HS-PS3-1; HS-PS3-2; HS-PS3-3 | [Outline](05-work-and-energy/README.md) | [Word file](05-work-and-energy/Cornell-Notes-Work-and-Energy.docx) | [Quiz](quizzes/index.html#work-and-energy) |

Pacing totals 18 weeks, one semester. Semester 2 (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) is not built yet.

## What each unit contains

- **Outline** (`README.md`): key concepts, learning objectives with NGSS alignment, resources, practice problems with an answer key, labs, real-world applications, and assessment criteria.
- **Cornell notes** (`.docx`): a cover page with learning targets and an outline, cue questions with notes and worked examples, visual memory aids, memory tricks and study methods, and an IXL practice plan.
- **Most-missed questions quiz**: ten interactive questions per unit, each built on a documented misconception, with an explanation for every answer.

## How to use it

**Students**

1. Read the unit outline and rate yourself on each objective.
2. Study the Cornell notes: cover the Notes column, answer each cue aloud, and redraw the visual aids from memory.
3. Take the quiz. Retry missed questions until you score 8 of 10 or better.
4. Work the practice problems, then check the answer key.
5. Finish the IXL Practice Plan on the last page of the notes.
6. Tick the unit completion checklist and rate yourself again.

**Instructors**

- Use the objective IDs (K1, P1, N1, M1, E1, and so on) to tag quiz and test items, then record levels in [ASSESSMENT.md](ASSESSMENT.md).
- The quiz misconception lists make quick warm-up or exit-ticket prompts.
- Lab and design rubrics are in [ASSESSMENT.md](ASSESSMENT.md).

**Opening the quiz:** GitHub shows HTML files as source code. Download `quizzes/index.html` and open it in a browser, or turn on GitHub Pages for this repository and visit `/quizzes/`.

## Semester checklist

**Unit 1: Kinematics**

- [ ] Notes self-test complete
- [ ] Quiz at 80% or better
- [ ] IXL plan at SmartScore 80+
- [ ] Practice problems done
- [ ] Lab report submitted
- [ ] Unit test: every objective at level 3 or higher

**Unit 2: Projectile Motion**

- [ ] Notes self-test complete
- [ ] Quiz at 80% or better
- [ ] IXL plan at SmartScore 80+
- [ ] Practice problems done
- [ ] Lab report submitted
- [ ] Unit test: every objective at level 3 or higher

**Unit 3: Newton's Laws**

- [ ] Notes self-test complete
- [ ] Quiz at 80% or better
- [ ] IXL plan at SmartScore 80+
- [ ] Practice problems done
- [ ] Lab report submitted
- [ ] Unit test: every objective at level 3 or higher

**Unit 4: Momentum**

- [ ] Notes self-test complete
- [ ] Quiz at 80% or better
- [ ] IXL plan at SmartScore 80+
- [ ] Practice problems done
- [ ] Lab report submitted
- [ ] Unit test: every objective at level 3 or higher

**Unit 5: Work and Energy**

- [ ] Notes self-test complete
- [ ] Quiz at 80% or better
- [ ] IXL plan at SmartScore 80+
- [ ] Practice problems done
- [ ] Lab report submitted
- [ ] Unit test: every objective at level 3 or higher

## Standards

- [NGSS for California Public Schools](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp) (California Department of Education)
- [Grades 9-12 Physical Science standards by Disciplinary Core Idea (PDF)](https://www.cde.ca.gov/pd/ca/sc/documents/ngsshsphyicalscidci.pdf)
- [2016 California Science Framework](https://www.cde.ca.gov/pd/ca/sc/cf/cascienceframework2016.asp), which describes the Physics in the Universe course

Performance expectations used this semester: **HS-PS2-1** (Newton's second law), **HS-PS2-2** (conservation of momentum), **HS-PS2-3** (collision design), **HS-PS3-1**, **HS-PS3-2**, **HS-PS3-3** (energy), with **HS-ETS1-2** and **HS-ETS1-3** in the design projects. Kinematics and projectile motion have no performance expectation of their own; they build the motion skills that HS-PS2-1 requires.

## Things to check before handing out

- **Learning targets and essential questions** were written from the unit content. Compare them with what the teacher has posted and edit to match.
- **Worked examples and answer keys** were written for this project, not taken from a class handout. Every calculation was recomputed, but the numbers will not match the teacher's own worksheets.
- **IXL codes** were copied from the live IXL pages in November 2026. Three skills were marked "New" with no number on the live page and are labeled "(new)" in the notes. IXL renumbers skills, so search by skill name if a code does not match.
- **"Most-missed"** means questions built on misconceptions that physics education research reports as common. They are not drawn from this class's own test data.
- **Grade weighting** in ASSESSMENT.md is a suggestion.

## Rebuilding

All content lives in `tools/units/*.js`. After editing, regenerate everything:

```bash
python3 tools/diagrams.py        # diagrams (needs matplotlib, numpy)
node tools/build_notes.js        # Cornell notes (needs the docx npm package)
node tools/build_site.js         # quiz page and Markdown outlines
```
