export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "pre"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type CaseStudy = {
  slug: "testmaker" | "promo-manager" | "refunds" | "arnxt" | "trustrent" | string;
  title: string;
  shortTitle: string;
  org: string;
  role: string;
  period: string;
  summary: string;
  link?: { label: string; href: string };
  pdfUrl?: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  blocks: Block[];
};

export const mockTestMakerCaseStudy: CaseStudy = {
    slug: "testmaker",
    title: "Grit x Grid Mock Test Maker — Timed Sectional Test Engine (0→1)",
    shortTitle: "Mock Test Maker",
    org: "Grit x Grid",
    role: "Product & Builder",
    period: "0→1 MVP · Live product",
    summary:
      "An interactive testing platform that transforms question documents into timed, sectional mock exams with automated scoring, question status tracking, and diagnostic action plans for what to fix next.",
    link: { label: "Visit gritxgrid-testmaker.vercel.app", href: "https://gritxgrid-testmaker.vercel.app/" },
    metrics: [
      { value: "0→1", label: "Shipped interactive MVP" },
      { value: "Live", label: "Deployed at gritxgrid-testmaker.vercel.app" },
      { value: "Automated", label: "Timed sectional test engine" },
    ],
    tags: ["0→1", "EdTech", "Test Engine", "Rapid MVP", "Product Systems"],
    blocks: [
      { type: "h2", text: "Problem Statement" },
      {
        type: "p",
        text: "Students and aspirants preparing for competitive exams often have access to practice question documents and question banks, but practicing in unstructured document formats fails to simulate the real exam environment. Static PDFs and docs lack sectional timing, question palette navigation, real-time pacing feedback, and automated diagnostics.",
      },
      {
        type: "p",
        text: "The core challenge was to build a zero-friction tool that turns static question material into an authentic, timed sectional mock test experience with deep question-by-question analytics—delivering next steps, not just a score.",
      },
      { type: "h2", text: "Product Vision & Core Features" },
      {
        type: "ul",
        items: [
          "Document to Mock Test Conversion: Ingest and organize questions into structured, sectional exams effortlessly.",
          "Authentic Exam Simulation: Real-time countdown timers, sectional transitions, question palette status (attempted, marked for review, unattempted), and auto-submission upon timer expiry.",
          "Diagnostic Post-Test Analysis: Beyond raw scores, candidates receive question-by-question timing breakdowns, accuracy metrics, and targeted action items on what concepts to review next.",
          "Frictionless Experience: Clean, responsive user interface optimized for fast loading and low latency during test execution.",
        ],
      },
      { type: "h2", text: "My Role & System Architecture" },
      {
        type: "p",
        text: "As the Product Creator and Builder, I conceptualized the product strategy, scoped the MVP, designed user workflows, and built the application end-to-end:",
      },
      {
        type: "ul",
        items: [
          "Defined core user personas, journeys, and test lifecycle states (Prep → Active Test → Review & Diagnostics).",
          "Engineered a deterministic state machine managing section timing, auto-save of responses, and edge cases like browser refreshes and interruptions.",
          "Designed clear, scannable data visualization for candidate performance and error analysis.",
          "Shipped and deployed the live product at gritxgrid-testmaker.vercel.app.",
        ],
      },
      { type: "h2", text: "Impact & Key Learnings" },
      {
        type: "ul",
        items: [
          "Delivered a functional 0→1 EdTech tool addressing a concrete candidate pain point.",
          "Created an intuitive bridge between static prep material and high-fidelity exam simulation.",
          "Built a foundation for expanding question ingestion intelligence and personalized revision workflows.",
        ],
      },
    ],
  };

export const cleverTapCaseStudy: CaseStudy = {
  slug: "clevertap-reconciliation",
  title: "CleverTap Profile & Charged Event Reconciliation via BigQuery",
  shortTitle: "CleverTap & Charged Event Reconciliation",
  org: "KPN Fresh",
  role: "Product Owner",
  period: "Omnichannel CRM & Lifecycle Integrity",
  summary:
    "Diagnosed and resolved historical migration gaps and live POS API dropouts between transactional store databases and CleverTap via BigQuery SQL—reconciling over 2M profiles, restoring 100% outlet code accuracy, and deploying a Dead Letter Queue and automated daily reconciliation guardrails.",
  metrics: [
    { value: "2M+", label: "User profiles reconciled & backfilled" },
    { value: "100%", label: "Outlet code & date accuracy restored" },
    { value: "Double digit", label: "Hyper-local engagement rebound" },
    { value: "<0.5%", label: "Automated daily delta alert threshold" },
  ],
  tags: [
    "BigQuery",
    "SQL",
    "CleverTap",
    "Charged Event",
    "Omnichannel CRM",
    "Data Reconciliation",
    "Retail Tech",
  ],
  blocks: [
    { type: "h2", text: "Context & Situation" },
    {
      type: "p",
      text: "At KPN Fresh, we relied heavily on CleverTap to trigger hyper-local lifecycle campaigns, behavioral nudges, and store-specific retention flows across our omnichannel retail base. In our architecture, we triggered CleverTap’s special system event—the Charged event—via server-side API whenever an online or offline purchase settled. Alongside logging transaction details, each Charged event payload updated critical user profile properties, specifically last_purchased_store (the outlet code). Crucially, for customers who shopped exclusively at physical stores, their initial CleverTap profile itself was created automatically upon the trigger of this first Charged event.",
    },
    { type: "h2", text: "The Discrepancy Spotted" },
    {
      type: "p",
      text: "During a campaign audit for geo-targeted store promotions, I noticed that our addressable store segments were severely underpopulated and conversion metrics were lagging. When I compared CleverTap’s user profile database against our actual transacting customers in the production database, the numbers did not add up across two distinct areas:",
    },
    {
      type: "ul",
      items: [
        "2024 Historical Migration Gaps: When we first signed the CleverTap contract and onboarded in 2024, the initial historical backfill was incomplete. A massive volume of legacy customer profiles was never uploaded, and many profiles that were uploaded had corrupted or shifted attributes—specifically wrong outlet codes and scrambled purchase dates due to inconsistent date/timestamp formatting during migration.",
        "Live Charged Event API Failures: At physical store counters, network latency and POS sync timeouts caused live Charged event API triggers to drop silently. For purely offline shoppers, this meant their profiles were never created in CleverTap at all. For existing users, API race conditions often logged the transaction but failed to update the last_purchased_store attribute, leaving profiles with stale or null store codes.",
      ],
    },
    { type: "h2", text: "Action Taken: The Fix" },
    {
      type: "p",
      text: "Rather than waiting on an overloaded core engineering sprint, I took hands-on ownership of diagnosing the data gap and reconciling the profiles myself:",
    },
    {
      type: "ul",
      items: [
        "1. Root Cause Analysis & Extraction in BigQuery: I queried our raw POS billing logs, historical customer tables, and online order databases in Google BigQuery to establish the ground truth. I wrote SQL scripts to isolate three cohorts: users completely missing from CleverTap since the 2024 onboarding, existing profiles with mismatched outlet codes/purchase dates, and offline transactions where a store purchase had no corresponding Charged event in CleverTap.",
        "2. Transforming & Scripting the Payload: Using BigQuery SQL, I unified the primary identity keys (mapping offline counter phone numbers with app profiles), standardized timestamp formats, and computed the true aggregated attributes directly from the master ledger—specifically the accurate last_purchased_store outlet code, true last_purchased_date, and lifetime order count.",
        "3. Manual Batch Reconciliation: To restore marketing operations immediately without waiting for a backend overhaul, I exported the cleaned, validated datasets into CleverTap-compliant schemas and executed scheduled manual CSV batch uploads via CleverTap’s profile upload tool, successfully creating the missing offline profiles and overwriting the corrupted 2024 historical outlet codes and dates.",
        "4. Permanent Guardrail: I worked with engineering to implement a retry queue (Dead Letter Queue) for failed POS Charged API calls and scheduled an automated daily BigQuery reconciliation script to flag any delta greater than 0.5% between daily store transactions and CleverTap Charged events.",
      ],
    },
    { type: "h2", text: "Result & Impact" },
    {
      type: "ul",
      items: [
        "Reconciled and backfilled over 2 million user profiles, capturing thousands of high-intent, purely offline store shoppers who were previously invisible to our CRM.",
        "Restored 100% data accuracy for last_purchased_store outlet codes and historical purchase dates, driving a double-digit rebound in hyper-local campaign engagement and store repeat visits.",
        "Eliminated silent data corruption by establishing an automated 0.5% tolerance daily alert and resilient Dead Letter Queue for live POS Charged events.",
      ],
    },
  ],
};

