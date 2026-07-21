/**
 * Products Database — Goodmech CNC Solutions
 * Data sourced from IndiaMART catalog: indiamart.com/goodmech-cnc-solutions/
 *
 * NOTE: Cosmos products were removed per client request (2026). Machines are now
 * Widma-only. Software is split into CAD/CAM and CAE/Simulation. Gauging systems
 * were replaced by 3D Printers (Go3D).
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  shortDesc?: string;
  specs?: Record<string, string>;
  features: string[];
  precision?: string;
  applications?: string[];
  brand?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  products: Product[];
}

// ─── Image URLs (sourced from IndiaMART CDN) ─────────────────────────────────
// TODO(client): supply official product images for the new software / 3D-printer
// entries and for the Widma turning machines flagged below.
const IMG = {
  // Grinding (Widma)
  hg200:    "https://5.imimg.com/data5/SELLER/Default/2025/6/517664964/RS/OQ/HY/5730925/widma-hobgrind-hg-200-tool-grinding-machine-500x500.jpeg",
  rx5neo:   "https://5.imimg.com/data5/SELLER/Default/2025/6/517663753/FE/AX/JK/5730925/widma-ecogrind-rx5-neo-tool-grinding-machine-1000x1000.jpg",
  // Turning (Widma)
  vtl:      "https://5.imimg.com/data5/SELLER/Default/2024/6/429587650/BY/IU/GP/5730925/vertical-turning-lathes-500x500.jpg",
  vt550:    "https://5.imimg.com/data5/SELLER/Default/2025/6/517660190/SR/FA/AR/5730925/turrent-type-verticle-turning-lathes-500x500.jpg",
  // CAD/CAM Software
  visi:     "https://5.imimg.com/data5/SELLER/Default/2025/6/517630933/XZ/KG/RN/5730925/visi-cad-cam-software-500x500.jpg",
  worknc:   "https://5.imimg.com/data5/SELLER/Default/2025/6/517631998/EP/WC/YT/5730925/worknc-cam-software-500x500.jpg",
  edgecam:  "https://5.imimg.com/data5/SELLER/Default/2025/6/517631421/NX/JL/OL/5730925/edgecam-cam-software-500x500.jpg",
  // CAE / Simulation
  simufact: "https://5.imimg.com/data5/SELLER/Default/2024/6/430054672/NR/BR/KG/5730925/forging-simulation-software-500x500.png",
};

// ─── CAD/CAM SOFTWARE ─────────────────────────────────────────────────────────
// VISI is a full CAD/CAM platform and intentionally appears in both lists.

const visi: Product = {
  id: "visi-cad",
  name: "VISI CAD/CAM Software",
  category: "CAD/CAM Software",
  brand: "VISI",
  image: IMG.visi,
  shortDesc: "World-leading mould & die CAD/CAE/CAM",
  description:
    "VISI is a world-leading PC-based CAD/CAE/CAM solution for the mould & die industry — covering 3D tool design, plastic flow analysis, stamping simulation, and multi-axis milling in a single integrated platform.",
  specs: {
    "Type":     "CAD / CAE / CAM",
    "Platform": "Windows PC",
    "Industry": "Mould & Die",
    "License":  "Lifetime, single-user",
    "Training": "In-person support included",
    "Demo":     "Free demo available",
  },
  features: [
    "Full 3D mould & die design",
    "Plastic flow analysis (CAE)",
    "Stamping & forming simulation",
    "2 to 5-axis milling CAM",
    "Wireframe, surface & solid modelling",
    "Up to 75% efficiency improvement reported",
  ],
  applications: ["Injection mould design", "Die manufacture", "Stamping tools", "Complex 5-axis programming"],
};

const designer: Product = {
  id: "designer-cad",
  name: "Designer CAD",
  category: "CAD Software",
  brand: "Designer",
  image: IMG.visi, // TODO(client): replace with official Designer image
  shortDesc: "Direct-modelling CAD for fast design edits",
  description:
    "Designer is a powerful direct-modelling CAD environment for creating and editing 3D geometry without history-tree constraints — ideal for fast concept work, reverse-engineering, and preparing models for downstream CAM and simulation.",
  specs: {
    "Type":     "CAD Software",
    "Modelling":"Direct (history-free) modelling",
    "Platform": "Windows PC",
    "License":  "Lifetime, single-user",
    "Demo":     "Free demo available",
  },
  features: [
    "History-free direct modelling",
    "Rapid concept and design edits",
    "Reverse-engineering of imported geometry",
    "Wide neutral-format import/export",
    "Seamless hand-off to CAM & simulation",
  ],
  applications: ["Concept design", "Reverse engineering", "Model repair & prep", "Design editing"],
};

export const CamSoftware: Product[] = [
  {
    id: "worknc-cam",
    name: "WorkNC CAM Software",
    category: "CAM Software",
    brand: "WorkNC",
    image: IMG.worknc,
    shortDesc: "Premier 2–5 axis CAM for tooling & mould/die",
    description:
      "WorkNC is a premier CAM system for 2 to 5-axis CNC programming specifically developed for the tooling, mould and die industry. Known for its automatic toolpath generation and robust collision detection.",
    specs: {
      "Type":     "CAM Software",
      "Axes":     "2 to 5-axis",
      "Platform": "Windows PC",
      "License":  "Lifetime, single-user",
      "Training": "In-person support included",
      "Demo":     "Free demo available",
    },
    features: [
      "2 to 5-axis automatic CNC programming",
      "3D stock-model-aware finishing",
      "Plunge roughing & undercut remachining",
      "ISO finishing & Z-level optimisation",
      "Spiral core roughing",
      "3+2 positional machining",
    ],
    applications: ["Mould cavity machining", "5-axis toolpath programming", "Automotive tooling", "High-speed machining"],
  },
  visi,
  {
    id: "edge-cam",
    name: "Edgecam Software",
    category: "CAM Software",
    brand: "Edgecam",
    image: IMG.edgecam,
    shortDesc: "Market-leading NC programming for turning, milling & EDM",
    description:
      "Edgecam is a market-leading CAM system for NC part programming across turning, milling, and Wire EDM operations. Intuitive interface with powerful automation for complex parts.",
    specs: {
      "Type":       "CAM Software",
      "Version":    "2024.1",
      "Operations": "Turning, Milling, Wire EDM",
      "Platform":   "Windows PC",
      "License":    "Lifetime, single-user",
      "Demo":       "Free demo available",
    },
    features: [
      "Turning, milling, and Wire EDM in one package",
      "2 to 5-axis milling strategies",
      "Automatic toolpath generation",
      "Multi-operation nesting",
      "Advanced stock-aware simulation",
      "Gang tool offset management",
    ],
    applications: ["NC part programming", "Turned components", "Wire EDM cutting", "General manufacturing"],
  },
  {
    id: "esprit-cam",
    name: "Esprit CAM Software",
    category: "CAM Software",
    brand: "Esprit",
    image: IMG.worknc,
    shortDesc: "Mill-turn & 5-axis CAM with 3,500+ post processors",
    description:
      "Esprit is a comprehensive CAM solution supporting mill-turn, multitasking, and simultaneous 5-axis milling across diverse CNC machines. Backed by 3,500+ certified post processors for universal machine compatibility.",
    specs: {
      "Type":            "CAM Software",
      "Axes":            "2 to 5-axis simultaneous",
      "Operations":      "Milling, Turning, Mill-Turn, Wire EDM",
      "Post Processors": "3,500+ certified",
      "License":         "Lifetime, single-user",
      "Demo":            "Free demo available",
    },
    features: [
      "Simultaneous 5-axis milling programming",
      "Mill-turn & multitasking support",
      "Swiss-type CNC turning",
      "Digital twin machine simulation",
      "3,500+ certified post processors",
      "High-speed toolpath generation",
    ],
    applications: ["Complex mill-turn parts", "Swiss-type turning", "5-axis aerospace components", "Multi-spindle production"],
  },
  {
    id: "esprit-edge",
    name: "Esprit EDGE CAM Software",
    category: "CAM Software",
    brand: "Esprit EDGE",
    image: IMG.worknc, // TODO(client): replace with official Esprit EDGE image
    shortDesc: "Next-generation, AI-driven CAM platform",
    description:
      "Esprit EDGE is the next-generation evolution of Esprit — an intelligent, fully integrated CAM platform with AI-assisted toolpaths, a digital machine twin, and edge-to-cloud connectivity for the modern smart factory.",
    specs: {
      "Type":         "CAM Software",
      "Axes":         "2 to 5-axis simultaneous",
      "Architecture": "Edge-to-cloud, AI-assisted",
      "Operations":   "Milling, Turning, Mill-Turn, Additive",
      "License":      "Subscription / perpetual",
      "Demo":         "Free demo available",
    },
    features: [
      "AI-optimised toolpath generation",
      "Built-in digital machine twin & verification",
      "Edge-to-cloud factory connectivity",
      "Knowledge-based machining automation",
      "Universal post-processing engine",
      "Mill, turn, mill-turn & additive support",
    ],
    applications: ["Smart-factory CAM", "5-axis & mill-turn production", "High-volume automation", "Digital manufacturing"],
  },
];

export const CadSoftware: Product[] = [visi, designer];

// ─── CAE / SIMULATION SOFTWARE ────────────────────────────────────────────────

export const Simulation: Product[] = [
  {
    id: "simufact-forming",
    name: "Simufact Forming & Sheet Metal",
    category: "Simulation Software",
    brand: "Simufact",
    image: IMG.simufact,
    shortDesc: "FEA-based forming, forging & sheet-metal simulation",
    description:
      "Simufact Forming is an advanced FEA-based process simulation suite for forging, forming, and sheet-metal operations. Reduce physical trials and optimise process parameters virtually before cutting metal.",
    specs: {
      "Type":      "FEA Simulation Software",
      "Processes": "Forging, Forming, Sheet Metal",
      "Platform":  "Windows PC",
      "License":   "Lifetime, single-user",
      "Demo":      "Free demo available",
    },
    features: [
      "Advanced FEA forming & sheet-metal simulation",
      "Forging, stamping & deep-drawing coverage",
      "Material behaviour and flow analysis",
      "Defect prediction & die stress analysis",
      "Integration with major CAD platforms",
      "Reduces physical prototyping cost",
    ],
    applications: ["Forging die design", "Sheet-metal forming", "Material flow analysis", "Virtual process validation"],
  },
  {
    id: "fti-forming-suite",
    name: "FTI Forming Suite",
    category: "Simulation Software",
    brand: "FTI",
    image: IMG.simufact, // TODO(client): replace with official FTI Forming Suite image
    shortDesc: "Sheet-metal feasibility, costing & die design",
    description:
      "FTI Forming Suite delivers fast, accurate sheet-metal forming simulation — from early feasibility and material cost estimation to blank development and die-face design — helping reduce material waste and tryout time.",
    specs: {
      "Type":      "Sheet-Metal Simulation Software",
      "Modules":   "FormingSuite, BlankWorks, CostOptimizer",
      "Platform":  "Windows PC",
      "License":   "Lifetime, single-user",
      "Demo":      "Free demo available",
    },
    features: [
      "Rapid formability & feasibility analysis",
      "Accurate blank shape development",
      "Material cost estimation & optimisation",
      "Die-face and addendum design",
      "Springback prediction",
      "Reduces scrap and tryout iterations",
    ],
    applications: ["Sheet-metal feasibility", "Blank nesting & costing", "Die-face design", "Automotive panels"],
  },
];

export const QualityAnalysis: Product[] = [
  {
    id: "qdas",
    name: "Q-DAS Quality Data Analysis",
    category: "Quality Analysis Software",
    brand: "Q-DAS",
    image: IMG.simufact, // TODO(client): replace with official Q-DAS image
    shortDesc: "Statistical quality & SPC data analysis",
    description:
      "Q-DAS is the industry standard for statistical quality analysis (SPC). It collects, evaluates, and reports measurement data across the production process — enabling data-driven quality control and full traceability.",
    specs: {
      "Type":      "Quality Data Analysis Software",
      "Methods":   "SPC, capability & measurement-system analysis",
      "Platform":  "Windows PC",
      "License":   "Lifetime, single-user",
      "Demo":      "Free demo available",
    },
    features: [
      "Statistical process control (SPC)",
      "Process capability (Cp/Cpk) analysis",
      "Measurement system analysis (MSA)",
      "Centralised quality data management",
      "Automated reporting & dashboards",
      "Full part traceability",
    ],
    applications: ["Production quality control", "SPC monitoring", "Capability studies", "Audit & traceability"],
  },
];

// ─── CNC GRINDING MACHINES (Widma) ────────────────────────────────────────────

export const GrindingMachines: Product[] = [
  {
    id: "widma-hg200",
    name: "Widma Hobgrind HG 200 Tool & Cutter Grinder",
    category: "CNC Tool Grinding",
    brand: "Widma",
    image: IMG.hg200,
    shortDesc: "5-axis universal tool & cutter grinder",
    description:
      "Universal automatic 5-axis CNC tool & cutter grinder for end mills, drills, reamers, and special cutting tools. Handles workpiece ODs from 20 mm to 230 mm.",
    specs: {
      "CNC Axes":          "5",
      "Type":              "Universal tool & cutter grinder",
      "Minimum OD":        "20 mm",
      "Maximum OD":        "230 mm",
      "Max Spindle Speed": "9,000 RPM",
      "Electrical Power":  "15 kVA",
      "Machine Weight":    "4,500 kg",
      "Floor Plan (W×D×H)":"2,450 × 2,950 × 2,150 mm",
    },
    features: [
      "5 fully simultaneous CNC axes",
      "OD range 20 – 230 mm",
      "9,000 RPM grinding spindle",
      "Automatic wheel dressing system",
      "Full CNC control for complex tool geometries",
      "In-process measurement capability",
    ],
    precision: "±0.001 mm",
    applications: ["End mill grinding", "Drill regrinding", "Reamer manufacturing", "Special cutting tools", "Gear hob grinding"],
  },
  {
    id: "widma-rx5neo",
    name: "Widma Ecogrind RX5 NEO Tool & Cutter Grinder",
    category: "CNC Tool Grinding",
    brand: "Widma",
    image: IMG.rx5neo,
    shortDesc: "Compact 5-axis tool grinder — 6,500 kg precision",
    description:
      "Advanced 5-axis CNC tool grinding machine with compact footprint and heavy 6,500 kg machine base for vibration-free, ultra-precise tool production.",
    specs: {
      "Model":             "Ecogrind RX5 NEO",
      "XY Axis Work Area": "300 × 300 mm",
      "Electrical Power":  "15 kVA",
      "Air Pressure":      "5 Bar",
      "Machine Weight":    "6,500 kg",
      "Floor Plan (W×D×H)":"2,150 × 3,000 × 2,200 mm",
      "Brand":             "Widma",
    },
    features: [
      "5-axis simultaneous grinding",
      "Heavy 6,500 kg base eliminates vibration",
      "Compact footprint (2,150 × 3,000 mm floor plan)",
      "Energy-efficient 15 kVA power",
      "Advanced coolant recycling system",
      "Suitable for carbide and HSS tools",
    ],
    precision: "±0.0005 mm",
    applications: ["Carbide tool grinding", "Complex cutting tool manufacture", "High-precision drills", "Custom tool profiles"],
  },
];

// ─── CNC TURNING MACHINES (Widma) ─────────────────────────────────────────────

export const TurningMachines: Product[] = [
  {
    id: "widma-vertical-turning",
    name: "Widma Vertical Turning Lathe Machines",
    category: "CNC Turning",
    brand: "Widma",
    image: IMG.vtl,
    shortDesc: "Heavy VTL for components up to 4,000 mm dia.",
    description:
      "Widma vertical turning lathes handle very large-diameter, heavy workpieces — up to 4,000 mm — that are difficult to chuck horizontally. Made in India, ideal for discs, flanges, and large bearing housings.",
    specs: {
      "Type":              "Vertical Turning Lathe (VTL)",
      "Table Diameter":    "up to 4,000 mm",
      "Max Turning Dia.":  "up to 4,000 mm",
      "Country of Origin": "Made in India",
      "Brand":             "Widma",
    },
    features: [
      "Workpiece capacity up to 4,000 mm diameter",
      "Vertical spindle for heavy gravity-held parts",
      "Full CNC axis control",
      "Rigid column construction",
      "Advanced tool changers",
    ],
    applications: ["Large flanges & discs", "Heavy bearing housings", "Aerospace structural rings", "Industrial equipment components"],
  },
  {
    id: "widma-vt550",
    name: "Widma Turret Type VT550 Vertical Turning Lathe",
    category: "CNC Turning",
    brand: "Widma",
    image: IMG.vt550,
    shortDesc: "Compact turret-type VTL — 550 mm turning dia.",
    description:
      "The VT550 is a vertical turning lathe for precision machining of medium-to-large components. Compact design with low table height and rigid cast-iron construction for stable, high-precision performance.",
    specs: {
      "Max Turning Dia.":   "550 mm",
      "Std Turning Dia.":   "450 mm",
      "Swing Over Bed":     "650 mm",
      "Max Turning Height": "700 mm",
      "Power":              "22 kW",
      "Turret Type":        "Electro-mechanical",
      "Model":              "VT550",
    },
    features: [
      "Compact design with low table height for easy loading",
      "Electro-mechanical turret",
      "Rigid cast-iron construction",
      "550 mm maximum turning diameter",
      "Suited for medium-to-large precision components",
    ],
    precision: "±0.005 mm",
    applications: ["Automotive", "Farm & construction equipment", "Railways & energy", "General engineering & tooling"],
  },
  {
    id: "widma-spm",
    name: "Widma Special Purpose Machines",
    category: "CNC Turning",
    brand: "Widma",
    image: IMG.vtl, // TODO(client): replace with a dedicated SPM image
    shortDesc: "Custom-engineered machines for dedicated tasks",
    description:
      "Widma designs and builds Special Purpose Machines (SPM) tailored to a customer's specific production requirement — purpose-built solutions where a standard machine doesn't fit the application.",
    specs: {
      "Type":          "Special Purpose Machine (SPM)",
      "Configuration": "Custom-engineered to requirement",
      "Brand":         "Widma",
    },
    features: [
      "Fully customised to your production process",
      "Purpose-built for dedicated machining tasks",
      "Engineered for high-volume repeatability",
      "Integrates with existing production lines",
      "Backed by Widma engineering support",
    ],
    applications: ["High-volume dedicated machining", "Custom production lines", "Specialised component manufacturing"],
  },
];

// ─── 3D PRINTERS (Go3D) — replaces former Gauging Systems ─────────────────────

export const Printers3D: Product[] = [
  {
    id: "go3d-fdm",
    name: "Go3D Industrial FDM 3D Printer",
    category: "3D Printers",
    brand: "Go3D",
    image: IMG.simufact, // TODO(client): replace with official Go3D printer image
    shortDesc: "Large-format industrial FDM additive system",
    description:
      "The Go3D industrial FDM 3D printer produces strong, accurate functional prototypes and end-use parts from engineering-grade thermoplastics — bringing fast, in-house additive manufacturing to the shop floor.",
    specs: {
      "Technology":   "FDM / FFF",
      "Build Volume": "300 × 300 × 400 mm",
      "Materials":    "ABS, PLA, PETG, Nylon, carbon-filled",
      "Layer Height": "from 0.05 mm",
      "Connectivity": "USB / LAN / Wi-Fi",
    },
    features: [
      "Large-format heated build chamber",
      "Engineering-grade thermoplastic support",
      "High dimensional accuracy",
      "Dual-extrusion with soluble supports",
      "Closed-loop print monitoring",
      "Easy in-house prototyping & tooling",
    ],
    precision: "±0.1 mm",
    applications: ["Functional prototypes", "Jigs & fixtures", "End-use parts", "Tooling & patterns"],
  },
  {
    id: "go3d-resin",
    name: "Go3D Precision Resin 3D Printer",
    category: "3D Printers",
    brand: "Go3D",
    image: IMG.simufact, // TODO(client): replace with official Go3D printer image
    shortDesc: "High-detail SLA/DLP resin printing",
    description:
      "The Go3D resin 3D printer delivers ultra-fine surface finish and crisp detail for precision prototypes, master patterns, and intricate components using SLA/DLP photopolymer technology.",
    specs: {
      "Technology":   "SLA / DLP resin",
      "Build Volume": "192 × 120 × 200 mm",
      "Materials":    "Standard, tough & castable resins",
      "Layer Height": "from 0.025 mm",
      "Connectivity": "USB / LAN / Wi-Fi",
    },
    features: [
      "Ultra-fine layer resolution",
      "Smooth, detail-rich surface finish",
      "Castable resins for investment casting",
      "Fast DLP exposure printing",
      "Compact, office-friendly footprint",
      "Ideal for master patterns",
    ],
    precision: "±0.025 mm",
    applications: ["High-detail prototypes", "Master patterns", "Investment-casting patterns", "Dental & jewellery models"],
  },
];
