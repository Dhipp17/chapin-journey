/* Journey content: roadmap, tabs, next steps. */

const ROADMAP = [
  { when: "Weeks 1-3", title: "Discover & design", text: "About seven working sessions across sales, service, marketing, integration and data. Output: user stories and solution design." },
  { when: "Weeks 4-9", title: "Build in sprints", text: "Six one-week sprints with a demo at the end of each. About an hour a week of your team's time." },
  { when: "Then", title: "Test", text: "End-to-end testing by your partner, then user acceptance testing by Chapin, the first time end users are in the system." },
  { when: "Before go-live", title: "Train", text: "Role-based virtual training, documentation, and separate admin training. Champions from each team join demos from the start." },
  { when: "Target: February", title: "Go live", text: "Sandbox to production, typically over a weekend, ahead of your busy season." },
  { when: "After go-live", title: "Hypercare & grow", text: "About two weeks of hands-on hypercare, then optional ongoing support hours and Premier Success coaching." }
];

const TABS = [
  {
    id: "sales",
    label: "Manufacturing & Sales Cloud",
    kicker: "Manufacturing Cloud + Sales Cloud",
    title: "Every account, agreement and forecast in one place.",
    intro: "Today there is no shared CRM: pipeline lives in spreadsheets, forecasts are stitched together in Power BI, and contacts leave when people do. Sales Cloud and Manufacturing Cloud give Chapin a single account-first view that stays in step with your ERP.",
    before: [
      "No central customer or contact database; knowledge sits with individuals",
      "Opportunities are hypothetical numbers with no products or quantities",
      "Forecasts built account by account from prior-year history, chased manually",
      "Pricing managed in spreadsheets and forms; contracted and book prices pulled by hand",
      "Sales has to leave to Power BI to answer simple questions"
    ],
    after: [
      "One 360 view: account hierarchy, contacts, opportunities, activity, orders",
      "Opportunities with real products, quantities and prices from your ERP",
      "Sales Agreements with planned vs. actual by month and a clear gap to goal",
      "Account-based forecast rolled up by SKU, using prior-year actuals plus agreements",
      "Segments by channel: big box, buying groups, industrial, e-commerce"
    ],
    dayTitle: "A day in the life: national accounts and field sales",
    day: [
      ["8:00 AM", "Open the sales console", "Pipeline, tasks and your Outlook calendar on one home page, with trade-show leads waiting for follow-up."],
      ["8:30 AM", "Ask your AI coworker", "\"What was the latest open line review I was working on?\" Agentforce finds it and opens the opportunity."],
      ["9:30 AM", "Build the line review", "Add products and quantities, with prices from your ERP. Review the account hierarchy and every ship-to underneath."],
      ["11:00 AM", "Check plan vs. actual", "See the 2027 sales agreement by month. A verbal change comes in, so update the planned quantity; approval is optional and recorded."],
      ["2:00 PM", "Answer an order question", "A buyer calls about an order. Status is already on the account page, so no email to the back office."],
      ["4:30 PM", "Manager review", "30/60/90-day alerts and stale-deal flags. Forecast rolls up by SKU, no spreadsheet, and returns net against actuals automatically."]
    ],
    quotes: [
      ["\"It puts everything in one place... we start to have a central depository of information... it's real time. It's visible. I like it.\"", "Sales leader, Chapin"],
      ["\"That way we can monetize the opportunity accurately. We're not just putting a hypothetical number in there.\"", "Sales leader, Chapin"],
      ["\"We are now screaming for the need of one source of truth.\"", "Sales operations, Chapin"]
    ],
    outcomes: ["No more hopping into Power BI for sales answers", "Faster, more accurate forecasts", "Pipeline that survives rep turnover", "Fewer pricing errors and orders held on stop"],
    scope: {
      now: ["Account record types & territories", "Leads & conversion", "Opportunity processes by segment", "Products & price books", "Sales agreements & account forecasting", "Orders & order lines", "Reports & dashboards"],
      later: ["Revenue Cloud: quoting, rebates, co-op, chargebacks", "Partner / rep portal", "Sales performance management", "Salesforce Maps"]
    }
  },
  {
    id: "service",
    label: "Service Cloud",
    kicker: "Service Cloud",
    title: "Answer the customer once, with everything in front of you.",
    intro: "Your product support, order center and ship center teams work from Outlook and RingCentral today, with knowledge spread across ERP specs, drawings and people's heads. Service Cloud brings cases, calls, orders and answers into one console.",
    before: [
      "Cases handled through Outlook email and RingCentral only; no SLAs",
      "Warranty and product registrations exported to spreadsheets every few weeks",
      "No central knowledge base; manuals missing for newer products",
      "Customers send photos because they don't know their model number",
      "Order questions require looping in the back office"
    ],
    after: [
      "Omni-Channel routing for phone, email and messaging by queue, skill or case type",
      "RingCentral stays your phone system, with screen pop and agent presence in Salesforce",
      "Knowledge articles with a manager approval flow, suggested to agents as they work",
      "Email-to-case, web-to-case and product registrations flowing straight in",
      "SLAs, CSAT and NPS surveys that go out when a case closes"
    ],
    dayTitle: "A day in the life: product support, order center and ship center",
    day: [
      ["8:00 AM", "Set your status", "Available for phone, messaging or email. Salesforce is the master for presence; RingCentral stays the telephony layer."],
      ["8:15 AM", "A call arrives", "Screen pop shows the caller's account, open cases, recent orders and the assets they own."],
      ["10:00 AM", "Identify the product from a photo", "The customer can't find a model number and sends a picture. Confirm the model on the case, and a warranty or troubleshooting article is suggested."],
      ["12:30 PM", "Where's my shipment?", "Ship center sees order status and ETA from the ERP on the account page and replies from the console."],
      ["2:30 PM", "Capture the fix", "A new solution becomes a draft knowledge article; the manager approves and it's live for the whole team."],
      ["4:00 PM", "Close the loop", "A CSAT survey goes out automatically. Marketing can see case history before replying to an online review."]
    ],
    quotes: [
      ["\"We just use Outlook, email, and RingCentral. Those are the only two things that we have.\"", "Service lead, Chapin"],
      ["\"Some of them don't even know the models that they have. So they'll send pictures.\"", "Customer service, Chapin"],
      ["\"Yeah, it's all in one, which is very nice.\"", "Service lead, Chapin"]
    ],
    outcomes: ["Fewer touches per case", "Faster time to close, measured with SLAs", "Registrations captured automatically", "A knowledge base that grows with every case"],
    scope: {
      now: ["Case types & queues", "Voice with RingCentral screen pop", "Omni-Channel routing", "Email-to-case & web-to-case", "Product registrations", "Knowledge with approvals", "Reports & dashboards"],
      later: ["Website agent for first-line warranty and product questions", "Photo-based product identification", "Social-to-case"]
    }
  },
  {
    id: "marketing",
    label: "Marketing",
    kicker: "Marketing Cloud",
    title: "Launch it once. Reach every rep, dealer and customer.",
    intro: "Price increases take days to prepare and still don't reach small field accounts. Trade-show leads are worked by hand. Marketing Cloud with Data Cloud gives you segmentation, controlled templates and journeys, connected to the same data your reps use.",
    before: [
      "Price increases need about three days of manual data pulls and still miss accounts",
      "Roughly 80 trade and dealer shows a year with no lead-ROI tracking",
      "Product registrations exported by hand into Mailchimp",
      "Launches coordinated through field reps, with no full campaign",
      "Reps can't see what customers were sent"
    ],
    after: [
      "Segments built in plain language or drag-and-drop: by channel, region, product or buyer",
      "A drag-and-drop email builder with controlled brand templates and approvals",
      "Price-change emails that show old and new price, triggered automatically",
      "Trade-show journeys that branch on engagement and create tasks for reps",
      "Campaign ROI, from show to opportunity, with Google Analytics connected"
    ],
    dayTitle: "A day in the life: marketing and e-commerce",
    day: [
      ["9:00 AM", "Brief a campaign in plain language", "Describe the audience (for example, Southeast turf customers) and the assistant builds the segment and drafts copy."],
      ["10:30 AM", "Approve and schedule", "Templates keep the brand consistent, and nothing goes out without the approval step you set."],
      ["1:00 PM", "Trade-show leads land", "Captured leads get a \"great meeting you\" email. After 48 hours, the journey splits on who clicked, opened or didn't."],
      ["1:30 PM", "Route the right follow-up", "Clickers create a task for the rep. Openers get a follow-up. Non-openers move to a low-frequency list."],
      ["3:00 PM", "Price change goes out", "A price update triggers customer emails with old and new price, no manual list pulls."],
      ["4:30 PM", "Review ROI", "Engagement, deliverability and lead conversion by campaign. Adjust subject lines and segments for next time."]
    ],
    quotes: [
      ["\"We really were... a 'we make it and they will come' business.\"", "Marketing leader, Chapin"],
      ["\"That's exactly what I was visualizing in my head.\"", "Marketing, Chapin, on control over automation"],
      ["\"I don't want... rogue players out there creating their own.\"", "Business lead, Chapin, on email templates"]
    ],
    outcomes: ["Price changes communicated in hours, not days", "Show-to-opportunity ROI you can see", "Faster lead response", "One brand standard across every send"],
    scope: {
      now: ["Email journeys & nurture", "Controlled templates", "Segmentation & notifications", "Website lead capture", "Campaigns & campaign members for ROI", "Google Analytics connection"],
      later: ["SMS and LinkedIn outreach", "Social outbound", "Experience Cloud / partner community"]
    }
  },
  {
    id: "slack",
    label: "Slack",
    kicker: "Slack",
    badge: "Proposed &middot; not yet in scope",
    title: "Where your teams and your Salesforce data meet.",
    intro: "Slack came up lightly in discovery, so this tab shows how it could connect the work in the other five. It is a proposal to discuss, not part of the current scope.",
    before: [
      "Account updates move through email threads and word of mouth",
      "Order and pricing exceptions wait for someone to notice",
      "Service, sales and sales ops hand work to each other by forwarding"
    ],
    after: [
      "A channel per key account or segment with live Salesforce records inside",
      "Alerts for PO exceptions, stale deals, escalations and price-change tasks",
      "Reports and AI agents available right in the conversation",
      "Ask a question in the channel; get the answer and the record, not a hunt"
    ],
    dayTitle: "A day in the life: how a PO exception gets resolved",
    day: [
      ["9:15 AM", "PO arrives by email", "MuleSoft extracts the order. A required field, like ship-to, is missing."],
      ["9:16 AM", "Slack alert", "The order center channel gets a message with the customer, the order and what's missing."],
      ["9:20 AM", "Resolve in the thread", "The account owner replies in-thread with the answer, and the order continues to your ERP."],
      ["9:25 AM", "Notify the rep", "The rep is pinged that the order is confirmed. The customer receives a confirmation email."],
      ["4:00 PM", "Stale-deal nudge", "Managers see deals with no activity in the sales channel and assign follow-ups on the spot."]
    ],
    quotes: [],
    outcomes: ["Fewer hand-offs by email", "Exceptions seen and fixed faster", "One place for account conversations", "Salesforce data where people already work"],
    scope: { now: ["To be scoped with your team"], later: ["Account and segment channels", "Order-exception alerts", "Agentforce in Slack"] }
  },
  {
    id: "premier",
    label: "Premier Success & Acquis",
    kicker: "Premier Success + Acquis implementation",
    title: "Acquis builds it with you. Premier Success keeps it growing.",
    intro: "Two layers of support work together. Acquis, your implementation partner, designs, builds, tests and launches Chapin's Salesforce in about 13 weeks, then supports the first weeks live. Salesforce's Premier Success Plan starts at signature and stays for the life of the subscription, with onboarding, unlimited expert coaching, health checks and expedited 24/7 support.",
    before: [
      "Several large initiatives at once: ERP cloud move, data platform, PIM/DAM, e-commerce",
      "Concern about adoption after the project team leaves",
      "Past experience of buying one thing and receiving another",
      "No in-house Salesforce admin yet"
    ],
    after: [
      "A dedicated Acquis team building with your champions, sprint by sprint, with a demo every week",
      "Premier onboarding and a Personalized Success Path aligned to Chapin's goals",
      "Unlimited 1-to-1 Expert Coaching, health checks and Success Reviews",
      "Expedited technical support with a 1-hour response for business-stopping issues",
      "Your Salesforce account team for the long term, plus optional Acquis support hours"
    ],
    compare: {
      premier: {
        title: "Salesforce Premier Success Plan",
        sub: "Included with Core, Advanced and Max licenses. For the life of your subscription.",
        src: "https://www.salesforce.com/services/success-plans/premier/",
        items: [
          ["Onboarding", "Salesforce experts align your AI and business goals with product capabilities and build a strategy to reach them."],
          ["Personalized Success Path & Success Reviews", "A roadmap of recommendations to deploy, build expertise and drive adoption, reviewed with an expert as you go."],
          ["Customer Success Score", "Insights and AI-driven recommendations on adoption, team expertise and the technical health of your solution."],
          ["Expert Coaching, unlimited", "1-to-1 sessions with Salesforce experts on any topic. Gut-check an idea before you build it."],
          ["Health Checks & Assessments", "An expert reviews how you use Salesforce and gives personalized recommendations."],
          ["Expedited Technical Support", "Chat, phone and case support 24/7, with a 1-hour response for business-stopping issues, plus the always-on Help Agent."],
          ["Developer Support", "Troubleshooting for up to 200 lines of custom code, including pro-code Agentforce solutions."],
          ["Training & certification", "Live instructor-led training and Agentforce workshops, with 25% off instructor-led courses and certifications."]
        ]
      },
      acquis: {
        title: "Acquis implementation (per SOW)",
        sub: "Embark method, about 13 weeks, then hypercare. Fixed-scope phase one.",
        items: [
          ["Team", "Engagement lead, Salesforce consultant, technical architect and Salesforce developer, working on Eastern time."],
          ["Discover & design (weeks 1-3)", "About seven sessions across sales, service, marketing, integration and data, producing user stories and the solution design."],
          ["Build (weeks 4-9)", "Six one-week sprints with a demo at the end of each. About an hour a week of Chapin time."],
          ["Test", "End-to-end testing by Acquis, then user acceptance testing by Chapin."],
          ["Train", "Role-based virtual training close to go-live, documentation, and separate admin training."],
          ["Deploy", "Sandbox to production, typically over a weekend."],
          ["Hypercare", "About two weeks of close support after go-live."],
          ["Evolve (optional)", "A bucket of support hours afterwards for admin help, backlog and next phases. Acquis can also help you hire an admin."]
        ]
      },
      sow: [
        ["Foundation", ["About 25 users in production and test environments", "Profiles, permission sets, roles and sharing rules as reusable personas"]],
        ["Sales / Manufacturing Cloud", ["Account record types and territory assignment", "Leads and conversion", "Opportunity processes by segment", "Products and price books", "Sales agreements and account forecasting", "Orders and order lines", "Reports and dashboards"]],
        ["Service Cloud", ["Case types and queues", "Voice with RingCentral screen pop and Omni-Channel", "Email-to-case, web-to-case and product registrations", "Knowledge, reports and dashboards"]],
        ["Marketing Cloud", ["Email journeys and nurture", "Templates and segment notifications", "Website lead capture", "Campaigns and campaign members for ROI", "Google Analytics connection"]],
        ["MuleSoft integration", ["Two-way ERP integration: accounts, items, prices, contract prices, orders", "Existing EDI flow continues", "PO document processing priced as an option or phase two"]],
        ["Data migration", ["Accounts", "2027 baseline forecast", "Service articles", "Trade-show leads and contacts"]]
      ],
      chapin: ["A designated project manager", "Business leads from sales, service, marketing and IT", "A small group of champions in discovery and every demo", "Clean data, ERP API access and testing time"],
      governance: ["Weekly status meeting", "Executive alignment call every 3-4 weeks", "Sprint demos every week of the build"],
      notIncluded: ["SMS and social outbound", "Account manager targets, visit management, program-based business", "Experience Cloud / partner community", "On-site training (available with travel)", "Revenue Cloud: quoting, rebates, co-op, chargebacks (phase two)"]
    },
    dayTitle: "Who's with you, from signature to six months live",
    day: [
      ["Signature", "Kickoff and Premier onboarding", "Acquis kicks off within one to two weeks. Premier onboarding aligns your goals with the platform from day one."],
      ["Weeks 1-3", "Discover & design with Acquis", "Your champions join the sessions, so the design reflects how Chapin actually works."],
      ["Weeks 4-9", "Build in weekly sprints", "A demo every week. Premier Expert Coaching is available to gut-check decisions along the way."],
      ["Go-live", "Weekend cutover", "Acquis moves sandbox to production. Teams log in to a system they have already seen built."],
      ["Weeks 1-2 live", "Acquis hypercare", "Close, hands-on support while habits form. Premier technical support is there 24/7 for anything business-stopping."],
      ["Month 3", "Health check & Success Review", "A Salesforce expert reviews adoption and data quality and recommends what to turn on next."],
      ["Month 6", "Plan phase two", "Use your Success Path and Acquis Evolve hours to prioritize quoting, rebates, partner portals or Slack."]
    ],
    quotes: [
      ["\"The adoption rate usually, when it's not part of a collective, ends up being pretty slim to none.\"", "Executive sponsor, Chapin"],
      ["\"We don't know what we don't know yet.\"", "Leadership, Chapin"],
      ["\"I really appreciate it because it really does help... This is the journey along the way.\"", "Business lead, Chapin"]
    ],
    outcomes: ["Higher adoption from day one", "A phased rollout you can digest", "Experts on call 24/7", "A clear path to phase two"],
    scope: { now: ["Acquis Embark implementation", "Hypercare (about 2 weeks)", "Admin training & documentation", "Premier Success Plan"], later: ["Acquis Evolve support hours", "Admin hiring support", "Signature Success Plan (designated Customer Success Manager)"] }
  },
  {
    id: "mulesoft",
    label: "MuleSoft",
    kicker: "MuleSoft",
    title: "Your ERP and Salesforce, speaking the same language.",
    intro: "SyteLine is the source of truth for items, prices, accounts and orders. MuleSoft connects it to Salesforce in both directions and can read the purchase orders that arrive as PDFs, spreadsheets and emails, so fewer orders are typed twice.",
    before: [
      "POs arrive as PDFs, images, spreadsheets and email text and are keyed by hand",
      "About 5 minutes to enter a standard PO, longer for a 40-line order",
      "EDI batches can lock the ERP for 15-20 minutes",
      "Data flows out of the ERP, with little coming back in"
    ],
    after: [
      "Two-way ERP sync: accounts, items, prices, contract prices, orders and order lines",
      "Intelligent document processing reads POs and scores each field's confidence",
      "Validation rules: stop and ask when ship-to or bill-to is missing",
      "Order IDs and status flow back to the Salesforce account page",
      "An open foundation for Power BI, your data platform and PIM/DAM later"
    ],
    dayTitle: "A day in the life: a purchase order arrives",
    day: [
      ["7:30 AM", "PO lands in the inbox", "The email triggers a MuleSoft flow. No one has to open it."],
      ["7:31 AM", "AI reads the document", "Header and every line item are extracted, whatever the layout. A 41-line PO is no different."],
      ["7:32 AM", "Validation", "Low-confidence fields turn yellow or red. A missing ship-to stops the order."],
      ["8:00 AM", "Human in the loop", "Exceptions go to a review queue, or a request goes back to the customer."],
      ["8:05 AM", "Order created", "Clean POs create the sales order in your ERP automatically."],
      ["8:06 AM", "Everyone can see it", "Order ID and status appear on the Salesforce account, so sales and service can answer questions immediately."]
    ],
    quotes: [
      ["\"Even just to do one PO... would probably take, you know, 5 minutes on a standard one... one that has 40 lines.\"", "Order center, Chapin"],
      ["\"It's an open system and we can create new API tokens so that outside applications can interface.\"", "IT, Chapin"],
      ["\"The APIs for those existing modules are already written.\"", "IT lead, Chapin"]
    ],
    outcomes: ["Most manual PO keying removed", "Fewer incomplete orders", "ERP stays the golden record", "Ready for AI agents with governance"],
    scope: {
      now: ["SyteLine two-way integration", "Accounts, items, price books, orders", "Existing EDI flow continues", "RingCentral via Salesforce Voice"],
      later: ["PO intake with document processing (decision pending)", "PIM/DAM link", "Power BI & data platform links"]
    }
  }
];

const NEXT = [
  ["Confirm scope", "Walk through the statement of work and settle open items: contacts import, ERP API access and account scope."],
  ["Align leadership", "Review the journey with your executive team and agree the path forward."],
  ["Kick off", "Name your project lead, business leads and champions. Discovery starts one to two weeks after signature."],
  ["Stay close", "A weekly status meeting, plus an executive check-in every three to four weeks."]
];

