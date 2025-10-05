// sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.estudioretamal.com.ar";
  const pages = ["", "/areas", "/equipo", "/casos", "/recursos", "/contacto"]
    .map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
  return pages;
}
