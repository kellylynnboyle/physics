# Section 4: Momentum

## Overview
Momentum extends Newton's Laws to interactions between objects —
collisions, explosions, and impacts — using a quantity that is *always*
conserved in an isolated system, unlike kinetic energy.

## Key Concepts to Master
- **Momentum**: `p = mv`, a vector. Direction matters — momentum in
  opposite directions must be given opposite signs.
- **Impulse**: `J = FΔt = Δp`. A force applied over a time interval
  changes momentum by that same amount. This is why "follow-through" and
  crumple zones work — increasing Δt for the same Δp reduces the peak
  force.
- **Conservation of momentum**: in a system with no external net force,
  total momentum before an interaction equals total momentum after:
  `p_total,before = p_total,after`, i.e., `m₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f`.
- **Elastic collisions**: both momentum AND kinetic energy are conserved.
  Objects bounce off each other without permanent deformation or heat
  loss.
- **Inelastic collisions**: momentum is conserved, but kinetic energy is
  NOT (some converts to heat/sound/deformation).
- **Perfectly inelastic collisions**: objects stick together and move
  with a common final velocity — momentum is conserved, but this is the
  scenario with the *most* kinetic energy lost of any single collision
  type.
- **Momentum is conserved; energy conservation is a separate question**:
  never assume kinetic energy is conserved unless the problem specifies
  an elastic collision.

## Learning Objectives
Students will be able to:
1. Calculate momentum and impulse, including sign/direction.
2. Apply conservation of momentum to solve for an unknown velocity in a
   1D collision.
3. Classify a collision as elastic, inelastic, or perfectly inelastic
   from given information.
4. Explain why momentum is always conserved in an isolated system but
   kinetic energy is only conserved in elastic collisions.
5. Solve for the change in momentum/force using the impulse-momentum
   theorem (e.g., airbags, catching a ball).

## Practice Problems

1. A 1200 kg car moving at 15 m/s has how much momentum?
2. A soccer ball (0.45 kg) is kicked, changing its velocity from 0 to 20
   m/s in 0.05 s. What average force did the kick apply?
3. A 3 kg cart moving at 4 m/s collides with a stationary 1 kg cart. They
   stick together. What is their common velocity after the collision?
4. In problem 3, was kinetic energy conserved? Show your work.
5. A 2 kg ball moving right at 3 m/s collides head-on with a 2 kg ball
   moving left at 3 m/s. If the collision is perfectly elastic, what are
   their velocities after collision? (Hint: for equal masses in a 1D
   elastic collision, the objects exchange velocities.)

### Answer Key
1. `p = mv = 1200(15) = 18,000 kg·m/s`.
2. `F = Δp/Δt = (0.45)(20 − 0)/0.05 = 180 N`.
3. Conservation of momentum: `(3)(4) + (1)(0) = (3+1)v_f → v_f = 3 m/s`.
4. `KE_before = ½(3)(4²) = 24 J`. `KE_after = ½(4)(3²) = 18 J`. Kinetic
   energy is **not** conserved (24 J → 18 J, 6 J lost to
   heat/sound/deformation) — confirming this was an inelastic collision.
5. By the equal-mass elastic-collision rule, the balls exchange
   velocities: the ball initially moving right at 3 m/s now moves **left
   at 3 m/s**, and the ball initially moving left at 3 m/s now moves
   **right at 3 m/s**.

## Most Often Missed — see `quiz.html`
The quiz targets: confusing momentum conservation with energy
conservation, sign errors in 1D collisions, the "heavier object always
has more momentum" myth, and impulse/time-force tradeoffs (crumple zones,
airbags).

## Real-World Applications
- **Car safety design**: crumple zones and airbags increase the collision
  time (Δt), reducing peak force for the same change in momentum.
- **Sports**: follow-through in swinging a bat/racket increases contact
  time to maximize impulse (and thus final ball speed).
- **Rocket propulsion**: expelling mass backward (exhaust) at high speed
  changes the rocket's momentum forward — same idea as recoil.
- **Ballistic pendulum**: used historically (and in labs) to measure
  bullet speed via momentum conservation.

## Learning Resources
- [The Physics Classroom — Momentum and Collisions](https://www.physicsclassroom.com/class/momentum)
- [PhET — Collision Lab simulation](https://phet.colorado.edu/en/simulations/collision-lab)
- [Khan Academy — Momentum and impulse](https://www.khanacademy.org/science/physics/linear-momentum)
- [CK-12 — Momentum FlexBook](https://www.ck12.org/physics/momentum/)

## Assessment Criteria
- **Mastery**: solves 2-object collision problems independently,
  correctly classifies collision type, and explains energy loss in
  inelastic collisions using numbers.
- **Proficient**: applies conservation of momentum correctly with given
  directions; occasionally makes sign errors on opposite-direction
  problems.
- **Developing**: assumes kinetic energy is always conserved, or
  confuses which object "has more" momentum based on size alone rather
  than mass × velocity.
