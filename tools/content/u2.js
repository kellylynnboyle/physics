module.exports = {
  id: '02-projectile-motion',
  num: 2,
  title: 'Projectile Motion',
  subtitle: 'Physics (Grade 11) | Semester 1, Unit 2 | Vectors, components, horizontal and angled launches',
  weeks: 'Weeks 5–7',
  overview: 'A projectile moves in two dimensions at once. Students learn to split motion into independent horizontal and vertical parts, solve each with the kinematics from Unit 1, and link them through time.',
  ngss: [
    ['HS-PS2-1', 'Analyze data to support the claim that Newton\'s second law describes the relationship among net force, mass and acceleration. A projectile is the two-dimensional case: gravity is the only force, so the acceleration is vertical only.'],
    ['SEP: Developing and Using Models', 'Model a trajectory as two independent motions and predict a landing point before testing it.'],
    ['SEP: Using Mathematics and Computational Thinking', 'Resolve vectors into components and apply kinematic equations in each direction.'],
  ],
  targets: [
    'I can break a vector into horizontal and vertical components and put components back together.',
    'I can explain why horizontal and vertical motion are independent and why the path is a parabola.',
    'I can state what happens to horizontal velocity, vertical velocity and acceleration during the flight.',
    'I can solve horizontally launched projectile problems for time, range and launch speed.',
    'I can solve angled-launch problems on level ground for time of flight, maximum height and range.',
  ],
  eq: 'Why does a thrown ball follow a curved path, and how can we predict where it will land?',
  concepts: [
    '**Vector components** – vx = v cos θ and vy = v sin θ; recombining with the Pythagorean theorem and inverse tangent.',
    '**Projectile** – an object moving under gravity alone (air resistance ignored).',
    '**Independence of motion** – horizontal and vertical motions do not affect each other; time is the only thing they share.',
    '**Horizontal motion** – constant velocity, ax = 0.',
    '**Vertical motion** – free fall, ay = 9.8 m/s² downward for the whole flight.',
    '**Trajectory** – a parabola; at the top vy = 0 but the object is still moving horizontally.',
    '**Range and launch angle** – 45° gives maximum range on level ground; complementary angles give equal ranges.',
  ],
  objectives: [
    ['Resolve a velocity into components and recombine components into a magnitude and angle.', 'Practice 1; IXL Physics C.2, Precalculus Y.1–4'],
    ['Explain the independence of horizontal and vertical motion.', 'Quiz Q1, Q4, Q6; cue self-test sections 2–3'],
    ['Describe velocity and acceleration at any point of the flight, including the top.', 'Quiz Q2, Q3, Q5, Q9'],
    ['Solve horizontal-launch problems.', 'Practice 2, 3, 6; IXL Physics E.1'],
    ['Solve angled-launch problems on level ground.', 'Practice 4, 5; IXL Physics E.2'],
    ['Predict a landing point and test it, reporting percent error (lab).', 'Marble-launch lab report'],
  ],
  sections: [
    {
      title: '1. Vectors and Components',
      ixlShort: 'IXL: Physics C.2–3, Precalculus Y.1–9',
      ixl: [['Precalculus Y.1', 'Find the magnitude of a vector'], ['Precalculus Y.2', 'Find the component form of a vector'], ['Precalculus Y.3', 'Find the direction angle of a vector'], ['Precalculus Y.4', 'Find the component form of a vector from its magnitude and direction angle'], ['Precalculus Y.5', 'Graph a resultant vector using the triangle method'], ['Precalculus Y.6', 'Graph a resultant vector using the parallelogram method'], ['Precalculus Y.7', 'Add vectors'], ['Precalculus Y.8', 'Subtract vectors'], ['Precalculus Y.9', 'Find the magnitude and direction of a vector sum'], ['Physics C.2', 'Decompose and compose two-dimensional vectors'], ['Physics C.3', 'Add and subtract two-dimensional vectors: component form']],
      rows: [
        ['How do you break a velocity into horizontal and vertical parts?', [
          'With the angle θ measured from the horizontal: **vx = v cos θ** and **vy = v sin θ**.',
          'Worked: 20 m/s at 30° above horizontal. vx = 20 cos 30° = **17.3 m/s**. vy = 20 sin 30° = **10.0 m/s**.',
          'Sense check: each component must be smaller than the original vector.',
        ]],
        ['How do you put two components back together?', [
          'Magnitude: **v = √(vx² + vy²)**. Direction: **θ = tan⁻¹(vy/vx)**.',
          'Worked: vx = 3.0 m/s, vy = 4.0 m/s. v = √(9 + 16) = **5.0 m/s** at tan⁻¹(4/3) = **53°** above horizontal.',
        ]],
        ['How do you add two vectors that point in different directions?', [
          'Draw them **head to tail**. The resultant runs from the tail of the first to the head of the second.',
          'Or add the x-components together and the y-components together, then recombine.',
        ]],
      ],
    },
    {
      title: '2. What Is a Projectile?',
      ixlShort: 'No IXL skill: use Concept Builders',
      ixl: [],
      note: 'No IXL skill covers the concept questions in this section. Use the physicsclassroom.com Concept Builders for Vectors and Projectiles.',
      rows: [
        ['What is the only force acting on a projectile?', [
          '**Gravity** (Fgrav), straight down, once air resistance is ignored.',
          'Nothing pushes the projectile forward after launch. It keeps moving forward because of **inertia**.',
        ]],
        ['Why are horizontal and vertical motion independent?', [
          'Gravity acts vertically only, so it changes vertical velocity and leaves horizontal velocity alone.',
          '**Time** is the only quantity the two directions share. Solve one direction for time, then use that time in the other.',
        ]],
        ['Why is the path a parabola?', [
          'Horizontal position grows evenly with time while vertical position changes with t². Steady sideways motion plus accelerating fall draws a **parabola**.',
        ]],
      ],
    },
    {
      title: '3. Horizontal and Vertical Motion During the Flight',
      ixlShort: 'IXL: Physics E.1',
      ixl: [['Physics E.1', 'Solve projectile motion problems given components of velocity']],
      rows: [
        ['What happens to the horizontal velocity during the flight?', [
          '**Nothing.** vx is constant because there is no horizontal force: ax = 0.',
          'Horizontal distance: **x = vx·t**.',
        ]],
        ['What happens to the vertical velocity during the flight?', [
          'It changes by **9.8 m/s every second**, downward: vy = vy₀ − gt.',
          'Vertical position: **y = vy₀·t − ½gt²**.',
        ]],
        ['What are the velocity and acceleration at the top of the path?', [
          'vy = 0, but the velocity is **not zero**: the object still moves horizontally at vx.',
          'Acceleration is still **9.8 m/s² downward**, the same as everywhere else on the path.',
          'On level ground the object lands at the same speed it was launched with.',
        ]],
      ],
    },
    {
      title: '4. Horizontally Launched Projectiles',
      ixlShort: 'IXL: Physics E.1',
      ixl: [['Physics E.1', 'Solve projectile motion problems given components of velocity']],
      rows: [
        ['What decides how long a horizontally launched object stays in the air?', [
          'Only the **height**. With vy₀ = 0: h = ½gt², so **t = √(2h/g)**.',
          'Launch speed does not change the time. It only changes how far the object lands from the base.',
          'A ball fired horizontally and a ball dropped from the same height land **at the same time**.',
        ]],
        ['How far from the table does a ball land?', [
          'Worked: a ball rolls off a 1.25 m high table at 3.0 m/s.',
          'Vertical (find time): t = √(2 × 1.25 ÷ 9.8) = √0.255 = **0.505 s**.',
          'Horizontal (find range): x = vx·t = 3.0 × 0.505 = **1.5 m**.',
          'Sense check: about half a second to fall from table height is reasonable.',
        ]],
      ],
    },
    {
      title: '5. Projectiles Launched at an Angle',
      ixlShort: 'IXL: Physics E.2',
      ixl: [['Physics E.2', 'Solve projectile motion problems given magnitude and direction of velocity']],
      rows: [
        ['What are the steps for an angled launch on level ground?', [
          '1. Find components: vx = v cos θ, vy₀ = v sin θ.',
          '2. Vertical: time to the top = vy₀/g; total time = 2 × that. Maximum height = vy₀²/(2g).',
          '3. Horizontal: range = vx × total time.',
        ]],
        ['How far does a ball kicked at 20 m/s and 30° travel?', [
          'Components: vx = **17.3 m/s**, vy₀ = **10.0 m/s**.',
          'Time up = 10.0 ÷ 9.8 = 1.02 s, so total time = **2.04 s**.',
          'Maximum height = 10.0² ÷ (2 × 9.8) = **5.1 m**.',
          'Range = 17.3 × 2.04 = **35.3 m**.',
        ]],
        ['Which launch angle gives the greatest range?', [
          '**45°** on level ground with no air resistance.',
          'Complementary angles (such as 30° and 60°) give the **same range**. The steeper one goes higher and stays up longer.',
        ]],
      ],
    },
    {
      title: '6. Labs and Measurement',
      lab: true,
      ixlShort: 'IXL: Physics A.2, B.3–4',
      ixl: [['Physics A.2', 'Identify independent and dependent variables'], ['Physics B.3', 'Multiply and divide with significant figures'], ['Physics B.4', 'Calculations with significant figures']],
      rows: [
        ['What are the variables in the marble-launch lab?', [
          '**Independent variable**: launch speed (set by the release point on the ramp) or table height.',
          '**Dependent variable**: horizontal distance to the landing point.',
          '**Controls**: same marble, level launch, same table height when speed is varied.',
        ]],
        ['How do you predict the landing point and judge the result?', [
          'Measure launch speed on the table (distance ÷ time over a marked stretch) and the table height h.',
          'Predict: t = √(2h/g), then x = vx·t. Place a target before releasing.',
          '**Percent error** = |measured − predicted| ÷ predicted × 100.',
        ]],
      ],
    },
  ],
  tricks: [
    ['SOH CAH TOA', 'Finding components: cosine goes with the side next to the angle, sine with the side opposite.'],
    ['Make an x | y table: list vx, x on one side and vy₀, a = −9.8, y on the other, with t shared', 'Starting every projectile problem.'],
    ['Time is the bridge between x and y', 'When stuck: solve the direction you know for t, then carry t across.'],
    ['vx never changes; vy changes by 9.8 m/s each second', 'Any question about velocity partway through the flight.'],
    ['45° goes farthest; complementary angles land together', 'Comparing ranges on level ground.'],
  ],
  summary: 'A projectile is an object moving under gravity alone. Its motion splits into two independent parts: horizontal motion at constant velocity and vertical motion with a constant downward acceleration of 9.8 m/s². Time links the two. Break the launch velocity into components, use the vertical direction to find the time, then use the horizontal direction to find the range. At the top of the path the vertical velocity is zero, but the object is still moving sideways and still accelerating downward.',
  visuals: [
    ['u2a.png', 'A launch velocity is the hypotenuse of a right triangle whose sides are its components.', 'vx = v cos θ;  vy = v sin θ'],
    ['u2b.png', 'Along the path the horizontal velocity arrow stays the same length while the vertical arrow shrinks, vanishes at the top, then grows downward.', 'ax = 0;  ay = 9.8 m/s² down'],
    ['u2c.png', 'A ball launched horizontally falls exactly as fast as one dropped: at each time step they are at the same height.', 't = √(2h/g), set by height only'],
    ['u2d.png', 'At the same launch speed, 45° gives the longest range, and 30° and 60° land at the same spot.', 'maximum range at 45°'],
  ],
  noIxl: 'The concept questions (independence of horizontal and vertical motion, velocity and acceleration at the top, range versus angle) have no matching IXL skill. Use the physicsclassroom.com Concept Builders for Vectors and Projectiles.',
  quiz: [
    { q: 'A bullet is fired horizontally from a rifle. At the same instant, an identical bullet is dropped from the same height. Ignoring air resistance, which hits level ground first?', c: ['The dropped bullet', 'The fired bullet', 'They hit at the same time', 'It depends on the muzzle speed'], a: 2, why: 'Both start with zero vertical velocity and both accelerate downward at 9.8 m/s². Horizontal speed has no effect on vertical motion, so they fall together.', trap: 'Thinking forward speed keeps an object up longer.' },
    { q: 'A soccer ball is kicked at an angle. At the highest point of its path, its velocity is…', c: ['zero', 'horizontal, equal to its horizontal launch component', 'vertical, pointing down', 'equal to its launch velocity'], a: 1, why: 'Only the vertical part of the velocity reaches zero at the top. The horizontal part never changes, so the ball is still moving sideways at vx.', trap: 'Saying the velocity is zero at the top of an arc.' },
    { q: 'At the highest point of a projectile\'s path, its acceleration is…', c: ['zero', '9.8 m/s² downward', '9.8 m/s² upward', 'horizontal'], a: 1, why: 'Gravity is the only force for the whole flight, so the acceleration is 9.8 m/s² downward at every point, including the top.', trap: 'Confusing zero vertical velocity with zero acceleration.' },
    { q: 'A ball rolls off a table and lands on the floor. If it rolls off twice as fast, the time it spends in the air…', c: ['doubles', 'is cut in half', 'stays the same', 'is four times as long'], a: 2, why: 'Time in the air depends only on the height: t = √(2h/g). The faster ball lands twice as far away, but after the same time.', trap: 'Linking horizontal speed to time of fall.' },
    { q: 'During a projectile\'s flight (no air resistance), its horizontal velocity…', c: ['decreases steadily', 'increases steadily', 'stays constant', 'is zero at the top'], a: 2, why: 'There is no horizontal force, so there is no horizontal acceleration. The horizontal velocity stays what it was at launch.', trap: 'Believing a projectile "runs out of" forward motion.' },
    { q: 'A plane flying level at constant velocity releases a supply crate. Ignoring air resistance, where is the crate when it hits the ground?', c: ['Far behind the plane', 'Directly below the plane', 'Ahead of the plane', 'Directly below the release point'], a: 1, why: 'The crate keeps the plane\'s horizontal velocity, so it stays directly underneath the plane while it falls. Seen from the ground, its path is a parabola.', trap: 'Thinking the crate drops straight down or is left behind.' },
    { q: 'On level ground with no air resistance, which launch angle gives the greatest range for a given launch speed?', c: ['30°', '45°', '60°', '90°'], a: 1, why: '45° is the best balance between time in the air (vertical component) and forward speed (horizontal component).', trap: 'Choosing a steep angle because it keeps the ball in the air longest.' },
    { q: 'Two balls are launched at the same speed, one at 30° and one at 60°. Compared with the 30° ball, the 60° ball…', c: ['lands farther away', 'lands closer', 'lands at the same distance but stays in the air longer', 'lands at the same distance in the same time'], a: 2, why: 'Complementary angles give the same range. The 60° ball has a larger vertical component, so it goes higher and stays up longer, but its smaller horizontal speed cancels that out.', trap: 'Assuming higher and longer in the air means farther.' },
    { q: 'After a baseball leaves the bat (ignoring air resistance), which forces act on it?', c: ['Gravity and the force of the hit', 'Gravity only', 'Gravity and a forward force of motion', 'No forces at all'], a: 1, why: 'The bat\'s force ends when contact ends. The ball keeps moving forward because of inertia, not because a force is still pushing it.', trap: 'Inventing a "force of motion" that travels with the ball.' },
    { q: 'A stone is thrown horizontally at 10 m/s from the top of a 20 m cliff. About how far from the base of the cliff does it land? (g = 9.8 m/s²)', c: ['10 m', '20 m', '40 m', '200 m'], a: 1, why: 'Vertical: t = √(2 × 20 ÷ 9.8) = 2.02 s. Horizontal: x = 10 × 2.02 = 20.2 m, about 20 m.', trap: 'Multiplying speed by height, or skipping the step of finding time from the vertical motion.' },
  ],
  resources: [
    ['The Physics Classroom: Vectors and Projectiles tutorial', 'https://www.physicsclassroom.com/class/vectors', 'Reading and animations, including the classic monkey-and-zookeeper problem.'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', 'Open the Vectors and Projectiles set.'],
    ['PhET simulation: Projectile Motion', 'https://phet.colorado.edu/en/simulations/projectile-motion', 'Change angle, speed and height; switch air resistance on and off.'],
    ['OpenStax Physics (high school), Chapter 5', 'https://openstax.org/details/books/physics', 'Free textbook: Motion in Two Dimensions.'],
    ['Khan Academy Physics', 'https://www.khanacademy.org/science/physics', "Videos and practice; browse or search the library for two-dimensional and projectile motion. Unit names on the site change from time to time."],
    ['IXL Physics, sections C and E; Precalculus section Y', 'https://www.ixl.com/science/physics', 'Skill practice; goal SmartScore 80+.'],
  ],
  practice: [
    ['Find the horizontal and vertical components of a 25 m/s velocity directed 40° above the horizontal.', 'vx = 25 cos 40° = **19.2 m/s**. vy = 25 sin 40° = **16.1 m/s**'],
    ['A ball is thrown horizontally at 8.0 m/s from a 45 m cliff. How long is it in the air and how far from the base does it land?', 't = √(2 × 45 ÷ 9.8) = **3.03 s**. x = 8.0 × 3.03 = **24.2 m**'],
    ['A marble rolls off a 0.80 m table and lands 1.2 m from its base. How fast was it rolling?', 't = √(2 × 0.80 ÷ 9.8) = 0.404 s. v = 1.2 ÷ 0.404 = **3.0 m/s**'],
    ['A football is kicked at 18 m/s, 35° above level ground. Find the time of flight, range and maximum height.', 'vx = 14.7 m/s, vy = 10.3 m/s. t = 2 × 10.3 ÷ 9.8 = **2.11 s**. Range = 14.7 × 2.11 = **31.1 m**. Height = 10.3² ÷ 19.6 = **5.4 m**'],
    ['Two water balloons leave a launcher at the same speed, one at 30° and one at 60°. Compare range, maximum height and time in the air.', 'Same **range**. The 60° balloon reaches a greater **height** and spends longer **in the air**.'],
    ['A package is thrown horizontally at 15 m/s. What are its vertical velocity and its speed after 2.0 s?', 'vy = 9.8 × 2.0 = **19.6 m/s down**. Speed = √(15² + 19.6²) = **24.7 m/s**'],
  ],
  apps: [
    '**Sports**: basketball arcs, soccer free kicks, long jump take-off angle, golf launch monitors.',
    '**Emergency response**: aiming fire hoses and dropping water or supplies from aircraft.',
    '**Engineering**: fountain design, sprinkler coverage, stunt and ramp design.',
    '**Space**: an orbit is a projectile moving fast enough that the ground curves away beneath it.',
    '**Earth science link**: volcanic bombs follow projectile paths, and their landing distance reveals eruption speed.',
  ],
  labs: [
    '**Marble launch**: measure launch speed and table height, predict the landing spot, place a target, then test and find percent error.',
    '**Range versus angle**: use a launcher or the PhET simulation to plot range against angle and find the maximum.',
    '**Video analysis**: film a tossed ball, mark its position frame by frame, and show that horizontal spacing is even while vertical spacing changes.',
  ],
};
