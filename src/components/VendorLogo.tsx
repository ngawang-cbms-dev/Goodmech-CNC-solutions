import React from 'react';
import { vendorLogoFor } from '../data/company';

interface VendorLogoProps {
  /** Must match an `Authorization.principal` in company.ts to resolve a logo. */
  vendor: string;
  /** White plate behind the logo — needed on dark surfaces, as both supplied
   *  logos are dark-on-light. */
  plate?: boolean;
  className?: string;
}

/**
 * The principal's logo where we used to print "BY {VENDOR}" in caps. Falls
 * back to that exact text when no logo has been supplied, so products from
 * Dassault Systèmes render as they did before.
 */
export const VendorLogo: React.FC<VendorLogoProps> = ({ vendor, plate = false, className = '' }) => {
  const logo = vendorLogoFor(vendor);

  if (!logo) {
    return (
      <p className={`font-label-caps ${plate ? 'text-white/40' : 'text-on-surface-variant/70'} ${className}`}>
        BY {vendor.toUpperCase()}
      </p>
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded-md ${
        plate
          ? 'bg-white px-2.5 py-1.5 shadow-sm'
          : 'bg-surface-container-lowest border border-outline-variant px-2 py-1'
      } ${className}`}
    >
      <img src={logo} alt={vendor} className="h-6 w-auto object-contain" />
    </span>
  );
};
