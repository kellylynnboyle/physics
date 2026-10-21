# Unit 5 — Work & Energy

**Standards:**
- HS-PS3-1 Create a computational model to calculate the change in the energy of one component of a system when the change in energy of the other component(s) and energy flows in and out are known.
- HS-PS3-2 Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as a combination of energy associated with the motions of particles (objects) and energy associated with the relative positions of particles (objects).
- HS-PS3-3 Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy.
- HS-PS3-4 (thermal energy transfer) is revisited in the nuclear and Earth-science units.

## Learning objectives
Students can:
1. Calculate work done by a constant force, including at an angle, and recognize when work is zero.
2. Calculate kinetic energy, gravitational potential energy, and elastic potential energy.
3. Apply the work–energy theorem (W_net = ΔKE).
4. Use conservation of mechanical energy, and account for friction as energy transferred to thermal energy.
5. Calculate power and efficiency.
6. Build a computational model (spreadsheet or code) of energy flow and design an energy-conversion device.

## Key concepts and formulas

| Concept | Formula |
|---|---|
| Work | W = Fd cosθ (J = N·m) |
| Kinetic energy | KE = ½mv² |
| Gravitational PE | PE_g = mgh |
| Elastic PE | PE_s = ½kx² |
| Work–energy theorem | W_net = ΔKE |
| Conservation | KE_i + PE_i + W_other = KE_f + PE_f (W_friction is negative) |
| Power | P = W/t = Fv (W) |
| Efficiency | useful output ÷ total input |

## Cornell notes

| Cues | Notes |
|---|---|
| What is work? | Energy transferred by a force acting over a distance in the direction of motion. W = Fd cosθ. |
| When is work zero? | No displacement, or force perpendicular to displacement (carrying a bag horizontally, circular motion). |
| Sign of work? | Positive: force along motion (speeds up). Negative: force opposite (friction, slows down). |
| What is kinetic energy? | Energy of motion, ½mv². Depends on speed *squared*: double v ⇒ 4× KE. |
| Potential energy? | Stored energy due to position: mgh (height above chosen zero), ½kx² for springs. |
| What is conserved? | Total energy always. Mechanical energy (KE+PE) only if no friction/drag. |
| Where does friction's energy go? | To thermal energy (and sound). Not lost—transferred. |
| Does the track shape matter? | For speed at a given height (no friction), no: only height difference. |
| Power? | Rate of doing work. Same work in less time = more power. |
| Energy bar charts? | Show KE, PE, thermal bars at start/end; total bar height stays the same in a closed system. |

**Summary:** _Work transfers energy. Energy is conserved; mechanical energy converts between kinetic and potential and, with friction, to thermal. I use bar charts and ΔKE = W_net to solve problems, and P = W/t for rates._

## Common misconceptions
- "Holding something up does work." (No displacement, no work, even though you get tired.)
- "Energy gets used up." (It transforms; total is conserved.)
- "Doubling speed doubles KE." (It quadruples.)
- "Work, energy, and power are interchangeable."
- "Speed at the bottom depends on the slide's shape."

## Learning resources
- PhET *Energy Skate Park*, *Masses and Springs*, *Energy Forms and Changes*
- The Physics Classroom, Work, Energy, and Power — https://www.physicsclassroom.com/class/energy
- Khan Academy, Work and energy
- California Energy Commission Energy Education — https://www.energy.ca.gov
- Spreadsheet or Python/Trinket starter for HS-PS3-1 modeling

## Practice problems
1. A 10 N force moves a box 5 m in the direction of the force. Work? [50 J]
2. A 20 N force at 60° above horizontal pulls a sled 8 m. Work? [80 J]
3. A 2 kg ball is raised 3 m. Gain in PE? [58.8 J]
4. A 1000 kg car goes from 10 m/s to 20 m/s. Work required? [150,000 J]
5. A skateboarder starts at rest 5 m above the bottom of a frictionless ramp. Speed at the bottom? [9.9 m/s]
6. A 0.5 kg block compresses a spring (k = 200 N/m) by 0.10 m, then is released on a frictionless surface. Speed? [2.0 m/s]
7. A 60 kg student climbs 4 m of stairs in 5 s. Power? [≈ 470 W]
8. A roller coaster car (500 kg) drops 30 m, and 20% of the initial PE is lost to friction before the bottom. Speed at the bottom? [≈ 21.7 m/s]
9. A motor uses 500 J of electrical energy to lift a 10 kg load 3 m. Efficiency? [294 J / 500 J = 59%]
10. Modeling task (HS-PS3-1): In a spreadsheet, model a ball dropped from 10 m, with columns for t, h, v, KE, PE, total. Add a drag term and show total mechanical energy decreasing while thermal energy rises.

## Real-world applications
- Roller coasters and bike ramps: converting PE to KE and tracking friction losses.
- Renewable energy: hydroelectric dams (PE→KE→electric), wind turbines, regenerative braking in EVs.
- Efficiency labels: appliances, motors, light bulbs; California Title 24 standards.
- Safety: braking distance depends on KE (v²), so doubling speed quadruples stopping distance.
- Human performance: power output in cycling and stair-climbing.

## Lab idea: Energy conservation on a ramp/pendulum
Release a cart or pendulum from several heights. Measure speed at the bottom with a photogate and compare ½mv² to mgh. Graph KE vs. PE, find percent of energy lost, identify where it went. Extension (HS-PS3-3): design a device (e.g., rubber-band or gravity-powered vehicle) that converts stored energy to motion, optimizing distance under constraints.

## Unit assessment criteria
Mastery: setup with energy bars, correct use of W = Fd cosθ and signs, unit-consistent solutions, correct identification of energy transformations, and a model/design with documented testing and revision. See [`../assessment/rubrics-and-criteria.md`](../assessment/rubrics-and-criteria.md).
