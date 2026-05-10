import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionTitle 
            title="PRIVACY POLICY" 
            subtitle="Last updated: May 10, 2026"
          />

          <div className="mt-12 prose prose-invert prose-bronze max-w-none font-inter text-gray-400 leading-relaxed
            prose-h2:text-white prose-h2:font-oswald prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
            prose-strong:text-white prose-p:mb-6 prose-ul:mb-8 prose-li:mb-2">
            
            <p>Welcome to Nightfall Arena. Your privacy is critically important to us. This Privacy Policy describes how Mutlu Kurt and our affiliates collect, use, and share information in connection with your use of our website and game services.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact support. This includes:</p>
            <ul>
              <li>Account information (username, email, password)</li>
              <li>Transaction information (payment history, Solar Shard balance)</li>
              <li>Communication data (support tickets, community forum posts)</li>
            </ul>

            <h2>2. Automatically Collected Information</h2>
            <p>When you access our services, we automatically collect certain information about your device and gameplay, including:</p>
            <ul>
              <li>Log files (IP address, browser type, timestamps)</li>
              <li>Game data (match history, hero stats, play time)</li>
              <li>Device info (OS version, hardware specifications)</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, including:</p>
            <ul>
              <li>Providing matchmaking and game server connectivity</li>
              <li>Processing transactions and sending related info</li>
              <li>Developing new features and content for the Arena</li>
              <li>Protecting against cheating and unauthorized access</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access. However, no security system is impenetrable and we cannot guarantee the security of our database.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please reach out to us through our Support Portal.</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
