# Physics: Semester 1 Learning Project

A complete study and teaching package for 11th grade physics, first semester: kinematics, projectile motion, Newton's laws, momentum, and work and energy. Learning goals follow the California NGSS ([CDE standards page](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp)), Physics and Earth Science course model.

Each unit has an outline (concepts, objectives, resources, practice problems, real-world links, labs, assessment criteria), a set of Cornell notes, and an interactive quiz on the questions students most often miss.

## Project outline

| # | Unit | Weeks | NGSS focus | Outline | Cornell notes | Quiz |
|---|------|-------|-----------|---------|---------------|------|
| 1 | Kinematics | 1–4 | Foundation for HS-PS2-1 | [Outline](01-kinematics/README.md) | [Notes](01-kinematics/cornell-notes.md) | 8 questions |
| 2 | Projectile Motion | 5–7 | Foundation for HS-PS2-1 | [Outline](02-projectile-motion/README.md) | [Notes](02-projectile-motion/cornell-notes.md) | 8 questions |
| 3 | Newton's Laws | 8–11 | HS-PS2-1 | [Outline](03-newtons-laws/README.md) | [Notes](03-newtons-laws/cornell-notes.md) | 8 questions |
| 4 | Momentum | 12–14 | HS-PS2-2, HS-PS2-3 | [Outline](04-momentum/README.md) | [Notes](04-momentum/cornell-notes.md) | 8 questions |
| 5 | Work & Energy | 15–18 | HS-PS3-1, HS-PS3-2, HS-PS3-3 | [Outline](05-work-energy/README.md) | [Notes](05-work-energy/cornell-notes.md) | 8 questions |

The pacing is a suggestion for an 18-week semester. Adjust it to the class calendar.

**Shared files**

- [Most-missed quizzes](quizzes/index.html) (interactive) and the [answer key](quizzes/answer-key.md)
- [Learning objectives, standards map, and rubrics](assessment/learning-objectives.md)
- [Progress tracker](assessment/progress-tracker.md) for students and instructors

## Student checklist (repeat for every unit)

- [ ] Read the unit outline and tick off the key concepts as you learn them
- [ ] Fill in or study the Cornell notes
- [ ] Self-test: cover the Notes column and answer every cue aloud; mark what you miss
- [ ] Do the IXL skills listed in the notes to SmartScore 80+
- [ ] Work the practice problems, then check the answers at the bottom of the outline
- [ ] Take the most-missed quiz until you score 7 of 8 or better
- [ ] Complete the unit lab report or design project
- [ ] Score yourself on each objective in the progress tracker
- [ ] Self-test again the next day and a few days later

## Instructor checklist

- [ ] Check the learning objectives and essential questions against what is posted in class; they were written for this project from the standards, not copied from a course syllabus
- [ ] Adjust the pacing and choose one lab per unit from the outline's lab table
- [ ] Decide how students reach the quiz (see below)
- [ ] Use the [answer key](quizzes/answer-key.md) to see the misconception behind each question and plan reteaching
- [ ] Score labs and design projects with the [rubrics](assessment/learning-objectives.md#lab-report-rubric)
- [ ] Record class results in the instructor table at the bottom of the [progress tracker](assessment/progress-tracker.md)

## Using the interactive quiz

The quiz is one web page with no install and no account. Scores are saved only in the student's own browser.

- **On one computer:** download the repository (Code → Download ZIP), unzip it, and open `quizzes/index.html` in a browser. Keep `questions.js` in the same folder.
- **For a whole class:** turn on GitHub Pages for this repository (Settings → Pages → deploy from the main branch). The quiz is then at `https://<username>.github.io/physics/quizzes/`.

Each question gives the correct answer, an explanation, and the common trap as soon as the student answers. The results page lists missed questions with their objective IDs and offers a "retry missed questions" round.

To add or change questions, edit `quizzes/questions.js`, then run `node tools/build-answer-key.js` to rebuild the answer key.

## How the pieces fit together

| Need | Where it is |
|------|-------------|
| What to learn | "Key concepts" and "Learning objectives" in each unit outline |
| How to learn it | Cornell notes, learning resources, practice problems |
| Why it matters | "Real-world applications" in each unit outline |
| How to check it | Most-missed quiz, practice-problem answers, self-test cues |
| How progress is judged | [Learning objectives and rubrics](assessment/learning-objectives.md), [progress tracker](assessment/progress-tracker.md) |

## About the content

- **Conventions:** g = 9.8 m/s², air resistance ignored unless stated, force labels F_grav, F_norm, F_frict, F_tens, F_app, F_air.
- **Quiz questions** target misconceptions that physics education research reports again and again (for example, "motion needs a force" and "heavier objects fall faster"). They are not drawn from this class's own test data; swap in items from your own missed-question lists as you collect them.
- **IXL codes** are from the IXL Physics skill list as read in fall 2026. IXL renumbers skills from time to time, so confirm a code on [ixl.com/science/physics](https://www.ixl.com/science/physics) if it does not match.
- **Semester 2** (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) is not built yet. Earth science links in each unit preview those topics.

## Repository layout

```
01-kinematics/          README.md (unit outline), cornell-notes.md
02-projectile-motion/   README.md, cornell-notes.md
03-newtons-laws/        README.md, cornell-notes.md
04-momentum/            README.md, cornell-notes.md
05-work-energy/         README.md, cornell-notes.md
quizzes/                index.html (quiz), questions.js (question bank), answer-key.md
assessment/             learning-objectives.md, progress-tracker.md
tools/                  build-answer-key.js
```
