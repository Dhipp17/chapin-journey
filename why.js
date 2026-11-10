/* "Why Salesforce" content: statement, pillars, proof points, FAQs.
   Every number below is from salesforce.com or the Manufacturing + Marketing Cloud overview deck,
   and is labelled Achieved or Projected exactly as the source describes it. */

const WHY = {
  eyebrow: "Why Salesforce",
  headline: "A company founded in 1884 deserves a platform built for what comes next.",
  paras: [
    "Chapin began the way the best businesses do: with a counter, a customer on one side, and a problem worth solving on the other. That counter was the original CRM. You knew who walked in, what they needed, and what you had promised them.",
    "One hundred and forty years and a fourfold growth later, the counter has become eleven rep agencies, big-box buyers, industrial distributors, buying groups and roughly eighty trade shows a year. The relationships are still there. But they live in spreadsheets, inboxes and the memory of people who may someday retire. “We make it and they will come” has given way to a brand that has to reach every channel, and a leadership team that has chosen technology as its next chapter.",
    "Salesforce gives Chapin its counter back, at the scale of the business it has become. Every account, agreement, forecast, order, case and campaign in one connected view. Connected to your ERP rather than competing with it. Powered by AI agents that work inside your workflows, with your data, under your rules. Built specifically for manufacturers, and improved for manufacturers three times a year.",
    "This is not a leap of faith. It is the platform more than 20,000 manufacturers already run on, and the results below are theirs."
  ],
  closer: "Chapin doesn’t need more software. It needs one trusted view of the business, and a partner that stays beside you as it grows."
};

const PILLARS = [
  { icon: "factory", title: "Built for manufacturers, not adapted to them", text: "A purpose-built manufacturing data model with out-of-the-box objects, processes and frameworks: sales agreements, account-based forecasting, warranties, assets and rebates. Manufacturing-specific innovation arrives three times a year." },
  { icon: "layers", title: "One platform from first lead to last claim", text: "Sales, service, marketing, partners and data share one Customer 360. The rep, the service agent and the marketer finally look at the same customer, with the same facts." },
  { icon: "spark", title: "AI that runs inside your workflows", text: "Agentforce reads your orders, cases and knowledge, answers questions, drafts campaigns and handles routine work, grounded in your data and bounded by guardrails you set." },
  { icon: "plug", title: "Open to the systems you already trust", text: "Your ERP stays the system of record. MuleSoft connects it to Salesforce in both directions, and keeps Power BI, your data platform and future PIM/DAM within reach." },
  { icon: "shield", title: "Trust and governance by design", text: "Role-based access, field history and approvals, and AI that stays within your ecosystem. Control over who sees what, and who can change it." },
  { icon: "people", title: "A partner for the long run", text: "Premier Success coaching, your Salesforce account team, and an implementation partner that builds with your people, so adoption outlasts go-live." }
];

/* tag: "Achieved" = reported result; "Projected" = customer's stated expectation */
const PROOF = [
  { area: "Sales & operations", items: [
    { value: 20000, suffix: "+", label: "manufacturers run on Salesforce", who: "Salesforce for Manufacturing", tag: "Scale" },
    { value: 354, suffix: "%", label: "ROI seen by manufacturers on Manufacturing Cloud", who: "Salesforce Manufacturing Cloud business value overview", tag: "Achieved" },
    { value: 166, suffix: "%", label: "rise in customer satisfaction score, with more demand and forecasted purchase visibility", who: "Kawasaki, Manufacturing Cloud", tag: "Achieved" }
  ]},
  { area: "Service & warranty", items: [
    { value: 21, suffix: "%", label: "faster case wrap-up", who: "Manufacturing Customer Success Survey", tag: "Achieved" },
    { value: 60, suffix: "%", label: "of warranty claims automated", who: "A global manufacturer on Salesforce", tag: "Achieved" },
    { value: 65, suffix: "%", label: "self-service rate with AI-guided troubleshooting", who: "Fisher & Paykel", tag: "Projected" }
  ]},
  { area: "Agentic AI", items: [
    { value: 212, suffix: "%", label: "ROI over three years from service and sales agents", who: "Endress+Hauser", tag: "Projected" },
    { value: 30, suffix: "%", label: "support productivity gain, with 47,500 inquiries a year handled by agents", who: "Endress+Hauser", tag: "Projected" },
    { value: 28, suffix: "%", label: "better customer-support efficiency (and 20% for field technicians)", who: "Luminator", tag: "Projected" }
  ]},
  { area: "Marketing", items: [
    { value: 32, suffix: "%", label: "increase in overall marketing ROI", who: "Salesforce FY26 Customer Success Metrics", tag: "Achieved" },
    { value: 30, suffix: "%", label: "decrease in cost to acquire new customers", who: "Salesforce FY26 Customer Success Metrics", tag: "Achieved" },
    { value: 33, suffix: "%", label: "increase in customer engagement and in customer lifetime value", who: "Salesforce FY26 Customer Success Metrics", tag: "Achieved" }
  ]}
];

const PROOF_NOTE = "Results are those reported by Salesforce and its customers and will vary. “Projected” figures are customers’ stated expectations. A Chapin-specific business case is built in the ROI working session. Sources: salesforce.com/manufacturing, Salesforce customer stories (Endress+Hauser, Luminator, Fisher & Paykel, Kawasaki), and the Salesforce Manufacturing + Marketing Cloud overview.";
