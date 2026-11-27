"""Draws the Visual Memory Aid diagrams for every unit.

Run:  python3 tools/diagrams.py
Output: assets/diagrams/*.png (200 dpi)
Only standard classroom diagram types are used: motion graphs, motion maps,
free-body diagrams, vector sketches, before/after collision sketches, bar charts.
"""
import os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Circle, Polygon

OUT = os.path.join(os.path.dirname(__file__), "..", "assets", "diagrams")
os.makedirs(OUT, exist_ok=True)

NAVY = "#1F3864"
BLUE = "#2E75B6"
RED = "#C0392B"
GREEN = "#2E7D32"
ORANGE = "#D9822B"
GRAY = "#7F7F7F"
LIGHT = "#D9E2F3"

plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 11})


def new(w=4.6, h=3.3):
    fig, ax = plt.subplots(figsize=(w, h))
    return fig, ax


def save(fig, name):
    fig.savefig(os.path.join(OUT, name), dpi=200, bbox_inches="tight", facecolor="white", pad_inches=0.12)
    plt.close(fig)


def blank(ax, xlim, ylim):
    ax.set_xlim(*xlim)
    ax.set_ylim(*ylim)
    ax.set_aspect("equal")
    ax.axis("off")


def arrow(ax, x, y, dx, dy, color=RED, lw=2.4, label=None, lpos=None, ha="center", va="center", fs=11):
    ax.annotate("", xy=(x + dx, y + dy), xytext=(x, y),
                arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=16, shrinkA=0, shrinkB=0))
    if label:
        lx, ly = lpos if lpos else (x + dx, y + dy)
        ax.text(lx, ly, label, color=color, ha=ha, va=va, fontsize=fs, fontweight="bold")


def graph_axes(ax, xlabel, ylabel):
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)
    ax.set_xlabel(xlabel)
    ax.set_ylabel(ylabel)
    ax.grid(True, color="#DDDDDD", lw=0.7)


# ───────────────────────── Kinematics ─────────────────────────
def kin_pt():
    fig, ax = new()
    t = np.linspace(0, 4, 50)
    ax.plot(t, 3 * t, color=BLUE, lw=2.6)
    ax.plot(t, 0.75 * t ** 2, color=RED, lw=2.6)
    ax.text(2.1, 8.4, "constant velocity\n(straight line)", color=BLUE, ha="right", fontsize=10)
    ax.text(4.1, 1.6, "speeding up\n(curve gets steeper)", color=RED, ha="right", fontsize=10)
    ax.set_xlim(0, 4.2); ax.set_ylim(0, 13)
    graph_axes(ax, "time (s)", "position (m)")
    ax.set_title("Position vs. time", color=NAVY, fontweight="bold")
    save(fig, "kin-pt.png")


def kin_vt():
    fig, ax = new()
    t = np.array([0, 4])
    ax.plot(t, 3 * t, color=BLUE, lw=2.6)
    ax.fill_between(t, 3 * t, color=LIGHT)
    ax.text(2.75, 2.6, "area = displacement\n½ × 4 × 12 = 24 m", ha="center", fontsize=10, color=NAVY)
    ax.text(1.75, 9.3, "slope = acceleration\n12 ÷ 4 = 3 m/s²", ha="center", fontsize=10, color=BLUE)
    ax.set_xlim(0, 4.4); ax.set_ylim(0, 13.5)
    graph_axes(ax, "time (s)", "velocity (m/s)")
    ax.set_title("Velocity vs. time", color=NAVY, fontweight="bold")
    save(fig, "kin-vt.png")


