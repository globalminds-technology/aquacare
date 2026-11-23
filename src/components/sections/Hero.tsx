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
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-[#DDF5FF]/40 via-[#F7FCFF] to-white"
    >
      {/* Dynamic Water Animation Canvas */}
      <HeroCanvas />

      {/* Background Water Droplet Accents */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#00B8E6]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0077D9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00B8E6]/30 shadow-sm text-xs sm:text-sm font-semibold text-[#0077D9]">
              <Sparkles className="w-4 h-4 text-[#00B8E6] animate-pulse" />
              <span>Chennai's Leading Destination for</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-sans font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-[#073B67] leading-[1.08]">
                Water <span className="aqua-gradient-text">Purifiers</span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-[#0077D9]/90 tracking-tight">
                at Lower Prices Than Amazon & Flipkart
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience ultra-pure alkaline drinking water engineered for Chennai’s groundwater and metro supply. 100% genuine products with guaranteed lower prices and same-day certified technician installation.
            </p>

            {/* Key Micro-Pill Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#DDF5FF] text-[#073B67] border border-[#00B8E6]/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0077D9]" /> Direct Brand Savings
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#DDF5FF] text-[#073B67] border border-[#00B8E6]/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0077D9]" /> Free Doorstep Setup
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#DDF5FF] text-[#073B67] border border-[#00B8E6]/20">
                <Award className="w-3.5 h-3.5 text-[#0077D9]" /> 1–2 Year Brand Warranty
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-sans font-bold text-sm text-white bg-gradient-to-r from-[#0077D9] via-[#0099E6] to-[#00B8E6] shadow-aqua-md hover:shadow-aqua-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Purifiers</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#quiz"
                className="w-full sm:w-auto px-7 py-4 rounded-full font-sans font-semibold text-sm text-[#073B67] bg-white hover:bg-[#DDF5FF] border border-[#00B8E6]/30 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Droplets className="w-4 h-4 text-[#0077D9]" />
                <span>Find My Purifier</span>
              </a>
            </div>

            {/* Live Trust Badges */}
            <div className="pt-4 border-t border-[#DDF5FF] flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-semibold text-[#073B67]">4,800+</span> Purifiers Installed in Chennai
              </div>
              <div>&bull;</div>
              <div className="flex items-center gap-1 font-semibold text-[#073B67]">
                <span>⭐ 4.9/5</span> (1,450+ Reviews)
              </div>
            </div>
          </div>

          {/* Right Column: 3D Living Water Purifier Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Glass Platform */}
            <div
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-6 flex flex-col items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
              }}
            >
              {/* Purifier Hero Image with living water stream */}
              <div className="relative w-full h-full filter drop-shadow-[0_20px_35px_rgba(0,119,217,0.25)]">
                <Image
                  src="/images/hero/purifier-hero.webp"
                  alt="Premium Smart Water Purifier with Flowing Clean Water"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Floating Feature Tag Top Right */}
              <div className="absolute top-4 right-2 sm:right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-aqua-md border border-[#DDF5FF] flex items-center gap-2 animate-float">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-gray-500 font-medium">Water Quality</span>
                  <span className="text-xs font-bold text-[#073B67]">99.9% Pure Alkaline</span>
                </div>
              </div>

              {/* Floating Feature Tag Bottom Left */}
              <div
                className="absolute bottom-6 left-2 sm:left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-aqua-md border border-[#DDF5FF] flex items-center gap-2.5 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-8 h-8 rounded-full bg-[#DDF5FF] text-[#0077D9] flex items-center justify-center font-bold text-xs">
                  ₹
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-[#0077D9] font-bold uppercase tracking-wider">
                    Best Price Guarantee
                  </span>
                  <span className="text-xs font-bold text-[#073B67]">Save up to 27% vs Market</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

