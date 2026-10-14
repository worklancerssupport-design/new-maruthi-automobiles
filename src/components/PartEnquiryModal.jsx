import React, { useEffect } from 'react';
import { X, Phone, MessageSquare, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export default function PartEnquiryModal({ category, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!category) return null;

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(category.whatsappMessage);
    window.open(`https://wa.me/919444018868?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-category-title"
    >
      <div
        className="bg-automotive-card border border-automotive-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-44 sm:h-56 w-full bg-automotive-surface overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-automotive-card via-automotive-card/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-automotive-red transition-all focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono font-bold text-automotive-red uppercase tracking-widest bg-black/80 px-2.5 py-1 rounded border border-white/10 mb-2 inline-block">
              {category.categoryCode} • Store Category
            </span>
            <h2 id="modal-category-title" className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-wide">
              {category.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-automotive-silver mb-2">
              Category Overview
            </h3>
            <p className="text-sm text-automotive-text leading-relaxed font-sans">
              {category.description}
            </p>
          </div>

          {/* Available Components & Options in Store */}
          <div>
            <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-automotive-silver mb-3">
              Stocked Parts & Components
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-automotive-surface border border-automotive-border rounded-lg p-3 text-left"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-automotive-red shrink-0" />
                    <span className="text-xs font-semibold text-white">{item.name}</span>
                  </div>
                  <p className="text-[11px] text-automotive-muted font-sans pl-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stocked Brands */}
          <div className="bg-automotive-surface/60 rounded-xl p-4 border border-automotive-border">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-automotive-muted block mb-2">
              Brands Available at New Maruthi Automobiles:
            </span>
            <div className="flex flex-wrap gap-2">
              {category.brands.map((b, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded bg-automotive-card text-white border border-automotive-border text-xs font-semibold"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Compatibility Notice */}
          <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 font-sans">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              Part fitment varies by two-wheeler make, engine displacement, and manufacturing year. Please share your vehicle details when calling or contacting on WhatsApp.
            </p>
          </div>

          {/* Enquiry Actions */}
          <div className="pt-2 border-t border-automotive-border space-y-3">
            <div className="text-xs font-heading font-bold uppercase tracking-wider text-white">
              Ready to verify availability or buy at our Tharamani store?
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-automotive-red hover:bg-automotive-redHover text-white py-3.5 px-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2 shadow-glow-red hover:shadow-glow-red-lg active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                Enquire on WhatsApp
              </button>

              <a
                href="tel:04422436083"
                className="w-full bg-automotive-surface hover:bg-automotive-card border border-automotive-border text-white py-3.5 px-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4 text-automotive-red" />
                Call 044-22436083
              </a>
            </div>

            <p className="text-[11px] text-center text-automotive-muted font-sans pt-1">
              Store location: No. 49/34, Kattabomman Street, 100 Feet Road, Tharamani, Chennai – 600113
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
