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
    <div id="reviews" className="bg-[#F7FCFF] rounded-3xl p-6 sm:p-8 border border-[#DDF5FF] shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0077D9]">
              CUSTOMER REVIEWS
            </span>
            <h3 className="font-sans font-bold text-xl text-[#073B67] mt-0.5">
              Loved by Thousands of Families in Chennai
            </h3>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-8 h-8 rounded-full border border-[#DDF5FF] bg-white hover:bg-[#DDF5FF] text-[#073B67] flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-8 h-8 rounded-full border border-[#DDF5FF] bg-white hover:bg-[#DDF5FF] text-[#073B67] flex items-center justify-center transition-colors"
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
          <span className="text-xs font-bold text-[#073B67] ml-1.5">5.0 / 5.0</span>
        </div>

        {/* Review Quote Text */}
        <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Reviewer Profile */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#DDF5FF]">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#00B8E6] flex-shrink-0">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-sans font-bold text-sm text-[#073B67]">
            {review.name}
          </h4>
          <span className="text-xs text-gray-500">
            {review.location} &bull; Bought {review.purifierBought}
          </span>
        </div>
      </div>
    </div>
  );
};

