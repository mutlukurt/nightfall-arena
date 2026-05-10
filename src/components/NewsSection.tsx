import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "./SectionTitle";
import { Button } from "./Button";

const newsItems = [
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
];

const sideNews = [
  "FORTRESS UPDATE: THE IRON GATES OPEN",
  "HERO LORE: THE TEMPLE OF ASH",
  "FREE HERO ROTATION: LIRA, DRAKON, NYX",
  "STORMBORN SKIN REVEAL",
  "NEW HERO LORE: A STORY FOR EVERYTHING",
];

export const NewsSection = () => {
  return (
    <section id="news" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <SectionTitle title="NIGHTFALL NEWS" />
          <Link href="/news">
            <Button variant="outline" className="hidden md:block">VIEW ALL</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href={`/news/${newsItems[0].id}`} className="lg:col-span-2 group cursor-pointer block">
            <div className="relative h-[400px] overflow-hidden border border-white/10 group-hover:border-bronze/50 transition-colors">
              <Image
                src={newsItems[0].image}
                alt={newsItems[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-bronze font-oswald text-xs tracking-widest mb-2 block">
                  {newsItems[0].category} | {newsItems[0].date}
                </span>
                <h3 className="text-3xl font-oswald font-bold text-white mb-4 group-hover:text-bronze transition-colors">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {newsItems[0].description}
                </p>
                <span className="text-white font-oswald text-sm tracking-widest uppercase flex items-center group-hover:translate-x-2 transition-transform">
                  READ MORE <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Middle Column */}
          <div className="flex flex-col gap-8">
            {newsItems.slice(1).map((item) => (
              <Link key={item.id} href={`/news/${item.id}`} className="group cursor-pointer block">
                <div className="relative h-[184px] overflow-hidden border border-white/10 group-hover:border-bronze/50 transition-colors mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                </div>
                <span className="text-bronze font-oswald text-xs tracking-widest block mb-1">
                  {item.category}
                </span>
                <h4 className="text-lg font-oswald font-bold text-white group-hover:text-bronze transition-colors">
                  {item.title}
                </h4>
              </Link>
            ))}
          </div>

          {/* Right Column - Headlines */}
          <div className="bg-charcoal-light p-8 border border-white/10">
            <h3 className="text-xl font-oswald font-bold text-white mb-6 tracking-tighter">LATEST HEADLINES</h3>
            <div className="space-y-6">
              {sideNews.map((headline, index) => (
                <div key={index} className="group cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[10px] text-gray-500 font-inter mb-1 block">MAY {10 - index}, 2026</span>
                  <p className="text-sm text-gray-300 font-oswald tracking-wide leading-tight group-hover:text-bronze transition-colors uppercase">
                    {headline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
