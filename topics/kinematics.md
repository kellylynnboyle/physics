# Unit 1: Kinematics
*Weeks 1-3 (pacing suggestion)*

> **Big idea:** Motion can be described precisely with position, velocity, and acceleration, using equations, tables, and graphs that all tell the same story.

## NGSS Learning Goals
- **HS-PS2-1** - Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration.

*Kinematics is the descriptive foundation for HS-PS2-1: students must read motion data (graphs/tables) before they can relate it to net force.*

## Learning Objectives (I can...)
- [ ] Distinguish distance/displacement and speed/velocity, and identify which are vectors.
- [ ] Calculate average velocity and acceleration from data.
- [ ] Interpret position-time and velocity-time graphs (slope and area meanings).
- [ ] Apply the constant-acceleration equations to solve one-dimensional problems.
- [ ] Model free fall with a = 9.8 m/s^2 downward and explain why mass does not matter (ignoring air).

## Key Concepts
- **Position, distance, displacement** - Position is where you are relative to an origin. Distance is total path length (scalar). Displacement (delta x = x_f - x_i) is the straight-line change in position with direction (vector).
- **Speed vs. velocity** - Speed = distance/time (scalar). Velocity = displacement/time (vector). Average velocity can be zero for a round trip.
- **Acceleration** - a = delta v / delta t (m/s^2). Any change in speed OR direction is acceleration. Sign of a compared with sign of v tells speeding up (same sign) or slowing down (opposite).
- **Graph meanings** - x-t: slope = velocity. v-t: slope = acceleration, area under curve = displacement. a-t: area = change in velocity.
- **Constant-acceleration equations** - v = v0 + at;  x = x0 + v0*t + (1/2)a*t^2;  v^2 = v0^2 + 2a*delta x;  delta x = (v0 + v)/2 * t.
- **Free fall** - Only gravity acts: a = g = 9.8 m/s^2 downward everywhere in flight, including the top of a throw (where v = 0 momentarily).

### Key formulas
- `v_avg = delta x / delta t`
- `a = delta v / delta t`
- `v = v0 + a t`
- `delta x = v0 t + 1/2 a t^2`
- `v^2 = v0^2 + 2 a delta x`

### Common misconceptions
- Velocity and acceleration always point the same way. (Not so: slowing down means opposite.)
- Zero velocity means zero acceleration. (At the top of a toss v = 0 but a = 9.8 m/s^2 down.)
- Negative acceleration always means slowing down. (Depends on the sign of velocity.)
- Steeper graph = faster only on x-t; on v-t steeper = larger acceleration.
- Stopping distance is proportional to speed. (It is proportional to speed squared.)

## Cornell Notes
Print-ready version: open `site/index.html` and choose **Cornell Notes**.

| Cue / Question | Notes |
|---|---|
| What is the difference between scalar and vector quantities? | Scalar: magnitude only (distance, speed, time). Vector: magnitude + direction (displacement, velocity, acceleration). Use + / - signs for direction in 1-D. |
| Define displacement and velocity. | Displacement = x_f - x_i (straight-line change). Velocity = displacement / time. A lap on a track: displacement 0, so average velocity 0. |
| Define acceleration. When does an object accelerate? | a = delta v / delta t, units m/s^2. Accelerating = speeding up, slowing down, OR turning. |
| How do I read an x-t graph? | Slope = velocity. Flat line = at rest. Straight sloped line = constant velocity. Curve = changing velocity. |
| How do I read a v-t graph? | Slope = acceleration. Area under line = displacement. Crossing the axis = changes direction. |
| List the 3 key constant-acceleration equations. | v = v0 + at;  delta x = v0 t + 1/2 a t^2;  v^2 = v0^2 + 2 a delta x. Pick the one that is missing the variable you do not have. |
| What is free fall? | Motion with only gravity acting. a = 9.8 m/s^2 down (use -9.8 if up is +). All objects fall together when air is negligible. |
| Problem-solving steps? | GUESS: Givens, Unknown, Equation, Substitute with units, Sanity-check (sign, size, units). |

**Summary:** Kinematics describes how things move using displacement, velocity, and acceleration. Graph slopes and areas link position, velocity, and acceleration; the constant-acceleration equations let us predict motion. Free fall is the special case a = 9.8 m/s^2 down.

## Most-Missed Questions (answer key)
Take them interactively in `site/index.html`.

1. A runner completes one 400 m lap in 80 s and ends where she started. What is her average velocity?
   - A. 5 m/s
   - B. 0 m/s
   - C. 400 m/s
   - D. 80 m/s
   - **Answer: B** - Average velocity uses displacement, which is 0 for a full lap. (Average speed is 5 m/s.) *Why it is missed:* Students use distance instead of displacement.
2. A car starts from rest and accelerates at 3 m/s^2 for 4 s. How far does it travel?
   - A. 12 m
   - B. 24 m
   - C. 48 m
   - D. 6 m
   - **Answer: B** - x = 1/2 a t^2 = 0.5 x 3 x 16 = 24 m. Forgetting the 1/2 gives 48 m; using v*t with final v gives 48 m too. *Why it is missed:* Forgetting the 1/2 or squaring t.
3. On a velocity-time graph, the area under the line represents:
   - A. Acceleration
   - B. Displacement
   - C. Speed
   - D. Force
   - **Answer: B** - Area = v x t = displacement. Slope is acceleration. *Why it is missed:* Mixing up slope and area.
