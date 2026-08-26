# 11th Grade Physics — Learning Project

A self-contained study curriculum covering five core mechanics topics for 11th grade physics. Each module includes key concepts, measurable learning objectives, an assessment rubric, curated resources, practice problems with an answer key, Cornell-style notes, and an interactive self-grading quiz built around the questions students most often get wrong.

This project can be used by **students** for self-paced review or by **instructors** as a ready-made unit structure, homework set, and formative-assessment bank.

## How to Use This Project

- **Students:** Work through each module in order (or focus on a weak topic). Read the module `README.md` first, use `cornell-notes.md` as your study sheet, work the practice problems before checking the answer key, then open `quiz.html` in any browser to self-test.
- **Instructors:** Each module's Assessment Criteria section gives a ready rubric. `quiz.html` files are standalone — no server, install, or internet connection required — so they can be shared as a file, posted to an LMS, or projected in class for warm-ups/exit tickets.

## Suggested Sequence & Pacing

Mechanics builds cumulatively — each topic leans on the one before it. A typical unit pace is 1–2 weeks per module in a standard-track course; compress for honors/AP-adjacent pacing.

| # | Module | Builds On | Typical Duration |
|---|--------|-----------|-------------------|
| 1 | [Kinematics](./kinematics/) | Algebra, graphing | 1.5–2 weeks |
| 2 | [Projectile Motion](./projectile-motion/) | Kinematics | 1 week |
| 3 | [Newton's Laws](./newtons-laws/) | Kinematics | 1.5–2 weeks |
| 4 | [Momentum](./momentum/) | Newton's Laws | 1 week |
| 5 | [Work & Energy](./work-and-energy/) | Newton's Laws, Kinematics | 1.5–2 weeks |

## Master Checklist

Use this as a printable/shareable progress tracker. Check off each item as it's completed.

### Kinematics
- [ ] Read module overview and key concepts
- [ ] Complete Cornell notes review
- [ ] Solve all practice problems, then check answer key
- [ ] Score ≥ 80% on `quiz.html` (retake until met)
- [ ] Can explain distance vs. displacement and speed vs. velocity without notes
- [ ] Can interpret a position-time and velocity-time graph (slope + area) correctly

### Projectile Motion
- [ ] Read module overview and key concepts
- [ ] Complete Cornell notes review
- [ ] Solve all practice problems, then check answer key
- [ ] Score ≥ 80% on `quiz.html` (retake until met)
- [ ] Can decompose an initial velocity into horizontal/vertical components
- [ ] Can solve a projectile problem launched from an elevated height (non-symmetric case)

### Newton's Laws
- [ ] Read module overview and key concepts
- [ ] Complete Cornell notes review
- [ ] Solve all practice problems, then check answer key
- [ ] Score ≥ 80% on `quiz.html` (retake until met)
- [ ] Can draw a correct free body diagram for a multi-force scenario
- [ ] Can correctly identify a true Newton's 3rd law action-reaction pair

### Momentum
- [ ] Read module overview and key concepts
- [ ] Complete Cornell notes review
- [ ] Solve all practice problems, then check answer key
- [ ] Score ≥ 80% on `quiz.html` (retake until met)
- [ ] Can distinguish elastic vs. inelastic collisions and what's conserved in each
- [ ] Can apply the impulse-momentum theorem to a force/time scenario

### Work & Energy
- [ ] Read module overview and key concepts
- [ ] Complete Cornell notes review
- [ ] Solve all practice problems, then check answer key
- [ ] Score ≥ 80% on `quiz.html` (retake until met)
- [ ] Can apply the work-energy theorem to a multi-step problem
- [ ] Can solve a conservation-of-energy problem that includes friction (non-conservative force)

## Overall Assessment Model

| Level | Description |
|-------|-------------|
| **Developing** | Recalls definitions/formulas with support; solves single-step problems; needs guidance on graph/diagram interpretation. |
| **Proficient** | Solves multi-step problems independently; correctly applies the right formula/law given context; scores 70–89% on module quizzes. |
| **Mastery** | Solves novel/non-standard problems (e.g., non-symmetric projectile, energy problems with friction); explains reasoning and misconceptions to a peer; scores 90%+ on module quizzes. |

Progress can be tracked using the checklist above, module quiz scores, and practice-problem accuracy. Instructors may weight these however fits their gradebook (e.g., quizzes as formative/no-stakes, practice problems as homework, a cumulative test at the end of all five modules as summative).

## Repository Structure

```
11th-grade-physics/
├── README.md                     (this file — project outline & checklist)
├── kinematics/
│   ├── README.md                 (concepts, objectives, resources, problems)
│   ├── cornell-notes.md
│   └── quiz.html                 (interactive, open in any browser)
├── projectile-motion/
│   ├── README.md
│   ├── cornell-notes.md
│   └── quiz.html
├── newtons-laws/
│   ├── README.md
│   ├── cornell-notes.md
│   └── quiz.html
├── momentum/
│   ├── README.md
│   ├── cornell-notes.md
│   └── quiz.html
└── work-and-energy/
    ├── README.md
    ├── cornell-notes.md
    └── quiz.html
```
