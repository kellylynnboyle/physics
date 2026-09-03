# Cornell Notes — Projectile Motion

**Topic:** Motion in two dimensions under gravity | **Date:** ___________ | **Name:** ___________

---

| Cues / Questions | Notes |
|---|---|
| Why do we treat horizontal and vertical motion separately? | Horizontal and vertical motion are independent — the only force acting (ignoring air resistance) is gravity, and it acts purely vertically. The two motions only share one thing in common: elapsed time t. |
| How do I decompose the initial velocity? | Before using any equation, break v₀ into components using the launch angle θ: v₀ₓ = v₀cosθ (horizontal) and v₀ᵧ = v₀sinθ (vertical). Skipping this step is the most common algebra mistake in this unit. |
| What kind of motion is happening horizontally? | Constant velocity — no horizontal acceleration (ignoring air resistance). vₓ = v₀ₓ for the entire flight; x = x₀ + v₀ₓt. |
| What kind of motion is happening vertically? | Constant acceleration, exactly like 1-D free fall: a = -g = -9.8 m/s². y = y₀ + v₀ᵧt − ½gt², and vᵧ = v₀ᵧ − gt. |
| What shape is the path (trajectory)? | A parabola — the result of combining constant horizontal velocity with constant vertical acceleration. |
| What are the range, time-of-flight, and max-height equations? | For a **level** launch and landing only: <br>• Time of flight: `t = 2v₀sinθ / g` <br>• Range: `R = v₀²sin(2θ) / g` <br>• Max height: `h = (v₀sinθ)² / (2g)` <br>These already have sinθ/cosθ built in — don't also try to decompose v₀ again inside them. |
| What's special about the trajectory's symmetry? | For a level launch/landing, the path is symmetric: time to rise = time to fall, the speed at a given height is the same going up and coming down, and landing speed = launch speed. |
| What's happening at the very top of the trajectory? | vᵧ = 0 momentarily — but vₓ is unchanged and nonzero. The projectile is *not* stopped; it's moving purely horizontally at that instant. This is the single most common trap in this unit (parallel to "acceleration ≠ 0 at the peak" in 1-D kinematics). |
| How do I handle a purely horizontal launch (falling off a table/cliff)? | v₀ᵧ = 0, so fall time depends ONLY on the drop height: `t = √(2h/g)`. Horizontal speed doesn't affect how long it takes to fall — it only affects how far it travels horizontally in that same time. |
| How does launch angle affect range? | On level ground, range is maximized at θ = 45°. Complementary angles (θ and 90°−θ, e.g. 30°/60°) give the SAME range but different times of flight and max heights — steeper angle = longer flight time and greater height, same range. |
| Common trap: are horizontal and vertical velocity added like plain numbers? | No — they're perpendicular vector components. Keep them separate in your equations (use vₓ and vᵧ independently); only combine them with the Pythagorean theorem (and arctangent for direction) if the problem actually asks for the resultant speed or direction. |

---

## Summary

Projectile motion is two independent 1-D motions happening at once: constant velocity horizontally (vₓ never changes) and constant acceleration vertically (a = -g throughout, exactly like free fall). Everything starts with decomposing v₀ into v₀ₓ = v₀cosθ and v₀ᵧ = v₀sinθ — skip that step and the rest of the problem falls apart. The two motions share only time, which is why the range, time-of-flight, and max-height shortcut formulas exist for level launches. The most common errors are believing horizontal velocity changes in flight, treating the peak as a moment where everything stops (only vᵧ = 0 there), and combining vₓ and vᵧ as scalars instead of independent vector components.
