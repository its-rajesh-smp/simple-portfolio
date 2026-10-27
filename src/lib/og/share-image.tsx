import { PROFILE } from "@/data/portfolio";
import { ImageResponse } from "next/og";

/** 1200×630 is what LinkedIn, X, WhatsApp, Slack and Gmail all expect for a large link preview. */
export const SHARE_IMAGE_SIZE = { width: 1200, height: 630 };
export const SHARE_IMAGE_ALT = `${PROFILE.name} — ${PROFILE.role} at ${PROFILE.currentCompany.name}`;

const HIGHLIGHTS = [`${PROFILE.yearsOfExperience}+ years`, "AI products", "Backend systems", "Infra & deployments"];

/** Grayscale, face-centred crop of the avatar via a Cloudinary transform. */
const avatar = PROFILE.avatarUrl.replace("/upload/", "/upload/e_grayscale,c_fill,g_face,w_320,h_320/");

const ink = "#fafafa";
const muted = "#a3a3a3";
const subtle = "#737373";
const line = "#262626";
const surface = "#0a0a0a";

/** Inter as TTF (Satori can't read woff2); Google Fonts serves TTF to non-browser clients. */
async function loadInter(weight: 400 | 700, text: string) {
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(text)}`)).text();
  const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
  if (!url) throw new Error("Inter font not found");
  return (await fetch(url)).arrayBuffer();
}

/** Black & white share card, matching the site: guide-line grid, grayscale photo, big name. */
export async function renderShareImage() {
  const domain = new URL(PROFILE.url).hostname.replace(/^www\./, "");
  const roleLine = `${PROFILE.role} at ${PROFILE.currentCompany.name}`;
  const allText = ["R", domain, PROFILE.name, roleLine, ...HIGHLIGHTS].join("");

  // Fall back to the built-in font rather than failing the build if Google Fonts is unreachable.
  const fonts = await Promise.all([loadInter(400, allText), loadInter(700, allText)])
    .then(([regular, bold]) => [
      { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
      { name: "Inter", data: bold, weight: 700 as const, style: "normal" as const },
    ])
    .catch(() => undefined);

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", position: "relative", background: surface, fontFamily: "Inter", color: ink }}>
        {/* Guide lines framing the card, like the site's column lines */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 72, width: 1, background: line }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 72, width: 1, background: line }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: 72, height: 1, background: line }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 72, height: 1, background: line }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: "104px 112px" }}>
          {/* Top: logo + domain */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                borderRadius: 12,
                background: ink,
                color: surface,
                fontSize: 32,
                fontWeight: 700,
              }}
            >
              R
            </div>
            <div style={{ display: "flex", fontSize: 24, color: subtle }}>{domain}</div>
          </div>

          {/* Middle: photo + name + role */}
          <div style={{ display: "flex", alignItems: "center", gap: 44 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img> only */}
            <img src={avatar} width={168} height={168} alt="" style={{ borderRadius: 999, border: `2px solid ${line}` }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", fontSize: 64, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>{PROFILE.name}</div>
              <div style={{ display: "flex", fontSize: 32, color: muted }}>{roleLine}</div>
            </div>
          </div>

          {/* Bottom: highlights */}
          <div style={{ display: "flex", gap: 14 }}>
            {HIGHLIGHTS.map((item) => (
              <div key={item} style={{ display: "flex", padding: "10px 20px", borderRadius: 999, border: `1px solid #404040`, fontSize: 22, color: "#d4d4d4" }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...SHARE_IMAGE_SIZE, fonts },
  );
}
