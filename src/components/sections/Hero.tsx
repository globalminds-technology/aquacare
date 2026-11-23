"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Truck, Star } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[92vh] pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center overflow-hidden bg-[#031427]"
    >
      {/* 1. Cinematic Photorealistic Background (Dispenser pouring into glass with bubbles & indoor plant) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero/hero_kitchen_clean_2k.webp"
          alt="Pure water. Better living. - Aqua Care Shop Chennai"
          fill
          priority
          quality={95}
          className="object-cover object-right lg:object-center opacity-95"
        />

        {/* Ambient Dark Cyan Vignette on Left Side for Pristine Text Contrast */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#031427]/95 via-[#031427]/75 to-transparent pointer-events-none" />

        {/* Seamless Top & Bottom edge fade into page background */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#020D1A] via-[#020D1A]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020D1A] to-transparent pointer-events-none" />
      </div>

      {/* 2. Hero Content Container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl space-y-6 text-left">
          {/* Top Kicker */}
          <div className="inline-flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#DDF5FF]/90">
              PURE WATER &bull; TRUSTED SINCE 2008
            </span>
          </div>

          {/* Master Headline: Serif Typography */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-[1.05] tracking-tight drop-shadow-lg">
            Pure water. <br />
            <span className="italic text-[#8CE8FF] font-light">Better living.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#DDF5FF]/90 max-w-lg leading-relaxed font-sans pt-1">
            Chennai&apos;s trusted destination for genuine water purifiers at prices lower than online.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
            {/* Primary Phone Button (Matches the light cyan pill in the reference visual) */}
            <a
              href="tel:+916383321623"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-[#B2EBF2] hover:bg-white text-[#003B5C] font-mono font-bold text-xs sm:text-sm tracking-wider shadow-[0_0_30px_rgba(178,235,242,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#003B5C]" />
              <span>CALL +91 63833 21623</span>
              <ArrowRight className="w-4 h-4 text-[#003B5C]" />
            </a>

            {/* Secondary Explore Brands Button */}
            <a
              href="#brands"
              className="inline-flex items-center gap-2 px-5 sm:px-7 py-3.5 rounded-full bg-[#031C38]/85 hover:bg-[#00D2FF]/20 border border-[#00D2FF]/40 text-white font-sans font-bold text-xs sm:text-sm shadow-sm hover:border-[#00D2FF] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer backdrop-blur-md"
            >
              <span>Explore Brands</span>
            </a>
          </div>

          {/* Trust Value Strip */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#DDF5FF]/85">
            <div className="flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
              <span>100% Genuine Brands</span>
            </div>
            <span className="text-white/30 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5 font-semibold">
              <Truck className="w-4 h-4 text-[#00D2FF]" />
              <span>Free Doorstep Setup</span>
            </div>
            <span className="text-white/30 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1 font-semibold text-[#FFB800]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-white">4.9/5 Rating</span>
              <span className="text-[#DDF5FF]/70">(1,450+ Reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
