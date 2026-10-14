import React, { useState } from 'react';
import { sparePartsCategories } from '../data/spareParts';
import PartCategoryCard from './PartCategoryCard';
import PartEnquiryModal from './PartEnquiryModal';
import { Layers, Sparkles, Filter } from 'lucide-react';

export default function SpareParts() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All 8 Categories' },
    { id: 'maintenance', label: 'Routine Service & Oils' },
    { id: 'mechanical', label: 'Mechanical & Brakes' },
    { id: 'electrical-body', label: 'Electrical & Accessories' },
  ];

  const filteredCategories = sparePartsCategories.filter((cat) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'maintenance') return cat.id === 'engine-oils' || cat.id === 'tyres';
    if (activeFilter === 'mechanical') return cat.id === 'mechanical-parts' || cat.id === 'braking-safety' || cat.id === 'oem-general-spares';
    if (activeFilter === 'electrical-body') return cat.id === 'electrical' || cat.id === 'batteries' || cat.id === 'body-accessories';
    return true;
  });

  return (
    <section id="spare-parts" className="py-24 bg-automotive-surface relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-automotive-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-automotive-card border border-automotive-border text-automotive-red text-xs font-heading uppercase tracking-widest mb-3 font-bold">
              <span className="w-2 h-2 rounded-full bg-automotive-red animate-pulse" />
              EXPLORE OUR RANGE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">
              THE RIGHT PART FOR <span className="text-automotive-red">EVERY RIDE.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-automotive-muted max-w-2xl font-sans">
              Explore essential two-wheeler spare parts, maintenance products and riding accessories available at New Maruthi Automobiles.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 bg-automotive-dark p-1.5 rounded-lg border border-automotive-border self-start">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-3.5 py-1.5 rounded text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  activeFilter === opt.id
                    ? 'bg-automotive-red text-white shadow-glow-red'
                    : 'text-automotive-muted hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <PartCategoryCard
              key={category.id}
              category={category}
              onSelectCategory={(cat) => setSelectedCategory(cat)}
            />
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-12 p-5 rounded-xl bg-automotive-card border border-automotive-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-automotive-surface border border-automotive-border flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-automotive-red" />
            </div>
            <div>
              <h4 className="text-sm font-heading font-bold uppercase text-white tracking-wider">
                Looking for a specific part not listed here?
              </h4>
              <p className="text-xs text-automotive-muted font-sans">
                Our physical store stocks extensive two-wheeler consumables and hard-to-find components for Chennai riders.
              </p>
            </div>
          </div>

          <a
            href="tel:+919444018868"
            className="px-5 py-2.5 rounded-lg bg-automotive-surface hover:bg-automotive-border text-white text-xs font-heading font-bold uppercase tracking-wider transition-all border border-automotive-border shrink-0"
          >
            Call +91 94440 18868
          </a>
        </div>
      </div>

      {/* Detail & Enquiry Modal */}
      {selectedCategory && (
        <PartEnquiryModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </section>
  );
}
