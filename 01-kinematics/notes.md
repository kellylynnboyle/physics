# Unit 1: Kinematics — Cornell Notes

**NGSS alignment:** Foundational content for HS-PS2-1 (Newton's second law) and HS-PS2-2 (momentum). CA Physics course model, Semester 1, Week 1–2.

**Essential question:** How do we describe motion mathematically without worrying about what caused it?

---

## Cornell Notes

| Cues / Questions | Notes |
|---|---|
| What's the difference between **distance** and **displacement**? | Distance = total path length traveled (scalar, always positive). Displacement = straight-line change in position, Δx = x_f − x_i (vector, can be negative). A runner who does a 400 m lap has distance = 400 m but displacement = 0 m. |
| What's the difference between **speed** and **velocity**? | Speed = distance/time (scalar). Velocity = displacement/time (vector — has direction, shown by sign in 1D). Average speed can exceed average velocity's magnitude if the path isn't straight. |
| How is **acceleration** defined? | a = Δv/Δt = (v_f − v_i)/t. Acceleration is a vector. It exists whenever speed *or* direction changes — not just when something speeds up. |
| What does a **negative** sign mean? | It only tells you *direction relative to your chosen positive axis* — not whether the object is slowing down. An object can have negative velocity and negative acceleration and be *speeding up* (both point the same way). |
| When is an object **speeding up vs. slowing down**? | Speeding up: velocity and acceleration have the **same sign**. Slowing down: velocity and acceleration have **opposite signs**. This is true regardless of which sign is "positive." |
| The Big Four kinematic equations (constant acceleration only) | 1. v = v₀ + at  2. Δx = v₀t + ½at²  3. v² = v₀² + 2aΔx  4. Δx = ½(v₀ + v)t |
| How do I pick which equation to use? | List your knowns (v₀, v, a, t, Δx) and your unknown. Pick the equation missing the variable you don't have and don't need. |
| Reading a **position-time graph** | Slope = velocity. Steeper slope = faster. Flat line = at rest. Curved line = accelerating. |
| Reading a **velocity-time graph** | Slope = acceleration. Area under the curve (between the line and the t-axis) = displacement. A line crossing zero means the object reversed direction. |
| Reading an **acceleration-time graph** | Area under the curve = change in velocity, Δv. |
| **Free fall** | Special constant-acceleration case: a = −g = −9.8 m/s² (choosing up as positive), same for anything in the air regardless of mass (ignoring air resistance) — a rock and a feather in a vacuum fall together. |
| Velocity **at the top of a toss** | Velocity = 0 at the peak, but acceleration is still −9.8 m/s². Zero velocity ≠ zero acceleration. |
| **Average vs. instantaneous velocity** | Average velocity = total displacement / total time (a straight-line slope between two points on a x-t graph). Instantaneous velocity = the slope of the *tangent line* at one specific instant. |

---

## Summary (write this in your own words after the lesson)

Kinematics describes *how* something moves (position, velocity, acceleration, time) without asking *why*. Every kinematics problem is a bookkeeping problem: identify your knowns, your unknown, and your sign convention, then choose the equation or the graph feature that connects them. Graph slopes step you *down* a rung (position → velocity → acceleration); areas under graphs step you back *up* (acceleration → velocity → displacement).

---

## Key Vocabulary

| Term | Definition |
|---|---|
| Scalar | A quantity with magnitude only (distance, speed, time) |
| Vector | A quantity with magnitude and direction (displacement, velocity, acceleration) |
| Displacement (Δx) | Change in position; vector |
| Instantaneous velocity | Velocity at a single moment in time |
| Uniform acceleration | Constant rate of change of velocity |
| Free fall | Motion under gravity alone, a = −g |
| Terminal velocity | Constant velocity reached when air resistance balances gravity (qualitative, covered briefly) |

---

## Practice Problems

1. A car accelerates from rest at 3.0 m/s² for 6.0 s. Find its displacement.
2. A ball is thrown straight up at 20 m/s. How long until it returns to the thrower's hand? What is its velocity at the top?
3. A train's position-time graph is a straight line with slope −5 m/s for the first 10 s, then flat for 5 s. Describe the motion in words.
4. Two runners start together. Runner A: constant 4 m/s. Runner B: starts at rest, accelerates at 0.5 m/s². When (if ever) does B catch A?

**Worked example (#1):** Knowns: v₀ = 0, a = 3.0 m/s², t = 6.0 s. Unknown: Δx. Use Δx = v₀t + ½at² = 0 + ½(3.0)(6.0)² = 54 m.

---

## Real-World Applications

- Accident reconstruction: skid marks + deceleration rate → initial speed (v² = v₀² + 2aΔx)
- Sprinting analytics: 40-yard-dash splits are instantaneous vs. average speed in action
- Elevator design: comfortable acceleration/deceleration limits for passengers
- Rocket launch telemetry: velocity-time graphs used to plan staging events

---

## Learning Objectives

By the end of this unit, students will be able to:
- Distinguish distance/displacement and speed/velocity in both words and calculation (**DOK 2**)
- Solve for any unknown in the four kinematic equations given three knowns (**DOK 2**)
- Interpret and sketch position-time, velocity-time, and acceleration-time graphs, including translating between graph types (**DOK 3**)
- Analyze free-fall problems including "toss up" and "dropped from height" scenarios (**DOK 3**)
- Justify, using signs of velocity and acceleration, whether an object is speeding up or slowing down (**DOK 3**)

## Assessment Criteria

| Level | Criteria |
|---|---|
| Exceeds | Solves multi-step kinematics problems combining graph interpretation and equations; correctly reasons about sign conventions without prompting |
| Meets | Correctly selects and applies kinematic equations; reads slopes and areas from graphs; explains free-fall velocity/acceleration at key points |
| Approaching | Can perform calculations with equations given but struggles to choose the correct one; confuses distance/displacement or speed/velocity in some contexts |
| Beginning | Cannot reliably identify knowns/unknowns or connect graph features to motion |

Suggested evidence: unit test (equations + graph reading), lab report (constant-acceleration cart lab using motion sensors or video analysis), exit-ticket quiz (see `quiz.html`).

## Learning Resources

- CA NGSS standards reference: https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp
- PhET simulation: *Moving Man* (position/velocity/acceleration exploration)
- Khan Academy: One-dimensional motion unit
- The Physics Classroom: Kinematics tutorial and Minds On Physics activities
- Video analysis lab: Track motion with a phone slow-motion video + free tracking software (e.g., Tracker)

## Try the Interactive Quiz

Open [`quiz.html`](./quiz.html) — 10 of the most frequently missed kinematics questions, with instant feedback and explanations.
