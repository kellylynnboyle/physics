"""Draw the Visual Memory Aid diagrams (standard classroom diagram types only).
Usage: python3 tools/diagrams.py   -> writes PNGs to assets/diagrams/
"""
import os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Circle, Polygon

OUT = os.path.join(os.path.dirname(__file__), "..", "assets", "diagrams")
os.makedirs(OUT, exist_ok=True)
NAVY, RED, GREEN, ORANGE, GRAY, PURPLE = "#1F3864", "#C0392B", "#1E8449", "#D35400", "#7F8C8D", "#5B2C83"
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 10, "axes.spines.top": False, "axes.spines.right": False})


def fig(w=4.4, h=3.3):
    f, ax = plt.subplots(figsize=(w, h))
    return f, ax


def save(f, name):
    f.tight_layout()
    f.savefig(os.path.join(OUT, name + ".png"), dpi=200, facecolor="white")
    plt.close(f)


def arrow(ax, x0, y0, x1, y1, color=NAVY, lw=2.2):
    ax.annotate("", xy=(x1, y1), xytext=(x0, y0), arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=16, shrinkA=0, shrinkB=0))


def blank(ax, xlim, ylim):
    ax.set_xlim(*xlim); ax.set_ylim(*ylim); ax.axis("off"); ax.set_aspect("equal")


def graph_axes(ax, xl, yl):
    ax.set_xlabel(xl); ax.set_ylabel(yl)
    ax.spines["left"].set_color(NAVY); ax.spines["bottom"].set_color(NAVY)


# ---------------- Kinematics ----------------
def k_distdisp():
    f, ax = fig(4.4, 2.6); blank(ax, (-0.8, 5), (-1.6, 1.8))
    ax.plot([-0.5, 4.7], [0, 0], color=GRAY, lw=1)
    for x in range(0, 5):
        ax.plot([x, x], [-0.08, 0.08], color=GRAY, lw=1); ax.text(x, -0.38, f"{x} m", ha="center", fontsize=8, color=GRAY)
    arrow(ax, 0, 0.55, 4, 0.55, NAVY); ax.text(2, 0.75, "4 m east", ha="center", color=NAVY)
    arrow(ax, 4, 1.15, 1, 1.15, ORANGE); ax.text(2.5, 1.35, "3 m west", ha="center", color=ORANGE)
    arrow(ax, 0, -0.95, 1, -0.95, RED, 3); ax.text(1.15, -1.03, "displacement = 1 m east", color=RED, va="center")
    ax.text(2.1, -1.5, "distance = 4 m + 3 m = 7 m", ha="center", color="black")
    ax.plot(0, 0, "o", color="black"); ax.text(-0.1, 0.18, "start", ha="right", fontsize=8)
    save(f, "k_distdisp")


def k_pt():
    f, ax = fig(); t = np.linspace(0, 5, 100)
    ax.plot(t, 4 * t, color=NAVY, lw=2.2); ax.text(3.55, 10.6, "constant velocity\n(straight line)", color=NAVY, fontsize=9, ha="left", va="top")
    ax.plot(t, np.full_like(t, 6), color=GRAY, lw=2.2); ax.text(4.95, 6.6, "at rest (flat)", color=GRAY, fontsize=9, ha="right")
    ax.plot(t, 0.9 * t ** 2, color=RED, lw=2.2); ax.text(2.3, 22, "speeding up\n(curve gets steeper)", color=RED, fontsize=9, ha="right", va="top")
    graph_axes(ax, "time (s)", "position (m)"); ax.set_xlim(0, 5.2); ax.set_ylim(0, 24)
    ax.set_title("Position-time graph", color=NAVY, fontsize=11)
    save(f, "k_pt")


