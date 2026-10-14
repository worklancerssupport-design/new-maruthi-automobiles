import React from 'react';
import { Phone, MessageSquare, MapPin, Navigation, Clock, Building, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const fullAddress = "No. 49/34, Kattabomman Street, 100 Feet Road, Tharamani, Chennai – 600113, Tamil Nadu, India.";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=New+Maruthi+Automobiles,+No.+49/34,+Kattabomman+Street,+100+Feet+Road,+Tharamani,+Chennai+-+600113";
  const whatsappUrl = "https://wa.me/919444018868?text=Hello%20New%20Maruthi%20Automobiles%2C%20I%20would%20like%20to%20enquire%20about%20two-wheeler%20spare%20parts.%20Please%20let%20me%20know%20if%20the%20required%20part%20is%20available.";

  // Safe Google Maps search embed URL for Tharamani, Chennai address
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent("New Maruthi Automobiles, Kattabomman Street, 100 Feet Road, Tharamani, Chennai 600113")}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-24 bg-automotive-surface border-t border-automotive-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-automotive-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-automotive-card border border-automotive-border text-automotive-red text-xs font-heading uppercase tracking-widest mb-3 font-bold">
            <MapPin className="w-4 h-4" />
            STORE LOCATION & DIRECT CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">
            LOOKING FOR A SPARE PART? <span className="text-automotive-red">WE'RE HERE.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-automotive-muted font-sans">
            Visit our physical store in Tharamani, Chennai or contact our counter directly for part confirmation before you ride down.
          </p>
        </div>

        {/* Location & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact Info & Action Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Business Info Card */}
            <div className="bg-automotive-card border border-automotive-border rounded-xl p-6 sm:p-8 shadow-card-dark">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-automotive-surface border border-automotive-border flex items-center justify-center text-automotive-red shrink-0 shadow-md">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider">
                    NEW MARUTHI AUTOMOBILES
                  </h3>
                  <span className="text-xs text-automotive-red font-mono uppercase tracking-widest font-semibold">
                    Two-Wheeler Spare Parts Specialist
                  </span>
                </div>
              </div>

              {/* Exact Store Address */}
              <div className="mb-6 pb-6 border-b border-automotive-border/60">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-automotive-silver block mb-2">
                  Physical Store Address:
                </span>
                <p className="text-sm sm:text-base text-white font-sans leading-relaxed">
                  {fullAddress}
                </p>
                <span className="text-xs text-automotive-muted font-sans mt-2 block">
                  Landmark: On 100 Feet Road, Kattabomman Street intersection, Tharamani.
                </span>
              </div>

              {/* Verified Phone Actions */}
              <div className="space-y-3 mb-6 pb-6 border-b border-automotive-border/60">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-automotive-silver block mb-1">
                  Call the Store Counter:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:04422436083"
                    className="p-3.5 rounded-lg bg-automotive-surface hover:bg-automotive-card border border-automotive-border hover:border-automotive-red/60 text-white transition-all flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-md bg-automotive-card group-hover:bg-automotive-red text-automotive-red group-hover:text-white flex items-center justify-center transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-automotive-muted font-heading uppercase tracking-wider">
                        Store Landline
                      </div>
                      <div className="text-sm font-mono font-bold text-white">
                        044-22436083
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+919444018868"
                    className="p-3.5 rounded-lg bg-automotive-surface hover:bg-automotive-card border border-automotive-border hover:border-automotive-red/60 text-white transition-all flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-md bg-automotive-card group-hover:bg-automotive-red text-automotive-red group-hover:text-white flex items-center justify-center transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-automotive-muted font-heading uppercase tracking-wider">
                        Store Mobile
                      </div>
                      <div className="text-sm font-mono font-bold text-white">
                        +91 94440 18868
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Primary Fast Actions: WhatsApp & Google Maps */}
              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-automotive-red hover:bg-automotive-redHover text-white py-3.5 px-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2 shadow-glow-red hover:shadow-glow-red-lg active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp for Availability
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-automotive-surface hover:bg-automotive-border text-white py-3.5 px-4 rounded-xl font-heading font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 border border-automotive-border"
                >
                  <Navigation className="w-4 h-4 text-automotive-red" />
                  Get Google Maps Directions
                  <ExternalLink className="w-3.5 h-3.5 text-automotive-muted ml-1" />
                </a>
              </div>
            </div>

            {/* Local Areas Served Badge */}
            <div className="bg-automotive-card/80 border border-automotive-border rounded-xl p-4 text-xs text-automotive-silver font-sans">
              <strong className="text-white font-medium">Serving Nearby Chennai Neighborhoods:</strong>{' '}
              Tharamani, Taramani, Velachery, Adyar, SRP Tools, Perungudi, OMR IT Highway, Tidel Park, and Kotturpuram.
            </div>
          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-7 bg-automotive-card border border-automotive-border rounded-xl overflow-hidden shadow-card-dark flex flex-col min-h-[480px]">
            <div className="p-4 bg-automotive-surface border-b border-automotive-border flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-white">
                <MapPin className="w-4 h-4 text-automotive-red" />
                <span>Tharamani Store Map Location</span>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-automotive-red hover:underline flex items-center gap-1 font-heading uppercase tracking-wider font-bold"
              >
                Open in Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative flex-1 w-full min-h-[380px] bg-automotive-dark">
              <iframe
                title="New Maruthi Automobiles Location Map in Tharamani Chennai"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px]"
              />

              {/* Floating Address Bar over map */}
              <div className="absolute bottom-4 left-4 right-4 bg-automotive-dark/95 backdrop-blur-md p-3.5 rounded-xl border border-automotive-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xl">
                <div>
                  <div className="text-xs font-heading font-black text-white uppercase tracking-wider">
                    NEW MARUTHI AUTOMOBILES
                  </div>
                  <div className="text-[11px] text-automotive-silver font-sans">
                    No. 49/34, Kattabomman Street, 100 Feet Road, Tharamani
                  </div>
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-automotive-red text-white text-xs font-heading font-bold uppercase tracking-wider shrink-0 shadow-sm hover:bg-automotive-redHover transition-colors flex items-center gap-1.5"
                >
                  <Navigation className="w-3 h-3" />
                  Navigate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
