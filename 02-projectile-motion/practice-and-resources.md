# Topic 2: Projectile Motion — Practice, Resources & Applications

## Practice Problems

Use `g = 9.8 m/s²`. Show component breakdowns explicitly.

1. A ball is kicked horizontally off a `20 m` cliff at `12 m/s`. How far from the base of the cliff does it land, and what is its landing speed?
2. A projectile is launched at `30 m/s` at an angle of `40°` above the horizontal from level ground. Find its time of flight, maximum height, and range.
3. Two projectiles are launched from the same spot at the same speed, one at `25°` and one at `65°`. Without calculating, predict which has the greater range — then verify with the range equation.
4. A basketball is thrown from a height of `2 m` at `7 m/s` at `50°` above horizontal, and the hoop is `3 m` away at a height of `3.05 m`. Does it go in? (Hint: launch and landing heights differ — use the general quadratic approach.)
5. A stunt car launches horizontally off a ramp at `25 m/s` from a platform `10 m` high. How long is it airborne, and what is its horizontal distance traveled? What is its velocity vector (magnitude and direction) the instant before landing?
6. An arrow is shot at `45°` with a range of `180 m` on level ground. Find its initial speed.

### Answer Key
1. Fall time from `h=20m`: `t = √(2h/g) ≈ 2.02 s`; horizontal distance `x = 12 × 2.02 ≈ 24.2 m`; `vᵧ = gt ≈ 19.8 m/s`, so landing speed `= √(12² + 19.8²) ≈ 23.2 m/s`
2. `v₀ᵧ = 30 sin40° ≈ 19.3 m/s`, `v₀ₓ = 30 cos40° ≈ 23.0 m/s`; `T = 2(19.3)/9.8 ≈ 3.93 s`; `H = 19.3²/(2×9.8) ≈ 19.0 m`; `R = 23.0 × 3.93 ≈ 90.4 m` (or directly via `R = v₀²sin(2θ)/g`)
3. Equal ranges — 25° and 65° are complementary (sum to 90°), so `sin(2×25°) = sin(50°) = sin(2×65°) = sin(130°)`
4. `v₀ₓ = 7cos50° ≈ 4.50 m/s`, `v₀ᵧ = 7sin50° ≈ 5.36 m/s`. Time to reach `x=3m`: `t = 3/4.50 ≈ 0.667 s`. Height at that time: `y = 2 + 5.36(0.667) − 4.9(0.667)² ≈ 3.35 m` — clears the 3.05 m rim, so yes, it goes in (assuming trajectory height matches, this is a simplified check ignoring ball size).
5. `t = √(2×10/9.8) ≈ 1.43 s`; `x = 25 × 1.43 ≈ 35.7 m`; `vᵧ = 9.8 × 1.43 ≈ 14.0 m/s` downward; landing speed `= √(25² + 14²) ≈ 28.6 m/s`, angle below horizontal `= arctan(14/25) ≈ 29.3°`
6. `R = v₀²sin(90°)/g = v₀²/g → v₀ = √(Rg) = √(180 × 9.8) ≈ 42.0 m/s`

---

## Learning Resources
- **PhET Interactive Simulations** — *Projectile Motion* sim: adjust launch angle/speed/height and directly see the independence of horizontal and vertical motion, with a trace of the parabola.
- **Khan Academy** — [Two-dimensional motion](https://www.khanacademy.org/science/physics/two-dimensional-motion) — component-based approach with worked examples.
- **The Physics Classroom** — [Projectile Motion tutorial](https://www.physicsclassroom.com/class/vectors) — strong conceptual treatment of the independence principle.
- **NASA eClips / Kennedy Space Center resources** — real launch-trajectory data for extending the unit.

## Real-World Applications
- **Sports**: basketball free throws, soccer corner kicks, and the optimal launch angle for shot put (usually slightly under 45° because release height matters).
- **Water fountains and sprinklers**: nozzle angle determines spray pattern using the exact same equations.
- **Search and rescue / cargo drops**: calculating where to release supplies from a moving aircraft so they land on target (horizontal velocity of the plane becomes the projectile's `v₀ₓ`).
- **Artillery and ballistics**: historically one of the first applied uses of projectile motion mathematics (Galileo's original studies).
