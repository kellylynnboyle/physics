# 2. Projectile Motion

*Suggested pacing: ~2 weeks* · *Big idea:* Horizontal and vertical motion are independent: constant velocity sideways, constant acceleration (g) vertically.

## California NGSS performance expectations

- **HS-PS2-1** — Analyze data to support the claim that Newton's second law describes the relationship among net force, mass, and acceleration. (Gravity is the only force on a projectile, so a = g.)

- *Science & Engineering Practices:* Using mathematics and computational thinking; developing and using models.
- *Crosscutting Concepts:* Systems and system models; cause and effect.

## Learning objectives (students can…)

- [ ] Resolve a velocity vector into horizontal and vertical components.
- [ ] Explain independence of horizontal and vertical motion.
- [ ] Solve horizontal-launch and angled-launch problems for time, range, and height.
- [ ] Predict how changing angle or speed changes range, peak, and time of flight.
- [ ] Use a simulation or video to compare a model's prediction to data.

## Key concepts

| Concept | What to master |
|---|---|
| **Independence of components** | x- and y-motion are analyzed separately and linked only by time. |
| **Horizontal component** | No horizontal force (ignoring air): aₓ = 0, so vₓ is constant and Δx = vₓt. |
| **Vertical component** | a_y = −9.8 m/s². Use the constant-acceleration equations for y. |
| **Launch at an angle** | v₀ₓ = v₀cosθ, v₀y = v₀sinθ. Time up = v₀y / g. |
| **Key features of the path** | Parabola. At the peak v_y = 0 but vₓ ≠ 0 and a = 9.8 m/s² down. Range is max at 45° (same launch/landing height); complementary angles give equal range. |
| **Horizontal launch** | v₀y = 0. Fall time t = √(2h/g) depends only on height, not on horizontal speed. |

**Equations:** `v₀ₓ = v₀ cosθ` · `v₀y = v₀ sinθ` · `Δx = vₓ t` · `Δy = v₀y t − ½gt²` · `t_flight = 2v₀y / g (level ground)` · `R = v₀² sin2θ / g (level ground)` · `H = v₀y² / 2g`

**Vocabulary:** projectile, trajectory, component, range, time of flight, apex, independence of motion

## Cornell Notes: Projectile Motion

| Cue / Question | Notes |
|---|---|
| What is a projectile? | Any object moving under gravity alone after launch (no engine, no air resistance in our model). Path is a parabola. |
| Why split into x and y? | Gravity only affects the vertical motion, so the two directions are independent. Time is the shared variable. |
| What happens horizontally? | aₓ = 0 → vₓ constant → Δx = vₓt. |
| What happens vertically? | a_y = −9.8 m/s². Up and down are symmetric (same height → same speed, mirrored velocity). |
| How do I handle an angled launch? | Resolve v₀ into v₀cosθ and v₀sinθ. Find time from the vertical motion, then use it in the horizontal equation. |
| Max range and angles? | 45° maximizes range on level ground; θ and (90° − θ) give the same range. Steeper angle → higher peak and longer hang time. |

**Summary:** A projectile is two simultaneous 1-D problems tied together by time. Horizontal = constant speed. Vertical = free fall. Solve vertical for time, then plug into horizontal.

## Most-missed questions quiz (answer key)

*Take the interactive version in `site/index.html`.*

**1. One ball is dropped from a table while an identical ball is rolled horizontally off the table at the same instant. Which hits the floor first (ignore air)?**

- a. They hit at the same time  ✅
- b. The dropped ball
- c. The rolled ball
- d. It depends on the horizontal speed

*Why:* Both start with zero vertical velocity and fall the same height with a = g. Horizontal speed does not affect fall time.  
*Common misconception:* Horizontal speed changes how long the object takes to fall.

**2. Ignoring air resistance, what happens to the horizontal velocity of a projectile during flight?**

- a. It stays constant  ✅
- b. It decreases to zero at the top
- c. It increases steadily
- d. It equals 9.8 m/s

*Why:* No horizontal force means no horizontal acceleration, so vₓ is constant.  
*Common misconception:* A projectile needs a continuing 'push' to keep moving forward.

**3. At the highest point of a projectile's path launched at an angle, which statement is true?**

- a. v_y = 0, vₓ ≠ 0, a = 9.8 m/s² down  ✅
- b. v = 0 and a = 0
- c. vₓ = 0 and v_y ≠ 0
- d. a = 0 because the ball is changing direction

*Why:* Only the vertical component is zero at the apex. Horizontal velocity remains, and gravity still accelerates the ball downward.  
*Common misconception:* The projectile stops at the top.

**4. On level ground (no air), which launch angle gives the greatest range for a given launch speed?**

- a. 45°  ✅
- b. 30°
- c. 60°
- d. 90°

