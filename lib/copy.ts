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
    location: "Garden East, Karachi",
    description:
      "MatchHai is a Pakistan-first esports matchmaking platform for esports, LAN gaming (PC + console), and sports bookings.",
    defaultMeta: {
      title: "MatchHai - Esports Matchmaking, LAN Gaming & Sports Bookings",
      description:
        "Discover matchrooms, manage teams, and book LAN gaming (PC + console) and sports venues.",
      ogTitle: "MatchHai - Pakistan-first matchmaking, LAN gaming, and bookings",
      ogDescription:
        "Matchrooms today, with LAN gaming (PC + console) and sports venue bookings."
    }
  },
  statusLabels: {
    LIVE: "LIVE",
    BETA: "BETA",
    PLANNED: "LIVE",
    COMING_SOON: "LIVE"
  },
  nav: {
    skipToContent: "Skip to content",
    links: [
      { label: "Home", href: routes.home },
      { label: "How it works", href: routes.howItWorks },
      { label: "Games", href: `${routes.home}#games` },
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
    eyebrow: "Pakistan-first esports matchmaking - LAN + sports bookings",
    title: "Squad Up. Play.",
    subtitle:
      "MatchHai is a platform for esports (CS2, FC 26, Tekken 8) and sports (Indoor Cricket, Futsal, Padel, Pickleball), where players can find matchups, build teams, and book venues in one workflow.",
    badges: [
      { label: "Matchrooms", status: "LIVE" as FeatureStatus },
      { label: "Teams", status: "LIVE" as FeatureStatus },
      { label: "LAN gaming bookings", status: "LIVE" as FeatureStatus }
    ],
    primaryCta: { label: "Get Android app", href: `${routes.home}#download` },
    secondaryCta: { label: "Join iOS waitlist", href: `${routes.home}#download` },
    canvasAriaLabel: "MatchHai neon arena hero graphic",
    fallbackAlt: "MatchHai hero background"
  },
  trustSignals: {
    title: "Trust-first by design",
    items: [
      "Pakistan-first product, built for local bandwidth and devices",
      "Built for the local gaming ecosystem and zone & court operators",
      "Transparent beta labeling - no overclaims",
      "LAN gaming and sports bookings are live and clearly labeled",
      "No dark patterns, fake counters, or misleading scarcity"
    ]
  },
  audience: {
    players: {
      title: "For players & teams",
      description:
        "Find the right matchroom, join with your role, and keep your squad organized.",
      bullets: [
        "Matchrooms with roles, slots, and join requests",
        "Team management with roster caps per game",
        "Skill fairness bands + ELO rating (0-100)",
        "LAN gaming sessions (PC + console) booking"
      ],
      cta: { label: "Explore how it works", href: `${routes.home}#how-it-works` }
    },
    zones: {
      title: "For zone & court owners",
      description:
        "List your zone or court and set pricing tiers for LAN + sports bookings.",
      bullets: [
        "Zone & court onboarding for LAN gaming, sports, or hybrid spaces",
        "Equipment + pricing tiers per game or sport",
        "Booking intents with approvals + payment flow"
      ],
      cta: { label: "List your zone or court", href: `${routes.home}#audience` }
    }
  },
  home: {
    whatIs: {
      title: "What is MatchHai",
      description:
        "MatchHai brings matchmaking, team management, and venue booking into a single flow for esports and sports communities in Pakistan.",
      pillars: [
        {
          title: "Players",
          description:
            "Discover matchrooms and play with balanced skill bands.",
          status: "LIVE" as FeatureStatus
        },
        {
          title: "Teams",
          description:
            "Manage rosters, roles, and matchroom invites across games.",
          status: "LIVE" as FeatureStatus
        },
        {
          title: "Zones & courts",
          description:
            "Onboard your venue or court and get ready for booking intents.",
          status: "LIVE" as FeatureStatus
        }
      ] as StatusedItem[]
    },
    howItWorksPreview: {
      title: "How it works",
      steps: [
        {
          title: "Find",
          description:
            "Choose your game, city, and skill band to browse matchrooms."
        },
        {
          title: "Matchroom",
          description:
            "Join with your role, or request a slot with a join code."
        },
        {
          title: "Book & play",
          description:
            "Submit a booking intent for a zone, court, or LAN session, get approvals, and confirm playtime."
        }
      ]
    },
    gamesPreview: {
      title: "Esports and sports",
      esports: ["CS2", "FC 26", "Tekken 8"],
      sportsRoadmap: ["Futsal", "Indoor Cricket", "Padel", "Pickleball"]
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
          title: "Beta transparency",
          description:
            "Every capability is labeled clearly - no overclaims."
        },
        {
          title: "Fairness bands",
          description:
            "Skill bands and ELO ratings are in BETA and improve over time."
        },
        {
          title: "LAN gaming (PC + console)",
          description:
            "LAN gaming sessions and venue bookings are live."
        },
        {
          title: "Local-first performance",
          description:
            "Optimized for Pakistani networks and low-end Android devices."
        }
      ]
    },
    pricing: {
      title: "Pricing",
      intro: "User pricing packages are listed in Pakistani Rupees (PKR). Final billing details will be published before launch.",
      plans: [
        {
          name: "User Package 1",
          price: "Rs. 100",
          description: "Starter user package for basic matchmaking and team participation."
        },
        {
          name: "User Package 2",
          price: "Rs. 200",
          description: "Advanced user package with enhanced matchmaking and team workflow access."
        },
        {
          name: "User Package 3",
          price: "Rs. 500",
          description: "Premium user package with full matchmaking, team, and booking access."
        }
      ]
    },
    ctaStrip: {
    title: "Ready to play or list your zone or court",
      description:
        "Download the Android app today or join the iOS waitlist.",
      primaryCta: { label: "Download for Android", href: `${routes.home}#download` },
      secondaryCta: { label: "Join iOS waitlist", href: `${routes.home}#download` }
    }
  },
  howItWorks: {
    title: "How MatchHai works",
    intro:
      "A clear flow from onboarding to matchroom coordination and booking intent approvals.",
    steps: [
      {
        title: "Onboard",
        description:
          "Choose games, set your location, and link external platforms.",
        status: "LIVE" as FeatureStatus
      },
      {
        title: "Matchrooms",
        description:
          "Structured slots, roles, join requests, and private codes.",
        status: "LIVE" as FeatureStatus
      },
      {
        title: "Booking intents",
        description:
          "Draft -> approvals -> payment -> confirmed.",
        status: "LIVE" as FeatureStatus
      },
      {
        title: "Skill fairness",
        description:
          "Bands + ELO ratings (0-100) to help balance teams.",
        status: "LIVE" as FeatureStatus
      }
    ],
    cta: { label: "Get the app", href: `${routes.home}#download` }
  },
  zones: {
    title: "Zones & courts for gaming and sports",
    intro:
      "Bring visibility to your venue or court, fill slots faster, and manage pricing tiers.",
    types: [
      {
        title: "Gaming zones",
        description:
          "PC and console setups with equipment details and pricing."
      },
      {
        title: "Sports courts",
        description:
          "Courts, pitches, and indoor facilities with clear time slots."
      },
      {
        title: "Hybrid venues",
        description:
          "Offer esports and sports in one managed booking flow."
      }
    ],
    benefits: [
      {
        title: "Visibility",
        description: "Reach players searching by game and location."
      },
      {
        title: "Pricing tiers",
        description: "Set equipment-based or time-based pricing."
      },
      {
        title: "Promotions",
        description: "Highlight peak and off-peak offers."
      },
      {
        title: "Analytics",
        description: "Demand insights and analytics."
      }
    ],
    leadFormTitle: "List your zone or court",
    leadFormDescription:
      "Share your details and we will help you onboard."
  },
  games: {
    title: "Supported games",
    intro:
      "MatchHai supports the most active esports and sports in Pakistan.",
    esportsTitle: "Esports",
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
    sportsTitle: "Sports",
    sportsRoadmap: [
      { title: "Futsal", status: "LIVE" as FeatureStatus },
      { title: "Indoor Cricket", status: "LIVE" as FeatureStatus },
      { title: "Padel", status: "LIVE" as FeatureStatus },
      { title: "Pickleball", status: "LIVE" as FeatureStatus }
    ],
    disclaimer:
      "Not affiliated with Valve, Sony, EA, Microsoft, FACEIT, Steam, PlayStation, or Xbox."
  },
  features: {
    title: "Core platform features",
    intro:
      "MatchHai's modules connect players, teams, and zones & courts without overpromising.",
    sections: [
      {
        title: "Matchrooms",
        items: [
          {
            label: "Slots and roles",
            description: "Structured slots by role or position.",
            status: "LIVE" as FeatureStatus
          },
          {
            label: "Join codes",
            description: "Private access and approved joins.",
            status: "LIVE" as FeatureStatus
          }
        ]
      },
      {
        title: "Teams",
        items: [
          {
            label: "Roster caps",
            description: "Game-specific caps and roster roles.",
            status: "LIVE" as FeatureStatus
          },
          {
            label: "Team invites",
            description: "Invite players into teams or matchrooms.",
            status: "LIVE" as FeatureStatus
          }
        ]
      },
      {
        title: "Zones",
        items: [
          {
            label: "Zone onboarding",
            description: "Gaming, sports, and hybrid zone profiles.",
            status: "LIVE" as FeatureStatus
          },
          {
            label: "Equipment & pricing",
            description: "Pricing tiers with equipment details.",
            status: "LIVE" as FeatureStatus
          }
        ]
      },
      {
        title: "Bookings",
        items: [
          {
            label: "Booking intents",
            description: "Draft -> approvals -> confirmed flow.",
            status: "LIVE" as FeatureStatus
          },
          {
            label: "Payments",
            description: "Integrated payments.",
            status: "LIVE" as FeatureStatus
          },
          {
            label: "Disputes",
            description: "Issue resolution workflows.",
            status: "LIVE" as FeatureStatus
          }
        ]
      },
      {
        title: "Skill & identity",
        items: [
          {
            label: "Skill bands + ELO",
            description: "0-100 rating with tiered bands.",
            status: "LIVE" as FeatureStatus
          },
          {
            label: "Platform linking",
            description: "Steam, FACEIT, PSN, Xbox, EA links.",
            status: "LIVE" as FeatureStatus
          }
        ]
      },
      {
        title: "Operations",
        items: [
          {
            label: "Notifications",
            description: "Booking and matchroom updates.",
            status: "LIVE" as FeatureStatus
          },
          {
            label: "Analytics",
            description: "Zone insights and trends.",
            status: "LIVE" as FeatureStatus
          }
        ]
      }
    ]
  },
  download: {
    title: "Download MatchHai",
    intro:
      "Available on Android today. iOS launches via waitlist.",
    androidCta: { label: "Download for Android", href: `${routes.home}#download` },
    iosCta: { label: "Join iOS waitlist", href: "#waitlist" },
    waitlistTitle: "iOS waitlist",
    waitlistDescription:
      "Get notified when the iOS app is ready."
  },
  faq: {
    title: "Frequently asked questions",
    intro: "Clear answers for players, teams, and zone & court owners.",
    toggleLabels: {
      open: "-",
      closed: "+"
    },
    items: [
      {
        question: "Is MatchHai live",
        answer:
          "MatchHai is live. Matchrooms, teams, LAN gaming, and bookings are available."
      },
      {
        question: "Do I need to be verified to join",
        answer:
          "Verification workflows are available. You can join matchrooms with approved access."
      },
      {
        question: "Which games are supported",
        answer:
          "CS2, FC 26, and Tekken 8 are supported. Physical sports are on the roadmap."
      },
      {
        question: "Can zone or court owners list their venue",
        answer:
          "Yes. Submit a zone interest form and our team will reach out for onboarding."
      }
    ]
  },
    contact: {
      title: "Contact MatchHai",
      intro:
        "For partnerships, onboarding, and support, contact us through the form below. We respond within 1-2 business days.",
      detailsTitle: "Contact details",
      details: [
        { label: "Email", value: "admin@matchhai.com" },
        { label: "Phone", value: "+92 323 8249779" },
        { label: "Response time", value: "1-2 business days" },
        { label: "Business address", value: "Garden East, Karachi" }
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
            "Technical issues may include power outages, internet failure, or equipment malfunction."
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
    tagline: "LAN-first matchmaking, team building, and bookings.",
    linksTitle: "Links",
    legal: "(c) 2025 MatchHai. All rights reserved.",
    disclaimer: ""
  },
  forms: {
    validation: {
      required: "This field is required.",
      email: "Enter a valid email address."
    },
    loading: "Sending...",
    waitlist: {
      title: "Join the iOS waitlist",
      description: "We will email you when iOS is ready.",
      fields: {
        name: { label: "Full name", placeholder: "Your name" },
        email: { label: "Email", placeholder: "you@example.com" },
        city: { label: "City", placeholder: "Lahore" }
      },
      honeypot: {
        label: "Leave this field empty",
        placeholder: "Do not fill"
      },
      submit: "Join waitlist",
      success: {
        title: "You are on the list",
        message: "We will notify you when iOS is ready."
      },
      error: {
        title: "Something went wrong",
        message: "Please try again in a moment."
      }
    },
    zoneInterest: {
      title: "List your zone or court",
      description: "Tell us about your venue and we will follow up.",
      fields: {
        zoneName: { label: "Zone or court name", placeholder: "Your venue name" },
        city: { label: "City", placeholder: "Karachi" },
        contactName: { label: "Contact name", placeholder: "Your name" },
        phone: { label: "Phone", placeholder: "+92 300 0000000" },
        email: { label: "Email", placeholder: "you@example.com" },
        games: { label: "Games or sports", placeholder: "CS2, Futsal" }
      },
      honeypot: {
        label: "Leave this field empty",
        placeholder: "Do not fill"
      },
      submit: "Submit zone or court interest",
      success: {
        title: "Thanks for reaching out",
        message: "Our team will contact you shortly."
      },
      error: {
        title: "Submission failed",
        message: "Please try again in a moment."
      }
    },
    contact: {
      title: "Contact us",
      description: "Share your query and we will respond quickly.",
      fields: {
        name: { label: "Full name", placeholder: "Your name" },
        email: { label: "Email", placeholder: "you@example.com" },
        message: { label: "Message", placeholder: "How can we help'" }
      },
      honeypot: {
        label: "Leave this field empty",
        placeholder: "Do not fill"
      },
      submit: "Send message",
      success: {
        title: "Message received",
        message: "We will reply within 1-2 business days."
      },
      error: {
        title: "Message not sent",
        message: "Please try again in a moment."
      }
    }
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
