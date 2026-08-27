# Unit 4: Momentum

Momentum is the "quantity of motion" an object carries, and — unlike energy —
it's a vector, so direction is baked into every problem you'll solve. This
unit builds on Unit 3 (Newton's Laws): momentum and impulse are really just
Newton's Second Law rewritten in terms of force *and time*, which is why
momentum is the right tool for anything short, sharp, and violent — bat hits
ball, car hits wall, rocket fires exhaust. Get comfortable with "conservation
applies to the *system*, not to one object," and collisions stop being
mysterious.

## Learning Objectives

By the end of this unit, students should be able to:

- Define momentum `p = mv` as a vector and compute it, including direction,
  for one- and two-dimensional motion.
- State and apply conservation of momentum correctly to an **isolated
  system** (no net external force), not to a single object.
- Derive and apply the impulse-momentum theorem `J = FΔt = Δp`, including
  reading impulse as the area under a force–time graph.
- Distinguish elastic, inelastic, and perfectly inelastic collisions by what
  each does and does not conserve.
- Solve 1D and 2D collision and explosion/recoil problems by conserving
  momentum component-by-component.

---

## Cornell Notes

### Key Concepts / Cues → Notes

| Cue / Question | Notes |
|---|---|
| What is **momentum**? | `p = mv` — mass times velocity. It's a **vector**: it has the same direction as velocity. Units: kg·m/s. Two objects can have equal *magnitude* of momentum but be moving in opposite directions, in which case their momenta are opposite, not equal. |
| **"A heavier object always has more momentum."** True or false? | False. Momentum depends on *both* mass and velocity. A 2000 kg truck parked at rest has zero momentum; a 0.1 kg bullet at 400 m/s has `p = 40 kg·m/s`. You cannot compare momentum from mass alone — you need both numbers. |
| What does **conservation of momentum** actually require? | Total momentum of an **isolated system** (net external force ≈ 0) is constant: `p_total, before = p_total, after`. It does NOT mean any single object's momentum is conserved — objects in the system freely exchange momentum with each other via internal forces (Newton's 3rd Law pairs); only the *system total* stays fixed. |
| Why do we usually ignore friction/gravity in collision problems? | We don't ignore them — we argue the collision happens so fast (milliseconds) that the *impulse* from external forces like gravity or friction during that instant is negligible compared to the huge internal contact force. That's what makes momentum conservation a good approximation even though the system is never perfectly isolated. |
| What is **impulse**? | `J = FΔt`, and by Newton's 2nd Law (`F = Δp/Δt`), impulse equals the change in momentum: `J = Δp = mΔv`. Same units as momentum (kg·m/s, or equivalently N·s). |
| How do you read a **force–time graph**? | The **area under the curve** is the impulse delivered — same logic as area under a v–t graph giving displacement. A tall, narrow spike (airbag-less collision) and a short, wide bump (airbag collision) can deliver the *same* impulse (same Δp) with very different peak force — that's the whole point of crumple zones and airbags: stretch Δt to shrink peak F. |
| **Elastic** vs. **inelastic** collisions — what's conserved? | Elastic: momentum **and** kinetic energy are both conserved (no lasting deformation, no heat/sound generated — billiard balls are close to this). Inelastic: momentum is conserved, but kinetic energy is **not** — some KE converts to heat, sound, and deformation. **Perfectly inelastic**: the special case where objects stick together and move with one common final velocity; this loses the *maximum possible* KE for that collision while still conserving momentum. |
| How do you handle **2D collisions**? | Momentum conservation applies **separately to each axis**: `Σp_x,before = Σp_x,after` and `Σp_y,before = Σp_y,after`. You cannot just add magnitudes of momentum vectors that point in different directions — break every velocity into x- and y-components first, conserve each component independently, then recombine (Pythagorean theorem/`tan θ`) if you need a final magnitude and direction. |
| What happens in an **explosion or recoil**? | If the system starts at rest (or with some known momentum), total momentum afterward must still equal the total momentum before — often zero. If a cannon (initially at rest) fires a shell forward, the cannon must recoil backward with equal and opposite momentum so the *system* total stays zero: `m_shell·v_shell + M_cannon·v_cannon = 0`. |