def kin_dots():
    fig, ax = new(4.6, 2.6)
    blank(ax, (-0.5, 10.5), (-0.6, 4.2))
    ax.text(0, 3.6, "Constant velocity: equal spacing", color=BLUE, fontsize=10.5, fontweight="bold")
    for x in np.arange(0, 10.1, 2):
        ax.add_patch(Circle((x, 2.7), 0.2, color=BLUE))
    for x in np.arange(0, 10, 2):
        arrow(ax, x + 0.3, 2.7, 1.3, 0, color=BLUE, lw=1.5)
    ax.text(0, 1.4, "Speeding up: spacing grows", color=RED, fontsize=10.5, fontweight="bold")
    xs = [0, 0.6, 2.0, 4.2, 7.2]
    for x in xs:
        ax.add_patch(Circle((x, 0.5), 0.2, color=RED))
    for a, b in zip(xs[:-1], xs[1:]):
        if b - a > 0.9:
            arrow(ax, a + 0.3, 0.5, (b - a) - 0.6, 0, color=RED, lw=1.5)
    ax.text(10.4, -0.45, "one dot each second", ha="right", fontsize=9, color=GRAY)
    save(fig, "kin-dots.png")


def kin_freefall():
    fig, ax = new(4.6, 3.6)
    blank(ax, (-1.6, 8.4), (-0.8, 7.6))
    ax.plot([-1.4, 8.2], [0, 0], color=GRAY, lw=1.5)
    cols = [(0.8, 1.2, 2.4, "rising"), (3.4, 5.6, 0, "top"), (6.0, 3.6, -2.4, "falling")]
    for x, y, v, lab in cols:
        ax.add_patch(Circle((x, y), 0.3, color=NAVY))
        if v:
            arrow(ax, x - 0.75, y - v / 2, 0, v, color=BLUE, label="v", lpos=(x - 1.1, y), fs=12)
        else:
            ax.text(x - 1.2, y, "v = 0", color=BLUE, fontweight="bold", fontsize=11, ha="center", va="center")
        arrow(ax, x + 0.75, y + 0.7, 0, -1.4, color=RED, label="a", lpos=(x + 1.1, y), fs=12)
        ax.text(x, -0.5, lab, ha="center", fontsize=10, color=NAVY)
    ax.text(3.4, 7.1, "a = 9.8 m/s² down at every point", ha="center", color=RED, fontsize=10.5, fontweight="bold")
    save(fig, "kin-freefall.png")


# ───────────────────────── Projectile motion ─────────────────────────
def proj_components():
    fig, ax = new(4.6, 3.2)
    blank(ax, (-0.8, 6.6), (-0.9, 4.2))
    vx, vy = 5.2, 3.0
    arrow(ax, 0, 0, vx, vy, color=NAVY, lw=2.8, label="v", lpos=(2.3, 1.9), fs=13)
    arrow(ax, 0, 0, vx, 0, color=BLUE, label="v$_x$ = v·cos θ", lpos=(2.6, -0.45))
    arrow(ax, vx, 0, 0, vy, color=RED, label="v$_y$ = v·sin θ", lpos=(5.35, 3.55), ha="center")
    th = np.linspace(0, np.arctan2(vy, vx), 20)
    ax.plot(1.3 * np.cos(th), 1.3 * np.sin(th), color=GRAY, lw=1.2)
    ax.text(1.65, 0.38, "θ", fontsize=12, color=GRAY)
    ax.add_patch(Rectangle((vx - 0.3, 0), 0.3, 0.3, fill=False, ec=GRAY, lw=1))
    save(fig, "proj-components.png")


def proj_trajectory():
    fig, ax = new(4.8, 3.2)
    vx, vy0, g = 2.0, 4.0, 2.0
    T = 2 * vy0 / g
    t = np.linspace(0, T, 80)
    ax.plot(vx * t, vy0 * t - 0.5 * g * t ** 2, color=GRAY, lw=1.6, ls="--")
    for ti in [0, T / 4, T / 2, 3 * T / 4, T]:
        x, y = vx * ti, vy0 * ti - 0.5 * g * ti ** 2
        vy = vy0 - g * ti
        ax.add_patch(Circle((x, y), 0.13, color=NAVY, zorder=5))
        arrow(ax, x, y, 1.1, 0, color=BLUE, lw=2)
        if abs(vy) > 0.01:
            arrow(ax, x, y, 0, vy * 0.42, color=RED, lw=2)
    ax.plot([-0.4, 9.6], [0, 0], color=GRAY, lw=1.2)
    ax.text(4.0, 4.55, "top: v$_y$ = 0", color=RED, ha="center", fontsize=10, fontweight="bold")
    ax.text(4.6, -2.45, "blue = v$_x$ (never changes)     red = v$_y$ (changes)", ha="center", fontsize=9.5, color=NAVY)
    blank(ax, (-0.6, 9.8), (-2.9, 5.0))
    save(fig, "proj-trajectory.png")


