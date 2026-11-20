"""Draws the Visual Memory Aid diagrams for every unit (PNG, 200 dpi).
Run: python3.13 tools/diagrams.py
"""
import os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Circle

ROOT = os.path.join(os.path.dirname(__file__), "..", "units")
NAVY, RED, GREEN, GRAY, GOLD, PURPLE = "#1F3864", "#C0392B", "#2E7D32", "#666666", "#B8860B", "#5B2C83"
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 9, "axes.spines.top": False, "axes.spines.right": False})


def new(w=4.2, h=3.0):
    fig, ax = plt.subplots(figsize=(w, h))
    return fig, ax


def save(fig, unit, name):
    d = os.path.join(ROOT, unit, "img")
    os.makedirs(d, exist_ok=True)
    fig.tight_layout()
    fig.savefig(os.path.join(d, name), dpi=200, facecolor="white")
    plt.close(fig)


def blank(ax, xlim, ylim):
    ax.set_xlim(*xlim); ax.set_ylim(*ylim); ax.axis("off")


def arrow(ax, x, y, dx, dy, color=NAVY, lw=2.2, label=None, lx=0, ly=0, ha="center", va="center"):
    ax.annotate("", xy=(x + dx, y + dy), xytext=(x, y),
                arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, shrinkA=0, shrinkB=0, mutation_scale=13))
    if label:
        ax.text(x + dx + lx, y + dy + ly, label, color=color, ha=ha, va=va, fontsize=9, fontweight="bold")


def graph(ax, xlabel, ylabel):
    ax.set_xlabel(xlabel); ax.set_ylabel(ylabel)
    ax.spines["left"].set_color(GRAY); ax.spines["bottom"].set_color(GRAY)
    ax.grid(True, color="#DDDDDD", lw=0.6)


# ---------------- Unit 1: Kinematics ----------------
def kinematics():
    u = "01-kinematics"
    fig, ax = new(4.2, 2.4); blank(ax, (-0.5, 10.5), (0, 4))
    for i in range(6):
        ax.add_patch(Circle((i * 1.8, 3.0), 0.16, color=NAVY))
    ax.text(-0.3, 3.6, "Constant velocity (equal spacing)", fontsize=9, color=NAVY, fontweight="bold")
    xs = [0, 0.4, 1.2, 2.4, 4.0, 6.0, 8.4]
    for x in xs:
        ax.add_patch(Circle((x, 1.0), 0.16, color=RED))
    ax.text(-0.3, 1.6, "Speeding up (spacing grows)", fontsize=9, color=RED, fontweight="bold")
    arrow(ax, 0, 0.3, 9.5, 0, color=GRAY, lw=1.2, label="direction of motion", lx=-4.7, ly=-0.28)
    save(fig, u, "motion-map.png")

    fig, ax = new(); t = np.linspace(0, 5, 50); graph(ax, "time (s)", "position (m)")
    ax.plot(t, 4 * t, color=RED, lw=2); ax.text(3.0, 15.5, "fast\n(steep slope)", color=RED, ha="right", fontsize=8)
    ax.plot(t, 1.5 * t, color=NAVY, lw=2); ax.text(4.9, 5.2, "slow", color=NAVY, ha="right", fontsize=8)
    ax.plot(t, 0 * t + 12, color=GREEN, lw=2); ax.text(0.2, 12.8, "at rest (flat)", color=GREEN, fontsize=8)
    ax.set_xlim(0, 5); ax.set_ylim(0, 20)
    save(fig, u, "position-time.png")

    fig, ax = new(); graph(ax, "time (s)", "velocity (m/s)")
    ax.fill_between([0, 4], [0, 12], color="#D9E2F3"); ax.plot([0, 4], [0, 12], color=NAVY, lw=2.2)
    ax.text(2.75, 3.2, "area = ½(4.0)(12)\n= 24 m", ha="center", fontsize=8.5, color=NAVY)
    ax.text(1.5, 9.6, "slope = 12 ÷ 4.0\n= 3.0 m/s²", ha="center", fontsize=8.5, color=RED)
    ax.set_xlim(0, 4.5); ax.set_ylim(0, 14)
    save(fig, u, "velocity-time.png")

    fig, ax = new(4.2, 3.4); blank(ax, (-3.2, 5), (-48, 5))
    for tt in range(4):
        y = -4.9 * tt ** 2
        ax.add_patch(Circle((0, y), 0.22, color=NAVY)) if False else ax.plot(0, y, "o", color=NAVY, ms=9)
        if tt:
            arrow(ax, 0.5, y, 0, -3.0 * tt, color=RED, lw=2)
        ax.text(1.1, y - 1.0, f"t = {tt} s   v = {9.8*tt:.1f} m/s   d = {4.9*tt*tt:.1f} m", fontsize=8, va="center")
    arrow(ax, -2.2, -8, 0, -9, color=GREEN, lw=2); ax.text(-2.2, -4.5, "a = 9.8 m/s²\n(always)", color=GREEN, ha="center", fontsize=8, fontweight="bold")
    save(fig, u, "free-fall.png")


