# Topic 2: Projectile Motion

Projectile motion is 2D kinematics: the key insight is that horizontal and vertical motion are **independent** and can be analyzed separately, linked only by time.

## Key Concepts to Master

- **Independence of x and y motion:** horizontal velocity is constant (no horizontal acceleration, ignoring air resistance); vertical motion is free fall ($a_y = -g$)
- **Vector decomposition:** breaking an initial velocity into components: $v_{x} = v_0\cos\theta$, $v_{y} = v_0\sin\theta$
- **Time of flight, range, and maximum height** for both horizontal launches and angled launches
- **Symmetry of trajectory:** for a projectile launched and landing at the same height, time up = time down, and launch/landing speeds (and angles) are equal in magnitude
- **The range equation** and why $45°$ maximizes range (on level ground, no air resistance): $R = \dfrac{v_0^2 \sin(2\theta)}{g}$
- **Projectiles launched from a height** (e.g., off a cliff or table) — vertical motion no longer symmetric; must solve the quadratic $\Delta y = v_{y0}t - \tfrac12 g t^2$ for $t$

## Learning Objectives (SWBAT)

1. Decompose an initial velocity vector into horizontal and vertical components using trigonometry.
2. Set up and solve independent horizontal and vertical kinematics equations linked by a shared time variable.
3. Solve for time of flight, range, and maximum height for both level and elevated launches.
4. Explain, using physics reasoning (not just the formula), why horizontal velocity stays constant while vertical velocity changes.
5. Correctly analyze horizontally launched projectiles (initial $v_y = 0$) as a special case.

## Common Pitfalls (why this topic gets missed)

- Using the *initial total speed* $v_0$ in vertical equations instead of the vertical component $v_{y0}$.
- Assuming horizontal velocity affects "how long it falls" — it doesn't; time of fall for a horizontally launched projectile depends only on height.
- Forgetting gravity still acts on the way *up and across*, not just once it starts falling.
- Sign errors when the landing point is below the launch point (negative $\Delta y$).
- Using the symmetric range/height shortcut formulas when the launch and landing heights are *not* equal (they don't apply then — must go back to component kinematics).

See [Worked Examples](worked-examples.md) for fully solved problems using the 4-phase method before attempting these.

## Practice Problems

1. A ball is kicked horizontally off a 20 m cliff at $15\ \text{m/s}$. Find the time to land and the horizontal distance traveled.
2. A projectile is launched at $30\ \text{m/s}$ at $40°$ above horizontal from level ground. Find the time of flight, maximum height, and range.
3. Two balls are released at the same instant from the same height — one dropped straight down, one launched horizontally. Which lands first? Justify with physics, not just the formula.
4. A basketball is thrown at $8\ \text{m/s}$ at $50°$ from a height of $2\ \text{m}$ and lands in a hoop at height $3\ \text{m}$, some horizontal distance away. Set up (don't necessarily solve) the equations you'd need.
5. At what two launch angles (level ground) does a projectile achieve the *same* range? Why?

## Real-World Applications

- **Sports:** optimal launch angle for shot put (accounting for release height, it's slightly less than 45°), soccer free kicks, basketball arcs.
- **Ballistics/artillery:** historical use of range equations; modern corrections for air resistance and Earth's curvature/rotation for long-range artillery.
- **Water fountains and irrigation sprinklers:** trajectory design for coverage.
- **Search and rescue / cargo drops:** calculating drop point for a horizontally moving aircraft releasing a package to hit a target.

## Suggested Resources

- PhET simulation: *Projectile Motion* — https://phet.colorado.edu/en/simulation/projectile-motion (adjustable angle/speed/height, shows trajectory and component vectors live)
- The Physics Classroom, Projectile Motion unit — https://www.physicsclassroom.com/class/vectors
- Khan Academy: Two-dimensional motion — https://www.khanacademy.org/science/physics/two-dimensional-motion
- OpenStax *Physics*, Chapter 3 (Two-Dimensional Kinematics) — https://openstax.org/details/books/physics

## Assessment Criteria

Student work is assessed on:
- Correct decomposition of initial velocity into x/y components (with a labeled diagram)
- Correct identification of $a_x = 0$, $a_y = -g$
- Correct use of time as the linking variable between x and y equations
- Correct handling of non-symmetric (elevated launch) cases without misapplying symmetric shortcuts
- Units, sig figs, and a sanity check (e.g., "does the range seem physically reasonable?")

See the [unit-level rubric](../README.md#cross-cutting-assessment-rubric-applies-to-all-5-topics) for scoring.
