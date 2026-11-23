import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export const CATEGORIES = [
  {
    id: "ro",
    name: "RO Water Purifiers",
    slug: "ro-purifiers",
    description: "Reverse Osmosis for high TDS groundwater & borewell water",
    cardImage: "/images/categories/ro_card_exact.webp",
    itemCount: 24,
    cta: "Explore RO Purifiers",
  },
  {
    id: "uv",
    name: "UV Water Purifiers",
    slug: "uv-purifiers",
    description: "Ultra Violet disinfection killing 99.99% bacteria & viruses",
    cardImage: "/images/categories/uv_card_exact.webp",
    itemCount: 18,
    cta: "Explore UV Purifiers",
  },
  {
    id: "uf",
    name: "UF Purifiers",
    slug: "uf-purifiers",
    description: "Ultra Filtration without electricity, retaining natural minerals",
    cardImage: "/images/categories/uf_card_exact.webp",
    itemCount: 12,
    cta: "Explore UF Purifiers",
  },
  {
    id: "alkaline",
    name: "Alkaline Purifiers",
    slug: "alkaline-purifiers",
    description: "Active hydrogen & mineral cartridge for pH 8.5+ hydration",
    cardImage: "/images/categories/alkaline_card_exact.webp",
    itemCount: 15,
    cta: "Explore Alkaline",
  },
  {
    id: "dispensers",
    name: "Water Dispensers",
    slug: "water-dispensers",
    description: "Instant hot, ambient & ice-cold purified water for modern spaces",
    cardImage: "/images/categories/dispenser_card_exact.webp",
    itemCount: 9,
    cta: "Explore Dispensers",
  },
  {
    id: "filters",
    name: "Filters & Spares",
    slug: "filters-accessories",
    description: "Original sediment, carbon & mineral booster cartridges",
    cardImage: "/images/categories/filters_card_exact.webp",
    itemCount: 32,
    cta: "Explore Spares",
  },
];

export const Categories: React.FC = () => {
  return (
    <section
      id="categories"
      className="py-24 relative overflow-hidden bg-[#020D1A]"
      style={{
        background: "radial-gradient(ellipse at 50% 30%, #062b54 0%, #03162a 55%, #020D1A 100%)",
      }}
    >
      {/* Soft Ambient Cyan Lighting Glows (Hero style without wave effect) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[450px] bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#0077D9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
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

        {/* 6 Category Cards Grid - Exactly matching the user's uploaded mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href="#products"
              className="group relative rounded-[28px] overflow-hidden hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 drop-shadow-[0_10px_25px_rgba(0,184,230,0.25)] hover:drop-shadow-[0_20px_45px_rgba(0,210,255,0.7)] flex flex-col cursor-pointer"
            >
              {/* Exact Category Card Image from user upload (345x543 High Res) */}
              <div className="relative w-full aspect-[345/543] overflow-hidden rounded-[26px]">
                <Image
                  src={cat.cardImage}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Subtle hover specular sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[26px]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
