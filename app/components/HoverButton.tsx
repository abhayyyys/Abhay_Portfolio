"use client";
import React from "react";

import Link from "next/link";

const HoverButton = () => {
  //   const [isvisible, setIsVisible] = useState(0);
  //   React.useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       setIsVisible(50);
  //     }, 2800);
  //     return () => clearTimeout(timeout);
  //   }, []);
  return (
    <div className={`fixed top-3 right-3 hidden lg:flex z-50`}>
      <Link
        href="https://drive.google.com/drive/u/0/folders/1pQ4M-jdoONU7NoQ6LMO391lMojehHFFr"
        className={`flex hover:scale-110 h-10 w-fit backdrop-blur-md bg-white/70 justify-center gap-2 items-center text-xs text-[#000000] px-4 py-2 rounded-full transition-transform duration-300 ease-in-out `}
      >
        <div className="flex">DRIVE LINK TO MOST OF MY WORK</div>
        <img src="/arrow.svg" alt="->" className="h-3 w-3"></img>
      </Link>
    </div>
  );
};

export default HoverButton;