export const demandForecastingCaseStudy: CaseStudy = {
  slug: "demand-forecasting-replenishment",
  title: "Multi-Tier Demand Forecasting & Automated Store Replenishment Engine",
  shortTitle: "Store Replenishment Engine",
  org: "KPN Fresh",
  role: "Product Manager – Supply Chain & Inventory Systems",
  period: "Omnichannel Fresh Retail · 300+ Stores & 6 DCs",
  summary:
    "Architected a multi-tier demand forecasting and automated replenishment engine across 300+ retail stores and 6 regional DCs—bridging asynchronous legacy POS and WMS silos into a validated single source of truth, cutting WMAPE by 15.3%, reducing stockouts by 22%, and shrinking perishable wastage by 18%.",
  metrics: [
    { value: "15.3%", label: "Relative WMAPE error reduction" },
    { value: "22%", label: "Reduction in store stockouts" },
    { value: "18%", label: "Perishable shrink reduction" },
    { value: "<0.4%", label: "POS-to-ERP data discrepancy" },
  ],
  tags: [
    "Supply Chain",
    "Demand Forecasting",
    "Inventory Optimization",
    "LightGBM",
    "Odoo ERP",
    "Data Reconciliation",
  ],
  blocks: [
    { type: "h2", text: "1. Executive Summary & Context" },
    {
      type: "p",
      text: "KPN Fresh manages daily deliveries of high-velocity fresh produce and packaged groceries across 300+ retail stores from 6 regional Collection Centers and Distribution Centers (CC/DC). The core operational bottleneck was not merely forecasting accuracy, but a disconnected, legacy systems architecture:",
    },
    {
      type: "ul",
      items: [
        "Asynchronous Legacy Tech Stack: The in-store POS ran on a legacy, locally installed desktop client with no direct websocket or real-time event pipeline to the central database. Store transactions were synced via delayed, end-of-day batch cron jobs.",
        "Disconnected DC WMS: The Warehouse Management System (WMS) operated as a separate operational silo, meaning inventory allocations, physical stock in bins, and transit dispatches lagged behind ERP records by 6 to 12 hours.",
        "Ghost Inventory & The 'Phantom Stockout' Loop: Central planning operated on stale inventory snapshots. If POS sync failed or delayed, the central ERP assumed stock was still on shelves, halting replenishments and triggering severe stockouts. Conversely, if a stockout occurred mid-day, the legacy moving-average model logged zero sales, misinterpreted it as lack of customer interest, and permanently suppressed future replenishment.",
      ],
    },
    {
      type: "p",
      text: "As PM, I owned the product vision and delivery across two critical tracks: (1) Designing the Data Reconciliation Bridges & Ingestion Pipelines to harmonize asynchronous POS and WMS events into a validated, near-real-time single source of truth; and (2) Architecting the Demand Forecasting & Replenishment Logic Engine that translated segmented demand signals (ABC/Velocity matrices, ROS, DOH) into automated internal transfer orders within Odoo ERP.",
    },
    { type: "h2", text: "2. The Foundation: Data Reconciliation Bridges" },
    {
      type: "p",
      text: "Because the legacy POS and WMS could not talk directly or in real time to the central database, I scoped and drove the engineering of two critical data reconciliation bridges:",
    },
    {
      type: "pre",
      text: ` ┌───────────────────────┐                    ┌─────────────────────────┐
 │   Legacy Store POS    │                    │     DC Warehouse WMS    │
 │ (On-premise / Offline)│                    │ (On-premise / Disconnect│
 └──────────┬────────────┘                    └────────────┬────────────┘
            │ Batch EOD / 30-min                         │ Milestone Batches
            │ Encrypted CSV/JSON Drops                   │ (Wave, Dispatch, ASN)
            ▼                                            ▼
 ┌──────────────────────────────────────────────────────────────────────┐
 │                DATA RECONCILIATION & VALIDATION BRIDGE               │
 │                                                                      │
 │  1. Polling & SFTP Ingestion Engine (Change-Data-Capture / Batches)  │
 │  2. State Reconciliation & Deduplication Worker:                     │
 │     • Reconciles POS Receipts vs. Payment Gateway Settlement Logs    │
 │     • Resolves WMS Pick/Pack Delays vs. DC Gate Outward Passes       │
 │  3. Ghost Inventory Sanitizer:                                       │
 │     • Recomputes Virtual "Effective Stock" per Store                 │
 │     • Adjusts for in-transit delta, un-synced POS sales, & returns   │
 └──────────────────────────────────┬───────────────────────────────────┘
                                    │ Clean, Validated Inventory
                                    ▼ & Demand Tables
                 ┌─────────────────────────────────────┐
                 │  Central Data Warehouse (BigQuery)  │
                 │   & Central ERP (Odoo Database)     │
                 └─────────────────────────────────────┘`,
    },
    { type: "h3", text: "The PM Architectural Interventions" },
    {
      type: "ul",
      items: [
        "POS-to-DB Delta Sync & Micro-Batching: Replaced once-a-day bulk FTP dumps with an automated 30-minute lightweight change-data-capture (CDC) agent running locally on store POS terminals. The agent polled local SQLite/DB tables and pushed compressed delta batches to our ingestion API whenever network connectivity was active.",
        "Dual-Audit Reconciliation Engine: Built an automated reconciliation script bridging POS line-item dumps against UPI/credit card payment gateway settlement logs and cash drop reports. If POS offline sync stalled, the engine estimated store velocity from payment gateway ping volumes to prevent 'ghost stock' false positives.",
        "WMS Milestone Handshake: Designed an intermediate webhook/API staging layer. The DC WMS pushed milestone events: Wave_Created, Picking_Completed, Dispatched_ASN, and Gate_Pass_Issued. This eliminated the 12-hour blind spot where inventory had physically left the DC rack but wasn't yet acknowledged as 'In-Transit' by Odoo, preventing the engine from double-ordering identical stock.",
      ],
    },
    { type: "h3", text: "Effective Stock Ledger Formula" },
    {
      type: "p",
      text: "Created an operational inventory state formula calculated prior to running any replenishment cycle:",
    },
    {
      type: "pre",
      text: "Effective Stock = (Physical Store On-Hand - Un-synced POS Sales) + (In-Transit Dispatched DC Stock) - (Approved Customer Returns / Damaged Write-offs)",
    },
    { type: "h2", text: "3. Inventory Segmentation & Replenishment Parameter Logic" },
    {
      type: "p",
      text: "Fresh retail cannot apply a blanket replenishment policy. Leafy vegetables spoil within 24–48 hours, while packaged staples have a 6-month shelf life. I instituted an ABC & Velocity Segmentation Matrix:",
    },
    { type: "h3", text: "A. The ABC & Velocity Classification Matrix" },
    {
      type: "ul",
      items: [
        "Class A – High Velocity (Perishables / Top Produce): Tomatoes, onions, potatoes, milk, leafy greens. High volume, high perishability, zero margin for stockouts. Review frequency: Daily replenishment, tight DOH limits, and dynamic safety stocks based on day-of-week demand variance.",
        "Class B – Medium Velocity (Dairy, Fresh Bakery, Chilled Goods): Paneer, curd, bread, packaged deli. 3 to 7-day shelf life. Review frequency: Every 48 hours with strict shelf-life capping to prevent write-offs.",
        "Class C – Low Velocity / High Tail (Spices, Sauces, Staples, Non-Perishables): Ghee, olive oil, spices, specialty snacks. Long shelf-life, sporadic/intermittent demand. Review frequency: Weekly replenishment governed strictly by Min-Max thresholds and case-pack constraints rather than complex ML time-series.",
      ],
    },
    { type: "h3", text: "B. Core Operational Levers Defined (Formulas & Rules)" },
    {
      type: "p",
      text: "Rate of Sale (ROS) — Unit velocity per active store day:",
    },
    {
      type: "pre",
      text: "ROS = (Total Units Sold over Window N) / (Active In-Stock Operating Days)",
    },
    {
      type: "p",
      text: "I enforced that the denominator strictly excluded stockout hours/days to prevent downward rate bias caused by historical stockouts.",
    },
    {
      type: "p",
      text: "Days on Hand (DOH) — Current buffer depth:",
    },
    {
      type: "pre",
      text: "DOH = Effective Stock / ROS\nTarget DOH: Class A Produce = 1.2 to 1.5 Days | Class B = 3 to 4 Days | Class C = 12 to 15 Days",
    },
    {
      type: "p",
      text: "Dynamic Safety Stock (SS) — Moving away from static buffer quantities to a statistically grounded buffer:",
    },
    {
      type: "pre",
      text: "SS = Z × sqrt(L × σ_D² + ROS² × σ_L²)",
    },
    {
      type: "ul",
      items: [
        "Z = Service level factor (1.96 for Class A items targeting 97.5% availability; 1.44 for Class C items targeting 87.5%).",
        "L = Replenishment lead time (DC dispatch cutoff to store shelf staging).",
        "σ_D = Standard deviation of daily store demand (derived from the ML forecast residual).",
        "σ_L = Variance in WMS packing and logistics trip delivery time.",
      ],
    },
    { type: "h2", text: "4. End-to-End System Integration Flow" },
    {
      type: "pre",
      text: `  [Reconciled Data Layer] (Cleaned POS Sales + Physical WMS Stock Milestones)
             │
             ▼
  [ML Demand Engine (LightGBM)] 
             │  ↳ Generates SKU × Store 3-day gross forecast
             │  ↳ Uncensored demand correction on zero-sales days
             ▼
  [Replenishment Logic Service]
             │  ↳ Evaluates ABC Tier, ROS, and current DOH vs. Target DOH
             │  ↳ Calculates Dynamic Safety Stock (SS)
             │  ↳ Computes: Net Need = Max(0, [Forecast + SS] - [On-Hand + In-Transit])
             │  ↳ Clamping: Case pack inner-units + Store shelf facing limits
             ▼
  [Odoo ERP System]
             │  ↳ API Trigger (Daily 04:00 AM)
             │  ↳ Creates: Internal Transfer Orders (Stock Picking: DC/Stock ➔ Store/Stock)
             │  ↳ Surfaces high-variance alerts on Exception Dashboard
             ▼
  [WMS Execution]
             │  ↳ Pulls validated Transfer Orders from Odoo
             │  ↳ Generates picking waves & crate packing for store routes
             ▼
  [Store Delivery & Barcode Scan]
             ↳ GRN logged in Odoo ➔ Ledger reconciles ➔ Complete closed loop`,
    },
    { type: "h2", text: "5. Proving the 15% Improvement: Mathematical Validation" },
    { type: "h3", text: "A. The Evaluation Metric: WMAPE" },
    {
      type: "p",
      text: "Standard MAPE fails in retail because a store frequently sells 0 units of a specific SKU on a given day (causing division by zero errors) and over-indexes on slow-moving tail SKUs. We selected Weighted Mean Absolute Percentage Error (WMAPE):",
    },
    {
      type: "pre",
      text: "WMAPE = (Σ |Actual_i - Forecast_i|) / (Σ Actual_i) × 100%",
    },
    { type: "h3", text: "B. The Mathematical Proof" },
    {
      type: "ul",
      items: [
        "Validation Setup: 8-week out-of-time backtest across top 500 SKUs covering ~80% of aggregate store GMV across 50 pilot stores.",
        "Baseline (Legacy Heuristic): A 7-day rolling moving average calculated on raw POS sales data yielded an average WMAPE of 33.4% (compounded by un-reconciled POS data dropping syncs).",
        "New Pipeline (Reconciled Data + LightGBM Engine): The ML engine (factoring in promotional calendars, corrected stockout censoring, and reconciled stock buffers) brought error down to 28.3% WMAPE.",
        "Relative Improvement: (33.4% - 28.3%) / 33.4% = 15.3% relative reduction in forecast error.",
      ],
    },
    { type: "h2", text: "6. PM Execution & Operational Problem-Solving" },
    {
      type: "ul",
      items: [
        "The Problem of Store Over-Ordering: Before this system, store managers manually requested inflated quantities because they anticipated that the DC would cut their orders by 30% due to warehouse stock shortages. PM Solution: Shifted ordering ownership away from store managers to an automated push model governed by DOH thresholds. Built a store-facing view showing incoming ASN tracking and guaranteed delivery allocations, ending the artificial order-inflation cycle.",
        "Managing Intermittent Demand for Class C Items: Complex ML models tended to over-predict sporadic purchases of slow-moving items (e.g., imported gourmet sauces), ballooning store backroom inventory. PM Solution: Built a dual-engine router. Class A and B items were handled via the multi-variate LightGBM model; Class C items bypassed the ML engine and were governed by a deterministic, dynamic (s, S) Min-Max inventory replenishment policy.",
      ],
    },
    { type: "h2", text: "7. Business Impact & Measurable Outcomes" },
    {
      type: "ul",
      items: [
        "15.3% Relative Improvement in Forecast Accuracy: Cut replenishment WMAPE from 33.4% to 28.3% across the network.",
        "22% Reduction in Out-of-Stock (OOS) Incidents: High-velocity Class A fresh produce availability jumped from 85.8% to 88.9%, unlocking immediate same-store sales growth.",
        "18% Reduction in Perishable Shrink / Spoilage: Aligning daily transfer orders to true POS Rate-of-Sale (ROS) prevented over-stuffing store shelves, reducing fresh produce dump and wastage.",
        "Reconciliation Integrity: Reduced POS-to-ERP data discrepancy rates from ~8.5% of daily transactions to < 0.4%, creating a clean, auditable inventory ledger.",
      ],
    },
  ],
};

