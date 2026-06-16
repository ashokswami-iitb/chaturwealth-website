# Chatur Wealth — Website

Production website for **Chatur Wealth**, a private wealth management firm.

**Live URL:** https://chaturwealth-website.vercel.app
**Repository:** https://github.com/ashokswami-iitb/chaturwealth-website

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Email | Nodemailer (SMTP via Gmail App Password) |
| Hosting | Vercel (Production) |

---

## Project Structure

```
investment-website/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API endpoint
│   ├── globals.css
│   ├── layout.tsx              # Root layout, SEO metadata
│   └── page.tsx                # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── PhilosophySection.tsx
│   ├── ApproachSection.tsx
│   ├── StructureSection.tsx
│   ├── FounderSection.tsx
│   ├── BlogSection.tsx
│   ├── FAQSection.tsx
│   ├── ContactSection.tsx
│   ├── TrustBar.tsx
│   ├── Footer.tsx
│   └── DisclaimerSection.tsx
├── public/                     # Static assets (logo, founder image)
├── .env.example                # Environment variable template
└── vercel.json                 # Vercel deployment config
```

---

## Local Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- A Gmail account with 2-Step Verification enabled (for contact form)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/ashokswami-iitb/chaturwealth-website.git
cd chaturwealth-website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local and fill in your real values (see Environment Variables section below)

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values. **Never commit `.env.local` to Git.**

| Variable | Description | Example |
|---|---|---|
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_USER` | Gmail address used to send emails | `yourname@gmail.com` |
| `SMTP_PASS` | Gmail App Password (16 characters, no spaces) | `abcd efgh ijkl mnop` |
| `RECIPIENT_EMAIL` | Email address where enquiries are delivered | `deveshchawla@chaturideas.com` |

### Setting up Gmail App Password

1. Go to [myaccount.google.com](https://myaccount.google.com) → **Security**
2. Enable **2-Step Verification** if not already enabled
3. Go to **App Passwords** → Select app: **Mail** → Generate
4. Copy the 16-character password and paste it as `SMTP_PASS`

### Adding Environment Variables to Vercel

1. Go to [vercel.com](https://vercel.com) → Your Project → **Settings** → **Environment Variables**
2. Add each variable from the table above
3. Set scope to **Production** (and **Preview** if needed)
4. Redeploy the project for changes to take effect

---

## Deployment

### Why Vercel (not a VPS)

The assignment mentioned setting up a VPS. Vercel was chosen instead for the following reasons:

- **Zero-downtime deploys** — every `git push` to `main` triggers an automatic production deployment
- **Automatic HTTPS** — SSL certificates are provisioned and renewed automatically via Let's Encrypt
- **Built-in CDN** — static assets are served from edge locations globally
- **No server maintenance** — no OS updates, no Nginx config, no PM2 process management required
- **Cost** — free tier covers all requirements for this project

For a Next.js application, Vercel is the recommended and most production-appropriate hosting environment (it is built by the same team that created Next.js).

### Deploying Updates

```bash
# Any push to the main branch triggers an automatic Vercel deployment
git add .
git commit -m "your change description"
git push origin main
```

Deployment status can be monitored at: https://vercel.com/dashboard

### Manual Redeploy (without code changes)

Go to Vercel Dashboard → Project → **Deployments** → click the three-dot menu on the latest deployment → **Redeploy**.

---

## Domain & DNS Setup

> **Status:** Pending — a production domain has not yet been provided by the client.

Once a domain is available, follow these steps:

### On Vercel
1. Go to Project → **Settings** → **Domains**
2. Add your domain (e.g. `chaturwealth.com`)
3. Vercel will show you the DNS records to configure

### On Your DNS Provider (GoDaddy / Namecheap / Cloudflare etc.)
Add the following records:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

DNS propagation typically takes 10–60 minutes. SSL certificate will auto-provision once DNS resolves.

---

## Contact Form

The contact form is handled by a Next.js API route at `app/api/contact/route.ts`.

**Flow:**
1. User fills in: Name, Email, Mobile, Investment Range, Query
2. `POST /api/contact` is called
3. A formatted HTML email is sent to `RECIPIENT_EMAIL` (Devesh)
4. An auto-reply confirmation email is sent to the enquirer
5. Success/error state is shown to the user on the page

**To test the form locally:**
- Ensure `.env.local` is configured with valid SMTP credentials
- Submit the form at `http://localhost:3000/#contact`
- Check both the recipient inbox and the enquirer inbox for emails

---

## Testing Checklist

### Browsers Tested
- [x] Google Chrome (latest)
- [x] Safari (latest)
- [x] Mozilla Firefox (latest)
- [x] Microsoft Edge (latest)

### Devices Tested
- [x] Desktop (1440px+)
- [x] Laptop (1280px)
- [x] Tablet (768px — iPad)
- [x] Mobile (390px — iPhone 14)
- [x] Mobile (360px — Android)

### Functionality Tested
- [x] All navigation links scroll to correct sections
- [x] Hero CTA button scrolls to contact form
- [x] Contact form submits successfully
- [x] Email received at recipient address
- [x] Auto-reply received at enquirer email
- [x] FAQ accordion opens and closes correctly
- [x] All images load correctly
- [x] No console errors in production build
- [x] HTTPS active, no mixed content warnings
- [x] Page load under 3 seconds (Vercel analytics)

---

## Maintenance

### Updating Content

Most content is in the component files under `/components/`. For example:
- **Founder bio** → `components/FounderSection.tsx`
- **FAQ questions** → `components/FAQSection.tsx`
- **Blog/Insights posts** → `components/BlogSection.tsx`
- **Contact email** → update `RECIPIENT_EMAIL` in Vercel environment variables

### Updating Dependencies

```bash
npm outdated          # Check for outdated packages
npm update            # Update minor/patch versions
```

For major version upgrades, test locally before pushing to production.

### Monitoring

- **Deployment logs:** Vercel Dashboard → Project → Deployments
- **Function logs (contact form):** Vercel Dashboard → Project → Functions → `/api/contact`
- **Analytics:** Vercel Dashboard → Project → Analytics (if enabled)

---

## Support & Handover

For any questions about the codebase or deployment, contact the developer.

Built and deployed as part of the Chatur Wealth website go-live assignment.
