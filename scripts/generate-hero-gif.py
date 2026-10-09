# Usage (requires Pillow):
#   python3 scripts/generate-hero-gif.py public/hero-pixel-night.gif night
#   python3 scripts/generate-hero-gif.py public/hero-pixel-day.gif day
"""Original pixel-art hero: dusk over Mt. Fuji, a torii gate in the water, falling sakura petals."""
import math
import random
import sys

from PIL import Image

W, H = 256, 108
FRAMES = 128
FRAME_MS = 90
# Clouds repeat every CLOUD_PERIOD pixels and move 1px per frame, so after FRAMES frames
# they line up with the first frame again (FRAMES must equal CLOUD_PERIOD).
CLOUD_PERIOD = 128
OUT = sys.argv[1]
VARIANT = sys.argv[2] if len(sys.argv) > 2 else "night"
NIGHT = VARIANT == "night"

rng = random.Random(7)

def hexc(h):
    h = h.lstrip("#")
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))

PALETTES = {
    # Dusk: indigo → rose → amber, with a low setting sun.
    "night": {
        "sky": ["#15142e", "#231c45", "#3b2a5e", "#5e3870", "#8a4776", "#b85a78", "#de7a73", "#f4a46b"],
        "sun": "#ffd6a0", "sun_hot": "#ffe9c4", "cloud": "#ffd6dc",
        "mtn": "#33294f", "mtn_shade": "#2a2244", "snow": "#e9e4f3", "snow_shade": "#b9b0d4",
        "hills": "#221c3d", "water_top": "#2a2146", "water_bottom": "#130f26", "glint": "#c8bee6",
        "branch": "#3a2232", "boat": "#1a1428",
    },
    # Day: clear blue sky, bright sun, fresh blue-green hills and lake.
    "day": {
        "sky": ["#5fa8e8", "#6db3ec", "#7dbdf0", "#8fc8f3", "#a3d3f5", "#b8ddf7", "#cde7f8", "#e2f1fa"],
        "sun": "#fff3b0", "sun_hot": "#ffffff", "cloud": "#ffffff",
        "mtn": "#5b77a8", "mtn_shade": "#4a6493", "snow": "#ffffff", "snow_shade": "#d7e3f4",
        "hills": "#4f8a6e", "water_top": "#6fb2df", "water_bottom": "#3f86c0", "glint": "#ffffff",
        "branch": "#5a3a3f", "boat": "#2f4060",
    },
}
PAL = PALETTES[VARIANT]

SKY = [hexc(c) for c in PAL["sky"]]
SUN = hexc(PAL["sun"])
SUN_HOT = hexc(PAL["sun_hot"])
CLOUD = hexc(PAL["cloud"])
MTN = hexc(PAL["mtn"])
MTN_SHADE = hexc(PAL["mtn_shade"])
SNOW = hexc(PAL["snow"])
SNOW_SHADE = hexc(PAL["snow_shade"])
HILLS = hexc(PAL["hills"])
WATER_TOP = hexc(PAL["water_top"])
WATER_BOTTOM = hexc(PAL["water_bottom"])
GLINT = hexc(PAL["glint"])
TORII = hexc("#d8473d")
TORII_DARK = hexc("#8f2a30")
TORII_TOP = hexc("#2b1a24")
BRANCH = hexc(PAL["branch"])
PINKS = [hexc("#f9c6d3"), hexc("#f39ab4"), hexc("#ffe1e8"), hexc("#e47a9a")]
STAR = hexc("#fff4dd")
BOAT = hexc(PAL["boat"])
BIRD = hexc("#2c3e57")

BAYER = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]]
HORIZON = 76

def mix(a, b, t):
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))

def sky_color(x, y):
    """Banded sky with ordered dithering between bands (classic pixel-art gradient)."""
    pos = (y / HORIZON) * (len(SKY) - 1)
    i = min(int(pos), len(SKY) - 2)
    frac = pos - i
    return SKY[i + 1] if frac * 16 > BAYER[y % 4][x % 4] else SKY[i]

# ---------- static layer ----------
base = Image.new("RGB", (W, H))
px = base.load()

for y in range(HORIZON):
    for x in range(W):
        px[x, y] = sky_color(x, y)

