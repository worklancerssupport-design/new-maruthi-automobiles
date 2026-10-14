import React from 'react';
import { Droplet, MessageSquare, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LubricantsSection() {
  const lubricantBrands = [
    {
      name: 'Castrol',
      series: 'Castrol Activ & Power1 4T',
      description: 'Widely chosen 4-stroke motorcycle engine oil formulated for thermal protection and continuous engine lubrication during everyday Chennai city riding.',
      accent: '#007A3D',
      types: ['4T Motorcycle Oil', 'Scooter Gear Oil', 'Chain Lube Spray'],
      whatsapp: 'Hello New Maruthi Automobiles, I would like to enquire about Castrol 4T engine oil availability at your Tharamani store.'
    },
    {
      name: 'Shell',
      series: 'Shell Advance 4T Series',
      description: 'Formulated with cleansing technology to help retain engine power, keep pistons clean, and provide smooth clutch engagement on gear shifts.',
      accent: '#FFD100',
      types: ['4T Engine Lubricant', 'Semi-Synthetic Blends', 'Mineral 4T Oil'],
      whatsapp: 'Hello New Maruthi Automobiles, I am checking availability for Shell Advance motorcycle oil.'
    },
    {
      name: 'Motul',
      series: 'Motul 3000 & 5100 Technosynthese',
      description: 'Popular high-performance engine lubricant known for shear stability, high-temperature resistance, and performance in high-revving engines.',
      accent: '#E30613',
      types: ['Mineral & Semi-Synthetic', 'Motul Chain Lube C2', 'Chain Cleaner C1'],
      whatsapp: 'Hello New Maruthi Automobiles, I am looking for Motul engine oil or Motul chain lube spray.'
    },
    {
      name: 'Servo',
      series: 'Servo 4T Zoom',
      description: 'IndianOil trusted four-stroke motorcycle engine oil engineered for dependable anti-wear performance and engine cleanliness across all seasons.',
      accent: '#ED6B22',
      types: ['4T Zoom Motorcycle Oil', 'Front Fork Oil', 'Multi-Purpose Grease'],
      whatsapp: 'Hello New Maruthi Automobiles, I would like to check Servo 4T engine oil options.'
    },
    {
      name: 'TVS & Bajaj Genuine',
      series: 'OEM Specified 4T Lubricants',
      description: 'Manufacturer-recommended oil formulations tailored specifically for TVS (Apache, Jupiter, XL100) and Bajaj (Pulsar, Platina, Avenger) engines.',
      accent: '#005CAB',
      types: ['TVS TRU4 Lubricants', 'Bajaj DTS-i Oil', 'OEM Grade Sump Oils'],
      whatsapp: 'Hello New Maruthi Automobiles, I am checking for TVS / Bajaj genuine engine oil.'
    },
    {
      name: 'Chain Lubricants & Care',
      series: 'High-Tack Motorcycle Chain Sprays',
      description: 'Specialized spray-on lubricants and degreasers designed to stick to drive chain O-rings, withstand rain and dust, and reduce friction loss.',
      accent: '#D19A29',
      types: ['O-Ring Safe Chain Lube', 'Degreaser Spray', 'Drive Chain Cleaners'],
      whatsapp: 'Hello New Maruthi Automobiles, I would like to purchase motorcycle chain lube spray.'
    }
  ];

  const handleEnquiry = (prefill) => {
    const encoded = encodeURIComponent(prefill);
    window.open(`https://wa.me/919444018868?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="lubricants" className="py-24 bg-automotive-surface border-t border-automotive-border relative overflow-hidden">
      {/* Background glow and image banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-automotive-card border border-automotive-border text-automotive-red text-xs font-heading uppercase tracking-widest mb-3 font-bold">
              <Droplet className="w-4 h-4" />
              ENGINE OILS & LUBRICATION SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">
              KEEP YOUR ENGINE <span className="text-automotive-red">RUNNING SMOOTH.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-automotive-muted max-w-2xl font-sans">
              Authentic 4-stroke engine oils, gear lubricants and chain maintenance sprays from India's trusted lubrication brands.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-xs text-automotive-muted font-mono bg-automotive-card px-4 py-2 rounded-lg border border-automotive-border self-start">
            Illustrative display • Authentic store stock
          </div>
        </div>

        {/* Cinematic Showcase Feature Banner */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-automotive-border relative bg-automotive-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 relative z-10">
              <span className="text-xs font-heading uppercase tracking-widest text-automotive-red font-bold mb-2 block">
                Store Recommendation
              </span>
              <h3 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight mb-4">
                PROTECT YOUR ENGINE FROM TRAFFIC HEAT & FRICTION
              </h3>
              <p className="text-sm sm:text-base text-automotive-silver font-sans leading-relaxed mb-6">
                Stop-and-go riding in Chennai traffic subjects two-wheeler engines to elevated operating temperatures. Routine oil renewal preserves clutch responsiveness, minimizes valve wear, and ensures smooth gear shifts.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleEnquiry('Hello New Maruthi Automobiles, I want to know which engine oil brand and grade is best for my two-wheeler. Please advise.')}
                  className="bg-automotive-red hover:bg-automotive-redHover text-white py-3 px-6 rounded-lg font-heading font-bold uppercase tracking-wider text-sm transition-all flex items-center gap-2 shadow-glow-red hover:shadow-glow-red-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  Enquire on WhatsApp
                </button>
                <a
                  href="tel:04422436083"
                  className="bg-automotive-surface hover:bg-automotive-card border border-automotive-border text-white py-3 px-5 rounded-lg font-heading font-bold uppercase tracking-wider text-xs transition-all"
                >
                  Call Store 044-22436083
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full min-h-[300px] relative overflow-hidden">
              <img
                src="/images/engine_oils.jpg"
                alt="Motorcycle engine oils and lubricants display at New Maruthi Automobiles"
                className="w-full h-full object-cover filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-automotive-card via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* 6 Lubricant Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lubricantBrands.map((oil, idx) => (
            <div
              key={idx}
              className="bg-automotive-card border border-automotive-border hover:border-automotive-borderHover rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: oil.accent }}
                    />
                    <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider">
                      {oil.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-automotive-muted bg-automotive-surface px-2 py-0.5 rounded border border-automotive-border">
                    Genuine Stock
                  </span>
                </div>

                <div className="text-xs font-heading font-bold uppercase text-automotive-silver mb-2">
                  {oil.series}
                </div>

                <p className="text-xs text-automotive-muted font-sans leading-relaxed mb-4">
                  {oil.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  {oil.types.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-automotive-silver">
                      <CheckCircle2 className="w-3.5 h-3.5 text-automotive-red shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleEnquiry(oil.whatsapp)}
                className="w-full bg-automotive-surface hover:bg-automotive-red text-white py-2.5 px-4 rounded-lg font-heading font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 border border-automotive-border hover:border-automotive-red"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Ask for {oil.name} Availability
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