### Summary (write in your own words after class)

_Momentum is a vector bookkeeping tool, `p = mv`, and the one rule that
matters most is that conservation belongs to the whole isolated system, not
to any object by itself — momentum sloshes between objects during a
collision but the total stays fixed. Impulse (`J = FΔt = Δp`) is how force
over time changes that momentum, which is why the same Δp can come from a
huge force over a tiny time or a small force over a longer time. Elastic
collisions conserve kinetic energy too; inelastic ones don't, even though
momentum is conserved in both. In two dimensions, conserve x and y
separately — never add vector momenta like plain numbers._

---

## Commonly Missed Concepts (build your quiz around these)

1. **Treating momentum as a scalar.** Students add magnitudes of momentum
   without regard to direction, especially in head-on or 2D collisions,
   instead of assigning signs/components first.
2. **Applying conservation of momentum to a single object.** A common error
   is saying "momentum is conserved for the ball" — conservation applies to
   the *total* momentum of an isolated system of two or more objects, not to
   one object experiencing an external or internal force alone.
3. **"A heavier object always has more momentum."** Ignores velocity —
   momentum requires both mass *and* velocity; a light, fast object can have
   more momentum than a heavy, slow one.
4. **Confusing elastic and inelastic collisions.** Students assume kinetic
   energy is conserved in *all* collisions, or that "inelastic" always means
   objects stick together (that's specifically *perfectly* inelastic —
   general inelastic collisions can separate and still lose KE).
5. **Forgetting that momentum, not kinetic energy, is what's always
   conserved in a collision** (as long as the system is isolated) — KE
   conservation is the exception (elastic only), not the rule.
6. **Misreading a force–time graph.** Students read the *height* (peak
   force) of an F–t graph as "the impulse," instead of the *area under the
   curve*.
7. **Adding vector momenta in 2D like scalars**, e.g., simply summing speeds
   or momentum magnitudes for two objects that collide at an angle, instead
   of conserving the x-component and y-component of momentum independently.
8. **Not recognizing recoil/explosion problems as momentum conservation.**
   Students think a system that starts at rest and "explodes" apart has no
   momentum to conserve, missing that total momentum must still sum to zero
   (or whatever it was) afterward, which is exactly how recoil speed is
   calculated.

---

## Practice Problems

1. A 0.50 kg ball moving at `+6.0 m/s` collides with a 1.0 kg ball at rest.
   After the collision, the 0.50 kg ball moves at `−2.0 m/s`. Find the
   velocity of the 1.0 kg ball.
   *(Answer: Using momentum conservation, `0.50(6.0) + 1.0(0) = 0.50(−2.0) +
   1.0(v)` → `3.0 = −1.0 + 1.0v` → `v = +4.0 m/s`.)*