# ---------------- Unit 2: Projectile motion ----------------
def projectile():
    u = "02-projectile-motion"
    fig, ax = new(); blank(ax, (-1, 10), (-1.5, 6.5)); ax.set_aspect("equal")
    arrow(ax, 0, 0, 8, 4.62, color=NAVY, label="v = 20 m/s", lx=-4.6, ly=-1.3)
    arrow(ax, 0, 0, 8, 0, color=RED); ax.text(4, -0.75, "v$_x$ = v cos θ = 17.3 m/s", color=RED, ha="center", fontsize=8.5, fontweight="bold")
    arrow(ax, 8, 0, 0, 4.62, color=GREEN); ax.text(8.2, 5.4, "v$_y$ = v sin θ\n= 10.0 m/s", color=GREEN, ha="center", fontsize=8.5, fontweight="bold")
    ax.text(1.9, 0.38, "θ = 30°", fontsize=8.5)
    save(fig, u, "components.png")

    fig, ax = new(); blank(ax, (-1.5, 9), (-6, 1.6))
    ax.add_patch(Rectangle((-1.5, -5.4), 1.5, 5.4, color="#DDDDDD"))
    for i in range(5):
        tt = i * 0.25; y = -4.9 * tt ** 2 * 1.05
        ax.plot(0.4, y, "o", color=NAVY, ms=8); ax.plot(0.4 + 7.2 * tt, y, "o", color=RED, ms=8)
        ax.plot([0.4, 0.4 + 7.2 * tt], [y, y], color=GRAY, lw=0.6, ls=":")
    ax.plot([-1.5, 9], [-5.4, -5.4], color=GRAY, lw=1.5)
    ax.text(0.4, 0.75, "dropped", color=NAVY, ha="center", fontsize=8.5, fontweight="bold")
    ax.text(5.0, 0.75, "launched horizontally", color=RED, ha="center", fontsize=8.5, fontweight="bold")
    ax.text(4.2, -5.85, "both land at the same time", ha="center", fontsize=8.5)
    save(fig, u, "drop-vs-launch.png")

    fig, ax = new(4.2, 2.8); vx, vy0, g = 17.32, 10.0, 9.8
    T = 2 * vy0 / g; t = np.linspace(0, T, 100)
    ax.plot(vx * t, vy0 * t - 0.5 * g * t ** 2, color=GRAY, lw=1.3, ls="--")
    for f in (0.0, 0.25, 0.5, 0.75, 1.0):
        tt = f * T; x = vx * tt; y = vy0 * tt - 0.5 * g * tt ** 2; vy = vy0 - g * tt
        ax.plot(x, y, "o", color=NAVY, ms=6)
        arrow(ax, x, y, 5.0, 0, color=RED, lw=1.8)
        if abs(vy) > 0.1:
            arrow(ax, x, y, 0, vy * 0.3, color=GREEN, lw=1.8)
    ax.text(17.7, 6.0, "top: v$_y$ = 0,\nstill moving at v$_x$", ha="center", fontsize=8)
    ax.text(20, -3.6, "red: v$_x$ (never changes)     green: v$_y$ (changes)", ha="center", fontsize=8)
    blank(ax, (-2, 42), (-4.3, 7.4))
    save(fig, u, "trajectory.png")

    fig, ax = new(4.2, 2.8); v = 20.0
    for ang, col in ((30, NAVY), (45, RED), (60, GREEN)):
        th = np.radians(ang); T = 2 * v * np.sin(th) / 9.8; t = np.linspace(0, T, 100)
        ax.plot(v * np.cos(th) * t, v * np.sin(th) * t - 4.9 * t ** 2, color=col, lw=2, label=f"{ang}°")
    graph(ax, "horizontal distance (m)", "height (m)"); ax.legend(frameon=False, fontsize=8, title="launch angle", title_fontsize=8)
    ax.set_xlim(0, 44); ax.set_ylim(0, 17)
    save(fig, u, "range-angles.png")


