import React from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustBenefits } from "@/components/sections/TrustBenefits";
import { Categories } from "@/components/sections/Categories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { PriceAdvantage } from "@/components/sections/PriceAdvantage";
import { BrandShowcase } from "@/components/sections/BrandShowcase";
import { Services } from "@/components/sections/Services";
import { PurifierFinder } from "@/components/sections/PurifierFinder";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <div className="relative">
      {/* 1. Full Hero Section with 3D Water Purifier Canvas */}
      <Hero />

      {/* 2. Floating Trust & Benefits Capsule */}
      <TrustBenefits />

      {/* 3. Product Categories */}
      <Categories />

      {/* 4. Featured Best-Selling Purifiers */}
      <FeaturedProducts />

      {/* 5. Marketplace Price Advantage */}
      <PriceAdvantage />

      {/* 6. Shop by Brand (Clutch Cards) */}
      <BrandShowcase />

      {/* 7. Installation & Certified Services */}
      <Services />

      {/* 8. Interactive Purifier Finder Questionnaire */}
      <PurifierFinder />

      {/* 9. Why Choose Aqua Care Shop? */}
      <WhyChoose />

      {/* 10. Reviews & FAQ Side-by-Side Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <CustomerReviews />
            <FAQ />
          </div>
        </div>
      </section>
    </div>
  );
}

