import React from 'react';
import { ProductShowcase, type ShowcaseCategory } from '../components/ProductShowcase';
import { Printers3D } from '../data/products';

const categories: ShowcaseCategory[] = [
  {
    id: 'go3d',
    icon: 'view_in_ar',
    label: 'Go3D Printers',
    title: '3D Printers — Go3D',
    blurb:
      'Bring additive manufacturing to your shop floor with Go3D industrial 3D printers — from large-format FDM functional parts to high-detail resin prototypes.',
    products: Printers3D,
  },
];

export const Printers: React.FC = () => (
  <ProductShowcase eyebrow="ADDITIVE MANUFACTURING" categories={categories} sidebarTitle="3D PRINTING" />
);
