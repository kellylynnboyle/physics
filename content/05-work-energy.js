module.exports = {
  id: "energy",
  num: 5,
  dir: "05-work-energy",
  title: "Work & Energy",
  subtitle: "Physics | Work, Energy, and Power | work, kinetic and potential energy, conservation of energy, power",
  weeks: "Weeks 15–17",
  ngss: [
    { code: "HS-PS3-1", text: "Create a computational model to calculate the change in the energy of one component in a system when the change in energy of the other component(s) and energy flows in and out of the system are known." },
    { code: "HS-PS3-2", text: "Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as a combination of energy associated with the motions of particles (objects) and energy associated with the relative positions of particles (objects)." },
    { code: "HS-PS3-3", text: "Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy." },
  ],
  essentialQuestion: "Where does energy come from, where does it go, and how can we keep track of it?",
  targets: [
    "I can calculate work and decide when a force does zero or negative work.",
    "I can calculate kinetic energy and gravitational potential energy.",
    "I can use the work-energy theorem to connect net work and change in kinetic energy.",
    "I can use conservation of energy to find speed or height, with and without friction.",
    "I can calculate power and tell it apart from work.",
  ],
  keyConcepts: [
    ["Work", "W = F·d·cos θ, in joules (J). Only the part of the force along the displacement does work."],
    ["Kinetic energy", "Energy of motion: KE = ½·m·v²."],
    ["Gravitational potential energy", "Energy of position: PE = m·g·h, measured from a chosen zero height."],
    ["Work-energy theorem", "Net work on an object equals its change in kinetic energy."],
    ["Mechanical energy", "The sum of kinetic and potential energy."],
    ["Conservation of energy", "Energy is never created or destroyed. It moves between objects or changes form."],
    ["Power", "The rate of doing work: P = W ÷ t, in watts (W)."],
  ],
  sections: [
    {
      title: "Work",
      cues: [
        { q: "What is work in physics, and how do you calculate it?", notes: [
          "**Work** is done when a force moves an object through a displacement.",
          "**W = F·d·cos θ**, where θ is the angle between the force and the displacement. Units: **joules** (1 J = 1 N·m).",
          "Worked example: a 50 N push moves a box 6 m in the direction of the push. W = 50 × 6 = **300 J**.",
        ]},
        { q: "When does a force do zero work?", notes: [
          "When there is **no displacement**: pushing on a wall that does not move.",
          "When the force is **perpendicular** to the motion: carrying a box horizontally (your upward force does no work), or the normal force on a sliding object.",
          "Feeling tired is not the test. Work in physics needs force along a displacement.",
        ]},
        { q: "What does negative work mean?", notes: [
          "The force acts **opposite** to the displacement and **removes** energy from the object.",
          "Friction and braking forces do negative work.",
        ]},
        { q: "How much work does a 100 N pull at 60° do over 10 m?", notes: [
          "Only the part of the force along the motion counts: F·cos θ = 100 × cos 60° = 50 N.",
          "W = 50 × 10 = **500 J**.",
          "On a force-displacement graph, work is the **area** under the line.",
        ]},
      ],
      ixl: [["Physics H.1", "Calculate work"], ["Physics H (New)", "Calculate work from force-displacement graphs"]],
    },
    {
      title: "Kinetic and Potential Energy",
      cues: [
        { q: "What is kinetic energy, and what happens to it when speed doubles?", notes: [
          "**Kinetic energy** is energy of motion: **KE = ½·m·v²**.",
          "Because speed is squared, doubling the speed gives **four times** the kinetic energy.",
          "Worked example: a 2 kg object at 3 m/s has KE = ½ × 2 × 3² = **9 J**. At 6 m/s it has 36 J.",
        ]},
        { q: "What is gravitational potential energy?", notes: [
          "Energy stored because of height: **PE = m·g·h**.",
          "h is measured from a zero level that you choose (usually the lowest point in the problem).",
          "Worked example: a 2 kg object 5 m above the floor has PE = 2 × 9.8 × 5 = **98 J**.",
        ]},
        { q: "What does the work-energy theorem say?", notes: [
          "**W_net = ΔKE.** The net work done on an object equals its change in kinetic energy.",
          "Worked example: a 1000 kg car at 20 m/s has KE = ½ × 1000 × 20² = 200,000 J. A friction force of 8000 N stops it in d = 200,000 ÷ 8000 = **25 m**.",
          "At 40 m/s the kinetic energy is four times as large, so the stopping distance is **100 m**.",
        ]},
      ],
      ixl: [["Grade 8 J.1", "Identify changes in gravitational potential energy"], ["Grade 8 J.2", "Use tables and graphs to identify patterns about kinetic energy"]],
    },
    {
      title: "Conservation of Energy",
      cues: [
        { q: "What does the law of conservation of energy say?", notes: [
          "Energy cannot be created or destroyed. It can only be **transferred** between objects or **transformed** from one form to another.",
          "With no friction or air resistance, **mechanical energy** is conserved: KE_i + PE_i = KE_f + PE_f.",
        ]},
        { q: "How fast is a roller coaster moving at the bottom of a 20 m hill if it starts from rest?", notes: [
          "Top: all potential energy. Bottom: all kinetic energy.",
          "m·g·h = ½·m·v². The mass cancels: **v = √(2·g·h)**.",
          "v = √(2 × 9.8 × 20) = √392 = **19.8 m/s**.",
          "The answer does not depend on the mass or on the shape of the track.",
        ]},
        { q: "Do two frictionless ramps of the same height but different steepness give the same final speed?", notes: [
          "**Yes.** The same height means the same potential energy lost, so the same kinetic energy gained.",
          "The steeper ramp gets there in less time, but the speed at the bottom is the same.",
        ]},
        { q: "Where does the energy go when there is friction?", notes: [
          "Friction turns mechanical energy into **thermal energy** (the surfaces warm up). Total energy is still conserved.",
          "Worked example: a 2 kg block starts at rest 5 m up a ramp and reaches the bottom at 8 m/s. PE at top = 98 J. KE at bottom = ½ × 2 × 8² = 64 J. Thermal energy = 98 − 64 = **34 J**.",
        ]},
      ],
      ixl: [["Physics H.2", "Conservation of mechanical energy"], ["Grade 8 J.3", "Explore energy transformations: roller coaster ride"], ["Grade 8 J.4", "Explore energy transformations: bike ride"]],
    },
    {
      title: "Power",
      cues: [
        { q: "What is power, and how is it different from work?", notes: [
          "**Power** is how fast work is done: **P = W ÷ t**. Units: **watts** (1 W = 1 J/s).",
          "Work is the amount of energy transferred. Power is the rate of transfer.",
          "At constant speed, P = F·v.",
        ]},
        { q: "Two students of equal mass climb the same stairs, one in half the time. Who does more work, and who has more power?", notes: [
          "They do the **same work** (same weight lifted through the same height).",
          "The faster student has **twice the power**.",
          "Worked example: a 60 kg student climbs 3 m in 4 s. W = 60 × 9.8 × 3 = 1764 J. P = 1764 ÷ 4 = **441 W**.",
        ]},
      ],
      ixl: [],
      ixlNote: "The live IXL Physics list has no power skill. Use the physicsclassroom.com lesson on power in the Work, Energy, and Power section.",
    },
    {
      title: "Labs and Measurement",
      cues: [
        { q: "In a pendulum or ramp energy lab, what do you compare?", notes: [
          "Measure the release height h and the speed v at the lowest point (photogate or video).",
          "Compare PE at the top, m·g·h, with KE at the bottom, ½·m·v².",
          "They should be close. The difference is energy transferred to thermal energy by friction and air resistance.",
        ]},
        { q: "How do you measure your own power on a staircase?", notes: [
          "Measure the vertical height of the stairs (not the slanted length), your mass, and your time.",
          "P = m·g·h ÷ t.",
          "Independent variable: climbing time. Dependent variable: power. Controlled: height and mass.",
        ]},
        { q: "How can an energy bar chart model a system?", notes: [
          "Draw bars for KE, PE, and thermal energy at each moment (top, middle, bottom).",
          "The total height of the bars stays the same at every moment. This is the model asked for in HS-PS3-2.",
          "A spreadsheet that calculates KE and PE at each height is the computational model asked for in HS-PS3-1.",
        ]},
      ],
      ixl: [["Physics A.2", "Identify independent and dependent variables"], ["Physics B.4", "Calculations with significant figures"], ["Grade 8 KK.6", "Abbreviate force, energy, and electricity units"]],
    },
  ],
  mnemonics: [
    ["Work needs force along a displacement", "No motion, or force at 90° to the motion, means zero work.", "Deciding whether work is done."],
    ["Speed is squared", "Double the speed, four times the kinetic energy and four times the stopping distance.", "Any \"what if the speed doubles\" question."],
    ["Energy before = energy after", "Write the total energy at the start and at the end and set them equal; add a thermal term if there is friction.", "Every conservation problem."],
    ["Height sets speed", "With no friction, final speed depends only on the height dropped: v = √(2gh).", "Ramps, pendulums, roller coasters."],
    ["Work is how much, power is how fast", "Same work in less time is more power.", "Telling work and power apart."],
  ],
  summary: "Work is the transfer of energy by a force acting along a displacement, W = F·d·cos θ. Doing net work on an object changes its kinetic energy, ½·m·v². Lifting an object stores gravitational potential energy, m·g·h. Energy is never created or destroyed, so the total before equals the total after: without friction, kinetic and potential energy trade back and forth while their sum stays constant, and with friction the missing mechanical energy shows up as thermal energy. Because energy depends on height and on speed squared, it often answers questions about speed without needing time or forces. Power is the rate at which work is done.",
  visuals: [
    { file: "en-work.png", caption: "A force at an angle to the displacement: only the component along the motion does work.", rule: "W = F·d·cos θ" },
    { file: "en-coaster.png", caption: "A cart on a frictionless track: potential energy is greatest at the top and kinetic energy is greatest at the bottom.", rule: "m·g·h + ½·m·v² = constant" },
    { file: "en-bars.png", caption: "Energy bar charts at the top, halfway, and bottom of a fall: the bars change but the total stays the same.", rule: "KE + PE = total energy" },
    { file: "en-fd.png", caption: "Force-displacement graph: the shaded area under the line is the work done.", rule: "work = area under F vs. d" },
  ],
  quiz: [
    { q: "You carry a heavy box across a level room at constant velocity. How much work does your upward lifting force do on the box?", choices: ["A lot, because the box is heavy", "Zero", "It depends on how far you walk", "A negative amount"], answer: 1, misconception: "Any effort or tiredness counts as work.", why: "Your force is upward and the displacement is horizontal. A force perpendicular to the displacement does zero work (cos 90° = 0)." },
    { q: "A car's speed doubles. What happens to its kinetic energy?", choices: ["It doubles", "It triples", "It becomes four times as large", "It stays the same"], answer: 2, misconception: "Kinetic energy is proportional to speed.", why: "KE = ½·m·v². Doubling v multiplies v² by four." },
    { q: "You push as hard as you can on a brick wall for one minute and it does not move. How much work did you do on the wall?", choices: ["Zero", "Force × time", "Force × your height", "It depends on how tired you are"], answer: 0, misconception: "Force alone is work.", why: "Work needs a displacement. With d = 0, W = 0, no matter how large the force." },
    { q: "Two frictionless ramps have the same height. One is steep and one is gentle. A cart is released from rest at the top of each. Compare their speeds at the bottom.", choices: ["The steep ramp gives a greater speed", "The gentle ramp gives a greater speed", "The speeds are the same", "It depends on the cart's mass"], answer: 2, misconception: "A steeper ramp gives a faster final speed.", why: "Both carts lose the same potential energy, m·g·h, so both gain the same kinetic energy. The steep ramp is quicker but not faster at the bottom." },
    { q: "A ball is dropped from a height of 5 m. Ignoring air resistance, about how fast is it moving just before it lands?", choices: ["5 m/s", "9.9 m/s", "49 m/s", "It depends on the ball's mass"], answer: 1, misconception: "Heavier objects arrive faster, or speed is proportional to height.", why: "m·g·h = ½·m·v², so v = √(2·g·h) = √(2 × 9.8 × 5) = 9.9 m/s. The mass cancels." },
    { q: "A pendulum swings back and forth. Where is its kinetic energy greatest?", choices: ["At the highest points of the swing", "At the lowest point", "Halfway up", "It is the same everywhere"], answer: 1, misconception: "Energy is greatest where the object is highest.", why: "At the lowest point the potential energy is smallest, so the kinetic energy (and speed) is greatest. At the highest points the bob is momentarily at rest." },
    { q: "A box slides across a rough floor and stops. What happened to its kinetic energy?", choices: ["It was destroyed", "It became thermal energy in the box and floor", "It became potential energy", "It is still kinetic energy"], answer: 1, misconception: "Energy is used up or disappears.", why: "Energy is conserved. Friction transformed the kinetic energy into thermal energy; the surfaces are slightly warmer." },
    { q: "Two students with the same mass climb the same staircase. Ana takes 4 s and Ben takes 8 s. Which statement is correct?", choices: ["Ana does more work", "Ben does more work", "They do the same work, and Ana has more power", "They do the same work and have the same power"], answer: 2, misconception: "Doing something faster means doing more work.", why: "Work = m·g·h is the same for both. Power = work ÷ time, so Ana, with half the time, has twice the power." },
    { q: "A car's speed doubles. If the braking force is the same, what happens to its stopping distance?", choices: ["It doubles", "It becomes four times as long", "It stays the same", "It is halved"], answer: 1, misconception: "Stopping distance is proportional to speed.", why: "The brakes must remove all the kinetic energy: F·d = ½·m·v². Four times the kinetic energy needs four times the distance." },
    { q: "A 100 N force pulls a sled 10 m along level ground. The rope is angled 60° above horizontal. How much work is done?", choices: ["1000 J", "866 J", "500 J", "0 J"], answer: 2, misconception: "Work is always force × distance, whatever the angle.", why: "W = F·d·cos θ = 100 × 10 × cos 60° = 500 J. Only the horizontal part of the pull does work." },
  ],
  practice: [
    ["Foundation", "A 50 N force pushes a box 6 m in the direction of the force. How much work is done?", "W = 50 × 6 = 300 J"],
    ["Foundation", "Find the kinetic energy of a 2 kg object moving at 3 m/s and its potential energy 5 m above the floor.", "KE = 9 J. PE = 2 × 9.8 × 5 = 98 J."],
    ["Proficient", "A 500 kg roller coaster car starts from rest at the top of a 20 m hill. Ignoring friction, find its speed at the bottom.", "v = √(2 × 9.8 × 20) = 19.8 m/s."],
    ["Proficient", "A 60 kg student climbs a 3 m staircase in 4 s. Find the work done and the power.", "W = 1764 J. P = 441 W."],
    ["Challenge", "A 1000 kg car moving at 20 m/s brakes with a friction force of 8000 N. Find the stopping distance. What is it at 40 m/s?", "d = 200,000 ÷ 8000 = 25 m. At 40 m/s: 100 m."],
    ["Challenge", "A 2 kg block starts from rest 5 m above the ground and slides down a rough ramp, arriving at 8 m/s. How much energy became thermal?", "PE = 98 J, KE = 64 J, thermal = 34 J."],
  ],
  resources: [
    ["The Physics Classroom: Work, Energy, and Power", "https://www.physicsclassroom.com/class/energy", "Lessons on work, the work-energy relationship, bar charts, and power."],
    ["PhET: Energy Skate Park", "https://phet.colorado.edu/en/simulations/energy-skate-park", "Watch live energy bar charts as a skater moves on a track, with and without friction."],
    ["Khan Academy: High school physics", "https://www.khanacademy.org/science/highschool-physics", "Videos and practice on work and energy."],
    ["OpenStax Physics (high school)", "https://openstax.org/details/books/physics", "Free textbook; see the chapter on work, energy, and simple machines."],
  ],
  realWorld: [
    "Roller coasters: the first hill is the tallest because no energy is added after the lift.",
    "Hydroelectric dams: falling water's potential energy becomes kinetic, then electrical energy.",
    "Regenerative braking in electric cars, which recovers kinetic energy instead of turning it all into heat.",
    "Highway speed and crash severity: a crash at 60 mph involves four times the energy of one at 30 mph.",
  ],
  criteria: [
    ["Calculate work and power", "Treats any effort as work", "Calculates W = F·d but ignores the angle or sign", "Calculates work (including zero and negative work) and power with units", "Finds work from a force-displacement graph and links it to energy change"],
    ["Use kinetic and potential energy", "Cannot tell KE from PE", "Calculates each but forgets to square the speed or choose a zero height", "Calculates KE and PE and applies the work-energy theorem", "Predicts how energy and stopping distance scale when speed or height changes"],
    ["Apply conservation of energy", "Says energy is used up", "Writes energy before = energy after but omits a term", "Solves for speed or height, including thermal energy from friction", "Builds a bar-chart or spreadsheet model of a system (HS-PS3-1, HS-PS3-2)"],
  ],
};
