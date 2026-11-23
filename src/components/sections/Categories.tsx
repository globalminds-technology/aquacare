"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Filter } from "lucide-react";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export const CATEGORIES = [
  {
    id: "ro",
    name: "RO Water Purifiers",
    slug: "ro-purifiers",
    description: "Reverse Osmosis technology engineered for high TDS groundwater & hard borewell water in Chennai.",
    cardImage: "/images/categories/ro_card_exact.webp",
    itemCount: 24,
    cta: "Explore RO Purifiers",
    badge: "High TDS Specialists",
  },
  {
    id: "uv",
    name: "UV Water Purifiers",
    slug: "uv-purifiers",
    description: "Ultra Violet germicidal disinfection eliminating 99.99% of bacteria, viruses, and waterborne pathogens.",
    cardImage: "/images/categories/uv_card_exact.webp",
    itemCount: 18,
    cta: "Explore UV Purifiers",
    badge: "Disinfection Tech",
  },
  {
    id: "uf",
    name: "UF Purifiers",
    slug: "uf-purifiers",
    description: "Ultra Filtration zero-electricity gravity purifiers that preserve natural essential mineral balance.",
    cardImage: "/images/categories/uf_card_exact.webp",
    itemCount: 12,
    cta: "Explore UF Purifiers",
    badge: "Zero Power Needed",
  },
  {
    id: "alkaline",
    name: "Alkaline Purifiers",
    slug: "alkaline-purifiers",
    description: "Active hydrogen and essential mineral cartridge producing pH 8.5+ antioxidant alkaline hydration.",
    cardImage: "/images/categories/alkaline_card_exact.webp",
    itemCount: 15,
    cta: "Explore Alkaline",
    badge: "pH 8.5+ Hydration",
  },
  {
    id: "dispensers",
    name: "Water Dispensers",
    slug: "water-dispensers",
    description: "Instant hot, ambient & ice-cold purified water dispensing machines for modern homes and corporate offices.",
    cardImage: "/images/categories/dispenser_card_exact.webp",
    itemCount: 9,
    cta: "Explore Dispensers",
    badge: "Hot, Cold & Normal",
  },
  {
    id: "filters",
    name: "Filters & Spares",
    slug: "filters-accessories",
    description: "Original certified sediment filters, carbon blocks, booster pumps, and genuine mineral cartridges.",
    cardImage: "/images/categories/filters_card_exact.webp",
    itemCount: 32,
    cta: "Explore Spares",
    badge: "100% Genuine Spares",
  },
];

