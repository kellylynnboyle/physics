# Unit 4: Momentum
*Weeks 11-13 (pacing suggestion)*

> **Big idea:** Momentum is conserved in an isolated system. Impulse (force x time) changes an object's momentum.

## NGSS Learning Goals
- **HS-PS2-2** - Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system.
- **HS-PS2-3** - Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision.

*Directly addresses HS-PS2-2 (conservation of momentum) and HS-PS2-3 (impulse, minimizing force in collisions).*

## Learning Objectives (I can...)
- [ ] Calculate momentum as a vector and explain its units.
- [ ] Relate impulse to change in momentum and to force and time.
- [ ] Apply conservation of momentum to collisions and explosions in one dimension.
- [ ] Classify collisions as elastic, inelastic, or perfectly inelastic.
- [ ] Design/evaluate a device that reduces collision force by increasing contact time (HS-PS2-3).

## Key Concepts
- **Momentum** - p = m v (kg m/s), a vector in the direction of velocity.
- **Impulse** - J = F_net delta t = delta p. Same impulse can come from a large force over a short time or a small force over a long time.
- **Conservation of momentum** - If net external force on a system is zero, total momentum before = total momentum after.
- **Collision types** - Elastic: momentum and kinetic energy conserved. Inelastic: momentum conserved, KE lost. Perfectly inelastic: objects stick; maximum KE loss.
- **Explosions / recoil** - Starting at rest, total momentum = 0, so pieces move in opposite directions with m1 v1 = -m2 v2.
- **Collision safety** - Airbags, helmets, crumple zones increase delta t, reducing F for the same impulse.

### Key formulas
- `p = m v`
- `J = F delta t = delta p = m (v_f - v_i)`
- `m1 v1i + m2 v2i = m1 v1f + m2 v2f`
- `Perfectly inelastic: m1 v1 + m2 v2 = (m1 + m2) v_f`

### Common misconceptions
- Momentum and kinetic energy are the same thing. (Momentum is a vector linear in v; KE is a scalar in v^2.)
- Momentum is not conserved in inelastic collisions. (It is; energy is not.)
- Bouncing off gives the same impulse as stopping. (Bounce reverses velocity, so delta p is larger.)
- Ignoring direction/sign when adding momenta.
- Impulse depends only on force. (Force and time.)

## Cornell Notes
Print-ready version: open `site/index.html` and choose **Cornell Notes**.

| Cue / Question | Notes |
|---|---|
| What is momentum? | p = m v (kg m/s), vector. Heavier or faster = harder to stop. |
| What is impulse? | J = F delta t = delta p. Impulse-momentum theorem links force, time, and change in motion. |
| How can I reduce the force in a collision? | Increase the stopping time (airbag, crumple zone, bending knees) so F = delta p / delta t gets smaller. |
| State conservation of momentum. | In a closed/isolated system (no net external force), total p before = total p after. |
| Elastic vs. inelastic? | Elastic: KE conserved (billiard balls ideal). Inelastic: KE lost to heat/sound/deformation. Stick together = perfectly inelastic. |
| Steps for collision problems? | 1) Choose + direction. 2) Write p before (with signs). 3) Write p after. 4) Set equal and solve. 5) Check KE if asked. |
| What about recoil? | Start at rest: total p = 0. Gun and bullet (or skaters pushing apart) move in opposite directions. |
| Why is a bounce a bigger impulse? | delta p = m (v_f - v_i); reversing v makes /delta p/ about double that of stopping. |

**Summary:** Momentum (mv) changes only through impulse (F delta t). In a closed system momentum is conserved in every collision, but kinetic energy is only conserved in elastic ones. Longer collision times mean smaller forces.

## Most-Missed Questions (answer key)
Take them interactively in `site/index.html`.

1. A 1000 kg car moves at 20 m/s. Its momentum is:
   - A. 20,000 kg m/s
   - B. 200,000 kg m/s
   - C. 50 kg m/s
   - D. 10,000 kg m/s
   - **Answer: A** - p = mv = 1000 x 20 = 20,000 kg m/s. (200,000 is the kinetic energy in joules.) *Why it is missed:* Confusing momentum with kinetic energy.
2. A 0.5 kg ball moving at 10 m/s is caught and stopped in 0.1 s. The average force on the hand is:
   - A. 5 N
   - B. 50 N
   - C. 0.5 N
   - D. 500 N
   - **Answer: B** - F = delta p / delta t = 5 / 0.1 = 50 N. *Why it is missed:* Forgetting to divide by time.
3. A 2 kg cart moving at 3 m/s collides with and sticks to a stationary 1 kg cart. The final speed is:
   - A. 3 m/s
   - B. 2 m/s
   - C. 1 m/s
   - D. 1.5 m/s
   - **Answer: B** - 6 = 3 v_f, so v_f = 2 m/s. *Why it is missed:* Not adding the masses after sticking.
