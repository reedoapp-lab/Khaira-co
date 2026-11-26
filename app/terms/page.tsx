import type { Metadata } from "next";
import Link from "next/link";
import { legalUpdated } from "@/lib/content";
import { site } from "@/lib/site";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that apply to use of the Khaira.co website and to services provided under a written proposal or statement of work.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const sections = [
  { id: "about-these-terms", title: "About these terms" },
  { id: "use-of-website", title: "Use of the website" },
  { id: "services-and-proposals", title: "Services and proposals" },
  { id: "fees-and-payment", title: "Fees and payment" },
  { id: "client-responsibilities", title: "Client responsibilities" },
  { id: "intellectual-property", title: "Intellectual property" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "third-party-services", title: "Third-party services" },
  { id: "limitation-of-liability", title: "Limitation of liability" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing law" },
  { id: "company-details", title: "Company details" },
  { id: "contact", title: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      description="These terms apply to your use of this website and to services provided by Khaira.co under a written proposal or statement of work."
      updated={legalUpdated}
      sections={sections}
    >
      <h2 id="about-these-terms">1. About these terms</h2>
      <p>
        These terms govern your use of the Khaira.co website at{" "}
        <a href="https://khairaco.space">khairaco.space</a> and, where relevant, the
        services we provide. By using this website, you agree to these terms. If
        you do not agree, please do not use the website.
      </p>
      <p>
        If you engage Khaira.co for services, the written proposal or statement
        of work we provide will set out the scope, deliverables, timeline, fees
        and any additional terms. Together with these terms, that document forms
        the agreement between us. If there is a conflict, the written proposal
        takes precedence for the services it covers.
      </p>
      <p>
        If you are accepting these terms on behalf of a business, you confirm
        that you have authority to do so.
      </p>

      <h2 id="use-of-website">2. Use of the website</h2>
      <p>
        The content on this website is provided for general information about
        Khaira.co and our services. It is not professional, legal, financial or
        other advice, and it should not be relied on as a substitute for a
        conversation about your specific situation.
      </p>
      <p>You agree not to:</p>
      <ul>
        <li>Use the website in a way that breaches applicable law.</li>
        <li>
          Attempt to gain unauthorised access to the website, its systems or
          data.
        </li>
        <li>
          Interfere with the availability, security or integrity of the website.
        </li>
        <li>
          Submit false, misleading or unlawful information through any form.
        </li>
      </ul>
      <p>
        We may update, suspend or withdraw parts of the website at any time. We
        do not guarantee that the website will always be available or free from
        errors.
      </p>

      <h2 id="services-and-proposals">3. Services and proposals</h2>
      <p>
        We provide services relating to growth strategy, lead generation, CRM
        and sales automation, AI integration, conversion-focused websites and
        custom business applications. The exact services, deliverables,
        assumptions, dependencies and acceptance criteria will be set out in a
        written proposal or statement of work.
      </p>
      <p>
        A proposal is valid for the period stated in it. An engagement begins
        when the proposal is accepted in writing and any required deposit or
        first payment is received.
      </p>
      <p>
        Unless expressly stated, we do not guarantee a particular commercial
        result, lead volume, conversion rate or revenue outcome. We will use
        reasonable skill and care and define the measures we can influence
        within the scope of the engagement.
      </p>

      <h2 id="fees-and-payment">4. Fees and payment</h2>
      <p>
        Fees, payment schedules and any expenses are set out in the proposal.
        Unless stated otherwise, fees are exclusive of applicable taxes, which
        will be added where required.
      </p>
      <p>
        Invoices are payable within the period stated in the proposal or
        invoice. We may pause work where an invoice is overdue. Where permitted
        by law, overdue amounts may attract statutory interest and reasonable
        recovery costs.
      </p>
      <p>
        Work outside the agreed scope may require a change request and an
        adjustment to fees or timeline. We will discuss this with you before
        proceeding.
      </p>

      <h2 id="client-responsibilities">5. Client responsibilities</h2>
      <p>To deliver the work effectively, we need you to:</p>
      <ul>
        <li>
          Provide timely access to the people, information, accounts, systems
          and approvals we reasonably need.
        </li>
        <li>
          Nominate a decision-maker who can review and approve work on behalf of
          the business.
        </li>
        <li>
          Ensure that any information, content, data or materials you provide
          are accurate and that you have the right to use them.
        </li>
        <li>
          Comply with the terms of any third-party platforms or tools connected
          to the engagement.
        </li>
      </ul>
      <p>
        Delays or additional requirements caused by missing inputs, access or
        approvals may affect the timeline and fees. We will raise this with you
        as soon as practical.
      </p>

      <h2 id="intellectual-property">6. Intellectual property</h2>
      <p>
        We retain ownership of our pre-existing materials, methods, frameworks,
        know-how, internal tools and generic components. On full payment, you
        receive the rights to the deliverables specified in the proposal, for
        the purposes described there.
      </p>
      <p>
        Third-party materials, software and fonts remain subject to their own
        licences. We will identify any material third-party dependencies where
        relevant. You are responsible for maintaining any subscriptions or
        licences required to operate the delivered system after handover.
      </p>
      <p>
        You retain ownership of the content, data and materials you provide. You
        grant us a limited licence to use them for the purpose of delivering the
        services. We will not publicly reference a client engagement without
        permission.
      </p>

      <h2 id="confidentiality">7. Confidentiality</h2>
      <p>
        Each party may receive information that the other treats as
        confidential. The receiving party will use reasonable care to protect
        that information and will use it only for the purpose of the
        engagement.
      </p>
      <p>
        This does not apply to information that is already public, was already
        known to the receiving party, is independently developed, or must be
        disclosed by law or a regulator. Where disclosure is required, the
        receiving party will notify the other party where lawful to do so.
      </p>

      <h2 id="third-party-services">8. Third-party services</h2>
      <p>
        Our work may involve third-party platforms such as CRM systems, email
        providers, calendar tools, hosting providers and AI services. Those
        services are governed by their own terms, privacy policies and
        availability commitments.
      </p>
      <p>
        We are not responsible for outages, changes, pricing decisions or data
        practices of third-party providers. Where we use AI, outputs may be
        incomplete or inaccurate; we design human review and approval into the
        workflows where appropriate.
      </p>

      <h2 id="limitation-of-liability">9. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we will not be liable for
        indirect or consequential loss, loss of profit, loss of revenue, loss of
        business opportunity, loss of goodwill or loss of data arising from the
        website or the services.
      </p>
      <p>
        To the fullest extent permitted by law, our total aggregate liability
        arising from or in connection with an engagement will not exceed the
        fees paid to us for that engagement in the twelve months preceding the
        event giving rise to the claim, unless the proposal states otherwise.
      </p>
      <p>
        Nothing in these terms excludes or limits liability that cannot lawfully
        be excluded or limited, including liability for death or personal
        injury caused by negligence, fraud, or any other liability that
        applicable law requires us to retain.
      </p>

      <h2 id="termination">10. Termination</h2>
      <p>
        Either party may terminate an engagement in accordance with the
        termination provisions in the proposal. If no provision is stated,
        either party may terminate for material breach that is not remedied
        within a reasonable period after written notice.
      </p>
      <p>
        On termination, you remain responsible for fees for work performed and
        commitments properly incurred up to the termination date. We will
        provide the work completed to that point in a reasonable format.
      </p>
      <p>
        Provisions that by their nature should survive termination, including
        confidentiality, intellectual property, payment obligations and
        liability, will continue to apply.
      </p>

      <h2 id="governing-law">11. Governing law</h2>
      <p>
        These terms are governed by the laws of the jurisdiction in which
        Khaira.co is established. Any disputes will be subject to the exclusive
        jurisdiction of the courts of that jurisdiction, unless mandatory law
        provides otherwise.
      </p>
      <p>
        Before starting formal proceedings, both parties agree to try to resolve
        the dispute through good-faith discussion.
      </p>

      <h2 id="company-details">12. Company details</h2>
      <p>
        Khaira.co is the trading name of {site.company.legalName}. Registered
        under KRS {site.company.krs}, NIP {site.company.nip} and REGON{" "}
        {site.company.regon}. Full details are published on the{" "}
        <Link href="/company-details">Company Details</Link> page. For
        correspondence, use the <Link href="/contact">contact form</Link>.
      </p>

      <h2 id="contact">13. Contact</h2>
      <p>
        For questions about these terms, please use the{" "}
        <Link href="/contact">contact form</Link>. You can also use the email
        address shown on the contact page.
      </p>
    </LegalLayout>
  );
}
