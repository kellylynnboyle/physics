# Unit 5: Work & Energy
*Weeks 14-18 (pacing suggestion)*

> **Big idea:** Energy is conserved. Work transfers energy; kinetic and potential energy trade off while the total stays constant (counting thermal energy).

## NGSS Learning Goals
- **HS-PS3-1** - Create a computational model to calculate the change in the energy of one component in a system when the change in energy of the other component(s) and energy flows in and out of the system are known.
- **HS-PS3-2** - Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as either motion of particles or energy stored in fields (position).
- **HS-PS3-3** - Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy.

*Covers HS-PS3-1 (energy accounting), HS-PS3-2 (kinetic vs. stored/potential energy) and HS-PS3-3 (device converting energy).*

## Learning Objectives (I can...)
- [ ] Calculate work done by a constant force, including the angle between force and displacement.
- [ ] Calculate kinetic, gravitational potential, and elastic potential energy.
- [ ] Use the work-energy theorem and conservation of mechanical energy to solve problems.
- [ ] Account for energy dissipated by friction as thermal energy.
- [ ] Calculate power and efficiency.
- [ ] Build a model/graph (e.g. bar chart) tracking energy transfers in a system (HS-PS3-1, HS-PS3-2).
- [ ] Design and refine a device that converts energy under constraints (HS-PS3-3).

