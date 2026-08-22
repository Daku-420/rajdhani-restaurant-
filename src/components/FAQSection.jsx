import React, { useState } from 'react';
import { FAQS } from '../data/coursesData';
import { ChevronDown, HelpCircle, Search, MessageSquare, Send } from 'lucide-react';
import { TELEGRAM_LINK } from '../data/coursesData';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-[#00A3FF] to-blue-600 bg-clip-text text-transparent">Questions</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Everything you need to know about Money Purse courses, community access, and mentorship.
          </p>

          {/* Interactive Search Bar */}
          <div className="max-w-md mx-auto relative pt-3">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-6" />
            <input
              type="text"
              placeholder="Search questions (e.g. beginner, telegram, certificate)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-300 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A3FF] focus:ring-2 focus:ring-[#00A3FF]/20 shadow-sm"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#00A3FF] transition-colors focus:outline-none"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00A3FF]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed font-medium border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-slate-500 font-semibold bg-white rounded-2xl border border-slate-200">
              No matching questions found. Ask us directly on Telegram!
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
          <h4 className="text-lg font-extrabold text-slate-900">Have a specific question not listed here?</h4>
          <p className="text-slate-600 text-sm font-medium">
            Our student support team and mentors are available 24/7 on Telegram & Email.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-telegram text-xs py-2.5 px-5 shadow-sm"
            >
              <Send className="w-4 h-4" />
              Ask On Telegram
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
