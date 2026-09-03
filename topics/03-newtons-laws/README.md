# Topic 3: Newton's Laws

> The three rules that connect force, mass, and motion — and the reason objects move (or don't) the way they do.

**Files in this module:** [`cornell-notes.md`](./cornell-notes.md) · [`quiz.html`](./quiz.html) (open in any browser)

---

## Key Concepts to Master

- **Newton's First Law (inertia)** — an object at rest stays at rest, and an object in motion stays in motion at constant velocity (constant speed *and* direction), unless acted on by a net (unbalanced) force. "Net force = 0" covers both rest and constant-velocity motion — they are the same physical condition.
- **Newton's Second Law** — the net force on an object equals its mass times its acceleration: **F_net = ma**. This is a *vector* equation — it applies independently along each axis (F_net,x = ma_x, F_net,y = ma_y), so a force with no x-component contributes nothing to x-direction acceleration.
- **Newton's Third Law** — for every force one object exerts on a second object, the second object exerts a force on the first that is equal in magnitude and opposite in direction. The two forces in a pair always act on **different objects**, they are the *same type* of force, and they never cancel each other because they never act on the same object.
- **Free-body diagrams (FBDs)** — an isolated sketch of a single object showing every external force acting *on* it (as arrows from its center), with nothing else drawn. Building one correctly before writing any equation is the single most reliable way to avoid sign errors.
- **Types of forces:**
  - **Weight (gravity):** W = mg, always points straight down toward the center of the Earth.
  - **Normal force (N):** the surface's push perpendicular to itself; adjusts to whatever value keeps the object from accelerating into the surface — it is *not* automatically equal to weight.
  - **Tension (T):** the pull transmitted through a string, rope, or cable; assumed uniform throughout an ideal (massless, frictionless-pulley) string.
  - **Friction (f):** a surface's force opposing relative sliding or the tendency to slide, parallel to the surface.
  - **Applied force:** any push or pull from an external agent (hand, engine, etc.).
  - **Spring force:** F = -kx, restoring force proportional to displacement from equilibrium (Hooke's Law).
- **Static vs. kinetic friction** — static friction resists the *start* of sliding and adjusts its magnitude (0 up to a maximum) to match whatever is needed to prevent motion; kinetic friction acts once sliding begins and has a roughly constant magnitude given by the coefficient of kinetic friction.
- **Equilibrium** — net force = 0 in every direction; the object's velocity (possibly zero) is not changing. "Equilibrium" does not mean "at rest," it means "not accelerating."
- **Multi-object / system problems** — connected objects (blocks linked by a string, Atwood machines) share a common acceleration magnitude when connected by an inextensible string; solve with either a system-wide equation or separate FBDs for each object linked by Newton's Third Law/tension.

## Key Equations

| Equation | Meaning | Notes |
|---|---|---|
| `F_net = ma` | Newton's Second Law | Vector equation — apply separately per axis: `F_net,x = ma_x`, `F_net,y = ma_y` |
| `W = mg` | Weight (gravitational force) | g = 9.8 m/s² near Earth's surface; W is a force (N), not a mass |
| `f_s ≤ μ_s N` | Maximum static friction | Static friction is variable, up to this maximum; use `=` only at the verge of slipping |
| `f_k = μ_k N` | Kinetic friction | Constant magnitude once the object is sliding; μ_k < μ_s for a given surface pair |
| `F_A on B = -F_B on A` | Newton's Third Law pair | Equal magnitude, opposite direction, same force type, acting on two *different* objects — never cancels |

---

## Learning Objectives

By the end of this module, students will be able to:

1. State all three of Newton's Laws in their own words and identify which law explains a given scenario.
2. Draw a correct free-body diagram for an object in a variety of situations (flat surface, incline, connected objects, hanging masses).
3. Apply F_net = ma per axis to solve for unknown forces, masses, or accelerations, including situations with friction.
4. Correctly identify the Newton's Third Law partner force for any given force, including recognizing that the two forces act on different objects.
5. Distinguish normal force from weight and compute normal force correctly on an incline or when an additional applied force has a vertical component.
6. Set up and solve multi-object systems (connected blocks, Atwood machines) using either whole-system or per-object equations.

## Assessment Criteria

| Level | Criteria |
|---|---|
| **Mastery (4)** | Draws correct FBDs unprompted for any configuration, applies F_net = ma per axis without sign errors, correctly identifies Third Law pairs on different objects, and solves multi-object systems independently. |
| **Proficient (3)** | Solves standard single-object F_net = ma problems (including friction) correctly; minor errors in more complex incline or multi-object setups. |
| **Developing (2)** | Draws an FBD with help; sometimes pairs Third Law forces on the same object or assumes normal force always equals weight. |
| **Beginning (1)** | Cannot draw an FBD independently; treats F=ma as a scalar shortcut without considering direction or components. |

**Suggested evidence:** homework problem sets, the interactive quiz (`quiz.html`) scored to 80%+, a free-body-diagram exit ticket, and one multi-object free-response problem on the unit test.

---

## Most Often Missed Ideas (misconceptions to target)

1. **"A moving object needs a continuous force to keep moving" (Aristotelian thinking).** In reality, constant velocity requires *zero* net force — a force is needed only to *change* motion, not to sustain it.
2. **"Heavier objects need more force to keep moving at constant velocity."** At constant velocity, net force is always zero regardless of mass; a heavier object may need more force to *overcome friction*, but that force still just balances friction rather than being required to "keep it moving."
3. **Pairing Third Law forces on the SAME object instead of different objects** — e.g., treating gravity (Earth pulling down on the object) and the normal force (surface pushing up on the object) as a Third Law pair. Both act on the *same* object and are usually different force types; they can be equal in special cases, but that's Newton's Second Law/equilibrium, not the Third Law. The true partner of gravity-on-object is the object's gravitational pull on the Earth.
4. **"Normal force always equals weight."** True only for a horizontal surface with no other vertical forces. On an incline, N = mg·cos(θ) < mg. With an additional applied force having a vertical component, N must be recalculated from the vertical force balance, not assumed equal to mg.
5. **Forgetting friction can be static or kinetic, and that static friction is not fixed.** Static friction adjusts (0 up to μ_s·N) to match whatever force is needed to prevent sliding; only at the verge of slipping does it equal its maximum value. Kinetic friction, once sliding starts, is essentially constant at μ_k·N.
6. **Confusing mass and weight.** Mass (kg) is the amount of matter and how much an object resists acceleration; weight (N) is the force of gravity on that mass and depends on the local gravitational field (an object's mass is the same on the Moon, but its weight is about 1/6 as much).
7. **Skipping the free-body diagram before writing equations.** Jumping straight to F=ma without isolating the object and drawing every force is the leading cause of sign errors, missed forces (like a horizontal friction component), and mixed-up axes.

---

## Learning Resources

- **Video:** Khan Academy — [Forces and Newton's laws of motion](https://www.khanacademy.org/science/physics/forces-newtons-laws)
- **Simulation:** PhET Interactive Simulations — [Forces and Motion: Basics](https://phet.colorado.edu/en/simulation/forces-and-motion-basics)
- **Reference:** The Physics Classroom — [Newton's Laws tutorial](https://www.physicsclassroom.com/class/newtlaws)
- **Reference:** OpenStax College Physics, Chapter 4 (Dynamics: Force and Newton's Laws of Motion) — free PDF/online textbook

## Real-World Applications

- Seatbelts and airbags — extending the time over which a passenger decelerates to reduce the force (F = ma, so lowering a for a given Δv lowers F).
- Rocket propulsion — expelling exhaust gas downward (action) propels the rocket upward (reaction).
- Walking — pushing backward on the ground (action) so the ground pushes you forward (reaction); friction makes this possible.
- Feeling pushed back into your seat as a car accelerates forward — your body's inertia resists the change in motion (First Law) while the seat supplies the forward force on you.
- Tug-of-war — analyzing the net force on the rope and on each team to determine which way (if any) the system accelerates.
- Elevators and apparent weight — the normal force from the floor (what a scale reads) is greater than your weight when accelerating upward and less than your weight when accelerating downward.

## Practice Problems

1. A 5.0 kg box is pushed across a frictionless floor with a horizontal force of 15 N. What is its acceleration?
2. A 60 kg skater pushes off a 90 kg skater on frictionless ice. Using Newton's Third Law, compare the magnitude of the force each skater feels, and explain why their resulting accelerations differ.
3. A 10 kg box sits on a ramp inclined at 30° above horizontal. Find the normal force on the box and the component of gravity acting parallel to the ramp surface (ignore friction).
4. Two blocks (4 kg and 6 kg) are connected by a light string over a frictionless pulley (an Atwood machine), hanging on either side. Find the acceleration of the system and the tension in the string.
5. A 2.0 kg block on a horizontal table is pulled by a horizontal 12 N force. The coefficient of kinetic friction between the block and table is 0.30. Find the block's acceleration.

*(Answer keys are intentionally left for in-class or instructor-led review — pair with the quiz below for self-check practice.)*
