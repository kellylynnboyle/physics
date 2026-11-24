# Unit 2: Projectile Motion

**Pacing:** about 3 weeks | **NGSS link:** extends motion models to two dimensions in support of HS-PS2-1 and HS-PS2-4 (see [STANDARDS.md](../STANDARDS.md))

A projectile is any object that moves through the air with gravity as the only force acting on it. The key idea is that horizontal and vertical motion are independent and share only the time.

## Key concepts to master

- [ ] **Vectors and components**: resolve a velocity into vₓ = v cos θ and v_y = v sin θ.
- [ ] **Independence of motion**: horizontal motion does not affect vertical motion, and the reverse.
- [ ] **Horizontal motion**: constant velocity, because no horizontal force acts (aₓ = 0).
- [ ] **Vertical motion**: free fall, a_y = 9.8 m/s² downward for the whole flight.
- [ ] **Time links the two directions**: the vertical motion sets the time in the air; the horizontal motion uses that time.
- [ ] **Trajectory**: a parabola. At the top, the vertical velocity is zero but the horizontal velocity is unchanged.
- [ ] **Range and angle**: on level ground, 45° gives maximum range, and complementary angles (such as 30° and 60°) give equal ranges.

## Equations

| Horizontal (constant velocity) | Vertical (free fall) |
|---|---|
| vₓ = v cos θ | v₀y = v sin θ |
| Δx = vₓ t | v_y = v₀y − gt |
| | Δy = v₀y t − ½gt² |
| | v_y² = v₀y² − 2gΔy |

## Learning objectives

1. **P1** Resolve a vector into components and recombine components into a magnitude and direction.
2. **P2** Explain, with evidence, why horizontal and vertical motions are independent.
3. **P3** Solve horizontally launched projectile problems (time of fall, range, impact speed).
4. **P4** Solve angle-launched projectile problems on level ground (time, maximum height, range).
5. **P5** Predict and test a landing point in a lab, and account for the difference between prediction and result.

## Labs and activities

- **Marble off the table**: measure launch speed on the tabletop, predict the landing spot, place a cup, launch once. Independent variable: launch speed. Dependent variable: range.
- **Dropped vs. launched coin**: flick one coin off a desk while another drops straight down; listen for a single click.
- **Launch angle investigation**: use a projectile launcher or the PhET simulation to graph range vs. angle.
- **Video analysis**: track a thrown ball frame by frame and graph x vs. t (straight line) and y vs. t (parabola).

## Learning resources

- The Physics Classroom, *Vectors: Motion and Forces in Two Dimensions*: https://www.physicsclassroom.com
- PhET *Projectile Motion* simulation: https://phet.colorado.edu
- Khan Academy, *Two-dimensional motion*: https://www.khanacademy.org/science/physics
- OpenStax *Physics* (high school), chapter 5: https://openstax.org/details/books/physics
- [Cornell notes for this unit](cornell-notes.md) and the [interactive quiz](../quizzes/index.html)

## Practice problems

Use g = 9.8 m/s² and ignore air resistance.

1. A ball rolls off a 0.80 m high table at 2.5 m/s. How long is it in the air, and how far from the table does it land?
2. A stone is thrown horizontally at 12 m/s from a 45 m cliff. Find the time of flight, the horizontal distance, and the speed at impact.
3. A soccer ball is kicked at 20 m/s at 37° above level ground. Find the velocity components, the time in the air, the maximum height, and the range.
4. A ball is launched at 15 m/s. Compare the ranges for launch angles of 30° and 60°.
5. A supply plane flies level at 80 m/s at an altitude of 490 m. How far before the target must it release the package?

<details>
<summary>Answers</summary>

1. t = √(2 × 0.80 ÷ 9.8) = 0.40 s; Δx = 2.5 × 0.40 = 1.0 m.
2. t = √(2 × 45 ÷ 9.8) = 3.0 s; Δx = 12 × 3.03 = 36 m; v_y = 9.8 × 3.03 = 29.7 m/s; speed = √(12² + 29.7²) = 32 m/s.
3. vₓ = 20 cos 37° = 16 m/s; v₀y = 20 sin 37° = 12 m/s; time up = 12.0 ÷ 9.8 = 1.23 s, total 2.5 s; height = 12.0² ÷ 19.6 = 7.4 m; range = 16.0 × 2.46 = 39 m.
4. R = v² sin 2θ ÷ g. Both angles give sin 2θ = 0.866, so both ranges are 225 × 0.866 ÷ 9.8 = 20 m. The 60° launch goes higher and stays up longer.
5. t = √(2 × 490 ÷ 9.8) = 10 s; Δx = 80 × 10 = 800 m before the target.

</details>

## Real-world applications

- **Sports**: basketball arc, a soccer goal kick, and why long jumpers aim for a takeoff angle well below 45° (they cannot keep full speed at steep angles).
- **Firefighting and irrigation**: hose angle sets where the water lands.
- **Disaster relief airdrops**: the package keeps the plane's forward velocity, so it must be released early.
- **Earth science connection**: volcanic bombs follow projectile paths, and geologists use landing distances to estimate eruption speeds.

## Assessment criteria

| Objective | Evidence | Proficient (3 of 4) looks like |
|---|---|---|
| P1 | Vector worksheet | Correct components with sine and cosine assigned to the right directions |
| P2 | Written explanation, quiz Q1 and Q3 | States that only gravity acts, so only vertical velocity changes |
| P3, P4 | Problem set, unit test | Separate horizontal and vertical lists of knowns; time found from vertical motion |
| P5 | Lab report | Prediction within 10% of the measured range, with sources of error named |

**Mastery check:** 80% or better on the [Projectile Motion quiz](../quizzes/index.html) and a 3 or 4 on each objective in the [progress tracker](../assessment/progress-tracker.md).
