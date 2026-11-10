/* Journey content. TABS are the six chapters, in the order a Chapin customer moves through them.
   Each step has: time, who (role), title, text, ease (short "why it's simple" line) and ui (mock screen spec).
   Mock screens are illustrative; names like "Valley Farm & Hardware" and "Ray" are fictional. */

const PERSONA = "Follow Ray, a purchasing manager at a regional farm and hardware dealer, from the first hello at a trade show to a loyal, growing account.";

const TABS = [
  {
    id: "marketing", verb: "Attract", label: "Marketing", kicker: "Marketing Cloud",
    title: "Ray meets Chapin at a trade show, and the follow-up runs itself.",
    intro: "Price increases take days to prepare and still miss small accounts. Trade-show leads are worked by hand. Marketing Cloud gives your team segments, on-brand templates and journeys, on the same data your reps use.",
    before: ["Price increases need about three days of manual data pulls and still miss accounts", "Roughly 80 shows a year with no lead-ROI tracking", "Product registrations exported by hand into Mailchimp", "Reps can't see what customers were sent"],
    after: ["Segments built in plain language: by channel, region, product or buyer", "Controlled brand templates with an approval step", "Trade-show journeys that follow up and create tasks for reps", "Campaign ROI from show to opportunity"],
    steps: [
      { time: "Mon 9:00", who: "Marketing", title: "Brief the campaign in plain English", text: "Describe the audience and the assistant builds the segment and drafts the email. No list exports.", ease: "Type a sentence, get a segment",
        ui: { type: "chat", app: "Marketing", msgs: [["u", "Find Northeast dealers who bought SaltPro spreaders last winter"], ["a", "Found 412 accounts across hardware and farm-supply dealers. Want me to draft the pre-season email?"], ["u", "Yes, use the SaltPro template"]] } },
      { time: "Mon 10:30", who: "Marketing", title: "Approve an on-brand email", text: "Every send starts from an approved Chapin template, and nothing goes out without the approval step you set.", ease: "No rogue emails",
        ui: { type: "email", app: "Marketing", subject: "Get ahead of winter with SaltPro", lines: ["Hi {First name},", "Winter is coming early to the Northeast. Here's how dealers are stocking up..."], cta: "Approved by Marketing lead" } },
      { time: "Show day", who: "Trade show team", title: "Capture Ray at the booth", text: "Scan or type Ray in. He lands in Salesforce as a lead with the show as his source, scored and routed to the right rep.", ease: "Lead to rep in seconds",
        ui: { type: "record", app: "Sales", obj: "Lead", name: "Ray (fictional)", sub: "Purchasing Manager, Valley Farm & Hardware", fields: [["Source", "Northeast Dealer Show"], ["Score", "72 / 100"], ["Territory", "Northeast"], ["Owner", "Field rep"]] } },
      { time: "+48 hours", who: "Automatic", title: "The journey follows up for you", text: "A thank-you email goes out, then the journey branches on what Ray does. Clickers become a rep task; non-openers move to a lighter cadence.", ease: "Set it once",
        ui: { type: "flow", app: "Marketing", start: "Great meeting you email", wait: "Wait 48 hours", branches: [["Clicked", "Task for rep: call Ray"], ["Opened", "Send follow-up"], ["No open", "Low-frequency list"]] } },
      { time: "Price change", who: "Marketing", title: "Tell every account at once", text: "A price update triggers emails showing old and new prices, and reps see exactly what each customer received.", ease: "Hours, not three days",
        ui: { type: "email", app: "Marketing", subject: "Your 2027 Chapin pricing", lines: ["Here is what changes for your account on March 1:"], table: [["Item", "Now", "New"], ["SaltPro 80 lb", "$ —", "$ —"], ["TurfPro 100 lb", "$ —", "$ —"]], cta: "Sent to 1,140 accounts" } },
      { time: "Friday", who: "Marketing lead", title: "See which shows paid off", text: "Leads, opportunities and revenue by show, on one dashboard. Next year's show list writes itself.", ease: "ROI without a spreadsheet",
        ui: { type: "chart", app: "Marketing", h: "Pipeline by trade show", legend: ["Leads", "Pipeline"], bars: [["Dealer Show", 70, 90], ["Farm Expo", 55, 60], ["Hardware Mkt", 80, 45], ["Turf Summit", 40, 70]] } }
    ],
    quotes: [["\"We really were... a 'we make it and they will come' business.\"", "Marketing leader, Chapin"], ["\"That's exactly what I was visualizing in my head.\"", "Marketing, Chapin, on control over automation"]],
    outcomes: ["Price changes in hours, not days", "Show-to-opportunity ROI", "Faster lead response", "One brand standard"],
    scope: { now: ["Email journeys & nurture", "Controlled templates", "Segmentation & notifications", "Website lead capture", "Campaign ROI", "Google Analytics"], later: ["SMS and LinkedIn", "Social outbound", "Partner community"] }
  },
  {
    id: "sales", verb: "Win & plan", label: "Sales", kicker: "Manufacturing Cloud + Sales Cloud",
    title: "The rep wins Ray's business, and the forecast updates itself.",
    intro: "Today pipeline lives in spreadsheets and forecasts are stitched together in Power BI. Manufacturing Cloud gives every rep and manager one account-first view that stays in step with your ERP.",
    before: ["No shared customer or contact database", "Opportunities are guesses with no products or quantities", "Forecasts rebuilt account by account from last year", "Sales leaves for Power BI to answer simple questions"],
    after: ["One view: hierarchy, contacts, deals, activity and orders", "Real products, quantities and ERP prices on every deal", "Sales agreements with plan vs. actual by month", "Account forecast that rolls up by SKU on its own"],
    steps: [
      { time: "8:00 AM", who: "Field rep", title: "Start the day on one screen", text: "Leads by source, pipeline by stage, recent accounts and anything waiting for approval, all on one home page. Ray shows up as a new trade-show lead, right next to the website leads.", ease: "Everything on one page",
        ui: { type: "home", app: "Sales", tiles: [["My pipeline", "$1.2M", "14 open deals"], ["Due today", "5 tasks", "1 hot lead"], ["Meetings", "3", "Synced from Outlook"]], list: ["Call Ray, Valley Farm & Hardware (clicked email)", "Prep line review: national account", "Follow up on SaltPro quote"] } },
      { time: "8:30 AM", who: "Field rep", title: "Ask instead of searching", text: "The AI assistant finds the record, summarizes it and suggests the next step, so the rep never digs through menus.", ease: "Ask in plain English",
        ui: { type: "chat", app: "Sales", msgs: [["u", "What's my latest open line review?"], ["a", "Valley Farm & Hardware: spring line review, Negotiation stage, 3 products. Last touch: show email clicked yesterday. Open it?"]] } },
      { time: "10:00 AM", who: "Field rep", title: "Build the line review", text: "Add products and quantities. Prices come straight from your ERP, so there is no price sheet to check.", ease: "Prices fill in for you",
        ui: { type: "record", app: "Sales", obj: "Opportunity", name: "Valley Farm & Hardware: Spring Line Review", sub: "Stage: Negotiation", fields: [["Close date", "Feb 14"], ["Type", "Line review"]], related: { h: "Products", rows: [["SaltPro 80 lb spreader", "40", "ERP price"], ["TurfPro 100 lb", "24", "ERP price"], ["Pump sprayer 2 gal", "120", "ERP price"]] } } },
      { time: "11:30 AM", who: "Field rep", title: "Check plan vs. actual", text: "Ray's sales agreement shows what he planned to buy against what he ordered, month by month, with the gap to goal.", ease: "No exports",
        ui: { type: "chart", app: "Sales", h: "Sales agreement: plan vs. actual", legend: ["Planned", "Actual"], bars: [["Jan", 60, 58], ["Feb", 70, 64], ["Mar", 90, 72], ["Apr", 80, 30]] } },
      { time: "2:00 PM", who: "Field rep", title: "Answer \"where's my order?\"", text: "Ray calls about an order. Status from the ERP is already on his account, so there is no email to the back office.", ease: "Answer on the first call",
        ui: { type: "record", app: "Sales", obj: "Account", name: "Valley Farm & Hardware", sub: "Parent: Valley Farm Group · 3 ship-to locations", fields: [["ERP ID", "C601-0458"], ["Segment", "Hardware / farm dealer"]], related: { h: "Orders (from ERP)", rows: [["SO-88213", "Shipped", "Tracking sent"], ["SO-88190", "Delivered", "Feb 2"], ["SO-88102", "Delivered", "Jan 18"]] } } },
      { time: "4:30 PM", who: "Sales manager", title: "Forecast rolls itself up", text: "The account forecast rolls up by SKU from last year's actuals plus agreements, and stale deals are flagged automatically.", ease: "No chasing reps",
        ui: { type: "home", app: "Sales", tiles: [["2027 forecast", "On track", "Rolled up by SKU"], ["Stale deals", "2", "No activity 30 days"], ["Gap to plan", "-4%", "Northeast"]], list: ["Alert: national account line review idle 32 days", "SaltPro forecast up 12% after show season"] } }
    ],
    quotes: [["\"It puts everything in one place... it's real time. It's visible. I like it.\"", "Sales leader, Chapin"], ["\"That way we can monetize the opportunity accurately. We're not just putting a hypothetical number in there.\"", "Sales leader, Chapin"]],
    outcomes: ["No more Power BI hopping", "Faster, more accurate forecasts", "Pipeline that survives turnover", "Fewer pricing errors"],
    scope: { now: ["Accounts & territories", "Leads & conversion", "Opportunities by segment", "Products & price books", "Sales agreements & forecasting", "Orders", "Dashboards"], later: ["Revenue Cloud: quoting, rebates, co-op, chargebacks", "Partner / rep portal", "Sales performance management", "Salesforce Maps"] }
  },
  {
    id: "mulesoft", verb: "Fulfill", label: "Orders & ERP", kicker: "MuleSoft",
    title: "Ray emails a PO, and nobody has to type it twice.",
    intro: "Your ERP stays the source of truth. MuleSoft connects it to Salesforce in both directions and can read the POs that arrive as PDFs, spreadsheets and emails.",
    before: ["POs arrive as PDFs, images, spreadsheets and email text and are keyed by hand", "About 5 minutes for a standard PO, longer for a 40-line order", "EDI batches can lock the ERP for 15-20 minutes", "Little data flows back into the ERP"],
    after: ["Two-way ERP sync: accounts, items, prices, orders", "AI reads POs and scores each field's confidence", "Missing ship-to or bill-to stops the order and asks", "Order status visible to sales and service"],
    steps: [
      { time: "7:30 AM", who: "Ray (customer)", title: "Ray emails a PO", text: "The PO lands in the order inbox as a PDF. That email starts the process. Nobody has to open it.", ease: "Nothing to open",
        ui: { type: "email", app: "Inbox", subject: "PO 4471, spring order", lines: ["From: Ray, Valley Farm & Hardware", "Attached: PO_4471.pdf (41 lines)"], cta: "Picked up by MuleSoft" } },
      { time: "7:31 AM", who: "Automatic", title: "AI reads every line", text: "The header and all 41 lines are extracted, whatever the layout. Each field gets a confidence score.", ease: "41 lines in seconds",
        ui: { type: "doc", app: "Document processing", file: "PO_4471.pdf", fields: [["Customer", "Valley Farm & Hardware", 98], ["Bill-to", "Valley Farm Group", 96], ["Ship-to", "Missing", 0], ["Lines", "41 items", 94]] } },
      { time: "7:32 AM", who: "Order center", title: "Missing ship-to? It stops and asks", text: "Low-confidence or missing fields go to a person, or a polite request goes back to Ray automatically.", ease: "Exceptions only",
        ui: { type: "chat", app: "Order center", msgs: [["a", "PO 4471 is missing a ship-to. Valley Farm has 3 locations. Which one?"], ["u", "North warehouse"], ["a", "Updated. Releasing the order to the ERP."]] } },
      { time: "8:05 AM", who: "Automatic", title: "Order created in your ERP", text: "Clean POs create the sales order in your ERP. Existing EDI orders keep flowing as they do today.", ease: "No re-keying",
        ui: { type: "integration", nodes: ["Salesforce", "MuleSoft", "ERP"], status: "Sales order SO-88240 created" } },
      { time: "8:06 AM", who: "Sales & service", title: "Everyone sees the status", text: "The order number and status appear on Ray's account, so sales and service can answer him right away.", ease: "One source of truth",
        ui: { type: "record", app: "Sales", obj: "Account", name: "Valley Farm & Hardware", sub: "Orders sync from your ERP", fields: [["Latest PO", "4471"], ["Ship-to", "North warehouse"]], related: { h: "Orders", rows: [["SO-88240", "Booked", "41 lines"], ["SO-88213", "Shipped", "Tracking sent"]] } } }
    ],
    quotes: [["\"Even just to do one PO... would probably take, you know, 5 minutes on a standard one... one that has 40 lines.\"", "Order center, Chapin"], ["\"The APIs for those existing modules are already written.\"", "IT lead, Chapin"]],
    outcomes: ["Most PO keying removed", "Fewer incomplete orders", "ERP stays the golden record", "Ready for AI with governance"],
    scope: { now: ["Two-way ERP integration", "Accounts, items, price books, orders", "EDI continues", "RingCentral via Salesforce Voice"], later: ["PO document processing (decision pending)", "PIM/DAM link", "Power BI & data platform"] }
  },
  {
    id: "service", verb: "Support", label: "Service", kicker: "Service Cloud",
    title: "Ray's customer calls with a problem, and it's solved on the first call.",
    intro: "Product support, order center and ship center work from Outlook and RingCentral today. Service Cloud puts calls, cases, orders and answers in one console. RingCentral stays your phone system.",
    before: ["Cases live in Outlook and RingCentral only; no SLAs", "Registrations exported to spreadsheets every few weeks", "Knowledge lives in specs, drawings and people's heads", "Order questions need the back office"],
    after: ["Phone, email and web routed to the right queue", "RingCentral screen pop with the full account", "Knowledge articles suggested as you work", "Registrations, SLAs and CSAT built in"],
    steps: [
      { time: "8:00 AM", who: "Service agent", title: "Set your status once", text: "Pick phone, email or both. Salesforce routes the work, and RingCentral follows the same status.", ease: "One status, both systems",
        ui: { type: "console", app: "Service", status: "Available: Phone + Email", caller: null, rows: [["Queue", "Product support"], ["Waiting", "3 cases"], ["SLA risk", "0"]] } },
      { time: "8:15 AM", who: "Service agent", title: "The call pops with context", text: "Before saying hello, the agent sees who is calling, their open cases, recent orders and the products they own.", ease: "No \"can I get your account number?\"",
        ui: { type: "console", app: "Service", status: "On call", caller: "Valley Farm & Hardware", rows: [["Open cases", "1"], ["Last order", "SO-88213, shipped"], ["Registered products", "Pump sprayer 2 gal"]] } },
      { time: "10:00 AM", who: "Service agent", title: "Identify the product from a photo", text: "The customer can't find a model number and sends a photo. The agent confirms the model, and the right troubleshooting article appears.", ease: "Answer suggested for you",
        ui: { type: "record", app: "Service", obj: "Case", name: "Sprayer losing pressure", sub: "Photo attached · Model confirmed", fields: [["Product", "Pump sprayer 2 gal"], ["Warranty", "Active"]], related: { h: "Suggested knowledge", rows: [["Pressure loss: check the seal", "92% match", ""], ["Replacement seal kit", "Part", ""]] } } },
      { time: "12:30 PM", who: "Ship center", title: "Answer \"where's my shipment?\"", text: "Order status and tracking from the ERP are on the account. Reply from the console in one step.", ease: "One click reply",
        ui: { type: "record", app: "Service", obj: "Order", name: "SO-88213", sub: "Valley Farm & Hardware", fields: [["Status", "Shipped"], ["ETA", "Thursday"], ["Carrier", "LTL freight"]] } },
      { time: "2:30 PM", who: "Service lead", title: "Turn the fix into knowledge", text: "A new fix becomes a draft article. The lead approves it, and every agent, and later the website, can use it.", ease: "Learn once, reuse forever",
        ui: { type: "doc", app: "Knowledge", file: "Draft: Pressure loss on 2-gal sprayers", fields: [["Audience", "Internal + public", 100], ["Steps", "4", 100], ["Approval", "Approved by lead", 100]] } },
      { time: "4:00 PM", who: "Automatic", title: "Close the loop", text: "A satisfaction survey goes out when the case closes, and marketing sees the history before replying to any online review.", ease: "Feedback without effort",
        ui: { type: "chart", app: "Service", h: "This week", legend: ["Cases closed", "CSAT"], bars: [["Mon", 60, 88], ["Tue", 72, 90], ["Wed", 65, 92], ["Thu", 80, 91]] } }
    ],
    quotes: [["\"We just use Outlook, email, and RingCentral. Those are the only two things that we have.\"", "Service lead, Chapin"], ["\"Yeah, it's all in one, which is very nice.\"", "Service lead, Chapin"]],
    outcomes: ["Fewer touches per case", "Faster close, measured with SLAs", "Registrations captured automatically", "Knowledge that grows"],
    scope: { now: ["Case types & queues", "RingCentral screen pop", "Omni-Channel routing", "Email- & web-to-case", "Product registrations", "Knowledge with approvals", "Dashboards"], later: ["Website agent for first-line questions", "Photo-based product ID", "Social-to-case"] }
  },
  {
    id: "slack", verb: "Connect", label: "Slack", kicker: "Slack", badge: "Proposed · not yet in scope",
    title: "When something needs a person, the right people see it in seconds.",
    intro: "Slack came up lightly in discovery, so this chapter is a proposal: how Slack could connect sales, service and the order center around Salesforce data. Per salesforce.com, Slack is included with every new Salesforce org.",
    before: ["Account updates travel by email and word of mouth", "Order and pricing exceptions wait for someone to notice", "Teams hand work off by forwarding"],
    after: ["Channels per key account with live Salesforce records", "Alerts for PO exceptions, stale deals and escalations", "Approvals with approve/reject buttons in the channel", "Update records by telling Slackbot in plain language"],
    steps: [
      { time: "9:16 AM", who: "Order center", title: "An exception lands in the channel", text: "Instead of an email chain, the order center channel gets one clear message with the customer, the order and what's missing.", ease: "Seen in seconds",
        ui: { type: "slack", channel: "#order-exceptions", msgs: [["Salesforce", "PO 4471 from Valley Farm & Hardware is missing a ship-to. 41 lines, $ — value.", "View order"]] } },
      { time: "9:20 AM", who: "Field rep", title: "Resolve it in the thread", text: "The rep who knows the account answers in the thread, and the order continues to the ERP.", ease: "No email chain",
        ui: { type: "slack", channel: "#order-exceptions", msgs: [["Salesforce", "PO 4471 is missing a ship-to.", ""], ["Field rep", "Ship to their North warehouse.", ""], ["Salesforce", "Updated. Order SO-88240 released.", ""]] } },
      { time: "11:00 AM", who: "Sales manager", title: "Approve without logging in", text: "A price exception posts with approve and reject buttons. The manager decides from their phone.", ease: "Approve in one tap",
        ui: { type: "slack", channel: "Approvals", msgs: [["Salesforce", "Price exception: Valley Farm line review, 3% off TurfPro. Requested by field rep.", "Approve|Reject"]] } },
      { time: "2:00 PM", who: "Field rep", title: "Update the record in plain language", text: "Tell Slackbot what changed. It confirms before saving, and admins control what it can edit.", ease: "Say it, confirm it",
        ui: { type: "slack", channel: "Slackbot", msgs: [["Field rep", "Move the Valley Farm line review to Closed Won", ""], ["Slackbot", "Update stage to Closed Won? Amount and close date stay the same.", "Confirm"]] } }
    ],
    quotes: [],
    outcomes: ["Fewer email hand-offs", "Exceptions fixed faster", "One place per account", "Data where people already work"],
    scope: { now: ["To be scoped with your team"], later: ["Account channels", "Order-exception alerts", "Approvals in Slack", "Slack Connect with rep agencies"] }
  },
  {
    id: "premier", verb: "Succeed", label: "Premier & Acquis", kicker: "Premier Success + Acquis implementation",
    title: "Acquis builds it with you. Premier Success keeps it growing.",
    intro: "Acquis, your implementation partner, designs, builds and launches Chapin's Salesforce in about 13 weeks, then supports the first weeks live. Salesforce's Premier Success Plan starts at signature and stays for the life of the subscription.",
    before: ["Several big initiatives at once: ERP cloud move, data platform, PIM/DAM", "Worry about adoption after the project team leaves", "Past experience of buying one thing and receiving another", "No in-house Salesforce admin yet"],
    after: ["An Acquis team building with your champions, with a demo every week", "Premier onboarding and a Personalized Success Path", "Unlimited 1-to-1 Expert Coaching and health checks", "24/7 support, 1-hour response for business-stopping issues"],
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
    steps: [
      { time: "Signature", who: "Acquis + Salesforce", title: "Kickoff and Premier onboarding", text: "Acquis kicks off within one to two weeks. Premier onboarding lines up your goals with the platform from day one.", ease: "Two teams from day one", ui: { type: "timeline", active: 0 } },
      { time: "Weeks 1-3", who: "Acquis + champions", title: "Design it with the people who'll use it", text: "About seven sessions. Your champions help shape the design, so it matches how Chapin actually works.", ease: "Built around your process", ui: { type: "timeline", active: 1 } },
      { time: "Weeks 4-9", who: "Acquis", title: "Build in weekly sprints", text: "A demo every week, about an hour of your time. Premier Expert Coaching can gut-check decisions along the way.", ease: "No surprises at go-live", ui: { type: "timeline", active: 2 } },
      { time: "Go-live", who: "Acquis", title: "Weekend cutover", text: "Sandbox to production over a weekend. On Monday, teams log in to a system they've already watched being built.", ease: "Monday feels familiar", ui: { type: "timeline", active: 3 } },
      { time: "Weeks 1-2 live", who: "Acquis + Premier", title: "Hypercare", text: "Close, hands-on support from Acquis while habits form, with Premier technical support 24/7 for anything urgent.", ease: "Help within the hour", ui: { type: "timeline", active: 4 } },
      { time: "Month 3+", who: "Premier", title: "Health check, then phase two", text: "An expert reviews adoption and data quality, then you plan what's next: quoting, rebates, portals or Slack.", ease: "Grow at your pace", ui: { type: "timeline", active: 5 } }
    ],
    quotes: [["\"The adoption rate usually, when it's not part of a collective, ends up being pretty slim to none.\"", "Executive sponsor, Chapin"], ["\"I really appreciate it because it really does help... This is the journey along the way.\"", "Business lead, Chapin"]],
    outcomes: ["Adoption from day one", "A phased rollout you can digest", "Experts on call 24/7", "A clear path to phase two"],
    scope: { now: ["Acquis implementation", "Hypercare (about 2 weeks)", "Admin training & docs", "Premier Success Plan"], later: ["Acquis Evolve support hours", "Admin hiring support", "Signature Success Plan"] }
  }
];

