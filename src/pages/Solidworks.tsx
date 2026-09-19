import React from 'react';
import { HeroProductPage } from '../components/HeroProductPage';
import { solidworksHero } from '../data/heroProducts';

/** HERO PRODUCT page — SOLIDWORKS, carried under its own identity. */
export const Solidworks: React.FC = () => <HeroProductPage product={solidworksHero} />;
