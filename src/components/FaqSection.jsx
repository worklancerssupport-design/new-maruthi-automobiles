import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, MapPin } from 'lucide-react';

const faqs = [
  {
    category: 'Products',
    question: 'Do you have spare parts for Honda Activa 6G?',
    answer: 'Yes, we stock a wide range of Honda Activa 6G spare parts at our Tharamani shop, including brake shoes, air filters, clutch plates, and body panels. We carry both genuine and compatible aftermarket options. Call us at 044-22436083 to check specific part availability.'
  },
  {
    category: 'Products',
    question: 'What brands of engine oil do you stock?',
    answer: 'We stock Castrol Activ 4T, Castrol Power1, Shell Advance AX7, Shell Advance Ultra, Motul 3000, Motul 5100, and Motul 7100 engine oils for two-wheelers. We carry 10W-30, 10W-40, and 20W-40 grades suitable for most bikes and scooters.'
  },
  {
    category: 'Products',
    question: 'Do you have tyres for two-wheelers?',
    answer: 'Yes, we stock MRF, CEAT, and Apollo tyres for two-wheelers. We carry tubeless and tube-type tyres for popular models like Honda Activa, Bajaj Pulsar, TVS Jupiter, and Hero Splendor. Visit our Tharamani store for fitting.'
  },
  {
    category: 'Products',
    question: 'Do you have chain sprocket kits?',
    answer: 'Yes, we stock chain sprocket kits for Honda, Bajaj, TVS, Yamaha, Hero, and Suzuki two-wheelers. We carry both OEM and aftermarket options. Popular kits include those for Pulsar, Apache, Activa, and Splendor models.'
  },
  {
    category: 'Pricing',
    question: 'How much does a bike battery cost?',
    answer: 'We stock Powerzone maintenance-free batteries for all popular two-wheeler models at affordable prices. Capacity and compatibility vary by bike model — call 044-22436083 or visit our Tharamani store for details.'
  },
  {
    category: 'Pricing',
    question: 'Do you sell genuine or aftermarket spare parts?',
    answer: 'We stock both genuine OEM spare parts and quality aftermarket alternatives at affordable prices. For critical components like brake pads, engine parts, and electricals, we recommend genuine parts. For consumables like filters and cables, we offer both options. Enquire at our Tharamani store for details.'
  },
  {
    category: 'Service & Location',
    question: 'What are your shop timings?',
    answer: 'New Maruthi Automobiles is open every day from 8 AM to 10 PM. We are located at No. 49/34, Kattabomman Street, 100 Feet Road, Tharamani, Chennai 600113. We serve customers from Velachery, Adyar, Perungudi, and across South Chennai.'
  },
  {
    category: 'Service & Location',
    question: 'Do you deliver spare parts?',
    answer: 'We currently serve walk-in customers at our Tharamani store. For bulk orders or specific part requirements, please call us at 044-22436083 or WhatsApp +91-9444018868 to discuss availability and arrangement.'
  },
  {
    category: 'Service & Location',
    question: 'Where are you located in Chennai?',
    answer: 'We are at No. 49/34, Kattabomman Street, 100 Feet Road, Tharamani, Chennai 600113. We are easily accessible from Velachery, SRP Tools, Perungudi, and the OMR IT corridor. Parking is available near the store.'
  },
  {
    category: 'Technical',
    question: 'Which engine oil is best for Bajaj Pulsar 150?',
    answer: 'For Bajaj Pulsar 150, we recommend 10W-30 or 10W-40 4T engine oil. Popular options include Castrol Power1 4T 10W-30, Motul 5100 4T, and Shell Advance AX7. Visit our Tharamani shop for the right grade for your riding conditions.'
  },
  {
    category: 'Technical',
    question: 'How often should I change my bike engine oil?',
    answer: 'For most commuter bikes, change engine oil every 2,500–3,000 km or every 3 months, whichever comes first. For synthetic oils like Motul 7100, intervals can extend to 5,000 km. We stock all grades at our Tharamani store.'
  },
  {
    category: 'Technical',
    question: 'Can I get parts for my specific bike model?',
    answer: 'We stock spare parts for most popular two-wheeler brands including Honda, Bajaj, TVS, Yamaha, Hero, and Suzuki. Tell us your bike model and the part you need — call 044-22436083 or visit our Tharamani shop and we will help you find the right fit.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-automotive-dark border-t border-automotive-border relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-automotive-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-automotive-card border border-automotive-border text-automotive-red text-xs font-heading uppercase tracking-widest mb-3 font-bold">
              <HelpCircle className="w-4 h-4" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white uppercase tracking-tight">
              BIKE SPARE PARTS <span className="text-automotive-red">QUESTIONS ANSWERED.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-automotive-muted max-w-2xl font-sans">
              Everything you need to know about our two-wheeler spare parts, engine oils, tyres, batteries and store in Tharamani, Chennai.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-automotive-card border border-automotive-border hover:border-automotive-red/60 rounded-xl transition-all duration-300 shadow-card-dark relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-automotive-red via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-4 p-5 text-left cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <h3 className="text-sm sm:text-base font-heading font-bold uppercase text-white tracking-wide group-hover:text-automotive-red transition-colors leading-snug">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-automotive-red transition-transform duration-300 mt-0.5 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-xs sm:text-sm text-automotive-silver font-sans leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-automotive-surface border border-automotive-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase tracking-wider">
              STILL HAVE QUESTIONS?
            </h3>
            <p className="text-xs sm:text-sm text-automotive-muted font-sans max-w-xl mt-1">
              Call us or visit our Tharamani store. We are here to help you find the right two-wheeler spare parts.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:04422436083"
              className="bg-automotive-red hover:bg-automotive-redHover text-white py-3 px-5 rounded-xl font-heading font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2 shadow-glow-red hover:shadow-glow-red-lg active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call 044-22436083
            </a>
            <a
              href="#contact"
              className="bg-automotive-card hover:bg-automotive-cardHover text-white py-3 px-5 rounded-xl font-heading font-bold uppercase tracking-wider text-xs transition-all border border-automotive-border flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Visit Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
