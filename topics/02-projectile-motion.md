# Unit 2 — Projectile Motion

> Two-dimensional motion under gravity alone: horizontal and vertical motion happen independently, at the same time.

## Learning Objectives

By the end of this unit, students will be able to:

- [ ] Explain why horizontal and vertical motion are independent for a projectile.
- [ ] Decompose an initial velocity into horizontal (vₓ) and vertical (v_y) components using trigonometry.
- [ ] Calculate time of flight, maximum height, and horizontal range for projectiles launched horizontally and at an angle.
- [ ] Analyze projectile motion using the same kinematic equations from Unit 1, applied separately to each axis.
- [ ] Predict how launch angle affects range, and identify the angle that maximizes range on level ground (45°).
- [ ] Solve projectile problems that include launching from and landing at different heights.

## Assessment Criteria

| Level | Criteria |
|---|---|
| Mastery (A) | Correctly separates x and y components, uses the right time in both axes, handles unequal launch/landing heights, and checks units/reasonableness. |
| Proficient (B) | Solves symmetric (same height) launch-angle problems reliably; needs support on horizontal-launch-from-a-height or asymmetric problems. |
| Developing (C) | Mixes horizontal and vertical variables (e.g., uses vₓ in a vertical equation), or forgets vₓ is constant. |
| Beginning (D/F) | Cannot decompose velocity into components. |

**How it's measured:** component-decomposition warm-ups, the "Most-Missed" interactive quiz, a "launch angle vs. range" lab (physical or PhET-based) with a written conclusion, and a unit test combining calculation with a conceptual justification question.

---

## Cornell Notes

### Cues / Questions | Notes

**Core idea: independence of motion**
Horizontal and vertical motions of a projectile are completely independent except that they share the same *time*. Horizontal velocity (vₓ) stays constant throughout the flight (no horizontal force, ignoring air resistance). Vertical velocity (v_y) changes due to gravity, exactly like free fall from Unit 1.

**Decomposing launch velocity at angle θ**
vₓ = v₀ cos θ
v_y = v₀ sin θ
These become your two independent "sub-problems": a constant-velocity problem in x, and a free-fall (constant-acceleration, a = −g) problem in y.

**Key equations**
Horizontal: x = vₓ t (constant velocity, a_x = 0)
Vertical: v_y = v₀ sin θ − gt
Vertical: y = (v₀ sin θ)t − ½gt²
At the peak: v_y = 0 (but a_y is still −g)

**Time of flight, max height, range (level ground, launch = landing height)**
- Time of flight: t = 2(v₀ sin θ)/g
- Max height: h = (v₀ sin θ)²/(2g)
- Range: R = (v₀² sin 2θ)/g

**Why 45° maximizes range**
sin(2θ) is maximized when 2θ = 90°, i.e., θ = 45°. Complementary angles (e.g., 30° and 60°) give the *same* range on level ground but different flight times and max heights — 60° goes higher and hangs longer; 30° is flatter and faster.

**Horizontal launches (e.g., off a cliff)**
v_y initial = 0. Use y = ½gt² to find time of flight from the height, then plug that t into x = vₓt for range. This is the special case θ = 0°.

### Summary
Every projectile problem is really two 1-D kinematics problems happening simultaneously, linked only by time. Solve the vertical motion first (it usually gives you the time), then use that time in the horizontal equation. Horizontal velocity never changes; only vertical velocity is affected by gravity.

---

## Most Often Missed Concepts (feeds the interactive quiz)

1. **Using v₀ (the full launch speed) instead of vₓ or v_y** in an equation — forgetting to decompose first.
2. **Assuming horizontal velocity decreases over flight** — it's constant (no horizontal force, ignoring drag).
3. **Forgetting that "time to fall" and "time to reach max height" are different** — time to max height is only half the total flight time on symmetric trajectories.
4. **Horizontal-launch problems: assuming v_y₀ ≠ 0** — for a purely horizontal launch, v_y starts at exactly 0.
5. **Complementary angle range confusion** — thinking 30° and 60° launches only differ in range, when their max height and flight time are actually quite different.
6. **Mishandling different launch/landing heights** — plugging into the "range formula" (which assumes equal heights) for a problem where the projectile lands lower or higher than it launched.
7. **Sign errors in the y-equation**, same as Unit 1 (forgetting the negative sign on g when "up" is positive).

---

## Practice Problems

**Basic**
1. A ball is thrown horizontally at 12 m/s from a 20 m tall cliff. Find the time of flight and horizontal distance traveled.
2. A projectile is launched at 30 m/s at 40° above the horizontal on level ground. Find its time of flight, max height, and range.

**Intermediate**
3. Compare the range of projectiles launched at 25°, 45°, and 65° with the same initial speed of 20 m/s. Explain the pattern you find.
4. A soccer ball is kicked at 18 m/s at 35°. How high does it rise, and what is its velocity (magnitude and direction) 1.0 s after launch?

**Challenge**
5. A stunt car launches off a 15 m tall ramp angled at 20° above horizontal, at 22 m/s, and lands on ground level 15 m below the ramp's edge. How far horizontally does it travel before landing?
6. A basketball player releases a shot at 7.0 m/s at 50° from a height of 2.2 m. The hoop is 3.05 m high and 4.5 m away horizontally. Does the shot go in (assuming it reaches the hoop's height at the right horizontal distance)?

---

## Learning Resources

- **Simulation:** PhET — *Projectile Motion* (phet.colorado.edu/en/simulations/projectile-motion) — adjust angle/speed and visualize the trajectory and component vectors in real time.
- **Video:** Khan Academy — "Two-dimensional projectile motion" (khanacademy.org/science/physics)
- **Video:** Flipping Physics — "Projectile Motion" series (YouTube) — strong on component decomposition.
- **Reading:** OpenStax *Physics* — Chapter 3, "Two-Dimensional Kinematics."
- **Practice bank:** The Physics Classroom — "Projectile Motion" (physicsclassroom.com)

## Real-World Applications

- **Sports** — basketball arcs, golf drives, and long-jump trajectories are all optimized using projectile-motion math (coaches use launch angle/speed data).
- **Ballistics and artillery** — historically one of the first practical uses of projectile motion equations.
- **Fire-fighting** — calculating water-cannon trajectories to reach upper floors of buildings.
- **Search and rescue / cargo drops** — aircraft compute drop points accounting for horizontal velocity carried into the fall.
- **Water fountains and irrigation** — nozzle angle and pressure are tuned using range and height equations.
