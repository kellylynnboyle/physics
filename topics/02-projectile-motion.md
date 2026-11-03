# Unit 2 — Projectile Motion (2-D)
**NGSS:** HS-PS2-1 · **Pacing:** ~3 weeks · **Prereq:** Unit 1, vectors/trig

## Learning objectives — "I can…"
- [ ] Resolve a velocity into x and y components
- [ ] Explain why horizontal and vertical motion are independent
- [ ] Solve horizontal-launch and angled-launch problems (flat ground)
- [ ] Predict how launch angle and speed affect range, time, and height
- [ ] State what stays constant (vₓ) and what changes (v_y) during flight

## Key concepts & equations
| Concept | Rule |
|---|---|
| Components | vₓ = v cosθ ; v_y = v sinθ |
| Horizontal | a = 0 → x = vₓt |
| Vertical | a = −g → y = v_y t − ½gt², v_y = v_y0 − gt |
| Time of flight (same height) | t = 2v_y0 / g |
| Range (same height) | R = v² sin2θ / g |
| Max height | H = v_y0² / 2g |
| Horizontal launch | v_y0 = 0; fall time t = √(2h/g) |
| Symmetry | Complementary angles (30°/60°) give equal range; 45° is max |

## Cornell notes
| Cue | Notes |
|---|---|
| Why are x and y motions independent? | Gravity acts only vertically, so it changes only v_y. Horizontal velocity doesn't affect fall time. |
| A ball rolls off a table while another is dropped — which lands first? | Same time. Both have v_y0 = 0 and fall the same height. |
| What is the horizontal velocity during flight? | Constant (no air resistance, a_x = 0). |
| What is the acceleration at the peak? | 9.8 m/s² down. Only v_y = 0 there; vₓ is unchanged, so the speed at the top is vₓ, not zero. |
| How do I split a launch velocity? | 20 m/s at 30°: vₓ = 20cos30° = 17.3 m/s, v_y = 20sin30° = 10 m/s. |
| Which angle gives max range? | 45° (flat ground, no air). Complementary angles tie. |
| How do I solve any projectile problem? | (1) Components. (2) Vertical → find time. (3) Use time in horizontal x = vₓt. Time links the two directions. |
| What changes with air resistance? | Shorter range, steeper fall, best angle < 45°. Our problems ignore it unless stated. |

**Summary:** A projectile is two independent motions glued together by time: constant-velocity horizontally, free fall vertically. Solve vertical for t, then use t horizontally.

## Worked examples
1. **Horizontal launch, 10 m/s off a 19.6 m cliff.** t = √(2·19.6/9.8) = **2.0 s**; range = 10×2 = **20 m**; v_y at landing = 9.8×2 = 19.6 m/s down.
2. **Kick 20 m/s at 30°.** v_y0 = 10 m/s → t = 2(10)/9.8 = **2.04 s**; R = 17.3×2.04 ≈ **35.3 m**; H = 100/19.6 ≈ **5.1 m**.

## Practice problems
1. Ball rolls off 1.25 m table at 2 m/s. Time and landing distance? [0.50 s; 1.0 m]
2. A projectile has vₓ = 8 m/s, v_y0 = 12 m/s. Total time of flight? Range? [2.45 s; 19.6 m]
3. Find launch speed components for 50 m/s at 37° (use sin37° ≈ 0.60, cos37° ≈ 0.80). [40 m/s, 30 m/s]
4. Two balls leave the same point, one at 30° and one at 60°, same speed. Compare range and max height. [same range; 60° goes higher]
5. Draw velocity vectors at 5 points along a parabola. [vₓ same length, v_y shrinks, zero at top, grows downward]

## Resources
- PhET — *Projectile Motion* (phet.colorado.edu)
- The Physics Classroom — *Vectors and Projectiles* tutorial
- Khan Academy — Two-dimensional motion/projectiles
- Desmos — graph y(x) trajectories while changing θ
- Phone slow-motion video + Tracker for real trajectories

## Real-world applications
Sports (basketball arc, long jump, golf, soccer free kicks), water fountains, firefighting hoses, artillery & rocket staging, video-game physics engines, delivery drones dropping a package.

## Assessment criteria
| Level | Evidence |
|---|---|
| Mastery | Decomposes and recombines correctly; justifies independence; handles angled launches; interprets trajectory graphs |
| Proficient | Correct horizontal launches; small errors in angled launches |
| Developing | Mixes up components or uses vₓ in vertical equations |
| Beginning | Treats the path as one-dimensional |
Quiz target: ≥ 80% on the Projectile quiz twice.
