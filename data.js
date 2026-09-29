// Course content for 11th Grade Physics (Semester 1). Edit this file to change any content.
// Quiz answers: `a` is the zero-based index of the correct option; `why` explains the misconception.
window.COURSE = {
  title: "Physics & Earth Science — Semester 1",
  standardsNote:
    "Standards are California NGSS High School Physical Science performance expectations (Physics & Earth Science course model). Kinematics and projectile motion are the mathematical foundation (analyzing motion data) for HS-PS2-1. Verify wording against https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp.",
  standards: {
    "HS-PS2-1": "Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration.",
    "HS-PS2-2": "Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system.",
    "HS-PS2-3": "Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision.",
    "HS-PS3-1": "Create a computational model to calculate the change in the energy of one component in a system when the change in energy of the other component(s) and energy flows in and out of the system are known.",
    "HS-PS3-2": "Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as either motion of particles/objects or energy stored in fields (position).",
    "HS-PS3-3": "Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy."
  },
  topics: [
    // ------------------------------------------------------------------ KINEMATICS
    {
      id: "kinematics", num: 1, title: "Kinematics", icon: "📈", weeks: "Weeks 1–4",
      standards: ["HS-PS2-1"],
      summary: "Describing motion with position, velocity, and acceleration — in words, graphs, equations, and data.",
      objectives: [
        "Distinguish distance vs. displacement and speed vs. velocity.",
        "Calculate average velocity and acceleration from data.",
        "Interpret position–time and velocity–time graphs (slope and area).",
        "Solve constant-acceleration problems with the kinematic equations.",
        "Model free fall with a = g = 9.8 m/s² downward and explain why mass does not matter (no air resistance)."
      ],
      concepts: [
        ["Scalar vs. vector", "Distance and speed are scalars (size only). Displacement and velocity are vectors (size + direction)."],
        ["Velocity", "v = Δx / Δt — the rate of change of position. Slope of an x–t graph."],
        ["Acceleration", "a = Δv / Δt — the rate of change of velocity. Slope of a v–t graph. Speeding up, slowing down, and turning are all accelerations."],
        ["Kinematic equations (constant a)", "v = v₀ + at;  Δx = v₀t + ½at²;  v² = v₀² + 2aΔx;  Δx = ½(v₀ + v)t"],
        ["Free fall", "Only gravity acts. a = 9.8 m/s² down at every point, including the top of a throw."],
        ["Graph areas", "Area under a v–t graph = displacement. Area under an a–t graph = change in velocity."]
      ],
      vocab: ["position", "displacement", "distance", "speed", "velocity", "acceleration", "free fall", "reference frame", "slope", "vector", "scalar"],
      cornell: {
        topic: "Kinematics: Describing Motion",
        rows: [
          ["What is the difference between distance and displacement?", "Distance = total path length (scalar, always ≥ 0). Displacement = straight-line change in position, Δx = x_f − x_i (vector, can be + or −)."],
          ["Speed vs. velocity?", "Average speed = distance / time. Average velocity = displacement / time. A round trip has velocity = 0 but speed > 0."],
          ["What does acceleration mean?", "a = Δv / Δt (m/s²). Any change in speed OR direction. Same sign as v → speeding up; opposite sign → slowing down."],
          ["How do I read an x–t graph?", "Slope = velocity. Flat = at rest. Straight slanted line = constant v. Curve = accelerating."],
          ["How do I read a v–t graph?", "Slope = acceleration. Area between line and axis = displacement. Line crossing zero = object turns around."],
          ["Which kinematic equation do I use?", "List knowns (v₀, v, a, Δx, t). Pick the equation that contains your unknown and leaves out the variable you don't have."],
          ["What is special about free fall?", "a = −9.8 m/s² (down) always. At the peak v = 0 but a ≠ 0. Up and down trips take equal time and pass each height at the same speed."]
        ],
        summary: "Kinematics describes HOW things move without asking why. Velocity is the slope of position; acceleration is the slope of velocity. With constant acceleration, four equations connect v₀, v, a, Δx, and t. Free fall is the special case a = 9.8 m/s² downward."
      },
      quiz: [
        { q: "A car drives 60 km east, then 60 km west back to its start, in 2 hours. What is its average velocity?", o: ["60 km/h", "30 km/h", "0 km/h", "120 km/h"], a: 2, why: "Velocity uses displacement, and the displacement is zero. (Average speed would be 120 km ÷ 2 h = 60 km/h.) Most missed: confusing speed and velocity." },
        { q: "A ball is thrown straight up. At the very top of its path, what are its velocity and acceleration?", o: ["v = 0, a = 0", "v = 0, a = 9.8 m/s² down", "v = 9.8 m/s, a = 0", "v = 0, a = 9.8 m/s² up"], a: 1, why: "Gravity never turns off. Velocity is momentarily zero while it changes from up to down — that change IS the acceleration." },
        { q: "On a velocity–time graph, the slope of the line represents…", o: ["displacement", "acceleration", "speed", "distance"], a: 1, why: "slope = rise/run = Δv/Δt = acceleration. Area under the line is displacement." },
        { q: "A car starts from rest and accelerates at 3 m/s² for 4 s. How far does it travel?", o: ["12 m", "24 m", "48 m", "6 m"], a: 1, why: "Δx = v₀t + ½at² = 0 + ½(3)(4²) = 24 m. Students often forget the ½ and the square on t (12 m is at ×t, not ½at²)." },
        { q: "An object has a negative velocity and a negative acceleration. It is…", o: ["slowing down", "speeding up", "at rest", "moving at constant speed"], a: 1, why: "Same signs → speeding up (in the negative direction). Opposite signs → slowing down. 'Negative acceleration' does not mean slowing down." },
        { q: "A rock is dropped from rest. Ignoring air resistance, its speed after 3.0 s is closest to…", o: ["9.8 m/s", "14.7 m/s", "29.4 m/s", "88 m/s"], a: 2, why: "v = gt = 9.8 × 3.0 = 29.4 m/s. Speed grows by 9.8 m/s every second." },
        { q: "A heavy ball and a light ball are dropped from the same height in a vacuum. Which hits the ground first?", o: ["The heavy ball", "The light ball", "They land at the same time", "Depends on their size only"], a: 2, why: "Free-fall acceleration does not depend on mass. Everyday differences come from air resistance." },
        { q: "On a position–time graph, a perfectly horizontal line means the object is…", o: ["moving at constant speed", "accelerating", "at rest", "moving backward"], a: 2, why: "Position isn't changing, so slope (velocity) = 0. Students confuse graph types: a flat line means constant speed on a v–t graph, but on an x–t graph it means at rest." }
      ],
      practice: [
        { p: "A cyclist travels 300 m in 20 s, then 100 m in 20 s in the same direction. Find the average speed for the whole trip.", ans: "10 m/s (400 m ÷ 40 s)." },
        { p: "A runner speeds from 2.0 m/s to 8.0 m/s in 3.0 s. Find acceleration and the distance covered.", ans: "a = 2.0 m/s²; Δx = ½(2+8)(3) = 15 m." },
        { p: "A car traveling 25 m/s brakes uniformly to rest in 5.0 s. How far does it travel while stopping?", ans: "a = −5 m/s²; Δx = ½(25+0)(5) = 62.5 m." },
        { p: "A stone is dropped from a 44.1 m bridge. How long until it hits the water, and how fast is it going?", ans: "t = √(2·44.1/9.8) = 3.0 s; v = 29.4 m/s." },
        { p: "Sketch the v–t graph for: speeds up steadily for 4 s, coasts for 4 s, brakes to rest in 2 s.", ans: "Rising line, flat line, falling line to zero. Area of the trapezoid = total displacement." }
      ],
      resources: [
        ["PhET: Moving Man", "https://phet.colorado.edu/en/simulations/moving-man", "Drag the man and watch x, v, a graphs update."],
        ["The Physics Classroom — 1-D Kinematics", "https://www.physicsclassroom.com/class/1DKin", "Readable lessons with checkpoints."],
        ["OpenStax High School Physics — Ch. 2", "https://openstax.org/details/books/physics", "Free textbook with worked examples."],
        ["Khan Academy — One-dimensional motion", "https://www.khanacademy.org/science/physics/one-dimensional-motion", "Video lessons and practice."],
        ["Tracker Video Analysis", "https://physlets.org/tracker/", "Extract x–t data from your own phone videos."],
        ["IXL Science — Physics", "https://www.ixl.com/science", "Skill-by-skill practice (see Cornell-notes IXL plan from your teacher)."]
      ],
      lab: "Lab: Buggy or cart motion — collect position vs. time with a stopwatch or Tracker, graph, and use the slope to find velocity. Repeat on a ramp and use the v–t slope to find acceleration.",
      realWorld: ["Speed cameras and average-speed zones", "GPS navigation computing ETA", "Braking distance and safe following distance", "Sports analytics (sprint splits, pitch speed)", "Drop towers at amusement parks"],
      assessment: [
        ["Vocabulary & scalar/vector use", "Correctly labels quantities with units and direction"],
        ["Graph interpretation", "Extracts velocity, acceleration, displacement from x–t and v–t graphs"],
        ["Problem solving", "Lists knowns, selects equation, shows units, checks reasonableness"],
        ["Lab data analysis (HS-PS2-1)", "Uses measured data and a best-fit line to support a claim"]
      ]
    },
    // ------------------------------------------------------------------ PROJECTILE MOTION
    {
      id: "projectile", num: 2, title: "Projectile Motion", icon: "🏹", weeks: "Weeks 5–6",
      standards: ["HS-PS2-1"],
      summary: "Two-dimensional motion under gravity: horizontal and vertical motion are independent.",
      objectives: [
        "Resolve an initial velocity into horizontal and vertical components.",
        "Explain that horizontal velocity is constant and vertical motion is free fall.",
        "Calculate time of flight, maximum height, and range for horizontal and angled launches.",
        "Predict how launch angle and speed affect range and height.",
        "Evaluate a claim using trajectory data from a lab or video."
      ],
      concepts: [
        ["Independence of components", "x and y motion do not affect each other; time links them."],
        ["Components", "vₓ = v cosθ,  v_y = v sinθ (θ measured from the horizontal)."],
        ["Horizontal motion", "aₓ = 0 (no air resistance), so x = vₓt."],
        ["Vertical motion", "a_y = −9.8 m/s²; use the kinematic equations for y."],
        ["Horizontal launch", "v_y0 = 0. Fall time t = √(2h/g); range = vₓt."],
        ["Angled launch", "Time of flight (level ground) t = 2v_y0/g; max height H = v_y0²/(2g); range R = v²sin2θ/g; max range at 45°."]
      ],
      vocab: ["projectile", "trajectory", "component", "range", "time of flight", "apex", "launch angle", "independent"],
      cornell: {
        topic: "Projectile Motion",
        rows: [
          ["What is a projectile?", "Any object moving under gravity alone after launch (no propulsion, ignore air resistance). Path is a parabola."],
          ["Why split motion into x and y?", "Gravity acts only vertically. So horizontal velocity is constant and vertical velocity changes by 9.8 m/s each second."],
          ["How do I find components?", "vₓ = v cosθ; v_y = v sinθ. Draw the right triangle first."],
          ["What happens at the apex?", "v_y = 0 but vₓ is unchanged, so speed ≠ 0. a = 9.8 m/s² down."],
          ["Horizontal launch off a cliff?", "Fall time depends only on height: t = √(2h/g). Range = vₓ · t. Same fall time as a dropped object."],
          ["How does angle affect range?", "Max range at 45°. Complementary angles (30° & 60°) give the same range; higher angle → higher apex, longer time."],
          ["Steps for any projectile problem", "1) Sketch. 2) Split into x and y tables. 3) Solve the direction that has enough info (often y) for t. 4) Use t in the other direction."]
        ],
        summary: "A projectile is two independent motions joined by time: constant velocity horizontally, free fall vertically. Solve vertical first for time, then use that time to find horizontal distance."
      },
      quiz: [
        { q: "One ball is dropped and another is kicked horizontally from the same cliff at the same instant. Which lands first?", o: ["The dropped ball", "The kicked ball", "They land together", "Depends on kick speed"], a: 2, why: "Vertical motion is identical (both start with v_y = 0). Horizontal speed does not affect fall time." },
        { q: "At the highest point of a projectile's flight (launched at an angle), its speed is…", o: ["zero", "equal to its launch speed", "equal to its horizontal velocity component", "9.8 m/s"], a: 2, why: "Only the vertical component is zero at the apex. The horizontal component never changes." },
        { q: "Ignoring air resistance, the horizontal acceleration of a projectile is…", o: ["9.8 m/s²", "0", "decreasing", "equal to vₓ"], a: 1, why: "No horizontal force → no horizontal acceleration. Gravity is vertical only." },
        { q: "On level ground, which launch angle gives the greatest range for a given speed?", o: ["30°", "45°", "60°", "90°"], a: 1, why: "R = v² sin2θ / g is largest when 2θ = 90°. At 90° the object goes straight up (range 0)." },
        { q: "A ball rolls off a 19.6 m-high table at 5 m/s horizontally. How far from the base does it land? (g = 9.8 m/s²)", o: ["5 m", "10 m", "19.6 m", "98 m"], a: 1, why: "t = √(2·19.6/9.8) = 2 s. Range = 5 × 2 = 10 m. Common error: using height as the horizontal distance." },
        { q: "A ball is launched at 50 m/s at 30° above horizontal. Its initial vertical velocity is…", o: ["43.3 m/s", "25 m/s", "50 m/s", "86.6 m/s"], a: 1, why: "v_y = 50 sin30° = 25 m/s (43.3 m/s is the horizontal component). Check your calculator is in degree mode." },
        { q: "Two balls have the same launch speed. One is launched at 30°, the other at 60°. Which reaches the greater maximum height?", o: ["30°", "60°", "Same height", "Cannot tell"], a: 1, why: "H = (v sinθ)²/2g. Larger angle → larger vertical component → higher. Their ranges, however, are equal." },
        { q: "Which pair of launch angles (same speed) gives the same range?", o: ["20° and 40°", "15° and 75°", "30° and 45°", "10° and 60°"], a: 1, why: "Complementary angles (sum to 90°) have equal range: sin2θ = sin(180° − 2θ)." }
      ],
      practice: [
        { p: "A ball is thrown horizontally at 12 m/s from a 1.8 m-high ledge. Find the fall time and the horizontal range.", ans: "t = √(2·1.8/9.8) ≈ 0.61 s; range ≈ 7.3 m." },
        { p: "A soccer ball is kicked at 20 m/s at 40°. Find vₓ and v_y.", ans: "vₓ = 15.3 m/s; v_y = 12.9 m/s." },
        { p: "For the kick above, find time of flight and range on level ground.", ans: "t = 2(12.9)/9.8 ≈ 2.6 s; R ≈ 15.3 × 2.6 ≈ 40 m." },
        { p: "A cannonball leaves horizontally from a 45 m cliff and lands 90 m away. Find its launch speed.", ans: "t = √(2·45/9.8) ≈ 3.03 s; vₓ = 90/3.03 ≈ 30 m/s." },
        { p: "Explain why a monkey hanging from a branch that drops when the dart gun fires is still hit.", ans: "Both fall the same vertical distance in the same time; the dart's vertical motion is free fall too." }
      ],
      resources: [
        ["PhET: Projectile Motion", "https://phet.colorado.edu/en/simulations/projectile-motion", "Vary angle, speed, and air resistance; measure range."],
        ["The Physics Classroom — Vectors & Projectiles", "https://www.physicsclassroom.com/class/vectors", "Component analysis and projectile lessons."],
        ["OpenStax High School Physics — 2-D motion", "https://openstax.org/details/books/physics", "Worked examples with diagrams."],
        ["Tracker Video Analysis", "https://physlets.org/tracker/", "Film a thrown ball; verify constant vₓ and parabolic y."],
        ["Desmos Graphing Calculator", "https://www.desmos.com/calculator", "Plot y(x) trajectories and compare angles."]
      ],
      lab: "Lab: Marble launcher / ramp-off-table — predict landing spot from horizontal-launch speed, then test with carbon paper. Compare prediction vs. result (percent error).",
      realWorld: ["Basketball free throws and soccer kicks", "Long jump and javelin technique", "Water fountains and fire hoses", "Emergency supply airdrops", "Video-game physics engines"],
      assessment: [
        ["Component analysis", "Correctly resolves vectors and labels x/y tables"],
        ["Independence reasoning", "Explains with words why fall time does not depend on horizontal speed"],
        ["Prediction & test", "Prediction within 10% of measured range; percent error calculated"],
        ["Problem solving", "Solves y first for t, then x; shows units"]
      ]
    },
    // ------------------------------------------------------------------ NEWTON'S LAWS
    {
      id: "newton", num: 3, title: "Newton's Laws", icon: "🍎", weeks: "Weeks 7–11",
      standards: ["HS-PS2-1"],
      summary: "Forces cause changes in motion: inertia, F = ma, and action–reaction pairs.",
      objectives: [
        "State and apply Newton's three laws to everyday situations.",
        "Draw free-body diagrams and find net force.",
        "Use ΣF = ma to calculate acceleration, force, or mass.",
        "Distinguish mass from weight and identify normal, friction, tension, and gravitational forces.",
        "Analyze experimental data to support the relationship a = F_net / m (HS-PS2-1)."
      ],
      concepts: [
        ["First law (inertia)", "Zero net force → constant velocity (which includes at rest). Mass measures inertia."],
        ["Second law", "a = F_net / m, or ΣF = ma. Acceleration is in the direction of the net force."],
        ["Third law", "Forces come in pairs: A on B equals B on A in size, opposite in direction, on different objects."],
        ["Weight", "W = mg (a force, in N). Mass is the amount of matter (kg) and does not change with location."],
        ["Normal force", "Perpendicular contact force from a surface; not always equal to weight."],
        ["Friction", "Opposes sliding. f_k = μ_k N (kinetic). Static friction adjusts up to μ_s N."],
        ["Free-body diagram", "Draw only forces ON the object; choose axes; sum forces in each direction."]
      ],
      vocab: ["force", "net force", "inertia", "mass", "weight", "normal force", "friction", "tension", "free-body diagram", "equilibrium", "newton (N)"],
      cornell: {
        topic: "Newton's Laws of Motion",
        rows: [
          ["Newton's 1st law?", "An object keeps its velocity (rest or constant velocity) unless a net force acts. Constant velocity does NOT require a net force."],
          ["What is inertia?", "Resistance to changes in motion. More mass → more inertia."],
          ["Newton's 2nd law?", "ΣF = ma. 1 N = 1 kg·m/s². Double the force → double a. Double the mass → half a."],
          ["Mass vs. weight?", "Mass (kg): matter, constant. Weight (N) = mg: gravitational force, depends on location (Moon g ≈ 1.6 m/s²)."],
          ["Newton's 3rd law?", "F(A on B) = −F(B on A). Equal size, opposite direction, act on DIFFERENT objects, so they never cancel."],
          ["How do I draw a free-body diagram?", "Dot for the object; arrows for weight (down), normal (⊥ surface), friction (along surface), applied, tension. Label each."],
          ["Friction basics?", "Kinetic friction f = μN opposes motion. At constant velocity, friction = applied force."],
          ["Apparent weight in an elevator?", "Scale reads N = m(g + a). Accelerating up → heavier; accelerating down → lighter; constant velocity → normal."]
        ],
        summary: "Forces are interactions. A net force causes acceleration (ΣF = ma); no net force means constant velocity. Every force has an equal, opposite partner on the other object. Free-body diagrams turn a scenario into equations."
      },
      quiz: [
        { q: "A hockey puck slides at constant velocity across frictionless ice. The net force on it is…", o: ["in the direction of motion", "zero", "equal to its weight", "equal to its mass"], a: 1, why: "Constant velocity → a = 0 → ΣF = 0. Force is not needed to keep motion going (a common Aristotelian misconception)." },
        { q: "A book rests on a table. Which force is the Newton's 3rd-law partner of the book's weight (Earth pulling the book down)?", o: ["The table pushing up on the book", "The book pulling up on Earth", "The book pushing down on the table", "Friction"], a: 1, why: "3rd-law pairs are the same type of force, on different objects. Weight and normal act on the SAME object, so they are not a pair." },
        { q: "A large truck hits a mosquito. Compared with the force on the mosquito, the force on the truck is…", o: ["much larger", "much smaller", "equal in size", "zero"], a: 2, why: "Third law: equal magnitude. The mosquito's acceleration is huge only because its mass is tiny (a = F/m)." },
        { q: "A net force of 20 N acts on a 10 kg cart. Its acceleration is…", o: ["0.5 m/s²", "2 m/s²", "200 m/s²", "10 m/s²"], a: 1, why: "a = F/m = 20/10 = 2 m/s². Don't multiply — 200 would be F × m." },
        { q: "An astronaut moves from Earth to the Moon. Her…", o: ["mass and weight both decrease", "mass stays the same, weight decreases", "mass decreases, weight stays the same", "both stay the same"], a: 1, why: "Mass is intrinsic. Weight = mg, and g is smaller on the Moon." },
        { q: "You stand on a scale in an elevator accelerating upward. The scale reading is…", o: ["less than your weight", "equal to your weight", "greater than your weight", "zero"], a: 2, why: "N − mg = ma (up) → N = m(g + a) > mg. Scales read normal force, not gravity." },
        { q: "The same net force is applied to two carts. Cart B has twice the mass of Cart A. Cart B's acceleration is…", o: ["twice A's", "the same as A's", "half of A's", "one-fourth of A's"], a: 2, why: "a ∝ 1/m for the same force. Twice the mass, half the acceleration." },
        { q: "You push a box across the floor at constant velocity. The friction force on the box is…", o: ["less than your push", "equal to your push", "greater than your push", "zero"], a: 1, why: "Constant velocity → net force zero → friction balances the push. If friction were smaller, the box would accelerate." }
      ],
      practice: [
        { p: "A 1500 kg car accelerates at 2.0 m/s². What net force acts on it?", ans: "3000 N." },
        { p: "A 5.0 kg block is pulled by a 30 N force to the right; friction is 10 N. Find acceleration.", ans: "ΣF = 20 N → a = 4.0 m/s² right." },
        { p: "Find the weight of a 60 kg student on Earth (g = 9.8) and on the Moon (g = 1.6).", ans: "588 N on Earth; 96 N on the Moon." },
        { p: "Draw and label the free-body diagram of a box sliding down a frictionless ramp.", ans: "Weight (down), normal (⊥ ramp). Net force is the component of weight along the ramp, mg sinθ." },
        { p: "A 70 kg person stands on a scale in an elevator accelerating up at 1.5 m/s². What does it read?", ans: "N = 70(9.8 + 1.5) = 791 N." },
        { p: "Explain why a rocket accelerates in space where there is 'nothing to push against'.", ans: "The rocket pushes exhaust backward (action); exhaust pushes the rocket forward (reaction)." }
      ],
      resources: [
        ["PhET: Forces and Motion — Basics", "https://phet.colorado.edu/en/simulations/forces-and-motion-basics", "Push objects, add friction, see net force."],
        ["PhET: Friction", "https://phet.colorado.edu/en/simulations/friction", "Microscopic view of friction."],
        ["The Physics Classroom — Newton's Laws", "https://www.physicsclassroom.com/class/newtlaws", "Free-body diagram tutorials."],
        ["Khan Academy — Forces and Newton's laws", "https://www.khanacademy.org/science/physics/forces-newtons-laws", "Video walkthroughs."],
        ["Crash Course Physics (YouTube)", "https://www.youtube.com/@crashcourse", "Engaging 10-minute overviews."],
        ["OpenStax High School Physics — Forces", "https://openstax.org/details/books/physics", "Free textbook chapters."]
      ],
      lab: "Lab: Atwood/cart-and-hanging-mass — vary net force with fixed total mass, then vary mass at fixed force. Graph a vs. F and a vs. 1/m; use slopes to support HS-PS2-1.",
      realWorld: ["Seat belts and car safety", "Elevators and scales", "Rocket launches", "Walking (friction is the forward force)", "Tug-of-war and sports"],
      assessment: [
        ["Free-body diagrams", "Includes all forces, correct directions, labeled, no extra forces"],
        ["Applying ΣF = ma", "Sets up equation along each axis; correct signs and units"],
        ["Third-law reasoning", "Identifies action–reaction pairs on different objects"],
        ["Data analysis (HS-PS2-1)", "Graph of a vs. F (and a vs. 1/m) with slope interpretation and claim–evidence–reasoning"]
      ]
    },
    // ------------------------------------------------------------------ MOMENTUM
    {
      id: "momentum", num: 4, title: "Momentum", icon: "🎱", weeks: "Weeks 12–14",
      standards: ["HS-PS2-2", "HS-PS2-3"],
      summary: "Momentum, impulse, collisions, and conservation of momentum; designing to reduce impact forces.",
      objectives: [
        "Calculate momentum (p = mv) as a vector.",
        "Relate impulse to change in momentum: FΔt = Δp.",
        "Use conservation of momentum in elastic, inelastic, and explosion problems (HS-PS2-2).",
        "Explain how increasing collision time reduces force and use it to design a protective device (HS-PS2-3).",
        "Distinguish momentum conservation from kinetic-energy conservation."
      ],
      concepts: [
        ["Momentum", "p = mv (kg·m/s), a vector in the direction of velocity."],
        ["Impulse", "J = F_net Δt = Δp = mv_f − mv_i. Area under a F–t graph."],
        ["Conservation", "In a closed system (no net external force): total p before = total p after."],
        ["Collision types", "Elastic: p and KE conserved. Inelastic: p conserved, KE not. Perfectly inelastic: objects stick."],
        ["Explosions / recoil", "Start with p = 0 → pieces have equal and opposite momentum."],
        ["Force–time tradeoff", "Same Δp with longer Δt → smaller average force (airbags, crumple zones, padding)."]
      ],
      vocab: ["momentum", "impulse", "system", "closed/isolated system", "elastic", "inelastic", "recoil", "crumple zone", "conservation"],
      cornell: {
        topic: "Momentum & Impulse",
        rows: [
          ["What is momentum?", "p = mv. Mass in motion. Vector — direction matters (use + and −)."],
          ["What is impulse?", "J = FΔt = Δp. A force acting over time changes momentum."],
          ["Why do airbags help?", "Same Δp, but stretching Δt makes F = Δp/Δt smaller."],
          ["Conservation of momentum?", "If ΣF_external = 0: Σp_before = Σp_after. Internal forces come in 3rd-law pairs and cancel."],
          ["Elastic vs. inelastic?", "Momentum is conserved in BOTH. Kinetic energy is conserved only in elastic. Stick-together = perfectly inelastic (max KE lost)."],
          ["Bounce vs. stick?", "Bouncing reverses velocity, so |Δp| is larger → larger impulse than sticking."],
          ["Explosion / recoil?", "Start at rest: 0 = m₁v₁ + m₂v₂ → smaller mass moves faster in the opposite direction."],
          ["Problem-solving steps", "1) Choose + direction. 2) Write p before and after. 3) Set equal. 4) Solve for the unknown."]
        ],
        summary: "Momentum (mv) is conserved when no net external force acts. Impulse (FΔt) changes momentum. Longer collision times reduce force, which is the design principle behind airbags, helmets, and crumple zones."
      },
      quiz: [
        { q: "What is the momentum of a 2 kg cart moving at 3 m/s?", o: ["1.5 kg·m/s", "5 kg·m/s", "6 kg·m/s", "18 kg·m/s"], a: 2, why: "p = mv = 2 × 3 = 6 kg·m/s. (18 would be ½mv² style mistakes with squaring.)" },
        { q: "A 10 N force acts on an object for 3 s. The impulse is…", o: ["3.3 N·s", "13 N·s", "30 N·s", "7 N·s"], a: 2, why: "J = FΔt = 10 × 3 = 30 N·s = change in momentum." },
        { q: "Why does an airbag reduce injury?", o: ["It reduces the change in momentum", "It increases the collision time, lowering the average force", "It increases your momentum", "It makes you lighter"], a: 1, why: "Δp is fixed by the crash. F = Δp/Δt, so bigger Δt → smaller F." },
        { q: "A 1 kg cart at 4 m/s hits and sticks to a 3 kg cart at rest. The final speed is…", o: ["4 m/s", "2 m/s", "1 m/s", "0.75 m/s"], a: 2, why: "1(4) = (1+3)v → v = 1 m/s. Forgetting to add the masses is the usual slip." },
        { q: "In an inelastic collision (isolated system)…", o: ["momentum is not conserved", "kinetic energy is conserved but momentum is not", "momentum is conserved but kinetic energy is not", "neither is conserved"], a: 2, why: "Momentum is conserved in ALL collisions in an isolated system. Some KE becomes thermal/sound/deformation energy." },
        { q: "One ball bounces off a wall; an identical ball with the same speed sticks to it. Which receives the larger impulse?", o: ["The one that sticks", "The one that bounces", "Same", "Neither, since the wall doesn't move"], a: 1, why: "Sticking: Δp = 0 − mv = −mv. Bouncing: Δp = −mv − mv = −2mv. Bounce = double the impulse." },
        { q: "Two identical 2 kg carts move toward each other at 5 m/s. What is their total momentum?", o: ["20 kg·m/s", "10 kg·m/s", "0", "−10 kg·m/s"], a: 2, why: "+10 + (−10) = 0. Momentum is a vector, so opposite directions cancel." },
        { q: "A rocket in deep space ejects gas backward. It speeds up because…", o: ["the gas pushes against space", "momentum is conserved: gas goes one way, rocket the other", "its mass increases", "gravity pulls it"], a: 1, why: "Total momentum stays constant. Backward gas momentum is balanced by forward rocket momentum. No air needed." }
      ],
      practice: [
        { p: "Find the momentum of a 1200 kg car at 20 m/s and of a 0.15 kg baseball at 40 m/s.", ans: "24,000 kg·m/s; 6 kg·m/s." },
        { p: "A 0.5 kg ball moving at 6 m/s is stopped in 0.02 s by a glove. Find average force.", ans: "Δp = 3 kg·m/s → F = 150 N (opposite the motion)." },
        { p: "A 3 kg cart at 2 m/s hits a 1 kg cart at rest, and they stick. Find final velocity.", ans: "6 = 4v → 1.5 m/s." },
        { p: "A 60 kg skater at rest pushes off a 40 kg skater. The 40 kg skater moves at 3 m/s. Find the other skater's velocity.", ans: "0 = 60v − 40(3) → v = 2 m/s opposite." },
        { p: "Design task: sketch a package that protects an egg from a 2 m drop. Explain using Δt and F. (HS-PS2-3)", ans: "Include crumple/cushion material to lengthen stopping time; predicted force reduction with F = Δp/Δt." }
      ],
      resources: [
        ["PhET: Collision Lab", "https://phet.colorado.edu/en/simulations/collision-lab", "Explore elastic/inelastic collisions and momentum."],
        ["The Physics Classroom — Momentum & Collisions", "https://www.physicsclassroom.com/class/momentum", "Lessons + practice."],
        ["Khan Academy — Impacts and linear momentum", "https://www.khanacademy.org/science/physics/linear-momentum", "Video lessons."],
        ["IIHS Crash Test Videos", "https://www.iihs.org/ratings", "Real crash tests for crumple-zone analysis."],
        ["OpenStax High School Physics — Momentum", "https://openstax.org/details/books/physics", "Free textbook chapters."]
      ],
      lab: "Lab: Cart collisions on a track — measure velocities before/after with motion sensors or video; test conservation of p. Design challenge: egg-drop or cart-crash protection device with force sensor or predicted stopping time.",
      realWorld: ["Airbags, seat belts, crumple zones", "Football and boxing padding and helmets", "Rocket propulsion", "Billiards and bowling", "Catching a ball by 'giving' with your hands"],
      assessment: [
        ["Vector momentum setup", "Chooses + direction and uses signs correctly"],
        ["Conservation reasoning (HS-PS2-2)", "Uses p_before = p_after with a clear system definition"],
        ["Impulse explanation", "Explains force reduction using Δt with a quantitative example"],
        ["Design (HS-PS2-3)", "Device meets criteria, uses testing data, documents at least one redesign"]
      ]
    },
    // ------------------------------------------------------------------ WORK & ENERGY
    {
      id: "energy", num: 5, title: "Work & Energy", icon: "⚡", weeks: "Weeks 15–18",
      standards: ["HS-PS3-1", "HS-PS3-2", "HS-PS3-3"],
      summary: "Work, kinetic and potential energy, conservation of energy, and power.",
      objectives: [
        "Calculate work done by a force, including angle (W = Fd cosθ).",
        "Calculate kinetic (½mv²), gravitational potential (mgh), and elastic energy.",
        "Apply conservation of energy and the work–energy theorem (HS-PS3-1, HS-PS3-2).",
        "Calculate power and efficiency; track energy transformations, including thermal energy from friction.",
        "Design, test, and refine a device that converts energy from one form to another (HS-PS3-3)."
      ],
      concepts: [
        ["Work", "W = F d cosθ (joules). Only the force component along the displacement does work."],
        ["Kinetic energy", "KE = ½mv². Depends on v²: doubling v quadruples KE."],
        ["Gravitational PE", "PE = mgh, measured relative to a chosen zero height."],
        ["Elastic PE", "PE = ½kx² for a spring."],
        ["Work–energy theorem", "W_net = ΔKE."],
        ["Conservation of energy", "Total energy is constant in an isolated system. KE + PE + thermal = constant."],
        ["Power", "P = W/t = Fv (watts). Efficiency = useful output / input."]
      ],
      vocab: ["work", "joule", "energy", "kinetic energy", "potential energy", "conservation", "power", "watt", "efficiency", "thermal energy", "spring constant"],
      cornell: {
        topic: "Work, Energy & Power",
        rows: [
          ["What is work?", "W = Fd cosθ. Force must cause displacement. Zero work if d = 0 or force ⊥ motion (e.g., carrying a box level)."],
          ["What is kinetic energy?", "KE = ½mv². v is squared — doubling speed → 4× KE (and 4× stopping distance)."],
          ["What is gravitational PE?", "PE = mgh. Depends on height above a chosen reference; only changes in PE matter."],
          ["Work–energy theorem?", "Net work = ΔKE. Positive work speeds up; negative work (friction) slows down."],
          ["Conservation of energy?", "KE_i + PE_i = KE_f + PE_f if no friction. With friction: energy converts to thermal (not lost)."],
          ["Falling object speed?", "mgh = ½mv² → v = √(2gh). Mass cancels; height alone matters."],
          ["What is power?", "P = W/t (W = J/s). A stronger motor does the same work faster."],
          ["What is efficiency?", "Useful energy out ÷ total energy in × 100%. Always < 100% because of thermal losses."]
        ],
        summary: "Work transfers energy. Energy can change form (kinetic, potential, thermal) but the total is conserved. The work–energy theorem and energy bar charts let us solve motion problems without tracking time or forces in detail. Power is the rate of energy transfer."
      },
      quiz: [
        { q: "You carry a heavy box horizontally at constant speed across a room. The work you do on the box is…", o: ["positive", "negative", "zero", "equal to mgh"], a: 2, why: "Your upward force is perpendicular to the horizontal displacement (θ = 90°, cos90° = 0). Effort ≠ work in the physics sense." },
        { q: "A 20 N force pushes a crate 5 m in the direction of the force. Work done is…", o: ["4 J", "25 J", "100 J", "100 W"], a: 2, why: "W = Fd = 20 × 5 = 100 J. Watts measure power, not work." },
        { q: "If a car's speed doubles, its kinetic energy…", o: ["doubles", "triples", "quadruples", "stays the same"], a: 2, why: "KE = ½mv². (2v)² = 4v² → 4×. This is why highway crashes are so much worse." },
        { q: "What is the gravitational potential energy of a 2 kg book 5 m above the floor? (g = 9.8 m/s²)", o: ["10 J", "49 J", "98 J", "196 J"], a: 2, why: "PE = mgh = 2 × 9.8 × 5 = 98 J." },
        { q: "A ball is dropped from 20 m (no air resistance). Its speed just before landing is about…", o: ["14 m/s", "20 m/s", "196 m/s", "39 m/s"], a: 1, why: "v = √(2gh) = √(2·9.8·20) ≈ 19.8 m/s. Forgetting the square root gives 392; mass isn't needed." },
        { q: "A frictionless roller coaster car starts from rest at the top of a hill. At the bottom, compared with the top…", o: ["KE is less, PE is more", "KE is more, PE is less, total is the same", "total energy has increased", "total energy has decreased"], a: 1, why: "PE converts to KE; the sum is conserved." },
        { q: "A motor does 600 J of work in 3 s. Its power output is…", o: ["1800 W", "200 W", "600 W", "3 W"], a: 1, why: "P = W/t = 600/3 = 200 W. Divide, don't multiply." },
        { q: "A sliding box comes to rest because of friction. What happened to its kinetic energy?", o: ["It was destroyed", "It became thermal energy", "It became potential energy", "It became momentum"], a: 1, why: "Energy is conserved. KE transforms to thermal energy (and a little sound). Energy isn't 'used up'." }
      ],
      practice: [
        { p: "A 50 N force at 60° above horizontal drags a sled 10 m. Find the work done.", ans: "W = 50 × 10 × cos60° = 250 J." },
        { p: "Find the KE of a 1000 kg car at 15 m/s and at 30 m/s.", ans: "112,500 J; 450,000 J (4×)." },
        { p: "A 0.2 kg ball is lifted 1.5 m. How much PE does it gain?", ans: "0.2 × 9.8 × 1.5 = 2.94 J." },
        { p: "A 50 kg skateboarder starts from rest at the top of a 3 m frictionless ramp. Find speed at the bottom.", ans: "v = √(2·9.8·3) ≈ 7.7 m/s." },
        { p: "A 60 kg student climbs 4 m of stairs in 5 s. Find work and power.", ans: "W = 60·9.8·4 = 2352 J; P ≈ 470 W." },
        { p: "A 2 kg block slides at 6 m/s and stops after 4 m on a rough floor. Find the friction force.", ans: "ΔKE = −36 J = −f·4 → f = 9 N." },
        { p: "Design task (HS-PS3-3): build a device that converts gravitational PE into motion or electricity and calculate efficiency.", ans: "Measure input PE (mgh) and useful output; efficiency = output ÷ input; propose one improvement." }
      ],
      resources: [
        ["PhET: Energy Skate Park", "https://phet.colorado.edu/en/simulations/energy-skate-park", "Bar charts of KE, PE, and thermal energy."],
        ["PhET: Masses & Springs", "https://phet.colorado.edu/en/simulations/masses-and-springs", "Elastic PE and oscillation."],
        ["The Physics Classroom — Work, Energy & Power", "https://www.physicsclassroom.com/class/energy", "Lessons and practice."],
        ["Khan Academy — Work and energy", "https://www.khanacademy.org/science/physics/work-and-energy", "Video lessons."],
        ["OpenStax High School Physics — Work, Power & Energy", "https://openstax.org/details/books/physics", "Free textbook chapters."],
        ["U.S. Energy Information Administration — Energy Kids", "https://www.eia.gov/kids/", "Real-world energy sources and conversions."]
      ],
      lab: "Lab: Ramp & cart or pendulum — measure height and speed to compare ΔPE with KE, quantify energy lost to friction. Engineering challenge: energy-conversion device (HS-PS3-3).",
      realWorld: ["Roller coasters and skate parks", "Hybrid/electric cars (regenerative braking)", "Hydroelectric dams", "Human power: climbing stairs, cycling", "Energy labels and efficiency ratings"],
      assessment: [
        ["Work & energy calculations", "Correct formula, angle handling, and units (J, W)"],
        ["Conservation reasoning (HS-PS3-1)", "Uses energy bar charts or a spreadsheet model to account for all energy"],
        ["Field/position energy model (HS-PS3-2)", "Models energy as motion vs. stored (position) and explains transformations"],
        ["Device design (HS-PS3-3)", "Meets constraints, calculates efficiency, documents an iteration"]
      ]
    }
  ],
  // Project-wide assessment scheme and mastery scale.
  grading: {
    weights: [["Cornell notes", 15], ["Interactive quizzes (mastery ≥ 80%)", 15], ["Practice problems", 15], ["Labs & design challenges", 25], ["Unit test", 30]],
    scale: [
      ["4 — Advanced", "Accurate and independent; explains why, transfers to new situations."],
      ["3 — Proficient", "Meets the standard with minor errors; correct method, units, and reasoning."],
      ["2 — Developing", "Partial understanding; needs prompts or makes recurring errors."],
      ["1 — Beginning", "Minimal understanding; needs reteaching."]
    ]
  }
};
