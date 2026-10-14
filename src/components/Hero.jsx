import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, MapPin, ShieldCheck, Wrench, Compass, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function Hero() {
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=New+Maruthi+Automobiles,+No.+49/34,+Kattabomman+Street,+100+Feet+Road,+Tharamani,+Chennai+-+600113";

  const heroSlides = [
    {
      id: 0,
      image: '/images/hero_motorcycle.jpg',
      label: 'Performance Motorcycle',
      tag: 'Digital Showroom',
      alt: 'Dark cinematic motorcycle in workshop at New Maruthi Automobiles Tharamani'
    },
    {
      id: 1,
      image: '/images/tyres.jpg',
      label: 'Tyres & Tread Hub',
      tag: 'MRF • CEAT • Apollo',
      alt: 'Motorcycle tyres in dark automotive studio'
    },
    {
      id: 2,
      image: '/images/engine_oils.jpg',
      label: '4T Engine Oils',
      tag: 'Castrol • Shell • Motul',
      alt: '4T motorcycle engine oils and lubricants display'
    },
    {
      id: 3,
      image: '/images/mechanical_parts.jpg',
      label: 'Chains & Brake Pads',
      tag: 'Rolon • Sprockets • Pads',
      alt: 'Motorcycle chain sprocket and brake pads on workbench'
    },
    {
      id: 4,
      image: '/images/about_workshop.jpg',
      label: 'Parts Warehouse',
      tag: 'Genuine Spares Racking',
      alt: 'Motorcycle spare parts warehouse shelving in Chennai'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-slide effect every 5.5 seconds, pauses when hovering
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, heroSlides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-automotive-dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Multi-Image Background Slideshow */}
      <div className="absolute inset-0 z-0 select-none">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-1' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center filter brightness-[0.88] contrast-105 transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Multi-layered Cinematic Dark Overlays for Text Legibility */}
        {/* Left-to-right gradient to keep headline area crisp & dark */}
        <div className="absolute inset-0 z-2 bg-gradient-to-r from-automotive-dark/95 via-automotive-dark/80 to-transparent sm:w-4/5" />

        {/* Top-to-bottom and bottom-to-top vignette */}
        <div className="absolute inset-0 z-2 bg-gradient-to-t from-automotive-dark via-transparent to-black/75" />

        {/* Ambient red neon glow */}
        <div className="absolute top-1/3 left-1/4 z-2 w-96 h-96 bg-automotive-red/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-automotive-surface/90 border border-automotive-border backdrop-blur-md mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-automotive-red animate-ping" />
            <span className="text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-[0.2em] text-automotive-silver">
              YOUR TRUSTED TWO-WHEELER SPARE PARTS STORE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-white uppercase tracking-tight leading-[0.95] mb-6 drop-shadow-md">
            TWO-WHEELER<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-automotive-text to-automotive-muted">
              SPARE PARTS.
            </span><br />
            <span className="text-automotive-red drop-shadow-sm">
              THARAMANI, CHENNAI.
            </span>
          </h1>

          {/* Restrained Red Accent Line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-1 bg-automotive-red rounded-full shadow-glow-red" />
            <div className="w-2 h-1 bg-white/40 rounded-full" />
            <div className="w-1 h-1 bg-white/20 rounded-full" />
          </div>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg lg:text-xl text-automotive-silver/95 font-sans leading-relaxed mb-8 max-w-xl">
            Your trusted destination for two-wheeler spare parts, tyres, engine oils, batteries and essential motorcycle accessories in Tharamani, Chennai.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#spare-parts"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-automotive-red hover:bg-automotive-redHover text-white font-heading font-black text-base uppercase tracking-wider transition-all shadow-glow-red hover:shadow-glow-red-lg active:scale-95 group"
            >
              <span>EXPLORE SPARE PARTS</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>

            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-automotive-surface/90 hover:bg-automotive-card border border-automotive-border hover:border-automotive-red/70 text-white font-heading font-black text-base uppercase tracking-wider transition-all backdrop-blur-md"
            >
              <MapPin className="w-4 h-4 text-automotive-red" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

          {/* Genuine Trust Indicators (No fabricated numbers or fake claims) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-automotive-border/60">
            <div className="flex items-center gap-3 bg-automotive-dark/70 backdrop-blur-sm p-3 rounded-lg border border-automotive-border/40">
              <div className="w-8 h-8 rounded-md bg-automotive-card border border-automotive-border flex items-center justify-center shrink-0">
                <Wrench className="w-4 h-4 text-automotive-red" />
              </div>
              <div>
                <h3 className="text-xs font-heading font-bold uppercase text-white tracking-wide">Multi-Brand Spares</h3>
                <p className="text-[11px] text-automotive-muted font-sans leading-tight">Honda, Bajaj, TVS, Yamaha, Hero & Suzuki</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-automotive-dark/70 backdrop-blur-sm p-3 rounded-lg border border-automotive-border/40">
              <div className="w-8 h-8 rounded-md bg-automotive-card border border-automotive-border flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-automotive-red" />
              </div>
              <div>
                <h3 className="text-xs font-heading font-bold uppercase text-white tracking-wide">Tyres, Oils & Spares</h3>
                <p className="text-[11px] text-automotive-muted font-sans leading-tight">MRF, CEAT, Castrol, Shell, Motul & Powerzone</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-automotive-dark/70 backdrop-blur-sm p-3 rounded-lg border border-automotive-border/40">
              <div className="w-8 h-8 rounded-md bg-automotive-card border border-automotive-border flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4 text-automotive-red" />
              </div>
              <div>
                <h3 className="text-xs font-heading font-bold uppercase text-white tracking-wide">Tharamani Store</h3>
                <p className="text-[11px] text-automotive-muted font-sans leading-tight">100 Feet Road, Kattabomman Street</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Slideshow Control Strip & Hover Switcher (Bottom Right of Hero) */}
      <div className="hidden md:flex absolute bottom-6 right-6 z-20 items-end gap-3">
        {/* Hover Thumbnail Selectors */}
        <div className="bg-automotive-dark/85 backdrop-blur-xl border border-automotive-border rounded-xl p-2 flex items-center gap-2 shadow-2xl">
          {heroSlides.map((slide, index) => {
            const isSelected = index === currentSlide;
            return (
              <button
                key={slide.id}
                onMouseEnter={() => setCurrentSlide(index)}
                onClick={() => setCurrentSlide(index)}
                className={`group/thumb relative rounded-lg overflow-hidden border transition-all duration-300 flex items-center gap-2 p-1.5 focus:outline-none ${
                  isSelected
                    ? 'border-automotive-red bg-automotive-card shadow-glow-red scale-105'
                    : 'border-automotive-border/80 bg-automotive-surface/70 hover:border-automotive-silver/50 opacity-70 hover:opacity-100'
                }`}
                title={`Hover to preview: ${slide.label}`}
              >
                {/* Mini Image Thumbnail */}
                <div className="w-10 h-7 rounded overflow-hidden shrink-0 bg-black">
                  <img
                    src={slide.image}
                    alt={slide.label}
                    className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Text Label */}
                <div className="text-left pr-2">
                  <div className={`text-[11px] font-heading font-bold uppercase tracking-wider leading-none ${isSelected ? 'text-white' : 'text-automotive-muted group-hover/thumb:text-white'}`}>
                    {slide.label}
                  </div>
                  <div className="text-[9px] text-automotive-muted font-mono leading-tight mt-0.5">
                    {slide.tag}
                  </div>
                </div>

                {/* Active Indicator bar */}
                {isSelected && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-automotive-red" />
                )}
              </button>
            );
          })}
        </div>

        {/* Prev / Next & Pause Controls */}
        <div className="bg-automotive-dark/85 backdrop-blur-xl border border-automotive-border rounded-xl p-1.5 flex items-center gap-1 shadow-2xl">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-lg bg-automotive-surface hover:bg-automotive-card text-white flex items-center justify-center transition-colors border border-automotive-border"
            aria-label="Previous background image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <span className="text-[11px] font-mono font-bold text-automotive-silver px-2">
            0{currentSlide + 1} / 0{heroSlides.length}
          </span>

          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-lg bg-automotive-surface hover:bg-automotive-card text-white flex items-center justify-center transition-colors border border-automotive-border"
            aria-label="Next background image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Dot Selectors */}
      <div className="md:hidden absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentSlide
                ? 'w-7 bg-automotive-red shadow-glow-red'
                : 'w-2 bg-white/40'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