*Why:* R = v₀² sin2θ / g is largest when 2θ = 90°, so θ = 45°. Note 30° and 60° give the same (smaller) range.  
*Common misconception:* A steeper angle always goes farther.

**5. A ball rolls off a 1.25 m high table at 4.0 m/s. About how far from the table's edge does it land?**

- a. 2.0 m  ✅
- b. 1.0 m
- c. 4.0 m
- d. 0.5 m

*Why:* t = √(2h/g) = √(2·1.25/9.8) ≈ 0.505 s. Δx = vₓt = 4.0 × 0.505 ≈ 2.0 m.  
*Common misconception:* Using the height as the horizontal distance, or forgetting to find time first.

**6. A ball is launched at 20 m/s at 30° above horizontal. What are the initial horizontal and vertical velocity components?**

- a. 17.3 m/s and 10 m/s  ✅
- b. 10 m/s and 17.3 m/s
- c. 20 m/s and 0
- d. 17.3 m/s and 17.3 m/s

*Why:* vₓ = 20cos30° = 17.3 m/s; v_y = 20sin30° = 10 m/s. (Cosine goes with the component next to the angle.)  
*Common misconception:* Swapping sine and cosine.

**7. A plane flies horizontally at constant velocity and drops a package. Ignoring air resistance, where is the package relative to the plane as it falls?**

- a. Directly below the plane  ✅
- b. Behind the plane
- c. Ahead of the plane
- d. It depends on the plane's altitude

*Why:* The package keeps the plane's horizontal velocity, so it stays directly below until it hits the ground.  
*Common misconception:* Dropped objects fall straight down in the ground frame.

**8. Two balls are launched with the same speed, one at 30° and one at 60°. Which statement is correct?**

- a. Same range; the 60° ball goes higher and stays up longer  ✅
- b. The 60° ball has a longer range
- c. The 30° ball has a longer range
- d. Same range, same height

*Why:* Complementary angles give equal range. The steeper launch has a larger v_y, so greater height and time of flight.  
*Common misconception:* Equal range means equal path.

## Practice problems

1. A ball is kicked horizontally at 12 m/s from a 45 m high cliff. Find the time in the air and the horizontal distance.
   - *Answer:* t ≈ 3.03 s; Δx ≈ 36.4 m.
2. A projectile is launched at 25 m/s at 40°. Find the time of flight, range, and maximum height.
   - *Answer:* t ≈ 3.28 s; R ≈ 62.8 m; H ≈ 13.2 m.
3. A plane flying 50 m/s horizontally at 500 m altitude releases a package. How far ahead (horizontally) of the release point does it land?
   - *Answer:* t ≈ 10.1 s; Δx ≈ 505 m.
4. A ball has the same range when launched at 25°. At what other angle (same speed) would it have this same range?
   - *Answer:* 65°.
5. A soccer ball is kicked at 15 m/s at 60°. How long until it reaches the top, and how fast is it moving there?
   - *Answer:* t ≈ 1.33 s; speed at top = vₓ = 7.5 m/s.

## Learning resources

- **PhET: Projectile Motion (simulation)** (phet.colorado.edu) — Change angle, speed, mass, and air resistance; compare trajectories.
- **The Physics Classroom: Projectiles** (physicsclassroom.com) — Lessons on horizontal launch, angled launch, and interactives.
- **Khan Academy: Two-dimensional projectile motion** (khanacademy.org) — Video lessons and practice.
- **Desmos / GeoGebra** (desmos.com) — Graph y(x) for a projectile and slide the angle.
- **Tracker or phone slow-motion video** (physlets.org/tracker) — Mark a ball's position frame-by-frame to see the parabola.

## Labs & activities

- Marble launch: measure range at several angles; graph range vs. angle.
- Horizontal-launch prediction challenge: predict landing spot, then place a target cup.
- Slow-motion video analysis of a tossed ball: confirm constant vₓ.

## Real-world applications

- Basketball free-throw arc and optimal release angle.
- Long jump and javelin; why athletes aim near (but below) 45°.
- Firefighter hose streams and water fountains.
- Package drops and relief air-drops; artillery safety zones.

## Assessment criteria

| Level | Evidence |
|---|---|
| **Mastery (4)** | Resolves vectors, links x and y through time, and explains results with the independence principle; verifies with data. |
| **Proficient (3)** | Solves standard launch problems correctly with minor slips. |
| **Developing (2)** | Splits components but struggles linking them through time or interpreting the apex. |
| **Beginning (1)** | Treats the path as one-dimensional or believes a horizontal 'force' acts in flight. |

**Proficiency target:** ≥ 80% on the quiz (retakes allowed after review), a completed lab report, and Level 3+ on the rubric.
