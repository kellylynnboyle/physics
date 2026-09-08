# Unit 4 — Momentum

Momentum extends Newton's laws to systems of interacting objects, especially collisions and
explosions, where forces act over very short times and are hard to measure directly.

## Key Concepts

- **Momentum** — `p = mv`, a vector. Direction matters as much as magnitude.
- **Impulse** — `J = F·Δt = Δp` (impulse-momentum theorem). A given change in momentum can be
  produced by a large force over a short time or a small force over a long time (why airbags,
  padding, and follow-through work).
- **Conservation of momentum** — for an *isolated system* (no net external force), total
  momentum before an interaction equals total momentum after: `Σp_before = Σp_after`.
- **Internal vs. external forces** — forces between objects *within* the system (e.g., two cars
  colliding) don't change total system momentum; forces from *outside* the system (e.g., road
  friction, an outside push) do.
- **Elastic collisions** — both momentum and kinetic energy are conserved (objects bounce apart
  without permanent deformation or heat loss).
- **Inelastic collisions** — momentum is conserved, but kinetic energy is not (some converts to
  heat, sound, deformation). A **perfectly inelastic** collision is the extreme case: objects
  stick together and move with a common final velocity.
- **Explosions** — the reverse of a perfectly inelastic collision: an object at rest splits into
  pieces that fly apart, with total momentum before (often zero) equal to total momentum after.
- **2D momentum conservation** — momentum is conserved independently along each axis (x and y
  components handled separately, just like in projectile motion).

## Learning Objectives

By the end of this unit, students will be able to:
1. Calculate momentum and impulse for an object, including sign/direction.
2. Apply the impulse-momentum theorem to relate force, time, and change in momentum.
3. Apply conservation of momentum to solve 1D and 2D collision and explosion problems.
4. Classify a collision as elastic, inelastic, or perfectly inelastic, and correctly state which
   quantities are conserved in each case.
5. Explain, using momentum and impulse, why safety features (airbags, crumple zones, padding)
   reduce injury.

## Assessment Criteria

| Level | What it looks like |
|---|---|
| Exceeds | Solves 2D collision problems with vector components, correctly determines whether a collision is elastic by checking KE before/after, explains real safety systems quantitatively |
| Meets | Solves standard 1D collision/explosion problems using conservation of momentum independently, with correct signs |
| Approaching | Sets up conservation of momentum but drops a sign, or incorrectly assumes kinetic energy is conserved in an inelastic collision |
| Beginning | Can state `p = mv` but cannot yet apply conservation of momentum to a two-object system |

## Learning Resources

- PhET simulation: [Collision Lab](https://phet.colorado.edu/en/simulations/collision-lab)
- Khan Academy: "Momentum and impulse" unit
- The Physics Classroom: [Momentum and Its Conservation](https://www.physicsclassroom.com/class/momentum) tutorial
- OpenStax *Physics*, Chapter "Linear Momentum and Collisions"

## Practice Problems

1. A `0.15 kg` baseball traveling at `40 m/s` is hit back at `50 m/s` in the opposite direction.
   Find the impulse delivered by the bat, and if contact time is `0.7 ms`, find the average force.
2. A `1000 kg` car moving at `20 m/s` collides with a stationary `1500 kg` car, and they stick
   together. Find their common velocity after the collision. Is this collision elastic?
3. Two identical `2 kg` carts on a frictionless track: cart A moves at `3 m/s` toward stationary
   cart B. After an elastic collision, find each cart's final velocity (use elastic-collision
   relations or momentum + energy conservation together).
4. A `60 kg` skater at rest pushes off a `90 kg` skater, also at rest. If the 60 kg skater moves
   backward at `4 m/s`, find the other skater's velocity.
5. A firework at rest explodes into two pieces of unequal mass (`2 kg` and `3 kg`). If the `2 kg`
   piece moves at `12 m/s`, find the velocity of the `3 kg` piece.
6. A car crashes into a wall and stops in `0.15 s`. Compare the average force if the car has a
   crumple zone (same Δv, longer Δt) vs. a rigid frame (same Δv, much shorter Δt).

## Real-World Applications

- **Vehicle safety** — crumple zones, airbags, and seatbelts all work by extending the time of a
  collision to reduce peak force (impulse-momentum theorem).
- **Sports** — bat/racket "follow-through" increases contact time and force delivered to the
  ball; boxing gloves and padding reduce force by extending impact time.
- **Rocketry** — propulsion is a continuous "explosion," conserving momentum between expelled
  exhaust and the rocket.
- **Ballistics/forensics** — investigators use momentum conservation to reconstruct collisions
  (e.g., vehicle crash analysis) from final positions and damage.

## Most Often Missed (Quiz Focus)

See `quiz-app/index.html` → **Momentum** tab. Targets these recurring misconceptions:
- Assuming kinetic energy is always conserved in a collision (only true for elastic collisions).
- Forgetting direction/sign when adding momenta of objects moving toward each other.
- Believing a heavier object always "has more momentum" regardless of its velocity.
- Confusing impulse (a change in momentum, N·s) with force (N).
- Applying conservation of momentum to a system with a significant external force (e.g., ignoring
  friction from the ground/track when it isn't actually negligible).
