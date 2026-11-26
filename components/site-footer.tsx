import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Logo } from "@/components/logo";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div className="container-x relative z-10 pt-12 md:pt-14">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo size="footer" />
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
              {site.description}
            </p>
            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.16em] text-faint">
              Based in {site.location}
            </p>
            <p className="mt-2 break-words text-[10px] leading-relaxed text-faint">
              {site.company.legalName} · KRS {site.company.krs}
            </p>
            <Link
              href="/company-details"
              className="mt-2 inline-flex text-[11px] font-medium text-brand transition-colors hover:text-ink"
            >
              View company details
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="eyebrow text-[10px] text-muted">Company</p>
              <ul className="mt-3 space-y-2 text-[13px] text-muted">
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
              <ul className="mt-3 space-y-2 text-[13px] text-muted">
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
              <div className="mt-3 space-y-3 text-[13px]">
                <div>
                  <p className="text-[11px] text-faint">New business</p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="mt-1 inline-flex text-muted transition-colors hover:text-ink"
                  >
                    {site.contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] text-faint">General</p>
                  <a
                    href={`mailto:${site.contact.infoEmail}`}
                    className="mt-1 inline-flex text-muted transition-colors hover:text-ink"
                  >
                    {site.contact.infoEmail}
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

        <div className="mt-10 flex flex-col gap-3 border-t border-line py-5 text-[11px] text-faint md:flex-row md:items-center md:justify-between">
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
        <p className="whitespace-nowrap text-center font-display text-[17vw] font-semibold leading-[0.72] tracking-[-0.07em] text-ink/[0.035]">
          KHAIRA
        </p>
      </div>
    </footer>
  );
}
