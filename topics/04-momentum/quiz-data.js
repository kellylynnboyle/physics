const QUIZ_TITLE = "Momentum — Most-Missed Questions";
const QUIZ_INTRO = "These are the question types students get wrong most often on momentum and collision tests. Read the full explanation after every answer, even the ones you get right.";

const QUIZ_DATA = [
  {
    question: "A car crashes into a padded barrier instead of a solid concrete wall at the same speed. Why does the padded barrier reduce injury, given that the car's change in momentum (Δp) is the same either way?",
    choices: [
      "The padding reduces the car's momentum change",
      "The padding increases the collision time, which reduces the peak force for the same impulse",
      "The padding has nothing to do with force — it just absorbs speed",
      "The padding increases the impulse needed to stop the car"
    ],
    correctIndex: 1,
    explanation: "Since J = FΔt = Δp, and Δp is fixed by the crash (same mass, same velocity change), increasing the time (Δt) over which the force acts decreases the average force (F) required to produce that same impulse.",
    commonMistake: "Students often think padding somehow reduces momentum change itself. It doesn't — it stretches out the time of the collision, which lowers the force, not the impulse."
  },
  {
    question: "In an isolated system with no external forces, which statement about a collision is always true, regardless of collision type?",
    choices: [
      "Kinetic energy is always conserved",
      "Total momentum of the system is always conserved",
      "Both momentum and kinetic energy are always conserved",
      "Neither momentum nor kinetic energy is conserved"
    ],
    correctIndex: 1,
    explanation: "Total momentum of an isolated system is conserved in ANY type of collision — elastic, inelastic, or perfectly inelastic. Kinetic energy is only conserved in elastic collisions.",
    commonMistake: "Students often assume momentum and energy conservation always go together. They only coincide in the special case of elastic collisions."
  },
  {
    question: "A 1000 kg car moving at 15 m/s collides head-on with a stationary 1500 kg truck, and they stick together. What is true about kinetic energy in this collision?",
    choices: [
      "KE is fully conserved because momentum is conserved",
      "Some KE is lost, converted to heat, sound, and deformation, even though momentum is conserved",
      "KE increases because two objects combine into one",
      "KE conservation cannot be determined without more information"
    ],
    correctIndex: 1,
    explanation: "This is a perfectly inelastic collision (objects stick together). Momentum is always conserved, but perfectly inelastic collisions lose the maximum possible amount of kinetic energy to heat, sound, and permanent deformation.",
    commonMistake: "Students conflate 'momentum is conserved' with 'everything is conserved.' Sticking together is the clearest signal that KE is NOT conserved."
  },
  {
    question: "A 2 kg cart moving at +3 m/s collides with a 2 kg cart moving at -3 m/s (opposite direction, same speed). What is the total momentum of the system before the collision?",
    choices: ["12 kg·m/s", "0 kg·m/s", "6 kg·m/s", "Cannot be determined without knowing what happens after"],
    correctIndex: 1,
    explanation: "Momentum is a vector. p_total = (2)(3) + (2)(−3) = 6 − 6 = 0 kg·m/s. The two momenta point in opposite directions and cancel exactly, even though neither cart individually has zero momentum.",
    commonMistake: "Students often add magnitudes without regard to direction/sign, getting 12 kg·m/s instead of correctly canceling the opposite-direction momenta to get 0."
  },
  {
    question: "A firework at rest explodes into two fragments of equal mass. Fragment A flies off at 20 m/s to the right. What can you say about Fragment B?",
    choices: [
      "It must also move at 20 m/s to the right",
      "It must move at 20 m/s to the left, since total momentum must remain zero",
      "It could move at any speed in any direction",
      "It must remain at rest"
    ],
    correctIndex: 1,
    explanation: "The firework starts at rest, so total momentum before the explosion is 0. Momentum is conserved, so the fragments' momenta must sum to 0. With equal masses, equal-and-opposite velocities are required: Fragment B moves at 20 m/s to the left.",
    commonMistake: "Students sometimes think momentum conservation only applies to collisions where objects come together, forgetting it applies equally to explosions (objects flying apart)."
  },
  {
    question: "A tennis ball (mass 0.06 kg) and a bowling ball (mass 6 kg) are both thrown at the same velocity of 10 m/s. Which one requires a larger force to stop in the same amount of time?",
    choices: [
      "The tennis ball, because it's moving faster relative to its size",
      "The bowling ball, because it has 100 times more momentum at the same velocity",
      "They require the same force, since they have the same velocity",
      "Force cannot be compared without knowing the stopping distance"
    ],
    correctIndex: 1,
    explanation: "Momentum p = mv depends on mass, not just velocity. The bowling ball has 100× the mass, so 100× the momentum at the same speed. To stop it in the same Δt, F = Δp/Δt must be 100× larger.",
    commonMistake: "Students often reason from velocity alone ('same speed = same everything') and forget that momentum — and the force needed to change it — scales directly with mass."
  }
];
