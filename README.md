# 11th Grade Physics: Semester 1 Learning Project

Physics & Earth Science course model (California NGSS). Semester 1 covers mechanics: kinematics, projectile motion, Newton's laws, momentum, and work & energy. Semester 2 (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) will follow the same structure.

Each unit has the same parts: learning objectives, key concepts and equations, Cornell notes, practice problems with answers, real-world applications, resources, and a checklist. A shared interactive quiz covers the most-missed questions for every unit.

## Start here

| For | Open |
|---|---|
| Students: the unit checklist | [Unit pages](#units) below |
| Students: interactive quizzes | [`quizzes/index.html`](quizzes/index.html) (open in any browser, no install) |
| Instructors: standards, objectives, rubric, tracker | [`docs/standards-and-assessment.md`](docs/standards-and-assessment.md) |
| Everyone: how to use Cornell notes | [`docs/how-to-use-cornell-notes.md`](docs/how-to-use-cornell-notes.md) |

## Units

Suggested pacing is about 3 weeks per unit (15 weeks). Adjust to your calendar.

| # | Unit | Pacing | Main NGSS targets |
|---|---|---|---|
| 1 | [Kinematics](units/01-kinematics.md) | Wk 1-3 | HS-PS2-1 (math/data practices) |
| 2 | [Projectile Motion](units/02-projectile-motion.md) | Wk 4-6 | HS-PS2-1 |
| 3 | [Newton's Laws](units/03-newtons-laws.md) | Wk 7-9 | HS-PS2-1, HS-PS2-3 |
| 4 | [Momentum](units/04-momentum.md) | Wk 10-12 | HS-PS2-2, HS-PS2-3 |
| 5 | [Work & Energy](units/05-work-and-energy.md) | Wk 13-15 | HS-PS3-1, HS-PS3-2, HS-PS3-3 |

## Project checklist (whole semester)

- [ ] Read the standards page and the Cornell notes guide
- [ ] Unit 1 Kinematics: notes, practice set, lab, quiz >= 80%, unit test
- [ ] Unit 2 Projectile Motion: notes, practice set, lab, quiz >= 80%, unit test
- [ ] Unit 3 Newton's Laws: notes, practice set, lab, quiz >= 80%, unit test
- [ ] Unit 4 Momentum: notes, practice set, lab, quiz >= 80%, unit test
- [ ] Unit 5 Work & Energy: notes, practice set, lab, quiz >= 80%, unit test
- [ ] Semester capstone: design, build and analyze a "physics of a real system" project (see standards page)
- [ ] Review the missed-question list from the quizzes before the final

## Repository layout

```
README.md                       this file
docs/
  standards-and-assessment.md   NGSS map, objectives, rubric, tracker, test blueprint
  how-to-use-cornell-notes.md   study method
units/
  01-kinematics.md ... 05-work-and-energy.md
quizzes/
  index.html                    interactive quiz app
  questions.js                  question bank (edit this to add or change questions)
```

## Notes for the instructor

- The NGSS performance expectations listed here come from the California NGSS high school physical science and Earth science standards (https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp). Check the codes against the live CDE page and your district's course model before publishing, since the physics standards sit across the Physics and Earth Science model courses and numbering can differ in your scope and sequence.
- Worked answers and the quiz bank were calculated with g = 9.8 m/s^2. Quiz answers are checked in the browser only; there is no server and no student data leaves the device.
- To add questions, append to `quizzes/questions.js` using the same shape as the existing entries.
