"""Draws the Visual Memory Aid panels used in the Cornell notes.

Run:  python3 tools/diagrams.py
Output: assets/diagrams/<unit>-<n>.png  (200 dpi)

Only standard classroom diagram types are used: position-time and
velocity-time graphs, motion maps, free-body diagrams, vector sketches,
before/after collision sketches, force-time graphs and energy bar charts.
"""
import os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Polygon

OUT = os.path.join(os.path.dirname(__file__), "..", "assets", "diagrams")
os.makedirs(OUT, exist_ok=True)

NAVY, RED, BLUE, GREEN, GRAY, ORANGE = "#1F3864", "#C00000", "#2E75B6", "#548235", "#7F7F7F", "#C55A11"
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 9, "axes.titlesize": 10,
                     "axes.titleweight": "bold", "axes.titlecolor": NAVY})
G = 9.8


def new(title, axes=True, size=(4.2, 3.1)):
    fig, ax = plt.subplots(figsize=size)
    ax.set_title(title)
    if not axes:
        ax.axis("off")
    else:
        for s in ("top", "right"):
            ax.spines[s].set_visible(False)
    return fig, ax


def save(fig, name):
    fig.tight_layout()
    fig.savefig(os.path.join(OUT, name + ".png"), dpi=200)
    plt.close(fig)


def arrow(ax, x, y, dx, dy, color=NAVY, label=None, lpos=None, lw=2.2, ha="center", va="center", fs=9):
    ax.annotate("", xy=(x + dx, y + dy), xytext=(x, y),
                arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=14, shrinkA=0, shrinkB=0))
    if label:
        lx, ly = lpos if lpos else (x + dx, y + dy)
        ax.text(lx, ly, label, color=color, ha=ha, va=va, fontsize=fs, fontweight="bold")


def box(ax, x, y, w, h, label="", fc="#D9E2F3"):
    ax.add_patch(Rectangle((x, y), w, h, fc=fc, ec=NAVY, lw=1.5))
    if label:
        ax.text(x + w / 2, y + h / 2, label, ha="center", va="center", fontsize=9, color=NAVY, fontweight="bold")


# ---------------------------------------------------------------- Kinematics
def k1():
    fig, ax = new("Position-time graph: slope = velocity")
    t = np.linspace(0, 5, 10)
    ax.plot(t, 4 * t, color=RED, lw=2.2)
    ax.plot(t, 1.5 * t, color=BLUE, lw=2.2)
    ax.plot(t, 0 * t + 12, color=GREEN, lw=2.2)
    ax.text(3.1, 16.5, "steep = fast\n(4 m/s)", color=RED, ha="right")
    ax.text(4.9, 4.3, "shallow = slow\n(1.5 m/s)", color=BLUE, ha="right")
    ax.text(0.2, 12.8, "flat = at rest (0 m/s)", color=GREEN)
    ax.set_xlabel("time (s)"); ax.set_ylabel("position (m)")
    ax.set_xlim(0, 5); ax.set_ylim(0, 21)
    save(fig, "kinematics-1")


def k2():
    fig, ax = new("Velocity-time graph: slope and area")
    t = np.array([0, 5])
    ax.plot(t, 4 * t, color=RED, lw=2.2)
    ax.fill_between(t, 4 * t, color="#D9E2F3")
    ax.text(3.45, 5.2, "area = displacement\n½ × 5 s × 20 m/s\n= 50 m", color=NAVY, ha="center")
    ax.text(0.2, 19.5, "slope = acceleration\n20 m/s ÷ 5 s = 4 m/s²", color=RED, va="top")
    ax.set_xlabel("time (s)"); ax.set_ylabel("velocity (m/s)")
    ax.set_xlim(0, 5.3); ax.set_ylim(0, 22)
    save(fig, "kinematics-2")