4. In a perfectly inelastic collision between two carts (isolated system):
   - A. Neither momentum nor KE is conserved
   - B. Momentum is conserved; KE is not
   - C. Both are conserved
   - D. KE is conserved; momentum is not
   - **Answer: B** - Momentum is conserved in all isolated collisions; KE converts to thermal/sound/deformation. *Why it is missed:* Saying momentum is lost.
5. Why do airbags reduce injury?
   - A. They reduce the change in momentum
   - B. They increase the stopping time, reducing the force
   - C. They increase the impulse
   - D. They make the car heavier
   - **Answer: B** - Same delta p (same impulse), but a longer delta t gives a smaller average force. *Why it is missed:* Believing airbags lower delta p.
6. A ball hits a wall. It experiences a larger impulse if it:
   - A. Sticks to the wall
   - B. Bounces back with the same speed
   - C. Stops without bouncing
   - D. Slides along the wall
   - **Answer: B** - Bouncing reverses momentum: delta p = 2mv versus mv for stopping. *Why it is missed:* Thinking stopping is the largest change.
7. A 50 kg skater at rest pushes off a 25 kg partner, who moves away at 2 m/s. The skater's velocity is:
   - A. 1 m/s opposite
   - B. 2 m/s opposite
   - C. 1 m/s same direction
   - D. 0 m/s
   - **Answer: A** - 0 = 25(2) + 50 v, so v = -1 m/s. *Why it is missed:* Ignoring direction or masses.
8. Two identical carts approach each other at equal speeds and stick together. Afterwards they:
   - A. Move at the same speed
   - B. Move at half speed
   - C. Stop
   - D. Move at double speed
   - **Answer: C** - Momenta are equal and opposite (vectors), so the total is zero and the combined cart stops. *Why it is missed:* Treating momentum as a scalar.

## Learning Resources
- [The Physics Classroom - Momentum and Its Conservation](https://www.physicsclassroom.com/class/momentum) - Readings, animations, and problem sets
- [PhET - Collision Lab](https://phet.colorado.edu/en/simulations/collision-lab) - Elastic and inelastic collisions in 1-D and 2-D
- [OpenStax High School Physics - Momentum chapter](https://openstax.org/details/books/physics) - Free textbook
- [Khan Academy - Impulse and momentum](https://www.khanacademy.org/science/physics) - Video lessons
- [HyperPhysics - Momentum](http://hyperphysics.phy-astr.gsu.edu/hbase/mom.html) - Concise reference

### Labs / hands-on activities
- Dynamics carts: measure momentum before/after elastic and sticky collisions
- Egg-drop / crumple-zone design challenge (HS-PS2-3)
- Impulse with a force sensor: compare catching with stiff vs. bent arms

## Practice Problems
1. A 0.145 kg baseball at 40 m/s is hit back at 50 m/s. Find the impulse magnitude.
   - *Answer:* J = 0.145(40 + 50) = 13 N s
2. A 1500 kg car at 12 m/s hits a 1000 kg stopped car and they lock. Find final speed.
   - *Answer:* v = 18000/2500 = 7.2 m/s
3. Find the KE lost in the previous collision.
   - *Answer:* KE_i = 108,000 J; KE_f = 64,800 J; lost 43,200 J
4. A 4 kg cannon fires a 0.1 kg shell at 200 m/s. Find the recoil speed.
   - *Answer:* v = 0.1 x 200 / 4 = 5 m/s
5. Design a helmet liner: explain with impulse why thicker, softer foam helps.
   - *Answer:* Longer delta t for same delta p gives smaller F

## Real-World Applications
- Vehicle safety design (airbags, crumple zones, seat belts, guardrails).
- Sports: follow-through in baseball or golf; boxing glove padding; catching a fast ball.
- Rocket and jet propulsion (momentum exchange).
- Crash-reconstruction investigations use momentum conservation.

## Assessment
**Mastery looks like:**
- [ ] Applies conservation of momentum with signs
- [ ] Uses impulse to explain safety devices
- [ ] Distinguishes conservation of momentum and energy

**Rubric**

| Criterion | 4 - Mastery | 3 - Proficient | 2 - Developing | 1 - Beginning |
|---|---|---|---|---|
| Conservation setup | Sign convention, before/after, and equation all correct | Small sign or arithmetic error | Equation incomplete | No setup |
| Impulse reasoning | Links delta t, F, and delta p in explanation | Partially correct | Only qualitative misconception | Missing |
| Design challenge (HS-PS2-3) | Device meets criteria and is tested and refined with data | Meets criteria; limited testing | Partially meets | No device |

**Formative checks:** Collision Lab prediction sheet; Interactive quiz (>= 75%); Exit ticket: why airbags work

**Summative:** Momentum unit test + collision design challenge write-up.

## Student Progress Checklist
- [ ] Cornell notes completed
- [ ] Interactive quiz >= 75%
- [ ] Missed-question retake done
- [ ] Practice problems 1-5 done
- [ ] Lab report submitted
- [ ] Unit assessment taken
