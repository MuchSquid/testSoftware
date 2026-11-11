import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ShieldCheck,
  ArrowsLeftRight,
  Coins,
  TerminalWindow,
} from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

interface ArchitecturePillar {
  code: string;
  badge: string;
  title: string;
  lead: string;
  description: string;
  specs: { label: string; value: string }[];
  diagramLines: string[];
  icon: React.ReactNode;
}

const PILLARS: ArchitecturePillar[] = [
  {
    code: 'VAULT_CORE // MPC_ZK_CUSTODY',
    badge: '⚡ SOC2 TYPE II · ISO 27001',
    title: 'Multi-Party Computation & Zero-Knowledge Custody',
    lead: 'Eliminate single points of failure with distributed cryptographic key shards that never reconstruct in memory.',
    description:
      'Every transaction is co-signed across hardware security modules located in independent sovereign jurisdictions. Zero-knowledge proofs verify solvency and policy compliance in real time without exposing private balance sheets.',
    specs: [
      { label: 'Key Architecture', value: '3-of-5 Threshold MPC-CMP' },
      { label: 'Proof Verification', value: 'zk-SNARK Sub-12ms Solvency' },
      { label: 'Cold Storage Reserve', value: '100% Hardware Air-Gapped' },
    ],
    diagramLines: [
      '[CLIENT_INTENT: SIGNED_BIOMETRIC] ---> Policy Engine Check',
      '   |-- [SHARD_01: ZURICH_HSM]          (Threshold Sign: OK)',
      '   |-- [SHARD_02: SINGAPORE_HSM]       (Threshold Sign: OK)',
      '   |-- [ZK_PROOF_VERIFIER]             (Solvency Attested: 100%)',
    ],
    icon: <ShieldCheck size={24} weight="duotone" className="text-pink-300" />,
  },
  {
    code: 'LIQUIDITY_MESH // ATOMIC_ROUTER',
    badge: '⚡ ZERO SLIPPAGE · 40+ CHAINS',
    title: 'Cross-Chain Liquidity & Atomic Settlement',
    lead: 'Unified institutional order routing across Bitcoin, Ethereum, Solana, and stablecoin clearing rails in a single click.',
    description:
      'Our intent-based settlement engine aggregates deep liquidity from institutional market makers and decentralized pools simultaneously, guaranteeing zero MEV extraction and atomic execution with instant finality.',
    specs: [
      { label: 'Settlement Finality', value: '0.02s Cross-Chain Atomic' },
      { label: 'MEV Protection', value: 'Encrypted Dark-Pool Routing' },
      { label: 'Supported Assets', value: '₿ BTC · Ξ ETH · ₮ USDT + 180' },
    ],
    diagramLines: [
      '[ORDER_ROUTER: $2.5M ALLOCATION] ---> Intent Solver Mesh',
      '   |-- [POOL_A: ETH_L2_LIQUIDITY]      (0.00% Slippage Locked)',
      '   |-- [POOL_B: BTC_NATIVE_CUSTODY]    (Atomic HTLC Settled)',
      '   |-- [GAS_SPONSOR_VAULT]             (Network Fee: $0.00)',
    ],
    icon: <ArrowsLeftRight size={24} weight="duotone" className="text-purple-300" />,
  },
  {
    code: 'WEALTH_AUTOPILOT // LIFE_ECOSYSTEM',
    badge: '⚡ BUDGETING TO RETIREMENT',
    title: 'Autonomous Budgeting, Tax & Retirement Rails',
    lead: 'Programmable financial rules that route incoming cashflows into daily spending, high-yield vaults, and tax-shielded retirement.',
    description:
      'Set your long-term wealth parameters once. Vaultra continuously sweeps idle balances into delta-neutral yield strategies, harvests tax losses automatically during market dips, and compounds your retirement reserves.',
    specs: [
      { label: 'Cashflow Routing', value: 'Real-Time Smart Rules' },
      { label: 'Tax Alpha Capture', value: '+4.2% Net Annual Boost' },
      { label: 'Liquidity Access', value: '24/7 Instant Fiat & Crypto' },
    ],
    diagramLines: [
      '[INCOMING_DEPOSIT: +$25,000] ---> Autonomous Wealth Splitter',
      '   |-- [30% DAILY_TREASURY_CARD]       (Instant ₮ Spendable)',
      '   |-- [40% ALPHA_YIELD_VAULT]         (18.6% APY Compounding)',
      '   |-- [30% RETIREMENT_SHIELD]         (Tax-Optimized Cold Lock)',
    ],
    icon: <Coins size={24} weight="duotone" className="text-pink-300" />,
  },
];

