const QUIZ_TITLE = "Work & Energy — Most-Missed Questions";
const QUIZ_INTRO = "These are the question types students get wrong most often on work, energy, and power tests. Read the full explanation after every answer, even the ones you get right.";

const QUIZ_DATA = [
  {
    question: "A person carries a 10 kg bag at constant height across a flat 20 m hallway. How much work does the person do on the bag (against gravity)?",
    choices: ["1960 J", "0 J", "196 J", "It depends on how fast they walk"],
    correctIndex: 1,
    explanation: "The force holding the bag up (vertical) is perpendicular to the horizontal displacement (θ = 90°), so cosθ = 0 and W = Fd cos(90°) = 0 J. No work is done against gravity even though the person is exerting force and the bag is moving.",
    commonMistake: "Students often multiply force times distance without checking the angle between them, incorrectly getting W = mgd instead of recognizing the perpendicular case gives zero work."
  },
  {
    question: "Object A has twice the velocity of Object B, but both have the same mass. How does Object A's kinetic energy compare to Object B's?",
    choices: ["Twice as much", "Four times as much", "The same", "Half as much"],
    correctIndex: 1,
    explanation: "KE = ½mv². Since KE depends on v², doubling the velocity (with the same mass) quadruples the kinetic energy: (2v)² = 4v².",
    commonMistake: "Students often assume KE scales linearly with velocity (like momentum does), incorrectly answering 'twice as much' instead of accounting for the squared relationship."
  },
  {
    question: "A roller coaster car (no friction) starts at rest at the top of a hill and coasts down. Which equation correctly relates its speed at the bottom to the height of the hill?",
    choices: [
      "mgh = ½mv² → v = √(2gh)",
      "mgh = mv → v = gh",
      "½mv² = mgh² → v = √(2gh²)",
      "It cannot be found without knowing the mass"
    ],
    correctIndex: 0,
    explanation: "With no friction, mechanical energy is conserved: all initial PE converts to KE. mgh = ½mv². Solving for v gives v = √(2gh) — notice mass cancels out entirely, so the coaster's speed doesn't depend on its mass.",
    commonMistake: "Students sometimes think a heavier coaster car will go faster down the same hill. Mass cancels out of the conservation of energy equation in this frictionless case."
  },
  {
    question: "A crate is pushed across a rough floor and comes to rest due to friction. What happened to its original kinetic energy?",
    choices: [
      "It was destroyed — energy is not actually conserved in this case",
      "It converted into heat and sound via the work done by friction",
      "It transferred entirely into potential energy",
      "It became negative energy"
    ],
    correctIndex: 1,
    explanation: "Energy is never destroyed. Friction does negative work on the crate, removing its kinetic energy, but that energy doesn't vanish — it converts into thermal energy (heat) at the crate-floor interface and some sound energy.",
    commonMistake: "Students often say energy is 'lost' or 'destroyed' by friction rather than understanding it's converted to a different form (mostly heat) — the total energy of the system + surroundings is still conserved."
  },
  {
    question: "Two machines lift identical 500 kg loads to the same height of 4 m. Machine X takes 10 seconds; Machine Y takes 40 seconds. Compare their power output.",
    choices: [
      "Machine X and Machine Y have the same power, since they do the same work",
      "Machine X has 4 times the power of Machine Y",
      "Machine Y has 4 times the power of Machine X",
      "Power cannot be compared without knowing the machines' efficiency"
    ],
    correctIndex: 1,
    explanation: "Both machines do the same amount of work (W = mgh, identical for both), but power = W/t. Machine X does the same work in 1/4 the time, so P_X = 4 × P_Y.",
    commonMistake: "Students confuse work and power, assuming 'same work done' automatically means 'same power.' Power depends on how FAST the work is done, not just the total amount."
  },
  {
    question: "A spring is compressed to twice its original compression distance. How does its elastic potential energy change?",
    choices: ["Doubles", "Quadruples", "Stays the same", "Increases by a factor of 8"],
    correctIndex: 1,
    explanation: "PE_s = ½kx². Since PE depends on x² (compression distance squared), doubling the compression quadruples the stored elastic potential energy.",
    commonMistake: "Just like with kinetic energy and velocity, students often assume a linear relationship between compression and stored energy rather than the squared relationship."
  },
  {
    question: "A box is pulled at a constant angle above the horizontal across a floor, with some kinetic friction acting. Which forces do zero work on the box as it moves horizontally?",
    choices: [
      "The applied pulling force",
      "Kinetic friction",
      "Gravity and the normal force (both perpendicular to the horizontal displacement)",
      "All forces do nonzero work in this scenario"
    ],
    correctIndex: 2,
    explanation: "Gravity (straight down) and the normal force (straight up) are both perpendicular to the box's horizontal displacement, so each does zero work (cos 90° = 0). The applied force (angled) and friction (opposing motion) both have components along the displacement and do nonzero work.",
    commonMistake: "Students sometimes assume gravity always does work whenever an object is on the ground and moving, forgetting to check the actual angle between the force and the displacement direction."
  }
];
