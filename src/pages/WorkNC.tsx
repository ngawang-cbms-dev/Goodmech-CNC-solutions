import React from 'react';
import { HeroProductPage } from '../components/HeroProductPage';
import { workncHero } from '../data/heroProducts';

/** HERO PRODUCT page — WorkNC CAM. */
export const WorkNC: React.FC = () => <HeroProductPage product={workncHero} />;
