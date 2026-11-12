(globalThis.UNITS = globalThis.UNITS || []).push({
  id: "kinematics",
  num: 1,
  title: "Kinematics",
  subtitle: "Describing motion in one dimension",
  pacing: "Weeks 1–4",
  essentialQuestion: "How can we describe and predict where an object will be and how fast it will be moving?",
  ngss: ["HS-PS2-1 (foundation)", "SEP: Analyzing and Interpreting Data", "SEP: Using Mathematics and Computational Thinking", "CCC: Patterns"],
  ngssNote: "NGSS has no stand-alone kinematics performance expectation. This unit builds the motion-graph and acceleration skills students need to analyze data for HS-PS2-1 (Newton's second law).",
  concepts: [
    ["Position, distance, displacement", "Distance is the total path length (scalar). Displacement is the change in position, with direction (vector)."],
    ["Speed and velocity", "Speed = distance ÷ time. Velocity = displacement ÷ time, and includes direction."],
    ["Acceleration", "The rate at which velocity changes: a = Δv ÷ Δt. Units: m/s²."],
    ["Motion graphs", "Slope of position–time = velocity. Slope of velocity–time = acceleration. Area under velocity–time = displacement."],
    ["Kinematic equations", "Four equations linking Δx, v₀, v, a, and t for constant acceleration."],
    ["Free fall", "With no air resistance, every object accelerates downward at g = 9.8 m/s², whatever its mass."]
  ],
  objectives: [
    ["K1", "Distinguish distance from displacement and speed from velocity, and calculate each from a description of motion."],
    ["K2", "Calculate acceleration and explain what its sign means for an object's motion."],
    ["K3", "Read and sketch position–time and velocity–time graphs, using slope and area to find velocity, acceleration, and displacement."],
    ["K4", "Choose and solve the right kinematic equation for a constant-acceleration problem, showing knowns, unknowns, and units."],
    ["K5", "Solve free-fall problems and explain why mass does not affect the acceleration of a falling object."]
  ],
  notes: [
    {
      section: "1. Describing Motion",
      rows: [
        ["What is the difference between a scalar and a vector?", [
          "A **scalar** has size only (distance, speed, time, mass).",
          "A **vector** has size and direction (displacement, velocity, acceleration, force).",
          "In one dimension, direction is shown with a **+ or − sign**. Pick which way is positive and keep it for the whole problem."
        ]],
        ["How is distance different from displacement?", [
          "**Distance** = total path length traveled. Always positive.",
          "**Displacement** (Δx) = final position − initial position. It can be positive, negative, or zero.",
          "**Worked example:** You walk 4 m east, then 3 m west. Distance = 4 + 3 = **7 m**. Displacement = 4 − 3 = **1 m east**."
        ]],
        ["How is average speed different from average velocity?", [
          "**Average speed** = distance ÷ time.",
          "**Average velocity** = displacement ÷ time.",
          "**Worked example:** A runner finishes one 400 m lap in 80 s. Average speed = 400 ÷ 80 = **5 m/s**. She ends where she started, so displacement = 0 and average velocity = **0 m/s**."
        ]]
      ],
      ixl: [["Physics C.1", "Classify vectors and scalars"], ["Physics D.1", "Distance and displacement in one dimension"], ["Physics D.2", "Speed and velocity in one dimension"]]
    },
    {
      section: "2. Acceleration",
      rows: [
        ["What is acceleration, and how do I calculate it?", [
          "**Acceleration** is how fast velocity changes: **a = Δv ÷ Δt = (v − v₀) ÷ t**. Units: m/s².",
          "**Worked example:** A car goes from rest to 20 m/s in 5 s. a = (20 − 0) ÷ 5 = **4 m/s²**. Sense check: it gains 4 m/s every second, so after 5 s it has 20 m/s."
        ]],
        ["Does negative acceleration always mean slowing down?", [
          "**No.** The sign of acceleration only gives its direction.",
          "An object **speeds up** when velocity and acceleration point the **same** way.",
          "An object **slows down** when they point **opposite** ways.",
          "Example: v = −10 m/s and a = −2 m/s² means moving in the negative direction and getting faster."
        ]],
        ["Can an object have zero velocity and still be accelerating?", [
          "**Yes.** A ball thrown straight up has v = 0 at the top, but its acceleration is still 9.8 m/s² downward. That is why it starts coming back down."
        ]]
      ],
      ixl: [["Physics D.3", "Acceleration in one dimension"]]
    },
    {
      section: "3. Motion Graphs",
      rows: [
        ["What does the slope of a position–time graph tell me?", [
          "Slope = **velocity**.",
          "Straight sloped line = constant velocity. **Flat line = at rest.** Curved line = changing velocity (accelerating).",
          "Steeper line = faster. Line sloping downward = moving in the negative direction."
        ]],
        ["What do the slope and area of a velocity–time graph tell me?", [
          "Slope = **acceleration**. Area between the line and the time axis = **displacement**.",
          "A **flat line** on a velocity–time graph means constant velocity, not at rest (unless the line sits on v = 0).",
          "**Worked example:** Velocity rises in a straight line from 0 to 12 m/s over 4 s. Slope = 12 ÷ 4 = **3 m/s²**. Area of the triangle = ½ × 4 × 12 = **24 m**."
        ]],
        ["What does it mean when a velocity–time line crosses the time axis?", [
          "The object stops for an instant and **reverses direction**. Above the axis it moves in the positive direction; below, in the negative direction."
        ]]
      ],
      ixl: [["Physics D.2", "Speed and velocity in one dimension"], ["Physics D.3", "Acceleration in one dimension"]],
      ixlNote: "For extra graph practice, use The Physics Classroom Concept Builders (Kinematics: Position-Time Graphs, Velocity-Time Graphs)."
    },
    {
      section: "4. Kinematic Equations",
      rows: [
        ["What are the four kinematic equations, and when do they work?", [
          "They work only when **acceleration is constant**.",
          "**v = v₀ + at** (no Δx)",
          "**Δx = v₀t + ½at²** (no v)",
          "**v² = v₀² + 2aΔx** (no t)",
          "**Δx = ½(v₀ + v)t** (no a)"
        ]],
        ["How do I choose which equation to use?", [
          "List the five quantities: Δx, v₀, v, a, t. Mark the three you **know** and the one you **want**.",
          "Pick the equation that does **not** contain the fifth quantity (the one you neither know nor want).",
          "Watch for hidden values: \"from rest\" means v₀ = 0; \"comes to a stop\" means v = 0."
        ]],
        ["How far does a car travel while braking from 30 m/s at −6 m/s²?", [
          "**Knowns:** v₀ = 30 m/s, v = 0, a = −6 m/s². **Want:** Δx. No time given, so use v² = v₀² + 2aΔx.",
          "0 = 30² + 2(−6)Δx → Δx = 900 ÷ 12 = **75 m**.",
          "Time to stop: v = v₀ + at → t = 30 ÷ 6 = **5 s**. Sense check: average velocity 15 m/s × 5 s = 75 m."
        ]]
      ],
      ixl: [["Physics D.4", "Solve problems using kinematic equations"]]
    },
    {
      section: "5. Free Fall",
      rows: [
        ["What is free fall, and what is the acceleration?", [
          "**Free fall** = motion under gravity only (no air resistance).",
          "Acceleration is **g = 9.8 m/s² downward** the whole time: going up, at the top, and coming down."
        ]],
        ["Does a heavier object fall faster?", [
          "**No**, not without air resistance. All objects in free fall have the same acceleration, so a heavy ball and a light ball dropped together land together.",
          "In everyday life a feather falls slowly because of air resistance, not because it is lighter."
        ]],
        ["How fast and how far does a rock dropped from rest fall in 3 s?", [
          "**Knowns:** v₀ = 0, a = 9.8 m/s² (taking down as positive), t = 3 s.",
          "Speed: v = at = 9.8 × 3 = **29.4 m/s**.",
          "Distance: Δx = ½at² = ½ × 9.8 × 3² = **44.1 m**.",
          "Notice distance grows with **t²**: twice the time means four times the distance."
        ]],
        ["How high does a ball go if it is thrown straight up at 19.6 m/s?", [
          "**Knowns:** v₀ = +19.6 m/s, a = −9.8 m/s², and v = 0 at the top.",
          "Time to the top: t = 19.6 ÷ 9.8 = **2 s**.",
          "Height: v² = v₀² + 2aΔx → Δx = 19.6² ÷ (2 × 9.8) = **19.6 m**.",
          "It takes the same 2 s to come back down and returns at 19.6 m/s."
        ]]
      ],
      ixl: [["Physics D.4", "Solve problems using kinematic equations"]]
    }
  ],
  tricks: [
    ["Slope and area rule", "Position–time slope gives velocity; velocity–time slope gives acceleration; velocity–time area gives displacement. Use it on every graph question."],
    ["GUESS method", "Givens, Unknown, Equation, Substitute, Solve. Use it to set up every calculation."],
    ["Pick the equation with the missing variable", "Each kinematic equation leaves one quantity out. Choose the one that leaves out what you neither know nor want."],
    ["Same sign speeds up, opposite signs slow down", "Compare the signs of velocity and acceleration to decide whether the object is speeding up."]
  ],
  summary: "Kinematics describes motion without asking what causes it. Displacement, velocity, and acceleration are vectors, so direction (the sign) matters. Velocity is the rate of change of position and acceleration is the rate of change of velocity, which is why slopes and areas on motion graphs connect the three. When acceleration is constant, four kinematic equations predict the motion, and free fall is the special case where the acceleration is 9.8 m/s² downward for every object.",
  quiz: [
    {
      q: "A ball is thrown straight up. At the very top of its path, what is its acceleration?",
      choices: ["9.8 m/s² downward", "Zero, because it has stopped", "9.8 m/s² upward", "It depends on the mass of the ball"],
      why: "Velocity is zero at the top, but gravity is still acting, so the acceleration is still 9.8 m/s² downward. If acceleration were zero the ball would stay at the top.",
      trap: "Confusing zero velocity with zero acceleration."
    },
    {
      q: "A position–time graph shows a flat horizontal line. What is the object doing?",
      choices: ["Staying at rest", "Moving at constant velocity", "Speeding up steadily", "Moving backward"],
      why: "The slope of a position–time graph is velocity. A flat line has zero slope, so the velocity is zero. (A flat line on a velocity–time graph would mean constant velocity.)",
      trap: "Mixing up position–time and velocity–time graphs."
    },
    {
      q: "A car has a negative acceleration. Which statement must be true?",
      choices: ["Its acceleration points in the negative direction", "It is slowing down", "It is moving backward", "It will stop soon"],
      why: "The sign only gives direction. If the car is also moving in the negative direction, a negative acceleration makes it speed up.",
      trap: "Believing negative acceleration always means slowing down."
    },
    {
      q: "A runner completes exactly one lap of a 400 m track in 50 s. What is her average velocity?",
      choices: ["0 m/s", "8 m/s", "4 m/s", "20 000 m/s"],
      why: "She ends where she started, so displacement is zero, and average velocity = displacement ÷ time = 0. Her average speed is 8 m/s.",
      trap: "Using distance instead of displacement."
    },
    {
      q: "On a velocity–time graph, velocity rises in a straight line from 0 to 10 m/s over 5 s. How far does the object travel?",
      choices: ["25 m", "50 m", "2 m", "10 m"],
      why: "Displacement is the area under the line: a triangle with area ½ × 5 s × 10 m/s = 25 m. Multiplying 10 × 5 = 50 m treats the object as if it moved at top speed the whole time.",
      trap: "Using final velocity × time instead of the area (average velocity × time)."
    },
    {
      q: "A bowling ball and a tennis ball are dropped from the same height at the same time. Ignoring air resistance, which lands first?",
      choices: ["They land at the same time", "The bowling ball", "The tennis ball", "It depends on the height"],
      why: "In free fall every object has the same acceleration, 9.8 m/s², regardless of mass.",
      trap: "Believing heavier objects fall faster."
    },
    {
      q: "A stone dropped from rest falls about 5 m in the first second. About how far has it fallen after 2 seconds?",
      choices: ["20 m", "10 m", "15 m", "40 m"],
      why: "Δx = ½at², so distance depends on time squared. Double the time gives four times the distance: 4 × 5 m = 20 m.",
      trap: "Assuming distance doubles when time doubles."
    },
    {
      q: "A car braking at a constant rate needs 20 m to stop from 10 m/s. With the same braking, how far does it need to stop from 20 m/s?",
      choices: ["80 m", "40 m", "30 m", "20 m"],
      why: "From v² = v₀² + 2aΔx, stopping distance is proportional to v₀². Doubling the speed makes the distance four times as large.",
      trap: "Assuming stopping distance is proportional to speed."
    }
  ],
  problems: [
    ["Warm-up", "A cyclist rides 150 m east in 30 s. What is the average velocity?", "150 ÷ 30 = 5.0 m/s east."],
    ["Core", "A car speeds up from 10 m/s to 25 m/s in 6.0 s. Find the acceleration and the distance covered.", "a = (25 − 10) ÷ 6.0 = 2.5 m/s². Δx = ½(10 + 25)(6.0) = 105 m."],
    ["Core", "A driver moving at 20 m/s brakes at −5.0 m/s². How far and how long does it take to stop?", "Δx = 20² ÷ (2 × 5.0) = 40 m. t = 20 ÷ 5.0 = 4.0 s."],
    ["Core", "A rock dropped from a bridge hits the water 2.5 s later. How high is the bridge, and how fast is the rock moving at impact?", "Δx = ½(9.8)(2.5²) = 30.6 m. v = 9.8 × 2.5 = 24.5 m/s."],
    ["Core", "A ball is thrown straight up at 14.7 m/s. Find the time to the top, the maximum height, and the total time in the air.", "t = 14.7 ÷ 9.8 = 1.5 s. Height = 14.7² ÷ (2 × 9.8) = 11.0 m. Total time = 3.0 s."],
    ["Challenge", "A sprinter starts from rest, accelerates at 2.0 m/s² for 4.0 s, then holds that speed. How long does the 100 m race take?", "After 4.0 s: v = 8.0 m/s, Δx = ½(2.0)(4.0²) = 16 m. Remaining 84 m at 8.0 m/s takes 10.5 s. Total = 14.5 s."]
  ],
  labs: [
    ["Constant-velocity buggy lab", "Mark the position of a battery buggy every second. Independent variable: time. Dependent variable: position. Graph position vs. time; the slope is the buggy's velocity."],
    ["Cart on a ramp", "Release a cart on an incline and record position vs. time with a motion sensor or video. Show that the velocity–time graph is a straight line and find the acceleration from its slope."],
    ["Measuring g", "Time a ball dropped from several heights (phone slow-motion video works). Use Δx = ½gt² to calculate g and compare with 9.8 m/s²."]
  ],
  resources: [
    ["The Physics Classroom: 1-D Kinematics", "https://www.physicsclassroom.com/class/1DKin", "Readable tutorial with graph practice and Concept Builders."],
    ["PhET: The Moving Man", "https://phet.colorado.edu/en/simulations/moving-man", "Simulation linking motion to position, velocity, and acceleration graphs."],
    ["OpenStax Physics (high school), Ch. 2–3", "https://openstax.org/details/books/physics", "Free textbook chapters on motion and acceleration."],
    ["IXL Physics D.1–D.4", "https://www.ixl.com/science/physics", "Skill practice; aim for SmartScore 80+."]
  ],
  applications: [
    "Stopping distance and speed limits: why doubling speed takes four times the braking distance.",
    "Sports timing: sprint splits and acceleration phases in the 100 m.",
    "Phone accelerometers and GPS, which calculate speed from changes in position.",
    "Drop-tower rides and how long riders are in free fall."
  ]
});
