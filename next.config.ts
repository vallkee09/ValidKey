import type { NextConfig } from "next";
const isDevelopment = process.env.NODE_ENV === "development";
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      `connect-src 'self'${isDevelopment ? " ws: wss:" : ""}`,
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Cloudflare serves production headers from public/_headers.
  ...(isDevelopment
    ? {
        async headers() {
          return [{ source: "/(.*)", headers: securityHeaders }];
        },
      }
    : {}),
};
export default nextConfig;
