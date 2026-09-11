# 11th Grade Physics — Core Mechanics Learning Project

A self-contained study project covering the five core mechanics units of a typical 11th grade (algebra-based) physics course: **Kinematics, Projectile Motion, Newton's Laws, Momentum, and Work & Energy**. Built for students to work through independently or in class, and for instructors to assign, track, and grade.

Each unit folder contains the same four things, so the workflow is identical every time:

| File | Purpose |
|---|---|
| `README.md` | Key concepts, learning objectives, assessment rubric, core equations, practice problems with an answer key, real-world applications, and resources |
| `cornell-notes.md` | A Cornell-notes template (Cues / Notes / Summary) pre-seeded with the topic's sub-sections, ready to fill in during class or reading |
| `quiz.html` | A self-grading, interactive quiz of the questions students miss most often on that topic — open it directly in any browser, no install needed |

## Project Structure

```
physics/
├── README.md                      ← you are here (project overview + master checklist)
├── assets/                        ← shared styling/engine for every quiz.html
│   ├── quiz.css
│   └── quiz.js
├── 01-kinematics/
├── 02-projectile-motion/
├── 03-newtons-laws/
├── 04-momentum/
└── 05-work-energy/
```

## How to Use This Project

**Students:**
1. Work through units in order — each builds on the last (projectile motion needs kinematics; momentum and work/energy both lean on Newton's laws).
2. For each unit: read the `README.md` key concepts → fill out `cornell-notes.md` as you study → solve the practice problems and check them against the answer key → finish with `quiz.html` and aim for the mastery target.
3. Double-click `quiz.html` (or any `.html` file) to open it in your browser — it grades itself and shows you *why* each answer is right or wrong, not just whether you got it right.

**Instructors:**
- Each unit's assessment table gives a 4-level rubric (Beginning → Developing → Proficient → Advanced) you can use as-is or adapt to your grading scale.
- The "Deliverables Checklist" at the bottom of each unit `README.md` is designed to be copied into a gradebook or LMS assignment.
- Quiz questions were written to target the specific misconceptions students most commonly carry into each topic (e.g., "heavier objects fall faster," "action-reaction pairs cancel," "kinetic energy is always conserved") — use them as a quick diagnostic before or after direct instruction.

## Unit Map

| # | Unit | Builds On | Core Idea |
|---|---|---|---|
| 1 | [Kinematics](01-kinematics/README.md) | — | Describing motion: position, velocity, acceleration, and motion graphs |
| 2 | [Projectile Motion](02-projectile-motion/README.md) | Unit 1 | Two independent 1-D motions (horizontal + vertical) happening together |
| 3 | [Newton's Laws](03-newtons-laws/README.md) | Unit 1 | Why motion changes: force, mass, and acceleration |
| 4 | [Momentum](04-momentum/README.md) | Unit 3 | What's conserved when objects collide or interact |
| 5 | [Work & Energy](05-work-energy/README.md) | Units 1, 3 | Force applied over distance, and the energy that results |

## Master Learning Objectives

Across the full project, a student who completes every unit should be able to:

- Translate a real-world motion scenario into the correct physics representation (equation, graph, or diagram).
- Select the correct kinematic, dynamic, or conservation-law approach for a given problem — and explain *why* that approach applies.
- Draw and interpret free body diagrams, motion graphs, and energy/momentum bar charts.
- Solve multi-step, multi-concept problems that combine two or more units (e.g., a projectile problem that also asks for momentum at landing).
- Identify and correct the specific misconception a wrong answer reveals, not just recompute the right number.

## Master Assessment Rubric

| Level | Description |
|---|---|
| **Beginning** | Recognizes vocabulary and formulas but cannot select or apply them without heavy prompting. |
| **Developing** | Solves single-concept, single-step problems reliably; needs support on multi-step or graph-based problems. |
| **Proficient** | Independently solves multi-step problems within a unit; explains reasoning in correct physics vocabulary; scores ≥ 80% on unit quizzes. |
| **Advanced** | Solves problems that combine multiple units; derives results rather than just recalling them; can teach/explain a common misconception to a peer. |

**Overall project mastery target:** Proficient or higher on all five units, with every `quiz.html` scored ≥ 80% and every practice set completed with work shown.

## Master Project Checklist

Use this as the at-a-glance tracker — check off each item as it's completed. (Each unit's own `README.md` has the same checklist scoped to that unit, for closer tracking.)

- [ ] **Unit 1 — Kinematics:** Cornell notes · Practice problems 1–5 · Quiz ≥ 80% · Real-world application summary
- [ ] **Unit 2 — Projectile Motion:** Cornell notes · Practice problems 1–5 · Quiz ≥ 80% · Real-world application summary
- [ ] **Unit 3 — Newton's Laws:** Cornell notes · Practice problems 1–5 · Quiz ≥ 80% · Real-world application summary
- [ ] **Unit 4 — Momentum:** Cornell notes · Practice problems 1–5 · Quiz ≥ 80% · Real-world application summary
- [ ] **Unit 5 — Work & Energy:** Cornell notes · Practice problems 1–5 · Quiz ≥ 80% · Real-world application summary
- [ ] **Capstone (optional):** A short write-up or problem set connecting at least two units (e.g., a projectile's momentum at impact, or energy lost to friction in a collision)

## General Resources (span multiple units)

- Khan Academy — full Physics course (covers all five units in sequence)
- The Physics Classroom — tutorials organized by exactly these five topics
- PhET Interactive Simulations (University of Colorado Boulder) — free, browser-based simulations for every unit in this project
- OpenStax, *University Physics Volume 1* (or *College Physics*) — free, downloadable textbook covering all five units in depth
- CrashCourse Physics (YouTube) — short video overviews of each topic, good for a first pass before deeper study

## Notes on Assumptions

- Uses g ≈ 9.8 m/s² throughout, and standard SI units (m, kg, s, N, J, W).
- Scoped to one-dimensional and basic two-dimensional (projectile) mechanics — no rotational motion, circular motion, or fluids, keeping it aligned to a standard 11th grade mechanics sequence.
- Practice problems assume algebra-level math (no calculus), consistent with a typical 11th grade physics course.
