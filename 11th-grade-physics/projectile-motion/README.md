# Projectile Motion

## Overview

Projectile motion is the study of objects that move through the air under the influence of gravity alone, following a curved (parabolic) path once launched. It is one of the most powerful demonstrations in introductory physics that complex-looking motion can be broken into two much simpler, independent pieces — and it directly connects earlier one-dimensional kinematics to real two-dimensional motion. Mastering it builds the vector-decomposition skills that underpin nearly every topic that follows, from circular motion to forces at angles.

## Key Concepts to Master

- Independence of horizontal and vertical motion — the two directions do not affect each other and must be analyzed separately
- Horizontal velocity (vₓ) is constant throughout the flight (ignoring air resistance); vertical velocity (v_y) is constantly changing due to gravitational acceleration
- Launch angle effects on range, maximum height, and time of flight — how changing θ trades off one quantity for another
- Symmetric vs. non-symmetric trajectories — projectiles launched and landing at the same height follow a symmetric parabola; projectiles launched from a height, or landing at a different height than launch, do not
- Time of flight — how it is found differently depending on whether launch and landing heights are equal
- Maximum height — occurs when v_y = 0, found using vertical kinematics only
- The range equation R = v²sin(2θ)/g and its limits — it is valid ONLY when launch height equals landing height
- Velocity as a vector with independent horizontal and vertical components, and how to recombine them (magnitude and direction) at any point in the flight
- Initial velocity decomposition using sine and cosine: vₓ = v₀cos(θ), v_y = v₀sin(θ)

## Learning Objectives

By the end of this unit, students will be able to:

1. Decompose an initial velocity vector into horizontal and vertical components using trigonometry.
2. Explain, using evidence from kinematics equations, why horizontal and vertical motion are independent of each other.
3. Calculate the time of flight, maximum height, and horizontal range for a projectile launched and landing at the same height.
4. Calculate the time of flight and horizontal range for a projectile launched from an elevated height (non-symmetric case), correctly setting up the vertical kinematics equation.
5. Determine the velocity (magnitude and direction) of a projectile at any point during its flight, including at launch, at the peak, and at landing.
6. Identify and correct common errors involving the range equation, angle of launch, and use of total speed vs. vector components.
7. Justify why 45° maximizes range only when launch and landing heights are equal, and predict how the optimal angle shifts when they differ.
8. Sketch and interpret a projectile's trajectory, velocity vectors, and acceleration vector at multiple points along its path.

## Assessment Criteria

| Level | Description |
|---|---|
| **Developing** | Can state that horizontal and vertical motion are independent but struggles to decompose velocity vectors correctly; needs guided steps to set up equations; makes sign errors with g; cannot yet solve non-symmetric (launched-from-height) problems. |
| **Proficient** | Correctly decomposes initial velocity, applies constant-velocity equations horizontally and kinematic equations vertically, solves standard (symmetric) range/height/time problems independently, and recognizes when the range equation does not apply. |
| **Mastery** | Solves non-symmetric trajectory problems fluently, explains angle-optimization reasoning conceptually and mathematically (including cases where 45° is not optimal), finds velocity vectors at arbitrary points in flight, and can critique/correct flawed problem setups from peers. |

**Progress tracking:** Progress is tracked through (a) formative checks during guided practice (whiteboard problem sets, exit tickets), (b) the practice problem set in this document scored against the rubric above, (c) results and immediate feedback from `quiz.html`, which flags specific misconceptions for review, and (d) a cumulative problem-set or unit test requiring at least one non-symmetric trajectory problem and one conceptual angle-optimization explanation to demonstrate mastery-level understanding.

## Real-World Applications

