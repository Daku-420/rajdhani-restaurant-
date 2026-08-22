import React from 'react';
import { Send, Sparkles, CheckCircle2, TrendingUp, BellRing, Users, Shield, ArrowUpRight } from 'lucide-react';
import { TELEGRAM_LINK } from '../data/coursesData';

export function TelegramVIPSection() {
  return (
    <section id="telegram-vip" className="py-16 md:py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0088CC]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-r from-slate-950 via-[#0B1528] to-slate-950 rounded-3xl p-8 md:p-12 border border-[#0088CC]/40 shadow-2xl relative overflow-hidden">
          
          {/* Top Live Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-[#0088CC]/20 border border-[#0088CC]/40 px-4 py-1.5 rounded-full text-xs font-bold text-cyan-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Official Telegram Channel • Live Updates</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-slate-800">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>25,000+ Active Members</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Join Money Purse <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-[#0088CC] to-blue-400 bg-clip-text text-transparent">
                  VIP Telegram Community
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                Get instant daily stock market signals, pre-market NIFTY/BANKNIFTY levels, technical chart pattern breakdowns, and live mentor insights delivered directly to your phone.
              </p>

              {/* Feature Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Daily Free Stock & Swing Alerts</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>NIFTY & BANKNIFTY Key Levels</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Chart Pattern Breakouts</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Live Q&A With SEBI Mentors</span>
                </div>
              </div>

              {/* Telegram Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-telegram w-full sm:w-auto text-base py-4 px-8 shadow-xl shadow-[#0088CC]/30 group"
                >
                  <Send className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span>Join Telegram Channel Free</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>

                <span className="text-xs text-slate-400 font-medium">100% Free • No Spam Guarantee</span>
              </div>
            </div>

            {/* Right Interactive Alert Box Preview */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 p-6 rounded-2xl border border-[#0088CC]/30 space-y-4 shadow-xl relative">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#0088CC] flex items-center justify-center text-white">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Money Purse Official VIP</div>
                      <div className="text-[10px] text-cyan-400 font-semibold">25.4k subscribers</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">Just now</span>
                </div>

                {/* Simulated Telegram Message */}
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-extrabold uppercase">
                    <BellRing className="w-3.5 h-3.5" />
                    <span>SWING TRADE BREAKOUT ALERT</span>
                  </div>
                  <div className="font-bold text-white text-sm">TATA MOTORS — Bullish Flag Pattern</div>
                  <p className="text-slate-300 leading-relaxed">
                    Breakout above ₹980 confirmed on daily timeframe with 3x volume. Target: ₹1,050 / Stop Loss: ₹955.
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[11px]">
                    <span className="text-emerald-400 font-bold">▲ Potential Gain: +7.2%</span>
                    <span className="text-slate-500">2.1k views • 9:15 AM</span>
                  </div>
                </div>

                <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/30 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> Target 1 Achieved +₹42,000 Profit!
                  </span>
                  <span className="text-slate-400 text-[10px]">Verified</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
