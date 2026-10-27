# Unit 2: Projectile Motion

## NGSS Learning Goals
- HS-PS2-1 (applying Newton's second law to two-dimensional motion)
- Science & Engineering Practices: Using Mathematics and Computational Thinking; Developing and Using Models
- Crosscutting Concepts: Systems and System Models; Scale, Proportion, and Quantity

## Learning Objectives
Students will be able to:

- [ ] Resolve a velocity vector into horizontal and vertical components.
- [ ] Explain why horizontal and vertical motion are independent for a projectile.
- [ ] Calculate time of flight, maximum height, and range for horizontal and angled launches.
- [ ] Predict how launch angle and speed change a trajectory; recognize that 45° gives maximum range on level ground.
- [ ] Evaluate a computational (spreadsheet or simulation) model of a projectile against measured data.

## Key Concepts
- Vector components: vₓ = v cosθ, v_y = v sinθ
- Independence of x and y motion
- Horizontal: a = 0, constant vₓ
- Vertical: a = −9.8 m/s²
- Time of flight depends only on vertical motion
- Range, maximum height, symmetry of the parabola
- Complementary launch angles give equal range
- Air resistance as a model limitation

## Cornell Notes — Projectile Motion

| Cue / Question | Notes |
|---|---|
| **What is a projectile?** | An object moving only under gravity after launch (air resistance neglected). Its path is a parabola. |
| **How do I split the velocity?** | vₓ = v cosθ (horizontal), v_y = v sinθ (vertical), with θ measured from horizontal. Check calculator is in DEGREES. |
| **Independence of motion?** | Horizontal: a = 0, so vₓ is constant and x = vₓt. Vertical: a = −9.8 m/s², so use the kinematics equations. Time t links the two. |
| **Horizontal launch from height h?** | v_y₀ = 0. Fall time t = √(2h/g). Range = vₓ · t. A ball rolled off a table and one dropped from the same height land at the same time. |
| **Angled launch on level ground?** | Time of flight T = 2v sinθ / g. Max height H = (v sinθ)² / 2g. Range R = v² sin2θ / g. Max range at 45°; θ and 90°−θ give equal range. |
| **What stays the same / changes?** | vₓ constant. v_y changes by −9.8 m/s each second. At the peak v_y = 0 but a = −9.8. Speed at launch height on the way down equals launch speed. |

**Summary (write in your own words):** Treat x and y separately: constant velocity horizontally, constant acceleration vertically, linked by the same time t. Time of flight comes from the vertical motion; range comes from vₓ × t.

## Learning Resources
- PhET Simulation — Projectile Motion (phet.colorado.edu)
- The Physics Classroom — Vectors and Projectiles
- Khan Academy — Two-dimensional projectile motion
- OpenStax High School Physics — Two-Dimensional Motion
- Desmos or Google Sheets — build a trajectory calculator (computational model)

**Lab / investigation:** Launcher lab: fire a ball from a spring launcher at several angles, predict range with a spreadsheet model, then compare predicted and measured values and discuss sources of error.

## Practice Problems

1. A ball is kicked horizontally at 10 m/s from a 20 m cliff. How long is it in the air and how far from the base does it land?
   <details><summary>Answer</summary>t = √(2×20/9.8) ≈ 2.0 s; range ≈ 20 m.</details>
2. A soccer ball is kicked at 20 m/s at 30° above horizontal. Find vₓ and v_y initially.
   <details><summary>Answer</summary>vₓ = 20cos30° ≈ 17.3 m/s; v_y = 20sin30° = 10 m/s.</details>
3. For the kick above, find time of flight, max height, and range on level ground.
   <details><summary>Answer</summary>T = 2(10)/9.8 ≈ 2.0 s; H = 10²/(2×9.8) ≈ 5.1 m; R = 17.3 × 2.04 ≈ 35 m.</details>
4. Two stones are thrown at the same speed, one at 30° and one at 60°. Compare range and time of flight.
   <details><summary>Answer</summary>Equal ranges; the 60° stone has the longer flight time and greater height.</details>
5. A cannonball is fired at 50 m/s at 45°. How fast is it moving at the top of its flight?
   <details><summary>Answer</summary>Only vₓ remains: 50cos45° ≈ 35 m/s.</details>

## Real-World Applications
- Sports: basketball free throws, football kicks, long jump
- Firefighting water streams and irrigation sprinklers
- Ballistics and forensic reconstruction
- Space launches and orbital insertion (extension)
- Video-game physics engines

## Most-Missed Questions (interactive version in `site/index.html`)

1. Ignoring air resistance, the horizontal velocity of a projectile during flight:  
   A) Increases; B) Decreases; C) Stays constant; D) Is zero at the top  
   <details><summary>Answer</summary>**C** — No horizontal force acts, so horizontal acceleration is zero and vₓ is constant.</details>