export const lastMileEtaCaseStudy: CaseStudy = {
  slug: "last-mile-eta-engine",
  title: "Last-Mile Fulfillment, Order Tracking & Real-Time ETA Engine",
  shortTitle: "Last-Mile Tracking & ETA Engine",
  org: "KPN Fresh",
  role: "Product Manager — Mobile App & Store Control Tower",
  period: "Flagship B2C Mobile App & Dark Store Logistics",
  summary:
    "Architected a real-time order tracking and predictive ETA engine for KPN Fresh's micro-fulfillment dark stores—introducing a 'Friction-by-Design' Chevron UX that slashed Google Maps API costs by >85%, decoupling warehouse packed ETA from last-mile transit ML models (LightGBM), reducing WISMO customer support tickets by >70%, and cutting delivery delay rates from 40% to <15%.",
  metrics: [
    { value: ">70%", label: "WISMO support calls deflected" },
    { value: "40% → <15%", label: "Fulfillment delay rate drop" },
    { value: ">85%", label: "Google Maps API cost saved" },
    { value: "+22%", label: "30-Day customer retention increase" },
  ],
  tags: [
    "Last-Mile Delivery",
    "ETA Engine",
    "LightGBM",
    "Friction-by-Design",
    "Dark Store Logistics",
    "Unit Economics",
    "System Architecture",
  ],
  blocks: [
    { type: "h2", text: "1. Executive Summary & Problem Discovery" },
    { type: "h3", text: "Context & Operational Reality" },
    {
      type: "p",
      text: "KPN Fresh operates a high-velocity, micro-fulfillment dark store model designed to deliver fresh produce and grocery essentials on-demand. Despite rapid catalog growth, customer retention was heavily bottlenecked by post-purchase operational opacity.",
    },
    {
      type: "pre",
      text: `+------------------+      +-------------------+      +--------------------+
|  Order Placed    | ---> |  Blackout Window  | ---> |  Order Delivered   |
| (SMS #1 Received)|      | (Zero Visibility) |      | (SMS #2 Received)  |
+------------------+      +-------------------+      +--------------------+`,
    },
    { type: "h3", text: "The Tracking Blackout" },
    {
      type: "p",
      text: "Prior to this initiative, order lifecycle communication relied entirely on two asynchronous, static transactional SMS messages: 'Order Placed' and 'Order Delivered'. The mobile application lacked a dynamic order status interface, real-time map rendering, or automated status updates.",
    },
    { type: "h3", text: "Voice of Customer (VoC) & Play Store Diagnostic" },
    {
      type: "p",
      text: "An audit of Play Store reviews and Customer Care (CC) support logs revealed that Where Is My Order (WISMO) inquiries constituted the single largest source of customer friction:",
    },
    {
      type: "ul",
      items: [
        "Primary Dissatisfaction Driver: WISMO queries accounted for over 68% of total inbound customer support volume.",
        "Core User Persona Intent: In-depth customer interviews indicated that users relied on the app primarily for time-sensitive convenience (e.g., immediate meal preparation). When physical store visits were inconvenient, any operational opacity generated significant anxiety.",
        "The 40% Delay Problem: 40% of total fulfilled orders suffered severe delays, taking between 2 to 3+ hours to reach destinations situated within a tight 2 to 3 km radius from the micro-fulfillment hub.",
      ],
    },
    { type: "h3", text: "Business Consequences & Economics" },
    {
      type: "ul",
      items: [
        "Escalating Churn: Customer lifetime value (LTV) dropped due to low 30-day retention among first-time buyers experiencing silent delays.",
        "Financial Losses: Order cancellations surged by 18% mid-fulfillment, leading to inventory write-offs on perishable produce and mounting refund claims that eroded gross margins.",
        "Support Overhead: Escalating Customer Care Turnaround Time (TAT) dramatically increased per-ticket support resolution costs.",
        "Market Benchmarking: Quick-commerce benchmarks (Swiggy Instamart, Zepto) conditioned consumers to expect immediate visual confirmation, granular lifecycle stage updates, and precise arrival countdowns without contacting support agents.",
      ],
    },
    { type: "h2", text: "2. Product Strategy & UX Architecture: 'Friction-by-Design' for Cost Optimization" },
    { type: "h3", text: "The Google Maps API Cost Blocker" },
    {
      type: "p",
      text: "While replicating a continuous live-map tracking screen was initially considered, engineering and financial evaluations highlighted a major unit economics challenge: continuous client-side polling and map re-rendering quickly consumed significant API call volumes. At high daily order concurrency, maintaining active Google Maps sessions drained per-order contribution margins. Alternative providers (OpenStreetMap, OLA Maps) suffered high render latency, inconsistent local geofencing, and poor road routing in dense micro-neighborhoods.",
    },
    {
      type: "pre",
      text: `+----------------------------------------------------------------------------------+
|                              MAP COST BREAKDOWN                                  |
| Continuous Polling  -->  Google Maps JavaScript / Directions SDK  --> High Costs |
| Dynamic Polylines   -->  Distance Matrix & Geocoding APIs         --> Margin Loss|
+----------------------------------------------------------------------------------+`,
    },
    { type: "h3", text: "Behavioral Discovery: Time Intent vs. Map Intent" },
    {
      type: "p",
      text: "Through session recordings and tracking telemetry, we analyzed post-purchase behavior and discovered a critical split in user intent:",
    },
    {
      type: "pre",
      text: `                                  USER INTENT DISTRIBUTION   
   +------------------------------------------------------------------------------------+   
   | [=========================================>] 82% Time-Intent (ETA Countdown Only)   |   
   | [=======>] 18% Map-Intent (Route Inspection & Rider Tracking)                      |   
   +------------------------------------------------------------------------------------+`,
    },
    {
      type: "ul",
      items: [
        "82% of Tracking Sessions were Time-Intent Only: Customers primarily opened the app to answer one question: 'When will my groceries arrive?'",
        "18% of Sessions were Map-Intent: Users only expanded or inspected a map when an order was severely overdue, when a rider remained stationary for extended periods, or when direct calls to the rider went unanswered.",
      ],
    },
    { type: "h3", text: "The Chevron UI Architecture" },
    {
      type: "p",
      text: "To optimize operational costs without sacrificing user experience, we designed a 'Friction-by-Design' Chevron UI bottom drawer:",
    },
    {
      type: "pre",
      text: `+----------------------------------------------------------------------------------+
|                                CHEVRON UI SCREEN                                 |
+----------------------------------------------------------------------------------+
|                                                                                  |
|                        [ Map View Hidden by Default ]                            |
|                     (Zero Google Maps API Consumption)                           |
|                                                                                  |
+----------------------------------------------------------------------------------+
| ^  ARRIVING IN 14 MINS                                                           |
| -- Order Packed -------o------------------------ Dispatched                      |
| [Pull Up for Live Route Map]                                                     |
+----------------------------------------------------------------------------------+`,
    },
    {
      type: "ul",
      items: [
        "Default Collapsed State: Displays a lightweight dynamic progress bar alongside a real-time predictive ETA countdown. Zero Google Maps SDK instances or directions endpoints are initialized in this state, incurring $0 in mapping API costs.",
        "Explicit Opt-in Expansion: The interactive Google Map canvas renders dynamically only when a user explicitly taps or drags the Chevron drawer upward to view live route polylines and rider markers.",
      ],
    },
    { type: "h3", text: "Post-Order Sticky ETA Home Widget" },
    {
      type: "p",
      text: "To further deflect unnecessary navigation to the dedicated order tracking screen, we introduced an active persistent Sticky ETA Widget on the application home screen:",
    },
    {
      type: "pre",
      text: `+----------------------------------------------------------------------------------+
|                              HOME SCREEN TOP BAR                                 |
+----------------------------------------------------------------------------------+
| +------------------------------------------------------------------------------+ |
| |  LIVE ORDER: Packing Fresh Produce  |  Arriving in 16 Mins           [View]  | |
| +------------------------------------------------------------------------------+ |
|                                                                                  |
|  [ Banner Carousel ]             [ Category Grid ]          [ Express Offers ]   |
+----------------------------------------------------------------------------------+`,
    },
    {
      type: "p",
      text: "When an active order is in flight, launching the app immediately surfaces the live arrival countdown and current processing status directly within the top header. This persistent status bar resolved immediate customer inquiry on launch, preventing over 60% of users from ever opening the primary tracking screen or triggering mapping API calls.",
    },
    { type: "h2", text: "3. Product Specification (PRD), State Machine & Systems Architecture" },
    { type: "h3", text: "Functional Requirements & Lifecycle State Machine" },
    {
      type: "pre",
      text: `+---------------+      +---------------+      +---------------+      +---------------+
|  ORDER PLACED | ---> |  ORDER PACKED | ---> |  ON THE WAY   | ---> |   DELIVERED   |
+---------------+      +---------------+      +---------------+      +---------------+`,
    },
    {
      type: "ul",
      items: [
        "Ingestion & Payment → Customer State: Order Placed | Trigger: Payment Gateway Callback | Surfaces: Sticky Widget, Order Detail, Push.",
        "Picking & Assembly → Customer State: Order Placed (Packing) | Trigger: Dark Store Handheld Terminal | Surfaces: Sticky Widget, Order Detail.",
        "QC & Bagging → Customer State: Order Packed | Trigger: Store Scanner Verification | Surfaces: Sticky Widget, Order Detail, Push.",
        "Rider Handover → Customer State: On the Way | Trigger: Rider App QR Scan | Surfaces: Sticky Widget, Order Detail (Map Opt-in).",
        "Geo-Fenced Arrival → Customer State: On the Way (Near Doorstep) | Trigger: Rider GPS (<50m radius) | Surfaces: Sticky Widget, Proactive Push.",
        "POD Sign-off → Customer State: Delivered | Trigger: Customer OTP / Rider Confirmation | Surfaces: Home Screen Reset, Push Notification.",
      ],
    },
    { type: "h3", text: "Decoupled Operational ETA Architecture" },
    {
      type: "p",
      text: "Predicting delivery arrival times using a single end-to-end Machine Learning model often produces unreliable results because warehouse processing times and street transit are governed by entirely different external variables:",
    },
    {
      type: "pre",
      text: `                        DECOUPLED ETA CALCULATION PIPELINE                         
+----------------------------------+      +----------------------------------+ 
|        IN-STORE PACKED ETA       |      |       TRANSIT LAST-MILE ETA      | 
|  * Active dark store queue volume|      |  * Historical road segment speeds| 
|  * Item SKU count & total weight |  +   |  * Live rider dispatch latency   | 
|  * Real-time picker speed matrix |      |  * Micro-weather & traffic delays| 
+----------------------------------+      +----------------------------------+ 
                                   |                                    
                                   v 
+----------------------------------------------------------------------------+ 
|                       TOTAL DYNAMIC PREDICTED ETA                          | 
+----------------------------------------------------------------------------+`,
    },
    {
      type: "ul",
      items: [
        "In-Store / Packed ETA Model: Predicts warehouse queue times, picking duration, and Quality Check (QC) verification speed based on real-time store order volume, SKU complexity, and active picker availability.",
        "Transit / Last-Mile ETA Model: Predicts rider allocation delay, travel time, and doorstep handoff duration using road routing distances, rider historical speed profiles, and hyper-local traffic conditions.",
      ],
    },
    { type: "h3", text: "Non-Functional Requirements (NFRs) & System Resilience" },
    {
      type: "pre",
      text: `                                SYSTEM TIMEOUT & FALLBACK                                  
Client App Request ---> [ ML Inference Engine ] --- Timeout >500ms ---> [ Deterministic Fallback ]
                                                                               |                  
UI Renders Seamlessly <--------------------------------------------------------+`,
    },
    {
      type: "ul",
      items: [
        "Inference Latency SLA: P95 API response times maintained strictly under 150ms for ETA inference payloads to keep the mobile interface instantaneous and responsive.",
        "Graceful Degradation Logic: If the machine learning inference microservice takes longer than 500ms, the system silently falls back to a deterministic, matrix-based lookup table driven by item volume and direct route distance heuristics, ensuring the UI never freezes or throws error states.",
        "Webhook Resilience & Rate-Limiting: Deployed a high-throughput Redis/PubSub queue with exponential backoff and rate-limiting safeguards to ingest high volumes of rider assignment events without dropping messages during peak demand spikes.",
      ],
    },
    { type: "h2", text: "4. Operational Bottlenecks, Data Engineering & Feature Scoping" },
    { type: "h3", text: "Operational Reality & Initial Data Gaps" },
    {
      type: "p",
      text: "On-ground audits of dark store operations revealed several critical data logging gaps that initially limited predictive modeling:",
    },
    {
      type: "ul",
      items: [
        "Bundled Timestamping: Picking, QC verification, and bagging activities were initially grouped under a single scan event, obscuring granular operational bottlenecks.",
        "Unindexed Logs: Rider reassignments and order rejections were stored in unstructured log files without indexed database records.",
        "Missing Contextual Data: Legacy systems did not record external factors such as local weather, road construction, or regional holiday trading spikes.",
      ],
    },
    { type: "h3", text: "Feature Parameter Matrix Reduction (108 → 65 Variables)" },
    {
      type: "p",
      text: "We identified 108 operational and environmental variables across dark store operations, competitor benchmarks, and delivery logs. Working closely with engineering teams, we prioritized these signals down to a high-performing production set of 65 features:",
    },
    {
      type: "pre",
      text: `+-----------------------------------------------------------------------------------+
|                        108 CANDIDATE FEATURE VARIABLES                            |
+-----------------------------------------------------------------------------------+
                                         |                                         
                                         v  [ Filtered by Signal & Data Feasibility ]
+-----------------------------------------------------------------------------------+
|                           65 PRODUCTION FEATURE SET                               |
|                                                                                   |
|  * Store Congestion    * SKU Diversity    * Temporal Signals   * Rider Profiles   |
|  * Active Batch Count  * Weight Matrix    * Regional Calendars * Routing Telemetry|
+-----------------------------------------------------------------------------------+`,
    },
    { type: "h3", text: "Hands-On Data Engineering Pipeline" },
    {
      type: "p",
      text: "To accelerate deployment without waiting for a dedicated data science pod, the product team directly led end-to-end data preparation and model prototyping:",
    },
    {
      type: "pre",
      text: `+------------------+      +-------------------+      +--------------------+
| BigQuery SQL     | ---> | Kaggle Prototype  | ---> | LightGBM Model     |
| Data Pipelines   |      | Notebook Pipelines|      | Hyperparameter Tune|
+------------------+      +-------------------+      +--------------------+`,
    },
    {
      type: "ul",
      items: [
        "SQL Pipeline Development: Authored multi-table BigQuery extraction scripts merging historical records across warehouse management, order processing, and rider dispatch systems, enriched with localized calendar metadata.",
        "Event Logging via Webhooks: Built ingestion scripts to capture rider allocation attempts, accepted deliveries, and doorstep arrivals into structured database tables.",
        "Data Cleaning & Training Pipelines: Extracted 12 months of fulfillment logs from a high-volume pilot store. Handled missing entries, normalized operational outliers, and applied temporal cross-validation splits (70% train / 30% test).",
        "Model Architecture Selection: Trained a LightGBM gradient-boosting regressor, selected for its ultra-fast inference speeds, low memory footprint, and strong performance on tabular operational datasets.",
      ],
    },
    { type: "h2", text: "5. Deployment, Operations Control Tower & Change Management" },
    { type: "h3", text: "Production API Contract & Service Interface" },
    {
      type: "p",
      text: "We established a standardized, low-latency API contract between client applications and the predictive inference service. The interface ingests real-time order payloads (item count, total weight, perishable/chilled SKU categorizations), current dark store queue volume, active picker capacity, and customer destination coordinates, returning decoupled packed and transit estimates within strict sub-150ms latency SLAs.",
    },
    { type: "h3", text: "Predictive Operations Control Tower Integration" },
    {
      type: "p",
      text: "We upgraded the internal Operations Control Tower from a reactive reporting dashboard into a proactive real-time management tool:",
    },
    {
      type: "pre",
      text: `+----------------------------------------------------------------------------------+
|                        OPERATIONS CONTROL TOWER DASHBOARD                        |
+----------------------------------------------------------------------------------+
| STORE: STR-042 (Central Hub)                  ACTIVE ORDERS IN FLIGHT: 38        |
+----------------------------------------------------------------------------------+
| ORDER ID     | ITEMS | PACK ETA   | TRANSIT ETA | SLA STATUS | PREDICTIVE ACTION  |
+--------------+-------+------------+-------------+------------+-------------------+
| ORD-88912    |  14   | 8 Mins     | 12 Mins     | [ ON-TIME ]| Standard Queue    |
| ORD-88919    |   6   | 4 Mins     | 10 Mins     | [ ON-TIME ]| Standard Queue    |
| ORD-88924    |  22   | 16 Mins    | 15 Mins     | [ AT RISK ]| Reassign Picker 2 |
| ORD-88931    |   4   | 12 Mins    | 14 Mins     | [ BREACH ] | Expedite Packing  |
+----------------------------------------------------------------------------------+`,
    },
    {
      type: "ul",
      items: [
        "Early SLA Breach Detection: The Control Tower continuously computes live predictions for both packed and transit stages. Orders at risk of exceeding promised delivery windows are flagged in amber or red 15 minutes before an SLA breach occurs.",
        "Dynamic Resource Allocation: Store managers receive real-time operational alerts, prompting them to reallocate staff from restock workflows to busy packing tables during sudden demand surges.",
      ],
    },
    { type: "h3", text: "Rollout Strategy & Change Management" },
    {
      type: "pre",
      text: `+-------------------+      +-------------------+      +--------------------+
| 1 Pilot Dark Store| ---> | 5 Regional Stores | ---> | Network-Wide       |
| (Baseline Tuning) |      | (Canary Phase)    |      | Production Rollout |
+-------------------+      +-------------------+      +--------------------+`,
    },
    {
      type: "ul",
      items: [
        "Phased Rollout: Tested initial model performance at a single high-volume pilot hub before rolling out across 5 additional micro-fulfillment stores.",
        "On-Ground Enablement: Conducted hands-on training sessions with warehouse supervisors and picking staff, building team trust in algorithmic batch dispatch recommendations over legacy manual estimation methods.",
      ],
    },
    { type: "h2", text: "6. Business Impact & Measurable Outcomes" },
    {
      type: "pre",
      text: `                                  KEY IMPACT METRICS   
   +------------------------------------------------------------------------------------+   
   | WISMO Support Calls  | [=========================>] Reduced by >70%                |   
   | Fulfillment Delays   | [==============>] Dropped from 40% to <15%                 |   
   | Google Maps API Cost | [===========================>] Reduced by >85% / Session   |   
   +------------------------------------------------------------------------------------+`,
    },
    {
      type: "ul",
      items: [
        "Last-Mile ETA Model Accuracy: Reached 70% accuracy measured within a strict ±3-minute target tolerance window (up from non-predictive static heuristics).",
        "Packed ETA Model Accuracy: Reached 55% accuracy within a ±2-minute tolerance window across dark store packing lines.",
        "Customer Support (WISMO) Volume: Dropped from 68% of inbound tickets to <18% (>70% deflection), significantly lowering support operations overhead.",
        "Order Fulfillment Delay Rate: Dropped from 40% of total orders to <15%, drastically reducing order cancellations and perishable write-offs.",
        "Google Maps Infrastructure Cost: Slashed mapping expenses by >85% per tracking session via the Chevron 'Friction-by-Design' pattern.",
        "30-Day Customer Retention: Boosted 30-day repeat purchase retention by +22% due to consistent post-purchase transparency and dependable ETAs.",
      ],
    },
  ],
};

