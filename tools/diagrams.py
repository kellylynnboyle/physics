"""Standard physics diagrams for the Visual Memory Aids pages (matplotlib, 200 dpi PNG)."""
import math
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Circle

NAVY, RED, GREEN, GOLD, GRAY, PURPLE = "#1F3864", "#C0392B", "#2E7D32", "#B7791F", "#6B7280", "#5B2C83"
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 9, "axes.edgecolor": NAVY,
                     "axes.labelcolor": NAVY, "xtick.color": NAVY, "ytick.color": NAVY})


def fig(w=4.2, h=3.0):
    f, ax = plt.subplots(figsize=(w, h), dpi=200)
    return f, ax


def graph(ax, xl, yl, title=None):
    ax.spines["top"].set_visible(False); ax.spines["right"].set_visible(False)
    ax.set_xlabel(xl); ax.set_ylabel(yl)
    if title: ax.set_title(title, color=NAVY, fontsize=10, fontweight="bold")
    ax.grid(True, color="#D9E2F3", lw=0.6)


def blank(ax, xlim, ylim, title=None):
    ax.set_xlim(*xlim); ax.set_ylim(*ylim); ax.set_aspect("equal"); ax.axis("off")
    if title: ax.set_title(title, color=NAVY, fontsize=10, fontweight="bold")


def arrow(ax, x0, y0, x1, y1, color=NAVY, lw=2.2):
    ax.annotate("", xy=(x1, y1), xytext=(x0, y0),
                arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=14, shrinkA=0, shrinkB=0))


def label(ax, x, y, s, color=NAVY, size=9, ha="center", va="center", bold=False):
    ax.text(x, y, s, color=color, fontsize=size, ha=ha, va=va, fontweight="bold" if bold else "normal")


# ---------- Kinematics ----------
def k_pt(ax):
    graph(ax, "time (s)", "position (m)", "Position-time graph")
    t = [0, 5]
    ax.plot(t, [4, 4], color=GRAY, lw=2.2); label(ax, 2.9, 4.75, "at rest (slope 0)", GRAY)
    ax.plot(t, [0, 5], color=NAVY, lw=2.2); label(ax, 3.9, 2.6, "slow: 1 m/s", NAVY, ha="left")
    ax.plot([0, 4], [0, 12], color=RED, lw=2.2); label(ax, 2.2, 9.8, "fast: 3 m/s", RED, ha="right")
    ax.set_xlim(0, 5.2); ax.set_ylim(0, 13)


def k_vt(ax):
    graph(ax, "time (s)", "velocity (m/s)", "Velocity-time graph")
    ax.plot([0, 4], [0, 10], color=NAVY, lw=2.2)
    ax.fill_between([0, 4], [0, 10], color="#D9E2F3")
    label(ax, 2.75, 2.6, "area = ½(4)(10)\n= 20 m", NAVY)
    label(ax, 1.5, 7.6, "slope = 10 ÷ 4\n= 2.5 m/s²", RED)
    ax.set_xlim(0, 4.6); ax.set_ylim(0, 11.5)


def k_motionmap(ax):
    blank(ax, (-0.5, 10.5), (-0.6, 4.2), "Motion maps (one dot per second)")
    for i in range(6):
        ax.add_patch(Circle((i * 1.8 + 0.3, 3.0), 0.16, color=NAVY))
        if i < 5: arrow(ax, i * 1.8 + 0.5, 3.0, i * 1.8 + 1.9, 3.0, NAVY, 1.4)
    label(ax, 5, 3.8, "Constant velocity: equal spacing", NAVY)
    xs = [0.3, 0.8, 1.8, 3.3, 5.3, 7.8]
    for i, x in enumerate(xs):
        ax.add_patch(Circle((x, 0.6), 0.16, color=RED))
        if i < 5: arrow(ax, x + 0.2, 0.6, xs[i + 1] - 0.2, 0.6, RED, 1.4)
    label(ax, 5, 1.5, "Speeding up: spacing grows", RED)


