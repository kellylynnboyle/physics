# Momentum and Collisions

## Overview

Every collision you will ever witness — two cars meeting at an intersection, a bat meeting a baseball, a rocket lifting off a launch pad — is governed by one of the most powerful ideas in physics: the conservation of momentum. Unlike energy, which can change form in complicated ways, momentum in an isolated system is conserved exactly, which makes it an extraordinarily reliable tool for predicting what happens when objects interact. This module builds the vector reasoning and problem-solving habits you need to analyze collisions, explosions, and impacts — skills used directly in vehicle safety engineering, sports biomechanics, and spacecraft design.

## Key Concepts to Master

- **Momentum as a vector**: p = mv, measured in kg·m/s, with direction always specified (sign in 1D, components in 2D).
- **Impulse and the impulse-momentum theorem**: J = FΔt = Δp; a net force applied over a time interval changes an object's momentum by exactly that impulse.
- **Conservation of momentum in isolated systems**: if no net external force acts on a system, the total momentum before an interaction equals the total momentum after — p_total,before = p_total,after.
- **Elastic vs. inelastic vs. perfectly inelastic collisions**: elastic collisions conserve both momentum and kinetic energy; inelastic collisions conserve momentum but lose some kinetic energy (usually to heat, sound, or deformation); perfectly inelastic collisions are the extreme case where the objects stick together and move with a common final velocity.
- **What IS and is NOT conserved in each collision type**: momentum is conserved in every isolated-system collision, full stop — elastic, inelastic, or perfectly inelastic. Kinetic energy is conserved ONLY in elastic collisions; in any inelastic collision, kinetic energy decreases even though momentum does not.
- **1D and 2D collision problem setup**: choosing a consistent positive direction (1D) or x/y axes (2D), writing momentum conservation component-by-component, and solving systematically for unknown velocities.
- **Center of mass motion**: the center of mass of an isolated system moves at constant velocity regardless of what the individual objects do during a collision or explosion.
- **Explosions and recoil**: an "explosion" is just a collision run in reverse — objects that start together and fly apart still must conserve total momentum, which is often zero if the system starts at rest.

## Learning Objectives

By the end of this module, students will be able to:

1. Calculate the momentum of an object given its mass and velocity, expressing the result as a vector with correct magnitude and direction.
2. Apply the impulse-momentum theorem (J = FΔt = Δp) to relate force, time, and change in momentum, including reading and interpreting force-vs-time graphs.
3. State and apply the law of conservation of momentum to solve for unknown velocities in one-dimensional two-object collision problems.
4. Extend conservation of momentum to two-dimensional collisions by resolving momentum into perpendicular (x and y) components.
5. Distinguish elastic, inelastic, and perfectly inelastic collisions, and correctly identify which quantities (momentum, kinetic energy) are conserved in each case.
6. Solve perfectly inelastic collision problems by combining masses and applying a single conservation-of-momentum equation.
7. Analyze recoil and explosion problems by recognizing that total initial momentum (often zero) must equal total final momentum.
8. Evaluate real-world safety technologies (crumple zones, airbags) using the impulse-momentum theorem to explain how increasing collision time reduces peak force.

## Assessment Criteria

| Criterion | Developing | Proficient | Mastery |
|---|---|---|---|
| **Momentum & impulse calculations** | Computes p = mv or J = FΔt with frequent sign or unit errors | Correctly calculates momentum and impulse in most problems, with minor sign slips | Consistently applies vector sign conventions correctly, including multi-step impulse problems |
| **Conservation of momentum setup** | Sets up conservation equations inconsistently or omits objects from the system | Correctly writes p_before = p_after for standard 1D problems | Confidently sets up and solves 1D and 2D conservation equations for complex, multi-object systems |
| **Collision type classification** | Confuses which quantities are conserved in elastic vs. inelastic collisions | Correctly identifies collision type and states that momentum is always conserved, KE only in elastic | Justifies classification using both momentum and kinetic energy calculations, explains energy loss mechanisms |
| **Problem-solving and reasoning** | Struggles to select the correct approach or system boundaries | Solves standard textbook problems with correct approach and mostly correct execution | Solves novel, multi-step, or 2D problems, and explains reasoning clearly using physics vocabulary |
| **Real-world application** | Restates definitions without connecting them to real scenarios | Explains at least one real-world application using impulse-momentum reasoning | Analyzes multiple real-world applications (safety design, sports, propulsion) with quantitative or semi-quantitative reasoning |

