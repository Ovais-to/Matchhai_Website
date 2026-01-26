import { MetadataRoute } from "next";
import { routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://matchhai.com";
  const entries = Object.values(routes).map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));
  return entries;
}
