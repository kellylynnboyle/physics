# Projectile Motion

## Overview

Projectile motion describes the curved path taken by any object that is launched into the air and then moves under the influence of gravity alone. It is one of the most powerful ideas in introductory mechanics because it shows that a seemingly complicated two-dimensional path can be understood as two simple, independent one-dimensional motions happening at the same time. Once you separate a projectile's motion into a horizontal part and a vertical part, you can reuse everything you already know about constant velocity and constant acceleration to predict exactly where an object will be at any moment. This section builds the vocabulary, equations, and problem-solving habits needed to analyze anything from a thrown football to a cannonball fired off a cliff.

## Key Concepts to Master

- **Independence of horizontal and vertical motion** — the horizontal and vertical parts of a projectile's motion do not affect each other and can be analyzed separately using the same time variable, t.
- **Constant horizontal velocity** — with no air resistance, there is no horizontal force acting on a projectile, so its horizontal velocity never changes during the flight.
- **Vertical motion as free fall** — the vertical component of motion is governed entirely by gravity, so it behaves exactly like an object in free fall, with constant downward acceleration g.
- **Resolving initial velocity into components** — the launch angle θ is used with trigonometry to split the initial speed v0 into a horizontal component and a vertical component.
- **Parabolic trajectory** — because horizontal position grows linearly with time while vertical position grows quadratically, the path traced out by a projectile is a parabola.
- **Time of flight** — the total time the projectile spends in the air, determined entirely by the vertical motion (how long it takes to leave and return to a given height).
- **Maximum height** — the highest point of the trajectory, reached at the instant the vertical velocity momentarily equals zero.
- **Range** — the total horizontal distance traveled between launch and landing.
- **Symmetry of the trajectory** — when the launch height and landing height are equal, the path is symmetric: the time spent rising equals the time spent falling, and the speed at any height on the way up equals the speed at that same height on the way down.
- **Simultaneity of vertical motion** — an object launched horizontally and an identical object simply dropped from the same height, at the same instant, hit the ground at the same time, because their vertical motions are identical.

## Learning Objectives

Students will be able to...

1. Explain why horizontal and vertical motion can be analyzed independently in projectile motion.
2. Resolve an initial velocity vector into horizontal and vertical components using sine and cosine.
3. Write and apply the position and velocity equations for both the horizontal and vertical directions.
4. Calculate the time of flight, maximum height, and range for a projectile launched over level ground.
5. Analyze projectile motion for launches from an elevated height (non-level ground), including cases where the standard range/time formulas do not apply.
6. Explain and correctly apply the symmetry of a projectile's trajectory when launch and landing heights are equal.
7. Identify and correct common misconceptions about projectile motion, such as the belief that horizontal velocity decreases over time.
8. Use graphical and numerical reasoning to sketch and interpret the parabolic path of a projectile.

## Key Equations

| Equation | Variables | When to Use |
|---|---|---|
| v0x = v0 cos(θ) | v0x = initial horizontal velocity; v0 = initial speed; θ = launch angle above horizontal | To find the horizontal component of the initial velocity at the start of any problem |
| v0y = v0 sin(θ) | v0y = initial vertical velocity; v0 = initial speed; θ = launch angle above horizontal | To find the vertical component of the initial velocity at the start of any problem |
| vx(t) = v0x | vx(t) = horizontal velocity at time t; v0x = initial horizontal velocity | Whenever you need the horizontal velocity at any point in the flight (it never changes) |
| vy(t) = v0y − g t | vy(t) = vertical velocity at time t; v0y = initial vertical velocity; g = acceleration due to gravity (9.8 m/s²); t = elapsed time | To find how fast the projectile is moving vertically at a given time, including finding when vy = 0 at the peak |
| x(t) = x0 + v0x t | x(t) = horizontal position at time t; x0 = initial horizontal position; v0x = initial horizontal velocity; t = elapsed time | To find horizontal distance traveled at a given time |
| y(t) = y0 + v0y t − ½ g t² | y(t) = vertical position at time t; y0 = initial height; v0y = initial vertical velocity; g = acceleration due to gravity; t = elapsed time | To find height at a given time, or to solve for time of flight by setting y(t) equal to the landing height |
| R = (v0² sin(2θ)) / g | R = range; v0 = initial speed; θ = launch angle; g = acceleration due to gravity | Only when launch height equals landing height (level ground) |
| T = (2 v0 sin θ) / g | T = time of flight; v0 = initial speed; θ = launch angle; g = acceleration due to gravity | Only when launch height equals landing height (level ground) |

