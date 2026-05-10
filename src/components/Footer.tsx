"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./Button";

export const Footer = () => {
  return (
    <footer className="bg-charcoal pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Support Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-oswald font-bold text-white mb-4 uppercase tracking-wider">NIGHTFALL GUIDE</h4>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              New to the arena? Learn the basics of combat, lanes, and items in our comprehensive beginner's academy.
            </p>
            <Link href="/game" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto">VISIT THE ACADEMY</Button>
            </Link>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-xl font-oswald font-bold text-white mb-4 uppercase tracking-wider">FIND ANSWERS</h4>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Have questions about gameplay mechanics, account security, or technical requirements?
            </p>
            <Link href="/support#faq" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto">VIEW OUR FAQ</Button>
            </Link>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-xl font-oswald font-bold text-white mb-4 uppercase tracking-wider">GET HELP</h4>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Our support team is available 24/7 to assist with any issues you might encounter in the Fold.
            </p>
            <Link href="/support#ticket" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto">OPEN A TICKET</Button>
            </Link>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-600 transform rotate-45 border border-white/10" />
            <span className="text-xl font-oswald font-bold tracking-widest text-white/50">
              NIGHTFALL ARENA
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600 text-xs uppercase tracking-[0.2em]">
              © 2026 NIGHTFALL ARENA. DEVELOPED BY MUTLU KURT. MIT LICENSED.
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="#" className="text-gray-500 hover:text-white text-[10px] transition-colors">PRIVACY POLICY</Link>
              <span className="text-gray-800">|</span>
              <Link href="#" className="text-gray-500 hover:text-white text-[10px] transition-colors">TERMS OF USE</Link>
            </div>
          </div>

          {/* Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 group text-gray-500 hover:text-white transition-colors"
          >
            <span className="text-xs font-oswald uppercase tracking-widest">TOP</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-bronze transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
