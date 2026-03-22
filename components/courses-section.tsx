"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/tilt-card";
import { RevealText } from "@/components/reveal-text";

const courses = [
  {
    level: "Junior",
    title: "QA Foundations",
    description: "Master the fundamentals of software testing and quality assurance.",
    features: [
      "Testing basics & methodologies",
      "Bug reporting best practices",
      "Test case design",
      "Introduction to automation",
    ],
    badge: "AI-Powered",
    badgeStyle: { background: "#ede9fe", color: "#6d28d9" },
    highlighted: false,
  },
  {
    level: "Middle",
    title: "Advanced QA Engineering",
    description: "Level up your skills with advanced testing strategies and tools.",
    features: [
      "Test automation frameworks",
      "API & performance testing",
      "CI/CD integration",
      "AI testing tools deep dive",
    ],
    badge: "⭐ Most Popular",
    badgeStyle: {
      background: "linear-gradient(135deg, #7c3aed, #ec4899)",
      color: "white",
    },
    highlighted: true,
  },
  {
    level: "Senior / Lead",
    title: "QA Leadership",
    description: "Become a QA leader and drive quality across your organization.",
    features: [
      "Team management & mentoring",
      "QA strategy & roadmaps",
      "Stakeholder communication",
      "Building testing culture",
    ],
    badge: "AI-Powered",
    badgeStyle: { background: "#ede9fe", color: "#6d28d9" },
    highlighted: false,
  },
];

export function CoursesSection() {
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
      id="courses"
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
            Learning Paths
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
            Courses for Every Level
          </RevealText>
          <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 440, margin: "0 auto" }}>
            Structured learning paths to take you from beginner to expert
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <TiltCard
              key={course.level}
              style={{
                background: course.highlighted ? "#faf8ff" : "#ffffff",
                borderRadius: 16,
                padding: 24,
                border: course.highlighted ? "2px solid #c4b5fd" : "1px solid #f3f0ff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Level + badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontSize: 12, fontWeight: 500, color: "#6b7280" }}>{course.level}</span>
                <span
                  style={{
                    ...course.badgeStyle,
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 99,
                  }}
                >
                  {course.badge}
                </span>
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1a1a2e", marginBottom: 8 }}>
                {course.title}
              </h3>
              <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 20 }}>{course.description}</p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                {course.features.map((feature) => (
                  <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "#ede9fe",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <polyline points="1,4 3.5,6.5 9,1" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ fontSize: 13, color: "#6b7280" }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                style={{
                  width: "100%",
                  padding: "11px 20px",
                  borderRadius: 99,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  ...(course.highlighted
                    ? { background: "linear-gradient(135deg, #7c3aed, #ec4899)", color: "white", border: "none" }
                    : { background: "white", color: "#7c3aed", border: "1.5px solid #c4b5fd" }),
                }}
              >
                View Course
                <ArrowRight size={14} />
              </button>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