def k_vt():
    f, ax = fig(); t = np.array([0, 4])
    ax.plot(t, [0, 10], color=NAVY, lw=2.4)
    ax.fill_between(t, [0, 10], color="#D9E2F3")
    ax.text(3.9, 0.7, "area = displacement\n½ × 4 s × 10 m/s = 20 m", ha="right", color=NAVY, fontsize=8.5)
    ax.plot([1, 3, 3], [2.5, 2.5, 7.5], color=RED, lw=1.2, ls="--")
    ax.text(1.5, 8.2, "slope = acceleration\n= 10 ÷ 4 = 2.5 m/s²", color=RED, fontsize=9, ha="center")
    graph_axes(ax, "time (s)", "velocity (m/s)"); ax.set_xlim(0, 4.6); ax.set_ylim(0, 11.5); ax.plot([4, 4], [0, 10], color=NAVY, lw=0.8, ls=":")
    ax.set_title("Velocity-time graph", color=NAVY, fontsize=11)
    save(f, "k_vt")


def k_motionmap():
    f, ax = fig(4.4, 2.4); blank(ax, (-0.5, 10.6), (-0.6, 3.3))
    ax.text(0, 2.9, "Constant velocity", color=NAVY, fontsize=10)
    for i in range(6):
        x = 2 * i; ax.plot(x, 2.2, "o", color=NAVY, ms=7)
        if i < 5: arrow(ax, x + 0.15, 2.2, x + 1.35, 2.2, NAVY, 1.6)
    ax.text(0, 1.0, "Speeding up (accelerating)", color=RED, fontsize=10)
    xs = [0, 1.0, 2.5, 4.6, 7.2]; ln = [0.7, 1.2, 1.8, 2.3, 2.9]
    for x, l in zip(xs, ln):
        ax.plot(x, 0.3, "o", color=RED, ms=7); arrow(ax, x + 0.15, 0.3, x + l, 0.3, RED, 1.6)
    ax.text(5.2, -0.5, "one dot per equal time interval", ha="center", fontsize=8, color=GRAY)
    save(f, "k_motionmap")


def k_freefall():
    f, ax = fig(4.4, 3.6); ax.set_xlim(-3.4, 8); ax.set_ylim(-56, 9); ax.axis("off")
    for t in range(0, 4):
        y = -4.9 * t ** 2
        ax.plot(0, y, "o", color=NAVY, ms=9)
        if t: arrow(ax, 0, y - 2.2, 0, y - 2.2 - 3.0 * t, RED, 2)
        ax.text(-0.6, y, f"t = {t} s", ha="right", va="center", fontsize=9)
        ax.text(0.9, y, f"v = {9.8*t:.1f} m/s,  fallen {4.9*t*t:.1f} m", va="center", fontsize=9)
    ax.text(-3.3, 6.5, "Free fall from rest (a = 9.8 m/s² down)", color=NAVY, fontsize=10)
    ax.text(0.9, -52, "red arrows: velocity", color=RED, fontsize=8.5)
    save(f, "k_freefall")


# ---------------- Projectile ----------------
def p_components():
    f, ax = fig(4.4, 3.0); blank(ax, (-0.8, 5.6), (-0.9, 3.6))
    vx, vy = 4.33, 2.5
    arrow(ax, 0, 0, vx, vy, NAVY, 2.8); ax.text(1.75, 1.55, "v = 20 m/s", color=NAVY, rotation=30, ha="center")
    arrow(ax, 0, 0, vx, 0, GREEN, 2.2); ax.text(vx / 2, -0.45, "vx = v·cos θ = 17.3 m/s", color=GREEN, ha="center")
    arrow(ax, vx, 0, vx, vy, RED, 2.2); ax.text(vx + 0.12, vy / 2, "vy = v·sin θ\n= 10.0 m/s", color=RED, va="center", fontsize=9)
    th = np.linspace(0, np.radians(30), 20); ax.plot(1.1 * np.cos(th), 1.1 * np.sin(th), color="black", lw=1)
    ax.text(1.3, 0.28, "θ = 30°", fontsize=9)
    ax.add_patch(Rectangle((vx - 0.22, 0), 0.22, 0.22, fill=False, lw=0.8))
    save(f, "p_components")


