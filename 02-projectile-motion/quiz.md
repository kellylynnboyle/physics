# Unit 2 — Projectile Motion — Self-Check Quiz

Built from the questions students miss most often on projectile motion tests. Try each question yourself before revealing the answer.

**How to use:** Get 80%+ (8/10) before moving on. Re-read the linked note section for anything you miss.

---

**1.** A projectile is launched at an angle. At the very top of its path, what is true about its velocity?

<details>
<summary>Show answer</summary>

**Vertical velocity = 0, but horizontal velocity is unchanged and nonzero.** The object is moving purely horizontally at that instant, not momentarily at rest.

*Most-missed reason:* students say "velocity = 0 at the top," forgetting velocity is a vector with an unchanging horizontal component.
</details>

---

**2.** A ball rolls off a table with horizontal speed 5 m/s. A second identical ball is simply dropped from the same table at the same instant. Which ball hits the floor first?

<details>
<summary>Show answer</summary>

**They hit at the same time.** Vertical motion is independent of horizontal motion — both balls have v_y(initial) = 0 and the same vertical acceleration (−g), so they fall identically regardless of horizontal speed.

*Most-missed reason:* students assume the faster-moving ball "stays in the air longer" because it travels farther, confusing horizontal distance with vertical fall time.
</details>

---

**3.** Which launch angle (on flat ground) maximizes range for a given launch speed?

- A) 30°
- B) 45°
- C) 60°
- D) 90°

<details>
<summary>Show answer</summary>

**B) 45°.**

*Most-missed reason:* students think a steeper angle always means farther distance because it "goes higher" — but going higher trades off against horizontal speed and flight-direction efficiency. 45° balances the two.
</details>

---

**4.** True or False: 30° and 60° launch angles (same speed) produce the same range.

<details>
<summary>Show answer</summary>

**True** — they are complementary angles (add to 90°), and R = v₀²sin(2θ)/g gives the same value for θ and (90° − θ) since sin(2·30°) = sin(60°) = sin(120°) = sin(2·60°).

*Most-missed reason:* students assume only 45° can be "the" answer for any given range and don't realize complementary angle pairs share a range (though not the same flight time or max height).
</details>

---

**5.** A ball is launched horizontally at 10 m/s from a 20 m cliff. How long is it in the air? (g = 9.8 m/s²)

<details>
<summary>Show answer</summary>

Vertical motion only: y = ½gt² → 20 = ½(9.8)t² → t² = 4.08 → **t ≈ 2.02 s**

*Most-missed reason:* students try to use the symmetric time-of-flight formula (2v_y/g), which only works when launch and landing heights are equal — here v_y(initial) = 0 and the object falls a *fixed height*, so you must solve y = ½gt² directly.
</details>

---

**6.** A projectile is launched at 40° above horizontal at 25 m/s. Set up (don't have to fully solve) the components vₓ and v_y.

<details>
<summary>Show answer</summary>

vₓ = 25cos(40°) ≈ 19.2 m/s
v_y = 25sin(40°) ≈ 16.1 m/s

*Most-missed reason:* swapping sine and cosine — remember: **cos goes with horizontal (x)**, **sin goes with vertical (y)**, because θ is measured from the horizontal axis.
</details>

---

**7.** Why is the shape of a projectile's path a parabola and not a straight line or circle?

<details>
<summary>Show answer</summary>

Horizontal position grows **linearly** with time (x = vₓt), while vertical position grows **quadratically** with time (y = v_yt − ½gt²) because of constant vertical acceleration. A linear x(t) combined with a quadratic y(t) traces a parabola when you eliminate t.

*Most-missed reason:* students think the "curviness" of the path comes from a changing horizontal speed, when it's entirely due to constant vertical acceleration.
</details>

---

**8.** A projectile has an initial vertical velocity of 14 m/s. What is its maximum height? (g = 9.8 m/s²)

<details>
<summary>Show answer</summary>

h_max = v_y²/(2g) = 14²/(2×9.8) = 196/19.6 = **10 m**

*Most-missed reason:* using the full initial speed (v₀) instead of only the vertical component (v_y) in the max-height formula.
</details>

---

**9.** An arrow is shot at a target at the exact same height as the launch point. Does air resistance being ignored make the outbound (rising) trajectory time equal to the return (falling) trajectory time?

<details>
<summary>Show answer</summary>

**Yes**, for equal launch/landing height and no air resistance, the trip up and the trip down each take exactly half the total time of flight — the trajectory is symmetric about the peak.

*Most-missed reason:* students assume asymmetry by default, not realizing symmetry is a direct consequence of constant gravitational acceleration and equal start/end heights.
</details>

---

**10.** A cannonball is launched at 50 m/s at 25° above horizontal, over flat ground. Which formula set correctly finds the range?

- A) R = v₀t
- B) R = v₀²sin(2θ)/g
- C) R = v₀²cos(θ)/g
- D) R = ½gt²

<details>
<summary>Show answer</summary>

**B) R = v₀²sin(2θ)/g** — the standard symmetric-launch range formula.

*Most-missed reason:* students try to force the free-fall height formula (D) into a range problem, or forget the "2θ" (double angle) inside the sine.
</details>

---

**Score yourself:** 9–10 correct → move on to Newton's Laws. 6–8 → review the missed cue-column items in [`notes.md`](notes.md). Below 6 → re-do the Level 1–2 practice problems before retaking this quiz.

Next unit: **[03-newtons-laws](../03-newtons-laws/notes.md)**
