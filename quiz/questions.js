// Most-missed question bank, grouped by topic.
// answer = index into options. trap = the misconception the wrong answers exploit.
// Loaded by index.html and checked by validate.js.
const TOPICS = [
  {
    id: "kinematics",
    title: "Kinematics",
    questions: [
      {
        q: "A ball is thrown straight up. At the very top of its path, what are its velocity and acceleration? (Ignore air resistance.)",
        options: [
          "v = 0, a = 0",
          "v = 0, a = 9.8 m/s² downward",
          "v = 9.8 m/s upward, a = 0",
          "v = 0, a = 9.8 m/s² upward"
        ],
        answer: 1,
        why: "Gravity acts the whole flight, so a = 9.8 m/s² down at every point. The velocity is only momentarily zero as it changes from up to down.",
        trap: "Zero velocity does not mean zero acceleration."
      },
      {
        q: "A runner completes one full 400 m lap in 80 s and ends where she started. What is her average velocity?",
        options: ["5 m/s", "0 m/s", "400 m/s", "80 m/s"],
        answer: 1,
        why: "Average velocity = displacement / time. Displacement is 0 because she finished at the start. Her average speed is 400/80 = 5 m/s.",
        trap: "Confusing distance (path length) with displacement (net change in position)."
      },
      {
        q: "On a position-vs-time graph, a curve that slopes upward and keeps getting steeper means the object is...",
        options: [
          "moving at constant velocity",
          "at rest",
          "speeding up",
          "slowing down"
        ],
        answer: 2,
        why: "Slope of x-t is velocity. A steepening slope means velocity is increasing, so the object is accelerating (speeding up in the positive direction).",
        trap: "Reading a position graph as a picture of the path instead of reading its slope."
      },
      {
        q: "A velocity-vs-time graph shows a horizontal line at +4 m/s from t = 0 to t = 5 s. What is the displacement?",
        options: ["4 m", "5 m", "20 m", "0 m"],
        answer: 2,
        why: "Area under a v-t graph is displacement: 4 m/s × 5 s = 20 m. The slope is zero, so acceleration is zero.",
        trap: "Reading the height of the line as the answer instead of the area."
      },
      {
        q: "A rock is dropped from rest. Compared with the distance it falls in the first 1 s, how far does it fall in the first 2 s?",
        options: ["2 times as far", "3 times as far", "4 times as far", "The same distance"],
        answer: 2,
        why: "d = ½gt², so distance grows with t². Doubling the time gives 2² = 4 times the distance.",
        trap: "Assuming distance is proportional to time. Under constant acceleration it is proportional to time squared."
      },
      {
        q: "A car moves at constant speed around a circular track. Is the car accelerating?",
        options: [
          "No, its speed is constant",
          "Yes, its direction is changing so its velocity is changing",
          "Only at the start of the turn",
          "Only if it is also speeding up"
        ],
        answer: 1,
        why: "Acceleration is a change in velocity, and velocity is a vector. Changing direction is a change in velocity.",
        trap: "Treating speed and velocity as the same thing."
      },
      {
        q: "You drive 60 km at 30 km/h, then another 60 km at 60 km/h. What is your average speed for the whole trip?",
        options: ["45 km/h", "40 km/h", "30 km/h", "60 km/h"],
        answer: 1,
        why: "Total distance = 120 km. Time = 60/30 + 60/60 = 2 h + 1 h = 3 h. Average speed = 120/3 = 40 km/h. You spend more time at the slow speed.",
        trap: "Averaging the two speeds instead of dividing total distance by total time."
      },
      {
        q: "A bowling ball and a tennis ball are dropped together from the same height in a vacuum. Which hits the ground first?",
        options: [
          "The bowling ball",
          "The tennis ball",
          "They land at the same time",
          "It depends on the height only"
        ],
        answer: 2,
        why: "Free-fall acceleration does not depend on mass. Both accelerate at g. (In air, drag makes lighter, less compact objects fall slower.)",
        trap: "Believing heavier objects fall faster."
      },
      {
        q: "An object has velocity −5 m/s and acceleration −2 m/s². What is happening to its speed?",
        options: [
          "It is slowing down",
          "It is speeding up",
          "It is constant",
          "It is zero"
        ],
        answer: 1,
        why: "Velocity and acceleration point the same way (both negative), so the object speeds up. It slows down only when they have opposite signs.",
        trap: "Thinking a negative acceleration always means slowing down."
      }
    ]
  },
  {
    id: "projectile",
    title: "Projectile Motion",
    questions: [
      {
        q: "One ball is dropped from a table while another is rolled off the table horizontally at the same instant. Which hits the floor first?",
        options: [
          "The dropped ball",
          "The ball rolled off the edge",
          "They hit at the same time",
          "It depends on the horizontal speed"
        ],
        answer: 2,
        why: "Vertical motion is independent of horizontal motion. Both start with zero vertical velocity and fall the same height with the same g.",
        trap: "Thinking horizontal speed changes fall time."
      },
      {
        q: "Ignoring air resistance, what is the horizontal acceleration of a projectile in flight?",
        options: ["9.8 m/s²", "Equal to its initial speed", "Zero", "It decreases as the projectile rises"],
        answer: 2,
        why: "The only force is gravity, which is vertical. With no horizontal force, horizontal velocity stays constant.",
        trap: "Believing the launch 'force' keeps acting on the projectile."
      },
      {
        q: "A ball is kicked at an angle. At the highest point of its path, which statement is true?",
        options: [
          "Its speed is zero",
          "Its vertical velocity is zero and its horizontal velocity is unchanged",
          "Its acceleration is zero",
          "Its horizontal velocity is zero"
        ],
        answer: 1,
        why: "At the peak vy = 0, but vx is the same as at launch, so the ball is still moving. Acceleration is still g downward.",
        trap: "Treating the peak as a stopping point for the whole motion."
      },
      {
        q: "Ignoring air resistance, what launch angle (from level ground) gives the maximum range?",
        options: ["30°", "45°", "60°", "90°"],
        answer: 1,
        why: "Range = v² sin(2θ)/g is largest when sin(2θ) = 1, i.e. θ = 45°.",
        trap: "Thinking steeper means farther."
      },
      {
        q: "Two projectiles have the same launch speed, one at 30° and one at 60°. How do their ranges compare on level ground?",
        options: [
          "The 60° one goes farther",
          "The 30° one goes farther",
          "They have the same range",
          "Cannot be determined"
        ],
        answer: 2,
        why: "Complementary angles (adding to 90°) give equal range because sin(60°) = sin(120°). The 60° shot stays in the air longer.",
        trap: "Equating range with time in the air."
      },
      {
        q: "A projectile is launched at the same angle but with twice the speed. How does its range change?",
        options: ["2 times", "4 times", "8 times", "It stays the same"],
        answer: 1,
        why: "Range is proportional to v². Doubling the speed gives 2² = 4 times the range.",
        trap: "Assuming a linear relationship."
      },
      {
        q: "A plane flying level at constant velocity drops a package. Ignoring air resistance, where is the package relative to the plane as it falls?",
        options: [
          "Behind the plane, because it is no longer pushed",
          "Directly below the plane",
          "Ahead of the plane",
          "It falls straight down relative to the ground"
        ],
        answer: 1,
        why: "The package keeps the plane's horizontal velocity, so it stays directly below the plane. Relative to the ground its path is a parabola.",
        trap: "Believing the package loses its horizontal motion once released."
      },
      {
        q: "A ball is launched at 20 m/s at 30° above the horizontal on level ground. Which quantity sets how long the ball is in the air?",
        options: [
          "The horizontal component of velocity",
          "The vertical component of velocity",
          "The total range",
          "The mass of the ball"
        ],
        answer: 1,
        why: "Time of flight is 2·vy/g and depends only on the vertical component. Range is then vx × time.",
        trap: "Mixing the x and y components in the same equation."
      },
      {
        q: "A ball is thrown horizontally at 10 m/s from a cliff 20 m high (g = 10 m/s²). How far from the base of the cliff does it land?",
        options: ["10 m", "20 m", "40 m", "200 m"],
        answer: 1,
        why: "Fall time t = √(2h/g) = √(2·20/10) = 2 s. Range = vx·t = 10 × 2 = 20 m.",
        trap: "Skipping the time step, which is the link between the vertical and horizontal motion."
      }
    ]
  },
  {
    id: "newton",
    title: "Newton's Laws",
    questions: [
      {
        q: "A hockey puck slides across ice at constant velocity. What can you say about the net force on it?",
        options: [
          "It points forward, in the direction of motion",
          "It is zero",
          "It equals the puck's weight",
          "It is less than friction"
        ],
        answer: 1,
        why: "Newton's 1st law: constant velocity means zero acceleration, so the net force is zero (and the friction here is negligible).",
        trap: "Believing a force is needed to maintain motion."
      },
      {
        q: "A book rests on a table. Which force is the Newton's 3rd-law partner of the book's weight (Earth's pull on the book)?",
        options: [
          "The normal force of the table on the book",
          "The force of the book on the table",
          "The book's pull on the Earth",
          "The friction force on the book"
        ],
        answer: 2,
        why: "A 3rd-law pair acts on different objects and is the same type of force. Earth pulls book, so book pulls Earth. The normal force just happens to balance weight here.",
        trap: "Pairing weight and normal force. They act on the same object, so they are not a 3rd-law pair."
      },
      {
        q: "A large truck collides head-on with a small car. During the collision, which exerts the larger force?",
        options: [
          "The truck on the car",
          "The car on the truck",
          "Both exert equal magnitude forces",
          "It depends on who was moving faster"
        ],
        answer: 2,
        why: "Newton's 3rd law: the forces are equal and opposite. The car has a much larger acceleration because its mass is smaller (a = F/m).",
        trap: "Confusing the size of the force with the size of the effect."
      },
      {
        q: "A 70 kg astronaut travels from Earth to the Moon (g ≈ 1.6 m/s²). Which statement is correct?",
        options: [
          "Mass and weight both decrease",
          "Mass stays at 70 kg; weight decreases to about 112 N",
          "Mass decreases; weight stays about 686 N",
          "Neither changes"
        ],
        answer: 1,
        why: "Mass is the amount of matter and doesn't change. Weight = mg = 70 × 1.6 ≈ 112 N on the Moon, versus about 686 N on Earth.",
        trap: "Using mass and weight interchangeably."
      },
      {
        q: "You stand on a bathroom scale in an elevator that is accelerating upward. Compared with your normal reading, the scale reads...",
        options: ["Less", "The same", "More", "Zero"],
        answer: 2,
        why: "N − mg = ma, so N = m(g + a), which is greater than mg. The scale reads the normal force, not your true weight.",
        trap: "Assuming the scale always shows mg."
      },
      {
        q: "A skydiver reaches terminal velocity. What is the net force on the skydiver?",
        options: [
          "Downward, equal to the weight",
          "Upward, equal to the drag",
          "Zero",
          "Increasing"
        ],
        answer: 2,
        why: "At terminal velocity, drag equals weight. The net force is zero so the velocity stays constant.",
        trap: "Thinking a falling object must still have a downward net force."
      },
      {
        q: "The same net force is applied first to a 2 kg cart, then to a 4 kg cart. How do the accelerations compare?",
        options: [
          "The 4 kg cart accelerates twice as much",
          "They are the same",
          "The 4 kg cart accelerates half as much",
          "The 4 kg cart accelerates one fourth as much"
        ],
        answer: 2,
        why: "a = F/m. Doubling the mass at the same force halves the acceleration.",
        trap: "Mixing up direct and inverse proportions."
      },
      {
        q: "You push a heavy crate with 100 N but it does not move. What is the friction force on the crate?",
        options: ["0 N", "Less than 100 N", "100 N", "More than 100 N"],
        answer: 2,
        why: "The crate is in equilibrium, so static friction exactly balances the push: 100 N. Static friction adjusts up to a maximum of μs·N.",
        trap: "Using f = μN for every situation. That is only the maximum static or the kinetic value."
      },
      {
        q: "Two masses, 2 kg and 3 kg, hang from a string over a frictionless pulley (g = 10 m/s²). What is the acceleration of the system?",
        options: ["1 m/s²", "2 m/s²", "5 m/s²", "10 m/s²"],
        answer: 1,
        why: "a = (m2 − m1)g/(m1 + m2) = (1 × 10)/5 = 2 m/s². The tension is not 30 N or 20 N; it is in between (24 N).",
        trap: "Assuming tension equals the weight of one of the masses."
      }
    ]
  },
  {
    id: "momentum",
    title: "Momentum",
    questions: [
      {
        q: "Two carts collide and stick together. Which quantity is conserved in the collision (no external forces)?",
        options: [
          "Kinetic energy only",
          "Momentum only",
          "Both momentum and kinetic energy",
          "Neither"
        ],
        answer: 1,
        why: "Momentum is conserved in every collision of an isolated system. Kinetic energy is lost in a perfectly inelastic collision (as heat, sound, deformation).",
        trap: "Assuming energy and momentum are always conserved together."
      },
      {
        q: "An airbag helps protect a driver in a crash mainly by...",
        options: [
          "Reducing the change in momentum",
          "Increasing the time over which the momentum changes",
          "Increasing the force on the driver",
          "Reducing the driver's mass"
        ],
        answer: 1,
        why: "Impulse F·Δt = Δp is fixed by the stop. Making Δt longer makes the average force smaller.",
        trap: "Thinking safety devices change Δp rather than Δt."
      },
      {
        q: "Cart A (1 kg) moves right at 4 m/s. Cart B (1 kg) moves left at 4 m/s. What is the total momentum of the system?",
        options: ["8 kg·m/s right", "8 kg·m/s left", "0", "16 kg·m/s"],
        answer: 2,
        why: "Momentum is a vector: +4 + (−4) = 0.",
        trap: "Adding magnitudes and ignoring direction."
      },
      {
        q: "A ball hits a wall. In Case 1 it sticks. In Case 2 it bounces back with the same speed. In which case is the impulse on the ball greater?",
        options: [
          "Case 1: sticking",
          "Case 2: bouncing",
          "They are equal",
          "Neither; there is no impulse"
        ],
        answer: 1,
        why: "Stopping gives Δp = 0 − mv = −mv. Bouncing gives Δp = −mv − mv = −2mv. Twice the impulse.",
        trap: "Ignoring that reversing direction doubles the change in momentum."
      },
      {
        q: "A rifle fires a bullet. Compared with the bullet, the rifle's recoil momentum has...",
        options: [
          "Greater magnitude",
          "Equal magnitude, opposite direction",
          "Smaller magnitude",
          "The same direction"
        ],
        answer: 1,
        why: "Total momentum starts at zero and is conserved, so the rifle and the bullet have equal and opposite momenta. The rifle moves slowly because it has much more mass.",
        trap: "Confusing equal momentum with equal speed."
      },
      {
        q: "Which has more momentum: a 1000 kg car moving at 2 m/s or a 2 kg object moving at 400 m/s?",
        options: [
          "The car (2000 kg·m/s vs 800 kg·m/s)",
          "The object (800 kg·m/s vs 2000 kg·m/s)",
          "They are equal",
          "The one with greater speed always has more"
        ],
        answer: 0,
        why: "p = mv. Car: 1000 × 2 = 2000. Object: 2 × 400 = 800. Mass matters as much as speed.",
        trap: "Focusing on speed alone."
      },
      {
        q: "A 2 kg cart moving at 6 m/s collides with and sticks to a 4 kg cart at rest. What is their speed after the collision?",
        options: ["1.5 m/s", "2 m/s", "3 m/s", "6 m/s"],
        answer: 1,
        why: "m1v1 = (m1 + m2)v. 12 = 6v, so v = 2 m/s. (Kinetic energy drops from 36 J to 12 J.)",
        trap: "Using only one mass for the final mass."
      },
      {
        q: "A 1 kg cart moving at 3 m/s collides elastically with an identical 1 kg cart at rest. What happens?",
        options: [
          "Both move at 1.5 m/s",
          "The first stops and the second moves at 3 m/s",
          "Both stop",
          "The first rebounds at 3 m/s"
        ],
        answer: 1,
        why: "For equal masses in a head-on elastic collision, velocities are exchanged. This satisfies both conservation of momentum and conservation of kinetic energy.",
        trap: "Choosing 1.5 m/s, which conserves momentum but not kinetic energy (that is the inelastic case)."
      },
      {
        q: "The area under a force-vs-time graph represents...",
        options: ["Work", "Impulse (change in momentum)", "Power", "Acceleration"],
        answer: 1,
        why: "Impulse = ∫F dt = Δp. (The area under a force-vs-distance graph is work.)",
        trap: "Mixing up F-t and F-d graphs."
      }
    ]
  },
  {
    id: "energy",
    title: "Work & Energy",
    questions: [
      {
        q: "You carry a heavy box horizontally across a room at constant speed. How much work do you do on the box?",
        options: [
          "Force × distance, a large positive amount",
          "Zero, because the force you apply is perpendicular to the displacement",
          "Negative",
          "It depends on the speed"
        ],
        answer: 1,
        why: "W = Fd cosθ. You push up, the box moves sideways, θ = 90°, and cos 90° = 0.",
        trap: "Equating effort or tiredness with physics work."
      },
      {
        q: "A car doubles its speed. What happens to its kinetic energy?",
        options: ["Doubles", "Triples", "Quadruples", "Stays the same"],
        answer: 2,
        why: "KE = ½mv². Doubling v multiplies KE by 2² = 4.",
        trap: "Treating KE as proportional to speed."
      },
      {
        q: "A block slides down a rough ramp and slows to a stop at the bottom. Where did its mechanical energy go?",
        options: [
          "It was destroyed",
          "It was converted to thermal energy",
          "It became potential energy",
          "Energy is not conserved when friction is present"
        ],
        answer: 1,
        why: "Total energy is always conserved. Friction turns mechanical energy into thermal energy (heating the block and the ramp).",
        trap: "Saying energy 'is lost' rather than transformed."
      },
      {
        q: "Two frictionless ramps, one steep and one gentle, descend the same height. A cart is released from rest at the top of each. Compared with the other, the cart's speed at the bottom of the steep ramp is...",
        options: ["Greater", "Smaller", "The same", "Twice as great"],
        answer: 2,
        why: "mgh = ½mv², so v = √(2gh) depends only on height. The steep ramp just gets there in less time.",
        trap: "Mixing up speed at the bottom with time to reach the bottom."
      },
      {
        q: "A kilowatt-hour (kWh) on your electric bill is a unit of...",
        options: ["Power", "Energy", "Force", "Voltage"],
        answer: 1,
        why: "Power × time = energy. 1 kWh = 1000 W × 3600 s = 3.6 million joules.",
        trap: "Seeing 'watt' and assuming power."
      },
      {
        q: "A satellite moves in a circle at constant speed. How much work does gravity (the centripetal force) do on it in one orbit?",
        options: ["A large positive amount", "A large negative amount", "Zero", "mg times the circumference"],
        answer: 2,
        why: "The force points to the center and the motion is tangent to the circle, so θ = 90° at every point and the work is zero. Speed stays constant.",
        trap: "Thinking any force acting through a distance does work."
      },
      {
        q: "A car going at speed v can brake to a stop in distance d on a level road with constant braking force. How far does it take to stop if it started at 2v?",
        options: ["2d", "3d", "4d", "8d"],
        answer: 2,
        why: "Work-energy theorem: F·d = ½mv². Distance is proportional to v², so doubling v gives 4d.",
        trap: "Assuming stopping distance scales linearly with speed."
      },
      {
        q: "A spring is compressed twice as far as before. How does the stored elastic potential energy change?",
        options: ["2 times", "4 times", "Half as much", "It is unchanged"],
        answer: 1,
        why: "PE = ½kx². Doubling x quadruples the energy.",
        trap: "Treating the energy as proportional to x."
      },
      {
        q: "A 2 kg ball is lifted 3 m in 4 s (g = 10 m/s²). What is the average power delivered?",
        options: ["15 W", "60 W", "6 W", "240 W"],
        answer: 0,
        why: "W = mgh = 2 × 10 × 3 = 60 J. P = W/t = 60/4 = 15 W.",
        trap: "Forgetting to divide by the time, or reporting energy as power."
      },
      {
        q: "A friction force acts opposite to the motion of a sliding block. The work done by friction is...",
        options: ["Positive", "Negative", "Zero", "Always equal to mgh"],
        answer: 1,
        why: "Force and displacement are in opposite directions, θ = 180°, cos 180° = −1. Negative work removes mechanical energy.",
        trap: "Believing work is always positive."
      }
    ]
  }
];

if (typeof module !== "undefined") module.exports = { TOPICS };
