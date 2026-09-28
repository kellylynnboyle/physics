# Unit 2 — Projectile Motion — Cornell Notes

**Essential question:** Why does a projectile follow a curved path, and how can we predict exactly where it will land?

**NGSS connection:** Extends HS-PS2-1 (force/mass/acceleration) into two dimensions — gravity is the only force acting on an ideal projectile.

---

## Cue column | Notes

| Cue | Notes |
|---|---|
| What is a **projectile**? | Any object launched into the air and moving under gravity alone (no engine, ignoring air resistance). |
| Big idea: **independence of motion** | Horizontal and vertical motion happen **independently** and don't affect each other. Horizontal velocity stays constant (no horizontal force). Vertical velocity changes due to gravity, exactly like free fall. |
| How do you break an angled launch into components? | vₓ = v₀cos(θ), v_y = v₀sin(θ), where θ is the launch angle above horizontal. Treat these as two separate 1D kinematics problems sharing the same time, t. |
| What acceleration acts in each direction? | Horizontal: aₓ = 0 (constant velocity). Vertical: a_y = −g = −9.8 m/s² (free fall). |
| How do you find **time of flight**? | For a symmetric launch and landing height: t = 2v_y/g = 2v₀sin(θ)/g. For a launch off a height (e.g., off a cliff or table), solve the vertical position equation for t instead (may need the quadratic formula). |
| How do you find **range** (horizontal distance)? | R = vₓ · t. For a symmetric launch: R = (v₀²sin(2θ))/g. |
| How do you find **maximum height**? | h_max = v_y²/(2g), using only the initial vertical velocity component. |
| What launch angle gives maximum range (flat ground, same launch/landing height)? | **45°.** Complementary angles (e.g., 30° and 60°) give the *same* range but different max heights and flight times. |
| Common trap: horizontal launch (like a ball rolling off a table) | v_y (initial) = 0, but vₓ ≠ 0. The object still falls with the *same* vertical motion as if simply dropped — horizontal speed doesn't make it take longer to fall. |
| Common trap: what's the velocity **at the peak**? | Vertical velocity = 0 at the peak, but horizontal velocity is unchanged and nonzero — so the object is *not* momentarily at rest, only momentarily moving purely horizontally. |
| Why is the trajectory a **parabola**? | Because x grows linearly with t (constant vₓ) while y grows quadratically with t (constant vertical acceleration) — combining a linear x(t) and quadratic y(t) traces a parabola. |

---

## Key vocabulary
projectile · trajectory · range (R) · maximum height (h_max) · time of flight (t) · launch angle (θ) · horizontal component (vₓ) · vertical component (v_y) · independence of motion

## Key formulas
- vₓ = v₀cos(θ), v_y = v₀sin(θ)
- x = vₓt
- y = y₀ + v_yt − ½gt²
- v_y(final) = v_y(initial) − gt
- Time of flight (symmetric): t = 2v_y/g
- Range (symmetric): R = v₀²sin(2θ)/g
- Max height: h_max = v_y²/(2g)

---

## Summary (write in your own words after class)
Projectile motion is just two 1D kinematics problems happening at the same time: constant-velocity horizontal motion and free-fall vertical motion, linked only by a shared clock (t). Break every problem into components first, solve each axis separately, then recombine.

---

## Real-world applications
- Basketball/football shot arcs and optimal release angle
- Artillery and ballistics (historically how projectile motion equations were developed)
- Long-jump and high-jump technique in track and field
- Water fountain and firefighting hose stream design
- Search-and-rescue: dropping supplies from an aircraft to hit a target

## Practice problems (by difficulty)
**Level 1 — horizontal launch**
1. A ball rolls off a table 1.2 m high at 3.0 m/s. How long is it in the air? How far from the table does it land?

**Level 2 — angled launch**
2. A soccer ball is kicked at 20 m/s at 30° above horizontal. Find its time of flight, range, and max height.

**Level 3 — launch from/to different heights, conceptual**
3. An arrow is shot horizontally from the top of a 45 m tower at 40 m/s. How far from the base of the tower does it land? (Hint: the quadratic for t won't simplify to the symmetric formula.)
4. Two balls are launched with the same speed, one at 20° and one at 70°. Explain why they land at the same range but not necessarily the same place *first*.

## Learning objectives
- I can explain why horizontal and vertical motion are independent.
- I can decompose an initial velocity into horizontal and vertical components.
- I can calculate time of flight, range, and maximum height for horizontal and angled launches.
- I can predict and explain a projectile's trajectory shape.

## Resources
- [PhET: Projectile Motion simulation](https://phet.colorado.edu/en/simulations/projectile-motion) — test predictions against real trajectories
- [Physics Classroom — Projectile Motion](https://www.physicsclassroom.com/class/vectors)
- [Khan Academy — Two-dimensional motion](https://www.khanacademy.org/science/physics/two-dimensional-motion)

Self-check when done: **[quiz.md](quiz.md)**
