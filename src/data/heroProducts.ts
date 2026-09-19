/**
 * HERO PRODUCTS — Goodmech's three flagship offerings.
 *
 * Per the 2026 client brief these must not sit at the same visual weight as the
 * rest of the catalogue: each gets a dedicated page, a slot in the home-page
 * hero band and its own entry in the header navigation.
 *
 *   /simufact    Simufact Forming — Hot & Cold Forging Simulation
 *   /solidworks  SOLIDWORKS (its own identity, not buried under Dassault)
 *   /worknc      WorkNC CAM
 *
 * SOURCING RULE — every claim on these pages must trace to one of:
 *   (a) src/data/company.ts  — services, locations, values the client approved
 *   (b) Munish Chopra's brief (2026-09) — the HERO positioning and his wording
 *   (c) a verified vendor page
 * Nothing about Goodmech's own history, customer base or bespoke services is
 * asserted here.
 */

import imgSimufact from '../assets/pictures/Simufact Forming & Sheet Metal.jpeg';
import imgWorkNC from '../assets/pictures/WorkNC CAM Software.jpeg';

export interface HeroStat {
  k: string;
  v: string;
}

export interface HeroPoint {
  icon: string;
  title: string;
  body: string;
}

export interface HeroStep {
  title: string;
  body: string;
}

export interface HeroProduct {
  id: string;
  /** Route this product owns. */
  slug: string;
  /** Wordmark, split so the tail can be accented. */
  wordmark: string;
  wordmarkTail?: string;
  /** Prose form of the name — the wordmark halves run together otherwise. */
  displayName: string;
  /** Uppercase kicker above the wordmark. */
  eyebrow: string;
  /** The discipline we want visitors to associate with Goodmech. */
  discipline: string;
  /** Publisher — present, but as fine print, never as the headline. */
  vendor: string;
  /** Page headline. */
  headline: string;
  /** Lead paragraph. */
  summary: string;
  image?: string;
  /** CSS custom-property name driving the page accent. */
  accentVar: string;
  /** Material Symbols glyph used wherever the product needs an icon. */
  icon: string;
  stats: HeroStat[];
  /** What Goodmech provides — grounded in company.ts `services` + the brief. */
  expertise: HeroPoint[];
  /** What the software does — vendor-verified capabilities only. */
  capabilities: HeroPoint[];
  /** How the software is used. A product workflow, not a service promise. */
  workflow: HeroStep[];
  /** Typical applications — a capability statement, not a customer list. */
  applications: string[];
  specs: Record<string, string>;
  /** Short copy for the home-page hero band. */
  homeBlurb: string;
  homeBullets: string[];
  /** Short label for the header nav. */
  navLabel: string;
  navHint: string;
}

/**
 * The four things Goodmech offers on every product, drawn from company.ts
 * `services` (consultation / installation / training / support), the product
 * `specs` already in products.ts ("Free demo available", "In-person support
 * included") and the reseller status in the client's own annotation.
 */
const resellerCard = (principal: string): HeroPoint => ({
  icon: 'verified',
  title: `Authorized reseller of ${principal}`,
  body: `Licences, updates and vendor-backed support come to you through official ${principal} channels, with Goodmech as your point of contact in Punjab.`,
});

const demoCard = (name: string): HeroPoint => ({
  icon: 'play_circle',
  title: 'See it before you commit',
  body: `A free demo of ${name} is available. Talk to our team and we will walk you through the software so you can judge it against the work you actually do.`,
});

const implementationCard: HeroPoint = {
  icon: 'school',
  title: 'In-person implementation & training',
  body: 'Installation and commissioning, then operator and engineer training for your team — delivered in person, not handed over as a download link.',
};

const supportCard: HeroPoint = {
  icon: 'support_agent',
  title: 'Technical support close by',
  body: 'Round-the-clock technical support from our Phagwara, Ludhiana and Kapurthala offices, backed by 27 years of industry experience.',
};

