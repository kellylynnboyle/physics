#!/usr/bin/env python3
"""Build every shareable file in this project from tools/content/*.py.

    python3 tools/build.py          # markdown, diagrams, quiz page, data for the Word notes
    node tools/build_docx.js        # Cornell notes .docx for each unit (run after build.py)
"""
import csv, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from content import u1_kinematics, u2_projectile, u3_newton, u4_momentum, u5_energy  # noqa: E402
import diagrams  # noqa: E402

UNITS = [m.UNIT for m in (u1_kinematics, u2_projectile, u3_newton, u4_momentum, u5_energy)]
IXL_URLS = {"Physics": "https://www.ixl.com/science/physics", "Precalculus": "https://www.ixl.com/math/precalculus",
            "Grade 8": "https://www.ixl.com/science/grade-8"}
CONCEPT_BUILDERS = "https://www.physicsclassroom.com/Concept-Builders"
NGSS_URL = "https://www.cde.ca.gov/pd/ca/sc/ngssstandards.asp"
NGSS_PDF = "https://www.cde.ca.gov/pd/ca/sc/documents/ngsshsphyicalscidci.pdf"

MASTERY = [
    ("4", "Exceeds", "Solves unfamiliar or multi-step problems and explains the reasoning, including why the common wrong answer is wrong."),
    ("3", "Meets", "Solves standard problems correctly with units and can explain the idea in their own words."),
    ("2", "Approaching", "Solves problems with notes or a worked example open. Makes some setup or unit errors."),
    ("1", "Beginning", "Recognizes the vocabulary but cannot yet start a problem alone."),
]
EVIDENCE = [
    ("Cornell notes self-test", "Cover the Notes column and answer every cue aloud.", "Every cue answered from memory on two different days"),
    ("Most-missed quiz", "10 questions per unit, each built on a common misconception.", "8 of 10 or better (retake allowed after reviewing misses)"),
    ("IXL practice", "Skills listed in each unit's IXL Practice Plan.", "SmartScore 80 or higher on each listed skill"),
    ("Practice problems", "6 per unit with worked answers.", "5 of 6 correct with work and units shown"),
    ("Lab report", "One investigation per unit: claim, evidence, reasoning.", "Level 3 or higher on the lab rubric"),
    ("Unit test", "Teacher-written, covering all learning targets.", "70% or higher, with corrections for any missed target"),
]
LAB_RUBRIC = [
    ("Question and variables", "States the question and names the independent, dependent, and controlled variables."),
    ("Data", "Organized table with units, repeated trials, and measurements recorded to the precision of the tool."),
    ("Graph and analysis", "Correct axes and labels, best-fit line, slope or area interpreted with units."),
    ("Claim, evidence, reasoning", "Claim answers the question, cites specific data, and connects it to the physics principle."),
    ("Error and improvement", "Names real sources of error (not \"human error\") and one change that would reduce them."),
]


def strip_bold(s):
    return s.replace("**", "")


def all_ixl(u):
    seen, out = set(), []
    lab = u["lab"]
    groups = [("Labs", lab["ixl"])] + [(s["title"], s["ixl"]) for s in u["sections"]]
    for sec, items in groups:
        for code, name in items:
            if code not in seen:
                seen.add(code); out.append((code, name, sec))
    return out


def ixl_ranges(codes):
    """['Physics D.1','Physics D.2','Grade 8 H.1'] -> 'Physics D.1–2, Grade 8 H.1'"""
    groups, order = {}, []
    for c in codes:
        m = re.match(r"^(.*) ([A-Z]+)\.(\d+)$", c)
        if not m:
            if c not in order: order.append(c)
            continue
        key = (m.group(1), m.group(2))
        if key not in groups: groups[key] = []; order.append(key)
        groups[key].append(int(m.group(3)))
    parts = []
    for k in order:
        if isinstance(k, str): parts.append(k); continue
        nums = sorted(set(groups[k])); runs = []; s = p = nums[0]
        for n in nums[1:] + [None]:
            if n is not None and n == p + 1: p = n; continue
            runs.append(f"{s}–{p}" if p > s else f"{s}"); s = p = n
        parts.append(f"{k[0]} {k[1]}." + ", ".join(runs))
    return ", ".join(parts)


