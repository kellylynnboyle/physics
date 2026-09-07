# Unit 4: Momentum

Momentum shifts the question from "what forces act right now?" (Unit 3) to
"what's conserved when objects interact?" Collisions and explosions look
messy in the moment, but momentum — and sometimes kinetic energy — obeys
strict bookkeeping rules that let you solve for outcomes without ever
needing to know the details of the forces involved.

## Key Concepts to Master

- **Momentum, p = mv** — a vector, same direction as velocity. Units: kg·m/s.
  Two objects can have equal mass but different momentum if their velocities
  differ, and momentum can be negative if velocity is negative under your
  sign convention.
- **Impulse, J = FΔt = Δp** — the impulse-momentum theorem. A net force
  applied over a time interval changes an object's momentum by exactly that
  impulse. This is really Newton's second law rewritten in terms of Δt
  instead of instantaneous acceleration, and it's what lets you analyze
  forces that vary over a collision without knowing their exact shape.
- **Conservation of momentum (isolated/closed system)** — if no net external
  force acts on a system, total momentum before an interaction equals total
  momentum after: Σp_before = Σp_after. This holds **in each direction
  independently** — for a 2-D collision, momentum is conserved separately
  along the x-axis and along the y-axis, so you write and solve two
  component equations, not one.
- **Elastic collisions** — both momentum *and* total kinetic energy are
  conserved. Objects bounce off each other without permanent deformation or
  heat/sound loss (idealized — billiard balls and gas molecules approximate
  this well).
- **Inelastic collisions** — momentum is conserved, but kinetic energy is
  **not**. Some KE converts to heat, sound, and deformation of the objects.
  This is the general/realistic case for most macroscopic collisions.
- **Perfectly inelastic collisions** — a special case of inelastic collision
  where the objects stick together and move with a common final velocity.
  This is where the *maximum possible* KE is lost for a given momentum,
  since combining masses is what's left after the interaction. Solve with
  m₁v₁ + m₂v₂ = (m₁ + m₂)v_f.
- **The critical distinction** — momentum is **always** conserved in an
  isolated system, no matter what kind of collision occurs. Kinetic energy
  is conserved **only** in elastic collisions. Never assume KE is conserved
  unless the problem tells you the collision is elastic (or asks you to
  verify it).
- **Explosions and recoil** — treat as a "collision run backward." If a
  system starts at rest (or with known momentum), total momentum afterward
  must equal total momentum before — often zero. A cannon recoiling
  backward as a cannonball flies forward is the same math as a perfectly
  inelastic collision in reverse: 0 = m₁v₁ + m₂v₂.
- **Impulse and safety design** — for a given required change in momentum
  Δp (e.g., a passenger going from highway speed to zero), stretching the
  collision time Δt reduces the average force F needed, since F = Δp/Δt.
  This is why airbags, crumple zones, padded dashboards, and even bending
  your knees when landing a jump all work: they increase the time over
  which momentum changes, lowering peak force on the body.

## Learning Objectives

By the end of this unit, students will be able to:

1. Calculate momentum and impulse for one- and two-dimensional motion,
   correctly treating both as vectors.
2. Apply the impulse-momentum theorem to relate force, time, and change in
   momentum, including estimating average force from a Δt.
3. Apply conservation of momentum to solve 1-D and 2-D collision and
   explosion problems, setting up component equations where needed.
4. Classify a collision as elastic, inelastic, or perfectly inelastic from
   given information, and correctly identify which quantities (momentum,
   KE, both, neither) are conserved in each case.
5. Explain, using impulse, why increasing collision time reduces force for
   a fixed momentum change, and connect this to real safety technologies.

## Practice Problems

1. A 0.5 kg ball moving at 8 m/s east collides head-on with a 0.3 kg ball
   moving at 5 m/s west. If they stick together, find their common final
   velocity (magnitude and direction).
2. A 60 kg astronaut at rest in space throws a 2 kg tool at 10 m/s away
   from the space station. Find the astronaut's recoil velocity.
