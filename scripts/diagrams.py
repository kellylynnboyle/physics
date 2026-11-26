"""Draws the Visual Memory Aid diagrams for every unit.

Usage: python3 scripts/diagrams.py
Output: assets/diagrams/<unit-slug>/<name>.png (200 dpi)
Only standard classroom diagram types are used: motion maps, position-time and
velocity-time graphs, free-body diagrams, vector sketches, before/after
collision sketches, and force-time / force-displacement graphs.
"""
import os
import numpy as np
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets", "diagrams")
NAVY, RED, GREEN, GRAY, FILL = "#1F3864", "#C0392B", "#2E7D32", "#666666", "#D9E2F3"
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 11, "axes.edgecolor": NAVY,
                     "axes.labelcolor": NAVY, "xtick.color": NAVY, "ytick.color": NAVY})


def new(w=4.5, h=3.2):
    fig, ax = plt.subplots(figsize=(w, h))
    return fig, ax


def save(fig, unit, name):
    d = os.path.join(ROOT, unit)
    os.makedirs(d, exist_ok=True)
    fig.savefig(os.path.join(d, name), dpi=200, bbox_inches="tight", facecolor="white", pad_inches=0.12)
    plt.close(fig)


def blank(ax, xlim, ylim):
    ax.set_xlim(*xlim)
    ax.set_ylim(*ylim)
    ax.set_aspect("equal")
    ax.axis("off")


def arrow(ax, x0, y0, x1, y1, color=NAVY, lw=2.2):
    ax.annotate("", xy=(x1, y1), xytext=(x0, y0),
                arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=16, shrinkA=0, shrinkB=0))


def graph_axes(ax, xlabel, ylabel):
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)
    ax.set_xlabel(xlabel)
    ax.set_ylabel(ylabel)


def box(ax, x, y, w, h, label="", color=FILL):
    ax.add_patch(plt.Rectangle((x, y), w, h, fc=color, ec=NAVY, lw=1.8))
    if label:
        ax.text(x + w / 2, y + h / 2, label, ha="center", va="center", color=NAVY, fontsize=10, fontweight="bold")


# ---------------- Unit 1: Kinematics ----------------
def kinematics():
    u = "01-kinematics"
    fig, ax = new(4.5, 2.6)
    blank(ax, (-0.5, 10.5), (-0.6, 3.4))
    for i in range(6):
        ax.plot(1.8 * i + 0.4, 2.4, "o", color=NAVY, ms=9)
    ax.text(-0.3, 3.05, "Constant velocity: equal spacing", color=NAVY, fontsize=10, fontweight="bold")
    for i in range(5):
        ax.plot(0.4 + 0.38 * i * i * 1.5, 0.5, "o", color=RED, ms=9)
    ax.text(-0.3, 1.15, "Speeding up: spacing grows", color=RED, fontsize=10, fontweight="bold")
    arrow(ax, 0.4, -0.3, 10, -0.3, GRAY, 1.2)
    ax.text(10.1, -0.3, "x", color=GRAY, va="center")
    save(fig, u, "motion-map.png")

    fig, ax = new()
    t = np.linspace(0, 4, 100)
    ax.plot(t, 3 * t, color=NAVY, lw=2.5, label="constant velocity (straight)")
    ax.plot(t, 0.75 * t ** 2, color=RED, lw=2.5, label="speeding up (curve)")
    ax.plot(t, 0 * t + 5, color=GREEN, lw=2.5, label="at rest (flat)")
    graph_axes(ax, "time (s)", "position (m)")
    ax.legend(frameon=False, fontsize=9, loc="upper left")
    ax.set_xlim(0, 4)
    ax.set_ylim(0, 13)
    save(fig, u, "xt-graph.png")

    fig, ax = new()
    t = np.array([0, 4])
    v = np.array([0, 12])
    ax.plot(t, v, color=NAVY, lw=2.5)
    ax.fill_between(t, v, color=FILL)
    ax.text(2.75, 2.6, "area = ½(4)(12)\n= 24 m", color=NAVY, ha="center", fontsize=10)
    ax.text(0.25, 10.2, "slope = 12 ÷ 4\n= 3 m/s²", color=RED, fontsize=10)
    graph_axes(ax, "time (s)", "velocity (m/s)")
    ax.set_xlim(0, 4.3)
    ax.set_ylim(0, 13)
    save(fig, u, "vt-graph.png")

    fig, ax = new(3.6, 4.2)
    ax.set_xlim(-1, 1)
    ax.set_ylim(-52, 4)
    ax.axis("off")
    for s in range(4):
        y = -4.9 * s * s
        ax.plot(0, y, "o", color=NAVY, ms=10)
        ax.text(-0.14, y, f"t = {s} s", ha="right", va="center", color=NAVY, fontsize=10)
        ax.text(0.14, y, f"v = {9.8 * s:.1f} m/s" if s else "v = 0", ha="left", va="center", color=RED, fontsize=10)
        if s:
            arrow(ax, 0, y - 1.5, 0, y - 1.5 - 2.2 * s, RED, 2)
    save(fig, u, "free-fall.png")