def w(path, text):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(text)
    print("wrote", path)


# ---------------------------------------------------------------- unit README
def unit_readme(u):
    L = [f"# Unit {u['num']}: {u['title']}", "",
         f"*{u['subtitle']} | {u['pacing']} | [Back to project outline](../../README.md)*", "",
         f"**Essential question:** {u['essential_question']}", "",
         "## Unit checklist", "",
         "- [ ] Read the [Cornell notes](cornell-notes.md) (or print the Word version in this folder)",
         "- [ ] Self-test: cover the Notes column and answer every cue aloud",
         "- [ ] Redraw each Visual Memory Aid from memory",
         f"- [ ] Take the [most-missed quiz](../../quizzes/index.html#{u['slug']}) and score 8/10 or better",
         "- [ ] Finish the practice problems below (5 of 6 correct)",
         "- [ ] Reach SmartScore 80+ on each IXL skill in the practice plan",
         "- [ ] Complete the lab and turn in the report",
         "- [ ] Rate yourself 1–4 on each learning target below", "",
         "## Learning targets", "",
         "| # | I can... | Self-rating (1–4) |", "|---|---|---|"]
    for i, t in enumerate(u["targets"], 1):
        L.append(f"| {u['num']}.{i} | {t[6:] if t.startswith('I can ') else t} | |")
    L += ["", "## Key concepts to master", "", "| Concept | What to know |", "|---|---|"]
    L += [f"| **{k}** | {v} |" for k, v in u["key_concepts"]]
    L += ["", "## NGSS connections", ""]
    L += [f"- **{c}**: {t}" for c, t in u["ngss"]]
    lab = u["lab"]
    L += ["", f"## Lab: {lab['title']}", "", f"**Question:** {lab['question']}", "",
          f"- **Independent variable:** {lab['iv']}", f"- **Dependent variable:** {lab['dv']}", f"- **Formula:** {lab['formula']}", ""]
    L += [f"{i}. {p}" for i, p in enumerate(lab["procedure"], 1)]
    L += ["", "## Practice problems", "", "Use g = 9.8 m/s². Show givens, equation, substitution, and units. Answers are hidden until you click.", ""]
    for i, (q, a) in enumerate(u["practice"], 1):
        L += [f"**{i}.** {q}", "", f"<details><summary>Answer</summary>{a}</details>", ""]
    L += ["## Most-missed questions", "",
          f"The [interactive quiz](../../quizzes/index.html#{u['slug']}) has 10 questions. Each one targets a common misconception:", ""]
    L += [f"- {q['trap']}" for q in u["quiz"]]
    L += ["", "## Learning resources", "", "| Resource | Use it for |", "|---|---|"]
    L += [f"| [{n}]({url}) | {d} |" for n, url, d in u["resources"]]
    L += [f"| [Physics Classroom Concept Builders]({CONCEPT_BUILDERS}) | Short interactive checks on single concepts. |"]
    L += ["", "## IXL practice plan (goal: SmartScore 80+)", "", "| Done | Skill | Skill name | Notes section |", "|---|---|---|---|"]
    L += [f"| ☐ | {c} | {n} | {s} |" for c, n, s in all_ixl(u)]
    L += ["", f"**No IXL match:** {u['no_ixl']}", "", "## Real-world applications", ""]
    L += [f"- {a}" for a in u["applications"]]
    return "\n".join(L) + "\n"


