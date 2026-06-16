# Chatur Wealth Website — Handover Document

**Prepared for:** Devesh Chawla, Chatur Wealth
**Date:** June 2026
**Project:** Chatur Wealth Production Website

---

## 1. Live Website

| | |
|---|---|
| **Production URL** | https://chaturwealth-website.vercel.app |
| **Custom Domain** | Pending — to be configured once domain is provided |
| **HTTPS** | Active (auto-managed by Vercel / Let's Encrypt) |
| **Status** | Live and fully operational |

---

## 2. Access Credentials

### Vercel (Hosting)
| | |
|---|---|
| **Platform** | https://vercel.com |
| **Login** | Via GitHub account linked to the repository |
| **Project name** | `chaturwealth-website` |
| **Team/Personal** | Personal account |

> **Action required:** The developer should transfer ownership of the Vercel project to Devesh's account or add Devesh as a team member via Settings → Members.

### GitHub (Code Repository)
| | |
|---|---|
| **Repository** | https://github.com/ashokswami-iitb/chaturwealth-website |
| **Visibility** | Private |

> **Action required:** Add Devesh's GitHub account as a collaborator: Repository → Settings → Collaborators → Add people.

### Gmail SMTP (Contact Form Email)
| | |
|---|---|
| **SMTP account** | The Gmail address configured in Vercel env vars |
| **Auth method** | App Password (16-character, stored in Vercel env vars) |

The SMTP credentials are stored securely as Vercel Environment Variables and are never exposed in the codebase.

---

## 3. Environment Variables (Vercel)

The following environment variables are configured in the Vercel project and are required for the contact form to function:

| Variable | Purpose |
|---|---|
| `SMTP_HOST` | Gmail SMTP server |
| `SMTP_PORT` | SMTP port (587) |
| `SMTP_USER` | Gmail address used to send emails |
| `SMTP_PASS` | Gmail App Password |
| `RECIPIENT_EMAIL` | `deveshchawla@chaturideas.com` |

To view or update: Vercel Dashboard → Project → Settings → Environment Variables.

---

## 4. Hosting Architecture

```
User Browser
     │
     ▼
Vercel Edge Network (CDN)
     │
     ├── Static assets (HTML, CSS, JS, images) → served from edge
     │
     └── API Routes (/api/contact) → Vercel Serverless Functions
              │
              ▼
         Gmail SMTP
              │
              ▼
    deveshchawla@chaturideas.com
```

**No VPS or server to manage.** Vercel handles all infrastructure, scaling, and uptime automatically.

---

## 5. Deployment Process

Any code pushed to the `main` branch on GitHub is **automatically deployed to production** within ~60 seconds.

```
git push origin main  →  Vercel builds  →  Production live
```

There is no manual deployment step required.

---

## 6. Domain Setup (Pending)

Once a domain (e.g. `chaturwealth.com`) is purchased:

**Step 1 — Add domain in Vercel:**
Vercel Dashboard → Project → Settings → Domains → Add `chaturwealth.com`

**Step 2 — Configure DNS at your registrar:**

| Record Type | Name | Value |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

**Step 3 — Wait for propagation (10–60 minutes)**

SSL certificate will auto-provision. No additional steps needed.

---

## 7. Contact Form — How It Works

1. Visitor fills in the form on the website
2. Form sends a `POST` request to `/api/contact`
3. Server validates required fields (name, email, mobile)
4. Two emails are sent via Gmail SMTP:
   - **To Devesh** (`deveshchawla@chaturideas.com`) — formatted HTML email with all enquiry details
   - **To the visitor** — auto-reply confirming their enquiry was received
5. Visitor sees a success message on screen

**To test:** Fill in the contact form at the live URL and check `deveshchawla@chaturideas.com` for the notification email.

---

## 8. How to Make Common Updates

### Change the recipient email address
Vercel Dashboard → Settings → Environment Variables → Update `RECIPIENT_EMAIL`
Then redeploy.

### Update website content
Edit the relevant file in `/components/` and push to GitHub. Auto-deploys.

| Content | File |
|---|---|
| Founder bio | `components/FounderSection.tsx` |
| FAQ | `components/FAQSection.tsx` |
| Blog / Insights | `components/BlogSection.tsx` |
| Services / Approach | `components/ApproachSection.tsx` |
| Hero text | `components/HeroSection.tsx` |
| Footer | `components/Footer.tsx` |

### Add a new page
Create a new folder under `app/` (e.g. `app/about/page.tsx`) and push to GitHub.

---

## 9. What to Monitor

| What | Where |
|---|---|
| Deployment status | Vercel Dashboard → Deployments |
| Contact form errors | Vercel Dashboard → Functions → `/api/contact` → Logs |
| Uptime | Vercel provides 99.99% SLA — no additional monitoring needed |
| SSL certificate | Auto-renews via Vercel, no action required |

---

## 10. Known Limitations & Future Recommendations

| Item | Detail |
|---|---|
| **Custom domain** | Not yet configured — pending domain procurement |
| **CMS** | Content is currently hardcoded in component files. If Devesh needs to update content frequently without a developer, a headless CMS (e.g. Sanity, Contentful) is recommended |
| **Form spam protection** | No CAPTCHA implemented. If spam becomes an issue, add Google reCAPTCHA v3 to the contact form |
| **Analytics** | No analytics configured. Consider adding Vercel Analytics or Google Analytics |
| **Blog** | Blog section currently has static placeholder content. To make it dynamic, connect to a CMS |

---

*This document should be stored securely and shared only with authorised personnel.*
