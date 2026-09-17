const QUIZ_TITLE = "Projectile Motion — Most-Missed Questions";
const QUIZ_INTRO = "These are the question types students get wrong most often on projectile motion tests. Read the full explanation after every answer, even the ones you get right.";

const QUIZ_DATA = [
  {
    question: "A projectile is launched at an angle above the horizontal. At the very top of its trajectory, what is true of its velocity?",
    choices: [
      "Velocity is exactly zero",
      "Vertical velocity is zero; horizontal velocity is unchanged and nonzero",
      "Horizontal velocity is zero; vertical velocity is unchanged",
      "Both components are zero momentarily, then restart"
    ],
    correctIndex: 1,
    explanation: "At the peak, only the vertical velocity component is momentarily zero. The horizontal velocity component never changes during flight (no horizontal acceleration), so the object is still moving horizontally at the top.",
    commonMistake: "Students often think the whole object stops at the peak. Only vertical motion pauses (v_y = 0); horizontal motion continues unaffected."
  },
  {
    question: "A ball is launched horizontally off a 20 m cliff at 15 m/s, while an identical ball is simply dropped from the same cliff at the same instant. Which ball hits the ground first?",
    choices: [
      "The launched ball, because it has more energy",
      "The dropped ball, because it falls straight down",
      "They hit the ground at the same time",
      "Cannot be determined without knowing the launch angle"
    ],
    correctIndex: 2,
    explanation: "Vertical motion is independent of horizontal motion. Both balls have the same initial vertical velocity (0) and the same vertical acceleration (-g), so they fall for the same amount of time regardless of horizontal speed.",
    commonMistake: "Students assume the ball moving faster/farther takes longer to fall. Horizontal speed has zero effect on fall time when both start with the same vertical velocity."
  },
  {
    question: "A projectile is launched on level ground at 40° above the horizontal. At what other angle would it achieve the SAME range (same launch speed)?",
    choices: ["40°", "50°", "80°", "None — 40° is unique"],
    correctIndex: 1,
    explanation: "Complementary launch angles (θ and 90°−θ) produce the same range on level ground, because range depends on sin(2θ), and sin(2·40°) = sin(80°) = sin(180°−80°) = sin(2·50°). So 40° and 50° give equal ranges (though different heights and flight times).",
    commonMistake: "Students forget the complementary-angle relationship and either say 'only 45° matters' or guess a random angle instead of computing 90°−θ."
  },
  {
    question: "During a projectile's flight (ignoring air resistance), what happens to its acceleration at the highest point?",
    choices: [
      "Acceleration becomes zero at the peak",
      "Acceleration remains constant at -g throughout the entire flight",
      "Acceleration reverses direction only at the peak",
      "Acceleration equals the horizontal velocity at that point"
    ],
    correctIndex: 1,
    explanation: "Gravity acts continuously on the projectile from launch to landing. Acceleration is -g (downward) at every point in the flight, including the peak — it never becomes zero just because velocity does.",
    commonMistake: "This is the same free-fall misconception from kinematics, applied to projectiles: confusing zero vertical velocity with zero acceleration."
  },
  {
    question: "Two projectiles are launched with the same speed: one at 30° and one at 60° above horizontal. Which statement is correct?",
    choices: [
      "They have the same range, but the 60° launch reaches a greater maximum height and stays in the air longer",
      "They have the same range and the same maximum height",
      "The 30° launch always goes farther",
      "The 60° launch always goes farther"
    ],
    correctIndex: 0,
    explanation: "30° and 60° are complementary, so they share the same range. But maximum height depends on sin²θ (or equivalently the vertical velocity component), which is larger for the steeper 60° launch — so it goes higher and stays airborne longer, even though it lands at the same horizontal distance.",
    commonMistake: "Students assume 'same range' means 'same everything.' Range being equal does NOT mean flight time or max height are equal."
  },
  {
    question: "A projectile is launched at 20 m/s at 30° above horizontal. What is the horizontal velocity component?",
    choices: ["20 cos(30°) ≈ 17.3 m/s", "20 sin(30°) = 10 m/s", "20 tan(30°) ≈ 11.5 m/s", "20 m/s (unchanged)"],
    correctIndex: 0,
    explanation: "Horizontal component = v₀cosθ = 20 × cos(30°) ≈ 20 × 0.866 ≈ 17.3 m/s.",
    commonMistake: "Students frequently swap sine and cosine — using sinθ for the horizontal component and cosθ for the vertical component instead of the correct pairing (cos → horizontal, sin → vertical, when θ is measured from the horizontal)."
  },
  {
    question: "A heavier cannonball and a lighter cannonball are launched with identical velocity vectors, with air resistance considered negligible for both. How do their trajectories compare?",
    choices: [
      "The heavier ball falls faster and lands sooner",
      "The lighter ball travels farther because it's easier to push",
      "Their trajectories are identical — mass does not affect projectile motion without air resistance",
      "The heavier ball has a flatter trajectory"
    ],
    correctIndex: 2,
    explanation: "Just like free fall, all objects experience the same gravitational acceleration regardless of mass (when air resistance is negligible). Identical launch conditions produce identical trajectories no matter the mass.",
    commonMistake: "Students carry over an intuitive 'heavier = falls faster' belief from everyday experience with air resistance (e.g., a feather vs. a rock), which doesn't apply in the idealized no-air-resistance model used in this unit."
  }
];
