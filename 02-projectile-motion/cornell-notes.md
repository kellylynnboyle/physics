# Cornell Notes — Unit 2: Projectile Motion

> **How to use:** Fill in the **Notes** column during class/reading, write **Cues** afterward,
> and summarize in your own words at the bottom.

| Cues / Questions | Notes |
|---|---|
| Why can horizontal and vertical motion be treated separately? | Gravity acts only vertically, so it never changes horizontal velocity. The two directions are independent — they just share the same elapsed time `t`. |
| How do you find the velocity components from speed and angle? | `vₓ = v₀ cos θ` (horizontal, constant for the whole flight). `v_y₀ = v₀ sin θ` (vertical, changes due to gravity). |
| What equation describes vertical velocity at any time? | `v_y = v₀ sin θ − gt` (using "up" as positive and `g = 9.8 m/s²`). |
| What equation describes vertical position at any time? | `y = y₀ + (v₀ sin θ)t − ½gt²` |
| What equation describes horizontal position at any time? | `x = x₀ + (v₀ cos θ)t` — no acceleration term, because `vₓ` is constant. |
| What's true at the very peak of the trajectory? | `v_y = 0`, but `vₓ` is unchanged and nonzero (unless launched straight up). Acceleration is still `-g`, even though velocity is momentarily all-horizontal. |
| Time of flight formula (level ground) | `t = 2v₀ sin θ / g`. Derived from `v_y = 0` occurring at half this time (symmetric up/down). |
| Max height formula | `h_max = (v₀ sin θ)² / (2g)` |
| Range formula (level ground only!) | `R = v₀² sin(2θ) / g`. **Only valid** when launch height = landing height — do NOT use this if launched from a cliff/table. |
| Why does 45° give the maximum range? | `sin(2θ)` is maximized (=1) when `2θ = 90°`, i.e., `θ = 45°`. Complementary angles (e.g., 30°/60°) give equal range but different heights and flight times. |
| How do you handle launching from a height (not level ground)? | Use the full quadratic `y = y₀ + (v₀ sin θ)t − ½gt²`, set `y = 0` (ground), and solve for `t` with the quadratic formula. Then use that `t` in the horizontal equation to get range. |

## Summary (write in your own words)

_________________________________________________________________________________
_________________________________________________________________________________
_________________________________________________________________________________

## Quick Reference

| Quantity | Formula | Valid when... |
|---|---|---|
| `vₓ` | `v₀ cos θ` | Always (constant the whole flight) |
| `v_y(t)` | `v₀ sin θ − gt` | Always |
| Time of flight | `2v₀ sin θ / g` | Launch height = landing height |
| Max height | `(v₀ sin θ)² / (2g)` | Always (measured above launch point) |
| Range | `v₀² sin(2θ) / g` | Launch height = landing height |

## Common Mistakes to Flag in Your Own Work

- [ ] Did I use the range formula for a projectile launched from a height (cliff/table)? (It doesn't apply — use the quadratic instead.)
- [ ] Did I assume `vₓ` changes during flight? (It doesn't — only `v_y` changes.)
- [ ] Did I say velocity is zero at the peak? (Only `v_y` is zero; `vₓ` is not, and the object keeps moving.)
- [ ] Did I use the correct sign convention consistently for up/down and forward/back?
- [ ] Did I mix up `sin` and `cos` when finding the horizontal vs. vertical component?
