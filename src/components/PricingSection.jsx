import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/coursesData';
import { Check, Sparkles, ShieldCheck, ArrowRight, Zap, Star } from 'lucide-react';

export function PricingSection({ onOpenEnroll }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' vs 'annual'

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Pricing Tiers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Invest in Your Financial <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00A3FF] to-blue-600 bg-clip-text text-transparent">
              Freedom & Wealth
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            One-time affordable investment for lifetime wealth skills. No hidden charges. 7-day 100% money-back guarantee.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 inline-flex items-center bg-slate-100 p-1.5 rounded-full border border-slate-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Standard Tier Price
            </button>

            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                billingCycle === 'annual'
                  ? 'bg-[#00A3FF] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Early Bird Offer</span>
              <span className="bg-emerald-400 text-slate-950 text-[10px] uppercase font-black px-2 py-0.5 rounded-full">
                Save 30%
              </span>
            </button>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const displayPrice = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;
            
            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative ${
                  tier.isPopular
                    ? 'glow-card text-white scale-105 z-10 border-2 border-[#00A3FF] shadow-2xl'
                    : 'bg-slate-50 border border-slate-200/90 text-slate-900 hover:border-slate-300 hover:shadow-xl'
                }`}
              >
                {/* Popular Ribbon */}
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00A3FF] to-blue-600 text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-2xl font-black ${tier.isPopular ? 'text-white' : 'text-slate-900'}`}>
                        {tier.name}
                      </h3>
                      
                      {!tier.isPopular && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-200 text-slate-700">
                          {tier.badge}
                        </span>
                      )}
                    </div>

                    <p className={`text-xs ${tier.isPopular ? 'text-slate-300' : 'text-slate-500'} font-medium`}>
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl sm:text-5xl font-black ${tier.isPopular ? 'text-white' : 'text-slate-900'}`}>
                        ₹{displayPrice.toLocaleString('en-IN')}
                      </span>
                      <span className={`text-xs ${tier.isPopular ? 'text-slate-400' : 'text-slate-500'} font-semibold`}>
                        /{tier.period}
                      </span>
                    </div>

                    {billingCycle === 'annual' && (
                      <div className="text-xs text-emerald-400 font-bold mt-1">
                        You save ₹{(tier.priceMonthly - tier.priceAnnual).toLocaleString('en-IN')} instantly!
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className={`space-y-3 pt-4 border-t ${tier.isPopular ? 'border-slate-700' : 'border-slate-200'}`}>
                    <div className={`text-xs font-extrabold uppercase tracking-wider ${tier.isPopular ? 'text-slate-300' : 'text-slate-700'}`}>
                      What's Included:
                    </div>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.isPopular ? 'text-[#00A3FF]' : 'text-emerald-500'}`} />
                        <span className={tier.isPopular ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onOpenEnroll(tier)}
                    className={`w-full py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      tier.isPopular
                        ? 'btn-primary shadow-xl'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-md'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Money Back Guarantee Banner */}
        <div className="mt-16 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base">7-Day 100% Risk-Free Guarantee</h4>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Try the first 2 modules. If you don't find high value, get a 100% refund — no questions asked.
              </p>
            </div>
          </div>

          <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 shrink-0">
            Verified Refund Policy
          </div>
        </div>

      </div>
    </section>
  );
}