def proj_dropvslaunch():
    fig, ax = new(4.6, 3.4)
    blank(ax, (-1.6, 7.4), (-0.9, 6.0))
    ax.add_patch(Rectangle((-1.6, 0), 1.6, 5, color="#BFBFBF"))
    ax.plot([-1.6, 7.3], [0, 0], color=GRAY, lw=1.5)
    for i in range(5):
        t = i * 0.5
        y = 5 - 0.5 * 2.5 * t ** 2
        ax.add_patch(Circle((0.4, y), 0.17, color=RED))
        ax.add_patch(Circle((0.4 + 3.0 * t, y), 0.17, color=BLUE))
        ax.plot([0.4, 0.4 + 3.0 * t], [y, y], color="#BBBBBB", lw=0.8, ls=":")
    ax.text(0.4, 5.55, "dropped", color=RED, ha="center", fontsize=10, fontweight="bold")
    ax.text(4.2, 4.5, "launched\nhorizontally", color=BLUE, ha="center", fontsize=10, fontweight="bold")
    ax.text(3.3, -0.6, "same height at every instant → land together", ha="center", fontsize=9.5, color=NAVY)
    save(fig, "proj-dropvslaunch.png")


def proj_angles():
    fig, ax = new(4.6, 3.0)
    v, g = 10.0, 9.8
    for ang, col in [(30, BLUE), (45, GREEN), (60, RED)]:
        th = np.radians(ang)
        T = 2 * v * np.sin(th) / g
        t = np.linspace(0, T, 80)
        ax.plot(v * np.cos(th) * t, v * np.sin(th) * t - 0.5 * g * t ** 2, color=col, lw=2.4, label=f"{ang}°")
    ax.legend(frameon=False, title="launch angle", loc="upper right", fontsize=9.5, title_fontsize=9.5)
    ax.set_xlim(0, 11.2); ax.set_ylim(0, 5.6)
    graph_axes(ax, "horizontal distance (m)", "height (m)")
    ax.set_title("Same launch speed, three angles", color=NAVY, fontweight="bold", fontsize=11)
    save(fig, "proj-angles.png")


# ───────────────────────── Newton's laws ─────────────────────────
def box(ax, x, y, w, h, label=None, color=LIGHT):
    ax.add_patch(Rectangle((x - w / 2, y - h / 2), w, h, fc=color, ec=NAVY, lw=1.6))
    if label:
        ax.text(x, y, label, ha="center", va="center", fontsize=10, color=NAVY)


