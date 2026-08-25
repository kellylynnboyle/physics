# Projectile Motion — Resources

## Learning Resources

- **Khan Academy — Projectile Motion** ([khanacademy.org](https://www.khanacademy.org)): Search the Khan Academy Physics library for the "Two-dimensional motion" / "Projectile motion" unit. Includes video lessons on horizontal and vertical component analysis, worked examples, and practice exercises with instant feedback.
- **PhET Interactive Simulations — "Projectile Motion"** ([phet.colorado.edu](https://phet.colorado.edu)): A free, interactive simulation from the University of Colorado Boulder. Lets you launch projectiles (cannonballs, footballs, and more), adjust launch angle, speed, mass, and air resistance, and directly measure range, height, and time of flight. Excellent for building intuition about how each variable affects the trajectory.
- **The Physics Classroom — Projectile Motion unit** ([physicsclassroom.com](https://www.physicsclassroom.com)): A full written tutorial (part of "Unit 3: Vectors and Projectiles") covering the characteristics of projectile motion, horizontal and vertical component analysis, and worked sample problems, along with interactive practice ("Concept Builders") and self-check quizzes.
- **Relevant textbook topics**: Look for chapters titled "Motion in Two Dimensions," "Two-Dimensional Kinematics," or "Projectile Motion" in any introductory algebra-based physics textbook (e.g., OpenStax *College Physics* or *Physics*, freely available online). These chapters typically follow directly after one-dimensional kinematics and vectors.

## Practice Problems

1. **(Horizontal launch)** A ball rolls off a table 1.25 m high with a horizontal speed of 2.0 m/s. How long does it take to hit the floor, and how far from the base of the table does it land?
   **Answer:** t = √(2h/g) = √(2 × 1.25 / 9.8) ≈ 0.505 s. Range = v0 × t = 2.0 × 0.505 ≈ 1.01 m.

2. **(Horizontal launch, find speed)** A stone is thrown horizontally from a cliff 20 m high and lands 30 m from the base of the cliff. What was its initial horizontal speed?
   **Answer:** t = √(2h/g) = √(2 × 20 / 9.8) ≈ 2.02 s. v0 = Range / t = 30 / 2.02 ≈ 14.9 m/s.

3. **(Angled launch, level ground — time of flight)** A soccer ball is kicked at 15 m/s at an angle of 35° above the horizontal on level ground. How long is it in the air?
   **Answer:** v0y = 15 sin 35° ≈ 8.60 m/s. t = 2v0y/g = 2 × 8.60 / 9.8 ≈ 1.76 s.

4. **(Angled launch, level ground — max height)** Using the same soccer ball from Problem 3 (15 m/s at 35°), find its maximum height above the ground.
   **Answer:** h_max = v0y² / (2g) = (8.60)² / (2 × 9.8) ≈ 3.78 m.

5. **(Angled launch, level ground — range)** Using the same soccer ball from Problems 3–4 (15 m/s at 35°), find its horizontal range.
   **Answer:** v0x = 15 cos 35° ≈ 12.29 m/s. R = v0x × t = 12.29 × 1.76 ≈ 21.6 m. (Check with shortcut: R = v0² sin(2θ)/g = 225 × sin(70°)/9.8 ≈ 225 × 0.940/9.8 ≈ 21.6 m ✓.)

6. **(Complementary angles)** A javelin thrower can launch at either 25° or 65° with the same speed of 20 m/s on level ground. Show that both angles give the same range, and determine which one gives the greater maximum height.
   **Answer:** R(25°) = (20² × sin 50°)/9.8 = (400 × 0.766)/9.8 ≈ 31.3 m. R(65°) = (20² × sin 130°)/9.8 = (400 × 0.766)/9.8 ≈ 31.3 m — equal, confirming the complementary-angle rule. Max height: h(25°) = (20 sin 25°)²/(2×9.8) = (8.45)²/19.6 ≈ 3.64 m. h(65°) = (20 sin 65°)²/(2×9.8) = (18.13)²/19.6 ≈ 16.8 m. The steeper 65° launch reaches a much greater height.

7. **(Launch from a height, angled — general case)** A cannonball is fired from the top of a 40 m wall at 25 m/s at an angle of 30° above the horizontal, launched out over lower ground. Find the total time of flight before it lands.
   **Answer:** v0y = 25 sin 30° = 12.5 m/s. Taking up as positive and the launch point as the origin, the ball lands at Δy = −40 m: −40 = 12.5t − 4.9t². Rearranged: 4.9t² − 12.5t − 40 = 0. Using the quadratic formula: t = [12.5 ± √(12.5² + 4×4.9×40)] / (2×4.9) = [12.5 ± √(156.25 + 784)] / 9.8 = [12.5 ± 30.66] / 9.8. Taking the positive root: t ≈ 43.16 / 9.8 ≈ 4.40 s.

8. **(Launch from a height, angled — full solve for range and comparison to shortcut formula)** Using the cannonball from Problem 7 (25 m/s at 30°, launched from a 40 m wall), find the horizontal range, and explain why the simple shortcut formula R = v0² sin(2θ)/g would give the wrong answer here.
   **Answer:** v0x = 25 cos 30° ≈ 21.65 m/s. R = v0x × t ≈ 21.65 × 4.40 ≈ 95.3 m. The shortcut formula assumes launch height equals landing height; here the cannonball launches from 40 m up and lands at ground level, so that assumption is violated, and plugging into the shortcut formula (which would give R = 25² sin 60°/9.8 ≈ 55.2 m) drastically underestimates the true range because it ignores the extra time gained by falling the additional 40 m.

## Real-World Applications

- **Basketball free throws**: A basketball shot toward the hoop follows a parabolic path determined by the shooter's release speed, release angle, and release height. Players intuitively adjust launch angle and force to get the ball's downward-arcing trajectory to intersect the rim at the right point — a shot that's too flat has little margin for error, which is why experienced shooters favor a moderately high arc.
- **Artillery and ballistics**: Military and historical artillery calculations rely directly on projectile motion equations to predict where a shell will land based on muzzle velocity and firing angle. Real ballistics also must account for air resistance and even the curvature/rotation of the Earth over long distances, but the basic no-air-resistance projectile model gives the essential first-order predictions taught in introductory courses.
- **Long jump technique**: A long jumper's horizontal distance depends on their takeoff speed and takeoff angle, just like any projectile. Because horizontal running speed is usually far easier to build than vertical leap, elite jumpers use a relatively low takeoff angle (often well under 45°) to preserve their large horizontal velocity component rather than sacrificing speed for height.
- **Water fountain (decorative fountain) design**: Ornamental fountains use nozzles angled to send water along parabolic arcs, and designers rely on projectile motion equations to determine the nozzle angle and water pressure (launch speed) needed so the water arcs land in a desired pool location rather than splashing bystanders. Different nozzle angles are also used deliberately to create varying arc heights and widths for visual effect.
- **Golf and soccer**: In golf, drivers are designed to launch the ball at close to the optimal angle for a given clubhead speed to maximize carry distance, though spin and air resistance mean real optimal angles are lower than the simple 45° prediction. In soccer, a well-struck long pass or shot follows projectile motion principles, and players use complementary-angle intuition (a flatter, faster shot versus a higher, looping one) to control both the distance and the arrival trajectory of the ball over a defender or into the goal.
