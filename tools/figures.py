"""Draws the Visual Memory Aid diagrams for every unit (200 dpi PNG).

Run:  python3 tools/figures.py
Only standard classroom diagram types are used: motion graphs, motion maps,
free-body diagrams, vector sketches, before/after diagrams, energy bar charts.
"""
import os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Circle

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "units")
NAVY, RED, GREEN, GRAY, GOLD = "#1F3864", "#C0392B", "#2E7D32", "#555555", "#B7791F"
plt.rcParams.update({"font.size": 11, "font.family": "DejaVu Sans", "axes.spines.top": False,
                     "axes.spines.right": False, "axes.linewidth": 1.2})


def new(w=4.6, h=3.2):
    fig, ax = plt.subplots(figsize=(w, h))
    return fig, ax


def save(fig, unit, name):
    d = os.path.join(ROOT, unit, "figures")
    os.makedirs(d, exist_ok=True)
    fig.tight_layout()
    fig.savefig(os.path.join(d, name), dpi=200, facecolor="white")
    plt.close(fig)


def arrow(ax, x, y, dx, dy, color=NAVY, lw=2.4, label=None, lpos=None, ha="center", va="center", fs=11):
    ax.annotate("", xy=(x + dx, y + dy), xytext=(x, y),
                arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=16, shrinkA=0, shrinkB=0))
    if label:
        lx, ly = lpos if lpos else (x + dx, y + dy)
        ax.text(lx, ly, label, color=color, ha=ha, va=va, fontsize=fs, fontweight="bold")


def blank(ax, xlim, ylim):
    ax.set_xlim(*xlim); ax.set_ylim(*ylim); ax.set_aspect("equal"); ax.axis("off")


def graph_axes(ax, xl, yl):
    ax.set_xlabel(xl); ax.set_ylabel(yl); ax.set_xticks([]); ax.set_yticks([])


# ---------------- Unit 1: Kinematics ----------------
def kinematics():
    u = "01-kinematics"
    fig, ax = new()
    ax.plot([0, 3], [0, 3], color=NAVY, lw=2.5); ax.plot([3, 5.5], [3, 3], color=GRAY, lw=2.5)
    ax.plot([5.5, 8], [3, 1], color=RED, lw=2.5)
    ax.text(0.15, 3.0, "constant +v\n(positive slope)", color=NAVY, fontsize=9.5)
    ax.text(3.25, 3.25, "at rest (flat)", color=GRAY, fontsize=9.5)
    ax.text(5.6, 1.0, "constant −v\n(negative slope)", color=RED, fontsize=9.5, ha="left", va="top")
    ax.set_xlim(0, 8.6); ax.set_ylim(0, 4.2); graph_axes(ax, "time (s)", "position (m)")
    ax.set_title("Position-time graph", color=NAVY, fontweight="bold")
    save(fig, u, "pt_graph.png")

    fig, ax = new()
    ax.plot([0, 4, 10], [0, 10, 10], color=NAVY, lw=2.5)
    ax.fill_between([0, 4, 10], [0, 10, 10], color="#D9E2F3")
    ax.text(5.6, 4.5, "area = displacement\n20 m + 60 m = 80 m", ha="center", fontsize=9.5, color=NAVY)
    ax.text(0.2, 11.2, "slope = acceleration\n10/4 = 2.5 m/s²", fontsize=9.5, color=RED, va="bottom")
    ax.set_xlim(0, 10.5); ax.set_ylim(0, 14.5)
    ax.set_xlabel("time (s)"); ax.set_ylabel("velocity (m/s)"); ax.set_xticks([0, 4, 10]); ax.set_yticks([0, 10])
    ax.set_title("Velocity-time graph", color=NAVY, fontweight="bold")
    save(fig, u, "vt_graph.png")

    fig, ax = new()
    blank(ax, (-0.5, 10.5), (0, 6))
    for i in range(6):
        ax.add_patch(Circle((0.5 + 1.7 * i, 4.2), 0.16, color=NAVY))
    for i in range(5):
        arrow(ax, 0.7 + 1.7 * i, 4.2, 1.2, 0, color=NAVY, lw=1.6)
    ax.text(5, 5.2, "Constant velocity: equal spacing", ha="center", color=NAVY, fontweight="bold", fontsize=10)
    xs = [0.5, 0.9, 1.9, 3.5, 5.7, 8.5]
    for x in xs:
        ax.add_patch(Circle((x, 1.4), 0.16, color=RED))
    for a, b in zip(xs[:-1], xs[1:]):
        arrow(ax, a + 0.2, 1.4, max(b - a - 0.45, 0.05), 0, color=RED, lw=1.6)
    ax.text(5, 2.4, "Speeding up: spacing grows", ha="center", color=RED, fontweight="bold", fontsize=10)
    ax.text(5, 0.3, "each dot = position after equal time intervals", ha="center", fontsize=9, color=GRAY)
    save(fig, u, "motion_map.png")

    fig, ax = new(4.6, 3.6)
    blank(ax, (-4, 8), (-57, 5))
    ax.set_aspect("auto")
    for t in range(4):
        y = -4.9 * t * t
        ax.add_patch(plt.Circle((0, y), 0.0, color=NAVY))
        ax.plot(0, y, "o", color=NAVY, ms=9)
        ax.text(0.8, y, f"t = {t} s   v = {9.8*t:.1f} m/s   fallen {4.9*t*t:.1f} m", va="center", fontsize=9)
        if t:
            arrow(ax, -1.2, y, 0, -3.0 * t, color=RED, lw=2)
    ax.text(-2.6, -22, "v grows\n9.8 m/s\neach\nsecond", color=RED, ha="center", fontsize=9)
    ax.set_title("Free fall from rest", color=NAVY, fontweight="bold")
    save(fig, u, "freefall.png")


