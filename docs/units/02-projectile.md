# Unit 2: Projectile Motion

[← Course outline](../../README.md)

## NGSS standards addressed

- **HS-PS2-1** — Newton's second law applied independently along each axis explains projectile motion.
- **HS-PS3-2** — Motion at the macroscopic scale as a combination of kinetic and potential energy (used in extension).
- **SEP** — Using mathematics and computational thinking; developing and using models.
- **CCC** — Systems and system models; cause and effect.

## Learning objectives (student checklist)

- [ ] I can resolve a velocity vector into horizontal and vertical components using sine and cosine.
- [ ] I can explain that horizontal and vertical motion are independent and treat them with separate equations.
- [ ] I can predict time of flight, maximum height and range for horizontal and angled launches.
- [ ] I can explain the velocity and acceleration of a projectile at launch, apex and landing.
- [ ] I can use a simulation or video analysis to model a projectile and compare with the prediction.
- [ ] I can identify when air resistance makes the ideal model break down.

## Key concepts

- **Projectile:** An object moving only under gravity after launch (air resistance ignored).
- **Independence of components:** Horizontal: a = 0, constant vₓ. Vertical: a = −9.8 m/s². The two motions share only the time.
- **Vector components:** vₓ = v·cosθ, v_y = v·sinθ. Reassemble with Pythagorean theorem and tan⁻¹.
- **Time of flight:** Determined by the vertical motion only.
- **Range:** R = vₓ · t. For equal launch and landing heights R = v² sin(2θ)/g, maximum at 45°.
- **Apex:** v_y = 0 but vₓ ≠ 0 (for angled launch) and a is still 9.8 m/s² down.

## Key equations

- `vₓ = v·cosθ ;  v_y = v·sinθ`
- `x = vₓ·t`
- `y = v₀y·t − ½·g·t²`
- `v_y = v₀y − g·t`
- `R = v₀² sin(2θ) / g   (same launch & landing height)`
- `t(up to apex) = v₀y / g`

## Cornell notes

**Topic:** Projectile motion — two independent 1-D motions  
**Name:** ____________  **Date:** ____________

| Cue / question | Notes |
|---|---|
| What is a projectile? | Object launched and then acted on only by gravity (ignore air). Path is a parabola. |
| Key idea: independence | Horizontal and vertical motion don't affect each other. Horizontal: constant velocity (a = 0). Vertical: free fall (a = 9.8 m/s² down). Time connects them. |
| Breaking up the launch velocity | vₓ = v cosθ (adjacent), v_y = v sinθ (opposite). Draw the right triangle with θ measured from the horizontal. |
| Horizontal launch (off a cliff) | v₀y = 0. Fall time t = √(2h/g). Range = vₓ · t. A ball rolled off a table and one dropped hit the ground at the same time. |
| Angled launch | Time up = v₀y/g; total time = 2v₀y/g (if land at launch height). Max height = v₀y²/(2g). Range = vₓ · total time. |
| What happens at the top? | v_y = 0, vₓ unchanged (speed is minimum, not zero), a = 9.8 m/s² down. Only gravity acts, so net force is just weight. |
| Range vs. angle | Max range at 45° (same heights). Complementary angles (e.g., 30° and 60°) give the same range. Higher angle → higher apex and longer time. |
| Limits of the model | Real balls feel air drag: shorter range, optimal angle < 45°, asymmetric path. Mention in lab error analysis. |

**Summary:** A projectile is two motions at once: constant velocity sideways and free fall vertically. Solve the vertical motion for time, then use that time in the horizontal equation. Resolve vectors with sin/cos, remember a = 9.8 m/s² down at every point, and the apex has v_y = 0 only.

## Quiz: most-missed questions

_Interactive version: open `site/index.html`. Answers are at the end of this section._

1. Ignoring air resistance, what is the horizontal velocity of a projectile during its flight?
   - A. Increases steadily
   - B. Decreases steadily
   - C. Constant
   - D. Zero at the top
2. One ball is dropped and another is launched horizontally from the same height at the same instant. Which lands first?
   - A. The dropped ball
   - B. The launched ball
   - C. They land together
   - D. Depends on the launch speed
3. At the highest point of a projectile's path launched at an angle, which statement is correct?
   - A. v = 0 and a = 0
   - B. v_y = 0 and a = 9.8 m/s² down
   - C. v_x = 0 and a = 0
   - D. v_y = 0 and a = 0
4. For a launch and landing at the same height, which angle gives maximum range (no air resistance)?
   - A. 30°
   - B. 45°
   - C. 60°
   - D. 90°
5. A ball is launched at 20 m/s at 30° above horizontal. What are its horizontal and vertical velocity components?
   - A. v_x = 10 m/s, v_y = 17.3 m/s
   - B. v_x = 17.3 m/s, v_y = 10 m/s
   - C. v_x = 20 m/s, v_y = 0
   - D. v_x = 14.1 m/s, v_y = 14.1 m/s
6. A ball rolls off a 20 m high cliff at 15 m/s horizontally. About how far from the base does it land? (g = 9.8 m/s²)
   - A. 15 m
   - B. 30 m
   - C. 60 m
   - D. 45 m
