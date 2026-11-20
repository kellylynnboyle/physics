// Single source of truth: every generated file is built from these content modules.
module.exports = ['01-kinematics', '02-projectile-motion', '03-newtons-laws', '04-momentum', '05-work-energy']
  .map(id => require(`../content/${id}.js`));
