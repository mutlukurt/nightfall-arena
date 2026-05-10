import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionTitle 
            title="TERMS OF USE" 
            subtitle="Last updated: May 10, 2026"
          />

          <div className="mt-12 prose prose-invert prose-bronze max-w-none font-inter text-gray-400 leading-relaxed
            prose-h2:text-white prose-h2:font-oswald prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
            prose-strong:text-white prose-p:mb-6 prose-ul:mb-8 prose-li:mb-2">
            
            <p>By accessing or using Nightfall Arena, you agree to be bound by these Terms of Use. If you do not agree to all of these terms, do not use our services.</p>

            <h2>1. License to Use</h2>
            <p>We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the service for your personal, non-commercial use, subject to these Terms.</p>

            <h2>2. User Accounts</h2>
            <p>You must maintain the security of your account and promptly notify us if you discover or suspect that someone has accessed your account without permission. You are responsible for all activities that occur in connection with your account.</p>

            <h2>3. Code of Conduct</h2>
            <p>To keep the Arena fair and enjoyable for everyone, you agree not to:</p>
            <ul>
              <li>Use cheats, automation software (bots), hacks, or any other unauthorized third-party software.</li>
              <li>Harass, threaten, or impersonate other players.</li>
              <li>Exploit game bugs for competitive advantage.</li>
              <li>Sell or trade your account for real-world currency.</li>
            </ul>

            <h2>4. Virtual Goods</h2>
            <p>Nightfall Arena may include virtual currency (Solar Shards) and virtual goods (Skins). You understand that you do not "own" these items, but rather have a limited license to use them within the game service.</p>

            <h2>5. Termination</h2>
            <p>We reserve the right to terminate or suspend your access to the service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or us.</p>

            <h2>6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, Nightfall Arena and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages.</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