def p_trajectory():
    f, ax = fig(4.6, 3.0); blank(ax, (-0.6, 11.2), (-1.5, 4.6))
    x = np.linspace(0, 10, 100); y = 0.16 * x * (10 - x) * 0.9
    ax.plot(x, y, color=GRAY, lw=1.4, ls="--"); ax.plot([-0.4, 10.8], [0, 0], color="black", lw=1)
    for xi, vy in [(0, 1.4), (2.5, 0.7), (5, 0), (7.5, -0.7), (10, -1.4)]:
        yi = 0.144 * xi * (10 - xi)
        ax.plot(xi, yi, "o", color=NAVY, ms=7)
        arrow(ax, xi, yi, xi + 1.1, yi, GREEN, 2)
        if vy: arrow(ax, xi, yi, xi, yi + vy, RED, 2)
    ax.text(5, 4.15, "top: vy = 0, vx unchanged", ha="center", fontsize=9)
    ax.text(0.3, -0.9, "vx (same length everywhere)", color=GREEN, fontsize=9)
    ax.text(6.2, -0.9, "vy (changes)", color=RED, fontsize=9)
    arrow(ax, 9.3, 4.3, 9.3, 3.2, PURPLE, 2); ax.text(9.5, 3.7, "a = g", color=PURPLE, fontsize=9, va="center")
    save(f, "p_trajectory")


def p_dropvslaunch():
    f, ax = fig(4.4, 3.2); ax.set_xlim(-2.2, 8.6); ax.set_ylim(-22.5, 4.5); ax.axis("off")
    ax.plot([-2, 8.4], [-20.4, -20.4], color="black", lw=1)
    for t in [0, 0.5, 1.0, 1.5, 2.0]:
        y = -4.9 * t * t
        ax.plot([-1.0, 3 * t + 1.2], [y, y], color=GRAY, lw=0.6, ls=":")
        ax.plot(-1.0, y, "o", color=RED, ms=8); ax.plot(3 * t + 1.2, y, "o", color=NAVY, ms=8)
    ax.text(-1.0, 2.2, "dropped", color=RED, ha="center", fontsize=9)
    ax.text(3.6, 2.2, "launched horizontally", color=NAVY, ha="center", fontsize=9)
    ax.text(6.4, -8, "same height\nat each instant", fontsize=8.5, color=GRAY, ha="center")
    save(f, "p_dropvslaunch")


def p_vgraphs():
    f, axs = plt.subplots(1, 2, figsize=(4.6, 2.6)); t = np.array([0, 2.04])
    axs[0].plot(t, [17.3, 17.3], color=GREEN, lw=2.4); axs[0].set_ylim(0, 22); axs[0].set_title("horizontal: vx", fontsize=10, color=GREEN)
    axs[0].text(1.02, 18.6, "flat: ax = 0", ha="center", fontsize=8.5)
    axs[1].plot(t, [10, -10], color=RED, lw=2.4); axs[1].axhline(0, color="black", lw=0.8); axs[1].set_title("vertical: vy", fontsize=10, color=RED)
    axs[1].text(1.12, 2.5, "slope = −9.8 m/s²", fontsize=8.5); axs[1].plot(1.02, 0, "o", color="black", ms=4); axs[1].text(0.2, -5.5, "vy = 0\nat top", fontsize=8, ha="left")
    for a in axs:
        a.set_xlabel("time (s)", fontsize=9); a.tick_params(labelsize=8)
    axs[0].set_ylabel("velocity (m/s)", fontsize=9)
    save(f, "p_vgraphs")


def p_vectoradd():
    f, ax = fig(4.0, 3.3); blank(ax, (-1.0, 5.6), (-0.9, 4.7))
    arrow(ax, 0, 0, 3, 0, NAVY, 2.4); ax.text(1.5, -0.42, "3 m east", color=NAVY, ha="center")
    arrow(ax, 3, 0, 3, 4, ORANGE, 2.4); ax.text(3.15, 2, "4 m north", color=ORANGE, va="center")
    arrow(ax, 0, 0, 3, 4, RED, 2.8); ax.text(0.95, 2.35, "resultant\n5 m", color=RED, ha="center")
    th = np.linspace(0, np.radians(53.1), 20); ax.plot(0.9 * np.cos(th), 0.9 * np.sin(th), color="black", lw=1); ax.text(1.0, 0.35, "53°", fontsize=9)
    ax.add_patch(Rectangle((2.78, 0), 0.22, 0.22, fill=False, lw=0.8))
    ax.text(2.2, 4.4, "head-to-tail", fontsize=8.5, color=GRAY, ha="center")
    save(f, "p_vectoradd")


