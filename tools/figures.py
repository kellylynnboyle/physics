"""Draw the Visual Memory Aid diagrams for every unit (200 dpi PNG).

Usage: python3 tools/figures.py   (writes to units/<unit>/figures/)
Only standard classroom diagram types are used: motion graphs, motion maps,
free-body diagrams, vector sketches, before/after collision sketches and
energy bar charts.
"""
import os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Circle, Polygon

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "units")
NAVY, RED, GREEN, GOLD, GRAY = "#1F3864", "#C0392B", "#2E7D32", "#B7791F", "#666666"
plt.rcParams.update({"font.size": 9, "font.family": "DejaVu Sans", "axes.spines.top": False,
                     "axes.spines.right": False, "axes.linewidth": 1.0})
SIZE = (3.6, 2.6)


def new(axes=True):
    fig, ax = plt.subplots(figsize=SIZE)
    if not axes:
        ax.axis("off")
    return fig, ax


def save(fig, unit, name):
    d = os.path.join(ROOT, unit, "figures")
    os.makedirs(d, exist_ok=True)
    fig.tight_layout(pad=0.6)
    fig.savefig(os.path.join(d, name + ".png"), dpi=200, facecolor="white")
    plt.close(fig)


def arrow(ax, x, y, dx, dy, color=NAVY, lw=2.2, label=None, lpos=None, ha="center", va="center", fs=9):
    ax.annotate("", xy=(x + dx, y + dy), xytext=(x, y),
                arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=13, shrinkA=0, shrinkB=0))
    if label:
        lx, ly = lpos if lpos else (x + dx, y + dy)
        ax.text(lx, ly, label, color=color, ha=ha, va=va, fontsize=fs, fontweight="bold")


def graph_axes(ax, xl, yl):
    ax.set_xlabel(xl)
    ax.set_ylabel(yl)
    ax.set_xticks([])
    ax.set_yticks([])


# ---------------------------------------------------------------- Kinematics
def kinematics():
    u = "01-kinematics"
    fig, ax = new()
    t = np.linspace(0, 4, 50)
    ax.plot(t, 2.2 * t, color=NAVY, lw=2.2)
    ax.plot(t, 0.55 * t ** 2, color=RED, lw=2.2)
    ax.plot(t, 0 * t + 3.2, color=GRAY, lw=2.2)
    ax.text(2.2, 6.0, "constant velocity\n(straight line)", color=NAVY, ha="right", fontsize=8)
    ax.text(2.75, 1.0, "speeding up\n(curve)", color=RED, ha="left", fontsize=8)
    ax.text(0.2, 3.5, "at rest (flat)", color=GRAY, fontsize=8)
    graph_axes(ax, "time (s)", "position (m)")
    ax.set_xlim(0, 4.1); ax.set_ylim(0, 9.5)
    save(fig, u, "pt_graph")

    fig, ax = new()
    ax.plot([0, 4], [0, 12], color=NAVY, lw=2.2)
    ax.fill_between([0, 4], [0, 12], color="#D9E2F3")
    ax.plot([4, 4], [0, 12], color=GRAY, lw=0.8, ls="--")
    ax.text(2.75, 3.0, "area =\ndisplacement\n½ × 4 × 12 = 24 m", ha="center", fontsize=8, color=NAVY)
    ax.text(1.6, 8.6, "slope = acceleration\n12 ÷ 4 = 3 m/s²", ha="center", fontsize=8, color=RED)
    ax.set_xlabel("time (s)"); ax.set_ylabel("velocity (m/s)")
    ax.set_xticks([0, 2, 4]); ax.set_yticks([0, 6, 12])
    ax.set_xlim(0, 4.6); ax.set_ylim(0, 13.5)
    save(fig, u, "vt_graph")

    fig, ax = new(axes=False)
    xs = np.arange(0, 6) * 1.5
    ax.scatter(xs, [2] * 6, s=45, color=NAVY, zorder=3)
    for x in xs[:-1]:
        arrow(ax, x, 2, 1.1, 0, color=NAVY, lw=1.4)
    ax.text(-0.3, 2.55, "Constant velocity: equal spacing, equal arrows", fontsize=8, color=NAVY)
    xs2 = np.array([0, 0.55, 1.45, 2.7, 4.3, 6.25]) * 1.2
    ax.scatter(xs2, [0.6] * 6, s=45, color=RED, zorder=3)
    for i in range(5):
        arrow(ax, xs2[i], 0.6, (xs2[i + 1] - xs2[i]) * 0.75, 0, color=RED, lw=1.4)
    ax.text(-0.3, 1.15, "Speeding up: spacing and arrows grow", fontsize=8, color=RED)
    ax.set_xlim(-0.5, 8.2); ax.set_ylim(0, 3.2)
    save(fig, u, "motion_map")

    fig, ax = new()
    t = np.linspace(0, 3, 30)
    ax.plot(t, 14.7 - 9.8 * t, color=NAVY, lw=2.2)
    ax.axhline(0, color=GRAY, lw=0.8)
    ax.scatter([1.5], [0], color=RED, zorder=3)
    ax.annotate("top of path:\nv = 0", xy=(1.5, 0), xytext=(1.9, 7.5), fontsize=8, color=RED,
                arrowprops=dict(arrowstyle="->", color=RED))
    ax.text(0.5, 12.2, "moving up", fontsize=8, color=NAVY)
    ax.text(2.55, -5.5, "moving\ndown", fontsize=8, color=NAVY)
    ax.text(0.15, -12.5, "slope = −9.8 m/s²", fontsize=8, color=GRAY)
    ax.set_xlabel("time (s)"); ax.set_ylabel("velocity (m/s)")
    ax.set_xticks([0, 1.5, 3]); ax.set_yticks([-14.7, 0, 14.7])
    ax.set_ylim(-16.5, 16.5)
    save(fig, u, "freefall")


