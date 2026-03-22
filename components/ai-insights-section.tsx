"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { RevealText } from "@/components/reveal-text";

const newsItems = [
  { title: "How AI is Transforming Test Automation in 2026", tag: "AI", date: "Jan 20, 2026" },
  { title: "Top 10 AI Testing Tools Every QA Should Know", tag: "Testing", date: "Jan 18, 2026" },
  { title: "Career Paths in QA: From Manual to AI Engineer", tag: "Career", date: "Jan 15, 2026" },
  { title: "Building Resilient Test Suites with Machine Learning", tag: "AI", date: "Jan 12, 2026" },
  { title: "The Future of Quality Engineering: Trends to Watch", tag: "Testing", date: "Jan 10, 2026" },
];

const tagStyles: Record<string, { background: string; color: string }> = {
  AI:      { background: "#ede9fe", color: "#6d28d9" },
  Testing: { background: "#d1fae5", color: "#065f46" },
  Career:  { background: "#fef3c7", color: "#92400e" },
};

export function AIInsightsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ai-insights"
      ref={sectionRef}
      className="section-enter"
      style={{
        background: "#faf8ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        scrollMarginTop: 64,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" style={{ width: "100%", paddingTop: 64, paddingBottom: 64 }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              News Feed
            </span>
            <RevealText
              style={{
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: "-1px",
                color: "#1a1a2e",
                marginTop: 8,
              }}
            >
              Latest in IT & QA
            </RevealText>
          </div>
          <Link
            href="#"
            style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14, fontWeight: 500, color: "#7c3aed", textDecoration: "none" }}
          >
            View all articles
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* News list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {newsItems.map((item) => (
            <Link
              key={item.title}
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                background: "white",
                borderRadius: 12,
                border: "1px solid #f3f0ff",
                textDecoration: "none",
                transition: "box-shadow 0.15s",
                flexWrap: "wrap",
                gap: 8,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 12px rgba(124,58,237,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    ...tagStyles[item.tag],
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 99,
                    flexShrink: 0,
                  }}
                >
                  {item.tag}
                </span>
                <span style={{ fontSize: 14, fontWeight: 500, color: "#1a1a2e" }}>{item.title}</span>
              </div>
              <span style={{ fontSize: 12, color: "#9ca3af", flexShrink: 0 }}>{item.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
