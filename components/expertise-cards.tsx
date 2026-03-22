"use client";

import { useEffect, useRef } from "react";
import { BookOpen, Brain, Gamepad2, Users } from "lucide-react";
import { TiltCard } from "@/components/tilt-card";
import { RevealText } from "@/components/reveal-text";

const expertiseAreas = [
  {
    icon: BookOpen,
    title: "Library",
    description: "Handpicked books, templates, and resources curated from years of experience in the QA field.",
  },
  {
    icon: Brain,
    title: "AI in QA",
    description: "Latest trends, tools, and implementation strategies for AI-powered testing methodologies.",
  },
  {
    icon: Gamepad2,
    title: "Skill Games",
    description: "Interactive bug-hunting challenges and gamified learning to sharpen your testing skills.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Video calls, group chats, and networking opportunities with fellow QA professionals.",
  },
];

export function ExpertiseCards() {
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
      id="materials"
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
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
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
            Core Pillars
          </span>
          <RevealText
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "#1a1a2e",
              marginTop: 8,
              marginBottom: 12,
            }}
          >
            Everything You Need to Excel
          </RevealText>
          <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 440, margin: "0 auto" }}>
            Comprehensive resources designed to accelerate your QA career
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area, i) => (
            <TiltCard
              key={area.title}
              style={{
                background: "#ffffff",
                borderRadius: 16,
                padding: 22,
                border: "1px solid #f3f0ff",
                animationDelay: `${i * 80}ms`,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "#ede9fe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                  color: "#7c3aed",
                }}
              >
                <area.icon size={20} />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "#1a1a2e", marginBottom: 8 }}>
                {area.title}
              </h3>
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>
                {area.description}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