def k_toss(ax):
    graph(ax, "time (s)", "velocity (m/s)", "Ball thrown straight up")
    ax.axhline(0, color=NAVY, lw=0.8)
    ax.plot([0, 3], [14.7, -14.7], color=NAVY, lw=2.2)
    ax.plot([1.5], [0], "o", color=RED, ms=7)
    ax.annotate("top: v = 0\n(a is still −9.8 m/s²)", xy=(1.5, 0), xytext=(1.75, 7.5), color=RED, fontsize=8.5,
                arrowprops=dict(arrowstyle="->", color=RED))
    label(ax, 0.62, 3.5, "moving up", NAVY); label(ax, 2.4, -3.2, "moving down", NAVY)
    label(ax, 0.95, -10.5, "slope = −9.8 m/s²", NAVY, bold=True)
    ax.set_xlim(0, 3.2); ax.set_ylim(-16, 16)


# ---------- Projectile motion ----------
def p_components(ax):
    blank(ax, (-0.8, 6.6), (-1.1, 4.4), "Vector components")
    vx, vy = 5.2, 3.0
    arrow(ax, 0, 0, vx, vy, NAVY, 2.6); arrow(ax, 0, 0, vx, 0, RED); arrow(ax, vx, 0, vx, vy, GREEN)
    label(ax, 2.2, 2.05, "v = 20 m/s", NAVY, bold=True)
    label(ax, 2.6, -0.5, "vx = v cos θ = 17.3 m/s", RED)
    label(ax, 5.45, 1.5, "vy = v sin θ\n= 10.0 m/s", GREEN, ha="left")
    th = [math.radians(a) for a in range(0, 31, 2)]
    ax.plot([1.4 * math.cos(a) for a in th], [1.4 * math.sin(a) for a in th], color=NAVY, lw=1)
    label(ax, 1.9, 0.45, "θ = 30°", NAVY, 8.5)
    ax.set_xlim(-0.8, 8.2)


def p_trajectory(ax):
    blank(ax, (-1.5, 38.5), (-4, 11.5), "Angled launch: 20 m/s at 30°")
    g, vx, vy0 = 9.8, 17.32, 10.0
    T = 2 * vy0 / g
    ts = [i * T / 60 for i in range(61)]
    ax.plot([vx * t for t in ts], [vy0 * t - 0.5 * g * t * t for t in ts], color=GRAY, lw=1.2, ls="--")
    ax.plot([-1.5, 38], [0, 0], color=NAVY, lw=1)
    s = 0.32
    for f_ in (0, 0.25, 0.5, 0.75, 1.0):
        t = f_ * T; x = vx * t; y = vy0 * t - 0.5 * g * t * t; vy = vy0 - g * t
        ax.add_patch(Circle((x, y), 0.45, color=NAVY, zorder=5))
        arrow(ax, x, y, x + vx * s, y, RED, 1.8)
        if abs(vy) > 0.1: arrow(ax, x, y, x, y + vy * s, GREEN, 1.8)
    label(ax, 17.7, 7.6, "top: vy = 0, vx unchanged", NAVY, 8.5)
    label(ax, 17.7, -2.6, "red = vx (constant)     green = vy (changes)", NAVY, 8.5)


def p_dropvslaunch(ax):
    ax.set_xlim(-1, 9.5); ax.set_ylim(-0.9, 5.9); ax.axis("off")
    ax.set_title("Dropped vs. launched horizontally", color=NAVY, fontsize=10, fontweight="bold")
    ax.plot([-1, 9.5], [0, 0], color=NAVY, lw=1)
    for i in range(5):
        t = i * 0.25; y = 4.9 - 4.9 * t * t
        ax.plot([0, 0.7 + 8 * t], [y, y], color="#D9E2F3", lw=1, zorder=1)
        ax.plot([0], [y], "o", color=RED, ms=8, zorder=3)
        ax.plot([0.7 + 8 * t], [y], "o", color=NAVY, ms=8, zorder=3)
    label(ax, 0.3, 5.5, "dropped", RED); label(ax, 4.6, 5.5, "launched →", NAVY)
    label(ax, 4.3, -0.55, "same height at each time step: they land together", NAVY, 8.5)


