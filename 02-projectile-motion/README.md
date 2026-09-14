# Unit 2 — Projectile Motion

Projectile motion combines everything from Unit 1 with one key trick: treat the
horizontal and vertical directions as **two independent 1-D kinematics problems**
that share the same clock.

## Key Concepts to Master

- **Independence of horizontal and vertical motion** — gravity only affects the vertical component
- **Horizontal velocity is constant** throughout the flight (assuming no air resistance): `vₓ = v₀ cos θ`
- **Vertical motion is free fall**: `v_y = v₀ sin θ − gt`, with `a_y = -g = -9.8 m/s²`
- **Resolving an initial velocity into components** using launch angle θ
- **Time of flight**, especially for symmetric trajectories (launch height = landing height): `t = 2v₀ sin θ / g`
- **Maximum height**: `h_max = (v₀ sin θ)² / (2g)`
- **Range**: `R = v₀² sin(2θ) / g` (only valid when launch and landing heights are equal)
- **The trajectory is a parabola**, and it is symmetric in time and height about the peak
- **At the peak**, `v_y = 0` but `vₓ ≠ 0` — the object is still moving
- **Launching from a height** (e.g., off a cliff or table) requires the full quadratic, not the simple range formula

## Learning Objectives

By the end of this unit, students should be able to:

1. Resolve an initial velocity vector into horizontal and vertical components given speed and angle.
2. Explain, using words and equations, why horizontal and vertical motion are independent.
3. Calculate time of flight, maximum height, and range for a projectile launched and landing at the same height.
4. Solve projectile problems where the object is launched horizontally from a height (e.g., a ball rolling off a table).
5. Correctly identify what is/isn't true at the peak of the trajectory (vy = 0, vx ≠ 0, acceleration ≠ 0).
6. Justify why 45° gives maximum range on level ground, and predict how range changes for complementary angles (e.g., 30° vs. 60°).

## Study Materials in This Folder

- [`cornell-notes.md`](./cornell-notes.md) — guided Cornell notes on projectile motion.
- [`quiz.html`](./quiz.html) — interactive quiz of the most commonly missed projectile-motion questions.

## Suggested Learning Resources

- Khan Academy: [Two-dimensional motion](https://www.khanacademy.org/science/physics/two-dimensional-motion)
- The Physics Classroom: [Projectile Motion](https://www.physicsclassroom.com/class/vectors)
- PhET simulation: [Projectile Motion](https://phet.colorado.edu/en/simulations/projectile-motion) — vary angle/speed and watch trajectory, range, and height update live
- OpenStax College Physics, Chapter 3 (Two-Dimensional Kinematics)

## Practice Problems

1. A ball is launched at `20 m/s` at `30°` above horizontal from level ground. Find its time of flight, max height, and range.
2. A stone rolls off a table `1.2 m` high with a horizontal velocity of `3.0 m/s`. Find how far from the table base it lands.
3. Two balls are launched at the same speed at `40°` and `50°`. Which lands farther away, and why?
4. A football is kicked at `25 m/s` at `50°`. Find its velocity components at the instant it lands (magnitude and direction).
5. At what point(s) in a projectile's flight is its speed at a minimum? Explain why.

## Real-World Applications

- **Sports**: basketball free throws, soccer/football kicks, golf drives, long jump takeoff angle
- **Ballistics and artillery** trajectory calculations
- **Firefighting**: aiming water cannons/hoses onto a target at a distance and height
- **Space**: parabolic flight used to simulate microgravity ("vomit comet" aircraft)
- **Engineering**: water fountain nozzle design, theme park water/ball launchers

## Assessment Criteria

See the shared rubric in [`../ASSESSMENT.md`](../ASSESSMENT.md). For this unit, mastery means:

- ✅ 80%+ on the interactive quiz (`quiz.html`)
- ✅ Can correctly split an initial velocity into `vₓ` and `v_y` components without prompting
- ✅ Solves both "launched and landing at same height" and "launched from a height" problem types
- ✅ Can explain in one or two sentences why horizontal and vertical motion are treated independently
