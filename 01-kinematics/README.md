# 01 — Kinematics

Kinematics is the description of motion — position, velocity, and acceleration — without yet asking *what causes* the motion (that's Newton's Laws, Section 03). Everything in this unit is the mathematical toolkit you'll reuse for the rest of mechanics.

> `flashcards.html` — 12-term flip-card deck (reference point, position, distance, displacement, vector, scalar, magnitude, direction, speed, average/instantaneous velocity, acceleration), built from the class's own "Terms Practice," "Average Velocity," and "Study Guide for Motion Quiz" worksheets in `class-materials/`. Open in a browser; click a card to flip it.

## Key Concepts to Master

- **Position, distance, and displacement** — displacement is a vector (depends on direction); distance is a scalar (total path length). They are only equal for motion in a single direction with no reversal.
- **Velocity vs. speed** — velocity is a vector (signed/directional); speed is its magnitude. *Average* velocity ($\Delta x / \Delta t$) vs. *instantaneous* velocity (slope of the tangent line on a position-time graph).
- **Acceleration** — the rate of change of velocity, $a = \Delta v / \Delta t$. Acceleration can point opposite to velocity (slowing down) even while velocity is positive.
- **Sign conventions** — students must fix a positive direction *before* starting a problem and stay consistent; this is the single biggest source of errors in this unit.
- **The four kinematic equations** (for constant acceleration only):
  - $v = v_0 + at$
  - $x = x_0 + v_0t + \tfrac{1}{2}at^2$
  - $v^2 = v_0^2 + 2a(x - x_0)$
  - $x = x_0 + \tfrac{1}{2}(v_0 + v)t$
- **Graphical analysis** — slope of position-time graph = velocity; slope of velocity-time graph = acceleration; area under velocity-time graph = displacement; area under acceleration-time graph = change in velocity.
- **Free fall** — a special case of constant acceleration where $a = -g$ (using up-positive convention); velocity at the top of a vertical throw is zero, but acceleration is *not* zero there.

## Learning Objectives

By the end of this section, a student should be able to:

1. Distinguish distance from displacement and speed from velocity in a given scenario, with correct units and sign.
2. Choose the correct kinematic equation for a given set of knowns/unknowns and solve for the missing variable.
3. Sketch and interpret position-time, velocity-time, and acceleration-time graphs for the same motion, including matching one graph type to another.
4. Solve free-fall problems (dropped objects, objects thrown up/down) using the same kinematic equations with $a = -g$.
5. Identify and explain the "acceleration at the top of the throw" misconception (velocity = 0, acceleration ≠ 0).

## Learning Resources

- **Textbook alignment:** OpenStax *Physics* (free, openstax.org) — Chapter 2: "Kinematics"; OpenStax *University Physics Vol. 1* Ch. 3 for a deeper treatment.
- **Video:** Khan Academy — "One-dimensional motion" unit (khanacademy.org, search "kinematics").
- **Simulation:** PhET Interactive Simulations — "Moving Man" (phet.colorado.edu) — lets students manipulate position/velocity/acceleration graphs directly and see the motion.
- **Reference sheet:** Keep the four kinematic equations and a blank sign-convention diagram taped inside your notebook until they're automatic.

## Practice Problems

1. A car accelerates from rest at $2.5 \text{ m/s}^2$ for 6 seconds. Find its final velocity and the distance traveled.
2. A ball is thrown straight up at $14.7 \text{ m/s}$. How long until it returns to the thrower's hand? What is its velocity the instant before landing?
3. A train decelerates from $30 \text{ m/s}$ to rest over $200 \text{ m}$. Find its acceleration (should be negative).
4. Given a position-time graph that is a straight line with negative slope followed by a horizontal segment, describe the motion in words and sketch the corresponding velocity-time graph.
5. A stone is dropped from a $45 \text{ m}$ tower. Find the time to hit the ground and the impact speed. (Ignore air resistance.)
6. **Challenge:** Two cars, 500 m apart, drive toward each other — one at constant 20 m/s, the other starting from rest and accelerating at 1.5 m/s². When and where do they meet?

## Real-World Applications

- **Airbag/braking systems:** engineers use kinematic equations to compute stopping distances and required deceleration for driver safety standards.
- **Sports analytics:** sprinters' velocity-time graphs are used to analyze reaction time vs. acceleration phase vs. top-speed phase.
- **Elevators and roller coasters:** ride designers control acceleration (not just speed) to keep forces on passengers within comfort/safety limits.
- **Astronomy:** free-fall equations (adapted for different $g$) predict landing times for probes on the Moon or Mars.

## Assessment

- `cornell-notes.md` — structured notes for this section
- `quiz.html` — open in a browser; 90%+ indicates mastery-level readiness for Section 02
