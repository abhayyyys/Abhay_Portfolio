"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

// Edit these three to change the numbers/labels shown.
const stats: Stat[] = [
  { target: 70, suffix: "+", label: "videos" },
  { target: 500, suffix: "K+", label: "total views" },
  { target: 7, suffix: "+", label: "companies & clients" },
];

export default function StatsCounter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();

      // The wrapper is taller than one viewport (see the `height` style
      // below); the card inside it is `sticky`, so it pins on screen for
      // as long as the wrapper is scrolling past. `scrollable` is how much
      // extra scroll distance exists beyond one viewport's worth — that's
      // the "counting window". progress = 0 the moment the card first
      // pins (wrapper's top reaches the top of the viewport), and = 1 once
      // that whole extra distance has been scrolled through, right as the
      // card unpins and the next section continues — no dead gap either
      // side, and the count always gets the full window to play out.
      const scrollable = rect.height - vh;
      if (scrollable <= 0) {
        setProgress(rect.top <= 0 ? 1 : 0);
        return;
      }
      let p = (0 - rect.top) / scrollable;
      p = Math.min(1, Math.max(0, p));
      setProgress(p);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    // Extra height beyond 100vh = the scroll distance the count plays out
    // over. Increase/decrease this to make the count take longer/shorter
    // to finish without changing how the card looks on screen at all.
    <div ref={wrapperRef} className="relative" style={{ height: "4000vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center px-4">
        <div
          className="mx-4 sm:mx-8 lg:mx-auto max-w-4xl w-full px-8 sm:px-12 lg:px-16 py-12 sm:py-16 rounded-3xl"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-around gap-12 sm:gap-6 text-center">
            {stats.map((stat, i) => {
              const value = Math.round(stat.target * progress);
              return (
                <div key={i} className="flex flex-col items-center">
                  <span
                    className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black leading-none tabular-nums"
                    style={{ fontFamily: "Product Sans, sans-serif" }}
                  >
                    {value}
                    {stat.suffix}
                  </span>
                  <span className="mt-3 text-lg sm:text-xl italic text-gray-700">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}