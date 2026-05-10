import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import Link from "next/link";
const allNews = [
  {
    id: "1",
    title: "FREE HERO ROTATION: TRY DRAKON NOW",
    category: "ROTATION",
    date: "MAY 10, 2026",
    description: "This week’s free hero rotation brings new champions into the arena. Master the flame with Drakon.",
    image: "/images/news-featured-warriors.png",
    featured: true,
  },
  {
    id: "2",
    title: "WATCH NOW: ARENA CUP FINALS",
    category: "ESPORTS",
    date: "MAY 08, 2026",
    image: "/images/news-cup.png",
  },
  {
    id: "3",
    title: "EMBER ROGUE SKIN REVEALED",
    category: "SKINS",
    date: "MAY 05, 2026",
    image: "/images/news-skin.png",
  },
  {
    id: "4",
    title: "PATCH 1.4 NOTES: BALANCE CHANGES",
    category: "UPDATES",
    date: "MAY 01, 2026",
    image: "/images/preview.png",
  },
  {
    id: "5",
    title: "THE LORE OF THE TEMPLE OF ASH",
    category: "LORE",
    date: "APR 28, 2026",
    image: "/images/game-lore.png",
  },
  {
    id: "6",
    title: "COMMUNITY SPOTLIGHT: FAN ART #24",
    category: "COMMUNITY",
    date: "APR 25, 2026",
    image: "/images/heroes-bg.png",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="LATEST FROM THE ARENA" 
            subtitle="Stay updated with the latest news, patch notes, and esports events."
          />

          <Link href={`/news/${allNews[0].id}`} className="mt-12 mb-20 group cursor-pointer block">
            <div className="relative h-[500px] overflow-hidden border border-white/10 group-hover:border-bronze/50 transition-colors">
              <Image
                src={allNews[0].image}
                alt={allNews[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-12 max-w-4xl">
                <span className="text-bronze font-oswald text-sm tracking-[0.3em] mb-4 block">
                  {allNews[0].category} | {allNews[0].date}
                </span>
                <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 group-hover:text-bronze transition-colors">
                  {allNews[0].title}
                </h2>
                <p className="text-gray-300 text-lg mb-8 font-inter">
                  {allNews[0].description}
                </p>
                <Button variant="primary">READ ARTICLE</Button>
              </div>
            </div>
          </Link>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allNews.slice(1).map((item) => (
              <Link key={item.id} href={`/news/${item.id}`} className="group cursor-pointer block">
                <div className="relative h-[250px] overflow-hidden border border-white/10 group-hover:border-bronze/50 transition-colors mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-bronze font-oswald text-xs tracking-widest">{item.category}</span>
                  <span className="text-[10px] text-gray-500 font-inter uppercase">{item.date}</span>
                </div>
                <h3 className="text-2xl font-oswald font-bold text-white group-hover:text-bronze transition-colors leading-tight">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button variant="outline" className="px-12">LOAD MORE NEWS</Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
