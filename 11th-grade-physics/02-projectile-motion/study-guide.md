# Projectile Motion — Quick-Reference Study Guide

## Definitions

- **Projectile** — an object launched into the air, moving under gravity alone after launch (no thrust, ignoring air resistance)
- **Trajectory** — the curved (parabolic) path of a projectile
- **Range** — horizontal distance traveled before landing at the same height it was launched from
- **Vₓ** — horizontal velocity component; constant throughout flight (no horizontal acceleration)
- **Vy** — vertical velocity component; changes due to gravity (a = -g)

## Formulas

**Component decomposition:** Vₓ = V₀cos(θ), Vy = V₀sin(θ)

**Horizontal motion (constant velocity):** x = Vₓ · t

**Vertical motion (free fall, same kinematic equations applied to y only):**
- Vy = Vy₀ - gt
- y = Vy₀t - ½gt²
- Vy² = Vy₀² - 2gΔy

**Launched horizontally from height h (Vy₀ = 0):**
- Time to fall: t = √(2h/g)
- Range: x = V₀ · t

**Launched at angle θ, lands at same height:**
- Time of flight: t = (2V₀sin θ)/g
- Max height: H = (V₀sin θ)²/(2g)
- Range: R = (V₀²sin(2θ))/g

## Quick-Reference Table

| Situation | Key fact |
|---|---|
| Horizontal launch off a height | Vy₀ = 0; fall time depends only on height, not launch speed |
| Angled launch, level ground | Time up = time down; max range at θ = 45° |
| Two complementary angles (e.g. 30°/60°) | Same range, different max height and flight time |
| At the peak of any trajectory | Vy = 0, Vₓ = unchanged from launch |
| Mass of the projectile | Irrelevant to trajectory shape (ignoring air resistance) |

## Practice Problems

1. A ball rolls off a table at 2.5 m/s. The table is 0.9 m tall. How long is it airborne, and how far from the table does it land?
2. A soccer ball is kicked at 16 m/s at 35° above horizontal (sin35°≈0.57, cos35°≈0.82). Find time of flight, max height, and range.
3. An arrow is shot at 40 m/s to maximize range on level ground. What angle should be used, and what's the range?
4. A stone is thrown horizontally at 12 m/s from a 25 m cliff. Find its landing speed (magnitude).
5. Two projectiles launched at the same speed, one at 25° and one at 65°. Compare their ranges and explain why.
6. A ball is launched at 30 m/s and lands 4 s later at its starting height. What launch angle was used?

<details><summary>Show Answers</summary>

1. t=√(2×0.9/9.8)≈0.43 s; x=2.5×0.43≈1.07 m
2. Vy₀=16(0.57)=9.1, Vₓ=16(0.82)=13.1. t=(2×9.1)/9.8≈1.86 s. H=9.1²/(2×9.8)≈4.23 m. R=13.1×1.86≈24.4 m
3. 45°; R=V₀²/g=1600/9.8≈163 m
4. Fall time t=√(2×25/9.8)≈2.26 s. Vy=gt≈22.1 m/s. Speed=√(12²+22.1²)≈25.2 m/s
5. Equal ranges — 25° and 65° are complementary (sum to 90°), so sin(2θ) is the same for both
6. Time up = time down = 2 s each. Vy₀=g(2)=19.6 m/s. sinθ=19.6/30≈0.653 → θ≈41°
</details>
