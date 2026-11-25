module.exports = {
  id: '01-kinematics',
  num: 1,
  title: 'Kinematics',
  subtitle: 'Physics (Grade 11) | Semester 1, Unit 1 | Position, velocity, acceleration, motion graphs, free fall',
  weeks: 'Weeks 1–4',
  ngss: ['HS-PS2-1 (foundation: acceleration must be measured before it can be linked to net force)', 'SEP: Analyzing and Interpreting Data', 'SEP: Using Mathematics and Computational Thinking', 'CCC: Patterns'],
  essentialQuestion: 'How can we describe and predict the motion of an object using words, graphs, and equations?',
  targets: [
    'I can tell distance from displacement and speed from velocity, and calculate each one.',
    'I can calculate acceleration and say what its sign means.',
    'I can read position-time and velocity-time graphs (slope and area).',
    'I can pick and solve the right kinematic equation for constant acceleration.',
    'I can solve free-fall problems using g = 9.8 m/s² downward.',
  ],
  concepts: [
    ['Position and reference frame', 'Where an object is, measured from a chosen origin.'],
    ['Distance vs displacement', 'Total path length (scalar) vs change in position with direction (vector).'],
    ['Speed vs velocity', 'Distance per time (scalar) vs displacement per time (vector).'],
    ['Acceleration', 'Rate of change of velocity, a = Δv/Δt, in m/s². It is a vector.'],
    ['Motion graphs', 'Slope of position-time = velocity. Slope of velocity-time = acceleration. Area under velocity-time = displacement.'],
    ['Kinematic equations', 'Four equations linking Δx, v₀, v, a, t when acceleration is constant.'],
    ['Free fall', 'Motion under gravity only. Every object accelerates at 9.8 m/s² downward, whatever its mass.'],
  ],
  sections: [
    {
      title: '1. Describing Motion: Position, Distance, Displacement',
      ixlRange: 'Physics C.1, D.1',
      rows: [
        { cue: 'What is the difference between a scalar and a vector?', notes: [
          'A **scalar** has size (magnitude) only: distance, speed, time, mass.',
          'A **vector** has size and direction: displacement, velocity, acceleration, force.',
          'In one dimension, direction is shown with a sign (+ right/up, − left/down).' ] },
        { cue: 'How is distance different from displacement?', notes: [
          '**Distance** = total path length traveled. Never negative.',
          '**Displacement** Δx = x_final − x_initial. Only start and end points matter.',
          'Worked example: walk 40 m east, then 30 m west. Distance = 40 + 30 = **70 m**. Displacement = 40 − 30 = **10 m east**.',
          'A full lap around a track: distance = one lap, displacement = **0**.' ] },
        { cue: 'Why do we need a reference point?', notes: [
          'Position only has meaning measured from an **origin** (reference point). Motion is always described relative to a **frame of reference**.' ] },
      ],
      ixl: [['Physics C.1', 'Classify vectors and scalars'], ['Physics D.1', 'Distance and displacement in one dimension']],
    },
    {
      title: '2. Speed and Velocity',
      ixlRange: 'Physics D.2, Grade 8 H.1–5',
      rows: [
        { cue: 'How do you calculate average speed and average velocity?', notes: [
          '**Average speed** = total distance ÷ total time.',
          '**Average velocity** = displacement ÷ time, v = Δx/Δt. Units: m/s. It has a direction.',
          'Worked example: a runner goes 300 m east in 60 s, then 100 m west in 40 s.',
          'Distance = 400 m, time = 100 s, so average speed = 400/100 = **4.0 m/s**.',
          'Displacement = 300 − 100 = 200 m east, so average velocity = 200/100 = **2.0 m/s east**.',
          'Sense check: velocity is smaller than speed because the runner doubled back.' ] },
        { cue: 'What is instantaneous velocity?', notes: [
          'The velocity at one moment (what a speedometer plus a compass would show). On a position-time graph it is the slope at that point.' ] },
        { cue: 'Can speed be constant while velocity changes?', notes: [
          '**Yes.** A car rounding a curve at a steady 20 m/s keeps the same speed, but its direction changes, so its velocity changes.' ] },
      ],
      ixl: [['Physics D.2', 'Speed and velocity in one dimension'], ['Grade 8 H.1', 'Calculate velocity from time and distance'], ['Grade 8 H.2', 'Calculate distance from velocity and time'], ['Grade 8 H.3', 'Calculate time from velocity and distance'], ['Grade 8 H.4', 'Calculate velocity, distance, and time I'], ['Grade 8 H.5', 'Calculate velocity, distance, and time II']],
    },
    {
      title: '3. Acceleration',
      ixlRange: 'Physics D.3, Grade 8 I.1',
      rows: [
        { cue: 'What is acceleration and how is it calculated?', notes: [
          '**Acceleration** = change in velocity ÷ time: a = Δv/Δt = (v − v₀)/t. Units: **m/s²**.',
          'Worked example: a car goes from rest to 24 m/s in 6.0 s. a = (24 − 0)/6.0 = **4.0 m/s²**.',
          'Meaning: the velocity grows by 4.0 m/s every second.' ] },
        { cue: 'What are the three ways an object can accelerate?', notes: [
          '**Speed up, slow down, or change direction.** Any change in velocity is an acceleration.' ] },
        { cue: 'Does negative acceleration always mean slowing down?', notes: [
          '**No.** The sign gives the direction of the acceleration, not whether the object slows.',
          'Same sign for v and a: **speeding up**. Opposite signs: **slowing down**.',
          'Worked example: a car moving east at 25 m/s slows to 15 m/s in 5.0 s. a = (15 − 25)/5.0 = −2.0 m/s², which is **2.0 m/s² west**.' ] },
      ],
      ixl: [['Physics D.3', 'Acceleration in one dimension'], ['Grade 8 I.1', 'Identify whether objects are accelerating']],
    },
    {
      title: '4. Motion Graphs',
      ixlRange: 'Grade 8 H.6–7',
      rows: [
        { cue: 'What does the slope of a position-time graph tell you?', notes: [
          'Slope = **velocity**. Straight line = constant velocity. Steeper = faster. Flat = at rest. Downward slope = moving in the negative direction.',
          'A **curve** means the velocity is changing (acceleration).' ] },
        { cue: 'What do the slope and the area of a velocity-time graph tell you?', notes: [
          'Slope = **acceleration**. Area between the line and the time axis = **displacement**.',
          'A flat line above zero means constant velocity (moving, not at rest).',
          'Worked example: velocity rises steadily from 0 to 10 m/s in 4.0 s, then stays at 10 m/s for 6.0 s.',
          'Triangle: ½(4.0)(10) = 20 m. Rectangle: (6.0)(10) = 60 m. Displacement = **80 m**.' ] },
        { cue: 'How do you tell "at rest" on each graph?', notes: [
          'Position-time: a **horizontal** line. Velocity-time: a line **on the time axis** (v = 0).' ] },
      ],
      ixl: [['Grade 8 H.6', 'Create a distance-time graph'], ['Grade 8 H.7', 'Interpret distance-time graphs']],
      ixlNote: 'IXL has no velocity-time graph skill. Use the matching Concept Builders at physicsclassroom.com.',
    },
    {
      title: '5. Kinematic Equations (Constant Acceleration)',
      ixlRange: 'Physics D.4',
      rows: [
        { cue: 'What are the four kinematic equations?', notes: [
          '**v = v₀ + at** (no Δx)',
          '**Δx = v₀t + ½at²** (no v)',
          '**v² = v₀² + 2aΔx** (no t)',
          '**Δx = ½(v₀ + v)t** (no a)',
          'They work only when acceleration is **constant**.' ] },
        { cue: 'How do you choose which equation to use?', notes: [
          'List the five variables (Δx, v₀, v, a, t). Mark the three you know and the one you want. Pick the equation that **leaves out the variable you do not have and do not need**.' ] },
        { cue: 'How far does a car going 20 m/s travel while braking at −5.0 m/s²?', notes: [
          'Given: v₀ = 20 m/s, v = 0, a = −5.0 m/s². Unknown: Δx. No time, so use v² = v₀² + 2aΔx.',
          '0 = (20)² + 2(−5.0)Δx, so Δx = 400/10 = **40 m**.',
          'Time to stop: v = v₀ + at, so t = (0 − 20)/(−5.0) = **4.0 s**.',
          'Sense check: average velocity 10 m/s × 4.0 s = 40 m. Matches.' ] },
        { cue: 'What happens to stopping distance when speed doubles?', notes: [
          'Stopping distance depends on v₀², so doubling the speed makes it **four times** as long (40 m becomes 160 m).' ] },
      ],
      ixl: [['Physics D.4', 'Solve problems using kinematic equations']],
    },
    {
      title: '6. Free Fall',
      ixlRange: 'Physics D.4',
      rows: [
        { cue: 'What is free fall, and what is the acceleration?', notes: [
          '**Free fall** = motion with gravity as the only force (no air resistance).',
          'Acceleration is **g = 9.8 m/s² downward** for every object, heavy or light, whether it is moving up, moving down, or at the top.' ] },
        { cue: 'How fast and how far does an object dropped from rest fall in 3.0 s?', notes: [
          'Given: v₀ = 0, a = 9.8 m/s² (taking down as positive), t = 3.0 s.',
          'v = v₀ + at = (9.8)(3.0) = **29.4 m/s**.',
          'Δy = ½at² = ½(9.8)(3.0)² = **44.1 m**.' ] },
        { cue: 'What are the velocity and acceleration at the top of an upward throw?', notes: [
          'Velocity is **zero** for an instant. Acceleration is still **9.8 m/s² downward**. If it were zero, the ball would hang there.',
          'Worked example: a ball is thrown up at 19.6 m/s. Time to top: t = 19.6/9.8 = **2.0 s**. Maximum height: Δy = v₀²/(2g) = (19.6)²/19.6 = **19.6 m**.',
          'Symmetry: it takes 2.0 s to come back down and returns at 19.6 m/s.' ] },
      ],
      ixl: [['Physics D.4', 'Solve problems using kinematic equations']],
      ixlNote: 'For free-fall concept practice, use the kinematics Concept Builders at physicsclassroom.com.',
    },
    {
      title: '7. Labs and Measurement',
      ixlRange: 'Physics A.2, B.1–4',
      rows: [
        { cue: 'How do you find velocity in the constant-velocity (buggy) lab?', notes: [
          'Mark the buggy\'s position every 1.0 s, then plot position vs time. The **slope of the best-fit line** is the velocity.',
          '**Independent variable:** time. **Dependent variable:** position.' ] },
        { cue: 'How do you measure acceleration with a cart on a ramp?', notes: [
          'Record velocity vs time (motion sensor or video). The **slope of the velocity-time graph** is the acceleration.',
          'Independent variable: ramp angle (or time). Dependent variable: acceleration (or velocity). Keep the cart and surface the same.' ] },
        { cue: 'How can you measure g in the lab?', notes: [
          'Drop an object from a measured height h and time the fall: **g = 2h/t²**. Repeat trials and average, because timing by hand is the largest source of error.' ] },
      ],
      ixl: [['Physics A.2', 'Identify independent and dependent variables'], ['Physics B.1', 'Identify significant figures in measurements'], ['Physics B.2', 'Add and subtract with significant figures'], ['Physics B.3', 'Multiply and divide with significant figures'], ['Physics B.4', 'Calculations with significant figures']],
    },
  ],
  tricks: [
    ['GUESS', 'Given, Unknown, Equation, Substitute, Solve. Use on every calculation problem.'],
    ['Slope and area', 'Position-time slope is velocity. Velocity-time slope is acceleration. Velocity-time area is displacement.'],
    ['Same signs speed up, opposite signs slow down', 'Compare the signs of velocity and acceleration to decide whether an object is speeding up.'],
    ['Pick the equation missing what you are missing', 'Each kinematic equation leaves out one variable. Choose the one that leaves out the variable you neither know nor want.'],
    ['King Henry Died By Drinking Chocolate Milk', 'Metric prefixes: kilo, hecto, deka, base, deci, centi, milli. Use when converting units.'],
  ],
  summary: 'Kinematics describes motion without asking what causes it. Position, displacement, velocity, and acceleration are vectors, so direction (the sign) matters. Velocity is how fast position changes and acceleration is how fast velocity changes, which is why the slope of a position-time graph is velocity and the slope of a velocity-time graph is acceleration. When acceleration is constant, four kinematic equations connect displacement, initial velocity, final velocity, acceleration, and time. Free fall is the most important case: every object accelerates at 9.8 m/s² downward, even at the top of its path.',
  visuals: [
    ['pt_graph.png', 'Position-time graph: the slope is the velocity. Steeper is faster, flat is at rest.', 'v = Δx/Δt = slope'],
    ['vt_graph.png', 'Velocity-time graph: the slope is the acceleration and the shaded area is the displacement.', 'a = Δv/Δt = slope; Δx = area'],
    ['motion_map.png', 'Motion maps (dot diagrams): even spacing is constant velocity; growing spacing is speeding up.', 'Dots are equal time intervals apart'],
    ['freefall.png', 'Free fall from rest: speed grows by 9.8 m/s each second and distance grows with t².', 'v = gt; Δy = ½gt²'],
  ],
  resources: [
    ['The Physics Classroom: 1-D Kinematics tutorial', 'https://www.physicsclassroom.com/class/1DKin', 'Short readings with animations for every section of this unit.'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', 'Self-checking practice on graphs and free fall, where IXL has no skill.'],
    ['PhET: The Moving Man', 'https://phet.colorado.edu/en/simulations/moving-man', 'Move a figure and watch position, velocity, and acceleration graphs draw live.'],
    ['OpenStax Physics, Ch. 2–3', 'https://openstax.org/details/books/physics', 'Free textbook: Motion in One Dimension and Acceleration.'],
    ['Khan Academy Physics', 'https://www.khanacademy.org/science/physics', 'Video walk-throughs of kinematic equation problems.'],
    ['IXL Physics, sections C and D', 'https://www.ixl.com/science/physics', 'Skill practice to SmartScore 80+.'],
  ],
  practice: [
    ['A student walks 40 m north, then 30 m south, in 35 s. Find the distance, displacement, average speed, and average velocity.', 'Distance 70 m; displacement 10 m north; average speed 70/35 = 2.0 m/s; average velocity 10/35 = 0.29 m/s north.'],
    ['A cyclist speeds up from 4.0 m/s to 12.0 m/s in 5.0 s. Find the acceleration and the distance covered.', 'a = (12.0 − 4.0)/5.0 = 1.6 m/s²; Δx = ½(4.0 + 12.0)(5.0) = 40 m.'],
    ['A plane starts from rest and accelerates at 3.0 m/s² to a takeoff speed of 60 m/s. How long a runway does it need, and how long does it take?', 'Δx = v²/(2a) = 3600/6.0 = 600 m; t = 60/3.0 = 20 s.'],
    ['A rock dropped from a bridge hits the water 2.5 s later. How high is the bridge and how fast is the rock going at impact?', 'Δy = ½(9.8)(2.5)² = 30.6 m; v = (9.8)(2.5) = 24.5 m/s.'],
    ['A ball is thrown straight up at 14.7 m/s. Find the time to the top, the maximum height, and the total time in the air.', 't = 14.7/9.8 = 1.5 s; height = (14.7)²/(2 × 9.8) = 11.0 m; total time 3.0 s.'],
    ['A driver going 30 m/s takes 0.50 s to react, then brakes at −6.0 m/s². Find the total stopping distance.', 'Reaction: (30)(0.50) = 15 m. Braking: (30)²/(2 × 6.0) = 75 m. Total 90 m.'],
    ['A velocity-time graph rises in a straight line from 0 to 10 m/s over 4.0 s, then stays at 10 m/s for 6.0 s. Find the acceleration in the first part and the total displacement.', 'a = 10/4.0 = 2.5 m/s²; displacement = 20 m + 60 m = 80 m.'],
  ],
  realWorld: [
    'Stopping distance and speed limits: braking distance grows with the square of speed, which is why school zones are slow.',
    'Sports timing: sprint splits show acceleration in the first 30 m and near-constant velocity afterward.',
    'GPS and fitness trackers compute speed from position and time samples, the same as the buggy lab.',
    'Amusement park drop towers give riders about 2–3 s of near free fall.',
    'Crash investigators use skid-mark length and v² = v₀² + 2aΔx to estimate a car\'s speed before braking.',
  ],
  objectives: [
    ['K1', 'Distinguish distance from displacement and speed from velocity, and calculate each from a description of a trip.', 'Practice problem 1; quiz Q2'],
    ['K2', 'Calculate acceleration and explain what its sign means for an object speeding up or slowing down.', 'Practice problem 2; quiz Q3, Q9'],
    ['K3', 'Interpret position-time and velocity-time graphs using slope and area.', 'Graph-matching lab; practice problem 7; quiz Q4, Q6, Q10'],
    ['K4', 'Select and solve the correct kinematic equation for constant acceleration.', 'Practice problems 3 and 6; IXL Physics D.4'],
    ['K5', 'Solve free-fall problems and explain why all objects fall with the same acceleration.', 'Measuring g lab; practice problems 4–5; quiz Q1, Q5, Q8'],
  ],
  quiz: [
    { q: 'A ball is thrown straight up. At the very top of its path, what is its acceleration? (Ignore air resistance.)', choices: ['9.8 m/s² downward', 'Zero', '9.8 m/s² upward', 'It depends on how hard it was thrown'], a: 0,
      why: 'Gravity never switches off. The velocity is zero for an instant, but it is still changing at 9.8 m/s every second, downward.',
      miss: 'Students mix up velocity and acceleration: "it stopped, so everything is zero."' },
    { q: 'A runner completes one full lap of a 400 m track in 80 s. What is the runner\'s average velocity?', choices: ['0 m/s', '5.0 m/s', '0.2 m/s', '10 m/s'], a: 0,
      why: 'Average velocity = displacement ÷ time. The runner ends where they started, so displacement is 0. The average speed is 5.0 m/s.',
      miss: 'Treating velocity and speed as the same thing.' },
    { q: 'An object has a negative acceleration. Which statement must be true?', choices: ['Its velocity is changing in the negative direction', 'It is slowing down', 'It is moving in the negative direction', 'It will eventually stop'], a: 0,
      why: 'The sign of acceleration is its direction. An object moving in the negative direction with negative acceleration is speeding up.',
      miss: 'Believing "negative acceleration" always means "slowing down."' },
    { q: 'A position-time graph is a straight line sloping downward. What is the object doing?', choices: ['Moving at constant velocity in the negative direction', 'Slowing down', 'Moving downhill', 'Accelerating in the negative direction'], a: 0,
      why: 'A straight line has a constant slope, and slope on a position-time graph is velocity. A negative slope is a constant negative velocity.',
      miss: 'Reading the graph as a picture of the path, or reading a falling line as "slowing down."' },
    { q: 'A 1 kg ball and a 5 kg ball are dropped from the same height at the same time. With no air resistance, which lands first?', choices: ['They land at the same time', 'The 5 kg ball', 'The 1 kg ball', 'The 5 kg ball lands in one-fifth the time'], a: 0,
      why: 'In free fall every object accelerates at 9.8 m/s². The heavier ball has more gravity force but also more inertia, and the two effects cancel exactly.',
      miss: 'The everyday idea that heavier things fall faster.' },
    { q: 'A velocity-time graph shows a horizontal line at +4 m/s. What is the object doing?', choices: ['Moving at a constant 4 m/s', 'Sitting at rest', 'Speeding up steadily', 'Sitting 4 m from the origin'], a: 0,
      why: 'The height of a velocity-time graph is the velocity. A flat line means it is not changing, so acceleration is zero and the object moves at a steady 4 m/s.',
      miss: 'Reading a velocity-time graph as if it were a position-time graph, where flat means at rest.' },
    { q: 'A car starts from rest with constant acceleration and travels 4 m in the first 2 s. How far has it traveled in total after 4 s?', choices: ['16 m', '8 m', '12 m', '6 m'], a: 0,
      why: 'From rest, Δx = ½at², so distance depends on t². Doubling the time gives four times the distance: 4 × 4 m = 16 m.',
      miss: 'Assuming distance doubles when time doubles, which is only true at constant velocity.' },
    { q: 'A ball is thrown straight up at 20 m/s and caught at the same height. Ignoring air resistance, how fast is it moving when caught?', choices: ['20 m/s', 'Less than 20 m/s', 'More than 20 m/s', '9.8 m/s'], a: 0,
      why: 'The motion is symmetric. Gravity removes 9.8 m/s each second on the way up and gives back 9.8 m/s each second on the way down.',
      miss: 'Thinking gravity "adds extra" speed on the way down, or that the ball "runs out" of speed.' },
    { q: 'A car traveling east at 25 m/s slows to 15 m/s in 5.0 s. What is its acceleration?', choices: ['2.0 m/s² west', '2.0 m/s² east', '8.0 m/s² west', '5.0 m/s² west'], a: 0,
      why: 'a = (15 − 25)/5.0 = −2.0 m/s². The car moves east and slows, so the acceleration points west.',
      miss: 'Subtracting in the wrong order, or giving the acceleration the same direction as the motion.' },
    { q: 'On a velocity-time graph, how do you find the displacement?', choices: ['Find the area between the line and the time axis', 'Find the slope of the line', 'Read the value on the vertical axis', 'Read the y-intercept'], a: 0,
      why: 'Displacement = velocity × time, which is the area under a velocity-time graph. The slope gives acceleration.',
      miss: 'Mixing up what slope and area mean on the two kinds of graph.' },
  ],
};