# ---------------- Unit 2: Projectile motion ----------------
def projectile():
    u = "02-projectile-motion"
    fig, ax = new(4.5, 3.0)
    blank(ax, (-0.8, 9.6), (-1.2, 5.8))
    vx, vy = 8.0, 4.6
    arrow(ax, 0, 0, vx, vy, NAVY, 2.6)
    arrow(ax, 0, 0, vx, 0, GREEN, 2.2)
    arrow(ax, vx, 0, vx, vy, RED, 2.2)
    ax.text(3.2, 2.8, "v", color=NAVY, fontsize=13, fontweight="bold")
    ax.text(4.0, -0.75, "$v_x = v\\,\\cos\\theta$", color=GREEN, ha="center", fontsize=11)
    ax.text(8.2, 2.2, "$v_y = v\\,\\sin\\theta$", color=RED, fontsize=11, rotation=90, va="center")
    th = np.linspace(0, np.arctan2(vy, vx), 30)
    ax.plot(1.8 * np.cos(th), 1.8 * np.sin(th), color=GRAY, lw=1.2)
    ax.text(2.1, 0.42, "θ", color=GRAY, fontsize=12)
    save(fig, u, "components.png")

    fig, ax = new(4.8, 3.0)
    blank(ax, (-1.5, 39), (-5, 12.5))
    g, v0x, v0y = 9.8, 17.32, 10.0
    T = 2 * v0y / g
    t = np.linspace(0, T, 100)
    ax.plot(v0x * t, v0y * t - 0.5 * g * t * t, color=GRAY, lw=1.5, ls="--")
    for tt in np.linspace(0, T, 5):
        x, y = v0x * tt, v0y * tt - 0.5 * g * tt * tt
        ax.plot(x, y, "o", color=NAVY, ms=7)
        arrow(ax, x, y, x + 5.2, y, GREEN, 1.8)
        vy = v0y - g * tt
        if abs(vy) > 0.1:
            arrow(ax, x, y, x, y + 0.42 * vy, RED, 1.8)
    ax.text(17.7, 7.6, "$v_y = 0$ at the top", color=RED, ha="center", fontsize=10)
    ax.text(17.7, -3.6, "$v_x$ stays the same (green)      $v_y$ changes (red)", ha="center", color=NAVY, fontsize=9)
    ax.plot([-1, 37], [0, 0], color=NAVY, lw=1.2)
    save(fig, u, "trajectory.png")

    fig, ax = new(4.2, 3.4)
    blank(ax, (-2.5, 10.5), (-6.3, 1.8))
    for i in range(5):
        y = -0.3 * i * i
        ax.plot(0, y, "o", color=NAVY, ms=9)
        ax.plot(2.3 * i, y, "o", color=RED, ms=9)
        ax.plot([0, 2.3 * i], [y, y], color=GRAY, lw=0.8, ls=":")
    ax.text(0, 0.7, "dropped", color=NAVY, ha="center", fontsize=10, fontweight="bold")
    ax.text(5.6, 0.7, "launched horizontally", color=RED, ha="center", fontsize=10, fontweight="bold")
    ax.plot([-2, 10.3], [-5.3, -5.3], color=NAVY, lw=1.5)
    ax.text(4.2, -6.1, "same height at every instant", color=GRAY, ha="center", fontsize=9)
    save(fig, u, "drop-vs-launch.png")

    fig, ax = new()
    t = np.linspace(0, 2.04, 50)
    ax.plot(t, 0 * t + 17.3, color=GREEN, lw=2.5, label="$v_x$ (constant)")
    ax.plot(t, 10 - 9.8 * t, color=RED, lw=2.5, label="$v_y$ (slope = −9.8 m/s²)")
    ax.axhline(0, color=GRAY, lw=0.8)
    graph_axes(ax, "time (s)", "velocity (m/s)")
    ax.legend(frameon=False, fontsize=9, loc="center right")
    ax.set_xlim(0, 2.1)
    save(fig, u, "vx-vy-graphs.png")


