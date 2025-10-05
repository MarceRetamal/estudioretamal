import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 56,
          background: "#0B0B0C",
          color: "#F5F1E6",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: 64,
          gap: 32,
        }}
      >
        {/* Cambia la ruta si usas png/webp */}
        {/* @ts-ignore */}
        <img src="https://www.estudioretamal.com.ar/logo-er.png" width="140" height="140" />
        <div>
          <div style={{ color: "#8B5E3C" }}>Estudio Retamal</div>
          <div style={{ fontWeight: 700 }}>Servicios legales en La Plata</div>
          <div style={{ fontSize: 28, marginTop: 8 }}>Familia · Laboral · Consumidor</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
