import React, { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#top', active: true },
  { label: 'Invest', href: '#obras', active: false },
  { label: 'Communit', href: '#capacidades', active: false },
  { label: 'Blog', href: '#metodologia', active: false },
  { label: 'For business', href: '#impacto', active: false },
  { label: 'Membership', href: '#contacto', active: false },
];

export function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#030207]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
        {/* Left: Double-slash logo mark + Vaultra */}
        <a
          href="#top"
          className="inline-flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity"
          aria-label="Vaultra Home"
        >
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.08] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4.2 12.5L7.6 3.5M8.8 12.5L12.2 3.5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-[19px] font-medium tracking-[-0.02em] text-white">
            Vaultra
          </span>
        </a>

        {/* Center: Rounded-full Glass Pill Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-1 rounded-full px-2.5 py-1.5 bg-white/[0.04] border border-white/[0.1] backdrop-blur-md"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                item.active
                  ? 'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium text-white bg-white/[0.12] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-colors'
                  : 'inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] font-normal text-white/75 hover:text-white transition-colors'
              }
            >
              {item.active && (
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white text-[#05040a]"
                >
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="2.5" fill="currentColor" />
                  </svg>
                </span>
              )}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right: EN Globe Selector + White "Sign up" pill + Outline "Log In" pill */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            aria-label="Select language: English"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-normal text-white/85 hover:text-white transition-colors cursor-pointer"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="opacity-85"
            >
              <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.2" />
              <ellipse cx="8" cy="8" rx="3" ry="6.2" stroke="currentColor" strokeWidth="1.2" />
              <path d="M2.2 8H13.8" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span>EN</span>
            <span aria-hidden="true" className="text-xs leading-none translate-y-[-1px]">
              ⌄
            </span>
          </button>

          <a
            href="#contacto"
            className="vaultra-btn-white px-5 py-2 text-[13px] whitespace-nowrap"
          >
            Sign up
          </a>

          <a
            href="#contacto"
            className="hidden sm:inline-flex vaultra-btn-outline px-5 py-2 text-[13px] whitespace-nowrap"
          >
            Log In
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="xl:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 bg-white/[0.05] text-white cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              {mobileNavOpen ? (
                <path
                  d="M4 4L12 12M12 4L4 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2.5 5H13.5M2.5 8H13.5M2.5 11H13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Compact Mobile Dropdown */}
      {mobileNavOpen && (
        <div className="xl:hidden mx-5 mb-4 rounded-2xl p-4 bg-[#0b0914]/95 border border-white/15 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileNavOpen(false)}
                className={
                  item.active
                    ? 'flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-white bg-white/15'
                    : 'flex items-center rounded-full px-3.5 py-2 text-xs text-white/75 hover:text-white'
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
