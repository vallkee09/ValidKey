"use client";

import { useEffect, useRef } from "react";

const words1 = ["Level", "up", "your"];
const words2 = ["testing"];
const word3 = "career.";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const section = sectionRef.current;
      const content = contentRef.current;
      if (!section || !content) return;

      const scrollY = window.scrollY;
      const heroH = section.offsetHeight;
      const progress = Math.min(1, scrollY / heroH);

      // Fade + subtle upward pull on content
      content.style.opacity = String(Math.max(0, 1 - progress * 1.8));
      content.style.transform = `translateY(${-scrollY * 0.12}px) scale(${1 - progress * 0.05})`;

      // Blobs at 0.3× scroll speed
      if (blob1Ref.current) blob1Ref.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      if (blob2Ref.current) blob2Ref.current.style.transform = `translateY(${scrollY * 0.3}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "#faf8ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Blobs */}
      <div
        ref={blob1Ref}
        style={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        ref={blob2Ref}
        style={{
          position: "absolute",
          top: -60,
          right: -80,
          width: 420,
          height: 420,
          background: "radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 760,
          width: "100%",
          transformOrigin: "center center",
          marginTop: -48,
        }}
      >
        {/* Live badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "#ede9fe",
            color: "#6d28d9",
            fontSize: 12,
            fontWeight: 500,
            padding: "5px 14px",
            borderRadius: 99,
            border: "1px solid #c4b5fd",
            marginBottom: 28,
            animation: "fadeSlideUp 0.6s ease both",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: "#7c3aed",
              borderRadius: "50%",
              display: "inline-block",
              animation: "pulse-dot 2s infinite",
            }}
          />
          Now with AI-powered learning
        </div>

        {/* H1 — word split */}
        <h1
          style={{
            fontSize: "clamp(38px, 6.5vw, 68px)",
            fontWeight: 700,
            letterSpacing: "-2px",
            color: "#1a1a2e",
            lineHeight: 1.08,
            marginBottom: 22,
          }}
        >
          {words1.map((word, i) => (
            <span
              key={word + i}
              style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.22em" }}
            >
              <span
                style={{
                  display: "inline-block",
                  animation: `wordSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms both`,
                }}
              >
                {word}
              </span>
            </span>
          ))}

          <br />

          {words2.map((word, i) => (
            <span
              key={word + i}
              style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.22em" }}
            >
              <span
                style={{
                  display: "inline-block",
                  animation: `wordSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${(words1.length + i) * 80}ms both`,
                }}
              >
                {word}
              </span>
            </span>
          ))}

          {/* Gradient word */}
          <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: `wordSlideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${(words1.length + words2.length) * 80}ms both`,
              }}
            >
              {word3}
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 17,
            color: "#6b7280",
            maxWidth: 480,
            margin: "0 auto 36px",
            lineHeight: 1.65,
            animation: "fadeSlideUp 0.7s ease 480ms both",
          }}
        >
          10+ years of QA expertise shared through mentorship, structured courses, and
          AI-powered interactive learning.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
            animation: "fadeSlideUp 0.7s ease 580ms both",
          }}
        >
          <button
            style={{
              background: "linear-gradient(135deg, #7c3aed, #ec4899)",
              color: "white",
              border: "none",
              padding: "13px 28px",
              borderRadius: 99,
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Start Learning
          </button>
          <button
            style={{
              background: "white",
              color: "#7c3aed",
              border: "1.5px solid #c4b5fd",
              padding: "13px 28px",
              borderRadius: 99,
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Book Mentorship
          </button>
        </div>

        {/* Mini stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            marginTop: 56,
            flexWrap: "wrap",
            animation: "fadeSlideUp 0.7s ease 680ms both",
          }}
        >
          {[
            { value: "10+", label: "Years" },
            { value: "50+", label: "Students" },
            { value: "100+", label: "AI tools" },
            { value: "3", label: "Learning paths" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: "#6b7280", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll hint — positioned relative to section so it's always centered */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          animation: "fadeSlideUp 0.7s ease 900ms both",
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: 11, color: "#9ca3af", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 32,
            background: "linear-gradient(to bottom, #c4b5fd, transparent)",
          }}
        />
      </div>
    </section>
  );
}
