// Brand directory with authentic styling, categories, and vector marks
export const brandCategories = [
  { id: 'all', label: 'All Brands' },
  { id: 'two-wheeler', label: 'Two-Wheeler OEMs' },
  { id: 'oils', label: 'Engine Oils & Lubes' },
  { id: 'tyres', label: 'Tyre Manufacturers' },
  { id: 'batteries', label: 'Batteries' },
];

export const brands = [
  // Two-Wheeler OEMs
  {
    name: 'Honda',
    category: 'two-wheeler',
    tagline: 'Compatible Spares & Maintenance Parts',
    type: 'Two-Wheeler OEM',
    accentColor: '#E40521',
    supportedProducts: ['Activa, Dio, Shine, Unicorn & Hornet Compatible Spares', 'Brake Shoes & Pads', 'Cables & Filters'],
    logoSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6C13 14 10 24 9 34H16C17 26 19 18 23 11L18 6Z" fill="#E40521"/>
      <path d="M26 9C22 16 20 25 19 34H26C27 27 29 20 32 14L26 9Z" fill="#E40521"/>
      <path d="M34 13C31 19 30 26 29 34H36C36 28 38 23 40 18L34 13Z" fill="#E40521"/>
      <text x="46" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="20" fill="#FFFFFF" letter-spacing="2">HONDA</text>
    </svg>`
  },
  {
    name: 'Bajaj',
    category: 'two-wheeler',
    tagline: 'Pulsar, Platina, Avenger & CT Spares',
    type: 'Two-Wheeler OEM',
    accentColor: '#005CAB',
    supportedProducts: ['Pulsar 125/150/180/220 Spares', 'Platina & Discover Parts', 'Chain Sprocket Kits & Brake Pads'],
    logoSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" fill="#005CAB"/>
      <path d="M14 20L20 12L26 20L20 28Z" fill="#FFFFFF"/>
      <text x="42" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="20" fill="#FFFFFF" letter-spacing="2">BAJAJ</text>
    </svg>`
  },
  {
    name: 'TVS',
    category: 'two-wheeler',
    tagline: 'Apache, Jupiter, XL100 & Raider Spares',
    type: 'Two-Wheeler OEM',
    accentColor: '#1A3C8B',
    supportedProducts: ['Apache RTR Series Components', 'Jupiter & Ntorq Parts', 'XL100 Heavy Duty Spares & Belts'],
    logoSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="30" height="20" rx="3" fill="#D2232A"/>
      <path d="M12 16L17 24L22 16H27L19 28H15L7 16H12Z" fill="#FFFFFF"/>
      <text x="44" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="22" fill="#FFFFFF" letter-spacing="2">TVS</text>
    </svg>`
  },
  {
    name: 'Yamaha',
    category: 'two-wheeler',
    tagline: 'FZ, R15, MT-15 & Ray ZR Spares',
    type: 'Two-Wheeler OEM',
    accentColor: '#D2232A',
    supportedProducts: ['FZ & FZ-S Series Spare Parts', 'R15 & MT-15 Sprockets & Brakes', 'RayZR & Fascino Belt & Filters'],
    logoSvg: `<svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" fill="#D2232A"/>
      <path d="M20 9V31M11 15L29 25M29 15L11 25" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
      <text x="42" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="19" fill="#FFFFFF" letter-spacing="1.5">YAMAHA</text>
    </svg>`
  },
  {
    name: 'Hero',
    category: 'two-wheeler',
    tagline: 'Splendor, HF Deluxe, Passion & Glamour Spares',
    type: 'Two-Wheeler OEM',
    accentColor: '#E31B23',
    supportedProducts: ['Splendor Plus & HF Deluxe Spares', 'Passion Pro & Glamour Components', 'Cables, Gaskets & Chain Sets'],
    logoSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 28L20 12L28 28H23L20 21L17 28H12Z" fill="#E31B23"/>
      <text x="38" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="22" fill="#FFFFFF" letter-spacing="2">HERO</text>
    </svg>`
  },
  {
    name: 'Suzuki',
    category: 'two-wheeler',
    tagline: 'Access 125, Gixxer & Burgman Spares',
    type: 'Two-Wheeler OEM',
    accentColor: '#002B49',
    supportedProducts: ['Access 125 Scooter Maintenance', 'Gixxer 150/250 Spares', 'Air Filters & Brake Pads'],
    logoSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12H26L14 28H28" stroke="#E21836" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="36" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="20" fill="#FFFFFF" letter-spacing="1.5">SUZUKI</text>
    </svg>`
  },

  // Engine Oils & Lubricants
  {
    name: 'Castrol',
    category: 'oils',
    tagline: 'Activ & Power1 4T Motorcycle Oils',
    type: 'Lubricant Brand',
    accentColor: '#007A3D',
    supportedProducts: ['Castrol Activ 4T 20W-40', 'Castrol Power1 4T 10W-30 / 10W-40', 'Castrol Chain Lube & Spray'],
    logoSvg: `<svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="28" height="24" rx="4" fill="#007A3D"/>
      <circle cx="18" cy="20" r="7" fill="#E31B23"/>
      <text x="38" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="21" fill="#FFFFFF" letter-spacing="1.5">CASTROL</text>
    </svg>`
  },
  {
    name: 'Shell',
    category: 'oils',
    tagline: 'Advance 4T Synthetic & Mineral Oils',
    type: 'Lubricant Brand',
    accentColor: '#FFD100',
    supportedProducts: ['Shell Advance AX7 Semi-Synthetic', 'Shell Advance AX5 Premium Mineral', 'Shell Advance Ultra 4T'],
    logoSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 28C10 20 14 13 22 11C30 13 34 20 32 28C28 29 25 25 22 25C19 25 16 29 12 28Z" fill="#FFD100" stroke="#DD1D21" stroke-width="2"/>
      <text x="42" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="21" fill="#FFFFFF" letter-spacing="2">SHELL</text>
    </svg>`
  },
  {
    name: 'Motul',
    category: 'oils',
    tagline: 'High Performance 3000, 5100 & 7100 Series',
    type: 'Lubricant Brand',
    accentColor: '#E30613',
    supportedProducts: ['Motul 3000 4T Mineral', 'Motul 5100 4T Semi-Synthetic', 'Motul C2 Chain Lube & C1 Clean'],
    logoSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="9" width="30" height="22" rx="3" fill="#E30613"/>
      <path d="M10 26V15L15 21L20 15V26" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="42" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="21" fill="#FFFFFF" letter-spacing="2">MOTUL</text>
    </svg>`
  },
  {
    name: 'Servo',
    category: 'oils',
    tagline: 'IndianOil Trusted 4T Lubricants',
    type: 'Lubricant Brand',
    accentColor: '#ED6B22',
    supportedProducts: ['Servo 4T Zoom 10W-30 / 20W-40', 'Servo Gear Oils', 'Fork Oil & Grease'],
    logoSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="20" r="13" fill="#ED6B22"/>
      <text x="13" y="24" font-family="sans-serif" font-weight="900" font-size="12" fill="#FFFFFF">S</text>
      <text x="38" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="21" fill="#FFFFFF" letter-spacing="2">SERVO</text>
    </svg>`
  },

  // Tyres
  {
    name: 'MRF',
    category: 'tyres',
    tagline: 'Nylogrip, Zapper & Mogrip Tyres',
    type: 'Tyre Brand',
    accentColor: '#E31B23',
    supportedProducts: ['MRF Zapper Front & Rear Tyres', 'MRF Nylogrip Commuter Tyres', 'MRF Mogrip Off-Road & Wet Grips'],
    logoSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="9" width="30" height="22" rx="2" fill="#E31B23"/>
      <text x="7" y="25" font-family="'Barlow Condensed', sans-serif" font-weight="900" font-size="15" fill="#FFFFFF" letter-spacing="1">MRF</text>
      <text x="42" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="22" fill="#FFFFFF" letter-spacing="2">TYRES</text>
    </svg>`
  },
  {
    name: 'CEAT',
    category: 'tyres',
    tagline: 'Gripp, Zoom & Secura Two-Wheeler Tyres',
    type: 'Tyre Brand',
    accentColor: '#004B93',
    supportedProducts: ['CEAT Zoom Tubeless Tyres', 'CEAT Gripp All-Weather Tyres', 'CEAT Secura Scooter & Commuter Tyres'],
    logoSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="9" width="30" height="22" rx="2" fill="#004B93"/>
      <path d="M12 15H26M19 15V25" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
      <text x="40" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="22" fill="#FFFFFF" letter-spacing="2">CEAT</text>
    </svg>`
  },
  {
    name: 'Apollo',
    category: 'tyres',
    tagline: 'ActiGRIP & ActiSERIES Motorcycle Tyres',
    type: 'Tyre Brand',
    accentColor: '#781251',
    supportedProducts: ['Apollo ActiGRIP R1 & R2', 'Apollo ActiSTEER Front Tyres', 'Tubeless & Tube-Type Options'],
    logoSvg: `<svg viewBox="0 0 125 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="20" r="13" fill="#781251"/>
      <path d="M12 25L18 14L24 25" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
      <text x="38" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="21" fill="#FFFFFF" letter-spacing="1.5">APOLLO</text>
    </svg>`
  },

  // Batteries
  {
    name: 'Powerzone',
    category: 'batteries',
    tagline: 'Amara Raja Powered Maintenance-Free Batteries',
    type: 'Battery Brand',
    accentColor: '#E2001A',
    supportedProducts: ['2.5Ah, 4Ah, 5Ah VRLA Batteries', 'High Cranking Power', 'Zero Maintenance Two-Wheeler Batteries'],
    logoSvg: `<svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="24" height="20" rx="3" fill="#E2001A"/>
      <path d="M15 14L11 20H17L13 26" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="34" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="18" fill="#FFFFFF" letter-spacing="1">POWERZONE</text>
    </svg>`
  },
  {
    name: 'Tata',
    category: 'batteries',
    tagline: 'Tata Green Reliable Two-Wheeler Batteries',
    type: 'Battery Brand',
    accentColor: '#00539F',
    supportedProducts: ['Tata Green Velocity 12V Batteries', 'Scooter & Motorcycle Fitments', 'Vibration Resistant VRLA Tech'],
    logoSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="20" r="13" fill="#00539F"/>
      <path d="M13 17H23M18 17V24" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      <text x="38" y="27" font-family="'Barlow Condensed', sans-serif" font-weight="800" font-size="22" fill="#FFFFFF" letter-spacing="2">TATA</text>
    </svg>`
  }
];
