# Physics 11 Learning Project

A self-contained study package for 11th-grade (Physics 1 / honors) students covering five core
mechanics topics: **Kinematics, Projectile Motion, Newton's Laws, Momentum, and Work & Energy**.

Each unit folder contains the same four pieces, so students and instructors always know where to
look:

| File | Purpose |
|---|---|
| `README.md` | Key concepts, learning objectives, assessment criteria, resources, practice problems, real-world applications |
| `cornell-notes.md` | Fill-in-ready Cornell notes (cue column / notes column / summary) for guided note-taking or lecture prep |
| Quiz | Interactive, auto-graded quiz of the questions students miss most often on this topic — see [Quiz App](#quiz-app) |

## Project Structure

```
physics/
├── README.md                          ← this file: master outline & checklist
├── units/
│   ├── 01-kinematics/
│   │   ├── README.md
│   │   └── cornell-notes.md
│   ├── 02-projectile-motion/
│   │   ├── README.md
│   │   └── cornell-notes.md
│   ├── 03-newtons-laws/
│   │   ├── README.md
│   │   └── cornell-notes.md
│   ├── 04-momentum/
│   │   ├── README.md
│   │   └── cornell-notes.md
│   └── 05-work-energy/
│       ├── README.md
│       └── cornell-notes.md
└── quiz-app/
    └── index.html                      ← interactive quiz covering all 5 units
```

## How to Use This Project

**Students:** Work through units in order — each one builds on the last (kinematics feeds
projectile motion; Newton's Laws motivates momentum and energy). For each unit: read the
`README.md` key concepts and real-world applications first, fill out `cornell-notes.md` during
class or while reading a textbook chapter, work the practice problems, then take the quiz in
`quiz-app/index.html` and re-take it until you consistently score 80%+.

**Instructors:** Use the learning objectives and assessment criteria in each unit `README.md` as
a rubric for quizzes/tests. The quiz app's "missed questions" bank targets the misconceptions
students most commonly carry into each topic (based on typical AP Physics 1 / intro mechanics
error patterns), so it doubles as a formative-assessment tool or warm-up bell-ringer.

## Quiz App

Open `quiz-app/index.html` in any browser (no install, no server required). It has one tab per
unit, multiple-choice questions targeting the most commonly missed concepts, instant feedback
with explanations for both correct and incorrect answers, a running score, and a "weak spots"
summary at the end of each attempt. Progress per unit is saved locally in the browser
(`localStorage`) so students can pick up where they left off.

## Project Checklist

### Setup
- [ ] Clone/download the repository
- [ ] Confirm `quiz-app/index.html` opens correctly in a browser
- [ ] Instructor: review assessment criteria in each unit and align to gradebook categories

### Unit 1 — Kinematics
- [ ] Read key concepts & complete Cornell notes
- [ ] Work all practice problems
- [ ] Score 80%+ on the Kinematics quiz
- [ ] Can explain 3 real-world applications unprompted

### Unit 2 — Projectile Motion
- [ ] Read key concepts & complete Cornell notes
- [ ] Work all practice problems
- [ ] Score 80%+ on the Projectile Motion quiz
- [ ] Can derive range/max-height equations from kinematics

### Unit 3 — Newton's Laws
- [ ] Read key concepts & complete Cornell notes
- [ ] Work all practice problems
- [ ] Score 80%+ on the Newton's Laws quiz
- [ ] Can draw a correct free-body diagram for a novel scenario

### Unit 4 — Momentum
- [ ] Read key concepts & complete Cornell notes
- [ ] Work all practice problems
- [ ] Score 80%+ on the Momentum quiz
- [ ] Can distinguish elastic vs. inelastic collisions and justify which quantities are conserved

### Unit 5 — Work & Energy
- [ ] Read key concepts & complete Cornell notes
- [ ] Work all practice problems
- [ ] Score 80%+ on the Work & Energy quiz
- [ ] Can apply conservation of energy to a system with friction (non-conservative force)

### Culminating
- [ ] Cumulative review: retake all five quizzes in one sitting
- [ ] Instructor-led problem set mixing all five units (e.g., a projectile that then collides and
      slides to a stop — ties kinematics, momentum, and energy together)

## Learning Objectives (Course-Level)

By the end of this project, students should be able to:
1. Describe motion quantitatively using position, velocity, and acceleration, and connect
   numeric, graphical, and equation-based representations of the same motion.
2. Decompose two-dimensional motion into independent horizontal and vertical components.
3. Apply Newton's three laws to construct free-body diagrams and solve for unknown forces,
   masses, or accelerations.
4. Apply conservation of momentum and conservation of energy to analyze collisions and systems,
   and correctly identify when each conservation law does or does not apply.
5. Connect abstract mechanics principles to real-world systems (vehicles, sports, engineering
   safety systems) and communicate reasoning using correct units and vector notation.

## Assessment Criteria (Course-Level Rubric)

| Level | Description |
|---|---|
| **Exceeds (4)** | Solves multi-concept problems spanning units, justifies which laws/equations apply and why, correct units and sig figs throughout, can critique a flawed solution |
| **Meets (3)** | Solves standard single-unit problems correctly and independently, correct units, can explain reasoning in words |
| **Approaching (2)** | Solves problems with formula prompts or partial guidance; makes recoverable sign/unit errors |
| **Beginning (1)** | Recognizes vocabulary and formulas but cannot yet apply them to solve a problem without significant support |

Instructors: use this rubric alongside each unit's specific assessment criteria (in that unit's
`README.md`) for topic-level grading; use the course-level rubric above for cumulative/final
assessment.

## General Resources (All Units)

- **Textbook:** OpenStax *Physics* (free, [openstax.org/details/books/physics](https://openstax.org/details/books/physics)) — algebra-based, aligned to this project's scope
- **Video:** Khan Academy — Physics library (1D/2D motion, forces, momentum, energy playlists)
- **Video:** The Organic Chemistry Tutor (YouTube) — worked problem sets for every topic below
- **Simulations:** [PhET Interactive Simulations](https://phet.colorado.edu/) (University of Colorado Boulder) — free, browser-based, listed per-unit below
- **Practice bank:** The Physics Classroom ([physicsclassroom.com](https://www.physicsclassroom.com/)) — concept builders and mastery-based practice per topic
- **IXL Physics** ([ixl.com/science/physics](https://www.ixl.com/science/physics)) — standing recommendation for review: each unit below links the specific IXL skills that match it, drawn from IXL's Physics skill plan (sections D–H cover this project's five units)
