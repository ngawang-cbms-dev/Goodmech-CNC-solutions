import React from 'react';
import { Link } from 'react-router-dom';
import type { HeroProduct } from '../data/heroProducts';
import { companyInfo } from '../data/company';
import { BrandTile } from './BrandTile';
import { VendorLogo } from './VendorLogo';

/**
 * Dedicated page layout for a HERO product. Deliberately heavier than the
 * tabbed ProductShowcase used for the rest of the catalogue — the brief asks
 * for these three to stand out rather than be listed at equal weight.
 */
export const HeroProductPage: React.FC<{ product: HeroProduct }> = ({ product }) => {
  const accent = { ['--hero-accent' as string]: `var(${product.accentVar})` } as React.CSSProperties;

  return (
    <div style={accent}>
      {/* ============================ HERO BAND ============================ */}
      <section className="relative bg-primary text-white overflow-hidden noise pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="absolute inset-0 blueprint-grid blueprint-grid-animated text-white opacity-[0.07]"></div>
        <div
          className="absolute -top-40 -right-24 w-[34rem] h-[34rem] rounded-full blur-[130px] opacity-25 animate-drift pointer-events-none"
          style={{ background: 'var(--hero-accent)' }}
        ></div>

        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <nav className="anim-in flex items-center gap-2 font-label-caps text-white/40 mb-8">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span style={{ color: 'var(--hero-accent)' }}>HERO PRODUCT</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span
                className="anim-in inline-flex items-center gap-2.5 bg-white/8 border border-white/15 backdrop-blur px-4 py-1.5 rounded-full font-label-caps mb-7"
                style={{ animationDelay: '60ms', color: 'var(--hero-accent)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-glow-pulse" style={{ background: 'var(--hero-accent)' }}></span>
                {product.eyebrow}
              </span>

              <h1
                className="anim-in text-headline-xl font-headline-xl leading-none mb-4"
                style={{ animationDelay: '120ms' }}
              >
                {product.wordmark}
                {product.wordmarkTail && <span style={{ color: 'var(--hero-accent)' }}>{product.wordmarkTail}</span>}
              </h1>

              <p className="anim-in text-headline-md font-headline-md text-white/90 mb-2" style={{ animationDelay: '180ms' }}>
                {product.discipline}
              </p>
              <div className="anim-in flex flex-wrap items-center gap-x-4 gap-y-2 mb-8" style={{ animationDelay: '200ms' }}>
                <VendorLogo vendor={product.vendor} plate />
                <span className="font-label-caps text-white/40">SUPPLIED &amp; SUPPORTED BY GOODMECH</span>
              </div>

              <p className="anim-in text-body-lg font-body-lg text-white/75 max-w-2xl mb-9" style={{ animationDelay: '260ms' }}>
                {product.summary}
              </p>

              <div className="anim-in flex flex-col sm:flex-row gap-4" style={{ animationDelay: '320ms' }}>
                <Link
                  to="/quote"
                  data-magnetic="0.3"
                  className="group inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-md font-label-bold text-label-bold btn-press btn-sheen"
                  style={{ background: 'var(--hero-accent)' }}
                >
                  Request a Demo
                  <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
                <a
                  href={companyInfo.web.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-md font-label-bold text-label-bold btn-press hover:bg-white/10 hover:border-white/60"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  Talk to an Engineer
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 anim-in" style={{ animationDelay: '380ms' }}>
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-white/5">
                {product.image ? (
                  <img src={product.image} alt={product.displayName} className="w-full h-full object-cover" />
                ) : (
                  <BrandTile
                    wordmark={product.wordmark}
                    tail={product.wordmarkTail}
                    caption={product.vendor}
                    accentVar={product.accentVar}
                    className="min-h-[260px]"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="anim-in mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10" style={{ animationDelay: '440ms' }}>
            {product.stats.map((s) => (
              <div key={s.k} className="bg-primary/80 backdrop-blur px-5 py-5">
                <p className="font-label-caps text-white/40 mb-1.5">{s.k}</p>
                <p className="font-headline-md text-[17px] text-white">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= WHAT WE BRING (VALUE) ======================= */}
      <section className="py-20 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-12 reveal max-w-2xl">
          <span className="font-label-caps" style={{ color: 'var(--hero-accent)' }}>WHY GOODMECH</span>
          <h2 className="text-headline-lg font-headline-lg text-on-surface mt-3 mb-4">
            What you get when you buy it from us
          </h2>
          <div className="accent-rule" style={{ background: 'linear-gradient(90deg, var(--hero-accent), transparent)' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {product.expertise.map((e, i) => (
            <div
              key={e.title}
              className="reveal group bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 hover-lift"
              style={{ ['--reveal-delay' as string]: `${(i % 2) * 100}ms` }}
            >
              <div
                className="w-13 h-13 rounded-xl flex items-center justify-center mb-5 text-white"
                style={{ background: 'var(--hero-accent)' }}
              >
                <span className="material-symbols-outlined text-2xl">{e.icon}</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3">{e.title}</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================== CAPABILITIES =========================== */}
      <section className="py-20 md:py-24 bg-surface-container-lowest border-y border-outline-variant">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-12 reveal max-w-2xl">
            <span className="font-label-caps" style={{ color: 'var(--hero-accent)' }}>CAPABILITIES</span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mt-3 mb-4">
              What {product.displayName} does
            </h2>
            <div className="accent-rule" style={{ background: 'linear-gradient(90deg, var(--hero-accent), transparent)' }}></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {product.capabilities.map((c, i) => (
              <div
                key={c.title}
                className="reveal bg-surface-container-low border border-outline-variant rounded-2xl p-7 hover-lift"
                style={{ ['--reveal-delay' as string]: `${(i % 3) * 90}ms`, borderTopColor: 'var(--hero-accent)', borderTopWidth: '3px' }}
              >
                <span className="material-symbols-outlined text-3xl mb-4 block" style={{ color: 'var(--hero-accent)' }}>
                  {c.icon}
                </span>
                <h3 className="text-headline-md font-headline-md text-on-surface mb-2">{c.title}</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== WORKFLOW + INDUSTRIES ====================== */}
      <section className="py-20 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16">
          <div className="lg:col-span-7">
            <div className="mb-10 reveal">
              <span className="font-label-caps" style={{ color: 'var(--hero-accent)' }}>IN PRACTICE</span>
              <h2 className="text-headline-lg font-headline-lg text-on-surface mt-3">How it works</h2>
            </div>
            <ol className="space-y-0">
              {product.workflow.map((w, i) => (
                <li
                  key={w.title}
                  className="reveal flex gap-5 py-5 border-b border-outline-variant"
                  style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
                >
                  <span
                    className="shrink-0 w-9 h-9 rounded-lg border border-outline-variant bg-surface-container-lowest flex items-center justify-center font-label-caps text-on-surface"
                    style={{ color: 'var(--hero-accent)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-label-bold text-label-bold text-on-surface mb-1">{w.title}</h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">{w.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5">
            <div className="reveal reveal-right lg:sticky lg:top-28 space-y-gutter">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-7">
                <span className="font-label-caps text-on-surface-variant">WHERE IT IS USED</span>
                <h3 className="text-headline-md font-headline-md text-on-surface mt-2 mb-5">Typical applications</h3>
                <ul className="space-y-3">
                  {product.applications.map((ind) => (
                    <li key={ind} className="flex items-start gap-2.5 text-body-sm font-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-[18px] mt-0.5" style={{ color: 'var(--hero-accent)' }}>
                        check_circle
                      </span>
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative rounded-2xl border border-outline-variant bg-primary text-white p-7 overflow-hidden noise">
                <div className="absolute inset-0 blueprint-grid text-white opacity-[0.06]"></div>
                <div className="relative">
                  <span className="material-symbols-outlined text-3xl mb-3 block" style={{ color: 'var(--hero-accent)' }}>
                    {product.icon}
                  </span>
                  <h3 className="font-headline-md text-headline-md mb-2">Request a free demo</h3>
                  <p className="text-body-sm font-body-sm text-white/65 mb-5">
                    Tell us what you are working on and our team will walk you through the software before you commit
                    to anything.
                  </p>
                  <Link
                    to="/quote"
                    className="inline-flex w-full justify-center items-center gap-2 text-white py-3 rounded-lg font-label-bold text-label-bold btn-press btn-sheen"
                    style={{ background: 'var(--hero-accent)' }}
                  >
                    Book a Demo
                    <span className="material-symbols-outlined text-[18px]">trending_flat</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ SPEC TABLE ============================ */}
      <section className="pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="reveal bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex items-center gap-2 bg-surface-container-low">
            <span className="material-symbols-outlined text-[18px]" style={{ color: 'var(--hero-accent)' }}>data_usage</span>
            <h2 className="font-label-caps text-on-surface tracking-widest">
              PRODUCT SUMMARY — {product.displayName}
            </h2>
          </div>
          <dl className="divide-y divide-outline-variant">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-4">
                <dt className="font-label-caps text-on-surface-variant sm:w-56 shrink-0">{k.toUpperCase()}</dt>
                <dd className="text-body-md font-body-md text-on-surface">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
};
