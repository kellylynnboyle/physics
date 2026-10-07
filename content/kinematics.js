module.exports = {
  id: "kinematics",
  number: 1,
  title: "Kinematics",
  tagline: "Describing motion in one dimension",
  standards: [
    { code: "HS-PS2-1", note: "Foundation: students must describe motion (velocity, acceleration) before they can analyze it with Newton's second law." }
  ],
  practices: ["Using Mathematics and Computational Thinking", "Analyzing and Interpreting Data"],
  crosscutting: ["Patterns", "Cause and Effect"],
  bigIdea: "Motion can be described precisely with position, velocity, and acceleration, and the three are linked by rates of change.",
  concepts: [
    { term: "Distance vs. displacement", def: "Distance is the total path length (scalar). Displacement is the straight-line change in position, with direction (vector)." },
    { term: "Speed vs. velocity", def: "Speed = distance / time (scalar). Velocity = displacement / time (vector). Direction matters." },
    { term: "Acceleration", def: "a = Δv / Δt. Any change in velocity (speeding up, slowing down, or turning) is acceleration. Units: m/s²." },
    { term: "Sign and direction", def: "Choose a positive direction. Speeding up means v and a have the same sign; slowing down means opposite signs." },
    { term: "Constant-acceleration equations", def: "v = v₀ + at;  Δx = v₀t + ½at²;  v² = v₀² + 2aΔx;  Δx = ½(v₀ + v)t." },
    { term: "Motion graphs", def: "On x–t, slope = velocity. On v–t, slope = acceleration and area = displacement. On a–t, area = change in velocity." },
    { term: "Free fall", def: "With air resistance ignored, every object near Earth's surface accelerates at g = 9.8 m/s² downward, regardless of mass." }
  ],
  objectives: [
    { id: "K1", verb: "Distinguish", text: "I can distinguish distance from displacement and speed from velocity, and calculate each.", criteria: "Correct quantity chosen, correct sign/direction, correct units in 4 of 5 problems." },
    { id: "K2", verb: "Calculate", text: "I can calculate acceleration from changes in velocity and interpret its sign.", criteria: "Computes a = Δv/Δt and states whether the object is speeding up or slowing down." },
    { id: "K3", verb: "Apply", text: "I can select and apply the constant-acceleration equations to solve multi-step problems.", criteria: "Lists knowns/unknown, picks an equation, shows substitution with units." },
    { id: "K4", verb: "Interpret", text: "I can interpret and sketch x–t, v–t, and a–t graphs for a described motion.", criteria: "Slope and area correctly used; graph matches the verbal description." },
    { id: "K5", verb: "Analyze", text: "I can analyze free-fall motion, including the motion at the top of a toss.", criteria: "Uses a = −9.8 m/s² throughout; explains v = 0 at the top without a = 0." }
  ],
  cornell: {
    topic: "Kinematics: Describing Motion",
    cues: [
      { cue: "What is the difference between distance and displacement?", notes: "Distance = total path traveled (scalar, never negative). Displacement = final position − initial position (vector, can be negative or zero). Round trip: displacement = 0." },
      { cue: "How do speed and velocity differ?", notes: "Speed = distance / time. Velocity = displacement / time and includes direction. A car circling a track at constant speed has changing velocity." },
      { cue: "What is acceleration?", notes: "a = (v − v₀) / t. Unit m/s². It is a vector. Acceleration occurs whenever speed OR direction changes." },
      { cue: "How do I know if an object speeds up or slows down?", notes: "Same sign for v and a → speeding up. Opposite signs → slowing down. Negative a does NOT automatically mean slowing down." },
      { cue: "Which equation do I use?", notes: "Pick the one that has your three knowns and your one unknown and skips the variable you neither know nor want. No time given? v² = v₀² + 2aΔx. No final velocity? Δx = v₀t + ½at²." },
      { cue: "How do I read motion graphs?", notes: "x–t: slope = velocity (steeper = faster). v–t: slope = acceleration, area under curve = displacement. A flat v–t line = constant velocity, a = 0." },
      { cue: "What is free fall?", notes: "Motion with only gravity acting. a = 9.8 m/s² down (use −9.8 if up is positive). Mass does not matter without air resistance. At the top of a toss: v = 0 but a is still 9.8 m/s² down." }
    ],
    summary: "Kinematics describes motion using displacement, velocity, and acceleration. Velocity is the rate of change of position, and acceleration is the rate of change of velocity. For constant acceleration, four equations relate the five variables (v₀, v, a, Δx, t). Graphs encode the same information: slope gives the rate, area gives the accumulated change. Free fall is constant-acceleration motion with a = 9.8 m/s² downward."
  },
  quiz: [
    { q: "A runner completes one full lap of a 400 m track in 80 s and ends where she started. What is her average velocity?", options: ["5 m/s", "0 m/s", "400 m/s", "80 m/s"], answer: 1, misconception: "Confusing distance with displacement", explain: "Average velocity = displacement / time. She finished where she began, so displacement is 0 and average velocity is 0. Her average speed is 400 m / 80 s = 5 m/s." },
    { q: "A ball is tossed straight up. At the very top of its path, what are its velocity and acceleration?", options: ["v = 0, a = 0", "v = 0, a = 9.8 m/s² downward", "v = 9.8 m/s upward, a = 0", "v = 0, a = 9.8 m/s² upward"], answer: 1, misconception: "Zero velocity means zero acceleration", explain: "Gravity acts the whole time, so a = 9.8 m/s² downward even at the top. Velocity is changing from up to down, passing through zero for an instant." },
    { q: "A car has a velocity of +20 m/s and an acceleration of −3 m/s². The car is…", options: ["speeding up", "slowing down", "moving at constant speed", "moving backward"], answer: 1, misconception: "Negative acceleration always means slowing", explain: "Velocity and acceleration have opposite signs, so the car is slowing down. (If both were negative, a negative acceleration would mean speeding up in the negative direction.)" },
    { q: "On a velocity–time graph, a horizontal line at v = +5 m/s means the object is…", options: ["at rest", "speeding up at 5 m/s²", "moving at a constant 5 m/s", "5 m from the origin"], answer: 2, misconception: "Reading the graph as a picture of the path", explain: "A flat v–t line means velocity is not changing: constant velocity, zero acceleration. It is not at rest, since rest would be v = 0." },
    { q: "In a vacuum, a hammer and a feather are dropped from the same height. Which hits the ground first?", options: ["The hammer", "The feather", "They land at the same time", "It depends on the height only"], answer: 2, misconception: "Heavier objects fall faster", explain: "Without air resistance, all objects have the same free-fall acceleration g, so they land together. (Apollo 15 demonstrated this on the Moon.)" },
    { q: "A car starts from rest with constant acceleration. If it travels 10 m in the first 2 s, how far has it traveled after 4 s?", options: ["20 m", "30 m", "40 m", "80 m"], answer: 2, misconception: "Assuming distance is proportional to time", explain: "Δx = ½at², so distance grows with t². Doubling the time quadruples the distance: 4 × 10 m = 40 m." },
    { q: "A car speeds up from 0 to 27 m/s in 6.0 s. What is its average acceleration?", options: ["4.5 m/s²", "162 m/s²", "0.22 m/s²", "27 m/s²"], answer: 0, misconception: "Multiplying instead of dividing", explain: "a = Δv / Δt = 27 / 6.0 = 4.5 m/s². Acceleration is a rate, so divide by time." },
    { q: "A v–t graph shows a constant velocity of 4 m/s for 5 s. What is the displacement during that time?", options: ["0.8 m", "9 m", "20 m", "1.25 m"], answer: 2, misconception: "Not knowing that area under v–t = displacement", explain: "Area of the rectangle = 4 m/s × 5 s = 20 m." }
  ],
  practice: [
    { problem: "A car accelerates from rest at 3.0 m/s² for 8.0 s. Find its final speed and the distance covered.", answer: "v = 24 m/s; Δx = ½(3.0)(8.0)² = 96 m." },
    { problem: "A driver traveling 20 m/s brakes to a stop in 50 m. Find the acceleration and the stopping time.", answer: "a = −v₀²/(2Δx) = −400/100 = −4.0 m/s². t = Δv/a = (0 − 20)/(−4.0) = 5.0 s." },
    { problem: "A rock is dropped from a 45 m cliff (ignore air resistance). How long does it fall and how fast is it moving at impact?", answer: "t = √(2·45/9.8) ≈ 3.0 s; v = gt ≈ 30 m/s (29.7 m/s)." },
    { problem: "A student walks 40 m east in 20 s, then 40 m west in 20 s. Find average speed and average velocity for the whole trip.", answer: "Speed = 80 m / 40 s = 2.0 m/s. Velocity = 0 m / 40 s = 0 m/s." },
    { problem: "A ball is thrown straight up at 14.7 m/s. How long until it returns to the thrower's hand, and how high does it go?", answer: "Time up = 14.7/9.8 = 1.5 s, so total = 3.0 s. Height = v₀²/(2g) = 11.0 m." }
  ],
  resources: [
    { name: "PhET: Moving Man", type: "Simulation", url: "https://phet.colorado.edu", use: "Drag the man and watch x–t, v–t, and a–t graphs update together." },
    { name: "The Physics Classroom: 1-D Kinematics", type: "Tutorial + practice", url: "https://www.physicsclassroom.com", use: "Concept builders and graph-reading practice." },
    { name: "Khan Academy: One-dimensional motion", type: "Video + exercises", url: "https://www.khanacademy.org", use: "Self-paced review of the kinematic equations." },
    { name: "OpenStax High School Physics, Ch. 2", type: "Free textbook", url: "https://openstax.org", use: "Reading and worked examples." },
    { name: "IXL Physics", type: "Adaptive practice", url: "https://www.ixl.com", use: "Skill practice aligned to class cornell-note practice plans." },
    { name: "Lab idea: Ramp & cart motion sensor", type: "Hands-on lab", url: "", use: "Collect x–t data with a motion sensor or phone video analysis; derive v and a from slope." }
  ],
  applications: [
    "Traffic safety: stopping distance grows with the square of speed (v² = 2aΔx), which is why speed limits drop near schools.",
    "Sports analytics: sprint start acceleration and 40-yard-dash splits.",
    "Aviation: runway length requirements from takeoff speed and acceleration.",
    "Accident reconstruction: skid-mark length reveals pre-braking speed."
  ]
};
