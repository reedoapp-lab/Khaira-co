# Khaira.co — B2B Growth & Automation

A premium, conversion-focused website for **Khaira.co**, a B2B growth and automation agency serving consulting firms and professional service businesses.

The site is built around one clear idea: **turn more opportunities into revenue**. Its flagship demonstration is the **Enquiry-to-Meeting System**, an interactive five-step walkthrough from first enquiry to booked meeting.

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion · Lenis**.

---

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm run start
```

Type-check:

```bash
npm run typecheck
```

---

## Pages

| Route | Description |
| --- | --- |
| `/` | Home: hero with dashboard visual, problem statement, six services, flagship system demo, process, why Khaira, industries, final CTA |
| `/services` | Six detailed services with anchors, engagement models and FAQ |
| `/solutions` | Solution areas, flagship Enquiry-to-Meeting deep dive and interactive demo |
| `/how-we-work` | Four-stage process, expectations, engagement models and FAQ |
| `/about` | Positioning, principles, ideal fit, AI stance and sectors |
| `/contact` | Validated enquiry form, next steps, contact details and FAQ |
| `/privacy` | Privacy policy template |
| `/terms` | Terms & conditions template |

Also included: `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/icon.svg`, `app/opengraph-image.tsx` and a custom 404 page.

---

## Contact form

`components/contact-form.tsx` validates on the client and posts to `app/api/contact/route.ts`, which validates again, checks the honeypot and consent, then optionally sends an email notification.

### Email delivery

Copy `.env.example` to `.env.local` and add:

```bash
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=hello@khaira-co.eu
CONTACT_FROM_EMAIL=Khaira.co <enquiries@khaira-co.eu>
```

Email uses the [Resend](https://resend.com) API directly — no SDK is required. The `CONTACT_FROM_EMAIL` domain must be verified in Resend.

Without these variables, the form still works and returns a success response; the enquiry is logged to the server console instead of being emailed. This keeps local development and previews functional.

The endpoint is protected by:
- Server-side validation and field length limits
- Consent enforcement
- A hidden honeypot field
- Input escaping in the HTML email

---

## Editing content

- **Site details, navigation, contact placeholders:** `lib/site.ts`
- **Six services and deliverables:** `lib/services.ts`
- **Solutions and flagship system stages:** `lib/solutions.ts`
- **Problems, principles, process, industries, FAQs, legal date:** `lib/content.ts`
- **Validation rules:** `lib/validation.ts`
- **Email template and delivery:** `lib/email.ts`

---

## Design system

- **Palette** — white and lavender surfaces, ink `#111111`, muted grey, and a single purple accent `#6346E8` with soft lavender washes.
- **Type** — Manrope for display, Inter for body, both loaded through `next/font`.
- **Surfaces** — rounded cards, hairline borders, soft ambient gradients, glass panels and restrained shadows.
- **Motion** — Lenis smooth scrolling, scroll progress, route transitions, scroll reveals and a step-through product demo. All motion respects `prefers-reduced-motion`.
- **Accessibility** — semantic landmarks, skip link, visible focus states, labelled fields, error messages tied to inputs with `aria-describedby`, keyboard-accessible menu and accordions, and live regions for form and demo status.

---

## Placeholders to confirm before launch

These are intentionally marked in the interface and must be confirmed by the business:

- **Canonical domain:** `https://khaira-co.eu` in `lib/site.ts` — confirm this is the launch domain, as it drives canonical URLs, the sitemap, robots and social metadata
- **Email:** `hello@khaira-co.eu` — marked “To confirm”
- **LinkedIn:** `https://www.linkedin.com/company/khaira-co` — marked “To confirm”
- **Registered company details and business address** — not yet published; referenced as “to be confirmed” in the legal pages
- **Legal pages** — privacy and terms are generic, defensible templates. They should be reviewed by a qualified adviser before launch.

No testimonials, client logos, performance statistics or case-study results have been fabricated. The dashboard and demo use clearly labelled example data.

---

## Deployment

The site is ready for a standard Next.js host such as Vercel. Add the three environment variables above in the project settings, then deploy.

Before going live:

1. Confirm the email address and LinkedIn URL in `lib/site.ts`.
2. Add the real registered company details to the legal pages.
3. Have the privacy policy and terms reviewed.
4. Configure Resend and verify the sender domain.
5. Submit `https://khaira-co.eu/sitemap.xml` in Google Search Console.

---

## Notes

- All visuals are CSS/SVG-generated; there are no external image dependencies.
- The demo company “Northbridge Advisory” and all demo metrics are illustrative.
- The old `index.html`, `css/`, `js/`, `assets/` and Blemince marketing files at the repository root belong to earlier projects and are not used by the Next.js app.
