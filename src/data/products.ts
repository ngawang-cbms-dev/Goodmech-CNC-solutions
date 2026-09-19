/**
 * Products Database — Goodmech CNC Solutions
 * Data sourced from IndiaMART catalog: indiamart.com/goodmech-cnc-solutions/
 *
 * NOTE: Cosmos products were removed per client request (2026). Machines are now
 * Widma-only. Software is split into CAD/CAM and CAE/Simulation. Gauging systems
 * were replaced by 3D Printers (Go3D).
 */

// CAD/CAM software artwork — client-supplied images in src/assets/pictures,
// bundled & hashed by Vite. Filenames match the category items (Issue #3).
import imgWorkNC from '../assets/pictures/WorkNC CAM Software.jpeg';
import imgVisi from '../assets/pictures/VISI CAD_CAM Software.jpeg';
import imgEdgecam from '../assets/pictures/EdgeCam software.jpeg';
import imgEsprit from '../assets/pictures/Esprit CAM Software.jpeg';
import imgEspritEdge from '../assets/pictures/Espirit Edge CAM software.jpeg';
// CAE/Simulation + 3D Printer artwork (client-supplied)
import imgSimufact from '../assets/pictures/Simufact Forming & Sheet Metal.jpeg';
import imgFTI from '../assets/pictures/FTI Forming Suite.jpeg';
import imgGo3dFdm from '../assets/pictures/Go3D Industrial FDM 3D Printer.jpeg';
import imgGo3dResin from '../assets/pictures/Go3D Precision Resin 3D Printer.jpeg';

export interface Product {
  id: string;
  name: string;
  category: string;
  /** Optional — cards fall back to a branded wordmark tile when absent. */
  image?: string;
  description: string;
  shortDesc?: string;
  specs?: Record<string, string>;
  features: string[];
  precision?: string;
  applications?: string[];
  /** Product/line name shown on the card badge, e.g. "WorkNC". */
  brand?: string;
  /** Principal whose portfolio this belongs to, e.g. "Dassault Systèmes". */
  vendor?: string;
  /** Set on HERO products — links the card through to its dedicated page. */
  heroSlug?: string;
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
  hg200: "https://5.imimg.com/data5/SELLER/Default/2025/6/517664964/RS/OQ/HY/5730925/widma-hobgrind-hg-200-tool-grinding-machine-500x500.jpeg",
  rx5neo: "https://5.imimg.com/data5/SELLER/Default/2025/6/517663753/FE/AX/JK/5730925/widma-ecogrind-rx5-neo-tool-grinding-machine-1000x1000.jpg",
  // Turning (Widma)
  vtl: "https://5.imimg.com/data5/SELLER/Default/2024/6/429587650/BY/IU/GP/5730925/vertical-turning-lathes-500x500.jpg",
  vt550: "https://5.imimg.com/data5/SELLER/Default/2025/6/517660190/SR/FA/AR/5730925/turrent-type-verticle-turning-lathes-500x500.jpg",
  // CAD/CAM Software (client-supplied artwork — Issue #3)
  visi: imgVisi,
  worknc: imgWorkNC,
  edgecam: imgEdgecam,
  esprit: imgEsprit,
  espritEdge: imgEspritEdge,
  // CAE / Simulation + 3D Printers (client-supplied artwork — Issue #3)
  simufact: imgSimufact,
  fti: imgFTI,
  go3dFdm: imgGo3dFdm,
  go3dResin: imgGo3dResin,
  // Special Purpose Machines (Widma) — hotlinked from widma.com CDN
  // TODO(client): download & self-host these in /public for long-term stability.
  spmRotaryIndex: "https://www.widma.com/wp-content/uploads/2022/01/Multi-operaton-rotary-indexing-1024x683-1.webp",
  spmValveSeat: "https://www.widma.com/wp-content/uploads/2022/01/Valve-Seat--1024x683.webp",
  spmFineBoring: "https://www.widma.com/wp-content/uploads/2022/01/Fine-boring-Machine-1024x683.png",
  spmMultiSpindle: "https://www.widma.com/wp-content/uploads/2022/01/Multi-spindle-machine.webp",
  spmFacingCenter: "https://www.widma.com/wp-content/uploads/2022/01/Facing-_-Centering-machine-1024x683.webp",
  spmSpecialMill: "https://www.widma.com/wp-content/uploads/2022/01/Special-Milling-machine.webp",
  spmHeavyMill: "https://www.widma.com/wp-content/uploads/2022/01/Heavy-Rough-Milling-machine-1024x683.webp",
  spmFinishMill: "https://www.widma.com/wp-content/uploads/2022/01/Finish-Milling-Machines.webp",
  // Deep Hole Drilling Machines (Widma)
  dhdSG: "https://www.widma.com/wp-content/uploads/2022/01/sg.webp",
  dhdMG: "https://www.widma.com/wp-content/uploads/2022/01/mg.webp",
  dhdUGK: "https://www.widma.com/wp-content/uploads/2022/01/ugk.webp",
  dhdBTA: "https://www.widma.com/wp-content/uploads/2022/01/bta.webp",
};

