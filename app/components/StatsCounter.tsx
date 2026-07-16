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

// How quickly the displayed count catches up to the scroll position.
// Lower = smoother/more trailing, higher = snappier/more literal.
const EASE = 0.12;

export default function StatsCounter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Two refs instead of state for the raw numbers: `target` is where scroll
  // says we should be right now, `current` is what's actually on screen.
  // Only `current` (via displayProgress) triggers a render.
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Recomputes target progress from the wrapper's position. Reading
    // getBoundingClientRect inside the rAF loop (rather than inside a
    // scroll listener) means we sample position once per paint, at a
    // steady cadence, instead of at however often/unevenly the browser
    // decides to fire scroll events — that mismatch between event
    // frequency and paint frequency is most of what caused the choppiness.
    const computeTarget = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - vh;
      if (scrollable <= 0) {
        targetProgress.current = rect.top <= 0 ? 1 : 0;
        return;
      }
      const p = (0 - rect.top) / scrollable;
      targetProgress.current = Math.min(1, Math.max(0, p));
    };

    // Runs every frame regardless of scroll activity. `current` eases
    // toward `target` with simple exponential smoothing (lerp), which
    // absorbs the little stutters/inconsistent deltas scroll produces and
    // turns them into one continuous, evenly-paced count.
    const tick = () => {
      computeTarget();
      const diff = targetProgress.current - currentProgress.current;
      if (Math.abs(diff) < 0.0005) {
        currentProgress.current = targetProgress.current;
      } else {
        currentProgress.current += diff * EASE;
      }
      setDisplayProgress(currentProgress.current);
      rafId.current = requestAnimationFrame(tick);
    };

    computeTarget();
    currentProgress.current = targetProgress.current;
    setDisplayProgress(currentProgress.current);
    rafId.current = requestAnimationFrame(tick);

    window.addEventListener("resize", computeTarget, { passive: true });
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", computeTarget);
    };
  }, []);

  return (
    // Extra height beyond 100vh = the scroll distance the count plays out
    // over. Increase/decrease this to make the count take longer/shorter
    // to finish without changing how the card looks on screen at all.
    // Kept small (102vh) so the section right after this one arrives
    // quickly once the count finishes, instead of leaving a long empty
    // scroll gap before the next card appears.
    <div ref={wrapperRef} className="relative" style={{ height: "110vh" }}>
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
              const value = Math.round(stat.target * displayProgress);
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