- **Basketball free throws** — players intuitively adjust launch angle and speed so the parabolic arc drops the ball through the hoop; analysis explains why a higher, softer arc is more forgiving than a flat, fast shot.
- **Artillery and ballistics** — military and historical ballistics calculations rely directly on range and time-of-flight equations, including corrections for firing from elevated positions (e.g., a hilltop cannon).
- **Long jump and high jump (track and field)** — athletes optimize their takeoff angle and speed to maximize horizontal distance or vertical clearance, illustrating the range-vs-height trade-off.
- **Water fountains and decorative water jets** — nozzle angle and pressure (initial speed) are engineered so arcs of water land at a desired distance, a direct visual model of the parabolic trajectory.
- **Kicking a football (soccer or American football) for maximum range** — punters and place-kickers choose launch angles near 45° (adjusted for the ball's landing height and hang time) to maximize distance or hang time.
- **Sports analytics and equipment design** — analysts model baseball "launch angle" and exit velocity off the bat, golf ball trajectories, and javelin throws to optimize performance and equipment design.

## Practice Problems

1. A ball is thrown horizontally from a cliff at 15 m/s. It lands 3.0 s later. What is the horizontal distance traveled, and how high is the cliff? (Take g = 9.8 m/s².)

2. A soccer ball is kicked with an initial speed of 20 m/s at an angle of 30° above the horizontal, landing at the same height it was kicked from. Find the horizontal and vertical components of the initial velocity.

3. Using the ball from Problem 2, find the time of flight, maximum height, and horizontal range.

4. A stone is launched from the top of a 25 m tall tower with an initial speed of 18 m/s at 40° above the horizontal. It lands on the ground below the tower. Find the total time of flight and the horizontal distance it travels. (This is a non-symmetric, launched-from-a-height problem — the range equation R = v²sin(2θ)/g does NOT apply directly.)

5. Two projectiles are launched from level ground with the same initial speed, one at 30° and one at 60° above horizontal. Both land at the same height they were launched from. Compare their ranges. Explain, in terms of sin(2θ), why this happens.

6. Conceptual: A javelin thrower wants maximum horizontal distance. Explain why 45° is the optimal launch angle when the javelin lands at the same height it was released, and explain qualitatively (no calculation required) how the optimal angle would change if the javelin is released from 2 m above the ground and lands on the ground.

7. A basketball is thrown with a speed of 8.0 m/s at 50° above horizontal from a height of 2.0 m, and it goes through the hoop at a height of 3.05 m at the peak of its arc (i.e., the ball is still rising or exactly level when it reaches the hoop's location). Find the vertical velocity component at launch and determine whether the ball is still rising when it reaches 3.05 m if it reaches that height 0.30 s after launch. (Assume it is launched and analyzed only up to that point — no need to find full time of flight.)

8. Conceptual: A student says, "At the very top of a projectile's path, both its velocity and its acceleration are zero, because the object stops moving upward." Identify what is correct and incorrect about this statement, and rewrite it accurately.

---

### Answer Key

1. Horizontal distance = vₓ · t = 15 m/s × 3.0 s = **45 m**. Height: use h = ½gt² = ½(9.8)(3.0)² = **44.1 m** (the initial vertical velocity is 0 since the throw is horizontal).

2. vₓ = v₀cos(θ) = 20cos(30°) = **17.3 m/s**; v_y = v₀sin(θ) = 20sin(30°) = **10.0 m/s**.

3. Time of flight: t = 2v_y/g = 2(10.0)/9.8 = **2.04 s**. Maximum height: h_max = v_y²/(2g) = (10.0)²/(2×9.8) = **5.10 m**. Range: R = v₀²sin(2θ)/g = (20)²sin(60°)/9.8 = 400(0.866)/9.8 = **35.3 m** (or equivalently R = vₓ·t = 17.3 × 2.04 ≈ 35.3 m, confirming the result).

4. vₓ = 18cos(40°) = 13.8 m/s; v_y = 18sin(40°) = 11.6 m/s (upward, taking up as positive). Using y = y₀ + v_y·t − ½gt² with y = 0 (ground) and y₀ = 25 m (taking launch point as origin, ground is −25 m below): −25 = 11.6t − 4.9t². Rearranged: 4.9t² − 11.6t − 25 = 0. Using the quadratic formula: t = [11.6 ± √(11.6² + 4×4.9×25)] / (2×4.9) = [11.6 ± √(134.6 + 490)] / 9.8 = [11.6 ± 25.0]/9.8. Taking the positive root: t ≈ **3.73 s**. Horizontal distance: x = vₓ·t = 13.8 × 3.73 ≈ **51.5 m**.

5. Both ranges are equal. sin(2×30°) = sin(60°) ≈ 0.866 and sin(2×60°) = sin(120°) ≈ 0.866 — the same value, since sin(θ) = sin(180° − θ). This is why 30°/60° are called complementary launch angles that produce equal range on level ground.

6. On level ground, 45° maximizes sin(2θ) (its maximum value of 1 occurs at 2θ = 90°, i.e., θ = 45°), which maximizes range for a given launch speed. When the javelin is released above the landing height, the projectile spends extra time falling that additional distance after it would have otherwise landed — a slightly lower launch angle (less than 45°) uses more of the initial speed for horizontal distance and lets the "free" extra fall time contribute to range, so the optimal angle decreases slightly below 45°.

7. v_y = v₀sin(50°) = 8.0 × sin(50°) = 8.0 × 0.766 = **6.13 m/s upward** at launch. At t = 0.30 s, v_y(t) = v_y0 − g·t = 6.13 − 9.8(0.30) = 6.13 − 2.94 = **3.19 m/s**, which is still positive (upward), so the ball is **still rising** when it reaches the hoop's height — it has not yet reached its peak.

8. Incorrect: velocity is not zero at the top — only the *vertical component* of velocity is momentarily zero; the horizontal component (vₓ) is unchanged and nonzero, so the object is still moving horizontally. Also incorrect: acceleration is not zero at the top — gravity acts continuously throughout the entire flight, so acceleration remains −g (downward) at every point, including the peak. Corrected statement: "At the top of a projectile's path, the vertical component of velocity is momentarily zero, but the horizontal component of velocity and the downward acceleration due to gravity are both still present and unchanged."

## Learning Resources

- **Textbook chapters:** Standard-level physics textbook chapters on "Two-Dimensional Motion," "Kinematics in Two Dimensions," or "Vectors and Projectile Motion" (see your assigned course textbook's table of contents for the exact chapter title and number).
- **Khan Academy:** "Two-dimensional motion" unit, including the "Projectile motion" and "Optimal angle for a projectile" lessons within the AP Physics 1 course.
- **PhET Interactive Simulations:** "Projectile Motion" simulation (University of Colorado Boulder) — allows students to adjust launch angle, speed, mass, and air resistance and observe the resulting trajectory in real time.
- **YouTube channels:** Flipping Physics (projectile motion video series), Professor Dave Explains (projectile motion and 2D kinematics videos), The Organic Chemistry Tutor (worked-example problem sets on projectile motion).
- **Practice/reference:** AP Physics 1 released free-response questions involving projectile motion, for additional worked and unworked practice at exam level.
