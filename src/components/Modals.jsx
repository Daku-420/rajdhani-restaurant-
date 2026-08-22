import React, { useState } from 'react';
import { X, Play, CheckCircle2, ShieldCheck, Tag, ArrowRight, Sparkles, Send, Lock, Award, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_TIERS, TELEGRAM_LINK } from '../data/coursesData';

export function Modals({
  masterclassOpen,
  onCloseMasterclass,
  syllabusCourse,
  onCloseSyllabus,
  enrollTier,
  onCloseEnroll
}) {
  // Enrollment Modal State
  const [selectedPlan, setSelectedPlan] = useState(enrollTier ? enrollTier.id : 'pro');
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [completed, setCompleted] = useState(false);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'MONEY30') {
      setDiscountApplied(true);
    } else {
      alert('Invalid coupon code. Try MONEY30 for 30% off!');
    }
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out your contact details.');
      return;
    }
    
    // Success flow with Confetti explosion
    setCompleted(true);
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  const resetEnrollState = () => {
    setCompleted(false);
    setStep(1);
    setDiscountApplied(false);
    setPromoCode('');
    onCloseEnroll();
  };

  const activePlanObj = PRICING_TIERS.find(t => t.id === selectedPlan) || PRICING_TIERS[1];
  const basePrice = activePlanObj.priceMonthly;
  const finalPrice = discountApplied ? Math.round(basePrice * 0.7) : basePrice;

  return (
    <>
      {/* 1. MASTERCLASS VIDEO MODAL */}
      {masterclassOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
            
            <button
              onClick={onCloseMasterclass}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="bg-[#00A3FF]/20 text-[#00A3FF] border border-[#00A3FF]/30 text-xs font-bold px-3 py-1 rounded-full inline-block">
                Free 45-Min Masterclass Preview
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                How to Build a ₹1 Crore Stock Portfolio in 3 Years
              </h3>
            </div>

            {/* Simulated Video Player */}
            <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000"
                alt="Masterclass Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#00A3FF] text-white flex items-center justify-center shadow-2xl shadow-[#00A3FF]/50 transform group-hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-200">Instructor: SEBI Registered Mentor Panel</span>
                <span className="text-[#00A3FF] font-semibold">45:18 HD</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-800">
              <div className="text-xs text-slate-400 font-medium text-center sm:text-left">
                Ready to unlock full lifetime course access & live mentorship?
              </div>
              <button
                onClick={() => {
                  onCloseMasterclass();
                  onCloseEnroll();
                }}
                className="btn-primary py-2.5 px-6 text-xs w-full sm:w-auto"
              >
                <span>Enroll Full Masterclass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 2. COURSE SYLLABUS MODAL */}
      {syllabusCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto">
            
            <button
              onClick={onCloseSyllabus}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="bg-[#00A3FF]/10 text-[#00A3FF] text-xs font-extrabold px-3 py-1 rounded-full">
                {syllabusCourse.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                {syllabusCourse.title}
              </h3>
              <p className="text-slate-600 text-sm font-medium">
                {syllabusCourse.description}
              </p>
            </div>

            {/* Modules Accordion Breakdown */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Full Module Syllabus Breakdown ({syllabusCourse.syllabus.length} Modules):
              </h4>

              {syllabusCourse.syllabus.map((mod, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#00A3FF] text-white text-xs font-black px-2.5 py-1 rounded-md">
                      {mod.module}
                    </span>
                    <span className="text-sm font-bold text-slate-800">{mod.title}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 shrink-0">
                    {mod.lessons} Lessons
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Course Price</div>
                <div className="text-2xl font-black text-slate-900">₹{syllabusCourse.price.toLocaleString('en-IN')}</div>
              </div>

              <button
                onClick={() => {
                  onCloseSyllabus();
                  // open enrollment
                }}
                className="btn-primary py-3 px-6 text-xs"
              >
                <span>Enroll This Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 3. ENROLLMENT CHECKOUT MODAL */}
      {enrollTier !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
            
            <button
              onClick={resetEnrollState}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!completed ? (
              <form onSubmit={handleEnrollSubmit} className="space-y-5">
                
                <div>
                  <span className="bg-[#00A3FF]/10 text-[#00A3FF] text-xs font-extrabold px-3 py-1 rounded-full inline-flex items-center gap-1 mb-2">
                    <Sparkles className="w-3 h-3" /> Step {step} of 2 • Fast Checkout
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    Enroll in Money Purse
                  </h3>
                </div>

                {/* Plan Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Select Plan Tier:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {PRICING_TIERS.map((tier) => (
                      <button
                        type="button"
                        key={tier.id}
                        onClick={() => setSelectedPlan(tier.id)}
                        className={`p-3 rounded-xl text-left border transition-all ${
                          selectedPlan === tier.id
                            ? 'border-[#00A3FF] bg-[#00A3FF]/5 text-slate-900 ring-2 ring-[#00A3FF]/30'
                            : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-xs font-extrabold">{tier.name}</div>
                        <div className="text-sm font-black text-[#00A3FF]">₹{tier.priceMonthly.toLocaleString('en-IN')}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="space-y-3 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#00A3FF]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#00A3FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#00A3FF]"
                      />
                    </div>
                  </div>
                </div>

                {/* Promo Code Box */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-700 flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-[#00A3FF]" /> Have a Promo Code?
                    </span>
                    <span className="text-slate-400">Use <strong className="text-emerald-600">MONEY30</strong></span>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter MONEY30"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs uppercase font-bold"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="bg-slate-900 text-white text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-slate-800"
                    >
                      Apply
                    </button>
                  </div>

                  {discountApplied && (
                    <div className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 30% Instant Discount Applied!
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Total Payable Amount</div>
                    <div className="text-2xl font-black text-slate-900">
                      ₹{finalPrice.toLocaleString('en-IN')}{' '}
                      {discountApplied && <span className="text-xs line-through text-slate-400 font-normal">₹{basePrice.toLocaleString('en-IN')}</span>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary py-3 px-6 text-sm font-bold shadow-lg"
                  >
                    <span>Complete Payment</span>
                    <Lock className="w-4 h-4 ml-1" />
                  </button>
                </div>

              </form>
            ) : (
              /* Success Confirmation Screen */
              <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900">
                    Welcome to Money Purse! 🎉
                  </h3>
                  <p className="text-slate-600 text-sm font-medium">
                    Your enrollment for <strong>{activePlanObj.name}</strong> is confirmed. Check your email (<strong>{formData.email}</strong>) for login instructions.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-5 rounded-2xl space-y-3 text-left border border-slate-800">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    Next Step: Join Official Telegram VIP
                  </div>
                  <p className="text-xs text-slate-300">
                    Get instant access to daily pre-market alerts, live webinars, and mentor Q&A right now.
                  </p>

                  <a
                    href={TELEGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-telegram w-full justify-center text-xs py-2.5"
                  >
                    <Send className="w-4 h-4" />
                    Join VIP Telegram Now
                  </a>
                </div>

                <button
                  onClick={resetEnrollState}
                  className="px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
                >
                  Close & Back to Platform
                </button>

              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
