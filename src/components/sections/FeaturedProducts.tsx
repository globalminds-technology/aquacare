"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Check, Heart, Eye, ArrowRight, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { useCartStore } from "@/lib/store";
import { Product } from "@/lib/types";

export const FeaturedProducts: React.FC = () => {
  const { addItem } = useCartStore();
  const [addedId, setAddedId] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("all");

  const handleAddToCart = (product: Product) => {
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === "bestseller") return p.bestseller;
    return true;
  });

  return (
    <section
      id="products"
      className="py-24 relative overflow-hidden bg-[#020D1A]"
      style={{
        background: "radial-gradient(ellipse at 50% 30%, #062b54 0%, #03162a 55%, #020D1A 100%)",
      }}
    >
      {/* Soft Ambient Cyan Lighting Glows (Clean Category style without wave effect) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[450px] bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#0077D9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#00D2FF] mb-1">
              <span>05 — FEATURED PRODUCTS</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white">
              Best-Selling Water Purifiers
            </h2>
            <p className="text-sm text-[#DDF5FF]/80 mt-2 max-w-xl">
              Authentic brand models guaranteed at lower rates than Amazon & Flipkart, with free doorstep installation in Chennai.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === "all"
                  ? "bg-[#00D2FF] text-[#020D1A] shadow-[0_0_15px_rgba(0,210,255,0.5)]"
                  : "bg-[#031B36]/80 text-[#DDF5FF] border border-[#00B8E6]/30 hover:bg-[#00B8E6]/20"
              }`}
            >
              All Models
            </button>
            <button
              onClick={() => setFilter("bestseller")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === "bestseller"
                  ? "bg-[#00D2FF] text-[#020D1A] shadow-[0_0_15px_rgba(0,210,255,0.5)]"
                  : "bg-[#031B36]/80 text-[#DDF5FF] border border-[#00B8E6]/30 hover:bg-[#00B8E6]/20"
              }`}
            >
              Best Sellers
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isAdded = addedId === product.id;
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="group relative rounded-3xl bg-[#031B36]/85 backdrop-blur-xl border border-[#00B8E6]/35 hover:border-[#00D2FF] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_45px_rgba(0,210,255,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Badges Top Bar */}
                <div className="flex items-center justify-between mb-2">
                  {product.bestseller ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40">
                      Bestseller
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40">
                      Featured
                    </span>
                  )}

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Add to wishlist"
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isWishlisted
                        ? "text-red-400 bg-red-500/20 border border-red-500/30"
                        : "text-white/40 hover:text-red-400 hover:bg-white/10"
                    }`}
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>

                {/* Product Image Stage */}
                <div className="relative w-full aspect-[4/3] my-3 rounded-2xl overflow-hidden bg-[#021528] border border-[#00B8E6]/25 group-hover:border-[#00D2FF]/70 shadow-[0_0_20px_rgba(0,184,230,0.2)] group-hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#00D2FF]/10 blur-xl group-hover:bg-[#00D2FF]/20 transition-all pointer-events-none" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021528]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
                </div>

                {/* Details Section */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00D2FF]">
                    {product.brand}
                  </span>
                  <h3 className="font-sans font-bold text-base text-white mt-0.5 leading-snug line-clamp-1 group-hover:text-[#00D2FF] transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mt-2 text-xs">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-white ml-0.5">{product.rating}</span>
                    </div>
                    <span className="text-[#DDF5FF]/60">({product.reviewsCount})</span>
                  </div>

                  {/* Pricing Comparison */}
                  <div className="flex items-baseline gap-2 mt-3">
                    <span className="font-sans font-extrabold text-xl text-[#00D2FF]">
                      ₹{product.sellingPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-white/40 line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                      {product.discount}% OFF
                    </span>
                  </div>

                  {/* Spec Bullets */}
                  <ul className="mt-3 space-y-1 text-[11px] text-[#DDF5FF]/70 border-t border-white/10 pt-2">
                    {product.specs.slice(0, 2).map((spec, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#00D2FF]" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add to Cart CTA */}
                <div className="mt-4 pt-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full py-2.5 px-4 rounded-2xl font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      isAdded
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] text-[#020D1A] font-extrabold hover:shadow-[0_0_20px_rgba(0,210,255,0.6)] hover:scale-[1.02] active:scale-95"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-white" /> Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 text-[#020D1A]" /> Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

