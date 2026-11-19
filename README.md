# Longview Capital — Boutique Investment Research & Wealth Advisory Website

A complete, production-ready, modern, and conversion-focused web platform built for **Longview Capital**, a boutique investment research and wealth advisory brand based in Ahmedabad, India.

- **Website Domain**: [www.lvcapital.in](https://www.lvcapital.in)
- **Official Email**: lvcapital.in@gmail.com
- **Office Location**: 5, First Floor, Akash Towers, Judges Bunglow Road, Bodakdev, Ahmedabad – 380054, Gujarat, India.
- **Brand Motto**: *THINK. INVEST. GROW.*

---

## 1. Brand Identity & Design System

The platform is designed around the exact brand identity from the official Longview Capital business card and logo mark:

- **Icon**: An observer standing atop a mountain summit looking through a spyglass/telescope towards the horizon, framed by a golden arc of growth and geometric mountain ridges.
- **Dominant Light Palette**:
  - **Warm Ivory (`#FAF8F4`)**: Main background providing an uncluttered, editorial luxury feel.
  - **Pure White (`#FFFFFF`)**: Content sections, elevated cards, and reading containers.
  - **Champagne Gold (`#C99532`)**: Primary action buttons, highlights, and accent trim.
  - **Soft Gold (`#E8D2A7`)**: Subtle borders, dividers, and card accents.
  - **Deep Navy (`#102542`)**: Editorial headings, authority text, and primary contrasts.
  - **Powder Blue (`#DCE6ED`)**: Supporting backdrop washes and mountain motifs.
  - **Warm Grey (`#777C83`)**: Highly readable secondary body text.
- **Typography Hierarchy**:
  - Headings: Playfair Display / Cormorant Garamond (refined luxury serif)
  - Body & Numbers: Manrope / Inter (crisp, modern readability)

---

## 2. Sitemap & Complete Page Structure

1. **Homepage (`/`)**:
   - Hero: *"Invest With Perspective. Build Wealth With Purpose."* with brand card showcase, primary CTA ("Let's Talk"), secondary CTA ("Explore Our Research").
   - Our Philosophy: *"The Best Investment Decisions Take a Long-Term View"* with three visual pillars: **Think**, **Invest**, **Grow**.
   - What We Do: 3 clean research cards (Long-Term Investment Research, Fundamental Stock Analysis, Small & Mid Cap Opportunities).
   - Why Longview Capital?: 4 differentiators (Long-Term Thinking, Research-Driven Approach, Independent Perspective, Disciplined Investing).
   - Research Preview: Subscriptions cadence (2 regular reports/month, tactical notes, WhatsApp & Email delivery) + **Lead Capture: "Request Sample Research Report"**.
   - Brand Statement: *"We Think in Years, Not Days. Because wealth creation is a journey, not an event."*
   - Leadership Section: Sunny Nenwani (Financial Advisor) & Harsh Nenwani (SEBI Registered Research Analyst) with direct contact triggers.
   - Final CTA & Institutional Footer.

2. **About Us (`/about`)**:
   - Opening: *"A Different Perspective on Investing."*
   - Narrative: Founding story, mountain vantage point philosophy, independent research integrity.
   - Meet Our Team: In-depth partner profiles for Sunny Nenwani and Harsh Nenwani with editable placeholders.
   - Our Four Beliefs: Think independently, Understand before investing, Respect risk, Remain patient.

3. **Research (`/research`)**:
   - Hero: *"Research Built Around the Bigger Picture."*
   - 3 Research Focus areas: Long-Term Wealth Creation, Fundamental Stock Research, Small & Mid Cap Opportunities.
   - 4-Step Analytical Process: Identify &rarr; Analyse &rarr; Evaluate &rarr; Communicate.
   - Inclusions: 2 monthly deep dives, tactical research notes, forensic accounting, downside risk metrics, WhatsApp & email delivery.
   - Onboarding process & transparent pricing statement.
   - Visual Sample Report Preview + modal lead form.

4. **Our Philosophy (`/philosophy`)**:
   - Editorial Manifesto: *"The Long View Changes Everything."*
   - 5 Pillars: Business Before Stock Price, Patience Over Noise, Fundamentals Over Hype, Discipline Over Emotion, Compounding Takes Time.
   - **Interactive Compounding Visualizer**: Real-time slider tool allowing users to experience the geometry of long-term compounding vs short-term noise.
   - Closing Creed: *"Think Long Term. Invest With Conviction. Grow With Discipline."*

5. **Insights & Publication Journal (`/insights` & `/insights/[slug]`)**:
   - Editorial blog with dynamic category filtering (Small & Mid Cap Research, Long-Term Investing, Company Analysis, Market Perspectives, Investment Education).
   - Full article pages with reading time, table of contents, author badges, key strategic takeaways, and mandatory SEBI disclosures.
   - CMS-ready data structure in `src/data/insights.ts`.

6. **Contact Us (`/contact`)**:
   - Full contact details for Sunny Nenwani (+91 79847 21288) and Harsh Nenwani (+91 80005 21297).
   - Office address at Akash Towers, Bodakdev, Ahmedabad.
   - Interactive Google Maps embed.
   - Complete enquiry form with client-side & server-side validation, spam honeypot, interest selector, and WhatsApp follow-up.

7. **Compliance & Legal Hub (`/compliance`)**:
   - SEBI Registration details with editable placeholder: `[SEBI Registration No: INH0000XXXXX - Pending Final Regulatory Allotment]`.
   - **Explicit Clarification**: Research Analyst registration does NOT authorize Portfolio Management Services (PMS).
   - Grievance Redressal mechanism (Direct &rarr; SEBI SCORES portal &rarr; SMART ODR portal).
   - Investor Charter for Research Analysts detailing rights of investors, dos and don'ts.
   - Compliance & Grievance Officer details.
   - Additional Legal Pages: Privacy Policy (`/privacy-policy`), Terms & Conditions (`/terms`), Risk Disclosures (`/risk-disclosures`).

8. **Optional Unpublished PMS Module (`/pms-preview`)**:
   - Locked and flagged with `robots: noindex, nofollow` and an explicit compliance warning.
   - Kept dormant and ready for instant activation once separate SEBI PMS registration is granted.

---

## 3. Technology Stack

- **Framework**: Next.js 15 (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS with custom luxury financial theme tokens
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond, Playfair Display, Manrope, Inter
- **SEO & Performance**: XML sitemap generator, robots.txt, OpenGraph tags, zero-CLS webfonts, static pre-rendering (SSG).

---

## 4. Running & Deploying the Project

### Development Server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build:
```bash
npm run build
npm run start
```

### Deploying to Vercel / Netlify / Cloudflare:
The project is built on standard Next.js App Router and can be deployed with one click to Vercel, Netlify, or any Node.js hosting platform.

---

## 5. How to Update Content & Regulatory Placeholders

- **Brand Information & Phone Numbers**: Edit `src/data/brand.ts`.
- **SEBI Registration & Compliance Officers**: Edit `src/data/compliance.ts`.
- **Articles & Insights**: Add or modify articles in `src/data/insights.ts`.
- **Lead Submission Webhook/CRM**: Update `src/app/api/lead/route.ts` to connect to your CRM (e.g., Zoho, HubSpot, or SendGrid).