# ---------------- Newton ----------------
def box(ax, x=0, y=0, w=1.6, h=1.1, label=""):
    ax.add_patch(Rectangle((x - w / 2, y - h / 2), w, h, facecolor="#EEF3FA", edgecolor=NAVY, lw=1.5))
    if label: ax.text(x, y, label, ha="center", va="center", fontsize=9)


def n_fbd_balanced():
    f, ax = fig(3.8, 3.3); blank(ax, (-3, 3), (-3.1, 3.1))
    box(ax, label="book")
    arrow(ax, 0, 0.55, 0, 2.4, GREEN); ax.text(0.2, 1.9, "F_norm", color=GREEN)
    arrow(ax, 0, -0.55, 0, -2.4, RED); ax.text(0.2, -2.0, "F_grav", color=RED)
    ax.text(0, -2.95, "equal arrows → F_net = 0", ha="center", fontsize=9)
    save(f, "n_fbd_balanced")


def n_fbd_unbalanced():
    f, ax = fig(4.4, 3.3); blank(ax, (-3.3, 4.3), (-3.1, 3.1))
    box(ax, label="5.0 kg")
    arrow(ax, 0, 0.55, 0, 2.2, GREEN); ax.text(0.2, 1.8, "F_norm", color=GREEN)
    arrow(ax, 0, -0.55, 0, -2.2, RED); ax.text(0.2, -1.9, "F_grav", color=RED)
    arrow(ax, 0.8, 0, 3.8, 0, NAVY); ax.text(2.3, 0.25, "F_app = 30 N", color=NAVY, ha="center", fontsize=9)
    arrow(ax, -0.8, 0, -1.8, 0, ORANGE); ax.text(-1.95, 0.25, "F_frict = 10 N", color=ORANGE, ha="center", fontsize=9)
    ax.text(0.5, -2.95, "F_net = 20 N right → a = 4.0 m/s²", ha="center", fontsize=9)
    save(f, "n_fbd_unbalanced")


def n_thirdlaw():
    f, ax = fig(4.6, 2.5); blank(ax, (-4.6, 4.6), (-1.9, 2.2))
    box(ax, -1.7, 0, 3.0, 1.5, "truck"); box(ax, 0.75, -0.3, 1.5, 0.9, "car")
    arrow(ax, 0.2, 1.25, 2.6, 1.25, RED); ax.text(1.5, 1.5, "truck on car", color=RED, ha="center", fontsize=9)
    arrow(ax, -0.2, 1.25, -2.6, 1.25, NAVY); ax.text(-1.5, 1.5, "car on truck", color=NAVY, ha="center", fontsize=9)
    ax.text(0, -1.6, "same size, opposite direction, different objects", ha="center", fontsize=9)
    save(f, "n_thirdlaw")


def n_graphs():
    f, axs = plt.subplots(1, 2, figsize=(4.6, 2.6))
    F = np.linspace(0, 5, 20); axs[0].plot(F, 0.8 * F, color=NAVY, lw=2.4); axs[0].set_xlabel("net force (N)", fontsize=9); axs[0].set_ylabel("acceleration (m/s²)", fontsize=9)
    axs[0].set_title("mass held constant", fontsize=9.5, color=NAVY); axs[0].set_xlim(0, 5.2); axs[0].set_ylim(0, 4.4)
    m = np.linspace(0.5, 5, 50); axs[1].plot(m, 2 / m, color=RED, lw=2.4); axs[1].set_xlabel("mass (kg)", fontsize=9)
    axs[1].set_title("net force held constant", fontsize=9.5, color=RED); axs[1].set_xlim(0, 5.2); axs[1].set_ylim(0, 4.4)
    for a in axs: a.tick_params(labelsize=8)
    save(f, "n_graphs")


def n_skydiver():
    f, ax = fig(3.8, 3.3); blank(ax, (-3, 3), (-3.1, 3.1))
    ax.add_patch(Circle((0, 0), 0.5, facecolor="#EEF3FA", edgecolor=NAVY, lw=1.5))
    arrow(ax, 0, 0.5, 0, 2.4, ORANGE); ax.text(0.2, 1.9, "F_air", color=ORANGE)
    arrow(ax, 0, -0.5, 0, -2.4, RED); ax.text(0.2, -2.0, "F_grav", color=RED)
    ax.text(-0.75, 0, "skydiver", ha="right", va="center", fontsize=9)
    ax.text(0, -2.95, "terminal velocity: F_net = 0", ha="center", fontsize=9)
    save(f, "n_skydiver")


