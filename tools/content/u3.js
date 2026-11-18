module.exports = {
  id: '03-newtons-laws',
  num: 3,
  title: "Newton's Laws",
  subtitle: "Physics (Grade 11) | Semester 1, Unit 3 | Forces, free-body diagrams, Newton's three laws, weight and friction",
  weeks: 'Weeks 8–11',
  overview: 'Kinematics described motion; dynamics explains it. Students learn to identify forces, draw free-body diagrams, and use Newton\'s three laws to connect net force with acceleration.',
  ngss: [
    ['HS-PS2-1', 'Analyze data to support the claim that Newton\'s second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration. (Assessment is limited to one-dimensional motion.)'],
    ['SEP: Analyzing and Interpreting Data', 'Graph acceleration against net force and against mass from cart data and interpret the slope.'],
    ['CCC: Cause and Effect', 'Use evidence to separate cause (net force) from effect (acceleration).'],
  ],
  targets: [
    'I can identify the forces on an object and draw a labeled free-body diagram.',
    'I can use Newton\'s first law to explain why balanced forces mean constant velocity.',
    'I can use Newton\'s second law (a = Fnet/m) to solve for force, mass or acceleration.',
    'I can tell mass from weight and calculate weight, normal force and friction.',
    'I can identify action-reaction pairs and explain why they do not cancel.',
  ],
  eq: 'What causes an object\'s motion to change, and how can we predict the change?',
  concepts: [
    '**Force and net force** – a push or pull measured in newtons; the vector sum of all forces on one object.',
    '**Free-body diagram** – arrows for every force acting on a single object: Fgrav, Fnorm, Ffrict, Fapp, Ftens, Fair.',
    '**Newton\'s first law (inertia)** – balanced forces mean no change in velocity.',
    '**Newton\'s second law** – a = Fnet/m; acceleration points the same way as the net force.',
    '**Mass and weight** – mass is the amount of matter (kg); weight is the force of gravity (N), W = mg.',
    '**Normal force and friction** – the surface pushes perpendicular; friction opposes sliding, Ffrict = μFnorm.',
    '**Newton\'s third law** – forces come in equal, opposite pairs acting on two different objects.',
  ],
  objectives: [
    ['Draw a correct free-body diagram for an object at rest, at constant velocity, or accelerating.', 'Free-body diagram check; Quiz Q5'],
    ['Apply the first law to balanced-force situations.', 'Quiz Q1, Q4, Q6, Q10; IXL Physics F.2'],
    ['Solve one-dimensional problems with a = Fnet/m.', 'Practice 1, 2, 4; IXL Physics F.3'],
    ['Calculate weight, normal force and friction.', 'Practice 3, 4, 5; Quiz Q8'],
    ['Identify action-reaction pairs and compare the forces in an interaction.', 'Quiz Q2, Q3, Q9; Practice 6'],
    ['Analyze cart data to support Newton\'s second law (lab, HS-PS2-1).', 'Second-law lab report with graph and CER'],
  ],
  sections: [
    {
      title: '1. Forces and Free-Body Diagrams',
      ixlShort: 'IXL: Grade 8 I.5',
      ixl: [['Grade 8 I.5', 'Balanced and unbalanced forces']],
      rows: [
        ['What is a force, and what is net force?', [
          'A **force** is a push or a pull on an object. It is a vector, measured in **newtons (N)**.',
          '**Net force (Fnet)** is the vector sum of all the forces on one object. Forces in the same direction add; forces in opposite directions subtract.',
          '**Balanced** forces: Fnet = 0. **Unbalanced** forces: Fnet ≠ 0, and the object accelerates.',
        ]],
        ['How do you draw a free-body diagram?', [
          'Draw the object as a dot or box. Draw one arrow for each force **on that object**, starting at the object and pointing the way the force acts.',
          'Label each arrow: **Fgrav** (weight, down), **Fnorm** (surface, perpendicular), **Ffrict** (along the surface, against sliding), **Fapp** (push or pull), **Ftens** (rope), **Fair** (air resistance).',
          'Make arrow length match force size. Do not draw velocity, and do not draw forces the object exerts on other things.',
        ]],
        ['Which object exerts the normal force?', [
          'The **surface** the object touches. It pushes perpendicular to the surface.',
          'On a level surface with no other vertical forces, Fnorm = Fgrav in size. That is not always true (see section 4).',
        ]],
      ],
    },
    {
      title: "2. Newton's First Law: Inertia",
      ixlShort: 'IXL: Physics F.2',
      ixl: [['Physics F.2', "Newton's first law of motion"]],
      rows: [
        ['What does Newton\'s first law say?', [
          'An object at rest stays at rest, and an object in motion keeps the **same speed and direction**, unless an unbalanced force acts on it.',
        ]],
        ['Does a moving object need a force to keep it moving?', [
          '**No.** Force is needed to change motion, not to maintain it. With Fnet = 0 a moving object continues at constant velocity.',
          'Objects on Earth slow down because friction and air resistance are unbalanced forces, not because motion "wears off".',
          'Constant velocity and at rest are the same situation for forces: both mean **Fnet = 0**.',
        ]],
        ['What is inertia, and what does it depend on?', [
          '**Inertia** is an object\'s resistance to changes in its motion. It depends only on **mass**.',
          'Inertia is a property, not a force. It never appears on a free-body diagram.',
          'Example: in a sudden stop your body keeps moving forward until the seat belt applies a force.',
        ]],
      ],
    },
    {
      title: "3. Newton's Second Law: a = Fnet/m",
      ixlShort: 'IXL: Physics F.1, F.3, Grade 8 I.2–3',
      ixl: [['Grade 8 I.2', 'How does mass affect force and acceleration?'], ['Grade 8 I.3', "Calculate acceleration using Newton's second law of motion"], ['Physics F.3', "Newton's second law of motion"], ['Physics F.1', "Newton's laws of motion"]],
      rows: [
        ['What does Newton\'s second law say?', [
          '**a = Fnet/m**, also written Fnet = ma. Acceleration points in the same direction as the net force.',
          '1 N = 1 kg·m/s²: the force that gives 1 kg an acceleration of 1 m/s².',
          'Double the net force: acceleration doubles. Double the mass: acceleration halves.',
        ]],
        ['How do you solve a second-law problem?', [
          '1. Choose the object. 2. Draw its free-body diagram. 3. Find Fnet. 4. Use a = Fnet/m. 5. Check units and direction.',
          'Worked: a 5.0 kg box is pushed right with 30 N while friction is 10 N. Fnet = 30 − 10 = 20 N right. a = 20 ÷ 5.0 = **4.0 m/s² to the right**.',
          'Sense check: vertical forces (Fnorm and Fgrav) cancel, so the box does not leave the floor.',
        ]],
        ['What is the friction force when you push a crate at constant velocity?', [
          'Constant velocity means a = 0, so Fnet = 0. Friction is **equal** to your push.',
          'Pushing a crate with 50 N at steady speed means friction is exactly 50 N, not less.',
        ]],
      ],
    },
    {
      title: '4. Mass, Weight, Normal Force and Friction',
      ixlShort: 'IXL: Grade 8 I (new skill), KK.6',
      ixl: [['Grade 8 I (new, not yet numbered)', 'How does mass affect gravitational force?'], ['Grade 8 KK.6', 'Abbreviate force, energy, and electricity units']],
      rows: [
        ['How is weight different from mass?', [
          '**Mass** is the amount of matter, in kg. It is the same everywhere.',
          '**Weight** is the force of gravity on the object: **Fgrav = mg**, in newtons.',
          'Worked: a 60 kg student on Earth weighs 60 × 9.8 = **588 N**. On the Moon (g = 1.6 m/s²) the mass is still 60 kg, but the weight is 96 N.',
        ]],
        ['How do you calculate friction?', [
          '**Ffrict = μ·Fnorm**, where μ is the coefficient of friction (no units).',
          '**Static** friction holds a resting object in place; **kinetic** friction acts on a sliding object and is usually smaller.',
          'Worked: a 10 kg crate slides on a level floor with μ = 0.30. Fnorm = 10 × 9.8 = 98 N. Ffrict = 0.30 × 98 = **29.4 N**.',
        ]],
        ['When is the normal force not equal to the weight?', [
          'Whenever there is vertical acceleration, a ramp, or another vertical force.',
          'Worked: a 60 kg rider in an elevator accelerating upward at 2.0 m/s². Fnorm − mg = ma, so Fnorm = 60 × (9.8 + 2.0) = **708 N**. The rider feels heavier.',
          'At constant elevator speed (up or down), a = 0 and Fnorm = mg = 588 N.',
        ]],
      ],
    },
    {
      title: "5. Newton's Third Law: Force Pairs",
      ixlShort: 'IXL: Grade 8 I.4, I.6',
      ixl: [['Grade 8 I.4', "Predict forces using Newton's third law of motion"], ['Grade 8 I.6', "Newton's laws of motion"]],
      rows: [
        ['What does Newton\'s third law say?', [
          'When object A pushes on object B, B pushes on A with a force **equal in size and opposite in direction**.',
          'The two forces are the same type, happen at the same time, and act on **two different objects**.',
          'To name the partner, swap the nouns: "Earth pulls book down" pairs with "book pulls Earth up".',
        ]],
        ['In a collision between a truck and a small car, which feels the larger force?', [
          '**Neither.** The forces are equal in size.',
          'The car has the larger **acceleration** because its mass is smaller (a = F/m). Same force, different effect.',
        ]],
        ['Why don\'t action and reaction forces cancel?', [
          'Forces can only cancel when they act on the **same object**. A third-law pair acts on two different objects.',
          'The weight of a book and the normal force on it are equal and opposite, but they are **not** a third-law pair: both act on the book.',
        ]],
      ],
    },
    {
      title: '6. Labs and Measurement',
      lab: true,
      ixlShort: 'IXL: Physics A.2–3, B.3–4',
      ixl: [['Physics A.2', 'Identify independent and dependent variables'], ['Physics A.3', 'Identify the experimental question'], ['Physics B.3', 'Multiply and divide with significant figures'], ['Physics B.4', 'Calculations with significant figures']],
      rows: [
        ['What are the variables in the cart-and-hanging-mass lab?', [
          'Part 1: **independent** = net force (hanging weight); **dependent** = acceleration; **control** = total mass (move masses from the cart to the hanger).',
          'Part 2: **independent** = total mass; **dependent** = acceleration; **control** = net force.',
        ]],
        ['What should the graphs show if Newton\'s second law is correct?', [
          'Acceleration versus net force: a **straight line through the origin** with slope = 1/mass.',
          'Acceleration versus mass: a falling **curve** (inverse relationship). Acceleration versus 1/mass is a straight line.',
          'Write the conclusion as Claim, Evidence, Reasoning (CER), quoting the slope as evidence.',
        ]],
      ],
    },
  ],
  tricks: [
    ['First law = inertia: objects keep doing what they are doing', 'Any question with balanced forces or "no net force".'],
    ['Constant velocity means Fnet = 0', 'Finding an unknown force (often friction) when speed is steady.'],
    ['Draw the free-body diagram, find Fnet first, then a = Fnet/m', 'Every second-law calculation.'],
    ['Third law: swap the nouns (A on B, B on A)', 'Naming the reaction force. If both forces act on the same object, it is not a pair.'],
    ['Weight = mg; mass never changes with location', 'Moon, elevator and "weightless" questions.'],
  ],
  summary: 'Forces change motion; they are not needed to keep motion going. If the forces on an object balance, its velocity stays constant (first law). If they do not balance, the object accelerates in the direction of the net force with a = Fnet/m (second law). Every force is one half of an interaction between two objects, and the two halves are always equal and opposite (third law). A free-body diagram, which shows only the forces on one object, is the tool that turns any situation into a net force and then an acceleration.',
  visuals: [
    ['u3a.png', 'A book at rest on a table has two forces that balance: the table pushes up as hard as gravity pulls down.', 'Fnet = 0, so a = 0'],
    ['u3b.png', 'A pushed crate with a longer Fapp arrow than Ffrict arrow has a net force to the right and accelerates right.', 'a = Fnet/m = (Fapp − Ffrict)/m'],
    ['u3c.png', 'In a collision each vehicle pushes on the other with the same size force, in opposite directions.', 'F(A on B) = −F(B on A)'],
    ['u3d.png', 'A skydiver at terminal velocity has air resistance equal to weight, so speed stops changing.', 'Fair = Fgrav, so Fnet = 0'],
  ],
  noIxl: 'Free-body diagrams, friction calculations (Ffrict = μFnorm) and elevator problems have no matching IXL skill. Use the physicsclassroom.com Concept Builders for Newton\'s Laws (Free-Body Diagrams, Recognizing Forces).',
  quiz: [
    { q: 'A hockey puck slides across frictionless ice at constant velocity. What is the net force on the puck?', c: ['A forward force that keeps it moving', 'Zero', 'A force equal to its weight', 'A small backward force'], a: 1, why: 'Constant velocity means zero acceleration, and a = Fnet/m, so the net force is zero. No force is needed to keep an object moving.', trap: 'Believing motion requires a force in the direction of motion.' },
    { q: 'A large truck collides head-on with a small car. During the collision, the force of the truck on the car is…', c: ['greater than the force of the car on the truck', 'less than the force of the car on the truck', 'equal to the force of the car on the truck', 'zero, because the truck keeps moving'], a: 2, why: 'Newton\'s third law: the two forces are equal in size and opposite in direction. The car is damaged more because its smaller mass gives it a much larger acceleration.', trap: 'Thinking the bigger or faster object pushes harder.' },
    { q: 'A book rests on a table. Earth pulls down on the book with gravity. What is the third-law reaction force?', c: ['The table pushing up on the book', 'The book pushing down on the table', 'The book pulling up on Earth', 'The floor pushing up on the table'], a: 2, why: 'Swap the nouns: Earth pulls book, so book pulls Earth. The table\'s push on the book is a different interaction; it balances the weight but is not its reaction pair.', trap: 'Calling the normal force the reaction to weight.' },
    { q: 'You push a crate across a floor with 50 N and it moves at constant speed. The friction force on the crate is…', c: ['less than 50 N', 'exactly 50 N', 'more than 50 N', 'zero'], a: 1, why: 'Constant speed means Fnet = 0, so friction exactly balances the push.', trap: 'Thinking the push must beat friction for the crate to keep moving.' },
    { q: 'A ball is thrown straight up. After it leaves the hand and while it is still rising (ignore air resistance), which forces act on it?', c: ['Gravity down and the force of the throw up', 'Gravity down only', 'The force of the throw only', 'No forces until it starts to fall'], a: 1, why: 'The hand\'s force ends at release. The ball rises because it already has upward velocity, and gravity is slowing it.', trap: 'Drawing a "force of the throw" on an object no longer in contact with the hand.' },
    { q: 'You stand on a bathroom scale in an elevator moving upward at constant speed. Compared with your normal weight, the scale reads…', c: ['more', 'less', 'the same', 'zero'], a: 2, why: 'Constant speed means zero acceleration, so the normal force equals your weight. The scale only reads more or less while the elevator is accelerating.', trap: 'Linking the scale reading to the direction of motion instead of the acceleration.' },
    { q: 'The net force on a cart is doubled and the cart\'s mass is also doubled. The acceleration…', c: ['doubles', 'is four times as large', 'stays the same', 'is cut in half'], a: 2, why: 'a = Fnet/m. Doubling both gives (2F)/(2m) = F/m, the same acceleration.', trap: 'Tracking only one of the two changes.' },
    { q: 'An astronaut travels from Earth to the Moon. Compared with on Earth, on the Moon the astronaut has…', c: ['less mass and less weight', 'the same mass and less weight', 'the same mass and the same weight', 'less mass and the same weight'], a: 1, why: 'Mass is the amount of matter and does not change. Weight = mg, and g on the Moon is about one-sixth of Earth\'s.', trap: 'Using mass and weight as the same thing.' },
    { q: 'You push on a brick wall with a force of 100 N and the wall does not move. The wall pushes back on you with…', c: ['0 N, because walls cannot push', 'less than 100 N', 'exactly 100 N', 'more than 100 N, which is why it does not move'], a: 2, why: 'Third-law forces are always equal, whether or not anything moves and whether or not the object is alive.', trap: 'Thinking only active or moving objects exert forces.' },
    { q: 'A box is moving to the right. The only horizontal forces on it are 10 N to the right and 10 N to the left. The box will…', c: ['stop immediately', 'slow down and stop', 'keep moving right at constant velocity', 'speed up to the right'], a: 2, why: 'The forces balance, so Fnet = 0 and the velocity does not change. The box keeps the velocity it already has.', trap: 'Assuming balanced forces mean the object must be at rest.' },
  ],
  resources: [
    ['The Physics Classroom: Newton\'s Laws tutorial', 'https://www.physicsclassroom.com/class/newtlaws', 'Reading on all three laws, free-body diagrams and net force.'],
    ['The Physics Classroom: Concept Builders', 'https://www.physicsclassroom.com/Concept-Builders', 'Open the Newton\'s Laws set for free-body diagram practice.'],
    ['PhET simulation: Forces and Motion: Basics', 'https://phet.colorado.edu/en/simulations/forces-and-motion-basics', 'Tug-of-war net force, friction and acceleration with live force arrows.'],
    ['OpenStax Physics (high school), Chapter 4', 'https://openstax.org/details/books/physics', 'Free textbook: Forces and Newton\'s Laws of Motion.'],
    ['Khan Academy Physics', 'https://www.khanacademy.org/science/physics', "Videos and practice; browse or search the library for forces and Newton's laws. Unit names on the site change from time to time."],
    ['IXL Physics, section F; Grade 8 science, section I', 'https://www.ixl.com/science/physics', 'Skill practice; goal SmartScore 80+.'],
  ],
  practice: [
    ['A net force of 12 N acts on a 2.0 kg cart. What is its acceleration?', 'a = 12 ÷ 2.0 = **6.0 m/s²**'],
    ['A 1500 kg car speeds up from rest to 20 m/s in 8.0 s. What net force acts on it?', 'a = 20 ÷ 8.0 = 2.5 m/s². Fnet = 1500 × 2.5 = **3750 N**'],
    ['What is the weight of a 75 kg person on Earth and on the Moon (g = 1.6 m/s²)?', 'Earth: 75 × 9.8 = **735 N**. Moon: 75 × 1.6 = **120 N**. Mass is 75 kg in both places.'],
    ['A 20 kg sled is pulled horizontally with 80 N across snow with μ = 0.25. Find the acceleration.', 'Fnorm = 20 × 9.8 = 196 N. Ffrict = 0.25 × 196 = 49 N. Fnet = 80 − 49 = 31 N. a = 31 ÷ 20 = **1.55 m/s²**'],
    ['A 70 kg rider is in an elevator accelerating downward at 1.5 m/s². What does a scale under the rider read?', 'mg − Fnorm = ma, so Fnorm = 70 × (9.8 − 1.5) = **581 N** (less than the 686 N weight)'],
    ['Two skaters at rest push off each other with a force of 150 N. Their masses are 50 kg and 75 kg. Find each acceleration.', '50 kg skater: 150 ÷ 50 = **3.0 m/s²**. 75 kg skater: 150 ÷ 75 = **2.0 m/s²**, in the opposite direction. Same force, different accelerations.'],
    ['An 80 kg skydiver falls at terminal velocity. What is the force of air resistance?', 'Constant velocity means Fnet = 0, so Fair = mg = 80 × 9.8 = **784 N** upward'],
    ['Use Newton\'s first law to explain why seat belts are needed.', 'In a sudden stop the car slows but the passenger\'s **inertia** keeps them moving forward at the original speed. The seat belt supplies the unbalanced force that slows the passenger with the car.'],
  ],
  apps: [
    '**Vehicle safety**: seat belts and headrests (first law), braking force and stopping distance (second law).',
    '**Rockets and jets**: exhaust is pushed backward and the engine is pushed forward (third law).',
    '**Sports**: sprinters push back on the blocks; a heavier bat or ball needs more force for the same acceleration.',
    '**Structures**: bridges and buildings are designed so that all forces balance.',
    '**Earth science link**: stress builds along a fault until the force exceeds static friction, and the plates slip in an earthquake.',
  ],
  labs: [
    '**Second-law lab (HS-PS2-1)**: cart pulled by a hanging mass; graph acceleration against net force and against mass.',
    '**Inertia demonstrations**: coin on a card over a cup; tablecloth pull.',
    '**Friction investigation**: pull a block with a spring scale across different surfaces to compare coefficients of friction.',
    '**Third-law pairs**: two spring scales hooked together always read the same.',
  ],
};
