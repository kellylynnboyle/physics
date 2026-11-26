// Unit 4: Momentum.
module.exports = {
  num: 4,
  slug: "04-momentum",
  title: "Momentum",
  short: "Momentum, Impulse, and Collisions",
  subtitle: "Physics | Semester 1, Unit 4 | Momentum, impulse, conservation of momentum, collisions",
  pacing: "Weeks 12–14",
  ngss: ["HS-PS2-2", "HS-PS2-3", "HS-ETS1-2", "HS-ETS1-3", "SEP: Using Mathematics and Computational Thinking", "SEP: Constructing Explanations and Designing Solutions", "CCC: Systems and System Models"],
  essentialQuestion: "What stays the same when objects collide, and why does it matter how long a collision lasts?",
  targets: [
    "I can calculate the momentum of an object and give its direction.",
    "I can use impulse to explain why a longer collision time means a smaller force.",
    "I can use conservation of momentum to predict velocities after a collision or explosion.",
    "I can tell elastic from inelastic collisions.",
    "I can design and test a device that reduces the force in a collision.",
  ],
  concepts: [
    "Momentum p = mv as a vector",
    "Impulse: FΔt = Δp",
    "Why increasing collision time reduces force",
    "Conservation of momentum in a closed system",
    "Elastic, inelastic, and perfectly inelastic collisions; explosions and recoil",
    "Engineering design for collision safety",
  ],
  sections: [
    {
      title: "1. Momentum",
      ixl: [["Physics G (new, no number yet)", "Calculate linear momentum and impulse"]],
      rows: [
        {
          cue: "What is momentum, and what are its units?",
          notes: [
            "**Momentum** is mass times velocity: **p = mv**. Units: **kg·m/s**.",
            "Worked example: a 1000 kg car moving at 20 m/s has p = 1000 × 20 = **20,000 kg·m/s**.",
          ],
        },
        {
          cue: "Why does the direction of momentum matter?",
          notes: [
            "Momentum is a **vector** with the same direction as the velocity.",
            "In one dimension use signs: right is +, left is −. Two carts moving toward each other have momenta with opposite signs.",
          ],
        },
        {
          cue: "Can a small object have more momentum than a large one?",
          notes: [
            "**Yes**, if it is moving fast enough.",
            "Example: a 0.05 kg bullet at 400 m/s has p = **20 kg·m/s**. A 7 kg bowling ball at 2 m/s has p = **14 kg·m/s**.",
          ],
        },
      ],
    },
    {
      title: "2. Impulse and Changing Momentum",
      ixl: [["Physics G (new, no number yet)", "Calculate linear momentum and impulse"], ["Grade 8 I.7", "Collisions and car safety features"]],
      rows: [
        {
          cue: "What is impulse, and how is it related to momentum?",
          notes: [
            "**Impulse** is force times the time it acts: FΔt. Units: N·s (the same as kg·m/s).",
            "**Impulse = change in momentum:** FΔt = Δp = m(v_f − v_i).",
            "On a force-time graph, the **area under the curve is the impulse**.",
          ],
        },
        {
          cue: "Why do airbags and padding reduce injury?",
          notes: [
            "The change in momentum is fixed by the crash. A **longer stopping time** means a **smaller force**.",
            "Worked example: a 70 kg passenger moving at 15 m/s is brought to rest. Δp = 70 × 15 = 1050 kg·m/s.",
            "Stopped by a dashboard in 0.01 s: F = 1050 ÷ 0.01 = **105,000 N**. Stopped by an airbag in 0.15 s: F = 1050 ÷ 0.15 = **7,000 N**.",
          ],
        },
        {
          cue: "Which has the larger change in momentum: an object that bounces or one that stops?",
          notes: [
            "**The one that bounces.** Its velocity reverses, so the change is larger.",
            "Worked example: a 0.5 kg ball hits a wall at +4 m/s and rebounds at −4 m/s. Δp = 0.5 × (−4 − 4) = **−4 kg·m/s**. If it had stopped, Δp would be −2 kg·m/s.",
          ],
        },
      ],
    },
    {
      title: "3. Conservation of Momentum",
      ixl: [["Physics G.1", "Conservation of momentum"]],
      rows: [
        {
          cue: "What does the law of conservation of momentum say?",
          notes: [
            "If no net outside force acts on a system, its **total momentum stays the same**.",
            "**Total momentum before = total momentum after.**",
          ],
        },
        {
          cue: "Why is momentum conserved in a collision?",
          notes: [
            "By Newton's third law, the two objects push on each other with **equal and opposite forces** for the **same time**.",
            "So they receive equal and opposite impulses. What one object loses, the other gains.",
          ],
        },
        {
          cue: "How do you find the speed after two objects collide and stick?",
          notes: [
            "Worked example: a 2 kg cart moving at 3 m/s hits a 1 kg cart at rest, and they stick.",
            "Before: (2)(3) + (1)(0) = 6 kg·m/s. After: (2 + 1)v = 6, so v = **2 m/s**.",
          ],
        },
        {
          cue: "How do you handle an explosion or recoil?",
          notes: [
            "Total momentum starts at zero, so the pieces must have **equal and opposite momenta**.",
            "Worked example: a 60 kg skater at rest throws a 2 kg ball forward at 15 m/s. 0 = (2)(15) + (60)v, so v = **−0.5 m/s** (backward).",
          ],
        },
      ],
    },
    {
      title: "4. Types of Collisions",
      ixl: [],
      ixlNote: "No IXL skill classifies elastic and inelastic collisions. Use the Physics Classroom Momentum and Collisions Concept Builders and the PhET Collision Lab.",
      rows: [
        {
          cue: "What is the difference between elastic and inelastic collisions?",
          notes: [
            "**Elastic:** objects bounce apart and total kinetic energy is conserved.",
            "**Inelastic:** some kinetic energy becomes heat, sound, and deformation.",
            "**Perfectly inelastic:** the objects stick together.",
          ],
        },
        {
          cue: "Is momentum conserved in an inelastic collision?",
          notes: [
            "**Yes.** Momentum is conserved in every collision in a closed system. Kinetic energy is the quantity that may not be.",
            "Check with the carts above: KE before = ½(2)(3²) = 9 J. KE after = ½(3)(2²) = 6 J. **3 J** became heat, sound, and deformation.",
          ],
        },
        {
          cue: "What happens when two objects with equal and opposite momenta collide and stick?",
          notes: [
            "Worked example: a 1000 kg car moving at +20 m/s hits a 2000 kg truck moving at −10 m/s.",
            "Total momentum = 20,000 − 20,000 = 0, so the wreck is **at rest**. Momentum was not lost. The total was zero from the start.",
          ],
        },
      ],
    },
    {
      title: "5. Labs and Engineering Design",
      ixl: [
        ["Physics A.2", "Identify independent and dependent variables"],
        ["Grade 8 C.1", "Identify parts of the engineering-design process"],
        ["Grade 8 C.2", "Evaluate tests of engineering-design solutions"],
        ["Grade 8 C.3", "Use data from tests to compare engineering-design solutions"],
      ],
      rows: [
        {
          cue: "How do you test conservation of momentum in the lab?",
          notes: [
            "**Collision carts lab:** measure each cart's mass and its velocity before and after the collision (motion sensors, photogates, or video).",
            "Compare total momentum before and after. **p = mv** for each cart, with signs.",
            "**Independent variable:** cart masses or collision type (stick or bounce). **Dependent variable:** velocities after the collision.",
          ],
        },
        {
          cue: "How do you design a device that reduces collision force?",
          notes: [
            "**Egg-drop or crash-cushion challenge** (HS-PS2-3): the goal is to make the stopping time longer.",
            "State the criteria (egg survives) and constraints (size, mass, materials). Build, test, record results, and improve one feature at a time.",
            "Explain the design with **FΔt = Δp**: same change in momentum, more time, less force.",
          ],
        },
      ],
    },
  ],
  noIxl: "Force-time graphs, elastic vs. inelastic collisions, and explosions: use the Physics Classroom Momentum and Collisions Concept Builders. The IXL skill 'Calculate linear momentum and impulse' is new and had no skill number when this plan was written.",
  mnemonics: [
    { trick: "p = mv", when: "Momentum of any moving object. The letter p is the standard symbol for momentum." },
    { trick: "Impulse = FΔt = Δp", when: "Any question about a force acting for a time." },
    { trick: "More time, less force", when: "Explaining airbags, crumple zones, helmets, and bending your knees when you land." },
    { trick: "Total before = total after", when: "Every collision and explosion problem. Add momenta with signs." },
    { trick: "Stick together: one shared final velocity", when: "Perfectly inelastic collisions. Use (m_1 + m_2)v on the after side." },
  ],
  summary:
    "Momentum is mass in motion, p = mv, and it has direction. A force acting for a time changes momentum by an amount equal to the impulse, FΔt. That one idea explains safety equipment: stretching out the stopping time shrinks the force. When objects interact with no outside net force, they exchange equal and opposite impulses, so the total momentum before equals the total momentum after. That holds for every collision and explosion, whether the objects bounce or stick. Kinetic energy is conserved only in elastic collisions.",
  visuals: [
    { img: "collision-stick.png", caption: "Before and after a collision in which two carts stick together. The total momentum is the same in both pictures.", rule: "m_1 v_1 + m_2 v_2 = (m_1 + m_2) v" },
    { img: "recoil.png", caption: "An explosion from rest. The two pieces move apart with equal and opposite momenta, so the total stays zero.", rule: "0 = m_1 v_1 + m_2 v_2" },
    { img: "force-time.png", caption: "Two force-time graphs with the same area (same impulse). The longer collision has a much smaller peak force.", rule: "area = FΔt = Δp" },
  ],
  quiz: [
    {
      q: "A heavy truck and a small car collide head-on. Compared with the car's change in momentum, the truck's change in momentum is:",
      choices: ["Equal in size and opposite in direction", "Smaller in size", "Larger in size", "Zero"],
      answer: 0,
      misconception: "Thinking the lighter object has the larger momentum change",
      why: "Each vehicle feels the same size force for the same time, so the impulses are equal and opposite. The car has the larger change in velocity, not the larger change in momentum.",
    },
    {
      q: "An egg dropped onto a pillow does not break, but the same egg dropped from the same height onto a floor does. Compared with the floor, the pillow gives the egg:",
      choices: ["The same impulse over a longer time, so a smaller force", "A smaller impulse", "A smaller change in momentum", "A larger impulse over a shorter time"],
      answer: 0,
      misconception: "Thinking padding reduces the impulse or momentum change",
      why: "The egg arrives with the same momentum and stops either way, so Δp and impulse are the same. The pillow spreads the stop over a longer time, which makes the force smaller.",
    },
    {
      q: "A rubber ball and a lump of clay with the same mass hit a wall at the same speed. The ball bounces back and the clay sticks. Which has the greater change in momentum?",
      choices: ["The rubber ball", "The clay", "They are equal", "Neither changes momentum"],
      answer: 0,
      misconception: "Forgetting that momentum is a vector",
      why: "The clay goes from mv to 0, a change of mv. The ball goes from mv to nearly −mv, a change of almost 2mv. Reversing direction is a bigger change than stopping.",
    },
    {
      q: "Two cars collide and lock together. In this collision:",
      choices: ["Momentum is conserved but kinetic energy is not", "Both momentum and kinetic energy are conserved", "Kinetic energy is conserved but momentum is not", "Neither is conserved"],
      answer: 0,
      misconception: "Thinking momentum is lost in inelastic collisions",
      why: "Momentum is conserved in every collision with no outside net force. In an inelastic collision some kinetic energy becomes heat, sound, and deformation.",
    },
    {
      q: "A 2 kg cart moving at 3 m/s hits a 1 kg cart at rest. They stick together. What is their speed afterward?",
      choices: ["2 m/s", "3 m/s", "1.5 m/s", "1 m/s"],
      answer: 0,
      misconception: "Averaging the speeds instead of conserving momentum",
      why: "Momentum before = 2 × 3 = 6 kg·m/s. After, the combined 3 kg moves at v: 3v = 6, so v = 2 m/s.",
    },
    {
      q: "Two identical carts move toward each other at the same speed, collide, and stick together at rest. What happened to the momentum?",
      choices: ["The total was zero before and is zero after", "It was destroyed in the collision", "It turned into heat", "It was transferred to the track"],
      answer: 0,
      misconception: "Adding momenta as if they were scalars",
      why: "The carts had equal and opposite momenta, +mv and −mv, which add to zero. The total is zero after as well. Kinetic energy, not momentum, became heat.",
    },
    {
      q: "A 0.5 kg ball hits a wall at 4 m/s and bounces straight back at 4 m/s. What is the size of its change in momentum?",
      choices: ["4 kg·m/s", "0 kg·m/s", "2 kg·m/s", "8 kg·m/s"],
      answer: 0,
      misconception: "Subtracting speeds instead of velocities",
      why: "Δp = m(v_f − v_i) = 0.5 × (−4 − 4) = −4 kg·m/s. The speed did not change, but the direction did, so the momentum changed.",
    },
    {
      q: "Which has more momentum: a 1000 kg car moving at 10 m/s or a 2000 kg truck moving at 5 m/s?",
      choices: ["They have equal momentum", "The truck, because it is heavier", "The car, because it is faster", "It cannot be determined"],
      answer: 0,
      misconception: "Judging momentum by mass or speed alone",
      why: "p = mv. Car: 1000 × 10 = 10,000 kg·m/s. Truck: 2000 × 5 = 10,000 kg·m/s.",
    },
  ],
  practice: [
    { q: "Find the momentum of a 0.145 kg baseball thrown at 40 m/s.", a: "p = 0.145 × 40 = 5.8 kg·m/s in the direction of the throw." },
    { q: "A 1200 kg car moving at 25 m/s brakes to rest in 5 s. Find its change in momentum and the average braking force.", a: "Δp = 1200 × (0 − 25) = −30,000 kg·m/s. F = −30,000 ÷ 5 = −6000 N (6000 N opposite the motion)." },
    { q: "A 0.40 kg soccer ball at rest is kicked to 25 m/s. The foot touches the ball for 0.05 s. Find the impulse and the average force.", a: "Impulse = 0.40 × 25 = 10 N·s. F = 10 ÷ 0.05 = 200 N." },
    { q: "A 3 kg cart moving at 4 m/s hits a 1 kg cart at rest and they stick together. Find their final velocity.", a: "12 = (3 + 1)v, so v = 3 m/s in the original direction." },
    { q: "An 80 kg astronaut at rest throws a 4 kg tool at 6 m/s. Find the astronaut's velocity afterward.", a: "0 = (4)(6) + (80)v, so v = −0.30 m/s (opposite the tool)." },
    { q: "A 1500 kg car moving east at 20 m/s collides with a 1000 kg car moving west at 15 m/s. They lock together. Find the final velocity and the kinetic energy before and after.", a: "(1500)(20) − (1000)(15) = 15,000 = 2500v, so v = 6 m/s east. KE before = 300,000 + 112,500 = 412,500 J. KE after = ½(2500)(6²) = 45,000 J." },
  ],
  realWorld: [
    "Airbags, crumple zones, and seat belts: all lengthen the time of a crash to cut the force.",
    "Helmets and gym mats: padding that buys stopping time.",
    "Catching a ball with 'soft hands': moving your hands back with the ball.",
    "Rocket propulsion and recoil: exhaust goes one way, the rocket goes the other.",
    "Follow-through in tennis, golf, and baseball: longer contact time gives a bigger impulse.",
  ],
  resources: [
    { name: "The Physics Classroom: Momentum and Its Conservation tutorial", url: "https://www.physicsclassroom.com/class/momentum", what: "Readings on the impulse-momentum theorem and collision problem solving." },
    { name: "The Physics Classroom: Momentum and Collisions Concept Builders", url: "https://www.physicsclassroom.com/Concept-Builders/Momentum-and-Collisions", what: "Interactive practice ranking momenta and analyzing collisions." },
    { name: "PhET: Collision Lab", url: "https://phet.colorado.edu/en/simulations/collision-lab", what: "Set masses, velocities, and elasticity and watch momentum and energy before and after." },
    { name: "Khan Academy: High School Physics", url: "https://www.khanacademy.org/science/highschool-physics", what: "Video lessons and practice on momentum, impulse, and collisions." },
    { name: "OpenStax Physics (high school)", url: "https://openstax.org/details/books/physics", what: "Free textbook. See the chapter on momentum." },
  ],
  objectives: [
    { id: "M1", text: "Calculate momentum as a vector quantity.", evidence: "Computes p = mv with units and sign; ranks objects by momentum." },
    { id: "M2", text: "Apply the impulse-momentum theorem.", evidence: "Solves FΔt = Δp problems; explains a safety device using collision time and force." },
    { id: "M3", text: "Use conservation of momentum to predict outcomes (HS-PS2-2).", evidence: "Sets total momentum before equal to total after for collisions and explosions, with signs." },
    { id: "M4", text: "Classify collisions as elastic or inelastic.", evidence: "Compares kinetic energy before and after and states that momentum is conserved either way." },
    { id: "M5", text: "Design, test, and refine a device that reduces collision force (HS-PS2-3).", evidence: "Design report states criteria and constraints, shows test data, and justifies changes with FΔt = Δp." },
  ],
};
