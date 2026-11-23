"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Droplets, MapPin, Tag, Truck, ShieldCheck, Star } from "lucide-react";

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="relative min-h-[92vh] lg:min-h-[96vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-center items-center overflow-hidden bg-[#020D1A] select-none"
      style={{
        background: "radial-gradient(ellipse at 50% 45%, #062b54 0%, #03162a 50%, #020D1A 100%)",
      }}
    >
      {/* 1. Ambient Lighting Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00D2FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[350px] bg-[#0077D9]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. Top & Bottom seamless gradient blending (Zero visible edges or hard borders) */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020D1A] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020D1A] via-[#020D1A]/70 to-transparent pointer-events-none z-10" />

      {/* 3. The Interactive 3D Hero Master Stage */}
      <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 relative z-20">
        <div
          className="relative w-full aspect-[2048/1152] max-h-[82vh] mx-auto rounded-[32px] overflow-hidden transition-transform duration-300 ease-out"
          style={{
            transform: isHovered
              ? `perspective(1200px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg) scale(1.01)`
              : "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1)",
            boxShadow: "0 25px 60px -15px rgba(0, 184, 230, 0.25), 0 0 40px rgba(0, 210, 255, 0.15)",
          }}
        >
          {/* Master 2K 3D Water Purifiers Visual Banner */}
          <Image
            src="/images/hero/hero_exact_banner.webp"
            alt="Water Purifiers Aqua Care Shop Chennai - High TDS RO UV UF Alkaline"
            fill
            priority
            quality={98}
            className="object-cover object-center"
          />

          {/* Interactive Dynamic Light Sheen following Cursor */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: isHovered
                ? `radial-gradient(circle 500px at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(0, 210, 255, 0.18), transparent 70%)`
                : "transparent",
            }}
          />

          {/* 4. Interactive Hotspots with Smooth Hover Glowing Feedback */}
          {/* Top-Left: Chennai Destination Pill */}
          <a
            href="#brands"
            title="Explore Authorised Brands"
            className="absolute z-20 rounded-full transition-all duration-300 hover:ring-2 hover:ring-[#00D2FF] hover:bg-[#00D2FF]/15 cursor-pointer"
            style={{
              left: "4.15%",
              top: "3.91%",
              width: "25.39%",
              height: "6.08%",
            }}
          />

          {/* Top-Right: Lower Prices Than Amazon & Flipkart */}
          <a
            href="#why-us"
            title="Save Up to 27% Compared to Amazon & Flipkart"
            className="absolute z-20 rounded-full transition-all duration-300 hover:ring-2 hover:ring-[#FFB800] hover:bg-[#FFB800]/15 cursor-pointer"
            style={{
              left: "75.68%",
              top: "2.17%",
              width: "19.78%",
              height: "9.55%",
            }}
          />

          {/* Bottom-Left Feature 1: Direct Brand Savings */}
          <a
            href="#why-us"
            title="Direct Brand Savings"
            className="absolute z-20 rounded-2xl transition-all duration-300 hover:ring-2 hover:ring-[#00D2FF] hover:bg-[#00D2FF]/15 cursor-pointer"
            style={{
              left: "7.32%",
              top: "79.43%",
              width: "13.67%",
              height: "6.94%",
            }}
          />

          {/* Bottom-Left Feature 2: Free Doorstep Setup */}
          <a
            href="#services"
            title="Free Professional Doorstep Setup in Chennai"
            className="absolute z-20 rounded-2xl transition-all duration-300 hover:ring-2 hover:ring-[#00D2FF] hover:bg-[#00D2FF]/15 cursor-pointer"
            style={{
              left: "21.97%",
              top: "79.43%",
              width: "14.40%",
              height: "6.94%",
            }}
          />

          {/* Bottom-Left Feature 3: 1-2 Year Brand Warranty */}
          <a
            href="#services"
            title="Official 1-2 Year Brand Warranty"
            className="absolute z-20 rounded-2xl transition-all duration-300 hover:ring-2 hover:ring-[#00D2FF] hover:bg-[#00D2FF]/15 cursor-pointer"
            style={{
              left: "37.35%",
              top: "79.43%",
              width: "17.58%",
              height: "6.94%",
            }}
          />

          {/* Primary CTA: Explore Purifiers -> */}
          <a
            href="#products"
            title="Explore Water Purifiers Catalog"
            className="absolute z-20 rounded-full transition-all duration-300 hover:ring-4 hover:ring-[#00D2FF] hover:shadow-[0_0_35px_rgba(0,210,255,0.9)] hover:scale-[1.03] active:scale-95 cursor-pointer"
            style={{
              left: "55.91%",
              top: "78.99%",
              width: "18.55%",
              height: "7.81%",
            }}
          />

          {/* Secondary CTA: Find My Purifier */}
          <a
            href="#quiz"
            title="Find My Purifier - 60s Water TDS Quiz"
            className="absolute z-20 rounded-full transition-all duration-300 hover:ring-4 hover:ring-[#00D2FF]/80 hover:bg-[#00D2FF]/20 hover:scale-[1.03] active:scale-95 cursor-pointer"
            style={{
              left: "75.44%",
              top: "78.99%",
              width: "17.33%",
              height: "7.81%",
            }}
          />

          {/* Bottom Reviews Bar */}
          <a
            href="#reviews"
            title="View 1,450+ Customer Reviews in Chennai"
            className="absolute z-20 rounded-lg transition-all duration-300 hover:bg-[#00D2FF]/10 cursor-pointer"
            style={{
              left: "5.86%",
              top: "90.28%",
              width: "45.41%",
              height: "6.51%",
            }}
          />

          {/* Bottom Best Price Guarantee Badge */}
          <a
            href="#why-us"
            title="Best Price Guarantee - Save up to 27% vs Market"
            className="absolute z-20 rounded-full transition-all duration-300 hover:ring-2 hover:ring-[#FFB800] hover:bg-[#FFB800]/15 cursor-pointer"
            style={{
              left: "70.80%",
              top: "88.98%",
              width: "21.97%",
              height: "8.25%",
            }}
          />
        </div>

        {/* Mobile Quick Action Buttons (<sm screens) */}
        <div className="flex sm:hidden flex-col gap-3 mt-4 px-2">
          <div className="flex items-center gap-2">
            <a
              href="#products"
              className="flex-1 py-3 rounded-full font-sans font-extrabold text-xs text-[#020D1A] bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] shadow-[0_0_20px_rgba(0,210,255,0.6)] flex items-center justify-center gap-2"
            >
              <span>Explore Purifiers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#quiz"
              className="flex-1 py-3 rounded-full font-sans font-bold text-xs text-white bg-[#031C38] border border-[#00D2FF]/50 flex items-center justify-center gap-1.5"
            >
              <Droplets className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Find My Purifier</span>
            </a>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#DDF5FF]/80 px-1">
            <span className="font-semibold text-white">⭐ 4.9/5 (1,450+ Reviews)</span>
            <span className="text-[#FFB800] font-bold">Save up to 27% vs Market</span>
          </div>
        </div>
      </div>
    </section>
  );
};
