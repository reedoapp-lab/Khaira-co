import { NextResponse } from "next/server";
import { enquiryInterests } from "@/lib/site";
import { isValidEmail, isValidWebsite, normalizeWebsite } from "@/lib/validation";
import { sendEnquiryNotification } from "@/lib/email";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  service?: string;
  challenge?: string;
  consent?: boolean;
  honeypot?: string;
};

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (asString(payload.honeypot)) {
    // Silently accept so bots do not learn anything.
    return NextResponse.json({ ok: true });
  }

  const name = asString(payload.name);
  const email = asString(payload.email);
  const company = asString(payload.company);
  const website = asString(payload.website);
  const service = asString(payload.service);
  const challenge = asString(payload.challenge);
  const consent = payload.consent === true;

  const errors: Record<string, string> = {};

  if (name.length < 2) {
    errors.name = "Please share your name.";
  } else if (name.length > 120) {
    errors.name = "Please keep your name under 120 characters.";
  }

  if (!isValidEmail(email)) {
    errors.email = "Please enter a valid business email address.";
  } else if (email.length > 254) {
    errors.email = "Please use a shorter email address.";
  }

  if (company.length < 2) {
    errors.company = "Please share your company name.";
  } else if (company.length > 200) {
    errors.company = "Please keep the company name under 200 characters.";
  }

  if (website.length > 300) {
    errors.website = "Please use a shorter website address.";
  } else if (!isValidWebsite(website)) {
    errors.website = "Please enter a valid website address.";
  }

  if (
    !service ||
    !enquiryInterests.includes(service as (typeof enquiryInterests)[number])
  ) {
    errors.service = "Please choose a valid service of interest.";
  }

  if (challenge.length < 20) {
    errors.challenge =
      "Please give us a little more detail — at least a sentence.";
  } else if (challenge.length > 5000) {
    errors.challenge = "Please keep the description under 5,000 characters.";
  }

  if (!consent) {
    errors.consent = "Please confirm you agree to be contacted.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const enquiry = {
    name,
    email,
    company,
    website: website ? normalizeWebsite(website) : "",
    service,
    challenge,
    receivedAt: new Date().toISOString(),
  };

  const { delivered, configured } = await sendEnquiryNotification(enquiry);

  if (configured && !delivered) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not deliver your enquiry right now. Please try again, or email us directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered });
}
