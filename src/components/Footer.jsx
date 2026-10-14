import React from 'react';
import { Phone, MapPin, MessageSquare, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-automotive-dark border-t border-automotive-border text-automotive-silver font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-automotive-surface border border-automotive-border flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="14" stroke="#4A525D" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M20 7V11M20 29V33M7 20H11M29 20H33" stroke="#F04432" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="20" cy="20" r="6" fill="#141619" stroke="#F04432" strokeWidth="2" />
                </svg>
              </div>
              <span className="font-heading font-black text-xl text-white tracking-wider uppercase">
                NEW MARUTHI AUTOMOBILES
              </span>
            </div>

            <p className="text-xs text-automotive-muted leading-relaxed">
              Your trusted destination for two-wheeler spare parts, tyres, engine oils, batteries and essential motorcycle accessories in Tharamani, Chennai.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-automotive-silver">
              <MapPin className="w-3.5 h-3.5 text-automotive-red shrink-0" />
              <span>100 Feet Road, Tharamani, Chennai – 600113</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-automotive-red transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#spare-parts" className="hover:text-automotive-red transition-colors">
                  Spare Parts Discovery (8 Categories)
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-automotive-red transition-colors">
                  Manufacturer Brands
                </a>
              </li>
              <li>
                <a href="#bike-anatomy" className="hover:text-automotive-red transition-colors">
                  Interactive Bike Anatomy
                </a>
              </li>
              <li>
                <a href="#compatibility" className="hover:text-automotive-red transition-colors">
                  Motorcycle Compatibility
                </a>
              </li>
              <li>
                <a href="#lubricants" className="hover:text-automotive-red transition-colors">
                  Engine Oils & Lubes Showcase
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-automotive-red transition-colors">
                  About Our Store
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-automotive-red transition-colors">
                  Store Contact & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Spare Parts Available */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-white mb-4">
              Spare Parts Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#spare-parts" className="hover:text-automotive-red transition-colors">
                  Motorcycle & Scooter Tyres (MRF, CEAT, Apollo)
                </a>
              </li>
              <li>
                <a href="#lubricants" className="hover:text-automotive-red transition-colors">
                  4T Engine Oils (Castrol, Shell, Motul, Servo)
                </a>
              </li>
              <li>
                <a href="#spare-parts" className="hover:text-automotive-red transition-colors">
                  Chain Sprocket Kits & Drive Chains
                </a>
              </li>
              <li>
                <a href="#spare-parts" className="hover:text-automotive-red transition-colors">
                  Brake Pads, Shoes & Fluid
                </a>
              </li>
              <li>
                <a href="#spare-parts" className="hover:text-automotive-red transition-colors">
                  LED Indicator Flashers & Electrical Spares
                </a>
              </li>
              <li>
                <a href="#spare-parts" className="hover:text-automotive-red transition-colors">
                  12V VRLA Batteries (Powerzone, Tata)
                </a>
              </li>
              <li>
                <a href="#spare-parts" className="hover:text-automotive-red transition-colors">
                  Main Stands, Side Stands & Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Local Chennai Contact & CTA */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs mb-4">
              <div>
                <span className="text-automotive-muted block">Landline:</span>
                <a href="tel:04422436083" className="font-mono text-sm text-white hover:text-automotive-red font-bold">
                  044-22436083
                </a>
              </div>
              <div>
                <span className="text-automotive-muted block">Mobile / WhatsApp:</span>
                <a href="tel:+919444018868" className="font-mono text-sm text-white hover:text-automotive-red font-bold">
                  +91 94440 18868
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/919444018868?text=Hello%20New%20Maruthi%20Automobiles%2C%20I%20would%20like%20to%20enquire%20about%20two-wheeler%20spare%20parts.%20Please%20let%20me%20know%20if%20the%20required%20part%20is%20available."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-automotive-red text-white text-xs font-heading font-bold uppercase tracking-wider shadow-glow-red hover:bg-automotive-redHover transition-colors w-full justify-center"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-automotive-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-automotive-muted">
          <div>
            <p>
              © {new Date().getFullYear()} New Maruthi Automobiles. All rights reserved.
            </p>
            <p className="text-[11px] text-automotive-muted/70 mt-1">
              Independent two-wheeler spare parts retailer located in Tharamani, Chennai. All manufacturer logos and trademarks belong to their respective owners.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded bg-automotive-surface hover:bg-automotive-border text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors border border-automotive-border shrink-0"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-automotive-red" />
          </button>
        </div>
      </div>
    </footer>
  );
}
