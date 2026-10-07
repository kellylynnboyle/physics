module.exports = {
  id: "momentum",
  number: 4,
  title: "Momentum",
  tagline: "Impulse, collisions, and conservation",
  standards: [
    { code: "HS-PS2-2", note: "Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system." },
    { code: "HS-PS2-3", note: "Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision." }
  ],
  practices: ["Using Mathematics and Computational Thinking", "Constructing Explanations and Designing Solutions"],
  crosscutting: ["Systems and System Models", "Stability and Change"],
  bigIdea: "Within a closed system, total momentum stays constant no matter how complicated the interaction; impulse is how external forces change it.",
  concepts: [
    { term: "Momentum", def: "p = mv. A vector with units kg·m/s; points in the direction of the velocity." },
    { term: "Impulse", def: "J = F_net·Δt = Δp. Units N·s = kg·m/s. The area under a force–time graph." },
    { term: "Impulse–momentum theorem", def: "Increasing the collision time lowers the average force for the same Δp (crumple zones, airbags, catching a ball)." },
    { term: "Conservation of momentum", def: "If no net external force acts on a system, total momentum before = total momentum after: m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′." },
    { term: "Types of collisions", def: "Elastic: momentum and kinetic energy conserved. Inelastic: momentum conserved, KE lost. Perfectly inelastic: objects stick together." },
    { term: "Explosions and recoil", def: "Starting from rest, total momentum is zero, so the pieces move in opposite directions with equal-magnitude momenta; the lighter piece moves faster." },
    { term: "System choice", def: "Define the system so that external forces are negligible during the interaction; internal forces change individual momenta but not the total." }
  ],
  objectives: [
    { id: "M1", verb: "Calculate", text: "I can calculate momentum and compare the momentum of different objects.", criteria: "Uses p = mv with sign for direction; correct units." },
    { id: "M2", verb: "Apply", text: "I can use the impulse–momentum theorem to find force, time, or change in momentum.", criteria: "Computes Δp with signs (including bounces) and F = Δp/Δt." },
    { id: "M3", verb: "Solve", text: "I can solve one-dimensional collision and explosion problems using conservation of momentum.", criteria: "Defines system and positive direction, writes before/after equation, solves." },
    { id: "M4", verb: "Classify", text: "I can classify collisions as elastic, inelastic, or perfectly inelastic using kinetic-energy data.", criteria: "Compares KE before and after with calculations." },
    { id: "M5", verb: "Design", text: "I can design and evaluate a device that minimizes collision force, justifying with impulse.", criteria: "Explicitly increases stopping time; tests with data (e.g., egg-drop or crash-cart)." }
  ],
  cornell: {
    topic: "Momentum and Impulse",
    cues: [
      { cue: "What is momentum?", notes: "p = mv. 'Mass in motion.' Vector. A slow, massive object can have more momentum than a fast, light one." },
      { cue: "What is impulse?", notes: "J = FΔt = Δp = m(v_f − v_i). Area under an F–t graph. Includes direction: a bounce changes p by more than a stop." },
      { cue: "Why do airbags and crumple zones help?", notes: "Same Δp but longer Δt → smaller average force (F = Δp/Δt). Less force → less injury." },
      { cue: "When is momentum conserved?", notes: "When the net EXTERNAL force on the system is zero (or negligible during a brief collision). Internal forces cancel in pairs (Newton's 3rd law)." },
      { cue: "How do I set up a conservation problem?", notes: "1) Choose system. 2) Choose +direction. 3) Write Σp_before = Σp_after. 4) Plug in signs. 5) Solve. 6) Check reasonableness." },
      { cue: "What kinds of collisions are there?", notes: "Elastic: KE conserved (billiard balls ≈). Inelastic: KE lost to heat, sound, deformation. Perfectly inelastic: stick together, max KE loss. Momentum is conserved in ALL of them." },
      { cue: "What about explosions and recoil?", notes: "Start p = 0 → afterwards p₁ = −p₂. m₁v₁ = −m₂v₂. The smaller mass has the larger speed." }
    ],
    summary: "Momentum (p = mv) measures how hard it is to stop a moving object. Impulse — force acting over time — changes momentum, so lengthening collision time reduces force. When no external net force acts on a system, total momentum is conserved in any collision or explosion, whether or not kinetic energy is conserved. Elastic collisions also conserve kinetic energy; inelastic collisions do not."
  },
  quiz: [
    { q: "A 60 kg runner moves at 5.0 m/s. A 0.010 kg bullet moves at 800 m/s. Which has more momentum?", options: ["The bullet, because it is much faster", "The runner", "They are equal", "Cannot be determined"], answer: 1, misconception: "Speed alone determines momentum", explain: "Runner: 60 × 5 = 300 kg·m/s. Bullet: 0.010 × 800 = 8 kg·m/s. Mass matters as much as velocity." },
    { q: "A baseball catcher moves her glove backward while catching a fast ball. Why does this reduce the sting?", options: ["It reduces the ball's momentum", "It increases the time of the stop, so the average force is smaller", "It reduces the impulse", "It makes the ball lose mass"], answer: 1, misconception: "Reducing force requires reducing impulse", explain: "Impulse (Δp) is the same either way. Since F = Δp/Δt, a longer stopping time means a smaller average force." },
    { q: "In which type of collision is total momentum NOT conserved (for an isolated system)?", options: ["Elastic", "Inelastic", "Perfectly inelastic", "None of them"], answer: 3, misconception: "Inelastic collisions lose momentum", explain: "Momentum is conserved in every collision of an isolated system. Only kinetic energy is lost in inelastic collisions." },
    { q: "A ball hits a wall and sticks. An identical ball hits the same wall at the same speed and bounces back with nearly the same speed. Which receives the larger impulse?", options: ["The one that sticks", "The one that bounces", "Same impulse", "Neither: the wall doesn't move"], answer: 1, misconception: "Stopping is the maximum change", explain: "Sticking: Δp = 0 − mv = −mv. Bouncing: Δp = −mv − mv = −2mv. The bounce changes momentum twice as much, so the impulse is twice as large." },
    { q: "A 5.0 kg rifle fires a 0.010 kg bullet at 400 m/s. Compare the recoil speed of the rifle to the bullet.", options: ["The rifle moves at 400 m/s too", "The rifle moves much slower in the opposite direction (≈0.8 m/s)", "The rifle moves faster than the bullet", "The rifle does not move"], answer: 1, misconception: "Equal forces mean equal speeds", explain: "Total momentum starts at zero, so m_rifle·v_rifle = −m_bullet·v_bullet → v = −(0.010 × 400)/5.0 = −0.8 m/s." },
    { q: "Two identical carts approach each other with equal speed and stick together on collision. What is their velocity right after?", options: ["Same speed as before", "Half the speed", "Zero", "Twice the speed"], answer: 2, misconception: "Forgetting momentum is a vector", explain: "Momenta are equal and opposite, so the total is zero. After sticking, (2m)v′ = 0 → v′ = 0. Kinetic energy has been lost." },
    { q: "A 1500 kg car at 10 m/s hits and sticks to a 1000 kg car at rest. What is their combined velocity?", options: ["10 m/s", "6.0 m/s", "4.0 m/s", "5.0 m/s"], answer: 1, misconception: "Dividing by one mass instead of the total", explain: "p before = 1500 × 10 = 15,000. After: (2500)v′ = 15,000 → v′ = 6.0 m/s." },
    { q: "The area under a force–time graph represents…", options: ["Work", "Impulse", "Power", "Acceleration"], answer: 1, misconception: "Confusing F–t area with F–x area", explain: "Force × time = impulse (change in momentum). Force × distance would be work." }
  ],
  practice: [
    { problem: "Find the momentum of a 1000 kg car traveling at 20 m/s east.", answer: "p = 20,000 kg·m/s east." },
    { problem: "A 0.145 kg baseball approaches a bat at 40 m/s and leaves in the opposite direction at 50 m/s. The contact lasts 2.0 ms. Find the impulse and average force.", answer: "Δp = 0.145(50 − (−40)) = 13 N·s. F = 13.05/0.0020 ≈ 6.5 × 10³ N." },
    { problem: "A 1500 kg car moving at 10 m/s hits and locks with a 1000 kg car at rest. Find the final speed and the kinetic energy lost.", answer: "v′ = 6.0 m/s. KE before = 75,000 J; after = 45,000 J; lost = 30,000 J (perfectly inelastic)." },
    { problem: "A 5.0 kg rifle fires a 0.010 kg bullet at 400 m/s. Find the rifle's recoil velocity.", answer: "v = −(0.010)(400)/5.0 = −0.80 m/s." },
    { problem: "Two 0.50 kg carts collide elastically head-on; cart A moves at 2.0 m/s and cart B is at rest. Predict the velocities after the collision.", answer: "Equal masses in an elastic collision exchange velocities: A stops, B moves at 2.0 m/s." },
    { problem: "Design challenge: an egg must survive a 2 m drop. Explain using impulse why a foam-padded container works.", answer: "Foam lengthens the stopping time Δt for the same Δp, so the average force F = Δp/Δt is reduced below the egg's breaking force." }
  ],
  resources: [
    { name: "PhET: Collision Lab", type: "Simulation", url: "https://phet.colorado.edu", use: "Test elastic and inelastic collisions; see momentum and KE totals." },
    { name: "The Physics Classroom: Momentum and Collisions", type: "Tutorial + practice", url: "https://www.physicsclassroom.com", use: "Impulse and conservation concept checks." },
    { name: "Khan Academy: Impulse and momentum", type: "Video + exercises", url: "https://www.khanacademy.org", use: "Worked collision problems." },
    { name: "OpenStax High School Physics, Ch. 8", type: "Free textbook", url: "https://openstax.org", use: "Reading and practice problems." },
    { name: "Lab idea: Dynamics carts with motion sensors", type: "Hands-on lab", url: "", use: "Verify Σp before = after for elastic (magnets) and inelastic (Velcro) collisions." },
    { name: "Engineering project: Egg-drop / crash-test car", type: "Design project", url: "", use: "Satisfies the HS-PS2-3 design performance expectation; students iterate on stopping time." }
  ],
  applications: [
    "Vehicle safety: crumple zones, airbags, seat belts, and helmets lengthen collision time.",
    "Sports: follow-through in a golf swing or tennis serve increases contact time and impulse; boxers 'roll with the punch'.",
    "Rocketry: rockets gain forward momentum by expelling exhaust backward.",
    "Accident reconstruction: investigators use momentum conservation on vehicle collisions to estimate pre-crash speeds."
  ]
};
