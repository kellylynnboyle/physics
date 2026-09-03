# Topic 5: Work & Energy

> How forces transfer energy to and from objects, and how that energy is stored, converted, and conserved.

**Files in this module:** [`cornell-notes.md`](./cornell-notes.md) · [`quiz.html`](./quiz.html) (open in any browser)

---

## Key Concepts to Master

- **Work** — done by a force only when there is displacement *along the direction of the force*: W = Fd·cos(θ), where θ is the angle between the force and displacement vectors.
  - θ = 0° (force and displacement parallel): W = Fd (maximum, positive work).
  - θ = 90° (force perpendicular to displacement): W = 0, no matter how large the force is.
  - θ = 180° (force opposite displacement): W = -Fd (negative work, e.g. friction opposing motion).
- **The work-energy theorem** — the net work done on an object equals its change in kinetic energy: W_net = ΔKE = KE_f − KE_i. This connects forces (dynamics) directly to motion (kinematics) without needing time or acceleration.
- **Kinetic energy (KE)** — energy of motion, KE = ½mv². Because velocity is squared, KE grows with the *square* of speed, not linearly.
- **Gravitational potential energy (PE_grav)** — stored energy due to position in a gravitational field, PE = mgh, measured relative to a chosen reference height (h = 0 point).
- **Elastic potential energy (PE_spring)** — stored energy in a stretched or compressed spring obeying Hooke's law (F = -kx), PE_spring = ½kx², where k is the spring constant and x is displacement from equilibrium.
- **Conservation of mechanical energy** — for a system with only conservative forces (gravity, ideal springs) acting, total mechanical energy is constant: KE_i + PE_i = KE_f + PE_f. This lets you solve motion problems without tracking forces or time at all.
- **Non-conservative forces** — forces like friction and air resistance remove mechanical energy from a system, converting it to heat/sound. When present, KE_i + PE_i = KE_f + PE_f + E_lost (energy is not lost overall — the *total* energy, including heat, is still conserved; only *mechanical* energy is not).
- **Power** — the rate at which work is done or energy is transferred, P = W/t. For a constant force along the direction of motion, this simplifies to P = Fv. Units: watts (W) = joules/second.
- **Units** — work and all forms of energy are measured in joules (J) = kg·m²/s² = N·m. Power is in watts (W) = J/s.

## Key Equations

| Equation | Meaning |
|---|---|
| `W = Fd·cos(θ)` | Work done by a force F over displacement d, at angle θ between them |
| `KE = ½mv²` | Kinetic energy of an object of mass m moving at speed v |
| `PE_grav = mgh` | Gravitational potential energy at height h above a chosen reference |
| `PE_spring = ½kx²` | Elastic potential energy of a spring stretched/compressed by x |
| `W_net = ΔKE` | Work-energy theorem: net work done equals the change in kinetic energy |
| `KE_i + PE_i = KE_f + PE_f` | Conservation of mechanical energy (conservative forces only, no friction) |
| `P = W/t = Fv` | Power: rate of doing work / transferring energy |

---

## Learning Objectives

By the end of this module, students will be able to:

1. Calculate the work done by a constant force, correctly applying the cos(θ) factor, including cases where work is zero or negative.
2. Apply the work-energy theorem to relate net work to a change in an object's kinetic energy.
3. Calculate kinetic energy, gravitational potential energy, and elastic (spring) potential energy given appropriate variables.
4. Apply conservation of mechanical energy to solve motion problems (e.g., height, speed) when only conservative forces act.
5. Determine how much mechanical energy is lost to friction/heat in a system where non-conservative forces act, using energy accounting.
6. Calculate power from work and time, or from force and velocity, and distinguish power from work/energy.

## Assessment Criteria

