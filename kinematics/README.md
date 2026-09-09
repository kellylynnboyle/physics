# Unit 1: Kinematics

Kinematics is the description of motion — position, velocity, and acceleration —
without worrying about what *causes* it (that's Unit 3, Newton's Laws).

## Learning objectives

By the end of this unit, students will be able to:

1. Distinguish **distance** vs. **displacement** and **speed** vs. **velocity**.
2. Read and construct position-time, velocity-time, and acceleration-time graphs, and
   translate between them (slope and area relationships).
3. Solve for any unknown (position, velocity, acceleration, or time) using the
   constant-acceleration kinematics equations.
4. Analyze free-fall motion, including objects thrown upward.
5. Explain the difference between average and instantaneous velocity/acceleration.

## Key concepts to master

- **Vectors vs. scalars**: displacement, velocity, and acceleration are vectors
  (have direction); distance and speed are scalars (magnitude only).
- **The three constant-acceleration ("kinematics") equations**, where
  *v₀* = initial velocity, *v* = final velocity, *a* = acceleration, *t* = time,
  *Δx* = displacement:
  - v = v₀ + at
  - Δx = v₀t + ½at²
  - v² = v₀² + 2aΔx
- **Graph relationships**:
  - Slope of position-time graph = velocity
  - Slope of velocity-time graph = acceleration
  - Area under a velocity-time graph = displacement
  - Area under an acceleration-time graph = change in velocity
- **Free fall**: near Earth's surface, a = −9.8 m/s² (down) for *any* object in
  free fall, regardless of mass, whether it's moving up, down, or momentarily at rest.
- **Sign convention**: pick a positive direction and stick with it. Acceleration
  and velocity can have the same or opposite signs; a negative acceleration does
  **not** always mean "slowing down."

## Cornell notes

### Cues / Questions
- What's the difference between distance and displacement?
- What's the difference between average and instantaneous velocity?
- What does the slope of a v-t graph tell you? The area?
- What are the 3 kinematics equations, and what does each one solve for
  when a variable is missing?
- At the top of a ball's vertical toss, what is its velocity? Its acceleration?
- Why is "negative acceleration" not the same thing as "slowing down"?

### Notes
- **Distance** = total path length traveled (scalar, always ≥ 0).
  **Displacement** = straight-line change in position, start to end (vector,
  can be negative).
- **Average velocity** = Δx / Δt over an interval. **Instantaneous velocity** =
  velocity at one instant (slope of the tangent line on an x-t graph at that point).
- On a v-t graph: **slope = acceleration**; **area between the curve and the
  t-axis = displacement** (area below the axis counts as negative displacement).
- The 3 equations each omit one variable — pick the one missing the variable
  you don't know and don't need:
  - Missing Δx → v = v₀ + at
  - Missing v → Δx = v₀t + ½at²
  - Missing t → v² = v₀² + 2aΔx
- **Free fall**: g = 9.8 m/s² downward, constant, whether the object is moving
  up, down, or instantaneously at rest at the top of its path. At the peak of a
  vertical throw, **velocity = 0** but **acceleration is still −g** (never zero).
- **Sign convention matters more than the words "speeding up/slowing down."**
  An object slows down when velocity and acceleration have **opposite** signs,
  and speeds up when they have the **same** sign — regardless of whether
  acceleration itself is "positive" or "negative."

### Summary (write in your own words)
Kinematics equations only work for motion with **constant acceleration**. Always
start by listing knowns/unknowns, choosing a positive direction, and picking the
equation missing the variable you don't have.

## Commonly missed question types (what the quiz targets)

1. Treating "negative acceleration" as always meaning "slowing down."
2. Assuming velocity = 0 at the top of a toss means acceleration = 0 too.
3. Confusing the slope vs. area meaning on a v-t graph.
4. Mixing up average velocity with average speed when direction reverses
   (e.g., a round trip has zero average velocity but nonzero average speed).
5. Using a kinematics equation when acceleration is *not* constant.
6. Sign errors when an object decelerates, stops, and reverses direction.

## Practice problems

1. A car accelerates from rest at 3.0 m/s² for 6.0 s. Find its final velocity
   and the distance traveled. *(Answer: v = 18 m/s, Δx = 54 m)*
2. A ball is thrown straight up at 20 m/s. How long until it returns to the
   thrower's hand, and what is its velocity at the top? *(Answer: t ≈ 4.08 s,
   v_top = 0 m/s, but a = −9.8 m/s² throughout)*
3. A train slows from 40 m/s to 10 m/s over 100 m. Find its acceleration.
   *(Answer: a = −7.5 m/s²)*
4. Sketch a v-t graph for a car that speeds up uniformly, cruises at constant
   speed, then brakes uniformly to a stop. Identify where acceleration is
   positive, zero, and negative.
5. A cyclist rides 300 m east, then 300 m west, in 120 s total. Find average
   speed and average velocity. *(Answer: average speed = 5 m/s, average
   velocity = 0 m/s)*

## Real-world applications

- **Airbag/seatbelt design**: deceleration during a crash and stopping distance calculations.
- **Traffic engineering**: yellow-light timing based on reaction time + braking distance.
- **Sports analytics**: sprinter velocity-time profiles (acceleration phase vs. top speed).
- **Elevators**: comfortable acceleration/deceleration limits for passengers.

## Learning resources

- [The Physics Classroom: 1-D Kinematics](https://www.physicsclassroom.com/class/1DKin)
- [Khan Academy: One-dimensional motion](https://www.khanacademy.org/science/physics/one-dimensional-motion)
- [PhET: Moving Man simulation](https://phet.colorado.edu/en/simulation/moving-man)
- [OpenStax College Physics, Ch. 2: Kinematics](https://openstax.org/books/college-physics-2e/pages/2-introduction-to-one-dimensional-kinematics)

## Assessment criteria

| Level | Descriptor |
|---|---|
| Beginning | Can state the 3 kinematics equations but plugs in numbers without checking sign convention or which variable is missing. |
| Developing | Solves single-step, single-object problems correctly; struggles with graph interpretation or multi-stage motion. |
| Proficient | Correctly solves multi-stage motion problems (e.g., accelerate then decelerate) and interprets/creates x-t, v-t, a-t graphs. |
| Advanced | Explains *why* an equation applies or doesn't (constant a only), critiques a flawed graph or solution, connects graph shape to real motion scenarios. |

**Mastery target:** ≥ 80% on `quiz.html`, plus a graph-interpretation problem
solved with correct slope/area reasoning shown.
