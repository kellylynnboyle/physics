# Cornell Notes — Projectile Motion

**Topic:** Motion in Two Dimensions
**Date:** ______________          **Name:** ______________

| Cues / Questions | Notes |
|---|---|
| Why can I treat horizontal and vertical motion separately? | Gravity only acts vertically. There is no horizontal force (ignoring air resistance), so horizontal velocity is constant. The two directions share only **time**. |
| How do I break the initial velocity into components? | `vₓ = v·cos(θ)`, `v_y = v·sin(θ)`, where θ is measured from the horizontal. |
| What equation governs horizontal position? | `x = vₓ·t` (constant velocity — no acceleration term). |
| What equations govern vertical motion? | Same as 1D free fall: `v_y = v_y0 − gt`; `y = y0 + v_y0t − ½gt²`. |
| What's special about the top of the trajectory? | `v_y = 0` at the peak — but `vₓ` is unchanged, so the object is still moving horizontally. Total speed is at a minimum, not zero, at the top (unless launched straight up). |
| When can I use `t = 2v_y0/g` for time of flight? | Only when launch height = landing height (symmetric trajectory). If the object lands higher or lower than it launched, solve the vertical position equation for t directly (often a quadratic). |
| What does the range formula `R = v²sin(2θ)/g` tell me about angles? | Range is maximized at θ = 45°. Complementary angles (θ and 90°−θ) give the *same* range because `sin(2θ) = sin(2(90°−θ))`. |
| Common trap: horizontally-launched projectile off a cliff | Its fall time depends ONLY on the height and g — identical to simply dropping it. Horizontal launch speed changes *how far* it travels, not *how long* it falls. |

## Summary
Projectile motion is just two 1D kinematics problems (horizontal:
constant velocity; vertical: constant acceleration) running on the same
clock. The single biggest idea to internalize is the **independence of
the two axes** — nothing that happens horizontally changes the vertical
timeline, and vice versa. Most errors come from treating them as
connected (e.g., "a faster throw falls slower") or from applying the
symmetric time-of-flight shortcut to a problem where launch and landing
heights differ.