| Level | Criteria |
|---|---|
| **Mastery (4)** | Correctly applies W = Fd cos(θ) including zero/negative work cases, solves multi-step conservation-of-energy problems with and without friction, and clearly distinguishes work, energy, and power in explanations. |
| **Proficient (3)** | Solves standard work and energy-conservation problems correctly; minor errors handling the cos(θ) factor or friction/heat loss that don't change the overall method. |
| **Developing (2)** | Applies KE, PE, and work formulas with help identifying which quantity is conserved or which force is doing work; sometimes omits cos(θ) or confuses work with energy. |
| **Beginning (1)** | Cannot set up a work or energy-conservation equation independently; treats work, energy, and power as interchangeable terms. |

**Suggested evidence:** homework problem sets, the interactive quiz (`quiz.html`) scored to 80%+, an energy-bar-chart exit ticket (KE vs. PE vs. heat at several points in a scenario), and one free-response conservation-of-energy problem on the unit test.

---

## Most Often Missed Ideas (misconceptions to target)

1. **Students think any force acting on a moving object does work**, forgetting the cos(θ) factor — e.g., carrying a bag horizontally at constant height does zero work against gravity, because the force (gravity, or the upward carrying force) is perpendicular to the horizontal displacement.
2. **Students think holding a heavy object stationary is doing work in the physics sense.** It isn't — there is no displacement, so W = Fd = 0, even though it is tiring for the person.
3. **Students confuse work, energy, and power**, or use their units interchangeably (joules vs. watts), treating "more powerful" as automatically meaning "more work done."
4. **Students think mechanical energy is always conserved**, even when friction or other non-conservative forces are clearly present in the scenario (sliding with friction, air resistance, collisions).
5. **Students forget that PE depends on a CHOSEN reference height**, not an absolute value — only *changes* in PE (or PE differences between two points using the same reference) are physically meaningful.
6. **Students think doubling speed doubles kinetic energy.** It actually quadruples it, since KE ∝ v² — this trips up braking-distance and collision-energy reasoning constantly.
7. **Students confuse power (the rate of energy transfer) with force or work itself** — e.g., assuming a more "powerful" engine always exerts more force, when it may simply deliver the same work faster.

---

## Learning Resources

- **Video:** Khan Academy — [Work and energy](https://www.khanacademy.org/science/physics/work-and-energy)
- **Simulation:** PhET Interactive Simulations — [Energy Skate Park](https://phet.colorado.edu/en/simulation/energy-skate-park) (visualize KE/PE/thermal energy conversion in real time)
- **Reference:** The Physics Classroom — [Work, Energy, and Power tutorial](https://www.physicsclassroom.com/class/energy)
- **Reference:** OpenStax College Physics, Chapter 7 (Work, Energy, and Energy Resources) — free PDF/online textbook

## Real-World Applications

- Roller coasters converting gravitational PE at the top of a hill into KE on the way down (and back again).
- Hydroelectric dams converting gravitational PE of stored water into electrical energy.
- Vehicle braking systems converting kinetic energy into heat via friction in the brake pads.
- Bouncing balls and archery bows storing and releasing elastic potential energy.
- Engine and motor power ratings (horsepower/watts) describing how quickly work can be done, not just how much.
- Energy efficiency of machines — how much useful work output is obtained per unit of energy input, with the rest lost as heat.

## Practice Problems

1. A 60 kg box is pushed 8 m across a floor by a horizontal force of 150 N while friction exerts 40 N opposing the motion. Find the work done by the applied force, the work done by friction, and the net work done on the box.
2. A 1200 kg car accelerates from 10 m/s to 25 m/s. Use the work-energy theorem to find the net work done on the car.
3. A 5 kg rock is lifted 3 m off the ground at constant velocity. Find its gravitational potential energy relative to the ground, and state how much work was done against gravity.
4. A spring with spring constant k = 250 N/m is compressed 0.20 m. Find the elastic potential energy stored, and describe what happens to that energy if the spring launches a small ball (ignoring friction).
5. A skier of mass 70 kg starts from rest at the top of a 20 m frictionless hill. Find her speed at the bottom using conservation of mechanical energy. Then explain qualitatively how your answer would change if friction were present on the slope.

*(Answer keys are intentionally left for in-class or instructor-led review — pair with the quiz below for self-check practice.)*
