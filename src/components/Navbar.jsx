import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Send, Menu, X, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { TELEGRAM_LINK } from '../data/coursesData';

export function Navbar({ onOpenEnroll, onOpenMasterclass }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Courses", href: "#courses" },
    { name: "SIP Calculator", href: "#calculator" },
    { name: "Telegram VIP", href: "#telegram-vip", isTelegram: true },
    { name: "Mentorship", href: "#value-props" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 ${
                link.isTelegram
                  ? 'text-[#0088CC] hover:text-[#00A3FF] bg-[#0088CC]/10 px-3 py-1 rounded-full border border-[#0088CC]/20'
                  : 'text-slate-600 hover:text-[#00A3FF]'
              }`}
            >
              {link.isTelegram && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0088CC]"></span>
                </span>
              )}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#0088CC] hover:text-[#00A3FF] flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#0088CC]/30 hover:border-[#0088CC] transition-all bg-[#0088CC]/5"
          >
            <Send className="w-3.5 h-3.5" />
            VIP Telegram
          </a>

          <button
            onClick={() => onOpenEnroll()}
            className="btn-primary text-sm py-2.5 px-6 shadow-md"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenEnroll()}
            className="btn-primary text-xs py-2 px-4 shadow-sm"
          >
            Enroll
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 flex items-center justify-between border-b border-slate-100 ${
                  link.isTelegram ? 'text-[#0088CC]' : 'text-slate-800'
                }`}
              >
                <span>{link.name}</span>
                {link.isTelegram && (
                  <span className="bg-[#0088CC] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Send className="w-2.5 h-2.5" /> Join Free
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-telegram w-full justify-center text-sm py-3"
            >
              <Send className="w-4 h-4" />
              Join Official Telegram VIP
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnroll();
              }}
              className="btn-primary w-full justify-center text-sm py-3"
            >
              <span>Enroll Now & Access Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
