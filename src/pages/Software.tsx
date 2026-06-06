import React from 'react';
import { Link } from 'react-router-dom';
import { Software as SoftwareProducts, GaugingSystems } from '../data/products';

export const Software: React.FC = () => {
  const coreProducts = SoftwareProducts.slice(0, 2); // VISI and WorkNC as featured
  const otherSoftware = SoftwareProducts.slice(2); // Others
  const gauging = GaugingSystems;

  return (
    <div className="pt-28 md:pt-32">
      {/* Page header band */}
      <section className="relative bg-primary text-white overflow-hidden noise">
        <div className="absolute inset-0 blueprint-grid text-white opacity-[0.06]"></div>
        <div className="absolute -top-20 right-10 w-[28rem] h-[28rem] rounded-full bg-secondary/20 blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-0 -left-10 w-80 h-80 rounded-full bg-safety-orange/15 blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
          <span className="anim-in font-label-caps text-safety-orange" style={{ animationDelay: '0ms' }}>
            DIGITAL MANUFACTURING
          </span>
          <h1 className="anim-in text-headline-xl font-headline-xl text-white mt-3 mb-4 max-w-3xl" style={{ animationDelay: '90ms' }}>
            CAD/CAM Software &amp; Gauging Systems
          </h1>
          <p className="anim-in text-body-lg font-body-lg text-white/65 max-w-2xl" style={{ animationDelay: '180ms' }}>
            Empower your factory floor with world-leading CAD/CAM workflows and high-accuracy measurement systems.
            Increase efficiency by up to 75% with professional engineering solutions.
          </p>
        </div>
      </section>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
          {/* Featured Software Products */}
          {coreProducts.map((product, index) => (
            <div
              key={product.id}
              className={`reveal ${index === 0 ? 'md:col-span-8' : 'md:col-span-4'} bg-surface-container-lowest rounded-2xl border border-outline-variant p-8 hover-lift relative overflow-hidden flex flex-col justify-between`}
              style={{ ['--reveal-delay' as string]: `${index * 110}ms` }}
            >
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-container text-on-secondary-container rounded-full mb-6">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span className="font-label-caps">{product.brand?.toUpperCase()} CAM</span>
                </div>
                <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">{product.name}</h2>
                <p className="text-body-md font-body-md text-on-surface-variant max-w-lg mb-8">{product.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {product.features.slice(0, 4).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-tech-blue text-[18px] mt-0.5">check_circle</span>
                      <span className="text-body-sm font-body-sm text-on-surface">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto relative z-10">
                <Link
                  to="/quote"
                  className="inline-flex bg-secondary text-white px-7 py-3 rounded-md font-label-bold text-label-bold items-center gap-2 btn-press btn-sheen hover:bg-on-secondary-container transition-colors"
                >
                  Request Demo <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
              <div className="absolute -right-12 -bottom-12 w-72 h-72 opacity-[0.08] pointer-events-none">
                <img className="w-full h-full object-contain" src={product.image} alt="" />
              </div>
            </div>
          ))}

          {/* Software Grid */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {otherSoftware.map((product, i) => (
              <div
                key={product.id}
                className="reveal group bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 flex flex-col justify-between hover-lift hover:border-safety-orange"
                style={{ ['--reveal-delay' as string]: `${(i % 3) * 90}ms` }}
              >
                <div>
                  <div className="font-label-caps text-safety-orange mb-2">{product.brand?.toUpperCase()}</div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-4">{product.name}</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                    {product.shortDesc || product.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-tech-blue text-[16px] mt-0.5">check_circle</span>
                        <span className="text-body-sm font-body-sm text-on-surface">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  to="/quote"
                  className="block text-center bg-primary text-white py-3 rounded-md font-label-bold text-label-bold btn-press hover:bg-safety-orange transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Gauging Systems Section */}
        <section className="mb-20" id="gauging">
          <div className="text-center mb-10 reveal">
            <span className="font-label-caps text-safety-orange">METROLOGY</span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mt-3">Precision Measurement &amp; Gauging</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {gauging.map((product, index) => (
              <div
                key={product.id}
                className={`reveal ${index === 0 ? 'md:col-span-8' : 'md:col-span-4'} bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant hover-lift flex flex-col md:flex-row gap-8 items-center`}
                style={{ ['--reveal-delay' as string]: `${index * 110}ms` }}
              >
                <div className={index === 0 ? 'w-full md:w-1/2' : 'w-full'}>
                  <div className="font-label-caps text-safety-orange mb-2">METROLOGY SYSTEMS</div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-4">{product.name}</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6">{product.description}</p>
                  <div className="flex gap-4 mb-6">
                    <div className="bg-surface-container-low p-4 rounded-xl text-center flex-1 border border-outline-variant">
                      <div className="text-headline-md font-headline-md text-safety-orange">{product.precision}</div>
                      <div className="font-label-caps text-on-surface-variant mt-1">PRECISION</div>
                    </div>
                    <div className="bg-surface-container-low p-4 rounded-xl text-center flex-1 border border-outline-variant flex flex-col justify-center">
                      <div className="font-label-bold text-label-bold text-on-surface">{product.features[1]}</div>
                      <div className="font-label-caps text-on-surface-variant mt-1">FEATURE</div>
                    </div>
                  </div>
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-2 bg-secondary text-white px-7 py-3 rounded-md font-label-bold text-label-bold btn-press btn-sheen hover:bg-on-secondary-container transition-colors"
                  >
                    Request Info <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                {index === 0 && (
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-secondary/10 blur-3xl rounded-full"></div>
                      <img alt={product.name} className="relative max-h-64 object-contain mix-blend-multiply" src={product.image} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Software Capabilities Matrix */}
        <section className="mb-20 reveal">
          <div className="text-center mb-10">
            <span className="font-label-caps text-safety-orange">COMPARE</span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mt-3">Software Capabilities Matrix</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-outline-variant">
            <table className="w-full text-left border-collapse bg-surface-container-lowest">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 font-label-caps text-white/80">CAPABILITIES</th>
                  {SoftwareProducts.slice(0, 4).map((product) => (
                    <th key={product.id} className="p-4 font-label-caps text-white text-center">{product.brand}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-body-sm text-body-sm">
                <tr>
                  <td className="p-4 border-b border-outline-variant font-label-bold text-on-surface">3/5-Axis Milling</td>
                  {SoftwareProducts.slice(0, 4).map((product) => (
                    <td key={`${product.id}-milling`} className="p-4 border-b border-outline-variant text-center">
                      {(product.features.some((f) => f.includes('5-axis') || f.includes('milling')) || product.category.includes('CAM')) ? (
                        <span className="material-symbols-outlined text-secondary">check_circle</span>
                      ) : (
                        <span className="material-symbols-outlined text-on-surface-variant/30">cancel</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="bg-surface-container-low">
                  <td className="p-4 border-b border-outline-variant font-label-bold text-on-surface">Advanced Simulation</td>
                  {SoftwareProducts.slice(0, 4).map((product) => (
                    <td key={`${product.id}-sim`} className="p-4 border-b border-outline-variant text-center">
                      {product.features.some((f) => f.includes('simulation') || f.includes('Simulation')) ? (
                        <span className="material-symbols-outlined text-secondary">check_circle</span>
                      ) : (
                        <span className="material-symbols-outlined text-on-surface-variant/30">cancel</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-outline-variant font-label-bold text-on-surface">CAD Integration</td>
                  {SoftwareProducts.slice(0, 4).map((product) => (
                    <td key={`${product.id}-cad`} className="p-4 border-b border-outline-variant text-center">
                      {product.features.some((f) => f.includes('CATIA') || f.includes('SOLIDWORKS') || f.includes('CAD')) ? (
                        <span className="material-symbols-outlined text-secondary">check_circle</span>
                      ) : (
                        <span className="material-symbols-outlined text-on-surface-variant/30">cancel</span>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="reveal reveal-scale relative bg-primary text-white rounded-3xl p-10 md:p-16 text-center overflow-hidden noise">
          <div className="absolute inset-0 blueprint-grid text-white opacity-[0.06]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,rgba(10,108,255,0.18),transparent_60%)] pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-safety-orange/15 blur-[120px] pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-label-caps text-safety-orange">FREE FACILITY AUDIT</span>
            <h2 className="text-headline-lg font-headline-lg text-white mt-3 mb-4">Transform Your Production Line</h2>
            <p className="text-body-lg font-body-lg text-white/70 mb-8">
              Ready to increase efficiency by up to 75%? Our engineering team will provide a custom software audit
              and live demonstration at your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                data-magnetic="0.25"
                className="inline-flex justify-center items-center gap-2 bg-safety-orange text-white px-9 py-4 rounded-md font-label-bold text-label-bold btn-press btn-sheen glow-orange"
              >
                BOOK A FREE DEMO
              </Link>
              <a
                href="miscellounes/goodmech-cnc-solutions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 border border-white/30 text-white px-9 py-4 rounded-md font-label-bold text-label-bold btn-press hover:bg-white/10 hover:border-white/60 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
                DOWNLOAD CATALOGUE
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
