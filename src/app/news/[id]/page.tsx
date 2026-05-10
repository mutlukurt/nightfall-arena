import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { notFound } from "next/navigation";

const allNews = [
  {
    id: "1",
    title: "FREE HERO ROTATION: TRY DRAKON NOW",
    category: "ROTATION",
    date: "MAY 10, 2026",
    description: "This week’s free hero rotation brings new champions into the arena. Master the flame with Drakon.",
    image: "/images/news-featured-warriors.png",
    content: `
      <p>The Eclipse Fold is heating up! This week's free hero rotation is headlined by the master of molten fury, <strong>Drakon</strong>. Whether you're a seasoned veteran or a new recruit, now is the perfect time to master the art of fire manipulation.</p>
      
      <h3>THIS WEEK'S LINEUP</h3>
      <ul>
        <li><strong>DRAKON (MAGE):</strong> High area-of-effect damage and zone control.</li>
        <li><strong>LIRA (SUPPORT):</strong> Unrivaled protection and celestial healing.</li>
        <li><strong>RONIN (WARRIOR):</strong> Frontline dominance and precision strikes.</li>
      </ul>

      <p>Drakon's passive ability, <em>Volcanic Heart</em>, allows him to deal bonus magic damage to burning enemies. Pair him with heroes who can lock down targets to maximize his destructive potential.</p>
      
      <p>Log in now and take these champions for a spin in the arena. The rotation resets every Monday at 00:00 UTC.</p>
    `
  },
  {
    id: "2",
    title: "WATCH NOW: ARENA CUP FINALS",
    category: "ESPORTS",
    date: "MAY 08, 2026",
    image: "/images/news-cup.png",
    content: `
      <p>The most anticipated event of the season has concluded! The <strong>Arena Cup Finals</strong> saw the world's best teams compete for a share of the $500,000 prize pool and the eternal glory of the Solar Trophy.</p>
      
      <h3>CHAMPIONSHIP RECAP</h3>
      <p>Team <strong>Shadow</strong> emerged victorious after a grueling five-game series against <strong>The Ember Guard</strong>. The final match came down to a spectacular Void Devourer steal by Shadow's jungler, which allowed them to push through the mid-lane and shatter the enemy nexus.</p>

      <p>MVP honors were awarded to <em>Vex_Master</em> for their incredible performance on Vexa, maintaining a perfect KDA throughout the final three games.</p>
      
      <p>Missed the action? You can watch the full VOD on our YouTube channel or check out the highlight reel in the Community Hub.</p>
    `
  },
  {
    id: "3",
    title: "EMBER ROGUE SKIN REVEALED",
    category: "SKINS",
    date: "MAY 05, 2026",
    image: "/images/news-skin.png",
    content: `
      <p>Nyx has never looked more lethal. We are proud to unveil the <strong>Ember Rogue</strong> legendary skin, the latest addition to the Infernal collection.</p>
      
      <h3>SKIN HIGHLIGHTS</h3>
      <ul>
        <li><strong>Custom Animations:</strong> Brand new movement and attack animations that flow like liquid fire.</li>
        <li><strong>Visual Effects:</strong> All of Nyx's abilities now feature glowing ember particles and smoke trails.</li>
        <li><strong>Unique Voiceover:</strong> Over 100 new lines of dialogue reflecting Nyx's new fiery persona.</li>
        <li><strong>Legendary Recall:</strong> Nyx vanishes into a pillar of flame, leaving nothing but ash behind.</li>
      </ul>

      <p>The Ember Rogue skin is now available in the in-game shop for 1825 Solar Shards. Purchase it within the first 48 hours to unlock the exclusive "Ashen Blade" summoner icon!</p>
    `
  }
];

export async function generateStaticParams() {
  return allNews.map((news) => ({
    id: news.id,
  }));
}

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = allNews.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/news" className="text-bronze font-oswald text-sm tracking-widest mb-8 inline-block hover:translate-x-[-8px] transition-transform">
            ← BACK TO NEWS
          </Link>

          <header className="mb-12">
            <span className="text-bronze font-oswald text-sm tracking-[0.3em] mb-4 block">
              {article.category} | {article.date}
            </span>
            <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-8 leading-tight">
              {article.title}
            </h1>
            <div className="relative h-[400px] md:h-[500px] border border-white/10">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          </header>

          <div 
            className="prose prose-invert prose-bronze max-w-none font-inter text-gray-300 leading-relaxed
              prose-h3:text-white prose-h3:font-oswald prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
              prose-p:mb-6 prose-strong:text-bronze prose-li:mb-2 prose-ul:mb-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <footer className="mt-20 pt-10 border-t border-white/5">
            <h3 className="text-xl font-oswald font-bold text-white mb-6">SHARE THIS ARTICLE</h3>
            <div className="flex gap-4">
              <Button variant="outline" className="px-6 py-2">X / TWITTER</Button>
              <Button variant="outline" className="px-6 py-2">FACEBOOK</Button>
              <Button variant="outline" className="px-6 py-2">COPY LINK</Button>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </main>
  );
}
