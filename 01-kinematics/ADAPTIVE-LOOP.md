# Kinematics Self-Improvement Loop

A spaced-repetition loop that runs on a schedule, quizzes the student on
whichever Kinematics concepts are weakest or most overdue, and adapts over
time. State lives in two git-tracked files in this folder so it survives
across separate runs of the scheduled task:

- `mastery-tracker.json` — per-concept progress (Leitner box, attempts, correct, last-seen date, any pending unanswered session)
- `question-bank.json` — the question pool (3 questions per concept, 24 total), tagged by `concept`

## The algorithm (what each scheduled firing must do)

1. **Read `mastery-tracker.json`.**

2. **If `pendingSession` is not null**, a previous round is unanswered:
   - Look back in the conversation for the student's answers to the questions listed in `pendingSession.questionIds`.
   - If found: grade them, update each concept's `attempts`/`correct`/`box`/`lastSeen` (see scoring rules below), clear `pendingSession`, append the result to `sessionLog`, commit the updated tracker.
   - If not found (student hasn't replied yet): don't pile on new questions. Gently re-surface the same pending questions in this turn's message instead of picking new ones, then stop — do not proceed to step 3 in this firing.

3. **Pick concepts to review**, using the Leitner schedule (`leitnerIntervalsDays`: box 1 = due every time, box 2 = every 2 days, box 3 = every 4 days, box 4 = every 8 days, box 5 = every 16 days):
   - A concept is "due" if `lastSeen` is null, or `today − lastSeen ≥ leitnerIntervalsDays[box]`.
   - Take up to 3 due concepts, prioritizing lowest box first, then oldest `lastSeen`.
   - If nothing is due (everything reviewed recently and boxes are high), pick the single lowest-box concept anyway so the loop stays useful — never send zero questions when it fires.

4. **Pick one question per chosen concept** from `question-bank.json`:
   - Prefer a question for that concept whose `id` is NOT `lastQuestionId` for that concept (rotate through the 3 before repeating).

5. **Ask the questions directly in the chat message** for this turn — plain text, 1 concept-based question each, no need for an artifact for a 2-3 question check-in. Don't reveal the answer yet.

6. **Set `pendingSession`** in the tracker to `{ "date": today, "questionIds": [...] }` and commit/push the updated `mastery-tracker.json` (and `question-bank.json`/this file if they changed).

7. **Notify** via the notification tool only if this is genuinely a scheduled/unattended firing (not a live reply in-conversation) — the student asked for this loop, so a short "quick kinematics check-in" ping is expected and welcome, not noise. Skip the notification if the student is actively in the conversation already.

## Scoring rules (step 2)

- Correct answer → `correct += 1`, `attempts += 1`, `box = min(box + 1, 5)`.
- Incorrect or skipped → `attempts += 1`, `box = 1` (reset to most-frequent review — this is the whole point: missed concepts come back fastest).
- Always set `lastSeen = today` and `lastQuestionId = <the id just answered>` for that concept, regardless of correct/incorrect.
- Append one entry to `sessionLog`: `{ date, concept, questionId, correct: true|false }`.

## Why this design

- **Leitner system** (a simple, well-established spaced-repetition scheme) means concepts the student keeps getting right get reviewed less often, and anything missed comes back almost immediately — time is spent where it's actually needed instead of re-covering things already mastered.
- **State lives in the repo, not the model's memory.** Because it's committed and pushed each round, the loop survives context compaction, session restarts, or a long gap between firings — the next run just reads the JSON.
- **Small dose per firing (1–3 questions)** keeps each check-in low-friction so it's sustainable as a recurring habit, rather than a full retest every time.
- **"Mastered" isn't a dead end.** Box 5 concepts still get reviewed every 16 days — this is spaced repetition, not a checklist to finish and forget.

## Wiring this into the scheduled task

This loop only runs when the *scheduled task prompt itself* tells it to follow
this file. There's no tool in this session that can edit that schedule's
stored prompt directly — that's configured wherever the schedule was created
(the claude.ai scheduled tasks UI). To activate the loop, replace or extend
that scheduled task's prompt with something like:

> Run the Kinematics self-improvement loop: follow the algorithm in
> `01-kinematics/ADAPTIVE-LOOP.md` in the physics repo exactly (grade any
> pending session first, then pick due concepts, ask 1-3 questions inline,
> update and push `mastery-tracker.json`). Keep the rest of the physics
> scheduled routine as-is otherwise.

A sensible firing interval is every 1-3 days — frequent enough to keep the
spaced-repetition schedule meaningful, infrequent enough not to be annoying.
