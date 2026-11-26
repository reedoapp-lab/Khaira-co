# Khaira.co | The Growth System for Consulting Firms

A premium, conversion-focused website for **Khaira.co**, the growth and automation partner for consulting, advisory, IT and professional service firms.

The site is built around one clear idea: **turn interest into booked meetings**. Its flagship demonstration is the **Enquiry-to-Meeting System**, an interactive five-step walkthrough from first enquiry to booked meeting.

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
| `/` | Home: bold growth-system hero, problem statement, six services, signal artwork, AI agent section, flagship system demo, process, why Khaira, industries, final CTA |
| `/services` | Six detailed services with anchors, typical tool stacks, engagement models and FAQ |
| `/solutions` | Solution areas, flagship Enquiry-to-Meeting deep dive and interactive demo |
| `/how-we-work` | Four-stage process, expectations, engagement models and FAQ |
| `/about` | Positioning, principles, ideal fit, AI stance and sectors |
| `/contact` | Validated enquiry form, next steps, contact details and FAQ |
| `/privacy` | Privacy policy template |
| `/terms` | Terms & conditions template |
| `/company-details` | Registered company name, status, KRS, NIP and REGON |

Also included: `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`, `app/opengraph-image.tsx` and a custom 404 page.

---

## Artwork & motion

The visual system is drawn in code rather than sourced from stock photography, so it stays on-brand and lightweight:

- **`components/artwork.tsx`** - `NebulaBackdrop`, `OrbitHalo`, `OrbitDiagram`, `SignalField`, `ConstellationMap` and the framed `ArtPanel`.
- **`components/bot-artwork.tsx`** - `BotSwarm`, a connected mesh of working AI agents, and `BotCore`, a single governed agent with HUD panels and human-in-the-loop controls.
- **`public/art/*.svg`** - standalone versions of the artwork for decks, social posts or future use.
- **Motion** - slow orbital rotation, star twinkle, signal-line dash, bot float, eye blink, scanlines, data packets and node pulses. All decorative animation is disabled under `prefers-reduced-motion`.
- **Cursor** - a soft emerald glow and ring follow the pointer on fine-pointer devices only (`components/cursor-effect.tsx`, mounted once in `app/layout.tsx`).

Light nebula treatments appear on every inner page hero and the homepage flagship section; the homepage hero and closing CTA use the darker, more luminous variant.

---

## Contact form

`components/contact-form.tsx` validates on the client and posts to `app/api/contact/route.ts`, which validates again, checks the honeypot and consent, then optionally sends an email notification.

### Email delivery

Copy `.env.example` to `.env.local` and add:

```bash
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=grow@khairaco.space
CONTACT_FROM_EMAIL=Khaira.co <grow@khairaco.space>
```

Email uses the [Resend](https://resend.com) API directly, so no SDK is required. The `CONTACT_FROM_EMAIL` domain must be verified in Resend.

Without these variables, the form still works and returns a success response; the enquiry is logged to the server console instead of being emailed. This keeps local development and previews functional.

The endpoint is protected by:
- Server-side validation and field length limits
- Consent enforcement
- A hidden honeypot field
- Input escaping in the HTML email

---

## Editing content

- **Site details, navigation, contact emails:** `lib/site.ts`
- **Six services, deliverables and typical tool stacks:** `lib/services.ts`
- **Solutions and flagship system stages:** `lib/solutions.ts`
- **Problems, principles, process, industries, FAQs, legal date:** `lib/content.ts`
- **Validation rules:** `lib/validation.ts`
- **Email template and delivery:** `lib/email.ts`

---

## Design system

- **Palette** - white and emerald-tinted surfaces, deep green ink `#071b12`, muted green-grey copy, and a digital green accent `#0a7a56` with bright mint highlights `#22c78e` and `#7ee8c0`.
- **Type** - Manrope for display, Inter for body, both loaded through `next/font`.
- **Surfaces** - rounded cards, hairline borders, soft ambient gradients, glass panels and restrained shadows.
- **Motion** - Lenis smooth scrolling, scroll progress, route transitions, scroll reveals, generated artwork and a step-through product demo. All motion respects `prefers-reduced-motion`.
- **Accessibility** - semantic landmarks, skip link, visible focus states, labelled fields, error messages tied to inputs with `aria-describedby`, keyboard-accessible menu and accordions, and live regions for form and demo status.

---

## Confirmed details

- **Canonical domain:** `https://khairaco.space` in `lib/site.ts`. This drives canonical URLs, the sitemap, robots and social metadata.
- **New business email:** `grow@khairaco.space`.
- **General email:** `info@khairaco.space`.
- **Registered company:** `KHAIRA.CO SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ`, status `aktywna`, KRS `0001122716`, NIP `5223308677`, REGON `529443759`. Published at `/company-details` and summarised in the footer.
- **LinkedIn:** the unconfirmed placeholder has been removed. Add a verified company page when it is available.

## Still to confirm before launch

- **Registered business address** - not yet published.
- **Legal pages** - privacy and terms are generic, defensible templates. They should be reviewed by a qualified adviser before launch.
- **Resend sender verification** - the `khairaco.space` domain must be verified in Resend before live email delivery.

No testimonials, client logos, performance statistics or case-study results have been fabricated. The dashboard and demo use clearly labelled example data.

---

## Deployment

The site is ready for a standard Next.js host such as Vercel. Add the three environment variables above in the project settings, then deploy.

Before going live:

1. Add the registered business address when confirmed.
2. Have the privacy policy and terms reviewed.
3. Configure Resend and verify the `khairaco.space` sender domain.
4. Submit `https://khairaco.space/sitemap.xml` in Google Search Console.

---

## Notes

- All visuals are CSS/SVG-generated; there are no external image dependencies.
- The demo company "Northbridge Advisory" and all demo metrics are illustrative.
- The old `index.html`, `css/`, `js/`, `assets/` and Blemince marketing files at the repository root belong to earlier projects and are not used by the Next.js app.