# ---------------- Unit 3: Newton's laws ----------------
def newton():
    u = "03-newtons-laws"
    fig, ax = new(3.6, 3.4)
    blank(ax, (-3.6, 3.6), (-3.6, 3.6))
    box(ax, -0.7, -0.5, 1.4, 1.0, "book")
    arrow(ax, 0, 0.5, 0, 2.7, GREEN)
    arrow(ax, 0, -0.5, 0, -2.7, RED)
    ax.text(0.25, 2.3, "$F_{norm}$", color=GREEN, fontsize=12)
    ax.text(0.25, -2.5, "$F_{grav}$", color=RED, fontsize=12)
    ax.text(0, -3.4, "equal arrows: balanced", color=NAVY, ha="center", fontsize=9)
    save(fig, u, "fbd-balanced.png")

    fig, ax = new(4.4, 3.4)
    blank(ax, (-3.9, 5.2), (-3.6, 3.6))
    box(ax, -0.7, -0.5, 1.4, 1.0, "box")
    arrow(ax, 0, 0.5, 0, 2.4, GREEN)
    arrow(ax, 0, -0.5, 0, -2.4, RED)
    arrow(ax, 0.7, 0, 4.0, 0, NAVY)
    arrow(ax, -0.7, 0, -2.1, 0, GRAY)
    ax.text(0.25, 2.1, "$F_{norm}$", color=GREEN, fontsize=12)
    ax.text(0.25, -2.3, "$F_{grav}$", color=RED, fontsize=12)
    ax.text(2.4, 0.3, "$F_{app}$ = 50 N", color=NAVY, fontsize=10, ha="center")
    ax.text(-2.2, 0.3, "$F_{frict}$ = 20 N", color=GRAY, fontsize=10, ha="center")
    ax.text(0.6, -3.4, "$F_{net}$ = 30 N right, so it accelerates right", color=NAVY, ha="center", fontsize=9)
    save(fig, u, "fbd-unbalanced.png")

    fig, ax = new(4.6, 2.6)
    blank(ax, (-5.5, 5.5), (-2.4, 2.4))
    box(ax, -1.6, -0.6, 1.4, 1.2, "A")
    box(ax, 0.2, -0.6, 1.4, 1.2, "B")
    arrow(ax, -1.6, 0, -4.6, 0, RED)
    arrow(ax, 1.6, 0, 4.6, 0, NAVY)
    ax.text(-3.2, 0.4, "force on A\n(by B)", color=RED, ha="center", fontsize=9)
    ax.text(3.2, 0.4, "force on B\n(by A)", color=NAVY, ha="center", fontsize=9)
    ax.text(0, -1.9, "same size, opposite direction, different objects", color=NAVY, ha="center", fontsize=9)
    save(fig, u, "third-law.png")

    fig, ax = new(3.6, 3.4)
    blank(ax, (-3.6, 3.6), (-3.6, 3.6))
    ax.plot(0, 0, "o", color=NAVY, ms=16)
    arrow(ax, 0, 0.3, 0, 2.7, GRAY)
    arrow(ax, 0, -0.3, 0, -2.7, RED)
    ax.text(0.25, 2.3, "$F_{air}$", color=GRAY, fontsize=12)
    ax.text(0.25, -2.5, "$F_{grav}$", color=RED, fontsize=12)
    ax.text(0, -3.4, "balanced: constant (terminal) velocity", color=NAVY, ha="center", fontsize=9)
    save(fig, u, "terminal-velocity.png")


