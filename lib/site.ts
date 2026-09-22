export const site = {
  name: "Valerii Kovalenko",
  role: "Director of Quality Assurance at ODDITY",
  linkedin: "https://www.linkedin.com/in/valerii-k-43189a122/",
  github: "https://github.com/vallkee09",
  telegram: "https://t.me/Vallkee",
};
// Canonicals are emitted only for an explicitly configured production domain.
export const siteOrigin = process.env.SITE_URL
  ? new URL(process.env.SITE_URL).origin
  : undefined;
export const isIndexable =
  Boolean(siteOrigin) && process.env.SITE_INDEXABLE === "true";
