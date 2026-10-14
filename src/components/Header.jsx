import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Wrench } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Brands', href: '#brands' },
    { name: 'Spare Parts', href: '#spare-parts' },
    { name: 'Bike Anatomy', href: '#bike-anatomy' },
    { name: 'Compatibility', href: '#compatibility' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-automotive-dark/95 backdrop-blur-md border-b border-automotive-border py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Typographic Logo with Mechanical Mark */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="New Maruthi Automobiles Homepage"
          >
            {/* Custom Mechanical Gear & Piston Logo Mark */}
            <div className="relative w-10 h-10 rounded-lg bg-automotive-surface border border-automotive-border flex items-center justify-center group-hover:border-automotive-red transition-all shadow-md overflow-hidden">
              <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="14" stroke="#4A525D" strokeWidth="2" strokeDasharray="4 2" />
                <path d="M20 7V11M20 29V33M7 20H11M29 20H33M11 11L14 14M26 26L29 29M11 29L14 26M26 14L29 11" stroke="#F04432" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="20" cy="20" r="6" fill="#141619" stroke="#F04432" strokeWidth="2" />
                <circle cx="20" cy="20" r="2.5" fill="#FFFFFF" />
              </svg>
              <div className="absolute inset-0 bg-automotive-red/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl sm:text-2xl text-white tracking-wider uppercase leading-none group-hover:text-automotive-red transition-colors">
                NEW MARUTHI
              </span>
              <span className="font-heading font-semibold text-[11px] sm:text-xs text-automotive-muted tracking-[0.22em] uppercase leading-tight">
                AUTOMOBILES • CHENNAI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-heading uppercase tracking-widest text-automotive-silver hover:text-white transition-colors py-1 relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-automotive-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Tablet Compact Nav */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-heading uppercase tracking-wider">
            <a href="#brands" className="text-automotive-silver hover:text-white">Brands</a>
            <a href="#spare-parts" className="text-automotive-silver hover:text-white">Spares</a>
            <a href="#bike-anatomy" className="text-automotive-silver hover:text-white">Anatomy</a>
            <a href="#compatibility" className="text-automotive-silver hover:text-white">Compatibility</a>
            <a href="#reviews" className="text-automotive-silver hover:text-white">Reviews</a>
            <a href="#faq" className="text-automotive-silver hover:text-white">FAQ</a>
            <a href="#contact" className="text-automotive-silver hover:text-white">Contact</a>
          </nav>

          {/* Direct Actions: Call & Directions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:04422436083"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-automotive-surface/80 hover:bg-automotive-card border border-automotive-border text-xs font-heading font-bold uppercase tracking-wider text-automotive-text transition-all hover:border-automotive-red/60"
              title="Call Store Landline"
            >
              <Phone className="w-3.5 h-3.5 text-automotive-red" />
              <span>044-22436083</span>
            </a>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=New+Maruthi+Automobiles,+No.+49/34,+Kattabomman+Street,+100+Feet+Road,+Tharamani,+Chennai+-+600113"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-automotive-red hover:bg-automotive-redHover text-white text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-glow-red hover:shadow-glow-red-lg"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Tharamani Store</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:04422436083"
              className="p-2 rounded-lg bg-automotive-surface border border-automotive-border text-automotive-red sm:hidden"
              aria-label="Call store"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-automotive-surface border border-automotive-border text-white hover:text-automotive-red transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-automotive-dark/98 border-b border-automotive-border px-4 pt-4 pb-6 backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-heading font-bold uppercase tracking-wider text-automotive-silver hover:text-automotive-red transition-colors py-2 border-b border-automotive-border/40 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-automotive-red text-xs">→</span>
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href="tel:04422436083"
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-automotive-surface border border-automotive-border text-white text-xs font-heading font-bold uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5 text-automotive-red" />
              Call Landline
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=New+Maruthi+Automobiles,+No.+49/34,+Kattabomman+Street,+100+Feet+Road,+Tharamani,+Chennai+-+600113"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-automotive-red text-white text-xs font-heading font-bold uppercase tracking-wider"
            >
              <MapPin className="w-3.5 h-3.5" />
              Directions
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
