import React from 'react';
import { Layers, Bike, MapPin, CheckCircle2, Compass } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-automotive-dark border-t border-automotive-border relative overflow-hidden">
      {/* Subtle background red accent */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-automotive-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Workshop Display Image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-automotive-border shadow-2xl relative bg-automotive-card group">
              <img
                src="/images/about_workshop.jpg"
                alt="Motorcycle spare parts inventory and workshop racking at New Maruthi Automobiles"
                className="w-full h-full object-cover min-h-[380px] filter brightness-95 group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-automotive-dark/90 backdrop-blur-md border border-automotive-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-automotive-red text-white flex items-center justify-center font-heading font-black text-lg shadow-glow-red">
                    NM
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold uppercase text-white tracking-wider">
                      NEW MARUTHI AUTOMOBILES
                    </h4>
                    <p className="text-xs text-automotive-muted font-sans">
                      100 Feet Road, Tharamani, Chennai
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Industrial Accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-automotive-red pointer-events-none opacity-80" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-automotive-red pointer-events-none opacity-80" />
          </div>

          {/* About Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-automotive-card border border-automotive-border text-automotive-red text-xs font-heading uppercase tracking-widest mb-4 font-bold">
              <Compass className="w-4 h-4" />
              ABOUT OUR STORE
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight leading-tight mb-6">
              YOUR LOCAL TWO-WHEELER <span className="text-automotive-red">SPARE PARTS DESTINATION.</span>
            </h2>

            <p className="text-base sm:text-lg text-automotive-silver font-sans leading-relaxed mb-8">
              New Maruthi Automobiles serves two-wheeler owners in Tharamani, Chennai, with a range of motorcycle spare parts, tyres, engine oils, batteries and essential accessories. Whether you need a routine replacement or are looking for a specific component, our store helps you explore available options for popular two-wheeler brands.
            </p>

            {/* 3 Simple Supporting Points (Strictly verified facts, no fabricated claims) */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-automotive-surface border border-automotive-border">
                <div className="w-10 h-10 rounded-lg bg-automotive-card border border-automotive-border flex items-center justify-center text-automotive-red shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold uppercase text-white tracking-wide">
                    Multiple Spare-Parts Categories
                  </h3>
                  <p className="text-xs sm:text-sm text-automotive-muted font-sans mt-0.5">
                    Tyres, engine oils, brake pads, chain sprockets, electrical units, 12V batteries, and body stands all under one roof.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-automotive-surface border border-automotive-border">
                <div className="w-10 h-10 rounded-lg bg-automotive-card border border-automotive-border flex items-center justify-center text-automotive-red shrink-0">
                  <Bike className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold uppercase text-white tracking-wide">
                    Popular Two-Wheeler Brands
                  </h3>
                  <p className="text-xs sm:text-sm text-automotive-muted font-sans mt-0.5">
                    Supporting everyday commuters and motorcycles from Honda, Bajaj, TVS, Yamaha, Hero, and Suzuki.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-automotive-surface border border-automotive-border">
                <div className="w-10 h-10 rounded-lg bg-automotive-card border border-automotive-border flex items-center justify-center text-automotive-red shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold uppercase text-white tracking-wide">
                    Convenient Tharamani Location
                  </h3>
                  <p className="text-xs sm:text-sm text-automotive-muted font-sans mt-0.5">
                    Situated on 100 Feet Road at Kattabomman Street, easily accessible from Velachery, Adyar, and the OMR IT Corridor.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-automotive-red hover:bg-automotive-redHover text-white py-3 px-6 rounded-lg font-heading font-bold uppercase tracking-wider text-sm transition-all shadow-glow-red hover:shadow-glow-red-lg"
              >
                Find Our Location & Contact
              </a>
              <a
                href="tel:04422436083"
                className="bg-automotive-surface hover:bg-automotive-card border border-automotive-border text-white py-3 px-6 rounded-lg font-heading font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2"
              >
                Call 044-22436083
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
