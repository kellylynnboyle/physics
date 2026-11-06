#!/usr/bin/env python3
"""Generate topic markdown, docs, and the interactive site from content/topics.py."""
import json, sys, pathlib
ROOT = pathlib.Path(__file__).parent
sys.path.insert(0, str(ROOT / "content"))
from topics import TOPICS, NGSS

def cornell_md(t):
    c = t["cornell"]
    out = ["| Cue / Question | Notes |", "|---|---|"]
    for cue, note in c["rows"]:
        out.append(f"| {cue} | {note.replace('|', '/')} |")
    out += ["", f"**Summary:** {c['summary']}"]
    return "\n".join(out)

def rubric_md(t):
    out = ["| Criterion | 4 - Mastery | 3 - Proficient | 2 - Developing | 1 - Beginning |", "|---|---|---|---|---|"]
    for r in t["assessment"]["rubric"]:
        out.append("| " + " | ".join(r) + " |")
    return "\n".join(out)

def topic_md(t):
    L = []
    a = L.append
    a(f"# Unit {t['unit']}: {t['title']}")
    a(f"*{t['weeks']} (pacing suggestion)*\n")
    a(f"> **Big idea:** {t['big_idea']}\n")
    a("## NGSS Learning Goals")
    for s in t["ngss"]:
        a(f"- **{s}** - {NGSS[s]}")
    a(f"\n*{t['ngss_note']}*\n")
    a("## Learning Objectives (I can...)")
    for o in t["objectives"]:
        a(f"- [ ] {o}")
    a("\n## Key Concepts")
    for k, v in t["concepts"]:
        a(f"- **{k}** - {v}")
    a("\n### Key formulas")
    for f in t["formulas"]:
        a(f"- `{f}`")
    a("\n### Common misconceptions")
    for m in t["misconceptions"]:
        a(f"- {m}")
    a("\n## Cornell Notes")
    a(f"Print-ready version: open `site/index.html` and choose **Cornell Notes**.\n")
    a(cornell_md(t))
    a("\n## Most-Missed Questions (answer key)")
    a("Take them interactively in `site/index.html`.\n")
    for i, q in enumerate(t["quiz"], 1):
        a(f"{i}. {q['q']}")
        for j, c in enumerate(q["c"]):
            a(f"   - {'ABCD'[j]}. {c}")
        a(f"   - **Answer: {'ABCD'[q['a']]}** - {q['why']} *Why it is missed:* {q['miss']}")
    a("\n## Learning Resources")
    for n, u, d in t["resources"]:
        a(f"- [{n}]({u}) - {d}")
    a("\n### Labs / hands-on activities")
    for l in t["labs"]:
        a(f"- {l}")
    a("\n## Practice Problems")
    for i, (p, ans) in enumerate(t["practice"], 1):
        a(f"{i}. {p}\n   - *Answer:* {ans}")
    a("\n## Real-World Applications")
    for r in t["real_world"]:
        a(f"- {r}")
    a("\n## Assessment")
    a("**Mastery looks like:**")
    for m in t["assessment"]["mastery"]:
        a(f"- [ ] {m}")
    a("\n**Rubric**\n")
    a(rubric_md(t))
    a("\n**Formative checks:** " + "; ".join(t["assessment"]["formative"]))
    a(f"\n**Summative:** {t['assessment']['summative']}")
    a("\n## Student Progress Checklist")
    for item in ["Cornell notes completed", "Interactive quiz >= 75%", "Missed-question retake done", "Practice problems 1-5 done", "Lab report submitted", "Unit assessment taken"]:
        a(f"- [ ] {item}")
    a("")
    return "\n".join(L)

def standards_md():
    L = ["# Standards Alignment (NGSS - California)", "",
         "Source: California Department of Education NGSS page - https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp",
         "Standards below are the Physical Science performance expectations used as this course's learning goals. Wording is paraphrased from the NGSS HS-PS performance expectations; confirm against the CDE page before publishing.", "",
         "| Standard | Performance expectation | Units |", "|---|---|---|"]
    for k, v in NGSS.items():
        us = ", ".join(f"{t['unit']}. {t['title']}" for t in TOPICS if k in t["ngss"])
        L.append(f"| {k} | {v} | {us or 'Semester 2 / later'} |")
    L += ["", "Kinematics and projectile motion are not stand-alone NGSS performance expectations; they are prerequisite skills for HS-PS2-1.",
          "Semester 2 topics (electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics) will map to HS-PS2-4/5, HS-PS3-5, HS-PS4-1/3/5, HS-PS1-8, and HS-ESS2/ESS1 and are outside this project's scope.", ""]
    return "\n".join(L)

