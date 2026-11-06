# Unit 3: Newton's Laws
*Weeks 7-10 (pacing suggestion)*

> **Big idea:** Forces are interactions. The net force on an object determines its acceleration: F_net = m a.

## NGSS Learning Goals
- **HS-PS2-1** - Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration.
- **HS-PS2-3** - Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision.

*Core of HS-PS2-1 (F_net = ma). The third law and collision-force ideas support HS-PS2-3.*

## Learning Objectives (I can...)
- [ ] State Newton's three laws and give an example of each.
- [ ] Draw free-body diagrams and find net force in one and two dimensions.
- [ ] Use F_net = ma to calculate acceleration, force, or mass.
- [ ] Distinguish mass from weight and compute normal and friction forces.
- [ ] Identify action-reaction pairs and explain why they never cancel.
- [ ] Analyse data (e.g. cart + hanging mass) to support the F_net = ma relationship (HS-PS2-1).

## Key Concepts
- **First law (inertia)** - An object keeps its velocity (rest or constant velocity) unless a net external force acts. Mass measures inertia.
- **Second law** - a = F_net / m, in the direction of F_net. 1 N = 1 kg m/s^2.
- **Third law** - When A pushes on B, B pushes on A with equal magnitude and opposite direction. The two forces act on different objects.
- **Weight and normal force** - Weight W = m g (a force, newtons). Normal force is perpendicular to the surface; it equals W only for level surfaces with no other vertical forces/accelerations.
- **Friction** - Static friction adjusts up to f_s,max = mu_s N; kinetic friction f_k = mu_k N opposes sliding. Independent of contact area.
- **Free-body diagrams** - Dot for object; arrows for forces on it only (weight, normal, tension, friction, applied). Sum components to get net force.
- **Inclines** - Along the slope: m g sin(theta). Perpendicular: N = m g cos(theta). Frictionless acceleration a = g sin(theta).

### Key formulas
- `F_net = m a`
- `W = m g`
- `f_k = mu_k N`
- `f_s <= mu_s N`
- `Incline: a = g sin(theta) (frictionless)`
- `N = m g cos(theta)`

### Common misconceptions
- Motion requires a net force. (Constant velocity needs zero net force.)
- Heavier things fall faster (ignoring air).
- Normal force and weight are an action-reaction pair. (They act on the same object.)
- Bigger object exerts bigger force in a collision. (Equal and opposite.)
- Mass and weight are the same thing.
- Friction depends on contact area.

## Cornell Notes
Print-ready version: open `site/index.html` and choose **Cornell Notes**.

| Cue / Question | Notes |
|---|---|
| State the first law. | Inertia: an object at rest stays at rest and an object in motion stays in motion at constant velocity unless acted on by a net external force. |
| State the second law. | F_net = m a. Same force on a bigger mass gives smaller acceleration. Acceleration points the same way as net force. |
| State the third law. | Force pairs: equal magnitude, opposite direction, on DIFFERENT objects, same type of force. |
| Mass vs. weight? | Mass (kg) = amount of matter/inertia, same everywhere. Weight (N) = m g, gravitational force; changes with location. |
| How to draw a free-body diagram? | Isolate the object; draw only forces ON it; label each; choose axes; sum forces along each axis. |
| What is friction? | Force opposing relative sliding. f_k = mu_k N. Static friction matches applied force until it reaches mu_s N. |
| Equilibrium? | Net force = 0, so a = 0 (at rest OR constant velocity). |
| Incline setup? | Tilt axes along the slope. Parallel: m g sin(theta); perpendicular: m g cos(theta) = N. |

**Summary:** Forces cause changes in motion. Net force sets acceleration (F_net = ma), balanced forces mean constant velocity, and every force has an equal and opposite partner on a different object. Free-body diagrams organize problems.

## Most-Missed Questions (answer key)
Take them interactively in `site/index.html`.

1. A hockey puck slides at constant velocity on frictionless ice. The net force on it is:
   - A. In the direction of motion
   - B. Zero
   - C. Equal to its weight
   - D. Opposite the motion
   - **Answer: B** - Constant velocity means a = 0, hence F_net = 0 (first law). *Why it is missed:* Believing motion needs a force.
2. A 5 kg cart experiences a net force of 20 N. Its acceleration is:
   - A. 100 m/s^2
   - B. 4 m/s^2
   - C. 0.25 m/s^2
   - D. 25 m/s^2
   - **Answer: B** - a = F/m = 20/5 = 4 m/s^2. *Why it is missed:* Multiplying instead of dividing.
3. A 60 kg student is on Earth (g = 9.8 m/s^2). Her weight is about:
   - A. 60 N
   - B. 6.1 N
   - C. 588 N
   - D. 5880 N
   - **Answer: C** - W = mg = 60 x 9.8 = 588 N. Her mass is 60 kg. *Why it is missed:* Mixing mass (kg) and weight (N).
4. A truck hits a small bug. Compared with the force of the truck on the bug, the force of the bug on the truck is:
   - A. Smaller
   - B. Equal
   - C. Larger
   - D. Zero
   - **Answer: B** - Third law: forces are equal in magnitude; the accelerations differ because masses differ. *Why it is missed:* Larger mass = larger force.
