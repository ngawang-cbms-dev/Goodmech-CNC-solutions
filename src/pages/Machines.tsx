import React from 'react';
import { ProductShowcase, type ShowcaseCategory } from '../components/ProductShowcase';
import { GrindingMachines, TurningMachines } from '../data/products';

const categories: ShowcaseCategory[] = [
  {
    id: 'grinding',
    icon: 'settings_input_component',
    label: 'Grinding Machines',
    title: 'Tool Grinding Machines',
    blurb:
      'Ultra-precision 5-axis tool & cutter grinding solutions from Widma for tools, dies, and precision components with sub-micron accuracy.',
    products: GrindingMachines,
  },
  {
    id: 'turning',
    icon: 'rotate_right',
    label: 'Turning Machines',
    title: 'CNC Turning Machines',
    blurb:
      'Heavy-duty CNC vertical turning and special-purpose solutions from Widma for complex cylindrical and large-diameter components.',
    products: TurningMachines,
  },
];

export const Machines: React.FC = () => (
  <ProductShowcase eyebrow="WIDMA" categories={categories} sidebarTitle="MACHINE CATEGORIES" />
);
