"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <div style={{ position: "relative", zIndex: 2, backgroundColor: "#EDF1F0" }}>
      <Footer />
    </div>
  );
}