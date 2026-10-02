// Most-often-missed questions, by unit. Each question's `why` names the misconception.
// Answer key: `answer` is the index into `choices`. g = 9.8 m/s^2, no air resistance unless stated.
window.QUIZZES = [
  {
    id: "kinematics",
    title: "Kinematics",
    standards: "HS-PS2-1 (motion graphs, a = F/m support)",
    questions: [
      {
        q: "A car travels east and the driver brakes, slowing down. Which way does the acceleration point?",
        choices: ["East", "West", "Zero, because velocity is constant", "Up"],
        answer: 1,
        why: "Acceleration points the direction of the CHANGE in velocity. Slowing while moving east means the change is westward. 'Slowing down' does not mean 'negative' automatically; compare the signs of v and a."
      },
      {
        q: "A ball is tossed straight up. At the very top, its velocity is momentarily zero. What is its acceleration there?",
        choices: ["0 m/s²", "9.8 m/s² downward", "9.8 m/s² upward", "It depends on how hard it was thrown"],
        answer: 1,
        why: "Zero velocity is not zero acceleration. Gravity pulls the whole time, so a = 9.8 m/s² downward at every point of the flight."
      },
      {
        q: "On a position-vs-time graph, what does the slope represent?",
        choices: ["Acceleration", "Velocity", "Displacement", "Distance"],
        answer: 1,
        why: "Slope of x-t = velocity. Slope of v-t = acceleration. Area under v-t = displacement. Students often mix up which graph they are reading."
      },
      {
        q: "An object moves at a constant 4 m/s for 5 s (a flat line on a v-t graph). What is its displacement?",
        choices: ["0.8 m", "9 m", "20 m", "It cannot be found from the graph"],
        answer: 2,
        why: "Displacement is the AREA under the v-t graph: 4 m/s × 5 s = 20 m. Flat line means zero acceleration, not zero motion."
      },
      {
        q: "A car starts from rest and accelerates at 3 m/s² for 4 s. How far does it travel?",
        choices: ["12 m", "24 m", "48 m", "6 m"],
        answer: 1,
        why: "Use d = v₀t + ½at² = 0 + ½(3)(4²) = 24 m. Forgetting the ½ (giving 48 m) or computing v×t with the final speed (12 × 4) are the usual errors."
      },
      {
        q: "A hiker walks 6 m east, then 2 m west. What are the distance and displacement?",
        choices: ["Distance 8 m, displacement 4 m east", "Distance 4 m, displacement 8 m", "Distance 4 m, displacement 4 m east", "Distance 8 m, displacement 8 m east"],
        answer: 0,
        why: "Distance adds the path lengths (6 + 2 = 8 m). Displacement is the straight-line change in position, with direction (6 − 2 = 4 m east)."
      },
      {
        q: "A rock is dropped from rest. How fast is it moving after 2.0 s of free fall?",
        choices: ["9.8 m/s", "19.6 m/s", "39.2 m/s", "4.9 m/s"],
        answer: 1,
        why: "v = gt = 9.8 × 2.0 = 19.6 m/s. (Distance fallen is ½gt² = 19.6 m, which happens to be the same number here; don't confuse the two.)"
      },
      {
        q: "A driver covers 60 km at 30 km/h, then another 60 km at 60 km/h. What is the average speed for the whole trip?",
        choices: ["45 km/h", "40 km/h", "30 km/h", "60 km/h"],
        answer: 1,
        why: "Average speed = total distance ÷ total time = 120 km ÷ (2 h + 1 h) = 40 km/h. Averaging the two speeds (45) only works if the TIMES are equal."
      }
    ]
  },
  {
    id: "projectile",
    title: "Projectile Motion",
    standards: "HS-PS2-1 (vector components, independence of x and y)",
    questions: [
      {
        q: "One ball is dropped from a table while another is rolled horizontally off the same table at the same instant. Which lands first (no air resistance)?",
        choices: ["The dropped ball", "The rolled ball", "They land at the same time", "It depends on the rolled ball's speed"],
        answer: 2,
        why: "Vertical and horizontal motion are independent. Both start with zero vertical velocity and fall with the same g, so the fall time is identical."
      },
      {
        q: "Ignoring air resistance, what is the horizontal acceleration of a projectile in flight?",
        choices: ["9.8 m/s² forward", "9.8 m/s² backward", "Zero", "It decreases over time"],
        answer: 2,
        why: "The only force is gravity (vertical). No horizontal force means constant horizontal velocity."
      },
      {
        q: "At the highest point of a projectile's path (launched at an angle), which statement is true?",
        choices: ["Velocity is zero and acceleration is zero", "Velocity is horizontal and acceleration is 9.8 m/s² downward", "Velocity is zero and acceleration is 9.8 m/s² downward", "Velocity is horizontal and acceleration is zero"],
        answer: 1,
        why: "Only the VERTICAL velocity is zero at the top. The horizontal velocity is unchanged and non-zero, and gravity still acts."
      },
      {
        q: "A ball is thrown horizontally at 20 m/s from a cliff 19.6 m high. How far from the base does it land?",
        choices: ["20 m", "40 m", "19.6 m", "80 m"],
        answer: 1,
        why: "Fall time: 19.6 = ½(9.8)t² gives t = 2.0 s. Range = vₓt = 20 × 2.0 = 40 m. Find the time from the vertical motion, then use it for the horizontal."
      },
      {
        q: "For a given launch speed on level ground, which pair of launch angles gives the same range?",
        choices: ["30° and 45°", "30° and 60°", "20° and 50°", "45° and 90°"],
        answer: 1,
        why: "Complementary angles (adding to 90°) give equal range. The maximum range occurs at 45°."
      },
      {
        q: "A projectile is launched at 19.6 m/s at 30° above horizontal from level ground. What is its total time in the air?",
        choices: ["1 s", "2 s", "4 s", "3.4 s"],
        answer: 1,
        why: "Use only the vertical component: v_y = 19.6 sin 30° = 9.8 m/s. Time up = 1 s, total = 2 s. Using the full 19.6 m/s gives the wrong answer (4 s)."
      },
      {
        q: "Ball A is thrown horizontally harder than ball B from the same height. Which hits the ground first?",
        choices: ["A", "B", "Both at the same time", "Cannot be determined"],
        answer: 2,
        why: "Fall time depends only on height. Extra horizontal speed changes how FAR the ball goes, not how long it falls."
      },
      {
        q: "A ball is thrown upward at an angle. How does its speed when it returns to launch height compare with its launch speed?",
        choices: ["Smaller", "Larger", "Equal, but the direction is different", "Equal, and the direction is the same"],
        answer: 2,
        why: "With no air resistance, energy is conserved, so speed at equal heights is equal. The vertical velocity component has flipped from up to down."
      }
    ]
  },
  {
    id: "newton",
    title: "Newton's Laws",
    standards: "HS-PS2-1 (F = ma), HS-PS2-4 (gravity)",
    questions: [
      {
        q: "An object moves at constant velocity across a frictionless surface. What is the net force on it?",
        choices: ["Zero", "Equal to its weight", "In the direction of motion, proportional to speed", "Equal to its momentum"],
        answer: 0,
        why: "Newton's 1st law: constant velocity (including zero) means net force is zero. Force changes motion; it is not needed to maintain it."
      },
      {
        q: "A large truck collides head-on with a small car. Which exerts the larger force on the other?",
        choices: ["The truck", "The car", "They exert equal-magnitude forces", "Depends on who was moving faster"],
        answer: 2,
        why: "Newton's 3rd law: interaction forces are equal and opposite. The car suffers the greater ACCELERATION because it has less mass (a = F/m)."
      },
      {
        q: "A net force of 50 N acts on a 10 kg cart. What is its acceleration?",
        choices: ["0.2 m/s²", "5 m/s²", "500 m/s²", "40 m/s²"],
        answer: 1,
        why: "a = F_net / m = 50 / 10 = 5 m/s². Be sure it is NET force, and divide by mass."
      },
      {
        q: "An elevator, with you standing on a scale, moves upward at a constant speed of 3 m/s. The scale reads:",
        choices: ["More than your weight", "Less than your weight", "Exactly your weight", "Zero"],
        answer: 2,
        why: "Constant velocity means zero acceleration, so the normal force equals mg. Only ACCELERATING up (or down) changes the reading."
      },
      {
        q: "A 60 kg astronaut travels to the Moon, where g ≈ 1.6 m/s². Which quantity stays the same?",
        choices: ["Weight", "Mass", "Both", "Neither"],
        answer: 1,
        why: "Mass is the amount of matter and does not change. Weight (the gravitational force, mg) does."
      },
      {
        q: "A book rests on a table. Which force is the Newton's 3rd-law partner of the book's weight (Earth pulling the book down)?",
        choices: ["The table pushing up on the book", "The book pulling up on the Earth", "The table pushing down on the floor", "Friction"],
        answer: 1,
        why: "Third-law pairs act on DIFFERENT objects and are the same type of force. Weight and the normal force act on the same object; they balance because of the 1st law, not the 3rd."
      },
      {
        q: "You push a crate at constant velocity with 20 N across a rough floor. The friction force on the crate is:",
        choices: ["Less than 20 N", "Exactly 20 N", "More than 20 N", "Zero"],
        answer: 1,
        why: "Constant velocity means net force is zero, so friction balances the 20 N push."
      },
      {
        q: "A skydiver falls at terminal velocity. The net force on the skydiver is:",
        choices: ["Downward, equal to weight", "Upward, equal to air resistance", "Zero", "Downward, increasing"],
        answer: 2,
        why: "At terminal velocity air resistance equals weight, so the net force and acceleration are zero. The skydiver is still moving fast; velocity is constant."
      }
    ]
  },
  {
    id: "momentum",
    title: "Momentum",
    standards: "HS-PS2-2 (conservation of momentum), HS-PS2-3 (reducing collision forces)",
    questions: [
      {
        q: "What is the momentum of a 1000 kg car traveling at 20 m/s?",
        choices: ["50 kg·m/s", "20,000 kg·m/s", "200,000 kg·m/s", "10,000 kg·m/s"],
        answer: 1,
        why: "p = mv = 1000 × 20 = 20,000 kg·m/s. Do not include the ½ and the square; that is kinetic energy."
      },
      {
        q: "A 0.5 kg ball hits a wall at 4 m/s and bounces straight back at 4 m/s. What is the magnitude of its change in momentum?",
        choices: ["0", "2 kg·m/s", "4 kg·m/s", "Cannot be determined"],
        answer: 2,
        why: "Momentum is a vector. Δp = m(v_f − v_i) = 0.5(−4 − 4) = −4 kg·m/s. Same speed does not mean the same momentum when the direction reverses."
      },
      {
        q: "Why does an airbag reduce injury in a crash?",
        choices: ["It reduces the change in momentum", "It increases the time of the collision, lowering the average force", "It increases the impulse", "It makes the car stop faster"],
        answer: 1,
        why: "Impulse FΔt = Δp is fixed by the stop. A longer Δt means a smaller average force. The airbag does not change Δp."
      },
      {
        q: "A 2 kg cart moving at 6 m/s sticks to a 4 kg cart at rest. What is their final speed?",
        choices: ["6 m/s", "3 m/s", "2 m/s", "1.5 m/s"],
        answer: 2,
        why: "m₁v₁ = (m₁ + m₂)v_f, so 12 = 6 v_f and v_f = 2 m/s. Use the combined mass after the collision."
      },
      {
        q: "In an inelastic collision (objects stick together), which quantity is conserved?",
        choices: ["Kinetic energy only", "Momentum only", "Both momentum and kinetic energy", "Neither"],
        answer: 1,
        why: "Momentum is conserved in every collision of an isolated system. Kinetic energy is lost to heat, sound, and deformation in an inelastic collision."
      },
      {
        q: "A 50 kg skater and a 25 kg skater, initially at rest, push apart on ice. Which statement is correct?",
        choices: ["Both move at the same speed", "The 25 kg skater moves faster, and the momenta are equal and opposite", "The 50 kg skater moves faster", "The total momentum afterward is not zero"],
        answer: 1,
        why: "Total momentum stays zero, so m₁v₁ = −m₂v₂. The skater with half the mass moves twice as fast."
      },
      {
        q: "Two 5 kg carts approach each other head-on, each at 3 m/s, and stick together. What is their final velocity?",
        choices: ["6 m/s", "3 m/s", "0", "1.5 m/s"],
        answer: 2,
        why: "Take one direction as positive: +15 + (−15) = 0 kg·m/s total. Opposing momenta cancel. Always assign signs."
      },
      {
        q: "A constant force of 200 N acts on an object for 0.10 s. What impulse does it deliver?",
        choices: ["2000 N·s", "20 N·s", "0.5 N·s", "200 N·s"],
        answer: 1,
        why: "Impulse J = FΔt = 200 × 0.10 = 20 N·s (equal to the change in momentum, 20 kg·m/s). It is also the area under a force-time graph."
      }
    ]
  },
  {
    id: "energy",
    title: "Work & Energy",
    standards: "HS-PS3-1, HS-PS3-2, HS-PS3-3 (energy and conversion)",
    questions: [
      {
        q: "You carry a heavy box horizontally at constant speed across a room. How much work do you do on the box (against gravity)?",
        choices: ["Positive, because you are tired", "Zero, because the force is perpendicular to the displacement", "Negative", "mg × distance"],
        answer: 1,
        why: "W = Fd cos θ. Your upward force is at 90° to the horizontal displacement, so cos 90° = 0. Feeling tired is biology, not physics work."
      },
      {
        q: "A 50 N force pushes a crate 10 m in the direction of the force. How much work is done?",
        choices: ["5 J", "60 J", "500 J", "250 J"],
        answer: 2,
        why: "W = Fd = 50 × 10 = 500 J."
      },
      {
        q: "A car doubles its speed. How does its kinetic energy change?",
        choices: ["Doubles", "Triples", "Quadruples", "Stays the same"],
        answer: 2,
        why: "KE = ½mv². Speed is squared, so 2² = 4 times the energy. This is why stopping distance grows so fast with speed."
      },
      {
        q: "A 2 kg ball is dropped from 5 m. What is its speed just before impact (no air resistance)?",
        choices: ["4.9 m/s", "9.9 m/s", "49 m/s", "98 m/s"],
        answer: 1,
        why: "mgh = ½mv², so v = √(2gh) = √(98) ≈ 9.9 m/s. Mass cancels, so it does not appear in the answer."
      },
      {
        q: "Two ramps, one steep and short, one gentle and long, both lift a box to the same height. Compared to each other, the gravitational potential energy gained is:",
        choices: ["Greater on the steep ramp", "Greater on the long ramp", "The same", "Zero for both"],
        answer: 2,
        why: "Gravitational PE depends only on the change in height (mgh), not the path taken. The long ramp needs less force over a longer distance."
      },
      {
        q: "A machine does 600 J of work in 3 s. What is its power?",
        choices: ["1800 W", "200 W", "2 W", "603 W"],
        answer: 1,
        why: "P = W/t = 600 / 3 = 200 W. Power is the rate of doing work, not the amount."
      },
      {
        q: "A car speeds up from 10 m/s to 20 m/s. Compared to the work needed to go from 0 to 10 m/s, the work needed is:",
        choices: ["The same", "Twice as much", "Three times as much", "Four times as much"],
        answer: 2,
        why: "Net work = ΔKE. From 0 to 10: ½m(100) = 50m. From 10 to 20: ½m(400 − 100) = 150m. Three times, not two."
      },
      {
        q: "A skater coasts to a stop on level ice. Where did her kinetic energy go?",
        choices: ["It was destroyed", "It became thermal energy (and a little sound)", "It became gravitational potential energy", "It stayed as kinetic energy"],
        answer: 1,
        why: "Energy is conserved. Friction transforms mechanical energy into thermal energy of the skates and ice. It is not 'lost'; it is no longer useful mechanical energy."
      }
    ]
  }
];
