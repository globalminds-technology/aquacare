"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [animState, setAnimState] = useState<"droplet" | "ripple" | "emerge" | "wave" | "done">("droplet");

  useEffect(() => {
    // Stage 1: Water droplet descends & lands (0 - 500ms)
    const t1 = setTimeout(() => {
      setAnimState("ripple");
    }, 500);

    // Stage 2: Ripple expands & logo emerges (500ms - 1300ms)
    const t2 = setTimeout(() => {
      setAnimState("emerge");
    }, 1300);

    // Stage 3: Wave sweeps across screen (1300ms - 2000ms)
    const t3 = setTimeout(() => {
      setAnimState("wave");
    }, 2000);

    // Stage 4: Fade to homepage (2000ms - 2500ms)
    const t4 = setTimeout(() => {
      setAnimState("done");
      setTimeout(() => setVisible(false), 500);
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#073B67] via-[#0077D9] to-[#04203B] transition-opacity duration-700 pointer-events-none ${
        animState === "done" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Expanding Ripple Rings */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div
          className={`w-36 h-36 rounded-full border-2 border-[#00B8E6]/60 transition-all duration-1000 ${
            animState === "droplet"
              ? "scale-50 opacity-0"
              : animState === "ripple"
              ? "scale-100 opacity-90"
              : "scale-[5] opacity-0"
          }`}
        />
        <div
          className={`absolute w-64 h-64 rounded-full border border-[#DDF5FF]/40 transition-all duration-1000 delay-100 ${
            animState === "droplet"
              ? "scale-50 opacity-0"
              : animState === "ripple"
              ? "scale-100 opacity-70"
              : "scale-[7] opacity-0"
          }`}
        />
        <div
          className={`absolute w-96 h-96 rounded-full bg-[#00B8E6]/15 blur-2xl transition-all duration-1000 ${
            animState === "emerge" ? "scale-150 opacity-100" : "scale-100 opacity-30"
          }`}
        />
      </div>

      {/* Center Droplet Stage */}
      <div
        className={`absolute z-20 transition-all duration-700 ${
          animState === "droplet"
            ? "translate-y-0 opacity-100 scale-100"
            : animState === "ripple"
            ? "translate-y-2 opacity-80 scale-110"
            : "scale-150 opacity-0 -translate-y-10"
        }`}
      >
        <div className="relative w-24 h-24 filter drop-shadow-[0_0_20px_rgba(0,184,230,0.8)]">
          <Image
            src="/images/water/water-droplet.png"
            alt="Water Droplet"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Center Logo Brand Container */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center transition-all duration-700 transform ${
          animState === "droplet" || animState === "ripple"
            ? "scale-75 opacity-0 translate-y-6"
            : animState === "emerge"
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-110 opacity-0 -translate-y-8"
        }`}
      >
        <div className="relative w-28 h-28 mb-4 filter drop-shadow-[0_0_30px_rgba(0,184,230,0.9)]">
          <Image
            src="/brand/aqua-care-logo-white.svg"
            alt="Aqua Care Shop"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white drop-shadow-md">
          AQUA CARE SHOP
        </h1>
        <p className="text-xs sm:text-sm tracking-widest uppercase font-semibold text-[#00B8E6] mt-1 drop-shadow">
          Chennai's Leading Destination for Water Purifiers
        </p>

        {/* Loading status bar */}
        <div className="mt-8 w-48 h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#00B8E6] to-white rounded-full animate-[progress_1.8s_ease-in-out_infinite]" />
        </div>
        <span className="text-[11px] text-white/70 mt-2 font-medium">
          Loading Pure Water Experience...
        </span>
      </div>

      {/* Sweeping Transparent Wave Transition Layer */}
      <div
        className={`absolute inset-x-0 bottom-0 w-full h-[65vh] transition-transform duration-1000 ease-out pointer-events-none ${
          animState === "wave"
            ? "translate-y-0 opacity-95 scale-100"
            : animState === "done"
            ? "-translate-y-10 opacity-0 scale-105"
            : "translate-y-full opacity-0 scale-95"
        }`}
      >
        <Image
          src="/images/water-wave.png"
          alt="Water Wave Reveal"
          fill
          className="object-cover object-bottom filter drop-shadow-[0_-10px_25px_rgba(0,184,230,0.5)]"
        />
      </div>
    </div>
  );
};
