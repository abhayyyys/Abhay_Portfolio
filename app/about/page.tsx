"use client";

import WhatIAmGoodAt from "../components/WhatIAmGoodAt";
import StatsCounter from "../components/StatsCounter";
import { useRef, useEffect, useState } from "react";

export default function About() {
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [glassVisible, setGlassVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Video fades from 1 to 0.08 as user scrolls through first screen
      const opacity = Math.max(0.08, 1 - scrollY / (vh * 0.7));
      setVideoOpacity(opacity);

      // Glass card appears after scrolling 20% of viewport
      setGlassVisible(scrollY > vh * 0.2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const R2 = "https://videos.abhaysingh.space";


  return (
    <div style={{ backgroundColor: "#EDF1F0" }}>

      {/* Fixed video — z-index 1, navbar is z-index 10 so stays clickable */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 1,
          opacity: videoOpacity,
          transition: "opacity 0.1s linear",
          backgroundColor: "#EDF1F0",
        }}
      >
        <video
          ref={bgVideoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={`${R2}/videos/about_bg.mp4`} type="video/mp4" />
        </video>
      </div>

      {/* First section — fullscreen, video plays behind */}
      <div className="relative h-screen" style={{ zIndex: 2 }} />

      {/* Stat counter — numbers scroll-linked to this section's position,
          rising as it enters the viewport and falling back if scrolled
          past in reverse. Sits above the fixed bg video like the intro
          card above it. */}
      <div className="relative" style={{ zIndex: 2 }}>
        <StatsCounter />
      </div>

      {/* Second section — glass card. Padding trimmed to pt-0/pb-2 (from
          pt-6/pb-6) so it sits right up against the stats card above it
          instead of leaving a visible gap between the two glass panels. */}
      <div
        className="relative flex flex-col justify-center items-center pt-0 pb-6 px-4"
        style={{ zIndex: 2 }}
      >
        <div
          className="mx-4 sm:mx-8 lg:mx-auto max-w-4xl w-full px-8 sm:px-12 lg:px-16 py-12 sm:py-16 rounded-3xl transition-all duration-700 ease-out"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            opacity: glassVisible ? 1 : 0,
            transform: glassVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <h1
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-500 text-left tracking-wide mb-4"
            style={{ fontFamily: "Product Sans, sans-serif" }}
          >
            [Abhay Singh]
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700 text-center">
            Be it an idea, a product or a story, it becomes the clearest when it's playing in front of you, 
            shot, edited and produced in the exact way you imagined it. And what makes your idea resonate
            is the IDENTITY it carries, not how fancy it looks, nor the AI jargon making it sound professional,
            but the identity you impart to it. Andddd that is exactly where I come in. I have worked with
            directors, brands and agencies to create all sorts of content, and that has helped me form 
            my approach no matter the scale or vibe of the project: Identity and Coherence.
            (Scroll down to see more!)
          </p>
        </div>
      </div>

      {/* WhatIAmGoodAt — solid dark background blocks video */}
      <div style={{ position: "relative", zIndex: 2, backgroundColor: "#1b1919" }}>
        <WhatIAmGoodAt />
      </div>
    </div>
  );
}