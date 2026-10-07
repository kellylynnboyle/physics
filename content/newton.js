module.exports = {
  id: "newton",
  number: 3,
  title: "Newton's Laws",
  tagline: "Forces cause changes in motion",
  standards: [
    { code: "HS-PS2-1", note: "Analyze data to support the claim that Newton's second law (F = ma) describes the mathematical relationship among net force, mass, and acceleration." },
    { code: "HS-PS2-4", note: "Preview (Semester 2): gravitational and electric forces between objects. Weight and the law of gravitation introduced here." }
  ],
  practices: ["Analyzing and Interpreting Data", "Constructing Explanations", "Using Mathematics and Computational Thinking"],
  crosscutting: ["Cause and Effect", "Systems and System Models"],
  bigIdea: "A net force on an object causes it to accelerate in proportion to the force and inversely to its mass; forces always come in equal-and-opposite pairs between two objects.",
  concepts: [
    { term: "First law (inertia)", def: "An object keeps its velocity (including rest) unless a nonzero net force acts. Mass measures inertia." },
    { term: "Second law", def: "a = F_net / m, or F_net = ma. Acceleration points in the direction of the net force." },
    { term: "Third law", def: "If A pushes on B with force F, B pushes on A with force −F. The pair acts on different objects, so they never cancel each other." },
    { term: "Mass vs. weight", def: "Mass (kg) is the amount of matter and does not change. Weight W = mg (N) is the gravitational force and depends on location." },
    { term: "Free-body diagrams", def: "Draw one object as a dot and every force acting ON it: weight, normal, friction, tension, applied push/pull." },
    { term: "Normal force", def: "Contact force perpendicular to a surface. It is not always equal to mg (elevators, inclines)." },
    { term: "Friction", def: "Static friction matches the applied force up to f_s,max = μₛN. Kinetic friction f_k = μ_kN. Friction depends on N and the surfaces, not contact area." },
    { term: "Inclined planes", def: "Resolve weight into components: parallel to the incline mg sin θ and perpendicular mg cos θ." }
  ],
  objectives: [
    { id: "N1", verb: "Explain", text: "I can explain inertia and use the first law to decide when the net force is zero.", criteria: "Identifies that constant velocity ⇒ net force = 0 and names the balanced forces." },
    { id: "N2", verb: "Draw", text: "I can draw correct free-body diagrams for objects at rest, in motion, and on inclines.", criteria: "All forces present, labeled, correct direction, none extra (e.g., no 'force of motion')." },
    { id: "N3", verb: "Calculate", text: "I can use F_net = ma to find force, mass, or acceleration, including multi-force problems.", criteria: "Sums forces with correct signs, solves, includes units (N, kg, m/s²)." },
    { id: "N4", verb: "Identify", text: "I can identify Newton's third-law pairs and explain why they do not cancel.", criteria: "Names both objects and both forces; states the pair acts on different objects." },
    { id: "N5", verb: "Analyze", text: "I can analyze friction, normal force, and apparent weight situations (including elevators and inclines).", criteria: "Chooses static vs. kinetic friction correctly and finds N from a force balance." },
    { id: "N6", verb: "Design", text: "I can design an investigation relating force, mass, and acceleration, and graph the result.", criteria: "Controls variables, plots a vs. F or a vs. 1/m, interprets slope." }
  ],
  cornell: {
    topic: "Newton's Laws of Motion",
    cues: [
      { cue: "What is Newton's first law?", notes: "An object at rest stays at rest and an object in motion stays in motion at constant velocity unless acted on by a nonzero net force. Inertia = resistance to a change in velocity; more mass → more inertia." },
      { cue: "What is net force?", notes: "The vector sum of all forces on an object. Net = 0 → equilibrium (at rest OR constant velocity)." },
      { cue: "What is Newton's second law?", notes: "F_net = ma. 2× force → 2× acceleration. 2× mass → ½ acceleration. 1 N = 1 kg·m/s². a points the same way as F_net." },
      { cue: "What is Newton's third law?", notes: "Forces come in pairs: A on B and B on A. Equal size, opposite direction, same type of force, act on DIFFERENT objects (so no cancelling)." },
      { cue: "Mass vs. weight?", notes: "Mass: kg, constant everywhere. Weight: W = mg, in N, changes with g (Moon g ≈ 1.6 m/s²)." },
      { cue: "How do I draw a free-body diagram?", notes: "1) Pick ONE object. 2) Draw a dot. 3) Draw each force that acts on it as an arrow from the dot. 4) Label (W, N, f, T, F_app). Never include forces the object exerts on others." },
      { cue: "What does the normal force do?", notes: "Pushes perpendicular to the surface. Flat floor, no vertical acceleration: N = mg. Elevator accelerating up: N = m(g + a). On an incline: N = mg cos θ." },
      { cue: "How does friction work?", notes: "Static: f_s ≤ μₛN, equals the push until the object starts to slide. Kinetic: f_k = μ_kN (usually smaller). Independent of surface area." },
      { cue: "How do I solve a force problem?", notes: "FBD → choose axes → ΣF = ma in each axis → solve → check units and reasonableness." }
    ],
    summary: "Newton's laws connect forces to motion. The first law says an unbalanced force is required to change velocity. The second law gives the quantitative rule, F_net = ma, with the net force being the vector sum of every force on the object. The third law says every force is part of an interaction between two objects, producing equal and opposite forces that act on different objects. Free-body diagrams, with weight, normal, friction, and tension identified, are the tool for applying the second law."
  },
  quiz: [
    { q: "A hockey puck slides at constant velocity across frictionless ice. What is the net force on it?", options: ["Forward, equal to its speed", "Zero", "Equal to its weight", "A small forward force to keep it going"], answer: 1, misconception: "Motion requires a force", explain: "Constant velocity means zero acceleration, so the net force is zero (first law). No force is needed to keep an object moving." },
    { q: "A heavy truck collides head-on with a small car. During the collision, which exerts the larger force?", options: ["The truck on the car", "The car on the truck", "They exert equal-magnitude forces on each other", "It depends on who was moving faster"], answer: 2, misconception: "Bigger or faster objects push harder in a collision", explain: "Newton's third law: the forces are equal in magnitude and opposite in direction. The car has the larger acceleration because it has less mass (a = F/m)." },
    { q: "A book rests on a table. What is the third-law partner of the Earth's gravitational pull on the book?", options: ["The table's upward normal force on the book", "The book's gravitational pull on the Earth", "The book's push on the table", "Friction"], answer: 1, misconception: "Weight and normal force are a third-law pair", explain: "A third-law pair is the same type of force acting on two different objects. Earth pulls book ⇔ book pulls Earth. The normal force balances weight, but it is a different interaction." },
    { q: "An astronaut travels from Earth to the Moon. Which statement is correct?", options: ["Her mass decreases", "Her weight decreases but her mass is unchanged", "Both mass and weight stay the same", "Her weight is unchanged but her mass decreases"], answer: 1, misconception: "Mass and weight are the same thing", explain: "Mass is the amount of matter and is constant. Weight = mg, and g on the Moon is about one-sixth of Earth's, so her weight is smaller." },
    { q: "A constant net force on a 2 kg cart gives it an acceleration of 3 m/s². What is the acceleration if the same net force acts on a 6 kg cart?", options: ["9 m/s²", "3 m/s²", "1 m/s²", "0.5 m/s²"], answer: 2, misconception: "Inverse relationship confusion", explain: "F = (2)(3) = 6 N. With 6 kg: a = 6/6 = 1 m/s². Tripling the mass divides the acceleration by 3." },
    { q: "You stand on a scale in an elevator that is accelerating upward. The scale reading is…", options: ["less than your weight", "equal to your weight", "greater than your weight", "zero"], answer: 2, misconception: "Normal force always equals mg", explain: "Newton's second law: N − mg = ma with a upward, so N = m(g + a) > mg. The scale reads the normal force." },
    { q: "A 20 kg crate sits on a floor and you push it horizontally with 30 N, but it does not move. How large is the friction force?", options: ["0 N", "30 N", "196 N", "Cannot be determined"], answer: 1, misconception: "Friction always equals μN", explain: "The crate is in equilibrium, so static friction exactly balances the push: 30 N. The μₛN value is only the maximum static friction." },
    { q: "A block is pulled across a table at constant speed. If it is turned onto its smaller face (same weight, same surfaces), the kinetic friction force will…", options: ["increase", "decrease", "stay the same", "become zero"], answer: 2, misconception: "Friction depends on contact area", explain: "f_k = μ_kN depends on the surface properties and normal force, not area. N is unchanged, so friction is the same." }
  ],
  practice: [
    { problem: "A 1200 kg car experiences a net force of 3000 N. Find its acceleration.", answer: "a = F/m = 3000/1200 = 2.5 m/s²." },
    { problem: "A 5.0 kg box is pushed with 20 N while friction exerts 8.0 N opposing the motion. Find the acceleration.", answer: "F_net = 20 − 8.0 = 12 N; a = 12/5.0 = 2.4 m/s²." },
    { problem: "A 60 kg person stands in an elevator. Find the normal force (a) at rest and (b) while accelerating upward at 2.0 m/s².", answer: "(a) N = mg = 588 N. (b) N = m(g + a) = 60(11.8) = 708 N." },
    { problem: "A frictionless incline is 30° above the horizontal. Find the acceleration of a block released from rest on it.", answer: "a = g sin 30° = 4.9 m/s² down the slope." },
    { problem: "Two blocks (2.0 kg and 3.0 kg) touch on a frictionless table. A 10 N force pushes the 2.0 kg block into the 3.0 kg block. Find the acceleration and the contact force between the blocks.", answer: "a = 10/5.0 = 2.0 m/s². Contact force on the 3.0 kg block = (3.0)(2.0) = 6.0 N." },
    { problem: "A 10 kg sled is pulled at constant velocity by a 25 N horizontal rope. Find the friction force and μ_k.", answer: "Constant velocity ⇒ f = 25 N. N = mg = 98 N so μ_k = 25/98 ≈ 0.26." }
  ],
  resources: [
    { name: "PhET: Forces and Motion: Basics", type: "Simulation", url: "https://phet.colorado.edu", use: "Push crates, see net force and acceleration with and without friction." },
    { name: "PhET: Friction / The Ramp", type: "Simulation", url: "https://phet.colorado.edu", use: "Explore incline force components and friction." },
    { name: "The Physics Classroom: Newton's Laws", type: "Tutorial + practice", url: "https://www.physicsclassroom.com", use: "Free-body diagram builders." },
    { name: "Khan Academy: Forces and Newton's laws", type: "Video + exercises", url: "https://www.khanacademy.org", use: "Worked problems with solutions." },
    { name: "OpenStax High School Physics, Ch. 4", type: "Free textbook", url: "https://openstax.org", use: "Reading + practice." },
    { name: "Lab idea: Cart, pulley, and hanging mass (Atwood-style)", type: "Hands-on lab", url: "", use: "Plot a vs. F at constant mass, then a vs. 1/m at constant force; slope should match 1/m and F." }
  ],
  applications: [
    "Seat belts and airbags: inertia explains why passengers keep moving when a car stops suddenly.",
    "Rocket and jet propulsion: expelling gas backward pushes the rocket forward (third law).",
    "Elevator and roller-coaster design: apparent weight and rider comfort limits (g-forces).",
    "Tire tread and braking: static friction at the road determines stopping and cornering ability."
  ]
};
