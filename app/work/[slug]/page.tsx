"use client";

import { notFound, useRouter } from "next/navigation";
import { getProjectBySlug, getAdjacentProjects, ProjectVideo } from "../../data/projects";
import { use, useRef, useState, useEffect, type RefObject } from "react";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

function safePlay(v: HTMLVideoElement | null) {
  if (!v) return;
  const p = v.play();
  if (p !== undefined) p.catch(() => {});
}

function ScrubBar({ videoRef, visible }: { videoRef: RefObject<HTMLVideoElement | null>; visible: boolean }) {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => { if (!dragging) setProgress(v.currentTime); };
    const onMeta = () => setDuration(v.duration || 0);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    if (v.duration) setDuration(v.duration);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
    };
  }, [videoRef, visible, dragging]);

  if (!visible || !duration) return null;

  const pct = duration ? (progress / duration) * 1000 : 0;

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const newTime = (Number(e.target.value) / 1000) * duration;
    v.currentTime = newTime;
    setProgress(newTime);
  };

  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-3 pt-8"
      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="range"
        min={0}
        max={1000}
        step={1}
        value={pct}
        onMouseDown={() => setDragging(true)}
        onMouseUp={() => setDragging(false)}
        onTouchStart={() => setDragging(true)}
        onTouchEnd={() => setDragging(false)}
        onChange={handleSeek}
        className="w-full"
        style={{ accentColor: "#f97316", height: "4px", cursor: "pointer" }}
      />
    </div>
  );
}

function MainVideoBlock({ video, onPlay, onClose, isActive }: { video: ProjectVideo; onPlay: () => void; onClose: () => void; isActive: boolean }) {
  const bgRef = useRef<HTMLVideoElement>(null);
  const playRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // When this block becomes inactive (another video was clicked elsewhere
  // on the page), pause wherever it is. If it had actually been playing
  // (the playVideoSrc), reset it to frame 0; the idle looping bg video
  // just pauses since it was never "played" in the click-to-play sense.
  useEffect(() => {
    if (!isActive) {
      if (playing && playRef.current) {
        playRef.current.pause();
        playRef.current.currentTime = 0;
        setPlaying(false);
      } else {
        bgRef.current?.pause();
      }
    } else if (!playing) {
      safePlay(bgRef.current);
    }
  }, [isActive, playing]);

  const handlePlay = () => {
    setPlaying(true);
    onPlay();
    bgRef.current?.pause();
    setTimeout(() => { safePlay(playRef.current); }, 50);
  };

  const handleClose = () => {
    if (playRef.current) { playRef.current.pause(); playRef.current.currentTime = 0; }
    safePlay(bgRef.current);
    setPlaying(false);
    onClose();
  };

  // Clicking anywhere on the card now starts playback if not already
  // playing; once playing, clicking toggles play/pause on the active video.
  const handleVideoClick = () => {
    if (!playing) { handlePlay(); return; }
    const v = playRef.current;
    if (!v) return;
    if (v.paused) safePlay(v);
    else v.pause();
  };

  return (
    <div className="relative overflow-hidden rounded-2xl flex-1 min-w-0 cursor-pointer" style={{ aspectRatio: "16/9" }} onClick={handleVideoClick}>
      <video ref={bgRef} className="absolute inset-0 w-full h-full object-cover" loop muted autoPlay playsInline preload="auto" style={{ opacity: playing ? 0 : 1 }}>
        <source src={video.src} type="video/mp4" />
      </video>
      {video.playVideoSrc && (
        <video ref={playRef} className="absolute inset-0 w-full h-full object-cover" loop playsInline preload="metadata" style={{ opacity: playing ? 1 : 0 }}>
          <source src={video.playVideoSrc} type="video/mp4" />
        </video>
      )}
      <div className="absolute top-4 left-4 z-10" onClick={(e) => e.stopPropagation()}>
        {!playing ? (
          <button onClick={handlePlay} className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors duration-200">
            {video.playVideoSrc ? "PLAY VIDEO" : "PLAY"}
          </button>
        ) : (
          <button onClick={handleClose} className="bg-white/20 hover:bg-white/30 text-white font-bold px-5 py-2 rounded-full text-sm backdrop-blur-sm transition-colors duration-200">CLOSE</button>
        )}
      </div>
      {video.externalLink && (
        <div className="absolute top-4 right-4 z-10" onClick={(e) => e.stopPropagation()}>
          <Link href={video.externalLink} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:border-orange-500 hover:text-orange-500 font-bold px-5 py-2 rounded-full text-sm transition-colors duration-200 inline-block bg-black/20 backdrop-blur-sm">
            {video.externalLabel || "VIEW"}
          </Link>
        </div>
      )}
      <ScrubBar videoRef={playing ? playRef : bgRef} visible={playing} />
    </div>
  );
}

