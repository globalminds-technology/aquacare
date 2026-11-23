import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export const CATEGORIES = [
  {
    id: "ro",
    name: "RO Water Purifiers",
    slug: "ro-purifiers",
    description: "Reverse Osmosis for high TDS groundwater & borewell water",
    cardImage: "/images/categories/ro_category_card.webp",
    itemCount: 24,
    cta: "Explore RO Purifiers",
  },
  {
    id: "uv",
    name: "UV Water Purifiers",
    slug: "uv-purifiers",
    description: "Ultra Violet disinfection killing 99.99% bacteria & viruses",
    cardImage: "/images/categories/uv_category_card.webp",
    itemCount: 18,
    cta: "Explore UV Purifiers",
  },
  {
    id: "uf",
    name: "UF Purifiers",
    slug: "uf-purifiers",
    description: "Ultra Filtration without electricity, retaining natural minerals",
    cardImage: "/images/categories/uf_category_card.webp",
    itemCount: 12,
    cta: "Explore UF Purifiers",
  },
  {
    id: "alkaline",
    name: "Alkaline Purifiers",
    slug: "alkaline-purifiers",
    description: "Active hydrogen & mineral cartridge for pH 8.5+ hydration",
    cardImage: "/images/categories/alkaline_category_card.webp",
    itemCount: 15,
    cta: "Explore Alkaline",
  },
  {
    id: "dispensers",
    name: "Water Dispensers",
    slug: "water-dispensers",
    description: "Instant hot, ambient & ice-cold purified water for modern spaces",
    cardImage: "/images/categories/dispenser_category_card.webp",
    itemCount: 9,
    cta: "Explore Dispensers",
  },
  {
    id: "filters",
    name: "Filters & Spares",
    slug: "filters-accessories",
    description: "Original sediment, carbon & mineral booster cartridges",
    cardImage: "/images/categories/filters_category_card.webp",
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

        {/* 6 Category Cards Grid - Exactly matching the user's uploaded mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5 lg:gap-6">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href="#products"
              className="group relative rounded-[26px] sm:rounded-[28px] overflow-hidden border-2 border-[#00B8E6]/85 hover:border-[#00D2FF] shadow-[0_0_20px_rgba(0,184,230,0.35)] hover:shadow-[0_0_40px_rgba(0,210,255,0.75)] hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 flex flex-col cursor-pointer bg-[#02162E]"
            >
              {/* Exact Category Card Image from user upload (477x756 High Res) */}
              <div className="relative w-full aspect-[477/756] overflow-hidden">
                <Image
                  src={cat.cardImage}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Subtle hover specular sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
