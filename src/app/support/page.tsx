import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";

export default function SupportPage() {
  const faqs = [
    { q: "How do I download the game?", a: "You can download Nightfall Arena via our official launcher or through major digital storefronts like Steam and Epic Games Store." },
    { q: "What are the minimum system requirements?", a: "Windows 10/11, Intel i5-4460, 8GB RAM, and NVIDIA GTX 960 or equivalent. Mac support is coming soon." },
    { q: "How can I report a bug or player?", a: "Use the in-game reporting tool or visit our support portal to submit a detailed ticket with screenshots/videos." },
    { q: "Is the game free to play?", a: "Yes, Nightfall Arena is completely free to play. All heroes can be earned through gameplay, though cosmetic skins are available for purchase." },
  ];

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="SUPPORT CENTER" 
            subtitle="Need help? We've got you covered. Find answers to common questions or contact our team."
            centered
          />

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-20 space-y-6">
            <h2 className="text-2xl font-oswald font-bold text-white mb-8 border-b border-bronze pb-4 inline-block">FREQUENTLY ASKED QUESTIONS</h2>
            {faqs.map((faq, i) => (
              <div key={i} className="bg-charcoal-light border border-white/5 p-6 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-oswald font-bold text-white mb-4 text-bronze/90">{faq.q}</h3>
                <p className="text-gray-400 font-inter leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-charcoal-light p-10 border border-white/5 text-center">
              <div className="text-4xl mb-6">📩</div>
              <h3 className="text-2xl font-oswald font-bold text-white mb-4">SUBMIT A TICKET</h3>
              <p className="text-gray-400 font-inter mb-8">
                For account issues, billing, or technical problems that require human assistance.
              </p>
              <Button variant="primary" className="w-full">OPEN TICKET</Button>
            </div>
            <div className="bg-charcoal-light p-10 border border-white/5 text-center">
              <div className="text-4xl mb-6">🛠️</div>
              <h3 className="text-2xl font-oswald font-bold text-white mb-4">SERVER STATUS</h3>
              <p className="text-gray-400 font-inter mb-8">
                Check the current status of game servers and scheduled maintenance.
              </p>
              <Button variant="outline" className="w-full">CHECK STATUS</Button>
            </div>
          </div>

          <div className="mt-24 text-center">
            <p className="text-gray-500 font-inter mb-6 uppercase tracking-widest text-xs">Still need help?</p>
            <h2 className="text-3xl font-oswald font-bold text-white mb-8 uppercase">Reach out on social media</h2>
            <div className="flex justify-center gap-8">
              <span className="text-gray-400 hover:text-bronze transition-colors cursor-pointer font-oswald tracking-widest">DISCORD</span>
              <span className="text-gray-400 hover:text-bronze transition-colors cursor-pointer font-oswald tracking-widest">TWITTER</span>
              <span className="text-gray-400 hover:text-bronze transition-colors cursor-pointer font-oswald tracking-widest">INSTAGRAM</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
