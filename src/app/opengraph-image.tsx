import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = profile.seoTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070b14",
          color: "#eef2ff",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 6, color: "#8b7cff", textTransform: "uppercase" }}>
          Business · FinTech · Technology
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#93a0b8", maxWidth: 860 }}>
            {profile.headline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
