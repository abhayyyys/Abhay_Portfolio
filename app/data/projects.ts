export interface Video {
  src: string;
  orientation: 'horizontal' | 'vertical';
  title?: string;
}

export interface ProjectVideo {
  src: string;
  type: 'main' | 'secondary' | 'reel';
  playVideoSrc?: string;
  externalLink?: string;
  externalLabel?: string;
}

export interface Project {
  slug: string;
  image: string;
  hoverVideo?: string;
  mainHeading: string;
  category: string;
  description: string;
  fullDescription: string;
  year: string;
  client: string;
  tools: string;
  role: string;
  youtubeLink?: string;
  playlistLink?: string;
  projectVideos?: ProjectVideo[];
  videos: Video[];
}

export const homeCards = [
  {
    slug: " ",
    image: `https://img.youtube.com/vi/v5kSvkV980Y/maxresdefault.jpg`,
    hoverVideo: "/videos/Home/home_work_1.mp4",
    mainHeading: "PRODUCT VIDEOS & PITCH DECKS",
    category: "Visual Strategy",
    description: "Translating brand vision into compelling visual narratives. Product films, pitch decks, and motion design that simplify complex ideas and drive action.",
  },
  {
    slug: " ",
    image: `https://img.youtube.com/vi/djlpAjYrhOc/maxresdefault.jpg`,
    hoverVideo: "/videos/Home/home_work_2.mp4",
    mainHeading: "SHORT FORM MEDIA",
    category: "Social",
    description: "Curating distinct visual styles and story formats for brands. Reels averaging 30K views, with one intro reel crossing 580K views.",
  },
  {
    slug: " ",
    image: `https://img.youtube.com/vi/imc7IEbWkzw/maxresdefault.jpg`,
    hoverVideo: "/videos/Home/home_work_3.mp4",
    mainHeading: "PERSONAL PROJECTS",
    category: "Craft",
    description: "Exploring storytelling through rhythm, mood, and design. Using the edit itself as a narrative tool, building a cohesive visual language.",
  },
];

