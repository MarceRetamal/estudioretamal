import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image({ searchParams }: { searchParams: { title?: string } }) {
  const title = (searchParams?.title || "Estudio Retamal | Abogados").slice(0, 80);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background:
            "linear-gradient(120deg, #0b1220 0%, #0f172a 60%)",
          color: "#e2e8f0",
          fontSize: 48,
        }}
      >
        <div style={{fontSize: 18, opacity: .75, marginBottom: 16}}>Estudio Retamal</div>
        <div style={{fontWeight: 700, lineHeight: 1.1}}>{title}</div>
      </div>
    ),
    { ...size }
  );
}
