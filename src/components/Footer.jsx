import React from 'react';
import { Logo } from './Logo';
import { Send, Youtube, Instagram, Linkedin, Twitter, ShieldCheck, Heart } from 'lucide-react';
import { TELEGRAM_LINK } from '../data/coursesData';

export function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Logo textClass="text-2xl font-black text-white" />
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Money Purse is India's premier financial education ecosystem empowering 50,000+ individuals to master stock market trading, tax optimization, and long-term wealth compounding.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0088CC]/20 text-[#0088CC] hover:bg-[#0088CC] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-500 hover:bg-pink-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#courses" className="hover:text-[#00A3FF] transition-colors">Course Library</a></li>
              <li><a href="#calculator" className="hover:text-[#00A3FF] transition-colors">SIP Wealth Calculator</a></li>
              <li><a href="#value-props" className="hover:text-[#00A3FF] transition-colors">Live Mentorship</a></li>
              <li><a href="#pricing" className="hover:text-[#00A3FF] transition-colors">Pricing & Plans</a></li>
              <li><a href="#reviews" className="hover:text-[#00A3FF] transition-colors">Learner Reviews</a></li>
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Featured Modules</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#courses" className="hover:text-[#00A3FF] transition-colors">Stock Market Mastery 360°</a></li>
              <li><a href="#courses" className="hover:text-[#00A3FF] transition-colors">F&O Trading Blueprint</a></li>
              <li><a href="#courses" className="hover:text-[#00A3FF] transition-colors">Legal Tax Saving Hack (₹2.5L)</a></li>
              <li><a href="#courses" className="hover:text-[#00A3FF] transition-colors">Personal Finance & SIP</a></li>
              <li><a href="#courses" className="hover:text-[#00A3FF] transition-colors">FIRE & Early Retirement</a></li>
            </ul>
          </div>

          {/* Column 4: VIP Telegram Card */}
          <div className="space-y-3 bg-slate-900/90 p-5 rounded-2xl border border-slate-800">
            <h4 className="text-sm font-black text-cyan-300 flex items-center gap-1.5">
              <Send className="w-4 h-4 text-[#0088CC]" />
              VIP Telegram Channel
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Join 25,000+ members receiving daily free market analysis and chart alerts.
            </p>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-telegram text-xs py-2 px-4 w-full justify-center"
            >
              Join VIP Telegram
            </a>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80 text-xs text-slate-400 space-y-2">
          <div className="font-bold text-slate-300 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> SEBI & Regulatory Educational Disclaimer:
          </div>
          <p className="leading-relaxed">
            Money Purse is strictly a financial education and wealth-literacy platform. All content, webinars, stock case studies, and charts presented are intended solely for educational purposes and must not be construed as SEBI-registered investment, financial, or trading advice. Trading in stock markets, options, and futures involves substantial risk of loss. Always consult a certified SEBI-registered financial advisor before making actual financial investments.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2026 Money Purse Edu Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