7. After a kicked soccer ball leaves the foot (ignore air), what force(s) act on it?
   - A. Gravity only
   - B. Gravity and the force of the kick
   - C. Gravity and a forward force
   - D. No forces
8. Launch angles of 30° and 60° with the same speed (same launch/landing height) will have…
   - A. the same range
   - B. 60° has longer range
   - C. 30° has longer range
   - D. the same time of flight

<details><summary>Answer key and explanations</summary>

1. **C** — No horizontal force acts, so a_x = 0 and v_x never changes. _(Misconception: Thinking an object needs a continued push to keep its horizontal motion.)_
2. **C** — Vertical motion is identical (v₀y = 0, a = 9.8 m/s²), so fall times are equal. _(Misconception: Not separating horizontal and vertical motion.)_
3. **B** — Only the vertical velocity is zero at the top. The horizontal velocity remains, and gravity keeps accelerating the ball downward. _(Misconception: Believing the projectile is momentarily 'at rest' with no forces.)_
4. **B** — R = v² sin(2θ)/g is largest when sin(2θ) = 1, i.e., θ = 45°. _(Misconception: Assuming a steeper angle always goes farther.)_
5. **B** — v_x = 20 cos30° = 17.3 m/s and v_y = 20 sin30° = 10 m/s. Check your calculator is in degree mode. _(Misconception: Swapping sine and cosine.)_
6. **B** — t = √(2·20/9.8) = 2.02 s, so x = 15 × 2.02 ≈ 30 m. Time comes only from the vertical motion. _(Misconception: Using the horizontal speed alone or the wrong equation for time.)_
7. **A** — The kick ends at contact. In flight, only gravity (weight) acts if air resistance is ignored. _(Misconception: Believing a 'force of the throw' stays with the object.)_
8. **A** — Complementary angles give the same range because sin(2·30°) = sin(2·60°). The 60° shot has a longer time and higher apex. _(Misconception: Confusing range with time of flight or height.)_

</details>

## Practice problems

1. A ball is kicked at 25 m/s at 40° above horizontal. Find vₓ, v₀y, time of flight and range.
2. A marble leaves a 1.5 m high table at 12 m/s horizontally. How far from the table does it land?
3. A ball is thrown straight up at 30 m/s. Maximum height?
4. A stone is thrown horizontally from an 80 m cliff and lands 60 m from the base. Launch speed?
5. Explain: why do 30° and 60° launches have the same range but different heights?

<details><summary>Answers</summary>

1. vₓ = 19.2 m/s, v₀y = 16.1 m/s; t = 2(16.1)/9.8 ≈ 3.3 s; R ≈ 19.2 × 3.28 ≈ 63 m
2. t = √(2·1.5/9.8) = 0.55 s; x = 12 × 0.55 ≈ 6.6 m
3. h = v²/(2g) = 900/19.6 ≈ 46 m
4. t = √(160/9.8) = 4.04 s; vₓ = 60/4.04 ≈ 14.9 m/s
5. Range ∝ sin2θ (equal for 30° and 60°), but the vertical component v₀y = v sinθ is larger at 60°, giving longer flight time and higher apex while vₓ is smaller.

</details>

## Lab / investigation

Launch a ball from a ramp or spring launcher; predict the landing point using kinematics, place a target, and test. Compare predicted vs. actual with percent error and list sources of error (CER).

## Real-world applications

- Sports: basketball free throws, long jump, javelin, football punts, soccer goals.
- Emergency response: water arcing from a fire hose to reach a window.
- Engineering: sprinkler design, conveyor drop-offs, stunt ramps.
- Ballistics and artillery tables (and why air resistance corrections matter).
- Space: launch trajectories and how orbits relate to projectiles that 'keep missing the ground'.

## Learning resources

| Resource | Type | Use it for |
|---|---|---|
| [PhET: Projectile Motion](https://phet.colorado.edu/en/simulations/projectile-motion) | Simulation | Change angle, speed, mass; toggle air resistance. |
| [The Physics Classroom: Vectors and Projectiles](https://www.physicsclassroom.com/class/vectors) | Tutorial | Component and projectile lessons. |
| [Khan Academy: Two-dimensional motion](https://www.khanacademy.org/science/physics/two-dimensional-motion) | Video + practice | Vectors and projectile videos. |
| [OpenStax High School Physics](https://openstax.org/details/books/physics) | Free textbook | Two-dimensional kinematics reading. |
| [Tracker video analysis (Open Source Physics)](https://physlets.org/tracker/) | Software | Track a real video of a projectile and graph x(t), y(t). |

## Assessment criteria

- **Formative:** Whiteboard component-resolution drills; 'predict then simulate' with PhET.
- **Summative:** Unit test: components, horizontal launch, angled launch, and conceptual apex questions.
- **Performance task / lab:** Target-landing challenge: calculate launch settings to hit a target; score by percent error.
- **Mastery criterion:** ≥ 80% on the unit quiz AND the target challenge within 10% error.
