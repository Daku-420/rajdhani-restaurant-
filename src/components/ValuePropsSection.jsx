import React from 'react';
import { Video, BarChart2, MessageSquare, Award, Infinity, Smartphone, Sparkles, CheckCircle } from 'lucide-react';

export function ValuePropsSection() {
  const valueProps = [
    {
      icon: Video,
      title: "Live Weekly Mentorship",
      description: "Direct Saturday webinars with senior traders & SEBI experts to analyze live market trends and solve your doubts.",
      color: "#00A3FF"
    },
    {
      icon: BarChart2,
      title: "Real-Time Market Case Studies",
      description: "No outdated theory! Every lesson features live Indian stock charts, NIFTY breakouts, and real P&L teardowns.",
      color: "#10B981"
    },
    {
      icon: MessageSquare,
      title: "VIP Telegram & Discord Access",
      description: "Network with 25,000+ serious traders. Share stock ideas, receive instant alerts, and stay ahead of the market.",
      color: "#0088CC"
    },
    {
      icon: Award,
      title: "Recognized Certification",
      description: "Earn an official ISO-certified Money Purse Financial Literacy Certificate upon completing your curriculum.",
      color: "#F59E0B"
    },
    {
      icon: Infinity,
      title: "Lifetime Unrestricted Access",
      description: "Pay once and get lifetime access to all course modules, plus free updates whenever market regulations change.",
      color: "#8B5CF6"
    },
    {
      icon: Smartphone,
      title: "Mobile & Offline Learning",
      description: "Download lessons on our iOS & Android mobile apps to learn anytime, anywhere — even without internet.",
      color: "#EC4899"
    }
  ];

  return (
    <section id="value-props" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Money Purse Stands Apart</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Designed for <span className="bg-gradient-to-r from-[#00A3FF] to-blue-600 bg-clip-text text-transparent">Maximum Student Success</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            We don't just sell videos. We provide a complete financial growth ecosystem with live guidance, mentorship, and high-ROI tools.
          </p>
        </div>

        {/* 6 Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 hover:border-[#00A3FF]/40 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md transition-transform group-hover:scale-110" style={{ backgroundColor: item.color }}>
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#00A3FF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Included in All Tiers</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
