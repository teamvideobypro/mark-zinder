import React from 'react';

export default function ClientLogos({ dark = false }) {
  const strokeColor = dark ? '#FFFFFF' : '#0B1B32';
  const accentColor = dark ? '#E7BC48' : '#1F406E';

  return (
    <div className="trust-logos" aria-label="Notable past clients">
      {/* NASA */}
      <div className="trust-logo-card" title="NASA">
        <svg width="136" height="44" viewBox="0 0 136 44" fill="none" role="img" aria-label="NASA">
          <circle cx="22" cy="22" r="16" stroke={accentColor} strokeWidth="2.2" />
          <path
            d="M8 25C15 17 29 14 38 19"
            stroke="#D9641E"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <text
            x="48"
            y="28"
            fill={strokeColor}
            fontFamily="Inter, sans-serif"
            fontWeight="800"
            fontSize="21"
            letterSpacing="0.12em"
          >
            NASA
          </text>
        </svg>
      </div>

      {/* IBM */}
      <div className="trust-logo-card" title="IBM">
        <svg width="112" height="44" viewBox="0 0 112 44" fill="none" role="img" aria-label="IBM">
          <text
            x="56"
            y="30"
            textAnchor="middle"
            fill={strokeColor}
            fontFamily="Georgia, 'Times New Roman', serif"
            fontWeight="700"
            fontSize="27"
            letterSpacing="0.18em"
          >
            IBM
          </text>
          <line x1="16" y1="15" x2="96" y2="15" stroke={dark ? '#0B1B32' : '#FFFFFF'} strokeWidth="1.4" />
          <line x1="16" y1="21" x2="96" y2="21" stroke={dark ? '#0B1B32' : '#FFFFFF'} strokeWidth="1.4" />
          <line x1="16" y1="27" x2="96" y2="27" stroke={dark ? '#0B1B32' : '#FFFFFF'} strokeWidth="1.4" />
        </svg>
      </div>

      {/* Morgan Stanley */}
      <div className="trust-logo-card" title="Morgan Stanley">
        <svg width="196" height="44" viewBox="0 0 196 44" fill="none" role="img" aria-label="Morgan Stanley">
          <rect x="6" y="10" width="4" height="24" rx="1" fill="#D4A017" />
          <text
            x="20"
            y="27"
            fill={strokeColor}
            fontFamily="'Playfair Display', Georgia, serif"
            fontWeight="700"
            fontSize="19"
            letterSpacing="0.02em"
          >
            Morgan Stanley
          </text>
        </svg>
      </div>

      {/* Merrill Lynch */}
      <div className="trust-logo-card" title="Merrill Lynch">
        <svg width="190" height="44" viewBox="0 0 190 44" fill="none" role="img" aria-label="Merrill Lynch">
          <path
            d="M12 28L18 15L25 22L31 14L34 28H12Z"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <text
            x="44"
            y="27"
            fill={strokeColor}
            fontFamily="'Playfair Display', Georgia, serif"
            fontWeight="700"
            fontSize="19"
            letterSpacing="0.02em"
          >
            Merrill Lynch
          </text>
        </svg>
      </div>
    </div>
  );
}
