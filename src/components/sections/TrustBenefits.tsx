import React from "react";
import { BadgePercent, ShieldCheck, Wrench, Headphones, Award } from "lucide-react";
import { TRUST_BENEFITS } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  BadgePercent: <BadgePercent className="w-6 h-6 text-[#0077D9]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#0077D9]" />,
  Wrench: <Wrench className="w-6 h-6 text-[#0077D9]" />,
  Headphones: <Headphones className="w-6 h-6 text-[#0077D9]" />,
  Award: <Award className="w-6 h-6 text-[#0077D9]" />,
};

export const TrustBenefits: React.FC = () => {
  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Horizontal Floating Capsule */}
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-4 sm:p-6 shadow-aqua-md border border-[#DDF5FF]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-2 divide-y lg:divide-y-0 lg:divide-x divide-[#DDF5FF]">
          {TRUST_BENEFITS.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex items-center gap-3.5 p-2 ${
                index !== 0 ? "lg:pl-6" : ""
              } group hover:bg-[#DDF5FF]/40 rounded-2xl transition-all`}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#DDF5FF] group-hover:bg-[#0077D9] group-hover:text-white transition-all flex items-center justify-center flex-shrink-0 shadow-sm">
                <div className="group-hover:[&_svg]:text-white transition-colors">
                  {iconMap[benefit.icon]}
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="font-sans font-bold text-xs sm:text-sm text-[#073B67] leading-tight">
                  {benefit.title}
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                  {benefit.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

