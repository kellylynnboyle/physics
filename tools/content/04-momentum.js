module.exports = {
  id: '04-momentum',
  num: 4,
  title: 'Momentum',
  subtitle: 'Physics (Grade 11) | Semester 1, Unit 4 | Momentum, impulse, conservation, collisions',
  weeks: 'Weeks 12–14',
  ngss: ['HS-PS2-2: Use mathematical representations to support the claim that the total momentum of a system is conserved when there is no net force on the system', 'HS-PS2-3: Design, evaluate, and refine a device that minimizes the force on an object during a collision', 'HS-ETS1-2, HS-ETS1-3 (engineering design)', 'CCC: Systems and System Models'],
  essentialQuestion: 'Why is momentum conserved in collisions, and how can we use that to make collisions safer?',
  targets: [
    'I can calculate momentum and state its direction.',
    'I can use impulse (FΔt = mΔv) to relate force, time, and change in momentum.',
    'I can explain how increasing collision time reduces force.',
    'I can use conservation of momentum to solve collision and explosion problems.',
    'I can tell elastic from inelastic collisions.',
    'I can design and test a device that reduces the force in a collision.',
  ],
  concepts: [
    ['Momentum', 'Mass times velocity, p = mv. A vector, in kg·m/s.'],
    ['Impulse', 'Force times the time it acts, J = FΔt. Units: N·s (the same as kg·m/s).'],
    ['Impulse-momentum theorem', 'Impulse equals change in momentum: FΔt = mΔv.'],
    ['System', 'The set of objects you choose to track. It is isolated if no net external force acts on it.'],
    ['Conservation of momentum', 'In an isolated system, total momentum before equals total momentum after.'],
    ['Elastic vs inelastic collisions', 'Momentum is conserved in both. Kinetic energy is conserved only in elastic collisions.'],
    ['Explosion / recoil', 'Objects push apart from rest; their momenta are equal and opposite, adding to zero.'],
  ],
  sections: [
    {
      title: '1. Momentum',
      ixlRange: 'Physics G (New!)',
      rows: [
        { cue: 'What is momentum and how is it calculated?', notes: [
          '**Momentum** is "mass in motion": **p = mv**. Units: **kg·m/s**. It is a vector in the same direction as the velocity.',
          'Worked example: a 1200 kg car at 25 m/s has p = (1200)(25) = **30,000 kg·m/s**.' ] },
        { cue: 'Can a small object have more momentum than a large one?', notes: [
          '**Yes**, if it is moving fast enough. A 0.050 kg bullet at 400 m/s has 20 kg·m/s; a 60 kg skater drifting at 0.20 m/s has only 12 kg·m/s.' ] },
        { cue: 'Why does the sign of momentum matter?', notes: [
          'Momentum is a vector. Two 2 kg carts moving at 3 m/s in opposite directions have +6 and −6 kg·m/s, so the **total is zero**.' ] },
      ],
      ixl: [['Physics G (New!)', 'Calculate linear momentum and impulse']],
    },
    {
      title: '2. Impulse and Change in Momentum',
      ixlRange: 'Physics G (New!), Grade 8 I.7',
      rows: [
        { cue: 'What is impulse, and how is it related to momentum?', notes: [
          '**Impulse** = force × time: J = FΔt. The **impulse-momentum theorem** says **FΔt = Δp = mΔv**.',
          'On a force-time graph, impulse is the **area under the curve**.' ] },
        { cue: 'A 0.15 kg baseball arrives at 40 m/s and leaves the bat at 50 m/s the other way. Contact lasts 0.0015 s. What is the average force?', notes: [
          'Take the direction away from the bat as positive: v₀ = −40 m/s, v = +50 m/s.',
          'Δp = m(v − v₀) = (0.15)(50 − (−40)) = **13.5 kg·m/s**.',
          'F = Δp/Δt = 13.5/0.0015 = **9000 N**.',
          'Sense check: the change in velocity is 90 m/s, not 10 m/s, because the direction reversed.' ] },
        { cue: 'How do airbags, helmets, and crumple zones reduce injury?', notes: [
          'The change in momentum to stop you is fixed. These devices **increase the time** of the collision, so the **force is smaller** (F = Δp/Δt).' ] },
        { cue: 'Which delivers more impulse: a ball that bounces back or one that sticks?', notes: [
          'The one that **bounces**. Its velocity reverses, so its change in momentum is larger than simply stopping.' ] },
      ],
      ixl: [['Physics G (New!)', 'Calculate linear momentum and impulse'], ['Grade 8 I.7', 'Collisions and car safety features']],
    },
    {
      title: '3. Conservation of Momentum',
      ixlRange: 'Physics G.1',
      rows: [
        { cue: 'What does the law of conservation of momentum say?', notes: [
          'If no net external force acts on a system, its **total momentum stays the same**: p_total before = p_total after.',
          'm₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′' ] },
        { cue: "How does Newton's third law explain it?", notes: [
          'In a collision the two objects push on each other with equal and opposite forces for the same time. So their impulses, and their changes in momentum, are **equal and opposite**. What one loses, the other gains.' ] },
        { cue: 'What is an isolated system?', notes: [
          'A system with **no net external force**. Friction from the floor or a push from outside breaks the isolation, and the system\'s momentum can then change.' ] },
      ],
      ixl: [['Physics G.1', 'Conservation of momentum']],
    },
    {
      title: '4. Collisions and Explosions',
      ixlRange: 'Physics G.1',
      rows: [
        { cue: 'What is the difference between elastic and inelastic collisions?', notes: [
          '**Elastic:** objects bounce apart and total kinetic energy is conserved. **Inelastic:** some kinetic energy becomes heat, sound, and deformation. **Perfectly inelastic:** the objects stick together.',
          '**Momentum is conserved in every type.**' ] },
        { cue: 'A 2000 kg car at 10 m/s hits a parked 3000 kg truck and they stick. What is their speed afterward?', notes: [
          'Before: (2000)(10) + (3000)(0) = 20,000 kg·m/s.',
          'After: (2000 + 3000)v = 20,000, so v = **4.0 m/s**.',
          'Kinetic energy: before ½(2000)(10)² = 100,000 J; after ½(5000)(4.0)² = 40,000 J. **60,000 J** went to heat, sound, and bending metal.' ] },
        { cue: 'A 60 kg skater pushes a 40 kg skater from rest. The 40 kg skater moves at 3.0 m/s. How fast does the other move?', notes: [
          'Total momentum before = 0, so it must be 0 after.',
          '0 = (40)(3.0) + (60)v, so v = **−2.0 m/s** (2.0 m/s in the opposite direction).' ] },
        { cue: 'What are the steps for any collision problem?', notes: [
          '(1) Choose a positive direction. (2) Write total momentum before. (3) Write total momentum after. (4) Set them equal and solve. (5) Check the sign of the answer.' ] },
      ],
      ixl: [['Physics G.1', 'Conservation of momentum']],
    },
    {
      title: '5. Labs and Engineering Design',
      ixlRange: 'Physics A.2',
      rows: [
        { cue: 'How do you test conservation of momentum with carts?', notes: [
          'Measure each cart\'s mass and its velocity before and after a collision (photogates or motion sensors). Calculate total momentum before and after and compare.',
          'Independent variable: cart masses or starting speeds. Dependent variable: velocities after the collision.' ] },
        { cue: 'Why might the totals differ slightly?', notes: [
          '**Friction** on the track is an external force, and velocity measurements have uncertainty. A difference of a few percent still supports conservation.' ] },
        { cue: 'What makes a good egg-drop (collision safety) design?', notes: [
          'It **lengthens the stopping time** (padding, crumpling, suspension) so the force on the egg is small. Define criteria and constraints, build, test, and **refine** based on results.' ] },
      ],
      ixl: [['Physics A.2', 'Identify independent and dependent variables']],
    },
  ],
  tricks: [
    ['p = mv', 'Momentum is mass times velocity. The letter p is the standard symbol.'],
    ['Impulse changes momentum', 'FΔt = mΔv. Use when a problem gives force and time, or asks how long or how hard.'],
    ['More time, less force', 'For the same change in momentum, a longer collision means a smaller force. Use for every safety-device question.'],
    ['Before = after', 'Total momentum before a collision equals total momentum after. Write both sides, then solve.'],
    ['Hit and stick: one combined mass', 'In a perfectly inelastic collision, treat the stuck objects as one object of mass m₁ + m₂.'],
  ],
  summary: 'Momentum (p = mv) measures how hard it is to stop a moving object, and it has direction. A force acting for a time delivers an impulse, which changes momentum: FΔt = mΔv. That one relationship explains why safety devices work, since stretching out the time of a collision lowers the force. Because the forces between two colliding objects are equal and opposite, the momentum one loses is gained by the other, so the total momentum of an isolated system is conserved. This holds for elastic collisions, inelastic collisions, and explosions; only kinetic energy behaves differently among them.',
  visuals: [
    ['collision_stick.png', 'Perfectly inelastic collision: the car and truck stick and move together. Total momentum is the same before and after.', 'm₁v₁ + m₂v₂ = (m₁ + m₂)v′'],
    ['ft_graph.png', 'Force-time graphs for the same impulse: a short, hard collision and a long, gentle one have equal areas.', 'Impulse = FΔt = area = Δp'],
    ['explosion.png', 'Explosion from rest: the two skaters move apart with equal and opposite momenta.', '0 = m₁v₁′ + m₂v₂′'],
    ['bounce_vs_stick.png', 'A ball that bounces has a larger change in momentum than one that sticks.', 'Δp = m(v − v₀)'],
  ],
  resources: [
    ['The Physics Classroom: Momentum and Its Conservation tutorial', 'https://www.physicsclassroom.com/class/momentum', 'Readings on impulse, conservation, and each collision type.'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', 'Self-checking impulse and collision practice.'],
    ['PhET: Collision Lab', 'https://phet.colorado.edu/en/simulations/collision-lab', 'Set masses, speeds, and elasticity; watch momentum totals before and after.'],
    ['OpenStax Physics, Ch. 8', 'https://openstax.org/details/books/physics', 'Free textbook: Momentum.'],
    ['Khan Academy Physics', 'https://www.khanacademy.org/science/physics', 'Worked collision and impulse problems.'],
    ['IXL Physics section G; Grade 8 I.7', 'https://www.ixl.com/science/physics', 'Skill practice to SmartScore 80+.'],
  ],
  practice: [
    ['Find the momentum of a 0.145 kg baseball moving at 40 m/s.', 'p = (0.145)(40) = 5.8 kg·m/s.'],
    ['A 1000 kg car going 30 m/s is brought to rest. Find the change in momentum, then the average force if it stops in 0.10 s (wall) and in 6.0 s (brakes).', 'Δp = −30,000 kg·m/s. Wall: 300,000 N. Brakes: 5000 N.'],
    ['A 0.50 kg cart moving at 2.0 m/s hits a 1.5 kg cart at rest and they stick. Find their speed afterward.', 'v = (0.50)(2.0)/(0.50 + 1.5) = 0.50 m/s.'],
    ['A 4.0 kg rifle fires a 0.010 kg bullet at 400 m/s. Find the recoil speed of the rifle.', '0 = (0.010)(400) + (4.0)v, so v = −1.0 m/s (1.0 m/s backward).'],
    ['A 0.20 kg ball hits a wall at 10 m/s and rebounds at 8.0 m/s. Find its change in momentum. Compare with a 0.20 kg lump of clay that hits at 10 m/s and sticks.', 'Ball: (0.20)(−8.0 − 10) = −3.6 kg·m/s (size 3.6). Clay: size 2.0 kg·m/s. The bounce gives the larger impulse.'],
    ['A 3.0 kg cart moving right at 4.0 m/s collides with a 1.0 kg cart moving left at 2.0 m/s. Afterward the 3.0 kg cart moves right at 1.5 m/s. Find the velocity of the 1.0 kg cart. Is the collision elastic?', 'Total = 12 − 2.0 = 10 kg·m/s; 10 = (3.0)(1.5) + (1.0)v, so v = 5.5 m/s right. KE before 26 J, after 18.5 J: not elastic.'],
  ],
  realWorld: [
    'Airbags, seat belts, and crumple zones extend stopping time from milliseconds to tenths of a second.',
    'Bike and football helmets use foam that crushes to lengthen the impact.',
    'Catching a ball with "soft hands" or bending your knees when landing lowers the force by increasing the time.',
    'Rockets and jet engines: gas is thrown backward, and the vehicle gains equal forward momentum.',
    'Crash reconstruction: investigators use conservation of momentum to work out speeds before impact.',
  ],
  objectives: [
    ['M1', 'Calculate momentum and compare the momenta of different objects, including direction.', 'Practice problem 1; quiz Q6, Q7'],
    ['M2', 'Apply the impulse-momentum theorem to find force, time, or change in velocity.', 'Practice problems 2 and 5; IXL Physics G; quiz Q1'],
    ['M3', 'Explain how extending collision time reduces force, with real examples.', 'Written explanation; quiz Q2, Q9'],
    ['M4', 'Use conservation of momentum to solve collision and explosion problems (HS-PS2-2).', 'Practice problems 3, 4, 6; cart collision lab; quiz Q3, Q4, Q8, Q10'],
    ['M5', 'Classify collisions as elastic or inelastic using kinetic energy.', 'Practice problem 6; quiz Q5'],
    ['M6', 'Design, test, and refine a device that minimizes force in a collision (HS-PS2-3).', 'Egg-drop design project scored with the engineering rubric'],
  ],
  quiz: [
    { q: 'A rubber ball and a lump of clay with the same mass hit a wall at the same speed. The ball bounces back; the clay sticks. Which delivers the larger impulse to the wall?', choices: ['The rubber ball', 'The clay', 'They deliver the same impulse', 'Neither delivers an impulse'], a: 0,
      why: 'Impulse equals change in momentum. The clay goes from mv to 0. The ball goes from mv to nearly −mv, almost twice the change.',
      miss: 'Thinking the object that "sticks" hits harder, or ignoring the direction reversal.' },
    { q: 'How does an airbag reduce injury in a crash?', choices: ['It increases the stopping time, which decreases the force', 'It decreases the change in momentum of the passenger', 'It decreases the impulse on the passenger', 'It increases the stopping force'], a: 0,
      why: 'The passenger\'s change in momentum (and so the impulse) is the same with or without the bag. Spreading it over a longer time makes the force smaller.',
      miss: 'Saying the airbag reduces the impulse or the momentum change.' },
    { q: 'Two carts at rest are pushed apart by a spring between them. What is their total momentum afterward? (Ignore friction.)', choices: ['Zero', 'Twice the momentum of one cart', 'It depends on which cart is heavier', 'Equal to the momentum of the faster cart'], a: 0,
      why: 'The total was zero before, and no external force acted, so it is zero after. The carts have equal and opposite momenta.',
      miss: 'Adding the sizes of the momenta and ignoring direction.' },
    { q: 'A truck and a small car collide and stick together. How do the sizes of their changes in momentum compare?', choices: ['They are equal', 'The truck\'s is larger', 'The car\'s is larger', 'It depends on which was moving faster'], a: 0,
      why: 'The forces on each are equal and opposite and last the same time, so the impulses, and the momentum changes, are equal in size. The car\'s velocity changes more because its mass is smaller.',
      miss: 'Mixing up change in momentum with change in velocity.' },
    { q: 'In an inelastic collision in an isolated system, what is conserved?', choices: ['Momentum, but not kinetic energy', 'Kinetic energy, but not momentum', 'Both momentum and kinetic energy', 'Neither momentum nor kinetic energy'], a: 0,
      why: 'Momentum is conserved in every collision with no net external force. In an inelastic collision some kinetic energy becomes heat, sound, and deformation.',
      miss: 'Thinking momentum is "lost" whenever kinetic energy is lost.' },
    { q: 'A 2 kg cart moves right at 3 m/s and another 2 kg cart moves left at 3 m/s. What is the total momentum of the two carts?', choices: ['0 kg·m/s', '12 kg·m/s', '6 kg·m/s', '18 kg·m/s'], a: 0,
      why: 'Momentum is a vector: (+6) + (−6) = 0.',
      miss: 'Adding the two momenta as if they were both positive.' },
    { q: 'A car doubles its speed. What happens to its momentum and its kinetic energy?', choices: ['Momentum doubles; kinetic energy is four times as large', 'Both double', 'Both are four times as large', 'Momentum is four times as large; kinetic energy doubles'], a: 0,
      why: 'p = mv depends on v, so it doubles. KE = ½mv² depends on v², so it is multiplied by four.',
      miss: 'Treating momentum and kinetic energy as the same quantity.' },
    { q: 'A 1 kg cart moving at 4 m/s hits a 3 kg cart at rest and sticks to it. What is their speed afterward?', choices: ['1 m/s', '4 m/s', '2 m/s', '1.33 m/s'], a: 0,
      why: 'Before: (1)(4) = 4 kg·m/s. After: (1 + 3)v = 4, so v = 1 m/s.',
      miss: 'Dividing by only the mass that was hit (3 kg) instead of the combined mass.' },
    { q: 'An egg thrown at a hanging bedsheet does not break, but the same egg thrown at a wall at the same speed does. Why?', choices: ['The sheet stops the egg over a longer time, so the force is smaller', 'The sheet gives the egg a smaller impulse', 'The egg has less momentum when it hits the sheet', 'The wall pushes back, but the sheet does not'], a: 0,
      why: 'The egg\'s change in momentum is the same in both cases. The sheet gives way, stretching the time and shrinking the force.',
      miss: 'Believing a soft surface changes the impulse.' },
    { q: 'When is the total momentum of a system conserved?', choices: ['When no net external force acts on the system', 'Only when the collision is elastic', 'Only when the objects have equal masses', 'Only when the objects stick together'], a: 0,
      why: 'Internal forces come in equal and opposite pairs and cannot change the total. Only a net external force can.',
      miss: 'Tying momentum conservation to a particular type of collision.' },
  ],
};
