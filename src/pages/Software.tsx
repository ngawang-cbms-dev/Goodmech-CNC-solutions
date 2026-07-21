import React from 'react';
import { ProductShowcase, type ShowcaseCategory } from '../components/ProductShowcase';
import { CamSoftware, CadSoftware } from '../data/products';

const categories: ShowcaseCategory[] = [
  {
    id: 'cam',
    icon: 'precision_manufacturing',
    label: 'CAM Software',
    title: 'CAM Software',
    blurb:
      'World-leading CAM systems — WorkNC, VISI, Edgecam, Esprit and Esprit EDGE — for 2 to 5-axis CNC programming across milling, turning and mill-turn.',
    products: CamSoftware,
  },
  {
    id: 'cad',
    icon: 'draw',
    label: 'CAD Software',
    title: 'CAD Software',
    blurb:
      'Professional CAD design tools — VISI and Designer — for 3D modelling, mould & die design, and reverse engineering.',
    products: CadSoftware,
  },
];

export const Software: React.FC = () => (
  <ProductShowcase eyebrow="DIGITAL MANUFACTURING" categories={categories} sidebarTitle="SOFTWARE CATEGORIES" />
);
