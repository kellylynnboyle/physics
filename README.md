# 11th Grade Physics — Semester 1 Learning Project

Physics & Earth Science (California NGSS course model). Semester 1: **Kinematics → Projectile Motion → Newton's Laws → Momentum → Work & Energy**. Semester 2 (not covered here): electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics.

## What's in this repo

| Path | Purpose |
|---|---|
| `site/index.html` | **Student-facing interactive app**: Cornell notes, most-missed-questions quizzes, resources, and a saved progress checklist (open in any browser; no install) |
| `docs/01-…05-*.md` | Printable per-topic unit guides (instructor + student) with answer keys |
| `docs/assessment.md` | Assessment criteria, rubric, progress tracker, standards coverage |
| `tools/content/*.py` | Single source of truth for all content |
| `tools/build.py` | Regenerates docs, README table, and `site/data.js` (`python3 tools/build.py`) |

## Pacing overview (≈15 weeks)

| # | Unit | Weeks | NGSS PEs |
|---|---|---|---|
| 1 | [Kinematics](docs/01-kinematics.md) | 3 | HS-PS2-1 |
| 2 | [Projectile Motion](docs/02-projectile.md) | 2 | HS-PS2-1 |
| 3 | [Newton's Laws](docs/03-newton.md) | 4 | HS-PS2-1, HS-PS2-4 |
| 4 | [Momentum](docs/04-momentum.md) | 3 | HS-PS2-2, HS-PS2-3 |
| 5 | [Work & Energy](docs/05-energy.md) | 3 | HS-PS3-1, HS-PS3-2, HS-PS3-3 |

## Project checklist

Each topic: 

1. ☐ Read the key concepts and learning objectives
2. ☐ Complete the Cornell notes (cue column first, summary last)
3. ☐ Take the most-missed-questions quiz; review every explanation; retake until ≥ 80%
4. ☐ Work the practice problems
5. ☐ Explore at least one simulation / resource
6. ☐ Complete the lab or design challenge (CER write-up)
7. ☐ Connect to one real-world application
8. ☐ Self-assess against the rubric; instructor signs off

### 1. Kinematics

- [ ] Distinguish distance/displacement and speed/velocity and compute each.
- [ ] Calculate acceleration from velocity and time data and interpret its sign.
- [ ] Construct and interpret x–t and v–t graphs, including slope and area.
- [ ] Select and apply the constant-acceleration equations to solve multi-step problems.
- [ ] Model free fall with a = 9.8 m/s² and explain why mass does not matter.
- [ ] Quiz ≥ 80%
- [ ] Lab complete

### 2. Projectile Motion

- [ ] Resolve a velocity vector into horizontal and vertical components.
- [ ] Explain independence of horizontal and vertical motion.
- [ ] Solve horizontal-launch and angled-launch problems for time, range, and height.
- [ ] Predict how changing angle or speed changes range, peak, and time of flight.
- [ ] Use a simulation or video to compare a model's prediction to data.
- [ ] Quiz ≥ 80%
- [ ] Lab complete

### 3. Newton's Laws

- [ ] Draw accurate free-body diagrams for objects at rest, at constant velocity, and accelerating.
- [ ] Apply ΣF = ma to one- and two-dimensional problems (including inclines and friction).
- [ ] Identify third-law pairs and explain why they don't cancel.
- [ ] Distinguish mass, weight, and normal force.
- [ ] Use experimental data to show a ∝ F and a ∝ 1/m (HS-PS2-1).
- [ ] Use F = Gm₁m₂/r² to predict how gravitational force changes with mass and distance (HS-PS2-4).
- [ ] Quiz ≥ 80%
- [ ] Lab complete

### 4. Momentum

- [ ] Calculate momentum and impulse and relate them to force and time.
- [ ] Explain how increasing collision time reduces force and apply the idea to design a protective device (HS-PS2-3).
- [ ] Use conservation of momentum to solve 1-D collision and explosion problems (HS-PS2-2).
- [ ] Classify collisions as elastic or inelastic and compare kinetic energy before and after.
- [ ] Define a system so that net external force is zero.
- [ ] Quiz ≥ 80%
- [ ] Lab complete

### 5. Work & Energy

- [ ] Calculate work for forces parallel and at an angle to displacement.
- [ ] Calculate KE, gravitational PE, and elastic PE and interpret energy bar charts.
- [ ] Apply the work–energy theorem and conservation of energy to solve problems (HS-PS3-1, HS-PS3-2).
- [ ] Account for dissipated energy and calculate power and efficiency.
- [ ] Design, test, and refine an energy-conversion device against constraints (HS-PS3-3).
- [ ] Quiz ≥ 80%
- [ ] Lab complete

## For instructors

- Standards were drafted from the California NGSS HS-PS2 and HS-PS3 performance expectations; **verify wording against** <https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp> before publishing.
- Kinematics and projectile motion are not standalone NGSS PEs; they build the mathematics needed for HS-PS2-1.
- Quiz items target commonly missed concepts and list the misconception each distractor exposes; use results to plan reteaching.
- Progress in the web app is stored locally in the student's browser (not sent anywhere); students can export it as text for submission.
- Edit content in `tools/content/`, then run `python3 tools/build.py`.

Open the app: `site/index.html` (or host the `site/` folder with GitHub Pages).
