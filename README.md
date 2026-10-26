# Physics & Earth Science — Semester 1: Mechanics

11th grade (California NGSS Physics & Earth Science course model). A shareable learning project for students and instructors.

## Open the interactive site

Open `site/index.html` in any browser (no install or server needed). It has Cornell notes with a self-test mode, interactive quizzes with instant feedback, practice problems with answers, resources, and a progress tracker saved in the browser.

Or serve it locally: `npx serve site` (or `python3 -m http.server -d site`).

## Course roadmap (Semester 1)

- [ ] [Unit 1: Kinematics](docs/units/01-kinematics.md)
- [ ] [Unit 2: Projectile Motion](docs/units/02-projectile.md)
- [ ] [Unit 3: Newton's Laws](docs/units/03-newton.md)
- [ ] [Unit 4: Momentum](docs/units/04-momentum.md)
- [ ] [Unit 5: Work & Energy](docs/units/05-energy.md)

Semester 2 (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) follows the same structure; copy a unit object in `site/js/data.js` to add one.

## Unit 1: Kinematics

**Standards:** HS-PS2-1  
**Details:** [Full unit page](docs/units/01-kinematics.md)

**Learning objectives**

- [ ] Distinguish distance from displacement and speed from velocity, and give the sign (direction) of a vector quantity.
- [ ] Define acceleration as the rate of change of velocity and predict whether an object speeds up or slows down from the signs of v and a.
- [ ] Read and sketch position-time, velocity-time and acceleration-time graphs; use slope and area correctly.
- [ ] Select and apply the constant-acceleration equations to solve multi-step problems with units.
- [ ] Model free fall with a = 9.8 m/s² downward and explain why mass does not change fall time (no air resistance).
- [ ] Collect motion data (motion sensor or video analysis) and use it to support a claim about constant velocity or constant acceleration.

**Key concepts:** Scalar vs. vector; Displacement (Δx); Velocity (v); Acceleration (a); Free fall; Reference frame & sign convention

**Deliverables**

- [ ] Cornell notes complete
- [ ] Quiz of most-missed questions ≥ 80% (8 questions)
- [ ] Practice problems (5)
- [ ] Lab / performance task: Cart on a ramp (or Moving Man data)

## Unit 2: Projectile Motion

**Standards:** HS-PS2-1, HS-PS3-2  
**Details:** [Full unit page](docs/units/02-projectile.md)

**Learning objectives**

- [ ] Resolve a velocity vector into horizontal and vertical components using sine and cosine.
- [ ] Explain that horizontal and vertical motion are independent and treat them with separate equations.
- [ ] Predict time of flight, maximum height and range for horizontal and angled launches.
- [ ] Explain the velocity and acceleration of a projectile at launch, apex and landing.
- [ ] Use a simulation or video analysis to model a projectile and compare with the prediction.
- [ ] Identify when air resistance makes the ideal model break down.

**Key concepts:** Projectile; Independence of components; Vector components; Time of flight; Range; Apex

**Deliverables**

- [ ] Cornell notes complete
- [ ] Quiz of most-missed questions ≥ 80% (8 questions)
- [ ] Practice problems (5)
- [ ] Lab / performance task: Launch a ball from a ramp or spring launcher; predict the landing point using kinematics, place a target, and test. Compare predicted vs. actual with percent error and list sources of error (CER).

## Unit 3: Newton's Laws

**Standards:** HS-PS2-1, HS-PS2-4  
**Details:** [Full unit page](docs/units/03-newton.md)

**Learning objectives**

- [ ] State Newton's three laws and identify each in everyday situations.
- [ ] Draw accurate free-body diagrams showing all forces on one object (weight, normal, tension, friction, applied).
- [ ] Calculate net force and acceleration using ΣF = ma, in one dimension and on a simple incline.
- [ ] Distinguish mass from weight and explain how weight changes with gravitational field strength.
- [ ] Identify action–reaction pairs (equal, opposite, on different objects).
- [ ] Model static and kinetic friction with f = μN and use it in problems.
- [ ] Use experimental data to show that a ∝ F and a ∝ 1/m.

**Key concepts:** Force; Net force (ΣF); Inertia / 1st law; 2nd law; 3rd law; Weight vs. mass; Normal & friction

**Deliverables**

- [ ] Cornell notes complete
- [ ] Quiz of most-missed questions ≥ 80% (8 questions)
- [ ] Practice problems (5)
- [ ] Lab / performance task: Atwood machine or cart-and-hanging-mass lab

## Unit 4: Momentum

**Standards:** HS-PS2-2, HS-PS2-3  
**Details:** [Full unit page](docs/units/04-momentum.md)

**Learning objectives**

- [ ] Calculate momentum (p = mv) with correct units and sign (direction).
- [ ] Relate impulse (FΔt) to change in momentum and explain how force and time trade off.
- [ ] Apply conservation of momentum to collisions and explosions in one dimension.
- [ ] Classify collisions as elastic, inelastic or perfectly inelastic using kinetic energy before and after.
- [ ] Explain how safety devices (airbags, crumple zones, helmets) reduce force by increasing collision time.
- [ ] Design, test and refine a device that protects an egg or sensor during a collision (HS-PS2-3).

**Key concepts:** Momentum (p); Impulse (J); Conservation of momentum; Elastic collision; Inelastic collision; Explosion / recoil

**Deliverables**

- [ ] Cornell notes complete
- [ ] Quiz of most-missed questions ≥ 80% (8 questions)
- [ ] Practice problems (5)
- [ ] Lab / performance task: Dynamics-cart collisions (or Collision Lab)

## Unit 5: Work & Energy

**Standards:** HS-PS3-1, HS-PS3-2, HS-PS3-3, HS-PS3-4  
**Details:** [Full unit page](docs/units/05-energy.md)

**Learning objectives**

- [ ] Calculate work done by a constant force at any angle, W = Fd cosθ, and identify when work is zero or negative.
- [ ] Calculate kinetic energy, gravitational potential energy and elastic potential energy.
- [ ] Apply the work–energy theorem: W_net = ΔKE.
- [ ] Use conservation of mechanical energy (with and without friction) to find speed or height.
- [ ] Calculate power and relate it to energy transfer rate (W = J/s).
- [ ] Construct energy bar charts and a computational model of energy transfer in a system.
- [ ] Design a device that converts energy from one form to another within constraints (HS-PS3-3).

**Key concepts:** Work (W); Kinetic energy (KE); Gravitational potential energy (PE); Elastic potential energy; Work–energy theorem; Conservation of energy; Power (P)

**Deliverables**

- [ ] Cornell notes complete
- [ ] Quiz of most-missed questions ≥ 80% (8 questions)
- [ ] Practice problems (5)
- [ ] Lab / performance task: Energy Skate Park / ramp-and-photogate lab

## Assessment

See [docs/assessment.md](docs/assessment.md) for the 4-level rubric, grade weighting, standards map and the student progress tracker.

## Project structure

```
site/            interactive web app (index.html, css/, js/)
site/js/data.js  all course content (single source of truth)
docs/            generated printable Markdown (units + assessment)
scripts/build-docs.js  regenerates README and docs from data.js
```

Regenerate docs after editing content: `node scripts/build-docs.js`.

## Standards

Goals come from the California NGSS Physics & Earth Science course model: https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp. Kinematics supports HS-PS2-1 (it is not its own performance expectation). Please verify performance-expectation wording against the CDE site before publishing. External resource links should be spot-checked each term.
