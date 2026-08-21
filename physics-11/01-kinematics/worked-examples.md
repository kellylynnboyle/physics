# Kinematics — Worked Examples

Each example follows the 4-phase method from [How to Study Physics](../how-to-study-physics.md#5-solve-a-lot-of-problems--with-a-method): Understand → Plan → Execute → Check.

## Example 1: Basic Acceleration

**Problem:** A car accelerates from rest at $3\ \text{m/s}^2$ for 5 seconds. Find its final velocity and the distance traveled.

- **Understand:** $v_i = 0$, $a = 3\ \text{m/s}^2$, $t = 5\ \text{s}$. Find $v_f$ and $d$.
- **Plan:** $v_f = v_i + at$ for velocity; $d = v_it + \tfrac12at^2$ for distance.
- **Execute:**
  $v_f = 0 + (3)(5) = 15\ \text{m/s}$
  $d = 0 + \tfrac12(3)(5)^2 = 37.5\ \text{m}$
- **Check:** Reaching 15 m/s (~34 mph) after 5 seconds of moderate acceleration is physically reasonable, as is covering ~37.5 m in that time.

## Example 2: Thrown Upward (Free Fall)

**Problem:** A ball is thrown straight up at 20 m/s. Find the time to reach maximum height, the maximum height, and the total time until it returns to the throwing point.

- **Understand:** $v_i = 20\ \text{m/s}$, $a = -9.8\ \text{m/s}^2$, $v_f = 0$ at the top. Find $t_{up}$, $h_{max}$, and total time.
- **Plan:** Use $v_f = v_i + at$ to find $t_{up}$. Use $d = v_it + \tfrac12at^2$ (with $t_{up}$) for $h_{max}$. By trajectory symmetry, total time $= 2t_{up}$.
- **Execute:**
  $0 = 20 + (-9.8)t_{up} \Rightarrow t_{up} \approx 2.04\ \text{s}$
  $h_{max} = 20(2.04) - \tfrac12(9.8)(2.04)^2 \approx 20.4\ \text{m}$
  Total time $\approx 4.08\ \text{s}$
- **Check:** A ball thrown at 20 m/s reaching ~20 m high and returning in ~4 seconds matches everyday intuition (a strong throw, comparable to a high pop fly).

## Example 3: Reading a Velocity-Time Graph

**Problem:** A car speeds up from rest to 20 m/s in 4 s, cruises at 20 m/s for 3 s, then brakes to a stop in 2 s. Find the total distance traveled.

- **Understand:** Three motion phases with known velocities and times. Distance = area under a velocity-time graph.
- **Plan:** Phase 1 (speeding up) and Phase 3 (braking) are triangular regions: area $= \tfrac12 \times \text{base} \times \text{height}$. Phase 2 (cruising) is a rectangular region: area $= \text{base} \times \text{height}$.
- **Execute:**
  Phase 1: $\tfrac12(4)(20) = 40\ \text{m}$
  Phase 2: $(3)(20) = 60\ \text{m}$
  Phase 3: $\tfrac12(2)(20) = 20\ \text{m}$
  Total: $40 + 60 + 20 = 120\ \text{m}$
- **Check:** ~120 m (about the length of a football field plus some) for a short stop-and-go trip at moderate speeds is reasonable.
