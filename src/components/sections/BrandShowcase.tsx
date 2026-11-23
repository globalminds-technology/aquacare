"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Droplets,
  ShieldCheck,
  Heart,
  Sparkles,
  Smartphone,
  Zap,
  Award,
  ArrowRight,
  Mouse,
} from "lucide-react";

interface BrandItem {
  id: string;
  name: string;
  trademark?: string;
  tagline?: string;
  subtitle: string;
  color: string;
  image: string;
  features: {
    icon: React.ReactNode;
    title: string;
  }[];
  ctaText: string;
  ctaLink: string;
}

const BRANDS_DATA: BrandItem[] = [
  {
    id: "kent",
    name: "KENT",
    tagline: "HOUSE OF PURITY",
    subtitle: "Most Trusted Mineral RO with Zero Water Wastage Technology.",
    color: "#00D2FF",
    image: "/images/brands/kent_purifier.png",
    features: [
      { icon: <Droplets className="w-5 h-5 text-[#00D2FF]" />, title: "Zero Water Wastage" },
      { icon: <ShieldCheck className="w-5 h-5 text-[#00D2FF]" />, title: "Multiple RO+UV+UF" },
      { icon: <Award className="w-5 h-5 text-[#00D2FF]" />, title: "100% Certified Purity" },
    ],
    ctaText: "Explore KENT",
    ctaLink: "#products",
  },
  {
    id: "pureit",
    name: "pureit",
    tagline: "by Unilever",
    subtitle: "Eco Water Saver RO. Eco Recovery with Mineral Charge.",
    color: "#0088FF",
    image: "/images/brands/pureit_purifier.png",
    features: [
      { icon: <Droplets className="w-5 h-5 text-[#0088FF]" />, title: "Saves 60% Water" },
      { icon: <ShieldCheck className="w-5 h-5 text-[#0088FF]" />, title: "Active Copper Charge" },
      { icon: <Sparkles className="w-5 h-5 text-[#0088FF]" />, title: "7-Stage Eco Filtration" },
    ],
    ctaText: "Explore Pureit",
    ctaLink: "#products",
  },
  {
    id: "aquaguard",
    name: "Aquaguard",
    trademark: "®",
    subtitle: "Advanced Purification. Healthier Tomorrow.",
    color: "#00B8E6",
    image: "/images/brands/aquaguard_purifier.png",
    features: [
      { icon: <Droplets className="w-5 h-5 text-[#00B8E6]" />, title: "RO + UV Purification" },
      { icon: <ShieldCheck className="w-5 h-5 text-[#00B8E6]" />, title: "Superior Protection" },
      { icon: <Heart className="w-5 h-5 text-[#00B8E6]" />, title: "Better Health" },
    ],
    ctaText: "Explore Products",
    ctaLink: "#products",
  },
  {
    id: "atomberg",
    name: "atomberg",
    tagline: "Why not?",
    subtitle: "Smart IoT Water Purifier with Real-time Mobile App Sync.",
    color: "#FFB800",
    image: "/images/brands/atomberg_purifier.png",
    features: [
      { icon: <Smartphone className="w-5 h-5 text-[#FFB800]" />, title: "Smart App Control" },
      { icon: <Zap className="w-5 h-5 text-[#FFB800]" />, title: "Live Real-Time TDS" },
      { icon: <ShieldCheck className="w-5 h-5 text-[#FFB800]" />, title: "Filter Health Alerts" },
    ],
    ctaText: "Explore Atomberg",
    ctaLink: "#products",
  },
  {
    id: "aosmith",
    name: "AO Smith",
    tagline: "Innovation has a name",
    subtitle: "Advanced 8-Stage Purification for 100% Baby-Safe Drinking Water.",
    color: "#00C853",
    image: "/images/brands/aosmith_purifier.png",
    features: [
      { icon: <Droplets className="w-5 h-5 text-[#00C853]" />, title: "8-Stage Filtration" },
      { icon: <ShieldCheck className="w-5 h-5 text-[#00C853]" />, title: "Baby-Safe Water" },
      { icon: <Award className="w-5 h-5 text-[#00C853]" />, title: "Patented SCMT Tech" },
    ],
    ctaText: "Explore AO Smith",
    ctaLink: "#products",
  },
];

