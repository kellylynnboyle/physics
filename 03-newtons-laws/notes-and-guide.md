# Unit 3: Newton's Laws

Newton's Laws describe *why* things move the way kinematics says they do —
the connection between forces and motion. Where Unit 1 was pure
bookkeeping (position, velocity, acceleration), this unit adds the cause:
forces, and how objects respond to them. Free-body diagrams are the single
most important skill here — nearly every problem starts by drawing one
correctly.

## Learning Objectives

By the end of this unit, students should be able to:

- State Newton's First Law and use it to explain why constant-velocity
  motion requires no net force.
- Apply Newton's Second Law (`F_net = ma`) as a vector equation, including
  cases with multiple forces at angles.
- State Newton's Third Law and correctly identify action-reaction pairs,
  distinguishing them from forces that appear together on one free-body
  diagram.
- Draw a correct free-body diagram for an object in a variety of
  situations (flat surface, incline, elevator, applied force at an angle).
- Distinguish mass from weight, and compute weight from local gravity.
- Distinguish static friction from kinetic friction and know when each
  applies, including that normal force is not always equal to weight.
- Analyze systems with tension (ropes, pulleys, connected blocks).

---

## Cornell Notes

### Key Concepts / Cues → Notes

| Cue / Question | Notes |
|---|---|
| **Newton's First Law** — what does it really say? | An object at rest stays at rest, and an object in motion stays in motion at constant velocity (constant speed AND direction), *unless* acted on by a net (unbalanced) force. Constant velocity requires **zero net force**, not zero force — a car cruising at steady speed on a level road has forces on it (gravity, normal, drive force, drag) that simply sum to zero. This directly contradicts the everyday ("Aristotelian") intuition that motion itself requires a continuously applied force. |
| What is **inertia**? | Inertia is an object's tendency to resist a change in its velocity. Mass is the quantitative measure of inertia — more mass means more resistance to acceleration for a given force. Inertia is not a force; it's a property of matter. |
| **Newton's Second Law** — what does `F_net = ma` actually mean? | It's a **vector** equation: the net force vector equals mass times the acceleration vector, and acceleration always points in the *same direction* as net force — never necessarily the same direction as velocity. Solve by finding the vector sum of all forces (often by components), then divide by mass. Doubling net force doubles acceleration; doubling mass halves acceleration for the same force. |
| Does acceleration point the same way as **velocity**? | Not necessarily — only net force determines acceleration's direction. A car braking while moving forward has acceleration pointing backward (opposite velocity). A ball on a string in circular motion has acceleration pointing toward the center, perpendicular to velocity. Velocity tells you where the object is heading *right now*; acceleration tells you how that is *changing*. |
| **Newton's Third Law** — what are action-reaction pairs? | For every force one object exerts on a second object, the second object exerts an equal-magnitude, opposite-direction force back on the first. Crucially, the two forces in a pair act on **different objects**, so they can never cancel each other out — canceling requires forces acting on the *same* object, which is a Second Law (free-body diagram) idea, not a Third Law idea. |
| How do you draw a **free-body diagram (FBD)**? | Represent the object as a single point/dot. Draw one arrow for every force acting *on* that object (not forces it exerts on other things): weight (always straight down), normal force (perpendicular to the contact surface), applied forces, tension, friction (parallel to the surface, opposing relative sliding or impending sliding). Do NOT include the object's velocity or acceleration as if they were forces. |
| Is **normal force always equal to weight**? | No. Normal force is whatever magnitude is needed to prevent the object from accelerating into the surface — it adjusts to the situation. On a flat surface with no other vertical forces, `N = mg`. But `N ≠ mg` when: the surface is an incline (`N = mg·cosθ`), the object is in an accelerating elevator (`N = m(g ± a)`), or an additional force is applied at an angle (a push angled downward increases N; a pull angled upward decreases N). Always find N from `F_net,y = ma_y` for that specific situation — never assume `N = mg`. |
| **Mass vs. weight** — what's the difference? | Mass (kg) measures the amount of matter and its inertia; it does not change with location. Weight (N) is the gravitational force on that mass, `W = mg`, and depends on local gravitational field strength — the same object weighs less on the Moon (smaller g) but has identical mass everywhere. "Weightless" astronauts in orbit still have full mass and are still in Earth's gravity; they're in free fall, not in zero gravity. |
| **Static vs. kinetic friction** — how are they different? | Static friction is not a fixed value — it's a *range*: it automatically matches whatever force is needed to keep the object from sliding, up to a maximum of `f_s,max = μ_s·N`. If the applied force exceeds that maximum, the object starts to slide. Kinetic friction applies only once sliding is happening, and is treated as roughly constant: `f_k = μ_k·N`, essentially independent of sliding speed. Generally `μ_s > μ_k`, which is why it takes more force to *start* an object moving than to *keep* it moving. |
| How does **tension** work in ropes and pulleys? | An ideal (massless, inextensible) rope transmits tension undiminished along its length, and an ideal (massless, frictionless) pulley only redirects the rope, so tension is the same on both sides. Tension always pulls *away* from an object along the rope — it can only pull, never push. For connected objects (e.g., blocks joined by a string over a pulley), both objects share the same magnitude of acceleration because the rope is inextensible. |

