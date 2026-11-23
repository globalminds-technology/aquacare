"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  };

  const review = TESTIMONIALS[currentIndex];

  return (
    <div id="reviews" className="bg-[#031B36]/85 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-[#00B8E6]/40 shadow-[0_15px_45px_rgba(0,0,0,0.6)] flex flex-col justify-between h-full text-white">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#00D2FF]">
              CUSTOMER REVIEWS
            </span>
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white mt-0.5">
              Loved by Thousands of Families in Chennai
            </h3>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-8 h-8 rounded-full border border-[#00B8E6]/30 bg-[#021020]/75 hover:bg-[#00D2FF] hover:text-[#020D1A] text-white flex items-center justify-center transition-colors shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-8 h-8 rounded-full border border-[#00B8E6]/30 bg-[#021020]/75 hover:bg-[#00D2FF] hover:text-[#020D1A] text-white flex items-center justify-center transition-colors shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 text-amber-400 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
          <span className="text-xs font-bold text-white ml-1.5">5.0 / 5.0</span>
        </div>

        {/* Review Quote Text */}
        <p className="text-sm text-[#DDF5FF]/90 leading-relaxed italic mb-6">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Reviewer Profile */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#00D2FF] flex-shrink-0 shadow-[0_0_15px_rgba(0,210,255,0.4)]">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-sans font-bold text-sm text-white">
            {review.name}
          </h4>
          <span className="text-xs text-[#DDF5FF]/60">
            {review.location} &bull; Bought {review.purifierBought}
          </span>
        </div>
      </div>
    </div>
  );
};

