# Kinematics

## Overview

Kinematics is the branch of mechanics that describes how objects move without asking *why* they move — that question belongs to dynamics, which comes later. In this unit we restrict ourselves to motion along a single straight line (1D motion), building a precise vocabulary — position, displacement, velocity, and acceleration — and a set of equations that let us predict where an object will be and how fast it will be moving at any time. This matters because nearly every later topic in physics, from projectile motion to circular motion to momentum, is built on top of the kinematic language and equations introduced here. Mastering 1D kinematics first makes those more complex topics much easier to learn, because the hard part — thinking carefully about signs, vectors, and graphs — is the same skill reused everywhere.

## Key Concepts to Master

- **Position vs. reference point** — an object's position is only meaningful relative to a chosen origin and coordinate direction; the same motion can have very different position values depending on where you place "zero."
- **Displacement vs. distance** — displacement is the vector change in position (final minus initial, can be zero or negative); distance is the scalar total length of the path traveled (always positive, never decreases).
- **Average velocity vs. instantaneous velocity** — average velocity is total displacement divided by total time over an interval; instantaneous velocity is the velocity at one specific moment, found from the slope of a position-time graph at that instant.
- **Speed vs. velocity** — speed is a scalar (magnitude only, always positive or zero); velocity is a vector (magnitude and direction, can be positive or negative depending on sign convention).
- **Acceleration** — the rate of change of velocity with respect to time; it exists whenever velocity changes in magnitude, direction, or both.
- **Sign conventions** — before solving any problem you must choose a positive direction; once chosen, every position, velocity, and acceleration value must be consistent with that choice.
- **Position-time graphs** — the slope of a position-time graph at any point equals the instantaneous velocity at that point; a steeper slope means a faster speed, and a horizontal segment means the object is momentarily at rest.
- **Velocity-time graphs** — the slope of a velocity-time graph equals acceleration, and the area between the curve and the time axis equals displacement over that interval.
- **The four constant-acceleration kinematic equations** — a set of four algebraic relationships that connect position, velocity, acceleration, and time whenever acceleration is constant, allowing you to solve for an unknown quantity without needing calculus.
- **Free fall** — the special case of constant-acceleration motion in which the only acceleration acting on an object is gravity, with magnitude g ≈ 9.8 m/s², directed downward, and (ignoring air resistance) identical for all objects regardless of mass.

## Learning Objectives

By the end of this unit, students will be able to:

1. Students will be able to distinguish position, displacement, and distance for a given description or diagram of motion, and calculate each correctly.
2. Students will be able to calculate average velocity and average speed from position and time data, and explain why the two can differ.
3. Students will be able to determine instantaneous velocity from the slope of a position-time graph at a specified point.
4. Students will be able to determine acceleration from the slope of a velocity-time graph and displacement from the area under a velocity-time graph.
5. Students will be able to apply sign conventions consistently to correctly identify when an object is speeding up, slowing down, reversing direction, or momentarily at rest.
6. Students will be able to select and apply the appropriate one of the four constant-acceleration kinematic equations to solve for an unknown position, velocity, acceleration, or time.
7. Students will be able to analyze free-fall problems using a = -g (with up as positive), including objects thrown upward, dropped, or thrown downward.
8. Students will be able to identify and correct at least five of the seven common kinematics misconceptions listed below when presented with an example scenario.

## Key Equations

| Equation | Variables | When to use |
|---|---|---|
| v = v₀ + a t | v = final velocity, v₀ = initial velocity, a = constant acceleration, t = elapsed time | Use when you know initial velocity, acceleration, and time, and need final velocity (position not involved). |
| x = x₀ + v₀ t + ½ a t² | x = final position, x₀ = initial position, v₀ = initial velocity, a = constant acceleration, t = elapsed time | Use when you know initial position, initial velocity, acceleration, and time, and need final position (final velocity not involved). |
| v² = v₀² + 2 a (x − x₀) | v = final velocity, v₀ = initial velocity, a = constant acceleration, x − x₀ = displacement | Use when time is unknown or not needed, and you know initial velocity, acceleration, and displacement. |
| x = x₀ + ((v₀ + v)/2) t | x = final position, x₀ = initial position, v₀ = initial velocity, v = final velocity, t = elapsed time | Use when acceleration is unknown or not needed, and you know both velocities, initial position, and time. |
| a = −g (free fall, up positive) | a = acceleration, g ≈ 9.8 m/s² = magnitude of gravitational acceleration | Use for any free-fall problem (dropped, thrown up, or thrown down) once "up" has been chosen as the positive direction; substitute a = −g into any of the four equations above. |

