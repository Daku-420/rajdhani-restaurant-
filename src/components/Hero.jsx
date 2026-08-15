import React from 'react';
import { UtensilsCrossed, Calendar, Search, ArrowUpRight, Star, Sparkles, MapPin, ChevronRight, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

const STRIP_CATEGORIES = [
  { id: 'rajdhani-specials', title: 'Rajdhani Signatures', tag: 'Special Chicken & Paneer', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=150&q=80' },
  { id: 'thalis', title: 'Royal Thalis', tag: 'Veg ~₹280 | Non-Veg ~₹320', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=150&q=80' },
  { id: 'north-indian', title: 'North Indian & Punjabi', tag: 'Kalimirch Chicken & Tandoori', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=150&q=80' },
  { id: 'chinese', title: 'Indo-Chinese & Rajasthani', tag: 'Schezwan & Dal Baati', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=150&q=80' },
];

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" style={{ padding: '40px 24px 60px 24px', backgroundColor: '#EAE6DF' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Main Hero Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '36px'
        }}>
          {/* Left Column: Bold Headline & Action Pills */}
          <div>
            {/* Tagline Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#FFFFFF',
              padding: '6px 16px',
              borderRadius: '30px',
              fontSize: '0.8rem',
              fontWeight: '700',
              color: '#E05A47',
              marginBottom: '20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
            }}>
              <Sparkles size={14} color="#E05A47" />
              <span>DEHRADUN'S PREMIER MULTICUISINE • EST. 2012</span>
            </div>

            {/* Giant Sans-Serif Headline */}
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
              fontWeight: '800',
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              color: '#1A1A1A',
              marginBottom: '24px',
              textTransform: 'uppercase'
            }}>
              FRESH & DELICIOUS <br />
              FOOD FOR <br />
              EVERY TASTE
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: '#66635D',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '500px'
            }}>
              Serving authentic <strong>Rajdhani Special Chicken</strong>, <strong>Paneer Khurchan</strong>, Kalimirch Chicken & Royal Thalis in Indira Nagar, ITBP Road, Seemadwar.
            </p>

            {/* Pill Action Buttons (Matching Reference Image) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
              <a href="#menu" className="btn-pill-charcoal">
                <span>Explore Menu</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Hi Rajdhani Restaurant! 👋 I would like to place a food order.')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: '800',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-heading)',
                  boxShadow: '0 6px 18px rgba(37, 211, 102, 0.4)'
                }}
              >
                <MessageCircle size={18} />
                <span>Order on WhatsApp</span>
              </a>

              <button onClick={onOpenBooking} className="btn-pill-light">
                <span>Reserve Table</span>
              </button>

              <a
                href="#contact"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(26,26,26,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1A1A1A',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                aria-label="Location Map"
              >
                <MapPin size={20} color="#E05A47" />
              </a>
            </div>
          </div>

          {/* Right Column: Terracotta Container with Top-Down Food Composition */}
          <div style={{ position: 'relative' }}>
            <div style={{
              backgroundColor: '#E05A47',
              borderRadius: '36px',
              padding: '24px',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(224, 90, 71, 0.25)'
            }}>
              {/* Dish Showcase Image */}
              <div style={{ borderRadius: '28px', overflow: 'hidden', height: '420px', position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Rajdhani Special Multicuisine Feast"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Floating Bottom Pill Badge (As in Reference) */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '14px 20px',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      backgroundColor: '#1A1A1A',
                      color: '#FFFFFF',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '0.8rem'
                    }}>
                      4.8★
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '800', color: '#1A1A1A' }}>Rajdhani Special Chicken</div>
                      <div style={{ fontSize: '0.75rem', color: '#66635D' }}>Seemadwar, Dehradun • 1,250+ Diners</div>
                    </div>
                  </div>

                  <a href="#menu" style={{
                    backgroundColor: '#E05A47',
                    color: '#FFFFFF',
                    padding: '8px 14px',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    Order <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Category Strip (Directly matching the strip in the reference image) */}
        <div style={{
          backgroundColor: '#1A1A1A',
          borderRadius: '30px',
          padding: '12px 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          background: 'linear-gradient(90deg, #1A1A1A 0%, #2A2A2A 60%, #E05A47 100%)'
        }}>
          {STRIP_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href="#menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 12px',
                borderRadius: '20px',
                textDecoration: 'none',
                color: '#FFFFFF',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                transition: 'background 0.2s ease'
              }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', fontFamily: 'var(--font-heading)', whiteSpace: 'nowrap' }}>{cat.title}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.7)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{cat.tag}</div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
