# 2. Projectile Motion

**NGSS link:** HS-PS2-1 (use mathematical representations to predict motion; Newton's 2nd law). Practice: *Developing and Using Models*.
**Suggested pacing:** 1.5 weeks · **Lab:** Launch a marble from a ramp off a table, predict the landing spot, then test.

## Learning objectives
- [ ] P1. Break a velocity vector into horizontal and vertical components.
- [ ] P2. Explain that horizontal and vertical motion are independent, with ax = 0 and ay = −g.
- [ ] P3. Calculate time of flight, maximum height, and range for horizontal and angled launches.
- [ ] P4. Predict how range changes with launch speed and angle; identify the 45° and complementary-angle results.
- [ ] P5. Evaluate how air resistance would change the ideal model.

## Key concepts
| Concept | Meaning | Formula |
|---|---|---|
| Components | v₀ₓ = v₀cosθ, v₀ᵧ = v₀sinθ | Pythagorean theorem and trig |
| Horizontal motion | Constant velocity | x = v₀ₓt |
| Vertical motion | Free fall | y = v₀ᵧt − ½gt², vᵧ = v₀ᵧ − gt |
| Time of flight (level ground) | Up and back down | T = 2v₀sinθ / g |
| Range (level ground) | Horizontal distance | R = v₀² sin2θ / g |
| Max height | vᵧ = 0 | H = v₀²sin²θ / 2g |

## Cornell notes
| Cues / questions | Notes |
|---|---|
| What is a projectile? | An object moving only under gravity after launch. |
| Why split into x and y? | The two are independent: gravity changes only vᵧ; nothing changes vₓ. |
| What happens at the top? | vᵧ = 0, vₓ unchanged, a still −g. Speed is minimum. |
| How do I solve a horizontal launch? | Vertical: v₀ᵧ = 0, find t from h = ½gt². Horizontal: x = vₓt. |
| How do I solve an angled launch? | Components → find t (usually from y) → plug t into x. |
| Which angle gives the max range? | 45° on level ground. θ and 90° − θ give equal ranges. |
| What do real projectiles do differently? | Drag shortens range and makes the path asymmetric; optimum angle drops below 45°. |

**Summary:** _A projectile has constant horizontal velocity and constant downward acceleration. Time connects the two directions._

## Most-missed questions
Dropped vs. launched ball landing together · velocity at the top · sin/cos swap · taking the square root for t · range scales with v² · speed at same height equal.
→ Quiz: [`quiz/index.html`](../quiz/index.html)

## Resources
- PhET: *Projectile Motion* (phet.colorado.edu/en/simulations/projectile-motion), compare with/without drag
- Physics Classroom: *Vectors and Projectiles* tutorial
- OpenStax *Physics*, Ch. 3 (2-D Kinematics)
- Khan Academy: *Two-dimensional projectile motion*
- Tracker video analysis of a basketball shot

## Practice problems
1. A ball is kicked horizontally at 8 m/s from a 20 m cliff. Time and landing distance? *(2.02 s, 16.2 m)*
2. A javelin leaves at 25 m/s at 40°. Find vₓ, v₀ᵧ, time of flight, and range. *(19.2, 16.1 m/s, 3.28 s, 63 m)*
3. A football is kicked at 18 m/s at 55°. What is the max height? *(11.1 m)*
4. Two shots with the same speed at 25° and 65°. Which goes farther? Which stays up longer? *(Same range; 65° has the longer time.)*
5. **Design challenge:** Launch a marble so it lands in a cup 1.2 m from the table edge. Show the calculation, then test.
6. **Challenge:** Aim at a monkey that drops as you fire (the classic demo). Why does the dart always hit? *(Both fall ½gt² below their straight-line path.)*

## Real-world applications
Sports (basketball, soccer, javelin) · water fountains and irrigation · emergency airdrops · fireworks · ballistics and forensics · video-game physics engines · Mars-rover landing.

## Assessment criteria
| Level | Evidence |
|---|---|
| 4 | Predicts a landing point within 5% in lab; explains discrepancies using drag/measurement error. |
| 3 | Solves horizontal and angled launches with a labeled component table and correct time linking. |
| 2 | Resolves components but mixes variables between x and y. |
| 1 | Treats the path as one-dimensional or assumes horizontal acceleration. |
