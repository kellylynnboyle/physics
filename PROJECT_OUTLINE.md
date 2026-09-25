# 11th Grade Physics — Semester 1 Project Outline & Checklist

**Course model:** Physics & Earth Science (two-semester). Semester 1 covers Kinematics,
Projectile Motion, Newton's Laws, Momentum, and Work & Energy. Semester 2 (electricity,
magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) is out of scope
for this project and can be added as `units/06-...` onward using the same template.

**Standards:** California Next Generation Science Standards (NGSS), high school physical
science — see the [CDE NGSS page](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp).
NGSS performance expectations (PEs) are written at the level of forces, momentum, and
energy; kinematics and projectile motion are the foundational math/graphing skills CA
physics courses teach first so that students can meet those PEs (traditionally CA
Physics Content Standards 1a–1e). Each unit below states the PE(s) it builds toward.

Shareable with students and instructors — check items off as a class or individually.

## How this repo is organized

```
physics/
  PROJECT_OUTLINE.md          <- this file: the master checklist
  units/
    01-kinematics/
      README.md                <- concepts, Cornell notes, resources, objectives, assessment
      quiz.html                <- interactive quiz of the most commonly missed questions
    02-projectile-motion/
    03-newtons-laws/
    04-momentum/
    05-work-energy/
  assets/
    quiz.css, quiz.js           <- shared styling/engine for every quiz.html
```

Open any `quiz.html` directly in a browser (no server needed) — it self-grades and
shows an explanation for every question. Scores are stored only in that browser's
local storage, per device, so students can retake and try to beat their own best.

## Unit sequence & standards map

| # | Unit | Builds toward | Est. class time |
|---|------|----------------|------------------|
| 1 | [Kinematics](units/01-kinematics/README.md) | Foundational (CA 1a–1c); prerequisite for HS-PS2-1 | 1.5–2 weeks |
| 2 | [Projectile Motion](units/02-projectile-motion/README.md) | Foundational (CA 1d–1e); prerequisite for HS-PS2-1 | 1–1.5 weeks |
| 3 | [Newton's Laws](units/03-newtons-laws/README.md) | HS-PS2-1 | 1.5–2 weeks |
| 4 | [Momentum](units/04-momentum/README.md) | HS-PS2-2, HS-PS2-3 | 1.5 weeks |
| 5 | [Work & Energy](units/05-work-energy/README.md) | HS-PS3-1, HS-PS3-2, HS-PS3-3 | 2 weeks |

## Semester 1 project checklist

### Setup
- [ ] Students can access this repo (or a printed/LMS mirror of each unit's README)
- [ ] Lab safety agreement signed (required before any hands-on lab)
- [ ] Graphing calculator or spreadsheet access confirmed for data analysis
- [ ] Diagnostic pre-test given (see each unit's "most-missed" quiz used as a pre-assessment)

### Per-unit cycle (repeat for each of the 5 units)
- [ ] Introduce essential question + vocabulary (unit README, "Overview")
- [ ] Direct instruction / guided notes using the Cornell notes table
- [ ] Practice problem set completed (unit README, "Practice Problems")
- [ ] Lab or simulation activity completed (unit README, "Learning Resources")
- [ ] Interactive quiz (`quiz.html`) taken at least twice — once before review, once after
- [ ] Real-world application discussion or mini-project (unit README, "Real-World Applications")
- [ ] Formative check against the unit's learning objectives
- [ ] Summative assessment scored against the unit's assessment criteria rubric

### End of semester
- [ ] All 5 unit quizzes completed with a passing score (instructor sets threshold, suggested 80%)
- [ ] Cumulative problem set spanning all 5 units (mixed review)
- [ ] Portfolio of Cornell notes complete for all 5 units
- [ ] Semester 1 summative exam
- [ ] Student self-assessment against learning objectives (see below)

## Tracking progress

Use this simple rubric per unit (instructors: copy this table into a gradebook or LMS).

| Unit | Notes complete | Practice set | Lab/sim | Quiz ≥ 80% | Summative score |
|------|:---:|:---:|:---:|:---:|:---:|
| 1. Kinematics | ☐ | ☐ | ☐ | ☐ | ___ / 100 |
| 2. Projectile Motion | ☐ | ☐ | ☐ | ☐ | ___ / 100 |
| 3. Newton's Laws | ☐ | ☐ | ☐ | ☐ | ___ / 100 |
| 4. Momentum | ☐ | ☐ | ☐ | ☐ | ___ / 100 |
| 5. Work & Energy | ☐ | ☐ | ☐ | ☐ | ___ / 100 |

## Learning objectives (semester-level)

By the end of Semester 1, students will be able to:
1. Represent and interpret 1D and 2D motion using position, velocity, and acceleration
   graphically, numerically, and algebraically.
2. Decompose 2D projectile motion into independent horizontal and vertical components.
3. Apply Newton's three laws to predict and explain the motion of objects under
   multiple simultaneous forces, including friction and normal force.
4. Apply conservation of momentum to analyze elastic, inelastic, and explosive
   interactions between objects.
5. Apply the work-energy theorem and conservation of mechanical energy to analyze
   systems, including cases with non-conservative forces (friction, air resistance).
6. Design, carry out, and analyze a lab investigation that generates and interprets
   quantitative motion, force, momentum, or energy data (NGSS Science & Engineering
   Practices: planning investigations, analyzing data, using mathematics).
7. Communicate physics reasoning using correct vocabulary, units, and vector notation.

## Assessment criteria (semester-level rubric)

| Level | Description |
|-------|-------------|
| Exceeds (90–100%) | Solves multi-step, multi-concept problems; justifies reasoning with correct physics vocabulary and units; connects concepts across units. |
| Meets (80–89%) | Solves standard problems correctly using the right equations and units; explains reasoning with minor gaps. |
| Approaching (65–79%) | Sets up problems correctly but makes computational or conceptual errors; needs support connecting concept to equation. |
| Beginning (<65%) | Cannot reliably identify the relevant concept or equation without significant support. |

Each unit README restates this rubric with unit-specific descriptors under
"Assessment Criteria."
