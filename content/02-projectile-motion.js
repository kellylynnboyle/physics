module.exports = {
  id: "02-projectile-motion",
  num: 2,
  title: "Projectile Motion",
  short: "Projectile Motion",
  subtitle: "Physics | Semester 1, Unit 2 | Vector components, horizontal launches, angled launches, range",
  weeks: "Weeks 5-7",
  ngss: [
    ["HS-PS2-1", "Supports: a projectile is the case where the net force is gravity alone, so acceleration is 9.8 m/s² downward."],
    ["SEP: Developing and Using Models", "Model two-dimensional motion as two independent one-dimensional motions."],
    ["SEP: Using Mathematics and Computational Thinking", "Resolve vectors into components and solve for time, height, and range."],
  ],
  essentialQuestion: "Why does a projectile follow a curved path, and how can we predict where it will land?",
  targets: [
    "I can resolve a velocity vector into horizontal and vertical components.",
    "I can explain why horizontal and vertical motions are independent.",
    "I can solve horizontally launched projectile problems for time and range.",
    "I can solve angle-launched projectile problems for time, maximum height, and range.",
    "I can predict how launch angle and launch speed change the range.",
  ],
  concepts: [
    ["Vector components", "Any vector can be split into a horizontal part and a vertical part: vx = v·cos θ, vy = v·sin θ."],
    ["Projectile", "An object that moves through the air with gravity as the only force acting on it."],
    ["Independence of motion", "Horizontal motion (constant velocity) and vertical motion (free fall) do not affect each other. Time is the only thing they share."],
    ["Horizontal launch", "Starts with vy = 0. Fall time depends only on height; range = vx × time."],
    ["Angled launch", "The vertical component sets the time in the air and the maximum height; the horizontal component sets how far it travels in that time."],
    ["Range and angle", "On level ground, 45° gives the greatest range, and complementary angles (such as 30° and 60°) give equal ranges."],
  ],
  sections: [
    {
      title: "Vectors and Components",
      rows: [
        ["How do you find the horizontal and vertical components of a velocity?", [
          "With the angle θ measured from the horizontal: **vx = v·cos θ** and **vy = v·sin θ**.",
          "Worked example: 20 m/s at 30° above horizontal. vx = 20 × cos 30° = **17.3 m/s**. vy = 20 × sin 30° = **10.0 m/s**.",
          "Check: √(17.3² + 10.0²) = 20 m/s.",
        ]],
        ["How do you add two perpendicular vectors?", [
          "Magnitude from the Pythagorean theorem: R = √(x² + y²). Direction from θ = tan⁻¹(opposite / adjacent).",
          "Worked example: 3 m east then 4 m north. R = √(3² + 4²) = **5 m**; θ = tan⁻¹(4/3) = **53° north of east**.",
        ]],
        ["Why is your calculator's angle mode important?", [
          "Launch angles are in degrees. A calculator in radian mode gives wrong components. Test: sin 30 should show **0.5**.",
        ]],
      ],
      ixl: [["Physics C.2", "Decompose and compose two-dimensional vectors"], ["Physics C.3", "Add and subtract two-dimensional vectors: component form"], ["Precalculus Y.1", "Find the magnitude of a vector"], ["Precalculus Y.3", "Find the direction angle of a vector"], ["Precalculus Y.4", "Find the component form of a vector from its magnitude and direction angle"], ["Precalculus Y.9", "Find the magnitude and direction of a vector sum"]],
    },
    {
      title: "What Is a Projectile?",
      rows: [
        ["What makes an object a projectile?", [
          "A **projectile** is any object moving through the air with **gravity as the only force** on it (air resistance ignored).",
          "Examples: a kicked ball, a dropped package, a diver after leaving the board.",
        ]],
        ["What forces act on a ball after it leaves the thrower's hand?", [
          "Only **gravity**, pulling straight down. The push of the hand ends when contact ends.",
          "The ball keeps moving forward because of inertia, not because a forward force is still acting.",
        ]],
        ["Why is the path a curve (parabola)?", [
          "The projectile moves sideways at a steady rate while falling faster and faster. Steady horizontal motion plus accelerated vertical motion traces a **parabola**.",
        ]],
      ],
      ixl: [],
      ixlNote: "No IXL skill fits. Use The Physics Classroom Concept Builders in Vectors and Projectiles.",
    },
    {
      title: "Independence of Horizontal and Vertical Motion",
      rows: [
        ["What are the horizontal velocity and horizontal acceleration during flight?", [
          "Horizontal acceleration = **0**, because no horizontal force acts. So **vx stays constant** from launch to landing.",
        ]],
        ["What is the vertical acceleration during flight?", [
          "**9.8 m/s² downward** at every point: on the way up, at the top, and on the way down.",
          "vy changes by 9.8 m/s each second.",
        ]],
        ["A ball is dropped while another is fired horizontally from the same height. Which lands first?", [
          "They land **at the same time**. Both start with vy = 0 and fall the same height with the same acceleration.",
          "The fired ball's horizontal speed changes where it lands, not when.",
        ]],
        ["What single quantity is shared by the horizontal and vertical motions?", [
          "**Time.** Solve for time on one side (usually vertical), then use it on the other.",
        ]],
      ],
      ixl: [["Physics E.1", "Solve projectile motion problems given components of velocity"]],
    },
    {
      title: "Horizontally Launched Projectiles",
      rows: [
        ["How do you solve a horizontal-launch problem?", [
          "Make two lists. Horizontal: vx, x, a = 0. Vertical: viy = 0, y (height), a = 9.8 m/s².",
          "Step 1 (vertical): y = ½·g·t², so **t = √(2y / g)**.",
          "Step 2 (horizontal): **x = vx·t**.",
        ]],
        ["A ball rolls off a 1.25 m high table at 3.0 m/s. How far from the table does it land?", [
          "Vertical: t = √(2 × 1.25 / 9.8) = √0.255 = **0.505 s**.",
          "Horizontal: x = 3.0 × 0.505 = **1.5 m**.",
          "Sense check: about half a second to fall table height is reasonable.",
        ]],
        ["How fast is that ball moving when it lands?", [
          "vx is still 3.0 m/s. vy = g·t = 9.8 × 0.505 = 4.95 m/s.",
          "Speed = √(3.0² + 4.95²) = **5.8 m/s**.",
        ]],
        ["If the launch speed doubles, what happens to the time in the air and the range?", [
          "Time in the air is **unchanged** (same height). Range **doubles** (x = vx·t).",
        ]],
      ],
      ixl: [["Physics E.1", "Solve projectile motion problems given components of velocity"]],
    },
    {
      title: "Projectiles Launched at an Angle",
      rows: [
        ["How do you find time in the air, maximum height, and range?", [
          "First find components: vx = v·cos θ, vy = v·sin θ.",
          "Time to the top: **t = vy / g**. Total time (landing at launch height): **2·vy / g**.",
          "Maximum height: **H = vy² / (2g)**. Range: **R = vx × total time**.",
        ]],
        ["A ball is kicked at 20 m/s at 30°. Find its time in the air, maximum height, and range.", [
          "Components: vx = 17.3 m/s, vy = 10.0 m/s.",
          "Time to top = 10.0 / 9.8 = 1.02 s; total time = **2.04 s**.",
          "H = 10.0² / (2 × 9.8) = **5.1 m**.",
          "R = 17.3 × 2.04 = **35 m**.",
        ]],
        ["What is the velocity at the top of the path?", [
          "Only the vertical part is zero. The projectile is still moving horizontally at **vx** (17.3 m/s in the example).",
        ]],
        ["Which launch angle gives the greatest range on level ground?", [
          "**45°**. Complementary angles give the same range: 30° and 60°, or 20° and 70°.",
          "The steeper angle stays in the air longer and goes higher; the shallower one is faster horizontally.",
        ]],
      ],
      ixl: [["Physics E.2", "Solve projectile motion problems given magnitude and direction of velocity"]],
    },
    {
      title: "Labs and Measurement",
      rows: [
        ["In a marble-off-the-table lab, how do you predict the landing spot?", [
          "Measure the table height y and the marble's launch speed vx (time it across a known distance on the table).",
          "Calculate t = √(2y / g), then predict x = vx·t. Place a target there and test.",
          "**Independent variable:** launch speed. **Dependent variable:** horizontal range. **Controlled:** table height.",
        ]],
        ["What are the main sources of error in a projectile lab?", [
          "Reaction time when timing the marble, friction slowing it before the edge, and measuring range from the wrong point (measure from directly below the table edge).",
          "Percent error = |measured − predicted| / predicted × 100.",
        ]],
      ],
      ixl: [["Physics A.2", "Identify independent and dependent variables"], ["Physics B.4", "Calculations with significant figures"]],
    },
  ],
  tricks: [
    ["SOH CAH TOA", "sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent. Use it to split a launch velocity into vx and vy."],
    ["Two columns: x and y", "Write horizontal knowns in one column and vertical knowns in another. Never mix a vertical number into a horizontal equation."],
    ["Time is the bridge", "Time is the only value that appears in both columns. Find it in one and carry it to the other."],
    ["Horizontal: constant. Vertical: free fall.", "vx never changes; vy changes by 9.8 m/s every second."],
    ["45° for maximum range", "On level ground. Angles that add to 90° land in the same place."],
  ],
  summary: "A projectile is an object with gravity as its only force. Its motion is two simple motions happening at once: constant velocity horizontally, because nothing pushes it sideways, and free fall vertically, because gravity pulls it down at 9.8 m/s². The two do not affect each other and are linked only by time. To solve any projectile problem, split the launch velocity into components, use the vertical motion to find the time, and use that time with the constant horizontal velocity to find the range.",
  visuals: [
    ["trajectory", "Along the path the horizontal velocity arrow stays the same length while the vertical arrow shrinks, vanishes at the top, then grows downward.", "vx constant     vy changes by 9.8 m/s each second"],
    ["components", "A launch velocity is the hypotenuse of a right triangle whose legs are vx and vy.", "vx = v·cos θ     vy = v·sin θ"],
    ["drop_vs_launch", "A dropped ball and a horizontally launched ball are at the same height at every instant, so they land together.", "Fall time depends only on height: t = √(2y / g)"],
    ["range_angles", "Launched at the same speed, 30° and 60° land at the same spot and 45° goes farthest.", "Maximum range at 45° (level ground)"],
  ],
  noIxl: "The definition of a projectile, the independence of horizontal and vertical motion as a concept, and range versus angle (use physicsclassroom.com Concept Builders: Vectors and Projectiles).",
  resources: [
    ["The Physics Classroom: Vectors and Projectiles tutorial", "https://www.physicsclassroom.com/class/vectors", "Lessons on components, horizontal launches, and angled launches."],
    ["The Physics Classroom: Concept Builders", "https://www.physicsclassroom.com/Concept-Builders", "Use the Vectors and Projectiles group."],
    ["PhET: Projectile Motion", "https://phet.colorado.edu/en/simulations/projectile-motion", "Fire a cannon at different angles and speeds; show velocity components live."],
    ["OpenStax Physics (high school), Ch. 5", "https://openstax.org/details/books/physics", "Free textbook: Motion in Two Dimensions."],
    ["Khan Academy: High School Physics", "https://www.khanacademy.org/science/highschool-physics", "Video walkthroughs of two-dimensional projectile problems."],
  ],
  practice: [
    ["A soccer ball is kicked at 25 m/s at 37° above the ground. Find vx and vy.", "vx = 25 cos 37° = 20 m/s; vy = 25 sin 37° = 15 m/s."],
    ["A stone is thrown horizontally at 8.0 m/s from a 19.6 m cliff. How long is it in the air and how far from the base does it land?", "t = √(2 × 19.6 / 9.8) = 2.0 s; x = 8.0 × 2.0 = 16 m."],
    ["A ball rolls off a 0.80 m table and lands 1.2 m from its base. How fast was it rolling?", "t = √(2 × 0.80 / 9.8) = 0.404 s; vx = 1.2 / 0.404 = 3.0 m/s."],
    ["A ball is launched at 30 m/s at 60°. Find the time in the air, the maximum height, and the range on level ground.", "vy = 26.0 m/s, vx = 15.0 m/s; time = 2(26.0)/9.8 = 5.3 s; H = 26.0² / 19.6 = 34 m; R = 15.0 × 5.3 = 80 m."],
    ["The same ball is launched at 30 m/s at 30° instead. Compare its range with the 60° launch.", "vy = 15.0 m/s, vx = 26.0 m/s; time = 3.06 s; R = 26.0 × 3.06 = 80 m. Same range, lower and quicker flight."],
    ["A plane flying level at 50 m/s drops a supply crate from 490 m. How far ahead of the target must it release?", "t = √(2 × 490 / 9.8) = 10 s; x = 50 × 10 = 500 m."],
  ],
  applications: [
    "Sports: basketball arc, soccer free kicks, long jump takeoff angle, golf launch monitors.",
    "Firefighting: aiming a hose stream to reach a window.",
    "Supply drops and water-bombing aircraft releasing before the target.",
    "Fountain and sprinkler design.",
    "Video-game and animation physics engines.",
  ],
  objectives: [
    ["P1", "Resolve a vector into components and recombine components into a resultant.", "Uses sine and cosine correctly and reports magnitude and direction."],
    ["P2", "Explain the independence of horizontal and vertical motion.", "States that vx is constant, a is 9.8 m/s² downward throughout, and justifies with the forces acting."],
    ["P3", "Solve horizontally launched projectile problems.", "Finds time from height, then range from vx, with organized x and y lists."],
    ["P4", "Solve angle-launched projectile problems.", "Finds components, total time, maximum height, and range for a level-ground launch."],
    ["P5", "Predict the effect of launch angle and speed on the path.", "Correctly ranks ranges and flight times for different angles and explains the 45° result."],
    ["P6", "Predict and test a landing point in a lab.", "Prediction lands within 10% of the measured range and error sources are identified."],
  ],
  quiz: [
    {
      q: "A bullet is fired horizontally from a rifle. At the same instant, a second bullet is dropped from the same height. Ignore air resistance. Which hits the level ground first?",
      choices: ["The dropped bullet", "The fired bullet", "They hit at the same time", "It depends on the fired bullet's speed"],
      answer: 2,
      why: "Both start with zero vertical velocity and fall the same height with the same acceleration. Horizontal speed does not change the fall time.",
      trap: "Thinking horizontal speed keeps an object in the air longer.",
    },
    {
      q: "A ball is kicked at an angle. At the highest point of its path, what is its velocity?",
      choices: ["Zero", "Equal to its launch velocity", "Horizontal, equal to vx", "Straight down at 9.8 m/s"],
      answer: 2,
      why: "Only the vertical component is zero at the top. The horizontal component never changes, so the ball is still moving sideways at vx.",
      trap: "Carrying over \"velocity is zero at the top\" from a straight-up toss.",
    },
    {
      q: "At the highest point of a projectile's path, what is its acceleration?",
      choices: ["Zero", "9.8 m/s² downward", "9.8 m/s² upward", "9.8 m/s² in the direction of motion"],
      answer: 1,
      why: "Gravity is the only force at every point of the flight, so the acceleration is 9.8 m/s² downward the whole time.",
      trap: "Thinking acceleration vanishes where the vertical velocity is zero.",
    },
    {
      q: "Ignoring air resistance, what happens to a projectile's horizontal velocity during flight?",
      choices: ["It decreases steadily", "It increases steadily", "It stays constant", "It is zero at the top"],
      answer: 2,
      why: "No horizontal force acts, so there is no horizontal acceleration and vx stays the same from launch to landing.",
      trap: "Believing a moving object naturally slows down without a force.",
    },
    {
      q: "A plane flying level at constant velocity drops a package. Ignoring air resistance, where is the plane when the package hits the ground?",
      choices: ["Far ahead of the package", "Directly above the package", "Behind the package", "It depends on the mass of the package"],
      answer: 1,
      why: "The package keeps the plane's horizontal velocity after release, so it stays directly below the plane as it falls.",
      trap: "Thinking the package loses its forward motion when released.",
    },
    {
      q: "After a baseball leaves the pitcher's hand, which forces act on it? (Ignore air resistance.)",
      choices: ["Gravity only", "Gravity and the force of the throw", "The force of the throw only", "No forces act on it"],
      answer: 0,
      why: "The hand's force ends when contact ends. The ball keeps moving forward because of inertia, with gravity as the only force.",
      trap: "Believing a forward force travels with the ball.",
    },
    {
      q: "A marble rolls off a table at speed v and lands a distance x from the table. If it rolls off at 2v, how long is it in the air compared with before?",
      choices: ["Half as long", "The same time", "Twice as long", "Four times as long"],
      answer: 1,
      why: "Fall time depends only on the table height: t = √(2y / g). The faster marble lands twice as far away in the same time.",
      trap: "Linking time in the air to horizontal speed.",
    },
    {
      q: "Two balls are launched at the same speed on level ground, one at 30° and one at 60°. How do their ranges compare?",
      choices: ["The 30° ball goes farther", "The 60° ball goes farther", "They land at the same distance", "Neither lands"],
      answer: 2,
      why: "Complementary angles give the same range. The 60° ball is in the air longer but has a smaller horizontal velocity, and the two effects cancel.",
      trap: "Assuming a higher or a flatter launch always goes farther.",
    },
    {
      q: "A ball rolls horizontally off a 4.9 m high ledge at 5.0 m/s. How far from the base does it land? (g = 9.8 m/s²)",
      choices: ["2.5 m", "4.9 m", "5.0 m", "24.5 m"],
      answer: 2,
      why: "Vertical: t = √(2 × 4.9 / 9.8) = 1.0 s. Horizontal: x = 5.0 × 1.0 = 5.0 m.",
      trap: "Mixing the height into the horizontal equation.",
    },
    {
      q: "A ball is launched at 20 m/s at 30° above the horizontal. What is the vertical component of its velocity?",
      choices: ["10 m/s", "17.3 m/s", "20 m/s", "30 m/s"],
      answer: 0,
      why: "vy = v·sin θ = 20 × sin 30° = 10 m/s. The 17.3 m/s value is the horizontal component, 20 × cos 30°.",
      trap: "Swapping sine and cosine.",
    },
  ],
};
