"use client";

import { useEffect, useRef } from "react";

interface RevealTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p";
  style?: React.CSSProperties;
  className?: string;
  threshold?: number;
  stagger?: number;
}

export function RevealText({
  children,
  as: Tag = "h2",
  style,
  className,
  threshold = 0.4,
  stagger = 60,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.querySelectorAll<HTMLElement>(".rv-word").forEach((w) => {
        w.style.transform = "translateY(0)";
        w.style.opacity = "1";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>(".rv-word").forEach((word, i) => {
              setTimeout(() => {
                word.style.transform = "translateY(0)";
                word.style.opacity = "1";
              }, i * stagger);
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, threshold]);

  const words = children.split(" ");

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} style={style} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
        >
          <span
            className="rv-word"
            style={{
              display: "inline-block",
              transform: "translateY(110%)",
              opacity: 0,
              transition: `transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </Tag>
  );
}
