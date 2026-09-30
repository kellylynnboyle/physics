// Course content for the 11th-grade Physics learning project.
// Every topic is plain data; app.js renders it. Edit here to change content.
window.COURSE = {
  title: "Physics & Earth Science — Semester 1: Mechanics",
  standardsNote:
    "Learning goals come from the California NGSS Physics & Earth Science course model (CDE: cde.ca.gov/pd/ca/sc/ngssstandards.asp). " +
    "Kinematics and projectile motion are the mathematical tools that support HS-PS2-1.",
  standards: {
    "HS-PS2-1": "Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration.",
    "HS-PS2-2": "Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system.",
    "HS-PS2-3": "Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision.",
    "HS-PS3-1": "Create a computational model to calculate the change in the energy of one component in a system when the change in energy of the other component(s) and energy flows in and out of the system are known.",
    "HS-PS3-2": "Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as a combination of energy associated with the motions of particles and energy associated with the relative positions of particles.",
    "HS-PS3-3": "Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy."
  },
  rubric: [
    { level: "4 – Mastery",     desc: "Explains the concept in own words, solves multi-step problems with units, and corrects a misconception unprompted." },
    { level: "3 – Proficient",  desc: "Solves standard problems correctly with units and a labeled diagram; minor arithmetic slips only." },
    { level: "2 – Developing",  desc: "Identifies the right idea/equation but errors in setup, signs, or units; needs hints on multi-step problems." },
    { level: "1 – Beginning",   desc: "Recalls vocabulary but cannot yet apply equations or diagrams to new situations." }
  ],
  assessment: [
    { what: "Cornell notes (per topic)",           weight: "10%", criteria: "Cues written before studying; notes complete; 3–4 sentence summary; reviewed and self-quizzed." },
    { what: "Interactive quiz (best score, per topic)", weight: "15%", criteria: "≥ 80% = proficient. Retakes allowed; review the 'Why this is missed' explanation first." },
    { what: "Practice problem sets",               weight: "20%", criteria: "GUESS format: Given, Unknown, Equation, Substitute, Solve — with units and a diagram." },
    { what: "Labs & real-world investigation",     weight: "25%", criteria: "Claim–Evidence–Reasoning; graph with best-fit line; uncertainty/source-of-error discussion." },
    { what: "Unit test (NGSS-style tasks)",        weight: "30%", criteria: "Mix of multiple choice, data analysis, and a written CER explanation." }
  ],
  topics: [
  /* ------------------------------------------------------------------ */
  {
    id: "kinematics", name: "Kinematics", icon: "🏃", weeks: "Weeks 1–3",
    standards: ["HS-PS2-1"],
    summary: "Describing motion with position, velocity, and acceleration — in words, equations, and graphs.",
    objectives: [
      "Distinguish distance/displacement and speed/velocity; identify vectors vs. scalars.",
      "Calculate average velocity and acceleration from data, tables, and graphs.",
      "Use the four constant-acceleration equations (v = v₀ + at, Δx = v₀t + ½at², v² = v₀² + 2aΔx, Δx = ½(v₀+v)t).",
      "Interpret position–time and velocity–time graphs (slope and area).",
      "Model free fall with g = 9.8 m/s² downward and explain why the sign of a does not by itself mean 'slowing down'."
    ],
    concepts: [
      ["Scalar vs. vector", "Distance, speed, time are scalars (magnitude). Displacement, velocity, acceleration are vectors (magnitude + direction)."],
      ["Velocity", "v = Δx / Δt. Average speed uses total path length; average velocity uses net displacement."],
      ["Acceleration", "a = Δv / Δt: any change in velocity — speeding up, slowing down, or turning."],
      ["Motion graphs", "x–t slope = velocity. v–t slope = acceleration; v–t area = displacement."],
      ["Free fall", "Only gravity acts; a = 9.8 m/s² downward for every object, up or down, heavy or light (no air resistance)."]
    ],
    cornell: {
      rows: [
        ["What is the difference between distance and displacement?", "Distance = total path traveled (scalar). Displacement = straight-line change in position, with direction (vector). Round trip → displacement = 0."],
        ["Speed vs. velocity?", "Speed = distance/time (scalar). Velocity = displacement/time (vector). v_avg = Δx/Δt."],
        ["Define acceleration.", "Rate of change of velocity: a = (v − v₀)/t. Units m/s². Positive/negative gives direction, not 'speeding up/slowing down'."],
        ["When is an object speeding up?", "When v and a point the SAME direction (same sign). Opposite signs → slowing down."],
        ["List the constant-a equations.", "v = v₀ + at;  Δx = v₀t + ½at²;  v² = v₀² + 2aΔx;  Δx = ½(v₀ + v)t.  Pick the one missing the variable you don't have."],
        ["What do the graphs tell you?", "x–t: slope = v. v–t: slope = a, area under curve = Δx. Flat v–t line = constant velocity (a = 0)."],
        ["Free-fall facts?", "a = −9.8 m/s² (down) the whole trip. At the top of a toss v = 0 but a is still 9.8 m/s² down. Drop from rest: y = ½gt²."]
      ],
      summary: "Kinematics describes how things move without asking why. Vectors carry direction, so displacement and velocity can be zero or negative even when distance and speed are not. Acceleration is the change in velocity, and the constant-acceleration equations plus v–t graphs let us predict position and speed. In free fall, gravity gives every object the same 9.8 m/s² downward acceleration."
    },
    quiz: [
      { q: "A runner completes one lap of a 400 m track in 80 s. What is the runner's average velocity for the lap?",
        opts: ["5 m/s", "0 m/s", "400 m/s", "80 m/s"], a: 1,
        why: "Velocity uses displacement. Start and finish are the same point, so displacement = 0 and average velocity = 0. (Average SPEED is 5 m/s.) Students most often mix up the two." },
      { q: "A ball is tossed straight up. At the very top of its path, what are its velocity and acceleration?",
        opts: ["v = 0, a = 0", "v = 0, a = 9.8 m/s² downward", "v = 9.8 m/s up, a = 0", "v = 0, a = 9.8 m/s² upward"], a: 1,
        why: "Gravity never turns off. Velocity is momentarily zero as it changes direction, but the acceleration is still 9.8 m/s² downward. 'v = 0 means a = 0' is the #1 kinematics misconception." },
      { q: "A car speeds up from rest to 20 m/s in 5 s at constant acceleration. How far does it travel in those 5 s?",
        opts: ["100 m", "50 m", "20 m", "4 m"], a: 1,
        why: "a = 20/5 = 4 m/s². Δx = ½at² = ½(4)(25) = 50 m. (100 m comes from wrongly using v·t, which assumes the car was at top speed the whole time.)" },
      { q: "A car's velocity is −6 m/s (moving west) and its acceleration is −2 m/s². The car is…",
        opts: ["slowing down", "speeding up", "moving at constant speed", "stopped"], a: 1,
        why: "Same sign for v and a means speeding up — even though both are negative. A negative acceleration does not automatically mean slowing down." },
      { q: "On a velocity–time graph, the AREA under the curve represents…",
        opts: ["acceleration", "displacement", "speed", "time"], a: 1,
        why: "Units check: (m/s)·s = m. Slope of a v–t graph is acceleration; area is displacement. Students often swap the two." },
      { q: "A rock is dropped from rest from a cliff. How far has it fallen after 3.0 s? (Ignore air resistance, g = 9.8 m/s²)",
        opts: ["14.7 m", "29.4 m", "44.1 m", "88.2 m"], a: 2,
        why: "Δy = ½gt² = ½(9.8)(3²) = 44.1 m. The 29.4 m answer is v (= gt) — a speed, not a distance." },
      { q: "Which quantity is a vector?",
        opts: ["Speed", "Distance", "Displacement", "Time"], a: 2,
        why: "Displacement has magnitude and direction. Speed, distance, and time are scalars." }
    ],
    problems: [
      { p: "A cyclist speeds up from 4.0 m/s to 10.0 m/s in 3.0 s. Find her acceleration and the distance covered.", ans: "a = 2.0 m/s²; Δx = ½(4+10)(3) = 21 m" },
      { p: "A car traveling 25 m/s brakes uniformly at −5.0 m/s². How far does it take to stop?", ans: "0 = 25² + 2(−5)Δx → Δx = 62.5 m" },
      { p: "A ball is dropped from a 45 m building. How long until it hits the ground, and how fast is it going?", ans: "t = √(2·45/9.8) ≈ 3.0 s; v = gt ≈ 30 m/s" },
      { p: "Sketch v–t and x–t graphs for an object that speeds up from rest, then moves at constant velocity, then stops.", ans: "v–t: rising line → flat line → falling line to zero. x–t: upward curve → straight rising line → flat." },
      { p: "A ball is thrown up at 14.7 m/s. Find the max height and the total time in the air.", ans: "h = v²/2g = 11.0 m; t = 2v/g = 3.0 s" }
    ],
    resources: [
      ["PhET: The Moving Man", "https://phet.colorado.edu/en/simulations/moving-man", "Sim — link position, velocity, acceleration graphs"],
      ["The Physics Classroom: 1-D Kinematics", "https://www.physicsclassroom.com/class/1DKin", "Tutorial + practice"],
      ["Khan Academy: One-dimensional motion", "https://www.khanacademy.org/science/physics/one-dimensional-motion", "Video + exercises"],
      ["OpenStax High School Physics, Ch. 2", "https://openstax.org/details/books/physics", "Free textbook"],
      ["IXL Physics (Motion skills)", "https://www.ixl.com/", "Adaptive practice"]
    ],
    realWorld: [
      "Traffic safety: stopping distance grows with the SQUARE of speed (v² = 2aΔx) — why speed limits near schools are low.",
      "Sports analytics: sprint splits and acceleration phases in track.",
      "Aviation: runway length needed for takeoff from a = Δv/Δt.",
      "Lab idea: cart on a track with a motion sensor — verify Δx = ½at² from data."
    ]
  },
  /* ------------------------------------------------------------------ */
  {
    id: "projectile", name: "Projectile Motion", icon: "🏀", weeks: "Weeks 4–5",
    standards: ["HS-PS2-1"],
    summary: "Two-dimensional motion: horizontal and vertical components are independent.",
    objectives: [
      "Resolve a launch velocity into horizontal (v cosθ) and vertical (v sinθ) components.",
      "Explain why horizontal velocity is constant and vertical acceleration is g.",
      "Predict time of flight, maximum height, and range for horizontal and angled launches.",
      "Compare trajectories at different angles, including complementary angles.",
      "Design and test a launch to hit a target and explain the difference between prediction and result (air resistance, measurement)."
    ],
    concepts: [
      ["Independence of components", "Horizontal and vertical motions happen at the same time but do not affect each other. Time links them."],
      ["Horizontal motion", "a_x = 0, so v_x is constant: x = v_x·t."],
      ["Vertical motion", "a_y = −9.8 m/s²: y = v_y0·t − ½gt²; v_y = v_y0 − gt."],
      ["Launch components", "v_x = v cosθ, v_y0 = v sinθ."],
      ["Range and angle", "R = v² sin(2θ) / g (level ground). Max at 45°; complementary angles (30°/60°) give equal ranges."]
    ],
    cornell: {
      rows: [
        ["What is a projectile?", "Any object moving under gravity alone after launch (no engine, ignore air resistance). Path is a parabola."],
        ["Key idea: independence", "Split motion into x and y. Solve each separately. Only TIME is shared."],
        ["Horizontal rules", "a_x = 0 → v_x constant → x = v_x·t. Never zero at the peak (unless launched straight up)."],
        ["Vertical rules", "a_y = −9.8 m/s². At peak v_y = 0. Up-time = down-time on level ground. Use kinematics equations with g."],
        ["How to split an angled launch", "v_x = v·cosθ, v_y = v·sinθ. Draw the right triangle first!"],
        ["Horizontal launch off a cliff", "v_y0 = 0. t = √(2h/g). Range = v_x·t. Falls the same time as a dropped object."],
        ["Range and 45°", "R = v²sin2θ/g. 45° is max; θ and (90°−θ) give the same range."]
      ],
      summary: "A projectile's horizontal and vertical motions are independent. Horizontally it coasts at constant velocity; vertically it accelerates at 9.8 m/s² downward. Break the launch velocity into components, use time to connect them, and remember that the vertical velocity is zero at the peak while the horizontal velocity is not. On level ground, 45° gives maximum range and complementary angles give the same range."
    },
    quiz: [
      { q: "One ball is dropped from a table while a second ball is rolled horizontally off the same table at the same moment. Which hits the floor first?",
        opts: ["The dropped ball", "The rolled ball", "They land at the same time", "It depends on the mass"], a: 2,
        why: "Vertical motion is identical (both start with v_y = 0, same height, same g). Horizontal velocity does not change fall time." },
      { q: "At the highest point of a projectile's flight (launched at an angle), which statement is true?",
        opts: ["Velocity is zero", "Horizontal velocity is zero", "Vertical velocity is zero, horizontal velocity is unchanged", "Acceleration is zero"], a: 2,
        why: "Only v_y = 0 at the peak. v_x stays constant the whole flight, and gravity still accelerates the object downward." },
      { q: "A ball is launched at 20 m/s at 30° above horizontal on level ground. About how far does it travel? (g = 9.8 m/s²)",
        opts: ["20 m", "35 m", "41 m", "70 m"], a: 1,
        why: "v_y = 10 m/s → t = 2(10)/9.8 = 2.04 s. v_x = 17.3 m/s. R = 17.3 × 2.04 ≈ 35 m. (Using v directly instead of v_x gives the wrong 41 m.)" },
      { q: "What is the acceleration of a projectile in flight (ignoring air resistance)?",
        opts: ["0 horizontally and 9.8 m/s² downward", "9.8 m/s² downward in both directions", "Changes as it rises and falls", "Zero at the peak"], a: 0,
        why: "Gravity acts only downward. Horizontal acceleration is 0; vertical acceleration is constant 9.8 m/s² down at every point." },
      { q: "A stone is kicked horizontally at 15 m/s from a 20 m cliff. About how far from the base does it land?",
        opts: ["15 m", "30 m", "45 m", "300 m"], a: 1,
        why: "t = √(2h/g) = √(40/9.8) ≈ 2.02 s. x = v_x·t = 15 × 2.02 ≈ 30 m." },
      { q: "Ignoring air resistance, which pair of launch angles gives the SAME range at the same speed?",
        opts: ["30° and 45°", "30° and 60°", "20° and 50°", "45° and 90°"], a: 1,
        why: "Complementary angles (adding to 90°) give equal range, since sin2θ = sin(180° − 2θ). 30° and 60° are complementary." },
      { q: "Which launch angle gives the greatest range on level ground (no air resistance)?",
        opts: ["30°", "45°", "60°", "90°"], a: 1,
        why: "R ∝ sin 2θ which peaks at 2θ = 90°, so θ = 45°. (90° goes straight up: range 0.)" }
    ],
    problems: [
      { p: "A ball is thrown horizontally at 8.0 m/s from a 1.5 m-high table. Find the time of flight and range.", ans: "t = √(2·1.5/9.8) = 0.55 s; x = 8.0 × 0.55 ≈ 4.4 m" },
      { p: "A soccer ball is kicked at 25 m/s at 40°. Find v_x and v_y0.", ans: "v_x = 25cos40° ≈ 19.2 m/s; v_y0 = 25sin40° ≈ 16.1 m/s" },
      { p: "For the ball above, find the time in the air and the maximum height.", ans: "t = 2(16.1)/9.8 ≈ 3.3 s; h = 16.1²/(2·9.8) ≈ 13.2 m" },
      { p: "A cannon on level ground fires at 50 m/s at 45°. What is the range?", ans: "R = 50² sin90°/9.8 ≈ 255 m" },
      { p: "Explain (CER) why a monkey dropped at the instant a dart is fired at it will be hit if the dart is aimed straight at the monkey.", ans: "Both fall the same vertical distance ½gt² in the same time, so the dart's gravitational drop matches the monkey's." }
    ],
    resources: [
      ["PhET: Projectile Motion", "https://phet.colorado.edu/en/simulations/projectile-motion", "Sim — change angle, speed, air resistance"],
      ["The Physics Classroom: Vectors & Projectiles", "https://www.physicsclassroom.com/class/vectors", "Tutorial + practice"],
      ["Khan Academy: Two-dimensional projectile motion", "https://www.khanacademy.org/science/physics/two-dimensional-motion", "Video + exercises"],
      ["Flipping Physics: Projectile motion", "https://www.flippingphysics.com/", "Video walkthroughs"],
      ["OpenStax High School Physics, Ch. 2 & 3", "https://openstax.org/details/books/physics", "Free textbook"]
    ],
    realWorld: [
      "Basketball free throws and football passes — arc height vs. launch angle.",
      "Long jump and javelin: optimal launch angles (< 45° because the athlete releases above ground).",
      "Water fountains and fire hoses — parabolic streams.",
      "Lab idea: launch a marble from a ramp, predict landing spot on the floor, then place a cup to test."
    ]
  },
  /* ------------------------------------------------------------------ */
  {
    id: "newton", name: "Newton's Laws", icon: "🍎", weeks: "Weeks 6–9",
    standards: ["HS-PS2-1"],
    summary: "Forces explain motion: inertia, F = ma, and action–reaction pairs.",
    objectives: [
      "State and apply Newton's 1st, 2nd, and 3rd laws to everyday situations.",
      "Draw free-body diagrams and find net force (including friction, normal, tension, weight).",
      "Use ΣF = ma to solve for acceleration, force, or mass (HS-PS2-1: analyze data showing a ∝ F and a ∝ 1/m).",
      "Distinguish mass from weight (W = mg) and identify action–reaction pairs correctly.",
      "Calculate friction with f = μN and analyze apparent weight in an accelerating elevator."
    ],
    concepts: [
      ["1st Law (inertia)", "An object keeps its velocity (rest or constant velocity) unless a net external force acts. Zero net force ≠ zero motion."],
      ["2nd Law", "ΣF = ma. Acceleration is directly proportional to net force and inversely proportional to mass. 1 N = 1 kg·m/s²."],
      ["3rd Law", "Forces come in pairs: same type, equal magnitude, opposite direction, acting on DIFFERENT objects."],
      ["Weight and normal force", "W = mg (a force, in N); mass is in kg and does not change with location. N is a contact force perpendicular to the surface."],
      ["Friction", "Kinetic friction f_k = μ_k N opposes sliding. Static friction adjusts up to μ_s N."]
    ],
    cornell: {
      rows: [
        ["Newton's 1st Law", "Inertia: no net force → constant velocity (including zero). Force is needed to CHANGE motion, not to maintain it."],
        ["Newton's 2nd Law", "ΣF = ma → a = ΣF/m. Direction of a = direction of net force. Units: N = kg·m/s²."],
        ["Newton's 3rd Law", "A on B ⇒ B on A: equal magnitude, opposite direction, DIFFERENT objects, same type of force."],
        ["Free-body diagram (FBD)", "Draw the object as a dot; show only forces ON it (weight, normal, tension, friction, applied). Add components, then ΣF."],
        ["Mass vs. weight", "Mass (kg): amount of matter, constant. Weight (N): W = mg, depends on g. 60 kg → 588 N on Earth."],
        ["Friction", "f = μN. Kinetic < max static. Friction is parallel to the surface, opposes relative motion."],
        ["Elevator / apparent weight", "N − mg = ma. Accelerating up: N > mg (feel heavier). Accelerating down: N < mg. Constant v: N = mg."]
      ],
      summary: "Newton's laws connect force and motion. With no net force, velocity stays constant; with a net force, acceleration equals net force divided by mass; and every force has an equal and opposite partner acting on a different object. Free-body diagrams turn a situation into ΣF = ma equations. Weight is a force (mg), mass is not, and friction (μN) opposes sliding."
    },
    quiz: [
      { q: "A book rests on a table. Which force is the Newton's THIRD-law partner of the book's weight (Earth pulling down on the book)?",
        opts: ["The table pushing up on the book (normal force)", "The book pulling up on Earth", "The book pushing down on the table", "Friction from the table"], a: 1,
        why: "Third-law pairs act on different objects and are the same type. Earth pulls the book (gravity) ↔ book pulls Earth (gravity). The normal force equals the weight only because the net force is zero (1st law)." },
      { q: "A 10 kg cart experiences a net force of 30 N. What is its acceleration?",
        opts: ["0.33 m/s²", "3 m/s²", "30 m/s²", "300 m/s²"], a: 1,
        why: "a = F/m = 30/10 = 3 m/s². (0.33 comes from dividing mass by force.)" },
      { q: "A large truck collides head-on with a small car. During the collision, the force of the truck on the car is…",
        opts: ["larger than the force of the car on the truck", "smaller than the force of the car on the truck", "equal to the force of the car on the truck", "zero, because the truck doesn't accelerate"], a: 2,
        why: "3rd law: equal magnitude, opposite direction. The car has a much bigger acceleration because its mass is smaller (a = F/m)." },
      { q: "A hockey puck slides across ice at constant velocity (ignore friction). What is the net force on the puck?",
        opts: ["Equal to its weight", "In the direction of motion", "Zero", "Decreasing"], a: 2,
        why: "Constant velocity means a = 0, so ΣF = 0. Motion does not require a force — the 'force of motion' idea is a common misconception." },
      { q: "A 60 kg person stands in an elevator accelerating UPWARD at 2.0 m/s². What is the normal force on the person? (g = 9.8 m/s²)",
        opts: ["468 N", "588 N", "708 N", "120 N"], a: 2,
        why: "N − mg = ma → N = m(g + a) = 60(9.8 + 2.0) = 708 N. Accelerating up makes you 'feel heavier'." },
      { q: "An astronaut travels from Earth to the Moon. Which changes?",
        opts: ["Mass only", "Weight only", "Both mass and weight", "Neither"], a: 1,
        why: "Mass (amount of matter) is constant. Weight W = mg changes because g on the Moon is about 1.6 m/s²." },
      { q: "A 20 kg crate slides on a horizontal floor with μ_k = 0.30. What is the kinetic friction force? (g = 9.8 m/s²)",
        opts: ["6 N", "59 N", "196 N", "0.3 N"], a: 1,
        why: "N = mg = 196 N; f = μN = 0.30 × 196 ≈ 59 N. (196 N is the normal force, not the friction.)" }
    ],
    problems: [
      { p: "A 1200 kg car accelerates at 2.5 m/s². What net force acts on it?", ans: "F = ma = 3000 N" },
      { p: "A 5.0 kg box is pushed with 40 N; friction is 15 N. Find its acceleration.", ans: "ΣF = 25 N; a = 25/5.0 = 5.0 m/s²" },
      { p: "Draw the FBD for a 2.0 kg block hanging from a rope at rest. Find the tension.", ans: "T = mg = 19.6 N (up); weight 19.6 N (down); ΣF = 0" },
      { p: "Two blocks (3 kg and 2 kg) are pushed together by a 20 N force on a frictionless floor. Find acceleration and the force between blocks.", ans: "a = 20/5 = 4 m/s²; force on 2 kg block = 2(4) = 8 N" },
      { p: "A 70 kg person stands in an elevator moving DOWN at constant speed, then accelerating down at 1.5 m/s². Find the scale reading in each case.", ans: "Constant v: 686 N. Accelerating down: 70(9.8 − 1.5) = 581 N" }
    ],
    resources: [
      ["PhET: Forces and Motion — Basics", "https://phet.colorado.edu/en/simulations/forces-and-motion-basics", "Sim — net force & friction"],
      ["PhET: Friction", "https://phet.colorado.edu/en/simulations/friction", "Sim — microscopic view"],
      ["The Physics Classroom: Newton's Laws", "https://www.physicsclassroom.com/class/newtlaws", "Tutorial + practice"],
      ["Khan Academy: Forces and Newton's laws", "https://www.khanacademy.org/science/physics/forces-newtons-laws", "Video + exercises"],
      ["Crash Course Physics: Newton's Laws", "https://www.youtube.com/@crashcourse", "Video"]
    ],
    realWorld: [
      "Seat belts and airbags — inertia during a crash (1st law).",
      "Rocket propulsion — action–reaction (3rd law).",
      "Tire tread and ABS brakes — maximizing friction.",
      "Lab idea: Atwood machine or cart-and-hanging-mass to plot a vs. F and verify HS-PS2-1."
    ]
  },
  /* ------------------------------------------------------------------ */
  {
    id: "momentum", name: "Momentum", icon: "🎱", weeks: "Weeks 10–12",
    standards: ["HS-PS2-2", "HS-PS2-3"],
    summary: "Mass in motion: impulse, collisions, and conservation of momentum.",
    objectives: [
      "Calculate momentum p = mv and treat it as a vector (sign = direction).",
      "Relate impulse to change in momentum: FΔt = Δp.",
      "Apply conservation of momentum to collisions and explosions (HS-PS2-2).",
      "Classify collisions as elastic, inelastic, or perfectly inelastic using kinetic energy.",
      "Design a device (e.g., egg-drop or crumple zone) that reduces collision force by increasing contact time (HS-PS2-3)."
    ],
    concepts: [
      ["Momentum", "p = mv (kg·m/s), a vector in the direction of velocity."],
      ["Impulse", "J = FΔt = Δp. Same Δp with longer time → smaller average force."],
      ["Conservation of momentum", "In a closed system with no net external force, total p before = total p after."],
      ["Types of collisions", "Elastic: momentum and KE conserved. Inelastic: momentum conserved, KE lost. Perfectly inelastic: objects stick."],
      ["Explosions / recoil", "Start at rest → total p = 0, so pieces move in opposite directions with equal-magnitude momentum."]
    ],
    cornell: {
      rows: [
        ["Define momentum.", "p = mv. Vector; units kg·m/s. Heavier or faster → more momentum."],
        ["Define impulse.", "J = FΔt = Δp = mv_f − mv_i. Area under a F–t graph."],
        ["Why do airbags help?", "They extend Δt, so the same Δp requires a smaller average force (F = Δp/Δt)."],
        ["Law of conservation of momentum", "Σp_before = Σp_after when no net external force. m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′."],
        ["Elastic vs. inelastic", "Momentum is ALWAYS conserved in an isolated system. KE conserved only in elastic. Sticking together = perfectly inelastic."],
        ["Bounce vs. stop", "Bouncing back gives a bigger Δp than stopping: Δp = m(v_f − v_i) with opposite signs."],
        ["Recoil problems", "Initially at rest → p_total = 0. m₁v₁ = −m₂v₂. Lighter object moves faster."]
      ],
      summary: "Momentum (mass × velocity) is a vector that describes how hard it is to stop a moving object. An impulse — force times time — changes momentum, which is why crumple zones and airbags save lives. In an isolated system total momentum is conserved in every collision, but kinetic energy is only conserved in elastic ones. Choose a positive direction and keep track of signs."
    },
    quiz: [
      { q: "What is the momentum of a 1500 kg car traveling at 20 m/s?",
        opts: ["75 kg·m/s", "3,000 kg·m/s", "30,000 kg·m/s", "300,000 kg·m/s"], a: 2,
        why: "p = mv = 1500 × 20 = 30,000 kg·m/s. Momentum is NOT ½mv² (that is kinetic energy)." },
      { q: "Airbags reduce injury in a crash mainly because they…",
        opts: ["reduce the change in momentum", "increase the time of the collision, reducing the average force", "increase the impulse on the passenger", "reduce the passenger's mass"], a: 1,
        why: "The change in momentum is the same either way. FΔt = Δp, so a longer Δt means a smaller F." },
      { q: "A 2 kg cart moving at 6 m/s collides with a 4 kg cart at rest, and they stick together. What is their speed afterward?",
        opts: ["1 m/s", "2 m/s", "3 m/s", "6 m/s"], a: 1,
        why: "(2)(6) = (2 + 4)v → v = 12/6 = 2 m/s. Students often forget to add both masses after sticking." },
      { q: "In an inelastic collision (in an isolated system), which quantity is conserved?",
        opts: ["Kinetic energy only", "Momentum only", "Both momentum and kinetic energy", "Neither"], a: 1,
        why: "Momentum is conserved in every collision of an isolated system. Kinetic energy is transformed into heat, sound, and deformation in inelastic collisions." },
      { q: "A 0.50 kg ball hits a wall at 4.0 m/s and bounces straight back at 4.0 m/s. What is the magnitude of its change in momentum?",
        opts: ["0 kg·m/s", "2.0 kg·m/s", "4.0 kg·m/s", "8.0 kg·m/s"], a: 2,
        why: "Take toward the wall as +: Δp = 0.5(−4) − 0.5(+4) = −4.0 kg·m/s. Speed is unchanged, but velocity reversed. Ignoring the sign gives the common wrong answer 0." },
      { q: "Two skaters at rest push apart. The 60 kg skater moves 2 m/s to the right. How fast does the 40 kg skater move?",
        opts: ["2 m/s left", "3 m/s left", "3 m/s right", "1.3 m/s left"], a: 1,
        why: "Total p = 0: 60(2) + 40v = 0 → v = −3 m/s. The lighter skater moves faster, in the opposite direction." },
      { q: "Two equal-mass carts approach each other head-on at equal speeds and stick together. What is their velocity after the collision?",
        opts: ["Equal to the original speed", "Half the original speed", "Zero", "Twice the original speed"], a: 2,
        why: "Momentum is a vector: +mv + (−mv) = 0, so the stuck carts stop. (KE is lost, but momentum is conserved at 0.)" }
    ],
    problems: [
      { p: "A 0.145 kg baseball is pitched at 40 m/s and hit back at 50 m/s in the opposite direction. Find the impulse.", ans: "J = 0.145(−50 − 40) ≈ −13 N·s (13 N·s magnitude)" },
      { p: "If the bat–ball contact lasts 0.0010 s, find the average force.", ans: "F = 13/0.0010 ≈ 13,000 N" },
      { p: "A 1000 kg car moving 15 m/s rear-ends a 1500 kg car at rest; they lock together. Find their speed.", ans: "v = 15,000/2,500 = 6.0 m/s" },
      { p: "A 5.0 kg rifle fires a 0.020 kg bullet at 400 m/s. Find the rifle's recoil speed.", ans: "v = 0.020(400)/5.0 = 1.6 m/s backward" },
      { p: "Design challenge: build a package that protects an egg dropped from 2 m. Explain using impulse (HS-PS2-3).", ans: "Increase stopping time/distance (padding, crumple zones) to reduce average force; include measurements and CER." }
    ],
    resources: [
      ["PhET: Collision Lab", "https://phet.colorado.edu/en/simulations/collision-lab", "Sim — elastic vs inelastic, momentum vectors"],
      ["The Physics Classroom: Momentum & Collisions", "https://www.physicsclassroom.com/class/momentum", "Tutorial + practice"],
      ["Khan Academy: Momentum", "https://www.khanacademy.org/science/physics/linear-momentum", "Video + exercises"],
      ["HyperPhysics: Momentum", "http://hyperphysics.phy-astr.gsu.edu/hbase/mom.html", "Concept map"],
      ["Crash test videos (IIHS)", "https://www.iihs.org/", "Real-world evidence"]
    ],
    realWorld: [
      "Vehicle safety: crumple zones, seat belts, airbags, helmets.",
      "Sports: follow-through in golf/baseball to increase contact time; catching a ball by 'giving' with hands.",
      "Rockets and jet engines: conservation of momentum.",
      "Lab idea: dynamics carts with force sensors — measure impulse from F–t graph and compare to Δp."
    ]
  },
  /* ------------------------------------------------------------------ */
  {
    id: "energy", name: "Work & Energy", icon: "⚡", weeks: "Weeks 13–16",
    standards: ["HS-PS3-1", "HS-PS3-2", "HS-PS3-3"],
    summary: "Work transfers energy; energy changes form but is conserved.",
    objectives: [
      "Calculate work W = Fd cosθ and explain when work is positive, negative, or zero.",
      "Calculate kinetic (½mv²), gravitational potential (mgh), and elastic potential (½kx²) energy.",
      "Apply the work–energy theorem (W_net = ΔKE) and conservation of mechanical energy.",
      "Calculate power P = W/t and efficiency.",
      "Build/evaluate a model or device that transforms energy and account for energy 'lost' to thermal energy (HS-PS3-1, 3-2, 3-3)."
    ],
    concepts: [
      ["Work", "W = Fd cosθ (joules). Only the force component along the displacement does work."],
      ["Kinetic energy", "KE = ½mv². Depends on the SQUARE of speed."],
      ["Potential energy", "Gravitational: PE = mgh. Elastic (spring): PE = ½kx²."],
      ["Conservation of energy", "Energy is transformed, never created or destroyed. With no friction, KE + PE = constant; with friction, some becomes thermal energy."],
      ["Power", "P = W/t (watts). 1 W = 1 J/s."]
    ],
    cornell: {
      rows: [
        ["Define work.", "W = Fd cosθ, in joules (N·m). Force must cause displacement along its direction. Perpendicular force → W = 0."],
        ["Positive / negative / zero work?", "Positive: force with motion. Negative: force against motion (friction). Zero: F ⊥ d, or no displacement."],
        ["Kinetic energy", "KE = ½mv². Double speed → 4× KE."],
        ["Gravitational PE", "PE = mgh (relative to a chosen zero level). Depends on height only, not path."],
        ["Work–energy theorem", "W_net = ΔKE = ½mv_f² − ½mv_i²."],
        ["Conservation of energy", "KE_i + PE_i = KE_f + PE_f (no friction). With friction: KE_i + PE_i = KE_f + PE_f + thermal."],
        ["Power & efficiency", "P = W/t = Fv. Efficiency = useful output / total input × 100%."]
      ],
      summary: "Work is the transfer of energy by a force acting through a distance. Kinetic energy grows with the square of speed, and potential energy stores energy in height (mgh) or springs (½kx²). Energy is conserved: it changes form (e.g., PE → KE → thermal) but the total stays constant. Power measures how fast energy is transferred, and efficiency compares useful output to input."
    },
    quiz: [
      { q: "A student carries a heavy box horizontally at constant velocity across a room. How much work does the student's upward force do on the box?",
        opts: ["Positive work", "Negative work", "Zero work", "Work equal to mgd"], a: 2,
        why: "The lifting force is perpendicular to the displacement (cos 90° = 0), so it does no work — even though it feels tiring." },
      { q: "A car doubles its speed. Its kinetic energy…",
        opts: ["doubles", "triples", "quadruples", "stays the same"], a: 2,
        why: "KE = ½mv². Doubling v multiplies KE by 2² = 4. This is why stopping distance quadruples at double the speed." },
      { q: "A 2.0 kg ball is dropped from 5.0 m. How fast is it moving just before it hits the ground? (Ignore air; g = 9.8 m/s²)",
        opts: ["4.9 m/s", "7.0 m/s", "9.9 m/s", "49 m/s"], a: 2,
        why: "mgh = ½mv² → v = √(2gh) = √(2 × 9.8 × 5.0) ≈ 9.9 m/s. Mass cancels." },
      { q: "A motor does 600 J of work in 3.0 s. What is its power?",
        opts: ["200 W", "1800 W", "600 W", "0.005 W"], a: 0,
        why: "P = W/t = 600 / 3.0 = 200 W. (Students often multiply instead of divide.)" },
      { q: "Two identical crates are raised to the same height: one lifted straight up, the other pushed up a frictionless ramp. Compare the work done.",
        opts: ["More work on the ramp", "More work lifting straight up", "Equal work", "Cannot be determined"], a: 2,
        why: "Both gain the same mgh. The ramp uses a smaller force over a longer distance, but the work (energy transferred) is the same." },
      { q: "A spring with k = 200 N/m is compressed 0.10 m. How much elastic potential energy is stored?",
        opts: ["1.0 J", "2.0 J", "10 J", "20 J"], a: 0,
        why: "PE = ½kx² = ½(200)(0.10)² = 1.0 J. Forgetting to square x (or the ½) gives 2 J or 20 J." },
      { q: "A 1000 kg car speeds up from 10 m/s to 20 m/s. How much net work was done on it?",
        opts: ["10,000 J", "150,000 J", "200,000 J", "300,000 J"], a: 1,
        why: "W = ΔKE = ½(1000)(20² − 10²) = 500 × 300 = 150,000 J. Do not simply take ½m(Δv)² = 50,000 J." },
      { q: "A roller-coaster car starts from rest at the top of a 30 m hill and rolls down a frictionless track with dips and smaller hills. What determines its speed at any point?",
        opts: ["The length of track traveled", "Its height below the start", "The number of curves", "Nothing — speed is random"], a: 1,
        why: "Energy conservation: ½mv² = mg(h_start − h). Speed depends only on the height difference, not the path." }
    ],
    problems: [
      { p: "A 50 N force pulls a sled 10 m along the ground at 30° above horizontal. How much work is done?", ans: "W = 50(10)cos30° ≈ 433 J" },
      { p: "A 0.50 kg ball is thrown straight up at 12 m/s. Find its maximum height using energy conservation.", ans: "h = v²/2g = 144/19.6 ≈ 7.3 m" },
      { p: "A 70 kg hiker climbs 300 m in 1.0 hour. Find work done against gravity and average power.", ans: "W = mgh = 70(9.8)(300) ≈ 2.06×10⁵ J; P ≈ 57 W" },
      { p: "A 1200 kg car moving 25 m/s brakes to a stop over 50 m. Find the average braking force.", ans: "W = −½mv² = −3.75×10⁵ J → F = 7,500 N" },
      { p: "Energy audit: a light bulb uses 60 W but gives 6 W of light. Find efficiency and where the rest goes.", ans: "Efficiency = 10%; the other 54 W becomes thermal energy." }
    ],
    resources: [
      ["PhET: Energy Skate Park", "https://phet.colorado.edu/en/simulations/energy-skate-park", "Sim — KE/PE/thermal bar charts"],
      ["PhET: Masses & Springs", "https://phet.colorado.edu/en/simulations/masses-and-springs", "Sim — elastic PE"],
      ["The Physics Classroom: Work, Energy & Power", "https://www.physicsclassroom.com/class/energy", "Tutorial + practice"],
      ["Khan Academy: Work and energy", "https://www.khanacademy.org/science/physics/work-and-energy", "Video + exercises"],
      ["OpenStax High School Physics, Ch. 5", "https://openstax.org/details/books/physics", "Free textbook"]
    ],
    realWorld: [
      "Roller coasters, skate parks, pendulums — PE ↔ KE.",
      "Hybrid/electric cars: regenerative braking converts KE back into stored energy.",
      "Hydroelectric dams and wind turbines: PE and KE → electricity (HS-PS3-3).",
      "Lab idea: ramp-and-car — measure height & speed to test energy conservation and estimate energy lost to friction."
    ]
  }
  ]
};
