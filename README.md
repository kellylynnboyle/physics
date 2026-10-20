# 11th Grade Physics: Semester 1 Learning Project

Lab experience, real-world connections and a theoretical framework for core mechanics, aligned to the California NGSS Physics & Earth Science course model. Standards: <https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp>

Semester 1 covers kinematics, projectile motion, Newton's laws, momentum, and work and energy. Semester 2 (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) will extend this same structure.

## Project outline

| # | Unit | Weeks | Notes, problems, resources | Quiz |
|---|---|---|---|---|
| 1 | Kinematics | 1–3 | [topics/01-kinematics.md](topics/01-kinematics.md) | 9 questions |
| 2 | Projectile Motion | 4–5 | [topics/02-projectile-motion.md](topics/02-projectile-motion.md) | 9 questions |
| 3 | Newton's Laws | 6–9 | [topics/03-newtons-laws.md](topics/03-newtons-laws.md) | 9 questions |
| 4 | Momentum | 10–12 | [topics/04-momentum.md](topics/04-momentum.md) | 9 questions |
| 5 | Work & Energy | 13–16 | [topics/05-work-and-energy.md](topics/05-work-and-energy.md) | 10 questions |

Objectives, rubrics, the standards map, the pacing guide and the printable tracker are in [docs/assessment-and-tracking.md](docs/assessment-and-tracking.md).

## What each unit packet contains

1. Learning objectives as a checklist, tied to NGSS
2. Key concepts and equation table
3. **Cornell notes**: cue column, notes column, and a summary to complete
4. The most-missed misconceptions
5. Practice problems with answers
6. Lab and design-challenge ideas
7. Learning resources (PhET, Physics Classroom, Khan Academy, HyperPhysics, OpenStax, IXL)
8. Real-world applications
9. Assessment criteria (4-level scale) and a unit checkpoint list

## Interactive quizzes

Open `quiz/index.html` in any browser (no install, works offline). Questions target the most commonly missed ideas. After each answer students see the explanation and the specific trap. Answer order is shuffled, results show a mastery level, students can retry only the questions they missed, and best scores are remembered in the browser.

To serve it for a class, host the `quiz/` folder on any static host (for example GitHub Pages).

To add or edit questions, change `quiz/questions.js`, then run:

```
node quiz/validate.js
```

## For instructors

- Share the topic files and tracker with students as-is; they render on GitHub.
- Keep the answer keys in the practice tables or delete that column before handing out worksheets.
- Practice problems use g = 10 m/s² for mental math unless stated; use 9.8 for lab calculations.
- The Cornell summary lines are intentionally left for students to write in their own words.

## Layout

```
README.md
docs/assessment-and-tracking.md   objectives, standards map, rubrics, pacing, tracker
topics/01…05-*.md                 unit packets
quiz/index.html                   interactive quizzes
quiz/questions.js                 question bank
quiz/validate.js                  question-bank checker
```
