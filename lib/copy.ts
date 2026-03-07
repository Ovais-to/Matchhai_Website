import { FeatureStatus } from "@/lib/featureStatus";
import { routes } from "@/lib/routes";

type StatusedItem = {
  title?: string;
  label?: string;
  description: string;
  status: FeatureStatus;
};

export const copy = {
  site: {
    name: "MatchHai",
    legalName: "MatchHai",
    location: "Business Address: B5, Haq Square, Garden East, Karachi, Sindh, Pakistan",
    description:
      "MatchHai is a Pakistan-first skill-based esports matchmaking and venue booking platform for LAN gaming and indoor sports.",
    defaultMeta: {
      title: "MatchHai - Skill-Based Esports Matchmaking and Venue Bookings",
      description:
        "Discover skill-based matchrooms, coordinate teams, and book LAN gaming and sports venues in Pakistan.",
      ogTitle: "MatchHai - Skill-based matchmaking, LAN gaming, and venue bookings",
      ogDescription:
        "A skill-based platform for esports matchmaking, LAN gaming sessions, and venue bookings in Pakistan."
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
      primary: { label: "Download for Android", href: `${routes.home}#download` },
      secondary: { label: "iOS Waitlist", href: `${routes.home}#download` }
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
    eyebrow: "Skill-based esports matchmaking, LAN gaming, and venue bookings",
    title: "Squad Up. Play.",
    subtitle:
      "MatchHai helps players create and join skill-based matchrooms, coordinate teams, and request bookings at partner venues. MatchHai does not offer gambling, betting, wagering, prize pools, or games of chance.",
    badges: [
      { label: "Skill-based matchrooms", status: "LIVE" as FeatureStatus },
      { label: "Team coordination", status: "LIVE" as FeatureStatus },
      { label: "Venue booking requests", status: "LIVE" as FeatureStatus }
    ],
    primaryCta: { label: "View business details", href: `${routes.home}#business-details` },
    secondaryCta: { label: "Contact MatchHai", href: `${routes.home}#contact` },
    canvasAriaLabel: "MatchHai neon arena hero graphic",
    fallbackAlt: "MatchHai hero background"
  },
  audience: {
    players: {
      title: "For players & teams",
      description:
        "Find the right matchroom, join with your role, and coordinate your squad before playtime.",
      bullets: [
        "Matchrooms with roles, slots, and join requests",
        "Team management with roster caps per game",
        "Skill fairness bands for balanced matchmaking",
        "Venue booking requests for LAN gaming and indoor sports"
      ],
      cta: { label: "Explore how it works", href: `${routes.home}#how-it-works` }
    },
    zones: {
      title: "For zone & court owners",
      description:
        "List your zone or court, publish pricing, and receive booking requests from players.",
      bullets: [
        "Venue onboarding for LAN gaming, sports, or hybrid spaces",
        "Equipment + pricing tiers per game or sport",
        "Booking requests with approvals and service fee collection"
      ],
      cta: { label: "See business details", href: `${routes.home}#business-details` }
    }
  },
  home: {
    whatIs: {
      title: "What is MatchHai",
      description:
        "MatchHai is a skill-based coordination platform for esports and venue bookings in Pakistan. Users pay for booking requests, venue usage, and platform service fees where applicable.",
      pillars: [
        {
          title: "Players",
          description:
            "Discover skill-based matchrooms and coordinate fair play sessions.",
          status: "LIVE" as FeatureStatus
        },
        {
          title: "Teams",
          description:
            "Manage rosters, roles, and private invites across supported titles.",
          status: "LIVE" as FeatureStatus
        },
        {
          title: "Venues",
          description:
            "Receive booking requests for LAN gaming and indoor sports sessions.",
          status: "LIVE" as FeatureStatus
        }
      ] as StatusedItem[]
    },
    businessDetails: {
      title: "Business details",
      description:
        "This section is provided for payment-partner and customer verification. MatchHai sells coordination and booking services for skill-based esports and venue sessions.",
      cards: [
        {
          title: "What users pay for",
          lines: [
            "Venue booking charges published by partner venues",
            "Platform service fee on confirmed bookings",
            "No gambling, betting, wagering, cash contests, or games of chance"
          ]
        }
      ]
    },
    howItWorksPreview: {
      title: "How it works",
      steps: [
        {
          title: "Create or join",
          description:
            "Players create or join a skill-based matchroom by game, city, and slot availability."
        },
        {
          title: "Coordinate",
          description:
            "Teams confirm roles, venue preference, and session timing with private codes or approvals."
        },
        {
          title: "Request booking",
          description:
            "A booking request is sent to the venue. Once the venue approves, the applicable booking charges and service fee are collected."
        }
      ]
    },
    trustPreview: {
      title: "Trust & safety",
      items: [
        {
          title: "Pakistan-first product",
          description: "Built for local devices, networks, and player needs."
        },
        {
          title: "Built for the local ecosystem",
          description: "Designed with zones, teams, and communities in mind."
        },
        {
          title: "No gambling or betting",
          description:
            "MatchHai does not provide wagering, prize betting, or games of chance."
        },
        {
          title: "Skill-based usage",
          description:
            "Players are matched and coordinated using game, role, and skill context."
        },
        {
          title: "Clear payment purpose",
          description:
            "Payments are for bookings and service fees, not for speculative outcomes."
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
      intro: "All customer-facing prices are shown in Pakistani Rupees. Venue rates may differ by game, equipment, and session length.",
      plans: [
        {
          name: "Platform service fee",
          price: "PKR 100",
          description: "Charged on eligible confirmed booking requests created through MatchHai."
        },
        {
          name: "Standard venue session",
          price: "PKR 500",
          description: "Example base rate for partner venue sessions. Actual venue pricing is set by the venue operator."
        },
        {
          name: "Monthly booking volume example",
          price: "PKR 50,000+",
          description: "Representative monthly transaction volume for merchant review and payment-partner assessment."
        }
      ]
    },
    ctaStrip: {
      title: "Need business verification details",
      description:
        "Review MatchHai's service model, legal policies, pricing, and contact details, or reach us directly for compliance verification.",
      primaryCta: { label: "View legal pages", href: routes.terms },
      secondaryCta: { label: "Contact MatchHai", href: `${routes.home}#contact` }
    }
  },
  howItWorks: {
    title: "How MatchHai works",
    intro:
      "A clear flow from player onboarding to skill-based coordination, venue approval, and booking confirmation.",
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
          "Booking requests follow a request, venue approval, payment, and confirmation flow.",
        status: "LIVE" as FeatureStatus
      },
      {
        title: "Compliance guardrails",
        description:
          "MatchHai is a skill-based service platform and does not support betting, gambling, or chance-based payouts.",
        status: "LIVE" as FeatureStatus
      }
    ],
    cta: { label: "Contact MatchHai", href: `${routes.home}#contact` }
  },
  games: {
    title: "Supported categories",
    intro:
      "MatchHai supports skill-based esports coordination and venue booking categories relevant to Pakistan.",
    esportsTitle: "Esports matchmaking",
    esports: [
      {
        title: "CS2",
        description: "Roles, 5v5, and structured matchrooms.",
        status: "LIVE" as FeatureStatus
      },
      {
        title: "FC 26",
        description: "Formations, 1v1 and 2v2 matchrooms.",
        status: "LIVE" as FeatureStatus
      },
      {
        title: "Tekken 8",
        description: "1v1 or 2v2 lobbies with role slots.",
        status: "LIVE" as FeatureStatus
      }
    ],
    sportsTitle: "Venue booking categories",
    sportsRoadmap: [
      { title: "Futsal", status: "LIVE" as FeatureStatus },
      { title: "Indoor Cricket", status: "LIVE" as FeatureStatus },
      { title: "Padel", status: "LIVE" as FeatureStatus },
      { title: "Pickleball", status: "LIVE" as FeatureStatus }
    ],
    disclaimer:
      "Not affiliated with Valve, Sony, EA, Microsoft, FACEIT, Steam, PlayStation, or Xbox. MatchHai does not provide gambling or betting services."
  },
  contact: {
    title: "Contact MatchHai",
    intro:
      "For partnerships, merchant verification, onboarding, and support, contact MatchHai through the details below. We respond within 1-2 business days.",
    detailsTitle: "Contact details",
    details: [
      { label: "Email", value: "admin@matchhai.com" },
      { label: "Phone", value: "+92 323 8249779" },
      { label: "Response time", value: "1-2 business days" },
      { label: "Business address", value: "B5, Haq Square, Garden East, Karachi, Sindh, Pakistan" }
    ]
  },
  legal: {
    privacy: {
      title: "Privacy policy",
      intro:
        "We only collect data necessary to run MatchHai and improve the experience.",
      lastUpdated: "January 26, 2026",
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "MatchHai is in production. This policy explains what we collect, why we collect it, and how we handle it when you use our website and related services."
          ]
        },
        {
          title: "Information we collect",
          bullets: [
            "Information you provide: name, email, phone, city, and any details you submit in forms (e.g., waitlist or venue onboarding).",
            "Transaction context: venue, game, booking amount, and booking timing needed to process confirmed services.",
            "Usage and device data: pages viewed, basic diagnostics, and device/browser information.",
            "Location signals: we may infer an approximate location (e.g., city) from your inputs or network signals to improve relevance.",
            "Cookies: small files used for basic site functionality and measurement."
          ]
        },
        {
          title: "How we use information",
          bullets: [
            "Respond to requests and inquiries.",
            "Operate waitlists and venue onboarding workflows.",
            "Process booking requests, service fees, and merchant verification workflows.",
            "Improve performance, reliability, and user experience.",
            "Detect and prevent abuse, fraud, or security issues."
          ]
        },
        {
          title: "Sharing",
          paragraphs: [
            "We do not sell your personal information. We may share limited information with service providers who help us run the website (e.g., hosting, analytics, email delivery), and only to perform those services."
          ]
        },
        {
          title: "Retention",
          paragraphs: [
            "We keep information only as long as needed for the purposes described above, unless a longer retention period is required for legal, security, or operational reasons."
          ]
        },
        {
          title: "Security",
          paragraphs: [
            "We use reasonable administrative and technical measures to protect information. No system is 100% secure, so we cannot guarantee absolute security."
          ]
        },
        {
          title: "Children",
          paragraphs: [
            "MatchHai is not intended for children under 13. If you believe a child has provided personal information, contact us and we will take appropriate steps."
          ]
        },
        {
          title: "Changes to this policy",
          paragraphs: [
            "We may update this policy from time to time. The 'Last updated' date indicates when changes were made."
          ]
        },
        {
          title: "Contact",
          paragraphs: [
            "If you have questions about privacy, contact us at admin@matchhai.com."
          ]
        }
      ]
    },
    terms: {
      title: "Terms of service",
      intro:
        "By using MatchHai you agree to these terms and responsible usage guidelines.",
      lastUpdated: "January 26, 2026",
      sections: [
        {
          title: "Acceptance",
          paragraphs: [
            "These Terms govern your use of the MatchHai website and related services. If you do not agree, do not use the site."
          ]
        },
        {
          title: "Eligibility",
          bullets: [
            "You must be able to form a legally binding agreement to use MatchHai.",
            "If you are using MatchHai for a business (e.g., a venue), you represent you have authority to bind that business."
          ]
        },
        {
          title: "Accounts and submissions",
          bullets: [
            "You are responsible for the accuracy of information you submit (e.g., waitlist and venue onboarding forms).",
            "Do not submit content that is illegal, harmful, misleading, or infringing."
          ]
        },
        {
          title: "Acceptable use",
          bullets: [
            "Do not attempt to disrupt the website or access non-public systems.",
            "Do not scrape, reverse engineer, or misuse the service.",
            "Do not impersonate others or misrepresent affiliations."
          ]
        },
        {
          title: "Bookings and payments",
          paragraphs: [
            "Booking flows and payments are live. Additional terms (including pricing, cancellations, and refunds) are shown at the time of booking."
          ]
        },
        {
          title: "No gambling or wagering",
          paragraphs: [
            "MatchHai is a skill-based matchmaking and venue-booking platform. It does not provide gambling, betting, wagering, games of chance, or prize-pool services."
          ]
        },
        {
          title: "Intellectual property",
          paragraphs: [
            "MatchHai and its content (excluding user-submitted content) are owned by MatchHai or its licensors and protected by applicable laws."
          ]
        },
        {
          title: "Disclaimers",
          paragraphs: [
            "MatchHai is provided on an 'as is' and 'as available' basis. We do not guarantee uninterrupted service, and we do not guarantee outcomes such as match availability, venue availability, or suitability."
          ]
        },
        {
          title: "Limitation of liability",
          paragraphs: [
            "To the maximum extent permitted by law, MatchHai will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the service."
          ]
        },
        {
          title: "Termination",
          paragraphs: [
            "We may suspend or restrict access if we believe there is misuse, security risk, or violation of these Terms."
          ]
        },
        {
          title: "Governing law",
          paragraphs: [
            "These Terms are governed by the laws of Pakistan. For questions, contact admin@matchhai.com."
          ]
        }
      ]
    },
    refund: {
      title: "Refund policy",
      intro:
        "Refund and cancellation policies are shown at the time of booking.",
      lastUpdated: "January 26, 2026",
      sections: [
        {
          title: "Current status",
          paragraphs: [
            "MatchHai is live and accepts payments for bookings."
          ]
        },
        {
          title: "Refund eligibility",
          bullets: [
            "Refund eligibility will depend on venue policies, timing of cancellation, and booking type (LAN session, court, or other venue).",
            "Any cancellation windows, partial refunds, no-show rules, and dispute flows will be displayed before you confirm a booking.",
            "If Team A does not arrive at the booked time, Team B will receive a refund of the amount they paid (subject to verification).",
            "If a technical issue at the zone/venue prevents the match from being played, both teams will receive a refund of the amount they paid (subject to verification).",
            "Technical issues may include power outages, internet failure, or equipment malfunction.",
            "Platform service fees, if any, are only charged for valid confirmed bookings."
          ]
        },
      {
        title: "Contact",
        paragraphs: [
            "If you have questions about refunds, contact admin@matchhai.com."
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
