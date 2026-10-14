// Central spare parts catalogue data for New Maruthi Automobiles
// Categories can be easily maintained or edited here without UI changes.

export const sparePartsCategories = [
  {
    id: 'tyres',
    title: 'Tyres',
    subtitle: 'Front & Rear Motorcycle & Scooter Tyres',
    description: 'High-traction commuter, highway, and wet-grip tyres engineered for durability, puncture resistance, and confident handling across city and highway roads.',
    image: '/images/tyres.jpg',
    categoryCode: 'CAT-01',
    brands: ['MRF', 'CEAT', 'Apollo'],
    items: [
      { name: 'MRF Nylogrip & Zapper Series', desc: 'Commuter, city, and sport tread patterns' },
      { name: 'CEAT Gripp & Zoom Series', desc: 'All-weather, puncture-resistant tubeless tyres' },
      { name: 'Apollo ActiGRIP & ActiSTEER', desc: 'Directional front and heavy-duty rear options' },
      { name: 'Scooter Tyres (10", 12")', desc: 'Activa, Jupiter, Access compatible sizes' },
      { name: 'Motorcycle Tyres (17", 18")', desc: 'Pulsar, Splendor, FZ, Apache fitments' },
      { name: 'Heavy Duty Inner Tubes', desc: 'Natural rubber inner tubes for spoked & tube-type wheels' }
    ],
    highlight: 'Tubeless & Tube-type sizes available for all popular two-wheelers',
    whatsappMessage: 'Hello New Maruthi Automobiles, I would like to enquire about motorcycle tyres (MRF / CEAT / Apollo). Please let me know tyre sizes and availability for my bike.'
  },
  {
    id: 'engine-oils',
    title: 'Engine Oils and Lubricants',
    subtitle: '4T Engine Oils, Gear Oils & Chain Care',
    description: 'Genuine 4-stroke motorcycle and scooter engine oils that protect against thermal breakdown, reduce internal friction, and keep gears shifting cleanly.',
    image: '/images/engine_oils.jpg',
    categoryCode: 'CAT-02',
    brands: ['Castrol', 'Shell', 'Motul', 'Servo', 'TVS', 'Bajaj'],
    items: [
      { name: 'Castrol Activ 4T & Power1', desc: 'Continuous protection with Actibond and Power Release' },
      { name: 'Shell Advance AX5 & AX7', desc: 'Active Cleansing Technology for smoother clutch response' },
      { name: 'Motul 3000 & 5100 Technosynthese', desc: 'Premium thermal stability for high-stress daily rides' },
      { name: 'Servo 4T Zoom Series', desc: 'IndianOil trusted mineral & semi-synthetic 4T engine oils' },
      { name: 'OEM Specific Oils (TVS & Bajaj Genuine)', desc: 'Engine oils formulated specifically for OEM engines' },
      { name: 'Chain Lubricants & Degreasers', desc: 'High-tack spray lubes to prevent chain wear and rust' }
    ],
    highlight: 'Mineral, semi-synthetic, and 4T scooter oil grades in stock',
    whatsappMessage: 'Hello New Maruthi Automobiles, I would like to enquire about engine oils and chain lubes (Castrol / Shell / Motul / Servo). Please let me know available grades.'
  },
  {
    id: 'mechanical-parts',
    title: 'Engine and Mechanical Parts',
    subtitle: 'Internal & Drive Transmission Components',
    description: 'Precision mechanical components essential for vehicle power delivery, engine compression, clutch engagement, and reliable daily operation.',
    image: '/images/mechanical_parts.jpg',
    categoryCode: 'CAT-03',
    brands: ['OEM Compatible', 'Rolon', 'Champion', 'Minda'],
    items: [
      { name: 'Chain Sprocket Kits', desc: 'Precision drive sprockets and matched drive chains' },
      { name: 'Clutch Plates & Friction Discs', desc: 'Smooth torque transmission without clutch slip' },
      { name: 'Gaskets & Engine Seal Kits', desc: 'Head gaskets, crankcase seals, and O-rings' },
      { name: 'Piston Rings & Valve Sets', desc: 'Routine overhaul and engine rebuild spares' },
      { name: 'Spark Plugs', desc: 'Copper core and nickel spark plugs for clean ignition' },
      { name: 'Drive Belts & Rollers', desc: 'CVT variator belts and roller weights for gearless scooters' }
    ],
    highlight: 'High quality wear-resistant metallurgy for extended service life',
    whatsappMessage: 'Hello New Maruthi Automobiles, I am checking availability for engine/mechanical parts (chain sprocket kit, clutch plates, gaskets). Please let me know if in stock.'
  },
  {
    id: 'braking-safety',
    title: 'Braking and Safety Components',
    subtitle: 'Brake Pads, Shoes, Cables & Security Locks',
    description: 'Crucial stopping and security components designed for reliable friction performance, fade resistance in Chennai traffic, and vehicle safety.',
    image: '/images/mechanical_parts.jpg',
    categoryCode: 'CAT-04',
    brands: ['KBX', 'Endurance', 'Minda', 'Brembo Compatible'],
    items: [
      { name: 'Front & Rear Disc Brake Pads', desc: 'Semi-metallic and ceramic friction compounds' },
      { name: 'Drum Brake Shoes & Springs', desc: 'High-grip asbestos-free brake shoes for scooters and bikes' },
      { name: 'Brake Cables & Master Cylinder Kits', desc: 'Responsive inner cables and piston replacement seals' },
      { name: 'Handlebar & Wheel Disc Locks', desc: 'Hardened anti-theft security locks and disc locks' },
      { name: 'Full Locksets & Key Assemblies', desc: 'Complete ignition switch, tank cap, and seat lock sets' },
      { name: 'DOT 3 & DOT 4 Brake Fluids', desc: 'High-boiling hydraulic fluids for disc brake systems' }
    ],
    highlight: 'High thermal threshold compounds to prevent brake fade',
    whatsappMessage: 'Hello New Maruthi Automobiles, I need brake pads / brake shoes / locksets for my two-wheeler. Please let me know what brands and options are available.'
  },
  {
    id: 'electrical',
    title: 'Electrical Components',
    subtitle: 'Lighting, Flashers, Horns & Relays',
    description: 'Dependable electrical parts designed to withstand road vibration and monsoon moisture, keeping your lighting, ignition, and signals operating clearly.',
    image: '/images/hero_motorcycle.jpg',
    categoryCode: 'CAT-05',
    brands: ['Minda', 'Swiss', 'Lumax', 'Varroc'],
    items: [
      { name: 'LED Indicator Flashers & Relays', desc: 'Load-independent electronic flasher units' },
      { name: 'Headlight Bulbs & Halogen Lamps', desc: 'Standard 35/35W and high-visibility headlight bulbs' },
      { name: 'Tail Light & Indicator Assemblies', desc: 'OEM-fit lens housings and replacement indicator stalks' },
      { name: 'High-Decibel Two-Wheeler Horns', desc: 'Durable dual-tone and single disc horns' },
      { name: 'Ignition Coils & CDI / TCI Units', desc: 'Clean spark delivery units and starter relays' },
      { name: 'Handlebar Switch Units', desc: 'Pass light, horn, turn signal, and electric start switches' }
    ],
    highlight: 'Vibration-damped wiring and moisture-sealed switchgear',
    whatsappMessage: 'Hello New Maruthi Automobiles, I am looking for electrical parts (LED flashers, headlight bulbs, horns, starter relays). Please confirm if available.'
  },
  {
    id: 'batteries',
    title: 'Batteries',
    subtitle: '12V VRLA Maintenance-Free Batteries',
    description: 'Factory-sealed, zero-maintenance two-wheeler batteries delivering high cold-cranking amperes (CCA) for effortless push-button self-starts.',
    image: '/images/about_workshop.jpg',
    categoryCode: 'CAT-06',
    brands: ['Powerzone'],
    items: [
      { name: 'Powerzone 2.5Ah & 4Ah VRLA', desc: 'Ideal for 100cc–125cc commuter bikes and kick-start models' },
      { name: 'Powerzone 5Ah & 7Ah Batteries', desc: 'High-power cranking for 150cc–220cc self-start motorcycles' },
      { name: 'Scooter VRLA Compact Batteries', desc: 'Factory-sealed batteries for Honda Activa, Jupiter, Access' },
      { name: 'Battery Terminals & Fasteners', desc: 'Lead coated terminal nuts, anti-corrosion grease, and clips' }
    ],
    highlight: 'Spill-proof, valve-regulated design with strong cranking power',
    whatsappMessage: 'Hello New Maruthi Automobiles, I would like to enquire about two-wheeler batteries (Powerzone). Please let me know compatible capacities for my bike.'
  },
  {
    id: 'body-accessories',
    title: 'Body and Utility Accessories',
    subtitle: 'Stands, Mirrors, Guards & Daily Essentials',
    description: 'Durable exterior hardware and utility accessories to keep your two-wheeler upright, functional, and equipped for daily city commutes.',
    image: '/images/about_workshop.jpg',
    categoryCode: 'CAT-07',
    brands: ['Heavy Duty Steel', 'Steelbird', 'Universal Fit'],
    items: [
      { name: 'Main Centre Stands & Springs', desc: 'Heavy gauge steel centre stands and high-tension springs' },
      { name: 'Side Stands & Pivot Bolts', desc: 'Sturdy side prop stands for motorcycles and scooters' },
      { name: 'Bicycle Stands & Universal Mounts', desc: 'Rugged bicycle parking stands and utility brackets' },
      { name: 'Rear-View Mirrors (Pair)', desc: 'Clear convex optical mirrors with standard 8mm & 10mm threads' },
      { name: 'Footrests & Rubber Pegs', desc: 'Pillion footrest assemblies and vibration-damping rubbers' },
      { name: 'Throttle & Clutch Grips', desc: 'Ergonomic rubber hand grips for comfort and control' }
    ],
    highlight: 'Corrosion-resistant powder-coated steel and heavy gauge hardware',
    whatsappMessage: 'Hello New Maruthi Automobiles, I am checking for body and utility accessories (main stand, side stand, bicycle stand, mirrors). Please let me know what is in stock.'
  },
  {
    id: 'oem-general-spares',
    title: 'General Two-Wheeler Spare Parts',
    subtitle: 'OEM-Compatible Spares Across All Major Makes',
    description: 'Comprehensive inventory of routine service and replacement spares covering Chennai’s most popular motorcycles and scooters from top Indian manufacturers.',
    image: '/images/mechanical_parts.jpg',
    categoryCode: 'CAT-08',
    brands: ['Honda', 'Bajaj', 'TVS', 'Suzuki', 'Yamaha', 'Hero'],
    items: [
      { name: 'Honda-Compatible Spares', desc: 'Activa, Dio, Shine, Unicorn routine maintenance parts' },
      { name: 'Bajaj-Compatible Spares', desc: 'Pulsar, Platina, Discover, Avenger replacement items' },
      { name: 'TVS-Compatible Spares', desc: 'Apache RTR, Jupiter, Ntorq, XL100 essential spares' },
      { name: 'Suzuki-Compatible Spares', desc: 'Access 125, Gixxer, Burgman Street service parts' },
      { name: 'Yamaha-Compatible Spares', desc: 'FZ, FZ-S, R15, RayZR, Fascino compatible items' },
      { name: 'Hero-Compatible Spares', desc: 'Splendor, HF Deluxe, Passion, Glamour spares' }
    ],
    highlight: 'Broad model coverage across commuters, sports bikes, and scooters',
    whatsappMessage: 'Hello New Maruthi Automobiles, I am checking compatible spares for my two-wheeler. Please let me know if you have parts available for my model.'
  }
];
