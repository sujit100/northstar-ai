export type ServiceAnimationType =
  | 'response'
  | 'frontdesk'
  | 'documents'
  | 'workflow'
  | 'insights'
  | 'ainative';

export interface Service {
  name: string;
  tagline: string;
  problem: string;
  bullets: string[];
  outcome: string;
  animationType: ServiceAnimationType;
}

export const services: Service[] = [
  {
    name: 'The Workflow Automator',
    tagline: 'Find the repetitive work and make it disappear.',
    problem:
      "Most teams don't have a productivity problem — they have a repetition problem. The same data gets typed twice, the same report gets cobbled together every Monday, the same onboarding email gets sent manually for the hundredth time. None of it is hard work. All of it is the wrong work for someone you are paying to think, decide, and grow the business.",
    bullets: [
      'Discovery sessions to map daily workflows and identify the highest-leverage tasks to automate',
      'AI agents combined with Zapier, Make, or n8n where appropriate — pragmatic, not dogmatic',
      'Common targets: data entry between systems, invoice routing, lead scoring, weekly reports, onboarding sequences',
      'Quantified hours-saved estimate before we build anything, so the ROI is clear from day one',
      'Full documentation, video walkthroughs, and a handoff session for your team to maintain it',
      'Optional ongoing tune-up retainer if you want me to keep extending the system',
    ],
    outcome:
      'Meaningful weekly time savings across your team, fewer manual errors, and energy redirected to work that actually moves the needle. I quantify the hours-saved-per-month before we build, so the ROI conversation is settled before the engagement starts — not after. Most clients recoup the cost of the engagement in the first three months alone.',
    animationType: 'workflow',
  },
  {
    name: 'The Insight Engine',
    tagline: 'Get a CFO-level read on your business every Monday morning.',
    problem:
      'Your data lives in a dozen tools and your weekly check-in is mostly someone copy-pasting numbers into a slide deck. The questions that actually matter — what changed, why, and what you should do about it — never quite get answered, because answering them is too expensive, too slow, or too dependent on the one person on the team who knows where to look.',
    bullets: [
      'Connects sales, accounting (QuickBooks or Xero), POS, CRM, Google Analytics, and any other source you have',
      'Single AI-powered analytics layer that understands your data without dashboards to maintain',
      'Plain-English Monday report covering what happened, what changed, and what to pay attention to',
      'Ad-hoc questions any time: "Which products had the best margin last quarter?" — sourced answer in seconds',
      'Built for owners and operators, not analysts — no SQL, no Looker, no learning curve',
      'Refines its definitions and alerts based on your weekly feedback',
    ],
    outcome:
      'Better decisions made faster, with the kind of business clarity usually reserved for companies with full finance teams. The Monday report saves hours of manual prep, and the ability to ask follow-up questions in plain English changes how your leadership team operates day-to-day. Decisions get made on real numbers, not hunches.',
    animationType: 'insights',
  },
  {
    name: 'The Document Brain',
    tagline: 'Turn your filing cabinet into something you can talk to.',
    problem:
      "Your contracts, invoices, SOPs, manuals, proposals, and meeting notes hold most of the answers your team needs every day. The problem isn't whether the answer exists — it's whether anyone can find it in under twenty minutes. Multiply that across a year and the cost is enormous: in time, in onboarding speed, and in the same questions getting asked over and over again because no one wants to dig.",
    bullets: [
      'Ingests Google Drive, Dropbox, SharePoint, Notion, scattered network drives — wherever your docs live',
      'Understands the relationships between contracts, invoices, SOPs, manuals, and meeting notes',
      'Plain-English answers with sourced citations so your team can verify before acting on anything',
      'Instant lookups: "What did we charge Acme last year?" or "What is the warranty clause in the Johnson contract?"',
      'Fully private — runs in your own infrastructure with role-based access controls',
      'Faster ramp for new hires; fewer interruptions for the senior people they used to ask',
    ],
    outcome:
      "Hours saved every week, dramatically faster onboarding, and an end to the daily 'where is that document' scramble. New hires get up to speed in days instead of weeks, your senior team stops being the human search engine for everyone else, and institutional knowledge stops walking out the door every time someone leaves.",
    animationType: 'documents',
  },
  {
    name: 'The Always-On Front Desk',
    tagline: 'A 24/7 AI assistant that captures leads while you sleep.',
    problem:
      "Every missed call, after-hours form, or unanswered chat is a customer who already needed you and now has to decide whether to wait. Hiring a 24/7 receptionist isn't realistic. Hoping a generic chatbot covers it isn't either — most of them can't even answer your basic questions, let alone qualify a lead or book a real appointment that ends up in your calendar.",
    bullets: [
      'Intelligent chatbot or voice agent across your website, SMS, phone lines, and forms',
      'Speaks in your brand voice, knows your services, pricing, and hours of operation',
      'Qualifies leads with the right questions and books appointments straight into your calendar',
      'Routes urgent issues to the right person; passes warm leads to your sales team',
      'Built for clinics, salons, law firms, contractors, and consultancies where missed calls equal lost revenue',
      'Includes setup, training on your business, and live monitoring for the first month',
    ],
    outcome:
      'Every inquiry captured, every lead qualified, every appointment booked — even at 2 AM on a Sunday. Service businesses I have worked with see a meaningful jump in booked-vs-inquiry conversion within weeks, and a noticeable drop in the calls their staff has to take just to gatekeep basic information. The front desk works whether you do or not.',
    animationType: 'frontdesk',
  },
  {
    name: 'Inbox Autopilot',
    tagline: 'Answer every customer email and inquiry in under a minute.',
    problem:
      "Customer messages pile up in the inbox while your team plays catch-up. Each one needs context, the right tone, and a fast turnaround — and the longer the queue gets, the more it costs you in lost trust, escalations, and quietly churned customers. Most teams know this is a problem; very few have the bandwidth to actually fix it without hiring more people.",
    bullets: [
      'Private AI assistant trained on your historical messages, products, policies, and brand voice',
      'Plugs directly into Gmail, Outlook, Help Scout, Zendesk, or Intercom — no platform migration required',
      'Drafts a ready-to-send reply the moment a new message arrives in your inbox',
      'Your team reviews, tweaks if needed, and sends in 30 seconds instead of 20 minutes',
      'Initial setup, training on past conversations, and a one-month optimization period included',
      "Quietly improves over time as it sees more of your team's edits",
    ],
    outcome:
      'Faster replies, happier customers, and a team that finally has time for the work that actually grows the business. Most clients see average first-response time drop from hours to under five minutes within the first month, and a meaningful lift in CSAT once the assistant is dialed in to your brand voice. The hours your team gets back compound — every week, for as long as the system runs.',
    animationType: 'response',
  },
  {
    name: 'Future-Proof Your Service',
    tagline: 'Make your service AI-native before your competitors do.',
    problem:
      "Every category that touches the internet is being quietly rewritten by AI. The companies that act first don't always win — but the ones who wait too long lose the ability to choose. The question isn't whether AI will reshape your service; it's whether you will be the one shaping it, or the one reacting to a competitor who already did.",
    bullets: [
      'Two-week strategic discovery to map where AI realistically reshapes your core experience',
      'Roadmap that prioritizes the highest-impact AI features by customer value and technical feasibility',
      'Working prototype of the most important feature, built on real data with real users',
      'Clear technical specification for your team or contractors to ship the rest',
      'Competitive landscape review so you understand what competitors are building (and not building)',
      'Optional implementation partnership for the first feature beyond the prototype',
    ],
    outcome:
      "A clear vision, a working prototype, and a competitive lead in a market that is quietly being rewritten by AI. You leave the engagement with something real your team can extend, a roadmap that prioritizes by impact, and a confident answer for the next investor or board meeting about how your service is positioned for the next five years.",
    animationType: 'ainative',
  },
];
