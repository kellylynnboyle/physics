// Most-often-missed questions per unit.
// Each question: q (prompt), choices (array), answer (index), why (explanation incl. the misconception).
// Set g = 9.8 m/s^2 unless noted.
window.QUIZ_TOPICS = [
  {
    id: "kinematics",
    title: "Kinematics",
    questions: [
      {
        q: "A ball is thrown straight up. At the very top of its flight, what are its velocity and acceleration?",
        choices: ["v = 0, a = 0", "v = 0, a = 9.8 m/s² downward", "v = 9.8 m/s upward, a = 0", "v = 0, a = 9.8 m/s² upward"],
        answer: 1,
        why: "Misconception: 'zero velocity means zero acceleration.' Gravity still acts at the peak, so a = 9.8 m/s² downward the whole flight."
      },
      {
        q: "A runner completes one full lap of a 400 m track. What are the distance and the displacement?",
        choices: ["400 m and 400 m", "0 and 0", "400 m and 0", "0 and 400 m"],
        answer: 2,
        why: "Distance is total path length (400 m). Displacement is net change in position, which is 0 because the runner ends where they started."
      },
      {
        q: "A car drives 60 km at 30 km/h, then another 60 km at 60 km/h. What is its average speed for the whole trip?",
        choices: ["45 km/h", "40 km/h", "50 km/h", "30 km/h"],
        answer: 1,
        why: "Average speed = total distance / total time = 120 km / (2 h + 1 h) = 40 km/h. Averaging the two speeds (45) is the common error."
      },
      {
        q: "An object has negative velocity and negative acceleration. What is happening to its speed?",
        choices: ["Speeding up", "Slowing down", "Constant speed", "Cannot tell"],
        answer: 0,
        why: "When v and a have the same sign, the object speeds up (here, in the negative direction). Negative acceleration does not always mean slowing down."
      },
      {
        q: "On a velocity–time graph, what does the AREA between the line and the time axis represent?",
        choices: ["Acceleration", "Displacement", "Average speed", "Force"],
        answer: 1,
        why: "Slope of v–t = acceleration; area under v–t = displacement. Students often swap slope and area."
      },
      {
        q: "A car accelerates uniformly from rest to 20 m/s in 5 s. How far does it travel in that time?",
        choices: ["100 m", "50 m", "4 m", "20 m"],
        answer: 1,
        why: "a = 4 m/s², Δx = ½at² = ½(4)(25) = 50 m (or average velocity 10 m/s × 5 s). Using 20 m/s × 5 s = 100 m forgets that the speed was changing."
      },
      {
        q: "A rock is dropped from rest and falls for 2.0 s (no air resistance). How far does it fall?",
        choices: ["9.8 m", "19.6 m", "39.2 m", "4.9 m"],
        answer: 1,
        why: "Δx = ½gt² = ½(9.8)(4) = 19.6 m. Distance grows as t², so doubling the time quadruples the distance."
      },
      {
        q: "A bowling ball and a tennis ball are dropped from the same height in a vacuum. Which hits the ground first?",
        choices: ["Bowling ball", "Tennis ball", "They land together", "Depends on the mass ratio"],
        answer: 2,
        why: "In free fall a = g for every object. Heavier objects feel more gravity but also have more inertia — the effects cancel."
      }
    ]
  },
  {
    id: "projectile",
    title: "Projectile Motion",
    questions: [
      {
        q: "One ball is dropped and an identical ball is shot horizontally from the same height at the same instant. Which lands first (ignore air)?",
        choices: ["The dropped ball", "The horizontally launched ball", "They land at the same time", "Depends on the launch speed"],
        answer: 2,
        why: "Horizontal and vertical motions are independent. Both have v_y = 0 initially and a_y = 9.8 m/s², so they take the same time to fall."
      },
      {
        q: "At the top of its path, a projectile launched at an angle has which of the following?",
        choices: ["Zero velocity and zero acceleration", "Zero vertical velocity and nonzero horizontal velocity", "Zero horizontal velocity and nonzero vertical velocity", "Zero speed"],
        answer: 1,
        why: "v_y = 0 at the peak, but v_x is constant and nonzero, so the speed is not zero. Acceleration is still 9.8 m/s² down."
      },
      {
        q: "Ignoring air resistance, which launch angle gives the greatest range on level ground?",
        choices: ["30°", "45°", "60°", "90°"],
        answer: 1,
        why: "R = v² sin(2θ)/g is greatest when sin 2θ = 1, i.e. θ = 45°."
      },
      {
        q: "Launching at 30° and at 60° with the same speed (level ground) gives:",
        choices: ["Longer range at 30°", "Longer range at 60°", "The same range", "Same time of flight"],
        answer: 2,
        why: "Complementary angles give equal range because sin(2·30°) = sin(2·60°). The 60° shot spends longer in the air, though, and goes higher."
      },
      {
        q: "A ball rolls off a table 19.6 m high (a tall table!) at 20 m/s horizontally. How far from the base does it land?",
        choices: ["20 m", "40 m", "80 m", "19.6 m"],
        answer: 1,
        why: "Time from vertical: 19.6 = ½(9.8)t² → t = 2 s. Horizontal: x = 20 × 2 = 40 m. Solve for time in y, then use it in x."
      },
      {
        q: "A kicked ball is in flight (ignore air). What forces act on it?",
        choices: ["Gravity only", "Gravity and the force from the kick", "Gravity and a forward force of motion", "Gravity and a net upward force while rising"],
        answer: 0,
        why: "Once contact ends, the 'force of the kick' no longer exists. Motion does not need a forward force (Newton's 1st law); only gravity acts."
      },
      {
        q: "A ball is launched at 50 m/s at 30° above horizontal. What is its initial vertical velocity component?",
        choices: ["43.3 m/s", "25 m/s", "50 m/s", "30 m/s"],
        answer: 1,
        why: "v₀ᵧ = v₀ sin θ = 50 sin 30° = 25 m/s. The cosine gives the horizontal component (43.3 m/s). Check that your calculator is in degree mode."
      },
      {
        q: "A passenger on a train moving at constant velocity throws a ball straight up. Where does it land (relative to the passenger)?",
        choices: ["Behind the passenger", "Ahead of the passenger", "Back in the passenger's hand", "Depends on the train's speed"],
        answer: 2,
        why: "The ball keeps the train's horizontal velocity, so relative to the passenger it goes straight up and down (constant-velocity frames are equivalent)."
      }
    ]
  },
  {
    id: "newton",
    title: "Newton's Laws",
    questions: [
      {
        q: "A hockey puck slides at constant velocity across frictionless ice. What is the net force on it?",
        choices: ["A forward force equal to its weight", "A small forward force", "Zero", "Depends on the speed"],
        answer: 2,
        why: "Newton's 1st law: constant velocity means zero net force. Motion does not require a force; changing motion does."
      },
      {
        q: "A 10 kg object has a net force of 30 N acting on it. What is its acceleration?",
        choices: ["0.33 m/s²", "3 m/s²", "300 m/s²", "40 m/s²"],
        answer: 1,
        why: "a = ΣF/m = 30/10 = 3 m/s². Dividing m by F (0.33) is the inverted-formula error."
      },
      {
        q: "A heavy truck collides head-on with a small car. Which one experiences the larger force?",
        choices: ["The truck", "The car", "Both experience equal-magnitude forces", "Depends on speeds"],
        answer: 2,
        why: "Newton's 3rd law: forces in an interaction are equal and opposite. The car has the larger acceleration (a = F/m), not a larger force."
      },
      {
        q: "A 60 kg astronaut goes to the Moon (g ≈ 1.6 m/s²). Which is true?",
        choices: ["Mass 60 kg, weight 96 N", "Mass 10 kg, weight 96 N", "Mass 60 kg, weight 588 N", "Mass 9.8 kg, weight 60 N"],
        answer: 0,
        why: "Mass does not depend on location. Weight = mg = 60 × 1.6 = 96 N. Many students think mass changes with gravity."
      },
      {
        q: "A person stands on a scale in an elevator that is accelerating upward. The scale reads:",
        choices: ["Less than their weight", "Exactly their weight", "More than their weight", "Zero"],
        answer: 2,
        why: "ΣF = N − mg = ma with a upward, so N = m(g + a) > mg. Apparent weight is the normal force."
      },
      {
        q: "A box is pushed across a floor at constant velocity with a 20 N horizontal force. How large is the friction force?",
        choices: ["Less than 20 N", "20 N", "More than 20 N", "Zero"],
        answer: 1,
        why: "Constant velocity → net force zero, so friction balances the push: 20 N."
      },
      {
        q: "A book rests on a table. The weight of the book and the normal force from the table are:",
        choices: ["An action–reaction pair", "Equal and opposite but NOT a 3rd-law pair", "Unrelated", "A pair only if the table is level"],
        answer: 1,
        why: "3rd-law pairs act on different objects and are the same type of force (gravity of Earth on book / gravity of book on Earth). Weight and normal both act on the book."
      },
      {
        q: "A 5 kg cart is pulled with 20 N while 5 N of friction opposes the motion. What is its acceleration?",
        choices: ["4 m/s²", "5 m/s²", "3 m/s²", "1 m/s²"],
        answer: 2,
        why: "Use the NET force: 20 − 5 = 15 N, a = 15/5 = 3 m/s². Using only the applied force (4 m/s²) forgets friction."
      }
    ]
  },
  {
    id: "momentum",
    title: "Momentum",
    questions: [
      {
        q: "What is the momentum of a 1000 kg car traveling at 20 m/s?",
        choices: ["20,000 kg·m/s", "200,000 kg·m/s", "50 kg·m/s", "10,000 kg·m/s"],
        answer: 0,
        why: "p = mv = 1000 × 20 = 20,000 kg·m/s. (Don't confuse with KE = ½mv², which gives 200,000 J.)"
      },
      {
        q: "Why does an airbag reduce injury in a crash?",
        choices: ["It reduces the change in momentum", "It increases the stopping time, reducing the average force", "It increases the force but spreads it out", "It removes the passenger's kinetic energy instantly"],
        answer: 1,
        why: "The change in momentum is fixed by the passenger's mass and speed. FΔt = Δp, so a longer Δt gives a smaller average force."
      },
      {
        q: "A 2 kg cart moving at 3 m/s collides with a 1 kg cart at rest and they stick together. What is their final speed?",
        choices: ["1 m/s", "2 m/s", "3 m/s", "1.5 m/s"],
        answer: 1,
        why: "m₁v₁ = (m₁+m₂)v′ → 6 = 3v′ → v′ = 2 m/s."
      },
      {
        q: "Two identical carts approach each other at equal speeds and stick together on collision. What is their final velocity?",
        choices: ["Same speed as before", "Half the speed", "Zero", "Twice the speed"],
        answer: 2,
        why: "Momentum is a vector: +mv + (−mv) = 0, so the total momentum before and after is zero, and the combined cart stops."
      },
      {
        q: "In a perfectly inelastic collision (objects stick), which quantity is conserved?",
        choices: ["Only kinetic energy", "Both momentum and kinetic energy", "Only momentum", "Neither"],
        answer: 2,
        why: "Momentum is conserved in all collisions of an isolated system. Kinetic energy is lost to heat, sound and deformation when objects stick."
      },
      {
        q: "A 4 kg rifle fires a 0.01 kg bullet at 400 m/s. What is the rifle's recoil speed?",
        choices: ["1 m/s", "0.01 m/s", "4 m/s", "100 m/s"],
        answer: 0,
        why: "Total momentum starts at 0: 0.01 × 400 = 4 × v → v = 1 m/s, opposite to the bullet. The rifle gets the same momentum but far less speed."
      },
      {
        q: "A clay ball and a rubber ball of equal mass hit a wall at the same speed. The clay sticks; the rubber ball bounces back at nearly the same speed. Which experiences the larger impulse?",
        choices: ["Clay ball", "Rubber ball", "Both the same", "Cannot tell"],
        answer: 1,
        why: "Clay: Δp = 0 − mv = −mv. Rubber: Δp = −mv − mv = −2mv. A bounce reverses the momentum, so the impulse is about double."
      },
      {
        q: "A force of 10 N acts on an object for 3 s. What is the impulse?",
        choices: ["30 N·s", "3.3 N·s", "13 N·s", "7 N·s"],
        answer: 0,
        why: "J = FΔt = 10 × 3 = 30 N·s. On an F–t graph, impulse is the area under the curve."
      }
    ]
  },
  {
    id: "energy",
    title: "Work & Energy",
    questions: [
      {
        q: "You carry a heavy box horizontally at constant speed across a room. How much work does your upward lifting force do?",
        choices: ["Positive, equal to mgd", "Negative", "Zero", "Equal to the box's kinetic energy"],
        answer: 2,
        why: "W = Fd cosθ. Your force is vertical and the displacement is horizontal (θ = 90°), so W = 0. Feeling tired is not the same as doing work in the physics sense."
      },
      {
        q: "If a car doubles its speed, its kinetic energy:",
        choices: ["Doubles", "Quadruples", "Increases by 50%", "Stays the same"],
        answer: 1,
        why: "KE = ½mv² depends on v². Doubling v multiplies KE by 4, which is why stopping distance at high speed is so much longer."
      },
      {
        q: "A ball is dropped from 19.6 m. Ignoring air resistance, what is its speed just before hitting the ground?",
        choices: ["9.8 m/s", "19.6 m/s", "384 m/s", "4.9 m/s"],
        answer: 1,
        why: "mgh = ½mv² → v = √(2gh) = √(2 × 9.8 × 19.6) = 19.6 m/s. 384 is v² — don't forget the square root."
      },
      {
        q: "A heavy ball and a light ball are dropped from the same height. Just before landing, which statement is true?",
        choices: ["Same speed, heavier ball has more KE", "Same speed, same KE", "Heavier ball is faster", "Light ball has more KE"],
        answer: 0,
        why: "v = √(2gh) is independent of mass. KE = ½mv² grows with mass because more PE (mgh) was converted."
      },
      {
        q: "A spring is stretched twice as far. The elastic potential energy stored in it becomes:",
        choices: ["2 times", "4 times", "Half", "The same"],
        answer: 1,
        why: "PE = ½kx² depends on x², so doubling the stretch quadruples the stored energy."
      },
      {
        q: "A frictionless roller coaster car has 1000 J of potential energy at the top (at rest). At half that height, what is its KE?",
        choices: ["0 J", "250 J", "500 J", "1000 J"],
        answer: 2,
        why: "PE ∝ h, so at half the height PE = 500 J. Total energy stays 1000 J, so KE = 500 J."
      },
      {
        q: "A machine does 600 J of work in 3 s. What is its power?",
        choices: ["1800 W", "200 W", "600 W", "0.005 W"],
        answer: 1,
        why: "P = W/t = 600/3 = 200 W. Power is the rate of doing work, not the amount of work."
      },
      {
        q: "A 2 kg cart starting from rest is pushed by a net force of 10 N over 5 m. How fast is it moving at the end?",
        choices: ["5 m/s", "7.1 m/s", "25 m/s", "50 m/s"],
        answer: 1,
        why: "W_net = ΔKE: 10 × 5 = 50 J = ½(2)v² → v² = 50 → v ≈ 7.1 m/s. (50 is the KE; take the square root of v².)"
      }
    ]
  }
];
