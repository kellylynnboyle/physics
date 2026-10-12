# Standards Alignment and Assessment Plan

## NGSS (California) alignment: Semester 1 (HS Physics & Earth Science course model)
Verify wording against the CDE page: https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp

| Unit | Performance expectations | Notes |
|---|---|---|
| 1 Kinematics | HS-PS2-1 (supporting) | Describes motion data used in Newton's 2nd law analysis; builds math/graph skills |
| 2 Projectile Motion | HS-PS2-1 (supporting) | 2-D application of Newton's 2nd law with gravity |
| 3 Newton's Laws | **HS-PS2-1**, HS-PS2-4 (gravity portion) | Analyze data to support F = ma |
| 4 Momentum | **HS-PS2-2**, **HS-PS2-3** | Conservation of momentum; collision-force design |
| 5 Work & Energy | **HS-PS3-1**, **HS-PS3-2**, **HS-PS3-3** (HS-PS3-4 extension) | Model, explain, design |

Semester 2 topics (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear) are outside this project and follow the same structure (see "Extending the project").

## Science & Engineering Practices emphasized
Analyzing and interpreting data · Using mathematics and computational thinking · Developing and using models · Constructing explanations and designing solutions · Engaging in argument from evidence (CER).

## Crosscutting concepts emphasized
Cause and effect · Systems and system models · Energy and matter · Patterns · Scale, proportion and quantity.

## Proficiency scale (used in every unit)
| Level | Label | Meaning | Approx. % |
|---|---|---|---|
| 4 | Mastery | Applies and extends to new situations; explains reasoning | 90-100 |
| 3 | Proficient | Meets the standard with minor errors | 80-89 |
| 2 | Developing | Partial understanding; needs support | 65-79 |
| 1 | Beginning | Significant gaps | < 65 |

## Assessment menu per unit
| Type | Purpose | Evidence |
|---|---|---|
| Cornell notes | Concept capture and self-quizzing | Completed cue column, summary, self-check |
| Interactive quiz (`quiz/index.html`) | Formative; target common misconceptions | Score ≥ 80% on a retry |
| Problem set | Procedural fluency | 4 of 6 correct with work shown |
| Lab / CER | NGSS practices (data, argument) | Rubric below |
| Design challenge (Units 4, 5) | HS-PS2-3, HS-PS3-3 | Iteration log + data |
| Unit test | Summative | Mixed conceptual and quantitative |

## Lab / CER rubric (4 points each)
| Criterion | 4 | 3 | 2 | 1 |
|---|---|---|---|---|
| Claim | Precise, testable | Clear | Vague | Missing |
| Evidence | Data with units, graph, uncertainty | Data and graph | Some data | None |
| Reasoning | Links evidence to physics law | Mostly links | Restates data | None |
| Error analysis | Quantified sources and improvements | Qualitative | Generic | None |

## Student progress tracker
Copy per student.

| Unit | Notes | Quiz 1st try | Quiz retry | Problem set | Lab/Design | Test | Level (1-4) |
|---|---|---|---|---|---|---|---|
| 1 Kinematics | ☐ | | | | | | |
| 2 Projectile Motion | ☐ | | | | | | |
| 3 Newton's Laws | ☐ | | | | | | |
| 4 Momentum | ☐ | | | | | | |
| 5 Work & Energy | ☐ | | | | | | |

## Instructor notes
- Suggested sequence: Unit 1 → 2 → 3 → 4 → 5, with spiral review quizzes (2-3 old questions per week).
- Use quiz miss rates to decide reteach topics; each answer explanation names the common wrong idea.
- Quiz data is in `quiz/quizzes.js` (plain JS, easy to add questions).
- Differentiation: provide formula sheets and worked examples for Developing learners; extension tasks (air resistance, spring-mass model, 2-D collisions) for Mastery.

## Extending the project (Semester 2)
Add `units/06-…` folders with the same three files (README, cornell-notes, quiz entry) for Electricity, Magnetism, Waves, Light, Plate Tectonics, Earthquakes and Nuclear Physics.
