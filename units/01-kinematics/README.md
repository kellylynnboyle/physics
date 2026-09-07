# Unit 1: Kinematics

Kinematics describes **how things move**, without worrying about *why*
(that's Newton's Laws, Unit 3). It's the vocabulary and math toolkit every
later unit depends on — get the sign conventions and vector/scalar
distinctions solid here.

## Key Concepts to Master

- **Position, distance vs. displacement** — distance is a scalar (path length
  traveled); displacement is a vector (straight-line change in position,
  Δx = x_f − x_i). They're only equal for straight-line motion in one direction.
- **Speed vs. velocity** — speed is scalar (distance/time), velocity is vector
  (displacement/time). Average vs. instantaneous velocity.
- **Acceleration** — rate of change of velocity, a = Δv/Δt. A vector.
  Acceleration ≠ speeding up: an object can accelerate while slowing down
  (a and v point opposite ways) or while moving at constant speed but
  changing direction.
- **Sign conventions** — pick a positive direction once per problem and hold
  it. Negative velocity means moving in the negative direction, not "slow."
  Negative acceleration means the acceleration vector points negative, not
  necessarily "slowing down."
- **The kinematics ("SUVAT") equations** — valid *only* for constant
  acceleration:
  - v = v₀ + at
  - x = x₀ + v₀t + ½at²
  - v² = v₀² + 2a(x − x₀)
  - x = x₀ + ½(v₀ + v)t
- **Free fall** — a special case of constant acceleration, a = −g ≈ −9.8 m/s²
  (choosing up as positive). Applies the moment an object is released, even
  at the top of its arc where v = 0 but a ≠ 0.
- **Graphical analysis:**
  - Position–time graph: slope = velocity.
  - Velocity–time graph: slope = acceleration; area under curve = displacement.
  - Acceleration–time graph: area under curve = change in velocity.

## Learning Objectives

By the end of this unit, students will be able to:

1. Correctly distinguish distance/displacement and speed/velocity in a given
   scenario, including when they differ.
2. Choose and apply the correct kinematic equation for a constant-acceleration
   problem, solving for any of the five variables (x, v₀, v, a, t).
3. Read a motion graph and extract velocity/acceleration/displacement, and
   sketch one graph type from another (e.g., v-t from x-t).
4. Solve free-fall problems, correctly handling the sign of g and the v = 0
   condition at maximum height.
5. Explain, in words, why acceleration can be nonzero when velocity is zero,
   and why "slowing down" doesn't always mean negative acceleration.

## Practice Problems

1. A car accelerates from rest at 3 m/s² for 6 s. Find its final velocity and
   the distance traveled.
2. A ball is thrown straight up at 20 m/s. Find its maximum height, time to
   return to the launch point, and velocity when it lands.
3. A train slows from 30 m/s to 10 m/s over 400 m. Find its acceleration
   (and note its sign relative to the direction of motion).
4. Sketch the velocity–time graph for a car that speeds up for 5 s, cruises
   at constant velocity for 5 s, then brakes to a stop over 3 s. From your
   sketch, find total distance traveled.
5. Two runners start 100 m apart, running toward each other at 4 m/s and
   6 m/s. When and where do they meet? (Set up a coordinate system explicitly.)

*(Full solutions intentionally omitted — work these with your notes, then
check against The Physics Classroom or a study partner.)*

## Real-World Applications

- **Airbag/seatbelt timing** — engineers use kinematics to calculate how much
  time and distance is available to decelerate a passenger safely in a crash.
- **Traffic engineering** — stopping-distance signage and yellow-light timing
  are computed from reaction time (constant velocity) plus braking
  (constant deceleration).
- **Sports analytics** — sprinter velocity–time curves reveal acceleration
  phase vs. top-speed phase, used in coaching.
- **Elevators and roller coasters** — ride comfort/safety limits are set by
  acceleration, not speed.

## Learning Resources

- [The Physics Classroom — 1-D Kinematics](https://www.physicsclassroom.com/class/1DKin)
- [Khan Academy — One-dimensional motion](https://www.khanacademy.org/science/physics/one-dimensional-motion)
- [PhET Simulation — Moving Man](https://phet.colorado.edu/en/simulations/moving-man)
- [PhET Simulation — Free Fall / Projectile Motion (basics)](https://phet.colorado.edu/en/simulations/projectile-motion)
- [HyperPhysics — Kinematic equations reference](http://hyperphysics.phy-astr.gsu.edu/hbase/mot.html)

## Assessment Criteria

| Skill | Approaching | Meets | Exceeds |
|---|---|---|---|
| Vector/scalar distinction | Confuses distance/displacement or speed/velocity in at least one problem type | Correctly distinguishes them in standard problems | Correctly explains edge cases (e.g., round trip with zero displacement but nonzero distance) |
| Equation selection & use | Picks correct equation but makes sign/unit errors | Solves standard SUVAT problems correctly | Solves problems requiring combining two equations or unknown time |
| Graph interpretation | Reads values off a graph but can't derive a second graph from it | Correctly converts between x-t, v-t, a-t graphs | Correctly computes displacement from area under a non-uniform v-t graph |
| Free fall | Uses wrong sign for g or misses that v = 0 at apex | Solves standard free-fall problems | Solves multi-stage free-fall problems (e.g., thrown from a height, above and below launch point) |

### Most-Missed-Question Focus (see `quiz.html`)

- Treating "negative acceleration" as always meaning "slowing down."
- Assuming velocity is zero at the top of a projectile's arc *and* thinking
  acceleration is also zero there.
- Confusing the slope of a position–time graph with the slope of a
  velocity–time graph.
- Forgetting that distance traveled ≠ displacement magnitude when the
  direction of motion reverses mid-problem.
