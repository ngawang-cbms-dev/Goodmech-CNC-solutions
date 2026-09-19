import React from 'react';
import { ProductShowcase, type ShowcaseCategory } from '../components/ProductShowcase';
import { CamSoftware, CadSoftware } from '../data/products';

// CAD leads with SOLIDWORKS (Dassault Systèmes) and CAM leads with WorkNC
// (Hexagon) — both HERO products, each linking through to its own page.
const categories: ShowcaseCategory[] = [
  {
    id: 'cad',
    icon: 'draw',
    label: 'CAD Software',
    title: 'CAD Software — SOLIDWORKS',
    blurb:
      'SOLIDWORKS from Dassault Systèmes: parametric part and assembly design, production drawings, sheet metal, built-in simulation, PDM and CAM — supplied, implemented and supported locally.',
    products: CadSoftware,
  },
  {
    id: 'cam',
    icon: 'precision_manufacturing',
    label: 'CAM Software',
    title: 'CAM Software',
    blurb:
      'Hexagon Manufacturing Intelligence CAM — WorkNC, VISI, Edgecam, Esprit and Esprit EDGE — for 2 to 5-axis programming across milling, turning and mill-turn.',
    products: CamSoftware,
  },
];

export const Software: React.FC = () => (
  <ProductShowcase eyebrow="DIGITAL MANUFACTURING" categories={categories} sidebarTitle="SOFTWARE CATEGORIES" />
);
