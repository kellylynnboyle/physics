# 02 — Projectile Motion

Projectile motion is kinematics applied in two dimensions at once: horizontal motion and vertical motion happen **independently and simultaneously**. The single biggest conceptual leap in this unit is accepting that independence — nothing about the horizontal motion affects the vertical motion, or vice versa.

## Key Concepts to Master

- **Independence of axes** — horizontal velocity ($v_x$) is constant throughout the flight (no horizontal acceleration, ignoring air resistance); vertical velocity ($v_y$) changes at a constant rate due to gravity ($a_y = -g$). Time is the only variable shared between the two axes.
- **Decomposing initial velocity** — for a launch at angle $\theta$: $v_{x0} = v_0\cos\theta$, $v_{y0} = v_0\sin\theta$.
- **Time of flight** — determined *entirely* by the vertical motion (how long it takes to return to the launch height or reach the ground) — never by the horizontal distance or speed.
- **Range, max height, and symmetry** — for a projectile launched and landing at the same height, the trajectory is symmetric: time up = time down, and the launch/landing speeds (and angles) are equal in magnitude.
- **Maximum range** — occurs at a 45° launch angle (for equal launch/landing height, no air resistance); complementary angles (e.g., 30° and 60°) give the same range.
- **At the peak of the trajectory** — $v_y = 0$, but $v_x$ is unchanged and nonzero (unless launched straight up), and $a_y = -g$ still.
- **Horizontally launched projectiles** (e.g., off a cliff/table) — $v_{y0} = 0$, so all the "time of flight" math reduces to a free-fall calculation using only the height.

## Learning Objectives

By the end of this section, a student should be able to:

1. Decompose an initial velocity vector into horizontal and vertical components using trigonometry.
2. Correctly identify that time of flight is governed by vertical motion only, and use it to find horizontal range.
3. Solve for maximum height, time of flight, and range for both angled launches and horizontal launches (off a height).
4. Explain why $v_x$ is constant throughout flight while $v_y$ changes, referencing the forces (or lack thereof) acting in each direction.
5. Correctly identify velocity components at any point on the trajectory (launch, peak, mid-flight, landing) — including sign and magnitude.

## Learning Resources

- **Textbook alignment:** OpenStax *Physics* Chapter 3.4 "Projectile Motion"; OpenStax *University Physics Vol. 1* Ch. 4.3.
- **Video:** Khan Academy — "Two-dimensional motion" unit, especially "Projectile at an angle" videos.
- **Simulation:** PhET — "Projectile Motion" (phet.colorado.edu) — adjust angle, speed, and even air resistance, then compare trajectories side by side.
- **Trig refresher:** if $\sin\theta$, $\cos\theta$ component decomposition feels shaky, review SOH-CAH-TOA before starting problem sets.

## Practice Problems

1. A ball is kicked at $20 \text{ m/s}$ at $30°$ above horizontal. Find the time of flight, maximum height, and range.
2. A stone is thrown horizontally at $15 \text{ m/s}$ from the top of a $20 \text{ m}$ building. Find the time to hit the ground and the horizontal distance traveled.
3. A projectile has a range of $50 \text{ m}$ when launched at $40°$. What other launch angle gives the same range at the same speed?
4. For the ball in problem 1, find its velocity (magnitude and direction) exactly at $t = 1$ second.
5. **Challenge:** A basketball player shoots at $7 \text{ m/s}$ from a height of $2 \text{ m}$, aiming for a hoop $3 \text{ m}$ away and $3.05 \text{ m}$ high. At what launch angle does the ball reach the hoop? (Set up the equations; numerical/graphical solving is fine.)

## Real-World Applications

- **Sports:** basketball, golf, and soccer trajectories are all optimized using projectile motion — coaches and engineers analyze launch angle vs. distance trade-offs.
- **Ballistics and forensics:** investigators reconstruct bullet or debris trajectories from impact points using the same equations.
- **Water fountains and irrigation:** nozzle angle and pressure (initial speed) are engineered using range equations to hit a target zone.
- **Space and artillery history:** the 45°-max-range principle historically shaped artillery design before accounting for air resistance and target elevation differences.

## Assessment

- `cornell-notes.md` — structured notes for this section
- `quiz.html` — open in a browser; 90%+ indicates mastery-level readiness for Section 03
