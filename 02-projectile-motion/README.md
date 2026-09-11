# Unit 2 — Projectile Motion

What happens when you combine constant horizontal velocity with constant vertical acceleration: the physics behind anything thrown, launched, or kicked through the air.

## Key Concepts to Master

- Projectile motion is **two independent 1-D motions happening at the same time**: horizontal (constant velocity) and vertical (constant acceleration, g)
- Resolving an initial velocity into horizontal and vertical components: vₓ = v cos θ, v_y = v sin θ
- Horizontal motion has **zero acceleration** (no air resistance) — vₓ never changes
- Vertical motion is free fall: v_y changes at −g the entire flight
- Time of flight depends only on the vertical motion
- Range, R = vₓ · t (horizontal velocity times total flight time)
- Maximum height occurs when v_y = 0
- Trajectory is a parabola; motion is symmetric about the peak for equal launch/landing height
- Launch angle vs. range: 45° gives maximum range on level ground (for a given launch speed); complementary angles (e.g. 30° and 60°) give the same range

## Learning Objectives

By the end of this unit, students will be able to:

1. Decompose an initial velocity vector into horizontal and vertical components.
2. Explain why horizontal and vertical motions can be analyzed completely independently.
3. Calculate time of flight, maximum height, and horizontal range for projectiles launched horizontally and at an angle.
4. Correctly identify that horizontal velocity is constant throughout flight, while vertical velocity changes uniformly.
5. Predict how changing launch angle or launch speed affects range and height, and justify the 45° maximum-range result.
6. Solve for an unknown launch condition (e.g., initial speed) given a known range or height.

## Assessment Criteria

| Level | Description |
|---|---|
| Beginning | Treats projectile motion as one combined equation; cannot separate horizontal and vertical components. |
| Developing | Solves horizontally-launched projectile problems but struggles when launch angle is involved. |
| Proficient | Correctly solves both horizontal-launch and angled-launch problems; accurately sketches the trajectory. |
| Advanced | Solves problems with unequal launch/landing heights, explains the 45° range result with reasoning (not just recall), and connects to real projectile systems. |

**Mastery target:** ≥ 80% on the unit quiz (`quiz.html`), plus a completed practice set with all steps shown.

## Core Equations

| Quantity | Equation |
|---|---|
| Horizontal velocity component | vₓ = v cos θ (constant throughout flight) |
| Vertical velocity component (initial) | v_y = v sin θ |
| Vertical velocity at time t | v_y(t) = v sin θ − gt |
| Horizontal position | x(t) = vₓ t |
| Vertical position | y(t) = (v sin θ)t − ½gt² |
| Time to reach max height | t_peak = (v sin θ)/g |
| Max height | h_max = (v sin θ)²/(2g) |
| Time of flight (launch height = landing height) | t = 2(v sin θ)/g |
| Range (launch height = landing height) | R = (v² sin 2θ)/g |

## Practice Problems

1. A ball is launched horizontally at 12 m/s from a table 1.25 m high. How far from the base of the table does it land?
2. A soccer ball is kicked at 20 m/s at an angle of 30° above the ground. Find its time of flight, maximum height, and range.
3. Two projectiles are launched at the same speed, one at 20° and one at 70°. Which travels farther, and why?
4. An arrow is shot at 40 m/s at 45° above the horizontal from ground level. Find its maximum height and range.
5. A rock is thrown horizontally off a 20 m cliff and lands 30 m from the base. What was its initial (horizontal) speed?

<details>
<summary><strong>Answer key</strong> (click to expand)</summary>

1. Vertical: 1.25 = ½(9.8)t² → t ≈ 0.505 s. Horizontal: x = 12 × 0.505 ≈ 6.06 m
2. vₓ = 20cos30° ≈ 17.3 m/s, v_y = 20sin30° = 10 m/s. Time of flight t = 2(10)/9.8 ≈ 2.04 s. Max height = 10²/(2×9.8) ≈ 5.10 m. Range = 17.3 × 2.04 ≈ 35.3 m (or via R = v²sin2θ/g = 400×sin60°/9.8 ≈ 35.3 m)
3. They land at the same distance — 20° and 70° are complementary angles (sum to 90°), and sin(2×20°) = sin(2×70°) = sin40°, so R is identical for both. (Neither travels farther; the 70° launch goes higher and stays airborne longer, the 20° launch travels flatter and faster horizontally, but range is equal.)
4. h_max = (40sin45°)²/(2×9.8) = (28.28)²/19.6 ≈ 40.8 m. R = 40²sin90°/9.8 = 1600/9.8 ≈ 163.3 m
5. Vertical: 20 = ½(9.8)t² → t ≈ 2.02 s. Horizontal: v₀ = 30/2.02 ≈ 14.9 m/s
</details>

## Real-World Applications

- **Basketball free throws and 3-pointers** — optimal launch angle and arc for a given release height
- **Water fountain and sprinkler design** — nozzle angle controls spray range and height
- **Artillery and ballistics** — historically one of the first practical uses of projectile equations
- **Long jump and ski jump** — athletes optimize launch angle for horizontal distance
- **Firefighting hose streams** — angle adjustment to reach windows at different heights

## Suggested Learning Resources

- Khan Academy — "Two-dimensional motion" unit (physics course)
- The Physics Classroom — Projectile Motion tutorial
- PhET Interactive Simulations (University of Colorado Boulder) — *Projectile Motion* simulation
- OpenStax, *University Physics Volume 1* — Motion in Two and Three Dimensions chapter
- CrashCourse Physics (YouTube) — episode on projectile motion

## Deliverables Checklist

- [ ] Cornell notes completed (`cornell-notes.md`)
- [ ] Practice problems 1–5 solved with work shown
- [ ] `quiz.html` scored ≥ 80%
- [ ] One real-world application summarized in 3–4 sentences
