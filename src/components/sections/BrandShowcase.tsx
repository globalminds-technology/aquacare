"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Droplets,
  Zap,
  Sparkles,
} from "lucide-react";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

interface BrandCard {
  id: string;
  name: string;
  tagline?: string;
  subtitle: string;
  purifierImage: string;
  badges: string[];
  ctaText: string;
  ctaLink: string;
}

const BRANDS_LIST: BrandCard[] = [
  {
    id: "kent",
    name: "KENT",
    tagline: "HOUSE OF PURITY",
    subtitle: "Most Trusted Mineral RO with Zero Water Wastage Technology.",
    purifierImage: "/images/brands/kent_brand.webp",
    badges: ["Zero Water Wastage", "RO + UV + UF", "100% Certified"],
    ctaText: "Explore KENT",
    ctaLink: "#products",
  },
  {
    id: "pureit",
    name: "pureit",
    tagline: "by Unilever",
    subtitle: "Eco Water Saver RO. Advanced Purification with Mineral Charge.",
    purifierImage: "/images/brands/pureit_brand.webp",
    badges: ["Eco Water Saver", "Mineral Charge", "Smart Auto-Alert"],
    ctaText: "Explore Pureit",
    ctaLink: "#products",
  },
  {
    id: "aquaguard",
    name: "Aquaguard®",
    tagline: "Advanced Purification. Healthier Tomorrow.",
    subtitle: "India's #1 Doctor Recommended Purifier with Active Copper Tech.",
    purifierImage: "/images/brands/aquaguard_brand.webp",
    badges: ["Active Copper", "Superior Protection", "Better Health"],
    ctaText: "Explore Products",
    ctaLink: "#products",
  },
  {
    id: "atomberg",
    name: "atomberg",
    tagline: "Why not?",
    subtitle: "Smart IoT Water Purifier with Real-time Mobile App & TDS Sync.",
    purifierImage: "/images/brands/atomberg_brand.webp",
    badges: ["Smart Mobile App", "Real-Time TDS", "BLDC Motor Pump"],
    ctaText: "Explore Atomberg",
    ctaLink: "#products",
  },
  {
    id: "aosmith",
    name: "AO Smith",
    tagline: "INNOVATION HAS A NAME",
    subtitle: "Advanced 8-Stage Purification for 100% Baby-Safe Drinking Water.",
    purifierImage: "/images/brands/aosmith_brand.webp",
    badges: ["8-Stage SCMT", "100% Baby-Safe", "Patented Tech"],
    ctaText: "Explore AO Smith",
    ctaLink: "#products",
  },
];