## Common Misconceptions

1. **Misconception:** Distance and displacement are always equal.
   **Reality:** They are equal only for straight-line motion in a single direction with no reversal. If an object changes direction at all, distance (the total path length) will be greater than the magnitude of displacement (the net change in position); displacement can even be zero while distance is large, as when a runner returns to the starting line.

2. **Misconception:** Velocity and acceleration must always share the same sign, or negative acceleration always means "slowing down."
   **Reality:** The sign relationship between velocity and acceleration determines speeding up versus slowing down, not the sign of acceleration alone. When velocity and acceleration have the same sign, the object speeds up; when they have opposite signs, it slows down. A negative acceleration applied to an already-negative velocity makes the object move faster (in the negative direction), not slower.

3. **Misconception:** Zero velocity implies zero acceleration.
   **Reality:** An object can have zero velocity at an instant while still accelerating. The classic example is a ball thrown straight up: at the very top of its path its velocity is momentarily zero, but gravity continues to accelerate it downward at −g the entire time, including at that instant.

4. **Misconception:** The slope of a position-time graph represents acceleration.
   **Reality:** The slope of a position-time graph represents velocity, not acceleration. Acceleration is read from the slope of a velocity-time graph, or equivalently from the curvature (concavity) of the position-time graph.

5. **Misconception:** On a velocity-time graph, "slope" and "area under the curve" give the same information.
   **Reality:** They represent two different quantities entirely. The slope of a velocity-time graph gives acceleration (rate of change of velocity), while the area between the curve and the time axis gives displacement (net change in position) over that time interval.

6. **Misconception:** Heavier objects fall faster than lighter objects in free fall.
   **Reality:** Ignoring air resistance, all objects near Earth's surface accelerate downward at the same rate, g ≈ 9.8 m/s², regardless of their mass. A heavier object falls at the same rate as a lighter one when air resistance is negligible; the common observation that heavier objects "fall faster" in everyday life is due to air resistance affecting light or spread-out objects (like a feather) much more than dense, compact ones.