# ---------------- Momentum ----------------
def cart(ax, x, y, w, label, color=NAVY):
    ax.add_patch(Rectangle((x - w / 2, y), w, 0.7, facecolor="#EEF3FA", edgecolor=color, lw=1.5))
    ax.add_patch(Circle((x - w / 3.2, y - 0.02), 0.13, color=color)); ax.add_patch(Circle((x + w / 3.2, y - 0.02), 0.13, color=color))
    ax.text(x, y + 0.35, label, ha="center", va="center", fontsize=8.5)


def m_inelastic():
    f, ax = fig(4.6, 3.0); blank(ax, (-0.6, 9.2), (-0.6, 5.2))
    ax.text(-0.4, 4.7, "BEFORE", color=NAVY, fontsize=9, fontweight="bold"); ax.plot([-0.4, 9], [2.95, 2.95], color="black", lw=1)
    cart(ax, 1.6, 3.1, 1.9, "2.0 kg"); arrow(ax, 2.7, 3.45, 4.5, 3.45, RED); ax.text(3.6, 3.7, "3.0 m/s", color=RED, ha="center", fontsize=9)
    cart(ax, 6.6, 3.1, 1.3, "1.0 kg"); ax.text(6.6, 4.1, "at rest", ha="center", fontsize=9, color=GRAY)
    ax.text(-0.4, 2.2, "AFTER", color=NAVY, fontsize=9, fontweight="bold"); ax.plot([-0.4, 9], [0.45, 0.45], color="black", lw=1)
    cart(ax, 3.6, 0.6, 1.9, "2.0 kg"); cart(ax, 5.2, 0.6, 1.3, "1.0 kg"); arrow(ax, 6.0, 0.95, 7.2, 0.95, RED); ax.text(7.4, 0.95, "2.0 m/s", color=RED, va="center", fontsize=9)
    ax.text(4.3, -0.35, "p before = 6.0 kg·m/s = p after", ha="center", fontsize=9)
    save(f, "m_inelastic")


def m_recoil():
    f, ax = fig(4.6, 3.0); blank(ax, (-0.6, 9.2), (-0.6, 5.2))
    ax.text(-0.4, 4.7, "BEFORE", color=NAVY, fontsize=9, fontweight="bold"); ax.plot([-0.4, 9], [2.95, 2.95], color="black", lw=1)
    cart(ax, 3.6, 3.1, 1.7, "60 kg"); cart(ax, 5.2, 3.1, 1.3, "40 kg"); ax.text(4.3, 4.15, "both at rest: p = 0", ha="center", fontsize=9, color=GRAY)
    ax.text(-0.4, 2.2, "AFTER", color=NAVY, fontsize=9, fontweight="bold"); ax.plot([-0.4, 9], [0.45, 0.45], color="black", lw=1)
    cart(ax, 2.6, 0.6, 1.7, "60 kg"); arrow(ax, 1.65, 0.95, 0.45, 0.95, NAVY); ax.text(1.05, 1.5, "2.0 m/s", color=NAVY, ha="center", fontsize=9)
    cart(ax, 6.2, 0.6, 1.3, "40 kg"); arrow(ax, 6.95, 0.95, 8.75, 0.95, RED); ax.text(7.85, 1.5, "3.0 m/s", color=RED, ha="center", fontsize=9)
    ax.text(4.3, -0.35, "−120 kg·m/s + 120 kg·m/s = 0", ha="center", fontsize=9)
    save(f, "m_recoil")


