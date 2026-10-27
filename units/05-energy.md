# Unit 5: Work and Energy

## NGSS Learning Goals
- HS-PS3-1: Create a computational model to calculate the change in the energy of one component in a system when the change in energy of the other component(s) and energy flows in and out of the system are known.
- HS-PS3-2: Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as a combination of energy associated with the motions of particles (objects) and energy associated with the relative positions of particles (objects).
- HS-PS3-3: Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy.
- Science & Engineering Practices: Developing and Using Models; Using Mathematics and Computational Thinking
- Crosscutting Concepts: Energy and Matter; Systems and System Models

## Learning Objectives
Students will be able to:

- [ ] Calculate work (W = Fd cosθ) and power (P = W/t).
- [ ] Calculate kinetic energy, gravitational potential energy, and elastic potential energy.
- [ ] Apply the work–energy theorem and conservation of mechanical energy.
- [ ] Account for energy transformations and dissipation (thermal energy) using system models.
- [ ] Build a computational model (spreadsheet/simulation) tracking energy in a system (HS-PS3-1).
- [ ] Design a device that converts one form of energy to another within constraints (HS-PS3-3).

## Key Concepts
- Work W = Fd cosθ (joules)
- Kinetic energy KE = ½mv²
- Gravitational PE = mgh
- Elastic PE = ½kx²
- Work–energy theorem: W_net = ΔKE
- Conservation of energy; energy transfer vs. transformation
- Power P = W/t (watts)
- Efficiency and thermal dissipation

## Cornell Notes — Work and Energy

| Cue / Question | Notes |
|---|---|
| **What is work?** | W = F d cosθ, where θ is the angle between force and displacement. Unit: joule (J = N·m). Force perpendicular to motion does zero work (e.g., carrying a box horizontally); work can be negative (friction). |
| **Kinetic energy?** | KE = ½mv². Scalar, never negative. Doubling speed quadruples KE. |
| **Potential energy?** | Gravitational: PE = mgh (h from a chosen reference level). Elastic: PE = ½kx² (k = spring constant, x = stretch/compression). |
| **Work–energy theorem?** | W_net = ΔKE = ½mv_f² − ½mv_i². Link between forces over distance and change in speed (stopping distance ∝ v²). |
| **Conservation of energy?** | Energy is neither created nor destroyed. With no friction: KE + PE = constant. With friction/drag: some mechanical energy becomes thermal energy, but TOTAL energy is conserved. |
| **What is power?** | P = W/t = Fv. Unit: watt (1 W = 1 J/s). Same work done faster takes more power. |
| **How do I build a model (HS-PS3-1)?** | Define the system boundary, list energy stores (KE, PE, thermal), list inputs/outputs, and make a table or spreadsheet that updates each store; check that the total is constant. |

**Summary (write in your own words):** Work is energy transferred by a force through a displacement. Energy changes form — kinetic, potential, thermal — but the total in a closed system is constant. Use energy bars or tables to account for every transformation.

## Learning Resources
- PhET Simulation — Energy Skate Park; Masses & Springs (phet.colorado.edu)
- The Physics Classroom — Work, Energy, and Power
- Khan Academy — Work and energy
- OpenStax High School Physics — Work, Power, and the Work–Energy Theorem
- Google Sheets / Python notebook — computational energy model

**Lab / investigation:** Energy skate-park and ramp-and-cart lab: measure height and speed, compute KE and PE at several points, graph energy bars, and quantify energy lost to friction. Extension: design and build a device that converts stored energy into motion within cost/size constraints (HS-PS3-3).

## Practice Problems

1. A 50 N force at 60° above horizontal drags a sled 10 m. How much work does it do?
   <details><summary>Answer</summary>W = 50 × 10 × cos60° = 250 J.</details>
2. A 2.0 kg ball is dropped from 5.0 m. How fast is it going just before it lands?
   <details><summary>Answer</summary>v = √(2gh) = √(2×9.8×5.0) ≈ 9.9 m/s.</details>
3. A 1500 kg car at 10 m/s speeds up to 20 m/s. How much net work was done?
   <details><summary>Answer</summary>ΔKE = ½(1500)(400 − 100) = 225,000 J.</details>
