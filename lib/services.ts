export type ServiceIcon =
  | "target"
  | "workflow"
  | "sparkles"
  | "monitor"
  | "trending"
  | "blocks";

export type Service = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  kicker: string;
  short: string;
  lead: string;
  description: string;
  deliverables: string[];
  outcomes: string[];
  bestFor: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    slug: "lead-generation",
    index: "01",
    title: "Lead Generation & ICP Targeting",
    shortTitle: "Lead Generation",
    kicker: "Demand generation",
    short:
      "Identify, research and reach the right prospective customers — with a repeatable acquisition process.",
    lead: "A strong pipeline starts with a precise definition of who you are for.",
    description:
      "We define the commercial profile of the clients you want more of, then build the research, messaging and outreach process required to start relevant conversations. The result is not a list of names. It is a repeatable route to the right rooms.",
    deliverables: [
      "Ideal customer profile",
      "Target account research",
      "Outreach messaging & sequences",
      "Qualification criteria",
      "Pipeline reporting",
    ],
    outcomes: [
      "A clear, shared definition of your best-fit client",
      "A repeatable path to first conversations",
      "Less time spent on poorly qualified enquiries",
    ],
    bestFor:
      "Firms with a proven offer but an inconsistent flow of new conversations.",
    icon: "target",
  },
  {
    slug: "crm-sales-automation",
    index: "02",
    title: "CRM & Sales Automation",
    shortTitle: "CRM & Automation",
    kicker: "Pipeline & follow-up",
    short:
      "Build organised sales pipelines and automated follow-up systems that make sure no opportunity is forgotten.",
    lead: "Most lost revenue is not lost to competitors. It is lost to silence.",
    description:
      "We design a CRM structure that reflects how your firm actually sells, then automate the repetitive parts: routing, reminders, follow-up sequences, task creation and pipeline updates. Your team gets a clear view of every opportunity and a consistent next step.",
    deliverables: [
      "CRM pipeline design",
      "Lead routing & ownership",
      "Automated follow-up sequences",
      "Reminders and task automation",
      "Pipeline dashboards",
    ],
    outcomes: [
      "Every enquiry has an owner and a next action",
      "Follow-up happens consistently, not from memory",
      "A visible pipeline your team can trust",
    ],
    bestFor:
      "Teams managing enquiries across inboxes, spreadsheets and disconnected tools.",
    icon: "workflow",
  },
  {
    slug: "ai-integration",
    index: "03",
    title: "AI Integration & Intelligent Workflows",
    shortTitle: "AI Integration",
    kicker: "Intelligent operations",
    short:
      "Integrate AI into practical business processes to reduce repetitive work — with human oversight where it matters.",
    lead: "Useful AI removes friction. It does not add another tool to manage.",
    description:
      "We audit how work moves through your business, identify where AI can make a genuine difference, and implement workflows that fit your existing tools. That might mean inbox triage, research assistance, document processing, meeting notes or first-draft responses. Every workflow is designed with clear approval points and an audit trail.",
    deliverables: [
      "AI opportunity audit",
      "Workflow design & prototyping",
      "Private AI assistants",
      "Human-in-the-loop approvals",
      "Team training & documentation",
    ],
    outcomes: [
      "Less time spent on repetitive administrative work",
      "Faster, more consistent responses",
      "Practical AI adoption your team actually uses",
    ],
    bestFor:
      "Teams losing hours to admin, research, reporting or repetitive communication.",
    icon: "sparkles",
  },
  {
    slug: "conversion-websites",
    index: "04",
    title: "Conversion-Focused Websites",
    shortTitle: "Conversion Websites",
    kicker: "Digital experience",
    short:
      "Develop modern websites and landing pages designed to turn attention into qualified enquiries.",
    lead: "Your website should make the next conversation easier — not simply describe what you do.",
    description:
      "We combine positioning, page structure, interface design and front-end development to build a site that explains your value clearly and guides the right visitor toward the right action. Built on modern foundations for speed, accessibility and search visibility.",
    deliverables: [
      "Messaging & page architecture",
      "Landing page design",
      "Next.js development",
      "Form & CRM integration",
      "Analytics and conversion tracking",
    ],
    outcomes: [
      "Clearer positioning for the clients you want",
      "More qualified enquiries from existing traffic",
      "A fast, accessible site your team can maintain",
    ],
    bestFor:
      "Firms whose digital presence no longer reflects the quality of their work.",
    icon: "monitor",
  },
  {
    slug: "growth-strategy",
    index: "05",
    title: "Digital Growth Strategy",
    shortTitle: "Growth Strategy",
    kicker: "Direction & priorities",
    short:
      "Create structured acquisition and customer conversion strategies grounded in commercial reality.",
    lead: "Strategy is not a longer list of tactics. It is a clearer set of choices.",
    description:
      "We review how your business acquires, qualifies and converts customers, identify the highest-impact constraints, and build a prioritised roadmap. Every recommendation is tied to a commercial outcome and a way to measure whether it worked.",
    deliverables: [
      "Growth & funnel audit",
      "Acquisition strategy",
      "Lead conversion mapping",
      "Measurement plan",
      "Prioritised roadmap",
    ],
    outcomes: [
      "A clear view of where opportunities are lost",
      "A prioritised plan instead of scattered activity",
      "Decisions based on evidence, not guesswork",
    ],
    bestFor:
      "Leadership teams that need clarity before committing to a larger build.",
    icon: "trending",
  },
  {
    slug: "custom-applications",
    index: "06",
    title: "Custom Business Applications",
    shortTitle: "Custom Applications",
    kicker: "Purpose-built tools",
    short:
      "Develop web applications and digital tools tailored to how your business actually operates.",
    lead: "Sometimes the right answer is not another subscription. It is a tool built around your process.",
    description:
      "We design and build focused web applications: internal dashboards, client portals, calculators, proposal tools and integrations between systems that refuse to talk to each other. Each build is scoped around a specific operational problem, with a clear path to maintenance.",
    deliverables: [
      "Product scoping & UX",
      "Web application development",
      "Client portals & dashboards",
      "API & tool integrations",
      "Documentation & handover",
    ],
    outcomes: [
      "A tool that fits the way your team works",
      "Fewer manual handoffs between systems",
      "A more consistent client experience",
    ],
    bestFor:
      "Businesses whose core process is constrained by generic software.",
    icon: "blocks",
  },
];