# ---------------------------------------------------------------- cornell notes (markdown)
def cornell_md(u):
    L = [f"# Cornell Notes: {u['title']}", "",
         f"*Physics | Unit {u['num']} | {u['subtitle']}*", "",
         "Name: ________________  Period: ______  Date: __________", "",
         "> A print-ready Word version with the same content is in this folder. "
         "Cover the right-hand column and answer each cue aloud to self-test.", "",
         "**Learning targets**", ""]
    L += [f"- {t}" for t in u["targets"]]
    L += ["", f"**Essential question:** {u['essential_question']}", ""]
    secs = u["sections"] + [lab_section(u)]
    for i, s in enumerate(secs, 1):
        L += [f"## {i}. {s['title']}", "", "| Cues / Questions | Notes |", "|---|---|"]
        for q, notes in s["cues"]:
            L.append(f"| **{q}** | " + "<br>".join("• " + n.replace("|", "\\|") for n in notes) + " |")
        L.append("")
        if s["ixl"]:
            L.append("**IXL practice (goal: SmartScore 80+):** " + "; ".join(f"**{c}** {n}" for c, n in s["ixl"]))
        else:
            L.append(f"**IXL practice:** no IXL skill fits this section. Use the [Physics Classroom Concept Builders]({CONCEPT_BUILDERS}).")
        L.append("")
    L += ["## Memory tricks", "", "| Trick or rule | When to use it |", "|---|---|"]
    L += [f"| **{a}** | {b} |" for a, b in u["mnemonics"]]
    L += ["", "## Summary", "", u["summary"], "", "## Visual memory aids", ""]
    for name, sentence, rule in u["visuals"]:
        L += [f"![{sentence}](images/{name}.png)", "", f"{sentence} **{rule}**", ""]
    L += ["## Study method", "",
          "1. Cover the Notes column and answer each cue aloud.",
          "2. Check, and mark the ones you missed.",
          "3. Redraw each visual memory aid from memory.",
          "4. Repeat the next day, and again a few days later. Recall spread over days builds memory that rereading does not.",
          "5. Finish the IXL plan to SmartScore 80+ before the test.", ""]
    return "\n".join(L)


def lab_section(u):
    lab = u["lab"]
    return dict(title="Labs and Measurement", ixl=lab["ixl"], cues=[
        (f"What question does the lab \"{lab['title']}\" answer, and what are its variables?", [
            f"Question: {lab['question']}",
            f"**Independent variable:** {lab['iv']}",
            f"**Dependent variable:** {lab['dv']}",
        ]),
        ("Which formula does the lab use, and what are the steps?", [f"**Formula:** {lab['formula']}"] + lab["procedure"]),
    ])


# ---------------------------------------------------------------- project docs
def readme():
    L = ["# Physics: Semester 1 Learning Project", "",
         "A shareable outline, notes, and practice set for 11th grade physics, first semester: "
         "kinematics, projectile motion, Newton's laws, momentum, and work and energy. "
         f"Learning goals follow the [California NGSS]({NGSS_URL}) high school physical science standards "
         "(Physics and Earth Science course model).", "",
         "## How to use this project", "",
         "**Students:** work through one unit at a time. Each unit folder has a checklist. "
         "Read the Cornell notes, self-test with the cue column, take the most-missed quiz, then do the practice problems and IXL skills.", "",
         "**Instructors:** each unit lists learning targets, NGSS connections, a lab, and assessment evidence. "
         "Track progress with the [mastery scale and tracker](docs/learning-objectives-and-assessment.md).", "",
         "## Course outline", "",
         "| Unit | Topic | Pacing | Notes | Quiz | NGSS |", "|---|---|---|---|---|---|"]
    for u in UNITS:
        codes = ", ".join(c for c, _ in u["ngss"] if c.startswith("HS-"))
        L.append(f"| {u['num']} | [{u['title']}](units/{u['id']}/README.md) | {u['pacing']} | "
                 f"[Markdown](units/{u['id']}/cornell-notes.md) · [Word](units/{u['id']}/Cornell-Notes-{u['slug']}.docx) | "
                 f"[10 questions](quizzes/index.html#{u['slug']}) | {codes} |")
    L += ["", "The interactive quizzes are one page: open `quizzes/index.html` in any browser. It works offline and remembers scores on that device.", "",
          "## Semester checklist", ""]
    for u in UNITS:
        L += [f"### Unit {u['num']}: {u['title']} ({u['pacing']})", "", f"*{u['essential_question']}*", ""]
        L += [f"- [ ] {t}" for t in u["targets"]]
        L += [f"- [ ] Most-missed quiz at 8/10 or better", f"- [ ] Lab: {u['lab']['title']}", ""]
    L += ["## What is in each unit folder", "",
          "| File | What it is |", "|---|---|",
          "| `README.md` | Unit overview: checklist, learning targets, key concepts, lab, practice problems with answers, resources, IXL plan, real-world applications |",
          "| `cornell-notes.md` | Cornell notes that read in the browser: cue questions, notes with worked examples, memory tricks, summary, diagrams |",
          "| `Cornell-Notes-<unit>.docx` | The same notes as a print-ready Word document with an IXL practice checklist |",
          "| `images/` | Diagrams used in the notes |", "",
          "## Project documents", "",
          "- [Learning objectives and assessment criteria](docs/learning-objectives-and-assessment.md)",
          "- [NGSS standards map](docs/standards-map.md)",
          "- [Progress tracker (CSV, opens in Sheets or Excel)](docs/progress-tracker.csv)", "",
          "## Second semester", "",
          "Electricity, magnetism, waves, light, plate tectonics, earthquakes, and nuclear physics are not built yet. "
          "The same structure can be extended by adding a file to `tools/content/`.", "",
          "## Rebuilding", "",
          "All content lives in `tools/content/`. After editing it, run:", "",
          "```", "pip install matplotlib", "python3 tools/build.py", "node tools/build_docx.js   # needs the docx npm package", "```", "",
          "## Notes for the instructor", "",
          "- Learning targets and essential questions were written for this project from the course description and the NGSS. Check them against what you post for your class.",
          "- The \"most-missed\" quiz questions are built on well-documented physics misconceptions (the kind tested by the Force Concept Inventory), not on your own class's test data. Swap in your own missed questions in `tools/content/` when you have them.",
          "- IXL skill codes were copied from the live IXL pages in November 2026. IXL renumbers skills from time to time.", ""]
    return "\n".join(L)