7. **Misconception:** Constant velocity motion requires a continuous net force to sustain it.
   **Reality:** An object moving at constant velocity has zero acceleration, which (by Newton's first law, previewed here) means the net force on it is zero. No force is needed to keep an object moving at constant velocity in a straight line — force is needed only to change that velocity (i.e., to accelerate it).

## Learning Resources

- **Khan Academy** (https://www.khanacademy.org) — search for their "One-dimensional motion" unit under Physics; it has short videos and practice sets on displacement, velocity, and acceleration.
- **PhET Interactive Simulations** (https://phet.colorado.edu) — search for "Moving Man" or "Projectile Motion" simulations to interactively explore position, velocity, and acceleration graphs in real time.
- **The Physics Classroom** (https://www.physicsclassroom.com) — search their "1-D Kinematics" tutorial for detailed conceptual explanations, diagrams, and interactive practice problems.
- **OpenStax** (https://openstax.org) — search for the free "University Physics Volume 1" or "College Physics" textbook and look at the chapter on "Motion Along a Straight Line" for rigorous derivations and worked examples.
- **YouTube** (https://www.youtube.com) — search for channels like "Flipping Physics" or "Professor Dave Explains" and look for their kinematics and free-fall videos.
- **Desmos** (https://www.desmos.com) — search for their graphing calculator and try graphing position, velocity, and acceleration functions yourself to see how slope and area relationships appear visually.
- **MIT OpenCourseWare** (https://ocw.mit.edu) — search for introductory physics/mechanics courses and look for lecture notes or problem sets on 1D kinematics.

## Practice Problems

1. A car starts at position x₀ = 0 m and moves at a constant velocity of 20 m/s for 5 s. What is its displacement?

2. A runner jogs 100 m east, then turns around and jogs 40 m west, taking 60 s total. Find (a) the total distance traveled and (b) the displacement.

3. A cyclist accelerates from rest at a constant 2 m/s² for 6 s. What is the cyclist's final velocity, and how far did they travel?

4. A ball is thrown straight up with an initial velocity of 15 m/s. Taking up as positive and using a = −g = −9.8 m/s², find the ball's velocity after 1.0 s and after 2.0 s. What is happening to its speed between t = 1.0 s and t = 2.0 s?

5. At the exact top of the ball's flight in problem 4, what is its velocity? What is its acceleration at that same instant? Explain why these two answers do not contradict each other.

6. A car moving at +18 m/s applies the brakes, producing a constant acceleration of −3 m/s². How long does it take to stop, and what distance does it travel while stopping?

7. A rock is dropped (v₀ = 0) from a cliff 78.4 m high. Using g ≈ 9.8 m/s², how long does it take to hit the ground, and what is its velocity just before impact?

8. A velocity-time graph shows an object's velocity increasing in a straight line from 0 to 12 m/s over 4 s, then remaining constant at 12 m/s for the next 3 s. Find (a) the acceleration during the first 4 s, (b) the acceleration during the last 3 s, and (c) the total displacement over the full 7 s using the area under the graph.

### Answer Key

1. Displacement = v t = (20 m/s)(5 s) = 100 m.

2. (a) Distance = 100 m + 40 m = 140 m. (b) Displacement = 100 m − 40 m = 60 m east (taking east as positive). This shows distance and displacement need not be equal (Misconception 1).

3. v = v₀ + a t = 0 + (2 m/s²)(6 s) = 12 m/s. Distance: x = v₀t + ½at² = 0 + ½(2)(36) = 36 m.

4. At t = 1.0 s: v = 15 + (−9.8)(1.0) = 5.2 m/s (still moving up, slowing down). At t = 2.0 s: v = 15 + (−9.8)(2.0) = −4.6 m/s (now moving down). Between t = 1.0 s and t = 2.0 s the ball's speed first decreases to zero (at the peak) and then increases again as it falls — velocity and acceleration have the same sign (both negative) once it starts falling, so it speeds up (Misconception 2).

5. At the top, velocity = 0 m/s, but acceleration = −9.8 m/s² (unchanged). These do not contradict because acceleration describes how velocity is changing, not its current value — gravity never stops acting, even at the instant velocity passes through zero (Misconception 3).

6. Time to stop: v = v₀ + at → 0 = 18 + (−3)t → t = 6 s. Distance: using v² = v₀² + 2a(x−x₀): 0 = 324 + 2(−3)(x) → x = 54 m.

7. Using x = x₀ + v₀t + ½at² with downward as negative and drop height 78.4 m: −78.4 = 0 + ½(−9.8)t² → t² = 16 → t = 4.0 s. Velocity: v = v₀ + at = 0 + (−9.8)(4.0) = −39.2 m/s (39.2 m/s downward).

8. (a) a = Δv/Δt = (12 − 0)/4 = 3 m/s². (b) a = 0 m/s² (constant velocity — no change). (c) Area = triangle (½ × 4 × 12 = 24 m) + rectangle (3 × 12 = 36 m) = 60 m total displacement.

## Real-World Applications

- **Stopping/reaction distance in driving** — the distance a car travels during a driver's reaction time (constant velocity) plus the braking distance (constant negative acceleration) determines total stopping distance, a direct application of the kinematic equations.
- **Sprint and race analysis** — coaches use position-time and velocity-time data from sprinters to identify acceleration phases, top speed, and deceleration, helping refine training.
- **Elevators** — elevator motion is designed with controlled acceleration and deceleration phases so that passengers experience smooth starts and stops rather than abrupt jerks.
- **Roller coasters** — engineers calculate velocity and acceleration throughout a coaster's track (including near-free-fall drops) to ensure thrilling speeds while keeping forces on riders within safe limits.
- **Ballistics and projectile timing** — the vertical component of projectile motion (a thrown object, a dropped payload, a launched rocket stage) is governed by the same free-fall equations used for a ball tossed straight up.
- **Air bag and safety system timing** — automotive engineers use deceleration data (rate of velocity change during a collision) to time airbag deployment within milliseconds.

## Assessment Criteria

| Mastery Level | Descriptor |
|---|---|
| Beginning | Can define position, displacement, velocity, and acceleration in isolation but confuses distance with displacement or speed with velocity; cannot yet apply a kinematic equation to solve a numeric problem without heavy guidance. |
| Developing | Correctly distinguishes distance/displacement and speed/velocity, and can apply one kinematic equation with a given sign convention, but still makes sign errors in multi-step problems or misreads slope vs. area on graphs. |
| Proficient | Reliably selects the correct kinematic equation for a given problem, applies consistent sign conventions including free-fall problems, and correctly interprets both position-time and velocity-time graphs, including slope and area. |
| Advanced | Solves multi-step and non-standard kinematics problems (e.g., motion with direction reversal, objects meeting mid-flight) fluently, can explain and correct each of the seven common misconceptions with a specific example, and can justify equation choice and sign conventions clearly in writing. |
