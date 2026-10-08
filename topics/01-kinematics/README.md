# 1. Kinematics
*Describing motion in one dimension*

**Big idea:** Motion can be described precisely with position, velocity, and acceleration, and the three are linked by rates of change.

**Quick links:** [Cornell notes](cornell-notes.md) · [Quiz + answer key](quiz.md) · [Interactive quiz](../../site/index.html#kinematics)

## NGSS alignment (California)
- **HS-PS2-1** — Foundation: students must describe motion (velocity, acceleration) before they can analyze it with Newton's second law.

- Science & Engineering Practices: Using Mathematics and Computational Thinking; Analyzing and Interpreting Data
- Crosscutting Concepts: Patterns; Cause and Effect

## Key concepts to master
- [ ] **Distance vs. displacement.** Distance is the total path length (scalar). Displacement is the straight-line change in position, with direction (vector).
- [ ] **Speed vs. velocity.** Speed = distance / time (scalar). Velocity = displacement / time (vector). Direction matters.
- [ ] **Acceleration.** a = Δv / Δt. Any change in velocity (speeding up, slowing down, or turning) is acceleration. Units: m/s².
- [ ] **Sign and direction.** Choose a positive direction. Speeding up means v and a have the same sign; slowing down means opposite signs.
- [ ] **Constant-acceleration equations.** v = v₀ + at;  Δx = v₀t + ½at²;  v² = v₀² + 2aΔx;  Δx = ½(v₀ + v)t.
- [ ] **Motion graphs.** On x–t, slope = velocity. On v–t, slope = acceleration and area = displacement. On a–t, area = change in velocity.
- [ ] **Free fall.** With air resistance ignored, every object near Earth's surface accelerates at g = 9.8 m/s² downward, regardless of mass.

## Learning objectives & assessment criteria
| ID | Objective | Evidence of mastery |
|----|-----------|---------------------|
| K1 | I can distinguish distance from displacement and speed from velocity, and calculate each. | Correct quantity chosen, correct sign/direction, correct units in 4 of 5 problems. |
| K2 | I can calculate acceleration from changes in velocity and interpret its sign. | Computes a = Δv/Δt and states whether the object is speeding up or slowing down. |
| K3 | I can select and apply the constant-acceleration equations to solve multi-step problems. | Lists knowns/unknown, picks an equation, shows substitution with units. |
| K4 | I can interpret and sketch x–t, v–t, and a–t graphs for a described motion. | Slope and area correctly used; graph matches the verbal description. |
| K5 | I can analyze free-fall motion, including the motion at the top of a toss. | Uses a = −9.8 m/s² throughout; explains v = 0 at the top without a = 0. |
| K6 | I can read a dot diagram (ticker tape) to decide if motion is constant, speeding up, or slowing down, and calculate speed and acceleration from it. | Counts gaps (not dots), uses v = gap ÷ Δt with unit conversion, and a = (change in gap) ÷ Δt² for evenly changing gaps. |

Track progress with the checklist in [docs/assessment-and-tracking.md](../../docs/assessment-and-tracking.md).

## Practice problems
Try each problem before opening the answer.

1. A car accelerates from rest at 3.0 m/s² for 8.0 s. Find its final speed and the distance covered.
   <details><summary>Answer</summary>

   v = 24 m/s; Δx = ½(3.0)(8.0)² = 96 m.

   </details>

2. A driver traveling 20 m/s brakes to a stop in 50 m. Find the acceleration and the stopping time.
   <details><summary>Answer</summary>

   a = −v₀²/(2Δx) = −400/100 = −4.0 m/s². t = Δv/a = (0 − 20)/(−4.0) = 5.0 s.

   </details>

3. A rock is dropped from a 45 m cliff (ignore air resistance). How long does it fall and how fast is it moving at impact?
   <details><summary>Answer</summary>

   t = √(2·45/9.8) ≈ 3.0 s; v = gt ≈ 30 m/s (29.7 m/s).

   </details>

4. A student walks 40 m east in 20 s, then 40 m west in 20 s. Find average speed and average velocity for the whole trip.
   <details><summary>Answer</summary>

   Speed = 80 m / 40 s = 2.0 m/s. Velocity = 0 m / 40 s = 0 m/s.

   </details>

5. A dot diagram is drawn every 0.20 s. The gaps from left to right are 2.0, 4.0, 6.0, 8.0 cm. Describe the motion, then find the speed in the first and last gap and the acceleration.
   <details><summary>Answer</summary>

   Gaps grow evenly: speeding up with constant acceleration. v₁ = 0.020/0.20 = 0.10 m/s; v₄ = 0.080/0.20 = 0.40 m/s. a = (0.020 m)/(0.20 s)² = 0.50 m/s².

   </details>

6. Hint practice: a dot diagram has 7 dots drawn every 0.50 s with equal 12 cm gaps. How many time intervals are there, how long did the motion take, and what is the speed?
   <details><summary>Answer</summary>

   6 gaps (count spaces, not faces), so 3.0 s. v = 0.12 m / 0.50 s = 0.24 m/s, constant.

   </details>

7. A ball is thrown straight up at 14.7 m/s. How long until it returns to the thrower's hand, and how high does it go?
   <details><summary>Answer</summary>

   Time up = 14.7/9.8 = 1.5 s, so total = 3.0 s. Height = v₀²/(2g) = 11.0 m.

   </details>

## Learning resources
| Resource | Type | How to use it |
|----------|------|---------------|
| [PhET: Moving Man](https://phet.colorado.edu) | Simulation | Drag the man and watch x–t, v–t, and a–t graphs update together. |
| [The Physics Classroom: 1-D Kinematics](https://www.physicsclassroom.com) | Tutorial + practice | Concept builders and graph-reading practice. |
| [Khan Academy: One-dimensional motion](https://www.khanacademy.org) | Video + exercises | Self-paced review of the kinematic equations. |
| [OpenStax High School Physics, Ch. 2](https://openstax.org) | Free textbook | Reading and worked examples. |
| [IXL Physics](https://www.ixl.com) | Adaptive practice | Skill practice aligned to class cornell-note practice plans. |
| Lab idea: Ramp & cart motion sensor | Hands-on lab | Collect x–t data with a motion sensor or phone video analysis; derive v and a from slope. |

## Real-world applications
- Traffic safety: stopping distance grows with the square of speed (v² = 2aΔx), which is why speed limits drop near schools.
- Sports analytics: sprint start acceleration and 40-yard-dash splits.
- Aviation: runway length requirements from takeoff speed and acceleration.
- Accident reconstruction: skid-mark length reveals pre-braking speed.

## Checklist
- [ ] Completed Cornell notes (cues, notes, summary)
- [ ] Took the interactive quiz and reviewed every missed question
- [ ] Solved all practice problems
- [ ] Completed the lab or simulation
- [ ] Self-assessed every objective (K1, K2, K3, K4, K5, K6)