def assessment_md():
    L = ["# Learning Objectives and Assessment Criteria", "", "[Back to project outline](../README.md)", "",
         "## Mastery scale", "", "Every learning target is rated on the same four-level scale.", "",
         "| Level | Name | What it looks like |", "|---|---|---|"]
    L += [f"| {a} | {b} | {c} |" for a, b, c in MASTERY]
    L += ["", "A target counts as **mastered** at level 3 or 4.", "",
          "## Evidence collected in every unit", "", "| Evidence | What it is | Criterion for success |", "|---|---|---|"]
    L += [f"| {a} | {b} | {c} |" for a, b, c in EVIDENCE]
    L += ["", "**Unit complete** when the quiz, practice problems, and IXL criteria are met, the lab report is at level 3 or higher, "
          "and every learning target is self-rated and teacher-rated at level 3 or higher.", "",
          "## Lab report rubric", "", "Each row is scored 1–4 on the mastery scale.", "", "| Criterion | Level 3 (Meets) looks like |", "|---|---|"]
    L += [f"| {a} | {b} |" for a, b in LAB_RUBRIC]
    L += ["", "## Learning objectives by unit", ""]
    for u in UNITS:
        L += [f"### Unit {u['num']}: {u['title']}", "",
              "| # | Objective | NGSS | Quiz questions that check it |", "|---|---|---|---|"]
        main = next((c for c, _ in u["ngss"] if c.startswith("HS-")), "")
        for i, t in enumerate(u["targets"]):
            qs = ", ".join(f"Q{j + 1}" for j, q in enumerate(u["quiz"]) if q["lo"] == i) or "Lab report"
            L.append(f"| {u['num']}.{i + 1} | {t} | {main} | {qs} |")
        L.append("")
    L += ["## Tracking progress", "",
          "- **Students** tick the checklist in each unit README and self-rate each target 1–4.",
          "- **Instructors** record levels in [progress-tracker.csv](progress-tracker.csv): one row per student per learning target.",
          "- The quiz page shows each student which misconceptions they missed, so reteaching can target those ideas.", ""]
    return "\n".join(L)


