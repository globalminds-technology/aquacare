import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ShieldCheck,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ArrowRight,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020D1A] text-[#DDF5FF] overflow-hidden pt-16 pb-8 border-t border-[#00B8E6]/30">
      {/* Decorative Wave Top SVG */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#0077D9] via-[#00B8E6] to-[#0077D9] opacity-80" />

      {/* Background Water Wave Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-64 bg-[#00B8E6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/brand/aqua-care-logo-white.svg"
                  alt="Aqua Care Shop"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-2xl tracking-tight text-white leading-none">
                  AQUA CARE
                </span>
                <span className="text-[11px] tracking-widest uppercase font-semibold text-[#00B8E6]">
                  HI-TECH SYSTEMS &bull; SINCE 2008
                </span>
              </div>
            </div>

            <p className="text-sm text-[#DDF5FF]/80 leading-relaxed max-w-sm">
              Pure Water. Trusted Since 2008. Chennai's leading destination for water purifiers, with guaranteed lower prices than Amazon & Flipkart, backed by certified doorstep installation and 1-year unlimited free service.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-[#DDF5FF]/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Flagship Store & Head Office:</strong><br />
                  15A, Shastri Nagar Main Road, Near Kakkan Bridge, Adambakkam, Chennai, Tamil Nadu 600088
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00D2FF] flex-shrink-0" />
                <a href="tel:+916383321623" className="hover:text-white transition-colors">
                  📞 +91-6383321623
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00D2FF] flex-shrink-0" />
                <a href="mailto:aquacarehs@gmail.com" className="hover:text-white transition-colors">
                  ✉️ aquacarehs@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href="https://wa.me/916383321623?text=Hi%20Aqua%20Care%2C%20I%20want%20the%20best%20price%20for%20a%20water%20purifier."
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-300 hover:text-white transition-colors"
                >
                  WhatsApp Consultation: +91-6383321623
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-white text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#DDF5FF]/75">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  RO Purifiers
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  UV & UF Purifiers
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Alkaline Purifiers
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-white transition-colors">
                  Brands Showcase
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Installation & AMC
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-white transition-colors">
                  Purifier Finder Quiz
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-sans font-bold text-white text-base mb-4 tracking-wide">
              Support & Service
            </h4>
            <ul className="space-y-2 text-sm text-[#DDF5FF]/75">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Book Chennai Technician
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Filter Replacement
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Warranty Registration
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#price-advantage" className="hover:text-white transition-colors">
                  Price Match Guarantee
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aqua+Care+Hi-Tech+Systems+Adambakkam+Chennai"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Google Maps Store Location (Adambakkam)
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Chennai Promise */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-white text-base tracking-wide">
              Chennai Promise
            </h4>
            <p className="text-xs text-[#DDF5FF]/75 leading-relaxed">
              Serving Chennai since 2008. Same-day delivery and certified free doorstep installation across Adambakkam, Velachery, Tambaram, OMR, and all Chennai pin codes.
            </p>
            <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00B8E6]">
                <Clock className="w-4 h-4" /> Store Timings
              </div>
              <p className="text-xs text-[#DDF5FF]/90">
                Mon - Sun: 9:00 AM to 9:30 PM (All 7 Days Open)
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#00B8E6] flex items-center justify-center text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#00B8E6] flex items-center justify-center text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#00B8E6] flex items-center justify-center text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#00B8E6] flex items-center justify-center text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DDF5FF]/60 gap-4">
          <p>
            &copy; 2026 Aqua Care Hi-Tech Systems, Chennai. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer">Chennai Service Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

