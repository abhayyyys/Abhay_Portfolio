"use client";
import React, { useState, useRef } from "react";

interface VideoOnHoverProps {
  videoSrc: string;
  posterSrc: string;
  className?: string;
  children?: React.ReactNode;
}

const VideoOnHover: React.FC<VideoOnHoverProps> = ({
  videoSrc,
  posterSrc,
  className = "",
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && videoLoaded) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Poster Image */}
      <img
        src={posterSrc}
        alt="Video poster"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isHovered && videoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video - only loads when first hovered */}
      {isHovered && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {children}
    </div>
  );
};

export default VideoOnHover;
