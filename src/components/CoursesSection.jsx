import React, { useState } from 'react';
import { COURSES_DATA } from '../data/coursesData';
import { TrendingUp, Zap, PiggyBank, ShieldCheck, Sparkles, Coins, Star, Clock, Users, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const ICON_MAP = {
  TrendingUp,
  Zap,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Coins
};

export function CoursesSection({ onOpenSyllabus, onOpenEnroll }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Stock Market', 'Options & Trading', 'Personal Finance', 'Tax & Wealth', 'Modern Wealth'];

  const filteredCourses = selectedCategory === 'All'
    ? COURSES_DATA
    : COURSES_DATA.filter(course => course.category === selectedCategory);

  return (
    <section id="courses" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum & Mastery Modules</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Learn Proven Strategies to <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00A3FF] to-blue-600 bg-clip-text text-transparent">
              Build & Multiply Wealth
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            From complete stock market fundamentals to advanced options strategies and tax optimization. Practical, action-oriented financial education for every Indian.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const IconComponent = ICON_MAP[course.icon] || TrendingUp;
            
            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Badge Banner */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ backgroundColor: course.color }}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full border border-slate-200">
                    {course.badge}
                  </span>
                </div>

                {/* Course Metadata & Title */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold">
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      {course.rating} ({course.reviewsCount})
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      {course.studentsCount}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#00A3FF] transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 font-medium">
                    {course.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-600">
                    <span className="bg-slate-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {course.duration}
                    </span>
                    <span className="bg-slate-100 px-2.5 py-1 rounded-lg">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Syllabus Highlights Preview */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Key Modules Included:
                  </div>
                  {course.syllabus.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Pricing & Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] text-slate-400 line-through">₹{course.originalPrice.toLocaleString('en-IN')}</div>
                    <div className="text-2xl font-black text-slate-900">
                      ₹{course.price.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenSyllabus(course)}
                      className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                    >
                      Syllabus
                    </button>
                    
                    <button
                      onClick={() => onOpenEnroll(course)}
                      className="btn-primary py-2 px-4 text-xs shadow-sm"
                    >
                      Enroll
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
