import React from "react";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TrustBenefits } from "@/components/sections/TrustBenefits";
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

      {/* 02 — Immersive Hero Section + Trust & Benefits Capsule */}
      <Hero />
      <TrustBenefits />

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
      <section id="reviews-faq" className="py-24 bg-[#020D1A] relative overflow-hidden">
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
