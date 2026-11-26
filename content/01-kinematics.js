// Unit 1: Kinematics. Single source for notes, unit page, and quiz.
// Markup: **bold**, and x_y renders y as a subscript.
module.exports = {
  num: 1,
  slug: "01-kinematics",
  title: "Kinematics",
  short: "Motion in One Dimension",
  subtitle: "Physics | Semester 1, Unit 1 | Position, velocity, acceleration, motion graphs, free fall",
  pacing: "Weeks 1–4",
  ngss: ["HS-PS2-1 (foundation)", "SEP: Analyzing and Interpreting Data", "SEP: Using Mathematics and Computational Thinking", "CCC: Patterns"],
  essentialQuestion: "How can we describe and predict where an object will be and how fast it will be moving?",
  targets: [
    "I can tell distance from displacement and speed from velocity, and say which are vectors.",
    "I can calculate average velocity and acceleration from data.",
    "I can read position-time and velocity-time graphs using slope and area.",
    "I can choose a kinematic equation and solve a constant-acceleration problem.",
    "I can solve free-fall problems using a = 9.8 m/s² downward.",
  ],
  concepts: [
    "Position, distance, and displacement (scalar vs. vector)",
    "Speed vs. velocity; average vs. instantaneous",
    "Acceleration as the rate of change of velocity, including its sign",
    "Position-time graphs (slope = velocity) and velocity-time graphs (slope = acceleration, area = displacement)",
    "The four kinematic equations for constant acceleration",
    "Free fall: every object accelerates at 9.8 m/s² downward when air resistance is ignored",
  ],
  sections: [
    {
      title: "1. Position, Distance, and Displacement",
      ixl: [["Physics C.1", "Classify vectors and scalars"], ["Physics D.1", "Distance and displacement in one dimension"]],
      rows: [
        {
          cue: "What is the difference between distance and displacement?",
          notes: [
            "**Distance** is the total length of the path traveled. It is a **scalar** (size only).",
            "**Displacement** is the change in position: Δx = x_f − x_i. It is a **vector** (size and direction).",
            "Example: walk 4 m east, then 3 m west. Distance = **7 m**. Displacement = **1 m east**.",
          ],
        },
        {
          cue: "What makes a quantity a vector instead of a scalar?",
          notes: [
            "A **vector** has magnitude and direction: displacement, velocity, acceleration, force.",
            "A **scalar** has magnitude only: distance, speed, time, mass.",
            "In one dimension, show direction with a **+ or − sign** (for example, right and up are +).",
          ],
        },
        {
          cue: "Why does every motion problem need a reference point?",
          notes: [
            "**Position** is measured from an origin (x = 0) that you choose.",
            "Motion is described relative to a **frame of reference**. A passenger is at rest relative to the bus but moving relative to the road.",
          ],
        },
      ],
    },
    {
      title: "2. Speed and Velocity",
      ixl: [
        ["Physics D.2", "Speed and velocity in one dimension"],
        ["Grade 8 H.1", "Calculate velocity from time and distance"],
        ["Grade 8 H.2", "Calculate distance from velocity and time"],
        ["Grade 8 H.3", "Calculate time from velocity and distance"],
        ["Grade 8 H.4", "Calculate velocity, distance, and time I"],
        ["Grade 8 H.5", "Calculate velocity, distance, and time II"],
        ["Grade 8 H.6", "Create a distance-time graph"],
        ["Grade 8 H.7", "Interpret distance-time graphs"],
      ],
      rows: [
        {
          cue: "How do you calculate average speed and average velocity?",
          notes: [
            "**Average speed** = total distance ÷ total time.",
            "**Average velocity** = displacement ÷ time: v_avg = Δx / Δt. Units: m/s.",
            "Worked example: a runner goes once around a 400 m track in 80 s. Average speed = 400 ÷ 80 = **5 m/s**. Displacement is 0 (back at the start), so average velocity = **0 m/s**.",
          ],
        },
        {
          cue: "What does the slope of a position-time graph tell you?",
          notes: [
            "**Slope = velocity.** Rise is Δx, run is Δt.",
            "Straight line = constant velocity. Steeper line = faster. Flat line = at rest.",
            "Line sloping down = moving in the negative direction. **Curved line = velocity is changing** (accelerating).",
          ],
        },
        {
          cue: "How is instantaneous velocity different from average velocity?",
          notes: [
            "**Instantaneous velocity** is the velocity at one moment (what a speedometer shows, plus direction).",
            "**Average velocity** covers a whole time interval. They are equal only when velocity is constant.",
          ],
        },
      ],
    },
    {
      title: "3. Acceleration",
      ixl: [["Physics D.3", "Acceleration in one dimension"], ["Grade 8 I.1", "Identify whether objects are accelerating"]],
      rows: [
        {
          cue: "What is acceleration, and what are its units?",
          notes: [
            "**Acceleration** is how fast velocity changes: a = Δv / Δt = (v_f − v_i) / t. Units: **m/s²**.",
            "Worked example: a car goes from 0 to 20 m/s in 5 s. a = (20 − 0) ÷ 5 = **4 m/s²**. Each second it gains 4 m/s.",
            "Speeding up, slowing down, and changing direction are all acceleration.",
          ],
        },
        {
          cue: "Does a negative acceleration always mean slowing down?",
          notes: [
            "**No.** The sign of a gives its direction, not whether the object slows.",
            "Velocity and acceleration with the **same sign: speeding up**. **Opposite signs: slowing down**.",
            "Example: v = −10 m/s and a = −2 m/s². The object is speeding up in the negative direction.",
          ],
        },
        {
          cue: "What do the slope and the area of a velocity-time graph tell you?",
          notes: [
            "**Slope = acceleration. Area under the line = displacement.**",
            "Worked example: velocity rises steadily from 0 to 12 m/s in 4 s. Slope = 12 ÷ 4 = **3 m/s²**. Area = ½ × 4 × 12 = **24 m**.",
            "A flat line above the axis means constant velocity, not at rest.",
          ],
        },
        {
          cue: "Can an object have zero velocity and still be accelerating?",
          notes: [
            "**Yes.** A ball thrown straight up has v = 0 at the top, but a is still 9.8 m/s² downward.",
            "If a were zero at the top, the ball would stay there.",
          ],
        },
      ],
    },
    {
      title: "4. Kinematic Equations and Free Fall",
      ixl: [["Physics D.4", "Solve problems using kinematic equations"]],
      rows: [
        {
          cue: "Which four equations describe motion with constant acceleration?",
          notes: [
            "v_f = v_i + at",
            "Δx = v_i t + ½at²",
            "v_f² = v_i² + 2aΔx",
            "Δx = ½(v_i + v_f)t",
            "They work **only when acceleration is constant**.",
          ],
        },
        {
          cue: "How do you choose which kinematic equation to use?",
          notes: [
            "List what you know and what you want (v_i, v_f, a, t, Δx). You need **three knowns**.",
            "Pick the equation that has your unknown and does **not** contain the variable you were not given.",
            "Worked example: a car starts from rest and accelerates at 3 m/s² for 6 s. How far does it go? Knowns: v_i = 0, a = 3, t = 6. Δx = 0 + ½(3)(6²) = **54 m**. Sense check: final speed is 18 m/s, average 9 m/s, and 9 × 6 = 54 m.",
            "Worked example: a car at 20 m/s brakes at −5 m/s². Stopping distance? 0² = 20² + 2(−5)Δx, so Δx = 400 ÷ 10 = **40 m**.",
          ],
        },
        {
          cue: "What is free fall, and what is the acceleration of a falling object?",
          notes: [
            "**Free fall** is motion with gravity as the only force (air resistance ignored).",
            "Every object in free fall accelerates at **g = 9.8 m/s² downward**, whatever its mass.",
            "Worked example: a rock is dropped from rest and falls for 3 s. Speed: v = 9.8 × 3 = **29.4 m/s**. Distance: d = ½(9.8)(3²) = **44.1 m**.",
            "On the way up, a tossed ball loses 9.8 m/s each second. On the way down it gains 9.8 m/s each second.",
          ],
        },
      ],
    },
    {
      title: "5. Labs and Measurement",
      ixl: [
        ["Physics A.2", "Identify independent and dependent variables"],
        ["Physics B.1", "Identify significant figures in measurements"],
        ["Physics B.2", "Add and subtract with significant figures"],
        ["Physics B.3", "Multiply and divide with significant figures"],
        ["Physics B.4", "Calculations with significant figures"],
        ["Grade 8 KK.4", "Abbreviate time, length, speed, and acceleration units"],
      ],
      rows: [
        {
          cue: "How do you measure a constant velocity in the lab?",
          notes: [
            "**Constant-velocity lab** (battery buggy or walking student): mark position every second with a meter stick and stopwatch.",
            "Graph position vs. time. The **slope of the best-fit line is the speed**.",
            "**Independent variable:** time. **Dependent variable:** position.",
          ],
        },
        {
          cue: "How do you measure acceleration in the lab?",
          notes: [
            "**Cart on a ramp** (or a dropped object): release from rest, measure distance and time.",
            "From rest, Δx = ½at², so **a = 2Δx / t²**.",
            "**Independent variable:** ramp height (or distance). **Dependent variable:** time. Keep the cart and start line the same.",
          ],
        },
        {
          cue: "Why do you run several trials and watch significant figures?",
          notes: [
            "Hand timing has a reaction-time error of about 0.2 s. **Averaging three or more trials** reduces random error.",
            "Report answers to the precision of the least precise measurement.",
          ],
        },
      ],
    },
  ],
  noIxl: "Motion maps (dot diagrams), velocity-time graph slope and area, and free-fall concepts: use the Physics Classroom Kinematics Concept Builders.",
  mnemonics: [
    { trick: "List knowns, pick the equation missing the variable you don't have", when: "Every constant-acceleration problem. Three knowns give you the fourth." },
    { trick: "Slope of position-time = velocity. Slope of velocity-time = acceleration. Area under velocity-time = displacement.", when: "Any motion graph question." },
    { trick: "Same signs speed up, opposite signs slow down", when: "Deciding whether an object is speeding up from the signs of v and a." },
    { trick: "g = 9.8 m/s² down, the whole flight", when: "Free fall: going up, at the top, and coming down." },
    { trick: "Vectors have direction, scalars do not", when: "Distance vs. displacement and speed vs. velocity questions." },
  ],
  summary:
    "Kinematics describes motion without asking what causes it. Position tells where an object is, velocity tells how fast its position changes and in which direction, and acceleration tells how fast its velocity changes. Graphs carry the same information: the slope of a position-time graph is velocity, the slope of a velocity-time graph is acceleration, and the area under a velocity-time graph is displacement. When acceleration is constant, four equations connect v_i, v_f, a, t, and Δx. Free fall is the most common case, with a = 9.8 m/s² downward for every object.",
  visuals: [
    { img: "motion-map.png", caption: "A motion map shows position at equal time intervals. Even spacing means constant velocity. Growing spacing means speeding up.", rule: "v = Δx / Δt" },
    { img: "xt-graph.png", caption: "On a position-time graph, the slope is the velocity. A curve means the velocity is changing.", rule: "slope = Δx / Δt = v" },
    { img: "vt-graph.png", caption: "On a velocity-time graph, the slope is the acceleration and the shaded area is the displacement.", rule: "slope = a,  area = Δx" },
    { img: "free-fall.png", caption: "A dropped object gains 9.8 m/s every second, so the gaps between dots grow.", rule: "v = gt,  d = ½gt²" },
  ],
  quiz: [
    {
      q: "A runner completes exactly one lap of a 400 m track in 80 s. What is the runner's average velocity?",
      choices: ["0 m/s", "5 m/s", "0.2 m/s", "400 m/s"],
      answer: 0,
      misconception: "Mixing up distance and displacement",
      why: "Velocity uses displacement. After one full lap the runner is back at the start, so displacement is 0 and average velocity is 0 m/s. The average speed is 5 m/s.",
    },
    {
      q: "A ball is thrown straight up. At the very top of its path, its acceleration is:",
      choices: ["9.8 m/s² downward", "Zero", "9.8 m/s² upward", "It depends on the mass of the ball"],
      answer: 0,
      misconception: "Thinking zero velocity means zero acceleration",
      why: "Gravity never switches off. Velocity is zero for an instant, but it is still changing at 9.8 m/s² downward. That is why the ball comes back down.",
    },
    {
      q: "An object has velocity −6 m/s and acceleration −2 m/s². The object is:",
      choices: ["Speeding up", "Slowing down", "Moving at constant velocity", "At rest"],
      answer: 0,
      misconception: "Thinking negative acceleration always means slowing down",
      why: "Velocity and acceleration have the same sign, so the object speeds up (in the negative direction). It slows down only when the signs are opposite.",
    },
    {
      q: "A position-time graph is a straight line sloping upward. The object is:",
      choices: ["Moving at constant velocity", "Speeding up", "Moving uphill", "At rest"],
      answer: 0,
      misconception: "Reading a position-time graph as a picture or as a speed graph",
      why: "The slope of a position-time graph is velocity. A straight line has one constant slope, so the velocity is constant. Speeding up would show as a curve getting steeper.",
    },
    {
      q: "A velocity-time graph is a flat horizontal line at +5 m/s. The object is:",
      choices: ["Moving at a constant 5 m/s", "At rest", "Accelerating at 5 m/s²", "Slowing down"],
      answer: 0,
      misconception: "Reading a flat velocity-time line as 'not moving'",
      why: "The graph shows velocity, and it reads 5 m/s the whole time. A flat line means zero acceleration, not zero velocity. 'At rest' would be a flat line on the time axis (v = 0).",
    },
    {
      q: "A bowling ball and a golf ball are dropped from the same height at the same time. Ignoring air resistance, which lands first?",
      choices: ["They land at the same time", "The bowling ball", "The golf ball", "It depends on the height"],
      answer: 0,
      misconception: "Believing heavier objects fall faster",
      why: "In free fall every object has the same acceleration, 9.8 m/s² downward, whatever its mass. Same height and same acceleration give the same time.",
    },
    {
      q: "A car starts from rest and accelerates at 2 m/s² for 5 s. How far does it travel?",
      choices: ["25 m", "10 m", "50 m", "5 m"],
      answer: 0,
      misconception: "Using v = at for distance, or forgetting the ½",
      why: "Δx = v_i t + ½at² = 0 + ½(2)(5²) = 25 m. The 10 is the final speed (m/s), not the distance, and 50 m forgets the ½.",
    },
    {
      q: "A rock dropped from rest falls a distance d in 1 s. How far does it fall in 2 s?",
      choices: ["4d", "2d", "d", "8d"],
      answer: 0,
      misconception: "Assuming distance fallen is proportional to time",
      why: "From rest, d = ½gt². Distance depends on time squared, so doubling the time gives 2² = 4 times the distance.",
    },
  ],
  practice: [
    { q: "You walk 30 m north, then 40 m south, in 35 s total. Find the distance, displacement, average speed, and average velocity.", a: "Distance 70 m; displacement 10 m south; average speed 70 ÷ 35 = 2.0 m/s; average velocity 10 ÷ 35 = 0.29 m/s south." },
    { q: "A cyclist speeds up from 5 m/s to 15 m/s in 4 s. Find the acceleration and the distance covered.", a: "a = (15 − 5) ÷ 4 = 2.5 m/s². Δx = ½(5 + 15)(4) = 40 m." },
    { q: "A car moving at 25 m/s brakes to rest at −5 m/s². How long does it take, and how far does it travel?", a: "t = (0 − 25) ÷ (−5) = 5 s. Δx = 25² ÷ (2 × 5) = 62.5 m." },
    { q: "A stone dropped from a bridge hits the water 2.5 s later. How high is the bridge, and how fast is the stone moving at impact?", a: "h = ½(9.8)(2.5²) = 30.6 m. v = 9.8 × 2.5 = 24.5 m/s." },
    { q: "A ball is thrown straight up at 14.7 m/s. How long does it take to reach the top, and how high does it go?", a: "t = 14.7 ÷ 9.8 = 1.5 s. h = 14.7² ÷ (2 × 9.8) = 11.0 m." },
    { q: "On a velocity-time graph, velocity rises steadily from 0 to 8 m/s between 0 and 4 s, then stays at 8 m/s until 10 s. Find the acceleration in the first part and the total displacement.", a: "a = 8 ÷ 4 = 2 m/s². Displacement = triangle (½ × 4 × 8 = 16 m) + rectangle (6 × 8 = 48 m) = 64 m." },
  ],
  realWorld: [
    "Braking distance: stopping distance grows with speed squared, so doubling your speed quadruples the distance needed to stop.",
    "Sprint split times: coaches use position-time data to find where a runner accelerates and where they hold top speed.",
    "GPS and phone speed readouts: position sampled over time, turned into velocity.",
    "Drop-tower rides and elevators: riders feel the acceleration, not the speed.",
    "Yellow-light timing: traffic engineers use reaction time plus braking distance.",
  ],
  resources: [
    { name: "The Physics Classroom: 1D Kinematics tutorial", url: "https://www.physicsclassroom.com/class/1DKin", what: "Short readings with Check Your Understanding questions for every topic in this unit." },
    { name: "The Physics Classroom: Kinematics Concept Builders", url: "https://www.physicsclassroom.com/Concept-Builders/Kinematics", what: "Interactive practice on motion diagrams, graphs, and free fall." },
    { name: "PhET: The Moving Man", url: "https://phet.colorado.edu/en/simulations/moving-man", what: "Watch position, velocity, and acceleration graphs draw as a figure moves." },
    { name: "Khan Academy: High School Physics", url: "https://www.khanacademy.org/science/highschool-physics", what: "Video lessons and practice sets on one-dimensional motion." },
    { name: "OpenStax Physics (high school)", url: "https://openstax.org/details/books/physics", what: "Free textbook. See the chapters on motion in one dimension and acceleration." },
  ],
  objectives: [
    { id: "K1", text: "Distinguish distance from displacement and speed from velocity.", evidence: "Correctly reports both quantities, with direction, for a multi-leg trip." },
    { id: "K2", text: "Calculate average velocity and acceleration from data.", evidence: "Uses v = Δx/Δt and a = Δv/Δt with units on lab data and word problems." },
    { id: "K3", text: "Interpret position-time and velocity-time graphs.", evidence: "Finds velocity from slope, acceleration from slope, and displacement from area; sketches one graph from the other." },
    { id: "K4", text: "Solve constant-acceleration problems with the kinematic equations.", evidence: "Lists knowns, selects an equation, solves with units, and does a sense check." },
    { id: "K5", text: "Solve free-fall problems.", evidence: "Applies a = 9.8 m/s² downward for dropped and tossed objects, including at the top of the path." },
  ],
};
