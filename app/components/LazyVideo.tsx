"use client";
import React, { useState, useRef, useEffect } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  onLoadStart?: () => void;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  className = "",
  autoPlay = false,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  onLoadStart,
}) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px", // Start loading 50px before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadStart = () => {
    onLoadStart?.();
  };

  const handleCanPlay = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {shouldLoad ? (
        <>
          {/* Show poster while video loads */}
          {!isLoaded && poster && (
            <img
              src={poster}
              alt="Video poster"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <video
            ref={videoRef}
            className={`w-full h-full object-cover ${
              !isLoaded ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            controls={controls}
            preload="metadata" // Only load metadata, not the full video
            onLoadStart={handleLoadStart}
            onCanPlay={handleCanPlay}
          >
            <source src={src} type="video/mp4" />
          </video>
        </>
      ) : (
        // Show poster image until video should load
        poster && (
          <img
            src={poster}
            alt="Video poster"
            className="w-full h-full object-cover"
          />
        )
      )}
    </div>
  );
};

export default LazyVideo;