# ---------------------------------------------------------------- Projectiles
def projectile():
    u = "02-projectile-motion"
    g = 9.8
    fig, ax = new(axes=False)
    vx, vy = 17.3, 10.0
    T = 2 * vy / g
    t = np.linspace(0, T, 60)
    ax.plot(vx * t, vy * t - 0.5 * g * t ** 2, color=GRAY, lw=1.2, ls="--")
    for frac in [0, 0.25, 0.5, 0.75, 1.0]:
        tt = frac * T
        x, y = vx * tt, vy * tt - 0.5 * g * tt ** 2
        ax.scatter([x], [y], color="black", s=18, zorder=4)
        arrow(ax, x, y, 5.5, 0, color=NAVY, lw=1.8)
        v = vy - g * tt
        if abs(v) > 0.1:
            arrow(ax, x, y, 0, v * 0.33, color=RED, lw=1.8)
    ax.text(17.6, 6.3, "top: vy = 0, still moving at vx", ha="center", fontsize=8)
    ax.text(3.2, -1.3, "vx (same everywhere)", color=NAVY, fontsize=8)
    ax.text(-1.2, 4.3, "vy", color=RED, fontsize=8, ha="right")
    ax.plot([-2, 42], [0, 0], color="black", lw=0.8)
    ax.set_xlim(-4, 43); ax.set_ylim(-4.5, 7.5)
    save(fig, u, "trajectory")

    fig, ax = new(axes=False)
    ax.plot([0, 3.46], [0, 0], color=NAVY, lw=0.5)
    arrow(ax, 0, 0, 3.46, 2.0, color="black", lw=2.4)
    arrow(ax, 0, 0, 3.46, 0, color=NAVY, lw=2.2)
    arrow(ax, 3.46, 0, 0, 2.0, color=RED, lw=2.2)
    ax.text(1.35, 1.35, "v = 20 m/s", rotation=30, ha="center", fontsize=9, fontweight="bold")
    ax.text(1.73, -0.3, "vx = v·cos θ = 17.3 m/s", color=NAVY, ha="center", fontsize=8.5, fontweight="bold")
    ax.text(3.6, 1.0, "vy = v·sin θ\n= 10.0 m/s", color=RED, ha="left", fontsize=8.5, fontweight="bold")
    th = np.linspace(0, np.radians(30), 20)
    ax.plot(0.9 * np.cos(th), 0.9 * np.sin(th), color=GRAY, lw=1)
    ax.text(1.05, 0.2, "θ = 30°", fontsize=8, color=GRAY)
    ax.set_xlim(-0.3, 5.4); ax.set_ylim(-0.7, 2.5)
    save(fig, u, "components")

    fig, ax = new(axes=False)
    ts = np.arange(0, 5) * 0.11
    ys = 1.25 - 0.5 * g * ts ** 2
    ax.add_patch(Rectangle((-0.6, 0), 0.6, 1.25, color="#D9D9D9"))
    for y in ys:
        ax.plot([0.0, 1.6], [y, y], color=GRAY, lw=0.6, ls=":")
    ax.scatter([0.12] * 5, ys, color=RED, s=40, zorder=3)
    ax.scatter(0.12 + 3.0 * ts, ys, color=NAVY, s=40, zorder=3)
    ax.plot([-0.6, 1.9], [0, 0], color="black", lw=0.8)
    ax.text(0.2, 1.42, "dropped", color=RED, fontsize=8, ha="center")
    ax.text(1.15, 1.42, "launched sideways", color=NAVY, fontsize=8, ha="center")
    ax.text(1.75, 0.6, "same height\nat each\ninstant", fontsize=8, color=GRAY, ha="center")
    ax.set_xlim(-0.7, 2.2); ax.set_ylim(-0.1, 1.6)
    save(fig, u, "drop_vs_launch")

    fig, ax = new(axes=False)
    v = 20
    for ang, c in [(30, RED), (45, NAVY), (60, GREEN)]:
        a = np.radians(ang)
        T = 2 * v * np.sin(a) / g
        t = np.linspace(0, T, 60)
        ax.plot(v * np.cos(a) * t, v * np.sin(a) * t - 0.5 * g * t ** 2, color=c, lw=2)
    ax.text(17.7, 2.9, "30°", color=RED, fontsize=9, fontweight="bold", ha="center")
    ax.text(20.4, 7.4, "45°", color=NAVY, fontsize=9, fontweight="bold", ha="center")
    ax.text(17.7, 16.2, "60°", color=GREEN, fontsize=9, fontweight="bold", ha="center")
    ax.plot([-1, 43], [0, 0], color="black", lw=0.8)
    ax.text(35.3, -2.3, "30° and 60°\nland here", fontsize=7.5, ha="center", va="top", color=GRAY)
    ax.text(42, 1.2, "45°", fontsize=7.5, ha="center", color=NAVY)
    ax.set_xlim(-2, 45); ax.set_ylim(-7.5, 18)
    save(fig, u, "range_angles")


