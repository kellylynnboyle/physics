module.exports = {
  id: "projectile",
  num: 2,
  dir: "02-projectile-motion",
  title: "Projectile Motion",
  subtitle: "Physics | Motion in Two Dimensions | vectors, components, horizontal launches, angled launches",
  weeks: "Weeks 5–7",
  ngss: [
    { code: "HS-PS2-1", text: "Analyze data to support the claim that Newton's second law describes the relationship among net force, mass, and acceleration. A projectile is the case where gravity is the only force." },
    { code: "SEP 2 / SEP 5", text: "Developing and using models; using mathematics and computational thinking (splitting motion into independent x and y parts)." },
  ],
  essentialQuestion: "How can we predict where a thrown or launched object will land?",
  targets: [
    "I can break a velocity vector into horizontal and vertical components.",
    "I can explain why the horizontal and vertical motions of a projectile are independent.",
    "I can solve horizontal-launch problems for time of flight and range.",
    "I can solve angled-launch problems for time, maximum height, and range.",
    "I can describe the velocity and acceleration of a projectile at any point on its path.",
  ],
  keyConcepts: [
    ["Vector components", "Any vector can be split into a horizontal (x) part and a vertical (y) part: v_x = v·cos θ, v_y = v·sin θ."],
    ["Projectile", "An object moving through the air with gravity as the only force acting on it."],
    ["Independence of motion", "Horizontal and vertical motions do not affect each other. Time is the only quantity they share."],
    ["Horizontal motion", "No horizontal force, so a_x = 0 and v_x stays constant."],
    ["Vertical motion", "Free fall: a_y = 9.8 m/s² downward the whole flight."],
    ["Trajectory", "The curved path of a projectile, a parabola."],
    ["Range and maximum height", "Range is the horizontal distance covered. Maximum height is where v_y = 0."],
  ],
  sections: [
    {
      title: "Vectors and Components",
      cues: [
        { q: "How do you find the horizontal and vertical components of a velocity?", notes: [
          "For a velocity v at angle θ above the horizontal:",
          "**v_x = v·cos θ** (horizontal) and **v_y = v·sin θ** (vertical).",
          "Worked example: v = 20 m/s at 30°. v_x = 20 × cos 30° = **17.3 m/s**. v_y = 20 × sin 30° = **10.0 m/s**.",
          "Sense check: v_x² + v_y² = 300 + 100 = 400 = 20². The components rebuild the original vector.",
        ]},
        { q: "How do you add two vectors that are at right angles?", notes: [
          "Draw them **head to tail**. The **resultant** runs from the tail of the first to the head of the second.",
          "Magnitude from the Pythagorean theorem: R = √(A² + B²). Direction from tan θ = opposite ÷ adjacent.",
          "Worked example: 3 m east then 4 m north gives R = √(9 + 16) = **5 m**, at tan⁻¹(4 ÷ 3) = **53° north of east**.",
        ]},
      ],
      ixl: [["Physics C.2", "Decompose and compose two-dimensional vectors"], ["Physics C.3", "Add and subtract two-dimensional vectors: component form"], ["Precalculus Y.1", "Find the magnitude of a vector"], ["Precalculus Y.3", "Find the direction angle of a vector"], ["Precalculus Y.4", "Find the component form of a vector from its magnitude and direction angle"], ["Precalculus Y.5", "Graph a resultant vector using the triangle method"], ["Precalculus Y.9", "Find the magnitude and direction of a vector sum"]],
    },
    {
      title: "What Makes a Projectile",
      cues: [
        { q: "What is the only force acting on a projectile?", notes: [
          "**Gravity.** Once the object leaves the hand, bat, or launcher, nothing pushes it forward.",
          "It keeps moving forward because of **inertia**, not because of a force.",
          "We ignore air resistance in this unit.",
        ]},
        { q: "Why are the horizontal and vertical motions independent?", notes: [
          "Gravity pulls straight down, so it changes only the vertical velocity.",
          "Nothing acts horizontally, so the horizontal velocity never changes.",
          "The two motions share only the **time** in the air.",
        ]},
        { q: "What stays constant and what changes during the flight?", notes: [
          "**Constant:** horizontal velocity v_x, and acceleration (9.8 m/s² down).",
          "**Changing:** vertical velocity v_y, which changes by 9.8 m/s every second.",
          "Horizontal: a_x = 0, x = v_x·t. Vertical: a_y = −9.8 m/s², use the kinematic equations.",
        ]},
      ],
      ixlNote: "No IXL skill covers these ideas on their own. Use the Concept Builders in the Vectors and Projectiles section of physicsclassroom.com.",
      ixl: [],
    },
    {
      title: "Horizontally Launched Projectiles",
      cues: [
        { q: "What decides how long a horizontally launched object stays in the air?", notes: [
          "Only the **height** it falls from. The launch speed does not matter.",
          "Initial vertical velocity is 0, so h = ½·g·t² and **t = √(2h ÷ g)**.",
          "A ball rolled off a table and a ball dropped from the same height at the same moment land **together**.",
        ]},
        { q: "How far from the base does a ball land if it leaves a 4.9 m high ledge at 3 m/s?", notes: [
          "Vertical first (to get time): h = ½·g·t² → 4.9 = ½ × 9.8 × t² → t² = 1.0 → **t = 1.0 s**.",
          "Horizontal: x = v_x·t = 3 × 1.0 = **3.0 m**.",
          "Sense check: launching at 6 m/s would keep t = 1.0 s and double the range to 6.0 m.",
        ]},
        { q: "How do you find the speed of the ball just before it lands?", notes: [
          "Find each component, then combine them.",
          "v_x = 3 m/s (unchanged). v_y = g·t = 9.8 × 1.0 = 9.8 m/s downward.",
          "Speed = √(3² + 9.8²) = √105 = **10.2 m/s**.",
        ]},
      ],
      ixl: [["Physics E.1", "Solve projectile motion problems given components of velocity"]],
    },
    {
      title: "Projectiles Launched at an Angle",
      cues: [
        { q: "What are the velocity and acceleration at the top of the path?", notes: [
          "Vertical velocity v_y = 0 at the top.",
          "The projectile is still moving: its velocity equals **v_x**, pointing horizontally.",
          "Acceleration is still **9.8 m/s² downward**.",
        ]},
        { q: "How do you find time of flight, maximum height, and range?", notes: [
          "1. Split the launch velocity into v_x and v_y.",
          "2. Time to the top: t_up = v_y ÷ g. Total time (same landing height) = 2 × t_up.",
          "3. Maximum height: h = v_y² ÷ (2g).",
          "4. Range: x = v_x × total time.",
        ]},
        { q: "A ball is kicked at 19.6 m/s at 30°. How long is it in the air and how far does it go?", notes: [
          "v_x = 19.6 × cos 30° = 17.0 m/s. v_y = 19.6 × sin 30° = 9.8 m/s.",
          "t_up = 9.8 ÷ 9.8 = 1.0 s, so total time = **2.0 s**.",
          "Maximum height = 9.8² ÷ (2 × 9.8) = **4.9 m**. Range = 17.0 × 2.0 = **33.9 m**.",
        ]},
        { q: "Which launch angle gives the greatest range on level ground?", notes: [
          "**45°** gives the greatest range (no air resistance, same launch and landing height).",
          "Angles that add to 90° give the **same range**: 30° and 60°, 20° and 70°.",
          "The steeper angle of each pair goes higher and stays in the air longer.",
        ]},
      ],
      ixl: [["Physics E.2", "Solve projectile motion problems given magnitude and direction of velocity"]],
    },
    {
      title: "Labs and Measurement",
      cues: [
        { q: "In a marble-launch lab, how do you predict where the marble will land?", notes: [
          "Measure the launch speed v_x on the table (distance ÷ time on a level section).",
          "Measure the table height h and calculate t = √(2h ÷ g).",
          "Predicted range = v_x × t. Place a target there, then test.",
        ]},
        { q: "Which variables are independent, dependent, and controlled in a launch-angle lab?", notes: [
          "**Independent**: launch angle. **Dependent**: range.",
          "**Controlled**: launch speed, launch height, the projectile itself.",
          "Percent error = |measured − predicted| ÷ predicted × 100%.",
        ]},
      ],
      ixl: [["Physics A.2", "Identify independent and dependent variables"], ["Physics A.3", "Identify the experimental question"], ["Physics B.4", "Calculations with significant figures"]],
    },
  ],
  mnemonics: [
    ["SOH CAH TOA", "sin = opposite ÷ hypotenuse, cos = adjacent ÷ hypotenuse, tan = opposite ÷ adjacent.", "Finding components or an angle."],
    ["Two columns: x | y", "Write horizontal knowns in one column and vertical knowns in another. Time is the only thing that crosses over.", "Setting up every projectile problem."],
    ["Vertical gives the time", "Use the vertical column to find time, then use that time in the horizontal column.", "Deciding where to start."],
    ["Head to tail", "Place the tail of the next vector at the head of the one before; the resultant goes from start to finish.", "Adding vectors on paper."],
    ["45 for far; pairs add to 90", "45° gives maximum range; complementary angles share a range.", "Launch-angle questions."],
  ],
  summary: "A projectile is any object moving through the air with gravity as the only force. The key idea is that horizontal and vertical motion are independent. Horizontally there is no force, so the velocity is constant and x = v_x·t. Vertically the object is in free fall, accelerating downward at 9.8 m/s² the whole time. Time is the only link between the two. To solve a problem, split the launch velocity into components, use the vertical motion to find the time, then use that time to find the horizontal distance. At the top of an angled launch the vertical velocity is zero, but the object still moves horizontally and still accelerates downward.",
  visuals: [
    { file: "proj-components.png", caption: "A launch velocity split into its horizontal and vertical components.", rule: "v_x = v·cos θ;  v_y = v·sin θ" },
    { file: "proj-trajectory.png", caption: "Along the path the horizontal velocity arrow stays the same length while the vertical arrow shrinks, vanishes at the top, then grows downward.", rule: "v_x constant;  v_y changes by 9.8 m/s each second" },
    { file: "proj-dropvslaunch.png", caption: "A dropped ball and a horizontally launched ball fall the same vertical distance in the same time and land together.", rule: "t = √(2h ÷ g) for both" },
    { file: "proj-angles.png", caption: "Same launch speed at 30°, 45°, and 60°: 45° goes farthest; 30° and 60° land at the same spot.", rule: "maximum range at 45°" },
  ],
  quiz: [
    { q: "A ball is dropped from a table at the same instant another ball is launched horizontally from the same height. Ignoring air resistance, which hits the floor first?", choices: ["The dropped ball", "The launched ball", "They hit at the same time", "It depends on the launch speed"], answer: 2, misconception: "Moving forward makes an object fall more slowly.", why: "Both start with zero vertical velocity and both accelerate downward at 9.8 m/s². Horizontal motion has no effect on the vertical motion." },
    { q: "A ball is thrown at an angle. At the highest point of its path, what is its velocity?", choices: ["Zero", "Equal to its horizontal velocity, pointing horizontally", "9.8 m/s downward", "Equal to its launch velocity"], answer: 1, misconception: "The projectile stops at the top.", why: "Only the vertical part of the velocity is zero at the top. The horizontal part never changes, so the ball is still moving sideways." },
    { q: "For the same thrown ball, what is its acceleration at the highest point?", choices: ["Zero", "9.8 m/s² downward", "9.8 m/s² upward", "It points along the path"], answer: 1, misconception: "Acceleration is zero where vertical velocity is zero.", why: "Gravity is the only force during the whole flight, so the acceleration is 9.8 m/s² downward at every point, including the top." },
    { q: "Ignoring air resistance, what happens to a projectile's horizontal velocity during its flight?", choices: ["It decreases steadily", "It increases as the object falls", "It stays constant", "It becomes zero at the top"], answer: 2, misconception: "A forward force runs out, so the object slows down horizontally.", why: "No horizontal force acts on a projectile, so by Newton's first law the horizontal velocity does not change." },
    { q: "A ball leaves a 4.9 m high ledge moving horizontally at 3 m/s. How far from the base of the ledge does it land?", choices: ["1.5 m", "3.0 m", "4.9 m", "14.7 m"], answer: 1, misconception: "Using the height as a horizontal distance, or mixing x and y values.", why: "Vertical: 4.9 = ½(9.8)t², so t = 1.0 s. Horizontal: x = 3 m/s × 1.0 s = 3.0 m." },
    { q: "A ball rolls off a cliff. If it is launched twice as fast horizontally, what changes?", choices: ["It stays in the air twice as long", "It lands twice as far away, in the same time", "It lands at the same spot, sooner", "Both time and range double"], answer: 1, misconception: "A faster launch keeps the object in the air longer.", why: "Time in the air depends only on the height. With the same time and double the horizontal speed, the range doubles." },
    { q: "On level ground with the same launch speed, which pair of angles gives the same range?", choices: ["30° and 45°", "30° and 60°", "45° and 60°", "No two angles give the same range"], answer: 1, misconception: "A steeper angle always sends the object farther (or always shorter).", why: "Angles that add to 90° give the same range. 45° gives the maximum." },
    { q: "A plane flying level at constant velocity drops a package. Ignoring air resistance, where is the plane when the package lands?", choices: ["Far ahead of the package", "Directly above the package", "Behind the package", "It depends on the mass of the package"], answer: 1, misconception: "A dropped object falls straight down and is left behind.", why: "The package keeps the plane's horizontal velocity while it falls, so it stays directly below the plane." },
    { q: "A ball is kicked at 20 m/s at 30° above the ground. What is its initial vertical velocity?", choices: ["20 m/s", "17.3 m/s", "10 m/s", "0 m/s"], answer: 2, misconception: "Swapping sine and cosine, or using the full speed for the vertical motion.", why: "v_y = v·sin θ = 20 × sin 30° = 10 m/s. The 17.3 m/s value is the horizontal component." },
  ],
  practice: [
    ["Foundation", "A ball is launched at 20 m/s at 30° above horizontal. Find v_x and v_y.", "v_x = 20 cos 30° = 17.3 m/s. v_y = 20 sin 30° = 10.0 m/s."],
    ["Foundation", "A marble rolls off a 1.2 m high table at 2.0 m/s. How long is it in the air and how far from the table does it land?", "t = √(2 × 1.2 ÷ 9.8) = 0.49 s. x = 2.0 × 0.49 = 0.99 m."],
    ["Proficient", "A stone is thrown horizontally at 15 m/s from a 44.1 m cliff. Find the time, the range, and the impact speed.", "t = √(2 × 44.1 ÷ 9.8) = 3.0 s. x = 45 m. v_y = 29.4 m/s, so speed = √(15² + 29.4²) = 33.0 m/s."],
    ["Proficient", "A plane flying level at 60 m/s at an altitude of 490 m drops a package. How far ahead of the drop point does it land?", "t = √(2 × 490 ÷ 9.8) = 10 s. x = 60 × 10 = 600 m."],
    ["Challenge", "A ball is launched at 25 m/s at 53° (use sin 53° = 0.80, cos 53° = 0.60). Find the total time, maximum height, and range.", "v_x = 15 m/s, v_y = 20 m/s. t = 2 × 20 ÷ 9.8 = 4.08 s. h = 20² ÷ 19.6 = 20.4 m. Range = 15 × 4.08 = 61.2 m."],
    ["Challenge", "Show that 30° and 60° give the same range for a launch speed of 20 m/s.", "30°: v_x = 17.3, v_y = 10, t = 2.04 s, range = 35.3 m. 60°: v_x = 10, v_y = 17.3, t = 3.53 s, range = 35.3 m."],
  ],
  resources: [
    ["The Physics Classroom: Vectors and Projectiles", "https://www.physicsclassroom.com/class/vectors", "Lessons on vector addition, components, and both kinds of projectile problem."],
    ["PhET: Projectile Motion", "https://phet.colorado.edu/en/simulations/projectile-motion", "Fire a cannon at different angles and speeds; turn the velocity and acceleration vectors on."],
    ["Khan Academy: High school physics", "https://www.khanacademy.org/science/highschool-physics", "Videos and practice on two-dimensional motion."],
    ["OpenStax Physics (high school)", "https://openstax.org/details/books/physics", "Free textbook; see the chapter on motion in two dimensions."],
  ],
  realWorld: [
    "Basketball free throws and soccer free kicks: launch angle and speed decide where the ball comes down.",
    "Long jump and shot put, where athletes trade launch speed against launch angle.",
    "Water from a fountain or hose, which traces a visible parabola.",
    "Airdrops of supplies, which must be released well before the plane is over the target.",
  ],
  criteria: [
    ["Resolve and add vectors", "Cannot split a vector into components", "Finds components but swaps sine and cosine or drops direction", "Finds components and resultants with correct trig and direction", "Adds several vectors by components and explains the result"],
    ["Explain projectile motion", "Believes a forward force acts during flight", "States that gravity acts but cannot say what is constant", "Explains constant v_x, changing v_y, and constant downward acceleration", "Predicts and justifies outcomes of unfamiliar scenarios (drop vs. launch, plane drop)"],
    ["Solve projectile problems", "Mixes horizontal and vertical quantities", "Separates x and y but cannot link them by time", "Solves horizontal and angled launches for time, height, and range", "Solves launches that start and end at different heights"],
  ],
};
