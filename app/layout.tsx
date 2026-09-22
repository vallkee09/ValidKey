import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { isIndexable, siteOrigin } from "@/lib/site";
import "./globals.css";
const title = "Valerii Kovalenko — Quality Engineering & AI in QA";
const description =
  "Director of Quality Assurance at ODDITY. Quality Engineering, AI in QA, team leadership and career development. Personal consultations and QA + AI Radar.";
export const metadata: Metadata = {
  title: { default: title, template: "%s | Valerii Kovalenko" },
  description,
  ...(siteOrigin ? { metadataBase: new URL(siteOrigin) } : {}),
  robots: { index: isIndexable, follow: isIndexable },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Valerii Kovalenko",
  },
  twitter: { card: "summary", title, description },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
