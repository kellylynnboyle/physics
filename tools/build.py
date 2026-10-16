#!/usr/bin/env python3
"""Generate docs/*.md, README.md and site/data.js from tools/content/*.py."""
import json, pathlib, importlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
ORDER = ["kinematics", "projectile", "newton", "momentum", "energy"]
T = [importlib.import_module(f"content.{n}").TOPIC for n in ORDER]

PROFICIENCY = 80  # % on quiz needed to count a topic as proficient

def validate():
    for t in T:
        assert len(t["quiz"]) >= 8, t["id"]
        for q in t["quiz"]:
            assert 0 <= q["answer"] < len(q["choices"]), (t["id"], q["q"])
            assert len(set(q["choices"])) == len(q["choices"]), (t["id"], q["q"])

def topic_md(t):
    L = [f"# {t['num']}. {t['title']}", "", f"*Suggested pacing: ~{t['weeks']} weeks* · *Big idea:* {t['big_idea']}", ""]
    L += ["## California NGSS performance expectations", ""]
    L += [f"- **{c}** — {d}" for c, d in t["ngss"]]
    L += ["", f"- *Science & Engineering Practices:* {t['sep']}", f"- *Crosscutting Concepts:* {t['ccc']}", ""]
    L += ["## Learning objectives (students can…)", ""] + [f"- [ ] {o}" for o in t["objectives"]] + [""]
    L += ["## Key concepts", "", "| Concept | What to master |", "|---|---|"]
    L += [f"| **{a}** | {b} |" for a, b in t["concepts"]]
    L += ["", "**Equations:** " + " · ".join(f"`{e}`" for e in t["equations"]), "", "**Vocabulary:** " + ", ".join(t["vocab"]), ""]
    c = t["cornell"]
    L += [f"## {c['title']}", "", "| Cue / Question | Notes |", "|---|---|"]
    L += [f"| {a} | {b} |" for a, b in c["rows"]]
    L += ["", f"**Summary:** {c['summary']}", ""]
    L += ["## Most-missed questions quiz (answer key)", "", "*Take the interactive version in `site/index.html`.*", ""]
    for i, q in enumerate(t["quiz"], 1):
        L += [f"**{i}. {q['q']}**", ""]
        for j, ch in enumerate(q["choices"]):
            L.append(f"- {'abcd'[j]}. {ch}" + ("  ✅" if j == q["answer"] else ""))
        L += ["", f"*Why:* {q['why']}  ", f"*Common misconception:* {q['misconception']}", ""]
    L += ["## Practice problems", ""]
    for i, (p, a) in enumerate(t["practice"], 1):
        L += [f"{i}. {p}", f"   - *Answer:* {a}"]
    L += ["", "## Learning resources", ""]
    L += [f"- **{n}** ({d}) — {w}" for n, d, w in t["resources"]]
    L += ["", "## Labs & activities", ""] + [f"- {x}" for x in t["labs"]]
    L += ["", "## Real-world applications", ""] + [f"- {x}" for x in t["real_world"]]
    L += ["", "## Assessment criteria", "", "| Level | Evidence |", "|---|---|"]
    L += [f"| **{k}** | {v} |" for k, v in t["rubric"].items()]
    L += ["", f"**Proficiency target:** ≥ {PROFICIENCY}% on the quiz (retakes allowed after review), a completed lab report, and Level 3+ on the rubric.", ""]
    return "\n".join(L)

def assessment_md():
    L = ["# Assessment & Progress Tracking", "",
         "## How progress is measured", "",
         "| Component | Weight | Evidence |", "|---|---|---|",
         "| Concept quizzes (interactive, most-missed questions) | 20% | ≥ 80% = proficient; retakes after reviewing explanations |",
         "| Cornell notes | 10% | Cues, notes, and a summary in student's own words |",
         "| Labs & design challenges | 25% | CER (Claim–Evidence–Reasoning) write-up, data tables, graphs |",
         "| Problem sets | 15% | Setup, units, signs, and reasoning shown |",
         "| Unit test | 30% | Mix of conceptual, graph, and multi-step quantitative items |", "",
         "## Four-level rubric (all topics)", "",
         "| Level | Description |", "|---|---|",
         "| 4 – Mastery | Transfers ideas to new situations and explains/corrects misconceptions |",
         "| 3 – Proficient | Solves standard problems correctly with reasoning |",
         "| 2 – Developing | Partial understanding; needs prompts or makes frequent errors |",
         "| 1 – Beginning | Core misconceptions; limited correct work |", "",
         "## Student progress tracker", "",
         "| Topic | Quiz % | Cornell notes | Lab | Problem set | Unit test | Rubric level | NGSS PEs |", "|---|---|---|---|---|---|---|---|"]
    for t in T:
        L.append(f"| {t['title']} | ___ | ☐ | ☐ | ☐ | ___ | ___ | {', '.join(c for c, _ in t['ngss'])} |")
    L += ["", "## Standards coverage (Semester 1)", "", "| NGSS PE | Topic(s) |", "|---|---|"]
    cov = {}
    for t in T:
        for c, d in t["ngss"]:
            cov.setdefault(c, (d, []))[1].append(t["title"])
    for c in sorted(cov):
        L.append(f"| **{c}** — {cov[c][0]} | {', '.join(cov[c][1])} |")
    L += ["", "*Semester 2 standards (electricity, magnetism, waves, light, Earth science and nuclear physics) are outside this semester-1 project.*", ""]
    return "\n".join(L)