export const simufactHero: HeroProduct = {
  id: 'simufact',
  slug: '/simufact',
  wordmark: 'SIMUFACT',
  wordmarkTail: 'FORMING',
  displayName: 'Simufact Forming',
  eyebrow: 'HERO PRODUCT · FORGING SIMULATION',
  discipline: 'Hot & Cold Forging Simulation',
  vendor: 'Cadence Design Systems',
  icon: 'local_fire_department',
  accentVar: '--color-safety-orange',
  headline: 'Prove the forging before you cut the die.',
  summary:
    'Hot and cold forging simulation is the capability we want manufacturers across Punjab to associate with Goodmech. Simufact Forming applies finite-element and finite-volume simulation to forging, cold forming and rolling — so material flow, die loads and defects such as underfill, folds and laps show up on screen rather than at first die trial.',
  image: imgSimufact,
  stats: [
    { k: 'PROCESSES', v: 'Hot · Cold · Rolling' },
    { k: 'PREDICTS', v: 'Flow · Die load · Stress' },
    { k: 'CATCHES', v: 'Underfill · Folds · Laps' },
    { k: 'SOLVER', v: 'FEM & FVM' },
  ],
  expertise: [
    {
      icon: 'local_fire_department',
      title: 'Forging simulation is our focus',
      body: 'Of everything in our CAE portfolio, hot and cold forging simulation is the capability we lead with. It is the first thing we want a forge shop to know about Goodmech.',
    },
    resellerCard('Cadence Design Systems'),
    demoCard('Simufact Forming'),
    implementationCard,
  ],
  capabilities: [
    {
      icon: 'local_fire_department',
      title: 'Hot & cold forging',
      body: 'Cold forming below the recrystallisation temperature and hot forging above it, both covered in one platform alongside sheet-metal forming and mechanical joining.',
    },
    {
      icon: 'bug_report',
      title: 'Defect detection',
      body: 'Early detection of die underfill and the formation of cracks, folds and laps — the failure modes that normally surface only once the tooling is cut.',
    },
    {
      icon: 'compress',
      title: 'Die load evaluation',
      body: 'Evaluate the die loads and the stresses developed inside the dies, plus the residual stresses left in the part after forming.',
    },
    {
      icon: 'construction',
      title: 'Tool & die stress analysis',
      body: 'Dedicated die stress analysis so the tooling is assessed as a loaded structure, not assumed rigid.',
    },
    {
      icon: 'grain',
      title: 'Microstructure simulation',
      body: 'Microstructure simulation and prediction of material properties through conventional and inductive heat treatment.',
    },
    {
      icon: 'donut_large',
      title: 'Rolling & ring rolling',
      body: 'Open-die forging with kinematics and pass schedules, plus translational and rotational rolling including ring rolling at varying temperatures and speeds.',
    },
  ],
  workflow: [
    { title: 'Import the part', body: 'Bring in the finished component and the die and preform geometry.' },
    { title: 'Set material & temperature', body: 'Assign the grade, the billet and die temperatures, lubrication and friction.' },
    { title: 'Define the process', body: 'Set up the forming stages and the equipment kinematics.' },
    { title: 'Solve', body: 'Run the simulation across every stage of the sequence.' },
    { title: 'Evaluate', body: 'Review material flow, die loads, die stress and surface defects.' },
    { title: 'Iterate', body: 'Adjust preform, flash and staging, then re-run until the process is sound.' },
  ],
  applications: [
    'Forging die design',
    'Preform & flash development',
    'Die load evaluation',
    'Cold-formed component development',
    'Sheet-metal forming',
    'Rolling & ring rolling',
  ],
  specs: {
    'Type': 'Forming & forging process simulation',
    'Publisher': 'Cadence Design Systems',
    'Processes': 'Forging, cold forming, sheet metal, rolling, mechanical joining',
    'Solver': 'Finite element & finite volume method',
    'Platform': 'Windows PC',
    'License': 'Lifetime, single-user',
    'Demo': 'Free demo available',
    'Support': 'On-site implementation & training, Punjab',
  },
  homeBlurb:
    'Hot & cold forging simulation — material flow, die loads and defects such as underfill, folds and laps predicted before the die is cut.',
  homeBullets: ['Hot & cold forging', 'Tool & die stress analysis', 'Underfill, fold & lap detection'],
  navLabel: 'Simufact Forming',
  navHint: 'Hot & Cold Forging Simulation',
};

