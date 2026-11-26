# Physics: Semester 1 Learning Project

A complete study and teaching package for the first semester of 11th grade physics: **Kinematics, Projectile Motion, Newton's Laws, Momentum, and Work & Energy**. Learning goals follow the California NGSS (Physics in the Universe course model). Each unit has Cornell notes, an interactive quiz on the questions students miss most, practice problems with answers, resources, and objectives with mastery criteria.

## Start here

| I am a... | Go to |
|---|---|
| Student | The unit folder you are studying, then the [interactive quiz](quiz/index.html) and your [progress tracker](docs/PROGRESS-TRACKER.md) |
| Teacher or tutor | [Standards map](docs/STANDARDS.md), [assessment criteria](docs/ASSESSMENT.md), and the unit plans below |

## Course outline

| Unit | Topic | Pacing | NGSS focus | Unit plan | Cornell notes | Quiz |
|---|---|---|---|---|---|---|
| 1 | Kinematics | Weeks 1–4 | Foundation for HS-PS2-1 | [Plan](units/01-kinematics/README.md) | [Web](units/01-kinematics/cornell-notes.md) · [Word](units/01-kinematics/cornell-notes.docx) | [8 questions](quiz/index.html#kinematics) |
| 2 | Projectile Motion | Weeks 5–7 | Foundation for HS-PS2-1 | [Plan](units/02-projectile-motion/README.md) | [Web](units/02-projectile-motion/cornell-notes.md) · [Word](units/02-projectile-motion/cornell-notes.docx) | [8 questions](quiz/index.html#projectile-motion) |
| 3 | Newton's Laws | Weeks 8–11 | HS-PS2-1 | [Plan](units/03-newtons-laws/README.md) | [Web](units/03-newtons-laws/cornell-notes.md) · [Word](units/03-newtons-laws/cornell-notes.docx) | [8 questions](quiz/index.html#newtons-laws) |
| 4 | Momentum | Weeks 12–14 | HS-PS2-2, HS-PS2-3 | [Plan](units/04-momentum/README.md) | [Web](units/04-momentum/cornell-notes.md) · [Word](units/04-momentum/cornell-notes.docx) | [8 questions](quiz/index.html#momentum) |
| 5 | Work & Energy | Weeks 15–18 | HS-PS3-1, HS-PS3-2, HS-PS3-3 | [Plan](units/05-work-energy/README.md) | [Web](units/05-work-energy/cornell-notes.md) · [Word](units/05-work-energy/cornell-notes.docx) | [8 questions](quiz/index.html#work-energy) |

Pacing is a suggestion for an 18-week semester. Adjust it to the class calendar.

## What each unit contains

Every unit plan (`units/<unit>/README.md`) has the same parts:

1. **Key concepts** students need to master
2. **Learning targets** in student language ("I can...")
3. **Learning objectives and evidence of mastery**, the basis for grading
4. **Unit checklist** to track progress
5. **Learning resources**: Physics Classroom readings and Concept Builders, PhET simulations, Khan Academy, OpenStax, and an IXL practice plan
6. **Practice problems** with hidden, worked answers
7. **Real-world applications**
8. **Most-missed questions** in a printable form with explanations

The **Cornell notes** put a question in the cue column and the answer in the notes column, so the cue column works as a self-test. The Word version adds a cover page, visual memory aids (motion maps, graphs, free-body diagrams), a memory tricks and study methods page, and an IXL checklist.

The **interactive quiz** (`quiz/index.html`) has eight questions per unit. Each one targets a well-documented misconception, shuffles its answer choices, and explains the right answer as soon as you choose. Open the file in any browser. No install or login is needed.

## Semester checklist

Students: copy this list or use the fuller [progress tracker](docs/PROGRESS-TRACKER.md).

### Unit 1: Kinematics
- [ ] Cornell notes self-test (every cue answered aloud from memory)
- [ ] Quiz: 7 of 8 or better
- [ ] Practice problems checked
- [ ] IXL plan at SmartScore 80+
- [ ] Lab: constant velocity and acceleration
- [ ] Unit test

### Unit 2: Projectile Motion
- [ ] Cornell notes self-test
- [ ] Quiz: 7 of 8 or better
- [ ] Practice problems checked
- [ ] IXL plan at SmartScore 80+
- [ ] Lab: predict the landing spot of a horizontal launch
- [ ] Unit test

### Unit 3: Newton's Laws
- [ ] Cornell notes self-test
- [ ] Quiz: 7 of 8 or better
- [ ] Practice problems checked
- [ ] IXL plan at SmartScore 80+
- [ ] Lab: force, mass, and acceleration (HS-PS2-1)
- [ ] Unit test

### Unit 4: Momentum
- [ ] Cornell notes self-test
- [ ] Quiz: 7 of 8 or better
- [ ] Practice problems checked
- [ ] IXL plan at SmartScore 80+
- [ ] Lab: collision carts (HS-PS2-2)
- [ ] Design challenge: egg drop or crash cushion (HS-PS2-3)
- [ ] Unit test

### Unit 5: Work & Energy
- [ ] Cornell notes self-test
- [ ] Quiz: 7 of 8 or better
- [ ] Practice problems checked
- [ ] IXL plan at SmartScore 80+
- [ ] Lab: conservation of energy on a ramp or pendulum (HS-PS3-1)
- [ ] Design challenge: energy conversion device (HS-PS3-3)
- [ ] Unit test
- [ ] Semester final

## Items for the teacher to check

- **Learning targets and essential questions** were written from the content, not copied from class handouts. Compare them with what is posted in class.
- **Labs** are the standard labs for each topic. Swap in the labs the class actually runs.
- **"Most-missed" questions** come from physics misconceptions documented in research and teaching resources, not from this class's own test results. Replace or add questions once real class data is available.
- **IXL codes** were copied from the live IXL pages on 2026-11-26. IXL renumbers skills from time to time, and two new skills (momentum and impulse; work from force-displacement graphs) had no number yet.
- **Force labels** follow The Physics Classroom (F<sub>grav</sub>, F<sub>norm</sub>, F<sub>app</sub>, F<sub>frict</sub>). Change them if the class uses other symbols.

## Second semester

Electricity, magnetism, waves, light, plate tectonics, earthquakes, and nuclear physics are not built yet. The [standards map](docs/STANDARDS.md) lists the performance expectations they will cover, and the same unit structure can be reused.

## Repository layout

```
content/            one source file per unit (edit these)
scripts/build.js    generates unit pages, Cornell notes, tracker, and quiz
scripts/diagrams.py draws the visual memory aids
units/              generated unit plans and Cornell notes
quiz/               interactive quiz (template.html is the source, index.html is generated)
docs/               standards map, assessment criteria, progress tracker
assets/diagrams/    generated diagram images
```

To change any content, edit the file in `content/` and rebuild:

```
python3 scripts/diagrams.py        # needs matplotlib
NODE_PATH=$(npm root -g) node scripts/build.js   # needs the docx package
```

## Sources

- California NGSS standards: https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp
- California Science Framework, Chapter 7 (High School Three-Course Model): https://www.cde.ca.gov/ci/sc/cf/cascienceframework2016.asp
- IXL skill lists: https://www.ixl.com/science/physics, https://www.ixl.com/math/precalculus, https://www.ixl.com/science/grade-8
- The Physics Classroom: https://www.physicsclassroom.com
- PhET Interactive Simulations: https://phet.colorado.edu
