import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/** Precision machined logo mark — wordmark inherits currentColor so it adapts
 *  to the transparent (over-hero) and solid header states. */
const LogoMark: React.FC = () => (
  <span className="flex items-center gap-2.5">
    <span className="relative grid place-items-center w-9 h-9 rounded-lg bg-safety-orange shadow-[0_6px_16px_-6px_rgba(255,107,0,0.7)]">
      <span className="absolute inset-[6px] border-[1.6px] border-white/85 rounded-[3px]" />
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
    </span>
    <span className="flex flex-col leading-none">
      <span className="font-headline-md text-[19px] font-bold tracking-tight">GOODMECH</span>
      <span className="font-label-caps text-[9px] opacity-70 mt-0.5">CNC&nbsp;SOLUTIONS</span>
    </span>
  </span>
);

export const Header: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change — reset during render (no effect needed)
  const currentLoc = location.pathname + location.hash;
  const [lastLoc, setLastLoc] = useState(currentLoc);
  if (currentLoc !== lastLoc) {
    setLastLoc(currentLoc);
    if (menuOpen) setMenuOpen(false);
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

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === '/';
  // Transparent over the dark hero only at the top of the home page
  const overHero = isHome && !scrolled && !menuOpen;

  const navLinks = [
    { to: '/machines', label: 'CNC Machines', match: '/machines' },
    { to: '/software', label: 'Software', match: '/software' },
    { to: '/software#gauging', label: 'Gauging Systems', match: '' },
    { to: '/#services', label: 'Services', match: '' },
    { to: '/#about', label: 'About', match: '' },
  ];

  const navLinkClass = (match: string) =>
    `link-underline font-label-bold text-label-bold transition-colors duration-300 ${
      match && isActive(match)
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
        <div className="flex items-center gap-10">
          <Link
            to="/"
            aria-label="Goodmech CNC Solutions — home"
            className={`flex items-center transition-colors duration-500 ${overHero ? 'text-white' : 'text-on-surface'}`}
          >
            <LogoMark />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-7">
            {navLinks.map((l) => (
              <Link key={l.label} to={l.to} className={navLinkClass(l.match)}>
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
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface-container-lowest border-t border-outline-variant px-margin-mobile pb-6 pt-3 space-y-1 shadow-xl">
          {navLinks.map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              style={{ transitionDelay: menuOpen ? `${80 + i * 45}ms` : '0ms' }}
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