# ---------------------------------------------------------------- Newton
def fbd(ax, forces, title=None):
    ax.add_patch(Rectangle((-0.5, -0.4), 1.0, 0.8, facecolor="#D9E2F3", edgecolor=NAVY, lw=1.2))
    for dx, dy, lab, col in forces:
        sx = 0.5 * np.sign(dx) if dx else 0
        sy = 0.4 * np.sign(dy) if dy else 0
        arrow(ax, sx, sy, dx, dy, color=col)
        off = 0.12
        if dx:
            ax.text(sx + dx + np.sign(dx) * off, sy, lab, color=col, fontsize=8.5, fontweight="bold",
                    ha="left" if dx > 0 else "right", va="center")
        else:
            ax.text(0, sy + dy + np.sign(dy) * 0.18, lab, color=col, fontsize=8.5, fontweight="bold",
                    ha="center", va="center")
    ax.set_xlim(-3.6, 3.6); ax.set_ylim(-2.4, 2.4)
    ax.set_aspect("equal")
    if title:
        ax.set_title(title, fontsize=8.5, color=GRAY)


def newton():
    u = "03-newtons-laws"
    fig, ax = new(axes=False)
    fbd(ax, [(1.3, 0, "Fapp = 50 N", NAVY), (-1.3, 0, "Ffrict = 50 N", RED),
             (0, 1.2, "Fnorm", GREEN), (0, -1.2, "Fgrav", GOLD)], "constant velocity →")
    save(fig, u, "fbd_balanced")

    fig, ax = new(axes=False)
    fbd(ax, [(1.9, 0, "Fapp = 50 N", NAVY), (-0.8, 0, "Ffrict = 20 N", RED),
             (0, 1.2, "Fnorm", GREEN), (0, -1.2, "Fgrav", GOLD)], "Fnet = 30 N right, accelerates →")
    save(fig, u, "fbd_unbalanced")

    fig, ax = new(axes=False)
    ax.add_patch(Rectangle((-3.4, -0.6), 2.4, 1.3, facecolor="#D9E2F3", edgecolor=NAVY, lw=1.2))
    ax.add_patch(Rectangle((1.0, -0.6), 1.3, 0.8, facecolor="#FCE4D6", edgecolor=RED, lw=1.2))
    ax.text(-2.2, 0.05, "truck", ha="center", fontsize=9, color=NAVY)
    ax.text(1.65, -0.2, "car", ha="center", fontsize=9, color=RED)
    arrow(ax, 1.0, 1.25, 1.6, 0, color=NAVY)
    ax.text(1.8, 1.6, "truck pushes car", color=NAVY, fontsize=8, ha="center")
    arrow(ax, -1.0, 1.25, -1.6, 0, color=RED)
    ax.text(-1.8, 1.6, "car pushes truck", color=RED, fontsize=8, ha="center")
    ax.text(0, -1.35, "equal size, opposite direction,\non different objects", ha="center", fontsize=8, color=GRAY)
    ax.plot([-3.6, 3.6], [-0.6, -0.6], color="black", lw=0.8)
    ax.set_xlim(-3.8, 3.8); ax.set_ylim(-2.0, 2.0)
    save(fig, u, "third_law")

    fig, ax = new()
    F = np.linspace(0, 4, 10)
    ax.plot(F, F / 0.5, color=NAVY, lw=2.2)
    ax.plot(F, F / 1.0, color=RED, lw=2.2)
    ax.text(2.55, 7.3, "m = 0.5 kg", color=NAVY, fontsize=8, ha="right")
    ax.text(4.0, 2.7, "m = 1.0 kg", color=RED, fontsize=8, ha="right")
    ax.set_xlabel("net force (N)"); ax.set_ylabel("acceleration (m/s²)")
    ax.set_xticks([0, 2, 4]); ax.set_yticks([0, 4, 8])
    ax.set_xlim(0, 4.3); ax.set_ylim(0, 8.8)
    save(fig, u, "a_vs_f")