# ---------------- Unit 2: Projectile motion ----------------
def projectile():
    u = "02-projectile-motion"
    fig, ax = new()
    blank(ax, (-0.8, 6.2), (-0.9, 4))
    vx, vy = 5.2, 3.0
    arrow(ax, 0, 0, vx, vy, color=NAVY, label="v", lpos=(2.3, 1.9))
    arrow(ax, 0, 0, vx, 0, color=GREEN, label="vx = v cos θ", lpos=(2.6, -0.45))
    arrow(ax, vx, 0, 0, vy, color=RED, label="vy = v sin θ", lpos=(5.3, 3.45), ha="right")
    ax.text(1.15, 0.25, "θ", fontsize=12)
    ax.add_patch(Rectangle((vx - 0.3, 0), 0.3, 0.3, fill=False, color=GRAY))
    save(fig, u, "components.png")

    fig, ax = new(4.8, 3.2)
    g, v0x, v0y = 9.8, 12.0, 14.0
    T = 2 * v0y / g
    t = np.linspace(0, T, 100)
    ax.plot(v0x * t, v0y * t - 0.5 * g * t * t, color=GRAY, lw=1.5, ls="--")
    for tt in [0, T / 4, T / 2, 3 * T / 4, T]:
        x, y = v0x * tt, v0y * tt - 0.5 * g * tt * tt
        ax.plot(x, y, "o", color="black", ms=5)
        arrow(ax, x, y, 4.5, 0, color=GREEN, lw=2)
        vy = v0y - g * tt
        if abs(vy) > 0.5:
            arrow(ax, x, y, 0, vy * 0.32, color=RED, lw=2)
    ax.text(v0x * T / 2, 11.4, "top: vy = 0, still moving at vx", ha="center", fontsize=9)
    ax.text(1, -4.3, "vx (green): same everywhere      vy (red): changes", fontsize=9)
    ax.set_xlim(-1.5, 41); ax.set_ylim(-5.5, 13); ax.axis("off")
    save(fig, u, "trajectory.png")

    fig, ax = new()
    ts = np.array([0, 1, 2, 3, 4]) * 0.11
    for tt in ts:
        y = 5 - 0.5 * 9.8 * tt * tt * 4.2
        ax.plot(0.6, y, "o", color=RED, ms=9)
        ax.plot(0.6 + 9.5 * tt, y, "o", color=NAVY, ms=9)
        ax.plot([0.6, 0.6 + 9.5 * tt], [y, y], color=GRAY, lw=0.8, ls=":")
    ax.plot([-0.3, 0.9], [5.25, 5.25], color="black", lw=3)
    ax.plot([-0.5, 6], [0.9, 0.9], color="black", lw=1.5)
    ax.text(0.45, 3.0, "dropped", color=RED, rotation=90, ha="right", va="center", fontsize=10)
    ax.text(3.3, 4.6, "launched horizontally", color=NAVY, fontsize=10)
    ax.text(2.8, 0.35, "same height at each instant: land together", ha="center", fontsize=9)
    ax.set_xlim(-0.6, 6); ax.set_ylim(0, 5.8); ax.axis("off")
    save(fig, u, "drop_vs_launch.png")

    fig, ax = new()
    v, g = 20.0, 9.8
    for ang, col in [(30, GREEN), (45, NAVY), (60, RED)]:
        th = np.radians(ang)
        T = 2 * v * np.sin(th) / g
        t = np.linspace(0, T, 80)
        ax.plot(v * np.cos(th) * t, v * np.sin(th) * t - 0.5 * g * t * t, color=col, lw=2.3, label=f"{ang}°")
    ax.legend(frameon=False, title="launch angle", fontsize=9, title_fontsize=9, loc="upper right")
    ax.set_xlabel("horizontal distance (m)"); ax.set_ylabel("height (m)")
    ax.set_xlim(0, 52); ax.set_ylim(0, 18)
    save(fig, u, "angles.png")


