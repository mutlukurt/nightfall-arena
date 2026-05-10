"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";

const allHeroes = [
  {
    name: "KAIRA",
    role: "HUNTER",
    image: "/images/hero-kaira-card.png",
    difficulty: "HARD",
    description: "Agile jungle hunter using the power of shadows to execute enemies.",
    stats: { attack: 9, defense: 3, magic: 2, difficulty: 8 }
  },
  {
    name: "SKAAR",
    role: "MAGE",
    image: "/images/hero-skaar.png",
    difficulty: "EASY",
    description: "A small but fiery dragon capable of massive area-of-effect magical destruction.",
    stats: { attack: 3, defense: 4, magic: 10, difficulty: 4 }
  },
  {
    name: "RONIN",
    role: "WARRIOR",
    image: "/images/hero-ronin.png",
    difficulty: "MEDIUM",
    description: "Honor-bound swordsman with a blade that can cleave through steel.",
    stats: { attack: 8, defense: 6, magic: 2, difficulty: 6 }
  },
  {
    name: "NYX",
    role: "ASSASSIN",
    image: "/images/hero-nyx.png",
    difficulty: "HARD",
    description: "A lethal shadow assassin who strikes before you even see her.",
    stats: { attack: 10, defense: 2, magic: 4, difficulty: 9 }
  },
  {
    name: "VEXA",
    role: "SNIPER",
    image: "/images/hero-vexa.png",
    difficulty: "MEDIUM",
    description: "Technologically advanced sniper with her mechanical spider rig.",
    stats: { attack: 9, defense: 4, magic: 5, difficulty: 7 }
  },
  {
    name: "DRAKON",
    role: "MAGE",
    image: "/images/hero-drakon.png",
    difficulty: "MEDIUM",
    description: "A master of molten fury, Drakon turns the battlefield into an inferno.",
    stats: { attack: 4, defense: 5, magic: 10, difficulty: 6 }
  },
  {
    name: "LIRA",
    role: "SUPPORT",
    image: "/images/hero-lira.png",
    difficulty: "EASY",
    description: "Celestial guardian who protects her allies with blinding holy light.",
    stats: { attack: 2, defense: 7, magic: 9, difficulty: 3 }
  },
  {
    name: "MALPHAS",
    role: "WARRIOR",
    image: "/images/hero-malphas.png",
    difficulty: "HARD",
    description: "An unstoppable demonic juggernaut who thrives in the heart of battle.",
    stats: { attack: 6, defense: 10, magic: 4, difficulty: 8 }
  },
  {
    name: "SYLAS",
    role: "ASSASSIN",
    image: "/images/hero-sylas.png",
    difficulty: "HARD",
    description: "The void's whisper, Sylas strikes from the silence between heartbeats.",
    stats: { attack: 10, defense: 3, magic: 6, difficulty: 9 }
  },
  {
    name: "CALYPSA",
    role: "SNIPER",
    image: "/images/hero-calypsa.png",
    difficulty: "MEDIUM",
    description: "Regal siren of the depths, her water-arrows never miss their mark.",
    stats: { attack: 9, defense: 4, magic: 7, difficulty: 7 }
  },
];

export default function HeroesPage() {
  const [filter, setFilter] = useState("ALL");

  const filteredHeroes = filter === "ALL" 
    ? allHeroes 
    : allHeroes.filter(h => h.role === filter);

  const roles = ["ALL", "HUNTER", "MAGE", "WARRIOR", "ASSASSIN", "SNIPER", "SUPPORT"];

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="CHOOSE YOUR CHAMPION" 
            subtitle="Master the unique abilities of these legendary warriors to dominate the Eclipse Fold."
            centered
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 mb-16">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setFilter(role)}
                className={`px-6 py-2 font-oswald text-sm tracking-widest transition-all border
                  ${filter === role 
                    ? "bg-bronze border-bronze text-charcoal" 
                    : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                  }
                `}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {filteredHeroes.map((hero) => (
              <div key={hero.name} className="group relative overflow-hidden border border-white/5 bg-charcoal-light/50 transition-all hover:border-bronze/50">
                <div className="relative h-[400px]">
                  <Image
                    src={hero.image}
                    alt={hero.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-bronze font-oswald text-xs tracking-[0.2em]">{hero.role}</span>
                    <span className="text-[10px] text-gray-500 font-inter border border-white/10 px-2 py-0.5">{hero.difficulty}</span>
                  </div>
                  <h3 className="text-2xl font-oswald font-bold text-white mb-4 group-hover:text-bronze transition-colors">{hero.name}</h3>
                  <p className="text-sm text-gray-400 font-inter mb-6 line-clamp-2">
                    {hero.description}
                  </p>
                  
                  {/* Stats Mini */}
                  <div className="space-y-2">
                    {Object.entries(hero.stats).map(([stat, value]) => (
                      <div key={stat} className="flex items-center gap-2">
                        <span className="text-[9px] text-gray-500 w-12 font-oswald uppercase">{stat}</span>
                        <div className="flex-1 h-1 bg-white/5">
                          <div 
                            className="h-full bg-bronze transition-all duration-1000" 
                            style={{ width: `${value * 10}%` }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline">EXPLORE ABILITIES</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
