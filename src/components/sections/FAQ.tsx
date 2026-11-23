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
    <div id="faq" className="bg-[#F7FCFF] rounded-3xl p-6 sm:p-8 border border-[#DDF5FF] shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-[#0077D9]" />
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0077D9]">
              HELP & SUPPORT
            </span>
            <h3 className="font-sans font-bold text-xl text-[#073B67]">
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
                className="rounded-2xl border border-[#DDF5FF] bg-white overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-3.5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-[#073B67] hover:text-[#0077D9] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0077D9] transition-transform duration-200 flex-shrink-0 ml-2 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-3.5 pb-3.5 text-xs text-gray-600 leading-relaxed border-t border-slate-100 pt-2 animate-in fade-in duration-200">
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

