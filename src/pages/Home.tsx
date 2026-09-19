import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { companyInfo, services } from '../data/company';
import { heroProducts } from '../data/heroProducts';

// Small helper for staggered reveal delays
const delay = (ms: number) => ({ ['--reveal-delay' as string]: `${ms}ms` } as React.CSSProperties);

export const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    product: 'Simufact Forming — Hot & Cold Forging Simulation',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // Derived from the authorisation list so the marquee can never contradict
  // the reseller statement in the footer.
  const partners = companyInfo.authorizations.map((a) => ({ name: a.principal, tag: a.domain }));

  return (
    <div className="overflow-x-hidden">
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-primary text-white noise">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="High impact industrial machinery"
            className="w-full h-full object-cover opacity-45 scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsSmu2aL0mdgr-gcyuUc7ds9zfyFD69i-JKeylNHD9ufyHqpLmm-LUwex17HO95MV8r3oVK-Dj_mxSfBXkyov32q7jiLSdYaITyzglNlm-GCnfCp-uDznZsUzQ-7k3sV5Axge-xLuypVvWhpI-RU7cu__cLWkQWn7neZ3rnSf2cGQc0i4FkWhnGJqu7QhMamqZA66xq8MjOgO-RmQ9MJWU92dNbbMHbQ_wSAT8yB_OKdA0B9uNaRWEtj6XUJV0pzDRMSM8CkbeOQ"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30"></div>
        </div>

        {/* Animated blueprint grid + glow orbs */}
        <div className="absolute inset-0 z-0 text-white blueprint-grid blueprint-grid-animated opacity-[0.07]"></div>
        <div className="absolute -top-32 -right-24 w-[34rem] h-[34rem] rounded-full bg-safety-orange/25 blur-[120px] animate-drift pointer-events-none"></div>
        <div className="absolute bottom-[-10rem] left-[-6rem] w-[30rem] h-[30rem] rounded-full bg-secondary/20 blur-[130px] animate-float pointer-events-none"></div>

        {/* Vertical decorative label */}
        <div className="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2 z-10">
          <span className="block font-label-caps text-white/40 [writing-mode:vertical-rl] rotate-180 tracking-[0.4em]">
            EST. {companyInfo.established} · PUNJAB, INDIA
          </span>
        </div>

        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full pt-28 pb-16">
          <div className="max-w-3xl">
            <span
              className="anim-in inline-flex items-center gap-2.5 text-secondary-fixed bg-white/8 border border-white/15 backdrop-blur px-4 py-1.5 rounded-full font-label-caps mb-7"
              style={{ animationDelay: '60ms' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-glow-pulse"></span>
              27 YEARS OF EXPERIENCE
            </span>

            <h1 className="anim-in text-headline-xl font-headline-xl text-white mb-6" style={{ animationDelay: '150ms' }}>
              Precision, reliability &amp;{' '}
              <span className="relative whitespace-nowrap">
                <span
                  className="text-gradient"
                  style={{ backgroundImage: 'linear-gradient(110deg, var(--color-secondary-fixed) 45%, var(--color-safety-orange))' }}
                >
                  cutting-edge
                </span>
              </span>{' '}
              technology.
            </h1>

            <p className="anim-in text-body-lg font-body-lg text-white/70 mb-9 max-w-xl" style={{ animationDelay: '240ms' }}>
              Hot &amp; cold forging simulation, 3D design and automatic CAM — alongside precision Widma CNC
              machines and Go3D additive systems. Authorized resellers serving North India's manufacturers
              since {companyInfo.established}.
            </p>

            <div className="anim-in flex flex-col sm:flex-row gap-4" style={{ animationDelay: '330ms' }}>
              <Link
                to="/machines"
                data-magnetic="0.3"
                className="group inline-flex items-center justify-center gap-2 bg-safety-orange text-white px-8 py-4 rounded-md font-label-bold text-label-bold btn-press btn-sheen glow-orange"
              >
                Explore Catalog
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-md font-label-bold text-label-bold btn-press hover:bg-white/10 hover:border-white/60"
              >
                Request Quote
              </Link>
            </div>

            {/* Floating spec chips */}
            {/* <div className="anim-in mt-8 md:mt-10 flex flex-wrap gap-3" style={{ animationDelay: '420ms' }}>
              {[
                { k: 'SPINDLE', v: '12,000 RPM' },
                { k: 'ACCURACY', v: '±0.005 mm' },
                { k: 'EFFICIENCY', v: '+75%' },
              ].map((s) => (
                <div key={s.k} className="glass-dark rounded-lg px-4 py-2.5 flex items-center gap-3">
                  <span className="font-label-caps text-white/50">{s.k}</span>
                  <span className="font-headline-md text-[18px] text-white">{s.v}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Scroll cue — hidden on short viewports so it never collides with the spec chips */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex [@media(max-height:820px)]:!hidden flex-col items-center gap-2 text-white/50 pointer-events-none">
          <span className="font-label-caps">SCROLL</span>
          <span className="material-symbols-outlined animate-float">expand_more</span>
        </div>
      </section>

      {/* ===================== TRUST SIGNALS BANNER ===================== */}
      <section className="bg-surface-container-lowest border-b border-outline-variant" id="about">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
          {[
            { icon: 'verified', big: '27 Years', small: 'Of Experience' },
            { icon: 'location_on', big: 'Punjab, India', small: 'Phagwara & Kapurthala' },
            { icon: 'engineering', big: 'Complete Support', small: 'From Installation to CAM' },
          ].map((item, i) => (
            <div
              key={item.big}
              className="reveal flex items-center gap-4 py-8 md:px-8 justify-center md:justify-start"
              style={delay(i * 110)}
            >
              <span className="material-symbols-outlined text-safety-orange text-3xl">{item.icon}</span>
              <div>
                <p className="text-headline-md font-headline-md text-on-surface">{item.big}</p>
                <p className="font-label-caps text-on-surface-variant mt-1">{item.small}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================== HERO PRODUCTS ======================== */}
      {/* The three flagship offerings. Deliberately given more weight than the
          rest of the catalogue so a visitor sees our core strengths first. */}
      <section className="relative py-20 md:py-24 bg-primary text-white overflow-hidden noise" id="hero-products">
        <div className="absolute inset-0 blueprint-grid text-white opacity-[0.06]"></div>
        <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-safety-orange/15 blur-[130px] pointer-events-none"></div>

        <div className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="reveal max-w-2xl mb-12">
            <span className="font-label-caps text-safety-orange">OUR CORE STRENGTHS</span>
            <h2 className="text-headline-lg font-headline-lg text-white mt-3 mb-4">Hero Products</h2>
            <div className="accent-rule mb-5"></div>
            <p className="text-body-lg font-body-lg text-white/65">
              The three products we lead with — forging simulation, 3D design and automatic CAM. Each is supplied
              as an authorized reseller, with in-person implementation, training and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {heroProducts.map((h, i) => (
              <Link
                key={h.id}
                to={h.slug}
                className="reveal group relative flex flex-col bg-white/[0.04] border border-white/12 rounded-2xl p-8 overflow-hidden hover-lift hover:border-white/30"
                style={{ ...delay(i * 110), ['--card-accent' as string]: `var(${h.accentVar})` }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: 'var(--card-accent)' }}
                ></span>
                <span
                  className="absolute -right-16 -top-16 w-44 h-44 rounded-full blur-3xl opacity-25 transition-opacity duration-500 group-hover:opacity-50"
                  style={{ background: 'var(--card-accent)' }}
                ></span>

                <span
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6"
                  style={{ background: 'var(--card-accent)' }}
                >
                  <span className="material-symbols-outlined text-2xl">{h.icon}</span>
                </span>

                <p className="relative text-headline-md font-headline-md leading-none tracking-tight mb-2">
                  {h.wordmark}
                  <span style={{ color: 'var(--card-accent)' }}>{h.wordmarkTail}</span>
                </p>
                <p className="relative font-label-caps text-white/45 mb-5">{h.discipline.toUpperCase()}</p>

                <p className="relative text-body-sm font-body-sm text-white/70 mb-6">{h.homeBlurb}</p>

                <ul className="relative space-y-2 mb-8">
                  {h.homeBullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-body-xs font-body-xs text-white/80">
                      <span className="material-symbols-outlined text-[16px] mt-0.5" style={{ color: 'var(--card-accent)' }}>
                        check_circle
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <span className="relative mt-auto inline-flex items-center gap-2 font-label-bold text-label-bold text-white group-hover:gap-4 transition-all">
                  Explore {h.navLabel}
                  <span className="material-symbols-outlined text-[18px]">trending_flat</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CORE EXPERTISE BENTO ===================== */}
      <section className="py-16 md:py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-10 reveal">
          <span className="font-label-caps text-safety-orange">THE REST OF THE CATALOGUE</span>
          <h2 className="text-headline-lg font-headline-lg text-on-surface mt-3 mb-4">Machines &amp; Additive</h2>
          <div className="accent-rule"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* CNC Turning */}
          <div
            className="reveal md:col-span-8 bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl flex flex-col justify-between group hover-lift overflow-hidden"
            style={delay(0)}
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined text-safety-orange text-4xl">rotate_right</span>
                <span className="font-label-caps text-on-secondary-container bg-secondary-container px-3 py-1.5 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
                Widma CNC Turning Machines
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 max-w-md">
                Heavy-duty vertical turning lathes and special-purpose machines for large-diameter, high-precision
                components — engineered for demanding production environments.
              </p>
              <ul className="space-y-2.5 mb-8">
                {['Capacity up to 4,000 mm diameter', 'Rigid cast-iron construction', 'Custom special-purpose builds'].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-2.5 text-body-sm font-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-tech-blue text-[18px]">check_circle</span>
                      {f}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="relative h-64 w-full rounded-xl overflow-hidden">
              <img
                alt="CNC Turning Machine Detail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdJ12H-Ke4DwfP0zavvqZ_C_zf80mZ5j56SjItnXE8p7R_98IP2AC0a1vt6lxFUTnSBq6mSaH3HnZkL9Idtb52hLBpKAFqf7e_nXbQ9yDQFj5sb3d5BOAvSORP3Ak-5q6hEwPFG6pY2pd8BUiDm4HPre43Cb5pq6JGgxN2EsBmlHvzU8ERw55XGLbB9D1h0qEwYE5Qz2BmjyXrmW-zenYT6FIF9TTa76SSrVnryXGKHh-9-iNFtRc7ij0__upRzd5A7IgcU5wzQg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Grinding Machines */}
          <div
            className="reveal md:col-span-4 bg-surface-container border border-outline-variant p-8 rounded-2xl group hover-lift flex flex-col justify-between"
            style={delay(90)}
          >
            <div>
              <span className="material-symbols-outlined text-safety-orange text-4xl mb-8 block">
                settings_input_component
              </span>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-4">Grinding Machines</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
                Ultra-precise grinding solutions for tool manufacturing and cylindrical components. Achieve
                sub-micron tolerances with ease.
              </p>
              <div className="aspect-square bg-surface-muted rounded-xl mb-6 overflow-hidden">
                <img
                  alt="Grinding precision"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4t3-mBZ7i2MCl-VObxHHYEALWOTZK2xJlOPrzrjDCA39l7xB_b9RfbeBsv70o_s9LMrjyPEp1zWzaccdVdN77gFab-OKyYUE3AHabuVg9EbBhtLDYMA00vqJ_7pqtOlMh4Ozf2UGZVYw_eogI17v1KrHSuPG1gnao2SPoDqu5AJuQ_rVO7h7XmR--nW4qNhxl-hwyKzmJB73e9xHH6RQnj8SVRqgxelDHZjUzOfaE2itq4fK0jPWmlQP6W-RQLPi_OO4FF4PTlw"
                />
              </div>
            </div>
            <Link
              to="/machines"
              className="text-on-surface font-label-bold text-label-bold flex items-center gap-2 group-hover:gap-4 group-hover:text-safety-orange transition-all mt-auto"
            >
              View Models <span className="material-symbols-outlined">trending_flat</span>
            </Link>
          </div>

          {/* Special Purpose & Deep Hole Drilling */}
          <Link
            to="/machines"
            className="reveal md:col-span-4 bg-primary text-white p-8 rounded-2xl group hover-lift flex flex-col justify-between relative overflow-hidden noise"
            style={delay(0)}
          >
            <div className="absolute inset-0 blueprint-grid text-white opacity-[0.06]"></div>
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-safety-orange/20 blur-3xl"></div>
            <div className="relative">
              <span className="material-symbols-outlined text-safety-orange text-4xl mb-8 block">precision_manufacturing</span>
              <h3 className="text-headline-md font-headline-md mb-4">Special Purpose &amp; Deep Hole Drilling</h3>
              <p className="text-body-sm font-body-sm text-white/70 mb-8">
                Purpose-built Widma machines — rotary indexing, fine boring, valve seat, facing &amp; centering — plus
                gundrilling and BTA deep-hole drilling for straight, high-accuracy bores.
              </p>
            </div>
            <span className="relative inline-flex items-center gap-2 font-label-bold text-label-bold text-white group-hover:gap-4 group-hover:text-safety-orange transition-all">
              Explore Builds <span className="material-symbols-outlined">trending_flat</span>
            </span>
          </Link>

          {/* 3D Printers */}
          <Link
            to="/printers"
            className="reveal md:col-span-8 border border-outline-variant bg-surface-container-lowest p-8 rounded-2xl flex items-center gap-8 group hover-lift cursor-pointer"
            style={delay(90)}
          >
            <div className="flex-1">
              <span className="font-label-caps text-safety-orange">ADDITIVE MANUFACTURING</span>
              <h3 className="text-headline-md font-headline-md text-on-surface mt-2 mb-2">3D Printers - Go3D</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Go3D industrial 3D printers for fast in-house prototyping, jigs &amp; fixtures, and high-detail end-use parts.
              </p>
              <span className="inline-flex items-center gap-2 mt-5 font-label-bold text-label-bold text-on-surface group-hover:gap-4 group-hover:text-safety-orange transition-all">
                Discover Printers <span className="material-symbols-outlined">trending_flat</span>
              </span>
            </div>
            <div className="w-28 h-28 md:w-32 md:h-32 bg-surface-muted rounded-full flex items-center justify-center border border-outline-variant flex-shrink-0 group-hover:border-safety-orange transition-colors">
              <span className="material-symbols-outlined text-on-surface text-5xl group-hover:text-safety-orange transition-colors">
                view_in_ar
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ===================== PARTNERS MARQUEE ===================== */}
      <section className="py-16 bg-primary text-white overflow-hidden">
        <p className="font-label-caps text-white/40 text-center mb-10 px-6">
          AUTHORIZED RESELLERS FOR GLOBAL ENGINEERING LEADERS
        </p>
        <div className="marquee-host marquee-mask">
          <div className="marquee-track gap-16">
            {[...partners, ...partners].map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex flex-col items-center shrink-0 opacity-60 hover:opacity-100 transition-opacity">
                <span className="text-headline-md font-headline-md font-bold tracking-tight">{p.name}</span>
                <span className="font-label-caps text-white/50 mt-1">{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TECHNICAL FACTSHEET ===================== */}
      <section className="py-24 md:py-28 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter lg:gap-16 items-center">
          <div className="reveal reveal-left relative" style={delay(0)}>
            <div className="absolute -inset-3 blueprint-grid text-on-surface opacity-[0.18] rounded-2xl -z-10"></div>
            <img
              alt="Technical detail"
              className="rounded-2xl shadow-2xl border border-outline-variant w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC6MXh57koTQ6iaC8fUPVgbz_GI8m0kSpj8aqYHevKDCaXCNIj7tntUr-6mo-owuthWN2GSCx5_5raLdj0YFS92x-SCqSUslosU1votGtWg2S2LRdg2ez9DC4LiCAAeuqQzs05RVTGXb714-Sq7lC4VO9_EjEXUqdElFd1JQSnMWxXgjY4NIOEqXtnGLUbqk2Fixd2pgGFR30g-UycnctLJGtqRTJrdySMEDwa4l1NYfye3pkHdlI47YftCk6U_tGhoeZQ0EQxEw"
            />
            <div className="absolute -bottom-6 -right-6 bg-safety-orange p-6 rounded-xl text-white shadow-xl glow-orange hidden md:block">
              <p className="font-label-caps mb-1 text-white/80">EXPERIENCE</p>
              <p className="text-headline-md font-headline-md">27 Years</p>
            </div>
          </div>
          <div className="reveal reveal-right lg:pl-4" style={delay(120)}>
            <span className="font-label-caps text-safety-orange">SPECIFICATIONS</span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mt-3 mb-8">Engineered for Performance</h2>
            <div className="space-y-1">
              {[
                ['MAX SPINDLE SPEED', '12,000 RPM'],
                ['POSITIONING ACCURACY', '± 0.005 mm'],
                ['ATC CAPACITY', '24 / 30 / 40 Tools'],
                ['CNC CONTROLLER', 'Fanuc / Siemens / Mitsubishi'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="fact-sheet-cell py-4 flex justify-between items-center group hover:px-2 transition-all"
                >
                  <span className="font-label-caps text-on-surface-variant">{k}</span>
                  <span className="text-body-md font-body-md text-on-surface font-bold group-hover:text-safety-orange transition-colors">
                    {v}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="miscellounes/goodmech-cnc-solutions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="0.2"
              className="inline-flex items-center gap-2 mt-10 bg-primary text-white px-9 py-4 rounded-md font-label-bold text-label-bold btn-press btn-sheen hover:bg-primary-container"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              Download Specification Guide
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="py-24 md:py-28 bg-surface-container-lowest border-y border-outline-variant" id="services">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-14 reveal max-w-2xl">
            <span className="font-label-caps text-safety-orange">END-TO-END</span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mt-3 mb-4">Our Services</h2>
            <div className="accent-rule mb-5"></div>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              End-to-end support from machine selection to long-term maintenance — we're with you at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="reveal group relative bg-surface-container-low border border-outline-variant rounded-2xl p-7 hover-lift hover:border-safety-orange overflow-hidden"
                style={delay((i % 3) * 90)}
              >
                <span className="absolute top-5 right-6 font-label-caps text-on-surface-variant/40 text-[13px]">
                  0{i + 1}
                </span>
                <div className="w-13 h-13 rounded-xl bg-primary text-white flex items-center justify-center mb-5 group-hover:bg-safety-orange transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface mb-2">{service.title}</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ENQUIRY TRIGGER ===================== */}
      <section className="py-24 md:py-28 px-margin-mobile md:px-margin-desktop relative overflow-hidden" id="enquiry">
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="reveal reveal-scale bg-primary text-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 noise">
            {/* Left: pitch */}
            <div className="relative p-10 md:p-12 flex flex-col justify-center">
              <div className="absolute inset-0 blueprint-grid text-white opacity-[0.06]"></div>
              <div className="absolute -left-20 bottom-0 w-64 h-64 rounded-full bg-safety-orange/20 blur-3xl"></div>
              <div className="relative">
                <span className="font-label-caps text-safety-orange">GET IN TOUCH</span>
                <h2 className="text-headline-lg font-headline-lg mt-3 mb-4">Request a Consultation</h2>
                <p className="text-body-lg font-body-lg text-white/70 mb-8">
                  Get a personalized technical proposal and best pricing for your specific manufacturing needs in
                  Punjab.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-white/10 border border-white/15 rounded-full flex items-center justify-center text-secondary-fixed">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <a
                    href={`tel:${companyInfo.primaryContact.phone}`}
                    className="font-label-bold text-label-bold text-white link-underline"
                  >
                    {companyInfo.primaryContact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-surface-container-lowest text-on-surface p-8 md:p-12">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
                  <span className="material-symbols-outlined text-secondary text-6xl">check_circle</span>
                  <h3 className="text-headline-md font-headline-md text-on-surface">Request Received!</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant max-w-xs">
                    Our engineering team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-label-caps text-on-surface-variant mb-2 block">FULL NAME</label>
                      <input
                        className="w-full border border-outline-variant focus:border-safety-orange focus:ring-2 focus:ring-safety-orange/20 rounded-lg bg-surface-container-low px-4 py-3 outline-none transition-all"
                        placeholder="Engineering Lead"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="font-label-caps text-on-surface-variant mb-2 block">COMPANY</label>
                      <input
                        className="w-full border border-outline-variant focus:border-safety-orange focus:ring-2 focus:ring-safety-orange/20 rounded-lg bg-surface-container-low px-4 py-3 outline-none transition-all"
                        placeholder="Manufacturing Ltd."
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-label-caps text-on-surface-variant mb-2 block">PRODUCT OF INTEREST</label>
                    <select
                      className="w-full border border-outline-variant focus:border-safety-orange focus:ring-2 focus:ring-safety-orange/20 rounded-lg bg-surface-container-low px-4 py-3 outline-none transition-all"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    >
                      <optgroup label="Hero Products">
                        <option>Simufact Forming — Hot &amp; Cold Forging Simulation</option>
                        <option>SOLIDWORKS</option>
                        <option>WorkNC CAM</option>
                      </optgroup>
                      <optgroup label="Machines">
                        <option>Grinding Machines</option>
                        <option>Turning Machines</option>
                        <option>Special Purpose Machines</option>
                        <option>Deep Hole Drilling Machines</option>
                      </optgroup>
                      <optgroup label="Software &amp; Additive">
                        <option>CAD/CAM Software</option>
                        <option>CAE/Simulation Software</option>
                        <option>3D Printers - Go3D</option>
                      </optgroup>
                    </select>
                  </div>
                  <button
                    className="w-full bg-safety-orange text-white py-4 rounded-md font-label-bold text-label-bold btn-press btn-sheen glow-orange flex items-center justify-center gap-2 disabled:opacity-70"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">sync</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Quote Request
                        <span className="material-symbols-outlined text-[20px]">send</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
