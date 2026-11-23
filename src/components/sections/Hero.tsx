"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Award, Droplets } from "lucide-react";

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
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-[100vh] pt-28 sm:pt-36 pb-20 sm:pb-28 flex items-center overflow-hidden bg-[#020D1A]"
      style={{
        background: "radial-gradient(ellipse at 70% 35%, #062b54 0%, #03162a 50%, #020D1A 100%)",
      }}
    >
      {/* Soft Ambient Cyan Lighting behind Purifier Showcase */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#00D2FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#0077D9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Typography & CTAs (5 Columns) */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 text-center lg:text-left z-20">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#031E3B]/80 backdrop-blur-md border border-[#00D2FF]/40 shadow-sm text-xs sm:text-sm font-semibold text-[#00D2FF]">
              <Sparkles className="w-4 h-4 text-[#00D2FF] animate-pulse" />
              <span>Chennai's Leading Destination for</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-sans font-black text-4xl sm:text-6xl xl:text-6xl tracking-tight text-white leading-[1.08] drop-shadow-md">
                Water <span className="aqua-gradient-text">Purifiers</span>
              </h1>
              <p className="text-lg sm:text-xl xl:text-2xl font-bold text-[#00D2FF] tracking-tight drop-shadow">
                at Lower Prices Than Amazon & Flipkart
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-[#DDF5FF]/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience ultra-pure alkaline drinking water engineered for Chennai’s groundwater and metro supply. 100% genuine factory-sealed purifiers with guaranteed lower prices and same-day certified technician installation.
            </p>

            {/* Key Micro-Pill Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
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
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-sans font-bold text-sm text-[#020D1A] bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] shadow-[0_0_25px_rgba(0,184,230,0.5)] hover:shadow-[0_0_35px_rgba(0,210,255,0.8)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group font-extrabold"
              >
                <span>Explore Purifiers</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#quiz"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-sans font-semibold text-sm text-white bg-[#031C38]/80 hover:bg-[#042850]/90 border border-[#00D2FF]/40 shadow-sm backdrop-blur-md hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Droplets className="w-4 h-4 text-[#00D2FF]" />
                <span>Find My Purifier</span>
              </a>
            </div>

            {/* Live Trust Badges */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#DDF5FF]/75">
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

          {/* Right Column: Hero Purifier Showcase (7 Columns - Expanded & Even Bigger!) */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center z-10">
            {/* 3D Water Purifier Container with Large Aspect Ratio */}
            <div
              className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl aspect-[1024/682] p-1 flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`,
              }}
            >
              {/* Product Visual using new high-res transparent purifier cutout with splashes */}
              <div className="relative w-full h-full filter drop-shadow-[0_20px_50px_rgba(0,184,230,0.38)] transition-transform duration-500 animate-float">
                <Image
                  src="/images/hero/aqua-purifier-hero.png"
                  alt="Aqua Care Shop Smart Water Purifier with Crystal Water Splash"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Floating Quality Tag Top Right */}
              <div className="absolute top-2 right-2 sm:right-6 bg-[#031C38]/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-aqua-md border border-[#00D2FF]/40 flex items-center gap-2 animate-float">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-[#DDF5FF]/70 font-medium">Purification Tech</span>
                  <span className="text-xs font-bold text-white">99.9% Pure Alkaline</span>
                </div>
              </div>

              {/* Floating Price Guarantee Tag Bottom Left */}
              <div
                className="absolute bottom-2 left-2 sm:left-6 bg-[#031C38]/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-aqua-md border border-[#00D2FF]/40 flex items-center gap-2.5 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-8 h-8 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] flex items-center justify-center font-bold text-xs border border-[#00D2FF]/40">
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
