# 11th Grade Physics — Learning Project

A self-contained study project covering the core mechanics curriculum for
11th grade (algebra-based) physics: **Kinematics, Projectile Motion,
Newton's Laws, Momentum, and Work & Energy**.

Each unit folder under [`topics/`](topics/) is a complete study package with
four pieces:

| File | Purpose |
|---|---|
| `README.md` | Key concepts, learning objectives, assessment rubric, curated resources, practice problems (with answers), real-world applications |
| `cornell-notes.md` | Cornell-format notes (cues/questions ↔ notes + summary) for review and pre-quiz study |
| `quiz.html` | Self-contained interactive quiz targeting the questions students most often miss on this topic — open directly in a browser, get instant feedback and explanations |

No installation or server needed: every `quiz.html` is a standalone file
you can double-click and open in any browser (Chrome, Firefox, Safari, Edge).

## Units

1. [Kinematics](topics/01-kinematics/) — position, velocity, acceleration, motion graphs, the kinematic equations, free fall
2. [Projectile Motion](topics/02-projectile-motion/) — 2D motion under gravity, launch angles, range and height
3. [Newton's Laws](topics/03-newtons-laws/) — inertia, F = ma, action-reaction, free body diagrams, friction
4. [Momentum](topics/04-momentum/) — impulse, conservation of momentum, elastic/inelastic collisions
5. [Work & Energy](topics/05-work-and-energy/) — work, kinetic/potential energy, conservation of energy, power

## Suggested Sequence

Kinematics → Projectile Motion → Newton's Laws → Momentum → Work & Energy.
Each unit builds on the one before it (projectile motion is kinematics in
2D; momentum and energy problems both draw on forces from Newton's Laws),
so it's strongly recommended to go in order.

## How to Use This Project

**Students:**
1. Read the unit `README.md` first for the concept overview and objectives.
2. Fill out / review the `cornell-notes.md` as you study — the cue column
   is designed to be self-quizzing (cover the notes, answer from the cues).
3. Work the practice problems before checking answers.
4. Take the `quiz.html` — it's built from the mistakes students most
   commonly make on that topic, not just random recall questions.
5. Use the [Progress Checklist](PROGRESS_CHECKLIST.md) to track mastery
   and flag what to revisit.

**Instructors:** the rubrics in each unit's `## Assessment Criteria`
section are designed to be used as-is or adapted into a gradebook rubric;
the quiz questions double as a diagnostic of common misconceptions if
assigned before direct instruction.

## Project Structure

```
physics/
├── README.md                  ← you are here
├── PROGRESS_CHECKLIST.md       ← shared tracker for students/instructors
└── topics/
    ├── 01-kinematics/
    │   ├── README.md
    │   ├── cornell-notes.md
    │   └── quiz.html
    ├── 02-projectile-motion/
    ├── 03-newtons-laws/
    ├── 04-momentum/
    └── 05-work-and-energy/
```
