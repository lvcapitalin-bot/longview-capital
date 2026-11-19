import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  MessageCircle,
} from "lucide-react";
import { BRAND } from "@/data/brand";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Longview Capital | Bodakdev, Ahmedabad Office",
  description:
    "Connect with Sunny Nenwani and Harsh Nenwani at Longview Capital in Ahmedabad. Discuss equity research subscriptions, fundamental analysis, and long-term advisory.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${BRAND.contact.whatsappDefaultNumber}?text=${encodeURIComponent(
    "Hello Longview Capital, I would like to enquire about your research services."
  )}`;

  return (
    <div className="relative bg-[#FAF8F5]">
      {/* Main Grid: Contact Form ON TOP (mobile & desktop left), Office & Direct Lines alongside */}
      <section className="py-8 md:py-14 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Enquiry Form FIRST so it is immediately on top on mobile */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Contact Info & Direct Lines (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Advisory Lines */}
              <div className="bg-white rounded-2xl border border-gold-border/80 shadow-subtle p-6 sm:p-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold block">
                  Direct Advisory Lines
                </span>

                {/* Sunny */}
                <div className="p-3.5 sm:p-4 bg-ivory rounded-xl border border-gold-border/60 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="text-sm font-serif font-bold text-navy">Sunny Nenwani</h4>
                    <p className="text-xs text-warmgrey">Financial Analyst</p>
                  </div>
                  <a
                    href="tel:+917984721288"
                    className="px-3 py-1.5 bg-white border border-gold-border text-navy hover:text-gold rounded-lg text-xs font-bold inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>+91 79847 21288</span>
                  </a>
                </div>

                {/* Harsh */}
                <div className="p-3.5 sm:p-4 bg-ivory rounded-xl border border-gold-border/60 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="text-sm font-serif font-bold text-navy">Harsh Nenwani</h4>
                    <p className="text-xs text-warmgrey">Research Analyst</p>
                  </div>
                  <a
                    href="tel:+918000521297"
                    className="px-3 py-1.5 bg-white border border-gold-border text-navy hover:text-gold rounded-lg text-xs font-bold inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>+91 80005 21297</span>
                  </a>
                </div>
              </div>

              {/* Office Details Card */}
              <div className="bg-white rounded-2xl border border-gold-border/80 shadow-subtle p-6 sm:p-7 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-1">
                    Registered Office Location
                  </span>
                  <h3 className="text-xl font-serif font-bold text-navy">
                    Longview Capital
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-warmgrey">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <address className="not-italic leading-relaxed text-navy">
                      {BRAND.contact.address.line1},<br />
                      {BRAND.contact.address.line2},<br />
                      {BRAND.contact.address.city} - {BRAND.contact.address.pincode}, {BRAND.contact.address.state}, {BRAND.contact.address.country}.
                    </address>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gold shrink-0" />
                    <a
                      href={`mailto:${BRAND.contact.email}`}
                      className="text-navy font-semibold hover:text-gold hover:underline"
                    >
                      {BRAND.contact.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-navy font-medium">www.lvcapital.in</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-warmgrey">
                      Mon - Fri: 9:30 AM - 6:30 PM (IST)
                    </span>
                  </div>
                </div>

                {/* Direct WhatsApp Callout */}
                <div className="pt-4 border-t border-gold-border/50">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>WhatsApp Sunny (+91 79847 21288)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-8 md:py-12 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-1">
                Location Map
              </span>
              <h3 className="text-2xl font-serif text-navy">
                Visit Our Office in Bodakdev, Ahmedabad
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Akash+Tower+Judges+Bunglow+Rd+Bodakdev+Ahmedabad+Gujarat+380054"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-gold-dark hover:underline flex items-center gap-1"
            >
              <span>Open in Google Maps App &rarr;</span>
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-gold-border/80 shadow-card relative">
            <iframe
              src={BRAND.contact.address.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Longview Capital Office Location - Akash Towers, Bodakdev, Ahmedabad"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