function SecondaryVideoBlock({ video, onPlay, isActive }: { video: ProjectVideo; onPlay: () => void; onClose: () => void; isActive: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // NOTE: muted is intentionally NOT set as a static JSX prop here.
  // When `muted` is hardcoded in JSX, React re-asserts it as a controlled
  // attribute on every re-render (e.g. whenever `playing` changes), which
  // silently fights any imperative `el.muted = false` set in event handlers
  // and the unmute never sticks. Instead we set `.muted` imperatively via a
  // ref/effect below, fully in sync with React state, so it actually holds.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = !playing;
  }, [playing]);

  // Reset-to-frame-0 on deactivation, same pattern as MainVideoBlock.
  useEffect(() => {
    if (!isActive) {
      if (playing && ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
        setPlaying(false);
      } else {
        ref.current?.pause();
      }
    } else if (!playing) {
      safePlay(ref.current);
    }
  }, [isActive, playing]);

  const startPlaying = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    v.currentTime = 0;
    safePlay(v);
    setPlaying(true);
    onPlay();
  };

  const handleVideoClick = () => {
    const v = ref.current;
    if (!v) return;
    if (!playing) { startPlaying(); return; }
    if (v.paused) safePlay(v);
    else v.pause();
  };

  return (
    <div className="relative overflow-hidden rounded-2xl cursor-pointer flex-1 min-w-0" style={{ aspectRatio: "16/9" }} onClick={handleVideoClick}>
      <video ref={ref} className="absolute inset-0 w-full h-full object-cover" loop autoPlay playsInline preload="auto">
        <source src={video.src} type="video/mp4" />
      </video>
      {!playing ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-bold">PLAY</div>
        </div>
      ) : (
        <div className="absolute top-3 left-3">
          <div className="bg-orange-500 rounded-full px-3 py-1 text-white text-xs font-bold">PLAYING</div>
        </div>
      )}
      <ScrubBar videoRef={ref} visible={playing} />
    </div>
  );
}

function ReelBlock({ video, onPlay, onClose, isActive }: { video: ProjectVideo; onPlay: () => void; onClose: () => void; isActive: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Same fix as SecondaryVideoBlock: keep `muted` driven imperatively/by
  // effect instead of a static JSX prop, so the unmute-on-play sticks.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = !playing;
  }, [playing]);

  // Reset-to-frame-0 on deactivation.
  useEffect(() => {
    if (!isActive) {
      if (playing && ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
        setPlaying(false);
      } else {
        ref.current?.pause();
      }
    } else if (!playing) {
      safePlay(ref.current);
    }
  }, [isActive, playing]);

  const handleClick = () => {
    const v = ref.current;
    if (!v) return;
    if (playing) {
      v.muted = true; v.currentTime = 0; setPlaying(false); onClose();
    } else {
      v.muted = false; v.currentTime = 0; safePlay(v); setPlaying(true); onPlay();
    }
  };

  return (
    // Click anywhere on the card now plays/toggles; the button is kept
    // purely as a visual label and forwards to the same handler.
    <div className="relative overflow-hidden rounded-2xl w-full h-full cursor-pointer" onClick={handleClick}>
      <video ref={ref} className="absolute inset-0 w-full h-full object-cover" loop autoPlay playsInline preload="auto">
        <source src={video.src} type="video/mp4" />
      </video>
      <div className="absolute top-3 left-3 z-10">
        <button
          onClick={(e) => { e.stopPropagation(); handleClick(); }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-3 py-1 rounded-full text-xs transition-colors duration-200"
        >
          {playing ? "CLOSE" : "PLAY"}
        </button>
      </div>
      {video.externalLink && (
        <div className="absolute top-3 right-3 z-10" onClick={(e) => e.stopPropagation()}>
          <Link href={video.externalLink} target="_blank" rel="noopener noreferrer" className="border border-white text-white hover:border-orange-500 hover:text-orange-500 font-bold px-3 py-1 rounded-full text-xs transition-colors duration-200 inline-block bg-black/20 backdrop-blur-sm">
            {video.externalLabel || "VIEW"}
          </Link>
        </div>
      )}
    </div>
  );
}

