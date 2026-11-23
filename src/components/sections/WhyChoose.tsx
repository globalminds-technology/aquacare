import React from "react";
import Image from "next/image";
import { Check, ShieldCheck, TrendingDown, ArrowRight, CheckCircle2 } from "lucide-react";

export const WhyChoose: React.FC = () => {
  const points = [
    {
      title: "Lower Prices Than Amazon & Flipkart",
      desc: "Zero marketplace seller commission fees (typically 15% to 22%). We pass the complete direct manufacturer savings to Chennai families.",
    },
    {
      title: "100% Certified & Genuine Products",
      desc: "Factory-sealed units with original brand warranty cards, verifiable serial barcodes, and official GST tax invoice.",
    },
    {
      title: "Free Doorstep Installation in Chennai",
      desc: "Certified brand technicians arrive within 4 hours across all Chennai zones, wearing hygienic shoe covers and carrying digital TDS water testers.",
    },
    {
      title: "Reliable Local After-Sales Support",
      desc: "Dedicated Chennai customer helpdesk on WhatsApp & direct phone line with friendly local Tamil & English speaking water experts.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24 relative overflow-hidden bg-[#020D1A]"
      style={{
        background: "radial-gradient(ellipse at 50% 30%, #062b54 0%, #03162a 55%, #020D1A 100%)",
      }}
    >
      {/* Soft Ambient Cyan Lighting Glows (Clean Service style without wave effect) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[450px] bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#0077D9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00D2FF]">
            05 — WHY AQUA CARE SHOP?
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white mt-1">
            Why Pay More Elsewhere?
          </h2>
          <p className="text-sm text-[#DDF5FF]/80 mt-2">
            Get the same genuine branded purifiers with guaranteed lower prices, free installation, and authentic local Chennai service backup.
          </p>
        </div>

        {/* 1. Marketplace Price Advantage Card */}
        <div className="bg-[#031B36]/85 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.6)] border border-[#00B8E6]/40 mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40 text-xs font-bold uppercase tracking-wider">
              <TrendingDown className="w-3.5 h-3.5 text-[#00D2FF]" /> Direct Brand Savings
            </div>

            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white leading-tight">
              Direct Savings vs Online Marketplaces
            </h3>

            <p className="text-sm text-[#DDF5FF]/80 leading-relaxed">
              When you purchase on Amazon or Flipkart, high marketplace commissions inflate the price. At Aqua Care Shop Chennai, we supply directly from authorized manufacturers to your home.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs font-semibold text-white">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00D2FF]" /> 100% Factory-Sealed Genuine Product
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00D2FF]" /> Free Certified Doorstep Installation in Chennai
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00D2FF]" /> Official 1–2 Year Brand Service Warranty
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 w-full space-y-3">
              {/* Amazon Comparison Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#021020]/80 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-xs text-white">
                    a
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white">Amazon India</span>
                    <span className="block text-[10px] text-white/50">Regular Marketplace Price</span>
                  </div>
                </div>
                <span className="font-sans font-bold text-base text-white/50 line-through">
                  ₹18,999
                </span>
              </div>

              {/* Flipkart Comparison Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#021020]/80 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-bold text-xs text-amber-300">
                    f
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white">Flipkart</span>
                    <span className="block text-[10px] text-white/50">Online Retail Price</span>
                  </div>
                </div>
                <span className="font-sans font-bold text-base text-white/50 line-through">
                  ₹18,499
                </span>
              </div>

              {/* Aqua Care Shop Highlight Card */}
              <div className="relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] text-[#020D1A] shadow-[0_0_30px_rgba(0,210,255,0.4)] transform scale-[1.02]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#020D1A] text-[#00D2FF] flex items-center justify-center font-extrabold text-sm shadow-sm">
                    💧
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans font-black text-base sm:text-lg text-[#020D1A]">Aqua Care Shop</span>
                      <span className="text-[10px] bg-[#020D1A]/20 px-2 py-0.5 rounded-full font-extrabold text-[#020D1A]">
                        Best Price
                      </span>
                    </div>
                    <span className="block text-[11px] text-[#020D1A]/80 font-semibold">Includes Free Chennai Setup</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-sans font-black text-xl sm:text-2xl text-[#020D1A]">
                    ₹14,999
                  </span>
                  <span className="block text-[10px] text-[#020D1A] font-extrabold uppercase tracking-wider">
                    Instant ₹4,000 Direct Benefit
                  </span>
                </div>
              </div>
            </div>

            {/* Save Up to 27% Circular Badge */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#031B36]/90 border-4 border-[#00D2FF] shadow-[0_0_35px_rgba(0,210,255,0.4)] flex flex-col items-center justify-center text-center p-2 flex-shrink-0 animate-float backdrop-blur-md">
              <span className="text-[10px] font-bold text-[#DDF5FF]/70 uppercase tracking-wider">
                Save Up To
              </span>
              <span className="font-sans font-black text-3xl sm:text-4xl text-[#00D2FF] leading-none my-0.5">
                27%
              </span>
              <span className="text-[10px] font-semibold text-white leading-tight">
                Lower than Marketplaces
              </span>
            </div>
          </div>
        </div>

        {/* 2. Pure Water Glass Splash & Value Proposition Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Pure Water Glass Asset */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-md rounded-3xl overflow-hidden bg-[#031B36]/80 backdrop-blur-xl p-4 border border-[#00B8E6]/30 shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex items-center justify-center group">
              {/* Pure Water Glass with Splashing Water Image */}
              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/lifestyle/pure-water-glass.png"
                  alt="Glass of pure sparkling crystal water with dynamic splash"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Floating Quality Seal */}
              <div className="absolute -bottom-2 -right-2 bg-[#021020]/95 backdrop-blur-md p-3.5 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.6)] border border-[#00D2FF]/40 flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] flex items-center justify-center border border-[#00D2FF]/40">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-sans font-bold text-xs text-white">
                    100% Pure & Healthy
                  </span>
                  <span className="text-[10px] text-[#DDF5FF]/70">
                    Chennai Water Certified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The 4 Value Proposition Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((pt, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#031B36]/80 backdrop-blur-xl border border-[#00B8E6]/30 hover:border-[#00D2FF] shadow-sm hover:shadow-[0_10px_30px_rgba(0,210,255,0.2)] transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00D2FF] to-[#0077D9] text-[#020D1A] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm sm:text-base text-white">
                    {pt.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#DDF5FF]/70 mt-1 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
