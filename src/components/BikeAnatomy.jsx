import React, { useState } from 'react';
import { bikeComponents } from '../data/bikeComponents';
import MotorcycleVector from './MotorcycleVector';
import { MessageSquare, Wrench, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export default function BikeAnatomy({ onOpenEnquiry }) {
  const [selectedId, setSelectedId] = useState('engine');
  const [activeTab, setActiveTab] = useState('diagram'); // 'diagram' | 'list'

  const activeComponent = bikeComponents.find((c) => c.id === selectedId) || bikeComponents[0];

  const handleWhatsAppEnquiry = (comp) => {
    const encoded = encodeURIComponent(comp.whatsappPrefill);
    window.open(`https://wa.me/919444018868?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="bike-anatomy" className="relative py-24 bg-automotive-dark border-t border-automotive-border overflow-hidden">
      {/* Background ambient red glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-automotive-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-automotive-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-automotive-card border border-automotive-border text-automotive-red text-xs font-heading uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-automotive-red animate-pulse" />
              KNOW YOUR MACHINE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">
              UNDERSTAND YOUR BIKE. <span className="text-automotive-red">FIND THE RIGHT PART.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-automotive-muted max-w-2xl font-sans">
              Explore the important components of a two-wheeler and learn what each part does before visiting the store.
            </p>
          </div>

          {/* View toggle for accessibility */}
          <div className="mt-6 md:mt-0 flex items-center bg-automotive-card border border-automotive-border rounded-lg p-1 self-start">
            <button
              onClick={() => setActiveTab('diagram')}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'diagram'
                  ? 'bg-automotive-red text-white shadow-glow-red'
                  : 'text-automotive-muted hover:text-white'
              }`}
            >
              <Wrench className="w-4 h-4" />
              Interactive Schematic
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'list'
                  ? 'bg-automotive-red text-white shadow-glow-red'
                  : 'text-automotive-muted hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              All 12 Components List
            </button>
          </div>
        </div>

        {/* Quick Hotspot Component Selector Pills */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {bikeComponents.map((comp) => {
              const isSelected = comp.id === selectedId;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedId(comp.id)}
                  className={`px-3 py-1.5 rounded text-xs font-sans font-medium transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-automotive-red text-white border-automotive-red shadow-glow-red font-semibold'
                      : 'bg-automotive-surface text-automotive-muted border-automotive-border hover:border-automotive-borderHover hover:text-white'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isSelected ? 'bg-white text-automotive-red' : 'bg-automotive-card text-automotive-muted'
                    }`}
                  >
                    {comp.number}
                  </span>
                  {comp.shortName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area: Side-by-side on desktop, stacked on mobile */}
        {activeTab === 'diagram' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Vector Canvas */}
            <div className="lg:col-span-7 bg-automotive-surface/70 border border-automotive-border rounded-xl p-4 sm:p-6 backdrop-blur-sm relative shadow-2xl">
              <div className="flex items-center justify-between mb-4 border-b border-automotive-border/60 pb-3">
                <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-automotive-muted">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  Live Hotspot Radar Active
                </div>
                <div className="text-xs text-automotive-muted hidden sm:block">
                  Click or tap any numbered marker to inspect
                </div>
              </div>

              {/* The Vector Illustration */}
              <MotorcycleVector
                activeComponentId={selectedId}
                onSelectComponent={setSelectedId}
                components={bikeComponents}
              />

              <div className="mt-4 pt-3 border-t border-automotive-border/60 flex flex-wrap items-center justify-between text-xs text-automotive-muted gap-2">
                <span>Selected: <strong className="text-white font-medium">#{activeComponent.number} {activeComponent.name}</strong></span>
                <span className="text-[11px] text-automotive-silver/70">Schematic side profile • 12 key zones</span>
              </div>
            </div>

            {/* Information Panel (Beside on desktop, below on mobile) */}
            <div className="lg:col-span-5">
              <div className="bg-automotive-card border border-automotive-border rounded-xl p-6 sm:p-8 shadow-card-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-automotive-red/10 rounded-bl-full pointer-events-none" />

                {/* Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-automotive-red text-white flex items-center justify-center font-heading font-black text-base shadow-glow-red">
                      {activeComponent.number}
                    </span>
                    <span className="text-xs font-heading uppercase tracking-wider text-automotive-red font-bold">
                      Component Spec
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-automotive-surface border border-automotive-border text-[11px] text-automotive-silver uppercase font-mono">
                    {activeComponent.categoryId}
                  </span>
                </div>

                {/* Component Name */}
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-wide mb-4">
                  {activeComponent.name}
                </h3>

                {/* Purpose in simple English */}
                <div className="mb-5 bg-automotive-surface/60 rounded-lg p-4 border border-automotive-border/70">
                  <h4 className="text-xs font-heading uppercase tracking-wider text-automotive-silver mb-1.5 flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-automotive-red" />
                    What It Does (Purpose)
                  </h4>
                  <p className="text-sm text-automotive-text font-sans leading-relaxed">
                    {activeComponent.purpose}
                  </p>
                </div>

                {/* Maintenance & Replacement Considerations */}
                <div className="mb-5 bg-automotive-surface/60 rounded-lg p-4 border border-automotive-border/70">
                  <h4 className="text-xs font-heading uppercase tracking-wider text-automotive-silver mb-1.5 flex items-center gap-1.5 font-bold">
                    <Wrench className="w-4 h-4 text-amber-500" />
                    Maintenance & Replacement Signs
                  </h4>
                  <p className="text-sm text-automotive-muted font-sans leading-relaxed">
                    {activeComponent.maintenance}
                  </p>
                </div>

                {/* Relevant Products at New Maruthi Automobiles */}
                <div className="mb-5">
                  <h4 className="text-xs font-heading uppercase tracking-wider text-automotive-muted mb-2 font-bold">
                    Available at New Maruthi Automobiles:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeComponent.relevantProducts.map((prod, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-automotive-text bg-automotive-surface px-3 py-2 rounded border border-automotive-border"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-automotive-red shrink-0" />
                        <span className="truncate">{prod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Associated Stocked Brands */}
                {activeComponent.confirmedBrands && activeComponent.confirmedBrands.length > 0 && (
                  <div className="mb-6 pt-3 border-t border-automotive-border">
                    <span className="text-[11px] uppercase tracking-wider text-automotive-muted font-heading block mb-2 font-bold">
                      Stocked Brands for this part:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeComponent.confirmedBrands.map((b, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-automotive-dark text-white border border-automotive-border text-xs font-semibold"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Primary CTA: Ask About This Part */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => handleWhatsAppEnquiry(activeComponent)}
                    className="flex-1 bg-automotive-red hover:bg-automotive-redHover text-white py-3 px-5 rounded-lg font-heading font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2 shadow-glow-red hover:shadow-glow-red-lg active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    ASK ABOUT THIS PART
                  </button>
                  <a
                    href="#spare-parts"
                    className="bg-automotive-surface hover:bg-automotive-border text-automotive-silver hover:text-white py-3 px-4 rounded-lg font-heading font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-1.5 border border-automotive-border"
                  >
                    View Category
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Accessible Fallback Full Component Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bikeComponents.map((comp) => (
              <div
                key={comp.id}
                className="bg-automotive-card border border-automotive-border rounded-xl p-6 hover:border-automotive-borderHover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-automotive-red text-white flex items-center justify-center font-heading font-bold text-sm">
                      {comp.number}
                    </span>
                    <span className="text-xs text-automotive-muted font-mono">{comp.categoryId}</span>
                  </div>
                  <h3 className="text-xl font-heading font-black text-white uppercase tracking-wide mb-2">
                    {comp.name}
                  </h3>
                  <p className="text-sm text-automotive-text mb-3">{comp.purpose}</p>
                  <p className="text-xs text-automotive-muted mb-4 border-l-2 border-amber-500/80 pl-2">
                    {comp.maintenance}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {comp.confirmedBrands.map((b, i) => (
                      <span key={i} className="text-[11px] bg-automotive-surface px-2 py-0.5 rounded text-automotive-silver border border-automotive-border">
                        {b}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleWhatsAppEnquiry(comp)}
                    className="w-full bg-automotive-surface hover:bg-automotive-red text-white py-2.5 px-4 rounded font-heading font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 border border-automotive-border hover:border-automotive-red"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Enquire on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
