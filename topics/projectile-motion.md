# Unit 2: Projectile Motion
*Weeks 4-6 (pacing suggestion)*

> **Big idea:** Motion in two dimensions can be analysed by treating the horizontal and vertical components independently; time is the link between them.

## NGSS Learning Goals
- **HS-PS2-1** - Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration.

*Projectile motion is a 2-D application of HS-PS2-1: gravity is the only (net) force, giving constant downward acceleration while horizontal motion is unchanged.*

## Learning Objectives (I can...)
- [ ] Resolve a velocity vector into horizontal and vertical components.
- [ ] Explain that horizontal and vertical motions of a projectile are independent.
- [ ] Calculate time of flight, maximum height, and range for horizontal and angled launches.
- [ ] Predict how launch speed and angle change range and height.
- [ ] Evaluate when the ignore-air-resistance model is reasonable.

## Key Concepts
- **Projectile** - An object moving under the influence of gravity alone after launch. Path is a parabola.
- **Independence of components** - Horizontal: a_x = 0, constant v_x. Vertical: a_y = -9.8 m/s^2. The two share only the time t.
- **Components** - v_x = v cos(theta); v_y = v sin(theta). Use trig on right triangles.
- **Horizontal launch** - Starts with v_y = 0. Fall time depends only on height: t = sqrt(2h/g). Range = v_x t.
- **Angled launch (level ground)** - t = 2 v_y / g; H = v_y^2 / (2g); R = v^2 sin(2 theta) / g. Max range at 45 degrees; complementary angles (e.g. 30 and 60) give equal range.
- **Model limits** - Real projectiles feel air drag, spin (Magnus effect), and wind; the parabola is an idealization.

### Key formulas
- `v_x = v cos(theta)`
- `v_y = v sin(theta)`
- `t_fall = sqrt(2h/g)`
- `R = v_x t`
- `H = v_y^2 / (2g)`
- `R = v^2 sin(2 theta)/g (level ground)`

### Common misconceptions
- A horizontally thrown ball takes longer to land than a dropped one. (Same time.)
- The projectile has zero speed at the top. (Horizontal speed remains.)
- A force keeps pushing the projectile forward after launch. (No - inertia.)
- Heavier objects have shorter flights (ignoring air).
- Doubling launch speed doubles range. (Range scales with v^2.)

## Cornell Notes
Print-ready version: open `site/index.html` and choose **Cornell Notes**.

| Cue / Question | Notes |
|---|---|
| What is a projectile? | Object launched and moving under gravity only. Path = parabola. Ignore air resistance in our model. |
| Why treat x and y separately? | Perpendicular components do not affect each other. x: constant velocity (a = 0). y: free fall (a = -9.8 m/s^2). |
| How do I find velocity components? | v_x = v cos(theta), v_y = v sin(theta), where theta is measured from the horizontal. |
| What links x and y? | Time! Solve vertical for t, then use t in the horizontal equation (or vice versa). |
| Horizontal launch steps? | v_y0 = 0. Fall time t = sqrt(2h/g). Range = v_x t. |
| Angled launch facts? | At peak v_y = 0 but v_x continues. Landing at the same height: speed = launch speed, v_y reversed. 45 degrees = max range. |
| How does changing v or theta affect range? | R proportional to v^2: doubling v gives 4x range. 30 and 60 degrees give the same range; 60 is higher and slower. |
| Real-world limits? | Air drag lowers range and makes path asymmetric; spin curves the path. |

**Summary:** Break 2-D motion into independent horizontal (constant velocity) and vertical (free fall) parts and connect them with time. Launch speed and angle control height, flight time, and range.

## Most-Missed Questions (answer key)
Take them interactively in `site/index.html`.

1. Ignoring air resistance, a projectile's horizontal acceleration is:
   - A. 9.8 m/s^2
   - B. 0 m/s^2
   - C. Equal to launch speed
   - D. Depends on mass
   - **Answer: B** - No horizontal force acts, so a_x = 0 and v_x is constant. *Why it is missed:* Thinking something must keep pushing it forward.
2. One ball is dropped and another is thrown horizontally from the same height at the same instant. Which hits the ground first?
   - A. The dropped ball
   - B. The thrown ball
   - C. They land together
   - D. Depends on mass
   - **Answer: C** - Vertical motion is identical (both start with v_y = 0), so fall times are equal. *Why it is missed:* Believing horizontal speed changes fall time.
3. A ball is thrown horizontally at 10 m/s from a 19.6 m cliff. How far from the base does it land?
   - A. 10 m
   - B. 20 m
   - C. 40 m
   - D. 196 m
   - **Answer: B** - t = sqrt(2 x 19.6 / 9.8) = 2 s; range = 10 x 2 = 20 m. *Why it is missed:* Forgetting to find time first.