2. One ball is dropped and another is shot horizontally from the same height at the same instant. Which hits the ground first?  
   A) The dropped ball; B) The horizontally shot ball; C) They land at the same time; D) Depends on the horizontal speed  
   <details><summary>Answer</summary>**C** — Vertical motion is independent of horizontal motion. Both start with v_y = 0 and fall with the same g.</details>
3. At the highest point of a projectile's flight, its acceleration is:  
   A) Zero; B) 9.8 m/s² downward; C) 9.8 m/s² upward; D) Equal to its horizontal velocity  
   <details><summary>Answer</summary>**B** — Gravity is constant throughout. Only v_y is zero at the top.</details>
4. A ball launched at 20 m/s at 30° above horizontal has initial vertical velocity:  
   A) 17.3 m/s; B) 20 m/s; C) 10 m/s; D) 34.6 m/s  
   <details><summary>Answer</summary>**C** — v_y = v sinθ = 20 sin30° = 10 m/s. 17.3 m/s is the horizontal component (cosine).</details>
5. Which pair of launch angles (same speed, level ground) gives the same range?  
   A) 30° and 45°; B) 30° and 60°; C) 20° and 50°; D) 15° and 80°  
   <details><summary>Answer</summary>**B** — Complementary angles (adding to 90°) give equal range.</details>
6. A ball is rolled off a table at 2 m/s. The table is 1.0 m high. About how far from the table's edge does it land?  
   A) 0.9 m; B) 2.0 m; C) 0.45 m; D) 4.0 m  
   <details><summary>Answer</summary>**A** — t = √(2×1.0/9.8) ≈ 0.45 s; range = 2 × 0.45 ≈ 0.9 m.</details>
7. A ball is thrown at 20 m/s from the ground and lands on level ground. Ignoring air resistance, its speed just before landing is:  
   A) 0 m/s; B) 10 m/s; C) 20 m/s; D) 40 m/s  
   <details><summary>Answer</summary>**C** — By symmetry the vertical velocity reverses and the horizontal is unchanged, so speed at the same height equals launch speed.</details>
8. What determines how long a projectile stays in the air?  
   A) Its horizontal velocity; B) Its vertical motion (initial v_y and height); C) Its mass; D) Its range  
   <details><summary>Answer</summary>**B** — Time of flight is set by the vertical motion alone. Range depends on that time and the horizontal velocity.</details>

## Assessment Criteria

| Level | Description |
|---|---|
| Mastery (4) | Correct setup, units, and sign conventions; explains reasoning with the relevant law or model; connects to a graph or real-world case. |
| Proficient (3) | Correct method with a minor arithmetic, unit, or sign slip; reasoning mostly complete. |
| Developing (2) | Identifies relevant concepts but applies a formula incorrectly or skips steps; partial reasoning. |
| Beginning (1) | Recalls isolated facts or formulas; cannot yet set up or explain the problem. |

**Mastery check:** score ≥ 80% on the interactive quiz twice (different days), complete the lab report at Proficient or above, and check off every objective above.
