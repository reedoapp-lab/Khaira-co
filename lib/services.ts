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
  stack: string[];
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    slug: "lead-generation",
    index: "01",
    title: "Lead Generation & ICP Targeting",
    shortTitle: "Lead Generation",
    kicker: "Demand generation",
    short: "Reach the right accounts with research, messaging and outreach that starts real conversations.",
    lead: "More outreach is not the answer. Precision is.",
    description:
      "We define your ideal client, research target accounts in Apollo or Clay, verify contact data and build sequences that sound like you. Every reply lands in HubSpot or Pipedrive with clear qualification criteria.",
    deliverables: [
      "ICP and buying triggers",
      "Account research in Apollo / Clay",
      "Verified contact data",
      "Outreach in Instantly / Lemlist",
      "Lead scoring and qualification",
      "Pipeline reporting",
    ],
    outcomes: [
      "One clear definition of your best-fit client",
      "A repeatable route to first conversations",
      "Less time on poorly qualified enquiries",
    ],
    bestFor: "Firms with a proven offer but no consistent route to new conversations.",
    stack: [
      "Apollo",
      "Clay",
      "LinkedIn Sales Navigator",
      "Instantly",
      "HubSpot",
      "Pipedrive",
    ],
    icon: "target",
  },
  {
    slug: "crm-sales-automation",
    index: "02",
    title: "CRM & Sales Automation",
    shortTitle: "CRM & Automation",
    kicker: "Pipeline & follow-up",
    short: "A CRM that matches how you sell, with follow-up that keeps every deal moving.",
    lead: "Most lost revenue is lost to silence.",
    description:
      "We design pipelines around how your firm sells and automate routing, reminders, follow-up and updates. HubSpot, Salesforce or Pipedrive, with Gmail or Outlook sync and n8n, Make or Zapier where needed.",
    deliverables: [
      "Pipeline and stage design",
      "Lead routing and ownership",
      "Automated follow-up",
      "Gmail / Outlook and calendar sync",
      "Slack and task reminders",
      "Pipeline dashboards",
    ],
    outcomes: [
      "Every enquiry has an owner and next action",
      "Consistent follow-up, not memory",
      "A pipeline your team can trust",
    ],
    bestFor: "Teams juggling inboxes, spreadsheets and disconnected tools.",
    stack: [
      "HubSpot",
      "Salesforce",
      "Pipedrive",
      "n8n",
      "Make",
      "Zapier",
      "Slack",
      "Calendly",
    ],
    icon: "workflow",
  },
  {
    slug: "ai-integration",
    index: "03",
    title: "AI Integration & Intelligent Workflows",
    shortTitle: "AI Integration",
    kicker: "Intelligent operations",
    short: "AI agents that remove repetitive work, with human approval built in.",
    lead: "Useful AI removes friction. It does not add work.",
    description:
      "We map how work moves, then build focused workflows in the tools you use: inbox triage, research, document processing, meeting notes and first drafts. OpenAI or Claude, retrieval over your documents, approval points and an audit trail.",
    deliverables: [
      "AI opportunity audit",
      "Private assistant with document retrieval",
      "OpenAI / Claude agent design",
      "Human approval steps",
      "n8n or Make orchestration",
      "Training and governance",
    ],
    outcomes: [
      "Less time on repetitive admin",
      "Faster, consistent responses",
      "AI your team actually uses",
    ],
    bestFor: "Teams losing hours to admin, research and repetitive communication.",
    stack: [
      "OpenAI",
      "Anthropic Claude",
      "LangChain",
      "n8n",
      "Make",
      "pgvector",
      "Pinecone",
      "Slack",
    ],
    icon: "sparkles",
  },
  {
    slug: "conversion-websites",
    index: "04",
    title: "Conversion-Focused Websites",
    shortTitle: "Conversion Websites",
    kicker: "Digital experience",
    short: "A fast, clear website that turns the right attention into enquiries.",
    lead: "Make the next conversation easier, not just describe what you do.",
    description:
      "Positioning, page structure, interface and front-end in one build. Next.js and TypeScript, fast and accessible, with forms connected to your CRM, inbox and analytics from day one.",
    deliverables: [
      "Messaging and page architecture",
      "Next.js / React development",
      "Tailwind CSS design system",
      "CRM form integration",
      "GA4 conversion tracking",
      "Core Web Vitals and accessibility",
    ],
    outcomes: [
      "Clearer positioning",
      "More qualified enquiries from existing traffic",
      "A fast, maintainable site",
    ],
    bestFor: "Firms whose site no longer reflects the quality of their work.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "HubSpot",
      "GA4",
    ],
    icon: "monitor",
  },
  {
    slug: "growth-strategy",
    index: "05",
    title: "Digital Growth Strategy",
    shortTitle: "Growth Strategy",
    kicker: "Direction & priorities",
    short: "See where growth leaks, then fix the constraint that matters most.",
    lead: "Strategy is fewer, clearer choices.",
    description:
      "We review acquisition, qualification and conversion using CRM data, GA4, Search Console and sales conversations. Every recommendation is tied to a commercial outcome and a way to measure it.",
    deliverables: [
      "Growth and funnel audit",
      "CRM and pipeline review",
      "Acquisition and conversion strategy",
      "GA4 / Looker Studio measurement",
      "Prioritised 90-day roadmap",
    ],
    outcomes: [
      "See where opportunities are lost",
      "A plan instead of scattered activity",
      "Decisions based on evidence",
    ],
    bestFor: "Leadership teams that need clarity before a larger build.",
    stack: [
      "GA4",
      "Search Console",
      "Looker Studio",
      "HubSpot",
      "Metabase",
      "SQL",
    ],
    icon: "trending",
  },
  {
    slug: "custom-applications",
    index: "06",
    title: "Custom Business Applications",
    shortTitle: "Custom Applications",
    kicker: "Purpose-built tools",
    short: "Focused web apps and internal tools built around how your business works.",
    lead: "Sometimes the answer is a tool built around your process.",
    description:
      "Internal dashboards, client portals, calculators, proposal tools and integrations between systems that do not talk. Next.js, TypeScript and Postgres, connected to your CRM and payments.",
    deliverables: [
      "Product scoping and UX",
      "Next.js / TypeScript build",
      "Postgres or Supabase model",
      "CRM, API and Stripe integrations",
      "Access control and audit logs",
      "Documentation and handover",
    ],
    outcomes: [
      "A tool that fits your team",
      "Fewer manual handoffs",
      "A more consistent client experience",
    ],
    bestFor: "Businesses constrained by generic software.",
    stack: [
      "Next.js",
      "TypeScript",
      "Postgres",
      "Supabase",
      "Prisma",
      "Stripe",
      "Vercel",
    ],
    icon: "blocks",
  },
];
