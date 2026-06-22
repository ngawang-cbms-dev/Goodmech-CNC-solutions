import React from 'react';
import { ProductShowcase, type ShowcaseCategory } from '../components/ProductShowcase';
import { Simulation, QualityAnalysis } from '../data/products';

const categories: ShowcaseCategory[] = [
  {
    id: 'simulation',
    icon: 'science',
    label: 'Simulation',
    title: 'CAE / Simulation Software',
    blurb:
      'FEA-based process simulation — Simufact Forming & Sheet Metal and FTI Forming Suite — to validate forging, forming and sheet-metal processes before cutting metal.',
    products: Simulation,
  },
  {
    id: 'quality',
    icon: 'query_stats',
    label: 'Quality Analysis',
    title: 'Q-DAS Quality Analysis',
    blurb:
      'Q-DAS statistical quality and SPC data analysis for data-driven quality control, process capability studies and full part traceability.',
    products: QualityAnalysis,
  },
];

export const CAE: React.FC = () => (
  <ProductShowcase eyebrow="CAE / SIMULATION" categories={categories} sidebarTitle="SOLUTION CATEGORIES" />
);
