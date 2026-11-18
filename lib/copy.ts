import { FeatureStatus } from "@/lib/featureStatus";
import { routes } from "@/lib/routes";

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type StatusedItem = {
  title?: string;
  label?: string;
  description: string;
  status: FeatureStatus;
};

const storeDownloads = {
  android: "https://play.google.com/store/apps/details?id=com.ovaisto.matchhai&hl=en",
  ios: "https://apps.apple.com/pk/app/matchhai/id6800853996"
};

export const copy = {
  site: {
    name: "Matchhai",
    legalName: "Muhammad Ovais, sole proprietor",
    downloads: storeDownloads,
    location: "B5, Haq Square, Garden East, Karachi, Sindh, Pakistan",
    description:
      "Matchhai is a gaming and esports platform for players and participating gaming zones in Karachi.",
    defaultMeta: {
      title: "Matchhai - Gaming and esports in Karachi",
      description:
        "Discover players, coordinate teams, and request gaming sessions at participating Karachi gaming zones.",
      ogTitle: "Matchhai - Gaming and esports in Karachi",
      ogDescription:
        "Connect with players and participating gaming zones for gaming activities and session bookings in Karachi."
    }
  },
  statusLabels: {
    LIVE: "LIVE",
    BETA: "BETA",
    PLANNED: "PLANNED",
    COMING_SOON: "COMING SOON"
  },
  nav: {
    skipToContent: "Skip to content",
      links: [
        { label: "Home", href: routes.home },
        { label: "How it works", href: routes.howItWorks },
        { label: "Business details", href: `${routes.home}#business-details` },
        { label: "Zones", href: `${routes.home}#audience` },
        { label: "Trust", href: `${routes.home}#trust` },
      { label: "Pricing", href: `${routes.home}#pricing` },
      { label: "Contact", href: `${routes.home}#contact` },
      { label: "Download", href: `${routes.home}#download` }
    ],
    ctas: {
      primary: { label: "Download for Android", href: storeDownloads.android },
      secondary: { label: "Download for iOS", href: storeDownloads.ios }
    },
    mobile: {
      openLabel: "Open navigation menu",
      openText: "Menu",
      closeLabel: "Close navigation menu"
    }
  },
  banners: {
    staging: {
      label: "Staging"
    }
  },
  symbols: {
    close: "x",
    separator: "-",
    labelSeparator: ":"
  },
  hero: {
    eyebrow: "Gaming and esports in Karachi",
    title: "Squad Up. Play.",
    subtitle:
      "Matchhai helps players discover one another, coordinate teams, and request gaming sessions at participating gaming zones in Karachi. Matchhai does not offer gambling, betting, wagering, or games of chance.",
    badges: [
      { label: "Skill-based matchrooms", status: "LIVE" as FeatureStatus },
      { label: "Team coordination", status: "LIVE" as FeatureStatus },
      { label: "Venue booking requests", status: "LIVE" as FeatureStatus }
    ],
    downloadCta: { label: "Download Matchhai", href: `${routes.home}#download` },
    primaryCta: { label: "View business details", href: `${routes.home}#business-details` },
    secondaryCta: { label: "Contact Matchhai", href: `${routes.home}#contact` },
    canvasAriaLabel: "Matchhai neon arena hero graphic",
    fallbackAlt: "Matchhai hero background"
  },
  audience: {
    players: {
      title: "For players & teams",
      description: "Gaming activities and team coordination for players in Karachi.",
      bullets: [
        "Player discovery and matchroom participation",
        "Team coordination and team challenges",
        "Messaging and communication about platform activities",
        "Gaming-zone discovery in Karachi",
        "Request gaming sessions at participating zones in Karachi"
      ],
      cta: { label: "Explore how it works", href: `${routes.home}#how-it-works` }
    },
    zones: {
      title: "For gaming-zone owners",
      description:
        "Participating gaming zones can share session details and receive booking requests from players.",
      bullets: [
        "Gaming-zone discovery in Karachi",
        "Gaming-session booking requests",
        "Booking records and customer support coordination"
      ],
      cta: { label: "See business details", href: `${routes.home}#business-details` }
    }
  },
  home: {
    whatIs: {
      title: "What is Matchhai",
      description: "Gaming and esports for players and participating gaming zones in Karachi.",
      pillars: [
        {
          title: "Player discovery",
          description: "Find other players for gaming activities in Karachi.",
          status: "LIVE" as FeatureStatus
        },
        {
          title: "Matchroom creation and joining",
          description: "Organize or join supported gaming sessions.",
          status: "LIVE" as FeatureStatus
        },
        {
          title: "Team coordination",
          description: "Organize teams and coordinate participation.",
          status: "LIVE" as FeatureStatus
        },
        {
          title: "Team challenges",
          description: "Arrange supported challenges between teams.",
          status: "LIVE" as FeatureStatus
        },
        {
          title: "Messaging and communication",
          description: "Communicate about platform activities.",
          status: "LIVE" as FeatureStatus
        },
        {
          title: "Gaming-zone discovery",
          description: "Find participating gaming zones in Karachi.",
          status: "LIVE" as FeatureStatus
        },
        {
          title: "Gaming-session booking",
          description: "Request supported sessions at participating zones.",
          status: "LIVE" as FeatureStatus
        }
      ] as StatusedItem[]
    },
    businessDetails: {
      title: "Business details",
      description:
        "Matchhai coordinates bookings, payment records and customer support. Participating gaming zones provide facilities, equipment and gaming sessions.",
      cards: [
        {
          title: "What users pay for",
          lines: [
            "Booking prices vary by gaming zone, equipment and session configuration",
            "Matchhai commission is deducted from participating gaming-zone revenue, not added as a separate customer surcharge",
            "No gambling, betting, wagering, or games of chance"
          ]
        }
      ]
    },
    howItWorksPreview: {
      title: "How it works",
      steps: [
        {
          title: "Choose an activity",
          description: "Choose a gaming activity and available session in Karachi."
        },
        {
          title: "Review details",
          description: "Review the booking details, amount and applicable terms."
        },
        {
          title: "Follow booking steps",
          description:
            "Follow the request, approval and payment steps shown for that booking, then check its confirmed status before attending."
        }
      ]
    },
    trustPreview: {
      title: "Trust & safety",
      items: [
        {
          title: "Karachi gaming community",
          description: "Gaming and esports activities for players and participating zones in Karachi."
        },
        {
          title: "Built for the local ecosystem",
          description: "Designed with zones, teams, and communities in mind."
        },
        {
          title: "No gambling or betting",
          description:
            "Matchhai does not provide gambling, betting, wagering, or games of chance."
        },
        {
          title: "Skill-based usage",
          description:
            "Players are matched and coordinated using game, role, and skill context."
        },
        {
          title: "Booking payments",
          description:
            "Review the booking amount and applicable terms before confirming payment."
        },
        {
          title: "Verifiable business contact",
          description:
            "Business address, phone, email, terms, privacy, and refund pages are published."
        }
      ]
    },
    pricing: {
      title: "Pricing in PKR",
      intro: "Booking prices are shown in Pakistani rupees (PKR) and vary by gaming zone, equipment and session configuration. Matchhai's platform commission is deducted from participating gaming-zone revenue, not added as a separate Matchhai customer surcharge. Review the booking amount and terms before confirming payment.",
      plans: [
        {
          name: "Booking price",
          price: "Varies by session",
          description: "The selected zone and session determine the booking amount.",
        },
        {
          name: "Platform commission",
          price: "From zone revenue",
          description: "Matchhai's commission is deducted from participating gaming-zone revenue.",
        },
        {
          name: "Cancellations and refunds",
          price: "Based on booking status",
          description: "Eligible refunds follow the Refund and Cancellation Policy.",
        }
      ]
    },
    ctaStrip: {
      title: "Download Matchhai",
      description:
        "Choose Android or iOS to get the Matchhai app and explore gaming and esports in Karachi.",
      primaryCta: { label: "Download for Android", href: storeDownloads.android },
      secondaryCta: { label: "Download for iOS", href: storeDownloads.ios }
    }
  },
  howItWorks: {
    title: "How Matchhai works",
    intro:
      "Choose a gaming activity and available session in Karachi. Review the booking details, amount and applicable terms. Follow the request, approval and payment steps shown for that booking. Check the confirmed booking status before attending.",
    steps: [
      {
        title: "Onboard",
        description:
          "Choose your game, city, and player details to join a skill-based coordination flow.",
        status: "LIVE" as FeatureStatus
      },
      {
        title: "Matchrooms",
        description:
          "Structured slots, roles, join requests, and private codes help players coordinate real sessions.",
        status: "LIVE" as FeatureStatus
      },
      {
        title: "Venue approvals",
        description:
          "Follow the request, approval and payment steps shown for that booking. Payment success and booking confirmation are distinct; check the confirmed status before attending.",
        status: "LIVE" as FeatureStatus
      },
      {
        title: "Compliance guardrails",
        description:
          "Matchhai is a skill-based service platform and does not support betting, gambling, or chance-based payouts.",
        status: "LIVE" as FeatureStatus
      }
    ],
    cta: { label: "Contact Matchhai", href: `${routes.home}#contact` }
  },
  games: {
    title: "Gaming and esports services",
    intro:
      "The Matchhai app currently offers all seven gaming and esports service categories in Karachi. Session, zone and booking details can vary by participating gaming zone.",
    esportsTitle: "Service categories",
    esports: [
      { title: "Player discovery", description: "Find other players for gaming activities.", status: "BETA" as FeatureStatus },
      { title: "Matchroom creation and joining", description: "Organize or join supported gaming sessions.", status: "BETA" as FeatureStatus },
      { title: "Team coordination", description: "Organize teams and coordinate participation.", status: "BETA" as FeatureStatus },
      { title: "Team challenges", description: "Arrange supported challenges between teams.", status: "BETA" as FeatureStatus },
      { title: "Messaging and communication", description: "Communicate about platform activities.", status: "BETA" as FeatureStatus },
      { title: "Gaming-zone discovery", description: "Find participating gaming zones in Karachi.", status: "BETA" as FeatureStatus },
      { title: "Gaming-session booking", description: "Book supported sessions at participating zones.", status: "BETA" as FeatureStatus }
    ],
    sportsTitle: "",
    sportsRoadmap: [],
    disclaimer:
      "Not affiliated with Valve, Sony, EA, Microsoft, FACEIT, Steam, PlayStation, or Xbox. Matchhai does not provide gambling or betting services."
  },
  contact: {
    title: "Contact Matchhai",
    intro:
      "For customer support, refund disputes and privacy requests, email support@matchhai.com or call +92 323 8249779. Address: B5, Haq Square, Garden East, Karachi, Sindh, Pakistan.",
    detailsTitle: "Contact details",
    supportEmail: "support@matchhai.com",
    supportEmailHref: "mailto:support@matchhai.com",
    phone: "+92 323 8249779",
    phoneHref: "tel:+923238249779",
    address: "B5, Haq Square, Garden East, Karachi, Sindh, Pakistan",
    details: [
      { label: "Email", value: "support@matchhai.com", href: "mailto:support@matchhai.com" },
      { label: "Phone", value: "+92 323 8249779", href: "tel:+923238249779" },
      { label: "Business address", value: "B5, Haq Square, Garden East, Karachi, Sindh, Pakistan" }
    ]
  },
  legal: {
    servicePolicy:       {
        "title": "Service Policy",
        "intro": "Services and booking information for Matchhai's gaming and esports platform in Karachi.",
        "lastUpdated": "18 November 2026",
        "sections": [
          {
            "title": "SP1. About Matchhai and this policy",
            "paragraphs": [
              "Matchhai is the trading name of Muhammad Ovais, a sole proprietor. Matchhai is a gaming and esports platform serving Karachi, Pakistan. We help players connect and coordinate gaming activities and supported gaming-zone bookings. Participating gaming zones provide booked facilities, equipment and sessions; Matchhai coordinates platform bookings, payment records and customer support.",
              "Read this policy with our Terms and Conditions, Refund and Cancellation Policy and Privacy Policy. Availability depends on the feature, participating zone and booking details. Mandatory customer rights remain protected."
            ]
          },
          {
            "title": "SP2. Accounts and access",
            "paragraphs": [
              "You must be at least 13 to hold an account. Users younger than 18 should inform their parent or legal guardian and obtain permission before making paid bookings. Matchhai does not currently operate a technical system to verify parental permission. Applicable legal requirements may call for additional safeguards; this statement does not establish legal compliance. Provide accurate account information, protect credentials and use services respectfully. Additional booking and venue requirements must be disclosed before commitment."
            ]
          },
          {
            "title": "SP3. Services available through the platform",
            "paragraphs": [
              "All seven service categories listed here are available through the live Matchhai app in Karachi. They are platform service categories, not seven separately priced products. Individual session, zone and booking details can vary. Review the applicable details before paying."
            ],
            "bullets": [
              "Player discovery: find other players for gaming activities.",
              "Matchroom creation and joining: organize and join supported gaming sessions.",
              "Team coordination: organize teams and coordinate participation.",
              "Team challenges: arrange supported challenges between teams.",
              "Messaging and communication: communicate about platform activities.",
              "Gaming-zone discovery: find participating gaming zones in Karachi.",
              "Gaming-session booking: reserve supported sessions at participating zones."
            ]
          },
          {
            "title": "SP4. Prices, payment and booking status",
            "paragraphs": [
              "Review the displayed price in Pakistani rupees (PKR), included services and applicable terms before confirming. Matchhai earns commission from participating gaming-zone revenue; it is not an additional customer surcharge.",
              "Payment initiation, confirmed payment and confirmed booking are different stages. A payment-page redirect alone does not confirm payment or a booking. Reserved funds may move from available wallet balance to held balance. Capture applies held funds to a booking; releasing an eligible hold makes reserved funds available again. A refund concerns a qualifying payment already collected.",
              "Player wallet balances are for supported Matchhai bookings; player cash withdrawal is not supported under this model. Eligible refunds go to available Matchhai wallet balance, subject to mandatory remedies and payment-provider requirements. The Refund and Cancellation Policy explains eligibility and exceptions."
            ]
          },
          {
            "title": "SP5. Venue service, changes and cancellation",
            "paragraphs": [
              "Cancellation eligibility depends on booking state, payment state, actor and reason. Eligible participant reservations may be released before booking lock where supported. Host-created payments require scenario-specific assessment. Departure, cancellation, rejection and expiry are distinct; there is no universal cancellation window.",
              "Verified gaming-zone service failure qualifies for a full eligible refund or an alternative the customer voluntarily accepts. Relevant failures include closure, unavailable booked equipment, double booking and material power or internet failure. An absent player or team generally does not qualify for a no-show refund; other affected participants are assessed independently. Support reviews booking records, attendance, venue evidence and communications, preserving mandatory remedies.",
              "Matchhai coordinates eligible customer remedies. A responsible zone bears agreed financial costs; internal arrangements do not displace customer rights. Under normal settlement, zone earnings for a completed matchroom may become withdrawable after ordinary booking reconciliation. Amounts identified as subject to an open refund review remain excluded from the withdrawable balance. This does not prevent a customer from raising a later valid dispute or refund claim; it will be assessed under this policy even if zone earnings have already been withdrawn. The target is to process an eligible zone withdrawal within 24 hours after the earnings become withdrawable. This is an operating target, not a guarantee. Any post-withdrawal recovery or adjustment requires separate review and reconciliation; no automatic recovery is promised. This process has not been independently verified as implemented."
            ]
          },
          {
            "title": "SP6. Support and policy changes",
            "paragraphs": [
              "Contact support@matchhai.com or +92 323 8249779 for general support, refunds and privacy requests. Our address is B5, Haq Square, Garden East, Karachi, Sindh, Pakistan. Specialized child-safety concerns should go to ovais@matchhai.com.",
              "We acknowledge support requests within two business days. Investigation and resolution are case-dependent, with status updates. Acknowledgement is not refund approval; approval is not completed credit. Approved wallet credits follow confirmed processing, without a guaranteed dispute-resolution or wallet-credit deadline.",
              "Published revisions will identify changes and provide notice where required. Booking-specific rights and mandatory remedies remain protected."
            ]
          }
        ] as PolicySection[]
      },
    refund:       {
        "title": "Refund and Cancellation Policy",
        "intro": "Cancellation, booking payment and refund review information for Matchhai gaming sessions in Karachi.",
        "lastUpdated": "18 November 2026",
        "sections": [
          {
            "title": "RF1. Scope and payment records",
            "paragraphs": [
              "This policy covers supported Matchhai gaming-session bookings in Karachi, cancellation, reserved funds and eligible refunds. Services involve booking/payment remedies rather than physical product returns. Read it with the Service Policy and Terms. Mandatory remedies and applicable payment-provider requirements remain protected.",
              "Pending or failed payment is not booking confirmation. Contact support for disputed, duplicate or late-confirmed payments and funding followed by booking failure. A payment-page redirect does not establish payment. Wallet funding and booking finalization are separate events requiring reconciliation when they disagree."
            ]
          },
          {
            "title": "RF2. Reservations and released funds",
            "paragraphs": [
              "Available funds may be reserved as held funds. An eligible release returns held funds to available balance; it is not a refund of captured payment. Capture applies funds to a booking. Refund eligibility concerns collected payments. Reconciliation establishes amounts actually collected, credited, held, captured or returned and avoids duplicate credits."
            ]
          },
          {
            "title": "RF3. Leaving a matchroom",
            "paragraphs": [
              "Eligible participant holds may be released before booking lock where supported. After lock, state, reason and affected parties require assessment; there is no universal cancellation window. Leaving a room is not necessarily cancelling the booking. Host-created payments can follow different paths and require separate evaluation; participant release rules do not automatically decide host refunds."
            ]
          },
          {
            "title": "RF4. Booking cancellation, rejection and expiry",
            "paragraphs": [
              "Customer or host cancellation, venue rejection, expiry and team-challenge cancellation depend on booking/payment states, actor and reason. Eligible holds are released; qualifying captured payments are considered for refund. Each team side or participant may have a different payment state. Expiry does not prove provider reversal. Support investigates inconsistent records before confirming the outcome."
            ]
          },
          {
            "title": "RF5. No-shows and venue-side problems",
            "paragraphs": [
              "An absent player or team is generally ineligible for a no-show refund, subject to mandatory remedies and established circumstances. Other affected participants are reviewed independently. Host payments and participant payments remain distinct and are assessed on their own booking and payment facts.",
              "Verified venue failure qualifies for a full eligible refund or an alternative voluntarily accepted by the customer. This includes closure, unavailable booked equipment, double booking and material power or internet failures. An alternative is not imposed instead of an eligible remedy. Support manually reviews booking records, attendance, venue evidence and communications; no automatic refund or penalty is promised.",
              "Matchhai coordinates the remedy; a responsible zone bears agreed costs. Internal settlement or recovery issues do not remove applicable customer rights."
            ]
          },
          {
            "title": "RF6. Refund amount, destination and charges",
            "paragraphs": [
              "If an entire booking payment qualifies, the customer receives the full qualifying amount without a separate Matchhai commission deduction. This does not make every cancellation refundable or establish a standard partial-refund schedule. Matchhai commission comes from zone revenue, not a separate customer surcharge.",
              "Eligible refunds go to available player wallet balance for supported bookings. Player cash withdrawal is not supported under this model. Mandatory remedies and provider requirements may require another handling route. External provider charges and exceptions must be established from applicable transaction/provider rules; this policy does not impose an unverified fee deduction.",
              "Under normal settlement, zone earnings for a completed matchroom may become withdrawable after ordinary booking reconciliation. Amounts identified as subject to an open refund review remain excluded from the withdrawable balance. This does not prevent a customer from raising a later valid dispute or refund claim; it will be assessed under this policy even if zone earnings have already been withdrawn. The target is to process an eligible zone withdrawal within 24 hours after the earnings become withdrawable. This is an operating target, not a guarantee. Any post-withdrawal recovery or adjustment requires separate review and reconciliation; no automatic recovery is promised. These settlement and recovery arrangements have not been independently verified as implemented."
            ]
          },
          {
            "title": "RF7. How to request review",
            "paragraphs": [
              "Send your account/booking reference, payment reference where available, issue description and relevant evidence to support@matchhai.com. Do not send passwords or unnecessary identity documents. Call +92 323 8249779 or contact us at B5, Haq Square, Garden East, Karachi, Sindh, Pakistan. Specialized child-safety reports go to ovais@matchhai.com.",
              "We acknowledge requests within two business days. Reviews are case-dependent with status updates and no guaranteed resolution deadline. Acknowledgement confirms receipt; investigation assesses evidence; approval determines eligibility; confirmed processing precedes completed wallet credit. No guaranteed credit deadline applies. Support communicates the outcome and any additional information required."
            ]
          },
          {
            "title": "RF8. Changes to this policy",
            "paragraphs": [
              "Published revisions will identify changes and provide notice where required. Applicable booking terms and mandatory rights remain protected. Contact support@matchhai.com for clarification or review of a decision."
            ]
          }
        ] as PolicySection[]
      },
    privacy:       {
        "title": "Privacy Policy",
        "intro": "Information about Matchhai account, booking, payment, verification and privacy-request handling.",
        "lastUpdated": "18 November 2026",
        "sections": [
          {
            "title": "PP1. Who operates Matchhai and scope",
            "paragraphs": [
              "Matchhai is the trading name of Muhammad Ovais, a sole proprietor. This policy covers information associated with accounts, communications, bookings, payments, verification and website use in Karachi, Pakistan. Contact support@matchhai.com or +92 323 8249779. Our address is B5, Haq Square, Garden East, Karachi, Sindh, Pakistan."
            ]
          },
          {
            "title": "PP2. Account, profile and activity information",
            "paragraphs": [
              "Platform information includes account/contact details, profile and age information you provide, team membership, matchroom participation and booking activity. Visibility to other users depends on the feature and its settings. Avoid unnecessary sensitive information in profiles and communications.",
              "Search, discovery and linked-service activity may involve additional information depending on the feature. Information associated with those activities can identify an account or device; using a discovery feature does not necessarily make the activity anonymous."
            ]
          },
          {
            "title": "PP3. Identity verification",
            "paragraphs": [
              "Supported verification processes use Didit and involve verification information and results, including identity-document information where required. Matchhai's intended approach is provider-managed verification with minimum necessary results and identifiers retained internally. Masked or hashed identity-document identifiers can remain sensitive and require restricted access and justified retention.",
              "Provider processing and retention depend on applicable arrangements and notices. Provider involvement does not establish that all identity copies reside only with the provider or disappear when a Matchhai account is deleted. Contact support about verification-data requests; do not email documents unless a necessary secure process is specifically provided."
            ]
          },
          {
            "title": "PP4. Payments and wallet records",
            "paragraphs": [
              "Booking/payment operations involve transaction references, amounts, statuses, booking links and ledger records of balances, holds, captures, releases and refunds. Venue earnings and withdrawals differ from player wallet records. Records support reconciliation, accounting, disputes, fraud prevention and applicable obligations.",
              "Payment providers process information needed for their services under applicable arrangements and notices. Their involvement does not establish acceptance of every wallet/settlement arrangement. This policy does not announce PayFast activation or approval."
            ]
          },
          {
            "title": "PP5. Messages, media and service providers",
            "paragraphs": [
              "Messages, uploads and reports can contain information about you and others. Recipients may retain copies; account removal does not necessarily remove every recipient copy or justified dispute/report record. Do not share another person's sensitive information without appropriate authority.",
              "Providers support hosting, storage, communications, identity checks and payments. Relevant information may be shared with participating zones to fulfil bookings, authorized support/reviewers to resolve issues, and where legally required. Sharing should be limited to the relevant purpose and appropriate access/provider arrangements. Providers may process information in different locations under the arrangements applicable to the service. Contact support for information about relevant providers and processing locations."
            ]
          },
          {
            "title": "PP6. Website, device and diagnostic information",
            "paragraphs": [
              "Website and app operation can involve device/browser identifiers, connection information, diagnostic events and security logs. Collection depends on deployed features and providers. Search history, location information, cookies and linked services may involve additional processing when those features are used. Contact support for information about a feature and available privacy controls. Available device/service controls may govern optional processing; some information is necessary for a requested service or security."
            ]
          },
          {
            "title": "PP7. Purposes and retention",
            "paragraphs": [
              "Information supports accounts/features, bookings, communications, payments, support, safety, disputes and applicable obligations. Retention is category-specific and based on documented legal, financial, security or operational need; no single duration applies to all information.",
              "The intended deletion workflow is to disable account access when a valid request is accepted and revoke active sessions as part of that workflow, then anonymize or delete eligible profile information. These are operational requirements, not claims that each action is already automated or independently verified. Only records justified for financial, booking, KYC, security or dispute needs should be retained, with access restricted. Applicable requirements and verified provider arrangements govern third-party, recipient and backup records. Deletion does not promise immediate removal of every record. No fixed retention period is stated here."
            ]
          },
          {
            "title": "PP8. Account deletion and privacy requests",
            "paragraphs": [
              "Use the available deletion process or contact support@matchhai.com. Proportionate information may be needed to verify account authority and identify records. Do not send unnecessary identity documents.",
              "Deletion is not universal immediate hard deletion. Eligible information may be anonymized and access restricted while justified records remain under restricted use and applicable retention. Provider/backup/recipient copies may require separate handling. Support can explain outcomes and justified limitations. Access, correction and other applicable privacy-rights requests are assessed under applicable requirements."
            ]
          },
          {
            "title": "PP9. Eligibility and younger users",
            "paragraphs": [
              "The minimum account age is 13. Users younger than 18 should inform their parent or legal guardian and obtain permission before making paid bookings. Matchhai does not currently operate a technical system to verify parental permission. Age-range selection does not verify permission. Applicable legal requirements may call for additional safeguards; this draft does not establish legal compliance. Contact support@matchhai.com for privacy/age concerns and ovais@matchhai.com for specialized child-safety reports."
            ]
          },
          {
            "title": "PP10. Security, changes and contact",
            "paragraphs": [
              "Safeguards and access controls should reflect information sensitivity and purpose. Absolute security cannot be guaranteed. Protect credentials and report suspected unauthorized use. This notice does not promise a specific certification or universal deletion capability.",
              "We acknowledge support requests within two business days, with case-dependent updates. Acknowledgement does not guarantee completion of a privacy investigation within that period. Published revisions identify changes and provide notice where required. Contact support@matchhai.com, +92 323 8249779, or B5, Haq Square, Garden East, Karachi, Sindh, Pakistan."
            ]
          }
        ] as PolicySection[]
      },
    terms:       {
        "title": "Terms and Conditions",
        "intro": "Terms for Matchhai gaming and esports platform use and supported bookings in Karachi.",
        "lastUpdated": "18 November 2026",
        "sections": [
          {
            "title": "TC1. Operator, scope and acceptance",
            "paragraphs": [
              "Matchhai is the trading name of Muhammad Ovais, a sole proprietor. These Terms cover Matchhai's gaming and esports platform and supported bookings in Karachi, Pakistan. Read them with the Service Policy, Refund and Cancellation Policy and Privacy Policy. Mandatory customer rights remain protected."
            ]
          },
          {
            "title": "TC2. Eligibility and account responsibility",
            "paragraphs": [
              "You must be at least 13 to hold an account. Users younger than 18 should inform their parent or legal guardian and obtain permission before making paid bookings. Matchhai does not currently operate a technical system to verify parental permission. Registration or selecting an age range does not verify permission. Applicable legal requirements may call for additional safeguards; this statement does not establish legal compliance. Provide accurate information, protect credentials and report suspected misuse. Eligibility rules do not remove applicable Matchhai or zone responsibilities."
            ]
          },
          {
            "title": "TC3. Platform activities and conduct",
            "paragraphs": [
              "The seven service categories available through the live Matchhai app in Karachi are player discovery, matchroom creation and joining, team coordination, team challenges, messaging and communication, gaming-zone discovery and gaming-session booking. These are not seven separately priced products; individual session and zone details can vary.",
              "Use services lawfully and respectfully. Do not harass, threaten, exploit children, impersonate others, share unlawful content, misuse personal information, manipulate transactions or interfere with security. Report safety concerns through designated channels."
            ]
          },
          {
            "title": "TC4. Gaming zones and bookings",
            "paragraphs": [
              "Zones supply booked facilities, equipment and sessions; Matchhai coordinates bookings, payment records and support. Review location, time, capacity, price and disclosed conditions before confirming. Payment success and booking confirmation are distinct; pending payment or a redirect does not confirm a booking.",
              "Responsible zones bear agreed costs of verified service failures; Matchhai coordinates eligible customer remedies. This does not exclude mandatory rights or Matchhai's legal responsibilities. Alternatives require voluntary customer agreement."
            ]
          },
          {
            "title": "TC5. Prices, payments and wallet handling",
            "paragraphs": [
              "Prices are presented in PKR with applicable details before confirmation. Matchhai earns commission from zone revenue, not a separate customer surcharge. Under normal settlement, zone earnings for a completed matchroom may become withdrawable after ordinary booking reconciliation. Amounts identified as subject to an open refund review remain excluded from the withdrawable balance. This does not prevent a customer from raising a later valid dispute or refund claim; it will be assessed under this policy even if zone earnings have already been withdrawn. The target is to process an eligible zone withdrawal within 24 hours after the earnings become withdrawable. This is an operating target, not a guarantee. Any post-withdrawal recovery or adjustment requires separate review and reconciliation; no automatic recovery is promised. This process has not been independently verified as implemented.",
              "Available player wallet balances support eligible bookings. Held balance reserves funds; capture applies them; eligible release restores available balance. Refunds follow the Refund and Cancellation Policy. Player cash withdrawal is not supported under this model, subject to mandatory remedies/provider rules. Duplicate, disputed or late-confirmed payments require reconciliation; these Terms establish no unverified provider fee or settlement term."
            ]
          },
          {
            "title": "TC6. Cancellations, refunds and disputes about payment",
            "paragraphs": [
              "Eligibility depends on booking/payment states, actor and reason. Eligible participant holds may be released before lock where supported; host-created payments require scenario review. Cancellation, departure, rejection, expiry and captured-payment refunds are distinct; no universal cancellation window applies.",
              "Whole payments that qualify are refunded in full without separate Matchhai commission deduction, to available player wallet balance subject to mandatory exceptions. Not every cancellation qualifies. Verified venue failure permits a full eligible refund or voluntary alternative. Absent players/teams are generally ineligible for no-show refunds; other affected participants are reviewed independently. Host and participant payments remain distinct and are assessed using their own booking/payment state, actor and reason. Support uses booking/payment records, attendance, venue evidence and communications. No automated refund or penalty is promised."
            ]
          },
          {
            "title": "TC7. Teams, matchrooms and communications",
            "paragraphs": [
              "Hosts, organizers and participants must communicate accurate information and respect disclosed booking conditions. Organizing a group does not automatically authorize waiving another participant's rights. Each person's booking/payment position can require separate assessment. Communicate responsibly and avoid unnecessary sensitive information."
            ]
          },
          {
            "title": "TC8. User content and intellectual property",
            "paragraphs": [
              "You are responsible for submitted content and must have the rights needed to share it. You retain ownership and permit Matchhai to host, process and display content to the extent needed for requested platform functions, subject to the Privacy Policy and applicable rights. This does not transfer ownership or permit unrestricted unrelated commercial use. Respect others' content, branding and software rights."
            ]
          },
          {
            "title": "TC9. Availability and third-party services",
            "paragraphs": [
              "Features/capacity can vary and interruptions can occur. Interruption does not remove eligible remedies for paid bookings. Store, payment and identity providers have applicable terms and responsibilities; references do not establish approval of all Matchhai financial arrangements. These Terms do not announce PayFast activation."
            ]
          },
          {
            "title": "TC10. Restrictions, suspension and account deletion",
            "paragraphs": [
              "Proportionate restrictions may address misuse, safety or legal requirements, considering circumstances and applicable rights. Restrictions do not automatically extinguish wallet records or eligible refund rights. Contact support about restrictions/deletion. The intended deletion workflow is to disable account access when a valid request is accepted, revoke active sessions and anonymize or delete eligible profile information. These are operational requirements; this clause does not claim every action is already automated or independently verified. Only justified financial, booking, KYC, security or dispute records should be retained with access restricted. Applicable requirements and verified provider arrangements govern third-party, recipient and backup copies. Deletion does not promise immediate removal of every record or provider copy."
            ]
          },
          {
            "title": "TC11. Responsibility and mandatory rights",
            "paragraphs": [
              "Each party remains responsible for applicable obligations. Coordination and venue roles do not exclude duties that cannot lawfully be excluded. Nothing waives mandatory remedies or establishes a blanket disclaimer. Applicable laws of Pakistan govern these Terms subject to mandatory requirements. No exclusive court jurisdiction, monetary liability cap or compulsory arbitration rule is established here."
            ]
          },
          {
            "title": "TC12. Contact, disputes and changes",
            "paragraphs": [
              "Contact support@matchhai.com for general support, refunds and privacy, or call +92 323 8249779. Our address is B5, Haq Square, Garden East, Karachi, Sindh, Pakistan. Specialized child-safety reports go to ovais@matchhai.com.",
              "We acknowledge requests within two business days. Investigation is case-dependent with updates and no guaranteed resolution deadline. Approval and completed wallet credit differ; approved credit follows confirmed processing without a guaranteed credit deadline. Provide relevant references/evidence for review. This does not prevent mandatory legal remedies. Published changes identify the revised version and provide notice where required."
            ]
          }
        ] as PolicySection[]
      },
    childSafetyStandards: {
      title: "Child Safety Standards",
      header: "MatchHai Child Safety Standards",
      intro:
        "MatchHai is committed to child safety and maintaining a safe platform for users.",
      lastUpdated: "June 2026",
      contactEmail: "ovais@matchhai.com",
      sections: [
        {
          title: "Our commitment to child safety",
          paragraphs: [
            "MatchHai is committed to maintaining a safe platform and protecting children from harm, abuse, exploitation, and unsafe conduct.",
            "These standards explain our policy against Child Sexual Abuse and Exploitation (CSAE), Child Sexual Abuse Material (CSAM), grooming, exploitation, and any content or conduct that harms or endangers children."
          ]
        },
        {
          title: "Zero tolerance for CSAE and CSAM",
          paragraphs: [
            "MatchHai has a zero tolerance policy for Child Sexual Abuse and Exploitation (CSAE), Child Sexual Abuse Material (CSAM), grooming, exploitation, or any content or conduct that harms or endangers children.",
            "Users must not upload, share, request, promote, or engage in any content or behavior involving CSAE or CSAM. Any such activity is strictly prohibited on MatchHai."
          ]
        },
        {
          title: "Reporting child safety concerns",
          paragraphs: [
            "Users can report safety concerns through the in-app report/support options where available, or by contacting us at ovais@matchhai.com.",
            "Reports involving child safety, CSAE, or CSAM are treated as serious safety reports."
          ]
        },
        {
          title: "How MatchHai reviews and acts on reports",
          paragraphs: [
            "MatchHai reviews child safety reports and may take enforcement action based on the nature and severity of the report.",
            "Enforcement action may include removing illegal or harmful content, restricting features, suspending accounts, banning users, and preserving or sharing relevant information where required by applicable law."
          ]
        },
        {
          title: "Legal compliance and reporting",
          paragraphs: [
            "Where MatchHai becomes aware of CSAM or unlawful child exploitation activity, MatchHai may report it to relevant authorities, law enforcement, or child safety organizations where required by law.",
            "MatchHai may cooperate with valid legal requests and applicable child safety reporting obligations."
          ]
        },
        {
          title: "User conduct and account enforcement",
          paragraphs: [
            "Users must not use MatchHai to exploit, endanger, groom, harass, threaten, or otherwise harm children.",
            "Accounts involved in CSAE, CSAM, grooming, exploitation, or other child safety violations may be removed or permanently banned."
          ]
        },
        {
          title: "Child safety contact",
          paragraphs: [
            "For child safety compliance questions or urgent reports, contact MatchHai at ovais@matchhai.com."
          ]
        }
      ]
    },
    deleteAccount: {
        title: "Matchhai Account Deletion Request",
      intro:
        "You can submit an account-deletion request through the Matchhai app if that option is available, or contact support@matchhai.com. When a valid request is accepted, the intended workflow is to disable account access, revoke active sessions and anonymize or delete eligible profile information. These actions are operational requirements; this page does not claim that every step is already automated or independently verified. Only justified records should be retained with access restricted. Deletion does not promise immediate removal of every record.",
      lastUpdated: "18 November 2026",
      supportEmail: "support@matchhai.com",
      sections: [
        {
          title: "How to delete your account",
          paragraphs: [
            "If an account-deletion option is available in your Matchhai app, you can submit a request there. If you cannot find or use that option, email support@matchhai.com."
          ],
          bullets: [
            "Open the Matchhai app.",
            "Go to Profile or Account Settings if that option is shown.",
            "Select Delete Account and follow the on-screen instructions if available."
          ]
        },
        {
          title: "If you no longer have app access",
          paragraphs: [
            "You can request account deletion by emailing support@matchhai.com.",
            "Please send the request from the email address or phone number linked to your Matchhai account so we can verify authority to make the request and identify relevant records. Do not send unnecessary identity documents."
          ]
        },
        {
          title: "How information is handled",
          paragraphs: [
            "When a valid deletion request is accepted, the intended workflow is to disable account access and revoke active sessions, and to anonymize or delete eligible profile information. These steps are operational requirements, not claims that each action is already automated or independently verified.",
            "Only financial, booking, KYC, security or dispute records justified for retention should be kept, with access restricted. Applicable requirements and verified provider arrangements govern third-party, backup and recipient copies. Deletion does not promise immediate removal of every record. No fixed retention period is stated. Contact support to ask about the outcome and any justified limitations."
          ]
        },
        {
          title: "Privacy policy",
          paragraphs: [
            "For more information about privacy requests and information handling, review the Privacy Policy."
          ]
        },
        {
          title: "Contact",
          paragraphs: [
            "For account deletion or privacy questions, contact support@matchhai.com. We acknowledge account-deletion and privacy requests within two business days; this is not a deletion-completion or resolution deadline."
          ]
        }
      ]
    }
  },
  footer: {
    tagline: "Skill-based matchmaking, team coordination, and venue booking services.",
    linksTitle: "Links",
    legal: "(c) 2026 MatchHai. All rights reserved.",
    disclaimer: ""
  },
  errors: {
    boundaryTitle: "We hit a snag",
    boundaryMessage:
      "Please refresh the page or return to the homepage.",
    notFoundTitle: "Page not found",
    notFoundMessage:
      "The page you are looking for does not exist.",
    backHome: "Back to home"
  }
};
