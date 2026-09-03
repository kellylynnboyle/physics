# Cornell Notes — Momentum

**Topic:** Momentum, impulse, and collisions | **Date:** ___________ | **Name:** ___________

---

| Cues / Questions | Notes |
|---|---|
| What is momentum? | `p = mv` — mass times velocity. A vector, pointing in the same direction as velocity. Units: kg·m/s. A heavier or faster object has more momentum. |
| What is impulse? | `J = FΔt` — force multiplied by the time interval it acts over. A vector, in the direction of the net force. Units: N·s (equivalent to kg·m/s). |
| What is the impulse-momentum theorem? | `J = FΔt = Δp = mΔv`. Impulse delivered to an object equals its change in momentum. This links force and time to a resulting change in velocity/momentum. |
| What does "conservation of momentum" mean? | For an **isolated (closed) system** — no net external force — total momentum before an interaction equals total momentum after: `Σp_before = Σp_after`. It applies to the whole system, not to any single object by itself. |
| What counts as an "isolated system"? | One where the only significant forces are internal (between the colliding objects themselves) — e.g., no friction, no outside push. If an external force (like friction) acts during the collision, momentum of that system is not strictly conserved unless you account for that external impulse. |
| Elastic vs. inelastic vs. perfectly inelastic — what's conserved in each? | **Elastic:** momentum AND kinetic energy both conserved (objects bounce apart, no lasting deformation). **Inelastic:** momentum conserved, kinetic energy NOT conserved (some KE → heat/sound/deformation) — objects may or may not stick together. **Perfectly inelastic:** a special case of inelastic where objects stick together and share one final velocity: `v_f = (m₁v₁ᵢ + m₂v₂ᵢ)/(m₁+m₂)`. This is the maximum possible KE loss. |
| Why do airbags/padding reduce injury? | From `F = Δp/Δt`: for a fixed change in momentum (Δp), stretching out the collision/stopping time (Δt) reduces the average force (F) needed to produce that Δp. Airbags, crumple zones, and padded mats all work by extending Δt. |
| How do I handle the vector nature of momentum in 1D? | Pick one positive direction before starting. Objects moving in that direction get positive velocity/momentum; objects moving the opposite way get negative velocity/momentum. Add momenta algebraically (with sign), not by magnitude. |
| How do I set up a 1D collision problem? | 1) Choose + direction. 2) Write each object's momentum before collision with correct sign. 3) Sum them = total p_before. 4) Set total p_before = total p_after (unknowns as variables). 5) Solve. For perfectly inelastic, combine masses and use one final velocity. |
| Common trap: does a bigger force always mean a bigger impulse? | No — impulse is `FΔt`, so a small force over a long time can equal (or exceed) the impulse from a large force applied briefly. Time matters as much as force. |

---

## Summary

Momentum (`p = mv`) is a vector quantity that combines mass and velocity, and impulse (`J = FΔt`) is what changes it, per the impulse-momentum theorem (`J = Δp`). In any isolated system — one free of net external force — total momentum is conserved before and after a collision, though the total kinetic energy is conserved only in elastic collisions; inelastic collisions lose kinetic energy, and perfectly inelastic collisions (objects sticking together) lose the maximum amount while momentum is still conserved. Because F = Δp/Δt, extending contact time lowers the force for a given change in momentum — the principle behind airbags, crumple zones, and padded landings. The most common errors come from treating momentum as a scalar (dropping signs for objects moving in opposite directions), assuming any single object's momentum is conserved on its own, confusing "inelastic" with "perfectly inelastic," and assuming kinetic energy is conserved in every collision.