# Retro sun with horizontal cut stripes
SUN_C, SUN_R = ((116, 50), 19) if NIGHT else ((112, 26), 13)
for y in range(SUN_C[1] - SUN_R, SUN_C[1] + SUN_R + 1):
    for x in range(SUN_C[0] - SUN_R, SUN_C[0] + SUN_R + 1):
        d = math.hypot(x - SUN_C[0], y - SUN_C[1])
        if d <= SUN_R and 0 <= y < HORIZON:
            band = y - SUN_C[1]
            if NIGHT and band > 2 and (band % 5) in (0, 1) and band < SUN_R - 1:
                continue  # stripe gap shows the sky
            px[x, y] = mix(SUN_HOT, SUN, min(1, max(0, (y - (SUN_C[1] - SUN_R)) / (2 * SUN_R))))

# Sky + sun only; used later to know where drifting clouds may be painted.
sky_layer = base.copy()

# Clouds (soft horizontal pixel streaks), tiled every CLOUD_PERIOD px so they can drift and loop.
CLOUDS = [(10, 18, 40), (64, 26, 26), (100, 13, 22), (40, 34, 18)]
CLOUD_ALPHA = [(0.35, 0.5, 0.35), (0.75, 0.95, 0.75)][0 if NIGHT else 1]
cloud_pixels = []  # (x, y, alpha) in tile space
for cx, cy, length in CLOUDS:
    for row, shrink in enumerate([6, 0, 3]):
        for x in range(cx + shrink, cx + length - shrink):
            cloud_pixels.append((x % CLOUD_PERIOD, cy + row, CLOUD_ALPHA[row]))

# Mt. Fuji
PEAK = (176, 30)
for y in range(PEAK[1], HORIZON):
    half = (y - PEAK[1]) * 1.9 + 6
    for x in range(int(PEAK[0] - half), int(PEAK[0] + half) + 1):
        if 0 <= x < W:
            px[x, y] = MTN_SHADE if x > PEAK[0] + (y - PEAK[1]) * 0.6 else MTN
