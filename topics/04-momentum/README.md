# Topic 4: Momentum

> The study of how mass and velocity combine into a conserved vector quantity — and how collisions and impulses transfer it between objects.

**Files in this module:** [`cornell-notes.md`](./cornell-notes.md) · [`quiz.html`](./quiz.html) (open in any browser)

---

## Key Concepts to Master

- **Momentum** — `p = mv`, a vector quantity in the same direction as velocity. Units: kg·m/s.
- **Impulse** — the product of force and the time interval it acts over, `J = FΔt`. Impulse is also a vector, in the direction of the net force.
- **Impulse-momentum theorem** — impulse equals the change in momentum: `J = FΔt = Δp = mΔv`. This connects force/time to a change in motion.
- **Conservation of momentum** — for an isolated (closed) system with no net external force, total momentum is conserved: `Σp_before = Σp_after`. This follows directly from Newton's third law applied during a collision.
- **Elastic collisions** — both momentum AND kinetic energy are conserved. Objects bounce off each other without permanent deformation or heat loss (an idealization; billiard balls and gas molecules are close approximations).
- **Inelastic collisions** — momentum is conserved, but kinetic energy is NOT conserved (some converts to heat, sound, or deformation). "Inelastic" is a broad category.
- **Perfectly inelastic collisions** — a special case of inelastic collision where the objects stick together and move with a common final velocity after impact. This is the *maximum* kinetic energy loss possible while still conserving momentum.
- **1D collision problem setup** — assign a positive direction, write each object's momentum with the correct sign *before* the collision, sum them, and solve for unknown post-collision velocities using conservation of momentum.
- **Impulse, force, and time** — for a given change in momentum, a longer contact time (Δt) means a smaller average force (F = Δp/Δt). This is the physics behind airbags, crumple zones, and padded flooring.

## Key Equations

| Equation | Meaning |
|---|---|
| `p = mv` | Momentum of an object (vector; mass × velocity) |
| `J = FΔt = Δp` | Impulse-momentum theorem: impulse equals change in momentum |
| `Σp_before = Σp_after` | Conservation of momentum for an isolated system (m₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f) |
| *(elastic collision)* | Momentum AND kinetic energy are both conserved: ½m₁v₁ᵢ² + ½m₂v₂ᵢ² = ½m₁v₁f² + ½m₂v₂f² |
| `v_f = (m₁v₁ᵢ + m₂v₂ᵢ) / (m₁ + m₂)` | Common final velocity after a perfectly inelastic collision (objects stick together) |

---

## Learning Objectives

By the end of this module, students will be able to:

1. Calculate the momentum of an object and correctly assign its sign/direction in a one-dimensional problem.
2. Apply the impulse-momentum theorem to relate force, time, and change in momentum, including problems that ask for average force.
3. Set up and solve one-dimensional conservation-of-momentum problems for two-object systems, assigning correct signs to objects moving in opposite directions.
4. Distinguish elastic, inelastic, and perfectly inelastic collisions, and identify which quantities (momentum, kinetic energy, or both) are conserved in each.
5. Explain, using the impulse-momentum theorem, why extending the time of impact (airbags, padding, crumple zones) reduces the force experienced in a collision.
6. Identify when a system can and cannot be treated as isolated (i.e., when an external force like friction must be accounted for).

## Assessment Criteria

| Level | Criteria |
|---|---|
| **Mastery (4)** | Solves multi-object 1D collision problems correctly with proper signs, correctly classifies collision type from given data (checking KE), and explains real-world impulse applications using the theorem without prompting. |
| **Proficient (3)** | Solves standard one- and two-object conservation-of-momentum problems correctly; minor sign errors or occasional confusion between inelastic and perfectly inelastic that don't derail the solution. |
| **Developing (2)** | Applies p = mv and conservation of momentum with help setting up signs; needs prompting to check whether kinetic energy is conserved. |
| **Beginning (1)** | Treats momentum as a scalar; cannot set up a two-object collision equation independently. |

