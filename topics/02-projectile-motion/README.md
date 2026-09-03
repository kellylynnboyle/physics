# Topic 2: Projectile Motion

> Motion under gravity alone, launched at an angle — analyzed as two independent, simultaneous one-dimensional motions.

**Files in this module:** [`cornell-notes.md`](./cornell-notes.md) · [`quiz.html`](./quiz.html) (open in any browser)

---

## Key Concepts to Master

- **Independence of horizontal and vertical motion** — the horizontal (x) and vertical (y) components of a projectile's motion are completely independent of each other except that they share the same elapsed time.
- **Horizontal motion: constant velocity** — no horizontal forces act (ignoring air resistance), so vₓ = v₀ₓ is constant for the entire flight; horizontal acceleration is zero.
- **Vertical motion: constant acceleration** — gravity acts continuously, so the vertical component behaves exactly like one-dimensional free fall, with a = -g (-9.8 m/s²).
- **The trajectory is a parabola** — the combination of constant-velocity horizontal motion and constant-acceleration vertical motion traces a parabolic path.
- **Vector decomposition of initial velocity** — a launch speed v₀ at angle θ above the horizontal must be broken into components before any equation is applied: v₀ₓ = v₀cosθ and v₀ᵧ = v₀sinθ.
- **Symmetry of the trajectory** (level launch and landing) — time to rise equals time to fall; speed at a given height on the way up equals speed at that height on the way down; the landing speed equals the launch speed.
- **At the peak of the trajectory** — vertical velocity is momentarily zero (vᵧ = 0), but horizontal velocity is unchanged and nonzero; the projectile is not "stopped," it is moving purely horizontally.
- **Effect of launch angle on range** — for a given launch speed on level ground, range is maximized at a 45° launch angle; complementary angles (e.g., 30° and 60°) produce equal ranges but different flight times and max heights.
- **Horizontal launches** — an object launched (or rolling off a ledge) with purely horizontal velocity has v₀ᵧ = 0, so its fall time depends only on the drop height, not on how fast it's moving horizontally.

## Key Equations (projectile launched at angle θ, level ground unless noted)

| Equation | Solves for | Notes |
|---|---|---|
| `v₀ₓ = v₀cosθ` , `v₀ᵧ = v₀sinθ` | initial velocity components | do this decomposition first, before anything else |
| `x = x₀ + v₀ₓt` | horizontal position | horizontal velocity never changes: `vₓ = v₀ₓ` always |
| `y = y₀ + v₀ᵧt − ½gt²` | vertical position | same free-fall form as 1-D kinematics |
| `vᵧ = v₀ᵧ − gt` | vertical velocity at time t | vₓ is unaffected and stays constant |
| `t = 2v₀sinθ / g` | time of flight | level launch and landing only |
| `R = v₀²sin(2θ) / g` | range | level launch and landing only; maximized at θ = 45° |
| `h = (v₀sinθ)² / (2g)` | maximum height | occurs at t = (time of flight)/2 for a level launch |
| `t = √(2h / g)` | fall time from height h | for a purely horizontal launch, where v₀ᵧ = 0 |

---

## Learning Objectives

By the end of this module, students will be able to:

1. Decompose an initial velocity vector into horizontal and vertical components using v₀cosθ and v₀sinθ.
2. Explain why horizontal velocity stays constant while vertical velocity changes at rate -g, and justify this from the independence of the two motions.
3. Calculate the time of flight, maximum height, and range for a projectile launched at an angle on level ground.
4. Solve horizontal-launch ("falling off a ledge") problems by separating the constant-time-of-fall vertical motion from the horizontal distance traveled.
5. Predict and explain how changing launch angle affects range, time of flight, and maximum height, including why complementary angles give equal range.
6. Correctly describe the velocity vector (both components) at any point in a projectile's flight, including the peak.

## Assessment Criteria