4. A ball is thrown straight up. At the very top of its path, its velocity and acceleration are:
   - A. v = 0, a = 0
   - B. v = 0, a = 9.8 m/s^2 downward
   - C. v = 9.8 m/s, a = 0
   - D. v = 0, a = 9.8 m/s^2 upward
   - **Answer: B** - Gravity still acts, so a = 9.8 m/s^2 down. v is momentarily zero as it changes direction. *Why it is missed:* Believing v = 0 means a = 0.
5. A car moves in the negative direction and has a negative acceleration. The car is:
   - A. Slowing down
   - B. Speeding up
   - C. At rest
   - D. Moving at constant speed
   - **Answer: B** - Velocity and acceleration have the same sign, so speed increases. *Why it is missed:* Assuming negative acceleration = slowing.
6. A rock is dropped from rest. After 2.0 s (ignore air), its speed is about:
   - A. 9.8 m/s
   - B. 19.6 m/s
   - C. 39.2 m/s
   - D. 4.9 m/s
   - **Answer: B** - v = g t = 9.8 x 2.0 = 19.6 m/s. *Why it is missed:* Using d = 1/2 g t^2 (19.6 m is the distance, not speed).
7. On a position-time graph, a straight line sloping upward indicates:
   - A. Constant acceleration
   - B. Constant velocity
   - C. Object at rest
   - D. Decreasing velocity
   - **Answer: B** - Constant slope on x-t means constant velocity. *Why it is missed:* Reading a graph as a picture of the path.
8. A car at 20 m/s brakes at 5 m/s^2 to a stop. If it had been going 40 m/s, the stopping distance would be:
   - A. 2 times longer
   - B. 4 times longer
   - C. Same
   - D. 8 times longer
   - **Answer: B** - d = v^2 / 2a, so doubling v quadruples d (40 m -> 160 m). *Why it is missed:* Assuming a linear relationship.

## Learning Resources
- [The Physics Classroom - 1-D Kinematics](https://www.physicsclassroom.com/class/1DKin) - Readings, animations, and check-your-understanding questions
- [PhET - Moving Man](https://phet.colorado.edu/en/simulations/moving-man) - Simulation linking x-t, v-t, a-t graphs
- [OpenStax High School Physics - Ch. 2](https://openstax.org/details/books/physics) - Free textbook chapter on motion
- [Khan Academy - One-dimensional motion](https://www.khanacademy.org/science/physics) - Video lessons with practice
- [IXL Physics - Kinematics skills](https://www.ixl.com/) - Adaptive skill practice (as assigned)

### Labs / hands-on activities
- Motion detector lab: match a given x-t graph by walking
- Buggy / cart constant-velocity lab: collect x-t data, find velocity from slope
- Free-fall timing lab: estimate g from drop height and time

## Practice Problems
1. A cyclist goes from 2 m/s to 10 m/s in 4 s. Find acceleration and distance covered.
   - *Answer:* a = 2 m/s^2; d = (2+10)/2 x 4 = 24 m
2. A ball is dropped from a 45 m building. How long to land? (g = 9.8; round to 0.1 s)
   - *Answer:* t = sqrt(2 x 45 / 9.8) = 3.0 s
3. A train slows from 30 m/s to 10 m/s over 200 m. Find the acceleration.
   - *Answer:* a = (10^2 - 30^2)/(2 x 200) = -2 m/s^2
4. Sketch the v-t graph for a car that accelerates uniformly, cruises, then brakes to rest.
   - *Answer:* Rising line, flat line, falling line to zero; area = total displacement
5. A stone is thrown upward at 14.7 m/s. How high does it go and for how long is it in the air?
   - *Answer:* h = 14.7^2/(2 x 9.8) = 11.0 m; t = 2 x 14.7/9.8 = 3.0 s

## Real-World Applications
- Traffic safety: stopping distance grows with the square of speed, which is why speed limits are lower near schools.
- Sports analytics: sprint start acceleration and 40-yard dash splits.
- Aviation and rail: runway length calculations for takeoff and landing.
- Smartphone accelerometers and fitness trackers measure acceleration to count steps.

## Assessment
**Mastery looks like:**
- [ ] Reads and sketches all three motion graphs and converts among them
- [ ] Chooses the correct kinematic equation and shows unit-checked work
- [ ] Explains free fall in words, including the top of a toss

**Rubric**

| Criterion | 4 - Mastery | 3 - Proficient | 2 - Developing | 1 - Beginning |
|---|---|---|---|---|
| Concepts (vectors, graphs) | Uses scalar/vector terms and graph meanings correctly in every case | Minor errors with signs or graph slope/area | Frequent confusion of velocity and acceleration | Cannot interpret graphs |
| Problem solving | Correct equation, substitution, units, and check | Right method, small arithmetic/unit error | Partial setup; missing steps | No systematic approach |
| Communication | Clear diagrams/labels and a claim-evidence-reasoning explanation | Mostly clear; one element missing | Unclear or unlabeled | Missing |

**Formative checks:** Exit tickets: graph interpretation; Interactive quiz (>= 75% to pass; retake missed items); Lab data analysis (x-t graph slope)

**Summative:** Unit test (graph interpretation 30%, calculations 50%, explanation 20%) plus motion lab report.

## Student Progress Checklist
- [ ] Cornell notes completed
- [ ] Interactive quiz >= 75%
- [ ] Missed-question retake done
- [ ] Practice problems 1-5 done
- [ ] Lab report submitted
- [ ] Unit assessment taken
