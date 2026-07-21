import React from 'react';
import { ProductShowcase, type ShowcaseCategory } from '../components/ProductShowcase';
import {
  GrindingMachines,
  TurningMachines,
  SpecialPurposeMachines,
  DeepHoleDrillingMachines,
} from '../data/products';

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
      'Heavy-duty CNC vertical turning solutions from Widma for complex cylindrical and large-diameter components.',
    products: TurningMachines,
  },
  {
    id: 'special-purpose',
    icon: 'precision_manufacturing',
    label: 'Special Purpose Machines',
    title: 'Special Purpose Machines',
    blurb:
      'Purpose-built Widma machines engineered for dedicated tasks — from rotary indexing and fine boring to valve-seat, facing & centering, and specialised milling.',
    products: SpecialPurposeMachines,
  },
  {
    id: 'deep-hole-drilling',
    icon: 'edgesensor_low',
    label: 'Deep Hole Drilling',
    title: 'Deep Hole Drilling Machines',
    blurb:
      'Widma gundrilling and BTA deep-hole drilling machines producing deep, straight, high-accuracy bores across micro to large-diameter applications.',
    products: DeepHoleDrillingMachines,
  },
];

export const Machines: React.FC = () => (
  <ProductShowcase eyebrow="WIDMA" categories={categories} sidebarTitle="MACHINE CATEGORIES" />
);