def assessment_md():
    L = ["# Assessment Plan and Progress Tracking", "",
         "## Scale", "- **4 Mastery** (>= 90%) - consistently accurate, can explain and transfer",
         "- **3 Proficient** (75-89%) - meets the standard with minor errors",
         "- **2 Developing** (60-74%) - partial understanding; reteach and retake",
         "- **1 Beginning** (< 60%) - significant gaps; intervention", "",
         "## Weighting (suggested)", "| Component | Weight |", "|---|---|",
         "| Interactive quizzes and Cornell notes | 15% |", "| Labs / design challenges (SEP evidence) | 25% |",
         "| Practice and homework (IXL, problem sets) | 15% |", "| Unit tests | 35% |", "| Semester cumulative exam | 10% |", "",
         "## Mastery rules", "- Quiz pass mark is 75%. Missed items must be retaken (the site's *Retry missed* button) and corrected in notes.",
         "- Retakes allowed once per unit after completing practice problems.", "- Each lab includes a claim-evidence-reasoning (CER) conclusion.", "",
         "## Class tracker (copy into a spreadsheet)", "",
         "| Student | " + " | ".join(f"U{t['unit']} {t['title']}" for t in TOPICS) + " |",
         "|---|" + "---|" * len(TOPICS),
         "| (name) | " + " | ".join("" for _ in TOPICS) + " |", ""]
    L.append("## Objective-level tracking\n")
    for t in TOPICS:
        L.append(f"### Unit {t['unit']}: {t['title']}")
        for i, o in enumerate(t["objectives"], 1):
            L.append(f"- U{t['unit']}.{i} {o}")
        L.append("")
    return "\n".join(L)

def readme_md():
    L = ["# High School Physics - Semester 1 Learning Project (Grade 11)", "",
         "Course model: Physics & Earth Science (California NGSS). Semester 1 covers kinematics, projectile motion, Newton's laws, momentum, and work & energy. Standards are the learning goals: https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp", "",
         "## What is in this repo", "",
         "| Path | Purpose |", "|---|---|",
         "| `site/index.html` | Student-facing app: Cornell notes (printable), interactive most-missed-question quizzes, and a progress tracker. Open it in any browser; no install. |",
         "| `topics/*.md` | One outline per unit: objectives, concepts, Cornell notes, quiz key, resources, practice, applications, rubric, checklist |",
         "| `docs/standards.md` | NGSS alignment |", "| `docs/assessment.md` | Grading scale, weighting, class tracker, objective list |",
         "| `content/topics.py` | Single source of truth for all content |", "| `build.py` | Regenerates topic files, docs, and the site (`python3 build.py`) |", "",
         "## Course checklist", ""]
    for t in TOPICS:
        L.append(f"- [ ] **Unit {t['unit']}: [{t['title']}](topics/{t['id']}.md)** ({t['weeks']}) - {', '.join(t['ngss'])}")
        L.append("  - [ ] Cornell notes  - [ ] Interactive quiz >= 75%  - [ ] Practice problems  - [ ] Lab  - [ ] Unit assessment")
    L += ["- [ ] Semester 1 cumulative exam", "",
          "## Unit map", "", "| Unit | Topic | Core ideas | NGSS |", "|---|---|---|---|"]
    for t in TOPICS:
        L.append(f"| {t['unit']} | {t['title']} | {'; '.join(k for k, _ in t['concepts'][:4])} | {', '.join(t['ngss'])} |")
    L += ["", "## For instructors", "- Share `site/index.html` (or host the `site/` folder, e.g. on GitHub Pages). Quiz scores and checklist progress are stored only in each student's browser.",
          "- Add or edit questions in `content/topics.py`, then run `python3 build.py`.",
          "- Quiz answer order is shuffled on every attempt.",
          "- Resource links are to well-known free sites (Physics Classroom, PhET, OpenStax, Khan Academy); please spot-check URLs each term.", ""]
    return "\n".join(L)

def write(path, text):
    p = ROOT / path
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(text, encoding="utf-8")

def site_html():
    data = {"ngss": NGSS, "topics": [
        {k: t[k] for k in ["id", "title", "unit", "weeks", "ngss", "big_idea", "objectives", "concepts", "formulas", "misconceptions", "cornell", "quiz", "resources", "labs", "practice", "real_world", "assessment"]}
        for t in TOPICS]}
    tpl = (ROOT / "site" / "template.html").read_text(encoding="utf-8")
    return tpl.replace("/*__DATA__*/null", json.dumps(data, ensure_ascii=False))

if __name__ == "__main__":
    write("README.md", readme_md())
    write("docs/standards.md", standards_md())
    write("docs/assessment.md", assessment_md())
    for t in TOPICS:
        write(f"topics/{t['id']}.md", topic_md(t))
    write("site/index.html", site_html())
    print("built", len(TOPICS), "topics")
