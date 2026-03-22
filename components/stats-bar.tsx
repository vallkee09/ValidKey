"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "10+", label: "Years Experience",  target: 10, suffix: "+" },
  { value: "50+", label: "Mentored Students", target: 50, suffix: "+" },
  { value: "100+", label: "AI Tools Reviewed", target: 100, suffix: "+" },
];

function useCountUp(target: number, duration = 1600, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setCount(target); return; }

    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);

  return count;
}

function StatItem({ stat, triggered }: { stat: typeof stats[0]; triggered: boolean }) {
  const count = useCountUp(stat.target, 1600, triggered);
  return (
    <div style={{ textAlign: "center" }}>
      <div
        className="stat-shimmer"
        style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1 }}
      >
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: 13, fontWeight: 500, color: "#6b7280", marginTop: 6 }}>
        {stat.label}
      </div>
    </div>
  );
}

export function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-enter"
      style={{
        background: "#ede9fe",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "28px 0",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" style={{ width: "100%" }}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}
