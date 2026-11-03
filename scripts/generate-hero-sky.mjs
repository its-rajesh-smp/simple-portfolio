// Generates the painterly cloud background behind the hero (one billed gpt-image-2 call).
// Usage: node scripts/generate-hero-sky.mjs [cumulus|drift]
// Needs OPENAI_API_KEY in the git-ignored .env. Writes public/hero-sky-<variant>.png; convert with:
//   cwebp -q 86 public/hero-sky-<variant>.png -o src/assets/hero-sky.webp && rm public/hero-sky-<variant>.png
import { readFileSync, writeFileSync } from "node:fs";

const env = readFileSync(".env", "utf8");
const key = env.match(/^OPENAI_API_KEY=(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g, "");
if (!key) throw new Error("OPENAI_API_KEY missing from .env");

const VARIANT = process.argv[2] ?? "cumulus";

const PROMPTS = {
  cumulus: `Wide background image for the TOP of a clean minimal white portfolio website, with dark text placed over the CENTRE column. Hand-painted anime feature-film background, soft brushwork, restrained pastel palette, LOW SATURATION, calm, airy, high-key, nothing vivid.
A very pale powder-blue sky that fades to pure white towards the bottom. Large soft sculpted cumulus clouds catching faint warm cream light: one bank drifting in from the TOP-LEFT corner and down along the left edge, another bank along the TOP-RIGHT edge. The centre of the image is open, smooth, very pale sky with no clouds, so text stays readable. The bottom 35% of the image is plain, almost white, with no detail, so it blends seamlessly into a white page.
No ground, no horizon, no trees, buildings, people, animals, birds, sun, text, logos or watermark. Smooth gradients, sharp, no noise.`,
  // Shown in grayscale on the site, so this one is painted monochrome: long soft drifting layers, not puffy heaps.
  drift: `Wide background image for the TOP of a clean minimal white portfolio website, with dark text placed over the CENTRE column. Soft monochrome ink-wash and watercolour painting of clouds, pale silver-grey on white, LOW CONTRAST, calm, airy, high-key, elegant and minimal.
Long, thin, flowing layers of soft stratus and wispy cirrus clouds drifting in gentle diagonal sweeps: one set streaming down from the TOP-LEFT corner along the left edge, another set trailing along the TOP-RIGHT edge. Delicate feathered edges, translucent overlapping veils, a few faint soft-edged billows inside the layers for depth. The centre of the image is open, smooth, near-white with no clouds, so text stays readable. The bottom 35% of the image is plain white with no detail, so it blends seamlessly into a white page.
No ground, no horizon, no trees, buildings, people, animals, birds, sun, text, logos or watermark. Smooth gradients, sharp, no noise, no paper texture.`,
};
const PROMPT = PROMPTS[VARIANT];
if (!PROMPT) throw new Error(`Unknown variant "${VARIANT}" (use: ${Object.keys(PROMPTS).join(", ")})`);

async function generate(size) {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gpt-image-2", prompt: PROMPT, size, quality: "high", n: 1 }),
  });
  const json = await res.json();
  if (!res.ok) return { error: json.error?.message ?? res.statusText };
  return { b64: json.data[0].b64_json };
}

// Widest size first; an invalid size is rejected before any charge.
for (const size of ["3840x1920", "3456x2304"]) {
  console.log(`Requesting ${size}…`);
  const { b64, error } = await generate(size);
  if (b64) {
    writeFileSync(`public/hero-sky-${VARIANT}.png`, Buffer.from(b64, "base64"));
    console.log(`Saved public/hero-sky-${VARIANT}.png (${size})`);
    process.exit(0);
  }
  console.log(`  rejected: ${error}`);
}
process.exit(1);
