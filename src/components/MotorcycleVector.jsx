import React from 'react';

/**
 * High-precision technical motorcycle side-view vector illustration.
 * Features realistic mechanical geometry: trellis frame, front suspension forks,
 * disc rotors, calipers, engine block, drive chain, rear sprocket, battery tray,
 * and interactive numbered radar hotspots with accessible focus states.
 */
export default function MotorcycleVector({ activeComponentId, onSelectComponent, components }) {
  return (
    <div className="relative w-full aspect-[5/3] max-w-4xl mx-auto select-none">
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-full drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Interactive motorcycle component anatomy diagram"
      >
        <defs>
          {/* Gradients for dark metallic automotive aesthetic */}
          <linearGradient id="frameGrad" x1="200" y1="200" x2="800" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2A2F37" />
            <stop offset="50%" stopColor="#1C1F24" />
            <stop offset="100%" stopColor="#121417" />
          </linearGradient>

          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A525D" />
            <stop offset="50%" stopColor="#2D333B" />
            <stop offset="100%" stopColor="#1E2228" />
          </linearGradient>

          <linearGradient id="engineGrad" x1="400" y1="300" x2="600" y2="500" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2C323B" />
            <stop offset="60%" stopColor="#181B20" />
            <stop offset="100%" stopColor="#0E1012" />
          </linearGradient>

          <linearGradient id="tankGrad" x1="500" y1="150" x2="700" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2A2E35" />
            <stop offset="35%" stopColor="#1B1E23" />
            <stop offset="85%" stopColor="#F04432" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#111316" />
          </linearGradient>

          <radialGradient id="rotorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F04432" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F04432" stopOpacity="0" />
          </radialGradient>

          {/* Drop shadow filter for active hotspot */}
          <filter id="hotspotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background grid references (subtle automotive blueprint style) */}
        <g opacity="0.12" stroke="#4A5568" strokeWidth="0.8" strokeDasharray="4 6">
          <line x1="80" y1="540" x2="920" y2="540" />
          <line x1="180" y1="100" x2="180" y2="540" />
          <line x1="820" y1="100" x2="820" y2="540" />
          <line x1="500" y1="100" x2="500" y2="540" />
        </g>

        {/* Ground plane shadow */}
        <ellipse cx="500" cy="542" rx="420" ry="24" fill="#000000" opacity="0.75" />

        {/* ================= REAR WHEEL ASSEMBLY ================= */}
        {/* Rear Tyre Outer Tread (Component 4) */}
        <g id="rear-wheel" className="transition-all duration-300">
          <circle cx="180" cy="430" r="110" fill="#131518" stroke="#252A30" strokeWidth="24" />
          {/* Tyre Tread Marks */}
          <circle cx="180" cy="430" r="121" stroke="#0B0C0E" strokeWidth="3" strokeDasharray="14 12" />
          {/* Rim Alloy */}
          <circle cx="180" cy="430" r="88" fill="#181B20" stroke="#3D444E" strokeWidth="4" />
          {/* Rim Spokes */}
          <path d="M180 342L180 518M92 430L268 430M118 368L242 492M118 492L242 368" stroke="#4A525D" strokeWidth="6" strokeLinecap="round" />
          {/* Rear Brake Disc Rotor (Component 6) */}
          <circle cx="180" cy="430" r="54" fill="#20242A" stroke="#5D6673" strokeWidth="3" strokeDasharray="6 4" />
          {/* Rear Sprocket Teeth (Component 8) */}
          <circle cx="180" cy="430" r="42" fill="#15171B" stroke="#D19A29" strokeWidth="6" strokeDasharray="7 5" />
          {/* Rear Axle Nut */}
          <circle cx="180" cy="430" r="14" fill="#3A404A" stroke="#717D8D" strokeWidth="3" />
        </g>

        {/* ================= FRONT WHEEL ASSEMBLY ================= */}
        {/* Front Tyre Outer Tread (Component 3) */}
        <g id="front-wheel" className="transition-all duration-300">
          <circle cx="820" cy="430" r="110" fill="#131518" stroke="#252A30" strokeWidth="24" />
          {/* Tyre Tread Marks */}
          <circle cx="820" cy="430" r="121" stroke="#0B0C0E" strokeWidth="3" strokeDasharray="14 12" />
          {/* Rim Alloy */}
          <circle cx="820" cy="430" r="88" fill="#181B20" stroke="#3D444E" strokeWidth="4" />
          {/* Rim Spokes */}
          <path d="M820 342L820 518M732 430L908 430M758 368L882 492M758 492L882 368" stroke="#4A525D" strokeWidth="6" strokeLinecap="round" />
          {/* Front Brake Disc Rotor (Component 5) */}
          <circle cx="820" cy="430" r="62" fill="#20242A" stroke="#7B8797" strokeWidth="4" strokeDasharray="8 5" />
          <circle cx="820" cy="430" r="40" stroke="#4F5661" strokeWidth="2" strokeDasharray="4 4" />
          {/* Front Brake Caliper */}
          <path d="M760 385L795 380L800 425L765 430Z" fill="#D2232A" stroke="#F5F5F5" strokeWidth="1.5" />
          {/* Front Axle Nut */}
          <circle cx="820" cy="430" r="14" fill="#3A404A" stroke="#717D8D" strokeWidth="3" />
        </g>

        {/* ================= REAR SWINGARM & DRIVE CHAIN ================= */}
        {/* Swingarm */}
        <path d="M180 430L440 435L420 395L180 430Z" fill="url(#metalGrad)" stroke="#383E48" strokeWidth="2" />
        {/* Rear Shock Absorber / Monoshock */}
        <path d="M370 415L430 310" stroke="#525B68" strokeWidth="14" strokeLinecap="round" />
        <path d="M375 410L425 315" stroke="#F04432" strokeWidth="8" strokeDasharray="10 8" />

        {/* Drive Chain (Component 7) */}
        <g id="drive-chain">
          {/* Top chain run */}
          <line x1="205" y1="395" x2="450" y2="420" stroke="#D19A29" strokeWidth="7" strokeDasharray="8 4" />
          {/* Bottom chain run */}
          <line x1="205" y1="465" x2="445" y2="448" stroke="#C58D20" strokeWidth="7" strokeDasharray="8 4" />
        </g>

        {/* ================= FRONT FORKS & STEERING ================= */}
        {/* Inverted Front Forks (Telescopic) */}
        <g id="front-forks">
          <line x1="820" y1="430" x2="695" y2="185" stroke="#A0AEC0" strokeWidth="16" strokeLinecap="round" />
          <line x1="805" y1="400" x2="690" y2="185" stroke="#D29B38" strokeWidth="10" strokeLinecap="round" />
          {/* Fork Triple Clamp */}
          <rect x="670" y="180" width="45" height="18" rx="4" fill="#2D333B" stroke="#4F5661" strokeWidth="2" transform="rotate(-28 670 180)" />
          <rect x="685" y="225" width="45" height="18" rx="4" fill="#2D333B" stroke="#4F5661" strokeWidth="2" transform="rotate(-28 685 225)" />
          {/* Front Mudguard Fender */}
          <path d="M740 375C750 340 820 325 870 345C890 355 905 375 910 395" stroke="#1F2329" strokeWidth="10" strokeLinecap="round" fill="none" />
        </g>

        {/* ================= CHASSIS / TRELLIS FRAME ================= */}
        <g id="trellis-frame">
          {/* Main Backbone & Engine Cradle */}
          <path d="M685 195L520 230L420 320L440 435L570 450L630 350L685 195Z" fill="none" stroke="#2D333B" strokeWidth="12" strokeLinejoin="round" />
          {/* Trellis Cross Braces */}
          <path d="M640 230L550 330M580 220L490 330M520 330L590 440" stroke="#F04432" strokeWidth="4" opacity="0.8" />
        </g>

        {/* ================= ENGINE & TRANSMISSION BLOCK ================= */}
        <g id="engine-block">
          {/* Crankcase & Transmission casing */}
          <path d="M430 420C430 370 470 350 510 350C560 350 610 370 610 430C610 470 560 485 500 485C450 485 430 460 430 420Z" fill="url(#engineGrad)" stroke="#3E4550" strokeWidth="3" />
          {/* Cylinder Head & Cooling Fins (Component 1) */}
          <rect x="520" y="325" width="85" height="14" rx="3" fill="#323740" stroke="#4B5360" strokeWidth="1.5" transform="rotate(-30 520 325)" />
          <rect x="525" y="342" width="85" height="12" rx="3" fill="#292D34" stroke="#4B5360" strokeWidth="1.5" transform="rotate(-30 525 342)" />
          <rect x="530" y="357" width="85" height="12" rx="3" fill="#22252B" stroke="#4B5360" strokeWidth="1.5" transform="rotate(-30 530 357)" />
          {/* Engine Oil Sump & Inspection Window (Component 2) */}
          <circle cx="485" cy="455" r="16" fill="#111316" stroke="#D19A29" strokeWidth="3" />
          <circle cx="485" cy="455" r="8" fill="#F04432" opacity="0.6" />
          {/* Starter Motor / Alternator Cover */}
          <circle cx="560" cy="425" r="28" fill="#1C1F25" stroke="#3D444E" strokeWidth="2" />
          <circle cx="560" cy="425" r="14" fill="#272C34" stroke="#505967" strokeWidth="1.5" />
          {/* Exhaust Header Pipe */}
          <path d="M595 350C620 380 625 460 580 490L400 495L270 435" fill="none" stroke="#717D8D" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
          {/* Exhaust Muffler Canister */}
          <path d="M370 480L230 425L225 395L370 455Z" fill="url(#metalGrad)" stroke="#4A525D" strokeWidth="2.5" />
          <line x1="225" y1="410" x2="235" y2="410" stroke="#F04432" strokeWidth="3" />
        </g>

        {/* ================= BATTERY COMPARTMENT ================= */}
        {/* Battery under side panel (Component 9) */}
        <g id="battery-box">
          <rect x="420" y="295" width="46" height="42" rx="4" fill="#181B20" stroke="#383F49" strokeWidth="2.5" />
          <rect x="426" y="290" width="10" height="6" rx="1" fill="#E2001A" />
          <rect x="450" y="290" width="10" height="6" rx="1" fill="#3D444E" />
          <text x="432" y="322" fontFamily="'Barlow Condensed', sans-serif" fontWeight="800" fontSize="13" fill="#A7ABB1">12V</text>
        </g>

        {/* ================= FUEL TANK, SEAT & BODYWORK ================= */}
        {/* Fuel Tank */}
        <path d="M685 195C685 195 640 160 550 160C480 160 450 200 440 250C480 265 580 260 625 240L685 195Z" fill="url(#tankGrad)" stroke="#3A3F48" strokeWidth="2" />
        {/* Tank Knee Recess Accent */}
        <path d="M570 190C530 195 490 220 480 245" stroke="#F04432" strokeWidth="3.5" strokeLinecap="round" />
        <text x="540" y="215" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" fontSize="18" fill="#FFFFFF" letterSpacing="3" opacity="0.85">MARUTHI</text>

        {/* Rider & Pillion Seat */}
        <path d="M440 250C380 255 330 240 270 230C280 260 330 275 420 280Z" fill="#121316" stroke="#2D333B" strokeWidth="2.5" />
        <path d="M440 250C390 255 350 248 300 240" stroke="#F04432" strokeWidth="1.5" strokeDasharray="5 3" />

        {/* Rear Tail Cowl */}
        <path d="M280 235L210 230L260 275L330 275Z" fill="#191B20" stroke="#343A44" strokeWidth="2" />
        {/* Taillight */}
        <path d="M205 230L215 228L215 242L205 240Z" fill="#F04432" filter="url(#hotspotGlow)" />

        {/* ================= HANDLEBARS, IGNITION & HEADLIGHT ================= */}
        {/* Handlebars & Controls */}
        <path d="M670 180L655 145L640 148" stroke="#8A96A6" strokeWidth="9" strokeLinecap="round" />
        <circle cx="636" cy="149" r="6" fill="#181B20" stroke="#F04432" strokeWidth="2" />

        {/* Ignition Key & Lock (Component 11) */}
        <rect x="662" y="166" width="16" height="18" rx="3" fill="#2A2F37" stroke="#717D8D" strokeWidth="2" />
        <circle cx="670" cy="175" r="3.5" fill="#F04432" />

        {/* Front Headlight Cowl & LED Mask (Component 10) */}
        <path d="M720 170L785 180L810 220L750 230Z" fill="#181B20" stroke="#373D47" strokeWidth="2" />
        {/* Headlight Projector Lens */}
        <path d="M790 190L812 215L785 220Z" fill="#E2E8F0" opacity="0.95" filter="url(#hotspotGlow)" />
        <line x1="785" y1="205" x2="805" y2="205" stroke="#F04432" strokeWidth="2" />
        {/* Front Turn Signal Indicator */}
        <circle cx="735" cy="175" r="5" fill="#ED8936" />

        {/* ================= MAIN & SIDE STAND (Component 12) ================= */}
        <g id="stand-assembly">
          {/* Main Centre Stand Leg */}
          <line x1="450" y1="465" x2="435" y2="538" stroke="#717D8D" strokeWidth="7" strokeLinecap="round" />
          <line x1="430" y1="538" x2="445" y2="538" stroke="#3A404A" strokeWidth="9" strokeLinecap="round" />
          {/* Stand Tension Spring */}
          <line x1="450" y1="475" x2="440" y2="515" stroke="#F04432" strokeWidth="2.5" strokeDasharray="4 3" />
        </g>

        {/* ================= INTERACTIVE HOTSPOTS (1 TO 12) ================= */}
        {components.map((comp) => {
          const isActive = activeComponentId === comp.id;
          return (
            <g
              key={comp.id}
              className="cursor-pointer group focus:outline-none"
              tabIndex={0}
              role="button"
              aria-label={`Inspect ${comp.name} (Part ${comp.number})`}
              aria-pressed={isActive}
              onClick={() => onSelectComponent(comp.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectComponent(comp.id);
                }
              }}
            >
              {/* Animated radar pulse circle when active */}
              {isActive && (
                <>
                  <circle
                    cx={comp.x}
                    cy={comp.y}
                    r="28"
                    fill="none"
                    stroke="#F04432"
                    strokeWidth="2"
                    opacity="0.8"
                    className="animate-ping"
                    style={{ transformOrigin: `${comp.x}px ${comp.y}px`, animationDuration: '2.2s' }}
                  />
                  <circle
                    cx={comp.x}
                    cy={comp.y}
                    r="22"
                    fill="#F04432"
                    opacity="0.25"
                    filter="url(#hotspotGlow)"
                  />
                </>
              )}

              {/* Hotspot Outer Border Ring */}
              <circle
                cx={comp.x}
                cy={comp.y}
                r={isActive ? 16 : 14}
                fill={isActive ? '#F04432' : '#141619'}
                stroke={isActive ? '#FFFFFF' : '#F04432'}
                strokeWidth={isActive ? 2.5 : 2}
                className="transition-all duration-300 group-hover:scale-125 group-hover:stroke-white group-hover:fill-automotive-red"
                style={{ transformOrigin: `${comp.x}px ${comp.y}px` }}
              />

              {/* Number inside hotspot */}
              <text
                x={comp.x}
                y={comp.y + 4.5}
                textAnchor="middle"
                fontFamily="'Barlow Condensed', sans-serif"
                fontWeight="900"
                fontSize={isActive ? "13" : "12"}
                fill={isActive ? "#FFFFFF" : "#F5F5F5"}
                className="pointer-events-none transition-all duration-200 select-none"
              >
                {comp.number}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
