import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#EDF1F0" }}
    >
      <h1
        className="text-6xl sm:text-8xl font-bold mb-8"
        style={{ fontFamily: "Product Sans, sans-serif", color: "#000000" }}
      >
        404
      </h1>

      <h2
        className="text-2xl sm:text-3xl font-semibold mb-4 text-center"
        style={{ fontFamily: "Product Sans, sans-serif", color: "#000000" }}
      >
        Project Not Found
      </h2>

      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        The project you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/work"
        className="px-8 py-3 bg-[#1b1919] text-white rounded-full hover:bg-orange-500 transition-colors duration-300 font-medium"
        style={{ fontFamily: "Product Sans, sans-serif" }}
      >
        Back to Work
      </Link>
    </div>
  );
}
