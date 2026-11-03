// Question bank: each answer index is 0-based. "why" explains the misconception.
window.QUIZ_BANK = [
{ id:"kin", title:"Kinematics", questions:[
 {q:"A car starts from rest and accelerates at 3 m/s² for 4 s. How far does it travel?",o:["12 m","24 m","48 m","6 m"],a:1,why:"Δx = ½at² = ½(3)(16) = 24 m. 48 m comes from multiplying the FINAL speed (12 m/s) by time, but the speed was not constant."},
 {q:"An object moves at constant velocity. What is its acceleration?",o:["Equal to its velocity","Zero","9.8 m/s²","Depends on its mass"],a:1,why:"Acceleration is the rate of change of velocity. Constant velocity → no change → a = 0."},
 {q:"A ball thrown straight up is at the very top of its flight. Which is true?",o:["v = 0 and a = 0","v = 0 and a = 9.8 m/s² down","v = 9.8 m/s and a = 0","v = 0 and a = 9.8 m/s² up"],a:1,why:"Gravity never turns off. The velocity is momentarily zero, but it is still changing at 9.8 m/s² downward."},
 {q:"A runner completes one 400 m lap in 80 s and ends where she started. Her average velocity is…",o:["5 m/s","0 m/s","400 m/s","80 m/s"],a:1,why:"Displacement is zero (back at start), so average velocity is 0. Her average SPEED is 400/80 = 5 m/s."},
 {q:"On a velocity–time graph, the area between the line and the time axis represents…",o:["acceleration","displacement","force","speed"],a:1,why:"Slope of v–t = acceleration; area = displacement. Slope of x–t = velocity."},
 {q:"A stone is dropped from rest (g = 9.8 m/s², no air). Its speed after 3 s is…",o:["9.8 m/s","19.6 m/s","29.4 m/s","44.1 m/s"],a:2,why:"v = gt = 9.8 × 3 = 29.4 m/s. (44.1 is the DISTANCE fallen, in metres.)"},
 {q:"A car moving at 20 m/s brakes with a = −4 m/s². How far does it travel before stopping?",o:["5 m","20 m","50 m","100 m"],a:2,why:"v² = v₀² + 2aΔx → 0 = 400 − 8Δx → Δx = 50 m. (5 s is the time.)"},
 {q:"An object has negative velocity and negative acceleration. It is…",o:["slowing down","speeding up (in the negative direction)","at rest","moving in the positive direction"],a:1,why:"Same signs → speeding up. Opposite signs → slowing down. Negative doesn't automatically mean 'slowing'."}
]},
{ id:"proj", title:"Projectile Motion", questions:[
 {q:"One ball rolls off a table horizontally at 3 m/s; an identical ball is dropped at the same moment. Which hits the floor first?",o:["The dropped ball","The rolling ball","They land together","Depends on the mass"],a:2,why:"Vertical motion is independent of horizontal motion. Both start with zero vertical velocity and fall the same height."},
 {q:"Ignoring air resistance, the horizontal velocity of a projectile during flight…",o:["steadily decreases","steadily increases","stays constant","is zero at the top"],a:2,why:"No horizontal force → a_x = 0 → vₓ is constant. Only v_y changes."},
 {q:"A ball is kicked at 20 m/s at 30° above horizontal. Its initial vertical velocity is…",o:["10 m/s","17.3 m/s","20 m/s","34.6 m/s"],a:0,why:"v_y = v sin30° = 10 m/s. (17.3 m/s is vₓ = v cos30°.)"},
 {q:"For a given speed on level ground (no air resistance), which launch angle gives the longest range?",o:["30°","45°","60°","90°"],a:1,why:"R = v² sin2θ / g is maximum when 2θ = 90°. At 90° the ball goes straight up with zero range."},
 {q:"A ball is launched horizontally at 10 m/s from a 19.6 m cliff (g = 9.8 m/s²). How far from the base does it land?",o:["10 m","19.6 m","20 m","40 m"],a:2,why:"t = √(2h/g) = √4 = 2.0 s, then x = vₓt = 10 × 2 = 20 m. Always find the time from the vertical motion first."},
 {q:"At the highest point of a projectile's path, its acceleration is…",o:["zero","9.8 m/s² downward","9.8 m/s² upward","equal to the horizontal velocity"],a:1,why:"Gravity acts the whole flight. Only v_y is zero at the top."},
 {q:"Two balls are launched at the same speed, one at 30° and one at 60°. Which statement is correct?",o:["The 60° ball goes farther","The 30° ball goes farther","They have the same range","The 30° ball goes higher"],a:2,why:"Complementary angles give equal range (sin 60° = sin 120°). The 60° ball goes higher and stays up longer."},
 {q:"A ball is launched at 20 m/s at 45°. At the top of its path its speed is about…",o:["0 m/s","10 m/s","14.1 m/s","20 m/s"],a:2,why:"At the top v_y = 0 but vₓ = 20 cos45° = 14.1 m/s remains. Speed at the top is NOT zero."}
]},
{ id:"newton", title:"Newton's Laws", questions:[
 {q:"A book rests on a table. Which force is the Newton's-third-law partner of the book's weight (Earth pulling down on the book)?",o:["The normal force of the table on the book","The book pulling up on the Earth","The table pulling down on the floor","Friction"],a:1,why:"Third-law pairs act on DIFFERENT objects and are the same type of force. Weight and the normal force act on the same object, so they are not a pair."},
 {q:"A large truck hits a fly. During the impact, the force on the fly is…",o:["smaller than the force on the truck","equal to the force on the truck","larger than the force on the truck","zero"],a:1,why:"Third law: equal in size, opposite in direction. The fly's acceleration is much larger because its mass is tiny."},
 {q:"A 5 kg object has a net force of 20 N. Its acceleration is…",o:["0.25 m/s²","4 m/s²","15 m/s²","100 m/s²"],a:1,why:"a = F/m = 20/5 = 4 m/s²."},
 {q:"A 10 kg mass is moved to the Moon (g ≈ 1.6 N/kg). Compared with Earth, its…",o:["mass and weight both decrease","mass stays 10 kg; weight decreases","mass increases; weight decreases","mass and weight stay the same"],a:1,why:"Mass is the amount of matter and doesn't change. Weight = mg depends on local gravity (98 N on Earth, 16 N on the Moon)."},
 {q:"A hockey puck slides at constant velocity on frictionless ice. The net force on it is…",o:["in the direction of motion","opposite to the motion","zero","equal to its weight"],a:2,why:"No force is needed to maintain constant velocity (first law). Force changes velocity."},
 {q:"An elevator accelerates upward. The normal force on a passenger is…",o:["less than her weight","equal to her weight","greater than her weight","zero"],a:2,why:"N − mg = ma with a upward → N = m(g + a) > mg. She 'feels heavier'."},
 {q:"Forces of 6 N east and 8 N north act on an object. The magnitude of the net force is…",o:["2 N","10 N","14 N","48 N"],a:1,why:"Perpendicular vectors add by Pythagoras: √(6² + 8²) = 10 N. Adding magnitudes (14 N) only works for forces in the same direction."},
 {q:"A 20 kg box is pushed with 50 N while kinetic friction is 30 N. Its acceleration is…",o:["1 m/s²","2.5 m/s²","4 m/s²","1.5 m/s²"],a:0,why:"ΣF = 50 − 30 = 20 N, a = 20/20 = 1 m/s². Use NET force, not the push alone."}
]},
{ id:"mom", title:"Momentum", questions:[
 {q:"What is the momentum of a 1000 kg car moving at 20 m/s?",o:["50 kg·m/s","20,000 kg·m/s","200,000 kg·m/s","10,000 kg·m/s"],a:1,why:"p = mv = 1000 × 20 = 20,000 kg·m/s."},
 {q:"A constant 50 N force acts on a cart for 0.2 s. The impulse is…",o:["10 N·s","250 N·s","0.004 N·s","50 N·s"],a:0,why:"J = FΔt = 50 × 0.2 = 10 N·s, which equals the change in momentum."},
 {q:"A 2 kg cart at 6 m/s hits a 4 kg cart at rest and they stick together. Their speed afterwards is…",o:["1 m/s","2 m/s","3 m/s","6 m/s"],a:1,why:"m₁v₁ = (m₁ + m₂)v → 12 = 6v → v = 2 m/s."},
 {q:"Airbags reduce injury mainly because they…",o:["reduce the change in momentum","increase the stopping time, reducing the force","make the car heavier","convert kinetic energy to potential energy"],a:1,why:"Δp is fixed by the crash. FΔt = Δp, so a longer Δt means a smaller average force."},
 {q:"In an inelastic collision between two carts on a frictionless track…",o:["momentum is lost","kinetic energy is conserved but momentum is not","momentum is conserved but kinetic energy is not","neither is conserved"],a:2,why:"Momentum is conserved in every collision in an isolated system. Kinetic energy is conserved only in elastic collisions."},
 {q:"A 0.5 kg ball hits a wall at 10 m/s and bounces straight back at 10 m/s. Its change in momentum has magnitude…",o:["0","5 kg·m/s","10 kg·m/s","20 kg·m/s"],a:2,why:"Δp = m(v_f − v_i) = 0.5(−10 − 10) = −10 kg·m/s (magnitude 10). A bounce reverses direction, so Δp is NOT zero."},
 {q:"A 50 kg skater at rest throws a 5 kg ball forward at 4 m/s. The skater moves…",o:["0.4 m/s backward","0.4 m/s forward","4 m/s backward","0 m/s"],a:0,why:"Total p stays 0: 5(4) + 50v = 0 → v = −0.4 m/s."},
 {q:"A 3 kg cart at rest is pushed by a constant 12 N force for 2 s. Its final speed is…",o:["4 m/s","8 m/s","24 m/s","72 m/s"],a:1,why:"J = 12 × 2 = 24 N·s = Δp → v = 24/3 = 8 m/s."}
]},
{ id:"energy", title:"Work & Energy", questions:[
 {q:"You carry a heavy box horizontally at constant velocity. The work you do on the box is…",o:["positive","negative","zero","equal to mgh"],a:2,why:"Your force is upward, the displacement is horizontal: cos90° = 0, so W = 0. Work needs a force component along the motion."},
 {q:"You pull a wagon with a 20 N rope at 60° above horizontal for 10 m. How much work do you do?",o:["200 J","173 J","100 J","20 J"],a:2,why:"W = Fd cosθ = 20 × 10 × 0.5 = 100 J. (200 J forgets the angle.)"},
 {q:"If a car's speed doubles, its kinetic energy…",o:["doubles","triples","quadruples","stays the same"],a:2,why:"KE = ½mv², so KE ∝ v². Doubling v → 4×. This is why high-speed crashes are far worse."},
 {q:"What is the gravitational potential energy of a 2 kg object 5 m above the floor (g = 9.8)?",o:["10 J","49 J","98 J","196 J"],a:2,why:"PE = mgh = 2 × 9.8 × 5 = 98 J."},
 {q:"A frictionless roller coaster car starts from rest at a height of 20 m. Its speed at ground level is about…",o:["14 m/s","19.8 m/s","196 m/s","392 m/s"],a:1,why:"mgh = ½mv² → v = √(2gh) = √(392) ≈ 19.8 m/s. Mass cancels."},
 {q:"A machine does 600 J of work in 3 s. Its power is…",o:["200 W","1800 W","600 W","3 W"],a:0,why:"P = W/t = 600/3 = 200 W."},
 {q:"A heavy and a light ball are dropped from the same height (no air). Just before landing, which is moving faster?",o:["The heavy ball","The light ball","Same speed","Cannot tell"],a:2,why:"v = √(2gh) — mass cancels. The heavy ball has more KE, but not more speed."},
 {q:"A 1000 kg car speeds up from 10 m/s to 20 m/s. How much net work was done on it?",o:["50,000 J","100,000 J","150,000 J","200,000 J"],a:2,why:"W = ΔKE = ½(1000)(20² − 10²) = 150,000 J. (Don't use ½m(Δv)² = 50,000 J — KE depends on v², not on Δv squared.)"}
]}
];
