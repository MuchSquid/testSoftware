import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lightning } from '@phosphor-icons/react/dist/csr/Lightning';
import { Cpu } from '@phosphor-icons/react/dist/csr/Cpu';
import { WaveSine } from '@phosphor-icons/react/dist/csr/WaveSine';
import { SlidersHorizontal } from '@phosphor-icons/react/dist/csr/SlidersHorizontal';
import { ArrowUpRight } from '@phosphor-icons/react/dist/csr/ArrowUpRight';
import { Broadcast } from '@phosphor-icons/react/dist/csr/Broadcast';
import { ShieldCheck } from '@phosphor-icons/react/dist/csr/ShieldCheck';

interface YieldStrategy {
  id: string;
  label: string;
  projectedApy: string;
  settlementSpeed: string;
  collateralRatio: string;
  gasOverhead: string;
  architectureNote: string;
  vaultStatus: string;
}

const YIELD_STRATEGIES: YieldStrategy[] = [
  {
    id: 'conservative-stable',
    label: 'Conservative Stable (₮ 12.4% APY)',
    projectedApy: '12.4% APY',
    settlementSpeed: '0.02s Finality',
    collateralRatio: '165% Over-Collat',
    gasOverhead: '$0.00 Sponsored',
    architectureNote:
      'Automated delta-neutral treasury vaults backed by short-duration T-bills and audited stablecoin liquidity pools with instant withdrawal guarantees.',
    vaultStatus: 'VAULT_ROUTING: DELTA_NEUTRAL_ACTIVE',
  },
  {
    id: 'balanced-multi-asset',
    label: 'Balanced Multi-Asset (Ξ 18.6% APY)',
    projectedApy: '18.6% APY',
    settlementSpeed: '0.04s Finality',
    collateralRatio: '142% Over-Collat',
    gasOverhead: '$0.00 Sponsored',
    architectureNote:
      'Dynamic liquid staking and cross-chain market-making across Ethereum, Solana, and Layer-2 rollups with automated downside hedging.',
    vaultStatus: 'VAULT_ROUTING: CROSS_CHAIN_OPTIMIZED',
  },
  {
    id: 'alpha-liquidity',
    label: 'Alpha Liquidity (₿ 26.8% APY)',
    projectedApy: '26.8% APY',
    settlementSpeed: '0.01s Finality',
    collateralRatio: '128% Over-Collat',
    gasOverhead: '$0.00 Sponsored',
    architectureNote:
      'High-frequency institutional liquidity provisioning and algorithmic basis capture engineered for maximum risk-adjusted crypto yield.',
    vaultStatus: 'VAULT_ROUTING: ALPHA_ENGINE_LOCKED',
  },
];

interface TaxShieldPreset {
  id: string;
  name: string;
  harvestFrequency: string;
  pensionAllocation: string;
  estimatedSavings: string;
}

const TAX_SHIELD_PRESETS: TaxShieldPreset[] = [
  {
    id: 'autonomous-harvest',
    name: 'AUTO_LOSS_HARVEST',
    harvestFrequency: 'Continuous Real-Time',
    pensionAllocation: '35% Roth / 65% Sovereign Vault',
    estimatedSavings: '+4.2% Net Annual Alpha',
  },
  {
    id: 'long-horizon-retirement',
    name: 'RETIREMENT_COMPOUND',
    harvestFrequency: 'Quarterly Re-Index',
    pensionAllocation: '80% Cold Custody / 20% Liquid Yield',
    estimatedSavings: 'Zero Capital Gains Drag',
  },
];

