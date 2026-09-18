# Cornell Notes — Projectile Motion

**Topic:** 2D Motion Under Gravity Alone
**Date:** ___________
**Name:** ___________

---

## Cues / Questions | Notes

| Cues / Questions | Notes |
|---|---|
| What is the single biggest idea in this unit? | Horizontal and vertical motion are **independent**. Gravity only ever acts vertically, so it never changes horizontal velocity. |
| How do I break v₀ into components? | `v₀ₓ = v₀ cos θ` and `v₀ᵧ = v₀ sin θ`, where θ is measured from the horizontal. |
| What happens to vₓ during flight? | Nothing — `vₓ` stays constant the whole flight (no horizontal acceleration, ignoring air resistance). |
| What happens to vᵧ during flight? | It behaves exactly like 1D free fall: `vᵧ = v₀ᵧ − gt`, changing continuously due to gravity. |
| What's true at the very top of the arc (apex)? | `vᵧ = 0` (momentarily). `vₓ` is unchanged from launch — it is **not** zero. |
| For a projectile launched *horizontally* off a cliff, what is v₀ᵧ? | `v₀ᵧ = 0`. It's `vₓ` that's nonzero at launch, and gravity starts acting on the vertical component immediately, even though it "looks" horizontal at t = 0. |
| How do I find time of flight? | From the **vertical** motion only. If launched and landing at the same height: `t = 2v₀ᵧ/g`. If launched from a height h with v₀ᵧ = 0: solve `h = ½gt²` for t. |
| How do I find range once I have time? | `Range = vₓ · t_total`. Time must come from the vertical analysis — a very common error is guessing time instead of calculating it from vertical motion. |
| How do I find max height? | Use vertical kinematics with `vᵧ = 0` at the top: `v₀ᵧ² = 2 g·h_max`, so `h_max = v₀ᵧ² / (2g)`. |
| Is the trajectory symmetric? | Only when launch height = landing height. Then time up = time down, and launch speed = landing speed (angle below horizontal at landing = angle above horizontal at launch). |

---

## Worked mini-example

A ball is launched at 20 m/s at 30° above horizontal from ground level.

1. `v₀ₓ = 20 cos30° = 17.3 m/s` (constant for entire flight)
2. `v₀ᵧ = 20 sin30° = 10.0 m/s`
3. Time of flight (same launch/landing height): `t = 2(10.0)/9.8 = 2.04 s`
4. Range: `Δx = vₓ · t = 17.3 × 2.04 = 35.3 m`
5. Max height: `h_max = (10.0)²/(2 × 9.8) = 5.1 m`

Notice `vₓ` was used **only** in step 4, and vertical quantities were used **only** to find time and height — the two components never mix inside a single equation.

---

## Summary

Projectile motion is two independent 1D motion problems happening at the
same time: constant velocity horizontally, free fall vertically. Every
projectile problem is solved by (1) splitting v₀ into components, (2)
solving the vertical problem first to get time (and/or max height), then
(3) plugging that time into the horizontal equation to get range. Keep a
strict mental wall between the horizontal and vertical columns of your
work — mixing `vₓ` into a vertical equation (or vice versa) is the most
common projectile-motion mistake.
