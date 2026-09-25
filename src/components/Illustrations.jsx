import React from 'react';

// Flat artistic illustration for "Who I Am" (Person walking with laptop and idea cloud)
export function AboutIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 340 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`responsive-svg-illustration ${className}`.trim()}
      style={{
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
        display: 'block',
        filter: 'drop-shadow(0 12px 24px rgba(15, 23, 42, 0.08))',
      }}
    >
      {/* Thought bubble */}
      <circle cx="230" cy="65" r="24" fill="#F1F5F9" />
      <circle cx="206" cy="74" r="14" fill="#F1F5F9" />
      <circle cx="250" cy="74" r="15" fill="#F1F5F9" />
      <circle cx="216" cy="94" r="5" fill="#F1F5F9" />
      {/* Code icon inside bubble */}
      <path d="M222 62L217 67L222 72" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M236 62L241 67L236 72" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M231 60L227 74" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" />

      {/* Person Head */}
      <circle cx="260" cy="118" r="14" fill="#F8E5D8" />
      {/* Hair */}
      <path d="M250 114C250 106 256 102 264 102C272 102 276 107 276 114C276 116 273 118 273 124C270 128 266 128 264 125C261 122 258 124 254 122C251 120 250 117 250 114Z" fill="#0F172A" />
      <path d="M250 114C244 116 238 122 238 132C244 133 248 130 252 126" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

      {/* Body / Dark Teal coat */}
      <path d="M253 132L268 132L282 186L242 186L253 132Z" fill="#0F766E" />
      {/* Belt */}
      <rect x="249" y="152" width="22" height="4" fill="#0F172A" />

      {/* Bag in hand */}
      <rect x="218" y="174" width="22" height="24" rx="4" fill="#14B8A6" />
      <path d="M224 174V168C224 165 227 163 229 163C231 163 234 165 234 168V174" stroke="#0F172A" strokeWidth="2.5" fill="none" />
      <circle cx="229" cy="186" r="3" fill="#FFFFFF" />

      {/* Arms */}
      <path d="M256 136L230 166" stroke="#F8E5D8" strokeWidth="4" strokeLinecap="round" />
      <path d="M266 136L288 152L298 142" stroke="#F8E5D8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Device in hand */}
      <rect x="296" y="132" width="4" height="22" rx="2" fill="#0F766E" transform="rotate(20 296 132)" />

      {/* Legs (walking posture) */}
      <path d="M254 186L236 244" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
      <path d="M236 244L226 248" stroke="#0F766E" strokeWidth="7" strokeLinecap="round" />

      <path d="M268 186L286 242" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
      <path d="M286 242L298 246" stroke="#0F766E" strokeWidth="7" strokeLinecap="round" />

      {/* Shadow */}
      <ellipse cx="260" cy="254" rx="48" ry="6" fill="rgba(15, 23, 42, 0.12)" />
    </svg>
  );
}

// Flat illustration for "Education" (Study desk, chair, lamp, backpack)
export function EducationIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 340 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`responsive-svg-illustration ${className}`.trim()}
      style={{
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        display: 'block',
        filter: 'drop-shadow(0 12px 24px rgba(15, 23, 42, 0.08))',
      }}
    >
      {/* Desk top */}
      <rect x="140" y="156" width="170" height="10" rx="3" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
      {/* Desk legs */}
      <path d="M158 166V245" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
      <path d="M286 166V245" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
      <path d="M148 245H298" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />

      {/* Desk Lamp (Teal) */}
      <path d="M276 156L268 122L248 128" stroke="#0F766E" strokeWidth="4" strokeLinecap="round" />
      <path d="M244 120L256 134" stroke="#0F766E" strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="238" cy="140" rx="14" ry="18" fill="rgba(20, 184, 166, 0.2)" />

      {/* Laptop on desk */}
      <rect x="176" y="142" width="34" height="14" rx="2" fill="#0F766E" />
      <path d="M170 156H216" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

      {/* Books stack on desk */}
      <rect x="224" y="148" width="26" height="5" fill="#0F766E" rx="1.5" />
      <rect x="226" y="142" width="22" height="5" fill="#14B8A6" rx="1.5" />

      {/* Backpack */}
      <rect x="268" y="176" width="32" height="42" rx="10" fill="#0F766E" />
      <rect x="274" y="196" width="20" height="14" rx="4" fill="#0D9488" />
      <path d="M276 176V166C276 162 280 160 284 160C288 160 292 162 292 166V176" stroke="#0F172A" strokeWidth="3" />

      {/* Chair (Left) */}
      <path d="M96 146H126V180H96V146Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3.5" rx="3" />
      <path d="M111 180V228" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
      <path d="M92 228H130" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
      {/* Chair backrest */}
      <path d="M100 146V110C100 104 104 102 111 102H113C120 102 124 104 124 110V146" stroke="#0F766E" strokeWidth="4.5" fill="none" strokeLinecap="round" />

      {/* Floor Shadows */}
      <ellipse cx="225" cy="250" rx="95" ry="7" fill="rgba(15, 23, 42, 0.08)" />
      <ellipse cx="111" cy="233" rx="30" ry="5" fill="rgba(15, 23, 42, 0.08)" />
    </svg>
  );
}

