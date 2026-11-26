import type { Metadata } from "next";
import Link from "next/link";
import { legalUpdated } from "@/lib/content";
import { site } from "@/lib/site";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Company Details",
  description:
    "Registered company details for Khaira.co, including legal name, company status, KRS, NIP and REGON numbers.",
  alternates: { canonical: "/company-details" },
  robots: { index: true, follow: true },
};

const sections = [
  { id: "registered-entity", title: "Registered entity" },
  { id: "registration-details", title: "Registration details" },
  { id: "contact", title: "Contact" },
];

const details = [
  { label: "Trading name", value: site.name },
  { label: "Legal name", value: site.company.legalName },
  { label: "Legal form", value: site.company.legalForm },
  { label: "Status", value: site.company.status },
  { label: "KRS", value: site.company.krs },
  { label: "NIP", value: site.company.nip },
  { label: "REGON", value: site.company.regon },
];

export default function CompanyDetailsPage() {
  return (
    <LegalLayout
      title="Company Details"
      description="The registered details for the legal entity that operates this website."
      updated={legalUpdated}
      sections={sections}
    >
      <h2 id="registered-entity">1. Registered entity</h2>
      <p>
        Khaira.co is the trading name used on this website. The registered legal
        entity is {site.company.legalName}. The company status is{" "}
        {site.company.status}.
      </p>

      <h2 id="registration-details">2. Registration details</h2>
      <dl className="my-5 grid gap-x-6 gap-y-4 rounded-xl border border-line bg-surface p-5 sm:grid-cols-[9rem_1fr]">
        {details.map((detail) => (
          <div key={detail.label} className="sm:contents">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-faint">
              {detail.label}
            </dt>
            <dd className="break-words text-[13px] leading-relaxed text-ink">
              {detail.value}
            </dd>
          </div>
        ))}
      </dl>
      <p>
        For written correspondence or questions about this information, use the
        contact details below.
      </p>

      <h2 id="contact">3. Contact</h2>
      <p>
        New business:{" "}
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
      </p>
      <p>
        General enquiries:{" "}
        <a href={`mailto:${site.contact.infoEmail}`}>{site.contact.infoEmail}</a>
      </p>
      <p>
        You can also use the <Link href="/contact">contact form</Link>.
      </p>
    </LegalLayout>
  );
}
