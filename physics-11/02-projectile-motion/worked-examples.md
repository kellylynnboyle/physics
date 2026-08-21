# Projectile Motion — Worked Examples

Each example follows the 4-phase method from [How to Study Physics](../how-to-study-physics.md#5-solve-a-lot-of-problems--with-a-method): Understand → Plan → Execute → Check.

## Example 1: Horizontal Launch Off a Cliff

**Problem:** A ball is kicked horizontally off a 20 m cliff at 15 m/s. Find the time to land and the horizontal distance traveled.

- **Understand:** $v_{y0} = 0$ (horizontal launch), $a_y = -9.8\ \text{m/s}^2$, $\Delta y = -20\ \text{m}$, $v_x = 15\ \text{m/s}$ (constant). Find $t$, then $x$.
- **Plan:** Vertical motion alone determines time: $\Delta y = v_{y0}t + \tfrac12a_yt^2$. Then $x = v_x t$.
- **Execute:**
  $-20 = 0 - \tfrac12(9.8)t^2 \Rightarrow t = \sqrt{20/4.9} \approx 2.02\ \text{s}$
  $x = (15)(2.02) \approx 30.3\ \text{m}$
- **Check:** ~2 seconds to fall 20 m matches free-fall intuition ($\sqrt{2h/g}$), and 30 m of horizontal travel at a brisk kick speed is reasonable.

## Example 2: Angled Launch on Level Ground

**Problem:** A projectile is launched at 30 m/s at 40° above horizontal from level ground. Find the time of flight, maximum height, and range.

- **Understand:** $v_0 = 30\ \text{m/s}$, $\theta = 40°$, launch height = landing height. Find $t_{flight}$, $h_{max}$, range.
- **Plan:** Decompose: $v_x = v_0\cos\theta$, $v_{y0} = v_0\sin\theta$. Use symmetric shortcuts since launch/landing heights match: $t_{flight} = \dfrac{2v_{y0}}{g}$, $h_{max} = \dfrac{v_{y0}^2}{2g}$, range $= v_x \cdot t_{flight}$.
- **Execute:**
  $v_x = 30\cos(40°) \approx 22.98\ \text{m/s}$, $v_{y0} = 30\sin(40°) \approx 19.28\ \text{m/s}$
  $t_{flight} = \dfrac{2(19.28)}{9.8} \approx 3.93\ \text{s}$
  $h_{max} = \dfrac{(19.28)^2}{2(9.8)} \approx 19.0\ \text{m}$
  Range $= (22.98)(3.93) \approx 90.3\ \text{m}$
- **Check:** These numbers are in the right ballpark for a fairly powerful launch (comparable to a thrown javelin or a strong kick) — nothing looks off by an order of magnitude.

## Example 3: Independence of Horizontal and Vertical Motion

**Problem:** From a height of 5 m, one ball is dropped and, at the same instant, an identical ball is launched horizontally at 10 m/s. Compare their fall times and landing points.

- **Understand:** Both balls share $v_{y0} = 0$ and $a_y = -9.8\ \text{m/s}^2$; only the launched ball has $v_x = 10\ \text{m/s}$.
- **Plan:** Fall time depends only on vertical motion — it should be identical for both. Horizontal distance depends only on $v_x$ and $t$.
- **Execute:**
  $t = \sqrt{2h/g} = \sqrt{2(5)/9.8} \approx 1.01\ \text{s}$ for **both** balls.
  Dropped ball's horizontal distance: 0 m. Launched ball's: $(10)(1.01) \approx 10.1\ \text{m}$.
- **Check:** This confirms the core principle directly — same fall time despite very different horizontal outcomes, because horizontal and vertical motion never affect each other.
