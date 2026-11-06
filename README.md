# High School Physics - Semester 1 Learning Project (Grade 11)

Course model: Physics & Earth Science (California NGSS). Semester 1 covers kinematics, projectile motion, Newton's laws, momentum, and work & energy. Standards are the learning goals: https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp

## What is in this repo

| Path | Purpose |
|---|---|
| `site/index.html` | Student-facing app: Cornell notes (printable), interactive most-missed-question quizzes, and a progress tracker. Open it in any browser; no install. |
| `topics/*.md` | One outline per unit: objectives, concepts, Cornell notes, quiz key, resources, practice, applications, rubric, checklist |
| `docs/standards.md` | NGSS alignment |
| `docs/assessment.md` | Grading scale, weighting, class tracker, objective list |
| `content/topics.py` | Single source of truth for all content |
| `build.py` | Regenerates topic files, docs, and the site (`python3 build.py`) |

## Course checklist

- [ ] **Unit 1: [Kinematics](topics/kinematics.md)** (Weeks 1-3) - HS-PS2-1
  - [ ] Cornell notes  - [ ] Interactive quiz >= 75%  - [ ] Practice problems  - [ ] Lab  - [ ] Unit assessment
- [ ] **Unit 2: [Projectile Motion](topics/projectile-motion.md)** (Weeks 4-6) - HS-PS2-1
  - [ ] Cornell notes  - [ ] Interactive quiz >= 75%  - [ ] Practice problems  - [ ] Lab  - [ ] Unit assessment
- [ ] **Unit 3: [Newton's Laws](topics/newtons-laws.md)** (Weeks 7-10) - HS-PS2-1, HS-PS2-3
  - [ ] Cornell notes  - [ ] Interactive quiz >= 75%  - [ ] Practice problems  - [ ] Lab  - [ ] Unit assessment
- [ ] **Unit 4: [Momentum](topics/momentum.md)** (Weeks 11-13) - HS-PS2-2, HS-PS2-3
  - [ ] Cornell notes  - [ ] Interactive quiz >= 75%  - [ ] Practice problems  - [ ] Lab  - [ ] Unit assessment
- [ ] **Unit 5: [Work & Energy](topics/work-energy.md)** (Weeks 14-18) - HS-PS3-1, HS-PS3-2, HS-PS3-3
  - [ ] Cornell notes  - [ ] Interactive quiz >= 75%  - [ ] Practice problems  - [ ] Lab  - [ ] Unit assessment
- [ ] Semester 1 cumulative exam

## Unit map

| Unit | Topic | Core ideas | NGSS |
|---|---|---|---|
| 1 | Kinematics | Position, distance, displacement; Speed vs. velocity; Acceleration; Graph meanings | HS-PS2-1 |
| 2 | Projectile Motion | Projectile; Independence of components; Components; Horizontal launch | HS-PS2-1 |
| 3 | Newton's Laws | First law (inertia); Second law; Third law; Weight and normal force | HS-PS2-1, HS-PS2-3 |
| 4 | Momentum | Momentum; Impulse; Conservation of momentum; Collision types | HS-PS2-2, HS-PS2-3 |
| 5 | Work & Energy | Work; Kinetic energy; Gravitational potential energy; Elastic potential energy | HS-PS3-1, HS-PS3-2, HS-PS3-3 |

## For instructors
- Share `site/index.html` (or host the `site/` folder, e.g. on GitHub Pages). Quiz scores and checklist progress are stored only in each student's browser.
- Add or edit questions in `content/topics.py`, then run `python3 build.py`.
- Quiz answer order is shuffled on every attempt.
- Resource links are to well-known free sites (Physics Classroom, PhET, OpenStax, Khan Academy); please spot-check URLs each term.
