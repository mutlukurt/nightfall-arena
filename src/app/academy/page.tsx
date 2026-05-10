import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";

export default function AcademyPage() {
  const lessons = [
    {
      title: "COMBAT BASICS",
      desc: "Learn the fundamentals of movement, auto-attacks, and ability management. Timing is everything in the Eclipse Fold.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      title: "LANE STRATEGY",
      desc: "Understand the roles of Top, Mid, and Bottom lanes. Learn how to manage minion waves and coordinate ganks with your team.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-10.5v.115c0 .474-.365.883-.83 1.032l-3.34 1.077a.75.75 0 01-.46 0l-3.34-1.077A1.073 1.073 0 006.25 5.365V5.25" />
        </svg>
      )
    },
    {
      title: "ITEMIZATION",
      desc: "Master the shop. Learn which items counter specific enemy builds and how to optimize your hero's power spikes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="relative h-[500px] mb-20 group overflow-hidden border border-white/10">
            <Image
              src="/images/academy-hero.png"
              alt="Academy"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24">
              <span className="text-bronze font-oswald tracking-[0.3em] mb-4">THE ACADEMY</span>
              <h1 className="text-5xl md:text-7xl font-oswald font-bold text-white mb-6 uppercase leading-tight">
                Master the <br /> <span className="text-bronze">Shadows</span>
              </h1>
              <p className="max-w-xl text-gray-300 font-inter text-lg leading-relaxed mb-8">
                The path to becoming a legend starts here. Our comprehensive guide will teach you everything from basic combat to advanced competitive strategies.
              </p>
              <div className="flex gap-4">
                <Button variant="primary">START LEARNING</Button>
                <Button variant="outline">WATCH TUTORIALS</Button>
              </div>
            </div>
          </div>

          <SectionTitle 
            title="CORE CURRICULUM" 
            subtitle="The three pillars of mastery in Nightfall Arena."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {lessons.map((lesson) => (
              <div key={lesson.title} className="bg-charcoal-light p-10 border border-white/5 hover:border-bronze/30 transition-all group">
                <div className="text-bronze mb-6 group-hover:scale-110 transition-transform origin-left">
                  {lesson.icon}
                </div>
                <h3 className="text-2xl font-oswald font-bold text-white mb-4 tracking-wider uppercase">{lesson.title}</h3>
                <p className="text-gray-400 font-inter leading-relaxed">
                  {lesson.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Video Section Placeholder */}
          <div className="mt-24 bg-bronze/5 border border-bronze/20 p-12 text-center rounded-sm">
            <h2 className="text-3xl font-oswald font-bold text-white mb-4 uppercase">Beginner's Video Guide</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Prefer watching? Check out our 5-minute crash course covering everything you need to know for your first match.
            </p>
            <div className="relative aspect-video max-w-4xl mx-auto bg-black border border-white/10 flex items-center justify-center group cursor-pointer overflow-hidden">
              <Image 
                src="/images/battlefield-bg.png" 
                alt="Video Preview" 
                fill 
                className="opacity-40 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="w-20 h-20 bg-bronze flex items-center justify-center rounded-full text-charcoal group-hover:scale-110 transition-transform z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
