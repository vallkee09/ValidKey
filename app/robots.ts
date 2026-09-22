import type { MetadataRoute } from "next";
import { isIndexable, siteOrigin } from "@/lib/site";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(isIndexable ? { allow: "/" } : { disallow: "/" }),
    },
    ...(isIndexable && siteOrigin
      ? { sitemap: `${siteOrigin}/sitemap.xml` }
      : {}),
  };
}
