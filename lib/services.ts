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
    short:
      "Find the right accounts, sharpen the message, and start conversations with the firms you actually want to work with.",
    lead: "More outreach is not the answer. A precise definition of who you are for, and a repeatable route to them, is.",
    description:
      "We define the commercial profile of the clients you want more of, then build the research, messaging and outreach process that starts relevant conversations. That means account research in Apollo or Clay, a clear ICP, verified contact data, and sequences that sound like you. The result is not a list of names. It is a repeatable route to the right rooms.",
    deliverables: [
      "Ideal customer profile and buying triggers",
      "Target account research in Apollo / Clay",
      "Verified contact data and enrichment",
      "Outreach sequences in Instantly / Lemlist",
      "Qualification criteria and lead scoring",
      "Pipeline reporting in HubSpot or Pipedrive",
    ],
    outcomes: [
      "A clear, shared definition of your best-fit client",
      "A repeatable path to first conversations",
      "Less time spent on poorly qualified enquiries",
    ],
    bestFor:
      "Firms with a proven offer and a referral habit, but no consistent route to new conversations.",
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
    short:
      "A CRM that matches how you sell, with automated follow-up that keeps every opportunity moving.",
    lead: "Most lost revenue is not lost to competitors. It is lost to silence.",
    description:
      "We design the CRM around how your firm actually sells, then automate the repetitive parts: routing, reminders, follow-up, task creation and pipeline updates. We work inside HubSpot, Salesforce or Pipedrive, connect Gmail or Outlook, and use n8n, Make or Zapier where a native integration does not exist. Your team gets one clear view and a consistent next step.",
    deliverables: [
      "CRM pipeline and stage design",
      "Lead routing and ownership rules",
      "Automated follow-up in HubSpot, Salesforce or Pipedrive",
      "Gmail / Outlook and calendar sync",
      "Slack and task reminders",
      "Pipeline dashboards and reporting",
    ],
    outcomes: [
      "Every enquiry has an owner and a next action",
      "Follow-up happens consistently, not from memory",
      "A visible pipeline your team can trust",
    ],
    bestFor:
      "Teams managing enquiries across inboxes, spreadsheets and disconnected tools.",
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
    short:
      "Practical AI agents that remove repetitive work, with human approval built into the workflow.",
    lead: "Useful AI removes friction. It does not add another tool to manage.",
    description:
      "We audit how work moves through your business, find the places where AI can make a genuine difference, and build workflows inside the tools you already use. That can mean inbox triage, research, document processing, meeting notes or first-draft responses. We build with OpenAI, Anthropic Claude and retrieval over your own knowledge base, and we keep approval points and an audit trail in the loop.",
    deliverables: [
      "AI opportunity audit and workflow map",
      "Private assistant with retrieval over your documents",
      "OpenAI / Claude prompt and agent design",
      "Human-in-the-loop approval steps",
      "n8n or Make orchestration",
      "Team training, documentation and governance",
    ],
    outcomes: [
      "Less time spent on repetitive administrative work",
      "Faster, more consistent responses",
      "Practical AI adoption your team actually uses",
    ],
    bestFor:
      "Teams losing hours to admin, research, reporting or repetitive communication.",
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
    short:
      "A fast, clear website that turns the right attention into qualified enquiries.",
    lead: "Your website should make the next conversation easier, not simply describe what you do.",
    description:
      "We combine positioning, page structure, interface design and front-end development to build a site that explains your value clearly and guides the right visitor toward the right action. We build in Next.js and TypeScript, keep the site fast and accessible, and connect forms to your CRM, inbox and analytics from day one.",
    deliverables: [
      "Messaging and page architecture",
      "Next.js / React development",
      "Tailwind CSS design system",
      "HubSpot or Pipedrive form integration",
      "GA4 and conversion tracking",
      "Core Web Vitals and accessibility pass",
    ],
    outcomes: [
      "Clearer positioning for the clients you want",
      "More qualified enquiries from existing traffic",
      "A fast, accessible site your team can maintain",
    ],
    bestFor:
      "Firms whose digital presence no longer reflects the quality of their work.",
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
    short:
      "A clear view of where growth is leaking, and a prioritised plan to fix the constraint that matters most.",
    lead: "Strategy is not a longer list of tactics. It is a clearer set of choices.",
    description:
      "We review how your business acquires, qualifies and converts customers, identify the highest-impact constraints, and build a prioritised roadmap. We use your CRM data, GA4, Search Console and sales conversations to separate evidence from opinion. Every recommendation is tied to a commercial outcome and a way to measure whether it worked.",
    deliverables: [
      "Growth and funnel audit",
      "CRM and pipeline data review",
      "Acquisition and conversion strategy",
      "Measurement plan in GA4 / Looker Studio",
      "Prioritised 90-day roadmap",
    ],
    outcomes: [
      "A clear view of where opportunities are lost",
      "A prioritised plan instead of scattered activity",
      "Decisions based on evidence, not guesswork",
    ],
    bestFor:
      "Leadership teams that need clarity before committing to a larger build.",
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
    short:
      "Focused web apps and internal tools built around the way your business actually operates.",
    lead: "Sometimes the right answer is not another subscription. It is a tool built around your process.",
    description:
      "We design and build focused web applications: internal dashboards, client portals, calculators, proposal tools and integrations between systems that refuse to talk to each other. We use Next.js, TypeScript and Postgres, integrate with your CRM and payment tools, and scope each build around a specific operational problem.",
    deliverables: [
      "Product scoping and UX",
      "Next.js / TypeScript development",
      "Postgres or Supabase data model",
      "CRM, API and Stripe integrations",
      "Role-based access and audit logs",
      "Documentation and handover",
    ],
    outcomes: [
      "A tool that fits the way your team works",
      "Fewer manual handoffs between systems",
      "A more consistent client experience",
    ],
    bestFor:
      "Businesses whose core process is constrained by generic software.",
    stack: [
      "Next.js",
      "TypeScript",
      "Postgres",
      "Supabase",
      "Prisma",
      "Stripe",
      "REST / GraphQL",
    ],
    icon: "blocks",
  },
];
