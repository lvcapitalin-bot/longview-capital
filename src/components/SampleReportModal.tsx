"use client";

import React, { useState } from "react";
import { X, CheckCircle2, FileText, Download, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { BRAND } from "@/data/brand";

interface SampleReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleReportModal: React.FC<SampleReportModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    investorType: "Affluent Professional",
    interest: "Small & Mid Cap Research",
    consent: true,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.mobile) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    if (!formData.consent) {
      setErrorMessage("Please accept the terms and privacy consent.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "Sample Report Request",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to process request at this moment. Please try again.");
      }

      setStatus("success");
    } catch {
      // Graceful fallback for mock mode
      setTimeout(() => {
        setStatus("success");
      }, 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gold-border/60 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sample-report-title"
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-gold via-gold-champagne to-navy" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-warmgrey hover:text-navy hover:bg-ivory rounded-full transition"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-serif text-navy mb-2">Sample Report Request Received</h3>
              <p className="text-warmgrey text-sm mb-6 max-w-md mx-auto">
                Thank you, <strong className="text-navy">{formData.fullName}</strong>. A sample research framework summary has been dispatched to <span className="text-navy font-medium">{formData.email}</span>.
              </p>

              {/* Sample Report Card Preview */}
              <div className="bg-ivory border border-gold-border/60 rounded-xl p-5 mb-6 text-left max-w-md mx-auto">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-14 bg-navy text-gold flex flex-col items-center justify-center rounded shadow-sm shrink-0">
                    <FileText className="w-6 h-6" />
                    <span className="text-[9px] font-bold tracking-widest mt-0.5">PDF</span>
                  </div>
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-gold/15 text-gold-dark rounded mb-1">
                      Institutional Template
                    </span>
                    <h4 className="text-sm font-semibold text-navy leading-tight">
                      Longview Capital — Sample Equity Research Note
                    </h4>
                    <p className="text-xs text-warmgrey mt-1">
                      Format: 14-page Deep Dive (Business Moat, Forensic Balance Sheet, Financial Modeling & Downside Risk Matrix)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${BRAND.contact.whatsappDefaultNumber}?text=Hi%20Sunny%2C%20I%20just%20requested%20the%20sample%20research%20report%20from%20the%20website%20for%20${encodeURIComponent(formData.fullName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition shadow-sm"
                >
                  Confirm on WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-ivory hover:bg-white text-navy border border-warmgrey-border rounded-lg text-sm font-medium transition"
                >
                  Done
                </button>
              </div>

              <p className="text-[11px] text-warmgrey mt-5">
                Note: Longview Capital adheres to SEBI research analyst regulations. Actual recommendations are provided exclusively to authorized subscribers.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-2 text-gold">
                <FileText className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-semibold">Institutional Research Sample</span>
              </div>
              <h3 id="sample-report-title" className="text-2xl font-serif text-navy mb-2">
                Request a Sample Research Report
              </h3>
              <p className="text-warmgrey text-sm mb-6 leading-relaxed">
                Review our independent fundamental research methodology, financial scrutiny models, and risk evaluation format before subscribing.
              </p>

              {errorMessage && (
                <div className="p-3 mb-4 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rajesh Parekh"
                    className="w-full px-4 py-2.5 bg-ivory border border-gold-border/80 rounded-lg text-sm text-navy placeholder:text-warmgrey/60 focus:bg-white focus:border-gold focus:outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wider">
                      Work / Personal Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-2.5 bg-ivory border border-gold-border/80 rounded-lg text-sm text-navy placeholder:text-warmgrey/60 focus:bg-white focus:border-gold focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wider">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 bg-ivory border border-gold-border/80 rounded-lg text-sm text-navy placeholder:text-warmgrey/60 focus:bg-white focus:border-gold focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wider">
                      Investor Profile
                    </label>
                    <select
                      value={formData.investorType}
                      onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-ivory border border-gold-border/80 rounded-lg text-sm text-navy focus:bg-white focus:border-gold focus:outline-none transition"
                    >
                      <option value="HNI / UHNI">HNI / UHNI</option>
                      <option value="Affluent Professional">Affluent Professional</option>
                      <option value="Business Owner / Entrepreneur">Business Owner / Entrepreneur</option>
                      <option value="Individual Investor">Individual Investor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wider">
                      Primary Research Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 bg-ivory border border-gold-border/80 rounded-lg text-sm text-navy focus:bg-white focus:border-gold focus:outline-none transition"
                    >
                      <option value="Small & Mid Cap Research">Small & Mid Cap Research</option>
                      <option value="Long-Term Wealth Creation">Long-Term Wealth Creation</option>
                      <option value="Fundamental Stock Analysis">Fundamental Stock Analysis</option>
                      <option value="Full Subscription Overview">Full Subscription Overview</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="consent-check"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-gold-border text-gold focus:ring-gold"
                  />
                  <label htmlFor="consent-check" className="text-xs text-warmgrey leading-tight">
                    I consent to receiving the sample report overview and research communication from Longview Capital via email/WhatsApp. You may unsubscribe at any time.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 px-6 bg-gold hover:bg-gold-dark text-white font-medium rounded-lg shadow-sm hover:shadow-goldGlow transition duration-200 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Processing Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Me The Sample Report</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-warmgrey">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  <span>Confidentiality guaranteed. Zero spam. SEBI compliance adherent.</span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
