#!/usr/bin/env python3
"""Generate markdown unit packets, README checklist and the interactive quiz from content.py."""
import json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from content import UNITS
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def w(path, text):
    p = os.path.join(ROOT, path); os.makedirs(os.path.dirname(p), exist_ok=True)
    open(p, "w").write(text)
def esc(s): return s.replace("|", "\\|")

for i, u in enumerate(UNITS, 1):
    d = f"units/{u['id']}"
    L = [f"# Unit {i}: {u['title']}", f"*{u['weeks']} (suggested pacing)*", "",
         "## CA NGSS alignment"] + [f"- {s}" for s in u["ngss"]]
    L += ["", "## Learning objectives (students can...)"] + [f"- [ ] {o}" for o in u["objectives"]]
    L += ["", "## Key concepts"] + [f"- {c}" for c in u["concepts"]]
    L += ["", "## Key equations"] + [f"- `{e}`" for e in u["equations"]]
    L += ["", "## Assessment criteria", "| Level | Evidence |", "|---|---|",
          "| 4 Mastery | 90%+ on quiz; solves multi-step problems with units and explains reasoning |",
          "| 3 Proficient | 75-89% on quiz; correct setup and equation choice, minor arithmetic slips |",
          "| 2 Developing | 60-74%; knows concepts but struggles to set up or interpret graphs/FBDs |",
          "| 1 Beginning | Under 60%; needs reteaching of core ideas |", "",
          "## Real-world applications"] + [f"- {r}" for r in u["realworld"]]
    L += ["", "## Practice problems (answers included)"]
    for n, (q, a) in enumerate(u["practice"], 1):
        L.append(f"{n}. {q}  \n   *Answer:* {a}")
    L += ["", "## Resources", "| Resource | Link | Use |", "|---|---|---|"]
    for t, url, use in u["resources"]:
        L.append(f"| {t} | {url or '-'} | {use} |")
    L += ["", "Interactive quiz: open [`quiz/index.html`](../../quiz/index.html) and pick this unit.",
          "", "## Unit checklist", "- [ ] Read and complete Cornell notes", "- [ ] Do practice problems",
          "- [ ] Complete lab/design task", "- [ ] Score 75%+ on quiz (retake missed items)", "- [ ] Self-assess objectives above"]
    w(f"{d}/README.md", "\n".join(L) + "\n")
    C = [f"# Cornell Notes: {u['title']}", "", "Name: ________  Period: ____  Date: ________", "",
         "| CUES / QUESTIONS | NOTES |", "|---|---|"]
    for cue, note in u["cornell"]:
        C.append(f"| **{esc(cue)}** | {esc(note)} |")
    C += ["", "## Summary", u["summary"], "",
          "*Study method: cover the Notes column, answer each cue aloud, mark misses, repeat the next day and again a few days later.*"]
    w(f"{d}/cornell-notes.md", "\n".join(C) + "\n")

# README
R = ["# 11th Grade Physics & Earth Science: Semester 1 Learning Project", "",
 "Lab-based course covering core mechanics, aligned to the California NGSS HS Physical Science standards "
 "([CDE NGSS page](https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp)). Share this checklist with students and instructors.", "",
 "## How to use",
 "1. Each unit folder has an overview (objectives, criteria, problems, resources) and Cornell notes.",
 "2. Open `quiz/index.html` in any browser for interactive quizzes on the most commonly missed questions (no install needed).",
 "3. Track progress with `docs/assessment-and-tracking.md`.", "",
 "## Project outline / checklist"]
for i, u in enumerate(UNITS, 1):
    R += [f"### {i}. {u['title']} ({u['weeks']})", f"- [ ] [Overview, objectives and resources](units/{u['id']}/README.md)",
          f"- [ ] [Cornell notes](units/{u['id']}/cornell-notes.md)", "- [ ] Practice problems", "- [ ] Lab / design task",
          "- [ ] Interactive quiz (75%+)", f"- Standards: {'; '.join(s.split(':')[0].split(' (')[0] for s in u['ngss'])}", ""]
R += ["## Semester 2 roadmap (not yet built)", "Electricity, magnetism, waves, light, plate tectonics, earthquakes and nuclear physics.", "",
 "## Notes for instructors",
 "- Kinematics and projectile motion are not named NGSS performance expectations; they are prerequisite tools for HS-PS2-1.",
 "- Standard wording above is summarized; verify against the CDE page before publishing to families.",
 "- Edit `tools/content.py` and run `python3 tools/build.py` to regenerate all files.", ""]
w("README.md", "\n".join(R))

# assessment doc
A = ["# Learning Objectives, Assessment and Progress Tracker", "",
 "## Grading components (suggested)", "| Component | Weight |", "|---|---|",
 "| Cornell notes (completeness, cue questions) | 15% |", "| Practice problems | 20% |", "| Labs / design tasks | 25% |",
 "| Interactive quizzes (retakes allowed) | 15% |", "| Unit test | 25% |", "",
 "## Mastery scale", "4 Mastery (90%+) | 3 Proficient (75-89%) | 2 Developing (60-74%) | 1 Beginning (<60%)", "",
 "## Student tracker", "| Unit | Objectives met (x/5) | Notes | Practice | Lab | Quiz % | Test % | Level |", "|---|---|---|---|---|---|---|---|"]
for u in UNITS: A.append(f"| {u['title']} | /{len(u['objectives'])} | [ ] | [ ] | [ ] |  |  |  |")
A += ["", "## Standards crosswalk", "| Standard | Unit(s) | Evidence |", "|---|---|---|",
 "| HS-PS2-1 Newton's 2nd law | 1, 2, 3 | Motion data analysis, F = ma labs |",
 "| HS-PS2-2 Conservation of momentum | 4 | Collision calculations and lab |",
 "| HS-PS2-3 Minimize collision force | 4 | Egg-drop / crash device |",
 "| HS-PS3-1 Energy computational model | 5 | Energy bookkeeping problems |",
 "| HS-PS3-2 Energy as motion/position | 5 | Bar charts, Energy Skate Park |",
 "| HS-PS3-3 Energy conversion device | 5 | Device build + efficiency |", ""]
w("docs/assessment-and-tracking.md", "\n".join(A))

# quiz
data = [{"id": u["id"], "title": u["title"], "questions": [{"q": q, "c": c, "a": a, "e": e} for q, c, a, e in u["quiz"]]} for u in UNITS]
tpl = open(os.path.join(ROOT, "tools/quiz_template.html")).read()
w("quiz/index.html", tpl.replace("__DATA__", json.dumps(data)))
print("built")