## Key Concepts
- **Work** - W = F d cos(theta) (joules). Only the force component along displacement does work. Force perpendicular to motion does zero work.
- **Kinetic energy** - KE = 1/2 m v^2. Scales with speed squared.
- **Gravitational potential energy** - PE_g = m g h relative to a chosen zero level. Only height changes matter.
- **Elastic potential energy** - PE_s = 1/2 k x^2 for springs (Hooke's law F = k x).
- **Work-energy theorem** - W_net = delta KE.
- **Conservation of energy** - Energy is never created or destroyed. With friction: KE_i + PE_i = KE_f + PE_f + thermal energy.
- **Power and efficiency** - P = W/t (watts). Efficiency = useful output energy / input energy.
- **Energy in fields (HS-PS3-2)** - Potential energy is energy stored in the gravitational (or electric) field arrangement, not in the object itself.

### Key formulas
- `W = F d cos(theta)`
- `KE = 1/2 m v^2`
- `PE_g = m g h`
- `PE_s = 1/2 k x^2`
- `W_net = delta KE`
- `KE_i + PE_i = KE_f + PE_f`
- `P = W / t`
- `efficiency = E_out / E_in`

### Common misconceptions
- Carrying a heavy box horizontally does work on it. (Force up, displacement sideways: W = 0.)
- Doubling speed doubles KE. (Quadruples it.)
- Energy is used up. (It is transformed, e.g. into thermal energy.)
- Heavier objects gain more speed from the same drop height. (Mass cancels: v = sqrt(2 g h).)
- Work and power are the same.
- PE depends on the path taken.

## Cornell Notes
Print-ready version: open `site/index.html` and choose **Cornell Notes**.

| Cue / Question | Notes |
|---|---|
| Define work. | W = F d cos(theta), in joules. Transfers energy. Needs a force component along the displacement. |
| When is work zero? | No displacement, or force perpendicular to motion (e.g. lifting force while carrying a box horizontally). |
| Kinetic energy? | KE = 1/2 m v^2. Double v -> 4 x KE. |
| Potential energy? | Gravitational: m g h. Elastic: 1/2 k x^2. Stored energy due to position/configuration. |
| Work-energy theorem? | Net work = change in KE. Braking: negative work removes KE. |
| Conservation of mechanical energy? | Without friction, KE + PE is constant. With friction, mechanical energy is converted to thermal energy; total energy is still conserved. |
| Define power and efficiency. | P = W/t (watts). Efficiency = useful out / total in; always less than 100% in real devices. |
| Energy bar chart steps? | Draw bars for KE, PE, thermal at initial and final states; total height must match. |

**Summary:** Work transfers energy. KE and PE (gravitational, elastic) trade off while the total energy is conserved; friction converts mechanical energy to thermal. Power measures how fast energy is transferred.

## Most-Missed Questions (answer key)
Take them interactively in `site/index.html`.

1. A person carries a 20 kg box horizontally at constant velocity across a room. The work done by the upward lifting force is:
   - A. Positive
   - B. Zero
   - C. Negative
   - D. Equal to mgd
   - **Answer: B** - The lifting force is perpendicular to displacement (cos 90 = 0), so W = 0. *Why it is missed:* Equating effort with work.
2. A car doubles its speed. Its kinetic energy:
   - A. Doubles
   - B. Quadruples
   - C. Stays the same
   - D. Increases by 50%
   - **Answer: B** - KE is proportional to v^2. *Why it is missed:* Linear thinking.
3. How much gravitational potential energy does a 2 kg book gain when lifted 3 m? (g = 9.8)
   - A. 6 J
   - B. 19.6 J
   - C. 58.8 J
   - D. 5.9 J
   - **Answer: C** - PE = mgh = 2 x 9.8 x 3 = 58.8 J. *Why it is missed:* Leaving out g.
4. A frictionless roller coaster car starts at rest 5 m above the bottom of a dip. Its speed at the bottom is about:
   - A. 5 m/s
   - B. 9.9 m/s
   - C. 49 m/s
   - D. 98 m/s
   - **Answer: B** - m g h = 1/2 m v^2, so v = sqrt(2 x 9.8 x 5) = 9.9 m/s. Mass cancels. *Why it is missed:* Forgetting to take the square root.
5. A machine does 600 J of work in 3 s. Its power output is:
   - A. 1800 W
   - B. 200 W
   - C. 600 W
   - D. 0.005 W
   - **Answer: B** - P = W/t = 600/3 = 200 W. *Why it is missed:* Multiplying work by time.
6. A 1000 kg car traveling at 20 m/s brakes to a stop. The net work done by friction on the car is:
   - A. +200,000 J
   - B. -200,000 J
   - C. -20,000 J
   - D. 0 J
   - **Answer: B** - W_net = delta KE = 0 - 1/2(1000)(20^2) = -200,000 J. *Why it is missed:* Missing the negative sign or using mv.
7. A skateboarder slows down due to friction. What happened to the lost mechanical energy?
   - A. It was destroyed
   - B. It was converted to thermal energy
   - C. It became potential energy
   - D. It became momentum
   - **Answer: B** - Energy is conserved; friction transforms it to thermal energy in wheels/ground. *Why it is missed:* Saying energy is used up.
8. A spring (k = 200 N/m) is compressed 0.10 m. The stored energy is:
   - A. 20 J
   - B. 1 J
   - C. 2 J
   - D. 10 J
   - **Answer: B** - PE = 1/2 k x^2 = 0.5 x 200 x 0.01 = 1 J. *Why it is missed:* Forgetting to square x or the 1/2.

## Learning Resources
- [The Physics Classroom - Work, Energy, and Power](https://www.physicsclassroom.com/class/energy) - Readings, animations, and problem sets
- [PhET - Energy Skate Park](https://phet.colorado.edu/en/simulations/energy-skate-park) - Visualize KE/PE/thermal bar charts
- [PhET - Masses and Springs](https://phet.colorado.edu/en/simulations/masses-and-springs) - Elastic potential energy
- [OpenStax High School Physics - Work and energy chapters](https://openstax.org/details/books/physics) - Free textbook
- [Khan Academy - Work and energy](https://www.khanacademy.org/science/physics) - Video lessons

### Labs / hands-on activities
- Energy Skate Park inquiry: draw energy bar charts with and without friction
- Ramp/pendulum energy conservation lab: compare predicted and measured speed
- Power lab: calculate your power running up the stairs
- Energy-conversion device challenge (HS-PS3-3): e.g. a rubber-band or solar-powered car

## Practice Problems
1. A 50 N force at 30 degrees above horizontal drags a sled 10 m. Find the work.
   - *Answer:* W = 50(10)cos30 = 433 J
2. A 0.2 kg ball drops from 10 m. Find speed just before it lands (no air).
   - *Answer:* v = sqrt(2 x 9.8 x 10) = 14 m/s
3. A 60 kg student climbs 4 m of stairs in 5 s. Find power.
   - *Answer:* P = 60 x 9.8 x 4 / 5 = 470 W
4. A 2 kg block slides down a 3 m high ramp; speed at the bottom is 6 m/s. How much energy was converted to thermal energy?
   - *Answer:* PE = 58.8 J; KE = 36 J; thermal 22.8 J
5. A motor takes in 500 J and lifts a load storing 350 J of PE. Find efficiency and discuss where the rest went.
   - *Answer:* 70%; thermal and sound energy

## Real-World Applications
- Roller coasters and skate parks - trading PE and KE.
- Hybrid and electric vehicles - regenerative braking recovers KE.
- Hydroelectric dams and wind turbines - energy conversions to electricity.
- Appliance efficiency labels and energy bills (kWh, power).

## Assessment
**Mastery looks like:**
- [ ] Correctly uses W = Fd cos(theta)
- [ ] Builds energy bar charts before solving
- [ ] Applies conservation of energy with and without friction
- [ ] Evaluates efficiency of a device

**Rubric**

| Criterion | 4 - Mastery | 3 - Proficient | 2 - Developing | 1 - Beginning |
|---|---|---|---|---|
| Energy accounting (HS-PS3-1) | Complete bar chart and equation, including thermal energy | Minor omission | Partial accounting | None |
| Calculations | Correct formulas, substitution, and units | Minor errors | Wrong formula | No setup |
| Models (HS-PS3-2) | Explains energy in motion vs. stored in field with diagram | Partial explanation | Misconceptions | Missing |
| Device design (HS-PS3-3) | Meets constraints, tested, redesigned with data | Meets most constraints | Works but no analysis | Not complete |

**Formative checks:** Energy bar-chart whiteboards; Interactive quiz (>= 75%); Skate Park exit ticket

**Summative:** Work & energy unit test + device design challenge. Semester 1 cumulative exam.

## Student Progress Checklist
- [ ] Cornell notes completed
- [ ] Interactive quiz >= 75%
- [ ] Missed-question retake done
- [ ] Practice problems 1-5 done
- [ ] Lab report submitted
- [ ] Unit assessment taken