# ---------------- Unit 3: Newton's laws ----------------
def box(ax, x, y, w, h, label=None):
    ax.add_patch(Rectangle((x - w / 2, y - h / 2), w, h, facecolor="#EEF3FA", edgecolor=NAVY, lw=1.5))
    if label:
        ax.text(x, y, label, ha="center", va="center", fontsize=8)


def newton():
    u = "03-newtons-laws"
    fig, ax = new(4.2, 3.0); blank(ax, (-5, 5), (-4.2, 4.2)); box(ax, 0, 0, 2.2, 1.2, "book")
    arrow(ax, 0, 0.6, 0, 2.4, color=GREEN, label="F$_{norm}$ = 9.8 N", ly=0.4)
    arrow(ax, 0, -0.6, 0, -2.4, color=RED, label="F$_{grav}$ = 9.8 N", ly=-0.4)
    ax.text(3.2, 0, "F$_{net}$ = 0\nat rest", ha="center", fontsize=9, color=NAVY)
    save(fig, u, "fbd-balanced.png")

    fig, ax = new(4.2, 3.0); blank(ax, (-5.2, 6.8), (-4.2, 4.2)); box(ax, 0, 0, 2.2, 1.4, "10 kg")
    arrow(ax, 0, 0.7, 0, 2.2, color=GREEN, label="F$_{norm}$", ly=0.4)
    arrow(ax, 0, -0.7, 0, -2.2, color=RED, label="F$_{grav}$", ly=-0.4)
    arrow(ax, 1.1, 0, 3.75, 0, color=NAVY); ax.text(3.0, 0.5, "F$_{app}$ = 50 N", color=NAVY, ha="center", fontsize=9, fontweight="bold")
    arrow(ax, -1.1, 0, -1.5, 0, color=GOLD); ax.text(-3.0, 0.5, "F$_{frict}$ = 20 N", color=GOLD, ha="center", fontsize=9, fontweight="bold")
    ax.text(3.6, -2.6, "F$_{net}$ = 30 N right\na = 3.0 m/s²", ha="center", fontsize=8.5, color=NAVY)
    save(fig, u, "fbd-unbalanced.png")

    fig, ax = new(4.2, 2.6); blank(ax, (-6, 6), (-2.6, 3.0))
    box(ax, -3.2, 0, 2.4, 1.6, "A"); box(ax, 3.2, 0, 2.4, 1.6, "B")
    arrow(ax, 2.0, 0.35, -2.6, 0, color=RED); ax.text(0.2, 0.75, "force of B on A", color=RED, ha="center", fontsize=8.5, fontweight="bold")
    arrow(ax, -2.0, -0.35, 2.6, 0, color=NAVY); ax.text(-0.2, -0.85, "force of A on B", color=NAVY, ha="center", fontsize=8.5, fontweight="bold")
    ax.text(0, 2.3, "Same size, opposite direction, different objects", ha="center", fontsize=8.5)
    save(fig, u, "third-law.png")

    fig, ax = new(); graph(ax, "net force (N)", "acceleration (m/s²)")
    F = np.array([0, 2, 4, 6, 8]); ax.plot(F, F / 2.0, color=NAVY, lw=2); ax.plot(F[1:], F[1:] / 2.0, "o", color=NAVY, ms=5)
    ax.text(3.0, 3.2, "slope = 1 ÷ m\n(m = 2.0 kg)", ha="center", fontsize=8.5, color=RED)
    ax.set_xlim(0, 9); ax.set_ylim(0, 4.6)
    save(fig, u, "a-vs-f.png")


# ---------------- Unit 4: Momentum ----------------
def track(ax, y, x0=-0.5, x1=11):
    ax.plot([x0, x1], [y, y], color=GRAY, lw=1.2)


