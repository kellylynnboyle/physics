(globalThis.UNITS = globalThis.UNITS || []).push({
  id: "momentum",
  num: 4,
  title: "Momentum",
  subtitle: "Impulse, collisions, and conservation",
  pacing: "Weeks 12–14",
  essentialQuestion: "How can we predict what happens in a collision, and how can we make collisions safer?",
  ngss: ["HS-PS2-2", "HS-PS2-3", "HS-ETS1-2", "HS-ETS1-3", "CCC: Systems and System Models"],
  ngssNote: "HS-PS2-2: Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system. HS-PS2-3: Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision.",
  concepts: [
    ["Momentum", "p = mv. A vector in the direction of the velocity. Units: kg·m/s."],
    ["Impulse", "Force × time (FΔt). Impulse equals the change in momentum."],
    ["Impulse and safety", "For the same change in momentum, a longer stopping time means a smaller force."],
    ["System", "The set of objects being tracked. Forces between them are internal; forces from outside are external."],
    ["Conservation of momentum", "With no net external force, the total momentum of a system stays the same."],
    ["Collision types", "Elastic: kinetic energy conserved. Inelastic: kinetic energy not conserved. Perfectly inelastic: objects stick together."]
  ],
  objectives: [
    ["M1", "Calculate momentum and compare the momenta of different objects, including direction."],
    ["M2", "Use the impulse–momentum relationship (FΔt = Δp) to find force, time, or change in velocity."],
    ["M3", "Explain how increasing collision time reduces force, and apply this to the design of a safety device (HS-PS2-3)."],
    ["M4", "Use conservation of momentum to solve one-dimensional collision and explosion problems (HS-PS2-2)."],
    ["M5", "Classify collisions as elastic or inelastic by comparing kinetic energy before and after."]
  ],
  notes: [
    {
      section: "1. Momentum",
      rows: [
        ["What is momentum, and how do I calculate it?", [
          "**Momentum** is mass in motion: **p = mv**. Units: kg·m/s.",
          "It is a **vector** with the same direction as the velocity, so use + and − signs.",
          "**Worked example:** A 0.15 kg baseball at 40 m/s has p = 0.15 × 40 = **6.0 kg·m/s**."
        ]],
        ["Can a small object have more momentum than a large one?", [
          "**Yes**, if it is moving fast enough. A 0.15 kg ball at 40 m/s (6.0 kg·m/s) has more momentum than a 50 kg cart at 0.1 m/s (5.0 kg·m/s).",
          "An object at rest has zero momentum, however massive it is."
        ]]
      ],
      ixl: [["Physics G.1", "Conservation of momentum"]]
    },
    {
      section: "2. Impulse",
      rows: [
        ["What is impulse, and how is it related to momentum?", [
          "**Impulse = FΔt** (force × the time the force acts). Units: N·s, which equal kg·m/s.",
          "**Impulse–momentum theorem:** FΔt = Δp = m(v − v₀). Impulse equals the **change** in momentum."
        ]],
        ["Why do airbags, crumple zones, and bending your knees reduce the force?", [
          "The change in momentum (the impulse) is fixed by how fast you were moving. Stopping over a **longer time** means a **smaller force**.",
          "**Worked example:** A 1000 kg car stops from 20 m/s. Δp = 20 000 kg·m/s. In 0.10 s: F = 20 000 ÷ 0.10 = **200 000 N**. In 0.50 s: F = 20 000 ÷ 0.50 = **40 000 N**. Five times the time, one-fifth the force."
        ]],
        ["Which has the larger change in momentum: an object that stops or one that bounces back?", [
          "The one that **bounces**. Its velocity reverses, so the change is larger.",
          "**Worked example:** A 0.50 kg ball hits the floor at −6 m/s and rebounds at +4 m/s. Δp = 0.50 × (4 − (−6)) = **5.0 kg·m/s**. If it had stopped, Δp would be only 3.0 kg·m/s."
        ]]
      ],
      ixl: [],
      ixlNote: "IXL Physics has no impulse skill. Use The Physics Classroom Concept Builders (Momentum and Collisions: Impulse and Momentum Change)."
    },
    {
      section: "3. Conservation of Momentum",
      rows: [
        ["What does the law of conservation of momentum say?", [
          "If no **net external force** acts on a system, the **total momentum before = total momentum after**.",
          "It follows from Newton's third law: the objects push on each other with equal and opposite forces for the same time, so their momentum changes are equal and opposite."
        ]],
        ["How do I set up a conservation of momentum problem?", [
          "Choose the system (both objects). Choose a positive direction.",
          "Write **m₁v₁ + m₂v₂ (before) = m₁v₁′ + m₂v₂′ (after)**, with signs for direction.",
          "If the objects stick together, the after side is (m₁ + m₂)v′."
        ]],
        ["A 2.0 kg cart moving at 3.0 m/s hits a 1.0 kg cart at rest and they stick. How fast do they move?", [
          "**Before:** (2.0)(3.0) + (1.0)(0) = 6.0 kg·m/s.",
          "**After:** (2.0 + 1.0)v′ = 6.0 → v′ = **2.0 m/s** in the original direction.",
          "Sense check: the combined mass is larger, so the speed is lower."
        ]]
      ],
      ixl: [["Physics G.1", "Conservation of momentum"]]
    },
    {
      section: "4. Types of Collisions",
      rows: [
        ["What is the difference between elastic and inelastic collisions?", [
          "**Elastic:** objects bounce apart and total **kinetic energy is conserved**.",
          "**Inelastic:** some kinetic energy becomes thermal energy, sound, or deformation.",
          "**Perfectly inelastic:** the objects stick together; the most kinetic energy is lost."
        ]],
        ["Is momentum conserved in an inelastic collision?", [
          "**Yes.** Momentum is conserved in **every** collision with no net external force. Only kinetic energy is different.",
          "**Check with the carts above:** KE before = ½(2.0)(3.0²) = 9.0 J. KE after = ½(3.0)(2.0²) = 6.0 J. Momentum stayed at 6.0 kg·m/s while 3.0 J of kinetic energy became other forms."
        ]]
      ],
      ixl: [["Physics G.1", "Conservation of momentum"]]
    },
    {
      section: "5. Explosions and Recoil",
      rows: [
        ["What is the total momentum after two objects at rest push apart?", [
          "**Zero**, the same as before. The objects move in opposite directions with equal and opposite momenta."
        ]],
        ["A 60 kg skater and a 40 kg skater push off each other from rest. The 40 kg skater moves at 3.0 m/s. How fast does the 60 kg skater move?", [
          "**Before:** total momentum = 0.",
          "**After:** (40)(3.0) + (60)v = 0 → v = −120 ÷ 60 = **−2.0 m/s** (2.0 m/s in the opposite direction).",
          "The more massive skater moves more slowly."
        ]]
      ],
      ixl: [["Physics G.1", "Conservation of momentum"]]
    }
  ],
  tricks: [
    ["Before = after", "Write total momentum before on the left and total momentum after on the right. Fill in signs before doing arithmetic."],
    ["More time, less force", "For a fixed change in momentum, stretching the stopping time shrinks the force. Use it for every safety-device question."],
    ["Momentum always, kinetic energy sometimes", "Momentum is conserved in all collisions; kinetic energy only in elastic ones."],
    ["Bounce is bigger", "A bouncing object has a larger change in momentum than one that stops."]
  ],
  summary: "Momentum (p = mv) is a vector that measures mass in motion. A force acting for a time delivers an impulse that changes momentum, and stretching the time of a collision reduces the force, which is the idea behind every piece of crash-safety equipment. Because forces between objects are equal and opposite, the total momentum of a system with no net external force stays constant in collisions and explosions, whether or not kinetic energy is conserved.",
  quiz: [
    {
      q: "A truck and a small car collide and no outside forces act. Compare the sizes of their changes in momentum.",
      choices: ["They are equal", "The car's is larger", "The truck's is larger", "It depends on which was moving faster"],
      why: "The forces on each are equal and opposite and act for the same time, so the impulses, and therefore the momentum changes, are equal in size and opposite in direction.",
      trap: "Confusing change in momentum with change in velocity. The car's velocity changes more, not its momentum."
    },
    {
      q: "How does an airbag reduce injuries in a crash?",
      choices: ["It increases the time of the stop, which reduces the force", "It reduces the passenger's change in momentum", "It reduces the impulse on the passenger", "It increases the force so the stop is quicker"],
      why: "The change in momentum (and so the impulse) is the same with or without the airbag. Spreading it over a longer time makes the force smaller.",
      trap: "Thinking safety devices reduce the impulse or the momentum change."
    },
    {
      q: "A rubber ball and a clay ball of equal mass hit a wall at the same speed. The rubber ball bounces back; the clay sticks. Which delivers the larger impulse to the wall?",
      choices: ["The rubber ball", "The clay ball", "They deliver the same impulse", "Neither delivers an impulse"],
      why: "The rubber ball's velocity reverses, so its change in momentum is nearly twice that of the clay ball, which only stops.",
      trap: "Thinking that stopping completely is the largest possible change."
    },
    {
      q: "Two carts collide and stick together on a frictionless track. Which is true?",
      choices: ["Momentum is conserved; kinetic energy is not", "Both momentum and kinetic energy are conserved", "Kinetic energy is conserved; momentum is not", "Neither is conserved"],
      why: "Momentum is conserved in every collision with no net external force. In a sticking (perfectly inelastic) collision some kinetic energy becomes thermal energy and deformation.",
      trap: "Believing momentum is lost in inelastic collisions."
    },
    {
      q: "A 3 kg cart moving at 4 m/s collides with a 1 kg cart at rest, and they stick together. What is their speed afterward?",
      choices: ["3 m/s", "4 m/s", "2 m/s", "12 m/s"],
      why: "Before: 3 × 4 = 12 kg·m/s. After: (3 + 1)v = 12, so v = 3 m/s.",
      trap: "Forgetting to use the combined mass after the collision."
    },
    {
      q: "Two skaters at rest push off each other and glide apart on frictionless ice. What is the total momentum of the two skaters afterward?",
      choices: ["Zero", "Twice the momentum of one skater", "It depends on their masses", "It depends on how hard they pushed"],
      why: "The total was zero before and no external force acted, so it is still zero. Their momenta are equal in size and opposite in direction.",
      trap: "Adding momenta as if they were scalars."
    },
    {
      q: "A 2 kg cart moves right at 3 m/s and a 1 kg cart moves left at 6 m/s. What is the total momentum of the system?",
      choices: ["Zero", "12 kg·m/s", "6 kg·m/s to the right", "9 kg·m/s"],
      why: "Taking right as positive: (2)(3) + (1)(−6) = 6 − 6 = 0. Momentum is a vector, so direction matters.",
      trap: "Ignoring the negative sign for the cart moving left."
    },
    {
      q: "A 0.2 kg ball hits a wall at 10 m/s and bounces straight back at 10 m/s. What is the size of its change in momentum?",
      choices: ["4 kg·m/s", "0 kg·m/s", "2 kg·m/s", "20 kg·m/s"],
      why: "Δp = m(v − v₀) = 0.2 × (10 − (−10)) = 4 kg·m/s. The speed is unchanged, but the velocity reversed.",
      trap: "Subtracting speeds instead of velocities."
    }
  ],
  problems: [
    ["Warm-up", "Find the momentum of a 1200 kg car moving at 25 m/s.", "p = 1200 × 25 = 30 000 kg·m/s."],
    ["Core", "A 50 N force acts for 0.30 s on a 0.50 kg ball at rest. Find the impulse and the ball's final speed.", "Impulse = 50 × 0.30 = 15 N·s. v = 15 ÷ 0.50 = 30 m/s."],
    ["Core", "An 80 kg football player running at 6.0 m/s is stopped in 0.40 s. Find the average force on him.", "Δp = 80 × 6.0 = 480 kg·m/s. F = 480 ÷ 0.40 = 1200 N, opposite to his motion."],
    ["Core", "A 1500 kg car moving at 20 m/s hits a 1000 kg car at rest and they lock together. Find their speed just after.", "(1500)(20) = (2500)v → v = 12 m/s."],
    ["Core", "A 4.0 kg rifle fires a 0.010 kg bullet at 400 m/s. Find the rifle's recoil speed.", "0 = (0.010)(400) + (4.0)v → v = −1.0 m/s (1.0 m/s backward)."],
    ["Challenge", "A 0.50 kg cart moving right at 2.0 m/s collides with a 0.30 kg cart moving left at 1.0 m/s. Afterward the 0.50 kg cart moves right at 0.20 m/s. Find the velocity of the 0.30 kg cart, and decide whether the collision was elastic.", "Before: (0.50)(2.0) + (0.30)(−1.0) = 0.70 kg·m/s. After: (0.50)(0.20) + 0.30v = 0.70 → v = 2.0 m/s right. KE before = 1.00 + 0.15 = 1.15 J; KE after = 0.01 + 0.60 = 0.61 J. Kinetic energy was lost, so it was inelastic."]
  ],
  labs: [
    ["Collision carts lab (HS-PS2-2)", "Measure cart velocities before and after sticking and bouncing collisions with photogates or video. Calculate total momentum before and after and compare the percent difference."],
    ["Egg-drop engineering challenge (HS-PS2-3)", "Design, test, and refine a device that keeps an egg from breaking when dropped. Explain the design using FΔt = Δp and evaluate it against constraints (mass, size, cost)."],
    ["Impulse with a force sensor", "Collide a cart with a force sensor using a hard bumper and a soft bumper. Compare the peak force and the collision time; the area under each force–time graph should match."]
  ],
  resources: [
    ["The Physics Classroom: Momentum and Its Conservation", "https://www.physicsclassroom.com/class/momentum", "Tutorial on impulse, collisions, and explosions."],
    ["PhET: Collision Lab", "https://phet.colorado.edu/en/simulations/collision-lab", "Set masses, velocities, and elasticity and watch momentum bars."],
    ["OpenStax Physics (high school), Ch. 8", "https://openstax.org/details/books/physics", "Free textbook chapter on momentum."],
    ["IXL Physics G.1", "https://www.ixl.com/science/physics", "Skill practice; aim for SmartScore 80+."]
  ],
  applications: [
    "Airbags, crumple zones, helmets, and padded dashboards: longer stopping time, smaller force.",
    "Following through in baseball, golf, and tennis to increase contact time and impulse.",
    "Rocket and jet propulsion as recoil from expelled gas.",
    "Crash reconstruction: investigators use conservation of momentum to estimate speeds before impact."
  ]
});