# Snow cap with natural drips: each column ends at its own depth
def snow_depth(x):
    return 9 + round(3 * math.sin(x * 0.9) + 2 * math.sin(x * 0.37 + 1.3) + (4 if (x // 3) % 4 == 0 else 0))

for x in range(PEAK[0] - 50, PEAK[0] + 51):
    for y in range(PEAK[1], PEAK[1] + snow_depth(x)):
        half = (y - PEAK[1]) * 1.9 + 6
        if PEAK[0] - half <= x <= PEAK[0] + half and 0 <= x < W:
            px[x, y] = SNOW_SHADE if x > PEAK[0] + (y - PEAK[1]) * 0.6 else SNOW

# Distant hills
for x in range(W):
    top = HORIZON - 4 - int(3 * math.sin(x / 9) + 2 * math.sin(x / 23 + 1))
    for y in range(top, HORIZON):
        px[x, y] = HILLS

# Water
for y in range(HORIZON, H):
    t = (y - HORIZON) / (H - HORIZON)
    for x in range(W):
        px[x, y] = mix(WATER_TOP, WATER_BOTTOM, t)

def rect(img, x0, y0, x1, y1, color):
    p = img.load()
    for y in range(max(0, y0), min(H, y1)):
        for x in range(max(0, x0), min(W, x1)):
            p[x, y] = color

# Torii gate standing in the water (left third)
TX = 46
rect(base, TX + 4, 46, TX + 8, 92, TORII)            # left pillar
rect(base, TX + 30, 46, TX + 34, 92, TORII)          # right pillar
rect(base, TX + 7, 46, TX + 8, 92, TORII_DARK)
rect(base, TX + 33, 46, TX + 34, 92, TORII_DARK)
rect(base, TX + 1, 54, TX + 37, 57, TORII)           # nuki (lower beam)
rect(base, TX + 1, 56, TX + 37, 57, TORII_DARK)
rect(base, TX + 17, 46, TX + 21, 54, TORII)          # gakuzuka (center strut)
for i, x in enumerate(range(TX - 4, TX + 43)):        # kasagi (curved top beam)
    lift = 1 if x < TX - 1 or x > TX + 39 else 0
    rect(base, x, 41 - lift, x + 1, 44 - lift, TORII_TOP)
    rect(base, x, 44 - lift, x + 1, 46 - lift, TORII)
# Torii reflection
for y in range(HORIZON, H):
    src = HORIZON - (y - HORIZON) * 2 + 18
    for x in range(TX - 4, TX + 43):
        if 0 <= src < H and base.getpixel((x, src)) in (TORII, TORII_DARK, TORII_TOP) and y > 92:
            if (y % 3) != 0:
                px[x, y] = mix(px[x, y], TORII, 0.35)

# Cherry blossom branches hanging in from both top corners
def blossom(cx, cy, r):
    for y in range(cy - r, cy + r + 1):
        for x in range(cx - r - 1, cx + r + 2):
            if 0 <= x < W and 0 <= y < H and math.hypot((x - cx) * 0.8, y - cy) <= r + rng.random() * 0.8:
                px[x, y] = rng.choice(PINKS[:2] + [PINKS[0]] * 2 + [PINKS[3]])
    for _ in range(r + 1):
        x, y = cx + rng.randint(-r, r), cy + rng.randint(-r, r)
        if 0 <= x < W and 0 <= y < H:
            px[x, y] = PINKS[2]


def branch(segments, thickness=2):
    for (x0, y0, x1, y1) in segments:
        steps = max(abs(x1 - x0), abs(y1 - y0), 1)
        for step in range(steps + 1):
            x = round(x0 + (x1 - x0) * step / steps)
            y = round(y0 + (y1 - y0) * step / steps)
            rect(base, x, y, x + thickness, y + thickness, BRANCH)


# Left: a bigger, fuller branch reaching further into the sky.
branch([(0, 3, 26, 12), (0, 16, 12, 21)], thickness=3)
branch([(26, 12, 46, 17), (46, 17, 64, 15), (16, 8, 28, 24), (36, 15, 42, 28), (8, 18, 14, 30)])
for cx, cy, r in [
    (5, 3, 5), (16, 6, 5), (27, 11, 5), (38, 14, 4), (50, 16, 4), (62, 14, 3), (68, 16, 2),
    (25, 23, 4), (41, 27, 3), (13, 29, 3), (4, 18, 4), (12, 0, 4), (32, 4, 3), (56, 22, 2),
]:
    blossom(cx, cy, r)

# Right: a smaller branch dipping in from the top-right corner.
branch([(W - 1, 2, W - 22, 9)], thickness=3)
branch([(W - 22, 9, W - 40, 12), (W - 30, 10, W - 36, 22), (W - 8, 5, W - 12, 18)])
for cx, cy, r in [
    (W - 4, 2, 4), (W - 14, 5, 4), (W - 24, 9, 4), (W - 35, 12, 3), (W - 43, 12, 2),
    (W - 35, 21, 3), (W - 12, 17, 3), (W - 22, 0, 3),
]:
    blossom(cx, cy, r)

# Pixels still showing sky/sun after the static scene is drawn — clouds only paint here.
sky_px, base_px = sky_layer.load(), base.load()
is_sky = [[y < HORIZON and base_px[x, y] == sky_px[x, y] for y in range(H)] for x in range(W)]

# ---------- animated elements ----------
stars = [(rng.randrange(W), rng.randrange(0, 34), rng.randrange(FRAMES)) for _ in range(38 if NIGHT else 0)]
stars = [(x, y, p) for x, y, p in stars if base.getpixel((x, y)) in SKY]

PETALS = []
for _ in range(26):
    PETALS.append({
        "x": rng.uniform(-10, W),
        "y0": rng.uniform(0, H + 12),
        "cycles": rng.choice([1, 1, 2]),
        "drift": rng.choice([1, 2]),
        "sway": rng.uniform(1.5, 3.5),
        "phase": rng.random(),
        "color": rng.choice(PINKS),
    })

shimmer = [(rng.randrange(SUN_C[0] - 20, SUN_C[0] + 20), rng.randrange(HORIZON + 1, H - 2), rng.randrange(3, 9), rng.randrange(FRAMES))
           for _ in range(30)]
water_glints = [(rng.randrange(W), rng.randrange(HORIZON + 3, H), rng.randrange(FRAMES)) for _ in range(40)]

BIRDS = [(rng.uniform(0, W), rng.randrange(10, 40), rng.choice([1, 1, 2]), rng.random()) for _ in range(5)]

assert FRAMES == CLOUD_PERIOD, "clouds must travel exactly one period per loop"

frames = []
for f in range(FRAMES):
    img = base.copy()
    p = img.load()
    t = f / FRAMES

    for cx, cy, alpha in cloud_pixels:  # drifting clouds (left → right), behind the scenery
        for tile in range(0, W + CLOUD_PERIOD, CLOUD_PERIOD):
            x = (cx + f) % CLOUD_PERIOD + tile - CLOUD_PERIOD
            if 0 <= x < W and is_sky[x][cy]:
                p[x, cy] = mix(p[x, cy], CLOUD, alpha)

    for x, y, phase in stars:  # twinkle
        if (f + phase) % 16 < 10:
            p[x, y] = STAR if (f + phase) % 16 < 5 else mix(STAR, SKY[1], 0.5)

    for x, y, length, phase in shimmer:  # sun reflection on the water
        offset = round(2 * math.sin(2 * math.pi * (t * 2 + phase / FRAMES)))
        if (f + phase) % 16 < 12:
            for dx in range(length):
                xx = x + dx + offset
                if 0 <= xx < W:
                    p[xx, y] = mix(SUN, WATER_TOP, (y - HORIZON) / (H - HORIZON) * 0.7)

    for x, y, phase in water_glints:
        if (f + phase) % 32 < 4:
            p[x, y] = mix(p[x, y], GLINT, 0.6)

    if not NIGHT:
        for bx0, by0, speed, phase in BIRDS:
            x = int((bx0 + t * W * speed) % (W + 20)) - 10
            y = by0 + round(1.5 * math.sin(2 * math.pi * (t * 3 + phase)))
            up = (f + int(phase * 10)) % 8 < 4
            wing = ((-2, -1), (-1, 0), (1, 0), (2, -1)) if up else ((-2, 1), (-1, 0), (1, 0), (2, 1))
            for dx, dy in ((0, 0),) + wing:
                if 0 <= x + dx < W and 0 <= y + dy < H:
                    p[x + dx, y + dy] = BIRD

    # bobbing boat
    bob = round(math.sin(2 * math.pi * t * 2))
    bx, by = 196, 90 + bob
    rect(img, bx, by, bx + 14, by + 2, BOAT)
    rect(img, bx + 2, by + 2, bx + 12, by + 3, BOAT)
    rect(img, bx + 6, by - 7, bx + 7, by, BOAT)            # mast
    rect(img, bx + 7, by - 6, bx + 11, by - 1, mix(SUN, BOAT, 0.4))  # sail

    for petal in PETALS:  # falling, swaying sakura petals (loop seamlessly)
        travel = (H + 12) * petal["cycles"]
        y = (petal["y0"] + t * travel) % (H + 12) - 8
        x = petal["x"] + t * W * 0  # no horizontal wrap needed
        # Sway only (no net sideways drift) so each petal is back where it started when the GIF loops.
        x = (petal["x"] + petal["sway"] * math.sin(2 * math.pi * (t * petal["cycles"] * 2 + petal["phase"]))) % (W + 10) - 5
        xi, yi = int(x), int(y)
        for dx, dy in ((0, 0), (1, 0)) if (f + int(petal["phase"] * 10)) % 8 < 4 else ((0, 0), (0, 1)):
            if 0 <= xi + dx < W and 0 <= yi + dy < H:
                p[xi + dx, yi + dy] = petal["color"]

    frames.append(img)

# Shared palette for a small, flicker-free GIF
palette_src = Image.new("RGB", (W, H * 4))
for i, fr in enumerate([frames[0], frames[32], frames[64], frames[96]]):
    palette_src.paste(fr, (0, i * H))
palette = palette_src.quantize(colors=128, method=Image.Quantize.MEDIANCUT)
q = [fr.quantize(palette=palette, dither=Image.Dither.NONE) for fr in frames]
q[0].save(OUT, save_all=True, append_images=q[1:], duration=FRAME_MS, loop=0, optimize=True, disposal=1)
print("saved", OUT)
