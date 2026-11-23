import React from "react";
import { Check, ShieldCheck, ArrowRight, Zap, TrendingDown } from "lucide-react";

export const PriceAdvantage: React.FC = () => {
  return (
    <section id="price-advantage" className="py-20 bg-gradient-to-b from-[#F7FCFF] via-[#DDF5FF]/40 to-white relative overflow-hidden">
      {/* Background Water Bloom */}
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-96 h-96 bg-[#00B8E6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-aqua-md border border-[#DDF5FF] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF5FF] text-[#0077D9] text-xs font-bold uppercase tracking-wider">
              <TrendingDown className="w-3.5 h-3.5 text-[#0077D9]" /> Direct Brand Savings
            </div>

            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#073B67] leading-tight">
              Why Pay More Elsewhere?
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Major marketplaces like Amazon and Flipkart charge 15% to 22% seller commissions, inflating consumer retail prices.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              At <strong>Aqua Care Shop Chennai</strong>, we deliver directly from brand manufacturers to your home, giving you verified lower prices, genuine brand warranty, and free technician installation.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs font-semibold text-[#073B67]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00B8E6]" /> 100% Factory-Sealed Genuine Product
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00B8E6]" /> Free Certified Doorstep Installation in Chennai
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00B8E6]" /> Official 1–2 Year Brand Service Warranty
              </div>
            </div>
          </div>

          {/* Right Comparison Box */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 w-full space-y-3">
              {/* Amazon Comparison Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F7FCFF] border border-gray-200/70">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-bold text-xs text-gray-700">
                    a
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-800">Amazon India</span>
                    <span className="block text-[10px] text-gray-400">Regular Marketplace Price</span>
                  </div>
                </div>
                <span className="font-sans font-bold text-base text-gray-600 line-through">
                  ₹18,999
                </span>
              </div>

              {/* Flipkart Comparison Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F7FCFF] border border-gray-200/70">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center font-bold text-xs text-amber-600">
                    f
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-800">Flipkart</span>
                    <span className="block text-[10px] text-gray-400">Online Retail Price</span>
                  </div>
                </div>
                <span className="font-sans font-bold text-base text-gray-600 line-through">
                  ₹18,499
                </span>
              </div>

              {/* Aqua Care Shop Highlight Card */}
              <div className="relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0077D9] to-[#00B8E6] text-white shadow-aqua-md transform scale-[1.02]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0077D9] flex items-center justify-center font-extrabold text-sm shadow-sm">
                    💧
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans font-extrabold text-base sm:text-lg">Aqua Care Shop</span>
                      <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">
                        Best Price
                      </span>
                    </div>
                    <span className="block text-[11px] text-white/80">Includes Free Chennai Setup</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-sans font-black text-xl sm:text-2xl text-white">
                    ₹14,999
                  </span>
                  <span className="block text-[10px] text-emerald-200 font-bold uppercase tracking-wider">
                    Instant ₹4,000 Direct Benefit
                  </span>
                </div>
              </div>
            </div>

            {/* Save Up to 27% Circular Badge */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#DDF5FF] to-white border-4 border-[#00B8E6] shadow-aqua-md flex flex-col items-center justify-center text-center p-2 flex-shrink-0 animate-float">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                Save Up To
              </span>
              <span className="font-sans font-black text-3xl sm:text-4xl text-[#0077D9] leading-none my-0.5">
                27%
              </span>
              <span className="text-[10px] font-semibold text-[#073B67] leading-tight">
                Lower than Marketplaces
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