**Suggested evidence:** homework problem sets, the interactive quiz (`quiz.html`) scored to 80%+, a collision-classification exit ticket, and one free-response two-object collision problem on the unit test.

---

## Most Often Missed Ideas (misconceptions to target)

1. **"Momentum is always conserved for any single object."** Conservation of momentum applies to the *total* momentum of a closed/isolated system, not to any one object in isolation — a single object's momentum changes whenever a net external force acts on it.
2. **"Inelastic always means the objects stick together."** That describes specifically a *perfectly* inelastic collision. Any collision where kinetic energy is not conserved is inelastic — objects can bounce apart and still lose kinetic energy to heat or sound.
3. **"Kinetic energy is conserved in all collisions."** Only elastic collisions conserve kinetic energy. Momentum is conserved in essentially all isolated collisions (elastic or not); kinetic energy is the quantity that's easy to lose.
4. **Forgetting momentum is a vector.** Students often add magnitudes instead of assigning correct positive/negative signs to objects moving in opposite directions before setting up the conservation equation.
5. **"A bigger force always means a bigger impulse."** Impulse depends on both force *and* the time it acts over (J = FΔt); a small force acting over a long time can produce the same impulse as a large force acting briefly.
6. **"Heavier or faster objects always 'win' the collision" in some intuitive sense that ignores conservation of momentum.** The outcome (final velocities) is fully determined by conservation of momentum (and, for elastic collisions, kinetic energy) — not by which object "seems" dominant.
7. **Applying conservation of momentum while ignoring an external force.** If friction, gravity along the surface, or another outside force acts on the system during the interval considered, momentum of that system is not strictly conserved unless that external impulse is accounted for.

---

## Learning Resources

- **Video:** Khan Academy — [Momentum and impulse](https://www.khanacademy.org/science/physics/momentum-tutorial)
- **Simulation:** PhET Interactive Simulations — [Collision Lab](https://phet.colorado.edu/en/simulation/collision-lab) (1D and 2D elastic/inelastic collisions with adjustable elasticity)
- **Reference:** The Physics Classroom — [Momentum and Collisions tutorial](https://www.physicsclassroom.com/class/momentum)
- **Reference:** OpenStax College Physics, Chapter 8 (Linear Momentum and Collisions) — free PDF/online textbook

## Real-World Applications

- Crumple zones and car crash safety design — extending collision time to reduce peak force on occupants.
- Airbags — cushioning the body over a longer Δt to lower the force of impact.
- Rocket propulsion — expelling mass (exhaust) backward to gain momentum forward, a direct application of Newton's third law and conservation of momentum.
- Sports — bat-ball or racket-ball collisions, where contact time and follow-through affect the impulse delivered.
- Billiards/pool — nearly elastic collisions used to predict post-collision ball paths.
- Recoil of a gun — the backward momentum of the gun matches the forward momentum of the fired bullet.

## Practice Problems

1. A 0.145 kg baseball travels at 40 m/s toward a bat and leaves at 50 m/s in the opposite direction after a 1.5 ms contact time. Find the impulse delivered to the ball and the average force exerted by the bat.
2. A 1200 kg car moving at 15 m/s east collides and locks bumpers (perfectly inelastic) with a 1500 kg car moving at 10 m/s west. Find their common velocity immediately after the collision, including direction.
3. Two identical 0.5 kg carts on a frictionless track collide elastically. Cart A moves at 3 m/s toward stationary Cart B. Predict the velocities of both carts after the collision, and explain your reasoning using conservation of momentum and kinetic energy.
4. Explain, using the impulse-momentum theorem, why a padded landing mat reduces injury compared to landing on concrete for the same jump height (same Δp).
5. A 60 kg astronaut at rest in space throws a 2 kg tool at 8 m/s away from the space station. Find the astronaut's resulting velocity, and state which physical law justifies your setup.

*(Answer keys are intentionally left for in-class or instructor-led review — pair with the quiz below for self-check practice.)*
