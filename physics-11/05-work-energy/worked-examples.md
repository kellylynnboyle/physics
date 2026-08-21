# Work & Energy — Worked Examples

Each example follows the 4-phase method from [How to Study Physics](../how-to-study-physics.md#5-solve-a-lot-of-problems--with-a-method): Understand → Plan → Execute → Check.

## Example 1: Conservation of Energy on a Frictionless Hill

**Problem:** A 60 kg skier starts from rest at the top of a frictionless 40 m tall hill. Find her speed at the bottom.

- **Understand:** $m = 60\ \text{kg}$, $h = 40\ \text{m}$, frictionless, starts from rest. Find $v$ at the bottom.
- **Plan:** Conservation of mechanical energy: $mgh = \tfrac12mv^2$ (mass cancels), so $v = \sqrt{2gh}$.
- **Execute:**
  $v = \sqrt{2(9.8)(40)} = \sqrt{784} = 28\ \text{m/s}$
- **Check:** 28 m/s (~63 mph) for a 40 m frictionless drop is a large but believable number — this is in the range of speeds reported for extreme downhill skiing, which fits a 40 m elevation loss.

## Example 2: Spring Launch

**Problem:** A spring with $k = 200\ \text{N/m}$ is compressed 0.3 m and used to launch a 0.5 kg block. Find the block's launch speed (assume the spring's PE fully converts to KE).

- **Understand:** $k = 200\ \text{N/m}$, $x = 0.3\ \text{m}$, $m = 0.5\ \text{kg}$. Find $v$.
- **Plan:** $\tfrac12kx^2 = \tfrac12mv^2 \Rightarrow v = x\sqrt{k/m}$.
- **Execute:**
  $v = 0.3\sqrt{200/0.5} = 0.3\sqrt{400} = (0.3)(20) = 6\ \text{m/s}$
- **Check:** 6 m/s for a moderately stiff spring launching a half-kilogram block is a reasonable, human-scale result — not implausibly fast or slow.

## Example 3: Work-Energy Theorem With Friction

**Problem:** A 1500 kg car traveling at 25 m/s brakes to a stop over 60 m. Find the average friction force using the work-energy theorem.

- **Understand:** $m = 1500\ \text{kg}$, $v_i = 25\ \text{m/s}$, $v_f = 0$, $d = 60\ \text{m}$. Find the friction force $F$.
- **Plan:** Work-Energy Theorem: $W_{net} = \Delta KE$. Friction is the only horizontal force doing work here, and it acts opposite to motion: $-Fd = 0 - \tfrac12mv_i^2 \Rightarrow F = \dfrac{\tfrac12mv_i^2}{d}$.
- **Execute:**
  $KE_i = \tfrac12(1500)(25)^2 = 468{,}750\ \text{J}$
  $F = \dfrac{468{,}750}{60} = 7{,}812.5\ \text{N}$
- **Check:** ~7,800 N (roughly 1,760 lbf) of braking force for a car this size stopping from highway speed is in a physically reasonable range — not off by orders of magnitude in either direction.