export const omnichannelDataFoundationCaseStudy: CaseStudy = {
  slug: "omnichannel-data-foundation",
  title: "Omnichannel Data Foundation & Reconciliation Engine",
  shortTitle: "Omnichannel Data Foundation",
  org: "KPN Fresh",
  role: "Product Manager — Base Data Foundation",
  period: "Enterprise Data Platform · 7 Domains & CDM",
  summary:
    "Unifying legacy POS, WMS, and Postgres into a Single Source of Truth on BigQuery—cutting data sprint cycles by 30%, eliminating 20 hrs/month of manual reporting, and powering 7 domain Looker dashboards.",
  metrics: [
    { value: "30%", label: "Faster Data Sprints (2.5w → 2w)" },
    { value: "20 Hrs/Mo", label: "Saved in Manual Reporting" },
    { value: "12+", label: "Core Enterprise Fact Tables" },
    { value: "15%", label: "Forecast Error Reduction" },
  ],
  tags: [
    "Data Product Management",
    "BigQuery & SQL",
    "Looker Studio",
    "Supply Chain & Retail",
  ],
  blocks: [
    { type: "h2", text: "1. Executive Summary & Operational Pod" },
    {
      type: "p",
      text: "As Product Manager for KPN Fresh's Base Data Foundation, I led a high-impact, lean 3-person pod (1 PM, 1 Data Engineer, 1 Data Scientist) to architect an enterprise Common Data Model (CDM) and automated reconciliation engine on Google BigQuery. The platform unified asynchronous data from legacy offline store POS terminals (pos1 / Blukode), application PostgreSQL databases, and Odoo ERP into a single source of truth feeding 7 domain Looker Studio dashboards.",
    },
    { type: "h2", text: "2. The Problem: Data Silos, Manual Reconciliation & Slow Sprint Cycles" },
    {
      type: "p",
      text: "As KPN Fresh scaled across physical stores, Distribution Centers (DCs), and hyperlocal delivery, operational data was split between legacy and modern systems:",
    },
    {
      type: "ul",
      items: [
        "System Fragmentation: Offline retail counters ran on a legacy POS (pos1) using local integer IDs (LocId, prd_id), while our mobile app and supply chain ran on Postgres and Odoo ERP (odoo_site_code, ksin).",
        "20+ Hours Lost Monthly to Manual Reconciliation: Teams spent over 20 hours every month manually pulling CSV exports to reconcile purchase invoices, weight-adjusted online orders, and store wastage against central ledgers.",
        "2.5-Week Sprint Bottlenecks: Every time a business team requested a new report or metric, the data pod wasted days debating definitions (e.g., what counts as an Out-of-Stock SKU? how is shrinkage calculated?), stretching data sprint cycles to 2.5 weeks.",
      ],
    },
    { type: "h2", text: "3. Stakeholder Alignment: Locking in 100+ Metric Definitions Across 7 Domains" },
    {
      type: "p",
      text: "To stop the endless back-and-forth between business teams and engineering, I partnered directly with domain heads across the company to define, verify, and sign off on a unified Base Data Foundation Matrix before writing pipeline specs:",
    },
    {
      type: "table",
      headers: ["Domain / Function", "Stakeholder Partnered With", "Standardized Metrics & Dashboards Released"],
      rows: [
        [
          "Network Design (NSO)",
          "Business Development",
          "Catchment coverage %, ROIC capex ramp-up, D1/D15/D30 store footfall vs. forecast, Revenue/Sq. Ft.",
        ],
        [
          "Selection & Sourcing",
          "Category Buy Team",
          "L4 node unit/revenue velocity, Balance Shelf Life (BSL < 30%), Net Landing Cost (NLC), Purchase Price Variance (PPV), Vendor & ARS Indent Fill Rates.",
        ],
        [
          "DC & Mid-Mile Ops",
          "SCM Team",
          "Transfer Discrepancy (TD %) between DC dispatch and store receipt, Cycle Count mismatch %, Vehicle utilization, 5:30 AM store delivery SLA breaches.",
        ],
        [
          "Store Operations",
          "Store & Cluster Managers",
          "DILO adherence, Cashier bill edits & daily cash reconciliation, System Waste vs. Logged Waste delta, Online pick-to-dispatch speed.",
        ],
        [
          "Customer & Pricing",
          "Category Sell Team",
          "Pure Online vs. Pure Offline vs. Omni channel cohorts, Key Value Item (KVI) price index, Promo incremental lift, Weight-adjustment wallet credits/debits.",
        ],
        [
          "Growth & App Funnel",
          "Marketing & Online Team",
          "Sticky new user cost (≥ 2 txns/month), OOS impressions on app, Scheduled vs. Express SLA breaches, Rider utilization & payout ratios.",
        ],
        [
          "Demand Forecasting",
          "Tech, Product & Data Science",
          "Monthly ABC & Velocity tiering rules, Dynamic Safety Stock, Model MAPE (1w/2w/4w horizons) vs. Manual Intervention MAPE.",
        ],
      ],
    },
    { type: "h2", text: "4. Executing the Common Data Model (CDM) & Reconciliation Engine" },
    {
      type: "p",
      text: "Working hands-on in our lean 3-person pod (Me + 1 Data Engineer + 1 Data Scientist), I authored the schema mappings and SQL reconciliation logic on Google BigQuery:",
    },
    {
      type: "ul",
      items: [
        "1. Master ID Crosswalk (MDM): Built the mapping bridge connecting legacy POS location (LocId) and product IDs (prd_id) to modern ERP codes (odoo_site_code and ksin), ensuring zero orphaned transactions across online and offline channels.",
        "2. Automated Invoice & Purchase Cost Reconciliation: Defined composite join logic across legacy purchase tables (Purchase_Detail1 and PurchaseDtl) to compute VAT/Cess-inclusive landing costs ((prod_qty * prod_rate) * (100 + vat + cess) / 100) and reconcile GRN quantities against vendor POs (Fact_PO, Fact_Indent).",
        "3. Exposing Unexplained Shrinkage (Fact_Inventory_Incident): Formulated deterministic logic comparing manual store waste logs (pos1.wastage—rat bites, torn packets, expiry) against theoretical System Waste:",
      ],
    },
    {
      type: "pre",
      text: "Unexplained Shrinkage = (Opening SOH + Inward Stock Deliveries) - (Closing Physical Audit SOH + Total POS Sold Units) - Manually Logged Waste",
    },
    {
      type: "ul",
      items: [
        "4. FIFO Batch Aging (Fact_SKU_Batch_Age): Computed batch-level inventory age and Remaining Qty (GRN Qty - Sold Qty after Receipt Time) to flag aging stock (<30d, 31–45d, >90d) without requiring batch-level barcode scanning at checkout.",
        "5. Automated ABC & Velocity Feature Store (FACT_SKU_Classification): Partnered with our Data Scientist to implement monthly SQL window functions (PERCENT_RANK on 30-day rolling Rate of Sale) and deterministic OOS triggers (Store SOH ≤ 2 and < Safety Stock; DC DOH < 10 days) to feed clean training data into our replenishment models.",
      ],
    },
    { type: "h2", text: "5. Business & Operational Impact" },
    {
      type: "ul",
      items: [
        "Eliminated 20 Hours/Month of Manual Work: Self-serve Looker Studio dashboards connected directly to scheduled BigQuery Fact tables replaced manual CSV reconciliation and recurring reporting requests across Finance, SCM, and Store Ops.",
        "Reduced Data Sprint Cycles by 30% (2.5 Weeks → 2 Weeks): Because all base Fact/Dimension tables and metric definitions were standardized and signed off in the Base Data Foundation, releasing new dashboards or analytics features required minimal requirement clarification or schema rework.",
        "15% Improvement in Replenishment Forecast Accuracy: Accurate OOS timestamps and daily SOH reconciliation prevented stockouts from being misclassified as zero demand, directly reducing fresh produce wastage and store stockouts on Class-A SKUs.",
      ],
    },
  ],
};

