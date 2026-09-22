import type { Metadata } from "next";
import { siteOrigin } from "./site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: { absolute: `${title} | Valerii Kovalenko` },
    description,
    ...(siteOrigin
      ? { alternates: { canonical: `${siteOrigin}${path}` } }
      : {}),
    openGraph: {
      title,
      description,
      type: "website",
      ...(siteOrigin ? { url: `${siteOrigin}${path}` } : {}),
    },
    twitter: { card: "summary", title, description },
  };
}
