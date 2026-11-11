import React, { useEffect, useRef, useState } from 'react';

const GLOBE_STILL_URL =
  'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/f1631235-0a76-464d-8f1d-2c4b48a997d5.jpg';
const GLOBE_VIDEO_URL =
  'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/e71aea27-a808-4ae3-8231-a469d49285d4.mp4';

const NAV_ITEMS = [
  { label: 'Home', href: '#top', active: true },
  { label: 'Invest', href: '#obras', active: false },
  { label: 'Communit', href: '#capacidades', active: false },
  { label: 'Blog', href: '#metodologia', active: false },
  { label: 'For business', href: '#impacto', active: false },
  { label: 'Membership', href: '#contacto', active: false },
];

export function HeroInteractive() {
  const videoARef = useRef<HTMLVideoElement | null>(null);
  const videoBRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const vidA = videoARef.current;
    const vidB = videoBRef.current;
    if (!vidA || !vidB) return;

    let rafId = 0;
    let isAActive = true;
    let isCrossfading = false;
    let isMounted = true;
    const CROSSFADE_SECONDS = 1.0;

    // Initial layer setup: vidA on top at opacity 1, vidB standby at opacity 0
    vidA.style.opacity = '1';
    vidA.style.zIndex = '2';
    vidB.style.opacity = '0';
    vidB.style.zIndex = '1';

    const handleFirstFrame = () => {
      if (!isMounted) return;
      setVideoReady(true);
      vidA.play().catch(() => {
        // Autoplay fallback if browser blocks before interaction
      });
    };

    if (vidA.readyState >= 2) {
      handleFirstFrame();
    } else {
      vidA.addEventListener('loadeddata', handleFirstFrame, { once: true });
    }

    const tick = () => {
      if (!isMounted) return;

      const active = isAActive ? vidA : vidB;
      const standby = isAActive ? vidB : vidA;
      const duration = active.duration;

      if (duration && Number.isFinite(duration) && duration > CROSSFADE_SECONDS) {
        const remaining = duration - active.currentTime;

        if (remaining <= CROSSFADE_SECONDS && !isCrossfading) {
          isCrossfading = true;
          standby.currentTime = 0;
          standby.style.opacity = '1';
          standby.style.zIndex = '1';
          active.style.zIndex = '2';
          standby.play().catch(() => {});
        }

        if (isCrossfading) {
          const progress = Math.min(
            1,
            Math.max(0, (CROSSFADE_SECONDS - remaining) / CROSSFADE_SECONDS)
          );
          active.style.opacity = (1 - progress).toFixed(3);

          if (progress >= 0.985 || active.ended || remaining <= 0.03) {
            active.pause();
            active.currentTime = 0;
            active.style.opacity = '0';
            active.style.zIndex = '1';
            standby.style.opacity = '1';
            standby.style.zIndex = '2';
            isAActive = !isAActive;
            isCrossfading = false;
          }
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      isMounted = false;
      window.cancelAnimationFrame(rafId);
      vidA.removeEventListener('loadeddata', handleFirstFrame);
      vidA.pause();
      vidB.pause();
    };
  }, []);

  return (
    <section
      id="top"
      aria-label="Vaultra Crypto Finance Hero"
      className="vaultra-hero select-none"
    >
      {/* =====================================================================
          MEDIA PLATE: Still Image + Dual-Buffered Crossfading Globe Video
          Rule: Nothing in the background scene is drawn or animated in code.
         ===================================================================== */}
      <div className="vaultra-media-plate" aria-hidden="true">
        <img
          src={GLOBE_STILL_URL}
          alt=""
          width={1672}
          height={941}
          fetchPriority="high"
          className="vaultra-globe-layer"
        />

        <div className={`vaultra-video-stack ${videoReady ? 'is-ready' : ''}`}>
          <video
            ref={videoARef}
            src={GLOBE_VIDEO_URL}
            muted
            playsInline
            preload="auto"
            width={1280}
            height={720}
            className="vaultra-globe-layer"
          />
          <video
            ref={videoBRef}
            src={GLOBE_VIDEO_URL}
            muted
            playsInline
            preload="auto"
            width={1280}
            height={720}
            className="vaultra-globe-layer"
          />
        </div>
      </div>

      {/* =====================================================================
          TOP NAVIGATION BAR
          "Vaultra" with double-slash logo mark, Home (active with round icon),
          Invest, Communit, Blog, For business, Membership, EN selector,
          white "Sign up" pill, and outline "Log In" pill.
         ===================================================================== */}
      <header className="vaultra-enter-nav relative z-30 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-5 sm:pt-7">
        <div className="flex items-center justify-between gap-4">
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

          {/* Center: Nav Links */}
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
              className="inline-flex items-center justify-center rounded-full bg-white text-[#06050a] px-5 py-2 text-[13px] font-medium hover:bg-white/90 active:scale-[0.98] transition-all whitespace-nowrap shadow-[0_4px_20px_rgba(255,255,255,0.22)]"
            >
              Sign up
            </a>

            <a
              href="#contacto"
              className="hidden sm:inline-flex items-center justify-center rounded-full border border-white/25 bg-white/[0.04] text-white px-5 py-2 text-[13px] font-normal hover:bg-white/[0.1] hover:border-white/40 active:scale-[0.98] transition-all whitespace-nowrap backdrop-blur-md"
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
          <div className="xl:hidden mt-3 rounded-2xl p-4 bg-[#0b0914]/95 border border-white/15 backdrop-blur-xl">
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

      {/* =====================================================================
          GLASS COIN CHIPS RIDING THE LIGHT LINES AT THE EDGES
          Small round glass chips (₿, Ξ, ₮ and a hex token)
         ===================================================================== */}
      <div
        aria-hidden="true"
        className="vaultra-enter-chips pointer-events-none absolute inset-0 max-w-[1560px] mx-auto hidden md:block"
      >
        {/* Top-left light line chip: Bitcoin (₿) */}
        <div
          className="vaultra-coin-chip"
          style={{ left: '9.5%', top: '34%' }}
          title="Bitcoin"
        >
          <span>₿</span>
        </div>

        {/* Lower-left light line chip: Tether (₮) */}
        <div
          className="vaultra-coin-chip"
          style={{ left: '16.5%', top: '61%' }}
          title="Tether"
        >
          <span>₮</span>
        </div>

        {/* Top-right light line chip: Ethereum (Ξ) */}
        <div
          className="vaultra-coin-chip"
          style={{ right: '10%', top: '33%' }}
          title="Ethereum"
        >
          <span>Ξ</span>
        </div>

        {/* Lower-right light line chip: Hex Token */}
        <div
          className="vaultra-coin-chip"
          style={{ right: '16%', top: '60%' }}
          title="Hex Token"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <polygon
              points="12,2.5 20.5,7.25 20.5,16.75 12,21.5 3.5,16.75 3.5,7.25"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="rgba(255,255,255,0.08)"
            />
            <polygon
              points="12,7 16.5,9.5 16.5,14.5 12,17 7.5,14.5 7.5,9.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      </div>

      {/* =====================================================================
          CENTRE HERO STACK
          - Small glass pill "⚡ Revolutionizing Crypto Finance"
          - Headline (Inter Display 300, ~66px, pink-to-lilac ends)
          - Subtitle copy
          - White "Get Started →" pill
         ===================================================================== */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-8 -mt-6 sm:-mt-10">
        {/* Small glass pill */}
        <div className="vaultra-enter-pill vaultra-glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] sm:text-[13px] font-normal text-white/90 mb-6">
          <span aria-hidden="true">⚡</span>
          <span>Revolutionizing Crypto Finance</span>
        </div>

        {/* Headline */}
        <h1 className="max-w-[1040px] mx-auto mb-5">
          <span className="vaultra-enter-h1-1 vaultra-headline-line">
            Innovative Crypto Financial Solutions
          </span>
          <span className="vaultra-enter-h1-2 vaultra-headline-line mt-1">
            For Any Investment Challenge
          </span>
        </h1>

        {/* Body Subtitle */}
        <p className="vaultra-enter-copy max-w-[630px] mx-auto text-[13.5px] sm:text-[15px] font-normal leading-[1.65] text-white/75 mb-8">
          We Don&apos;t Just Focus On Investments, We Cover Your Entire
          <br className="hidden sm:inline" /> Financial Ecosystem, From Budgeting To Retirement.
        </p>

        {/* White "Get Started →" Pill */}
        <div className="vaultra-enter-cta">
          <a
            href="#obras"
            className="inline-flex items-center gap-2.5 rounded-full bg-white text-[#06050a] px-7 py-3.5 text-[14px] font-medium shadow-[0_10px_35px_rgba(255,255,255,0.28)] hover:bg-white/92 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
          >
            <span>Get Started</span>
            <span aria-hidden="true" className="text-base leading-none">
              →
            </span>
          </a>
        </div>
      </div>

      {/* =====================================================================
          BOTTOM MOUSE-SCROLL HINT WITH CURVED "USDT" AND "ETH" LABELS
         ===================================================================== */}
      <div className="vaultra-enter-chips relative z-20 pb-5 sm:pb-7 flex justify-center">
        <a
          href="#obras"
          aria-label="Scroll down to explore Vaultra ecosystem"
          className="group relative inline-flex items-center justify-center w-44 h-20 text-white/80 hover:text-white transition-colors"
        >
          {/* Curved "USDT" and "ETH" labels along the globe horizon arc */}
          <svg
            width="176"
            height="80"
            viewBox="0 0 176 80"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <defs>
              <path
                id="vaultra-left-arc"
                d="M 14 58 A 78 52 0 0 1 64 40"
              />
              <path
                id="vaultra-right-arc"
                d="M 112 40 A 78 52 0 0 1 162 58"
              />
            </defs>
            <text
              fill="rgba(255,255,255,0.62)"
              fontSize="10"
              fontWeight="500"
              letterSpacing="0.18em"
            >
              <textPath href="#vaultra-left-arc" startOffset="20%">
                USDT
              </textPath>
            </text>
            <text
              fill="rgba(255,255,255,0.62)"
              fontSize="10"
              fontWeight="500"
              letterSpacing="0.18em"
            >
              <textPath href="#vaultra-right-arc" startOffset="22%">
                ETH
              </textPath>
            </text>
          </svg>

          {/* Glass Mouse-Scroll Capsule */}
          <span className="relative inline-flex flex-col items-center justify-start w-6 h-10 rounded-full border border-white/30 bg-white/[0.06] backdrop-blur-md pt-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
            <span className="w-1 h-2 rounded-full bg-white group-hover:translate-y-1.5 transition-transform duration-300" />
          </span>
        </a>
      </div>
    </section>
  );
}

export default HeroInteractive;
