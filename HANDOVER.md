# Chatur Wealth — Website Deployment Handover

**Project:** Chatur Wealth Investment Advisory Website
**Framework:** Next.js 16.2.9 (App Router)
**Deployment:** Vercel (Free Tier)
**Status:** ✅ Live & Functional

---

## 1. What Was Done

The frontend was already developed. The following tasks were completed as part of this assignment:

### Bugs Fixed
Both `HeroSection.tsx` and `ContactSection.tsx` had a broken placeholder Google Form URL (`YOUR_FORM_ID`) that was never filled in. Forms would silently fail on every submission — users would see a success screen but no data was ever received or sent anywhere.

### Files Created / Modified

| File | Status | Description |
|---|---|---|
| `app/api/contact/route.ts` | ✅ NEW | Backend API route — receives form data, sends notification email + auto-reply |
| `components/ContactSection.tsx` | ✅ FIXED | Replaced broken Google Form fetch with real `/api/contact` POST call |
| `components/HeroSection.tsx` | ✅ FIXED | Same fix — also added loading state and proper error handling |
| `package.json` | ✅ UPDATED | Added `nodemailer` and `@types/nodemailer` |
| `next.config.ts` | ✅ UPDATED | Added production security headers |
| `vercel.json` | ✅ NEW | Vercel deployment config — Mumbai region (bom1) |
| `.env.example` | ✅ NEW | Template showing all required environment variables |
| `.gitignore` | ✅ UPDATED | Ensures `.env.local` is never committed to Git |

---

## 2. How the Contact Form Works

1. User fills the form and clicks Submit
2. A `POST` request is sent to `/api/contact` (Next.js API Route)
3. The API uses **Nodemailer** to send two emails via Gmail SMTP:
   - A **notification email** to the business with all submitted details in a formatted HTML table
   - An **auto-reply email** to the person who enquired, confirming receipt
4. Form shows a success screen on completion, or a clear error message if something fails

---

## 3. Environment Variables

Create a `.env.local` file in the project root (never commit this to Git):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-character-app-password
RECIPIENT_EMAIL=deveshchawla@chaturideas.com
```

> **Gmail App Password setup:**
> Google Account → Security → 2-Step Verification → App Passwords → Create one for "Mail"
> This gives you a 16-character password to use as `SMTP_PASS`

On Vercel, set these same variables under:
**Project Settings → Environment Variables**

---

## 4. Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.example .env.local
# Fill in your SMTP credentials in .env.local

# 3. Run locally
npm run dev
# Open http://localhost:3000
```

---

## 5. Deploy to Vercel (Free)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/chaturwealth.git
git push -u origin main

# 2. Go to vercel.com → Import your GitHub repo
# 3. Add environment variables in the Vercel dashboard
# 4. Click Deploy → get your live URL (e.g. chaturwealth.vercel.app)
```

Vercel automatically provisions HTTPS and a public URL. No credit card required.

---

## 6. Project Structure

```
investment-website/
├── app/
│   ├── api/contact/route.ts   ← contact form backend (NEW)
│   ├── layout.tsx             ← root layout, fonts, SEO metadata
│   ├── page.tsx               ← main page, assembles all sections
│   └── globals.css            ← design tokens and global styles
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx        ← FIXED
│   ├── TrustBar.tsx
│   ├── PhilosophySection.tsx
│   ├── ApproachSection.tsx
│   ├── StructureSection.tsx
│   ├── FounderSection.tsx
│   ├── BlogSection.tsx
│   ├── FAQSection.tsx
│   ├── ContactSection.tsx     ← FIXED
│   ├── DisclaimerSection.tsx
│   └── Footer.tsx
├── public/
│   ├── logo.png
│   └── founder.jpg
├── .env.example               ← NEW (template)
├── .env.local                 ← your secrets (NOT in Git)
├── .gitignore
├── next.config.ts
├── package.json
├── vercel.json                ← NEW
└── tsconfig.json
```

---

## 7. Useful Commands

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at localhost:3000 |
| `npm run build` | Build for production |
| `npm run lint` | Check for code errors |

---

## 8. Updating the Site After Go-Live

1. Make changes locally and test with `npm run dev`
2. Push to GitHub: `git add . → git commit -m "update" → git push`
3. Vercel auto-detects the push and re-deploys in ~2 minutes

---

## 9. Testing Completed

| Test | Status |
|---|---|
| Homepage loads — all sections visible | ✅ |
| Navbar scroll links work | ✅ |
| Mobile hamburger menu | ✅ |
| Hero form submits successfully | ✅ |
| Contact section form submits successfully | ✅ |
| Notification email received by business | ✅ |
| Auto-reply email received by enquirer | ✅ |
| Error state displays on failure | ✅ |
| Responsive on mobile (375px) | ✅ |
| Responsive on tablet (768px) | ✅ |
| Responsive on desktop (1440px) | ✅ |
| HTTPS active on Vercel deployment | ✅ |
| No secrets exposed in page source | ✅ |

---

## 10. Known Network Note

SMTP over ports 587/465 may be blocked on restricted institutional networks (e.g. college/university WiFi). This is a network-level restriction, not a code issue. Email delivery was tested and confirmed working on an open network. On Vercel's cloud servers, outbound SMTP is fully unrestricted and works without issues.

---

## 11. Credentials & Access

| Item | Detail |
|---|---|
| Live URL | `https://chaturwealth-website.vercel.app` |    
| GitHub Repo | `https://github.com/ashokswami-iitb/chaturwealth-website` |
| SMTP Account | Current SMTP configuration uses a temporary developer-owned Gmail account for testing and deployment. For production ownership transfer, SMTP credentials should be updated to a business-owned email account. |
| Recipient Email | `deveshchawla@chaturideas.com` |

> Replace the above placeholders with actual values before handing over.

---

*Prepared as part of the Chatur Wealth Website Deployment & Go-Live Assignment.*
