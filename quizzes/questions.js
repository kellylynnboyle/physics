// Question bank for the Semester 1 "Most-Missed Questions" quizzes.
// Each question targets a well-documented physics misconception.
// Fields: obj = learning objective ID (see ../assessment/learning-objectives.md),
//         q = question, choices = answer options, answer = index of the correct choice,
//         trap = the misconception behind the most common wrong answer,
//         why = explanation shown after answering.
// Free fall uses g = 9.8 m/s^2 and ignores air resistance unless a question says otherwise.

const QUIZ = [
  {
    id: "kinematics",
    title: "Kinematics",
    folder: "01-kinematics",
    questions: [
      {
        obj: "K5",
        q: "A ball is thrown straight up. At the very top of its path, what is its acceleration?",
        choices: ["9.8 m/s² downward", "Zero", "9.8 m/s² upward", "It depends on how hard it was thrown"],
        answer: 0,
        trap: "Zero velocity must mean zero acceleration.",
        why: "Velocity is zero for an instant at the top, but velocity is still changing (from upward to downward), so the acceleration is still 9.8 m/s² downward. Gravity does not switch off at the top."
      },
      {
        obj: "K3",
        q: "An object has a velocity of −8 m/s and an acceleration of −2 m/s². What is the object doing?",
        choices: ["Speeding up", "Slowing down", "Moving at constant speed", "Turning around"],
        answer: 0,
        trap: "Negative acceleration always means slowing down.",
        why: "When velocity and acceleration have the same sign, the object speeds up. Here both are negative, so the object moves in the negative direction faster and faster. An object slows down only when velocity and acceleration have opposite signs."
      },
      {
        obj: "K2",
        q: "On a position-time graph, a horizontal straight line means the object is…",
        choices: ["At rest", "Moving at constant velocity", "Accelerating at a constant rate", "Moving along a flat road"],
        answer: 0,
        trap: "Reading a position-time graph as if it were a velocity-time graph (or a picture of the road).",
        why: "The slope of a position-time graph is the velocity. A horizontal line has zero slope, so the velocity is zero: the position is not changing. A horizontal line means constant velocity only on a velocity-time graph."
      },
      {
        obj: "K2",
        q: "A velocity-time graph is a straight line rising from 0 m/s to 12 m/s over 4 s. How far does the object travel in those 4 s?",
        choices: ["24 m", "48 m", "12 m", "3 m"],
        answer: 0,
        trap: "Multiplying the final velocity by the time (12 × 4 = 48 m), or reading the slope instead of the area.",
        why: "Displacement is the area under a velocity-time graph. The area is a triangle: ½ × 4 s × 12 m/s = 24 m. The object was not going 12 m/s the whole time; its average velocity was 6 m/s. The slope (3 m/s²) is the acceleration, not the distance."
      },
      {
        obj: "K1",
        q: "A runner completes one full 400 m lap of a track in 80 s, finishing where she started. What is her average velocity for the lap?",
        choices: ["0 m/s", "5 m/s", "10 m/s", "0.2 m/s"],
        answer: 0,
        trap: "Treating average velocity and average speed as the same thing.",
        why: "Average velocity = displacement ÷ time. She ends where she began, so her displacement is 0 m and her average velocity is 0 m/s. Her average speed (distance ÷ time) is 400 m ÷ 80 s = 5 m/s."
      },
      {
        obj: "K5",
        q: "A 5 kg bowling ball and a 0.5 kg ball are dropped from the same height at the same time. Ignoring air resistance, which hits the ground first?",
        choices: ["They hit at the same time", "The bowling ball", "The lighter ball", "The bowling ball, in one-tenth the time"],
        answer: 0,
        trap: "Heavier objects fall faster.",
        why: "Without air resistance every object in free fall has the same acceleration, 9.8 m/s² downward. Gravity pulls ten times harder on the bowling ball, but the ball also has ten times the mass to accelerate, so the two effects cancel (a = F/m)."
      },
      {
        obj: "K4",
        q: "A rock is dropped from rest. Compared with the distance it falls in the first 1 s, how far has it fallen in total after 2 s?",
        choices: ["4 times as far", "2 times as far", "3 times as far", "The same distance"],
        answer: 0,
        trap: "Distance fallen is proportional to time (double the time, double the distance).",
        why: "From rest, d = ½at². Distance depends on time squared, so doubling the time gives 2² = 4 times the distance: 4.9 m after 1 s and 19.6 m after 2 s."
      },
      {
        obj: "K2",
        q: "The lines for two cars cross on a position-time graph. At the moment they cross, the two cars have the same…",
        choices: ["Position", "Velocity", "Acceleration", "Speed and position"],
        answer: 0,
        trap: "Where the lines cross, the cars are going the same speed.",
        why: "A point on a position-time graph tells you position at a time. Where the lines cross, both cars are at the same place at the same time (one is passing the other). Their velocities are their slopes, which are different where the lines cross."
      }
    ]
  },
  {
    id: "projectile",
    title: "Projectile Motion",
    folder: "02-projectile-motion",
    questions: [
      {
        obj: "P2",
        q: "From the same height, one ball is dropped and another is launched horizontally at the same instant. Ignoring air resistance, which hits the level ground first?",
        choices: ["They hit at the same time", "The dropped ball", "The launched ball", "It depends on the launch speed"],
        answer: 0,
        trap: "The launched ball travels farther, so it must take longer to land.",
        why: "Horizontal and vertical motion are independent. Both balls start with zero vertical velocity and both have the same vertical acceleration (9.8 m/s² down), so they fall the same height in the same time. Horizontal speed changes where the ball lands, not when."
      },
      {
        obj: "P4",
        q: "A ball is kicked at an angle above the ground. At the highest point of its path, its velocity is…",
        choices: ["Horizontal and equal to its horizontal launch velocity", "Zero", "Straight down", "Equal to its full launch speed"],
        answer: 0,
        trap: "The ball stops at the top.",
        why: "Only the vertical part of the velocity is zero at the top. The horizontal part never changes during the flight (no horizontal force), so the ball is still moving sideways at vₓ."
      },
      {
        obj: "P2",
        q: "What is the acceleration of a projectile at the highest point of its path (ignore air resistance)?",
        choices: ["9.8 m/s² downward", "Zero", "9.8 m/s² in the direction of motion", "It is smallest there but not zero"],
        answer: 0,
        trap: "Acceleration is zero at the top, or acceleration points along the path.",
        why: "Gravity is the only force on a projectile at every point of the flight, so the acceleration is 9.8 m/s² straight down the whole time: on the way up, at the top, and on the way down."
      },
      {
        obj: "P2",
        q: "Ignoring air resistance, what happens to the horizontal velocity of a projectile during its flight?",
        choices: ["It stays constant", "It decreases steadily", "It decreases going up and increases coming down", "It becomes zero at the top"],
        answer: 0,
        trap: "The projectile runs out of forward push and slows down horizontally.",
        why: "No force acts horizontally once the projectile leaves the launcher, so there is no horizontal acceleration. By Newton's first law the horizontal velocity stays the same. Only the vertical velocity changes."
      },
      {
        obj: "P2",
        q: "A plane flying horizontally at constant velocity drops a supply crate. Ignoring air resistance, where is the crate when it hits the ground?",
        choices: ["Directly below the plane", "Far behind the plane", "Directly below the point where it was released", "Ahead of the plane"],
        answer: 0,
        trap: "The crate falls straight down from where it was let go.",
        why: "At release the crate has the plane's horizontal velocity, and it keeps that velocity while it falls. It moves forward exactly as fast as the plane does, so it stays directly underneath the plane all the way down. From the ground its path is a parabola."
      },
      {
        obj: "P5",
        q: "A ball is launched over level ground at the same speed each time. Which two launch angles give the same range?",
        choices: ["20° and 70°", "30° and 45°", "45° and 90°", "40° and 80°"],
        answer: 0,
        trap: "A bigger angle always gives a bigger range.",
        why: "Complementary angles (angles that add to 90°) give the same range on level ground. 20° gives a fast, low, short flight; 70° gives a slow, high, long flight; the ranges match. The largest range is at 45°."
      },
      {
        obj: "P3",
        q: "A ball rolls off a table at speed v and lands a distance x from the table. If it rolls off the same table at speed 2v, what happens?",
        choices: ["Same time in the air, lands 2x away", "Twice the time in the air, lands 2x away", "Twice the time in the air, lands 4x away", "Half the time in the air, lands x away"],
        answer: 0,
        trap: "A faster launch keeps the ball in the air longer.",
        why: "Time in the air for a horizontal launch depends only on the height (h = ½gt²), and the table height did not change. With the same time and twice the horizontal speed, x = vₓt doubles."
      },
      {
        obj: "P1",
        q: "A ball is launched at 20 m/s at 30° above the horizontal. What is the vertical component of its launch velocity?",
        choices: ["10 m/s", "17.3 m/s", "20 m/s", "30 m/s"],
        answer: 0,
        trap: "Swapping sine and cosine.",
        why: "The vertical side is opposite the launch angle, so v_y = v sin θ = 20 × sin 30° = 10 m/s. The horizontal component is v cos θ = 20 × cos 30° = 17.3 m/s. Sense check: at a low angle like 30°, most of the velocity should be horizontal."
      }
    ]
  },
  {
    id: "newton",
    title: "Newton's Laws",
    folder: "03-newtons-laws",
    questions: [
      {
        obj: "N2",
        q: "A hockey puck slides across frictionless ice at a constant velocity. What is the net force on the puck?",
        choices: ["Zero", "A constant forward force", "A forward force that slowly dies away", "A force equal to its weight, pointing forward"],
        answer: 0,
        trap: "Motion requires a force.",
        why: "Constant velocity means zero acceleration, and zero acceleration means zero net force (Newton's first law). Forces are needed to change motion, not to keep it going. Gravity and the normal force are both present, but they cancel."
      },
      {
        obj: "N5",
        q: "A large truck collides head-on with a small car. During the collision, the force the truck exerts on the car is…",
        choices: ["Equal in size to the force the car exerts on the truck", "Greater than the force the car exerts on the truck", "Less than the force the car exerts on the truck", "Greater only if the truck is moving faster"],
        answer: 0,
        trap: "The bigger or faster object pushes harder.",
        why: "Newton's third law: the two forces are an interaction pair, equal in size and opposite in direction, no matter the masses or speeds. The car is damaged more because the same force acting on a smaller mass gives a much larger acceleration (a = F/m)."
      },
      {
        obj: "N5",
        q: "A book rests on a table. Earth pulls down on the book (its weight). What is the third-law partner of that force?",
        choices: ["The book pulling up on Earth", "The table pushing up on the book", "The book pushing down on the table", "The floor pushing up on the table"],
        answer: 0,
        trap: "The normal force is the reaction to weight.",
        why: "Third-law partners act on two different objects and swap the roles: 'Earth pulls on book' pairs with 'book pulls on Earth'. The normal force and the weight both act on the book, so they cannot be a third-law pair. They are equal here only because the book is not accelerating."
      },
      {
        obj: "N4",
        q: "An astronaut travels from Earth to the Moon, where gravity is about one-sixth as strong. What happens to the astronaut's mass and weight?",
        choices: ["Mass stays the same; weight decreases", "Both mass and weight decrease", "Mass decreases; weight stays the same", "Both stay the same"],
        answer: 0,
        trap: "Mass and weight are the same thing.",
        why: "Mass is the amount of matter (kg) and does not depend on location. Weight is the force of gravity on that mass (F_grav = mg, in newtons), so it drops to about one-sixth on the Moon."
      },
      {
        obj: "N3",
        q: "You stand on a bathroom scale in an elevator that is moving upward at a constant speed. Compared with your reading at rest, the scale reads…",
        choices: ["The same", "More", "Less", "Zero"],
        answer: 0,
        trap: "Moving upward means the upward force must be bigger.",
        why: "Constant speed means zero acceleration, so the net force is zero and the scale (normal force) equals your weight. The scale reads more only while the elevator accelerates upward, and less only while it accelerates downward."
      },
      {
        obj: "N1",
        q: "A ball is thrown straight up. Just after it leaves the hand, which forces act on it (ignore air resistance)?",
        choices: ["Only gravity, downward", "Gravity downward and the force of the throw upward", "Only the force of the throw, upward", "No forces until it starts to fall"],
        answer: 0,
        trap: "The force of the throw travels with the ball.",
        why: "A contact force stops the instant contact ends. Once the ball leaves the hand, only Earth is still acting on it. The ball keeps moving up because of its inertia (it already has upward velocity), not because of an upward force."
      },
      {
        obj: "N3",
        q: "You push a box across a level floor with a 40 N horizontal force and it moves at constant velocity. How large is the friction force on the box?",
        choices: ["40 N", "Less than 40 N", "More than 40 N", "Zero"],
        answer: 0,
        trap: "To keep moving, the push must be bigger than friction.",
        why: "Constant velocity means the net force is zero, so friction must exactly balance the push: 40 N. If the push were bigger than friction the box would speed up."
      },
      {
        obj: "N3",
        q: "The net force on a cart is doubled and the cart's mass is also doubled. What happens to its acceleration?",
        choices: ["It stays the same", "It doubles", "It is four times as large", "It is cut in half"],
        answer: 0,
        trap: "Looking at only one variable in a = F_net / m.",
        why: "a = F_net / m. Doubling the net force doubles the acceleration, and doubling the mass halves it. (2F)/(2m) = F/m, so the acceleration is unchanged."
      }
    ]
  },
  {
    id: "momentum",
    title: "Momentum",
    folder: "04-momentum",
    questions: [
      {
        obj: "M2",
        q: "Two identical balls hit a wall at the same speed. Ball A bounces straight back; ball B sticks. Which ball receives the larger impulse from the wall?",
        choices: ["Ball A (bounces)", "Ball B (sticks)", "They receive the same impulse", "Neither receives an impulse"],
        answer: 0,
        trap: "Stopping completely is the biggest possible change in momentum.",
        why: "Impulse equals change in momentum, and momentum has direction. Ball B goes from +mv to 0 (change of mv). Ball A goes from +mv to −mv (change of up to 2mv), because the wall must stop it and then send it back."
      },
      {
        obj: "M5",
        q: "In a crash, how does an airbag protect a passenger?",
        choices: ["It increases the stopping time, which reduces the force", "It reduces the passenger's change in momentum", "It reduces the impulse on the passenger", "It decreases the stopping time, which reduces the force"],
        answer: 0,
        trap: "Safety devices reduce the impulse or the change in momentum.",
        why: "The passenger goes from the car's speed to zero either way, so the change in momentum (and the impulse, FΔt) is the same. The airbag spreads that impulse over a longer time, so the force is smaller: bigger Δt, smaller F."
      },
      {
        obj: "M3",
        q: "A heavy truck and a light car collide. Compare the sizes of their changes in momentum.",
        choices: ["They are equal", "The car's is larger", "The truck's is larger", "It depends on which was moving faster"],
        answer: 0,
        trap: "The lighter object 'gets hit harder', so its momentum changes more.",
        why: "The forces on the two vehicles are equal and opposite (third law) and last the same time, so the impulses, and therefore the changes in momentum, are equal in size and opposite in direction. The car's velocity changes more because its mass is smaller."
      },
      {
        obj: "M4",
        q: "Two carts collide and stick together (a perfectly inelastic collision) on a frictionless track. Which statement is true?",
        choices: ["Momentum is conserved; kinetic energy is not", "Neither momentum nor kinetic energy is conserved", "Kinetic energy is conserved; momentum is not", "Both momentum and kinetic energy are conserved"],
        answer: 0,
        trap: "Momentum is conserved only in elastic collisions.",
        why: "With no net external force, total momentum is conserved in every type of collision. In an inelastic collision some kinetic energy becomes thermal energy, sound, and deformation, so kinetic energy is not conserved. Only elastic collisions conserve both."
      },
      {
        obj: "M1",
        q: "Two identical carts move toward each other at the same speed, collide, and stick. What is their velocity after the collision?",
        choices: ["Zero", "The original speed, in the direction of the first cart", "Half the original speed", "Twice the original speed"],
        answer: 0,
        trap: "Adding momentum as if it had no direction.",
        why: "Momentum is a vector. One cart has momentum +mv and the other −mv, so the total before the collision is zero. Total momentum after must also be zero, so the stuck-together carts are at rest."
      },
      {
        obj: "M1",
        q: "A car doubles its speed. What happens to its momentum and its kinetic energy?",
        choices: ["Momentum doubles; kinetic energy quadruples", "Both double", "Both quadruple", "Momentum quadruples; kinetic energy doubles"],
        answer: 0,
        trap: "Momentum and kinetic energy are the same thing.",
        why: "p = mv depends on speed to the first power, so it doubles. KE = ½mv² depends on speed squared, so it becomes 2² = 4 times as large. Momentum is a vector; kinetic energy is a scalar."
      },
      {
        obj: "M3",
        q: "A cannon at rest fires a cannonball. Just after firing, how does the cannon's momentum compare with the cannonball's?",
        choices: ["Equal in size, opposite in direction", "The cannonball has more momentum because it is faster", "The cannon has more momentum because it is heavier", "The cannon has no momentum"],
        answer: 0,
        trap: "The faster object has more momentum.",
        why: "Total momentum was zero before firing, so it must be zero after: the two momenta are equal and opposite. The cannon recoils slowly because its large mass needs only a small velocity to match the ball's momentum (m_big × v_small = m_small × v_big)."
      },
      {
        obj: "M2",
        q: "A 0.50 kg ball hits a wall at 6.0 m/s and rebounds at 4.0 m/s. What is the size of its change in momentum?",
        choices: ["5.0 kg·m/s", "1.0 kg·m/s", "2.0 kg·m/s", "3.0 kg·m/s"],
        answer: 0,
        trap: "Subtracting the speeds without signs (6 − 4 = 2 m/s).",
        why: "Choose toward the wall as positive: v_i = +6.0 m/s and v_f = −4.0 m/s. Δp = m(v_f − v_i) = 0.50 × (−4.0 − 6.0) = −5.0 kg·m/s, a size of 5.0 kg·m/s. The velocity changed by 10 m/s, not 2 m/s."
      }
    ]
  },
  {
    id: "energy",
    title: "Work & Energy",
    folder: "05-work-energy",
    questions: [
      {
        obj: "E1",
        q: "You hold a heavy box perfectly still at chest height for one minute. How much work do you do on the box?",
        choices: ["Zero", "Force × time", "Weight × height", "It depends on how tired you get"],
        answer: 0,
        trap: "Effort or tiredness equals work.",
        why: "Work = force × displacement (in the direction of the force). The box does not move, so the displacement is zero and no work is done on it. Your muscles use chemical energy to stay tensed, but none of it is transferred to the box."
      },
      {
        obj: "E3",
        q: "A car's speed doubles. With the same braking force, what happens to its braking distance?",
        choices: ["It becomes 4 times as long", "It doubles", "It stays the same", "It becomes 8 times as long"],
        answer: 0,
        trap: "Double the speed, double the stopping distance.",
        why: "The brakes must remove all the kinetic energy: F × d = ½mv². Doubling v makes KE four times as large, so with the same force the distance must be four times as long."
      },
      {
        obj: "E4",
        q: "Two frictionless slides start at the same height. One is steep and one is gentle. A child starts from rest at the top of each. At the bottom, the child's speed is…",
        choices: ["The same on both slides", "Greater on the steep slide", "Greater on the gentle slide", "Dependent on the child's mass"],
        answer: 0,
        trap: "A steeper slope gives a greater final speed.",
        why: "Without friction, mgh at the top becomes ½mv² at the bottom, so v = √(2gh). Only the height matters, not the steepness or the mass. The steep slide gets the child there in less time, but at the same speed."
      },
      {
        obj: "E1",
        q: "A waiter carries a tray across a level room at constant velocity. How much work does the waiter's upward force do on the tray?",
        choices: ["Zero", "Force × distance walked", "Weight × distance walked", "A negative amount"],
        answer: 0,
        trap: "Any force on a moving object does work.",
        why: "Only the part of a force along the direction of motion does work: W = Fd cos θ. The supporting force is vertical and the motion is horizontal (θ = 90°, cos 90° = 0), so the work is zero. The tray's energy does not change."
      },
      {
        obj: "E4",
        q: "A box slides across a rough floor and comes to a stop. What happened to its kinetic energy?",
        choices: ["It was transformed into thermal energy", "It was used up and no longer exists", "It became gravitational potential energy", "It was returned to whoever pushed the box"],
        answer: 0,
        trap: "Energy gets used up or destroyed.",
        why: "Energy is never destroyed. Friction transformed the box's kinetic energy into thermal energy, slightly warming the box and the floor. Mechanical energy decreased, but total energy is conserved."
      },
      {
        obj: "E4",
        q: "A pendulum swings back and forth. Where is its kinetic energy greatest?",
        choices: ["At the lowest point of the swing", "At the highest points of the swing", "Halfway between the lowest and highest points", "It is the same everywhere"],
        answer: 0,
        trap: "Mixing up where kinetic and potential energy are largest.",
        why: "At the highest points the bob stops for an instant: all potential energy, zero kinetic energy. As it falls, PE turns into KE, so it is moving fastest (greatest KE) at the lowest point."
      },
      {
        obj: "E5",
        q: "Ana and Ben have the same mass and climb the same staircase. Ana takes 5 s; Ben takes 10 s. Compare their work and power.",
        choices: ["Same work; Ana has twice the power", "Ana does more work and has more power", "Same work and same power", "Ben does more work because he climbs for longer"],
        answer: 0,
        trap: "Work and power are the same thing.",
        why: "Work against gravity is mgh, which is the same for both. Power is the rate of doing work, P = W/t. Ana does the same work in half the time, so her power is twice Ben's."
      },
      {
        obj: "E4",
        q: "Three identical balls are thrown from a cliff at the same speed: one straight up, one horizontally, one straight down. Ignoring air resistance, which hits the ground with the greatest speed?",
        choices: ["All three hit with the same speed", "The one thrown straight down", "The one thrown straight up", "The one thrown horizontally"],
        answer: 0,
        trap: "The ball thrown downward gets a head start, so it ends up fastest.",
        why: "All three start with the same kinetic energy and the same height, so the same total mechanical energy. At the ground all the potential energy has become kinetic, so the final KE and the final speed are the same. They differ only in landing time and direction."
      }
    ]
  }
];

if (typeof module !== "undefined") module.exports = QUIZ;
