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
    <section id="products" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0077D9] mb-1">
              <span>FEATURED PRODUCTS</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#073B67]">
              Best-Selling Water Purifiers
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Authentic brand models guaranteed at lower rates than Amazon & Flipkart, with free doorstep installation in Chennai.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-[#0077D9] text-white shadow-sm"
                  : "bg-[#DDF5FF] text-[#073B67] hover:bg-[#DDF5FF]/80"
              }`}
            >
              All Models
            </button>
            <button
              onClick={() => setFilter("bestseller")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "bestseller"
                  ? "bg-[#0077D9] text-white shadow-sm"
                  : "bg-[#DDF5FF] text-[#073B67] hover:bg-[#DDF5FF]/80"
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
                className="group relative rounded-3xl bg-white border border-[#DDF5FF] hover:border-[#00B8E6] p-5 shadow-sm hover:shadow-aqua-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Badges Top Bar */}
                <div className="flex items-center justify-between mb-2">
                  {product.bestseller ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
                      Bestseller
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#DDF5FF] text-[#0077D9]">
                      Featured
                    </span>
                  )}

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Add to wishlist"
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isWishlisted
                        ? "text-red-500 bg-red-50"
                        : "text-gray-400 hover:text-red-500 hover:bg-red-50"
                    }`}
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>

                {/* Product Image Stage */}
                <div className="relative w-full aspect-square my-3 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Details Section */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0077D9]">
                    {product.brand}
                  </span>
                  <h3 className="font-sans font-bold text-base text-[#073B67] mt-0.5 leading-snug line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mt-2 text-xs">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-[#073B67] ml-0.5">{product.rating}</span>
                    </div>
                    <span className="text-gray-400">({product.reviewsCount})</span>
                  </div>

                  {/* Pricing Comparison */}
                  <div className="flex items-baseline gap-2 mt-3">
                    <span className="font-sans font-extrabold text-xl text-[#073B67]">
                      ₹{product.sellingPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {product.discount}% OFF
                    </span>
                  </div>

                  {/* Spec Bullets */}
                  <ul className="mt-3 space-y-1 text-[11px] text-gray-500 border-t border-slate-100 pt-2">
                    {product.specs.slice(0, 2).map((spec, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#00B8E6]" />
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
                        : "bg-[#0077D9] text-white hover:bg-[#00B8E6] shadow-sm hover:shadow-aqua-glow"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" /> Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" /> Add to Cart
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

