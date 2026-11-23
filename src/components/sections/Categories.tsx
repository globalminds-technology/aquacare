import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export const CATEGORIES = [
  {
    id: "ro",
    name: "RO Water Purifiers",
    slug: "ro-purifiers",
    description: "Reverse Osmosis for high TDS groundwater & borewell water",
    image: "/images/categories/ro-filters.png",
    itemCount: 24,
    cta: "Explore RO Purifiers",
  },
  {
    id: "uv",
    name: "UV Water Purifiers",
    slug: "uv-purifiers",
    description: "Ultra Violet disinfection killing 99.99% bacteria & viruses",
    image: "/images/categories/uv-purifier.png",
    itemCount: 18,
    cta: "Explore UV Purifiers",
  },
  {
    id: "uf",
    name: "UF Purifiers",
    slug: "uf-purifiers",
    description: "Ultra Filtration without electricity, retaining natural minerals",
    image: "/images/categories/uf.webp",
    itemCount: 12,
    cta: "Explore UF Purifiers",
  },
  {
    id: "alkaline",
    name: "Alkaline Purifiers",
    slug: "alkaline-purifiers",
    description: "Active hydrogen & mineral cartridge for pH 8.5+ hydration",
    image: "/images/categories/alkaline.webp",
    itemCount: 15,
    cta: "Explore Alkaline",
  },
  {
    id: "dispensers",
    name: "Water Dispensers",
    slug: "water-dispensers",
    description: "Instant hot, ambient & ice-cold purified water for modern spaces",
    image: "/images/categories/dispenser.webp",
    itemCount: 9,
    cta: "Explore Dispensers",
  },
  {
    id: "filters",
    name: "Filters & Spares",
    slug: "filters-accessories",
    description: "Original sediment, carbon & mineral booster cartridges",
    image: "/images/categories/filters.webp",
    itemCount: 32,
    cta: "Explore Spares",
  },
];

export const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-24 bg-[#020D1A] relative overflow-hidden">
      {/* 1. Theme Underwater Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/backgrounds/aqua-theme-bg.webp"
          alt="Aqua Theme Background"
          fill
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020D1A]/80 via-[#020D1A]/55 to-[#020D1A]/85 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00D2FF]">
              03 — EXPLORE WATER PURIFIERS
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

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href="#products"
              className="group relative flex flex-col items-center text-center p-4 sm:p-5 rounded-3xl bg-[#031B36]/80 backdrop-blur-xl border border-[#00B8E6]/30 hover:border-[#00D2FF] hover:bg-[#032347]/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(0,210,255,0.25)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Purifier Container */}
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 mb-3 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#00D2FF]/10 blur-xl group-hover:bg-[#00D2FF]/25 transition-all" />
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain relative z-10"
                />
              </div>

              {/* Name & Count */}
              <h3 className="font-sans font-bold text-sm text-white group-hover:text-[#00D2FF] transition-colors leading-tight relative z-10">
                {cat.name}
              </h3>
              <span className="text-[11px] text-[#DDF5FF]/70 mt-1 relative z-10">
                {cat.itemCount} Models
              </span>

              {/* Dynamic CTA */}
              <span className="text-[11px] font-bold text-[#00D2FF] opacity-0 group-hover:opacity-100 transition-opacity mt-2 relative z-10">
                {cat.cta} &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
