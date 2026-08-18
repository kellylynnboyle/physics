---
layout: default
title: "Unit 2: Projectile Motion — SAT/ACT Practice"
---

[Project Home](../../index.html) | [Unit Overview](README.html)

# Unit 2: Projectile Motion — SAT/ACT Practice

- **SAT Math** turns projectile motion into a **quadratic function
  word problem** — you're given h(t) and asked to find a max, a root, or to
  interpret a coefficient. No trig, no vectors — just the algebra.
- **ACT Science** turns it into a **multi-trial data comparison** — usually
  a table of launch angle vs. range, or two experiments you have to combine.

## SAT Math Style

**Q1.** A projectile's height in meters is modeled by h(t) = -5t² + 20t + 2,
where t is time in seconds. What does the "+2" represent?

<details><summary>Show Answer</summary>

**The initial height (2 m) — the object was launched from 2 m above the ground, not from ground level.**

The most-missed part of this question type isn't computation — it's
correctly reading the constant term as the *initial* height. Students
often assume h(0)=0 by habit (as if every projectile launches from the
ground) and misinterpret what "+2" is doing.
</details>

---

**Q2.** Using h(t) = -5t² + 20t + 2, which value of t gives the maximum height (nearest tenth)?

<details><summary>Show Answer</summary>

**t = 2.0 s.**

Vertex: t = -b/(2a) = -20/(2×-5) = 2 s. The trap here is sign errors —
plugging in without correctly tracking that a = -5 (not +5) flips the
vertex formula's sign, a very common source of wrong answers on this
question type.
</details>

---

**Q3.** A ball's horizontal distance is given by x = 15t (meters), and its
height is given by y = -5t² + 10t (meters). At what horizontal distance
does the ball land (y=0, t>0)?

<details><summary>Show Answer</summary>

**30 m.**

Find landing time first: -5t²+10t=0 → -5t(t-2)=0 → t=2 s (t=0 excluded,
same trap as Unit 1). Then x=15(2)=30 m. The most common wrong approach:
trying to solve for x and y "at the same time" without first isolating the
landing time from the y-equation — this is a two-step problem and skipping
the first step (solving for t) is the #1 error.
</details>

## ACT Science Reasoning Style

**Q4.** A student launches a ball at different angles, keeping launch speed
constant, and records the range:

| Launch angle | Range (m) |
|---|---|
| 15° | 8.9 |
| 30° | 15.3 |
| 45° | 17.7 |
| 60° | 15.3 |
| 75° | 8.9 |

Based on this data, at what angle is the range maximized?

<details><summary>Show Answer</summary>

**45°.**

Direct data read — no formula needed, just find the largest value in the
table. The ACT Science trap on tables like this is students overthinking
it and trying to recall/apply the R=V₀²sin(2θ)/g formula instead of simply
reading the maximum straight off the table — ACT Science is designed to be
answerable from the data alone.
</details>

---

**Q5.** Using the same table, what pattern do you notice between the 30°/60°
pair and the 15°/75° pair?

<details><summary>Show Answer</summary>

**Complementary angles (adding to 90°) give equal range** — 30°+60°=90°
(both 15.3 m), and 15°+75°=90° (both 8.9 m).

This is the ACT Science "identify the pattern across trials" question type
— the answer is sitting directly in the table, but students often miss it
because they're scanning for a formula-based explanation instead of just
comparing rows.
</details>

---

**Q6.** A second student repeats the experiment with a *faster* launch
speed at the same five angles. All ranges increase, but 45° is still the
maximum. A student concludes: "At any launch speed, 45° will always give
the maximum range." Is this a valid conclusion from the two experiments
described?

<details><summary>Show Answer</summary>

**Yes, for this idealized (no air resistance) situation — both experiments, at two different speeds, are consistent with the same conclusion.**

This is a "compare two experiments" ACT Science question — the trap is
either being too strict (saying it's not proven because only two speeds
were tested) or too loose (assuming it must be a law of nature). The
correct read: the conclusion is *supported* by the given data from both
trials, which is exactly what the ACT is checking — not whether it's
universally true outside the passage's assumptions.
</details>

---

## Answer Key Summary

1. initial height 2 m  2. t=2.0 s  3. 30 m  4. 45°
5. complementary angles give equal range  6. Yes — supported by both trials