export const BrandShowcase: React.FC = () => {
  // Center card initially on Aquaguard (index 2)
  const [activeIndex, setActiveIndex] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? BRANDS_LIST.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === BRANDS_LIST.length - 1 ? 0 : curr + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="brands"
      ref={containerRef}
      className="relative min-h-[95vh] lg:min-h-[102vh] bg-[#020C17] flex flex-col justify-between overflow-hidden py-14 px-4 sm:px-6 select-none"
      style={{
        background: "radial-gradient(ellipse at 50% 15%, #08294A 0%, #031426 50%, #010811 100%)",
      }}
    >
      {/* 1. Pristine Underwater Hall Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/backgrounds/aqua-theme-bg.webp"
          alt="Clean Underwater Brand Hall Chamber"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Soft Ambient Overhead Spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-[#00D2FF]/20 via-[#0077D9]/10 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Ambient Floating Refractive Air Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <span className="absolute top-[18%] left-[12%] w-4 h-4 rounded-full bg-white/40 blur-[1px] animate-float" />
        <span className="absolute top-[35%] left-[8%] w-5 h-5 rounded-full bg-cyan-300/30 blur-[1px] animate-float" style={{ animationDelay: "1s" }} />
        <span className="absolute top-[22%] right-[15%] w-4 h-4 rounded-full bg-white/30 blur-[1px] animate-float" style={{ animationDelay: "2s" }} />
        <span className="absolute top-[40%] right-[10%] w-6 h-6 rounded-full bg-cyan-400/25 blur-[1px] animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* 2. Top Kicker Badge */}
      <div className="relative z-20 text-center max-w-2xl mx-auto pt-1">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00B8E6]/10 border border-[#00B8E6]/30 text-[#00D2FF] text-xs font-bold uppercase tracking-widest shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-ping" />
          03 — AUTHORISED BRAND SHOWCASE
        </span>
      </div>

      {/* 3. Main ScrollTide Clutch 3D Stage (Identical Size for Every Brand Card!) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-auto flex items-center justify-center">
        {/* Navigation Arrow Left */}
        <button
          onClick={prev}
          aria-label="Previous Brand"
          className="absolute left-1 sm:left-4 lg:left-8 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#031528]/85 hover:bg-[#0077D9] border border-[#00D2FF]/50 hover:border-[#00D2FF] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-[0_0_25px_rgba(0,210,255,0.4)] cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={next}
          aria-label="Next Brand"
          className="absolute right-1 sm:right-4 lg:right-8 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#031528]/85 hover:bg-[#0077D9] border border-[#00D2FF]/50 hover:border-[#00D2FF] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-[0_0_25px_rgba(0,210,255,0.4)] cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 3D Perspective Track */}
        <div
          className="relative w-full h-[530px] sm:h-[580px] flex items-center justify-center"
          style={{ perspective: "1500px" }}
        >
          {BRANDS_LIST.map((brand, index) => {
            const offset = index - activeIndex;
            const isActive = offset === 0;

            // ScrollTide Clutch 3D curved arc spacing
            let transformStyle = "";
            let opacity = 0;
            let zIndex = 10;
            let isVisible = Math.abs(offset) <= 2;

            if (isActive) {
              transformStyle = "translateX(0px) translateZ(0px) rotateY(0deg) scale(1.04)";
              opacity = 1;
              zIndex = 25;
            } else if (offset === -1) {
              // Immediate neighbor on left
              transformStyle = "translateX(-340px) translateZ(-70px) rotateY(16deg) scale(0.9)";
              opacity = 0.88;
              zIndex = 18;
            } else if (offset === 1) {
              // Immediate neighbor on right
              transformStyle = "translateX(340px) translateZ(-70px) rotateY(-16deg) scale(0.9)";
              opacity = 0.88;
              zIndex = 18;
            } else if (offset === -2) {
              // Far left
              transformStyle = "translateX(-610px) translateZ(-140px) rotateY(26deg) scale(0.78)";
              opacity = 0.65;
              zIndex = 12;
            } else if (offset === 2) {
              // Far right
              transformStyle = "translateX(610px) translateZ(-140px) rotateY(-26deg) scale(0.78)";
              opacity = 0.65;
              zIndex = 12;
            }

            if (!isVisible) return null;

            return (
              <div
                key={brand.id}
                onClick={() => setActiveIndex(index)}
                className={`absolute transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? "cursor-default" : "cursor-pointer hover:opacity-100"
                }`}
                style={{
                  transform: transformStyle,
                  opacity: opacity,
                  zIndex: zIndex,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* ========================================================= */}
                {/* UNIFIED TALL CURVED GLASS CARD                            */}
                {/* (Every Card Has The Exact Same Size, Full Content & 2K)   */}
                {/* ========================================================= */}
                <div
                  className={`relative w-[285px] sm:w-[325px] lg:w-[345px] h-[520px] sm:h-[570px] rounded-[32px] sm:rounded-[36px] overflow-hidden transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between select-none ${
                    isActive
                      ? "bg-gradient-to-b from-[#041D3B]/95 via-[#03182E]/90 to-[#010D1D]/98 border-2 border-[#00D2FF] shadow-[0_0_55px_rgba(0,210,255,0.7),inset_0_1px_2px_rgba(255,255,255,0.4)]"
                      : "bg-gradient-to-b from-[#03182E]/85 via-[#021224]/80 to-[#010914]/90 border border-[#00B8E6]/40 shadow-[0_15px_35px_rgba(0,0,0,0.65)] hover:border-[#00D2FF]"
                  }`}
                >
                  {/* Specular Top Glass Glint */}
                  <div className="absolute inset-x-6 top-1 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-[#00D2FF]/70 to-transparent pointer-events-none" />

                  {/* Top Header: Brand Title, Tagline & Subtitle */}
                  <div className="text-center space-y-1 relative z-10">
                    <div className="flex items-center justify-center gap-2">
                      {brand.id === "atomberg" && (
                        <div className="w-5 h-5 rounded-full bg-[#FFB800] text-black font-black text-[10px] flex items-center justify-center shadow-sm">
                          a
                        </div>
                      )}
                      <h3 className="font-sans font-black text-2xl sm:text-3xl tracking-tight text-white drop-shadow-md">
                        {brand.name}
                      </h3>
                    </div>
                    {brand.tagline && (
                      <span className="block text-[11px] font-bold uppercase tracking-widest text-[#00D2FF]">
                        {brand.tagline}
                      </span>
                    )}
                    <p className="text-[11px] text-[#DDF5FF]/75 leading-snug line-clamp-2 px-1 pt-0.5">
                      {brand.subtitle}
                    </p>
                  </div>

                  {/* Center Product Showcase: Purifier with Dynamic Water Glow */}
                  <div className="relative w-full h-[220px] sm:h-[250px] my-auto flex items-center justify-center z-10 group">
                    {/* Cyan Radial Glow Backdrop */}
                    <div className="absolute w-44 h-44 rounded-full bg-[#00D2FF]/20 blur-2xl pointer-events-none group-hover:bg-[#00D2FF]/30 transition-all" />

                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105 rounded-2xl overflow-hidden border border-[#00B8E6]/30 shadow-[0_0_20px_rgba(0,184,230,0.3)]">
                      <Image
                        src={brand.purifierImage}
                        alt={brand.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 350px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Feature Badges: 3 Pills (Visible on ALL cards!) */}
                  <div className="space-y-3 relative z-10">
                    <div className="grid grid-cols-3 gap-1.5 pt-1">
                      {brand.badges.map((badge, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex flex-col items-center justify-center text-center p-1.5 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#DDF5FF] text-[9px] sm:text-[10px] font-bold leading-tight"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF] mb-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">{badge}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA Button (Visible on ALL cards!) */}
                    <div className="pt-1">
                      <a
                        href={brand.ctaLink}
                        className={`w-full py-2.5 px-4 rounded-full font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isActive
                            ? "bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] text-[#020D1A] font-extrabold shadow-[0_0_20px_rgba(0,210,255,0.7)] hover:scale-105 active:scale-95"
                            : "bg-[#00D2FF]/20 hover:bg-[#00D2FF] text-[#00D2FF] hover:text-[#020D1A] border border-[#00D2FF]/40"
                        }`}
                      >
                        <span>{brand.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Bottom Scroll Indicator & Brand Selection Dots */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-3 pb-1">
        {/* Dots Indicator */}
        <div className="flex items-center gap-2">
          {BRANDS_LIST.map((brand, i) => (
            <button
              key={brand.id}
              onClick={() => setActiveIndex(i)}
              aria-label={`Select ${brand.name}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? "w-8 bg-[#00D2FF] shadow-[0_0_12px_#00D2FF]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Single Clean Mouse Icon & "Scroll to Explore" */}
        <ScrollIndicator targetId="categories" className="pt-1" />
      </div>
    </section>
  );
};
