"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Send } from "lucide-react";

const footerLinks = [
  {
    title: "Learning",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Materials", href: "#materials" },
      { label: "Playzone", href: "#playzone" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Mentorship", href: "#mentorship" },
      { label: "AI Insights", href: "#ai-insights" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Me", href: "#" },
      { label: "Contact", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/valerii-k-43189a122/", label: "LinkedIn" },
  { icon: Send, href: "https://t.me/Vallkee", label: "Telegram" },
  { icon: Github, href: "https://github.com/vallkee09", label: "GitHub" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setEmail("");
  };

  return (
    <footer className="" style={{ background: "#1a1a2e", color: "#9ca3af", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" style={{ paddingTop: 40, paddingBottom: 0, width: "100%" }}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: logo + newsletter + social */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 2, textDecoration: "none" }}>
              <span style={{ fontSize: 20, fontWeight: 600, color: "#a78bfa" }}>Valid</span>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #a78bfa, #f9a8d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Key
              </span>
            </Link>

            <p style={{ marginTop: 14, fontSize: 13, lineHeight: 1.65, maxWidth: 340, color: "#6b7280" }}>
              Empowering QA professionals to reach their full potential through expert mentorship,
              cutting-edge AI insights, and comprehensive learning resources.
            </p>

            {/* Newsletter */}
            <div style={{ marginTop: 20 }}>
              <p style={{ fontSize: 13, fontWeight: 500, color: "#e5e7eb", marginBottom: 10 }}>
                Subscribe to newsletter
              </p>
              <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, maxWidth: 320 }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    background: "#262640",
                    border: "1px solid #374151",
                    color: "#e5e7eb",
                    padding: "8px 14px",
                    borderRadius: 99,
                    fontSize: 13,
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: 99,
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  Subscribe
                </button>
              </form>
              {error && <p style={{ fontSize: 12, color: "#f87171", marginTop: 6 }}>{error}</p>}
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "#262640",
                    border: "1px solid #374151",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6b7280",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#6b7280"; }}
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Right: nav links */}
          <div className="grid grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "#e5e7eb", marginBottom: 14 }}>
                  {section.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        style={{ fontSize: 13, color: "#6b7280", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#9ca3af"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#6b7280"; }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: "1px solid #374151", marginTop: 32, padding: "20px 0", textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#6b7280" }}>
            &copy; {new Date().getFullYear()} ValidKey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