export const BrandShowcase: React.FC = () => {
  // Start with Aquaguard (index 2) as default active center card matching the user's mockup image
  const [activeIndex, setActiveIndex] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? BRANDS_DATA.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === BRANDS_DATA.length - 1 ? 0 : curr + 1));
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
      className="relative min-h-[95vh] lg:min-h-[105vh] bg-[#020C17] flex flex-col justify-between overflow-hidden py-16 px-4 sm:px-6 select-none"
      style={{
        background: "radial-gradient(ellipse at 50% 15%, #08294A 0%, #031426 50%, #010811 100%)",
      }}
    >
      {/* 1. Deep Ocean Underwater Background Scene */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/brands/brands-chamber-bg.webp"
          alt="Underwater Brand Hall Chamber"
          fill
          className="object-cover object-center opacity-85 mix-blend-screen"
          priority
        />
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-[#00B8E6]/25 via-[#0077D9]/15 to-transparent blur-3xl" />
      </div>

      {/* Subtle Floating Ambient Air Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <span className="absolute top-[18%] left-[12%] w-4 h-4 rounded-full bg-white/40 blur-[1px] animate-float" />
        <span className="absolute top-[35%] left-[8%] w-6 h-6 rounded-full bg-cyan-300/30 blur-[1px] animate-float" style={{ animationDelay: "1s" }} />
        <span className="absolute top-[22%] right-[15%] w-5 h-5 rounded-full bg-white/30 blur-[1px] animate-float" style={{ animationDelay: "2s" }} />
        <span className="absolute top-[40%] right-[10%] w-7 h-7 rounded-full bg-cyan-400/25 blur-[1px] animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* 2. Top Minimal Indicator */}
      <div className="relative z-20 text-center max-w-2xl mx-auto pt-2">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#00B8E6]/10 border border-[#00B8E6]/30 text-[#00D2FF] text-xs font-bold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-ping" />
          AUTHORISED BRAND SHOWCASE
        </span>
      </div>

      {/* 3. Main ScrollTide Clutch 3D Stage */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-auto flex items-center justify-center">
        {/* Navigation Arrow Left */}
        <button
          onClick={prev}
          aria-label="Previous Brand"
          className="absolute left-2 sm:left-6 lg:left-12 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-[#0077D9]/80 border border-[#00B8E6]/40 hover:border-[#00D2FF] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(0,184,230,0.35)] cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={next}
          aria-label="Next Brand"
          className="absolute right-2 sm:right-6 lg:right-12 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-[#0077D9]/80 border border-[#00B8E6]/40 hover:border-[#00D2FF] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(0,184,230,0.35)] cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Perspective Track (Cards arrayed with clean 3D arc spacing, NO awkward overlap) */}
        <div
          className="relative w-full h-[520px] sm:h-[540px] flex items-center justify-center"
          style={{ perspective: "1400px" }}
        >
          {BRANDS_DATA.map((brand, index) => {
            const offset = index - activeIndex;
            const isActive = offset === 0;

            // Calculate precise 3D transform for ScrollTide Clutch Effect
            let transformStyle = "";
            let opacity = 0;
            let zIndex = 10;
            let isVisible = Math.abs(offset) <= 2;

            if (isActive) {
              transformStyle = "translateX(0px) translateZ(0px) rotateY(0deg) scale(1)";
              opacity = 1;
              zIndex = 25;
            } else if (offset === -1) {
              // Immediate left neighbor (e.g. pureit)
              transformStyle = "translateX(-320px) translateZ(-80px) rotateY(16deg) scale(0.85)";
              opacity = 0.78;
              zIndex = 18;
            } else if (offset === 1) {
              // Immediate right neighbor (e.g. atomberg)
              transformStyle = "translateX(320px) translateZ(-80px) rotateY(-16deg) scale(0.85)";
              opacity = 0.78;
              zIndex = 18;
            } else if (offset === -2) {
              // Far left (e.g. kent)
              transformStyle = "translateX(-580px) translateZ(-160px) rotateY(26deg) scale(0.72)";
              opacity = 0.55;
              zIndex = 12;
            } else if (offset === 2) {
              // Far right (e.g. aosmith)
              transformStyle = "translateX(580px) translateZ(-160px) rotateY(-26deg) scale(0.72)";
              opacity = 0.55;
              zIndex = 12;
            }

            if (!isVisible) return null;

            return (
              <div
                key={brand.id}
                onClick={() => setActiveIndex(index)}
                className={`absolute transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? "cursor-default" : "cursor-pointer hover:opacity-95"
                }`}
                style={{
                  transform: transformStyle,
                  opacity: opacity,
                  zIndex: zIndex,
                  transformStyle: "preserve-3d",
                }}
              >
                {isActive ? (
                  /* ========================================================= */
                  /* ACTIVE CENTER HERO CARD (Matches Mockup Image Exactly)   */
                  /* ========================================================= */
                  <div className="relative w-[340px] sm:w-[620px] lg:w-[740px] h-[480px] sm:h-[460px] rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#031D38]/85 via-[#04284C]/80 to-[#021A33]/85 backdrop-blur-2xl border-2 border-[#00D2FF]/80 shadow-[0_0_50px_rgba(0,184,230,0.45),inset_0_0_20px_rgba(0,210,255,0.2)] p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
                    {/* Top Edge Water Reflection Highlight */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent opacity-90" />

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center h-full">
                      {/* Left Side: Brand Typography, Tagline, Feature Badges & CTA */}
                      <div className="sm:col-span-6 space-y-4 text-left z-10 flex flex-col justify-center">
                        <div>
                          <h3 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white flex items-baseline">
                            <span>{brand.name}</span>
                            {brand.trademark && (
                              <span className="text-xl sm:text-2xl font-light ml-0.5 text-[#00D2FF]">
                                {brand.trademark}
                              </span>
                            )}
                          </h3>
                          {brand.tagline && (
                            <span className="block text-xs font-bold uppercase tracking-widest text-[#00D2FF] mt-0.5">
                              {brand.tagline}
                            </span>
                          )}
                          <p className="text-xs sm:text-sm text-[#DDF5FF]/85 mt-2 font-normal leading-relaxed max-w-xs">
                            {brand.subtitle}
                          </p>
                        </div>

                        {/* 3 Feature Capsules with Icons */}
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          {brand.features.map((feat, i) => (
                            <div
                              key={i}
                              className="flex flex-col items-center text-center p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                            >
                              <div className="w-9 h-9 rounded-full bg-[#00B8E6]/20 flex items-center justify-center mb-1.5">
                                {feat.icon}
                              </div>
                              <span className="text-[10px] font-semibold text-[#DDF5FF] leading-tight">
                                {feat.title}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Explore Products CTA Pill Button */}
                        <div className="pt-2">
                          <a
                            href={brand.ctaLink}
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-sans font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] hover:shadow-[0_0_30px_rgba(0,210,255,0.7)] hover:scale-105 active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,184,230,0.5)] group"
                          >
                            <span>{brand.ctaText}</span>
                            <div className="w-5 h-5 rounded-full bg-[#041A30] text-[#00D2FF] flex items-center justify-center transition-transform group-hover:translate-x-1">
                              <ArrowRight className="w-3 h-3" />
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Right Side: Purifier Visual with Water Splash on Pedestal */}
                      <div className="sm:col-span-6 relative h-full flex items-center justify-center">
                        {/* Illuminated Pedestal Glow */}
                        <div className="absolute bottom-6 w-52 h-16 bg-[#00D2FF]/30 rounded-full blur-xl pointer-events-none" />

                        {/* Purifier Cutout Visual */}
                        <div className="relative w-full h-[240px] sm:h-[320px] transition-transform duration-500 hover:scale-105">
                          <Image
                            src={brand.image}
                            alt={`${brand.name} Water Purifier on Pedestal`}
                            fill
                            className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,210,255,0.4)]"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ========================================================= */
                  /* FLANKING PERSPECTIVE SIDE CARDS (ScrollTide Clutch Arc)   */
                  /* ========================================================= */
                  <div className="relative w-[240px] sm:w-[270px] h-[380px] sm:h-[420px] rounded-3xl bg-gradient-to-b from-[#041D38]/80 to-[#021324]/80 backdrop-blur-xl border border-[#00B8E6]/40 p-5 flex flex-col justify-between items-center text-center shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-[#00D2FF] transition-all">
                    {/* Brand Header */}
                    <div className="pt-2">
                      <h4 className="font-sans font-black text-2xl tracking-tight text-white">
                        {brand.name}
                      </h4>
                      {brand.tagline && (
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#00D2FF] mt-0.5">
                          {brand.tagline}
                        </span>
                      )}
                    </div>

                    {/* Purifier Visual */}
                    <div className="relative w-full h-[190px] my-auto">
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        fill
                        className="object-contain filter drop-shadow-[0_10px_20px_rgba(0,184,230,0.3)]"
                      />
                    </div>

                    {/* Select Pill */}
                    <span className="text-[11px] font-semibold text-[#00D2FF] bg-[#00B8E6]/10 px-3.5 py-1 rounded-full border border-[#00B8E6]/30">
                      View Showcase &rarr;
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Bottom Scroll Indicator & Brand Indicator Dots */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-3 pb-2">
        {/* Brand Dots */}
        <div className="flex items-center gap-2">
          {BRANDS_DATA.map((brand, i) => (
            <button
              key={brand.id}
              onClick={() => setActiveIndex(i)}
              aria-label={`Select ${brand.name}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? "w-8 bg-[#00D2FF] shadow-[0_0_10px_#00D2FF]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Mouse Icon & "Scroll to Explore" */}
        <div className="flex flex-col items-center text-[#DDF5FF]/60 text-xs gap-1 pt-1 animate-pulse">
          <Mouse className="w-4 h-4 text-[#00D2FF]" />
          <span className="text-[11px] tracking-widest uppercase font-semibold">
            Scroll to Explore &darr;
          </span>
        </div>
      </div>
    </section>
  );
};