4. A roller-coaster car starts at rest at 20 m high (no friction). Find its speed at 5 m high.
   <details><summary>Answer</summary>v = √(2×9.8×15) ≈ 17 m/s.</details>
5. A motor lifts a 600 N load 5.0 m in 15 s. What is its power output?
   <details><summary>Answer</summary>W = 3000 J; P = 3000/15 = 200 W.</details>

## Real-World Applications
- Roller coasters and skate parks
- Hydro, wind, and solar power conversion
- Hybrid/electric vehicle regenerative braking
- Braking distances and speed limits (stopping distance ∝ v²)
- Pole vault and trampolines (elastic energy)
- Appliance energy ratings (power and kWh)

## Most-Missed Questions (interactive version in `site/index.html`)

1. A person carries a heavy box horizontally at constant speed across a room. The work done by the upward force holding the box is:  
   A) Large and positive; B) Large and negative; C) Zero; D) Equal to mgh  
   <details><summary>Answer</summary>**C** — The force is perpendicular to the displacement (θ = 90°), so W = Fd cos90° = 0. Effort and fatigue are not the same as work in physics.</details>
2. If a car's speed doubles, its kinetic energy:  
   A) Doubles; B) Triples; C) Quadruples; D) Stays the same  
   <details><summary>Answer</summary>**C** — KE ∝ v². This is why stopping distance quadruples when speed doubles.</details>
3. A ball is dropped from rest from 5.0 m (no air resistance). Its speed just before impact is closest to:  
   A) 5 m/s; B) 9.9 m/s; C) 25 m/s; D) 49 m/s  
   <details><summary>Answer</summary>**B** — mgh = ½mv² gives v = √(2gh) = √(2 × 9.8 × 5) ≈ 9.9 m/s. Mass cancels.</details>
4. A motor does 600 J of work in 3.0 s. Its power is:  
   A) 1800 W; B) 200 W; C) 600 W; D) 0.005 W  
   <details><summary>Answer</summary>**B** — P = W/t = 600/3 = 200 W. Don't multiply work by time.</details>
5. A spring is stretched twice as far. The elastic potential energy stored becomes:  
   A) The same; B) Twice as much; C) Four times as much; D) Half as much  
   <details><summary>Answer</summary>**C** — PE = ½kx² depends on x², so doubling x quadruples the stored energy.</details>
6. A frictionless roller-coaster car starts from rest at 20 m high. Its speed at 5 m high is closest to:  
   A) 10 m/s; B) 17 m/s; C) 20 m/s; D) 29 m/s  
   <details><summary>Answer</summary>**B** — It has dropped 15 m: v = √(2 × 9.8 × 15) ≈ 17 m/s. Use the HEIGHT DIFFERENCE, not the starting height.</details>
7. A 50 N force acts at 60° above the horizontal while dragging a sled 10 m horizontally. The work done by this force is:  
   A) 500 J; B) 433 J; C) 250 J; D) 0 J  
   <details><summary>Answer</summary>**C** — W = Fd cosθ = 50 × 10 × cos60° = 250 J. Only the component along the displacement does work.</details>
8. A sliding block comes to rest because of friction. What happened to its kinetic energy?  
   A) It was destroyed; B) It became thermal energy of the block and surface; C) It became gravitational potential energy; D) It became momentum  
   <details><summary>Answer</summary>**B** — Energy is conserved. Friction converts mechanical energy into thermal energy (a small temperature rise).</details>

## Assessment Criteria

| Level | Description |
|---|---|
| Mastery (4) | Correct setup, units, and sign conventions; explains reasoning with the relevant law or model; connects to a graph or real-world case. |
| Proficient (3) | Correct method with a minor arithmetic, unit, or sign slip; reasoning mostly complete. |
| Developing (2) | Identifies relevant concepts but applies a formula incorrectly or skips steps; partial reasoning. |
| Beginning (1) | Recalls isolated facts or formulas; cannot yet set up or explain the problem. |

**Mastery check:** score ≥ 80% on the interactive quiz twice (different days), complete the lab report at Proficient or above, and check off every objective above.
