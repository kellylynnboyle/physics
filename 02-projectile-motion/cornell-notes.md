# Topic 2: Projectile Motion — Cornell Notes

## Learning Objectives
- State and apply the principle that horizontal and vertical motion are independent.
- Resolve an initial velocity into horizontal and vertical components.
- Calculate time of flight, maximum height, and range for level and elevated launches.
- Explain why horizontal velocity is constant while vertical velocity changes at `g`.
- Analyze projectiles launched horizontally versus at an angle.
- Interpret a projectile's parabolic trajectory graphically.

---

| Cues / Questions | Notes |
|---|---|
| What is the **core principle** of projectile motion? | Horizontal and vertical motion are completely **independent** of each other — they only share one thing: time. Ignoring air resistance, nothing that happens vertically affects the horizontal motion, and vice versa. |
| How do you **resolve** an initial velocity `v₀` launched at angle `θ` into components? | `v₀ₓ = v₀ cos θ` (horizontal) and `v₀ᵧ = v₀ sin θ` (vertical). Sketch the velocity vector and the angle from the horizontal *first* — mixing up sin/cos is one of the most common errors in this unit. |
| What happens to the **horizontal velocity** during flight? | It stays **constant** the entire flight (`vₓ = v₀ₓ`, always) because there is no horizontal force (no air resistance assumed). |
| What happens to the **vertical velocity** during flight? | It behaves exactly like 1-D free fall: `vᵧ = v₀ᵧ − gt`. It decreases on the way up, is zero at the peak, and increases in magnitude (downward) on the way down. |
| What is true **at the peak** of the trajectory? | `vᵧ = 0`, but `vₓ` is unchanged and nonzero (unless launched straight up). The object is *not* at rest — it's still moving horizontally. |
| Key **equations** (launch height = landing height, angle θ): | Time of flight: `T = 2v₀sinθ / g`. Max height: `H = (v₀sinθ)² / (2g)`. Range: `R = v₀²sin(2θ) / g`. |
| What launch angle gives **maximum range**? | 45° — but only when launch and landing heights are equal. Complementary angles (e.g., 30° and 60°) give the *same* range as each other, but not the max. |
| How do you handle a projectile launched **horizontally off a height** (`v₀ᵧ = 0`)? | Vertical motion is pure free fall from rest: `h = ½gt²` solves for time to fall height `h`. Horizontal range is then `x = v₀ · t` using that same `t`. |
| How do you handle a projectile that **lands at a different height** than it launched? | You cannot use the symmetric formulas above. Set up `y(t) = y₀ + v₀ᵧt − ½gt²` and solve the quadratic for `t` using the actual `y₀` and the landing `y`, then plug that `t` into `x(t) = v₀ₓt`. |
| Why is the trajectory a **parabola**? | Because `x` is linear in `t` and `y` is quadratic in `t`; eliminating `t` from both equations produces `y` as a quadratic function of `x`. |

---

## Key Vocabulary
**Range** (horizontal distance traveled) · **Trajectory** (the path traced, a parabola) · **Component** (the projection of a vector along an axis) · **Complementary angles** (two angles that sum to 90°, producing equal range) · **Apex** (highest point of the trajectory)

## Summary
Projectile motion is just two 1-D kinematics problems happening
simultaneously and independently, linked only by a shared clock. The
biggest source of errors is *mixing the two axes* — using a vertical
velocity in a horizontal equation, or vice versa — and forgetting that
horizontal velocity never changes while vertical velocity behaves exactly
like free fall throughout the entire flight, peak included.