def k3():
    fig, ax = new("Motion maps (one dot each second)", axes=False)
    for i in range(6):
        ax.plot(i * 1.6, 2, "o", color=BLUE, ms=7)
        if i < 5:
            arrow(ax, i * 1.6 + 0.12, 2, 1.1, 0, BLUE, lw=1.6)
    ax.text(0, 2.5, "Constant velocity: equal spacing, equal arrows", color=BLUE, fontsize=8.5)
    xs = [0, 0.7, 1.7, 3.0, 4.6, 6.5, 8.7]
    for i, x in enumerate(xs[:-1]):
        ax.plot(x, 0.6, "o", color=RED, ms=7)
        arrow(ax, x + 0.1, 0.6, (xs[i + 1] - x) * 0.7, 0, RED, lw=1.6)
    ax.text(0, 1.1, "Speeding up: spacing and arrows grow", color=RED, fontsize=8.5)
    ax.set_xlim(-0.4, 8.8); ax.set_ylim(0, 3.1)
    save(fig, "kinematics-3")


def k4():
    fig, ax = new("Distance vs displacement", axes=False)
    ax.plot([0, 4], [0, 0], color=GRAY, lw=1)
    for x in range(5):
        ax.plot([x, x], [-0.08, 0.08], color=GRAY, lw=1)
        ax.text(x, -0.3, f"{x} m", ha="center", color=GRAY, fontsize=8)
    arrow(ax, 0, 0.8, 4, 0, BLUE, "4 m east", (2, 1.05))
    arrow(ax, 4, 0.4, -3, 0, BLUE, "3 m west", (2.6, 0.2))
    arrow(ax, 0, 1.75, 1, 0, RED, "displacement = 1 m east", (1.15, 1.75), ha="left")
    ax.text(2, 2.35, "distance = 4 m + 3 m = 7 m (whole path)", color=BLUE, ha="center")
    ax.text(-0.05, -0.75, "start", color=NAVY, ha="center", fontsize=8)
    ax.set_xlim(-0.5, 4.6); ax.set_ylim(-1.0, 2.7)
    save(fig, "kinematics-4")


# ---------------------------------------------------------------- Projectiles
def traj(v, deg, n=100):
    th = np.radians(deg)
    T = 2 * v * np.sin(th) / G
    t = np.linspace(0, T, n)
    return v * np.cos(th) * t, v * np.sin(th) * t - 0.5 * G * t ** 2, T


def p1():
    fig, ax = new("Projectile: vx stays constant, vy changes")
    v, deg = 20, 50
    x, y, T = traj(v, deg)
    ax.plot(x, y, color=GRAY, lw=1.5, ls="--")
    th = np.radians(deg)
    s = 0.42
    for f in (0, 0.25, 0.5, 0.75, 1.0):
        t = f * T
        px, py = v * np.cos(th) * t, v * np.sin(th) * t - 0.5 * G * t * t
        vy = v * np.sin(th) - G * t
        ax.plot(px, py, "o", color=NAVY, ms=5)
        arrow(ax, px, py, v * np.cos(th) * s, 0, BLUE, lw=1.8)
        if abs(vy) > 0.5:
            arrow(ax, px, py, 0, vy * s, RED, lw=1.8)
    ax.text(31, 14.0, "top: vy = 0, but vx is not 0\nand a is still 9.8 m/s² down", ha="center", color=NAVY, fontsize=8)
    ax.text(1, -6.0, "blue = vx (same length every time)", color=BLUE, fontsize=8)
    ax.text(1, -8.3, "red = vy (shrinks, zero at top, grows downward)", color=RED, fontsize=8)
    ax.set_xlim(-1, 48); ax.set_ylim(-9.5, 17)
    ax.set_xlabel("horizontal position (m)"); ax.set_ylabel("height (m)")
    save(fig, "projectile-1")


def p2():
    fig, ax = new("Splitting a velocity into components", axes=False)
    th = np.radians(30)
    L = 4
    arrow(ax, 0, 0, L * np.cos(th), L * np.sin(th), NAVY, "v = 20 m/s", (1.35, 1.35))
    arrow(ax, 0, 0, L * np.cos(th), 0, BLUE, "vx = v cos θ = 17.3 m/s", (L * np.cos(th) / 2, -0.3))
    arrow(ax, L * np.cos(th), 0, 0, L * np.sin(th), RED, "vy = v sin θ\n= 10.0 m/s", (L * np.cos(th) + 0.15, 1.0), ha="left")
    a = np.linspace(0, th, 20)
    ax.plot(0.9 * np.cos(a), 0.9 * np.sin(a), color=NAVY, lw=1)
    ax.text(1.1, 0.25, "θ = 30°", color=NAVY, fontsize=8.5)
    ax.set_xlim(-0.3, 5.6); ax.set_ylim(-0.7, 2.5); ax.set_aspect("equal")
    save(fig, "projectile-2")


