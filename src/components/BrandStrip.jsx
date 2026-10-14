import React, { useState } from 'react';
import { brands, brandCategories } from '../data/brands';
import { ShieldCheck, Info } from 'lucide-react';

export default function BrandStrip() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredBrands = selectedCategory === 'all'
    ? brands
    : brands.filter((b) => b.category === selectedCategory);

  return (
    <section id="brands" className="py-12 bg-automotive-surface border-y border-automotive-border relative overflow-hidden">
      {/* Background subtle diagonal texture */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-automotive-red font-bold mb-1">
              <ShieldCheck className="w-4 h-4" />
              AUTHENTIC BRANDS STOCKED & SUPPORTED
            </div>
        <h2 className="text-xl sm:text-2xl font-heading font-black text-white uppercase tracking-wider">
          TRUSTED MANUFACTURER SPARES & LUBRICANTS
        </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-automotive-dark/90 p-1.5 rounded-lg border border-automotive-border self-start">
            {brandCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-automotive-red text-white shadow-glow-red'
                    : 'text-automotive-muted hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {filteredBrands.map((brand) => (
            <div
              key={brand.name}
              className="group bg-automotive-card hover:bg-automotive-cardHover border border-automotive-border hover:border-automotive-borderHover rounded-xl p-4 transition-all duration-300 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[125px]"
            >
              {/* Top Accent Strip */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: brand.accentColor }}
              />

              {/* Logo */}
              <div className="w-full max-w-[148px] h-12 flex items-center justify-center mb-2.5">
                <img
                  src={brand.logoSrc}
                  alt={`${brand.name} logo`}
                  className={`w-full h-full object-contain transition-transform ${
                    brand.name === 'Motul' ? 'scale-[2.4] group-hover:scale-[2.4]' : 'group-hover:scale-[1.03]'
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Brand Tagline / Subtitle */}
              <span className="text-[11px] text-automotive-muted font-sans font-medium line-clamp-1 group-hover:text-automotive-silver transition-colors">
                {brand.tagline}
              </span>

              <span className="text-[10px] uppercase tracking-wider font-heading text-automotive-silver/60 mt-1">
                {brand.type}
              </span>
            </div>
          ))}
        </div>

        {/* Mandatory Transparency Disclaimer */}
        <div className="mt-8 pt-4 border-t border-automotive-border/60 flex items-start sm:items-center gap-2.5 text-xs text-automotive-muted font-sans">
          <Info className="w-4 h-4 text-automotive-red shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-automotive-silver font-semibold">Store Stock Notice:</strong> Logos and brand names represent spare parts and lubricants stocked or supported at New Maruthi Automobiles. We do not claim official franchise dealership, exclusive partnership, or authorised service-centre status.
          </p>
        </div>
      </div>
    </section>
  );
}
