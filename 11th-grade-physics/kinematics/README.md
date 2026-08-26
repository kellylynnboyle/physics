# Kinematics: Motion in One Dimension

## Overview

Kinematics is the study of how things move, described entirely in terms of position, time, velocity, and acceleration, without asking *why* the motion happens (that's dynamics, covered in the Newton's Laws module). It matters because it builds the mathematical language — variables, sign conventions, equations, and graphs — that every later topic in mechanics depends on, from projectile motion to momentum to energy. Mastering one-dimensional motion first, before adding a second dimension or forces, makes those later topics dramatically easier to learn.

## Key Concepts to Master

- **Position** — an object's location relative to a chosen origin and reference frame, measured in meters (m)
- **Distance vs. displacement** — distance is the total path length traveled (always positive, scalar); displacement is the change in position, Δx = x_f − x_i (can be positive, negative, or zero; vector)
- **Speed vs. velocity** — speed is distance traveled per unit time (scalar); velocity is displacement per unit time (vector, includes direction via its sign)
- **Average vs. instantaneous velocity** — average velocity is Δx/Δt over an interval; instantaneous velocity is the velocity at one specific moment (the slope of the position-time graph at a point, i.e., a tangent line)
- **Acceleration** — the rate of change of velocity, a = Δv/Δt, measured in m/s²; positive or negative depending on direction, not on whether the object is "speeding up"
- **Sign conventions** — choosing a positive direction at the start of a problem and staying consistent; a negative velocity means motion in the negative direction, not "slowing down," and a negative acceleration means the velocity is changing toward the negative direction, not necessarily "slowing down"
- **The kinematic equations (constant acceleration only)**:
  - v = v₀ + at
  - Δx = v₀t + ½at²
  - v² = v₀² + 2aΔx
  - Δx = ½(v₀ + v)t
- **Free fall / g = 9.8 m/s²** — near Earth's surface, objects in free fall accelerate downward at a constant 9.8 m/s² (ignoring air resistance), regardless of mass; at the top of a vertical toss, velocity is momentarily zero but acceleration is still −g
- **Interpreting position-time and velocity-time graphs** — on a position-time graph, slope = velocity; on a velocity-time graph, slope = acceleration and the area under the curve = displacement; a curving (non-straight) position-time graph means the velocity is changing, i.e., non-zero acceleration

## Learning Objectives

Students will be able to:

1. **Define** position, distance, displacement, speed, velocity, and acceleration in precise physics terms, distinguishing scalar quantities from vector quantities.
2. **Distinguish** between distance and displacement, and between average speed and average velocity, in round-trip and multi-leg motion scenarios.
3. **Calculate** average velocity, average acceleration, and instantaneous velocity from position-time or velocity-time data.
4. **Apply** the four constant-acceleration kinematic equations to solve for an unknown quantity (position, velocity, acceleration, or time), correctly selecting which equation fits the given knowns and unknowns.
5. **Interpret** position-time and velocity-time graphs, identifying slope as velocity or acceleration and area under a velocity-time curve as displacement.
6. **Graph** position, velocity, and acceleration versus time for a described motion (e.g., constant velocity, constant acceleration, free fall), maintaining consistent sign conventions.
7. **Derive** one kinematic equation from another (e.g., derive Δx = ½(v₀+v)t from the definition of average velocity and v = v₀ + at).
8. **Apply** free-fall reasoning (a = −g throughout, including at the peak of the trajectory where v = 0) to vertical motion problems.

## Assessment Criteria

| Level | What it looks like |
|---|---|
| **Developing** | Can define key vocabulary and plug numbers into a given kinematic equation, but struggles to choose the correct equation independently, confuses distance/displacement or speed/velocity, and misreads slope vs. area on graphs. |
| **Proficient** | Correctly distinguishes all paired concepts (distance/displacement, speed/velocity, average/instantaneous), independently selects and applies the right kinematic equation for single-step problems, and reads basic position-time and velocity-time graphs accurately, including sign of velocity/acceleration. |
| **Mastery** | Solves multi-step problems requiring two or more kinematic relationships or a graph-to-equation translation, correctly handles free-fall problems including the v=0/a≠0 case at a trajectory's peak, explains reasoning (not just answers) using correct sign conventions, and can derive one kinematic equation from another. |

**Progress tracking:** quiz scores of 80%+ on concept-check quizzes (including the misconception quiz in this module) to be considered proficient; ability to correctly solve a novel two-step kinematics word problem unassisted signals mastery; graph interpretation is checked separately by asking students to both read a graph (extract velocity/acceleration/displacement) and sketch one (given a verbal motion description) — 90%+ accuracy on graph-sketching tasks indicates mastery of that sub-skill.

## Real-World Applications

- **Stopping distance and reaction time in driving** — total stopping distance combines a constant-velocity "reaction distance" (before braking) with a constant-deceleration "braking distance," both directly modeled with kinematic equations.
- **Sprinter acceleration analysis** — analyzing a 100 m dash by breaking it into an acceleration phase and a near-constant-velocity phase, using video or timing-gate data to compute instantaneous and average velocities.
- **Elevator motion** — an elevator's velocity-time graph (accelerating up, constant speed, decelerating to stop) is a classic real-world example of piecewise constant acceleration.
- **Radar/speed guns** — police and sports radar guns measure instantaneous velocity by detecting the Doppler shift of reflected radio waves, directly tied to the concept of instantaneous vs. average velocity.
- **Rocket and elevator free-fall drills** — the "vomit comet" and drop-tower rides use near-free-fall (a ≈ −9.8 m/s²) to simulate weightlessness, illustrating constant acceleration even as velocity changes continuously.
- **Emergency braking systems (ABS) and airbag timing** — engineers use deceleration (negative acceleration) calculations to time airbag deployment within milliseconds of a collision's velocity change.

