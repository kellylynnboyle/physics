# Unit 2: Projectile Motion

Projectile motion is kinematics in two dimensions at once. The trick that
unlocks the whole unit: **split every problem into two independent
one-dimensional problems** — horizontal (constant velocity) and vertical
(free fall) — solved side by side and linked only by a shared time, t.

## Key Concepts to Master

- **Independence of horizontal and vertical motion** — the horizontal and
  vertical components of a projectile's motion don't affect each other.
  Gravity acts only vertically, so it never changes the horizontal velocity,
  and the horizontal velocity never affects how fast the object falls.
- **Horizontal motion — constant velocity** — ignoring air resistance, there
  is no horizontal acceleration (aₓ = 0), so vₓ = vₓ₀ the entire flight.
  Horizontal position: x = x₀ + vₓ₀t.
- **Vertical motion — free fall** — the vertical component behaves exactly
  like the free-fall motion from Unit 1: a = −g ≈ −9.8 m/s² (up positive),
  constant throughout the flight, including at the peak.
- **Resolving the launch velocity into components** — for a launch angle θ
  above the horizontal:
  - vₓ₀ = v₀ cos(θ)
  - vy₀ = v₀ sin(θ)
- **Time of flight** — determined *entirely* by the vertical motion (initial
  vertical velocity and launch/landing height). Horizontal speed has zero
  effect on how long the object is in the air.
- **Range** — for a projectile launched and landing at the same height:
  R = v₀² sin(2θ) / g. This formula does **not** apply when launch height ≠
  landing height (e.g., launched from a cliff or table) — those problems
  must be solved from the component equations directly.
- **Maximum height** — H = (v₀ sin θ)² / (2g), reached when the vertical
  velocity component momentarily equals zero (horizontal velocity is
  unchanged at that instant — it is *not* zero).
- **Trajectory shape** — the path traced by a projectile under gravity alone
  is a parabola, a direct consequence of constant horizontal velocity
  combined with constantly-changing (uniformly accelerating) vertical
  velocity.
- **Complementary launch angles** — any two angles that add to 90°
  (e.g., 30° and 60°) produce the same range on level ground, because
  sin(2θ) is the same for θ and (90° − θ). They differ in time of flight and
  maximum height, though — the steeper angle spends longer in the air.
- **Effect of launch angle on range** — range increases as θ increases from
  0° to 45°, then decreases as θ continues to 90°; 45° maximizes range on
  level ground (all else equal).
- **Horizontal launch vs. angled launch** — an object launched purely
  horizontally (off a cliff, table, or ledge) has vy₀ = 0, so it falls
  exactly like a dropped object in the vertical direction while still
  carrying its horizontal velocity forward the whole time.

## Learning Objectives

By the end of this unit, students will be able to:

1. Decompose an initial velocity vector into horizontal and vertical
   components given speed and launch angle.
2. Solve for time of flight, range, and maximum height for a projectile
   launched and landing at the same height.
3. Solve projectile problems where launch height and landing height differ
   (e.g., launched horizontally from a cliff), without misapplying the
   level-ground range formula.
4. Explain why horizontal and vertical motions are independent, and use
   that independence to justify why horizontal velocity never changes
   during flight (ignoring air resistance).
5. Correctly describe the velocity vector (magnitude and direction) at any
   point in a projectile's trajectory, including at the peak.
6. Predict how changing the launch angle affects range, time of flight, and
   maximum height, and identify the angle that maximizes range on level
   ground.

## Practice Problems

1. A ball is kicked at 20 m/s at 30° above the horizontal from level ground.
   Find its time of flight, range, and maximum height.
2. A stone is thrown horizontally at 15 m/s from the top of a 45 m cliff.
   Find how long it is in the air and how far from the base of the cliff it
   lands.
3. Two projectiles are launched at 25 m/s, one at 20° and one at 70°, from
   level ground. Compare their ranges. Which one stays in the air longer?
   Which one reaches a greater height?
4. A basketball player releases a shot at 7 m/s at 50° above horizontal.
   At the very top of its arc, what are the ball's horizontal and vertical
   velocity components?
5. A water balloon is launched at 18 m/s from a third-floor window 12 m
   above the ground, at an angle of 40° above horizontal. Find the time
   until it hits the ground. (Note: the level-ground range formula does not
   apply here — set up the vertical position equation directly.)
6. At what launch angle should a projectile be fired (on level ground) to
   achieve the same range as one fired at 25°? Explain using the
   complementary-angle relationship.

*(Full solutions intentionally omitted — work these with your notes, then
check against The Physics Classroom or a study partner.)*

## Real-World Applications

- **Basketball shot arcs** — coaches analyze launch angle and speed to find
  the release that maximizes the margin for error at the rim.
- **Long jump technique** — athletes aim for a launch angle noticeably below
  45° because human leg strength limits vₓ₀ far more than jump physics would
  otherwise suggest, so a lower angle that preserves horizontal speed wins.
- **Artillery and ballistics** — range tables for projectiles use exactly
  this component-based analysis (with corrections for air resistance and
  Earth's curvature at long range).
- **Water fountain design** — landscape architects choose nozzle angles and
  pressures (initial speed) to control how far and how high jets of water
  arc before landing in the basin.

## Learning Resources

- [The Physics Classroom — Projectile Motion](https://www.physicsclassroom.com/class/vectors)
- [Khan Academy — Two-dimensional projectile motion](https://www.khanacademy.org/science/physics/two-dimensional-motion)
- [PhET Simulation — Projectile Motion](https://phet.colorado.edu/en/simulations/projectile-motion)
- [HyperPhysics — Projectile motion concepts](http://hyperphysics.phy-astr.gsu.edu/hbase/traj.html)

## Assessment Criteria

| Skill | Approaching | Meets | Exceeds |
|---|---|---|---|
| Component decomposition | Confuses sin/cos when resolving v₀ into vₓ₀ and vy₀ | Correctly resolves launch velocity into components for any angle | Correctly re-derives components for non-standard angle references (e.g., angle from vertical) |
| Independence of motion | Assumes horizontal velocity changes during flight or affects fall time | States and applies the independence of horizontal and vertical motion | Explains *why* the independence holds (gravity is purely vertical) and predicts behavior in edge cases (e.g., zero-launch-angle drop) |
| Level-ground formulas | Applies R = v₀²sin(2θ)/g and H formulas correctly for equal launch/landing height | Also solves unequal-height problems from first principles | Derives the range/height formulas from the component equations without being given them |
| Velocity at the peak | Believes velocity is entirely zero at maximum height | Knows vertical velocity is zero, horizontal velocity is unchanged, at the peak | Correctly computes speed and direction of velocity at any point along the trajectory, not just the peak |

### Most-Missed-Question Focus (see `quiz.html`)

- Believing horizontal velocity changes (speeds up, slows down, or drops to
  zero) at some point during flight.
- Thinking velocity is *entirely* zero at the peak of the trajectory, rather
  than only the vertical component being zero.
- Assuming a larger horizontal launch speed changes the time of flight.
- Assuming an object launched horizontally from a height takes longer (or
  shorter) to hit the ground than an object simply dropped from the same
  height at the same instant — they land at the same time.
- Misapplying the level-ground range formula R = v₀²sin(2θ)/g to situations
  where the launch height and landing height differ.
