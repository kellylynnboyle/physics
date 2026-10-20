// Sanity-check the question bank: node quiz/validate.js
const { TOPICS } = require("./questions.js");

let errors = 0;
const fail = (msg) => { errors++; console.error("FAIL: " + msg); };

for (const t of TOPICS) {
  t.questions.forEach((q, i) => {
    const tag = `${t.id} #${i + 1}`;
    if (!q.q || !q.why || !q.trap) fail(`${tag} missing q/why/trap`);
    if (!Array.isArray(q.options) || q.options.length < 2) fail(`${tag} needs options`);
    else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) fail(`${tag} answer out of range`);
    else if (new Set(q.options).size !== q.options.length) fail(`${tag} duplicate options`);
  });
  console.log(`${t.title}: ${t.questions.length} questions`);
}

// Spot-check the numeric answers against the physics.
const g = 10;
const approx = (a, b) => Math.abs(a - b) < 1e-9;
const checks = {
  "avg speed 60@30 + 60@60 = 40": approx(120 / (60 / 30 + 60 / 60), 40),
  "cliff 20 m, 10 m/s -> 20 m": approx(10 * Math.sqrt((2 * 20) / g), 20),
  "2kg/3kg pulley a = 2": approx(((3 - 2) * g) / 5, 2),
  "inelastic 2kg@6 + 4kg -> 2": approx((2 * 6) / 6, 2),
  "2 kg lifted 3 m in 4 s = 15 W": approx((2 * g * 3) / 4, 15),
  "Moon weight 70*1.6 = 112": approx(70 * 1.6, 112),
};
for (const [name, ok] of Object.entries(checks)) if (!ok) fail(name);

if (errors) { console.error(`${errors} problem(s)`); process.exit(1); }
console.log("All checks passed");