def p_vgraphs(ax):
    graph(ax, "time (s)", "velocity (m/s)", "Velocity components vs. time")
    ax.axhline(0, color=NAVY, lw=0.8)
    ax.plot([0, 2.04], [17.3, 17.3], color=RED, lw=2.2); label(ax, 1.0, 19.6, "vx: constant", RED)
    ax.plot([0, 2.04], [10, -10], color=GREEN, lw=2.2); label(ax, 1.5, 3.2, "vy: slope = −9.8 m/s²", GREEN)
    ax.set_xlim(0, 2.2); ax.set_ylim(-13, 23)


# ---------- Newton's laws ----------
def _box(ax, x, y, w=1.6, h=1.1, text=""):
    ax.add_patch(Rectangle((x - w / 2, y - h / 2), w, h, facecolor="#D9E2F3", edgecolor=NAVY, lw=1.5, zorder=2))
    if text: label(ax, x, y, text, NAVY, 8.5)


def n_fbd_rest(ax):
    blank(ax, (-4, 4), (-3.4, 3.4), "Book at rest on a table")
    _box(ax, 0, 0, text="book")
    arrow(ax, 0, 0.55, 0, 2.55, GREEN); label(ax, 0.25, 2.2, "F_norm = 9.8 N", GREEN, ha="left")
    arrow(ax, 0, -0.55, 0, -2.55, RED); label(ax, 0.25, -2.2, "F_grav = 9.8 N", RED, ha="left")
    label(ax, -2.4, 0, "equal arrows:\nF_net = 0", NAVY, 8.5)


def n_fbd_push(ax):
    blank(ax, (-4.6, 5.2), (-3.4, 3.4), "Crate pushed across a floor")
    _box(ax, 0, 0, text="10 kg")
    arrow(ax, 0, 0.55, 0, 2.5, GREEN); label(ax, 0.2, 2.75, "F_norm = 98 N", GREEN, ha="left")
    arrow(ax, 0, -0.55, 0, -2.5, RED); label(ax, 0.2, -2.75, "F_grav = 98 N", RED, ha="left")
    arrow(ax, 0.8, 0, 3.8, 0, NAVY); label(ax, 2.6, 0.5, "F_app = 50 N", NAVY)
    arrow(ax, -0.8, 0, -2.56, 0, GOLD); label(ax, -2.5, 0.5, "F_frict = 29.4 N", GOLD)
    label(ax, 2.9, -1.3, "F_net = 20.6 N →\na = 2.06 m/s²", NAVY, 8.5, bold=True)


def n_thirdlaw(ax):
    blank(ax, (-5.5, 5.5), (-2.6, 3.0), "Third-law pair")
    _box(ax, -1.0, 0, 1.6, 1.6, "A\n60 kg"); _box(ax, 1.0, 0, 1.6, 1.6, "B\n40 kg")
    arrow(ax, -1.8, 0, -4.4, 0, RED); label(ax, -3.3, 0.55, "B on A: 120 N", RED)
    arrow(ax, 1.8, 0, 4.4, 0, NAVY); label(ax, 3.3, 0.55, "A on B: 120 N", NAVY)
    label(ax, -3.2, -1.3, "a = 2 m/s²", RED, 8.5); label(ax, 3.2, -1.3, "a = 3 m/s²", NAVY, 8.5)
    label(ax, 0, 2.3, "equal size, opposite direction, different objects", NAVY, 8.5)


def n_avsF(ax):
    graph(ax, "net force (N)", "acceleration (m/s²)", "Acceleration vs. net force")
    ax.plot([0, 2.0], [0, 4.0], color=NAVY, lw=2.2)
    ax.plot([0.4, 0.8, 1.2, 1.6, 2.0], [0.8, 1.6, 2.4, 3.2, 4.0], "o", color=RED, ms=5)
    label(ax, 0.75, 3.2, "slope = 1 ÷ m\n(m = 0.5 kg)", NAVY)
    ax.set_xlim(0, 2.3); ax.set_ylim(0, 4.6)


# ---------- Momentum ----------
def m_ft(ax):
    graph(ax, "time (s)", "force (N)", "Same impulse, different force")
    ax.fill_between([0, 0, 1, 1], [0, 30, 30, 0], color="#F5C6C0"); ax.plot([0, 0, 1, 1], [0, 30, 30, 0], color=RED, lw=1.8)
    ax.fill_between([2, 2, 5, 5], [0, 10, 10, 0], color="#D9E2F3"); ax.plot([2, 2, 5, 5], [0, 10, 10, 0], color=NAVY, lw=1.8)
    label(ax, 1.15, 33, "30 N × 1 s = 30 N·s", RED, 8.5)
    label(ax, 3.5, 13, "10 N × 3 s = 30 N·s", NAVY, 8.5)
    ax.set_xlim(-0.2, 5.4); ax.set_ylim(0, 37)