**Progress tracking**: Progress is tracked through the Practice Problems set (self-check against the answer key), the Cornell Notes worked example (used as a formative self-assessment), and the interactive quiz (`quiz.html`), which records a running score during each attempt so students and teachers can see which misconception categories need review. Teachers may additionally use short warm-up problems, exit tickets, and a unit test aligned to the Learning Objectives above.

## Real-World Applications

- **Crumple zones in cars**: The front and rear sections of a car are engineered to deform during a crash. This deformation extends the collision time Δt; since impulse (Δp) is fixed by the change in the car's momentum, a longer Δt means a smaller average force on the occupants (F = Δp/Δt).
- **Airbags**: Airbags work on the same impulse-momentum principle as crumple zones — they increase the time over which a passenger's momentum changes during a sudden stop, reducing the peak force experienced by the body.
- **Rocket propulsion and recoil**: A rocket expels exhaust gas at high velocity in one direction; conservation of momentum requires the rocket itself to gain momentum in the opposite direction, exactly the same physics as recoil from a fired gun.
- **Sports collisions**: Billiard balls (nearly elastic collisions), football tackles (highly inelastic, players often move together briefly), and bat-ball or racket-ball contacts all involve impulse and momentum transfer that athletes and equipment designers exploit or protect against.
- **Ballistic pendulum**: A classic experimental method for measuring the speed of a fast-moving projectile (like a bullet) by firing it into a hanging block, using perfectly inelastic collision analysis followed by conservation of energy in the pendulum's swing.
- **Egg drop and packaging design**: Padding and cushioning materials increase the stopping time of a falling object, reducing the peak impact force — the same physics that protects shipped fragile goods and falling eggs.

## Practice Problems

1. **(Basic)** A 0.50 kg ball moves with a velocity of +6.0 m/s. Calculate its momentum.

2. **(Basic)** A 1200 kg car changes its velocity from +20.0 m/s to +5.0 m/s in 4.0 seconds after braking. Calculate (a) the impulse delivered to the car and (b) the average braking force.

3. **(Basic-Intermediate)** A tennis ball of mass 0.058 kg is struck by a racket. The ball arrives at +12 m/s and leaves at −18 m/s (it reverses direction). The racket is in contact with the ball for 5.0 ms. Find (a) the impulse delivered to the ball and (b) the average force exerted by the racket.

4. **(Intermediate)** A 0.020 kg bullet traveling at +300 m/s embeds itself in a 2.00 kg wooden block initially at rest, and the block+bullet move off together. Find the final velocity of the block+bullet system. (Perfectly inelastic collision.)

5. **(Intermediate)** A 1500 kg car moving at +8.0 m/s collides head-on with a 1000 kg car moving at −6.0 m/s. If the two cars lock together on impact, find their common final velocity. State whether kinetic energy is conserved in this collision, and explain how you know.

6. **(Intermediate)** Two ice skaters, initially at rest and facing each other (total momentum = 0), push off from one another. Skater A (mass 60 kg) moves away at −3.0 m/s. Find the velocity of Skater B (mass 45 kg). What kind of momentum problem is this?

7. **(Challenging)** A 3.0 kg cart moving at +4.0 m/s on a frictionless track collides elastically with a stationary 1.0 kg cart. Using the fact that in a one-dimensional elastic collision both momentum and kinetic energy are conserved, find the final velocities of both carts. (Hint: for elastic collisions between mass m1 moving at v1 and stationary mass m2, v1' = ((m1−m2)/(m1+m2))v1 and v2' = (2m1/(m1+m2))v1.)

8. **(Challenging, 2D)** A 2.0 kg puck moving at +5.0 m/s in the +x direction collides with a stationary 2.0 kg puck. After the collision, the first puck moves off at 3.0 m/s at 30° above the +x axis. Using conservation of momentum in both the x and y directions, find the speed and direction of the second puck. (Assume the collision is not perfectly elastic; you only need momentum conservation, not kinetic energy conservation, to solve this.)

---

### Answer Key

1. p = mv = (0.50 kg)(6.0 m/s) = **3.0 kg·m/s** in the direction of motion.

2. (a) Δp = m·Δv = (1200 kg)(5.0 − 20.0 m/s) = (1200 kg)(−15.0 m/s) = **−1.8 × 10⁴ kg·m/s** (impulse = Δp, so J = −1.8 × 10⁴ N·s).
 (b) F = Δp/Δt = (−1.8 × 10⁴ kg·m/s) / (4.0 s) = **−4.5 × 10³ N** (force acts opposite to the direction of motion, i.e., braking).

