import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Calendar, Phone, Menu as MenuIcon, X, MapPin, ChevronDown, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Navbar({ cartCount, onOpenCart, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setContactDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: isScrolled ? 'rgba(234, 230, 223, 0.96)' : '#EAE6DF',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(26, 26, 26, 0.08)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#1A1A1A',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-heading)',
            fontWeight: '800',
            fontSize: '1.2rem'
          }}>
            R
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.45rem',
              fontWeight: '800',
              color: '#1A1A1A',
              letterSpacing: '-0.5px',
              lineHeight: 1
            }}>
              Rajdhani
            </div>
            <div style={{
              fontSize: '0.65rem',
              color: '#E05A47',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              DEHRADUN • EST. 2012
            </div>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hide-mobile">
          <a href="#hero" className="nav-link-modern">Home</a>
          <a href="#menu" className="nav-link-modern">Menu</a>
          <a href="#catering" className="nav-link-modern" style={{ color: '#E05A47', fontWeight: '800' }}>Catering ✨</a>
          
          {/* Contact Click-to-Toggle Dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setContactDropdownOpen(!contactDropdownOpen)}
              className="nav-link-modern"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.95rem',
                padding: '4px 0',
                outline: 'none'
              }}
            >
              <span>Contact</span>
              <ChevronDown size={14} style={{ transform: contactDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
            </button>

            {contactDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '8px',
                boxShadow: '0 14px 35px rgba(26, 26, 26, 0.18)',
                border: '1px solid #EAE6DF',
                minWidth: '210px',
                zIndex: 300,
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <a
                  href={`tel:${RESTAURANT_INFO.phones[0]}`}
                  onClick={() => setContactDropdownOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: '#1A1A1A',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F4F1EC'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#F8ECE9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={14} color="#E05A47" />
                  </div>
                  <span>Call Us</span>
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Hi Rajdhani Restaurant! 👋 I would like to place an order.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setContactDropdownOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: '#1A1A1A',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#DCFCE7'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#25D366', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageCircle size={14} />
                  </div>
                  <span>WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setContactDropdownOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: '#66635D',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '600',
                    fontSize: '0.85rem'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F4F1EC'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#F4F1EC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={14} color="#66635D" />
                  </div>
                  <span>Location & Hours</span>
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={onOpenBooking} className="btn-pill-charcoal" style={{ padding: '9px 20px', fontSize: '0.85rem' }}>
            <Calendar size={15} />
            <span>Book Table</span>
          </button>

          {/* Cart Pill Button */}
          <button
            onClick={onOpenCart}
            className="btn-pill-terracotta"
            style={{ padding: '9px 18px', fontSize: '0.85rem', position: 'relative' }}
          >
            <ShoppingBag size={16} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span style={{
                backgroundColor: '#1A1A1A',
                color: '#FFFFFF',
                fontSize: '0.75rem',
                fontWeight: '800',
                padding: '2px 7px',
                borderRadius: '12px',
                marginLeft: '4px'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="show-mobile-only"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#1A1A1A' }}
          >
            {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#1A1A1A',
          color: '#FFFFFF',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={mobileNavStyle}>Home</a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} style={mobileNavStyle}>Full Menu</a>
          <a href="#catering" onClick={() => setMobileMenuOpen(false)} style={mobileNavStyle}>Catering ✨</a>
          <a href={`tel:${RESTAURANT_INFO.phones[0]}`} onClick={() => setMobileMenuOpen(false)} style={mobileNavStyle}>📞 Call Us</a>
          <a href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} style={mobileNavStyle}>💬 WhatsApp Order</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={mobileNavStyle}>Location & Hours</a>
        </div>
      )}

      <style>{`
        .nav-link-modern {
          color: #1A1A1A;
          text-decoration: none;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }
        .nav-link-modern:hover {
          color: #E05A47;
        }
      `}</style>
    </header>
  );
}

const mobileNavStyle = {
  color: '#FFFFFF',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontFamily: 'var(--font-heading)',
  fontWeight: '600',
  padding: '8px 0',
  borderBottom: '1px solid rgba(255,255,255,0.1)'
};
