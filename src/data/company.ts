/**
 * Company Information
 * Centralized source for all company details, contact, and branding
 */

/**
 * A single reachable contact point (phone / email). Kept as arrays so the
 * footer can list several numbers and mailboxes as the client requested.
 */
export interface ContactPoint {
  label: string;
  value: string;
  href: string;
}

/** A principal whose products Goodmech is authorised to resell. */
export interface Authorization {
  id: string;
  /** Short domain heading used in the footer, e.g. "CAE". */
  heading: string;
  /** Principal / OEM name as it should appear publicly. */
  principal: string;
  /** What Goodmech resells from this principal. */
  domain: string;
  /** Products carried under this principal, each with its own route. */
  products: { label: string; to: string; hero?: boolean }[];
  /** Route for the domain heading itself. */
  to: string;
}

export const companyInfo = {
  name: "Goodmech CNC Solutions",
  tagline: "Precision, reliability, and cutting-edge technology",
  established: 2022,

  // Locations. The Phagwara registered office and the Ludhiana office are the
  // full addresses carried on the quote page; Kapurthala is the Focal Point
  // branch. TODO(client): confirm the Kapurthala plot/street and PIN codes for
  // the Ludhiana office.
  locations: [
    {
      name: "Head Office — Phagwara",
      lines: ["11B/1, New Model Town", "Phagwara - 144401", "Punjab, India"],
      region: "Phagwara"
    },
    {
      name: "Office — Ludhiana",
      lines: [
        "4C, 4th Floor, SCO 17, Gol Market",
        "Opposite FCI Godowns, Metro Road",
        "Jamalpur Phase 3, Ludhiana, Punjab, India"
      ],
      region: "Ludhiana"
    },
    {
      name: "Branch — Kapurthala",
      lines: ["Focal Point", "Kapurthala - 144601", "Punjab, India"],
      region: "Kapurthala"
    }
  ],

  // TODO(client): supply any further direct / service numbers — the footer
  // renders every entry in these arrays.
  phones: [
    { label: "Sales", value: "+91-9316004777", href: "tel:+919316004777" }
  ] as ContactPoint[],

  emails: [
    { label: "Director", value: "munish.chopra@goodmech.in", href: "mailto:munish.chopra@goodmech.in" }
  ] as ContactPoint[],

  // Primary contact
  primaryContact: {
    name: "Munish Chopra",
    title: "Director",
    phone: "+91-9316004777",
    email: "munish.chopra@goodmech.in"
  },

  // Web & Social
  web: {
    website: "https://goodmech.in",
    indiamart: "https://www.indiamart.com/goodmech-cnc-solutions/",
    whatsapp: "https://wa.me/919316004777"
  },

  /**
   * Authorised reseller portfolio. This is the single source of truth for the
   * "we are the authorized resellers of ..." statement and the footer product
   * columns, so the principal → product mapping never drifts between them.
   */
  authorizations: [
    {
      id: "cadence",
      heading: "CAE",
      principal: "Cadence Design Systems",
      domain: "CAE / Simulation Software",
      products: [
        { label: "Simufact Forming", to: "/simufact", hero: true },
        { label: "FTI Forming Suite", to: "/cae" }
      ],
      to: "/cae"
    },
    {
      id: "hexagon",
      heading: "CAM",
      principal: "Hexagon Manufacturing Intelligence",
      domain: "CAM Software",
      products: [
        { label: "WorkNC", to: "/worknc", hero: true },
        { label: "Esprit", to: "/software" },
        { label: "Edgecam", to: "/software" },
        { label: "VISI", to: "/software" }
      ],
      to: "/software"
    },
    {
      id: "dassault",
      heading: "CAD",
      principal: "Dassault Systèmes",
      domain: "CAD Software",
      products: [
        { label: "SOLIDWORKS", to: "/solidworks", hero: true }
      ],
      to: "/solidworks"
    },
    {
      id: "widma",
      heading: "CNC MACHINES",
      principal: "WIDMA (Kennametal)",
      domain: "CNC Machines",
      products: [
        { label: "Grinding Machines", to: "/machines" },
        { label: "Turning Machines", to: "/machines" },
        { label: "Special Purpose Machines", to: "/machines" },
        { label: "Deep Hole Drilling", to: "/machines" }
      ],
      to: "/machines"
    },
    {
      id: "go3d",
      heading: "3D PRINTERS",
      principal: "GO3D",
      domain: "3D Printers",
      products: [
        { label: "Industrial FDM", to: "/printers" },
        { label: "Precision Resin", to: "/printers" }
      ],
      to: "/printers"
    }
  ] as Authorization[],

  /**
   * One-line statement of what Goodmech is authorised to resell. Mirrored in
   * the index.html meta description; the footer renders `authorizations`
   * directly so each principal is clickable.
   */
  resellerStatement:
    "Authorized resellers of Cadence Design Systems, Hexagon Manufacturing Intelligence and Dassault Systèmes for CAE/CAM & CAD software, WIDMA for CNC machines and GO3D for 3D printers.",

  // Company details
  details: {
    nature: "Trader - Wholesaler/Distributor",
    employees: "Upto 10 People",
    certification: "Authorized WIDMA (Kennametal) Dealer"
  },

  // About text
  about: `Goodmech CNC Solutions, based in Phagwara, Punjab, is a trusted dealer of WIDMA (Kennametal) CNC grinding & turning machines, world-class CAD/CAM and CAE simulation software, and Go3D 3D printers, backed by 27 years of industry experience.

We are committed to delivering precision, reliability, and cutting-edge technology to meet the evolving needs of the manufacturing industry. With a focus on quality and customer satisfaction, we serve a wide range of industrial clients across India.

Partner with us for advanced CNC solutions that drive productivity and innovation.`,

  // Key values
  values: [
    {
      title: "27 Years Experience",
      description: "Industry expertise and proven track record",
      icon: "verified"
    },
    {
      title: "Authorized WIDMA Dealer",
      description: "Genuine Kennametal-WIDMA machines & support",
      icon: "badge"
    },
    {
      title: "Complete Support",
      description: "From Installation to CAM integration",
      icon: "engineering"
    },
    {
      title: "24/7 Technical Support",
      description: "Dedicated engineering team always ready",
      icon: "support_agent"
    }
  ],

  // Certifications
  certifications: [
    "27 Years of Experience",
    "Authorized WIDMA Dealer",
    "24/7 Tech Support"
  ]
};

