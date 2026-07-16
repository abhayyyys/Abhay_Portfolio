import VideoCards from "./components/VideoCards";
import HorizontalCard from "./components/HorizontalCard";
import WhatIAmGoodAt from "./components/WhatIAmGoodAt";
import Link from "next/link";
import { homeCards } from "./data/projects";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center pt-8"
      style={{ backgroundColor: "#EDF1F0" }}
    >
      {/* Location */}
      <p
        className="text-md text-black"
        style={{ fontFamily: "Product Sans, sans-serif" }}
      >
        GURGAON, DELHI
      </p>

      {/* Email */}
      <a
        href="mailto:abhaysingh.mov@gmail.com"
        className="text-sm hover:underline"
        style={{ fontFamily: "Product Sans, sans-serif", color: "#a8a8a8" }}
      >
        abhaysingh.mov@gmail.com
      </a>

      {/* Name - Very Huge */}
      <h1
        className="text-5xl sm:text-8xl font-normal text-center py-6"
        style={{ fontFamily: "Impact, sans-serif", fontWeight: 400 }}
      >
        ABHAY SINGH
      </h1>

      {/* Video Cards */}
      <VideoCards />

      {/* Professional Title - Huge but smaller than name */}
      <h2
        className="text-5xl sm:text-7xl font-bold text-center mt-8 text-[#a8a8a8] leading-tight sm:leading-[1.2]"
        style={{ fontFamily: "Impact, sans-serif", fontWeight: 400 }}
      >
        VIDEOGRAPHER,
        <br /> EDITOR & ANIMATOR
      </h2>

      {/* Clients */}
      <p
        className="text-lg text-black"
        style={{ fontFamily: "Product Sans, sans-serif" }}
      >
        Clients Include
      </p>

      <div
        className="flex flex-wrap justify-center gap-x-2 text-lg"
        style={{ fontFamily: "Product Sans, sans-serif", color: "#b4adad" }}
      >
        <a href="https://tcil.com/tci-iimb-supply-chain/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors hover:underline">IIM Bangalore</a>
        <span>,</span>
        <a href="https://www.grapevine.in/home" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors hover:underline">Grapevine</a>
        <span>,</span>
        <a href="https://www.instagram.com/dancewithaara/reels/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors hover:underline">Dance with AARA</a>
        <span>,</span>
        <a href="https://www.instagram.com/aceexperiences.in/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors hover:underline">Ace Experiences</a>
        <span>& More!</span>
      </div>

      <h1
        className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-normal text-center py-8 tracking-widest justi"
        style={{ fontFamily: "Product Sans, sans-serif", color: "#000000" }}
      >
        [MY WORK]
      </h1>

      {/* Example Horizontal Cards */}
      <div className="w-full space-y-8 my-12">
        {homeCards.map((card, index) => (
          <HorizontalCard
            key={index}
            image={card.image}
            video={card.hoverVideo}
            mainHeading={card.mainHeading}
            category={card.category}
            description={card.description}
            slug={card.slug}
          />
        ))}
      </div>

      {/* Link to Work Page */}
      <div className="text-center mb-16">
          <Link
            href="/work"
            className="relative overflow-hidden px-4 py-1 rounded-full font-medium transition-all duration-300 ease-in-out bg-[#1b1919] text-white hover:bg-[#f4c2be] hover:text-[#1b1919] active:scale-95 inline-block group"
            style={{ fontFamily: "Product Sans, sans-serif" }}
          >
            <div className="relative h-auto flex items-center justify-center overflow-hidden">
              <span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                VIEW ALL WORK
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                VIEW ALL WORK
              </span>
            </div>
          </Link>
        </div>
            <WhatIAmGoodAt />

      {/* Link to About Page */}
      <div className="text-center mt-16 mb-8">
        <Link
          href="/about"
          className="relative overflow-hidden px-4 py-1 rounded-full font-medium transition-all duration-300 ease-in-out bg-[#1b1919] text-white hover:bg-[#f4c2be] hover:text-[#1b1919] active:scale-95 inline-block group"
          style={{ fontFamily: "Product Sans, sans-serif" }}
        >
          <div className="relative h-auto flex items-center justify-center overflow-hidden">
            <span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              LEARN MORE ABOUT ME
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
              LEARN MORE ABOUT ME
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