export function BentoCapabilities() {
  const [activeStrategyIndex, setActiveStrategyIndex] = useState<number>(0);
  const [rebalanceCount, setRebalanceCount] = useState<number>(14);
  const [activeShieldIndex, setActiveShieldIndex] = useState<number>(0);

  const currentStrategy = YIELD_STRATEGIES[activeStrategyIndex];
  const currentShield = TAX_SHIELD_PRESETS[activeShieldIndex];

  return (
    <section
      id="capacidades"
      aria-labelledby="capacidades-heading"
      className="relative w-full py-24 md:py-32 bg-[#030207] text-white overflow-hidden border-b border-white/10"
    >
      {/* Ambient Radial Glows matching Vaultra Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[960px] h-[480px] rounded-full blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, rgba(244, 114, 182, 0.12) 0%, rgba(192, 132, 252, 0.1) 45%, rgba(59, 130, 246, 0.08) 80%, transparent 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Centered Vaultra Section Header */}
        <div className="mb-14 md:mb-20 flex flex-col items-center text-center">
          <div className="vaultra-glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-normal text-white/90 mb-5">
            <span aria-hidden="true">⚡</span>
            <span>Complete Financial Ecosystem</span>
          </div>

          <h2
            id="capacidades-heading"
            className="max-w-[920px] mx-auto text-3xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-[-0.03em]"
          >
            <span className="vaultra-title-gradient block">
              From Daily Budgeting
            </span>
            <span className="vaultra-title-gradient block mt-1">
              To Autonomous Retirement
            </span>
          </h2>

          <p className="mt-5 max-w-[630px] text-[14px] sm:text-[15px] font-normal text-white/75 leading-[1.65]">
            Every instrument in your financial life unified inside one glassmorphic protocol. Optimize multi-chain yields, automate daily treasury budgets, and lock in generational retirement wealth.
          </p>
        </div>

        {/* 5-Cell Asymmetric Bento Grid (Row 1: 4+2, Row 2: 2+2+2) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* CELL 1 (md:col-span-4): Interactive Live Portfolio & Yield Optimizer */}
          <div className="md:col-span-4 vaultra-glass-card rounded-[28px] p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.08] border border-white/15 text-pink-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
                    <Cpu size={20} weight="duotone" />
                  </span>
                  <h3 className="vaultra-title-gradient text-xl sm:text-2xl font-light tracking-[-0.025em]">
                    Live Portfolio &amp; Yield Optimizer
                  </h3>
                </div>
                <span className="vaultra-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium text-pink-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                  <span>LIVE ENGINE</span>
                </span>
              </div>

              {/* Interactive Strategy Pill Selector Tabs */}
              <div
                role="tablist"
                aria-label="Portfolio yield strategies"
                className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5"
              >
                {YIELD_STRATEGIES.map((strategy, idx) => {
                  const isSelected = idx === activeStrategyIndex;
                  return (
                    <button
                      key={strategy.id}
                      role="tab"
                      type="button"
                      aria-selected={isSelected}
                      onClick={() => setActiveStrategyIndex(idx)}
                      className={`rounded-full px-4 py-2.5 text-center text-xs sm:text-[13px] transition-all cursor-pointer ${
                        isSelected
                          ? 'vaultra-btn-white font-medium'
                          : 'vaultra-btn-outline text-white/75 hover:text-white'
                      }`}
                    >
                      {strategy.label}
                    </button>
                  );
                })}
              </div>

              {/* 4 Frosted Glass Metric Sub-Cards */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-md">
                  <span className="block text-xs font-normal text-white/60">
                    Projected APY
                  </span>
                  <span className="mt-2 block font-mono text-xl lg:text-2xl font-medium text-pink-200 tabular-nums">
                    {currentStrategy.projectedApy}
                  </span>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-md">
                  <span className="block text-xs font-normal text-white/60">
                    Settlement Speed
                  </span>
                  <span className="mt-2 block font-mono text-xl lg:text-2xl font-medium text-white tabular-nums">
                    {currentStrategy.settlementSpeed}
                  </span>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-md">
                  <span className="block text-xs font-normal text-white/60">
                    Collateral Ratio
                  </span>
                  <span className="mt-2 block font-mono text-xl lg:text-2xl font-medium text-purple-200 tabular-nums">
                    {currentStrategy.collateralRatio}
                  </span>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-md">
                  <span className="block text-xs font-normal text-white/60">
                    Gas Overhead $0.00
                  </span>
                  <span className="mt-2 block font-mono text-xl lg:text-2xl font-medium text-white tabular-nums">
                    {currentStrategy.gasOverhead}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-white/75 max-w-[62ch] leading-relaxed">
                {currentStrategy.architectureNote}
              </p>
              <span className="font-mono text-[11px] text-pink-200/80 shrink-0">
                {currentStrategy.vaultStatus}
              </span>
            </div>
          </div>

          {/* CELL 2 (md:col-span-2): Radiant Pink-Magenta-Blue Rim-Glow Glass Card */}
          <div className="md:col-span-2 vaultra-glass-card rounded-[28px] border-pink-300/30 bg-gradient-to-br from-pink-500/20 via-purple-500/15 to-blue-500/20 p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="vaultra-title-gradient text-2xl lg:text-[28px] font-light leading-[1.15]">
                  Instant Global Settlement
                </h3>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 border border-white/25 text-white shrink-0 shadow-[0_0_24px_rgba(244,114,182,0.45)]">
                  <Lightning size={20} weight="fill" />
                </span>
              </div>

              <p className="mt-4 text-sm text-white/80 leading-relaxed">
                Zero-slippage cross-border clearing across 40+ sovereign corridors and liquidity networks with atomic finality.
              </p>

              {/* Round Glass Coin Badges */}
              <div className="mt-6 flex items-center gap-3">
                {['₿', 'Ξ', '₮'].map((coin) => (
                  <span
                    key={coin}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.1] border border-white/25 text-white text-base font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_18px_rgba(0,0,0,0.4)] backdrop-blur-md"
                  >
                    {coin}
                  </span>
                ))}
                <span className="text-xs text-white/75 ml-1">
                  Multi-Asset Native
                </span>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between">
              <div>
                <span className="block text-xs font-normal text-white/70">
                  Institutional SLA
                </span>
                <span className="font-mono text-2xl font-medium text-white tabular-nums">
                  99.98% Uptime
                </span>
              </div>
              <Broadcast size={24} weight="duotone" className="text-pink-200" />
            </div>
          </div>

          {/* CELL 3 (md:col-span-2): Frosted Glass Visual Card featuring /images/work-monolith.png */}
          <div className="md:col-span-2 vaultra-glass-card rounded-[28px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="relative h-48 w-full overflow-hidden rounded-[20px] border border-white/15">
                <img
                  src="/images/work-monolith.png"
                  alt="Zero-Knowledge Cold Custody architectural vault chamber"
                  width={640}
                  height={420}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030207]/80 via-transparent to-transparent" />
                <span className="vaultra-glass-pill absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] text-white/90">
                  <ShieldCheck size={14} weight="fill" className="text-pink-300" />
                  <span>MPC_HSM_TIER_4</span>
                </span>
              </div>

              <div className="mt-5 px-1">
                <h3 className="vaultra-title-gradient text-xl sm:text-2xl font-light">
                  Zero-Knowledge Cold Custody
                </h3>
                <p className="mt-2.5 text-sm text-white/70 leading-relaxed">
                  Hardware-isolated multi-party computation shards distributed across sovereign Swiss and Singapore bunkers.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 px-1 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/70">
              <span>ZK-SNARK PROOF VERIFIED</span>
              <ArrowUpRight size={16} className="text-pink-300" />
            </div>
          </div>

          {/* CELL 4 (md:col-span-2): Automated Rebalancing Engine */}
          <div className="md:col-span-2 vaultra-glass-card rounded-[28px] p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="vaultra-title-gradient text-xl lg:text-2xl font-light">
                  Automated Rebalancing Engine
                </h3>
                <WaveSine size={24} weight="duotone" className="text-pink-300 shrink-0" />
              </div>

              <p className="mt-2.5 text-sm text-white/70 leading-relaxed">
                Autonomous portfolio drift correction triggered in sub-millisecond windows whenever market volatility crosses your risk bands.
              </p>

              {/* Interactive Spring Physics Portfolio Rebalance Counter */}
              <div className="mt-6 p-4 rounded-2xl border border-white/12 bg-white/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <motion.div
                    key={rebalanceCount}
                    initial={{ scale: 0.72, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 18 }}
                    className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-300/30 to-purple-400/30 border border-pink-300/40 flex items-center justify-center text-white font-mono text-xs font-medium tabular-nums shadow-[0_0_20px_rgba(244,114,182,0.25)]"
                  >
                    +1.8%
                  </motion.div>
                  <div>
                    <span className="block font-mono text-[11px] text-white/60 tabular-nums">
                      DRIFT THRESHOLD: 0.25%
                    </span>
                    <span className="block text-xs font-medium text-white mt-0.5">
                      Rebalance cycles:{' '}
                      <span className="font-mono text-pink-200 tabular-nums">
                        {rebalanceCount}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setRebalanceCount((prev) => prev + 1)}
              className="mt-6 w-full vaultra-btn-white px-5 py-3 text-xs sm:text-[13px] cursor-pointer"
            >
              <span>Simulate Rebalance</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* CELL 5 (md:col-span-2): Smart Tax & Retirement Shield */}
          <div className="md:col-span-2 vaultra-glass-card rounded-[28px] p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="vaultra-title-gradient text-xl lg:text-2xl font-light">
                  Smart Tax &amp; Retirement Shield
                </h3>
                <SlidersHorizontal
                  size={24}
                  weight="duotone"
                  className="text-purple-300 shrink-0"
                />
              </div>

              <p className="mt-2.5 text-sm text-white/70 leading-relaxed">
                Continuous tax-loss harvesting and automated long-horizon retirement compounding tailored to your jurisdiction.
              </p>

              {/* Strategy Readout */}
              <div className="mt-6 rounded-2xl border border-white/12 bg-white/[0.04] p-4 font-mono text-xs space-y-2.5 tabular-nums">
                <div className="flex justify-between gap-2">
                  <span className="text-white/60">STRATEGY:</span>
                  <span className="font-medium text-pink-200">
                    {currentShield.name}
                  </span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-white/60">CADENCE:</span>
                  <span className="text-white">{currentShield.harvestFrequency}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-white/60">NET IMPACT:</span>
                  <span className="text-purple-200">
                    {currentShield.estimatedSavings}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveShieldIndex((prev) => (prev + 1) % TAX_SHIELD_PRESETS.length)
              }
              className="mt-6 w-full vaultra-btn-outline px-5 py-3 text-xs sm:text-[13px] cursor-pointer"
            >
              <span>Switch Strategy</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-[11px] text-pink-200">
                {activeShieldIndex + 1}/{TAX_SHIELD_PRESETS.length}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoCapabilities;
