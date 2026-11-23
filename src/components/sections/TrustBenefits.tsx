import React from "react";
import { BadgePercent, ShieldCheck, Wrench, Headphones, Award } from "lucide-react";
import { TRUST_BENEFITS } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  BadgePercent: <BadgePercent className="w-6 h-6 text-[#00D2FF]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00D2FF]" />,
  Wrench: <Wrench className="w-6 h-6 text-[#00D2FF]" />,
  Headphones: <Headphones className="w-6 h-6 text-[#00D2FF]" />,
  Award: <Award className="w-6 h-6 text-[#00D2FF]" />,
};

export const TrustBenefits: React.FC = () => {
  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Horizontal Floating Frosted Glass Capsule */}
      <div className="bg-[#031B36]/85 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.5)] border border-[#00B8E6]/40 hover:border-[#00D2FF]/70 transition-all">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {TRUST_BENEFITS.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex items-center gap-3.5 p-2 ${
                index !== 0 ? "lg:pl-6" : ""
              } group hover:bg-white/5 rounded-2xl transition-all`}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#00B8E6]/15 group-hover:bg-[#00D2FF] group-hover:text-black transition-all flex items-center justify-center flex-shrink-0 shadow-sm border border-[#00B8E6]/30">
                <div className="group-hover:[&_svg]:text-[#020D1A] transition-colors">
                  {iconMap[benefit.icon]}
                </div>
              </div>
              <div className="flex flex-col text-left">
                <h4 className="font-sans font-bold text-xs sm:text-sm text-white leading-tight">
                  {benefit.title}
                </h4>
                <p className="text-[11px] text-[#DDF5FF]/70 mt-0.5 leading-snug">
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
