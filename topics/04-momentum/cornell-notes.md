# Cornell Notes: Momentum and Collisions

| Cues / Questions | Notes |
|---|---|
| What is momentum? | Momentum (p) is a vector quantity: "quantity of motion" = mass × velocity. Formula: **p = mv**. Units: kg·m/s. Direction = direction of velocity. |
| Is momentum a vector or scalar? | **Vector.** Sign/direction matters. A ball moving left has negative momentum if right is positive. Two equal masses moving toward each other can have momenta that cancel to zero total. |
| What is impulse? | Impulse (J) is the product of force and the time interval it acts over. Formula: **J = FΔt**. Units: N·s (equivalent to kg·m/s). |
| How do impulse and momentum connect? | Impulse-Momentum Theorem: **J = Δp = mΔv = m(v_f − v_i)**. The impulse an object receives equals its change in momentum. |
| How do you find impulse from a graph? | On a force-vs-time graph, **impulse = area under the curve**. Works even for non-constant (changing) forces. |
| What is the law of conservation of momentum? | In an **isolated system** (no net external force), total momentum before = total momentum after. **p₁ᵢ + p₂ᵢ = p₁f + p₂f** |
| Why is momentum conserved in collisions? | By Newton's 3rd law, the two colliding objects exert equal and opposite forces on each other for the same Δt, so their impulses cancel — the system's total momentum doesn't change. |
| What is an elastic collision? | A collision where **both momentum AND kinetic energy are conserved**. Objects bounce apart; no permanent deformation or heat loss. |
| What is an inelastic collision? | A collision where **momentum is conserved but kinetic energy is NOT**. Some KE converts to heat, sound, or deformation. |
| What is a perfectly inelastic collision? | A special inelastic case where the objects **stick together** and move with one shared final velocity. Formula: **m₁v₁ᵢ + m₂v₂ᵢ = (m₁ + m₂)v_f** |
| Is KE always conserved when momentum is? | **No!** Momentum is conserved in ALL isolated collisions (elastic or inelastic). KE conservation only happens in the special case of elastic collisions. This is the #1 mix-up to avoid. |
| How do you set up a 1D collision problem? | 1) Pick a positive direction. 2) Assign signed velocities to each object. 3) Write total p before = total p after. 4) Solve algebraically, watching signs carefully. |
| How does 2D momentum conservation work? | Momentum is conserved **separately** along the x-axis and y-axis. Solve Σpₓ (before) = Σpₓ (after) and Σp_y (before) = Σp_y (after) as two separate equations. |
| Why do airbags reduce injury? | Airbags don't change the impulse (Δp is fixed by the crash), but they **increase the stopping time (Δt)**. Since F = Δp/Δt, a longer Δt means a smaller average force F on the passenger. |

## Summary

Momentum (p = mv) is basically how hard it is to stop something — it depends on both mass and velocity, and because it's a vector, direction always matters, even in "simple" 1D problems. Impulse (J = FΔt) is what changes an object's momentum, and the impulse-momentum theorem (J = Δp) ties force and time directly to that change, which is why spreading out collision time (like airbags do) lowers the force even though the impulse stays the same. The biggest idea from this whole unit is that momentum is always conserved in an isolated system, no matter what kind of collision happens, but kinetic energy is only conserved in elastic collisions — inelastic and perfectly-inelastic collisions lose KE to heat, sound, or deformation even while momentum stays balanced. When solving problems, I need to pick a positive direction first and keep every velocity's sign consistent, or my "before" and "after" totals won't actually match up. For perfectly inelastic collisions, the objects stick together and move with one common final velocity, which makes the math simpler but still requires careful sign tracking. Overall, this unit is really about keeping momentum's vector nature and the elastic/inelastic KE distinction straight, since those are the two places I'm most likely to make mistakes.
