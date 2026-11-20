module.exports = {
  id: '03-newtons-laws', num: 3, title: "Newton's Laws", weeks: '4 weeks',
  subtitle: "Physics | Semester 1, Unit 3 | Forces, free-body diagrams, inertia, F = ma, action-reaction pairs",
  ngss: ['HS-PS2-1: Analyze data to support the claim that Newton\'s second law describes the relationship among net force, mass and acceleration', 'SEP: Analyzing and Interpreting Data', 'CCC: Cause and Effect'],
  essential: 'What causes the motion of an object to change?',
  targets: [
    'I can draw a free-body diagram and find the net force on an object.',
    'I can use Newton\'s first law and inertia to explain what objects do when forces are balanced.',
    'I can use Newton\'s second law to relate net force, mass and acceleration.',
    'I can identify action-reaction force pairs and explain why they do not cancel.',
    'I can tell mass from weight and calculate weight and friction.'
  ],
  keyConcepts: [
    'Force is a push or pull, measured in newtons; net force is the vector sum of all forces on one object',
    'Free-body diagrams show only the forces acting ON the object',
    'First law: balanced forces mean constant velocity (including rest); inertia depends on mass',
    'Second law: a = F_{net} ÷ m',
    'Third law: forces come in equal, opposite pairs acting on two different objects',
    'Mass (kg) versus weight (N): F_{grav} = mg; friction F_{frict} = μF_{norm}'
  ],
  sections: [
    { title: 'Forces and Free-Body Diagrams',
      ixl: [['Grade 8 I.5', 'Balanced and unbalanced forces'], ['Grade 8 KK.6', 'Abbreviate force, energy, and electricity units']],
      rows: [
        ['What is a force and what is its unit?', [
          'A **force** is a push or pull on an object from its interaction with another object. It is a vector.',
          'Unit: the **newton**. 1 N = 1 kg·m/s².']],
        ['Which forces can appear on a free-body diagram?', [
          '**F_{grav}** (weight): straight down, always present.',
          '**F_{norm}**: from a surface, perpendicular to that surface.',
          '**F_{frict}**: along the surface, opposite to the sliding.',
          '**F_{app}** (a push or pull), **F_{tens}** (rope or string), **F_{air}** (air resistance).',
          'Draw only forces acting **on** the object, each as an arrow from the center with length showing its size.']],
        ['How do I find the net force?', [
          'Add the forces as vectors. Forces in opposite directions subtract.',
          'Worked example: 20 N applied to the right, 8 N of friction to the left. F_{net} = 20 − 8 = **12 N to the right**.']]
      ] },
    { title: "Newton's First Law (Inertia)",
      ixl: [['Physics F.2', "Newton's first law of motion"]],
      rows: [
        ['What does Newton\'s first law say?', [
          'An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction, **unless acted on by an unbalanced force**.']],
        ['What is inertia and what does it depend on?', [
          '**Inertia** is an object\'s resistance to a change in its motion. It depends only on **mass**: more mass, more inertia.']],
        ['Does a moving object need a force to keep it moving?', [
          'No. A force is needed to **change** motion, not to keep it going.',
          'Balanced forces (F_{net} = 0) mean constant velocity. That could be at rest or moving steadily in a straight line.']]
      ] },
    { title: "Newton's Second Law (F = ma)",
      ixl: [['Physics F.3', "Newton's second law of motion"], ['Grade 8 I.2', 'How does mass affect force and acceleration?'], ['Grade 8 I.3', 'Calculate acceleration using Newton’s second law of motion']],
      rows: [
        ['How are net force, mass and acceleration related?', [
          '**a = F_{net} ÷ m**, or F_{net} = ma. Acceleration points in the direction of the net force.',
          'More net force gives more acceleration. More mass gives less acceleration.',
          'Worked example: a 12 N net force on a 4.0 kg cart. a = 12 ÷ 4.0 = **3.0 m/s²**.']],
        ['How do I solve a problem with friction?', [
          'Draw the free-body diagram, find the net force, then divide by the mass.',
          'Worked example: a 50 N push on a 10 kg crate with 20 N of friction. F_{net} = 50 − 20 = 30 N. a = 30 ÷ 10 = **3.0 m/s²**.']],
        ['What is the difference between mass and weight?', [
          '**Mass** is the amount of matter (kg) and is the same everywhere. **Weight** is the force of gravity on the object (N): **F_{grav} = mg**.',
          'Worked example: a 60 kg student on Earth weighs 60 × 9.8 = **588 N**. On the Moon the mass is still 60 kg, but the weight is smaller.']],
        ['How do I calculate friction?', [
          '**F_{frict} = μ × F_{norm}**, where μ is the coefficient of friction.',
          'Worked example: a 10 kg box on a level floor with μ = 0.30. F_{norm} = F_{grav} = 10 × 9.8 = 98 N. F_{frict} = 0.30 × 98 = **29.4 N**.']]
      ] },
    { title: "Newton's Third Law (Action-Reaction)",
      ixl: [['Grade 8 I.4', 'Predict forces using Newton’s third law of motion'], ['Physics F.1', "Newton's laws of motion"], ['Grade 8 I.6', "Newton's laws of motion"]],
      rows: [
        ['What does Newton\'s third law say?', [
          'When object A pushes on object B, object B pushes back on A with a force **equal in size and opposite in direction**.']],
        ['Why do action-reaction forces not cancel?', [
          'They act on **two different objects**. Only forces on the same object can cancel.']],
        ['A truck hits a bug. Which one feels the larger force?', [
          'Neither. The forces are **equal**. The bug has a far smaller mass, so the same force gives it a far larger acceleration (a = F ÷ m).']],
        ['How do I name the partner of a force?', [
          'Swap the two objects in the sentence. "Earth pulls the book down" pairs with "the book pulls Earth up".',
          'A book\'s weight and the normal force from the table are **not** a third-law pair: both act on the book.']]
      ] },
    { title: 'Labs and Measurement', lab: true,
      ixl: [['Physics A.2', 'Identify independent and dependent variables']],
      rows: [
        ['In a cart-and-hanging-mass lab, how do we test the second law?', [
          'Change the net force (the hanging weight) while keeping the total mass the same, and measure the acceleration.',
          'Independent variable: **net force**. Dependent variable: **acceleration**. Controlled: total mass.']],
        ['What should the graph of acceleration versus net force look like?', [
          'A **straight line through the origin**. Its slope equals 1 ÷ mass.',
          'Acceleration versus mass (constant force) is a curve that falls: doubling the mass halves the acceleration.']]
      ] }
  ],
  mnemonics: [
    ['No net force, no acceleration.', 'Any time an object is at rest or moving at constant velocity: the forces must balance.'],
    ['F = ma always means F-net.', 'Before dividing by mass, subtract friction and any other opposing forces.'],
    ['A on B, B on A.', 'Naming third-law pairs: swap the two objects in the sentence.'],
    ['Mass is in kilograms; weight is a force in newtons.', 'Any question that mentions the Moon, another planet, or a scale.'],
    ['Draw the free-body diagram first.', 'Every force problem, before writing any equation.']
  ],
  summary: 'Forces change motion; they do not keep it going. If the forces on an object balance, its velocity stays the same (first law). If they do not balance, the object accelerates in the direction of the net force, by an amount set by its mass (second law). Every force is one half of an interaction between two objects, and the two halves are always equal and opposite (third law). A free-body diagram is the tool that connects all three.',
  visuals: [
    { img: 'fbd-balanced.png', caption: 'A book at rest on a table: the two forces on the book are equal and opposite, so the net force is zero.', rule: 'F_{net} = 0, so a = 0' },
    { img: 'fbd-unbalanced.png', caption: 'A pushed crate with friction: the applied force arrow is longer than the friction arrow, so there is a net force to the right.', rule: 'F_{net} = 50 − 20 = 30 N; a = 30 ÷ 10 = 3.0 m/s²' },
    { img: 'third-law.png', caption: 'An action-reaction pair: equal arrows, opposite directions, drawn on two different objects.', rule: 'F(A on B) = −F(B on A)' },
    { img: 'a-vs-f.png', caption: 'Acceleration versus net force for a constant mass is a straight line through the origin.', rule: 'a = F_{net} ÷ m; slope = 1 ÷ m' }
  ],
  objectives: [
    ['N1', 'Draw free-body diagrams and find net force', 'HS-PS2-1', 'All forces labeled, correct directions and relative sizes; net force with direction'],
    ['N2', 'Apply the first law and inertia to explain motion', 'HS-PS2-1; CCC Cause and Effect', 'Explains a constant-velocity case without inventing a "force of motion"'],
    ['N3', 'Solve second-law problems, including friction and weight', 'HS-PS2-1; SEP Using Mathematics', 'Correct acceleration or force with units on 4 of 5 problems'],
    ['N4', 'Identify action-reaction pairs', 'HS-PS2-1 (supporting)', 'Names both objects for each force; states that the pair acts on different objects'],
    ['N5', 'Analyze lab data to support the second law', 'HS-PS2-1; SEP Analyzing Data', 'Graph of a versus F with best-fit line; slope compared with 1 ÷ m; claim-evidence-reasoning paragraph']
  ],
  resources: [
    ["The Physics Classroom: Newton's Laws tutorial", 'https://www.physicsclassroom.com/class/newtlaws', 'Uses the same force labels as these notes (F_grav, F_norm, F_frict)'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', "Choose Newton's Laws"],
    ['PhET: Forces and Motion: Basics', 'https://phet.colorado.edu/en/simulations/forces-and-motion-basics', 'Net force, friction and acceleration'],
    ['OpenStax Physics, Ch. 4', 'https://openstax.org/details/books/physics', "Free textbook: Forces and Newton's Laws of Motion"],
    ['Khan Academy: Physics', 'https://www.khanacademy.org/science/physics', 'Forces and Newton\'s laws videos and exercises'],
    ['IXL Physics, section F', 'https://www.ixl.com/science/physics', 'Skills listed in the IXL Practice Plan']
  ],
  practice: [
    ['A 1500 kg car accelerates at 2.0 m/s². What net force acts on it?', 'F_{net} = ma = 1500 × 2.0 = 3000 N.'],
    ['A 40 N pull moves a 5.0 kg sled against 10 N of friction. Find the acceleration.', 'F_{net} = 40 − 10 = 30 N; a = 30 ÷ 5.0 = 6.0 m/s².'],
    ['What is the weight of a 75 kg astronaut on Earth and on the Moon (g = 1.6 m/s²)?', 'Earth: 75 × 9.8 = 735 N. Moon: 75 × 1.6 = 120 N. Mass is 75 kg in both places.'],
    ['A 20 kg box slides on a level floor with μ = 0.25. Find the friction force.', 'F_{norm} = 20 × 9.8 = 196 N; F_{frict} = 0.25 × 196 = 49 N.'],
    ['A skydiver falls at constant (terminal) velocity. Her weight is 600 N. What is the air resistance force and why?', '600 N upward. Constant velocity means the net force is zero, so air resistance balances weight.']
  ],
  applications: [
    'Seat belts and headrests (first law: your body keeps moving when the car stops)',
    'Rocket launches (third law: exhaust pushed down, rocket pushed up)',
    'Car design: engine force, mass and acceleration (second law)',
    'Walking and swimming: pushing backward on the ground or water to move forward',
    'Terminal velocity for skydivers and raindrops'
  ],
  quiz: [
    { q: 'A hockey puck slides across frictionless ice at constant velocity. The net force on the puck is:', c: ['zero', 'a constant force in the direction of motion', 'a force that slowly decreases', 'equal to the puck\'s weight'], a: 0,
      why: 'Constant velocity means zero acceleration, so the net force is zero. No force is needed to keep an object moving.', trap: 'Believing that motion needs a force in the direction of motion.' },
    { q: 'A large truck collides head-on with a small car. During the collision, the force the truck exerts on the car is:', c: ['greater than the force the car exerts on the truck', 'less than the force the car exerts on the truck', 'equal to the force the car exerts on the truck', 'zero, because the car is smaller'], a: 2,
      why: 'Third law: the two forces are equal in size and opposite in direction. The car is damaged more because its smaller mass gives it a larger acceleration.', trap: 'Thinking the bigger or faster object pushes harder.' },
    { q: 'A book rests on a table. Earth pulls down on the book. What is the third-law reaction force?', c: ['The table pushing up on the book', 'The book pulling up on Earth', 'The book pushing down on the table', 'Friction between book and table'], a: 1,
      why: 'Swap the objects: "Earth pulls book" pairs with "book pulls Earth". The normal force is a different interaction (book and table) and acts on the same object as the weight.', trap: 'Picking the normal force because it is equal and opposite to the weight.' },
    { q: 'An elevator moves upward at constant speed. Compared with the elevator\'s weight, the tension in the cable is:', c: ['greater', 'equal', 'less', 'zero'], a: 1,
      why: 'Constant speed in a straight line means zero net force, so tension equals weight. Tension is greater only while the elevator is speeding up on the way up.', trap: 'Assuming upward motion needs a net upward force.' },
    { q: 'A ball is thrown straight up. After it leaves the hand, and ignoring air resistance, the forces on the ball are:', c: ['gravity down and the force of the throw up', 'gravity down only', 'the force of the throw up only', 'no forces until it starts to fall'], a: 1,
      why: 'The hand\'s push ends at release. A force needs an interaction, and the only thing still interacting with the ball is Earth.', trap: 'Carrying the "force of the throw" along with the ball.' },
    { q: 'The same net force is applied to a 2 kg cart and a 4 kg cart. Compared with the 2 kg cart, the 4 kg cart\'s acceleration is:', c: ['twice as large', 'the same', 'half as large', 'one quarter as large'], a: 2,
      why: 'a = F_{net} ÷ m. Doubling the mass with the same force halves the acceleration.', trap: 'Treating acceleration as proportional to mass.' },
    { q: 'A 10 kg toolbox is taken to the Moon, where g = 1.6 m/s². Its mass and weight there are:', c: ['10 kg and 98 N', '1.6 kg and 16 N', '10 kg and 16 N', '0 kg and 0 N'], a: 2,
      why: 'Mass does not change with location. Weight = mg = 10 × 1.6 = 16 N.', trap: 'Treating mass and weight as the same thing.' },
    { q: 'A 50 N push acts on a 10 kg crate. Friction is 20 N. What is the crate\'s acceleration?', c: ['2.0 m/s²', '3.0 m/s²', '5.0 m/s²', '7.0 m/s²'], a: 1,
      why: 'F_{net} = 50 − 20 = 30 N, so a = 30 ÷ 10 = 3.0 m/s². Using 50 N alone gives 5.0 m/s², which ignores friction.', trap: 'Using the applied force in F = ma when the equation needs the net force.' }
  ]
};
