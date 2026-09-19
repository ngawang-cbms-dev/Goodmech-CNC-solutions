import React from 'react';

interface BrandTileProps {
  /** Leading part of the wordmark, rendered in white. */
  wordmark: string;
  /** Trailing part, rendered in the accent colour. */
  tail?: string;
  /** Caption under the wordmark — usually the publisher. */
  caption?: string;
  /** CSS custom-property name for the accent, e.g. '--color-tech-blue'. */
  accentVar?: string;
  className?: string;
}

/**
 * Typographic stand-in for products we have no client-supplied photograph for
 * (SOLIDWORKS today). A clean wordmark plate reads as deliberate branding,
 * whereas a stock screenshot or a broken <img> does not.
 */
export const BrandTile: React.FC<BrandTileProps> = ({
  wordmark,
  tail,
  caption,
  accentVar = '--color-safety-orange',
  className = '',
}) => (
  <div
    className={`relative w-full h-full min-h-[200px] bg-primary text-white overflow-hidden noise flex flex-col items-center justify-center px-6 text-center ${className}`}
    style={{ ['--tile-accent' as string]: `var(${accentVar})` }}
  >
    <div className="absolute inset-0 blueprint-grid text-white opacity-[0.08]"></div>
    <div
      className="absolute -right-12 -top-12 w-56 h-56 rounded-full blur-3xl opacity-30"
      style={{ background: 'var(--tile-accent)' }}
    ></div>
    <p className="relative text-headline-lg font-headline-lg leading-none tracking-tight">
      {wordmark}
      {tail && <span style={{ color: 'var(--tile-accent)' }}>{tail}</span>}
    </p>
    {caption && <p className="relative font-label-caps text-white/45 mt-3">{caption}</p>}
  </div>
);
