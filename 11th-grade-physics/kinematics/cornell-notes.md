# Cornell Notes: Kinematics (Motion in One Dimension)

**Topic:** Kinematics — 1D Motion &nbsp;|&nbsp; **Unit:** Mechanics &nbsp;|&nbsp; **Class:** 11th Grade Physics

---

| Cues / Questions | Notes |
|---|---|
| What is **kinematics**? | The description of motion (position, velocity, acceleration over time) **without** considering the forces that cause it. Contrast with *dynamics*, which asks *why* things move (Newton's Laws). |
| What is **position** (x)? | An object's location relative to a chosen origin, along a number line. Units: meters (m). Requires a defined positive direction. |
| **Distance** vs. **Displacement**? | **Distance** = total path length traveled. Always positive. Scalar (no direction). **Displacement** (Δx) = change in position = x_f − x_i. Can be +, −, or 0. Vector (has direction, shown by sign in 1D). *Example:* walk 5 m east, then 3 m west → distance = 8 m, displacement = +2 m east. |
| **Speed** vs. **Velocity**? | **Speed** = distance / time. Scalar, always ≥ 0. **Velocity** = displacement / time. Vector — sign shows direction. Average speed can be *larger* than the magnitude of average velocity whenever the path isn't a straight line in one direction (e.g., round trips). |
| **Average velocity** — formula? | v̄ = Δx / Δt = (x_f − x_i) / (t_f − t_i). This is the slope of the *secant line* connecting two points on a position-time graph. |
| **Instantaneous velocity** — what is it? | The velocity at one exact instant in time. Graphically: the slope of the **tangent line** to the position-time graph at that instant. As Δt → 0, average velocity → instantaneous velocity. |
| What is **acceleration** (a)? | Rate of change of velocity: a = Δv / Δt = (v_f − v_i)/(t_f − t_i). Units: m/s². Vector — sign shows direction of the *change in velocity*, NOT whether the object is speeding up. |
| ⚠ Common trap: does negative acceleration always mean "slowing down"? | **No.** Whether an object speeds up or slows down depends on whether **v and a have the same sign (speeding up)** or **opposite signs (slowing down)** — regardless of which is positive or negative. Example: object moving with v = −20 m/s and a = +4 m/s² is *slowing down* (v and a have opposite signs) even though a is positive. |
| Sign convention — rules of thumb | 1. Pick a positive direction *before* solving (usually "up" or "the direction of initial motion"). 2. Stay consistent for x, v, and a throughout the problem. 3. Negative velocity = moving in the negative direction — it is still motion, not "no motion." 4. Free-fall problems: many textbooks take **up as positive**, so g = **−9.8 m/s²**; others take down as positive, so g = **+9.8 m/s²**. Either works — just be consistent. |
| The 4 kinematic equations (constant a only!) | 1. **v = v₀ + at** &nbsp;(no Δx) 2. **Δx = v₀t + ½at²** &nbsp;(no v) 3. **v² = v₀² + 2aΔx** &nbsp;(no t) 4. **Δx = ½(v₀ + v)t** &nbsp;(no a) *Variables:* x₀/x = initial/final position, v₀/v = initial/final velocity, a = acceleration (constant), t = time elapsed. |
| How do I pick which equation to use? | List your **knowns** and the **unknown** you need. Each equation is missing exactly one of the 5 variables (x, v₀, v, a, t). Choose the equation that doesn't require the variable you don't have and isn't asking for. |
| What is **free fall**? | Motion under gravity alone (no air resistance). Constant acceleration, magnitude **g = 9.8 m/s²**, always directed **downward**, regardless of whether the object is moving up, down, or momentarily at rest. |
| ⚠ Misconception check: velocity vs. acceleration at the top of a toss | At the very top of a vertical throw, **v = 0** but **a = −g ≠ 0** (still accelerating downward the whole time). Zero velocity does NOT mean zero acceleration — this is one of the most commonly missed ideas in kinematics. |
| Reading a **position-time graph** | **Slope = velocity.** Steeper slope = faster. Straight line = constant velocity. Curved line = changing velocity (non-zero acceleration). Horizontal line = at rest (v = 0). Negative slope = moving in the negative direction. |
| Reading a **velocity-time graph** | **Slope = acceleration.** Horizontal line = constant velocity (a = 0). **Area under the curve = displacement.** Area above the t-axis is positive displacement; area below is negative displacement — add them algebraically (with sign) for net displacement. |
| ⚠ Slope vs. area — how do I keep these straight? | Ask "which graph am I on?" **Position-time:** slope only (no meaningful "area"). **Velocity-time:** slope gives acceleration, area gives displacement. Mixing these up (e.g., reading area on a position-time graph) is one of the most common graph-reading errors. |
| Worked micro-example | *A car starts at rest (v₀ = 0) and accelerates at a = 3 m/s² for t = 5 s. Find its displacement.* Known: v₀=0, a=3, t=5. Unknown: Δx. Missing variable is v (final velocity) → use equation 2: Δx = v₀t + ½at² = (0)(5) + ½(3)(25) = **37.5 m**. |
| Units & sig figs reminder | Always carry units through each step. Final answer's significant figures should match the *least* precise given value (e.g., if one given has 2 sig figs, round your final answer to 2 sig figs — even if intermediate steps used more digits). |

---

## Summary

Kinematics describes motion using position, displacement, velocity, and acceleration, always keeping vectors (displacement, velocity, acceleration) distinct from their scalar cousins (distance, speed). The four constant-acceleration kinematic equations each omit one variable, so solving a problem starts with listing knowns/unknowns and picking the equation that fits. On graphs, slope and area mean different things depending on which axes you're reading — position-time slope gives velocity, while velocity-time slope gives acceleration and area gives displacement. Free fall is just constant acceleration with a = g = 9.8 m/s², and the trickiest idea to remember is that velocity can be zero (like at the top of a toss) while acceleration is not. Getting sign conventions locked down at the start of every problem is what prevents most kinematics errors.
