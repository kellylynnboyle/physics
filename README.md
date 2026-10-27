# Physics & Earth Science — Semester 1 Learning Project (Grade 11)

A shareable project outline, Cornell notes, interactive quizzes, and tracking tools for the mechanics half of the course (kinematics, projectile motion, Newton's laws, momentum, work & energy). Learning goals come from the [California NGSS standards](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp) (Physics & Earth Science course model).

## How to use this project

- **Students:** open `site/index.html` in any browser (no install). Study the Cornell notes, take the quizzes, and tick off objectives; progress saves in your browser.
- **Instructors:** each `units/*.md` file is a printable unit plan with objectives, notes, resources, practice with answers, labs, and a rubric. See `docs/assessment.md` for tracking.
- **Edit content:** change `data/units.json`, then run `python3 tools/build.py` to regenerate the unit pages and the site data.

## Project structure

```
physics/
├── README.md              # this outline / checklist
├── data/units.json        # single source of content
├── units/                 # generated unit plans (one per topic)
├── docs/assessment.md     # objectives-to-standards map, rubric, tracker
├── site/                  # interactive notes + quizzes + progress tracker
└── tools/build.py         # generator
```

## Semester 1 sequence and checklist

| # | Unit | NGSS focus | Plan |
|---|---|---|---|
| 1 | Kinematics | HS-PS2-1 | [units/01-kinematics.md](units/01-kinematics.md) |
| 2 | Projectile Motion | HS-PS2-1 | [units/02-projectile.md](units/02-projectile.md) |
| 3 | Newton's Laws of Motion | HS-PS2-1 | [units/03-newton.md](units/03-newton.md) |
| 4 | Momentum and Impulse | HS-PS2-2, HS-PS2-3 | [units/04-momentum.md](units/04-momentum.md) |
| 5 | Work and Energy | HS-PS3-1, HS-PS3-2, HS-PS3-3 | [units/05-energy.md](units/05-energy.md) |

> Kinematics and projectile motion build the mathematical foundation for HS-PS2-1; they are assessed through that standard.

### Unit 1: Kinematics

**Objectives**

- [ ] Distinguish distance/displacement and speed/velocity, and identify which are vectors.
- [ ] Calculate average velocity and acceleration from data, tables, and graphs.
- [ ] Interpret position–time and velocity–time graphs (slope and area).
- [ ] Apply the constant-acceleration equations to solve one-dimensional problems, including free fall (g = 9.8 m/s²).
- [ ] Use sign conventions to describe direction of velocity and acceleration.

**Unit tasks**

- [ ] Complete Cornell notes (cues + summary)
- [ ] Finish practice problems and check answers
- [ ] Lab: Motion-detector or smartphone-video lab
- [ ] Interactive quiz ≥ 80% (twice)
- [ ] Unit assessment at Proficient or above

### Unit 2: Projectile Motion

**Objectives**

- [ ] Resolve a velocity vector into horizontal and vertical components.
- [ ] Explain why horizontal and vertical motion are independent for a projectile.
- [ ] Calculate time of flight, maximum height, and range for horizontal and angled launches.
- [ ] Predict how launch angle and speed change a trajectory; recognize that 45° gives maximum range on level ground.
- [ ] Evaluate a computational (spreadsheet or simulation) model of a projectile against measured data.

**Unit tasks**

- [ ] Complete Cornell notes (cues + summary)
- [ ] Finish practice problems and check answers
- [ ] Lab: Launcher lab
- [ ] Interactive quiz ≥ 80% (twice)
- [ ] Unit assessment at Proficient or above

### Unit 3: Newton's Laws of Motion

**Objectives**

- [ ] State Newton's three laws and give examples of each.
- [ ] Draw free-body diagrams and determine net force along each axis.
- [ ] Use ΣF = ma to solve problems with multiple forces, including friction and inclines.
- [ ] Distinguish mass from weight and explain normal force and apparent weight.
- [ ] Analyze experimental data (force vs. acceleration, mass vs. acceleration) to support the claim that a = F_net/m.
- [ ] Identify third-law force pairs and explain why they never cancel.

**Unit tasks**

- [ ] Complete Cornell notes (cues + summary)
- [ ] Finish practice problems and check answers
- [ ] Lab: Atwood or cart-and-hanging-mass lab
- [ ] Interactive quiz ≥ 80% (twice)
- [ ] Unit assessment at Proficient or above

### Unit 4: Momentum and Impulse

**Objectives**

- [ ] Calculate momentum (p = mv) and recognize it as a vector.
- [ ] Relate impulse to change in momentum (FΔt = Δp) and interpret force–time graphs.
- [ ] Apply conservation of momentum to elastic, inelastic, and explosion/recoil problems.
- [ ] Classify collisions by whether kinetic energy is conserved.
- [ ] Design and evaluate a device that reduces collision force by increasing contact time (HS-PS2-3).

**Unit tasks**

- [ ] Complete Cornell notes (cues + summary)
- [ ] Finish practice problems and check answers
- [ ] Lab: Egg-drop / crumple-zone design challenge (HS-PS2-3)
- [ ] Interactive quiz ≥ 80% (twice)
- [ ] Unit assessment at Proficient or above

### Unit 5: Work and Energy

**Objectives**

- [ ] Calculate work (W = Fd cosθ) and power (P = W/t).
- [ ] Calculate kinetic energy, gravitational potential energy, and elastic potential energy.
- [ ] Apply the work–energy theorem and conservation of mechanical energy.
- [ ] Account for energy transformations and dissipation (thermal energy) using system models.
- [ ] Build a computational model (spreadsheet/simulation) tracking energy in a system (HS-PS3-1).
- [ ] Design a device that converts one form of energy to another within constraints (HS-PS3-3).

**Unit tasks**

- [ ] Complete Cornell notes (cues + summary)
- [ ] Finish practice problems and check answers
- [ ] Lab: Energy skate-park and ramp-and-cart lab
- [ ] Interactive quiz ≥ 80% (twice)
- [ ] Unit assessment at Proficient or above

## Semester 2 preview (not built yet)

Electricity, magnetism, waves, light, plate tectonics, earthquakes, and nuclear physics. The same `data/units.json` structure can be extended with new units.

## Verify standards

Standard wording is paraphrased from NGSS performance expectations. Confirm against the CDE page linked above before publishing to a class.
