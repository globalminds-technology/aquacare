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
    <section id="categories" className="py-20 bg-gradient-to-b from-white to-[#F7FCFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0077D9]">
              03 — EXPLORE WATER PURIFIERS
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#073B67] mt-1">
              Shop by Purifier Type
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Choose the exact purification technology suited for your water source, TDS levels, and family needs.
            </p>
          </div>
          <a
            href="#products"
            className="inline-flex items-center gap-1 text-sm font-bold text-[#0077D9] hover:text-[#00B8E6] mt-4 sm:mt-0 transition-colors group"
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
              className="group relative flex flex-col items-center text-center p-4 sm:p-5 rounded-3xl bg-white border border-[#DDF5FF] hover:border-[#00B8E6] shadow-sm hover:shadow-aqua-md hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Purifier Container */}
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 mb-3 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name & Count */}
              <h3 className="font-sans font-bold text-sm text-[#073B67] group-hover:text-[#0077D9] transition-colors leading-tight">
                {cat.name}
              </h3>
              <span className="text-[11px] text-gray-400 mt-1">
                {cat.itemCount} Models
              </span>

              {/* Dynamic CTA */}
              <span className="text-[10px] font-bold text-[#0077D9] opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                {cat.cta} &rarr;
              </span>

              {/* Subtle hover glow ring */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#00B8E6]/30 pointer-events-none transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
