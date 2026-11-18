"""Draws the Visual Memory Aid panels for every unit (PNG, 200 dpi).
Usage: python3 tools/diagrams.py <output_dir>
"""
import sys, os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Circle, Polygon

OUT = sys.argv[1] if len(sys.argv) > 1 else "tools/build/img"
os.makedirs(OUT, exist_ok=True)
NAVY, RED, GREEN, GRAY, ORANGE = "#1F3864", "#C00000", "#2E7D32", "#7F7F7F", "#C55A11"
plt.rcParams.update({"font.size": 8, "font.family": "DejaVu Sans", "axes.spines.top": False,
                     "axes.spines.right": False, "axes.linewidth": 0.8})


def fig(w=3.6, h=2.6):
    f, ax = plt.subplots(figsize=(w, h))
    return f, ax


def save(f, name):
    f.tight_layout(pad=0.6)
    f.savefig(os.path.join(OUT, name), dpi=200)
    plt.close(f)


def blank(ax, xlim, ylim):
    ax.set_xlim(*xlim); ax.set_ylim(*ylim); ax.axis("off"); ax.set_aspect("equal")


def arrow(ax, x, y, dx, dy, color=NAVY, lw=1.8, label=None, lpos=None, ha="center", va="center", fs=8):
    ax.annotate("", xy=(x + dx, y + dy), xytext=(x, y),
                arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, shrinkA=0, shrinkB=0, mutation_scale=10))
    if label:
        lx, ly = lpos if lpos else (x + dx, y + dy)
        ax.text(lx, ly, label, color=color, ha=ha, va=va, fontsize=fs)


def graph_axes(ax, xl, yl):
    ax.set_xlabel(xl); ax.set_ylabel(yl); ax.set_xticks([]); ax.set_yticks([])


# ---------------- Unit 1: Kinematics ----------------
f, ax = fig()
t = np.linspace(0, 5, 50)
ax.plot(t, 0 * t + 2.0, color=GRAY, lw=2); ax.text(5.1, 2.0, "at rest\n(flat)", color=GRAY, va="center")
ax.plot(t, 1.2 * t, color=NAVY, lw=2); ax.text(5.1, 6.0, "constant\nvelocity", color=NAVY, va="center")
ax.plot(t, 0.38 * t ** 2, color=RED, lw=2); ax.text(5.1, 9.5, "speeding\nup (curve)", color=RED, va="center")
ax.set_xlim(0, 7.4); ax.set_ylim(0, 10.5); graph_axes(ax, "time (s)", "position (m)")
ax.set_title("Position-time graph", fontsize=9, color=NAVY)
save(f, "u1a.png")

f, ax = fig()
ax.plot([0, 5], [0, 10], color=NAVY, lw=2)
ax.fill_between([0, 5], [0, 10], color="#D9E2F3")
ax.text(3.3, 2.6, "area =\ndisplacement\n½ × 5 × 10 = 25 m", ha="center", color=NAVY)
ax.text(1.9, 7.2, "slope = acceleration\n10 ÷ 5 = 2 m/s²", ha="center", color=RED)
ax.set_xlim(0, 5.6); ax.set_ylim(0, 11.5); ax.set_xticks([0, 5]); ax.set_yticks([0, 10])
ax.set_xlabel("time (s)"); ax.set_ylabel("velocity (m/s)")
ax.set_title("Velocity-time graph", fontsize=9, color=NAVY)
save(f, "u1b.png")

f, ax = fig()
blank(ax, (-0.5, 10.5), (0, 6))
for i in range(6):
    ax.add_patch(Circle((0.5 + 1.8 * i, 4.4), 0.16, color=NAVY))
    if i < 5:
        arrow(ax, 0.75 + 1.8 * i, 4.4, 1.2, 0, NAVY, 1.2)
ax.text(5, 5.4, "Constant velocity: equal spacing, equal arrows", ha="center", color=NAVY)
xs = [0.3, 1.2, 2.5, 4.2, 6.3, 8.8]
for i, x in enumerate(xs):
    ax.add_patch(Circle((x, 1.6), 0.16, color=RED))
    if i < 5:
        arrow(ax, x + 0.25, 1.6, (xs[i + 1] - x) - 0.5, 0, RED, 1.2)
