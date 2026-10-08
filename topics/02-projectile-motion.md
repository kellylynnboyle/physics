# Unit 2: Projectile Motion

**NGSS link:** Supports HS-PS2-1 (Newton's second law, with gravity as the only force), HS-PS3-1/PS3-2 (energy exchange in flight). SEPs: Using Mathematics and Computational Thinking (5), Developing and Using Models (2). CCC: Systems and System Models.

**Pacing suggestion:** 2 weeks (prerequisite: Unit 1, vectors and trig basics)

## Learning objectives
- [ ] **P1** Resolve a launch velocity into horizontal and vertical components using sin/cos.
- [ ] **P2** Explain why horizontal and vertical motions are independent.
- [ ] **P3** Solve horizontally launched projectile problems (time of flight, range, impact velocity).
- [ ] **P4** Solve angled launch problems on level ground (max height, time, range).
- [ ] **P5** Predict how changing speed, angle or height changes the path.
- [ ] **P6** Use a simulation or video analysis to test predictions and evaluate air resistance.

## Key concepts
| Concept | Statement |
|---|---|
| Independence of motion | Horizontal: a = 0, constant v_x. Vertical: a = −g. They share only the time. |
| Components | v_x = v cos θ, v_y = v sin θ |
| Time of flight (level ground) | t = 2v sin θ / g |
| Max height | H = (v sin θ)² / 2g |
| Range (level ground) | R = v² sin 2θ / g |
| Horizontal launch | y: Δy = ½gt² (v_y,0 = 0); x: Δx = v_x t |
| Impact velocity | Combine v_x and v_y with Pythagorean theorem; angle = tan⁻¹(v_y/v_x) |

## Cornell notes

**Essential question:** *How can two simple motions be combined to predict the path of a thrown object?*

| Cue | Notes |
|---|---|
| What is a projectile? | Object moving under gravity only (no engine, no air drag in our model). Path is a **parabola**. |
| How do we split the motion? | Treat x and y as two separate 1-D problems. Time t is the only shared variable. Make a two-column table: x | y. |
| Horizontal motion | No horizontal force → a_x = 0 → v_x constant → Δx = v_x t. |
| Vertical motion | a_y = −g → use the Unit 1 equations. At the apex v_y = 0. v_y at landing = −v_y at launch (level ground). |
| Components of an angled launch | v_x = v cos θ ; v_y = v sin θ. Draw the triangle: hypotenuse = launch speed. |
| Horizontal launch from a height | Initial v_y = 0. Find t from the height: t = √(2h/g). Then range = v_x·t. |
| Angle and range | 45° gives max range on level ground. θ and 90°−θ give equal ranges. Higher angle = more hang time. |
| Speed along the path | Fastest at launch and landing (level ground), slowest at the apex (still has v_x). |
| Air resistance | Real projectiles: shorter range, steeper descent, 45° is not optimal. Our equations are a model. |
| Sanity check | Does t make sense? Is the range reasonable (a baseball throw ≈ 30–100 m)? Units? |

**Summary:** ___________________________________________________________

## Most-missed ideas (these appear in the quiz)
1. No horizontal acceleration while in flight.
2. Dropped ball and horizontally fired ball land at the same time.
3. At the top, velocity is horizontal, not zero.
4. Skipping the "find time first" step.
5. Complementary angles give the same range; range scales with v².

👉 **Interactive quiz:** `quiz/index.html` → Projectile Motion

## Practice problems (g = 10 m/s²)
1. A marble rolls off a 1.25 m table at 2 m/s. Time in the air and landing distance? *[0.5 s; 1.0 m]*
2. A ball is kicked at 25 m/s, 37° above horizontal (sin 37° ≈ 0.6, cos 37° ≈ 0.8). Find v_x, v_y, time of flight, range. *[20 m/s; 15 m/s; 3 s; 60 m]*
3. For the kick in #2, what is the max height? *[11.25 m]*
4. A cannonball is fired horizontally at 30 m/s from a 80 m cliff. How far from the base does it land, and what is its impact speed? *[120 m; 50 m/s (v_y = 40)]*
5. A quarterback throws at 20 m/s at 45°. A receiver stands 30 m away on level ground. Where does the ball land relative to the receiver? *[R = v² sin 2θ / g = 40 m, so 10 m past the receiver]*
6. **Challenge:** A basketball leaves the shooter's hand at 8 m/s, 60° above horizontal, and the rim is 2 m above the release point and 3.5 m away horizontally. Is the ball rising or falling when it reaches the rim's horizontal position, and is it above or below rim height there? *[v_x = 4 m/s, t = 0.875 s, v_y = 6.93 − 8.75 ≈ −1.8 m/s (falling); height = 6.06 − 3.83 ≈ 2.2 m above release, so about 0.2 m above the rim and dropping in. Good shot.]*

## Resources
- **PhET:** "Projectile Motion" (toggle air resistance, change mass and angle). Best single resource for this unit.
- **The Physics Classroom:** Vectors and Projectiles → Projectile Motion.
- **Khan Academy:** Two-dimensional projectile motion.
- **Desmos:** Plot y(x) for a launch to visualize parabolas and changing angles.
- **Tracker video analysis:** Analyze a basketball free throw filmed from the side.
- **NASA Beginner's Guide to Rockets:** trajectories.

## Lab / hands-on
- **Ramp-launch lab:** roll a marble off a table, predict the landing spot with kinematics, then place a target cup. Compare predictions (error %).
- **Launch-angle lab:** water bottle rockets or spring launcher; graph range vs. angle (find the best angle).
- **Video analysis:** Film a tossed ball with a phone; plot x(t) and y(t) separately.

## Real-world connections
- Sports: basketball free throws, football field goals, long jump, volleyball serves.
- Engineering: fountains and fire hoses, irrigation (California agriculture sprinklers).
- Safety/forensics: accident reconstruction, launch of debris.
- Space and defense: ballistic trajectories, rockets before engine cut-off.
- Video games: physics engines compute parabolas every frame.

## Assessment criteria
| Level | Description |
|---|---|
| 4 – Mastery | Builds an x/y table, resolves components, solves angled and cliff launches, includes a reasoned air-resistance discussion. |
| 3 – Proficient | Correct components and time; correct range and height with minor arithmetic slips. |
| 2 – Developing | Understands the independence idea but mixes sin and cos, or mixes x and y variables. |
| 1 – Beginning | Treats the motion as one-dimensional; applies a horizontal force. |

## Unit checklist
- [ ] Cornell notes completed and summarized
- [ ] Quiz attempted, score recorded, missed questions reviewed
- [ ] Practice problems 1–5 done
- [ ] Target lab report with prediction vs. result
- [ ] Unit test: P1–P6 each at level 3 or higher