def newt_balanced():
    fig, ax = new(4.0, 3.4)
    blank(ax, (-3, 3), (-3.2, 3.2))
    ax.plot([-2.4, 2.4], [-0.55, -0.55], color=GRAY, lw=3)
    box(ax, 0, 0, 1.6, 1.1, "book")
    arrow(ax, 0, 0.55, 0, 1.9, color=BLUE, label="F$_{norm}$", lpos=(0.85, 2.0))
    arrow(ax, 0, -0.55, 0, -1.9, color=RED, label="F$_{grav}$", lpos=(0.85, -2.0))
    ax.text(0, -3.0, "equal arrows → F$_{net}$ = 0", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
    save(fig, "newt-balanced.png")


def newt_unbalanced():
    fig, ax = new(4.6, 3.4)
    blank(ax, (-3.6, 4.2), (-3.2, 3.2))
    ax.plot([-3.4, 4.0], [-0.55, -0.55], color=GRAY, lw=3)
    box(ax, 0, 0, 1.6, 1.1, "crate")
    arrow(ax, 0, 0.55, 0, 1.6, color=BLUE, label="F$_{norm}$", lpos=(0.85, 1.75))
    arrow(ax, 0, -0.55, 0, -1.6, color=RED, label="F$_{grav}$", lpos=(0.85, -1.75))
    arrow(ax, 0.8, 0, 2.6, 0, color=GREEN, label="F$_{app}$ = 100 N", lpos=(2.35, 0.45))
    arrow(ax, -0.8, 0, -1.1, 0, color=ORANGE, label="F$_{frict}$ = 40 N", lpos=(-2.2, 0.45))
    ax.text(0.3, -3.0, "F$_{net}$ = 60 N right → accelerates right", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
    save(fig, "newt-unbalanced.png")


def newt_thirdlaw():
    fig, ax = new(4.8, 2.8)
    blank(ax, (-5, 5), (-2.4, 2.6))
    ax.plot([-4.8, 4.8], [-0.6, -0.6], color=GRAY, lw=2)
    box(ax, -1.7, 0.2, 3.2, 1.6, "truck\n(large mass)")
    box(ax, 1.0, -0.1, 1.8, 1.0, "car")
    arrow(ax, 0.1, 1.5, 2.6, 0, color=RED, label="force on car by truck", lpos=(2.2, 2.0), fs=9.5)
    arrow(ax, -0.1, 1.5, -2.6, 0, color=BLUE, label="force on truck by car", lpos=(-2.4, 2.0), fs=9.5)
    ax.text(0, -1.6, "same size, opposite direction, on different objects", ha="center", fontsize=10, color=NAVY, fontweight="bold")
    save(fig, "newt-thirdlaw.png")


def newt_terminal():
    fig, ax = new(4.8, 3.4)
    blank(ax, (-4.2, 4.2), (-3.4, 3.4))
    for x, up, title, note in [(-2.1, 0.9, "speeding up", "F$_{grav}$ > F$_{air}$"), (2.1, 1.9, "terminal velocity", "F$_{air}$ = F$_{grav}$")]:
        ax.add_patch(Circle((x, 0), 0.38, fc=LIGHT, ec=NAVY, lw=1.6))
        arrow(ax, x, 0.38, 0, up, color=BLUE, label="F$_{air}$", lpos=(x + 0.75, 0.38 + up * 0.75))
        arrow(ax, x, -0.38, 0, -1.9, color=RED, label="F$_{grav}$", lpos=(x + 0.8, -1.8))
        ax.text(x, 3.05, title, ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
        ax.text(x, -3.1, note, ha="center", fontsize=10.5, color=NAVY)
    ax.plot([0, 0], [-3.2, 3.2], color="#CCCCCC", lw=1)
    save(fig, "newt-terminal.png")


# ───────────────────────── Momentum ─────────────────────────
def mom_inelastic():
    fig, ax = new(4.8, 3.2)
    blank(ax, (-5, 5), (-3.4, 3.2))
    ax.text(-4.8, 2.7, "BEFORE", color=NAVY, fontweight="bold", fontsize=10.5)
    ax.plot([-4.8, 4.8], [0.7, 0.7], color=GRAY, lw=2)
    box(ax, -3.0, 1.2, 1.7, 1.0, "2 kg")
    box(ax, 1.6, 1.2, 1.2, 1.0, "1 kg")
    arrow(ax, -2.1, 1.2, 1.8, 0, color=BLUE, label="3 m/s", lpos=(-1.2, 1.65), fs=10)
    ax.text(1.6, 2.05, "at rest", ha="center", fontsize=9.5, color=GRAY)
    ax.text(4.8, 2.7, "p = 6 kg·m/s", ha="right", fontsize=10, color=BLUE)
    ax.text(-4.8, -0.6, "AFTER", color=NAVY, fontweight="bold", fontsize=10.5)
    ax.plot([-4.8, 4.8], [-2.6, -2.6], color=GRAY, lw=2)
    box(ax, -0.6, -2.1, 1.7, 1.0, "2 kg")
    box(ax, 0.85, -2.1, 1.2, 1.0, "1 kg")
    arrow(ax, 1.5, -2.1, 1.3, 0, color=BLUE, label="2 m/s", lpos=(2.2, -1.65), fs=10)
    ax.text(4.8, -0.6, "p = 6 kg·m/s", ha="right", fontsize=10, color=BLUE)
    save(fig, "mom-inelastic.png")


def mom_impulse():
    fig, ax = new()
    ax.fill_between([0, 0.1, 0.2], [0, 600, 0], color="#F4C7C3", ec=RED, lw=2)
    ax.fill_between([0, 0.3, 0.6], [0, 200, 0], color=LIGHT, ec=BLUE, lw=2, alpha=0.8)
    ax.text(0.16, 520, "hard floor:\nshort time, big force", color=RED, fontsize=9.5)
    ax.text(0.42, 190, "padding:\nlong time, small force", color=BLUE, fontsize=9.5)
    ax.text(0.36, 640, "both areas = 60 N·s", color=NAVY, fontsize=10, fontweight="bold")
    ax.set_xlim(0, 0.75); ax.set_ylim(0, 720)
    graph_axes(ax, "time (s)", "force (N)")
    ax.set_title("Force vs. time: same impulse", color=NAVY, fontweight="bold")
    save(fig, "mom-impulse.png")


def mom_bounce():
    fig, ax = new(4.6, 3.2)
    blank(ax, (-5, 3), (-3.2, 3.2))
    ax.add_patch(Rectangle((1.9, -2.3), 0.5, 5.3, color="#BFBFBF"))
    ax.text(-4.8, 2.6, "BEFORE", color=NAVY, fontweight="bold", fontsize=10.5)
    ax.add_patch(Circle((-2.6, 1.5), 0.35, color=NAVY))
    arrow(ax, -2.1, 1.5, 2.4, 0, color=BLUE, label="p = +m·v", lpos=(-0.9, 2.05), fs=10.5)
    ax.text(-4.8, -0.5, "AFTER", color=NAVY, fontweight="bold", fontsize=10.5)
    ax.add_patch(Circle((0.6, -1.6), 0.35, color=NAVY))
    arrow(ax, 0.1, -1.6, -2.4, 0, color=RED, label="p = −m·v", lpos=(-1.1, -1.05), fs=10.5)
    ax.text(-1.9, -2.85, "change in momentum = 2·m·v", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
    save(fig, "mom-bounce.png")


def mom_explosion():
    fig, ax = new(4.8, 2.8)
    blank(ax, (-5, 5), (-2.4, 2.6))
    ax.plot([-4.8, 4.8], [-0.6, -0.6], color=GRAY, lw=2)
    box(ax, -0.75, 0.05, 1.4, 1.3, "60 kg")
    box(ax, 0.72, -0.05, 1.1, 1.1, "40 kg")
    arrow(ax, -1.5, 0.05, -1.6, 0, color=BLUE, label="2 m/s", lpos=(-2.4, 0.55), fs=10)
    arrow(ax, 1.3, -0.05, 2.4, 0, color=RED, label="3 m/s", lpos=(2.6, 0.45), fs=10)
    ax.text(-2.9, 1.8, "p = 120 kg·m/s left", ha="center", color=BLUE, fontsize=10)
    ax.text(2.8, 1.8, "p = 120 kg·m/s right", ha="center", color=RED, fontsize=10)
    ax.text(0, -1.7, "started at rest → total momentum stays zero", ha="center", fontsize=10, color=NAVY, fontweight="bold")
    save(fig, "mom-explosion.png")


# ───────────────────────── Work & energy ─────────────────────────
def en_work():
    fig, ax = new(4.8, 3.0)
    blank(ax, (-3.2, 5.6), (-2.2, 3.2))
    ax.plot([-3.0, 5.4], [-0.55, -0.55], color=GRAY, lw=3)
    box(ax, -1.2, 0, 1.6, 1.1, "sled")
    arrow(ax, -0.4, 0, 2.6, 2.0, color=RED, lw=2.8, label="F", lpos=(0.7, 1.35), fs=13)
    arrow(ax, -0.4, 0, 2.6, 0, color=GREEN, label="F·cos θ", lpos=(1.2, -0.28), fs=10)
    ax.plot([2.2, 2.2], [0, 2.0], color=GRAY, lw=1, ls=":")
    th = np.linspace(0, np.arctan2(2.0, 2.6), 20)
    ax.plot(-0.4 + 1.0 * np.cos(th), 1.0 * np.sin(th), color=GRAY, lw=1.2)
    ax.text(0.85, 0.25, "θ", fontsize=12, color=GRAY)
    arrow(ax, -1.2, -1.4, 5.6, 0, color=BLUE, label="displacement d", lpos=(1.6, -1.85), fs=10.5)
    ax.text(1.2, 2.8, "only the part along the motion does work", ha="center", fontsize=10, color=NAVY, fontweight="bold")
    save(fig, "en-work.png")


def en_coaster():
    fig, ax = new(4.8, 3.2)
    x = np.linspace(0, 10, 200)
    y = 2.6 + 2.4 * np.cos(x * np.pi / 5) * np.exp(-0.0 * x)
    y = np.where(x <= 5, y, 0.2 + (2.4 - 1.0) * (1 - np.cos((x - 5) * np.pi / 5)) / 2 * 1.3)
    ax.plot(x, y, color=NAVY, lw=2.6)
    ax.fill_between(x, y, -1.7, color="#EEF3FA")
    ax.add_patch(Circle((0.0, 5.3), 0.28, color=RED, zorder=5))
    ax.add_patch(Circle((5.0, 0.5), 0.28, color=RED, zorder=5))
    ax.add_patch(Circle((10.0, 2.32), 0.28, color=RED, zorder=5))
    ax.text(0.5, 5.9, "top: PE greatest,\nKE smallest", fontsize=9.5, color=NAVY)
    ax.text(5.0, -1.3, "bottom: KE greatest, PE smallest", fontsize=9.5, color=NAVY, ha="center")
    ax.text(9.9, 3.0, "some of each", fontsize=9.5, color=NAVY, ha="right")
    ax.set_xlim(-0.6, 10.6); ax.set_ylim(-1.7, 7.2)
    ax.axis("off")
    save(fig, "en-coaster.png")


def en_bars():
    fig, ax = new()
    labels = ["top", "halfway", "bottom"]
    pe = [100, 50, 0]
    ke = [0, 50, 100]
    xs = np.arange(3)
    ax.bar(xs - 0.2, pe, 0.38, color=BLUE, label="PE")
    ax.bar(xs + 0.2, ke, 0.38, color=RED, label="KE")
    ax.axhline(100, color=GRAY, lw=1.2, ls="--")
    ax.text(2.45, 104, "total = 100 J", ha="right", fontsize=9.5, color=GRAY)
    ax.set_xticks(xs); ax.set_xticklabels(labels)
    ax.set_ylim(0, 125)
    ax.legend(frameon=False, loc="center left", bbox_to_anchor=(1.0, 0.5))
    graph_axes(ax, "", "energy (J)")
    ax.grid(axis="x", visible=False)
    ax.set_title("Energy bar chart: falling object", color=NAVY, fontweight="bold", fontsize=11)
    save(fig, "en-bars.png")


def en_fd():
    fig, ax = new()
    ax.plot([0, 6], [50, 50], color=BLUE, lw=2.6)
    ax.fill_between([0, 6], [50, 50], color=LIGHT)
    ax.text(3, 24, "area = work\n50 N × 6 m = 300 J", ha="center", fontsize=10.5, color=NAVY, fontweight="bold")
    ax.set_xlim(0, 7); ax.set_ylim(0, 70)
    graph_axes(ax, "displacement (m)", "force (N)")
    ax.set_title("Force vs. displacement", color=NAVY, fontweight="bold")
    save(fig, "en-fd.png")


if __name__ == "__main__":
    for f in [kin_pt, kin_vt, kin_dots, kin_freefall,
              proj_components, proj_trajectory, proj_dropvslaunch, proj_angles,
              newt_balanced, newt_unbalanced, newt_thirdlaw, newt_terminal,
              mom_inelastic, mom_impulse, mom_bounce, mom_explosion,
              en_work, en_coaster, en_bars, en_fd]:
        f()
    print("wrote", len(os.listdir(OUT)), "diagrams to", os.path.normpath(OUT))