ax.text(5, 2.6, "Speeding up: spacing and arrows grow", ha="center", color=RED)
ax.text(5, 0.5, "one dot per equal time step", ha="center", color=GRAY, style="italic")
save(f, "u1c.png")

f, ax = fig()
blank(ax, (-4.5, 6.5), (-48, 5))
ax.set_aspect("auto")
for tt in range(4):
    d = 4.9 * tt ** 2
    ax.add_patch(plt.Circle((0, -d), 0.0, color=NAVY))
    ax.plot(0, -d, "o", color=NAVY, ms=7)
    ax.text(-0.6, -d, f"t = {tt} s", ha="right", va="center", color=GRAY)
    ax.text(1.6, -d, f"v = {9.8 * tt:.1f} m/s,  fallen {d:.1f} m", ha="left", va="center", color=NAVY, fontsize=7.5)
    if tt:
        ax.annotate("", xy=(0.8, -d - 2.2 * tt), xytext=(0.8, -d), arrowprops=dict(arrowstyle="-|>", color=RED, lw=1.5))
ax.set_title("Free fall from rest (g = 9.8 m/s²)", fontsize=9, color=NAVY)
save(f, "u1d.png")

# ---------------- Unit 2: Projectile motion ----------------
f, ax = fig()
blank(ax, (-0.8, 6.6), (-0.9, 4.2))
vx, vy = 5.2, 3.0
arrow(ax, 0, 0, vx, vy, NAVY, 2.2)
arrow(ax, 0, 0, vx, 0, GREEN, 1.8)
arrow(ax, vx, 0, 0, vy, RED, 1.8)
ax.text(2.2, 1.9, "v", color=NAVY, fontsize=11, ha="center", weight="bold")
ax.text(vx / 2, -0.45, "vx = v cos θ", color=GREEN, ha="center")
ax.text(vx + 0.15, vy / 2, "vy =\nv sin θ", color=RED, ha="left", va="center")
ax.text(1.25, 0.28, "θ", fontsize=10)
ax.add_patch(Rectangle((vx - 0.3, 0), 0.3, 0.3, fill=False, lw=0.8))
save(f, "u2a.png")

f, ax = fig()
ax.set_aspect("equal"); ax.axis("off")
T = 2.0
tt = np.linspace(0, T, 100)
vx0, vy0 = 3.0, 4.9 * T / 2 * 1.0
x = vx0 * tt; y = vy0 * tt - 0.5 * 4.9 * tt ** 2
ax.plot(x, y, color=GRAY, lw=1.2, ls="--")
for tk in [0.0, 0.5, 1.0, 1.5, 2.0]:
    px, py = vx0 * tk, vy0 * tk - 0.5 * 4.9 * tk ** 2
    ax.plot(px, py, "o", color=NAVY, ms=5)
    arrow(ax, px, py, 0.9, 0, GREEN, 1.5)
    vyk = (vy0 - 4.9 * tk) * 0.22
    if abs(vyk) > 0.02:
        arrow(ax, px, py, 0, vyk, RED, 1.5)
ax.text(3.0, 2.9, "top: vy = 0, still moving at vx", ha="center", color=NAVY, fontsize=7.5)
ax.text(3.0, -1.75, "green = vx (never changes)\nred = vy (changes by 9.8 m/s each second)", ha="center", fontsize=7, color=GRAY)
ax.set_xlim(-0.4, 7.2); ax.set_ylim(-2.3, 3.3)
save(f, "u2b.png")

f, ax = fig()
ax.axis("off")
ax.add_patch(Rectangle((-1.6, -5.2), 1.6, 5.2, color="#D9D9D9"))
ax.plot([-1.6, 8], [-5.2, -5.2], color=GRAY, lw=1.5)
for k in range(5):
    tk = k * 0.25
    yk = -4.9 * tk ** 2 * 1.06
    ax.plot([0.25, 1.8 * k + 0.9], [yk, yk], color="#BFBFBF", lw=0.6, ls=":")
    ax.plot(0.25, yk, "o", color=RED, ms=6)
    ax.plot(1.8 * k + 0.9, yk, "o", color=NAVY, ms=6)
