import type { Metadata } from "next";
import Link from "next/link";
import { legalUpdated } from "@/lib/content";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Khaira.co collects, uses and protects personal information submitted through this website and in the course of providing services.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  { id: "who-we-are", title: "Who we are" },
  { id: "information-we-collect", title: "Information we collect" },
  { id: "how-we-use-information", title: "How we use information" },
  { id: "legal-bases", title: "Legal bases" },
  { id: "sharing", title: "Sharing information" },
  { id: "international-transfers", title: "International transfers" },
  { id: "retention", title: "Retention" },
  { id: "your-rights", title: "Your rights" },
  { id: "cookies", title: "Cookies" },
  { id: "security", title: "Security" },
  { id: "changes", title: "Changes" },
  { id: "contact", title: "Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="This policy explains how Khaira.co handles personal information when you visit this website, submit an enquiry or engage our services."
      updated={legalUpdated}
      sections={sections}
    >
      <h2 id="who-we-are">1. Who we are</h2>
      <p>
        Khaira.co is a B2B growth and automation agency. In this policy,
        &ldquo;Khaira.co&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; and
        &ldquo;our&rdquo; refer to the business operating this website at{" "}
        <a href="https://khairaco.space">khairaco.space</a>.
      </p>
      <p>
        Khaira.co is the trading name used on this website. Registered company
        details and a business address will be published here once confirmed.
        Until then, please contact us through the{" "}
        <Link href="/contact">contact form</Link>.
      </p>
      <p>
        This policy is intended to cover the personal information we handle in
        connection with this website, enquiries and client engagements. It does
        not cover third-party websites we may link to.
      </p>

      <h2 id="information-we-collect">2. Information we collect</h2>
      <p>We collect information in the following ways:</p>
      <h3>Information you provide</h3>
      <p>
        When you submit the enquiry form, we collect your name, business email
        address, company name, website address (optional), service of interest,
        a description of your business challenge, and your confirmation that
        you agree to be contacted. We do not ask for unnecessary personal
        information.
      </p>
      <p>
        If you contact us by email or during a consultation, we may keep a
        record of that correspondence and the information you choose to share.
      </p>
      <h3>Technical information</h3>
      <p>
        Our hosting and security providers may automatically collect limited
        technical information such as your IP address, browser type, device
        type, referring page and pages visited. This information is used to
        operate, secure and improve the website.
      </p>
      <p>
        We do not use advertising trackers or sell personal information. We do
        not add enquiry form submissions to a mailing list.
      </p>

      <h2 id="how-we-use-information">3. How we use information</h2>
      <ul>
        <li>To respond to your enquiry and determine whether we can help.</li>
        <li>
          To arrange and conduct consultations, prepare proposals and deliver
          services.
        </li>
        <li>
          To communicate about an active project, including scheduling,
          feedback and support.
        </li>
        <li>
          To maintain business records, manage our relationship with you and
          comply with legal or accounting obligations.
        </li>
        <li>
          To monitor the security and performance of this website and improve
          its content.
        </li>
      </ul>
      <p>
        We do not use your information for automated decision-making that
        produces legal or similarly significant effects. We do not use enquiry
        information to train public AI models.
      </p>

      <h2 id="legal-bases">4. Legal bases</h2>
      <p>
        Where UK GDPR or EU GDPR applies, we rely on the following legal bases:
      </p>
      <ul>
        <li>
          <strong>Legitimate interests:</strong> responding to business
          enquiries, operating our website, securing our systems and improving
          our services. We balance these interests against your rights.
        </li>
        <li>
          <strong>Consent:</strong> where we rely on consent, for example if we
          ask to send you occasional updates. You can withdraw consent at any
          time.
        </li>
        <li>
          <strong>Contract:</strong> where processing is necessary to enter into
          or perform a contract with you or your business.
        </li>
        <li>
          <strong>Legal obligation:</strong> where we need to keep records or
          disclose information to comply with the law.
        </li>
      </ul>

      <h2 id="sharing">5. Sharing information</h2>
      <p>
        We may share personal information with service providers who help us
        operate the business, such as hosting, email delivery, CRM, project
        management and professional advisory providers. These providers are
        expected to protect information and use it only for the services they
        provide to us.
      </p>
      <p>
        We may also disclose information where required by law, to protect
        legal rights, or in connection with a sale or restructuring of the
        business. We do not sell personal information.
      </p>

      <h2 id="international-transfers">6. International transfers</h2>
      <p>
        Some service providers may process information outside the UK or
        European Economic Area. Where this happens, we take reasonable steps to
        ensure appropriate safeguards are in place, such as standard
        contractual clauses or an adequacy decision.
      </p>

      <h2 id="retention">7. Retention</h2>
      <p>
        We keep enquiry information for up to 24 months from the last contact
        so we can respond to follow-up questions and maintain business records.
        If you become a client, we may keep project and financial records for
        longer where required for legal, accounting or contractual reasons.
      </p>
      <p>
        When information is no longer needed, we delete it or anonymise it.
      </p>

      <h2 id="your-rights">8. Your rights</h2>
      <p>
        Depending on where you are located, you may have the right to access,
        correct, delete, restrict or object to the processing of your personal
        information, and to request portability. You may also have the right to
        withdraw consent where processing is based on consent.
      </p>
      <p>
        To exercise a right, contact us through the{" "}
        <Link href="/contact">contact form</Link>. We may need to verify your
        identity before responding. You will not usually be charged for a
        request.
      </p>
      <p>
        If you are in the UK, you can raise a concern with the Information
        Commissioner&apos;s Office (ICO). If you are in the EU, you can contact
        your local supervisory authority.
      </p>

      <h2 id="cookies">9. Cookies</h2>
      <p>
        This website does not set advertising or marketing cookies by default.
        Essential cookies or similar technologies may be used by our hosting and
        security providers to operate the site and protect it from abuse. These
        do not require a cookie banner where they are strictly necessary.
      </p>
      <p>
        If we introduce analytics or marketing cookies in the future, we will
        update this policy and, where required, ask for consent before setting
        non-essential cookies.
      </p>

      <h2 id="security">10. Security</h2>
      <p>
        We use reasonable technical and organisational measures to protect
        personal information. No method of transmission or storage is completely
        secure, so we cannot guarantee absolute security. If we become aware of
        a breach that affects your rights, we will notify you and any relevant
        regulator where required.
      </p>

      <h2 id="changes">11. Changes</h2>
      <p>
        We may update this policy from time to time. The last updated date at
        the top of this page shows when it was most recently revised. Material
        changes will be reflected on this page.
      </p>

      <h2 id="contact">12. Contact</h2>
      <p>
        For privacy questions or requests, please use the{" "}
        <Link href="/contact">contact form</Link>. You can also use the email
        address shown on the contact page. We aim to respond within one business
        day.
      </p>
    </LegalLayout>
  );
}