export const solidworksHero: HeroProduct = {
  id: 'solidworks',
  slug: '/solidworks',
  wordmark: 'SOLID',
  wordmarkTail: 'WORKS',
  displayName: 'SOLIDWORKS',
  eyebrow: 'HERO PRODUCT · CAD',
  discipline: '3D Design & Engineering Platform',
  vendor: 'Dassault Systèmes',
  icon: 'draw',
  accentVar: '--color-tech-blue',
  headline: 'Now part of the Goodmech portfolio.',
  summary:
    'SOLIDWORKS has recently been added to our product portfolio and is an important strategic product for us. It is a 3D CAD platform for part and assembly modelling, production drawings and design documentation, available in Standard, Professional and Premium packages with a wide range of separately licensed add-ons.',
  stats: [
    { k: 'PACKAGES', v: 'Standard · Pro · Premium' },
    { k: 'CORE', v: 'Parts · Assemblies · Drawings' },
    { k: 'ADD-ONS', v: 'Simulation · PDM · CAM' },
    { k: 'PUBLISHER', v: 'Dassault Systèmes' },
  ],
  expertise: [
    {
      icon: 'new_releases',
      title: 'A strategic addition to our portfolio',
      body: 'SOLIDWORKS has recently been added to the Goodmech portfolio and is an important strategic product for us — carried and presented under its own name, not folded into a parent brand.',
    },
    resellerCard('Dassault Systèmes'),
    demoCard('SOLIDWORKS'),
    supportCard,
  ],
  capabilities: [
    { icon: 'category', title: 'Parts & assemblies', body: 'Single and multi-body part models, assemblies and bills of materials, with 2D layouts from sketches and sketch blocks as well as 3D sketches.' },
    { icon: 'description', title: 'Production drawings', body: 'Detailed manufacturing drawings generated from the 3D model and kept associative to it.' },
    { icon: 'inventory_2', title: 'Professional package', body: 'Adds a comprehensive component library, photo-rendering and a costing application on top of everything in Standard.' },
    { icon: 'analytics', title: 'Premium package', body: 'Adds simulation for stress testing, motion simulation for component sizing, and automation for complex tasks.' },
    { icon: 'extension', title: 'Separately licensed add-ons', body: 'Simulation, Electrical, Flow Simulation, PDM Professional and Visualize Professional are add-on licences, not part of any base edition. CAM and MBD are likewise separate.' },
    { icon: 'cloud', title: 'Cloud tier', body: 'SOLIDWORKS Ultimate extends Premium with cloud-based design, project management, simulation and manufacturing capabilities.' },
  ],
  workflow: [
    { title: 'Sketch', body: '2D layouts from sketches and sketch blocks, and 3D sketches.' },
    { title: 'Model', body: 'Single and multi-body parts built up parametrically.' },
    { title: 'Assemble', body: 'Assemblies and the bills of materials that come off them.' },
    { title: 'Detail', body: 'Production drawings associative to the model; MBD as an add-on.' },
    { title: 'Validate', body: 'Stress and motion studies — in Premium, or via the Simulation add-on.' },
    { title: 'Release', body: 'Revision and release control through the PDM Professional add-on.' },
  ],
  applications: [
    'Product & machine design',
    'Tooling, jigs & fixtures',
    'Sheet-metal fabrication',
    'Design validation & documentation',
    'Bills of materials & costing',
  ],
  specs: {
    'Type': '3D CAD / design & engineering platform',
    'Publisher': 'Dassault Systèmes',
    'Packages': 'Standard · Professional · Premium',
    'Add-ons': 'Simulation, Electrical, Flow Simulation, PDM Professional, Visualize Professional, CAM, MBD — licensed separately',
    'Platform': 'Windows PC',
    'Demo': 'Free demo available',
    'Support': 'On-site implementation & training, Punjab',
  },
  homeBlurb:
    'Recently added to our portfolio and an important strategic product for us — 3D part, assembly and drawing design in Standard, Professional and Premium packages.',
  homeBullets: ['Parts, assemblies & drawings', 'Standard, Pro & Premium packages', 'Simulation, PDM & CAM add-ons'],
  navLabel: 'SOLIDWORKS',
  navHint: '3D CAD — Dassault Systèmes',
};

