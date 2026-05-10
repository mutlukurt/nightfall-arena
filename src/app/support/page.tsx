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
          <div id="faq" className="max-w-3xl mx-auto mt-20 space-y-6">
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
          <div id="ticket" className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-charcoal-light p-10 border border-white/5 text-center group hover:border-bronze/30 transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-bronze">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-2xl font-oswald font-bold text-white mb-4 uppercase tracking-wider">SUBMIT A TICKET</h3>
              <p className="text-gray-400 font-inter mb-8">
                For account issues, billing, or technical problems that require human assistance.
              </p>
              <Button variant="primary" className="w-full">OPEN TICKET</Button>
            </div>
            
            <div className="bg-charcoal-light p-10 border border-white/5 text-center group hover:border-bronze/30 transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-bronze">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-oswald font-bold text-white mb-4 uppercase tracking-wider">SERVER STATUS</h3>
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
              <span className="text-gray-400 hover:text-bronze transition-colors cursor-pointer font-oswald tracking-widest uppercase">DISCORD</span>
              <span className="text-gray-400 hover:text-bronze transition-colors cursor-pointer font-oswald tracking-widest uppercase">TWITTER</span>
              <span className="text-gray-400 hover:text-bronze transition-colors cursor-pointer font-oswald tracking-widest uppercase">INSTAGRAM</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
