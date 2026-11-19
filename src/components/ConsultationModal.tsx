"use client";

import React from "react";
import { X } from "lucide-react";
import { ContactForm } from "./ContactForm";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultInterest = "Equity Research Subscription",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gold-border/70 overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Longview Capital Enquiry Form"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold-Navy Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-gold via-gold-champagne to-navy shrink-0" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-warmgrey hover:text-navy hover:bg-ivory rounded-full transition z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Single Unified Enquiry Form */}
        <div className="p-6 md:p-8 overflow-y-auto">
          <ContactForm
            isModal={true}
            defaultInterest={defaultInterest}
            onSuccessClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};
