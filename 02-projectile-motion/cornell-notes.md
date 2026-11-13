# Cornell Notes: Projectile Motion

*Physics · Unit 2 · Vector components, horizontal launches, angled launches*

**Name:** ______________________  **Period:** ______  **Date:** ____________

**Learning targets:** P1–P5 (see the [unit outline](README.md))

**Essential question:** How can we predict where and when a launched object will land?

**How to use these notes:** cover the Notes column, answer each cue aloud, then check. Mark the ones you miss and come back to them tomorrow.

---

## 1. Vector components

| Cues / Questions | Notes |
|---|---|
| **What is a component of a vector?** | The part of a vector that points along one axis. Any velocity can be split into a horizontal part (v_x) and a vertical part (v_y) that together do the same job as the original. |
| **How do I find the components of a launch velocity?** | With θ measured from the horizontal: **v_x = v cos θ** (adjacent side), **v_y = v sin θ** (opposite side).<br>Worked: 20 m/s at 30° → v_x = 20 cos 30° = **17.3 m/s**, v_y = 20 sin 30° = **10 m/s**.<br>Check: √(17.3² + 10²) = 20 ✓. Calculator in degree mode. |
| **How do I put two components back together?** | Size: v = √(v_x² + v_y²) (Pythagorean theorem). Direction: θ = tan⁻¹(v_y / v_x).<br>Worked: v_x = 15 m/s, v_y = 29.4 m/s → v = √(225 + 864) = **33 m/s**. |

> **IXL practice (goal: SmartScore 80+):** Physics **C.2** Decompose and compose two-dimensional vectors · **C.3** Add and subtract two-dimensional vectors: component form

## 2. The two independent motions

| Cues / Questions | Notes |
|---|---|
| **What is a projectile?** | An object moving through the air with gravity as the only force on it (air resistance ignored). Its path is a curve called a **parabola**. |
| **What happens to the horizontal velocity during the flight?** | Nothing. No horizontal force means a_x = 0, so **v_x stays constant** from launch to landing. |
| **What happens to the vertical velocity during the flight?** | It changes by 9.8 m/s every second, exactly as in free fall: **a_y = 9.8 m/s² downward** at every point, including the top. |
| **What is the one quantity the horizontal and vertical motions share?** | **Time.** Solve for t in one direction, then use it in the other. Nothing else crosses over: never put a horizontal velocity into a vertical equation. |
| **A ball is dropped and another is launched horizontally from the same height. Which lands first?** | **Same time.** Both start with v_y = 0 and fall with the same acceleration. Horizontal speed changes where the ball lands, not when. |
| **What are the velocity and acceleration at the top of an angled launch?** | Velocity is **horizontal and equal to v_x** (only v_y is zero). Acceleration is still **9.8 m/s² downward**. The ball does not stop at the top. |

> **IXL practice:** no IXL skill covers these ideas alone. Use The Physics Classroom Concept Builders on projectile motion and the PhET *Projectile Motion* simulation.

## 3. Horizontally launched projectiles

| Cues / Questions | Notes |
|---|---|
| **What do I know at the start of a horizontal launch?** | v₀y = 0 (all of the launch velocity is horizontal) and v_x = launch speed. |
| **What decides how long a horizontally launched object is in the air?** | Only the **height**: h = ½gt², so t = √(2h / g). Launch speed does not change the time. |
| **A ball rolls off a 1.25 m table at 3.0 m/s. Where does it land?** | Vertical list: v₀y = 0, h = 1.25 m, g = 9.8 m/s². Horizontal list: v_x = 3.0 m/s.<br>Time: t = √(2 × 1.25 ÷ 9.8) = **0.505 s**.<br>Range: x = v_x t = 3.0 × 0.505 = **1.5 m** from the table.<br>Sense check: about half a second to fall from table height is reasonable. |
| **How fast is a stone going when it lands, if thrown horizontally at 15 m/s from a 44.1 m cliff?** | t = √(2 × 44.1 ÷ 9.8) = 3.0 s. v_y = gt = 29.4 m/s; v_x is still 15 m/s.<br>Speed = √(15² + 29.4²) = **33 m/s**. |
| **What happens to time and range if the launch speed doubles (same height)?** | Time stays the same; range doubles (x = v_x t). |

> **IXL practice:** Physics **E.1** Solve projectile motion problems given components of velocity

## 4. Projectiles launched at an angle

| Cues / Questions | Notes |
|---|---|
| **What is the first step in every angled-launch problem?** | Split the launch velocity into v_x = v cos θ and v₀y = v sin θ, then make separate horizontal and vertical lists. |
| **How do I find the time of flight on level ground?** | Time to the top: t_up = v₀y / g (when v_y reaches zero). The trip down takes the same time, so **t_total = 2 v₀y / g**. |
| **How do I find the maximum height?** | At the top v_y = 0, so h = v₀y² / (2g). |
| **A ball is kicked at 20 m/s at 30°. Find time of flight, maximum height, and range.** | Components: v_x = 17.3 m/s, v₀y = 10 m/s.<br>Time: t_up = 10 ÷ 9.8 = 1.02 s → t_total = **2.04 s**.<br>Height: h = 10² ÷ (2 × 9.8) = **5.1 m**.<br>Range: x = v_x t = 17.3 × 2.04 = **35 m**. |
| **Which launch angle gives the greatest range on level ground?** | **45°.** It is the best balance of time in the air and horizontal speed. |
| **Which pairs of angles give the same range?** | **Complementary angles** (they add to 90°): 30° and 60°, 20° and 70°. The higher angle stays in the air longer and goes higher, but lands at the same spot. |

> **IXL practice:** Physics **E.2** Solve projectile motion problems given magnitude and direction of velocity

## 5. Labs and measurement

| Cues / Questions | Notes |
|---|---|
| **How can I predict where a marble rolling off a table will land?** | Measure the table height h and the marble's speed v_x on the table (distance ÷ time over a marked stretch). Then t = √(2h / g) and x = v_x t. Place a target at x before releasing the marble. |
| **What are the variables in a launch-angle investigation?** | Independent: launch angle. Dependent: range. Held constant: launch speed and launch height. |

> **IXL practice:** Physics **A.2** Identify independent and dependent variables

---

## Memory tricks

- **SOH CAH TOA:** sine = opposite/hypotenuse, cosine = adjacent/hypotenuse, tangent = opposite/adjacent. Use it to decide which component gets sin and which gets cos.
- **Two lists, one clock:** write a horizontal list and a vertical list; time is the only value they share.
- **"Horizontal is constant, vertical is free fall."**
- **45° for maximum range; angles that add to 90° land together.**

## Summary

A projectile's motion is two simple motions happening at once. Horizontally it moves at constant velocity because no horizontal force acts. Vertically it is in free fall with an acceleration of 9.8 m/s² downward. The two motions are independent and share only the time, so each problem is solved by splitting the launch velocity into components, finding the time from one direction, and using it in the other.

## Self-test tip

*Cover the Notes column and answer every cue aloud. Redo each worked example on blank paper. Repeat tomorrow and again in a few days: recall spread over several days builds memory that rereading does not. Then take the [most-missed quiz](../quizzes/index.html).*
