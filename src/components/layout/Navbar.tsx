"use client";

import React, { useState, useEffect } from "react";
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

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  const { totalItems, toggleCart } = useCartStore();
  const cartCount = totalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { name: "Categories", href: "#categories" },
    { name: "Products", href: "#products" },
    { name: "Brands", href: "#brands" },
    { name: "Services", href: "#services" },
    { name: "Purifier Quiz", href: "#quiz" },
    { name: "Why Us", href: "#why-us" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2.5 sm:py-3" : "py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Unified White Pill Floating Bar */}
          <div className="bg-white/95 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 sm:py-2.5 border border-[#DDF5FF] shadow-aqua-sm hover:shadow-aqua-md transition-all flex items-center justify-between gap-3 sm:gap-4">
            {/* 1. Left: Pure Brand Logo (Replaced text with logo) */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <div className="relative h-7 sm:h-9 w-28 sm:w-36 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/brand/aqua-care-shop-logo.png"
                  alt="Aqua Care Shop Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* 2. Middle: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-medium text-[#073B67] hover:text-[#0077D9] px-2.5 xl:px-3 py-1.5 rounded-full transition-colors hover:bg-[#DDF5FF]/60"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* 3. Right: Search, Login, Cart, Shop Now */}
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
                className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#0077D9] to-[#00B8E6] hover:shadow-aqua-glow hover:opacity-95 transition-all transform hover:-translate-y-0.5"
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
                onClick={() => setSearchOpen(false)}
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

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden max-w-7xl mx-auto px-3 sm:px-6 mt-2">
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl border border-[#DDF5FF] shadow-xl p-5 space-y-3 animate-in slide-in-from-top duration-300">
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#DDF5FF]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-xl text-sm font-medium text-[#073B67] hover:bg-[#DDF5FF] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
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
                  onClick={() => setMobileMenuOpen(false)}
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
