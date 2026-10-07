window.PHYSICS_DATA = [
 {
  "id": "kinematics",
  "number": 1,
  "title": "Kinematics",
  "tagline": "Describing motion in one dimension",
  "standards": [
   {
    "code": "HS-PS2-1",
    "note": "Foundation: students must describe motion (velocity, acceleration) before they can analyze it with Newton's second law."
   }
  ],
  "practices": [
   "Using Mathematics and Computational Thinking",
   "Analyzing and Interpreting Data"
  ],
  "crosscutting": [
   "Patterns",
   "Cause and Effect"
  ],
  "bigIdea": "Motion can be described precisely with position, velocity, and acceleration, and the three are linked by rates of change.",
  "concepts": [
   {
    "term": "Distance vs. displacement",
    "def": "Distance is the total path length (scalar). Displacement is the straight-line change in position, with direction (vector)."
   },
   {
    "term": "Speed vs. velocity",
    "def": "Speed = distance / time (scalar). Velocity = displacement / time (vector). Direction matters."
   },
   {
    "term": "Acceleration",
    "def": "a = Δv / Δt. Any change in velocity (speeding up, slowing down, or turning) is acceleration. Units: m/s²."
   },
   {
    "term": "Sign and direction",
    "def": "Choose a positive direction. Speeding up means v and a have the same sign; slowing down means opposite signs."
   },
   {
    "term": "Constant-acceleration equations",
    "def": "v = v₀ + at;  Δx = v₀t + ½at²;  v² = v₀² + 2aΔx;  Δx = ½(v₀ + v)t."
   },
   {
    "term": "Motion graphs",
    "def": "On x–t, slope = velocity. On v–t, slope = acceleration and area = displacement. On a–t, area = change in velocity."
   },
   {
    "term": "Free fall",
    "def": "With air resistance ignored, every object near Earth's surface accelerates at g = 9.8 m/s² downward, regardless of mass."
   }
  ],
  "objectives": [
   {
    "id": "K1",
    "verb": "Distinguish",
    "text": "I can distinguish distance from displacement and speed from velocity, and calculate each.",
    "criteria": "Correct quantity chosen, correct sign/direction, correct units in 4 of 5 problems."
   },
   {
    "id": "K2",
    "verb": "Calculate",
    "text": "I can calculate acceleration from changes in velocity and interpret its sign.",
    "criteria": "Computes a = Δv/Δt and states whether the object is speeding up or slowing down."
   },
   {
    "id": "K3",
    "verb": "Apply",
    "text": "I can select and apply the constant-acceleration equations to solve multi-step problems.",
    "criteria": "Lists knowns/unknown, picks an equation, shows substitution with units."
   },
   {
    "id": "K4",
    "verb": "Interpret",
    "text": "I can interpret and sketch x–t, v–t, and a–t graphs for a described motion.",
    "criteria": "Slope and area correctly used; graph matches the verbal description."
   },
   {
    "id": "K5",
    "verb": "Analyze",
    "text": "I can analyze free-fall motion, including the motion at the top of a toss.",
    "criteria": "Uses a = −9.8 m/s² throughout; explains v = 0 at the top without a = 0."
   }
  ],
  "cornell": {
   "topic": "Kinematics: Describing Motion",
   "cues": [
    {
     "cue": "What is the difference between distance and displacement?",
     "notes": "Distance = total path traveled (scalar, never negative). Displacement = final position − initial position (vector, can be negative or zero). Round trip: displacement = 0."
    },
    {
     "cue": "How do speed and velocity differ?",
     "notes": "Speed = distance / time. Velocity = displacement / time and includes direction. A car circling a track at constant speed has changing velocity."
    },
    {
     "cue": "What is acceleration?",
     "notes": "a = (v − v₀) / t. Unit m/s². It is a vector. Acceleration occurs whenever speed OR direction changes."
    },
    {
     "cue": "How do I know if an object speeds up or slows down?",
     "notes": "Same sign for v and a → speeding up. Opposite signs → slowing down. Negative a does NOT automatically mean slowing down."
    },
    {
     "cue": "Which equation do I use?",
     "notes": "Pick the one that has your three knowns and your one unknown and skips the variable you neither know nor want. No time given? v² = v₀² + 2aΔx. No final velocity? Δx = v₀t + ½at²."
    },
    {
     "cue": "How do I read motion graphs?",
     "notes": "x–t: slope = velocity (steeper = faster). v–t: slope = acceleration, area under curve = displacement. A flat v–t line = constant velocity, a = 0."
    },
    {
     "cue": "What is free fall?",
     "notes": "Motion with only gravity acting. a = 9.8 m/s² down (use −9.8 if up is positive). Mass does not matter without air resistance. At the top of a toss: v = 0 but a is still 9.8 m/s² down."
    }
   ],
   "summary": "Kinematics describes motion using displacement, velocity, and acceleration. Velocity is the rate of change of position, and acceleration is the rate of change of velocity. For constant acceleration, four equations relate the five variables (v₀, v, a, Δx, t). Graphs encode the same information: slope gives the rate, area gives the accumulated change. Free fall is constant-acceleration motion with a = 9.8 m/s² downward."
  },
  "quiz": [
   {
    "q": "A runner completes one full lap of a 400 m track in 80 s and ends where she started. What is her average velocity?",
    "options": [
     "5 m/s",
     "0 m/s",
     "400 m/s",
     "80 m/s"
    ],
    "answer": 1,
    "misconception": "Confusing distance with displacement",
    "explain": "Average velocity = displacement / time. She finished where she began, so displacement is 0 and average velocity is 0. Her average speed is 400 m / 80 s = 5 m/s."
   },
   {
    "q": "A ball is tossed straight up. At the very top of its path, what are its velocity and acceleration?",
    "options": [
     "v = 0, a = 0",
     "v = 0, a = 9.8 m/s² downward",
     "v = 9.8 m/s upward, a = 0",
     "v = 0, a = 9.8 m/s² upward"
    ],
    "answer": 1,
    "misconception": "Zero velocity means zero acceleration",
    "explain": "Gravity acts the whole time, so a = 9.8 m/s² downward even at the top. Velocity is changing from up to down, passing through zero for an instant."
   },
   {
    "q": "A car has a velocity of +20 m/s and an acceleration of −3 m/s². The car is…",
    "options": [
     "speeding up",
     "slowing down",
     "moving at constant speed",
     "moving backward"
    ],
    "answer": 1,
    "misconception": "Negative acceleration always means slowing",
    "explain": "Velocity and acceleration have opposite signs, so the car is slowing down. (If both were negative, a negative acceleration would mean speeding up in the negative direction.)"
   },
   {
    "q": "On a velocity–time graph, a horizontal line at v = +5 m/s means the object is…",
    "options": [
     "at rest",
     "speeding up at 5 m/s²",
     "moving at a constant 5 m/s",
     "5 m from the origin"
    ],
    "answer": 2,
    "misconception": "Reading the graph as a picture of the path",
    "explain": "A flat v–t line means velocity is not changing: constant velocity, zero acceleration. It is not at rest, since rest would be v = 0."
   },
   {
    "q": "In a vacuum, a hammer and a feather are dropped from the same height. Which hits the ground first?",
    "options": [
     "The hammer",
     "The feather",
     "They land at the same time",
     "It depends on the height only"
    ],
    "answer": 2,
    "misconception": "Heavier objects fall faster",
    "explain": "Without air resistance, all objects have the same free-fall acceleration g, so they land together. (Apollo 15 demonstrated this on the Moon.)"
   },
   {
    "q": "A car starts from rest with constant acceleration. If it travels 10 m in the first 2 s, how far has it traveled after 4 s?",
    "options": [
     "20 m",
     "30 m",
     "40 m",
     "80 m"
    ],
    "answer": 2,
    "misconception": "Assuming distance is proportional to time",
    "explain": "Δx = ½at², so distance grows with t². Doubling the time quadruples the distance: 4 × 10 m = 40 m."
   },
   {
    "q": "A car speeds up from 0 to 27 m/s in 6.0 s. What is its average acceleration?",
    "options": [
     "4.5 m/s²",
     "162 m/s²",
     "0.22 m/s²",
     "27 m/s²"
    ],
    "answer": 0,
    "misconception": "Multiplying instead of dividing",
    "explain": "a = Δv / Δt = 27 / 6.0 = 4.5 m/s². Acceleration is a rate, so divide by time."
   },
   {
    "q": "A v–t graph shows a constant velocity of 4 m/s for 5 s. What is the displacement during that time?",
    "options": [
     "0.8 m",
     "9 m",
     "20 m",
     "1.25 m"
    ],
    "answer": 2,
    "misconception": "Not knowing that area under v–t = displacement",
    "explain": "Area of the rectangle = 4 m/s × 5 s = 20 m."
   }
  ],
  "practice": [
   {
    "problem": "A car accelerates from rest at 3.0 m/s² for 8.0 s. Find its final speed and the distance covered.",
    "answer": "v = 24 m/s; Δx = ½(3.0)(8.0)² = 96 m."
   },
   {
    "problem": "A driver traveling 20 m/s brakes to a stop in 50 m. Find the acceleration and the stopping time.",
    "answer": "a = −v₀²/(2Δx) = −400/100 = −4.0 m/s². t = Δv/a = (0 − 20)/(−4.0) = 5.0 s."
   },
   {
    "problem": "A rock is dropped from a 45 m cliff (ignore air resistance). How long does it fall and how fast is it moving at impact?",
    "answer": "t = √(2·45/9.8) ≈ 3.0 s; v = gt ≈ 30 m/s (29.7 m/s)."
   },
   {
    "problem": "A student walks 40 m east in 20 s, then 40 m west in 20 s. Find average speed and average velocity for the whole trip.",
    "answer": "Speed = 80 m / 40 s = 2.0 m/s. Velocity = 0 m / 40 s = 0 m/s."
   },
   {
    "problem": "A ball is thrown straight up at 14.7 m/s. How long until it returns to the thrower's hand, and how high does it go?",
    "answer": "Time up = 14.7/9.8 = 1.5 s, so total = 3.0 s. Height = v₀²/(2g) = 11.0 m."
   }
  ],
  "resources": [
   {
    "name": "PhET: Moving Man",
    "type": "Simulation",
    "url": "https://phet.colorado.edu",
    "use": "Drag the man and watch x–t, v–t, and a–t graphs update together."
   },
   {
    "name": "The Physics Classroom: 1-D Kinematics",
    "type": "Tutorial + practice",
    "url": "https://www.physicsclassroom.com",
    "use": "Concept builders and graph-reading practice."
   },
   {
    "name": "Khan Academy: One-dimensional motion",
    "type": "Video + exercises",
    "url": "https://www.khanacademy.org",
    "use": "Self-paced review of the kinematic equations."
   },
   {
    "name": "OpenStax High School Physics, Ch. 2",
    "type": "Free textbook",
    "url": "https://openstax.org",
    "use": "Reading and worked examples."
   },
   {
    "name": "IXL Physics",
    "type": "Adaptive practice",
    "url": "https://www.ixl.com",
    "use": "Skill practice aligned to class cornell-note practice plans."
   },
   {
    "name": "Lab idea: Ramp & cart motion sensor",
    "type": "Hands-on lab",
    "url": "",
    "use": "Collect x–t data with a motion sensor or phone video analysis; derive v and a from slope."
   }
  ],
  "applications": [
   "Traffic safety: stopping distance grows with the square of speed (v² = 2aΔx), which is why speed limits drop near schools.",
   "Sports analytics: sprint start acceleration and 40-yard-dash splits.",
   "Aviation: runway length requirements from takeoff speed and acceleration.",
   "Accident reconstruction: skid-mark length reveals pre-braking speed."
  ]
 },
 {
  "id": "projectile",
  "number": 2,
  "title": "Projectile Motion",
  "tagline": "Two independent motions at once",
  "standards": [
   {
    "code": "HS-PS2-1",
    "note": "Use Newton's second law with gravity as the only force to predict the motion of a launched object."
   }
  ],
  "practices": [
   "Using Mathematics and Computational Thinking",
   "Developing and Using Models"
  ],
  "crosscutting": [
   "Systems and System Models",
   "Cause and Effect"
  ],
  "bigIdea": "A projectile's horizontal and vertical motions are independent: constant velocity sideways, constant downward acceleration vertically.",
  "concepts": [
   {
    "term": "Independence of components",
    "def": "Horizontal and vertical motion are analyzed separately and linked only by the shared time of flight."
   },
   {
    "term": "Horizontal motion",
    "def": "With no air resistance there is no horizontal force, so aₓ = 0 and vₓ is constant: x = vₓt."
   },
   {
    "term": "Vertical motion",
    "def": "Gravity gives a_y = −9.8 m/s² the entire flight. Use the kinematic equations in y."
   },
   {
    "term": "Vector components",
    "def": "For launch speed v at angle θ: vₓ = v cos θ and v_y = v sin θ."
   },
   {
    "term": "Key points in flight",
    "def": "At the peak v_y = 0 (but vₓ ≠ 0 and a_y is still −9.8). Time up = time down for a launch and landing at the same height."
   },
   {
    "term": "Range and angle",
    "def": "Range = v² sin 2θ / g on level ground. Maximum at 45°; complementary angles (30° and 60°) give equal range."
   },
   {
    "term": "Horizontal launch",
    "def": "Launched horizontally from height h: v_y,0 = 0, so t = √(2h/g), independent of launch speed."
   }
  ],
  "objectives": [
   {
    "id": "P1",
    "verb": "Resolve",
    "text": "I can resolve a launch velocity into horizontal and vertical components.",
    "criteria": "Correct use of sin/cos with the launch angle in 4 of 5 problems."
   },
   {
    "id": "P2",
    "verb": "Explain",
    "text": "I can explain why horizontal and vertical motions are independent.",
    "criteria": "Explanation names aₓ = 0 and a_y = −g and uses the 'dropped vs. fired' comparison."
   },
   {
    "id": "P3",
    "verb": "Solve",
    "text": "I can solve horizontal-launch problems (time, range, impact velocity).",
    "criteria": "Finds t from the vertical motion first, then x = vₓt."
   },
   {
    "id": "P4",
    "verb": "Solve",
    "text": "I can solve angled-launch problems for time of flight, maximum height, and range.",
    "criteria": "Separates components, uses symmetry, includes units."
   },
   {
    "id": "P5",
    "verb": "Predict",
    "text": "I can predict how changing launch speed, angle, or height changes the trajectory.",
    "criteria": "Predictions are justified with equations or a simulation, then tested."
   }
  ],
  "cornell": {
   "topic": "Projectile Motion",
   "cues": [
    {
     "cue": "What is a projectile?",
     "notes": "Any object launched and moving under the influence of gravity alone (air resistance ignored). The path is a parabola."
    },
    {
     "cue": "Why can we split the motion into x and y?",
     "notes": "Gravity acts only vertically, so it cannot change horizontal velocity. The two motions are independent and share only the time t."
    },
    {
     "cue": "What happens horizontally?",
     "notes": "aₓ = 0 → constant vₓ. Use x = vₓt."
    },
    {
     "cue": "What happens vertically?",
     "notes": "a_y = −9.8 m/s² the whole time. Use v_y = v_y0 − gt and y = y₀ + v_y0·t − ½gt²."
    },
    {
     "cue": "How do I break up the launch velocity?",
     "notes": "vₓ = v cos θ, v_y0 = v sin θ (θ measured from the horizontal). Draw the triangle first."
    },
    {
     "cue": "What is true at the top?",
     "notes": "v_y = 0, vₓ unchanged, a = 9.8 m/s² down. Speed is at its minimum, not zero (unless launched straight up)."
    },
    {
     "cue": "Which angle gives max range?",
     "notes": "45° on level ground. θ and (90° − θ) give the same range. Higher angle = more time but less horizontal speed."
    },
    {
     "cue": "How do I solve a cliff launch?",
     "notes": "1) Vertical: find t from h = ½gt². 2) Horizontal: x = vₓt. 3) Impact velocity: v_y = gt, combine with vₓ using Pythagoras."
    }
   ],
   "summary": "Projectile motion is the superposition of constant-velocity motion horizontally and constant-acceleration (free-fall) motion vertically. Resolve the launch velocity into components, solve each direction separately, and connect them through the shared time of flight. Symmetry (for level ground) lets you find total time as twice the time to the peak, and range is greatest at 45°."
  },
  "quiz": [
   {
    "q": "A ball is rolled horizontally off a table at the same instant a second ball is dropped from the same height. Which hits the floor first?",
    "options": [
     "The dropped ball",
     "The rolling ball",
     "They land at the same time",
     "Cannot be determined"
    ],
    "answer": 2,
    "misconception": "Horizontal speed affects fall time",
    "explain": "Both start with zero vertical velocity and share the same vertical acceleration and height, so they take the same time to fall. Horizontal speed has no effect on that."
   },
   {
    "q": "At the highest point of a projectile's path (launched at an angle), which statement is true?",
    "options": [
     "Velocity is zero",
     "Acceleration is zero",
     "Vertical velocity is zero, horizontal velocity is not",
     "Horizontal velocity is zero"
    ],
    "answer": 2,
    "misconception": "Everything stops at the top",
    "explain": "Only the vertical component is zero at the peak. The horizontal velocity stays constant, and gravity still accelerates the object downward."
   },
   {
    "q": "Ignoring air resistance, what horizontal force acts on a ball once it leaves the bat?",
    "options": [
     "A forward force from the bat that fades",
     "A force equal to its weight",
     "No horizontal force",
     "A force proportional to its speed"
    ],
    "answer": 2,
    "misconception": "Motion requires a continuing force",
    "explain": "After the ball leaves the bat the only force is gravity (vertical). The ball keeps its horizontal velocity by inertia."
   },
   {
    "q": "On level ground, which launch angle gives the greatest range for a given speed (no air resistance)?",
    "options": [
     "30°",
     "45°",
     "60°",
     "90°"
    ],
    "answer": 1,
    "misconception": "Higher launch = farther",
    "explain": "Range ∝ sin 2θ, which is maximized at θ = 45°. A 90° launch goes straight up with zero range."
   },
   {
    "q": "Two balls launched at the same speed, one at 30° and one at 60°. Compare their ranges and flight times.",
    "options": [
     "Same range; the 60° ball stays in the air longer",
     "Same range; same time",
     "The 60° ball goes farther and stays longer",
     "The 30° ball goes farther"
    ],
    "answer": 0,
    "misconception": "Equal range implies equal time",
    "explain": "Complementary angles give equal range, but the 60° launch has a larger vertical component, so it spends more time in the air (with a smaller horizontal speed)."
   },
   {
    "q": "A projectile is launched at 20 m/s at 30° above the horizontal. What is its initial vertical velocity?",
    "options": [
     "17.3 m/s",
     "10 m/s",
     "20 m/s",
     "34.6 m/s"
    ],
    "answer": 1,
    "misconception": "Mixing up sin and cos",
    "explain": "v_y = v sin θ = 20 sin 30° = 10 m/s. The 17.3 m/s value is the horizontal component (20 cos 30°)."
   },
   {
    "q": "A ball is kicked horizontally off a cliff at 10 m/s and lands 20 m from the base. If it is kicked at 20 m/s from the same cliff, where does it land?",
    "options": [
     "20 m",
     "40 m",
     "80 m",
     "10 m"
    ],
    "answer": 1,
    "misconception": "Speed changes the fall time",
    "explain": "Fall time depends only on cliff height, so it is unchanged. Range = vₓ·t doubles when vₓ doubles: 40 m."
   },
   {
    "q": "Which quantity is constant throughout the flight of a projectile (no air resistance)?",
    "options": [
     "Speed",
     "Vertical velocity",
     "Horizontal velocity",
     "Velocity"
    ],
    "answer": 2,
    "misconception": "Confusing velocity components with total velocity",
    "explain": "Horizontal velocity is constant because aₓ = 0. Speed and vertical velocity change continuously, so the velocity vector changes too."
   }
  ],
  "practice": [
   {
    "problem": "A ball is kicked horizontally at 15 m/s from a 20 m cliff. Find the time of flight and the horizontal distance traveled.",
    "answer": "t = √(2·20/9.8) = 2.0 s; x = 15 × 2.02 ≈ 30 m."
   },
   {
    "problem": "A projectile is launched at 25 m/s at 30° on level ground. Find the time of flight, maximum height, and range.",
    "answer": "vₓ = 21.7 m/s, v_y0 = 12.5 m/s. t = 2(12.5)/9.8 = 2.55 s. H = 12.5²/(2·9.8) = 8.0 m. R = 21.7 × 2.55 ≈ 55 m."
   },
   {
    "problem": "At what other launch angle would the 30° projectile above have the same range?",
    "answer": "60° (complementary angle), with a longer time of flight and greater maximum height."
   },
   {
    "problem": "A stone is thrown horizontally at 8.0 m/s from a bridge and hits the water 2.0 s later. How high is the bridge, and what is the stone's speed at impact?",
    "answer": "h = ½(9.8)(2.0)² = 19.6 m. v_y = 19.6 m/s; speed = √(8.0² + 19.6²) ≈ 21 m/s."
   },
   {
    "problem": "A basketball is released at a fixed speed and angle. Explain how the flight time and range change if the player jumps and releases the ball from a higher point.",
    "answer": "Flight time and range both increase slightly because the ball starts higher and has more vertical distance to fall; the shape stays a parabola."
   }
  ],
  "resources": [
   {
    "name": "PhET: Projectile Motion",
    "type": "Simulation",
    "url": "https://phet.colorado.edu",
    "use": "Vary angle, speed, and height; toggle air resistance; compare components."
   },
   {
    "name": "The Physics Classroom: Projectiles",
    "type": "Tutorial + practice",
    "url": "https://www.physicsclassroom.com",
    "use": "Horizontal vs. angled launch walkthroughs."
   },
   {
    "name": "Khan Academy: Two-dimensional projectile motion",
    "type": "Video + exercises",
    "url": "https://www.khanacademy.org",
    "use": "Component practice."
   },
   {
    "name": "OpenStax High School Physics, Ch. 3",
    "type": "Free textbook",
    "url": "https://openstax.org",
    "use": "Worked examples with vectors."
   },
   {
    "name": "Lab idea: Marble launch & landing target",
    "type": "Hands-on lab",
    "url": "",
    "use": "Predict the landing point of a marble leaving a ramp, then test; calculate % error."
   },
   {
    "name": "Phone video analysis (e.g., Tracker, free)",
    "type": "Technology",
    "url": "",
    "use": "Film a thrown ball; plot x–t and y–t to confirm independence of components."
   }
  ],
  "applications": [
   "Sports: optimal launch angle for shot put, long jump, basketball free throws, and soccer free kicks (a bit under 45° when release height is above landing height).",
   "Emergency response: water arc from a fire hose reaching a window.",
   "Engineering: designing fountains, sprinklers, and conveyor drop-offs.",
   "Space science: horizontal launch at orbital speed is projectile motion where the ground curves away."
  ]
 },
 {
  "id": "newton",
  "number": 3,
  "title": "Newton's Laws",
  "tagline": "Forces cause changes in motion",
  "standards": [
   {
    "code": "HS-PS2-1",
    "note": "Analyze data to support the claim that Newton's second law (F = ma) describes the mathematical relationship among net force, mass, and acceleration."
   },
   {
    "code": "HS-PS2-4",
    "note": "Preview (Semester 2): gravitational and electric forces between objects. Weight and the law of gravitation introduced here."
   }
  ],
  "practices": [
   "Analyzing and Interpreting Data",
   "Constructing Explanations",
   "Using Mathematics and Computational Thinking"
  ],
  "crosscutting": [
   "Cause and Effect",
   "Systems and System Models"
  ],
  "bigIdea": "A net force on an object causes it to accelerate in proportion to the force and inversely to its mass; forces always come in equal-and-opposite pairs between two objects.",
  "concepts": [
   {
    "term": "First law (inertia)",
    "def": "An object keeps its velocity (including rest) unless a nonzero net force acts. Mass measures inertia."
   },
   {
    "term": "Second law",
    "def": "a = F_net / m, or F_net = ma. Acceleration points in the direction of the net force."
   },
   {
    "term": "Third law",
    "def": "If A pushes on B with force F, B pushes on A with force −F. The pair acts on different objects, so they never cancel each other."
   },
   {
    "term": "Mass vs. weight",
    "def": "Mass (kg) is the amount of matter and does not change. Weight W = mg (N) is the gravitational force and depends on location."
   },
   {
    "term": "Free-body diagrams",
    "def": "Draw one object as a dot and every force acting ON it: weight, normal, friction, tension, applied push/pull."
   },
   {
    "term": "Normal force",
    "def": "Contact force perpendicular to a surface. It is not always equal to mg (elevators, inclines)."
   },
   {
    "term": "Friction",
    "def": "Static friction matches the applied force up to f_s,max = μₛN. Kinetic friction f_k = μ_kN. Friction depends on N and the surfaces, not contact area."
   },
   {
    "term": "Inclined planes",
    "def": "Resolve weight into components: parallel to the incline mg sin θ and perpendicular mg cos θ."
   }
  ],
  "objectives": [
   {
    "id": "N1",
    "verb": "Explain",
    "text": "I can explain inertia and use the first law to decide when the net force is zero.",
    "criteria": "Identifies that constant velocity ⇒ net force = 0 and names the balanced forces."
   },
   {
    "id": "N2",
    "verb": "Draw",
    "text": "I can draw correct free-body diagrams for objects at rest, in motion, and on inclines.",
    "criteria": "All forces present, labeled, correct direction, none extra (e.g., no 'force of motion')."
   },
   {
    "id": "N3",
    "verb": "Calculate",
    "text": "I can use F_net = ma to find force, mass, or acceleration, including multi-force problems.",
    "criteria": "Sums forces with correct signs, solves, includes units (N, kg, m/s²)."
   },
   {
    "id": "N4",
    "verb": "Identify",
    "text": "I can identify Newton's third-law pairs and explain why they do not cancel.",
    "criteria": "Names both objects and both forces; states the pair acts on different objects."
   },
   {
    "id": "N5",
    "verb": "Analyze",
    "text": "I can analyze friction, normal force, and apparent weight situations (including elevators and inclines).",
    "criteria": "Chooses static vs. kinetic friction correctly and finds N from a force balance."
   },
   {
    "id": "N6",
    "verb": "Design",
    "text": "I can design an investigation relating force, mass, and acceleration, and graph the result.",
    "criteria": "Controls variables, plots a vs. F or a vs. 1/m, interprets slope."
   }
  ],
  "cornell": {
   "topic": "Newton's Laws of Motion",
   "cues": [
    {
     "cue": "What is Newton's first law?",
     "notes": "An object at rest stays at rest and an object in motion stays in motion at constant velocity unless acted on by a nonzero net force. Inertia = resistance to a change in velocity; more mass → more inertia."
    },
    {
     "cue": "What is net force?",
     "notes": "The vector sum of all forces on an object. Net = 0 → equilibrium (at rest OR constant velocity)."
    },
    {
     "cue": "What is Newton's second law?",
     "notes": "F_net = ma. 2× force → 2× acceleration. 2× mass → ½ acceleration. 1 N = 1 kg·m/s². a points the same way as F_net."
    },
    {
     "cue": "What is Newton's third law?",
     "notes": "Forces come in pairs: A on B and B on A. Equal size, opposite direction, same type of force, act on DIFFERENT objects (so no cancelling)."
    },
    {
     "cue": "Mass vs. weight?",
     "notes": "Mass: kg, constant everywhere. Weight: W = mg, in N, changes with g (Moon g ≈ 1.6 m/s²)."
    },
    {
     "cue": "How do I draw a free-body diagram?",
     "notes": "1) Pick ONE object. 2) Draw a dot. 3) Draw each force that acts on it as an arrow from the dot. 4) Label (W, N, f, T, F_app). Never include forces the object exerts on others."
    },
    {
     "cue": "What does the normal force do?",
     "notes": "Pushes perpendicular to the surface. Flat floor, no vertical acceleration: N = mg. Elevator accelerating up: N = m(g + a). On an incline: N = mg cos θ."
    },
    {
     "cue": "How does friction work?",
     "notes": "Static: f_s ≤ μₛN, equals the push until the object starts to slide. Kinetic: f_k = μ_kN (usually smaller). Independent of surface area."
    },
    {
     "cue": "How do I solve a force problem?",
     "notes": "FBD → choose axes → ΣF = ma in each axis → solve → check units and reasonableness."
    }
   ],
   "summary": "Newton's laws connect forces to motion. The first law says an unbalanced force is required to change velocity. The second law gives the quantitative rule, F_net = ma, with the net force being the vector sum of every force on the object. The third law says every force is part of an interaction between two objects, producing equal and opposite forces that act on different objects. Free-body diagrams, with weight, normal, friction, and tension identified, are the tool for applying the second law."
  },
  "quiz": [
   {
    "q": "A hockey puck slides at constant velocity across frictionless ice. What is the net force on it?",
    "options": [
     "Forward, equal to its speed",
     "Zero",
     "Equal to its weight",
     "A small forward force to keep it going"
    ],
    "answer": 1,
    "misconception": "Motion requires a force",
    "explain": "Constant velocity means zero acceleration, so the net force is zero (first law). No force is needed to keep an object moving."
   },
   {
    "q": "A heavy truck collides head-on with a small car. During the collision, which exerts the larger force?",
    "options": [
     "The truck on the car",
     "The car on the truck",
     "They exert equal-magnitude forces on each other",
     "It depends on who was moving faster"
    ],
    "answer": 2,
    "misconception": "Bigger or faster objects push harder in a collision",
    "explain": "Newton's third law: the forces are equal in magnitude and opposite in direction. The car has the larger acceleration because it has less mass (a = F/m)."
   },
   {
    "q": "A book rests on a table. What is the third-law partner of the Earth's gravitational pull on the book?",
    "options": [
     "The table's upward normal force on the book",
     "The book's gravitational pull on the Earth",
     "The book's push on the table",
     "Friction"
    ],
    "answer": 1,
    "misconception": "Weight and normal force are a third-law pair",
    "explain": "A third-law pair is the same type of force acting on two different objects. Earth pulls book ⇔ book pulls Earth. The normal force balances weight, but it is a different interaction."
   },
   {
    "q": "An astronaut travels from Earth to the Moon. Which statement is correct?",
    "options": [
     "Her mass decreases",
     "Her weight decreases but her mass is unchanged",
     "Both mass and weight stay the same",
     "Her weight is unchanged but her mass decreases"
    ],
    "answer": 1,
    "misconception": "Mass and weight are the same thing",
    "explain": "Mass is the amount of matter and is constant. Weight = mg, and g on the Moon is about one-sixth of Earth's, so her weight is smaller."
   },
   {
    "q": "A constant net force on a 2 kg cart gives it an acceleration of 3 m/s². What is the acceleration if the same net force acts on a 6 kg cart?",
    "options": [
     "9 m/s²",
     "3 m/s²",
     "1 m/s²",
     "0.5 m/s²"
    ],
    "answer": 2,
    "misconception": "Inverse relationship confusion",
    "explain": "F = (2)(3) = 6 N. With 6 kg: a = 6/6 = 1 m/s². Tripling the mass divides the acceleration by 3."
   },
   {
    "q": "You stand on a scale in an elevator that is accelerating upward. The scale reading is…",
    "options": [
     "less than your weight",
     "equal to your weight",
     "greater than your weight",
     "zero"
    ],
    "answer": 2,
    "misconception": "Normal force always equals mg",
    "explain": "Newton's second law: N − mg = ma with a upward, so N = m(g + a) > mg. The scale reads the normal force."
   },
   {
    "q": "A 20 kg crate sits on a floor and you push it horizontally with 30 N, but it does not move. How large is the friction force?",
    "options": [
     "0 N",
     "30 N",
     "196 N",
     "Cannot be determined"
    ],
    "answer": 1,
    "misconception": "Friction always equals μN",
    "explain": "The crate is in equilibrium, so static friction exactly balances the push: 30 N. The μₛN value is only the maximum static friction."
   },
   {
    "q": "A block is pulled across a table at constant speed. If it is turned onto its smaller face (same weight, same surfaces), the kinetic friction force will…",
    "options": [
     "increase",
     "decrease",
     "stay the same",
     "become zero"
    ],
    "answer": 2,
    "misconception": "Friction depends on contact area",
    "explain": "f_k = μ_kN depends on the surface properties and normal force, not area. N is unchanged, so friction is the same."
   }
  ],
  "practice": [
   {
    "problem": "A 1200 kg car experiences a net force of 3000 N. Find its acceleration.",
    "answer": "a = F/m = 3000/1200 = 2.5 m/s²."
   },
   {
    "problem": "A 5.0 kg box is pushed with 20 N while friction exerts 8.0 N opposing the motion. Find the acceleration.",
    "answer": "F_net = 20 − 8.0 = 12 N; a = 12/5.0 = 2.4 m/s²."
   },
   {
    "problem": "A 60 kg person stands in an elevator. Find the normal force (a) at rest and (b) while accelerating upward at 2.0 m/s².",
    "answer": "(a) N = mg = 588 N. (b) N = m(g + a) = 60(11.8) = 708 N."
   },
   {
    "problem": "A frictionless incline is 30° above the horizontal. Find the acceleration of a block released from rest on it.",
    "answer": "a = g sin 30° = 4.9 m/s² down the slope."
   },
   {
    "problem": "Two blocks (2.0 kg and 3.0 kg) touch on a frictionless table. A 10 N force pushes the 2.0 kg block into the 3.0 kg block. Find the acceleration and the contact force between the blocks.",
    "answer": "a = 10/5.0 = 2.0 m/s². Contact force on the 3.0 kg block = (3.0)(2.0) = 6.0 N."
   },
   {
    "problem": "A 10 kg sled is pulled at constant velocity by a 25 N horizontal rope. Find the friction force and μ_k.",
    "answer": "Constant velocity ⇒ f = 25 N. N = mg = 98 N so μ_k = 25/98 ≈ 0.26."
   }
  ],
  "resources": [
   {
    "name": "PhET: Forces and Motion: Basics",
    "type": "Simulation",
    "url": "https://phet.colorado.edu",
    "use": "Push crates, see net force and acceleration with and without friction."
   },
   {
    "name": "PhET: Friction / The Ramp",
    "type": "Simulation",
    "url": "https://phet.colorado.edu",
    "use": "Explore incline force components and friction."
   },
   {
    "name": "The Physics Classroom: Newton's Laws",
    "type": "Tutorial + practice",
    "url": "https://www.physicsclassroom.com",
    "use": "Free-body diagram builders."
   },
   {
    "name": "Khan Academy: Forces and Newton's laws",
    "type": "Video + exercises",
    "url": "https://www.khanacademy.org",
    "use": "Worked problems with solutions."
   },
   {
    "name": "OpenStax High School Physics, Ch. 4",
    "type": "Free textbook",
    "url": "https://openstax.org",
    "use": "Reading + practice."
   },
   {
    "name": "Lab idea: Cart, pulley, and hanging mass (Atwood-style)",
    "type": "Hands-on lab",
    "url": "",
    "use": "Plot a vs. F at constant mass, then a vs. 1/m at constant force; slope should match 1/m and F."
   }
  ],
  "applications": [
   "Seat belts and airbags: inertia explains why passengers keep moving when a car stops suddenly.",
   "Rocket and jet propulsion: expelling gas backward pushes the rocket forward (third law).",
   "Elevator and roller-coaster design: apparent weight and rider comfort limits (g-forces).",
   "Tire tread and braking: static friction at the road determines stopping and cornering ability."
  ]
 },
 {
  "id": "momentum",
  "number": 4,
  "title": "Momentum",
  "tagline": "Impulse, collisions, and conservation",
  "standards": [
   {
    "code": "HS-PS2-2",
    "note": "Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system."
   },
   {
    "code": "HS-PS2-3",
    "note": "Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision."
   }
  ],
  "practices": [
   "Using Mathematics and Computational Thinking",
   "Constructing Explanations and Designing Solutions"
  ],
  "crosscutting": [
   "Systems and System Models",
   "Stability and Change"
  ],
  "bigIdea": "Within a closed system, total momentum stays constant no matter how complicated the interaction; impulse is how external forces change it.",
  "concepts": [
   {
    "term": "Momentum",
    "def": "p = mv. A vector with units kg·m/s; points in the direction of the velocity."
   },
   {
    "term": "Impulse",
    "def": "J = F_net·Δt = Δp. Units N·s = kg·m/s. The area under a force–time graph."
   },
   {
    "term": "Impulse–momentum theorem",
    "def": "Increasing the collision time lowers the average force for the same Δp (crumple zones, airbags, catching a ball)."
   },
   {
    "term": "Conservation of momentum",
    "def": "If no net external force acts on a system, total momentum before = total momentum after: m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′."
   },
   {
    "term": "Types of collisions",
    "def": "Elastic: momentum and kinetic energy conserved. Inelastic: momentum conserved, KE lost. Perfectly inelastic: objects stick together."
   },
   {
    "term": "Explosions and recoil",
    "def": "Starting from rest, total momentum is zero, so the pieces move in opposite directions with equal-magnitude momenta; the lighter piece moves faster."
   },
   {
    "term": "System choice",
    "def": "Define the system so that external forces are negligible during the interaction; internal forces change individual momenta but not the total."
   }
  ],
  "objectives": [
   {
    "id": "M1",
    "verb": "Calculate",
    "text": "I can calculate momentum and compare the momentum of different objects.",
    "criteria": "Uses p = mv with sign for direction; correct units."
   },
   {
    "id": "M2",
    "verb": "Apply",
    "text": "I can use the impulse–momentum theorem to find force, time, or change in momentum.",
    "criteria": "Computes Δp with signs (including bounces) and F = Δp/Δt."
   },
   {
    "id": "M3",
    "verb": "Solve",
    "text": "I can solve one-dimensional collision and explosion problems using conservation of momentum.",
    "criteria": "Defines system and positive direction, writes before/after equation, solves."
   },
   {
    "id": "M4",
    "verb": "Classify",
    "text": "I can classify collisions as elastic, inelastic, or perfectly inelastic using kinetic-energy data.",
    "criteria": "Compares KE before and after with calculations."
   },
   {
    "id": "M5",
    "verb": "Design",
    "text": "I can design and evaluate a device that minimizes collision force, justifying with impulse.",
    "criteria": "Explicitly increases stopping time; tests with data (e.g., egg-drop or crash-cart)."
   }
  ],
  "cornell": {
   "topic": "Momentum and Impulse",
   "cues": [
    {
     "cue": "What is momentum?",
     "notes": "p = mv. 'Mass in motion.' Vector. A slow, massive object can have more momentum than a fast, light one."
    },
    {
     "cue": "What is impulse?",
     "notes": "J = FΔt = Δp = m(v_f − v_i). Area under an F–t graph. Includes direction: a bounce changes p by more than a stop."
    },
    {
     "cue": "Why do airbags and crumple zones help?",
     "notes": "Same Δp but longer Δt → smaller average force (F = Δp/Δt). Less force → less injury."
    },
    {
     "cue": "When is momentum conserved?",
     "notes": "When the net EXTERNAL force on the system is zero (or negligible during a brief collision). Internal forces cancel in pairs (Newton's 3rd law)."
    },
    {
     "cue": "How do I set up a conservation problem?",
     "notes": "1) Choose system. 2) Choose +direction. 3) Write Σp_before = Σp_after. 4) Plug in signs. 5) Solve. 6) Check reasonableness."
    },
    {
     "cue": "What kinds of collisions are there?",
     "notes": "Elastic: KE conserved (billiard balls ≈). Inelastic: KE lost to heat, sound, deformation. Perfectly inelastic: stick together, max KE loss. Momentum is conserved in ALL of them."
    },
    {
     "cue": "What about explosions and recoil?",
     "notes": "Start p = 0 → afterwards p₁ = −p₂. m₁v₁ = −m₂v₂. The smaller mass has the larger speed."
    }
   ],
   "summary": "Momentum (p = mv) measures how hard it is to stop a moving object. Impulse — force acting over time — changes momentum, so lengthening collision time reduces force. When no external net force acts on a system, total momentum is conserved in any collision or explosion, whether or not kinetic energy is conserved. Elastic collisions also conserve kinetic energy; inelastic collisions do not."
  },
  "quiz": [
   {
    "q": "A 60 kg runner moves at 5.0 m/s. A 0.010 kg bullet moves at 800 m/s. Which has more momentum?",
    "options": [
     "The bullet, because it is much faster",
     "The runner",
     "They are equal",
     "Cannot be determined"
    ],
    "answer": 1,
    "misconception": "Speed alone determines momentum",
    "explain": "Runner: 60 × 5 = 300 kg·m/s. Bullet: 0.010 × 800 = 8 kg·m/s. Mass matters as much as velocity."
   },
   {
    "q": "A baseball catcher moves her glove backward while catching a fast ball. Why does this reduce the sting?",
    "options": [
     "It reduces the ball's momentum",
     "It increases the time of the stop, so the average force is smaller",
     "It reduces the impulse",
     "It makes the ball lose mass"
    ],
    "answer": 1,
    "misconception": "Reducing force requires reducing impulse",
    "explain": "Impulse (Δp) is the same either way. Since F = Δp/Δt, a longer stopping time means a smaller average force."
   },
   {
    "q": "In which type of collision is total momentum NOT conserved (for an isolated system)?",
    "options": [
     "Elastic",
     "Inelastic",
     "Perfectly inelastic",
     "None of them"
    ],
    "answer": 3,
    "misconception": "Inelastic collisions lose momentum",
    "explain": "Momentum is conserved in every collision of an isolated system. Only kinetic energy is lost in inelastic collisions."
   },
   {
    "q": "A ball hits a wall and sticks. An identical ball hits the same wall at the same speed and bounces back with nearly the same speed. Which receives the larger impulse?",
    "options": [
     "The one that sticks",
     "The one that bounces",
     "Same impulse",
     "Neither: the wall doesn't move"
    ],
    "answer": 1,
    "misconception": "Stopping is the maximum change",
    "explain": "Sticking: Δp = 0 − mv = −mv. Bouncing: Δp = −mv − mv = −2mv. The bounce changes momentum twice as much, so the impulse is twice as large."
   },
   {
    "q": "A 5.0 kg rifle fires a 0.010 kg bullet at 400 m/s. Compare the recoil speed of the rifle to the bullet.",
    "options": [
     "The rifle moves at 400 m/s too",
     "The rifle moves much slower in the opposite direction (≈0.8 m/s)",
     "The rifle moves faster than the bullet",
     "The rifle does not move"
    ],
    "answer": 1,
    "misconception": "Equal forces mean equal speeds",
    "explain": "Total momentum starts at zero, so m_rifle·v_rifle = −m_bullet·v_bullet → v = −(0.010 × 400)/5.0 = −0.8 m/s."
   },
   {
    "q": "Two identical carts approach each other with equal speed and stick together on collision. What is their velocity right after?",
    "options": [
     "Same speed as before",
     "Half the speed",
     "Zero",
     "Twice the speed"
    ],
    "answer": 2,
    "misconception": "Forgetting momentum is a vector",
    "explain": "Momenta are equal and opposite, so the total is zero. After sticking, (2m)v′ = 0 → v′ = 0. Kinetic energy has been lost."
   },
   {
    "q": "A 1500 kg car at 10 m/s hits and sticks to a 1000 kg car at rest. What is their combined velocity?",
    "options": [
     "10 m/s",
     "6.0 m/s",
     "4.0 m/s",
     "5.0 m/s"
    ],
    "answer": 1,
    "misconception": "Dividing by one mass instead of the total",
    "explain": "p before = 1500 × 10 = 15,000. After: (2500)v′ = 15,000 → v′ = 6.0 m/s."
   },
   {
    "q": "The area under a force–time graph represents…",
    "options": [
     "Work",
     "Impulse",
     "Power",
     "Acceleration"
    ],
    "answer": 1,
    "misconception": "Confusing F–t area with F–x area",
    "explain": "Force × time = impulse (change in momentum). Force × distance would be work."
   }
  ],
  "practice": [
   {
    "problem": "Find the momentum of a 1000 kg car traveling at 20 m/s east.",
    "answer": "p = 20,000 kg·m/s east."
   },
   {
    "problem": "A 0.145 kg baseball approaches a bat at 40 m/s and leaves in the opposite direction at 50 m/s. The contact lasts 2.0 ms. Find the impulse and average force.",
    "answer": "Δp = 0.145(50 − (−40)) = 13 N·s. F = 13.05/0.0020 ≈ 6.5 × 10³ N."
   },
   {
    "problem": "A 1500 kg car moving at 10 m/s hits and locks with a 1000 kg car at rest. Find the final speed and the kinetic energy lost.",
    "answer": "v′ = 6.0 m/s. KE before = 75,000 J; after = 45,000 J; lost = 30,000 J (perfectly inelastic)."
   },
   {
    "problem": "A 5.0 kg rifle fires a 0.010 kg bullet at 400 m/s. Find the rifle's recoil velocity.",
    "answer": "v = −(0.010)(400)/5.0 = −0.80 m/s."
   },
   {
    "problem": "Two 0.50 kg carts collide elastically head-on; cart A moves at 2.0 m/s and cart B is at rest. Predict the velocities after the collision.",
    "answer": "Equal masses in an elastic collision exchange velocities: A stops, B moves at 2.0 m/s."
   },
   {
    "problem": "Design challenge: an egg must survive a 2 m drop. Explain using impulse why a foam-padded container works.",
    "answer": "Foam lengthens the stopping time Δt for the same Δp, so the average force F = Δp/Δt is reduced below the egg's breaking force."
   }
  ],
  "resources": [
   {
    "name": "PhET: Collision Lab",
    "type": "Simulation",
    "url": "https://phet.colorado.edu",
    "use": "Test elastic and inelastic collisions; see momentum and KE totals."
   },
   {
    "name": "The Physics Classroom: Momentum and Collisions",
    "type": "Tutorial + practice",
    "url": "https://www.physicsclassroom.com",
    "use": "Impulse and conservation concept checks."
   },
   {
    "name": "Khan Academy: Impulse and momentum",
    "type": "Video + exercises",
    "url": "https://www.khanacademy.org",
    "use": "Worked collision problems."
   },
   {
    "name": "OpenStax High School Physics, Ch. 8",
    "type": "Free textbook",
    "url": "https://openstax.org",
    "use": "Reading and practice problems."
   },
   {
    "name": "Lab idea: Dynamics carts with motion sensors",
    "type": "Hands-on lab",
    "url": "",
    "use": "Verify Σp before = after for elastic (magnets) and inelastic (Velcro) collisions."
   },
   {
    "name": "Engineering project: Egg-drop / crash-test car",
    "type": "Design project",
    "url": "",
    "use": "Satisfies the HS-PS2-3 design performance expectation; students iterate on stopping time."
   }
  ],
  "applications": [
   "Vehicle safety: crumple zones, airbags, seat belts, and helmets lengthen collision time.",
   "Sports: follow-through in a golf swing or tennis serve increases contact time and impulse; boxers 'roll with the punch'.",
   "Rocketry: rockets gain forward momentum by expelling exhaust backward.",
   "Accident reconstruction: investigators use momentum conservation on vehicle collisions to estimate pre-crash speeds."
  ]
 },
 {
  "id": "energy",
  "number": 5,
  "title": "Work & Energy",
  "tagline": "Conservation of energy and its transformations",
  "standards": [
   {
    "code": "HS-PS3-1",
    "note": "Create a computational model to calculate the change in the energy of one component of a system when the changes in energy of the other components and the energy flows are known."
   },
   {
    "code": "HS-PS3-2",
    "note": "Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as a combination of energy associated with the motion of particles and energy associated with the relative positions of particles."
   },
   {
    "code": "HS-PS3-3",
    "note": "Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy."
   }
  ],
  "practices": [
   "Using Mathematics and Computational Thinking",
   "Developing and Using Models",
   "Constructing Explanations and Designing Solutions"
  ],
  "crosscutting": [
   "Energy and Matter",
   "Systems and System Models"
  ],
  "bigIdea": "Energy is never created or destroyed. It is transferred by work (and heat) and transformed among kinetic, potential, and thermal forms.",
  "concepts": [
   {
    "term": "Work",
    "def": "W = Fd cos θ, where θ is the angle between the force and the displacement. Unit: joule (J = N·m). Force perpendicular to motion does no work."
   },
   {
    "term": "Kinetic energy",
    "def": "KE = ½mv². Depends on the square of speed."
   },
   {
    "term": "Gravitational potential energy",
    "def": "PE_g = mgh, relative to a chosen reference height."
   },
   {
    "term": "Elastic potential energy",
    "def": "PE_s = ½kx² for a spring with constant k stretched or compressed by x."
   },
   {
    "term": "Work–energy theorem",
    "def": "W_net = ΔKE = ½mv_f² − ½mv_i²."
   },
   {
    "term": "Conservation of energy",
    "def": "In an isolated system, total energy is constant: KE + PE + thermal = constant. With friction, mechanical energy decreases and thermal energy increases by the same amount."
   },
   {
    "term": "Power",
    "def": "P = W/t = Fv. Unit: watt (W = J/s). Same work in less time means more power."
   },
   {
    "term": "Efficiency",
    "def": "efficiency = useful energy out / total energy in. Always less than 100% in real devices."
   }
  ],
  "objectives": [
   {
    "id": "E1",
    "verb": "Calculate",
    "text": "I can calculate the work done by a force, including when the force is at an angle.",
    "criteria": "Applies W = Fd cos θ; recognizes zero work when F ⟂ d."
   },
   {
    "id": "E2",
    "verb": "Calculate",
    "text": "I can calculate kinetic, gravitational potential, and elastic potential energy.",
    "criteria": "Correct formulas, units in joules."
   },
   {
    "id": "E3",
    "verb": "Apply",
    "text": "I can use conservation of mechanical energy to find speeds and heights.",
    "criteria": "Sets up KE + PE at two points; solves; checks reasonableness."
   },
   {
    "id": "E4",
    "verb": "Model",
    "text": "I can model energy transfers using bar charts or system diagrams, including thermal energy from friction.",
    "criteria": "Bars balance; energy flows are labeled (HS-PS3-1, PS3-2)."
   },
   {
    "id": "E5",
    "verb": "Analyze",
    "text": "I can use the work–energy theorem and power to analyze real situations such as braking distances.",
    "criteria": "Relates W_net to ΔKE and computes P = W/t."
   },
   {
    "id": "E6",
    "verb": "Design",
    "text": "I can design and evaluate a device that converts energy between forms and calculate its efficiency.",
    "criteria": "Identifies input/output energy; measures or estimates efficiency (HS-PS3-3)."
   }
  ],
  "cornell": {
   "topic": "Work, Energy, and Power",
   "cues": [
    {
     "cue": "What is work?",
     "notes": "W = Fd cos θ. Force must cause displacement along its direction. Carrying a box horizontally: lifting force ⟂ motion → W = 0. Holding a weight still: d = 0 → W = 0."
    },
    {
     "cue": "What is kinetic energy?",
     "notes": "KE = ½mv². Double the speed → 4× the KE. Always positive (a scalar)."
    },
    {
     "cue": "What is gravitational PE?",
     "notes": "PE = mgh above a chosen zero level. Only height changes matter, not the path taken."
    },
    {
     "cue": "What is elastic PE?",
     "notes": "PE = ½kx². Double the stretch → 4× the energy."
    },
    {
     "cue": "What is the work–energy theorem?",
     "notes": "W_net = ΔKE. Positive net work speeds an object up; negative net work (friction, braking) slows it down."
    },
    {
     "cue": "What is conservation of energy?",
     "notes": "Total energy of an isolated system is constant. Frictionless: KE_i + PE_i = KE_f + PE_f. With friction: KE_i + PE_i = KE_f + PE_f + thermal."
    },
    {
     "cue": "What is power?",
     "notes": "Rate of doing work: P = W/t = Fv. 1 W = 1 J/s. Same work, half the time → double the power."
    },
    {
     "cue": "What is efficiency?",
     "notes": "Useful output / total input. A car engine is roughly 25–30% efficient; the rest becomes heat."
    },
    {
     "cue": "How do I solve energy problems?",
     "notes": "1) Pick initial and final states. 2) List all energies at each. 3) Include work by non-conservative forces. 4) Solve for the unknown. Energy methods skip the path and time."
    }
   ],
   "summary": "Work is the transfer of energy by a force acting through a distance. Kinetic energy (½mv²) is energy of motion; potential energy (mgh, ½kx²) is energy of position or configuration. The work–energy theorem links net work to change in kinetic energy. Energy is conserved overall, but friction transforms mechanical energy into thermal energy. Power measures how fast energy is transferred and efficiency compares useful output with input."
  },
  "quiz": [
   {
    "q": "You carry a heavy box horizontally at constant speed across a room. How much work does the upward force of your arms do on the box?",
    "options": [
     "Equal to its weight times the distance",
     "Zero",
     "Equal to its kinetic energy",
     "Negative"
    ],
    "answer": 1,
    "misconception": "Effort equals work",
    "explain": "W = Fd cos θ. The lifting force is perpendicular to the displacement (θ = 90°), so cos θ = 0 and W = 0. You may feel tired, but physically no work is done on the box."
   },
   {
    "q": "A car doubles its speed from 15 m/s to 30 m/s. Its kinetic energy…",
    "options": [
     "doubles",
     "triples",
     "quadruples",
     "stays the same"
    ],
    "answer": 2,
    "misconception": "KE is proportional to speed",
    "explain": "KE = ½mv² grows with v². Doubling v multiplies KE by 4."
   },
   {
    "q": "Two frictionless ramps have the same height but different lengths. A block slides from rest down each. Compare the speeds at the bottom.",
    "options": [
     "Faster on the steeper (shorter) ramp",
     "Faster on the longer ramp",
     "The speeds are equal",
     "Cannot be determined"
    ],
    "answer": 2,
    "misconception": "Path or steepness matters for final speed",
    "explain": "Energy conservation: mgh = ½mv² → v = √(2gh). It depends only on height, not on the path. (The time taken is different.)"
   },
   {
    "q": "Two students lift identical boxes to the same shelf. Student A takes 2 s; Student B takes 4 s. Which statement is correct?",
    "options": [
     "A does more work",
     "B does more work",
     "Same work, but A has more power",
     "Same work and same power"
    ],
    "answer": 2,
    "misconception": "Confusing work and power",
    "explain": "Both do W = mgh. Power = W/t, so the one who takes less time delivers twice the power."
   },
   {
    "q": "A sliding block comes to rest because of friction. What happened to its kinetic energy?",
    "options": [
     "It was destroyed",
     "It became thermal energy",
     "It became gravitational PE",
     "It was stored in the block's mass"
    ],
    "answer": 1,
    "misconception": "Energy is lost or used up",
    "explain": "Energy is conserved. Friction converts kinetic energy into thermal energy of the block and surface."
   },
   {
    "q": "A spring is compressed 2 cm and stores 1 J. How much energy is stored if it is compressed 4 cm?",
    "options": [
     "2 J",
     "4 J",
     "8 J",
     "1 J"
    ],
    "answer": 1,
    "misconception": "Linear instead of quadratic relationship",
    "explain": "PE = ½kx². Doubling x quadruples the stored energy: 4 J."
   },
   {
    "q": "A car going 20 m/s skids 40 m to a stop on dry pavement. At 40 m/s (same road), the skid distance is about…",
    "options": [
     "80 m",
     "120 m",
     "160 m",
     "40 m"
    ],
    "answer": 2,
    "misconception": "Stopping distance is proportional to speed",
    "explain": "Friction does work −fd = −KE_i. KE quadruples when v doubles, so the distance quadruples: 160 m."
   },
   {
    "q": "A 2.0 kg ball is thrown straight up at 10 m/s. Ignoring air resistance, what maximum height does it reach?",
    "options": [
     "10 m",
     "5.1 m",
     "20 m",
     "2.5 m"
    ],
    "answer": 1,
    "misconception": "Forgetting to cancel mass",
    "explain": "½mv² = mgh → h = v²/(2g) = 100/19.6 ≈ 5.1 m. Mass cancels."
   }
  ],
  "practice": [
   {
    "problem": "A person pushes a crate 5.0 m with a 20 N horizontal force. Then a different person pulls it 5.0 m with a 20 N force at 60° above the horizontal. Find the work in each case.",
    "answer": "Push: W = 20 × 5.0 = 100 J. Pull: W = 20 × 5.0 × cos 60° = 50 J."
   },
   {
    "problem": "Find the kinetic energy of a 1000 kg car at 25 m/s. What happens to the KE if it speeds up to 50 m/s?",
    "answer": "KE = ½(1000)(25)² = 3.1 × 10⁵ J (312,500 J). At 50 m/s it is 4× larger, 1.25 × 10⁶ J."
   },
   {
    "problem": "A roller-coaster car starts from rest at the top of a 30 m hill. Ignoring friction, what is its speed at the bottom?",
    "answer": "v = √(2gh) = √(2 × 9.8 × 30) ≈ 24 m/s."
   },
   {
    "problem": "A 50 kg student climbs a 3.0 m staircase in 5.0 s. Find the work done against gravity and the average power.",
    "answer": "W = mgh = 50 × 9.8 × 3.0 = 1.5 × 10³ J (1470 J). P = 1470/5.0 ≈ 290 W."
   },
   {
    "problem": "A spring (k = 200 N/m) is compressed 0.10 m and used to launch a 0.050 kg block along a frictionless surface. Find the stored energy and launch speed.",
    "answer": "PE = ½(200)(0.10)² = 1.0 J. v = √(2 × 1.0/0.050) ≈ 6.3 m/s."
   },
   {
    "problem": "A 1000 kg car traveling 15 m/s brakes to a stop with a constant friction force of 7500 N. Find the stopping distance.",
    "answer": "W = −fd = −ΔKE → d = ½(1000)(15²)/7500 = 15 m."
   }
  ],
  "resources": [
   {
    "name": "PhET: Energy Skate Park",
    "type": "Simulation",
    "url": "https://phet.colorado.edu",
    "use": "Bar charts of KE, PE, and thermal energy; add friction."
   },
   {
    "name": "PhET: Masses and Springs",
    "type": "Simulation",
    "url": "https://phet.colorado.edu",
    "use": "Elastic and gravitational PE with oscillating masses."
   },
   {
    "name": "The Physics Classroom: Work, Energy, and Power",
    "type": "Tutorial + practice",
    "url": "https://www.physicsclassroom.com",
    "use": "Concept builders and calculators."
   },
   {
    "name": "Khan Academy: Work and energy",
    "type": "Video + exercises",
    "url": "https://www.khanacademy.org",
    "use": "Worked examples."
   },
   {
    "name": "OpenStax High School Physics, Ch. 9",
    "type": "Free textbook",
    "url": "https://openstax.org",
    "use": "Reading and problems."
   },
   {
    "name": "Lab idea: Ramp-and-cart energy bars; stair-climb power lab",
    "type": "Hands-on lab",
    "url": "",
    "use": "Measure h, v, and t to verify conservation and compute power."
   },
   {
    "name": "Engineering project: Rube Goldberg or energy-conversion device",
    "type": "Design project",
    "url": "",
    "use": "Meets HS-PS3-3: build a device, measure efficiency, redesign."
   }
  ],
  "applications": [
   "Renewable energy: hydroelectric dams convert gravitational PE to electricity; wind turbines convert KE.",
   "Transportation: regenerative braking in hybrid and electric vehicles recovers KE; speed limits relate to KE ∝ v².",
   "Amusement parks: roller coaster hill heights are set by energy conservation.",
   "Human body and food: Calories measure chemical energy; power output explains why sprinting can't be sustained."
  ]
 }
];
