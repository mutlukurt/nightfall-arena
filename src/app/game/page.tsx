import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";

export default function GamePage() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/game-lore.png"
          alt="Eclipse Fold Lore"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-oswald font-bold text-white uppercase tracking-tighter mb-4 animate-fade-in-up">
            THE <span className="text-bronze">ECLIPSE</span> LORE
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Centuries ago, the sun was devoured by the Void. Now, heroes from across the realms gather in the Eclipse Fold to claim the shards of the shattered sun.
          </p>
        </div>
      </section>

      {/* Mechanics Section */}
      <section className="py-24 border-y border-white/5 bg-charcoal-light/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                title="MASTER THE MECHANICS" 
                subtitle="Nightfall Arena is a 5v5 tactical MOBA built for competitive play."
              />
              <div className="space-y-8 mt-12">
                {[
                  { title: "DYNAMIC DAY-NIGHT CYCLE", desc: "The battlefield changes as the eclipse progresses. Shadows grant stealth, while light reveals hidden paths." },
                  { title: "THE THREE ASH LANES", desc: "Strategize across three distinct lanes, each guarded by ancient Golems and cursed towers." },
                  { title: "VOID OBJECTIVES", desc: "Contest powerful neutral monsters like the Void Devourer to gain game-changing buffs for your team." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-bronze/10 border border-bronze/30 flex items-center justify-center flex-shrink-0 group-hover:bg-bronze/20 transition-colors">
                      <span className="text-bronze font-oswald font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-oswald font-bold text-white mb-2 group-hover:text-bronze transition-colors">{item.title}</h3>
                      <p className="text-gray-400 font-inter leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] border border-white/10 group overflow-hidden">
              <Image
                src="/images/battlefield-map.png"
                alt="Tactical Map"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-bronze/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Arenas Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="THE BATTLEGROUNDS" 
            subtitle="Explore the diverse environments of the Eclipse Fold, each with its own tactical challenges."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { 
                name: "THE IRON GATES", 
                image: "/images/arena-iron-gates.png", 
                desc: "An industrial fortress where molten metal and crushing gears create a lethal environment." 
              },
              { 
                name: "TEMPLE OF ASH", 
                image: "/images/arena-temple-ash.png", 
                desc: "Ancient ruins beneath a dormant volcano, where the ground itself bleeds fire." 
              },
              { 
                name: "SUNKEN REACH", 
                image: "/images/arena-sunken-reach.png", 
                desc: "A majestic underwater cathedral city reclaimed by the void and the deep sea." 
              }
            ].map((arena) => (
              <div key={arena.name} className="group relative overflow-hidden border border-white/5 transition-all hover:border-bronze/50">
                <div className="relative h-[400px]">
                  <Image
                    src={arena.image}
                    alt={arena.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-oswald font-bold text-white mb-2 group-hover:text-bronze transition-colors">{arena.name}</h3>
                  <p className="text-sm text-gray-400 font-inter line-clamp-2">
                    {arena.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-oswald font-bold text-white mb-8">READY TO ENTER THE ARENA?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" className="px-12">DOWNLOAD NOW</Button>
            <Button variant="outline" className="px-12">VIEW HEROES</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