const TIMELINE_NODES = ["Signature", "Design", "Build", "Go-live", "Hypercare", "Grow"];

/* 13-week plan, drawn as a Gantt chart. start/end are week numbers. */
const GANTT = {
  weeks: 15,
  rows: [
    { label: "Discover & design", who: "Acquis + Chapin champions", start: 1, end: 3, cls: "g1" },
    { label: "Build: 6 weekly sprints", who: "Acquis, demo every week", start: 4, end: 9, cls: "g2", ticks: 6 },
    { label: "Test & UAT", who: "Acquis, then Chapin users", start: 10, end: 11, cls: "g3" },
    { label: "Train", who: "Role-based, virtual", start: 12, end: 12, cls: "g4" },
    { label: "Go-live", who: "Weekend cutover", start: 13, end: 13, cls: "g5", milestone: true },
    { label: "Hypercare", who: "Acquis + Premier", start: 14, end: 15, cls: "g6" },
    { label: "Premier Success", who: "From signature, ongoing", start: 1, end: 15, cls: "g7", arrow: true }
  ],
  note: "Start one to two weeks after signature. A mid-to-late November start points to a February go-live, ahead of your busy season. Holidays may add a week."
};

const NEXT = [
  ["Confirm scope", "Walk through the statement of work and settle the open items: contacts import, ERP API access and account scope."],
  ["Align leadership", "Review the journey with your executive team and agree on the path forward."],
  ["Kick off", "Name your project lead, business leads and champions. Discovery starts one to two weeks after signature."],
  ["Stay close", "Weekly status meetings, plus an executive check-in every three to four weeks."]
];
