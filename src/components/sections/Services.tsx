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
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0077D9]">
              CERTIFIED TECHNICIANS IN CHENNAI
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#073B67] mt-1">
              Installation & Services
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Professional, clean, same-day service by factory-trained technicians across all Chennai zones.
            </p>
          </div>

          <a
            href="tel:+919444412345"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DDF5FF] text-[#0077D9] font-bold text-xs hover:bg-[#0077D9] hover:text-white transition-all mt-4 sm:mt-0"
          >
            <Phone className="w-4 h-4" /> Book Technician: +91 94444 12345
          </a>
        </div>

        {/* Services & Technician Visual Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 4 Service Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((serv) => (
              <div
                key={serv.id}
                className="group p-5 rounded-3xl bg-[#F7FCFF] border border-[#DDF5FF] hover:border-[#00B8E6] shadow-sm hover:shadow-aqua-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#DDF5FF] flex items-center justify-center group-hover:bg-[#0077D9] transition-colors shadow-sm">
                    <div className="group-hover:[&_svg]:text-white transition-colors">
                      {serviceIcons[serv.icon]}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#DDF5FF] text-[#0077D9]">
                    {serv.badge}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-base text-[#073B67] group-hover:text-[#0077D9] transition-colors">
                  {serv.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  {serv.description}
                </p>

                <ul className="mt-3 space-y-1 text-[11px] text-[#073B67] border-t border-[#DDF5FF] pt-2">
                  {serv.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5 font-medium">
                      <Check className="w-3 h-3 text-[#00B8E6]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technician Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#073B67] to-[#0077D9] p-6 text-white shadow-aqua-lg">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-white/20">
                <Image
                  src="/images/lifestyle/technician.webp"
                  alt="Certified Aqua Care Technician installing water purifier"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#DDF5FF] text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00B8E6]" />
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
                    <span className="font-bold text-white text-base">4.9/5 ★</span>
                    <span className="block text-[10px] text-[#DDF5FF]/70">Technician Rating</span>
                  </div>
                  <div>
                    <span className="font-bold text-white text-base">&lt; 4 Hours</span>
                    <span className="block text-[10px] text-[#DDF5FF]/70">Avg. Chennai Response</span>
                  </div>
                  <div>
                    <span className="font-bold text-white text-base">100%</span>
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

