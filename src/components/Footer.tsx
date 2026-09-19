import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/company';
import { heroProducts } from '../data/heroProducts';
import logo from '../assets/logo.png';

/**
 * Deliberately short. An earlier revision carried 37 links across five sections
 * and ran ~1,100px tall, mostly by stating the same thing twice — the reseller
 * band repeated the principals already listed under PRODUCTS, and RESOURCES
 * pointed at routes linked two columns over. This keeps the client's requested
 * CAE / CAM / CAD / CNC / 3D mapping and the three HERO products; everything
 * else is one click away on the category pages.
 */
export const Footer: React.FC = () => {
  const [primaryPhone] = companyInfo.phones;
  const [primaryEmail] = companyInfo.emails;
  const [headOffice, ...otherOffices] = companyInfo.locations;

  return (
    <footer className="relative bg-primary text-white overflow-hidden noise">
      <div className="absolute inset-0 blueprint-grid text-white opacity-[0.05]"></div>
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-safety-orange/10 blur-[120px] pointer-events-none"></div>

      {/* CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-headline-lg font-headline-lg text-white">Ready to upgrade your shop floor?</h2>
            <p className="text-body-md font-body-md text-white/60 mt-2">
              Talk to our engineering team about the right CNC solution for your production.
            </p>
          </div>
          <Link
            to="/quote"
            data-magnetic="0.25"
            className="inline-flex items-center gap-2 bg-safety-orange text-white px-8 py-4 rounded-md font-label-bold text-label-bold btn-press btn-sheen glow-orange shrink-0"
          >
            Get Best Price
            <span className="material-symbols-outlined text-[20px]">trending_flat</span>
          </Link>
        </div>
      </div>

      {/* Columns */}
      <div className="relative grid grid-cols-2 lg:grid-cols-12 gap-x-gutter gap-y-10 px-margin-mobile md:px-margin-desktop py-14 max-w-container-max mx-auto">
        {/* Brand — carries the reseller statement so it needs no band of its own */}
        <div className="col-span-2 lg:col-span-4">
          <span className="inline-flex items-center">
            <img src={logo} alt="Goodmech CNC Solutions" className="h-8 md:h-30 w-auto" />
          </span>
          <p className="text-body-sm font-body-sm text-white/55 mb-6 max-w-sm">
            {companyInfo.resellerStatement}
          </p>
          <div className="flex gap-3">
            <a
              className="w-10 h-10 bg-white/8 border border-white/10 rounded-lg flex items-center justify-center hover:bg-safety-orange hover:border-safety-orange transition-all btn-press"
              href={companyInfo.web.indiamart}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Company profile on IndiaMART"
            >
              <span className="material-symbols-outlined text-[18px]">storefront</span>
            </a>
            <a
              className="w-10 h-10 bg-white/8 border border-white/10 rounded-lg flex items-center justify-center hover:bg-safety-orange hover:border-safety-orange transition-all btn-press"
              href={companyInfo.web.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </a>
            <a
              className="w-10 h-10 bg-white/8 border border-white/10 rounded-lg flex items-center justify-center hover:bg-safety-orange hover:border-safety-orange transition-all btn-press"
              href={primaryEmail.href}
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
          </div>
        </div>

        {/* Portfolio — one row per principal, no sub-bullets */}
        <div className="col-span-1 lg:col-span-3">
          <p className="font-label-caps text-safety-orange mb-5">PRODUCTS</p>
          <ul className="space-y-4">
            {companyInfo.authorizations.map((a) => (
              <li key={a.id}>
                <Link to={a.to} className="group block">
                  <span className="block font-label-bold text-label-bold text-white group-hover:text-safety-orange transition-colors">
                    {a.heading}
                  </span>
                  <span className="block font-label-caps text-white/35 mt-0.5">{a.principal}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* The three flagship products */}
        <div className="col-span-1 lg:col-span-2">
          <p className="font-label-caps text-safety-orange mb-5">HERO PRODUCTS</p>
          <ul className="space-y-4">
            {heroProducts.map((h) => (
              <li key={h.id}>
                <Link to={h.slug} className="group block">
                  <span className="block font-label-bold text-label-bold text-white group-hover:text-safety-orange transition-colors">
                    {h.navLabel}
                  </span>
                  <span className="block font-label-caps text-white/35 mt-0.5">{h.navHint}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact — head office in full, the rest as a single line */}
        <div className="col-span-2 lg:col-span-3">
          <p className="font-label-caps text-safety-orange mb-5">CONTACT</p>
          <div className="text-body-sm font-body-sm text-white/60 space-y-4">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[18px] mt-0.5 text-white/40">location_on</span>
              <span>
                {headOffice.lines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
                {otherOffices.length > 0 && (
                  <span className="block text-white/40 mt-1.5">
                    Also in {otherOffices.map((o) => o.region).join(' & ')}
                  </span>
                )}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[18px] text-white/40">call</span>
              <a href={primaryPhone.href} className="hover:text-white transition-colors">{primaryPhone.value}</a>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[18px] text-white/40">mail</span>
              <a href={primaryEmail.href} className="hover:text-white transition-colors">{primaryEmail.value}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-7 px-margin-mobile md:px-margin-desktop">
        <p className="font-label-caps text-white/40 text-center">
          © {new Date().getFullYear()} GOODMECH CNC SOLUTIONS · ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};
