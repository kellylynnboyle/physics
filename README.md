# Physics & Earth Science — Semester 1 Learning Project (Grade 11)

A shareable project outline for students and instructors covering the first-semester
mechanics sequence. Standards are drawn from the California NGSS
[Physics & Earth Science course model](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp)
(see [docs/standards-alignment.md](docs/standards-alignment.md)).

> **Semester 2 (not in this project yet):** electricity, magnetism, waves, light,
> plate tectonics, earthquakes, nuclear physics. The structure here is meant to be copied.

## How this project is organized

| # | Unit | Folder | Quiz topic |
|---|------|--------|-----------|
| 1 | Kinematics | [topics/01-kinematics.md](topics/01-kinematics.md) | `kinematics` |
| 2 | Projectile Motion | [topics/02-projectile-motion.md](topics/02-projectile-motion.md) | `projectile` |
| 3 | Newton's Laws | [topics/03-newtons-laws.md](topics/03-newtons-laws.md) | `newton` |
| 4 | Momentum | [topics/04-momentum.md](topics/04-momentum.md) | `momentum` |
| 5 | Work & Energy | [topics/05-work-energy.md](topics/05-work-energy.md) | `energy` |

Each unit page contains, in order:

1. NGSS standards and **learning objectives** ("I can…" statements)
2. **Key concepts** and formulas
3. **Cornell notes** (cue column | notes column | summary)
4. **Most-missed questions** (the misconceptions the interactive quiz targets)
5. **Resources** (labs/sims, video, reading, practice)
6. **Practice problems** with answers
7. **Real-world applications**
8. **Assessment criteria** (rubric) and a **mastery checklist**

Shared documents:

- [docs/standards-alignment.md](docs/standards-alignment.md) — NGSS performance expectations ↔ units
- [docs/assessment-and-tracking.md](docs/assessment-and-tracking.md) — grading weights, mastery levels, student tracker, instructor tracker
- [docs/pacing-guide.md](docs/pacing-guide.md) — suggested ~18-week sequence

## Interactive quizzes

Open [`quiz/index.html`](quiz/index.html) in any browser (no install, works offline).

- 8 "most-often-missed" questions per unit (40 total), shuffled each attempt
- Instant feedback that names the misconception behind each wrong answer
- Per-unit best score saved in the browser (localStorage) and shown as a progress bar
- "Review missed" mode replays only the questions you got wrong
- Add or edit questions in [`quiz/questions.js`](quiz/questions.js)

To share with students, host the `quiz/` folder with GitHub Pages or send the folder as a zip.

## Project checklist (instructor)

- [ ] Confirm NGSS performance expectations against the current CDE page
- [ ] Print or share each unit page (Cornell notes are fill-in friendly)
- [ ] Share `quiz/index.html` link; assign unit quizzes as warm-ups or exit tickets
- [ ] Copy the student tracker from `docs/assessment-and-tracking.md` into your LMS
- [ ] Run the unit lab(s) listed under each unit's Resources
- [ ] After each unit: review the class's most-missed quiz items and reteach

## Project checklist (student)

- [ ] Unit 1 Kinematics — notes done · quiz ≥ 80% · practice set · lab
- [ ] Unit 2 Projectile Motion — notes done · quiz ≥ 80% · practice set · lab
- [ ] Unit 3 Newton's Laws — notes done · quiz ≥ 80% · practice set · lab
- [ ] Unit 4 Momentum — notes done · quiz ≥ 80% · practice set · lab
- [ ] Unit 5 Work & Energy — notes done · quiz ≥ 80% · practice set · lab
- [ ] Semester project / cumulative assessment

## Conventions

- g = 9.8 m/s² (use 10 m/s² only if your teacher says so)
- SI units throughout; always write units
- Up and right are positive unless stated otherwise
- Air resistance is ignored unless a problem says otherwise
