# Unit 4 — Momentum

> Momentum tracks "quantity of motion" through interactions — and unlike velocity alone, it's conserved in a closed system.

## Learning Objectives

By the end of this unit, students will be able to:

- [ ] Define momentum (p = mv) and impulse (J = FΔt), and state the impulse-momentum theorem.
- [ ] Apply the Law of Conservation of Momentum to isolated systems.
- [ ] Distinguish elastic, inelastic, and perfectly inelastic collisions, and identify what quantity is (and isn't) conserved in each.
- [ ] Solve 1-D collision problems (both elastic and perfectly inelastic) for unknown velocities.
- [ ] Analyze 2-D collisions using vector components of momentum.
- [ ] Explain how impulse relates force, time, and change in momentum in real-world safety contexts.

## Assessment Criteria

| Level | Criteria |
|---|---|
| Mastery (A) | Correctly sets up conservation equations for multi-object systems, handles direction/sign for 1-D collisions, applies impulse-momentum theorem to force/time problems, and solves basic 2-D collisions. |
| Proficient (B) | Solves standard 1-D perfectly-inelastic and elastic problems; needs support extending to 2-D or multi-step impulse problems. |
| Developing (C) | Forgets that momentum is a vector (drops sign for objects moving in opposite directions); confuses "momentum conserved" with "kinetic energy conserved." |
| Beginning (D/F) | Cannot set up p_before = p_after for a simple two-object system. |

**How it's measured:** conservation-equation setup warm-ups, the "Most-Missed" interactive quiz, an egg-drop or cart-collision lab connecting impulse to force/time, and a unit test with at least one 1-D and one conceptual (elastic vs. inelastic) question.

---

## Cornell Notes

### Cues / Questions | Notes

**What is momentum?**
p = mv. A vector, measured in kg·m/s, pointing in the same direction as velocity. A heavy, slow object and a light, fast object can have the same momentum.

**What is impulse, and how does it relate to momentum?**
Impulse J = FΔt = Δp (the impulse-momentum theorem). A force applied over a time interval changes an object's momentum by exactly that impulse. This is why the *same* change in momentum (e.g., stopping a car) can be achieved with a small force over a long time, or a large force over a short time.

**Law of Conservation of Momentum**
In a system with no net external force, total momentum before an interaction equals total momentum after: Σp_before = Σp_after. This holds for collisions, explosions, and recoil — even though individual objects' momenta change, the *system's* total does not.

**Types of collisions**
- **Elastic:** both momentum AND kinetic energy are conserved. Objects bounce off each other without permanent deformation or heat loss (idealized — billiard balls are a close approximation).
- **Inelastic:** momentum is conserved, but kinetic energy is NOT (some converts to heat, sound, deformation).
- **Perfectly inelastic:** the special inelastic case where objects stick together after colliding and move with a common final velocity. Momentum conserved; kinetic energy lost is maximal for a given momentum.

**Momentum is ALWAYS conserved in an isolated system — kinetic energy is only conserved in elastic collisions.** This is the single most important distinction in the unit.

**1-D collision sign convention**
Assign a positive direction before starting. Objects moving in the "negative" direction get a negative velocity in the momentum equation — this is the #1 source of errors in this unit.

**2-D collisions**
Momentum is conserved independently along the x-axis and the y-axis. Break each object's velocity into components, conserve p_x and p_y separately, then recombine to find the resultant.

### Summary
Momentum (p = mv) is conserved in any isolated system, regardless of collision type — this is a stronger, more general rule than energy conservation, which only holds exactly in elastic collisions. Impulse (FΔt) is the bridge between force and momentum change, explaining why airbags, padding, and follow-through all work by extending contact time to reduce force.

---

## Most Often Missed Concepts (feeds the interactive quiz)

1. **Assuming kinetic energy is always conserved** — momentum is always conserved in an isolated system; KE is only conserved in *elastic* collisions.
2. **Dropping the sign for objects moving in opposite directions** before a collision — treating both as positive.
3. **Using the wrong mass in p = mv after objects stick together** — in perfectly inelastic collisions, the combined mass (m₁ + m₂) moves at one common final velocity.
4. **Confusing impulse and force** — thinking a "bigger force" always means "bigger impulse," ignoring the time factor (Δt).
5. **Believing a stationary object has no role in conservation of momentum** — a stationary object still has mass and must be included in the total system momentum (p = 0 for it, but it's still part of Σp).
6. **In 2-D collisions, conserving the magnitude of momentum instead of each component (x and y) separately.**
7. **Confusing "momentum" with "force" or "energy" conceptually** — e.g., saying a bowling ball "has more force" than a golf ball when the correct quantity being compared is momentum (or energy).

---

## Practice Problems

**Basic**
1. A 0.50 kg ball moving at 6.0 m/s hits a wall and bounces straight back at 4.0 m/s. What is the change in its momentum?
2. A 1200 kg car traveling at 20 m/s collides with a stationary 1500 kg car, and they stick together. Find their common velocity immediately after the collision.

**Intermediate**
3. A 0.15 kg baseball traveling at 40 m/s is hit by a bat and leaves at 50 m/s in the opposite direction. If the bat is in contact with the ball for 0.0015 s, find the average force exerted by the bat.
4. A 3.0 kg cart moving at 4.0 m/s (elastic collision) strikes a stationary 3.0 kg cart. Using both conservation of momentum and conservation of kinetic energy, find the velocity of each cart after the collision. (Hint: for equal masses in a 1-D elastic collision, velocities exchange.)

**Challenge**
5. A 0.02 kg bullet is fired horizontally into a stationary 2.0 kg wooden block hanging from a string (a ballistic pendulum) and embeds itself. The block+bullet swing up to a height of 0.15 m. Find the bullet's initial speed. (Use conservation of momentum for the collision, then conservation of energy for the swing.)
6. Two pucks collide on a frictionless table. Puck A (0.20 kg) moves at 3.0 m/s in the +x direction and strikes stationary Puck B (0.30 kg). After the collision, Puck A moves off at 1.5 m/s at 40° above the +x axis. Find Puck B's velocity (magnitude and direction).

---

## Learning Resources

- **Simulation:** PhET — *Collision Lab* (phet.colorado.edu/en/simulations/collision-lab) — adjust elasticity and masses, watch momentum/KE conserved (or not) in real time.
- **Video:** Khan Academy — "Momentum and impulse" (khanacademy.org/science/physics)
- **Video:** Flipping Physics — "Momentum and Impulse" playlist (YouTube)
- **Reading:** OpenStax *Physics* — Chapter 8, "Linear Momentum and Collisions."
- **Practice bank:** The Physics Classroom — "Momentum and Collisions" (physicsclassroom.com)

## Real-World Applications

- **Car safety design** — crumple zones increase collision time (Δt), reducing peak force (impulse-momentum theorem) on passengers.
- **Sports** — following through in a golf swing or punch extends contact time to maximize impulse (and thus final momentum/speed) transferred.
- **Rocket propulsion** — conservation of momentum explains recoil: expelled exhaust mass moving one way pushes the rocket the other way.
- **Ballistic pendulums** — historically used to measure bullet speeds using momentum + energy conservation together.
- **Airbags and padded flooring/gymnastics mats** — extend stopping time to reduce force on the body during a collision.
