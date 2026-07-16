"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

type Phase = "idle" | "closing" | "opening";

// Global navigate function so TransitionLink can trigger it from anywhere
let triggerNavigate: ((href: string) => void) | null = null;

export function usePageTransition() {
  return useCallback((href: string) => {
    if (triggerNavigate) triggerNavigate(href);
  }, []);
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("closing");
  const phaseRef = useRef<Phase>("closing");

  const setPhaseSync = (p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  };

  // First load: open immediately
  useEffect(() => {
    const t = setTimeout(() => setPhaseSync("opening"), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase === "opening") {
      const t = setTimeout(() => setPhaseSync("idle"), 900);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // When pathname actually changes (after navigation), open the curtain
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;
    // Curtain should already be closed from the click handler — just open
    setPhaseSync("opening");
  }, [pathname]);

  // Register global navigate trigger
  useEffect(() => {
    triggerNavigate = (href: string) => {
      if (phaseRef.current !== "idle") return; // already transitioning
      setPhaseSync("closing");
      setTimeout(() => {
        router.push(href);
      }, 850); // navigate only after curtain is fully closed
    };
    return () => { triggerNavigate = null; };
  }, [router]);

  const EASE = "cubic-bezier(0.87, 0, 0.13, 1)";
  const abhayTransform = phase === "closing" ? "translateY(0%)" : "translateY(-100%)";
  const singhTransform = phase === "closing" ? "translateY(0%)" : "translateY(100%)";
  const panelTransition =
    phase === "idle"
      ? "none"
      : phase === "closing"
      ? `transform 0.8s ${EASE}`
      : `transform 0.85s ${EASE}`;

  return (
    <>
      <div style={{ pointerEvents: phase === "idle" ? "auto" : "none" }}>
        {children}
      </div>

      <div
        className="fixed inset-0 overflow-hidden"
        style={{
          zIndex: 9999,
          pointerEvents: phase === "idle" ? "none" : "auto",
        }}
      >
        {/* ABHAY — top panel */}
        <div
          className="absolute left-0 right-0 overflow-hidden"
          style={{
            top: 0,
            height: "50%",
            transform: abhayTransform,
            transition: panelTransition,
            willChange: "transform",
          }}
        >
          <div className="relative w-full h-full">
            <Image src="/thumbnails/Abhay.jpg" alt="" fill className="object-cover object-bottom" priority />
          </div>
        </div>

        {/* SINGH — bottom panel */}
        <div
          className="absolute left-0 right-0 overflow-hidden"
          style={{
            top: "50%",
            height: "50%",
            transform: singhTransform,
            transition: panelTransition,
            willChange: "transform",
          }}
        >
          <div className="relative w-full h-full">
            <Image src="/thumbnails/Singh.jpg" alt="" fill className="object-cover object-top" priority />
          </div>
        </div>
      </div>
    </>
  );
}