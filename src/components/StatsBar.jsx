import React from 'react';
import { Users, Star, TrendingUp, BookOpen, Award } from 'lucide-react';

export function StatsBar() {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Active Learners",
      subtext: "Across 140+ Cities in India",
      color: "#00A3FF"
    },
    {
      icon: Star,
      value: "4.9 ★",
      label: "Average Student Rating",
      subtext: "From 12,400+ Reviews",
      color: "#F59E0B"
    },
    {
      icon: TrendingUp,
      value: "₹100Cr+",
      label: "Portfolio Impact",
      subtext: "Combined Wealth Growth",
      color: "#10B981"
    },
    {
      icon: BookOpen,
      value: "98%",
      label: "Course Completion",
      subtext: "High Engagement Curriculum",
      color: "#8B5CF6"
    },
    {
      icon: Award,
      value: "15+",
      label: "SEBI & Market Experts",
      subtext: "Decades of Trading Mastery",
      color: "#EC4899"
    }
  ];

  return (
    <section className="py-10 bg-[#0F172A] text-white border-y border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-[#00A3FF]/40 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center bg-slate-800" style={{ color: stat.color }}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</div>
                <div className="text-xs font-bold text-slate-300 mt-1">{stat.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-medium">{stat.subtext}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
