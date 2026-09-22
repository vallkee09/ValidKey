import type { MetadataRoute } from "next";
import { isIndexable, siteOrigin } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable || !siteOrigin) return [];
  return [
    "/",
    "/radar",
    "/radar/a-practical-lens-for-ai-in-qa",
    "/skills",
    "/consultations",
  ].map((path) => ({ url: `${siteOrigin}${path}` }));
}