| Level | Criteria |
|---|---|
| **Mastery (4)** | Solves multi-part angled-launch and horizontal-launch problems correctly, decomposes vectors without prompting, and correctly explains the velocity components at the peak and at landing. |
| **Proficient (3)** | Solves standard range/height/time-of-flight problems correctly; minor errors in vector decomposition or sign convention that don't change the method. |
| **Developing (2)** | Applies projectile equations with help identifying which component (x or y) a quantity belongs to; sometimes treats horizontal and vertical velocity as one combined scalar. |
| **Beginning (1)** | Cannot decompose the initial velocity independently; believes horizontal velocity changes during flight or that heavier projectiles fall faster. |

**Suggested evidence:** homework problem sets, the interactive quiz (`quiz.html`) scored to 80%+, a trajectory-sketching exit ticket showing velocity vectors at three points in flight, and one free-response multi-step problem on the unit test.

---

## Most Often Missed Ideas (misconceptions to target)

1. **"Horizontal velocity changes during flight."** With no horizontal forces (ignoring air resistance), vₓ is constant from launch to landing — only vᵧ changes.
2. **"Heavier projectiles fall differently than lighter ones."** Vertical acceleration is -g for all projectiles regardless of mass, exactly as in one-dimensional free fall.
3. **Adding horizontal and vertical velocity as scalars** instead of treating them as perpendicular vector components — e.g., writing "v = vₓ + vᵧ" instead of using vector addition (or keeping the components separate, which is usually all that's needed).
4. **"Time of flight depends on horizontal velocity/speed."** For a level launch, time of flight depends only on v₀ᵧ (and g); a faster horizontal launch increases range, not flight time, unless the vertical component also changes.
5. **Forgetting that at the peak, vertical velocity is zero but horizontal velocity is not.** The projectile keeps moving — it is momentarily traveling in a purely horizontal direction, not motionless.
6. **Using angle-only formulas (R, h, t) without decomposing the vector first.** These shortcut formulas already have sinθ/cosθ built in — plugging v₀ directly into a component equation instead of v₀ₓ or v₀ᵧ is a frequent algebra error.
7. **Assuming maximum range always happens at the launch angle that "feels steepest" or "feels flattest."** Range is maximized at exactly 45° on level ground; both larger and smaller angles reduce range (though 30°/60°, 15°/75°, etc. pairs match each other).

---

## Learning Resources

- **Video:** Khan Academy — [Two-dimensional motion](https://www.khanacademy.org/science/physics/two-dimensional-motion)
- **Simulation:** PhET Interactive Simulations — [Projectile Motion](https://phet.colorado.edu/en/simulation/projectile-motion) (adjust angle, speed, mass, and air resistance and watch the trajectory update)
- **Reference:** The Physics Classroom — [Projectile Motion tutorial](https://www.physicsclassroom.com/class/vectors)
- **Reference:** OpenStax College Physics, Chapter 3 (Two-Dimensional Kinematics) — free PDF/online textbook
- **Practice:** The Physics Classroom's [Projectile Motion Concept Builders and problem sets](https://www.physicsclassroom.com/Concept-Builders)

## Real-World Applications

- Basketball, soccer, and golf shots — optimal launch angles and how spin/air resistance shift the "ideal" 45°.
- Artillery and ballistics — range tables historically built from projectile-motion equations.
- Decorative water fountains — jet angle and speed determine the arc and landing point.
- The long jump — athletes' takeoff angle and speed determine horizontal distance in a way that closely follows projectile motion.
- Search-and-rescue or supply airdrops — computing when and where to release a horizontally-moving payload so it lands on target.

## Practice Problems

1. A soccer ball is kicked at 20 m/s at an angle of 30° above the ground. Find its time of flight, maximum height, and range.
2. A stone is thrown horizontally at 8.0 m/s from the top of a 45 m cliff. Find how long it takes to hit the ground and how far from the base of the cliff it lands.
3. A projectile launched at 25 m/s reaches the same range at two different angles. If one of those angles is 20°, what is the other?
4. An archer's arrow leaves the bow at 55 m/s. At what angle should it be launched to achieve a range of 200 m on level ground?
5. A ball rolls off a table 1.2 m high while moving horizontally at 3.5 m/s. Find its time of fall and the horizontal distance it travels before landing.

*(Answer keys are intentionally left for in-class or instructor-led review — pair with the quiz below for self-check practice.)*
