import React from 'react';
import { HeroProductPage } from '../components/HeroProductPage';
import { simufactHero } from '../data/heroProducts';

/** HERO PRODUCT page — Simufact Forming, Hot & Cold Forging Simulation. */
export const Simufact: React.FC = () => <HeroProductPage product={simufactHero} />;
