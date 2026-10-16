window.PHYSICS_DATA = {
 "proficiency": 80,
 "topics": [
  {
   "id": "kinematics",
   "num": 1,
   "title": "Kinematics",
   "weeks": 3,
   "ngss": [
    [
     "HS-PS2-1",
     "Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration. (Kinematics supplies the acceleration data.)"
    ]
   ],
   "sep": "Analyzing and interpreting data; using mathematics and computational thinking.",
   "ccc": "Patterns; cause and effect.",
   "big_idea": "Motion can be described precisely with position, velocity, and acceleration, using graphs, tables, and equations.",
   "concepts": [
    [
     "Position, distance, displacement",
     "Distance is a scalar path length; displacement is a vector from start to end (Δx = x_f − x_i)."
    ],
    [
     "Speed vs. velocity",
     "Speed = distance/time (scalar). Velocity = displacement/time (vector, has direction)."
    ],
    [
     "Acceleration",
     "a = Δv/Δt. Any change in speed OR direction is an acceleration. Units m/s²."
    ],
    [
     "Motion graphs",
     "x–t slope = velocity. v–t slope = acceleration; v–t area = displacement."
    ],
    [
     "Constant-acceleration equations",
     "v = v₀ + at;  Δx = v₀t + ½at²;  v² = v₀² + 2aΔx;  Δx = ½(v₀+v)t."
    ],
    [
     "Free fall",
     "Near Earth's surface, ignoring air resistance, every object accelerates at g = 9.8 m/s² downward, regardless of mass."
    ]
   ],
   "equations": [
    "v = Δx / Δt",
    "a = Δv / Δt",
    "v = v₀ + at",
    "Δx = v₀t + ½at²",
    "v² = v₀² + 2aΔx",
    "g = 9.8 m/s² (down)"
   ],
   "vocab": [
    "scalar",
    "vector",
    "displacement",
    "velocity",
    "acceleration",
    "free fall",
    "slope",
    "reference frame"
   ],
   "cornell": {
    "title": "Cornell Notes: Kinematics",
    "rows": [
     [
      "What is the difference between distance and displacement?",
      "Distance = total path length (scalar, never negative). Displacement = straight-line change in position with direction (vector). Run one lap of a track: distance = 400 m, displacement = 0."
     ],
     [
      "Speed vs. velocity?",
      "Speed = distance ÷ time (scalar). Velocity = displacement ÷ time (vector). Velocity can be negative (direction); speed cannot."
     ],
     [
      "What is acceleration?",
      "a = Δv/Δt. Speeding up, slowing down, OR turning all count. If v and a point the same way → speeding up; opposite ways → slowing down."
     ],
     [
      "How do I read a graph?",
      "x–t: slope = velocity. v–t: slope = acceleration, area under curve = displacement. Flat v–t line = constant velocity (a = 0). Straight sloped v–t line = constant acceleration."
     ],
     [
      "Which equation do I pick?",
      "List knowns (v₀, v, a, Δx, t). Choose the equation that has your unknown and omits the quantity you don't have."
     ],
     [
      "How does free fall work?",
      "a = −9.8 m/s² the whole flight (up, at the top, and down). At the top v = 0 but a is still 9.8 m/s² down. Mass does not matter without air resistance."
     ]
    ],
    "summary": "Kinematics describes motion without asking why. Choose a positive direction, list knowns, pick the equation, and check units and sign. Graphs and equations are two views of the same motion."
   },
   "quiz": [
    {
     "q": "A ball is thrown straight up. At the very top of its flight, what are its velocity and acceleration (ignore air)?",
     "choices": [
      "v = 0, a = 9.8 m/s² downward",
      "v = 0, a = 0",
      "v = 9.8 m/s upward, a = 0",
      "v = 0, a = 9.8 m/s² upward"
     ],
     "answer": 0,
     "why": "Gravity acts the whole flight. At the top the velocity is momentarily zero but the velocity is still changing, so a = 9.8 m/s² down.",
     "misconception": "Zero velocity means zero acceleration."
    },
    {
     "q": "A runner completes one 400 m lap in 80 s. What is the average velocity and average speed?",
     "choices": [
      "0 m/s and 5 m/s",
      "5 m/s and 5 m/s",
      "0 m/s and 0 m/s",
      "5 m/s and 0 m/s"
     ],
     "answer": 0,
     "why": "Displacement for a full lap is 0, so average velocity is 0. Average speed = 400 m / 80 s = 5 m/s.",
     "misconception": "Speed and velocity are the same thing."
    },
    {
     "q": "A car's v–t graph rises uniformly from 0 to 10 m/s in 5 s, then stays at 10 m/s for 5 s. What is its total displacement?",
     "choices": [
      "75 m",
      "100 m",
      "50 m",
      "25 m"
     ],
     "answer": 0,
     "why": "Area under v–t: triangle ½(5)(10) = 25 m plus rectangle (5)(10) = 50 m → 75 m.",
     "misconception": "Using v_final × total time instead of finding the area."
    },
    {
     "q": "A car starts from rest and accelerates at 3 m/s² for 4 s. How far does it travel?",
     "choices": [
      "24 m",
      "48 m",
      "12 m",
      "6 m"
     ],
     "answer": 0,
     "why": "Δx = v₀t + ½at² = 0 + ½(3)(4²) = 24 m.",
     "misconception": "Forgetting the ½ or forgetting to square t."
    },
    {
     "q": "An object has negative velocity and negative acceleration. What is happening to its speed?",
     "choices": [
      "Speeding up",
      "Slowing down",
      "Constant speed",
      "Cannot tell without more information"
     ],
     "answer": 0,
     "why": "When velocity and acceleration have the same sign they point the same way, so speed increases.",
     "misconception": "Negative acceleration always means slowing down."
    },
    {
     "q": "A rock is dropped from rest. Ignoring air resistance, how fast is it moving after 3.0 s?",
     "choices": [
      "29.4 m/s",
      "9.8 m/s",
      "14.7 m/s",
      "88.2 m/s"
     ],
     "answer": 0,
     "why": "v = v₀ + at = 0 + (9.8)(3.0) = 29.4 m/s.",
     "misconception": "Mixing up v = gt with Δx = ½gt²."
    },
    {
     "q": "A bowling ball and a tennis ball are dropped together from the same height in a vacuum. Which lands first?",
     "choices": [
      "They land at the same time",
      "The bowling ball",
      "The tennis ball",
      "It depends on the height only"
     ],
     "answer": 0,
     "why": "In free fall a = g for every mass. Heavier objects feel more gravity but also have more inertia, so the acceleration is the same.",
     "misconception": "Heavier objects fall faster."
    },
    {
     "q": "A car moving at 20 m/s brakes with a constant acceleration of −5 m/s². How far does it travel before stopping?",
     "choices": [
      "40 m",
      "80 m",
      "20 m",
      "4 m"
     ],
     "answer": 0,
     "why": "v² = v₀² + 2aΔx → 0 = 400 + 2(−5)Δx → Δx = 40 m. Note: doubling speed would quadruple the stopping distance.",
     "misconception": "Stopping distance grows linearly with speed (it grows with v²)."
    },
    {
     "q": "Convert 72 km/h to m/s.",
     "choices": [
      "20 m/s",
      "259 m/s",
      "7.2 m/s",
      "72 m/s"
     ],
     "answer": 0,
     "why": "72 km/h × (1000 m / 1 km) × (1 h / 3600 s) = 20 m/s (divide km/h by 3.6).",
     "misconception": "Unit conversion errors (multiplying by 3.6 instead of dividing)."
    }
   ],
   "practice": [
    [
     "A cyclist slows from 12 m/s to rest in 4.0 s. Find the acceleration and the stopping distance.",
     "a = −3.0 m/s²; Δx = 24 m."
    ],
    [
     "A hiker walks 40 m east then 30 m north in 50 s. Find distance, displacement, average speed, and average velocity.",
     "Distance 70 m; displacement 50 m (37° N of E); avg speed 1.4 m/s; avg velocity 1.0 m/s."
    ],
    [
     "A stone dropped from a bridge hits the water after 2.5 s. How high is the bridge and how fast is the stone going on impact?",
     "h ≈ 30.6 m; v ≈ 24.5 m/s."
    ],
    [
     "A car speeds up from 15 m/s to 25 m/s over 200 m. Find the acceleration and the time.",
     "a = 1.0 m/s²; t = 10 s."
    ],
    [
     "An object starts at x = 2 m, moves +3 m/s for 4 s, rests 3 s, then moves −2 m/s for 5 s. Find the final position and total distance traveled.",
     "Final x = 4 m; total distance = 12 + 10 = 22 m."
    ]
   ],
   "resources": [
    [
     "PhET: Moving Man (simulation)",
     "phet.colorado.edu",
     "Build x–t, v–t, a–t graphs by moving a character; match graphs to motion."
    ],
    [
     "The Physics Classroom: 1-D Kinematics",
     "physicsclassroom.com",
     "Plain-language lessons, interactives, and practice with answers."
    ],
    [
     "Khan Academy: One-dimensional motion",
     "khanacademy.org",
     "Video lessons and practice exercises."
    ],
    [
     "HyperPhysics: Kinematics",
     "hyperphysics.phy-astr.gsu.edu",
     "Concept maps and calculators."
    ],
    [
     "IXL Physics (high school)",
     "ixl.com",
     "Skill-by-skill practice on speed, velocity, acceleration, and graphs."
    ],
    [
     "Tracker video analysis (free)",
     "physlets.org/tracker",
     "Analyze motion from a phone video to get x–t and v–t data."
    ]
   ],
   "labs": [
    "Constant-velocity buggy: collect position–time data, fit a line, interpret slope.",
    "Ramp & cart (or phone phyphox): measure acceleration; verify Δx = ½at².",
    "Reaction-time ruler drop: compute reaction time from d = ½gt²."
   ],
   "real_world": [
    "Following distance and stopping distance for new drivers (why speed matters quadratically).",
    "Speed cameras and average-speed zones; GPS speed vs. velocity.",
    "Track & field: reading a 100 m split-time table as acceleration, then constant velocity.",
    "Elevator ride graphs and amusement-park free-fall drops."
   ],
   "objectives": [
    "Distinguish distance/displacement and speed/velocity and compute each.",
    "Calculate acceleration from velocity and time data and interpret its sign.",
    "Construct and interpret x–t and v–t graphs, including slope and area.",
    "Select and apply the constant-acceleration equations to solve multi-step problems.",
    "Model free fall with a = 9.8 m/s² and explain why mass does not matter."
   ],
   "rubric": {
    "Mastery (4)": "Correctly solves multi-step and graph-based problems with units, signs, and justification; explains misconceptions.",
    "Proficient (3)": "Solves standard problems with correct setup; minor arithmetic or sign slip.",
    "Developing (2)": "Identifies variables and quantities but needs support choosing equations or interpreting graphs.",
    "Beginning (1)": "Confuses core terms (speed/velocity, v/a); equation use is guesswork."
   }
  },
  {
   "id": "projectile",
   "num": 2,
   "title": "Projectile Motion",
   "weeks": 2,
   "ngss": [
    [
     "HS-PS2-1",
     "Analyze data to support the claim that Newton's second law describes the relationship among net force, mass, and acceleration. (Gravity is the only force on a projectile, so a = g.)"
    ]
   ],
   "sep": "Using mathematics and computational thinking; developing and using models.",
   "ccc": "Systems and system models; cause and effect.",
   "big_idea": "Horizontal and vertical motion are independent: constant velocity sideways, constant acceleration (g) vertically.",
   "concepts": [
    [
     "Independence of components",
     "x- and y-motion are analyzed separately and linked only by time."
    ],
    [
     "Horizontal component",
     "No horizontal force (ignoring air): aₓ = 0, so vₓ is constant and Δx = vₓt."
    ],
    [
     "Vertical component",
     "a_y = −9.8 m/s². Use the constant-acceleration equations for y."
    ],
    [
     "Launch at an angle",
     "v₀ₓ = v₀cosθ, v₀y = v₀sinθ. Time up = v₀y / g."
    ],
    [
     "Key features of the path",
     "Parabola. At the peak v_y = 0 but vₓ ≠ 0 and a = 9.8 m/s² down. Range is max at 45° (same launch/landing height); complementary angles give equal range."
    ],
    [
     "Horizontal launch",
     "v₀y = 0. Fall time t = √(2h/g) depends only on height, not on horizontal speed."
    ]
   ],
   "equations": [
    "v₀ₓ = v₀ cosθ",
    "v₀y = v₀ sinθ",
    "Δx = vₓ t",
    "Δy = v₀y t − ½gt²",
    "t_flight = 2v₀y / g (level ground)",
    "R = v₀² sin2θ / g (level ground)",
    "H = v₀y² / 2g"
   ],
   "vocab": [
    "projectile",
    "trajectory",
    "component",
    "range",
    "time of flight",
    "apex",
    "independence of motion"
   ],
   "cornell": {
    "title": "Cornell Notes: Projectile Motion",
    "rows": [
     [
      "What is a projectile?",
      "Any object moving under gravity alone after launch (no engine, no air resistance in our model). Path is a parabola."
     ],
     [
      "Why split into x and y?",
      "Gravity only affects the vertical motion, so the two directions are independent. Time is the shared variable."
     ],
     [
      "What happens horizontally?",
      "aₓ = 0 → vₓ constant → Δx = vₓt."
     ],
     [
      "What happens vertically?",
      "a_y = −9.8 m/s². Up and down are symmetric (same height → same speed, mirrored velocity)."
     ],
     [
      "How do I handle an angled launch?",
      "Resolve v₀ into v₀cosθ and v₀sinθ. Find time from the vertical motion, then use it in the horizontal equation."
     ],
     [
      "Max range and angles?",
      "45° maximizes range on level ground; θ and (90° − θ) give the same range. Steeper angle → higher peak and longer hang time."
     ]
    ],
    "summary": "A projectile is two simultaneous 1-D problems tied together by time. Horizontal = constant speed. Vertical = free fall. Solve vertical for time, then plug into horizontal."
   },
   "quiz": [
    {
     "q": "One ball is dropped from a table while an identical ball is rolled horizontally off the table at the same instant. Which hits the floor first (ignore air)?",
     "choices": [
      "They hit at the same time",
      "The dropped ball",
      "The rolled ball",
      "It depends on the horizontal speed"
     ],
     "answer": 0,
     "why": "Both start with zero vertical velocity and fall the same height with a = g. Horizontal speed does not affect fall time.",
     "misconception": "Horizontal speed changes how long the object takes to fall."
    },
    {
     "q": "Ignoring air resistance, what happens to the horizontal velocity of a projectile during flight?",
     "choices": [
      "It stays constant",
      "It decreases to zero at the top",
      "It increases steadily",
      "It equals 9.8 m/s"
     ],
     "answer": 0,
     "why": "No horizontal force means no horizontal acceleration, so vₓ is constant.",
     "misconception": "A projectile needs a continuing 'push' to keep moving forward."
    },
    {
     "q": "At the highest point of a projectile's path launched at an angle, which statement is true?",
     "choices": [
      "v_y = 0, vₓ ≠ 0, a = 9.8 m/s² down",
      "v = 0 and a = 0",
      "vₓ = 0 and v_y ≠ 0",
      "a = 0 because the ball is changing direction"
     ],
     "answer": 0,
     "why": "Only the vertical component is zero at the apex. Horizontal velocity remains, and gravity still accelerates the ball downward.",
     "misconception": "The projectile stops at the top."
    },
    {
     "q": "On level ground (no air), which launch angle gives the greatest range for a given launch speed?",
     "choices": [
      "45°",
      "30°",
      "60°",
      "90°"
     ],
     "answer": 0,
     "why": "R = v₀² sin2θ / g is largest when 2θ = 90°, so θ = 45°. Note 30° and 60° give the same (smaller) range.",
     "misconception": "A steeper angle always goes farther."
    },
    {
     "q": "A ball rolls off a 1.25 m high table at 4.0 m/s. About how far from the table's edge does it land?",
     "choices": [
      "2.0 m",
      "1.0 m",
      "4.0 m",
      "0.5 m"
     ],
     "answer": 0,
     "why": "t = √(2h/g) = √(2·1.25/9.8) ≈ 0.505 s. Δx = vₓt = 4.0 × 0.505 ≈ 2.0 m.",
     "misconception": "Using the height as the horizontal distance, or forgetting to find time first."
    },
    {
     "q": "A ball is launched at 20 m/s at 30° above horizontal. What are the initial horizontal and vertical velocity components?",
     "choices": [
      "17.3 m/s and 10 m/s",
      "10 m/s and 17.3 m/s",
      "20 m/s and 0",
      "17.3 m/s and 17.3 m/s"
     ],
     "answer": 0,
     "why": "vₓ = 20cos30° = 17.3 m/s; v_y = 20sin30° = 10 m/s. (Cosine goes with the component next to the angle.)",
     "misconception": "Swapping sine and cosine."
    },
    {
     "q": "A plane flies horizontally at constant velocity and drops a package. Ignoring air resistance, where is the package relative to the plane as it falls?",
     "choices": [
      "Directly below the plane",
      "Behind the plane",
      "Ahead of the plane",
      "It depends on the plane's altitude"
     ],
     "answer": 0,
     "why": "The package keeps the plane's horizontal velocity, so it stays directly below until it hits the ground.",
     "misconception": "Dropped objects fall straight down in the ground frame."
    },
    {
     "q": "Two balls are launched with the same speed, one at 30° and one at 60°. Which statement is correct?",
     "choices": [
      "Same range; the 60° ball goes higher and stays up longer",
      "The 60° ball has a longer range",
      "The 30° ball has a longer range",
      "Same range, same height"
     ],
     "answer": 0,
     "why": "Complementary angles give equal range. The steeper launch has a larger v_y, so greater height and time of flight.",
     "misconception": "Equal range means equal path."
    }
   ],
   "practice": [
    [
     "A ball is kicked horizontally at 12 m/s from a 45 m high cliff. Find the time in the air and the horizontal distance.",
     "t ≈ 3.03 s; Δx ≈ 36.4 m."
    ],
    [
     "A projectile is launched at 25 m/s at 40°. Find the time of flight, range, and maximum height.",
     "t ≈ 3.28 s; R ≈ 62.8 m; H ≈ 13.2 m."
    ],
    [
     "A plane flying 50 m/s horizontally at 500 m altitude releases a package. How far ahead (horizontally) of the release point does it land?",
     "t ≈ 10.1 s; Δx ≈ 505 m."
    ],
    [
     "A ball has the same range when launched at 25°. At what other angle (same speed) would it have this same range?",
     "65°."
    ],
    [
     "A soccer ball is kicked at 15 m/s at 60°. How long until it reaches the top, and how fast is it moving there?",
     "t ≈ 1.33 s; speed at top = vₓ = 7.5 m/s."
    ]
   ],
   "resources": [
    [
     "PhET: Projectile Motion (simulation)",
     "phet.colorado.edu",
     "Change angle, speed, mass, and air resistance; compare trajectories."
    ],
    [
     "The Physics Classroom: Projectiles",
     "physicsclassroom.com",
     "Lessons on horizontal launch, angled launch, and interactives."
    ],
    [
     "Khan Academy: Two-dimensional projectile motion",
     "khanacademy.org",
     "Video lessons and practice."
    ],
    [
     "Desmos / GeoGebra",
     "desmos.com",
     "Graph y(x) for a projectile and slide the angle."
    ],
    [
     "Tracker or phone slow-motion video",
     "physlets.org/tracker",
     "Mark a ball's position frame-by-frame to see the parabola."
    ]
   ],
   "labs": [
    "Marble launch: measure range at several angles; graph range vs. angle.",
    "Horizontal-launch prediction challenge: predict landing spot, then place a target cup.",
    "Slow-motion video analysis of a tossed ball: confirm constant vₓ."
   ],
   "real_world": [
    "Basketball free-throw arc and optimal release angle.",
    "Long jump and javelin; why athletes aim near (but below) 45°.",
    "Firefighter hose streams and water fountains.",
    "Package drops and relief air-drops; artillery safety zones."
   ],
   "objectives": [
    "Resolve a velocity vector into horizontal and vertical components.",
    "Explain independence of horizontal and vertical motion.",
    "Solve horizontal-launch and angled-launch problems for time, range, and height.",
    "Predict how changing angle or speed changes range, peak, and time of flight.",
    "Use a simulation or video to compare a model's prediction to data."
   ],
   "rubric": {
    "Mastery (4)": "Resolves vectors, links x and y through time, and explains results with the independence principle; verifies with data.",
    "Proficient (3)": "Solves standard launch problems correctly with minor slips.",
    "Developing (2)": "Splits components but struggles linking them through time or interpreting the apex.",
    "Beginning (1)": "Treats the path as one-dimensional or believes a horizontal 'force' acts in flight."
   }
  },
  {
   "id": "newton",
   "num": 3,
   "title": "Newton's Laws",
   "weeks": 4,
   "ngss": [
    [
     "HS-PS2-1",
     "Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration."
    ],
    [
     "HS-PS2-4",
     "Use mathematical representations of Newton's Law of Gravitation and Coulomb's Law to describe and predict the gravitational and electrostatic forces between objects."
    ]
   ],
   "sep": "Analyzing data; using mathematics; constructing explanations.",
   "ccc": "Cause and effect; systems; patterns.",
   "big_idea": "Forces cause changes in motion: the net force on an object determines its acceleration.",
   "concepts": [
    [
     "Force & free-body diagrams",
     "A force is a push or pull (vector, newtons). FBDs show all forces acting ON one object."
    ],
    [
     "1st Law (inertia)",
     "Net force = 0 → constant velocity (including at rest). Mass measures inertia."
    ],
    [
     "2nd Law",
     "a = F_net / m, or F_net = ma. Acceleration is in the direction of the net force."
    ],
    [
     "3rd Law",
     "Forces come in equal-and-opposite pairs acting on DIFFERENT objects."
    ],
    [
     "Weight & normal force",
     "Weight W = mg (a force; changes with location). Normal force is perpendicular to the surface, not always equal to mg."
    ],
    [
     "Friction",
     "Static: up to μₛN. Kinetic: f = μₖN, opposing motion."
    ],
    [
     "Inclines",
     "Along the slope: mg sinθ. Perpendicular: N = mg cosθ."
    ],
    [
     "Universal gravitation",
     "F = Gm₁m₂/r². (Coulomb's Law has the same form: F = kq₁q₂/r², which we revisit in Semester 2.)"
    ]
   ],
   "equations": [
    "ΣF = ma",
    "W = mg",
    "f_k = μₖN",
    "f_s ≤ μₛN",
    "F_∥ = mg sinθ",
    "N = mg cosθ (incline)",
    "F_g = G m₁m₂ / r²"
   ],
   "vocab": [
    "force",
    "net force",
    "inertia",
    "mass",
    "weight",
    "normal force",
    "friction",
    "free-body diagram",
    "terminal velocity",
    "action–reaction pair"
   ],
   "cornell": {
    "title": "Cornell Notes: Newton's Laws",
    "rows": [
     [
      "Newton's 1st Law?",
      "An object keeps its velocity (rest or constant velocity) unless a net external force acts. Motion at constant velocity does NOT require a net force."
     ],
     [
      "Newton's 2nd Law?",
      "ΣF = ma. Find the NET force (vector sum), divide by mass. Doubling the force doubles a; doubling the mass halves a."
     ],
     [
      "Newton's 3rd Law?",
      "If A pushes on B, B pushes on A with equal size, opposite direction. The pair acts on different objects, so they never cancel each other in one FBD."
     ],
     [
      "Mass vs. weight?",
      "Mass (kg) = amount of matter, doesn't change. Weight (N) = gravitational force = mg. Moon: g ≈ 1.6 m/s²."
     ],
     [
      "How do I draw an FBD?",
      "Isolate one object, draw a dot, draw arrows for every force ON it (gravity, normal, friction, tension, applied). Label and pick axes."
     ],
     [
      "What does friction do?",
      "Opposes sliding. f_k = μₖN. N depends on the situation (incline, extra pushes, elevators), not always mg."
     ],
     [
      "Inclines?",
      "Tilt the axes: along the ramp and perpendicular to it. Gravity component along = mg sinθ; N = mg cosθ."
     ]
    ],
    "summary": "Draw an FBD, resolve forces, sum them on each axis, and apply ΣF = ma. Third-law pairs act on different bodies; only forces on the same body are added."
   },
   "quiz": [
    {
     "q": "A hockey puck slides across frictionless ice at constant velocity. What is the net horizontal force on it?",
     "choices": [
      "Zero",
      "Equal to its weight",
      "Equal to its mass times its velocity",
      "A forward force equal to the motion"
     ],
     "answer": 0,
     "why": "Constant velocity means a = 0, so by Newton's 1st/2nd Law the net force is zero. No forward 'force of motion' is needed.",
     "misconception": "Motion requires a force."
    },
    {
     "q": "A truck collides head-on with a small insect. Which statement about the collision forces is correct?",
     "choices": [
      "They are equal in magnitude",
      "The truck exerts a larger force",
      "The insect exerts a larger force",
      "Only the truck exerts a force"
     ],
     "answer": 0,
     "why": "Third-law pairs are equal and opposite. The insect's acceleration is far larger only because its mass is tiny.",
     "misconception": "Bigger objects exert bigger forces in a collision."
    },
    {
     "q": "A 60 kg astronaut goes to the Moon, where g ≈ 1.6 m/s². What are the astronaut's mass and weight there?",
     "choices": [
      "60 kg and 96 N",
      "10 kg and 96 N",
      "60 kg and 588 N",
      "10 kg and 588 N"
     ],
     "answer": 0,
     "why": "Mass doesn't change (60 kg). Weight = mg = 60 × 1.6 = 96 N.",
     "misconception": "Mass and weight are the same, or mass changes with location."
    },
    {
     "q": "A book rests on a table. Which pair is a Newton's Third Law pair?",
     "choices": [
      "The book pushes down on the table; the table pushes up on the book",
      "Gravity pulls the book down; the table pushes the book up",
      "Gravity on the book; normal force on the book",
      "Weight of the book; force of the table on the floor"
     ],
     "answer": 0,
     "why": "A third-law pair is the same interaction (book–table) with forces on different objects. Weight and normal are both on the book, so they're not a pair (they only cancel because a = 0).",
     "misconception": "Weight and normal force are action–reaction pairs."
    },
    {
     "q": "A net force of 10 N acts on a 2.0 kg cart. What is its acceleration?",
     "choices": [
      "5 m/s²",
      "20 m/s²",
      "0.2 m/s²",
      "12 m/s²"
     ],
     "answer": 0,
     "why": "a = F/m = 10/2.0 = 5 m/s².",
     "misconception": "Multiplying instead of dividing (a = Fm)."
    },
    {
     "q": "A 5 kg block slides down a frictionless 30° incline. What is its acceleration?",
     "choices": [
      "4.9 m/s²",
      "9.8 m/s²",
      "8.5 m/s²",
      "24.5 m/s²"
     ],
     "answer": 0,
     "why": "a = g sinθ = 9.8 × 0.5 = 4.9 m/s². The mass cancels out.",
     "misconception": "Acceleration on a ramp equals g, or depends on mass."
    },
    {
     "q": "A 70 kg person stands on a scale in an elevator accelerating upward at 2.0 m/s². What does the scale read?",
     "choices": [
      "About 826 N",
      "686 N",
      "546 N",
      "140 N"
     ],
     "answer": 0,
     "why": "N − mg = ma → N = m(g + a) = 70(9.8 + 2.0) = 826 N. Upward acceleration makes you feel heavier.",
     "misconception": "The scale always reads mg."
    },
    {
     "q": "A 20 kg crate is pushed on a floor with a 50 N force. μₖ = 0.20. What is its acceleration?",
     "choices": [
      "About 0.54 m/s²",
      "2.5 m/s²",
      "1.96 m/s²",
      "0 m/s² (it won't move)"
     ],
     "answer": 0,
     "why": "f = μₖmg = 0.20 × 20 × 9.8 = 39.2 N. Net = 50 − 39.2 = 10.8 N. a = 10.8/20 ≈ 0.54 m/s².",
     "misconception": "Ignoring friction or forgetting to subtract it from the applied force."
    }
   ],
   "practice": [
    [
     "A 1200 kg car's engine produces 3000 N of forward force against 600 N of friction. Find the acceleration.",
     "a = 2.0 m/s²."
    ],
    [
     "Find the mass and weight of a 70 kg astronaut on Earth (g = 9.8) and on the Moon (g = 1.6).",
     "Mass 70 kg both; weight 686 N on Earth, 112 N on the Moon."
    ],
    [
     "A 10 kg crate slides down a frictionless 25° ramp. Find its acceleration and the normal force.",
     "a ≈ 4.14 m/s²; N ≈ 88.8 N."
    ],
    [
     "A 20 N horizontal push is applied to a 3 kg block touching a 2 kg block on frictionless ice. Find a and the force the 3 kg block exerts on the 2 kg block.",
     "a = 4 m/s²; contact force = 8 N."
    ],
    [
     "A skydiver (80 kg) reaches terminal velocity. Draw the FBD and state the drag force.",
     "Net force = 0; drag = weight = 784 N upward."
    ]
   ],
   "resources": [
    [
     "PhET: Forces and Motion: Basics",
     "phet.colorado.edu",
     "Apply forces, change mass, show friction, see acceleration."
    ],
    [
     "PhET: Friction & Ramp: Forces and Motion",
     "phet.colorado.edu",
     "Explore incline forces and friction."
    ],
    [
     "The Physics Classroom: Newton's Laws",
     "physicsclassroom.com",
     "FBD tutorials, practice, and interactives."
    ],
    [
     "Khan Academy: Forces and Newton's laws",
     "khanacademy.org",
     "Videos and exercises."
    ],
    [
     "IXL Physics",
     "ixl.com",
     "Practice on net force, FBDs, and Newton's laws."
    ],
    [
     "Phyphox app",
     "phyphox.org",
     "Use your phone's accelerometer to measure acceleration in an elevator or on a cart."
    ]
   ],
   "labs": [
    "Cart + hanging mass: vary force and mass, graph a vs. F and a vs. 1/m to test Newton's 2nd Law (HS-PS2-1).",
    "Friction lab: measure μₛ and μₖ by pulling a block with a spring scale; or tilting a ramp.",
    "Elevator or phyphox lab: record apparent weight changes.",
    "Balloon/bottle-rocket: identify 3rd-law pairs."
   ],
   "real_world": [
    "Seat belts and headrests (inertia).",
    "Rocket and jet propulsion (3rd Law).",
    "Elevator and roller-coaster 'g-forces'.",
    "Tire tread, ABS brakes, and wet-road friction.",
    "Orbits and satellites: gravity as a force at a distance."
   ],
   "objectives": [
    "Draw accurate free-body diagrams for objects at rest, at constant velocity, and accelerating.",
    "Apply ΣF = ma to one- and two-dimensional problems (including inclines and friction).",
    "Identify third-law pairs and explain why they don't cancel.",
    "Distinguish mass, weight, and normal force.",
    "Use experimental data to show a ∝ F and a ∝ 1/m (HS-PS2-1).",
    "Use F = Gm₁m₂/r² to predict how gravitational force changes with mass and distance (HS-PS2-4)."
   ],
   "rubric": {
    "Mastery (4)": "Draws correct FBDs for complex setups, solves multi-force problems, and uses experimental data to justify Newton's 2nd Law.",
    "Proficient (3)": "Correct FBDs and ΣF = ma on standard problems; occasional component or sign error.",
    "Developing (2)": "Lists some forces but misses normal/friction or confuses mass and weight.",
    "Beginning (1)": "Believes motion requires a force or pairs weight with normal force as action–reaction."
   }
  },
  {
   "id": "momentum",
   "num": 4,
   "title": "Momentum",
   "weeks": 3,
   "ngss": [
    [
     "HS-PS2-2",
     "Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system."
    ],
    [
     "HS-PS2-3",
     "Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision."
    ]
   ],
   "sep": "Using mathematics; constructing explanations and designing solutions.",
   "ccc": "Systems and system models; cause and effect; stability and change.",
   "big_idea": "In an isolated system, total momentum is conserved. Impulse changes momentum, and stretching the collision time reduces the force.",
   "concepts": [
    [
     "Momentum",
     "p = mv. Vector (direction matters); units kg·m/s."
    ],
    [
     "Impulse",
     "J = FΔt = Δp. Impulse equals change in momentum (the impulse–momentum theorem)."
    ],
    [
     "Force & time in collisions",
     "Same Δp with a longer Δt means a smaller average force (airbags, crumple zones, padding)."
    ],
    [
     "Conservation of momentum",
     "If net external force on a system is zero: Σp_before = Σp_after."
    ],
    [
     "Collision types",
     "Elastic: momentum and KE conserved. Inelastic: momentum conserved, KE not. Perfectly inelastic: objects stick together."
    ],
    [
     "Explosions & recoil",
     "System starts with p = 0, so pieces' momenta cancel (m₁v₁ = −m₂v₂)."
    ]
   ],
   "equations": [
    "p = mv",
    "J = FΔt = Δp = m(v_f − v_i)",
    "m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′",
    "Perfectly inelastic: v′ = (m₁v₁ + m₂v₂)/(m₁ + m₂)"
   ],
   "vocab": [
    "momentum",
    "impulse",
    "system",
    "isolated system",
    "conservation",
    "elastic",
    "inelastic",
    "recoil",
    "crumple zone"
   ],
   "cornell": {
    "title": "Cornell Notes: Momentum",
    "rows": [
     [
      "What is momentum?",
      "p = mv, a vector in the direction of velocity. A heavy, slow truck and a light, fast bullet can have similar momentum."
     ],
     [
      "What is impulse?",
      "J = FΔt = Δp. A force acting over time changes an object's momentum. Area under an F–t graph = impulse."
     ],
     [
      "Why do airbags help?",
      "They increase Δt for the same Δp, so the average force on you is smaller: F = Δp / Δt."
     ],
     [
      "When is momentum conserved?",
      "When no net external force acts on the system. Choose the system so interacting objects are inside it."
     ],
     [
      "Elastic vs. inelastic?",
      "Momentum is conserved in all collisions (isolated system). KE is conserved only in elastic ones; in inelastic collisions KE converts to thermal energy, sound, and deformation."
     ],
     [
      "How do I solve a collision?",
      "1) Pick + direction. 2) Write p_before = p_after. 3) Plug in signed velocities. 4) Solve. 5) Check KE if asked."
     ],
     [
      "Explosions?",
      "Start at rest → total p = 0. Pieces move in opposite directions with m₁v₁ = −m₂v₂."
     ]
    ],
    "summary": "Momentum = mass × velocity (a vector). Impulse changes momentum. In an isolated system total momentum stays constant. Protective devices work by lengthening the collision time to reduce force."
   },
   "quiz": [
    {
     "q": "A 1000 kg car moving at 20 m/s hits a stationary 1000 kg car and they stick together. What is their velocity after impact?",
     "choices": [
      "10 m/s",
      "20 m/s",
      "40 m/s",
      "5 m/s"
     ],
     "answer": 0,
     "why": "m₁v₁ = (m₁ + m₂)v′ → (1000)(20) = (2000)v′ → v′ = 10 m/s.",
     "misconception": "Forgetting that the combined mass changes the speed."
    },
    {
     "q": "Why does an airbag reduce injury in a crash?",
     "choices": [
      "It increases the stopping time, reducing the average force",
      "It reduces the change in momentum",
      "It reduces the person's mass",
      "It increases the impulse"
     ],
     "answer": 0,
     "why": "Impulse (Δp) is fixed by the speed change; F = Δp/Δt, so a longer Δt gives a smaller force.",
     "misconception": "Safety devices reduce the momentum change."
    },
    {
     "q": "In an inelastic collision between two carts, which quantity is NOT conserved?",
     "choices": [
      "Kinetic energy",
      "Total momentum",
      "Total mass",
      "Total energy"
     ],
     "answer": 0,
     "why": "Momentum is conserved in all isolated collisions, and total energy is always conserved. Mechanical KE is converted into thermal, sound, and deformation.",
     "misconception": "Inelastic means momentum is lost."
    },
    {
     "q": "A 0.15 kg ball arrives at a bat at 30 m/s and leaves in the opposite direction at 40 m/s. What is the magnitude of the impulse on the ball?",
     "choices": [
      "10.5 kg·m/s",
      "1.5 kg·m/s",
      "4.5 kg·m/s",
      "6.0 kg·m/s"
     ],
     "answer": 0,
     "why": "Δp = m(v_f − v_i) = 0.15(40 − (−30)) = 0.15 × 70 = 10.5 kg·m/s. Direction reversal means you add the speeds.",
     "misconception": "Subtracting speeds when direction reverses."
    },
    {
     "q": "A 50 kg skater at rest throws a 2.0 kg ball forward at 10 m/s. Ignoring friction, what is the skater's recoil speed (skater mass 50 kg)?",
     "choices": [
      "0.40 m/s",
      "10 m/s",
      "0.20 m/s",
      "2.5 m/s"
     ],
     "answer": 0,
     "why": "Total momentum starts at 0: 0 = (2)(10) + (50)v → v = −0.40 m/s (opposite direction).",
     "misconception": "Both objects must end with equal speeds."
    },
    {
     "q": "Two equal-mass carts approach at +3 m/s and −3 m/s, collide, and stick together. What is the final velocity?",
     "choices": [
      "0 m/s",
      "3 m/s",
      "6 m/s",
      "−3 m/s"
     ],
     "answer": 0,
     "why": "Total p = m(3) + m(−3) = 0, so the stuck-together carts are at rest (all KE has been converted).",
     "misconception": "Ignoring the sign (direction) of momentum."
    },
    {
     "q": "A ball hits a wall and bounces back with the same speed. A clay ball of equal mass hits the wall at the same speed and sticks. Which receives the larger impulse?",
     "choices": [
      "The bouncing ball",
      "The clay ball",
      "They receive equal impulses",
      "Neither; the wall doesn't move"
     ],
     "answer": 0,
     "why": "The bouncing ball's velocity reverses, so |Δp| = m(v − (−v)) = 2mv. The clay ball only goes from v to 0, so |Δp| = mv.",
     "misconception": "Both stop the same, so same impulse."
    },
    {
     "q": "A 2 kg cart moving at 3 m/s collides with a stationary 1 kg cart and they stick. What is the final speed?",
     "choices": [
      "2 m/s",
      "3 m/s",
      "1 m/s",
      "1.5 m/s"
     ],
     "answer": 0,
     "why": "(2)(3) = (3)v′ → v′ = 2 m/s. Initial KE = 9 J; final KE = 6 J, so 3 J was converted to other forms.",
     "misconception": "Treating speed as unchanged, or averaging speeds."
    }
   ],
   "practice": [
    [
     "A 0.057 kg tennis ball is hit at 30 m/s toward the racket and returns at 40 m/s, in contact 0.005 s. Find the impulse and average force.",
     "J ≈ 3.99 N·s; F ≈ 798 N."
    ],
    [
     "A 1500 kg car going 12 m/s rear-ends a stopped 1000 kg car; they lock together. Find the final speed.",
     "v′ = 7.2 m/s."
    ],
    [
     "A 4 kg cart at 2 m/s has a perfectly elastic head-on collision with an identical stationary cart. Find the final velocities.",
     "First cart 0 m/s; second 2 m/s (velocities swap)."
    ],
    [
     "A 5 kg cart at rest explodes into a 2 kg piece moving +6 m/s and a 3 kg piece. Find the velocity of the 3 kg piece.",
     "−4 m/s."
    ],
    [
     "A 0.06 kg egg falls 2.0 m and stops in 0.002 s on concrete vs. 0.05 s on a foam pad. Compare the average forces.",
     "v ≈ 6.26 m/s; F ≈ 188 N (concrete) vs. ≈ 7.5 N (foam)."
    ]
   ],
   "resources": [
    [
     "PhET: Collision Lab",
     "phet.colorado.edu",
     "Run 1-D and 2-D collisions; toggle elasticity; see momentum vectors."
    ],
    [
     "PhET: Impulse and Momentum (if available)",
     "phet.colorado.edu",
     "Explore force–time graphs and impulse."
    ],
    [
     "The Physics Classroom: Momentum and Its Conservation",
     "physicsclassroom.com",
     "Lessons and interactives."
    ],
    [
     "Khan Academy: Impulse and momentum",
     "khanacademy.org",
     "Videos and practice."
    ],
    [
     "IXL Physics",
     "ixl.com",
     "Skill practice on momentum and impulse."
    ]
   ],
   "labs": [
    "Cart collisions on a track: compare p before and after for sticky and bouncy ends.",
    "Egg-drop / crash-test-dummy design challenge: minimize force on the egg (HS-PS2-3).",
    "Force-sensor impulse lab: area under F–t equals Δp."
   ],
   "real_world": [
    "Airbags, crumple zones, helmets, and padded playgrounds.",
    "Rocket propulsion and recoil of a firearm or cannon.",
    "Billiards, bowling, and football tackles.",
    "Car-crash reconstruction by investigators.",
    "Catching a fast ball by 'giving' with the hand."
   ],
   "objectives": [
    "Calculate momentum and impulse and relate them to force and time.",
    "Explain how increasing collision time reduces force and apply the idea to design a protective device (HS-PS2-3).",
    "Use conservation of momentum to solve 1-D collision and explosion problems (HS-PS2-2).",
    "Classify collisions as elastic or inelastic and compare kinetic energy before and after.",
    "Define a system so that net external force is zero."
   ],
   "rubric": {
    "Mastery (4)": "Handles signs, systems, and energy checks; designs and justifies a device with quantitative claims about force and time.",
    "Proficient (3)": "Applies conservation and impulse correctly to standard problems; minor sign slip.",
    "Developing (2)": "Writes p = mv but struggles with sign, combined mass, or defining the system.",
    "Beginning (1)": "Confuses momentum with force or energy; believes inelastic collisions don't conserve momentum."
   }
  },
  {
   "id": "energy",
   "num": 5,
   "title": "Work & Energy",
   "weeks": 3,
   "ngss": [
    [
     "HS-PS3-1",
     "Create a computational model to calculate the change in the energy of one component in a system when the change in energy of the other component(s) and the energy flows in and out of the system are known."
    ],
    [
     "HS-PS3-2",
     "Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as a combination of energy associated with the motions of particles (objects) and energy associated with the relative positions of particles (objects)."
    ],
    [
     "HS-PS3-3",
     "Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy."
    ]
   ],
   "sep": "Developing and using models; using computational thinking; designing solutions.",
   "ccc": "Energy and matter (conservation); systems and system models.",
   "big_idea": "Energy is transferred and transformed but total energy in a closed system is conserved. Work is the transfer of energy by a force.",
   "concepts": [
    [
     "Work",
     "W = Fd cosθ (joules). Only the force component along the displacement does work."
    ],
    [
     "Kinetic energy",
     "KE = ½mv². Depends on v², so doubling speed quadruples KE."
    ],
    [
     "Gravitational PE",
     "PE_g = mgh, relative to a chosen zero level."
    ],
    [
     "Elastic PE",
     "PE_s = ½kx² for a spring."
    ],
    [
     "Work–energy theorem",
     "W_net = ΔKE."
    ],
    [
     "Conservation of energy",
     "KE + PE (+ thermal) stays constant in a closed system; with friction, mechanical energy becomes thermal energy."
    ],
    [
     "Power & efficiency",
     "P = W/t (watts). Efficiency = useful output / total input."
    ]
   ],
   "equations": [
    "W = Fd cosθ",
    "KE = ½mv²",
    "PE_g = mgh",
    "PE_s = ½kx²",
    "W_net = ΔKE",
    "E_i = E_f (closed system)",
    "P = W/t = Fv",
    "Efficiency = E_useful / E_input"
   ],
   "vocab": [
    "work",
    "joule",
    "kinetic energy",
    "potential energy",
    "conservation of energy",
    "power",
    "watt",
    "efficiency",
    "thermal energy",
    "dissipation"
   ],
   "cornell": {
    "title": "Cornell Notes: Work & Energy",
    "rows": [
     [
      "What is work?",
      "Energy transferred by a force over a distance: W = Fd cosθ. If force ⟂ motion (carrying a box level) W = 0. No motion → no work."
     ],
     [
      "Kinetic energy?",
      "KE = ½mv². Energy of motion; v is squared, so 2× speed → 4× KE (and ~4× braking distance)."
     ],
     [
      "Potential energy?",
      "Stored energy due to position or configuration: mgh (gravity), ½kx² (spring). Depends on a chosen zero point."
     ],
     [
      "Work–energy theorem?",
      "Net work = change in KE. A braking force does negative work and removes KE."
     ],
     [
      "Conservation of energy?",
      "Energy changes form but the total is constant. With no friction: mgh_i + ½mv_i² = mgh_f + ½mv_f². Path shape doesn't matter, only height change."
     ],
     [
      "Where does 'lost' energy go?",
      "Friction and air resistance convert mechanical energy to thermal energy (dissipated, not destroyed). Efficiency < 100%."
     ],
     [
      "Power?",
      "Rate of doing work: P = W/t, in watts (J/s). 1 hp ≈ 746 W."
     ]
    ],
    "summary": "Work transfers energy. Energy is conserved: track KE, PE, and thermal energy before and after. Use energy methods when speed and height are asked, forces and time are not."
   },
   "quiz": [
    {
     "q": "You carry a heavy box horizontally across a room at constant velocity. How much work does your upward lifting force do on the box?",
     "choices": [
      "Zero",
      "Positive, equal to mg × distance",
      "Negative",
      "Equal to the box's KE"
     ],
     "answer": 0,
     "why": "The lifting force is perpendicular to the displacement (cos 90° = 0), so W = 0.",
     "misconception": "Effort or holding something heavy equals work."
    },
    {
     "q": "A car doubles its speed from 15 m/s to 30 m/s. By what factor does its kinetic energy change?",
     "choices": [
      "4",
      "2",
      "8",
      "1/2"
     ],
     "answer": 0,
     "why": "KE ∝ v². (2)² = 4. Also the braking distance quadruples.",
     "misconception": "KE is proportional to v."
    },
    {
     "q": "How much gravitational potential energy does a 2.0 kg object gain when lifted 5.0 m?",
     "choices": [
      "98 J",
      "10 J",
      "49 J",
      "9.8 J"
     ],
     "answer": 0,
     "why": "ΔPE = mgΔh = (2.0)(9.8)(5.0) = 98 J.",
     "misconception": "Using weight in kg or leaving out g."
    },
    {
     "q": "A ball is dropped from 20 m. Ignoring air, how fast is it moving when it is 5 m above the ground?",
     "choices": [
      "About 17 m/s",
      "About 9.8 m/s",
      "About 20 m/s",
      "About 34 m/s"
     ],
     "answer": 0,
     "why": "Falls 15 m: mgh = ½mv² → v = √(2gh) = √(2 × 9.8 × 15) ≈ 17.1 m/s. Mass cancels.",
     "misconception": "Using the 20 m or 5 m as the drop height."
    },
    {
     "q": "A 60 kg student climbs stairs 3.0 m high in 5.0 s. What power does the student develop?",
     "choices": [
      "About 350 W",
      "About 1760 W",
      "About 35 W",
      "About 3500 W"
     ],
     "answer": 0,
     "why": "W = mgh = 60 × 9.8 × 3.0 = 1764 J. P = W/t = 1764/5.0 ≈ 353 W.",
     "misconception": "Confusing work (J) and power (W) or forgetting to divide by time."
    },
    {
     "q": "Two frictionless roller-coaster tracks drop the same vertical height: one is a steep straight drop and one is a long gentle curve. How do the speeds at the bottom compare?",
     "choices": [
      "Equal speeds",
      "Steep drop is faster",
      "Gentle curve is faster",
      "Can't be determined"
     ],
     "answer": 0,
     "why": "mgh converts into ½mv²; only the height change matters, not the path. (The steeper path arrives sooner, though.)",
     "misconception": "A steeper path produces a higher final speed."
    },
    {
     "q": "A spring (k = 200 N/m) is compressed 0.10 m. How much elastic potential energy is stored?",
     "choices": [
      "1.0 J",
      "20 J",
      "2.0 J",
      "0.10 J"
     ],
     "answer": 0,
     "why": "PE = ½kx² = ½(200)(0.10)² = 1.0 J. Note the distance is squared.",
     "misconception": "Using PE = kx."
    },
    {
     "q": "A machine takes in 500 J and produces 400 J of useful output. Where did the other 100 J go, and what is the efficiency?",
     "choices": [
      "Dissipated as thermal energy; 80%",
      "Destroyed; 80%",
      "Stored as potential energy; 125%",
      "Dissipated as thermal energy; 20%"
     ],
     "answer": 0,
     "why": "Energy is never destroyed; it spreads out as thermal energy (and sound). Efficiency = 400/500 = 80%.",
     "misconception": "Energy is 'used up' or lost."
    },
    {
     "q": "A 1000 kg car speeds up from 10 m/s to 20 m/s. How much net work was done on it?",
     "choices": [
      "150,000 J",
      "100,000 J",
      "50,000 J",
      "200,000 J"
     ],
     "answer": 0,
     "why": "W_net = ΔKE = ½(1000)(20² − 10²) = ½(1000)(300) = 150,000 J.",
     "misconception": "Subtracting speeds before squaring: ½m(20 − 10)²."
    }
   ],
   "practice": [
    [
     "A 0.5 kg ball is thrown straight up at 12 m/s. How high does it rise?",
     "h ≈ 7.35 m."
    ],
    [
     "A 500 kg roller-coaster car starts at rest at 30 m. What is its speed at 10 m (frictionless)?",
     "v ≈ 19.8 m/s."
    ],
    [
     "A crane lifts an 800 kg load 15 m in 20 s. Find the work and power.",
     "W ≈ 117,600 J; P ≈ 5,880 W."
    ],
    [
     "A 1200 kg car traveling 25 m/s brakes to rest with a 6000 N friction force. Find the stopping distance.",
     "KE = 375,000 J; d ≈ 62.5 m."
    ],
    [
     "A spring (k = 400 N/m) is compressed 0.20 m and launches a 0.10 kg mass on a frictionless surface. Find the launch speed.",
     "PE = 8.0 J; v ≈ 12.7 m/s."
    ]
   ],
   "resources": [
    [
     "PhET: Energy Skate Park",
     "phet.colorado.edu",
     "Bar charts of KE, PE, thermal energy; add friction; change track shape."
    ],
    [
     "PhET: Masses & Springs",
     "phet.colorado.edu",
     "Elastic and gravitational PE with oscillating masses."
    ],
    [
     "PhET: Work-Energy (if available)",
     "phet.colorado.edu",
     "Track work and energy."
    ],
    [
     "The Physics Classroom: Work, Energy, and Power",
     "physicsclassroom.com",
     "Lessons, interactives, and practice."
    ],
    [
     "Khan Academy: Work and energy",
     "khanacademy.org",
     "Videos and practice."
    ],
    [
     "IXL Physics",
     "ixl.com",
     "Practice on KE, PE, and conservation."
    ]
   ],
   "labs": [
    "Pendulum or ramp lab: compare ΔPE to KE at the bottom; account for the difference.",
    "Stair-run power lab: measure mass, height, time and compute power.",
    "Energy-conversion design challenge (HS-PS3-3): build a device (e.g., rubber-band car, solar-powered vehicle) and measure efficiency."
   ],
   "real_world": [
    "Roller coasters and skate parks (PE ↔ KE).",
    "Hybrid and electric vehicles; regenerative braking.",
    "Hydroelectric dams, wind turbines, and solar panels.",
    "Energy labels, appliance efficiency, and utility bills (kWh).",
    "Why speed limits on highways matter: KE ∝ v²."
   ],
   "objectives": [
    "Calculate work for forces parallel and at an angle to displacement.",
    "Calculate KE, gravitational PE, and elastic PE and interpret energy bar charts.",
    "Apply the work–energy theorem and conservation of energy to solve problems (HS-PS3-1, HS-PS3-2).",
    "Account for dissipated energy and calculate power and efficiency.",
    "Design, test, and refine an energy-conversion device against constraints (HS-PS3-3)."
   ],
   "rubric": {
    "Mastery (4)": "Chooses energy vs. force methods wisely, tracks all forms including thermal, and critiques a design with efficiency data.",
    "Proficient (3)": "Applies conservation of energy and work formulas correctly on standard problems.",
    "Developing (2)": "Computes KE or PE but struggles with the energy accounting (initial vs. final) or angle in work.",
    "Beginning (1)": "Treats energy as 'used up' or confuses work, power, and force."
   }
  }
 ]
};