export const workCaseStudies: CaseStudy[] = [
  omnichannelDataFoundationCaseStudy,
  cleverTapCaseStudy,
  demandForecastingCaseStudy,
  lastMileEtaCaseStudy,
  {
    slug: "promo-manager",
    title: "Building a Promo Manager at Scale (0→1)",
    shortTitle: "Promo Manager",
    org: "KPN Fresh",
    role: "Product Owner",
    period: "0→1 platform",
    summary:
      "A centralised promotions platform that let non-technical teams ship campaigns in minutes while enforcing deterministic checkout behaviour, financial guardrails and closed-loop ROAS attribution.",
    metrics: [
      { value: "1 day → <5 min", label: "Promo setup time" },
      { value: "Majority", label: "Campaigns shipped without engineering" },
      { value: "Closed loop", label: "Promo → redemption → ROAS" },
    ],
    tags: ["Checkout", "Guardrails", "Attribution", "Ops tooling"],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "Promotions were a core growth lever across app, web and POS, but the existing setup did not scale. Launching a promo typically took ~1 day, required engineering support, and frequently caused checkout issues. As promo volume increased, we observed discount leakage, cart failures and weak attribution of promo spend.",
      },
      {
        type: "p",
        text: "The problem was not lack of flexibility; it was the inability to safely operate promotions at scale. Promo evaluation runs on the checkout path, so errors directly impacted revenue and trust.",
      },
      {
        type: "p",
        text: "The goal was to build a centralized Promo Manager that enabled non-tech teams to ship fast while enforcing deterministic behaviour, financial guardrails and reliable attribution.",
      },
      { type: "h2", text: "My Role" },
      { type: "p", text: "I was the Product Owner for Promo Manager and owned:" },
      {
        type: "ul",
        items: [
          "Problem framing and success metrics",
          "PRDs, MVP scoping and rollout sequencing",
          "Promo rule abstractions and configuration UX",
          "Guardrails (caps, counters, priority, kill switches)",
          "Event, analytics and ROAS attribution",
          "Ongoing trade-offs with backend, POS and data teams",
        ],
      },
      { type: "h2", text: "What We Were Solving For" },
      {
        type: "ul",
        items: [
          "Reduce promo setup time from ~1 day to <5 minutes",
          "Eliminate routine engineering dependency for campaigns",
          "Prevent financial leakage and invalid cart states",
          "Keep checkout latency predictable under promo load",
          "Enable closed-loop ROAS attribution for paid marketing",
        ],
      },
      { type: "h2", text: "Key Design Decisions & Trade-offs" },
      { type: "h3", text: "1. Flexibility vs checkout reliability" },
      {
        type: "p",
        text: "Initial proposals favoured SKU, category and subclass-level eligibility. During evaluation, SKU and category-level rules materially increased backend processing complexity during real-time promo evaluation due to deeper joins, more permutations and higher latency risk on the checkout path.",
      },
      {
        type: "p",
        text: "Because promo evaluation sits on the most revenue-critical flow, we intentionally constrained eligibility to subclass-level abstractions. This covered the majority of business use cases while keeping evaluation deterministic and performant. To preserve configurability without increasing runtime complexity, we introduced reusable eligibility lists, allowing ops teams to define catalog groups once and reuse them across promotions.",
      },
      { type: "h3", text: "2. Reusable lists instead of direct selection" },
      { type: "p", text: "We applied the same abstraction consistently across the system:" },
      {
        type: "ul",
        items: [
          "Promo eligibility (which items qualify)",
          "Free-product rewards (which SKUs are given away)",
        ],
      },
      {
        type: "p",
        text: "Instead of direct per-promo SKU selection, users created named lists reusable across campaigns. This reduced configuration errors, improved consistency, simplified rule evaluation and made promo behaviour easier to reason about at scale.",
      },
      { type: "h3", text: "3. Updating promotions vs cloning" },
      {
        type: "p",
        text: "We debated forcing promo cloning for every change versus allowing in-place edits. Cloning improved auditability but created promo sprawl and fragmented analytics. We shipped a controlled middle ground:",
      },
      {
        type: "ul",
        items: [
          "Promotions could be updated multiple times",
          "Core rules and eligibility were locked post-launch",
          "Budgets, caps, end dates and activation state remained editable",
        ],
      },
      {
        type: "p",
        text: "This preserved a single promo ID for clean attribution while preventing risky mid-flight logic changes.",
      },
      { type: "h3", text: "4. Serialized coupon lifecycle design" },
      {
        type: "p",
        text: "For marketing use cases (Meta ads → WhatsApp, NSO campaigns) we generated serialized, unique codes strictly mapped to users. Creating a new coupon ID for every batch added backend overhead and limited cases where teams wanted to track one promo → one coupon redemption over time. We introduced two explicit coupon setup modes:",
      },
      {
        type: "ul",
        items: [
          "Reuse an existing coupon ID for simple scale-up scenarios or single promo–coupon tracking",
          "Create a new coupon ID when batch-level caps, attribution separation or rollback isolation was required",
        ],
      },
      {
        type: "p",
        text: "By making this an explicit product choice instead of a hidden constraint, we reduced backend churn while letting marketing teams evolve campaign strategy freely.",
      },
      { type: "h2", text: "Guardrails, Failure Modes & Reliability" },
      { type: "p", text: "Many decisions were driven by real production incidents rather than theory:" },
      {
        type: "ul",
        items: [
          "Promotion conflicts: lower-priority free-item promos not being revoked when higher-value cart discounts applied — resolved via deterministic priority resolution and benefit revocation.",
          "Invalid cart states: discounts exceeding item or cart value, creating negative payable amounts — resolved via discount ceiling validation.",
          "Expired coupons: coupons expiring mid-session leaving carts invalid — resolved via real-time revalidation and auto-removal.",
        ],
      },
      {
        type: "p",
        text: "The guiding principle was fail-safe checkout with clear user feedback, e.g. toast messaging on coupon expiry.",
      },
      { type: "h2", text: "Platform Events & Analytics" },
      {
        type: "p",
        text: "Promotion and coupon lifecycle events from the execution layer (applied, invalidated, expired, removed) were published to the platform event stream. View and impression events were captured at the client layer and stitched with backend execution events in analytics, enabling a consistent, near-real-time view for dashboards, finance reconciliation and attribution. All configuration changes were logged via audit trails, enabling full traceability and significantly reducing manual errors that could impact checkout.",
      },
      { type: "h2", text: "Unified UI Flows & Consumer Experience" },
      {
        type: "p",
        text: "On the ops side, fragmented promo and coupon update paths were consolidated into a single unified lifecycle flow, reducing inconsistencies and edge-case failures. On the consumer side:",
      },
      {
        type: "ul",
        items: [
          "Coupon expiry and updates were handled consistently",
          "Invalid or expired coupons were auto-removed",
          "Coupons were prioritised in app and web listings to surface the most relevant, usable offers first",
        ],
      },
      {
        type: "p",
        text: "This reduced checkout friction and failed payment attempts caused by invalid promotions.",
      },
      { type: "h2", text: "Budget Control & ROAS Attribution" },
      {
        type: "ul",
        items: [
          "Campaigns automatically paused once promo burn hit defined caps (hard enforcement)",
          "Burn vs cap surfaced with threshold alerts (80%, 90%) for proactive intervention",
          "Promo ID, serialized coupon code and total discount sent via Meta Conversion API",
          "Meta-reported ROAS ingested back and stitched with internal promo and order data",
        ],
      },
      {
        type: "p",
        text: "This enabled campaign, channel and cohort-level ROAS analysis and closed the loop between promo configuration and marketing ROI.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "ul",
        items: [
          "Promo setup time reduced from ~1 day to <5 minutes",
          "Majority of campaigns launched without engineering support",
          "Significant reduction in checkout breakage caused by promotions",
          "Stronger financial control via caps, counters and kill switches",
          "Improved attribution accuracy for performance marketing",
        ],
      },
      { type: "h2", text: "What I'd Improve Next" },
      {
        type: "p",
        text: "The next phase of impact would be improving promo distribution and activation, not just configuration.",
      },
      {
        type: "ul",
        items: [
          "First-class delivery integrations with Clevertap, Meta and outbound channels (e.g. Onextel) so promos and serialized coupons are pushed directly instead of manual exports",
          "Channel-level throttling and kill switches so promotions can be paused or rolled back at the distribution layer, not just checkout",
        ],
      },
      { type: "h2", text: "Reflection" },
      {
        type: "p",
        text: "The hardest part of this project wasn't enabling promotions — it was ensuring they could be safely created, updated, expired and analysed at scale without breaking checkout or trust. Most promo systems fail not due to missing features, but due to edge cases, scale and weak guardrails.",
      },
    ],
  },
  {
    slug: "refunds",
    title: "Self-Serve Refunds & Payment State Correctness (0→1)",
    shortTitle: "Refund Automation",
    org: "KPN Fresh",
    role: "Product Owner, Refunds",
    period: "0→1 system",
    summary:
      "Refunds re-framed as a distributed systems problem: event-driven payment states, CX tooling first, fraud guardrails, and only then customer self-serve.",
    metrics: [
      { value: "48 hrs → ~12 min", label: "Resolution time" },
      { value: "4 lakh", label: "Refunds processed" },
      { value: "45% → 15%", label: "Refund-related CX calls" },
      { value: "₹4 Cr", label: "Repeat orders from refunded customers" },
    ],
    tags: ["Payments", "CX tooling", "Fraud", "Event-driven"],
    blocks: [
      { type: "h2", text: "Problem Statement" },
      {
        type: "p",
        text: "At KPN, ~45% of all customer escalations were refund-related. Refunds took ~48 hours to resolve, required heavy CX intervention and had limited transparency for customers. Increasing refund volumes also exposed fraud risks and payment-state inconsistencies, especially for cancellations and partial fulfilments.",
      },
      {
        type: "p",
        text: "The problem was not speed alone — it was lack of system ownership across CX, payments and data models.",
      },
      { type: "h2", text: "My Role" },
      { type: "p", text: "Product owner for refunds, responsible for:" },
      {
        type: "ul",
        items: [
          "Defining refund lifecycle & states",
          "Designing CX tooling and customer self-serve flows",
          "Aligning refund logic with payment gateway behaviour",
          "Introducing guardrails against fraud",
          "Driving decisions using CX data, Play Store feedback and reconciliation metrics",
        ],
      },
      { type: "h2", text: "Constraints & Reality" },
      {
        type: "ul",
        items: [
          "Refunds interact with real money, async payment systems and accounting",
          "CX agents were non-technical and overloaded",
          "Razorpay processed refunds asynchronously",
          "Fraud patterns were non-uniform across geographies",
          "Some failure modes only surfaced post-scale",
        ],
      },
      { type: "h2", text: "Key Product Decisions" },
      { type: "h3", text: "Fix operational control before customer self-serve" },
      { type: "p", text: "We intentionally did not start with self-serve refunds. Instead, we first:" },
      {
        type: "ul",
        items: [
          "Enabled CX teams to validate, approve, reject or partially approve refunds",
          "Removed dependency on tech and finance for most cases",
          "Introduced queue-based processing with SLA and performance visibility",
        ],
      },
      { type: "p", text: "This stabilised the system before scaling demand." },
      { type: "h3", text: "Dual CX workflows for evidence and processing" },
      {
        type: "ul",
        items: [
          "Workflow A — Evidence collection: secure upload links sent via email, expiring 15 minutes after opening, re-triggerable for the same request",
          "Workflow B — Refund processing dashboard: partial approvals, mandatory rejection reasons, department mapping for rejected items, manager controls (unassign, SLA monitoring)",
        ],
      },
      { type: "h3", text: "Payment system issue discovered via customer feedback" },
      {
        type: "p",
        text: "Play Store review analysis surfaced a repeated complaint: “Refund always shows in progress”. The issue occurred only for full cancellations initiated by KPN and short-pick (partially fulfilled) orders.",
      },
      {
        type: "p",
        text: "Root cause: Razorpay refund behaviour had two valid states — processed instantly, or accepted and processed asynchronously. In async cases money could already be credited while our system still showed refund_in_progress, and the ambiguity triggered CX escalations.",
      },
      {
        type: "ul",
        items: [
          "Integrated Razorpay refund webhooks",
          "Updated refund states based on payment events, not API responses",
          "Reworked cancellation and short-pick refund state transitions",
          "Simplified customer-facing refund status language",
        ],
      },
      {
        type: "p",
        text: "Result: accurate refund visibility and a sharp reduction in false escalations.",
      },
      { type: "h3", text: "CX clarity trade-off: rejection reasons" },
      {
        type: "p",
        text: "Customers kept asking CX “why was my refund rejected?”. Free-text agent reasons were inconsistent, detailed explanations would increase disputes and teach fraud patterns, and fine-grained logic didn't scale to UI.",
      },
      {
        type: "p",
        text: "Decision: expose a single generic rejection reason — “Submitted evidence did not match the stated reason.” Outcome: fewer follow-up CX calls, no fraud pattern learning, and maintained operational clarity.",
      },
      { type: "h3", text: "Data modelling constraint (financial correctness)" },
      {
        type: "p",
        text: "During reconciliation we found return request lines did not include certain items (e.g. recyclable bags) — these appeared only in credit note lines. We aligned refund calculation and reporting to credit note lines, ensuring accounting correctness and downstream consistency: a deliberate decision to prioritise system truth over abstraction.",
      },
      { type: "h3", text: "Fraud mitigation & rollback" },
      {
        type: "p",
        text: "We experimented with auto-refunds on first delivered orders. ~80% of fraudulent claims originated from one zone (Hyderabad) and evidence quality was largely invalid. We reduced the auto-refund cap to ₹100 and eventually rolled auto-refunds back entirely. Data overrode intuition.",
      },
      { type: "h3", text: "Customer self-serve (after stabilisation)" },
      {
        type: "ul",
        items: [
          "Customers could initiate refunds on app and web",
          "Select items, quantities and reasons",
          "Upload evidence",
          "Track refund status transparently",
        ],
      },
      { type: "p", text: "Average internal processing time: ~12 minutes." },
      { type: "h2", text: "Impact" },
      {
        type: "ul",
        items: [
          "4 lakh refunds processed",
          "85% self-served by customers",
          "Refund-related CX calls reduced from 45% to 15%",
          "Resolution time reduced from 48 hrs to ~12 mins",
          "₹4 Cr repeat orders from refunded customers",
          "Accurate refund states for cancellations & partial orders",
        ],
      },
      { type: "h2", text: "Key Learnings" },
      {
        type: "ul",
        items: [
          "Refunds are distributed systems problems, not support features",
          "Async payments demand event-driven state management",
          "Transparency must be balanced against fraud risk",
          "Some system truths emerge only at scale — fast correction matters more than perfect foresight",
        ],
      },
    ],
  },
  {
    slug: "pos-gap-analysis",
    title: "Retail POS Gap Analysis & Modernization Architecture",
    shortTitle: "POS Gap Analysis",
    org: "KPN Fresh",
    role: "Associate Product Manager",
    period: "System Architecture & Gap Analysis",
    summary:
      "A deep 30+ gap operational and architectural analysis replacing 1980s legacy POS with a modern local-first Cloud/Express POS (Penguin POS)—eliminating offline crash downtime, data sync leaks, and manual reconciliation.",
    metrics: [
      { value: "30+", label: "Functional gaps diagnosed" },
      { value: "Local-First", label: "Offline-resilient architecture" },
      { value: "Zero Leak", label: "Sync & reconciliation target" },
    ],
    tags: ["POS 2.0", "System Architecture", "Offline Sync", "Retail Ops", "Gap Analysis"],
    blocks: [
      { type: "h2", text: "Executive Summary" },
      {
        type: "p",
        text: "Bluekode's legacy POS system, in use since the 1980s, was operational when KPN was acquired across 30 stores. Functional gaps caused data inconsistencies, frequent manual interventions, and customer checkout friction. Store managers navigated multiple fragmented interfaces with no centralized visibility into terminal performance, and crash recoveries required manual .exe launches.",
      },
      {
        type: "p",
        text: "This gap analysis benchmarked legacy POS workflows against the in-house Penguin Cloud POS and Express POS, formulating the blueprint for POS 2.0: a lean, purpose-built POS for sub-second cashier checkout paired with a centralized web Command Center for back-office operations.",
      },
      { type: "h2", text: "Key Analysis Modules & Scope" },
      {
        type: "ul",
        items: [
          "Cashier Workflows: In-depth examination of Cash Bill, Sales Returns, Terminal Management, Paid Out & Close denomination tracking, and multi-mode payment capture (EDC, UPI, cash).",
          "Store Manager Workflows: Day-end closing, DSD PO, GRN verification against PO/invoices, physical stock audits, F&V rate entry, and wastage/expiry logging.",
          "Local-First vs Cloud Architecture: Transitioning from fragile local server dependencies to an automated loop (10s → 2s → 3s retry intervals) with intelligent offline sync and automatic server detection.",
          "Hardware Ecosystem: Evaluation of peripherals including EDC payment machines, Data Logic barcode scanners, weighing machines, Bizerba scales, and thermal receipt printers.",
          "Competitive Benchmarking: 30+ front-office and back-office capabilities evaluated across leading modern retail systems.",
        ],
      },
      { type: "h2", text: "Strategic Recommendations for POS 2.0" },
      {
        type: "ul",
        items: [
          "Decouple Billing from Administrative Flows: Restrict terminal POS strictly to fast checkout; move non-checkout administrative flows (goods receiving, waste logging, stock audits) to web Command Center.",
          "Local-First Offline Resilience: Guarantee uninterrupted billing during server or network failure, auto-syncing transactions once connectivity is restored.",
          "Unified Customer Return Engine: Enable bill search, OTP-based authorization, and instant wallet credit for returns without requiring supervisor overrides.",
        ],
      },
    ],
  },
  {
    slug: "loyalty-program",
    title: "Tier-Based Omnichannel Loyalty Program for B2P Partners",
    shortTitle: "B2P Loyalty Program",
    org: "IBO",
    role: "Product Lead / Strategy",
    period: "0→1 Loyalty Strategy",
    summary:
      "An omnichannel tier-and-points loyalty architecture for 15,000+ construction & renovation professionals (Contractors, Technicians, Architects, Builders)—benchmarking global retail models and targeting 16%–22% partner returns.",
    metrics: [
      { value: "15K+", label: "Target B2P professional network" },
      { value: "16–22%", label: "Target partner return %" },
      { value: "Tier+Points", label: "Omnichannel reward model" },
    ],
    tags: ["Loyalty", "B2P Strategy", "Customer Journeys", "Tiered Rewards", "Fintech"],
    blocks: [
      { type: "h2", text: "Executive Summary" },
      {
        type: "p",
        text: "Business-to-Professional (B2P) partners—including Contractors, Technicians, Architects, Interior Designers, and Builders—represent high-frequency, high-ticket purchasers in the home building supplies market. However, baseline engagement showed only 21.5% of approved partners giving referrals, and only 65% of transacted partners receiving cashback.",
      },
      {
        type: "p",
        text: "To accelerate repeat order rates, lower customer acquisition costs, and foster long-term partner lock-in, I designed an omnichannel tiered loyalty program combining instant point burn, delivery fee waivers, and exclusive professional perks.",
      },
      { type: "h2", text: "Primary Research & Journey Insights" },
      {
        type: "ul",
        items: [
          "Contractors (4,965 profiles, 49% order share): Pain points centered on delivery delays, item availability, and credit requirements. Recommended dedicated account managers and bulk paint/wire discounts.",
          "Technicians (6,503 profiles, 22% order share): Required quick access, item quotations, and instant cashback on daily site essentials.",
          "Architects & Interior Designers (1,761 profiles, 25% order share): Needed NEFT payment modes, priority quotations, and project spend tracking logs.",
          "Store vs Online Journey Mapping: Mapped friction points from product discovery to delivery, returns, and post-purchase resolution.",
        ],
      },
      { type: "h2", text: "Proposed Tier Architecture & Unit Economics" },
      {
        type: "ul",
        items: [
          "IBO Member (₹0–₹9,999 annual spend): 5% points earn/burn, free delivery on orders >₹2,500, access to promotional sales (10% total return).",
          "IBO Pro Member (₹9,999–₹19,999 annual spend): 10% points earn/burn, free delivery >₹1,000, 1.5% wallet cashback, differentiated pricing (14%–16% total return).",
          "IBO Premium Member (>₹20,000 annual spend): 15% points earn/burn, unlimited free delivery, 3% wallet cashback, dedicated account manager, credit/EMI payment (19%–22% total return).",
          "Secondary Benchmarking: Grounded against tier programs of Home Depot (Pro Xtra), Lowes, Mistry Store, Industry Buying, and Kajaria Ceramics.",
        ],
      },
    ],
  },
  {
    slug: "arnxt",
    title: "ARNxt — A Full-Stack AR Commerce Platform (0→1)",
    shortTitle: "ARNxt",
    org: "Quleep",
    role: "Product Manager",
    period: "0→1 platform",
    summary:
      "An AR-powered B2B commerce platform letting brands showcase products in immersive 3D across mobile, web and white-label surfaces — built as an operational ecosystem, not an AR demo.",
    metrics: [
      { value: "30+", label: "Sellers onboarded" },
      { value: "24+ hrs", label: "Cut from model onboarding" },
      { value: "₹8 Cr", label: "Roadmap defined" },
      { value: "Incubation", label: "Secured at IMT Ghaziabad" },
    ],
    tags: ["0→1", "AR", "Marketplace", "Asset pipeline"],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "At Quleep I led the 0→1 development of ARNxt, an AR-powered B2B commerce platform enabling brands to showcase products in immersive 3D across mobile, web and white-label environments.",
      },
      { type: "p", text: "We were operating in an emerging category — AR commerce — where:" },
      {
        type: "ul",
        items: [
          "Merchant adoption was unproven",
          "Asset creation was operationally heavy",
          "Performance constraints were real",
          "Monetization models were unclear",
        ],
      },
      {
        type: "p",
        text: "The challenge was not just building an AR viewer — it was building a scalable, merchant-grade ecosystem around it.",
      },
      { type: "h2", text: "User Problem" },
      {
        type: "p",
        text: "Through early brand conversations (e.g. Excel Wallpapers) we identified three core pain points: most catalogs remained unseen, customers struggled to visualise durable goods (walls, decor, furniture), and brands feared losing design exclusivity on open marketplaces.",
      },
      {
        type: "ul",
        items: [
          "3D asset onboarding took 24+ hours",
          "No standardised modelling pipeline existed",
          "Merchants lacked analytics around AR engagement",
          "AR tools in the market were fragmented",
        ],
      },
      {
        type: "p",
        text: "So the problem wasn't just visualization. It was discoverability + visualization + control + insight.",
      },
      { type: "h2", text: "Product Strategy" },
      { type: "p", text: "I structured the platform into three interconnected surfaces." },
      { type: "h3", text: "1. Marketplace App (discovery layer)" },
      {
        type: "ul",
        items: [
          "AR “View in your space”",
          "Wishlist, reviews, enquiries",
          "Engagement analytics",
          "No user-level data exposure",
        ],
      },
      { type: "h3", text: "2. Business App (controlled distribution layer)" },
      {
        type: "ul",
        items: [
          "Device-specific credentials",
          "Screenshot disabled",
          "User-level analytics",
          "Campaign management",
          "Planning tools",
        ],
      },
      { type: "h3", text: "3. Merchant Dashboard (control & insights layer)" },
      {
        type: "ul",
        items: [
          "Content management",
          "Campaign management",
          "Enquiry resolution",
          "Analytics & competitive insights",
        ],
      },
      {
        type: "p",
        text: "This architecture solved open discovery + controlled exclusivity + merchant ownership.",
      },
      { type: "h2", text: "Key Technical & Product Decisions" },
      { type: "h3", text: "Standardize the 3D asset pipeline" },
      {
        type: "p",
        text: "We were seeing rendering failures, performance drops, inconsistent lighting and large file sizes. Instead of fixing issues reactively, I defined strict modelling standards:",
      },
      {
        type: "ul",
        items: [
          "Poly count limits (30k–100k)",
          "FBX format only",
          "Texture baking mandatory",
          "Real-world dimensions required",
          "Only base / metallic / roughness / normal maps supported",
        ],
      },
      {
        type: "p",
        text: "We also built an internal QA tester, a structured Google Drive hierarchy and a desktop fallback model tester. Impact: reduced QA cycles, 24+ hours cut from onboarding time and consistent AR performance. This was a scalability decision, not a documentation task.",
      },
      { type: "h3", text: "Build a backend segmentation API" },
      {
        type: "p",
        text: "For walls and floors AR, the frontend sends an image to a backend segmentation server, which returns a segmented S3 image the render layer overlays the product onto. This required coordinating frontend, backend and infra, designing failure fallbacks and ensuring latency didn't break UX. We prioritised stability over hyper-advanced ML and deterministic outputs over experimental models.",
      },
      { type: "h3", text: "Separate data access by app mode" },
      {
        type: "p",
        text: "The Marketplace App shared no user-level data with brands; the Business App exposed full user-level analytics. This addressed brand exclusivity concerns, privacy boundaries and data monetization potential.",
      },
      { type: "h3", text: "Monetization experimentation early" },
      {
        type: "p",
        text: "We tested SaaS subscription, white-label licensing and marketplace commission. Rather than committing early, we validated willingness to pay through onboarding and incubation validation.",
      },
      { type: "h2", text: "Trade-offs I Navigated" },
      { type: "h3", text: "Feature depth vs speed" },
      {
        type: "p",
        text: "We intentionally deferred AI personalization, advanced recommendation engines and deep conversion attribution to ship the MVP faster and validate merchant adoption first.",
      },
      { type: "h3", text: "Realism vs performance" },
      {
        type: "p",
        text: "High-poly models mean better visuals but lower performance. We enforced strict poly ceilings to preserve app performance on mid-range Android devices.",
      },
      { type: "h3", text: "AR perfection vs merchant tooling" },
      {
        type: "p",
        text: "Instead of obsessing over AR fidelity alone, we prioritised merchant dashboards, analytics, enquiry management and campaign controls — because AR without insights wouldn't drive retention.",
      },
      { type: "h2", text: "Outcomes" },
      {
        type: "ul",
        items: [
          "30+ sellers onboarded",
          "24+ hour reduction in model onboarding time",
          "Multi-platform launch (Web, Android, iOS, white-label)",
          "Secured IMT Ghaziabad incubation",
          "Defined ₹8 Cr roadmap",
        ],
      },
      {
        type: "p",
        text: "Most importantly: we built a scalable AR commerce foundation, not a demo product.",
      },
      { type: "h2", text: "What I Would Do Differently Today" },
      {
        type: "ul",
        items: [
          "Add AR session-to-purchase attribution",
          "Track uplift vs non-AR sessions",
          "Introduce a dynamic poly optimization pipeline",
          "Add predictive demand analytics from planning behaviour",
          "Build a plug-and-play SDK for Shopify",
        ],
      },
      { type: "h2", text: "Why This Was a Hard Product Problem" },
      {
        type: "p",
        text: "This wasn't “build an AR viewer”. It was emerging category validation, multi-surface platform architecture, operational pipeline design, data boundary decisions, merchant monetization strategy and infra coordination — thinking across user experience, merchant incentives, technical constraints, performance limits, security, exclusivity and business model design.",
      },
    ],
  },
];

