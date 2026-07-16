"use client";

import { Video } from "../data/projects";

interface VideoDisplayProps {
  videos: Video[];
}

export default function VideoDisplay({ videos }: VideoDisplayProps) {
  const horizontalVideos = videos.filter(
    (video) => video.orientation === "horizontal"
  );
  const verticalVideos = videos.filter(
    (video) => video.orientation === "vertical"
  );

  return (
    <div className="space-y-12">
      {/* Horizontal Videos */}
      {horizontalVideos.length > 0 && (
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Horizontal Videos
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {horizontalVideos.map((video, index) => (
              <div key={index} className="space-y-4">
                <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {video.title && (
                  <p className="text-lg font-medium text-gray-700 text-center">
                    {video.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Vertical Videos */}
      {verticalVideos.length > 0 && (
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Vertical Videos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {verticalVideos.map((video, index) => (
              <div key={index} className="space-y-4">
                <div className="relative w-full aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden mx-auto max-w-sm">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {video.title && (
                  <p className="text-lg font-medium text-gray-700 text-center">
                    {video.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fallback if no videos */}
      {videos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">
            No videos available for this project.
          </p>
        </div>
      )}
    </div>
  );
}
