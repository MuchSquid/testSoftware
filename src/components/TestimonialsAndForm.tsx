import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  CheckCircle,
  WarningCircle,
  ShieldCheck,
  Sparkle,
} from '@phosphor-icons/react';

interface ImpactMetric {
  value: string;
  label: string;
  context: string;
}

const IMPACT_METRICS: ImpactMetric[] = [
  {
    value: '$14.8B+',
    label: 'Assets Protected',
    context:
      'Total value secured across sovereign zero-knowledge MPC vaults and institutional liquidity pools.',
  },
  {
    value: '0.02s',
    label: 'Cross-Chain Finality',
    context:
      'Verified atomic settlement speed across Bitcoin, Ethereum, Solana, and stablecoin treasury corridors.',
  },
  {
    value: '99.98%',
    label: 'Institutional Uptime',
    context:
      'Continuous availability audited across globally distributed clearing nodes with zero security incidents.',
  },
];

interface ClientTestimonial {
  quote: string;
  author: string;
  roleAndCompany: string;
  metricBadge: string;
}

const TESTIMONIALS: ClientTestimonial[] = [
  {
    quote:
      '“Vaultra transformed how we manage multi-asset liquidity. Our treasury now compounds at 18.6% APY with instant cross-chain settlement and zero custodial friction.”',
    author: 'Elena Rostova',
    roleAndCompany: 'Elena Rostova - Chief Investment Officer, Kinetix Capital',
    metricBadge: '+18.6% NET APY · ZERO SLIPPAGE',
  },
  {
    quote:
      '“From daily corporate budgeting in USDT to automated long-horizon reserve compounding, Vaultra replaced five legacy banking and custody providers in a single afternoon.”',
    author: 'Marcus Vance',
    roleAndCompany: 'Marcus Vance - Head of Digital Treasury, Monolith Ventures',
    metricBadge: '$420M+ TREASURY MIGRATED',
  },
];

const MEMBERSHIP_TIERS = [
  'Personal Wealth',
  'For Business',
  'Private Membership',
];

const TICKER_ITEMS = [
  { symbol: '₿', text: 'BTC $94,280 +4.2%' },
  { symbol: 'Ξ', text: 'ETH $3,420 +6.1%' },
  { symbol: '₮', text: 'USDT VAULT 14.2% APY' },
  { symbol: '◎', text: 'SOL $218 +8.4%' },
  { symbol: '⚡', text: 'VAULTRA TVL $14.8B' },
];

const FOOTER_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Invest', href: '#obras' },
  { label: 'Communit', href: '#capacidades' },
  { label: 'Blog', href: '#metodologia' },
  { label: 'For business', href: '#impacto' },
  { label: 'Membership', href: '#contacto' },
];

