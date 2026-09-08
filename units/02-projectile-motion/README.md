# Unit 2 — Projectile Motion

Two-dimensional motion under gravity alone. The key insight: horizontal and vertical motion are
completely independent of each other and can be analyzed separately using Unit 1's tools.

## Key Concepts

- **Independence of horizontal and vertical motion** — gravity only affects the vertical
  component; horizontal velocity is constant (ignoring air resistance) for the entire flight.
- **Resolving initial velocity into components** — `v₀ₓ = v₀ cos θ`, `v₀ᵧ = v₀ sin θ`, where θ is
  the launch angle above horizontal.
- **Vertical motion** behaves exactly like 1D free fall: `vᵧ = v₀ᵧ - gt`, `Δy = v₀ᵧt - ½gt²`.
- **Horizontal motion** is constant velocity: `Δx = v₀ₓ t`.
- **Time of flight** — for launch and landing at the same height,
  `t = 2v₀ᵧ / g`; for different heights, solve the vertical position equation for `t` directly.
- **Maximum height** — reached when `vᵧ = 0`: `h_max = v₀ᵧ² / (2g)`.
- **Range** — horizontal distance traveled: `R = v₀ₓ · t_flight`; for equal launch/landing
  height, `R = (v₀² sin 2θ) / g`, maximized at θ = 45°.
- **Trajectory shape** — a parabola, symmetric in time and height only when launch and landing
  heights are equal.
- **What projectile motion ignores** — air resistance, spin (Magnus effect), and Earth's
  curvature; these are idealizations, not universal truths.

## Learning Objectives

By the end of this unit, students will be able to:
1. Resolve a launch velocity into horizontal and vertical components.
2. Explain, using evidence, why horizontal velocity does not change during flight while vertical
   velocity does.
3. Calculate time of flight, maximum height, and range for projectiles launched at an angle,
   horizontally, and from an elevated platform.
4. Correctly identify vₓ and vᵧ at any point in the trajectory, including at the peak.
5. Analyze and sketch trajectories for different launch angles and compare ranges.

## Assessment Criteria

| Level | What it looks like |
|---|---|
| Exceeds | Solves projectiles launched from/landing at different heights, derives range formula, explains angle-pair symmetry (e.g., 30° and 60° give equal range) |
| Meets | Correctly splits velocity into components and solves standard time/height/range problems independently |
| Approaching | Sets up the components correctly but makes errors combining horizontal and vertical equations, or applies g to the wrong axis |
| Beginning | Cannot yet separate the two axes; treats the problem as 1D |

## Learning Resources

- PhET simulation: [Projectile Motion](https://phet.colorado.edu/en/simulations/projectile-motion) —
  adjustable angle/speed/height with real-time trajectory and data table
- Khan Academy: "Two-dimensional motion" unit
- The Physics Classroom: [Projectile Motion](https://www.physicsclassroom.com/class/vectors) tutorial
- OpenStax *Physics*, Chapter "Motion in Two Dimensions"

## Practice Problems

1. A ball is launched at `20 m/s` at `35°` above horizontal. Find its max height, time of flight,
   and range.
2. A ball rolls off a table `1.2 m` high with a horizontal speed of `3 m/s`. How far from the
   table base does it land, and what is its speed just before landing?
3. A soccer ball is kicked at `18 m/s`. What two launch angles give a range of `25 m`? (Hint:
   complementary angles.)
4. An arrow is shot horizontally from a cliff `80 m` high at `40 m/s`. Find total time of flight
   and horizontal distance traveled.
5. Compare, without calculating, the range of a projectile launched at 20° vs. 70° at the same
   speed — which is greater, and why?
6. A projectile is launched from ground level and lands on a rooftop `5 m` above the launch
   point. Set up (don't necessarily solve) the equation you'd use to find time of flight.

## Real-World Applications

- **Sports** — basketball free throws, golf drives, football punts; coaches use launch angle and
  speed to optimize distance/accuracy.
- **Engineering** — water fountain and sprinkler design, fire hose trajectory for reaching upper
  floors.
- **Military/historical** — artillery range tables were among the first practical uses of
  projectile motion mathematics.
- **Search and rescue** — dropping supplies from aircraft requires computing where a package
  released at a given altitude and airspeed will land.

## Most Often Missed (Quiz Focus)

See `quiz-app/index.html` → **Projectile Motion** tab. Targets these recurring misconceptions:
- Believing horizontal velocity decreases or becomes zero at the peak (only vertical velocity is
  zero there).
- Applying `g` to the horizontal component of motion.
- Assuming heavier projectiles fall/land faster than lighter ones (no air resistance).
- Assuming time to reach the peak always equals half the total flight time, even when landing
  height differs from launch height.
- Forgetting that at the peak, vertical velocity = 0 but vertical *acceleration* is still `-g`.
