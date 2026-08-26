# Cornell Notes: Projectile Motion

**Topic:** Projectile Motion (2D motion under gravity)
**Course:** 11th Grade Physics

---

## Notes

| Cues / Questions | Notes |
|---|---|
| What is a projectile? | An object launched into the air that moves under the influence of gravity alone (air resistance ignored). Its path is called its **trajectory**, and for a projectile launched and landing at the same height, that path is a symmetric **parabola**. |
| What is the core insight that makes projectile motion solvable? | **Horizontal and vertical motion are completely independent of each other.** Gravity acts only vertically, so it never changes the horizontal velocity. You can analyze the two directions as two separate, simpler 1D motion problems that happen to share the same clock (same time, t). |
| Why is horizontal velocity constant? | There is no horizontal force acting on the projectile (ignoring air resistance), so by Newton's First Law, horizontal velocity does not change. **aₓ = 0** for the entire flight. |
| What is the horizontal equation of motion? | Since aₓ = 0, horizontal motion is just constant-velocity motion: **x = x₀ + vₓ·t**, where vₓ never changes. |
| Why does vertical velocity change? | Gravity is a constant downward force, producing constant downward acceleration **a_y = −g = −9.8 m/s²** (taking up as positive). This acts on the projectile from the instant it launches until the instant it lands — including at the very top of its path. |
| What are the vertical equations of motion? | Standard 1D kinematics with a = −g: <br>• v_y = v_y0 − g·t <br>• y = y₀ + v_y0·t − ½g·t² <br>• v_y² = v_y0² − 2g(y − y₀) |
| How do you decompose the initial velocity? | Given initial speed v₀ and launch angle θ (measured from horizontal): <br>• **vₓ = v₀cos(θ)** <br>• **v_y0 = v₀sin(θ)** <br>Always do this FIRST before touching any kinematics equation — plugging v₀ directly into a component equation is a common and serious error. |
| What happens to v_y at the peak (maximum height)? | v_y = 0 at the peak — but this is only true for the *vertical component*. Acceleration is still −g at the peak (gravity never turns off), and horizontal velocity vₓ is completely unaffected and still nonzero. |
| Formula: time of flight (symmetric case — launch height = landing height) | **t = 2v_y0 / g** <br>Derived by setting the vertical displacement to zero and solving; this shortcut ONLY works when launch and landing heights are equal. |
| Formula: maximum height | **h_max = v_y0² / (2g)** <br>Derived from v_y² = v_y0² − 2g·h with v_y = 0 at the peak. This formula works regardless of whether launch/landing heights are equal, since it only depends on the vertical component at launch. |
| Formula: range (symmetric case only) | **R = v₀²sin(2θ) / g** <br>Valid ONLY when the projectile lands at the same height it launched from. Derived by combining t = 2v_y0/g with x = vₓ·t and the double-angle identity 2sinθcosθ = sin(2θ). |
| Why doesn't the range formula work for launches from a height? | The formula's derivation assumes the projectile returns to y = 0 (same height). If launched from a height (or landing at a different height), you must instead solve the full quadratic y = y₀ + v_y0·t − ½gt² for t, then use x = vₓ·t. There is no shortcut formula for this general case. |
| Why is the trajectory NOT symmetric when launched from a height? | The projectile spends less time rising to its peak than it spends falling from its peak to the ground, because it has "extra" height to fall through below the launch point. More time is spent on the way down than the way up. |
| Why is 45° optimal only on level ground? | R = v₀²sin(2θ)/g is maximized when sin(2θ) = 1, i.e., θ = 45° — but this formula assumes equal launch/landing height. When launched from an elevation, the "extra" falling time favors a flatter trajectory (more horizontal speed), so the optimal angle is slightly LESS than 45°. |
| Common error: using total speed for time of flight | Time of flight depends ONLY on the vertical component of velocity (v_y0), not the total initial speed v₀. Using v₀ instead of v_y0 in t = 2v_y0/g is a frequent and serious mistake. |
| Common error: two angles give the same range | Complementary angles (θ and 90°−θ) give the same range on level ground, because sin(2θ) = sin(180° − 2θ) = sin(2(90°−θ)). E.g., 30° and 60° produce identical ranges (but different times of flight and max heights). |
| How do you find velocity at ANY point in flight? | Find vₓ (always constant) and v_y at that time (v_y = v_y0 − g·t) separately, then combine as vectors: <br>• magnitude: v = √(vₓ² + v_y²) <br>• direction: θ = tan⁻¹(v_y / vₓ) relative to horizontal |

---

## Worked Example (fully solved)

**Problem:** A projectile is launched from ground level at 25 m/s at an angle of 35° above the horizontal. It lands at the same height it was launched from. Find (a) the initial velocity components, (b) the time of flight, (c) the maximum height, and (d) the range. Use g = 9.8 m/s².

**Step 1 — Decompose initial velocity:**
vₓ = v₀cos(θ) = 25 × cos(35°) = 25 × 0.8192 = **20.5 m/s** (constant for entire flight)
v_y0 = v₀sin(θ) = 25 × sin(35°) = 25 × 0.5736 = **14.3 m/s** (upward at launch)

**Step 2 — Time of flight (symmetric case applies — same launch/landing height):**
t = 2v_y0 / g = 2(14.3) / 9.8 = 28.6 / 9.8 = **2.92 s**

**Step 3 — Maximum height:**
h_max = v_y0² / (2g) = (14.3)² / (2 × 9.8) = 204.5 / 19.6 = **10.4 m**

**Step 4 — Range:**
Using the range formula (valid here since launch height = landing height):
R = v₀²sin(2θ) / g = (25)² × sin(70°) / 9.8 = 625 × 0.9397 / 9.8 = 587.3 / 9.8 = **59.9 m**

Check using components: R = vₓ · t = 20.5 × 2.92 = **59.9 m** ✓ (matches — confirms the answer)

---

## Summary

Projectile motion looks complicated because the path curves, but it is really two independent, simpler motions happening at the same time and sharing the same clock: constant-velocity motion horizontally (aₓ = 0, so vₓ never changes) and constant-acceleration motion vertically (a_y = −g throughout, even at the peak where only v_y momentarily equals zero). Solving any projectile problem starts with decomposing the initial velocity into vₓ = v₀cos(θ) and v_y0 = v₀sin(θ) — skipping this step is the single most common source of errors. The shortcut formulas for time of flight (t = 2v_y0/g) and range (R = v₀²sin(2θ)/g) are convenient but only valid when launch height equals landing height; the maximum height formula (h_max = v_y0²/(2g)) has no such restriction. When a projectile is launched from an elevated height, its trajectory is not symmetric — it spends more time falling than rising — and the only reliable method is to solve the full vertical kinematics equation for time, then substitute into the horizontal equation. Finally, remember that 45° is optimal for range only on level ground; unequal launch/landing heights shift the optimal angle away from 45°, and two complementary angles always produce equal ranges (though different flight times) when launch and landing heights match.
