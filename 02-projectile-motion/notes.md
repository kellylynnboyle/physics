# Unit 2: Projectile Motion — Cornell Notes

**NGSS alignment:** HS-PS2-1 (Newton's second law, applied to independent force/motion components). CA Physics course model, Semester 1, Week 3.

**Essential question:** Why can we analyze horizontal and vertical motion completely separately, even though they happen at the same time?

---

## Cornell Notes

| Cues / Questions | Notes |
|---|---|
| The **core idea** of projectile motion | Horizontal and vertical motion are *independent* of each other. Gravity only acts vertically, so it never changes horizontal velocity, and nothing (in the absence of air resistance) changes vertical acceleration. |
| Horizontal motion equations | Constant velocity: x = v₀ₓt (no acceleration horizontally: aₓ = 0) |
| Vertical motion equations | Same as free fall: v_y = v₀y − gt, y = v₀y t − ½gt², v_y² = v₀y² − 2gΔy |
| Splitting initial velocity into components | v₀ₓ = v₀cos(θ), v₀y = v₀sin(θ), where θ is the launch angle above horizontal |
| **Horizontally launched** projectile (θ = 0) | v₀y = 0, so all vertical motion starts "from rest" vertically — time to fall only depends on height, not horizontal speed |
| Why do a bullet fired horizontally and a bullet dropped from the same height land at the same time? | Because vertical motion is independent of horizontal motion — both start with v₀y = 0 and experience the same g, so both fall for the same amount of time regardless of horizontal speed. |
| **Time of flight** for a projectile launched and landing at the same height | t = 2v₀y/g = 2v₀sin(θ)/g |
| **Maximum height** | H = v₀y²/(2g) |
| **Range** (launched/landing at same height) | R = v₀²sin(2θ)/g. Range is maximum at θ = 45°. |
| What is the velocity at the **peak** of the trajectory? | Vertical velocity = 0, but horizontal velocity = v₀ₓ (unchanged, nonzero). The object is NOT momentarily at rest — only its vertical component is zero. |
| Is the **acceleration** ever zero during flight? | No. As long as the object is in the air, acceleration is −g (vertical) the entire time, including at the peak. Horizontal acceleration is 0 throughout (not "zero at the peak" — it's always zero). |
| **Symmetry** of projectile trajectories | For launch and landing at the same height, time up = time down, and launch speed = landing speed (speeds match, direction of v_y flips). |
| Common **unit trap**: angle given from vertical, not horizontal | Always confirm whether θ is measured from the horizontal or vertical axis before splitting into components — swapping sin/cos is a very common error. |

---

## Summary

Every projectile problem is really two 1D kinematics problems happening at once: constant-velocity motion horizontally, and free-fall motion vertically, linked only by a shared time variable, t. Solve the vertical problem to find "how long is it in the air," then plug that time into the horizontal equation to find "how far did it go."

---

## Key Vocabulary

| Term | Definition |
|---|---|
| Projectile | Any object launched into the air, moving under gravity alone after launch |
| Trajectory | The curved (parabolic) path traced by a projectile |
| Range | Horizontal distance traveled before landing |
| Launch angle (θ) | Angle of initial velocity above the horizontal |
| Component | The horizontal or vertical part of a vector, found by resolving with sin/cos |

---

## Practice Problems

1. A ball rolls off a table 1.2 m high with a horizontal speed of 2.5 m/s. How far from the table's base does it land?
2. A soccer ball is kicked at 18 m/s at 35° above the ground. Find its time of flight, max height, and range.
3. An arrow is shot horizontally from a height of 1.5 m at 45 m/s. How long is it in the air, and how far does it travel horizontally?

**Worked example (#1):** Vertical: y = ½gt² → 1.2 = ½(9.8)t² → t² = 0.245 → t = 0.495 s. Horizontal: x = v₀ₓt = 2.5(0.495) = 1.24 m.

---

## Real-World Applications

- Sports: optimal launch angle for a basketball free throw, long jump, or javelin throw
- Ballistics and forensics: trajectory reconstruction from impact points
- Water fountain and firefighting hose nozzle design
- Space: suborbital rocket trajectories (same physics, different scale)

---

## Learning Objectives

By the end of this unit, students will be able to:
- Decompose an initial velocity vector into horizontal and vertical components (**DOK 2**)
- Solve for time of flight, maximum height, and range for projectiles launched at an angle and horizontally (**DOK 3**)
- Explain why horizontal and vertical motions are independent (**DOK 2**)
- Correctly identify velocity and acceleration components at any point in a trajectory, including the peak (**DOK 3**)
- Apply projectile motion concepts to real-world scenarios and lab data (**DOK 4**)

## Assessment Criteria

| Level | Criteria |
|---|---|
| Exceeds | Solves projectile problems with launch/landing at different heights; derives range/height formulas; explains independence of motion with correct reasoning |
| Meets | Correctly decomposes vectors and solves standard time/height/range problems for equal launch-landing height |
| Approaching | Can solve horizontal-launch problems but struggles with angled launches or component decomposition |
| Beginning | Treats horizontal and vertical motion as connected; cannot decompose vectors |

Suggested evidence: projectile lab (launcher + measuring range vs. angle), problem set, exit-ticket quiz (see `quiz.html`).

## Learning Resources

- CA NGSS standards reference: https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp
- PhET simulation: *Projectile Motion*
- The Physics Classroom: Projectile Motion tutorial
- Lab: marble/ball launcher, measure range vs. launch angle, compare to R = v₀²sin(2θ)/g prediction

## Try the Interactive Quiz

Open [`quiz.html`](./quiz.html) — 10 of the most frequently missed projectile motion questions, with instant feedback.
