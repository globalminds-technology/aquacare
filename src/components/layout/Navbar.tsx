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
  Check,
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
    { name: "Products", href: "#products" },
    { name: "Categories", href: "#categories" },
    { name: "Brands", href: "#brands" },
    { name: "Services", href: "#services" },
    { name: "Purifier Quiz", href: "#quiz" },
    { name: "Why Us", href: "#why-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#F7FCFF]/90 backdrop-blur-xl shadow-aqua-sm border-b border-[#00B8E6]/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/brand/aqua-care-logo.svg"
                  alt="Aqua Care Shop Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight text-[#073B67] leading-none">
                  AQUA CARE
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#0077D9]">
                  SHOP &bull; CHENNAI
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#DDF5FF] shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-medium text-[#073B67] hover:text-[#0077D9] px-3 py-1.5 rounded-full transition-colors hover:bg-[#DDF5FF]/60"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search purifiers"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#073B67] hover:text-[#0077D9] hover:bg-[#DDF5FF] transition-all"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Account Modal Toggle */}
              <button
                onClick={() => setAccountModalOpen(true)}
                aria-label="User account"
                className="w-10 h-10 rounded-full hidden sm:flex items-center justify-center text-[#073B67] hover:text-[#0077D9] hover:bg-[#DDF5FF] transition-all"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Cart Drawer Toggle */}
              <button
                onClick={toggleCart}
                aria-label="View shopping cart"
                className="relative w-10 h-10 rounded-full flex items-center justify-center bg-[#DDF5FF] text-[#0077D9] hover:bg-[#0077D9] hover:text-white transition-all shadow-sm"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#0077D9] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* CTA Shop Now */}
              <a
                href="#products"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#0077D9] to-[#00B8E6] hover:shadow-aqua-glow hover:opacity-95 transition-all transform hover:-translate-y-0.5"
              >
                Shop Now
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#073B67] hover:bg-[#DDF5FF]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
          <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-[#DDF5FF] shadow-xl px-6 py-5 mt-2 space-y-3 animate-in slide-in-from-top duration-300">
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
        )}
      </header>

      {/* Account Modal */}
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
              <h3 className="font-sans font-bold text-lg text-[#073B67]">Aqua Care Chennai Account</h3>
              <p className="text-xs text-gray-500 mt-1 mb-4">
                Access warranty certificates, booking status & AMC maintenance history.
              </p>
              <input
                type="tel"
                placeholder="Enter 10-digit Chennai Mobile Number"
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

