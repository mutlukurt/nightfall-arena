"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { SiDiscord, SiX, SiYoutube, SiReddit } from "@icons-pack/react-simple-icons";

export default function CommunityPage() {
  const socialLinks = [
    { 
      name: "DISCORD", 
      icon: <SiDiscord size={40} color="#5865F2" />, 
      desc: "Join 100k+ players to find matches and discuss strategy.", 
      color: "#5865F2" 
    },
    { 
      name: "TWITTER / X", 
      icon: <SiX size={40} color="#FFFFFF" />, 
      desc: "Get the latest updates and announcements directly.", 
      color: "#000000" 
    },
    { 
      name: "YOUTUBE", 
      icon: <SiYoutube size={40} color="#FF0000" />, 
      desc: "Watch hero guides, patch reveals, and esports highlights.", 
      color: "#FF0000" 
    },
    { 
      name: "REDDIT", 
      icon: <SiReddit size={40} color="#FF4500" />, 
      desc: "Share your plays and discuss balance with the dev team.", 
      color: "#FF4500" 
    },
  ];

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/community-hub.png"
          alt="Community Hub"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionTitle 
            title="JOIN THE LEGION" 
            subtitle="Connect with millions of players worldwide and share your journey through the Eclipse Fold."
            centered
          />
        </div>
      </section>

      {/* Social Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialLinks.map((link) => (
              <div key={link.name} className="bg-charcoal-light p-8 border border-white/5 hover:border-bronze/50 transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform inline-block">
                  {link.icon}
                </div>
                <h3 className="text-2xl font-oswald font-bold text-white mb-4">{link.name}</h3>
                <p className="text-gray-400 font-inter text-sm mb-8 leading-relaxed">
                  {link.desc}
                </p>
                <Button variant="outline" className="w-full">FOLLOW</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fan Art Section */}
      <section className="py-24 bg-charcoal-light/30 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-oswald font-bold text-white mb-12">COMMUNITY SPOTLIGHT</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative h-[300px] overflow-hidden group">
                <Image
                  src={`/images/hero-${["kaira", "skaar", "nyx", "vexa"][i-1]}.png`}
                  alt="Fan Art"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-bronze/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-oswald text-xs tracking-widest">ART BY @VOIDWALKER_{i}</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-12">SUBMIT YOUR ART</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
