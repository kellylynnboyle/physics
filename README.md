# 11th Grade Physics — Semester 1 Learning Project

A shareable project for the first semester of the Physics & Earth Science course model (California NGSS). Students and instructors can use it as an outline, a checklist and a set of interactive quizzes. Second-semester topics (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) are listed as a roadmap in [`docs/ngss-alignment.md`](docs/ngss-alignment.md).

## Project structure
```
physics/
├── README.md                    ← you are here (outline + master checklist)
├── units/
│   ├── 01-kinematics.md
│   ├── 02-projectile-motion.md
│   ├── 03-newtons-laws.md
│   ├── 04-momentum.md
│   └── 05-work-and-energy.md
├── quizzes/
│   ├── index.html               ← open in a browser: interactive quizzes with feedback
│   └── kinematics.js … energy.js  ← editable question banks
└── docs/
    ├── ngss-alignment.md        ← standards, practices, crosscutting concepts
    ├── assessment-and-tracking.md ← rubrics, grading weights, tracker, error analysis
    └── instructor-guide.md      ← pacing, routines, differentiation, misconceptions
```

Every unit file has the same nine sections: key concepts · learning objectives · Cornell notes · resources · practice problems (with answers for instructors) · real-world applications · lab/performance task · assessment criteria · student checklist.

## Unit outline
| # | Unit | Standards | Weeks | Quiz |
|---|---|---|---|---|
| 1 | [Kinematics](units/01-kinematics.md) | HS-PS2-1 | 3 | [Take it](quizzes/index.html) |
| 2 | [Projectile Motion](units/02-projectile-motion.md) | HS-PS2-1 | 2 | [Take it](quizzes/index.html) |
| 3 | [Newton's Laws](units/03-newtons-laws.md) | HS-PS2-1, HS-PS2-4 | 4 | [Take it](quizzes/index.html) |
| 4 | [Momentum](units/04-momentum.md) | HS-PS2-2, HS-PS2-3 | 3 | [Take it](quizzes/index.html) |
| 5 | [Work & Energy](units/05-work-and-energy.md) | HS-PS3-1, HS-PS3-2, HS-PS3-3 | 4 | [Take it](quizzes/index.html) |

## Master checklist (students)
**Every unit**
- [ ] Cornell notes (cue column, notes, summary) — rubric in `docs/assessment-and-tracking.md`
- [ ] Interactive quiz ≥ 80% (retake as needed; do an error analysis for misses)
- [ ] Practice problems and assigned IXL skills
- [ ] Lab or design challenge with a CER write-up
- [ ] Unit test

**Semester**
- [ ] Unit 1 Kinematics
- [ ] Unit 2 Projectile Motion
- [ ] Unit 3 Newton's Laws
- [ ] Unit 4 Momentum
- [ ] Unit 5 Work & Energy
- [ ] Cumulative review and semester exam

## Using the quizzes
Open `quizzes/index.html` in a browser (no install, works offline). Each unit has 9 of the most commonly missed questions. After every answer students see a short explanation and the misconception behind the wrong answer. Best scores are saved in the student's browser only. To host for a class, enable GitHub Pages on this repository or upload the `quizzes/` folder to your LMS.

## Learning objectives at a glance
| Unit | Students will be able to… |
|---|---|
| Kinematics | Describe motion with graphs and equations; solve constant-acceleration and free-fall problems |
| Projectile Motion | Treat horizontal and vertical motion independently to predict a trajectory |
| Newton's Laws | Draw free-body diagrams and apply ΣF = ma, including weight, friction, tension and third-law pairs |
| Momentum | Use impulse and conservation of momentum; design a collision-safety device |
| Work & Energy | Apply work, KE, PE, conservation and power; design an energy-conversion device |

## Notes for the instructor
- Practice-problem answers appear in brackets in each unit file; delete them in the student copy.
- The Cornell notes are provided as cue/notes tables. A formatted Word version can be generated from the class deck with the `physics-cornell-notes` skill.
- Resource links point to well-known sites (PhET, The Physics Classroom, Khan Academy, OpenStax, HyperPhysics). Verify availability each year.