def standards_md():
    L = ["# NGSS Standards Map", "", "[Back to project outline](../README.md)", "",
         f"Source: [NGSS for California Public Schools, K–12]({NGSS_URL}) and "
         f"[Grades 9–12 Physical Science by Disciplinary Core Idea (PDF)]({NGSS_PDF}).", "",
         "| Unit | Standard or practice | How the unit addresses it |", "|---|---|---|"]
    for u in UNITS:
        for c, t in u["ngss"]:
            L.append(f"| {u['num']}. {u['title']} | **{c}** | {t} |")
    L += ["", "No high school performance expectation names kinematics or projectile motion directly. "
          "Units 1 and 2 build the motion and data skills that HS-PS2-1 depends on.", "",
          "Second-semester standards (HS-PS2-4, HS-PS2-5, HS-PS3-5, HS-PS4, HS-ESS1, HS-ESS2, HS-PS1-8) are outside this project.", ""]
    return "\n".join(L)


def tracker_csv():
    path = os.path.join(ROOT, "docs/progress-tracker.csv")
    with open(path, "w", newline="", encoding="utf-8") as f:
        wr = csv.writer(f)
        wr.writerow(["Student", "Unit", "Target", "Learning target", "Self-rating (1-4)", "Teacher rating (1-4)",
                     "Quiz score (/10)", "IXL plan done (Y/N)", "Practice problems (/6)", "Lab rubric (1-4)", "Unit test (%)", "Notes"])
        for u in UNITS:
            for i, t in enumerate(u["targets"], 1):
                wr.writerow(["", f"{u['num']}. {u['title']}", f"{u['num']}.{i}", t, "", "", "", "", "", "", "", ""])
    print("wrote docs/progress-tracker.csv")


# ---------------------------------------------------------------- quiz page
def app_html():
    data = []
    for u in UNITS:
        secs = u["sections"] + [lab_section(u)]
        data.append(dict(
            slug=u["slug"], num=u["num"], title=u["title"], subtitle=u["subtitle"], pacing=u["pacing"], eq=u["essential_question"],
            targets=u["targets"], concepts=u["key_concepts"],
            cues=[dict(section=s["title"], q=q, notes=n) for s in secs for q, n in s["cues"]],
            quiz=u["quiz"], practice=u["practice"], resources=u["resources"], apps=u["applications"],
            ngss=[c for c, _ in u["ngss"] if c.startswith("HS-")],
        ))
    tpl = open(os.path.join(ROOT, "tools/app_template.html"), encoding="utf-8").read()
    body = tpl.replace("/*__DATA__*/null", json.dumps(data, ensure_ascii=False).replace("</", "<\\/"))
    full = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n</head>\n<body>\n'
            + body + "\n</body>\n</html>\n")
    w("quizzes/index.html", full)
    frag = os.environ.get("ARTIFACT_OUT")
    if frag:
        with open(frag, "w", encoding="utf-8") as f:
            f.write(body)
        print("wrote", frag)


def main():
    os.makedirs(os.path.join(ROOT, "tools/.build"), exist_ok=True)
    for u in UNITS:
        base = f"units/{u['id']}"
        os.makedirs(os.path.join(ROOT, base, "images"), exist_ok=True)
        for name, _, _ in u["visuals"]:
            diagrams.render(name, os.path.join(ROOT, base, "images", name + ".png"))
        w(f"{base}/README.md", unit_readme(u))
        w(f"{base}/cornell-notes.md", cornell_md(u))
        secs = u["sections"] + [lab_section(u)]
        codes = lambda s: ixl_ranges([c for c, _ in s["ixl"]])
        j = dict(u, sections=secs, ixl_plan=all_ixl(u),
                 outline=[dict(title=f"{i}. {s['title']}", cues=" • ".join(q for q, _ in s["cues"]), ixl=codes(s))
                          for i, s in enumerate(secs, 1)],
                 image_dir=os.path.join(ROOT, base, "images"),
                 out=os.path.join(ROOT, base, f"Cornell-Notes-{u['slug']}.docx"))
        with open(os.path.join(ROOT, "tools/.build", u["id"] + ".json"), "w", encoding="utf-8") as f:
            json.dump(j, f, ensure_ascii=False)
    w("README.md", readme())
    w("docs/learning-objectives-and-assessment.md", assessment_md())
    w("docs/standards-map.md", standards_md())
    tracker_csv()
    app_html()


if __name__ == "__main__":
    main()
