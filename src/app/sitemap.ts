import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const now = new Date().toISOString();
  const routes = [
    "",
    "/areas",
    "/equipo",
    "/casos",
    "/recursos",
    "/contacto",
    "/areas/familia",
    "/areas/laboral",
    "/areas/consumidor",
  ];
  return routes.map((r) => ({
    url: base + r,
    lastModified: now,
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.8,
  }));
}
