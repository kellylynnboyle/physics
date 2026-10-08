# 11th Grade Physics: Semester 1 Learning Project

A shareable project for students and instructors covering **Kinematics, Projectile Motion, Newton's Laws, Momentum, and Work & Energy**, aligned to the California NGSS (Physics & Earth Science course model). Second semester (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) will follow the same structure.

## What is in this project

| Folder / file | What it is | Who uses it |
|---|---|---|
| [`standards/ngss-alignment.md`](standards/ngss-alignment.md) | NGSS performance expectations as learning goals, with a 3-D learning map | Instructors, students |
| [`topics/`](topics) | One file per unit: objectives, key concepts, **Cornell notes**, most-missed ideas, practice problems with answers, resources, labs, real-world connections, assessment rubric, checklist | Everyone |
| [`quiz/index.html`](quiz/index.html) | **Interactive quizzes** of the most-missed questions (36 questions, 7–8 per unit, with explanations of the misconception). Open the file in any browser; no install needed. Scores are saved on the student's device. | Students |
| [`tracking/`](tracking) | Student checklist and a gradebook template (CSV) | Students, instructors |

## Project outline

1. **[Kinematics](topics/01-kinematics.md)**: vectors, velocity, acceleration, graphs, free fall
2. **[Projectile Motion](topics/02-projectile-motion.md)**: independence of x and y, components, range
3. **[Newton's Laws](topics/03-newtons-laws.md)**: free-body diagrams, ΣF = ma, friction, third-law pairs (HS-PS2-1)
4. **[Momentum](topics/04-momentum.md)**: impulse, conservation, collisions, safety design (HS-PS2-2, HS-PS2-3)
5. **[Work & Energy](topics/05-work-and-energy.md)**: work, KE/PE, conservation, power, energy devices (HS-PS3-1, PS3-2, PS3-3)

## How to use each unit (student routine)

1. Read the **learning objectives**; rate yourself 1–4.
2. Take **Cornell notes** (cue column + notes column + summary). Cover the notes and quiz yourself with the cues.
3. Take the **interactive quiz**, read every explanation, and retake until you score 80% or higher.
4. Work the **practice problems** (use the GUESS routine, check answers after).
5. Complete the **lab/project**, then tick the **unit checklist** and bring evidence to your teacher.

## Assessment and progress tracking

Every unit uses the same 4-level rubric (1 Beginning, 2 Developing, 3 Proficient, 4 Mastery) per objective. Suggested weighting for a standards-based gradebook:

| Evidence | Weight |
|---|---|
| Unit test (objectives K/P/N/M/E) | 40% |
| Labs and design projects (NGSS SEPs) | 30% |
| Practice sets and Cornell notes (formative) | 15% |
| Quiz mastery (best score ≥ 80%) and corrections | 15% |

Quiz levels: **Mastered** ≥ 80% · **Developing** 60–79% · **Needs review** < 60%. Use [`tracking/gradebook-template.csv`](tracking/gradebook-template.csv) to record levels and [`tracking/student-progress-checklist.md`](tracking/student-progress-checklist.md) for student self-tracking.

## Suggested pacing (Semester 1, ~18 weeks)

| Weeks | Unit |
|---|---|
| 1–2.5 | Kinematics |
| 3–4.5 | Projectile Motion |
| 5–8 | Newton's Laws |
| 9–11.5 | Momentum |
| 12–15 | Work & Energy |
| 16–18 | Review, cumulative project, final exam |

## For instructors

- Printed Cornell-note templates: each unit's table can be pasted into a doc with the Notes column blank for guided notes.
- Quiz questions live in `quiz/questions.js` as plain data (`q`, `choices`, `answer`, `why`, `trap`) and are easy to edit or extend.
- Use `g = 10 m/s²` for mental math in quizzes and `9.8 m/s²` for lab work. Both are stated in the problems.
- Standards wording is paraphrased; verify against the CDE site before publishing.

## Curriculum resources used throughout
PhET Interactive Simulations (phet.colorado.edu) · The Physics Classroom · Khan Academy · HyperPhysics · CK-12 · IXL Physics · NASA education pages · Tracker video analysis.

Licensed under the terms in [LICENSE](LICENSE).
