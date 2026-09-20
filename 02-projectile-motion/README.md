# Unit 2 — Projectile Motion

Projectile motion is 2D kinematics for objects launched into the air and
acted on only by gravity (no thrust, no air resistance in this unit's
model). The entire unit rests on one powerful idea: **horizontal and
vertical motion are completely independent of each other.**

## Key concepts to master

- **Independence of motion components** — horizontal velocity stays
  constant throughout the flight (no horizontal force, ignoring air
  resistance); vertical motion is ordinary free fall (`a = −g`).
- **Breaking initial velocity into components:**
  - `v₀ₓ = v₀ cos θ`
  - `v₀ᵧ = v₀ sin θ`
- **Time of flight is controlled by the vertical motion only** — once you
  know how long the object is in the air (from the vertical equations),
  that same time applies to the horizontal motion.
- **Horizontally launched projectiles** — `v₀ᵧ = 0` (not `v₀ₓ = 0`); the
  object still falls under gravity from the moment it's launched.
- **Maximum height** — occurs when `vᵧ = 0` (found using vertical
  kinematics only, ignoring `vₓ`).
- **Range** — horizontal distance traveled; `Δx = vₓ · t`, where `t` is the
  *total* time of flight.
- **Symmetric trajectory** — for a projectile launched and landing at the
  same height, time up = time down, and launch speed = landing speed
  (impact angle mirrors launch angle).

## Vocabulary checklist

projectile · trajectory · range · maximum height · time of flight ·
launch angle · component (horizontal/vertical) · symmetric trajectory ·
apex

## Learning objectives

By the end of this unit, students will be able to:

1. Decompose an initial velocity vector into horizontal and vertical components using trigonometry.
2. Explain why horizontal velocity is constant during flight while vertical velocity changes.
3. Solve for time of flight, maximum height, and range for projectiles launched at an angle, horizontally, and from an elevated platform.
4. Correctly set `v₀ᵧ = 0` (not `v₀ₓ = 0`) for horizontally launched projectiles.
5. Use the vertical motion, and only the vertical motion, to find time of flight — then apply that time to the horizontal equation.
6. Sketch and interpret a projectile's trajectory, including where velocity components are zero, maximum, or unchanged.

## Assessment criteria

| Skill | Meets expectations |
|---|---|
| Vector decomposition | Correctly finds v₀ₓ and v₀ᵧ from speed and angle in at least 4/5 problems |
| Independence of components | Explains in writing why horizontal velocity is unaffected by gravity |
| Time of flight | Solves for time using vertical-only equations, not a mix of both components |
| Horizontal launch cases | Correctly identifies v₀ᵧ = 0 for horizontal launches (not v₀ₓ = 0) |
| Range/height problems | Solves multi-step problems combining both components without sign errors |

## NGSS alignment

Like Kinematics, Projectile Motion has no standalone HS performance
expectation — it's the 2D extension of the same modeling skill (position,
velocity, acceleration as functions of time) that HS-PS2-1 requires
students to analyze. See [`NGSS-ALIGNMENT.md`](../NGSS-ALIGNMENT.md).

## Files in this unit

- [`cornell-notes.md`](cornell-notes.md) — Cornell-format notes for this unit
- [`quiz.html`](quiz.html) — interactive quiz built from the most commonly missed projectile-motion questions
- [`resources.md`](resources.md) — external resources, practice problems, real-world applications
