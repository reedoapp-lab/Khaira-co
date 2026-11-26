export type SolutionIcon =
  | "system"
  | "target"
  | "workflow"
  | "sparkles"
  | "monitor";

export type Solution = {
  slug: string;
  title: string;
  short: string;
  description: string;
  includes: string[];
  bestFor: string;
  icon: SolutionIcon;
  flagship?: boolean;
};

export const solutions: Solution[] = [
  {
    slug: "enquiry-to-meeting",
    title: "Enquiry-to-Meeting System",
    short: "Capture, organise and follow up with every enquiry, through to booking.",
    description:
      "Our flagship solution joins your website, CRM, inbox and calendar into one visible flow. Every enquiry is captured, routed, followed up and measured. Built on HubSpot or Pipedrive, n8n or Make, Gmail or Outlook, Calendly and Slack.",
    includes: [
      "Enquiry capture and qualification",
      "AI-assisted qualification and routing",
      "CRM pipeline and ownership rules",
      "Automated follow-up sequences",
      "Booking and reminders",
      "Pipeline reporting",
    ],
    bestFor:
      "Firms with inbound demand and follow-up that depends on memory or heroics.",
    icon: "system",
    flagship: true,
  },
  {
    slug: "lead-generation-engine",
    title: "Lead Generation Engine",
    short: "A repeatable route to your best-fit clients.",
    description:
      "We define the right accounts, sharpen the message and build outreach that starts relevant conversations. Research runs in Apollo or Clay, sequences in Instantly or Lemlist, and replies land in your CRM.",
    includes: [
      "ICP and target account list",
      "Account research in Apollo or Clay",
      "Messaging and sequences",
      "Qualification and lead scoring",
    ],
    bestFor: "Firms that know who they want but need a consistent route to them.",
    icon: "target",
  },
  {
    slug: "crm-follow-up",
    title: "CRM & Follow-Up Automation",
    short: "One visible pipeline with automated follow-up and clear ownership.",
    description:
      "We replace inbox chaos and spreadsheets with a CRM that matches your sales process, then automate the reminders that keep deals moving. Native where possible, n8n, Make or Zapier where not.",
    includes: [
      "Pipeline and stage design",
      "Lead routing and ownership",
      "Follow-up in HubSpot, Salesforce or Pipedrive",
      "Task and reminder automation",
    ],
    bestFor: "Teams losing track of enquiries across inboxes and tools.",
    icon: "workflow",
  },
  {
    slug: "ai-operations",
    title: "AI Operations Layer",
    short: "Practical AI that removes work without removing judgement.",
    description:
      "We find where AI genuinely helps, then build focused workflows for research, triage, drafting, reporting and internal knowledge. OpenAI or Claude, retrieval over your documents, n8n or Make for orchestration. Human approval stays where it matters.",
    includes: [
      "AI opportunity audit",
      "Private assistant with retrieval",
      "OpenAI and Claude workflows",
      "Human-in-the-loop governance",
    ],
    bestFor: "Teams that want to use AI responsibly, not just experiment.",
    icon: "sparkles",
  },
];

export type SystemStage = {
  id: string;
  index: string;
  title: string;
  description: string;
  detail: string;
  icon: "capture" | "organise" | "engage" | "convert" | "measure";
};

export const systemStages: SystemStage[] = [
  {
    id: "capture",
    index: "01",
    title: "Capture",
    description: "Collect enquiries from your website and landing pages.",
    detail:
      "Forms and landing pages collect the right information, not just an email address. Every source is tracked in GA4 and your CRM.",
    icon: "capture",
  },
  {
    id: "organise",
    index: "02",
    title: "Organise",
    description: "Store and categorise leads inside a CRM.",
    detail:
      "Enquiries become structured records with source, interest, company details and a pipeline stage. Nothing lives only in an inbox.",
    icon: "organise",
  },
  {
    id: "engage",
    index: "03",
    title: "Engage",
    description: "Trigger the right follow-up at the right time.",
    detail:
      "An acknowledgement, a useful next step, a reminder or a personal prompt. Email through Gmail or Outlook; orchestration through n8n or Make.",
    icon: "engage",
  },
  {
    id: "convert",
    index: "04",
    title: "Convert",
    description: "Let prospects book a meeting without email ping-pong.",
    detail:
      "Qualified prospects book a discovery call straight into the right calendar, with the context your team needs.",
    icon: "convert",
  },
  {
    id: "measure",
    index: "05",
    title: "Measure",
    description: "Track pipeline activity and performance.",
    detail:
      "See enquiry volume, response time, qualification and booked meetings in HubSpot, Looker Studio or Metabase.",
    icon: "measure",
  },
];

export const systemOutcomes = [
  "Every enquiry is captured, with an owner and source.",
  "Follow-up happens automatically, not from memory.",
  "Prospects book meetings without email ping-pong.",
  "You can see where opportunities get stuck.",
  "Your team spends more time in conversations, less on admin.",
];

export const systemIncludes = [
  "Enquiry capture and qualification forms",
  "CRM pipeline in HubSpot, Salesforce or Pipedrive",
  "Lead routing and ownership rules",
  "Email and task follow-up via Gmail or Outlook",
  "Booking with Calendly or native calendar integration",
  "AI qualification and drafting with human approval",
  "Response-time and pipeline reporting",
  "Team training and documentation",
  "Post-launch optimisation",
];
