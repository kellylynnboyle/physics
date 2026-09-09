# Unit 1 — Kinematics

The study of motion, described without regard to what causes it. This is the toolkit
(position, velocity, acceleration, and the equations linking them) that every later unit builds on.

## Key Concepts

- **Position, distance, and displacement** — position is location relative to an origin;
  distance is total path length traveled (scalar); displacement is the straight-line change in
  position (vector — can be negative or zero even if distance traveled is large).
- **Speed vs. velocity** — speed is distance/time (scalar); velocity is displacement/time
  (vector, has direction and sign).
- **Average vs. instantaneous velocity** — average velocity is total displacement over total
  time; instantaneous velocity is the velocity at one instant (slope of the position-time graph
  at that point).
- **Acceleration** — the rate of change of velocity, `a = Δv / Δt`. Positive/negative sign
  indicates direction, not "speeding up" or "slowing down" by itself — that depends on whether
  `a` and `v` point the same way.
- **The four kinematic equations** (constant acceleration only):
  1. `v = v₀ + at`
  2. `Δx = v₀t + ½at²`
  3. `v² = v₀² + 2aΔx`
  4. `Δx = ½(v₀ + v)t`
- **Motion graphs** — slope of a position-time graph = velocity; slope of a velocity-time graph =
  acceleration; area under a velocity-time graph = displacement; area under an acceleration-time
  graph = change in velocity.
- **Free fall** — constant acceleration due to gravity, `g = 9.8 m/s²`, directed downward
  (often taken as negative in a standard up-positive coordinate system).
- **Sign conventions** — choosing and sticking with a positive direction is essential; every
  vector quantity (position, velocity, acceleration) must carry the correct sign relative to it.

## Learning Objectives

By the end of this unit, students will be able to:
1. Distinguish distance from displacement and speed from velocity, including in problems where
   direction reverses.
2. Read and sketch position-time, velocity-time, and acceleration-time graphs for the same motion
   and correctly translate between them (slope/area relationships).
3. Select and apply the correct kinematic equation given three known variables to solve for a
   fourth.
4. Solve free-fall problems (dropped, thrown up, thrown down) using a consistent sign convention.
5. Explain why acceleration can be nonzero at the instant velocity equals zero (e.g., the top of
   a vertical toss).

## Assessment Criteria

| Level | What it looks like |
|---|---|
| Exceeds | Solves multi-stage motion problems (e.g., changing acceleration in phases), correctly reasons about graphs without doing arithmetic first |
| Meets | Chooses the correct kinematic equation independently and solves standard 1D motion and free-fall problems with correct signs and units |
| Approaching | Solves problems with the equation given, but makes sign errors or confuses distance/displacement or speed/velocity |
| Beginning | Can define terms and state equations but cannot yet select/apply the right one to a problem |

## Learning Resources

- PhET simulation: [Moving Man](https://phet.colorado.edu/en/simulations/moving-man) — build
  intuition for position/velocity/acceleration graphs interactively
- Khan Academy: "One-dimensional motion" unit
- The Physics Classroom: [1-D Kinematics](https://www.physicsclassroom.com/class/1DKin) tutorial
  and Concept Builders
- OpenStax *Physics*, Chapter "Motion in One Dimension"
- **IXL practice (for review):**
  [Distance and displacement in one dimension](https://www.ixl.com/science/physics/distance-and-displacement-in-one-dimension) ·
  [Speed and velocity in one dimension](https://www.ixl.com/science/physics/speed-and-velocity-in-one-dimension) ·
  [Acceleration in one dimension](https://www.ixl.com/science/physics/acceleration-in-one-dimension) ·
  [Solve problems using kinematic equations](https://www.ixl.com/science/physics/solve-problems-using-kinematic-equations)

## Practice Problems

1. A car accelerates from rest at `2.5 m/s²`. How far has it traveled after 6 s?
2. A ball is thrown straight up at `15 m/s`. How high does it go, and how long is it in the air
   before returning to the launch height?
3. A runner covers 400 m in 52 s, then jogs back 400 m in 90 s. Find average speed and average
   velocity for the whole trip.
4. A train decelerates from `30 m/s` to rest over `200 m`. Find its acceleration (assume constant).
5. Sketch the velocity-time graph for a ball dropped from a height, bouncing elastically, and
   dropped again — describe what the acceleration-time graph looks like during contact vs. flight.
6. From a given position-time graph with a curved (non-linear) section, identify where
   instantaneous velocity is zero, positive, and negative.

## Real-World Applications

- **Vehicle stopping distance** (traffic safety, braking systems) — kinematic equations set legal
  following distances and speed limits.
- **Sports timing** — sprint acceleration analysis (100 m dash splits), pitch/throw speed.
- **Elevators and roller coasters** — engineers use kinematics to keep acceleration within
  comfortable/safe limits for riders.
- **Astronomy** — free-fall equations describe motion under any constant gravitational field
  (e.g., estimating `g` on the Moon from footage of a dropped object).

## Most Often Missed (Quiz Focus)

See `quiz-app/index.html` → **Kinematics** tab. Targets these recurring misconceptions:
- "Acceleration is zero when velocity is zero" (true only if nothing is causing acceleration —
  false at the top of a toss, where gravity still acts).
- Reading a position-time graph's *steepness* as speed but forgetting sign gives direction.
- Treating "negative acceleration" as always meaning "slowing down."
- Confusing total distance with net displacement in round-trip problems.
- Using a kinematic equation that assumes constant acceleration when acceleration is changing.
