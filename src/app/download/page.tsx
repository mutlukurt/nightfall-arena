import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { 
  SiApple, 
  SiEpicgames, 
  SiSteam 
} from "@icons-pack/react-simple-icons";

const WindowsIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M0 0v11.408h11.408V0H0zm12.592 0v11.408H24V0H12.592zM0 12.592V24h11.408V12.592H0zm12.592 0V24H24V12.592H12.592z"/>
  </svg>
);

export default function DownloadPage() {
  const platforms = [
    { name: "WINDOWS", icon: <WindowsIcon className="w-8 h-8" />, status: "Available", size: "24.5 GB" },
    { name: "MAC OS", icon: <SiApple className="w-8 h-8" />, status: "Coming Soon", size: "-" },
    { name: "EPIC GAMES", icon: <SiEpicgames className="w-8 h-8" />, status: "Available", size: "24.5 GB" },
    { name: "STEAM", icon: <SiSteam className="w-8 h-8" />, status: "Available", size: "24.5 GB" },
  ];

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="relative h-[600px] mb-24 overflow-hidden border border-white/10 group">
            <Image
              src="/images/download-hero.png"
              alt="Download"
              fill
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
              <span className="text-bronze font-oswald tracking-[0.5em] mb-4 text-sm uppercase">Enter the Eclipse Fold</span>
              <h1 className="text-6xl md:text-8xl font-oswald font-bold text-white mb-8 uppercase leading-tight tracking-tighter">
                DOWNLOAD <br /> <span className="text-bronze">FREE NOW</span>
              </h1>
              <p className="max-w-2xl text-gray-300 font-inter text-lg leading-relaxed mb-12">
                Join millions of players in the world's most immersive dark fantasy MOBA. Choose your platform and begin your legend today.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button variant="primary" className="px-12 py-5 text-lg">DOWNLOAD INSTALLER</Button>
                <Button variant="outline" className="px-12 py-5 text-lg">REDEMPTION CODE</Button>
              </div>
            </div>
          </div>

          <SectionTitle 
            title="CHOOSE YOUR PLATFORM" 
            subtitle="Nightfall Arena is available across major digital storefronts and direct download."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {platforms.map((p) => (
              <div key={p.name} className={`bg-charcoal-light p-10 border transition-all group ${p.status === 'Available' ? 'border-white/5 hover:border-bronze/50' : 'border-white/5 opacity-50 grayscale'}`}>
                <div className="text-bronze mb-6 group-hover:scale-110 transition-transform origin-left">{p.icon}</div>
                <h3 className="text-2xl font-oswald font-bold text-white mb-2 tracking-widest">{p.name}</h3>
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
                  <span className="text-[10px] font-oswald text-gray-500 uppercase tracking-widest">{p.status}</span>
                  <span className="text-[10px] font-inter text-bronze uppercase tracking-widest font-bold">{p.size}</span>
                </div>
                {p.status === 'Available' && (
                  <Button variant="outline" className="w-full mt-8 text-xs">GET ON {p.name}</Button>
                )}
              </div>
            ))}
          </div>

          {/* System Requirements */}
          <div className="mt-32 max-w-5xl mx-auto">
            <h2 className="text-3xl font-oswald font-bold text-white mb-12 text-center uppercase tracking-widest border-b border-white/5 pb-8">System Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3 className="text-xl font-oswald font-bold text-bronze uppercase tracking-widest">Minimum</h3>
                <ul className="space-y-4 text-gray-400 font-inter text-sm">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>OS</span> <span>Windows 10 64-bit</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>CPU</span> <span>Intel Core i5-4460</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>RAM</span> <span>8 GB</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>GPU</span> <span>NVIDIA GTX 960</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Storage</span> <span>30 GB available space</span></li>
                </ul>
              </div>
              <div className="space-y-8">
                <h3 className="text-xl font-oswald font-bold text-green-500 uppercase tracking-widest">Recommended</h3>
                <ul className="space-y-4 text-gray-400 font-inter text-sm">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>OS</span> <span>Windows 11 64-bit</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>CPU</span> <span>Intel Core i7-8700</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>RAM</span> <span>16 GB</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>GPU</span> <span>NVIDIA RTX 2060</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Storage</span> <span>30 GB SSD space</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
