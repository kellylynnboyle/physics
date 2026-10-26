/* Single source of truth for the course project.
 * Used by the browser app (site/js/app.js) and by scripts/build-docs.js,
 * which generates the shareable Markdown in docs/.
 * Content is plain text (no HTML); the app escapes it on render. */
const COURSE = {
  title: "Physics & Earth Science — Semester 1: Mechanics",
  grade: "11th grade (California NGSS Physics & Earth Science course model)",
  standardsUrl: "https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp",
  g: 9.8,

  /* Kinematics is not its own NGSS performance expectation; it is the
   * mathematical language students need for HS-PS2-1, so it is mapped there. */
  rubric: [
    { level: 4, name: "Advanced", desc: "Explains and applies the idea in new situations, connects it to other topics, and catches/explains common misconceptions." },
    { level: 3, name: "Proficient", desc: "Solves standard problems correctly with units, diagrams and a clear reasoning chain. This is the goal for every student." },
    { level: 2, name: "Approaching", desc: "Understands the main idea but makes errors in setup, signs, units or algebra; needs scaffolds on multi-step problems." },
    { level: 1, name: "Beginning", desc: "Recalls vocabulary or isolated facts; cannot yet set up or solve a problem independently." }
  ],
  weights: [
    { category: "Unit quizzes & exit tickets (formative)", pct: 15 },
    { category: "Problem sets / IXL practice", pct: 15 },
    { category: "Labs & lab reports (CER format)", pct: 25 },
    { category: "Performance task / engineering design", pct: 10 },
    { category: "Unit test (summative)", pct: 35 }
  ],

  units: [
    /* ------------------------------------------------------------------ */
    {
      id: "kinematics", title: "Kinematics", short: "1-D motion",
      ngss: [
        { code: "HS-PS2-1", text: "Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration. (Kinematics supplies the motion data and graphs.)" },
        { code: "SEP", text: "Analyzing and interpreting data; using mathematics and computational thinking." },
        { code: "CCC", text: "Patterns; cause and effect; scale, proportion, and quantity." }
      ],
      objectives: [
        "Distinguish distance from displacement and speed from velocity, and give the sign (direction) of a vector quantity.",
        "Define acceleration as the rate of change of velocity and predict whether an object speeds up or slows down from the signs of v and a.",
        "Read and sketch position-time, velocity-time and acceleration-time graphs; use slope and area correctly.",
        "Select and apply the constant-acceleration equations to solve multi-step problems with units.",
        "Model free fall with a = 9.8 m/s² downward and explain why mass does not change fall time (no air resistance).",
        "Collect motion data (motion sensor or video analysis) and use it to support a claim about constant velocity or constant acceleration."
      ],
      concepts: [
        { term: "Scalar vs. vector", def: "Scalars have size only (distance, speed, time). Vectors have size and direction (displacement, velocity, acceleration)." },
        { term: "Displacement (Δx)", def: "Change in position: final minus initial. Can be zero or negative." },
        { term: "Velocity (v)", def: "Rate of change of position: v = Δx / Δt. Slope of an x–t graph." },
        { term: "Acceleration (a)", def: "Rate of change of velocity: a = Δv / Δt. Slope of a v–t graph. Units m/s²." },
        { term: "Free fall", def: "Motion under gravity alone. Near Earth's surface a = 9.8 m/s² down, for rising, falling and at the top." },
        { term: "Reference frame & sign convention", def: "Choose +direction first and keep it for every quantity in the problem." }
      ],
      equations: [
        "v = Δx / Δt",
        "a = Δv / Δt",
        "v = v₀ + a·t",
        "Δx = v₀·t + ½·a·t²",
        "v² = v₀² + 2·a·Δx",
        "Δx = ½(v₀ + v)·t"
      ],
      cornell: {
        topic: "Kinematics — describing motion in one dimension",
        rows: [
          { cue: "Scalar vs. vector?", notes: "Scalar = magnitude only (distance, speed). Vector = magnitude + direction (displacement, velocity, acceleration). Use + / − signs for direction in 1-D." },
          { cue: "Distance vs. displacement?", notes: "Distance = total path length (always ≥ 0). Displacement = final position − initial position (straight-line change, can be 0 or negative). One lap of a 400 m track: distance 400 m, displacement 0." },
          { cue: "Speed vs. velocity?", notes: "Average speed = distance / time. Average velocity = displacement / time (v = Δx/Δt). Velocity has a sign." },
          { cue: "What is acceleration?", notes: "a = Δv/Δt = (v − v₀)/t. Any change in velocity — speeding up, slowing down OR turning. Units: m/s per s = m/s²." },
          { cue: "Speeding up or slowing down?", notes: "Same sign for v and a → speeding up. Opposite signs → slowing down. Negative a does NOT automatically mean slowing down." },
          { cue: "Graph rules", notes: "x–t graph: slope = velocity. v–t graph: slope = acceleration, area under curve = displacement. Straight horizontal line on v–t = constant velocity (a = 0). Curve on x–t = changing velocity." },
          { cue: "Constant-acceleration equations", notes: "v = v₀ + at ;  Δx = v₀t + ½at² ;  v² = v₀² + 2aΔx. Pick the equation that is missing the unknown you don't need. List knowns/unknown (GUESS: Given, Unknown, Equation, Solve, check units)." },
          { cue: "Free fall", notes: "Only gravity acts: a = −9.8 m/s² (taking up as +) the whole trip — going up, at the top, and coming down. At the very top v = 0 but a is still 9.8 m/s². Mass doesn't change fall time without air resistance." },
          { cue: "Strategy for any problem", notes: "1) Sketch + choose a +direction. 2) List knowns with signs and units. 3) Choose equation. 4) Solve algebraically, then plug in. 5) Does the answer make sense?" }
        ],
        summary: "Kinematics describes motion without asking what causes it. Position, velocity and acceleration are linked by slopes and areas on graphs, and constant acceleration lets us predict motion with three equations. Always set a sign convention, track units, and remember that gravity gives a constant 9.8 m/s² downward during free fall."
      },
      quiz: [
        { q: "A runner completes exactly one lap of a 400 m track in 80 s. What is the runner's average velocity?",
          options: ["5 m/s", "0 m/s", "400 m/s", "80 m/s"], answer: 1,
          why: "Average velocity = displacement ÷ time. After one full lap the displacement is zero, so the average velocity is 0 (the average speed is 5 m/s).",
          miss: "Confusing distance with displacement." },
        { q: "A ball is thrown straight up. At the very top of its path, what are its velocity and acceleration?",
          options: ["v = 0, a = 0", "v = 0, a = 9.8 m/s² downward", "v = 9.8 m/s, a = 0", "v = 0, a = 9.8 m/s² upward"], answer: 1,
          why: "Gravity acts the entire flight, so a = 9.8 m/s² downward even when v is momentarily zero.",
          miss: "Thinking zero velocity means zero acceleration." },
        { q: "A car moves in the negative direction and its acceleration is also negative. The car is…",
          options: ["slowing down", "speeding up", "moving at constant speed", "at rest"], answer: 1,
          why: "Velocity and acceleration have the same sign, so speed increases. Negative acceleration does not always mean slowing down.",
          miss: "Equating negative acceleration with slowing down." },
        { q: "On a velocity–time graph, the area between the line and the time axis represents…",
          options: ["acceleration", "displacement", "speed", "force"], answer: 1,
          why: "Area under v–t = v × t = displacement. The slope of v–t is acceleration.",
          miss: "Mixing up slope and area interpretations." },
        { q: "A car starts from rest and accelerates at 3 m/s² for 4 s. How far does it travel?",
          options: ["12 m", "24 m", "48 m", "6 m"], answer: 1,
          why: "Δx = v₀t + ½at² = 0 + ½(3)(4²) = 24 m. (12 m/s is the final speed, not the distance.)",
          miss: "Forgetting the ½ or confusing final speed with distance." },
        { q: "A bowling ball and a tennis ball are dropped from the same height in a vacuum. Which hits the ground first?",
          options: ["The bowling ball", "The tennis ball", "They hit at the same time", "It depends on their volumes only"], answer: 2,
          why: "Free-fall acceleration is 9.8 m/s² for every object regardless of mass, so both fall together when air resistance is negligible.",
          miss: "Believing heavier objects fall faster." },
        { q: "A ball is thrown upward at 20 m/s. About how long until it returns to the launch height? (g = 9.8 m/s²)",
          options: ["2.0 s", "4.1 s", "8.2 s", "1.0 s"], answer: 1,
          why: "Use v = v₀ + at with v = −20: −20 = 20 − 9.8t → t = 40/9.8 ≈ 4.1 s. (2.0 s is only the trip up.)",
          miss: "Stopping at the peak instead of the full round trip." },
        { q: "On a position–time graph, a straight line sloping upward with constant slope means…",
          options: ["constant acceleration", "constant velocity", "an object at rest", "velocity increasing"], answer: 1,
          why: "Slope of x–t is velocity. A constant slope means constant velocity (zero acceleration).",
          miss: "Reading the graph's shape as the 'path' instead of using slope." }
      ],
      practice: [
        { q: "A car speeds up from 0 to 25 m/s in 8.0 s. What is its average acceleration?", a: "a = Δv/Δt = 25/8.0 ≈ 3.1 m/s²" },
        { q: "A car traveling 20 m/s brakes with a = −5.0 m/s². How far and how long until it stops?", a: "t = 20/5 = 4.0 s; Δx = v²/(2|a|) = 400/10 = 40 m" },
        { q: "A rock is dropped from a 45 m cliff. Find the fall time and impact speed.", a: "t = √(2·45/9.8) ≈ 3.0 s; v = 9.8 × 3.03 ≈ 30 m/s" },
        { q: "A v–t graph rises from 0 to 10 m/s in 5 s, then stays at 10 m/s for 5 s. Find the total displacement.", a: "Triangle ½(5)(10) = 25 m + rectangle 10 × 5 = 50 m → 75 m" },
        { q: "A runner covers 100 m in 12.5 s. Average speed? If she returns to the start in another 12.5 s, what is her average velocity for the round trip?", a: "Speed = 8.0 m/s on the way out; round-trip average velocity = 0 m/s (displacement 0)" }
      ],
      resources: [
        { name: "PhET: The Moving Man", url: "https://phet.colorado.edu/en/simulations/moving-man", type: "Simulation", note: "Drag the man, watch x, v, a graphs update together." },
        { name: "The Physics Classroom: 1-D Kinematics", url: "https://www.physicsclassroom.com/class/1DKin", type: "Tutorial", note: "Readable lessons with check-your-understanding items." },
        { name: "Khan Academy: One-dimensional motion", url: "https://www.khanacademy.org/science/physics/one-dimensional-motion", type: "Video + practice", note: "Short videos and mastery exercises." },
        { name: "OpenStax High School Physics", url: "https://openstax.org/details/books/physics", type: "Free textbook", note: "Free, standards-aligned reading and problems." },
        { name: "IXL Physics (kinematics skills)", url: "https://www.ixl.com/science/physics", type: "Adaptive practice", note: "Skill practice tracked per student." }
      ],
      realWorld: [
        "Traffic safety: stopping distance grows with the square of speed (v² = 2aΔx).",
        "Sports analytics: sprint start acceleration, reaction time and split times.",
        "Aviation and rockets: takeoff run length and launch acceleration.",
        "Smartphone accelerometers and fitness trackers estimating steps and speed.",
        "Forensics: estimating a car's speed from skid-mark length."
      ],
      lab: "Cart on a ramp (or Moving Man data): collect position vs. time, fit the graphs, and use slope and area to support a claim in Claim–Evidence–Reasoning format that acceleration is constant.",
      assessment: {
        formative: "Daily exit ticket (2 questions: one conceptual, one calculation); graph-matching whiteboards.",
        summative: "Unit test: 40% graphs/concepts, 40% calculations, 20% free-fall/context problem.",
        performance: "CER lab report + 'Design a safe following-distance poster' using stopping-distance data.",
        mastery: "≥ 80% on the unit quiz AND Proficient (3) on the graph-analysis task."
      }
    },

    /* ------------------------------------------------------------------ */
    {
      id: "projectile", title: "Projectile Motion", short: "2-D motion",
      ngss: [
        { code: "HS-PS2-1", text: "Newton's second law applied independently along each axis explains projectile motion." },
        { code: "HS-PS3-2", text: "Motion at the macroscopic scale as a combination of kinetic and potential energy (used in extension)." },
        { code: "SEP", text: "Using mathematics and computational thinking; developing and using models." },
        { code: "CCC", text: "Systems and system models; cause and effect." }
      ],
      objectives: [
        "Resolve a velocity vector into horizontal and vertical components using sine and cosine.",
        "Explain that horizontal and vertical motion are independent and treat them with separate equations.",
        "Predict time of flight, maximum height and range for horizontal and angled launches.",
        "Explain the velocity and acceleration of a projectile at launch, apex and landing.",
        "Use a simulation or video analysis to model a projectile and compare with the prediction.",
        "Identify when air resistance makes the ideal model break down."
      ],
      concepts: [
        { term: "Projectile", def: "An object moving only under gravity after launch (air resistance ignored)." },
        { term: "Independence of components", def: "Horizontal: a = 0, constant vₓ. Vertical: a = −9.8 m/s². The two motions share only the time." },
        { term: "Vector components", def: "vₓ = v·cosθ, v_y = v·sinθ. Reassemble with Pythagorean theorem and tan⁻¹." },
        { term: "Time of flight", def: "Determined by the vertical motion only." },
        { term: "Range", def: "R = vₓ · t. For equal launch and landing heights R = v² sin(2θ)/g, maximum at 45°." },
        { term: "Apex", def: "v_y = 0 but vₓ ≠ 0 (for angled launch) and a is still 9.8 m/s² down." }
      ],
      equations: [
        "vₓ = v·cosθ ;  v_y = v·sinθ",
        "x = vₓ·t",
        "y = v₀y·t − ½·g·t²",
        "v_y = v₀y − g·t",
        "R = v₀² sin(2θ) / g   (same launch & landing height)",
        "t(up to apex) = v₀y / g"
      ],
      cornell: {
        topic: "Projectile motion — two independent 1-D motions",
        rows: [
          { cue: "What is a projectile?", notes: "Object launched and then acted on only by gravity (ignore air). Path is a parabola." },
          { cue: "Key idea: independence", notes: "Horizontal and vertical motion don't affect each other. Horizontal: constant velocity (a = 0). Vertical: free fall (a = 9.8 m/s² down). Time connects them." },
          { cue: "Breaking up the launch velocity", notes: "vₓ = v cosθ (adjacent), v_y = v sinθ (opposite). Draw the right triangle with θ measured from the horizontal." },
          { cue: "Horizontal launch (off a cliff)", notes: "v₀y = 0. Fall time t = √(2h/g). Range = vₓ · t. A ball rolled off a table and one dropped hit the ground at the same time." },
          { cue: "Angled launch", notes: "Time up = v₀y/g; total time = 2v₀y/g (if land at launch height). Max height = v₀y²/(2g). Range = vₓ · total time." },
          { cue: "What happens at the top?", notes: "v_y = 0, vₓ unchanged (speed is minimum, not zero), a = 9.8 m/s² down. Only gravity acts, so net force is just weight." },
          { cue: "Range vs. angle", notes: "Max range at 45° (same heights). Complementary angles (e.g., 30° and 60°) give the same range. Higher angle → higher apex and longer time." },
          { cue: "Limits of the model", notes: "Real balls feel air drag: shorter range, optimal angle < 45°, asymmetric path. Mention in lab error analysis." }
        ],
        summary: "A projectile is two motions at once: constant velocity sideways and free fall vertically. Solve the vertical motion for time, then use that time in the horizontal equation. Resolve vectors with sin/cos, remember a = 9.8 m/s² down at every point, and the apex has v_y = 0 only."
      },
      quiz: [
        { q: "Ignoring air resistance, what is the horizontal velocity of a projectile during its flight?",
          options: ["Increases steadily", "Decreases steadily", "Constant", "Zero at the top"], answer: 2,
          why: "No horizontal force acts, so a_x = 0 and v_x never changes.",
          miss: "Thinking an object needs a continued push to keep its horizontal motion." },
        { q: "One ball is dropped and another is launched horizontally from the same height at the same instant. Which lands first?",
          options: ["The dropped ball", "The launched ball", "They land together", "Depends on the launch speed"], answer: 2,
          why: "Vertical motion is identical (v₀y = 0, a = 9.8 m/s²), so fall times are equal.",
          miss: "Not separating horizontal and vertical motion." },
        { q: "At the highest point of a projectile's path launched at an angle, which statement is correct?",
          options: ["v = 0 and a = 0", "v_y = 0 and a = 9.8 m/s² down", "v_x = 0 and a = 0", "v_y = 0 and a = 0"], answer: 1,
          why: "Only the vertical velocity is zero at the top. The horizontal velocity remains, and gravity keeps accelerating the ball downward.",
          miss: "Believing the projectile is momentarily 'at rest' with no forces." },
        { q: "For a launch and landing at the same height, which angle gives maximum range (no air resistance)?",
          options: ["30°", "45°", "60°", "90°"], answer: 1,
          why: "R = v² sin(2θ)/g is largest when sin(2θ) = 1, i.e., θ = 45°.",
          miss: "Assuming a steeper angle always goes farther." },
        { q: "A ball is launched at 20 m/s at 30° above horizontal. What are its horizontal and vertical velocity components?",
          options: ["v_x = 10 m/s, v_y = 17.3 m/s", "v_x = 17.3 m/s, v_y = 10 m/s", "v_x = 20 m/s, v_y = 0", "v_x = 14.1 m/s, v_y = 14.1 m/s"], answer: 1,
          why: "v_x = 20 cos30° = 17.3 m/s and v_y = 20 sin30° = 10 m/s. Check your calculator is in degree mode.",
          miss: "Swapping sine and cosine." },
        { q: "A ball rolls off a 20 m high cliff at 15 m/s horizontally. About how far from the base does it land? (g = 9.8 m/s²)",
          options: ["15 m", "30 m", "60 m", "45 m"], answer: 1,
          why: "t = √(2·20/9.8) = 2.02 s, so x = 15 × 2.02 ≈ 30 m. Time comes only from the vertical motion.",
          miss: "Using the horizontal speed alone or the wrong equation for time." },
        { q: "After a kicked soccer ball leaves the foot (ignore air), what force(s) act on it?",
          options: ["Gravity only", "Gravity and the force of the kick", "Gravity and a forward force", "No forces"], answer: 0,
          why: "The kick ends at contact. In flight, only gravity (weight) acts if air resistance is ignored.",
          miss: "Believing a 'force of the throw' stays with the object." },
        { q: "Launch angles of 30° and 60° with the same speed (same launch/landing height) will have…",
          options: ["the same range", "60° has longer range", "30° has longer range", "the same time of flight"], answer: 0,
          why: "Complementary angles give the same range because sin(2·30°) = sin(2·60°). The 60° shot has a longer time and higher apex.",
          miss: "Confusing range with time of flight or height." }
      ],
      practice: [
        { q: "A ball is kicked at 25 m/s at 40° above horizontal. Find vₓ, v₀y, time of flight and range.", a: "vₓ = 19.2 m/s, v₀y = 16.1 m/s; t = 2(16.1)/9.8 ≈ 3.3 s; R ≈ 19.2 × 3.28 ≈ 63 m" },
        { q: "A marble leaves a 1.5 m high table at 12 m/s horizontally. How far from the table does it land?", a: "t = √(2·1.5/9.8) = 0.55 s; x = 12 × 0.55 ≈ 6.6 m" },
        { q: "A ball is thrown straight up at 30 m/s. Maximum height?", a: "h = v²/(2g) = 900/19.6 ≈ 46 m" },
        { q: "A stone is thrown horizontally from an 80 m cliff and lands 60 m from the base. Launch speed?", a: "t = √(160/9.8) = 4.04 s; vₓ = 60/4.04 ≈ 14.9 m/s" },
        { q: "Explain: why do 30° and 60° launches have the same range but different heights?", a: "Range ∝ sin2θ (equal for 30° and 60°), but the vertical component v₀y = v sinθ is larger at 60°, giving longer flight time and higher apex while vₓ is smaller." }
      ],
      resources: [
        { name: "PhET: Projectile Motion", url: "https://phet.colorado.edu/en/simulations/projectile-motion", type: "Simulation", note: "Change angle, speed, mass; toggle air resistance." },
        { name: "The Physics Classroom: Vectors and Projectiles", url: "https://www.physicsclassroom.com/class/vectors", type: "Tutorial", note: "Component and projectile lessons." },
        { name: "Khan Academy: Two-dimensional motion", url: "https://www.khanacademy.org/science/physics/two-dimensional-motion", type: "Video + practice", note: "Vectors and projectile videos." },
        { name: "OpenStax High School Physics", url: "https://openstax.org/details/books/physics", type: "Free textbook", note: "Two-dimensional kinematics reading." },
        { name: "Tracker video analysis (Open Source Physics)", url: "https://physlets.org/tracker/", type: "Software", note: "Track a real video of a projectile and graph x(t), y(t)." }
      ],
      realWorld: [
        "Sports: basketball free throws, long jump, javelin, football punts, soccer goals.",
        "Emergency response: water arcing from a fire hose to reach a window.",
        "Engineering: sprinkler design, conveyor drop-offs, stunt ramps.",
        "Ballistics and artillery tables (and why air resistance corrections matter).",
        "Space: launch trajectories and how orbits relate to projectiles that 'keep missing the ground'."
      ],
      lab: "Launch a ball from a ramp or spring launcher; predict the landing point using kinematics, place a target, and test. Compare predicted vs. actual with percent error and list sources of error (CER).",
      assessment: {
        formative: "Whiteboard component-resolution drills; 'predict then simulate' with PhET.",
        summative: "Unit test: components, horizontal launch, angled launch, and conceptual apex questions.",
        performance: "Target-landing challenge: calculate launch settings to hit a target; score by percent error.",
        mastery: "≥ 80% on the unit quiz AND the target challenge within 10% error."
      }
    },

    /* ------------------------------------------------------------------ */
    {
      id: "newton", title: "Newton's Laws", short: "Forces & motion",
      ngss: [
        { code: "HS-PS2-1", text: "Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration." },
        { code: "HS-PS2-4", text: "Use mathematical representations of Newton's Law of Gravitation and Coulomb's Law to describe and predict the gravitational and electrostatic forces between objects. (Weight as gravitational force.)" },
        { code: "SEP", text: "Analyzing data; constructing explanations; using mathematics." },
        { code: "CCC", text: "Cause and effect; systems and system models." }
      ],
      objectives: [
        "State Newton's three laws and identify each in everyday situations.",
        "Draw accurate free-body diagrams showing all forces on one object (weight, normal, tension, friction, applied).",
        "Calculate net force and acceleration using ΣF = ma, in one dimension and on a simple incline.",
        "Distinguish mass from weight and explain how weight changes with gravitational field strength.",
        "Identify action–reaction pairs (equal, opposite, on different objects).",
        "Model static and kinetic friction with f = μN and use it in problems.",
        "Use experimental data to show that a ∝ F and a ∝ 1/m."
      ],
      concepts: [
        { term: "Force", def: "A push or pull; a vector measured in newtons (1 N = 1 kg·m/s²)." },
        { term: "Net force (ΣF)", def: "Vector sum of all forces on an object. Determines acceleration." },
        { term: "Inertia / 1st law", def: "An object keeps its velocity (including rest) unless the net force is not zero." },
        { term: "2nd law", def: "a = ΣF / m." },
        { term: "3rd law", def: "Forces come in pairs: A on B equals B on A in size, opposite in direction, on different objects." },
        { term: "Weight vs. mass", def: "Mass (kg) is the amount of matter; weight (N) is the gravitational force: W = mg." },
        { term: "Normal & friction", def: "Normal force is perpendicular to the surface. Friction opposes sliding: f = μN." }
      ],
      equations: [
        "ΣF = m·a",
        "W = m·g",
        "f_k = μ_k·N ;  f_s ≤ μ_s·N",
        "On an incline: W∥ = mg·sinθ ;  N = mg·cosθ",
        "Terminal velocity: when drag = weight, a = 0"
      ],
      cornell: {
        topic: "Newton's laws — forces cause changes in motion",
        rows: [
          { cue: "1st law (inertia)?", notes: "If ΣF = 0, velocity is constant (at rest OR moving in a straight line at constant speed). Forces are not needed to keep an object moving — only to change its motion." },
          { cue: "2nd law?", notes: "ΣF = ma, so a = ΣF/m. Same force: bigger mass → smaller acceleration. Direction of a = direction of net force. 1 N = 1 kg·m/s²." },
          { cue: "3rd law?", notes: "Action–reaction pairs: equal magnitude, opposite direction, act on DIFFERENT objects, same type of force. Because they act on different objects they never cancel." },
          { cue: "How do I draw a free-body diagram (FBD)?", notes: "Pick ONE object, draw it as a dot/box, draw only forces ON it (not forces it exerts). Label each (W or F_g, N, T, f, F_app). Choose axes; arrows' lengths show relative size." },
          { cue: "Mass vs. weight", notes: "Mass: kg, doesn't change with location. Weight: W = mg in newtons, changes with g (Earth 9.8, Moon ≈ 1.6 m/s²). 60 kg on the Moon still has 60 kg of mass." },
          { cue: "Normal force", notes: "Perpendicular to the surface; it adjusts to prevent objects from passing through. N = mg only on a flat surface with no other vertical forces. On an incline N = mg cosθ. In an accelerating elevator N changes (apparent weight)." },
          { cue: "Friction", notes: "Opposes relative motion/attempted motion. Static f_s ≤ μ_s N (adjusts up to a max). Kinetic f_k = μ_k N (constant), usually μ_k < μ_s. Does not depend on contact area." },
          { cue: "Solving ΣF problems", notes: "1) FBD. 2) Write ΣF = ma for each axis (+ direction of acceleration). 3) Substitute. 4) Solve for the unknown. Equilibrium: ΣF = 0 → a = 0." },
          { cue: "Incline", notes: "Tilt axes: x along the slope, y perpendicular. Component of weight down the slope = mg sinθ; into the slope = mg cosθ. Frictionless: a = g sinθ." }
        ],
        summary: "Forces are interactions measured in newtons. An unbalanced force changes velocity according to ΣF = ma; balanced forces mean constant velocity (including rest). Every force has an equal and opposite partner on a different object. Free-body diagrams turn a story into equations, and weight (mg) is a force that is not the same thing as mass."
      },
      quiz: [
        { q: "An object moves at constant velocity along a straight line. What must be true about the net force on it?",
          options: ["It points in the direction of motion", "It is zero", "It equals the object's weight", "It is constant but not zero"], answer: 1,
          why: "Constant velocity means a = 0, so by ΣF = ma the net force is zero. Motion does not require a net forward force.",
          miss: "Thinking force is needed to maintain motion." },
        { q: "A large truck collides head-on with a small car. During the collision, which exerts the greater force?",
          options: ["The truck on the car", "The car on the truck", "They exert equal forces", "Depends on who was moving faster"], answer: 2,
          why: "Newton's 3rd law: the forces are equal and opposite. The car has the larger acceleration only because it has smaller mass.",
          miss: "Confusing force with effect (acceleration or damage)." },
        { q: "A 60 kg astronaut travels to the Moon (g ≈ 1.6 m/s²). What happens to the astronaut's mass and weight?",
          options: ["Both stay the same", "Mass stays 60 kg; weight ≈ 96 N", "Mass ≈ 10 kg; weight ≈ 96 N", "Mass stays 60 kg; weight stays 588 N"], answer: 1,
          why: "Mass is intrinsic (60 kg). Weight = mg = 60 × 1.6 = 96 N, much less than on Earth (588 N).",
          miss: "Using 'weight' and 'mass' interchangeably." },
        { q: "A 10 kg box is pulled to the right with 50 N while friction pushes left with 20 N. What is the acceleration?",
          options: ["5 m/s²", "3 m/s²", "7 m/s²", "2 m/s²"], answer: 1,
          why: "ΣF = 50 − 20 = 30 N. a = 30/10 = 3 m/s². Use net force, not just the applied force.",
          miss: "Dividing the applied force by mass and ignoring friction." },
        { q: "You stand on a scale in an elevator that is accelerating upward. The scale reading (normal force) is…",
          options: ["less than your weight", "equal to your weight", "greater than your weight", "zero"], answer: 2,
          why: "ΣF = N − mg = ma upward, so N = m(g + a) > mg. The scale reads more than normal.",
          miss: "Assuming N always equals mg." },
        { q: "A book rests on a table. Which force is the Newton's 3rd-law partner of the book's weight (Earth pulling the book)?",
          options: ["The normal force from the table on the book", "The book pulling up on the Earth", "The table pushing on the floor", "Friction"], answer: 1,
          why: "Action–reaction pairs are the same type of force acting on different objects: Earth pulls book ↔ book pulls Earth. The normal force just balances weight on the same object.",
          miss: "Calling the normal force the 'reaction' to weight." },
        { q: "The same net force is applied to two carts. Cart B has twice the mass of cart A. How do their accelerations compare?",
          options: ["B has twice the acceleration", "They are equal", "B has half the acceleration", "B has four times the acceleration"], answer: 2,
          why: "a = F/m, so doubling the mass halves the acceleration (inverse relationship).",
          miss: "Mixing direct and inverse proportionality." },
        { q: "A block slides down a frictionless incline of angle 30°. What is its acceleration? (g = 9.8 m/s²)",
          options: ["9.8 m/s²", "8.5 m/s²", "4.9 m/s²", "0 m/s²"], answer: 2,
          why: "a = g sinθ = 9.8 × sin30° = 4.9 m/s². Only the component of weight along the slope accelerates the block.",
          miss: "Using g (or g cosθ) instead of g sinθ." }
      ],
      practice: [
        { q: "A 1200 kg car experiences a net force of 3000 N. What is its acceleration?", a: "a = 3000/1200 = 2.5 m/s²" },
        { q: "A 5.0 kg block is pulled by 30 N across a surface with 10 N friction. Acceleration?", a: "ΣF = 20 N; a = 20/5.0 = 4.0 m/s²" },
        { q: "What is the weight of a 70 kg student on Earth? On Mars (g = 3.7 m/s²)?", a: "Earth: 70 × 9.8 = 686 N; Mars: 70 × 3.7 = 259 N; mass is 70 kg in both" },
        { q: "An 80 kg person rides an elevator accelerating upward at 2.0 m/s². What does the scale read?", a: "N = m(g + a) = 80(9.8 + 2.0) = 944 N" },
        { q: "A 10 kg block on a frictionless 30° incline. Acceleration and normal force?", a: "a = g sin30° = 4.9 m/s²; N = mg cos30° = 10(9.8)(0.866) ≈ 85 N" }
      ],
      resources: [
        { name: "PhET: Forces and Motion — Basics", url: "https://phet.colorado.edu/en/simulations/forces-and-motion-basics", type: "Simulation", note: "Net force, friction and motion with a force meter." },
        { name: "PhET: Friction", url: "https://phet.colorado.edu/en/simulations/friction", type: "Simulation", note: "Microscopic view of why friction happens." },
        { name: "The Physics Classroom: Newton's Laws", url: "https://www.physicsclassroom.com/class/newtlaws", type: "Tutorial", note: "Free-body diagrams and force problems." },
        { name: "Khan Academy: Forces and Newton's laws of motion", url: "https://www.khanacademy.org/science/physics/forces-newtons-laws", type: "Video + practice", note: "Mastery exercises." },
        { name: "OpenStax High School Physics", url: "https://openstax.org/details/books/physics", type: "Free textbook", note: "Newton's laws chapter." }
      ],
      realWorld: [
        "Seat belts and headrests: inertia in sudden stops.",
        "Rocket propulsion and swimming: action–reaction pairs.",
        "Tire design, brakes and ABS: static vs. kinetic friction.",
        "Elevators and roller coasters: apparent weight changes.",
        "Parachutes and terminal velocity: balanced forces at constant speed."
      ],
      lab: "Atwood machine or cart-and-hanging-mass lab: vary net force with fixed mass and vary mass with fixed force; graph a vs. F and a vs. 1/m to support ΣF = ma (HS-PS2-1 data analysis).",
      assessment: {
        formative: "Free-body-diagram check each class (hinge question); Newton's 3rd-law pair sorting card activity.",
        summative: "Unit test: conceptual laws, FBD construction, calculations including an incline or elevator.",
        performance: "HS-PS2-1 lab report with graph and CER; explain a real-world scenario using all three laws.",
        mastery: "≥ 80% on the unit quiz AND Proficient (3) on FBD + ΣF = ma setup."
      }
    },

    /* ------------------------------------------------------------------ */
    {
      id: "momentum", title: "Momentum", short: "Impulse & collisions",
      ngss: [
        { code: "HS-PS2-2", text: "Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system." },
        { code: "HS-PS2-3", text: "Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision." },
        { code: "SEP", text: "Using mathematics; constructing explanations and designing solutions." },
        { code: "CCC", text: "Systems and system models; cause and effect; conservation (stability and change)." }
      ],
      objectives: [
        "Calculate momentum (p = mv) with correct units and sign (direction).",
        "Relate impulse (FΔt) to change in momentum and explain how force and time trade off.",
        "Apply conservation of momentum to collisions and explosions in one dimension.",
        "Classify collisions as elastic, inelastic or perfectly inelastic using kinetic energy before and after.",
        "Explain how safety devices (airbags, crumple zones, helmets) reduce force by increasing collision time.",
        "Design, test and refine a device that protects an egg or sensor during a collision (HS-PS2-3)."
      ],
      concepts: [
        { term: "Momentum (p)", def: "p = mv; a vector in kg·m/s pointing along the velocity." },
        { term: "Impulse (J)", def: "J = FΔt = Δp; the product of average net force and time. Area under an F–t graph." },
        { term: "Conservation of momentum", def: "In a closed, isolated system (no net external force) total momentum before = after." },
        { term: "Elastic collision", def: "Both momentum and kinetic energy conserved (objects bounce, no deformation)." },
        { term: "Inelastic collision", def: "Momentum conserved, kinetic energy NOT conserved. Perfectly inelastic: objects stick together; maximum KE loss." },
        { term: "Explosion / recoil", def: "System starts at rest, total momentum = 0 so pieces move in opposite directions." }
      ],
      equations: [
        "p = m·v",
        "J = F·Δt = Δp = m·v_f − m·v_i",
        "m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′",
        "Perfectly inelastic: m₁v₁ + m₂v₂ = (m₁ + m₂)·v′",
        "KE = ½·m·v²  (compare before/after)"
      ],
      cornell: {
        topic: "Momentum — inertia in motion",
        rows: [
          { cue: "What is momentum?", notes: "p = mv (kg·m/s). A vector: direction of velocity. Heavier or faster → more momentum. A slow truck can match a fast bullet." },
          { cue: "What is impulse?", notes: "J = FΔt = Δp. A net force acting for a time changes momentum. Units N·s = kg·m/s. Area under an F–t graph." },
          { cue: "Why do airbags help?", notes: "Same Δp (stopping a person) but a longer Δt means a smaller average force: F = Δp/Δt. Crumple zones, padding, bending knees when landing, catching a ball by pulling hands back." },
          { cue: "Rebound vs. stick", notes: "If an object bounces back, its Δp is larger than if it just stops (the velocity reverses sign), so the impulse is larger. 0.5 kg ball at 10 m/s bounces back at 10 m/s: Δp = 10 kg·m/s; if it merely stops, Δp = 5." },
          { cue: "Conservation of momentum", notes: "Total p before = total p after when no net external force. Choose a + direction; velocities in the opposite direction are negative." },
          { cue: "Types of collisions", notes: "Elastic: p and KE conserved. Inelastic: p conserved, KE lost to heat/sound/deformation. Perfectly inelastic: objects stick together. Momentum is conserved in ALL of them (isolated system)." },
          { cue: "Solving collision problems", notes: "1) Sketch before/after. 2) Pick + direction; assign signs. 3) Write Σp_before = Σp_after. 4) Solve. 5) Compare KE before and after to classify." },
          { cue: "Explosions & recoil", notes: "Start at rest: Σp = 0, so m₁v₁ = −m₂v₂. Smaller mass moves faster. Gun and bullet, rocket and exhaust, skaters pushing apart." }
        ],
        summary: "Momentum (mv) measures how hard it is to stop a moving object. A net force over time (impulse) changes it. When no outside force acts on a system, total momentum stays constant even though energy may change form — that's the key to collisions, explosions and safety design: increase collision time to reduce force."
      },
      quiz: [
        { q: "A 1000 kg car moves at 20 m/s. What is its momentum?",
          options: ["20,000 kg·m/s", "200,000 kg·m/s", "50 kg·m/s", "20,000 J"], answer: 0,
          why: "p = mv = 1000 × 20 = 20,000 kg·m/s. (200,000 J would be its kinetic energy; momentum is not measured in joules.)",
          miss: "Mixing up momentum (mv) and kinetic energy (½mv²)." },
        { q: "Why does an airbag reduce injury in a crash?",
          options: ["It reduces the change in momentum", "It increases the stopping time, lowering average force", "It increases the impulse", "It gives the passenger more kinetic energy"], answer: 1,
          why: "The change in momentum is fixed by the crash. Since FΔt = Δp, a longer Δt means a smaller average force.",
          miss: "Thinking the change in momentum or the impulse is reduced." },
        { q: "Which quantity is conserved in ALL collisions in an isolated system?",
          options: ["Kinetic energy", "Momentum", "Velocity", "Speed"], answer: 1,
          why: "Momentum is conserved whenever there's no net external force. Kinetic energy is conserved only in elastic collisions.",
          miss: "Assuming kinetic energy is always conserved." },
        { q: "A 2 kg cart moving at 3 m/s collides with and sticks to a 1 kg cart at rest. What is their common speed afterward?",
          options: ["3 m/s", "2 m/s", "1.5 m/s", "1 m/s"], answer: 1,
          why: "2(3) + 1(0) = (2 + 1)v → v = 6/3 = 2 m/s.",
          miss: "Forgetting to add both masses afterward." },
        { q: "Two 1 kg carts move toward each other, each at 4 m/s, and stick together. What happens?",
          options: ["They move at 4 m/s", "They move at 8 m/s", "They stop (v = 0)", "They move at 2 m/s"], answer: 2,
          why: "Take right as +: (+4) + (−4) = 0 total momentum, so the combined cart has v = 0. Direction (sign) matters.",
          miss: "Ignoring the sign of velocity." },
        { q: "A 0.5 kg ball hits a wall at 10 m/s and rebounds at 10 m/s. What is the magnitude of the impulse on the ball?",
          options: ["0 N·s", "5 N·s", "10 N·s", "50 N·s"], answer: 2,
          why: "Δp = m(v_f − v_i) = 0.5[(−10) − (+10)] = −10 kg·m/s, magnitude 10 N·s. Reversing direction doubles the change compared with stopping.",
          miss: "Treating the speed as unchanged and calling Δp zero." },
        { q: "Two ice skaters (60 kg and 40 kg) at rest push off each other. The 40 kg skater glides at 3 m/s. How fast does the 60 kg skater move?",
          options: ["3 m/s in the same direction", "2 m/s in the opposite direction", "4.5 m/s in the opposite direction", "0 m/s"], answer: 1,
          why: "Total p starts at 0: 60v + 40(3) = 0 → v = −2 m/s, opposite direction and slower because of the greater mass.",
          miss: "Forgetting that recoil momentum is equal and opposite." },
        { q: "A moving ball collides with a stationary ball and both move together afterward. This collision is…",
          options: ["elastic", "perfectly inelastic", "an explosion", "not conserving momentum"], answer: 1,
          why: "Objects that stick together are perfectly inelastic. Kinetic energy is lost but momentum is conserved.",
          miss: "Thinking inelastic collisions violate conservation of momentum." }
      ],
      practice: [
        { q: "Find the momentum of a 0.145 kg baseball moving at 40 m/s.", a: "p = 0.145 × 40 = 5.8 kg·m/s" },
        { q: "A 0.145 kg ball arrives at 40 m/s and leaves the bat at 50 m/s the other way. Find the impulse and the average force if contact lasts 1.0 ms.", a: "Δp = 0.145(50 − (−40)) = 13 N·s; F = 13.05/0.001 ≈ 1.3 × 10⁴ N" },
        { q: "A 1500 kg car moving 10 m/s hits a stationary 1000 kg car and they stick. Final speed? KE lost?", a: "v = 15000/2500 = 6.0 m/s; KE before 75,000 J, after 45,000 J → 30,000 J lost" },
        { q: "A 3 kg cart at +2 m/s sticks to a 1 kg cart moving at −2 m/s. Final velocity?", a: "(6 − 2)/4 = +1 m/s" },
        { q: "A 4.0 kg rifle fires a 0.010 kg bullet at 400 m/s. Recoil speed of the rifle?", a: "v = (0.010 × 400)/4.0 = 1.0 m/s opposite the bullet" }
      ],
      resources: [
        { name: "PhET: Collision Lab", url: "https://phet.colorado.edu/en/simulations/collision-lab", type: "Simulation", note: "Elastic/inelastic collisions with momentum and KE readouts." },
        { name: "The Physics Classroom: Momentum and Its Conservation", url: "https://www.physicsclassroom.com/class/momentum", type: "Tutorial", note: "Impulse, collisions, and conservation." },
        { name: "Khan Academy: Impulse and momentum", url: "https://www.khanacademy.org/science/physics/linear-momentum", type: "Video + practice", note: "Linear momentum unit." },
        { name: "OpenStax High School Physics", url: "https://openstax.org/details/books/physics", type: "Free textbook", note: "Linear momentum and collisions chapter." },
        { name: "IIHS crash-test videos and ratings", url: "https://www.iihs.org/ratings", type: "Real-world data", note: "Use for the crumple-zone discussion and design challenge." }
      ],
      realWorld: [
        "Vehicle safety: airbags, seat belts, crumple zones and guardrails.",
        "Sports: follow-through in baseball and golf, boxing gloves, catching a fast ball.",
        "Rockets and jets: recoil and exhaust momentum.",
        "Accident reconstruction from momentum before and after impact.",
        "Billiards and Newton's cradle: nearly elastic collisions."
      ],
      lab: "Dynamics-cart collisions (or Collision Lab): measure velocities before and after elastic and sticky collisions; verify that total momentum is conserved and compute kinetic energy change.",
      assessment: {
        formative: "Sign-convention warm-ups; predict-then-test collision demos; exit ticket on F = Δp/Δt.",
        summative: "Unit test: impulse–momentum, 1-D collision calculations, collision classification.",
        performance: "HS-PS2-3 Egg-drop / crash-cart design: build, test with a force sensor or video, refine, and report with CER.",
        mastery: "≥ 80% on the unit quiz AND Proficient (3) on the design challenge's reasoning (explains force vs. time)."
      }
    },

    /* ------------------------------------------------------------------ */
    {
      id: "energy", title: "Work & Energy", short: "Conservation of energy",
      ngss: [
        { code: "HS-PS3-1", text: "Create a computational model to calculate the change in the energy of one component in a system when the change in energy of the other component(s) and energy flows in and out of the system are known." },
        { code: "HS-PS3-2", text: "Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as either motions of particles or energy stored in fields (kinetic and potential)." },
        { code: "HS-PS3-3", text: "Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy." },
        { code: "HS-PS3-4", text: "Plan and conduct an investigation to provide evidence that the transfer of thermal energy when two components of different temperature are combined within a closed system results in a more uniform energy distribution. (Extension: friction and thermal energy.)" },
        { code: "SEP", text: "Developing and using models; using mathematics and computational thinking." },
        { code: "CCC", text: "Energy and matter: conservation, flows, cycles; systems and system models." }
      ],
      objectives: [
        "Calculate work done by a constant force at any angle, W = Fd cosθ, and identify when work is zero or negative.",
        "Calculate kinetic energy, gravitational potential energy and elastic potential energy.",
        "Apply the work–energy theorem: W_net = ΔKE.",
        "Use conservation of mechanical energy (with and without friction) to find speed or height.",
        "Calculate power and relate it to energy transfer rate (W = J/s).",
        "Construct energy bar charts and a computational model of energy transfer in a system.",
        "Design a device that converts energy from one form to another within constraints (HS-PS3-3)."
      ],
      concepts: [
        { term: "Work (W)", def: "Energy transferred by a force acting through a displacement: W = Fd cosθ. Unit joule (J) = N·m. Only the component of force along the motion counts." },
        { term: "Kinetic energy (KE)", def: "Energy of motion: KE = ½mv²." },
        { term: "Gravitational potential energy (PE)", def: "Stored energy due to height: PE = mgh (relative to a chosen zero level)." },
        { term: "Elastic potential energy", def: "Energy stored in a spring: PE = ½kx²." },
        { term: "Work–energy theorem", def: "Net work on an object equals its change in kinetic energy." },
        { term: "Conservation of energy", def: "Energy is never created or destroyed; with friction, mechanical energy is converted to thermal energy." },
        { term: "Power (P)", def: "Rate of doing work/energy transfer: P = W/t. Unit watt (W)." }
      ],
      equations: [
        "W = F·d·cosθ",
        "KE = ½·m·v²",
        "PE_g = m·g·h",
        "PE_spring = ½·k·x²",
        "W_net = ΔKE = ½mv_f² − ½mv_i²",
        "KE₁ + PE₁ = KE₂ + PE₂ (+ thermal losses)",
        "P = W/t = F·v"
      ],
      cornell: {
        topic: "Work & energy — the currency of change",
        rows: [
          { cue: "What is work?", notes: "W = F d cosθ, where θ is the angle between force and displacement. Units J = N·m. Needs force AND displacement in the direction of the force." },
          { cue: "When is work zero or negative?", notes: "Zero: no displacement (pushing a wall) or force ⟂ motion (carrying a box horizontally at constant speed). Negative: force opposes motion (friction, braking)." },
          { cue: "Kinetic energy", notes: "KE = ½mv². Depends on v²: double the speed → 4× the KE (and 4× the stopping distance). Scalar, always ≥ 0." },
          { cue: "Potential energy", notes: "Gravitational: PE = mgh (choose a zero height). Spring: ½kx². Stored in the system (field/deformation); only changes in PE matter physically." },
          { cue: "Work–energy theorem", notes: "W_net = ΔKE. Positive net work speeds an object up, negative slows it. Good when forces or paths are complicated." },
          { cue: "Conservation of energy", notes: "Total energy of an isolated system is constant. Without friction: KE + PE = constant (ex: roller coaster, pendulum). With friction: E_initial = E_final + thermal energy." },
          { cue: "Using energy to solve", notes: "Choose start/end points; write KE + PE at each; set equal (include losses). Drop-from-rest speed: v = √(2gh), independent of mass and path (no friction)." },
          { cue: "Power", notes: "P = W/t = ΔE/t. 1 W = 1 J/s. Horsepower ≈ 746 W. Climbing stairs faster takes more power, not more work." },
          { cue: "Energy transformation (HS-PS3)", notes: "Make energy bar charts showing where energy goes: chemical → kinetic → thermal. Efficiency = useful output / input. Energy is 'lost' only as unusable thermal energy, never destroyed." }
        ],
        summary: "Work transfers energy; kinetic energy depends on mass and the square of speed; potential energy depends on position. The total energy of a system is conserved, so we can predict speeds and heights without knowing forces along the path. Friction does negative work and converts mechanical energy to thermal energy. Power is how fast energy is transferred."
      },
      quiz: [
        { q: "A person carries a heavy box horizontally at constant speed across a room. How much work does the person's upward lifting force do on the box?",
          options: ["Positive work equal to mgd", "Negative work", "Zero", "It depends on how heavy the box is"], answer: 2,
          why: "The lifting force is perpendicular to the displacement (θ = 90°, cos90° = 0), so W = 0.",
          miss: "Believing that effort or holding a weight always means work is done." },
        { q: "A car doubles its speed. By what factor does its kinetic energy change?",
          options: ["×2", "×4", "×8", "×1/2"], answer: 1,
          why: "KE = ½mv². Doubling v multiplies KE by 2² = 4.",
          miss: "Treating KE as proportional to v instead of v²." },
        { q: "A 10 N force pulls a box 5 m along the floor at 60° above the horizontal. How much work does the force do?",
          options: ["50 J", "43 J", "25 J", "86 J"], answer: 2,
          why: "W = Fd cosθ = 10 × 5 × cos60° = 25 J. Only the horizontal component does work.",
          miss: "Omitting the cosθ factor (or using sin)." },
        { q: "How much gravitational potential energy does a 2 kg book gain when lifted 3 m? (g = 9.8 m/s²)",
          options: ["6 J", "29 J", "59 J", "196 J"], answer: 2,
          why: "PE = mgh = 2 × 9.8 × 3 = 58.8 ≈ 59 J.",
          miss: "Forgetting g or using the wrong variable." },
        { q: "A ball is dropped from rest from 5.0 m (no air resistance). About how fast is it going right before it hits the ground?",
          options: ["5 m/s", "9.9 m/s", "49 m/s", "25 m/s"], answer: 1,
          why: "mgh = ½mv² → v = √(2gh) = √(2 × 9.8 × 5.0) ≈ 9.9 m/s. Mass cancels.",
          miss: "Forgetting the square root or that the mass cancels." },
        { q: "A machine does 600 J of work in 3.0 s. What is its power output?",
          options: ["1800 W", "200 W", "600 W", "20 W"], answer: 1,
          why: "P = W/t = 600/3 = 200 W (200 J/s).",
          miss: "Multiplying instead of dividing; confusing work and power." },
        { q: "A car skids to a stop with the brakes locked. If its initial speed doubles, its skid distance (same road) becomes…",
          options: ["2× as long", "4× as long", "8× as long", "the same"], answer: 1,
          why: "Friction work equals the KE: μmg·d = ½mv² → d ∝ v². Doubling speed means 4× the distance.",
          miss: "Assuming stopping distance is proportional to speed." },
        { q: "A skateboarder rolls down a ramp and some mechanical energy is lost to friction. Where does the 'missing' energy go?",
          options: ["It is destroyed", "It becomes thermal energy (and sound)", "It becomes more kinetic energy", "It becomes momentum"], answer: 1,
          why: "Total energy is conserved; friction transforms mechanical energy into thermal energy in the surfaces and air.",
          miss: "Believing energy is 'used up' or destroyed." }
      ],
      practice: [
        { q: "A 50 N force pushes a crate 4.0 m in the direction of the force. How much work is done?", a: "W = 50 × 4.0 = 200 J" },
        { q: "Find the kinetic energy of a 1000 kg car moving at 20 m/s. How much work is needed to stop it?", a: "KE = ½(1000)(400) = 200,000 J; stopping requires W = −200,000 J (200 kJ)" },
        { q: "A 0.50 kg ball is dropped from 10 m. Find its initial PE and speed at the ground.", a: "PE = 0.50(9.8)(10) = 49 J; v = √(2·9.8·10) ≈ 14 m/s" },
        { q: "A 500 kg coaster car starts from rest at a height of 40 m. Speed at a height of 10 m (frictionless)?", a: "v = √(2g(40 − 10)) = √588 ≈ 24 m/s" },
        { q: "A 60 kg student climbs 3.0 m of stairs in 4.0 s. Work done against gravity and power?", a: "W = 60(9.8)(3.0) ≈ 1760 J; P = 1764/4.0 ≈ 440 W" }
      ],
      resources: [
        { name: "PhET: Energy Skate Park", url: "https://phet.colorado.edu/en/simulations/energy-skate-park", type: "Simulation", note: "Bar charts of KE, PE, thermal energy with friction on/off." },
        { name: "PhET: Masses & Springs", url: "https://phet.colorado.edu/en/simulations/masses-and-springs", type: "Simulation", note: "Elastic potential energy." },
        { name: "The Physics Classroom: Work, Energy, and Power", url: "https://www.physicsclassroom.com/class/energy", type: "Tutorial", note: "Work-energy theorem and conservation." },
        { name: "Khan Academy: Work and energy", url: "https://www.khanacademy.org/science/physics/work-and-energy", type: "Video + practice", note: "Mastery exercises." },
        { name: "OpenStax High School Physics", url: "https://openstax.org/details/books/physics", type: "Free textbook", note: "Work, power and energy chapters." }
      ],
      realWorld: [
        "Roller coasters, ski jumps and skateboard parks: trading PE and KE.",
        "Renewable energy: hydroelectric dams, wind turbines and regenerative braking in EVs.",
        "Efficiency labels on appliances and cars (useful output / input energy).",
        "Stopping distance and speed limits near schools (KE ∝ v²).",
        "Human power: food Calories as chemical energy and athletic power outputs."
      ],
      lab: "Energy Skate Park / ramp-and-photogate lab: predict speed at the bottom from energy conservation, measure it, and calculate percent difference; quantify the energy transformed to thermal energy by friction.",
      assessment: {
        formative: "Energy bar-chart whiteboards; quick checks on W = Fd cosθ sign and angle cases.",
        summative: "Unit test: work, KE/PE calculations, conservation with and without friction, power.",
        performance: "HS-PS3-3 build a Rube Goldberg or marble-run energy converter; model energy flows with a spreadsheet and reflect (HS-PS3-1).",
        mastery: "≥ 80% on the unit quiz AND Proficient (3) on the energy-transfer model/diagram."
      }
    }
  ]
};

if (typeof module !== "undefined" && module.exports) module.exports = COURSE;
