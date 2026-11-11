import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { SlidersHorizontal } from '@phosphor-icons/react/dist/csr/SlidersHorizontal';
import { CheckCircle } from '@phosphor-icons/react/dist/csr/CheckCircle';
import { CaretUp } from '@phosphor-icons/react/dist/csr/CaretUp';

gsap.registerPlugin(ScrollTrigger);

interface VaultProduct {
  id: string;
  title: string;
  protocol: string;
  tier: string;
  metric: string;
  coinSymbol: string;
  coinLabel: string;
  summary: string;
  image: string;
  imageAlt: string;
  stack: string[];
  strategyNotes: string[];
}

const VAULTS: VaultProduct[] = [
  {
    id: 'kinetix',
    title: 'Delta-Neutral Yield Vault',
    protocol: 'Vaultra Prime · Kinetix Engine',
    tier: 'Tier-1 Institutional',
    metric: '14.2% APY · USDT / USDC',
    coinSymbol: '₮',
    coinLabel: 'USDT / USDC',
    summary:
      'Automated market-neutral liquidity provisioning with zero directional exposure and instant redemption.',
    image: '/images/work-kinetix.png',
    imageAlt: 'Delta-Neutral Yield Vault liquidity console and real-time funding rate monitor',
    stack: ['Delta-Neutral', 'Perp Basis', 'Auto-Compound', 'Zero Slippage'],
    strategyNotes: [
      'Captures perpetual funding rate spreads paired with spot collateral across deep institutional orderbooks.',
      'Sub-millisecond delta hedging eliminates directional market risk during high-volatility liquidation cascades.',
      'Instant T+0 stablecoin liquidity withdrawal with cryptographic solvency attestation every block.',
    ],
  },
  {
    id: 'hyperion',
    title: 'Orbital Cross-Chain Index',
    protocol: 'Hyperion L2 · Unified Router',
    tier: 'Multi-Chain Basket',
    metric: '0.02s Settlement · 12 Chains',
    coinSymbol: 'Ξ',
    coinLabel: 'ETH / L2s',
    summary:
      'Algorithmic portfolio rebalancing across Ethereum, L2 rollups, and modular settlement layers.',
    image: '/images/work-hyperion.png',
    imageAlt: 'Orbital Cross-Chain Index telemetry and multi-chain liquidity routing visualization',
    stack: ['ETH Core', 'ZK-Rollups', 'Smart Routing', 'MEV Shield'],
    strategyNotes: [
      'Dynamic weight allocation across Ethereum, Arbitrum, Optimism, Base, and modular data availability layers.',
      'Zero-knowledge state proofs verify cross-chain execution without wrapped bridge counterparty risk.',
      'Built-in MEV protection routes rebalancing flow through private institutional dark pools.',
    ],
  },
  {
    id: 'monolith',
    title: 'Monolith Cold-Storage Treasury',
    protocol: 'Monolith MPC · Sovereign Custody',
    tier: 'Sovereign Grade',
    metric: '$6.4B Custody · Zero-Knowledge',
    coinSymbol: '₿',
    coinLabel: 'BTC / Treasury',
    summary:
      'Multi-party computation (MPC) institutional vaults with real-time cryptographic proof of reserves.',
    image: '/images/work-monolith.png',
    imageAlt: 'Monolith Cold-Storage Treasury multi-party computation hardware vault interface',
    stack: ['MPC Sharding', 'ZK-PoR', 'HSM Enclave', 'ISO-27001'],
    strategyNotes: [
      'Distributed key shares across geographically isolated FIPS 140-3 Level 4 hardware security modules.',
      'Programmable governance quorums with role-based velocity limits and biometric hardware sign-off.',
      'Continuous Merkle-tree Proof of Reserves verifiable on-chain without exposing corporate wallet topology.',
    ],
  },
  {
    id: 'aether',
    title: 'Aether Retirement & Wealth OS',
    protocol: 'Aether Core · Lifecycle Engine',
    tier: 'Full-Spectrum Wealth',
    metric: '+38.4% Tax Efficiency',
    coinSymbol: '⬡',
    coinLabel: 'Wealth OS',
    summary:
      'Automated crypto-to-fiat budgeting, continuous tax-loss harvesting, and long-horizon retirement compounding.',
    image: '/images/work-aether.png',
    imageAlt: 'Aether Retirement and Wealth OS automated compounding and tax harvesting terminal',
    stack: ['Tax Harvesting', 'Smart Budgeting', 'Fiat Rails', 'Retirement Glidepath'],
    strategyNotes: [
      'Continuous automated tax-loss harvesting scans Wash-Sale-compliant replacement pairs 24/7.',
      'Unified treasury rules split incoming cashflow into liquid spending cards, yield vaults, and retirement trusts.',
      'Automated age-adjusted glidepath shifts volatility exposure into sovereign treasury bills and senior stable pools.',
    ],
  },
];

