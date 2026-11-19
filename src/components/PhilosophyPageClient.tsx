"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Clock,
  Shield,
  Layers,
  HeartHandshake,
  CheckCircle2,
  MessageCircle
} from "lucide-react";
import { BRAND } from "@/data/brand";
import { MountainMotif } from "@/components/MountainMotif";
import { CompoundingVisualizer } from "@/components/CompoundingVisualizer";
import { ConsultationModal } from "@/components/ConsultationModal";

export default function PhilosophyPageClient() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const sunnyWhatsappUrl = `https://wa.me/${BRAND.contact.whatsappDefaultNumber}?text=${encodeURIComponent(
    "Hello Sunny, I would like to learn more about Longview Capital's investment philosophy."
  )}`;

  return (
    <div className="relative bg-[#FAF8F5]">
      {/* 1. HERO SECTION */}
      <section className="pt-12 pb-14 md:pt-20 md:pb-18 relative overflow-hidden">
        <MountainMotif variant="watermark" className="right-0 top-0 opacity-25" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold block">
            Our Investment Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-navy leading-tight font-bold">
            The Long View Changes Everything.
          </h1>
          <div className="w-12 h-0.5 bg-gold mx-auto" />

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-warmgrey leading-relaxed font-light">
            When you expand your investment horizon from days to years, daily market noise fades away, and true business compounding takes center stage.
          </p>
        </div>
      </section>

      {/* 2. FIVE CORE PILLARS */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {/* Theme 1: Business Before Stock Price */}
          <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="text-2xl font-serif font-bold text-gold block mb-1">01</span>
                <h3 className="text-xl font-serif text-navy font-bold leading-tight">
                  Business Before Stock Price
                </h3>
              </div>
              <div className="md:col-span-8 space-y-2 text-xs sm:text-sm text-warmgrey leading-relaxed">
                <p>
                  A stock is not just a fluctuating number on a screen—it represents ownership in a living business with real products, customers, and factories.
                </p>
                <p>
                  We never ask &ldquo;where will this stock trade next month?&rdquo; We ask: &ldquo;is this a durable business, and will its earnings power be significantly higher 3 to 5 years from now?&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Theme 2: Patience Over Noise */}
          <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="text-2xl font-serif font-bold text-gold block mb-1">02</span>
                <h3 className="text-xl font-serif text-navy font-bold leading-tight">
                  Patience Over Noise
                </h3>
              </div>
              <div className="md:col-span-8 space-y-2 text-xs sm:text-sm text-warmgrey leading-relaxed">
                <p>
                  Financial news and social media are designed to trigger daily excitement and fear. But constant trading is often the single biggest enemy of actual returns.
                </p>
                <p>
                  We choose calm, patient observation over impulsive reactions to market headlines.
                </p>
              </div>
            </div>
          </div>

          {/* Theme 3: Fundamentals Over Hype */}
          <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="text-2xl font-serif font-bold text-gold block mb-1">03</span>
                <h3 className="text-xl font-serif text-navy font-bold leading-tight">
                  Fundamentals Over Hype
                </h3>
              </div>
              <div className="md:col-span-8 space-y-2 text-xs sm:text-sm text-warmgrey leading-relaxed">
                <p>
                  Market excitement can push prices up for a short while, but real corporate fundamentals always win in the long run.
                </p>
                <p>
                  We examine real balance sheets, low debt, free cash flow, and sensible valuations. We never chase fashionable themes at absurd prices.
                </p>
              </div>
            </div>
          </div>

          {/* Theme 4: Discipline Over Emotion */}
          <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="text-2xl font-serif font-bold text-gold block mb-1">04</span>
                <h3 className="text-xl font-serif text-navy font-bold leading-tight">
                  Discipline Over Emotion
                </h3>
              </div>
              <div className="md:col-span-8 space-y-2 text-xs sm:text-sm text-warmgrey leading-relaxed">
                <p>
                  It is natural for investors to feel euphoric at market peaks and fearful during corrections. Having a clear, pre-defined research checklist prevents emotional mistakes.
                </p>
                <p>
                  Our research gives you the conviction to stay grounded during market volatility.
                </p>
              </div>
            </div>
          </div>

          {/* Theme 5: Compounding Takes Time */}
          <div className="bg-white rounded-2xl border border-[#E8D2A7]/80 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="text-2xl font-serif font-bold text-gold block mb-1">05</span>
                <h3 className="text-xl font-serif text-navy font-bold leading-tight">
                  Compounding Takes Time
                </h3>
              </div>
              <div className="md:col-span-8 space-y-2 text-xs sm:text-sm text-warmgrey leading-relaxed">
                <p>
                  Compounding is one of the most powerful wealth creation forces, but it requires calendar years to gather momentum. In the early years, progress seems steady; in later years, the results become remarkable.
                </p>
                <p>
                  When you give high-quality companies the time to reinvest profits, time becomes your greatest asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE VISUALIZER */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-8 space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold block">
              Calculate Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-navy font-bold">
              Visualize the Power of Holding Runway
            </h2>
            <p className="text-xs sm:text-sm text-warmgrey">
              See why multi-year patience vastly outperforms short-term market timing.
            </p>
          </div>

          <CompoundingVisualizer />
        </div>
      </section>

      {/* 4. CLOSING BANNER */}
      <section className="py-14 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif text-navy font-bold">
            Think With Clarity. Invest With Conviction.
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto my-2" />
          <p className="text-xs sm:text-sm text-warmgrey max-w-lg mx-auto">
            Ready to transition from speculative market tips to calm, research-backed equity investing?
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setIsConsultOpen(true)}
              className="px-8 py-3.5 bg-gold hover:bg-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition"
            >
              Let&apos;s Talk
            </button>
            <a
              href={sunnyWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Sunny</span>
            </a>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isConsultOpen} onClose={() => setIsConsultOpen(false)} />
    </div>
  );
}
