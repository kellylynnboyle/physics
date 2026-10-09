# Unit 2: Projectile Motion

**Pacing:** 2 weeks  |  **NGSS:** HS-PS2-1

> **Essential question:** How can we predict where a thrown or launched object will land?

*Projectile motion applies Newton's second law in two independent dimensions (constant a_y = −g, a_x = 0) and uses data/graph analysis aligned with HS-PS2-1.*

## 1. Learning objectives

- [ ] Explain why horizontal and vertical motion are independent and what stays constant in each.
- [ ] Resolve an initial velocity into x and y components using trigonometry.
- [ ] Calculate time of flight, range, and maximum height for horizontal and angled launches.
- [ ] Predict how changing launch angle or speed affects range and flight time.
- [ ] Design and test a launcher experiment and compare data with predictions.

## 2. Key concepts

| Concept | What students must master |
|---|---|
| **Independence of motion** | Horizontal and vertical motions happen at the same time but do not affect each other. Time connects them. |
| **Horizontal motion** | No horizontal force (ignoring air) ⇒ a_x = 0 and v_x is constant: x = v_x·t. |
| **Vertical motion** | Free fall: a_y = −9.8 m/s². Use the kinematic equations with v_y. |
| **Components** | v_x = v cosθ;  v_y = v sinθ. |
| **Angled launch from level ground** | T = 2v_y/g;  R = v²sin2θ/g;  H = v_y²/(2g). |
| **Symmetry & range** | Complementary angles (30°/60°) give equal range; 45° gives maximum range (no air resistance, level ground). |

**Key formulas:** `v_x = v cosθ`  ·  `v_y = v sinθ`  ·  `x = v_x t`  ·  `y = y₀ + v_y t − ½gt²`  ·  `R = v² sin2θ / g`

## 3. Cornell notes (cue column / notes column)

| Cues / Questions | Notes |
|---|---|
| What does 'independent' mean here? | Horizontal and vertical motion don't influence each other. A dropped ball and a ball shot horizontally from the same height hit the ground together. |
| What is happening horizontally? | Constant velocity (a_x = 0). Use x = v_x·t. |
| What is happening vertically? | Constant acceleration g downward. Use v_y = v_{y0} − gt, y = v_{y0}t − ½gt². |
| How do I break a launch speed into components? | v_x = v·cosθ, v_y = v·sinθ (θ above horizontal). Draw a right triangle. |
| What is true at the peak? | v_y = 0 but v_x ≠ 0 (still moving sideways). a = 9.8 m/s² down. Speed is minimum at the peak. |
| How to solve a horizontal launch? | 1) Use height to get t = √(2h/g). 2) Use t to get range x = v_x·t. 3) v_y at landing = gt. |
| Angle and range? | Max range at 45°. θ and 90°−θ give the same range; higher angle → longer time and higher peak. Range ∝ v². |

**Summary (write in your own words):** A projectile is any object moving under gravity alone. Treat x and y separately: constant velocity horizontally, constant downward acceleration vertically, linked by the shared time.

## 4. Most-missed questions (self-quiz)

Try each question before opening the answer. The interactive version is in `site/index.html`.

**1. Ignoring air resistance, what is the horizontal acceleration of a projectile in flight?**

   - A. 9.8 m/s²
   - B. Zero
   - C. It decreases over time
   - D. It equals the launch speed

<details><summary>Answer</summary>

**B.** No horizontal force acts, so a_x = 0 and v_x is constant.  
*Common mistake:* Believing a 'force of the throw' keeps acting on the object.

</details>

**2. One ball is dropped and another is shot horizontally from the same height at the same instant. Which lands first?**

   - A. the dropped ball
   - B. the horizontally shot ball
   - C. they land together
   - D. depends on the shot speed

<details><summary>Answer</summary>

**C.** Vertical motion is identical (both start with v_y = 0 and a = g). Horizontal speed doesn't change fall time.  
*Common mistake:* Thinking horizontal velocity changes vertical motion.

</details>

**3. At the highest point of a projectile's path (launched at an angle), which statement is correct?**

   - A. v = 0 and a = 0
   - B. v_y = 0 and a = 9.8 m/s² down
   - C. v_x = 0 and a = 9.8 m/s² down
   - D. the speed is at its maximum

<details><summary>Answer</summary>

**B.** Only the vertical component is zero at the peak; horizontal velocity continues and gravity still accelerates it.  
*Common mistake:* Treating the peak as a momentary stop for the whole object.

</details>

**4. A ball is launched at 20 m/s at 30° above horizontal. What is its initial vertical velocity?**

   - A. 17.3 m/s
   - B. 10 m/s
   - C. 20 m/s
   - D. 34.6 m/s

<details><summary>Answer</summary>

**B.** v_y = 20 sin30° = 10 m/s. (17.3 m/s is v_x = 20 cos30°.)  
*Common mistake:* Swapping sine and cosine.

</details>

**5. A ball is launched at 30° and another at 60° with the same speed from level ground. Compared with the 30° ball, the 60° ball has:**

   - A. a shorter range
   - B. a longer range
   - C. the same range
   - D. a range of zero

<details><summary>Answer</summary>

**C.** R = v² sin2θ/g and sin60° = sin120°. Complementary angles give equal range.  
*Common mistake:* Assuming a bigger angle must mean a longer range.