def p3():
    fig, ax = new("Dropped vs launched sideways: same time")
    ts = np.arange(0, 2.01, 0.4)
    for t in ts:
        y = 19.6 - 0.5 * G * t * t
        ax.plot([0, 5 * t], [y, y], color="#BFBFBF", lw=0.8, ls=":")
        ax.plot(0, y, "o", color=RED, ms=6)
        ax.plot(5 * t, y, "o", color=BLUE, ms=6)
    ax.text(0.3, 21.2, "dropped", color=RED, fontsize=8.5)
    ax.text(3.2, 21.2, "launched at 5 m/s", color=BLUE, fontsize=8.5)
    ax.text(6.6, 15.0, "same height at\nevery instant;\nboth land at 2.0 s", color=NAVY, fontsize=8)
    ax.set_xlim(-0.8, 11); ax.set_ylim(-0.8, 23)
    ax.set_xlabel("horizontal position (m)"); ax.set_ylabel("height (m)")
    save(fig, "projectile-3")


def p4():
    fig, ax = new("Same speed (20 m/s), different angles")
    for deg, c in ((30, BLUE), (45, GREEN), (60, RED)):
        x, y, T = traj(20, deg)
        ax.plot(x, y, color=c, lw=2)
        i = len(x) // 2
        ax.text(x[i], y[i] + 0.8, f"{deg}°", color=c, ha="center", fontweight="bold")
    ax.text(20.4, 1.6, "45° goes farthest (40.8 m)", color=GREEN, ha="center", fontsize=8)
    ax.text(17.7, -3.4, "30° and 60° land at the same spot (35.3 m)", color=NAVY, ha="center", fontsize=8)
    ax.set_xlim(0, 43); ax.set_ylim(-5, 18)
    ax.set_xlabel("horizontal position (m)"); ax.set_ylabel("height (m)")
    save(fig, "projectile-4")


# ---------------------------------------------------------------- Newton
def fbd(name, title, app, fr, note):
    fig, ax = new(title, axes=False)
    box(ax, -0.6, -0.4, 1.2, 0.8)
    arrow(ax, 0, 0.4, 0, 1.3, GREEN, "F_norm", (0, 1.9))
    arrow(ax, 0, -0.4, 0, -1.3, NAVY, "F_grav", (0, -1.9))
    arrow(ax, 0.6, 0, app, 0, RED, f"F_app = {int(app * 20)} N", (0.7, 0.3), ha="left")
    arrow(ax, -0.6, 0, -fr, 0, ORANGE, f"F_frict = {int(fr * 20)} N", (-0.7, 0.3), ha="right")
    ax.text(0, -2.55, note, ha="center", color=NAVY, fontsize=8.5)
    ax.set_xlim(-3.6, 3.6); ax.set_ylim(-2.9, 2.2)
    save(fig, name)


def n3():
    fig, ax = new("Third-law pair: equal, opposite, on different objects", axes=False)
    box(ax, -1.7, -0.5, 1.3, 1.0, "A\n50 kg")
    box(ax, 0.4, -0.5, 1.3, 1.0, "B\n75 kg")
    arrow(ax, -1.7, 0, -1.6, 0, RED, "B pushes A: 150 N", (-2.45, 0.85))
    arrow(ax, 1.7, 0, 1.6, 0, BLUE, "A pushes B: 150 N", (2.45, 0.85))
    ax.text(-1.05, -1.0, "a = 3.0 m/s²", color=RED, ha="center", fontsize=8.5)
    ax.text(1.05, -1.0, "a = 2.0 m/s²", color=BLUE, ha="center", fontsize=8.5)
    ax.text(0, -1.7, "Same force on each. Smaller mass gets the bigger acceleration.", ha="center", color=NAVY, fontsize=8)
    ax.set_xlim(-3.9, 3.9); ax.set_ylim(-2.0, 1.4)
    save(fig, "newton-3")