export const Categories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardStep, setCardStep] = useState(315);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const updateStep = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setCardStep(250);
        } else if (window.innerWidth < 1024) {
          setCardStep(285);
        } else {
          setCardStep(315);
        }
      }
    };
    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? CATEGORIES.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === CATEGORIES.length - 1 ? 0 : curr + 1));
  };

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  const activeCategory = CATEGORIES[activeIndex];

  return (
    <section
      id="categories"
      className="py-20 sm:py-24 relative overflow-hidden bg-[#020D1A] select-none"
      style={{
        background: "radial-gradient(ellipse at 50% 30%, #062b54 0%, #03162a 55%, #020D1A 100%)",
      }}
    >
      {/* Soft Ambient Cyan Lighting Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[450px] bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#0077D9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00D2FF]">
              04 — EXPLORE WATER PURIFIERS
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white mt-1">
              Shop by Purifier Type
            </h2>
            <p className="text-sm text-[#DDF5FF]/80 mt-2 max-w-xl">
              Choose the exact purification technology suited for your water source, TDS levels, and family needs.
            </p>
          </div>

          <a
            href="#products"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00D2FF] hover:text-white mt-4 sm:mt-0 transition-colors group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* ========================================================================= */}
        {/* ScrollTide C-Clutch Movement Stage (Side-by-Side Track, Zero Overlapping)  */}
        {/* ========================================================================= */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[470px] sm:h-[530px] lg:h-[560px] flex items-center justify-center overflow-hidden my-4"
        >
          {/* Navigation Arrow Left */}
          <button
            onClick={prev}
            aria-label="Previous Category"
            className="absolute left-2 sm:left-4 lg:left-8 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#031528]/85 hover:bg-[#0077D9] border border-[#00D2FF]/50 hover:border-[#00D2FF] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-[0_0_25px_rgba(0,210,255,0.4)] cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Arrow Right */}
          <button
            onClick={next}
            aria-label="Next Category"
            className="absolute right-2 sm:right-4 lg:right-8 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#031528]/85 hover:bg-[#0077D9] border border-[#00D2FF]/50 hover:border-[#00D2FF] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-[0_0_25px_rgba(0,210,255,0.4)] cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* C-Clutch Non-Overlapping Moving Cards Stage */}
          <div className="relative w-full h-full flex items-center justify-center">
            {CATEGORIES.map((cat, index) => {
              // Calculate horizontal distance relative to active index
              const offset = index - activeIndex;
              const isActive = offset === 0;

              // Card spacing: width is ~280px + gap of ~32px = 312px spacing per index
              // Cards NEVER overlap because spacing is strictly greater than card width
              // On desktop: 310px, on tablet: 280px, on mobile: 240px
              return (
                <div
                  key={cat.id}
                  onClick={() => setActiveIndex(index)}
                  className="absolute top-1/2 -translate-y-1/2 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    // Exact non-overlapping horizontal slide transform with c-clutch fluid curves
                    transform: `translate(-50%, -50%) translateX(${offset * cardStep}px) scale(${
                      isActive ? 1.05 : Math.abs(offset) === 1 ? 0.93 : 0.86
                    })`,
                    opacity: isActive ? 1 : Math.abs(offset) === 1 ? 0.82 : 0.55,
                    zIndex: isActive ? 20 : 15 - Math.abs(offset),
                    pointerEvents: "auto",
                  }}
                >
                  {/* Category Card (Exact 345x543 Aspect Ratio) */}
                  <div
                    className={`relative w-[235px] sm:w-[265px] lg:w-[285px] aspect-[345/543] rounded-[28px] overflow-hidden transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "drop-shadow-[0_20px_45px_rgba(0,210,255,0.85)]"
                        : "drop-shadow-[0_10px_25px_rgba(0,184,230,0.3)] hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={cat.cardImage}
                      alt={cat.name}
                      fill
                      sizes="300px"
                      className="object-contain"
                      priority={Math.abs(offset) <= 1}
                    />

                    {/* Active Card Subtle Specular Glint */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/15 opacity-60 pointer-events-none rounded-[28px]" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Category Information Banner & Action */}
        <div className="mt-4 sm:mt-6 max-w-xl mx-auto text-center space-y-3 bg-[#031B36]/80 backdrop-blur-xl border border-[#00B8E6]/30 rounded-3xl p-5 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40">
              {activeCategory.badge}
            </span>
            <span className="text-xs font-semibold text-[#DDF5FF]/70">
              {activeCategory.itemCount} Models in Stock
            </span>
          </div>

          <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
            {activeCategory.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#DDF5FF]/80 leading-relaxed max-w-md mx-auto">
            {activeCategory.description}
          </p>

          <div className="pt-2 flex items-center justify-center">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-sans font-extrabold text-xs sm:text-sm text-[#020D1A] bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] shadow-[0_0_20px_rgba(0,210,255,0.6)] hover:shadow-[0_0_35px_rgba(0,210,255,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>{activeCategory.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Pagination Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveIndex(i)}
              aria-label={`Select ${cat.name}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? "w-8 bg-[#00D2FF] shadow-[0_0_12px_#00D2FF]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Scroll to Explore Next Section */}
        <ScrollIndicator targetId="products" className="pt-8" />
      </div>
    </section>
  );
};
