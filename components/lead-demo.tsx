"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  CalendarCheck,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Database,
  Globe2,
  Mail,
  MessagesSquare,
  MousePointerClick,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Tag,
  Users,
} from "lucide-react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "capture",
    index: "01",
    title: "Capture",
    summary: "New enquiry received",
    icon: MousePointerClick,
    status: "Enquiry captured",
  },
  {
    id: "organise",
    index: "02",
    title: "Organise",
    summary: "CRM record created",
    icon: Database,
    status: "CRM record created",
  },
  {
    id: "engage",
    index: "03",
    title: "Engage",
    summary: "Follow-up scheduled",
    icon: MessagesSquare,
    status: "Follow-up scheduled",
  },
  {
    id: "convert",
    index: "04",
    title: "Convert",
    summary: "Meeting booked",
    icon: CalendarCheck,
    status: "Meeting booked",
  },
  {
    id: "measure",
    index: "05",
    title: "Measure",
    summary: "Pipeline updated",
    icon: BarChart3,
    status: "Dashboard updated",
  },
] as const;

function PanelFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[24rem] flex-col overflow-hidden rounded-xl border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line bg-surface/70 px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
          </span>
          <span className="text-[9px] font-medium text-muted">
            khaira.co/demo
          </span>
        </div>
        <span className="rounded-full border border-brand/15 bg-brand-wash px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-brand">
          Demo
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3.5 sm:p-5">{children}</div>
    </div>
  );
}

function StatusToast({ label }: { label: string }) {
  return (
    <div className="mt-auto flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-[10px] font-medium text-emerald-700">
      <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-600 text-white">
        <Check className="h-2.5 w-2.5" strokeWidth={2.5} />
      </span>
      {label}
    </div>
  );
}

function CapturePanel() {
  return (
    <PanelFrame>
      <div className="grid flex-1 gap-3 sm:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-xl border border-line bg-white p-3.5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-brand">
            Website enquiry
          </p>
          <p className="mt-1 font-display text-base font-semibold tracking-[-0.02em] text-ink">
            Tell us about your business
          </p>
          <div className="mt-3 space-y-2">
            <div className="rounded-lg border border-line bg-surface/60 px-2.5 py-2">
              <p className="text-[8px] uppercase tracking-[0.12em] text-faint">
                Name
              </p>
              <p className="mt-0.5 text-[10px] text-ink">James Walker</p>
            </div>
            <div className="rounded-lg border border-line bg-surface/60 px-2.5 py-2">
              <p className="text-[8px] uppercase tracking-[0.12em] text-faint">
                Company
              </p>
              <p className="mt-0.5 text-[10px] text-ink">
                Northbridge Advisory
              </p>
            </div>
            <div className="rounded-lg border border-line bg-surface/60 px-2.5 py-2">
              <p className="text-[8px] uppercase tracking-[0.12em] text-faint">
                Challenge
              </p>
              <p className="mt-0.5 text-[10px] leading-relaxed text-ink">
                Enquiries are not followed up consistently.
              </p>
            </div>
          </div>
          <div className="mt-3 rounded-lg bg-brand px-3 py-2 text-center text-[10px] font-medium text-white">
            Submit enquiry
          </div>
        </div>

        <div className="flex flex-col rounded-xl border border-brand/15 bg-brand-wash/70 p-3.5">
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-white px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-brand">
            <Sparkles className="h-2.5 w-2.5" strokeWidth={2} />
            Captured
          </span>
          <div className="mt-3 space-y-2.5 text-[10px]">
            <p className="flex items-center gap-1.5 text-muted">
              <Globe2 className="h-3 w-3 text-brand" strokeWidth={1.7} />
              Source: Services page
            </p>
            <p className="flex items-center gap-1.5 text-muted">
              <Tag className="h-3 w-3 text-brand" strokeWidth={1.7} />
              Interest: CRM automation
            </p>
            <p className="flex items-center gap-1.5 text-muted">
              <Users className="h-3 w-3 text-brand" strokeWidth={1.7} />
              Contact details verified
            </p>
          </div>
          <div className="mt-4 rounded-lg border border-white/80 bg-white/70 p-2.5">
            <p className="text-[8px] uppercase tracking-[0.12em] text-faint">
              Next
            </p>
            <p className="mt-1 text-[10px] leading-relaxed text-ink">
              Create CRM record and trigger acknowledgement.
            </p>
          </div>
        </div>
      </div>
      <StatusToast label="Enquiry captured — no manual entry required" />
    </PanelFrame>
  );
}

