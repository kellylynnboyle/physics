// Unit 2: Projectile Motion.
module.exports = {
  num: 2,
  slug: "02-projectile-motion",
  title: "Projectile Motion",
  short: "Motion in Two Dimensions",
  subtitle: "Physics | Semester 1, Unit 2 | Vectors, components, horizontal and angled launches",
  pacing: "Weeks 5–7",
  ngss: ["HS-PS2-1 (foundation)", "SEP: Using Mathematics and Computational Thinking", "SEP: Developing and Using Models", "CCC: Cause and Effect"],
  essentialQuestion: "Why does a thrown object follow a curved path, and how can we predict where it lands?",
  targets: [
    "I can break a velocity vector into horizontal and vertical components and combine them again.",
    "I can explain why the horizontal and vertical motions of a projectile are independent.",
    "I can solve problems for a projectile launched horizontally.",
    "I can find the time of flight, maximum height, and range of a projectile launched at an angle.",
  ],
  concepts: [
    "Vector components (v_x = v cos θ, v_y = v sin θ) and vector addition",
    "A projectile has only one force on it: gravity",
    "Horizontal motion: constant velocity. Vertical motion: free fall",
    "Time is the only quantity the two directions share",
    "Horizontal launches: time of fall depends only on height",
    "Angled launches: time of flight, maximum height, range, and the effect of launch angle",
  ],
  sections: [
    {
      title: "1. Vectors and Components",
      ixl: [
        ["Physics C.2", "Decompose and compose two-dimensional vectors"],
        ["Physics C.3", "Add and subtract two-dimensional vectors: component form"],
        ["Precalculus Y.1", "Find the magnitude of a vector"],
        ["Precalculus Y.2", "Find the component form of a vector"],
        ["Precalculus Y.3", "Find the direction angle of a vector"],
        ["Precalculus Y.4", "Find the component form of a vector from its magnitude and direction angle"],
        ["Precalculus Y.5", "Graph a resultant vector using the triangle method"],
        ["Precalculus Y.7", "Add vectors"],
        ["Precalculus Y.9", "Find the magnitude and direction of a vector sum"],
      ],
      rows: [
        {
          cue: "How do you find the horizontal and vertical components of a velocity?",
          notes: [
            "With the angle θ measured from the horizontal: **v_x = v cos θ** and **v_y = v sin θ**.",
            "Worked example: 20 m/s at 30° above horizontal. v_x = 20 cos 30° = **17.3 m/s**. v_y = 20 sin 30° = **10.0 m/s**.",
            "Check: the components are the legs of a right triangle and v is the hypotenuse, so each leg must be smaller than v.",
          ],
        },
        {
          cue: "How do you combine two components into one vector?",
          notes: [
            "Magnitude: **v = √(v_x² + v_y²)** (Pythagorean theorem).",
            "Direction: **θ = tan⁻¹(v_y / v_x)**.",
            "Worked example: v_x = 4 m/s and v_y = 3 m/s. v = √(16 + 9) = **5 m/s** at tan⁻¹(3/4) = **36.9°** above horizontal.",
          ],
        },
        {
          cue: "How do you add two vectors with a diagram?",
          notes: [
            "Draw them **head-to-tail**. The **resultant** runs from the tail of the first to the head of the last.",
            "Vectors at right angles: use the Pythagorean theorem. Vectors along one line: add or subtract.",
          ],
        },
      ],
    },
    {
      title: "2. What Makes a Projectile",
      ixl: [],
      ixlNote: "No IXL skill covers the concept of independent horizontal and vertical motion. Use the Physics Classroom Vectors and Projectiles Concept Builders.",
      rows: [
        {
          cue: "Which forces act on a projectile after it is launched?",
          notes: [
            "**Only gravity** (air resistance ignored). The push of the throw ends when the object leaves the hand.",
            "A **projectile** is any object moving through the air with gravity as the only force on it.",
          ],
        },
        {
          cue: "Why does a projectile's horizontal velocity stay constant?",
          notes: [
            "No horizontal force means no horizontal acceleration: **a_x = 0**, so v_x never changes.",
            "Vertically, gravity gives **a_y = 9.8 m/s² downward**, so v_y changes by 9.8 m/s every second.",
            "The two motions together trace a **parabola**.",
          ],
        },
        {
          cue: "What is the one thing the horizontal and vertical motions share?",
          notes: [
            "**Time.** The two directions are independent, but both last the same time in the air.",
            "A ball dropped and a ball launched horizontally from the same height **land at the same time**.",
          ],
        },
      ],
    },
    {
      title: "3. Projectiles Launched Horizontally",
      ixl: [["Physics E.1", "Solve projectile motion problems given components of velocity"]],
      rows: [
        {
          cue: "What are the starting velocity components for a horizontal launch?",
          notes: ["**v_ix = launch speed** and **v_iy = 0**. Vertically it starts like a dropped object."],
        },
        {
          cue: "What decides how long a horizontally launched object is in the air?",
          notes: [
            "**Only the height.** From Δy = ½gt²: **t = √(2h / g)**.",
            "Launch speed changes how far it lands, not how long it falls.",
          ],
        },
        {
          cue: "How do you find where a ball lands after rolling off a table?",
          notes: [
            "Worked example: a ball rolls off a 1.25 m high table at 3.0 m/s.",
            "Vertical (find time): t = √(2 × 1.25 ÷ 9.8) = **0.505 s**.",
            "Horizontal (find range): Δx = v_x t = 3.0 × 0.505 = **1.52 m** from the table.",
            "Landing speed: v_y = 9.8 × 0.505 = 4.95 m/s, so v = √(3.0² + 4.95²) = **5.79 m/s**.",
          ],
        },
      ],
    },
    {
      title: "4. Projectiles Launched at an Angle",
      ixl: [["Physics E.2", "Solve projectile motion problems given magnitude and direction of velocity"]],
      rows: [
        {
          cue: "What are the velocity and acceleration at the top of the path?",
          notes: [
            "**v_y = 0** at the top, but the object is still moving sideways at **v_x**. Its speed is not zero.",
            "Acceleration is still **9.8 m/s² downward**, as everywhere on the path.",
          ],
        },
        {
          cue: "How do you find time of flight, maximum height, and range on level ground?",
          notes: [
            "Time to the top: **t_up = v_iy / g**. Total time = 2 × t_up.",
            "Maximum height: **h = v_iy² / (2g)**.",
            "Range: **R = v_x × total time**.",
            "Worked example: 20 m/s at 30°. v_x = 17.3 m/s, v_iy = 10.0 m/s. t_up = 10.0 ÷ 9.8 = 1.02 s, total = **2.04 s**. h = 10.0² ÷ 19.6 = **5.10 m**. R = 17.3 × 2.04 = **35.3 m**.",
          ],
        },
        {
          cue: "Which launch angle gives the greatest range?",
          notes: [
            "**45°** on level ground with no air resistance.",
            "Angles that add to 90° (such as 30° and 60°) give the **same range**. The steeper one goes higher and stays up longer.",
          ],
        },
      ],
    },
    {
      title: "5. Labs and Measurement",
      ixl: [["Physics A.2", "Identify independent and dependent variables"], ["Physics A.3", "Identify the experimental question"]],
      rows: [
        {
          cue: "How do you predict where a ball rolling off a table will land?",
          notes: [
            "**Horizontal launch lab:** measure the launch speed v on the table (distance ÷ time, or a photogate) and the table height h.",
            "Predict the range with **R = v √(2h / g)**, place a target, then test.",
            "**Independent variable:** launch speed (or table height). **Dependent variable:** range.",
          ],
        },
        {
          cue: "How do you test the effect of launch angle?",
          notes: [
            "**Launcher lab or PhET Projectile Motion:** change the angle, keep launch speed the same, measure range.",
            "**Independent variable:** angle. **Dependent variable:** range. **Controlled:** launch speed, launch height.",
          ],
        },
        {
          cue: "Why might the ball miss the predicted spot?",
          notes: [
            "Air resistance, a table that is not level, measuring height to the wrong point on the ball, and timing error in the launch speed.",
          ],
        },
      ],
    },
  ],
  noIxl: "Independence of horizontal and vertical motion, trajectory diagrams, and the effect of launch angle: use the Physics Classroom Vectors and Projectiles Concept Builders and the PhET Projectile Motion simulation.",
  mnemonics: [
    { trick: "SOH CAH TOA", when: "Finding components: the side next to the angle uses cosine, the side across from it uses sine." },
    { trick: "Horizontal: constant velocity. Vertical: free fall.", when: "Setting up any projectile problem. Make two columns, x and y." },
    { trick: "Time is the link", when: "Solve for time in one direction, then use it in the other." },
    { trick: "At the top, v_y = 0 (not v, and not a)", when: "Maximum-height questions." },
    { trick: "45° for maximum range; angles that add to 90° land in the same place", when: "Comparing launch angles on level ground." },
  ],
  summary:
    "A projectile moves in two directions at once, and the two motions do not affect each other. Horizontally nothing pushes on it, so it keeps a constant velocity. Vertically gravity makes it accelerate at 9.8 m/s² downward, exactly like a dropped object. Time is the only thing the two directions share. To solve a problem, split the launch velocity into components, use the vertical motion to find the time, and use that time in the horizontal motion to find the range.",
  visuals: [
    { img: "components.png", caption: "A velocity vector is the hypotenuse of a right triangle whose legs are its components.", rule: "v_x = v cos θ,  v_y = v sin θ" },
    { img: "trajectory.png", caption: "Along the path the horizontal velocity arrow stays the same length while the vertical arrow shrinks, reaches zero at the top, then grows downward.", rule: "a_x = 0,  a_y = 9.8 m/s² down" },
    { img: "drop-vs-launch.png", caption: "A dropped ball and a horizontally launched ball are at the same height at every instant, so they land together.", rule: "t = √(2h / g)" },
    { img: "vx-vy-graphs.png", caption: "Velocity-time graphs for a projectile: v_x is a flat line, v_y is a straight line sloping down at 9.8 m/s².", rule: "v_y = v_iy − gt" },
  ],
  quiz: [
    {
      q: "A bullet is fired horizontally from a rifle at the same instant an identical bullet is dropped from the same height. Ignoring air resistance, which hits the level ground first?",
      choices: ["They hit at the same time", "The dropped bullet", "The fired bullet", "It depends on the speed of the fired bullet"],
      answer: 0,
      misconception: "Thinking horizontal speed changes the fall time",
      why: "Both start with zero vertical velocity and fall the same height with the same acceleration. Horizontal motion does not affect vertical motion, so the fall times are equal.",
    },
    {
      q: "A ball is kicked at an angle. At the highest point of its path, its speed is:",
      choices: ["Equal to its horizontal velocity component", "Zero", "Equal to its launch speed", "9.8 m/s"],
      answer: 0,
      misconception: "Thinking the projectile stops at the top",
      why: "Only the vertical component is zero at the top. The ball is still moving sideways at v_x, which never changes.",
    },
    {
      q: "For the same kicked ball, what is its acceleration at the highest point?",
      choices: ["9.8 m/s² downward", "Zero", "9.8 m/s² upward", "It points along the path"],
      answer: 0,
      misconception: "Thinking acceleration is zero at the top",
      why: "Gravity is the only force for the whole flight, so the acceleration is 9.8 m/s² downward at every point, including the top.",
    },
    {
      q: "After a ball leaves a thrower's hand and is moving up and forward (no air resistance), which forces act on it?",
      choices: ["Gravity only", "Gravity and the force of the throw", "The force of the throw only", "Gravity and a forward force that fades"],
      answer: 0,
      misconception: "Believing a 'force of the throw' travels with the object",
      why: "The hand stops pushing when the ball leaves it. The ball keeps moving forward because of inertia, not because of a force. Gravity is the only force.",
    },
    {
      q: "Two balls roll off the same table. Ball A leaves at 3 m/s and ball B at 6 m/s. Compare their times in the air.",
      choices: ["The times are equal", "B is in the air twice as long", "A is in the air twice as long", "B is in the air four times as long"],
      answer: 0,
      misconception: "Linking launch speed to time of fall",
      why: "Time of fall depends only on the height: t = √(2h/g). Ball B lands twice as far away, but both take the same time to fall.",
    },
    {
      q: "A ball is launched at 20 m/s at 30° above the horizontal. What is its initial vertical velocity?",
      choices: ["10 m/s", "17.3 m/s", "20 m/s", "0 m/s"],
      answer: 0,
      misconception: "Swapping sine and cosine",
      why: "v_y = v sin θ = 20 × sin 30° = 10 m/s. The 17.3 m/s is the horizontal component (20 cos 30°).",
    },
    {
      q: "A plane flying level at constant velocity drops a package. Ignoring air resistance, where is the plane when the package hits the ground?",
      choices: ["Directly above the package", "Far ahead of the package", "Behind the package", "It depends on the mass of the package"],
      answer: 0,
      misconception: "Thinking the package loses its forward motion when released",
      why: "The package keeps the plane's horizontal velocity because nothing pushes it backward. Plane and package cover the same horizontal distance, so the package lands directly below the plane.",
    },
    {
      q: "Two identical balls are launched from level ground at the same speed, one at 30° and one at 60°. Ignoring air resistance, which lands farther away?",
      choices: ["They land the same distance away", "The 30° ball", "The 60° ball", "Neither can be determined without the speed"],
      answer: 0,
      misconception: "Assuming a higher or lower angle always goes farther",
      why: "Angles that add to 90° give the same range. The 60° ball goes higher and stays up longer, but moves sideways more slowly, and the two effects balance exactly.",
    },
  ],
  practice: [
    { q: "A ball is launched at 25 m/s at 37° above the horizontal. Find its horizontal and vertical velocity components.", a: "v_x = 25 cos 37° = 20.0 m/s. v_y = 25 sin 37° = 15.0 m/s." },
    { q: "A marble rolls off a 0.80 m high table and lands 1.2 m from its base. How fast was it rolling?", a: "t = √(2 × 0.80 ÷ 9.8) = 0.404 s. v = 1.2 ÷ 0.404 = 2.97 m/s." },
    { q: "A stone is thrown horizontally at 12 m/s from a 45 m cliff. Find the time in the air, the distance from the base, and the landing speed.", a: "t = √(2 × 45 ÷ 9.8) = 3.03 s. Range = 12 × 3.03 = 36.4 m. v_y = 9.8 × 3.03 = 29.7 m/s, so speed = √(12² + 29.7²) = 32.0 m/s." },
    { q: "A soccer ball is kicked at 18 m/s at 40° on level ground. Find the time of flight, maximum height, and range.", a: "v_x = 13.8 m/s, v_iy = 11.6 m/s. Time = 2 × 11.57 ÷ 9.8 = 2.36 s. Height = 11.57² ÷ 19.6 = 6.83 m. Range = 13.79 × 2.36 = 32.6 m." },
    { q: "Two balls are thrown at the same speed, one at 30° and one at 60°. Compare their range, maximum height, and time in the air.", a: "Same range. The 60° ball goes higher and stays in the air longer because its vertical component is larger." },
    { q: "A supply plane flying level at 50 m/s releases a package from 500 m. How long does it fall, and how far forward does it travel?", a: "t = √(2 × 500 ÷ 9.8) = 10.1 s. Horizontal distance = 50 × 10.1 = 505 m." },
  ],
  realWorld: [
    "Basketball shots: a higher arc gives the ball a wider target at the rim.",
    "Soccer, football, and golf: launch angle and speed set hang time and distance.",
    "Long jump and ski jump: athletes trade launch angle against speed.",
    "Firefighting hoses and fountains: the water stream is a visible parabola.",
    "Airdrops: aid packages must be released well before the target.",
  ],
  resources: [
    { name: "The Physics Classroom: Vectors and Projectiles tutorial", url: "https://www.physicsclassroom.com/class/vectors", what: "Readings on vector components, projectile concepts, and worked problems." },
    { name: "The Physics Classroom: Vectors and Projectiles Concept Builders", url: "https://www.physicsclassroom.com/Concept-Builders/Vectors-and-Projectiles", what: "Interactive checks on components and projectile reasoning." },
    { name: "PhET: Projectile Motion", url: "https://phet.colorado.edu/en/simulations/projectile-motion", what: "Change angle, speed, and height and see the path, range, and velocity vectors." },
    { name: "Khan Academy: High School Physics", url: "https://www.khanacademy.org/science/highschool-physics", what: "Video lessons on vectors and two-dimensional motion." },
    { name: "OpenStax Physics (high school)", url: "https://openstax.org/details/books/physics", what: "Free textbook. See the chapter on motion in two dimensions." },
  ],
  objectives: [
    { id: "P1", text: "Resolve a vector into components and recombine components into a resultant.", evidence: "Finds v_x and v_y with correct trig functions; finds magnitude and angle from components." },
    { id: "P2", text: "Explain the independence of horizontal and vertical motion.", evidence: "Correctly predicts and justifies the dropped vs. launched comparison and the motion at the top of the path." },
    { id: "P3", text: "Solve horizontally launched projectile problems.", evidence: "Uses the vertical motion to find time and the horizontal motion to find range, with units." },
    { id: "P4", text: "Solve angle-launched projectile problems on level ground.", evidence: "Finds time of flight, maximum height, and range, and compares launch angles." },
  ],
};