export function TestimonialsAndForm() {
  const prefersReducedMotion = useReducedMotion();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState(MEMBERSHIP_TIERS[0]);
  const [investmentGoals, setInvestmentGoals] = useState('');

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedGoals = investmentGoals.trim();

    if (!trimmedName || !trimmedEmail || !trimmedGoals) {
      setErrorMessage(
        'Please complete your Full Name, Email Address, and Investment Goals to initialize your Vaultra membership.'
      );
      return;
    }

    if (!trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      setErrorMessage(
        'Please enter a valid email address (for example, alex@domain.com).'
      );
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setTier(MEMBERSHIP_TIERS[0]);
    setInvestmentGoals('');
    setErrorMessage(null);
    setIsSubmitted(false);
  };

  return (
    <div className="relative w-full bg-[#030207] text-white overflow-hidden">
      {/* BLOCK A: Glassmorphic Crypto Market & Yield Ticker Marquee */}
      <div
        aria-label="Live Crypto Market and Vaultra Yield Ticker"
        className="w-full overflow-hidden border-y border-white/10 bg-white/[0.02] backdrop-blur-md py-4"
      >
        <motion.div
          className="flex whitespace-nowrap items-center gap-10"
          animate={
            prefersReducedMotion
              ? { x: 0 }
              : { x: ['0%', '-50%'] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 30, ease: 'linear', repeat: Infinity }
          }
        >
          {[0, 1, 2, 3].map((repeatIndex) => (
            <div key={repeatIndex} className="flex items-center gap-10 shrink-0">
              {TICKER_ITEMS.map((item) => (
                <div
                  key={`${repeatIndex}-${item.text}`}
                  className="flex items-center gap-3"
                >
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/[0.08] border border-white/20 text-xs font-medium text-pink-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                    {item.symbol}
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-medium tracking-[0.04em] text-white/90 tabular-nums">
                    {item.text}
                  </span>
                  <Sparkle
                    size={14}
                    weight="fill"
                    className="text-pink-300/60 ml-4 shrink-0"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* BLOCK B: Proven Scale Metrics & Client Testimonials */}
      <section
        id="impacto"
        aria-labelledby="impacto-heading"
        className="relative w-full py-24 md:py-32 border-b border-white/10"
      >
        {/* Ambient Radial Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-20 left-1/4 w-[760px] h-[420px] rounded-full blur-[150px]"
          style={{
            background:
              'radial-gradient(circle, rgba(244, 114, 182, 0.11) 0%, rgba(59, 130, 246, 0.09) 60%, transparent 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* Centered Section Header */}
          <div className="mb-14 md:mb-20 flex flex-col items-center text-center">
            <div className="vaultra-glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-normal text-white/90 mb-5">
              <span aria-hidden="true">⚡</span>
              <span>Trusted Worldwide</span>
            </div>

            <h2
              id="impacto-heading"
              className="max-w-[920px] mx-auto text-3xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-[-0.03em]"
            >
              <span className="vaultra-title-gradient block">
                Proven Scale Across
              </span>
              <span className="vaultra-title-gradient block mt-1">
                Every Financial Horizon
              </span>
            </h2>

            <p className="mt-5 max-w-[630px] text-[14px] sm:text-[15px] font-normal text-white/75 leading-[1.65]">
              Audited performance metrics across sovereign treasuries, institutional funds, and private wealth portfolios operating on Vaultra.
            </p>
          </div>

          {/* 2-Column Glass Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column (5 cols): 3 Glass Metric Tiles */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {IMPACT_METRICS.map((metric) => (
                <div
                  key={metric.value}
                  className="vaultra-glass-card rounded-[28px] p-7 sm:p-9 flex-1 flex flex-col justify-center"
                >
                  <span className="vaultra-title-gradient block text-4xl sm:text-5xl lg:text-[56px] font-light tracking-[-0.04em] leading-none tabular-nums">
                    {metric.value}
                  </span>
                  <h3 className="mt-3 text-lg sm:text-xl font-medium text-white">
                    {metric.label}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {metric.context}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column (7 cols): 2 Glass Client Testimonials */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {TESTIMONIALS.map((item) => (
                <blockquote
                  key={item.author}
                  className="vaultra-glass-card rounded-[28px] p-8 sm:p-10 lg:p-12 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="vaultra-glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-pink-200 mb-6 tabular-nums">
                      <ShieldCheck size={15} weight="fill" className="text-pink-300" />
                      <span>{item.metricBadge}</span>
                    </div>
                    <p className="text-lg sm:text-2xl font-light tracking-[-0.015em] leading-[1.45] text-white/95 max-w-[60ch]">
                      {item.quote}
                    </p>
                  </div>

                  <footer className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <cite className="not-italic block text-base font-medium text-white">
                        {item.author}
                      </cite>
                      <span className="block text-xs sm:text-sm text-white/65 mt-0.5">
                        {item.roleAndCompany}
                      </span>
                    </div>
                    <span className="rounded-full bg-white/[0.06] border border-white/15 px-3.5 py-1 font-mono text-[11px] text-purple-200">
                      VERIFIED INSTITUTION
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK C: Vaultra Membership & Onboarding Section */}
      <section
        id="contacto"
        aria-labelledby="contacto-heading"
        className="relative w-full pt-24 md:pt-32 pb-16"
      >
        {/* Ambient Horizon Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[1080px] h-[520px] rounded-full blur-[160px]"
          style={{
            background:
              'radial-gradient(circle, rgba(244, 114, 182, 0.14) 0%, rgba(192, 132, 252, 0.12) 45%, rgba(59, 130, 246, 0.08) 80%, transparent 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Intro Column */}
            <div className="lg:col-span-5">
              <div className="vaultra-glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-normal text-white/90 mb-5">
                <span aria-hidden="true">⚡</span>
                <span>Vaultra Membership</span>
              </div>

              <h2
                id="contacto-heading"
                className="text-3xl sm:text-5xl lg:text-[50px] leading-[1.12] tracking-[-0.03em]"
              >
                <span className="vaultra-title-gradient block">
                  Start Your Financial
                </span>
                <span className="vaultra-title-gradient block mt-1">
                  Evolution Today
                </span>
              </h2>

              <p className="mt-5 text-[14px] sm:text-[15px] font-normal text-white/75 leading-[1.65] max-w-[56ch]">
                Whether you are automating personal retirement wealth or managing a global corporate treasury, Vaultra provisions your zero-knowledge vaults in minutes.
              </p>

              {/* Membership Perks Glass Card */}
              <div className="mt-9 vaultra-glass-card rounded-[28px] p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                  <span className="text-xs sm:text-sm text-white/75">
                    0% Management Fee on Core Vaults
                  </span>
                  <span className="rounded-full bg-pink-400/15 border border-pink-300/30 px-3 py-0.5 font-mono text-[11px] text-pink-200">
                    INCLUDED
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                  <span className="text-xs sm:text-sm text-white/75">
                    24/7 Dedicated Wealth Concierge
                  </span>
                  <span className="font-mono text-xs text-white/90">
                    INSTANT ACCESS
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-white/75">
                    Instant Multi-Chain Liquidity
                  </span>
                  <span className="font-mono text-xs text-purple-200">
                    ₿ · Ξ · ₮ · 40+ CHAINS
                  </span>
                </div>
              </div>
            </div>

            {/* Right Interactive Onboarding Form Column */}
            <div className="lg:col-span-7">
              <div className="vaultra-glass-card rounded-[28px] p-7 sm:p-10 lg:p-12">
                {isSubmitting ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="py-12 space-y-6 animate-pulse"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="font-mono text-xs text-pink-200">
                        PROVISIONING ZERO-KNOWLEDGE VAULT CREDENTIALS...
                      </span>
                      <span className="font-mono text-xs text-white/70 tabular-nums">
                        800ms
                      </span>
                    </div>
                    <div className="h-11 w-3/4 bg-white/10 rounded-2xl" />
                    <div className="h-11 w-full bg-white/10 rounded-2xl" />
                    <div className="h-24 w-full bg-white/10 rounded-2xl" />
                  </div>
                ) : isSubmitted ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="py-6 space-y-6"
                  >
                    <div className="vaultra-glass-pill inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs text-pink-200">
                      <CheckCircle size={18} weight="fill" className="text-pink-300" />
                      <span>VAULT INITIALIZED · PRIORITY ONBOARDING</span>
                    </div>

                    <h3 className="vaultra-title-gradient text-2xl sm:text-3xl font-light">
                      Welcome to Vaultra, {fullName}.
                    </h3>

                    <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-[60ch]">
                      Your onboarding dossier has been encrypted and routed to our wealth desk. We have sent your activation key to{' '}
                      <span className="font-mono font-medium text-white">
                        {email}
                      </span>{' '}
                      under the{' '}
                      <span className="font-mono text-pink-200">{tier}</span>{' '}
                      tier.
                    </p>

                    <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                      <span className="font-mono text-xs text-white/60">
                        STATUS: MPC_KEY_SHARDS_READY
                      </span>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="vaultra-btn-outline px-5 py-2.5 text-xs sm:text-[13px] cursor-pointer"
                      >
                        Register Another Portfolio
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {errorMessage && (
                      <div
                        role="alert"
                        className="p-4 rounded-2xl border border-pink-400/50 bg-pink-500/10 text-white flex items-start gap-3"
                      >
                        <WarningCircle
                          size={20}
                          weight="fill"
                          className="text-pink-300 shrink-0 mt-0.5"
                        />
                        <p className="text-xs sm:text-sm font-normal leading-relaxed">
                          {errorMessage}
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="full-name"
                          className="block text-xs sm:text-sm font-normal text-white/85"
                        >
                          Full Name <span className="text-pink-300">*</span>
                        </label>
                        <input
                          id="full-name"
                          name="fullName"
                          type="text"
                          required
                          autoComplete="name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Sophia Laurent"
                          className="w-full rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-pink-300/60 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="corporate-email"
                          className="block text-xs sm:text-sm font-normal text-white/85"
                        >
                          Email Address <span className="text-pink-300">*</span>
                        </label>
                        <input
                          id="corporate-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="sophia@vaultra.io"
                          className="w-full rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-pink-300/60 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Membership Tier Interactive Pill Selector */}
                    <div className="flex flex-col gap-2.5">
                      <span
                        id="tier-group-label"
                        className="block text-xs sm:text-sm font-normal text-white/85"
                      >
                        Membership Tier
                      </span>
                      <div
                        role="radiogroup"
                        aria-labelledby="tier-group-label"
                        className="grid grid-cols-1 sm:grid-cols-3 gap-2.5"
                      >
                        {MEMBERSHIP_TIERS.map((option) => {
                          const active = tier === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              onClick={() => setTier(option)}
                              className={`rounded-full px-4 py-3 text-xs sm:text-[13px] transition-all cursor-pointer ${
                                active
                                  ? 'vaultra-btn-white font-medium'
                                  : 'vaultra-btn-outline text-white/75 hover:text-white'
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Investment Goals Textarea */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="investment-goals"
                        className="block text-xs sm:text-sm font-normal text-white/85"
                      >
                        Investment Goals <span className="text-pink-300">*</span>
                      </label>
                      <textarea
                        id="investment-goals"
                        name="investmentGoals"
                        rows={4}
                        required
                        value={investmentGoals}
                        onChange={(e) => setInvestmentGoals(e.target.value)}
                        placeholder="Share your target yield horizon, treasury allocation, or retirement compounding goals..."
                        className="w-full rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-pink-300/60 focus:outline-none transition-colors"
                      />
                      <p className="text-xs text-white/55 leading-relaxed">
                        Protected by zero-knowledge encryption. Your portfolio parameters remain strictly private.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <button
                        type="submit"
                        className="vaultra-btn-white px-8 py-4 text-[14px] cursor-pointer"
                      >
                        <span>Get Started</span>
                        <span aria-hidden="true" className="text-base leading-none">
                          →
                        </span>
                      </button>

                      <span className="font-mono text-xs text-white/60">
                        ZK-ENCRYPTED · NON-CUSTODIAL OPTION
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Clean Vaultra Glass Footer */}
          <footer className="mt-24 pt-10 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left: Double-slash logo mark + Vaultra */}
            <div className="flex flex-wrap items-center gap-4">
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
              <span className="text-xs text-white/55">
                © {new Date().getFullYear()} Vaultra Crypto Financial Ecosystem. All rights reserved.
              </span>
            </div>

            {/* Center: Navigation Links */}
            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap items-center gap-2 rounded-full px-3 py-1.5 bg-white/[0.03] border border-white/10 backdrop-blur-md"
            >
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-3.5 py-1.5 text-xs sm:text-[13px] text-white/75 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Sign up & Log In Pills */}
            <div className="flex items-center gap-3">
              <a
                href="#contacto"
                className="vaultra-btn-white px-5 py-2 text-[13px]"
              >
                Sign up
              </a>
              <a
                href="#contacto"
                className="vaultra-btn-outline px-5 py-2 text-[13px]"
              >
                Log In
              </a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default TestimonialsAndForm;