def m_ft():
    f, ax = fig()
    ax.fill_between([0.4, 0.6], [10, 10], color="#F5B7B1"); ax.plot([0.4, 0.4, 0.6, 0.6], [0, 10, 10, 0], color=RED, lw=2)
    ax.text(0.5, 10.5, "short time,\nlarge force", ha="center", color=RED, fontsize=9)
    ax.fill_between([1.0, 3.0], [1, 1], color="#D9E2F3"); ax.plot([1.0, 1.0, 3.0, 3.0], [0, 1, 1, 0], color=NAVY, lw=2)
    ax.text(2.0, 1.5, "long time, small force", ha="center", color=NAVY, fontsize=9)
    ax.text(2.1, 6.5, "same area\n= same impulse\n= same m·Δv", ha="center", fontsize=9.5)
    graph_axes(ax, "time", "force"); ax.set_xlim(0, 3.4); ax.set_ylim(0, 13.5); ax.set_xticks([]); ax.set_yticks([])
    ax.set_title("Force-time graph", color=NAVY, fontsize=11)
    save(f, "m_ft")


def m_bounce():
    f, ax = fig(4.6, 3.0); blank(ax, (-0.4, 9.4), (-0.7, 5.0))
    for x0 in (4.0, 8.9): ax.add_patch(Rectangle((x0, -0.2), 0.3, 4.6, facecolor=GRAY, edgecolor="none"))
    ax.text(2.0, 4.6, "STOPS (sticks)", ha="center", color=NAVY, fontsize=9, fontweight="bold")
    ax.add_patch(Circle((1.0, 3.2), 0.3, color=NAVY)); arrow(ax, 1.4, 3.2, 3.0, 3.2, NAVY); ax.text(2.2, 3.5, "+4.0 m/s", ha="center", fontsize=8.5)
    ax.add_patch(Circle((3.7, 1.3), 0.3, color=NAVY)); ax.text(2.4, 1.3, "0 m/s", ha="center", va="center", fontsize=8.5)
    ax.text(2.0, 0.1, "Δp = −2.0 kg·m/s", ha="center", fontsize=9)
    ax.text(6.9, 4.6, "BOUNCES", ha="center", color=RED, fontsize=9, fontweight="bold")
    ax.add_patch(Circle((5.9, 3.2), 0.3, color=RED)); arrow(ax, 6.3, 3.2, 7.9, 3.2, RED); ax.text(7.1, 3.5, "+4.0 m/s", ha="center", fontsize=8.5)
    ax.add_patch(Circle((8.3, 1.3), 0.3, color=RED)); arrow(ax, 7.9, 1.3, 6.3, 1.3, RED); ax.text(7.1, 1.6, "−4.0 m/s", ha="center", fontsize=8.5)
    ax.text(6.9, 0.1, "Δp = −4.0 kg·m/s", ha="center", fontsize=9)
    ax.text(4.5, -0.55, "0.50 kg ball in both cases", ha="center", fontsize=8.5, color=GRAY)
    save(f, "m_bounce")


# ---------------- Energy ----------------
def e_workangle():
    f, ax = fig(4.6, 2.8); blank(ax, (-1.4, 7.6), (-1.5, 3.4))
    ax.plot([-1.2, 7.4], [-0.55, -0.55], color="black", lw=1); box(ax, 0, 0, 1.6, 1.1, "sled")
    arrow(ax, 0.8, 0, 3.8, 2.6 * 1.0, NAVY, 2.6); ax.text(1.6, 1.75, "F = 100 N", color=NAVY, ha="center", fontsize=9)
    arrow(ax, 0.8, 0, 3.8, 0, GREEN, 2.2); ax.text(3.95, 0.05, "F·cos θ = 50 N", color=GREEN, fontsize=9, va="bottom")
    ax.plot([3.8, 3.8], [0, 2.6], color=GRAY, lw=1, ls=":")
    ax.text(1.75, 0.2, "θ", fontsize=10)
    arrow(ax, 0.8, -1.05, 5.8, -1.05, RED, 2); ax.text(3.3, -1.42, "displacement d = 5.0 m", color=RED, ha="center", fontsize=9)
    ax.text(5.9, 2.6, "W = 50 N × 5.0 m\n= 250 J", ha="center", fontsize=9)
    save(f, "e_workangle")


