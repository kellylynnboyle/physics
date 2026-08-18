# Section 2: Projectile Motion

## Overview
Projectile motion applies the kinematics from Section 1 to two dimensions
at once. The core insight that unlocks the whole topic: **horizontal and
vertical motion are independent of each other** and only share one thing —
time.

## Key Concepts to Master
- **Component decomposition**: for a launch angle θ and speed v,
  `vₓ = v·cos(θ)` (horizontal) and `v_y = v·sin(θ)` (vertical).
- **Horizontal motion**: constant velocity (`aₓ = 0`, ignoring air
  resistance) — `x = vₓ·t`.
- **Vertical motion**: constant acceleration `a_y = −g = −9.8 m/s²`, same
  equations as 1D free fall.
- **Independence of axes**: the *only* variable connecting horizontal and
  vertical motion is **time**. Horizontal speed never affects how long an
  object stays in the air; vertical speed never affects horizontal
  progress.
- **Time of flight**: for a symmetric trajectory (same launch/landing
  height), `t = 2v_y / g`. If launch height ≠ landing height, you must
  solve the vertical kinematics equation for t directly.
- **Maximum height**: occurs when `v_y = 0`; `h_max = v_y² / (2g)`.
- **Range**: `R = vₓ · t_total`. For launch/landing at the same height,
  `R = (v² sin(2θ)) / g` — note complementary angles (e.g., 30° and 60°)
  give the *same* range.
- **Horizontal launch (θ = 0)**: `v_y0 = 0`, so it falls exactly like a
  dropped object while moving forward at constant `vₓ`.

## Learning Objectives
Students will be able to:
1. Decompose an initial velocity vector into horizontal and vertical
   components.
2. Explain, in words, why horizontal and vertical motion don't affect
   each other.
3. Calculate time of flight, maximum height, and range for both
   horizontally-launched and angled projectiles.
4. Solve for launch angle or speed given a target range.
5. Correctly handle problems where launch height ≠ landing height (e.g.,
   launched from a cliff).

## Practice Problems

1. A ball is launched at 25 m/s at 40° above horizontal. Find the
   horizontal and vertical components of its initial velocity.
2. A stone is thrown horizontally at 15 m/s from a 20 m cliff. How far
   from the base of the cliff does it land? (Use g = 9.8 m/s².)
3. A projectile is launched at 30 m/s at 53° above horizontal on level
   ground. Find its time of flight, max height, and range.
4. Two projectiles are launched at the same speed, one at 35° and one at
   55°. Which travels farther (assuming level ground)? Why?
5. A basketball leaves a player's hand moving upward at 6 m/s (vertical
   component) while also moving horizontally at 4 m/s. How long is it in
   the air before returning to the same height it was released from?

### Answer Key
1. `vₓ = 25cos(40°) ≈ 19.2 m/s`; `v_y = 25sin(40°) ≈ 16.1 m/s`.
2. Vertical: `20 = ½(9.8)t² → t ≈ 2.02 s`. Horizontal: `x = 15 × 2.02 ≈
   30.3 m`. (Horizontal speed does not change the fall time.)
3. `v_y0 = 30sin(53°) ≈ 24.0 m/s`; `t = 2(24.0)/9.8 ≈ 4.89 s`;
   `h_max = (24.0)²/(2·9.8) ≈ 29.4 m`; `vₓ = 30cos(53°) ≈ 18.1 m/s`,
   `R = 18.1 × 4.89 ≈ 88.3 m`.
4. **They travel the same distance.** 35° and 55° are complementary
   (sum to 90°), and `sin(2θ)` is the same for complementary angles
   (`sin(70°) = sin(110°)`), so range is identical.
5. Symmetric trajectory: `t = 2v_y/g = 2(6)/9.8 ≈ 1.22 s`. (The
   horizontal speed of 4 m/s is irrelevant to this calculation.)

## Most Often Missed — see `quiz.html`
The quiz targets: assuming horizontal velocity changes during flight,
forgetting `v_y = 0` (not `v = 0`) at the peak, misapplying the symmetric
time-of-flight formula to unequal launch/landing heights, and the "heavier
projectiles fall faster" myth.

## Real-World Applications
- **Sports**: basketball free throws, football punts, golf drives — coaches
  use launch angle and speed to optimize range.
- **Ballistics & forensics**: investigators use projectile equations to
  reconstruct bullet or debris trajectories.
- **Firefighting**: calculating water arc from a hose to reach a target
  window.
- **Space & artillery history**: Galileo's original projectile motion work
  came from artillery range problems.

## Learning Resources
- [The Physics Classroom — Projectile Motion](https://www.physicsclassroom.com/class/vectors)
- [PhET — Projectile Motion simulation](https://phet.colorado.edu/en/simulations/projectile-motion)
- [Khan Academy — Two-dimensional motion](https://www.khanacademy.org/science/physics/two-dimensional-motion)
- [CK-12 — Projectile Motion FlexBook](https://www.ck12.org/physics/projectile-motion/)

## Assessment Criteria
- **Mastery**: independently decomposes vectors, handles unequal launch/
  landing heights, and explains the complementary-angle range result.
- **Proficient**: solves symmetric-trajectory problems correctly; needs
  support on cliff/unequal-height problems.
- **Developing**: can identify vₓ and v_y formulas but conflates horizontal
  and vertical motion (e.g., thinks a heavier or faster-thrown object falls
  in less time).
