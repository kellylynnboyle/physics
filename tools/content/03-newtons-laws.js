module.exports = {
  id: '03-newtons-laws',
  num: 3,
  title: "Newton's Laws",
  subtitle: 'Physics (Grade 11) | Semester 1, Unit 3 | Forces, free-body diagrams, inertia, F = ma, action-reaction',
  weeks: 'Weeks 8–11',
  ngss: ['HS-PS2-1: Analyze data to support the claim that Newton\'s second law describes the relationship among net force, mass, and acceleration', 'HS-PS2-4 (preview: gravitational force)', 'SEP: Analyzing and Interpreting Data', 'CCC: Cause and Effect'],
  essentialQuestion: 'How do the forces on an object determine how its motion changes?',
  targets: [
    'I can name the forces on an object and draw its free-body diagram.',
    'I can use Newton\'s first law to explain motion when forces are balanced.',
    'I can use F_net = ma to find acceleration, net force, or mass.',
    'I can identify action-reaction force pairs and explain why they do not cancel.',
    'I can calculate weight, normal force, and friction.',
    'I can analyze lab data to support Newton\'s second law.',
  ],
  concepts: [
    ['Force', 'A push or pull on one object by another. A vector, measured in newtons (N).'],
    ['Net force', 'The vector sum of all forces on one object. It is what causes acceleration.'],
    ['Free-body diagram', 'A sketch of one object with an arrow for every force acting on it.'],
    ['Inertia (first law)', 'Objects keep their velocity unless a net force acts. More mass means more inertia.'],
    ['Second law', 'a = F_net/m. Acceleration is proportional to net force and inversely proportional to mass.'],
    ['Third law', 'Forces come in pairs: equal in size, opposite in direction, acting on two different objects.'],
    ['Mass vs weight', 'Mass is the amount of matter (kg). Weight is the force of gravity, F_grav = mg (N).'],
    ['Normal force and friction', 'The support force perpendicular to a surface; the force along the surface that resists sliding, F_frict = μF_norm.'],
  ],
  sections: [
    {
      title: '1. Forces and Free-Body Diagrams',
      ixlRange: 'Grade 8 I.5',
      rows: [
        { cue: 'What is a force, and what is net force?', notes: [
          'A **force** is a push or pull that one object exerts on another. Unit: **newton**, 1 N = 1 kg·m/s².',
          '**Net force** (F_net) is the vector sum of all forces on one object. Forces in opposite directions subtract.' ] },
        { cue: 'What are the common forces and their symbols?', notes: [
          '**F_grav** (gravity/weight, down), **F_norm** (normal, perpendicular to the surface), **F_frict** (friction, opposes sliding), **F_tens** (tension, along a rope), **F_app** (applied push or pull), **F_air** (air resistance, opposes motion).' ] },
        { cue: 'How do you draw a free-body diagram?', notes: [
          '(1) Draw the object as a box or dot. (2) Draw one arrow for each force **on that object**, starting at the object and pointing the way the force acts. (3) Label each arrow. (4) Make longer arrows for larger forces.',
          'Do not draw forces the object exerts on other things, and do not draw velocity or "force of motion."' ] },
        { cue: 'What is the difference between mass and weight?', notes: [
          '**Mass** (kg) is the amount of matter and is the same everywhere. **Weight** (N) is the force of gravity: **F_grav = mg**.',
          'Worked example: a 60 kg person on Earth weighs (60)(9.8) = **588 N**. On the Moon the mass is still 60 kg, but the weight is smaller.' ] },
      ],
      ixl: [['Grade 8 I.5', 'Balanced and unbalanced forces']],
      ixlNote: 'For free-body diagram practice, use the matching Concept Builders at physicsclassroom.com.',
    },
    {
      title: "2. Newton's First Law (Inertia)",
      ixlRange: 'Physics F.1–2',
      rows: [
        { cue: "What does Newton's first law say?", notes: [
          'An object at rest stays at rest, and an object in motion stays in motion at **constant velocity**, unless acted on by a **net (unbalanced) force**.' ] },
        { cue: 'What is inertia, and what measures it?', notes: [
          '**Inertia** is an object\'s resistance to a change in its motion. **Mass** measures inertia: more mass, harder to speed up, slow down, or turn.' ] },
        { cue: 'Is a force needed to keep an object moving?', notes: [
          '**No.** A net force is needed only to **change** velocity. A puck sliding on frictionless ice keeps going with no force at all.',
          'Things on Earth usually slow down because friction is a net force, not because motion "runs out."' ] },
        { cue: 'What can you say about the forces on an object moving at constant velocity?', notes: [
          'They are **balanced**: F_net = 0. This is true for an object at rest and for one moving in a straight line at steady speed.' ] },
      ],
      ixl: [['Physics F.1', "Newton's laws of motion"], ['Physics F.2', "Newton's first law of motion"]],
    },
    {
      title: "3. Newton's Second Law (F_net = ma)",
      ixlRange: 'Physics F.3, Grade 8 I.2–3',
      rows: [
        { cue: "What does Newton's second law say?", notes: [
          '**a = F_net/m**, or F_net = ma. Acceleration is in the direction of the net force.',
          'Double the net force, double the acceleration. Double the mass, half the acceleration.' ] },
        { cue: 'A 10 kg box is pushed right with 50 N against 20 N of friction. What is its acceleration?', notes: [
          'Object: the box. Horizontal forces: F_app = 50 N right, F_frict = 20 N left.',
          'F_net = 50 − 20 = **30 N right**.',
          'a = F_net/m = 30/10 = **3.0 m/s² right**.',
          'Sense check: vertical forces (gravity and normal) balance, so they do not affect the answer.' ] },
        { cue: 'What does a scale read for a 60 kg person in an elevator accelerating upward at 2.0 m/s²?', notes: [
          'Object: the person. Forces: F_norm up (the scale reading), F_grav = 588 N down.',
          'F_net = ma: F_norm − 588 = (60)(2.0) = 120, so F_norm = **708 N**.',
          'Sense check: the reading is more than 588 N, and you do feel heavier when an elevator starts upward.' ] },
        { cue: 'What are the steps for any second-law problem?', notes: [
          '(1) Choose the object. (2) Draw the free-body diagram. (3) Find F_net in the direction of acceleration. (4) Use F_net = ma. (5) Check units and direction.' ] },
      ],
      ixl: [['Physics F.3', "Newton's second law of motion"], ['Grade 8 I.2', 'How does mass affect force and acceleration?'], ['Grade 8 I.3', "Calculate acceleration using Newton's second law of motion"]],
    },
    {
      title: "4. Newton's Third Law (Force Pairs)",
      ixlRange: 'Grade 8 I.4, I.6',
      rows: [
        { cue: "What does Newton's third law say?", notes: [
          'When object A pushes on object B, object B pushes back on A with a force that is **equal in size and opposite in direction**.' ] },
        { cue: 'How do you identify an action-reaction pair?', notes: [
          'Swap the two objects in the sentence: "foot pushes ball forward" pairs with "ball pushes foot backward."',
          'The two forces are the **same type** and act on **two different objects**.' ] },
        { cue: 'Why do action-reaction forces not cancel?', notes: [
          'Forces cancel only when they act on the **same object**. Each force of a pair acts on a different object, so each can cause its own acceleration.' ] },
        { cue: 'A truck hits a bug. Which feels the larger force?', notes: [
          '**Neither. The forces are equal.** The bug has a much smaller mass, so the same force gives it a far larger acceleration (a = F/m).' ] },
      ],
      ixl: [['Grade 8 I.4', "Predict forces using Newton's third law of motion"], ['Grade 8 I.6', "Newton's laws of motion"]],
    },
    {
      title: '5. Normal Force, Friction, and Air Resistance',
      ixlRange: 'Concept Builders',
      rows: [
        { cue: 'Which object exerts the normal force, and in what direction?', notes: [
          'The **surface** exerts it, **perpendicular** to the surface. On a level floor with no other vertical forces, F_norm = F_grav.',
          'It is not always equal to weight (elevators, ramps, someone pressing down).' ] },
        { cue: 'How do you calculate friction?', notes: [
          '**F_frict = μ·F_norm**, where μ is the coefficient of friction (no units). **Static** friction holds an object still; **kinetic** friction acts when it slides.',
          'Static friction matches the push, up to a maximum. If you push with 30 N and the crate stays put, static friction is 30 N.' ] },
        { cue: 'A 20 kg crate (μ = 0.30) is pulled across a level floor with 100 N. What is its acceleration?', notes: [
          'F_grav = (20)(9.8) = 196 N, so F_norm = 196 N.',
          'F_frict = (0.30)(196) = **58.8 N**.',
          'F_net = 100 − 58.8 = 41.2 N. a = 41.2/20 = **2.06 m/s²**.' ] },
        { cue: 'What is terminal velocity?', notes: [
          'As a falling object speeds up, F_air grows. When **F_air = F_grav**, the net force is zero and the object falls at a constant speed called **terminal velocity**.' ] },
      ],
      ixl: [],
      ixlNote: 'No IXL Physics skill covers friction or normal force. Use the matching Concept Builders at physicsclassroom.com.',
    },
    {
      title: '6. Labs and Measurement',
      ixlRange: 'Physics A.2–3',
      rows: [
        { cue: 'How does the cart-and-hanging-mass lab test the second law?', notes: [
          'A hanging mass pulls a cart along a track. Measure the cart\'s **acceleration** with a motion sensor or photogates.',
          'Part 1: change the **net force** (move masses from the cart to the hanger so total mass stays constant). Dependent variable: acceleration.',
          'Part 2: keep the force constant and change the **total mass**. Dependent variable: acceleration.' ] },
        { cue: 'What should the graphs look like?', notes: [
          'Acceleration vs net force: a **straight line through the origin** with slope = 1/mass.',
          'Acceleration vs mass: a **curve that falls** (inverse relationship). Acceleration vs 1/mass is a straight line.' ] },
        { cue: 'How do you measure a coefficient of friction?', notes: [
          'Pull a block at **constant velocity** with a spring scale. Then F_app = F_frict, and μ = F_frict/F_norm, where F_norm = mg on a level surface.' ] },
      ],
      ixl: [['Physics A.2', 'Identify independent and dependent variables'], ['Physics A.3', 'Identify the experimental question']],
    },
  ],
  tricks: [
    ['Inertia is laziness', 'Objects keep doing what they are already doing. Use for first-law explanations.'],
    ['A on B, B on A', 'Swap the two objects to name the third-law partner force.'],
    ['Same object cancels, different objects cannot', 'Use to tell balanced forces (same object) from action-reaction pairs (two objects).'],
    ['Net force first', 'Always find F_net before using F = ma. The m multiplies only the net force.'],
    ['Mass is matter, weight is a force', 'Mass in kg never changes with location. Weight in N is mg.'],
  ],
  summary: 'Forces are interactions between two objects, and the net force on an object decides how its velocity changes. With zero net force, velocity stays constant (first law); this covers both rest and steady motion. With a net force, the object accelerates in the direction of that force by a = F_net/m (second law). Forces always come in equal and opposite pairs acting on two different objects (third law), which is why they never cancel each other. Free-body diagrams are the tool that connects all three: choose one object, draw every force on it, find the net force, and apply F_net = ma.',
  visuals: [
    ['fbd_balanced.png', 'Balanced forces: a box moving at constant velocity. Arrows in each direction are the same length.', 'F_net = 0, so a = 0'],
    ['fbd_unbalanced.png', 'Unbalanced forces: the applied force is larger than friction, so the box accelerates to the right.', 'a = F_net/m'],
    ['third_law.png', 'Action-reaction pair: each force acts on a different object, with equal size and opposite direction.', 'F(A on B) = −F(B on A)'],
    ['terminal.png', 'A falling object: air resistance grows with speed until it equals gravity at terminal velocity.', 'F_air = F_grav, so F_net = 0'],
  ],
  resources: [
    ["The Physics Classroom: Newton's Laws tutorial", 'https://www.physicsclassroom.com/class/newtlaws', 'Readings on all three laws, free-body diagrams, friction, and free fall with air resistance.'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', 'Self-checking free-body diagram and net force practice.'],
    ['PhET: Forces and Motion: Basics', 'https://phet.colorado.edu/en/simulations/forces-and-motion-basics', 'Tug-of-war, friction, and acceleration with live force arrows.'],
    ['OpenStax Physics, Ch. 4', 'https://openstax.org/details/books/physics', "Free textbook: Forces and Newton's Laws of Motion."],
    ['Khan Academy Physics', 'https://www.khanacademy.org/science/physics', 'Videos on each law and on normal force and friction.'],
    ['IXL Physics section F; Grade 8 section I', 'https://www.ixl.com/science/physics', 'Skill practice to SmartScore 80+.'],
  ],
  practice: [
    ['A 75 kg astronaut stands on Earth, then on the Moon (g = 1.6 m/s²). Find the mass and weight in each place.', 'Mass 75 kg in both. Weight 735 N on Earth, 120 N on the Moon.'],
    ['Forces of 12 N right and 5 N left act on a 3.5 kg cart. Find the net force and acceleration.', 'F_net = 7 N right; a = 7/3.5 = 2.0 m/s² right.'],
    ['A 1500 kg car goes from rest to 27 m/s in 9.0 s. Find the net force on it.', 'a = 27/9.0 = 3.0 m/s²; F_net = (1500)(3.0) = 4500 N.'],
    ['A 5.0 kg book is pushed across a table at constant velocity with a 15 N horizontal force. Find the friction force and the coefficient of friction.', 'Constant velocity means F_frict = 15 N; F_norm = 49 N; μ = 15/49 = 0.31.'],
    ['A 50 kg student stands on a scale in an elevator accelerating downward at 1.5 m/s². What does the scale read?', '490 − F_norm = (50)(1.5), so F_norm = 415 N.'],
    ['A 0.30 kg racket hits a 0.060 kg tennis ball. Compare the forces on each and their accelerations during contact.', 'The forces are equal in size and opposite in direction. The ball has one-fifth the mass, so its acceleration is five times as large.'],
    ['A 40 kg sled is pulled horizontally with 120 N across snow with μ = 0.10. Find its acceleration.', 'F_norm = 392 N; F_frict = 39.2 N; F_net = 80.8 N; a = 2.02 m/s².'],
  ],
  realWorld: [
    'Seat belts and headrests: your body keeps moving (or stays at rest) when the car\'s velocity changes suddenly.',
    'Rocket launches: the engine pushes exhaust gas down and the gas pushes the rocket up.',
    'Anti-lock brakes and tire tread: stopping depends on friction between tire and road.',
    'Skydiving and parachutes: a larger area increases air resistance and lowers terminal velocity.',
    'Elevator design and bathroom scales: the scale reads the normal force, not your weight.',
  ],
  objectives: [
    ['N1', 'Identify the forces on an object and draw a correctly labeled free-body diagram.', 'Free-body diagram check; quiz Q6'],
    ['N2', 'Use the first law to explain the motion of objects with balanced forces, including constant-velocity motion.', 'Quiz Q1, Q4, Q10; written explanation'],
    ['N3', 'Apply F_net = ma to solve for acceleration, net force, or mass in one-dimensional problems.', 'Practice problems 2, 3, 5, 7; IXL Physics F.3; quiz Q5, Q9'],
    ['N4', 'Identify action-reaction pairs and explain why equal forces can give unequal accelerations.', 'Practice problem 6; quiz Q2, Q3'],
    ['N5', 'Calculate weight, normal force, and friction, and distinguish mass from weight.', 'Practice problems 1 and 4; friction lab; quiz Q7, Q8'],
    ['N6', 'Analyze cart-and-hanging-mass data to support the claim that a = F_net/m (HS-PS2-1).', 'Lab report with acceleration vs force graph'],
  ],
  quiz: [
    { q: 'A hockey puck slides across frictionless ice at constant velocity. What is the net force on the puck?', choices: ['Zero', 'A constant force in the direction of motion', 'A force that slowly decreases', 'A force equal to the puck\'s weight'], a: 0,
      why: 'Constant velocity means zero acceleration, and zero acceleration means zero net force. No force is needed to keep an object moving.',
      miss: 'The belief that motion requires a force in the direction of motion.' },
    { q: 'A large truck collides head-on with a small car. During the collision, how do the forces compare?', choices: ['The force on the car equals the force on the truck', 'The truck exerts a larger force on the car', 'The car exerts a larger force on the truck', 'The truck exerts a force, but the car does not'], a: 0,
      why: 'Third-law forces are always equal in size. The car is damaged more because the same force gives its smaller mass a much larger acceleration.',
      miss: 'Assuming the bigger, faster, or "more active" object pushes harder.' },
    { q: 'A book rests on a table. Earth pulls down on the book. What is the third-law partner of that force?', choices: ['The book pulls up on Earth', 'The table pushes up on the book', 'The book pushes down on the table', 'Friction between book and table'], a: 0,
      why: 'Swap the objects: "Earth pulls book" pairs with "book pulls Earth." The table\'s normal force acts on the same object (the book) and is a different kind of force, so it is not the partner.',
      miss: 'Picking the normal force because it is equal and opposite to the weight here.' },
    { q: 'An elevator moves upward at constant speed. How does the tension in the cable compare with the elevator\'s weight?', choices: ['The tension equals the weight', 'The tension is greater than the weight', 'The tension is less than the weight', 'The tension is zero'], a: 0,
      why: 'Constant speed in a straight line means zero acceleration, so the forces are balanced. Tension is greater than weight only while the elevator is speeding up upward.',
      miss: 'Thinking upward motion needs a net upward force.' },
    { q: 'The net force on a cart is doubled and its mass is also doubled. What happens to its acceleration?', choices: ['It stays the same', 'It doubles', 'It is four times as large', 'It is cut in half'], a: 0,
      why: 'a = F_net/m. Doubling both gives 2F/2m = F/m, the same acceleration.',
      miss: 'Considering only one of the two changes.' },
    { q: 'A ball has been thrown straight up and is still rising. Ignoring air resistance, which forces act on it?', choices: ['Only gravity, downward', 'Gravity down and the force of the throw up', 'Only the force of the throw, upward', 'No forces until it reaches the top'], a: 0,
      why: 'The hand stopped pushing when the ball left it. The ball rises because of its inertia and slows because gravity is the only force.',
      miss: 'Drawing a "force of the throw" that travels with the ball.' },
    { q: 'An astronaut travels from Earth to the Moon. What happens to the astronaut\'s mass and weight?', choices: ['Mass stays the same; weight decreases', 'Both decrease', 'Mass decreases; weight stays the same', 'Both stay the same'], a: 0,
      why: 'Mass is the amount of matter and does not depend on location. Weight is mg, and g is smaller on the Moon.',
      miss: 'Using "mass" and "weight" as the same word.' },
    { q: 'You push horizontally on a heavy crate with 50 N and it does not move. What is the friction force on the crate?', choices: ['50 N', 'More than 50 N', 'Less than 50 N', 'Zero'], a: 0,
      why: 'The crate is not accelerating, so the forces are balanced. Static friction adjusts to match the push exactly, up to its maximum.',
      miss: 'Thinking friction must be larger than the push to "win."' },
    { q: 'A net force of 10 N acts on a 2.0 kg object. What is its acceleration?', choices: ['5.0 m/s²', '20 m/s²', '0.20 m/s²', '12 m/s²'], a: 0,
      why: 'a = F_net/m = 10/2.0 = 5.0 m/s².',
      miss: 'Multiplying force by mass instead of dividing.' },
    { q: 'A skydiver is falling at terminal velocity. Which statement is true?', choices: ['Air resistance equals the skydiver\'s weight, so the net force is zero', 'Air resistance is greater than the weight', 'Gravity is no longer acting', 'The skydiver is accelerating at 9.8 m/s²'], a: 0,
      why: 'Terminal velocity is a constant velocity, so the forces are balanced. If air resistance were larger, the skydiver would slow down.',
      miss: 'Thinking that falling always means accelerating.' },
  ],
};
