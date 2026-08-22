import React, { useState } from 'react';
import { Play, TrendingUp, ShieldCheck, Award, Users, ArrowRight, Sparkles, CheckCircle2, DollarSign, BarChart2, Star } from 'lucide-react';
import { TELEGRAM_LINK } from '../data/coursesData';

export function HeroSection({ onOpenEnroll, onOpenMasterclass }) {
  const [activeTab, setActiveTab] = useState('portfolio');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background Decorative Blur Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00A3FF]/15 to-cyan-300/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Announcement Pill */}
            <div className="inline-flex items-center gap-2 bg-[#00A3FF]/10 border border-[#00A3FF]/25 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#0088FF] shadow-sm animate-bounce-subtle">
              <Sparkles className="w-4 h-4 text-[#00A3FF]" />
              <span>India's #1 Wealth & Financial Education Ecosystem</span>
              <span className="hidden sm:inline bg-[#00A3FF] text-white text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full">New 2026 Edition</span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              Master Wealth, <br className="hidden sm:inline" />
              Multiply Income & Achieve <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#00A3FF] via-[#0088FF] to-blue-600 bg-clip-text text-transparent">
                Financial Freedom
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join <strong>50,000+ Indian learners</strong> building sustainable wealth. Learn stock market trading, tax saving hacks, SIP compound compounding, and options strategies directly from industry mentors.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenEnroll()}
                className="btn-primary w-full sm:w-auto text-base py-4 px-8 shadow-xl hover:shadow-[#00A3FF]/40"
              >
                <span>Start Learning Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onOpenMasterclass()}
                className="btn-secondary w-full sm:w-auto text-base py-3.5 px-7 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#00A3FF]/10 text-[#00A3FF] flex items-center justify-center group-hover:bg-[#00A3FF] group-hover:text-white transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span>Watch Free Masterclass</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">SEBI Insights</div>
                  <div className="text-[11px] text-slate-500">Expert Curated</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#00A3FF]/10 text-[#00A3FF] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">50k+ Alumni</div>
                  <div className="text-[11px] text-slate-500">4.9★ Rated</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">ISO Certified</div>
                  <div className="text-[11px] text-slate-500">Verified Diploma</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Column: Interactive Student Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Navy Glowing Dashboard Frame */}
            <div className="glow-card p-6 md:p-7 relative z-10 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60">
              
              {/* Card Header & Profile */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                    alt="Student Profile"
                    className="w-10 h-10 rounded-full border-2 border-[#00A3FF] object-cover"
                  />
                  <div>
                    <div className="text-sm font-bold flex items-center gap-1.5">
                      Student Wealth Dashboard
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                    </div>
                    <div className="text-xs text-slate-400">Pro Student • Batch 2026</div>
                  </div>
                </div>

                <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+142.8% ROI</span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex bg-slate-900/80 p-1 rounded-xl my-4 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`flex-1 py-2 rounded-lg transition-all ${activeTab === 'portfolio' ? 'bg-[#00A3FF] text-white shadow' : 'text-slate-400 hover:text-white'}`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => setActiveTab('trades')}
                  className={`flex-1 py-2 rounded-lg transition-all ${activeTab === 'trades' ? 'bg-[#00A3FF] text-white shadow' : 'text-slate-400 hover:text-white'}`}
                >
                  Live Trades
                </button>
                <button
                  onClick={() => setActiveTab('progress')}
                  className={`flex-1 py-2 rounded-lg transition-all ${activeTab === 'progress' ? 'bg-[#00A3FF] text-white shadow' : 'text-slate-400 hover:text-white'}`}
                >
                  Syllabus
                </button>
              </div>

              {/* Tab Content Display */}
              {activeTab === 'portfolio' && (
                <div className="space-y-4">
                  <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-700/50">
                    <div className="text-xs text-slate-400 uppercase font-semibold">Total Wealth Accumulated</div>
                    <div className="text-3xl font-extrabold text-white mt-1">₹ 8,42,500 <span className="text-xs font-semibold text-emerald-400 ml-2">▲ +₹2.4L gain</span></div>
                    
                    {/* Simulated Growth Visual Bar */}
                    <div className="mt-4 pt-2">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>SIP Capital: ₹5.0L</span>
                        <span>Compounded Return: 68.5%</span>
                      </div>
                      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
                        <div className="h-full bg-slate-600 w-[60%]"></div>
                        <div className="h-full bg-[#00A3FF] w-[40%]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Stock Tickers */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700/40 text-center">
                      <div className="text-[11px] font-bold text-slate-300">NIFTY 50</div>
                      <div className="text-xs font-bold text-emerald-400">+1.42%</div>
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700/40 text-center">
                      <div className="text-[11px] font-bold text-slate-300">TATA MOTORS</div>
                      <div className="text-xs font-bold text-emerald-400">+4.18%</div>
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700/40 text-center">
                      <div className="text-[11px] font-bold text-slate-300">RELIANCE</div>
                      <div className="text-xs font-bold text-emerald-400">+2.05%</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'trades' && (
                <div className="space-y-3">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/50 flex justify-between items-center text-xs">
                    <div>
                      <div className="font-bold text-white">NIFTY 24500 CE (Options)</div>
                      <div className="text-[11px] text-slate-400">Bought @ ₹120 • Sold @ ₹245</div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 font-bold px-2.5 py-1 rounded-md">
                      +104% Profit
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/50 flex justify-between items-center text-xs">
                    <div>
                      <div className="font-bold text-white">TATA STEEL (Swing Trade)</div>
                      <div className="text-[11px] text-slate-400">Target Hit in 4 Days</div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 font-bold px-2.5 py-1 rounded-md">
                      +14.5% Profit
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'progress' && (
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700/50">
                    <span className="font-bold text-white">Stock Market 360°</span>
                    <span className="text-emerald-400 font-bold">Completed 100%</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900/80 p-3 rounded-xl border border-slate-700/50">
                    <span className="font-bold text-white">F&O Blueprint</span>
                    <span className="text-[#00A3FF] font-bold">85% Completed</span>
                  </div>
                </div>
              )}

              {/* Bottom Quick Callout */}
              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  Verified Learner Outcome
                </span>
                <span className="text-[#00A3FF] font-semibold hover:underline cursor-pointer" onClick={() => onOpenEnroll()}>
                  Join Money Purse →
                </span>
              </div>
            </div>

            {/* Floating Student Stat Badge 1 */}
            <div className="absolute -top-6 -right-4 sm:-right-8 bg-white text-slate-900 p-3.5 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3 z-20 animate-float-slow">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold">Rahul M. (Bengaluru)</div>
                <div className="text-[11px] text-emerald-600 font-bold">Made ₹42,000 Profits This Month</div>
              </div>
            </div>

            {/* Floating Telegram Alert Badge 2 */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-slate-900 text-white p-3.5 rounded-2xl shadow-2xl border border-cyan-500/40 flex items-center gap-3 z-20">
              <div className="w-9 h-9 rounded-xl bg-[#0088CC] text-white flex items-center justify-center">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-cyan-300">Telegram VIP Signal</div>
                <div className="text-[11px] text-slate-300 font-medium">NIFTY Target Reached +180 Pts</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
