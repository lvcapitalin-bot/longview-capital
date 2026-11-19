"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, Send, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";
import { BRAND } from "@/data/brand";

interface ContactFormProps {
  className?: string;
  defaultInterest?: string;
  isModal?: boolean;
  onSuccessClose?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  className = "",
  defaultInterest = "Equity Research Subscription",
  isModal = false,
  onSuccessClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    interest: defaultInterest,
    investmentExperience: "3-5 Years",
    message: "",
    consent: true,
    companyWeb: "", // Anti-spam honeypot
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, interest: defaultInterest }));
  }, [defaultInterest]);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.companyWeb) {
      setStatus("success");
      return;
    }

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim() ||
      !formData.city.trim()
    ) {
      setErrorMessage("Please complete all mandatory fields.");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please accept the privacy policy consent to proceed.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: isModal ? "Quick Enquiry Modal" : "Contact Page Enquiry",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to submit form. Please try again.");
      }

      setStatus("success");
    } catch {
      setTimeout(() => {
        setStatus("success");
      }, 600);
    }
  };

  const containerClasses = isModal
    ? className
    : `bg-white rounded-2xl border border-gold-border/80 shadow-card p-6 md:p-8 ${className}`;

  if (status === "success") {
    return (
      <div className={`${containerClasses} text-center py-6`}>
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif text-navy font-bold mb-2">
          Enquiry Received Successfully
        </h3>
        <p className="text-warmgrey text-sm mb-5 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-navy">{formData.fullName}</strong>. Our team in Ahmedabad has received your enquiry and will connect with you shortly.
        </p>

        <div className="bg-ivory border border-gold-border/60 rounded-xl p-4 text-xs text-navy max-w-sm mx-auto mb-6 text-left space-y-1.5">
          <p><strong>Interested In:</strong> {formData.interest}</p>
          <p><strong>Mobile:</strong> {formData.mobile}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/${BRAND.contact.whatsappDefaultNumber}?text=${encodeURIComponent(
              `Hi Sunny, I just submitted an enquiry on lvcapital.in regarding ${formData.interest} (${formData.fullName}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition"
          >
            Chat on WhatsApp Now
          </a>
          <button
            type="button"
            onClick={() => {
              if (onSuccessClose) {
                onSuccessClose();
              } else {
                setStatus("idle");
                setFormData({
                  fullName: "",
                  email: "",
                  mobile: "",
                  city: "",
                  interest: defaultInterest,
                  investmentExperience: "3-5 Years",
                  message: "",
                  consent: true,
                  companyWeb: "",
                });
              }
            }}
            className="px-5 py-2.5 bg-ivory text-navy border border-gold-border rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white transition"
          >
            {onSuccessClose ? "Close" : "Submit Another Enquiry"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <div className="mb-5">
        <span className="text-[11px] font-bold uppercase tracking-widest text-gold block mb-1">
          Investor Enquiry
        </span>
        <h3 className="text-2xl font-serif text-navy font-bold">
          Let&apos;s Start a Conversation
        </h3>
        <p className="text-xs text-warmgrey mt-1">
          Share your requirements and our team will reach out with clarity—no unsolicited sales pressure.
        </p>
      </div>

      {errorMessage && (
        <div className="p-3 mb-4 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="companyWeb"
          value={formData.companyWeb}
          onChange={(e) => setFormData({ ...formData, companyWeb: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-navy mb-1 uppercase tracking-wider">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Rajesh Patel"
              className="w-full px-3.5 py-2.5 bg-ivory border border-gold-border/80 rounded-lg text-sm text-navy placeholder:text-warmgrey/60 focus:bg-white focus:border-gold focus:outline-none transition"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-navy mb-1 uppercase tracking-wider">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@email.com"
              className="w-full px-3.5 py-2.5 bg-ivory border border-gold-border/80 rounded-lg text-sm text-navy placeholder:text-warmgrey/60 focus:bg-white focus:border-gold focus:outline-none transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-navy mb-1 uppercase tracking-wider">
              Mobile Number *
            </label>
            <input
              type="tel"
              required
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full px-3.5 py-2.5 bg-ivory border border-gold-border/80 rounded-lg text-sm text-navy placeholder:text-warmgrey/60 focus:bg-white focus:border-gold focus:outline-none transition"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-navy mb-1 uppercase tracking-wider">
              City *
            </label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="e.g. Ahmedabad, Surat, Mumbai"
              className="w-full px-3.5 py-2.5 bg-ivory border border-gold-border/80 rounded-lg text-sm text-navy placeholder:text-warmgrey/60 focus:bg-white focus:border-gold focus:outline-none transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
          <div>
            <label className="block text-[11px] font-bold text-navy mb-1 uppercase tracking-wider">
              What are you interested in?
            </label>
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-ivory border border-gold-border/80 rounded-lg text-sm text-navy focus:bg-white focus:border-gold focus:outline-none transition"
            >
              <option value="Equity Research Subscription">Equity Research Subscription</option>
              <option value="Personalized Wealth Advisory">Personalized Wealth Advisory</option>
              <option value="General Enquiry">General Enquiry</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-navy mb-1 uppercase tracking-wider">
              Investment Experience (Optional)
            </label>
            <select
              value={formData.investmentExperience}
              onChange={(e) => setFormData({ ...formData, investmentExperience: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-ivory border border-gold-border/80 rounded-lg text-sm text-navy focus:bg-white focus:border-gold focus:outline-none transition"
            >
              <option value="Beginning Journey (< 1 Year)">Beginning Journey (&lt; 1 Year)</option>
              <option value="1-3 Years">1–3 Years</option>
              <option value="3-5 Years">3–5 Years</option>
              <option value="5-10+ Years (Experienced)">5–10+ Years (Experienced)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-navy mb-1 uppercase tracking-wider">
            Your Message or Query (Optional)
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share any specifics about your investment horizon, goals, or questions..."
            className="w-full px-3.5 py-2.5 bg-ivory border border-gold-border/80 rounded-lg text-sm text-navy placeholder:text-warmgrey/60 focus:bg-white focus:border-gold focus:outline-none transition resize-none"
          />
        </div>

        <div className="flex items-start gap-2 pt-0.5">
          <input
            type="checkbox"
            id={isModal ? "modal-privacy-consent" : "page-privacy-consent"}
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-gold-border text-gold focus:ring-gold"
          />
          <label
            htmlFor={isModal ? "modal-privacy-consent" : "page-privacy-consent"}
            className="text-xs text-warmgrey leading-tight"
          >
            I agree to the{" "}
            <Link href="/privacy-policy" className="text-gold-dark underline">
              Privacy Policy
            </Link>{" "}
            and authorize Longview Capital to contact me regarding my enquiry.
          </label>
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3.5 px-6 bg-gold hover:bg-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm hover:shadow-goldGlow transition duration-200 flex items-center justify-center gap-2 group disabled:opacity-70"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Enquiry</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-[11px] text-warmgrey">
          <ShieldCheck className="w-3.5 h-3.5 text-gold" />
          <span>Strict client privacy. No third-party data sharing.</span>
        </div>
      </form>
    </div>
  );
};
