import React from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export default function Footer() {
  return (
    <footer className="bg-[#EDF1F0] pt-8 pb-6 px-4 overflow-hidden">
      <div className="w-full text-center">
        {/* Full-width black wordmark */}
        <h2
          className={`text-black leading-none select-none whitespace-nowrap ${anton.variable} font-anton`}
          style={{
            fontSize: "clamp(3.5rem, 14vw, 14rem)",
            letterSpacing: "-0.02em",
          }}
        >
          CONTACT
        </h2>

        {/* Contact Information */}
        <div className="space-y-2 mt-6">
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