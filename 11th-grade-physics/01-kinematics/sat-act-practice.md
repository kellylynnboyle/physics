---
layout: default
title: "Unit 1: Kinematics — SAT/ACT Practice"
---

[Project Home](../../index.html) | [Unit Overview](README.html)

# Unit 1: Kinematics — SAT/ACT Practice

Physics doesn't get its own SAT section, and the ACT's Science section
rarely asks you to *apply* a formula from outside the passage — but
kinematics shows up constantly in both, just wearing different clothes:

- **SAT Math** tests kinematics as **quadratic/linear function word problems**
  — usually height-vs-time or position-vs-time — inside the "Advanced Math"
  and "Problem-Solving and Data Analysis" domains. You're given the formula;
  the test is algebra, not physics recall.
- **ACT Science** tests kinematics as **data-table and graph reading** from
  a described experiment — reading trends, interpolating, and (the #1
  trap) *not* extrapolating past the given data.

## SAT Math Style

**Q1.** A ball's height in feet, t seconds after being launched straight up,
is modeled by h(t) = -16t² + 64t. What is the maximum height the ball
reaches?

<details><summary>Show Answer</summary>

**64 feet.**

Vertex of a downward parabola at t = -b/(2a) = -64/(2×-16) = 2 s. h(2) =
-16(4)+64(2) = -64+128 = 64 ft. The single most common error on this
question type: plugging t=0 (start) or forgetting to find the vertex at
all and just picking one of the answer choices that "looks like" the
coefficient 64.
</details>

---

**Q2.** Using the same function h(t) = -16t² + 64t, at what positive time(s)
does the ball hit the ground (h=0)?

<details><summary>Show Answer</summary>

**t = 4 seconds** (besides the trivial t=0 at launch).

Factor: -16t² + 64t = -16t(t-4) = 0 → t=0 or t=4. The most-missed part
here isn't the algebra — it's recognizing that t=0 is a *valid root but not
the answer the question wants* (it's the launch, not the landing). SAT
questions on this model almost always have this exact trap built in.
</details>

---

**Q3.** A train travels at a constant 45 miles per hour. Which expression
gives its speed in feet per second? (1 mile = 5280 ft)

<details><summary>Show Answer</summary>

**45 × 5280 / 3600 = 66 ft/s.**

This is a unit-conversion word problem disguised as kinematics — SAT loves
stacking a unit conversion on top of a rate problem specifically because
students who understand the physics still get tripped up on the conversion
factor's direction (multiply by 5280, divide by 3600 — mixing these up is
the single most common error).
</details>

---

**Q4.** A car's position (in meters) is given by x(t) = 20 + 6t, where t is
in seconds. What does the number 6 represent, and what does 20 represent?

<details><summary>Show Answer</summary>

**6 = constant velocity (6 m/s); 20 = initial position (starting point, in meters).**

This tests linear-function literacy applied to kinematics: slope = rate of
change = velocity; y-intercept = starting value = initial position. SAT
frequently asks you to interpret a linear model's slope/intercept in
context rather than compute a number — missing this is usually a
reading-comprehension error, not a math error.
</details>

## ACT Science Reasoning Style

**Q5.** A student drops a ball and records its distance fallen at different
times:

| Time (s) | Distance fallen (m) |
|---|---|
| 0.0 | 0.0 |
| 0.5 | 1.2 |
| 1.0 | 4.9 |
| 1.5 | 11.0 |

Based on this data, approximately how far will the ball have fallen at
t = 2.0 s?

A) ~13 m
B) ~16 m
C) ~20 m
D) Cannot be determined from this data

<details><summary>Show Answer</summary>

**C — ~20 m** (consistent with free-fall's d ∝ t², i.e., d=½gt² ≈
½(9.8)(4)=19.6 m).

The ACT Science trap here is usually the *reverse* of this question — most
missed ACT Science questions ask you to extrapolate *well beyond* the given
range (e.g., t=10 s) and the correct answer is "cannot be determined,"
since you shouldn't trust a pattern far outside your data. Here, t=2.0 s is
only a modest step past t=1.5 s and follows the same clear quadratic trend
in the table, so estimating is reasonable — but always check how far past
the data range a question is asking you to go before assuming you can
extrapolate.
</details>

---

**Q6.** Two objects' velocities are graphed vs. time on the same axes.
Object A's line has a steeper slope than Object B's line, and the two lines
cross at t = 3 s. What is true at t = 3 s?

A) Both objects are at the same position
B) Both objects have the same velocity
C) Object A has traveled farther than Object B
D) Object A is accelerating faster than Object B for all time

<details><summary>Show Answer</summary>

**B — both objects have the same velocity.**

This is the #1 most-missed ACT Science graph-reading trap in kinematics: a
crossing point on a **velocity-time** graph means equal *velocity* at that
instant, not equal *position*. Students very often answer A, confusing a
v-t graph intersection with an x-t graph intersection (which would mean
equal position). Since we don't have position data (just velocity), A
cannot be determined from this graph.
</details>

---

## Answer Key Summary

1. 64 ft  2. t=4 s  3. 66 ft/s  4. slope=velocity, intercept=initial position
5. C  6. B
