"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#materials", label: "Materials" },
  { href: "#courses", label: "Courses" },
  { href: "#mentorship", label: "Mentorship" },
  { href: "#ai-insights", label: "AI Insights" },
  { href: "#playzone", label: "Playzone" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        background: "rgba(250, 248, 255, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(124, 58, 237, 0.1)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span style={{ fontSize: 20, fontWeight: 600, color: "#1a1a2e" }}>Valid</span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 600,
              background: "linear-gradient(135deg, #7c3aed, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Key
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontSize: 14, fontWeight: 500, color: "#6b7280", padding: "6px 12px", borderRadius: 8, transition: "color 0.15s" }}
              className="hover:text-[#7c3aed]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            style={{
              background: "none",
              border: "none",
              color: "#6b7280",
              padding: "6px 14px",
              borderRadius: 99,
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#ede9fe"; (e.currentTarget as HTMLButtonElement).style.color = "#7c3aed"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "none"; (e.currentTarget as HTMLButtonElement).style.color = "#6b7280"; }}
          >
            Sign In
          </button>
          <button
            style={{
              background: "linear-gradient(135deg, #7c3aed, #ec4899)",
              color: "white",
              border: "none",
              padding: "8px 18px",
              borderRadius: 99,
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          style={{ background: "none", border: "none", color: "#6b7280", padding: 8, borderRadius: 8, cursor: "pointer" }}
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "rgba(250, 248, 255, 0.95)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(124, 58, 237, 0.1)",
          }}
          className="md:hidden"
        >
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ padding: "12px 0", fontSize: 14, fontWeight: 500, color: "#6b7280" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #f3f0ff", display: "flex", flexDirection: "column", gap: 8 }}>
              <button style={{ background: "none", border: "none", color: "#6b7280", padding: "8px 0", fontSize: 14, fontWeight: 500, cursor: "pointer", textAlign: "left" }}>
                Sign In
              </button>
              <button
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: 99,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
