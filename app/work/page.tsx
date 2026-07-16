import HorizontalCard from "../components/HorizontalCard";
import HoverButton from "../components/HoverButton";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <div
      className="flex flex-col items-center justify-center pt-18"
      style={{ backgroundColor: "#EDF1F0" }}
    >
      {/* [MY WORK] Heading */}
      <h1
        className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-normal text-center tracking-widest"
        style={{ fontFamily: "Product Sans, sans-serif", color: "#000000" }}
      >
        [MY WORK]
      </h1>

      {/* Work Samples */}
      <div className="w-full space-y-8 my-12">
        {projects.map((work, index) => (
          <HorizontalCard
            key={index}
            image={work.image}
            video={work.hoverVideo}
            mainHeading={work.mainHeading}
            category={work.category}
            description={work.description}
            slug={work.slug}
          />
        ))}
      </div>

      {/* Hover Button */}
      <HoverButton />
    </div>
  );
}