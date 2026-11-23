"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Mouse,
  Droplets,
  ShieldCheck,
  Heart,
  Smartphone,
  Zap,
  Award,
} from "lucide-react";

interface BrandCard {
  id: string;
  name: string;
  tagline?: string;
  subtitle: string;
  color: string;
  cardImage: string;
  isWide?: boolean;
  ctaText: string;
  ctaLink: string;
}

const BRANDS_LIST: BrandCard[] = [
  {
    id: "kent",
    name: "KENT",
    tagline: "HOUSE OF PURITY",
    subtitle: "Most Trusted Mineral RO with Zero Water Wastage Technology.",
    color: "#00D2FF",
    cardImage: "/images/brands/full_card_kent_clean.png",
    ctaText: "Explore KENT",
    ctaLink: "#products",
  },
  {
    id: "pureit",
    name: "pureit",
    tagline: "by Unilever",
    subtitle: "Eco Water Saver RO. Advanced Purification with Mineral Charge.",
    color: "#0088FF",
    cardImage: "/images/brands/full_card_pureit_clean.png",
    ctaText: "Explore Pureit",
    ctaLink: "#products",
  },
  {
    id: "aquaguard",
    name: "Aquaguard®",
    tagline: "Advanced Purification. Healthier Tomorrow.",
    subtitle: "India's #1 Doctor Recommended Water Purifier with Active Copper Tech.",
    color: "#00B8E6",
    cardImage: "/images/brands/full_card_aquaguard_clean.png",
    isWide: true,
    ctaText: "Explore Products",
    ctaLink: "#products",
  },
  {
    id: "atomberg",
    name: "atomberg",
    tagline: "Why not?",
    subtitle: "Smart IoT Water Purifier with Real-time Mobile App & TDS Sync.",
    color: "#FFB800",
    cardImage: "/images/brands/full_card_atomberg_clean.png",
    ctaText: "Explore Atomberg",
    ctaLink: "#products",
  },
  {
    id: "aosmith",
    name: "AO Smith",
    tagline: "Innovation has a name",
    subtitle: "Advanced 8-Stage Purification for 100% Baby-Safe Drinking Water.",
    color: "#00C853",
    cardImage: "/images/brands/full_card_aosmith_clean.png",
    ctaText: "Explore AO Smith",
    ctaLink: "#products",
  },
];

