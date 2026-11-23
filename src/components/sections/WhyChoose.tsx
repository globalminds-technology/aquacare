import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Award, Wrench, Headphones, Zap } from "lucide-react";

export const WhyChoose: React.FC = () => {
  const points = [
    {
      title: "Lower Prices Than Amazon & Flipkart",
      desc: "Zero high marketplace commissions. 100% direct distributor savings passed onto Chennai buyers.",
    },
    {
      title: "Certified & Genuine Products",
      desc: "Direct brand sourcing with genuine warranty cards, original barcoded serial numbers, and tax invoice.",
    },
    {
      title: "Expert Installation in Chennai",
      desc: "Doorstep installation within 4 hours by trained technicians wearing shoe covers, testing water TDS live.",
    },
    {
      title: "Reliable After-Sales Support",
      desc: "Dedicated WhatsApp & call helpline with prompt service assistance and scheduled filter reminders.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Splash Glass Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-sm rounded-3xl overflow-hidden bg-gradient-to-br from-[#DDF5FF] to-[#F7FCFF] p-6 border border-[#00B8E6]/20 shadow-aqua-md flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/images/lifestyle/clean-water.webp"
                  alt="Glass of pure sparkling crystal water with splash"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Floating Quality Seal */}
              <div className="absolute -bottom-2 -right-2 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-aqua-md border border-[#DDF5FF] flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-[#DDF5FF] text-[#0077D9] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-sans font-bold text-xs text-[#073B67]">
                    100% Pure & Safe
                  </span>
                  <span className="text-[10px] text-gray-500">
                    Chennai Water Tested
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0077D9]">
                OUR VALUE PROPOSITION
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#073B67] mt-1">
                Why Choose Aqua Care Shop?
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                We believe clean drinking water is a fundamental family right, not an overpriced luxury.
              </p>
            </div>

            <div className="space-y-4">
              {points.map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F7FCFF] border border-[#DDF5FF] hover:border-[#00B8E6] transition-all"
                >
                  <div className="w-7 h-7 rounded-full bg-[#0077D9] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#073B67]">
                      {pt.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