export function StickyArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>('.sticky-card');

      cardEls.forEach((card, index) => {
        if (index === cardEls.length - 1) return;
        const nextCard = cardEls[index + 1];

        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: cardEls[cardEls.length - 1],
          end: 'top top',
          pin: true,
          pinSpacing: false,
        });

        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: 'none',
          scrollTrigger: {
            trigger: nextCard,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="metodologia"
      aria-labelledby="metodologia-heading"
      className="relative w-full py-24 md:py-32 bg-[#030207] text-white border-b border-white/10 overflow-hidden"
    >
      {/* Subtle Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 w-[680px] h-[680px] rounded-full blur-[160px]"
        style={{
          background:
            'radial-gradient(circle, rgba(192, 132, 252, 0.12) 0%, rgba(244, 114, 182, 0.09) 50%, transparent 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Centered Section Header */}
        <div className="mb-14 md:mb-20 flex flex-col items-center text-center">
          <div className="vaultra-glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-normal text-white/90 mb-5">
            <span aria-hidden="true">⚡</span>
            <span>Institutional Security &amp; Scale</span>
          </div>

          <h2
            id="metodologia-heading"
            className="max-w-[920px] mx-auto text-3xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-[-0.03em]"
          >
            <span className="vaultra-title-gradient block">
              Engineered For Sovereign
            </span>
            <span className="vaultra-title-gradient block mt-1">
              And Enterprise Wealth
            </span>
          </h2>

          <p className="mt-5 max-w-[630px] text-[14px] sm:text-[15px] font-normal text-white/75 leading-[1.65]">
            Three cryptographic pillars power the Vaultra ecosystem, combining zero-knowledge custody with instant global liquidity and autonomous wealth compounding.
          </p>
        </div>

        {/* Sticky-Stack Cards Container */}
        <div ref={containerRef} className="relative flex flex-col gap-10 md:gap-0">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.code}
              className="sticky-card sticky top-0 w-full min-h-[100dvh] flex items-center py-4 md:py-12 origin-top will-change-transform"
            >
              <article className="w-full vaultra-glass-card rounded-[32px] p-8 sm:p-12 lg:p-14 bg-[#070510]/90">
                {/* Top Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/12">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.08] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
                      {pillar.icon}
                    </span>
                    <span className="font-mono text-xs text-white/75">
                      {pillar.code}
                    </span>
                  </div>
                  <span className="vaultra-glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-normal text-pink-200">
                    {pillar.badge}
                  </span>
                </div>

                {/* Main Content Split */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-7">
                    <h3 className="vaultra-title-gradient text-2xl sm:text-3xl lg:text-4xl font-light tracking-[-0.03em] leading-[1.15]">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-base sm:text-lg font-normal text-white/90 leading-relaxed max-w-[62ch]">
                      {pillar.lead}
                    </p>
                    <p className="mt-4 text-sm sm:text-[15px] text-white/70 leading-relaxed max-w-[62ch]">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Frosted Glass Live Node Schematic Box */}
                  <div className="lg:col-span-5 rounded-2xl bg-black/40 border border-white/10 p-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <span className="font-mono text-xs text-pink-200">
                        LIVE NODE TELEMETRY
                      </span>
                      <TerminalWindow size={18} className="text-purple-300" />
                    </div>
                    <pre className="font-mono text-xs leading-relaxed text-white/85 overflow-x-auto">
                      {pillar.diagramLines.map((line, i) => (
                        <div key={i} className="py-0.5">
                          {line}
                        </div>
                      ))}
                    </pre>
                  </div>
                </div>

                {/* Bottom 3-Column Glass Pill Metrics */}
                <div className="mt-10 pt-6 border-t border-white/12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {pillar.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 backdrop-blur-md"
                    >
                      <span className="block text-xs font-normal text-white/60">
                        {spec.label}
                      </span>
                      <span className="mt-1.5 block font-mono text-sm sm:text-base font-medium text-white tabular-nums">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StickyArchitecture;
