"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import { Button } from "./Button";

const heroes = [
  {
    name: "KAIRA",
    role: "HUNTER",
    image: "/images/hero-kaira-card.png",
    description: "Agile jungle hunter using the power of shadows to execute enemies.",
    abilities: ["/icons/ability-1.png", "/icons/ability-2.png", "/icons/ability-3.png"],
  },
  {
    name: "SKAAR",
    role: "MAGE",
    image: "/images/hero-skaar.png",
    description: "A small but fiery dragon capable of massive area-of-effect magical destruction.",
    abilities: [],
  },
  {
    name: "RONIN",
    role: "WARRIOR",
    image: "/images/hero-ronin.png",
    description: "Honor-bound swordsman with a blade that can cleave through steel.",
    abilities: [],
  },
  {
    name: "NYX",
    role: "ASSASSIN",
    image: "/images/hero-nyx.png",
    description: "A lethal shadow assassin who strikes before you even see her.",
    abilities: [],
  },
  {
    name: "VEXA",
    role: "SNIPER",
    image: "/images/hero-vexa.png",
    description: "Technologically advanced sniper with her mechanical spider rig.",
    abilities: [],
  },
];

export const HeroesSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // SKAAR is active by default as requested

  return (
    <section id="heroes" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroes-bg.png"
          alt="Heroes background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <SectionTitle 
            title="MEET THE HEROES OF NIGHTFALL" 
            subtitle="Every hero brings unique strengths, weaknesses, and stories into battle."
            centered
          />
          <Button variant="outline" className="mt-8">VIEW ALL</Button>
        </div>

        {/* Hero Cards Carousel */}
        <div className="flex flex-nowrap md:justify-center items-center gap-4 md:gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x">
          {heroes.map((hero, index) => (
            <div
              key={hero.name}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 transition-all duration-500 cursor-pointer snap-center
                ${index === activeIndex 
                  ? "w-[280px] md:w-[320px] h-[450px] md:h-[500px] z-20 border-2 border-bronze" 
                  : "w-[220px] md:w-[240px] h-[380px] md:h-[420px] opacity-40 scale-95 grayscale hover:grayscale-0 hover:opacity-100"
                }
              `}
            >
              <Image
                src={hero.image}
                alt={hero.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <p className="text-bronze font-oswald text-xs tracking-[0.3em] mb-1">{hero.role}</p>
                <h3 className={`font-oswald font-bold uppercase transition-all
                  ${index === activeIndex ? "text-3xl" : "text-xl"}
                `}>
                  {hero.name}
                </h3>
                
                {index === activeIndex && (
                  <div className="mt-4 animate-fade-in">
                    <p className="text-gray-300 text-sm font-inter line-clamp-2 mb-4">
                      {hero.description}
                    </p>
                    <div className="flex justify-center space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border border-bronze/50 bg-charcoal/80 overflow-hidden relative group/icon">
                          <Image
                            src="/images/ability-icons.png"
                            alt={`Ability ${i}`}
                            fill
                            className="object-cover scale-150 transition-transform group-hover/icon:scale-125"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