// activeId / setActiveId are now passed down from ProjectPage so that ALL
// video blocks on the page (main + secondary + reels, across BOTH the
// generic section AND the IIMB special-layout section) share one source
// of truth for "which video is currently playing". This is what fixes
// IIMB not pausing/coordinating with the rest of the page.
function GenericVideoSection({
  projectVideos,
  playlistLink,
  activeId,
  setActiveId,
}: {
  projectVideos: ProjectVideo[];
  playlistLink?: string;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}) {
  const mainVideos = projectVideos.filter(v => v.type === "main" || v.type === "secondary");
  const reels = projectVideos.filter(v => v.type === "reel");

  return (
    <div className="flex flex-col gap-6">
      {mainVideos.length > 0 && (
        <div className="flex gap-4">
          {mainVideos.map((v, i) => {
            const id = `main-${i}`;
            if (v.type === "main") {
              return <MainVideoBlock key={id} video={v} isActive={activeId === null || activeId === id} onPlay={() => setActiveId(id)} onClose={() => setActiveId(null)} />;
            }
            return <SecondaryVideoBlock key={id} video={v} isActive={activeId === null || activeId === id} onPlay={() => setActiveId(id)} onClose={() => setActiveId(null)} />;
          })}
        </div>
      )}

      {reels.length > 0 && (
        <div
          className="grid gap-4 justify-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 225px))",
          }}
        >
          {reels.map((reel, i) => {
            const id = `reel-${i}`;
            return (
              <div key={id} style={{ aspectRatio: "9/16" }}>
                <ReelBlock video={reel} isActive={activeId === null || activeId === id} onPlay={() => setActiveId(id)} onClose={() => setActiveId(null)} />
              </div>
            );
          })}
          {playlistLink && (
            <div style={{ aspectRatio: "9/16" }} className="flex items-center justify-center rounded-2xl border-2 border-white/20 hover:border-orange-500 transition-colors cursor-pointer">
              <Link href={playlistLink} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-orange-500 text-xl font-bold text-center transition-colors px-4">& MORE</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function IIMBVideoSection({
  projectVideos,
  activeId,
  setActiveId,
}: {
  projectVideos: ProjectVideo[];
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}) {
  const mainVideo = projectVideos.find(v => v.type === "main");
  const secondaryVideo = projectVideos.find(v => v.type === "secondary");
  const reelVideo = projectVideos.find(v => v.type === "reel");

  const ROW_HEIGHT = 380;
  const REEL_WIDTH = Math.round(ROW_HEIGHT * 9 / 16);

  const reelRef = useRef<HTMLVideoElement>(null);
  const [reelPlaying, setReelPlaying] = useState(false);

  // Same muted-attribute fix as ReelBlock/SecondaryVideoBlock: drive
  // `.muted` via effect instead of a static JSX prop so unmuting sticks.
  useEffect(() => {
    const v = reelRef.current;
    if (!v) return;
    v.muted = !reelPlaying;
  }, [reelPlaying]);

  // Reset-to-frame-0 on deactivation, same pattern as everywhere else.
  useEffect(() => {
    if (activeId !== "reel") {
      if (reelPlaying && reelRef.current) {
        reelRef.current.pause();
        reelRef.current.currentTime = 0;
        setReelPlaying(false);
      } else {
        reelRef.current?.pause();
      }
    } else if (!reelPlaying) {
      safePlay(reelRef.current);
    }
  }, [activeId, reelPlaying]);

  const handleReelClick = () => {
    const v = reelRef.current;
    if (!v) return;
    if (reelPlaying) {
      v.muted = true; v.currentTime = 0; setReelPlaying(false); setActiveId(null);
    } else {
      v.muted = false; v.currentTime = 0; safePlay(v);
      setReelPlaying(true); setActiveId("reel");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {mainVideo && (
        <MainVideoBlock video={mainVideo} isActive={activeId === null || activeId === "main"} onPlay={() => setActiveId("main")} onClose={() => setActiveId(null)} />
      )}
      {(secondaryVideo || reelVideo) && (
        <div className="flex gap-4" style={{ height: `${ROW_HEIGHT}px` }}>
          {secondaryVideo && (
            <SecondaryVideoBlock video={secondaryVideo} isActive={activeId === null || activeId === "sec"} onPlay={() => setActiveId("sec")} onClose={() => setActiveId(null)} />
          )}
          {reelVideo && (
            <div className="relative overflow-hidden rounded-2xl cursor-pointer flex-shrink-0" style={{ width: `${REEL_WIDTH}px` }} onClick={handleReelClick}>
              <video ref={reelRef} className="absolute inset-0 w-full h-full object-cover" loop autoPlay playsInline preload="auto">
                <source src={reelVideo.src} type="video/mp4" />
              </video>
              {!reelPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 text-white text-sm font-bold">PLAY</div>
                </div>
              ) : (
                <div className="absolute top-3 left-3"><div className="bg-orange-500 rounded-full px-2 py-1 text-white text-xs font-bold">CLOSE</div></div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);
  const router = useRouter();

  // Single source of truth for which video block is "active" (playing),
  // shared across the whole page — including between the IIMB special
  // layout and the generic layout — so clicking any video anywhere pauses
  // (and resets) whatever else was playing.
  const [activeId, setActiveId] = useState<string | null>(null);

  // Card-stack transition: "exiting" plays when an arrow is clicked (the
  // current project slides off at an angle, like a card being lifted away),
  // then we navigate. "entering" is true for one tick on mount so every
  // fresh project page rises up and settles into place, like the next
  // card in the stack being revealed underneath.
  const [exiting, setExiting] = useState<"prev" | "next" | null>(null);
  const [entering, setEntering] = useState(true);
  const TRANSITION_MS = 420;

  useEffect(() => {
    // Flip off entering on the next frame so the browser paints the
    // "lifted" starting position first, then transitions to settled.
    const raf = requestAnimationFrame(() => setEntering(false));
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleNavigate = (direction: "prev" | "next", href: string) => {
    if (exiting) return; // ignore extra clicks mid-transition
    setExiting(direction);
    setTimeout(() => {
      router.push(href);
    }, TRANSITION_MS);
  };

  // Compute the current transform/opacity for the card-stack effect.
  let cardTransform = "translateY(0px) translateX(0px) rotate(0deg) scale(1)";
  let cardOpacity = 1;
  if (exiting === "prev") {
    cardTransform = "translateY(-10px) translateX(60px) rotate(6deg) scale(0.98)";
    cardOpacity = 0;
  } else if (exiting === "next") {
    cardTransform = "translateY(-10px) translateX(-60px) rotate(-6deg) scale(0.98)";
    cardOpacity = 0;
  } else if (entering) {
    cardTransform = "translateY(28px) scale(0.97)";
    cardOpacity = 0;
  }

  return (
    <>
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#EDF1F0",
        transform: cardTransform,
        opacity: cardOpacity,
        transformOrigin: "top center",
        transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${Math.round(TRANSITION_MS * 0.8)}ms ease`,
        boxShadow: exiting ? "0 30px 60px -15px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <section className="pt-32 px-4 sm:px-6 lg:px-12 pb-16" style={{ backgroundColor: "#1b1919" }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-left mb-16 leading-tight text-white" style={{ fontFamily: "Product Sans, sans-serif" }}>
            {project.mainHeading}
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 pt-12">
            <div className="flex flex-col gap-6 lg:w-1/3">
              <div><h3 className="text-sm font-semibold text-orange-500 mb-1 tracking-widest">[CATEGORY]</h3><p className="text-xl font-medium text-white">{project.category}</p></div>
              <div><h3 className="text-sm font-semibold text-orange-500 mb-1 tracking-widest">[YEAR]</h3><p className="text-xl font-medium text-white">{project.year}</p></div>
              <div><h3 className="text-sm font-semibold text-orange-500 mb-1 tracking-widest">[CLIENT]</h3><p className="text-xl font-medium text-white">{project.client}</p></div>
              {project.tools && <div><h3 className="text-sm font-semibold text-orange-500 mb-1 tracking-widest">[TOOLS]</h3><p className="text-xl font-medium text-white">{project.tools}</p></div>}
            </div>
            <div className="lg:w-2/3">
              <p className="text-xl sm:text-2xl leading-relaxed text-white/80" dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
            </div>
          </div>
        </div>
      </section>

      {project.projectVideos && project.projectVideos.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-12 py-12" style={{ backgroundColor: "#1b1919" }}>
          <div className="max-w-7xl mx-auto">
            {slug === "iim-bangalore" ? (
              <IIMBVideoSection projectVideos={project.projectVideos} activeId={activeId} setActiveId={setActiveId} />
            ) : (
              <GenericVideoSection projectVideos={project.projectVideos} playlistLink={project.playlistLink} activeId={activeId} setActiveId={setActiveId} />
            )}
          </div>
        </section>
      )}
    </div>

      {/* Prev/Next navigation — fixed glass circular arrows, vertically
          centered on the viewport edges. Left goes to the previous project,
          right goes to the next, wrapping around at both ends of the list.
          Dark-tinted glass with white arrows so contrast holds whether
          this sits over the dark hero section or the light body section
          while scrolling. Rendered OUTSIDE the animated card div — a
          `transform` on an ancestor turns `position: fixed` descendants
          into being fixed relative to that ancestor instead of the
          viewport, which is what made these appear stuck mid-page. */}
      <button
        onClick={() => handleNavigate("prev", `/work/${prev.slug}`)}
        disabled={!!exiting}
        aria-label={`Previous project: ${prev.mainHeading}`}
        className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-black/25 hover:bg-black/40 backdrop-blur-md border border-white/25 shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-default disabled:hover:scale-100"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={() => handleNavigate("next", `/work/${next.slug}`)}
        disabled={!!exiting}
        aria-label={`Next project: ${next.mainHeading}`}
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-black/25 hover:bg-black/40 backdrop-blur-md border border-white/25 shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-default disabled:hover:scale-100"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </>
  );
}