# Unit 2 — Projectile Motion

**Standards:** Builds on NGSS HS-PS2-1 — applying force/motion relationships and vector math in two dimensions. [CDE NGSS reference](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp)

Projectile motion is kinematics in two dimensions: a horizontal motion and
a vertical motion happening at the same time, linked only by a shared
clock.

## Key concepts

- Independence of horizontal and vertical motion
- Velocity components: vₓ = v₀cosθ, v_y = v₀sinθ
- Time of flight, maximum height, and range
- The range-angle relationship and complementary angles
- Symmetry of the trajectory (time up = time down)
- Horizontal launches from a height (cliffs, tables)

## Cornell notes

| Cue | Notes |
|---|---|
| **Two Independent Motions** | Horizontal motion (constant velocity, a = 0) and vertical motion (constant acceleration, a = −g) happen simultaneously but never affect each other. |
| **Component Velocities** | vₓ = v₀cosθ, constant for the whole flight (no horizontal force). v_y = v₀sinθ − gt, changes continuously due to gravity. |
| **Time of Flight** | For launch and landing at the same height: t = 2v₀sinθ / g. |
| **Range** | R = v₀²sin(2θ) / g. Maximum range occurs at θ = 45° (equal launch/landing height). |
| **Max Height** | h_max = (v₀sinθ)² / (2g), reached when v_y = 0. |
| **Symmetry** | Time up = time down (equal launch/landing height); speed at a given height on the way up equals speed at that height on the way down. |

**Summary:** Treat horizontal and vertical motion as two separate 1D
kinematics problems that share only the variable t. Most errors come from
mixing vₓ and v_y into the same equation.

## Interactive quiz

Most-missed questions (the "dropped vs. thrown ball" race, what stays
constant at the peak, the 45°-for-max-range rule, and complementary-angle
range symmetry) are in [`../app/index.html`](../app/index.html) under
**Unit 2 · Projectile Motion**.

## Practice problems

1. A ball is launched at 25 m/s at 40° above the horizontal. Find its time of flight, maximum height, and range.
2. A stone is thrown horizontally at 15 m/s from a 20 m cliff. Find the time to land and the horizontal distance traveled.
3. A projectile has a range of 50 m when launched at 30°. What other launch angle (with the same speed) gives the same range?
4. Compare the maximum heights of two projectiles launched at the same speed, one at 30° and one at 60°. Which is higher, and by what factor?

## Resources

- [PhET: Projectile Motion simulation](https://phet.colorado.edu/en/simulations/projectile-motion) — vary angle, speed, and air resistance and measure the trajectory directly.
- [Khan Academy: Two-dimensional motion](https://www.khanacademy.org/science/physics/two-dimensional-motion) — video walkthroughs of component-based problem solving.
- [The Physics Classroom: Projectile Motion](https://www.physicsclassroom.com/class/vectors) — conceptual tutorials and practice.

## Real-world applications

- Sports trajectories: basketball free throws, javelin throw, long jump — optimal launch angles differ from 45° because of release height.
- Artillery and ballistics range calculations.
- Water fountain and sprinkler design (arc shaping for coverage area).