# ---------------- Unit 4: Momentum ----------------
def momentum():
    u = "04-momentum"
    fig, ax = new(4.6, 3.2)
    blank(ax, (-0.5, 10.5), (-0.9, 6.2))
    ax.text(0, 5.6, "BEFORE", color=NAVY, fontweight="bold", fontsize=10)
    ax.plot([0, 10], [3.6, 3.6], color=NAVY, lw=1.2)
    box(ax, 0.6, 3.6, 2.0, 1.1, "2 kg")
    box(ax, 6.2, 3.6, 1.3, 1.1, "1 kg")
    arrow(ax, 2.7, 4.15, 4.6, 4.15, RED)
    ax.text(3.65, 4.45, "3 m/s", color=RED, ha="center", fontsize=9)
    ax.text(6.85, 4.95, "at rest", color=GRAY, ha="center", fontsize=9)
    ax.text(10, 5.6, "p = 6 kg·m/s", color=NAVY, ha="right", fontsize=9)
    ax.text(0, 2.5, "AFTER", color=NAVY, fontweight="bold", fontsize=10)
    ax.plot([0, 10], [0.5, 0.5], color=NAVY, lw=1.2)
    box(ax, 4.0, 0.5, 2.0, 1.1, "2 kg")
    box(ax, 6.0, 0.5, 1.3, 1.1, "1 kg")
    arrow(ax, 7.4, 1.05, 8.7, 1.05, RED)
    ax.text(8.05, 1.35, "2 m/s", color=RED, ha="center", fontsize=9)
    ax.text(10, 2.5, "p = 6 kg·m/s", color=NAVY, ha="right", fontsize=9)
    save(fig, u, "collision-stick.png")

    fig, ax = new(4.6, 3.2)
    blank(ax, (-0.5, 10.5), (-0.9, 6.2))
    ax.text(0, 5.6, "BEFORE", color=NAVY, fontweight="bold", fontsize=10)
    ax.plot([0, 10], [3.6, 3.6], color=NAVY, lw=1.2)
    box(ax, 3.6, 3.6, 2.2, 1.1, "60 kg")
    box(ax, 5.8, 3.6, 0.8, 1.1, "2")
    ax.text(10, 5.6, "p = 0", color=NAVY, ha="right", fontsize=9)
    ax.text(0, 2.5, "AFTER", color=NAVY, fontweight="bold", fontsize=10)
    ax.plot([0, 10], [0.5, 0.5], color=NAVY, lw=1.2)
    box(ax, 2.6, 0.5, 2.2, 1.1, "60 kg")
    box(ax, 6.6, 0.5, 0.8, 1.1, "2")
    arrow(ax, 2.5, 1.05, 1.6, 1.05, RED)
    arrow(ax, 7.5, 1.05, 9.9, 1.05, RED)
    ax.text(1.6, 1.4, "0.5 m/s", color=RED, ha="center", fontsize=9)
    ax.text(8.7, 1.4, "15 m/s", color=RED, ha="center", fontsize=9)
    ax.text(10, 2.5, "p = −30 + 30 = 0", color=NAVY, ha="right", fontsize=9)
    save(fig, u, "recoil.png")

    fig, ax = new()
    ax.fill_between([0, 0.01, 0.02], [0, 100, 0], color="#F5C6C0")
    ax.plot([0, 0.01, 0.02], [0, 100, 0], color=RED, lw=2.5, label="hard surface: short time, big force")
    ax.fill_between([0, 0.05, 0.10], [0, 20, 0], color=FILL, alpha=0.8)
    ax.plot([0, 0.05, 0.10], [0, 20, 0], color=NAVY, lw=2.5, label="padding: long time, small force")
    graph_axes(ax, "time (s)", "force (N)")
    ax.legend(frameon=False, fontsize=8.5, loc="upper right")
    ax.text(0.062, 38, "both areas = 1 N·s", color=NAVY, fontsize=9, ha="center")
    ax.set_xlim(0, 0.105)
    ax.set_ylim(0, 125)
    save(fig, u, "force-time.png")


