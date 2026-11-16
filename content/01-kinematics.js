module.exports = {
  id: "01-kinematics",
  num: 1,
  title: "Kinematics",
  short: "Kinematics",
  subtitle: "Physics | Semester 1, Unit 1 | Position, velocity, acceleration, motion graphs, free fall",
  weeks: "Weeks 1-4",
  ngss: [
    ["HS-PS2-1", "Supports: analyzing motion data (position, velocity, acceleration) is the evidence base for Newton's second law."],
    ["SEP: Analyzing and Interpreting Data", "Read slope and area from position-time and velocity-time graphs."],
    ["SEP: Using Mathematics and Computational Thinking", "Choose and solve the constant-acceleration equations."],
  ],
  essentialQuestion: "How can we describe and predict the motion of an object using words, graphs, and equations?",
  targets: [
    "I can tell scalars from vectors and distance from displacement.",
    "I can calculate average speed, average velocity, and acceleration with correct units.",
    "I can read velocity from the slope of a position-time graph, and acceleration and displacement from a velocity-time graph.",
    "I can choose the right kinematic equation and solve constant-acceleration problems.",
    "I can analyze free fall using g = 9.8 m/s² downward.",
  ],
  concepts: [
    ["Scalars and vectors", "A scalar has size only (distance, speed, time). A vector has size and direction (displacement, velocity, acceleration)."],
    ["Distance vs. displacement", "Distance is the total path length. Displacement is the straight-line change in position, with direction."],
    ["Speed vs. velocity", "Speed = distance / time. Velocity = displacement / time, with direction."],
    ["Acceleration", "The rate at which velocity changes: a = Δv / Δt, in m/s². Speeding up, slowing down, and turning are all accelerations."],
    ["Motion graphs", "Slope of position-time = velocity. Slope of velocity-time = acceleration. Area under velocity-time = displacement."],
    ["Kinematic equations", "Four equations that link vi, vf, a, t, and d when acceleration is constant."],
    ["Free fall", "With only gravity acting, every object accelerates at 9.8 m/s² downward, whatever its mass."],
  ],
  sections: [
    {
      title: "Describing Position: Scalars, Vectors, Distance, Displacement",
      rows: [
        ["What is the difference between a scalar and a vector?", [
          "A **scalar** has magnitude (size) only: distance, speed, time, mass.",
          "A **vector** has magnitude and direction: displacement, velocity, acceleration, force.",
          "In one dimension, direction is shown with a sign: + is usually right or up, − is left or down.",
        ]],
        ["How is distance different from displacement?", [
          "**Distance** is the total length of the path traveled. It is a scalar and never negative.",
          "**Displacement** is the change in position, Δx = xf − xi. It is a vector that points from start to finish.",
          "Worked example: walk 4 m east, then 3 m west. Distance = 4 + 3 = **7 m**. Displacement = 4 − 3 = **1 m east**.",
        ]],
        ["Can displacement be zero when distance is not?", [
          "Yes. One full lap of a 400 m track: distance = **400 m**, displacement = **0 m**, because you end where you started.",
        ]],
      ],
      ixl: [["Physics C.1", "Classify vectors and scalars"], ["Physics D.1", "Distance and displacement in one dimension"]],
    },
    {
      title: "Speed and Velocity",
      rows: [
        ["How do you calculate average speed and average velocity?", [
          "**Average speed** = total distance / total time.",
          "**Average velocity** = displacement / time = Δx / Δt. Unit for both: m/s.",
          "Worked example: a runner finishes one 400 m lap in 80 s. Average speed = 400 / 80 = **5 m/s**. Average velocity = 0 / 80 = **0 m/s**.",
        ]],
        ["How is instantaneous speed different from average speed?", [
          "**Instantaneous speed** is the speed at one moment (what a speedometer reads).",
          "Average speed covers the whole trip. A 120 km trip that takes 2 h has an average speed of **60 km/h** even if the car stopped at lights.",
        ]],
        ["Does constant speed always mean constant velocity?", [
          "No. Velocity includes direction. A car going around a curve at a steady 20 m/s has a **changing velocity**, so it is accelerating.",
        ]],
      ],
      ixl: [["Physics D.2", "Speed and velocity in one dimension"], ["Grade 8 H.1", "Calculate velocity from time and distance"], ["Grade 8 H.2", "Calculate distance from velocity and time"], ["Grade 8 H.3", "Calculate time from velocity and distance"], ["Grade 8 H.4", "Calculate velocity, distance, and time I"], ["Grade 8 H.5", "Calculate velocity, distance, and time II"]],
    },
    {
      title: "Acceleration",
      rows: [
        ["What is acceleration and how is it calculated?", [
          "**Acceleration** is the rate of change of velocity: a = Δv / Δt = (vf − vi) / t. Unit: m/s².",
          "Worked example: a car goes from 0 to 20 m/s in 5 s. a = (20 − 0) / 5 = **4 m/s²**. Sense check: it gains 4 m/s every second.",
        ]],
        ["How can you tell whether an object is speeding up or slowing down?", [
          "Velocity and acceleration in the **same direction** (same sign): speeding up.",
          "Velocity and acceleration in **opposite directions** (opposite signs): slowing down.",
          "Negative acceleration does not always mean slowing down. A car moving in the − direction with − acceleration is speeding up.",
        ]],
        ["Can an object have zero velocity and still be accelerating?", [
          "Yes. A ball thrown straight up has v = 0 at the top for an instant, but its acceleration is still **9.8 m/s² downward**. That is why it comes back down.",
        ]],
      ],
      ixl: [["Physics D.3", "Acceleration in one dimension"], ["Grade 8 I.1", "Identify whether objects are accelerating"]],
    },
    {
      title: "Motion Graphs",
      rows: [
        ["What does the slope of a position-time graph tell you?", [
          "Slope of position-time = **velocity**.",
          "Straight line: constant velocity. Steeper line: faster. Flat line: at rest. Curve: velocity is changing (acceleration).",
          "Line sloping down: moving in the negative direction.",
        ]],
        ["What do the slope and the area of a velocity-time graph tell you?", [
          "Slope of velocity-time = **acceleration**. Area between the line and the time axis = **displacement**.",
          "A flat line above zero means constant velocity, not at rest. At rest is a line along v = 0.",
          "Worked example: velocity rises steadily from 0 to 12 m/s in 4 s. a = 12 / 4 = **3 m/s²**. Displacement = area of triangle = ½ × 4 × 12 = **24 m**.",
        ]],
        ["What is the first thing to check on any motion graph?", [
          "Read the **vertical axis label** first. The same shape means different things on a position-time graph and a velocity-time graph.",
        ]],
      ],
      ixl: [["Grade 8 H.6", "Create a distance-time graph"], ["Grade 8 H.7", "Interpret distance-time graphs"]],
      ixlNote: "No IXL skill covers velocity-time graphs. Use The Physics Classroom Concept Builders in Kinematics (graph matching and slope/area activities).",
    },
    {
      title: "The Kinematic Equations",
      rows: [
        ["What are the four kinematic equations, and when do they work?", [
          "They work only when **acceleration is constant**.",
          "**vf = vi + a·t**",
          "**d = vi·t + ½·a·t²**",
          "**vf² = vi² + 2·a·d**",
          "**d = ½·(vi + vf)·t**",
        ]],
        ["How do you choose which equation to use?", [
          "Use **GUESS**: Givens, Unknown, Equation, Substitute, Solve.",
          "List the three known values and the one unknown. Pick the equation that contains those four and leaves out the fifth.",
          "Look for hidden givens: \"from rest\" means vi = 0; \"comes to a stop\" means vf = 0.",
        ]],
        ["How far does a car travel if it starts from rest and accelerates at 3 m/s² for 6 s?", [
          "Givens: vi = 0, a = 3 m/s², t = 6 s. Unknown: d.",
          "d = vi·t + ½·a·t² = 0 + ½ × 3 × 6² = **54 m**.",
          "Final speed: vf = vi + a·t = 0 + 3 × 6 = **18 m/s**. Check: average speed 9 m/s × 6 s = 54 m.",
        ]],
        ["How far does a car travel while braking from 20 m/s to rest at −5 m/s²?", [
          "Givens: vi = 20 m/s, vf = 0, a = −5 m/s². Unknown: d. No time given, so use vf² = vi² + 2·a·d.",
          "0 = 20² + 2 × (−5) × d, so d = 400 / 10 = **40 m**.",
        ]],
      ],
      ixl: [["Physics D.4", "Solve problems using kinematic equations"]],
    },
    {
      title: "Free Fall",
      rows: [
        ["What is free fall?", [
          "**Free fall** is motion with gravity as the only force (air resistance ignored).",
          "Every object in free fall accelerates at **g = 9.8 m/s² downward**, whether it is moving up, moving down, or momentarily at rest.",
        ]],
        ["Does a heavier object fall faster than a lighter one?", [
          "No. Without air resistance, all objects have the same acceleration, so objects dropped together land together.",
          "In air, a feather falls slowly because air resistance is large compared with its weight, not because gravity pulls it less quickly.",
        ]],
        ["How fast is a dropped object moving after 3 s, and how far has it fallen?", [
          "Givens: vi = 0, a = 9.8 m/s² (taking down as positive), t = 3 s.",
          "vf = vi + a·t = 9.8 × 3 = **29.4 m/s**.",
          "d = ½·a·t² = ½ × 9.8 × 3² = **44.1 m**.",
        ]],
        ["What are the velocity and acceleration at the top of a straight-up toss?", [
          "Velocity = **0** for an instant. Acceleration = **9.8 m/s² downward**.",
          "The trip up takes the same time as the trip down to the same height, and the ball returns with the same speed it left with.",
        ]],
      ],
      ixl: [["Physics D.4", "Solve problems using kinematic equations"]],
      ixlNote: "IXL has no separate free-fall skill. Use The Physics Classroom Concept Builder on free fall.",
    },
    {
      title: "Labs and Measurement",
      rows: [
        ["In a constant-velocity (buggy) lab, which variable is independent and which is dependent?", [
          "Procedure: release a battery buggy, mark its position every 2 s, measure each position with a meter stick.",
          "**Independent variable:** time. **Dependent variable:** position.",
          "Graph position vs. time. The slope of the best-fit line is the buggy's **speed** (v = Δx / Δt).",
        ]],
        ["How can a lab measure the acceleration of a cart on a ramp or a falling object?", [
          "Record position at equal time intervals (motion sensor, video, or ticker tape), then graph velocity vs. time.",
          "The slope of the velocity-time graph is the **acceleration**. For a dropped object the slope should be close to 9.8 m/s².",
          "Percent error = |measured − accepted| / accepted × 100.",
        ]],
        ["How many significant figures should a lab answer have?", [
          "Multiplying or dividing: keep the same number of significant figures as the **least precise measurement**.",
          "Always write the unit: m for position, s for time, m/s for velocity, m/s² for acceleration.",
        ]],
      ],
      ixl: [["Physics A.2", "Identify independent and dependent variables"], ["Physics B.1", "Identify significant figures in measurements"], ["Physics B.3", "Multiply and divide with significant figures"], ["Grade 8 KK.4", "Abbreviate time, length, speed, and acceleration units"]],
    },
  ],
  tricks: [
    ["GUESS method", "Givens, Unknown, Equation, Substitute, Solve. Use it on every word problem so no given is missed."],
    ["Slope is rise over run", "On a position-time graph rise/run is m/s (velocity). On a velocity-time graph rise/run is m/s per s (acceleration)."],
    ["Same signs speed up, opposite signs slow down", "Compare the signs of velocity and acceleration to decide if an object is speeding up."],
    ["Area under velocity-time = displacement", "Split the area into rectangles and triangles and add them."],
    ["\"From rest\" means vi = 0; \"stops\" means vf = 0", "Hidden givens in the wording of a problem."],
  ],
  summary: "Kinematics describes motion without asking what causes it. Position, velocity, and acceleration are linked in a chain: velocity is how fast position changes, and acceleration is how fast velocity changes. The same chain shows up on graphs (slope of position-time is velocity, slope of velocity-time is acceleration, area under velocity-time is displacement) and in the four kinematic equations, which work whenever acceleration is constant. Free fall is the most common case: every object accelerates at 9.8 m/s² downward when gravity is the only force.",
  visuals: [
    ["pt_graph", "A straight position-time line means constant velocity; a curve means the object is accelerating.", "Slope of position-time = velocity"],
    ["vt_graph", "On a velocity-time graph the slope is the acceleration and the shaded area is the displacement.", "a = Δv / Δt     d = area under the line"],
    ["motion_map", "Dots are positions at equal time intervals. Even spacing is constant velocity; growing spacing is speeding up.", "Bigger gaps = faster"],
    ["freefall", "A ball thrown upward: velocity drops by 9.8 m/s each second, passes through zero at the top, then becomes negative.", "a = −9.8 m/s² the whole time"],
  ],
  noIxl: "Velocity-time graphs, motion maps, and free fall (use physicsclassroom.com Concept Builders: Kinematics).",
  resources: [
    ["The Physics Classroom: 1-D Kinematics tutorial", "https://www.physicsclassroom.com/class/1DKin", "Readable lessons on every topic in this unit, with Check Your Understanding questions."],
    ["The Physics Classroom: Concept Builders", "https://www.physicsclassroom.com/Concept-Builders", "Interactive question sets; use the Kinematics group for graphs and free fall."],
    ["PhET: The Moving Man", "https://phet.colorado.edu/en/simulations/moving-man", "Drag a figure and watch position, velocity, and acceleration graphs draw live."],
    ["OpenStax Physics (high school), Ch. 2-3", "https://openstax.org/details/books/physics", "Free textbook: Motion in One Dimension and Acceleration."],
    ["Khan Academy: High School Physics", "https://www.khanacademy.org/science/highschool-physics", "Video walkthroughs of one-dimensional motion problems."],
  ],
  practice: [
    ["A cyclist rides 3.0 km north, then 4.0 km south in 0.50 h. Find the distance, the displacement, the average speed, and the average velocity.", "Distance 7.0 km; displacement 1.0 km south; average speed 14 km/h; average velocity 2.0 km/h south."],
    ["A car speeds up from 10 m/s to 30 m/s in 8.0 s. Find its acceleration and the distance it covers.", "a = 2.5 m/s²; d = ½(10 + 30)(8.0) = 160 m."],
    ["A velocity-time graph is a flat line at 6 m/s for 5 s, then drops in a straight line to 0 over the next 3 s. Find the total displacement.", "Rectangle 6 × 5 = 30 m plus triangle ½ × 3 × 6 = 9 m; total 39 m."],
    ["A stone is dropped from a bridge and hits the water 2.0 s later. How high is the bridge, and how fast is the stone moving at impact?", "d = ½(9.8)(2.0)² = 19.6 m; vf = 19.6 m/s."],
    ["A ball is thrown straight up at 14.7 m/s. How long does it take to reach the top, and how high does it go?", "t = 14.7 / 9.8 = 1.5 s; height = 14.7² / (2 × 9.8) = 11.0 m."],
    ["A plane must reach 60 m/s to take off and accelerates at 4.0 m/s² from rest. What is the shortest runway it can use?", "d = vf² / (2a) = 3600 / 8.0 = 450 m."],
  ],
  applications: [
    "Stopping distance and following distance for drivers: why speed limits drop near schools.",
    "Sports timing: sprint splits, pitch speed from radar guns, instant-replay tracking.",
    "GPS and fitness apps turning position data into speed and pace.",
    "Drop towers and amusement-park free-fall rides.",
    "Airport runway length and aircraft takeoff speed.",
  ],
  objectives: [
    ["K1", "Distinguish scalar from vector quantities and distance from displacement.", "Correctly finds both distance and displacement, with direction, for a multi-step path."],
    ["K2", "Calculate average speed, average velocity, and acceleration.", "Sets up the equation, substitutes with units, and reports the answer with correct units and sign."],
    ["K3", "Interpret position-time and velocity-time graphs.", "Finds velocity from slope, acceleration from slope, and displacement from area; describes the motion in words."],
    ["K4", "Solve constant-acceleration problems with the kinematic equations.", "Lists givens and unknown, chooses a valid equation, and reaches the correct answer on multi-step problems."],
    ["K5", "Analyze free fall, including the top of the path.", "States that a = 9.8 m/s² downward throughout and solves for time, height, and speed."],
    ["K6", "Collect and graph motion data in a lab.", "Identifies variables, graphs with labeled axes and units, and finds speed or acceleration from the slope."],
  ],
  quiz: [
    {
      q: "A ball is thrown straight up. At the very top of its path, what is its acceleration?",
      choices: ["Zero, because it has stopped", "9.8 m/s² downward", "9.8 m/s² upward", "It depends on how hard it was thrown"],
      answer: 1,
      why: "Gravity does not switch off at the top. The velocity is zero for an instant, but it is still changing at 9.8 m/s² downward, which is why the ball starts moving down.",
      trap: "Mixing up zero velocity with zero acceleration.",
    },
    {
      q: "An object is moving in the negative direction and has a negative acceleration. What is it doing?",
      choices: ["Slowing down", "Speeding up", "Moving at constant speed", "Turning around"],
      answer: 1,
      why: "When velocity and acceleration have the same sign, the object speeds up. Negative acceleration only means slowing down when the velocity is positive.",
      trap: "Assuming negative acceleration always means slowing down.",
    },
    {
      q: "A runner completes one full lap of a 400 m track in 100 s. What is her average velocity?",
      choices: ["4 m/s", "0.25 m/s", "0 m/s", "40 000 m/s"],
      answer: 2,
      why: "She finishes where she started, so her displacement is 0 and average velocity = 0 / 100 s = 0 m/s. Her average speed is 4 m/s.",
      trap: "Using distance instead of displacement for velocity.",
    },
    {
      q: "On a position-time graph, a straight line slopes upward. What is the object doing?",
      choices: ["Speeding up", "Moving at constant velocity", "Sitting at rest", "Moving uphill"],
      answer: 1,
      why: "The slope of a position-time graph is velocity. A straight line has one constant slope, so the velocity is constant. Speeding up would be a curve that gets steeper.",
      trap: "Reading a rising line as \"getting faster\".",
    },
    {
      q: "On a velocity-time graph, a horizontal line sits at +5 m/s. What is the object doing?",
      choices: ["At rest", "Moving at a constant 5 m/s", "Accelerating at 5 m/s²", "Returning to the start"],
      answer: 1,
      why: "The graph shows velocity, and it stays at 5 m/s. A flat line means zero acceleration, not zero motion. At rest would be a line along v = 0.",
      trap: "Reading a velocity-time graph as if it were a position-time graph.",
    },
    {
      q: "A bowling ball and a tennis ball are dropped from the same height at the same time. Ignore air resistance. Which lands first?",
      choices: ["The bowling ball, because it is heavier", "The tennis ball, because it is lighter", "They land at the same time", "It cannot be predicted"],
      answer: 2,
      why: "In free fall every object has the same acceleration, 9.8 m/s² downward, so both cover the same distance in the same time.",
      trap: "Believing heavier objects fall faster.",
    },
    {
      q: "A car starts from rest with constant acceleration. Compared with the distance it covers in the first 2 s, how far does it travel in the first 4 s?",
      choices: ["The same distance", "Twice as far", "Three times as far", "Four times as far"],
      answer: 3,
      why: "From rest, d = ½·a·t². Distance depends on time squared, so doubling the time gives 2² = 4 times the distance.",
      trap: "Assuming distance grows in step with time during acceleration.",
    },
    {
      q: "What does the area under a velocity-time graph represent?",
      choices: ["Acceleration", "Displacement", "Average speed", "Time"],
      answer: 1,
      why: "Area = velocity × time, which has units of m/s × s = m. That is displacement. The slope, not the area, gives acceleration.",
      trap: "Swapping slope and area.",
    },
    {
      q: "A car goes around a curve at a steady 20 m/s. Is it accelerating?",
      choices: ["No, its speed is constant", "Yes, because its direction is changing", "Only if the driver presses the gas", "Only if the road is banked"],
      answer: 1,
      why: "Velocity is a vector. A change in direction is a change in velocity, and any change in velocity is an acceleration.",
      trap: "Treating constant speed as constant velocity.",
    },
    {
      q: "A rock is dropped from rest. Ignoring air resistance, how fast is it moving after 2.0 s? (g = 9.8 m/s²)",
      choices: ["4.9 m/s", "9.8 m/s", "19.6 m/s", "39.2 m/s"],
      answer: 2,
      why: "vf = vi + a·t = 0 + 9.8 × 2.0 = 19.6 m/s. The value 19.6 m also happens to be the distance fallen, from d = ½·a·t².",
      trap: "Using the distance equation or forgetting to multiply by time.",
    },
  ],
};
