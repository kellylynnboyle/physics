# Unit 2: Projectile Motion

**NGSS alignment:** HS-PS2-1 (Newtonian mechanics, quantitative forces/motion analysis); builds directly on Unit 1 (Kinematics) by applying 1-D equations to two independent dimensions simultaneously.

**Suggested pacing:** 1.5 weeks (7–8 class periods), including 1 lab day (e.g., projectile launcher or catapult lab) and 1 review/assessment day.

**Prerequisite:** Unit 1 — Kinematics (students must be fluent with the 4 kinematic equations before starting this unit).

## 1. Key Concepts Students Must Master

| # | Concept | Why it matters |
|---|---------|-----------------|
| 1 | Independence of horizontal and vertical motion | The single most important idea in this unit — x and y motion happen simultaneously but don't affect each other. |
| 2 | Horizontal velocity is constant | No horizontal acceleration (ignoring air resistance) → `vₓ = v₀ₓ` for the entire flight. |
| 3 | Vertical motion is free fall | `a_y = −9.8 m/s²` for the entire flight, even while the object is still moving upward. |
| 4 | Velocity components | `v₀ₓ = v₀cosθ`, `v₀ᵧ = v₀sinθ`, where θ is the launch angle above horizontal. |
| 5 | Time of flight | Determined ONLY by the vertical motion (how long until it returns to launch height or hits the ground). |
| 6 | Range | Horizontal distance traveled = `vₓ × t_total`. Maximum range (on level ground) occurs at a 45° launch angle. |
| 7 | Maximum height | Occurs when `v_y = 0`; found using vertical kinematic equations only. |
| 8 | Symmetry of trajectory | For a projectile launched and landing at the same height, time up = time down, and launch speed = landing speed. |

## 2. Cornell Notes

See [`cornell-notes.md`](./cornell-notes.md).

## 3. Interactive Quiz — Most Often Missed Questions

Open [`quiz/index.html`](./quiz/index.html) in any browser. Focuses on the #1 student error — mixing x and y variables into the same equation — plus angle decomposition and launch-height edge cases.

## 4. Learning Resources

- **Simulation:** PhET Interactive Simulations — *Projectile Motion* (free, browser-based) — lets students vary angle/speed/height and see the trajectory and data table in real time
- **Video:** The Physics Classroom — *Projectile Motion* tutorial series
- **Video:** Khan Academy — *Two-dimensional motion* playlist
- **Textbook:** OpenStax *Physics* — Chapter 3, Motion in Two and Three Dimensions
- **Reference:** The Physics Classroom — Projectile Motion problem-solving guide (horizontal/vertical component tables)

## 5. Practice Problems (progression: easy → hard)

1. A ball rolls off a table 1.2 m high with a horizontal velocity of 2.5 m/s. How long is it in the air, and how far from the table does it land?
2. A soccer ball is kicked at 20 m/s at an angle of 30° above the ground. Find its horizontal and vertical velocity components.
3. Using the ball from problem 2, find the maximum height it reaches and its total time of flight.
4. Using the ball from problem 2, find its horizontal range.
5. **Multi-step:** A cannonball is launched from ground level at 40 m/s at 60°. At what other angle would the cannonball achieve the *same* range? (Hint: consider complementary angles.)
6. **Challenge:** A projectile is launched horizontally from the top of a 50 m cliff at 15 m/s. Find where it lands, its total time of flight, and its velocity (magnitude and direction) the instant before impact.

## 6. Real-World Applications

- **Sports:** basketball free throws, javelin throw, golf drives — coaches use launch angle and initial speed to optimize distance/accuracy.
- **Military/historical ballistics:** artillery range tables were among the first practical applications of projectile motion equations.
- **Firefighting:** aerial water/fire-retardant drops calculate release point based on projectile motion of the payload.
- **Space exploration:** orbital insertion and reentry trajectories are advanced extensions of the same independence-of-components principle.
- **Water fountains & sprinklers:** engineers design nozzle angles using range equations to hit a target distance.

## 7. Learning Objectives

By the end of this unit, students will be able to:

- [ ] Explain why horizontal and vertical motion are independent of each other.
- [ ] Decompose an initial velocity into horizontal and vertical components using sine and cosine correctly.
- [ ] Solve for time of flight, maximum height, and range for both horizontally-launched and angled projectiles.
- [ ] Solve projectiles launched from and landing at different heights (asymmetric trajectories).
- [ ] Identify and avoid the most common error: plugging a vertical value into a horizontal equation (or vice versa).

## 8. Assessment Criteria

| Level | Criteria |
|-------|----------|
| **Exceeds (4)** | Solves projectiles launched from elevated heights or landing at different levels than launch; correctly separates x/y variables in multi-part problems without prompting. |
| **Meets (3)** | Correctly decomposes velocity into components and solves standard range/height/time problems for projectiles launched and landing at the same height. |
| **Approaching (2)** | Understands the concept of independence but occasionally mixes x and y variables (e.g., uses full v₀ in a vertical equation). |
| **Beginning (1)** | Cannot decompose velocity into components; treats projectile motion as one-dimensional. |

**Suggested evidence:** unit test, projectile launcher/catapult lab report (measure range experimentally, compare to predicted value), quiz retake after reviewing `quiz/index.html` missed-concept report.
