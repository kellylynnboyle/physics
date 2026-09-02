# Cornell Notes — Projectile Motion

*Fill in the blanks as you study. Print this or copy the format into a
paper notebook: cues on the left, notes on the right, summary at the
bottom.*

| Cues / Questions | Notes |
|---|---|
| What does "independence of motion" mean? | Horizontal and vertical motion happen simultaneously but don't affect each other. Gravity acts only vertically, so it never changes vₓ. Horizontal speed never changes how quickly the object falls. You can solve the two axes as two separate 1D kinematics problems that share only one variable: time. |
| Why is horizontal velocity constant? | With air resistance ignored, there's no horizontal force, so no horizontal acceleration. vₓ = v₀ₓ the whole flight. Horizontal position: Δx = vₓt. |
| Why is vertical motion free fall? | The only vertical force is gravity, so a = −g the entire flight — including at the very top of the arc, where vy = 0 but a is still −9.8 m/s². All Unit 1 kinematic equations apply to the y-axis alone. |
| How do you find v₀ₓ and v₀y from v₀ and θ? | v₀ₓ = v₀cosθ (adjacent side), v₀y = v₀sinθ (opposite side), where θ is measured from the horizontal. Do this decomposition FIRST, before touching any kinematic equation — plugging the full speed v₀ into a vertical-only equation is a very common error. |
| Time of flight, max height, range (level ground only) | t = 2v₀y/g __ h_max = v₀y²/(2g) __ R = v₀ₓ·t = v₀²sin(2θ)/g. These three shortcut formulas ONLY work when launch height = landing height — check that before using them. |
| How is a cliff/table launch different? | Launch and landing heights differ, so the symmetric formulas above don't apply. Use Δy = v₀yt + ½at² for the y-axis (Δy is negative — the ball ends up below where it started) to solve for t, then Δx = v₀ₓt for range. If launched purely horizontally, v₀y = 0, which simplifies the y-equation but doesn't change how you set it up. |
| Why is the path a parabola? | x(t) is linear in t (constant velocity) and y(t) is quadratic in t (constant acceleration); eliminating t gives y as a quadratic function of x — a parabola. |
| Why does range peak at 45°? | R = v₀²sin(2θ)/g is maximized when sin(2θ) = 1, i.e., 2θ = 90°, so θ = 45°. This ONLY holds for equal launch/landing heights and no air resistance. |
| What's special about complementary launch angles? | Angles that add to 90° (e.g., 30°/60°, 20°/70°) give the SAME range on level ground (sin(2θ) is the same for θ and 90°−θ), but different max heights and different times of flight — the steeper angle goes higher and stays up longer. |
| Common "speed is zero at the top" trap | At the peak, vy = 0, but vₓ is unchanged and nonzero — the object is still moving horizontally at the top. Total speed at the peak = vₓ, not zero. Only vy = 0. |
| Common time-of-flight trap | Time of flight depends ONLY on the vertical motion (v₀y and height) — a projectile launched faster horizontally does NOT hit the ground sooner. Two balls launched from the same height with the same v₀y but different vₓ land at the same time. |

## Summary (write in your own words after studying)

Projectile motion treats horizontal and vertical motion as two independent
1D kinematics problems linked only by time. Horizontal velocity is
constant (no horizontal acceleration); vertical motion is free fall with
a = −g throughout, even at the peak where only vy (not vₓ) is zero.
Decompose v₀ into v₀ₓ = v₀cosθ and v₀y = v₀sinθ before solving. The
shortcut equations for time of flight, max height, and range apply only
when launch and landing heights are equal; asymmetric launches (cliffs,
tables) require solving Δy = v₀yt + ½at² directly. The resulting path is
always a parabola, range is maximized at 45° on level ground, and
complementary angles share a range but not a height or flight time.
