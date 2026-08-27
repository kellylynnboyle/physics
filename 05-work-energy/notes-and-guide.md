# Unit 5: Work & Energy

Work and energy give you a second, often faster, toolkit for solving motion
problems — one that trades vectors and time for scalars and bookkeeping.
Instead of tracking forces moment-to-moment (Unit 3), you track how much
energy is transferred into or out of a system as it moves between two
states. Get comfortable with what counts as "work," what conserves energy
and what doesn't, and this unit will save you enormous amounts of algebra
on later problems (springs, pendulums, collisions with energy loss).

## Learning Objectives

By the end of this unit, students should be able to:

- Calculate work done by a constant force using `W = F·d·cos(θ)`, including
  cases where work is zero.
- Apply the work-energy theorem to relate net work to change in kinetic
  energy.
- Distinguish kinetic energy (scalar, always ≥ 0) from momentum (vector).
- Explain why gravitational potential energy depends on a chosen reference
  point, and why only *changes* in PE matter physically.
- State the condition under which mechanical energy is conserved, and
  explain what happens to "lost" mechanical energy when it isn't.
- Distinguish power from work/energy and calculate power as `P = W/t` or
  `P = F·v`.
- Calculate elastic potential energy stored in an ideal spring.

---

## Cornell Notes

### Key Concepts / Cues → Notes

| Cue / Question | Notes |
|---|---|
| What is the formula for **work**? | `W = F·d·cos(θ)`, where θ is the angle between the force vector and the displacement vector. Work is a **scalar** (no direction), measured in joules (`J = N·m`). |
| When is work **zero**? | Two big cases: (1) the force is **perpendicular** to the displacement (`θ = 90°`, `cos 90° = 0`) — e.g., carrying a bag horizontally while gravity pulls straight down, a satellite in circular orbit where gravity is centripetal, or the normal force on a surface, which never does work on an object sliding along it. (2) There is **no displacement at all**, even if a force is applied — e.g., pushing as hard as you want on an immovable wall does zero work because `d = 0`. |
| What is the **work-energy theorem**? | `W_net = ΔKE = KE_f − KE_i`. The *net* (total) work done by *all* forces on an object equals its change in kinetic energy. This lets you skip finding acceleration entirely in many problems — just track energy in and energy out. |
| What is **kinetic energy**? | `KE = ½mv²`. It is a **scalar**, always **≥ 0** (mass and v² are both non-negative), and depends on speed, not direction. This is fundamentally different from momentum `p = mv`, which is a vector and can be negative — do not write "KE = mv," that is momentum's formula, not energy's. |
| What is **gravitational potential energy**, and why does the reference point matter? | `PE = mgh`, where `h` is height measured from a chosen reference level (a "datum") — the ground, a tabletop, the bottom of a hill, wherever you decide `h = 0`. The *absolute* value of PE is meaningless and depends entirely on that choice; only **ΔPE**, the change in PE between two points, is physically real and independent of where you put the datum. |
| When is **mechanical energy conserved**? | `KE + PE = constant` **only** when the *net* work done by non-conservative forces (friction, air resistance, an applied push/pull, etc.) is zero. If friction or drag is present and doing negative work, mechanical energy is **not** conserved — some of it converts to heat/sound. **Total** energy (mechanical + thermal + etc.) is still conserved; it's only the mechanical portion that can decrease. |
| What is **power**? | `P = W/t` (rate of doing work) or equivalently `P = F·v` for a constant force along the direction of motion. Units: watts (`W = J/s`). Power is **not** the same thing as work or energy — doing the *same* amount of work in less time means *more power*, not more energy transferred. Two motors that lift the same box to the same height have done the same work, even if one takes twice as long (and therefore has half the power). |
| What is **elastic potential energy**? | `PE_spring = ½kx²`, where `k` is the spring constant (N/m) and `x` is the displacement from the spring's natural (unstretched/uncompressed) length. Like KE, it is a scalar and always ≥ 0 — it doesn't matter whether the spring is stretched or compressed, only how far from equilibrium it is. |

### Summary (write in your own words after class)

_Work and energy replace force-and-time bookkeeping with a before/after
scalar accounting system. Work is force times displacement times the
cosine of the angle between them — and it vanishes whenever the force has
no component along the motion, or when there's no motion at all. The
work-energy theorem ties net work directly to the change in kinetic
energy, while potential energy (gravitational or elastic) stores energy
based on position or deformation rather than motion. Mechanical energy is
conserved only in the idealized case where friction and other
non-conservative forces do no net work — real systems leak mechanical
energy to heat, even though total energy is always conserved. Power
measures how fast energy is transferred or work is done, and it is easy
to confuse with the energy itself — don't._

---

## Commonly Missed Concepts (build your quiz around these)

1. **"If I push on something and it doesn't move, I'm still doing work on
   it."** False — work requires displacement. `d = 0` means `W = 0`, no
   matter how large the force is (e.g., pushing on an immovable wall).
2. **"A force perpendicular to motion still does some work."** False —
   `cos(90°) = 0`. Carrying a bag at constant height while walking does
   zero work against gravity because the force (gravity, downward) is
   perpendicular to the displacement (horizontal). The normal force never
   does work on an object sliding along a surface for the same reason.
3. **Writing kinetic energy as `KE = mv`** instead of `KE = ½mv²`, or
   otherwise confusing the (vector) momentum formula with the (scalar)
   kinetic energy formula.
4. **"Potential energy has one true, absolute value."** False — PE depends
   entirely on the arbitrary choice of reference height. Two students can
   pick different `h = 0` points for the same problem and get different
   PE numbers, but they will *always* agree on `ΔPE`, and therefore on
   any physically meaningful answer (like final speed).