# ---------------- Unit 3: Newton's laws ----------------
def fbd(ax, fapp, ffr, title, note):
    blank(ax, (-4.2, 4.2), (-3.4, 3.6))
    ax.add_patch(Rectangle((-0.7, -0.7), 1.4, 1.4, facecolor="#D9E2F3", edgecolor=NAVY, lw=2))
    arrow(ax, 0, 0.7, 0, 1.6, label="F_norm", lpos=(0.15, 2.55), ha="left")
    arrow(ax, 0, -0.7, 0, -1.6, label="F_grav", lpos=(0.15, -2.55), ha="left")
    arrow(ax, 0.7, 0, fapp, 0, color=GREEN, label="F_app", lpos=(0.85, 0.45), ha="left")
    arrow(ax, -0.7, 0, -ffr, 0, color=RED, label="F_frict", lpos=(-0.85, 0.45), ha="right")
    ax.set_title(title, color=NAVY, fontweight="bold", fontsize=11)
    ax.text(0, -3.25, note, ha="center", fontsize=9.5)


def newton():
    u = "03-newtons-laws"
    fig, ax = new(); fbd(ax, 2.0, 2.0, "Balanced forces", "F_net = 0: constant velocity (or at rest)"); save(fig, u, "fbd_balanced.png")
    fig, ax = new(); fbd(ax, 3.0, 1.2, "Unbalanced forces", "F_net to the right: accelerates right"); save(fig, u, "fbd_unbalanced.png")

    fig, ax = new()
    blank(ax, (-5, 5), (-2.6, 3))
    ax.add_patch(Rectangle((-2.6, -0.8), 2.6, 1.6, facecolor="#D9E2F3", edgecolor=NAVY, lw=2))
    ax.add_patch(Rectangle((0, -0.5), 1.2, 1.0, facecolor="#FADBD8", edgecolor=RED, lw=2))
    ax.text(-1.3, 0, "A", ha="center", va="center", fontweight="bold", fontsize=13, color=NAVY)
    ax.text(0.6, 0, "B", ha="center", va="center", fontweight="bold", fontsize=13, color=RED)
    arrow(ax, 0.6, 1.1, 2.4, 0, color=NAVY, label="force of A on B", lpos=(2.2, 1.55))
    arrow(ax, -1.3, 1.5, -2.4, 0, color=RED, label="force of B on A", lpos=(-2.6, 1.95))
    ax.text(0, -1.7, "equal size, opposite direction,\nacting on two different objects", ha="center", fontsize=9.5)
    ax.set_title("Action-reaction pair", color=NAVY, fontweight="bold", fontsize=11)
    save(fig, u, "third_law.png")

    fig, ax = new(4.8, 3.2)
    blank(ax, (-1, 11), (-3.6, 3.6))
    for i, (fa, lab) in enumerate([(0.0, "just released\nF_air = 0\na = 9.8 m/s²"), (1.1, "speeding up\nF_air < F_grav\na < 9.8 m/s²"), (2.2, "terminal velocity\nF_air = F_grav\na = 0")]):
        x = 1 + 4 * i
        ax.plot(x, 0, "o", color="black", ms=12)
        arrow(ax, x, -0.15, 0, -2.2, color=NAVY, label="F_grav" if i == 0 else None, lpos=(x + 0.25, -1.4), ha="left", fs=9)
        if fa:
            arrow(ax, x, 0.15, 0, fa, color=RED, label="F_air" if i == 1 else None, lpos=(x + 0.25, 0.8), ha="left", fs=9)
        ax.text(x, -3.4, lab, ha="center", fontsize=8.5, va="center")
    save(fig, u, "terminal.png")


