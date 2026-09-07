# 11th Grade Physics: Mechanics Learning Project

A self-contained study package covering the core mechanics unit of an 11th grade
physics course: **Kinematics → Projectile Motion → Newton's Laws → Momentum →
Work & Energy**. Each topic folder contains the same three things, so students
and instructors can use it the same way every time:

| File | Purpose |
|---|---|
| `README.md` | Key concepts, learning objectives, resources, practice problems, real-world applications, and assessment criteria |
| `cornell-notes.md` | Cornell-format notes (cue column / notes / summary) ready to print or copy |
| `quiz.html` | A self-grading interactive quiz targeting the questions students most often get wrong on that topic |

Open any `quiz.html` file directly in a browser (double-click it, or drag it
into a browser tab) — no server or install required.

## How to use this project

- **Students:** Read the unit `README.md` first for the big picture, fill in
  or review the `cornell-notes.md`, work the practice problems, then take the
  `quiz.html` as a check before the topic assessment. Retake the quiz until
  you can explain *why* each wrong answer is wrong, not just pick the right one.
- **Instructors:** Use the "Learning Objectives" and "Assessment Criteria"
  tables in each unit as a rubric or exit-ticket checklist. The quizzes are
  built from the misconceptions most commonly seen on standardized mechanics
  diagnostics (e.g., FCI/FMCE-style distractors), so wrong-answer patterns are
  diagnostic — a student picking the same distractor repeatedly signals a
  specific conceptual gap, noted in each `README.md`.

## Project Outline / Master Checklist

### Unit 1 — [Kinematics](units/01-kinematics/README.md)
- [ ] Read notes & complete Cornell notes summary
- [ ] Distinguish distance/displacement and speed/velocity/acceleration
- [ ] Solve problems with the 4 kinematics ("SUVAT") equations
- [ ] Interpret and sketch position–time, velocity–time, acceleration–time graphs
- [ ] Score 80%+ on `quiz.html`
- [ ] Complete assessment (see unit's Assessment Criteria)

### Unit 2 — [Projectile Motion](units/02-projectile-motion/README.md)
- [ ] Read notes & complete Cornell notes summary
- [ ] Explain why horizontal and vertical motion are independent
- [ ] Solve horizontal-launch and angled-launch problems
- [ ] Derive/apply range, max height, and time-of-flight relationships
- [ ] Score 80%+ on `quiz.html`
- [ ] Complete assessment (see unit's Assessment Criteria)

### Unit 3 — [Newton's Laws](units/03-newtons-laws/README.md)
- [ ] Read notes & complete Cornell notes summary
- [ ] State and apply Newton's 1st, 2nd, and 3rd Laws
- [ ] Draw correct free-body diagrams (including normal force and friction)
- [ ] Solve multi-force and connected-object (Atwood/incline) problems
- [ ] Score 80%+ on `quiz.html`
- [ ] Complete assessment (see unit's Assessment Criteria)

### Unit 4 — [Momentum](units/04-momentum/README.md)
- [ ] Read notes & complete Cornell notes summary
- [ ] Apply conservation of momentum to elastic and inelastic collisions
- [ ] Use impulse–momentum theorem (F·Δt = Δp)
- [ ] Distinguish what is/isn't conserved in each collision type
- [ ] Score 80%+ on `quiz.html`
- [ ] Complete assessment (see unit's Assessment Criteria)

### Unit 5 — [Work & Energy](units/05-work-energy/README.md)
- [ ] Read notes & complete Cornell notes summary
- [ ] Calculate work (including cases where W = 0)
- [ ] Apply the work–energy theorem
- [ ] Apply conservation of mechanical energy, including with friction (non-conservative work)
- [ ] Calculate power
- [ ] Score 80%+ on `quiz.html`
- [ ] Complete assessment (see unit's Assessment Criteria)

## Course-Level Learning Objectives

By the end of this project, students should be able to:

1. Select and apply the correct kinematic, dynamic, or conservation-law model
   for a given physical situation (recognize *which tool fits*, not just
   compute with a given formula).
2. Represent motion and forces using multiple tools — diagrams, graphs, and
   equations — and translate correctly between them.
3. Distinguish scalar and vector quantities and handle direction/sign
   consistently throughout a multi-step problem.
4. Identify what is conserved (momentum, energy) versus what changes, and
   justify why, for a given system and interaction.
5. Connect each concept to a real-world example and explain it in plain
   language, not just symbolically.

## Course-Level Assessment Criteria

| Level | Description |
|---|---|
| **Exceeds (4)** | Solves multi-concept problems (e.g., projectile + energy, or collision + Newton's laws) correctly, explains reasoning, correctly identifies conserved quantities without prompting. |
| **Meets (3)** | Solves standard single-concept problems correctly with correct units/sign conventions; can explain the underlying concept in words. |
| **Approaching (2)** | Sets up problems correctly but makes computational or sign errors; conceptual explanation is partially correct or vague. |
| **Beginning (1)** | Misidentifies the relevant concept/equation; cannot explain reasoning; relies on formula memorization without understanding. |

Suggested weighting per unit: 15% Cornell notes/participation, 25% practice
problem sets, 20% quiz performance (formative, retakes encouraged), 40%
unit test/lab (summative).

## General Resources (all units)

- **Textbook-level reference:** [OpenStax College Physics](https://openstax.org/details/books/college-physics-2e) (free, aligned to standard 11th grade mechanics sequence)
- **Video lessons:** [Khan Academy — Physics](https://www.khanacademy.org/science/physics), [The Organic Chemistry Tutor (YouTube)](https://www.youtube.com/@TheOrganicChemistryTutor) for worked problems
- **Simulations:** [PhET Interactive Simulations (University of Colorado Boulder)](https://phet.colorado.edu/en/simulations/filter?subjects=motion,motion-forces-and-energy)
- **Practice problems with solutions:** [The Physics Classroom](https://www.physicsclassroom.com/)
- **Formula/unit reference:** [HyperPhysics (Georgia State University)](http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html)

## Repository Structure

```
physics/
├── README.md                          # this file — master outline & checklist
└── units/
    ├── 01-kinematics/
    │   ├── README.md
    │   ├── cornell-notes.md
    │   └── quiz.html
    ├── 02-projectile-motion/
    │   ├── README.md
    │   ├── cornell-notes.md
    │   └── quiz.html
    ├── 03-newtons-laws/
    │   ├── README.md
    │   ├── cornell-notes.md
    │   └── quiz.html
    ├── 04-momentum/
    │   ├── README.md
    │   ├── cornell-notes.md
    │   └── quiz.html
    └── 05-work-energy/
        ├── README.md
        ├── cornell-notes.md
        └── quiz.html
```
