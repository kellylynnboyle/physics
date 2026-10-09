#!/usr/bin/env python3
"""Generate docs/*.md, README.md and site/data.js from tools/content.py."""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
from content import COURSE, NGSS, UNITS, ASSESSMENT  # noqa: E402

LETTERS = "ABCD"


def slug(u):
    return f"unit-{u['num']}-{u['id']}"


def write(rel, text):
    path = os.path.join(ROOT, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text.rstrip() + "\n")


def esc(s):
    return s.replace("|", "\\|")


def unit_md(u):
    L = []
    L.append(f"# Unit {u['num']}: {u['title']}\n")
    L.append(f"**Pacing:** {u['weeks']}  |  **NGSS:** {', '.join(u['standards'])}\n")
    L.append(f"> **Essential question:** {u['essential_question']}\n")
    L.append(f"*{u['standards_note']}*\n")
    L.append("## 1. Learning objectives\n")
    L += [f"- [ ] {o}" for o in u["objectives"]]
    L.append("\n## 2. Key concepts\n")
    L.append("| Concept | What students must master |\n|---|---|")
    L += [f"| **{esc(a)}** | {esc(b)} |" for a, b in u["concepts"]]
    L.append("\n**Key formulas:** " + "  ·  ".join(f"`{f}`" for f in u["formulas"]) + "\n")
    L.append("## 3. Cornell notes (cue column / notes column)\n")
    L.append("| Cues / Questions | Notes |\n|---|---|")
    L += [f"| {esc(c)} | {esc(n)} |" for c, n in u["cornell"]]
    L.append(f"\n**Summary (write in your own words):** {u['summary']}\n")
    L.append("## 4. Most-missed questions (self-quiz)\n")
    L.append("Try each question before opening the answer. The interactive version is in `site/index.html`.\n")
    for i, q in enumerate(u["quiz"], 1):
        L.append(f"**{i}. {q['q']}**\n")
        L += [f"   - {LETTERS[j]}. {c}" for j, c in enumerate(q["c"])]
        L.append("")
        L.append(f"<details><summary>Answer</summary>\n\n**{LETTERS[q['a']]}.** {q['why']}  \n*Common mistake:* {q['miss']}\n\n</details>\n")
    L.append("## 5. Common misconceptions to watch for\n")
    L += [f"- {m}" for m in u["misconceptions"]]
    L.append("\n## 6. Practice problems\n")
    L.append("Show: knowns, unknown, equation, substitution with units, and a reasonableness check.\n")
    for i, (p, a) in enumerate(u["practice"], 1):
        L.append(f"{i}. {p}\n   <details><summary>Answer</summary>{a}</details>\n")
    L.append("## 7. Learning resources\n")
    L += [f"- [{n}]({url})" for n, url in u["resources"]]
    L.append("\n**Labs / investigations**\n")
    L += [f"- {x}" for x in u["labs"]]
    L.append("\n## 8. Real-world applications\n")
    L += [f"- {x}" for x in u["real_world"]]
    L.append("\n## 9. Assessment & tracking\n")
    L.append(f"**Performance task:** {ASSESSMENT['tasks'][u['id']]}\n")
    L.append("**Mastery checklist**\n")
    L += [f"- [ ] {m}" for m in ASSESSMENT["mastery"]]
    L.append("\nSee [assessment.md](assessment.md) for the 4-point rubric.")
    return "\n".join(L)


def standards_md():
    L = ["# Standards map and pacing\n",
         "Learning goals come from the California NGSS (Physics & Earth Science course model). "
         "The performance expectations below are quoted from the NGSS HS-PS2 and HS-PS3 sets. "
         "Instructors: confirm wording and the course-model sequence against the "
         "[CDE NGSS page](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp).\n",
         "## Performance expectations used in Semester 1\n",
         "| Code | Performance expectation | Units |\n|---|---|---|"]
    for code, text in NGSS.items():
        us = ", ".join(f"{u['num']}" for u in UNITS if code in u["standards"])
        L.append(f"| **{code}** | {text} | {us or '-'} |")
    L.append("\n## Unit map\n")
    L.append("| Unit | Topic | Pacing | Standards |\n|---|---|---|---|")
    for u in UNITS:
        L.append(f"| {u['num']} | [{u['title']}]({slug(u)}.md) | {u['weeks']} | {', '.join(u['standards'])} |")
    L.append("\n*Kinematics and Projectile Motion are foundation units: no stand-alone NGSS PE, but they supply the graphing, vector, and equation skills for HS-PS2-1.*\n")
    L.append("## Science & Engineering Practices emphasized\n")
    L += ["- Analyzing and interpreting data (graphs, slope and area)",
          "- Using mathematics and computational thinking (equations, spreadsheet models)",
          "- Developing and using models (free-body diagrams, energy bar charts)",
          "- Planning and carrying out investigations (labs)",
          "- Constructing explanations and designing solutions (CER, collision/energy devices)",
          "- Engaging in argument from evidence"]
    L.append("\n## Second semester preview (not part of this project)\n")
    L.append("Electricity, magnetism, waves, light, plate tectonics, earthquakes, and nuclear physics. "
             "Energy conservation (Unit 5) is the bridge into HS-PS3-4/5 and the waves/Earth-science units.")
    return "\n".join(L)


