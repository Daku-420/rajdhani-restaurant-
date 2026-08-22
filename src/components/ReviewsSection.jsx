import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/coursesData';
import { Star, Quote, CheckCircle2, TrendingUp, Sparkles, UserCheck } from 'lucide-react';

export function ReviewsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'College Students', 'Working Professionals', 'Business Owners'];

  const filteredReviews = activeCategory === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Verified Student Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Real People. Real <span className="bg-gradient-to-r from-[#00A3FF] to-blue-600 bg-clip-text text-transparent">Wealth Growth</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Over 50,000+ students across India have transformed their personal finances with Money Purse. Here is what they have to say.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#00A3FF] text-white shadow-lg shadow-[#00A3FF]/30 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredReviews.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header with Avatar & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#00A3FF]"
                    />
                    <div>
                      <h4 className="font-extrabold text-slate-900 flex items-center gap-1.5 text-base">
                        {t.name}
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
                      </h4>
                      <div className="text-xs text-slate-500 font-medium">{t.role}</div>
                    </div>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-black px-3 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {t.growth}
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium">
                  "{t.quote}"
                </p>
              </div>

              {/* Footer Course Badge */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold">Course Enrolled:</span>
                <span className="bg-slate-100 text-[#00A3FF] font-bold px-3 py-1 rounded-lg">
                  {t.course}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
