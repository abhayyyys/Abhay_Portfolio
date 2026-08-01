"use client";

const R2 = "https://videos.abhaysingh.space";

export default function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#EDF1F0" }}>
      {/* Background video — same clip as the About page. Low opacity and a
          white wash on top (instead of a dark tint) so the page reads as
          bright/airy like the rest of the light-mode pages, not dark. */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <video
          className="w-full h-full object-cover"
          style={{ opacity: 0.18 }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={`${R2}/videos/about_bg.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(237, 241, 240, 0.55)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 sm:px-6">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4"
          style={{ fontFamily: "Product Sans, sans-serif", color: "#1b1919" }}
        >
          Let&apos;s Talk
        </h1>

        <div className="flex flex-row gap-4 sm:gap-8 w-full max-w-3xl">
          {/* Mail button */}
          <a
            href="mailto:abhaysingh.mov@gmail.com"
            className="group flex-1 flex flex-col items-center justify-center gap-3 sm:gap-4 rounded-3xl p-6 sm:p-10"
            style={{
              aspectRatio: "1/1",
              maxWidth: "320px",
              background: "rgba(255, 255, 255, 0.35)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.04)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.35)";
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1b1919" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-lg sm:text-2xl font-semibold text-center" style={{ fontFamily: "Product Sans, sans-serif", color: "#1b1919" }}>
              Mail
            </span>
            <span className="text-xs sm:text-sm text-center break-all" style={{ color: "rgba(27, 25, 25, 0.6)" }}>
              abhaysingh.mov
              @gmail.com
            </span>
          </a>

          {/* Instagram button */}
          <a
            href="https://instagram.com/abhayyyysingh"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex flex-col items-center justify-center gap-3 sm:gap-4 rounded-3xl p-6 sm:p-10"
            style={{
              aspectRatio: "1/1",
              maxWidth: "320px",
              background: "rgba(255, 255, 255, 0.35)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.04)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.35)";
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1b1919" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span className="text-lg sm:text-2xl font-semibold text-center" style={{ fontFamily: "Product Sans, sans-serif", color: "#1b1919" }}>
              Instagram
            </span>
            <span className="text-xs sm:text-sm text-center" style={{ color: "rgba(27, 25, 25, 0.6)" }}>
              @abhayyyysingh
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}