def momentum():
    u = "04-momentum"
    fig, ax = new(4.2, 3.0); blank(ax, (-0.8, 11.5), (-0.6, 6.4))
    ax.text(-0.5, 5.9, "BEFORE", fontsize=8.5, fontweight="bold", color=GRAY); track(ax, 3.6)
    box(ax, 2, 4.2, 2.2, 1.2, "2.0 kg"); arrow(ax, 3.2, 4.2, 2.2, 0, color=RED); ax.text(4.3, 4.75, "3.0 m/s", color=RED, ha="center", fontsize=8.5)
    box(ax, 8.2, 4.1, 1.6, 1.0, "1.0 kg"); ax.text(8.2, 5.0, "at rest", ha="center", fontsize=8)
    ax.text(-0.5, 2.7, "AFTER", fontsize=8.5, fontweight="bold", color=GRAY); track(ax, 0.4)
    box(ax, 5.0, 1.0, 2.2, 1.2, "2.0 kg"); box(ax, 6.9, 0.9, 1.6, 1.0, "1.0 kg")
    arrow(ax, 7.8, 1.0, 1.5, 0, color=RED); ax.text(9.6, 1.55, "2.0 m/s", color=RED, ha="center", fontsize=8.5)
    ax.text(5.3, -0.25, "total momentum: 6.0 kg·m/s before and after", ha="center", fontsize=8)
    save(fig, u, "inelastic.png")

    fig, ax = new(4.2, 3.0); blank(ax, (-0.8, 11.5), (-0.6, 6.4))
    ax.text(-0.5, 5.9, "BEFORE", fontsize=8.5, fontweight="bold", color=GRAY); track(ax, 3.6)
    box(ax, 5.0, 4.3, 1.6, 1.4, "skater\n60 kg"); ax.add_patch(Circle((6.2, 4.3), 0.28, color=GOLD)); ax.text(8.6, 4.3, "all at rest: p = 0", ha="center", fontsize=8)
    ax.text(-0.5, 2.7, "AFTER", fontsize=8.5, fontweight="bold", color=GRAY); track(ax, 0.4)
    box(ax, 4.0, 1.1, 1.6, 1.4, "skater\n60 kg"); arrow(ax, 3.2, 1.1, -1.0, 0, color=NAVY); ax.text(1.7, 1.75, "0.30 m/s", color=NAVY, ha="center", fontsize=8.5)
    ax.add_patch(Circle((7.6, 1.1), 0.28, color=GOLD)); arrow(ax, 7.9, 1.1, 2.4, 0, color=RED); ax.text(9.2, 1.75, "2.0 kg at 9.0 m/s", color=RED, ha="center", fontsize=8.5)
    ax.text(5.3, -0.25, "−18 kg·m/s + 18 kg·m/s = 0", ha="center", fontsize=8)
    save(fig, u, "recoil.png")

    fig, ax = new(); graph(ax, "time (s)", "force (thousand N)")
    ax.fill_between([0, 0.01, 0.02], [0, 105, 0], color="#F5C6C0"); ax.plot([0, 0.01, 0.02], [0, 105, 0], color=RED, lw=2)
    ax.fill_between([0, 0.1, 0.2], [0, 10.5, 0], color="#D9E2F3", alpha=0.9); ax.plot([0, 0.1, 0.2], [0, 10.5, 0], color=NAVY, lw=2)
    ax.text(0.03, 80, "no airbag: short time,\nlarge force", color=RED, fontsize=8)
    ax.text(0.085, 22, "airbag: long time, small force", color=NAVY, fontsize=8)
    ax.text(0.11, 50, "same area = same impulse\n(1050 N·s)", fontsize=8)
    ax.set_xlim(0, 0.22); ax.set_ylim(0, 115); ax.set_xticks([0, 0.05, 0.10, 0.15, 0.20])
    save(fig, u, "impulse-graph.png")

    fig, ax = new(4.2, 3.0); blank(ax, (-0.5, 11), (-0.8, 6.2))
    for yb, name, after in ((4.2, "STICKS (clay)", 0), (1.2, "BOUNCES (rubber)", -1)):
        ax.add_patch(Rectangle((9.6, yb - 1.1), 0.5, 2.2, color="#BBBBBB"))
        ax.text(-0.3, yb + 1.25, name, fontsize=8.5, fontweight="bold", color=GRAY)
        ax.add_patch(Circle((1.0, yb + 0.35), 0.3, color=NAVY)); arrow(ax, 1.4, yb + 0.35, 2.0, 0, color=NAVY); ax.text(4.6, yb + 0.35, "before: +mv", fontsize=8, va="center", color=NAVY)
        if after:
            ax.add_patch(Circle((3.6, yb - 0.55), 0.3, color=RED)); arrow(ax, 3.2, yb - 0.55, -2.0, 0, color=RED); ax.text(4.6, yb - 0.55, "after: −mv", fontsize=8, va="center", color=RED)
            ax.text(7.0, yb - 0.1, "Δp = 2mv", fontsize=9, fontweight="bold", va="center")
        else:
            ax.add_patch(Circle((9.3, yb - 0.55), 0.3, color=RED)); ax.text(4.6, yb - 0.55, "after: 0", fontsize=8, va="center", color=RED)
            ax.text(7.0, yb - 0.1, "Δp = mv", fontsize=9, fontweight="bold", va="center")
    save(fig, u, "bounce-vs-stick.png")


