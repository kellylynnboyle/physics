# Unit 1: Kinematics

Kinematics describes *how* things move — position, velocity, and
acceleration as functions of time — without asking *why* (that's Unit 3).
Everything in projectile motion, and most of Newton's Laws problem-solving,
is built on this unit. Master the sign conventions and graph reading here
and every later unit gets easier.

## Learning Objectives

By the end of this unit, students should be able to:

- Distinguish distance/displacement and speed/velocity (scalar vs. vector).
- Define instantaneous vs. average velocity and acceleration.
- Read and sketch position–time, velocity–time, and acceleration–time
  graphs, and translate correctly between them (slope and area relationships).
- Select and apply the correct constant-acceleration ("kinematics")
  equation for a given set of knowns/unknowns.
- Correctly assign signs to velocity and acceleration using a consistent
  coordinate convention, including free-fall problems.

---

## Cornell Notes

### Key Concepts / Cues → Notes

| Cue / Question | Notes |
|---|---|
| What's the difference between **distance** and **displacement**? | Distance = total path length traveled (scalar, always ≥ 0). Displacement = straight-line change in position, `Δx = x_f − x_i` (vector, can be negative). A round trip has distance > 0 but displacement = 0. |
| What's the difference between **speed** and **velocity**? | Speed = distance/time (scalar). Velocity = displacement/time (vector; has direction, sign matters). Average speed ≠ magnitude of average velocity unless motion is one direction. |
| **Average** vs. **instantaneous** velocity? | Average velocity = `Δx/Δt` over an interval (slope of the *secant* line on an x–t graph). Instantaneous velocity = the slope of the *tangent* line at one instant — what a speedometer reads. |
| How do you read a **position–time graph**? | Slope = velocity. Steeper slope = faster. Flat (zero slope) = at rest. A straight line = constant velocity. A curve = changing velocity (acceleration). Concave up = speeding up (in + direction); concave down = slowing down. |
| How do you read a **velocity–time graph**? | Slope = acceleration. Area under the curve (between the line and the t-axis) = displacement. Area above the axis is + displacement; area below is − displacement — they can cancel. |
| What is **acceleration**? | Rate of change of *velocity*, `a = Δv/Δt` — not a rate of change of speed. An object can accelerate while slowing down, speeding up, or just changing direction (like in circular motion, covered later). Units: m/s². |
| What does **negative acceleration** mean? | Only that acceleration points in the negative direction *by your chosen convention*. It causes slowing down only if velocity is positive; if velocity is already negative, negative acceleration makes the object go faster (more negative). "Negative acceleration" ≠ "deceleration." |
| The **big four kinematics equations** (constant `a` only!) | 1) `v = v₀ + at`  2) `x = x₀ + v₀t + ½at²`  3) `v² = v₀² + 2a(x − x₀)`  4) `x = x₀ + ½(v₀ + v)t`. Each equation omits one variable (x, v, a, or t) — pick the one that's missing from your unknowns list. |
| **Free fall** sign convention | Pick up as positive (common convention): `a = −g = −9.8 m/s²` throughout the entire flight, on the way up *and* the way down — gravity never turns off or changes sign. At the peak, `v = 0` but `a` is still `−9.8 m/s²`. |

### Summary (write in your own words after class)

_Kinematics is bookkeeping for motion: position, velocity, and acceleration
are linked by slopes and areas on graphs, and by four equations that only
work when acceleration is constant. The sign convention you choose at the
start of a problem must stay fixed for the whole problem — that's where
most errors come from, not the math itself._

---

## Commonly Missed Concepts (build your quiz around these)

1. **"Negative acceleration always means slowing down."** False — it depends
   on the sign of the velocity. Deceleration requires `a` and `v` to have
   *opposite* signs.
2. **"Velocity is zero at the top of a thrown object's path, so acceleration
   is zero too."** False — velocity momentarily equals zero, but
   acceleration is `−g` throughout the entire flight, including at the peak.
