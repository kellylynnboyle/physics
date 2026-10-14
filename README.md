# 11th Grade Physics: Semester 1 Learning Project

Physics & Earth Science course model (California NGSS). Semester 1 covers the mechanics core. Semester 2 (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) will be added as a sibling project.

Shareable with students and instructors. Everything is plain Markdown plus one self-contained HTML quiz app, so it works on GitHub, in a browser, or printed.

## Start here

| I am a... | Start with |
|---|---|
| Student | Pick your unit below, read the **Cornell notes**, then take the **interactive quiz** (`quizzes/index.html`, open in any browser) |
| Instructor | [docs/assessment-and-rubrics.md](docs/assessment-and-rubrics.md), [docs/standards-alignment.md](docs/standards-alignment.md), [docs/pacing-guide.md](docs/pacing-guide.md) |
| Tracking progress | [docs/progress-tracker.md](docs/progress-tracker.md) |

## Project structure

```
physics/
├── README.md                     <- this checklist / outline
├── docs/
│   ├── standards-alignment.md    NGSS + science practices + crosscutting concepts
│   ├── assessment-and-rubrics.md Learning objectives, mastery scale, grading weights
│   ├── pacing-guide.md           ~18-week suggested sequence
│   └── progress-tracker.md       Printable student checklist and class roster template
├── units/
│   ├── 01-kinematics/            README (outline) + cornell-notes + practice-problems
│   ├── 02-projectile-motion/
│   ├── 03-newtons-laws/
│   ├── 04-momentum/
│   └── 05-work-and-energy/
└── quizzes/
    ├── index.html                Interactive quiz app (open in a browser, no install)
    └── questions.js              Question bank: most-missed questions, by topic
```

## Unit checklist

Each unit folder has the same four parts: **outline** (concepts, objectives, resources, real-world, lab), **Cornell notes**, **practice problems with answer key**, and a matching **quiz** in the quiz app.

- [ ] **Unit 1: Kinematics**: [outline](units/01-kinematics/README.md) · [Cornell notes](units/01-kinematics/cornell-notes.md) · [practice](units/01-kinematics/practice-problems.md)
- [ ] **Unit 2: Projectile Motion**: [outline](units/02-projectile-motion/README.md) · [Cornell notes](units/02-projectile-motion/cornell-notes.md) · [practice](units/02-projectile-motion/practice-problems.md)
- [ ] **Unit 3: Newton's Laws**: [outline](units/03-newtons-laws/README.md) · [Cornell notes](units/03-newtons-laws/cornell-notes.md) · [practice](units/03-newtons-laws/practice-problems.md)
- [ ] **Unit 4: Momentum**: [outline](units/04-momentum/README.md) · [Cornell notes](units/04-momentum/cornell-notes.md) · [practice](units/04-momentum/practice-problems.md)
- [ ] **Unit 5: Work & Energy**: [outline](units/05-work-and-energy/README.md) · [Cornell notes](units/05-work-and-energy/cornell-notes.md) · [practice](units/05-work-and-energy/practice-problems.md)

## Unit workflow (repeat for each unit)

- [ ] Preview the learning objectives (in the unit outline)
- [ ] Complete Cornell notes: fill the cue column yourself, then write the summary
- [ ] Do the simulation / lab for the unit
- [ ] Practice problems (check against the answer key, redo any you missed)
- [ ] Quiz: score 80%+ (retake the missed-question review until you do)
- [ ] Self-assess each objective on the 4-level scale in [progress-tracker.md](docs/progress-tracker.md)
- [ ] Unit assessment (instructor)

## Quiz app

Open `quizzes/index.html` in any browser (double-click it, or serve the folder). Features: five topic quizzes plus a mixed "all topics" quiz, shuffled questions and answer order, an explanation for every question that targets the common misconception, a "review missed questions" retry, and best scores saved on your own device.

The questions are the ones students most often miss: speed vs. velocity, acceleration at the top of a toss, independence of x and y motion, third-law pairs, impulse vs. force, energy scaling with speed, and so on.

## Standards snapshot

Learning goals come from the California NGSS Physics & Earth Science course model. Mechanics unit alignment (details in [docs/standards-alignment.md](docs/standards-alignment.md)):

| Unit | Performance expectations |
|---|---|
| Kinematics | Foundation for HS-PS2-1 (motion described with math) |
| Projectile Motion | Foundation for HS-PS2-1 (vector components, 2D motion) |
| Newton's Laws | **HS-PS2-1** |
| Momentum | **HS-PS2-2**, **HS-PS2-3** |
| Work & Energy | **HS-PS3-1**, **HS-PS3-2**, **HS-PS3-3** |

Standards text should be checked against the official source: https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp

## Notes for the instructor

- Problems use g = 9.8 m/s² and ignore air resistance unless stated.
- The quiz bank is plain JavaScript data in `quizzes/questions.js`; add or edit questions there (format is documented at the top of the file).
- If you want Cornell notes as formatted .docx handouts, the content in each `cornell-notes.md` is structured (Cue | Notes | Summary) so it converts directly.
