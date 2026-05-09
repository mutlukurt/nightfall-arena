import React from "react";
import Image from "next/image";
import { Button } from "./Button";

export const BattlefieldSection = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/battlefield-map.png"
          alt="Battlefield Map"
          fill
          className="object-cover"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-oswald font-bold text-white uppercase tracking-tighter mb-4">
          BATTLE IN THE <span className="text-bronze">ECLIPSE FOLD</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 font-inter">
          A dynamic battlefield where every stone and tree tells a story. Strategy is your greatest weapon in the Three Lanes of Ash.
        </p>
        <Button variant="primary">LEARN MORE</Button>
      </div>

      {/* Grid overlay for tactical feel */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
    </section>
  );
};
