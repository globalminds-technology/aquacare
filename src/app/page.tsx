import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { BrandShowcase } from "@/components/sections/BrandShowcase";
import { Services } from "@/components/sections/Services";
import { PurifierFinder } from "@/components/sections/PurifierFinder";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <div className="relative bg-[#020D1A]">
      {/* 01 — Splash Screen is loaded globally in RootLayout */}

      {/* 02 — Immersive Hero Section */}
      <Hero />

      {/* 03 — Shop by Brand (Authorised Brand Showcase directly below Hero) */}
      <BrandShowcase />

      {/* 04 — Explore Water Purifiers (Interactive Category Cards) */}
      <Categories />

      {/* 05 — Featured Products (Best-Selling Purifiers with Add-to-Cart) */}
      <FeaturedProducts />

      {/* 06 — Why Aqua Care? (Price Advantage + Pure Water Glass Splash) */}
      <WhyChoose />

      {/* 07 — Installation & Services (Services Grid + Certified Technician) */}
      <Services />

      {/* 08 — Find the Right Purifier (Interactive 5-Step Wizard Quiz) */}
      <PurifierFinder />

      {/* 09 & 10 — Customer Reviews & Frequently Asked Questions */}
      <section
        id="reviews-faq"
        className="py-24 relative overflow-hidden bg-[#020D1A]"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, #062b54 0%, #03162a 55%, #020D1A 100%)",
        }}
      >
        {/* Soft Ambient Cyan Lighting Glows (Clean Service style without wave effect) */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[450px] bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#0077D9]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* 09 — Customer Reviews */}
            <CustomerReviews />
            {/* 10 — Frequently Asked Questions */}
            <FAQ />
          </div>
        </div>
      </section>

      {/* 11 — Contact & Footer is rendered globally in RootLayout */}
    </div>
  );
}
