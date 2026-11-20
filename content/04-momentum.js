module.exports = {
  id: '04-momentum', num: 4, title: 'Momentum', weeks: '3 weeks',
  subtitle: 'Physics | Semester 1, Unit 4 | Momentum, impulse, conservation of momentum, collisions',
  ngss: ['HS-PS2-2: Use mathematical representations to support the claim that total momentum is conserved when there is no net force on the system', 'HS-PS2-3: Design, evaluate and refine a device that minimizes the force on an object during a collision', 'HS-ETS1-2 and HS-ETS1-3 (engineering design)', 'CCC: Systems and System Models'],
  essential: 'Why do airbags, helmets and crumple zones save lives?',
  targets: [
    'I can calculate the momentum of an object and the total momentum of a system.',
    'I can use the impulse-momentum theorem to relate force, time and change in momentum.',
    'I can explain how increasing collision time reduces force.',
    'I can use conservation of momentum to solve collision and explosion problems.',
    'I can tell elastic collisions from inelastic collisions.'
  ],
  keyConcepts: [
    'Momentum p = mv is a vector; direction (sign) matters',
    'Impulse = FΔt = Δp (impulse-momentum theorem)',
    'Longer collision time means smaller force for the same change in momentum',
    'Conservation of momentum: total momentum before = total momentum after (no net external force)',
    'Elastic collisions conserve kinetic energy; inelastic collisions do not; momentum is conserved in both',
    'Engineering link: designing a device to reduce collision force'
  ],
  sections: [
    { title: 'Momentum',
      ixl: [['Physics G (New)', 'Calculate linear momentum and impulse']],
      rows: [
        ['What is momentum and how is it calculated?', [
          '**Momentum** is mass in motion: **p = mv**. Unit: kg·m/s. It is a vector in the direction of the velocity.',
          'Worked example: a 1200 kg car moving at 20 m/s. p = 1200 × 20 = **24,000 kg·m/s**.']],
        ['Can a light object have more momentum than a heavy one?', [
          'Yes, if it is moving fast enough.',
          'Worked example: a 0.010 kg bullet at 800 m/s has p = **8.0 kg·m/s**. A 60 kg person strolling at 0.10 m/s has p = **6.0 kg·m/s**.']],
        ['Why does the sign of momentum matter?', [
          'Momentum to the right is +, to the left is −. An object that bounces back reverses the sign of its momentum, so its change is large.']]
      ] },
    { title: 'Impulse and Changing Momentum',
      ixl: [['Grade 8 I.7', 'Collisions and car safety features']],
      noIxl: 'Impulse calculations are in Physics G (New), listed in Section 1.',
      rows: [
        ['What is impulse and how is it related to momentum?', [
          '**Impulse = FΔt**. It equals the **change in momentum**: FΔt = mΔv = m(v_{f} − v_{i}).',
          'Units: N·s, which is the same as kg·m/s.',
          'On a force-time graph, impulse is the **area** under the line.']],
        ['How do I find the force on a ball hit by a bat?', [
          'Worked example: a 0.15 kg baseball arrives at 40 m/s and leaves at 50 m/s the other way. Take the incoming direction as +.',
          'Δp = 0.15 × (−50 − 40) = **−13.5 kg·m/s**. With a contact time of 0.0030 s, F = 13.5 ÷ 0.0030 = **4500 N**.']],
        ['Why does an airbag reduce the force on a passenger?', [
          'The change in momentum is the same with or without the bag. The airbag makes the stop take **longer**, so the force is **smaller**.',
          'Worked example: a 70 kg passenger stops from 15 m/s. Δp = 70 × 15 = 1050 kg·m/s. Stopping in 0.010 s: F = **105,000 N**. Stopping in 0.10 s: F = **10,500 N**.']],
        ['Which has the larger impulse: a ball that bounces or one that sticks?', [
          'The one that **bounces**. It must be stopped and then sent back, so its change in momentum is larger.']]
      ] },
    { title: 'Conservation of Momentum',
      ixl: [['Physics G.1', 'Conservation of momentum']],
      rows: [
        ['What does the law of conservation of momentum say?', [
          'If no net external force acts on a system, its **total momentum stays the same**: p_{before} = p_{after}.']],
        ['Why is momentum conserved in a collision?', [
          'Third law: the two objects push on each other with equal and opposite forces for the same time. Their impulses are equal and opposite, so what one gains the other loses.']],
        ['How do I solve a collision where the objects stick together?', [
          'Worked example: a 2.0 kg cart at 3.0 m/s hits a 1.0 kg cart at rest and they stick.',
          'Before: (2.0)(3.0) + (1.0)(0) = 6.0 kg·m/s. After: (2.0 + 1.0)v = 6.0, so v = **2.0 m/s**.']],
        ['How do I solve a recoil (explosion) problem?', [
          'Total momentum starts at zero and stays at zero.',
          'Worked example: a 60 kg skater at rest throws a 2.0 kg ball forward at 9.0 m/s. 0 = (2.0)(9.0) + (60)v, so v = **−0.30 m/s** (backward).']]
      ] },
    { title: 'Types of Collisions',
      noIxl: 'No IXL skill on elastic versus inelastic collisions. Use the Momentum and Collisions Concept Builders at physicsclassroom.com.',
      ixl: [],
      rows: [
        ['What is the difference between elastic and inelastic collisions?', [
          '**Elastic:** objects bounce apart; momentum **and** kinetic energy are conserved.',
          '**Inelastic:** some kinetic energy becomes heat, sound or deformation. **Perfectly inelastic:** the objects stick together.']],
        ['Is momentum conserved in an inelastic collision?', [
          '**Yes.** Momentum is conserved in every collision in an isolated system. Only kinetic energy is not.',
          'Worked check (carts above): kinetic energy before = ½(2.0)(3.0)² = 9.0 J. After = ½(3.0)(2.0)² = 6.0 J. **3.0 J** became heat, sound and deformation.']]
      ] },
    { title: 'Labs and Engineering', lab: true,
      ixl: [['Grade 8 C.1', 'Identify parts of the engineering-design process'], ['Grade 8 C.2', 'Evaluate tests of engineering-design solutions'], ['Grade 8 C.3', 'Use data from tests to compare engineering-design solutions']],
      rows: [
        ['In a collision-cart lab, how do we test conservation of momentum?', [
          'Measure each cart\'s mass and its velocity before and after. Add up mv for both carts before and after and compare the totals.']],
        ['In an egg-drop or crash-cushion design challenge, what are we trying to change?', [
          'The **stopping time**. A design that makes the stop last longer lowers the force (FΔt = Δp).',
          'Independent variable: the design or padding. Dependent variable: the force on the egg, or whether it survives. Controlled: drop height and mass.']]
      ] }
  ],
  mnemonics: [
    ['p = mv.', 'Any time the question asks "how hard is it to stop?"'],
    ['Ft = mΔv.', 'Whenever force, time and a change in speed appear in the same problem.'],
    ['More time, less force.', 'Explaining airbags, helmets, bent knees on landing, catching with "soft hands".'],
    ['Momentum is conserved in every collision; kinetic energy only in elastic ones.', 'Deciding what you are allowed to set equal before and after.'],
    ['Pick a positive direction and keep it.', 'Head-on collisions, rebounds and recoil problems.']
  ],
  summary: 'Momentum measures how much motion an object has. A force acting for a time, an impulse, changes it. Stretching out the time of a collision lowers the force, which is the idea behind most safety equipment. When two objects interact, the third law makes their momentum changes equal and opposite, so the total momentum of the system is the same before and after. Kinetic energy may or may not survive the collision, but momentum always does.',
  visuals: [
    { img: 'inelastic.png', caption: 'Perfectly inelastic collision: the carts stick and share the original momentum.', rule: '(2.0)(3.0) + 0 = (3.0)v, so v = 2.0 m/s' },
    { img: 'recoil.png', caption: 'Recoil: the system starts at rest, so the two momenta afterward are equal and opposite.', rule: '0 = (2.0)(9.0) + (60)(−0.30)' },
    { img: 'impulse-graph.png', caption: 'Force-time graph: both stops have the same area (same impulse); the longer stop has the smaller peak force.', rule: 'Impulse = area = FΔt = Δp' },
    { img: 'bounce-vs-stick.png', caption: 'A ball that bounces has a larger change in momentum than one that sticks.', rule: 'Stick: Δp = mv. Bounce: Δp up to 2mv' }
  ],
  objectives: [
    ['M1', 'Calculate momentum for objects and systems', 'HS-PS2-2', 'Correct value, unit and direction on 4 of 5 problems'],
    ['M2', 'Apply the impulse-momentum theorem', 'HS-PS2-2; HS-PS2-3', 'Solves for force, time or velocity change; handles a rebound sign correctly'],
    ['M3', 'Explain force reduction by extending collision time', 'HS-PS2-3', 'Explanation states that Δp is unchanged and time increases'],
    ['M4', 'Solve collision and recoil problems with conservation of momentum', 'HS-PS2-2; SEP Using Mathematics', 'Writes total momentum before and after; correct final velocity with direction'],
    ['M5', 'Design, test and refine a collision-safety device', 'HS-PS2-3; HS-ETS1-2; HS-ETS1-3', 'Design meets constraints; test data recorded; one documented revision justified with impulse reasoning']
  ],
  resources: [
    ['The Physics Classroom: Momentum and Its Conservation tutorial', 'https://www.physicsclassroom.com/class/momentum', 'Impulse, conservation and collision lessons'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', 'Choose Momentum and Collisions'],
    ['PhET: Collision Lab', 'https://phet.colorado.edu/en/simulations/collision-lab', 'Set masses and elasticity; watch the momentum totals'],
    ['OpenStax Physics, Ch. 8', 'https://openstax.org/details/books/physics', 'Free textbook: Momentum'],
    ['Khan Academy: Physics', 'https://www.khanacademy.org/science/physics', 'Impacts and linear momentum videos and exercises'],
    ['IXL Physics, section G', 'https://www.ixl.com/science/physics', 'Skills listed in the IXL Practice Plan']
  ],
  practice: [
    ['Find the momentum of a 0.060 kg tennis ball served at 50 m/s.', 'p = 0.060 × 50 = 3.0 kg·m/s in the direction of the serve.'],
    ['A 1000 kg car slows from 25 m/s to 10 m/s in 5.0 s. Find the impulse and the average braking force.', 'Δp = 1000 × (10 − 25) = −15,000 kg·m/s; F = −15,000 ÷ 5.0 = −3000 N (opposite to the motion).'],
    ['A 0.50 kg ball hits a wall at 4.0 m/s and rebounds at 4.0 m/s. Find the size of its change in momentum.', 'Δp = 0.50 × (−4.0 − 4.0) = −4.0 kg·m/s, so 4.0 kg·m/s.'],
    ['A 3.0 kg cart at 4.0 m/s collides with and sticks to a 1.0 kg cart at rest. Find the final velocity.', '12 = (4.0)v, so v = 3.0 m/s.'],
    ['Two skaters, 50 kg and 100 kg, push apart from rest. The 50 kg skater moves at 2.0 m/s. Find the other skater\'s velocity.', '0 = (50)(2.0) + (100)v, so v = −1.0 m/s (opposite direction).']
  ],
  applications: [
    'Car safety: airbags, crumple zones, seat belts that stretch',
    'Helmets and padding in football, cycling and skateboarding',
    'Catching a ball with "soft hands"; bending the knees when landing',
    'Rocket and jet propulsion; recoil of a fire hose',
    'Crash reconstruction by accident investigators'
  ],
  quiz: [
    { q: 'A loaded truck and a small car collide head-on. Compared with the car, the size of the truck\'s change in momentum is:', c: ['larger', 'smaller', 'the same', 'zero'], a: 2,
      why: 'The forces are equal and opposite and act for the same time, so the impulses, and the momentum changes, are equal in size. The car\'s velocity changes more because its mass is smaller.', trap: 'Thinking the heavier vehicle has the bigger change in momentum.' },
    { q: 'An airbag reduces injury in a crash mainly because it:', c: ['reduces the passenger\'s change in momentum', 'increases the time over which the passenger stops', 'reduces the passenger\'s mass', 'increases the passenger\'s impulse'], a: 1,
      why: 'The passenger goes from the same speed to zero either way, so Δp is fixed. Spreading the stop over a longer time makes the force smaller (FΔt = Δp).', trap: 'Saying the airbag reduces the momentum change or the impulse.' },
    { q: 'A rubber ball and a ball of clay with the same mass hit a wall at the same speed. The rubber ball bounces back; the clay sticks. Which receives the larger impulse from the wall?', c: ['The clay', 'The rubber ball', 'They are equal', 'Neither receives an impulse'], a: 1,
      why: 'The clay goes from v to 0 (Δp = mv). The rubber ball goes from v to nearly −v (Δp up to 2mv). A bigger momentum change needs a bigger impulse.', trap: 'Assuming that sticking is the "harder" hit.' },
    { q: 'A 2.0 kg cart moving at 3.0 m/s hits a 1.0 kg cart at rest. They stick together. What is their speed afterward?', c: ['1.0 m/s', '1.5 m/s', '2.0 m/s', '3.0 m/s'], a: 2,
      why: 'Momentum before = 2.0 × 3.0 = 6.0 kg·m/s. After, the mass is 3.0 kg, so v = 6.0 ÷ 3.0 = 2.0 m/s.', trap: 'Forgetting to use the combined mass after the collision, or averaging the two speeds.' },
    { q: 'In an inelastic collision between two carts on a frictionless track:', c: ['momentum and kinetic energy are both conserved', 'momentum is conserved but kinetic energy is not', 'kinetic energy is conserved but momentum is not', 'neither is conserved'], a: 1,
      why: 'Momentum is conserved in every collision with no net external force. In an inelastic collision some kinetic energy becomes heat, sound and deformation.', trap: 'Thinking momentum is "lost" when things crumple or stick.' },
    { q: 'A 0.50 kg ball hits a wall at 4.0 m/s and bounces straight back at 4.0 m/s. The size of its change in momentum is:', c: ['0 kg·m/s', '2.0 kg·m/s', '4.0 kg·m/s', '8.0 kg·m/s'], a: 2,
      why: 'Momentum is a vector. Δp = 0.50 × (−4.0) − 0.50 × (4.0) = −4.0 kg·m/s, so the size is 4.0 kg·m/s.', trap: 'Subtracting speeds (4 − 4 = 0) and ignoring the change of direction.' },
    { q: 'Two skaters at rest push off each other. The 50 kg skater moves away at 2.0 m/s. How fast does the 100 kg skater move?', c: ['4.0 m/s', '2.0 m/s', '1.0 m/s', '0.50 m/s'], a: 2,
      why: 'Total momentum stays zero: 50 × 2.0 = 100 × v, so v = 1.0 m/s in the opposite direction.', trap: 'Giving the heavier skater the higher speed, or the same speed.' },
    { q: 'For the two skaters above, what is the total momentum of the two-skater system after they push off?', c: ['200 kg·m/s', '100 kg·m/s', '50 kg·m/s', '0 kg·m/s'], a: 3,
      why: 'They started at rest (total momentum zero) and the only forces were between the skaters, so the total is still zero: +100 and −100 kg·m/s.', trap: 'Adding the sizes of the momenta and ignoring direction.' }
  ]
};
