import {
  BarChart3,
  Blocks,
  Briefcase,
  CalendarCheck,
  Database,
  Gauge,
  Inbox,
  Layers,
  MessagesSquare,
  MonitorSmartphone,
  MousePointerClick,
  Network,
  Repeat,
  Sparkles,
  Target,
  TrendingUp,
  Unplug,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceIcon } from "@/lib/services";
import type { SolutionIcon } from "@/lib/solutions";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  target: Target,
  workflow: Workflow,
  sparkles: Sparkles,
  monitor: MonitorSmartphone,
  trending: TrendingUp,
  blocks: Blocks,
};

const solutionIcons: Record<SolutionIcon, LucideIcon> = {
  system: Layers,
  target: Target,
  workflow: Workflow,
  sparkles: Sparkles,
  monitor: MonitorSmartphone,
};

const problemIcons = {
  inbox: Inbox,
  unplug: Unplug,
  repeat: Repeat,
} as const;

const differentiatorIcons = {
  briefcase: Briefcase,
  sparkles: Sparkles,
  network: Network,
  gauge: Gauge,
} as const;

const stageIcons = {
  capture: MousePointerClick,
  organise: Database,
  engage: MessagesSquare,
  convert: CalendarCheck,
  measure: BarChart3,
} as const;

type IconProps = {
  className?: string;
};

export function ServiceIcon({
  icon,
  className,
}: IconProps & { icon: ServiceIcon }) {
  const Icon = serviceIcons[icon];
  return <Icon aria-hidden className={className} strokeWidth={1.6} />;
}

export function SolutionIcon({
  icon,
  className,
}: IconProps & { icon: SolutionIcon }) {
  const Icon = solutionIcons[icon];
  return <Icon aria-hidden className={className} strokeWidth={1.6} />;
}

export function ProblemIcon({
  icon,
  className,
}: IconProps & { icon: keyof typeof problemIcons }) {
  const Icon = problemIcons[icon];
  return <Icon aria-hidden className={className} strokeWidth={1.6} />;
}

export function DifferentiatorIcon({
  icon,
  className,
}: IconProps & { icon: keyof typeof differentiatorIcons }) {
  const Icon = differentiatorIcons[icon];
  return <Icon aria-hidden className={className} strokeWidth={1.6} />;
}

export function StageIcon({
  icon,
  className,
}: IconProps & { icon: keyof typeof stageIcons }) {
  const Icon = stageIcons[icon];
  return <Icon aria-hidden className={className} strokeWidth={1.6} />;
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}
