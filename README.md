# Physics 11 — Semester 1 Core Mechanics Learning Project

A self-contained learning project for 11th grade Physics, covering the first-semester mechanics sequence: **Kinematics, Projectile Motion, Newton's Laws, Momentum, and Work & Energy.** Built around the California NGSS Physics & Earth Science course model, with lab experience, real-world connections, and a theoretical framework woven through each unit.

> **Course context:** This project covers Semester 1 (mechanics). Semester 2 of the full course model (electricity, magnetism, waves, light, plate tectonics, earthquakes, and nuclear physics) is noted in the [roadmap](#semester-2-roadmap-not-yet-built) below for future expansion using this same template.
>
> **Standards reference:** California NGSS — see the CDE standards page: https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp . Primary standards addressed here: **HS-PS2** (Motion and Stability: Forces and Interactions) and **HS-PS3** (Energy).

## How This Project Is Organized

Each unit folder is self-contained and follows the same structure:

```
0X-Unit-Name/
├── README.md            ← key concepts, resources, practice problems, applications, objectives, rubric
├── cornell-notes.md      ← printable/fillable Cornell notes template for the unit
└── quiz/index.html       ← offline, self-grading interactive quiz of the most commonly missed questions
```

Shared quiz styling/engine lives in [`assets/`](./assets) and is reused by every unit — open any `quiz/index.html` directly in a browser (double-click the file; no internet or server required).

## Semester 1 Unit Checklist

| # | Unit | Key Concepts | Notes | Quiz | Status |
|---|------|--------------|:---:|:---:|:---:|
| 1 | [Kinematics](./01-Kinematics/README.md) | Displacement, velocity, acceleration, motion graphs, kinematic equations, free fall | [✓](./01-Kinematics/cornell-notes.md) | [✓](./01-Kinematics/quiz/index.html) | ✅ Ready |
| 2 | [Projectile Motion](./02-Projectile-Motion/README.md) | Independence of x/y motion, velocity components, range, max height, symmetry | [✓](./02-Projectile-Motion/cornell-notes.md) | [✓](./02-Projectile-Motion/quiz/index.html) | ✅ Ready |
| 3 | [Newton's Laws](./03-Newtons-Laws/README.md) | 1st/2nd/3rd Laws, free body diagrams, friction, normal force, equilibrium | [✓](./03-Newtons-Laws/cornell-notes.md) | [✓](./03-Newtons-Laws/quiz/index.html) | ✅ Ready |
| 4 | [Momentum](./04-Momentum/README.md) | Momentum, impulse, conservation of momentum, elastic/inelastic collisions | [✓](./04-Momentum/cornell-notes.md) | [✓](./04-Momentum/quiz/index.html) | ✅ Ready |
| 5 | [Work & Energy](./05-Work-and-Energy/README.md) | Work, KE, gravitational/elastic PE, conservation of energy, power | [✓](./05-Work-and-Energy/cornell-notes.md) | [✓](./05-Work-and-Energy/quiz/index.html) | ✅ Ready |

**Suggested total pacing:** ~9.5 weeks (fits comfortably within a standard 18-week semester, leaving room for labs, review days, and a midterm/final assessment window).

## Suggested Sequence & Dependencies

```
1. Kinematics  →  2. Projectile Motion  →  3. Newton's Laws  →  4. Momentum  →  5. Work & Energy
   (foundation)     (applies kinematics       (introduces          (applies       (synthesizes
                      in 2 dimensions)          force/mass)          F=ma over      all prior units)
                                                                       time)
```

Each unit builds on the one before it — Projectile Motion requires fluency with the kinematic equations, Momentum requires Newton's 2nd/3rd Laws, and Work & Energy serves as the semester's capstone/synthesis unit.

## For Instructors

- **Assessment tracking:** each unit README includes a 4-level rubric (Exceeds / Meets / Approaching / Beginning) tied to that unit's learning objectives — use these as-is or adapt into a gradebook rubric.
- **Quiz data:** the interactive quizzes save score history to the browser's local storage per device (key names like `kinematics-quiz-history`) so students can track their own retake progress; this data stays on the student's device and is not collected or transmitted anywhere.
- **Labs:** each unit README suggests at least one hands-on or simulation-based lab (e.g., PhET simulations, cart/ramp labs) to pair with the written content — these are suggestions to adapt to available equipment, not scripted lab handouts.
- **Differentiation:** practice problems in each unit are sequenced easy → hard; the last 1–2 problems in each set are "challenge" tier for advanced students.

## For Students

1. Read the unit README for key concepts and vocabulary.
2. Fill out the Cornell notes page during class or while reading.
3. Work through the practice problems.
4. Take the interactive quiz — pay special attention to the "⚠ Commonly missed" tags, which flag the exact misconceptions past students have struggled with.
5. Review your missed-concept report at the end of the quiz, then retake it.

## Semester 2 Roadmap (not yet built)

The full-year course model also covers: **Electricity, Magnetism, Waves, Light, Plate Tectonics, Earthquakes, and Nuclear Physics** (aligned to additional HS-PS3, HS-PS4, and HS-ESS standards). These units can be added as `06-Electricity`, `07-Magnetism`, etc., following the exact same folder template (README + Cornell notes + interactive quiz) established in this project.

## License

See [`LICENSE`](./LICENSE).
