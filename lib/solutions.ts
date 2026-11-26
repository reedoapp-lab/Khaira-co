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
    short:
      "A connected workflow that captures, organises and follows up with every enquiry, from first touch to booked meeting.",
    description:
      "Our flagship solution joins your website, CRM, inbox and calendar into one visible flow. Every enquiry is captured, routed, followed up and measured, so your team can focus on the conversation instead of the admin. We build with HubSpot or Pipedrive, n8n or Make, Gmail or Outlook, Calendly and Slack.",
    includes: [
      "Enquiry capture and qualification",
      "AI-assisted qualification and routing",
      "CRM pipeline and ownership rules",
      "Automated follow-up sequences",
      "Appointment booking and reminders",
      "Pipeline reporting and dashboards",
    ],
    bestFor:
      "Consulting and professional service firms with inbound demand and a follow-up process that depends on memory or individual heroics.",
    icon: "system",
    flagship: true,
  },
  {
    slug: "lead-generation-engine",
    title: "Lead Generation Engine",
    short:
      "A repeatable acquisition process built around your best-fit client profile.",
    description:
      "We define the right accounts, sharpen the message and build the outreach process that starts relevant conversations. Account research runs in Apollo or Clay, sequences in Instantly or Lemlist, and every reply lands in your CRM. Designed to sit alongside your existing business development activity.",
    includes: [
      "ICP and target account list",
      "Account research in Apollo or Clay",
      "Messaging framework and sequences",
      "Qualification criteria and lead scoring",
    ],
    bestFor:
      "Firms that know who they want to work with but need a more consistent route to them.",
    icon: "target",
  },
  {
    slug: "crm-follow-up",
    title: "CRM & Follow-Up Automation",
    short:
      "A single, visible pipeline with automated follow-up and clear ownership.",
    description:
      "We replace inbox chaos and spreadsheets with a CRM structure that matches your sales process, then automate the reminders and follow-ups that keep opportunities moving. Native where possible, n8n, Make or Zapier where not.",
    includes: [
      "Pipeline and stage design",
      "Lead routing and ownership",
      "Follow-up sequences in HubSpot, Salesforce or Pipedrive",
      "Task and reminder automation",
    ],
    bestFor:
      "Teams losing track of enquiries across multiple inboxes and tools.",
    icon: "workflow",
  },
  {
    slug: "ai-operations",
    title: "AI Operations Layer",
    short:
      "Practical AI workflows that remove repetitive work without removing judgement.",
    description:
      "We identify where AI can genuinely improve how your business operates, then build focused workflows around research, triage, drafting, reporting and internal knowledge. We use OpenAI or Anthropic Claude, retrieval over your own documents, and n8n or Make for orchestration. Human approval stays where it matters.",
    includes: [
      "AI opportunity audit",
      "Private assistant with retrieval",
      "OpenAI and Claude workflow design",
      "Human-in-the-loop governance",
    ],
    bestFor:
      "Teams that want to use AI responsibly and measurably, not just experiment with tools.",
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
    description: "Capture enquiries from your website and landing pages.",
    detail:
      "Forms, calls to action and landing pages are designed to collect the right information, not just an email address. Every source is tracked in GA4 and your CRM.",
    icon: "capture",
  },
  {
    id: "organise",
    index: "02",
    title: "Organise",
    description: "Automatically store and categorise leads inside a CRM.",
    detail:
      "New enquiries become structured records with source, service interest, company details and a clear pipeline stage. We use HubSpot, Salesforce or Pipedrive so nothing lives only in an inbox.",
    icon: "organise",
  },
  {
    id: "engage",
    index: "03",
    title: "Engage",
    description: "Trigger the appropriate follow-up communications.",
    detail:
      "The system sends the right message at the right time: an acknowledgement, a useful next step, a reminder or a personal follow-up prompt. Email runs through Gmail or Outlook; orchestration through n8n or Make.",
    icon: "engage",
  },
  {
    id: "convert",
    index: "04",
    title: "Convert",
    description: "Help prospects schedule appointments with the business.",
    detail:
      "Qualified prospects can book a discovery call without email ping-pong. Calendly or a native booking flow lands the meeting in the right calendar with the context your team needs.",
    icon: "convert",
  },
  {
    id: "measure",
    index: "05",
    title: "Measure",
    description: "Track pipeline activity and performance.",
    detail:
      "A clear view of enquiry volume, response time, qualification and booked meetings. Dashboards in HubSpot, Looker Studio or Metabase show where opportunities move and where they get stuck.",
    icon: "measure",
  },
];

export const systemOutcomes = [
  "Every enquiry is captured in one place, with a clear owner and source.",
  "Follow-up happens automatically, not from memory.",
  "Prospects can book a meeting without email ping-pong.",
  "You can see exactly where opportunities are getting stuck.",
  "Your team spends more time in conversations and less time on admin.",
];

export const systemIncludes = [
  "Enquiry capture and qualification forms",
  "CRM pipeline design in HubSpot, Salesforce or Pipedrive",
  "Lead routing and ownership rules",
  "Automated email and task follow-up through Gmail or Outlook",
  "Appointment booking with Calendly or native calendar integration",
  "AI qualification and drafting with human approval",
  "Response-time and pipeline reporting",
  "Team training and documentation",
  "Post-launch optimisation period",
];