export const BrandShowcase: React.FC = () => {
  // Aquaguard (index 2) is the initial active center card matching the user's mockup image
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
      className="relative min-h-[92vh] lg:min-h-[100vh] bg-[#020C17] flex flex-col justify-between overflow-hidden py-14 px-4 sm:px-6 select-none"
      style={{
        background: "radial-gradient(ellipse at 50% 15%, #08294A 0%, #031426 50%, #010811 100%)",
      }}
    >
      {/* 1. Pristine Underwater Hall Background (100% CLEAN - ZERO BAKED-IN CARDS!) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/brands/brands-pristine-hall.webp"
          alt="Clean Underwater Brand Hall Chamber"
          fill
          className="object-cover object-center opacity-95"
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

      {/* 2. Top Minimal Kicker Badge */}
      <div className="relative z-20 text-center max-w-2xl mx-auto pt-1">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#00B8E6]/10 border border-[#00B8E6]/30 text-[#00D2FF] text-xs font-bold uppercase tracking-widest shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-ping" />
          AUTHORISED BRAND SHOWCASE
        </span>
      </div>

      {/* 3. Main ScrollTide Clutch 3D Stage (Zero Background Overlap, High Quality Cards!) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-auto flex items-center justify-center">
        {/* Navigation Arrow Left */}
        <button
          onClick={prev}
          aria-label="Previous Brand"
          className="absolute left-1 sm:left-4 lg:left-8 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#031528]/80 hover:bg-[#0077D9] border border-[#00D2FF]/50 hover:border-[#00D2FF] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-[0_0_25px_rgba(0,210,255,0.4)] cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={next}
          aria-label="Next Brand"
          className="absolute right-1 sm:right-4 lg:right-8 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#031528]/80 hover:bg-[#0077D9] border border-[#00D2FF]/50 hover:border-[#00D2FF] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-[0_0_25px_rgba(0,210,255,0.4)] cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 3D Perspective Track */}
        <div
          className="relative w-full h-[490px] sm:h-[530px] flex items-center justify-center"
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
              transformStyle = "translateX(0px) translateZ(0px) rotateY(0deg) scale(1)";
              opacity = 1;
              zIndex = 25;
            } else if (offset === -1) {
              // Immediate neighbor on left
              transformStyle = "translateX(-390px) translateZ(-80px) rotateY(16deg) scale(0.88)";
              opacity = 0.85;
              zIndex = 18;
            } else if (offset === 1) {
              // Immediate neighbor on right
              transformStyle = "translateX(390px) translateZ(-80px) rotateY(-16deg) scale(0.88)";
              opacity = 0.85;
              zIndex = 18;
            } else if (offset === -2) {
              // Far left
              transformStyle = "translateX(-680px) translateZ(-160px) rotateY(26deg) scale(0.76)";
              opacity = 0.6;
              zIndex = 12;
            } else if (offset === 2) {
              // Far right
              transformStyle = "translateX(680px) translateZ(-160px) rotateY(-26deg) scale(0.76)";
              opacity = 0.6;
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
                {isActive && brand.isWide ? (
                  /* ========================================================= */
                  /* ACTIVE CENTER HERO CARD: AQUAGUARD WIDE PANORAMIC CARD   */
                  /* (2K Resolution Image with Real Interactive CTA Overlay)   */
                  /* ========================================================= */
                  <div className="relative w-[340px] sm:w-[620px] lg:w-[740px] aspect-[1065/645] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-[0_0_60px_rgba(0,184,230,0.55)] border-2 border-[#00D2FF]/85 group">
                    <Image
                      src={brand.cardImage}
                      alt="Aquaguard Brand Showcase"
                      fill
                      className="object-contain"
                      priority
                    />

                    {/* Interactive Clickable CTA Button Overlay */}
                    <div className="absolute bottom-[14%] left-[6%] sm:left-[5.5%] z-20">
                      <a
                        href={brand.ctaLink}
                        className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-sans font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] hover:shadow-[0_0_30px_rgba(0,210,255,0.8)] hover:scale-105 active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,184,230,0.6)]"
                      >
                        <span>Explore Products</span>
                        <div className="w-5 h-5 rounded-full bg-[#041A30] text-[#00D2FF] flex items-center justify-center">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </a>
                    </div>
                  </div>
                ) : (
                  /* ========================================================= */
                  /* FLANKING SIDE CARDS / ACTIVE TALL CARDS (ScrollTide Arc) */
                  /* ========================================================= */
                  <div
                    className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "w-[300px] sm:w-[340px] aspect-[266/576] shadow-[0_0_50px_rgba(0,210,255,0.6)] border-2 border-[#00D2FF]"
                        : "w-[200px] sm:w-[230px] aspect-[266/576] shadow-[0_15px_35px_rgba(0,0,0,0.6)] border border-[#00B8E6]/40 hover:border-[#00D2FF]"
                    }`}
                  >
                    <Image
                      src={brand.cardImage}
                      alt={brand.name}
                      fill
                      className="object-contain"
                      priority
                    />

                    {/* Interactive CTA overlay when tall card is active */}
                    {isActive && (
                      <div className="absolute bottom-6 inset-x-4 flex justify-center z-20">
                        <a
                          href={brand.ctaLink}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-bold text-xs text-white bg-gradient-to-r from-[#00D2FF] to-[#0077D9] shadow-lg hover:scale-105 transition-all"
                        >
                          <span>{brand.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
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
        <div className="flex flex-col items-center text-[#DDF5FF]/60 text-xs gap-1 pt-0.5 animate-pulse">
          <Mouse className="w-4 h-4 text-[#00D2FF]" />
          <span className="text-[10px] tracking-widest uppercase font-semibold">
            Scroll to Explore &darr;
          </span>
        </div>
      </div>
    </section>
  );
};