export function HorizontalWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const triggerEl = triggerRef.current;
    const trackEl = trackRef.current;
    if (!triggerEl || !trackEl) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const getScrollDistance = () => {
        return Math.max(0, trackEl.scrollWidth - window.innerWidth);
      };

      const tween = gsap.to(trackEl, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, [prefersReducedMotion]);

  const toggleVaultStrategy = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="obras"
      ref={sectionRef}
      aria-labelledby="obras-heading"
      className="relative bg-[#030207] border-b border-white/10 overflow-hidden"
    >
      {/* Ambient Radial Glows matching Vaultra Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(244,114,182,0.12),transparent_45%),radial-gradient(circle_at_82%_75%,rgba(192,132,252,0.12),transparent_48%),radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_55%)]"
      />

      <div
        ref={triggerRef}
        className="relative z-10 min-h-[100dvh] flex flex-col justify-center py-20 lg:py-0 overflow-hidden"
      >
        {/* Section Header */}
        <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 mb-10 lg:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="vaultra-glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-normal text-white/90 mb-5">
              <span aria-hidden="true">⚡</span>
              <span>Autonomous Investment Vaults</span>
            </div>

            <h2
              id="obras-heading"
              className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.14] tracking-[-0.03em] mb-3"
            >
              <span className="vaultra-title-gradient block">
                Institutional-Grade Crypto Vaults
              </span>
              <span className="vaultra-title-gradient block mt-1">
                Built For Every Market Cycle
              </span>
            </h2>

            <p className="text-[14px] sm:text-[15.5px] font-normal text-white/75 max-w-[62ch] leading-[1.65]">
              Deploy capital into audited, non-custodial liquidity strategies engineered for predictable yield, cross-chain execution, and long-horizon wealth preservation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="vaultra-btn-white px-6 py-3 text-[13px] whitespace-nowrap"
            >
              <span>Get Started</span>
              <span aria-hidden="true" className="text-base leading-none">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Horizontal Track on Desktop / Vertical Grid on Mobile or Reduced Motion */}
        <div
          ref={trackRef}
          className={
            prefersReducedMotion
              ? 'max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-7'
              : 'flex flex-col lg:flex-row gap-7 px-5 sm:px-8 lg:px-12 lg:w-max'
          }
        >
          {VAULTS.map((vault) => {
            const isExpanded = expandedId === vault.id;
            return (
              <article
                key={vault.id}
                className={
                  prefersReducedMotion
                    ? 'vaultra-glass-card group overflow-hidden p-3 sm:p-4 flex flex-col justify-between'
                    : 'vaultra-glass-card group w-full lg:w-[560px] xl:w-[610px] shrink-0 overflow-hidden p-3 sm:p-4 flex flex-col justify-between'
                }
              >
                {/* Rounded Glass Image Frame */}
                <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden border border-white/10 bg-[#080612]">
                  <img
                    src={vault.image}
                    alt={vault.imageAlt}
                    width={960}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030207]/65 via-transparent to-transparent"
                  />
                </div>

                {/* Structured Metadata Below Image Frame */}
                <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between gap-5">
                  <div>
                    {/* Top Meta Strip: Coin Chip + Protocol + Metric Pill */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.08] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_0_16px_rgba(232,121,249,0.2)] text-white text-base font-medium"
                        >
                          {vault.coinSymbol}
                        </span>
                        <div>
                          <div className="text-xs font-medium text-white/90">
                            {vault.protocol}
                          </div>
                          <div className="text-[11px] text-white/60">
                            {vault.tier} · {vault.coinLabel}
                          </div>
                        </div>
                      </div>

                      <span className="vaultra-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium text-[#f6b6da]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f6b6da]" />
                        <span>{vault.metric}</span>
                      </span>
                    </div>

                    {/* Vault Title & Concise Summary */}
                    <h3 className="vaultra-title-gradient text-2xl sm:text-[28px] leading-[1.2] mb-2.5">
                      {vault.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-white/75 leading-[1.65] max-w-[62ch]">
                      {vault.summary}
                    </p>
                  </div>

                  {/* Protocol Tags & Inline Strategy Disclosure Trigger */}
                  <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {vault.stack.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/[0.06] border border-white/15 px-3 py-1 text-[11.5px] font-normal text-white/75"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`vault-panel-${vault.id}`}
                        onClick={() => toggleVaultStrategy(vault.id)}
                        className="vaultra-btn-outline px-4 py-1.5 text-xs text-white/90 hover:text-white cursor-pointer whitespace-nowrap"
                      >
                        {isExpanded ? (
                          <>
                            <CaretUp size={14} className="text-[#f6b6da]" />
                            <span>Hide Strategy</span>
                          </>
                        ) : (
                          <>
                            <SlidersHorizontal size={14} className="text-[#f6b6da]" />
                            <span>Inspect Vault Strategy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Inline Expandable Strategy Breakdown Panel */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`vault-panel-${vault.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-1 border-t border-white/10 rounded-2xl bg-white/[0.03] p-4 space-y-2.5">
                            <ul className="space-y-2.5">
                              {vault.strategyNotes.map((note, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-white/75 leading-relaxed"
                                >
                                  <CheckCircle
                                    size={16}
                                    weight="fill"
                                    className="text-[#f6b6da] shrink-0 mt-0.5"
                                  />
                                  <span>{note}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HorizontalWorks;
