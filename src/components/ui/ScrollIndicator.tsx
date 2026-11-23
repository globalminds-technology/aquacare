"use client";

import React from "react";

interface ScrollIndicatorProps {
  targetId?: string;
  label?: string;
  className?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  targetId,
  label = "SCROLL TO EXPLORE ↓",
  className = "",
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (targetId) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <a
        href={targetId ? `#${targetId}` : undefined}
        onClick={handleClick}
        className="group flex flex-col items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
        aria-label={label}
      >
        {/* Sleek Animated Mouse Outline with Moving Wheel */}
        <div className="relative w-5 h-8 rounded-full border-[1.8px] border-[#00D2FF]/85 group-hover:border-[#00D2FF] flex justify-center pt-1.5 shadow-[0_0_14px_rgba(0,210,255,0.45)] group-hover:shadow-[0_0_22px_rgba(0,210,255,0.75)] transition-all bg-[#031427]/40 backdrop-blur-sm">
          {/* Animated Moving Cyan Dot inside Mouse */}
          <span className="w-1 h-2 rounded-full bg-[#00D2FF] animate-bounce shadow-[0_0_8px_#00D2FF]" />
        </div>

        {/* Text Label */}
        <span className="text-[10px] font-mono tracking-[0.22em] uppercase font-semibold text-[#DDF5FF]/80 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(0,210,255,0.6)] transition-all">
          {label}
        </span>
      </a>
    </div>
  );
};

