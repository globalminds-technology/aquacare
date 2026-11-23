"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/data";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="faq" className="bg-[#031B36]/85 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-[#00B8E6]/40 shadow-[0_15px_45px_rgba(0,0,0,0.6)] flex flex-col justify-between h-full text-white">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-[#00D2FF]" />
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#00D2FF]">
              HELP & SUPPORT
            </span>
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
              Frequently Asked Questions
            </h3>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 mt-4">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#00B8E6]/30 bg-[#021020]/75 overflow-hidden transition-all hover:border-[#00D2FF]/60"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-3.5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-[#00D2FF] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#00D2FF] transition-transform duration-200 flex-shrink-0 ml-2 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-3.5 pb-3.5 text-xs text-[#DDF5FF]/85 leading-relaxed border-t border-white/10 pt-2 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

