# Longview Capital — Production Launch & Deployment Guide

This guide walks through deploying **Longview Capital** (`https://www.lvcapital.in`) live to production.

---

## 1. Recommended Deployment: Vercel (Fastest & Free)

Since Longview Capital is built with Next.js 15, **Vercel** is the official, zero-configuration hosting platform. It provides free automatic SSL certificates, global edge CDN, and 100/100 Lighthouse performance.

### Step 1: Push Code to GitHub
1. Initialize git and commit the codebase:
   ```bash
   git init
   git add .
   git commit -m "Production release: Longview Capital"
   ```
2. Create a private repository on [GitHub](https://github.com) named `longview-capital`.
3. Push your code:
   ```bash
   git remote add origin https://github.com/<YOUR_USERNAME>/longview-capital.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New Project"** and select `longview-capital`.
3. Keep the default settings:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `next build`
   - Output Directory: `.next`
4. *(Optional)* Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL`: `https://www.lvcapital.in`
   - `TELEGRAM_BOT_TOKEN`: (optional for instant lead phone alerts)
   - `TELEGRAM_CHAT_ID`: (optional for instant lead phone alerts)
5. Click **Deploy**. Your site will be built and live on a temporary URL (e.g. `longview-capital.vercel.app`) in under 2 minutes.

---

## 2. Connect Your Custom Domain (`lvcapital.in`)

In your Vercel Project Dashboard:
1. Go to **Settings** > **Domains**.
2. Add `www.lvcapital.in` and `lvcapital.in`.
3. Set `lvcapital.in` to automatically redirect to `www.lvcapital.in` (recommended standard).
4. Update your DNS records where you purchased `lvcapital.in` (e.g., GoDaddy, Namecheap, BigRock):

| Type  | Name / Host | Target / Value | TTL |
|-------|-------------|----------------|-----|
| **A** | `@`         | `76.76.21.21`  | Auto / 3600 |
| **CNAME** | `www`   | `cname.vercel-dns.com` | Auto / 3600 |

*DNS changes take 10 to 60 minutes to propagate worldwide. Vercel automatically generates an SSL/HTTPS certificate.*

---

## 3. Pre-Launch Verification Checklist

- [x] **SEBI Compliance**: Clear disclaimer in footer and on `/compliance` stating that Research Analyst registration does not permit PMS or trade pooling.
- [x] **Direct Phone Numbers**:
  - Sunny Nenwani: `+91 79847 21288`
  - Harsh Nenwani: `+91 80005 21297`
- [x] **WhatsApp Direct Routing**: All chat buttons route to Sunny (`917984721288`).
- [x] **Office Location**: 5, First Floor, Akash Towers, Judges Bunglow Road, Bodakdev, Ahmedabad.
- [x] **Social Share Banner**: High-resolution OpenGraph card ready at `/images/og-image.jpg` (1200×630).
- [x] **Browser Favicon**: High-contrast icon on rounded card with gold hairline border at `/favicon.png`.
- [x] **SEO & AI Search**: Sitemaps (`/sitemap.xml`), Robots (`/robots.txt`), and JSON-LD Schema (`FinancialService`, `Organization`, `FAQPage`) active.