</details>

**6. Ignoring air resistance and launching from level ground, which angle gives the maximum range?**

   - A. 30°
   - B. 45°
   - C. 60°
   - D. 90°

<details><summary>Answer</summary>

**B.** sin2θ is maximized when 2θ = 90°.  
*Common mistake:* Mixing up the range-optimal angle with the max-height angle (90°).

</details>

**7. A ball rolls horizontally off a 19.6 m high table at 15 m/s. How far from the base of the table does it land?**

   - A. 15 m
   - B. 30 m
   - C. 19.6 m
   - D. 60 m

<details><summary>Answer</summary>

**B.** t = √(2·19.6/9.8) = 2.0 s; x = 15·2.0 = 30 m.  
*Common mistake:* Skipping the time-of-fall step (using height as the range, or not finding t).

</details>

**8. You stand in a train moving at constant velocity and toss a ball straight up. The ball lands:**

   - A. behind you
   - B. ahead of you
   - C. in your hand
   - D. outside the train

<details><summary>Answer</summary>

**C.** The ball keeps the train's horizontal velocity (no horizontal force), so it stays above your hand.  
*Common mistake:* Forgetting inertia: the ball shares the train's horizontal motion.

</details>

**9. A projectile is launched, rises, then falls back to its launch height. How does its speed on the way down at launch height compare to its launch speed?**

   - A. smaller
   - B. larger
   - C. equal
   - D. zero

<details><summary>Answer</summary>

**C.** Symmetry: with no air resistance, speed at equal heights is the same (and direction is mirrored).  
*Common mistake:* Thinking energy is 'used up' on the way.

</details>

**10. If you double the launch speed at the same angle (level ground, no air resistance), the range becomes:**

   - A. 2 times as big
   - B. 4 times as big
   - C. the same
   - D. √2 times as big

<details><summary>Answer</summary>

**B.** R ∝ v². Doubling v → 4× range.  
*Common mistake:* Assuming linear scaling.

</details>

## 5. Common misconceptions to watch for

- A force is needed to keep the projectile moving forward (no—inertia).
- At the peak, acceleration is zero.
- A horizontally launched ball takes longer to fall than a dropped one.
- Doubling launch speed doubles range (it quadruples it).

## 6. Practice problems

Show: knowns, unknown, equation, substitution with units, and a reasonableness check.

1. A ball is kicked horizontally at 12 m/s from a 44.1 m cliff. Find flight time, range, and vertical speed on impact.
   <details><summary>Answer</summary>t = 3.0 s; x = 36 m; v_y = 29.4 m/s downward</details>

2. A ball launches at 25 m/s at 37° (sin = 0.6, cos = 0.8). Find v_x, v_y, time of flight, range, and max height.
   <details><summary>Answer</summary>v_x = 20 m/s; v_y = 15 m/s; T = 3.06 s; R ≈ 61 m; H ≈ 11.5 m</details>

3. A football is kicked at 30 m/s at 45°. Find the range.
   <details><summary>Answer</summary>R = 30²·sin90°/9.8 ≈ 91.8 m</details>

4. A plane flying horizontally at 100 m/s drops a package from 490 m. How far ahead of the drop point does it land?
   <details><summary>Answer</summary>t = 10 s; x = 1000 m</details>

5. Two balls are launched at the same speed, one at 30° and one at 60°. Compare range and time in the air.
   <details><summary>Answer</summary>Same range; the 60° ball stays up longer and goes higher.</details>

6. A stone thrown horizontally from a bridge lands 20 m away after 2.0 s. Find its initial speed and the bridge height.
   <details><summary>Answer</summary>v = 10 m/s; h = ½(9.8)(4) = 19.6 m</details>

## 7. Learning resources

- [PhET: Projectile Motion simulation](https://phet.colorado.edu/en/simulations/projectile-motion)
- [The Physics Classroom: Projectile Motion](https://www.physicsclassroom.com/class/vectors)
- [Khan Academy: Two-dimensional projectile motion](https://www.khanacademy.org/science/physics/two-dimensional-motion)
- [HyperPhysics: Projectile motion](http://hyperphysics.phy-astr.gsu.edu/hbase/traj.html)

**Labs / investigations**

- Marble-launcher lab: predict landing spot of a horizontal launch, then test
- Video analysis (Tracker / phone video) of a basketball shot: plot x-t and y-t

## 8. Real-world applications

- Sports: basketball free throws, soccer kicks, javelin and long-jump angles (real optimal angles are below 45° because release height and air resistance matter).
- Emergency response: water-hose streams and fire-fighting aerial drops.
- Engineering: conveyor/ramp design and package drops; video game physics engines.
- Space and defense: ballistics and satellite launch trajectories (extension).

## 9. Assessment & tracking

**Performance task:** Launch challenge: hit a target landing spot using only measured v₀ and calculations.

**Mastery checklist**

- [ ] Unit quiz: 80% or higher (retakes allowed; quiz bank is randomized).
- [ ] Cornell notes completed with cues, notes, and a 3–4 sentence summary.
- [ ] At least one lab report scored 3 or higher on the 4-point rubric.
- [ ] Practice problem set: 5 of 6 correct with work shown.
- [ ] Performance task for the standard (see below) scored 3 or higher.

See [assessment.md](assessment.md) for the 4-point rubric.
