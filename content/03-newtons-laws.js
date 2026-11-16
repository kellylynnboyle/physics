module.exports = {
  id: "03-newtons-laws",
  num: 3,
  title: "Newton's Laws",
  short: "Newton's Laws",
  subtitle: "Physics | Semester 1, Unit 3 | Forces, free-body diagrams, inertia, Fnet = ma, action-reaction",
  weeks: "Weeks 8-11",
  ngss: [
    ["HS-PS2-1", "Analyze data to support the claim that Newton's second law describes the relationship among net force, mass, and acceleration."],
    ["HS-PS2-4", "Introduced: weight as the gravitational force on an object (Fgrav = m·g)."],
    ["SEP: Analyzing and Interpreting Data", "Graph acceleration against net force and against mass from lab data."],
  ],
  essentialQuestion: "How do forces change the motion of an object?",
  targets: [
    "I can identify the forces on an object and draw a free-body diagram.",
    "I can use Newton's first law to explain what happens when forces are balanced.",
    "I can use Fnet = m·a to solve for acceleration, force, or mass.",
    "I can tell mass from weight and find the normal force and friction force.",
    "I can identify action-reaction pairs and explain why they do not cancel.",
  ],
  concepts: [
    ["Force and net force", "A force is a push or pull measured in newtons. The net force is the vector sum of all forces on one object."],
    ["Free-body diagram", "A sketch of one object with an arrow for each force acting on it, labeled and sized to scale."],
    ["First law (inertia)", "With zero net force, an object keeps its velocity: at rest stays at rest, moving stays moving in a straight line at constant speed."],
    ["Second law", "Acceleration = net force / mass. More net force, more acceleration; more mass, less acceleration."],
    ["Mass vs. weight", "Mass is the amount of matter (kg). Weight is the force of gravity on it (N): Fgrav = m·g."],
    ["Friction and normal force", "The surface pushes perpendicular to itself (normal force) and resists sliding (friction = μ·Fnorm)."],
    ["Third law", "Forces come in pairs: if A pushes B, B pushes A with equal strength in the opposite direction."],
  ],
  sections: [
    {
      title: "Forces and Free-Body Diagrams",
      rows: [
        ["What is a force, and what unit measures it?", [
          "A **force** is a push or pull on an object from another object. It is a vector. Unit: **newton (N)**; 1 N = 1 kg·m/s².",
          "Contact forces need touching (friction, normal, tension, applied). Field forces act at a distance (gravity).",
        ]],
        ["Which forces appear most often, and which way does each point?", [
          "**Fgrav** (weight): straight down. **Fnorm**: perpendicular to the surface, away from it.",
          "**Ffrict**: along the surface, opposing sliding. **Ftens**: along the rope, away from the object.",
          "**Fapp**: the direction of the push or pull. **Fair**: opposite the motion.",
        ]],
        ["How do you draw a free-body diagram?", [
          "Draw the object as a box or dot. Draw one arrow for each force **on that object**, starting at the center and pointing away.",
          "Label each arrow and make longer arrows for larger forces. Do not draw forces the object exerts on other things.",
        ]],
        ["What is the net force when 20 N pulls right and 8 N pulls left?", [
          "**Net force** is the vector sum. Opposite directions subtract: 20 − 8 = **12 N to the right**.",
          "Equal and opposite forces give Fnet = 0: the forces are **balanced**.",
        ]],
      ],
      ixl: [["Grade 8 I.5", "Balanced and unbalanced forces"], ["Grade 8 KK.6", "Abbreviate force, energy, and electricity units"]],
    },
    {
      title: "Newton's First Law: Inertia",
      rows: [
        ["What does Newton's first law say?", [
          "An object at rest stays at rest, and an object in motion stays in motion at **constant velocity**, unless a **net force** acts on it.",
        ]],
        ["What is inertia, and what does it depend on?", [
          "**Inertia** is an object's resistance to changes in its motion. It depends only on **mass**. More mass, more inertia.",
        ]],
        ["Does a moving object need a force to keep it moving?", [
          "No. Force is needed to **change** velocity, not to maintain it. A puck on frictionless ice would glide forever.",
          "Objects on Earth slow down because friction and air resistance act on them, not because motion \"runs out\".",
        ]],
        ["If an object moves at constant velocity, what must the net force be?", [
          "**Zero.** Constant velocity means zero acceleration, so the forces are balanced.",
          "Example: a box pushed at steady speed with 50 N has 50 N of friction acting backward.",
        ]],
      ],
      ixl: [["Physics F.2", "Newton's first law of motion"]],
    },
    {
      title: "Newton's Second Law: Fnet = m·a",
      rows: [
        ["How are net force, mass, and acceleration related?", [
          "**a = Fnet / m**, or Fnet = m·a. Acceleration points in the direction of the net force.",
          "Double the net force: acceleration doubles. Double the mass: acceleration halves.",
        ]],
        ["What is the acceleration of a 4 kg cart with a 12 N net force?", [
          "a = Fnet / m = 12 / 4 = **3 m/s²** in the direction of the net force.",
        ]],
        ["A 1200 kg car has a 4000 N forward force and 1000 N of friction. What is its acceleration?", [
          "Object: the car. Horizontal forces: 4000 N forward, 1000 N backward.",
          "Fnet = 4000 − 1000 = 3000 N forward. a = 3000 / 1200 = **2.5 m/s²** forward.",
          "Always find the **net** force first. Using 4000 N alone gives the wrong answer.",
        ]],
      ],
      ixl: [["Physics F.3", "Newton's second law of motion"], ["Grade 8 I.2", "How does mass affect force and acceleration?"], ["Grade 8 I.3", "Calculate acceleration using Newton’s second law of motion"]],
    },
    {
      title: "Mass, Weight, and the Normal Force",
      rows: [
        ["What is the difference between mass and weight?", [
          "**Mass** is the amount of matter, in kg. It is the same everywhere.",
          "**Weight** is the force of gravity on the object: **Fgrav = m·g**, in N. It changes if g changes.",
          "A 60 kg student weighs 60 × 9.8 = **588 N** on Earth. On the Moon the mass is still 60 kg but the weight is about one-sixth.",
        ]],
        ["Which object exerts the normal force, and is it always equal to the weight?", [
          "The **surface** exerts the normal force, perpendicular to itself.",
          "On a level surface with no other vertical forces and no vertical acceleration, Fnorm = Fgrav. It is **not** equal on an incline, when someone pushes down or lifts up, or in an accelerating elevator.",
        ]],
        ["What does a scale read for a 60 kg person in an elevator accelerating upward at 2.0 m/s²?", [
          "Object: the person. Forces: Fnorm up, Fgrav = 588 N down.",
          "Fnet = m·a: Fnorm − 588 = 60 × 2.0, so Fnorm = **708 N**. The scale reads more than the true weight.",
        ]],
      ],
      ixl: [["Grade 8 I (new, unnumbered)", "How does mass affect gravitational force?"]],
    },
    {
      title: "Friction",
      rows: [
        ["How do you calculate the friction force?", [
          "**Ffrict = μ·Fnorm**, where μ (mu) is the coefficient of friction for the two surfaces. μ has no unit.",
          "**Static friction** keeps a resting object from starting to slide; **kinetic friction** acts while it slides and is usually smaller.",
        ]],
        ["A 10 kg box is pulled across a level floor with 50 N. If μ = 0.30, what is its acceleration?", [
          "Fgrav = 10 × 9.8 = 98 N, so Fnorm = 98 N. Ffrict = 0.30 × 98 = **29.4 N**.",
          "Fnet = 50 − 29.4 = 20.6 N. a = 20.6 / 10 = **2.1 m/s²**.",
        ]],
      ],
      ixl: [],
      ixlNote: "No IXL Physics skill covers friction calculations. Use The Physics Classroom Concept Builders in Newton's Laws.",
    },
    {
      title: "Newton's Third Law: Action-Reaction",
      rows: [
        ["What does Newton's third law say?", [
          "When object A exerts a force on object B, B exerts a force on A that is **equal in size and opposite in direction**.",
          "Name the pair by swapping the objects: \"foot pushes ball\" pairs with \"ball pushes foot\".",
        ]],
        ["Why don't action-reaction forces cancel each other?", [
          "They act on **different objects**. Only forces on the same object can cancel.",
        ]],
        ["In a collision between a truck and a small car, which exerts the larger force?", [
          "**Neither.** The forces are equal. The car is damaged more because its smaller mass gives it a larger acceleration (a = F / m).",
        ]],
        ["Are the weight and the normal force on a book an action-reaction pair?", [
          "No. Both act on the **same object** (the book), and they are different kinds of force.",
          "The partner of \"Earth pulls book down\" is \"book pulls Earth up\". The partner of \"table pushes book up\" is \"book pushes table down\".",
        ]],
      ],
      ixl: [["Physics F.1", "Newton's laws of motion"], ["Grade 8 I.4", "Predict forces using Newton’s third law of motion"], ["Grade 8 I.6", "Newton's laws of motion"]],
    },
    {
      title: "Labs and Measurement",
      rows: [
        ["In a cart-and-hanging-mass lab, how do you test Newton's second law?", [
          "A hanging mass pulls a cart along a track; a motion sensor or photogates measure the acceleration.",
          "Part 1: change the net force, keep total mass fixed. **Independent:** net force. **Dependent:** acceleration.",
          "Part 2: change the mass, keep the force fixed. **Independent:** mass. **Dependent:** acceleration.",
        ]],
        ["What should the graphs look like?", [
          "Acceleration vs. net force: a **straight line through the origin**; its slope is 1 / mass.",
          "Acceleration vs. mass: a **curve that falls** (inverse relationship). Doubling mass halves acceleration.",
          "This is the data analysis NGSS HS-PS2-1 asks for.",
        ]],
      ],
      ixl: [["Physics A.2", "Identify independent and dependent variables"], ["Physics A.3", "Identify the experimental question"]],
    },
  ],
  tricks: [
    ["First law = law of inertia", "Use it whenever the question says \"at rest\" or \"constant velocity\": the net force is zero."],
    ["Net force causes acceleration, not velocity", "Ask \"is the velocity changing?\" before deciding whether a net force exists."],
    ["Swap the nouns", "To find a third-law partner, reverse the two objects in the sentence: A on B becomes B on A."],
    ["Weight = m·g", "Convert kg to N by multiplying by 9.8 before drawing a free-body diagram."],
    ["Find Fnet before using a = Fnet / m", "Add forces along the direction of motion first; never plug a single force in unless it is the only one."],
  ],
  summary: "Forces are pushes and pulls between objects, and what matters for motion is the net force on one object. If the net force is zero, the velocity does not change (first law). If the net force is not zero, the object accelerates in the direction of the net force with a = Fnet / m (second law). Every force is one half of a pair acting on two different objects, equal in size and opposite in direction (third law). A clear free-body diagram is the starting point for every problem: choose the object, draw every force on it, find the net force, then apply Fnet = m·a.",
  visuals: [
    ["fbd_balanced", "A box sliding at constant velocity: the arrows in each direction are equal, so the net force is zero.", "Balanced forces: Fnet = 0, a = 0"],
    ["fbd_unbalanced", "The applied force is larger than friction, so there is a net force to the right and the box accelerates right.", "a = Fnet / m"],
    ["third_law", "The truck pushes the car and the car pushes the truck with equal forces in opposite directions, on different objects.", "F(A on B) = −F(B on A)"],
    ["a_vs_f", "Lab data: acceleration rises in a straight line with net force. A larger mass gives a shallower line.", "slope = 1 / m"],
  ],
  noIxl: "Free-body diagrams, friction calculations, normal force, and elevator problems (use physicsclassroom.com Concept Builders: Newton's Laws).",
  resources: [
    ["The Physics Classroom: Newton's Laws tutorial", "https://www.physicsclassroom.com/class/newtlaws", "All three laws, free-body diagrams, and net-force problems."],
    ["The Physics Classroom: Concept Builders", "https://www.physicsclassroom.com/Concept-Builders", "Use the Newton's Laws group for free-body diagrams and net force."],
    ["PhET: Forces and Motion: Basics", "https://phet.colorado.edu/en/simulations/forces-and-motion-basics", "Tug-of-war net force, friction, and acceleration with live force arrows."],
    ["OpenStax Physics (high school), Ch. 4", "https://openstax.org/details/books/physics", "Free textbook: Forces and Newton's Laws of Motion."],
    ["Khan Academy: High School Physics", "https://www.khanacademy.org/science/highschool-physics", "Video walkthroughs of force and Newton's-law problems."],
  ],
  practice: [
    ["Three forces act on a crate: 40 N right, 15 N left, and 10 N left. Find the net force and say whether the crate accelerates.", "Fnet = 40 − 25 = 15 N right. Yes, it accelerates to the right."],
    ["What net force gives a 0.50 kg ball an acceleration of 12 m/s²?", "Fnet = m·a = 0.50 × 12 = 6.0 N."],
    ["A 75 kg astronaut travels to a planet where g = 3.7 m/s². Find the astronaut's mass and weight there.", "Mass 75 kg; weight = 75 × 3.7 = 278 N."],
    ["A 20 kg sled is pulled with 60 N across snow with μ = 0.10. Find the friction force and the acceleration.", "Fnorm = 196 N; Ffrict = 19.6 N; Fnet = 40.4 N; a = 2.0 m/s²."],
    ["A 1000 kg elevator accelerates upward at 1.5 m/s². Find the tension in its cable.", "Ftens − m·g = m·a, so Ftens = 1000 × (9.8 + 1.5) = 11 300 N."],
    ["A swimmer pushes backward on the pool wall with 300 N. Describe the reaction force and explain why the swimmer moves but the wall does not.", "The wall pushes the swimmer forward with 300 N. The swimmer's small mass gives a noticeable acceleration; the wall is fixed to the building and Earth, whose mass is enormous."],
  ],
  applications: [
    "Seat belts and headrests: inertia in a sudden stop or a rear-end collision.",
    "Rocket launches: exhaust pushed down, rocket pushed up (third law).",
    "Tire grip, anti-lock brakes, and why wet roads lengthen stopping distance.",
    "Elevators and bathroom scales: apparent weight.",
    "Sports: why a heavier lineman is harder to move, and how a sprinter's blocks push back.",
  ],
  objectives: [
    ["N1", "Identify forces and draw a free-body diagram.", "Diagram shows every force on the chosen object, correctly labeled and directed, with no extra forces."],
    ["N2", "Apply Newton's first law to balanced-force situations.", "States that constant velocity or rest means Fnet = 0 and finds an unknown balancing force."],
    ["N3", "Apply Fnet = m·a quantitatively.", "Finds the net force first, then solves for a, F, or m with units."],
    ["N4", "Distinguish mass from weight; find normal and friction forces.", "Converts between kg and N and uses Ffrict = μ·Fnorm correctly."],
    ["N5", "Identify action-reaction pairs.", "Names both objects in each pair and explains why the pair does not cancel."],
    ["N6", "Analyze lab data to support the second law (HS-PS2-1).", "Graphs a vs. Fnet and a vs. m and states the relationship each graph shows."],
  ],
  quiz: [
    {
      q: "A hockey puck slides across frictionless ice at constant velocity. What is the net force on it?",
      choices: ["A forward force that keeps it moving", "Zero", "A force equal to its weight", "A small backward force"],
      answer: 1,
      why: "Constant velocity means zero acceleration, so the net force is zero. No force is needed to keep an object moving.",
      trap: "Believing motion requires a force.",
    },
    {
      q: "A large truck collides head-on with a small car. During the collision, how do the forces compare?",
      choices: ["The truck exerts a larger force on the car", "The car exerts a larger force on the truck", "The forces are equal in size", "Only the truck exerts a force"],
      answer: 2,
      why: "Third law: the two forces are equal and opposite. The car has the larger acceleration because its mass is smaller.",
      trap: "Thinking the bigger or faster object pushes harder.",
    },
    {
      q: "A book rests on a table. Earth pulls down on the book. What is the reaction force to this pull?",
      choices: ["The table pushing up on the book", "The book pushing down on the table", "The book pulling up on Earth", "There is no reaction force"],
      answer: 2,
      why: "Swap the objects: Earth pulls book, so book pulls Earth. The table's push is a different interaction that happens to be the same size.",
      trap: "Treating weight and normal force as an action-reaction pair.",
    },
    {
      q: "An elevator moves upward at constant speed. How does the cable tension compare with the elevator's weight?",
      choices: ["Tension is greater", "Tension is equal", "Tension is smaller", "Tension is zero"],
      answer: 1,
      why: "Constant speed means zero acceleration and zero net force, so the upward tension equals the downward weight.",
      trap: "Thinking upward motion needs a net upward force.",
    },
    {
      q: "A ball is thrown straight up. While it is rising after leaving the hand, which forces act on it? (Ignore air resistance.)",
      choices: ["Gravity only", "Gravity and a shrinking upward force from the throw", "An upward force only", "No forces until it starts to fall"],
      answer: 0,
      why: "The hand's force stops at release. The ball keeps rising because of its inertia while gravity slows it.",
      trap: "Imagining the force of the throw stays with the ball.",
    },
    {
      q: "An astronaut travels from Earth to the Moon. What happens to the astronaut's mass and weight?",
      choices: ["Both decrease", "Mass stays the same; weight decreases", "Mass decreases; weight stays the same", "Both stay the same"],
      answer: 1,
      why: "Mass is the amount of matter and does not change. Weight = m·g, and g on the Moon is about one-sixth of Earth's.",
      trap: "Using mass and weight as the same thing.",
    },
    {
      q: "You push a box across a level floor at constant speed with a horizontal force of 50 N. How large is the friction force?",
      choices: ["Less than 50 N", "Exactly 50 N", "More than 50 N", "Zero"],
      answer: 1,
      why: "Constant speed means the net force is zero, so friction must exactly balance the 50 N push.",
      trap: "Thinking the push must beat friction for the box to keep moving.",
    },
    {
      q: "The net force on a cart is doubled and its mass is also doubled. What happens to its acceleration?",
      choices: ["It is four times as large", "It doubles", "It stays the same", "It is half as large"],
      answer: 2,
      why: "a = Fnet / m. Doubling both gives 2F / 2m = F / m, the same acceleration.",
      trap: "Tracking only one of the two changes.",
    },
    {
      q: "A 2.0 kg object has forces of 14 N to the right and 4 N to the left acting on it. What is its acceleration?",
      choices: ["2 m/s² right", "5 m/s² right", "7 m/s² right", "9 m/s² right"],
      answer: 1,
      why: "Fnet = 14 − 4 = 10 N right. a = 10 / 2.0 = 5 m/s² right. Using 14 N alone gives the 7 m/s² wrong answer.",
      trap: "Using one force instead of the net force.",
    },
    {
      q: "A horse pulls a cart forward, and the cart pulls back on the horse with an equal force. Why can the cart still accelerate?",
      choices: ["The horse's force is slightly larger", "The two forces act on different objects, so they do not cancel", "The reaction force is delayed", "It cannot accelerate"],
      answer: 1,
      why: "Only forces on the same object can cancel. The cart accelerates if the forces on the cart (horse's pull minus friction) are unbalanced.",
      trap: "Cancelling an action-reaction pair.",
    },
  ],
};
