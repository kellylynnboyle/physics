module.exports = {
  id: "momentum",
  num: 4,
  dir: "04-momentum",
  title: "Momentum",
  subtitle: "Physics | Momentum and Collisions | momentum, impulse, conservation, elastic and inelastic collisions",
  weeks: "Weeks 12–14",
  ngss: [
    { code: "HS-PS2-2", text: "Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system." },
    { code: "HS-PS2-3", text: "Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision." },
    { code: "HS-ETS1-2 / HS-ETS1-3", text: "Break a design problem into smaller parts and evaluate solutions against criteria and constraints (egg-drop or crash-cushion project)." },
  ],
  essentialQuestion: "What decides how hard it is to stop a moving object, and what happens when objects collide?",
  targets: [
    "I can calculate momentum and explain why it is a vector.",
    "I can use the impulse-momentum theorem, F·Δt = m·Δv.",
    "I can explain how increasing collision time reduces force.",
    "I can use conservation of momentum to solve collision and explosion problems.",
    "I can tell elastic from inelastic collisions and say what is conserved in each.",
  ],
  keyConcepts: [
    ["Momentum", "p = m·v, in kg·m/s. A vector in the direction of the velocity."],
    ["Impulse", "Force multiplied by the time it acts, F·Δt, in N·s. The area under a force-time graph."],
    ["Impulse-momentum theorem", "Impulse equals change in momentum: F·Δt = m·Δv."],
    ["System", "The set of objects you choose to track together."],
    ["Conservation of momentum", "With no net outside force, total momentum before equals total momentum after."],
    ["Elastic collision", "Objects bounce apart; momentum and kinetic energy are both conserved."],
    ["Inelastic collision", "Momentum is conserved but kinetic energy is not. Perfectly inelastic: the objects stick together."],
  ],
  sections: [
    {
      title: "Momentum",
      cues: [
        { q: "What is momentum and how do you calculate it?", notes: [
          "**Momentum** is mass in motion: **p = m·v**. Units: **kg·m/s**.",
          "It is a **vector**, pointing the same way as the velocity.",
          "Worked example: a 0.15 kg baseball at 40 m/s has p = 0.15 × 40 = **6.0 kg·m/s**.",
        ]},
        { q: "Can a small object have more momentum than a large one?", notes: [
          "**Yes.** Momentum depends on both mass and velocity.",
          "A parked truck has zero momentum. A rolling skateboard has more.",
          "A 0.01 kg bullet at 600 m/s (6 kg·m/s) has the same momentum as the 0.15 kg baseball at 40 m/s.",
        ]},
        { q: "Why does direction matter when adding momentum?", notes: [
          "Momentum in opposite directions has opposite signs.",
          "Two identical carts moving toward each other at the same speed have a **total momentum of zero**.",
        ]},
      ],
      ixl: [["Physics G (New)", "Calculate linear momentum and impulse"]],
    },
    {
      title: "Impulse and Change in Momentum",
      cues: [
        { q: "What is impulse, and how is it related to momentum?", notes: [
          "**Impulse** = force × time = **F·Δt**. Units: N·s (the same as kg·m/s).",
          "**Impulse-momentum theorem**: F·Δt = Δp = m·(v_f − v_i).",
          "Worked example: a 200 N force acts on a 0.5 kg ball at rest for 0.05 s. Impulse = 200 × 0.05 = 10 N·s. Δv = 10 ÷ 0.5 = **20 m/s**.",
        ]},
        { q: "Why does an airbag or a padded floor reduce injury?", notes: [
          "The change in momentum is the same with or without padding (the object still stops).",
          "Padding makes the stop take **more time**. Since F·Δt is fixed, more time means **less force**.",
          "Same idea: bending your knees when landing, catching an egg with moving hands, crumple zones.",
        ]},
        { q: "Which has the larger change in momentum: a ball that bounces back or a ball that sticks?", notes: [
          "The ball that **bounces** back.",
          "Sticking: momentum goes from m·v to 0, a change of m·v.",
          "Bouncing: momentum goes from +m·v to −m·v, a change of up to **2·m·v**.",
          "Worked example: a 0.06 kg ball hits a wall at 30 m/s and rebounds at 20 m/s. Δp = 0.06 × (−20 − 30) = **−3.0 kg·m/s**. If contact lasts 0.01 s, the force is 3.0 ÷ 0.01 = **300 N**.",
        ]},
        { q: "What does the area under a force-time graph represent?", notes: [
          "The area is the **impulse**, which equals the change in momentum.",
          "A tall, narrow graph and a short, wide graph can have the same area: same impulse, different peak force.",
        ]},
      ],
      ixl: [["Physics G (New)", "Calculate linear momentum and impulse"], ["Grade 8 I.7", "Collisions and car safety features"]],
    },
    {
      title: "Conservation of Momentum",
      cues: [
        { q: "What does conservation of momentum say, and when does it apply?", notes: [
          "If no net **outside** force acts on a system, the **total momentum stays the same**.",
          "m₁·v₁ + m₂·v₂ (before) = m₁·v₁′ + m₂·v₂′ (after).",
          "It follows from Newton's third law: the objects push on each other with equal and opposite forces for the same time, so their momentum changes are equal and opposite.",
        ]},
        { q: "How do you set up a conservation of momentum problem?", notes: [
          "1. Choose the system (both objects) and a positive direction.",
          "2. Write total momentum **before**. Watch the signs.",
          "3. Write total momentum **after**.",
          "4. Set them equal and solve for the unknown.",
        ]},
        { q: "A 2 kg cart moving at 3 m/s hits a 1 kg cart at rest and they stick. How fast do they move together?", notes: [
          "Before: (2)(3) + (1)(0) = 6 kg·m/s.",
          "After: (2 + 1)·v = 3v.",
          "6 = 3v → v = **2 m/s** in the original direction.",
          "Sense check: more mass is moving, so the speed must be lower than 3 m/s.",
        ]},
      ],
      ixl: [["Physics G.1", "Conservation of momentum"]],
    },
    {
      title: "Collisions and Explosions",
      cues: [
        { q: "What is the difference between an elastic and an inelastic collision?", notes: [
          "**Elastic**: objects bounce apart with no lasting deformation. Momentum **and** kinetic energy are conserved.",
          "**Inelastic**: momentum is conserved, but some kinetic energy becomes heat, sound, and deformation.",
          "**Perfectly inelastic**: the objects stick together. This loses the most kinetic energy.",
          "Momentum is conserved in **every** type of collision.",
        ]},
        { q: "How much kinetic energy is lost when a 1000 kg car at 20 m/s locks onto a parked 1500 kg truck?", notes: [
          "Momentum: 1000 × 20 = (2500)·v → v = **8 m/s**.",
          "KE before = ½ × 1000 × 20² = 200,000 J. KE after = ½ × 2500 × 8² = 80,000 J.",
          "Lost: **120,000 J** (60%), which went into heat, sound, and bending metal.",
        ]},
        { q: "What happens to momentum in an explosion or a push-off from rest?", notes: [
          "Total momentum before is zero, so total momentum after is also **zero**.",
          "The pieces move in opposite directions with equal-size momenta.",
          "Worked example: a 60 kg skater and a 40 kg skater push apart from rest. The 60 kg skater moves at 2 m/s. 60 × 2 = 40 × v → v = **3 m/s** the other way.",
        ]},
        { q: "When a bug hits a windshield, which has the greater force, momentum change, and acceleration?", notes: [
          "**Force**: equal on both (third law).",
          "**Change in momentum**: equal in size on both (same force, same time).",
          "**Acceleration**: far greater for the bug, because its mass is tiny.",
        ]},
      ],
      ixl: [["Physics G.1", "Conservation of momentum"], ["Grade 8 I.7", "Collisions and car safety features"]],
    },
    {
      title: "Labs and Measurement",
      cues: [
        { q: "In a cart collision lab, how do you test conservation of momentum?", notes: [
          "Measure each cart's mass and its velocity before and after the collision (motion sensor, photogates, or video).",
          "Calculate total momentum before and after. Remember negative signs for carts moving the other way.",
          "They should agree within experimental error. Percent difference = |before − after| ÷ before × 100%.",
        ]},
        { q: "What are the criteria and constraints in an egg-drop design challenge?", notes: [
          "**Criterion**: the egg survives the drop (the force on the egg stays below what cracks it).",
          "**Constraints**: limits on materials, mass, size, and cost.",
          "The design works by increasing the **stopping time**, which lowers the force (HS-PS2-3).",
          "Test, record what failed, change one feature at a time, and test again.",
        ]},
      ],
      ixl: [["Physics A.2", "Identify independent and dependent variables"], ["Physics A.4", "Identify questions that can be investigated with a set of materials"]],
    },
  ],
  mnemonics: [
    ["p = mv", "Momentum is mass times velocity.", "Every momentum calculation."],
    ["Before = after", "Total momentum before a collision equals total momentum after.", "Any collision or explosion with no outside net force."],
    ["More time, less force", "For the same change in momentum, a longer stop means a smaller force.", "Safety and design questions."],
    ["Bounce means bigger change", "A rebound reverses the momentum, so the change is larger than for a stop.", "Comparing bouncing and sticking."],
    ["Momentum always; kinetic energy only if elastic", "Momentum is conserved in every collision. Kinetic energy is conserved only in elastic ones.", "Deciding what you may set equal."],
  ],
  summary: "Momentum, p = m·v, measures how hard it is to stop a moving object, and it has a direction. A force acting over time delivers an impulse, F·Δt, that equals the object's change in momentum; stretching out the time of a collision lowers the force, which is how airbags, helmets, and crumple zones work. When no net outside force acts on a system, its total momentum is conserved, so the momentum before a collision or explosion equals the momentum after. Elastic collisions also conserve kinetic energy. Inelastic collisions do not, and when objects stick together the most kinetic energy is lost.",
  visuals: [
    { file: "mom-inelastic.png", caption: "Before and after a perfectly inelastic collision: the carts stick and share the original momentum.", rule: "m₁·v₁ + m₂·v₂ = (m₁ + m₂)·v" },
    { file: "mom-impulse.png", caption: "Two force-time graphs with the same area: a short hard hit and a long gentle one deliver the same impulse.", rule: "impulse = area = F·Δt = Δp" },
    { file: "mom-bounce.png", caption: "A ball that bounces back from a wall reverses its momentum, so its change in momentum is larger than if it stopped.", rule: "Δp = m·(v_f − v_i)" },
    { file: "mom-explosion.png", caption: "Two skaters push apart from rest: their momenta are equal in size and opposite in direction.", rule: "total p = 0 before and after" },
  ],
  quiz: [
    { q: "An egg is dropped from the same height onto a pillow and onto a tile floor. Why does it survive the pillow?", choices: ["The pillow gives it a smaller change in momentum", "The pillow gives it a smaller impulse", "The pillow makes the stop take longer, so the force is smaller", "The pillow absorbs the egg's mass"], answer: 2, misconception: "Soft surfaces reduce the impulse or momentum change.", why: "The egg arrives with the same momentum and stops both times, so the change in momentum (and the impulse) is the same. The pillow lengthens the stopping time, which lowers the force." },
    { q: "A rubber ball and a lump of clay with the same mass hit a wall at the same speed. The ball bounces back; the clay sticks. Which has the greater change in momentum?", choices: ["The clay", "The ball", "They are equal", "Neither changes momentum"], answer: 1, misconception: "Stopping completely is the biggest possible change.", why: "The clay's momentum goes from m·v to 0. The ball's goes from +m·v to nearly −m·v, a change of almost 2·m·v." },
    { q: "A 2 kg cart moving at 3 m/s collides with a 1 kg cart at rest, and they stick together. What is their speed afterward?", choices: ["1 m/s", "1.5 m/s", "2 m/s", "3 m/s"], answer: 2, misconception: "The speed is shared equally or stays the same.", why: "Momentum before = 2 × 3 = 6 kg·m/s. After, 3 kg moves together: 6 = 3v, so v = 2 m/s." },
    { q: "A bug hits the windshield of a moving bus. Compared with the bus, the bug experiences:", choices: ["A larger force and a larger momentum change", "The same size force and the same size momentum change", "A larger force but the same momentum change", "A smaller force but a larger acceleration"], answer: 1, misconception: "The smaller object feels the larger force.", why: "Third law: equal and opposite forces for the same time, so equal and opposite momentum changes. The bug's acceleration is much greater because its mass is tiny." },
    { q: "Two carts collide and stick together. Which statement is true?", choices: ["Momentum and kinetic energy are both conserved", "Momentum is conserved; kinetic energy is not", "Kinetic energy is conserved; momentum is not", "Neither is conserved"], answer: 1, misconception: "If momentum is conserved, kinetic energy must be too.", why: "Momentum is conserved in every collision with no outside net force. In an inelastic collision some kinetic energy becomes heat, sound, and deformation." },
    { q: "A 60 kg skater and a 40 kg skater stand at rest on ice and push apart. The 60 kg skater moves away at 2 m/s. How fast does the 40 kg skater move?", choices: ["1.3 m/s", "2 m/s", "3 m/s", "5 m/s"], answer: 2, misconception: "Both move away at the same speed.", why: "Total momentum starts at zero and stays zero: 60 × 2 = 40 × v, so v = 3 m/s in the opposite direction." },
    { q: "Two identical carts roll toward each other at the same speed. What is the total momentum of the two-cart system?", choices: ["Twice the momentum of one cart", "Equal to the momentum of one cart", "Zero", "It cannot be determined"], answer: 2, misconception: "Momentum is added like a scalar.", why: "Momentum is a vector. Equal sizes in opposite directions add to zero." },
    { q: "A 50 N force acts for 0.2 s on a 0.5 kg ball at rest. What is the ball's speed afterward?", choices: ["5 m/s", "10 m/s", "20 m/s", "50 m/s"], answer: 2, misconception: "Impulse equals the final speed, or the time is ignored.", why: "Impulse = 50 × 0.2 = 10 N·s = change in momentum. Δv = 10 ÷ 0.5 = 20 m/s." },
    { q: "Which has more momentum: a loaded truck parked at a light, or a skateboard rolling down the street?", choices: ["The truck, because it has more mass", "The skateboard", "They are equal", "Neither has momentum"], answer: 1, misconception: "Momentum is the same as mass or weight.", why: "p = m·v. The truck's velocity is zero, so its momentum is zero. Anything that is moving has more." },
  ],
  practice: [
    ["Foundation", "Find the momentum of a 0.15 kg baseball moving at 40 m/s.", "p = 0.15 × 40 = 6.0 kg·m/s"],
    ["Foundation", "A 200 N force acts on a 0.5 kg ball at rest for 0.05 s. Find the impulse and the final speed.", "Impulse = 10 N·s. v = 10 ÷ 0.5 = 20 m/s."],
    ["Proficient", "A 1000 kg car at 20 m/s hits a parked 1500 kg truck and they lock together. Find their speed.", "20,000 = 2500·v → v = 8 m/s."],
    ["Proficient", "A 60 kg skater at rest throws a 2 kg ball forward at 15 m/s. Find the skater's recoil velocity.", "0 = 2 × 15 + 60·v → v = −0.5 m/s (backward)."],
    ["Challenge", "A 0.06 kg tennis ball hits a wall at 30 m/s and rebounds at 20 m/s. Contact lasts 0.01 s. Find the change in momentum and the average force.", "Δp = 0.06 × (−20 − 30) = −3.0 kg·m/s. F = 3.0 ÷ 0.01 = 300 N."],
    ["Challenge", "For the car and truck above, how much kinetic energy is lost, and where does it go?", "200,000 J − 80,000 J = 120,000 J (60%) becomes heat, sound, and deformation."],
  ],
  resources: [
    ["The Physics Classroom: Momentum and Its Conservation", "https://www.physicsclassroom.com/class/momentum", "Lessons on impulse, the momentum-change theorem, and collision analysis."],
    ["PhET: Collision Lab", "https://phet.colorado.edu/en/simulations/collision-lab", "Set masses and speeds, choose elastic or inelastic, and read momentum before and after."],
    ["Khan Academy: High school physics", "https://www.khanacademy.org/science/highschool-physics", "Videos and practice on momentum and collisions."],
    ["OpenStax Physics (high school)", "https://openstax.org/details/books/physics", "Free textbook; see the chapter on momentum."],
  ],
  realWorld: [
    "Airbags, seat belts, and crumple zones, which lengthen the stopping time in a crash.",
    "Helmets and padded gym floors, which do the same for a head or a falling athlete.",
    "Following through on a golf, tennis, or baseball swing to keep the force on the ball longer.",
    "Rocket and jet propulsion: gas goes one way and the vehicle gains equal momentum the other way.",
  ],
  criteria: [
    ["Calculate momentum and impulse", "Confuses momentum with mass or force", "Calculates p = mv but ignores direction", "Calculates momentum, impulse, and Δp with signs and units", "Uses force-time graphs and rebounds to find force or time"],
    ["Apply conservation of momentum", "Does not treat the two objects as one system", "Sets up before = after but makes sign errors", "Solves sticking, bouncing, and push-apart problems correctly", "Uses lab data to support the claim that momentum is conserved (HS-PS2-2)"],
    ["Design to reduce collision force", "Cannot connect time and force", "States that padding helps without explaining why", "Explains force reduction using F·Δt = Δp", "Designs, tests, and refines a device against criteria and constraints (HS-PS2-3)"],
  ],
};
