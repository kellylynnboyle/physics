# Unit 2: Projectile Motion

**Standards:** HS-PS2-1 · Practices: Using Mathematics and Computational Thinking, Developing and Using Models · Crosscutting Concepts: Systems and System Models, Cause and Effect
**Suggested pacing:** 2 weeks · **Prerequisite:** Unit 1 · **Quiz:** [`quizzes/index.html`](../quizzes/index.html) → Projectile Motion

## 1. Key concepts to master
| Concept | Student-friendly statement |
|---|---|
| Independence of components | Horizontal and vertical motion happen at the same time but do not affect each other. |
| Horizontal motion | a_x = 0, so v_x is constant: Δx = v_x·t. |
| Vertical motion | a_y = −9.8 m/s²: free-fall equations apply. |
| Vector components | v_x = v cos θ, v_y = v sin θ (θ from horizontal). |
| Symmetry | Level ground: time up = time down; landing speed = launch speed; complementary angles give equal range. |
| Range and height | R = v² sin 2θ / g (level ground); max range at 45°. |
| Air resistance | Real paths are shorter than ideal parabolas; we model it away to simplify. |

## 2. Learning objectives
- **P1** Resolve a launch velocity into horizontal and vertical components.
- **P2** Solve horizontally launched projectile problems (cliff, table, plane).
- **P3** Solve angled-launch problems: time of flight, maximum height, range.
- **P4** Use a model or simulation to predict and test how launch angle and speed change the path.
- **P5** Explain, in terms of forces, why the horizontal velocity is constant and the vertical velocity changes.

## 3. Cornell notes

**Title:** Projectile Motion · **Essential question:** *Why does a thrown object follow a curved path, and how can we predict where it lands?*

| Cue | Notes |
|---|---|
| What's a projectile? | Any object moving under gravity alone (after launch). |
| Why two separate problems? | x and y motions are independent. Time (t) is the only link between them. |
| Horizontal rule? | No horizontal force → a_x = 0 → v_x constant → x = v_x·t |
| Vertical rule? | a_y = −g; at launch from level ground v_y = v sin θ; at the peak v_y = 0; time up = v_y/g. |
| Horizontal launch from height h? | v_y0 = 0, so t = √(2h/g); then Δx = v_x·t. |
| What's true at the peak? | v_y = 0, v_x ≠ 0, a = 9.8 m/s² down. |
| Best angle? | 45° for max range on level ground; 30° and 60° (complementary) give the same range. |

**Summary:** ________________________________

## 4. Learning resources
- **Simulation:** PhET *Projectile Motion* (add air resistance on/off for comparison) — phet.colorado.edu
- **Reading:** The Physics Classroom *Vectors – Motion and Forces in Two Dimensions*; OpenStax High School Physics *Two-dimensional kinematics*
- **Video:** Khan Academy *Two-dimensional projectile motion*; Flipping Physics projectile playlist
- **Tool:** Free Tracker video-analysis software (physlets.org/tracker) for filming real throws

## 5. Practice problems
1. A ball rolls off a 1.2 m table at 2.0 m/s. Time in air and landing distance? [0.49 s; 0.99 m]
2. A cannonball is fired at 50 m/s, 37° above horizontal (sin 37° ≈ 0.60, cos 37° ≈ 0.80). Find v_x and v_y. [40 m/s; 30 m/s]
3. For problem 2, find time of flight, maximum height and range on level ground. [≈6.1 s; ≈46 m; ≈245 m]
4. A plane at 500 m altitude, flying 80 m/s, drops supplies. How far ahead of the target must it release? [≈808 m]
5. Which launch angle gives the same range as 20°? Explain. [70° — complementary angles]
6. A basketball is released 2.0 m high at 7.5 m/s, 50° above horizontal toward a 3.05 m hoop 4.0 m away. Does it go through? *(Challenge — set up with a spreadsheet or Python and test several angles.)* [at x = 4.0 m the ball is ≈ 3.4 m high, about 0.34 m above the rim, so this shot is long; a slightly lower speed works]
7. Draw a motion map with arrows for velocity and acceleration at 5 points on the path; label the peak. [rubric: a is always down; v tangent to path]

## 6. Real-world applications
- Sports: basketball free throws, long jump, football punts, golf
- Firefighting: nozzle angle to reach a window
- Emergency drops: aid packages from aircraft
- Engineering: fountain design, artillery and ballistics tables, video-game physics engines

## 7. Lab / performance task
**Projectile launch lab:** Use a spring launcher or ramp-and-marble. Predict the landing point from measured launch speed (photogate or video), then test with carbon paper. Report percent error and identify two sources of error. *(HS-PS2-1 data analysis; uses the model for prediction, not just description.)*

## 8. Assessment criteria
| Level | Description |
|---|---|
| 4 – Advanced | Predicts landing location of an angled launch from elevated heights; quantitatively evaluates air-resistance effects from simulation data. |
| 3 – Proficient (≥ 80%) | Resolves components, solves horizontal- and angled-launch problems, uses correct units, and explains independence of components. |
| 2 – Developing | Solves horizontal launches; errors in sin/cos or time-of-flight for angled launches. |
| 1 – Beginning | Treats the whole motion as one-dimensional. |

## 9. Student checklist
- [ ] I can break a velocity into x and y components (P1)
- [ ] I can solve a horizontal launch from a cliff or table (P2)
- [ ] I can find time, height and range for an angled launch (P3)
- [ ] I tested predictions with the PhET simulation or a lab (P4)
- [ ] I can explain constant v_x vs. changing v_y using forces (P5)
- [ ] Cornell notes complete
- [ ] Scored ≥ 80% on the unit quiz
- [ ] IXL skills complete
