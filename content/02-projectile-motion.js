module.exports = {
  id: '02-projectile-motion', num: 2, title: 'Projectile Motion', weeks: '3 weeks',
  subtitle: 'Physics | Semester 1, Unit 2 | Vector components, independent horizontal and vertical motion, horizontal and angled launches',
  ngss: ['HS-PS2-1 (supporting: gravity as the only force on a projectile)', 'SEP: Using Mathematics and Computational Thinking', 'SEP: Developing and Using Models', 'CCC: Cause and Effect'],
  essential: 'Why does a ball thrown sideways hit the ground at the same time as a ball that is dropped?',
  targets: [
    'I can break a vector into horizontal and vertical components and put components back together.',
    'I can explain why the horizontal and vertical motions of a projectile are independent.',
    'I can solve for time, range and landing speed of a horizontally launched projectile.',
    'I can solve for time of flight, maximum height and range of a projectile launched at an angle.'
  ],
  keyConcepts: [
    'Vector components: v_{x} = v cos θ and v_{y} = v sin θ',
    'A projectile is an object moving under gravity alone',
    'Horizontal motion: constant velocity (a_{x} = 0)',
    'Vertical motion: free fall (a_{y} = 9.8 m/s² downward)',
    'Time is the one quantity shared by the horizontal and vertical motion',
    'Maximum range at 45°; complementary angles give equal ranges (same launch speed, level ground)'
  ],
  sections: [
    { title: 'Vectors and Components',
      ixl: [['Physics C.2', 'Decompose and compose two-dimensional vectors'], ['Physics C.3', 'Add and subtract two-dimensional vectors: component form'], ['Precalculus Y.1', 'Find the magnitude of a vector'], ['Precalculus Y.2', 'Find the component form of a vector'], ['Precalculus Y.3', 'Find the direction angle of a vector'], ['Precalculus Y.4', 'Find the component form of a vector from its magnitude and direction angle'], ['Precalculus Y.5', 'Graph a resultant vector using the triangle method'], ['Precalculus Y.7', 'Add vectors'], ['Precalculus Y.9', 'Find the magnitude and direction of a vector sum']],
      rows: [
        ['How do I find the horizontal and vertical components of a velocity?', [
          'With the angle θ measured from the horizontal: **v_{x} = v cos θ** and **v_{y} = v sin θ**.',
          'Worked example: 20 m/s at 30° above horizontal. v_{x} = 20 cos 30° = **17.3 m/s**. v_{y} = 20 sin 30° = **10.0 m/s**.']],
        ['How do I combine two perpendicular components into one vector?', [
          'Magnitude: v = √(v_{x}² + v_{y}²). Direction: θ = tan⁻¹(v_{y} ÷ v_{x}).',
          'Worked example: v_{x} = 4.0 m/s and v_{y} = 3.0 m/s. v = √(16 + 9) = **5.0 m/s** at tan⁻¹(3 ÷ 4) = **36.9°** above horizontal.']],
        ['How are vectors added on a diagram?', [
          'Draw them **head to tail**. The **resultant** runs from the tail of the first to the head of the last.']]
      ] },
    { title: 'Two Independent Motions',
      noIxl: 'No IXL skill covers this idea on its own. Use the Projectile Motion Concept Builders at physicsclassroom.com.',
      ixl: [],
      rows: [
        ['What is a projectile?', [
          'Any object that, once launched, moves under the influence of **gravity alone** (air resistance ignored).']],
        ['What happens to the horizontal and vertical velocity during flight?', [
          '**Horizontal:** no horizontal force, so v_{x} stays **constant** (a_{x} = 0).',
          '**Vertical:** free fall, so v_{y} changes by 9.8 m/s every second (a_{y} = 9.8 m/s² downward).',
          'The two motions do not affect each other.']],
        ['What is the one quantity the horizontal and vertical motions share?', [
          '**Time.** Solve for time on one side and use it on the other.']],
        ['A ball is dropped and another is launched horizontally from the same height. Which lands first?', [
          'They land **together**. Both start with zero vertical velocity and both fall with the same acceleration.']]
      ] },
    { title: 'Horizontally Launched Projectiles',
      ixl: [['Physics E.1', 'Solve projectile motion problems given components of velocity']],
      rows: [
        ['What is the starting vertical velocity of a horizontal launch?', [
          '**Zero.** All of the launch velocity is horizontal.']],
        ['How do I find the time in the air and the range?', [
          'Vertical first: h = ½gt², so **t = √(2h ÷ g)**. Then horizontal: **range = v_{x} × t**.',
          'Worked example: a ball rolls off a 1.25 m high table at 3.0 m/s. t = √(2 × 1.25 ÷ 9.8) = **0.505 s**. Range = 3.0 × 0.505 = **1.52 m**.']],
        ['How fast is it moving when it lands?', [
          'Find v_{y} = gt, then combine with v_{x}.',
          'Same ball: v_{y} = 9.8 × 0.505 = 4.95 m/s. Speed = √(3.0² + 4.95²) = **5.79 m/s**.']]
      ] },
    { title: 'Projectiles Launched at an Angle',
      ixl: [['Physics E.2', 'Solve projectile motion problems given magnitude and direction of velocity']],
      rows: [
        ['What are the steps for an angled launch that lands at launch height?', [
          '1. Find the components v_{x} and v_{iy}.',
          '2. Time to the top = v_{iy} ÷ g. Total time = 2 × time to the top.',
          '3. Maximum height = v_{iy}² ÷ (2g).',
          '4. Range = v_{x} × total time.',
          'Worked example: 20 m/s at 30°. v_{x} = 17.3 m/s, v_{iy} = 10.0 m/s. Time up = 10.0 ÷ 9.8 = 1.02 s; total time = **2.04 s**. Height = 10.0² ÷ 19.6 = **5.10 m**. Range = 17.3 × 2.04 = **35.3 m**.']],
        ['What are the velocity and acceleration at the top of the path?', [
          'Vertical velocity is 0, but the object is still moving sideways at **v_{x}**. Acceleration is still **9.8 m/s² downward**.']],
        ['Which launch angle gives the greatest range?', [
          '**45°** (same launch speed, level ground, no air resistance).',
          'Angles that add to 90° give the same range: 30° and 60°, or 20° and 70°.']]
      ] },
    { title: 'Labs and Measurement', lab: true,
      ixl: [['Physics A.2', 'Identify independent and dependent variables']],
      rows: [
        ['In a marble-off-the-table lab, how do I predict where the marble lands?', [
          'Measure the table height h and the marble\'s speed v_{x} at the edge (distance ÷ time over a marked stretch).',
          'Calculate t = √(2h ÷ g), then range = v_{x} × t. Place a target at that distance and test.']],
        ['What are the variables if we change the launch speed?', [
          'Independent variable: **launch speed**. Dependent variable: **range**. Controlled: table height.']]
      ] }
  ],
  mnemonics: [
    ['SOH CAH TOA.', 'Breaking a launch velocity into components: cosine goes with the side next to the angle.'],
    ['Horizontal: constant velocity. Vertical: free fall.', 'The first thing to write on any projectile problem.'],
    ['Make an x | y table.', 'List horizontal knowns in one column and vertical knowns in the other so they are never mixed.'],
    ['Time is the bridge.', 'When stuck, solve for time on the side with enough information and carry it across.'],
    ['45° goes farthest.', 'Quick check on range questions on level ground.']
  ],
  summary: 'A projectile has two motions at once. Sideways, nothing pushes on it, so it moves at constant velocity. Up and down, gravity makes it a free-fall problem. The two motions are independent and are tied together only by time. Break the launch velocity into components, solve the vertical side for time, and use that time on the horizontal side.',
  visuals: [
    { img: 'components.png', caption: 'A velocity vector and its components form a right triangle.', rule: 'v_{x} = v cos θ, v_{y} = v sin θ' },
    { img: 'drop-vs-launch.png', caption: 'A dropped ball and a horizontally launched ball are at the same height at every instant.', rule: 'Same vertical motion: t = √(2h ÷ g) for both' },
    { img: 'trajectory.png', caption: 'Along the path, v_{x} never changes; v_{y} shrinks to zero at the top and then grows downward.', rule: 'a_{x} = 0; a_{y} = 9.8 m/s² downward' },
    { img: 'range-angles.png', caption: 'Same launch speed at three angles: 45° goes farthest; 30° and 60° land at the same spot.', rule: 'Complementary angles give equal range' }
  ],
  objectives: [
    ['P1', 'Resolve a vector into components and recombine components', 'SEP Using Mathematics', 'Correct components and resultant (magnitude and angle) on 4 of 5 problems'],
    ['P2', 'Explain the independence of horizontal and vertical motion', 'HS-PS2-1 (supporting); SEP Developing Models', 'Explains the drop-versus-launch result using forces and acceleration, not memory'],
    ['P3', 'Solve horizontally launched projectile problems', 'SEP Using Mathematics', 'Uses an x | y table; finds time, range and landing speed'],
    ['P4', 'Solve angled-launch problems', 'SEP Using Mathematics', 'Finds time of flight, maximum height and range within rounding'],
    ['P5', 'Predict and test a landing point in a lab', 'SEP Planning and Carrying Out Investigations', 'Prediction with shown work; compares measured and predicted range and explains the difference']
  ],
  resources: [
    ['The Physics Classroom: Vectors and Projectiles tutorial', 'https://www.physicsclassroom.com/class/vectors', 'Lessons 1 and 2'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', 'Choose Vectors and Projectiles'],
    ['PhET: Projectile Motion', 'https://phet.colorado.edu/en/simulations/projectile-motion', 'Change angle and speed; show velocity components'],
    ['OpenStax Physics, Ch. 5', 'https://openstax.org/details/books/physics', 'Free textbook: Motion in Two Dimensions'],
    ['Khan Academy: Physics', 'https://www.khanacademy.org/science/physics', 'Two-dimensional motion videos and exercises'],
    ['IXL Physics, sections C and E', 'https://www.ixl.com/science/physics', 'Skills listed in the IXL Practice Plan']
  ],
  practice: [
    ['Find the components of a 25 m/s velocity directed 40° above the horizontal.', 'v_{x} = 25 cos 40° = 19.2 m/s; v_{y} = 25 sin 40° = 16.1 m/s.'],
    ['A ball leaves a 19.6 m high cliff horizontally at 15 m/s. How long is it in the air and how far from the base does it land?', 't = √(2 × 19.6 ÷ 9.8) = 2.0 s; range = 15 × 2.0 = 30 m.'],
    ['For the cliff problem above, find the speed at impact.', 'v_{y} = 9.8 × 2.0 = 19.6 m/s; speed = √(15² + 19.6²) = 24.7 m/s.'],
    ['A soccer ball is kicked at 18 m/s, 35° above level ground. Find the time of flight, maximum height and range.', 'v_{x} = 14.7 m/s, v_{iy} = 10.3 m/s. Time = 2(10.3) ÷ 9.8 = 2.11 s; height = 10.3² ÷ 19.6 = 5.44 m; range = 14.7 × 2.11 = 31.1 m.'],
    ['A ball launched at 25° lands 40 m away. At what other angle, with the same speed, would it also land 40 m away?', '65°, because 25° + 65° = 90°.']
  ],
  applications: [
    'Sports: basketball arcs, soccer free kicks, long jump take-off angle',
    'Water from a fountain or hose nozzle',
    'Dropping supplies from a moving aircraft: release before reaching the target',
    'Firefighting: aiming a water stream to reach a window',
    'Video-game physics engines and animation'
  ],
  quiz: [
    { q: 'A bullet is fired horizontally from a rifle. At the same instant, a second bullet is dropped from the same height. Ignoring air resistance, which hits level ground first?', c: ['The dropped bullet', 'The fired bullet', 'They hit at the same time', 'It depends on the speed of the fired bullet'], a: 2,
      why: 'Both start with zero vertical velocity and have the same downward acceleration. Horizontal speed has no effect on the fall.', trap: 'Thinking forward speed keeps an object in the air longer.' },
    { q: 'A ball is kicked at an angle. At the highest point of its path, its velocity is:', c: ['zero', 'horizontal, equal to its horizontal component', 'vertical, 9.8 m/s downward', 'the same as its launch velocity'], a: 1,
      why: 'Only the vertical component is zero at the top. The ball is still moving sideways at v_{x}.', trap: 'Saying the velocity is zero at the top, which is only true for a straight-up throw.' },
    { q: 'At the highest point of a projectile\'s path, its acceleration is:', c: ['zero', '9.8 m/s² downward', '9.8 m/s² upward', 'horizontal'], a: 1,
      why: 'Gravity is the only force during the whole flight, so the acceleration is 9.8 m/s² downward at every point, including the top.', trap: 'Linking zero vertical velocity to zero acceleration.' },
    { q: 'Ignoring air resistance, the horizontal velocity of a projectile during its flight:', c: ['decreases steadily', 'increases steadily', 'stays constant', 'is zero at the top'], a: 2,
      why: 'No horizontal force acts, so there is no horizontal acceleration.', trap: 'Assuming the "force of the throw" runs out and the object slows sideways.' },
    { q: 'A ball leaves a 19.6 m high cliff horizontally at 15 m/s. How far from the base of the cliff does it land? (g = 9.8 m/s²)', c: ['15 m', '19.6 m', '30 m', '60 m'], a: 2,
      why: 'Vertical: t = √(2 × 19.6 ÷ 9.8) = 2.0 s. Horizontal: range = 15 × 2.0 = 30 m.', trap: 'Mixing horizontal and vertical numbers in one equation.' },
    { q: 'A marble rolls off a table at 2 m/s and lands. It is then rolled off the same table at 4 m/s. Its time in the air is:', c: ['twice as long', 'half as long', 'the same', 'four times as long'], a: 2,
      why: 'Time in the air depends only on the height of the table. Doubling the horizontal speed doubles the range, not the time.', trap: 'Thinking a faster launch means a longer fall.' },
    { q: 'A ball is launched at 20 m/s at 30° above the horizontal. What is its initial vertical velocity?', c: ['10 m/s', '17.3 m/s', '20 m/s', '30 m/s'], a: 0,
      why: 'v_{y} = v sin θ = 20 × sin 30° = 10 m/s. 17.3 m/s is the horizontal component.', trap: 'Swapping sine and cosine.' },
    { q: 'With the same launch speed on level ground, which pair of angles gives the same range?', c: ['30° and 45°', '30° and 60°', '45° and 60°', '45° and 90°'], a: 1,
      why: 'Angles that add to 90° give equal ranges. The 60° shot goes higher and stays up longer; the 30° shot travels faster sideways.', trap: 'Assuming a bigger angle always gives a bigger range.' }
  ]
};
