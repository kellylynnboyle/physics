// Question bank for the interactive quizzes.
// Each question: q (prompt), choices (array), answer (index into choices),
// why (explanation shown after answering), miss (the misconception that makes it commonly missed).
// Use g = 9.8 m/s^2 throughout.
window.QUIZ = [
  {
    id: "kinematics",
    title: "Kinematics",
    standards: "Foundation for HS-PS2-1",
    questions: [
      {
        q: "A ball is thrown straight up. At the very top of its path, what is its acceleration (ignore air resistance)?",
        choices: ["0 m/s²", "9.8 m/s² downward", "9.8 m/s² upward", "It depends on how hard it was thrown"],
        answer: 1,
        why: "Gravity acts the whole time, so the acceleration is 9.8 m/s² downward at every point. At the top the velocity is momentarily zero, but velocity is changing, so acceleration is not zero.",
        miss: "Confusing 'velocity = 0' with 'acceleration = 0'."
      },
      {
        q: "A runner completes one full 400 m lap and ends where she started. What are her distance and displacement?",
        choices: ["Distance 0 m, displacement 400 m", "Distance 400 m, displacement 0 m", "Both are 400 m", "Both are 0 m"],
        answer: 1,
        why: "Distance is the total path length (400 m). Displacement is the straight-line change in position from start to finish, which is 0 m because she is back where she began.",
        miss: "Treating distance and displacement as the same quantity."
      },
      {
        q: "You drive 60 km at 30 km/h, then another 60 km at 60 km/h. What is your average speed for the whole trip?",
        choices: ["45 km/h", "40 km/h", "30 km/h", "50 km/h"],
        answer: 1,
        why: "Average speed = total distance / total time. Times: 60/30 = 2 h and 60/60 = 1 h, so 120 km in 3 h = 40 km/h. Averaging the two speeds (45) is wrong because you spent more time at the slower speed.",
        miss: "Averaging the speeds instead of using total distance over total time."
      },
      {
        q: "On a velocity–time graph, an object's velocity goes from 0 to 20 m/s in 5 s at a constant rate. What is its acceleration?",
        choices: ["100 m/s²", "4 m/s²", "20 m/s²", "0.25 m/s²"],
        answer: 1,
        why: "Acceleration is the slope of a v–t graph: Δv/Δt = 20 m/s ÷ 5 s = 4 m/s².",
        miss: "Multiplying instead of dividing, or reading the final velocity as the acceleration."
      },
      {
        q: "For the same graph (0 to 20 m/s in 5 s at a constant rate), how far does the object travel in those 5 s?",
        choices: ["100 m", "50 m", "20 m", "25 m"],
        answer: 1,
        why: "Displacement is the area under a v–t graph. The area is a triangle: ½ × 5 s × 20 m/s = 50 m.",
        miss: "Using v × t (100 m) as if the object moved at its final speed the whole time."
      },
      {
        q: "A car has a negative velocity and a negative acceleration. What is happening to its speed?",
        choices: ["It is slowing down", "It is speeding up", "It is moving at constant speed", "Cannot be determined"],
        answer: 1,
        why: "When velocity and acceleration point the same direction (both negative here), speed increases. 'Negative acceleration' does not automatically mean slowing down.",
        miss: "Believing negative acceleration always means slowing down."
      },
      {
        q: "A rock is dropped from rest. How fast is it moving after 2.0 s of free fall (ignore air resistance)?",
        choices: ["9.8 m/s", "19.6 m/s", "39.2 m/s", "4.9 m/s"],
        answer: 1,
        why: "v = v₀ + gt = 0 + (9.8)(2.0) = 19.6 m/s. Speed grows by 9.8 m/s every second.",
        miss: "Mixing up v = gt with d = ½gt²."
      },
      {
        q: "How far does a rock dropped from rest fall in 3.0 s (ignore air resistance)?",
        choices: ["29.4 m", "44.1 m", "88.2 m", "14.7 m"],
        answer: 1,
        why: "d = ½gt² = ½(9.8)(3.0)² = 44.1 m. Distance depends on t squared, not t.",
        miss: "Forgetting the ½ or the square, giving gt (29.4 m) or gt² (88.2 m)."
      },
      {
        q: "A car moving at 20 m/s brakes with a constant acceleration of −5 m/s². How far does it travel before stopping?",
        choices: ["4 m", "20 m", "40 m", "80 m"],
        answer: 2,
        why: "Use v² = v₀² + 2ad: 0 = 400 + 2(−5)d, so d = 40 m. Stopping distance depends on the square of the initial speed.",
        miss: "Computing time (4 s) and stopping, or forgetting the speed is squared."
      },
      {
        q: "On a position–time graph, an object's line is perfectly horizontal. What does this tell you?",
        choices: ["It is moving at constant speed", "It is accelerating", "It is at rest", "It is in free fall"],
        answer: 2,
        why: "The slope of an x–t graph is velocity. A horizontal line has zero slope, so the velocity is zero: the object is at rest (its position isn't changing).",
        miss: "Reading a graph as a picture of the path instead of as position versus time."
      }
    ]
  },
  {
    id: "projectile",
    title: "Projectile Motion",
    standards: "Foundation for HS-PS2-1",
    questions: [
      {
        q: "A projectile is in flight with no air resistance. What is true of its horizontal velocity?",
        choices: ["It decreases steadily", "It stays constant", "It increases steadily", "It is zero at the peak"],
        answer: 1,
        why: "No horizontal force acts, so horizontal acceleration is zero and the horizontal velocity is constant throughout the flight.",
        miss: "Thinking a 'force of the throw' keeps acting on the projectile."
      },
      {
        q: "One ball is dropped from a table while an identical ball is rolled horizontally off the table at the same instant. Which hits the floor first?",
        choices: ["The dropped ball", "The rolled ball", "They land at the same time", "It depends on the rolling speed"],
        answer: 2,
        why: "Vertical and horizontal motion are independent. Both balls start with zero vertical velocity and fall the same height with the same acceleration, so they land together.",
        miss: "Believing horizontal speed affects the fall time."
      },
      {
        q: "At the very top of its flight, a projectile launched at an angle has which velocity?",
        choices: ["Zero", "Only a horizontal component", "Only a vertical component", "Equal horizontal and vertical components"],
        answer: 1,
        why: "At the peak the vertical velocity is zero, but the horizontal component is unchanged, so the projectile is still moving sideways at v₀cosθ.",
        miss: "Thinking the projectile stops completely at the top."
      },
      {
        q: "Ignoring air resistance and starting and landing at the same height, which launch angle gives the greatest range?",
        choices: ["30°", "45°", "60°", "90°"],
        answer: 1,
        why: "Range = v₀² sin(2θ)/g is largest when sin(2θ) = 1, i.e. θ = 45°.",
        miss: "Assuming a steeper angle always sends the object farther."
      },
      {
        q: "Two balls are launched at the same speed, one at 30° and one at 60°. Ignoring air resistance, how do their ranges compare?",
        choices: ["30° goes farther", "60° goes farther", "They have the same range", "Cannot be determined"],
        answer: 2,
        why: "Complementary angles (adding to 90°) give the same range because sin(60°) = sin(120°). The 60° ball is just higher and in the air longer.",
        miss: "Not knowing that complementary angles have equal range."
      },
      {
        q: "A ball is kicked horizontally at 10 m/s from a 20 m cliff. About how long is it in the air?",
        choices: ["1.0 s", "2.0 s", "4.0 s", "10 s"],
        answer: 1,
        why: "Time depends only on vertical motion: 20 = ½(9.8)t², so t ≈ 2.0 s. The 10 m/s horizontal speed doesn't matter for time (it gives a range of about 20 m).",
        miss: "Using the horizontal speed to find the fall time."
      },
      {
        q: "A ball is launched at 50 m/s at 30° above the horizontal. What are its initial horizontal and vertical velocity components?",
        choices: ["vₓ = 25 m/s, v_y = 43.3 m/s", "vₓ = 43.3 m/s, v_y = 25 m/s", "vₓ = 50 m/s, v_y = 25 m/s", "vₓ = 25 m/s, v_y = 25 m/s"],
        answer: 1,
        why: "vₓ = 50cos30° = 43.3 m/s and v_y = 50sin30° = 25 m/s. Cosine goes with the component next to the angle (horizontal here).",
        miss: "Swapping sine and cosine."
      },
      {
        q: "What is the acceleration of a projectile at the top of its path (ignore air resistance)?",
        choices: ["0 m/s²", "9.8 m/s² downward", "9.8 m/s² forward", "Greater than 9.8 m/s² downward"],
        answer: 1,
        why: "Gravity is the only force, so acceleration is 9.8 m/s² downward everywhere along the path, including the peak.",
        miss: "Thinking acceleration is zero when vertical velocity is zero."
      },
      {
        q: "A ball is launched with an initial vertical velocity of 19.6 m/s upward and lands at the same height. What is its total time in the air?",
        choices: ["2.0 s", "4.0 s", "6.0 s", "1.0 s"],
        answer: 1,
        why: "Time to the peak is v_y/g = 19.6/9.8 = 2.0 s. Coming down takes the same time, so the total is 4.0 s.",
        miss: "Stopping at the time to reach the peak."
      },
      {
        q: "A soccer ball is kicked at the same angle but with twice the launch speed (same starting and landing height, no air resistance). By what factor does its range increase?",
        choices: ["2", "4", "8", "It stays the same"],
        answer: 1,
        why: "Range = v₀² sin(2θ)/g, so range is proportional to v₀². Doubling the speed multiplies range by 4.",
        miss: "Assuming range scales linearly with speed."
      }
    ]
  },
  {
    id: "newton",
    title: "Newton's Laws",
    standards: "HS-PS2-1",
    questions: [
      {
        q: "A hockey puck slides across ice at a constant velocity. What is the net force on it (ignore friction and air resistance)?",
        choices: ["A forward force equal to its weight", "A forward force that keeps it moving", "Zero", "A force equal to its mass"],
        answer: 2,
        why: "By Newton's first law, constant velocity means zero net force. A force is needed to change motion, not to maintain it.",
        miss: "Believing a force is required to keep an object moving."
      },
      {
        q: "A 2 kg object is pushed by a net force of 10 N. What is its acceleration?",
        choices: ["0.2 m/s²", "5 m/s²", "20 m/s²", "12 m/s²"],
        answer: 1,
        why: "a = F/m = 10 N ÷ 2 kg = 5 m/s².",
        miss: "Multiplying F by m instead of dividing."
      },
      {
        q: "A truck collides head-on with a small car. During the collision, how does the force the truck exerts on the car compare with the force the car exerts on the truck?",
        choices: ["The truck exerts a larger force", "The car exerts a larger force", "The forces are equal in size", "It depends on their speeds"],
        answer: 2,
        why: "Newton's third law: the two forces are equal in magnitude and opposite in direction. The car has a bigger acceleration because its mass is smaller (a = F/m).",
        miss: "Thinking the larger or faster object pushes harder."
      },
      {
        q: "A 5 kg object is taken from Earth to the Moon (g ≈ 1.6 m/s²). Which statement is correct?",
        choices: ["Mass is 5 kg on both; weight is smaller on the Moon", "Mass and weight are both smaller on the Moon", "Mass is smaller on the Moon; weight is unchanged", "Mass and weight are both unchanged"],
        answer: 0,
        why: "Mass is the amount of matter and doesn't change (5 kg). Weight = mg: 49 N on Earth but only 8 N on the Moon.",
        miss: "Using 'mass' and 'weight' as synonyms."
      },
      {
        q: "A 70 kg person stands on a scale in an elevator that is accelerating upward at 2 m/s². Compared with the reading at rest, the scale reads:",
        choices: ["Less", "The same", "More", "Zero"],
        answer: 2,
        why: "N − mg = ma, so N = m(g + a) = 70(11.8) ≈ 826 N, more than the resting 686 N. Upward acceleration increases the normal force.",
        miss: "Assuming weight can't change, or confusing velocity with acceleration."
      },
      {
        q: "A book rests on a table. The Earth's pull on the book (its weight) is one force. What is its Newton's third-law partner?",
        choices: ["The normal force of the table on the book", "The book's pull on the Earth", "The table's weight", "Friction"],
        answer: 1,
        why: "Third-law pairs act on different objects and are the same type of force. Earth pulls on the book, so the book pulls on the Earth. The normal force just happens to balance the weight; it is not its third-law partner.",
        miss: "Picking the normal force as the 'reaction' to weight."
      },
      {
        q: "You push a crate across a floor at a constant velocity with a horizontal 50 N force. How large is the friction force on the crate?",
        choices: ["Less than 50 N", "Exactly 50 N", "More than 50 N", "Zero"],
        answer: 1,
        why: "Constant velocity means zero net force, so friction must balance the push: 50 N in the opposite direction.",
        miss: "Thinking you must push harder than friction to keep it moving."
      },
      {
        q: "A 3 kg block has a 20 N force pushing it right and a 5 N force pushing it left. What is its acceleration?",
        choices: ["8.3 m/s² right", "5 m/s² right", "5 m/s² left", "15 m/s² right"],
        answer: 1,
        why: "Net force = 20 − 5 = 15 N to the right; a = 15/3 = 5 m/s² to the right. Always find the net force first.",
        miss: "Using one of the forces instead of the net force."
      },
      {
        q: "The same net force is applied to two carts. Cart B has twice the mass of cart A. How do their accelerations compare?",
        choices: ["B's is half of A's", "B's is double A's", "They are equal", "B's is one quarter of A's"],
        answer: 0,
        why: "a = F/m, so doubling the mass halves the acceleration for the same net force.",
        miss: "Not recognizing acceleration is inversely proportional to mass."
      },
      {
        q: "A 10 kg block slides down a frictionless 30° incline. What is its acceleration?",
        choices: ["9.8 m/s²", "8.5 m/s²", "4.9 m/s²", "0 m/s²"],
        answer: 2,
        why: "Only the component of gravity along the incline accelerates the block: a = g sin30° = 9.8 × 0.5 = 4.9 m/s², independent of mass.",
        miss: "Using the full weight along the incline, or including the mass."
      }
    ]
  },
  {
    id: "momentum",
    title: "Momentum",
    standards: "HS-PS2-2, HS-PS2-3",
    questions: [
      {
        q: "What is the momentum of a 1000 kg car moving at 20 m/s?",
        choices: ["50 kg·m/s", "20,000 kg·m/s", "200,000 kg·m/s", "10,000 kg·m/s"],
        answer: 1,
        why: "p = mv = 1000 × 20 = 20,000 kg·m/s.",
        miss: "Mixing momentum (mv) up with kinetic energy (½mv²)."
      },
      {
        q: "A constant 10 N net force acts on a 2 kg object for 3 s. What is the change in the object's momentum?",
        choices: ["6 kg·m/s", "15 kg·m/s", "30 kg·m/s", "60 kg·m/s"],
        answer: 2,
        why: "Impulse = FΔt = 10 × 3 = 30 N·s, and impulse equals change in momentum, so Δp = 30 kg·m/s. Mass is not needed for this step.",
        miss: "Not connecting impulse to momentum change."
      },
      {
        q: "Why does an airbag reduce injury in a crash?",
        choices: ["It reduces the passenger's change in momentum", "It increases the time over which the momentum changes, reducing the force", "It makes the car stop faster", "It reduces the passenger's mass"],
        answer: 1,
        why: "The passenger's Δp is the same with or without an airbag. FΔt = Δp, so a longer stopping time Δt means a smaller average force F.",
        miss: "Thinking the airbag changes the momentum change rather than the time."
      },
      {
        q: "In a perfectly inelastic collision (objects stick together), which is conserved?",
        choices: ["Momentum only", "Kinetic energy only", "Both momentum and kinetic energy", "Neither"],
        answer: 0,
        why: "Momentum is conserved in every collision with no net external force. Kinetic energy is lost to heat, sound and deformation in an inelastic collision.",
        miss: "Believing 'conserved' applies to kinetic energy in all collisions."
      },
      {
        q: "A 2 kg cart moving at 3 m/s hits a 1 kg cart at rest and they stick together. What is their speed afterward?",
        choices: ["1 m/s", "2 m/s", "3 m/s", "1.5 m/s"],
        answer: 1,
        why: "m₁v₁ = (m₁+m₂)v′: 2 × 3 = 3 × v′, so v′ = 2 m/s.",
        miss: "Forgetting to use the combined mass after the collision."
      },
      {
        q: "Two identical balls hit a wall at the same speed. Ball A sticks to the wall. Ball B bounces back at the same speed. Which receives the larger impulse?",
        choices: ["Ball A", "Ball B", "Both receive the same impulse", "Neither receives an impulse"],
        answer: 1,
        why: "Take toward the wall as positive: A changes from +mv to 0, so Δp = −mv. B changes from +mv to −mv, so Δp = −2mv. B's momentum change, and therefore its impulse, is twice as large.",
        miss: "Forgetting that momentum is a vector and a bounce reverses its sign."
      },
      {
        q: "A 50 kg skater at rest throws a 5 kg ball forward at 10 m/s on frictionless ice. What is the skater's velocity?",
        choices: ["1 m/s backward", "1 m/s forward", "10 m/s backward", "0.1 m/s backward"],
        answer: 0,
        why: "Total momentum starts at 0 and must stay 0. 5(10) + 50v = 0 gives v = −1 m/s: 1 m/s in the opposite direction.",
        miss: "Ignoring direction or the skater's mass."
      },
      {
        q: "Two identical cars approach each other head-on at the same speed. What is the total momentum of the system?",
        choices: ["Twice one car's momentum", "Equal to one car's momentum", "Zero", "It depends on the speed"],
        answer: 2,
        why: "Momentum is a vector. Equal and opposite momenta cancel, so the total is zero regardless of the speed.",
        miss: "Adding magnitudes instead of vectors."
      },
      {
        q: "If an object's speed doubles, what happens to its momentum and its kinetic energy?",
        choices: ["Momentum ×2, KE ×2", "Momentum ×2, KE ×4", "Momentum ×4, KE ×2", "Momentum ×4, KE ×4"],
        answer: 1,
        why: "p = mv scales with v, so it doubles. KE = ½mv² scales with v², so it quadruples.",
        miss: "Treating momentum and kinetic energy as scaling the same way."
      },
      {
        q: "During a collision between two objects, how do their changes in momentum compare?",
        choices: ["Equal in size and in the same direction", "Equal in size and opposite in direction", "The heavier object's change is larger", "The faster object's change is larger"],
        answer: 1,
        why: "By Newton's third law the forces are equal and opposite for the same time, so the impulses (and momentum changes) are equal and opposite. That's why the total momentum is conserved.",
        miss: "Thinking the larger object always experiences the larger momentum change."
      }
    ]
  },
  {
    id: "energy",
    title: "Work & Energy",
    standards: "HS-PS3-1, HS-PS3-2, HS-PS3-3",
    questions: [
      {
        q: "You carry a heavy box horizontally at a constant speed across a room. How much work does your upward lifting force do on the box?",
        choices: ["Equal to the box's weight times the distance", "Zero", "Equal to the box's kinetic energy", "Negative"],
        answer: 1,
        why: "Work = Fd cosθ. Your lifting force is vertical and the displacement is horizontal (θ = 90°), so cos90° = 0 and no work is done by that force.",
        miss: "Thinking effort or force alone means work is done."
      },
      {
        q: "A 20 N force pushes a crate 5 m in the direction of the force. How much work is done?",
        choices: ["4 J", "25 J", "100 J", "100 W"],
        answer: 2,
        why: "W = Fd = 20 × 5 = 100 J. Work is measured in joules; watts measure power.",
        miss: "Confusing units: J (work) vs W (power)."
      },
      {
        q: "What is the kinetic energy of a 2 kg object moving at 3 m/s?",
        choices: ["6 J", "9 J", "18 J", "3 J"],
        answer: 1,
        why: "KE = ½mv² = ½(2)(3²) = 9 J. Square the speed before multiplying.",
        miss: "Forgetting to square v (or the ½)."
      },
      {
        q: "A 3 kg book is lifted 2 m to a shelf. How much gravitational potential energy does it gain?",
        choices: ["6 J", "29.4 J", "58.8 J", "117.6 J"],
        answer: 2,
        why: "ΔPE = mgh = 3 × 9.8 × 2 = 58.8 J.",
        miss: "Leaving out g."
      },
      {
        q: "A ball is dropped from 5 m. Ignoring air resistance, about how fast is it moving just before it hits the ground?",
        choices: ["4.9 m/s", "9.9 m/s", "49 m/s", "25 m/s"],
        answer: 1,
        why: "mgh = ½mv², so v = √(2gh) = √(2 × 9.8 × 5) ≈ 9.9 m/s. The mass cancels.",
        miss: "Not recognizing that the mass cancels, or skipping the square root."
      },
      {
        q: "A student lifts a 50 N box 10 m in 5 s. What is the power developed?",
        choices: ["500 W", "100 W", "250 W", "10 W"],
        answer: 1,
        why: "Work = 50 × 10 = 500 J. Power = work/time = 500 J ÷ 5 s = 100 W.",
        miss: "Reporting the work as the power."
      },
      {
        q: "A 1000 kg car speeds up from 10 m/s to 20 m/s. How much net work was done on it?",
        choices: ["10,000 J", "50,000 J", "150,000 J", "200,000 J"],
        answer: 2,
        why: "Work-energy theorem: W = ΔKE = ½(1000)(20² − 10²) = 500 × 300 = 150,000 J. It is not ½m(Δv)², which would give 50,000 J.",
        miss: "Squaring the change in speed instead of taking the difference of the squares."
      },
      {
        q: "Two frictionless roller-coaster tracks start at the same height. Track A is a straight slope; track B has dips and hills but never rises above the start. How do the speeds at the bottom compare?",
        choices: ["A is faster", "B is faster", "They are equal", "It depends on the length of track"],
        answer: 2,
        why: "With no friction, energy is conserved: the speed at a given height depends only on the drop in height, not on the shape of the path.",
        miss: "Thinking path length or shape changes the final speed."
      },
      {
        q: "A block slides across a rough floor and comes to a stop. Where did its kinetic energy go?",
        choices: ["It was destroyed", "It became thermal energy (the block and floor warm up)", "It became gravitational potential energy", "It was stored as momentum"],
        answer: 1,
        why: "Energy is conserved. Friction converts the block's kinetic energy into thermal energy of the block and floor.",
        miss: "Thinking friction destroys energy."
      },
      {
        q: "A spring with k = 200 N/m is compressed 0.10 m. How much elastic potential energy is stored?",
        choices: ["1.0 J", "2.0 J", "20 J", "10 J"],
        answer: 0,
        why: "PE = ½kx² = ½(200)(0.10)² = 1.0 J. The compression is squared.",
        miss: "Forgetting to square x or using kx (20 N) as energy."
      }
    ]
  }
];
