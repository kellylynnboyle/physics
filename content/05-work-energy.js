// Unit 5: Work and Energy.
module.exports = {
  num: 5,
  slug: "05-work-energy",
  title: "Work and Energy",
  short: "Work, Energy, and Power",
  subtitle: "Physics | Semester 1, Unit 5 | Work, kinetic and potential energy, conservation of energy, power",
  pacing: "Weeks 15–18",
  ngss: ["HS-PS3-1", "HS-PS3-2", "HS-PS3-3", "SEP: Developing and Using Models", "SEP: Using Mathematics and Computational Thinking", "CCC: Energy and Matter"],
  essentialQuestion: "Where does energy go when an object speeds up, slows down, rises, or falls?",
  targets: [
    "I can calculate work and tell when a force does no work.",
    "I can calculate kinetic energy and gravitational potential energy.",
    "I can use conservation of energy to predict speeds and heights.",
    "I can account for the energy that friction turns into thermal energy.",
    "I can calculate power.",
    "I can design a device that converts energy from one form to another.",
  ],
  concepts: [
    "Work: W = Fd cos θ, and the cases where work is zero or negative",
    "Kinetic energy (½mv²) and gravitational potential energy (mgh)",
    "The work-energy theorem: W_net = ΔKE",
    "Conservation of energy and mechanical energy",
    "Energy transformed to thermal energy by friction",
    "Power: P = W / t",
  ],
  sections: [
    {
      title: "1. Work",
      ixl: [["Physics H.1", "Calculate work"], ["Physics H (new, no number yet)", "Calculate work from force-displacement graphs"]],
      rows: [
        {
          cue: "What is work, and what are its units?",
          notes: [
            "**Work** is done when a force moves an object: **W = Fd cos θ**, where θ is the angle between the force and the displacement.",
            "Units: **joule (J)**. 1 J = 1 N·m.",
            "Worked example: a 50 N push moves a box 4 m in the direction of the push. W = 50 × 4 = **200 J**.",
          ],
        },
        {
          cue: "When does a force do no work?",
          notes: [
            "When there is **no displacement** (pushing on a wall that does not move).",
            "When the force is **perpendicular** to the motion (the upward force on a book you carry across a room at constant velocity).",
            "Feeling tired is not the same as doing work on the object.",
          ],
        },
        {
          cue: "What does negative work mean?",
          notes: [
            "The force acts **opposite** to the motion and takes energy away from the object. Friction and braking do negative work.",
            "On a force-displacement graph, the **area under the line is the work**.",
          ],
        },
      ],
    },
    {
      title: "2. Kinetic and Potential Energy",
      ixl: [
        ["Grade 8 J.1", "Identify changes in gravitational potential energy"],
        ["Grade 8 J.2", "Use tables and graphs to identify patterns about kinetic energy"],
      ],
      rows: [
        {
          cue: "How do you calculate kinetic energy?",
          notes: [
            "**Kinetic energy** is energy of motion: **KE = ½mv²**.",
            "Worked example: a 1000 kg car moving at 20 m/s has KE = ½(1000)(20²) = **200,000 J**.",
            "Speed is squared: **double the speed, four times the kinetic energy**.",
          ],
        },
        {
          cue: "How do you calculate gravitational potential energy?",
          notes: [
            "**Gravitational potential energy** is stored energy of position: **PE = mgh**.",
            "Worked example: a 2 kg book on a shelf 1.5 m above the floor has PE = 2 × 9.8 × 1.5 = **29.4 J**.",
            "Height is measured from a **reference level** you choose (usually the lowest point).",
            "A stretched or squeezed spring stores elastic potential energy: PE = ½kx².",
          ],
        },
        {
          cue: "How is work related to kinetic energy?",
          notes: [
            "**Work-energy theorem:** the net work on an object equals its change in kinetic energy: **W_net = ΔKE**.",
            "Worked example: the 1000 kg car at 20 m/s brakes with a friction force of 8000 N. F × d = 200,000 J, so d = 200,000 ÷ 8000 = **25 m**.",
            "At 40 m/s the kinetic energy is 800,000 J and the stopping distance is **100 m**: double the speed, four times the distance.",
          ],
        },
      ],
    },
    {
      title: "3. Conservation of Energy",
      ixl: [
        ["Physics H.2", "Conservation of mechanical energy"],
        ["Grade 8 J.3", "Explore energy transformations: roller coaster ride"],
        ["Grade 8 J.4", "Explore energy transformations: bike ride"],
      ],
      rows: [
        {
          cue: "What does the law of conservation of energy say?",
          notes: [
            "Energy cannot be created or destroyed. It can only be **transformed** from one form to another or **transferred** between objects.",
            "The total energy of a closed system stays the same.",
          ],
        },
        {
          cue: "When is mechanical energy conserved?",
          notes: [
            "**Mechanical energy** = KE + PE. It stays constant when there is **no friction or air resistance**.",
            "Then: **KE_i + PE_i = KE_f + PE_f**.",
            "Worked example: a roller coaster car starts from rest 20 m above the bottom. mgh = ½mv², so v = √(2gh) = √(2 × 9.8 × 20) = **19.8 m/s**. The mass cancels.",
            "A pendulum has maximum PE at the ends of its swing and maximum KE at the bottom.",
          ],
        },
        {
          cue: "Where does the energy go when friction acts?",
          notes: [
            "Friction transforms mechanical energy into **thermal energy**. Total energy is still conserved.",
            "Worked example: a 50 kg sledder starts from rest on a 10 m high hill and reaches the bottom at 12 m/s. PE at top = 50 × 9.8 × 10 = 4900 J. KE at bottom = ½(50)(12²) = 3600 J. **1300 J** became thermal energy.",
          ],
        },
      ],
    },
    {
      title: "4. Power",
      ixl: [],
      ixlNote: "No IXL Physics skill covers power. Use the Physics Classroom Work and Energy Concept Builders.",
      rows: [
        {
          cue: "What is power, and what are its units?",
          notes: [
            "**Power** is the rate of doing work: **P = W / t**. Units: **watt (W)**. 1 W = 1 J/s.",
            "Worked example: a 60 kg student climbs stairs 3 m high in 4 s. W = 60 × 9.8 × 3 = 1764 J. P = 1764 ÷ 4 = **441 W**.",
          ],
        },
        {
          cue: "If two people do the same work, who is more powerful?",
          notes: [
            "The one who does it in **less time**. Same work, half the time, twice the power.",
            "A kilowatt-hour on an electric bill is a unit of **energy** (power × time), not power.",
          ],
        },
      ],
    },
    {
      title: "5. Labs and Engineering Design",
      ixl: [["Physics A.2", "Identify independent and dependent variables"], ["Grade 8 KK.6", "Abbreviate force, energy, and electricity units"]],
      rows: [
        {
          cue: "How do you test conservation of energy in the lab?",
          notes: [
            "**Cart on a ramp or pendulum lab:** measure the release height h and the speed at the bottom (photogate or motion sensor).",
            "Compare **mgh** at the top with **½mv²** at the bottom. The difference is the energy friction turned into thermal energy.",
            "**Independent variable:** release height. **Dependent variable:** speed at the bottom.",
          ],
        },
        {
          cue: "How do you measure your own power?",
          notes: [
            "**Stair-climb lab:** measure your mass, the vertical height of the stairs, and your climb time.",
            "**P = mgh / t.** Use the vertical height, not the length of the staircase.",
          ],
        },
        {
          cue: "How do you design a device that converts energy?",
          notes: [
            "**Energy conversion challenge** (HS-PS3-3): for example a rubber-band or mousetrap car (elastic PE to KE) or a small wind turbine (KE to electrical energy).",
            "State criteria and constraints, build, measure the output, and refine. Track where energy is wasted as thermal energy.",
          ],
        },
      ],
    },
  ],
  noIxl: "Power, the work-energy theorem, and energy lost to friction: use the Physics Classroom Work and Energy Concept Builders and PhET Energy Skate Park. The IXL skill 'Calculate work from force-displacement graphs' is new and had no skill number when this plan was written.",
  mnemonics: [
    { trick: "Work = force × distance (in the same direction)", when: "Any work calculation. Use only the part of the force along the motion." },
    { trick: "No distance, no work", when: "Holding, pushing a wall, or carrying at constant height." },
    { trick: "KE = ½mv². Speed counts twice.", when: "Comparing energies or stopping distances at different speeds." },
    { trick: "Energy is never lost, only transformed", when: "Any 'where did the energy go' question. Look for thermal energy." },
    { trick: "Power is how fast work is done", when: "Comparing two machines or people doing the same job." },
  ],
  summary:
    "Work is the transfer of energy by a force acting through a distance. Doing work on an object changes its kinetic energy, the energy of motion, or its potential energy, the energy of position. Energy is never created or destroyed. Without friction, kinetic plus potential energy stays constant, which lets us predict the speed of a roller coaster from its height alone. With friction, some mechanical energy becomes thermal energy, but the total is still conserved. Power measures how quickly work is done.",
  visuals: [
    { img: "work-angle.png", caption: "Only the part of a force that points along the displacement does work.", rule: "W = Fd cos θ" },
    { img: "fd-graph.png", caption: "On a force-displacement graph, the shaded area is the work done.", rule: "area = W" },
    { img: "coaster-energy.png", caption: "On a frictionless track, potential energy changes to kinetic energy and back. The total stays the same at every point.", rule: "KE + PE = constant" },
    { img: "ke-vs-speed.png", caption: "Kinetic energy grows with the square of speed. Doubling the speed gives four times the energy.", rule: "KE = ½mv²" },
  ],
  quiz: [
    {
      q: "You hold a 20 kg box motionless at chest height for 10 s. How much work do you do on the box?",
      choices: ["0 J", "200 J", "1960 J", "19,600 J"],
      answer: 0,
      misconception: "Equating effort or tiredness with work",
      why: "Work needs displacement in the direction of the force. The box does not move, so the work on it is zero, even though your muscles get tired.",
    },
    {
      q: "You carry a book across a level room at constant velocity. How much work does your upward force do on the book?",
      choices: ["Zero", "Force × distance walked", "Weight × height of the book", "It depends on how fast you walk"],
      answer: 0,
      misconception: "Ignoring the direction of the force relative to the motion",
      why: "Your force is upward and the displacement is horizontal. A force perpendicular to the motion does no work (cos 90° = 0).",
    },
    {
      q: "A car doubles its speed. Its kinetic energy becomes:",
      choices: ["Four times as large", "Twice as large", "The same", "Half as large"],
      answer: 0,
      misconception: "Treating kinetic energy as proportional to speed",
      why: "KE = ½mv². Speed is squared, so doubling the speed multiplies kinetic energy by 2² = 4.",
    },
    {
      q: "A heavy ball and a light ball are released from rest at the same height on a frictionless ramp. At the bottom:",
      choices: ["They have the same speed", "The heavy ball is faster", "The light ball is faster", "They have the same kinetic energy"],
      answer: 0,
      misconception: "Thinking a heavier object arrives faster",
      why: "mgh = ½mv² gives v = √(2gh). The mass cancels, so the speeds are equal. The heavy ball does have more kinetic energy.",
    },
    {
      q: "A sled slides down a hill and reaches the bottom with less kinetic energy than the potential energy it had at the top. The 'missing' energy:",
      choices: ["Became thermal energy because of friction", "Was destroyed", "Is still stored as potential energy", "Was never there"],
      answer: 0,
      misconception: "Thinking energy is used up or destroyed",
      why: "Energy is always conserved. Friction transforms some mechanical energy into thermal energy, warming the sled and the snow.",
    },
    {
      q: "A pendulum swings back and forth. At the lowest point of its swing it has:",
      choices: ["Maximum kinetic energy and minimum potential energy", "Maximum potential energy and minimum kinetic energy", "Equal kinetic and potential energy", "No energy"],
      answer: 0,
      misconception: "Reversing where kinetic and potential energy are largest",
      why: "The lowest point has the least height (minimum PE) and the greatest speed (maximum KE). At the ends of the swing it is the other way around.",
    },
    {
      q: "Two students with the same mass climb the same staircase. Ana takes 5 s and Ben takes 10 s. Compare them.",
      choices: ["Same work; Ana has twice the power", "Ana does twice the work", "Same work and same power", "Ben does more work because he takes longer"],
      answer: 0,
      misconception: "Confusing work with power",
      why: "Work = mgh is the same for both. Power = work ÷ time, so Ana, who takes half the time, has twice the power.",
    },
    {
      q: "A roller coaster car starts from rest at the top of a 20 m hill. Ignoring friction, can it coast over a second hill that is 25 m high?",
      choices: ["No, it does not have enough energy", "Yes, if it is heavy enough", "Yes, because it gains speed on the way down", "Yes, if the track is smooth"],
      answer: 0,
      misconception: "Thinking speed or mass can create extra energy",
      why: "Its total energy equals its potential energy at 20 m. Reaching 25 m would need more energy than it has. Mass does not help, because it cancels.",
    },
  ],
  practice: [
    { q: "You pull a sled 15 m with a 30 N force. Find the work done if the rope is horizontal, and if it makes a 60° angle with the ground.", a: "Horizontal: 30 × 15 = 450 J. At 60°: 30 × 15 × cos 60° = 225 J." },
    { q: "Find the kinetic energy of a 0.145 kg baseball moving at 40 m/s.", a: "KE = ½(0.145)(40²) = 116 J." },
    { q: "A 55 kg diver stands on a 10 m platform. Find the potential energy relative to the water and the speed on reaching the water.", a: "PE = 55 × 9.8 × 10 = 5390 J. v = √(2 × 9.8 × 10) = 14 m/s." },
    { q: "A 500 kg roller coaster car starts from rest at a height of 30 m. Ignoring friction, how fast is it moving when it is 10 m high?", a: "It has dropped 20 m. v = √(2 × 9.8 × 20) = 19.8 m/s." },
    { q: "A 1200 kg car moving at 15 m/s brakes to a stop in 20 m. Find its initial kinetic energy and the average braking force.", a: "KE = ½(1200)(15²) = 135,000 J. F = 135,000 ÷ 20 = 6750 N." },
    { q: "A motor lifts a 200 kg load 12 m in 8 s. Find the work done and the power.", a: "W = 200 × 9.8 × 12 = 23,520 J. P = 23,520 ÷ 8 = 2940 W." },
    { q: "A 2 kg block slides from rest down a 5 m high ramp and reaches the bottom at 8 m/s. How much energy became thermal energy?", a: "PE = 2 × 9.8 × 5 = 98 J. KE = ½(2)(8²) = 64 J. Thermal energy = 98 − 64 = 34 J." },
  ],
  realWorld: [
    "Roller coasters: the first hill must be the tallest because friction removes mechanical energy on every later hill.",
    "Hydroelectric dams: the potential energy of water becomes kinetic, then electrical energy.",
    "Regenerative braking in electric and hybrid cars: kinetic energy is stored instead of wasted as heat.",
    "Stopping distance: four times the kinetic energy at double the speed means four times the braking distance.",
    "Electric bills: you pay for energy in kilowatt-hours, which links to second-semester electricity.",
  ],
  resources: [
    { name: "The Physics Classroom: Work and Energy tutorial", url: "https://www.physicsclassroom.com/class/energy", what: "Readings on work, energy forms, the work-energy relationship, and power." },
    { name: "The Physics Classroom: Work and Energy Concept Builders", url: "https://www.physicsclassroom.com/Concept-Builders/Work-and-Energy", what: "Interactive practice on work, energy bar charts, and conservation." },
    { name: "PhET: Energy Skate Park", url: "https://phet.colorado.edu/en/simulations/energy-skate-park", what: "Watch kinetic, potential, and thermal energy change as a skater rides a track." },
    { name: "Khan Academy: Work and energy", url: "https://www.khanacademy.org/science/physics/work-and-energy", what: "Videos and practice on work, kinetic and potential energy, and conservation." },
    { name: "OpenStax Physics (high school)", url: "https://openstax.org/details/books/physics", what: "Free textbook. See the chapter on work, energy, and simple machines." },
  ],
  objectives: [
    { id: "E1", text: "Calculate work and identify zero-work and negative-work cases.", evidence: "Uses W = Fd cos θ with units; explains why holding or carrying does no work on the object." },
    { id: "E2", text: "Calculate kinetic and gravitational potential energy (HS-PS3-2).", evidence: "Computes ½mv² and mgh; describes a system's energy as motion plus position." },
    { id: "E3", text: "Apply conservation of energy to predict speed or height (HS-PS3-1).", evidence: "Sets up KE + PE at two points and solves; builds a spreadsheet or table model of energy at several points." },
    { id: "E4", text: "Account for energy transformed by friction.", evidence: "Calculates thermal energy as the difference between starting and ending mechanical energy." },
    { id: "E5", text: "Calculate power.", evidence: "Uses P = W/t with units and compares the power of two processes." },
    { id: "E6", text: "Design, build, and refine an energy-conversion device (HS-PS3-3).", evidence: "Design report identifies input and output energy forms, test data, and at least one data-based improvement." },
  ],
};
