import React from 'react';

export function Logo({ className = "h-9", textClass = "text-xl font-bold text-slate-900 dark:text-white" }) {
  return (
    <div className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Brand Icon Badge */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00A3FF] via-[#0088FF] to-[#0284C7] p-[1.5px] shadow-md shadow-[#00A3FF]/20 group-hover:shadow-lg group-hover:shadow-[#00A3FF]/40 transition-all duration-300 transform group-hover:scale-105">
        <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/20 to-transparent opacity-70"></div>
          
          <svg className="w-6 h-6 relative z-10 text-[#00A3FF]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Graduation Cap Spotlight Base */}
            <path d="M20 6L34 13L20 20L6 13L20 6Z" stroke="url(#blue_grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 15V22.5C10 22.5 14 26 20 26C26 26 30 22.5 30 22.5V15" stroke="url(#blue_grad)" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M33 13.5V23.5" stroke="#00A3FF" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="33" cy="24.5" r="1.5" fill="#00A3FF"/>
            
            {/* Rupee Symbol Spotlight */}
            <path d="M16 28H23M16 31.5H23M16 28V35M19 28C21.5 28 23 29.2 23 31C23 33 21 34 18 34.5L23.5 38.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            
            <defs>
              <linearGradient id="blue_grad" x1="6" y1="6" x2="34" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00A3FF"/>
                <stop offset="1" stopColor="#38BDF8"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className={`font-extrabold tracking-tight font-heading flex items-center gap-1 ${textClass}`}>
          Money <span className="text-[#00A3FF]">Purse</span>
          <span className="bg-[#00A3FF]/10 text-[#00A3FF] text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border border-[#00A3FF]/20 ml-0.5">
            Edu
          </span>
        </span>
      </div>
    </div>
  );
}