## Common Misconceptions

1. **Misconception:** Horizontal velocity decreases or "runs out" as a projectile flies through the air.
   **Reality:** With no air resistance, there is no horizontal force acting on the projectile, so vx stays exactly constant from launch to landing.

2. **Misconception:** An object dropped from height h and a second object launched horizontally from the same height h at the same instant land at different times.
   **Reality:** They land at the same time. Horizontal motion has no effect on vertical motion, so both objects experience identical vertical motion (same y0, same v0y = 0, same g) and hit the ground simultaneously.

3. **Misconception:** Maximum range always occurs at a 45° launch angle, no matter the situation.
   **Reality:** A 45° angle only maximizes range when the launch height equals the landing height. When launching from an elevated point to a lower landing point, the optimal angle is less than 45°.

4. **Misconception:** Vertical velocity is zero for the entire flight, not just at the top.
   **Reality:** Vertical velocity is zero for only an instant, exactly at the peak of the trajectory. Before that instant it is positive (moving upward), and after it is negative (moving downward), continuously changing due to gravity.

5. **Misconception:** You should plug the full initial speed v0 into the vertical motion equations.
   **Reality:** The vertical equations require the vertical component of velocity, v0y = v0 sin(θ), not the full speed v0. Forgetting to resolve into components is one of the most common sources of error.

6. **Misconception:** A heavier projectile follows a different trajectory than a lighter one launched with the same speed and angle.
   **Reality:** When air resistance is negligible, all objects experience the same gravitational acceleration g regardless of mass, so identical launches produce identical trajectories no matter the object's weight.

7. **Misconception:** The symmetric time-of-flight formula T = (2 v0 sin θ) / g can be used even when the launch and landing heights are different.
   **Reality:** That formula assumes the projectile lands at the same height it launched from. When launch and landing heights differ (such as launching off a cliff), you must instead solve the full quadratic equation y(t) = y0 + v0y t − ½ g t² = (landing height) for t.

## Learning Resources

- **Khan Academy** — https://www.khanacademy.org — search "two-dimensional projectile motion" for step-by-step video lessons and practice exercises.
- **PhET Interactive Simulations** — https://phet.colorado.edu — search "Projectile Motion" for an interactive simulation where you can change launch angle, speed, and mass and watch the trajectory in real time.
- **The Physics Classroom** — https://www.physicsclassroom.com — search "projectile motion" in the Tutorial section for concept explanations, diagrams, and the classic "Monkey and the Hunter" style demonstrations.
- **OpenStax** — https://openstax.org — search "University Physics Volume 1" and look at the chapter on motion in two and three dimensions for a rigorous textbook treatment with derivations.
- **HyperPhysics** — http://hyperphysics.phy-astr.gsu.edu — search "projectile motion" for concise equation summaries and concept maps linking projectile motion to other kinematics topics.
- **MIT OpenCourseWare** — https://ocw.mit.edu — search "projectile motion" within the introductory physics courses for lecture notes and problem sets.

## Practice Problems

1. A ball is thrown horizontally from a table with an initial speed of 4.0 m/s. It leaves the table's edge and falls 1.2 m to the floor. How long does it take to land, and how far horizontally does it travel?

2. A projectile is launched from level ground at 20 m/s at an angle of 30° above the horizontal. Find the horizontal and vertical components of its initial velocity.

3. Using the projectile from Problem 2, find the time it takes to reach its maximum height.

4. Using the projectile from Problem 2, find the maximum height reached and the total time of flight.

5. Using the projectile from Problem 2, find the range using the range equation, and then verify your answer using the horizontal position equation and the time of flight from Problem 4.

6. A stone is thrown from the top of a 25 m tall cliff at a speed of 15 m/s at an angle of 20° above the horizontal, landing on the ground below the cliff. Find the total time of flight. (Hint: the launch and landing heights are not equal, so the simple T = (2 v0 sin θ)/g formula cannot be used directly.)

7. Two balls are released at the same instant from the same height of 2.0 m above the ground: Ball A is simply dropped, and Ball B is launched horizontally at 6.0 m/s. Which ball hits the ground first, and why? Calculate the time it takes each ball to land.

8. A soccer player kicks a ball at 18 m/s. The coach wants the ball to travel the maximum possible horizontal distance before it returns to the ground (same launch and landing height). At what angle should the ball be kicked, and what is the resulting range?

