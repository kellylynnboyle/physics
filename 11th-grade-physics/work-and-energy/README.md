# Work and Energy

## Overview

Work and energy give us a second, often faster, way to analyze motion — one that lets us skip the messy vector details of forces and accelerations and instead track a single scalar quantity as it moves through a system. Every roller coaster drop, braking car, stretched spring, and power plant turbine is governed by the same handful of ideas here: work transfers energy, energy changes form, and — when no non-conservative forces are involved — the total mechanical energy of a system is conserved. Mastering this topic also sets up nearly everything that follows in physics and engineering, from thermodynamics to circuits, where "energy accounting" is the default problem-solving strategy.

## Key Concepts to Master

- **Work formula:** W = Fd cos θ, where θ is the angle between the applied force and the direction of displacement.
- **Work is zero when force is perpendicular to displacement** (θ = 90°, cos θ = 0) — e.g., carrying a bag horizontally while walking does zero work on the bag from your vertical carrying force.
- **Positive vs. negative work:** work is positive when the force (or a component of it) points in the same general direction as the displacement, and negative when it opposes the displacement (e.g., friction acting backward on a sliding object, or gravity acting on an object moving upward).
- **Kinetic energy and the work-energy theorem:** KE = ½mv², and the net work done on an object equals its change in kinetic energy: W_net = ΔKE.
- **Gravitational potential energy:** PE_grav = mgh, where h is measured from a chosen reference point; the reference height is arbitrary, but the *change* in PE (ΔPE) between two points is physically meaningful and reference-independent.
- **Elastic potential energy:** PE_elastic = ½kx², where k is the spring constant and x is the displacement from the spring's natural (unstretched/uncompressed) length — note the squared dependence on x, not linear.
- **Conservation of mechanical energy:** ME = KE + PE stays constant *only* when no non-conservative forces (friction, air resistance, applied forces that add/remove energy) act on the system.
- **Power:** P = W/t = Fv — power is the *rate* at which work is done or energy is transferred, measured in watts (W = J/s), and is not the same thing as work or energy.
- **Energy conservation with friction/non-conservative forces present:** mechanical energy is not conserved; some energy is converted ("lost") to heat (and sometimes sound), so KE_i + PE_i ≠ KE_f + PE_f, but total energy (including thermal) is still conserved.
- **Efficiency:** the ratio of useful energy output to total energy input, often expressed as a percentage; real machines are never 100% efficient because some energy always converts to heat via friction or other dissipative processes.

## Learning Objectives

By the end of this unit, students will be able to:

1. Calculate the work done by a constant force using W = Fd cos θ, correctly identifying the angle between force and displacement.
2. Determine when a force does zero, positive, or negative work on an object, including cases involving perpendicular forces or forces opposing motion.
3. Apply the work-energy theorem to relate net work to the change in an object's kinetic energy.
4. Calculate gravitational and elastic potential energy, and explain why the choice of reference height for PE_grav does not affect physical predictions.
5. Apply conservation of mechanical energy to solve multi-point motion problems (e.g., roller coasters, pendulums, inclines) when non-conservative forces are absent.
6. Solve energy problems where friction or air resistance is present, correctly accounting for energy converted to heat and recognizing that mechanical energy is not conserved in these cases.
7. Calculate power using P = W/t and P = Fv, and distinguish power from work and energy conceptually and dimensionally.
8. Calculate the efficiency of a real energy-conversion system and explain the physical reasons efficiency is always less than 100%.

## Assessment Criteria

| Criterion | Developing | Proficient | Mastery |
|---|---|---|---|
| Work calculations | Struggles to identify the correct angle or force component; frequently omits cos θ | Correctly applies W = Fd cos θ in straightforward cases | Correctly analyzes work in multi-force, multi-angle, and zero-work scenarios, and explains the physical reasoning |
| Energy identification | Confuses KE, PE, and work as interchangeable | Correctly calculates KE and PE separately in simple cases | Fluently converts between KE and PE forms and tracks energy through multi-stage problems |
| Conservation of energy | Applies KE_i + PE_i = KE_f + PE_f even when friction is present | Applies conservation correctly in frictionless scenarios | Correctly incorporates non-conservative forces, quantifying energy converted to heat and reconciling total energy balance |
| Power and units | Mixes up J, W, and N·m; cannot distinguish power from energy | Calculates power correctly given work/time or force/velocity | Explains power conceptually as a rate and solves multi-step problems combining power, work, and time correctly |
| Problem-solving/reasoning | Relies on memorized formulas without justification | Selects the correct formula/approach with minor reasoning gaps | Justifies method choice, checks units and reasonableness, and explains "why" behind each step |

**Progress tracking:** progress is tracked through the Practice Problems in this packet (self-checked against the answer key), the Cornell Notes worked example (used as a formative check), and the interactive quiz (`quiz.html`), which flags the specific misconceptions a student is still making so they can revisit the matching concept above before a summative assessment.

## Real-World Applications

