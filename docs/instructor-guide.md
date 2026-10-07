# Instructor Guide

## Suggested unit flow (about 2–3 weeks per unit)
1. **Hook (day 1):** a short demo or phenomenon (e.g., drop vs. fire a ball for Projectile Motion).
2. **Direct instruction + Cornell notes:** students fill the notes from the [topic's Cornell template](../topics/); cue column written first.
3. **Simulation or lab:** use the PhET and lab ideas listed on each topic page. Have students predict, test, then explain.
4. **Practice:** practice problems with the problem-solving rubric; IXL for adaptive skills.
5. **Interactive quiz:** run as a warm-up or exit ticket. Review the misconception explanations as a class.
6. **Design project (units 4 and 5):** egg-drop collision device (HS-PS2-3); energy-conversion device (HS-PS3-3).
7. **Unit exam + re-assessment.**

## Sharing with students
- **GitHub Pages / any static host:** publish the `site/` folder. It has no server or build step.
- **Local:** open `site/index.html` in any browser. Progress saves per browser and device (nothing is sent anywhere).
- **Print/PDF:** each Cornell page has a Print button; the Markdown files in `topics/` also print cleanly.
- **LMS:** link to `site/index.html#kinematics` (or `#projectile`, `#newton`, `#momentum`, `#energy`).

## Editing content
All content is in `content/*.js` (one file per topic). After editing, run:

```
node scripts/build.js
```

This regenerates `topics/*/*.md` and `site/data.js`. Do not edit those generated files by hand. The script checks that every quiz question has four options, a valid answer, and an explanation.

## Notes on accuracy
- Calculations use g = 9.8 m/s² and ignore air resistance unless stated.
- Check the NGSS wording against the CDE page before distributing (see [course overview](course-overview.md)).
- Resource links point to site home pages so they do not break; search within each site for the named simulation or lesson.
