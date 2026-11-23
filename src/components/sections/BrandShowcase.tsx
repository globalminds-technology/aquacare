"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { BRANDS } from "@/lib/data";

export const BrandShowcase: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<string | null>(null);

  return (
    <section id="brands" className="py-20 bg-gradient-to-b from-white to-[#F7FCFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0077D9]">
              AUTHORISED PARTNERS
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#073B67] mt-1">
              Shop by Brand
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              India's leading water purifier brands under one roof, backed by authentic warranty and factory certified support.
            </p>
          </div>
          <span className="text-xs text-gray-400 mt-2 sm:mt-0 font-medium">
            Top water purifier brands, all in one place.
          </span>
        </div>

        {/* Clean Clutch Cards Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              onMouseEnter={() => setActiveBrand(brand.id)}
              onMouseLeave={() => setActiveBrand(null)}
              className="group relative rounded-3xl bg-white border border-[#DDF5FF] hover:border-[#0077D9] p-6 shadow-sm hover:shadow-aqua-md transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer hover:-translate-y-1.5"
            >
              {/* Brand Logo Text / Monogram */}
              <div className="w-16 h-16 rounded-2xl bg-[#F7FCFF] border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span
                  className="font-sans font-black text-sm tracking-tight"
                  style={{ color: brand.color }}
                >
                  {brand.logo}
                </span>
              </div>

              {/* Brand Name */}
              <h3 className="font-sans font-bold text-sm text-[#073B67] group-hover:text-[#0077D9] transition-colors">
                {brand.name}
              </h3>

              {/* Models Count */}
              <span className="text-[11px] text-gray-400 mt-1">
                {brand.modelsCount}
              </span>

              {/* View CTA */}
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-bold text-[#0077D9]">
                <span>View Models</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