def n4():
    fig, ax = new("Free-body diagram on an incline", axes=False)
    th = np.radians(30)
    ax.add_patch(Polygon([[0, 0], [6, 0], [6, 6 * np.tan(th)]], fc="#F2F2F2", ec=GRAY, lw=1.5))
    cx, cy = 3.2, 3.2 * np.tan(th)
    u = np.array([np.cos(th), np.sin(th)]); n = np.array([-np.sin(th), np.cos(th)])
    c = np.array([cx, cy]) + n * 0.45
    corners = [c + u * a + n * b for a, b in ((-0.6, -0.45), (0.6, -0.45), (0.6, 0.45), (-0.6, 0.45))]
    ax.add_patch(Polygon(corners, fc="#D9E2F3", ec=NAVY, lw=1.5))
    arrow(ax, c[0], c[1], 0, -2.4, NAVY, "F_grav = mg", (c[0] + 0.1, c[1] - 2.65))
    arrow(ax, c[0], c[1], *(n * 2.08), GREEN, "F_norm", tuple(c + n * 2.4))
    arrow(ax, c[0], c[1], *(u * 1.2), ORANGE, "F_frict", tuple(c + u * 1.75 + n * 0.1))
    arrow(ax, c[0], c[1], *(-u * 1.2), RED, "mg sin θ", tuple(c - u * 1.9 + n * 0.5), lw=1.3)
    arrow(ax, c[0], c[1], *(-n * 2.08), GRAY, "mg cos θ", tuple(c - n * 1.5 + u * 1.05), lw=1.3)
    ax.text(1.25, 0.18, "θ", color=NAVY)
    ax.set_xlim(-0.3, 6.8); ax.set_ylim(-0.9, 5.2); ax.set_aspect("equal")
    save(fig, "newton-4")


# ---------------------------------------------------------------- Momentum
def cart(ax, x, y, w, label, v=None, vlabel="", color=BLUE):
    box(ax, x, y, w, 0.6, label)
    if v:
        arrow(ax, x + w / 2, y + 0.85, v, 0, color, vlabel, (x + w / 2 + v / 2, y + 1.15), lw=1.8, fs=8.5)
    else:
        ax.text(x + w / 2, y + 0.95, vlabel, ha="center", color=GRAY, fontsize=8.5)


def m1():
    fig, ax = new("Carts stick together (perfectly inelastic)", axes=False)
    ax.text(-0.2, 3.75, "BEFORE", color=NAVY, fontweight="bold")
    cart(ax, 0, 2.2, 1.4, "2 kg", 1.5, "3 m/s")
    cart(ax, 3.4, 2.2, 0.9, "1 kg", None, "at rest")
    ax.text(5.0, 2.45, "p = 6 kg·m/s", color=NAVY, fontsize=8.5)
    ax.plot([-0.2, 7.4], [1.85, 1.85], color=GRAY, lw=0.8)
    ax.text(-0.2, 1.5, "AFTER", color=NAVY, fontweight="bold")
    box(ax, 1.6, 0, 1.4, 0.6, "2 kg"); box(ax, 3.0, 0, 0.9, 0.6, "1 kg")
    arrow(ax, 2.75, 0.85, 1.0, 0, BLUE, "2 m/s", (3.25, 1.15), lw=1.8, fs=8.5)
    ax.text(5.0, 0.25, "p = 6 kg·m/s", color=NAVY, fontsize=8.5)
    ax.set_xlim(-0.4, 7.6); ax.set_ylim(-0.3, 4.2)
    save(fig, "momentum-1")


