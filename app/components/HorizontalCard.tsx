"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

interface HorizontalCardProps {
  image: string;
  video?: string;
  mainHeading: string;
  category: string;
  description: string;
  slug?: string;
}

export default function HorizontalCard({
  image,
  video,
  mainHeading,
  category,
  description,
  slug,
}: HorizontalCardProps) {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (slug === "") {
      router.push("/work");
    } else if (slug) {
      router.push(`/work/${slug}`);
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="flex flex-col lg:flex-row lg:items-center bg-[#EDF1F0] hover:bg-[#1b1919] hover:rounded-[5rem] p-4 sm:p-6 lg:p-8 mx-4 sm:mx-6 lg:mx-8 transition-all duration-200 ease-in-out group cursor-pointer"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image/Video on the left */}
      <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-8 text-center lg:text-left">
        <div className="relative w-full sm:w-80 lg:w-64 h-40 sm:h-48 lg:h-40 rounded-lg group-hover:rounded-full overflow-hidden mx-auto lg:mx-0 transition-all duration-300">
          {/* Still image shown by default */}
          <img
            src={image}
            alt={mainHeading}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Video overlaid, plays on hover */}
          {video && (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={video} type="video/mp4" />
            </video>
          )}
        </div>
      </div>

     {/* Main heading */}
      <div className="flex-grow flex flex-col lg:flex-row lg:items-end mb-4 lg:mb-0 lg:mr-8 lg:self-end text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black group-hover:text-white leading-tight transition-colors duration-300 ease-in-out">
          {mainHeading}
        </h2>
      </div>

      {/* Right section */}
      <div className="flex-shrink-0 lg:w-120 text-center lg:text-left">
       <h3 className="text-base sm:text-lg font-semibold text-orange-500 mb-3 tracking-wide">
          [{category}]
        </h3>

        <p className="text-lg sm:text-xl text-gray-700 group-hover:text-white leading-relaxed transition-colors duration-300 ease-in-out">
          {description}
        </p>
      </div>
    </div>
  );
}