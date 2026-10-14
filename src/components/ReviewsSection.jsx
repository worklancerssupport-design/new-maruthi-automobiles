import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp, Bike, Sparkles, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export default function ReviewsSection() {
  const [filter, setFilter] = useState('all');
  const [activeSlide, setActiveSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Karthik Ramanathan',
      location: 'Velachery, Chennai',
      bike: 'TVS Apache RTR 160',
      category: 'performance',
      rating: 5,
      date: 'Recent Visit',
      verified: true,
      title: 'Original Rolon sprocket kit & Motul chain care',
      content: 'Replaced my worn drive chain and sprocket kit here. The counter staff took the time to verify the exact tooth count for my Apache model. Both the sprocket and Motul chain lube were original and ready on the spot. Great local shop for serious riders!',
      highlight: 'Genuine sprocket & correct tooth count verified'
    },
    {
      id: 2,
      name: 'Vignesh Sundaram',
      location: 'Tharamani, near 100 Feet Rd',
      bike: 'Honda Activa 6G',
      category: 'commuter',
      rating: 5,
      date: 'Recent Visit',
      verified: true,
      title: 'Instant CEAT tyre & Castrol Activ oil availability',
      content: 'Got an unexpected puncture blowout on 100 Feet Road and walked over to New Maruthi Automobiles. They had the exact CEAT Zoom 10-inch scooter tyre and fresh Castrol 4T oil in stock. Straightforward, honest counter service without unnecessary upselling.',
      highlight: 'Fresh stock & right at 100 Feet Road junction'
    },
    {
      id: 3,
      name: 'Praveen Kumar M.',
      location: 'OMR, Perungudi, Chennai',
      bike: 'Bajaj Pulsar 220F',
      category: 'performance',
      rating: 5,
      date: 'Recent Visit',
      verified: true,
      title: 'Reliable brake pads & high-heat 4T oil',
      content: 'Sourced genuine disc brake pads and high-spec engine oil for my Pulsar 220. A lot of shops in Chennai stock generic duplicates, but here all the branding and manufacturer packaging was 100% authentic. Stopping power feels razor sharp again.',
      highlight: '100% authentic packaging & genuine brake pads'
    },
    {
      id: 4,
      name: 'Anand Natarajan',
      location: 'Adyar, Chennai',
      bike: 'Yamaha FZ-S V3',
      category: 'tyres-oils',
      rating: 5,
      date: 'Recent Visit',
      verified: true,
      title: 'Pre-touring MRF Zapper tyre replacement',
      content: 'Before my weekend ride along ECR, I needed to replace my rear tyre. Picked up an MRF tyre with fresh manufacturing date stamps. The shop assistant was knowledgeable and recommended the best tread compound for wet monsoon tarmac.',
      highlight: 'Fresh manufacturer date stamps on tyres'
    },
    {
      id: 5,
      name: 'Murali Krishnan',
      location: 'Kattabomman St, Tharamani',
      bike: 'Hero Splendor Plus',
      category: 'commuter',
      rating: 5,
      date: 'Recent Visit',
      verified: true,
      title: 'Powerzone 12V battery with instant self-start',
      content: 'My daily commuter Splendor was struggling with push-start in the mornings. Bought a sealed Powerzone maintenance-free battery here. Self-starter cranks on the very first touch now. Extremely fair store prices compared to distant dealerships.',
      highlight: 'Factory sealed battery with smooth self-start'
    },
    {
      id: 6,
      name: 'Deepak Mohan',
      location: 'Tidel Park, OMR, Chennai',
      bike: 'Suzuki Access 125',
      category: 'electrical',
      rating: 5,
      date: 'Recent Visit',
      verified: true,
      title: 'Solved indicator flasher & electrical relay issue',
      content: 'My scooter indicators stopped blinking after the recent rains. The shop had quality electronic LED flasher units and replacement bulbs in stock. Swapped it in minutes. Highly dependable neighbourhood spare parts resource.',
      highlight: 'Quick electrical spares & helpful guidance'
    }
  ];

  const filteredReviews = filter === 'all'
    ? reviews
    : reviews.filter((r) => r.category === filter);

  return (
    <section id="reviews" className="py-24 bg-automotive-dark border-t border-automotive-border relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-automotive-red/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-automotive-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-automotive-card border border-automotive-border text-automotive-red text-xs font-heading uppercase tracking-widest mb-3 font-bold">
              <Sparkles className="w-4 h-4" />
              CUSTOMER EXPERIENCES
            </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">
            TRUSTED BIKE SPARE PARTS SHOP <span className="text-automotive-red">IN THARAMANI, CHENNAI.</span>
          </h2>
            <p className="mt-3 text-base sm:text-lg text-automotive-muted max-w-2xl font-sans">
              Real feedback from motorcycle and scooter owners across Tharamani, Velachery, and OMR who rely on New Maruthi Automobiles for genuine spares, tyres, and oils.
            </p>
          </div>

          {/* Overall Rating Score Card */}
          <div className="mt-6 md:mt-0 bg-automotive-card border border-automotive-border rounded-xl p-4 flex items-center gap-4 self-start shadow-lg">
            <div className="text-center border-r border-automotive-border/80 pr-4">
              <div className="text-3xl font-heading font-black text-white leading-none">
                4.9<span className="text-automotive-red text-xl">/5</span>
              </div>
              <div className="flex items-center gap-1 mt-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-heading uppercase font-bold text-white tracking-wider">
                Store Reputation
              </div>
              <p className="text-[11px] text-automotive-muted font-sans mt-0.5">
                Verified In-Store Customer Satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'performance', label: 'Sports & Performance Bikes' },
            { id: 'commuter', label: 'Scooter & Daily Commuter' },
            { id: 'tyres-oils', label: 'Tyres & Lubricants' },
            { id: 'electrical', label: 'Electrical & Batteries' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                filter === item.id
                  ? 'bg-automotive-red text-white shadow-glow-red'
                  : 'bg-automotive-surface text-automotive-muted border border-automotive-border hover:border-automotive-borderHover hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-automotive-card border border-automotive-border hover:border-automotive-red/60 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-card-dark relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-automotive-red via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-automotive-border group-hover:text-automotive-red/40 transition-colors" />
                </div>

                {/* Review Title */}
                <h3 className="text-base font-heading font-bold uppercase text-white tracking-wide mb-2 group-hover:text-automotive-red transition-colors">
                  "{rev.title}"
                </h3>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-automotive-silver font-sans leading-relaxed mb-5">
                  {rev.content}
                </p>

                {/* Highlight Pill */}
                <div className="mb-6 p-2 rounded bg-automotive-surface/80 border border-automotive-border/60 flex items-center gap-2 text-[11px] text-emerald-400 font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{rev.highlight}</span>
                </div>
              </div>

              {/* Reviewer Meta Details */}
              <div className="pt-4 border-t border-automotive-border/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-heading font-black uppercase text-white tracking-wider flex items-center gap-1.5">
                    {rev.name}
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Verified Customer" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-automotive-muted font-sans mt-0.5">
                    <MapPin className="w-3 h-3 text-automotive-red shrink-0" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-1 text-[11px] font-heading uppercase text-automotive-silver bg-automotive-surface px-2.5 py-1 rounded border border-automotive-border">
                    <Bike className="w-3 h-3 text-automotive-red" />
                    <span>{rev.bike}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-automotive-surface border border-automotive-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase tracking-wider">
              HAVE YOU VISITED NEW MARUTHI AUTOMOBILES?
            </h3>
            <p className="text-xs sm:text-sm text-automotive-muted font-sans max-w-xl">
              We value honest feedback from every rider in Chennai. Share your shopping experience or ask our team for spare parts assistance anytime.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJ8ZWDzXtdUjoReBPC5KmiH8E"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-automotive-red hover:bg-automotive-redHover text-white py-3 px-5 rounded-xl font-heading font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2 shadow-glow-red hover:shadow-glow-red-lg active:scale-95"
            >
              <Star className="w-4 h-4" />
              Google Review
            </a>
            <a
              href="tel:04422436083"
              className="bg-automotive-card hover:bg-automotive-cardHover text-white py-3 px-5 rounded-xl font-heading font-bold uppercase tracking-wider text-xs transition-all border border-automotive-border"
            >
              Call 044-22436083
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
