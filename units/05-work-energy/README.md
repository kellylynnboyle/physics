# Unit 5: Work & Energy

Work and energy give you a second, often faster, way to solve motion
problems — one that sidesteps vectors and time entirely by tracking a
scalar quantity (energy) as it's transferred and transformed. The trade-off
is conceptual: "work" in physics has a precise, narrow meaning that often
clashes with the everyday word, and getting that distinction wrong is the
single biggest source of errors in this unit.

## Key Concepts to Master

- **Work** — W = F·d·cos(θ), where θ is the angle between the force vector
  and the displacement vector. Only the component of force *parallel* to
  the displacement does work; the perpendicular component contributes
  nothing, no matter how large it is.
- **Work can be zero even when a force is applied** — carrying a heavy bag
  horizontally at constant height: gravity and the normal/carrying force
  act vertically (θ = 90°, cos θ = 0) while displacement is horizontal, so
  they do zero work, even though your arm is clearly "working" in the
  everyday sense. Likewise, holding something stationary against gravity
  does zero physics-work no matter how much force or effort is involved,
  because displacement is zero.
- **Work can be negative** — when the force (or a component of it) points
  opposite to the displacement, cos θ is negative. Friction acting on a
  sliding object, and the braking force on a decelerating car, both do
  negative work — they remove kinetic energy rather than add it.
- **The work-energy theorem** — the *net* work done on an object equals its
  change in kinetic energy: W_net = ΔKE = KE_f − KE_i. This holds even when
  several forces act; add up their individual works (respecting sign) to
  get W_net.
- **Kinetic energy** — KE = ½mv². Always positive (or zero), scales with
  the square of speed — doubling speed quadruples KE.
- **Gravitational potential energy** — PE = mgh, measured relative to a
  reference height *you choose*. Only changes in PE (or in total mechanical
  energy) are physically meaningful; the reference level itself is
  arbitrary as long as you're consistent within a problem.
- **Conservation of mechanical energy** — when only conservative forces
  (gravity, ideal springs) act on a system, KE + PE = constant. Energy
  trades between kinetic and potential form but the total doesn't change.
- **When mechanical energy is NOT conserved** — friction, air resistance,
  and other applied/non-conservative forces do work that drains mechanical
  energy out of the system (usually into heat). The general energy
  accounting equation is:
  KE_i + PE_i + W_nc = KE_f + PE_f
  where W_nc is the (signed) work done by non-conservative forces. Skipping
  this term whenever friction or an applied push/pull is present is the
  most common error in this unit.
- **Power** — P = W/t = F·v, the *rate* of doing work or transferring
  energy. Two processes can transfer identical total energy while having
  very different power if they take different amounts of time.
- **Units** — Work and energy: joules (J) = N·m = kg·m²/s². Power: watts
  (W) = J/s.

## Learning Objectives

By the end of this unit, students will be able to:

1. Compute work done by a constant force at any angle to displacement,
   including recognizing when work is zero (perpendicular force, zero
   displacement) or negative (opposing force).
2. Apply the work-energy theorem to relate net work to a change in speed,
   for single and multi-force scenarios.
3. Calculate kinetic and gravitational potential energy, and correctly
   choose/state a reference height for PE.
4. Apply conservation of mechanical energy to problems with only
   conservative forces, and correctly extend the KE_i + PE_i + W_nc =
   KE_f + PE_f accounting when friction or an applied force is present.
5. Distinguish power from work/energy, computing P = W/t and P = F·v, and
   explain why doing the same work faster requires more power, not more
   energy.

## Practice Problems

1. A 15 kg box is pushed 4 m across a floor by a horizontal 40 N force
   while friction exerts 10 N opposing the motion. Find the work done by
   the push, the work done by friction, the net work, and the box's final
   speed if it started at rest.
2. A person carries a 5 kg bag at constant height 1.2 m above the ground
   while walking 20 m horizontally at constant velocity. How much work
   does the carrying force do on the bag? Explain why, even though the
   person clearly gets tired.
3. A 2 kg ball is dropped from 8 m. Using conservation of energy (ignore
   air resistance), find its speed just before hitting the ground. Then
   find its speed at a height of 3 m.
4. A 60 kg skater at the top of a 5 m frictionless ramp starts from rest.
   Compare her speed at the bottom (a) with no friction, and (b) if
   friction and air resistance together do −900 J of work on the way down.
5. A motor lifts a 200 kg elevator car 12 m in 8 s at constant speed. Find
   the work done against gravity and the average power output of the
   motor. If a second motor did the same job in 4 s, how would the work
   and the power each compare?

*(Full solutions intentionally omitted — work these with your notes, then
check against The Physics Classroom or a study partner.)*

## Real-World Applications

- **Roller coasters** — designers use conservation of energy (KE + PE) to
  set hill heights and predict speeds, then add back friction and air
  resistance losses to size the motors needed for the lift hill.
- **Vehicle braking systems** — the negative work done by brake friction
  converts a car's kinetic energy into heat, which is why brake
  distance grows with the *square* of speed (KE ∝ v²).
- **Regenerative braking (electric/hybrid vehicles)** — instead of
  dissipating KE as heat, motors run in reverse to convert kinetic energy
  back into stored electrical energy, recovering energy that would
  otherwise be wasted.
- **Power ratings of appliances and engines** — a watt rating tells you how
  fast energy is delivered, which is why a low-power motor can still lift
  a heavy load — just more slowly — while a high-power motor does the same
  job quickly.

## Learning Resources

- [The Physics Classroom — Work, Energy, and Power](https://www.physicsclassroom.com/class/energy)
- [Khan Academy — Work and energy](https://www.khanacademy.org/science/physics/work-and-energy)
- [PhET Simulation — Energy Skate Park](https://phet.colorado.edu/en/simulations/energy-skate-park)
- [HyperPhysics — Work-energy principle](http://hyperphysics.phy-astr.gsu.edu/hbase/wkenr.html)

## Assessment Criteria

| Skill | Approaching | Meets | Exceeds |
|---|---|---|---|
| Work calculation | Computes W = F·d but ignores the angle between force and displacement | Correctly applies W = F·d·cos(θ), including zero and negative cases | Correctly decomposes work from multiple simultaneous forces and sums them with sign |
| Work-energy theorem | Applies theorem only when a single force acts | Correctly relates net work to ΔKE for multi-force problems | Uses the theorem to solve for an unknown force or distance given a speed change |
| Energy conservation | Uses KE + PE = constant even when friction/air resistance is stated in the problem | Correctly applies conservation when only conservative forces act | Correctly applies KE_i + PE_i + W_nc = KE_f + PE_f, including sign of W_nc, in multi-stage problems |
| Power | Confuses power with work/energy (treats them as the same quantity) | Correctly computes P = W/t and P = F·v | Correctly reasons about how power changes when the same work is done over a different time or at a different speed |

### Most-Missed-Question Focus (see `quiz.html`)

- Believing any applied force does work, regardless of displacement or the
  angle between force and motion (e.g., holding a heavy box motionless, or
  carrying it at constant height).
- Forgetting the cos(θ) factor — treating a perpendicular force (like the
  normal force on a surface) as doing work just because the object moves.
- Assuming mechanical energy is always conserved, even in problems that
  explicitly state friction or air resistance is present.
- Sign errors on work done by friction or braking forces — these must be
  negative, since they oppose the displacement.
- Confusing power with work/energy — assuming that doing a job faster
  changes the total energy transferred rather than just the rate.
- Forgetting to include a nonzero initial kinetic energy or a nonzero final
  height when applying conservation of energy.