### Answer Key

1. Vertical drop: 1.2 = ½(9.8)t² → t ≈ 0.49 s. Horizontal distance: x = (4.0)(0.49) ≈ 2.0 m.

2. v0x = 20 cos(30°) ≈ 17.3 m/s; v0y = 20 sin(30°) = 10.0 m/s.

3. Time to peak: vy = 0 = v0y − g t → t = v0y / g = 10.0 / 9.8 ≈ 1.02 s.

4. Max height: y = v0y t − ½ g t² using t ≈ 1.02 s → y ≈ (10.0)(1.02) − ½(9.8)(1.02)² ≈ 5.10 m. Time of flight (level ground, symmetric): T = 2 × 1.02 ≈ 2.04 s.

5. R = (v0² sin(2θ))/g = (20² × sin(60°))/9.8 ≈ (400 × 0.866)/9.8 ≈ 35.3 m. Check: x = v0x × T = 17.3 × 2.04 ≈ 35.3 m. Matches.

6. v0y = 15 sin(20°) ≈ 5.13 m/s. Set y(t) = 0 with y0 = 25: 0 = 25 + 5.13t − 4.9t². Solving the quadratic gives t ≈ 2.72 s (taking the positive root). Because launch and landing heights differ, this required the full quadratic, not the level-ground formula.

7. They land at the same time because vertical motion is independent of horizontal motion and both start with v0y = 0 from the same height. Time for each: 2.0 = ½(9.8)t² → t ≈ 0.64 s for both Ball A and Ball B.

8. Maximum range on level ground occurs at 45°. Range: R = (18² × sin(90°))/9.8 = 324/9.8 ≈ 33.1 m.

## Real-World Applications

- **Basketball and other sports shots** — players intuitively choose launch angle and speed to arc a ball into a hoop, goal, or target.
- **Artillery and ballistics** — military and historical engineering rely on projectile equations to predict where a shell or bullet will land.
- **Water fountains** — decorative fountains use nozzles angled to create parabolic arcs of water for visual effect.
- **Long jump and high jump in track and field** — athletes optimize their launch angle and speed off the ground to maximize horizontal or vertical distance.
- **Rescue supply airdrops** — pilots must calculate when to release supplies so that horizontal motion (from the plane's speed) carries the package to the correct landing spot as it falls.
- **Fireworks displays** — shells are launched at calculated angles and speeds so they explode at a precise height and horizontal position.

## Assessment Criteria

| Learning Objective Area | Beginning | Developing | Proficient | Advanced |
|---|---|---|---|---|
| Independence of horizontal/vertical motion | Cannot explain why the two directions are analyzed separately | Recognizes the two directions are separate but struggles to apply it | Consistently analyzes horizontal and vertical motion independently and correctly | Explains and applies independence to justify results in novel, non-level-ground scenarios |
| Resolving velocity into components | Cannot set up v0x and v0y from v0 and θ | Sets up components but frequently mixes up sine and cosine | Correctly and reliably resolves velocity into components | Resolves velocity components fluently and explains the geometric reasoning behind sine/cosine choice |
| Applying position/velocity equations | Cannot recall or apply the basic equations | Applies equations with significant guidance or frequent errors | Applies all four equations correctly to solve standard problems | Applies equations flexibly, including solving for unknowns algebraically in multi-step problems |
| Time of flight, max height, range (level ground) | Cannot compute any of the three quantities | Computes one or two of the three with support | Computes all three accurately and independently | Computes all three and can derive the range/time formulas from the basic kinematic equations |
| Non-level-ground and elevated launches | Cannot begin a cliff/elevated launch problem | Attempts the quadratic but makes setup or sign errors | Correctly sets up and solves the quadratic for time of flight | Confidently solves elevated-launch problems and explains why the level-ground formulas fail |
| Symmetry of trajectory | Does not recognize trajectory symmetry | Recognizes symmetry only when explicitly prompted | Applies symmetry correctly for equal launch/landing heights | Applies and correctly limits symmetry reasoning, identifying when it does and does not apply |
| Identifying misconceptions | Holds one or more major misconceptions unprompted | Recognizes misconceptions when pointed out but cannot always explain the correct physics | Identifies and corrects misconceptions with clear physical reasoning | Proactively identifies subtle misconceptions in others' reasoning and explains the underlying physics precisely |
