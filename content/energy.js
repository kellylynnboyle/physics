module.exports = {
  id: "energy",
  number: 5,
  title: "Work & Energy",
  tagline: "Conservation of energy and its transformations",
  standards: [
    { code: "HS-PS3-1", note: "Create a computational model to calculate the change in the energy of one component of a system when the changes in energy of the other components and the energy flows are known." },
    { code: "HS-PS3-2", note: "Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as a combination of energy associated with the motion of particles and energy associated with the relative positions of particles." },
    { code: "HS-PS3-3", note: "Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy." }
  ],
  practices: ["Using Mathematics and Computational Thinking", "Developing and Using Models", "Constructing Explanations and Designing Solutions"],
  crosscutting: ["Energy and Matter", "Systems and System Models"],
  bigIdea: "Energy is never created or destroyed. It is transferred by work (and heat) and transformed among kinetic, potential, and thermal forms.",
  concepts: [
    { term: "Work", def: "W = Fd cos θ, where θ is the angle between the force and the displacement. Unit: joule (J = N·m). Force perpendicular to motion does no work." },
    { term: "Kinetic energy", def: "KE = ½mv². Depends on the square of speed." },
    { term: "Gravitational potential energy", def: "PE_g = mgh, relative to a chosen reference height." },
    { term: "Elastic potential energy", def: "PE_s = ½kx² for a spring with constant k stretched or compressed by x." },
    { term: "Work–energy theorem", def: "W_net = ΔKE = ½mv_f² − ½mv_i²." },
    { term: "Conservation of energy", def: "In an isolated system, total energy is constant: KE + PE + thermal = constant. With friction, mechanical energy decreases and thermal energy increases by the same amount." },
    { term: "Power", def: "P = W/t = Fv. Unit: watt (W = J/s). Same work in less time means more power." },
    { term: "Efficiency", def: "efficiency = useful energy out / total energy in. Always less than 100% in real devices." }
  ],
  objectives: [
    { id: "E1", verb: "Calculate", text: "I can calculate the work done by a force, including when the force is at an angle.", criteria: "Applies W = Fd cos θ; recognizes zero work when F ⟂ d." },
    { id: "E2", verb: "Calculate", text: "I can calculate kinetic, gravitational potential, and elastic potential energy.", criteria: "Correct formulas, units in joules." },
    { id: "E3", verb: "Apply", text: "I can use conservation of mechanical energy to find speeds and heights.", criteria: "Sets up KE + PE at two points; solves; checks reasonableness." },
    { id: "E4", verb: "Model", text: "I can model energy transfers using bar charts or system diagrams, including thermal energy from friction.", criteria: "Bars balance; energy flows are labeled (HS-PS3-1, PS3-2)." },
    { id: "E5", verb: "Analyze", text: "I can use the work–energy theorem and power to analyze real situations such as braking distances.", criteria: "Relates W_net to ΔKE and computes P = W/t." },
    { id: "E6", verb: "Design", text: "I can design and evaluate a device that converts energy between forms and calculate its efficiency.", criteria: "Identifies input/output energy; measures or estimates efficiency (HS-PS3-3)." }
  ],
  cornell: {
    topic: "Work, Energy, and Power",
    cues: [
      { cue: "What is work?", notes: "W = Fd cos θ. Force must cause displacement along its direction. Carrying a box horizontally: lifting force ⟂ motion → W = 0. Holding a weight still: d = 0 → W = 0." },
      { cue: "What is kinetic energy?", notes: "KE = ½mv². Double the speed → 4× the KE. Always positive (a scalar)." },
      { cue: "What is gravitational PE?", notes: "PE = mgh above a chosen zero level. Only height changes matter, not the path taken." },
      { cue: "What is elastic PE?", notes: "PE = ½kx². Double the stretch → 4× the energy." },
      { cue: "What is the work–energy theorem?", notes: "W_net = ΔKE. Positive net work speeds an object up; negative net work (friction, braking) slows it down." },
      { cue: "What is conservation of energy?", notes: "Total energy of an isolated system is constant. Frictionless: KE_i + PE_i = KE_f + PE_f. With friction: KE_i + PE_i = KE_f + PE_f + thermal." },
      { cue: "What is power?", notes: "Rate of doing work: P = W/t = Fv. 1 W = 1 J/s. Same work, half the time → double the power." },
      { cue: "What is efficiency?", notes: "Useful output / total input. A car engine is roughly 25–30% efficient; the rest becomes heat." },
      { cue: "How do I solve energy problems?", notes: "1) Pick initial and final states. 2) List all energies at each. 3) Include work by non-conservative forces. 4) Solve for the unknown. Energy methods skip the path and time." }
    ],
    summary: "Work is the transfer of energy by a force acting through a distance. Kinetic energy (½mv²) is energy of motion; potential energy (mgh, ½kx²) is energy of position or configuration. The work–energy theorem links net work to change in kinetic energy. Energy is conserved overall, but friction transforms mechanical energy into thermal energy. Power measures how fast energy is transferred and efficiency compares useful output with input."
  },
  quiz: [
    { q: "You carry a heavy box horizontally at constant speed across a room. How much work does the upward force of your arms do on the box?", options: ["Equal to its weight times the distance", "Zero", "Equal to its kinetic energy", "Negative"], answer: 1, misconception: "Effort equals work", explain: "W = Fd cos θ. The lifting force is perpendicular to the displacement (θ = 90°), so cos θ = 0 and W = 0. You may feel tired, but physically no work is done on the box." },
    { q: "A car doubles its speed from 15 m/s to 30 m/s. Its kinetic energy…", options: ["doubles", "triples", "quadruples", "stays the same"], answer: 2, misconception: "KE is proportional to speed", explain: "KE = ½mv² grows with v². Doubling v multiplies KE by 4." },
    { q: "Two frictionless ramps have the same height but different lengths. A block slides from rest down each. Compare the speeds at the bottom.", options: ["Faster on the steeper (shorter) ramp", "Faster on the longer ramp", "The speeds are equal", "Cannot be determined"], answer: 2, misconception: "Path or steepness matters for final speed", explain: "Energy conservation: mgh = ½mv² → v = √(2gh). It depends only on height, not on the path. (The time taken is different.)" },
    { q: "Two students lift identical boxes to the same shelf. Student A takes 2 s; Student B takes 4 s. Which statement is correct?", options: ["A does more work", "B does more work", "Same work, but A has more power", "Same work and same power"], answer: 2, misconception: "Confusing work and power", explain: "Both do W = mgh. Power = W/t, so the one who takes less time delivers twice the power." },
    { q: "A sliding block comes to rest because of friction. What happened to its kinetic energy?", options: ["It was destroyed", "It became thermal energy", "It became gravitational PE", "It was stored in the block's mass"], answer: 1, misconception: "Energy is lost or used up", explain: "Energy is conserved. Friction converts kinetic energy into thermal energy of the block and surface." },
    { q: "A spring is compressed 2 cm and stores 1 J. How much energy is stored if it is compressed 4 cm?", options: ["2 J", "4 J", "8 J", "1 J"], answer: 1, misconception: "Linear instead of quadratic relationship", explain: "PE = ½kx². Doubling x quadruples the stored energy: 4 J." },
    { q: "A car going 20 m/s skids 40 m to a stop on dry pavement. At 40 m/s (same road), the skid distance is about…", options: ["80 m", "120 m", "160 m", "40 m"], answer: 2, misconception: "Stopping distance is proportional to speed", explain: "Friction does work −fd = −KE_i. KE quadruples when v doubles, so the distance quadruples: 160 m." },
    { q: "A 2.0 kg ball is thrown straight up at 10 m/s. Ignoring air resistance, what maximum height does it reach?", options: ["10 m", "5.1 m", "20 m", "2.5 m"], answer: 1, misconception: "Forgetting to cancel mass", explain: "½mv² = mgh → h = v²/(2g) = 100/19.6 ≈ 5.1 m. Mass cancels." }
  ],
  practice: [
    { problem: "A person pushes a crate 5.0 m with a 20 N horizontal force. Then a different person pulls it 5.0 m with a 20 N force at 60° above the horizontal. Find the work in each case.", answer: "Push: W = 20 × 5.0 = 100 J. Pull: W = 20 × 5.0 × cos 60° = 50 J." },
    { problem: "Find the kinetic energy of a 1000 kg car at 25 m/s. What happens to the KE if it speeds up to 50 m/s?", answer: "KE = ½(1000)(25)² = 3.1 × 10⁵ J (312,500 J). At 50 m/s it is 4× larger, 1.25 × 10⁶ J." },
    { problem: "A roller-coaster car starts from rest at the top of a 30 m hill. Ignoring friction, what is its speed at the bottom?", answer: "v = √(2gh) = √(2 × 9.8 × 30) ≈ 24 m/s." },
    { problem: "A 50 kg student climbs a 3.0 m staircase in 5.0 s. Find the work done against gravity and the average power.", answer: "W = mgh = 50 × 9.8 × 3.0 = 1.5 × 10³ J (1470 J). P = 1470/5.0 ≈ 290 W." },
    { problem: "A spring (k = 200 N/m) is compressed 0.10 m and used to launch a 0.050 kg block along a frictionless surface. Find the stored energy and launch speed.", answer: "PE = ½(200)(0.10)² = 1.0 J. v = √(2 × 1.0/0.050) ≈ 6.3 m/s." },
    { problem: "A 1000 kg car traveling 15 m/s brakes to a stop with a constant friction force of 7500 N. Find the stopping distance.", answer: "W = −fd = −ΔKE → d = ½(1000)(15²)/7500 = 15 m." }
  ],
  resources: [
    { name: "PhET: Energy Skate Park", type: "Simulation", url: "https://phet.colorado.edu", use: "Bar charts of KE, PE, and thermal energy; add friction." },
    { name: "PhET: Masses and Springs", type: "Simulation", url: "https://phet.colorado.edu", use: "Elastic and gravitational PE with oscillating masses." },
    { name: "The Physics Classroom: Work, Energy, and Power", type: "Tutorial + practice", url: "https://www.physicsclassroom.com", use: "Concept builders and calculators." },
    { name: "Khan Academy: Work and energy", type: "Video + exercises", url: "https://www.khanacademy.org", use: "Worked examples." },
    { name: "OpenStax High School Physics, Ch. 9", type: "Free textbook", url: "https://openstax.org", use: "Reading and problems." },
    { name: "Lab idea: Ramp-and-cart energy bars; stair-climb power lab", type: "Hands-on lab", url: "", use: "Measure h, v, and t to verify conservation and compute power." },
    { name: "Engineering project: Rube Goldberg or energy-conversion device", type: "Design project", url: "", use: "Meets HS-PS3-3: build a device, measure efficiency, redesign." }
  ],
  applications: [
    "Renewable energy: hydroelectric dams convert gravitational PE to electricity; wind turbines convert KE.",
    "Transportation: regenerative braking in hybrid and electric vehicles recovers KE; speed limits relate to KE ∝ v².",
    "Amusement parks: roller coaster hill heights are set by energy conservation.",
    "Human body and food: Calories measure chemical energy; power output explains why sprinting can't be sustained."
  ]
};