# ---------------------------------------------------------------- Momentum
def cart(ax, x, y, w, label, color, edge):
    ax.add_patch(Rectangle((x, y), w, 0.55, facecolor=color, edgecolor=edge, lw=1.2))
    ax.add_patch(Circle((x + 0.22, y - 0.1), 0.1, color="black"))
    ax.add_patch(Circle((x + w - 0.22, y - 0.1), 0.1, color="black"))
    ax.text(x + w / 2, y + 0.27, label, ha="center", va="center", fontsize=8.5, color=edge)


def momentum():
    u = "04-momentum"
    fig, ax = new(axes=False)
    ax.text(-0.1, 3.25, "BEFORE", fontsize=8.5, fontweight="bold", color=GRAY)
    cart(ax, 0.2, 2.2, 1.4, "2 kg", "#D9E2F3", NAVY)
    arrow(ax, 1.7, 2.47, 1.2, 0, color=NAVY, label="3 m/s", lpos=(2.3, 2.85), fs=8)
    cart(ax, 4.0, 2.2, 0.9, "1 kg", "#FCE4D6", RED)
    ax.text(4.45, 2.95, "at rest", fontsize=8, color=RED, ha="center")
    ax.plot([-0.1, 6.6], [2.0, 2.0], color="black", lw=0.8)
    ax.text(6.5, 3.25, "p = 6 kg·m/s", fontsize=8, ha="right")
    ax.text(-0.1, 1.35, "AFTER", fontsize=8.5, fontweight="bold", color=GRAY)
    cart(ax, 2.2, 0.3, 1.4, "2 kg", "#D9E2F3", NAVY)
    cart(ax, 3.6, 0.3, 0.9, "1 kg", "#FCE4D6", RED)
    arrow(ax, 4.6, 0.57, 0.8, 0, color=GREEN, label="2 m/s", lpos=(5.0, 0.95), fs=8)
    ax.plot([-0.1, 6.6], [0.1, 0.1], color="black", lw=0.8)
    ax.text(6.5, 1.35, "p = 6 kg·m/s", fontsize=8, ha="right")
    ax.set_xlim(-0.2, 6.7); ax.set_ylim(-0.1, 3.6)
    save(fig, u, "collision")

    fig, ax = new()
    t = np.linspace(0, 1, 80)
    F = np.sin(np.pi * t) ** 2 * 10
    ax.plot(t, F, color=NAVY, lw=2.2)
    ax.fill_between(t, F, color="#D9E2F3")
    ax.text(0.5, 3.4, "area =\nimpulse\n= Δp", ha="center", fontsize=8.5, color=NAVY)
    graph_axes(ax, "time (s)", "force (N)")
    ax.set_xlim(0, 1.05); ax.set_ylim(0, 11.5)
    save(fig, u, "ft_graph")

    fig, ax = new()
    ax.add_patch(Rectangle((0.1, 0), 0.1, 10, facecolor="#FCE4D6", edgecolor=RED, lw=1.5))
    ax.add_patch(Rectangle((0.5, 0), 0.5, 2, facecolor="#D9E2F3", edgecolor=NAVY, lw=1.5))
    ax.text(0.25, 8.6, "hard stop:\nlarge force,\nshort time", color=RED, fontsize=8, ha="left", va="top")
    ax.text(0.75, 2.5, "cushioned stop:\nsmall force, long time", color=NAVY, fontsize=8, ha="center", va="bottom")
    ax.text(0.75, 0.9, "same area", fontsize=7.5, ha="center", va="center", color=NAVY)
    graph_axes(ax, "time (s)", "force (N)")
    ax.set_xlim(0, 1.12); ax.set_ylim(0, 11.5)
    save(fig, u, "ft_compare")

    fig, ax = new(axes=False)
    for x, lab, col in [(2.2, "60 kg", NAVY), (3.6, "40 kg", RED)]:
        ax.add_patch(Circle((x, 1.75), 0.22, facecolor="white", edgecolor=col, lw=1.6))
        ax.plot([x, x], [1.53, 0.8], color=col, lw=2)
        ax.plot([x - 0.3, x, x + 0.3], [0.3, 0.8, 0.3], color=col, lw=2)
        ax.text(x, 2.2, lab, ha="center", fontsize=8.5, color=col, fontweight="bold")
    ax.plot([2.2, 2.9], [1.25, 1.25], color=NAVY, lw=2)
    ax.plot([3.6, 2.9], [1.25, 1.25], color=RED, lw=2)
    arrow(ax, 1.7, 1.1, -1.0, 0, color=NAVY, label="2 m/s", lpos=(1.2, 1.4), fs=8)
    arrow(ax, 4.1, 1.1, 1.5, 0, color=RED, label="3 m/s", lpos=(4.85, 1.4), fs=8)
    ax.text(1.2, 0.72, "p = −120", fontsize=8, ha="center", color=NAVY)
    ax.text(4.85, 0.72, "p = +120", fontsize=8, ha="center", color=RED)
    ax.plot([0.3, 6.0], [0.28, 0.28], color="black", lw=0.8)
    ax.text(3.1, -0.05, "total momentum = 0 kg·m/s", fontsize=8, ha="center", color=GRAY)
    ax.set_xlim(0.2, 6.1); ax.set_ylim(-0.3, 2.5)
    save(fig, u, "recoil")


