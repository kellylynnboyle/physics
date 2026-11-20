module.exports = {
  id: '01-kinematics', num: 1, title: 'Kinematics', weeks: '4 weeks',
  subtitle: 'Physics | Semester 1, Unit 1 | Distance and displacement, velocity, acceleration, motion graphs, free fall',
  ngss: ['HS-PS2-1 (supporting: position, velocity and acceleration data)', 'SEP: Analyzing and Interpreting Data', 'SEP: Using Mathematics and Computational Thinking', 'CCC: Patterns'],
  essential: 'How can we describe and predict where an object will be and how fast it will be moving?',
  targets: [
    'I can tell distance from displacement and speed from velocity, and sort quantities into scalars and vectors.',
    'I can calculate average speed, average velocity and acceleration with correct units.',
    'I can read position-time and velocity-time graphs using slope and area.',
    'I can solve constant-acceleration problems, including free fall, with the kinematic equations.'
  ],
  keyConcepts: [
    'Scalars (distance, speed, time) versus vectors (displacement, velocity, acceleration)',
    'Average speed = distance / time; average velocity = displacement / time',
    'Acceleration = change in velocity / time; the sign shows direction, not "speeding up" or "slowing down"',
    'Position-time graphs (slope = velocity) and velocity-time graphs (slope = acceleration, area = displacement)',
    'The four kinematic equations for constant acceleration',
    'Free fall: every object accelerates at 9.8 m/s² downward when air resistance is ignored'
  ],
  sections: [
    { title: 'Describing Position: Scalars and Vectors',
      ixl: [['Physics C.1', 'Classify vectors and scalars'], ['Physics D.1', 'Distance and displacement in one dimension']],
      rows: [
        ['What is the difference between distance and displacement?', [
          '**Distance** is the total length of the path traveled. It is a **scalar** (size only).',
          '**Displacement** is the change in position, measured straight from start to finish, with a direction. It is a **vector**: Δx = x_{f} − x_{i}.',
          'Worked example: walk 4 m east, then 3 m west. Distance = 4 + 3 = **7 m**. Displacement = 4 − 3 = **1 m east**.']],
        ['Which motion quantities are scalars and which are vectors?', [
          '**Scalars** (size only): distance, speed, time, mass.',
          '**Vectors** (size and direction): displacement, velocity, acceleration, force.',
          'In one dimension, direction is shown with a + or − sign.']],
        ['Can displacement be zero when distance is not?', [
          'Yes. One full lap of a 400 m track: distance = **400 m**, displacement = **0 m**, because the runner ends where they started.']]
      ] },
    { title: 'Speed and Velocity',
      ixl: [['Physics D.2', 'Speed and velocity in one dimension'], ['Grade 8 H.1', 'Calculate velocity from time and distance'], ['Grade 8 H.2', 'Calculate distance from velocity and time'], ['Grade 8 H.3', 'Calculate time from velocity and distance'], ['Grade 8 H.4', 'Calculate velocity, distance, and time I'], ['Grade 8 H.5', 'Calculate velocity, distance, and time II'], ['Grade 8 KK.4', 'Abbreviate time, length, speed, and acceleration units']],
      rows: [
        ['How do I calculate average speed and average velocity?', [
          '**Average speed** = distance ÷ time. **Average velocity** = displacement ÷ time.',
          'Worked example: a runner finishes one 400 m lap in 80 s. Average speed = 400 ÷ 80 = **5.0 m/s**. Average velocity = 0 ÷ 80 = **0 m/s**.']],
        ['What does "instantaneous" speed mean?', [
          'The speed at one moment, like a speedometer reading. Average speed covers the whole trip.']],
        ['How do I convert km/h to m/s?', [
          'Divide by 3.6 (because 1 km = 1000 m and 1 h = 3600 s).',
          'Worked example: a car covers 150 km in 2.5 h. Speed = 150 ÷ 2.5 = **60 km/h** = 60 ÷ 3.6 = **16.7 m/s**.']]
      ] },
    { title: 'Acceleration',
      ixl: [['Physics D.3', 'Acceleration in one dimension'], ['Grade 8 I.1', 'Identify whether objects are accelerating']],
      rows: [
        ['What is acceleration and how is it calculated?', [
          '**Acceleration** is how fast velocity changes: a = (v_{f} − v_{i}) ÷ t. Unit: **m/s²**.',
          'An object accelerates when it speeds up, slows down, or changes direction.',
          'Worked example: a car goes from 0 to 27 m/s in 9.0 s. a = (27 − 0) ÷ 9.0 = **3.0 m/s²**.']],
        ['Does negative acceleration always mean slowing down?', [
          'No. The sign only gives direction.',
          'Velocity and acceleration in the **same** direction: speeding up. In **opposite** directions: slowing down.',
          'Worked example: braking from 20 m/s to 0 in 4.0 s. a = (0 − 20) ÷ 4.0 = **−5.0 m/s²** (opposite to the motion, so slowing).']]
      ] },
    { title: 'Motion Graphs',
      ixl: [['Grade 8 H.6', 'Create a distance-time graph'], ['Grade 8 H.7', 'Interpret distance-time graphs']],
      rows: [
        ['What does the slope of a position-time graph tell me?', [
          'Slope = **velocity**.',
          'Straight sloped line: constant velocity. Flat line: at rest. Curve getting steeper: speeding up.']],
        ['What do the slope and area of a velocity-time graph tell me?', [
          'Slope = **acceleration**. Area between the line and the time axis = **displacement**.',
          'A flat line above zero means constant velocity, not "at rest".',
          'Worked example: velocity rises steadily from 0 to 12 m/s in 4.0 s. Slope = 12 ÷ 4.0 = **3.0 m/s²**. Area = ½ × 4.0 × 12 = **24 m**.']]
      ] },
    { title: 'Kinematic Equations and Free Fall',
      ixl: [['Physics D.4', 'Solve problems using kinematic equations']],
      rows: [
        ['What are the four kinematic equations and when do they work?', [
          'They work only when acceleration is **constant**.',
          'v_{f} = v_{i} + at',
          'd = v_{i}t + ½at²',
          'v_{f}² = v_{i}² + 2ad',
          'd = ½(v_{i} + v_{f})t']],
        ['How do I choose the right equation?', [
          'List the five variables (v_{i}, v_{f}, a, t, d). Mark the three you know and the one you want. Pick the equation that leaves out the fifth.',
          'Worked example: a car starts from rest and accelerates at 3.0 m/s² for 6.0 s. d = 0 + ½(3.0)(6.0)² = **54 m**. v_{f} = 0 + (3.0)(6.0) = **18 m/s**. Sense check: average velocity 9 m/s × 6 s = 54 m.']],
        ['What is the acceleration of an object in free fall?', [
          '**9.8 m/s² downward** for every object, heavy or light, when air resistance is ignored.',
          'At the top of a throw the velocity is 0 for an instant, but the acceleration is still 9.8 m/s² downward.',
          'Worked example (dropped): a rock falls from rest for 2.0 s. v_{f} = 9.8 × 2.0 = **19.6 m/s**. d = ½(9.8)(2.0)² = **19.6 m**.',
          'Worked example (thrown up at 14.7 m/s): time to the top = 14.7 ÷ 9.8 = **1.5 s**. Maximum height = 14.7² ÷ (2 × 9.8) = **11.0 m**.']]
      ] },
    { title: 'Labs and Measurement', lab: true,
      ixl: [['Physics A.2', 'Identify independent and dependent variables'], ['Physics B.1', 'Identify significant figures in measurements'], ['Physics B.4', 'Calculations with significant figures']],
      rows: [
        ['In a constant-speed buggy lab, what are the variables and what does the graph show?', [
          'Independent variable: **time**. Dependent variable: **position**.',
          'The position-time graph is a straight line and its slope is the buggy\'s speed.']],
        ['How do I find acceleration for a cart released from rest on a ramp?', [
          'Measure the distance d and the time t. Since v_{i} = 0, d = ½at², so **a = 2d ÷ t²**.',
          'Worked example: the cart travels 1.2 m in 2.0 s. a = 2(1.2) ÷ (2.0)² = **0.60 m/s²**.']]
      ] }
  ],
  mnemonics: [
    ['Slope of position-time = velocity. Slope of velocity-time = acceleration. Area under velocity-time = displacement.', 'Any graph question: decide first whether it asks for a slope or an area.'],
    ['GUESS: Givens, Unknown, Equation, Substitute, Solve.', 'Every word problem. Write the givens with units before touching the calculator.'],
    ['Vectors have direction; scalars do not.', 'When a question says "displacement" or "velocity", include a direction or sign.'],
    ['km/h ÷ 3.6 = m/s.', 'Whenever speeds are given in km/h and the answer needs SI units.'],
    ['Same direction speeds up, opposite direction slows down.', 'Deciding whether an object is speeding up from the signs of v and a.']
  ],
  summary: 'Kinematics describes motion without asking what causes it. Position, velocity and acceleration are linked: velocity is how fast position changes and acceleration is how fast velocity changes. The same links show up on graphs as slope and area, and in the four kinematic equations when acceleration is constant. Free fall is the most common case of constant acceleration, 9.8 m/s² downward for every object.',
  visuals: [
    { img: 'motion-map.png', caption: 'Motion maps (dot diagrams): evenly spaced dots mean constant velocity; dots spreading apart mean speeding up.', rule: 'Equal spacing: a = 0. Growing spacing: a in the direction of motion.' },
    { img: 'position-time.png', caption: 'Position-time graph: the steeper the line, the faster the object. A flat line is an object at rest.', rule: 'slope = velocity' },
    { img: 'velocity-time.png', caption: 'Velocity-time graph: the slope is the acceleration and the shaded area is the displacement.', rule: 'slope = a = 3.0 m/s²; area = ½(4.0)(12) = 24 m' },
    { img: 'free-fall.png', caption: 'Free fall from rest: the speed grows by 9.8 m/s every second and the distance fallen grows as t².', rule: 'v = gt, d = ½gt², g = 9.8 m/s²' }
  ],
  objectives: [
    ['K1', 'Distinguish distance from displacement and speed from velocity', 'HS-PS2-1 (supporting)', 'Gives both values, with direction, for a multi-leg trip'],
    ['K2', 'Calculate average speed, velocity and acceleration', 'HS-PS2-1 (supporting)', 'Correct answer with units on 4 of 5 problems'],
    ['K3', 'Interpret position-time and velocity-time graphs', 'HS-PS2-1; SEP Analyzing Data', 'Finds velocity from a slope and displacement from an area; describes the motion in words'],
    ['K4', 'Solve constant-acceleration and free-fall problems', 'HS-PS2-1; SEP Using Mathematics', 'Chooses the equation, shows givens and units, answer within rounding on 4 of 5 problems'],
    ['K5', 'Collect and graph motion data in a lab', 'SEP Planning and Carrying Out Investigations', 'Lab report has labeled graph, slope with units, and a claim supported by the data']
  ],
  resources: [
    ['The Physics Classroom: 1-D Kinematics tutorial', 'https://www.physicsclassroom.com/class/1DKin', 'Readings that match the vocabulary in these notes'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', 'Choose Kinematics; quick self-checking practice'],
    ['PhET: The Moving Man', 'https://phet.colorado.edu/en/simulations/moving-man', 'Live position, velocity and acceleration graphs'],
    ['OpenStax Physics, Ch. 2 and 3', 'https://openstax.org/details/books/physics', 'Free textbook: Motion in One Dimension; Acceleration'],
    ['Khan Academy: Physics', 'https://www.khanacademy.org/science/physics', 'One-dimensional motion videos and exercises'],
    ['IXL Physics, sections C and D', 'https://www.ixl.com/science/physics', 'Skills listed in the IXL Practice Plan']
  ],
  practice: [
    ['A cyclist rides 6.0 km north, then 2.0 km south, in 0.50 h. Find the distance, displacement, average speed and average velocity.', 'Distance 8.0 km; displacement 4.0 km north; average speed 16 km/h; average velocity 8.0 km/h north.'],
    ['A sprinter reaches 9.0 m/s from rest in 3.0 s. Find the acceleration and the distance covered.', 'a = 3.0 m/s²; d = ½(3.0)(3.0)² = 13.5 m.'],
    ['A car moving at 30 m/s brakes at −6.0 m/s². How far does it travel before stopping?', 'v_{f}² = v_{i}² + 2ad, so d = −(30)² ÷ (2 × −6.0) = 75 m.'],
    ['A stone is dropped from a bridge and hits the water 3.0 s later. How high is the bridge and how fast is the stone moving at impact?', 'd = ½(9.8)(3.0)² = 44.1 m; v = 9.8 × 3.0 = 29.4 m/s.'],
    ['A velocity-time graph shows a constant 8.0 m/s for 5.0 s, then a steady drop to 0 over the next 4.0 s. Find the total displacement.', 'Rectangle 8.0 × 5.0 = 40 m plus triangle ½(4.0)(8.0) = 16 m. Total 56 m.']
  ],
  applications: [
    'Stopping distance and following distance when driving (reaction distance plus braking distance)',
    'GPS and fitness trackers computing speed from position and time',
    'Sports timing: sprint splits, pitch speed, swim pacing',
    'Aircraft takeoff: required runway length from acceleration and liftoff speed',
    'Free fall on the Moon versus Earth (Apollo 15 hammer and feather)'
  ],
  quiz: [
    { q: 'A runner completes exactly one lap of a 400 m track in 80 s. What is the runner\'s average velocity?', c: ['5.0 m/s', '0 m/s', '0.20 m/s', '400 m/s'], a: 1,
      why: 'Average velocity = displacement ÷ time. After one full lap the runner is back at the start, so displacement is 0 and average velocity is 0 m/s. 5.0 m/s is the average speed.', trap: 'Using distance (400 m) when the question asks about velocity.' },
    { q: 'A ball is thrown straight up. At the very top of its path, what is its acceleration? (Ignore air resistance.)', c: ['0 m/s²', '9.8 m/s² upward', '9.8 m/s² downward', 'It depends on the mass'], a: 2,
      why: 'Gravity never switches off. The velocity is 0 for an instant, but it is still changing at 9.8 m/s² downward.', trap: 'Thinking zero velocity means zero acceleration.' },
    { q: 'A car is moving in the negative direction and has a negative acceleration. The car is:', c: ['slowing down', 'speeding up', 'moving at constant speed', 'about to reverse direction'], a: 1,
      why: 'Velocity and acceleration point the same way, so the speed increases. The sign shows direction only.', trap: 'Believing negative acceleration always means slowing down.' },
    { q: 'On a position-time graph, a straight line sloping upward means the object is:', c: ['speeding up', 'at rest', 'moving at constant velocity', 'moving uphill'], a: 2,
      why: 'Slope of a position-time graph is velocity. A straight line has one constant slope, so velocity is constant.', trap: 'Reading a rising line as "getting faster", or reading the graph as a picture of a hill.' },
    { q: 'On a velocity-time graph, a horizontal line at +6 m/s means the object is:', c: ['at rest', 'moving at a constant 6 m/s', 'accelerating at 6 m/s²', '6 m from the start'], a: 1,
      why: 'The height of the line is the velocity. Flat means the velocity is not changing, so acceleration is 0 and the object moves steadily at 6 m/s.', trap: 'Mixing up the rules for position-time and velocity-time graphs.' },
    { q: 'A bowling ball and a golf ball are dropped from the same height at the same time. Ignoring air resistance, which lands first?', c: ['The bowling ball', 'The golf ball', 'They land together', 'It depends on the height'], a: 2,
      why: 'All objects in free fall accelerate at 9.8 m/s² regardless of mass, so they fall side by side.', trap: 'Thinking heavier objects fall faster.' },
    { q: 'A car starts from rest and accelerates at 2.0 m/s² for 5.0 s. How far does it travel?', c: ['10 m', '25 m', '50 m', '100 m'], a: 1,
      why: 'd = v_{i}t + ½at² = 0 + ½(2.0)(5.0)² = 25 m. Multiplying the final speed (10 m/s) by 5 s gives 50 m, which is wrong because the car was not going 10 m/s the whole time.', trap: 'Using d = vt with the final velocity instead of the average velocity.' },
    { q: 'An object is dropped from rest. Compared with the distance it falls in 1 s, the distance it falls in 2 s is:', c: ['the same', 'twice as far', 'three times as far', 'four times as far'], a: 3,
      why: 'd = ½gt². Doubling the time multiplies t² by 4: 4.9 m after 1 s and 19.6 m after 2 s.', trap: 'Assuming distance grows in proportion to time when the object is accelerating.' }
  ]
};
