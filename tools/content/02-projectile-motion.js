module.exports = {
  id: '02-projectile-motion',
  num: 2,
  title: 'Projectile Motion',
  subtitle: 'Physics (Grade 11) | Semester 1, Unit 2 | Vectors, components, horizontal and angled launches',
  weeks: 'Weeks 5–7',
  ngss: ['HS-PS2-1 (foundation: gravity as the only force gives a constant vertical acceleration)', 'SEP: Using Mathematics and Computational Thinking', 'SEP: Developing and Using Models', 'CCC: Cause and Effect'],
  essentialQuestion: 'Why does a projectile follow a curved path, and how can we predict where it will land?',
  targets: [
    'I can break a vector into horizontal and vertical components and put them back together.',
    'I can explain why horizontal and vertical motion are independent.',
    'I can solve problems for an object launched horizontally.',
    'I can find the time of flight, maximum height, and range of an object launched at an angle.',
    'I can predict a landing point and test the prediction in a lab.',
  ],
  concepts: [
    ['Vector components', 'Any vector can be split into a horizontal part and a vertical part: vx = v cos θ, vy = v sin θ.'],
    ['Resultant', 'The single vector that equals two or more vectors added together.'],
    ['Projectile', 'An object moving through the air with gravity as the only force on it.'],
    ['Independence of motion', 'Horizontal motion and vertical motion do not affect each other. Time is the only thing they share.'],
    ['Horizontal motion', 'Constant velocity, because no horizontal force acts (ax = 0).'],
    ['Vertical motion', 'Free fall: ay = 9.8 m/s² downward the whole time.'],
    ['Trajectory, range, time of flight', 'The parabolic path, the horizontal distance covered, and the time in the air.'],
  ],
  sections: [
    {
      title: '1. Vectors and Components',
      ixlRange: 'Physics C.2–3, Precalculus Y.1–9',
      rows: [
        { cue: 'How do you split a velocity into components?', notes: [
          'With the angle θ measured from the horizontal: **vx = v cos θ** and **vy = v sin θ**.',
          'Worked example: 20 m/s at 30° above horizontal. vx = 20 cos 30° = **17.3 m/s**. vy = 20 sin 30° = **10.0 m/s**.',
          'Sense check: √(17.3² + 10.0²) = 20 m/s. The components rebuild the original.' ] },
        { cue: 'How do you find a resultant from two perpendicular vectors?', notes: [
          'Magnitude: **Pythagorean theorem**, R = √(x² + y²). Direction: **θ = tan⁻¹(y/x)**.',
          'Worked example: 3.0 m/s east and 4.0 m/s north give R = **5.0 m/s** at tan⁻¹(4.0/3.0) = **53° north of east**.' ] },
        { cue: 'How do you add vectors that are not perpendicular?', notes: [
          'Graphically: draw them **tip to tail**; the resultant goes from the first tail to the last tip.',
          'By components: add all the x parts, add all the y parts, then use Pythagoras.' ] },
      ],
      ixl: [['Physics C.2', 'Decompose and compose two-dimensional vectors'], ['Physics C.3', 'Add and subtract two-dimensional vectors: component form'], ['Precalculus Y.1', 'Find the magnitude of a vector'], ['Precalculus Y.2', 'Find the component form of a vector'], ['Precalculus Y.3', 'Find the direction angle of a vector'], ['Precalculus Y.4', 'Find the component form of a vector from its magnitude and direction angle'], ['Precalculus Y.5', 'Graph a resultant vector using the triangle method'], ['Precalculus Y.6', 'Graph a resultant vector using the parallelogram method'], ['Precalculus Y.7', 'Add vectors'], ['Precalculus Y.8', 'Subtract vectors'], ['Precalculus Y.9', 'Find the magnitude and direction of a vector sum']],
    },
    {
      title: '2. What Makes Something a Projectile',
      ixlRange: 'Concept Builders',
      rows: [
        { cue: 'What is the only force on a projectile?', notes: [
          '**Gravity.** Once the ball leaves the hand, foot, or launcher, the push is over. (We ignore air resistance.)' ] },
        { cue: 'Why does a projectile keep moving sideways with no sideways force?', notes: [
          '**Inertia** (Newton\'s first law). No horizontal force means no horizontal acceleration, so vx stays constant.' ] },
        { cue: 'What does "independence of motion" mean?', notes: [
          'The horizontal motion (constant velocity) and vertical motion (free fall) happen at the same time without affecting each other.',
          '**Time** is the only variable shared by both directions. Solve for it in one direction, then use it in the other.' ] },
        { cue: 'Why is the path a curve?', notes: [
          'Equal sideways steps each second combined with growing downward steps each second make a **parabola**.' ] },
      ],
      ixl: [],
      ixlNote: 'No IXL skill covers projectile concepts. Use the matching Concept Builders at physicsclassroom.com.',
    },
    {
      title: '3. Horizontally Launched Projectiles',
      ixlRange: 'Physics E.1',
      rows: [
        { cue: 'What are the starting velocities for a horizontal launch?', notes: [
          '**vx = launch speed** (stays constant). **v₀y = 0** (it starts with no vertical motion).' ] },
        { cue: 'A ball rolls off a 1.25 m high table at 3.0 m/s. Where does it land?', notes: [
          'Vertical (find time): Δy = ½gt², so t = √(2Δy/g) = √(2 × 1.25/9.8) = **0.505 s**.',
          'Horizontal (find range): Δx = vx·t = (3.0)(0.505) = **1.52 m** from the table edge.',
          'Sense check: about half a second to fall from table height is reasonable.' ] },
        { cue: 'A ball is dropped and another is launched horizontally from the same height. Which lands first?', notes: [
          '**They land together.** Both start with zero vertical velocity and fall with the same 9.8 m/s². Horizontal speed does not change fall time.' ] },
        { cue: 'What changes if the launch speed doubles?', notes: [
          'The time in the air is the **same** (same height). The range **doubles** because Δx = vx·t.' ] },
      ],
      ixl: [['Physics E.1', 'Solve projectile motion problems given components of velocity']],
    },
    {
      title: '4. Projectiles Launched at an Angle',
      ixlRange: 'Physics E.2',
      rows: [
        { cue: 'What are the velocity and acceleration at the top of the path?', notes: [
          'Velocity is **horizontal and equal to vx** (only vy is zero). Acceleration is still **9.8 m/s² downward**.' ] },
        { cue: 'How do you find time of flight, maximum height, and range?', notes: [
          'For launch and landing at the same height:',
          'Time to top: **t_up = v₀y/g**. Total time: **t = 2v₀y/g**.',
          'Maximum height: **H = v₀y²/(2g)**. Range: **R = vx·t**.' ] },
        { cue: 'A ball is launched at 20 m/s at 30°. Find the time, height, and range.', notes: [
          'Components: vx = 17.3 m/s, v₀y = 10.0 m/s.',
          'Time: t = 2(10.0)/9.8 = **2.04 s**.',
          'Height: H = (10.0)²/(2 × 9.8) = **5.10 m**.',
          'Range: R = (17.3)(2.04) = **35.3 m**.' ] },
        { cue: 'Which launch angle gives the greatest range?', notes: [
          '**45°** on level ground with no air resistance.',
          'Complementary angles (such as 30° and 60°) give the **same range**. The larger angle goes higher and stays up longer.' ] },
      ],
      ixl: [['Physics E.2', 'Solve projectile motion problems given magnitude and direction of velocity']],
    },
    {
      title: '5. Labs and Measurement',
      ixlRange: 'Physics A.2, B.4',
      rows: [
        { cue: 'How do you predict where a marble rolling off a table will land?', notes: [
          'Measure the marble\'s speed on the table (distance ÷ time through a photogate or over a marked length) and the table height.',
          'Compute t = √(2h/g), then Δx = vx·t. Place a cup or target there, then test.',
          'Independent variable: launch speed (ramp release height). Dependent variable: horizontal range. Constant: table height.' ] },
        { cue: 'How do you test which angle gives the greatest range?', notes: [
          'Use a launcher or the PhET Projectile Motion simulation at a fixed speed. Change only the **angle** and measure the **range**. Graph range vs angle; the peak is near 45°.' ] },
        { cue: 'Why might the real landing spot fall short of the prediction?', notes: [
          '**Air resistance** and friction at launch reduce the speed. Timing and measuring errors also matter, so repeat trials and average.' ] },
      ],
      ixl: [['Physics A.2', 'Identify independent and dependent variables'], ['Physics B.4', 'Calculations with significant figures']],
    },
  ],
  tricks: [
    ['SOH CAH TOA', 'sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent. Use to find components.'],
    ['Two columns: x and y', 'Write horizontal knowns in one column and vertical knowns in another. Only time crosses between them.'],
    ['Horizontal: constant. Vertical: free fall.', 'ax = 0 and ay = 9.8 m/s² down. Use for every projectile problem.'],
    ['Tip to tail', 'Draw each vector starting where the last one ended to add them.'],
    ['45° goes farthest', 'On level ground the maximum range is at 45°, and angles that add to 90° land in the same place.'],
  ],
  summary: 'A projectile is an object with gravity as the only force on it. The key idea is independence: horizontally there is no force, so the velocity stays constant, while vertically the object is in free fall at 9.8 m/s² downward. The two motions share only time. To solve any problem, split the launch velocity into components, use the vertical motion to find the time, and then use that time in the horizontal motion to find the range. At the top of the path only the vertical velocity is zero; the object is still moving sideways and still accelerating downward.',
  visuals: [
    ['components.png', 'A velocity vector split into its horizontal and vertical components.', 'vx = v cos θ; vy = v sin θ'],
    ['trajectory.png', 'Angled launch: vx stays the same length the whole way, while vy shrinks, reaches zero at the top, then grows downward.', 'ax = 0; ay = 9.8 m/s² down'],
    ['drop_vs_launch.png', 'A dropped ball and a horizontally launched ball are at the same height at every instant and land together.', 'Δy = ½gt² for both'],
    ['angles.png', 'Same launch speed at 30°, 45°, and 60°: 45° has the greatest range; 30° and 60° land in the same spot.', 'R is greatest at 45°'],
  ],
  resources: [
    ['The Physics Classroom: Vectors and Projectiles tutorial', 'https://www.physicsclassroom.com/class/vectors', 'Readings and animations on components and both launch types.'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', 'Self-checking projectile concept practice.'],
    ['PhET: Projectile Motion', 'https://phet.colorado.edu/en/simulations/projectile-motion', 'Change angle, speed, and height and watch the velocity vectors.'],
    ['OpenStax Physics, Ch. 5', 'https://openstax.org/details/books/physics', 'Free textbook: Motion in Two Dimensions.'],
    ['Khan Academy Physics', 'https://www.khanacademy.org/science/physics', 'Worked two-dimensional projectile problems.'],
    ['IXL Physics, sections C and E; Precalculus section Y', 'https://www.ixl.com/science/physics', 'Skill practice to SmartScore 80+.'],
  ],
  practice: [
    ['Find the components of a 25 m/s velocity at 53° above the horizontal.', 'vx = 25 cos 53° ≈ 15 m/s; vy = 25 sin 53° ≈ 20 m/s.'],
    ['A ball rolls off a 0.80 m high table at 2.0 m/s. How long is it in the air and how far from the table does it land?', 't = √(2 × 0.80/9.8) = 0.40 s; Δx = (2.0)(0.404) = 0.81 m.'],
    ['A stone is thrown horizontally at 12 m/s from a 45 m cliff. Find the time to land, the horizontal distance, and the speed at impact.', 't = √(2 × 45/9.8) = 3.03 s; Δx = 36.4 m; vy = 29.7 m/s, so speed = √(12² + 29.7²) = 32.0 m/s.'],
    ['A soccer ball is kicked at 18 m/s at 40° above level ground. Find the time of flight, maximum height, and range.', 'vx = 13.8 m/s, v₀y = 11.6 m/s; t = 2.36 s; H = 6.83 m; R = 32.6 m.'],
    ['Two balls are launched at the same speed, one at 30° and one at 60°. Compare their ranges, heights, and times in the air.', 'Same range. The 60° ball goes higher and stays in the air longer.'],
    ['A plane flying level at 50 m/s releases a package from 500 m. How long does it fall, and how far ahead of the release point does it land? Where is the plane then?', 't = √(2 × 500/9.8) = 10.1 s; Δx = 505 m; ignoring air resistance the plane is directly above the package.'],
  ],
  realWorld: [
    'Basketball free throws and soccer free kicks: players control launch angle and speed to shape the arc.',
    'Long jump and shot put: athletes aim for the launch angle and speed that maximize range.',
    'Water fountains and fire hoses trace visible parabolas.',
    'Airdrops of supplies must be released well before the target because the package keeps the plane\'s forward velocity.',
    'Video game physics engines update horizontal and vertical motion separately, exactly as in the two-column method.',
  ],
  objectives: [
    ['P1', 'Resolve a vector into components and combine components into a resultant with magnitude and direction.', 'Practice problem 1; IXL Physics C.2; quiz Q9'],
    ['P2', 'Explain the independence of horizontal and vertical motion and identify gravity as the only force on a projectile.', 'Quiz Q1, Q3, Q4, Q10; written explanation'],
    ['P3', 'Solve horizontally launched projectile problems for time, range, and impact speed.', 'Practice problems 2–3; marble launch lab; quiz Q5'],
    ['P4', 'Solve angle-launched projectile problems for time of flight, maximum height, and range.', 'Practice problem 4; IXL Physics E.2; quiz Q2, Q6, Q7'],
    ['P5', 'Make a quantitative prediction of a landing point, test it, and explain the sources of error.', 'Marble launch lab report'],
  ],
  quiz: [
    { q: 'A bullet is fired horizontally from a rifle at the same instant an identical bullet is dropped from the same height. Ignoring air resistance, which hits the level ground first?', choices: ['They hit at the same time', 'The dropped bullet', 'The fired bullet', 'It depends on the speed of the fired bullet'], a: 0,
      why: 'Both start with zero vertical velocity and both accelerate downward at 9.8 m/s². Horizontal speed has no effect on fall time.',
      miss: 'Believing that fast sideways motion keeps an object up longer.' },
    { q: 'A ball is launched at an angle. At the very top of its path, what is its velocity?', choices: ['Horizontal, equal to its horizontal launch component', 'Zero', 'Straight down at 9.8 m/s', 'Equal to its launch velocity'], a: 0,
      why: 'Only the vertical component reaches zero at the top. The horizontal component never changes, so the ball is still moving sideways.',
      miss: 'Carrying over "velocity is zero at the top" from a straight-up throw.' },
    { q: 'What is the acceleration of a projectile at the top of its path? (Ignore air resistance.)', choices: ['9.8 m/s² downward', 'Zero', '9.8 m/s² upward', '9.8 m/s² in the direction of motion'], a: 0,
      why: 'Gravity is the only force the whole flight, so the acceleration is 9.8 m/s² downward at every point, including the top.',
      miss: 'Thinking acceleration is zero wherever the vertical velocity is zero.' },
    { q: 'What happens to the horizontal velocity of a projectile during its flight? (Ignore air resistance.)', choices: ['It stays constant', 'It decreases steadily', 'It increases as the projectile falls', 'It is zero at the top'], a: 0,
      why: 'No horizontal force acts, so there is no horizontal acceleration. Inertia keeps the horizontal velocity the same.',
      miss: 'Believing a "force of the throw" is used up during the flight.' },
    { q: 'A ball rolls off a table at 2 m/s. An identical ball rolls off the same table at 4 m/s. How do their times in the air compare?', choices: ['The times are the same', 'The faster ball is in the air twice as long', 'The faster ball is in the air half as long', 'The faster ball is in the air four times as long'], a: 0,
      why: 'Fall time depends only on the height and g. The faster ball lands twice as far away, but in the same time.',
      miss: 'Linking horizontal speed to time in the air.' },
    { q: 'On level ground with no air resistance, which launch angle gives the greatest range for a given speed?', choices: ['45°', '30°', '60°', '90°'], a: 0,
      why: '45° is the best balance between time in the air (which needs vertical velocity) and horizontal speed.',
      miss: 'Choosing a low angle for "more forward speed" or a high angle for "more air time."' },
    { q: 'Two balls are launched at the same speed, one at 30° and one at 60°. Ignoring air resistance, which statement is true?', choices: ['They have the same range, and the 60° ball is in the air longer', 'The 30° ball goes farther', 'The 60° ball goes farther', 'They have the same range and the same time in the air'], a: 0,
      why: 'Angles that add to 90° give the same range. The 60° ball has more vertical velocity, so it goes higher and stays up longer.',
      miss: 'Assuming a different angle must give a different range.' },
    { q: 'A plane flying level at constant velocity drops a package. Ignoring air resistance, where is the plane when the package lands?', choices: ['Directly above the package', 'Far ahead of the package', 'Behind the package', 'It depends on the mass of the package'], a: 0,
      why: 'The package keeps the plane\'s horizontal velocity, so it moves forward at the same rate as the plane while it falls.',
      miss: 'Picturing the package falling straight down or being "left behind."' },
    { q: 'A projectile is launched at 20 m/s at 30° above the horizontal. What is its initial vertical velocity?', choices: ['10 m/s', '17.3 m/s', '20 m/s', '9.8 m/s'], a: 0,
      why: 'vy = v sin θ = 20 sin 30° = 10 m/s. The 17.3 m/s value is the horizontal component, v cos θ.',
      miss: 'Swapping sine and cosine.' },
    { q: 'A soccer ball has been kicked and is in the air. Ignoring air resistance, which forces act on it?', choices: ['Only gravity', 'Gravity and the force of the kick', 'Gravity and a forward force of motion', 'No forces until it starts to come down'], a: 0,
      why: 'The kick ended when the foot lost contact. A force needs an object doing the pushing, and only Earth is still pulling.',
      miss: 'Believing a moving object carries a force with it.' },
  ],
};
