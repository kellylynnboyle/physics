module.exports = {
  id: '05-work-energy', num: 5, title: 'Work and Energy', weeks: '3 weeks',
  subtitle: 'Physics | Semester 1, Unit 5 | Work, kinetic and potential energy, conservation of energy, power',
  ngss: ['HS-PS3-1: Create a computational model to calculate the change in energy of one component of a system', 'HS-PS3-2: Develop and use models showing energy as motion of objects and relative position of objects', 'HS-PS3-3: Design, build and refine a device that converts one form of energy into another', 'CCC: Energy and Matter'],
  essential: 'Where does the energy go when a roller coaster slows down?',
  targets: [
    'I can calculate the work done by a force and say when the work is zero.',
    'I can calculate kinetic energy and gravitational potential energy.',
    'I can use the work-energy theorem to connect work and a change in speed.',
    'I can use conservation of energy to find speeds and heights, with and without friction.',
    'I can calculate power.'
  ],
  keyConcepts: [
    'Work W = Fd cos θ; only the part of the force along the motion does work',
    'Kinetic energy KE = ½mv²; gravitational potential energy PE = mgh; elastic potential energy = ½kx²',
    'Work-energy theorem: W_{net} = ΔKE',
    'Conservation of mechanical energy when friction and air resistance are negligible',
    'With friction, mechanical energy becomes thermal energy; total energy is still conserved',
    'Power P = W ÷ t, measured in watts'
  ],
  sections: [
    { title: 'Work',
      ixl: [['Physics H.1', 'Calculate work'], ['Physics H (New)', 'Calculate work from force-displacement graphs'], ['Grade 8 KK.6', 'Abbreviate force, energy, and electricity units']],
      rows: [
        ['What is work and how is it calculated?', [
          '**Work** is energy transferred by a force acting through a distance: **W = Fd cos θ**, where θ is the angle between the force and the displacement.',
          'Unit: the **joule**. 1 J = 1 N·m.',
          'Worked example: a 50 N push moves a crate 4.0 m in the direction of the push. W = 50 × 4.0 = **200 J**.',
          'Worked example: a 50 N pull at 60° above horizontal over 4.0 m. W = 50 × 4.0 × cos 60° = **100 J**.']],
        ['When is the work done by a force zero?', [
          'When there is **no displacement** (holding a heavy box still).',
          'When the force is **perpendicular** to the motion (carrying a box across a level floor: the upward lift does no work).']],
        ['Can work be negative?', [
          'Yes. A force opposite to the motion, such as friction, does **negative work** and removes energy from the object.',
          'On a force-displacement graph, work is the **area** under the line.']]
      ] },
    { title: 'Kinetic and Potential Energy',
      ixl: [['Grade 8 J.1', 'Identify changes in gravitational potential energy'], ['Grade 8 J.2', 'Use tables and graphs to identify patterns about kinetic energy']],
      rows: [
        ['How do I calculate kinetic energy?', [
          '**KE = ½mv²**. It is the energy of motion.',
          'Because speed is squared, doubling the speed gives **four times** the kinetic energy.',
          'Worked example: a 1000 kg car at 20 m/s. KE = ½(1000)(20)² = **200,000 J**.']],
        ['How do I calculate gravitational potential energy?', [
          '**PE = mgh**, where h is the height above a chosen zero level.',
          'Worked example: a 2.0 kg ball 5.0 m above the floor. PE = 2.0 × 9.8 × 5.0 = **98 J**.']],
        ['How much energy is stored in a spring?', [
          '**Elastic PE = ½kx²**, where k is the spring constant and x is the stretch or compression.',
          'Worked example: k = 200 N/m, compressed 0.10 m. PE = ½(200)(0.10)² = **1.0 J**.']],
        ['What does the work-energy theorem say?', [
          '**W_{net} = ΔKE.** Net work done on an object equals its change in kinetic energy.',
          'Worked example: 200 J of net work on a 4.0 kg crate starting at rest. ½(4.0)v² = 200, so v = √100 = **10 m/s**.']]
      ] },
    { title: 'Conservation of Energy',
      ixl: [['Physics H.2', 'Conservation of mechanical energy'], ['Grade 8 J.3', 'Explore energy transformations: roller coaster ride'], ['Grade 8 J.4', 'Explore energy transformations: bike ride']],
      rows: [
        ['What does the law of conservation of energy say?', [
          'Energy is never created or destroyed. It is only **transferred or transformed**.',
          '**Mechanical energy** (KE + PE) stays constant when friction and air resistance can be ignored: KE_{i} + PE_{i} = KE_{f} + PE_{f}.']],
        ['How fast is a dropped object moving after falling a height h?', [
          'mgh = ½mv², so **v = √(2gh)**. The mass cancels.',
          'Worked example: a ball dropped from 5.0 m. v = √(2 × 9.8 × 5.0) = √98 = **9.9 m/s**.']],
        ['How do I find a roller coaster\'s speed at different heights?', [
          'Worked example: a car starts from rest at the top of a 20 m hill (no friction).',
          'At the bottom: v = √(2 × 9.8 × 20) = **19.8 m/s**.',
          'On top of a 10 m hill it has dropped 10 m: v = √(2 × 9.8 × 10) = **14.0 m/s**.']],
        ['Where does the energy go when there is friction?', [
          'It becomes **thermal energy** (the surfaces warm up). Total energy is still conserved.',
          'Worked example: a 2.0 kg block starts at rest 5.0 m up a rough ramp (PE = 98 J) and reaches the bottom at 8.0 m/s (KE = ½(2.0)(8.0)² = 64 J). Thermal energy = 98 − 64 = **34 J**.']]
      ] },
    { title: 'Power',
      noIxl: 'No IXL Physics skill on power. Use the Work and Energy Concept Builders at physicsclassroom.com.',
      ixl: [],
      rows: [
        ['What is power and how is it calculated?', [
          '**Power** is how fast work is done: **P = W ÷ t**. Unit: the **watt**. 1 W = 1 J/s. Also P = Fv for a steady force and speed.',
          'Worked example: a 60 kg student climbs stairs 3.0 m high in 4.0 s. W = mgh = 60 × 9.8 × 3.0 = 1764 J. P = 1764 ÷ 4.0 = **441 W**.']],
        ['If two people do the same job at different speeds, what is different?', [
          'The **work is the same**. The faster person has the greater **power**.']],
        ['Is a kilowatt-hour a unit of power or energy?', [
          '**Energy.** 1 kWh = 1000 W × 3600 s = 3.6 million joules.']]
      ] },
    { title: 'Labs and Engineering', lab: true,
      ixl: [['Physics A.2', 'Identify independent and dependent variables']],
      rows: [
        ['In a stair-climb power lab, what do I measure?', [
          'Your mass (or weight), the vertical height of the stairs, and your time. Then P = mgh ÷ t.',
          'Only the **vertical** height counts, because gravity acts vertically.']],
        ['In a ramp or pendulum energy lab, what are we comparing?', [
          'The potential energy lost (mgh) with the kinetic energy gained (½mv²).',
          'Independent variable: **release height**. Dependent variable: **speed at the bottom**. Any shortfall is energy transferred to thermal energy by friction.']]
      ] }
  ],
  mnemonics: [
    ['Work needs a force and a distance in the same direction.', 'Any "is work done?" question: check for motion, then check the angle.'],
    ['Double the speed, four times the kinetic energy.', 'Comparing stopping distances or crash energy at different speeds.'],
    ['Energy at the start = energy at the end.', 'Every conservation problem: list KE and PE at both points before solving.'],
    ['Energy bar charts.', 'Draw bars for KE, PE and thermal energy at the start and end; the totals must match.'],
    ['Power is work per second.', 'Whenever the question includes a time.']
  ],
  summary: 'Work is how forces move energy into or out of an object. Energy of motion is kinetic; energy of position is potential. In a system without friction the two trade back and forth while their total stays fixed, which lets us find speeds from heights without knowing the path. With friction, some mechanical energy becomes thermal energy, but the total is still conserved. Power is the rate at which the work is done.',
  visuals: [
    { img: 'work-angle.png', caption: 'Only the component of the force along the displacement does work.', rule: 'W = Fd cos θ = 50 × 4.0 × cos 60° = 100 J' },
    { img: 'fd-graph.png', caption: 'Force-displacement graph: the shaded area is the work done.', rule: 'W = area = 50 N × 4.0 m = 200 J' },
    { img: 'coaster.png', caption: 'A frictionless roller coaster: potential energy becomes kinetic energy on the way down and back again on the way up.', rule: 'KE + PE = constant; v = √(2g × drop)' },
    { img: 'energy-bars.png', caption: 'Energy bar chart for a block sliding down a rough ramp: the totals at the start and end are equal.', rule: '98 J = 64 J + 34 J (thermal)' }
  ],
  objectives: [
    ['E1', 'Calculate work, including zero and negative work', 'HS-PS3-1', 'Correct value and sign on 4 of 5 problems; explains one zero-work case'],
    ['E2', 'Calculate kinetic and potential energy', 'HS-PS3-2', 'Correct values with units; states the effect of doubling speed'],
    ['E3', 'Apply the work-energy theorem', 'HS-PS3-1; SEP Using Mathematics', 'Finds a final speed or a stopping distance from net work'],
    ['E4', 'Use conservation of energy with and without friction', 'HS-PS3-1; HS-PS3-2; CCC Energy and Matter', 'Energy bar chart drawn; speed or height correct; names where "missing" energy went'],
    ['E5', 'Calculate power', 'HS-PS3-1 (supporting)', 'Correct power in watts; tells work from power in words'],
    ['E6', 'Design, build and refine an energy-conversion device', 'HS-PS3-3; HS-ETS1-2', 'Device meets constraints; energy in and out measured; one documented improvement']
  ],
  resources: [
    ['The Physics Classroom: Work, Energy and Power tutorial', 'https://www.physicsclassroom.com/class/energy', 'Work, energy bar charts and conservation lessons'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', 'Choose Work and Energy'],
    ['PhET: Energy Skate Park: Basics', 'https://phet.colorado.edu/en/simulations/energy-skate-park-basics', 'Live energy bar charts with and without friction'],
    ['OpenStax Physics, Ch. 9', 'https://openstax.org/details/books/physics', 'Free textbook: Work, Energy, and Simple Machines'],
    ['Khan Academy: Physics', 'https://www.khanacademy.org/science/physics', 'Work and energy videos and exercises'],
    ['IXL Physics, section H', 'https://www.ixl.com/science/physics', 'Skills listed in the IXL Practice Plan']
  ],
  practice: [
    ['A 30 N force pulls a wagon 12 m. The handle makes a 40° angle with the ground. How much work is done?', 'W = 30 × 12 × cos 40° = 276 J.'],
    ['Find the kinetic energy of a 0.145 kg baseball thrown at 40 m/s.', 'KE = ½(0.145)(40)² = 116 J.'],
    ['A 0.50 kg ball is dropped from 12 m. Find its speed just before it lands (no air resistance).', 'v = √(2 × 9.8 × 12) = 15.3 m/s.'],
    ['A 1200 kg car moving at 20 m/s brakes to a stop with an 8000 N friction force. How far does it travel?', 'KE = ½(1200)(20)² = 240,000 J; d = 240,000 ÷ 8000 = 30 m.'],
    ['A motor lifts a 50 kg load 6.0 m in 10 s. What is its power output?', 'W = 50 × 9.8 × 6.0 = 2940 J; P = 2940 ÷ 10 = 294 W.']
  ],
  applications: [
    'Roller coasters and skate parks (potential and kinetic energy trading places)',
    'Stopping distance: four times longer at double the speed',
    'Hydroelectric dams, wind turbines and regenerative braking in electric cars',
    'Sports: pole vault, bow and arrow, trampoline',
    'Reading an electricity bill in kilowatt-hours'
  ],
  quiz: [
    { q: 'A student holds a 20 kg box motionless at chest height for 10 s. How much work does the student do on the box?', c: ['0 J', '196 J', '1960 J', '2000 J'], a: 0,
      why: 'Work needs a displacement. The box does not move, so the work on it is zero, even though the student gets tired.', trap: 'Equating effort or tiredness with work.' },
    { q: 'A waiter carries a tray across a level room at constant velocity. The work done on the tray by the upward force of the waiter\'s hand is:', c: ['positive', 'negative', 'zero', 'equal to the tray\'s weight times the distance walked'], a: 2,
      why: 'The force is vertical and the displacement is horizontal. With θ = 90°, cos θ = 0, so W = 0.', trap: 'Multiplying force by distance without checking that they are in the same direction.' },
    { q: 'A car doubles its speed. Its kinetic energy becomes:', c: ['twice as large', 'three times as large', 'four times as large', 'half as large'], a: 2,
      why: 'KE = ½mv². Doubling v multiplies v² by 4.', trap: 'Treating kinetic energy as proportional to speed.' },
    { q: 'A heavy ball and a light ball slide from rest down the same frictionless ramp. At the bottom:', c: ['the heavy ball is faster', 'the light ball is faster', 'they have the same speed', 'they have the same kinetic energy'], a: 2,
      why: 'mgh = ½mv², so v = √(2gh). Mass cancels. The heavy ball has more kinetic energy, but the speeds are equal.', trap: 'Thinking more mass means more speed, or mixing up speed and kinetic energy.' },
    { q: 'A ball is dropped from a height of 5.0 m. Ignoring air resistance, its speed just before landing is about:', c: ['4.9 m/s', '9.9 m/s', '49 m/s', '98 m/s'], a: 1,
      why: 'v = √(2gh) = √(2 × 9.8 × 5.0) = √98 ≈ 9.9 m/s.', trap: 'Forgetting the square root (98) or computing gh only (49).' },
    { q: 'Two students with the same mass climb the same staircase. Student A takes 5 s; student B takes 10 s. Compared with B, student A does:', c: ['more work and has more power', 'the same work and has twice the power', 'the same work and has the same power', 'half the work and has the same power'], a: 1,
      why: 'Work = mgh is the same for both. Power = work ÷ time, so half the time means twice the power.', trap: 'Confusing work with power.' },
    { q: 'A block slides down a rough ramp and reaches the bottom with less kinetic energy than the potential energy it started with. The "missing" energy:', c: ['was destroyed by friction', 'became thermal energy', 'is stored as potential energy', 'never existed'], a: 1,
      why: 'Energy cannot be destroyed. Friction transfers mechanical energy into thermal energy in the block and ramp.', trap: 'Saying energy is "lost" or "used up".' },
    { q: 'Three identical stones are thrown from a cliff with the same speed: one upward, one horizontally, one downward. Ignoring air resistance, which hits the ground with the greatest speed?', c: ['The one thrown upward', 'The one thrown horizontally', 'The one thrown downward', 'All three have the same speed'], a: 3,
      why: 'All three start with the same kinetic and potential energy and end at the same height, so they end with the same kinetic energy and the same speed. Only their directions and times differ.', trap: 'Assuming that throwing downward adds extra speed at the ground.' }
  ]
};