3. A 1000 kg car moving at 15 m/s collides with a stationary 1500 kg car,
   and they lock bumpers. Find their common velocity, then compute the
   kinetic energy before and after to show how much was lost.
4. Two pucks on frictionless ice: puck A (2 kg) moves at 4 m/s east and
   strikes puck B (2 kg) at rest. If the collision is elastic and puck A
   stops completely, find puck B's velocity. Verify both momentum and KE
   are conserved.
5. A 1500 kg car traveling at 20 m/s hits a wall and comes to rest in
   0.15 s with an airbag, versus 0.02 s without one. Find the average force
   in each case and explain the difference using impulse.
6. A firework at rest explodes into two fragments of mass 0.2 kg and
   0.3 kg. If the 0.2 kg fragment flies off at 12 m/s, find the velocity of
   the 0.3 kg fragment.

*(Full solutions intentionally omitted — work these with your notes, then
check against The Physics Classroom or a study partner.)*

## Real-World Applications

- **Vehicle safety engineering** — airbags, crumple zones, and seatbelts are
  all designed around the impulse-momentum theorem: extend Δt to reduce the
  force on occupants for the same required Δp.
- **Rocket propulsion** — rockets accelerate by expelling mass (exhaust) in
  one direction, gaining momentum in the opposite direction, the same
  physics as recoil and explosions.
- **Sports** — following through on a swing (baseball bat, golf club)
  increases the contact time with the ball, increasing the impulse and
  therefore the ball's final momentum for the same applied force.
- **Ballistic pendulum / forensics** — perfectly inelastic collision
  analysis is used to determine bullet speeds and reconstruct vehicle
  collision speeds from wreckage.
- **Packaging and shipping** — foam and air-cushioned packaging protect
  fragile items the same way airbags protect people: by increasing the
  stopping time to reduce peak impact force.

## Learning Resources

- [The Physics Classroom — Momentum and Collisions](https://www.physicsclassroom.com/class/momentum)
- [Khan Academy — Momentum and impulse](https://www.khanacademy.org/science/physics/linear-momentum)
- [PhET Simulation — Collision Lab](https://phet.colorado.edu/en/simulations/collision-lab)
- [HyperPhysics — Momentum concepts reference](http://hyperphysics.phy-astr.gsu.edu/hbase/linmom.html)

## Assessment Criteria

| Skill | Approaching | Meets | Exceeds |
|---|---|---|---|
| Momentum & impulse calculation | Computes p = mv but drops sign/direction, or confuses J with force alone | Correctly applies p = mv and J = FΔt = Δp with proper signs | Estimates average force from a Δt in a real-world safety scenario and explains the tradeoff |
| Conservation of momentum | Applies conservation in 1-D but struggles to set up 2-D component equations | Correctly solves 1-D and 2-D isolated-system collision/explosion problems | Solves multi-object or multi-stage problems, clearly justifying why the system is isolated |
| Elastic vs. inelastic classification | Assumes KE is always conserved, or can't identify which type a scenario describes | Correctly classifies elastic, inelastic, and perfectly inelastic collisions and states which quantities are conserved in each | Calculates and compares KE before/after to quantify energy loss, and explains where the energy went |
| Impulse & safety reasoning | States that airbags "reduce force" without connecting it to Δt | Correctly explains that increasing Δt for a fixed Δp reduces average force | Applies this reasoning quantitatively to compare two different collision times for the same event |

### Most-Missed-Question Focus (see `quiz.html`)

- Assuming kinetic energy is always conserved in a collision — it's
  **momentum** that's always conserved in an isolated system, not KE.
- Applying conservation of momentum to a single object instead of the total
  system (momentum is conserved for the system as a whole, not necessarily
  for each object individually).
- Mixing up which quantity is conserved in elastic vs. inelastic collisions.
- Forgetting that a longer collision time (Δt) reduces the average force
  needed to produce the same change in momentum (impulse-momentum theorem).
- Mishandling signs in head-on collisions with objects moving in opposite
  directions — momenta partially cancel rather than simply adding.
