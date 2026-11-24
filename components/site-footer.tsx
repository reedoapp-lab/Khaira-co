import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Logo } from "@/components/logo";
import { LinkedInIcon } from "@/components/icons";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div className="container-x relative z-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo size="footer" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
              Based in {site.location}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={site.contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Khaira.co on LinkedIn (placeholder link)"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:border-brand/30 hover:text-ink"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <span className="rounded-full border border-line bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-faint">
                Link to confirm
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="eyebrow text-[10px] text-muted">Company</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-ink"
                  >
                    Home
                  </Link>
                </li>
                {site.footerNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow text-[10px] text-muted">Services</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services#${service.slug}`}
                      className="transition-colors hover:text-ink"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow text-[10px] text-muted">Contact</p>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <p className="text-[11px] text-faint">Email</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="text-muted transition-colors hover:text-ink"
                    >
                      {site.contact.email}
                    </a>
                    <span className="rounded-full border border-line bg-white px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-faint">
                      To confirm
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] text-faint">LinkedIn</p>
                  <a
                    href={site.contact.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-1 inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5" />
                    Company page
                  </a>
                </div>
                <div>
                  <p className="text-[11px] text-faint">Start here</p>
                  <Link
                    href="/contact"
                    className="link-underline mt-1 inline-flex text-brand"
                  >
                    Book a consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line py-6 text-xs text-faint md:flex-row md:items-center md:justify-between">
          <p>© {year} Khaira.co. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {site.legalNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-ink"
            >
              Back to top
              <span className="grid h-6 w-6 place-items-center rounded-full border border-line bg-white transition-colors group-hover:border-brand/30">
                <ArrowUp className="h-3 w-3" strokeWidth={1.6} />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none relative -mb-[2vw] select-none overflow-hidden"
      >
        <p className="whitespace-nowrap text-center font-display text-[21vw] font-semibold leading-[0.72] tracking-[-0.07em] text-ink/[0.035]">
          KHAIRA
        </p>
      </div>
    </footer>
  );
}
