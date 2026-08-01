"use client";

import { usePathname } from "next/navigation";
import { usePageTransition } from "./PageTransition";

const Navbar = () => {
  const pathname = usePathname();
  const navigate = usePageTransition();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  const isCurrentPage = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 p-2 sm:p-4 bg-transparent z-10">
      <div className="flex gap-1 sm:gap-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`
              relative overflow-hidden px-2.5 py-1 sm:px-4 sm:py-1 rounded-full font-medium
              text-xs sm:text-base
              transition-all duration-300 ease-in-out
              transform group
              ${
                isCurrentPage(item.path)
                  ? "bg-[#f4c2be] text-[#1b1919] shadow-lg"
                  : "bg-[#1b1919] text-white hover:bg-[#f4c2be] hover:text-[#1b1919]"
              }
              active:scale-95
            `}
          >
            <div className="relative h-auto flex items-center justify-center overflow-hidden">
              <span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                {item.name.toUpperCase()}
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                {item.name.toUpperCase()}
              </span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;