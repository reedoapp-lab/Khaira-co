import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { CtaLink } from "@/components/cta-link";
import { NebulaBackdrop } from "@/components/artwork";

type LegalSection = {
  id: string;
  title: string;
};

type LegalLayoutProps = {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
  children: React.ReactNode;
};

export function LegalLayout({
  title,
  description,
  updated,
  sections,
  children,
}: LegalLayoutProps) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-mist">
        <NebulaBackdrop variant="light" />
        <div aria-hidden className="grid-soft absolute inset-0 opacity-40" />
        <div className="container-x relative z-10 py-14 md:py-20">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="display mt-6 max-w-3xl text-[clamp(2.4rem,5vw,4rem)]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            {description}
          </p>
          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
            Last updated: {updated}
          </p>
        </div>
      </section>

      <section className="container-x section-pad">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-[10px] text-muted">On this page</p>
              <nav aria-label="On this page" className="mt-4">
                <ul className="space-y-2.5 border-l border-line pl-4">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-[13px] leading-relaxed text-muted transition-colors hover:text-ink"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-8 rounded-2xl border border-line bg-surface p-5">
                <p className="text-sm font-medium text-ink">
                  Questions about this page?
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Contact us and we will clarify anything that is unclear.
                </p>
                <div className="mt-4">
                  <CtaLink href="/contact" variant="link" size="sm">
                    Contact Khaira.co
                  </CtaLink>
                </div>
              </div>

              <Link
                href="/"
                className="mt-6 inline-flex text-xs text-faint transition-colors hover:text-ink"
              >
                ← Back to home
              </Link>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="legal-prose max-w-3xl">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
