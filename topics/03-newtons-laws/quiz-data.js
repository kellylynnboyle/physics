const QUIZ_TITLE = "Newton's Laws — Most-Missed Questions";
const QUIZ_INTRO = "These are the question types students get wrong most often on Newton's Laws tests. Read the full explanation after every answer, even the ones you get right.";

const QUIZ_DATA = [
  {
    question: "A hockey puck slides across frictionless ice at constant velocity. What net force is required to keep it moving?",
    choices: [
      "A constant force equal to its weight",
      "A small constant force in the direction of motion",
      "Zero net force",
      "A force that decreases over time"
    ],
    correctIndex: 2,
    explanation: "By Newton's 1st Law, an object moving at constant velocity has zero acceleration, which means the net force on it is zero. No force is needed to sustain motion — only to change it.",
    commonMistake: "This is the classic Aristotelian misconception: assuming motion itself requires a continuous force. Force is required to change velocity (accelerate), not to maintain it."
  },
  {
    question: "You push a heavy box and it pushes back on you with an equal and opposite force (Newton's 3rd Law). Why does the box still accelerate?",
    choices: [
      "It doesn't actually accelerate — the forces cancel",
      "The action-reaction forces act on two different objects (you and the box), so they don't cancel for either object individually",
      "The 3rd law only applies to moving objects",
      "Friction cancels the reaction force"
    ],
    correctIndex: 1,
    explanation: "Newton's 3rd Law pairs act on different objects — your push acts on the box, the box's reaction acts on you. To find the box's acceleration, you only consider forces acting ON the box (your push, minus friction, etc.), not the reaction force acting on you.",
    commonMistake: "Students think 3rd law pairs cancel out and 'nothing should move.' They only cancel if you (incorrectly) add forces acting on different objects together. Each object's motion depends only on forces acting on THAT object."
  },
  {
    question: "An astronaut has a mass of 80 kg on Earth. What is their mass on the Moon (where gravity is about 1/6th of Earth's)?",
    choices: ["80 kg", "13.3 kg", "480 kg", "It depends on their weight on the Moon"],
    correctIndex: 0,
    explanation: "Mass is the amount of matter in an object and does not change with location. The astronaut's mass remains 80 kg on the Moon, even though their weight (mg) is about 1/6th of what it is on Earth.",
    commonMistake: "Students frequently swap mass and weight, assuming mass shrinks along with weight in lower gravity. Weight changes with g; mass never does."
  },
  {
    question: "A 10 kg box sits on a horizontal table. A rope pulls it upward (not sliding) with 30 N of tension while gravity pulls down with 98 N. What is the normal force from the table?",
    choices: ["98 N", "128 N", "68 N", "30 N"],
    correctIndex: 2,
    explanation: "The box is in vertical equilibrium (not accelerating vertically), so N + T = mg → N = mg − T = 98 − 30 = 68 N. The upward tension reduces how hard the table needs to push.",
    commonMistake: "Students often default to N = mg automatically, forgetting that N only equals mg when gravity and the normal force are the ONLY vertical forces. Any additional vertical force (tension, applied push/pull) changes N."
  },
  {
    question: "Two blocks, a 2 kg block and a 6 kg block, are pushed by the same net force. How do their accelerations compare?",
    choices: [
      "Both blocks have the same acceleration since the force is equal",
      "The 6 kg block accelerates 3 times more than the 2 kg block",
      "The 2 kg block accelerates 3 times more than the 6 kg block",
      "Acceleration cannot be compared without knowing friction"
    ],
    correctIndex: 2,
    explanation: "From F = ma, a = F/m. With the same F, acceleration is inversely proportional to mass. The 2 kg block (1/3 the mass of the 6 kg block) accelerates 3 times as much.",
    commonMistake: "This is different from free-fall, where all masses accelerate the same because gravity scales force WITH mass. Here the applied force is the same fixed value for both blocks, so more mass means less acceleration — students often incorrectly apply the free-fall rule here."
  },
  {
    question: "A block rests on a ramp inclined at 25°. Which expression correctly gives the normal force on the block (ignoring friction, block not accelerating perpendicular to the ramp)?",
    choices: ["N = mg", "N = mg sin(25°)", "N = mg cos(25°)", "N = mg tan(25°)"],
    correctIndex: 2,
    explanation: "The normal force balances only the component of gravity perpendicular to the incline surface, which is mg cos(θ). The component along the surface (mg sinθ) is what tends to slide the block down the ramp.",
    commonMistake: "Students frequently swap sine and cosine on inclined plane problems, or forget that N ≠ mg once the surface is tilted."
  },
  {
    question: "A box is not moving even though you're pushing on it with 40 N. The maximum static friction is 55 N. How much friction force is actually acting on the box right now?",
    choices: ["55 N, the maximum possible", "40 N, exactly matching your push", "0 N, since the box isn't moving", "97.5 N, static plus kinetic combined"],
    correctIndex: 1,
    explanation: "Static friction is a 'responsive' force — it adjusts to exactly match the applied force (up to its maximum) to keep the object at rest. Since the box isn't moving, static friction = your applied force = 40 N, not the maximum 55 N.",
    commonMistake: "Students assume static friction is always at its maximum value (μsN) rather than understanding it only reaches that maximum right at the point of slipping. Below that point, it equals whatever is needed to prevent motion."
  }
];
