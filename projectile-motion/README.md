# Unit 2: Projectile Motion

Projectile motion applies 1D kinematics to two dimensions at once by treating the
horizontal and vertical directions as **independent**.

## Learning objectives

By the end of this unit, students will be able to:

1. Decompose an initial velocity into horizontal and vertical components.
2. Explain why horizontal and vertical motions are independent of each other.
3. Solve for time of flight, maximum height, and range for both level and
   non-level (different launch/landing height) projectiles.
4. Sketch and interpret the parabolic trajectory, velocity vectors, and
   acceleration vector at any point in the flight.
5. Explain the effect of launch angle on range, including complementary angles.

## Key concepts to master

- **Independence of motion**: horizontal velocity (vₓ) stays constant (no air
  resistance); vertical velocity (v_y) changes at −g. Neither axis affects the other.
- **Component decomposition**: vₓ = v₀cos(θ), v_y = v₀sin(θ).
- **Time of flight is controlled entirely by the vertical motion** (how long it
  takes gravity to bring the projectile back down to landing height).
- **At the peak of the trajectory**: v_y = 0, but vₓ ≠ 0 (unless launched
  straight up), and acceleration is still −g (never zero, even at the peak).
- **Range formula** R = (v₀² sin(2θ))/g applies **only** when launch height =
  landing height.
- **Complementary launch angles** (e.g., 30° and 60°) give the **same range**
  (for equal launch/landing height, no air resistance), but different times of
  flight and max heights.
- **Maximum range** (no air resistance, equal heights) occurs at **θ = 45°**.

## Cornell notes

### Cues / Questions
- Why can horizontal and vertical motion be analyzed separately?
- What is vₓ and v_y at the very top of the trajectory?
- What determines total time of flight?
- Does the range formula work if a ball is launched off a cliff? Why not?
- Why do 30° and 60° launches land at the same spot (level ground)?
- What is the acceleration at every point of the flight, including the top?

### Notes
- Gravity only acts **vertically**, so it changes only v_y — vₓ is unaffected
  and stays **constant** throughout the flight (assuming no air resistance).
- Decompose the launch velocity first: vₓ = v₀cos(θ), v_y = v₀sin(θ). Then treat
  each axis with ordinary 1D kinematics — vₓ with a = 0, v_y with a = −g.
- **Time of flight** comes only from the vertical equation
  (Δy = v_y0·t − ½gt²); once you have t, plug into Δx = vₓ·t for range.
- At the **peak**: v_y = 0 (it's the instant vertical velocity reverses sign),
  but **a = −g still**, and horizontal velocity is unchanged — so the object is
  still moving, just not vertically.
- The clean **R = v₀²sin(2θ)/g** shortcut is a special case (level ground). If
  launch and landing heights differ, you must solve the full vertical equation
  for time first, then find range — the shortcut formula gives wrong answers.
- sin(2θ) is the same for complementary angles (sin(60°) = sin(120°)), which is
  why 30°/60°, 20°/70°, etc. pairs give equal range on level ground — but the
  steeper angle has a longer time of flight and greater max height.

### Summary (write in your own words)
Split every projectile problem into two independent 1D problems joined only by
a shared time variable *t*. Vertical motion controls "how long"; horizontal
motion (constant velocity) then tells you "how far."

## Commonly missed question types (what the quiz targets)

1. Assuming horizontal velocity is zero or changes during flight.
2. Assuming acceleration is zero at the peak because v_y = 0 there.
3. Using the level-ground range formula for a projectile launched from/onto
   different heights.
4. Forgetting to decompose v₀ into components before starting.
5. Believing a heavier projectile falls "faster" and lands sooner (mass is
   irrelevant to the trajectory, no air resistance).
6. Mixing up which equation uses total v₀ vs. which uses only vₓ or v_y.

## Practice problems

1. A ball is launched at 25 m/s at 40° above horizontal from level ground.
   Find the time of flight, max height, and range.
   *(Answer: t ≈ 3.28 s, h_max ≈ 13.2 m, R ≈ 63.1 m)*
2. A stone is thrown horizontally at 15 m/s from the top of a 20 m cliff. Find
   the time to hit the ground and the horizontal distance traveled.
   *(Answer: t ≈ 2.02 s, Δx ≈ 30.3 m)*
3. Two balls are launched at 20 m/s, one at 25° and one at 65°, from level
   ground. Show their ranges are equal but their times of flight are not.
4. A basketball player releases a shot at 7.5 m/s at 50° above horizontal.
   What are the horizontal and vertical velocity components at launch?
   *(Answer: vₓ ≈ 4.82 m/s, v_y ≈ 5.75 m/s)*
5. Explain, without doing the math, why the range formula R = v₀²sin(2θ)/g
   cannot be used directly for a golf ball hit off an elevated tee toward a
   green below it.

## Real-world applications

- **Sports**: basketball free throws, golf drives, soccer free kicks, javelin throw angle optimization.
- **Military/historical ballistics**: artillery range tables (early motivation for studying projectile motion).
- **Water fountains and firefighting hoses**: nozzle angle for max reach.
- **Search-and-rescue / delivery drones**: payload drop timing (horizontal release problems).

## Learning resources

- [The Physics Classroom: Projectile Motion](https://www.physicsclassroom.com/class/vectors)
- [Khan Academy: Two-dimensional motion](https://www.khanacademy.org/science/physics/two-dimensional-motion)
- [PhET: Projectile Motion simulation](https://phet.colorado.edu/en/simulation/projectile-motion)
- [OpenStax College Physics, Ch. 3: Two-Dimensional Kinematics](https://openstax.org/books/college-physics-2e/pages/3-introduction-to-two-dimensional-kinematics)

## Assessment criteria

| Level | Descriptor |
|---|---|
| Beginning | Can decompose velocity into components with guidance but conflates horizontal/vertical equations. |
| Developing | Solves level-ground launch problems correctly; struggles with unequal launch/landing heights. |
| Proficient | Solves both level and non-level trajectory problems, correctly explains motion at the peak. |
| Advanced | Derives or justifies the range formula, explains complementary-angle symmetry, combines projectile motion with other units (e.g., energy at landing). |

**Mastery target:** ≥ 80% on `quiz.html`, plus one correctly solved
unequal-height projectile problem with work shown.