3. **Confusing slope and area on graphs.** On a v–t graph, students often
   read the *height* of the curve as displacement (it's velocity) instead of
   the *area under* it.
4. **Using average speed formulas for average velocity problems**, or
   vice versa, when direction reverses (e.g., "drove 60 km/h there and
   40 km/h back" — average velocity over the round trip is 0, but average
   speed is not).
5. **Picking the wrong kinematics equation** because they didn't first list
   knowns/unknowns — leads to needing a variable they don't have.
6. **Dropping the sign on `v₀` or `a`** in free-fall or "thrown downward"
   problems, especially when the object's initial velocity is opposite to
   the acceleration (e.g., ball thrown *up* from a cliff, still accelerating
   *down* the whole time).
7. **Confusing "distance traveled" with "displacement"** in problems with a
   turnaround (e.g., a car that speeds up, stops, and backs up).

---

## Practice Problems

1. A car accelerates from rest at `2.5 m/s²` for `6.0 s`. Find its final
   velocity and the distance traveled.
   *(Answer: v = 15 m/s; x = 45 m)*
2. A ball is thrown straight up at `20 m/s`. Taking up as positive and
   `g = 9.8 m/s²`, find (a) time to reach the peak, (b) maximum height,
   (c) velocity when it returns to the throwing point.
   *(Answer: (a) 2.04 s, (b) ≈ 20.4 m, (c) −20 m/s)*
3. A train slows from `30 m/s` to `10 m/s` over `400 m`. Find its
   acceleration. Is it positive or negative given the direction of motion?
   *(Answer: a ≈ −1.0 m/s²; negative because it opposes the direction of
   travel — this *is* deceleration since v is positive.)*
4. Sketch a velocity–time graph for a ball dropped from a height, bouncing
   elastically off the floor twice. Describe the corresponding
   position–time graph in words.
5. Runner A covers 100 m in 12 s at constant speed. Runner B starts from
   rest and accelerates uniformly to cover the same 100 m in 12 s. Do they
   ever have the same instantaneous velocity? When?
   *(Answer: Yes — at t = 6 s, B's velocity equals A's constant velocity,
   since B's average must equal A's constant value and velocity increases
   linearly from 0.)*

## Real-World Applications

- **Vehicle stopping distances** (driver's ed): reaction time = constant
  velocity phase; braking = constant (negative) acceleration phase — two
  different kinematics regimes stitched together.
- **Sprinting analytics**: 100 m sprinters are analyzed with velocity–time
  graphs to find their acceleration phase vs. top-speed phase.
- **Elevators and roller coasters**: the "floating" feeling at the top of a
  hill is a moment where the *car's* acceleration and gravity briefly
  create near free-fall conditions for the rider.
- **Radar/LIDAR speed guns**: measure instantaneous velocity directly,
  which is why "average speed" arguments don't hold up in traffic court.

## Learning Resources

- **Video:** Khan Academy — "One-dimensional motion" unit (velocity,
  acceleration, free fall)
- **Video:** The Organic Chemistry Tutor — "Kinematics Equations" playlist
- **Simulation:** PhET *Moving Man* (motion.colorado — simulate position,
  velocity, acceleration graphs interactively)
- **Simulation:** PhET *Forces and Motion: Basics* (for early intuition
  before Unit 3)
- **Reading:** OpenStax *University Physics Vol. 1*, Ch. 3 (Motion Along a
  Straight Line) — free PDF/online textbook
- **Practice bank:** The Physics Classroom — "1-D Kinematics" concept
  builders and problem sets

## Assessment Criteria (instructor rubric)

| Criterion | Meets expectations |
|---|---|
| Vector/scalar distinction | Correctly labels quantities as vector or scalar and applies signs consistently within a single problem |
| Graph interpretation | Correctly reads slope and area from both x–t and v–t graphs; can sketch one graph given the other |
| Equation selection | Identifies knowns/unknowns before selecting a kinematics equation; shows the selection reasoning |
| Free-fall reasoning | Applies constant `−g` throughout a full flight, including at the peak, without resetting acceleration to zero |
| Quiz mastery | Scores ≥ 80% on `quiz.html`, including correct explanations for at least 2 previously-missed questions on retake |
