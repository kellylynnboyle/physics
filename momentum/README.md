# Unit 4: Momentum

Momentum extends Newton's Laws to interactions between objects — collisions,
explosions, and impacts — using conservation principles instead of tracking
forces moment-by-moment.

## Learning objectives

By the end of this unit, students will be able to:

1. Calculate momentum (p = mv) and impulse (J = FΔt = Δp).
2. Apply conservation of momentum to solve elastic and inelastic collision problems.
3. Distinguish elastic, inelastic, and perfectly inelastic collisions by what
   is/isn't conserved.
4. Explain when conservation of momentum applies (isolated systems) and when
   it doesn't (external forces present).
5. Analyze explosions/recoil as the reverse of a perfectly inelastic collision.

## Key concepts to master

- **Momentum**: p = mv, a **vector** — direction (sign) matters just as much as magnitude.
- **Impulse-momentum theorem**: J = FΔt = Δp. A given change in momentum can be
  achieved with a large force over a short time or a small force over a long
  time (this is why airbags and padded landings work).
- **Conservation of momentum**: total momentum of an **isolated system**
  (no net external force) is constant. In collision problems, "isolated"
  usually means we ignore external forces like friction during the brief
  collision — but a system with continuous external force (e.g., friction over
  a long slide) does **not** conserve momentum over that longer interval.
- **Elastic collision**: both momentum **and** kinetic energy are conserved
  (objects bounce apart).
- **Inelastic collision**: momentum is conserved, but kinetic energy is **not**
  (some converts to heat/sound/deformation).
- **Perfectly inelastic collision**: objects stick together and move with a
  common final velocity — momentum conserved, maximum KE lost.
- **Explosions/recoil**: initial momentum (often zero) is conserved; fragments
  fly apart with momenta that sum to the original total — kinetic energy
  actually *increases* (from stored chemical/elastic energy), which is fine
  because only momentum conservation is required, not energy conservation.

## Cornell notes

### Cues / Questions
- Is momentum a vector or a scalar? Why does that matter in a head-on collision?
- What's conserved in an elastic collision? An inelastic one?
- Why is momentum still conserved in an explosion even though KE increases?
- What does "impulse" mean, and how does it relate to airbags?
- When does conservation of momentum NOT apply?
- If two carts collide and stick together, do they always end up with equal
  final speed as if masses didn't matter?

### Notes
- Momentum's vector nature is the #1 source of sign errors: in a head-on
  collision, choose one direction positive and assign a **negative** momentum
  to anything moving the opposite way before adding them up.
- **Elastic**: p conserved AND KE conserved (idealized — billiard balls,
  atomic/subatomic collisions are good approximations).
- **Inelastic**: p conserved, KE **not** conserved (most real-world collisions
  — car crashes, thuds).
- **Perfectly inelastic**: the special inelastic case where objects stick and
  move together afterward: m₁v₁ + m₂v₂ = (m₁+m₂)v_f. This loses the *most*
  possible KE while still conserving momentum.
- **Momentum conservation requires an isolated system** — no net external
  force during the interval considered. During a brief collision, gravity and
  friction impulses are usually negligible compared to the huge internal
  collision force, so we treat the system as isolated *for that instant*, even
  though friction clearly acts before/after and isn't ignorable over a longer
  time.
- **Explosions**: momentum before = momentum after, even though KE increases
  (energy comes from a fuel/spring/chemical source, not from nowhere) — don't
  confuse "momentum conserved" with "energy conserved"; they're separate laws
  that happen to both apply in *elastic* collisions but not in general.
- **Impulse-momentum theorem** explains crumple zones/airbags/catching a ball
  "with give": increasing Δt for the same Δp reduces the average force.
- Equal-mass elastic collisions have a special result (velocities exchange),
  but this is **not general** — don't assume equal final speeds unless masses
  are equal and the collision is elastic.

### Summary (write in your own words)
Momentum conservation is a bookkeeping tool for isolated systems: total p
before = total p after, always (for an isolated system), regardless of
whether the collision is elastic. Kinetic energy is only guaranteed to be
conserved in the elastic case.

## Commonly missed question types (what the quiz targets)

1. Treating momentum as a scalar and adding magnitudes instead of using signs
   for direction in a head-on collision.
2. Assuming kinetic energy is always conserved in collisions.
3. Assuming momentum can't be conserved if kinetic energy increases (explosions).
4. Forgetting momentum conservation requires (approximate) isolation from
   external forces.
5. Assuming equal final velocities after any two objects collide and stick.
6. Confusing impulse (FΔt) with force alone.

## Practice problems

1. A 1200 kg car moving at 15 m/s east collides with a stationary 1500 kg car
   and they lock together. Find their common velocity after the collision.
   *(Answer: v_f ≈ 6.67 m/s east)*
2. A 0.15 kg baseball traveling at 40 m/s is hit back the other way at 50 m/s
   by a bat, in contact for 0.7 ms. Find the impulse and average force on the ball.
   *(Answer: J = Δp ≈ 13.5 N·s, F_avg ≈ 19,300 N)*
3. Two ice skaters, 50 kg and 70 kg, push off from rest against each other. If
   the 50 kg skater moves away at 3.0 m/s, find the 70 kg skater's velocity.
   *(Answer: ≈ 2.14 m/s in the opposite direction)*
4. A 2 kg ball moving at 4 m/s collides elastically head-on with a stationary
   2 kg ball. Predict, then verify, what happens to each ball's velocity after
   the collision. *(Answer: velocities exchange — the moving ball stops, the
   stationary ball moves off at 4 m/s, since masses are equal and the
   collision is elastic)*
5. Explain why a moving bumper car that crashes and sticks to a stationary one
   loses kinetic energy, but a firework exploding from rest gains kinetic
   energy — and why both scenarios still conserve momentum.

## Real-world applications

- **Car crash safety design**: crumple zones and airbags use the
  impulse-momentum theorem to reduce peak force.
- **Rocket propulsion**: recoil/reaction from expelled propellant (explosion-like momentum conservation).
- **Sports**: bat/racket/club collisions with a ball, tackling in football.
- **Ballistic pendulum**: classic method for measuring a bullet's speed using
  perfectly inelastic collision + energy conservation together.

## Learning resources

- [The Physics Classroom: Momentum and Its Conservation](https://www.physicsclassroom.com/class/momentum)
- [Khan Academy: Momentum and impulse](https://www.khanacademy.org/science/physics/linear-momentum)
- [PhET: Collision Lab simulation](https://phet.colorado.edu/en/simulation/collision-lab)
- [OpenStax College Physics, Ch. 8: Linear Momentum and Collisions](https://openstax.org/books/college-physics-2e/pages/8-introduction-to-linear-momentum-and-collisions)

## Assessment criteria

| Level | Descriptor |
|---|---|
| Beginning | Calculates momentum/impulse for single objects but struggles to set up conservation equations for two-object systems. |
| Developing | Solves standard perfectly-inelastic collision problems; struggles with elastic collisions or sign conventions in head-on cases. |
| Proficient | Correctly solves elastic and inelastic collision problems, applies correct sign conventions, distinguishes what's conserved in each case. |
| Advanced | Solves explosion/recoil problems, explains energy vs. momentum conservation distinctly, connects momentum concepts to real safety design. |

**Mastery target:** ≥ 80% on `quiz.html`, plus one correctly solved head-on
collision problem with signed velocities shown.