4. A kicked ball reaches the peak of its path. At that point:
   - A. Speed is zero
   - B. Horizontal velocity is zero
   - C. Vertical velocity is zero, horizontal is not
   - D. Acceleration is zero
   - **Answer: C** - Only v_y is zero at the top; v_x persists and gravity still acts. *Why it is missed:* Treating the top like a standstill.
5. Ignoring air, which launch angle gives the greatest range on level ground?
   - A. 30 degrees
   - B. 45 degrees
   - C. 60 degrees
   - D. 90 degrees
   - **Answer: B** - R proportional to sin(2 theta), maximized at theta = 45 degrees. *Why it is missed:* Assuming steeper = farther.
6. A ball launched at 20 m/s at 30 degrees above horizontal has initial vertical velocity of:
   - A. 17.3 m/s
   - B. 10 m/s
   - C. 20 m/s
   - D. 34.6 m/s
   - **Answer: B** - v_y = 20 sin 30 = 10 m/s (17.3 m/s is the horizontal component). *Why it is missed:* Swapping sine and cosine.
7. A projectile lands at the same height it was launched from. Compared with launch, its vertical velocity on landing is:
   - A. Same magnitude, opposite direction
   - B. Zero
   - C. Twice as large
   - D. Same magnitude and direction
   - **Answer: A** - Symmetry of the parabola: v_y reverses sign but has equal magnitude. *Why it is missed:* Not using symmetry.
8. If you double the launch speed (same angle, level ground, no air), the range becomes:
   - A. 2 times
   - B. 4 times
   - C. Same
   - D. 8 times
   - **Answer: B** - R = v^2 sin(2 theta)/g, so range scales with v^2. *Why it is missed:* Linear thinking about squared relationships.

## Learning Resources
- [The Physics Classroom - Vectors and Projectiles](https://www.physicsclassroom.com/class/vectors) - Component analysis and projectile reading
- [PhET - Projectile Motion](https://phet.colorado.edu/en/simulations/projectile-motion) - Change angle, speed, mass, and air resistance and see the path
- [OpenStax High School Physics - 2-D motion chapter](https://openstax.org/details/books/physics) - Free textbook
- [Khan Academy - Two-dimensional projectile motion](https://www.khanacademy.org/science/physics) - Video lessons
- [Desmos graphing calculator](https://www.desmos.com/calculator) - Plot parabolas of trajectories for different angles

### Labs / hands-on activities
- Marble ramp-and-table range prediction lab (predict landing spot, then test)
- Launcher angle vs. range investigation (find the maximum-range angle)
- Video analysis of a basketball shot (Tracker or phone slow-mo)

## Practice Problems
1. A marble rolls off a 1.2 m table at 2.0 m/s. Find fall time and landing distance. (g = 9.8)
   - *Answer:* t = 0.49 s; range = 0.99 m
2. A soccer ball is kicked at 25 m/s at 40 degrees. Find v_x and v_y.
   - *Answer:* v_x = 19.2 m/s; v_y = 16.1 m/s
3. For the kick above, find time of flight and maximum height.
   - *Answer:* t = 2(16.1)/9.8 = 3.3 s; H = 16.1^2/19.6 = 13.2 m
4. A cannon fires at 30 m/s horizontally from a 45 m cliff. How far does the ball land from the base?
   - *Answer:* t = 3.03 s; R = 91 m
5. Explain with a diagram why 20 degrees and 70 degrees give the same range.
   - *Answer:* Complementary angles: sin(2 theta) equal; 70 degrees is higher and longer in the air

## Real-World Applications
- Sports: basketball free throws, long jump, golf, and javelin all use launch-angle optimization.
- Emergency response: dropping supplies from aircraft needs lead-distance calculations.
- Engineering: fountain and water-jet design, fire-hose reach.
- Video game physics engines use the same x/y decomposition.

## Assessment
**Mastery looks like:**
- [ ] Correct component resolution and trig
- [ ] Independent-axes reasoning in a written explanation
- [ ] Predicts landing position within 10% in the lab

**Rubric**

| Criterion | 4 - Mastery | 3 - Proficient | 2 - Developing | 1 - Beginning |
|---|---|---|---|---|
| Concepts (independence of components) | Explains using both axes and time as link | Mostly correct, one gap | Confuses components | No reasoning |
| Calculations | Correct components, time, range with units | Small errors in trig or algebra | Setup incomplete | No setup |
| Lab prediction and analysis | Prediction within 10% and error sources discussed | Within 20%; limited error analysis | Within 40% | No prediction |

**Formative checks:** Predict-observe-explain with PhET; Interactive quiz (>= 75%); Whiteboard component-resolution practice

**Summative:** Projectile lab practical (predict the landing location) + unit test.

## Student Progress Checklist
- [ ] Cornell notes completed
- [ ] Interactive quiz >= 75%
- [ ] Missed-question retake done
- [ ] Practice problems 1-5 done
- [ ] Lab report submitted
- [ ] Unit assessment taken
