import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, DollarSign, Navigation, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function ContactSection({ showToast }) {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      setIsOpenNow(currentHour >= RESTAURANT_INFO.openingHour && currentHour < RESTAURANT_INFO.closingHour);
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" style={{ padding: '80px 24px', backgroundColor: '#EAE6DF' }}>
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
            FIND & VISIT US IN DEHRADUN
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
            Location & Contact
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'start'
        }}>
          {/* Details Bento Card */}
          <div className="bento-card bento-white" style={{ padding: '36px' }}>
            
            {/* Live Status Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: isOpenNow ? '#DCFCE7' : '#FEE2E2',
              color: isOpenNow ? '#15803D' : '#B91C1C',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '800',
              fontFamily: 'var(--font-heading)',
              marginBottom: '24px'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: isOpenNow ? '#22C55E' : '#EF4444'
              }} />
              <span>{isOpenNow ? 'OPEN NOW (11:00 AM - 11:00 PM)' : 'CLOSED NOW (Opens at 11 AM)'}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Address */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ backgroundColor: '#E05A47', padding: '12px', borderRadius: '16px', color: '#FFFFFF', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#66635D', fontWeight: '800', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>
                    ADDRESS & LANDMARK
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#1A1A1A', marginTop: '2px' }}>
                    {RESTAURANT_INFO.address}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#E05A47', fontWeight: '700', marginTop: '2px' }}>
                    ({RESTAURANT_INFO.landmark})
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ backgroundColor: '#1A1A1A', padding: '12px', borderRadius: '16px', color: '#FFFFFF', flexShrink: 0 }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#66635D', fontWeight: '800', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>
                    PHONE NUMBERS
                  </div>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '6px', flexWrap: 'wrap' }}>
                    {RESTAURANT_INFO.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone}`}
                        style={{
                          color: '#FFFFFF',
                          fontWeight: '800',
                          fontFamily: 'var(--font-heading)',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          backgroundColor: '#1A1A1A',
                          padding: '6px 14px',
                          borderRadius: '20px'
                        }}
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hours & Cost */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#F4F1EC', padding: '10px', borderRadius: '12px', color: '#E05A47' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#66635D', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>HOURS</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>11 AM – 11 PM</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#F4F1EC', padding: '10px', borderRadius: '12px', color: '#E5A653' }}>
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#66635D', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>COST FOR TWO</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>{RESTAURANT_INFO.avgCostForTwo}</div>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div style={{ display: 'flex', gap: '12px', paddingTop: '12px' }}>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('Rajdhani Restaurant Indira Nagar ITBP Road Seemadwar Dehradun')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill-terracotta"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '0.85rem' }}
                >
                  <Navigation size={16} /> Get Directions
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Hi Rajdhani Restaurant! I would like to inquire about a table or menu.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill-charcoal"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '0.85rem' }}
                >
                  <MessageCircle size={16} color="#E05A47" /> WhatsApp
                </a>
              </div>

            </div>
          </div>

          {/* Map Frame Card */}
          <div className="bento-card" style={{ padding: 0, height: '440px', overflow: 'hidden' }}>
            <iframe
              title="Rajdhani Restaurant Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.205844837582!2d78.0062!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c313131313%3A0x1313131313131313!2sSeemadwar%2C%20Dehradun%2C%20Uttarakhand%20248146!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
