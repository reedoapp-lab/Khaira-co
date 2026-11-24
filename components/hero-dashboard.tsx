import {
  ArrowUpRight,
  Bell,
  CalendarCheck,
  Check,
  Clock,
  Mail,
  Sparkles,
  Workflow,
} from "lucide-react";

const metrics = [
  { label: "New enquiries", value: "48", change: "+12%" },
  { label: "Qualified", value: "21", change: "+8%" },
  { label: "Meetings", value: "9", change: "+3" },
  { label: "Avg. response", value: "2m", change: "−38%" },
];

const bars = [34, 48, 42, 62, 54, 72, 66, 88, 76, 94, 82, 100];

const leads = [
  {
    initials: "NB",
    company: "Northbridge Advisory",
    source: "Website enquiry",
    status: "Qualified",
    tone: "brand",
  },
  {
    initials: "HP",
    company: "Halden Partners",
    source: "Referral",
    status: "Meeting booked",
    tone: "success",
  },
  {
    initials: "MC",
    company: "Meridian Consulting",
    source: "LinkedIn",
    status: "Follow-up",
    tone: "warning",
  },
];

const statusStyles: Record<string, string> = {
  brand: "bg-brand-wash text-brand",
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
};

export function HeroDashboard() {
  return (
    <div className="relative">
      <div
        role="img"
        aria-label="Illustrative product demonstration of the Khaira Enquiry-to-Meeting System, showing a pipeline dashboard, a new enquiry notification, an automated follow-up sequence and a booked discovery meeting. All data is demo data."
        className="relative"
      >
        <div
          aria-hidden
          className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-brand/12 via-brand-soft/10 to-transparent blur-3xl"
        />

        <div
          aria-hidden
          className="relative rounded-[1.5rem] border border-white/90 bg-white/80 p-2 shadow-[0_36px_100px_-38px_rgba(4,33,22,0.4)] backdrop-blur-xl"
        >
          <div className="overflow-hidden rounded-[1.15rem] border border-line bg-white">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-line" />
                  <span className="h-1.5 w-1.5 rounded-full bg-line" />
                  <span className="h-1.5 w-1.5 rounded-full bg-line" />
                </span>
                <span className="text-[11px] font-semibold text-ink">
                  Pipeline overview
                </span>
              </div>
              <span className="rounded-full border border-brand/15 bg-brand-wash px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-brand">
                Demo data
              </span>
            </div>

            <div className="p-3.5 sm:p-4">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-faint">
                    Enquiry-to-meeting
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold tracking-[-0.03em] text-ink">
                    This month
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2 py-1 text-[9px] font-medium text-muted">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-success" />
                  System active
                </span>
              </div>

              <div className="mt-3.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-line bg-surface/70 p-2.5"
                  >
                    <p className="text-[9px] leading-tight text-faint">
                      {metric.label}
                    </p>
                    <div className="mt-1.5 flex items-end justify-between gap-1">
                      <p className="font-display text-xl font-semibold leading-none tracking-[-0.04em] text-ink">
                        {metric.value}
                      </p>
                      <span className="text-[8px] font-medium text-success">
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2.5 rounded-xl border border-line bg-white p-3">
                <div className="flex items-center justify-between">
                  <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-faint">
                    Enquiry volume
                  </p>
                  <span className="inline-flex items-center gap-1 text-[9px] font-medium text-brand">
                    <ArrowUpRight className="h-2.5 w-2.5" strokeWidth={2} />
                    Demo
                  </span>
                </div>
                <div className="mt-3 flex h-16 items-end gap-1 sm:h-20">
                  {bars.map((height, index) => (
                    <span
                      key={index}
                      className={
                        index === bars.length - 1
                          ? "h-full w-full rounded-t-[3px] bg-brand"
                          : "h-full w-full rounded-t-[3px] bg-brand/15"
                      }
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[8px] text-faint">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Nov</span>
                </div>
              </div>

              <div className="mt-2.5 space-y-1.5">
                {leads.map((lead) => (
                  <div
                    key={lead.company}
                    className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-2.5 py-2"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-[8px] font-semibold text-white">
                      {lead.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[10px] font-medium text-ink">
                        {lead.company}
                      </p>
                      <p className="truncate text-[8px] text-faint">
                        {lead.source}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2 py-1 text-[8px] font-medium ${statusStyles[lead.tone]}`}
                    >
                      {lead.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-2.5 flex items-center justify-between rounded-xl border border-line bg-surface/70 px-3 py-2">
                <span className="inline-flex items-center gap-1.5 text-[9px] text-muted">
                  <Sparkles className="h-3 w-3 text-brand" strokeWidth={1.7} />
                  Follow-up automation
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-medium text-success">
                  <Check className="h-3 w-3" strokeWidth={2} />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="animate-float absolute -right-3 top-16 hidden w-[13rem] rounded-2xl border border-white/90 bg-white/95 p-3 shadow-[0_24px_60px_-24px_rgba(4,33,22,0.35)] backdrop-blur-md sm:block"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-brand">
              <Bell className="h-3 w-3" strokeWidth={1.8} />
              New enquiry
            </span>
            <span className="text-[8px] text-faint">now</span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-wash text-[9px] font-semibold text-brand">
              NB
            </span>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-ink">
                Northbridge Advisory
              </p>
              <p className="truncate text-[9px] text-faint">
                Website form · Services
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2 py-1.5 text-[9px] font-medium text-emerald-700">
            <Check className="h-3 w-3" strokeWidth={2} />
            Auto-reply sent
          </div>
        </div>

        <div
          aria-hidden
          className="animate-float-slow absolute -left-5 bottom-20 hidden w-[12.5rem] rounded-2xl border border-white/90 bg-white/95 p-3 shadow-[0_24px_60px_-24px_rgba(4,33,22,0.35)] backdrop-blur-md md:block"
        >
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <CalendarCheck className="h-3.5 w-3.5" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                Meeting booked
              </p>
              <p className="text-[8px] text-faint">Discovery call</p>
            </div>
          </div>
          <div className="mt-3 space-y-1.5 text-[9px] text-muted">
            <p className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-faint" strokeWidth={1.7} />
              Thursday · 14:00
            </p>
            <p className="flex items-center gap-1.5">
              <Mail className="h-3 w-3 text-faint" strokeWidth={1.7} />
              Calendar invite sent
            </p>
          </div>
        </div>

        <div
          aria-hidden
          className="animate-float absolute -right-4 bottom-4 hidden w-[13rem] rounded-2xl border border-white/90 bg-white/95 p-3 shadow-[0_24px_60px_-24px_rgba(4,33,22,0.35)] backdrop-blur-md xl:block"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-wash text-brand">
              <Workflow className="h-3.5 w-3.5" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand">
                Follow-up sequence
              </p>
              <p className="text-[8px] text-faint">Step 2 of 3 · waiting</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1">
            <span className="h-1 flex-1 rounded-full bg-brand" />
            <span className="h-1 flex-1 rounded-full bg-brand" />
            <span className="h-1 flex-1 rounded-full bg-brand/15" />
          </div>
          <p className="mt-2 text-[8px] leading-relaxed text-faint">
            Value email scheduled for tomorrow, 09:00
          </p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
        <div className="rounded-xl border border-line bg-white p-2.5">
          <p className="inline-flex items-center gap-1 text-[8px] font-semibold uppercase tracking-[0.1em] text-brand">
            <Bell className="h-2.5 w-2.5" strokeWidth={2} />
            New enquiry
          </p>
          <p className="mt-1.5 text-[10px] font-medium text-ink">
            Northbridge Advisory
          </p>
          <p className="mt-0.5 text-[8px] text-faint">Auto-reply sent</p>
        </div>
        <div className="rounded-xl border border-line bg-white p-2.5">
          <p className="inline-flex items-center gap-1 text-[8px] font-semibold uppercase tracking-[0.1em] text-emerald-700">
            <CalendarCheck className="h-2.5 w-2.5" strokeWidth={2} />
            Booked
          </p>
          <p className="mt-1.5 text-[10px] font-medium text-ink">
            Discovery call
          </p>
          <p className="mt-0.5 text-[8px] text-faint">Thursday · 14:00</p>
        </div>
      </div>

      <p className="mt-3 text-center text-[10px] leading-relaxed text-faint">
        Illustrative product demonstration. Demo data — not live client
        results.
      </p>
    </div>
  );
}
