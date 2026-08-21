# Newton's Laws — Worked Examples

Each example follows the 4-phase method from [How to Study Physics](../how-to-study-physics.md#5-solve-a-lot-of-problems--with-a-method): Understand → Plan → Execute → Check.

## Example 1: Pulling a Sled at an Angle, With Friction

**Problem:** A 10 kg sled is pulled with 40 N at 30° above horizontal on a surface with $\mu_k = 0.2$. Find its acceleration.

- **Understand:** $m = 10\ \text{kg}$, $F = 40\ \text{N}$ at 30°, $\mu_k = 0.2$, $g = 9.8\ \text{m/s}^2$. Find $a$.
- **Plan:** Decompose the applied force: $F_x = F\cos\theta$, $F_y = F\sin\theta$. Since $F_y$ pulls partly upward, it *reduces* the normal force: $N = mg - F_y$. Friction opposes motion: $f = \mu_k N$. Net horizontal force: $F_x - f$. Then $a = F_{net}/m$.
- **Execute:**
  $F_x = 40\cos(30°) \approx 34.64\ \text{N}$, $F_y = 40\sin(30°) = 20\ \text{N}$
  $N = (10)(9.8) - 20 = 78\ \text{N}$
  $f = (0.2)(78) = 15.6\ \text{N}$
  $F_{net} = 34.64 - 15.6 = 19.04\ \text{N}$
  $a = 19.04 / 10 \approx 1.9\ \text{m/s}^2$
- **Check:** A modest acceleration for a moderate pull against friction — nothing extreme, as expected.

## Example 2: Block on a Frictionless Incline

**Problem:** A 2 kg block sits on a 25° frictionless incline. Find its acceleration down the ramp.

- **Understand:** $m = 2\ \text{kg}$, $\theta = 25°$, frictionless. Find $a$.
- **Plan:** Only the component of gravity parallel to the incline causes acceleration: $a = g\sin\theta$ (mass cancels out — same result for any frictionless incline regardless of mass).
- **Execute:**
  $a = (9.8)\sin(25°) \approx 4.14\ \text{m/s}^2$
- **Check:** Less than $g$, as it must be (a vertical drop would give exactly $g$) — and roughly proportional to how steep 25° is relative to 90°, which fits.

## Example 3: Atwood Machine (Connected Objects)

**Problem:** Two blocks (3 kg and 5 kg) are connected by a string over a frictionless, massless pulley. Find the acceleration of the system and the tension in the string.

- **Understand:** $m_1 = 3\ \text{kg}$, $m_2 = 5\ \text{kg}$, connected, frictionless pulley. Find $a$ and $T$.
- **Plan:** For an Atwood machine, $a = \dfrac{(m_2 - m_1)g}{m_1 + m_2}$. Then find $T$ from either block's equation of motion — and check both give the same answer.
- **Execute:**
  $a = \dfrac{(5-3)(9.8)}{3+5} = \dfrac{19.6}{8} = 2.45\ \text{m/s}^2$
  From $m_1$ (accelerating upward): $T - m_1g = m_1a \Rightarrow T = 3(9.8 + 2.45) = 36.75\ \text{N}$
  From $m_2$ (accelerating downward): $m_2g - T = m_2a \Rightarrow T = 5(9.8 - 2.45) = 36.75\ \text{N}$
- **Check:** Both blocks' equations give the identical tension (36.75 N) — this cross-check is a built-in way to verify an Atwood machine solution, not just a nice coincidence.
