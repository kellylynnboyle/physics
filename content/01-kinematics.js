module.exports = {
  id: "kinematics",
  num: 1,
  dir: "01-kinematics",
  title: "Kinematics",
  subtitle: "Physics | Motion in One Dimension | position, velocity, acceleration, motion graphs, free fall",
  weeks: "Weeks 1–4",
  ngss: [
    { code: "HS-PS2-1", text: "Analyze data to support the claim that Newton's second law describes the relationship among net force, mass, and acceleration. Kinematics builds the acceleration half of this standard." },
    { code: "SEP 4 / SEP 5", text: "Analyzing and interpreting data; using mathematics and computational thinking (motion graphs, kinematic equations)." },
  ],
  essentialQuestion: "How can we describe and predict where an object will be and how fast it will be moving?",
  targets: [
    "I can tell distance from displacement and speed from velocity, and say which are vectors.",
    "I can calculate average speed, average velocity, and acceleration with correct units.",
    "I can read position-time and velocity-time graphs, using slope and area.",
    "I can choose and solve the right kinematic equation for constant acceleration.",
    "I can explain and calculate free-fall motion using g = 9.8 m/s² downward.",
  ],
  keyConcepts: [
    ["Position and reference point", "Where an object is, measured from a chosen zero."],
    ["Distance vs. displacement", "Distance is the total path length (scalar). Displacement is the change in position, with direction (vector)."],
    ["Speed vs. velocity", "Speed is distance ÷ time. Velocity is displacement ÷ time and includes direction."],
    ["Acceleration", "The rate at which velocity changes: a = Δv ÷ Δt, in m/s². Changing speed or changing direction both count."],
    ["Motion graphs", "Slope of position-time = velocity. Slope of velocity-time = acceleration. Area under velocity-time = displacement."],
    ["Kinematic equations", "Four equations that link d, v_i, v_f, a and t when acceleration is constant."],
    ["Free fall", "Motion under gravity alone. Every object accelerates at 9.8 m/s² downward, whatever its mass."],
  ],
  sections: [
    {
      title: "Position, Distance, and Displacement",
      cues: [
        { q: "What is the difference between distance and displacement?", notes: [
          "**Distance** = total length of the path traveled. It is a **scalar** (size only) and is never negative.",
          "**Displacement** = change in position, Δx = x_final − x_initial. It is a **vector** (size and direction).",
          "Worked example: walk 4 m east, then 3 m west. Distance = 4 + 3 = **7 m**. Displacement = 4 − 3 = **1 m east**.",
        ]},
        { q: "What makes a quantity a vector instead of a scalar?", notes: [
          "A **vector** has magnitude and direction: displacement, velocity, acceleration, force.",
          "A **scalar** has magnitude only: distance, speed, time, mass.",
          "In one dimension the sign is the direction. Pick a positive direction (usually right or up) and keep it for the whole problem.",
        ]},
      ],
      ixl: [["Physics C.1", "Classify vectors and scalars"], ["Physics D.1", "Distance and displacement in one dimension"]],
    },
    {
      title: "Speed and Velocity",
      cues: [
        { q: "How do you calculate average speed and average velocity?", notes: [
          "**Average speed** = total distance ÷ total time.",
          "**Average velocity** = displacement ÷ time, v = Δx ÷ Δt. Units: m/s.",
          "Worked example: a runner finishes one 400 m lap in 80 s. Average speed = 400 ÷ 80 = **5 m/s**. Displacement is 0 (back at the start), so average velocity = **0 m/s**.",
        ]},
        { q: "What does the slope of a position-time graph tell you?", notes: [
          "Slope of a position-time graph = **velocity**.",
          "Straight line = constant velocity. Steeper line = faster. Flat line = at rest.",
          "Line sloping **down** = moving in the negative direction (not slowing down).",
          "Curved line = velocity is changing, so the object is accelerating.",
        ]},
        { q: "How is instantaneous velocity different from average velocity?", notes: [
          "**Instantaneous velocity** is the velocity at one moment (what a speedometer shows, plus direction).",
          "**Average velocity** covers a whole time interval. They are equal only when velocity is constant.",
        ]},
      ],
      ixl: [["Physics D.2", "Speed and velocity in one dimension"], ["Grade 8 H.1", "Calculate velocity from time and distance"], ["Grade 8 H.2", "Calculate distance from velocity and time"], ["Grade 8 H.3", "Calculate time from velocity and distance"], ["Grade 8 H.4", "Calculate velocity, distance, and time I"], ["Grade 8 H.5", "Calculate velocity, distance, and time II"], ["Grade 8 H.6", "Create a distance-time graph"], ["Grade 8 H.7", "Interpret distance-time graphs"]],
    },
    {
      title: "Acceleration and Velocity-Time Graphs",
      cues: [
        { q: "What is acceleration and how do you calculate it?", notes: [
          "**Acceleration** = change in velocity ÷ time: a = (v_f − v_i) ÷ t. Units: **m/s²**.",
          "Speeding up, slowing down, and changing direction are all accelerations.",
          "Worked example: a car goes from 0 to 20 m/s in 5 s. a = (20 − 0) ÷ 5 = **4 m/s²**. Sense check: it gains 4 m/s every second.",
        ]},
        { q: "How can you tell whether an object is speeding up or slowing down?", notes: [
          "Velocity and acceleration in the **same** direction (same sign) → speeding up.",
          "Velocity and acceleration in **opposite** directions (opposite signs) → slowing down.",
          "So negative acceleration does not always mean slowing down. An object moving in the negative direction with negative acceleration is speeding up.",
        ]},
        { q: "What do the slope and the area of a velocity-time graph tell you?", notes: [
          "**Slope** of a velocity-time graph = **acceleration**.",
          "**Area** between the line and the time axis = **displacement**.",
          "A flat line above the axis means constant velocity, not at rest. At rest is a line on the axis (v = 0).",
          "Worked example: v rises steadily from 0 to 12 m/s in 4 s. Slope = 12 ÷ 4 = **3 m/s²**. Area = ½ × 4 × 12 = **24 m**.",
        ]},
      ],
      ixl: [["Physics D.3", "Acceleration in one dimension"], ["Grade 8 I.1", "Identify whether objects are accelerating"]],
    },
    {
      title: "The Kinematic Equations",
      cues: [
        { q: "What are the four kinematic equations, and when do they work?", notes: [
          "They work only when **acceleration is constant**.",
          "v_f = v_i + a·t",
          "d = v_i·t + ½·a·t²",
          "v_f² = v_i² + 2·a·d",
          "d = ½·(v_i + v_f)·t",
        ]},
        { q: "How do you choose which kinematic equation to use?", notes: [
          "List the five quantities: d, v_i, v_f, a, t. Mark the three you know and the one you want.",
          "Pick the equation that does **not** contain the fifth quantity (the one you neither know nor want).",
          "\"Starts from rest\" means v_i = 0. \"Comes to a stop\" means v_f = 0.",
        ]},
        { q: "How far does a car travel while speeding up from rest at 3 m/s² for 6 s?", notes: [
          "Known: v_i = 0, a = 3 m/s², t = 6 s. Want: d. Missing: v_f.",
          "d = v_i·t + ½·a·t² = 0 + ½ × 3 × 6² = **54 m**.",
          "Final speed: v_f = 0 + 3 × 6 = **18 m/s**. Sense check: average speed 9 m/s × 6 s = 54 m.",
        ]},
        { q: "How far does a car need to stop from 30 m/s if it brakes at −6 m/s²?", notes: [
          "Known: v_i = 30 m/s, v_f = 0, a = −6 m/s². Want: d. Missing: t.",
          "v_f² = v_i² + 2·a·d → 0 = 900 + 2(−6)d → d = 900 ÷ 12 = **75 m**.",
          "Doubling the speed makes the stopping distance four times as long, because d depends on v².",
        ]},
      ],
      ixl: [["Physics D.4", "Solve problems using kinematic equations"]],
    },
    {
      title: "Free Fall",
      cues: [
        { q: "What is the acceleration of any object in free fall?", notes: [
          "**Free fall** = gravity is the only force acting (no air resistance).",
          "Every object in free fall accelerates at **g = 9.8 m/s² downward**, whatever its mass.",
          "A heavy ball and a light ball dropped together land together when air resistance is negligible.",
        ]},
        { q: "What are the velocity and acceleration at the top of a toss straight up?", notes: [
          "At the top, **velocity = 0** for an instant.",
          "Acceleration is still **9.8 m/s² downward**. It never switches off; that is why the ball comes back down.",
          "The trip is symmetric: time up = time down, and it returns to the launch height at the launch speed.",
        ]},
        { q: "How fast is a dropped object moving after 3 s, and how far has it fallen?", notes: [
          "Known: v_i = 0, a = 9.8 m/s² (taking down as positive), t = 3 s.",
          "v_f = v_i + a·t = 9.8 × 3 = **29.4 m/s**.",
          "d = ½·a·t² = ½ × 9.8 × 3² = **44.1 m**.",
        ]},
      ],
      ixl: [["Physics D.4", "Solve problems using kinematic equations"]],
      ixlNote: "IXL has no free-fall-only skill. Also use the free-fall Concept Builders in the 1-D Kinematics section of physicsclassroom.com.",
    },
    {
      title: "Labs and Measurement",
      cues: [
        { q: "In a constant-velocity lab, which variable is independent and which is dependent?", notes: [
          "Typical lab: time a battery-powered buggy (or a walking student) at marked positions.",
          "**Independent variable**: time (x-axis). **Dependent variable**: position (y-axis).",
          "The slope of the best-fit line on the position-time graph is the **velocity**.",
        ]},
        { q: "How do you find acceleration from cart-on-a-ramp data?", notes: [
          "Measure the distance d the cart rolls from rest and the time t it takes.",
          "From d = ½·a·t², the acceleration is **a = 2d ÷ t²**.",
          "Repeat each trial at least three times and average the times to reduce random error.",
        ]},
        { q: "How many significant figures should a calculated answer have?", notes: [
          "Multiplying or dividing: match the measurement with the **fewest significant figures**.",
          "Always write the unit. A number without a unit is not a measurement.",
        ]},
      ],
      ixl: [["Physics A.2", "Identify independent and dependent variables"], ["Physics B.1", "Identify significant figures in measurements"], ["Physics B.3", "Multiply and divide with significant figures"], ["Grade 8 KK.4", "Abbreviate time, length, speed, and acceleration units"]],
    },
  ],
  mnemonics: [
    ["Slope and area rules", "Slope of position-time is velocity. Slope of velocity-time is acceleration. Area under velocity-time is displacement.", "Any graph question."],
    ["GUESS", "Givens, Unknown, Equation, Substitute, Solve.", "Every word problem, so you never skip listing what you know."],
    ["Same signs speed up, opposite signs slow down", "Compare the signs of velocity and acceleration.", "Deciding whether an object is speeding up or slowing down."],
    ["Find the missing variable", "Choose the kinematic equation that leaves out the quantity you neither know nor want.", "Picking an equation quickly."],
    ["Rest means zero", "\"From rest\" → v_i = 0. \"Stops\" → v_f = 0. \"Dropped\" → v_i = 0.", "Finding hidden givens in the wording."],
  ],
  summary: "Kinematics describes motion without asking what causes it. Position, displacement, velocity, and acceleration are vectors, so direction (the sign) matters. Velocity is how fast position changes and acceleration is how fast velocity changes; those two ideas appear as the slopes of the position-time and velocity-time graphs, and the area under a velocity-time graph gives displacement. When acceleration is constant, the four kinematic equations connect d, v_i, v_f, a, and t. Free fall is the most common case: every object accelerates downward at 9.8 m/s², even at the top of its path where its velocity is zero.",
  visuals: [
    { file: "kin-pt.png", caption: "Position-time graphs: a straight line is constant velocity; a curve getting steeper is speeding up.", rule: "slope = velocity" },
    { file: "kin-vt.png", caption: "Velocity-time graph for constant acceleration from rest.", rule: "slope = acceleration; area = displacement" },
    { file: "kin-dots.png", caption: "Motion maps: evenly spaced dots mean constant velocity; dots spreading apart mean speeding up.", rule: "equal time between dots" },
    { file: "kin-freefall.png", caption: "Ball tossed straight up: velocity shrinks to zero at the top, but acceleration stays 9.8 m/s² down.", rule: "a = g = 9.8 m/s² down, always" },
  ],
  quiz: [
    { q: "A ball is tossed straight up. At the very top of its path, what is its acceleration?", choices: ["Zero, because it has stopped", "9.8 m/s² upward", "9.8 m/s² downward", "It depends on the mass of the ball"], answer: 2, misconception: "Zero velocity means zero acceleration.", why: "Velocity is zero for an instant, but gravity keeps changing the velocity at 9.8 m/s² downward the whole time. If acceleration were zero, the ball would stay at the top." },
    { q: "A car goes around a curve with its speedometer steady at 20 m/s. Is the car accelerating?", choices: ["No, its speed is constant", "Yes, because its direction is changing", "Only if the driver presses the gas", "No, acceleration only means speeding up"], answer: 1, misconception: "Acceleration only means a change in speed.", why: "Acceleration is a change in velocity, and velocity includes direction. A changing direction is a changing velocity, even at constant speed." },
    { q: "On a position-time graph, a straight line slopes downward to the right. What is the object doing?", choices: ["Slowing down", "Moving at constant velocity in the negative direction", "Rolling down a hill", "Speeding up in the negative direction"], answer: 1, misconception: "Reading a graph as a picture of the path, or reading a downward slope as slowing down.", why: "The slope of a position-time graph is velocity. A straight line has a constant slope, so the velocity is constant; the slope is negative, so the motion is in the negative direction." },
    { q: "An object has a negative acceleration. Which statement must be true?", choices: ["It is slowing down", "It is moving in the negative direction", "Its velocity is becoming more negative (or less positive)", "It is at rest"], answer: 2, misconception: "Negative acceleration always means slowing down.", why: "The sign of acceleration is a direction. If the object is moving in the positive direction it slows down; if it is moving in the negative direction it speeds up." },
    { q: "A runner completes exactly one lap of a 400 m track in 80 s. What is the runner's average velocity?", choices: ["5 m/s", "0 m/s", "0.2 m/s", "10 m/s"], answer: 1, misconception: "Average velocity is the same as average speed.", why: "Average velocity = displacement ÷ time. The runner ends where they started, so displacement is 0 and average velocity is 0 m/s. The average speed is 5 m/s." },
    { q: "A bowling ball and a tennis ball are dropped from the same height at the same time. Ignoring air resistance, which lands first?", choices: ["The bowling ball, because it is heavier", "The tennis ball, because it is lighter", "They land at the same time", "It depends on the height"], answer: 2, misconception: "Heavier objects fall faster.", why: "In free fall every object has the same acceleration, 9.8 m/s² downward, whatever its mass." },
    { q: "A cart starts from rest with constant acceleration and travels 4 m in the first 2 s. How far has it traveled after 4 s?", choices: ["8 m", "12 m", "16 m", "32 m"], answer: 2, misconception: "Distance doubles when time doubles.", why: "From rest, d = ½·a·t², so distance grows with the square of time. Twice the time gives four times the distance: 4 × 4 m = 16 m." },
    { q: "A velocity-time graph shows a flat horizontal line at +5 m/s. What is the object doing?", choices: ["It is at rest", "It is moving at a constant 5 m/s", "It is speeding up", "It is 5 m from the start"], answer: 1, misconception: "A flat line always means at rest.", why: "A flat line on a velocity-time graph means the velocity is not changing. Since the value is 5 m/s, the object moves at a constant 5 m/s. At rest would be a line at v = 0." },
  ],
  practice: [
    ["Foundation", "A cyclist travels 150 m in 12 s. What is the average speed?", "v = 150 ÷ 12 = 12.5 m/s"],
    ["Foundation", "You walk 8 m north, then 3 m south. Find the distance and the displacement.", "Distance = 11 m. Displacement = 5 m north."],
    ["Proficient", "A car speeds up from 10 m/s to 30 m/s in 8 s. Find the acceleration and the distance covered.", "a = (30 − 10) ÷ 8 = 2.5 m/s². d = ½(10 + 30)(8) = 160 m."],
    ["Proficient", "A stone dropped from a bridge hits the water 2.0 s later. How high is the bridge, and how fast is the stone moving at impact?", "d = ½(9.8)(2.0)² = 19.6 m. v = 9.8 × 2.0 = 19.6 m/s."],
    ["Challenge", "A car moving at 25 m/s brakes at −5 m/s². Find the stopping time and stopping distance.", "t = 25 ÷ 5 = 5 s. d = 25² ÷ (2 × 5) = 62.5 m."],
    ["Challenge", "A ball is thrown straight up at 14.7 m/s. Find the time to the top, the maximum height, and the total time in the air.", "t_up = 14.7 ÷ 9.8 = 1.5 s. Height = 14.7² ÷ (2 × 9.8) = 11.0 m. Total time = 3.0 s."],
  ],
  resources: [
    ["The Physics Classroom: 1-D Kinematics", "https://www.physicsclassroom.com/class/1DKin", "Tutorial lessons that match these notes, plus Concept Builders for self-checking."],
    ["PhET: The Moving Man", "https://phet.colorado.edu/en/simulations/moving-man", "Simulation that draws position, velocity, and acceleration graphs as you move a character."],
    ["Khan Academy: High school physics", "https://www.khanacademy.org/science/highschool-physics", "Videos and practice sets on one-dimensional motion."],
    ["OpenStax Physics (high school)", "https://openstax.org/details/books/physics", "Free textbook; see the chapters on motion in one dimension and acceleration."],
  ],
  realWorld: [
    "Stopping distance and following distance: why doubling your speed needs four times the braking distance.",
    "Speed limits and yellow-light timing, which engineers set using reaction time and braking acceleration.",
    "Sports timing: sprint splits show the acceleration phase and the top-speed phase of a 100 m race.",
    "Phone and fitness trackers, which use accelerometers and GPS position-time data to report speed.",
  ],
  criteria: [
    ["Describe motion with vectors", "Mixes up distance and displacement or speed and velocity", "Defines each term but makes sign or direction errors", "Uses distance, displacement, speed, and velocity correctly with direction and units", "Applies the ideas to an unfamiliar multi-part trip and explains the reasoning"],
    ["Interpret motion graphs", "Reads the graph as a picture of the path", "Reads values but confuses slope and height", "Finds velocity, acceleration, and displacement from slope and area", "Sketches one graph from another and matches graphs to a described motion"],
    ["Solve kinematics problems", "Cannot identify the givens", "Lists givens but picks a wrong equation or drops units", "Chooses the right equation and solves with units and a sense check", "Solves two-stage problems and free-fall problems with both directions"],
  ],
};
