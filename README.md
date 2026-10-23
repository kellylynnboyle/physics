# Physics — Semester 1 Learning Project

Grade 11 · California NGSS Physics & Earth Science course model

A shareable learning project for students and instructors. Open `site/index.html` in a browser (no install or server needed) for the interactive version: Cornell notes, quizzes, progress tracking. This README is the plain-text outline and checklist.

Learning goals come from the [California NGSS standards](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp) (Physics & Earth Science course model).

## Semester 1 standards

- **HS-PS2-1** — Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration.
- **HS-PS2-2** — Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system.
- **HS-PS2-3** — Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision.
- **HS-PS3-1** — Create a computational model to calculate the change in the energy of one component in a system when the change in energy of the other component(s) and energy flows in and out of the system are known.
- **HS-PS3-2** — Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as a combination of energy associated with the motions of particles and energy associated with the relative positions of particles.
- **HS-PS3-3** — Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy.

## Units at a glance

| Unit | Weeks | NGSS |
|---|---|---|
| [Kinematics](#kinematics) | Weeks 1–3 | HS-PS2-1 |
| [Projectile Motion](#projectile-motion) | Weeks 4–5 | HS-PS2-1 |
| [Newton's Laws](#newton-s-laws) | Weeks 6–9 | HS-PS2-1 |
| [Momentum](#momentum) | Weeks 10–12 | HS-PS2-2, HS-PS2-3 |
| [Work & Energy](#work-energy) | Weeks 13–16 | HS-PS3-1, HS-PS3-2, HS-PS3-3 |

## Kinematics

*Weeks 1–3 · HS-PS2-1* — Describe motion with words, graphs, and equations — before asking what causes it.

> Kinematics is not a standalone NGSS performance expectation; it is the mathematical foundation students need for HS-PS2-1 (relating force, mass and acceleration).

### Learning objectives (student checklist)

- [ ] I can distinguish distance from displacement and speed from velocity, and compute each.
- [ ] I can define acceleration as a change in velocity and determine its sign relative to motion.
- [ ] I can interpret position–time and velocity–time graphs (slope and area).
- [ ] I can solve constant-acceleration problems with the kinematic equations.
- [ ] I can model free fall using g = 9.8 m/s² downward, ignoring air resistance.

### Key concepts

- **Displacement (Δx):** Change in position with direction: x_f − x_i. A vector.
- **Velocity (v):** Rate of change of displacement: v = Δx/Δt. Speed is its magnitude.
- **Acceleration (a):** Rate of change of velocity: a = Δv/Δt. Units m/s².
- **Kinematic equations:** v = v₀ + at;  Δx = v₀t + ½at²;  v² = v₀² + 2aΔx  (constant a only).
- **Free fall:** Motion under gravity alone: a = 9.8 m/s² downward at every point, including the top.

### Cornell notes

**Topic:** Kinematics — describing motion

| Cues / Questions | Notes |
|---|---|
| What is the difference between distance and displacement? | Distance = total path length (scalar). Displacement = straight-line change in position with direction (vector). A full lap has displacement 0. |
| Speed vs. velocity? | Speed = distance/time (scalar). Velocity = displacement/time (vector). Average velocity is not the average of speeds. |
| How do I find acceleration? | a = (v_f − v_i)/Δt. If a and v point the same way the object speeds up; opposite ways it slows down. The sign of a alone does not tell you which. |
| What do graph slopes and areas mean? | x–t graph: slope = velocity. v–t graph: slope = acceleration, area under curve = displacement. a–t graph: area = change in velocity. |
| Which kinematic equation do I pick? | List knowns (v₀, v, a, Δx, t). Pick the equation that contains the unknown and the knowns but is missing the variable you do not have. |
| What is true at the top of a throw? | At the top v = 0 for an instant, but a is still 9.8 m/s² down. Up and down legs take equal time and mirror each other. |

**Summary:** Motion is described by position, velocity and acceleration. Graphs and the three constant-acceleration equations connect them. Gravity gives every freely falling object the same acceleration.

### Most-missed-questions quiz (7 items)

Take it interactively in the site. Misconceptions it targets:

- Zero velocity ≠ zero acceleration
- Confusing speed with velocity
- Negative acceleration always means slowing
- Using Δx = vt with the final speed
- Reading slope when area is asked
- Heavier objects fall faster
- Mixing up v and Δx formulas

### Practice problems

1. A cyclist speeds up from 2 m/s to 12 m/s in 5 s. Find her acceleration and the distance covered.
2. A car traveling 25 m/s brakes uniformly at 5 m/s². How far does it travel before stopping?
3. A stone is dropped from a 44.1 m cliff. How long until it hits the ground, and how fast is it moving?
4. Sketch the v–t and a–t graphs for a ball thrown upward and caught at the same height.

<details><summary>Answers</summary>

1. a = 2 m/s²; Δx = (2+12)/2 × 5 = 35 m
2. v² = v₀² + 2aΔx → 0 = 625 − 10Δx → Δx = 62.5 m
3. t = √(2h/g) = 3.0 s; v = gt ≈ 29.4 m/s
4. v–t: straight line sloping down through zero at the apex, slope −9.8. a–t: horizontal line at −9.8 m/s².

</details>

### Resources

- [PhET: The Moving Man](https://phet.colorado.edu) — Simulation: Link position, velocity, and acceleration graphs to motion.
- [The Physics Classroom: 1-D Kinematics](https://www.physicsclassroom.com) — Tutorial: Concept explanations and self-check problems.
- [Khan Academy: One-dimensional motion](https://www.khanacademy.org) — Video + practice: Review videos and exercises.
- [IXL Physics](https://www.ixl.com) — Practice: Adaptive skill practice aligned to the topic.

### Real-world applications

- Traffic engineering: yellow-light timing and safe following distance come from stopping-distance kinematics.
- Sports analytics: sprint start acceleration and split times.
- Accident reconstruction: skid-mark length gives pre-braking speed.

### Lab / project

Motion detector lab: walk a prescribed x–t graph, then match a v–t graph. Collect data and compute acceleration from the slope.

### Assessment criteria

- [ ] Graph interpretation: identify velocity from slope and displacement from area.
- [ ] Quantitative: solve a two-step constant-acceleration problem with units and a sketch.
- [ ] Explain why acceleration is nonzero at the top of a throw.

## Projectile Motion

*Weeks 4–5 · HS-PS2-1* — Treat horizontal and vertical motion separately, and link them with time.

> Applies kinematics in two dimensions; supports HS-PS2-1 by showing that gravity is the only net force once a projectile is released.

### Learning objectives (student checklist)

- [ ] I can resolve an initial velocity into horizontal and vertical components.
- [ ] I can explain that horizontal and vertical motions are independent and share the same time.
- [ ] I can calculate time of flight, range, and maximum height for horizontal and angled launches.
- [ ] I can predict how launch angle and speed change a projectile's path.
- [ ] I can identify the forces on a projectile in flight (gravity only, no air resistance).

### Key concepts

- **Independence of components:** Horizontal: constant velocity (a_x = 0). Vertical: constant acceleration (a_y = −9.8 m/s²).
- **Components:** v_x = v cosθ;  v_y = v sinθ.
- **Time of flight:** Set by the vertical motion only. Level ground launch: t = 2v_y/g.
- **Range:** R = v_x × t. On level ground R = v² sin2θ / g, maximized at 45°.
- **Trajectory:** A parabola, because x ∝ t while y ∝ t².

### Cornell notes

**Topic:** Projectile motion — 2-D with gravity

| Cues / Questions | Notes |
|---|---|
| How do I start a launch problem? | Draw a sketch, pick up = +, split v into v_x = v cosθ and v_y = v sinθ. Solve x and y separately, connect with t. |
| What is constant in flight? | v_x is constant (no horizontal force). v_y changes by 9.8 m/s each second. |
| What does time depend on? | Time is found from the vertical motion (height and v_y). Horizontal speed does not change the fall time. |
| Which angle gives the longest range? | On level ground 45° is best; complementary angles (30° & 60°) land at the same spot, with the higher angle staying in the air longer. |
| What forces act on the ball after release? | Only gravity (no air resistance). There is no 'force of the throw' once the ball leaves the hand. At the apex a = 9.8 m/s² down and v_y = 0 but v_x ≠ 0. |
| What is the shape of the path? | Parabola: x grows linearly with t, y with t². |

**Summary:** A projectile is two independent 1-D motions linked by time: constant velocity sideways, constant acceleration vertically.

### Most-missed-questions quiz (7 items)

Take it interactively in the site. Misconceptions it targets:

- Horizontal motion affects fall time
- Acceleration is zero at the top
- Not finding time from the vertical motion first
- Larger angle = larger range
- Swapping sine and cosine
- Motion needs a force in the direction of motion
- Horizontal speed decays like vertical speed

### Practice problems

1. A ball is kicked at 25 m/s at 40°. Find v_x, v_y, time of flight, and range on level ground.
2. A package is released from a plane at 80 m altitude moving 50 m/s horizontally. How far ahead of the drop point does it land?
3. What is the maximum height of a ball launched with v_y = 14.7 m/s?
4. Explain why a quarterback leads the receiver rather than throwing at the receiver's current position.

<details><summary>Answers</summary>

1. v_x ≈ 19.2 m/s, v_y ≈ 16.1 m/s, t = 2v_y/g ≈ 3.3 s, R ≈ 63 m
2. t = √(2·80/9.8) ≈ 4.04 s; x ≈ 202 m
3. h = v_y²/(2g) ≈ 11 m
4. Flight time is set by the vertical motion; during that time the receiver keeps moving at constant velocity, so the ball must be aimed where the receiver will be.

</details>

### Resources

- [PhET: Projectile Motion](https://phet.colorado.edu) — Simulation: Vary angle, speed and air resistance; compare paths.
- [The Physics Classroom: Vectors & Projectiles](https://www.physicsclassroom.com) — Tutorial: Component method walk-throughs.
- [Khan Academy: Two-dimensional motion](https://www.khanacademy.org) — Video + practice: Worked examples.
- [Video analysis (free tracker software)](https://physlets.org/tracker/) — Lab tool: Track a tossed ball filmed on a phone.

### Real-world applications

- Sports: basketball free throws, long jump, football punts.
- Firefighting: aiming water streams to clear obstacles.
- Aid drops and space-mission trajectories use the same independence principle.

### Lab / project

Launch-and-land lab: predict the landing spot of a marble rolled off a table, then test. Compare predicted and measured range; discuss sources of error.

### Assessment criteria

- [ ] Set up and solve a horizontal-launch problem using separate x and y tables.
- [ ] Predict and justify the effect of launch angle on range and time.
- [ ] Lab report: percent error between predicted and measured range.

## Newton's Laws

*Weeks 6–9 · HS-PS2-1* — Forces explain why motion changes. The net force sets the acceleration.

> Directly addresses HS-PS2-1: students analyze data to relate net force, mass and acceleration.

### Learning objectives (student checklist)

- [ ] I can state Newton's three laws and identify an example of each.
- [ ] I can draw free-body diagrams for objects at rest, at constant velocity, and accelerating.
- [ ] I can apply ΣF = ma in one dimension, including weight, normal, friction and tension.
- [ ] I can distinguish mass from weight and compute each.
- [ ] I can identify action–reaction pairs and explain why they do not cancel.
- [ ] I can analyze data (F vs. a) to show a ∝ F/m.

### Key concepts

- **1st law (inertia):** With zero net force, velocity stays constant (at rest or uniform motion).
- **2nd law:** ΣF = ma. Acceleration is in the direction of net force; a ∝ 1/m.
- **3rd law:** Forces come in equal-and-opposite pairs acting on different objects.
- **Weight:** F_g = mg (a force, in newtons). Mass is the amount of matter (kg) and is the same everywhere.
- **Friction & normal force:** Normal force is perpendicular to the surface; friction opposes sliding. Kinetic friction f = μN.

### Cornell notes

**Topic:** Newton's laws of motion

| Cues / Questions | Notes |
|---|---|
| Does motion require a force? | No. Constant velocity means ΣF = 0. Force is needed to change velocity (accelerate). |
| How do I find acceleration? | Add all forces (with signs) to get ΣF, then a = ΣF/m. Doubling force doubles a; doubling mass halves a. |
| Mass vs. weight? | Mass (kg) doesn't change with location. Weight = mg changes with g (Moon g ≈ 1.6 m/s²). 5 kg weighs ≈ 49 N on Earth. |
| What is a 3rd-law pair? | Pairs are the same type of force, equal in magnitude, opposite in direction, on different objects (Earth pulls book ↔ book pulls Earth). The normal force on a book is not the 3rd-law partner of its weight. |
| How do I draw a free-body diagram? | Draw the object as a dot; draw only forces on it, as arrows from the dot. Label each (F_g, N, T, f, F_app). Choose axes along motion. |
| Why do apparent weights change in an elevator? | Scale reads N. At rest N = mg. Accelerating up: N = m(g + a) — feels heavier. Accelerating down: N = m(g − a). |

**Summary:** Net force is the cause of acceleration: ΣF = ma. Forces always come in pairs between two objects. Draw an FBD before writing any equation.

### Most-missed-questions quiz (7 items)

Take it interactively in the site. Misconceptions it targets:

- Bigger object exerts bigger force
- Constant motion requires a constant forward force
- Using applied force instead of net force
- Mass and weight are the same thing
- Normal force is the reaction to weight
- Weight changes when the elevator moves
- Inverse relationship reversed

### Practice problems

1. A 1200 kg car accelerates from rest to 20 m/s in 8 s. What net force acts on it?
2. Draw the FBD for a 4 kg block hanging from a rope while being lowered at constant speed. Find the tension.
3. A 20 kg crate is pulled with 100 N; kinetic friction coefficient is 0.30. Find a.
4. Two blocks (3 kg and 2 kg) touch on a frictionless table. A 10 N force pushes the 3 kg block. Find a and the force between blocks.

<details><summary>Answers</summary>

1. a = 2.5 m/s²; ΣF = 3000 N
2. ΣF = 0 → T = mg = 39.2 N
3. f = 0.30 × 196 N = 58.8 N; ΣF = 41.2 N; a ≈ 2.1 m/s²
4. a = 10/5 = 2 m/s²; contact force on the 2 kg block = 2×2 = 4 N

</details>

### Resources

- [PhET: Forces and Motion — Basics](https://phet.colorado.edu) — Simulation: Add forces, see net force, friction and acceleration.
- [The Physics Classroom: Newton's Laws](https://www.physicsclassroom.com) — Tutorial: FBD practice and force-pair examples.
- [HyperPhysics: Newton's laws](https://hyperphysics.phy-astr.gsu.edu) — Reference: Quick concept maps and formulas.
- [IXL Physics](https://www.ixl.com) — Practice: Adaptive skill practice.

### Real-world applications

- Seat belts and head restraints (1st law).
- Rocket and jet propulsion; swimming and walking (3rd law).
- Elevator and amusement-park ride design (apparent weight).

### Lab / project

Cart-and-hanging-mass lab: vary net force with constant mass, then vary mass with constant force. Graph a vs. F and a vs. 1/m to verify ΣF = ma.

### Assessment criteria

- [ ] Correct FBDs with labeled, appropriately sized force arrows.
- [ ] Quantitative ΣF = ma problem with friction, with units and checks.
- [ ] Lab data analysis supporting HS-PS2-1: claim, evidence, reasoning.

## Momentum

*Weeks 10–12 · HS-PS2-2, HS-PS2-3* — Momentum is conserved in isolated systems; impulse changes momentum.

> Addresses HS-PS2-2 (conservation of momentum) and HS-PS2-3 (design a device to minimize collision force).

### Learning objectives (student checklist)

- [ ] I can calculate momentum and impulse and relate them (J = FΔt = Δp).
- [ ] I can apply conservation of momentum to collisions and explosions in one dimension.
- [ ] I can classify collisions as elastic or inelastic and compare kinetic energy before and after.
- [ ] I can explain how increasing collision time reduces force.
- [ ] I can design and evaluate a device that protects an object in a collision (HS-PS2-3).

### Key concepts

- **Momentum (p):** p = mv (kg·m/s). A vector.
- **Impulse (J):** J = FΔt = Δp = m(v_f − v_i).
- **Conservation:** If no external net force: Σp_before = Σp_after.
- **Inelastic collision:** Momentum conserved; kinetic energy is not (perfectly inelastic: objects stick).
- **Elastic collision:** Both momentum and kinetic energy conserved.

### Cornell notes

**Topic:** Momentum and impulse

| Cues / Questions | Notes |
|---|---|
| What is momentum? | p = mv. More mass or more speed → more momentum. Direction matters: choose + direction and sign velocities. |
| What is impulse? | Impulse = force × time = change in momentum. A big Δp can come from a large F over short Δt or a small F over long Δt. |
| Why do airbags and crumple zones work? | They lengthen Δt, so average force F = Δp/Δt is smaller for the same Δp. |
| When is momentum conserved? | In an isolated system (no net external force), total p is conserved in every collision and explosion, even when objects deform. |
| Elastic vs. inelastic? | Elastic: KE conserved (billiard balls ≈). Inelastic: some KE becomes thermal/sound/deformation. Perfectly inelastic: stick together, max KE loss. |
| How do I set up a collision problem? | Write p before = p after. Include every object. Solve for the unknown velocity, watch the signs. Check KE only if asked. |

**Summary:** Impulse changes momentum. In an isolated system, total momentum is conserved. Extending collision time reduces force.

### Most-missed-questions quiz (7 items)

Take it interactively in the site. Misconceptions it targets:

- Mixing p with KE formulas
- Thinking impulse itself shrinks
- Forgetting to add masses afterward
- Momentum only conserved if energy is
- Bouncing changes nothing about impulse
- Total momentum starts at zero, so nothing moves
- Needing mass to get impulse

### Practice problems

1. A 0.15 kg baseball moving 40 m/s is hit back at 50 m/s. Find the impulse, and the average force if contact lasts 2.0 ms.
2. A 4 kg cart at 5 m/s hits a 6 kg cart at rest and they stick. Find v and the KE lost.
3. A 1200 kg car moving 15 m/s rear-ends a 1800 kg stopped car and they lock together. Find their speed.
4. Design challenge: build a package that keeps an egg intact when dropped from 2 m. Explain in terms of impulse.

<details><summary>Answers</summary>

1. J = 0.15 × (50 − (−40)) = 13.5 N·s; F = 13.5/0.002 = 6750 N
2. v = 20/10 = 2 m/s; KE: 50 J → 20 J, lost 30 J
3. v = 18,000/3,000 = 6 m/s
4. Longer stopping time (padding, crumple structure) → smaller average force for the same Δp.

</details>

### Resources

- [PhET: Collision Lab](https://phet.colorado.edu) — Simulation: Test elastic and inelastic collisions; see p and KE.
- [The Physics Classroom: Momentum and Its Conservation](https://www.physicsclassroom.com) — Tutorial: Impulse–momentum and collision problems.
- [Khan Academy: Impulse and momentum](https://www.khanacademy.org) — Video + practice: Explanations and exercises.
- [IIHS crash-test videos](https://www.iihs.org) — Real-world data: Analyze vehicle crumple-zone performance.

### Real-world applications

- Airbags, crumple zones, helmets, padded playgrounds (HS-PS2-3).
- Rocket propulsion and recoil from firearms.
- Sports: follow-through in golf/baseball; boxing glove padding.

### Lab / project

Dynamics-cart collisions: measure velocities before/after for sticky and bouncy collisions, verify momentum conservation, calculate KE lost. Egg-drop device for HS-PS2-3.

### Assessment criteria

- [ ] Conservation-of-momentum calculation with correct signs and units.
- [ ] Evidence-based explanation of how a device reduces collision force.
- [ ] Engineering design: test, data table, and one revision with justification.

## Work & Energy

*Weeks 13–16 · HS-PS3-1, HS-PS3-2, HS-PS3-3* — Energy is transferred by work and conserved. Track it between forms.

> Addresses HS-PS3-1 (energy accounting model), HS-PS3-2 (motion vs. position energy) and HS-PS3-3 (device converting energy).

### Learning objectives (student checklist)

- [ ] I can calculate work done by a constant force, including at an angle.
- [ ] I can calculate kinetic, gravitational potential and elastic potential energy.
- [ ] I can apply the work–energy theorem and conservation of mechanical energy.
- [ ] I can account for energy lost to thermal energy due to friction.
- [ ] I can calculate power and efficiency.
- [ ] I can build and evaluate a device that converts energy from one form to another (HS-PS3-3).

### Key concepts

- **Work:** W = Fd cosθ (joules). Zero if the force is perpendicular to displacement or d = 0.
- **Kinetic energy:** KE = ½mv².
- **Gravitational PE:** PE = mgh (relative to a chosen reference level).
- **Conservation of energy:** Total energy of a closed system is constant: KE + PE + thermal = constant.
- **Power:** P = W/t (watts). Efficiency = useful output / input.

### Cornell notes

**Topic:** Work, energy and power

| Cues / Questions | Notes |
|---|---|
| When is work done? | Work needs a force component along the displacement: W = Fd cosθ. Carrying a box level at constant speed: the lifting force is perpendicular to motion, so W = 0. |
| KE vs. PE formulas? | KE = ½mv² (motion). PE_g = mgh (position). Spring PE = ½kx². Both measured in joules. |
| How does speed affect KE? | KE ∝ v². Doubling speed → 4× KE → 4× stopping distance with the same braking force. |
| How do I use conservation of energy? | Pick two points: KE₁ + PE₁ = KE₂ + PE₂. Path shape doesn't matter for conservative forces. Example: drop from h → v = √(2gh). |
| What happens with friction? | Friction converts mechanical energy to thermal: KE₁ + PE₁ − W_friction = KE₂ + PE₂. Total energy is still conserved. |
| What is power? | P = W/t = Fv. 1 W = 1 J/s. Efficiency = (useful energy out)/(energy in) × 100%. |

**Summary:** Work transfers energy. Without friction, mechanical energy is conserved. With friction it is converted to thermal energy, and total energy is still conserved.

### Most-missed-questions quiz (7 items)

Take it interactively in the site. Misconceptions it targets:

- Holding or carrying counts as work
- KE is proportional to v
- Forgetting the square root / ½
- Using the full force or the wrong trig function
- The path shape changes final speed
- Reporting work as power
- Energy 'disappears' due to friction

### Practice problems

1. Find the KE of a 0.50 kg ball moving at 12 m/s. How high could it rise if all KE became PE?
2. A 60 kg skier starts at rest 25 m above the bottom of a frictionless slope. Find the speed at the bottom.
3. A 1000 kg car going 20 m/s brakes to a stop with 5000 N of friction. Find the stopping distance (work–energy).
4. A 100 W bulb is 5% efficient at producing light. How much light energy per second does it emit? Where does the rest go?

<details><summary>Answers</summary>

1. KE = 36 J; h = KE/mg = 36/(0.5×9.8) ≈ 7.3 m
2. v = √(2×9.8×25) ≈ 22 m/s
3. KE = 200,000 J = F·d → d = 40 m
4. 5 J/s of light; 95 J/s becomes thermal energy

</details>

### Resources

- [PhET: Energy Skate Park](https://phet.colorado.edu) — Simulation: Bar charts of KE, PE and thermal energy as the skater moves.
- [The Physics Classroom: Work, Energy, and Power](https://www.physicsclassroom.com) — Tutorial: Concept and calculation practice.
- [Khan Academy: Work and energy](https://www.khanacademy.org) — Video + practice: Videos and exercises.
- [IXL Physics](https://www.ixl.com) — Practice: Adaptive skill practice.

### Real-world applications

- Roller coasters and ski jumps: energy transformations.
- Hybrid and electric cars: regenerative braking recovers KE.
- Hydroelectric dams and wind turbines (HS-PS3-3).
- Energy labels on appliances: power and efficiency.

### Lab / project

Energy transformation lab: roll a cart or ball down a ramp, measure speed with photogates, and compare ΔPE to KE to find lost energy. Device project: build a device converting energy (HS-PS3-3).

### Assessment criteria

- [ ] Use energy conservation to find speed or height, including a friction case.
- [ ] Energy bar chart showing KE, PE and thermal at three points.
- [ ] Device project: constraints, data, efficiency calculation, one improvement.

## Scoring rubric (performance tasks)

| Criterion | 4 — Exceeds | 3 — Meets | 2 — Approaching | 1 — Beginning |
|---|---|---|---|---|
| Conceptual understanding | Explains and extends concepts; corrects common misconceptions unprompted | Accurate explanation using correct vocabulary | Mostly accurate; some gaps or misconceptions | Major misconceptions |
| Mathematical reasoning | Correct, efficient, sets up and checks; units and sig figs throughout | Correct setup and answer with units | Right equation; arithmetic or unit errors | Wrong equation or no setup |
| Representations (graphs, FBDs, diagrams) | Accurate, complete, and used to reason | Accurate and labeled | Partially accurate or incomplete | Missing or incorrect |
| Evidence & communication | Claim–evidence–reasoning is complete and persuasive | Claim supported by data and reasoning | Claim with weak evidence or reasoning | No evidence |

**Mastery = 80%+ on the topic quiz (retakes allowed) AND a 3 or higher on each rubric criterion for the topic's performance task.**

## Instructor notes

- All content lives in `site/js/data.js`. Edit it, then run `node scripts/build-readme.js` to refresh this README.
- Student progress is saved only in the student's own browser (localStorage); nothing is sent anywhere.
- Quiz items target common misconceptions; review class results to choose what to reteach.
- Semester 2 (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) can be added as new topic entries in `data.js`.
- Resource links point to site home pages; confirm current availability before assigning.
