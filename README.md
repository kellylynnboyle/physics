# Physics & Earth Science: Semester 1 Learning Project

11th grade (California NGSS Physics & Earth Science course model). Standards-aligned learning project covering Kinematics, Projectile Motion, Newton's Laws, Momentum, and Work & Energy.

## What's inside

| Path | Purpose |
|---|---|
| `site/index.html` | Interactive student site: Cornell notes, shuffled quizzes of commonly missed questions, practice with hidden answers, and a progress tracker. Open the file in any browser; no server or install needed. |
| `docs/standards.md` | NGSS performance expectations, unit map, pacing |
| `docs/unit-*.md` | One printable outline per unit: objectives, concepts, Cornell notes, quiz, practice, resources, applications, assessment |
| `docs/assessment.md` | Rubric, mastery criteria, grade weighting, tracker |
| `tools/content.py`, `tools/build.py` | Source content and generator. Edit `content.py`, then run `python3 tools/build.py` |

## Project checklist

### Setup
- [x] Project structure with five unit sections
- [x] NGSS standards mapped to units ([docs/standards.md](docs/standards.md))
- [x] Assessment rubric and mastery criteria ([docs/assessment.md](docs/assessment.md))
- [x] Interactive site with quizzes and progress tracker

### Unit 1: [Kinematics](docs/unit-1-kinematics.md) (3 weeks; HS-PS2-1)
*How can we describe and predict motion using words, graphs, and equations?*

- [ ] Learning objectives reviewed
- [ ] Key concepts and formulas studied
- [ ] Cornell notes completed
- [ ] Quiz (10 most-missed questions) scored 80%+
- [ ] Practice set (6 problems) completed
- [ ] Lab / investigation completed
- [ ] Performance task: Prediction lab: use a v-t graph from a motion detector to predict stopping distance, then verify.

### Unit 2: [Projectile Motion](docs/unit-2-projectile-motion.md) (2 weeks; HS-PS2-1)
*How can we predict where a thrown or launched object will land?*

- [ ] Learning objectives reviewed
- [ ] Key concepts and formulas studied
- [ ] Cornell notes completed
- [ ] Quiz (10 most-missed questions) scored 80%+
- [ ] Practice set (6 problems) completed
- [ ] Lab / investigation completed
- [ ] Performance task: Launch challenge: hit a target landing spot using only measured v₀ and calculations.

### Unit 3: [Newton's Laws](docs/unit-3-newtons-laws.md) (4 weeks; HS-PS2-1)
*How do forces change the motion of objects?*

- [ ] Learning objectives reviewed
- [ ] Key concepts and formulas studied
- [ ] Cornell notes completed
- [ ] Quiz (10 most-missed questions) scored 80%+
- [ ] Practice set (6 problems) completed
- [ ] Lab / investigation completed
- [ ] Performance task: HS-PS2-1 lab report: analyze a vs. F and a vs. m data, write a CER supporting ΣF = ma.

### Unit 4: [Momentum](docs/unit-4-momentum.md) (3 weeks; HS-PS2-2, HS-PS2-3)
*How can we predict the outcome of a collision, and how do we make collisions safer?*

- [ ] Learning objectives reviewed
- [ ] Key concepts and formulas studied
- [ ] Cornell notes completed
- [ ] Quiz (10 most-missed questions) scored 80%+
- [ ] Practice set (6 problems) completed
- [ ] Lab / investigation completed
- [ ] Performance task: HS-PS2-3 engineering design: build and refine a device to protect an egg or sensor in a collision, with F-t evidence.

### Unit 5: [Work & Energy](docs/unit-5-work-energy.md) (4 weeks; HS-PS3-1, HS-PS3-2, HS-PS3-3)
*How is energy transferred and transformed, and why is the total always conserved?*

- [ ] Learning objectives reviewed
- [ ] Key concepts and formulas studied
- [ ] Cornell notes completed
- [ ] Quiz (10 most-missed questions) scored 80%+
- [ ] Practice set (6 problems) completed
- [ ] Lab / investigation completed
- [ ] Performance task: HS-PS3-1/3 model and device: spreadsheet energy model plus a device converting energy, with efficiency analysis.

## Using the project

**Students:** open `site/index.html`, pick a unit, work Cornell notes -> quiz -> practice, and check off objectives in the Progress tab.
**Instructors:** print or share the `docs/` files; use `docs/assessment.md` for scoring. Edit `tools/content.py` to add questions, then rebuild.

## Notes

- Standards text is quoted from memory of the NGSS HS-PS2/PS3 performance expectations; the CDE site was not reachable when this was generated, so verify wording against the official page.
- Use g = 9.8 m/s² throughout.
- The 'most missed' questions target well-documented student misconceptions; they are not yet based on your class's data.