# ---------------- Unit 5: Work and energy ----------------
def energy():
    u = "05-work-energy"
    fig, ax = new(4.6, 2.8)
    blank(ax, (-1.2, 10.2), (-2.2, 4.3))
    ax.plot([-1, 10], [0, 0], color=NAVY, lw=1.2)
    box(ax, 0, 0, 1.8, 1.2, "sled")
    arrow(ax, 1.8, 0.6, 5.3, 2.6, NAVY, 2.6)
    arrow(ax, 1.8, 0.6, 5.3, 0.6, GREEN, 2)
    ax.plot([5.3, 5.3], [0.6, 2.6], color=GRAY, lw=1, ls=":")
    ax.text(3.0, 2.25, "F", color=NAVY, fontsize=13, fontweight="bold")
    ax.text(5.5, 0.45, "$F\\,\\cos\\theta$ does the work", color=GREEN, fontsize=9, va="center")
    ax.text(3.15, 0.82, "θ", color=GRAY, fontsize=11)
    arrow(ax, 0.2, -1.2, 8.5, -1.2, RED, 1.8)
    ax.text(4.3, -1.9, "displacement d", color=RED, ha="center", fontsize=10)
    save(fig, u, "work-angle.png")

    fig, ax = new()
    ax.plot([0, 4], [50, 50], color=NAVY, lw=2.5)
    ax.fill_between([0, 4], [50, 50], color=FILL)
    ax.text(2, 23, "area = 50 N × 4 m\n= 200 J", color=NAVY, ha="center", fontsize=10)
    graph_axes(ax, "displacement (m)", "force (N)")
    ax.set_xlim(0, 4.6)
    ax.set_ylim(0, 65)
    save(fig, u, "fd-graph.png")

    fig, ax = new(4.8, 3.0)
    x = np.linspace(0, 10, 200)
    y = 2.0 + 2.0 * np.cos(x * np.pi / 5) * np.exp(-0.0 * x)
    ax.plot(x, y, color=NAVY, lw=2.5)
    for px, lab, va, dy in [(0, "top: all PE\n(at rest)", "bottom", 0.35), (5, "bottom: all KE\n(fastest)", "top", -0.45), (10, "top again:\nall PE", "bottom", 0.35)]:
        py = 2.0 + 2.0 * np.cos(px * np.pi / 5)
        ax.plot(px, py, "o", color=RED, ms=10)
        ax.text(px, py + dy, lab, ha="center", va=va, color=NAVY, fontsize=9)
    ax.text(2.5, 2.35, "PE → KE", color=GRAY, fontsize=9, ha="left")
    ax.text(7.5, 2.35, "KE → PE", color=GRAY, fontsize=9, ha="right")
    ax.set_xlim(-1.8, 11.8)
    ax.set_ylim(-1.5, 5.9)
    ax.axis("off")
    save(fig, u, "coaster-energy.png")

    fig, ax = new()
    v = np.linspace(0, 40, 100)
    ax.plot(v, 0.5 * 1000 * v ** 2 / 1000, color=NAVY, lw=2.5)
    for vv in (20, 40):
        ke = 0.5 * 1000 * vv ** 2 / 1000
        ax.plot(vv, ke, "o", color=RED, ms=8)
        ax.plot([vv, vv, 0], [0, ke, ke], color=GRAY, lw=0.8, ls=":")
    ax.text(21.5, 150, "20 m/s: 200 kJ", color=RED, fontsize=9)
    ax.text(38.5, 800, "40 m/s: 800 kJ", color=RED, fontsize=9, ha="right", va="bottom")
    graph_axes(ax, "speed (m/s)", "kinetic energy (kJ), 1000 kg car")
    ax.set_xlim(0, 42)
    ax.set_ylim(0, 900)
    save(fig, u, "ke-vs-speed.png")


if __name__ == "__main__":
    kinematics()
    projectile()
    newton()
    momentum()
    energy()
    print("diagrams written to", os.path.normpath(ROOT))