def _cart(ax, x, y, w, text, color="#D9E2F3"):
    ax.add_patch(Rectangle((x - w / 2, y), w, 0.9, facecolor=color, edgecolor=NAVY, lw=1.5))
    label(ax, x, y + 0.45, text, NAVY, 8.5)
    for dx in (-w / 4, w / 4): ax.add_patch(Circle((x + dx, y - 0.14), 0.14, color=NAVY))


def m_stick(ax):
    blank(ax, (-0.5, 10.5), (-0.6, 6.4), "Sticking collision")
    label(ax, 0.2, 5.6, "BEFORE", NAVY, 8.5, ha="left", bold=True)
    ax.plot([0, 10], [3.52, 3.52], color=NAVY, lw=1)
    _cart(ax, 2, 3.8, 1.8, "2 kg"); arrow(ax, 3.0, 4.25, 4.8, 4.25, RED); label(ax, 3.9, 4.85, "3 m/s", RED, 8.5)
    _cart(ax, 7.5, 3.8, 1.2, "1 kg"); label(ax, 7.5, 5.1, "at rest", GRAY, 8.5)
    label(ax, 0.2, 2.4, "AFTER", NAVY, 8.5, ha="left", bold=True)
    ax.plot([0, 10], [0.32, 0.32], color=NAVY, lw=1)
    _cart(ax, 4.5, 0.6, 1.8, "2 kg"); _cart(ax, 6.0, 0.6, 1.2, "1 kg")
    arrow(ax, 6.7, 1.05, 7.9, 1.05, RED); label(ax, 7.3, 1.65, "2 m/s", RED, 8.5)
    label(ax, 5.0, -0.35, "6 kg·m/s before = 6 kg·m/s after", NAVY, 8.5)


def m_recoil(ax):
    blank(ax, (-0.5, 10.5), (-0.6, 6.4), "Push-off from rest (recoil)")
    label(ax, 0.2, 5.6, "BEFORE", NAVY, 8.5, ha="left", bold=True)
    ax.plot([0, 10], [3.52, 3.52], color=NAVY, lw=1)
    _cart(ax, 4.2, 3.8, 1.8, "60 kg"); _cart(ax, 5.6, 3.8, 1.0, "3 kg")
    label(ax, 8.2, 4.3, "total p = 0", GRAY, 8.5)
    label(ax, 0.2, 2.4, "AFTER", NAVY, 8.5, ha="left", bold=True)
    ax.plot([0, 10], [0.32, 0.32], color=NAVY, lw=1)
    _cart(ax, 3.2, 0.6, 1.8, "60 kg"); arrow(ax, 2.2, 1.05, 1.6, 1.05, RED); label(ax, 1.9, 1.65, "0.5 m/s", RED, 8.5)
    _cart(ax, 6.3, 0.6, 1.0, "3 kg"); arrow(ax, 6.9, 1.05, 9.4, 1.05, NAVY); label(ax, 8.1, 1.65, "10 m/s", NAVY, 8.5)
    label(ax, 5.0, -0.35, "−30 kg·m/s + 30 kg·m/s = 0", NAVY, 8.5)


def m_bounce(ax):
    blank(ax, (-0.5, 10.5), (-0.6, 6.4), "Stick vs. bounce (0.5 kg ball at 6 m/s)")
    for y0, name, vf, dp in ((3.6, "STICKS", 0, "Δp = 3 kg·m/s"), (0.4, "BOUNCES", 4, "Δp = 5 kg·m/s")):
        ax.add_patch(Rectangle((9.2, y0 - 0.2), 0.5, 2.2, facecolor=GRAY, edgecolor=NAVY))
        label(ax, 0.1, y0 + 1.75, name, NAVY, 8.5, ha="left", bold=True)
        arrow(ax, 4.6, y0 + 1.25, 8.9, y0 + 1.25, NAVY); label(ax, 6.7, y0 + 1.7, "before: +3 kg·m/s", NAVY, 8)
        if vf: arrow(ax, 8.9, y0 + 0.35, 6.0, y0 + 0.35, RED); label(ax, 7.4, y0 - 0.1, "after: −2 kg·m/s", RED, 8)
        else: label(ax, 7.4, y0 + 0.35, "after: 0", RED, 8)
        label(ax, 2.1, y0 + 0.7, dp, NAVY, 9, bold=True)


