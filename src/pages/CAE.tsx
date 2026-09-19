import React from 'react';
import { ProductShowcase, type ShowcaseCategory } from '../components/ProductShowcase';
import { Simulation, QualityAnalysis } from '../data/products';

const categories: ShowcaseCategory[] = [
  {
    id: 'simulation',
    icon: 'local_fire_department',
    label: 'Forging & Forming Simulation',
    title: 'Forging & Forming Simulation',
    blurb:
      'Simufact Forming from Cadence Design Systems is our HERO product for hot & cold forging simulation, alongside FTI Forming Suite for sheet-metal feasibility — validate the process before a die is cut.',
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
