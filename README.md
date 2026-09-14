# 11th Grade Physics — Core Mechanics Learning Project

A self-contained study project covering the core mechanics topics of an
11th-grade (Physics 1 level) course: **Kinematics, Projectile Motion,
Newton's Laws, Momentum, and Work & Energy.**

Each unit folder contains the same four things, so students and instructors
always know where to look:

| File | Purpose |
|---|---|
| `README.md` | Key concepts, learning objectives, resources, practice problems, real-world applications, and assessment criteria |
| `cornell-notes.md` | A guided Cornell-notes template (cues, notes, summary) for structured note-taking or review |
| `quiz.html` | An interactive, self-grading quiz of the questions students miss most often on that topic — open it in any browser |

Shared quiz styling/logic lives in [`assets/`](./assets) and is reused by every unit — no installation needed, just open the `.html` files directly.

## Project Structure

```
physics/
├── README.md                    ← you are here (project outline & checklist)
├── ASSESSMENT.md                ← learning objectives, rubric, and progress tracker
├── assets/                      ← shared quiz CSS/JS used by every unit
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

## Recommended Sequence

The units build on each other in this order — each one assumes mastery of
the previous:

1. **[Kinematics](./01-kinematics)** — describing motion (position, velocity, acceleration, motion graphs)
2. **[Projectile Motion](./02-projectile-motion)** — kinematics in two dimensions
3. **[Newton's Laws](./03-newtons-laws)** — what *causes* motion (forces)
4. **[Momentum](./04-momentum)** — forces applied over time, collisions
5. **[Work & Energy](./05-work-energy)** — an alternative (energy-based) approach to motion problems

## Student Checklist

Copy this checklist per student, or use the tracker table in
[`ASSESSMENT.md`](./ASSESSMENT.md) to track a whole class at once.

### Unit 1 — Kinematics
- [ ] Read unit README and completed Cornell notes
- [ ] Solved all 5 practice problems
- [ ] Scored 80%+ on `quiz.html`
- [ ] Can sketch/interpret x-t, v-t, and a-t graphs without help

### Unit 2 — Projectile Motion
- [ ] Read unit README and completed Cornell notes
- [ ] Solved all 5 practice problems
- [ ] Scored 80%+ on `quiz.html`
- [ ] Solved both "level ground" and "launched from a height" problem types

### Unit 3 — Newton's Laws
- [ ] Read unit README and completed Cornell notes
- [ ] Solved all 5 practice problems
- [ ] Scored 80%+ on `quiz.html`
- [ ] Drew correct free body diagrams for flat, inclined, and accelerating scenarios

### Unit 4 — Momentum
- [ ] Read unit README and completed Cornell notes
- [ ] Solved all 5 practice problems
- [ ] Scored 80%+ on `quiz.html`
- [ ] Can classify elastic vs. inelastic vs. perfectly inelastic collisions

### Unit 5 — Work & Energy
- [ ] Read unit README and completed Cornell notes
- [ ] Solved all 5 practice problems
- [ ] Scored 80%+ on `quiz.html`
- [ ] Applies conservation of energy correctly, with and without friction

## Instructor Checklist

- [ ] Confirm prerequisite math skills (algebra, basic trigonometry, graph reading) before Unit 1
- [ ] Assign Cornell notes as pre-class or in-class guided notes for each unit
- [ ] Use `quiz.html` as a low-stakes formative check (self-graded, immediate feedback) before summative assessment
- [ ] Review the "Common Mistakes to Flag" checklist at the bottom of each `cornell-notes.md` as a targeted misconception review before tests
- [ ] Track class-wide mastery using the table in [`ASSESSMENT.md`](./ASSESSMENT.md)
- [ ] Encourage the suggested PhET simulations for any student struggling with a concept — they make abstract vector/graph relationships visual and interactive

## How to Use the Interactive Quizzes

Each `quiz.html` is a single, self-contained web page (linking only to the
shared `assets/quiz.css` and `assets/quiz.js`, no external services or
internet connection required):

1. Open the file directly in a browser (double-click it, or right-click →
   "Open with" your browser), or host the whole `physics/` folder with
   GitHub Pages / a simple static file server for shareable links.
2. Click an answer choice — it's checked immediately with an explanation of
   *why* it's right or wrong, targeting the specific misconception behind
   that wrong answer.
3. A running score is shown at the top; click **Reset Quiz** to retry.