# ---------------- Unit 4: Momentum ----------------
def momentum():
    u = "04-momentum"
    fig, ax = new(4.8, 3.2)
    blank(ax, (-0.5, 10.5), (-0.6, 6.4))
    ax.text(0, 5.9, "BEFORE", fontweight="bold", color=NAVY)
    ax.add_patch(Rectangle((0.5, 4.0), 1.6, 0.9, facecolor="#D9E2F3", edgecolor=NAVY, lw=2))
    ax.add_patch(Rectangle((6.0, 4.0), 2.4, 1.2, facecolor="#FADBD8", edgecolor=RED, lw=2))
    ax.text(1.3, 4.45, "2000 kg", ha="center", va="center", fontsize=8.5); ax.text(7.2, 4.6, "3000 kg", ha="center", va="center", fontsize=8.5)
    arrow(ax, 2.2, 4.45, 2.2, 0, color=GREEN, label="10 m/s", lpos=(3.3, 4.9), fs=9)
    ax.text(7.2, 3.55, "at rest", ha="center", fontsize=8.5)
    ax.text(0, 2.6, "AFTER", fontweight="bold", color=NAVY)
    ax.add_patch(Rectangle((3.0, 0.9), 1.6, 0.9, facecolor="#D9E2F3", edgecolor=NAVY, lw=2))
    ax.add_patch(Rectangle((4.6, 0.9), 2.4, 1.2, facecolor="#FADBD8", edgecolor=RED, lw=2))
    arrow(ax, 7.1, 1.4, 1.0, 0, color=GREEN, label="4.0 m/s", lpos=(8.9, 1.4), ha="left", fs=9)
    ax.text(5, 0.1, "20,000 kg·m/s before = 20,000 kg·m/s after", ha="center", fontsize=9)
    save(fig, u, "collision_stick.png")

    fig, ax = new()
    ax.fill_between([0.5, 1.5], [8, 8], color="#FADBD8"); ax.plot([0.5, 0.5, 1.5, 1.5], [0, 8, 8, 0], color=RED, lw=2)
    ax.fill_between([3, 7], [2, 2], color="#D9E2F3"); ax.plot([3, 3, 7, 7], [0, 2, 2, 0], color=NAVY, lw=2)
    ax.text(1.0, 8.4, "short time,\nlarge force", ha="center", color=RED, fontsize=9.5)
    ax.text(5, 2.4, "long time, small force", ha="center", color=NAVY, fontsize=9.5)
    ax.text(5, 0.8, "same area", ha="center", fontsize=9.5); ax.text(1.0, 3.8, "same\narea", ha="center", fontsize=9)
    ax.set_xlim(0, 8); ax.set_ylim(0, 11); graph_axes(ax, "time (s)", "force (N)")
    save(fig, u, "ft_graph.png")

    fig, ax = new()
    blank(ax, (-5, 5), (-2.4, 3))
    ax.add_patch(Circle((-0.7, 0.3), 0.6, facecolor="#D9E2F3", edgecolor=NAVY, lw=2))
    ax.add_patch(Circle((0.6, 0.3), 0.45, facecolor="#FADBD8", edgecolor=RED, lw=2))
    ax.text(-0.7, 0.3, "60 kg", ha="center", va="center", fontsize=8); ax.text(0.6, 0.3, "40", ha="center", va="center", fontsize=8)
    arrow(ax, -1.4, 0.3, -2.0, 0, color=NAVY, label="2.0 m/s", lpos=(-2.4, 0.8), fs=9.5)
    arrow(ax, 1.15, 0.3, 3.0, 0, color=RED, label="3.0 m/s", lpos=(2.7, 0.8), fs=9.5)
    ax.text(-2.6, -0.5, "p = −120 kg·m/s", ha="center", fontsize=9, color=NAVY)
    ax.text(2.7, -0.5, "p = +120 kg·m/s", ha="center", fontsize=9, color=RED)
    ax.text(0, -1.7, "total momentum: 0 before, 0 after", ha="center", fontsize=9.5)
    ax.set_title("Explosion (push-off) from rest", color=NAVY, fontweight="bold", fontsize=11)
    save(fig, u, "explosion.png")

    fig, ax = new(4.8, 3.2)
    blank(ax, (-0.5, 10.5), (-0.8, 6.2))
    for y0, lab, vout, dp in [(3.6, "BOUNCES", 2.0, "Δp = m(−v − v) = −2mv"), (0.4, "STICKS", 0, "Δp = m(0 − v) = −mv")]:
        ax.add_patch(Rectangle((9.3, y0 - 0.2), 0.35, 2.2, color=GRAY))
        ax.text(0, y0 + 1.85, lab, fontweight="bold", color=NAVY, fontsize=10)
        ax.plot(1.0, y0 + 1.1, "o", color=NAVY, ms=11)
        arrow(ax, 1.3, y0 + 1.1, 2.0, 0, color=GREEN, label="+v", lpos=(2.3, y0 + 1.5), fs=9)
        ax.plot(8.9 if not vout else 6.0, y0 + 1.1, "o", color=RED, ms=11)
        if vout:
            arrow(ax, 5.7, y0 + 1.1, -vout, 0, color=RED, label="−v", lpos=(4.7, y0 + 1.5), fs=9)
        ax.text(4.9, y0 + 0.2, dp, ha="center", fontsize=9.5)
    save(fig, u, "bounce_vs_stick.png")


