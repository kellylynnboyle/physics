#!/bin/sh
# Renders every Cornell notes .docx to PDF and page images for a visual check.
# Usage: tools/render-check.sh <empty output dir>
set -e
OUT="$1"; mkdir -p "$OUT"
for f in units/*/*.docx; do soffice --headless --convert-to pdf --outdir "$OUT" "$f" >/dev/null 2>&1; done
for p in "$OUT"/*.pdf; do echo "$(basename "$p"): $(pdfinfo "$p" | grep Pages)"; pdftoppm -jpeg -r 50 "$p" "${p%.pdf}"; done