# ---------- Work and energy ----------
def e_workangle(ax):
    blank(ax, (-1.5, 9.5), (-2.2, 4.2), "Work by a force at an angle")
    ax.plot([-1.5, 9.5], [-0.55, -0.55], color=NAVY, lw=1)
    _box(ax, 0.6, 0, 1.6, 1.1, "sled")
    arrow(ax, 1.4, 0, 3.65, 3.897, NAVY, 2.6); label(ax, 1.3, 2.4, "F = 50 N", NAVY, bold=True)
    arrow(ax, 1.4, 0, 3.65, 0, RED); label(ax, 3.9, 0.45, "F cos θ = 25 N", RED, ha="left")
    ax.plot([3.65, 3.65], [0, 3.9], color=GRAY, lw=1, ls=":")
    label(ax, 2.2, 0.42, "60°", NAVY, 8.5)
    arrow(ax, 1.0, -1.3, 8.5, -1.3, GREEN, 1.6); label(ax, 4.7, -1.8, "displacement d = 10 m     W = 25 N × 10 m = 250 J", GREEN, 8.5)


def e_fd(ax):
    graph(ax, "displacement (m)", "force (N)", "Force-displacement graph")
    ax.plot([0, 4, 6], [20, 20, 0], color=NAVY, lw=2.2)
    ax.fill_between([0, 4, 6], [20, 20, 0], color="#D9E2F3")
    label(ax, 2.0, 10, "80 J", NAVY, 10, bold=True); label(ax, 4.65, 5.5, "20 J", NAVY, 10, bold=True)
    label(ax, 4.9, 21.5, "work = area = 100 J", RED)
    ax.set_xlim(0, 7); ax.set_ylim(0, 25)


def e_bars(ax):
    graph(ax, "", "energy (J)", "Energy bar charts on a frictionless hill")
    pos = [("top", 100, 0), ("middle", 50, 50), ("bottom", 0, 100)]
    for i, (n, pe, ke) in enumerate(pos):
        x = i * 3
        ax.bar(x, pe, 0.8, color=NAVY); ax.bar(x + 0.9, ke, 0.8, color=RED); ax.bar(x + 1.8, 100, 0.8, color=GRAY)
    ax.set_xticks([0.9, 3.9, 6.9]); ax.set_xticklabels(["top", "middle", "bottom"])
    ax.grid(axis="x", visible=False)
    from matplotlib.patches import Patch
    ax.legend(handles=[Patch(color=NAVY, label="PE"), Patch(color=RED, label="KE"), Patch(color=GRAY, label="total")],
              loc="upper center", ncol=3, frameon=False, fontsize=8, bbox_to_anchor=(0.5, 1.0))
    ax.set_ylim(0, 128)


def e_kev(ax):
    graph(ax, "speed (m/s)", "kinetic energy (kJ)", "Kinetic energy vs. speed (1000 kg car)")
    vs = [i * 0.5 for i in range(0, 85)]
    ax.plot(vs, [0.5 * 1000 * v * v / 1000 for v in vs], color=NAVY, lw=2.2)
    for v in (20, 40):
        ke = 0.5 * v * v
        ax.plot([v, v, 0], [0, ke, ke], color=RED, lw=1, ls="--"); ax.plot([v], [ke], "o", color=RED, ms=6)
    label(ax, 19, 290, "20 m/s → 200 kJ", RED, 8.5, ha="right"); label(ax, 38.5, 860, "40 m/s → 800 kJ", RED, 8.5, ha="right")
    ax.set_xlim(0, 43); ax.set_ylim(0, 950)


def render(name, path):
    f, ax = fig()
    globals()[name](ax)
    f.tight_layout()
    f.savefig(path, dpi=200, facecolor="white")
    plt.close(f)