## Practice Problems

1. **(Basic)** A car travels 150 m east in 10 s, then 50 m west in 5 s. Find (a) the total distance traveled, (b) the total displacement, and (c) the average speed and average velocity for the whole trip.

2. **(Basic)** A cyclist accelerates uniformly from rest to 8 m/s in 4 s. What is the cyclist's acceleration?

3. **(Basic)** A ball is thrown straight up with an initial velocity of 19.6 m/s. Using g = 9.8 m/s², find (a) the time it takes to reach its highest point, and (b) its velocity and acceleration at that highest point.

4. **(Intermediate)** A train traveling at 20 m/s begins decelerating at a constant 2 m/s² to come to a stop. (a) How long does it take to stop? (b) How far does it travel while stopping?

5. **(Intermediate)** Sketch a velocity-time graph for a car that: starts at rest, speeds up uniformly to 15 m/s over 5 s, cruises at 15 m/s for 10 s, then slows uniformly to a stop over 3 s. From your graph, determine the car's total displacement.

6. **(Intermediate — conceptual/graph)** A position-time graph shows a straight line with negative slope for the first 4 seconds, then a horizontal line for the next 3 seconds. Describe the object's motion in words during each interval, including the sign and approximate value of its velocity.

7. **(Challenging)** A car moving in the negative direction at −24 m/s decelerates uniformly, coming to rest after 6 s. (a) What is the sign of the car's acceleration during this time? (b) Calculate the acceleration. (c) Calculate the car's displacement during the 6 s. Explain why the car is "slowing down" even though the acceleration is positive.

8. **(Challenging)** A rock is dropped from the top of a 78.4 m tall cliff (initial velocity = 0). (a) How long does it take to hit the ground? (b) What is its velocity just before impact? (c) A second rock is thrown downward from the same cliff with an initial velocity of 5 m/s — does it hit the ground in less time, more time, or the same time as the dropped rock? Justify your answer without recalculating in full.

---

## Answer Key

<details>
<summary>Click to reveal answers</summary>

**1.** Distance = 150 m + 50 m = 200 m. Displacement = +150 m − 50 m = +100 m east (taking east as positive). Total time = 15 s. Average speed = 200 m / 15 s ≈ 13.3 m/s. Average velocity = 100 m / 15 s ≈ 6.7 m/s east.

**2.** a = Δv/Δt = (8 m/s − 0)/4 s = **2 m/s²**.

**3.** (a) At the top, v = 0. Using v = v₀ + at → 0 = 19.6 − 9.8t → t = **2 s**. (b) Velocity at top = **0 m/s**; acceleration at top = **−9.8 m/s² (still g, downward)** — this is a key misconception check: zero velocity does NOT mean zero acceleration.

**4.** (a) Using v = v₀ + at with v = 0, v₀ = 20 m/s, a = −2 m/s²: 0 = 20 − 2t → t = **10 s**. (b) Using Δx = v₀t + ½at² = 20(10) + ½(−2)(100) = 200 − 100 = **100 m**.

**5.** Displacement = area under the v-t graph = area of trapezoid/triangle pieces: (½·5·15) + (10·15) + (½·3·15) = 37.5 + 150 + 22.5 = **210 m**.

**6.** From 0–4 s: straight line, negative slope → **constant negative velocity** (moving in the negative direction at a constant speed equal to the magnitude of the slope). From 4–7 s: horizontal line → **velocity = 0, object is at rest** (position is not changing), not "moving slowly."

**7.** (a) The car is moving in the negative direction and slowing down, so velocity is becoming less negative over time — this means acceleration is **positive**, even though the object is decelerating. This is a classic misconception: deceleration does not always mean negative acceleration; it depends on the direction of motion. (b) a = Δv/Δt = (0 − (−24))/6 = **+4 m/s²**. (c) Δx = ½(v₀+v)t = ½(−24+0)(6) = **−72 m** (72 m in the negative direction).

**8.** (a) Δx = ½gt² (downward positive) → 78.4 = ½(9.8)t² → t² = 16 → t = **4 s**. (b) v = gt = 9.8(4) = **39.2 m/s** downward. (c) **Less time** — the second rock already has downward velocity at t=0, so it covers the same distance faster; it does not need to "start from rest" and build up speed the way the dropped rock does, even though both experience the same acceleration g.

</details>

## Learning Resources

**Textbook chapters:**
- *OpenStax Physics* (or *OpenStax College Physics*) — chapters on "Motion Along a Straight Line" / "One-Dimensional Kinematics"
- *Giancoli, Physics: Principles with Applications* — chapter on "Describing Motion: Kinematics in One Dimension"
- *Halliday, Resnick & Walker, Fundamentals of Physics* — chapter on "Motion Along a Straight Line"

**Khan Academy:**
- Unit: "One-dimensional motion" (under the Physics course), covering position, displacement, velocity, and acceleration, plus the "Old videos on projectile motion" playlist for the free-fall lead-in

**PhET Interactive Simulations:**
- "Moving Man" — lets students manipulate position, velocity, and acceleration directly and see matching graphs update in real time
- "Forces and Motion: Basics" (for connecting motion to intuition about pushing/friction, useful as a bridge to dynamics)

**YouTube channels:**
- **Flipping Physics** — clear, classroom-style walkthroughs of kinematics derivations and problem sets
- **Professor Dave Explains** — concise concept-review videos on velocity, acceleration, and free fall
- **Khan Academy** (channel) — worked example videos matching the Khan Academy kinematics unit
- **The Organic Chemistry Tutor** — extensive worked practice problems on 1D kinematics and free fall, useful for extra repetition
