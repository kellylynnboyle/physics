// Unit 1: Kinematics. Notes lines use **bold** for key terms and answers.
module.exports = {
  id: "kinematics", num: 1, dir: "01-kinematics", title: "Kinematics", weeks: "Weeks 1–4",
  subtitle: "Physics | Unit 1 | Position, velocity, acceleration, motion graphs, free fall",
  ngss: ["HS-PS2-1 (foundation: position and velocity data over time)", "SEP: Analyzing and Interpreting Data", "SEP: Using Mathematics and Computational Thinking", "CCC: Patterns"],
  essentialQuestion: "How can we describe and predict the motion of an object using words, graphs, and equations?",
  targets: [
    "I can tell distance from displacement and speed from velocity, and say which are vectors.",
    "I can calculate average speed, average velocity, and acceleration with correct units.",
    "I can read position-time and velocity-time graphs (slope and area) and sketch one from a description.",
    "I can choose and solve the right kinematic equation for constant acceleration.",
    "I can solve free-fall problems using a = 9.8 m/s² downward.",
  ],
  concepts: [
    ["Position and reference point", "Where an object is, measured from a chosen zero."],
    ["Distance vs displacement", "Total path length (scalar) vs straight-line change in position with direction (vector)."],
    ["Speed vs velocity", "How fast (scalar) vs how fast and in what direction (vector)."],
    ["Acceleration", "Rate of change of velocity, a = Δv/Δt, in m/s². Speeding up, slowing down, and turning are all accelerations."],
    ["Motion graphs", "Slope of position-time = velocity. Slope of velocity-time = acceleration. Area under velocity-time = displacement."],
    ["Kinematic equations", "Four equations linking d, vᵢ, v_f, a, t. They only work when acceleration is constant."],
    ["Free fall", "Motion under gravity only. Every object accelerates at 9.8 m/s² downward, whatever its mass."],
  ],
  sections: [
    {
      title: "1. Describing Motion: Distance and Displacement",
      cues: [
        { q: "What is the difference between distance and displacement?", notes: [
          "**Distance** is the total length of the path traveled. It is a **scalar** (size only) and is never negative.",
          "**Displacement** is the change in position: Δx = x_final − x_initial. It is a **vector** (size and direction).",
          "Displacement only cares about where you start and where you end, not the route.",
        ]},
        { q: "Which motion quantities are scalars and which are vectors?", notes: [
          "**Scalars:** distance, speed, time, mass.",
          "**Vectors:** displacement, velocity, acceleration, force.",
          "In one dimension, direction is shown with a sign: pick one direction as **+** and the opposite is **−**.",
        ]},
        { q: "You walk 4 m east, then 3 m west. What are your distance and displacement?", notes: [
          "Distance: add the whole path. 4 m + 3 m = **7 m**.",
          "Displacement: call east +. (+4 m) + (−3 m) = **+1 m, or 1 m east**.",
          "Sense check: displacement can never be larger than distance.",
        ]},
      ],
      ixl: [["Physics", "C.1", "Classify vectors and scalars"], ["Physics", "D.1", "Distance and displacement in one dimension"]],
      ixlShort: "IXL: Physics C.1, D.1",
    },
    {
      title: "2. Speed and Velocity",
      cues: [
        { q: "How is average speed different from average velocity?", notes: [
          "**Average speed** = total distance ÷ total time.",
          "**Average velocity** = displacement ÷ total time, and it has a direction.",
          "Both are measured in **m/s**.",
        ]},
        { q: "A runner finishes one 400 m lap in 80 s. What are the average speed and average velocity?", notes: [
          "Average speed = 400 m ÷ 80 s = **5 m/s**.",
          "The runner ends where they started, so displacement = 0 and average velocity = **0 m/s**.",
        ]},
        { q: "What does the slope of a position-time graph tell you?", notes: [
          "Slope = rise ÷ run = Δx ÷ Δt = **velocity**.",
          "Steeper line = faster. Flat line = at rest. Line sloping down = moving in the negative direction.",
          "A **curved** line means the velocity is changing, so the object is accelerating.",
        ]},
        { q: "A car drives the first half of a trip's distance at 60 km/h and the second half at 30 km/h. Why is the average speed not 45 km/h?", notes: [
          "The car spends **more time** at the slower speed, so the slow part counts more.",
          "Take each half as 60 km: 60 km ÷ 60 km/h = 1 h, then 60 km ÷ 30 km/h = 2 h.",
          "Average speed = 120 km ÷ 3 h = **40 km/h**. Always use total distance ÷ total time.",
        ]},
      ],
      ixl: [["Physics", "D.2", "Speed and velocity in one dimension"], ["Grade 8", "H.1", "Calculate velocity from time and distance"], ["Grade 8", "H.2", "Calculate distance from velocity and time"], ["Grade 8", "H.3", "Calculate time from velocity and distance"], ["Grade 8", "H.4", "Calculate velocity, distance, and time I"], ["Grade 8", "H.5", "Calculate velocity, distance, and time II"], ["Grade 8", "H.6", "Create a distance-time graph"], ["Grade 8", "H.7", "Interpret distance-time graphs"]],
      ixlShort: "IXL: Physics D.2, Grade 8 H.1–7",
    },
    {
      title: "3. Acceleration and Velocity-Time Graphs",
      cues: [
        { q: "What is acceleration, and what are its units?", notes: [
          "**Acceleration** is how quickly velocity changes: **a = Δv ÷ Δt = (v_f − vᵢ) ÷ t**.",
          "Units: **m/s²** (meters per second, each second).",
          "Any change in velocity counts: speeding up, slowing down, or changing direction.",
        ]},
        { q: "How can you tell whether an object is speeding up or slowing down?", notes: [
          "Compare the **signs** of velocity and acceleration.",
          "**Same sign** (both + or both −): speeding up. **Opposite signs:** slowing down.",
          "So negative acceleration does not always mean slowing down. A car moving in the − direction with a = −2 m/s² is speeding up.",
        ]},
        { q: "What do the slope and the area of a velocity-time graph tell you?", notes: [
          "**Slope = acceleration.** A flat line means constant velocity (a = 0), not “at rest.”",
          "**Area between the line and the time axis = displacement.**",
          "Where the line crosses the time axis, v = 0 and the object **changes direction**.",
        ]},
        { q: "A car goes from rest to 20 m/s in 5 s. What are its acceleration and displacement?", notes: [
          "a = (20 m/s − 0) ÷ 5 s = **4 m/s²**.",
          "Displacement = area of the triangle under the v-t line = ½ × 5 s × 20 m/s = **50 m**.",
          "Check with an equation: d = ½at² = ½ × 4 × 5² = 50 m.",
        ]},
      ],
      ixl: [["Physics", "D.3", "Acceleration in one dimension"], ["Grade 8", "I.1", "Identify whether objects are accelerating"], ["Grade 8", "KK.4", "Abbreviate time, length, speed, and acceleration units"]],
      ixlShort: "IXL: Physics D.3, Grade 8 I.1, KK.4",
    },
    {
      title: "4. Kinematic Equations",
      cues: [
        { q: "What are the four kinematic equations, and when do they work?", notes: [
          "They work only when **acceleration is constant**.",
          "**v_f = vᵢ + at** (no d)",
          "**d = vᵢt + ½at²** (no v_f)",
          "**v_f² = vᵢ² + 2ad** (no t)",
          "**d = ½(vᵢ + v_f)t** (no a)",
        ]},
        { q: "How do you choose which equation to use?", notes: [
          "There are five variables: **d, vᵢ, v_f, a, t**. Write down the three you know and the one you want.",
          "Pick the equation that **leaves out** the fifth variable you neither know nor need.",
          "Watch for hidden values: “from rest” means vᵢ = 0; “comes to a stop” means v_f = 0.",
        ]},
        { q: "A car moving at 30 m/s brakes at −6 m/s². How far does it travel before stopping?", notes: [
          "Known: vᵢ = 30 m/s, v_f = 0, a = −6 m/s². Want d. Time is not needed.",
          "v_f² = vᵢ² + 2ad → 0 = 30² + 2(−6)d → d = 900 ÷ 12 = **75 m**.",
          "Sense check: the answer is positive and a reasonable stopping distance for highway speed.",
        ]},
      ],
      ixl: [["Physics", "D.4", "Solve problems using kinematic equations"]],
      ixlShort: "IXL: Physics D.4",
    },
    {
      title: "5. Free Fall",
      cues: [
        { q: "What is free fall, and what is the acceleration of an object in free fall?", notes: [
          "**Free fall** is motion with **gravity as the only force** (air resistance ignored).",
          "Every object in free fall accelerates at **g = 9.8 m/s² downward**, on the way up, at the top, and on the way down.",
          "With up as +, a = **−9.8 m/s²**.",
        ]},
        { q: "Does a heavier object fall faster than a lighter one?", notes: [
          "**No.** Without air resistance, all objects fall with the same acceleration and land together.",
          "A feather falls slowly in air only because air resistance is large compared with its weight.",
        ]},
        { q: "A ball is thrown straight up. What are its velocity and acceleration at the very top?", notes: [
          "Velocity at the top = **0 m/s** for an instant.",
          "Acceleration at the top is **still 9.8 m/s² downward**. If it were zero, the ball would stay there.",
        ]},
        { q: "A rock is dropped from rest and falls for 2.0 s. How fast is it going and how far has it fallen?", notes: [
          "v_f = vᵢ + at = 0 + (9.8)(2.0) = **19.6 m/s downward**.",
          "d = ½at² = ½ × 9.8 × 2.0² = **19.6 m**.",
          "Pattern: fall time doubles, distance goes up **four** times (d depends on t²).",
        ]},
      ],
      ixl: [["Physics", "D.4", "Solve problems using kinematic equations"]],
      ixlShort: "IXL: Physics D.4",
    },
    {
      title: "6. Labs and Measurement",
      cues: [
        { q: "In a cart-on-a-ramp lab, what are the independent and dependent variables?", notes: [
          "**Independent variable** (what you change): time, or the ramp height.",
          "**Dependent variable** (what you measure): the cart's position or velocity.",
          "**Controlled:** same cart, same ramp surface, same release point.",
        ]},
        { q: "How do you find acceleration from lab data?", notes: [
          "Plot **velocity vs time** and draw a best-fit line. The **slope is the acceleration**.",
          "Or, for a cart released from rest, measure distance and time and use **a = 2d ÷ t²**.",
          "Run several trials and average them. Report answers with sensible significant figures and units.",
        ]},
      ],
      ixl: [["Physics", "A.2", "Identify independent and dependent variables"], ["Physics", "B.1", "Identify significant figures in measurements"], ["Physics", "B.3", "Multiply and divide with significant figures"], ["Physics", "B.4", "Calculations with significant figures"]],
      ixlShort: "IXL: Physics A.2, B.1, B.3–4",
    },
  ],
  mnemonics: [
    ["GUESS: Givens, Unknown, Equation, Substitute, Solve", "Use on every word problem so no step is skipped."],
    ["Slope of position-time is velocity; slope of velocity-time is acceleration", "Use whenever a graph question asks “how fast” or “what acceleration.”"],
    ["Area under velocity-time is displacement", "Use when a graph question asks “how far.”"],
    ["Same signs speed up, opposite signs slow down", "Use to decide if an object is speeding up from the signs of v and a."],
    ["“From rest” means vᵢ = 0; “stops” means v_f = 0", "Use when listing givens; these values are hidden in the wording."],
    ["g = 9.8 m/s² down, always", "Use in every free-fall problem, including at the top of the path."],
  ],
  summary: "Kinematics describes motion without asking what causes it. Position, displacement, velocity, and acceleration are linked: velocity is how fast position changes, and acceleration is how fast velocity changes. The same motion can be shown as a motion map, a position-time graph, a velocity-time graph, or an equation, and the slope and area of the graphs carry the key numbers. When acceleration is constant, four kinematic equations connect d, vᵢ, v_f, a, and t. Free fall is the most important case: every object accelerates at 9.8 m/s² downward regardless of mass.",
  visuals: [
    ["kinematics-4", "The whole path gives distance; the straight arrow from start to finish gives displacement.", "distance = path length; Δx = x_final − x_initial"],
    ["kinematics-3", "Dots show position each second. Even spacing means constant velocity; growing spacing means speeding up.", "bigger gaps = faster"],
    ["kinematics-1", "On a position-time graph, a steeper line means a faster object and a flat line means it is at rest.", "slope = Δx ÷ Δt = velocity"],
    ["kinematics-2", "On a velocity-time graph, the slope gives acceleration and the shaded area gives displacement.", "slope = a; area = displacement"],
  ],
  resources: [
    ["The Physics Classroom: 1-D Kinematics tutorial", "https://www.physicsclassroom.com/class/1DKin", "Plain-language lessons on every topic in this unit, with check-your-understanding questions."],
    ["PhET: The Moving Man", "https://phet.colorado.edu/en/simulations/moving-man", "Drag a figure and watch position, velocity, and acceleration graphs draw live."],
    ["Khan Academy: High school physics", "https://www.khanacademy.org/science/highschool-physics", "Short videos and practice sets with instant feedback."],
    ["OpenStax Physics (free textbook), chapters 2–3", "https://openstax.org/details/books/physics", "Reference reading and extra end-of-chapter problems."],
    ["The Physics Classroom: Concept Builders (Kinematics)", "https://www.physicsclassroom.com/Concept-Builders", "Quick interactive checks on graphs and motion descriptions."],
  ],
  practice: [
    ["A cyclist rides 12 km north in 0.50 h, then 4 km south in 0.25 h. Find the distance, displacement, average speed, and average velocity.", "Distance 16 km; displacement 8 km north; average speed 16 km ÷ 0.75 h = 21.3 km/h; average velocity 8 km ÷ 0.75 h = 10.7 km/h north."],
    ["A car speeds up from 10 m/s to 25 m/s in 6.0 s. Find its acceleration and the distance covered.", "a = 15 ÷ 6.0 = 2.5 m/s²; d = ½(10 + 25)(6.0) = 105 m."],
    ["A stone dropped from a bridge hits the water 3.0 s later. How high is the bridge and how fast is the stone moving at impact?", "d = ½(9.8)(3.0)² = 44.1 m; v = 9.8 × 3.0 = 29.4 m/s downward."],
    ["A ball is thrown straight up at 14.7 m/s. Find the time to the top, the maximum height, and the total time in the air.", "t = 14.7 ÷ 9.8 = 1.5 s; height = 14.7² ÷ (2 × 9.8) = 11.0 m; total time = 3.0 s."],
    ["A driver moving at 20 m/s stops in 40 m. Find the acceleration and the stopping time.", "0 = 20² + 2a(40), so a = −5.0 m/s²; t = 20 ÷ 5.0 = 4.0 s."],
    ["A velocity-time graph rises from 0 to 8 m/s in 4 s, stays at 8 m/s for 6 s, then drops to 0 in 2 s. Find the acceleration in each part and the total displacement.", "Accelerations: +2 m/s², 0, −4 m/s². Displacement = 16 m + 48 m + 8 m = 72 m."],
  ],
  realWorld: [
    "Stopping distance and following distance when driving: doubling speed makes braking distance about four times longer.",
    "Sports timing: sprint splits show acceleration in the first 30 m and near-constant velocity after.",
    "GPS and fitness trackers compute speed from position readings taken at regular time intervals.",
    "Earth science link: seismologists use distance = speed × time for P and S waves to locate an earthquake (second semester).",
  ],
  labs: [
    "Constant-velocity buggy: build a position-time graph and find speed from the slope.",
    "Cart on a ramp with a motion sensor or video analysis: find acceleration from a velocity-time graph.",
    "Picket fence or dropped-ball video: measure g and compare with 9.8 m/s².",
  ],
  quiz: [
    { q: "A ball is thrown straight up. At the very top of its path, what is its acceleration?", c: ["Zero, because it has stopped", "9.8 m/s² downward", "9.8 m/s² upward", "It depends on how hard it was thrown"], a: 1,
      why: "Gravity keeps acting at the top. The velocity is zero for an instant, but it is still changing at 9.8 m/s² downward.", trap: "Mixing up zero velocity with zero acceleration." },
    { q: "A runner completes one full lap of a 400 m track in 80 s. What is the runner's average velocity?", c: ["5 m/s", "0 m/s", "0.2 m/s", "10 m/s"], a: 1,
      why: "The runner ends at the starting point, so displacement is zero and average velocity is zero. The average speed is 5 m/s.", trap: "Using distance instead of displacement." },
    { q: "A position-time graph is a flat horizontal line. What is the object doing?", c: ["Moving at constant speed", "Speeding up", "Standing still", "Moving backward"], a: 2,
      why: "A flat line means position is not changing. The slope, which is the velocity, is zero.", trap: "Reading a position-time graph as if it were a velocity-time graph." },
    { q: "A car moves in the negative direction with an acceleration of −2 m/s². What is happening to its speed?", c: ["It is slowing down", "It is speeding up", "It stays the same", "It reverses direction immediately"], a: 1,
      why: "Velocity and acceleration have the same sign, so the car speeds up. Negative acceleration only means slowing down when the velocity is positive.", trap: "Believing negative acceleration always means slowing down." },
    { q: "A bowling ball and a golf ball are dropped from the same height at the same time. Ignoring air resistance, which lands first?", c: ["The bowling ball", "The golf ball", "They land at the same time", "It depends on the height"], a: 2,
      why: "All objects in free fall have the same acceleration, 9.8 m/s² downward, whatever their mass.", trap: "Believing heavier objects fall faster." },
    { q: "On a velocity-time graph, the line crosses the time axis from positive to negative. What happens at that moment?", c: ["The object returns to its starting point", "The object changes direction", "The object's acceleration becomes zero", "The object stops for good"], a: 1,
      why: "Crossing the axis means velocity changes sign, so the object turns around. It is back at the start only when the areas above and below the axis are equal.", trap: "Treating the velocity graph as a picture of position." },
    { q: "A rock falls from rest for 1 s and covers 4.9 m. How far does it fall in 2 s?", c: ["9.8 m", "14.7 m", "19.6 m", "4.9 m"], a: 2,
      why: "From rest, d = ½at², so distance depends on time squared. Twice the time gives four times the distance: 4 × 4.9 m = 19.6 m.", trap: "Assuming distance doubles when time doubles." },
    { q: "What does the area under a velocity-time graph represent?", c: ["Acceleration", "Displacement", "Average velocity", "Speed"], a: 1,
      why: "Velocity multiplied by time is displacement, so the area between the line and the time axis is the displacement. The slope is the acceleration.", trap: "Swapping the meanings of slope and area." },
    { q: "A car covers the first half of a trip's distance at 60 km/h and the second half at 30 km/h. What is its average speed for the trip?", c: ["45 km/h", "40 km/h", "50 km/h", "35 km/h"], a: 1,
      why: "Average speed is total distance over total time. For two 60 km halves the times are 1 h and 2 h, so 120 km ÷ 3 h = 40 km/h.", trap: "Averaging the two speeds instead of using total distance ÷ total time." },
    { q: "A velocity-time graph is a flat horizontal line at 6 m/s. What is the object doing?", c: ["Standing still", "Moving at a constant 6 m/s", "Accelerating at 6 m/s²", "Slowing down"], a: 1,
      why: "A flat velocity-time line means the velocity is not changing: constant 6 m/s with zero acceleration.", trap: "Reading a flat line as “at rest” on every graph." },
  ],
};