2. A 1200 kg car traveling at `20 m/s` crashes into a wall and comes to rest
   in `0.15 s`. Find (a) the impulse delivered to the car and (b) the
   average force exerted on the car by the wall.
   *(Answer: (a) `J = Δp = m(v_f − v_i) = 1200(0 − 20) = −24{,}000 kg·m/s`
   (24,000 N·s in magnitude, directed opposite the car's motion); (b)
   `F = J/Δt = −24{,}000 / 0.15 ≈ −1.6 × 10⁵ N`.)*
3. Two identical 0.20 kg carts undergo a perfectly inelastic collision. Cart
   A moves at `+3.0 m/s`; Cart B is at rest. Find their common final
   velocity, and determine how much kinetic energy was lost.
   *(Answer: momentum: `0.20(3.0) = 0.40(v)` → `v = +1.5 m/s`. KE_before =
   `½(0.20)(3.0)² = 0.90 J`. KE_after = `½(0.40)(1.5)² = 0.45 J`. KE lost =
   `0.45 J` — half the kinetic energy is lost to deformation/heat/sound,
   even though momentum is fully conserved.)*
4. A 3.0 kg object moving at `+4.0 m/s` along the x-axis collides with a
   5.0 kg object moving at `+1.0 m/s` along the y-axis; they stick together.
   Find the magnitude and direction of their common final velocity.
   *(Answer: `p_x = 3.0(4.0) = 12 kg·m/s`, `p_y = 5.0(1.0) = 5.0 kg·m/s`.
   Total mass = 8.0 kg. `v_x = 12/8.0 = 1.5 m/s`, `v_y = 5.0/8.0 =
   0.625 m/s`. Magnitude: `v = √(1.5² + 0.625²) ≈ 1.6 m/s`, at
   `θ = tan⁻¹(0.625/1.5) ≈ 23°` from the x-axis toward the y-axis.)*
5. A 60 kg astronaut at rest in deep space (isolated system, total momentum
   zero) throws a 2.0 kg tool away from the space station at `+8.0 m/s`
   relative to the station. Find the astronaut's recoil velocity.
   *(Answer: `0 = 2.0(8.0) + 60(v)` → `v = −16/60 ≈ −0.27 m/s` — the
   astronaut drifts backward, opposite the thrown tool, so the total
   momentum of the astronaut + tool system stays zero.)*

## Real-World Applications

- **Car safety design (crumple zones and airbags):** both work by
  increasing the collision time `Δt` for the same required `Δp`, which
  lowers the peak force `F` on occupants — a direct application of
  `J = FΔt`.
- **Rocket propulsion and recoil:** rockets (and guns, and garden hoses)
  push mass one way to accelerate themselves the other way, conserving
  total momentum of the (rocket + exhaust) system, which starts and stays
  net unchanged aside from external forces like gravity.
- **Sports collisions:** billiards/pool approximate elastic collisions;
  tackling in football is closer to a perfectly inelastic collision (players
  "stick together" briefly and move with a shared velocity).
- **Ballistic pendulum:** used historically (and still in physics labs) to
  measure a bullet's speed by firing it into a hanging block and using
  perfectly inelastic collision + energy conservation (in that order,
  across two separate stages) to work backward to the bullet's velocity.
- **Rocket-powered and thruster docking maneuvers:** spacecraft use small
  recoil "puffs" of propellant to change momentum precisely, since there's
  nothing external to push against in space.

## Learning Resources

- **Video:** Khan Academy — "Momentum and impulse" unit (linear momentum,
  impulse, conservation of momentum, elastic and inelastic collisions)
- **Video:** The Organic Chemistry Tutor — "Momentum and Collisions"
  playlist
- **Simulation:** PhET *Collision Lab* — set up 1D and 2D elastic/inelastic
  collisions and watch momentum and KE totals update live
- **Simulation:** PhET *Ballistic Nerf Blaster / Projectile Motion* (for
  cross-referencing velocity components used in 2D momentum problems)
- **Reading:** OpenStax *University Physics Vol. 1*, Ch. 9 (Linear Momentum
  and Collisions) — free PDF/online textbook
- **Practice bank:** The Physics Classroom — "Momentum and Its Conservation"
  concept builders and problem sets

## Assessment Criteria (instructor rubric)

| Criterion | Meets expectations |
|---|---|
| Vector treatment of momentum | Consistently assigns direction/sign to momentum and velocity; never adds momenta from different directions as plain magnitudes |
| System vs. object reasoning | Correctly identifies the isolated system before applying conservation of momentum; does not apply conservation to a single object in isolation |
| Elastic vs. inelastic distinction | Correctly identifies whether kinetic energy is conserved for a given collision type and explains where "lost" KE goes in inelastic cases |
| Impulse-momentum theorem | Applies `J = FΔt = Δp` correctly, including computing impulse as the area under a force–time graph |
| 2D collision technique | Conserves momentum component-by-component (x and y separately) rather than combining vector magnitudes directly |
| Quiz mastery | Scores ≥ 80% on `quiz.html`, including correct explanations for at least 2 previously-missed questions on retake |
