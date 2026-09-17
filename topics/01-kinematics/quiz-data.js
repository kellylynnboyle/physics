const QUIZ_TITLE = "Kinematics — Most-Missed Questions";
const QUIZ_INTRO = "These are the question types students get wrong most often on kinematics tests. Read the full explanation after every answer, even the ones you get right.";

const QUIZ_DATA = [
  {
    question: "A runner jogs 400 m around a circular track and ends up back at the starting line. What is their displacement?",
    choices: ["400 m", "0 m", "200 m", "It cannot be determined"],
    correctIndex: 1,
    explanation: "Displacement is the straight-line change in position from start to end. Since the runner returns to the exact starting point, the displacement is 0 m — even though the distance traveled is 400 m.",
    commonMistake: "Students confuse distance (total path length, 400 m) with displacement (net change in position, 0 m). Distance and displacement are only equal for straight-line motion with no direction change."
  },
  {
    question: "A car moving in the negative direction has a positive acceleration. What is happening to the car?",
    choices: [
      "It is speeding up",
      "It is slowing down",
      "It is moving at constant velocity",
      "It has stopped"
    ],
    correctIndex: 1,
    explanation: "Velocity is negative and acceleration is positive — opposite signs. When velocity and acceleration have opposite signs, the object is slowing down (decelerating), regardless of which direction is labeled positive.",
    commonMistake: "Students assume 'positive acceleration' always means 'speeding up.' It only means speeding up when acceleration has the SAME sign as velocity."
  },
  {
    question: "On a velocity-vs-time graph, what does the area under the curve represent?",
    choices: ["Acceleration", "Displacement", "Speed", "The path shape of the motion"],
    correctIndex: 1,
    explanation: "Area under a v-t graph equals displacement (Δx). The slope of a v-t graph equals acceleration.",
    commonMistake: "Students frequently swap slope and area: they say area = acceleration, or think the graph's shape is a literal picture of the object's path. A v-t graph is never a picture of the trajectory."
  },
  {
    question: "A ball is thrown straight up. At the very top of its flight, which statement is true?",
    choices: [
      "Velocity = 0 and acceleration = 0",
      "Velocity = 0 and acceleration = -9.8 m/s²",
      "Velocity = -9.8 m/s and acceleration = 0",
      "Velocity and acceleration are both undefined"
    ],
    correctIndex: 1,
    explanation: "At the peak, the ball's velocity is momentarily 0, but gravity never stops acting on it. Acceleration remains -9.8 m/s² (downward) throughout the entire flight, including at the top.",
    commonMistake: "The single most common free-fall error: students think acceleration must be zero because velocity is zero at that instant. Velocity and acceleration are independent quantities."
  },
  {
    question: "Which quantity is a vector?",
    choices: ["Speed", "Distance", "Velocity", "Time"],
    correctIndex: 2,
    explanation: "Velocity has both magnitude and direction, making it a vector. Speed and distance are scalars (magnitude only), and time is a scalar.",
    commonMistake: "Students sometimes think 'speed' and 'velocity' are interchangeable terms rather than the scalar and vector versions of the same idea."
  },
  {
    question: "A car starts at rest and accelerates at 4 m/s² for 5 seconds. How far does it travel?",
    choices: ["20 m", "50 m", "40 m", "10 m"],
    correctIndex: 1,
    explanation: "Use Δx = v₀t + ½at². With v₀ = 0: Δx = ½(4)(5²) = ½(4)(25) = 50 m.",
    commonMistake: "A common error is forgetting the ½ in front of at², or using v = at (25 m... wait, final velocity) instead of the displacement equation — mixing up 'final velocity' with 'distance traveled.'"
  },
  {
    question: "Two position-vs-time graphs both show straight lines, but Line A is steeper than Line B. What does that tell you?",
    choices: [
      "Line A represents a faster (greater magnitude) velocity than Line B",
      "Line A represents a greater acceleration than Line B",
      "Line A traveled a greater distance than Line B, no matter the time interval",
      "The lines cannot be compared without a v-t graph"
    ],
    correctIndex: 0,
    explanation: "On a position-vs-time graph, slope = velocity. A steeper straight line means a larger-magnitude (faster) constant velocity. Straight lines on an x-t graph mean acceleration is zero for both.",
    commonMistake: "Students often think a steeper x-t line means 'more acceleration.' Straight lines on x-t graphs always represent constant velocity (zero acceleration) — only curved x-t lines involve acceleration."
  },
  {
    question: "An object's velocity changes from +12 m/s to -4 m/s in 4 seconds. What is its average acceleration?",
    choices: ["+4 m/s²", "-4 m/s²", "+2 m/s²", "-2 m/s²"],
    correctIndex: 1,
    explanation: "a = Δv / Δt = (v_f − v_i) / t = (−4 − 12) / 4 = −16 / 4 = −4 m/s².",
    commonMistake: "Students often compute (v_i − v_f) instead of (v_f − v_i), or forget to keep the negative sign on v_f, flipping the sign of the final answer."
  }
];
