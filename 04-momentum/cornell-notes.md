# Topic 4: Momentum — Cornell Notes

## Learning Objectives
- Define momentum and impulse, and derive the impulse–momentum theorem.
- State the law of conservation of momentum and identify when it applies.
- Distinguish elastic, inelastic, and perfectly inelastic collisions.
- Solve one-dimensional collision problems using conservation of momentum.
- Explain how impulse relates force and time.

---

| Cues / Questions | Notes |
|---|---|
| What is **momentum**? | `p = mv` — a vector quantity, mass times velocity. Units: `kg·m/s`. Direction matters; momentum can be negative. |
| What is **impulse**? | `J = FΔt` — the product of a force and the time interval it acts over. Also a vector. Impulse causes a change in momentum. |
| What is the **impulse–momentum theorem**? | `J = Δp`, i.e., `FΔt = mΔv = mv_f − mv_i`. This is really just Newton's Second Law rearranged (`F = Δp/Δt`) and is especially useful when force isn't constant, or when force/time aren't directly known but momentum change is. |
| What is the **law of conservation of momentum**? | The total momentum of an **isolated system** (no net external force) is constant. `p_total,before = p_total,after`. This applies to the *system*, not to any one object within it — momentum can transfer between objects while the total stays fixed. |
| When does conservation of momentum **NOT strictly apply**? | When there's a significant net external force on the system — e.g., friction with the ground, or air resistance — momentum is only approximately conserved, or conserved only in directions with no external force (e.g., horizontal momentum during a collision that happens quickly, even with gravity acting vertically). |
| What is an **elastic collision**? | A collision where both momentum AND kinetic energy are conserved. Objects bounce off each other without permanent deformation or heat generation (idealized — e.g., billiard balls, approximately). |
| What is an **inelastic collision**? | Momentum is conserved, but kinetic energy is NOT — some KE converts to heat, sound, or deformation. Most real-world collisions are inelastic to some degree. |
| What is a **perfectly inelastic collision**? | The objects stick together after colliding and move with a common final velocity. Momentum is conserved; this is the case with maximum KE loss (for a given momentum). Solve with `m₁v₁ + m₂v₂ = (m₁+m₂)v_f`. |
| How do you set up a **general 1-D collision** problem? | Define a positive direction first. Write `m₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f`. Keep every velocity's sign consistent with your chosen positive direction — objects moving in the "negative" direction get negative velocities in the equation. |
| Does a **more massive object** always have more momentum? | No — momentum depends on both mass AND velocity. A fast-moving small object can have more momentum than a slow massive one. Compare `mv` directly, not mass alone. |
| How does **impulse explain safety features** like airbags and crumple zones? | For a given `Δp` (a person's momentum change in a crash is fixed by their mass and speed), increasing the collision TIME `Δt` decreases the average FORCE `F` needed, since `F = Δp/Δt`. Airbags and crumple zones extend the stopping time to reduce peak force. |

---

## Key Vocabulary
**Isolated system** (no net external force) · **Elastic / inelastic / perfectly inelastic collision** · **Impulse-momentum theorem** · **Center of mass** (the point that moves as if all mass and external force were concentrated there) · **Recoil** (momentum conservation applied to explosions/launches, e.g., a gun firing)

## Summary
Momentum offers a second lens on motion — one that stays conserved in
collisions even when forces are complicated or unknown, as long as the
system is isolated. The two biggest traps are (1) forgetting momentum
conservation requires an isolated system, and (2) assuming kinetic energy
is conserved right alongside momentum, when in fact only ELASTIC collisions
conserve both — inelastic collisions conserve momentum only.
