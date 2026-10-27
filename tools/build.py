#!/usr/bin/env python3
"""Generate units/*.md and site/data.js from data/units.json (single source of truth)."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
data = json.loads((ROOT / "data" / "units.json").read_text())
units = data["units"]

RUBRIC = [
    ("Mastery (4)", "Correct setup, units, and sign conventions; explains reasoning with the relevant law or model; connects to a graph or real-world case."),
    ("Proficient (3)", "Correct method with a minor arithmetic, unit, or sign slip; reasoning mostly complete."),
    ("Developing (2)", "Identifies relevant concepts but applies a formula incorrectly or skips steps; partial reasoning."),
    ("Beginning (1)", "Recalls isolated facts or formulas; cannot yet set up or explain the problem."),
]


def bullets(items):
    return "\n".join(f"- {i}" for i in items)


def unit_md(u):
    c = u["cornell"]
    out = [f"# Unit {u['num']}: {u['title']}", ""]
    out += ["## NGSS Learning Goals", bullets(u["standards"]), ""]
    out += ["## Learning Objectives", "Students will be able to:", ""]
    out += [f"- [ ] {o}" for o in u["objectives"]] + [""]
    out += ["## Key Concepts", bullets(u["concepts"]), ""]
    out += [f"## Cornell Notes — {c['topic']}", "", "| Cue / Question | Notes |", "|---|---|"]
    out += [f"| **{r['cue']}** | {r['notes']} |" for r in c["rows"]]
    out += ["", f"**Summary (write in your own words):** {c['summary']}", ""]
    out += ["## Learning Resources", bullets(u["resources"]), "", f"**Lab / investigation:** {u['lab']}", ""]
    out += ["## Practice Problems", ""]
    for i, p in enumerate(u["practice"], 1):
        out += [f"{i}. {p['q']}", f"   <details><summary>Answer</summary>{p['a']}</details>"]
    out += ["", "## Real-World Applications", bullets(u["realworld"]), ""]
    out += ["## Most-Missed Questions (interactive version in `site/index.html`)", ""]
    for i, q in enumerate(u["quiz"], 1):
        opts = "; ".join(f"{'ABCD'[k]}) {ch}" for k, ch in enumerate(q["choices"]))
        out += [f"{i}. {q['q']}  ", f"   {opts}  ",
                f"   <details><summary>Answer</summary>**{'ABCD'[q['answer']]}** — {q['why']}</details>"]
    out += ["", "## Assessment Criteria", "",
            "| Level | Description |", "|---|---|"]
    out += [f"| {l} | {d} |" for l, d in RUBRIC]
    out += ["", "**Mastery check:** score ≥ 80% on the interactive quiz twice (different days), complete the lab report at Proficient or above, and check off every objective above.", ""]
    return "\n".join(out)


def readme():
    o = ["# Physics & Earth Science — Semester 1 Learning Project (Grade 11)", "",
         "A shareable project outline, Cornell notes, interactive quizzes, and tracking tools for the mechanics half of the course "
         "(kinematics, projectile motion, Newton's laws, momentum, work & energy). Learning goals come from the "
         "[California NGSS standards](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp) (Physics & Earth Science course model).", "",
         "## How to use this project", "",
         "- **Students:** open `site/index.html` in any browser (no install). Study the Cornell notes, take the quizzes, and tick off objectives; progress saves in your browser.",
         "- **Instructors:** each `units/*.md` file is a printable unit plan with objectives, notes, resources, practice with answers, labs, and a rubric. See `docs/assessment.md` for tracking.",
         "- **Edit content:** change `data/units.json`, then run `python3 tools/build.py` to regenerate the unit pages and the site data.", "",
         "## Project structure", "", "```",
         "physics/", "├── README.md              # this outline / checklist",
         "├── data/units.json        # single source of content",
         "├── units/                 # generated unit plans (one per topic)",
         "├── docs/assessment.md     # objectives-to-standards map, rubric, tracker",
         "├── site/                  # interactive notes + quizzes + progress tracker",
         "└── tools/build.py         # generator", "```", "",
         "## Semester 1 sequence and checklist", "",
         "| # | Unit | NGSS focus | Plan |", "|---|---|---|---|"]
    for u in units:
        codes = ", ".join(sorted({s.split(":")[0].split(" ")[0] for s in u["standards"] if s.startswith("HS-")}))
        o.append(f"| {u['num']} | {u['title']} | {codes} | [units/{u['num']:02d}-{u['id']}.md](units/{u['num']:02d}-{u['id']}.md) |")
    o += ["", "> Kinematics and projectile motion build the mathematical foundation for HS-PS2-1; they are assessed through that standard.", ""]
    for u in units:
        o += [f"### Unit {u['num']}: {u['title']}", "", "**Objectives**", ""]
        o += [f"- [ ] {x}" for x in u["objectives"]]
        o += ["", "**Unit tasks**", "",
              "- [ ] Complete Cornell notes (cues + summary)",
              "- [ ] Finish practice problems and check answers",
              f"- [ ] Lab: {u['lab'].split(':')[0]}",
              "- [ ] Interactive quiz ≥ 80% (twice)",
              "- [ ] Unit assessment at Proficient or above", ""]
    o += ["## Semester 2 preview (not built yet)", "",
          "Electricity, magnetism, waves, light, plate tectonics, earthquakes, and nuclear physics. The same `data/units.json` structure can be extended with new units.", "",
          "## Verify standards", "",
          "Standard wording is paraphrased from NGSS performance expectations. Confirm against the CDE page linked above before publishing to a class.", ""]
    return "\n".join(o)


def assessment():
    o = ["# Assessment & Progress Tracking", "",
         "## Standards map", "", "| Standard | Units | Evidence |", "|---|---|---|",
         "| HS-PS2-1 (Newton's 2nd law) | 1, 2, 3 | Force/acceleration lab data analysis; kinematics and projectile problem sets |",
         "| HS-PS2-2 (momentum conservation) | 4 | Collision lab; conservation calculations |",
         "| HS-PS2-3 (collision-force device) | 4 | Egg-drop / crumple-zone design with impact-time analysis |",
         "| HS-PS3-1 (computational energy model) | 5 | Spreadsheet or simulation energy model |",
         "| HS-PS3-2 (energy as motion + position) | 5 | Energy bar charts, skate-park lab |",
         "| HS-PS3-3 (energy conversion device) | 5 | Design, build, refine project with constraints |", "",
         "## Four-level rubric (all units)", "", "| Level | Description |", "|---|---|"]
    o += [f"| {l} | {d} |" for l, d in RUBRIC]
    o += ["", "## Suggested weighting", "",
          "| Category | Weight |", "|---|---|",
          "| Labs & design challenges (rubric) | 30% |", "| Unit tests | 30% |",
          "| Quizzes & practice (formative, mastery-based) | 20% |", "| Cornell notes check | 10% |", "| Reflection / corrections | 10% |", "",
          "Adjust to your school's grading policy.", "",
          "## Mastery thresholds", "",
          "- Quiz: ≥ 80% on two separate attempts on different days.",
          "- Objectives: every box checked, instructor verifies by conferencing or exit ticket.",
          "- Reassessment: students may redo missed quiz items after correcting them in their notes.", "",
          "## Class tracker (copy into a spreadsheet)", "",
          "| Student | Unit 1 quiz | Unit 2 quiz | Unit 3 quiz | Unit 4 quiz | Unit 5 quiz | Objectives met | Lab rubric |",
          "|---|---|---|---|---|---|---|---|", "| | | | | | | | |", ""]
    return "\n".join(o)


(ROOT / "units").mkdir(exist_ok=True)
(ROOT / "docs").mkdir(exist_ok=True)
for u in units:
    (ROOT / "units" / f"{u['num']:02d}-{u['id']}.md").write_text(unit_md(u))
(ROOT / "README.md").write_text(readme())
(ROOT / "docs" / "assessment.md").write_text(assessment())
(ROOT / "site").mkdir(exist_ok=True)
(ROOT / "site" / "data.js").write_text("window.COURSE = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")
print("built", len(units), "units")