function OrganisePanel() {
  return (
    <PanelFrame>
      <div className="flex flex-1 flex-col">
        <div className="rounded-xl border border-line bg-white p-3.5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-[10px] font-semibold text-white">
                NB
              </span>
              <div>
                <p className="text-[11px] font-semibold text-ink">
                  Northbridge Advisory
                </p>
                <p className="text-[9px] text-faint">James Walker · Director</p>
              </div>
            </div>
            <span className="rounded-full bg-brand-wash px-2 py-1 text-[8px] font-medium text-brand">
              New enquiry
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 text-[9px]">
            <div className="rounded-lg border border-line bg-surface/60 p-2">
              <p className="text-faint">Source</p>
              <p className="mt-0.5 font-medium text-ink">Website</p>
            </div>
            <div className="rounded-lg border border-line bg-surface/60 p-2">
              <p className="text-faint">Service interest</p>
              <p className="mt-0.5 font-medium text-ink">CRM automation</p>
            </div>
            <div className="rounded-lg border border-line bg-surface/60 p-2">
              <p className="text-faint">Company size</p>
              <p className="mt-0.5 font-medium text-ink">12 employees</p>
            </div>
            <div className="rounded-lg border border-line bg-surface/60 p-2">
              <p className="text-faint">Region</p>
              <p className="mt-0.5 font-medium text-ink">United Kingdom</p>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-line bg-white p-3">
          <p className="text-[8px] font-semibold uppercase tracking-[0.13em] text-faint">
            Pipeline stage
          </p>
          <div className="mt-2.5 flex items-center gap-1">
            {["New", "Qualified", "Meeting", "Proposal"].map((stage, index) => (
              <div key={stage} className="flex flex-1 items-center gap-1">
                <span
                  className={cn(
                    "h-1.5 flex-1 rounded-full",
                    index === 0 ? "bg-brand" : "bg-line",
                  )}
                />
                <span
                  className={cn(
                    "text-[7px] font-medium",
                    index === 0 ? "text-brand" : "text-faint",
                  )}
                >
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>

        <StatusToast label="CRM record created and routed to the right owner" />
      </div>
    </PanelFrame>
  );
}

function EngagePanel() {
  const sequence = [
    {
      label: "Immediate acknowledgement",
      timing: "Sent now",
      state: "sent",
    },
    {
      label: "Relevant insight email",
      timing: "Day 2 · 09:00",
      state: "scheduled",
    },
    {
      label: "Meeting invitation",
      timing: "Day 5 · 09:00",
      state: "waiting",
    },
  ];

  return (
    <PanelFrame>
      <div className="grid flex-1 gap-3 sm:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-xl border border-line bg-white p-3.5">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-brand">
              Follow-up sequence
            </p>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-medium text-emerald-700">
              Active
            </span>
          </div>
          <div className="mt-3 space-y-2">
            {sequence.map((item, index) => (
              <div
                key={item.label}
                className="flex items-start gap-2 rounded-lg border border-line bg-surface/50 p-2.5"
              >
                <span
                  className={cn(
                    "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[8px] font-semibold",
                    item.state === "sent"
                      ? "bg-emerald-600 text-white"
                      : item.state === "scheduled"
                        ? "bg-brand text-white"
                        : "border border-line bg-white text-faint",
                  )}
                >
                  {item.state === "sent" ? (
                    <Check className="h-2.5 w-2.5" strokeWidth={2.5} />
                  ) : (
                    index + 1
                  )}
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium text-ink">
                    {item.label}
                  </p>
                  <p className="text-[8px] text-faint">{item.timing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-line bg-white p-3.5">
          <div className="flex items-center gap-1.5 border-b border-line pb-2 text-[9px] text-muted">
            <Mail className="h-3 w-3 text-brand" strokeWidth={1.7} />
            <span className="font-medium text-ink">Acknowledging your enquiry</span>
          </div>
          <p className="mt-2.5 text-[9px] leading-relaxed text-muted">
            Hi James,
          </p>
          <p className="mt-1.5 text-[9px] leading-relaxed text-muted">
            Thank you for getting in touch. I have included a short overview of
            how we approach follow-up systems for advisory firms.
          </p>
          <div className="mt-2.5 rounded-lg border border-brand/15 bg-brand-wash/60 p-2.5">
            <p className="text-[8px] font-medium text-brand">
              Recommended next step
            </p>
            <p className="mt-1 text-[9px] leading-relaxed text-ink">
              A 30-minute conversation about your current enquiry process.
            </p>
          </div>
          <p className="mt-2.5 text-[8px] text-faint">
            Sent automatically · Reply routes to the team inbox
          </p>
        </div>
      </div>
      <StatusToast label="Follow-up scheduled — no reminders needed" />
    </PanelFrame>
  );
}

function ConvertPanel() {
  const days = [
    { day: "Mon", date: "24" },
    { day: "Tue", date: "25" },
    { day: "Wed", date: "26" },
    { day: "Thu", date: "27", active: true },
    { day: "Fri", date: "28" },
  ];

  return (
    <PanelFrame>
      <div className="grid flex-1 gap-3 sm:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-xl border border-line bg-white p-3.5">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-brand">
              Book a discovery call
            </p>
            <CalendarDays className="h-3.5 w-3.5 text-faint" strokeWidth={1.7} />
          </div>
          <div className="mt-3 grid grid-cols-5 gap-1">
            {days.map((item) => (
              <div
                key={item.day}
                className={cn(
                  "rounded-lg border px-1 py-2 text-center",
                  item.active
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-surface/60 text-muted",
                )}
              >
                <p className="text-[7px] uppercase tracking-[0.08em]">
                  {item.day}
                </p>
                <p className="mt-0.5 text-[10px] font-semibold">{item.date}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-1.5">
            {["10:00", "11:30", "14:00", "15:30"].map((time) => (
              <div
                key={time}
                className={cn(
                  "flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-[9px]",
                  time === "14:00"
                    ? "border-brand bg-brand-wash font-medium text-brand"
                    : "border-line bg-white text-muted",
                )}
              >
                <span>{time}</span>
                <span className="text-[8px]">
                  {time === "14:00" ? "Selected" : "30 min"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col rounded-xl border border-emerald-200 bg-emerald-50/70 p-3.5">
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-white px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
            <Check className="h-2.5 w-2.5" strokeWidth={2.5} />
            Confirmed
          </span>
          <p className="mt-3 font-display text-base font-semibold tracking-[-0.02em] text-ink">
            Discovery call
          </p>
          <div className="mt-2 space-y-2 text-[9px] text-muted">
            <p className="flex items-center gap-1.5">
              <CalendarCheck className="h-3 w-3 text-emerald-600" strokeWidth={1.7} />
              Thursday 27 November
            </p>
            <p className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-emerald-600" strokeWidth={1.7} />
              14:00 – 14:30
            </p>
            <p className="flex items-center gap-1.5">
              <Building2 className="h-3 w-3 text-emerald-600" strokeWidth={1.7} />
              Northbridge Advisory
            </p>
          </div>
          <div className="mt-3 rounded-lg border border-white/80 bg-white/80 p-2.5">
            <p className="text-[8px] uppercase tracking-[0.12em] text-faint">
              Added to calendar
            </p>
            <p className="mt-1 text-[9px] leading-relaxed text-ink">
              Invite sent to both parties. Context and notes attached.
            </p>
          </div>
        </div>
      </div>
      <StatusToast label="Meeting booked — calendar invite sent automatically" />
    </PanelFrame>
  );
}

function MeasurePanel() {
  const metrics = [
    { label: "Enquiries", value: "48", change: "+12%" },
    { label: "Qualified", value: "21", change: "+8%" },
    { label: "Meetings", value: "9", change: "+3" },
    { label: "Response", value: "2m", change: "−38%" },
  ];

  return (
    <PanelFrame>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-brand">
              Pipeline performance
            </p>
            <p className="mt-1 text-[9px] text-faint">
              Last 30 days · demo data
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-2 py-1 text-[8px] font-medium text-muted">
            <ArrowUpRight className="h-2.5 w-2.5 text-success" strokeWidth={2} />
            Improving
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-line bg-surface/60 p-2.5"
            >
              <p className="text-[8px] text-faint">{metric.label}</p>
              <p className="mt-1 font-display text-lg font-semibold leading-none tracking-[-0.03em] text-ink">
                {metric.value}
              </p>
              <p className="mt-1 text-[8px] font-medium text-success">
                {metric.change}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-line bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-faint">
              Enquiry volume
            </p>
            <span className="text-[8px] text-faint">Demo</span>
          </div>
          <div className="mt-2.5 flex h-20 items-end gap-1.5">
            {[38, 46, 42, 58, 52, 68, 62, 76, 70, 88, 80, 96].map(
              (height, index) => (
                <span
                  key={index}
                  className={cn(
                    "w-full rounded-t-[3px]",
                    index === 11 ? "bg-brand" : "bg-brand/15",
                  )}
                  style={{ height: `${height}%` }}
                />
              ),
            )}
          </div>
        </div>

        <StatusToast label="Dashboard updated — pipeline visibility in one place" />
      </div>
    </PanelFrame>
  );
}

const panels = [
  CapturePanel,
  OrganisePanel,
  EngagePanel,
  ConvertPanel,
  MeasurePanel,
];

export function LeadDemo() {
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!running || reduceMotion) return;
    if (active >= steps.length - 1) {
      setRunning(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setActive((current) => Math.min(current + 1, steps.length - 1));
    }, 3200);

    return () => window.clearTimeout(timer);
  }, [active, running, reduceMotion]);

  const start = () => {
    if (reduceMotion) {
      // Auto-play is disabled for reduced motion; step through manually instead.
      setActive((current) =>
        current >= steps.length - 1 ? 0 : current + 1,
      );
      return;
    }
    if (active >= steps.length - 1) {
      setActive(0);
    }
    setRunning(true);
  };

  const goTo = (index: number) => {
    setRunning(false);
    setActive(index);
  };

  const next = () => {
    setRunning(false);
    setActive((current) => Math.min(current + 1, steps.length - 1));
  };

  const reset = () => {
    setRunning(false);
    setActive(0);
  };

  const CurrentPanel = panels[active];
  const isLast = active === steps.length - 1;
  const progress = ((active + 1) / steps.length) * 100;

  return (
    <div
      className="overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-[0_30px_90px_-40px_rgba(4,33,22,0.3)]"
      role="region"
      aria-label="Interactive demonstration of the Khaira Enquiry-to-Meeting System"
    >
      <div className="flex flex-col gap-3 border-b border-line bg-surface/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-wash text-brand">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-[11px] font-semibold text-ink">
              Enquiry-to-Meeting System
            </p>
            <p className="text-[9px] text-faint">
              Interactive demonstration · example data
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden text-[9px] font-medium text-faint sm:inline">
            Step {active + 1} of {steps.length}
          </span>
          <button
            type="button"
            onClick={running ? () => setRunning(false) : start}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-[10px] font-medium text-white transition-colors hover:bg-brand"
          >
            {running ? (
              <>
                <Pause className="h-3 w-3" strokeWidth={2} />
                Pause
              </>
            ) : (
              <>
                <Play className="h-3 w-3" strokeWidth={2} />
                {isLast ? "Replay" : "Run demo"}
              </>
            )}
          </button>
          <button
            type="button"
            onClick={reset}
            aria-label="Reset demonstration"
            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-muted transition-colors hover:border-brand/30 hover:text-ink"
          >
            <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.7} />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[17rem_1fr]">
        <div className="border-b border-line p-3.5 lg:border-b-0 lg:border-r lg:p-4">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-faint">
              Workflow
            </p>
            <span className="text-[9px] text-faint lg:hidden">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="mt-2 h-1 overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-brand transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 grid grid-cols-5 gap-1.5 lg:grid-cols-1 lg:gap-1">
            {steps.map((step, index) => {
              const isActive = active === index;
              const isComplete = index < active;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "group relative flex flex-col items-center gap-1 rounded-xl border px-1.5 py-2 text-center transition-all duration-300 lg:flex-row lg:items-center lg:gap-2.5 lg:px-2.5 lg:py-2 lg:text-left",
                    isActive
                      ? "border-brand/25 bg-brand-wash"
                      : "border-transparent hover:border-line hover:bg-surface",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-7 w-7 shrink-0 place-items-center rounded-full text-[9px] font-semibold transition-colors",
                      isActive
                        ? "bg-brand text-white"
                        : isComplete
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-surface text-faint group-hover:text-muted",
                    )}
                  >
                    {isComplete ? (
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    ) : (
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                    )}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block text-[9px] font-medium leading-tight lg:text-[11px]",
                        isActive ? "text-brand" : "text-muted",
                      )}
                    >
                      {step.title}
                    </span>
                    <span className="hidden truncate text-[9px] text-faint lg:block">
                      {step.summary}
                    </span>
                  </span>
                  {isActive && (
                    <ChevronRight
                      aria-hidden
                      className="ml-auto hidden h-3 w-3 text-brand lg:block"
                      strokeWidth={2}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 hidden rounded-xl border border-line bg-surface/60 p-3 lg:block">
            <p className="text-[9px] font-medium text-ink">What this shows</p>
            <p className="mt-1.5 text-[9px] leading-relaxed text-muted">
              A lead moving from a website enquiry to a booked meeting — with
              the follow-up and reporting handled by the system.
            </p>
          </div>
        </div>

        <div className="p-3.5 sm:p-5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <CurrentPanel />
            </motion.div>
          </AnimatePresence>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-[9px] text-faint">
              Illustrative workflow. Example company and data.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-faint">
                {active + 1} / {steps.length}
              </span>
              <button
                type="button"
                onClick={next}
                disabled={isLast}
                className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-2.5 py-1.5 text-[9px] font-medium text-muted transition-colors hover:border-brand/30 hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ChevronRight className="h-3 w-3" strokeWidth={2} />
              </button>
            </div>
          </div>

          <p aria-live="polite" className="sr-only">
            Step {active + 1} of {steps.length}: {steps[active].title} —{" "}
            {steps[active].status}.
          </p>
        </div>
      </div>
    </div>
  );
}
