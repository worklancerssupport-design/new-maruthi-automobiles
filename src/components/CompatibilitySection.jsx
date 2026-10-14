import React, { useState } from 'react';
import { brands } from '../data/brands';
import { ShieldAlert, MessageSquare, Send, CheckCircle2, ChevronRight, Wrench } from 'lucide-react';

export default function CompatibilitySection() {
  const oemBrands = brands.filter((b) => b.category === 'two-wheeler');
  const [selectedBrand, setSelectedBrand] = useState(oemBrands[0] || null);

  // Enquiry Generator state
  const [bikeModel, setBikeModel] = useState('');
  const [modelYear, setModelYear] = useState('');
  const [selectedPart, setSelectedPart] = useState('Engine components');

  const compatibleCategories = [
    { name: 'Engine components', desc: 'Pistons, rings, valves, gaskets, spark plugs' },
    { name: 'Brake pads & shoes', desc: 'Disc pads, drum shoes, brake cables, hydraulic fluid' },
    { name: 'Chain and sprocket kit', desc: 'Matched drive chain, rear & countershaft sprockets' },
    { name: 'Electrical components', desc: 'LED flashers, headlight bulbs, horns, starter relays' },
    { name: 'Locksets & switches', desc: 'Ignition key switch, fuel cap, handlebar lockset' },
    { name: 'Engine oils & lubricants', desc: '4T engine oil, scooter gear oil, chain lube' },
    { name: 'Other compatible spares', desc: 'Air filters, cables, mirrors, wheel bearings' }
  ];

  const handleWhatsAppEnquiry = (e) => {
    e.preventDefault();
    const brandName = selectedBrand ? selectedBrand.name : 'Motorcycle';
    const modelStr = bikeModel.trim() ? bikeModel.trim() : 'my bike';
    const yearStr = modelYear.trim() ? ` (${modelYear.trim()})` : '';

    const text = `Hello New Maruthi Automobiles, I would like to check compatibility and availability for ${selectedPart} for my ${brandName} ${modelStr}${yearStr}. Please let me know if you have matching spare parts in stock at your Tharamani store.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919444018868?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="compatibility" className="py-24 bg-automotive-dark border-t border-automotive-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-automotive-red/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-automotive-card border border-automotive-border text-automotive-red text-xs font-heading uppercase tracking-widest mb-3 font-bold">
            <Wrench className="w-4 h-4" />
            TWO-WHEELER BRAND COVERAGE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">
            BIKE SPARE PARTS <span className="text-automotive-red">FOR EVERY BRAND.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-automotive-muted font-sans">
            We stock compatible spare parts, filters, friction components, and routine service supplies for the most popular two-wheelers in Chennai.
          </p>
        </div>

        {/* 6 Manufacturer Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-10">
          {oemBrands.map((brand) => {
            const isSelected = selectedBrand?.name === brand.name;
            return (
              <button
                key={brand.name}
                onClick={() => setSelectedBrand(brand)}
                className={`p-4 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-between min-h-[130px] focus:outline-none relative overflow-hidden ${
                  isSelected
                    ? 'bg-automotive-card border-automotive-red shadow-glow-red'
                    : 'bg-automotive-surface border-automotive-border hover:border-automotive-borderHover hover:bg-automotive-card'
                }`}
              >
                {/* Active indicator bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-automotive-red" />
                )}

                {/* Brand Logo */}
                <div className="w-full max-w-[100px] h-9 flex items-center justify-center my-2">
                  <img
                    src={brand.logoSrc}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <span className="text-xs font-heading font-bold uppercase tracking-wider text-white">
                  {brand.name} Spares
                </span>

                <span className="text-[10px] text-automotive-muted font-sans mt-1 line-clamp-1">
                  Popular models
                </span>
              </button>
            );
          })}
        </div>

        {/* Brand Details & General Parts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Compatible Categories List for selected OEM */}
          <div className="lg:col-span-7 bg-automotive-card border border-automotive-border rounded-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-automotive-border pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-automotive-red uppercase tracking-wider">
                  Supported Model Lines
                </span>
                <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wide">
                  {selectedBrand?.name} Compatible Spare Categories
                </h3>
              </div>
              <span className="text-xs px-3 py-1 rounded bg-automotive-surface border border-automotive-border text-automotive-silver font-semibold self-start">
                Physical Store Stock
              </span>
            </div>

            {/* Popular models hint for this OEM */}
            <div className="mb-6 p-3.5 rounded-lg bg-automotive-surface border border-automotive-border text-xs text-automotive-silver flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>
                Commonly supported: <strong className="text-white">{selectedBrand?.supportedProducts?.join(', ')}</strong>
              </span>
            </div>

            {/* General Spare Parts Categories List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {compatibleCategories.map((cat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-automotive-surface/70 border border-automotive-border/80 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-automotive-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-heading font-bold uppercase text-white tracking-wider">
                      {cat.name}
                    </h4>
                    <p className="text-[11px] text-automotive-muted font-sans leading-tight mt-0.5">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mandatory Compatibility Disclaimer */}
            <div className="p-4 rounded-lg bg-automotive-surface/50 border border-amber-500/30 text-xs text-automotive-silver flex items-start gap-2.5 font-sans">
              <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p>
                <strong className="text-white font-medium">Compatibility Disclaimer:</strong> Part compatibility depends on the motorcycle model, year and variant. Please confirm your bike details with the store before purchasing.
              </p>
            </div>
          </div>

          {/* Interactive WhatsApp Enquiry Generator */}
          <div className="lg:col-span-5 bg-automotive-card border border-automotive-border rounded-xl p-6 sm:p-8 shadow-card-dark relative">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-automotive-surface border border-automotive-border text-xs font-heading font-bold uppercase tracking-wider text-automotive-red mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              Direct Store Enquiry Generator
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase tracking-wide mb-2">
              Check Part Availability
            </h3>
            <p className="text-xs text-automotive-muted font-sans mb-6">
              Enter your bike model and the part you need. This generates a prefilled WhatsApp message to our Tharamani store.
            </p>

            <form onSubmit={handleWhatsAppEnquiry} className="space-y-4">
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-automotive-silver mb-1.5">
                  Manufacturer
                </label>
                <div className="px-3.5 py-2.5 rounded-lg bg-automotive-surface border border-automotive-border text-white text-sm font-semibold">
                  {selectedBrand?.name}
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-automotive-silver mb-1.5">
                  Bike Model Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Activa 6G, Pulsar 150, Apache RTR 160, FZ-S..."
                  value={bikeModel}
                  onChange={(e) => setBikeModel(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-automotive-surface border border-automotive-border focus:border-automotive-red text-white placeholder-automotive-muted/60 text-sm font-sans focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-automotive-silver mb-1.5">
                  Manufacturing Year (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2018, 2021, BS4, BS6..."
                  value={modelYear}
                  onChange={(e) => setModelYear(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-automotive-surface border border-automotive-border focus:border-automotive-red text-white placeholder-automotive-muted/60 text-sm font-sans focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-automotive-silver mb-1.5">
                  Part Category Needed
                </label>
                <select
                  value={selectedPart}
                  onChange={(e) => setSelectedPart(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-automotive-surface border border-automotive-border focus:border-automotive-red text-white text-sm font-sans focus:outline-none transition-colors"
                >
                  {compatibleCategories.map((c, i) => (
                    <option key={i} value={c.name} className="bg-automotive-card text-white">
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-automotive-red hover:bg-automotive-redHover text-white py-3.5 px-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2 shadow-glow-red hover:shadow-glow-red-lg active:scale-98"
              >
                <Send className="w-4 h-4" />
                Check Availability on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
