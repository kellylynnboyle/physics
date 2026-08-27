# Unit 2: Projectile Motion

Projectile motion is kinematics in two dimensions at once — but the trick is
that it's really just Unit 1 done twice in parallel. Every projectile
problem splits cleanly into a horizontal story (constant velocity) and a
vertical story (constant acceleration `−g`), and those two stories never
talk to each other. Get comfortable separating them and projectile problems
become two easy 1-D problems instead of one hard 2-D problem.

## Learning Objectives

By the end of this unit, students should be able to:

- Decompose an initial velocity into horizontal (`v₀ₓ`) and vertical (`v₀ᵧ`)
  components using `v₀ₓ = v₀cosθ` and `v₀ᵧ = v₀sinθ`.
- Explain why horizontal and vertical motion are independent, and apply
  constant-velocity equations horizontally and constant-acceleration
  (kinematics) equations vertically to the *same* time variable.
- Identify that time of flight is controlled entirely by the vertical
  motion, and solve for it before touching the horizontal equation.
- Correctly describe velocity, speed, and acceleration at the peak of a
  trajectory.
- Apply the range equation `R = v₀²sin(2θ)/g` and state the conditions
  under which it is valid (launch height = landing height).
- Solve asymmetric trajectory problems (launched from a height, or landing
  at a different height than launch) without relying on the symmetric
  range/time shortcuts.
- Solve horizontally-launched projectile problems (`v₀ᵧ = 0`) as a special
  case of the general method.

---

## Cornell Notes

### Key Concepts / Cues → Notes

| Cue / Question | Notes |
|---|---|
| What is the **core idea** of projectile motion? | Any projectile's motion can be split into two *independent* 1-D motions happening at the same time: horizontal (`x`), with constant velocity (`aₓ = 0`, ignoring air resistance), and vertical (`y`), with constant acceleration `a_y = −g = −9.8 m/s²`. They share only one thing: the same clock, `t`. |
| Why are horizontal and vertical motion **independent**? | Gravity acts straight down and has zero effect on horizontal velocity; there is no horizontal force to change vertical velocity. Classic proof: a ball dropped straight down and a ball launched horizontally from the same height hit the ground at the *same time*, even though one also travels sideways. |
| How do you find the **initial components**? | From launch speed `v₀` and angle `θ` (measured from horizontal): `v₀ₓ = v₀cosθ` (constant for the whole flight) and `v₀ᵧ = v₀sinθ` (changes under gravity, like any free-fall velocity). |
| What determines **time of flight**? | The VERTICAL motion only. Time of flight comes from the vertical kinematics equation (`y = y₀ + v₀ᵧt − ½gt²`, solved for when `y` returns to the landing height) — never from anything horizontal. Horizontal distance/speed cannot tell you how long the object is in the air. |
| What happens at the **peak** of the trajectory? | `v_y = 0` at the peak — that's what defines "peak." But `v_x` is completely unchanged (still `v₀cosθ`) and vertical acceleration is still `−g`, not zero. The object is not "at rest" at the peak; it's moving horizontally at full speed while momentarily having zero vertical velocity. |
| **Range equation**: `R = v₀²sin(2θ)/g` — when does it apply? | Only when launch height equals landing height (e.g., ground to ground). It comes from combining the vertical time-of-flight solution with the horizontal `x = v₀ₓt`, and the `sin(2θ)` term is why range is symmetric about 45° (e.g., 30° and 60° give the same range) and maximized at exactly 45°. |
| Why does **max range at 45°** stop being true on uneven ground? | The 45°-is-optimal and "equal times up and down" results are both *derived assuming* the projectile lands at the same height it launched from. Launched from a cliff (lands lower) or onto a raised platform (lands higher), the trajectory is no longer symmetric, the true time of flight changes, and the optimal angle shifts away from 45° (below 45° off a cliff, since more time is "free" on the way down). |
| **Horizontal launch** (`θ = 0`) — what's special? | `v₀ᵧ = 0` and `v₀ₓ = v₀` (the *entire* initial speed is horizontal). The object still accelerates downward at `g` starting from the instant of launch — vertical motion behaves exactly like something simply dropped, just with sideways motion added on top. |
| Most dangerous **error to avoid**? | Using the full launch speed `v₀` in *both* the horizontal and vertical equations. `v₀` is the speed along the launch direction; only its components (`v₀cosθ`, `v₀sinθ`) belong in the x- and y-equations respectively. Using `v₀` un-split in a vertical equation (or vice versa) is the single most common projectile-motion mistake. |
| What is the **correct solving order**? | (1) Split `v₀` into components. (2) Use the vertical equation to solve for time of flight `t` (or time to peak, doubled, only if symmetric). (3) Plug that same `t` into the horizontal equation `x = v₀ₓt` to get range. Horizontal information is *never* needed to find `t`, and time must always come from the vertical equation first. |

