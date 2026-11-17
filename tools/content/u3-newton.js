// Unit 3: Newton's Laws.
module.exports = {
  id: "newton", num: 3, dir: "03-newtons-laws", title: "Newton's Laws", weeks: "Weeks 8–11",
  subtitle: "Physics | Unit 3 | Forces, free-body diagrams, Newton's three laws, friction",
  ngss: ["HS-PS2-1: Analyze data to support the claim that Newton's second law describes the relationship among net force, mass, and acceleration", "SEP: Analyzing and Interpreting Data", "CCC: Cause and Effect"],
  essentialQuestion: "How do the forces on an object determine what its motion does next?",
  targets: [
    "I can draw a free-body diagram and find the net force on an object.",
    "I can use Newton's first law to explain why an object keeps its velocity when forces are balanced.",
    "I can apply F_net = ma to find acceleration, force, or mass, and support it with lab data.",
    "I can identify Newton's third-law force pairs and explain why they do not cancel.",
    "I can tell mass from weight and calculate weight, normal force, and friction.",
  ],
  concepts: [
    ["Force", "A push or pull on an object from another object. A vector, measured in newtons (N)."],
    ["Net force", "The vector sum of all forces on one object. Net force, not any single force, sets the acceleration."],
    ["Free-body diagram", "A sketch of one object showing every force on it as an arrow from the object."],
    ["Newton's first law (inertia)", "With zero net force, an object at rest stays at rest and a moving object keeps a constant velocity."],
    ["Newton's second law", "a = F_net ÷ m. More net force gives more acceleration; more mass gives less."],
    ["Newton's third law", "Forces come in pairs: equal in size, opposite in direction, acting on two different objects."],
    ["Mass vs weight", "Mass is the amount of matter (kg) and never changes. Weight is the force of gravity, F_grav = mg (N)."],
    ["Friction", "A force that opposes sliding: F_frict = μ F_norm."],
  ],
  sections: [
    {
      title: "1. Forces and Free-Body Diagrams",
      cues: [
        { q: "What is a force, and what are the common forces in this unit?", notes: [
          "A **force** is a push or pull that one object exerts on another. It is a vector, measured in **newtons (N)**.",
          "**F_grav** (weight, down), **F_norm** (surface pushes perpendicular to itself), **F_frict** (opposes sliding), **F_tens** (rope pulls), **F_app** (a push or pull by a person), **F_air** (air resistance).",
        ]},
        { q: "What is net force?", notes: [
          "**Net force** is the vector sum of all forces on **one** object.",
          "Forces in the same direction add; forces in opposite directions subtract.",
          "**Balanced** forces: F_net = 0. **Unbalanced** forces: F_net ≠ 0, and the object accelerates.",
        ]},
        { q: "How do you draw a free-body diagram?", notes: [
          "1. Choose **one object** and draw it as a box or dot.",
          "2. Draw an arrow for **every force on that object**, starting at the object and pointing the way the force acts.",
          "3. Label each arrow and make longer arrows for bigger forces. Never draw forces the object exerts on other things.",
        ]},
        { q: "What is the difference between mass and weight? What does a 60 kg person weigh on Earth?", notes: [
          "**Mass** is the amount of matter, in kg. It is the same everywhere.",
          "**Weight** is the force of gravity on the object: **F_grav = mg**, in newtons. It changes with location.",
          "Weight = 60 kg × 9.8 m/s² = **588 N**.",
        ]},
      ],
      ixl: [["Grade 8", "I.5", "Balanced and unbalanced forces"], ["Grade 8", "KK.6", "Abbreviate force, energy, and electricity units"]],
      ixlShort: "IXL: Grade 8 I.5, KK.6",
    },
    {
      title: "2. Newton's First Law: Inertia",
      cues: [
        { q: "What does Newton's first law say?", notes: [
          "An object at rest stays at rest, and an object in motion keeps moving at **constant velocity**, unless a **net force** acts on it.",
        ]},
        { q: "Does a moving object need a force to keep it moving?", notes: [
          "**No.** A force is needed to **change** motion, not to maintain it.",
          "Objects on Earth slow down because **friction and air resistance** act on them, not because motion “runs out.”",
        ]},
        { q: "What is inertia, and what does it depend on?", notes: [
          "**Inertia** is an object's resistance to changes in its motion.",
          "It depends only on **mass**. More mass means more inertia. It does not depend on speed.",
        ]},
        { q: "If an object moves at constant velocity, what must be true about the forces on it?", notes: [
          "The forces are **balanced**: F_net = 0.",
          "Example: a crate pushed at steady speed with 50 N has exactly 50 N of friction acting backward.",
        ]},
      ],
      ixl: [["Physics", "F.2", "Newton's first law of motion"]],
      ixlShort: "IXL: Physics F.2",
    },
    {
      title: "3. Newton's Second Law: F_net = ma",
      cues: [
        { q: "What does Newton's second law say?", notes: [
          "**a = F_net ÷ m**, usually written **F_net = ma**.",
          "Acceleration is **directly proportional** to net force and **inversely proportional** to mass.",
          "The acceleration points in the **same direction as the net force**. 1 N = 1 kg·m/s².",
        ]},
        { q: "A 5 kg box is pushed with 30 N while friction pulls back with 10 N. What is its acceleration?", notes: [
          "Object: the box. Horizontal forces: 30 N forward, 10 N backward.",
          "F_net = 30 N − 10 N = **20 N forward**.",
          "a = F_net ÷ m = 20 N ÷ 5 kg = **4 m/s² forward**.",
          "Sense check: use the net force, never just the push.",
        ]},
        { q: "A 60 kg person stands on a scale in an elevator accelerating upward at 2 m/s². What does the scale read?", notes: [
          "Forces on the person: F_norm up (the scale reading) and F_grav = 588 N down.",
          "F_net = ma → F_norm − mg = ma → F_norm = m(g + a) = 60 × (9.8 + 2) = **708 N**.",
          "Sense check: the reading is more than the 588 N weight, which matches feeling heavier.",
        ]},
        { q: "If you double the net force on an object and also double its mass, what happens to the acceleration?", notes: [
          "a = F_net ÷ m, so (2F) ÷ (2m) = F ÷ m. The acceleration is **unchanged**.",
        ]},
      ],
      ixl: [["Physics", "F.3", "Newton's second law of motion"], ["Grade 8", "I.2", "How does mass affect force and acceleration?"], ["Grade 8", "I.3", "Calculate acceleration using Newton’s second law of motion"]],
      ixlShort: "IXL: Physics F.3, Grade 8 I.2–3",
    },
    {
      title: "4. Newton's Third Law: Force Pairs",
      cues: [
        { q: "What does Newton's third law say?", notes: [
          "When object A pushes on object B, B pushes back on A with a force that is **equal in size and opposite in direction**.",
          "The two forces are the **same type**, happen at the **same time**, and act on **different objects**.",
        ]},
        { q: "Why don't third-law force pairs cancel out?", notes: [
          "Forces only cancel when they act on the **same object**.",
          "A third-law pair acts on two different objects, so each object feels only one of the two forces.",
        ]},
        { q: "A truck hits a small car. Which vehicle feels the bigger force?", notes: [
          "**Neither.** The forces are equal in size.",
          "The car is damaged more because it has less mass, so the same force gives it a much **bigger acceleration**.",
        ]},
        { q: "A book rests on a table. What is the third-law partner of the book's weight?", notes: [
          "Weight is **Earth pulling down on the book**, so its partner is **the book pulling up on Earth**.",
          "The normal force is **not** the partner. It acts on the same object (the book) and is a different type of force.",
        ]},
      ],
      ixl: [["Physics", "F.1", "Newton's laws of motion"], ["Grade 8", "I.4", "Predict forces using Newton’s third law of motion"], ["Grade 8", "I.6", "Newton's laws of motion"]],
      ixlShort: "IXL: Physics F.1, Grade 8 I.4, I.6",
    },
    {
      title: "5. Friction, Normal Force, and Inclines",
      cues: [
        { q: "How do you calculate friction?", notes: [
          "**F_frict = μ F_norm**, where μ (mu) is the coefficient of friction for the two surfaces.",
          "**Static** friction keeps an object from starting to slide; **kinetic** friction acts while it slides. Static is usually larger.",
          "Friction depends on the surfaces and the normal force, not on contact area or speed.",
        ]},
        { q: "A 10 kg crate slides across a level floor with μ = 0.30. What is the friction force?", notes: [
          "On a level floor with no other vertical forces, F_norm = mg = 10 × 9.8 = 98 N.",
          "F_frict = 0.30 × 98 N = **29.4 N**, opposite to the motion.",
        ]},
        { q: "How is the weight of an object on an incline split into components?", notes: [
          "**Parallel to the slope: mg sin θ** (pulls the object down the slope).",
          "**Perpendicular to the slope: mg cos θ** (balanced by the normal force, so F_norm = mg cos θ).",
          "On a frictionless incline, a = g sin θ. At 30°: a = 9.8 × 0.5 = **4.9 m/s²**.",
        ]},
      ],
      ixl: [],
      noIxl: "No IXL Physics skill covers friction or inclines. Use the Newton's Laws Concept Builders at physicsclassroom.com.",
      ixlShort: "physicsclassroom.com Concept Builders",
    },
    {
      title: "6. Labs and Measurement",
      cues: [
        { q: "In the cart-and-hanging-mass lab, what are the variables when you test force against acceleration?", notes: [
          "**Independent:** net force (the hanging weight). **Dependent:** acceleration of the cart.",
          "**Controlled:** total mass of the system. Move masses from the cart to the hanger so the total stays the same.",
        ]},
        { q: "What should the graphs look like if Newton's second law is correct?", notes: [
          "**Acceleration vs net force** (mass constant): a straight line through the origin with slope = **1 ÷ mass**.",
          "**Acceleration vs mass** (force constant): a curve that falls as mass rises (inverse relationship).",
          "These graphs are the data evidence HS-PS2-1 asks for.",
        ]},
      ],
      ixl: [["Physics", "A.2", "Identify independent and dependent variables"], ["Physics", "A.1", "The process of scientific inquiry"]],
      ixlShort: "IXL: Physics A.1–2",
    },
  ],
  mnemonics: [
    ["An object in motion stays in motion; an object at rest stays at rest", "Use for any question about what happens when forces are balanced."],
    ["F_net = ma", "Use whenever acceleration, mass, and force appear together. Always find the net force first."],
    ["“A on B, B on A”", "Use to find a third-law partner: swap the two objects in the sentence."],
    ["Constant velocity means F_net = 0", "Use the moment a problem says “steady speed” or “constant velocity.”"],
    ["Weight = mg; mass stays the same everywhere", "Use to convert kg to N and to answer Moon or elevator questions."],
  ],
  summary: "Forces are interactions between objects, and the net force on an object decides how its motion changes. With zero net force, velocity stays constant (first law). With a nonzero net force, the object accelerates in the direction of that force at a = F_net ÷ m (second law). Every force is one half of an equal and opposite pair acting on two different objects (third law). A free-body diagram is the tool that makes all three laws usable: choose one object, draw every force on it, find the net force, then apply F_net = ma.",
  visuals: [
    ["newton-1", "Equal arrows in opposite directions cancel, so the box keeps whatever velocity it has.", "F_net = 0 → a = 0"],
    ["newton-2", "A longer arrow one way leaves a net force, and the box accelerates in that direction.", "a = F_net ÷ m"],
    ["newton-3", "Each skater feels the same 150 N, but on different objects and in opposite directions.", "F(A on B) = −F(B on A)"],
    ["newton-4", "On an incline, weight splits into a part along the slope and a part into the slope.", "mg sin θ along; mg cos θ = F_norm"],
  ],
  resources: [
    ["The Physics Classroom: Newton's Laws tutorial", "https://www.physicsclassroom.com/class/newtlaws", "Step-by-step lessons on each law, free-body diagrams, and net force."],
    ["PhET: Forces and Motion: Basics", "https://phet.colorado.edu/en/simulations/forces-and-motion-basics", "Push crates with and without friction and watch net force and acceleration."],
    ["Khan Academy: High school physics", "https://www.khanacademy.org/science/highschool-physics", "Videos and practice on forces and Newton's laws."],
    ["OpenStax Physics (free textbook), chapter 4", "https://openstax.org/details/books/physics", "Reference reading and extra problems on forces."],
    ["The Physics Classroom: Concept Builders (Newton's Laws)", "https://www.physicsclassroom.com/Concept-Builders", "Interactive practice on free-body diagrams, friction, and force pairs."],
  ],
  practice: [
    ["What does a 75 kg astronaut weigh on Earth and on the Moon (g = 1.6 m/s²)? What is the astronaut's mass on the Moon?", "Earth: 75 × 9.8 = 735 N. Moon: 75 × 1.6 = 120 N. Mass is still 75 kg."],
    ["A net force of 3600 N acts on a 1200 kg car starting from rest. Find the acceleration and the speed after 5.0 s.", "a = 3600 ÷ 1200 = 3.0 m/s²; v = 3.0 × 5.0 = 15 m/s."],
    ["A 20 kg sled is pulled horizontally with 80 N against 30 N of friction. Find the acceleration.", "F_net = 50 N; a = 50 ÷ 20 = 2.5 m/s²."],
    ["A 70 kg person stands on a scale in an elevator accelerating downward at 1.5 m/s². What does the scale read?", "mg − F_norm = ma, so F_norm = 70 × (9.8 − 1.5) = 581 N."],
    ["A 4.0 kg block slides down a frictionless 30° incline. Find its acceleration and the normal force.", "a = g sin 30° = 4.9 m/s²; F_norm = mg cos 30° = 4.0 × 9.8 × 0.866 = 33.9 N."],
    ["On frictionless ice, skater A (50 kg) pushes skater B (75 kg) with 150 N. Find each skater's acceleration.", "B: 150 ÷ 75 = 2.0 m/s² forward. A: 150 ÷ 50 = 3.0 m/s² in the opposite direction."],
  ],
  realWorld: [
    "Seat belts and headrests exist because of inertia: your body keeps its velocity when the car's velocity changes.",
    "Rocket launches: the engine pushes exhaust gas down and the gas pushes the rocket up (third law).",
    "Anti-lock brakes keep tires in static friction, which is larger than kinetic friction, for shorter stops.",
    "Earth science link: plates stay locked by friction along a fault until the stress exceeds it, then slip as an earthquake (second semester).",
  ],
  labs: [
    "Cart and hanging mass (modified Atwood machine): graph acceleration vs net force and acceleration vs mass.",
    "Friction lab: pull a block with a spring scale across different surfaces and find μ.",
    "Paired spring scales or force sensors: show the third-law forces are equal at every instant.",
  ],
  quiz: [
    { q: "A large truck collides head-on with a small car. During the collision, how do the forces compare?", c: ["The truck exerts a larger force on the car", "The car exerts a larger force on the truck", "The forces are equal in size", "Only the truck exerts a force"], a: 2,
      why: "Third-law forces are always equal and opposite. The car's acceleration is larger because its mass is smaller, not because the force on it is larger.", trap: "Believing the bigger or faster object pushes harder." },
    { q: "A hockey puck slides across frictionless ice at constant velocity. What is the net force on it?", c: ["A forward force that keeps it moving", "Zero", "A backward force", "A force equal to its weight, forward"], a: 1,
      why: "Constant velocity means zero acceleration, so the net force is zero. No force is needed to keep an object moving.", trap: "Believing motion requires a force." },
    { q: "A ball is thrown straight up and is on its way up. Ignoring air resistance, which forces act on it?", c: ["Gravity down and the throwing force up", "Gravity down only", "The throwing force up only", "No forces until it starts to fall"], a: 1,
      why: "The hand stops pushing when the ball leaves it. Gravity is the only force, which is why the ball slows down as it rises.", trap: "Imagining a force that travels with the object." },
    { q: "An elevator moves upward at constant speed. How does the cable tension compare with the elevator's weight?", c: ["Tension is greater than the weight", "Tension equals the weight", "Tension is less than the weight", "It depends on the speed"], a: 1,
      why: "Constant velocity means the net force is zero, so the upward tension exactly balances the weight.", trap: "Thinking upward motion needs a net upward force." },
    { q: "A book rests on a table. What is the third-law partner of the gravitational force on the book?", c: ["The normal force from the table on the book", "The book's push down on the table", "The book's gravitational pull on Earth", "The table's push on the floor"], a: 2,
      why: "Earth pulls on the book, so the partner is the book pulling on Earth. The normal force acts on the same object, so it cannot be the third-law partner.", trap: "Pairing two balanced forces on the same object." },
    { q: "An astronaut travels from Earth to the Moon. What happens to the astronaut's mass and weight?", c: ["Both decrease", "Mass stays the same; weight decreases", "Mass decreases; weight stays the same", "Both stay the same"], a: 1,
      why: "Mass is the amount of matter and does not change. Weight is mg, and g is smaller on the Moon.", trap: "Using mass and weight as the same thing." },
    { q: "You push a crate across a rough floor at constant velocity with a horizontal force of 50 N. How large is the friction force?", c: ["Less than 50 N", "Exactly 50 N", "More than 50 N", "Zero"], a: 1,
      why: "Constant velocity means balanced forces, so friction must be exactly 50 N backward.", trap: "Thinking the push must beat friction for the crate to keep moving." },
    { q: "The net force on a cart is doubled and its mass is also doubled. What happens to its acceleration?", c: ["It doubles", "It is four times larger", "It stays the same", "It is cut in half"], a: 2,
      why: "a = F_net ÷ m. Doubling both gives (2F) ÷ (2m) = F ÷ m.", trap: "Tracking only one of the two changes." },
    { q: "A skydiver has reached terminal velocity. What is the net force on the skydiver?", c: ["Equal to their weight, downward", "Zero", "Upward, from air resistance", "It keeps increasing"], a: 1,
      why: "At terminal velocity the speed is constant, so air resistance equals weight and the net force is zero.", trap: "Assuming a falling object must have a net downward force." },
    { q: "A car moving east brakes and slows down. What is the direction of the net force on the car?", c: ["East", "West", "Zero, because it is still moving east", "Downward"], a: 1,
      why: "Slowing down means the acceleration is opposite to the velocity. The net force points the same way as the acceleration: west.", trap: "Assuming net force points in the direction of motion." },
  ],
};
