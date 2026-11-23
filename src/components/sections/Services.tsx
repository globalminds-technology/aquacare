import React from "react";
import Image from "next/image";
import { Wrench, Settings, Layers, Headphones, ShieldCheck, Check, Phone } from "lucide-react";
import { SERVICES } from "@/lib/data";

const serviceIcons: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-6 h-6 text-[#0077D9]" />,
  Settings: <Settings className="w-6 h-6 text-[#0077D9]" />,
  Layers: <Layers className="w-6 h-6 text-[#0077D9]" />,
  Headphones: <Headphones className="w-6 h-6 text-[#0077D9]" />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#020D1A] relative overflow-hidden">
      {/* 1. Theme Underwater Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/backgrounds/aqua-theme-bg.webp"
          alt="Aqua Theme Background"
          fill
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020D1A]/80 via-[#020D1A]/55 to-[#020D1A]/85 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00D2FF]">
              CERTIFIED TECHNICIANS IN CHENNAI
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white mt-1">
              Installation & Services
            </h2>
            <p className="text-sm text-[#DDF5FF]/80 mt-2 max-w-xl">
              Professional, clean, same-day service by factory-trained technicians across all Chennai zones.
            </p>
          </div>

          <a
            href="tel:+916383321623"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] text-[#020D1A] font-extrabold text-xs hover:shadow-[0_0_20px_rgba(0,210,255,0.6)] hover:scale-105 active:scale-95 transition-all mt-4 sm:mt-0 shadow-[0_4px_15px_rgba(0,184,230,0.4)]"
          >
            <Phone className="w-4 h-4 text-[#020D1A]" /> Book Technician: +91-6383321623
          </a>
        </div>

        {/* Services & Technician Visual Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 4 Service Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((serv) => (
              <div
                key={serv.id}
                className="group p-5 rounded-3xl bg-[#031B36]/80 backdrop-blur-xl border border-[#00B8E6]/30 hover:border-[#00D2FF] hover:bg-[#032347]/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(0,210,255,0.2)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#00D2FF]/15 border border-[#00D2FF]/30 flex items-center justify-center group-hover:bg-[#00D2FF] transition-all shadow-sm">
                    <div className="text-[#00D2FF] group-hover:text-[#020D1A] transition-colors">
                      {serviceIcons[serv.icon]}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40">
                    {serv.badge}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-base text-white group-hover:text-[#00D2FF] transition-colors">
                  {serv.title}
                </h3>
                <p className="text-xs text-[#DDF5FF]/70 mt-1.5 leading-relaxed">
                  {serv.description}
                </p>

                <ul className="mt-3 space-y-1 text-[11px] text-[#DDF5FF]/85 border-t border-white/10 pt-2">
                  {serv.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#00D2FF]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technician Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-[#031B36]/85 backdrop-blur-2xl p-6 text-white shadow-[0_15px_45px_rgba(0,0,0,0.6)] border border-[#00B8E6]/40">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-white/15">
                <Image
                  src="/images/lifestyle/technician.webp"
                  alt="Certified Aqua Care Technician installing water purifier"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
                  Verified & Background-Checked
                </div>

                <h3 className="font-sans font-bold text-xl text-white">
                  Chennai Doorstep Service in 4 Hours
                </h3>

                <p className="text-xs text-[#DDF5FF]/80 leading-relaxed">
                  Our certified technicians carry company identity cards, genuine factory spare parts, digital TDS calibration meters, and hygienic shoe covers.
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs text-[#DDF5FF]">
                  <div>
                    <span className="font-bold text-[#00D2FF] text-base">4.9/5 ★</span>
                    <span className="block text-[10px] text-[#DDF5FF]/70">Technician Rating</span>
                  </div>
                  <div>
                    <span className="font-bold text-white text-base">&lt; 4 Hours</span>
                    <span className="block text-[10px] text-[#DDF5FF]/70">Avg. Chennai Response</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#00D2FF] text-base">100%</span>
                    <span className="block text-[10px] text-[#DDF5FF]/70">Genuine Spare Parts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