ax.text(0.25, 0.55, "dropped", color=RED, ha="center")
ax.text(3.6, 0.55, "launched horizontally", color=NAVY, ha="center")
ax.text(4.6, -4.6, "same height at every instant:\nboth land together", color=GRAY, ha="center", fontsize=7.5)
ax.set_xlim(-1.8, 8.6); ax.set_ylim(-5.6, 1.1)
save(f, "u2c.png")

f, ax = fig()
v = 10.0
for ang, col in [(30, GREEN), (45, NAVY), (60, RED)]:
    th = np.radians(ang)
    T = 2 * v * np.sin(th) / 9.8
    tt = np.linspace(0, T, 100)
    ax.plot(v * np.cos(th) * tt, v * np.sin(th) * tt - 4.9 * tt ** 2, color=col, lw=2)
    tm = T / 2
    ax.text(v * np.cos(th) * tm, v * np.sin(th) * tm - 4.9 * tm ** 2 + 0.22, f"{ang}°", color=col, ha="center", weight="bold")
ax.set_xlim(0, 11); ax.set_ylim(0, 4.6); ax.set_aspect("equal")
ax.set_xlabel("horizontal distance (m), launch speed 10 m/s"); ax.set_ylabel("height (m)")
ax.set_title("Range and launch angle", fontsize=9, color=NAVY)
save(f, "u2d.png")

# ---------------- Unit 3: Newton's laws ----------------
def box(ax, x=0, y=0, w=1.6, h=1.1, label=None):
    ax.add_patch(Rectangle((x - w / 2, y - h / 2), w, h, facecolor="#D9E2F3", edgecolor=NAVY, lw=1.2))
    if label:
        ax.text(x, y, label, ha="center", va="center", color=NAVY, fontsize=7.5)

f, ax = fig()
blank(ax, (-4, 4), (-3.6, 3.6))
box(ax, label="book")
arrow(ax, 0, 0.55, 0, 2.0, GREEN, 2, "Fnorm", (0.25, 2.3), ha="left")
arrow(ax, 0, -0.55, 0, -2.0, RED, 2, "Fgrav", (0.25, -2.3), ha="left")
ax.text(-3.8, 3.1, "At rest: forces balance", color=NAVY, ha="left", weight="bold")
ax.text(-3.8, -3.3, "equal arrows, Fnet = 0", color=GRAY, ha="left", style="italic")
save(f, "u3a.png")

f, ax = fig()
blank(ax, (-4.6, 4.8), (-3.6, 3.6))
box(ax, label="crate")
arrow(ax, 0, 0.55, 0, 1.7, GREEN, 2, "Fnorm", (0.25, 2.0), ha="left")
arrow(ax, 0, -0.55, 0, -1.7, RED, 2, "Fgrav", (0.25, -2.0), ha="left")
arrow(ax, 0.8, 0, 2.6, 0, NAVY, 2, "Fapp = 30 N", (2.3, 0.45))
arrow(ax, -0.8, 0, -0.95, 0, ORANGE, 2, "Ffrict\n= 10 N", (-2.9, 0), ha="center")
ax.text(-4.4, 3.1, "Unbalanced: accelerates right", color=NAVY, ha="left", weight="bold")
ax.text(-4.4, -3.3, "Fnet = 20 N right;  5.0 kg → a = 4.0 m/s²", color=GRAY, ha="left", style="italic", fontsize=7.5)
save(f, "u3b.png")