// Flat illustration for "Experience" (Developer at desk, clock, laptop, mug)
export function ExperienceIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 340 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`responsive-svg-illustration ${className}`.trim()}
      style={{
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        display: 'block',
        filter: 'drop-shadow(0 12px 24px rgba(15, 23, 42, 0.08))',
      }}
    >
      {/* Clock on wall */}
      <circle cx="95" cy="75" r="18" stroke="#0F766E" strokeWidth="3.5" fill="#FFFFFF" />
      <path d="M95 64V75H104" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" />

      {/* Desk top */}
      <rect x="40" y="162" width="200" height="8" rx="3" fill="#0F766E" />
      {/* Desk Legs */}
      <path d="M60 170V245" stroke="#0F766E" strokeWidth="5" strokeLinecap="round" />
      <path d="M130 170V245" stroke="#0F766E" strokeWidth="5" strokeLinecap="round" />
      <path d="M220 170V245" stroke="#0F766E" strokeWidth="5" strokeLinecap="round" />

      {/* Coffee mug */}
      <rect x="68" y="146" width="14" height="16" rx="2" fill="#14B8A6" />
      <path d="M82 150C86 150 87 153 87 156C87 159 86 162 82 162" stroke="#14B8A6" strokeWidth="2.5" />

      {/* Laptop on desk */}
      <rect x="102" y="132" width="42" height="30" rx="3" fill="#0F172A" stroke="#0F766E" strokeWidth="2.5" />
      <path d="M94 162H154" stroke="#0F766E" strokeWidth="3.5" strokeLinecap="round" />

      {/* Developer Figure sitting */}
      {/* Head */}
      <circle cx="192" cy="122" r="13" fill="#F8E5D8" />
      {/* Hair */}
      <path d="M182 120C182 113 189 108 197 108C204 108 206 113 206 120" stroke="#0F172A" strokeWidth="4.5" strokeLinecap="round" />
      {/* Body / Teal shirt */}
      <path d="M187 135H199L204 182H182L187 135Z" fill="#0F766E" />
      {/* Arms forward on keyboard */}
      <path d="M190 144L160 156" stroke="#F8E5D8" strokeWidth="4.5" strokeLinecap="round" />
      {/* Chair */}
      <path d="M204 146H218V192H204" stroke="#14B8A6" strokeWidth="3.5" />
      <path d="M208 192L208 240" stroke="#14B8A6" strokeWidth="5" />
      <path d="M192 240H224" stroke="#14B8A6" strokeWidth="5" strokeLinecap="round" />

      {/* Floor Shadow */}
      <ellipse cx="145" cy="250" rx="105" ry="6" fill="rgba(15, 23, 42, 0.08)" />
    </svg>
  );
}