5. A book rests on a table. Which force is the third-law partner of the book's weight?
   - A. Normal force of table on book
   - B. Book's pull on Earth
   - C. Friction
   - D. Table's weight
   - **Answer: B** - Weight is Earth pulling the book down; the partner is the book pulling Earth up. The normal force acts on the same object (book) as weight. *Why it is missed:* Pairing normal force and weight.
6. You push a crate at constant speed across a floor with 30 N. The kinetic friction force is:
   - A. Less than 30 N
   - B. 30 N
   - C. More than 30 N
   - D. Zero
   - **Answer: B** - Constant speed means net force is zero, so friction balances the 30 N push. *Why it is missed:* Thinking you must push harder than friction to move.
7. A 70 kg person stands in an elevator accelerating upward at 2 m/s^2. The normal force on the person is about:
   - A. 686 N
   - B. 546 N
   - C. 826 N
   - D. 140 N
   - **Answer: C** - N - mg = ma, so N = 70(9.8 + 2) = 826 N. Feels heavier. *Why it is missed:* Using mg only or subtracting a.
8. A 10 kg block slides down a frictionless 30 degree incline. Its acceleration is:
   - A. 9.8 m/s^2
   - B. 4.9 m/s^2
   - C. 8.5 m/s^2
   - D. 0 m/s^2
   - **Answer: B** - a = g sin 30 = 4.9 m/s^2. Mass cancels. *Why it is missed:* Using full g, or including mass.

## Learning Resources
- [The Physics Classroom - Newton's Laws](https://www.physicsclassroom.com/class/newtlaws) - Readings, animations, and problem sets
- [PhET - Forces and Motion: Basics](https://phet.colorado.edu/en/simulations/forces-and-motion-basics) - Push, friction, and net force
- [PhET - Friction](https://phet.colorado.edu/en/simulations/friction) - Microscopic view of friction
- [OpenStax High School Physics - Forces chapters](https://openstax.org/details/books/physics) - Free textbook
- [Khan Academy - Forces and Newton's laws](https://www.khanacademy.org/science/physics) - Video lessons

### Labs / hands-on activities
- Atwood / cart-and-hanging-mass lab: graph a vs. F_net and compare slope with 1/m (HS-PS2-1 data analysis)
- Coefficient-of-friction lab using an adjustable ramp
- Egg-drop or crumple-zone cart challenge (HS-PS2-3)

## Practice Problems
1. A 1200 kg car accelerates at 2.5 m/s^2. What net force acts?
   - *Answer:* F = 3000 N
2. Draw a free-body diagram of a 4 kg book pushed at constant speed on a table with mu_k = 0.3. What push is needed?
   - *Answer:* f = 0.3 x 4 x 9.8 = 11.8 N
3. Two blocks (3 kg and 2 kg) touch on a frictionless table; 10 N pushes the 3 kg block. Find a and the force between blocks.
   - *Answer:* a = 2 m/s^2; contact force = 4 N
4. A 2 kg mass hangs from a rope while accelerating down at 3 m/s^2. Find tension.
   - *Answer:* T = m(g - a) = 2(6.8) = 13.6 N
5. Explain why a seat belt reduces injury, using first and third laws.
   - *Answer:* Passenger continues forward (inertia) until belt applies force; spread force over time/body area

## Real-World Applications
- Automotive safety: seat belts, airbags, crumple zones.
- Rocket propulsion and jet engines (third law).
- Elevators and amusement-park rides (apparent weight).
- Sports: friction on shoe soles and tires; tug-of-war strategy.

## Assessment
**Mastery looks like:**
- [ ] Draws correct free-body diagrams every time
- [ ] Applies F_net = ma with signs and units
- [ ] Identifies third-law pairs correctly
- [ ] Uses lab data to support F_net = ma

**Rubric**

| Criterion | 4 - Mastery | 3 - Proficient | 2 - Developing | 1 - Beginning |
|---|---|---|---|---|
| Free-body diagrams | Complete, correctly labeled, axes chosen | One force missing/mislabeled | Several errors | Not attempted |
| Applying F = ma | Correct net force, algebra, units, check | Small error | Wrong net force or setup | No setup |
| Law explanations (CER) | Claim, evidence, reasoning with correct law | Reasoning partly correct | Misconception present | Missing |
| Lab data analysis (HS-PS2-1) | Graph, slope interpretation, and conclusion support F = ma | Graph good, weak conclusion | Incomplete graph | No analysis |

**Formative checks:** Free-body-diagram whiteboards; Interactive quiz (>= 75%); PhET Forces and Motion exit ticket

**Summative:** Newton's laws unit test + F = ma lab report (claim-evidence-reasoning).

## Student Progress Checklist
- [ ] Cornell notes completed
- [ ] Interactive quiz >= 75%
- [ ] Missed-question retake done
- [ ] Practice problems 1-5 done
- [ ] Lab report submitted
- [ ] Unit assessment taken
