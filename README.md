# 11th Grade Physics & Earth Science – Semester 1 Learning Project

Lab experience, real-world connections, and a theoretical framework aligned to the
[California NGSS](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp) (Physics & Earth Science course model).
The NGSS performance expectations are the learning goals for every unit.

Semester 1 covers: **Kinematics → Projectile Motion → Newton's Laws → Momentum → Work & Energy**.
(Semester 2: electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics – separate project.)

## Project structure

```
README.md                  <- this outline / checklist (share with students & instructors)
standards.md               <- NGSS alignment + course-wide learning goals
assessment.md              <- rubrics, mastery levels, progress tracker, pacing guide
units/
  01-kinematics.md         <- concepts, Cornell notes, resources, practice, real-world, objectives
  02-projectile-motion.md
  03-newtons-laws.md
  04-momentum.md
  05-work-and-energy.md
quiz/
  index.html               <- interactive "most-missed questions" quizzes (open in any browser)
  questions.js             <- quiz question bank (instructors can edit)
```

## How to use

- **Students:** work each unit top to bottom: read objectives → fill in Cornell notes (cues first, cover the notes column and self-quiz) → labs/practice → take the interactive quiz → check off the tracker below.
- **Instructors:** edit `quiz/questions.js` to add/replace questions; use `assessment.md` rubrics and the tracker for grading and pacing.
- **Quiz:** open `quiz/index.html` in a browser (no install, no internet needed). Results are saved only in the student's own browser.

## Course checklist

### Unit 1 – Kinematics (`units/01-kinematics.md`)
- [ ] Objectives read; Cornell notes completed
- [ ] Lab: Constant-velocity and accelerating carts/ramps (motion graphs)
- [ ] Practice set A–C done
- [ ] Interactive quiz ≥ 80%
- [ ] Unit assessment

### Unit 2 – Projectile Motion (`units/02-projectile-motion.md`)
- [ ] Objectives read; Cornell notes completed
- [ ] Lab: Launch angle vs. range (spring/ball launcher)
- [ ] Practice set A–C done
- [ ] Interactive quiz ≥ 80%
- [ ] Unit assessment

### Unit 3 – Newton's Laws (`units/03-newtons-laws.md`)
- [ ] Objectives read; Cornell notes completed
- [ ] Lab: F = ma with a dynamics cart; friction on a ramp
- [ ] Practice set A–C done
- [ ] Interactive quiz ≥ 80%
- [ ] Unit assessment

### Unit 4 – Momentum (`units/04-momentum.md`)
- [ ] Objectives read; Cornell notes completed
- [ ] Lab: Cart collisions (elastic/inelastic), egg-drop impulse design
- [ ] Practice set A–C done
- [ ] Interactive quiz ≥ 80%
- [ ] Unit assessment

### Unit 5 – Work & Energy (`units/05-work-and-energy.md`)
- [ ] Objectives read; Cornell notes completed
- [ ] Lab: Energy conservation on a roller-coaster track / pendulum
- [ ] Practice set A–C done
- [ ] Interactive quiz ≥ 80%
- [ ] Unit assessment + semester capstone (design project, see `assessment.md`)

## Unit snapshot

| Unit | Big idea | Key NGSS PEs | Key equations |
|---|---|---|---|
| 1 Kinematics | Describe motion with position, velocity, acceleration (graphs, equations) | HS-PS2-1 (foundation) | v = Δx/Δt, a = Δv/Δt, v = v₀ + at, Δx = v₀t + ½at², v² = v₀² + 2aΔx |
| 2 Projectile Motion | 2D motion = independent horizontal (constant v) and vertical (a = −g) motion | HS-PS2-1 | x = vₓt, y = y₀ + v₀yt − ½gt² |
| 3 Newton's Laws | Net force causes acceleration; forces come in interaction pairs | HS-PS2-1, HS-PS2-4 (context) | ΣF = ma, W = mg, f = μN |
| 4 Momentum | Momentum is conserved in isolated systems; impulse changes momentum | HS-PS2-2, HS-PS2-3 | p = mv, J = FΔt = Δp, Σp_before = Σp_after |
| 5 Work & Energy | Energy is conserved; work transfers energy | HS-PS3-1, HS-PS3-2, HS-PS3-3 | W = Fd cosθ, KE = ½mv², PE = mgh, P = W/t |

> Note: NGSS has no standalone "kinematics" PE; Units 1–2 build the mathematical tools for HS-PS2-1.
> Verify PE wording against the CDE page above before publishing to students.
