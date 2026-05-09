"use client";

import React, { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl aspect-video bg-charcoal border border-white/10 shadow-2xl z-10 animate-slide-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-bronze transition-colors group flex items-center space-x-2"
        >
          <span className="text-xs font-oswald tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Video Player */}
        <div className="w-full h-full overflow-hidden">
          {videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") ? (
            <iframe
              src={`${videoUrl}?autoplay=1`}
              title="Nightfall Arena Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none shadow-glow"
            />
          ) : (
            <video
              src={videoUrl}
              autoPlay
              controls
              className="w-full h-full object-cover shadow-glow"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        
        {/* Decorative Borders */}
        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-bronze" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-bronze" />
      </div>
    </div>
  );
};
