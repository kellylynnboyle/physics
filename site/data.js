window.COURSE = {
 "course": "Physics & Earth Science — Semester 1: Mechanics",
 "units": [
  {
   "id": "kinematics",
   "num": 1,
   "title": "Kinematics",
   "standards": [
    "HS-PS2-1 (foundation: describing motion mathematically before relating it to net force)",
    "Science & Engineering Practices: Analyzing and Interpreting Data; Using Mathematics and Computational Thinking",
    "Crosscutting Concepts: Cause and Effect; Patterns"
   ],
   "objectives": [
    "Distinguish distance/displacement and speed/velocity, and identify which are vectors.",
    "Calculate average velocity and acceleration from data, tables, and graphs.",
    "Interpret position–time and velocity–time graphs (slope and area).",
    "Apply the constant-acceleration equations to solve one-dimensional problems, including free fall (g = 9.8 m/s²).",
    "Use sign conventions to describe direction of velocity and acceleration."
   ],
   "concepts": [
    "Position, distance, displacement",
    "Speed vs. velocity",
    "Acceleration (rate of change of velocity)",
    "Graphs: slope of x–t = velocity; slope of v–t = acceleration; area under v–t = displacement",
    "Equations: v = v₀ + at; Δx = v₀t + ½at²; v² = v₀² + 2aΔx",
    "Free fall and g = 9.8 m/s²",
    "Reference frames and sign conventions"
   ],
   "cornell": {
    "topic": "Kinematics: Describing Motion",
    "rows": [
     {
      "cue": "Distance vs. displacement?",
      "notes": "Distance = total path length (scalar, ≥ 0). Displacement = Δx = x_final − x_initial (vector, has direction, can be 0 or negative)."
     },
     {
      "cue": "Speed vs. velocity?",
      "notes": "Speed = distance/time (scalar). Velocity = displacement/time (vector). A lap around a track: average velocity = 0, average speed ≠ 0."
     },
     {
      "cue": "What is acceleration?",
      "notes": "a = Δv/Δt (m/s²). Any change in velocity — speeding up, slowing down, OR turning. Sign of a alone does not tell you speeding up or slowing down: compare signs of v and a."
     },
     {
      "cue": "How do I read motion graphs?",
      "notes": "x–t: slope = velocity. v–t: slope = acceleration, area = displacement. a–t: area = change in velocity. Flat x–t line = at rest; flat v–t line = constant velocity."
     },
     {
      "cue": "Which equation do I use?",
      "notes": "List knowns (v₀, v, a, Δx, t). Pick the equation missing the unknown you do not need: v = v₀+at (no Δx); Δx = v₀t+½at² (no v); v² = v₀²+2aΔx (no t). Valid ONLY for constant a."
     },
     {
      "cue": "Free fall?",
      "notes": "Ignoring air resistance, every object accelerates at g = 9.8 m/s² downward, regardless of mass. At the top of a toss v = 0 but a is still 9.8 m/s² down."
     }
    ],
    "summary": "Kinematics describes motion without asking what causes it. Position, velocity, and acceleration are linked by slopes and areas on graphs and by three constant-acceleration equations. Always define a positive direction and track signs."
   },
   "resources": [
    "The Physics Classroom — 1-D Kinematics (physicsclassroom.com)",
    "PhET Simulation — Moving Man (phet.colorado.edu)",
    "Khan Academy — High School Physics: One-dimensional motion",
    "OpenStax High School Physics — Chapter 2/3 (openstax.org)",
    "HyperPhysics — Kinematics concept map (hyperphysics.phy-astr.gsu.edu)",
    "IXL Physics — kinematics skills (follow the practice plan from your Cornell-notes deck)"
   ],
   "lab": "Motion-detector or smartphone-video lab: collect position–time data for a cart on a ramp, derive v–t and a–t graphs, and compare the measured acceleration with the constant-acceleration model (supports analyzing data practice for HS-PS2-1).",
   "practice": [
    {
     "q": "A car speeds up from 0 to 20 m/s in 5.0 s. Find its acceleration and the distance covered.",
     "a": "a = 4.0 m/s²; Δx = ½at² = 50 m."
    },
    {
     "q": "A stone is dropped from rest from a bridge and hits the water in 3.0 s. How high is the bridge, and how fast is the stone going on impact?",
     "a": "Δx = ½(9.8)(3²) ≈ 44 m; v = 9.8×3 ≈ 29 m/s."
    },
    {
     "q": "A runner goes 100 m east then 40 m west in 20 s. Find distance, displacement, average speed, and average velocity.",
     "a": "140 m; 60 m east; 7.0 m/s; 3.0 m/s east."
    },
    {
     "q": "Sketch the v–t graph for a ball thrown straight up and caught at the same height. What is the slope? What is the total area?",
     "a": "A straight line sloping down with slope −9.8 m/s² (crossing zero at the top); total signed area = 0 (displacement 0)."
    },
    {
     "q": "A train moving at 30 m/s brakes uniformly at −2.0 m/s². How far does it travel before stopping?",
     "a": "Δx = (0 − 30²)/(2×−2.0) = 225 m."
    }
   ],
   "realworld": [
    "Traffic engineering: safe following distance and braking distance",
    "Sports analytics: sprint timing and acceleration profiles",
    "Amusement-park free-fall rides",
    "Airbag and seat-belt crash reconstruction from skid marks"
   ],
   "quiz": [
    {
     "q": "A car accelerates uniformly from rest to 20 m/s in 5 s. How far does it travel in those 5 s?",
     "choices": [
      "20 m",
      "50 m",
      "100 m",
      "4 m"
     ],
     "answer": 1,
     "why": "Average velocity is (0+20)/2 = 10 m/s, so Δx = 10 × 5 = 50 m. Using v × t = 100 m wrongly assumes the car was at top speed the entire time."
    },
    {
     "q": "A ball is thrown straight up. At the very top of its path, which is true?",
     "choices": [
      "v = 0 and a = 0",
      "v = 0 and a = 9.8 m/s² downward",
      "v = 9.8 m/s and a = 0",
      "v = 0 and a = 9.8 m/s² upward"
     ],
     "answer": 1,
     "why": "Gravity acts the entire flight. Velocity is momentarily zero, but it is still changing, so a is 9.8 m/s² down."
    },
    {
     "q": "The area under a velocity–time graph represents:",
     "choices": [
      "Acceleration",
      "Displacement",
      "Speed",
      "Force"
     ],
     "answer": 1,
     "why": "Area = v × t = displacement. The slope (not the area) of a v–t graph is acceleration."
    },
    {
     "q": "A runner completes one full lap of a 400 m track. Her displacement is:",
     "choices": [
      "400 m",
      "200 m",
      "0 m",
      "Cannot be determined"
     ],
     "answer": 2,
     "why": "Displacement compares end position to start position. She finished where she started, so Δx = 0 even though distance = 400 m."
    },
    {
     "q": "A cart has velocity −3 m/s and acceleration −2 m/s². The cart is:",
     "choices": [
      "Slowing down",
      "Speeding up",
      "At rest",
      "Moving at constant speed"
     ],
     "answer": 1,
     "why": "v and a have the same sign (both negative), so speed increases. Negative acceleration does NOT automatically mean slowing down."
    },
    {
     "q": "A rock is dropped from rest. How far does it fall in 2.0 s? (g = 9.8 m/s²)",
     "choices": [
      "9.8 m",
      "19.6 m",
      "39.2 m",
      "4.9 m"
     ],
     "answer": 1,
     "why": "Δx = ½gt² = ½(9.8)(2²) = 19.6 m. Falling distance grows with t², not t."
    },
    {
     "q": "A driver travels 60 km at 60 km/h and then another 60 km at 40 km/h. What is the average speed for the whole trip?",
     "choices": [
      "50 km/h",
      "48 km/h",
      "52 km/h",
      "100 km/h"
     ],
     "answer": 1,
     "why": "Total distance 120 km; total time 1 h + 1.5 h = 2.5 h; 120/2.5 = 48 km/h. Averaging the two speeds only works if equal TIMES are spent at each speed."
    },
    {
     "q": "Ignoring air resistance, a 10 kg bowling ball and a 1 kg ball are dropped from the same height. Which hits the ground first?",
     "choices": [
      "The 10 kg ball",
      "The 1 kg ball",
      "They land together",
      "Depends on the shape only"
     ],
     "answer": 2,
     "why": "Both accelerate at g regardless of mass. Mass cancels when comparing gravitational force and inertia."
    }
   ]
  },
  {
   "id": "projectile",
   "num": 2,
   "title": "Projectile Motion",
   "standards": [
    "HS-PS2-1 (applying Newton's second law to two-dimensional motion)",
    "Science & Engineering Practices: Using Mathematics and Computational Thinking; Developing and Using Models",
    "Crosscutting Concepts: Systems and System Models; Scale, Proportion, and Quantity"
   ],
   "objectives": [
    "Resolve a velocity vector into horizontal and vertical components.",
    "Explain why horizontal and vertical motion are independent for a projectile.",
    "Calculate time of flight, maximum height, and range for horizontal and angled launches.",
    "Predict how launch angle and speed change a trajectory; recognize that 45° gives maximum range on level ground.",
    "Evaluate a computational (spreadsheet or simulation) model of a projectile against measured data."
   ],
   "concepts": [
    "Vector components: vₓ = v cosθ, v_y = v sinθ",
    "Independence of x and y motion",
    "Horizontal: a = 0, constant vₓ",
    "Vertical: a = −9.8 m/s²",
    "Time of flight depends only on vertical motion",
    "Range, maximum height, symmetry of the parabola",
    "Complementary launch angles give equal range",
    "Air resistance as a model limitation"
   ],
   "cornell": {
    "topic": "Projectile Motion",
    "rows": [
     {
      "cue": "What is a projectile?",
      "notes": "An object moving only under gravity after launch (air resistance neglected). Its path is a parabola."
     },
     {
      "cue": "How do I split the velocity?",
      "notes": "vₓ = v cosθ (horizontal), v_y = v sinθ (vertical), with θ measured from horizontal. Check calculator is in DEGREES."
     },
     {
      "cue": "Independence of motion?",
      "notes": "Horizontal: a = 0, so vₓ is constant and x = vₓt. Vertical: a = −9.8 m/s², so use the kinematics equations. Time t links the two."
     },
     {
      "cue": "Horizontal launch from height h?",
      "notes": "v_y₀ = 0. Fall time t = √(2h/g). Range = vₓ · t. A ball rolled off a table and one dropped from the same height land at the same time."
     },
     {
      "cue": "Angled launch on level ground?",
      "notes": "Time of flight T = 2v sinθ / g. Max height H = (v sinθ)² / 2g. Range R = v² sin2θ / g. Max range at 45°; θ and 90°−θ give equal range."
     },
     {
      "cue": "What stays the same / changes?",
      "notes": "vₓ constant. v_y changes by −9.8 m/s each second. At the peak v_y = 0 but a = −9.8. Speed at launch height on the way down equals launch speed."
     }
    ],
    "summary": "Treat x and y separately: constant velocity horizontally, constant acceleration vertically, linked by the same time t. Time of flight comes from the vertical motion; range comes from vₓ × t."
   },
   "resources": [
    "PhET Simulation — Projectile Motion (phet.colorado.edu)",
    "The Physics Classroom — Vectors and Projectiles",
    "Khan Academy — Two-dimensional projectile motion",
    "OpenStax High School Physics — Two-Dimensional Motion",
    "Desmos or Google Sheets — build a trajectory calculator (computational model)"
   ],
   "lab": "Launcher lab: fire a ball from a spring launcher at several angles, predict range with a spreadsheet model, then compare predicted and measured values and discuss sources of error.",
   "practice": [
    {
     "q": "A ball is kicked horizontally at 10 m/s from a 20 m cliff. How long is it in the air and how far from the base does it land?",
     "a": "t = √(2×20/9.8) ≈ 2.0 s; range ≈ 20 m."
    },
    {
     "q": "A soccer ball is kicked at 20 m/s at 30° above horizontal. Find vₓ and v_y initially.",
     "a": "vₓ = 20cos30° ≈ 17.3 m/s; v_y = 20sin30° = 10 m/s."
    },
    {
     "q": "For the kick above, find time of flight, max height, and range on level ground.",
     "a": "T = 2(10)/9.8 ≈ 2.0 s; H = 10²/(2×9.8) ≈ 5.1 m; R = 17.3 × 2.04 ≈ 35 m."
    },
    {
     "q": "Two stones are thrown at the same speed, one at 30° and one at 60°. Compare range and time of flight.",
     "a": "Equal ranges; the 60° stone has the longer flight time and greater height."
    },
    {
     "q": "A cannonball is fired at 50 m/s at 45°. How fast is it moving at the top of its flight?",
     "a": "Only vₓ remains: 50cos45° ≈ 35 m/s."
    }
   ],
   "realworld": [
    "Sports: basketball free throws, football kicks, long jump",
    "Firefighting water streams and irrigation sprinklers",
    "Ballistics and forensic reconstruction",
    "Space launches and orbital insertion (extension)",
    "Video-game physics engines"
   ],
   "quiz": [
    {
     "q": "Ignoring air resistance, the horizontal velocity of a projectile during flight:",
     "choices": [
      "Increases",
      "Decreases",
      "Stays constant",
      "Is zero at the top"
     ],
     "answer": 2,
     "why": "No horizontal force acts, so horizontal acceleration is zero and vₓ is constant."
    },
    {
     "q": "One ball is dropped and another is shot horizontally from the same height at the same instant. Which hits the ground first?",
     "choices": [
      "The dropped ball",
      "The horizontally shot ball",
      "They land at the same time",
      "Depends on the horizontal speed"
     ],
     "answer": 2,
     "why": "Vertical motion is independent of horizontal motion. Both start with v_y = 0 and fall with the same g."
    },
    {
     "q": "At the highest point of a projectile's flight, its acceleration is:",
     "choices": [
      "Zero",
      "9.8 m/s² downward",
      "9.8 m/s² upward",
      "Equal to its horizontal velocity"
     ],
     "answer": 1,
     "why": "Gravity is constant throughout. Only v_y is zero at the top."
    },
    {
     "q": "A ball launched at 20 m/s at 30° above horizontal has initial vertical velocity:",
     "choices": [
      "17.3 m/s",
      "20 m/s",
      "10 m/s",
      "34.6 m/s"
     ],
     "answer": 2,
     "why": "v_y = v sinθ = 20 sin30° = 10 m/s. 17.3 m/s is the horizontal component (cosine)."
    },
    {
     "q": "Which pair of launch angles (same speed, level ground) gives the same range?",
     "choices": [
      "30° and 45°",
      "30° and 60°",
      "20° and 50°",
      "15° and 80°"
     ],
     "answer": 1,
     "why": "Complementary angles (adding to 90°) give equal range."
    },
    {
     "q": "A ball is rolled off a table at 2 m/s. The table is 1.0 m high. About how far from the table's edge does it land?",
     "choices": [
      "0.9 m",
      "2.0 m",
      "0.45 m",
      "4.0 m"
     ],
     "answer": 0,
     "why": "t = √(2×1.0/9.8) ≈ 0.45 s; range = 2 × 0.45 ≈ 0.9 m."
    },
    {
     "q": "A ball is thrown at 20 m/s from the ground and lands on level ground. Ignoring air resistance, its speed just before landing is:",
     "choices": [
      "0 m/s",
      "10 m/s",
      "20 m/s",
      "40 m/s"
     ],
     "answer": 2,
     "why": "By symmetry the vertical velocity reverses and the horizontal is unchanged, so speed at the same height equals launch speed."
    },
    {
     "q": "What determines how long a projectile stays in the air?",
     "choices": [
      "Its horizontal velocity",
      "Its vertical motion (initial v_y and height)",
      "Its mass",
      "Its range"
     ],
     "answer": 1,
     "why": "Time of flight is set by the vertical motion alone. Range depends on that time and the horizontal velocity."
    }
   ]
  },
  {
   "id": "newton",
   "num": 3,
   "title": "Newton's Laws of Motion",
   "standards": [
    "HS-PS2-1: Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration.",
    "Science & Engineering Practices: Analyzing and Interpreting Data; Constructing Explanations",
    "Crosscutting Concepts: Cause and Effect; Systems and System Models"
   ],
   "objectives": [
    "State Newton's three laws and give examples of each.",
    "Draw free-body diagrams and determine net force along each axis.",
    "Use ΣF = ma to solve problems with multiple forces, including friction and inclines.",
    "Distinguish mass from weight and explain normal force and apparent weight.",
    "Analyze experimental data (force vs. acceleration, mass vs. acceleration) to support the claim that a = F_net/m.",
    "Identify third-law force pairs and explain why they never cancel."
   ],
   "concepts": [
    "Inertia and Newton's first law",
    "Net force and ΣF = ma (units: 1 N = 1 kg·m/s²)",
    "Newton's third law: force pairs act on different objects",
    "Weight W = mg vs. mass",
    "Normal force, tension, friction (f = μN)",
    "Free-body diagrams",
    "Equilibrium and terminal velocity",
    "Inclined planes (components of weight)"
   ],
   "cornell": {
    "topic": "Newton's Laws",
    "rows": [
     {
      "cue": "1st Law (Inertia)?",
      "notes": "An object keeps its velocity (including rest) unless a NET external force acts. Zero net force ≠ zero motion — constant velocity is allowed."
     },
     {
      "cue": "2nd Law?",
      "notes": "a = F_net / m, i.e., ΣF = ma. Acceleration is in the direction of net force; larger mass means smaller acceleration. Apply separately in x and y."
     },
     {
      "cue": "3rd Law?",
      "notes": "If A pushes on B, B pushes on A with equal magnitude, opposite direction. The pair acts on DIFFERENT objects, so they do not cancel."
     },
     {
      "cue": "Mass vs. weight?",
      "notes": "Mass (kg) = amount of matter/inertia, same everywhere. Weight (N) = gravitational force = mg; Moon g ≈ 1.6 m/s²."
     },
     {
      "cue": "How to draw a free-body diagram?",
      "notes": "Dot for object; draw only forces ON it (weight, normal, tension, friction, applied). Label each. Choose axes (tilt along an incline). Sum forces per axis."
     },
     {
      "cue": "Normal force & friction?",
      "notes": "Normal force is perpendicular to the surface and equals whatever is needed — not always mg (elevators, inclines, extra pushes). Kinetic friction f = μ_k N opposes motion; static friction adjusts up to μ_s N."
     },
     {
      "cue": "Terminal velocity?",
      "notes": "Air drag grows with speed until it equals weight; net force = 0, so acceleration = 0 and velocity is constant."
     }
    ],
    "summary": "Forces are interactions. Net force (vector sum) causes acceleration in proportion: ΣF = ma. Always isolate one object, draw the free-body diagram, and sum forces along each axis."
   },
   "resources": [
    "PhET Simulation — Forces and Motion: Basics; Forces in 1 Dimension (phet.colorado.edu)",
    "The Physics Classroom — Newton's Laws",
    "Khan Academy — Forces and Newton's laws of motion",
    "OpenStax High School Physics — Forces and Newton's Laws of Motion",
    "CK-12 Physics — Newton's Laws"
   ],
   "lab": "Atwood or cart-and-hanging-mass lab: vary the net force with constant total mass, then vary mass with constant force; graph a vs. F and a vs. 1/m, and use the slopes to support F_net = ma (directly assesses HS-PS2-1).",
   "practice": [
    {
     "q": "A 2.0 kg cart is pulled with a net force of 10 N. Find its acceleration.",
     "a": "a = 10/2.0 = 5.0 m/s²."
    },
    {
     "q": "A 3.0 kg crate is pushed right with 20 N while friction pulls left with 8 N. Find its acceleration.",
     "a": "F_net = 12 N; a = 4.0 m/s² to the right."
    },
    {
     "q": "A 60 kg student stands on a scale in an elevator accelerating upward at 2.0 m/s². What does the scale read?",
     "a": "N = m(g + a) = 60(11.8) ≈ 708 N."
    },
    {
     "q": "A 5.0 kg object on the Moon (g = 1.6 m/s²): give its mass and weight there.",
     "a": "Mass 5.0 kg; weight 8.0 N."
    },
    {
     "q": "A 10 kg box slides at constant speed when pushed with 30 N. What is the friction force and μ_k?",
     "a": "f = 30 N (net force zero); μ_k = 30/(10×9.8) ≈ 0.31."
    }
   ],
   "realworld": [
    "Vehicle safety: seat belts illustrate inertia",
    "Rocket propulsion (third law)",
    "Elevators and apparent weight",
    "Skydiving and terminal velocity",
    "Tire traction and road design"
   ],
   "quiz": [
    {
     "q": "An object moves at constant velocity. The net force on it is:",
     "choices": [
      "In the direction of motion",
      "Zero",
      "Equal to its weight",
      "Greater than friction"
     ],
     "answer": 1,
     "why": "Constant velocity means a = 0, so the net force is zero (first law). A force is NOT needed to maintain motion."
    },
    {
     "q": "A large truck collides head-on with a small car. During the impact, the force of the car on the truck is:",
     "choices": [
      "Smaller than the force of the truck on the car",
      "Larger than the force of the truck on the car",
      "Equal in magnitude to the force of the truck on the car",
      "Zero"
     ],
     "answer": 2,
     "why": "Third-law pairs are always equal and opposite. The car has the greater acceleration because of its smaller mass."
    },
    {
     "q": "A 10 kg object is taken from Earth to the Moon. Its mass on the Moon is:",
     "choices": [
      "10 kg",
      "About 1.6 kg",
      "About 62 kg",
      "0 kg"
     ],
     "answer": 0,
     "why": "Mass does not change with location. Only the weight changes (≈16 N on the Moon)."
    },
    {
     "q": "A 3 kg block has a 20 N force to the right and an 8 N force to the left. Its acceleration is:",
     "choices": [
      "9.3 m/s²",
      "4 m/s²",
      "6.7 m/s²",
      "2.7 m/s²"
     ],
     "answer": 1,
     "why": "F_net = 20 − 8 = 12 N, so a = 12/3 = 4 m/s². Forces must be combined as a net force before dividing by mass."
    },
    {
     "q": "A 60 kg person is in an elevator accelerating upward at 2 m/s². The scale reading (normal force) is closest to:",
     "choices": [
      "588 N",
      "468 N",
      "708 N",
      "120 N"
     ],
     "answer": 2,
     "why": "N − mg = ma, so N = 60(9.8 + 2) ≈ 708 N. The person feels heavier."
    },
    {
     "q": "A box is pushed across a floor at constant speed with a 30 N horizontal force. The friction force is:",
     "choices": [
      "Less than 30 N",
      "Exactly 30 N",
      "More than 30 N",
      "Equal to the box's weight"
     ],
     "answer": 1,
     "why": "Constant speed means zero net force, so friction equals the push (30 N)."
    },
    {
     "q": "A skydiver reaches terminal velocity. At that moment:",
     "choices": [
      "Gravity stops acting",
      "Air resistance equals her weight",
      "Air resistance is zero",
      "She is accelerating at 9.8 m/s²"
     ],
     "answer": 1,
     "why": "Drag balances weight, so net force and acceleration are zero while velocity stays constant."
    },
    {
     "q": "A book rests on a table. Which force is the third-law (reaction) partner of the Earth's gravitational pull on the book?",
     "choices": [
      "The table's normal force on the book",
      "The book's pull on the Earth",
      "The book's push on the table",
      "Friction from the table"
     ],
     "answer": 1,
     "why": "Reaction pairs swap the two objects: Earth on book ↔ book on Earth. The normal force is a separate interaction that merely balances weight here."
    }
   ]
  },
  {
   "id": "momentum",
   "num": 4,
   "title": "Momentum and Impulse",
   "standards": [
    "HS-PS2-2: Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system.",
    "HS-PS2-3: Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision.",
    "Science & Engineering Practices: Using Mathematics; Constructing Explanations and Designing Solutions",
    "Crosscutting Concepts: Systems and System Models; Cause and Effect"
   ],
   "objectives": [
    "Calculate momentum (p = mv) and recognize it as a vector.",
    "Relate impulse to change in momentum (FΔt = Δp) and interpret force–time graphs.",
    "Apply conservation of momentum to elastic, inelastic, and explosion/recoil problems.",
    "Classify collisions by whether kinetic energy is conserved.",
    "Design and evaluate a device that reduces collision force by increasing contact time (HS-PS2-3)."
   ],
   "concepts": [
    "Momentum p = mv (kg·m/s)",
    "Impulse J = FΔt = Δp",
    "Area under F–t graph = impulse",
    "Conservation of momentum for an isolated system",
    "Elastic, inelastic, perfectly inelastic collisions",
    "Explosions and recoil",
    "Crumple zones, airbags, and helmets"
   ],
   "cornell": {
    "topic": "Momentum and Impulse",
    "rows": [
     {
      "cue": "What is momentum?",
      "notes": "p = mv. A vector pointing in the direction of velocity. Heavier and/or faster objects have more momentum. Units kg·m/s."
     },
     {
      "cue": "What is impulse?",
      "notes": "J = F_net Δt = Δp = m(v_f − v_i). Same Δp can come from a large force over a short time or a small force over a long time."
     },
     {
      "cue": "Why airbags & crumple zones?",
      "notes": "They lengthen the collision time. Δp is fixed by the crash, so F = Δp/Δt gets smaller — less injury. (Design target for HS-PS2-3.)"
     },
     {
      "cue": "Conservation of momentum?",
      "notes": "If net external force = 0: p_total before = p_total after. m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′. Choose a positive direction and keep signs."
     },
     {
      "cue": "Types of collisions?",
      "notes": "Elastic: momentum AND kinetic energy conserved. Inelastic: momentum conserved, KE lost (heat, sound, deformation). Perfectly inelastic: objects stick together, v_f = (m₁v₁+m₂v₂)/(m₁+m₂)."
     },
     {
      "cue": "Explosions / recoil?",
      "notes": "System starts at rest (p = 0), so the pieces' momenta cancel: m₁v₁ = −m₂v₂. The lighter piece gets the higher speed."
     },
     {
      "cue": "Momentum vs. kinetic energy?",
      "notes": "Doubling v doubles p but quadruples KE (KE = p²/2m). KE is a scalar and is not always conserved; momentum is a vector and is conserved in isolated systems."
     }
    ],
    "summary": "Forces acting over time change momentum. In an isolated system, internal forces cannot change total momentum, so the vector sum before equals the sum after. Extending impact time lowers the force."
   },
   "resources": [
    "PhET Simulation — Collision Lab (phet.colorado.edu)",
    "The Physics Classroom — Momentum and Its Conservation",
    "Khan Academy — Impulse and momentum",
    "OpenStax High School Physics — Linear Momentum and Collisions",
    "NHTSA/IIHS crash-test videos and data for engineering analysis"
   ],
   "lab": "Egg-drop / crumple-zone design challenge (HS-PS2-3): design a package to protect an egg, use a force sensor or video to estimate impact time, and refine your design using Δp = FΔt. Pair with a dynamics-cart collision lab to verify conservation of momentum (HS-PS2-2).",
   "practice": [
    {
     "q": "Find the momentum of a 1000 kg car moving at 20 m/s.",
     "a": "p = 20,000 kg·m/s."
    },
    {
     "q": "A 2 kg cart moving at 3 m/s sticks to a 1 kg cart at rest. Find their final speed.",
     "a": "v = (2×3)/(3) = 2 m/s."
    },
    {
     "q": "A 0.15 kg ball moving at 30 m/s is hit back at 40 m/s in the opposite direction. Find the impulse. If contact lasts 5 ms, what is the average force?",
     "a": "Δp = 0.15(40 − (−30)) = 10.5 N·s; F = 10.5/0.005 = 2100 N."
    },
    {
     "q": "A 1000 kg cannon fires a 10 kg shell at 100 m/s. Find the cannon's recoil velocity.",
     "a": "v = −(10×100)/1000 = −1 m/s (opposite to the shell)."
    },
    {
     "q": "Why does a car crash at 20 m/s hurt less with an airbag, even though Δp is the same?",
     "a": "The airbag increases stopping time Δt, so average force F = Δp/Δt is smaller."
    }
   ],
   "realworld": [
    "Automotive safety: airbags, seat belts, crumple zones",
    "Sports: follow-through in baseball swings, catching with 'give'",
    "Rocket propulsion and spacecraft maneuvers",
    "Billiards and Newton's cradle",
    "Helmet and packaging design"
   ],
   "quiz": [
    {
     "q": "A 2 kg cart moving at 3 m/s collides and sticks to a 1 kg cart at rest. Their speed afterward is:",
     "choices": [
      "1 m/s",
      "2 m/s",
      "3 m/s",
      "4.5 m/s"
     ],
     "answer": 1,
     "why": "Momentum before = 2 × 3 = 6 kg·m/s; after = (3 kg)v, so v = 2 m/s."
    },
    {
     "q": "Why do airbags reduce injury in a crash?",
     "choices": [
      "They reduce the change in momentum",
      "They increase the stopping time, reducing the force",
      "They increase the force but over a larger area only",
      "They reduce the car's mass"
     ],
     "answer": 1,
     "why": "Δp is fixed by the crash. F = Δp/Δt, so a longer Δt gives a smaller average force."
    },
    {
     "q": "In a perfectly inelastic collision between two carts:",
     "choices": [
      "Momentum is conserved but kinetic energy is not",
      "Both momentum and kinetic energy are conserved",
      "Kinetic energy is conserved but momentum is not",
      "Neither is conserved"
     ],
     "answer": 0,
     "why": "Momentum is conserved in any isolated collision. Kinetic energy is converted to heat, sound, and deformation when objects stick."
    },
    {
     "q": "Two identical carts move toward each other at equal speeds and stick together. After the collision they:",
     "choices": [
      "Move in the direction of either cart",
      "Move at double speed",
      "Stop",
      "Move at half speed"
     ],
     "answer": 2,
     "why": "Momentum is a vector. The momenta are equal and opposite, so the total is zero and the combined cart stops."
    },
    {
     "q": "A ball hits a wall and bounces straight back with the same speed. Compared with sticking to the wall, the impulse on the ball is:",
     "choices": [
      "The same",
      "Half as large",
      "Twice as large",
      "Zero"
     ],
     "answer": 2,
     "why": "Bouncing reverses momentum: Δp = m(v − (−v)) = 2mv. Sticking gives only Δp = mv."
    },
    {
     "q": "A 1000 kg cannon fires a 10 kg shell at 100 m/s. The cannon's recoil speed is:",
     "choices": [
      "0.1 m/s",
      "1 m/s",
      "10 m/s",
      "100 m/s"
     ],
     "answer": 1,
     "why": "Total momentum starts at zero: 1000 v = −10 × 100, so |v| = 1 m/s."
    },
    {
     "q": "If a car's speed doubles, its momentum and kinetic energy change by factors of:",
     "choices": [
      "2 and 2",
      "2 and 4",
      "4 and 2",
      "4 and 4"
     ],
     "answer": 1,
     "why": "p = mv scales with v, but KE = ½mv² scales with v²."
    },
    {
     "q": "A constant 10 N force acts on a cart for 3 s. The impulse delivered is:",
     "choices": [
      "3.3 N·s",
      "13 N·s",
      "30 N·s",
      "7 N·s"
     ],
     "answer": 2,
     "why": "J = FΔt = 10 × 3 = 30 N·s, which equals the area under the force–time graph."
    }
   ]
  },
  {
   "id": "energy",
   "num": 5,
   "title": "Work and Energy",
   "standards": [
    "HS-PS3-1: Create a computational model to calculate the change in the energy of one component in a system when the change in energy of the other component(s) and energy flows in and out of the system are known.",
    "HS-PS3-2: Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as a combination of energy associated with the motions of particles (objects) and energy associated with the relative positions of particles (objects).",
    "HS-PS3-3: Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy.",
    "Science & Engineering Practices: Developing and Using Models; Using Mathematics and Computational Thinking",
    "Crosscutting Concepts: Energy and Matter; Systems and System Models"
   ],
   "objectives": [
    "Calculate work (W = Fd cosθ) and power (P = W/t).",
    "Calculate kinetic energy, gravitational potential energy, and elastic potential energy.",
    "Apply the work–energy theorem and conservation of mechanical energy.",
    "Account for energy transformations and dissipation (thermal energy) using system models.",
    "Build a computational model (spreadsheet/simulation) tracking energy in a system (HS-PS3-1).",
    "Design a device that converts one form of energy to another within constraints (HS-PS3-3)."
   ],
   "concepts": [
    "Work W = Fd cosθ (joules)",
    "Kinetic energy KE = ½mv²",
    "Gravitational PE = mgh",
    "Elastic PE = ½kx²",
    "Work–energy theorem: W_net = ΔKE",
    "Conservation of energy; energy transfer vs. transformation",
    "Power P = W/t (watts)",
    "Efficiency and thermal dissipation"
   ],
   "cornell": {
    "topic": "Work and Energy",
    "rows": [
     {
      "cue": "What is work?",
      "notes": "W = F d cosθ, where θ is the angle between force and displacement. Unit: joule (J = N·m). Force perpendicular to motion does zero work (e.g., carrying a box horizontally); work can be negative (friction)."
     },
     {
      "cue": "Kinetic energy?",
      "notes": "KE = ½mv². Scalar, never negative. Doubling speed quadruples KE."
     },
     {
      "cue": "Potential energy?",
      "notes": "Gravitational: PE = mgh (h from a chosen reference level). Elastic: PE = ½kx² (k = spring constant, x = stretch/compression)."
     },
     {
      "cue": "Work–energy theorem?",
      "notes": "W_net = ΔKE = ½mv_f² − ½mv_i². Link between forces over distance and change in speed (stopping distance ∝ v²)."
     },
     {
      "cue": "Conservation of energy?",
      "notes": "Energy is neither created nor destroyed. With no friction: KE + PE = constant. With friction/drag: some mechanical energy becomes thermal energy, but TOTAL energy is conserved."
     },
     {
      "cue": "What is power?",
      "notes": "P = W/t = Fv. Unit: watt (1 W = 1 J/s). Same work done faster takes more power."
     },
     {
      "cue": "How do I build a model (HS-PS3-1)?",
      "notes": "Define the system boundary, list energy stores (KE, PE, thermal), list inputs/outputs, and make a table or spreadsheet that updates each store; check that the total is constant."
     }
    ],
    "summary": "Work is energy transferred by a force through a displacement. Energy changes form — kinetic, potential, thermal — but the total in a closed system is constant. Use energy bars or tables to account for every transformation."
   },
   "resources": [
    "PhET Simulation — Energy Skate Park; Masses & Springs (phet.colorado.edu)",
    "The Physics Classroom — Work, Energy, and Power",
    "Khan Academy — Work and energy",
    "OpenStax High School Physics — Work, Power, and the Work–Energy Theorem",
    "Google Sheets / Python notebook — computational energy model"
   ],
   "lab": "Energy skate-park and ramp-and-cart lab: measure height and speed, compute KE and PE at several points, graph energy bars, and quantify energy lost to friction. Extension: design and build a device that converts stored energy into motion within cost/size constraints (HS-PS3-3).",
   "practice": [
    {
     "q": "A 50 N force at 60° above horizontal drags a sled 10 m. How much work does it do?",
     "a": "W = 50 × 10 × cos60° = 250 J."
    },
    {
     "q": "A 2.0 kg ball is dropped from 5.0 m. How fast is it going just before it lands?",
     "a": "v = √(2gh) = √(2×9.8×5.0) ≈ 9.9 m/s."
    },
    {
     "q": "A 1500 kg car at 10 m/s speeds up to 20 m/s. How much net work was done?",
     "a": "ΔKE = ½(1500)(400 − 100) = 225,000 J."
    },
    {
     "q": "A roller-coaster car starts at rest at 20 m high (no friction). Find its speed at 5 m high.",
     "a": "v = √(2×9.8×15) ≈ 17 m/s."
    },
    {
     "q": "A motor lifts a 600 N load 5.0 m in 15 s. What is its power output?",
     "a": "W = 3000 J; P = 3000/15 = 200 W."
    }
   ],
   "realworld": [
    "Roller coasters and skate parks",
    "Hydro, wind, and solar power conversion",
    "Hybrid/electric vehicle regenerative braking",
    "Braking distances and speed limits (stopping distance ∝ v²)",
    "Pole vault and trampolines (elastic energy)",
    "Appliance energy ratings (power and kWh)"
   ],
   "quiz": [
    {
     "q": "A person carries a heavy box horizontally at constant speed across a room. The work done by the upward force holding the box is:",
     "choices": [
      "Large and positive",
      "Large and negative",
      "Zero",
      "Equal to mgh"
     ],
     "answer": 2,
     "why": "The force is perpendicular to the displacement (θ = 90°), so W = Fd cos90° = 0. Effort and fatigue are not the same as work in physics."
    },
    {
     "q": "If a car's speed doubles, its kinetic energy:",
     "choices": [
      "Doubles",
      "Triples",
      "Quadruples",
      "Stays the same"
     ],
     "answer": 2,
     "why": "KE ∝ v². This is why stopping distance quadruples when speed doubles."
    },
    {
     "q": "A ball is dropped from rest from 5.0 m (no air resistance). Its speed just before impact is closest to:",
     "choices": [
      "5 m/s",
      "9.9 m/s",
      "25 m/s",
      "49 m/s"
     ],
     "answer": 1,
     "why": "mgh = ½mv² gives v = √(2gh) = √(2 × 9.8 × 5) ≈ 9.9 m/s. Mass cancels."
    },
    {
     "q": "A motor does 600 J of work in 3.0 s. Its power is:",
     "choices": [
      "1800 W",
      "200 W",
      "600 W",
      "0.005 W"
     ],
     "answer": 1,
     "why": "P = W/t = 600/3 = 200 W. Don't multiply work by time."
    },
    {
     "q": "A spring is stretched twice as far. The elastic potential energy stored becomes:",
     "choices": [
      "The same",
      "Twice as much",
      "Four times as much",
      "Half as much"
     ],
     "answer": 2,
     "why": "PE = ½kx² depends on x², so doubling x quadruples the stored energy."
    },
    {
     "q": "A frictionless roller-coaster car starts from rest at 20 m high. Its speed at 5 m high is closest to:",
     "choices": [
      "10 m/s",
      "17 m/s",
      "20 m/s",
      "29 m/s"
     ],
     "answer": 1,
     "why": "It has dropped 15 m: v = √(2 × 9.8 × 15) ≈ 17 m/s. Use the HEIGHT DIFFERENCE, not the starting height."
    },
    {
     "q": "A 50 N force acts at 60° above the horizontal while dragging a sled 10 m horizontally. The work done by this force is:",
     "choices": [
      "500 J",
      "433 J",
      "250 J",
      "0 J"
     ],
     "answer": 2,
     "why": "W = Fd cosθ = 50 × 10 × cos60° = 250 J. Only the component along the displacement does work."
    },
    {
     "q": "A sliding block comes to rest because of friction. What happened to its kinetic energy?",
     "choices": [
      "It was destroyed",
      "It became thermal energy of the block and surface",
      "It became gravitational potential energy",
      "It became momentum"
     ],
     "answer": 1,
     "why": "Energy is conserved. Friction converts mechanical energy into thermal energy (a small temperature rise)."
    }
   ]
  }
 ]
};
