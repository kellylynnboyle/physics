// Unit 3: Newton's Laws.
module.exports = {
  num: 3,
  slug: "03-newtons-laws",
  title: "Newton's Laws",
  short: "Forces and Motion",
  subtitle: "Physics | Semester 1, Unit 3 | Forces, free-body diagrams, inertia, F = ma, action-reaction",
  pacing: "Weeks 8–11",
  ngss: ["HS-PS2-1", "SEP: Analyzing and Interpreting Data", "SEP: Planning and Carrying Out Investigations", "CCC: Cause and Effect"],
  essentialQuestion: "How do forces change the motion of an object?",
  targets: [
    "I can draw a free-body diagram and find the net force on an object.",
    "I can use Newton's first law to explain what happens when forces are balanced.",
    "I can use F_net = ma to solve problems and to analyze lab data.",
    "I can identify the action-reaction pair in any interaction.",
    "I can tell mass from weight and calculate weight and friction.",
  ],
  concepts: [
    "Force as a push or pull; the common forces (F_grav, F_norm, F_app, F_frict, F_tens, F_air)",
    "Free-body diagrams and net force",
    "Newton's first law: inertia and balanced forces",
    "Newton's second law: a = F_net / m",
    "Mass vs. weight (F_grav = mg) and friction (F_frict = μ F_norm)",
    "Newton's third law: equal and opposite forces on two different objects",
  ],
  sections: [
    {
      title: "1. Forces and Free-Body Diagrams",
      ixl: [["Grade 8 I.5", "Balanced and unbalanced forces"], ["Precalculus Y.7", "Add vectors"]],
      rows: [
        {
          cue: "What is a force, and what unit measures it?",
          notes: [
            "A **force** is a push or pull on an object from another object. It is a vector.",
            "Unit: the **newton (N)**. 1 N = 1 kg·m/s².",
          ],
        },
        {
          cue: "Which forces can appear on a free-body diagram?",
          notes: [
            "**F_grav** (weight): Earth pulls down. **F_norm**: a surface pushes perpendicular to itself.",
            "**F_app**: a person or object pushes or pulls. **F_frict**: a surface resists sliding, along the surface.",
            "**F_tens**: a rope pulls. **F_air**: air resists motion.",
            "Draw only forces acting **on** the object, each as an arrow from the object, sized to its strength.",
          ],
        },
        {
          cue: "How do you find the net force?",
          notes: [
            "**Net force** is the vector sum of all forces. Same direction: add. Opposite directions: subtract.",
            "Worked example: a box is pushed right with 50 N while friction pulls left with 20 N. F_net = 50 − 20 = **30 N right**.",
            "Vertical forces on a level floor cancel: F_norm = F_grav.",
          ],
        },
        {
          cue: "What is the difference between mass and weight?",
          notes: [
            "**Mass** is the amount of matter (kg). It is the same everywhere.",
            "**Weight** is the force of gravity: **F_grav = mg** (N). It changes with location.",
            "Worked example: a 60 kg student on Earth weighs 60 × 9.8 = **588 N**.",
          ],
        },
      ],
    },
    {
      title: "2. Newton's First Law: Inertia",
      ixl: [["Physics F.1", "Newton's laws of motion"], ["Physics F.2", "Newton's first law of motion"]],
      rows: [
        {
          cue: "What does Newton's first law say?",
          notes: [
            "An object at rest stays at rest, and an object in motion keeps moving at **constant velocity**, unless a **net force** acts on it.",
          ],
        },
        {
          cue: "Does an object need a force to keep it moving?",
          notes: [
            "**No.** Forces change motion. They are not needed to maintain it.",
            "Objects on Earth slow down because **friction and air resistance** act on them, not because they run out of force.",
          ],
        },
        {
          cue: "What is inertia, and what measures it?",
          notes: [
            "**Inertia** is an object's resistance to a change in its motion.",
            "**Mass** measures inertia. More mass means harder to start, stop, or turn.",
          ],
        },
        {
          cue: "What is true about the forces on an object moving at constant velocity?",
          notes: [
            "They are **balanced**: F_net = 0. This is **equilibrium**, the same as for an object at rest.",
            "Example: a car cruising at a steady 25 m/s. The forward force from the road equals friction plus air resistance.",
          ],
        },
      ],
    },
    {
      title: "3. Newton's Second Law: F = ma",
      ixl: [
        ["Physics F.3", "Newton's second law of motion"],
        ["Grade 8 I.2", "How does mass affect force and acceleration?"],
        ["Grade 8 I.3", "Calculate acceleration using Newton’s second law of motion"],
      ],
      rows: [
        {
          cue: "What does Newton's second law say?",
          notes: [
            "**a = F_net / m**, or F_net = ma. Acceleration points in the direction of the net force.",
            "Double the net force: double the acceleration. Double the mass: half the acceleration.",
          ],
        },
        {
          cue: "How do you solve a second-law problem?",
          notes: [
            "Steps: choose the object, draw the free-body diagram, find F_net, then use a = F_net / m.",
            "Worked example: a 10 kg box is pushed right with 50 N against 20 N of friction. F_net = 30 N. a = 30 ÷ 10 = **3 m/s² right**.",
            "Worked example: what net force gives a 1200 kg car an acceleration of 2.5 m/s²? F_net = 1200 × 2.5 = **3000 N**.",
          ],
        },
        {
          cue: "How do you calculate friction?",
          notes: [
            "**F_frict = μ F_norm**, where μ is the coefficient of friction (no units).",
            "Worked example: a 10 kg box on a level floor with μ = 0.20. F_norm = 10 × 9.8 = 98 N. F_frict = 0.20 × 98 = **19.6 N**.",
            "Static friction matches the push, up to a maximum. A box pushed with 30 N that does not move has 30 N of friction on it.",
          ],
        },
        {
          cue: "Why do heavy and light objects fall with the same acceleration?",
          notes: [
            "A heavier object has more weight but also more inertia: a = F_grav / m = mg / m = **g**. The mass cancels.",
          ],
        },
      ],
    },
    {
      title: "4. Newton's Third Law: Action and Reaction",
      ixl: [["Grade 8 I.4", "Predict forces using Newton’s third law of motion"], ["Grade 8 I.6", "Newton's laws of motion"]],
      rows: [
        {
          cue: "What does Newton's third law say?",
          notes: [
            "When object A pushes on object B, B pushes back on A with a force that is **equal in size and opposite in direction**.",
            "Forces always come in pairs. Name a pair by swapping the nouns: 'foot pushes ground back' and 'ground pushes foot forward'.",
          ],
        },
        {
          cue: "Why don't action and reaction forces cancel each other?",
          notes: [
            "They act on **two different objects**. Only forces on the same object can cancel.",
            "The weight of a book and the normal force on it are **not** a third-law pair. Both act on the book.",
            "The pair for the book's weight (Earth pulls book down) is **book pulls Earth up**.",
          ],
        },
        {
          cue: "In a truck and car collision, which vehicle feels the larger force?",
          notes: [
            "**Neither.** The forces are equal.",
            "The car is damaged more because it has less mass, so the same force gives it a larger acceleration (a = F / m).",
          ],
        },
      ],
    },
    {
      title: "5. Labs and Measurement",
      ixl: [
        ["Physics A.2", "Identify independent and dependent variables"],
        ["Physics A.3", "Identify the experimental question"],
        ["Grade 8 KK.6", "Abbreviate force, energy, and electricity units"],
      ],
      rows: [
        {
          cue: "How do you test Newton's second law in the lab?",
          notes: [
            "**Cart and hanging mass lab:** a falling mass pulls a cart along a track. Measure acceleration with a motion sensor or photogates.",
            "Part 1: change the net force, keep total mass the same. **Independent variable:** net force. **Dependent variable:** acceleration. The graph is a straight line through the origin with **slope = 1 / mass**.",
            "Part 2: change the mass, keep the force the same. Acceleration falls as mass rises (inverse relationship).",
            "This lab is the data analysis asked for in HS-PS2-1.",
          ],
        },
        {
          cue: "How do you measure the coefficient of friction?",
          notes: [
            "Pull a block with a spring scale at **constant velocity**. Then F_app = F_frict (balanced forces).",
            "**μ = F_frict / F_norm**, with F_norm = mg on a level surface.",
            "**Independent variable:** surface type or block mass. **Dependent variable:** friction force.",
          ],
        },
      ],
    },
  ],
  noIxl: "Free-body diagrams, friction calculations, mass vs. weight, and identifying action-reaction pairs in detail: use the Physics Classroom Newton's Laws Concept Builders.",
  mnemonics: [
    { trick: "First law: inertia. Second law: F = ma. Third law: action-reaction.", when: "Naming which law explains a situation." },
    { trick: "Net force causes acceleration, not motion", when: "Any question about an object moving at constant velocity." },
    { trick: "Draw the free-body diagram first", when: "Every force problem, before any equation." },
    { trick: "A on B, B on A", when: "Finding a third-law pair. Swap the two objects in the sentence." },
    { trick: "Weight = mg", when: "Changing a mass in kilograms into a force in newtons." },
  ],
  summary:
    "Forces are pushes and pulls between objects, and the net force decides what an object's motion does next. With zero net force, an object keeps doing what it was doing: staying at rest or moving at constant velocity. With a net force, it accelerates in the direction of that force, by an amount a = F_net / m. Forces always come in equal and opposite pairs acting on two different objects. A free-body diagram is the tool that turns a situation into a net force, and from there the kinematics of Unit 1 predicts the motion.",
  visuals: [
    { img: "fbd-balanced.png", caption: "A book at rest on a table. The two forces are equal and opposite, so the net force is zero.", rule: "F_net = 0, so a = 0" },
    { img: "fbd-unbalanced.png", caption: "A pushed box. The applied force is larger than friction, so the box accelerates to the right.", rule: "a = F_net / m" },
    { img: "third-law.png", caption: "Two skaters push off. Each feels the same size force in opposite directions, on different bodies.", rule: "F_A on B = −F_B on A" },
    { img: "terminal-velocity.png", caption: "A skydiver at terminal velocity. Air resistance has grown to equal weight, so speed stops changing.", rule: "F_air = F_grav, so a = 0" },
  ],
  quiz: [
    {
      q: "A hockey puck slides across frictionless ice at constant velocity. What is the net force on the puck?",
      choices: ["Zero", "A forward force that keeps it moving", "A force equal to its weight", "A force that slowly decreases"],
      answer: 0,
      misconception: "Believing motion requires a force",
      why: "Constant velocity means zero acceleration, which means zero net force. No force is needed to keep an object moving. A force is needed only to change its motion.",
    },
    {
      q: "A large truck collides head-on with a small car. Compared with the force the truck exerts on the car, the force the car exerts on the truck is:",
      choices: ["The same size", "Smaller", "Larger", "Zero, because the car is lighter"],
      answer: 0,
      misconception: "Thinking the bigger object exerts the bigger force",
      why: "Third-law forces are always equal in size. The car is damaged more because its smaller mass gives it a much larger acceleration from that same force.",
    },
    {
      q: "A book rests on a table. Earth pulls down on the book. What is the third-law reaction to that force?",
      choices: ["The book pulls up on Earth", "The table pushes up on the book", "The book pushes down on the table", "There is no reaction because the book is at rest"],
      answer: 0,
      misconception: "Calling the normal force the reaction to weight",
      why: "A third-law pair swaps the two objects: Earth pulls book, book pulls Earth. The table's push on the book is a different force that acts on the same object as the weight.",
    },
    {
      q: "An elevator moves upward at constant speed. Compared with the elevator's weight, the tension in the cable is:",
      choices: ["Equal to the weight", "Greater than the weight", "Less than the weight", "Zero"],
      answer: 0,
      misconception: "Thinking upward motion needs a net upward force",
      why: "Constant speed means zero acceleration, so the forces are balanced. Tension is greater than weight only while the elevator is speeding up on the way up.",
    },
    {
      q: "You push a heavy crate with 30 N and it does not move. The friction force on the crate is:",
      choices: ["30 N", "More than 30 N", "Less than 30 N", "Zero"],
      answer: 0,
      misconception: "Thinking friction must exceed the push for an object to stay still",
      why: "The crate is not accelerating, so the forces balance. Static friction matches the push exactly, here 30 N. If friction were larger, the crate would accelerate backward.",
    },
    {
      q: "An astronaut travels from Earth to the Moon. Which statement is correct?",
      choices: ["Mass stays the same; weight decreases", "Mass and weight both decrease", "Mass decreases; weight stays the same", "Mass and weight both stay the same"],
      answer: 0,
      misconception: "Treating mass and weight as the same thing",
      why: "Mass is the amount of matter and does not change. Weight is the pull of gravity (mg), and g is smaller on the Moon.",
    },
    {
      q: "The net force on a cart is doubled, and its mass is also doubled. Its acceleration:",
      choices: ["Stays the same", "Doubles", "Is four times larger", "Is cut in half"],
      answer: 0,
      misconception: "Tracking only one of the two variables in a = F/m",
      why: "a = F_net / m. Doubling both gives 2F / 2m = F / m, so the acceleration is unchanged.",
    },
    {
      q: "A constant net force acts on a cart on a frictionless track. The cart moves with:",
      choices: ["Constant acceleration", "Constant speed", "Decreasing acceleration", "Increasing acceleration"],
      answer: 0,
      misconception: "Thinking a constant force gives a constant speed",
      why: "A constant net force gives a constant acceleration (a = F_net / m), so the speed increases steadily. Constant speed would need zero net force.",
    },
  ],
  practice: [
    { q: "A 1500 kg car speeds up from rest to 20 m/s in 8 s. Find its acceleration and the net force on it.", a: "a = 20 ÷ 8 = 2.5 m/s². F_net = 1500 × 2.5 = 3750 N." },
    { q: "A 5 kg box is pushed to the right with 40 N while 15 N of friction acts on it. Find the net force and the acceleration.", a: "F_net = 40 − 15 = 25 N right. a = 25 ÷ 5 = 5 m/s² right." },
    { q: "Find the weight of a 70 kg person on Earth and on the Moon (g = 1.6 m/s²). What is the person's mass on the Moon?", a: "Earth: 70 × 9.8 = 686 N. Moon: 70 × 1.6 = 112 N. Mass is 70 kg in both places." },
    { q: "A 20 kg crate is pulled across a level floor at constant velocity by a 60 N horizontal force. Find the friction force and the coefficient of friction.", a: "Constant velocity means balanced forces, so friction = 60 N. F_norm = 20 × 9.8 = 196 N. μ = 60 ÷ 196 = 0.31." },
    { q: "Skater A (50 kg) pushes skater B (75 kg) with a force of 150 N. What force acts on A, and what is each skater's acceleration?", a: "150 N on A, in the opposite direction. a_A = 150 ÷ 50 = 3.0 m/s². a_B = 150 ÷ 75 = 2.0 m/s²." },
    { q: "In a cart lab, net forces of 1, 2, 3, and 4 N produce accelerations of 0.5, 1.0, 1.5, and 2.0 m/s². What is the mass of the cart?", a: "The slope of acceleration vs. force is 0.5 (m/s²)/N = 1/m, so m = 2 kg." },
  ],
  realWorld: [
    "Seat belts and headrests: your body keeps moving (or stays put) when the car changes speed.",
    "Rockets and jet engines: gas pushed backward pushes the vehicle forward.",
    "Walking and driving: your foot or tire pushes the ground backward, and the ground pushes you forward.",
    "Anti-lock brakes and tire tread: managing friction between tire and road.",
    "Skydiving: air resistance grows with speed until forces balance at terminal velocity.",
  ],
  resources: [
    { name: "The Physics Classroom: Newton's Laws tutorial", url: "https://www.physicsclassroom.com/class/newtlaws", what: "Readings on each law, free-body diagrams, and net force problems." },
    { name: "The Physics Classroom: Newton's Laws Concept Builders", url: "https://www.physicsclassroom.com/Concept-Builders/Newtons-Laws", what: "Interactive practice on balanced and unbalanced forces and free-body diagrams." },
    { name: "PhET: Forces and Motion: Basics", url: "https://phet.colorado.edu/en/simulations/forces-and-motion-basics", what: "Push crates with and without friction and watch net force, speed, and acceleration." },
    { name: "Khan Academy: Forces and Newton's laws of motion", url: "https://www.khanacademy.org/science/physics/forces-newtons-laws", what: "Videos on all three laws, normal force, and tension." },
    { name: "OpenStax Physics (high school)", url: "https://openstax.org/details/books/physics", what: "Free textbook. See the chapter on forces and Newton's laws of motion." },
  ],
  objectives: [
    { id: "N1", text: "Draw free-body diagrams and determine net force.", evidence: "Diagram shows only forces on the object, correctly labeled and sized; net force has magnitude and direction." },
    { id: "N2", text: "Apply Newton's first law to balanced-force situations.", evidence: "Explains constant-velocity motion with zero net force, without inventing a 'force of motion'." },
    { id: "N3", text: "Apply Newton's second law to problems and data (HS-PS2-1).", evidence: "Solves a = F_net/m problems; graphs lab data and interprets the slope as 1/mass." },
    { id: "N4", text: "Identify third-law force pairs.", evidence: "Names both forces and both objects; states that the forces are equal even when masses differ." },
    { id: "N5", text: "Distinguish mass and weight; calculate weight and friction.", evidence: "Uses F_grav = mg and F_frict = μF_norm with correct units." },
  ],
};