# ---------------- Unit 5: Work and energy ----------------
def energy():
    u = "05-work-energy"
    fig, ax = new(4.2, 2.8); blank(ax, (-1.5, 10.5), (-2.2, 5.6)); ax.set_aspect("equal")
    ax.plot([-1.5, 10.5], [-0.6, -0.6], color=GRAY, lw=1.2); box(ax, 0.6, 0, 1.8, 1.2, "crate")
    arrow(ax, 1.5, 0.3, 2.5, 4.33, color=NAVY, label="F = 50 N", lx=0.2, ly=0.0, ha="left")
    arrow(ax, 1.5, 0.3, 2.5, 0, color=RED); ax.text(4.2, 0.05, "F cos θ = 25 N", color=RED, fontsize=8.5, fontweight="bold", va="center", ha="left")
    ax.text(2.25, 0.75, "60°", fontsize=8)
    arrow(ax, 0, -1.4, 8, 0, color=GREEN, lw=1.8); ax.text(4, -1.95, "displacement d = 4.0 m", color=GREEN, ha="center", fontsize=8.5, fontweight="bold")
    save(fig, u, "work-angle.png")

    fig, ax = new(); graph(ax, "displacement (m)", "force (N)")
    ax.fill_between([0, 4], [50, 50], color="#D9E2F3"); ax.plot([0, 4], [50, 50], color=NAVY, lw=2.2); ax.plot([4, 4], [0, 50], color=NAVY, lw=1, ls="--")
    ax.text(2, 25, "area = work\n50 N × 4.0 m = 200 J", ha="center", fontsize=8.5, color=NAVY)
    ax.set_xlim(0, 5); ax.set_ylim(0, 65)
    save(fig, u, "fd-graph.png")

    fig, ax = new(4.4, 3.0)
    x = np.linspace(0, 10, 300)
    y = np.where(x < 5, 10 + 10 * np.cos(np.pi * x / 5), 5 - 5 * np.cos(np.pi * (x - 5) / 2.5))
    y = np.where(x > 7.5, 10, y)
    ax.plot(x, y, color=GRAY, lw=2.2); ax.plot([0, 10], [0, 0], color="#BBBBBB", lw=1)
    for px, py, lab in ((0, 20, "top: 20 m\nall PE\nv = 0"), (5, 0, "bottom: 0 m\nall KE\nv = 19.8 m/s"), (7.5, 10, "10 m hill\nhalf PE, half KE\nv = 14.0 m/s")):
        ax.plot(px, py + 0.7, "s", color=RED, ms=8)
    ax.text(0.5, 21.5, "top: 20 m, all PE, v = 0", fontsize=8, va="bottom")
    ax.text(5, -1.2, "bottom: all KE\nv = 19.8 m/s", fontsize=8, ha="center", va="top")
    ax.text(7.6, 12.6, "10 m hill: half PE, half KE\nv = 14.0 m/s", fontsize=8, ha="center", va="bottom")
    blank(ax, (-0.8, 11.2), (-7, 26))
    save(fig, u, "coaster.png")

    fig, ax = new(); labels = ["PE", "KE", "thermal", "", "PE", "KE", "thermal"]
    vals = [98, 0, 0, 0, 0, 64, 34]; cols = [NAVY, RED, GOLD, "white", NAVY, RED, GOLD]
    ax.bar(range(7), vals, color=cols, width=0.7); ax.set_xticks(range(7)); ax.set_xticklabels(labels, fontsize=8)
    for i, v in enumerate(vals):
        if i != 3:
            ax.text(i, v + 2.5, f"{v} J", ha="center", fontsize=8)
    ax.text(1, 112, "START (top of ramp)", ha="center", fontsize=8.5, fontweight="bold"); ax.text(5, 112, "END (bottom)", ha="center", fontsize=8.5, fontweight="bold")
    ax.set_ylabel("energy (J)"); ax.set_ylim(0, 122); ax.spines["left"].set_color(GRAY); ax.spines["bottom"].set_color(GRAY)
    save(fig, u, "energy-bars.png")


if __name__ == "__main__":
    kinematics(); projectile(); newton(); momentum(); energy()
    print("diagrams written")