### Summary (write in your own words after class)

_Newton's Laws connect force and motion: the First Law says constant
velocity needs zero net force (not zero force), the Second Law says net
force and acceleration are proportional and point the same direction
(`F_net = ma`), and the Third Law says every force comes paired with an
equal, opposite force on a *different* object, so those pairs never
cancel. Almost every problem in this unit is really a free-body-diagram
problem: identify every force acting on the object, sum them as vectors,
and only then apply `F_net = ma`. Normal force, friction, and tension are
not fixed values pulled from a formula — they respond to whatever the
rest of the situation demands, which is exactly why they trip students
up the most._

---

## Commonly Missed Concepts (build your quiz around these)

1. **"An object in motion needs a force to keep moving."** False —
   Newton's First Law says constant velocity requires zero *net* force.
   A hockey puck sliding on frictionless ice keeps going forever with no
   force at all; a car at steady highway speed has balanced forces, not
   zero forces.
2. **"Action-reaction pairs cancel out, so nothing should ever move."**
   False — the two forces in a Third Law pair act on two *different*
   objects, so they can never cancel each other. Only forces acting on
   the *same* object (as shown on one free-body diagram) can sum to zero.
3. **"Normal force always equals weight (`N = mg`)."** False in general —
   `N` adjusts to whatever the vertical situation requires. It's less
   than `mg` on an incline or in a downward-accelerating elevator, and
   can be more or less than `mg` when another force is applied at an
   angle.
4. **Confusing mass and weight**, or assuming weight is a fixed property
   of an object. Mass is invariant; weight = `mg` and changes with
   location (or with apparent weight in an accelerating frame like an
   elevator).
5. **Treating static friction as a fixed value equal to `μ_s·N`.** It's
   actually a range up to that maximum — static friction supplies exactly
   enough force to prevent sliding, right up until it can't.
6. **Assuming acceleration must point the same way as velocity.** A
   decelerating car moving forward has acceleration pointing backward;
   only *net force* determines acceleration's direction, and velocity can
   point any direction relative to it.
7. **Leaving forces off (or adding extra forces onto) a free-body
   diagram** — commonly forgetting friction or normal force, or mistakenly
   drawing "the force of motion" pushing the object forward when no such
   force exists.
8. **Assuming tension is the same as weight on a hanging object**, even
   when the system is accelerating (e.g., an elevator, or a mass on a
   pulley system) — tension must be solved from `F_net = ma`, not assumed
   equal to `mg`.

---

## Practice Problems

1. A `1200 kg` car cruises at a constant `25 m/s` on a level road. What is
   the net force acting on the car?
   *(Answer: 0 N — constant velocity means zero net force, even though
   individual forces like the engine's drive force and air resistance are
   both nonzero and simply balance.)*
2. A `5.0 kg` box is pushed across a floor with a horizontal force of
   `20 N`. The coefficient of kinetic friction is `0.30`. Find the box's
   acceleration. (`g = 9.8 m/s²`)
   *(Answer: N = mg = 49 N; f_k = μ_k·N = 14.7 N; F_net = 20 − 14.7 = 5.3
   N; a = F_net/m ≈ 1.06 m/s².)*