// FAQ data
export const faqData = [
  {
    question: "What makes Goodmech CNC Solutions different?",
    answer: "We combine cutting-edge technology with personalized service. Our team of experts provides not just machines, but complete solutions tailored to your manufacturing needs."
  },
  {
    question: "Do you provide installation and training?",
    answer: "Yes, we offer comprehensive installation, calibration, and operator training at your facility to ensure you get maximum value from your CNC investment."
  },
  {
    question: "What is your warranty and after-sales support?",
    answer: "All our machines come with comprehensive warranty and lifetime technical support. We have a dedicated team available 24/7 for emergency assistance."
  },
  {
    question: "Can you customize machines for specific requirements?",
    answer: "Absolutely. We work with customers to understand their specific needs and can configure machines, add accessories, or integrate specialized software solutions."
  },
  {
    question: "What is your lead time for delivery?",
    answer: "Standard lead time is 4-6 weeks from order. We can often expedite for urgent requirements. Contact us for specific delivery schedules."
  },
  {
    question: "Do you support older machine models?",
    answer: "Yes, we provide parts, service, and upgrades for a wide range of CNC machines, including legacy systems."
  }
];

// Service offerings
export const services = [
  {
    id: "consultation",
    title: "Technical Consultation",
    description: "Expert advice on selecting the right CNC solution for your production needs",
    icon: "chat"
  },
  {
    id: "installation",
    title: "Installation & Commissioning",
    description: "Professional installation, calibration, and system verification",
    icon: "build"
  },
  {
    id: "training",
    title: "Operator & Engineer Training",
    description: "Comprehensive training programs for your team",
    icon: "school"
  },
  {
    id: "support",
    title: "24/7 Technical Support",
    description: "Round-the-clock support from experienced technicians",
    icon: "support_agent"
  },
  {
    id: "maintenance",
    title: "Preventive Maintenance",
    description: "Regular maintenance programs to maximize uptime",
    icon: "handyman"
  },
  {
    id: "upgrades",
    title: "System Upgrades",
    description: "Modernize and upgrade existing machinery",
    icon: "update"
  }
];