def assessment_md():
    L = ["# Learning objectives, assessment criteria, and progress tracking\n",
         "## 4-point proficiency scale\n", "| Level | Name | Descriptor |\n|---|---|---|"]
    L += [f"| {n} | **{name}** | {d} |" for n, name, d in ASSESSMENT["scale"]]
    L.append("\n## Rubric criteria (score each 1–4)\n")
    L.append("| Criterion | Looks like |\n|---|---|")
    L += [f"| **{c}** | {d} |" for c, d in ASSESSMENT["criteria"]]
    L.append("\n## Mastery requirements (per unit)\n")
    L += [f"- {m}" for m in ASSESSMENT["mastery"]]
    L.append("\n## Suggested grade weighting\n")
    L.append("| Category | Weight |\n|---|---|")
    L += [f"| {c} | {w}% |" for c, w in ASSESSMENT["weights"]]
    L.append("\n## Performance tasks\n")
    for u in UNITS:
        L.append(f"- **Unit {u['num']} {u['title']}** ({', '.join(u['standards'])}): {ASSESSMENT['tasks'][u['id']]}")
    L.append("\n## Student progress tracker\n")
    L.append("Copy this table, or use the Progress tab in `site/index.html` (saved in the student's browser only).\n")
    L.append("| Unit | Objectives met (of 5) | Cornell notes | Quiz best % | Practice (of 6) | Lab rubric (1–4) | Task rubric (1–4) | Mastery? |\n|---|---|---|---|---|---|---|---|")
    for u in UNITS:
        L.append(f"| {u['num']}. {u['title']} | /{len(u['objectives'])} | ☐ | | /{len(u['practice'])} | | | ☐ |")
    L.append("\n## Instructor notes\n")
    L += ["- Use the quiz bank as a pre-assessment, then re-use after instruction to show growth.",
          "- Each quiz item is tagged with the misconception it targets; use the 'Most missed' summary in the site to plan reteaching.",
          "- Allow quiz retakes: the site shuffles answer order each attempt.",
          "- Quiz item difficulty is based on commonly documented misconceptions; replace with your own class data when you have it."]
    return "\n".join(L)


def readme_md():
    L = [f"# {COURSE['title']}\n",
         f"{COURSE['grade']}. Standards-aligned learning project covering Kinematics, Projectile Motion, Newton's Laws, Momentum, and Work & Energy.\n",
         "## What's inside\n",
         "| Path | Purpose |", "|---|---|",
         "| `site/index.html` | Interactive student site: Cornell notes, shuffled quizzes of commonly missed questions, practice with hidden answers, and a progress tracker. Open the file in any browser; no server or install needed. |",
         "| `docs/standards.md` | NGSS performance expectations, unit map, pacing |",
         "| `docs/unit-*.md` | One printable outline per unit: objectives, concepts, Cornell notes, quiz, practice, resources, applications, assessment |",
         "| `docs/assessment.md` | Rubric, mastery criteria, grade weighting, tracker |",
         "| `tools/content.py`, `tools/build.py` | Source content and generator. Edit `content.py`, then run `python3 tools/build.py` |",
         "\n## Project checklist\n",
         "### Setup",
         "- [x] Project structure with five unit sections",
         "- [x] NGSS standards mapped to units ([docs/standards.md](docs/standards.md))",
         "- [x] Assessment rubric and mastery criteria ([docs/assessment.md](docs/assessment.md))",
         "- [x] Interactive site with quizzes and progress tracker"]
    for u in UNITS:
        L.append(f"\n### Unit {u['num']}: [{u['title']}](docs/{slug(u)}.md) ({u['weeks']}; {', '.join(u['standards'])})")
        L.append(f"*{u['essential_question']}*\n")
        L += ["- [ ] Learning objectives reviewed", "- [ ] Key concepts and formulas studied",
              "- [ ] Cornell notes completed", f"- [ ] Quiz ({len(u['quiz'])} most-missed questions) scored 80%+",
              f"- [ ] Practice set ({len(u['practice'])} problems) completed", "- [ ] Lab / investigation completed",
              f"- [ ] Performance task: {ASSESSMENT['tasks'][u['id']]}"]
    L.append("\n## Using the project\n")
    L += ["**Students:** open `site/index.html`, pick a unit, work Cornell notes -> quiz -> practice, and check off objectives in the Progress tab.",
          "**Instructors:** print or share the `docs/` files; use `docs/assessment.md` for scoring. Edit `tools/content.py` to add questions, then rebuild.",
          "\n## Notes\n",
          "- Standards text is quoted from memory of the NGSS HS-PS2/PS3 performance expectations; the CDE site was not reachable when this was generated, so verify wording against the official page.",
          "- Use g = 9.8 m/s² throughout.",
          "- The 'most missed' questions target well-documented student misconceptions; they are not yet based on your class's data."]
    return "\n".join(L)


def main():
    write("README.md", readme_md())
    write("docs/standards.md", standards_md())
    write("docs/standards.md", standards_md())
    write("docs/assessment.md", assessment_md())
    for u in UNITS:
        write(f"docs/{slug(u)}.md", unit_md(u))
    data = {"course": COURSE, "ngss": NGSS, "units": UNITS, "assessment": ASSESSMENT}
    write("site/data.js", "window.PHYSICS = " + json.dumps(data, ensure_ascii=False, indent=1) + ";")
    print("built", len(UNITS), "units")


if __name__ == "__main__":
    main()