export const workncHero: HeroProduct = {
  id: 'worknc',
  slug: '/worknc',
  wordmark: 'WORK',
  wordmarkTail: 'NC',
  displayName: 'WorkNC',
  eyebrow: 'HERO PRODUCT · CAM',
  discipline: 'Automatic 2–5 Axis CAM',
  vendor: 'Hexagon Manufacturing Intelligence',
  icon: 'precision_manufacturing',
  accentVar: '--color-secondary',
  headline: 'Toolpaths that generate themselves.',
  summary:
    'WorkNC is a CAM system for mould, die and tooling work, built around automatic toolpath generation. Rest machining runs on a dynamic stock model with collision detection and automatic stock updates, and the Auto5 module turns proven 3-axis toolpaths into collision-free 5-axis ones.',
  image: imgWorkNC,
  stats: [
    { k: 'AXES', v: '2 to 5-axis' },
    { k: 'TOOLPATHS', v: 'Auto-generated' },
    { k: 'STOCK', v: 'Dynamic, auto-updating' },
    { k: 'SAFETY', v: 'Collision avoidance' },
  ],
  expertise: [
    {
      icon: 'workspace_premium',
      title: 'A HERO product in our CAM line-up',
      body: 'WorkNC is one of the products Goodmech leads with. It sits at the front of our CAM offering rather than in a list of equally weighted alternatives.',
    },
    resellerCard('Hexagon Manufacturing Intelligence'),
    demoCard('WorkNC'),
    implementationCard,
  ],
  capabilities: [
    { icon: 'auto_mode', title: 'Automatic toolpath generation', body: 'Toolpath generation is automated rather than surface-by-surface, which is what makes WorkNC suited to mould and die shops carrying more work than programmers.' },
    { icon: 'inventory', title: 'Dynamic stock model', body: 'Rest machining runs against a dynamic stock model with collision detection and automatic stock updates after each operation.' },
    { icon: 'change_circle', title: 'Auto5 — 3-axis to 5-axis', body: 'Automatically generates collision-free 5-axis toolpaths from existing 3-axis ones, enabling short, rigid cutters and finishing more of the job in one setting.' },
    { icon: 'travel_explore', title: 'Automatic rest roughing', body: 'Analyses material removal directions, evaluates machine-head accessibility and generates all safe rest-roughing toolpaths in a single operation.' },
    { icon: 'shield', title: 'Integrated collision avoidance', body: 'The 5-axis module pairs straightforward programming with collision avoidance built into the toolpath calculation.' },
    { icon: 'bolt', title: 'Fewer electrodes', body: 'Finishing more of a component in one setting reduces the number of electrode burning operations needed to complete it.' },
  ],
  workflow: [
    { title: 'Import CAD', body: 'Bring the component geometry into WorkNC.' },
    { title: 'Define stock & tools', body: 'Set the raw block or casting and choose from your tool library.' },
    { title: 'Apply strategy', body: 'Toolpaths are generated automatically from the chosen machining strategy.' },
    { title: 'Rest machine', body: 'The dynamic stock model drives rest roughing and finishing passes.' },
    { title: 'Convert to 5-axis', body: 'Auto5 lifts proven 3-axis paths to collision-free 5-axis where it helps.' },
    { title: 'Post', body: 'Output NC code for your machine.' },
  ],
  applications: [
    'Mould cavity machining',
    '5-axis toolpath programming',
    'Automotive tooling',
    'High-speed machining',
    'Electrode preparation',
  ],
  specs: {
    'Type': 'CAM software',
    'Publisher': 'Hexagon Manufacturing Intelligence',
    'Axes': '2 to 5-axis',
    'Strengths': 'Automatic toolpaths, dynamic stock model, Auto5',
    'Platform': 'Windows PC',
    'License': 'Lifetime, single-user',
    'Demo': 'Free demo available',
    'Support': 'On-site implementation & training, Punjab',
  },
  homeBlurb:
    'Automatic 2–5 axis CAM for mould, die and tooling. Rest machining on a dynamic stock model, with Auto5 converting 3-axis toolpaths to collision-free 5-axis.',
  homeBullets: ['Automatic toolpath generation', 'Auto5 — 3-axis to 5-axis', 'Dynamic stock & collision avoidance'],
  navLabel: 'WorkNC CAM',
  navHint: 'Automatic 2–5 Axis CAM',
};

/** Display order across the site: forging first, then CAD, then CAM. */
export const heroProducts: HeroProduct[] = [simufactHero, solidworksHero, workncHero];
