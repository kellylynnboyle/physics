# Unit 5 — Work & Energy

The energy approach to mechanics: instead of tracking forces moment-to-moment, track how energy
transforms between forms as a system evolves. Often faster than force methods for complex paths.

## Key Concepts

- **Work** — `W = F·d·cos θ`, where θ is the angle between the force and displacement. Work is a
  scalar; it can be positive, negative, or zero.
  - Zero work: force perpendicular to displacement (e.g., carrying a bag while walking
    horizontally — gravity does no work) or zero displacement.
  - Negative work: force opposes displacement (e.g., friction, or gravity on a rising object).
- **Kinetic energy** — `KE = ½mv²`, energy of motion.
- **Work-energy theorem** — the net work done on an object equals its change in kinetic energy:
  `W_net = ΔKE`.
- **Gravitational potential energy** — `PE_grav = mgh`, energy stored due to position in a
  gravitational field (relative to a chosen reference height).
- **Elastic potential energy** — `PE_elastic = ½kx²`, energy stored in a stretched/compressed
  spring (Hooke's Law context).
- **Conservative vs. non-conservative forces** — conservative forces (gravity, spring force)
  store/release energy without loss, and work done is path-independent; non-conservative forces
  (friction, air resistance) remove mechanical energy from the system, converting it to heat/sound.
- **Conservation of mechanical energy** — `KE₁ + PE₁ = KE₂ + PE₂` *only* when no non-conservative
  forces act (or their work is explicitly included as an energy loss).
- **Power** — `P = W/t` (or `P = Fv`), the rate of doing work/transferring energy, measured in
  watts.

## Learning Objectives

By the end of this unit, students will be able to:
1. Calculate work done by a force, correctly accounting for the angle between force and
   displacement, including cases of zero or negative work.
2. Apply the work-energy theorem to relate net work to change in kinetic energy.
3. Apply conservation of mechanical energy to solve problems (roller coasters, pendulums, ramps)
   when only conservative forces act.
4. Correctly incorporate friction/non-conservative forces as an energy loss term when they act.
5. Distinguish work, energy, and power, and calculate power for a given task.

## Assessment Criteria

| Level | What it looks like |
|---|---|
| Exceeds | Solves multi-stage energy problems combining conservative and non-conservative forces (e.g., a block that slides, launches off a ramp, and lands), explains energy transformations qualitatively and quantitatively |
| Meets | Applies work-energy theorem and conservation of mechanical energy independently to standard problems without friction |
| Approaching | Sets up an energy equation but forgets to account for friction, or confuses work/power/energy units |
| Beginning | Can state formulas for KE, PE, and work but cannot yet apply conservation of energy to solve a problem |

## Learning Resources

- PhET simulation: [Energy Skate Park](https://phet.colorado.edu/en/simulations/energy-skate-park)
- Khan Academy: "Work and energy" unit
- The Physics Classroom: [Work, Energy, and Power](https://www.physicsclassroom.com/class/energy) tutorial
- OpenStax *Physics*, Chapter "Work, Energy, and Energy Resources"

## Practice Problems

1. A `50 N` force pushes a `10 kg` box `4 m` across a frictionless floor, at an angle of `20°`
   above horizontal. Find the work done and the box's final speed (starting from rest).
2. A `2 kg` ball is dropped from `10 m`. Use energy conservation to find its speed just before
   hitting the ground (no air resistance).
3. A `1500 kg` roller coaster car starts at rest at the top of a `40 m` hill. Ignoring friction,
   find its speed at the bottom, and its speed at a point `15 m` above the bottom.
4. A `0.5 kg` block slides `2 m` across a floor with friction coefficient `0.25` before stopping.
   Find the energy lost to friction, and use it to find the block's initial speed.
5. A spring with `k = 200 N/m` is compressed `0.15 m` and used to launch a `0.3 kg` ball. Find the
   ball's launch speed (assume all elastic PE converts to KE).
6. A motor lifts a `20 kg` load `5 m` in `10 s` at constant speed. Find the work done and the
   power output of the motor.

## Real-World Applications

- **Roller coasters** — designers use energy conservation (plus friction losses) to ensure cars
  have enough speed to complete each hill and loop.
- **Regenerative braking** (hybrid/electric vehicles) — converts kinetic energy back into stored
  (electrical/chemical) energy instead of losing it all to heat via friction brakes.
- **Hydroelectric power** — gravitational PE of stored water converts to kinetic energy, then
  electrical energy, through turbines.
- **Human power output** — comparing the power of a sprinter, a cyclist climbing a hill, and a
  light bulb in watts makes abstract energy concepts concrete.

## Most Often Missed (Quiz Focus)

See `quiz-app/index.html` → **Work & Energy** tab. Targets these recurring misconceptions:
- Believing work is done whenever a force is applied, even when displacement is zero or the force
  is perpendicular to motion (e.g., carrying a box at constant height).
- Treating mechanical energy as conserved even when friction/air resistance is clearly present.
- Confusing work (`J`), power (`W`), and force (`N`) — and their units.
- Sign errors: forgetting that work is negative when a force opposes the direction of motion
  (e.g., friction, or gravity while an object rises).
- Misapplying the kinetic energy formula (forgetting the `½`, or confusing `v` with `v²`).