export const projects: Project[] = [
  {
    slug: "iim-bangalore",
    image: "/thumbnails/IIMB Preview.jpg",
    hoverVideo: "/videos/Previews/IIMB/work%20iimb.mp4",
    mainHeading: "MEASURING CHANGE",
    category: "Product Video",
    description: "A product film simplifying complex sustainability data through clean visual storytelling. Highlighting rising carbon emissions and TEMT's role in helping businesses track and manage their footprint.",
    fullDescription: `For the launch of IIM Bangalore's Transportation Emissions Measurement Tool (TEMT), I crafted a product film designed to simplify complex sustainability data through clean, visual storytelling. A concise narrative highlighting the rising carbon emission and TEMT's role in transforming how businesses track and manage their carbon footprint, helping drive awareness and adoption across the industry and bring change in the near future. The video is live on <a href="https://youtu.be/4m5lA2u3V8I?si=2mWIOITUgivI7-HE" target="_blank" class="text-orange-500 hover:underline">TCIL's youtube channel</a>, garnering around 10K views.`,
    year: "2024",
    client: "IIMB",
    tools: "AE, DaVinci Resolve, Canva & Figma",
    role: "Producer & Editor",
    youtubeLink: "https://youtu.be/rW3h6MNcWDk",
    playlistLink: "https://www.youtube.com/watch?v=c4XZXMX2tZY&list=PLxOqVdcuLwsutXUX0YHq7oy23o84RIgft",
    projectVideos: [
      {
        src: "/videos/Previews/IIMB/90-final%20Preview.mp4",
        type: "main",
        playVideoSrc: "/videos/Work%20Vids/IIMB/90-final.mp4",
        externalLink: "https://www.youtube.com/watch?v=c4XZXMX2tZY&list=PLxOqVdcuLwsutXUX0YHq7oy23o84RIgft",
        externalLabel: "VIEW ON YOUTUBE"
      },
      {
        src: "/videos/Work%20Vids/IIMB/intro-1.mp4",
        type: "secondary"
      },
      {
        src: "/videos/Work%20Vids/IIMB/45-final.mp4",
        type: "reel"
      },
    ],
    videos: [],
  },
  {
    slug: "iiad-pitches",
    image: "/thumbnails/Pitches Preview.jpg",
    hoverVideo: "/videos/Previews/Pitches/work%20pitches.mp4",
    mainHeading: "IDEAS IN MOTION",
    category: "Pitch Decks",
    description: "Designed pitch decks that translated founder visions into impactful visual narratives. AAVYA Concepts embraced a Bollywood-inspired cinematic style, while The Lemon Agency leaned into a modern postmodern aesthetic.",
    fullDescription: `Working with IIAD alumni founders, I designed two distinct pitch decks that translated each brand's essence into visual form. AAVYA Concepts & Creations leaned into a cinematic Bollywood-inspired style with rich tones, ornate frames, and a romantic visual rhythm. In contrast, The Lemon Agency's deck followed a postmodern aesthetic with clean layouts, rounded sans-serif fonts, and modern display typefaces aligned with their bold contemporary brand consultancy. Both decks were tailored to communicate vision with clarity and design confidence, and amplified each startup's story with the right design and vibe, helping them stand out and win prizes before the jury.`,
    year: "2024",
    client: "AAVYA Inc., The Lemon Agency",
    tools: "DaVinci Resolve",
    role: "Designer & Editor",
    youtubeLink: "https://youtu.be/4k5bq6Vxx_o?si=c_xu-zm1Q8qUEzbU",
    playlistLink: "https://www.youtube.com/watch?v=9YFOsqwwdNk&list=PLxOqVdcuLwssRZB1tD-6IBCozo_-GZuJ3",
    projectVideos: [
      {
        src: "/videos/Previews/Pitches/aavya%20preview.mp4",
        type: "main",
        playVideoSrc: "/videos/Work%20Vids/Pitches/Aavya%20Pitch%20Deck.mp4",
        externalLink: "https://www.youtube.com/watch?v=9YFOsqwwdNk&list=PLxOqVdcuLwssRZB1tD-6IBCozo_-GZuJ3",
        externalLabel: "VIEW ON YOUTUBE"
      },
      {
        src: "/videos/Previews/Pitches/tla%20preview.mp4",
        type: "main",
        playVideoSrc: "/videos/Work%20Vids/Pitches/TLA%20Pitch.mp4",
      },
      {
        src: "/videos/Work%20Vids/Pitches/Aavya%20Reel.mp4",
        type: "reel",
        externalLink: "https://www.instagram.com/p/DE7cfFiv7eB/",
        externalLabel: "INSTAGRAM"
      },
      {
        src: "/videos/Work%20Vids/Pitches/Lemon%20Reel.mp4",
        type: "reel",
        externalLink: "https://www.instagram.com/p/DFNLU0MzI_z/",
        externalLabel: "INSTAGRAM"
      },
    ],
    videos: [],
  },
  {
    slug: "grapevine",
    image: "/thumbnails/work grapevine.jpg",
    hoverVideo: "/videos/Previews/grapevine/work%20grapevine.mp4",
    mainHeading: "GRAPEVINE",
    category: "UGC & Social Media",
    description: "Created 15 UGC reels showcasing Grapevine's products alongside teasers and trailers for new product launches, building authentic engagement and brand presence.",
    fullDescription: `For Grapevine, I wore multiple hats as both a UGC creator and a video producer. I created 15 short-form reels highlighting their products from an authentic, creator-first perspective, crafting content that felt native to social platforms while clearly communicating product value. Beyond UGC, I also produced teasers and trailers for their new product launches, building anticipation and excitement ahead of each drop. The combination of organic UGC content and polished launch videos helped Grapevine build a consistent and engaging digital presence across platforms.`,
    year: "2024",
    client: "Grapevine",
    tools: "DaVinci Resolve, Instagram Reels",
    role: "UGC Creator & Video Producer",
    youtubeLink: "",
    playlistLink: "",
    projectVideos: [
      {
        src: "/videos/Previews/grapevine/grapevine%20teaser%20preview.mp4",
        type: "main",
        playVideoSrc: "/videos/Work%20Vids/Grapevine/grapevine%20teaser.mp4",
      },
      {
        src: "/videos/Work%20Vids/Grapevine/30.mp4",
        type: "main",
        playVideoSrc: "/videos/Work%20Vids/Grapevine/30.mp4",
      },
      {
        src: "/videos/Work%20Vids/Grapevine/Reddy.mp4",
        type: "main",
        playVideoSrc: "/videos/Work%20Vids/Grapevine/Reddy.mp4",
      },
      {
        src: "/videos/Work%20Vids/Grapevine/28%20final.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/Grapevine/time%20freeze%20final.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/Grapevine/29.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/Grapevine/stuck%20n2.mp4",
        type: "reel",
      },
    ],
    videos: [],
  },
  {
    slug: "tedx-snu",
    image: "/thumbnails/ted preview.jpg",
    hoverVideo: "/videos/Previews/Ted/ted%20preview.mp4",
    mainHeading: "THROUGH THE LOOKING GLASS",
    category: "Club Work",
    description: "Led videography for TEDx Shiv Nadar University 2024 to 2025, curating the Instagram feed and capturing the entire conference through cinematic reels, interviews, and announcement videos reaching over 493K views.",
    fullDescription: `As the Videography Lead for TEDx Shiv Nadar University, I shaped the visual identity of the 2024 to 2025 edition. Our theme, Through the Looking Glass, came to life through a reveal video I directed and edited, alongside countless reels designed to invite and announce speakers in collaboration with their own social platforms. I produced announcement videos for flagship events like Time Capsule, and also documented the entire TED conference, filming and editing both highlight coverage and one-on-one interviews with all the speakers. Altogether, the body of work I created drove around 493K views on TED's Instagram page, amplifying both reach and impact.`,
    year: "2025",
    client: "TEDx Shiv Nadar University",
    tools: "DaVinci Resolve",
    role: "Videography Lead",
    youtubeLink: "https://www.youtube.com/playlist?list=PLxOqVdcuLwsscJm-0rAKqGEOW7b2Nyk1N",
    playlistLink: "https://www.youtube.com/playlist?list=PLxOqVdcuLwsscJm-0rAKqGEOW7b2Nyk1N",
    projectVideos: [
      {
        src: "/videos/Previews/Ted/Ted%20time%20capsule%20Preview.mp4",
        type: "main",
        playVideoSrc: "/videos/Work%20Vids/Ted/TED%20time%20capsule.mp4",
      },
      {
        src: "/videos/Previews/Ted/Through%20The%20Looking%20Glass%20Preview.mp4",
        type: "main",
        playVideoSrc: "/videos/Work%20Vids/Ted/Through%20The%20Looking%20Glass.mp4",
      },
      {
        src: "/videos/Work%20Vids/Ted/cinematic.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/Ted/Rec%20Reel.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/Ted/Speaker%20Reveal.mp4",
        type: "reel",
      },
    ],
    videos: [],
  },
  {
    slug: "ecell-snu",
    image: "/thumbnails/ecell preview.jpg",
    hoverVideo: "/videos/Previews/ecell/work%20ecell.mp4",
    mainHeading: "XCELERATE",
    category: "Club Work",
    description: "As Head of Videography for ECell 2024 to 2025, built the visual story of its flagship Ideathon Xcelerate through trailers, teasers, live event coverage, reveal videos and sponsor reels, garnering 105K views.",
    fullDescription: `As Head of Videography for the Entrepreneurship Cell at Shiv Nadar University, I shaped the media identity of the 2024 to 2025 term by producing trailers and teasers for the flagship Ideathon Xcelerate 2.0 and 3.0. I directed farewell reels, team and core reveal videos, and announcement content for events such as Uno Night. During Xcelerate, I captured the event live with coherent Instagram stories, while also creating sponsor reels to ensure professional representation. Together, these efforts built a cohesive and engaging digital presence for the Cell across its key initiatives.`,
    year: "2025",
    client: "Entrepreneurship Cell, Shiv Nadar University",
    tools: "DaVinci Resolve, Canva & Figma",
    role: "Head of Videography",
    youtubeLink: "https://www.youtube.com/playlist?list=PLxOqVdcuLwssf0eVVyTsiVG7ul_pHjEtw",
    playlistLink: "https://www.youtube.com/playlist?list=PLxOqVdcuLwssf0eVVyTsiVG7ul_pHjEtw",
    projectVideos: [
      {
        src: "/videos/Previews/ecell/ecell%20trailer%20preview.mp4",
        type: "main",
        playVideoSrc: "/videos/Work%20Vids/ecell/Accelerate%20teaser%2025.mp4",
      },
      {
        src: "/videos/Previews/ecell/ecell%20aftermovie%20preview.mp4",
        type: "main",
        playVideoSrc: "/videos/Work%20Vids/ecell/aftermovie.mp4",
      },
      {
        src: "/videos/Work%20Vids/ecell/Accelerate%20Teaser.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/ecell/Accelerate%2024.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/ecell/Core%20Reveal.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/ecell/Leads%20Reveal.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/ecell/Stories.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/ecell/Uno%20Night.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/ecell/xtcy1.mp4",
        type: "reel",
      },
    ],
    videos: [],
  },
  {
    slug: "ace-experiences",
    image: "/thumbnails/work ace.jpg",
    hoverVideo: "/videos/Previews/ace/work%20ace.mp4",
    mainHeading: "ACE EXPERIENCES",
    category: "Social Media",
    description: "Crafted reels for Ace Experiences' Diwali celebration with Chaar Diwari and the Star Struck launch with Sunny Leone. Each reel averaging around 30K views.",
    fullDescription: `For Ace Experiences, I first created two reels for their collaboration with Star Struck by Sunny Leone, followed by four reels to launch their Diwali party DDC-2 (Diwali Dandiya Capsule) at CAYA, with Chaar Diwari as the lead act. Each reel averaged around 30K views, extending the buzz of the events online and amplifying reach. I also crafted an Instagram story featuring DJ STUVI, capturing the live energy of the night and translating it into content that kept audiences engaged even beyond the venue.`,
    year: "2024",
    client: "ACE Experiences, ACE Entertainment",
    tools: "DaVinci Resolve",
    role: "Content Creator & Editor",
    youtubeLink: "https://www.youtube.com/playlist?list=PLxOqVdcuLwsvnRJF8u1jZ3ozdIvrBCjIU",
    playlistLink: "https://www.youtube.com/playlist?list=PLxOqVdcuLwsvnRJF8u1jZ3ozdIvrBCjIU",
    projectVideos: [
      {
        src: "/videos/Work%20Vids/ace/Ace%20final-2.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/ace/ace3-dfina.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/ace/final.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/ace/r4-d3.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/ace/Reel-2-D2.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/ace/risq.mp4",
        type: "reel",
      },
    ],
    videos: [],
  },
  {
    slug: "dance-with-aara",
    image: "/thumbnails/work dwa.jpg",
    hoverVideo: "/videos/Previews/DwA/work%20dwa.mp4",
    mainHeading: "DANCE WITH AARA",
    category: "Social Media",
    description: "Trend-driven reels showcasing high-impact storytelling and amplifying Dance With AARA's community spirit, with one intro reel reaching 580K views.",
    fullDescription: `For Dance With AARA, I produced 4 trendy reels, including their intro reel which exploded with 580K views. The brand partners with corporate agencies to host dance mixers at well-known cafes like SOCIAL, while also offering personalised dance lessons. I reflected this mix of vibrancy and softness in the visual theme I created for their reels and intros, keeping them engaging and on-brand.`,
    year: "2024",
    client: "Dance With AARA",
    tools: "Instagram Reels, DaVinci Resolve",
    role: "Content Creator & Editor",
    youtubeLink: "https://www.youtube.com/playlist?list=PLxOqVdcuLwsteg6YZGkO35mURwk19tsdE",
    playlistLink: "https://www.youtube.com/playlist?list=PLxOqVdcuLwsteg6YZGkO35mURwk19tsdE",
    projectVideos: [
      {
        src: "/videos/Work%20Vids/DwA/A&M-2.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/DwA/aqua2.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/DwA/d1-302.mp4",
        type: "reel",
      },
      {
        src: "/videos/Work%20Vids/DwA/d2.mp4",
        type: "reel",
      },
    ],
    videos: [],
  },
  {
    slug: "filmography",
    image: "/thumbnails/home_work_3.jpg",
    hoverVideo: "/videos/Home/home_work_3.mp4",
    mainHeading: "FILMOGRAPHY",
    category: "Short Films",
    description: "Worked across around 10 short films spanning comedies, dramas, horror, mini-series and parodies, taking on roles from directing and cinematography to acting, writing, sound design and art direction.",
    fullDescription: `My filmography spans around 10 short films across a wide range of genres including comedies, dramas, horror, mini-series, and parodies. What defines this body of work is the breadth of roles I have taken on across different productions. I have directed, cinematographed, written, scripted, acted, edited, designed sound, handled art direction, and served as assistant director depending on what each project demanded. This cross-disciplinary experience across the full filmmaking pipeline has given me a deep understanding of every stage of production, from the first draft of a script to the final cut, and has shaped the way I approach visual storytelling across all my work.`,
    year: "2022 to 2025",
    client: "Various",
    tools: "DaVinci Resolve, Various",
    role: "Multiple Roles",
    youtubeLink: "",
    playlistLink: "",
    projectVideos: [
      {
        src: "/videos/about%20bg.mp4",
        type: "main",
        playVideoSrc: "/videos/Home/home_work_3.mp4",
      }
    ],
    videos: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getOtherProjects(currentSlug: string, limit: number = 3): Project[] {
  return projects
    .filter(project => project.slug !== currentSlug)
    .slice(0, limit);
}

// Returns the true previous/next project relative to currentSlug's position
// in the `projects` array, wrapping around at both ends (last -> first,
// first -> last). Used for the prev/next arrow navigation on project pages.
export function getAdjacentProjects(currentSlug: string): { prev: Project; next: Project } {
  const index = projects.findIndex(project => project.slug === currentSlug);
  if (index === -1) {
    return { prev: projects[projects.length - 1], next: projects[0] };
  }
  const prevIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;
  return { prev: projects[prevIndex], next: projects[nextIndex] };
}