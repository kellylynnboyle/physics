module.exports = {
  id: "05-work-energy",
  num: 5,
  title: "Work & Energy",
  short: "Work & Energy",
  subtitle: "Physics | Semester 1, Unit 5 | Work, kinetic and potential energy, conservation of energy, power",
  weeks: "Weeks 15-18",
  ngss: [
    ["HS-PS3-1", "Create a computational model to calculate the change in the energy of one component in a system when the change in energy of the other component(s) and energy flows in and out of the system are known."],
    ["HS-PS3-2", "Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as a combination of energy associated with the motion of particles (objects) and energy associated with the relative position of particles (objects)."],
    ["HS-PS3-3", "Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy."],
  ],
  essentialQuestion: "Where does energy go when an object speeds up, slows down, rises, or falls?",
  targets: [
    "I can calculate work and recognize when no work is done.",
    "I can calculate kinetic energy and gravitational potential energy.",
    "I can use the work-energy theorem to link net work and change in speed.",
    "I can use conservation of mechanical energy to find speed or height.",
    "I can account for energy transformed by friction.",
    "I can calculate power.",
  ],
  concepts: [
    ["Work", "Energy transferred by a force acting through a distance: W = F·d·cos θ, in joules."],
    ["Kinetic energy", "Energy of motion: KE = ½·m·v². Doubling speed quadruples kinetic energy."],
    ["Potential energy", "Stored energy of position: gravitational PE = m·g·h; elastic PE = ½·k·x²."],
    ["Work-energy theorem", "Net work done on an object equals its change in kinetic energy."],
    ["Conservation of energy", "Energy is never created or destroyed. Without friction, KE + PE stays constant; with friction, the missing mechanical energy becomes thermal energy."],
    ["Power", "The rate of doing work: P = W / t, in watts."],
  ],
  sections: [
    {
      title: "Work",
      rows: [
        ["What is work, and how is it calculated?", [
          "**Work** is energy transferred when a force moves an object: **W = F·d·cos θ**, where θ is the angle between the force and the displacement. Unit: **joule (J)** = N·m.",
          "Worked example: push with 50 N along the floor for 4 m. W = 50 × 4 = **200 J**.",
          "Pull with 50 N at 60° above the floor for 4 m: W = 50 × 4 × cos 60° = **100 J**. Only the part of the force along the motion does work.",
        ]],
        ["When is the work done by a force zero?", [
          "When there is **no displacement** (holding a heavy box still, pushing a wall).",
          "When the force is **perpendicular** to the displacement (carrying a backpack across a level floor; the normal force on a sliding box).",
          "Feeling tired does not mean work was done on the object.",
        ]],
        ["What does negative work mean?", [
          "The force points opposite the motion and **removes** energy from the object. Friction on a sliding box does negative work.",
        ]],
        ["What does the area under a force-displacement graph represent?", [
          "The **work done**.",
        ]],
      ],
      ixl: [["Physics H.1", "Calculate work"], ["Physics H (new, unnumbered)", "Calculate work from force-displacement graphs"]],
    },
    {
      title: "Kinetic Energy and the Work-Energy Theorem",
      rows: [
        ["What is kinetic energy, and how does it depend on speed?", [
          "**Kinetic energy** is energy of motion: **KE = ½·m·v²**.",
          "Speed is squared: double the speed gives **four times** the kinetic energy; triple gives nine times.",
          "Worked example: a 1000 kg car at 20 m/s has KE = ½ × 1000 × 20² = **200 000 J**.",
        ]],
        ["What does the work-energy theorem say?", [
          "**Net work = change in kinetic energy:** Wnet = KEf − KEi.",
          "Positive net work speeds an object up; negative net work slows it down.",
        ]],
        ["How far does that 1000 kg car skid if brakes supply 8000 N of friction?", [
          "Friction must remove all 200 000 J. W = F·d, so d = 200 000 / 8000 = **25 m**.",
          "At 40 m/s the car has four times the kinetic energy, so it skids four times as far: **100 m**.",
        ]],
      ],
      ixl: [["Grade 8 J.2", "Use tables and graphs to identify patterns about kinetic energy"]],
    },
    {
      title: "Potential Energy",
      rows: [
        ["What is gravitational potential energy?", [
          "Stored energy due to height: **PE = m·g·h**, measured from a reference level you choose (usually the lowest point).",
          "Worked example: a 2 kg book on a 5 m high shelf has PE = 2 × 9.8 × 5 = **98 J** relative to the floor.",
        ]],
        ["Does the path taken to a height change the potential energy gained?", [
          "No. Only the **vertical height** matters. Stairs, a ramp, or a ladder to the same height give the same PE.",
        ]],
        ["What is elastic potential energy?", [
          "Energy stored in a stretched or compressed spring: **PE = ½·k·x²**, where k is the spring constant and x is the stretch.",
          "Worked example: k = 200 N/m stretched 0.10 m stores ½ × 200 × 0.10² = **1.0 J**.",
        ]],
      ],
      ixl: [["Grade 8 J.1", "Identify changes in gravitational potential energy"]],
    },
    {
      title: "Conservation of Mechanical Energy",
      rows: [
        ["What does conservation of mechanical energy say?", [
          "With no friction or air resistance, **KE + PE stays constant**: KEi + PEi = KEf + PEf.",
          "As an object falls, PE turns into KE; as it rises, KE turns back into PE.",
        ]],
        ["How fast is a 2 kg ball moving after falling 5 m from rest?", [
          "Top: PE = 98 J, KE = 0. Bottom: PE = 0, KE = 98 J.",
          "½·m·v² = m·g·h, so v = √(2·g·h) = √(2 × 9.8 × 5) = **9.9 m/s**.",
          "Mass cancels: any mass falling 5 m reaches 9.9 m/s (no air resistance).",
        ]],
        ["A roller coaster starts from rest 20 m high. How fast is it going when it is 5 m high?", [
          "It has dropped 15 m, so m·g·(15) of PE became KE.",
          "v = √(2 × 9.8 × 15) = √294 = **17 m/s**. The shape of the track does not matter, only the height change.",
        ]],
        ["Where does the energy go when friction acts?", [
          "Friction turns mechanical energy into **thermal energy** (heat). Mechanical energy decreases, but total energy is still conserved.",
          "Energy is transformed or transferred, never destroyed.",
        ]],
      ],
      ixl: [["Physics H.2", "Conservation of mechanical energy"], ["Grade 8 J.3", "Explore energy transformations: roller coaster ride"], ["Grade 8 J.4", "Explore energy transformations: bike ride"]],
    },
    {
      title: "Power",
      rows: [
        ["What is power, and how is it calculated?", [
          "**Power** is the rate of doing work: **P = W / t**. Unit: **watt (W)** = J/s. Also P = F·v for steady motion.",
        ]],
        ["A 600 N student climbs 3 m of stairs in 4 s. What is the student's power?", [
          "Work against gravity = 600 × 3 = 1800 J. P = 1800 / 4 = **450 W**.",
        ]],
        ["If two students of equal weight climb the same stairs, one faster, how do work and power compare?", [
          "**Same work** (same force, same height). The faster student has **more power** because the work is done in less time.",
        ]],
      ],
      ixl: [],
      ixlNote: "No IXL Physics skill covers power. Use The Physics Classroom Concept Builders in Work and Energy.",
    },
    {
      title: "Labs and Measurement",
      rows: [
        ["In a stair-climb power lab, what do you measure?", [
          "Your weight in newtons (mass in kg × 9.8), the vertical height of the stairs, and the time to climb.",
          "Work = weight × height; power = work / time.",
          "**Independent variable:** climbing time (walk vs. run). **Dependent variable:** power.",
        ]],
        ["How can a cart-on-a-ramp or pendulum lab test energy conservation?", [
          "Measure the release height and the speed at the bottom (photogate or motion sensor).",
          "Compare m·g·h at the top with ½·m·v² at the bottom. The difference is energy transformed by friction.",
          "**Independent variable:** release height. **Dependent variable:** speed at the bottom.",
        ]],
        ["What does an energy bar chart show?", [
          "Bars for KE, PE, and thermal energy at two or more moments. The bars change height, but their **total stays the same**. This is the model NGSS HS-PS3-2 asks for.",
        ]],
      ],
      ixl: [["Physics A.2", "Identify independent and dependent variables"], ["Physics B.4", "Calculations with significant figures"]],
    },
  ],
  tricks: [
    ["Work needs motion along the force", "No distance, or a force at 90° to the motion, means zero work."],
    ["In KE, speed is squared", "Twice the speed is four times the energy and four times the stopping distance."],
    ["High = PE, fast = KE", "At the top of a hill or swing energy is mostly potential; at the bottom it is mostly kinetic."],
    ["Energy bar charts", "Sketch bars for KE, PE, and thermal at the start and end before writing the equation; the totals must match."],
    ["Watts are joules per second", "Power is about how fast, not how much."],
  ],
  summary: "Work is how a force transfers energy to or from an object, and it only counts the part of the force along the motion. That energy shows up as kinetic energy (motion) or potential energy (position). Net work equals the change in kinetic energy, and because speed is squared, small increases in speed mean large increases in energy. When friction is absent, kinetic plus potential energy stays constant, which lets you find speeds and heights without knowing the path. When friction acts, mechanical energy becomes thermal energy, but the total is always conserved. Power measures how quickly the work is done.",
  visuals: [
    ["bar_chart", "Energy bar charts for a ball dropped from rest: potential energy turns into kinetic energy while the total stays the same.", "KEi + PEi = KEf + PEf"],
    ["fd_graph", "The area under a force-displacement graph is the work done by the force.", "W = F·d (area)"],
    ["ke_vs_v", "Kinetic energy rises with the square of speed: doubling the speed gives four times the energy.", "KE = ½·m·v²"],
    ["pendulum", "A pendulum has all potential energy at the ends of its swing and all kinetic energy at the bottom, where it moves fastest.", "m·g·h at the top = ½·m·v² at the bottom"],
  ],
  noIxl: "Power, the work-energy theorem, elastic potential energy, and energy bar charts (use physicsclassroom.com Concept Builders: Work and Energy).",
  resources: [
    ["The Physics Classroom: Work, Energy, and Power tutorial", "https://www.physicsclassroom.com/class/energy", "Work, kinetic and potential energy, conservation, and power with worked examples."],
    ["The Physics Classroom: Concept Builders", "https://www.physicsclassroom.com/Concept-Builders", "Use the Work and Energy group."],
    ["PhET: Energy Skate Park: Basics", "https://phet.colorado.edu/en/simulations/energy-skate-park-basics", "Watch energy bar charts change as a skater rides a track, with and without friction."],
    ["OpenStax Physics (high school), Ch. 9", "https://openstax.org/details/books/physics", "Free textbook: Work, Energy, and Simple Machines."],
    ["Khan Academy: High School Physics", "https://www.khanacademy.org/science/highschool-physics", "Video walkthroughs of work and energy problems."],
  ],
  practice: [
    ["A worker pulls a crate 12 m with a 200 N rope angled 30° above the floor. How much work does the rope do?", "W = 200 × 12 × cos 30° = 2080 J (about 2100 J)."],
    ["Find the kinetic energy of a 0.145 kg baseball thrown at 40 m/s.", "KE = ½ × 0.145 × 40² = 116 J."],
    ["A 50 kg diver stands on a 10 m platform. Find the potential energy relative to the water and the speed on reaching the water.", "PE = 50 × 9.8 × 10 = 4900 J; v = √(2 × 9.8 × 10) = 14 m/s."],
    ["A 2.0 kg block slides down a 3.0 m high ramp from rest and reaches the bottom at 6.0 m/s. How much energy did friction transform to heat?", "PE at top = 58.8 J; KE at bottom = 36 J; thermal energy = 22.8 J."],
    ["A motor lifts a 400 N load 5.0 m in 8.0 s. Find its power output.", "W = 2000 J; P = 2000 / 8.0 = 250 W."],
    ["A car's speed rises from 15 m/s to 30 m/s. By what factor do its kinetic energy and its braking distance (same braking force) change?", "Both increase by a factor of 4."],
  ],
  applications: [
    "Roller coasters: the first hill is the tallest because no energy is added afterward.",
    "Braking distance and why speed matters so much in crashes.",
    "Hydroelectric dams: gravitational potential energy to kinetic to electrical.",
    "Regenerative braking in electric and hybrid cars.",
    "Pole vault and trampolines: kinetic to elastic to gravitational energy.",
    "Power ratings of appliances and electricity bills (kilowatt-hours).",
  ],
  objectives: [
    ["E1", "Calculate work, including angled forces and zero-work cases.", "Uses W = F·d·cos θ and correctly identifies when work is zero or negative."],
    ["E2", "Calculate kinetic and gravitational potential energy.", "Uses KE = ½·m·v² and PE = m·g·h with units; predicts the effect of doubling speed."],
    ["E3", "Apply the work-energy theorem.", "Relates net work to change in kinetic energy to find speed or stopping distance."],
    ["E4", "Apply conservation of mechanical energy (HS-PS3-1).", "Sets initial total energy equal to final total energy and solves for speed or height."],
    ["E5", "Model energy transfers, including friction (HS-PS3-2).", "Draws energy bar charts whose totals match and accounts for thermal energy."],
    ["E6", "Calculate power.", "Uses P = W / t and distinguishes power from work."],
    ["E7", "Design a device that converts energy from one form to another (HS-PS3-3).", "Device works within constraints; energy conversions are identified and one refinement is justified."],
  ],
  quiz: [
    {
      q: "A weightlifter holds a 1000 N barbell motionless above her head for 5 s. How much work does she do on the barbell during that time?",
      choices: ["5000 J", "1000 J", "200 J", "0 J"],
      answer: 3,
      why: "Work requires displacement. The barbell does not move, so W = F × 0 = 0 J, even though her muscles tire.",
      trap: "Equating effort or force with work.",
    },
    {
      q: "A car's speed doubles. What happens to its kinetic energy?",
      choices: ["It stays the same", "It doubles", "It triples", "It becomes four times as large"],
      answer: 3,
      why: "KE = ½·m·v². Speed is squared, so 2² = 4 times the kinetic energy.",
      trap: "Treating kinetic energy as proportional to speed.",
    },
    {
      q: "Two identical balls start from rest at the same height. One is dropped straight down; the other slides down a frictionless ramp. How do their speeds at the bottom compare?",
      choices: ["The dropped ball is faster", "The ramp ball is faster", "The speeds are the same", "It depends on the ramp's angle"],
      answer: 2,
      why: "Both lose the same potential energy, m·g·h, so both gain the same kinetic energy. The ramp ball takes longer but arrives with the same speed.",
      trap: "Confusing time taken with final speed.",
    },
    {
      q: "A car traveling at 30 m/s needs how much braking distance compared with the same car at 15 m/s? (Same braking force.)",
      choices: ["The same distance", "Twice the distance", "Four times the distance", "Half the distance"],
      answer: 2,
      why: "The brakes must remove all the kinetic energy: F·d = ½·m·v². Double the speed means four times the energy and four times the distance.",
      trap: "Assuming stopping distance doubles when speed doubles.",
    },
    {
      q: "You carry a backpack across a level hallway at constant speed. How much work does your upward supporting force do on the backpack?",
      choices: ["Zero", "Weight × distance walked", "Mass × distance walked", "It depends on walking speed"],
      answer: 0,
      why: "The supporting force is vertical and the displacement is horizontal. A force perpendicular to the motion does no work (cos 90° = 0).",
      trap: "Multiplying force by distance without checking directions.",
    },
    {
      q: "A heavy ball and a light ball are dropped from the same height. Ignoring air resistance, just before landing:",
      choices: ["They have the same speed and the same kinetic energy", "They have the same speed; the heavy ball has more kinetic energy", "The heavy ball is faster and has more kinetic energy", "The light ball is faster"],
      answer: 1,
      why: "Speed from v = √(2·g·h) does not depend on mass. Kinetic energy, ½·m·v², does, so the heavier ball has more.",
      trap: "Thinking same speed means same energy, or that heavier falls faster.",
    },
    {
      q: "A box slides across a rough floor and stops. What happened to its kinetic energy?",
      choices: ["It was destroyed", "It became thermal energy in the box and floor", "It became potential energy", "It is still kinetic energy"],
      answer: 1,
      why: "Friction transforms kinetic energy into thermal energy; the surfaces warm slightly. Energy is never destroyed.",
      trap: "Saying energy is \"lost\" or \"used up\".",
    },
    {
      q: "Two students of equal weight climb the same staircase. Ana takes 5 s and Ben takes 10 s. Which statement is correct?",
      choices: ["Ana does more work", "Ben does more work", "They do the same work; Ana has more power", "They do the same work and have the same power"],
      answer: 2,
      why: "Work = weight × height is the same for both. Power = work / time, so Ana, who takes half the time, has twice the power.",
      trap: "Mixing up work and power.",
    },
    {
      q: "At what point in its swing does a pendulum have the greatest kinetic energy?",
      choices: ["At the highest point on either side", "At the lowest point", "Halfway up", "It is the same everywhere"],
      answer: 1,
      why: "At the lowest point the potential energy is smallest, so the kinetic energy and the speed are greatest. At the ends the bob is momentarily at rest.",
      trap: "Placing maximum speed at the ends of the swing.",
    },
    {
      q: "A 2.0 kg ball is dropped from rest from a height of 5.0 m. Ignoring air resistance, how fast is it moving just before it lands? (g = 9.8 m/s²)",
      choices: ["4.9 m/s", "9.9 m/s", "49 m/s", "98 m/s"],
      answer: 1,
      why: "m·g·h = ½·m·v², so v = √(2 × 9.8 × 5.0) = √98 = 9.9 m/s. The 98 is the energy in joules, not the speed.",
      trap: "Stopping at the energy value or forgetting the square root.",
    },
  ],
};
