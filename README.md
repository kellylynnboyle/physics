# Physics 11: Learning Project

A shareable, standards-aligned learning project for first-semester 11th-grade Physics (California NGSS, Physics & Earth Science course model): **Kinematics, Projectile Motion, Newton's Laws, Momentum, and Work & Energy.**

Each topic has key concepts, Cornell notes, an interactive quiz of the most-missed questions, practice problems with answers, resources, real-world applications, and learning objectives with assessment criteria.

## Start here
| I am a… | Go to |
|---------|-------|
| **Student** | Download and open [`site/physics-all-in-one.html`](site/physics-all-in-one.html) in a browser (GitHub shows HTML as code, so download it first) for notes, quizzes, and a progress tracker |
| **Instructor** | [Instructor guide](docs/instructor-guide.md) and [assessment & tracking](docs/assessment-and-tracking.md) |
| **Anyone** | Browse the topic pages below on GitHub |

## Project checklist

### Unit pages
- [x] [1. Kinematics](topics/01-kinematics/README.md): [Cornell notes](topics/01-kinematics/cornell-notes.md) · [Quiz](topics/01-kinematics/quiz.md)
- [x] [2. Projectile Motion](topics/02-projectile/README.md): [Cornell notes](topics/02-projectile/cornell-notes.md) · [Quiz](topics/02-projectile/quiz.md)
- [x] [3. Newton's Laws](topics/03-newton/README.md): [Cornell notes](topics/03-newton/cornell-notes.md) · [Quiz](topics/03-newton/quiz.md)
- [x] [4. Momentum](topics/04-momentum/README.md): [Cornell notes](topics/04-momentum/cornell-notes.md) · [Quiz](topics/04-momentum/quiz.md)
- [x] [5. Work & Energy](topics/05-energy/README.md): [Cornell notes](topics/05-energy/cornell-notes.md) · [Quiz](topics/05-energy/quiz.md)

### Course documents
- [x] [Course overview and NGSS map](docs/course-overview.md)
- [x] [Assessment criteria, rubrics, and progress trackers](docs/assessment-and-tracking.md)
- [x] [Instructor guide](docs/instructor-guide.md)

### Still to do (instructor decisions)
- [ ] Confirm the NGSS wording against the [CDE standards page](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp)
- [ ] Build Semester 2 units (electricity, magnetism, waves, light, plate tectonics/earthquakes, nuclear physics); see the roadmap in the course overview
- [ ] Add class-specific labs, IXL skill assignments, and exam questions

## What's in each topic
1. **Key concepts** to master (checklist)
2. **Cornell notes**: cues, notes, summary, and self-quiz; printable
3. **Dot-diagram lesson** (Kinematics): interactive explorer, generated challenge problems, mnemonics, and hints
3. **Interactive quiz**: most-missed questions per topic (42 total), each tagged with the misconception it targets
4. **Practice problems** with worked answers
5. **Resources**: simulations, tutorials, textbook chapters, labs, design projects
6. **Real-world applications**
7. **Learning objectives and evidence of mastery** for tracking progress

## Repository layout
```
content/    Source of truth: one JS file per topic
scripts/    build.js generates the Markdown pages and site data
topics/     Generated topic pages, Cornell notes, quizzes (Markdown)
site/       Static interactive site (no build or server needed)
docs/       Course overview, assessment, instructor guide
```

To change content: edit `content/*.js`, then run `node scripts/build.js`.

Licensed under the terms in [LICENSE](LICENSE).