// Flat illustration for "Contact" (Laptop inside teal circle with floating communication bubbles)
export function ContactIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`responsive-svg-illustration ${className}`.trim()}
      style={{
        width: '100%',
        maxWidth: '360px',
        margin: '0 auto',
        display: 'block',
      }}
    >
      {/* 1. Top Bar Chart Bubble */}
      <circle cx="236" cy="38" r="18" fill="#14B8A6" />
      <rect x="228" y="40" width="3.5" height="7" rx="1" fill="#FFFFFF" />
      <rect x="234" y="34" width="3.5" height="13" rx="1" fill="#FFFFFF" />
      <rect x="240" y="30" width="3.5" height="17" rx="1" fill="#FFFFFF" />

      {/* 2. Chat Bubble (Larger) */}
      <circle cx="150" cy="90" r="34" fill="#0F766E" />
      <rect x="130" y="76" width="40" height="26" rx="8" fill="#FFFFFF" />
      <polygon points="138,102 131,110 144,102" fill="#FFFFFF" />
      <circle cx="142" cy="89" r="2.5" fill="#0F172A" />
      <circle cx="150" cy="89" r="2.5" fill="#0F172A" />
      <circle cx="158" cy="89" r="2.5" fill="#0F172A" />

      {/* 3. Mail Envelope Bubble */}
      <circle cx="245" cy="108" r="24" fill="#0F766E" />
      <rect x="231" y="97" width="28" height="20" rx="3.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.2" />
      <polygon points="231,97 245,108 259,97" fill="#14B8A6" stroke="#0F172A" strokeWidth="1.2" />

      {/* 4. Folder Bubble */}
      <circle cx="188" cy="158" r="22" fill="#14B8A6" />
      <path d="M176 151H183L186 154H199V167H176V151Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.2" />
      <line x1="180" y1="158" x2="195" y2="158" stroke="#0F172A" strokeWidth="1.2" />

      {/* 5. Document / File Bubble */}
      <circle cx="258" cy="172" r="26" fill="#0F766E" />
      <rect x="246" y="159" width="24" height="28" rx="3" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.2" />
      <line x1="251" y1="165" x2="265" y2="165" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="251" y1="170" x2="265" y2="170" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="251" y1="175" x2="265" y2="175" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="251" y1="180" x2="260" y2="180" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" />

      {/* 6. Big Circle with Laptop */}
      <circle cx="248" cy="254" r="62" fill="#0F766E" />

      {/* Sound / Action waves */}
      <path d="M208 206C212 201 219 201 223 205" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M204 200C211 194 221 194 228 200" stroke="#CCFBF1" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Laptop Keyboard Deck (Base in Perspective) */}
      <polygon points="186,258 258,258 272,228 222,228" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />

      {/* Grid of Keys */}
      {/* Row 1 */}
      <rect x="224" y="231" width="6" height="3" rx="0.5" fill="#0F766E" />
      <rect x="232" y="231" width="6" height="3" rx="0.5" fill="#0F766E" />
      <rect x="240" y="231" width="6" height="3" rx="0.5" fill="#0F766E" />
      <rect x="248" y="231" width="6" height="3" rx="0.5" fill="#0F766E" />
      <rect x="256" y="231" width="6" height="3" rx="0.5" fill="#0F766E" />

      {/* Row 2 */}
      <rect x="216" y="236" width="7" height="3.5" rx="0.5" fill="#0F766E" />
      <rect x="225" y="236" width="7" height="3.5" rx="0.5" fill="#0F766E" />
      <rect x="234" y="236" width="7" height="3.5" rx="0.5" fill="#0F766E" />
      <rect x="243" y="236" width="7" height="3.5" rx="0.5" fill="#0F766E" />
      <rect x="252" y="236" width="7" height="3.5" rx="0.5" fill="#0F766E" />

      {/* Row 3 */}
      <rect x="208" y="242" width="8" height="4" rx="0.5" fill="#0F766E" />
      <rect x="218" y="242" width="8" height="4" rx="0.5" fill="#0F766E" />
      <rect x="228" y="242" width="8" height="4" rx="0.5" fill="#0F766E" />
      <rect x="238" y="242" width="8" height="4" rx="0.5" fill="#0F766E" />
      <rect x="248" y="242" width="8" height="4" rx="0.5" fill="#0F766E" />

      {/* Row 4 */}
      <rect x="200" y="248" width="9" height="4" rx="0.5" fill="#0F766E" />
      <rect x="211" y="248" width="22" height="4" rx="0.5" fill="#0F766E" />
      <rect x="235" y="248" width="9" height="4" rx="0.5" fill="#0F766E" />
      <rect x="246" y="248" width="9" height="4" rx="0.5" fill="#0F766E" />

      {/* Laptop Screen Tilted Up */}
      <polygon points="258,258 272,228 282,186 268,214" fill="#0F172A" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
      <polygon points="261,253 270,228 278,192 269,215" fill="#CCFBF1" stroke="#0F172A" strokeWidth="1" />
    </svg>
  );
}
