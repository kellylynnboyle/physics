(globalThis.UNITS = globalThis.UNITS || []).push({
  id: "work-energy",
  num: 5,
  title: "Work & Energy",
  subtitle: "Work, energy conservation, and power",
  pacing: "Weeks 15–18",
  essentialQuestion: "Where does energy go when things move, speed up, or stop, and how can we keep track of it?",
  ngss: ["HS-PS3-1", "HS-PS3-2", "HS-PS3-3", "CCC: Energy and Matter", "CCC: Systems and System Models"],
  ngssNote: "HS-PS3-1: Create a computational model to calculate the change in the energy of one component in a system when the change in energy of the other component(s) and energy flows in and out of the system are known. HS-PS3-2: Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as a combination of energy associated with the motions of particles (objects) and energy associated with the relative position of particles (objects). HS-PS3-3: Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy.",
  concepts: [
    ["Work", "Energy transferred by a force acting through a distance: W = Fd cos θ. Units: joules (J)."],
    ["Kinetic energy", "Energy of motion: KE = ½mv²."],
    ["Potential energy", "Stored energy of position: gravitational PE = mgh; elastic PE = ½kx²."],
    ["Work–energy theorem", "The net work done on an object equals its change in kinetic energy."],
    ["Conservation of energy", "Energy is never created or destroyed. Without friction, KE + PE stays constant; with friction, some becomes thermal energy."],
    ["Power", "The rate of doing work or transferring energy: P = W ÷ t. Units: watts (W)."]
  ],
  objectives: [
    ["E1", "Calculate the work done by a force and identify when a force does zero work."],
    ["E2", "Calculate kinetic energy and gravitational potential energy and describe how each changes when speed, mass, or height changes."],
    ["E3", "Use the work–energy theorem to relate net work to a change in speed."],
    ["E4", "Apply conservation of energy to find speeds and heights, and account for energy transferred to thermal energy by friction (HS-PS3-1, HS-PS3-2)."],
    ["E5", "Calculate power and compare the power of different energy transfers."],
    ["E6", "Design, build, and refine a device that converts one form of energy to another within given constraints (HS-PS3-3)."]
  ],
  notes: [
    {
      section: "1. Work",
      rows: [
        ["What is work in physics, and how do I calculate it?", [
          "**Work** is energy transferred when a force moves an object: **W = Fd cos θ**, where θ is the angle between the force and the displacement. Units: joule (1 J = 1 N·m).",
          "Only the part of the force **along the direction of motion** does work.",
          "**Worked example:** You pull a sled 10 m with a 50 N force at 60° above the horizontal. W = 50 × 10 × cos 60° = **250 J**."
        ]],
        ["When does a force do zero work?", [
          "When there is **no displacement** (holding a heavy box still), or",
          "when the force is **perpendicular** to the motion (carrying a box horizontally: the upward force does no work because cos 90° = 0).",
          "Feeling tired does not mean work was done on the object."
        ]],
        ["Can work be negative?", [
          "**Yes.** A force opposite to the motion (such as friction or braking) does negative work and removes energy from the object."
        ]]
      ],
      ixl: [["Physics H.1", "Calculate work"], ["Physics H (new)", "Calculate work from force-displacement graphs"]]
    },
    {
      section: "2. Kinetic Energy and the Work–Energy Theorem",
      rows: [
        ["What is kinetic energy, and how does it depend on speed?", [
          "**KE = ½mv²**. Units: joules.",
          "It depends on speed **squared**: double the speed gives **four times** the kinetic energy.",
          "**Worked example:** A 1000 kg car at 20 m/s has KE = ½(1000)(20²) = **200 000 J**. At 40 m/s it has 800 000 J."
        ]],
        ["What does the work–energy theorem say?", [
          "**W_net = ΔKE.** The net work done on an object equals its change in kinetic energy.",
          "**Worked example:** The same car (200 000 J) brakes with a force of 8000 N. Fd = 200 000 → d = 200 000 ÷ 8000 = **25 m**.",
          "At double the speed the car has four times the energy, so it needs four times the distance (100 m)."
        ]]
      ],
      ixl: [["Physics H.1", "Calculate work"]]
    },
    {
      section: "3. Potential Energy",
      rows: [
        ["What is gravitational potential energy, and how do I calculate it?", [
          "Energy stored because of height: **PE = mgh**, where h is measured from a chosen **reference level**.",
          "**Worked example:** A 2.0 kg book lifted 1.5 m gains PE = 2.0 × 9.8 × 1.5 = **29.4 J**. That equals the work done lifting it."
        ]],
        ["What is elastic potential energy?", [
          "Energy stored in a stretched or compressed spring: **PE = ½kx²**, where k is the spring constant (N/m) and x is the stretch or compression (m)."
        ]]
      ],
      ixl: [["Physics H.2", "Conservation of mechanical energy"]]
    },
    {
      section: "4. Conservation of Energy",
      rows: [
        ["What does the law of conservation of energy say?", [
          "Energy cannot be created or destroyed. It only **transfers** between objects or **changes form**.",
          "With no friction or air resistance, **mechanical energy** is conserved: **KE + PE (start) = KE + PE (end)**."
        ]],
        ["How fast is a roller coaster moving at the bottom of a 20 m hill if it starts from rest (no friction)?", [
          "**Start:** all PE = mgh. **End:** all KE = ½mv².",
          "mgh = ½mv² → v = √(2gh) = √(2 × 9.8 × 20) = **19.8 m/s**.",
          "The **mass cancels**, so every coaster car reaches the same speed. The shape of the track does not matter either, only the height change."
        ]],
        ["Where does the energy go when friction is present?", [
          "It becomes **thermal energy** (the surfaces warm up). It is not destroyed.",
          "**Worked example:** A 50 kg skater starts from rest at the top of a 5.0 m ramp and reaches the bottom at 8.0 m/s. Start: PE = 50 × 9.8 × 5.0 = 2450 J. End: KE = ½(50)(8.0²) = 1600 J. Thermal energy = 2450 − 1600 = **850 J**."
        ]]
      ],
      ixl: [["Physics H.2", "Conservation of mechanical energy"]]
    },
    {
      section: "5. Power",
      rows: [
        ["What is power, and how do I calculate it?", [
          "**Power** is how fast work is done or energy is transferred: **P = W ÷ t**. Units: watt (1 W = 1 J/s).",
          "For an object moving at constant speed, P = Fv also works."
        ]],
        ["Two students of equal mass climb the same stairs, one faster. How do their work and power compare?", [
          "They do the **same work** (same weight, same height). The faster student has **more power** because the work is done in less time.",
          "**Worked example:** A 60 kg student climbs 3.0 m in 4.0 s. W = 60 × 9.8 × 3.0 = 1764 J. P = 1764 ÷ 4.0 = **441 W**."
        ]]
      ],
      ixl: [],
      ixlNote: "IXL Physics has no power skill. Use The Physics Classroom Concept Builders (Work and Energy: Power)."
    }
  ],
  tricks: [
    ["Energy bar charts (LOL diagrams)", "Draw bars for KE, PE, and thermal energy at the start and end. The total height of the bars must match."],
    ["Speed squared", "Kinetic energy and stopping distance both go with v². Double the speed means four times as much."],
    ["Perpendicular forces do no work", "If the force is at 90° to the motion, the work is zero."],
    ["Start energy = end energy", "Write the total energy at the start, the total at the end, and include thermal energy if there is friction."]
  ],
  summary: "Work is the transfer of energy by a force acting through a distance. Kinetic energy depends on mass and speed squared, and potential energy depends on position. The net work on an object changes its kinetic energy, and the total energy of a system is always conserved: without friction, kinetic and potential energy trade back and forth, and with friction some becomes thermal energy. Power measures how quickly energy is transferred.",
  quiz: [
    {
      q: "You hold a heavy box perfectly still above your head for one minute. How much work do you do on the box?",
      choices: ["Zero", "Force × 60 seconds", "Its weight × its height", "It depends on how tired you get"],
      why: "Work requires displacement. The box does not move, so W = Fd = 0, even though your muscles use energy.",
      trap: "Equating effort or tiredness with work."
    },
    {
      q: "A car's speed doubles. What happens to its kinetic energy?",
      choices: ["It is four times as large", "It doubles", "It stays the same", "It is half as large"],
      why: "KE = ½mv². Doubling v multiplies v² by 4.",
      trap: "Treating kinetic energy as proportional to speed."
    },
    {
      q: "One ball is dropped from a height h. An identical ball slides from the same height down a frictionless ramp. Compare their speeds at the bottom.",
      choices: ["They are the same", "The dropped ball is faster", "The sliding ball is faster", "It depends on the ramp's angle"],
      why: "Both lose the same potential energy mgh, so both gain the same kinetic energy. Without friction the path does not matter. (The ramp takes longer, but the final speed matches.)",
      trap: "Thinking the path or the travel time changes the final speed."
    },
    {
      q: "You carry a backpack across a level floor at constant speed. How much work does your upward supporting force do on the backpack?",
      choices: ["Zero", "Weight × distance walked", "Half of weight × distance walked", "It depends on your walking speed"],
      why: "The supporting force is vertical and the displacement is horizontal. A force perpendicular to the motion does no work (cos 90° = 0).",
      trap: "Multiplying force by distance without checking their directions."
    },
    {
      q: "A pendulum swings back and forth without friction. At the lowest point of its swing:",
      choices: ["Kinetic energy is greatest and potential energy is least", "Potential energy is greatest and kinetic energy is least", "Kinetic and potential energy are equal", "Its total energy is zero"],
      why: "The lowest point has the least height (least PE) and the greatest speed (most KE). The total stays constant.",
      trap: "Mixing up where speed and height are greatest."
    },
    {
      q: "Two students with the same mass climb the same staircase. Ana takes 5 s and Ben takes 10 s. Compare them.",
      choices: ["Same work; Ana has more power", "Ana does more work and has more power", "Same work and same power", "Ben does more work because he takes longer"],
      why: "Work = mgh is the same for both. Power = work ÷ time, so the faster climber has twice the power.",
      trap: "Confusing work with power."
    },
    {
      q: "A box sliding across a rough floor slows to a stop. What happened to its kinetic energy?",
      choices: ["It became thermal energy in the box and floor", "It was destroyed by friction", "It became gravitational potential energy", "It is still in the box as stored kinetic energy"],
      why: "Energy is never destroyed. Friction transfers the kinetic energy to thermal energy, warming the surfaces.",
      trap: "Believing energy is used up or disappears."
    },
    {
      q: "A 2 kg rock is dropped from 10 m. Ignoring air resistance, about how fast is it moving just before it hits the ground?",
      choices: ["14 m/s", "196 m/s", "9.8 m/s", "20 m/s"],
      why: "mgh = ½mv² gives v = √(2gh) = √(2 × 9.8 × 10) = √196 = 14 m/s. The mass cancels.",
      trap: "Stopping at the energy (196 J) or forgetting the square root."
    }
  ],
  problems: [
    ["Warm-up", "How much work is done pushing a crate 15 m with a 200 N horizontal force?", "W = 200 × 15 = 3000 J."],
    ["Warm-up", "Find the kinetic energy of a 0.145 kg baseball moving at 40 m/s.", "KE = ½(0.145)(40²) = 116 J."],
    ["Core", "A 55 kg diver stands on a 10 m platform. Find her potential energy relative to the water and her speed when she reaches the water.", "PE = 55 × 9.8 × 10 = 5390 J. v = √(2 × 9.8 × 10) = 14 m/s."],
    ["Core", "A roller coaster moves at 30 m/s at the bottom of a hill. Ignoring friction, what is the highest hill it can climb?", "½mv² = mgh → h = 30² ÷ (2 × 9.8) = 45.9 m."],
    ["Core", "A motor lifts a 500 kg load 12 m in 20 s. Find the motor's power output.", "W = 500 × 9.8 × 12 = 58 800 J. P = 58 800 ÷ 20 = 2940 W."],
    ["Challenge", "A 0.50 kg block sliding at 4.0 m/s moves onto a rough floor with μ = 0.20. How far does it slide before stopping?", "Friction force = 0.20 × 0.50 × 9.8 = 0.98 N. KE = ½(0.50)(4.0²) = 4.0 J. d = 4.0 ÷ 0.98 = 4.1 m."]
  ],
  labs: [
    ["Energy skate park investigation (HS-PS3-2)", "Use the PhET simulation or a marble track to track KE, PE, and thermal energy at several points. Draw energy bar charts for each point."],
    ["Stair-climb power lab", "Measure your mass, the height of a staircase, and your climbing time. Calculate work and power. Independent variable: climbing time. Dependent variable: power."],
    ["Spreadsheet energy model (HS-PS3-1)", "Build a spreadsheet that calculates a falling or rolling object's PE, KE, and thermal energy at each height from mass, height, and measured speed."],
    ["Energy conversion device (HS-PS3-3)", "Design, build, and refine a device (mousetrap car, rubber-band launcher, or mini wind turbine) that converts one form of energy to another within given constraints, and estimate its efficiency."]
  ],
  resources: [
    ["The Physics Classroom: Work, Energy, and Power", "https://www.physicsclassroom.com/class/energy", "Tutorial with energy bar chart practice."],
    ["PhET: Energy Skate Park", "https://phet.colorado.edu/en/simulations/energy-skate-park", "Watch energy bar and pie charts change as a skater moves."],
    ["OpenStax Physics (high school), Ch. 9", "https://openstax.org/details/books/physics", "Free textbook chapter on work, energy, and simple machines."],
    ["Khan Academy: Work and energy", "https://www.khanacademy.org/science/physics/work-and-energy", "Videos and practice sets."],
    ["IXL Physics H.1–H.2", "https://www.ixl.com/science/physics", "Skill practice; aim for SmartScore 80+."]
  ],
  applications: [
    "Roller coasters: the first hill must be the tallest because friction removes mechanical energy.",
    "Regenerative braking in hybrid and electric cars: kinetic energy stored instead of turned to heat.",
    "Hydroelectric dams: potential energy of water converted to electrical energy.",
    "Why highway crashes are far more destructive: kinetic energy grows with speed squared."
  ]
});
