# 2. Projectile Motion
*Two independent motions at once*

**Big idea:** A projectile's horizontal and vertical motions are independent: constant velocity sideways, constant downward acceleration vertically.

**Quick links:** [Cornell notes](cornell-notes.md) · [Quiz + answer key](quiz.md) · [Interactive quiz](../../site/index.html#projectile)

## NGSS alignment (California)
- **HS-PS2-1** — Use Newton's second law with gravity as the only force to predict the motion of a launched object.

- Science & Engineering Practices: Using Mathematics and Computational Thinking; Developing and Using Models
- Crosscutting Concepts: Systems and System Models; Cause and Effect

## Key concepts to master
- [ ] **Independence of components.** Horizontal and vertical motion are analyzed separately and linked only by the shared time of flight.
- [ ] **Horizontal motion.** With no air resistance there is no horizontal force, so aₓ = 0 and vₓ is constant: x = vₓt.
- [ ] **Vertical motion.** Gravity gives a_y = −9.8 m/s² the entire flight. Use the kinematic equations in y.
- [ ] **Vector components.** For launch speed v at angle θ: vₓ = v cos θ and v_y = v sin θ.
- [ ] **Key points in flight.** At the peak v_y = 0 (but vₓ ≠ 0 and a_y is still −9.8). Time up = time down for a launch and landing at the same height.
- [ ] **Range and angle.** Range = v² sin 2θ / g on level ground. Maximum at 45°; complementary angles (30° and 60°) give equal range.
- [ ] **Horizontal launch.** Launched horizontally from height h: v_y,0 = 0, so t = √(2h/g), independent of launch speed.

## Learning objectives & assessment criteria
| ID | Objective | Evidence of mastery |
|----|-----------|---------------------|
| P1 | I can resolve a launch velocity into horizontal and vertical components. | Correct use of sin/cos with the launch angle in 4 of 5 problems. |
| P2 | I can explain why horizontal and vertical motions are independent. | Explanation names aₓ = 0 and a_y = −g and uses the 'dropped vs. fired' comparison. |
| P3 | I can solve horizontal-launch problems (time, range, impact velocity). | Finds t from the vertical motion first, then x = vₓt. |
| P4 | I can solve angled-launch problems for time of flight, maximum height, and range. | Separates components, uses symmetry, includes units. |
| P5 | I can predict how changing launch speed, angle, or height changes the trajectory. | Predictions are justified with equations or a simulation, then tested. |

Track progress with the checklist in [docs/assessment-and-tracking.md](../../docs/assessment-and-tracking.md).

## Practice problems
Try each problem before opening the answer.

1. A ball is kicked horizontally at 15 m/s from a 20 m cliff. Find the time of flight and the horizontal distance traveled.
   <details><summary>Answer</summary>

   t = √(2·20/9.8) = 2.0 s; x = 15 × 2.02 ≈ 30 m.

   </details>

2. A projectile is launched at 25 m/s at 30° on level ground. Find the time of flight, maximum height, and range.
   <details><summary>Answer</summary>

   vₓ = 21.7 m/s, v_y0 = 12.5 m/s. t = 2(12.5)/9.8 = 2.55 s. H = 12.5²/(2·9.8) = 8.0 m. R = 21.7 × 2.55 ≈ 55 m.

   </details>

3. At what other launch angle would the 30° projectile above have the same range?
   <details><summary>Answer</summary>

   60° (complementary angle), with a longer time of flight and greater maximum height.

   </details>

4. A stone is thrown horizontally at 8.0 m/s from a bridge and hits the water 2.0 s later. How high is the bridge, and what is the stone's speed at impact?
   <details><summary>Answer</summary>

   h = ½(9.8)(2.0)² = 19.6 m. v_y = 19.6 m/s; speed = √(8.0² + 19.6²) ≈ 21 m/s.

   </details>

5. A basketball is released at a fixed speed and angle. Explain how the flight time and range change if the player jumps and releases the ball from a higher point.
   <details><summary>Answer</summary>

   Flight time and range both increase slightly because the ball starts higher and has more vertical distance to fall; the shape stays a parabola.

   </details>

## Learning resources
| Resource | Type | How to use it |
|----------|------|---------------|
| [PhET: Projectile Motion](https://phet.colorado.edu) | Simulation | Vary angle, speed, and height; toggle air resistance; compare components. |
| [The Physics Classroom: Projectiles](https://www.physicsclassroom.com) | Tutorial + practice | Horizontal vs. angled launch walkthroughs. |
| [Khan Academy: Two-dimensional projectile motion](https://www.khanacademy.org) | Video + exercises | Component practice. |
| [OpenStax High School Physics, Ch. 3](https://openstax.org) | Free textbook | Worked examples with vectors. |
| Lab idea: Marble launch & landing target | Hands-on lab | Predict the landing point of a marble leaving a ramp, then test; calculate % error. |
| Phone video analysis (e.g., Tracker, free) | Technology | Film a thrown ball; plot x–t and y–t to confirm independence of components. |

## Real-world applications
- Sports: optimal launch angle for shot put, long jump, basketball free throws, and soccer free kicks (a bit under 45° when release height is above landing height).
- Emergency response: water arc from a fire hose reaching a window.
- Engineering: designing fountains, sprinklers, and conveyor drop-offs.
- Space science: horizontal launch at orbital speed is projectile motion where the ground curves away.

## Checklist
- [ ] Completed Cornell notes (cues, notes, summary)
- [ ] Took the interactive quiz and reviewed every missed question
- [ ] Solved all practice problems
- [ ] Completed the lab or simulation
- [ ] Self-assessed every objective (P1, P2, P3, P4, P5)