def e_coaster():
    f, ax = fig(4.6, 3.0); blank(ax, (-0.6, 10.6), (-1.5, 5.6))
    x = np.linspace(0, 10, 200); y = 2.0 + 2.0 * np.cos(x * np.pi / 5) * np.exp(-x / 14)
    y = 4 * (y - y.min()) / (y.max() - y.min())
    ax.plot(x, y, color=NAVY, lw=2.4); ax.plot([-0.4, 10.4], [0, 0], color="black", lw=1)
    i_min = int(np.argmin(y)); xm = x[i_min]
    ax.plot(0, 4, "o", color=RED, ms=10); ax.text(0.35, 4.7, "top: v = 0\nall PE = m·g·h", fontsize=8.5, va="center")
    ax.plot(xm, 0, "o", color=RED, ms=10); ax.text(xm, -0.9, "bottom: all KE = ½·m·v²\n(fastest)", fontsize=8.5, ha="center", va="center")
    i2 = int(np.argmax(y[120:])) + 120; ax.plot(x[i2], y[i2], "o", color=RED, ms=10); ax.text(x[i2], y[i2] + 0.85, "part PE,\npart KE", fontsize=8.5, ha="center", va="center")
    ax.annotate("", xy=(-0.3, 4), xytext=(-0.3, 0), arrowprops=dict(arrowstyle="<->", color=GRAY)); ax.text(-0.42, 2, "h", color=GRAY, ha="right")
    save(f, "e_coaster")


def e_bars():
    f, axs = plt.subplots(1, 3, figsize=(4.6, 2.7), sharey=True)
    data = [("top (5.0 m)", 0, 98), ("halfway (2.5 m)", 49, 49), ("ground (0 m)", 98, 0)]
    for a, (title, ke, pe) in zip(axs, data):
        a.bar(["KE", "PE"], [ke, pe], color=[RED, NAVY], width=0.6); a.set_title(title, fontsize=8.5); a.set_ylim(0, 112); a.tick_params(labelsize=8)
        for i, v in enumerate([ke, pe]): a.text(i, v + 3, f"{v} J", ha="center", fontsize=8)
    axs[0].set_ylabel("energy (J)", fontsize=9)
    f.suptitle("Total = 98 J at every point", fontsize=9.5, color=NAVY, y=0.99)
    save(f, "e_bars")


def e_fd():
    f, ax = fig()
    ax.fill_between([0, 4], [50, 50], color="#D9E2F3"); ax.plot([0, 4, 4], [50, 50, 0], color=NAVY, lw=2.4)
    ax.text(2, 24, "area = work\n50 N × 4.0 m = 200 J", ha="center", color=NAVY, fontsize=9.5)
    graph_axes(ax, "displacement (m)", "force (N)"); ax.set_xlim(0, 5); ax.set_ylim(0, 65)
    ax.set_title("Force-displacement graph", color=NAVY, fontsize=11)
    save(f, "e_fd")


def e_ke():
    f, ax = fig(); v = np.linspace(0, 40, 100)
    ax.plot(v, 0.5 * 1000 * v ** 2 / 1000, color=RED, lw=2.4)
    for vv in (20, 40):
        ke = 0.5 * 1000 * vv ** 2 / 1000; ax.plot([vv, vv, 0], [0, ke, ke], color=GRAY, lw=1, ls=":"); ax.plot(vv, ke, "o", color=NAVY)
        ax.text(vv - 1, ke + 25, f"{vv} m/s → {ke:.0f} kJ", ha="right", fontsize=9, color=NAVY)
    ax.text(8, 520, "2× speed\n= 4× KE", fontsize=9.5)
    graph_axes(ax, "speed (m/s)", "kinetic energy (kJ)"); ax.set_xlim(0, 43); ax.set_ylim(0, 900)
    ax.set_title("KE of a 1000 kg car", color=NAVY, fontsize=11)
    save(f, "e_ke")


if __name__ == "__main__":
    for fn in [k_distdisp, k_pt, k_vt, k_motionmap, k_freefall, p_components, p_trajectory, p_dropvslaunch, p_vgraphs, p_vectoradd,
               n_fbd_balanced, n_fbd_unbalanced, n_thirdlaw, n_graphs, n_skydiver, m_inelastic, m_recoil, m_ft, m_bounce,
               e_workangle, e_coaster, e_bars, e_fd, e_ke]:
        fn()
    print("diagrams written to", os.path.abspath(OUT))
