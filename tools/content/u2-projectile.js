// Unit 2: Projectile Motion.
module.exports = {
  id: "projectile", num: 2, dir: "02-projectile-motion", title: "Projectile Motion", weeks: "Weeks 5–7",
  subtitle: "Physics | Unit 2 | Vectors, components, horizontal and angled launches",
  ngss: ["HS-PS2-1 (extension to two dimensions; the NGSS assessment boundary is one-dimensional motion)", "SEP: Using Mathematics and Computational Thinking", "SEP: Developing and Using Models", "CCC: Systems and System Models"],
  essentialQuestion: "Why can we treat the horizontal and vertical parts of a projectile's motion separately, and how does that let us predict where it lands?",
  targets: [
    "I can split a vector into horizontal and vertical components and recombine them.",
    "I can explain why a projectile's horizontal velocity stays constant while its vertical velocity changes.",
    "I can solve horizontal-launch problems for time, range, and impact velocity.",
    "I can solve angled-launch problems on level ground for time, maximum height, and range.",
    "I can predict how launch angle and speed affect range and time in the air.",
  ],
  concepts: [
    ["Vector components", "Any vector can be replaced by a horizontal part (vₓ = v cos θ) and a vertical part (v_y = v sin θ)."],
    ["Projectile", "An object moving through the air with gravity as the only force."],
    ["Independence of motion", "Horizontal and vertical motions do not affect each other. Time is the only quantity they share."],
    ["Horizontal motion", "No horizontal force, so aₓ = 0 and vₓ is constant: x = vₓt."],
    ["Vertical motion", "Free fall: a_y = 9.8 m/s² downward. Use the kinematic equations."],
    ["Trajectory", "The curved path, a parabola, that results from combining the two motions."],
    ["Range and launch angle", "On level ground, 45° gives the greatest range and complementary angles (such as 30° and 60°) give equal ranges."],
  ],
  sections: [
    {
      title: "1. Vectors and Components",
      cues: [
        { q: "How do you split a velocity into horizontal and vertical components?", notes: [
          "Draw a right triangle with the velocity as the hypotenuse and θ measured from the horizontal.",
          "**vₓ = v cos θ** (horizontal) and **v_y = v sin θ** (vertical).",
          "Set your calculator to **degrees**.",
        ]},
        { q: "A ball leaves the ground at 20 m/s, 30° above horizontal. What are its components?", notes: [
          "vₓ = 20 cos 30° = **17.3 m/s**.",
          "v_y = 20 sin 30° = **10.0 m/s**.",
          "Check: √(17.3² + 10.0²) = 20 m/s.",
        ]},
        { q: "How do you combine two perpendicular vectors into one resultant?", notes: [
          "Magnitude: **Pythagorean theorem**, R = √(x² + y²).",
          "Direction: **θ = tan⁻¹(y ÷ x)**.",
          "Draw the vectors tip to tail; the resultant goes from the first tail to the last tip.",
        ]},
      ],
      ixl: [["Physics", "C.2", "Decompose and compose two-dimensional vectors"], ["Physics", "C.3", "Add and subtract two-dimensional vectors: component form"], ["Precalculus", "Y.1", "Find the magnitude of a vector"], ["Precalculus", "Y.2", "Find the component form of a vector"], ["Precalculus", "Y.3", "Find the direction angle of a vector"], ["Precalculus", "Y.4", "Find the component form of a vector from its magnitude and direction angle"], ["Precalculus", "Y.5", "Graph a resultant vector using the triangle method"], ["Precalculus", "Y.7", "Add vectors"], ["Precalculus", "Y.9", "Find the magnitude and direction of a vector sum"]],
      ixlShort: "IXL: Physics C.2–3, Precalculus Y.1–5, Y.7, Y.9",
    },
    {
      title: "2. What Makes a Projectile",
      cues: [
        { q: "What is a projectile, and what forces act on it in flight?", notes: [
          "A **projectile** is any object in the air with **gravity as the only force** (air resistance ignored).",
          "After release there is **no “force of the throw.”** The object keeps moving forward because of inertia.",
        ]},
        { q: "What happens to a projectile's horizontal velocity during flight?", notes: [
          "It **stays constant**. There is no horizontal force, so aₓ = 0.",
          "Horizontal distance: **x = vₓt**.",
        ]},
        { q: "What happens to its vertical velocity?", notes: [
          "It changes by **9.8 m/s every second**, exactly like an object in free fall.",
          "Going up, v_y shrinks. At the top, v_y = 0. Coming down, v_y grows downward.",
        ]},
        { q: "What are the velocity and acceleration at the top of the path?", notes: [
          "Velocity is **not zero**. It equals **vₓ**, pointing horizontally.",
          "Acceleration is **9.8 m/s² downward**, the same as everywhere else on the path.",
        ]},
        { q: "What one quantity is shared by the horizontal and vertical motions?", notes: [
          "**Time.** Solve for time on one side (usually vertical), then use it on the other.",
        ]},
      ],
      ixl: [],
      noIxl: "No IXL skill covers the concepts in this section on their own. Use the Vectors and Projectiles Concept Builders at physicsclassroom.com.",
      ixlShort: "physicsclassroom.com Concept Builders",
    },
    {
      title: "3. Horizontal Launch",
      cues: [
        { q: "One ball is dropped and another is launched horizontally from the same height at the same instant. Which lands first?", notes: [
          "**They land at the same time.** Both start with zero vertical velocity and fall the same height with the same acceleration.",
          "The launched ball simply lands farther away.",
        ]},
        { q: "What are the steps for a horizontal-launch problem?", notes: [
          "Make an **x | y table**. Horizontal: vₓ, aₓ = 0. Vertical: v_iy = 0, a_y = 9.8 m/s², height.",
          "Vertical gives time: **h = ½gt²**, so t = √(2h ÷ g).",
          "Horizontal gives range: **x = vₓt**.",
        ]},
        { q: "A ball rolls off a 19.6 m cliff at 5.0 m/s. How long is it in the air, how far from the base does it land, and how fast is it moving at impact?", notes: [
          "Time: t = √(2 × 19.6 ÷ 9.8) = √4.0 = **2.0 s**.",
          "Range: x = 5.0 × 2.0 = **10 m**.",
          "At impact: vₓ = 5.0 m/s, v_y = 9.8 × 2.0 = 19.6 m/s. Speed = √(5.0² + 19.6²) = **20.2 m/s**.",
          "Sense check: launching faster would not change the 2.0 s, only the range.",
        ]},
      ],
      ixl: [["Physics", "E.1", "Solve projectile motion problems given components of velocity"]],
      ixlShort: "IXL: Physics E.1",
    },
    {
      title: "4. Launch at an Angle",
      cues: [
        { q: "What are the steps for an angled launch on level ground?", notes: [
          "1. Find the components: vₓ = v cos θ, v_y = v sin θ.",
          "2. Vertical: time to the top = v_y ÷ g. Total time = **2 × that**.",
          "3. Maximum height = **v_y² ÷ (2g)**.",
          "4. Horizontal: range = **vₓ × total time**.",
        ]},
        { q: "A ball is kicked at 20 m/s, 30° above level ground. Find the time in the air, maximum height, and range.", notes: [
          "Components: vₓ = 17.3 m/s, v_y = 10.0 m/s.",
          "Time up = 10.0 ÷ 9.8 = 1.02 s, so total time = **2.04 s**.",
          "Maximum height = 10.0² ÷ (2 × 9.8) = **5.10 m**.",
          "Range = 17.3 × 2.04 = **35.3 m**.",
        ]},
        { q: "Which launch angle gives the greatest range, and which pairs of angles give the same range?", notes: [
          "On level ground with no air resistance, **45°** gives the greatest range.",
          "**Complementary angles** (they add to 90°, such as 30° and 60°) give the **same range**.",
          "The steeper angle goes higher and stays in the air longer.",
        ]},
      ],
      ixl: [["Physics", "E.1", "Solve projectile motion problems given components of velocity"], ["Physics", "E.2", "Solve projectile motion problems given magnitude and direction of velocity"]],
      ixlShort: "IXL: Physics E.1–2",
    },
    {
      title: "5. Labs and Measurement",
      cues: [
        { q: "In a “hit the target” launch lab, what do you measure and what do you predict?", notes: [
          "Measure the **launch speed** (photogate, or distance ÷ time along the table) and the **table height**.",
          "Predict the landing spot: t = √(2h ÷ g), then **x = vₓt**. Place the target before launching.",
        ]},
        { q: "What are the independent and dependent variables when you test launch angle?", notes: [
          "**Independent:** launch angle. **Dependent:** range.",
          "**Controlled:** launch speed, launch height, the same projectile.",
          "Compare your predicted and measured range with **percent error = |measured − predicted| ÷ predicted × 100**.",
        ]},
      ],
      ixl: [["Physics", "A.2", "Identify independent and dependent variables"], ["Physics", "A.3", "Identify the experimental question"]],
      ixlShort: "IXL: Physics A.2–3",
    },
  ],
  mnemonics: [
    ["SOH CAH TOA", "Use to find components: cosine goes with the side next to the angle, sine with the side opposite."],
    ["x | y table", "Use at the start of every projectile problem to keep horizontal and vertical values apart."],
    ["Horizontal: constant velocity. Vertical: free fall.", "Use to decide which equation belongs on which side of the table."],
    ["Time is the bridge", "Use when stuck: find time from one direction and carry it to the other."],
    ["45° for maximum range; complementary angles match", "Use for quick predictions on level ground without air resistance."],
  ],
  summary: "A projectile moves under gravity alone. Its motion splits into two independent parts: a horizontal part with constant velocity and a vertical part that is ordinary free fall at 9.8 m/s² downward. Because the parts share only the time, the method is always the same: break the launch velocity into components, use the vertical motion to find the time, then use the horizontal motion to find the range. This explains why a dropped ball and a horizontally launched ball land together, why velocity is never zero at the top of an angled launch, and why 45° gives the greatest range on level ground.",
  visuals: [
    ["projectile-2", "A launch velocity is the hypotenuse of a right triangle whose sides are the two components.", "vₓ = v cos θ; v_y = v sin θ"],
    ["projectile-1", "The horizontal arrow never changes; the vertical arrow shrinks, vanishes at the top, then grows downward.", "aₓ = 0; a_y = 9.8 m/s² down"],
    ["projectile-3", "A dropped ball and a sideways-launched ball are at the same height at every instant.", "t = √(2h ÷ g) for both"],
    ["projectile-4", "At the same launch speed, 45° travels farthest and 30° and 60° land at the same spot.", "range = vₓ × total time"],
  ],
  resources: [
    ["The Physics Classroom: Vectors and Projectiles tutorial", "https://www.physicsclassroom.com/class/vectors", "Covers components, independence of motion, and both launch types with animations."],
    ["PhET: Projectile Motion", "https://phet.colorado.edu/en/simulations/projectile-motion", "Change angle, speed, and height and see range, height, and time."],
    ["PhET: Vector Addition", "https://phet.colorado.edu/en/simulations/vector-addition", "Practice components and resultants by dragging vectors."],
    ["Khan Academy: High school physics", "https://www.khanacademy.org/science/highschool-physics", "Videos and practice on two-dimensional motion."],
    ["OpenStax Physics (free textbook), chapter 5", "https://openstax.org/details/books/physics", "Reference reading and extra problems on vectors and projectiles."],
  ],
  practice: [
    ["Find the components of a 25 m/s velocity directed 53° above horizontal.", "vₓ = 25 cos 53° = 15.0 m/s; v_y = 25 sin 53° = 20.0 m/s."],
    ["A stone is thrown horizontally at 12 m/s from a 44.1 m cliff. Find the time in the air, the range, and the impact speed.", "t = √(2 × 44.1 ÷ 9.8) = 3.0 s; range = 36 m; v_y = 29.4 m/s, so speed = √(12² + 29.4²) = 31.8 m/s."],
    ["A soccer ball is kicked at 18 m/s, 40° above level ground. Find the time in the air, maximum height, and range.", "vₓ = 13.8 m/s, v_y = 11.6 m/s; time = 2 × 11.6 ÷ 9.8 = 2.36 s; height = 11.6² ÷ 19.6 = 6.83 m; range = 13.8 × 2.36 = 32.6 m."],
    ["A plane flying level at 50 m/s and 78.4 m above the ground drops a supply package. How far before the target must it release the package?", "t = √(2 × 78.4 ÷ 9.8) = 4.0 s; distance = 50 × 4.0 = 200 m before the target."],
    ["Two balls are launched at 20 m/s, one at 30° and one at 60°. Compare their ranges, maximum heights, and times in the air.", "Same range (35.3 m). The 60° ball goes higher (15.3 m vs 5.1 m) and stays up longer (3.53 s vs 2.04 s)."],
    ["A marble rolls off a 0.80 m table and lands 0.60 m from the base. How fast was it rolling?", "t = √(2 × 0.80 ÷ 9.8) = 0.404 s; v = 0.60 ÷ 0.404 = 1.49 m/s."],
  ],
  realWorld: [
    "Sports: basketball arcs, soccer free kicks, and the long jump all trade launch angle against speed.",
    "Emergency supply drops and firefighting aircraft must release before they are over the target.",
    "Water fountains and garden hoses trace visible parabolas you can photograph and measure.",
    "Earth science link: volcanic bombs and landslide debris follow projectile paths, which lets geologists estimate eruption speeds from where rocks land.",
  ],
  labs: [
    "Hit the target: predict where a marble leaving a ramp lands on the floor, then test it.",
    "Launch angle vs range with a spring launcher or the PhET simulation; graph range against angle.",
    "Video analysis of a tossed ball: plot x vs t (straight line) and y vs t (parabola).",
  ],
  quiz: [
    { q: "A bullet is fired horizontally from a rifle at the same instant an identical bullet is dropped from the same height. Ignoring air resistance, which hits the level ground first?", c: ["The dropped bullet", "The fired bullet", "They hit at the same time", "It depends on the rifle's muzzle speed"], a: 2,
      why: "Both start with zero vertical velocity and fall the same height with the same acceleration. Horizontal speed does not affect fall time.", trap: "Thinking forward speed keeps an object in the air longer." },
    { q: "A ball is kicked at an angle. Which statement is true at the highest point of its path?", c: ["Its velocity and acceleration are both zero", "Its velocity is zero and its acceleration is 9.8 m/s² down", "Its velocity is horizontal and its acceleration is 9.8 m/s² down", "Its velocity is horizontal and its acceleration is zero"], a: 2,
      why: "Only the vertical part of the velocity is zero at the top. The ball still moves sideways at vₓ, and gravity still accelerates it downward.", trap: "Carrying over “velocity is zero at the top” from straight-up throws." },
    { q: "Ignoring air resistance, what happens to the horizontal velocity of a projectile during its flight?", c: ["It decreases steadily", "It stays constant", "It increases on the way down", "It is zero at the top"], a: 1,
      why: "No horizontal force acts, so there is no horizontal acceleration and vₓ does not change.", trap: "Assuming the object “runs out” of forward motion." },
    { q: "A plane flying level at constant velocity drops a package. Ignoring air resistance, where is the package when it hits the ground?", c: ["Far behind the plane", "Directly below the plane", "Ahead of the plane", "Directly below the point where it was released"], a: 1,
      why: "The package keeps the plane's horizontal velocity, so it stays directly underneath the plane as it falls.", trap: "Believing a released object loses its forward motion." },
    { q: "On level ground with no air resistance, which launch angle gives the greatest range for a given launch speed?", c: ["30°", "45°", "60°", "90°"], a: 1,
      why: "45° gives the best balance between time in the air and horizontal speed.", trap: "Assuming a higher launch always goes farther." },
    { q: "Two balls are launched at the same speed, one at 30° and one at 60°. Which statement is correct?", c: ["The 60° ball lands farther away", "The 30° ball lands farther away", "They land at the same distance, but the 60° ball is in the air longer", "They land at the same distance after the same time"], a: 2,
      why: "Complementary angles give equal ranges. The 60° ball has more vertical velocity, so it goes higher and stays up longer.", trap: "Assuming equal range means equal time in the air." },
    { q: "A baseball has left the pitcher's hand and is in flight. Ignoring air resistance, which forces act on it?", c: ["Gravity only", "Gravity and the force of the throw", "The force of the throw only", "Gravity and a forward force that slowly fades"], a: 0,
      why: "Once contact ends, the hand exerts no force. The ball keeps moving forward because of inertia, not because of a force.", trap: "Believing a force must act in the direction of motion." },
    { q: "A marble rolls off a table. If it rolls off twice as fast, what changes?", c: ["It is in the air twice as long and lands twice as far", "It is in the air the same time and lands twice as far", "It is in the air half as long and lands the same distance", "Nothing changes"], a: 1,
      why: "Fall time depends only on height. With the same time and double the horizontal speed, the range doubles.", trap: "Linking horizontal speed to fall time." },
    { q: "A ball is launched at 30 m/s, 60° above horizontal. What is its horizontal velocity component?", c: ["26 m/s", "15 m/s", "30 m/s", "52 m/s"], a: 1,
      why: "vₓ = v cos θ = 30 × cos 60° = 15 m/s. The 26 m/s value is the vertical component, v sin θ.", trap: "Swapping sine and cosine." },
    { q: "How does a projectile's acceleration on the way up compare with its acceleration on the way down?", c: ["Upward going up, downward coming down", "Smaller going up, larger coming down", "The same: 9.8 m/s² downward the whole time", "Zero going up, 9.8 m/s² coming down"], a: 2,
      why: "Gravity is the only force for the entire flight, so the acceleration is 9.8 m/s² downward at every point.", trap: "Thinking acceleration points in the direction of motion." },
  ],
};
