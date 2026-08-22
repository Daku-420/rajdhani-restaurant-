import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';

export function WealthCalculator({ onOpenEnroll }) {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(15); // 15% per annum
  const [years, setYears] = useState(10); // 10 years

  // SIP Compound Interest Formula Calculation:
  // M = P * ({[1 + i]^n - 1} / i) * (1 + i)
  // where i = expectedReturn / 12 / 100, n = years * 12
  const monthlyRate = expectedReturn / 12 / 100;
  const totalMonths = years * 12;
  
  const totalInvested = monthlyInvestment * totalMonths;
  
  const totalValue = Math.round(
    monthlyInvestment *
      (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate))
  );

  const totalReturns = totalValue - totalInvested;
  const investedPercentage = Math.round((totalInvested / totalValue) * 100);
  const returnsPercentage = 100 - investedPercentage;

  return (
    <section id="calculator" className="py-20 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00A3FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#00A3FF]/20 text-[#00A3FF] border border-[#00A3FF]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Interactive SIP & Compound Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            See the Magic of <span className="bg-gradient-to-r from-[#00A3FF] to-cyan-300 bg-clip-text text-transparent">Compounding</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-medium">
            Test how small disciplined monthly investments grow into life-changing wealth over time.
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Sliders */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Slider 1: Monthly Investment */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-300">Monthly Investment (₹)</label>
                <div className="bg-[#00A3FF]/20 border border-[#00A3FF]/40 text-[#00A3FF] font-black text-lg px-4 py-1.5 rounded-xl">
                  ₹{monthlyInvestment.toLocaleString('en-IN')}
                </div>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                <span>₹1,000</span>
                <span>₹50,000</span>
                <span>₹1,000,000</span>
              </div>
            </div>

            {/* Slider 2: Expected Annual Return */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-300">Expected Annual Return (%)</label>
                <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-black text-lg px-4 py-1.5 rounded-xl">
                  {expectedReturn}% p.a.
                </div>
              </div>
              <input
                type="range"
                min="8"
                max="25"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                <span>8% (FD/Gold)</span>
                <span>15% (NIFTY Index)</span>
                <span>25% (Stock Master)</span>
              </div>
            </div>

            {/* Slider 3: Time Horizon */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-300">Time Horizon (Years)</label>
                <div className="bg-purple-500/20 border border-purple-500/40 text-purple-400 font-black text-lg px-4 py-1.5 rounded-xl">
                  {years} Years
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                <span>1 Year</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

          </div>

          {/* Right Column: Wealth Results & Visual Chart */}
          <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            
            <div className="text-center">
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Estimated Total Wealth</div>
              <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                ₹{totalValue.toLocaleString('en-IN')}
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800 text-xs sm:text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-500 inline-block"></span>
                  Total Invested Amount:
                </span>
                <span className="font-bold text-white">₹{totalInvested.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#00A3FF] inline-block"></span>
                  Estimated Profit Gain:
                </span>
                <span className="font-extrabold text-emerald-400">
                  +₹{totalReturns.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Visual Ratio Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                <span>Capital ({investedPercentage}%)</span>
                <span className="text-emerald-400">Wealth Gain ({returnsPercentage}%)</span>
              </div>
              <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-slate-500" style={{ width: `${investedPercentage}%` }}></div>
                <div className="h-full bg-gradient-to-r from-[#00A3FF] to-emerald-400" style={{ width: `${returnsPercentage}%` }}></div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onOpenEnroll()}
              className="btn-primary w-full py-3.5 text-sm font-bold shadow-lg"
            >
              <span>Build This Portfolio Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
