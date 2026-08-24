# Cornell Notes — Projectile Motion

> **How to use:** Cover the "Notes" column and try to answer each cue from memory first.

| Cue / Question | Notes |
|---|---|
| What is the core assumption of projectile motion? | Horizontal and vertical motion are independent — each obeys its own kinematic equations, sharing only the variable *time*. Ignoring air resistance, nothing horizontal affects anything vertical and vice versa. |
| How do you break the initial velocity into components? | $v_{x0} = v_0\cos\theta$, $v_{y0} = v_0\sin\theta$, where $\theta$ is measured from the horizontal. |
| What is $a_x$ (horizontal acceleration) during flight? | Zero (ignoring air resistance) — so $v_x$ stays constant the entire flight. |
| What is $a_y$ (vertical acceleration) during flight? | Constant $-g$ (9.8 m/s² downward) — identical to 1D free fall. |
| What determines time of flight? | Vertical motion ONLY. Time of flight has nothing to do with $v_x$ or how far the projectile travels horizontally — it's purely "how long until it returns to the ground/target height," solved with the same equations as Section 01's free fall. |
| At the top of the trajectory, what are $v_x$ and $v_y$? | $v_y = 0$ (momentarily), but $v_x$ is unchanged from launch — still nonzero (unless the launch was straight up). Acceleration is still $-g$ at the top, same misconception as free fall in Section 01. |
| For equal launch and landing height, what is true by symmetry? | Time up = time down; launch speed = landing speed (magnitude); launch angle = landing angle (magnitude, mirrored below horizontal). |
| What launch angle maximizes range (equal height)? | 45°. Complementary angles (30°/60°, 20°/70°, etc.) give equal ranges at the same launch speed — they just differ in time of flight and max height. |
| How do you handle a horizontally-launched projectile (off a cliff/table)? | $v_{y0} = 0$, so vertical motion is a straight free-fall calculation from that height; horizontal distance = $v_x \times$ (time found from the vertical calculation). |
| How do you find velocity at an arbitrary point in the flight? | Find $v_x$ (always the same, constant) and $v_y$ at that time using $v_y = v_{y0} - gt$, then combine with Pythagorean theorem for magnitude and $\tan^{-1}(v_y/v_x)$ for direction. |

## Summary (write this in your own words first)

Projectile motion is two 1D kinematics problems happening at once and linked only by time: horizontal motion has zero acceleration and constant velocity, while vertical motion is exactly free fall with acceleration $-g$. Solving any projectile problem means decomposing the initial velocity into $v_x$ and $v_y$ using trig, using the vertical component to find time of flight (and max height), and then using that same time with the constant horizontal velocity to find range. The trajectory is symmetric when launch and landing heights match, which is why 45° maximizes range and complementary angles produce identical ranges.
