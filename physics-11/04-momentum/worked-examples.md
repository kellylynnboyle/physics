# Momentum — Worked Examples

Each example follows the 4-phase method from [How to Study Physics](../how-to-study-physics.md#5-solve-a-lot-of-problems--with-a-method): Understand → Plan → Execute → Check.

## Example 1: Impulse-Momentum Theorem (Bat Hits Ball)

**Problem:** A 0.15 kg baseball traveling at 40 m/s is hit back at 50 m/s in the opposite direction. If the bat is in contact with the ball for 0.7 ms, find the average force exerted by the bat.

- **Understand:** Taking the incoming direction as positive: $m = 0.15\ \text{kg}$, $v_i = +40\ \text{m/s}$, $v_f = -50\ \text{m/s}$ (reversed direction), $\Delta t = 0.0007\ \text{s}$. Find $F$.
- **Plan:** $J = \Delta p = m(v_f - v_i)$; then $F = J/\Delta t$.
- **Execute:**
  $\Delta p = 0.15(-50 - 40) = 0.15(-90) = -13.5\ \text{kg·m/s}$
  $F = -13.5 / 0.0007 \approx -19{,}286\ \text{N}$ (magnitude $\approx 1.93 \times 10^4\ \text{N}$)
- **Check:** A huge force (~2 tons-force) makes sense — the ball's velocity reversed entirely in under a millisecond, which requires an enormous force even though the resulting impulse is modest.

## Example 2: Perfectly Inelastic Collision

**Problem:** A 1200 kg car moving at 20 m/s rear-ends a stationary 1000 kg car, and they lock together. Find their common velocity immediately after, and check whether kinetic energy is conserved.

- **Understand:** $m_1 = 1200\ \text{kg}$, $v_1 = 20\ \text{m/s}$, $m_2 = 1000\ \text{kg}$, $v_2 = 0$. Find $v_f$ (shared), then compare $KE_i$ and $KE_f$.
- **Plan:** Momentum conservation: $m_1v_1 + m_2v_2 = (m_1+m_2)v_f$. Then compute $KE_i = \tfrac12m_1v_1^2$ and $KE_f = \tfrac12(m_1+m_2)v_f^2$ separately.
- **Execute:**
  $v_f = \dfrac{(1200)(20) + 0}{1200+1000} = \dfrac{24000}{2200} \approx 10.9\ \text{m/s}$
  $KE_i = \tfrac12(1200)(20)^2 = 240{,}000\ \text{J}$
  $KE_f = \tfrac12(2200)(10.9)^2 \approx 130{,}691\ \text{J}$
- **Check:** $KE_f < KE_i$ — about 109,000 J was lost to heat/sound/deformation, confirming this is inelastic. Momentum was conserved (that's how we solved it), but kinetic energy clearly wasn't — exactly the distinction to watch for.

## Example 3: Explosion From Rest

**Problem:** Two ice skaters, 50 kg and 70 kg, push off from rest against each other. If the 50 kg skater moves away at 3 m/s, find the 70 kg skater's velocity.

- **Understand:** Total initial momentum = 0 (both at rest). $m_1 = 50\ \text{kg}$, $v_1 = +3\ \text{m/s}$, $m_2 = 70\ \text{kg}$. Find $v_2$.
- **Plan:** $m_1v_1 + m_2v_2 = 0 \Rightarrow v_2 = -\dfrac{m_1v_1}{m_2}$.
- **Execute:**
  $v_2 = -\dfrac{(50)(3)}{70} \approx -2.14\ \text{m/s}$ (opposite direction to the 50 kg skater)
- **Check:** The heavier skater moves off more slowly than the lighter one — matches everyday intuition (harder to push a heavier person away quickly) and the signs are opposite as required by zero total momentum.
