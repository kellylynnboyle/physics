#!/usr/bin/env node
// Recomputes the numeric answers quoted in the notes, quizzes and practice problems.
// Usage: node tools/check.js   (exits non-zero if any value is off by more than 1.5%: stated values are rounded)
const g = 9.8, rad = d => d * Math.PI / 180;
let bad = 0;
function eq(label, got, want) {
  const ok = Math.abs(got - want) <= Math.abs(want) * 0.015 + 1e-9;
  if (!ok) { bad++; console.log("MISMATCH", label, "computed", got, "stated", want); }
}
// Kinematics
eq("lap speed", 400 / 80, 5); eq("accel", 20 / 5, 4); eq("vt area", 0.5 * 4 * 12, 24);
eq("brake dist", 30 ** 2 / (2 * 6), 75); eq("brake time", 30 / 6, 5);
eq("drop v", g * 3, 29.4); eq("drop d", 0.5 * g * 9, 44.1);
eq("throw height", 19.6 ** 2 / (2 * g), 19.6); eq("throw t", 19.6 / g, 2);
eq("quiz area", 0.5 * 5 * 10, 25); eq("quiz stop", 20 * 4, 80);
eq("p2 a", 15 / 6, 2.5); eq("p2 d", 0.5 * 35 * 6, 105); eq("p3 d", 400 / 10, 40);
eq("p4 h", 0.5 * g * 2.5 ** 2, 30.6); eq("p4 v", g * 2.5, 24.5);
eq("p5 h", 14.7 ** 2 / (2 * g), 11.0); eq("p5 t", 14.7 / g, 1.5);
eq("p6 total", 4 + (100 - 0.5 * 2 * 16) / 8, 14.5);
// Projectile motion
eq("vx", 20 * Math.cos(rad(30)), 17.3); eq("vy", 20 * Math.sin(rad(30)), 10);
const tt = Math.sqrt(2 * 1.25 / g); eq("table t", tt, 0.505); eq("table x", 3 * tt, 1.5);
eq("kick t", 2 * 10 / g, 2.04); eq("kick H", 100 / (2 * g), 5.1); eq("kick R", 20 * Math.cos(rad(30)) * 20 / g, 35);
eq("cliff quiz", 15 * Math.sqrt(40 / g), 30);
eq("pp1 vx", 25 * Math.cos(rad(53)), 15); eq("pp1 vy", 25 * Math.sin(rad(53)), 20);
eq("pp2 t", Math.sqrt(1.6 / g), 0.40); eq("pp2 x", 2 * Math.sqrt(1.6 / g), 0.81);
eq("pp3 t", Math.sqrt(90 / g), 3.03); eq("pp3 v", 60 / Math.sqrt(90 / g), 19.8);
const vx = 18 * Math.cos(rad(40)), vy = 18 * Math.sin(rad(40));
eq("pp4 vx", vx, 13.8); eq("pp4 vy", vy, 11.6); eq("pp4 t", 2 * vy / g, 2.36); eq("pp4 H", vy * vy / (2 * g), 6.8); eq("pp4 R", vx * 2 * vy / g, 32.6);
const vyb = Math.sqrt(2 * g * 30); eq("pp6 vy", vyb, 24.2); eq("pp6 v", Math.hypot(12, vyb), 27.1); eq("pp6 angle", Math.atan(vyb / 12) * 180 / Math.PI, 64);
// Newton's laws
eq("car a", 3600 / 1200, 3); eq("box a", (30 - 10) / 5, 4); eq("W earth", 70 * g, 686); eq("W moon", 70 * 1.6, 112);
eq("elevator up", 60 * (g + 2), 708); eq("friction", 0.3 * 10 * g, 29.4);
eq("np4 f", 0.25 * 20 * g, 49); eq("np4 a", (80 - 49) / 20, 1.55); eq("np5", 50 * (g - 1.5), 415); eq("np6", 5 * 16 / 8, 10);
// Momentum
eq("ball p", 0.15 * 40, 6); eq("F short", 1000 * 20 / 0.1, 200000); eq("F long", 1000 * 20 / 0.5, 40000);
eq("bounce dp", 0.5 * (4 + 6), 5); eq("stick v", 2 * 3 / 3, 2); eq("KE before", 0.5 * 2 * 9, 9); eq("KE after", 0.5 * 3 * 4, 6);
eq("skater", -40 * 3 / 60, -2); eq("quiz stick", 12 / 4, 3); eq("quiz dp", 0.2 * 20, 4);
eq("mp2", 50 * 0.3 / 0.5, 30); eq("mp3", 80 * 6 / 0.4, 1200); eq("mp4", 1500 * 20 / 2500, 12); eq("mp5", 0.01 * 400 / 4, 1);
eq("mp6 v", (0.5 * 2 - 0.3 * 1 - 0.5 * 0.2) / 0.3, 2); eq("mp6 KEb", 0.5 * 0.5 * 4 + 0.5 * 0.3 * 1, 1.15); eq("mp6 KEa", 0.5 * 0.5 * 0.04 + 0.5 * 0.3 * 4, 0.61);
// Work and energy
eq("sled W", 50 * 10 * Math.cos(rad(60)), 250); eq("car KE", 0.5 * 1000 * 400, 200000); eq("brake d", 200000 / 8000, 25);
eq("book PE", 2 * g * 1.5, 29.4); eq("coaster v", Math.sqrt(2 * g * 20), 19.8); eq("thermal", 50 * g * 5 - 0.5 * 50 * 64, 850);
eq("stairs P", 60 * g * 3 / 4, 441); eq("rock v", Math.sqrt(2 * g * 10), 14);
eq("ep2", 0.5 * 0.145 * 1600, 116); eq("ep3", 55 * g * 10, 5390); eq("ep4", 900 / (2 * g), 45.9); eq("ep5", 500 * g * 12 / 20, 2940);
eq("ep6", 0.5 * 0.5 * 16 / (0.2 * 0.5 * g), 4.1);
console.log(bad ? bad + " mismatches" : "All numeric answers check out");
process.exit(bad ? 1 : 0);