- **Roller coasters:** continuous conversion between gravitational PE (at the top of hills) and KE (at the bottom), with small energy losses to friction and air resistance at each stage.
- **Hydroelectric power:** gravitational PE of water stored behind a dam converts to KE as it falls, then to electrical energy via turbines and generators — a real-world efficiency case study.
- **Pendulum motion:** a swinging pendulum continuously trades gravitational PE (at the highest points of the swing) for KE (at the lowest point), approximately conserving mechanical energy when air resistance is small.
- **Braking distance and friction:** a car's brakes convert KE into heat via friction between the brake pads and rotors (and tires and road), which is why stopping distance depends on speed squared, not speed.
- **Springs in pogo sticks and trampolines:** elastic PE stored by compressing a spring (or stretching a trampoline's springs/mat) converts to KE and gravitational PE as the person is launched upward.
- **Power ratings of engines and motors:** a car engine's horsepower or a motor's wattage describes how quickly it can do work, not how much total energy or work it can eventually deliver.

## Practice Problems

1. **(Basic)** A person pushes a box 5.0 m across a floor with a constant horizontal force of 40 N. How much work is done on the box?

2. **(Basic)** A 60 kg hiker climbs a hill, gaining 150 m of elevation. How much gravitational potential energy does the hiker gain? (Use g = 9.8 m/s².)

3. **(Conceptual)** A student holds a 20 N textbook stationary at arm's length for 30 seconds, then walks forward at constant velocity while still holding the book at the same height. In each case (holding it still, and walking forward), is the student doing work on the book? Explain using the definition of work.

4. **(Intermediate)** A 1200 kg car traveling at 25 m/s brakes to a stop. Using the work-energy theorem, find the net work done by the braking force. If the braking force is a constant 6000 N, over what distance does the car stop?

5. **(Intermediate)** A spring with spring constant k = 250 N/m is compressed 0.15 m. How much elastic potential energy is stored in the spring?

6. **(Challenging — energy conservation, frictionless)** A 2.0 kg ball is released from rest at the top of a frictionless ramp 3.0 m high. Find its speed at the bottom of the ramp using conservation of mechanical energy.

7. **(Challenging — energy conservation with friction)** A 500 g block slides down a 2.0 m high ramp, starting from rest. Friction does −3.5 J of work on the block as it slides. Find the block's speed at the bottom of the ramp.

8. **(Challenging — power)** A motor lifts a 300 kg elevator car a vertical distance of 12 m in 8.0 seconds at constant speed. Calculate (a) the work done by the motor against gravity, and (b) the power output of the motor in watts.

---

### Answer Key

1. W = Fd cos θ = (40 N)(5.0 m)(cos 0°) = **200 J**

2. PE = mgh = (60 kg)(9.8 m/s²)(150 m) = **88,200 J ≈ 8.8 × 10⁴ J**

3. **Holding it still:** No work is done — displacement is zero, so W = Fd cos θ = 0 regardless of the force applied. **Walking forward at constant height:** Still no work is done *by the vertical holding force* on the book, because that force is vertical while the displacement is horizontal (θ = 90°, cos 90° = 0). Effort or fatigue is not the same as physics work.

4. W_net = ΔKE = 0 − ½(1200 kg)(25 m/s)² = **−375,000 J (−3.75 × 10⁵ J)**. Using W = Fd: 375,000 J = (6000 N)(d) → d = **62.5 m**.

5. PE_elastic = ½kx² = ½(250 N/m)(0.15 m)² = **2.8125 J ≈ 2.8 J**

6. mgh = ½mv² → v = √(2gh) = √(2 × 9.8 m/s² × 3.0 m) = √58.8 = **≈ 7.7 m/s** (mass cancels out).

7. Energy at top: PE = mgh = (0.5 kg)(9.8 m/s²)(2.0 m) = 9.8 J. Energy equation with friction: KE_bottom = PE_top + W_friction = 9.8 J + (−3.5 J) = 6.3 J. Then ½mv² = 6.3 J → v² = 2(6.3 J)/(0.5 kg) = 25.2 → v = **≈ 5.0 m/s**.

8. (a) W = Fd = mgh = (300 kg)(9.8 m/s²)(12 m) = **35,280 J ≈ 3.53 × 10⁴ J**. (b) P = W/t = 35,280 J / 8.0 s = **≈ 4410 W (about 4.41 kW)**.

## Learning Resources

- **Textbook:** Chapters on "Work, Energy, and Power" and "Conservation of Energy" (typically found immediately after the Newton's Laws / Forces unit in most standard 11th-grade physics textbooks).
- **Khan Academy:** "Work and energy" unit (AP Physics 1 course), including sub-topics on work-energy theorem, conservative forces, and power.
- **PhET Interactive Simulations:** "Energy Skate Park" — visualize KE/PE conversion and the effect of friction on total mechanical energy in real time.
- **PhET Interactive Simulations:** "Masses and Springs" — for reinforcing elastic potential energy concepts.
- **YouTube — Flipping Physics:** work, energy, and power video series with worked example problems.
- **YouTube — Professor Dave Explains:** conceptual overviews of work, kinetic/potential energy, and conservation of energy.
- **YouTube — The Organic Chemistry Tutor (Physics playlist):** additional worked numerical examples for work-energy theorem and energy conservation problems.