3. A `60 kg` person stands on a scale inside an elevator accelerating
   upward at `2.0 m/s²`. What does the scale read (i.e., what is the
   normal force)?
   *(Answer: N = m(g + a) = 60(9.8 + 2.0) = 708 N — more than the
   person's resting weight of 588 N, because the scale must supply extra
   upward force to accelerate the person upward.)*
4. Two blocks, `m₁ = 3.0 kg` and `m₂ = 5.0 kg`, are connected by a string
   over an ideal pulley (Atwood machine), hanging on either side. Find the
   acceleration of the system and the tension in the string.
   *(Answer: a = (m₂ − m₁)g / (m₁ + m₂) = (2.0)(9.8)/8.0 = 2.45 m/s²;
   T = m₁(g + a) = 3.0(9.8 + 2.45) = 36.75 N — check with m₂:
   T = m₂(g − a) = 5.0(9.8 − 2.45) = 36.75 N. ✓)*
5. A `10 kg` box sits on a `30°` incline. The coefficient of static
   friction is `0.40`. Will the box remain at rest, or slide? Justify with
   numbers.
   *(Answer: Gravity component along incline = mg·sinθ = 10(9.8)(0.5) =
   49 N. Normal force = mg·cosθ = 10(9.8)(0.866) ≈ 84.9 N. Maximum static
   friction = μ_s·N ≈ 0.40(84.9) ≈ 34.0 N. Since 49 N > 34.0 N, the
   required friction exceeds the maximum available — the box slides.)*

## Real-World Applications

- **Seatbelts and airbags**: your body's inertia (First Law) keeps it
  moving forward in a sudden stop — the seatbelt supplies the net force
  needed to decelerate you along with the car.
- **Rocket propulsion**: rockets push exhaust gas backward, and by the
  Third Law the gas pushes the rocket forward — action-reaction pairs on
  two different masses (rocket and expelled gas), not a canceling pair.
- **Anti-lock brakes (ABS)**: designed to keep tires on the edge of
  static friction with the road (higher `μ_s`) rather than letting them
  skid into kinetic friction (lower `μ_k`), which shortens stopping
  distance and preserves steering control.
- **Elevators and "apparent weight"**: the sensation of feeling heavier
  or lighter in an elevator is your body sensing a change in the normal
  force the floor exerts on you, not a change in your actual mass or
  gravitational weight.
- **Tug-of-war and towing**: tension in the rope is the same throughout
  an ideal rope, which is why analyzing the rope/pulley system requires
  treating connected objects as sharing one acceleration magnitude.

## Learning Resources

- **Video:** Khan Academy — "Forces and Newton's Laws of Motion" unit
- **Video:** The Organic Chemistry Tutor — "Newton's Laws of Motion"
  playlist (free-body diagrams, friction, inclines, pulleys)
- **Simulation:** PhET *Forces and Motion: Basics* (push/pull objects and
  see net force and acceleration respond in real time)
- **Simulation:** PhET *Ramp: Forces and Motion* (adjustable incline,
  friction, and applied force with a live free-body diagram overlay)
- **Reading:** OpenStax *University Physics Vol. 1*, Ch. 5 (Newton's Laws
  of Motion) and Ch. 6 (Applications of Newton's Laws) — free PDF/online
  textbook
- **Practice bank:** The Physics Classroom — "Newton's Laws" concept
  builders and problem sets

## Assessment Criteria (instructor rubric)

| Criterion | Meets expectations |
|---|---|
| Free-body diagrams | Draws every force acting on the object (and only forces acting on it), with roughly correct direction and relative magnitude, for flat, incline, elevator, and multi-force scenarios |
| First Law reasoning | Correctly explains that constant velocity implies zero net force, not zero applied forces, and identifies balanced-force situations |
| Second Law application | Applies `F_net = ma` as a vector equation, correctly resolving forces into components when needed, and reasons about acceleration direction from net force alone |
| Third Law reasoning | Correctly identifies action-reaction pairs as acting on two different objects and explains why such pairs cannot cancel, distinguishing this from balanced forces on one object |
| Normal force / friction / tension | Solves for N, friction, and tension from the specific situation (incline, elevator, pulley) rather than assuming fixed formulas like `N = mg` or `T = mg` |
| Quiz mastery | Scores ≥ 80% on `quiz.html`, including correct explanations for at least 2 previously-missed questions on retake |