def m2():
    fig, ax = new("Force-time graph: area = impulse")
    ax.add_patch(Rectangle((0.05, 0), 0.1, 3000, fc="#F4B6B6", ec=RED, lw=1.5))
    ax.add_patch(Rectangle((0.3, 0), 0.5, 600, fc="#D9E2F3", ec=BLUE, lw=1.5))
    ax.text(0.19, 2650, "hard stop\n3000 N × 0.1 s\n= 300 N·s", color=RED, fontsize=8, va="top")
    ax.text(0.55, 1350, "cushioned stop\n600 N × 0.5 s\n= 300 N·s", color=BLUE, fontsize=8, ha="center", va="top")
    ax.set_xlim(0, 0.9); ax.set_ylim(0, 3400)
    ax.set_xlabel("time (s)"); ax.set_ylabel("force (N)")
    save(fig, "momentum-2")


def m3():
    fig, ax = new("Recoil: total momentum stays zero", axes=False)
    ax.text(-0.2, 3.75, "BEFORE", color=NAVY, fontweight="bold")
    box(ax, 2.2, 2.2, 1.4, 0.6, "60 kg"); box(ax, 3.6, 2.2, 0.85, 0.6, "2 kg")
    ax.text(3.2, 3.15, "both at rest", ha="center", color=GRAY, fontsize=8.5)
    ax.text(5.3, 2.45, "p = 0", color=NAVY, fontsize=8.5)
    ax.plot([-0.2, 7.4], [1.85, 1.85], color=GRAY, lw=0.8)
    ax.text(-0.2, 1.5, "AFTER", color=NAVY, fontweight="bold")
    box(ax, 0.9, 0, 1.4, 0.6, "60 kg"); box(ax, 4.6, 0, 0.85, 0.6, "2 kg")
    arrow(ax, 1.6, 0.85, -0.6, 0, RED, "0.5 m/s", (1.3, 1.15), lw=1.8, fs=8.5)
    arrow(ax, 5.0, 0.85, 1.8, 0, BLUE, "15 m/s", (5.8, 1.15), lw=1.8, fs=8.5)
    ax.text(3.45, -0.75, "−30 kg·m/s + 30 kg·m/s = 0", ha="center", color=NAVY, fontsize=8.5)
    ax.set_xlim(-0.4, 7.6); ax.set_ylim(-1.1, 4.2)
    save(fig, "momentum-3")


def m4():
    fig, ax = new("Bounce vs stick: bouncing has the bigger Δp", axes=False)
    for y, name, back in ((2.2, "STICKS", False), (0.2, "BOUNCES", True)):
        ax.add_patch(Rectangle((5.4, y - 0.35), 0.25, 1.3, fc=GRAY, ec=GRAY))
        ax.text(-0.2, y + 0.95, name, color=NAVY, fontweight="bold")
        ax.plot(1.2, y + 0.3, "o", color=BLUE, ms=13)
        arrow(ax, 1.5, y + 0.3, 1.6, 0, BLUE, "+4 m/s", (2.3, y + 0.62), lw=1.8, fs=8.5)
        if back:
            ax.plot(4.9, y, "o", color=RED, ms=13)
            arrow(ax, 4.6, y, -1.4, 0, RED, "−4 m/s", (3.9, y - 0.32), lw=1.8, fs=8.5)
            ax.text(6.0, y + 0.3, "Δp = 0.5 kg × (−4 − 4)\n= −4 kg·m/s", color=RED, fontsize=8, va="center")
        else:
            ax.plot(5.15, y + 0.3, "o", color=GRAY, ms=13)
            ax.text(6.0, y + 0.3, "Δp = 0.5 kg × (0 − 4)\n= −2 kg·m/s", color=NAVY, fontsize=8, va="center")
    ax.set_xlim(-0.4, 9.6); ax.set_ylim(-0.6, 3.6)
    save(fig, "momentum-4")


# ---------------------------------------------------------------- Energy
def e1():
    fig, ax = new("Energy bar charts for a cart on a hill")
    groups = [("top", 98, 0), ("halfway", 49, 49), ("bottom", 0, 98)]
    for i, (name, pe, ke) in enumerate(groups):
        x = i * 3
        ax.bar(x, pe, 0.8, color=BLUE); ax.bar(x + 0.9, ke, 0.8, color=RED)
        ax.text(x, pe + 3, f"{pe} J", ha="center", fontsize=8, color=BLUE)
        ax.text(x + 0.9, ke + 3, f"{ke} J", ha="center", fontsize=8, color=RED)
    ax.set_xticks([0.45, 3.45, 6.45]); ax.set_xticklabels([g[0] for g in groups])
    ax.plot([-0.6, 7.5], [98, 98], color=GRAY, ls=":", lw=1)
    ax.text(3.45, 118, "PE (blue) + KE (red) = 98 J at every point", ha="center", color=NAVY, fontsize=8.5)
    ax.set_ylim(0, 130); ax.set_xlim(-0.7, 7.6); ax.set_ylabel("energy (J)")
    save(fig, "energy-1")