3. (a) Δp = m(v_f − v_i) = (0.058 kg)(−18 − 12 m/s) = (0.058 kg)(−30 m/s) = **−1.74 kg·m/s ≈ −1.7 kg·m/s**. This equals the impulse J.
 (b) F = J/Δt = (−1.74 kg·m/s) / (0.0050 s) = **−348 N ≈ −3.5 × 10² N** (direction opposite the ball's initial velocity).

4. Conservation of momentum: m_bullet·v_bullet + m_block·v_block = (m_bullet + m_block)v_f
 (0.020 kg)(300 m/s) + (2.00 kg)(0) = (2.020 kg)v_f
 6.0 kg·m/s = (2.020 kg)v_f → **v_f ≈ 2.97 m/s ≈ 3.0 m/s** in the bullet's original direction.

5. m1v1 + m2v2 = (m1+m2)v_f
 (1500 kg)(8.0 m/s) + (1000 kg)(−6.0 m/s) = (2500 kg)v_f
 12000 − 6000 = 2500·v_f → 6000 = 2500·v_f → **v_f = +2.4 m/s** (in the direction the first car was moving).
 Kinetic energy is **not** conserved — this is a perfectly inelastic collision (the cars lock together), so some kinetic energy is converted into deformation, heat, and sound. Only momentum is conserved, not KE. (KE_before = ½(1500)(8.0)² + ½(1000)(6.0)² = 48000 + 18000 = 66000 J; KE_after = ½(2500)(2.4)² = 7200 J — a large loss, confirming the collision is inelastic.)

6. Total momentum before = 0 (both skaters at rest), so total momentum after must also = 0.
 m_A·v_A + m_B·v_B = 0 → (60 kg)(−3.0 m/s) + (45 kg)v_B = 0
 −180 + 45·v_B = 0 → **v_B = +4.0 m/s**.
 This is an **explosion/recoil-type problem**: the system starts at rest, and internal forces (their push) separate the skaters while total momentum remains zero.

7. Using the elastic collision formulas with m1 = 3.0 kg, v1 = 4.0 m/s, m2 = 1.0 kg, v2 = 0:
 v1' = ((3.0−1.0)/(3.0+1.0))(4.0) = (2.0/4.0)(4.0) = **+2.0 m/s**
 v2' = (2×3.0/(3.0+1.0))(4.0) = (6.0/4.0)(4.0) = **+6.0 m/s**
 Check momentum: before = (3.0)(4.0) = 12.0 kg·m/s; after = (3.0)(2.0) + (1.0)(6.0) = 6.0 + 6.0 = 12.0 kg·m/s ✓.
 Check KE: before = ½(3.0)(4.0)² = 24.0 J; after = ½(3.0)(2.0)² + ½(1.0)(6.0)² = 6.0 + 18.0 = 24.0 J ✓ (confirms elastic).

8. x-direction: m·v1 = m·v1'·cos30° + m·v2'·cos θ
 (2.0)(5.0) = (2.0)(3.0)(cos30°) + (2.0)v2ₓ'
 10.0 = 5.196 + 2.0·v2ₓ' → v2ₓ' = 2.402 m/s
 y-direction: 0 = (2.0)(3.0)(sin30°) + (2.0)v2ᵧ'
 0 = 3.0 + 2.0·v2ᵧ' → v2ᵧ' = −1.5 m/s
 Speed of puck 2: √(2.402² + 1.5²) = √(5.77 + 2.25) = √8.02 ≈ **2.83 m/s**
 Direction: θ = arctan(−1.5/2.402) ≈ **−32° (i.e., 32° below the +x axis)**, consistent with momentum being conserved in both dimensions independently.

## Learning Resources

- **Textbook chapters**: "Linear Momentum and Collisions" (typically the chapter immediately following Newton's Laws and preceding or paired with Work and Energy in most standard algebra-based and AP Physics 1 textbooks); look for sections titled "Impulse and Momentum," "Conservation of Momentum," and "Collisions in One and Two Dimensions."
- **Khan Academy**: "Momentum and impulse" unit (under AP Physics 1 / Physics library), including the sub-topics on impulse, conservation of momentum, and elastic and inelastic collisions.
- **PhET Interactive Simulations**: "Collision Lab" — allows students to manipulate mass, velocity, and elasticity of colliding objects in 1D and 2D and observe momentum/kinetic energy conservation in real time.
- **YouTube channels**: Flipping Physics (momentum and collisions playlist), Professor Dave Explains (momentum and impulse videos), and The Organic Chemistry Tutor (physics problem-solving walkthroughs for momentum and collisions).
- **AP Physics 1 Course and Exam Description (College Board)**: for students in an AP-aligned course, the "Linear Momentum" unit outlines the exact skills and equations tested.
