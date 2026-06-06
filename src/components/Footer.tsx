import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/company';

export const Footer: React.FC = () => {
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
      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-x-gutter gap-y-12 px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="relative grid place-items-center w-9 h-9 rounded-lg bg-safety-orange">
              <span className="absolute inset-[6px] border-[1.6px] border-white/85 rounded-[3px]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            </span>
            <span className="text-headline-md font-headline-md font-bold tracking-tight">GOODMECH</span>
          </div>
          <p className="text-body-sm font-body-sm text-white/55 mb-6 max-w-xs">
            Authorized dealers for world-class CNC solutions in Phagwara and Kapurthala. Precision engineering
            partners since {companyInfo.established}.
          </p>
          <div className="flex gap-3">
            <a
              className="w-10 h-10 bg-white/8 border border-white/10 rounded-lg flex items-center justify-center hover:bg-safety-orange hover:border-safety-orange transition-all btn-press"
              href={companyInfo.web.indiamart}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="IndiaMART"
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
              href={`mailto:${companyInfo.primaryContact.email}`}
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
          </div>
        </div>

        <div>
          <p className="font-label-caps text-safety-orange mb-5">PRODUCTS</p>
          <ul className="space-y-3.5">
            <li><Link to="/machines" className="text-white/60 hover:text-white link-underline text-body-sm font-body-sm">VMC Centers</Link></li>
            <li><Link to="/machines" className="text-white/60 hover:text-white link-underline text-body-sm font-body-sm">Grinding Machines</Link></li>
            <li><Link to="/machines" className="text-white/60 hover:text-white link-underline text-body-sm font-body-sm">Turning Machines</Link></li>
            <li><Link to="/software#gauging" className="text-white/60 hover:text-white link-underline text-body-sm font-body-sm">Gauging Systems</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-label-caps text-safety-orange mb-5">RESOURCES</p>
          <ul className="space-y-3.5">
            <li><Link to="/software" className="text-white/60 hover:text-white link-underline text-body-sm font-body-sm">CAD/CAM Software</Link></li>
            <li><Link to="/quote" className="text-white/60 hover:text-white link-underline text-body-sm font-body-sm">Technical Support</Link></li>
            <li><a className="text-white/60 hover:text-white link-underline text-body-sm font-body-sm" href={companyInfo.web.indiamart} target="_blank" rel="noopener noreferrer">Company Profile</a></li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="font-label-caps text-safety-orange mb-5">HEADQUARTERS</p>
          <div className="text-body-sm font-body-sm text-white/60 space-y-4">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[18px] mt-0.5 text-white/40">location_on</span>
              <span>Industrial Estate, Phagwara,<br />Punjab - 144401</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[18px] mt-0.5 text-white/40">location_on</span>
              <span>Focal Point, Kapurthala,<br />Punjab - 144601</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[18px] text-white/40">call</span>
              <a href={`tel:${companyInfo.primaryContact.phone}`} className="hover:text-white transition-colors">{companyInfo.primaryContact.phone}</a>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[18px] text-white/40">mail</span>
              <a href={`mailto:${companyInfo.primaryContact.email}`} className="hover:text-white transition-colors">{companyInfo.primaryContact.email}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-7 px-margin-mobile md:px-margin-desktop">
        <p className="font-label-caps text-white/40 text-center">
          © {new Date().getFullYear()} GOODMECH CNC SOLUTIONS · ALL RIGHTS RESERVED · ISO 9001:2015 CERTIFIED
        </p>
      </div>
    </footer>
  );
};
