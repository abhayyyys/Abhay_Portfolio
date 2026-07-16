import React from "react";
import localFont from "next/font/local";

const hanson = localFont({
  src: "../../public/hanson-bold/Hanson-Bold.ttf", // Adjust path as needed
  variable: "--font-hanson",
  fallback: ["Arial", "sans-serif"],
});

export default function Footer() {
  return (
    <footer className="bg-[#EDF1F0] pb-4 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {" "}
        {/* Large CONTACT text with shadow effect */}
        <h2
          className={`text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-bold text-white mb-8 select-none ${hanson.variable} font-hanson`}
          style={{
            textShadow: "2px 2px 0px #d1d5db, 4px 4px 0px #9ca3af",
            WebkitTextStroke: "2px #d1d5db",
          }}
        >
          CONTACT
        </h2>
        {/* Contact Information */}
        <div className="space-y-2">
          <div className="text-black text-lg font-medium">
            <a
              href="mailto:abhaysingh.mov@gmail.com"
              className="hover:text-gray-600 transition-colors duration-200"
            >
              abhaysingh.mov@gmail.com
            </a>
          </div>

          <div className="text-black text-lg font-medium">
            <a
              href="https://www.instagram.com/abhayyyysingh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors duration-200"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
