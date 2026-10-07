module.exports = {
  id: "projectile",
  number: 2,
  title: "Projectile Motion",
  tagline: "Two independent motions at once",
  standards: [
    { code: "HS-PS2-1", note: "Use Newton's second law with gravity as the only force to predict the motion of a launched object." }
  ],
  practices: ["Using Mathematics and Computational Thinking", "Developing and Using Models"],
  crosscutting: ["Systems and System Models", "Cause and Effect"],
  bigIdea: "A projectile's horizontal and vertical motions are independent: constant velocity sideways, constant downward acceleration vertically.",
  concepts: [
    { term: "Independence of components", def: "Horizontal and vertical motion are analyzed separately and linked only by the shared time of flight." },
    { term: "Horizontal motion", def: "With no air resistance there is no horizontal force, so aₓ = 0 and vₓ is constant: x = vₓt." },
    { term: "Vertical motion", def: "Gravity gives a_y = −9.8 m/s² the entire flight. Use the kinematic equations in y." },
    { term: "Vector components", def: "For launch speed v at angle θ: vₓ = v cos θ and v_y = v sin θ." },
    { term: "Key points in flight", def: "At the peak v_y = 0 (but vₓ ≠ 0 and a_y is still −9.8). Time up = time down for a launch and landing at the same height." },
    { term: "Range and angle", def: "Range = v² sin 2θ / g on level ground. Maximum at 45°; complementary angles (30° and 60°) give equal range." },
    { term: "Horizontal launch", def: "Launched horizontally from height h: v_y,0 = 0, so t = √(2h/g), independent of launch speed." }
  ],
  objectives: [
    { id: "P1", verb: "Resolve", text: "I can resolve a launch velocity into horizontal and vertical components.", criteria: "Correct use of sin/cos with the launch angle in 4 of 5 problems." },
    { id: "P2", verb: "Explain", text: "I can explain why horizontal and vertical motions are independent.", criteria: "Explanation names aₓ = 0 and a_y = −g and uses the 'dropped vs. fired' comparison." },
    { id: "P3", verb: "Solve", text: "I can solve horizontal-launch problems (time, range, impact velocity).", criteria: "Finds t from the vertical motion first, then x = vₓt." },
    { id: "P4", verb: "Solve", text: "I can solve angled-launch problems for time of flight, maximum height, and range.", criteria: "Separates components, uses symmetry, includes units." },
    { id: "P5", verb: "Predict", text: "I can predict how changing launch speed, angle, or height changes the trajectory.", criteria: "Predictions are justified with equations or a simulation, then tested." }
  ],
  cornell: {
    topic: "Projectile Motion",
    cues: [
      { cue: "What is a projectile?", notes: "Any object launched and moving under the influence of gravity alone (air resistance ignored). The path is a parabola." },
      { cue: "Why can we split the motion into x and y?", notes: "Gravity acts only vertically, so it cannot change horizontal velocity. The two motions are independent and share only the time t." },
      { cue: "What happens horizontally?", notes: "aₓ = 0 → constant vₓ. Use x = vₓt." },
      { cue: "What happens vertically?", notes: "a_y = −9.8 m/s² the whole time. Use v_y = v_y0 − gt and y = y₀ + v_y0·t − ½gt²." },
      { cue: "How do I break up the launch velocity?", notes: "vₓ = v cos θ, v_y0 = v sin θ (θ measured from the horizontal). Draw the triangle first." },
      { cue: "What is true at the top?", notes: "v_y = 0, vₓ unchanged, a = 9.8 m/s² down. Speed is at its minimum, not zero (unless launched straight up)." },
      { cue: "Which angle gives max range?", notes: "45° on level ground. θ and (90° − θ) give the same range. Higher angle = more time but less horizontal speed." },
      { cue: "How do I solve a cliff launch?", notes: "1) Vertical: find t from h = ½gt². 2) Horizontal: x = vₓt. 3) Impact velocity: v_y = gt, combine with vₓ using Pythagoras." }
    ],
    summary: "Projectile motion is the superposition of constant-velocity motion horizontally and constant-acceleration (free-fall) motion vertically. Resolve the launch velocity into components, solve each direction separately, and connect them through the shared time of flight. Symmetry (for level ground) lets you find total time as twice the time to the peak, and range is greatest at 45°."
  },
  quiz: [
    { q: "A ball is rolled horizontally off a table at the same instant a second ball is dropped from the same height. Which hits the floor first?", options: ["The dropped ball", "The rolling ball", "They land at the same time", "Cannot be determined"], answer: 2, misconception: "Horizontal speed affects fall time", explain: "Both start with zero vertical velocity and share the same vertical acceleration and height, so they take the same time to fall. Horizontal speed has no effect on that." },
    { q: "At the highest point of a projectile's path (launched at an angle), which statement is true?", options: ["Velocity is zero", "Acceleration is zero", "Vertical velocity is zero, horizontal velocity is not", "Horizontal velocity is zero"], answer: 2, misconception: "Everything stops at the top", explain: "Only the vertical component is zero at the peak. The horizontal velocity stays constant, and gravity still accelerates the object downward." },
    { q: "Ignoring air resistance, what horizontal force acts on a ball once it leaves the bat?", options: ["A forward force from the bat that fades", "A force equal to its weight", "No horizontal force", "A force proportional to its speed"], answer: 2, misconception: "Motion requires a continuing force", explain: "After the ball leaves the bat the only force is gravity (vertical). The ball keeps its horizontal velocity by inertia." },
    { q: "On level ground, which launch angle gives the greatest range for a given speed (no air resistance)?", options: ["30°", "45°", "60°", "90°"], answer: 1, misconception: "Higher launch = farther", explain: "Range ∝ sin 2θ, which is maximized at θ = 45°. A 90° launch goes straight up with zero range." },
    { q: "Two balls launched at the same speed, one at 30° and one at 60°. Compare their ranges and flight times.", options: ["Same range; the 60° ball stays in the air longer", "Same range; same time", "The 60° ball goes farther and stays longer", "The 30° ball goes farther"], answer: 0, misconception: "Equal range implies equal time", explain: "Complementary angles give equal range, but the 60° launch has a larger vertical component, so it spends more time in the air (with a smaller horizontal speed)." },
    { q: "A projectile is launched at 20 m/s at 30° above the horizontal. What is its initial vertical velocity?", options: ["17.3 m/s", "10 m/s", "20 m/s", "34.6 m/s"], answer: 1, misconception: "Mixing up sin and cos", explain: "v_y = v sin θ = 20 sin 30° = 10 m/s. The 17.3 m/s value is the horizontal component (20 cos 30°)." },
    { q: "A ball is kicked horizontally off a cliff at 10 m/s and lands 20 m from the base. If it is kicked at 20 m/s from the same cliff, where does it land?", options: ["20 m", "40 m", "80 m", "10 m"], answer: 1, misconception: "Speed changes the fall time", explain: "Fall time depends only on cliff height, so it is unchanged. Range = vₓ·t doubles when vₓ doubles: 40 m." },
    { q: "Which quantity is constant throughout the flight of a projectile (no air resistance)?", options: ["Speed", "Vertical velocity", "Horizontal velocity", "Velocity"], answer: 2, misconception: "Confusing velocity components with total velocity", explain: "Horizontal velocity is constant because aₓ = 0. Speed and vertical velocity change continuously, so the velocity vector changes too." }
  ],
  practice: [
    { problem: "A ball is kicked horizontally at 15 m/s from a 20 m cliff. Find the time of flight and the horizontal distance traveled.", answer: "t = √(2·20/9.8) = 2.0 s; x = 15 × 2.02 ≈ 30 m." },
    { problem: "A projectile is launched at 25 m/s at 30° on level ground. Find the time of flight, maximum height, and range.", answer: "vₓ = 21.7 m/s, v_y0 = 12.5 m/s. t = 2(12.5)/9.8 = 2.55 s. H = 12.5²/(2·9.8) = 8.0 m. R = 21.7 × 2.55 ≈ 55 m." },
    { problem: "At what other launch angle would the 30° projectile above have the same range?", answer: "60° (complementary angle), with a longer time of flight and greater maximum height." },
    { problem: "A stone is thrown horizontally at 8.0 m/s from a bridge and hits the water 2.0 s later. How high is the bridge, and what is the stone's speed at impact?", answer: "h = ½(9.8)(2.0)² = 19.6 m. v_y = 19.6 m/s; speed = √(8.0² + 19.6²) ≈ 21 m/s." },
    { problem: "A basketball is released at a fixed speed and angle. Explain how the flight time and range change if the player jumps and releases the ball from a higher point.", answer: "Flight time and range both increase slightly because the ball starts higher and has more vertical distance to fall; the shape stays a parabola." }
  ],
  resources: [
    { name: "PhET: Projectile Motion", type: "Simulation", url: "https://phet.colorado.edu", use: "Vary angle, speed, and height; toggle air resistance; compare components." },
    { name: "The Physics Classroom: Projectiles", type: "Tutorial + practice", url: "https://www.physicsclassroom.com", use: "Horizontal vs. angled launch walkthroughs." },
    { name: "Khan Academy: Two-dimensional projectile motion", type: "Video + exercises", url: "https://www.khanacademy.org", use: "Component practice." },
    { name: "OpenStax High School Physics, Ch. 3", type: "Free textbook", url: "https://openstax.org", use: "Worked examples with vectors." },
    { name: "Lab idea: Marble launch & landing target", type: "Hands-on lab", url: "", use: "Predict the landing point of a marble leaving a ramp, then test; calculate % error." },
    { name: "Phone video analysis (e.g., Tracker, free)", type: "Technology", url: "", use: "Film a thrown ball; plot x–t and y–t to confirm independence of components." }
  ],
  applications: [
    "Sports: optimal launch angle for shot put, long jump, basketball free throws, and soccer free kicks (a bit under 45° when release height is above landing height).",
    "Emergency response: water arc from a fire hose reaching a window.",
    "Engineering: designing fountains, sprinklers, and conveyor drop-offs.",
    "Space science: horizontal launch at orbital speed is projectile motion where the ground curves away."
  ]
};
