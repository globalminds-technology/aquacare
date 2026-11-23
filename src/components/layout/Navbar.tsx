"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { useCartStore } from "@/lib/store";

interface NavLink {
  name: string;
  href: string;
  id: string;
}

// 1. Exact Section Order as rendered on the Homepage
const NAV_LINKS: NavLink[] = [
  { name: "Categories", href: "#categories", id: "categories" },
  { name: "Products", href: "#products", id: "products" },
  { name: "Why Us", href: "#why-us", id: "why-us" },
  { name: "Brands", href: "#brands", id: "brands" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Purifier Quiz", href: "#quiz", id: "quiz" },
  { name: "Reviews", href: "#reviews", id: "reviews" },
  { name: "FAQs", href: "#faq", id: "faq" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  // Active tab index for ScrollTide Glass Tabs
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoverTab, setHoverTab] = useState<number | null>(null);

  // Measurements for the sliding glass lens
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const navTrackRef = useRef<HTMLElement | null>(null);

  const { totalItems, toggleCart } = useCartStore();
  const cartCount = totalItems();

  // Scroll listener for sticky header styling & active section scrollspy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy: identify which section is currently in view
      const scrollPosition = window.scrollY + 220;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_LINKS[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update the liquid glass lens position whenever active or hover tab changes
  useEffect(() => {
    const targetIndex = hoverTab !== null ? hoverTab : activeTab;
    const targetEl = tabsRef.current[targetIndex];

    if (targetEl && navTrackRef.current) {
      setIndicatorStyle({
        left: targetEl.offsetLeft,
        width: targetEl.offsetWidth,
        opacity: 1,
      });
    }
  }, [activeTab, hoverTab]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      const targetIndex = hoverTab !== null ? hoverTab : activeTab;
      const targetEl = tabsRef.current[targetIndex];
      if (targetEl) {
        setIndicatorStyle({
          left: targetEl.offsetLeft,
          width: targetEl.offsetWidth,
          opacity: 1,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab, hoverTab]);

  // Smooth scroll with navbar height offset compensation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => {
    e.preventDefault();
    setActiveTab(index);
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      const yOffset = -85;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Main Floating Capsule - Theme Colored (Deep Ocean Frosted Glass) */}
          <div className="bg-[#021528]/85 backdrop-blur-2xl rounded-full px-3 sm:px-4 py-2 border border-[#00B8E6]/40 shadow-[0_8px_32px_rgba(0,184,230,0.22),inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-between gap-1.5 sm:gap-2.5 transition-all">
            
            {/* Left: Brand Logo (Enlarged) + ScrollTide Glass Tabs (Compact, Zero dead space) */}
            <div className="flex items-center gap-2 xl:gap-3 min-w-0">
              {/* Brand Logo - Enlarged Size */}
              <Link href="/" className="flex items-center group flex-shrink-0 pl-1">
                <div className="relative h-8 sm:h-9 xl:h-10 w-32 sm:w-38 xl:w-44 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/brand/aqua-care-logo-dark-theme.png"
                    alt="Aqua Care Shop Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              {/* Thin subtle divider */}
              <div className="h-5 w-px bg-white/15 hidden lg:block flex-shrink-0" />

              {/* ========================================================= */}
              {/* ScrollTide Glass Tabs (Theme Colored)                     */}
              {/* Tight, snug spacing around Logo & FAQs                    */}
              {/* ========================================================= */}
              <nav
                ref={navTrackRef}
                onMouseLeave={() => setHoverTab(null)}
                className="hidden lg:flex items-center relative p-1 rounded-full bg-[#010E1C]/85 border border-[#00B8E6]/25 backdrop-blur-xl shadow-inner"
              >
                {/* 1. The Liquid Glass Lens (Cyan Floating Indicator) */}
                <div
                  className="absolute top-1 bottom-1 rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"
                  style={{
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`,
                    opacity: indicatorStyle.opacity,
                    background:
                      "linear-gradient(135deg, rgba(0,210,255,0.28) 0%, rgba(0,119,217,0.35) 100%)",
                    boxShadow:
                      "0 0 18px rgba(0, 210, 255, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.45)",
                    border: "1px solid rgba(0, 210, 255, 0.65)",
                  }}
                >
                  {/* Specular Prism Glint */}
                  <div className="absolute inset-x-2.5 top-0.5 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent" />
                </div>

                {/* 2. Interactive Navigation Options */}
                {NAV_LINKS.map((link, idx) => {
                  const isActive = activeTab === idx;
                  const isHovered = hoverTab === idx;

                  return (
                    <a
                      key={link.id}
                      ref={(el) => {
                        tabsRef.current[idx] = el;
                      }}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, idx)}
                      onMouseEnter={() => setHoverTab(idx)}
                      className={`relative z-10 text-[11px] xl:text-xs font-semibold px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer select-none flex items-center gap-1 ${
                        isActive || isHovered
                          ? "text-white font-extrabold drop-shadow-[0_0_12px_rgba(0,210,255,0.85)]"
                          : "text-[#DDF5FF]/75 hover:text-[#00D2FF]"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Right: Search, Account, Cart & Shop Now (Snug Spacing next to FAQs) */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search purifiers"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#DDF5FF] hover:text-[#00D2FF] hover:bg-white/10 transition-all border border-transparent hover:border-[#00D2FF]/30"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Login / User Account */}
              <button
                onClick={() => setAccountModalOpen(true)}
                aria-label="User account"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#DDF5FF] hover:text-[#00D2FF] hover:bg-white/10 transition-all border border-transparent hover:border-[#00D2FF]/30"
              >
                <User className="w-4 h-4" />
              </button>

              {/* Cart Drawer Toggle with Badge */}
              <button
                onClick={toggleCart}
                aria-label="View shopping cart"
                className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/35 hover:bg-[#00D2FF] hover:text-[#020D1A] transition-all shadow-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#00D2FF] text-[#020D1A] text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Shop Now CTA Button */}
              <a
                href="#products"
                onClick={(e) => handleNavClick(e, "#products", 1)}
                className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full text-xs font-extrabold text-[#020D1A] bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] hover:shadow-[0_0_20px_rgba(0,210,255,0.7)] hover:scale-105 active:scale-95 transition-all"
              >
                Shop Now
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-[#DDF5FF] hover:bg-white/10 ml-0.5"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#00D2FF]" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>

          {/* Quick Search Dropdown - Theme Styled */}
          {searchOpen && (
            <div className="mt-2.5 p-3 bg-[#021528]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-[#00B8E6]/40 flex items-center gap-3 animate-in fade-in slide-in-from-top duration-200">
              <Search className="w-5 h-5 text-[#00D2FF]" />
              <input
                type="text"
                placeholder="Search RO Purifiers, Kent, AO Smith, Alkaline..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-sm text-white placeholder:text-[#DDF5FF]/40"
                autoFocus
              />
              <a
                href="#products"
                onClick={(e) => {
                  handleNavClick(e, "#products", 1);
                  setSearchOpen(false);
                }}
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#00D2FF] to-[#0077D9] text-[#020D1A] font-bold text-xs hover:shadow-[0_0_15px_rgba(0,210,255,0.6)] transition-all"
              >
                Find
              </a>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[#DDF5FF]/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer with Ordered Sections & Theme Glass Styling */}
        {mobileMenuOpen && (
          <div className="lg:hidden max-w-7xl mx-auto px-3 sm:px-6 mt-2">
            <div className="bg-[#021528]/95 backdrop-blur-2xl rounded-3xl border border-[#00B8E6]/40 shadow-2xl p-5 space-y-3 animate-in slide-in-from-top duration-300">
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, idx)}
                      className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40 font-bold shadow-sm"
                          : "text-[#DDF5FF]/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:+919444412345"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF] font-semibold text-sm hover:bg-[#00D2FF]/25 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#00D2FF]" /> Chennai Helpline: +91 94444 12345
                </a>
                <a
                  href="#products"
                  onClick={(e) => handleNavClick(e, "#products", 1)}
                  className="text-center py-2.5 rounded-xl bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] text-[#020D1A] font-extrabold text-sm shadow-[0_0_20px_rgba(0,210,255,0.6)]"
                >
                  Explore Water Purifiers
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Account / Login Modal - Theme Styled */}
      {accountModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
          <div className="bg-[#031B38] text-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-[#00B8E6]/40 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setAccountModalOpen(false)}
              className="absolute top-4 right-4 text-[#DDF5FF]/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(0,210,255,0.3)]">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-sans font-bold text-lg text-white">Aqua Care Login</h3>
              <p className="text-xs text-[#DDF5FF]/70 mt-1 mb-4">
                Access your orders, warranty certificates, and technician service bookings.
              </p>
              <input
                type="tel"
                placeholder="Enter 10-digit Mobile Number"
                className="w-full px-4 py-2.5 rounded-xl border border-[#00B8E6]/30 bg-[#010E1C] text-white text-sm focus:border-[#00D2FF] outline-none mb-3 placeholder:text-[#DDF5FF]/40"
              />
              <button
                onClick={() => setAccountModalOpen(false)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#00D2FF] via-[#00B8E6] to-[#0077D9] text-[#020D1A] text-sm font-extrabold hover:shadow-[0_0_20px_rgba(0,210,255,0.6)] transition-all"
              >
                Request OTP Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
