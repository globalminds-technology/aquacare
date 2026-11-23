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
  Sparkles,
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
          isScrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Main Floating Pill Capsule */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-full px-3.5 sm:px-5 py-2 border border-[#DDF5FF] shadow-[0_8px_30px_rgba(0,184,230,0.12)] flex items-center justify-between gap-2 sm:gap-4 transition-all">
            
            {/* Left: Pure Brand Logo + ScrollTide Glass Tabs (Zero dead space!) */}
            <div className="flex items-center gap-2 sm:gap-3 xl:gap-4 min-w-0">
              {/* Brand Logo */}
              <Link href="/" className="flex items-center group flex-shrink-0">
                <div className="relative h-7 sm:h-8 xl:h-9 w-26 sm:w-32 xl:w-36 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/brand/aqua-care-shop-logo.png"
                    alt="Aqua Care Shop Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              {/* Subtle Elegant Vertical Divider */}
              <div className="h-6 w-px bg-slate-200/80 hidden lg:block flex-shrink-0" />

              {/* ========================================================= */}
              {/* ScrollTide Glass Tabs (c-glass-tabs)                      */}
              {/* Liquid lens glides, refracts and settles over active tab  */}
              {/* ========================================================= */}
              <nav
                ref={navTrackRef}
                onMouseLeave={() => setHoverTab(null)}
                className="hidden lg:flex items-center relative p-1 rounded-full bg-slate-100/80 border border-slate-200/70 backdrop-blur-md shadow-inner"
              >
                {/* 1. The Liquid Glass Lens (Sliding Indicator) */}
                <div
                  className="absolute top-1 bottom-1 rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"
                  style={{
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`,
                    opacity: indicatorStyle.opacity,
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(240,249,255,0.9) 100%)",
                    boxShadow:
                      "0 4px 14px rgba(0, 184, 230, 0.24), 0 1px 3px rgba(0, 119, 217, 0.12), inset 0 1px 1px rgba(255, 255, 255, 1)",
                    border: "1px solid rgba(0, 184, 230, 0.35)",
                  }}
                >
                  {/* Specular Prism Glint */}
                  <div className="absolute inset-x-2.5 top-0.5 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-[#00D2FF]/80 to-transparent" />
                  {/* Subtle Underglow */}
                  <div className="absolute inset-x-3 bottom-0 h-2 rounded-full bg-[#00D2FF]/20 blur-sm" />
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
                          ? "text-[#0077D9] font-bold"
                          : "text-[#073B67]/75 hover:text-[#0077D9]"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Right: Search, Account, Cart & Shop Now */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search purifiers"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#073B67] hover:text-[#0077D9] hover:bg-[#DDF5FF] transition-all"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Login / User Account */}
              <button
                onClick={() => setAccountModalOpen(true)}
                aria-label="User account"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#073B67] hover:text-[#0077D9] hover:bg-[#DDF5FF] transition-all"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Cart Drawer Toggle with Badge */}
              <button
                onClick={toggleCart}
                aria-label="View shopping cart"
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#DDF5FF] text-[#0077D9] hover:bg-[#0077D9] hover:text-white transition-all shadow-sm"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#0077D9] text-white text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Shop Now CTA Button */}
              <a
                href="#products"
                onClick={(e) => handleNavClick(e, "#products", 1)}
                className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-[#0077D9] to-[#00B8E6] hover:shadow-[0_0_20px_rgba(0,184,230,0.6)] hover:scale-105 active:scale-95 transition-all"
              >
                Shop Now
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#073B67] hover:bg-[#DDF5FF] ml-1"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Quick Search Dropdown */}
          {searchOpen && (
            <div className="mt-3 p-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-aqua-md border border-[#DDF5FF] flex items-center gap-3 animate-in fade-in slide-in-from-top duration-200">
              <Search className="w-5 h-5 text-[#0077D9]" />
              <input
                type="text"
                placeholder="Search RO Purifiers, Kent, AO Smith, Alkaline..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-sm text-[#073B67] placeholder:text-gray-400"
                autoFocus
              />
              <a
                href="#products"
                onClick={(e) => {
                  handleNavClick(e, "#products", 1);
                  setSearchOpen(false);
                }}
                className="px-4 py-1.5 rounded-lg bg-[#0077D9] text-white text-xs font-medium hover:bg-[#00B8E6] transition-colors"
              >
                Find
              </a>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer with Ordered Sections & Glass Styling */}
        {mobileMenuOpen && (
          <div className="lg:hidden max-w-7xl mx-auto px-3 sm:px-6 mt-2">
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl border border-[#DDF5FF] shadow-xl p-5 space-y-3 animate-in slide-in-from-top duration-300">
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#DDF5FF]">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, idx)}
                      className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-[#DDF5FF] text-[#0077D9] font-bold shadow-sm"
                          : "text-[#073B67] hover:bg-[#DDF5FF]/50"
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
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#DDF5FF] text-[#0077D9] font-medium text-sm"
                >
                  <PhoneCall className="w-4 h-4" /> Chennai Helpline: +91 94444 12345
                </a>
                <a
                  href="#products"
                  onClick={(e) => handleNavClick(e, "#products", 1)}
                  className="text-center py-2.5 rounded-xl bg-gradient-to-r from-[#0077D9] to-[#00B8E6] text-white font-semibold text-sm"
                >
                  Explore Water Purifiers
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Account / Login Modal */}
      {accountModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-[#DDF5FF] relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setAccountModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#DDF5FF] text-[#0077D9] flex items-center justify-center mb-3">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#073B67]">Aqua Care Login</h3>
              <p className="text-xs text-gray-500 mt-1 mb-4">
                Access your orders, warranty certificates, and technician service bookings.
              </p>
              <input
                type="tel"
                placeholder="Enter 10-digit Mobile Number"
                className="w-full px-4 py-2.5 rounded-xl border border-[#DDF5FF] text-sm focus:border-[#0077D9] outline-none mb-3"
              />
              <button
                onClick={() => setAccountModalOpen(false)}
                className="w-full py-2.5 rounded-xl bg-[#0077D9] text-white text-sm font-semibold hover:bg-[#00B8E6] transition-colors"
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
