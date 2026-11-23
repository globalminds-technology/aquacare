"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Droplets, ArrowRight, ArrowLeft, Check, Sparkles, ShoppingCart, RefreshCcw } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { useCartStore } from "@/lib/store";

interface Answers {
  waterSource: string;
  tdsLevel: string;
  familySize: string;
  budget: string;
  preferredBrand: string;
}

export const PurifierFinder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    waterSource: "",
    tdsLevel: "",
    familySize: "",
    budget: "",
    preferredBrand: "",
  });
  const [showResult, setShowResult] = useState(false);
  const { addItem } = useCartStore();

  const questions = [
    {
      id: "waterSource",
      title: "1. What is your primary water source?",
      subtitle: "Water quality in Chennai varies dramatically depending on the extraction source.",
      options: [
        { label: "Corporation Water (Metro)", desc: "Usually TDS < 300 ppm", value: "metro" },
        { label: "Borewell Water", desc: "Hard groundwater, TDS 500 – 2000 ppm", value: "borewell" },
        { label: "Tanker Supply", desc: "Mixed water supply with high salinity", value: "tanker" },
        { label: "Mixed (Metro + Borewell)", desc: "Seasonal alteration", value: "mixed" },
      ],
    },
    {
      id: "tdsLevel",
      title: "2. Do you know your water TDS level?",
      subtitle: "Total Dissolved Solids define which membrane technology your home requires.",
      options: [
        { label: "Low (Below 300 ppm)", desc: "UV / UF purifier is sufficient", value: "low" },
        { label: "Medium (300 to 900 ppm)", desc: "RO + MTDS recommended", value: "medium" },
        { label: "High (Above 900 ppm)", desc: "High-recovery Alkaline RO needed", value: "high" },
        { label: "I don't know (Need Testing)", desc: "We provide free doorstep water testing", value: "unknown" },
      ],
    },
    {
      id: "familySize",
      title: "3. How many people are in your household?",
      subtitle: "Ensures adequate storage tank capacity and fast hourly flow rate.",
      options: [
        { label: "1 to 3 Members", desc: "6L to 8L storage capacity", value: "small" },
        { label: "4 to 6 Members", desc: "8L to 10L storage capacity", value: "medium" },
        { label: "7+ Members / Joint Family", desc: "10L+ high-capacity purifier", value: "large" },
      ],
    },
    {
      id: "budget",
      title: "4. What is your preferred budget?",
      subtitle: "Guaranteed lower prices than online marketplaces with full brand warranty.",
      options: [
        { label: "Under ₹12,000", desc: "Affordable UV/UF or essential RO", value: "budget" },
        { label: "₹12,000 to ₹18,000", desc: "Most popular RO + UV with mineral booster", value: "standard" },
        { label: "Above ₹18,000", desc: "Premium Alkaline Copper RO + smart LED display", value: "premium" },
      ],
    },
    {
      id: "preferredBrand",
      title: "5. Do you have a preferred brand?",
      subtitle: "All genuine models are serviced directly by factory certified technicians.",
      options: [
        { label: "No Preference (Best Recommendation)", desc: "Our water expert choice", value: "any" },
        { label: "Kent RO", desc: "India's trusted mineral RO technology", value: "kent" },
        { label: "A.O. Smith", desc: "Advanced 8-stage recovery technology", value: "ao-smith" },
        { label: "Aquaguard / Eureka Forbes", desc: "Active Copper & Zinc infusion", value: "aquaguard" },
      ],
    },
  ];

  const handleSelect = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setAnswers({
      waterSource: "",
      tdsLevel: "",
      familySize: "",
      budget: "",
      preferredBrand: "",
    });
    setCurrentStep(0);
    setShowResult(false);
  };

  // Selection recommendation logic
  const recommendedProduct =
    answers.budget === "budget" || answers.tdsLevel === "low"
      ? PRODUCTS[2] // HydroPlus UV+UF
      : answers.budget === "premium" || answers.tdsLevel === "high"
      ? PRODUCTS[1] // AquaMax Alkaline
      : PRODUCTS[0]; // PureFlow RO+UV

  return (
    <section id="quiz" className="py-20 bg-gradient-to-b from-[#F7FCFF] to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wizard Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-aqua-lg border border-[#DDF5FF] relative overflow-hidden">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#DDF5FF] text-[#0077D9] text-xs font-bold uppercase tracking-wider mb-2">
              <Droplets className="w-4 h-4 text-[#00B8E6]" />
              <span>Interactive Purifier Finder</span>
            </div>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#073B67]">
              Find the Right Purifier for Your Home
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Answer 5 simple questions to get Chennai’s perfect water purifier recommendation.
            </p>

            {/* Progress Bar */}
            {!showResult && (
              <div className="mt-6 flex items-center justify-center gap-2">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentStep
                        ? "w-10 bg-[#0077D9]"
                        : i < currentStep
                        ? "w-4 bg-[#00B8E6]"
                        : "w-4 bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Active Question View */}
          {!showResult ? (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center">
                <span className="text-xs font-bold text-[#0077D9] uppercase tracking-wider">
                  Step {currentStep + 1} of {questions.length}
                </span>
                <h3 className="font-sans font-bold text-lg sm:text-xl text-[#073B67] mt-1">
                  {questions[currentStep].title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {questions[currentStep].subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {questions[currentStep].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() =>
                      handleSelect(
                        questions[currentStep].id as keyof Answers,
                        opt.value
                      )
                    }
                    className="p-4 rounded-2xl border border-[#DDF5FF] hover:border-[#0077D9] hover:bg-[#DDF5FF]/40 bg-[#F7FCFF] text-left transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-sans font-bold text-sm text-[#073B67] group-hover:text-[#0077D9]">
                        {opt.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0077D9] transition-transform group-hover:translate-x-1" />
                    </div>
                    <span className="text-xs text-gray-500 mt-1.5">{opt.desc}</span>
                  </button>
                ))}
              </div>

              {/* Back button */}
              {currentStep > 0 && (
                <div className="pt-2 flex justify-start">
                  <button
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#073B67] transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous Question
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Perfect Match for Your Chennai Home
              </div>

              <h3 className="font-sans font-extrabold text-2xl text-[#073B67]">
                Recommended: {recommendedProduct.name}
              </h3>

              {/* Product Match Card */}
              <div className="max-w-md mx-auto p-5 rounded-3xl bg-[#F7FCFF] border border-[#DDF5FF] shadow-aqua-sm flex flex-col sm:flex-row items-center gap-4 text-left">
                <div className="relative w-28 h-28 flex-shrink-0">
                  <Image
                    src={recommendedProduct.image}
                    alt={recommendedProduct.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0077D9]">
                    {recommendedProduct.brand}
                  </span>
                  <h4 className="font-sans font-bold text-base text-[#073B67]">
                    {recommendedProduct.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-sans font-extrabold text-lg text-[#073B67]">
                      ₹{recommendedProduct.sellingPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      ₹{recommendedProduct.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {recommendedProduct.discount}% OFF
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1.5">
                    Includes Free Same-Day Installation in Chennai
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => addItem(recommendedProduct)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0077D9] to-[#00B8E6] text-white font-bold text-sm shadow-aqua-md hover:shadow-aqua-glow transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" /> Add to Cart & Book Installation
                </button>
                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gray-100 text-[#073B67] hover:bg-gray-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <RefreshCcw className="w-3.5 h-3.5" /> Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

