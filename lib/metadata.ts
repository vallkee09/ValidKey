import type { Metadata } from "next";
import { siteOrigin } from "./site";
export const socialImage = {
  url: "/images/valerii-kovalenko-social.png",
  width: 1200,
  height: 630,
  alt: "Valerii Kovalenko — Quality Engineering, AI and Leadership",
};
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
      images: [socialImage],
      ...(siteOrigin ? { url: `${siteOrigin}${path}` } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
