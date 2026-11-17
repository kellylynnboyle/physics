// Unit 4: Momentum.
module.exports = {
  id: "momentum", num: 4, dir: "04-momentum", title: "Momentum", weeks: "Weeks 12–14",
  subtitle: "Physics | Unit 4 | Momentum, impulse, conservation, collisions",
  ngss: ["HS-PS2-2: Use mathematical representations to support the claim that total momentum of a system is conserved when there is no net force on the system", "HS-PS2-3: Design, evaluate, and refine a device that minimizes the force on an object during a collision", "HS-ETS1-2 / HS-ETS1-3: Engineering design", "CCC: Systems and System Models"],
  essentialQuestion: "Why is momentum conserved in every collision, and how can engineers use that to make collisions safer?",
  targets: [
    "I can calculate momentum and explain that it is a vector.",
    "I can use impulse = change in momentum to connect force, time, and change in velocity.",
    "I can explain how increasing collision time reduces force, and apply it to a safety design.",
    "I can use conservation of momentum to solve collision and recoil problems for two objects in one dimension.",
    "I can classify collisions as elastic or inelastic by checking kinetic energy.",
  ],
  concepts: [
    ["Momentum", "p = mv. A vector in the direction of the velocity, measured in kg·m/s."],
    ["Impulse", "Force multiplied by the time it acts: J = FΔt, measured in N·s."],
    ["Impulse-momentum theorem", "FΔt = Δp = mΔv. The impulse on an object equals its change in momentum."],
    ["System", "The set of objects you choose to track. It is isolated if no net outside force acts on it."],
    ["Conservation of momentum", "In an isolated system, total momentum before an interaction equals total momentum after."],
    ["Elastic vs inelastic collisions", "Momentum is conserved in both. Kinetic energy is conserved only in elastic collisions."],
    ["Collision safety", "For a given change in momentum, a longer stopping time means a smaller force."],
  ],
  sections: [
    {
      title: "1. Momentum",
      cues: [
        { q: "What is momentum, and what are its units?", notes: [
          "**Momentum** is mass times velocity: **p = mv**.",
          "It is a **vector** pointing the same way as the velocity. Units: **kg·m/s**.",
          "Choose a + direction. Objects moving the other way have **negative** momentum.",
        ]},
        { q: "What is the momentum of a 1000 kg car moving at 20 m/s?", notes: [
          "p = mv = 1000 kg × 20 m/s = **20,000 kg·m/s** in the direction the car is moving.",
        ]},
        { q: "Can a small object have more momentum than a large one?", notes: [
          "**Yes**, if it is moving fast enough. Momentum depends on both mass and velocity.",
          "An object at rest has **zero** momentum, whatever its mass.",
        ]},
      ],
      ixl: [["Physics", "G (New)", "Calculate linear momentum and impulse"]],
      ixlShort: "IXL: Physics G “Calculate linear momentum and impulse”",
    },
    {
      title: "2. Impulse",
      cues: [
        { q: "What is impulse, and how is it related to momentum?", notes: [
          "**Impulse** is force times the time the force acts: **J = FΔt**, in N·s.",
          "**Impulse-momentum theorem: FΔt = Δp = m(v_f − vᵢ).**",
          "1 N·s is the same as 1 kg·m/s.",
        ]},
        { q: "Why do airbags, crumple zones, and bending your knees reduce injury?", notes: [
          "The change in momentum is **the same** either way: you go from moving to stopped.",
          "These devices make the stop take **longer**. Since FΔt is fixed, a bigger Δt means a **smaller force**.",
          "They do not reduce the impulse or the change in momentum.",
        ]},
        { q: "A 0.15 kg baseball arrives at 40 m/s and is hit straight back at 50 m/s. The bat touches it for 0.005 s. What force acts on the ball?", notes: [
          "Call the hit direction +. vᵢ = −40 m/s, v_f = +50 m/s.",
          "Δp = m(v_f − vᵢ) = 0.15 × (50 − (−40)) = 0.15 × 90 = **13.5 kg·m/s**.",
          "F = Δp ÷ Δt = 13.5 ÷ 0.005 = **2700 N**.",
          "Sense check: the velocity change is 90 m/s, not 10 m/s, because the direction reversed.",
        ]},
        { q: "Which delivers a bigger impulse to a wall: a ball that sticks or an identical ball that bounces back?", notes: [
          "**The ball that bounces.** Its velocity goes from +v to −v, a change of 2v.",
          "The ball that sticks only goes from +v to 0, a change of v.",
        ]},
        { q: "What does the area under a force-time graph represent?", notes: [
          "**Impulse**, which equals the change in momentum.",
        ]},
      ],
      ixl: [["Physics", "G (New)", "Calculate linear momentum and impulse"], ["Grade 8", "I.7", "Collisions and car safety features"]],
      ixlShort: "IXL: Physics G “Calculate linear momentum and impulse”, Grade 8 I.7",
    },
    {
      title: "3. Conservation of Momentum",
      cues: [
        { q: "What does the law of conservation of momentum say?", notes: [
          "If **no net outside force** acts on a system, its **total momentum stays the same**.",
          "**p_total before = p_total after**: m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′.",
        ]},
        { q: "Why is momentum conserved in a collision?", notes: [
          "By Newton's third law, the objects push on each other with **equal and opposite forces for the same time**.",
          "So they receive **equal and opposite impulses**. What one object loses in momentum, the other gains.",
        ]},
        { q: "A 2 kg cart moving at 3 m/s hits a 1 kg cart at rest and they stick together. What is their velocity afterward?", notes: [
          "Before: (2)(3) + (1)(0) = 6 kg·m/s.",
          "After: the combined mass is 3 kg, so 3v = 6 → v = **2 m/s** in the original direction.",
          "Sense check: slower than 3 m/s because the same momentum is shared by more mass.",
        ]},
        { q: "A 60 kg skater at rest throws a 2 kg ball forward at 15 m/s. What happens to the skater?", notes: [
          "Before: total momentum = 0.",
          "After: (60)v + (2)(15) = 0 → v = −30 ÷ 60 = **−0.5 m/s** (the skater moves backward).",
          "This is **recoil**. The total momentum is still zero.",
        ]},
      ],
      ixl: [["Physics", "G.1", "Conservation of momentum"]],
      ixlShort: "IXL: Physics G.1",
    },
    {
      title: "4. Types of Collisions",
      cues: [
        { q: "What is the difference between elastic and inelastic collisions?", notes: [
          "**Elastic:** objects bounce apart and total **kinetic energy is conserved**.",
          "**Inelastic:** some kinetic energy is changed into thermal energy, sound, and deformation.",
          "**Perfectly inelastic:** the objects **stick together**. This loses the most kinetic energy.",
        ]},
        { q: "Is momentum conserved in an inelastic collision?", notes: [
          "**Yes.** Momentum is conserved in **every** collision in an isolated system.",
          "Only kinetic energy is not conserved. The “missing” energy becomes thermal energy, sound, and bent metal.",
        ]},
        { q: "How much kinetic energy is lost when the 2 kg and 1 kg carts stick together?", notes: [
          "Before: KE = ½(2)(3²) = 9 J.",
          "After: KE = ½(3)(2²) = 6 J.",
          "**3 J** is changed into thermal energy and sound. Momentum stayed at 6 kg·m/s.",
        ]},
      ],
      ixl: [["Physics", "G.1", "Conservation of momentum"]],
      ixlShort: "IXL: Physics G.1",
    },
    {
      title: "5. Labs and Engineering Design",
      cues: [
        { q: "In a cart-collision lab, what do you measure and what do you compare?", notes: [
          "Measure each cart's **mass** and its **velocity before and after** the collision (motion sensors, photogates, or video).",
          "Compare **total momentum before** with **total momentum after**. They should agree within measurement error.",
          "**Independent:** cart masses or starting velocity. **Dependent:** velocities after the collision.",
        ]},
        { q: "In the egg-drop (collision safety) challenge, what are you trying to change, and how do you judge a design?", notes: [
          "You cannot change the egg's change in momentum. You **increase the stopping time** so the force is smaller.",
          "Judge the design against criteria and constraints: does the egg survive, mass, cost, size.",
          "Then **refine**: change one feature, retest, and explain the result using FΔt = Δp. This is HS-PS2-3.",
        ]},
      ],
      ixl: [["Physics", "A.2", "Identify independent and dependent variables"], ["Grade 8", "I.7", "Collisions and car safety features"]],
      ixlShort: "IXL: Physics A.2, Grade 8 I.7",
    },
  ],
  mnemonics: [
    ["p = mv", "Use for any single object's momentum. Keep the sign for direction."],
    ["FΔt = mΔv", "Use when a problem links force, contact time, and a change in speed."],
    ["More time, less force", "Use to explain airbags, helmets, crumple zones, and landing with bent knees."],
    ["Before = after", "Use for every collision or recoil: total momentum before equals total momentum after."],
    ["Sticky is inelastic; bouncy is closer to elastic", "Use to classify a collision quickly, then check kinetic energy to be sure."],
  ],
  summary: "Momentum, p = mv, measures how hard it is to stop a moving object, and it has direction. A force acting for a time delivers an impulse that changes momentum: FΔt = Δp. That is why spreading a stop over a longer time lowers the force, the idea behind every collision safety device. Because colliding objects push on each other with equal and opposite forces for the same time, the total momentum of an isolated system never changes. This holds for elastic collisions, inelastic collisions, and explosions; only kinetic energy can be lost.",
  visuals: [
    ["momentum-2", "A hard stop and a cushioned stop have the same area (impulse), but the cushioned stop has a much smaller force.", "impulse = FΔt = Δp"],
    ["momentum-4", "A ball that bounces reverses its velocity, so its momentum changes twice as much as a ball that sticks.", "Δp = m(v_f − vᵢ)"],
    ["momentum-1", "When carts stick together, the same total momentum is shared by more mass, so they move slower.", "m₁v₁ + m₂v₂ = (m₁ + m₂)v′"],
    ["momentum-3", "Starting from rest, the two objects move apart with equal and opposite momentum.", "0 = m₁v₁′ + m₂v₂′"],
  ],
  resources: [
    ["The Physics Classroom: Momentum, Collisions and Explosions tutorial", "https://www.physicsclassroom.com/class/momentum", "Lessons on impulse, conservation, and each collision type with worked examples."],
    ["PhET: Collision Lab", "https://phet.colorado.edu/en/simulations/collision-lab", "Set masses, speeds, and elasticity and watch momentum and kinetic energy totals."],
    ["Khan Academy: High school physics, Force pairs and momentum", "https://www.khanacademy.org/science/highschool-physics", "Videos, practice, and an engineering activity on safety cushions."],
    ["OpenStax Physics (free textbook), chapter 8", "https://openstax.org/details/books/physics", "Reference reading and extra problems on momentum."],
    ["The Physics Classroom: Calculator Pad problem sets", "https://www.physicsclassroom.com/calcpad", "Graded problem sets with answers for extra calculation practice."],
  ],
  practice: [
    ["Find the momentum of a 0.058 kg tennis ball served at 50 m/s.", "p = 0.058 × 50 = 2.9 kg·m/s in the direction of the serve."],
    ["A 500 N force acts for 0.020 s on a 0.40 kg ball at rest. Find the impulse and the ball's final speed.", "Impulse = 500 × 0.020 = 10 N·s; v = 10 ÷ 0.40 = 25 m/s."],
    ["A 1500 kg car moving at 20 m/s is stopped by a wall in 0.10 s. With a crumple zone the stop takes 0.50 s. Find the average force in each case.", "Δp = 30,000 kg·m/s. Without: 30,000 ÷ 0.10 = 300,000 N. With: 30,000 ÷ 0.50 = 60,000 N."],
    ["A 0.010 kg bullet moving at 400 m/s embeds in a 1.99 kg block at rest on a frictionless surface. Find their speed afterward.", "(0.010)(400) = (2.00)v, so v = 2.0 m/s."],
    ["An 80 kg astronaut at rest throws a 4.0 kg tool at 5.0 m/s. Find the astronaut's recoil velocity.", "0 = (80)v + (4.0)(5.0), so v = −0.25 m/s (opposite to the tool)."],
    ["A 1.0 kg cart moving at 4.0 m/s hits a 3.0 kg cart at rest and bounces back at 2.0 m/s. Find the 3.0 kg cart's velocity and decide whether the collision is elastic.", "4.0 = (1.0)(−2.0) + (3.0)v, so v = 2.0 m/s. KE before = 8 J; KE after = 2 J + 6 J = 8 J, so it is elastic."],
  ],
  realWorld: [
    "Car safety: airbags, seat belts, and crumple zones all lengthen the stopping time.",
    "Sports: following through on a swing lengthens contact time and increases the ball's change in momentum.",
    "Rocket and jet propulsion: gas goes one way, the vehicle goes the other.",
    "Earth and space science link: asteroid impacts and the DART mission, which changed an asteroid's orbit by colliding with it.",
  ],
  labs: [
    "Cart collisions on a track: test conservation of momentum for sticking and bouncing collisions.",
    "Egg-drop or phone-case design challenge: design, test, and refine a device that reduces collision force (HS-PS2-3).",
    "Force sensor and force-time graph: compare a hard bumper with a soft bumper for the same cart speed.",
  ],
  quiz: [
    { q: "Two clay balls collide and stick together. Which quantity is conserved for the two-ball system?", c: ["Kinetic energy only", "Momentum only", "Both momentum and kinetic energy", "Neither"], a: 1,
      why: "Momentum is conserved in every collision in an isolated system. In a sticking collision, some kinetic energy becomes thermal energy and deformation.", trap: "Thinking momentum is lost whenever kinetic energy is lost." },
    { q: "A rubber ball and a clay ball of equal mass hit a wall at the same speed. The rubber ball bounces back; the clay sticks. Which delivers the larger impulse to the wall?", c: ["The clay ball", "The rubber ball", "They deliver the same impulse", "Neither delivers an impulse"], a: 1,
      why: "The rubber ball's velocity changes from +v to −v, a change of 2v. The clay only changes from +v to 0.", trap: "Ignoring the direction change when finding Δv." },
    { q: "How does an airbag protect a passenger in a crash?", c: ["It reduces the passenger's change in momentum", "It reduces the impulse on the passenger", "It increases the stopping time, which reduces the force", "It increases the passenger's momentum"], a: 2,
      why: "The passenger's change in momentum is fixed by the crash. A longer stopping time means a smaller force, because FΔt = Δp.", trap: "Believing safety devices reduce the change in momentum." },
    { q: "A loaded truck and a small car collide head-on. How do the sizes of their momentum changes compare?", c: ["The truck's is larger", "The car's is larger", "They are equal", "It depends on which was moving faster"], a: 2,
      why: "Each experiences an equal and opposite force for the same time, so the impulses, and therefore the momentum changes, are equal in size.", trap: "Confusing change in momentum with change in velocity." },
    { q: "A cannon at rest fires a cannonball. Just afterward, what is the total momentum of the cannon and ball together?", c: ["Zero", "Equal to the ball's momentum", "Equal to the cannon's momentum", "Twice the ball's momentum"], a: 0,
      why: "The total was zero before firing and no net outside force acted. The ball's forward momentum is cancelled by the cannon's backward momentum.", trap: "Forgetting that momentum is a vector and can cancel." },
    { q: "A 0.5 kg ball hits a wall at 4 m/s and rebounds at 4 m/s. What is the size of its change in momentum?", c: ["0 kg·m/s", "2 kg·m/s", "4 kg·m/s", "8 kg·m/s"], a: 2,
      why: "Δp = m(v_f − vᵢ) = 0.5 × (−4 − 4) = −4 kg·m/s. The size is 4 kg·m/s.", trap: "Subtracting speeds instead of velocities and getting zero." },
    { q: "A 3 kg cart moving at 4 m/s hits a 1 kg cart at rest and they stick together. What is their speed afterward?", c: ["4 m/s", "3 m/s", "2 m/s", "1 m/s"], a: 1,
      why: "Momentum before = 3 × 4 = 12 kg·m/s. After, 4 kg shares it: 12 ÷ 4 = 3 m/s.", trap: "Averaging the speeds instead of conserving momentum." },
    { q: "If an object's speed doubles, what happens to its momentum and its kinetic energy?", c: ["Both double", "Momentum doubles; kinetic energy quadruples", "Momentum quadruples; kinetic energy doubles", "Both quadruple"], a: 1,
      why: "Momentum is proportional to v. Kinetic energy is proportional to v², so doubling the speed gives four times the kinetic energy.", trap: "Treating momentum and kinetic energy as the same idea." },
    { q: "Two identical carts move toward each other at the same speed, collide, and stick together at rest. What happened to the momentum?", c: ["It was destroyed in the collision", "It turned into heat", "The total was zero before and is zero after", "It was transferred to the track"], a: 2,
      why: "The carts had equal and opposite momentum, so the total was already zero. Momentum was conserved; the kinetic energy became thermal energy.", trap: "Adding momentum as if it had no direction." },
    { q: "The same force pushes a light cart and a heavy cart, both starting from rest, for the same amount of time. Which cart gains more momentum?", c: ["The light cart", "The heavy cart", "They gain the same momentum", "It depends on friction"], a: 2,
      why: "Change in momentum equals impulse, FΔt, which is the same for both. The light cart ends up faster, but the momentum gained is equal.", trap: "Judging momentum by final speed alone." },
  ],
};
