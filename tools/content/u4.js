module.exports = {
  id: '04-momentum',
  num: 4,
  title: 'Momentum',
  subtitle: 'Physics (Grade 11) | Semester 1, Unit 4 | Momentum, impulse, conservation of momentum, collisions',
  weeks: 'Weeks 12–14',
  overview: 'Momentum connects force with time. Students use impulse to explain why longer collisions are gentler, apply conservation of momentum to collisions and explosions, and design a device that reduces collision force.',
  ngss: [
    ['HS-PS2-2', 'Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system. (Assessment is limited to systems of two macroscopic bodies moving in one dimension.)'],
    ['HS-PS2-3', 'Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision.'],
    ['CCC: Systems and System Models', 'Define the system and its boundaries before deciding whether momentum is conserved.'],
  ],
  targets: [
    'I can calculate momentum and explain why its direction matters.',
    'I can use impulse (FΔt = Δp) to explain how increasing collision time reduces force.',
    'I can state when momentum is conserved and define the system.',
    'I can solve one-dimensional collision and explosion problems with conservation of momentum.',
    'I can tell elastic from inelastic collisions and say where kinetic energy goes.',
    'I can design and improve a device that reduces the force in a collision.',
  ],
  eq: 'Why are some collisions more damaging than others, and what stays the same in every collision?',
  concepts: [
    '**Momentum** – p = mv, a vector measured in kg·m/s.',
    '**Impulse** – force multiplied by time, equal to the change in momentum: FΔt = Δp.',
    '**Force-time trade-off** – for the same change in momentum, a longer time means a smaller force.',
    '**System** – the objects chosen for analysis; internal forces are between them, external forces come from outside.',
    '**Conservation of momentum** – total momentum of a system stays constant when no net external force acts.',
    '**Collision types** – elastic (kinetic energy conserved), inelastic (not conserved), perfectly inelastic (objects stick).',
    '**Engineering design** – criteria, constraints, testing and refining a collision-safety device.',
  ],
  objectives: [
    ['Calculate momentum and change in momentum, including sign.', 'Practice 1, 3; Quiz Q7'],
    ['Apply the impulse-momentum relationship to explain and calculate collision forces.', 'Quiz Q2, Q3, Q8, Q9; Practice 2, 3, 6'],
    ['State the condition for conservation of momentum and identify the system.', 'Quiz Q1, Q5, Q10'],
    ['Solve one-dimensional collision and explosion problems (HS-PS2-2).', 'Practice 4, 5, 7; IXL Physics G.1'],
    ['Classify collisions and account for kinetic energy.', 'Quiz Q4; Practice 4'],
    ['Design, test and refine a force-reducing device (HS-PS2-3).', 'Egg-drop design project rubric'],
  ],
  sections: [
    {
      title: '1. Momentum',
      ixlShort: 'IXL: Physics G (new skill)',
      ixl: [['Physics G (new, not yet numbered)', 'Calculate linear momentum and impulse']],
      rows: [
        ['What is momentum, and what are its units?', [
          '**Momentum** is mass times velocity: **p = mv**. Unit: **kg·m/s**.',
          'It is a **vector** that points the same way as the velocity. An object at rest has zero momentum, whatever its mass.',
        ]],
        ['Can a light object have more momentum than a heavy one?', [
          'Yes, if it is moving fast enough.',
          'Worked: a 0.15 kg baseball at 40 m/s has p = 0.15 × 40 = **6.0 kg·m/s**. A 7.0 kg bowling ball at 0.50 m/s has p = 7.0 × 0.50 = **3.5 kg·m/s**.',
        ]],
        ['Why does the sign of momentum matter?', [
          'Opposite directions get opposite signs. Two identical cars driving toward each other at the same speed have a **total momentum of zero**.',
          'Choose a positive direction at the start and keep it for the whole problem.',
        ]],
      ],
    },
    {
      title: '2. Impulse',
      ixlShort: 'IXL: Physics G (new skill)',
      ixl: [['Physics G (new, not yet numbered)', 'Calculate linear momentum and impulse']],
      rows: [
        ['What is impulse?', [
          '**Impulse** is force times the time it acts, and it equals the change in momentum: **FΔt = Δp = m(v − v₀)**.',
          'Units: N·s, which is the same as kg·m/s.',
          'On a force-time graph, impulse is the **area** under the line.',
        ]],
        ['Why do airbags, helmets and bent knees reduce injury?', [
          'The change in momentum is fixed by the crash. Padding makes the stop take **longer**, so the force is **smaller**: F = Δp/Δt.',
          'Worked: a 70 kg driver at 20 m/s stops. Δp = 1400 kg·m/s. Airbag (0.25 s): F = **5600 N**. Dashboard (0.010 s): F = **140 000 N**.',
        ]],
        ['Why does a ball that bounces deliver more impulse than one that sticks?', [
          'A bounce reverses the velocity, so the change in momentum is larger.',
          'Worked: a 0.50 kg ball hits a wall at 6.0 m/s and rebounds at 4.0 m/s. Taking toward the wall as positive: Δp = 0.50 × (−4.0 − 6.0) = **−5.0 kg·m/s**.',
          'If it had stuck: Δp = 0.50 × (0 − 6.0) = −3.0 kg·m/s. With 0.020 s of contact, the bounce force is 5.0 ÷ 0.020 = **250 N**.',
        ]],
      ],
    },
    {
      title: '3. Conservation of Momentum',
      ixlShort: 'IXL: Physics G.1',
      ixl: [['Physics G.1', 'Conservation of momentum']],
      rows: [
        ['When is the momentum of a system conserved?', [
          'When **no net external force** acts on the system. Then total momentum before = total momentum after.',
          'The **system** is the set of objects you choose to track. Forces between them are internal and cannot change the total.',
          'A falling ball gains momentum because gravity is an external force on the ball. Include Earth in the system and the total is conserved.',
        ]],
        ['Why is momentum conserved in a collision?', [
          'Newton\'s third law: the forces on the two objects are equal and opposite, and they last the same time.',
          'So the impulses are equal and opposite. One object gains exactly the momentum the other loses.',
        ]],
        ['How fast does a skater recoil after throwing a ball?', [
          'Worked: a 60 kg skater at rest throws a 2.0 kg ball forward at 9.0 m/s.',
          'Before: total p = 0. After: (2.0)(9.0) + (60)v = 0, so v = **−0.30 m/s** (backward).',
          'Sense check: the heavier object moves more slowly, and the two momenta cancel.',
        ]],
      ],
    },
    {
      title: '4. Collisions',
      ixlShort: 'IXL: Physics G.1',
      ixl: [['Physics G.1', 'Conservation of momentum']],
      rows: [
        ['What are the types of collision?', [
          '**Elastic**: objects bounce apart; momentum and kinetic energy are both conserved.',
          '**Inelastic**: momentum is conserved; some kinetic energy becomes thermal energy, sound and deformation.',
          '**Perfectly inelastic**: the objects stick together and move as one.',
          'Momentum is conserved in **all three**.',
        ]],
        ['What is the speed after a hit-and-stick collision?', [
          'Use m₁v₁ + m₂v₂ = (m₁ + m₂)v.',
          'Worked: a 2.0 kg cart at 3.0 m/s hits a 1.0 kg cart at rest and they stick. (2.0)(3.0) + 0 = (3.0)v, so v = **2.0 m/s**.',
          'Kinetic energy before: ½(2.0)(3.0)² = 9.0 J. After: ½(3.0)(2.0)² = 6.0 J. The missing **3.0 J** became thermal energy, sound and deformation.',
        ]],
        ['How do you handle a head-on collision?', [
          'Give one direction a negative sign.',
          'Worked: a 1000 kg car at +20 m/s and a 1500 kg truck at −10 m/s stick together. Total p = 20 000 − 15 000 = 5000 kg·m/s. v = 5000 ÷ 2500 = **+2.0 m/s** (the car\'s original direction).',
        ]],
      ],
    },
    {
      title: '5. Designing for Collisions',
      ixlShort: 'IXL: Grade 8 I.7',
      ixl: [['Grade 8 I.7', 'Collisions and car safety features']],
      rows: [
        ['How do crumple zones, airbags and helmets protect people?', [
          'They all **increase the time** of the collision (and spread the force over a larger area), which lowers the force for the same change in momentum.',
          'A rigid car would stop faster and put a larger force on the passengers.',
        ]],
        ['What are criteria and constraints in an engineering design?', [
          '**Criteria**: what the design must achieve (the egg survives a 3 m drop).',
          '**Constraints**: the limits (materials, mass, size, cost, time).',
          'Test, record what failed, change **one thing**, and test again. Explain each change using FΔt = Δp.',
        ]],
      ],
    },
    {
      title: '6. Labs and Measurement',
      lab: true,
      ixlShort: 'IXL: Physics A.2, B.3–4',
      ixl: [['Physics A.2', 'Identify independent and dependent variables'], ['Physics B.3', 'Multiply and divide with significant figures'], ['Physics B.4', 'Calculations with significant figures']],
      rows: [
        ['What do you measure in the cart-collision lab?', [
          '**Independent variable**: cart masses and the type of collision (bounce or stick).',
          '**Dependent variable**: each cart\'s velocity before and after, from photogates or a motion sensor.',
          'Calculate total momentum before and after, keeping signs for direction.',
        ]],
        ['How do you judge whether momentum was conserved?', [
          '**Percent difference** = |p(before) − p(after)| ÷ average × 100.',
          'Small differences come from friction on the track, which is an external force on the system.',
        ]],
      ],
    },
  ],
  tricks: [
    ['FΔt = mΔv (impulse = change in momentum)', 'Any question that links force, time and a change in speed.'],
    ['More time, less force', 'Explaining airbags, crumple zones, padding, catching with soft hands.'],
    ['Total momentum before = total momentum after', 'Every collision or explosion where outside forces are negligible.'],
    ['Hit and stick: m₁v₁ + m₂v₂ = (m₁ + m₂)v', 'Perfectly inelastic collisions.'],
    ['Draw a before picture and an after picture, with a + direction marked', 'Starting every momentum problem and keeping signs straight.'],
  ],
  summary: 'Momentum (p = mv) measures how hard it is to stop a moving object, and it has a direction. A force acting for a time delivers an impulse that changes momentum: FΔt = Δp. For a given change in momentum, stretching the time shrinks the force, which is how safety devices work. In a system with no net external force, total momentum is conserved, because the forces between the objects are equal and opposite. That holds for every type of collision; kinetic energy is conserved only in elastic ones.',
  visuals: [
    ['u4a.png', 'Two force-time graphs with the same area deliver the same impulse: a hard stop is tall and brief, a cushioned stop is low and long.', 'area = FΔt = Δp'],
    ['u4b.png', 'In a hit-and-stick collision the total momentum before equals the total momentum of the joined carts after.', 'm₁v₁ + m₂v₂ = (m₁ + m₂)v'],
    ['u4c.png', 'When two carts at rest push apart, they leave with equal and opposite momenta, so the total stays zero.', '0 = m₁v₁ + m₂v₂'],
    ['u4d.png', 'A ball that bounces back has a larger change in momentum than one that stops, because its velocity reverses.', 'Δp = m(v − v₀)'],
  ],
  noIxl: 'Elastic versus inelastic collisions and the engineering-design work have no matching IXL Physics skill. Use the physicsclassroom.com Concept Builders for Momentum and Collisions.',
  quiz: [
    { q: 'A large truck and a small car collide head-on. During the collision, the change in the truck\'s momentum is…', c: ['greater in size than the car\'s', 'smaller in size than the car\'s', 'equal in size and opposite in direction to the car\'s', 'zero, because the truck is so massive'], a: 2, why: 'The forces are equal and opposite (third law) and act for the same time, so the impulses, and therefore the momentum changes, are equal and opposite. The car\'s velocity changes more because its mass is smaller.', trap: 'Confusing change in momentum with change in velocity.' },
    { q: 'A rubber ball and a lump of clay with the same mass hit a door at the same speed. The ball bounces back; the clay sticks. Which gives the door the larger impulse?', c: ['The clay, because it stays on the door', 'The ball, because its momentum reverses', 'They give the same impulse', 'Neither gives any impulse'], a: 1, why: 'The clay\'s momentum changes from mv to 0. The ball\'s changes from mv to nearly −mv, almost twice as much. A larger change in momentum means a larger impulse.', trap: 'Thinking that sticking transfers more than bouncing.' },
    { q: 'An airbag protects a driver in a crash mainly by…', c: ['reducing the driver\'s change in momentum', 'increasing the time over which the driver stops', 'reducing the driver\'s mass', 'making the driver stop sooner'], a: 1, why: 'The change in momentum is the same with or without the airbag. Stopping over a longer time makes the force smaller: F = Δp/Δt.', trap: 'Believing safety devices reduce the change in momentum itself.' },
    { q: 'Two carts collide and stick together on a frictionless track. Which is true?', c: ['Momentum and kinetic energy are both conserved', 'Momentum is conserved; kinetic energy is not', 'Kinetic energy is conserved; momentum is not', 'Neither is conserved'], a: 1, why: 'Momentum is conserved in every collision with no net external force. In a sticking collision some kinetic energy becomes thermal energy, sound and deformation.', trap: 'Assuming that if kinetic energy is lost, momentum must be lost too.' },
    { q: 'Two carts are at rest with a compressed spring between them. The spring is released and the carts fly apart. What is the total momentum of the two carts afterward?', c: ['Zero', 'Positive, because both are moving', 'It depends on the masses', 'Twice the momentum of one cart'], a: 0, why: 'The total was zero before, and only internal forces acted. The carts have equal and opposite momenta, which add to zero.', trap: 'Adding momenta as if they were speeds, ignoring direction.' },
    { q: 'A 3.0 kg cart moving at 4.0 m/s collides with and sticks to a 1.0 kg cart at rest. What is their speed after the collision?', c: ['1.0 m/s', '2.0 m/s', '3.0 m/s', '4.0 m/s'], a: 2, why: 'Before: (3.0)(4.0) + 0 = 12 kg·m/s. After: (3.0 + 1.0)v = 12, so v = 3.0 m/s.', trap: 'Halving the speed without accounting for the masses.' },
    { q: 'Two identical cars travel toward each other at the same speed. What is the total momentum of the two-car system?', c: ['Twice the momentum of one car', 'Zero', 'Equal to the momentum of one car', 'It cannot be determined'], a: 1, why: 'Momentum is a vector. The cars have equal sizes of momentum in opposite directions, so they add to zero.', trap: 'Treating momentum as a scalar.' },
    { q: 'On a force-time graph for a collision, the area under the curve represents…', c: ['the work done', 'the impulse', 'the acceleration', 'the kinetic energy'], a: 1, why: 'Area = force × time = impulse, which equals the change in momentum. (Area under a force-distance graph is work.)', trap: 'Mixing up force-time graphs with force-distance graphs.' },
    { q: 'You catch a water balloon without breaking it by moving your hands backward as you catch it. This works because moving your hands back…', c: ['reduces the balloon\'s change in momentum', 'increases the stopping time, which reduces the force', 'reduces the balloon\'s mass', 'increases the impulse on the balloon'], a: 1, why: 'The balloon\'s momentum must go to zero either way. Taking longer to stop it means a smaller force on the balloon.', trap: 'Saying the impulse or momentum change is smaller.' },
    { q: 'A ball falls toward the ground and speeds up, so its momentum increases. Does this break the law of conservation of momentum?', c: ['Yes, the law fails for falling objects', 'No, gravity is an external force on the ball; the ball-Earth system conserves momentum', 'No, the ball\'s momentum is actually constant', 'Yes, unless there is air resistance'], a: 1, why: 'Momentum is conserved only for a system with no net external force. For the ball alone, gravity is external. Include Earth, and Earth gains an equal, opposite (and unnoticeably small) change in velocity.', trap: 'Applying conservation to a single object that has an outside force on it.' },
  ],
  resources: [
    ['The Physics Classroom: Momentum and Its Conservation tutorial', 'https://www.physicsclassroom.com/class/momentum', 'Reading on impulse, collisions and conservation, with worked momentum tables.'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', 'Open the Momentum and Collisions set.'],
    ['PhET simulation: Collision Lab', 'https://phet.colorado.edu/en/simulations/collision-lab', 'Set masses, speeds and elasticity; watch momentum vectors before and after.'],
    ['OpenStax Physics (high school), Chapter 8', 'https://openstax.org/details/books/physics', 'Free textbook: Momentum.'],
    ['Khan Academy Physics', 'https://www.khanacademy.org/science/physics', "Videos and practice; browse or search the library for momentum and impulse. Unit names on the site change from time to time."],
    ['IXL Physics, section G; Grade 8 science, skill I.7', 'https://www.ixl.com/science/physics', 'Skill practice; goal SmartScore 80+.'],
  ],
  practice: [
    ['What is the momentum of a 1200 kg car travelling at 25 m/s?', 'p = 1200 × 25 = **30 000 kg·m/s**'],
    ['A 50 N force acts on a 0.60 kg ball, initially at rest, for 0.30 s. Find the impulse and the ball\'s final speed.', 'Impulse = 50 × 0.30 = **15 N·s**. v = 15 ÷ 0.60 = **25 m/s**'],
    ['A 0.145 kg baseball arrives at 40 m/s and is hit straight back at 50 m/s. Contact lasts 0.0015 s. Find the change in momentum and the average force.', 'Δp = 0.145 × (50 − (−40)) = **13.1 kg·m/s**. F = 13.05 ÷ 0.0015 = **8700 N**'],
    ['A 4.0 kg cart at 5.0 m/s hits a 6.0 kg cart at rest and they stick. Find the final speed and the kinetic energy lost.', 'v = (4.0 × 5.0) ÷ 10 = **2.0 m/s**. KE before = 50 J, after = 20 J; **30 J** lost to thermal energy, sound and deformation.'],
    ['A 4.0 kg rifle fires a 0.010 kg bullet at 400 m/s. What is the recoil velocity of the rifle?', '0 = (0.010)(400) + (4.0)v, so v = **−1.0 m/s** (backward)'],
    ['A 70 kg driver moving at 20 m/s is brought to rest. Compare the force for a 0.25 s stop (airbag) with a 0.010 s stop (dashboard).', 'Δp = 1400 kg·m/s. Airbag: 1400 ÷ 0.25 = **5600 N**. Dashboard: 1400 ÷ 0.010 = **140 000 N**, 25 times larger.'],
    ['A 0.20 kg cart at +3.0 m/s collides head-on with a 0.30 kg cart at −2.0 m/s and they stick. What is their velocity afterward?', 'Total p = 0.60 − 0.60 = 0, so v = **0 m/s**. Both stop.'],
    ['Explain why a car with a crumple zone is safer than a perfectly rigid car.', 'The crumple zone lengthens the **time** of the collision. The change in momentum is the same, so by F = Δp/Δt the force on the passengers is smaller.'],
  ],
  apps: [
    '**Car safety**: crumple zones, airbags, seat belts and padded dashboards all extend stopping time.',
    '**Sports**: following through on a swing increases contact time and impulse; helmets and mats reduce force.',
    '**Rockets**: exhaust gas gains backward momentum and the rocket gains equal forward momentum.',
    '**Crash reconstruction**: investigators use skid marks and conservation of momentum to find pre-crash speeds.',
    '**Earth science link**: asteroid impacts and the momentum transferred to a planet or moon.',
  ],
  labs: [
    '**Cart collisions (HS-PS2-2)**: measure velocities before and after bouncing and sticking collisions; compare total momentum.',
    '**Egg drop (HS-PS2-3)**: design, test and refine a device that protects an egg, explaining each change with FΔt = Δp.',
    '**Impulse with a force sensor**: compare force-time graphs for a cart hitting a hard bumper and a soft bumper.',
  ],
};
