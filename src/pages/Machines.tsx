import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VMCMachines, GrindingMachines, TurningMachines } from '../data/products';

type Category = 'vmc' | 'grinding' | 'turning';

export const Machines: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('vmc');
  const displayedProducts =
    activeCategory === 'vmc' ? VMCMachines :
    activeCategory === 'grinding' ? GrindingMachines :
    TurningMachines;
  const categoryTitle =
    activeCategory === 'vmc' ? 'Vertical Machining Centers' :
    activeCategory === 'grinding' ? 'Grinding Machines' :
    'CNC Turning Machines';
  const categoryBlurb =
    activeCategory === 'vmc'
      ? 'High-precision CNC vertical machining centers ranging from compact to extra-large capacity for diverse manufacturing needs.'
      : activeCategory === 'grinding'
      ? 'Ultra-precision grinding solutions for tools, dies, and precision components with sub-micron accuracy.'
      : 'Heavy-duty CNC turning and mill-turn solutions for complex cylindrical and large-diameter components.';

  const filters: { id: Category; icon: string; label: string }[] = [
    { id: 'vmc', icon: 'precision_manufacturing', label: 'Vertical Machining' },
    { id: 'grinding', icon: 'settings_input_component', label: 'Grinding Machines' },
    { id: 'turning', icon: 'rotate_right', label: 'Turning Machines' },
  ];

  return (
    <div className="pt-28 md:pt-32">
      {/* Page header band */}
      <section className="relative bg-primary text-white overflow-hidden noise">
        <div className="absolute inset-0 blueprint-grid text-white opacity-[0.06]"></div>
        <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-safety-orange/15 blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
            <div className="anim-in" style={{ animationDelay: '0ms' }}>
              <span className="font-label-caps text-safety-orange tracking-widest">INDUSTRIAL SOLUTIONS</span>
              <h1 className="text-headline-xl font-headline-xl text-white mt-3">{categoryTitle}</h1>
            </div>
            <p className="anim-in max-w-md text-body-md font-body-md text-white/65" style={{ animationDelay: '120ms' }}>
              {categoryBlurb}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Side Navigation Filters */}
          <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-28 self-start">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant">
              <h3 className="font-label-caps text-on-surface-variant mb-4">MACHINE CATEGORIES</h3>
              <ul className="space-y-2">
                {filters.map((f) => (
                  <li key={f.id}>
                    <button
                      onClick={() => setActiveCategory(f.id)}
                      className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all btn-press ${
                        activeCategory === f.id
                          ? 'bg-primary text-white shadow-md'
                          : 'text-on-surface-variant hover:bg-surface-container'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{f.icon}</span>
                      <span className="font-label-bold text-label-bold">{f.label}</span>
                      {activeCategory === f.id && (
                        <span className="material-symbols-outlined text-[18px] ml-auto text-safety-orange">arrow_forward</span>
                      )}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to="/quote"
                    className="w-full text-left p-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-all flex items-center gap-3"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span className="font-label-bold text-label-bold">Request Quote</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative p-6 rounded-2xl border border-outline-variant bg-primary text-white overflow-hidden noise">
              <div className="absolute inset-0 blueprint-grid text-white opacity-[0.06]"></div>
              <div className="relative">
                <span className="material-symbols-outlined text-safety-orange text-3xl mb-3 block">support_agent</span>
                <h3 className="font-headline-md text-headline-md mb-2">Technical Support</h3>
                <p className="text-body-sm font-body-sm text-white/65 mb-5">Connect with our engineering team for custom configurations.</p>
                <a
                  href="https://wa.me/919742665115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center items-center gap-2 bg-white/10 border border-white/20 text-white py-3 rounded-lg hover:bg-white/20 transition-colors font-label-bold text-label-bold btn-press"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  WhatsApp Support
                </a>
              </div>
            </div>
          </aside>

          {/* Product Display Area - Dynamic Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {displayedProducts.map((product, index) => (
              <article
                key={`${activeCategory}-${product.id}`}
                className={`anim-in group bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 hover-lift hover:border-safety-orange overflow-hidden flex flex-col ${
                  index === 0 ? 'md:col-span-12' : 'md:col-span-6'
                }`}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className={index === 0 ? 'md:flex md:gap-8 md:items-stretch' : ''}>
                  {/* Image */}
                  <div
                    className={`relative bg-surface-muted rounded-xl overflow-hidden mb-6 ${
                      index === 0 ? 'md:mb-0 md:w-1/2 aspect-video md:aspect-auto' : 'aspect-video'
                    }`}
                  >
                    {index === 0 && (
                      <span className="absolute top-3 left-3 z-10 bg-safety-orange text-white font-label-caps px-2.5 py-1 rounded-md">
                        {product.brand}
                      </span>
                    )}
                    <img
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                      src={product.image}
                    />
                  </div>

                  {/* Body */}
                  <div className={index === 0 ? 'md:w-1/2 flex flex-col' : 'flex flex-col'}>
                    <h2 className="text-headline-md font-headline-md text-on-surface">{product.name}</h2>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 mb-5">
                      {product.shortDesc || product.description}
                    </p>

                    {product.specs && (
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="p-3 bg-surface-container-low border border-outline-variant rounded-lg">
                            <span className="font-label-caps text-on-surface-variant block mb-1.5">{key}</span>
                            <span className="font-label-bold text-label-bold text-on-surface">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="space-y-1.5 mb-6">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-tech-blue text-[16px] mt-0.5">check_circle</span>
                          <span className="text-body-xs font-body-xs text-on-surface">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/quote"
                      className="mt-auto inline-flex justify-center items-center gap-2 bg-primary text-white py-3 rounded-md font-label-bold text-label-bold btn-press btn-sheen hover:bg-safety-orange transition-colors"
                    >
                      Get Quote
                      <span className="material-symbols-outlined text-[18px]">trending_flat</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Technical Factsheet Section */}
        <section className="mt-16 bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden reveal" id="specs">
          <div className="p-6 border-b border-outline-variant flex items-center gap-2 bg-surface-container-low">
            <span className="material-symbols-outlined text-[18px] text-safety-orange">data_usage</span>
            <h2 className="font-label-caps text-on-surface tracking-widest">PRODUCT SUMMARY — {categoryTitle}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full technical-table text-left border-collapse">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 font-label-caps text-white/80">MODEL</th>
                  <th className="px-6 py-4 font-label-caps text-white/80">PRECISION</th>
                  <th className="px-6 py-4 font-label-caps text-white/80">KEY FEATURES</th>
                  <th className="px-6 py-4 font-label-caps text-white/80">APPLICATIONS</th>
                </tr>
              </thead>
              <tbody className="text-body-sm font-body-sm text-on-surface">
                {displayedProducts.slice(0, 4).map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 border-b border-outline-variant font-bold">{product.name}</td>
                    <td className="px-6 py-4 border-b border-outline-variant">
                      <span className="inline-block font-label-bold text-label-bold text-secondary bg-secondary-container px-2.5 py-1 rounded-md">
                        {product.precision || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b border-outline-variant text-on-surface-variant">{product.features.slice(0, 2).join(', ')}</td>
                    <td className="px-6 py-4 border-b border-outline-variant text-on-surface-variant">{product.applications?.slice(0, 2).join(', ') || 'General Manufacturing'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};