def readme_md():
    L = ["# 11th Grade Physics — Semester 1 Learning Project", "",
         "Physics & Earth Science (California NGSS course model). Semester 1: **Kinematics → Projectile Motion → Newton's Laws → Momentum → Work & Energy**. Semester 2 (not covered here): electricity, magnetism, waves, light, plate tectonics, earthquakes, nuclear physics.", "",
         "## What's in this repo", "",
         "| Path | Purpose |", "|---|---|",
         "| `site/index.html` | **Student-facing interactive app**: Cornell notes, most-missed-questions quizzes, resources, and a saved progress checklist (open in any browser; no install) |",
         "| `docs/01-…05-*.md` | Printable per-topic unit guides (instructor + student) with answer keys |",
         "| `docs/assessment.md` | Assessment criteria, rubric, progress tracker, standards coverage |",
         "| `tools/content/*.py` | Single source of truth for all content |",
         "| `tools/build.py` | Regenerates docs, README table, and `site/data.js` (`python3 tools/build.py`) |", "",
         "## Pacing overview (≈15 weeks)", "",
         "| # | Unit | Weeks | NGSS PEs |", "|---|---|---|---|"]
    for t in T:
        L.append(f"| {t['num']} | [{t['title']}](docs/{t['num']:02d}-{t['id']}.md) | {t['weeks']} | {', '.join(c for c, _ in t['ngss'])} |")
    L += ["", "## Project checklist", "", "Each topic: ", "",
          "1. ☐ Read the key concepts and learning objectives",
          "2. ☐ Complete the Cornell notes (cue column first, summary last)",
          "3. ☐ Take the most-missed-questions quiz; review every explanation; retake until ≥ 80%",
          "4. ☐ Work the practice problems",
          "5. ☐ Explore at least one simulation / resource",
          "6. ☐ Complete the lab or design challenge (CER write-up)",
          "7. ☐ Connect to one real-world application",
          "8. ☐ Self-assess against the rubric; instructor signs off", ""]
    for t in T:
        L += [f"### {t['num']}. {t['title']}", ""]
        L += [f"- [ ] {o}" for o in t["objectives"]]
        L += [f"- [ ] Quiz ≥ {PROFICIENCY}%", "- [ ] Lab complete", ""]
    L += ["## For instructors", "",
          "- Standards were drafted from the California NGSS HS-PS2 and HS-PS3 performance expectations; **verify wording against** <https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp> before publishing.",
          "- Kinematics and projectile motion are not standalone NGSS PEs; they build the mathematics needed for HS-PS2-1.",
          "- Quiz items target commonly missed concepts and list the misconception each distractor exposes; use results to plan reteaching.",
          "- Progress in the web app is stored locally in the student's browser (not sent anywhere); students can export it as text for submission.",
          "- Edit content in `tools/content/`, then run `python3 tools/build.py`.", "",
          "Open the app: `site/index.html` (or host the `site/` folder with GitHub Pages).", ""]
    return "\n".join(L)

def main():
    validate()
    (ROOT / "docs").mkdir(exist_ok=True)
    for t in T:
        (ROOT / "docs" / f"{t['num']:02d}-{t['id']}.md").write_text(topic_md(t))
    (ROOT / "docs" / "assessment.md").write_text(assessment_md())
    (ROOT / "README.md").write_text(readme_md())
    data = {"proficiency": PROFICIENCY, "topics": T}
    (ROOT / "site").mkdir(exist_ok=True)
    (ROOT / "site" / "data.js").write_text("window.PHYSICS_DATA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")
    print("built", len(T), "topics")

main()