f, ax = fig()
blank(ax, (-5, 5), (-3.2, 3.2))
ax.add_patch(Rectangle((-3.4, -0.7), 3.0, 1.6, facecolor="#D9E2F3", edgecolor=NAVY, lw=1.2))
ax.text(-1.9, 0.1, "truck (A)", ha="center", va="center", color=NAVY)
ax.add_patch(Rectangle((0.4, -0.7), 1.5, 1.0, facecolor="#FCE4D6", edgecolor=ORANGE, lw=1.2))
ax.text(1.15, -0.2, "car (B)", ha="center", va="center", color=ORANGE, fontsize=7.5)
arrow(ax, 1.15, 1.0, 2.4, 0, RED, 2, "force of A on B", (2.3, 1.5))
arrow(ax, -1.9, 1.6, -2.4, 0, RED, 2, "force of B on A", (-3.1, 2.1))
ax.text(0, 2.85, "Third-law pair: same size, opposite direction", color=NAVY, ha="center", weight="bold", fontsize=7.5)
ax.text(0, -2.3, "The two forces act on different objects,\nso they never cancel each other.", color=GRAY, ha="center", style="italic", fontsize=7.5)
save(f, "u3c.png")

f, ax = fig()
blank(ax, (-4, 4), (-3.6, 3.6))
ax.add_patch(Circle((0, 0), 0.45, facecolor="#D9E2F3", edgecolor=NAVY, lw=1.2))
ax.text(-0.7, 0, "skydiver", ha="right", va="center", color=NAVY, fontsize=7.5)
arrow(ax, 0, 0.45, 0, 2.0, ORANGE, 2, "Fair = 784 N", (0.25, 2.2), ha="left")
arrow(ax, 0, -0.45, 0, -2.0, RED, 2, "Fgrav = 784 N", (0.25, -2.2), ha="left")
ax.text(-3.8, 3.1, "Terminal velocity (80 kg)", color=NAVY, ha="left", weight="bold")
ax.text(-3.8, -3.3, "Fnet = 0: speed is constant, not zero", color=GRAY, ha="left", style="italic")
save(f, "u3d.png")

# ---------------- Unit 4: Momentum ----------------
f, ax = fig()
ax.fill_between([0.5, 0.5, 1.0, 1.0], [0, 8, 8, 0], color="#F8CBAD", edgecolor=RED, lw=1.5)
ax.fill_between([2.2, 2.2, 6.2, 6.2], [0, 1, 1, 0], color="#D9E2F3", edgecolor=NAVY, lw=1.5)
ax.text(1.25, 6.6, "hard stop:\nbig force, short time", color=RED, ha="left")
ax.text(4.2, 1.6, "cushioned stop:\nsmall force, long time", color=NAVY, ha="center")
ax.text(4.3, 4.3, "same area = same impulse", color=GRAY, ha="center", style="italic")
ax.set_xlim(0, 7); ax.set_ylim(0, 9.5); graph_axes(ax, "time", "force")
ax.set_title("Force-time graph", fontsize=9, color=NAVY)
save(f, "u4a.png")

def cart(ax, x, y, w, label, col=NAVY, face="#D9E2F3"):
    ax.add_patch(Rectangle((x - w / 2, y), w, 0.8, facecolor=face, edgecolor=col, lw=1.2))
    ax.text(x, y + 0.4, label, ha="center", va="center", color=col, fontsize=7.5)
    for dx in (-w / 3.2, w / 3.2):
        ax.add_patch(Circle((x + dx, y - 0.12), 0.13, color=col))

f, ax = fig()
blank(ax, (-0.5, 10), (-0.9, 5.6))
ax.text(0, 5.0, "BEFORE", color=GRAY, weight="bold", ha="left")
cart(ax, 1.8, 3.4, 2.0, "2.0 kg"); arrow(ax, 2.9, 3.8, 1.5, 0, RED, 1.8, "3.0 m/s", (3.7, 4.3))
cart(ax, 7.0, 3.4, 1.4, "1.0 kg", ORANGE, "#FCE4D6"); ax.text(7.0, 4.5, "at rest", color=ORANGE, ha="center")
ax.text(9.9, 2.85, "p = 6.0 kg·m/s", color=NAVY, ha="right", fontsize=7.5)
ax.plot([-0.3, 9.9], [2.5, 2.5], color="#BFBFBF", lw=0.8)
ax.text(0, 1.9, "AFTER (stuck together)", color=GRAY, weight="bold", ha="left")
cart(ax, 3.4, 0.3, 2.0, "2.0 kg"); cart(ax, 5.1, 0.3, 1.4, "1.0 kg", ORANGE, "#FCE4D6")
arrow(ax, 5.9, 0.7, 1.0, 0, RED, 1.8, "2.0 m/s", (6.5, 1.2))
ax.text(9.9, -0.55, "p = 3.0 × 2.0 = 6.0 kg·m/s", color=NAVY, ha="right", fontsize=7.5)
save(f, "u4b.png")

