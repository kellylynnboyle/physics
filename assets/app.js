// Shared helpers for the Physics Semester 1 site. No dependencies.
const UNITS = (globalThis.UNITS || []).sort((a, b) => a.num - b.num);

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}
// Escape, then turn **bold** into <strong>.
function fmt(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }

function unitFromUrl() {
  const id = new URLSearchParams(location.search).get("unit");
  return UNITS.find(u => u.id === id) || null;
}

// Progress lives in this browser only (localStorage). Everything works without it.
const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem("phys1:" + key); return v === null ? fallback : JSON.parse(v); }
    catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem("phys1:" + key, JSON.stringify(value)); } catch (e) { /* private mode */ }
  }
};

// The five checkpoints tracked for every unit.
const CHECKPOINTS = [
  ["notes", "Cornell notes: answered every cue aloud with the Notes column covered"],
  ["quiz", "Most-missed quiz: scored 80% or higher"],
  ["problems", "Practice problems: completed and checked against the answers"],
  ["lab", "Lab: completed and written up (claim, evidence, reasoning)"],
  ["ixl", "IXL skills for this unit: SmartScore 80+"]
];
