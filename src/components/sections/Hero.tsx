"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Award, Droplets } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] pt-32 pb-24 flex items-center overflow-hidden bg-[#020D1A]"
    >
      {/* 1. High-Res Theme Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/backgrounds/aqua-theme-bg.webp"
          alt="Underwater Theme Background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Soft Ambient Overlay for Perfect Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020D1A]/50 via-transparent to-[#020D1A]/80 pointer-events-none" />
      </div>

      {/* Dynamic Water Animation Canvas */}
      <HeroCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#031E3B]/80 backdrop-blur-md border border-[#00D2FF]/40 shadow-sm text-xs sm:text-sm font-semibold text-[#00D2FF]">
              <Sparkles className="w-4 h-4 text-[#00D2FF] animate-pulse" />
              <span>Chennai's Leading Destination for</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-sans font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white leading-[1.08] drop-shadow-md">
                Water <span className="aqua-gradient-text">Purifiers</span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-[#00D2FF] tracking-tight drop-shadow">
                at Lower Prices Than Amazon & Flipkart
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-[#DDF5FF]/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience ultra-pure alkaline drinking water engineered for Chennai’s groundwater and metro supply. 100% genuine factory-sealed purifiers with guaranteed lower prices and same-day certified technician installation.
            </p>

            {/* Key Micro-Pill Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#031C38]/80 text-[#DDF5FF] border border-[#00B8E6]/30 backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF]" /> Direct Brand Savings
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#031C38]/80 text-[#DDF5FF] border border-[#00B8E6]/30 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" /> Free Doorstep Setup
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#031C38]/80 text-[#DDF5FF] border border-[#00B8E6]/30 backdrop-blur-md">
                <Award className="w-3.5 h-3.5 text-[#00D2FF]" /> 1–2 Year Brand Warranty
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-sans font-bold text-sm text-white bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] shadow-[0_0_25px_rgba(0,184,230,0.5)] hover:shadow-[0_0_35px_rgba(0,210,255,0.8)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Purifiers</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#quiz"
                className="w-full sm:w-auto px-7 py-4 rounded-full font-sans font-semibold text-sm text-white bg-[#031C38]/80 hover:bg-[#042850]/90 border border-[#00D2FF]/40 shadow-sm backdrop-blur-md hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Droplets className="w-4 h-4 text-[#00D2FF]" />
                <span>Find My Purifier</span>
              </a>
            </div>

            {/* Live Trust Badges */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#DDF5FF]/75">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold text-white">4,800+</span> Purifiers Installed in Chennai
              </div>
              <div>&bull;</div>
              <div className="flex items-center gap-1 font-semibold text-white">
                <span>⭐ 4.9/5</span> (1,450+ Reviews)
              </div>
            </div>
          </div>

          {/* Right Column: Hero Purifier Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Soft Ambient Light Behind Purifier */}
            <div className="absolute inset-0 bg-radial-gradient from-[#00D2FF]/30 via-transparent to-transparent rounded-full filter blur-3xl pointer-events-none" />

            {/* 3D Water Purifier Container */}
            <div
              className="relative w-full max-w-lg aspect-[4/5] p-2 flex flex-col items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
              }}
            >
              {/* Product Visual using aqua-purifier-hero.png */}
              <div className="relative w-full h-full filter drop-shadow-[0_25px_45px_rgba(0,184,230,0.35)] transition-transform duration-500 animate-float">
                <Image
                  src="/images/hero/aqua-purifier-hero.png"
                  alt="Aqua Care Shop Premium Smart Water Purifier with Flowing Clean Water"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Floating Quality Tag Top Right */}
              <div className="absolute top-4 right-2 sm:right-4 bg-[#031C38]/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-aqua-md border border-[#00D2FF]/40 flex items-center gap-2 animate-float">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-[#DDF5FF]/70 font-medium">Purification Tech</span>
                  <span className="text-xs font-bold text-white">99.9% Pure Alkaline</span>
                </div>
              </div>

              {/* Floating Price Guarantee Tag Bottom Left */}
              <div
                className="absolute bottom-6 left-2 sm:left-4 bg-[#031C38]/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-aqua-md border border-[#00D2FF]/40 flex items-center gap-2.5 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-8 h-8 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] flex items-center justify-center font-bold text-xs">
                  ₹
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-[#00D2FF] font-bold uppercase tracking-wider">
                    Best Price Guarantee
                  </span>
                  <span className="text-xs font-bold text-white">Save up to 27% vs Market</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
