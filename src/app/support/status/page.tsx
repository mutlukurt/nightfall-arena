import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";

export default function ServerStatusPage() {
  const regions = [
    { name: "North America", status: "Operational", ping: "24ms" },
    { name: "Europe West", status: "Operational", ping: "38ms" },
    { name: "Asia East", status: "Maintenance", ping: "-" },
    { name: "South America", status: "Operational", ping: "56ms" },
    { name: "Australia", status: "Operational", ping: "42ms" },
  ];

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/support" className="text-bronze font-oswald text-sm tracking-widest mb-8 inline-block hover:translate-x-[-8px] transition-transform">
            ← BACK TO SUPPORT
          </Link>

          <SectionTitle 
            title="SERVER STATUS" 
            subtitle="Real-time connectivity and maintenance updates for all game regions."
          />

          <div className="mt-12 space-y-4">
            {/* Global Status Banner */}
            <div className="bg-green-500/10 border border-green-500/20 p-8 flex items-center justify-between mb-12">
              <div className="flex items-center gap-6">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                <div>
                  <h3 className="text-xl font-oswald font-bold text-white uppercase tracking-wider">ALL SYSTEMS NOMINAL</h3>
                  <p className="text-green-500/80 text-sm font-inter">Global login services and matchmaking are functioning normally.</p>
                </div>
              </div>
              <span className="text-[10px] text-gray-500 font-inter uppercase tracking-widest hidden md:block">Last updated: Just now</span>
            </div>

            {/* Region List */}
            <div className="bg-charcoal-light border border-white/5 overflow-hidden">
              <div className="grid grid-cols-3 p-6 border-b border-white/5 text-xs font-oswald tracking-[0.2em] text-gray-500 uppercase">
                <span>Region</span>
                <span className="text-center">Status</span>
                <span className="text-right">Avg. Latency</span>
              </div>
              <div className="divide-y divide-white/5">
                {regions.map((region) => (
                  <div key={region.name} className="grid grid-cols-3 p-8 items-center hover:bg-white/[0.02] transition-colors">
                    <span className="text-lg font-oswald font-bold text-white tracking-wide uppercase">{region.name}</span>
                    <div className="flex justify-center items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${region.status === "Operational" ? "bg-green-500" : "bg-yellow-500"}`} />
                      <span className={`text-sm font-inter font-medium ${region.status === "Operational" ? "text-green-500" : "text-yellow-500"}`}>
                        {region.status}
                      </span>
                    </div>
                    <span className="text-right text-gray-400 font-inter text-sm">{region.ping}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Maintenance Log */}
            <div className="mt-12">
              <h3 className="text-xl font-oswald font-bold text-white mb-6 uppercase tracking-widest border-l-4 border-bronze pl-4">Scheduled Maintenance</h3>
              <div className="bg-charcoal-light p-8 border border-white/5 space-y-6">
                <div className="flex gap-6 items-start pb-6 border-b border-white/5">
                  <div className="bg-bronze/10 text-bronze p-3 text-xs font-oswald font-bold rounded-sm">MAY 15</div>
                  <div>
                    <h4 className="text-white font-oswald font-bold tracking-wider mb-2">PATCH 1.5 DEPLOYMENT</h4>
                    <p className="text-gray-400 text-sm font-inter leading-relaxed">
                      All servers will be offline for approximately 4 hours starting at 08:00 UTC. Matchmaking will be disabled 30 minutes prior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
