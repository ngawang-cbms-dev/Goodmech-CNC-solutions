import React, { useState } from 'react';
import { companyInfo } from '../data/company';

export const Quote: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const inputClass =
    'w-full border border-outline-variant px-4 py-3 rounded-lg bg-surface-container-low focus:border-safety-orange focus:ring-2 focus:ring-safety-orange/20 transition-all outline-none';
  const labelClass = 'font-label-caps text-on-surface-variant block mb-2';

  return (
    <div className="pt-28 md:pt-32 pb-20 min-h-screen">
      {/* Header band */}
      <section className="relative bg-primary text-white overflow-hidden noise">
        <div className="absolute inset-0 blueprint-grid text-white opacity-[0.06]"></div>
        <div className="absolute -top-16 right-0 w-96 h-96 rounded-full bg-safety-orange/15 blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
          <span className="anim-in font-label-caps text-safety-orange" style={{ animationDelay: '0ms' }}>
            24-HOUR RESPONSE
          </span>
          <h1 className="anim-in text-headline-xl font-headline-xl text-white mt-3 mb-4" style={{ animationDelay: '90ms' }}>
            Request a Quote
          </h1>
          <p className="anim-in text-body-lg font-body-lg text-white/65 max-w-2xl" style={{ animationDelay: '180ms' }}>
            Provide your requirements below. Our engineering leads will review your specifications and provide a
            precision-calculated quote within 24 hours.
          </p>
        </div>
      </section>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-14">
        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Left Side: Form */}
          <div className="flex-1">
            <div className="reveal bg-surface-container-lowest border border-outline-variant p-8 md:p-10 rounded-2xl shadow-sm">
              {isSubmitted ? (
                <div className="anim-in text-center py-16 space-y-6">
                  <span className="material-symbols-outlined text-secondary text-7xl">check_circle</span>
                  <h2 className="text-headline-lg font-headline-lg text-on-surface">Quote Request Submitted!</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant max-w-md mx-auto">
                    Thank you for reaching out. A confirmation email has been sent to{' '}
                    <strong className="text-on-surface">{formData.email}</strong>, and our Director or engineering
                    leads will contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-md font-label-bold text-label-bold btn-press btn-sheen hover:bg-primary-container transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>FULL NAME</label>
                    <input
                      className={inputClass}
                      placeholder="e.g. John Doe"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>COMPANY NAME</label>
                    <input
                      className={inputClass}
                      placeholder="e.g. Precision Components Ltd"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>BUSINESS EMAIL</label>
                    <input
                      className={inputClass}
                      placeholder="john@company.com"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>PHONE NUMBER</label>
                    <input
                      className={inputClass}
                      placeholder="+91 00000 00000"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>PRODUCT INTEREST</label>
                    <select
                      className={`${inputClass} appearance-none`}
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="">Select a CNC Machine Category</option>
                      <option>CNC Lathes (Horizontal/Vertical)</option>
                      <option>VMC Machining Centers</option>
                      <option>Laser Gauging Systems</option>
                      <option>CAD/CAM Software Integration</option>
                      <option>Custom Tooling Solutions</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>PROJECT DETAILS &amp; MESSAGE</label>
                    <textarea
                      className={inputClass}
                      placeholder="Please describe your technical requirements, material types, and estimated production volumes..."
                      rows={5}
                      required
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-2">
                    <button
                      className="w-full md:w-auto bg-safety-orange text-white px-10 py-4 rounded-md font-label-bold text-label-bold btn-press btn-sheen glow-orange flex items-center justify-center gap-2 disabled:opacity-70"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="material-symbols-outlined animate-spin">sync</span>
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Enquiry Request
                          <span className="material-symbols-outlined text-[20px]">send</span>
                        </>
                      )}
                    </button>
                    <p className="font-label-caps text-on-surface-variant mt-4">
                      By submitting, you agree to our privacy policy regarding industrial data handling.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Side: Sidebar */}
          <aside className="lg:w-80 space-y-gutter reveal reveal-right">
            {/* Contact Card */}
            <div className="bg-primary text-white p-6 rounded-2xl relative overflow-hidden noise">
              <div className="absolute inset-0 blueprint-grid text-white opacity-[0.06]"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-safety-orange">
                    <img
                      alt="M Chopra"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0kR12yPXeiSjtYkToUDrVpj7dF_4-vHt7MFExRN-17XprwgpnRIUasTGnkiETwy6kU4XnEA4lmvSPy2YylIXykpMBTNlK4PRhJuHPSBt8yYDRz1vqdPJzKPgfACONOo2QeXgw3WugtsYgpVBs17ZaYZ7fX0hEnXL4lkanH9KM_amQaGafuSzzyX9cnyw0JipDd3IKEu96J0EeJ_IJoLZXLe4JoAYsjes109H4qJ-g5bh6IT0mMBW5rOWCTpnyVgpd1MmLsRNu5A"
                    />
                  </div>
                  <div>
                    <h3 className="text-headline-md font-headline-md text-white leading-tight">M Chopra</h3>
                    <p className="font-label-caps text-safety-orange mt-1">DIRECTOR</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-white/50 text-[20px]">location_on</span>
                    <div className="text-body-sm font-body-sm text-white/70">
                      <strong className="text-white">Headquarters:</strong><br />
                      Industrial Area, Phagwara<br />
                      Kapurthala, Punjab
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-white/50 text-[20px]">mail</span>
                    <span className="text-body-sm font-body-sm text-white/70">sales@goodmech.com</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-label-bold text-label-bold btn-press hover:brightness-105 w-full text-center"
                    href={companyInfo.web.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                    WhatsApp Support
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl">
              <h4 className="font-label-caps text-on-surface-variant mb-4">CERTIFICATIONS</h4>
              <div className="space-y-3">
                {[
                  { icon: 'verified', label: 'ISO 9001:2015' },
                  { icon: 'precision_manufacturing', label: 'Precision Grade AA' },
                  { icon: 'support_agent', label: '24/7 Tech Support' },
                ].map((c, i, arr) => (
                  <div
                    key={c.label}
                    className={`flex items-center gap-3 ${i < arr.length - 1 ? 'border-b border-outline-variant pb-3' : ''}`}
                  >
                    <span className="material-symbols-outlined text-secondary">{c.icon}</span>
                    <span className="font-label-bold text-label-bold text-on-surface">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-surface-dim rounded-2xl border border-outline-variant overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer group">
              <div className="w-full h-full relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Map location"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-1w5FTpzsxuctyRceqCRs-dHu3XKT1_87V3bjNYxnzO0fnTdGk_dEmEOHmlSR1enGgS5YXkjJWI8CbZRrz5-RetUWsee2Ww8vQghLhyo8dg7NUTcEQrkQSAR5IC63jIqi0JBolMl03QDueeWa7eHZf-W53EZZaip3tp69J_n8aB30I9Scq7gbJ7GQNZzc7iYDYF22PSkhIWgDrD_iUAOXfOQkJdnyR3Ft6hKtRj4q1i_aQxEthl2C0S-9L7XwiscyFJnY6uZcsw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-surface-container-lowest/90 p-2.5 rounded-lg shadow-lg border border-safety-orange">
                    <span className="material-symbols-outlined text-safety-orange text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_pin</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};
