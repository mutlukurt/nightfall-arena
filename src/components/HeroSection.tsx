"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { VideoModal } from "./VideoModal";

export const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative h-[800px] w-full flex items-center pt-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-kaira.png"
          alt="Nightfall Arena Kaira"
          fill
          className="object-cover object-right md:object-center"
          priority
        />
        {/* Overlays */}
        <div className="absolute inset-0 hero-gradient z-10" />
        <div className="absolute inset-0 bottom-fade z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4 animate-slide-up">
            <div className="h-[1px] w-8 bg-bronze" />
            <span className="text-bronze font-oswald tracking-[0.3em] text-xs uppercase">
              New Hero Released
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-oswald font-bold text-white uppercase leading-none mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            KAIRA, THE <br />
            <span className="text-transparent border-text stroke-white">SHADOW HUNTER</span>
          </h1>
          
          <p className="text-gray-400 text-lg mb-8 max-w-lg font-inter">
            Master the shadows and strike from the unseen. Kaira returns to the Eclipse Fold with devastating new abilities.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary">MEET KAIRA</Button>
            <Button variant="outline" onClick={() => setIsVideoModalOpen(true)}>WATCH TRAILER</Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="/videos/Nightfall_Arena_trailer_202605100126.mov"
      />

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:block text-right">
        <div className="text-white/20 font-oswald text-9xl font-bold uppercase leading-none select-none">
          SHADOW
        </div>
      </div>
    </section>
  );
};
