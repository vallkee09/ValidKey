"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { RevealText } from "@/components/reveal-text";

const features = [
  { emoji: "📄", label: "Personalized resume review & optimization" },
  { emoji: "🎯", label: "Mock technical interviews with feedback" },
  { emoji: "🗺️", label: "Career path planning & goal setting" },
  { emoji: "💬", label: "Weekly 1-on-1 coaching sessions" },
];

export function MentorshipSection() {
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
      id="mentorship"
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
        <div className="grid grid-cols-1 items-center lg:grid-cols-2" style={{ gap: 40 }}>
          {/* Left: text */}
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
              1-on-1 Mentorship
            </span>
            <RevealText
              style={{
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: "-1px",
                color: "#1a1a2e",
                marginTop: 8,
                marginBottom: 16,
              }}
            >
              Personalized Guidance for Your Career
            </RevealText>
            <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.65, marginBottom: 28 }}>
              Get dedicated support from someone who has walked the path. With over a decade of
              experience as a QA Manager, I&apos;ll help you navigate challenges and accelerate
              your growth.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {features.map((f) => (
                <div key={f.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "#ede9fe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      flexShrink: 0,
                    }}
                  >
                    {f.emoji}
                  </span>
                  <span style={{ fontSize: 14, color: "#6b7280" }}>{f.label}</span>
                </div>
              ))}
            </div>

            <button
              style={{
                marginTop: 32,
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                color: "white",
                border: "none",
                padding: "13px 28px",
                borderRadius: 99,
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Apply for Mentorship
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right: mentor card */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: 32,
              border: "1px solid #f3f0ff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                marginBottom: 16,
              }}
            />
            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1a1a2e", marginBottom: 4 }}>
              Your Mentor
            </h3>
            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 14 }}>QA Manager & Expert</p>

            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {["10+ Years Exp", "AI Expert"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#ede9fe",
                    color: "#6d28d9",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 99,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, fontStyle: "italic" }}>
              &quot;My mission is to help QA professionals reach their full potential through
              practical guidance and real-world insights.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