# ---------------- Unit 5: Work & energy ----------------
def energy():
    u = "05-work-energy"
    fig, ax = new()
    ax.plot([0, 6], [5, 5], color=NAVY, lw=2.5); ax.fill_between([0, 6], [5, 5], color="#D9E2F3")
    ax.plot([6, 6], [0, 5], color=NAVY, lw=1, ls=":")
    ax.text(3, 2.4, "area = work\n(50 N)(6 m) = 300 J", ha="center", color=NAVY, fontsize=10)
    ax.set_xlim(0, 7.5); ax.set_ylim(0, 7); ax.set_xlabel("displacement (m)"); ax.set_ylabel("force (N)")
    ax.set_xticks([0, 6]); ax.set_yticks([0, 5]); ax.set_yticklabels(["0", "50"])
    save(fig, u, "fd_graph.png")

    fig, ax = new(4.8, 3.2)
    x = np.linspace(0, 10, 200)
    y = 2.2 + 2.0 * np.cos(x * 2 * np.pi / 10) * np.exp(-0.0 * x) + 0.6
    ax.plot(x, y, color=NAVY, lw=3)
    ax.plot([0, 10], [-0.35, -0.35], color="black", lw=1)
    for xx, lab, va, dy in [(0, "top:\nmost PE,\nleast KE", "bottom", 0.25), (5, "bottom: least PE, most KE", "top", -0.3), (10, "top:\nmost PE", "bottom", 0.25)]:
        yy = 2.8 + 2.0 * np.cos(xx * 2 * np.pi / 10)
        ax.plot(xx, yy, "o", color=RED, ms=10)
        ax.text(xx, yy + dy, lab, ha="center", va=va, fontsize=9)
    ax.set_xlim(-1.6, 11.6); ax.set_ylim(-0.8, 7.2); ax.axis("off")
    save(fig, u, "coaster.png")

    fig, ax = new(4.8, 3.2)
    pos = ["top", "halfway", "bottom"]
    pe = [100, 50, 0]; ke = [0, 50, 100]
    xi = np.arange(3)
    ax.bar(xi - 0.2, pe, 0.38, color=NAVY, label="PE")
    ax.bar(xi + 0.2, ke, 0.38, color=GOLD, label="KE")
    ax.set_xticks(xi); ax.set_xticklabels(pos); ax.set_ylabel("energy (J)"); ax.set_yticks([0, 50, 100])
    ax.legend(frameon=False, fontsize=9, loc="upper center", ncol=2, bbox_to_anchor=(0.5, 1.2))
    ax.text(1, -38, "PE + KE = 100 J at every point", ha="center", fontsize=9.5)
    ax.set_ylim(0, 110)
    fig.subplots_adjust(bottom=0.25)
    save(fig, u, "bar_chart.png")

    fig, ax = new()
    v = np.linspace(0, 30, 100)
    ax.plot(v, 0.5 * 1000 * v * v / 1000, color=NAVY, lw=2.5)
    for vv in (10, 20):
        k = 0.5 * 1000 * vv * vv / 1000
        ax.plot([vv, vv, 0], [0, k, k], color=GRAY, ls=":", lw=1); ax.plot(vv, k, "o", color=RED, ms=7)
        ax.text(vv + 0.8, k - 12, f"{vv} m/s: {k:.0f} kJ", fontsize=9.5, va="top")
    ax.set_xlabel("speed (m/s)"); ax.set_ylabel("kinetic energy (kJ)")
    ax.set_xlim(0, 31); ax.set_ylim(0, 460); ax.set_title("1000 kg car", fontsize=10, color=NAVY)
    save(fig, u, "ke_speed.png")


if __name__ == "__main__":
    kinematics(); projectile(); newton(); momentum(); energy()
    print("figures written")