### Summary (write in your own words after class)

_Projectile motion is two independent 1-D kinematics problems glued together
by a shared clock. Horizontally, nothing changes — constant velocity,
constant `vₓ`, forever. Vertically, it's exactly free fall — constant `−g`,
`v_y` changing the whole time, even at the peak where `v_y` happens to pass
through zero. Time of flight always comes from the vertical equation; the
horizontal equation only tells you *how far*, never *how long*. The range
formula `R = v₀²sin(2θ)/g` is a shortcut that only survives when launch and
landing heights match — break that symmetry and you have to go back to the
two-equation method from scratch._

---

## Commonly Missed Concepts (build your quiz around these)

1. **"Horizontal and vertical motion affect each other."** False — they are
   completely independent. A dropped ball and a horizontally-launched ball
   from the same height hit the ground at the same time, regardless of how
   fast the second one is moving sideways.
2. **"Velocity is zero at the peak of the trajectory."** False — only the
   *vertical* component `v_y` is zero at the peak. The horizontal component
   `v_x` is unchanged and nonzero, so the object's actual (total) velocity
   at the peak equals `v_x`, not zero.
3. **"Acceleration is zero at the peak because velocity momentarily stops
   changing in the y-direction."** False — acceleration is `−g` for the
   entire flight, including exactly at the peak. `v_y = 0` at the peak is a
   result of constant downward acceleration, not a pause in it.
4. **Using the full initial speed `v₀` in both the horizontal and vertical
   equations** instead of splitting it into `v₀cosθ` and `v₀sinθ` first.
   This is the single most common calculation error in this unit.
5. **Trying to find time of flight from the horizontal equation** (or from
   horizontal distance and speed) instead of the vertical one. Time of
   flight is a purely vertical-motion result.
6. **Applying the symmetric range formula `R = v₀²sin(2θ)/g` — or the
   "time up equals time down" shortcut — to a problem where launch height
   and landing height are different** (launched from a cliff, or landing on
   an elevated platform). These shortcuts are only valid when the object
   lands at the same height it launched from.
7. **Assuming max range always happens at 45°.** True only for equal launch
   and landing heights; off a cliff, the optimal angle is *less* than 45°,
   and onto a raised platform it's *more* than 45°.
8. **Forgetting that a horizontally-launched projectile still has `v₀ᵧ =
   0`, not "no vertical motion at all."** It accelerates downward from the
   instant of launch exactly like a dropped object — it just also happens
   to be moving sideways.

---

## Practice Problems

1. A ball is launched from ground level at `v₀ = 25 m/s` at `θ = 40°` above
   horizontal. Find `v₀ₓ` and `v₀ᵧ`.
   *(Answer: v₀ₓ = 25cos40° ≈ 19.2 m/s; v₀ᵧ = 25sin40° ≈ 16.1 m/s)*
2. A stone is thrown horizontally at `15 m/s` from the top of a `20 m`
   cliff. Find (a) the time to hit the ground, (b) the horizontal distance
   traveled, (c) the vertical velocity just before impact.
   *(Answer: (a) from 20 = ½(9.8)t² → t ≈ 2.02 s; (b) x = 15 × 2.02 ≈
   30.3 m; (c) v_y = −gt ≈ −19.8 m/s)*