export const trustRentCaseStudy: CaseStudy = {
  slug: "trustrent",
  title: "TrustRent — Escrow-Based Rental Transaction Platform (0→1)",
  shortTitle: "TrustRent",
  org: "Independent Product",
  role: "Product & Builder",
  period: "0→1 MVP · Live prototype",
  summary:
    "An escrow-based rental transaction platform for India's rental market — protecting payments until agreed conditions are met, making transactions transparent, and giving tenants and landlords a neutral layer of trust.",
  link: { label: "Visit trustrent.in", href: "https://www.trustrent.in/" },
  metrics: [
    { value: "0→1", label: "Functional MVP shipped" },
    { value: "Live", label: "Deployed product at trustrent.in" },
    { value: "Escrow", label: "Simulated transaction engine" },
  ],
  tags: ["0→1", "Fintech", "Escrow", "Rapid MVP"],
  blocks: [
    { type: "h2", text: "Problem Statement" },
    {
      type: "p",
      text: "Rental transactions in India suffer from a lack of trust between tenants and landlords, security deposit disputes, payment fraud and last-minute cancellations, no transparent transaction tracking, and manual, fragmented payment processes. Both parties lack a neutral transaction layer ensuring safety and accountability.",
    },
    { type: "h2", text: "Product Vision" },
    {
      type: "p",
      text: "Build a secure escrow-based rental transaction platform where:",
    },
    {
      type: "ul",
      items: [
        "Payments are protected until agreed conditions are met",
        "Transactions are transparent and trackable",
        "Users have confidence to transact with unknown parties",
        "Non-technical users can manage agreements and payments easily",
      ],
    },
    { type: "h2", text: "Target Users & Pain Points" },
    { type: "p", text: "Independent landlords, tenants relocating to new cities, and small property brokers — each with a distinct trust gap:" },
    {
      type: "ul",
      items: [
        "Tenant — fear of losing deposit → escrow lock + staged release",
        "Landlord — payment uncertainty → verified payment flow",
        "Both — lack of transaction visibility → wallet + transaction tracker",
        "Brokers — manual follow-ups → automated payment lifecycle",
      ],
    },
    { type: "h2", text: "Product Scope (MVP)" },
    {
      type: "ul",
      items: [
        "Property listing & agreement flow",
        "Digital wallet with escrow simulation",
        "Transaction lifecycle management",
        "Payment release conditions",
        "Role-based user journeys",
        "Dashboard with transaction states",
        "Fraud prevention messaging",
      ],
    },
    { type: "h2", text: "Key Product Decisions" },
    {
      type: "ul",
      items: [
        "Simulated escrow logic to validate UX before financial licensing",
        "Wallet-based mental model to simplify complex fintech flows",
        "Step-based transaction journey to reduce user anxiety",
        "Neutral UI language to avoid landlord/tenant bias",
        "Modular promo & rule system for future monetization",
      ],
    },
    { type: "h2", text: "Tech Stack & Execution" },
    {
      type: "ul",
      items: [
        "Rapid prototyping platform with a simulated backend transaction engine",
        "Escrow workflow logic design and wallet state management",
        "Custom branding assets & UI flows (Figma for UX flows)",
        "Supabase / mock APIs, deployed via static hosting",
      ],
    },
    { type: "h2", text: "Fintech Concepts Applied" },
    {
      type: "ul",
      items: [
        "Escrow transaction lifecycle",
        "Conditional payment release",
        "Wallet ledger structure",
        "Transaction state machines",
        "Risk & fraud signaling UX",
        "Compliance-aware UX flows",
      ],
    },
    { type: "h2", text: "Learning Outcomes" },
    {
      type: "ul",
      items: [
        "Designed fintech transaction systems from scratch",
        "Built a 0→1 product under real constraints",
        "Translated regulatory complexity into user flows",
        "Balanced trust, risk, and usability",
        "Validated product hypotheses through a functional prototype",
      ],
    },
    { type: "h2", text: "Limitations & Future Roadmap" },
    {
      type: "p",
      text: "Real payments are intentionally disabled, compliance & KYC are future scope, and legal escrow integration is pending licensing. The roadmap covers licensed escrow provider integration, real payment gateway onboarding, KYC & compliance workflows, an AI fraud detection layer, and broker & enterprise dashboards.",
    },
  ],
};

export const independentProjects: CaseStudy[] = [
  mockTestMakerCaseStudy,
  trustRentCaseStudy,
];

export const allCaseStudies: CaseStudy[] = [
  ...independentProjects,
  ...workCaseStudies,
];

export const caseStudies: CaseStudy[] = allCaseStudies;

export const getCaseStudy = (slug: string) => allCaseStudies.find((c) => c.slug === slug);
