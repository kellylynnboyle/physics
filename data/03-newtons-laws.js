(globalThis.UNITS = globalThis.UNITS || []).push({
  id: "newtons-laws",
  num: 3,
  title: "Newton's Laws",
  subtitle: "Forces and why motion changes",
  pacing: "Weeks 8–11",
  essentialQuestion: "What makes an object's motion change, and how can we predict the change?",
  ngss: ["HS-PS2-1", "SEP: Analyzing and Interpreting Data", "SEP: Planning and Carrying Out Investigations", "CCC: Cause and Effect"],
  ngssNote: "HS-PS2-1: Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration.",
  concepts: [
    ["Force and net force", "A force is a push or pull on an object from another object. Net force is the vector sum of all forces on one object."],
    ["Free-body diagrams", "A sketch of one object showing every force on it as a labeled arrow."],
    ["First law (inertia)", "With zero net force, an object keeps its velocity: at rest stays at rest, moving keeps moving in a straight line at constant speed."],
    ["Second law", "Acceleration = net force ÷ mass (a = F_net ÷ m)."],
    ["Mass, weight, normal force, friction", "Weight is the force of gravity (F_grav = mg). The normal force is the support force from a surface. Friction opposes sliding."],
    ["Third law", "Forces come in pairs: equal in size, opposite in direction, acting on two different objects."]
  ],
  objectives: [
    ["N1", "Draw a correct free-body diagram for an object and find the net force."],
    ["N2", "Use Newton's first law to explain the motion of objects with balanced forces, including objects moving at constant velocity."],
    ["N3", "Apply a = F_net ÷ m to calculate acceleration, net force, or mass, including problems with friction."],
    ["N4", "Distinguish mass from weight and calculate weight, normal force, and friction force."],
    ["N5", "Identify Newton's third-law force pairs and explain why they do not cancel."],
    ["N6", "Analyze lab data to support the claim that acceleration is proportional to net force and inversely proportional to mass (HS-PS2-1)."]
  ],
  notes: [
    {
      section: "1. Forces and Free-Body Diagrams",
      rows: [
        ["What is a force, and what is net force?", [
          "A **force** is a push or pull that one object exerts on another. Unit: newton (N). Force is a vector.",
          "**Net force** (F_net) is the vector sum of all forces on one object. Forces in the same direction add; opposite directions subtract.",
          "**Worked example:** 10 N right and 4 N left on a cart. F_net = 10 − 4 = **6 N right**."
        ]],
        ["Which forces go on a free-body diagram?", [
          "Only forces acting **on the chosen object**, each drawn as an arrow starting at the object and labeled.",
          "Common forces: **F_grav** (down, from Earth), **F_norm** (perpendicular to a surface, from the surface), **F_frict** (along the surface, opposing sliding), **F_tens** (along a rope), **F_app** (a push or pull), **F_air** (opposing motion).",
          "Do **not** draw velocity, acceleration, or \"the force of motion\". They are not forces."
        ]]
      ],
      ixl: [["Physics F.1", "Newton's laws of motion"]],
      ixlNote: "For free-body diagram practice, use The Physics Classroom Concept Builders (Newton's Laws: Free-Body Diagrams)."
    },
    {
      section: "2. Newton's First Law",
      rows: [
        ["What does Newton's first law say?", [
          "An object at rest stays at rest, and an object in motion keeps moving at **constant velocity**, unless a **net force** acts on it.",
          "**Inertia** is an object's resistance to changes in its motion. More mass means more inertia."
        ]],
        ["Is a force needed to keep an object moving?", [
          "**No.** A force is needed to **change** motion, not to maintain it.",
          "Objects on Earth slow down because friction and air resistance act on them, not because they \"run out of force\"."
        ]],
        ["What is the net force on an object moving at constant velocity?", [
          "**Zero.** Constant velocity means no acceleration, so the forces are balanced.",
          "**Worked example:** You push a crate at constant velocity with 20 N. The friction force must be **20 N** in the opposite direction."
        ]]
      ],
      ixl: [["Physics F.2", "Newton's first law of motion"]]
    },
    {
      section: "3. Newton's Second Law",
      rows: [
        ["How are net force, mass, and acceleration related?", [
          "**a = F_net ÷ m**, or F_net = ma. 1 N = 1 kg·m/s².",
          "More net force gives more acceleration; more mass gives less acceleration.",
          "The acceleration is always in the **direction of the net force**."
        ]],
        ["What is the acceleration of a 1200 kg car with a net force of 3600 N?", [
          "**Object:** the car. **Equation:** a = F_net ÷ m = 3600 ÷ 1200 = **3.0 m/s²** in the direction of the net force."
        ]],
        ["A 5.0 kg box is pushed with 30 N against 10 N of friction. What is its acceleration?", [
          "**Forces (horizontal):** 30 N forward, 10 N backward. F_net = 30 − 10 = 20 N.",
          "a = 20 ÷ 5.0 = **4.0 m/s²** forward.",
          "Always find the **net** force first. Using only the 30 N push gives the wrong answer."
        ]]
      ],
      ixl: [["Physics F.3", "Newton's second law of motion"]]
    },
    {
      section: "4. Weight, Normal Force, and Friction",
      rows: [
        ["What is the difference between mass and weight?", [
          "**Mass** (kg) is the amount of matter and measures inertia. It is the same everywhere.",
          "**Weight** (N) is the force of gravity on the object: **F_grav = mg**. It changes with location.",
          "**Worked example:** A 70 kg person weighs 70 × 9.8 = **686 N** on Earth, and 70 × 1.6 = **112 N** on the Moon. The mass is 70 kg in both places."
        ]],
        ["Which object exerts the normal force, and is it always equal to the weight?", [
          "The **surface** exerts the normal force, perpendicular to the surface.",
          "It equals the weight only on a level surface with no other vertical forces and no vertical acceleration.",
          "**Worked example:** A 60 kg rider in an elevator accelerating upward at 2.0 m/s². F_norm − mg = ma → F_norm = 60(9.8 + 2.0) = **708 N**, more than her 588 N weight."
        ]],
        ["How do I calculate the friction force?", [
          "**F_frict = μ × F_norm**, where μ (mu) is the coefficient of friction. Friction acts along the surface, opposing sliding.",
          "**Static** friction keeps an object from starting to slide; **kinetic** friction acts while it slides.",
          "**Worked example:** A 10 kg crate slides on a level floor with μ = 0.30. F_norm = 10 × 9.8 = 98 N. F_frict = 0.30 × 98 = **29.4 N**."
        ]]
      ],
      ixl: [["Physics F.3", "Newton's second law of motion"]],
      ixlNote: "IXL Physics has no separate friction or normal-force skill. Use The Physics Classroom Concept Builders (Newton's Laws: Mass and Weight, Friction)."
    },
    {
      section: "5. Newton's Third Law",
      rows: [
        ["What does Newton's third law say?", [
          "When object A pushes on object B, object B pushes back on object A with a force that is **equal in size and opposite in direction**.",
          "The two forces are the same type, happen at the same time, and act on **different objects**."
        ]],
        ["If the forces are equal and opposite, why don't they cancel?", [
          "Forces cancel only when they act on the **same** object. Third-law pairs act on two different objects, so each object feels only one of them."
        ]],
        ["When a truck hits a small car, which one feels the bigger force?", [
          "**Neither.** The forces are equal.",
          "The car is damaged more because it has less mass, so the same force gives it a much larger acceleration (a = F ÷ m)."
        ]],
        ["Are the weight and the normal force on a book a third-law pair?", [
          "**No.** Both act on the book, and they are different types of force.",
          "The pair for the book's weight (Earth pulls book down) is **the book pulling Earth up**. The pair for the normal force (table pushes book up) is the book pushing the table down."
        ]]
      ],
      ixl: [["Physics F.1", "Newton's laws of motion"]]
    }
  ],
  tricks: [
    ["Net force first", "Before using a = F_net ÷ m, add up all the forces on the object. Never plug in a single force unless it is the only one."],
    ["Constant velocity means balanced forces", "If the speed and direction are not changing, the net force is zero, even if the object is moving fast."],
    ["A on B, B on A", "State a force as \"A pushes B\". Its third-law partner is \"B pushes A\". If both forces act on the same object, they are not a pair."],
    ["Mass in kilograms, weight in newtons", "Multiply mass by 9.8 to get weight on Earth."]
  ],
  summary: "Forces are interactions between objects, and only the net force matters for motion. With zero net force an object keeps its velocity (first law). With a net force it accelerates in the direction of that force, with a = F_net ÷ m (second law). Forces always come in equal and opposite pairs acting on different objects (third law). Solving any force problem starts with a free-body diagram of one object, then the net force, then the second law.",
  quiz: [
    {
      q: "A hockey puck slides across frictionless ice at constant velocity. What is the net force on the puck?",
      choices: ["Zero", "A small forward force that keeps it moving", "A force equal to its weight", "A force that slowly decreases"],
      why: "Constant velocity means zero acceleration, so the net force is zero. No force is needed to keep an object moving.",
      trap: "Believing motion requires a force in the direction of motion."
    },
    {
      q: "A large truck collides head-on with a small car. During the collision, the force of the truck on the car is:",
      choices: ["Equal to the force of the car on the truck", "Greater than the force of the car on the truck", "Less than the force of the car on the truck", "Greater only if the truck is moving faster"],
      why: "Newton's third law: the forces are always equal and opposite. The car has less mass, so it has the larger acceleration and more damage.",
      trap: "Thinking the bigger or faster object exerts the bigger force."
    },
    {
      q: "A book rests on a table. Earth pulls down on the book. What is the third-law partner of this force?",
      choices: ["The book pulls up on Earth", "The table pushes up on the book", "The book pushes down on the table", "The floor pushes up on the table"],
      why: "Swap the two objects: \"Earth pulls book\" pairs with \"book pulls Earth\". The normal force also acts on the book, so it cannot be the partner.",
      trap: "Calling weight and normal force an action–reaction pair."
    },
    {
      q: "You push a crate across a rough floor with a 20 N horizontal force and it moves at a constant 5 m/s. What is the friction force on the crate?",
      choices: ["20 N", "Less than 20 N", "More than 20 N", "Zero"],
      why: "Constant velocity means the net force is zero, so friction exactly balances the 20 N push.",
      trap: "Thinking the push must be larger than friction for the crate to keep moving."
    },
    {
      q: "An astronaut travels from Earth to the Moon. What happens to her mass and weight?",
      choices: ["Mass stays the same; weight decreases", "Both decrease", "Mass decreases; weight stays the same", "Both stay the same"],
      why: "Mass is the amount of matter and does not change. Weight = mg, and g is smaller on the Moon.",
      trap: "Using mass and weight as the same thing."
    },
    {
      q: "The net force on a cart is doubled and its mass is also doubled. Its acceleration:",
      choices: ["Stays the same", "Doubles", "Is four times as large", "Is half as large"],
      why: "a = F_net ÷ m. Doubling both gives (2F) ÷ (2m) = F ÷ m, the same acceleration.",
      trap: "Changing only one variable in a proportional-reasoning problem."
    },
    {
      q: "You stand on a scale in an elevator that is moving upward at constant speed. The scale reads:",
      choices: ["Your normal weight", "More than your normal weight", "Less than your normal weight", "Zero"],
      why: "Constant speed means zero acceleration, so the normal force equals your weight. The reading changes only while the elevator accelerates.",
      trap: "Linking the scale reading to the direction of motion instead of the acceleration."
    },
    {
      q: "A ball is thrown straight up. After it leaves the hand and is rising (ignoring air resistance), which forces act on it?",
      choices: ["Only gravity, downward", "Gravity down and the force of the throw up", "Only the force of the throw, upward", "No forces until it starts to fall"],
      why: "The hand's force ends when contact ends. The ball rises because of its inertia while gravity slows it down.",
      trap: "Believing a thrown object carries the force of the throw with it."
    }
  ],
  problems: [
    ["Warm-up", "What net force accelerates a 1500 kg car at 2.0 m/s²?", "F_net = 1500 × 2.0 = 3000 N."],
    ["Warm-up", "Find the weight of a 70 kg person on Earth and on the Moon (g = 1.6 m/s²).", "Earth: 70 × 9.8 = 686 N. Moon: 70 × 1.6 = 112 N."],
    ["Core", "A 4.0 kg box is pulled with 20 N across a floor that exerts 8.0 N of friction. Find the acceleration.", "F_net = 20 − 8.0 = 12 N. a = 12 ÷ 4.0 = 3.0 m/s²."],
    ["Core", "A 20 kg crate is pushed with 80 N across a level floor with μ = 0.25. Find the friction force and the acceleration.", "F_norm = 20 × 9.8 = 196 N. F_frict = 0.25 × 196 = 49 N. F_net = 80 − 49 = 31 N. a = 31 ÷ 20 = 1.55 m/s²."],
    ["Core", "A 50 kg student stands on a scale in an elevator accelerating downward at 1.5 m/s². What does the scale read?", "mg − F_norm = ma → F_norm = 50(9.8 − 1.5) = 415 N."],
    ["Challenge", "A 3.0 kg block and a 5.0 kg block touch each other on a frictionless surface. A 16 N force pushes the 3.0 kg block toward the 5.0 kg block. Find the acceleration and the force between the blocks.", "Together: a = 16 ÷ 8.0 = 2.0 m/s². The contact force is the only horizontal force on the 5.0 kg block: 5.0 × 2.0 = 10 N."]
  ],
  labs: [
    ["Newton's second law lab (HS-PS2-1)", "A cart on a track is pulled by a hanging mass. Part 1: change the net force, keep total mass constant. Part 2: change the mass, keep the force constant. Dependent variable: acceleration. Graph a vs. F_net and a vs. 1/m."],
    ["Friction lab", "Pull a block at constant velocity with a spring scale while adding mass. Graph friction force vs. normal force; the slope is μ."],
    ["Third-law force sensors", "Two students pull on linked spring scales or force sensors and compare the readings, including when one student is much stronger."]
  ],
  resources: [
    ["The Physics Classroom: Newton's Laws", "https://www.physicsclassroom.com/class/newtlaws", "Tutorial with free-body diagram practice and Concept Builders."],
    ["PhET: Forces and Motion: Basics", "https://phet.colorado.edu/en/simulations/forces-and-motion-basics", "Explore net force, friction, and acceleration."],
    ["OpenStax Physics (high school), Ch. 4", "https://openstax.org/details/books/physics", "Free textbook chapter on forces and Newton's laws."],
    ["Khan Academy: Forces and Newton's laws of motion", "https://www.khanacademy.org/science/physics/forces-newtons-laws", "Videos and practice sets."],
    ["IXL Physics F.1–F.3", "https://www.ixl.com/science/physics", "Skill practice; aim for SmartScore 80+."]
  ],
  applications: [
    "Seat belts and headrests: the body keeps moving (or stays at rest) when the car's motion changes.",
    "Rocket launches: exhaust pushed down, rocket pushed up.",
    "Tire tread and road conditions: friction sets the maximum braking force.",
    "Feeling heavier or lighter in elevators and on roller coasters."
  ]
});
