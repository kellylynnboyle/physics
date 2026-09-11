# Unit 4 — Momentum

How mass in motion behaves during interactions and collisions, and the one quantity that is *always* conserved in an isolated system: momentum.

## Key Concepts to Master

- Momentum: p = mv (vector — direction matters)
- Impulse: J = FΔt, and the impulse-momentum theorem: J = Δp
- Conservation of momentum: total momentum of an isolated system (no external net force) is constant
- Elastic collisions: both momentum **and** kinetic energy are conserved
- Inelastic collisions: momentum is conserved, but kinetic energy is **not** (some converts to heat/sound/deformation)
- Perfectly inelastic collisions: objects stick together and move with a common final velocity
- Momentum is always conserved in an isolated system — kinetic energy conservation is the exception, not the rule
- Using impulse to explain why extending collision time reduces peak force (airbags, crumple zones, catching a ball with "give")

## Learning Objectives

By the end of this unit, students will be able to:

1. Calculate momentum and impulse for a given mass, velocity, force, and time interval.
2. Apply the impulse-momentum theorem to explain how changing the duration of a collision changes the force experienced.
3. Apply conservation of momentum to solve for unknown velocities before or after a collision or explosion.
4. Classify a collision as elastic, inelastic, or perfectly inelastic, and correctly determine whether kinetic energy is conserved in each case.
5. Explain, with a correct conceptual justification, why momentum is conserved in collisions even though kinetic energy often is not.
6. Solve two-object, one-dimensional collision problems, including perfectly inelastic ("stick together") collisions.

## Assessment Criteria

| Level | Description |
|---|---|
| Beginning | Confuses momentum with force or kinetic energy; cannot set up a conservation of momentum equation. |
| Developing | Solves basic single-object impulse problems, but struggles with two-object collision problems. |
| Proficient | Correctly sets up and solves conservation of momentum problems for perfectly inelastic and simple elastic collisions. |
| Advanced | Solves multi-step problems combining impulse and momentum conservation, and explains why kinetic energy conservation cannot be assumed by default. |

**Mastery target:** ≥ 80% on the unit quiz (`quiz.html`), plus a completed practice set with all steps shown.

## Core Equations

| Quantity | Equation |
|---|---|
| Momentum | p = mv |
| Impulse | J = FΔt |
| Impulse-momentum theorem | FΔt = Δp = m(v_f − v_i) |
| Conservation of momentum (2-object system) | m₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f |
| Perfectly inelastic collision | m₁v₁ᵢ + m₂v₂ᵢ = (m₁ + m₂)v_f |

## Practice Problems

1. A 0.50 kg ball moving at 6.0 m/s is struck by a bat and leaves at 20.0 m/s in the opposite direction. If the bat is in contact for 0.010 s, find the average force exerted by the bat.
2. A 1000 kg car moving at 15 m/s collides with a stationary 1500 kg car, and they lock together (perfectly inelastic). Find their common velocity after the collision.
3. A 60 kg skater at rest pushes off a 90 kg skater, also at rest. After the push, the 60 kg skater moves at 3.0 m/s backward. What is the velocity of the 90 kg skater?
4. Is the collision in problem 2 elastic or inelastic? Justify your answer using kinetic energy.
5. A 0.15 kg baseball approaches a bat at 40 m/s and leaves at 45 m/s in the opposite direction. Find the impulse delivered to the ball.

<details>
<summary><strong>Answer key</strong> (click to expand)</summary>

1. Taking initial direction as positive: Δp = m(v_f − v_i) = 0.50(−20.0 − 6.0) = 0.50(−26.0) = −13.0 kg·m/s. F = Δp/Δt = −13.0/0.010 = −1300 N (1300 N in the direction the ball leaves)
2. m₁v₁ᵢ + m₂v₂ᵢ = (m₁+m₂)v_f → 1000(15) + 1500(0) = 2500(v_f) → v_f = 15000/2500 = 6.0 m/s
3. Total momentum starts at 0: 0 = 60(−3.0) + 90(v₂) → v₂ = 180/90 = 2.0 m/s (in the direction opposite the first skater — momentum conservation, not energy, is what's used here)
4. Inelastic (not elastic). KE_initial = ½(1000)(15)² = 112,500 J. KE_final = ½(2500)(6.0)² = 45,000 J. Kinetic energy is lost (converted to heat/sound/deformation in the crash), so the collision is inelastic — in fact, since they stick together, it's perfectly inelastic.
5. Taking the approach direction as positive: Δp = m(v_f − v_i) = 0.15(−45 − 40) = 0.15(−85) = −12.75 kg·m/s. The impulse delivered to the ball is 12.75 kg·m/s in the direction it leaves.
</details>

## Real-World Applications

- **Car crumple zones and airbags** — extending collision time to reduce peak force (impulse-momentum theorem)
- **Rocket propulsion** — expelling mass (fuel) backward to conserve total momentum and push the rocket forward
- **Billiards and sports collisions** — predicting outcomes of collisions using conservation of momentum
- **Ballistic pendulum** — a classic method for measuring a bullet's speed using perfectly inelastic collision
- **Recoil of a gun when fired** — momentum conservation between bullet and gun

## Suggested Learning Resources

- Khan Academy — "Momentum and collisions" unit (physics course)
- The Physics Classroom — Momentum and Its Conservation tutorial
- PhET Interactive Simulations (University of Colorado Boulder) — *Collision Lab* simulation
- OpenStax, *University Physics Volume 1* — Linear Momentum and Collisions chapter
- CrashCourse Physics (YouTube) — episode on momentum

## Deliverables Checklist

- [ ] Cornell notes completed (`cornell-notes.md`)
- [ ] Practice problems 1–5 solved with work shown
- [ ] `quiz.html` scored ≥ 80%
- [ ] One real-world application summarized in 3–4 sentences
