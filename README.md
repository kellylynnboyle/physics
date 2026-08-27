# 11th Grade Physics — Mechanics Learning Project

A self-contained study project covering the core first-semester mechanics
sequence: **Kinematics → Projectile Motion → Newton's Laws → Momentum →
Work & Energy**. Each unit folder contains a Cornell-notes study guide
(concepts, formulas, common mistakes, practice problems, real-world
applications, resources) and a self-grading interactive quiz built from the
questions students miss most often.

Built for students to work through independently and for instructors to
assign, track, and grade against a shared rubric.

## How to use this project

**Students:** work through each unit in order. Read the study guide first,
work the practice problems on paper, *then* open `quiz.html` in a browser
(double-click the file, no internet or install required) to self-check
before the instructor's assessment. Retake the quiz until you can explain
*why* each wrong answer is wrong, not just pick the right one.

**Instructors:** the checklist below is a tracker — check off each box as a
student/class completes it. The "Assessment Criteria" section in each unit's
guide gives you a ready-made rubric. Quizzes are plain HTML/JS with no
external dependencies or data collection, so they're safe to hand out as
files, host on a class site, or open on any device.

## Unit sequence

| # | Unit | Folder | Study Guide | Quiz |
|---|------|--------|--------------|------|
| 1 | Kinematics | [`01-kinematics/`](01-kinematics/) | [notes-and-guide.md](01-kinematics/notes-and-guide.md) | [quiz.html](01-kinematics/quiz.html) |
| 2 | Projectile Motion | [`02-projectile-motion/`](02-projectile-motion/) | [notes-and-guide.md](02-projectile-motion/notes-and-guide.md) | [quiz.html](02-projectile-motion/quiz.html) |
| 3 | Newton's Laws | [`03-newtons-laws/`](03-newtons-laws/) | [notes-and-guide.md](03-newtons-laws/notes-and-guide.md) | [quiz.html](03-newtons-laws/quiz.html) |
| 4 | Momentum | [`04-momentum/`](04-momentum/) | [notes-and-guide.md](04-momentum/notes-and-guide.md) | [quiz.html](04-momentum/quiz.html) |
| 5 | Work & Energy | [`05-work-energy/`](05-work-energy/) | [notes-and-guide.md](05-work-energy/notes-and-guide.md) | [quiz.html](05-work-energy/quiz.html) |

Recommended pacing: 1.5–2 weeks per unit in a standard 5-day/week course,
including one full class period for lab/application work and one for
assessment.

## Course-level learning objectives

By the end of this project, a student should be able to:

1. Distinguish scalar and vector quantities and apply correct sign
   conventions to 1D and 2D motion.
2. Read, sketch, and interpret position–time, velocity–time, and
   acceleration–time graphs, including translating between them.
3. Solve for unknowns in constant-acceleration motion (1D) and decompose
   2D projectile motion into independent horizontal/vertical components.
4. State and apply Newton's three laws to draw free-body diagrams and solve
   for net force, acceleration, and unknown forces (including friction,
   tension, and normal force) in single- and multi-body systems.
5. Apply conservation of momentum to elastic and inelastic collisions in 1D
   and 2D, and connect impulse to change in momentum.
6. Apply the work–energy theorem and conservation of mechanical energy,
   correctly accounting for non-conservative forces such as friction.
7. Select the correct principle (kinematics vs. forces vs. momentum vs.
   energy) for a given problem — the single hardest transferable skill in
   introductory mechanics.

## Master progress checklist

Copy this table per student (or per class) to track progress. "Quiz ≥ 80%"
is a suggested mastery threshold — adjust to your grading policy.

- [ ] **Unit 1 — Kinematics**
  - [ ] Study guide read & Cornell notes completed
  - [ ] Practice problem set completed
  - [ ] Interactive quiz passed (≥ 80%)
  - [ ] Instructor assessment / lab completed
- [ ] **Unit 2 — Projectile Motion**
  - [ ] Study guide read & Cornell notes completed
  - [ ] Practice problem set completed
  - [ ] Interactive quiz passed (≥ 80%)
  - [ ] Instructor assessment / lab completed
- [ ] **Unit 3 — Newton's Laws**
  - [ ] Study guide read & Cornell notes completed
  - [ ] Practice problem set completed
  - [ ] Interactive quiz passed (≥ 80%)
  - [ ] Instructor assessment / lab completed
- [ ] **Unit 4 — Momentum**
  - [ ] Study guide read & Cornell notes completed
  - [ ] Practice problem set completed
  - [ ] Interactive quiz passed (≥ 80%)
  - [ ] Instructor assessment / lab completed
- [ ] **Unit 5 — Work & Energy**
  - [ ] Study guide read & Cornell notes completed
  - [ ] Practice problem set completed
  - [ ] Interactive quiz passed (≥ 80%)
  - [ ] Instructor assessment / lab completed
- [ ] **Cumulative review** — mixed problem set spanning all 5 units
      (tests the "which principle applies?" skill explicitly)

## Project structure

```
physics/
├── README.md                          ← this file (master outline & checklist)
├── 01-kinematics/
│   ├── notes-and-guide.md             ← concepts, Cornell notes, formulas,
│   │                                     misconceptions, practice problems,
│   │                                     real-world applications, resources,
│   │                                     objectives & assessment rubric
│   └── quiz.html                      ← interactive self-grading quiz
├── 02-projectile-motion/
│   ├── notes-and-guide.md
│   └── quiz.html
├── 03-newtons-laws/
│   ├── notes-and-guide.md
│   └── quiz.html
├── 04-momentum/
│   ├── notes-and-guide.md
│   └── quiz.html
└── 05-work-energy/
    ├── notes-and-guide.md
    └── quiz.html
```

## A note on the quizzes

Each `quiz.html` is a standalone file (HTML + inline CSS/JS, no external
requests) built around the misconceptions students most commonly get wrong
on these topics — not just plug-and-chug problems. Every question includes
an explanation that fires whether you get it right or wrong, so the quiz
doubles as a teaching tool, not just an assessment. Open it directly in any
browser; nothing to install or configure.
