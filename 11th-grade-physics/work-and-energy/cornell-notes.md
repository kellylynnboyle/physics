# Cornell Notes: Work and Energy

**Topic:** Work, Energy, Power, and Conservation of Mechanical Energy
**Course:** 11th Grade Physics

---

## Notes

| Cues / Questions | Notes |
|---|---|
| What is the formula for work? | **W = Fd cos θ**, where F is the applied force (N), d is the displacement (m), and θ is the angle *between the force vector and the displacement vector*. Work is measured in **joules (J)**, where 1 J = 1 N·m. |
| Why does the angle θ matter so much? | The angle determines what *fraction* of the force actually acts along the direction of motion. Only the component of force parallel to displacement does work. If θ = 0° (force and displacement in the same direction), cos θ = 1, and work is maximum. If θ = 90° (force perpendicular to displacement), cos θ = 0, and **work is zero** — no matter how large the force is. |
| Give an example of zero work despite a force being applied. | Carrying a bag of groceries horizontally at constant height: the force you exert is *vertical* (supporting the bag's weight), but the displacement is *horizontal*. θ = 90°, so W = 0. Similarly, holding a book stationary does zero work because displacement d = 0. |
| When is work negative? | When the force (or its relevant component) points *opposite* to the displacement — θ is between 90° and 180°. Examples: friction acting on a sliding object (friction always opposes motion), or gravity acting on an object that is moving *upward* (gravity points down, object moves up). Negative work *removes* energy from the object. |
| What is the work-energy theorem? | The **net work** done on an object equals its **change in kinetic energy**: **W_net = ΔKE = KE_f − KE_i**. This lets you find a final speed or stopping distance without needing to know acceleration or time directly. |
| What is kinetic energy? | **KE = ½mv²** — energy of motion, in joules. Note it depends on velocity *squared*, not velocity itself (unlike momentum, p = mv, which is linear in v). Doubling speed quadruples KE. |
| What is gravitational potential energy? | **PE_grav = mgh**, where h is height above a *chosen reference point* (often the ground, but it can be anywhere). |
| Does the choice of reference point matter? | The *absolute value* of PE is arbitrary and depends on where you set h = 0. But the **change in PE (ΔPE)** between two points is physically real and does NOT depend on the reference point — because whatever constant you add to h at one point, you add at the other, and it cancels out in the subtraction. This is what actually matters for energy problems. |
| What is elastic potential energy? | **PE_elastic = ½kx²**, where k is the spring constant (N/m) and x is the displacement from the spring's natural (relaxed) length. Note: PE_elastic scales with **x², not x** — doubling the stretch/compression quadruples the stored energy, not doubles it. |
| What is the conservation of mechanical energy equation? | **KE_i + PE_i = KE_f + PE_f** (total mechanical energy ME = KE + PE stays constant between two points). |
| When does conservation of mechanical energy apply? | Only when **no non-conservative forces** act — i.e., no friction, no air resistance, no applied forces adding/removing energy. Gravity and spring forces are "conservative," so systems with only those forces conserve ME. |
| What happens when friction/air resistance IS present? | Mechanical energy is **NOT conserved** — some energy converts to **heat** (thermal energy) via friction, and possibly sound. The corrected equation becomes: **KE_i + PE_i = KE_f + PE_f + E_lost**, where E_lost is the energy converted to non-mechanical forms. Total energy (mechanical + thermal) is still conserved — energy is never destroyed, just transformed. |
| What is power? | **P = W/t** (work done per unit time) — also expressible as **P = Fv** for a constant force at constant velocity. Power is measured in **watts (W)**, where 1 W = 1 J/s. |
| How is power different from work/energy? | Work and energy describe an *amount* — how much energy was transferred or stored. Power describes a *rate* — how quickly that transfer happens. Two motors can do the same amount of work, but the one with higher power does it faster. Watts (power) ≠ Joules (energy) ≠ Newton-meters (which numerically equal joules for work, but describe a different quantity than power). |
| What is efficiency? | Efficiency = (useful energy output / total energy input) × 100%. Always less than 100% for real machines because some energy is always lost to friction, heat, sound, etc. |

---

## Worked Example: Block Sliding Down a Ramp (with and without friction)

**Setup:** A 4.0 kg block starts from rest at the top of a ramp 5.0 m high. Find the block's speed at the bottom (a) assuming the ramp is frictionless, and (b) if friction does −20 J of work on the block as it slides down.

**Part (a): Frictionless (conservation of mechanical energy applies)**

1. Identify initial and final energy states:
   - At top: KE_i = 0 (starts from rest), PE_i = mgh
   - At bottom: KE_f = ½mv², PE_f = 0 (reference point at the bottom)
2. Apply conservation of mechanical energy: KE_i + PE_i = KE_f + PE_f
   - 0 + mgh = ½mv² + 0
3. Solve for v (mass cancels):
   - gh = ½v² → v = √(2gh)
   - v = √(2 × 9.8 m/s² × 5.0 m) = √98 = **≈ 9.9 m/s**

*Key insight: mass canceled out — on a frictionless ramp, the speed at the bottom depends only on the height dropped, not on the mass or the shape/path of the ramp (path independence when only conservative forces act).*

**Part (b): With friction (mechanical energy NOT conserved)**

1. Energy at top: PE_i = mgh = (4.0 kg)(9.8 m/s²)(5.0 m) = 196 J. KE_i = 0.
2. Account for energy lost to friction: KE_f = PE_i + W_friction (W_friction is negative)
   - KE_f = 196 J + (−20 J) = 176 J
3. Solve for v:
   - ½mv² = 176 J → v² = (2 × 176 J)/4.0 kg = 88 → v = **≈ 9.4 m/s**

*Key insight: the block is slower than in the frictionless case (9.4 m/s vs. 9.9 m/s) because 20 J of its mechanical energy converted to heat instead of staying as kinetic energy. Total energy is still conserved — it just changed form.*

---

## Summary

Work (W = Fd cos θ) is the mechanism by which forces transfer energy to or from an object, and the angle between force and displacement determines whether that work is positive, negative, or zero — a force perpendicular to motion, or applied with zero displacement, does no work at all. The work-energy theorem (W_net = ΔKE) ties work directly to changes in kinetic energy (KE = ½mv²), while gravitational (PE = mgh) and elastic (PE = ½kx²) potential energy describe stored energy tied to position or deformation — note PE = mgh depends on an arbitrary reference height, but ΔPE does not. When only conservative forces act, total mechanical energy (KE + PE) is conserved, letting us solve motion problems using energy states alone rather than tracking forces through time; when friction or air resistance is present, mechanical energy is not conserved, and the "missing" energy converts to heat. Power (P = W/t = Fv, measured in watts) describes how fast energy transfers occur, distinct from the amount of work or energy itself. Together, these tools — especially conservation of energy — form one of the most powerful and widely reused problem-solving strategies in all of physics.
