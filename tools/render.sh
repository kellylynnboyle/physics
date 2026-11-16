#!/bin/sh
# Rebuild everything and render the notes to PDF next to each .docx.
set -e
cd "$(dirname "$0")/.."
export NODE_PATH="$(npm root -g)"
${PYTHON:-python3} tools/figures.py
node tools/build_notes.js
node tools/build_site.js
for f in units/*/cornell-notes-*.docx; do
  zip -d "$f" '*/' >/dev/null 2>&1 || true
  soffice --headless --convert-to pdf --outdir "$(dirname "$f")" "$f" >/dev/null 2>&1
done