3. A projectile is launched from level ground at `v₀ = 30 m/s` and
   `θ = 35°`. Find the time of flight and the range. Then state what the
   range would be at `θ = 55°`, without recomputing from scratch, and
   explain why.
   *(Answer: t = 2v₀sinθ/g = 2(30)sin35°/9.8 ≈ 3.51 s; R = v₀²sin(2θ)/g =
   900·sin70°/9.8 ≈ 86.3 m. At 55°, R is the same ≈ 86.3 m, because 35°
   and 55° are complementary angles and sin(2θ) is identical for
   complementary launch angles — sin(70°) = sin(110°).)*
4. A ball launched from ground level reaches its peak after `1.8 s`. At
   that exact instant, is the ball's velocity zero? Is its acceleration
   zero? Explain both answers.
   *(Answer: No, and no. Velocity: v_y = 0 at the peak, but v_x is
   unchanged from launch and nonzero, so the ball's total velocity is NOT
   zero — it equals v_x, directed horizontally. Acceleration: still
   −9.8 m/s² (downward) at the peak; it never becomes zero at any point
   during projectile motion.)*
5. A ball is launched at `20 m/s` and `50°` from the edge of a rooftop that
   is `15 m` above the street below. Explain, without fully solving, why
   you cannot use `R = v₀²sin(2θ)/g` or "time up = time down" for this
   problem, and describe the correct first step.
   *(Answer: Those shortcuts assume launch height equals landing height;
   here the ball launches at 15 m and lands at 0 m, so the trajectory is
   asymmetric — the ball spends longer falling than rising. The correct
   first step is to set up the full vertical position equation, y = 15 +
   v₀sin(50°)·t − ½(9.8)t², set y = 0, and solve the resulting quadratic
   for the actual (longer) time of flight before touching the horizontal
   equation.)*

## Real-World Applications

- **Sports:** basketball free throws, soccer corner kicks, and golf drives
  are all optimized using launch angle and speed — announcers' talk of
  "optimal launch angle" in baseball home-run analytics is literally the
  range equation in action (adjusted for air resistance and backspin).
- **Artillery and ballistics:** military and historical siege-weapon
  targeting tables were some of the first practical applications of
  projectile motion mathematics, centuries before Newton formalized the
  laws behind them.
- **Water fountains and irrigation sprinklers:** nozzle angle is chosen
  using the same range logic to control how far water lands.
- **Search-and-rescue / firefighting:** aircraft dropping supplies or
  retardant calculate horizontal lead distance using time of fall (a
  purely vertical calculation) combined with aircraft ground speed.
- **Long jump and high jump (track and field):** athletes' center-of-mass
  trajectory during flight is modeled as projectile motion to analyze
  takeoff angle and speed.

## Learning Resources

- **Video:** Khan Academy — "Two-dimensional motion" unit (projectile
  motion, horizontal launches, range problems)
- **Video:** The Organic Chemistry Tutor — "Projectile Motion" playlist
- **Simulation:** PhET *Projectile Motion* (interactively vary angle,
  speed, and launch height and see the trajectory and landing point)
- **Simulation:** PhET *Vector Addition* (for practice decomposing `v₀`
  into `v₀ₓ` and `v₀ᵧ` before starting projectile problems)
- **Reading:** OpenStax *University Physics Vol. 1*, Ch. 4 (Motion in Two
  and Three Dimensions), section on projectile motion — free PDF/online
  textbook
- **Practice bank:** The Physics Classroom — "Projectile Motion" concept
  builders and problem sets

## Assessment Criteria (instructor rubric)

| Criterion | Meets expectations |
|---|---|
| Component decomposition | Correctly splits `v₀` into `v₀ₓ = v₀cosθ` and `v₀ᵧ = v₀sinθ` before setting up any equation |
| Independence of axes | Treats horizontal motion as constant-velocity and vertical motion as constant-acceleration without letting either influence the other |
| Solving order | Solves for time of flight from the vertical equation first, then uses that time in the horizontal equation for range |
| Peak reasoning | Correctly states that `v_y = 0` but `v_x ≠ 0` and acceleration remains `−g` at the peak, without claiming total velocity or acceleration is zero |
| Symmetric vs. asymmetric trajectories | Recognizes when launch height ≠ landing height and switches from the shortcut range/time formulas to the full quadratic vertical equation |
| Quiz mastery | Scores ≥ 80% on `quiz.html`, including correct explanations for at least 2 previously-missed questions on retake |
