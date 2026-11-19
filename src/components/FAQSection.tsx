"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { BRAND } from "@/data/brand";
import { FAQS_DATA } from "@/data/faqs";

export { FAQS_DATA };

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Clear, straightforward answers about fundamental equity research, our investment approach, and how we work with investors.",
  className = "",
}) => {
  const [activeCategory, setActiveCategory] = useState<"all" | "fundamental-research" | "working-with-us">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS_DATA.filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory
  );

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sunnyWhatsappUrl = `https://wa.me/${BRAND.contact.whatsappDefaultNumber}?text=${encodeURIComponent(
    "Hello Sunny, I have a few questions about Longview Capital's research subscription."
  )}`;

  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
            Knowledge &amp; Queries
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto my-2" />
          <p className="text-xs sm:text-sm text-warmgrey max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setOpenIndex(0);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-navy text-white shadow-sm"
                : "bg-white text-warmgrey border border-gold-border/60 hover:text-navy hover:border-gold"
            }`}
          >
            All Questions ({FAQS_DATA.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("fundamental-research");
              setOpenIndex(0);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === "fundamental-research"
                ? "bg-navy text-white shadow-sm"
                : "bg-white text-warmgrey border border-gold-border/60 hover:text-navy hover:border-gold"
            }`}
          >
            Fundamental Research (7)
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("working-with-us");
              setOpenIndex(0);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === "working-with-us"
                ? "bg-navy text-white shadow-sm"
                : "bg-white text-warmgrey border border-gold-border/60 hover:text-navy hover:border-gold"
            }`}
          >
            Working With Us (6)
          </button>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E8D2A7]/80 shadow-[0_4px_20px_-8px_rgba(16,37,66,0.05)] transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-navy text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#E8D2A7] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-gold text-white border-gold" : "bg-[#FAF8F5] text-navy"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-warmgrey leading-relaxed border-t border-[#E8D2A7]/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-8 p-5 bg-white rounded-2xl border border-[#E8D2A7]/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <h4 className="font-serif font-bold text-navy text-sm">
              Have another question?
            </h4>
            <p className="text-xs text-warmgrey">
              Sunny is available on WhatsApp to answer any specific questions about our research.
            </p>
          </div>
          <a
            href={sunnyWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
