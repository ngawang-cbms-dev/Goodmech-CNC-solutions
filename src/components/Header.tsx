import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'
import { heroProducts } from '../data/heroProducts';


/** Brand logo — the goodmech image sits on a white badge so it reads cleanly
 *  over both the dark transparent-hero header and the solid scrolled header.
 *  TODO(client): swap for a transparent-background PNG/SVG when available. */
const LogoMark: React.FC = () => (
    <img src={logo} alt="Goodmech CNC Solutions" className="h-8 md:h-18 w-auto" />
);

/** Catalogue pages that sit *under* the hero products in the Software menu. */
const softwareCategories = [
  { to: '/software', label: 'CAD/CAM Software', hint: 'WorkNC · VISI · Edgecam · Esprit · SOLIDWORKS' },
  { to: '/cae', label: 'CAE / Simulation Software', hint: 'Simufact · FTI · Q-DAS' },
];

export const Header: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [softwareOpen, setSoftwareOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  // Close mobile menu on route change — reset during render (no effect needed)
  const currentLoc = location.pathname + location.hash;
  const [lastLoc, setLastLoc] = useState(currentLoc);
  if (currentLoc !== lastLoc) {
    setLastLoc(currentLoc);
    if (menuOpen) setMenuOpen(false);
    if (softwareOpen) setSoftwareOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Escape closes the desktop software menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSoftwareOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const openSoftware = () => { window.clearTimeout(closeTimer.current); setSoftwareOpen(true); };
  // Small grace period so the pointer can cross the gap into the panel
  const closeSoftware = () => { closeTimer.current = window.setTimeout(() => setSoftwareOpen(false), 120); };

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === '/';
  // Transparent over the dark hero only at the top of the home page
  const overHero = isHome && !scrolled && !menuOpen && !softwareOpen;

  const heroSlugs = heroProducts.map((h) => h.slug);
  const softwareActive =
    isActive('/software') || isActive('/cae') || heroSlugs.some((s) => isActive(s));

  // Links rendered after the Software menu; CNC Machines sits before it.
  const trailingLinks = [
    { to: '/printers', label: '3D Printers - Go3D', match: '/printers' },
    { to: '/#services', label: 'Services', match: '' },
    { to: '/#about', label: 'About', match: '' },
  ];

  const navLinkClass = (active: boolean) =>
    `link-underline font-label-bold text-label-bold transition-colors duration-300 ${
      active
        ? 'text-safety-orange'
        : overHero
        ? 'text-white/85 hover:text-white'
        : 'text-on-surface-variant hover:text-on-surface'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        overHero
          ? 'bg-transparent py-5'
          : 'glass border-b border-outline-variant py-3 shadow-[0_8px_30px_-18px_rgba(23,25,31,0.45)]'
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            aria-label="Goodmech CNC Solutions — home"
            className={`flex items-center transition-colors duration-500 ${overHero ? 'text-white' : 'text-on-surface'}`}
          >
            <LogoMark />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            <Link to="/machines" className={navLinkClass(isActive('/machines'))}>CNC Machines</Link>

            {/* Software — hero products first, catalogue pages underneath */}
            <div className="relative" onMouseEnter={openSoftware} onMouseLeave={closeSoftware}>
              <button
                type="button"
                onClick={() => setSoftwareOpen((o) => !o)}
                aria-expanded={softwareOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1 ${navLinkClass(softwareActive)}`}
              >
                Software
                <span
                  className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${softwareOpen ? 'rotate-180' : ''}`}
                >
                  expand_more
                </span>
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[520px] transition-all duration-300 ${
                  softwareOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                }`}
              >
                <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-2xl overflow-hidden">
                  <div className="px-5 pt-5 pb-2">
                    <p className="font-label-caps text-safety-orange">HERO PRODUCTS</p>
                  </div>
                  <ul className="px-3 pb-3 space-y-1">
                    {heroProducts.map((h) => (
                      <li key={h.id}>
                        <Link
                          to={h.slug}
                          className={`flex items-start gap-3.5 p-3 rounded-xl transition-colors ${
                            isActive(h.slug) ? 'bg-surface-container' : 'hover:bg-surface-container'
                          }`}
                        >
                          <span
                            className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white"
                            style={{ background: `var(${h.accentVar})` }}
                          >
                            <span className="material-symbols-outlined text-[20px]">{h.icon}</span>
                          </span>
                          <span>
                            <span className="block font-label-bold text-label-bold text-on-surface">{h.navLabel}</span>
                            <span className="block text-body-xs font-body-xs text-on-surface-variant mt-0.5">{h.navHint}</span>
                          </span>
                          <span className="material-symbols-outlined text-[18px] ml-auto self-center text-on-surface-variant/50">
                            trending_flat
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-outline-variant bg-surface-container-low px-5 py-4">
                    <p className="font-label-caps text-on-surface-variant mb-3">FULL SOFTWARE CATALOGUE</p>
                    <ul className="space-y-2">
                      {softwareCategories.map((c) => (
                        <li key={c.to}>
                          <Link
                            to={c.to}
                            className={`flex items-center justify-between gap-3 group ${
                              isActive(c.to) ? 'text-safety-orange' : 'text-on-surface hover:text-safety-orange'
                            } transition-colors`}
                          >
                            <span>
                              <span className="block font-label-bold text-label-bold">{c.label}</span>
                              <span className="block text-body-xs font-body-xs text-on-surface-variant">{c.hint}</span>
                            </span>
                            <span className="material-symbols-outlined text-[18px] opacity-50 group-hover:translate-x-0.5 transition-transform">
                              trending_flat
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {trailingLinks.map((l) => (
              <Link key={l.label} to={l.to} className={navLinkClass(Boolean(l.match) && isActive(l.match))}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/quote"
            data-magnetic="0.25"
            className="hidden lg:inline-flex items-center gap-2 bg-safety-orange text-white px-6 py-2.5 rounded-md font-label-bold text-label-bold btn-press btn-sheen hover:shadow-[0_12px_28px_-10px_rgba(255,107,0,0.65)]"
          >
            Get Best Price
            <span className="material-symbols-outlined text-[18px]">trending_flat</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              overHero ? 'text-white hover:bg-white/10' : 'text-on-surface hover:bg-surface-container'
            }`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-[28px]">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-y-auto overscroll-contain transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface-container-lowest border-t border-outline-variant px-margin-mobile pb-6 pt-4 space-y-1 shadow-xl">
          {/* Hero products get the top slot and a heavier treatment */}
          <p className="font-label-caps text-safety-orange px-4 pb-2">HERO PRODUCTS</p>
          {heroProducts.map((h, i) => (
            <Link
              key={h.id}
              to={h.slug}
              style={{ transitionDelay: menuOpen ? `${60 + i * 40}ms` : '0ms' }}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-lg border transition-all duration-500 ${
                menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
              } ${
                isActive(h.slug)
                  ? 'border-safety-orange bg-safety-orange/10'
                  : 'border-outline-variant bg-surface-container-low'
              }`}
            >
              <span
                className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-white"
                style={{ background: `var(${h.accentVar})` }}
              >
                <span className="material-symbols-outlined text-[18px]">{h.icon}</span>
              </span>
              <span>
                <span className="block font-label-bold text-label-bold text-on-surface">{h.navLabel}</span>
                <span className="block text-body-xs font-body-xs text-on-surface-variant">{h.navHint}</span>
              </span>
              <span className="material-symbols-outlined text-[18px] ml-auto opacity-40">north_east</span>
            </Link>
          ))}

          <p className="font-label-caps text-on-surface-variant px-4 pt-5 pb-2">BROWSE</p>
          {[
            { to: '/machines', label: 'CNC Machines', match: '/machines' },
            { to: '/software', label: 'CAD/CAM Software', match: '/software' },
            { to: '/cae', label: 'CAE/Simulation Software', match: '/cae' },
            { to: '/printers', label: '3D Printers - Go3D', match: '/printers' },
            { to: '/#services', label: 'Services', match: '' },
            { to: '/#about', label: 'About', match: '' },
          ].map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              style={{ transitionDelay: menuOpen ? `${180 + i * 40}ms` : '0ms' }}
              className={`flex items-center justify-between px-4 py-3.5 rounded-lg font-label-bold text-label-bold transition-all duration-500 ${
                menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
              } ${
                l.match && isActive(l.match)
                  ? 'bg-safety-orange/10 text-safety-orange'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              {l.label}
              <span className="material-symbols-outlined text-[18px] opacity-50">north_east</span>
            </Link>
          ))}
          <div className="pt-3 border-t border-outline-variant">
            <Link
              to="/quote"
              className="flex w-full items-center justify-center gap-2 bg-safety-orange text-white px-6 py-3.5 rounded-md font-label-bold text-label-bold btn-press shadow-lg"
            >
              Get Best Price
              <span className="material-symbols-outlined text-[18px]">trending_flat</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