f, ax = fig()
blank(ax, (-0.5, 10), (-0.9, 5.6))
ax.text(0, 5.0, "BEFORE (at rest, spring compressed)", color=GRAY, weight="bold", ha="left")
cart(ax, 3.9, 3.3, 2.0, "2.0 kg"); cart(ax, 5.6, 3.3, 1.4, "1.0 kg", ORANGE, "#FCE4D6")
ax.text(9.9, 2.85, "total p = 0", color=NAVY, ha="right", fontsize=7.5)
ax.plot([-0.3, 9.9], [2.5, 2.5], color="#BFBFBF", lw=0.8)
ax.text(0, 1.9, "AFTER", color=GRAY, weight="bold", ha="left")
cart(ax, 2.6, 0.3, 2.0, "2.0 kg"); arrow(ax, 1.5, 0.7, -1.0, 0, RED, 1.8, "1.0 m/s", (0.9, 1.2))
cart(ax, 7.0, 0.3, 1.4, "1.0 kg", ORANGE, "#FCE4D6"); arrow(ax, 7.8, 0.7, 1.7, 0, RED, 1.8, "2.0 m/s", (8.7, 1.2))
ax.text(9.9, -0.55, "−2.0 + 2.0 = 0 kg·m/s", color=NAVY, ha="right", fontsize=7.5)
save(f, "u4c.png")

f, ax = fig()
blank(ax, (-0.5, 10), (-0.6, 5.6))
ax.add_patch(Rectangle((9.0, -0.3), 0.5, 5.6, color="#BFBFBF"))
ax.text(0, 5.0, "Ball that STOPS (0.50 kg)", color=NAVY, weight="bold", ha="left")
ax.plot(3.0, 3.9, "o", color=NAVY, ms=9); arrow(ax, 3.4, 3.9, 2.4, 0, NAVY, 1.8, "in: 6.0 m/s", (4.6, 4.4))
ax.text(0, 3.0, "Δp = 0.50 × (0 − 6.0) = −3.0 kg·m/s", color=NAVY, ha="left", fontsize=7.5)
ax.plot([-0.3, 8.8], [2.6, 2.6], color="#BFBFBF", lw=0.8)
ax.text(0, 2.0, "Ball that BOUNCES (0.50 kg)", color=RED, weight="bold", ha="left")
ax.plot(5.2, 1.0, "o", color=RED, ms=9); arrow(ax, 5.6, 1.15, 2.4, 0, RED, 1.8, "in: 6.0 m/s", (7.0, 1.6))
arrow(ax, 4.8, 0.85, -1.6, 0, RED, 1.8, "out: 4.0 m/s", (3.6, 1.4))
ax.text(0, 0.0, "Δp = 0.50 × (−4.0 − 6.0) = −5.0 kg·m/s", color=RED, ha="left", fontsize=7.5)
save(f, "u4d.png")

# ---------------- Unit 5: Work and energy ----------------
f, ax = fig()
blank(ax, (-1, 9.5), (-1.6, 4.4))
ax.plot([-1, 9.5], [0, 0], color=GRAY, lw=1.2)
ax.add_patch(Rectangle((0.2, 0.05), 2.2, 0.9, facecolor="#D9E2F3", edgecolor=NAVY, lw=1.2))
ax.text(1.3, 0.5, "sled", ha="center", va="center", color=NAVY)
Fx, Fy = 3.6, 2.08
arrow(ax, 2.4, 0.6, Fx, Fy, NAVY, 2.2, "F = 50 N", (4.0, 2.75))
arrow(ax, 2.4, 0.6, Fx, 0, GREEN, 1.8)
ax.plot([2.4 + Fx, 2.4 + Fx], [0.6, 0.6 + Fy], color=GRAY, ls=":", lw=1)
ax.text(4.7, 0.25, "F cos θ (does the work)", color=GREEN, ha="center", va="center", fontsize=7.5)
ax.text(3.5, 0.9, "30°", fontsize=7.5)
arrow(ax, 0.2, -0.8, 8.4, 0, RED, 1.5, "displacement d = 10 m", (4.4, -1.25))
ax.text(4.2, 3.9, "W = 50 × 10 × cos 30° = 433 J", color=NAVY, ha="center", weight="bold")
save(f, "u5a.png")

