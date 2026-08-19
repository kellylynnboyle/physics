# Unit 2: Projectile Motion

Projectile motion is 2-D kinematics: an object launched into the air moves
under gravity alone (no air resistance in this course), and its horizontal
and vertical motions can be analyzed **completely independently**.

## Key concepts to master

- **Independence of motion** — horizontal (x) and vertical (y) motion do not
  affect each other. The only thing they share is time, t.
- **Horizontal motion**: constant velocity (a_x = 0), since gravity acts only
  vertically. v_x = v_i cos(θ), constant throughout the flight.
- **Vertical motion**: constant acceleration a_y = −g. v_y = v_i sin(θ) − gt.
  This is just 1-D free-fall kinematics from Unit 1, applied to the y-direction.
- **Components** — always start by breaking the initial velocity into
  v_ix = v_i cos(θ) and v_iy = v_i sin(θ).
- **At maximum height**: v_y = 0, but v_x is unchanged (never zero, unless
  launched straight up). Velocity is not zero at the top — only its
  vertical component is.
- **Key equations (level ground launch/landing)**
  - Time of flight: t = (2 v_i sin θ) / g
  - Max height: h_max = (v_i² sin²θ) / (2g)
  - Range: R = (v_i² sin 2θ) / g
- **Complementary angles** (e.g. 30°/60°, 20°/70°) give the **same range**
  on level ground, because sin(2θ) = sin(180° − 2θ).
- **Launched from a height** (off a cliff, table, etc.) — the up/down trip
  is no longer symmetric; you must solve the y-equation as a quadratic in t
  using the full displacement (which is negative if landing below launch height).

## Learning objectives

By the end of this unit, students should be able to:
1. Explain why horizontal and vertical motion are analyzed independently.
2. Decompose initial velocity into x- and y-components from an angle.
3. Calculate time of flight, max height, and range for level-ground launches.
4. Solve projectiles launched from a height (non-level launch/landing).
5. Explain why complementary launch angles give equal range.

## Learning resources

- **Simulation:** PhET — [Projectile Motion](https://phet.colorado.edu/en/simulations/projectile-motion) (adjust angle/speed, see trajectory and data table live)
- **Video:** Khan Academy — [Two-dimensional motion](https://www.khanacademy.org/science/physics/two-dimensional-motion) (projectile motion series)
- **Video:** The Organic Chemistry Tutor — search "Projectile Motion Physics Problems" on YouTube
- **Reference:** The Physics Classroom — [Projectile Motion tutorial](https://www.physicsclassroom.com/class/vectors)
- **Reference:** OpenStax College Physics, Chapter 3 (Two-Dimensional Kinematics)

## Real-world applications

- Sports: basketball free throws, golf drives, and long jump all rely on
  launch-angle/range tradeoffs (45° is optimal only when launch and landing
  heights are equal).
- Ballistics and artillery: military and forensic science use projectile
  equations to determine launch parameters from impact points.
- Water fountains and firefighting hoses: engineers calculate nozzle angle
  for maximum reach.
- Space launches: initial ascent phases use the same independence-of-motion
  principles before orbital mechanics take over.

## Practice problems

1. A ball is launched at 20 m/s at 30° above horizontal from level ground. Find the time of flight, max height, and range.
2. A stone is thrown horizontally at 8 m/s from a 20 m tall cliff. Find the time to hit the ground and the horizontal distance traveled.
3. A projectile is launched at 45° with a range of 40 m on level ground. Find the initial speed.
4. Show that launch angles of 25° and 65° give the same range for the same initial speed (use v_i = 18 m/s to verify numerically).
5. A long jumper leaves the ground at 8 m/s at an angle of 20°. How far do they jump horizontally (treat as level-ground projectile)?
6. A ball is kicked from ground level at 15 m/s at 50° above horizontal. What is its velocity (magnitude and direction) at t = 1.0 s?

**Answer key:** t ≈ 2.04 s, h_max ≈ 5.1 m, R ≈ 35.3 m (Q1) · t ≈ 2.02 s, x ≈ 16.2 m (Q2) · v_i ≈ 19.8 m/s (Q3) · both give R ≈ 26.4 m (Q4) · R ≈ 4.19 m (Q5) · v_x = 9.6 m/s, v_y ≈ 1.7 m/s → |v| ≈ 9.8 m/s at ≈ 10° above horizontal (Q6)

## Common mistakes (what the quiz targets)

- Using the same velocity for both x- and y-components (forgetting to decompose)
- Thinking horizontal velocity is zero at the top of the trajectory
- Using level-ground time-of-flight/range formulas for a launch from a height
- Forgetting acceleration only acts vertically (using −g in x-direction equations)
- Assuming 45° always gives maximum range (only true when launch = landing height)
- Mixing up sin and cos when finding components

See `cornell-notes.md` for guided notes and `quiz.html` for the interactive quiz.