// ─── CAD/CAM SOFTWARE ─────────────────────────────────────────────────────────
// VISI is a full CAD/CAM platform; it is listed under CAM only — CAD is the
// Dassault Systemes (SOLIDWORKS) portfolio per the 2026 client brief.

const visi: Product = {
  id: "visi-cad",
  name: "VISI CAD/CAM Software",
  category: "CAD/CAM Software",
  brand: "VISI",
  vendor: "Hexagon Manufacturing Intelligence",
  image: IMG.visi,
  shortDesc: "World-leading mould & die CAD/CAE/CAM",
  description:
    "VISI is a world-leading PC-based CAD/CAE/CAM solution for the mould & die industry — covering 3D tool design, plastic flow analysis, stamping simulation, and multi-axis milling in a single integrated platform.",
  specs: {
    "Type": "CAD / CAE / CAM",
    "Platform": "Windows PC",
    "Industry": "Mould & Die",
    "License": "Lifetime, single-user",
    "Training": "In-person support included",
    "Demo": "Free demo available",
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

/**
 * HERO PRODUCT — SOLIDWORKS (Dassault Systèmes).
 * Carried in its own right rather than under the Dassault Systèmes banner:
 * the card badge reads SOLIDWORKS and the vendor line is the fine print.
 */
export const solidworks: Product = {
  id: "solidworks",
  name: "SOLIDWORKS",
  category: "CAD Software",
  brand: "SOLIDWORKS",
  vendor: "Dassault Systèmes",
  heroSlug: "/solidworks",
  shortDesc: "3D design & engineering platform from Dassault Systèmes",
  description:
    "SOLIDWORKS has recently been added to the Goodmech portfolio and is an important strategic product for us. It covers part and assembly modelling, bills of materials and production drawings, in Standard, Professional and Premium packages — with Simulation, PDM, CAM and other capabilities available as separately licensed add-ons.",
  specs: {
    "Type": "3D CAD / Design Platform",
    "Publisher": "Dassault Systèmes",
    "Packages": "Standard · Professional · Premium",
    "Add-ons": "Simulation, PDM, CAM, Electrical, MBD (licensed separately)",
    "Platform": "Windows PC",
    "Demo": "Free demo available",
  },
  features: [
    "Single and multi-body part models, assemblies & BOMs",
    "2D layouts from sketches and sketch blocks, plus 3D sketches",
    "Production drawings associative to the 3D model",
    "Professional adds component library, rendering & costing",
    "Premium adds stress testing, motion simulation & automation",
    "Simulation, PDM, CAM, Electrical & MBD as separate add-on licences",
  ],
  applications: ["Product & machine design", "Tooling, jigs & fixtures", "Sheet-metal fabrication", "Design validation & documentation"],
};

export const CamSoftware: Product[] = [
  {
    id: "worknc-cam",
    name: "WorkNC CAM",
    category: "CAM Software",
    brand: "WorkNC",
    vendor: "Hexagon Manufacturing Intelligence",
    heroSlug: "/worknc",
    image: IMG.worknc,
    shortDesc: "Automatic 2–5 axis CAM for mould, die & tooling",
    description:
      "WorkNC is a CAM system for mould, die and tooling work, built around automatic toolpath generation. Rest machining runs on a dynamic stock model with collision detection and automatic stock updates, and the Auto5 module converts proven 3-axis toolpaths into collision-free 5-axis ones.",
    specs: {
      "Type": "CAM Software",
      "Publisher": "Hexagon Manufacturing Intelligence",
      "Axes": "2 to 5-axis (incl. Auto5 conversion)",
      "Platform": "Windows PC",
      "License": "Lifetime, single-user",
      "Training": "In-person support included",
      "Demo": "Free demo available",
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
    vendor: "Hexagon Manufacturing Intelligence",
    image: IMG.edgecam,
    shortDesc: "Market-leading NC programming for turning, milling & EDM",
    description:
      "Edgecam is a market-leading CAM system for NC part programming across turning, milling, and Wire EDM operations. Intuitive interface with powerful automation for complex parts.",
    specs: {
      "Type": "CAM Software",
      "Version": "2024.1",
      "Operations": "Turning, Milling, Wire EDM",
      "Platform": "Windows PC",
      "License": "Lifetime, single-user",
      "Demo": "Free demo available",
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
    vendor: "Hexagon Manufacturing Intelligence",
    image: IMG.esprit,
    shortDesc: "Mill-turn & 5-axis CAM with 3,500+ post processors",
    description:
      "Esprit is a comprehensive CAM solution supporting mill-turn, multitasking, and simultaneous 5-axis milling across diverse CNC machines. Backed by 3,500+ certified post processors for universal machine compatibility.",
    specs: {
      "Type": "CAM Software",
      "Axes": "2 to 5-axis simultaneous",
      "Operations": "Milling, Turning, Mill-Turn, Wire EDM",
      "Post Processors": "3,500+ certified",
      "License": "Lifetime, single-user",
      "Demo": "Free demo available",
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
    vendor: "Hexagon Manufacturing Intelligence",
    image: IMG.espritEdge,
    shortDesc: "Next-generation, AI-driven CAM platform",
    description:
      "Esprit EDGE is the next-generation evolution of Esprit — an intelligent, fully integrated CAM platform with AI-assisted toolpaths, a digital machine twin, and edge-to-cloud connectivity for the modern smart factory.",
    specs: {
      "Type": "CAM Software",
      "Axes": "2 to 5-axis simultaneous",
      "Architecture": "Edge-to-cloud, AI-assisted",
      "Operations": "Milling, Turning, Mill-Turn, Additive",
      "License": "Subscription / perpetual",
      "Demo": "Free demo available",
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

// CAD is a Dassault Systèmes portfolio — SOLIDWORKS is the headline product.
export const CadSoftware: Product[] = [solidworks];

// ─── CAE / SIMULATION SOFTWARE ────────────────────────────────────────────────

export const Simulation: Product[] = [
  {
    id: "simufact-forming",
    name: "Simufact Forming",
    category: "Hot & Cold Forging Simulation",
    brand: "Simufact Forming",
    vendor: "Cadence Design Systems",
    heroSlug: "/simufact",
    image: IMG.simufact,
    shortDesc: "Hot & cold forging simulation — the capability we lead with",
    description:
      "Simufact Forming applies finite-element and finite-volume simulation to forging, cold forming and rolling. It shows material flow, die loads and die stress, and gives early detection of underfill, folds, laps and cracks — before the tooling is cut. Hot and cold forging simulation is the capability Goodmech leads with in its CAE portfolio.",
    specs: {
      "Type": "Forming & Forging Process Simulation",
      "Publisher": "Cadence Design Systems",
      "Processes": "Forging, cold forming, sheet metal, rolling, mechanical joining",
      "Solver": "Finite element & finite volume method",
      "Platform": "Windows PC",
      "License": "Lifetime, single-user",
      "Demo": "Free demo available",
    },
    features: [
      "Hot forging and cold forming in one platform",
      "Early detection of underfill, cracks, folds & laps",
      "Die load evaluation and residual stress in the part",
      "Tool and die stress analysis",
      "Microstructure simulation & heat-treatment properties",
      "Open-die forging, rolling & ring rolling",
    ],
    applications: ["Forging die design", "Preform & flash development", "Die load evaluation", "Rolling & ring rolling"],
  },
  {
    id: "fti-forming-suite",
    name: "FTI Forming Suite",
    category: "Simulation Software",
    brand: "FTI",
    vendor: "Cadence Design Systems",
    image: IMG.fti,
    shortDesc: "Sheet-metal feasibility, costing & die design",
    description:
      "FTI Forming Suite delivers fast, accurate sheet-metal forming simulation — from early feasibility and material cost estimation to blank development and die-face design — helping reduce material waste and tryout time.",
    specs: {
      "Type": "Sheet-Metal Simulation Software",
      "Modules": "FormingSuite, BlankWorks, CostOptimizer",
      "Platform": "Windows PC",
      "License": "Lifetime, single-user",
      "Demo": "Free demo available",
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
    vendor: "Hexagon Manufacturing Intelligence",
    image: IMG.simufact, // TODO(client): replace with official Q-DAS image
    shortDesc: "Statistical quality & SPC data analysis",
    description:
      "Q-DAS is the industry standard for statistical quality analysis (SPC). It collects, evaluates, and reports measurement data across the production process — enabling data-driven quality control and full traceability.",
    specs: {
      "Type": "Quality Data Analysis Software",
      "Methods": "SPC, capability & measurement-system analysis",
      "Platform": "Windows PC",
      "License": "Lifetime, single-user",
      "Demo": "Free demo available",
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
      "CNC Axes": "5",
      "Type": "Universal tool & cutter grinder",
      "Minimum OD": "20 mm",
      "Maximum OD": "230 mm",
      "Max Spindle Speed": "9,000 RPM",
      "Electrical Power": "15 kVA",
      "Machine Weight": "4,500 kg",
      "Floor Plan (W×D×H)": "2,450 × 2,950 × 2,150 mm",
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
      "Model": "Ecogrind RX5 NEO",
      "XY Axis Work Area": "300 × 300 mm",
      "Electrical Power": "15 kVA",
      "Air Pressure": "5 Bar",
      "Machine Weight": "6,500 kg",
      "Floor Plan (W×D×H)": "2,150 × 3,000 × 2,200 mm",
      "Brand": "Widma",
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
      "Type": "Vertical Turning Lathe (VTL)",
      "Table Diameter": "up to 4,000 mm",
      "Max Turning Dia.": "up to 4,000 mm",
      "Country of Origin": "Made in India",
      "Brand": "Widma",
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
      "Max Turning Dia.": "550 mm",
      "Std Turning Dia.": "450 mm",
      "Swing Over Bed": "650 mm",
      "Max Turning Height": "700 mm",
      "Power": "22 kW",
      "Turret Type": "Electro-mechanical",
      "Model": "VT550",
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
];

// ─── SPECIAL PURPOSE MACHINES (Widma) ─────────────────────────────────────────
// Purpose-built machines from widma.com/product/special-purpose-machines/.
// Widma publishes descriptions but no per-model spec tables, so specs are kept
// to Type/Configuration/Brand — no numbers are invented.

export const SpecialPurposeMachines: Product[] = [
  {
    id: "widma-spm-rotary-indexing",
    name: "Multi-operation Rotary Indexing Machines",
    category: "Special Purpose Machine",
    brand: "Widma",
    image: IMG.spmRotaryIndex,
    shortDesc: "Simultaneous multi-operation rotary indexing",
    description:
      "Rotary indexing machines designed for simultaneous execution of multiple operations — drilling, tapping, rough boring, fine boring, spot facing, and reaming — in a single automated cycle.",
    specs: {
      "Type": "Rotary indexing SPM",
      "Operations": "Drilling, tapping, boring, spot facing, reaming",
      "Configuration": "Multi-station rotary index",
      "Brand": "Widma",
    },
    features: [
      "Multiple operations in one indexing cycle",
      "Drilling, tapping, rough & fine boring",
      "Spot facing and reaming stations",
      "High-volume production throughput",
      "Fully automated cycle",
    ],
    applications: ["High-volume component machining", "Multi-feature parts", "Dedicated production lines"],
  },
  {
    id: "widma-spm-valve-seat",
    name: "Valve Seat Machining & Valve Guide Reaming",
    category: "Special Purpose Machine",
    brand: "Widma",
    image: IMG.spmValveSeat,
    shortDesc: "Engine cylinder-head valve seat & guide machining",
    description:
      "Purpose-built machines for accurate machining of valve seat profiles and valve guide reaming on engine cylinder heads, delivering the concentricity and finish critical to engine performance.",
    specs: {
      "Type": "Valve seat / guide SPM",
      "Application": "Engine cylinder heads",
      "Configuration": "Custom-engineered to head geometry",
      "Brand": "Widma",
    },
    features: [
      "Accurate valve seat profile machining",
      "Valve guide reaming",
      "High seat-to-guide concentricity",
      "Optimised for cylinder-head production",
      "Repeatable engine-grade accuracy",
    ],
    applications: ["Automotive engine manufacturing", "Cylinder head production", "Engine remanufacturing"],
  },
  {
    id: "widma-spm-fine-boring",
    name: "Fine Boring Machines",
    category: "Special Purpose Machine",
    brand: "Widma",
    image: IMG.spmFineBoring,
    shortDesc: "Single/multi-spindle boring to 1-micron accuracy",
    description:
      "Fine boring machines available in vertical and horizontal configurations with single or multiple spindles, offering tool correction down to 1-micron diameter accuracy for precision bores.",
    specs: {
      "Type": "Fine boring SPM",
      "Configuration": "Vertical / horizontal, single or multi-spindle",
      "Tool Correction": "Up to 1-micron diameter accuracy",
      "Brand": "Widma",
    },
    features: [
      "Vertical and horizontal configurations",
      "Single or multiple spindles",
      "1-micron diameter tool correction",
      "High-precision bore finishing",
      "Stable, rigid construction",
    ],
    precision: "±0.001 mm",
    applications: ["Precision bore finishing", "Bearing housings", "Hydraulic components"],
  },
  {
    id: "widma-spm-multi-spindle",
    name: "Multi-spindle Machines",
    category: "Special Purpose Machine",
    brand: "Widma",
    image: IMG.spmMultiSpindle,
    shortDesc: "Best-in-class cycle time, multiple ops at once",
    description:
      "Multi-spindle machines perform multiple operations simultaneously to deliver best-in-class cycle times, available in both horizontal and vertical configurations.",
    specs: {
      "Type": "Multi-spindle SPM",
      "Configuration": "Horizontal / vertical",
      "Advantage": "Best-in-class cycle time",
      "Brand": "Widma",
    },
    features: [
      "Multiple spindles working simultaneously",
      "Best-in-class cycle time",
      "Horizontal and vertical configurations",
      "High productivity for mass production",
      "Consistent multi-feature accuracy",
    ],
    applications: ["Mass production machining", "Multi-hole components", "High-throughput lines"],
  },
  {
    id: "widma-spm-facing-centering",
    name: "Facing & Centering Machines",
    category: "Special Purpose Machine",
    brand: "Widma",
    image: IMG.spmFacingCenter,
    shortDesc: "Shaft facing & centering, 2 or 4 spindle",
    description:
      "Facing and centering machines for shaft manufacturing, available in vertical and horizontal configurations — two-spindle variants for smaller shafts and four-spindle for larger-diameter shafts.",
    specs: {
      "Type": "Facing & centering SPM",
      "Configuration": "Vertical / horizontal, 2 or 4 spindle",
      "Application": "Shaft ends preparation",
      "Brand": "Widma",
    },
    features: [
      "Two-spindle for smaller shafts",
      "Four-spindle for larger diameters",
      "Simultaneous facing and centering",
      "Vertical and horizontal configurations",
      "Accurate shaft-end preparation",
    ],
    applications: ["Shaft manufacturing", "Axles & spindles", "Automotive drivetrain parts"],
  },
  {
    id: "widma-spm-special-milling",
    name: "Special Milling Machines",
    category: "Special Purpose Machine",
    brand: "Widma",
    image: IMG.spmSpecialMill,
    shortDesc: "Multi-axis milling for cams, profiles & slots",
    description:
      "Special milling machines with multi-axis movement and interpolation for cam lobe milling, profile milling, keyway, groove, slot, and pad milling operations.",
    specs: {
      "Type": "Special milling SPM",
      "Motion": "Multi-axis movement & interpolation",
      "Operations": "Cam lobe, profile, keyway, groove, slot, pad",
      "Brand": "Widma",
    },
    features: [
      "Multi-axis movement and interpolation",
      "Cam lobe and profile milling",
      "Keyway, groove and slot milling",
      "Pad milling capability",
      "Configured to component geometry",
    ],
    applications: ["Camshaft machining", "Profiled components", "Keyway & slot production"],
  },
  {
    id: "widma-spm-heavy-milling",
    name: "Heavy Milling / Roughing Machines",
    category: "Special Purpose Machine",
    brand: "Widma",
    image: IMG.spmHeavyMill,
    shortDesc: "High material removal at high depth of cut",
    description:
      "Heavy milling and roughing machines built for high material removal rates at high depth of cut, using a spindle with gearbox to deliver the cutting torque and power required.",
    specs: {
      "Type": "Heavy milling / roughing SPM",
      "Spindle": "Geared spindle for high torque",
      "Capability": "High MRR at high depth of cut",
      "Brand": "Widma",
    },
    features: [
      "High material removal rate",
      "High depth of cut capability",
      "Geared spindle for cutting torque and power",
      "Rugged construction for heavy loads",
      "Suited to large workpieces",
    ],
    applications: ["Heavy roughing operations", "Large castings & forgings", "Structural components"],
  },
  {
    id: "widma-spm-finish-milling",
    name: "Finish Milling Machines",
    category: "Special Purpose Machine",
    brand: "Widma",
    image: IMG.spmFinishMill,
    shortDesc: "Critical flatness, finish & milling-depth accuracy",
    description:
      "Finish milling machines designed to achieve critical accuracies like flatness, surface finish, and milling depth, available in horizontal or vertical configurations.",
    specs: {
      "Type": "Finish milling SPM",
      "Configuration": "Horizontal / vertical",
      "Focus": "Flatness, surface finish, milling depth",
      "Brand": "Widma",
    },
    features: [
      "Critical flatness accuracy",
      "Fine surface finish",
      "Precise milling depth control",
      "Horizontal or vertical configuration",
      "Consistent finishing quality",
    ],
    applications: ["Sealing face machining", "Precision flat surfaces", "Finish-critical components"],
  },
];

// ─── DEEP HOLE DRILLING MACHINES (Widma) ──────────────────────────────────────
// From widma.com/product/deep-hole-drilling-machines/. The four models the
// client selected; Widma lists more that can be added later if required.

export const DeepHoleDrillingMachines: Product[] = [
  {
    id: "widma-dhd-sg",
    name: "Standard Gundrilling Machines (SG Series)",
    category: "Deep Hole Drilling",
    brand: "Widma",
    image: IMG.dhdSG,
    shortDesc: "Standard gundrilling for deep, straight holes",
    description:
      "The SG series standard gundrilling machines produce deep, straight, high-accuracy holes across a broad range of general deep-hole drilling applications.",
    specs: {
      "Type": "Standard gundrilling machine",
      "Series": "SG",
      "Process": "Single-flute gundrilling",
      "Brand": "Widma",
    },
    features: [
      "Deep, straight hole drilling",
      "High length-to-diameter ratios",
      "Excellent bore straightness",
      "Reliable single-flute gundrilling",
      "Broad application range",
    ],
    applications: ["Deep hole drilling", "Hydraulic cylinders", "Molds & dies", "General engineering"],
  },
  {
    id: "widma-dhd-mg",
    name: "Micro Gundrilling Machine (MG Series)",
    category: "Deep Hole Drilling",
    brand: "Widma",
    image: IMG.dhdMG,
    shortDesc: "Small-diameter deep hole drilling",
    description:
      "The MG series micro gundrilling machine caters to smaller-diameter deep hole drilling applications where fine, precise holes are required.",
    specs: {
      "Type": "Micro gundrilling machine",
      "Series": "MG",
      "Application": "Smaller-diameter deep holes",
      "Brand": "Widma",
    },
    features: [
      "Small-diameter deep hole drilling",
      "High precision on fine holes",
      "Excellent hole straightness",
      "Purpose-built for micro applications",
      "Consistent, repeatable results",
    ],
    applications: ["Fuel injection components", "Medical & precision parts", "Small-bore deep holes"],
  },
  {
    id: "widma-dhd-ugk",
    name: "Universal Gundrilling Machines (UGK Series)",
    category: "Deep Hole Drilling",
    brand: "Widma",
    image: IMG.dhdUGK,
    shortDesc: "Versatile gundrilling across a wide range",
    description:
      "The UGK series universal gundrilling machines offer flexible deep-hole drilling across a wide range of workpiece sizes and applications in a single versatile platform.",
    specs: {
      "Type": "Universal gundrilling machine",
      "Series": "UGK",
      "Capability": "Wide workpiece range",
      "Brand": "Widma",
    },
    features: [
      "Versatile universal configuration",
      "Wide range of workpiece sizes",
      "Deep, accurate hole drilling",
      "Flexible setup for varied jobs",
      "Reliable production performance",
    ],
    applications: ["General deep hole drilling", "Job-shop production", "Varied component sizes"],
  },
  {
    id: "widma-dhd-bta-counter-boring",
    name: "BTA Counter Boring Machines for Front Fork",
    category: "Deep Hole Drilling",
    brand: "Widma",
    image: IMG.dhdBTA,
    shortDesc: "BTA counter boring for two-wheeler front forks",
    description:
      "Dedicated BTA counter boring machines for front fork tubes, using the BTA process to produce accurate, high-finish internal bores for two-wheeler front-fork applications.",
    specs: {
      "Type": "BTA counter boring machine",
      "Process": "BTA (Boring & Trepanning Association)",
      "Application": "Front fork tubes",
      "Brand": "Widma",
    },
    features: [
      "BTA deep-hole counter boring",
      "Purpose-built for front fork tubes",
      "High internal bore accuracy",
      "Superior bore surface finish",
      "Optimised for two-wheeler production",
    ],
    applications: ["Two-wheeler front forks", "Suspension tubes", "High-volume fork production"],
  },
];

// ─── 3D PRINTERS (Go3D) — replaces former Gauging Systems ─────────────────────

export const Printers3D: Product[] = [
  {
    id: "go3d-fdm",
    name: "Go3D Industrial FDM 3D Printer",
    category: "3D Printers",
    brand: "Go3D",
    image: IMG.go3dFdm,
    shortDesc: "Large-format industrial FDM additive system",
    description:
      "The Go3D industrial FDM 3D printer produces strong, accurate functional prototypes and end-use parts from engineering-grade thermoplastics — bringing fast, in-house additive manufacturing to the shop floor.",
    specs: {
      "Technology": "FDM / FFF",
      "Build Volume": "300 × 1200 (mm)",
      "Materials": "ABS, PLA, PETG, Nylon, carbon-filled",
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
    image: IMG.go3dResin,
    shortDesc: "High-detail SLA/DLP resin printing",
    description:
      "The Go3D resin 3D printer delivers ultra-fine surface finish and crisp detail for precision prototypes, master patterns, and intricate components using SLA/DLP photopolymer technology.",
    specs: {
      "Technology": "SLA / DLP resin",
      "Build Volume": "192 × 120 × 200 mm",
      "Materials": "Standard, tough & castable resins",
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
