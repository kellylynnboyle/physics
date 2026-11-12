(globalThis.UNITS = globalThis.UNITS || []).push({
  id: "projectile-motion",
  num: 2,
  title: "Projectile Motion",
  subtitle: "Motion in two dimensions",
  pacing: "Weeks 5–7",
  essentialQuestion: "Why does a thrown object follow a curved path, and how can we predict where it will land?",
  ngss: ["HS-PS2-1 (foundation)", "SEP: Using Mathematics and Computational Thinking", "SEP: Developing and Using Models", "CCC: Cause and Effect"],
  ngssNote: "NGSS has no stand-alone projectile-motion performance expectation. This unit applies the idea that a single force (gravity) changes only the vertical motion, which prepares students for HS-PS2-1.",
  concepts: [
    ["Vector components", "Any velocity can be split into a horizontal part (vₓ = v cos θ) and a vertical part (v_y = v sin θ)."],
    ["Independence of motion", "Horizontal and vertical motions do not affect each other. Time is the only quantity they share."],
    ["Horizontal motion", "No horizontal force (ignoring air), so horizontal velocity stays constant."],
    ["Vertical motion", "Gravity only: the vertical motion is free fall with a = 9.8 m/s² downward."],
    ["Trajectory", "Combining constant horizontal velocity with vertical free fall gives a parabola."],
    ["Range and launch angle", "On level ground, 45° gives the greatest range and complementary angles (such as 30° and 60°) give equal ranges."]
  ],
  objectives: [
    ["P1", "Resolve a velocity vector into horizontal and vertical components and recombine components into a resultant."],
    ["P2", "Explain why the horizontal and vertical motions of a projectile are independent, using evidence from a demonstration or simulation."],
    ["P3", "Solve horizontally launched projectile problems for time of flight, range, and impact velocity."],
    ["P4", "Solve angled-launch problems on level ground for time of flight, maximum height, and range."],
    ["P5", "Predict how changing launch speed, angle, or height changes a projectile's path."]
  ],
  notes: [
    {
      section: "1. Vectors and Components",
      rows: [
        ["How do I split a velocity into horizontal and vertical components?", [
          "Draw the velocity as the hypotenuse of a right triangle with angle θ above the horizontal.",
          "**vₓ = v cos θ** (horizontal) and **v_y = v sin θ** (vertical).",
          "**Worked example:** 20 m/s at 30°. vₓ = 20 cos 30° = **17.3 m/s**. v_y = 20 sin 30° = **10.0 m/s**. Check: √(17.3² + 10.0²) = 20 m/s."
        ]],
        ["How do I combine two perpendicular components into one vector?", [
          "Size: **Pythagorean theorem**, v = √(vₓ² + v_y²).",
          "Direction: **θ = tan⁻¹(v_y ÷ vₓ)**.",
          "Make sure the calculator is in **degree mode**."
        ]]
      ],
      ixl: [["Physics C.2", "Decompose and compose two-dimensional vectors"], ["Physics C.3", "Add and subtract two-dimensional vectors: component form"]]
    },
    {
      section: "2. Independence of Horizontal and Vertical Motion",
      rows: [
        ["What is a projectile?", [
          "An object moving through the air with **gravity as the only force** on it (air resistance ignored).",
          "Its path, called the **trajectory**, is a parabola."
        ]],
        ["What happens to the horizontal velocity during the flight?", [
          "It stays **constant**. There is no horizontal force, so there is no horizontal acceleration (aₓ = 0).",
          "Horizontal distance: **Δx = vₓ t**."
        ]],
        ["What happens to the vertical velocity during the flight?", [
          "It changes by **9.8 m/s every second** (a_y = −9.8 m/s²), exactly like an object in free fall.",
          "Use the kinematic equations with vertical quantities only."
        ]],
        ["If one ball is dropped and another is launched horizontally from the same height, which lands first?", [
          "They land **at the same time**. Both start with zero vertical velocity and fall the same height with the same acceleration.",
          "The launched ball simply lands farther away. **Time is the only link** between the horizontal and vertical motions."
        ]]
      ],
      ixl: [["Physics E.1", "Solve projectile motion problems given components of velocity"]]
    },
    {
      section: "3. Horizontally Launched Projectiles",
      rows: [
        ["How do I solve a horizontal-launch problem?", [
          "Make two columns, **horizontal** and **vertical**, and never mix them.",
          "Vertical: v₀y = 0, a = 9.8 m/s², Δy = height. Find the **time** from Δy = ½gt².",
          "Horizontal: use that time in Δx = vₓ t."
        ]],
        ["A ball rolls off a 1.25 m high table at 3.0 m/s. Where does it land?", [
          "**Vertical:** 1.25 = ½(9.8)t² → t = √(2 × 1.25 ÷ 9.8) = **0.505 s**.",
          "**Horizontal:** Δx = 3.0 × 0.505 = **1.5 m** from the table's edge.",
          "Sense check: about half a second to fall table height is reasonable."
        ]],
        ["Does launching faster keep the ball in the air longer?", [
          "**No.** Time in the air depends only on the height (vertical motion). A faster launch lands farther away in the same time."
        ]]
      ],
      ixl: [["Physics E.1", "Solve projectile motion problems given components of velocity"]]
    },
    {
      section: "4. Projectiles Launched at an Angle",
      rows: [
        ["What are the velocity and acceleration at the top of the path?", [
          "Vertical velocity is **zero**, but the projectile is still moving **horizontally at vₓ**.",
          "Acceleration is still **9.8 m/s² downward**. It never changes during the flight."
        ]],
        ["How do I find the time of flight, maximum height, and range on level ground?", [
          "First find the components vₓ and v_y.",
          "Time to the top: **t_up = v_y ÷ g**. Total time: **t = 2v_y ÷ g**.",
          "Maximum height: **H = v_y² ÷ (2g)**.",
          "Range: **R = vₓ × t**."
        ]],
        ["A ball is kicked at 20 m/s at 30° above level ground. How long, how high, and how far does it go?", [
          "**Components:** vₓ = 17.3 m/s, v_y = 10.0 m/s.",
          "**Time:** t = 2(10.0) ÷ 9.8 = **2.04 s**.",
          "**Height:** H = 10.0² ÷ (2 × 9.8) = **5.1 m**.",
          "**Range:** R = 17.3 × 2.04 = **35 m**."
        ]]
      ],
      ixl: [["Physics E.2", "Solve projectile motion problems given magnitude and direction of velocity"]]
    },
    {
      section: "5. Range and Launch Angle",
      rows: [
        ["Which launch angle gives the greatest range on level ground?", [
          "**45°**, because it balances time in the air against horizontal speed (no air resistance, same launch and landing height)."
        ]],
        ["Which pairs of angles give the same range?", [
          "**Complementary angles** (angles that add to 90°), such as 30° and 60°, or 20° and 70°.",
          "The higher angle stays in the air longer and goes higher; the lower angle is faster horizontally. The ranges match."
        ]],
        ["How does the landing speed compare with the launch speed?", [
          "If it lands at the **same height** it was launched from, the landing speed **equals** the launch speed. The path is symmetric: time up = time down."
        ]]
      ],
      ixl: [["Physics E.2", "Solve projectile motion problems given magnitude and direction of velocity"]]
    }
  ],
  tricks: [
    ["SOH CAH TOA", "Sine = opposite ÷ hypotenuse, cosine = adjacent ÷ hypotenuse, tangent = opposite ÷ adjacent. Use it to find components."],
    ["Two columns, one clock", "Keep horizontal and vertical quantities in separate columns. Time is the only number allowed in both."],
    ["Vertical sets the time", "In almost every problem, find the time from the vertical motion first, then use it horizontally."],
    ["Complementary angles, same range", "30° and 60° land in the same place; 45° goes farthest."]
  ],
  summary: "A projectile moves under gravity alone. Because gravity pulls only downward, the horizontal velocity never changes while the vertical velocity changes by 9.8 m/s each second. The two motions are independent and share only the time, so every problem is solved as two one-dimensional problems. The vertical motion usually sets the time of flight, and the horizontal motion then gives the range.",
  quiz: [
    {
      q: "One ball is dropped from a table. At the same instant an identical ball is launched horizontally from the same height. Ignoring air resistance, which hits the floor first?",
      choices: ["They hit at the same time", "The dropped ball", "The launched ball", "It depends on the launch speed"],
      why: "Both start with zero vertical velocity and fall the same height with the same acceleration. Horizontal motion does not affect the fall time.",
      trap: "Thinking horizontal speed changes how long an object takes to fall."
    },
    {
      q: "A ball is kicked at an angle. At the highest point of its path, its velocity is:",
      choices: ["Horizontal, equal to its horizontal launch velocity", "Zero", "Straight down at 9.8 m/s", "Equal to its launch velocity"],
      why: "Only the vertical component is zero at the top. The horizontal component never changes, so the ball is still moving sideways.",
      trap: "Thinking the projectile stops at the top."
    },
    {
      q: "At the highest point of a projectile's path, its acceleration is:",
      choices: ["9.8 m/s² downward", "Zero", "9.8 m/s² upward", "Horizontal"],
      why: "Gravity acts the whole flight. The acceleration is 9.8 m/s² downward at every point, including the top.",
      trap: "Confusing zero vertical velocity with zero acceleration."
    },
    {
      q: "Ignoring air resistance, what happens to the horizontal velocity of a projectile during its flight?",
      choices: ["It stays constant", "It decreases steadily", "It increases as the projectile falls", "It becomes zero at the top"],
      why: "No horizontal force acts on the projectile, so there is no horizontal acceleration.",
      trap: "Believing an object needs a forward force to keep moving forward."
    },
    {
      q: "A marble rolls off a table at 2 m/s, then is rolled off the same table at 4 m/s. Compared with the first trial, the second marble:",
      choices: ["Is in the air the same time and lands twice as far away", "Is in the air twice as long and lands twice as far away", "Is in the air half as long and lands the same distance away", "Is in the air longer and lands four times as far away"],
      why: "Time in the air depends only on the table's height. With the same time and double the horizontal speed, the range doubles.",
      trap: "Thinking a faster horizontal launch means more time in the air."
    },
    {
      q: "On level ground with no air resistance, a ball launched at 30° travels the same range as a ball launched at the same speed at:",
      choices: ["60°", "45°", "15°", "90°"],
      why: "Complementary angles (adding to 90°) give equal ranges. 45° gives the maximum range.",
      trap: "Assuming a bigger angle always goes farther."
    },
    {
      q: "A plane flying horizontally at constant velocity drops a package. Ignoring air resistance, where is the plane when the package lands?",
      choices: ["Directly above the package", "Far ahead of the package", "Behind the package", "Above the point where the package was released"],
      why: "The package keeps the plane's horizontal velocity while it falls, so it stays directly below the plane.",
      trap: "Thinking the package loses its forward motion when released."
    },
    {
      q: "A ball leaves a 20 m high cliff horizontally at 15 m/s. About how far from the base of the cliff does it land?",
      choices: ["30 m", "15 m", "60 m", "300 m"],
      why: "Vertical: 20 = ½(9.8)t² gives t ≈ 2.0 s. Horizontal: 15 m/s × 2.0 s ≈ 30 m.",
      trap: "Mixing horizontal and vertical quantities in one equation."
    }
  ],
  problems: [
    ["Warm-up", "A ball leaves a bat at 25 m/s, 53° above the horizontal. Find the horizontal and vertical components.", "vₓ = 25 cos 53° = 15 m/s. v_y = 25 sin 53° = 20 m/s."],
    ["Core", "A marble rolls off a 0.80 m high table at 2.0 m/s. How long is it in the air and how far from the table does it land?", "t = √(2 × 0.80 ÷ 9.8) = 0.40 s. Δx = 2.0 × 0.404 = 0.81 m."],
    ["Core", "A stone thrown horizontally from a 45 m cliff lands 60 m from the base. How fast was it thrown?", "t = √(2 × 45 ÷ 9.8) = 3.03 s. vₓ = 60 ÷ 3.03 = 19.8 m/s."],
    ["Core", "A soccer ball is kicked at 18 m/s at 40° on level ground. Find the time of flight, maximum height, and range.", "vₓ = 13.8 m/s, v_y = 11.6 m/s. t = 2(11.57) ÷ 9.8 = 2.36 s. H = 11.57² ÷ 19.6 = 6.8 m. R = 13.79 × 2.36 = 32.6 m."],
    ["Core", "Two balls are thrown at the same speed, one at 20° and one at 70°. Which is in the air longer? Which goes farther?", "The 70° ball is in the air longer (larger vertical velocity). They land the same distance away because the angles are complementary."],
    ["Challenge", "A ball is thrown horizontally at 12 m/s from the top of a 30 m building. Find its speed and direction just before it hits the ground.", "v_y = √(2 × 9.8 × 30) = 24.2 m/s. Speed = √(12² + 24.2²) = 27.1 m/s, at tan⁻¹(24.2 ÷ 12) = 64° below the horizontal."]
  ],
  labs: [
    ["Drop vs. launch demonstration", "Release one ball and launch another horizontally at the same instant (ruler-and-two-coins works). Listen for a single click when they land."],
    ["Marble launch target lab", "Measure a marble's speed leaving a ramp on a table, predict where it will land using the table's height, then place a target. Independent variable: launch speed. Dependent variable: range."],
    ["Launch angle investigation", "Use a launcher or the PhET simulation to measure range at 15°, 30°, 45°, 60°, and 75° with the same speed. Graph range vs. angle."]
  ],
  resources: [
    ["The Physics Classroom: Vectors and Projectiles", "https://www.physicsclassroom.com/class/vectors", "Tutorial covering components, horizontal launches, and angled launches."],
    ["PhET: Projectile Motion", "https://phet.colorado.edu/en/simulations/projectile-motion", "Change speed, angle, height, and air resistance and watch the path."],
    ["OpenStax Physics (high school), Ch. 5", "https://openstax.org/details/books/physics", "Free textbook chapter on motion in two dimensions."],
    ["IXL Physics C.2–C.3, E.1–E.2", "https://www.ixl.com/science/physics", "Skill practice; aim for SmartScore 80+."]
  ],
  applications: [
    "Basketball shots, soccer kicks, and long jump: choosing launch angle and speed.",
    "Water fountains and fireworks, which trace parabolas.",
    "Dropping supplies from aircraft: release before reaching the target.",
    "Video game physics engines, which update horizontal and vertical motion separately each frame."
  ]
});
