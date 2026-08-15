import React from 'react';
import { SPECIAL_THALIS } from '../data/menuData';
import { Star, CheckCircle2, ShoppingBag, Sparkles } from 'lucide-react';

export default function RoyalThalis({ onAddToCart }) {
  const getThaliCardTheme = (index) => {
    if (index === 0) {
      return { bg: '#E05A47', text: '#FFFFFF', subtext: 'rgba(255,255,255,0.85)', btnClass: 'btn-pill-charcoal', priceColor: '#FFFFFF' };
    }
    if (index === 1) {
      return { bg: '#E5A653', text: '#1A1A1A', subtext: '#444444', btnClass: 'btn-pill-charcoal', priceColor: '#1A1A1A' };
    }
    if (index === 2) {
      return { bg: '#1A1A1A', text: '#FFFFFF', subtext: 'rgba(255,255,255,0.75)', btnClass: 'btn-pill-terracotta', priceColor: '#E5A653' };
    }
    return { bg: '#FFFFFF', text: '#1A1A1A', subtext: '#66635D', btnClass: 'btn-pill-terracotta', priceColor: '#E05A47' };
  };

  return (
    <section id="thalis" style={{ padding: '80px 24px', backgroundColor: '#F4F1EC' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: '800',
            fontFamily: 'var(--font-heading)',
            color: '#E05A47',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            COMPLETE FEAST PLATTERS
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            fontWeight: '800',
            color: '#1A1A1A',
            letterSpacing: '-1px',
            textTransform: 'uppercase',
            marginTop: '4px'
          }}>
            Rajdhani Special Thalis
          </h2>
          <p style={{ color: '#66635D', maxWidth: '600px', margin: '8px auto 0 auto', fontSize: '1rem' }}>
            Generous thali dawat platters. Special Veg Thali (~₹280) & Special Non-Veg Thali (~₹320).
          </p>
        </div>

        {/* Thalis Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '28px'
        }}>
          {SPECIAL_THALIS.map((thali, index) => {
            const theme = getThaliCardTheme(index);

            return (
              <div
                key={thali.id}
                className="bento-card"
                style={{
                  backgroundColor: theme.bg,
                  color: theme.text,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 0
                }}
              >
                {/* Banner Image */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={thali.image}
                    alt={thali.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: thali.isVeg ? '#16A34A' : '#DC2626',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    fontFamily: 'var(--font-heading)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Sparkles size={12} />
                    <span>{thali.tag}</span>
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(26,26,26,0.85)',
                    color: '#E5A653',
                    fontSize: '0.8rem',
                    fontWeight: '800',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Star size={12} fill="#E5A653" color="#E5A653" />
                    <span>{thali.rating} ({thali.reviews})</span>
                  </div>
                </div>

                {/* Body Details */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: '800',
                    marginBottom: '8px'
                  }}>
                    {thali.name}
                  </h3>

                  <p style={{
                    fontSize: '0.85rem',
                    color: theme.subtext,
                    lineHeight: 1.45,
                    marginBottom: '16px'
                  }}>
                    {thali.description}
                  </p>

                  {/* Included Items Bullet Box */}
                  <div style={{
                    backgroundColor: theme.bg === '#1A1A1A' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                    borderRadius: '16px',
                    padding: '14px',
                    marginBottom: '20px'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '800', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', marginBottom: '8px', opacity: 0.8 }}>
                      INCLUDES:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                      {thali.itemsIncluded.map((inc, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem' }}>
                          <CheckCircle2 size={12} color={theme.bg === '#E05A47' ? '#FFF' : '#E05A47'} />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: `1px solid ${theme.bg === '#1A1A1A' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: theme.priceColor }}>
                          ₹{thali.price}
                        </span>
                        <span style={{ fontSize: '0.85rem', opacity: 0.6, textDecoration: 'line-through' }}>
                          ₹{thali.originalPrice}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onAddToCart(thali)}
                      className={theme.btnClass}
                      style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                    >
                      <ShoppingBag size={15} /> Order Thali
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
