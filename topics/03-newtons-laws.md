# Unit 3 — Newton's Laws of Motion

> The bridge between *how* things move (kinematics) and *why* — forces and their effects.

## Learning Objectives

By the end of this unit, students will be able to:

- [ ] State and apply Newton's First Law (inertia) to explain why objects resist changes in motion.
- [ ] State and apply Newton's Second Law (F_net = ma) to solve for force, mass, or acceleration.
- [ ] State and apply Newton's Third Law and correctly identify action-reaction pairs.
- [ ] Draw and use free-body diagrams to represent all forces acting on an object.
- [ ] Distinguish mass from weight, and calculate weight as W = mg.
- [ ] Solve problems involving friction (static and kinetic), normal force, and tension.
- [ ] Analyze systems of connected objects (e.g., blocks connected by a string, an Atwood machine).

## Assessment Criteria

| Level | Criteria |
|---|---|
| Mastery (A) | Draws complete, correctly-labeled free-body diagrams; sets up ΣF = ma along the correct axes; correctly identifies action-reaction pairs (different objects); solves multi-body systems. |
| Proficient (B) | Solves single-object problems on a horizontal or simple incline correctly; occasional errors with friction direction or multi-body systems. |
| Developing (C) | Free-body diagrams missing forces (commonly friction or the normal force on an incline); confuses mass and weight. |
| Beginning (D/F) | Cannot identify forces acting on an object; believes a net force is needed to sustain constant velocity. |

**How it's measured:** free-body diagram checks each lesson, the "Most-Missed" interactive quiz, a friction lab (measuring μₛ and μₖ experimentally), and a unit test requiring both a diagram and a full solution for at least one multi-force problem.

---

## Cornell Notes

### Cues / Questions | Notes

**Newton's First Law (Law of Inertia)**
An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted on by a net (unbalanced) external force. Constant velocity — including zero velocity — means F_net = 0. "No net force" does **not** mean "no forces"; it means the forces balance.

**Newton's Second Law**
F_net = ma. Force and acceleration are vectors and point in the same direction. If multiple forces act, first find the **vector sum** (net force), then divide by mass to get acceleration. Units: 1 N = 1 kg·m/s².

**Newton's Third Law**
For every action force, there is an equal and opposite reaction force. Crucially, action-reaction pairs act on **two different objects** — they never cancel each other out on the same free-body diagram. (Contrast with balanced forces, which act on the *same* object and can cancel.)

**Mass vs. weight**
Mass (kg) is the amount of matter; it doesn't change with location. Weight (N) is the force of gravity on that mass: W = mg. A 10 kg object weighs ~98 N on Earth but only ~16 N on the Moon — same mass, different weight.

**Free-body diagrams (FBDs)**
Draw the object as a dot/box. Draw every force acting **on** it (not forces it exerts on other things) as an arrow from that point, roughly to scale and correctly directed: gravity (always straight down), normal force (perpendicular to the contact surface), applied force, tension (along the string, pulling away from the object), friction (opposes relative sliding motion, parallel to the surface).

**Friction**
Static friction (f_s) prevents an object from starting to move; it adjusts up to a maximum: f_s(max) = μₛN. Kinetic friction (f_k) acts once sliding starts and is roughly constant: f_k = μₖN. Usually μₛ > μₖ, meaning it takes more force to *start* something sliding than to *keep* it sliding.

**Inclines**
Tilt your coordinate axes so "x" is along the slope and "y" is perpendicular to it. Then gravity splits into two components: mg sin θ (along the slope, pulls object down the incline) and mg cos θ (into the slope, balanced by the normal force).

### Summary
Newton's three laws connect force and motion: no net force means no change in velocity (1st law); a net force causes acceleration proportional to force and inversely proportional to mass (2nd law); forces always come in object-pairs (3rd law). Free-body diagrams are the essential tool — nearly every error in this unit traces back to a missing or misdirected force on the diagram.

---

## Most Often Missed Concepts (feeds the interactive quiz)

1. **"Constant velocity needs a constant force"** — a common misconception. Constant velocity means F_net = 0, not F_net = constant nonzero value.
2. **Action-reaction pairs on the same object** — students pair "gravity pulling the box down" with "the normal force pushing the box up" and call it an action-reaction pair. These are *balanced forces on one object*, not a 3rd-law pair — the true reaction to gravity-on-box is the box's gravitational pull on Earth; the true reaction to the normal force is the box pushing down on the surface.
3. **Missing friction on an FBD** when a problem says "the surface is rough" but the object is momentarily at rest or moving at constant velocity.
4. **Confusing mass and weight units** — using kg where N is needed, or vice versa.
5. **Forgetting normal force changes on an incline or with an additional vertical force** (e.g., someone pushing down on a box changes N, which changes maximum friction available).
6. **Applying f = μN with the wrong N** — using mg instead of the actual normal force when there's a vertical component to an applied force or an incline.
7. **Believing heavier objects "need more force" to move at the same acceleration when friction is ignored** — true only because of mass in F=ma, not because "heavy things are harder to move" as a separate rule; conflating this with friction effects (which *do* scale with N=mg) causes confusion when comparing frictionless vs. frictional scenarios.

---

## Practice Problems

**Basic**
1. A 5.0 kg box sits on a frictionless table. A 15 N horizontal force is applied. Find its acceleration.
2. What is the weight of a 60 kg student on Earth? What would their mass and weight be on the Moon (g_moon ≈ 1.6 m/s²)?

**Intermediate**
3. A 10 kg crate is pulled across a floor with a 40 N horizontal force. If μₖ = 0.25, find the acceleration of the crate.
4. Draw a complete free-body diagram for a book resting on an incline that makes a 20° angle with the horizontal, and is NOT sliding. Label all forces.

**Challenge**
5. Two blocks (m₁ = 4.0 kg, m₂ = 6.0 kg) are connected by a light string over a frictionless pulley (an Atwood machine), with m₂ hanging and m₁ on a frictionless table. Find the acceleration of the system and the tension in the string.
6. A 2.0 kg block on a 30° frictionless incline is connected via a string over a pulley at the top to a hanging 1.5 kg mass. Determine the direction and magnitude of the system's acceleration.

---

## Learning Resources

- **Simulation:** PhET — *Forces and Motion: Basics* (phet.colorado.edu/en/simulations/forces-and-motion-basics)
- **Video:** Khan Academy — "Forces and Newton's laws of motion" (khanacademy.org/science/physics)
- **Video:** Flipping Physics — "Newton's Laws" playlist (YouTube)
- **Reading:** OpenStax *Physics* — Chapter 4, "Dynamics: Force and Newton's Laws of Motion."
- **Practice bank:** The Physics Classroom — "Newton's Laws" (physicsclassroom.com)

## Real-World Applications

- **Seatbelts and airbags** — direct application of the 1st law (your body keeps moving forward when the car stops suddenly).
- **Rocket propulsion** — a textbook 3rd-law example: expelling exhaust gas downward pushes the rocket upward.
- **Vehicle design** — engineers calculate required engine force using F = ma for target acceleration specs.
- **Tire and road friction** — braking distance, cornering limits, and anti-lock brakes all depend on μₛ and μₖ.
- **Elevators** — apparent weight changes (felt through the normal force) during acceleration are a direct 2nd-law application.