# ---------------------------------------------------------------- Energy
def energy():
    u = "05-work-energy"
    fig, ax = new()
    groups = ["top\n(h = 5 m)", "halfway", "bottom"]
    pe = [98, 49, 0]
    ke = [0, 49, 98]
    x = np.arange(3)
    ax.bar(x - 0.2, pe, 0.38, color=NAVY, label="PE")
    ax.bar(x + 0.2, ke, 0.38, color=RED, label="KE")
    for i in range(3):
        ax.text(i, 104, "total 98 J", ha="center", fontsize=7.5, color=GRAY)
    ax.set_xticks(x); ax.set_xticklabels(groups, fontsize=8)
    ax.set_ylabel("energy (J)"); ax.set_yticks([0, 49, 98]); ax.set_ylim(0, 118)
    ax.legend(frameon=False, fontsize=8, loc="center", bbox_to_anchor=(0.3, 0.62))
    save(fig, u, "bar_chart")

    fig, ax = new()
    ax.plot([0, 4], [50, 50], color=NAVY, lw=2.2)
    ax.plot([4, 4], [0, 50], color=GRAY, lw=0.8, ls="--")
    ax.fill_between([0, 4], [50, 50], color="#D9E2F3")
    ax.text(2, 25, "area = work\n50 N × 4 m = 200 J", ha="center", va="center", fontsize=8.5, color=NAVY)
    ax.set_xlabel("displacement (m)"); ax.set_ylabel("force (N)")
    ax.set_xticks([0, 2, 4]); ax.set_yticks([0, 25, 50])
    ax.set_xlim(0, 4.6); ax.set_ylim(0, 62)
    save(fig, u, "fd_graph")

    fig, ax = new()
    v = np.linspace(0, 40, 50)
    ax.plot(v, 0.5 * 1000 * v ** 2 / 1000, color=NAVY, lw=2.2)
    for vv in (20, 40):
        k = 0.5 * 1000 * vv ** 2 / 1000
        ax.plot([vv, vv], [0, k], color=GRAY, lw=0.8, ls="--")
        ax.plot([0, vv], [k, k], color=GRAY, lw=0.8, ls="--")
        ax.scatter([vv], [k], color=RED, zorder=3)
    ax.text(21, 150, "200 kJ", fontsize=8, color=RED, va="top")
    ax.text(38.5, 735, "800 kJ", fontsize=8, color=RED, ha="right", va="center")
    ax.text(3, 620, "1000 kg car", fontsize=8, color=GRAY)
    ax.set_xlabel("speed (m/s)"); ax.set_ylabel("kinetic energy (kJ)")
    ax.set_xticks([0, 20, 40]); ax.set_yticks([0, 200, 800])
    ax.set_xlim(0, 43); ax.set_ylim(0, 880)
    save(fig, u, "ke_vs_v")

    fig, ax = new(axes=False)
    L = 2.2
    px, py = 0, 2.6
    for ang, col in [(-40, NAVY), (0, RED), (40, NAVY)]:
        a = np.radians(ang)
        bx, by = px + L * np.sin(a), py - L * np.cos(a)
        ax.plot([px, bx], [py, by], color=GRAY, lw=1.2, ls="-" if ang == 0 else "--")
        ax.add_patch(Circle((bx, by), 0.14, color=col, zorder=3))
    th = np.radians(np.linspace(-40, 40, 40))
    ax.plot(px + L * np.sin(th), py - L * np.cos(th), color=GRAY, lw=0.6, ls=":")
    ax.plot([-0.5, 0.5], [py, py], color="black", lw=2)
    ax.text(-1.75, 1.25, "all PE\nv = 0", color=NAVY, fontsize=8.5, ha="right", va="center", fontweight="bold")
    ax.text(1.75, 1.25, "all PE\nv = 0", color=NAVY, fontsize=8.5, ha="left", va="center", fontweight="bold")
    ax.text(0, 0.02, "all KE, fastest", color=RED, fontsize=8.5, ha="center", fontweight="bold")
    ax.set_xlim(-3.0, 3.0); ax.set_ylim(-0.2, 2.8)
    ax.set_aspect("equal")
    save(fig, u, "pendulum")


if __name__ == "__main__":
    kinematics(); projectile(); newton(); momentum(); energy()
    print("figures written")
