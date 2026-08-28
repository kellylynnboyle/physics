# Cornell Notes — Projectile Motion

**Topic:** Motion in two dimensions under gravity alone
**Date:** ___________  **Name:** ___________

---

## Cue Column | Notes

| Cue Column (questions/keywords) | Notes |
|---|---|
| What is a **projectile**? | Any object moving through the air under gravity alone (no thrust, ignoring air resistance) — a thrown ball, a launched rocket after burnout, a dropped object. |
| Why do we split motion into **horizontal and vertical components**? | Because horizontal and vertical motion are **independent** of each other. Gravity only acts vertically, so it never affects horizontal velocity. Treat the problem as two separate 1D kinematics problems that share the same clock (same t). |
| How do you find the **horizontal (x) and vertical (y) components** of an initial velocity v₀ launched at angle θ? | v₀ₓ = v₀ cos θ (horizontal, constant throughout flight) v₀ᵧ = v₀ sin θ (vertical, changes due to gravity) |
| What acceleration applies to each direction? | Horizontal: aₓ = 0 (constant velocity). Vertical: aᵧ = −g = −9.8 m/s² (free fall). **Never apply g to the horizontal component.** |
| What equations describe the **horizontal motion**? | x = v₀ₓ · t (constant velocity — no acceleration term needed) |
| What equations describe the **vertical motion**? | vᵧ = v₀ᵧ − gt; y = v₀ᵧt − ½gt²; vᵧ² = v₀ᵧ² − 2gΔy — same free-fall equations as Kinematics, just relabeled |
| How do you find **time of flight** for a level launch/landing (same height)? | t = 2v₀ᵧ / g (time up equals time down when launch and landing heights match). For launches from a height, solve the vertical position equation for t using the quadratic formula instead. |
| How do you find **maximum height**? | At the peak, vᵧ = 0. Use vᵧ² = v₀ᵧ² − 2gΔy → h_max = v₀ᵧ² / (2g) |
| How do you find **range** (horizontal distance) for a level launch? | R = v₀ₓ · t_flight, or the shortcut formula R = (v₀² sin 2θ) / g — only valid when launch and landing heights are equal. |
| What launch angle gives **maximum range** on level ground? | 45°. Complementary angles (e.g., 30° and 60°) give the *same* range but different flight times and max heights. |
| Common trap: what happens if you use the **same equation for both axes**? | You'll get a wrong answer instantly — mixing g into the horizontal equation, or using cos θ where you needed sin θ, are the two most common errors. Always label every quantity with a subscript (x or y) as you write it down. |

---

## Summary

Projectile motion is two independent 1D kinematics problems happening at once, linked only by a shared time variable. Break the initial velocity into horizontal (v₀ₓ = v₀cos θ, constant, no acceleration) and vertical (v₀ᵧ = v₀sin θ, accelerating at −g) components immediately, solve each axis with the tools from Kinematics, and only recombine them (e.g., for total speed or direction) at the very end if asked. The most common errors come from cross-contaminating the axes — applying gravity horizontally, or using the wrong trig function for a component.