def e2():
    fig, ax = new("Roller coaster: energy trades between PE and KE", axes=False)
    x = np.linspace(0, 10, 300)
    y = 2.6 * np.exp(-((x - 1.2) ** 2) / 1.6) + 1.3 * np.exp(-((x - 6.6) ** 2) / 1.8) + 1.3
    ax.plot(x, y, color=NAVY, lw=2.5)
    ax.plot([0, 10], [0, 0], color=GRAY, lw=1)
    pts = [(1.2, "A: highest\nmost PE, least KE", BLUE, 0.45), (4.05, "B: lowest\nmost KE, fastest", RED, -1.15), (6.6, "C: lower hill\nsome PE, some KE", GREEN, 0.5)]
    for px, lab, c, dy in pts:
        py = np.interp(px, x, y)
        ax.plot(px, py, "o", color=c, ms=9)
        ax.text(px + 0.25, py + dy, lab, color=c, fontsize=8, va="bottom", ha="left" if px < 6 else "center")
    ax.text(5, -0.55, "No friction: PE + KE is the same at A, B and C", ha="center", color=NAVY, fontsize=8.5)
    ax.set_xlim(-0.2, 10.3); ax.set_ylim(-0.9, 5.4)
    save(fig, "energy-2")


def e3():
    fig, ax = new("Force-displacement graph: area = work")
    ax.plot([0, 10], [50, 50], color=RED, lw=2.2)
    ax.fill_between([0, 10], [50, 50], color="#D9E2F3")
    ax.text(5, 25, "area = work\n50 N × 10 m = 500 J", ha="center", va="center", color=NAVY)
    ax.set_xlim(0, 11); ax.set_ylim(0, 70)
    ax.set_xlabel("displacement (m)"); ax.set_ylabel("force (N)")
    save(fig, "energy-3")


def e4():
    fig, ax = new("Work uses the part of the force along the motion", axes=False)
    box(ax, 0, 0, 1.4, 0.9)
    th = np.radians(60)
    arrow(ax, 1.4, 0.45, 2.6 * np.cos(th), 2.6 * np.sin(th), RED, "F = 50 N", (2.75, 2.75))
    arrow(ax, 1.4, 0.45, 2.6 * np.cos(th), 0, BLUE, "F cos θ = 25 N", (3.05, 0.2), ha="left")
    ax.plot([1.4 + 2.6 * np.cos(th)] * 2, [0.45, 0.45 + 2.6 * np.sin(th)], color=GRAY, ls=":", lw=1)
    ax.text(1.85, 0.62, "60°", color=NAVY, fontsize=8)
    arrow(ax, 0, -0.55, 5.5, 0, GREEN, "displacement d = 10 m", (2.75, -0.9))
    ax.text(2.9, -1.55, "W = F d cos θ = 50 × 10 × cos 60° = 250 J", ha="center", color=NAVY, fontsize=8.5)
    ax.set_xlim(-0.4, 6.2); ax.set_ylim(-1.9, 3.2)
    save(fig, "energy-4")


if __name__ == "__main__":
    k1(); k2(); k3(); k4()
    p1(); p2(); p3(); p4()
    fbd("newton-1", "Balanced forces: constant velocity", 1.5, 1.5, "F_net = 0, so a = 0 (at rest or steady speed)")
    fbd("newton-2", "Unbalanced forces: acceleration", 1.5, 0.5, "F_net = 30 N − 10 N = 20 N right; a = 20 N ÷ 5 kg = 4 m/s²")
    n3(); n4()
    m1(); m2(); m3(); m4()
    e1(); e2(); e3(); e4()
    print("diagrams written to", os.path.abspath(OUT))
