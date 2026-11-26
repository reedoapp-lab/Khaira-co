"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Loader2,
  Lock,
} from "lucide-react";
import { enquiryInterests } from "@/lib/site";
import { isValidEmail, isValidWebsite } from "@/lib/validation";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

type FormState = {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  challenge: string;
  consent: boolean;
  honeypot: string;
};

type Status = "idle" | "sending" | "success" | "error";

type ContactFormProps = {
  defaultService?: string;
};

const fieldOrder = [
  "name",
  "email",
  "company",
  "website",
  "service",
  "challenge",
  "consent",
] as const;

function isKnownInterest(value: string | undefined): value is string {
  return Boolean(
    value &&
      enquiryInterests.includes(
        value as (typeof enquiryInterests)[number],
      ),
  );
}

function initialState(defaultService?: string): FormState {
  return {
    name: "",
    email: "",
    company: "",
    website: "",
    service: isKnownInterest(defaultService) ? defaultService : "",
    challenge: "",
    consent: false,
    honeypot: "",
  };
}

export function ContactForm({ defaultService }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(() =>
    initialState(defaultService),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const reduceMotion = useReducedMotion();
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus({ preventScroll: true });
    }
  }, [status]);

  const firstName = useMemo(
    () => form.name.trim().split(" ")[0] || "there",
    [form.name],
  );

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => {
      if (!previous[key as string]) return previous;
      const next = { ...previous };
      delete next[key as string];
      return next;
    });
  };

  const validate = () => {
    const next: Record<string, string> = {};

    if (form.name.trim().length < 2) {
      next.name = "Please share your name.";
    }
    if (!isValidEmail(form.email)) {
      next.email = "Please enter a valid business email address.";
    }
    if (form.company.trim().length < 2) {
      next.company = "Please share your company name.";
    }
    if (!isValidWebsite(form.website)) {
      next.website = "Please enter a valid website address.";
    }
    if (!form.service) {
      next.service = "Please choose a service of interest.";
    }
    if (form.challenge.trim().length < 20) {
      next.challenge =
        "Please give us a little more detail, at least a sentence.";
    }
    if (!form.consent) {
      next.consent = "Please confirm you agree to be contacted.";
    }

    setErrors(next);
    return next;
  };

  const focusFirstError = (nextErrors: Record<string, string>) => {
    const first = fieldOrder.find((key) => nextErrors[key]);
    if (!first) return;
    const element = document.getElementById(`contact-${first}`);
    element?.focus();
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      focusFirstError(nextErrors);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        errors?: Record<string, string>;
        error?: string;
      };

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
          focusFirstError(data.errors);
        }
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(initialState(defaultService));
    setErrors({});
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex min-h-[28rem] flex-col justify-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-700">
          <Check className="h-6 w-6" strokeWidth={2} />
        </span>
        <h2
          ref={successHeadingRef}
          tabIndex={-1}
          className="display mt-6 text-3xl text-ink focus:outline-none md:text-4xl"
        >
          Thank you, {firstName}.
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          Your enquiry is with us. We read every enquiry ourselves and aim to
          reply within one business day with a clear next step.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-brand/30 hover:bg-brand-wash"
          >
            Explore the system
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
          </Link>
          <button
            type="button"
            onClick={reset}
            className="text-[13px] text-muted transition-colors hover:text-ink"
          >
            Send another enquiry
          </button>
        </div>
        <p className="mt-8 text-[11px] leading-relaxed text-faint">
          This form is for business enquiries. We use your details only to
          respond to this enquiry.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
          >
            Full name <span className="text-brand">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={120}
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn("field", errors.name && "border-red-500")}
          />
          {errors.name && (
            <p
              id="contact-name-error"
              className="mt-1.5 text-xs text-red-600"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
          >
            Business email <span className="text-brand">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? "contact-email-error" : undefined
            }
            className={cn("field", errors.email && "border-red-500")}
          />
          {errors.email && (
            <p
              id="contact-email-error"
              className="mt-1.5 text-xs text-red-600"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-company"
            className="mb-1.5 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
          >
            Company <span className="text-brand">*</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={200}
            value={form.company}
            onChange={(event) => update("company", event.target.value)}
            placeholder="Your firm"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={
              errors.company ? "contact-company-error" : undefined
            }
            className={cn("field", errors.company && "border-red-500")}
          />
          {errors.company && (
            <p
              id="contact-company-error"
              className="mt-1.5 text-xs text-red-600"
            >
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-website"
            className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
          >
            Website{" "}
            <span className="font-normal normal-case tracking-normal text-faint">
              (optional)
            </span>
          </label>
          <input
            id="contact-website"
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            maxLength={300}
            value={form.website}
            onChange={(event) => update("website", event.target.value)}
            placeholder="yourfirm.com"
            aria-invalid={Boolean(errors.website)}
            aria-describedby={
              errors.website ? "contact-website-error" : undefined
            }
            className={cn("field", errors.website && "border-red-500")}
          />
          {errors.website && (
            <p
              id="contact-website-error"
              className="mt-1.5 text-xs text-red-600"
            >
              {errors.website}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-service"
          className="mb-1.5 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
        >
          Service of interest <span className="text-brand">*</span>
        </label>
        <div className="relative">
          <select
            id="contact-service"
            name="service"
            value={form.service}
            onChange={(event) => update("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={
              errors.service ? "contact-service-error" : undefined
            }
            className={cn(
              "field appearance-none pr-10",
              errors.service && "border-red-500",
              !form.service && "text-faint",
            )}
          >
            <option value="">Select a service</option>
            {enquiryInterests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
            strokeWidth={1.6}
          />
        </div>
        {errors.service && (
          <p
            id="contact-service-error"
            className="mt-1.5 text-xs text-red-600"
          >
            {errors.service}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-challenge"
          className="mb-1.5 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
        >
          Describe the business challenge{" "}
          <span className="text-brand">*</span>
        </label>
        <textarea
          id="contact-challenge"
          name="challenge"
          rows={5}
          maxLength={5000}
          value={form.challenge}
          onChange={(event) => update("challenge", event.target.value)}
          placeholder="What is happening in the business? Where are opportunities getting lost? What outcome would make this a success?"
          aria-invalid={Boolean(errors.challenge)}
          aria-describedby={
            errors.challenge ? "contact-challenge-error" : undefined
          }
          className={cn(
            "field leading-relaxed",
            errors.challenge && "border-red-500",
          )}
        />
        {errors.challenge && (
          <p
            id="contact-challenge-error"
            className="mt-1.5 text-xs text-red-600"
          >
            {errors.challenge}
          </p>
        )}
      </div>

      <div>
        <div
          className={cn(
            "flex items-start gap-3 rounded-xl border bg-surface/60 p-3.5",
            errors.consent ? "border-red-500" : "border-line",
          )}
        >
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            checked={form.consent}
            onChange={(event) => update("consent", event.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={
              errors.consent ? "contact-consent-error" : undefined
            }
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-line text-brand accent-[#0a7a56]"
          />
          <label
            htmlFor="contact-consent"
            className="text-xs leading-relaxed text-muted"
          >
            I agree to Khaira.co contacting me about this enquiry and have read
            the{" "}
            <Link
              href="/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-brand underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            . <span className="text-brand">*</span>
          </label>
        </div>
        {errors.consent && (
          <p
            id="contact-consent-error"
            className="mt-1.5 text-xs text-red-600"
          >
            {errors.consent}
          </p>
        )}
      </div>

      <input
        type="text"
        name="honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        value={form.honeypot}
        onChange={(event) => update("honeypot", event.target.value)}
        className="hidden"
      />

      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          We couldn&apos;t send your enquiry. Please try again in a moment. If
          it keeps happening, use the email address listed on this page.
        </div>
      )}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white shadow-[0_14px_34px_-16px_rgba(10,122,86,0.8)] transition-all duration-300 hover:bg-[#065c40] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          {status === "sending" ? (
            <>
              Sending
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.8} />
            </>
          ) : (
            <>
              Send enquiry
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.7}
              />
            </>
          )}
        </button>

        <p className="flex items-start gap-1.5 text-[10px] leading-relaxed text-faint sm:max-w-[16rem]">
          <Lock
            aria-hidden
            className="mt-0.5 h-3 w-3 shrink-0"
            strokeWidth={1.6}
          />
          Fields marked * are required. We use your details only to respond to
          this enquiry. No mailing list.
        </p>
      </div>

      <p aria-live="polite" className="sr-only">
        {status === "sending"
          ? "Sending your enquiry."
          : status === "error"
            ? "There was a problem sending your enquiry."
            : ""}
      </p>
    </form>
  );
}
