// Quiz data: the most commonly missed questions per unit.
// `answer` is the index of the correct option; `why` explains the correct answer
// and names the misconception behind the most popular wrong answer.
window.QUIZZES = {
  kinematics: {
    title: "Kinematics",
    questions: [
      {
        q: "A car speeds up uniformly from rest to 20 m/s in 5.0 s. How far does it travel in that time?",
        options: ["100 m", "50 m", "20 m", "4 m"],
        answer: 1,
        why: "Average velocity = (0 + 20)/2 = 10 m/s, so d = 10 × 5 = 50 m (or d = ½at² with a = 4 m/s²). Choosing 100 m uses the final speed for the whole trip, which forgets the car started at rest."
      },
      {
        q: "A runner completes one 400 m lap in 80 s and ends where she started. Her average velocity for the lap is:",
        options: ["5 m/s", "0 m/s", "400 m/s", "80 m/s"],
        answer: 1,
        why: "Velocity uses displacement, which is zero for a round trip. Her average SPEED is 5 m/s. Students mix up distance (path length) and displacement (change in position)."
      },
      {
        q: "A ball is thrown straight up. At the very top of its flight, its velocity and acceleration are:",
        options: ["v = 0, a = 0", "v = 0, a = 9.8 m/s² downward", "v = 9.8 m/s, a = 0", "v = 0, a = 9.8 m/s² upward"],
        answer: 1,
        why: "Gravity never turns off. Velocity passes through zero as it changes direction, but acceleration stays 9.8 m/s² downward the whole flight. 'Zero velocity means zero acceleration' is the classic misconception."
      },
      {
        q: "On a velocity-vs-time graph, the displacement of an object is found from:",
        options: ["the slope of the line", "the area between the line and the time axis", "the y-intercept", "the final velocity"],
        answer: 1,
        why: "Slope of v-t is acceleration; AREA under v-t is displacement. On a position-time graph, slope is velocity. Know which graph you are reading before you pick slope or area."
      },
      {
        q: "A cart moves to the left (negative direction) at 5 m/s and has a constant acceleration of −2 m/s². The cart is:",
        options: ["slowing down", "speeding up", "moving at constant speed", "at rest"],
        answer: 1,
        why: "Velocity and acceleration point the same way (both negative), so speed increases. Negative acceleration does NOT automatically mean slowing down. Compare the SIGNS of v and a."
      },
      {
        q: "A rock is dropped from rest from a cliff. Ignoring air resistance (g = 9.8 m/s²), how far has it fallen after 3.0 s?",
        options: ["29 m", "44 m", "88 m", "9.8 m"],
        answer: 1,
        why: "d = ½gt² = ½(9.8)(3.0)² = 44 m. Forgetting to square t gives 15 m (½gt) and forgetting the ½ gives 88 m."
      },
      {
        q: "A bowling ball and a tennis ball are dropped together from the same height in a vacuum. Which hits the ground first?",
        options: ["The bowling ball", "The tennis ball", "They land at the same time", "Cannot be determined"],
        answer: 2,
        why: "Free-fall acceleration is the same for all masses (g). The idea that heavier objects fall faster comes from air resistance in everyday life, not from gravity itself."
      },
      {
        q: "Convert 72 km/h to m/s.",
        options: ["72 m/s", "259 m/s", "20 m/s", "7.2 m/s"],
        answer: 2,
        why: "Divide km/h by 3.6: 72 ÷ 3.6 = 20 m/s. (72 × 1000 m)/(3600 s). Many students multiply by 3.6 instead of dividing."
      }
    ]
  },

  projectile: {
    title: "Projectile Motion",
    questions: [
      {
        q: "One ball is dropped from a table while an identical ball is launched horizontally off the same table at the same instant. Which hits the floor first (ignore air resistance)?",
        options: ["The dropped ball", "The launched ball", "They hit at the same time", "It depends on the launch speed"],
        answer: 2,
        why: "Vertical and horizontal motion are independent. Both balls start with zero vertical velocity and have the same vertical acceleration, so they fall for the same time."
      },
      {
        q: "At the highest point of a projectile's path (launched at an angle), its speed is:",
        options: ["zero", "equal to the initial speed", "equal to the horizontal component of velocity", "equal to the vertical component of velocity"],
        answer: 2,
        why: "Vertical velocity is zero at the peak, but horizontal velocity is constant the whole flight (no horizontal force), so the speed there equals vₓ, not zero."
      },
      {
        q: "A soccer ball is kicked at 20 m/s at 30° above the horizontal. What are vₓ and v_y at launch?",
        options: ["vₓ = 10 m/s, v_y = 17.3 m/s", "vₓ = 17.3 m/s, v_y = 10 m/s", "vₓ = 20 m/s, v_y = 0", "vₓ = 14.1 m/s, v_y = 14.1 m/s"],
        answer: 1,
        why: "vₓ = v cosθ = 20 cos30° = 17.3 m/s; v_y = v sinθ = 20 sin30° = 10 m/s. Swapping sin and cos is the most common error: the component ALONG the angle's adjacent side uses cosine."
      },
      {
        q: "Ignoring air resistance, which pair of launch angles (same speed) gives the same range on level ground?",
        options: ["30° and 45°", "30° and 60°", "20° and 50°", "45° and 90°"],
        answer: 1,
        why: "Complementary angles (adding to 90°) give equal ranges. 45° gives the maximum range."
      },
      {
        q: "A ball rolls off a 20 m high roof horizontally. How long until it hits the ground? (g = 9.8 m/s²)",
        options: ["4.1 s", "2.0 s", "1.0 s", "20 s"],
        answer: 1,
        why: "Use only the vertical motion: 20 = ½(9.8)t² gives t = √(2·20/9.8) = 2.0 s. The horizontal speed does not affect fall time."
      },
      {
        q: "A projectile is in flight (no air resistance). What is its horizontal acceleration?",
        options: ["9.8 m/s²", "Zero", "Equal to the launch speed", "It decreases as the ball rises"],
        answer: 1,
        why: "No horizontal force, so no horizontal acceleration. Gravity acts only vertically."
      },
      {
        q: "A package is released from a plane flying level at constant velocity (no air resistance). A pilot looking down sees the package:",
        options: ["fall behind the plane", "fall straight below the plane", "move ahead of the plane", "rise at first"],
        answer: 1,
        why: "The package keeps the plane's horizontal velocity, so it stays directly below the plane. Observers on the ground see a parabola; the pilot sees straight-down motion."
      },
      {
        q: "A ball is thrown straight up inside a train moving at constant velocity. Where does it land relative to the thrower?",
        options: ["Behind the thrower", "Ahead of the thrower", "Back in the thrower's hands", "It depends on the train speed"],
        answer: 2,
        why: "The ball shares the train's horizontal velocity, so relative to the train it moves only up and down. It lands in the hands."
      }
    ]
  },

  newton: {
    title: "Newton's Laws",
    questions: [
      {
        q: "A hockey puck slides at a constant 3 m/s along the ice in a straight line. The net force on the puck is:",
        options: ["in the direction of motion", "zero", "equal to its weight", "opposite to the motion"],
        answer: 1,
        why: "Constant velocity means zero acceleration, so net force is zero (Newton's 1st law). Objects do not need a net force to keep moving, only to change their motion."
      },
      {
        q: "A large truck collides head-on with a small car. During the collision, the force of the truck on the car is _____ the force of the car on the truck.",
        options: ["greater than", "less than", "equal to", "impossible to compare"],
        answer: 2,
        why: "Newton's 3rd law: the pair of forces is always equal in magnitude and opposite in direction. The car suffers a larger ACCELERATION because it has less mass (F = ma), not a larger force."
      },
      {
        q: "A net force of 20 N acts on a 5.0 kg cart. What is its acceleration?",
        options: ["100 m/s²", "4.0 m/s²", "0.25 m/s²", "15 m/s²"],
        answer: 1,
        why: "a = F/m = 20/5 = 4.0 m/s². Multiplying instead of dividing gives 100."
      },
      {
        q: "A 10 kg object is taken to the Moon (g = 1.6 m/s²). Which statement is true?",
        options: ["Its mass is 10 kg and its weight is about 16 N", "Its mass is 1.6 kg and its weight is 16 N", "Its mass is 10 kg and its weight is 98 N", "Both mass and weight are unchanged"],
        answer: 0,
        why: "Mass is the amount of matter and never changes with location. Weight = mg changes with gravity: 10 × 1.6 = 16 N."
      },
      {
        q: "A book rests on a table. The Newton's 3rd law partner of the book's weight (Earth pulling the book down) is:",
        options: ["the normal force of the table on the book", "the book pulling the Earth up", "the table pushing the floor", "friction"],
        answer: 1,
        why: "3rd-law pairs act on DIFFERENT objects and are the same type of force. Earth pulls book (gravity) so the book pulls Earth (gravity). Weight and normal force are balanced by the 1st law, they are not a 3rd-law pair."
      },
      {
        q: "A 70 kg person stands on a scale in an elevator accelerating UPWARD at 2.0 m/s². The scale reads about (g = 9.8 m/s²):",
        options: ["686 N", "546 N", "826 N", "140 N"],
        answer: 2,
        why: "N − mg = ma so N = m(g + a) = 70(9.8 + 2.0) = 826 N. The scale reads the normal force, which is larger than weight when accelerating up."
      },
      {
        q: "A crate is pushed across the floor at constant velocity with a 50 N horizontal push. The friction force on the crate is:",
        options: ["less than 50 N", "exactly 50 N", "more than 50 N", "zero"],
        answer: 1,
        why: "Constant velocity means balanced forces. Students think the push must be greater than friction to keep moving, but that would cause acceleration."
      },
      {
        q: "A 4.0 kg block is pulled right with 30 N and left with 10 N (friction ignored). What is its acceleration?",
        options: ["10 m/s² right", "5.0 m/s² right", "7.5 m/s² right", "5.0 m/s² left"],
        answer: 1,
        why: "Net force = 30 − 10 = 20 N right, so a = 20/4 = 5.0 m/s². Add forces as vectors (with signs) before using F = ma."
      },
      {
        q: "A block sits on a frictionless ramp inclined at angle θ. The component of its weight pulling it down the slope is:",
        options: ["mg cosθ", "mg sinθ", "mg tanθ", "mg"],
        answer: 1,
        why: "Along the slope: mg sinθ. Perpendicular to the slope: mg cosθ (balanced by the normal force). Check with θ = 0°: no pull along a flat surface, and sin0° = 0."
      }
    ]
  },

  momentum: {
    title: "Momentum",
    questions: [
      {
        q: "What is the momentum of a 1000 kg car traveling at 20 m/s east?",
        options: ["20,000 kg·m/s east", "200,000 kg·m/s east", "50 kg·m/s east", "20,000 J"],
        answer: 0,
        why: "p = mv = 1000 × 20 = 20,000 kg·m/s, in the direction of the velocity. Momentum is a vector. Joules are units of energy, not momentum."
      },
      {
        q: "Why do airbags and crumple zones reduce injuries?",
        options: ["They reduce the change in momentum", "They increase the time of the collision, reducing the average force", "They increase the impulse on the passenger", "They make the car heavier"],
        answer: 1,
        why: "Impulse FΔt = Δp. The change in momentum is the same (stopping), so a longer Δt means a smaller force. The impulse itself isn't smaller."
      },
      {
        q: "In a perfectly inelastic collision between two carts in an isolated system, which quantity is NOT conserved?",
        options: ["Total momentum", "Total kinetic energy", "Both are conserved", "Neither is conserved"],
        answer: 1,
        why: "Momentum is conserved in ALL collisions in an isolated system. Kinetic energy is conserved only in elastic ones. In inelastic collisions, some KE becomes heat, sound and deformation."
      },
      {
        q: "A 2.0 kg cart moving at 3.0 m/s collides and sticks to a 1.0 kg cart at rest. Their speed afterward is:",
        options: ["3.0 m/s", "2.0 m/s", "1.5 m/s", "1.0 m/s"],
        answer: 1,
        why: "m₁v₁ = (m₁ + m₂)v′ gives (2)(3) = 3v′, so v′ = 2.0 m/s. Students often forget to use the combined mass on the right side."
      },
      {
        q: "A 1.0 kg ball hits a wall at +4.0 m/s and bounces straight back at −4.0 m/s. The ball's change in momentum is:",
        options: ["0 kg·m/s", "−4.0 kg·m/s", "−8.0 kg·m/s", "+8.0 kg·m/s"],
        answer: 2,
        why: "Δp = m(v_f − v_i) = 1.0(−4 − 4) = −8.0 kg·m/s. Direction matters: reversing direction doubles the momentum change compared to just stopping."
      },
      {
        q: "A 50 kg skater at rest throws a 2.0 kg ball forward at 10 m/s. The skater recoils at about:",
        options: ["0.40 m/s backward", "10 m/s backward", "0.40 m/s forward", "0 m/s"],
        answer: 0,
        why: "Total momentum starts at 0, so 50v + 2(10) = 0 and v = −0.40 m/s. The less massive object gets the larger velocity, and the two momenta are equal and opposite."
      },
      {
        q: "Which has the greater momentum: a 0.145 kg baseball at 40 m/s, or an 80 kg person walking at 1.0 m/s?",
        options: ["The baseball", "The person", "They are equal", "Cannot tell without direction"],
        answer: 1,
        why: "Baseball: 5.8 kg·m/s. Person: 80 kg·m/s. A fast object isn't automatically high in momentum, so always compute mv."
      },
      {
        q: "On a force-vs-time graph, the impulse delivered is equal to:",
        options: ["the slope", "the area under the curve", "the maximum force", "the final time"],
        answer: 1,
        why: "Area under an F-t graph = FΔt = impulse = Δp. (Compare with area under v-t = displacement.)"
      }
    ]
  },

  energy: {
    title: "Work & Energy",
    questions: [
      {
        q: "You carry a heavy box horizontally at constant velocity across a room. The work you do on the box (in the physics sense) is:",
        options: ["positive", "negative", "zero", "equal to mgh"],
        answer: 2,
        why: "W = Fd cosθ. Your upward force is perpendicular to the displacement (θ = 90°, cos90° = 0), so W = 0. Feeling tired is not the same as doing work on the box."
      },
      {
        q: "If a car doubles its speed, its kinetic energy:",
        options: ["doubles", "triples", "quadruples", "stays the same"],
        answer: 2,
        why: "KE = ½mv², so KE depends on v². Double v → 4× the KE. This is why stopping distance grows so fast with speed."
      },
      {
        q: "What is the gravitational potential energy of a 2.0 kg book on a shelf 5.0 m above the floor? (g = 9.8 m/s²)",
        options: ["10 J", "98 J", "49 J", "9.8 J"],
        answer: 1,
        why: "PE = mgh = 2.0 × 9.8 × 5.0 = 98 J. Mixing up PE with KE (½mv²) introduces a stray ½."
      },
      {
        q: "A ball is dropped from 10 m (no air resistance). Its speed just before landing is about:",
        options: ["14 m/s", "98 m/s", "9.8 m/s", "7.0 m/s"],
        answer: 0,
        why: "mgh = ½mv² so v = √(2gh) = √(2·9.8·10) = 14 m/s. Mass cancels out. Forgetting the square root gives 196, and forgetting the 2 gives 9.9."
      },
      {
        q: "A motor lifts a load, doing 600 J of work in 3.0 s. What is its power output?",
        options: ["1800 W", "200 W", "600 W", "0.005 W"],
        answer: 1,
        why: "P = W/t = 600/3.0 = 200 W. Power is a RATE (J/s), so the same work done faster means more power."
      },
      {
        q: "A 1000 kg car moving at 20 m/s brakes to a stop. The average braking force is 8000 N. What is the stopping distance?",
        options: ["25 m", "50 m", "2.5 m", "100 m"],
        answer: 0,
        why: "Work-energy theorem: Fd = ΔKE gives 8000·d = ½(1000)(20)² = 200,000 J so d = 25 m."
      },
      {
        q: "A roller-coaster car (frictionless track) starts from rest at a 30 m peak. The first hill is 20 m. Its speed at the top of the 20 m hill depends on:",
        options: ["the mass of the car", "the height difference (30 − 20 = 10 m)", "the track length", "the car's mass and the track shape"],
        answer: 1,
        why: "Only the height drop matters: v = √(2g·Δh). Mass cancels and track shape doesn't matter when friction is neglected."
      },
      {
        q: "A machine takes in 120 J of energy and delivers 30 J of useful work. Its efficiency is:",
        options: ["4%", "25%", "75%", "90%"],
        answer: 1,
        why: "Efficiency = useful output / total input = 30/120 = 25%. The remaining 90 J is not lost; it is transferred to thermal energy (energy is conserved)."
      },
      {
        q: "Which statement about energy is correct?",
        options: ["Energy is used up when friction acts", "Friction converts mechanical energy into thermal energy; the total remains constant", "KE is always conserved", "Potential energy cannot be negative or zero"],
        answer: 1,
        why: "Energy is never destroyed; it changes form. Friction transfers mechanical energy to thermal energy, so mechanical energy alone decreases."
      }
    ]
  }
};
