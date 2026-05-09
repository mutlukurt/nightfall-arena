"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./Button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          <span className="text-2xl font-oswald font-bold tracking-widest text-white">
            NIGHTFALL <span className="text-bronze">ARENA</span>
          </span>
        </Link>

        {/* Center Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {["GAME", "HEROES", "NEWS", "COMMUNITY", "SUPPORT"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
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
          <button className="lg:hidden text-white">
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
  );
};
