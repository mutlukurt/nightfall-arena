"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./Button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["GAME", "ACADEMY", "HEROES", "NEWS", "COMMUNITY", "SUPPORT"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b backdrop-blur-sm ${
          isScrolled
            ? "bg-charcoal/90 py-3 border-white/10"
            : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-bronze transform rotate-45 border border-white/20 transition-transform group-hover:rotate-180 duration-700" />
            <span className="text-xl sm:text-2xl font-oswald font-bold tracking-widest text-white">
              NIGHTFALL <span className="text-bronze">ARENA</span>
            </span>
          </Link>

          {/* Center Nav (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-oswald tracking-widest text-gray-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bronze transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right CTA */}
          <div className="flex items-center space-x-4">
            <Button variant="primary" className="hidden sm:block">
              DOWNLOAD FOR FREE
            </Button>
            <button 
              className="lg:hidden text-white p-2 hover:text-bronze transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-charcoal transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-bronze transform rotate-45 border border-white/20" />
              <span className="text-2xl font-oswald font-bold tracking-widest text-white">
                NIGHTFALL <span className="text-bronze">ARENA</span>
              </span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-4xl font-oswald font-bold tracking-widest text-white hover:text-bronze transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="mt-auto pb-10">
            <Button variant="primary" className="w-full py-4 text-lg">
              DOWNLOAD FOR FREE
            </Button>
            <p className="text-gray-500 text-center mt-6 text-xs uppercase tracking-widest">
              Join the battle in the Eclipse Fold
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
