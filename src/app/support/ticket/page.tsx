import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function TicketPage() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/support" className="text-bronze font-oswald text-sm tracking-widest mb-8 inline-block hover:translate-x-[-8px] transition-transform">
            ← BACK TO SUPPORT
          </Link>

          <SectionTitle 
            title="SUBMIT A TICKET" 
            subtitle="Describe your issue in detail and our team will get back to you within 24 hours."
          />

          <form className="mt-12 space-y-8 bg-charcoal-light p-10 border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-oswald tracking-widest text-gray-500 uppercase">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-charcoal border border-white/10 p-4 text-white font-inter focus:border-bronze outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-oswald tracking-widest text-gray-500 uppercase">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-charcoal border border-white/10 p-4 text-white font-inter focus:border-bronze outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-oswald tracking-widest text-gray-500 uppercase">Issue Category</label>
              <select className="w-full bg-charcoal border border-white/10 p-4 text-white font-inter focus:border-bronze outline-none transition-colors appearance-none">
                <option>Account & Security</option>
                <option>Billing & Store</option>
                <option>Technical Issue</option>
                <option>Bug Report</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-oswald tracking-widest text-gray-500 uppercase">Subject</label>
              <input 
                type="text" 
                className="w-full bg-charcoal border border-white/10 p-4 text-white font-inter focus:border-bronze outline-none transition-colors"
                placeholder="Brief summary of your issue"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-oswald tracking-widest text-gray-500 uppercase">Description</label>
              <textarea 
                rows={6}
                className="w-full bg-charcoal border border-white/10 p-4 text-white font-inter focus:border-bronze outline-none transition-colors resize-none"
                placeholder="Please provide as much detail as possible..."
              />
            </div>

            <div className="pt-4">
              <Button variant="primary" className="w-full py-4">SUBMIT TICKET</Button>
            </div>
            
            <p className="text-center text-[10px] text-gray-600 font-inter uppercase tracking-[0.2em]">
              By submitting this ticket, you agree to our terms of service and privacy policy.
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
