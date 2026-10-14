import React from 'react';
import { ArrowUpRight, MessageSquare, Check, Sparkles } from 'lucide-react';

export default function PartCategoryCard({ category, onSelectCategory }) {
  const handleQuickWhatsApp = (e) => {
    e.stopPropagation();
    const encoded = encodeURIComponent(category.whatsappMessage);
    window.open(`https://wa.me/919444018868?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={() => onSelectCategory(category)}
      className="group bg-automotive-card hover:bg-automotive-cardHover border border-automotive-border hover:border-automotive-red/60 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-glow-red relative"
    >
      {/* Category Card Header & Image */}
      <div>
        <div className="relative h-48 sm:h-52 overflow-hidden bg-automotive-surface">
          <img
            src={category.image}
            alt={`${category.title} spare parts at New Maruthi Automobiles Tharamani`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-95 group-hover:brightness-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-automotive-card via-automotive-card/30 to-transparent" />

          {/* Category Code Tag */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-automotive-red uppercase tracking-wider">
            {category.categoryCode}
          </div>

          {/* Quick Expand Arrow */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-automotive-red group-hover:border-automotive-red transition-all">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          {/* Subtitle pill */}
          <div className="absolute bottom-3 left-3 right-3">
            <span className="text-[11px] font-heading uppercase tracking-widest text-automotive-silver font-semibold bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 inline-block truncate max-w-full">
              {category.subtitle}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase tracking-wide group-hover:text-automotive-red transition-colors mb-2.5">
            {category.title}
          </h3>

          <p className="text-xs sm:text-sm text-automotive-muted font-sans line-clamp-2 leading-relaxed mb-4">
            {category.description}
          </p>

          {/* Featured Stocked Items Preview */}
          <div className="space-y-1.5 mb-5 border-t border-automotive-border/60 pt-3">
            {category.items.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-automotive-silver">
                <span className="w-1.5 h-1.5 rounded-full bg-automotive-red shrink-0" />
                <span className="truncate">{item.name}</span>
              </div>
            ))}
            {category.items.length > 3 && (
              <span className="text-[11px] text-automotive-muted font-sans italic block pt-0.5">
                + {category.items.length - 3} more parts in store
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: Brands & CTA Button */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
        {/* Brand Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {category.brands.map((b, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded bg-automotive-surface text-automotive-silver border border-automotive-border text-[11px] font-semibold"
            >
              {b}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-automotive-border/60">
          <button
            onClick={() => onSelectCategory(category)}
            className="w-full bg-automotive-surface hover:bg-automotive-border text-white py-2.5 px-3 rounded-lg font-heading font-bold uppercase tracking-wider text-xs transition-all text-center border border-automotive-border"
          >
            View Details
          </button>
          
          <button
            onClick={handleQuickWhatsApp}
            className="w-full bg-automotive-red hover:bg-automotive-redHover text-white py-2.5 px-3 rounded-lg font-heading font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
