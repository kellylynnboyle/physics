module.exports = {
  id: "04-momentum",
  num: 4,
  title: "Momentum",
  short: "Momentum",
  subtitle: "Physics | Semester 1, Unit 4 | Momentum, impulse, collision safety, conservation of momentum",
  weeks: "Weeks 12-14",
  ngss: [
    ["HS-PS2-2", "Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system."],
    ["HS-PS2-3", "Apply scientific and engineering ideas to design, evaluate, and refine a device that minimizes the force on a macroscopic object during a collision."],
    ["SEP: Constructing Explanations and Designing Solutions", "Design and test an egg-drop or crash-cushion device."],
  ],
  essentialQuestion: "Why does making a collision last longer reduce the force, and what stays the same in every collision?",
  targets: [
    "I can calculate momentum and treat it as a vector.",
    "I can use the impulse-momentum theorem, F·Δt = m·Δv.",
    "I can explain how airbags, helmets, and crumple zones reduce force.",
    "I can use conservation of momentum to solve collision and explosion problems.",
    "I can tell elastic from inelastic collisions.",
  ],
  concepts: [
    ["Momentum", "Mass in motion: p = m·v, a vector in the direction of the velocity, measured in kg·m/s."],
    ["Impulse", "Force multiplied by the time it acts: J = F·Δt. Impulse equals the change in momentum."],
    ["Force-time trade-off", "For the same change in momentum, a longer stopping time means a smaller force."],
    ["Conservation of momentum", "With no net outside force, the total momentum of a system is the same before and after an interaction."],
    ["Collision types", "Elastic: objects bounce and kinetic energy is conserved. Inelastic: kinetic energy is lost; if they stick, it is perfectly inelastic. Momentum is conserved in all of them."],
  ],
  sections: [
    {
      title: "Momentum",
      rows: [
        ["What is momentum and how is it calculated?", [
          "**Momentum** is mass in motion: **p = m·v**. Unit: **kg·m/s**. It is a vector in the direction of the velocity.",
          "Worked example: a 1000 kg car at 20 m/s has p = 1000 × 20 = **20 000 kg·m/s**.",
        ]],
        ["Can a small object have more momentum than a large one?", [
          "Yes, if it is moving fast enough. A 0.15 kg baseball at 40 m/s has p = **6 kg·m/s**; a 60 kg student standing still has p = **0**.",
        ]],
        ["Why does the sign of momentum matter?", [
          "Momentum has direction. Choose a positive direction; objects moving the other way have **negative** momentum.",
          "Two 2 kg carts moving toward each other at 3 m/s have momenta +6 and −6 kg·m/s. Total: **0**.",
        ]],
      ],
      ixl: [],
      ixlNote: "No IXL skill covers calculating momentum alone. Use The Physics Classroom Concept Builders in Momentum and Collisions.",
    },
    {
      title: "Impulse and the Impulse-Momentum Theorem",
      rows: [
        ["What is impulse, and how is it related to momentum?", [
          "**Impulse** = force × time: **J = F·Δt**. Unit: N·s, which equals kg·m/s.",
          "**Impulse-momentum theorem:** F·Δt = Δp = m·(vf − vi). An impulse changes an object's momentum by exactly that amount.",
        ]],
        ["A 10 N force acts on a 5 kg cart at rest for 3 s. How fast is the cart moving afterward?", [
          "Impulse = 10 × 3 = 30 N·s. Δp = 30 kg·m/s, so vf = 30 / 5 = **6 m/s**.",
        ]],
        ["Why does a ball that bounces receive a larger impulse than one that stops?", [
          "Bouncing reverses the velocity, so Δv is larger.",
          "A 0.5 kg ball hits a wall at 4 m/s. If it stops: Δp = 0.5 × (0 − 4) = −2 kg·m/s. If it rebounds at 4 m/s: Δp = 0.5 × (−4 − 4) = **−4 kg·m/s**, twice as much.",
        ]],
        ["What does the area under a force-time graph represent?", [
          "The **impulse**, which equals the change in momentum.",
        ]],
      ],
      ixl: [],
      ixlNote: "No IXL Physics skill covers impulse. Use The Physics Classroom Concept Builders in Momentum and Collisions.",
    },
    {
      title: "Collision Safety: Force and Time",
      rows: [
        ["How do airbags, helmets, and crumple zones protect people?", [
          "The change in momentum in a crash is fixed (the person goes from moving to stopped). These devices **increase the stopping time**, and since F = Δp / Δt, a longer time means a **smaller force**.",
          "They do not reduce the impulse or the change in momentum.",
        ]],
        ["A 1000 kg car going 20 m/s stops in 0.10 s against a wall. What force acts on it? What if a crumple zone stretches the stop to 0.50 s?", [
          "Δp = 1000 × (0 − 20) = −20 000 kg·m/s in both cases.",
          "0.10 s: F = 20 000 / 0.10 = **200 000 N**. 0.50 s: F = 20 000 / 0.50 = **40 000 N**.",
          "Five times the time gives one-fifth the force.",
        ]],
        ["Why do you pull your hands back when catching a fast ball or an egg?", [
          "Moving your hands with the ball lengthens the time of the catch, which lowers the force on your hands (and on the egg).",
        ]],
      ],
      ixl: [["Grade 8 I.7", "Collisions and car safety features"]],
    },
    {
      title: "Conservation of Momentum",
      rows: [
        ["What does the law of conservation of momentum say?", [
          "If no net outside force acts on a system, its **total momentum before = total momentum after**.",
          "m₁·v₁ + m₂·v₂ (before) = m₁·v₁ + m₂·v₂ (after).",
        ]],
        ["Why is momentum conserved in a collision?", [
          "Third law: the two objects push on each other with equal and opposite forces for the **same time**, so they receive equal and opposite impulses. One gains exactly the momentum the other loses.",
        ]],
        ["A 2 kg cart moving at 3 m/s hits a 1 kg cart at rest and they stick together. How fast do they move?", [
          "Before: 2 × 3 + 1 × 0 = 6 kg·m/s. After: (2 + 1) × v.",
          "6 = 3·v, so v = **2 m/s** in the original direction.",
        ]],
        ["Two skaters at rest push apart. The 40 kg skater moves at 3 m/s. How fast does the 60 kg skater move?", [
          "Before: total momentum = 0. After: 40 × 3 + 60 × v = 0.",
          "v = −120 / 60 = **−2 m/s** (2 m/s in the opposite direction). The heavier skater moves more slowly.",
        ]],
      ],
      ixl: [["Physics G.1", "Conservation of momentum"]],
    },
    {
      title: "Types of Collisions",
      rows: [
        ["How are elastic and inelastic collisions different?", [
          "**Elastic:** objects bounce apart; momentum and kinetic energy are both conserved.",
          "**Inelastic:** momentum is conserved but some kinetic energy becomes heat, sound, and deformation.",
          "**Perfectly inelastic:** the objects stick together and move as one.",
        ]],
        ["Is momentum conserved in an inelastic collision?", [
          "**Yes.** Momentum is conserved in every collision with no net outside force. Only kinetic energy is lost.",
          "Check with the sticking carts: KE before = ½ × 2 × 3² = 9 J. KE after = ½ × 3 × 2² = 6 J. Momentum stayed 6 kg·m/s while 3 J of kinetic energy became heat and sound.",
        ]],
      ],
      ixl: [["Physics G.1", "Conservation of momentum"]],
    },
    {
      title: "Labs and Measurement",
      rows: [
        ["In a cart-collision lab, what do you measure and compare?", [
          "Measure each cart's mass and its velocity before and after the collision (motion sensors, photogates, or video).",
          "Calculate total momentum before and after and find the percent difference.",
          "**Independent variable:** cart masses or collision type (bounce vs. stick). **Dependent variable:** velocities after the collision.",
        ]],
        ["What makes a good egg-drop or crash-cushion design?", [
          "It lengthens the stopping time (padding, crumpling, suspension) and spreads the force over a larger area.",
          "Test, record what failed, and redesign: the design cycle NGSS HS-PS2-3 asks for.",
        ]],
      ],
      ixl: [["Physics A.2", "Identify independent and dependent variables"], ["Grade 8 I.7", "Collisions and car safety features"]],
    },
  ],
  tricks: [
    ["p = m·v", "Physicists use the letter p for momentum. Check the sign of v before multiplying."],
    ["Impulse changes momentum: F·Δt = m·Δv", "Use it whenever a problem gives a force and a time, or asks for the force in a stop."],
    ["More time, less force", "The reason behind airbags, helmets, bending your knees when you land, and follow-through in sports."],
    ["Before = after", "Write total momentum before on the left and total momentum after on the right, then solve."],
    ["Stick together = one mass", "In a perfectly inelastic collision, add the masses and use a single final velocity."],
  ],
  summary: "Momentum is mass times velocity, and it has direction. A force acting for a time delivers an impulse that changes momentum by the same amount, so the same change can come from a large force over a short time or a small force over a long time; that trade-off is how safety equipment works. When two objects interact with no net outside force, the third law guarantees that what one gains the other loses, so total momentum is conserved. That is true in every collision, whether the objects bounce, crumple, or stick.",
  visuals: [
    ["collision", "Before and after a sticking collision: the total momentum is the same, shared by a larger combined mass moving more slowly.", "m₁·v₁ + m₂·v₂ = (m₁ + m₂)·v"],
    ["ft_graph", "The area under a force-time graph is the impulse delivered, which equals the change in momentum.", "Impulse = F·Δt = Δp"],
    ["ft_compare", "Two stops with the same area (same impulse): a short stop needs a large force, a long stop needs a small force.", "Same Δp: more time, less force"],
    ["recoil", "Two skaters push apart from rest. They get equal and opposite momenta, so the lighter skater moves faster.", "Total momentum before = after = 0"],
  ],
  noIxl: "Calculating momentum, impulse, and force-time graphs (use physicsclassroom.com Concept Builders: Momentum and Collisions).",
  resources: [
    ["The Physics Classroom: Momentum and Its Conservation tutorial", "https://www.physicsclassroom.com/class/momentum", "Impulse, the force-time trade-off, and collision problems."],
    ["The Physics Classroom: Concept Builders", "https://www.physicsclassroom.com/Concept-Builders", "Use the Momentum and Collisions group."],
    ["PhET: Collision Lab", "https://phet.colorado.edu/en/simulations/collision-lab", "Set masses, speeds, and elasticity; see momentum totals before and after."],
    ["OpenStax Physics (high school), Ch. 8", "https://openstax.org/details/books/physics", "Free textbook: Momentum."],
    ["Khan Academy: High School Physics", "https://www.khanacademy.org/science/highschool-physics", "Video walkthroughs of impulse and collision problems."],
  ],
  practice: [
    ["Find the momentum of a 70 kg sprinter running at 9.0 m/s.", "p = 70 × 9.0 = 630 kg·m/s in the direction of the run."],
    ["A 0.060 kg tennis ball arrives at 30 m/s and leaves the racket at 40 m/s in the opposite direction. Find the change in momentum. If contact lasts 0.0050 s, find the average force.", "Δp = 0.060 × (−40 − 30) = −4.2 kg·m/s; F = 4.2 / 0.0050 = 840 N."],
    ["A 1500 kg car going 12 m/s stops in 4.0 s. Find the braking force.", "Δp = 1500 × 12 = 18 000 kg·m/s; F = 18 000 / 4.0 = 4500 N opposite the motion."],
    ["A 3.0 kg cart moving at 4.0 m/s sticks to a 1.0 kg cart moving the same way at 2.0 m/s. Find their final velocity.", "Before: 12 + 2 = 14 kg·m/s. After: 4.0·v. v = 3.5 m/s."],
    ["A 4.0 kg rifle fires a 0.010 kg bullet at 400 m/s. Find the recoil velocity of the rifle.", "0 = 0.010 × 400 + 4.0·v, so v = −1.0 m/s (backward)."],
    ["Explain, using impulse, why a gymnastics mat is safer to land on than a wood floor.", "The change in momentum is the same, but the mat lengthens the stopping time, so the average force is smaller."],
  ],
  applications: [
    "Vehicle safety: airbags, seat belts, crumple zones, guardrail crash cushions.",
    "Helmets and padding in football, cycling, and skateboarding.",
    "Rocket and jet propulsion: exhaust momentum one way, vehicle momentum the other.",
    "Sports follow-through in batting, golf, and tennis to lengthen contact time.",
    "Crash reconstruction by accident investigators.",
  ],
  objectives: [
    ["M1", "Calculate momentum as a vector.", "Uses p = m·v with the correct sign and units."],
    ["M2", "Apply the impulse-momentum theorem.", "Relates F, Δt, m, and Δv to solve for any one of them, including bounce cases."],
    ["M3", "Explain collision safety with force and time.", "Explanation states that Δp is unchanged and force falls because time rises."],
    ["M4", "Apply conservation of momentum (HS-PS2-2).", "Sets up before = after and solves sticking and push-apart problems with correct signs."],
    ["M5", "Classify collisions as elastic or inelastic.", "Uses a kinetic-energy comparison to justify the classification."],
    ["M6", "Design, test, and refine a force-reducing device (HS-PS2-3).", "Design is tested, results are recorded, and a revision is justified with impulse reasoning."],
  ],
  quiz: [
    {
      q: "A heavy truck and a small car collide head-on. How do the sizes of their changes in momentum compare?",
      choices: ["The truck's change is larger", "The car's change is larger", "They are equal", "Neither changes momentum"],
      answer: 2,
      why: "They push on each other with equal forces for the same time, so the impulses, and therefore the momentum changes, are equal in size and opposite in direction.",
      trap: "Confusing change in momentum with change in velocity. The car's velocity changes more.",
    },
    {
      q: "A rubber ball and a lump of clay with the same mass hit a wall at the same speed. The ball bounces back; the clay sticks. Which receives the larger impulse?",
      choices: ["The clay", "The ball", "They receive the same impulse", "Neither receives an impulse"],
      answer: 1,
      why: "The ball's velocity reverses, so its change in velocity (and momentum) is nearly twice as large as the clay's, which only stops.",
      trap: "Thinking that stopping completely is the largest possible change.",
    },
    {
      q: "How does an airbag reduce injury in a crash?",
      choices: ["It reduces the passenger's change in momentum", "It reduces the impulse on the passenger", "It increases the stopping time, which reduces the force", "It increases the force to stop the passenger sooner"],
      answer: 2,
      why: "The change in momentum and the impulse are the same with or without the airbag. Spreading that impulse over a longer time makes the force smaller.",
      trap: "Saying the airbag reduces the impulse or the momentum change.",
    },
    {
      q: "Two carts collide and stick together. Which statement is correct?",
      choices: ["Momentum and kinetic energy are both conserved", "Momentum is conserved; kinetic energy is not", "Kinetic energy is conserved; momentum is not", "Neither is conserved"],
      answer: 1,
      why: "Momentum is conserved in every collision without a net outside force. In a sticking collision some kinetic energy becomes heat, sound, and deformation.",
      trap: "Thinking momentum is lost when energy is lost.",
    },
    {
      q: "A 2 kg cart moving at 3 m/s collides with a 1 kg cart at rest. They stick together. What is their speed afterward?",
      choices: ["1 m/s", "1.5 m/s", "2 m/s", "3 m/s"],
      answer: 2,
      why: "Before: 2 × 3 = 6 kg·m/s. After: 3 kg × v = 6, so v = 2 m/s.",
      trap: "Averaging the two speeds without weighting by mass.",
    },
    {
      q: "Two ice skaters stand still, then push off each other. What is their total momentum afterward?",
      choices: ["Zero", "Equal to the heavier skater's momentum", "Twice the lighter skater's momentum", "It depends on how hard they push"],
      answer: 0,
      why: "The total was zero before and no outside force acted, so it is zero after. Their momenta are equal in size and opposite in direction.",
      trap: "Adding the two momenta as if they pointed the same way.",
    },
    {
      q: "A 0.5 kg ball hits a wall at 4 m/s and rebounds at 4 m/s. What is the size of its change in momentum?",
      choices: ["0 kg·m/s", "2 kg·m/s", "4 kg·m/s", "8 kg·m/s"],
      answer: 2,
      why: "Take toward the wall as positive: Δp = 0.5 × (−4 − 4) = −4 kg·m/s. The speed is unchanged but the direction reversed.",
      trap: "Ignoring direction and getting zero.",
    },
    {
      q: "A 10 N net force acts on a 5 kg cart, initially at rest, for 3 s. What is the cart's final speed?",
      choices: ["2 m/s", "6 m/s", "15 m/s", "30 m/s"],
      answer: 1,
      why: "Impulse = 10 × 3 = 30 N·s = change in momentum. vf = 30 / 5 = 6 m/s.",
      trap: "Reporting the impulse (30) as the speed.",
    },
    {
      q: "A cannon fires a cannonball. Compared with the cannonball, the recoiling cannon has:",
      choices: ["Less momentum and less speed", "The same size momentum and less speed", "The same size momentum and the same speed", "More momentum and less speed"],
      answer: 1,
      why: "Momentum is conserved, so the two momenta are equal and opposite. The cannon's much larger mass means a much smaller speed.",
      trap: "Thinking the slower object must have less momentum.",
    },
    {
      q: "You catch a raw egg by letting your hands move backward with it. Why is the egg less likely to break?",
      choices: ["Its change in momentum is smaller", "The stopping time is longer, so the force is smaller", "Its mass is effectively smaller", "The impulse is smaller"],
      answer: 1,
      why: "The egg loses the same momentum either way. Stretching out the time of the catch lowers the force on the shell.",
      trap: "Saying the momentum change or impulse is reduced.",
    },
  ],
};