5. **"Mechanical energy is always conserved."** False — it's only
   conserved when non-conservative forces (friction, air resistance,
   applied pushes) do zero net work. Students often apply `KE_i + PE_i =
   KE_f + PE_f` blindly on problems that explicitly include friction,
   getting an answer that ignores the energy lost to heat.
6. **"If mechanical energy isn't conserved, energy is being destroyed."**
   False — total energy is always conserved; mechanical energy just
   converts into other forms (mostly heat and sound via friction) that
   aren't being tracked in `KE + PE`.
7. **Confusing power with work or energy.** "More powerful" does not mean
   "more energy used" — it means the *same or different* energy is
   delivered *faster*. A weaker motor can do the same total work as a
   stronger one; it just takes longer and has lower power.
8. **Forgetting that kinetic energy and elastic potential energy are
   always non-negative**, then writing a negative value for either after
   a sign error elsewhere in a problem (usually from mishandling velocity
   or displacement signs before squaring).

---

## Practice Problems

1. A 20 kg box is pushed 8 m across a horizontal floor by a constant
   horizontal force of 50 N. Find the work done by the applied force.
   *(Answer: W = 50 N × 8 m × cos(0°) = 400 J)*
2. A waiter carries a 3 kg tray at a constant height 15 m across a room at
   constant velocity. How much work does the waiter's *upward* supporting
   force do on the tray against gravity during this walk? Explain your
   reasoning.
   *(Answer: W = 0 J. The displacement is horizontal while the supporting
   force (and gravity) are vertical — force and displacement are
   perpendicular, so `cos(90°) = 0` regardless of how heavy the tray is.)*
3. A 1200 kg car traveling at 20 m/s brakes to a stop over 40 m. Use the
   work-energy theorem to find the net braking force (assumed constant).
   *(Answer: `W_net = ΔKE = 0 − ½(1200)(20²) = −240{,}000 J`. Since
   `W = F·d`, `F = −240{,}000 J / 40 m = −6000 N` — the negative sign
   shows the force opposes the motion.)*
4. A 2 kg ball is released from rest at the top of a frictionless ramp 5 m
   above the ground. Using energy conservation, find its speed at the
   bottom. (Use `g = 9.8 m/s²`.)
   *(Answer: `mgh = ½mv²` → `v = √(2gh) = √(2 × 9.8 × 5) ≈ 9.9 m/s`. Mass
   cancels — this works for any mass on a frictionless ramp.)*
5. A spring with spring constant `k = 200 N/m` is compressed 0.15 m from
   its natural length. (a) Find the elastic potential energy stored. (b)
   If a 0.5 kg block is launched from rest by this spring on a
   frictionless surface, find its launch speed.
   *(Answer: (a) `PE = ½(200)(0.15²) = 2.25 J`. (b) All spring PE converts
   to KE: `2.25 = ½(0.5)v²` → `v ≈ 3.0 m/s`.)*

## Real-World Applications

- **Regenerative braking in electric/hybrid cars**: converts the car's
  kinetic energy back into stored electrical energy via the work-energy
  theorem run in reverse, instead of dumping it as brake-pad heat.
- **Roller coasters**: designers use conservation of mechanical energy
  (minus friction/air-resistance losses) to predict speed at every point
  of the track from the height of the first hill alone.
- **Bow-and-arrow / pole vaulting**: elastic potential energy stored in a
  bent bow or flexed pole converts into kinetic energy of the arrow or
  vaulter.
- **Rating light bulbs and appliances in watts**: power ratings tell you
  the *rate* of energy use, not the total energy — that's why a "60 W"
  bulb left on for hours uses far more energy than a "100 W" bulb left on
  for a few minutes.
- **Crash test engineering**: crumple zones increase the *distance* over
  which a car's kinetic energy is absorbed, reducing the average force
  (and injury risk) for the same amount of work done in stopping the car.

## Learning Resources

- **Video:** Khan Academy — "Work and Energy" unit (work, kinetic energy,
  potential energy, conservation of energy)
- **Video:** The Organic Chemistry Tutor — "Work, Energy, and Power"
  playlist
- **Simulation:** PhET *Energy Skate Park* — visualize KE/PE/thermal
  energy trading off in real time on an adjustable track
- **Simulation:** PhET *Masses and Springs* — explore elastic potential
  energy and spring constants interactively
- **Reading:** OpenStax *University Physics Vol. 1*, Ch. 7 (Work and
  Kinetic Energy) and Ch. 8 (Potential Energy and Conservation of Energy)
  — free PDF/online textbook
- **Practice bank:** The Physics Classroom — "Work, Energy, and Power"
  concept builders and problem sets

## Assessment Criteria (instructor rubric)

| Criterion | Meets expectations |
|---|---|
| Work calculation | Correctly applies `W = F·d·cos(θ)`, including identifying when work is zero due to perpendicularity or zero displacement |
| Work-energy theorem | Uses `W_net = ΔKE` correctly to relate net work and kinetic energy change, without confusing it with individual forces' work |
| Scalar/vector distinction | Correctly identifies KE and PE as scalars (≥ 0) and does not confuse `½mv²` with the momentum formula `mv` |
| Reference point reasoning | Explains that absolute PE depends on the chosen datum, while ΔPE does not, and uses this correctly across a problem |
| Conservation reasoning | Correctly identifies whether mechanical energy is conserved based on presence/absence of non-conservative forces doing net work |
| Power vs. energy distinction | Correctly distinguishes power (rate) from work/energy (total amount) in both calculations and conceptual explanations |
| Quiz mastery | Scores ≥ 80% on `quiz.html`, including correct explanations for at least 2 previously-missed questions on retake |
