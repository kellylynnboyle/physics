module.exports = {
  id: '05-work-energy',
  num: 5,
  title: 'Work & Energy',
  subtitle: 'Physics (Grade 11) | Semester 1, Unit 5 | Work, kinetic and potential energy, conservation, power',
  weeks: 'Weeks 15–18',
  ngss: ['HS-PS3-1: Create a computational model to calculate the change in energy of one component of a system when the other changes and energy flows are known', 'HS-PS3-2: Develop and use models showing that energy is a combination of energy of motion and energy of relative position', 'HS-PS3-3: Design, build, and refine a device that converts one form of energy into another', 'CCC: Energy and Matter'],
  essentialQuestion: 'How is energy transferred and transformed, and what does it mean to say energy is conserved?',
  targets: [
    'I can calculate the work done by a force, including when it is zero or negative.',
    'I can calculate kinetic energy and use the work-energy theorem.',
    'I can calculate gravitational and elastic potential energy.',
    'I can use conservation of energy to solve problems with and without friction.',
    'I can calculate power.',
    'I can model energy changes with bar charts and a spreadsheet.',
  ],
  concepts: [
    ['Work', 'Energy transferred by a force acting through a distance: W = Fd cos θ. Units: joules (J).'],
    ['Kinetic energy', 'Energy of motion: KE = ½mv².'],
    ['Work-energy theorem', 'Net work on an object equals its change in kinetic energy: W_net = ΔKE.'],
    ['Gravitational potential energy', 'Energy of position in a gravitational field: PE = mgh, measured from a chosen zero level.'],
    ['Elastic potential energy', 'Energy stored in a stretched or compressed spring: PE = ½kx².'],
    ['Conservation of energy', 'Energy is never created or destroyed, only transferred or transformed. Without friction, KE + PE stays constant.'],
    ['Power', 'The rate of doing work: P = W/t. Units: watts (W).'],
  ],
  sections: [
    {
      title: '1. Work',
      ixlRange: 'Physics H.1, H (New!)',
      rows: [
        { cue: 'What is work, and how is it calculated?', notes: [
          '**Work** is energy transferred when a force moves an object: **W = Fd cos θ**, where θ is the angle between the force and the displacement. Units: **joule**, 1 J = 1 N·m.',
          'Worked example: a 50 N pull at 60° above horizontal moves a sled 10 m. W = (50)(10) cos 60° = **250 J**.',
          'Only the part of the force **along the motion** does work.' ] },
        { cue: 'When is the work done by a force zero?', notes: [
          'When the object **does not move** (holding a box still), or when the force is **perpendicular** to the motion (carrying a box horizontally at constant velocity; the normal force on a sliding box).' ] },
        { cue: 'When is work negative?', notes: [
          'When the force points **opposite** to the motion. Friction and braking forces do negative work and take kinetic energy away.' ] },
        { cue: 'How do you find work from a force-displacement graph?', notes: [
          'Work = the **area under the graph**.' ] },
      ],
      ixl: [['Physics H.1', 'Calculate work'], ['Physics H (New!)', 'Calculate work from force-displacement graphs']],
    },
    {
      title: '2. Kinetic Energy and the Work-Energy Theorem',
      ixlRange: 'Grade 8 J.2',
      rows: [
        { cue: 'What is kinetic energy and how is it calculated?', notes: [
          '**Kinetic energy** is energy of motion: **KE = ½mv²**. Units: joules.',
          'Worked example: a 1000 kg car at 20 m/s has KE = ½(1000)(20)² = **200,000 J**.' ] },
        { cue: 'What happens to kinetic energy when speed doubles?', notes: [
          'It becomes **four times** as large, because KE depends on v². Doubling the mass only doubles it.' ] },
        { cue: 'What does the work-energy theorem say?', notes: [
          '**W_net = ΔKE.** The net work done on an object equals its change in kinetic energy.',
          'Worked example: a 1200 kg car at 25 m/s brakes with a 7500 N friction force. KE = ½(1200)(25)² = 375,000 J. Friction must do −375,000 J of work, so d = 375,000/7500 = **50 m**.',
          'At twice the speed the car has four times the KE, so it needs **200 m**.' ] },
      ],
      ixl: [['Grade 8 J.2', 'Use tables and graphs to identify patterns about kinetic energy']],
    },
    {
      title: '3. Potential Energy',
      ixlRange: 'Grade 8 J.1',
      rows: [
        { cue: 'What is gravitational potential energy and how is it calculated?', notes: [
          'Energy stored because of height: **PE = mgh**, where h is measured from a **reference level** you choose.',
          'Worked example: a 2.0 kg book on a 1.5 m shelf has PE = (2.0)(9.8)(1.5) = **29.4 J** relative to the floor.' ] },
        { cue: 'Does the path taken to a height change the potential energy?', notes: [
          '**No.** Only the vertical height matters. Stairs, a ramp, or a straight lift to the same height give the same PE.' ] },
        { cue: 'What is elastic potential energy?', notes: [
          'Energy stored in a stretched or compressed spring: **PE = ½kx²**, where k is the spring constant (N/m) and x is the stretch or compression.',
          'Worked example: a spring with k = 200 N/m compressed 0.10 m stores ½(200)(0.10)² = **1.0 J**.' ] },
      ],
      ixl: [['Grade 8 J.1', 'Identify changes in gravitational potential energy']],
    },
    {
      title: '4. Conservation of Energy',
      ixlRange: 'Physics H.2, Grade 8 J.3–4',
      rows: [
        { cue: 'What does the law of conservation of energy say?', notes: [
          'Energy cannot be created or destroyed, only **transferred** between objects or **transformed** between forms. The total stays the same.',
          '**Mechanical energy** = KE + PE. With no friction or air resistance: **KE₁ + PE₁ = KE₂ + PE₂**.' ] },
        { cue: 'How fast is a roller coaster going at the bottom of a 20 m frictionless hill, starting from rest?', notes: [
          'Top: all PE = mgh. Bottom: all KE = ½mv².',
          'mgh = ½mv², so v = √(2gh) = √(2 × 9.8 × 20) = **19.8 m/s**.',
          'The **mass cancels**: any car reaches the same speed.' ] },
        { cue: 'Where does the energy go when there is friction?', notes: [
          'Friction turns mechanical energy into **thermal energy** (heat). Mechanical energy drops, but total energy is still conserved.',
          'Worked example: a 500 kg coaster car starts from rest at 20 m and reaches the bottom at 18 m/s. Start: (500)(9.8)(20) = 98,000 J. End: ½(500)(18)² = 81,000 J. **17,000 J** became thermal energy.' ] },
        { cue: 'Where in a pendulum swing are KE and PE greatest?', notes: [
          '**PE is greatest at the highest points** (where the bob stops for an instant). **KE is greatest at the lowest point** (where it moves fastest).' ] },
      ],
      ixl: [['Physics H.2', 'Conservation of mechanical energy'], ['Grade 8 J.3', 'Explore energy transformations: roller coaster ride'], ['Grade 8 J.4', 'Explore energy transformations: bike ride']],
    },
    {
      title: '5. Power',
      ixlRange: 'Concept Builders',
      rows: [
        { cue: 'What is power and how is it calculated?', notes: [
          '**Power** is the rate of doing work or transferring energy: **P = W/t**. Units: **watt**, 1 W = 1 J/s. For a constant force and speed, P = Fv.' ] },
        { cue: 'A 60 kg student climbs 3.0 m of stairs in 4.0 s. What is the student\'s power?', notes: [
          'Work against gravity: W = mgh = (60)(9.8)(3.0) = 1764 J.',
          'P = W/t = 1764/4.0 = **441 W**.' ] },
        { cue: 'If you lift the same box the same height faster, what changes?', notes: [
          'The **work is the same**. The **power is greater**, because the same work is done in less time.' ] },
      ],
      ixl: [],
      ixlNote: 'No IXL Physics skill covers power. Use the matching Concept Builders at physicsclassroom.com.',
    },
    {
      title: '6. Labs, Models, and Engineering Design',
      ixlRange: 'Physics A.2',
      rows: [
        { cue: 'How do you test conservation of energy with a cart on a ramp?', notes: [
          'Release a cart from a measured height h and measure its speed at the bottom. Compare **mgh** at the top with **½mv²** at the bottom.',
          'Independent variable: release height. Dependent variable: speed at the bottom. The small difference is energy transferred by friction.' ] },
        { cue: 'What is an energy bar chart?', notes: [
          'A bar graph of each kind of energy (KE, gravitational PE, elastic PE, thermal) at two moments. The **total height of the bars is the same** before and after if the system is closed.' ] },
        { cue: 'How can a spreadsheet model energy?', notes: [
          'Make columns for height, PE = mgh, KE = total − PE, and speed = √(2KE/m). Changing the starting height updates every row. This is a simple **computational model** (HS-PS3-1).' ] },
        { cue: 'What is the goal of the energy conversion device project?', notes: [
          'Design, build, and refine a device (for example a rubber-band or mousetrap car) that converts one form of energy into another within given constraints, then measure how much of the stored energy became useful motion.' ] },
      ],
      ixl: [['Physics A.2', 'Identify independent and dependent variables']],
    },
  ],
  tricks: [
    ['Work = force × distance in the same direction', 'A force perpendicular to the motion does no work. Use to spot zero-work situations.'],
    ['KE is motion, PE is position', 'Kinetic energy needs speed; potential energy needs height or stretch.'],
    ['Speed is squared', 'Double the speed, four times the kinetic energy and four times the braking distance.'],
    ['Energy bar charts (LOL diagrams)', 'Bars before, system circle in the middle, bars after. Total bar height stays the same in a closed system.'],
    ['Power is how fast', 'Same work in less time means more power: P = W/t.'],
  ],
  summary: 'Work is how forces transfer energy: a force acting along a displacement does work W = Fd cos θ, and the net work on an object equals its change in kinetic energy. Energy can be stored as gravitational potential energy (mgh) or elastic potential energy (½kx²) and released as kinetic energy (½mv²). The total energy of a closed system never changes. Without friction, kinetic plus potential energy stays constant, which lets us find speeds from heights without knowing the path. With friction, some mechanical energy becomes thermal energy, but the total is still conserved. Power measures how quickly the energy is transferred.',
  visuals: [
    ['fd_graph.png', 'Force-displacement graph: the shaded area under the line is the work done.', 'W = Fd = area'],
    ['coaster.png', 'Roller coaster: potential energy is greatest at the top, kinetic energy is greatest at the bottom, and the total stays the same.', 'KE + PE = constant (no friction)'],
    ['bar_chart.png', 'Energy bar charts for an object falling without friction: PE shrinks as KE grows, and the total bar height is unchanged.', 'KE₁ + PE₁ = KE₂ + PE₂'],
    ['ke_speed.png', 'Kinetic energy vs speed is a curve, not a line: doubling the speed gives four times the kinetic energy.', 'KE = ½mv²'],
  ],
  resources: [
    ['The Physics Classroom: Work, Energy, and Power tutorial', 'https://www.physicsclassroom.com/class/energy', 'Readings on work, each energy form, conservation, and power.'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', 'Self-checking practice on work, power, and energy bar charts.'],
    ['PhET: Energy Skate Park', 'https://phet.colorado.edu/en/simulations/energy-skate-park', 'Live energy bar charts for a skater on a track, with and without friction.'],
    ['OpenStax Physics, Ch. 9', 'https://openstax.org/details/books/physics', 'Free textbook: Work, Energy, and Simple Machines.'],
    ['Khan Academy Physics', 'https://www.khanacademy.org/science/physics', 'Worked conservation of energy problems.'],
    ['IXL Physics section H; Grade 8 section J', 'https://www.ixl.com/science/physics', 'Skill practice to SmartScore 80+.'],
  ],
  practice: [
    ['How much work is done lifting a 20 kg box 1.5 m at constant speed?', 'W = mgh = (20)(9.8)(1.5) = 294 J.'],
    ['A 30 N force at 37° above the horizontal pulls a wagon 5.0 m. How much work does it do?', 'W = (30)(5.0) cos 37° = 120 J.'],
    ['Find the kinetic energy of a 0.145 kg baseball moving at 40 m/s.', 'KE = ½(0.145)(40)² = 116 J.'],
    ['A 2.0 kg rock is dropped from 10 m. Ignoring air resistance, find its kinetic energy and speed just before it lands.', 'KE = mgh = 196 J; v = √(2 × 9.8 × 10) = 14 m/s.'],
    ['A pendulum bob is pulled back until it is 0.20 m above its lowest point and released. How fast is it moving at the bottom?', 'v = √(2 × 9.8 × 0.20) = 1.98 m/s.'],
    ['A 1200 kg car moving at 25 m/s brakes with a friction force of 7500 N. How far does it travel before stopping? What if it starts at 50 m/s?', 'KE = 375,000 J; d = 375,000/7500 = 50 m. At 50 m/s: 200 m.'],
    ['A motor lifts a 500 kg load 12 m in 20 s. Find the work done and the power.', 'W = (500)(9.8)(12) = 58,800 J; P = 58,800/20 = 2940 W.'],
    ['A spring (k = 400 N/m) compressed 0.050 m launches a 0.020 kg ball. Find the stored energy and the launch speed.', 'PE = ½(400)(0.050)² = 0.50 J; v = √(2 × 0.50/0.020) = 7.07 m/s.'],
  ],
  realWorld: [
    'Roller coasters: the first hill is the tallest because the cars never get more energy after the lift.',
    'Hydroelectric dams convert the gravitational potential energy of water into electrical energy.',
    'Regenerative braking in electric and hybrid cars recovers kinetic energy instead of turning it all into heat.',
    'Highway speed and braking distance: doubling speed quadruples the energy the brakes must remove.',
    'Wind turbines and solar panels are rated in watts and kilowatts, a direct use of power.',
  ],
  objectives: [
    ['E1', 'Calculate work done by a force at any angle and identify zero and negative work.', 'Practice problems 1–2; IXL Physics H.1; quiz Q1, Q4, Q9'],
    ['E2', 'Calculate kinetic energy and apply the work-energy theorem.', 'Practice problems 3 and 6; quiz Q2, Q5'],
    ['E3', 'Calculate gravitational and elastic potential energy.', 'Practice problems 4 and 8'],
    ['E4', 'Apply conservation of energy to solve problems with and without friction, using bar charts as models (HS-PS3-2).', 'Practice problems 4–5; ramp lab; quiz Q3, Q6, Q7, Q10'],
    ['E5', 'Calculate power and distinguish it from work.', 'Practice problem 7; stair-climb lab; quiz Q8'],
    ['E6', 'Build a spreadsheet model of energy changes (HS-PS3-1) and an energy conversion device (HS-PS3-3).', 'Spreadsheet model; device project scored with the engineering rubric'],
  ],
  quiz: [
    { q: 'You carry a 100 N box 5 m across a level floor at constant velocity. How much work does your upward lifting force do on the box?', choices: ['0 J', '500 J', '100 J', '20 J'], a: 0,
      why: 'The lifting force is vertical and the displacement is horizontal. A force perpendicular to the motion does no work.',
      miss: 'Multiplying force by distance without checking their directions, or equating "feeling tired" with doing work.' },
    { q: 'A car\'s speed doubles. What happens to its kinetic energy?', choices: ['It is four times as large', 'It doubles', 'It stays the same', 'It is eight times as large'], a: 0,
      why: 'KE = ½mv². The speed is squared, so 2² = 4 times the energy.',
      miss: 'Assuming kinetic energy is proportional to speed.' },
    { q: 'Two identical balls start from the same height. One is dropped; the other slides down a frictionless ramp. How do their speeds at the bottom compare?', choices: ['They are the same', 'The dropped ball is faster', 'The ball on the ramp is faster', 'It depends on the angle of the ramp'], a: 0,
      why: 'Both lose the same potential energy, mgh, and it all becomes kinetic energy. The path does not matter. (The ramp ball takes longer, but arrives at the same speed.)',
      miss: 'Mixing up speed with time, or thinking a longer path means more speed.' },
    { q: 'You hold a heavy box motionless above your head for one minute. How much work do you do on the box?', choices: ['Zero', 'The box\'s weight times its height', 'The box\'s weight times 60 s', 'It depends on how tired you get'], a: 0,
      why: 'Work needs a displacement. The box does not move, so no work is done on it, even though your muscles use energy internally.',
      miss: 'Using the everyday meaning of "work" as effort.' },
    { q: 'A car\'s speed doubles. With the same braking force, what happens to its braking distance?', choices: ['It is four times as long', 'It doubles', 'It stays the same', 'It is half as long'], a: 0,
      why: 'The brakes must remove all the kinetic energy: Fd = ½mv². Four times the kinetic energy needs four times the distance.',
      miss: 'Expecting distance to scale with speed instead of speed squared.' },
    { q: 'At the lowest point of a pendulum\'s swing, which is true?', choices: ['Kinetic energy is greatest and potential energy is least', 'Potential energy is greatest and kinetic energy is least', 'Both are at their greatest', 'Both are zero'], a: 0,
      why: 'The bob is lowest (least PE) and fastest (most KE) at the bottom. All the potential energy it had at the top has become kinetic energy.',
      miss: 'Reversing which energy goes with height and which with speed.' },
    { q: 'A roller coaster car loses speed on each hill because of friction. Which statement is correct?', choices: ['Mechanical energy decreases, but total energy is conserved', 'Total energy is destroyed by friction', 'Mechanical energy is conserved', 'Kinetic energy turns into more potential energy'], a: 0,
      why: 'Friction transforms mechanical energy into thermal energy. The track and wheels warm up; the total is unchanged.',
      miss: 'Saying energy is "lost" or "used up" rather than transformed.' },
    { q: 'You lift a box 2 m quickly, then lift an identical box 2 m slowly. Compare the work and the power.', choices: ['Same work; more power for the quick lift', 'More work and more power for the quick lift', 'Same work and same power', 'More work for the slow lift because it takes longer'], a: 0,
      why: 'Work = mgh is the same both times. Power = work ÷ time, so less time means more power.',
      miss: 'Treating work and power as the same thing.' },
    { q: 'A box slides across a rough floor and stops. What kind of work did friction do on the box?', choices: ['Negative work', 'Positive work', 'Zero work', 'It depends on the mass of the box'], a: 0,
      why: 'Friction points opposite to the motion, so cos 180° = −1. Negative work removes kinetic energy from the box.',
      miss: 'Thinking work is always positive, or that friction does no work.' },
    { q: 'A 2 kg ball and a 4 kg ball are dropped from the same height. Ignoring air resistance, compare them just before they land.', choices: ['Same speed; the 4 kg ball has twice the kinetic energy', 'The 4 kg ball is faster and has more kinetic energy', 'Same speed and same kinetic energy', 'The 2 kg ball is faster; kinetic energies are equal'], a: 0,
      why: 'From mgh = ½mv², the mass cancels, so v = √(2gh) for both. Kinetic energy does depend on mass, so twice the mass has twice the KE.',
      miss: 'Thinking heavier objects fall faster, or that equal speed means equal energy.' },
  ],
};
