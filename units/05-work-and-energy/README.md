# Unit 5: Work & Energy

**Standards:** HS-PS3-1 (computational model of energy in a system), HS-PS3-2 (energy as motion + relative position), HS-PS3-3 (design a device that converts energy)
**Time:** about 3 weeks · **Quiz:** `quizzes/index.html` → Work & Energy

## Learning objectives

| ID | Students will be able to... |
|---|---|
| E1 | Calculate work done by a force, including at an angle |
| E2 | Calculate kinetic, gravitational potential, and elastic potential energy |
| E3 | Apply the work-energy theorem |
| E4 | Apply conservation of mechanical energy to ramps, pendulums, springs, roller coasters |
| E5 | Account for energy transformed by friction and other non-conservative forces |
| E6 | Calculate power and efficiency |
| E7 | Build and use an energy bar chart or computational model; design an energy-conversion device |

## Key concepts

- **Work** W = F d cos θ (joules, J = N·m). Only the component of force along the displacement does work. Force perpendicular to motion does zero work. Work is a scalar and can be negative (force opposes motion).
- **Kinetic energy** KE = ½mv²
- **Gravitational potential energy** PE_g = mgh (relative to a chosen zero level)
- **Elastic potential energy** PE_s = ½kx² (spring constant k in N/m)
- **Work-energy theorem**: W_net = ΔKE
- **Conservation of energy**: energy is transferred or transformed, not created or destroyed. For a system: ΔE_system = energy in − energy out.
  - Mechanical energy KE + PE is constant when only conservative forces (gravity, springs) do work
  - With friction: KE_i + PE_i − f_k d = KE_f + PE_f; the "lost" energy becomes thermal energy (the system's temperature increases)
- **Power** P = W/t = Fv (watts, W = J/s)
- **Efficiency** = useful energy out / total energy in × 100%
- **Energy bar charts / LOL diagrams**: track KE, PE_g, PE_s, thermal energy, and work in/out for initial and final states
- **Computational model (HS-PS3-1)**: a spreadsheet or Python model that steps an object through time, updating KE and PE (e.g., a pendulum or a spring-mass)

## Vocabulary

work, energy, joule, kinetic energy, potential energy (gravitational, elastic), mechanical energy, conservation of energy, work-energy theorem, power, watt, efficiency, conservative/non-conservative force, thermal energy, system

## Most-missed ideas

1. Carrying a bag horizontally at constant velocity: the lifting force does **zero work** (force ⟂ displacement).
2. KE ∝ v²: doubling speed **quadruples** KE and quadruples braking distance.
3. Speed from a frictionless drop does **not** depend on mass: v = √(2gh).
4. Spring PE ∝ x²: doubling the stretch quadruples the energy.
5. Friction doesn't "destroy" energy; it converts mechanical energy to thermal energy.
6. PE depends on the chosen zero level; **changes** in PE are what matter.
7. Power vs. energy: a larger power does the same work faster; kWh is a unit of energy, not power.
8. Work can be negative (friction, braking).

## Learning resources

| Type | Resource |
|---|---|
| Simulation | PhET **Energy Skate Park** and **Masses & Springs** (phet.colorado.edu): bar charts, friction on/off, track editor |
| Tutorial | The Physics Classroom, *Work, Energy, and Power* |
| Video | Khan Academy *Work and energy*; Crash Course Physics energy episodes |
| Data | Phone sensor apps (Phyphox) for accelerometer data from a swing or ramp |
| Computational model | Google Sheets, Desmos, or Python (Trinket / Glowscript, vpython) |
| Textbook | OpenStax *Physics* (high school), work and energy |
| Practice | This unit's [practice problems](practice-problems.md) |

## Suggested labs

1. **Energy of a cart on a ramp (E2, E4, E5):** Release a cart from several heights. Measure the speed at the bottom (photogate). Compare ½mv² with mgh and compute the % of energy lost to friction.
2. **Spring launcher (E2, E4):** Compress a spring by x, launch a ball vertically, and measure the height. Compare ½kx² with mgh.
3. **Energy-conversion device (E7, HS-PS3-3):** Design, build, and refine a device converting one form of energy into another within constraints (e.g., a Rube Goldberg machine with at least 3 energy conversions; a falling-weight generator that lights an LED; a solar oven). Calculate the efficiency of each conversion and propose an improvement.
4. **Computational model (HS-PS3-1):** Build a spreadsheet that tracks KE, PE, and thermal energy for a pendulum or spring.

## Real-world applications

- **Transportation:** braking distance and why fuel use rises with speed (drag work ∝ v²); regenerative braking in hybrids/EVs (kinetic → electrical).
- **Roller coasters:** the first hill is the tallest because all later energy comes from there.
- **Renewable energy:** hydroelectric dams (PE → KE → electrical), wind turbines.
- **Home energy:** kWh on a bill; efficiency labels on appliances; LED vs. incandescent.
- **Athletics:** pole vault (KE → elastic PE → gravitational PE), trampolines.
- **Food and fitness:** human power output (about 100 W at rest; 1 hp ≈ 746 W).

## Assessment criteria

- Level 3: identifies the system and the initial and final states, draws an energy bar chart, writes the conservation statement, solves with units, and accounts for thermal energy when friction is present.
- Level 4: solves combined problems (ramp + spring + friction), builds a working computational model, or optimizes a device with measured efficiency.
- See [rubrics](../../docs/assessment-and-rubrics.md).

## Unit checklist

- [ ] Cornell notes: [cornell-notes.md](cornell-notes.md)
- [ ] PhET Energy Skate Park exploration
- [ ] Ramp energy lab
- [ ] Energy-conversion device project
- [ ] Practice problems: [practice-problems.md](practice-problems.md)
- [ ] Quiz ≥ 80%
- [ ] Self-assess E1-E7
- [ ] Unit assessment
