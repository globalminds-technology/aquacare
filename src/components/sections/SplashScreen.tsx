"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [animState, setAnimState] = useState<"ripple" | "emerge" | "wave" | "done">("ripple");

  useEffect(() => {
    // Stage 1: Droplets and ripple (0 - 600ms)
    const t1 = setTimeout(() => {
      setAnimState("emerge");
    }, 600);

    // Stage 2: Logo emerges & glows (600ms - 1500ms)
    const t2 = setTimeout(() => {
      setAnimState("wave");
    }, 1500);

    // Stage 3: Wave sweeps across & fades out (1500ms - 2200ms)
    const t3 = setTimeout(() => {
      setAnimState("done");
      setTimeout(() => setVisible(false), 500);
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
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
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className={`w-40 h-40 rounded-full border-2 border-[#00B8E6]/60 transition-all duration-1000 ${
            animState !== "ripple" ? "scale-[6] opacity-0" : "scale-100 opacity-80"
          }`}
        />
        <div
          className={`absolute w-72 h-72 rounded-full border border-[#DDF5FF]/40 transition-all duration-1000 delay-150 ${
            animState !== "ripple" ? "scale-[8] opacity-0" : "scale-100 opacity-60"
          }`}
        />
        <div
          className={`absolute w-96 h-96 rounded-full bg-[#00B8E6]/10 blur-2xl transition-all duration-1000 ${
            animState === "emerge" ? "scale-150 opacity-100" : "scale-100 opacity-30"
          }`}
        />
      </div>

      {/* Center Logo Brand Container */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center transition-all duration-700 transform ${
          animState === "ripple"
            ? "scale-75 opacity-0 translate-y-6"
            : animState === "emerge"
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-110 opacity-0 -translate-y-8"
        }`}
      >
        <div className="relative w-28 h-28 mb-4 filter drop-shadow-[0_0_25px_rgba(0,184,230,0.8)]">
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
        <span className="text-[11px] text-white/70 mt-2 font-medium">Loading Experience...</span>
      </div>

      {/* Sweeping Wave Transition overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#DDF5FF] via-white to-transparent transition-transform duration-700 ${
          animState === "wave" ? "translate-y-0 opacity-90" : "translate-y-full opacity-0"
        }`}
      />
    </div>
  );
};

