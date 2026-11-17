// Unit 5: Work and Energy.
module.exports = {
  id: "energy", num: 5, dir: "05-work-and-energy", title: "Work and Energy", weeks: "Weeks 15–18",
  subtitle: "Physics | Unit 5 | Work, kinetic and potential energy, conservation of energy, power",
  ngss: ["HS-PS3-1: Create a computational model to calculate the change in energy of one component of a system", "HS-PS3-2: Develop and use models showing energy as motion of objects and relative position of objects", "HS-PS3-3: Design, build, and refine a device that converts one form of energy into another", "CCC: Energy and Matter"],
  essentialQuestion: "If energy is never created or destroyed, where does it go when things speed up, slow down, rise, or fall?",
  targets: [
    "I can calculate the work done by a force, including when the force is at an angle or does zero or negative work.",
    "I can calculate kinetic energy and gravitational potential energy and describe how each depends on speed and height.",
    "I can use conservation of energy to find speeds and heights, with and without friction.",
    "I can model energy changes with bar charts and a simple spreadsheet (computational) model.",
    "I can calculate power and tell it apart from work and energy.",
  ],
  concepts: [
    ["Work", "Energy transferred by a force acting through a distance: W = Fd cos θ, in joules (J)."],
    ["Kinetic energy", "Energy of motion: KE = ½mv². Depends on the square of speed."],
    ["Gravitational potential energy", "Energy stored by height: PE = mgh, measured from a chosen zero level."],
    ["Work-energy theorem", "Net work done on an object equals its change in kinetic energy: W_net = ΔKE."],
    ["Conservation of energy", "Energy is never created or destroyed. It changes form or moves between objects."],
    ["Mechanical energy and friction", "KE + PE stays constant without friction. With friction, some becomes thermal energy."],
    ["Power", "How fast work is done or energy is transferred: P = W ÷ t, in watts (W)."],
  ],
  sections: [
    {
      title: "1. Work",
      cues: [
        { q: "What is work in physics, and how is it calculated?", notes: [
          "**Work** is energy transferred when a force moves an object through a distance.",
          "**W = Fd cos θ**, where θ is the angle between the force and the displacement. Units: **joules (J)**; 1 J = 1 N·m.",
          "Only the part of the force **along the direction of motion** does work.",
        ]},
        { q: "When does a force do zero work?", notes: [
          "When there is **no displacement** (pushing on a wall that does not move).",
          "When the force is **perpendicular** to the motion (carrying a box at steady speed across a level floor: the upward force does no work).",
          "Feeling tired is not the same as doing work on the object.",
        ]},
        { q: "When is work negative?", notes: [
          "When the force points **opposite** to the motion. **Friction** does negative work and removes kinetic energy.",
        ]},
        { q: "A sled is pulled 10 m by a 50 N rope angled 60° above horizontal. How much work does the rope do?", notes: [
          "Force along the motion: 50 × cos 60° = 25 N.",
          "W = Fd cos θ = 50 × 10 × cos 60° = **250 J**.",
          "Sense check: less than 50 × 10 = 500 J because only part of the pull is forward.",
        ]},
        { q: "What does the area under a force-displacement graph represent?", notes: [
          "The **work done** by that force.",
        ]},
      ],
      ixl: [["Physics", "H.1", "Calculate work"], ["Physics", "H (New)", "Calculate work from force-displacement graphs"], ["Grade 8", "KK.6", "Abbreviate force, energy, and electricity units"]],
      ixlShort: "IXL: Physics H.1, H “Calculate work from force-displacement graphs”, Grade 8 KK.6",
    },
    {
      title: "2. Kinetic and Potential Energy",
      cues: [
        { q: "What is kinetic energy, and how does it depend on speed?", notes: [
          "**Kinetic energy** is energy of motion: **KE = ½mv²**.",
          "It depends on speed **squared**. Double the speed gives **four times** the kinetic energy.",
          "Example: a 2 kg cart at 3 m/s has KE = ½ × 2 × 3² = **9 J**.",
        ]},
        { q: "What is gravitational potential energy?", notes: [
          "Energy stored because of height: **PE = mgh**, where h is measured from a zero level you choose.",
          "Example: a 2 kg book 5 m above the floor has PE = 2 × 9.8 × 5 = **98 J**.",
        ]},
        { q: "What does the work-energy theorem say?", notes: [
          "**W_net = ΔKE = ½mv_f² − ½mvᵢ²**. Net work done on an object changes its kinetic energy.",
          "Positive net work speeds it up; negative net work slows it down.",
        ]},
        { q: "Why does doubling a car's speed make its braking distance four times longer?", notes: [
          "The brakes must remove all the kinetic energy: F_frict × d = ½mv².",
          "Double the speed means four times the kinetic energy. With the same braking force, the distance must be **four times** longer.",
        ]},
      ],
      ixl: [["Grade 8", "J.1", "Identify changes in gravitational potential energy"], ["Grade 8", "J.2", "Use tables and graphs to identify patterns about kinetic energy"]],
      ixlShort: "IXL: Grade 8 J.1–2",
    },
    {
      title: "3. Conservation of Energy",
      cues: [
        { q: "What does the law of conservation of energy say?", notes: [
          "Energy is **never created or destroyed**. It only changes form or moves from one object to another.",
          "Without friction, **mechanical energy** stays constant: **KEᵢ + PEᵢ = KE_f + PE_f**.",
        ]},
        { q: "A roller coaster starts from rest at the top of a 20 m hill. Ignoring friction, how fast is it going at the bottom?", notes: [
          "All the starting PE becomes KE: mgh = ½mv².",
          "The mass cancels: v = √(2gh) = √(2 × 9.8 × 20) = √392 = **19.8 m/s**.",
          "Sense check: the answer does not depend on the mass or on the shape of the track.",
        ]},
        { q: "Where does the “lost” energy go when there is friction?", notes: [
          "Friction changes mechanical energy into **thermal energy** (the surfaces warm up), plus some sound.",
          "**KEᵢ + PEᵢ = KE_f + PE_f + thermal energy.** The total is still conserved.",
          "Example: a 2 kg block starts at rest 3 m up a ramp (PE = 58.8 J) and reaches the bottom at 6 m/s (KE = 36 J). Thermal energy = 58.8 − 36 = **22.8 J**.",
        ]},
        { q: "How do energy bar charts show conservation of energy?", notes: [
          "Draw a bar for each kind of energy at the start and at the end.",
          "The bars change height, but the **total height stays the same** (including a thermal bar when there is friction).",
        ]},
      ],
      ixl: [["Physics", "H.2", "Conservation of mechanical energy"], ["Grade 8", "J.3", "Explore energy transformations: roller coaster ride"], ["Grade 8", "J.4", "Explore energy transformations: bike ride"]],
      ixlShort: "IXL: Physics H.2, Grade 8 J.3–4",
    },
    {
      title: "4. Power",
      cues: [
        { q: "What is power, and what are its units?", notes: [
          "**Power** is the rate of doing work or transferring energy: **P = W ÷ t**.",
          "Units: **watts (W)**; 1 W = 1 J/s. For steady motion, P = Fv also works.",
        ]},
        { q: "A 60 kg student climbs a 3 m staircase in 4 s. What is the student's power?", notes: [
          "Work against gravity = mgh = 60 × 9.8 × 3 = 1764 J.",
          "P = W ÷ t = 1764 ÷ 4 = **441 W**.",
        ]},
        { q: "Two students of equal mass climb the same stairs, one twice as fast. How do their work and power compare?", notes: [
          "**Same work** (same mass, same height).",
          "The faster student has **twice the power** because the work is done in half the time.",
        ]},
      ],
      ixl: [],
      noIxl: "No IXL Physics skill covers power. Use the Work and Energy Concept Builders at physicsclassroom.com.",
      ixlShort: "physicsclassroom.com Concept Builders",
    },
    {
      title: "5. Labs, Modeling, and Engineering Design",
      cues: [
        { q: "In a ramp or pendulum energy lab, what do you measure and what do you compare?", notes: [
          "Measure the **release height** and the **speed at the bottom** (photogate or motion sensor).",
          "Compare **PE at the top (mgh)** with **KE at the bottom (½mv²)**. The difference is the thermal energy from friction.",
          "**Independent:** release height. **Dependent:** speed at the bottom.",
        ]},
        { q: "What is a computational model of energy, and how do you build a simple one?", notes: [
          "A spreadsheet that calculates energy at each step. Columns: height, PE = mgh, KE = total − PE, speed = √(2KE ÷ m).",
          "Change one input (mass, start height, or energy lost to friction) and the model updates the rest. This is HS-PS3-1.",
        ]},
        { q: "How do you judge an energy-conversion device such as a marble coaster or a Rube Goldberg machine?", notes: [
          "Name each energy conversion in order (for example PE → KE → elastic PE → KE).",
          "Estimate **efficiency = useful energy out ÷ energy in × 100**, then change one feature to reduce losses and retest. This is HS-PS3-3.",
        ]},
      ],
      ixl: [["Physics", "A.2", "Identify independent and dependent variables"], ["Physics", "A.4", "Identify questions that can be investigated with a set of materials"]],
      ixlShort: "IXL: Physics A.2, A.4",
    },
  ],
  mnemonics: [
    ["Work = force × distance in the direction of the force", "Use to decide quickly whether work is positive, negative, or zero."],
    ["Speed is squared in KE", "Use for “what if the speed doubles” questions: the kinetic energy and braking distance go up four times."],
    ["Energy before = energy after", "Use for every hill, ramp, pendulum, and drop. Add a thermal term if there is friction."],
    ["LOL diagrams (energy bar charts)", "Use to plan a conservation of energy problem before writing the equation."],
    ["A watt is a joule per second", "Use to keep power separate from energy: power is how fast, energy is how much."],
  ],
  summary: "Work is how forces transfer energy: a force acting along a displacement changes an object's energy by W = Fd cos θ. Moving objects have kinetic energy, ½mv², and raised objects have gravitational potential energy, mgh. Energy is never created or destroyed, so the total at the start of any process equals the total at the end. Without friction, kinetic plus potential energy stays constant, which lets us find speeds and heights without knowing the path. With friction, the “missing” mechanical energy shows up as thermal energy. Power tells how quickly energy is transferred.",
  visuals: [
    ["energy-4", "Only the part of the pull that points along the motion does work on the sled.", "W = Fd cos θ"],
    ["energy-3", "For a force-displacement graph, the shaded area is the work done.", "area = F × d = work"],
    ["energy-2", "A coaster has the most potential energy at the highest point and the most kinetic energy at the lowest.", "PE = mgh; KE = ½mv²"],
    ["energy-1", "As the cart rolls down, the PE bar shrinks and the KE bar grows, but the total stays 98 J.", "KEᵢ + PEᵢ = KE_f + PE_f"],
  ],
  resources: [
    ["The Physics Classroom: Work and Energy tutorial", "https://www.physicsclassroom.com/class/energy", "Lessons on work, energy forms, the work-energy relationship, and power."],
    ["PhET: Energy Skate Park: Basics", "https://phet.colorado.edu/en/simulations/energy-skate-park-basics", "Watch live energy bar charts as a skater moves, with and without friction."],
    ["Khan Academy: High school physics", "https://www.khanacademy.org/science/highschool-physics", "Videos and practice on work, energy, and conservation."],
    ["OpenStax Physics (free textbook), chapter 9", "https://openstax.org/details/books/physics", "Reference reading and extra problems on work, energy, and simple machines."],
    ["The Physics Classroom: Concept Builders (Work and Energy)", "https://www.physicsclassroom.com/Concept-Builders", "Interactive checks on energy bar charts and conservation reasoning."],
  ],
  practice: [
    ["A crate is pushed 15 m across a floor by a 200 N horizontal force against 150 N of friction. Find the work done by the push, by friction, and the net work.", "Push: 200 × 15 = 3000 J. Friction: −150 × 15 = −2250 J. Net: 750 J."],
    ["Find the kinetic energy of a 1200 kg car moving at 25 m/s.", "KE = ½ × 1200 × 25² = 375,000 J."],
    ["A 0.50 kg ball is dropped from 12 m. Ignoring air resistance, how fast is it moving just before it hits the ground?", "v = √(2 × 9.8 × 12) = 15.3 m/s."],
    ["A 500 kg coaster car moves at 2.0 m/s at the top of a 30 m hill. Ignoring friction, how fast is it moving at the top of the next hill, 10 m high?", "v² = 2.0² + 2 × 9.8 × (30 − 10) = 396, so v = 19.9 m/s."],
    ["A 2.0 kg block starts from rest and slides down a ramp 3.0 m high, reaching the bottom at 6.0 m/s. How much energy became thermal energy?", "PE = 2.0 × 9.8 × 3.0 = 58.8 J; KE = ½ × 2.0 × 6.0² = 36 J; thermal = 22.8 J."],
    ["A motor lifts a 100 kg load 12 m in 8.0 s at steady speed. Find the motor's power output.", "W = 100 × 9.8 × 12 = 11,760 J; P = 11,760 ÷ 8.0 = 1470 W."],
  ],
  realWorld: [
    "Roller coasters: the first hill is the tallest because the ride can never regain the energy lost to friction.",
    "Hybrid and electric cars use regenerative braking to turn kinetic energy back into stored electrical energy.",
    "Hydroelectric dams convert the potential energy of stored water into electrical energy.",
    "Earth science link: an earthquake releases elastic potential energy stored in strained rock, and a landslide converts gravitational potential energy to kinetic energy.",
  ],
  labs: [
    "Ramp or pendulum: compare potential energy at the top with kinetic energy at the bottom.",
    "Stair-climb power lab: measure each student's power output.",
    "Marble coaster or Rube Goldberg device: design, build, and refine an energy-conversion device (HS-PS3-3), with a spreadsheet energy model (HS-PS3-1).",
  ],
  quiz: [
    { q: "A waiter carries a tray across a level room at constant velocity. How much work does the upward force of his hand do on the tray?", c: ["Positive work", "Negative work", "Zero work", "It depends on the tray's mass"], a: 2,
      why: "The upward force is perpendicular to the horizontal motion, so cos 90° = 0 and no work is done by that force.", trap: "Equating effort with work." },
    { q: "A car's speed doubles. What happens to its kinetic energy?", c: ["It doubles", "It triples", "It is four times larger", "It stays the same"], a: 2,
      why: "KE = ½mv². Doubling v multiplies v² by four.", trap: "Treating kinetic energy as proportional to speed." },
    { q: "Two identical balls start from rest at the same height. One is dropped straight down; the other slides down a frictionless ramp. How do their speeds at the bottom compare?", c: ["The dropped ball is faster", "The ball on the ramp is faster", "They have the same speed", "It depends on the ramp angle"], a: 2,
      why: "Both lose the same height, so the same potential energy becomes kinetic energy. The path does not matter without friction; only the time taken differs.", trap: "Thinking a longer or gentler path changes the final speed." },
    { q: "A heavy sled and a light sled slide from rest down the same frictionless hill. Which is moving faster at the bottom?", c: ["The heavy sled", "The light sled", "They have the same speed", "Not enough information"], a: 2,
      why: "From mgh = ½mv², the mass cancels and v = √(2gh). The heavy sled has more kinetic energy but the same speed.", trap: "Assuming more mass means more speed." },
    { q: "You push as hard as you can on a brick wall for one minute and it does not move. How much work have you done on the wall?", c: ["A large amount, because you are tired", "Zero", "It depends on how hard you pushed", "Negative work"], a: 1,
      why: "Work requires displacement. With no displacement, W = Fd = 0, whatever the force.", trap: "Equating effort or tiredness with work." },
    { q: "A box slides across a rough floor and comes to rest. What happened to its kinetic energy?", c: ["It was destroyed", "It became thermal energy", "It became potential energy", "It is still in the box as kinetic energy"], a: 1,
      why: "Friction converts kinetic energy into thermal energy, warming the box and the floor. Energy is never destroyed.", trap: "Believing energy can be used up." },
    { q: "Two students of equal mass climb the same staircase. Student A takes 5 s and student B takes 10 s. Which statement is correct?", c: ["A does more work than B", "They do the same work, and A has more power", "They do the same work and have the same power", "B does more work because it takes longer"], a: 1,
      why: "Work = mgh is the same for both. Power = work ÷ time, so the faster student has more power.", trap: "Confusing work with power." },
    { q: "A car's speed doubles. With the same braking force, what happens to its braking distance?", c: ["It doubles", "It is four times longer", "It stays the same", "It is cut in half"], a: 1,
      why: "The brakes must remove four times the kinetic energy, and work = force × distance, so the distance is four times longer.", trap: "Assuming braking distance grows in step with speed." },
    { q: "A pendulum swings back and forth without friction. Where is its kinetic energy greatest?", c: ["At the highest points of the swing", "At the lowest point of the swing", "Halfway up", "It is the same everywhere"], a: 1,
      why: "At the lowest point the potential energy is least, so the kinetic energy and speed are greatest. The total stays the same.", trap: "Mixing up where potential and kinetic energy peak." },
    { q: "Three identical balls are thrown from a cliff at the same speed: one upward, one downward, one horizontally. Ignoring air resistance, which hits the ground with the greatest speed?", c: ["The one thrown downward", "The one thrown upward", "The one thrown horizontally", "All three hit with the same speed"], a: 3,
      why: "All three start with the same kinetic and potential energy and end at the same height, so they end with the same kinetic energy and speed. Only the direction and the time differ.", trap: "Judging final speed by the launch direction." },
  ],
};
