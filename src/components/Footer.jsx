import React from 'react';
import { Sparkles, MapPin, Phone, Clock, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer style={{
      backgroundColor: '#1A1A1A',
      color: '#FFFFFF',
      padding: '60px 24px 28px 24px'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#E05A47',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-heading)',
                fontWeight: '800',
                fontSize: '1.1rem'
              }}>
                R
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
                Rajdhani Restaurant
              </span>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '20px' }}>
              Dehradun's premier dining destination since 2012. Famous for Rajdhani Special Chicken, Paneer Khurchan & Royal Thalis.
            </p>

            <button onClick={onOpenBooking} className="btn-pill-terracotta" style={{ padding: '8px 18px', fontSize: '0.8rem' }}>
              <Calendar size={14} /> Book a Table
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: '#E05A47', marginBottom: '16px' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <a href="#hero" style={footerLinkStyle}>Home</a>
              <a href="#menu" style={footerLinkStyle}>Multicuisine Menu</a>
              <a href="#thalis" style={footerLinkStyle}>Special Thalis (~₹280 - ₹320)</a>
              <a href="#story" style={footerLinkStyle}>Our Story (Est. 2012)</a>
              <a href="#reviews" style={footerLinkStyle}>Customer Reviews</a>
              <a href="#contact" style={footerLinkStyle}>Location & Hours</a>
            </div>
          </div>

          {/* Cuisines */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: '#E05A47', marginBottom: '16px' }}>
              Cuisine Offerings
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {RESTAURANT_INFO.cuisines.map((cui, i) => (
                <span key={i} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  borderRadius: '12px'
                }}>
                  {cui}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: '#E05A47', marginBottom: '16px' }}>
              Contact Details
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <MapPin size={16} color="#E05A47" style={{ flexShrink: 0 }} />
                <span>Indira Nagar, ITBP Road, Seemadwar, Dehradun 248146</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Phone size={16} color="#E05A47" style={{ flexShrink: 0 }} />
                <span>+91 81263 08805 / +91 97602 42569</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Clock size={16} color="#E05A47" style={{ flexShrink: 0 }} />
                <span>Daily: 11:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.5)',
          fontFamily: 'var(--font-heading)'
        }}>
          © {new Date().getFullYear()} Rajdhani Restaurant, Dehradun. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: 'rgba(255, 255, 255, 0.75)',
  textDecoration: 'none',
  transition: 'color 0.2s ease'
};
