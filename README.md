# Grade 11 Physics: Semester 1 Learning Project

A shareable project outline for students and instructors covering the five Semester 1 topics: kinematics, projectile motion, Newton's laws, momentum, and work and energy. Each unit has printable Cornell notes, an interactive quiz on the most commonly missed ideas, practice problems with answers, resources, labs, and a checklist.

The learning goals are the [California NGSS](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp) for high school (Physics and Earth Science course model). See the [standards map](docs/standards-map.md).

## Units

| # | Unit | Pacing | CA NGSS | Outline | Cornell notes | Quiz |
|---|---|---|---|---|---|---|
| 1 | Kinematics | Weeks 1–4 | Builds toward HS-PS2-1 | [Outline](units/01-kinematics/README.md) | [.docx](units/01-kinematics/cornell-notes-01-kinematics.docx) | [quiz.html](units/01-kinematics/quiz.html) |
| 2 | Projectile Motion | Weeks 5–7 | Extends HS-PS2-1 | [Outline](units/02-projectile-motion/README.md) | [.docx](units/02-projectile-motion/cornell-notes-02-projectile-motion.docx) | [quiz.html](units/02-projectile-motion/quiz.html) |
| 3 | Newton's Laws | Weeks 8–11 | HS-PS2-1 | [Outline](units/03-newtons-laws/README.md) | [.docx](units/03-newtons-laws/cornell-notes-03-newtons-laws.docx) | [quiz.html](units/03-newtons-laws/quiz.html) |
| 4 | Momentum | Weeks 12–14 | HS-PS2-2, HS-PS2-3 | [Outline](units/04-momentum/README.md) | [.docx](units/04-momentum/cornell-notes-04-momentum.docx) | [quiz.html](units/04-momentum/quiz.html) |
| 5 | Work & Energy | Weeks 15–18 | HS-PS3-1, HS-PS3-2, HS-PS3-3 | [Outline](units/05-work-and-energy/README.md) | [.docx](units/05-work-and-energy/cornell-notes-05-work-and-energy.docx) | [quiz.html](units/05-work-and-energy/quiz.html) |

Pacing assumes an 18-week semester and is a suggestion; adjust it to the school calendar.

## What each unit contains

Every unit outline follows the same order:

1. **Standards** addressed (CA NGSS performance expectations and practices)
2. **Key concepts** students need to master
3. **Learning objectives**, numbered, each with the evidence used to assess it
4. **Cue questions** for self-testing
5. **Visual memory aids** (standard physics diagrams with the matching rule)
6. **Most commonly missed ideas**, one per quiz question
7. **Learning resources** (The Physics Classroom, PhET simulations, OpenStax, Khan Academy, IXL)
8. **IXL practice plan** with current skill codes
9. **Practice problems** with collapsible worked answers
10. **Labs and investigations**
11. **Real-world applications**
12. **Unit checklist** for students and instructors

## How to use the materials

**Cornell notes (.docx).** Open in Word or Google Docs and print. Each file has a cover page with learning targets and an outline, the notes table (cue questions on the left, notes and worked examples on the right), a page of visual memory aids, a study-method page, and an IXL practice checklist. To study: cover the Notes column, answer each cue aloud, check, and repeat over several days.

**Interactive quizzes (quiz.html).** Each quiz has 10 multiple-choice questions. After every answer the student sees whether it was right, why, and the common mistake behind the wrong answers. At the end they can retry only the questions they missed. Answer order is shuffled each time. Nothing is sent anywhere; the best score is stored only in that browser.

- GitHub shows `.html` files as source code. To use the quizzes, download the repository (Code → Download ZIP) and open `index.html`, or have the repository owner turn on GitHub Pages (Settings → Pages → deploy from branch) so `index.html` becomes a live quiz hub.

## Master checklist

### Students

- [ ] **Unit 1 Kinematics**: notes self-tested · practice problems · IXL at 80+ · quiz at 80%+ · lab · unit test
- [ ] **Unit 2 Projectile Motion**: notes self-tested · practice problems · IXL at 80+ · quiz at 80%+ · lab · unit test
- [ ] **Unit 3 Newton's Laws**: notes self-tested · practice problems · IXL at 80+ · quiz at 80%+ · lab · unit test
- [ ] **Unit 4 Momentum**: notes self-tested · practice problems · IXL at 80+ · quiz at 80%+ · egg-drop design · unit test
- [ ] **Unit 5 Work & Energy**: notes self-tested · practice problems · IXL at 80+ · quiz at 80%+ · energy-device design · unit test
- [ ] Semester 1 final

### Instructors

- [ ] Check each unit's learning targets and essential question against what is posted for the class (they were written for this project from the standards and the syllabus)
- [ ] Confirm pacing against the school calendar
- [ ] Give each unit's quiz as a pre-assessment and again as a post-assessment
- [ ] Score labs with the [lab rubric](docs/assessment-and-tracking.md#lab-report-rubric) and design projects with the [design rubric](docs/assessment-and-tracking.md#engineering-design-rubric-units-4-and-5)
- [ ] Record results in the [progress tracker](docs/assessment-and-tracking.md#student-progress-tracker) ([CSV for a whole class](docs/progress-tracker.csv))
- [ ] Reteach and retest any objective below 3 on the proficiency scale

## Assessment and progress tracking

Mastery is judged per learning objective on a 4-point proficiency scale (3 = meets). The scale, the evidence required for each unit, both rubrics, the student tracker and the semester checkpoints are in [Assessment and progress tracking](docs/assessment-and-tracking.md).

## Notes on sources and accuracy

- **Standards** text comes from the California Department of Education's Grades 9–12 Physical Science standards document.
- **IXL skill codes** were read from the live IXL Physics, Grade 8 science and Precalculus pages on 18 November 2026. IXL renumbers skills from time to time, and three skills were listed as new and not yet numbered; check the codes before assigning them.
- **"Most commonly missed"** quiz questions are based on misconceptions that are well documented in physics teaching (for example, that heavier objects fall faster, or that motion requires a force). They are not drawn from this class's own results. Use the pre-quiz to see which ones apply to your students.
- **Calculations** use g = 9.8 m/s². Classes that use 10 m/s² will get slightly different numbers.
- **Semester 2** (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) is not built yet.

## Rebuilding the materials

All unit content lives in `tools/content/u1.js` to `u5.js`. Edit those files, then regenerate the notes, quizzes and unit outlines:

```sh
pip install matplotlib
npm install docx
python3 tools/diagrams.py assets/diagrams
node tools/build.js
```

Do not edit the generated files in `units/` or `index.html` by hand; the next build overwrites them.
