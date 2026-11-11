import React from 'react';

interface BrandLogo {
  name: string;
  tag: string;
  renderSvg: () => React.ReactNode;
}

const LOGOS: BrandLogo[] = [
  {
    name: 'VAULTRA PRIME',
    tag: 'PRIME SETTLEMENT',
    renderSvg: () => (
      <svg
        viewBox="0 0 184 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Vaultra Prime"
        className="h-7 w-auto"
      >
        <circle
          cx="16"
          cy="18"
          r="12"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.2"
          fill="rgba(255,255,255,0.05)"
        />
        <path
          d="M12.2 23.2L15.4 12.8M16.8 23.2L20 12.8"
          stroke="#f6b6da"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <text
          x="36"
          y="22.5"
          fill="currentColor"
          fontFamily="Poppins, sans-serif"
          fontWeight="500"
          fontSize="12.5"
          letterSpacing="0.14em"
        >
          VAULTRA PRIME
        </text>
      </svg>
    ),
  },
  {
    name: 'AETHER LIQUIDITY',
    tag: 'DEEP ORDERBOOKS',
    renderSvg: () => (
      <svg
        viewBox="0 0 198 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Aether Liquidity"
        className="h-7 w-auto"
      >
        <polygon
          points="16,6 27,26 5,26"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="rgba(216,190,248,0.08)"
        />
        <line x1="9.5" y1="20" x2="22.5" y2="20" stroke="#d8bef8" strokeWidth="1.8" strokeLinecap="round" />
        <text
          x="36"
          y="22.5"
          fill="currentColor"
          fontFamily="Poppins, sans-serif"
          fontWeight="500"
          fontSize="12.5"
          letterSpacing="0.14em"
        >
          AETHER LIQUIDITY
        </text>
      </svg>
    ),
  },
  {
    name: 'HYPERION CHAIN',
    tag: 'ZERO-LATENCY L2',
    renderSvg: () => (
      <svg
        viewBox="0 0 188 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Hyperion Chain"
        className="h-7 w-auto"
      >
        <circle cx="16" cy="18" r="11" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="16" cy="18" rx="5" ry="11" stroke="rgba(246,182,218,0.65)" strokeWidth="1.2" />
        <circle cx="16" cy="18" r="3" fill="#f6b6da" />
        <text
          x="36"
          y="22.5"
          fill="currentColor"
          fontFamily="Poppins, sans-serif"
          fontWeight="500"
          fontSize="12.5"
          letterSpacing="0.14em"
        >
          HYPERION CHAIN
        </text>
      </svg>
    ),
  },
  {
    name: 'KINETIX DEX',
    tag: 'PERPETUAL ENGINE',
    renderSvg: () => (
      <svg
        viewBox="0 0 168 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Kinetix DEX"
        className="h-7 w-auto"
      >
        <rect
          x="4"
          y="6"
          width="24"
          height="24"
          rx="8"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="rgba(255,255,255,0.04)"
        />
        <path d="M12 11L22 18L12 25V11Z" fill="#d8bef8" />
        <text
          x="36"
          y="22.5"
          fill="currentColor"
          fontFamily="Poppins, sans-serif"
          fontWeight="500"
          fontSize="12.5"
          letterSpacing="0.14em"
        >
          KINETIX DEX
        </text>
      </svg>
    ),
  },
  {
    name: 'MONOLITH CUSTODY',
    tag: 'MPC TREASURY',
    renderSvg: () => (
      <svg
        viewBox="0 0 206 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Monolith Custody"
        className="h-7 w-auto"
      >
        <rect x="4" y="7" width="5.5" height="22" rx="2.75" fill="currentColor" />
        <rect x="13" y="7" width="5.5" height="22" rx="2.75" fill="rgba(255,255,255,0.65)" />
        <rect x="22" y="7" width="5.5" height="22" rx="2.75" fill="#f6b6da" />
        <text
          x="36"
          y="22.5"
          fill="currentColor"
          fontFamily="Poppins, sans-serif"
          fontWeight="500"
          fontSize="12.5"
          letterSpacing="0.14em"
        >
          MONOLITH CUSTODY
        </text>
      </svg>
    ),
  },
  {
    name: 'SYNTHETIX VAULT',
    tag: 'YIELD PROTOCOL',
    renderSvg: () => (
      <svg
        viewBox="0 0 194 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Synthetix Vault"
        className="h-7 w-auto"
      >
        <rect
          x="4"
          y="8"
          width="13"
          height="13"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="12"
          y="15"
          width="13"
          height="13"
          rx="4"
          stroke="#d8bef8"
          strokeWidth="1.5"
          fill="rgba(216,190,248,0.12)"
        />
        <text
          x="34"
          y="22.5"
          fill="currentColor"
          fontFamily="Poppins, sans-serif"
          fontWeight="500"
          fontSize="12.5"
          letterSpacing="0.14em"
        >
          SYNTHETIX VAULT
        </text>
      </svg>
    ),
  },
];

export function TrustedLogos() {
  return (
    <section
      aria-label="Institutional Liquidity and Custody Partners"
      className="relative w-full bg-[#030207] py-10 border-y border-white/10 overflow-hidden"
    >
      {/* Subtle Ambient Horizon Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(244,114,182,0.12),rgba(192,132,252,0.08)_45%,transparent_80%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center mb-6 text-center">
          <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.22em] text-white/60">
            Institutional Liquidity &amp; Settlement Infrastructure · $18.4B+ Secured
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="group relative flex items-center justify-center h-16 px-5 rounded-full bg-white/[0.03] border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-[#f6b6da]/45 hover:bg-white/[0.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_0_28px_rgba(216,190,248,0.14)]"
            >
              <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                {logo.renderSvg()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedLogos;
