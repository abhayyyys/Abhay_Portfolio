"use client";
import React, { useState } from "react";

interface SkillCardProps {
  number: string;
  title: string;
  videoSrc: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ number, title, videoSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full bg-transparent rounded-full py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Video */}
      {isHovered && (
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-70 bg-black"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 flex gap-8 sm:gap-16 md:gap-20 lg:gap-28 flex-row items-center justify-start h-full min-h-10">

        {/* Number with bracket animation */}
        <div
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex items-center"
          style={{
            fontFamily: "Product Sans, sans-serif",
            minWidth: "5rem",
            color: isHovered ? "#f4c2be" : "white",
            transition: "color 0.3s ease",
          }}
        >
          {/* Left bracket comes from the left */}
          <span
            style={{
              display: "inline-block",
              transform: isHovered ? "translateX(0)" : "translateX(-20px)",
              opacity: isHovered ? 1 : 0,
              transition: "transform 0.35s ease, opacity 0.35s ease",
            }}
          >
            [
          </span>

          {/* Number */}
          <span style={{ margin: "0 1px" }}>{number}</span>

          {/* Right bracket comes from the right */}
          <span
            style={{
              display: "inline-block",
              transform: isHovered ? "translateX(0)" : "translateX(20px)",
              opacity: isHovered ? 1 : 0,
              transition: "transform 0.35s ease, opacity 0.35s ease",
            }}
          >
            ]
          </span>
        </div>

        {/* Title */}
        <div
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
          style={{
            fontFamily: "Product Sans, sans-serif",
            color: isHovered ? "#f4c2be" : "white",
            transition: "color 0.3s ease",
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default function WhatIAmGoodAt() {
  const skills = [
    {
      number: "01",
      title: "PRODUCT MARKETING",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
    {
      number: "02",
      title: "SOCIAL MEDIA",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
    {
      number: "03",
      title: "VISUAL COMMUNICATION",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
    {
      number: "04",
      title: "BRAND IDENTITY",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
  ];

  return (
    <div className="w-full bg-[#1b1919] py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-8 lg:mb-16 px-4">
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4"
            style={{ fontFamily: "Product Sans, sans-serif" }}
          >
            WHAT I AM
          </h2>

          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {/* Star clipped in square */}
            <div
              style={{
                width: "160px",
                height: "160px",
                overflow: "hidden",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/Star.svg"
                alt="star"
                className="animate-spin"
                style={{
                  animationDuration: "6s",
                  width: "300%",
                  height: "300%",
                  minWidth: "300%",
                }}
              />
            </div>

            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white"
              style={{ fontFamily: "Product Sans, sans-serif" }}
            >
              GREAT AT
            </h2>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="flex flex-col mx-auto max-w-7xl px-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              number={skill.number}
              title={skill.title}
              videoSrc={skill.videoSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}