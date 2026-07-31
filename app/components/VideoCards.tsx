"use client";
import { useState, useRef } from "react";

const VideoCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const R2 = "https://pub-728f9d7c2cb14f9eb6eb895f82ed6a8f.r2.dev";
  const cards = [
    { src: `${R2}/videos/home/home_sq1.mp4`, baseRotate: 2, baseY: 0, baseZ: 10 },
    { src: `${R2}/videos/home/home_sq2.mp4`, baseRotate: -3, baseY: -8, baseZ: 20 },
    { src: `${R2}/videos/home/home_sq3.mp4`, baseRotate: 1, baseY: 0, baseZ: 30 },
    { src: `${R2}/videos/home/home_sq4.mp4`, baseRotate: -2, baseY: -8, baseZ: 40 },
  ];

  const handleVideoRef = (el: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = el;
    if (!el) return;

    // PDF fix: check paused before calling play, then handle the promise
    if (el.paused) {
      el.play()
        .then(() => {
          // playing fine
        })
        .catch((err) => {
          if (err.name !== "AbortError") console.error(err);
        });
    }
  };

  const getStyle = (index: number) => {
    const card = cards[index];
    if (hoveredIndex === null) {
      return {
        transform: `rotate(${card.baseRotate}deg) translateY(${card.baseY}px)`,
        zIndex: card.baseZ,
        transition: "transform 0.3s ease",
        boxShadow: "0 15px 30px -8px rgba(0,0,0,0.6), 0 25px 50px -12px rgba(0,0,0,0.6)",
      };
    }
    if (index === hoveredIndex) {
      return {
        transform: "translateY(-48px) rotate(0deg) scale(1.05)",
        zIndex: 50,
        transition: "transform 0.3s ease",
        boxShadow: "0 15px 30px -8px rgba(0,0,0,0.6), 0 25px 50px -12px rgba(0,0,0,0.6)",
      };
    }
    const offset = index - hoveredIndex;
    return {
      transform: `translateX(${offset * 20}px) rotate(${card.baseRotate + offset * 4}deg) translateY(${card.baseY + 10}px)`,
      zIndex: 5,
      transition: "transform 0.3s ease",
      boxShadow: "0 15px 30px -8px rgba(0,0,0,0.6), 0 25px 50px -12px rgba(0,0,0,0.6)",
    };
  };

  return (
    <div className="flex items-center justify-center pt-4 px-4 sm:px-8 mt-5">
      <div className="relative flex items-center space-x-[-20px] sm:space-x-[-25px] md:space-x-[-50px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-52 md:h-72 bg-gray-800 rounded-2xl md:rounded-3xl"
            style={getStyle(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <video
              ref={(el) => handleVideoRef(el, index)}
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={card.src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCards;