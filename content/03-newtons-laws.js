module.exports = {
  id: "newton",
  num: 3,
  dir: "03-newtons-laws",
  title: "Newton's Laws",
  subtitle: "Physics | Forces and Motion | inertia, free-body diagrams, net force, F = ma, action-reaction",
  weeks: "Weeks 8–11",
  ngss: [
    { code: "HS-PS2-1", text: "Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration." },
    { code: "HS-PS2-4", text: "Use mathematical representations of Newton's Law of Gravitation to describe and predict the gravitational forces between objects (introduced here through weight, F_grav = m·g)." },
  ],
  essentialQuestion: "Why do objects speed up, slow down, change direction, or keep doing what they are doing?",
  targets: [
    "I can state Newton's three laws and give an example of each.",
    "I can draw a free-body diagram with correctly named and sized force arrows.",
    "I can find the net force and use F_net = m·a to find acceleration, force, or mass.",
    "I can tell mass from weight and calculate weight with F_grav = m·g.",
    "I can identify action-reaction force pairs and explain why they do not cancel.",
    "I can calculate friction and explain what happens at constant velocity.",
  ],
  keyConcepts: [
    ["Force", "A push or pull on an object from another object, measured in newtons (N). A vector."],
    ["Net force", "The vector sum of all forces on one object. It, not any single force, decides the acceleration."],
    ["Inertia (first law)", "Objects keep their velocity unless a net force acts. Mass measures inertia."],
    ["Second law", "a = F_net ÷ m. Acceleration is in the direction of the net force."],
    ["Mass vs. weight", "Mass is the amount of matter (kg) and is the same everywhere. Weight is the force of gravity (N): F_grav = m·g."],
    ["Third law", "Forces come in pairs: equal size, opposite direction, acting on two different objects."],
    ["Free-body diagram", "A sketch of one object with an arrow for each force on it: F_grav, F_norm, F_app, F_frict, F_tens, F_air."],
    ["Friction", "A force that opposes sliding: F_frict = μ·F_norm."],
  ],
  sections: [
    {
      title: "Forces and Free-Body Diagrams",
      cues: [
        { q: "What is a force, and what unit is it measured in?", notes: [
          "A **force** is a push or pull that one object exerts on another. It is a vector.",
          "Unit: the **newton (N)**. 1 N = 1 kg·m/s².",
          "Common forces: gravity (**F_grav**), normal (**F_norm**), applied (**F_app**), friction (**F_frict**), tension (**F_tens**), air resistance (**F_air**).",
        ]},
        { q: "How do you draw a free-body diagram?", notes: [
          "1. Draw the object as a box or dot. Draw **one object only**.",
          "2. Draw an arrow for each force **on** that object, starting at the object and pointing the way the force acts.",
          "3. Label every arrow. Make longer arrows for larger forces.",
          "Never draw velocity, acceleration, or a \"force of motion\" as a force.",
        ]},
        { q: "Which object exerts the normal force, and which way does it point?", notes: [
          "The **surface** the object touches exerts the normal force.",
          "It points **perpendicular** to the surface, away from it.",
          "On a level floor with no other vertical forces, F_norm = F_grav. That is not always true (elevators, ramps, someone pushing down).",
        ]},
      ],
      ixl: [["Grade 8 I.5", "Balanced and unbalanced forces"], ["Grade 8 KK.6", "Abbreviate force, energy, and electricity units"]],
      ixlNote: "IXL has no free-body-diagram skill. Use the physicsclassroom.com Concept Builders in the Newton's Laws section for drawing and reading free-body diagrams.",
    },
    {
      title: "Newton's First Law: Inertia",
      cues: [
        { q: "What does Newton's first law say?", notes: [
          "An object at rest stays at rest, and an object in motion keeps moving at the same speed in the same direction, **unless a net force acts on it**.",
          "**Inertia** is this tendency to resist changes in motion. More **mass** means more inertia.",
        ]},
        { q: "Does an object need a force to keep moving?", notes: [
          "**No.** A force is needed to **change** velocity, not to keep it.",
          "Things slow down on Earth because friction and air resistance act on them, not because motion \"runs out\".",
          "A puck on frictionless ice would slide at constant velocity forever.",
        ]},
        { q: "What is the net force on an object moving at constant velocity?", notes: [
          "**Zero.** Constant velocity (including rest) means the forces are **balanced**.",
          "Worked example: you push a crate across the floor at constant velocity with 80 N. Net force = 0, so friction = **80 N** backward.",
        ]},
      ],
      ixl: [["Physics F.2", "Newton's first law of motion"]],
    },
    {
      title: "Newton's Second Law: F = ma",
      cues: [
        { q: "How are net force, mass, and acceleration related?", notes: [
          "**a = F_net ÷ m**, usually written **F_net = m·a**.",
          "More net force → more acceleration (direct). More mass → less acceleration (inverse).",
          "The acceleration points in the direction of the **net** force.",
        ]},
        { q: "How do you find the net force?", notes: [
          "Add forces in the same direction; subtract forces in opposite directions.",
          "Handle vertical and horizontal forces separately.",
          "Worked example: 100 N applied to the right, 40 N friction to the left → F_net = **60 N right**.",
        ]},
        { q: "What is the acceleration of a 20 kg crate pushed with 100 N against 40 N of friction?", notes: [
          "Object: the crate. Forces: F_app = 100 N right, F_frict = 40 N left. F_grav and F_norm balance.",
          "F_net = 100 − 40 = 60 N right.",
          "a = F_net ÷ m = 60 ÷ 20 = **3 m/s² to the right**.",
          "Sense check: without friction it would be 5 m/s², so 3 m/s² is reasonable.",
        ]},
        { q: "What force stops a 1200 kg car from 20 m/s in 4 s?", notes: [
          "First the acceleration: a = (0 − 20) ÷ 4 = −5 m/s².",
          "F_net = m·a = 1200 × (−5) = **−6000 N**. The minus sign means the force is opposite the motion.",
        ]},
      ],
      ixl: [["Physics F.3", "Newton's second law of motion"], ["Grade 8 I.2", "How does mass affect force and acceleration?"], ["Grade 8 I.3", "Calculate acceleration using Newton’s second law of motion"]],
    },
    {
      title: "Mass, Weight, and Gravity",
      cues: [
        { q: "What is the difference between mass and weight?", notes: [
          "**Mass** is the amount of matter, in **kilograms**. It is the same on Earth, on the Moon, and in orbit.",
          "**Weight** is the force of gravity on the object, in **newtons**: **F_grav = m·g**.",
          "On Earth g = 9.8 m/s² (also written 9.8 N/kg).",
        ]},
        { q: "What does a 60 kg person weigh on Earth and on the Moon?", notes: [
          "Earth: F_grav = 60 × 9.8 = **588 N**.",
          "Moon (g = 1.6 m/s²): F_grav = 60 × 1.6 = **96 N**.",
          "The mass is 60 kg in both places.",
        ]},
        { q: "What does a scale read in an elevator accelerating upward at 2 m/s² for a 70 kg person?", notes: [
          "Object: the person. Forces: F_norm up (the scale reading), F_grav = 70 × 9.8 = 686 N down.",
          "F_net = m·a → F_norm − 686 = 70 × 2 → F_norm = **826 N**.",
          "At constant velocity (up or down) a = 0, so the scale reads the normal 686 N.",
        ]},
      ],
      ixl: [["Grade 8 I (New)", "How does mass affect gravitational force?"], ["Physics I.4", "Newton's law of universal gravitation"]],
    },
    {
      title: "Newton's Third Law: Action-Reaction",
      cues: [
        { q: "What does Newton's third law say?", notes: [
          "When object A pushes on object B, B pushes back on A with a force that is **equal in size and opposite in direction**.",
          "The two forces act on **different objects** and are the same type of force.",
        ]},
        { q: "In a collision between a truck and a small car, which exerts the larger force?", notes: [
          "**Neither.** The forces are equal in size.",
          "The car is affected more because it has less mass: the same force gives it a larger acceleration (a = F ÷ m).",
        ]},
        { q: "Why don't action and reaction forces cancel?", notes: [
          "They act on **different objects**. Only forces on the **same** object can cancel.",
          "To name the pair, swap the two objects: \"Earth pulls book down\" pairs with \"book pulls Earth up\".",
          "A book's weight and the normal force from the table are **not** a third-law pair. Both act on the book.",
        ]},
      ],
      ixl: [["Grade 8 I.4", "Predict forces using Newton’s third law of motion"], ["Physics F.1", "Newton's laws of motion"], ["Grade 8 I.6", "Newton's laws of motion"]],
    },
    {
      title: "Friction and Air Resistance",
      cues: [
        { q: "How do you calculate the force of friction?", notes: [
          "**F_frict = μ·F_norm**, where μ (mu) is the coefficient of friction for the two surfaces.",
          "**Static friction** holds an object still and matches the push, up to a maximum. **Kinetic friction** acts while it slides.",
          "Worked example: a 10 kg box is pulled at constant velocity by 30 N. F_frict = 30 N. F_norm = 10 × 9.8 = 98 N. μ = 30 ÷ 98 = **0.31**.",
        ]},
        { q: "How much static friction acts on a crate you push with 100 N if it does not move?", notes: [
          "Exactly **100 N**. The crate is at rest, so the net force is zero.",
          "Static friction is only as large as it needs to be.",
        ]},
        { q: "What is terminal velocity?", notes: [
          "Air resistance grows as a falling object speeds up.",
          "When F_air equals F_grav, the net force is zero and the object stops accelerating.",
          "It then falls at a constant speed called **terminal velocity**.",
        ]},
      ],
      ixl: [["Grade 8 I.5", "Balanced and unbalanced forces"]],
      ixlNote: "IXL has no friction-calculation skill. Use the friction and free-body Concept Builders at physicsclassroom.com.",
    },
    {
      title: "Labs and Measurement",
      cues: [
        { q: "In a cart-and-hanging-mass lab, what do you change and what do you measure?", notes: [
          "Part 1: change the **net force** (hanging mass), keep total mass constant, measure **acceleration**.",
          "Part 2: change the **mass** of the cart, keep the force constant, measure **acceleration**.",
          "Independent variable: force (or mass). Dependent variable: acceleration.",
        ]},
        { q: "What should the graphs from that lab look like?", notes: [
          "Acceleration vs. net force: a **straight line through the origin**. Its slope is 1 ÷ mass.",
          "Acceleration vs. mass: a **curve that falls** as mass rises (inverse relationship).",
          "This data is the evidence for NGSS HS-PS2-1.",
        ]},
      ],
      ixl: [["Physics A.1", "The process of scientific inquiry"], ["Physics A.2", "Identify independent and dependent variables"]],
    },
  ],
  mnemonics: [
    ["Net force, not force", "Always ask for the net force before using F = ma.", "Any second-law problem."],
    ["Constant velocity means balanced", "At rest or at constant velocity, F_net = 0.", "Finding an unknown force such as friction."],
    ["Swap the objects", "\"A pushes B\" pairs with \"B pushes A\".", "Naming a third-law pair."],
    ["Mass in kilograms, weight in newtons", "Multiply mass by 9.8 to get weight on Earth.", "Any problem that gives mass and needs a force."],
    ["One object, forces on it", "A free-body diagram shows only the forces acting on the chosen object.", "Starting every force problem."],
  ],
  summary: "Newton's laws explain why motion changes. The first law says an object keeps its velocity unless a net force acts, so constant velocity means balanced forces. The second law gives the size of the change: acceleration equals net force divided by mass, in the direction of the net force. The third law says forces always come in equal and opposite pairs acting on two different objects, which is why they never cancel. A free-body diagram is the tool for every problem: choose one object, draw each force on it, find the net force, then apply F_net = m·a. Weight is the force of gravity, m·g, and is different from mass.",
  visuals: [
    { file: "newt-balanced.png", caption: "Book at rest on a table: the normal force up and gravity down are the same size, so the net force is zero.", rule: "balanced forces → a = 0" },
    { file: "newt-unbalanced.png", caption: "Crate pushed to the right: the applied force is larger than friction, so there is a net force to the right.", rule: "F_net = F_app − F_frict = m·a" },
    { file: "newt-thirdlaw.png", caption: "Truck and car in a collision: each pushes on the other with a force of the same size in opposite directions.", rule: "F on car by truck = −F on truck by car" },
    { file: "newt-terminal.png", caption: "Skydiver speeding up (gravity larger than air resistance) and at terminal velocity (forces equal).", rule: "F_air = F_grav → constant velocity" },
  ],
  quiz: [
    { q: "A hockey puck slides across frictionless ice at constant velocity. What is the net force on the puck?", choices: ["A forward force that keeps it moving", "Zero", "Its weight", "A small force that slowly decreases"], answer: 1, misconception: "Motion requires a force.", why: "Constant velocity means zero acceleration, so the net force is zero. No force is needed to keep an object moving; force is needed to change its motion." },
    { q: "A heavy truck collides head-on with a small car. Compared with the force the truck exerts on the car, the force the car exerts on the truck is:", choices: ["Smaller", "Larger", "The same size", "Zero, because the car is lighter"], answer: 2, misconception: "The bigger or faster object exerts the bigger force.", why: "Newton's third law: the two forces are equal in size and opposite in direction. The car is damaged more because the same force gives its smaller mass a larger acceleration." },
    { q: "A book rests on a table. Earth pulls down on the book. What is the third-law reaction force?", choices: ["The table pushing up on the book", "The book pushing down on the table", "The book pulling up on Earth", "Friction between the book and the table"], answer: 2, misconception: "The normal force is the reaction to weight.", why: "Swap the objects: Earth pulls book ↔ book pulls Earth. The normal force also acts on the book, so it cannot be the reaction partner of the book's weight." },
    { q: "An elevator moves upward at constant speed. Compared with the weight of the elevator, the tension in the cable is:", choices: ["Greater", "Equal", "Less", "Zero"], answer: 1, misconception: "The force in the direction of motion must be larger.", why: "Constant velocity means the net force is zero, so the upward tension equals the downward weight. Tension is greater only while the elevator accelerates upward." },
    { q: "An astronaut travels from Earth to the Moon. What happens to the astronaut's mass and weight?", choices: ["Both decrease", "Mass decreases, weight stays the same", "Mass stays the same, weight decreases", "Both stay the same"], answer: 2, misconception: "Mass and weight are the same thing.", why: "Mass is the amount of matter and does not change. Weight is m·g, and g on the Moon is about one sixth of Earth's." },
    { q: "A net force of 10 N gives a cart an acceleration of 5 m/s². If the cart's mass is doubled and the net force stays 10 N, what is the acceleration?", choices: ["10 m/s²", "5 m/s²", "2.5 m/s²", "1.25 m/s²"], answer: 2, misconception: "Acceleration depends only on the force.", why: "a = F_net ÷ m. Doubling the mass with the same force halves the acceleration: 2.5 m/s²." },
    { q: "A ball is thrown straight up. After it leaves the hand and while it is still rising, what forces act on it? Ignore air resistance.", choices: ["Gravity down and the force of the throw up", "Only the force of the throw", "Only gravity, downward", "No forces until it starts to fall"], answer: 2, misconception: "The force of a throw stays with the object.", why: "A force needs contact with the hand (or a field such as gravity). Once the ball leaves the hand, only gravity acts. The ball keeps rising because of its inertia." },
    { q: "You push horizontally on a heavy crate with 100 N and it does not move. How large is the friction force on the crate?", choices: ["Greater than 100 N", "Exactly 100 N", "Less than 100 N", "Zero"], answer: 1, misconception: "Friction must be bigger than the push to stop motion.", why: "The crate is at rest, so the net force is zero. Static friction matches the push exactly: 100 N." },
    { q: "A skydiver has reached terminal velocity. Which statement is correct?", choices: ["Gravity is no longer acting", "Air resistance equals the skydiver's weight", "Air resistance is greater than the weight", "The skydiver is still speeding up slowly"], answer: 1, misconception: "Falling at speed means gravity is winning.", why: "At terminal velocity the speed is constant, so the net force is zero: upward air resistance equals downward weight." },
    { q: "You push a crate across a floor at constant velocity using 80 N. How large is the friction force?", choices: ["Less than 80 N", "80 N", "More than 80 N", "Zero"], answer: 1, misconception: "The push must exceed friction for the object to keep moving.", why: "Constant velocity means balanced forces. Friction is exactly 80 N. A push larger than friction would make the crate speed up." },
  ],
  practice: [
    ["Foundation", "What net force gives a 4 kg object an acceleration of 3 m/s²?", "F_net = 4 × 3 = 12 N"],
    ["Foundation", "Find the weight of a 60 kg person on Earth and on the Moon (g = 1.6 m/s²).", "Earth: 588 N. Moon: 96 N. Mass is 60 kg in both places."],
    ["Proficient", "A 20 kg crate is pushed with 100 N against 40 N of friction. Find the acceleration.", "F_net = 60 N. a = 60 ÷ 20 = 3 m/s²."],
    ["Proficient", "A 1200 kg car brakes from 20 m/s to rest in 4 s. Find the braking force.", "a = −5 m/s². F = 1200 × 5 = 6000 N, opposite the motion."],
    ["Challenge", "A 70 kg person stands on a scale in an elevator accelerating upward at 2 m/s². What does the scale read?", "F_norm = m(g + a) = 70 × 11.8 = 826 N (normal weight 686 N)."],
    ["Challenge", "A 10 kg box is pulled across a floor at constant velocity by a 30 N horizontal force. Find the coefficient of friction.", "F_frict = 30 N, F_norm = 98 N, μ = 30 ÷ 98 = 0.31."],
  ],
  resources: [
    ["The Physics Classroom: Newton's Laws", "https://www.physicsclassroom.com/class/newtlaws", "Lessons on all three laws, free-body diagrams, and net force, using the same force names as these notes."],
    ["PhET: Forces and Motion: Basics", "https://phet.colorado.edu/en/simulations/forces-and-motion-basics", "Tug-of-war, friction, and acceleration labs you can run in a browser."],
    ["Khan Academy: High school physics", "https://www.khanacademy.org/science/highschool-physics", "Videos and practice on forces and Newton's laws."],
    ["OpenStax Physics (high school)", "https://openstax.org/details/books/physics", "Free textbook; see the chapter on forces and Newton's laws of motion."],
  ],
  realWorld: [
    "Seat belts and headrests: your body keeps moving (inertia) when the car stops or is hit from behind.",
    "Rocket launches: the engine pushes exhaust gas down and the gas pushes the rocket up.",
    "Elevators: you feel heavier when it speeds up going up and lighter when it speeds up going down.",
    "Tires and shoe soles, which are designed around the friction needed to start, stop, and turn.",
  ],
  criteria: [
    ["Draw free-body diagrams", "Draws motion arrows or forces on the wrong object", "Draws most forces but mislabels or missizes them", "Draws every force on one object, labeled and sized correctly", "Draws diagrams for connected objects or ramps and explains each force"],
    ["Apply the second law", "Uses a single force instead of the net force", "Finds net force but makes unit or direction errors", "Finds net force and solves F_net = m·a with units and a sense check", "Combines F = ma with kinematics in a multi-step problem"],
    ["Use the first and third laws", "Says motion needs a force; says the bigger object pushes harder", "States the laws but misapplies them to cases", "Explains constant-velocity situations and identifies action-reaction pairs", "Uses lab data to argue that a ∝ F_net and a ∝ 1/m (HS-PS2-1)"],
  ],
};
