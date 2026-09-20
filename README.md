# Physics of the Universe — 11th Grade Physics & Earth Science

A full-year, lab-based course integrating **physics and Earth/space
science**, built around the California NGSS **"Physics of the Universe"**
course model. It combines hands-on lab experience, real-world
connections, and the theoretical framework needed to meet the [Next
Generation Science Standards for California](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp)
— see [`NGSS-ALIGNMENT.md`](NGSS-ALIGNMENT.md) for the full standards
crosswalk. **The NGSS performance expectations are this course's learning
goals**, not an afterthought: every unit below is built to prepare
students to demonstrate a specific, named standard.

It's built for two audiences at once:

- **Students** — a study path with notes, self-grading quizzes, and practice
  problems for each unit.
- **Instructors** — a ready-made unit outline with objectives, vocabulary,
  NGSS-aligned assessment criteria, and lab/real-world connections that map
  cleanly onto a gradebook.

## Course structure

| Semester | Topics | Status |
|---|---|---|
| **1 — Mechanics** | Kinematics, Projectile Motion, Newton's Laws, Momentum, Work & Energy | ✅ Full content built (notes, quizzes, resources) |
| **2 — Electricity, Magnetism, Waves, Light & Earth Science** | Electricity, Magnetism, Waves, Light, Plate Tectonics, Earthquakes, Nuclear Physics | 🚧 Outline built ([units below](#semester-2--electricity-magnetism-waves-light--earth-science-outline)); full lesson content in progress |
| **[Unit P.2 — Energy, Forces, & Earth's Crust](unit-p2-energy-forces-earths-crust/)** *(real coursework)* | OpenSciEd HS Physics, Lessons 4–10: particle-level force/energy models, seismic waves, convection, radioactive decay, age of rocks, rock density, plate boundaries | ✅ Full content built — real class materials (Lessons 4–7) + newly built study guides (Lessons 8–10, Unit 2 test prep) |

## How the project is organized

```
physics/
├── README.md                  ← you are here: master outline + checklist
├── NGSS-ALIGNMENT.md          ← full NGSS standards crosswalk (learning goals)
├── 01-kinematics/              ─┐
├── 02-projectile-motion/        │
├── 03-newtons-laws/             ├─ Semester 1: Mechanics
├── 04-momentum/                 │
├── 05-work-energy/             ─┘
├── 06-electricity/             ─┐
├── 07-magnetism/                │
├── 08-waves/                    │
├── 09-light/                    ├─ Semester 2: E&M, Waves, Light, Earth Science
├── 10-plate-tectonics/          │
├── 11-earthquakes/              │
├── 12-nuclear-physics/         ─┘
└── unit-p2-energy-forces-earths-crust/  ← real coursework (see note below)
```

Each **semester 1** unit folder follows the same four-file pattern (semester
2 units currently have the `README.md` outline only — see the status note
in each folder):

| File | Purpose |
|---|---|
| `README.md` | Unit overview: concepts, vocabulary, learning objectives, assessment criteria |
| `cornell-notes.md` | Cornell-format notes (cues / notes / summary) ready to print or copy |
| `quiz.html` | Open in any browser — a self-grading quiz built from the questions students miss most often, with explanations |
| `resources.md` | Curated external resources, practice problem sets, and real-world applications |

No installation or build step is required. `quiz.html` files are plain
HTML/CSS/JavaScript — double-click to open, or serve the folder with any
static file server (e.g. GitHub Pages).

> **[`unit-p2-energy-forces-earths-crust/`](unit-p2-energy-forces-earths-crust/) is different from the rest of this repo.** Everything above is a generic, standards-based curriculum built for any 11th-grade physics student. That folder is one real student's actual OpenSciEd HS Physics class — real slides, handouts, and teacher notes, organized by the class's own lesson numbers and Matter-Energy-Force framework rather than this repo's topic outline. See its own README for details.

## Semester 1 — Mechanics: unit sequence and suggested pacing

Designed for a ~5–6 week block within a semester; adjust to your school's
calendar. Each unit assumes roughly 5 class days: 1–2 days direct
instruction/notes, 1–2 days practice + labs, 1 day quiz/assessment.

| # | Unit | Suggested days | Prerequisite skills | Primary NGSS PE(s) |
|---|---|---|---|---|
| 1 | [Kinematics](01-kinematics/) | 5 | Algebra I (linear equations, graphing lines), basic trig ratios | Prerequisite skills for HS-PS2-1 |
| 2 | [Projectile Motion](02-projectile-motion/) | 4 | Unit 1 complete; right-triangle trig (SOH-CAH-TOA) | Prerequisite skills for HS-PS2-1 |
| 3 | [Newton's Laws](03-newtons-laws/) | 6 | Units 1–2; vector addition | HS-PS2-1 |
| 4 | [Momentum](04-momentum/) | 4 | Unit 3 complete | HS-PS2-2, HS-PS2-3 |
| 5 | [Work & Energy](05-work-energy/) | 5 | Units 1–3; dot-product idea of "force along displacement" (no calculus needed) | HS-PS3-1, HS-PS3-2 |

Total: ~24 class days. Full standard text and assessment boundaries: [`NGSS-ALIGNMENT.md`](NGSS-ALIGNMENT.md).

## Semester 2 — Electricity, Magnetism, Waves, Light & Earth Science (outline)

Semester 2 follows the same "Physics of the Universe" NGSS instructional
segments, extended into electromagnetism, waves/light, and Earth &
space science. Each unit folder currently has a `README.md` outline
(concepts, vocabulary, objectives, NGSS PEs); Cornell notes, an
interactive quiz, and a resources page are being built out next, following
the same four-file pattern as semester 1.

| # | Unit | Ties to semester 1 | Primary NGSS PE(s) |
|---|---|---|---|
| 6 | [Electricity](06-electricity/) | Newton's Laws (force framework extends to Coulomb's Law) | HS-PS2-4, HS-PS2-6 |
| 7 | [Magnetism](07-magnetism/) | Electricity (unit 6); Work & Energy (field energy) | HS-PS2-5, HS-PS3-5 |
| 8 | [Waves](08-waves/) | Kinematics (periodic motion, graphing) | HS-PS4-1, HS-PS4-3 |
| 9 | [Light](09-light/) | Waves (unit 8) | HS-PS4-2, HS-PS4-4, HS-PS4-5 |
| 10 | [Plate Tectonics](10-plate-tectonics/) | Newton's Laws/Momentum (collision framework applied to Earth's crust) | HS-ESS2-1, HS-ESS1-5 |
| 11 | [Earthquakes](11-earthquakes/) | Waves (unit 8); Plate Tectonics (unit 10) | HS-ESS2-1, HS-PS4-1 |
| 12 | [Nuclear Physics](12-nuclear-physics/) | Work & Energy (energy conservation/transformation) | HS-PS1-8, HS-ESS1-1, HS-ESS1-6 |

See [`NGSS-ALIGNMENT.md`](NGSS-ALIGNMENT.md) for full PE text, clarification statements, and assessment boundaries for every unit in both semesters.

## Semester 1 learning objectives

By the end of semester 1 (Mechanics), students should be able to:

1. Distinguish and correctly use scalar vs. vector quantities (distance/displacement, speed/velocity) across all five units.
2. Select and apply the correct equation(s) for a given kinematics, dynamics, momentum, or energy scenario, and justify the choice.
3. Draw and interpret motion graphs (position–time, velocity–time, acceleration–time) and free-body diagrams.
4. Set up and solve 1D and 2D (projectile) motion problems with correct units and significant figures.
5. Apply Newton's three laws to static and dynamic force problems, including friction and inclined planes.
6. Apply conservation of momentum to collision and explosion problems, and classify collisions as elastic, inelastic, or perfectly inelastic.
7. Apply the work-energy theorem and conservation of mechanical energy, including cases with non-conservative forces (friction).
8. Connect each concept to at least one real-world application and explain the physics in plain language (communication/transfer, not just calculation).

## Semester 1 student checklist

Print this section or copy it into a planner/LMS. Check off each item as it's completed. (A matching semester 2 checklist will be added once each unit's full content is built.)

### Unit 1 — Kinematics
- [ ] Read unit README and Cornell notes
- [ ] Complete practice problem set
- [ ] Score 80%+ on `quiz.html` (retake until you hit the target)
- [ ] Identify 1 real-world example and explain it in 2–3 sentences
- [ ] Unit assessment

### Unit 2 — Projectile Motion
- [ ] Read unit README and Cornell notes
- [ ] Complete practice problem set
- [ ] Score 80%+ on `quiz.html`
- [ ] Identify 1 real-world example and explain it in 2–3 sentences
- [ ] Unit assessment

### Unit 3 — Newton's Laws
- [ ] Read unit README and Cornell notes
- [ ] Complete practice problem set
- [ ] Score 80%+ on `quiz.html`
- [ ] Free-body diagram lab or worksheet
- [ ] Unit assessment

### Unit 4 — Momentum
- [ ] Read unit README and Cornell notes
- [ ] Complete practice problem set
- [ ] Score 80%+ on `quiz.html`
- [ ] Identify 1 real-world example and explain it in 2–3 sentences
- [ ] Unit assessment

### Unit 5 — Work & Energy
- [ ] Read unit README and Cornell notes
- [ ] Complete practice problem set
- [ ] Score 80%+ on `quiz.html`
- [ ] Identify 1 real-world example and explain it in 2–3 sentences
- [ ] Cumulative review (Units 1–5)
- [ ] Final assessment / project

## Assessment framework (for instructors)

Each unit's `README.md` includes unit-specific assessment criteria, tied to
its NGSS performance expectation(s) — see [`NGSS-ALIGNMENT.md`](NGSS-ALIGNMENT.md).
For semester 1, grades can be built from:

| Component | Suggested weight | Notes |
|---|---|---|
| Formative: `quiz.html` scores | 10% | Low-stakes, retakeable; tracks the misconception-focused questions |
| Practice problem sets | 15% | Completion + spot-checked accuracy |
| Cornell notes / vocabulary check | 10% | Completion and quality (cue questions answered, summary written) |
| Unit assessments (5) | 50% | Summative; one per unit, mix of conceptual (Newton's-laws-style "explain why") and quantitative problems |
| Real-world application write-ups | 5% | 2–3 sentence transfer tasks, one per unit |
| Cumulative final assessment | 10% | Covers all 5 units; emphasizes the cross-unit skills in "Semester 1 learning objectives" above |

### General rubric for conceptual/short-answer questions

| Level | Description |
|---|---|
| 4 — Exemplary | Correct answer, correct physics vocabulary, explains *why* using a principle (e.g., Newton's 2nd law, conservation of momentum) |
| 3 — Proficient | Correct answer with mostly correct reasoning; minor vocabulary or clarity issues |
| 2 — Developing | Partially correct; right idea but a conceptual error (e.g., confusing mass and weight) |
| 1 — Beginning | Incorrect or missing reasoning; restates the question without physics content |

## Recurring "most-missed" theme across units

The `quiz.html` files were built around the misconceptions physics teachers
report most often at this level. A few show up in more than one unit — call
these out explicitly when reviewing:

- **Vectors need a direction, always.** Velocity, acceleration, force, and
  momentum are vectors; sign (+/–) encodes direction, not "good" or "bad"/"fast or slow."
- **Constant velocity needs zero *net* force, not zero force.** (Newton's 1st law, revisited in Work & Energy.)
- **"Opposite" doesn't mean "cancels."** Newton's 3rd law pairs act on *different* objects, so they never cancel each other out.
- **Not all conserved-quantity problems are the same.** Momentum is conserved in *all* collisions (no external net force); kinetic energy is only conserved in *elastic* collisions. Mixing these up is the single most common Unit 4 error, and it echoes back into Unit 5.

## Tech notes

- `quiz.html` files are dependency-free (no internet connection or CDN required) and store no data outside the browser tab — refreshing resets the quiz. They're safe to host on GitHub Pages, a school LMS file upload, or a shared drive.
- All notes and resource files are plain Markdown for easy printing, LMS import, or conversion to Google Docs.
