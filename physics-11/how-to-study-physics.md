# How to Study Physics — A 6-Step Method

A practical study method (not physics content itself) for getting the most out of this project. The core idea: physics is a system of connected ideas, not a list of formulas to memorize — and *how* you study matters as much as how long you study.

## 1. Master the Core Concepts (Understand, Don't Memorize)

Cramming formulas without understanding what they mean is why they disappear a few weeks later. Every equation tells a story about the physical world — e.g., Newton's Second Law ($\Sigma F = ma$) is just "acceleration always has a force causing it," visible every time a ball is kicked, a car speeds up, or a rocket launches.

**Actionable habit:** when you hit a new formula, ask where it comes from before you use it. Kinetic energy ($KE = \tfrac12mv^2$) isn't a separate fact to memorize — it falls directly out of Newton's Second Law plus the definition of work. Once you see that derivation, you understand *why* force, work, and energy are three views of the same thing, and you gain the ability to solve a problem with whichever method is easiest (sometimes forces are trivial and energy is a nightmare; sometimes it's reversed).

*Where this applies here:* the [Work & Energy](05-work-energy/README.md) topic README already frames energy as an alternative lens to forces/kinematics for exactly this reason — read the "why" in each topic README, not just the formula table.

## 2. Ask Yourself Questions

Don't just accept a law — interrogate it. For $V = IR$ (Ohm's Law): What happens if $R = 0$? (Short circuit.) What if $R \to \infty$? (Open circuit, no current.) Where do you see this daily? (A phone charger heating up; lightning.)

**Actionable habit:** for every formula/definition, generate one edge case (what if a variable is zero or infinite?) and one real-world example, before moving on.

*Where this applies here:* this is exactly the format of the "Why this is tricky" line on every quiz question in this repo — each one is built around an edge case or common misconception, not just a plug-and-chug check.

## 3. Study the Right Way

- **Structured routine, not marathons.** 45-60 focused minutes/day beats occasional 5-hour sessions. Split each session: review concepts first, then practice problems.
- **Fix gaps immediately.** Physics builds in layers — skip one and everything after gets harder. If you're lost, stop and go back to that specific concept within a day or two, don't push forward and hope it clicks later.
- **Use visual material.** Diagrams, real experiment videos, and simulations (see each topic README's PhET links) stick better than a formula on paper.
- **Track your own mistake patterns.** Every time you get a problem wrong, write down *why* — misread the question, dropped a unit, or an algebra slip are the three most common categories. Patterns you can name are patterns you can stop repeating.
- **Practice with real test-style problems**, not just textbook exercises — see the [Unit 0 Motion Test practice quiz](unit-0-motion-test/quiz.html) for the model this project follows for every unit.

## 4. Get the Math Fluent

Algebra (solving equations), trigonometry (angles — needed everywhere in [Projectile Motion](02-projectile-motion/README.md) and [Newton's Laws](03-newtons-laws/README.md) incline problems), and eventually calculus are the *tools* physics reasoning runs on. If the math is shaky, even a well-understood concept becomes a slow, error-prone slog. Fluency here is what makes problem setup fast instead of the bottleneck.

## 5. Solve a Lot of Problems — With a Method

Use a four-phase approach on every problem, not just "start plugging in numbers":

1. **Understand:** list every known and unknown. Watch for unit traps (e.g., a problem giving *weight* in pounds when you need *mass* — weight and mass are different quantities; convert with $a=g$ before using $F=ma$).
2. **Plan:** decide the approach before calculating — which law applies, what intermediate quantities you need (e.g., on an incline: decompose weight into components, find the normal force, find friction, compare to see if it slides, then apply $\Sigma F = ma$).
3. **Execute:** carry out the plan and the arithmetic.
4. **Check:** does the answer make physical sense? An acceleration of ~1/3 of $g$ on a 30° incline with friction is reasonable; if your answer came out larger than $g$ on a shallow incline, something's wrong — go back and find it.

*Where this applies here:* this is precisely the structure used in the [Unit 0 study guide](unit-0-motion-test/study-guide-answers.md)'s "Mixed Problem Solving" section — knowns/unknowns, equation, substitute, solve. Use that same four-phase habit on every practice problem in every topic folder, not just Unit 0.

## 6. Develop Physical Intuition

Intuition is recognizing a problem's *type* before you calculate anything — like a chess player recognizing a board position instead of calculating every move from scratch. It's built by seeing the *same concept* in many different disguises, not by re-solving the same problem type repeatedly.

**Actionable habit:** when studying a topic (e.g., momentum conservation), deliberately seek out varied scenarios — elastic vs. inelastic collisions, head-on vs. angled, moving-object-hits-stationary-object, very different masses — rather than five near-identical problems. The variety is what builds pattern recognition; repetition of one pattern doesn't transfer.

*Where this applies here:* each topic's practice problems in this project are deliberately varied for this reason (see each topic README's "Practice Problems" section) — don't skip the ones that look different from what you just did; those are the ones building intuition.

---

**Bottom line:** understand derivations over memorizing results, interrogate every law with edge cases, study in short structured sessions with immediate gap-repair, get comfortable with the underlying math, use a consistent four-phase method on every problem, and deliberately seek variety to build intuition. All six work together — skipping the math fluency step or the varied-practice step undermines the others.
