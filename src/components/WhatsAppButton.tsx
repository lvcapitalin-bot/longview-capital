"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { BRAND } from "@/data/brand";

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${BRAND.contact.whatsappDefaultNumber}?text=${encodeURIComponent(
    BRAND.contact.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white text-navy p-3.5 rounded-xl shadow-xl border border-gold-border text-xs animate-fadeIn relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-warmgrey hover:text-navy p-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-navy">Sunny Nenwani &bull; Financial Analyst</span>
          </div>
          <p className="text-warmgrey text-[11px] leading-relaxed mb-2">
            Have questions about our investment research services? Connect directly with Sunny on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-emerald-700 hover:underline flex items-center gap-1"
          >
            Chat with Sunny (+91 79847 21288) &rarr;
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Connect on WhatsApp with Longview Capital"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        {/* Active Ping Beacon */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
        </span>
      </a>
    </div>
  );
};
