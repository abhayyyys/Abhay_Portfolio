"use client";

const R2 = "https://videos.abhaysingh.space";

export default function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#1b1919" }}>
      {/* Background video — same clip as the About page, dimmed low so the
          buttons stay the focus. Fixed so it fills the viewport regardless
          of scroll (this page has no scroll content of its own). */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <video
          className="w-full h-full object-cover"
          style={{ opacity: 0.12 }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={`${R2}/videos/about_bg.mp4`} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 sm:px-6">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-4"
          style={{ fontFamily: "Product Sans, sans-serif" }}
        >
          Let&apos;s Talk
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full max-w-2xl">
          {/* Mail button */}
          <a
            href="mailto:abhaysingh.mov@gmail.com"
            className="group flex-1 flex flex-col items-center justify-center gap-4 rounded-3xl px-8 py-12 sm:py-16 transition-all duration-300 ease-out"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              boxShadow: "0 15px 30px -8px rgba(0,0,0,0.5), 0 25px 50px -12px rgba(0,0,0,0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.04)";
              e.currentTarget.style.boxShadow = "0 25px 45px -8px rgba(0,0,0,0.6), 0 35px 65px -12px rgba(0,0,0,0.6)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.14)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 30px -8px rgba(0,0,0,0.5), 0 25px 50px -12px rgba(0,0,0,0.5)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-xl sm:text-2xl font-semibold text-white" style={{ fontFamily: "Product Sans, sans-serif" }}>
              Mail
            </span>
            <span className="text-sm text-white/60 text-center break-all">
              abhaysingh.mov@gmail.com
            </span>
          </a>

          {/* Instagram button */}
          <a
            href="https://instagram.com/abhayyyysingh"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex flex-col items-center justify-center gap-4 rounded-3xl px-8 py-12 sm:py-16 transition-all duration-300 ease-out"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              boxShadow: "0 15px 30px -8px rgba(0,0,0,0.5), 0 25px 50px -12px rgba(0,0,0,0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.04)";
              e.currentTarget.style.boxShadow = "0 25px 45px -8px rgba(0,0,0,0.6), 0 35px 65px -12px rgba(0,0,0,0.6)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.14)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 30px -8px rgba(0,0,0,0.5), 0 25px 50px -12px rgba(0,0,0,0.5)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span className="text-xl sm:text-2xl font-semibold text-white" style={{ fontFamily: "Product Sans, sans-serif" }}>
              Instagram
            </span>
            <span className="text-sm text-white/60 text-center">
              @abhayyyysingh
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}