/*
 * Question bank: the most frequently missed questions for each topic.
 *
 * FORMAT
 *   Each question is { obj, q, choices, why }
 *     obj     learning-objective ID (see docs/assessment-and-rubrics.md)
 *     q       the question text
 *     choices array of answer strings. The FIRST choice is the correct answer.
 *             (The quiz app shuffles the order each time, so students never see it first.)
 *     why     explanation shown after answering; names the common misconception
 *
 * Assumptions: g = 9.8 m/s^2, no air resistance unless stated.
 */
window.QUIZ_TOPICS = [
  { id: "kinematics", title: "Kinematics" },
  { id: "projectile", title: "Projectile Motion" },
  { id: "newton", title: "Newton's Laws" },
  { id: "momentum", title: "Momentum" },
  { id: "energy", title: "Work & Energy" }
];

window.QUIZ_DATA = {
  kinematics: [
    {
      obj: "K1",
      q: "A car drives 60 km east, then 60 km west, in a total time of 2 hours. What is its average velocity for the whole trip?",
      choices: ["0 km/h", "60 km/h east", "60 km/h", "120 km/h"],
      why: "Velocity is displacement divided by time. The car ends where it started, so displacement is 0 and average velocity is 0. (Its average speed is 60 km/h, because speed uses total distance.)"
    },
    {
      obj: "K5",
      q: "A ball is thrown straight up. At the very top of its path, what are its velocity and acceleration?",
      choices: [
        "Velocity is 0; acceleration is 9.8 m/s² downward",
        "Velocity is 0; acceleration is 0",
        "Velocity is 9.8 m/s upward; acceleration is 0",
        "Velocity is 0; acceleration is 9.8 m/s² upward"
      ],
      why: "Gravity acts the whole time, so acceleration is 9.8 m/s² downward at every point, including the top. The velocity is changing, and it passes through 0 for an instant. If acceleration were 0 the ball would hover."
    },
    {
      obj: "K2",
      q: "A car moves in the positive direction (v = +20 m/s) with an acceleration of a = −3 m/s². What is happening to the car's speed?",
      choices: ["It is slowing down", "It is speeding up", "It is constant", "It cannot be determined"],
      why: "When velocity and acceleration have opposite signs the object slows down. When they have the same sign it speeds up. (A negative acceleration does not by itself mean slowing down; −v with −a would be speeding up.)"
    },
    {
      obj: "K3",
      q: "On a position-time graph, a straight line sloping upward from the origin represents:",
      choices: [
        "Constant positive velocity",
        "Constant positive acceleration",
        "An object at rest",
        "Speeding up from rest"
      ],
      why: "The slope of a position-time graph is velocity. A straight line has a constant slope, so the velocity is constant. A curve would mean the velocity is changing. A flat line would mean at rest."
    },
    {
      obj: "K4",
      q: "A car starts from rest and accelerates at 3.0 m/s² for 4.0 s. How far does it travel?",
      choices: ["24 m", "12 m", "48 m", "6 m"],
      why: "Δx = v₀t + ½at² = 0 + ½(3.0)(4.0)² = 24 m. Forgetting the ½ gives 48 m; forgetting to square the time gives 6 m (or 12 m if you also drop the ½)."
    },
    {
      obj: "K5",
      q: "A rock dropped from rest falls 4.9 m in the first second. How far has it fallen after 2 seconds?",
      choices: ["19.6 m", "9.8 m", "14.7 m", "4.9 m"],
      why: "Δx = ½gt², so distance grows with the square of time. After 2 s it is ½(9.8)(4) = 19.6 m, four times the first second's distance. (14.7 m is how far it falls during the second second.)"
    },
    {
      obj: "K3",
      q: "A velocity-time graph rises in a straight line from 0 to 10 m/s over 5 s, then stays at 10 m/s for 5 more seconds. What is the total displacement?",
      choices: ["75 m", "100 m", "50 m", "25 m"],
      why: "Area under a v-t graph is displacement. Triangle: ½(5)(10) = 25 m. Rectangle: (5)(10) = 50 m. Total = 75 m. Using 10 m/s for all 10 s (100 m) ignores the speed-up."
    },
    {
      obj: "K2",
      q: "A cyclist's velocity changes from 0 to 20 m/s in 5.0 s. What is the average acceleration?",
      choices: ["4 m/s²", "100 m/s²", "0.25 m/s²", "20 m/s²"],
      why: "a = Δv / Δt = (20 − 0)/5.0 = 4 m/s². Multiplying instead of dividing gives 100; inverting the ratio gives 0.25."
    },
    {
      obj: "K5",
      q: "A bowling ball and a tennis ball are dropped from the same height at the same time in a vacuum chamber. Which hits the ground first?",
      choices: [
        "They hit at the same time",
        "The bowling ball",
        "The tennis ball",
        "It depends on their colors"
      ],
      why: "In free fall every object has the same acceleration, 9.8 m/s², regardless of mass. A heavier object has a larger weight, but it also has more inertia, so the two effects cancel. (In air, drag makes light, fluffy objects fall slower.)"
    },
    {
      obj: "K3",
      q: "A velocity-time graph is a horizontal line at +6 m/s. Which statement is correct?",
      choices: [
        "The object moves with constant velocity and zero acceleration",
        "The object is at rest",
        "The object has a constant acceleration of 6 m/s²",
        "The object is speeding up at a steady rate"
      ],
      why: "On a v-t graph, slope is acceleration. A horizontal line has zero slope, so a = 0, but the height (6 m/s) says the object is moving. Don't confuse 'height' with 'slope'."
    }
  ],

  projectile: [
    {
      obj: "P2",
      q: "One ball is dropped from a table while an identical ball is rolled horizontally off the table at the same instant. Which one hits the floor first?",
      choices: ["They land at the same time", "The dropped ball", "The rolled ball", "The one with more mass"],
      why: "Vertical motion is independent of horizontal motion. Both balls start with zero vertical velocity and accelerate down at 9.8 m/s², so they fall for the same time. Horizontal speed only changes where the ball lands."
    },
    {
      obj: "P2",
      q: "A baseball is at the top of its flight path. What is its acceleration (ignore air resistance)?",
      choices: [
        "9.8 m/s² downward",
        "Zero",
        "9.8 m/s² horizontal",
        "Equal to its horizontal speed"
      ],
      why: "The only force is gravity, so the acceleration is 9.8 m/s² downward everywhere on the path. At the top the vertical velocity is 0, but the acceleration isn't."
    },
    {
      obj: "P4",
      q: "Ignoring air resistance, which launch angle gives the longest range on level ground for a given launch speed?",
      choices: ["45°", "30°", "60°", "90°"],
      why: "R = v² sin(2θ)/g is largest when sin(2θ) = 1, so θ = 45°. At 90° the ball goes straight up and has zero range."
    },
    {
      obj: "P3",
      q: "A ball is rolled horizontally at 20 m/s off a 20 m high cliff. About how far from the base of the cliff does it land?",
      choices: ["About 40 m", "About 20 m", "About 80 m", "About 200 m"],
      why: "Vertical: 20 = ½(9.8)t² → t ≈ 2.0 s. Horizontal: x = vₓt = 20 × 2.0 ≈ 40 m. Using the cliff height as the range (20 m) mixes up the two directions."
    },
    {
      obj: "P2",
      q: "Ignoring air resistance, the horizontal velocity of a projectile during its flight is:",
      choices: [
        "Constant",
        "Increasing",
        "Decreasing, reaching zero at the top",
        "Zero at the top and equal to the launch speed at landing"
      ],
      why: "There is no horizontal force, so there is no horizontal acceleration. vₓ never changes. The vertical component is the one that decreases, reaches 0 at the top, then increases downward."
    },
    {
      obj: "P4",
      q: "A ball is launched at 30° above the horizontal. A second ball is launched at the same speed at 60°. Compare their ranges on level ground.",
      choices: [
        "They are the same",
        "The 30° ball goes farther",
        "The 60° ball goes farther",
        "The 60° ball goes twice as far"
      ],
      why: "Complementary angles (angles that add to 90°) give equal ranges because sin(2θ) is the same for both (sin 60° = sin 120°). The 60° ball is higher and stays in the air longer; the 30° ball is flatter and faster horizontally."
    },
    {
      obj: "P1",
      q: "A ball is kicked at 50 m/s at 37° above the horizontal (sin 37° = 0.6, cos 37° = 0.8). What are the horizontal and vertical components of its initial velocity?",
      choices: [
        "Horizontal 40 m/s, vertical 30 m/s",
        "Horizontal 30 m/s, vertical 40 m/s",
        "Horizontal 50 m/s, vertical 37 m/s",
        "Horizontal 25 m/s, vertical 25 m/s"
      ],
      why: "With θ measured from the horizontal, vₓ = v cos θ = 50(0.8) = 40 m/s and v_y = v sin θ = 50(0.6) = 30 m/s. Swapping sine and cosine is the most common error."
    },
    {
      obj: "P2",
      q: "At the highest point of a projectile's path (launched at an angle), its speed is:",
      choices: [
        "Equal to its horizontal velocity, not zero",
        "Zero",
        "Equal to its launch speed",
        "Equal to its vertical launch velocity"
      ],
      why: "At the top, v_y = 0, but vₓ is still the same as at launch. The speed (magnitude of the velocity) is therefore vₓ, the minimum speed during the flight."
    },
    {
      obj: "P3",
      q: "Two stones are thrown horizontally from the same high cliff at the same time. Stone A is thrown at 5 m/s and stone B at 15 m/s. Which statement is correct?",
      choices: [
        "They hit the ground at the same time; B lands farther away",
        "A hits first because it is slower",
        "B hits first because it is faster",
        "They land at the same spot"
      ],
      why: "Fall time depends only on the height and gravity. Horizontal speed controls only how far the stone travels during that time, so B lands 3 times farther away but at the same moment."
    },
    {
      obj: "P2",
      q: "You stand on a train moving at constant velocity and toss a ball straight up (relative to the train). Where does the ball land (ignore air resistance)?",
      choices: [
        "Back in your hand",
        "Behind you, since the train moves forward",
        "In front of you",
        "It depends on how fast the train is moving"
      ],
      why: "The ball already has the train's horizontal velocity when it leaves your hand and no horizontal force acts on it, so it keeps pace with you the whole time. Constant-velocity motion looks the same as being at rest."
    }
  ],

  newton: [
    {
      obj: "N5",
      q: "A book rests on a table. The Earth pulls the book down with a force equal to the book's weight. What is the Newton's third-law partner of that force?",
      choices: [
        "The book pulls the Earth upward",
        "The table pushes the book upward",
        "The table pushes the floor downward",
        "The normal force on the book"
      ],
      why: "A third-law pair acts on two different objects and is the same type of force: Earth pulls book / book pulls Earth. The table's upward push on the book is a different force; it balances weight by Newton's first law, not the third."
    },
    {
      obj: "N5",
      q: "A large truck and a small car collide head-on. Which statement about the collision forces is correct?",
      choices: [
        "The forces on the truck and the car are equal in magnitude",
        "The force on the car is larger",
        "The force on the truck is larger",
        "Only the truck exerts a force"
      ],
      why: "Newton's third law: the forces are always equal and opposite. The car suffers more because the same force gives its smaller mass a larger acceleration (a = F/m)."
    },
    {
      obj: "N1",
      q: "A hockey puck slides on frictionless ice at a constant 5 m/s. What is the net force on it?",
      choices: ["Zero", "5 N forward", "It depends on the puck's mass", "9.8 N downward"],
      why: "Constant velocity means zero acceleration, so the net force is zero (Newton's first law). Motion does not require a net force; a net force is needed only to change the velocity. The weight is balanced by the normal force."
    },
    {
      obj: "N3",
      q: "A 5.0 kg object is acted on by a net force of 20 N. What is its acceleration?",
      choices: ["4 m/s²", "100 m/s²", "0.25 m/s²", "15 m/s²"],
      why: "a = F_net/m = 20/5.0 = 4 m/s². Multiplying (100) or inverting the ratio (0.25) are the usual slips."
    },
    {
      obj: "N4",
      q: "A rock has a mass of 10 kg on Earth. On the Moon, where g ≈ 1.6 m/s², its mass and weight are:",
      choices: [
        "Mass 10 kg; weight 16 N",
        "Mass 1.6 kg; weight 16 N",
        "Mass 10 kg; weight 98 N",
        "Mass 10 kg; weight 10 N"
      ],
      why: "Mass measures the amount of matter and does not change with location. Weight is the gravitational force, W = mg: (10)(1.6) = 16 N on the Moon versus 98 N on Earth."
    },
    {
      obj: "N6",
      q: "A box is pushed across a rough floor at constant speed with a 30 N horizontal force. What is the friction force on the box?",
      choices: ["30 N opposite to the push", "Less than 30 N", "More than 30 N", "Zero"],
      why: "Constant speed means zero acceleration, so the net force is zero. The friction must exactly balance the 30 N push (and acts opposite to the direction of motion)."
    },
    {
      obj: "N4",
      q: "A 60 kg person stands on a scale in an elevator that is accelerating upward at 2.0 m/s². What does the scale read (use g = 9.8 m/s²)?",
      choices: ["708 N", "588 N", "468 N", "120 N"],
      why: "N − mg = ma → N = m(g + a) = 60(9.8 + 2.0) = 708 N. At rest or constant velocity it would read 588 N; accelerating downward at 2.0 it would read 468 N."
    },
    {
      obj: "N3",
      q: "The same net force acts on two carts. Cart B has twice the mass of cart A. How do their accelerations compare?",
      choices: [
        "B's acceleration is half of A's",
        "B's acceleration is twice A's",
        "They are the same",
        "B's acceleration is one-fourth of A's"
      ],
      why: "a = F/m. For the same force, doubling the mass cuts the acceleration in half. Acceleration is inversely proportional to mass."
    },
    {
      obj: "N6",
      q: "A 20 kg box sits on a floor with μₛ = 0.50 (maximum static friction = 98 N). You push horizontally with 40 N and the box does not move. How large is the friction force?",
      choices: ["40 N", "98 N", "0 N", "196 N"],
      why: "Static friction adjusts to match the applied force, up to its maximum. The box is not accelerating, so friction = 40 N. It reaches 98 N only when you push with 98 N (or more) and the box starts to slip."
    },
    {
      obj: "N6",
      q: "A skydiver falls at terminal velocity. Which statement is true?",
      choices: [
        "The drag force equals the skydiver's weight and the net force is zero",
        "There is no air resistance acting on the skydiver",
        "The drag force is greater than the weight",
        "The skydiver is no longer moving"
      ],
      why: "As the skydiver speeds up, drag grows until it equals the weight. The net force becomes zero, so the acceleration is zero and the velocity stays constant (a constant velocity, not zero velocity)."
    }
  ],

  momentum: [
    {
      obj: "M1",
      q: "What is the momentum of a 2.0 kg cart moving at 3.0 m/s?",
      choices: ["6.0 kg·m/s", "9.0 kg·m/s", "1.5 kg·m/s", "18 kg·m/s"],
      why: "p = mv = (2.0)(3.0) = 6.0 kg·m/s. (Don't square the velocity; that's for kinetic energy.)"
    },
    {
      obj: "M5",
      q: "Why does an airbag reduce injuries in a collision?",
      choices: [
        "It increases the time over which the momentum changes, which lowers the average force",
        "It reduces the change in the passenger's momentum",
        "It increases the passenger's momentum",
        "It makes the impulse bigger so the car stops faster"
      ],
      why: "The passenger still goes from moving to stopped (same Δp, same impulse). Since impulse = F_avg × Δt, a longer Δt gives a smaller average force."
    },
    {
      obj: "M2",
      q: "A 1.0 kg ball moving at 4.0 m/s hits a wall and bounces straight back at 4.0 m/s. What is the magnitude of the impulse the wall gives the ball?",
      choices: ["8.0 N·s", "4.0 N·s", "0 N·s", "16 N·s"],
      why: "Take the initial direction as +. Δp = m(v_f − v_i) = 1.0(−4.0 − 4.0) = −8.0 kg·m/s. Reversing direction doubles the change in velocity. A bounce gives twice the impulse of a stop (4.0 N·s)."
    },
    {
      obj: "M3",
      q: "A 2.0 kg cart moving at 6.0 m/s collides with a stationary 4.0 kg cart and they stick together. What is their final speed?",
      choices: ["2.0 m/s", "3.0 m/s", "6.0 m/s", "1.5 m/s"],
      why: "Momentum conservation: (2.0)(6.0) = (2.0 + 4.0)v′, so v′ = 12/6 = 2.0 m/s. The speed (2.0 m/s) is not the average of the two original speeds (3.0 m/s) because the masses are different."
    },
    {
      obj: "M4",
      q: "In an inelastic collision between two carts on a frictionless track:",
      choices: [
        "Momentum is conserved but kinetic energy is not",
        "Both momentum and kinetic energy are conserved",
        "Kinetic energy is conserved but momentum is not",
        "Neither momentum nor kinetic energy is conserved"
      ],
      why: "Momentum is conserved in all collisions when no external force acts (including inelastic ones). Only in elastic collisions is KE also conserved. In inelastic collisions some KE becomes heat, sound, and deformation."
    },
    {
      obj: "M3",
      q: "Two identical cars (same mass) approach each other head-on at the same speed. They collide and stick together. What is their velocity right after the collision?",
      choices: [
        "Zero",
        "The original speed in one direction",
        "Twice the original speed",
        "Half the original speed"
      ],
      why: "Momentum is a vector. +mv and −mv add to zero total momentum, so the combined wreck (mass 2m) must have v′ = 0. Opposite directions cancel."
    },
    {
      obj: "M3",
      q: "A 4.0 kg rifle fires a 0.010 kg bullet at 400 m/s. What is the rifle's recoil velocity?",
      choices: ["1.0 m/s backward", "0.010 m/s backward", "400 m/s backward", "1.0 m/s forward"],
      why: "The system starts at rest, so the total momentum afterward is 0: (4.0)v + (0.010)(400) = 0 → v = −1.0 m/s (backward). The much heavier rifle gets a much smaller speed."
    },
    {
      obj: "M2",
      q: "A 10 N·s impulse is delivered to an object in 0.05 s. What is the average force?",
      choices: ["200 N", "0.5 N", "500 N", "10 N"],
      why: "J = F_avg Δt → F = J/Δt = 10/0.05 = 200 N. Multiplying (0.5) instead of dividing is the common slip."
    },
    {
      obj: "M1",
      q: "A car's speed doubles. What happens to its momentum and its kinetic energy?",
      choices: [
        "Momentum doubles; kinetic energy quadruples",
        "Both double",
        "Both quadruple",
        "Momentum quadruples; kinetic energy doubles"
      ],
      why: "p = mv is proportional to v, so it doubles. KE = ½mv² is proportional to v², so it quadruples."
    },
    {
      obj: "M4",
      q: "A moving ball hits an identical stationary ball head-on in a perfectly elastic collision. What happens?",
      choices: [
        "The first ball stops and the second moves off at the first ball's original speed",
        "Both balls move at half the original speed",
        "The balls stick together and move at half the speed",
        "The first ball bounces back and the second stays at rest"
      ],
      why: "For equal masses in a head-on elastic collision the velocities are exchanged. Check: momentum m·v = m·v and KE ½mv² = ½mv². The 'half speed' outcome conserves momentum but not KE, so it's the sticking (inelastic) case."
    }
  ],

  energy: [
    {
      obj: "E1",
      q: "A person carries a heavy box horizontally across a room at constant velocity. How much work does the upward lifting force do on the box?",
      choices: [
        "Zero, since the force is perpendicular to the displacement",
        "Equal to the box's weight times the distance",
        "Positive, since the person is exerting a force",
        "Negative, since gravity pulls the other way"
      ],
      why: "W = Fd cos θ. The lifting force is vertical, the displacement is horizontal, θ = 90°, cos 90° = 0. Feeling tired is not the same as doing work on the box."
    },
    {
      obj: "E2",
      q: "A car's speed doubles. What happens to its kinetic energy?",
      choices: ["It becomes 4 times larger", "It doubles", "It becomes 8 times larger", "It stays the same"],
      why: "KE = ½mv², so KE depends on the square of the speed. Doubling v multiplies KE by 2² = 4. This is why high-speed crashes are much more destructive."
    },
    {
      obj: "E1",
      q: "A 50 N force pulls a sled 10 m along the ground. The rope makes a 60° angle with the ground. How much work does the force do?",
      choices: ["250 J", "433 J", "500 J", "5000 J"],
      why: "W = Fd cos θ = (50)(10)cos 60° = 250 J. Only the component of the force parallel to the displacement does work. Using sine (433 J) would give the perpendicular component."
    },
    {
      obj: "E4",
      q: "A ball is dropped from rest from a height of 5.0 m. Ignoring air resistance, what is its speed just before it hits the ground?",
      choices: ["9.9 m/s", "49 m/s", "4.9 m/s", "25 m/s"],
      why: "mgh = ½mv² → v = √(2gh) = √(2 × 9.8 × 5.0) ≈ 9.9 m/s. Forgetting the square root gives 98; the mass cancels, so no mass is needed."
    },
    {
      obj: "E4",
      q: "Two frictionless ramps have the same height. A 1 kg block slides down one and a 3 kg block slides down the other, both from rest. At the bottom, which has the greater speed?",
      choices: [
        "They have the same speed",
        "The 3 kg block",
        "The 1 kg block",
        "It depends on the ramp length"
      ],
      why: "mgh = ½mv² and the mass cancels, so v = √(2gh) depends only on the height. (The 3 kg block has more kinetic energy at the bottom, but the same speed.)"
    },
    {
      obj: "E6",
      q: "A machine does 600 J of work in 3.0 s. What is its power output?",
      choices: ["200 W", "1800 W", "0.005 W", "600 W"],
      why: "P = W/t = 600/3.0 = 200 W (joules per second). Multiplying instead of dividing gives 1800."
    },
    {
      obj: "E2",
      q: "A spring is stretched 0.1 m and stores some elastic potential energy. If it is stretched 0.2 m instead, the stored energy is:",
      choices: ["4 times as large", "2 times as large", "The same", "8 times as large"],
      why: "PE = ½kx², so the energy depends on x². Doubling the stretch multiplies the energy by 4."
    },
    {
      obj: "E4",
      q: "A frictionless pendulum swings back and forth. At the lowest point of the swing:",
      choices: [
        "Kinetic energy is greatest and potential energy is least",
        "Potential energy is greatest and kinetic energy is least",
        "Both kinetic and potential energy are at their maximum",
        "The total mechanical energy is zero"
      ],
      why: "At the bottom the bob is at its lowest height (PE minimum) and moving fastest (KE maximum). The sum KE + PE stays constant throughout the swing."
    },
    {
      obj: "E3",
      q: "A 1000 kg car traveling at 20 m/s brakes to a stop using a constant 5000 N braking force. What distance does it take to stop?",
      choices: ["40 m", "80 m", "20 m", "4 m"],
      why: "Work-energy theorem: F d = ½mv² → d = ½(1000)(400)/5000 = 40 m. If the speed doubled to 40 m/s the stopping distance would be 160 m (4 times as much)."
    },
    {
      obj: "E5",
      q: "A sliding box comes to a stop because of friction. What happens to its initial kinetic energy?",
      choices: [
        "It is converted to thermal energy (the box and floor warm up slightly)",
        "It is destroyed",
        "It is converted to potential energy",
        "It is stored as momentum"
      ],
      why: "Energy is never destroyed. The work done by friction increases the thermal energy of the surfaces. The total energy of the box + floor system is conserved; the mechanical energy is not."
    },
    {
      obj: "E2",
      q: "A 500 kg roller-coaster car is at the top of a 20 m hill. Taking the ground as zero height, what is its gravitational potential energy?",
      choices: ["98,000 J", "10,000 J", "9,800 J", "4,900 J"],
      why: "PE = mgh = (500)(9.8)(20) = 98,000 J. Dropping the 9.8 gives 10,000 J, and using ½mgh (as if it were kinetic energy) gives 49,000 J."
    }
  ]
};
