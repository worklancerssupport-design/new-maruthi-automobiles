import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, X, ChevronUp, Sparkles } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = "https://wa.me/919444018868?text=Hello%20New%20Maruthi%20Automobiles%2C%20I%20would%20like%20to%20enquire%20about%20two-wheeler%20spare%20parts.%20Please%20let%20me%20know%20if%20the%20required%20part%20is%20available.";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=New+Maruthi+Automobiles,+No.+49/34,+Kattabomman+Street,+100+Feet+Road,+Tharamani,+Chennai+-+600113";

  return (
    <aside aria-label="Quick store contact actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Expanded Quick Contact Menu */}
      {isOpen && (
        <div className="mb-3 bg-automotive-card/95 border border-automotive-border rounded-2xl p-4 shadow-2xl backdrop-blur-xl w-64 space-y-2.5 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-automotive-border">
            <span className="text-xs font-heading font-black uppercase tracking-wider text-white">
              Direct Store Contact
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-automotive-muted hover:text-white p-1"
              aria-label="Close contact options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-sans font-medium transition-all group"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-black flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4 fill-current" />
            </div>
            <div>
              <div className="font-heading uppercase font-bold text-white tracking-wider text-[11px]">
                WhatsApp Chat
              </div>
              <div className="text-[10px] text-emerald-400">Instant Enquiry</div>
            </div>
          </a>

          <a
            href="tel:04422436083"
            className="flex items-center gap-3 p-2.5 rounded-xl bg-automotive-surface hover:bg-automotive-card border border-automotive-border text-white text-xs font-sans font-medium transition-all"
          >
            <div className="w-7 h-7 rounded-lg bg-automotive-red text-white flex items-center justify-center shrink-0 shadow-sm">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-heading uppercase font-bold text-white tracking-wider text-[11px]">
                Landline
              </div>
              <div className="text-[10px] font-mono text-automotive-muted">044-22436083</div>
            </div>
          </a>

          <a
            href="tel:+919444018868"
            className="flex items-center gap-3 p-2.5 rounded-xl bg-automotive-surface hover:bg-automotive-card border border-automotive-border text-white text-xs font-sans font-medium transition-all"
          >
            <div className="w-7 h-7 rounded-lg bg-automotive-card border border-automotive-border text-automotive-red flex items-center justify-center shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-heading uppercase font-bold text-white tracking-wider text-[11px]">
                Mobile
              </div>
              <div className="text-[10px] font-mono text-automotive-muted">+91 94440 18868</div>
            </div>
          </a>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2.5 rounded-xl bg-automotive-surface hover:bg-automotive-card border border-automotive-border text-white text-xs font-sans font-medium transition-all"
          >
            <div className="w-7 h-7 rounded-lg bg-automotive-surface border border-automotive-border text-automotive-silver flex items-center justify-center shrink-0">
              <MapPin className="w-3.5 h-3.5 text-automotive-red" />
            </div>
            <div>
              <div className="font-heading uppercase font-bold text-white tracking-wider text-[11px]">
                Directions
              </div>
              <div className="text-[10px] text-automotive-muted">Tharamani, Chennai</div>
            </div>
          </a>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <div className="flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all font-heading font-bold uppercase tracking-wider text-xs active:scale-95"
          aria-label="Enquire directly on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp Enquiry</span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-automotive-red hover:bg-automotive-redHover text-white flex items-center justify-center shadow-glow-red hover:shadow-glow-red-lg transition-all active:scale-95 border-2 border-white/20"
          aria-label="Toggle contact shortcuts"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
        </button>
      </div>
    </aside>
  );
}