f, ax = fig()
ax.plot([0, 5], [0, 20], color=NAVY, lw=2)
ax.fill_between([0, 5], [0, 20], color="#D9E2F3")
ax.text(3.4, 5.0, "area = work\n½ × 5.0 × 20 = 50 J", ha="center", color=NAVY)
ax.set_xlim(0, 5.6); ax.set_ylim(0, 23); ax.set_xticks([0, 5]); ax.set_yticks([0, 20])
ax.set_xlabel("distance (m)"); ax.set_ylabel("force (N)")
ax.set_title("Force-distance graph", fontsize=9, color=NAVY)
save(f, "u5b.png")

f, ax = fig()
ax.axis("off")
xx = np.linspace(0, 10, 200)
hill = 2.0 * (1 + np.cos(np.pi * xx / 10))
ax.plot(xx, hill, color=GRAY, lw=2)
ax.plot([0, 10.6], [0, 0], color="#BFBFBF", lw=0.8)
for xp, pe, ke, lab in [(0.0, 1.0, 0.0, "top"), (5.0, 0.5, 0.5, "halfway"), (10.0, 0.0, 1.0, "bottom")]:
    hp = 2.0 * (1 + np.cos(np.pi * xp / 10))
    ax.plot(xp, hp + 0.18, "o", color=NAVY, ms=7)
    bx = xp - 0.55 + (0.9 if xp == 0 else (-0.9 if xp == 10 else 0))
    base = 5.0
    ax.add_patch(Rectangle((bx, base), 0.5, 2.0 * pe + 0.02, color=GREEN))
    ax.add_patch(Rectangle((bx + 0.6, base), 0.5, 2.0 * ke + 0.02, color=RED))
    ax.text(bx + 0.25, base - 0.35, "PE", color=GREEN, ha="center", fontsize=7)
    ax.text(bx + 0.85, base - 0.35, "KE", color=RED, ha="center", fontsize=7)
    ax.text(bx + 0.55, 7.35, lab, color=NAVY, ha="center", fontsize=7.5)
ax.text(5.2, 8.1, "Bars change, total stays the same (no friction)", color=NAVY, ha="center", weight="bold", fontsize=7.5)
ax.set_xlim(-0.6, 11); ax.set_ylim(-0.3, 8.6)
save(f, "u5c.png")

f, ax = fig()
vals = [("PE\n(top)", 1470, GREEN, 0.6), ("KE\n(bottom)", 900, RED, 2.6), ("thermal\n(bottom)", 570, ORANGE, 3.6)]
for lab, val, col, xp in vals:
    ax.bar(xp, val, width=0.8, color=col)
    ax.text(xp, val + 30, f"{val} J", ha="center", color=col, fontsize=7.5)
ax.set_xticks([v[3] for v in vals]); ax.set_xticklabels([v[0] for v in vals])
ax.axvline(1.6, color="#BFBFBF", lw=0.8, ls="--")
ax.set_ylim(0, 1800); ax.set_yticks([]); ax.set_ylabel("energy")
ax.text(0.6, 1680, "START", color=GRAY, ha="center", weight="bold")
ax.text(3.1, 1680, "END: 900 + 570 = 1470 J", color=GRAY, ha="center", weight="bold")
ax.set_title("Energy bar chart: 50 kg child on a 3.0 m slide", fontsize=8.5, color=NAVY)
save(f, "u5d.png")

print("diagrams written to", OUT)
