import React, { useState } from 'react';
import { Crown, Sparkles, UtensilsCrossed, HeartHandshake, Phone, Calendar, MessageCircle, ArrowRight, ShieldCheck, Flame, Users } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import CateringBookingModal from './CateringBookingModal';

const CATERING_SERVICES = [
  {
    id: 'wedding',
    title: 'Weddings & Royal Receptions',
    capacity: '200 to 3,000+ Guests',
    tag: 'MOST POPULAR',
    desc: 'Complete wedding banquets with multi-cuisine live counters, traditional Rajasthani/Punjabi thalis, and gourmet dessert lounges.',
    icon: Crown,
    bgClass: 'bento-terracotta',
    features: ['Live Tandoor & Naan Counters', 'Pahadi & Mughlai Meat Stations', 'Gourmet Mithai & Dessert Bar', 'Uniformed Butler & Buffet Service']
  },
  {
    id: 'corporate',
    title: 'Corporate Events & Galas',
    capacity: '50 to 800+ Guests',
    tag: 'EXECUTIVE CHOICE',
    desc: 'Professional corporate catering featuring premium packed thalis, buffet spreads, and live wok counters for conferences & annual galas.',
    icon: Sparkles,
    bgClass: 'bento-charcoal',
    features: ['Customized Bento Box Thalis', 'Live Indo-Chinese Wok Counters', 'High-Tea & Snacks Stations', 'GST Billing & Invoicing']
  },
  {
    id: 'celebrations',
    title: 'Birthdays & Family Gatherings',
    capacity: '25 to 250+ Guests',
    tag: 'COZY & VIBRANT',
    desc: 'Memorable home and venue catering with customized kid-friendly options, live chat counters, and delicious starter platters.',
    icon: UtensilsCrossed,
    bgClass: 'bento-sand',
    features: ['Live Chaat & Pani Puri Bar', 'Crispy Starter Platters', 'Custom Cake & Dessert Stations', 'Full Setup & Clean Up']
  }
];

export default function CateringSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="catering" style={{ padding: '80px 24px', backgroundColor: '#F4F1EC', borderTop: '1px solid #EAE6DF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#F8ECE9',
            color: '#C84634',
            padding: '6px 16px',
            borderRadius: '30px',
            fontSize: '0.82rem',
            fontWeight: '800',
            fontFamily: 'var(--font-heading)',
            marginBottom: '14px',
            letterSpacing: '0.5px'
          }}>
            <Crown size={15} /> GRAND OUTDOOR & EVENT CATERING
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#1A1A1A',
            letterSpacing: '-1px',
            textTransform: 'uppercase',
            marginTop: '4px'
          }}>
            Make Your Special Gathering Unforgettable
          </h2>
          
          <p style={{ color: '#66635D', maxWidth: '650px', margin: '12px auto 0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            From grand Himalayan wedding receptions to corporate celebrations, Rajdhani Restaurant delivers Dehradun's finest multi-cuisine catering with live tandoor stations & authentic recipes.
          </p>
        </div>

        {/* Catering Services Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '56px'
        }}>
          {CATERING_SERVICES.map((service) => {
            const IconComponent = service.icon;
            const isTerracotta = service.bgClass === 'bento-terracotta';
            const isCharcoal = service.bgClass === 'bento-charcoal';
            const textColor = isTerracotta || isCharcoal ? '#FFFFFF' : '#1A1A1A';
            const subtextColor = isTerracotta ? 'rgba(255,255,255,0.85)' : isCharcoal ? 'rgba(255,255,255,0.7)' : '#66635D';

            return (
              <div
                key={service.id}
                className={`bento-card ${service.bgClass}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '380px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '16px',
                      backgroundColor: isTerracotta ? 'rgba(255,255,255,0.2)' : isCharcoal ? 'rgba(255,255,255,0.1)' : '#E05A47',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent size={24} />
                    </div>

                    <span style={{
                      backgroundColor: isTerracotta ? '#FFFFFF' : isCharcoal ? '#E05A47' : '#1A1A1A',
                      color: isTerracotta ? '#C84634' : '#FFFFFF',
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      fontFamily: 'var(--font-heading)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      letterSpacing: '0.5px'
                    }}>
                      {service.tag}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.45rem',
                    fontWeight: '800',
                    color: textColor,
                    marginBottom: '6px'
                  }}>
                    {service.title}
                  </h3>

                  <div style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: isTerracotta ? '#FDF4E7' : isCharcoal ? '#E5A653' : '#E05A47',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Users size={14} /> {service.capacity}
                  </div>

                  <p style={{
                    fontSize: '0.9rem',
                    color: subtextColor,
                    lineHeight: 1.5,
                    marginBottom: '20px'
                  }}>
                    {service.desc}
                  </p>

                  {/* Feature Checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {service.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: textColor }}>
                        <ShieldCheck size={16} color={isTerracotta ? '#FFF' : '#E05A47'} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  style={{
                    backgroundColor: isTerracotta ? '#FFFFFF' : isCharcoal ? '#E05A47' : '#1A1A1A',
                    color: isTerracotta ? '#1A1A1A' : '#FFFFFF',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '12px 20px',
                    fontSize: '0.9rem',
                    fontWeight: '800',
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Live Counters Banner */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          padding: '36px',
          boxShadow: 'var(--shadow-bento)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E05A47', fontWeight: '800', fontSize: '0.85rem', marginBottom: '8px' }}>
              <Flame size={18} /> LIVE TANDOOR & WOK STATIONS AVAILABLE
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: '800', color: '#1A1A1A', margin: '0 0 8px 0' }}>
              Hot Tandoori Naan & Fresh Kebabs Cooked Right Before Your Guests
            </h3>
            <p style={{ color: '#66635D', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
              We bring our authentic clay tandoors, wok burners, and executive chefs directly to your venue for piping hot Garlic Naans, Pahadi Kebabs & Live Desserts.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-pill-terracotta"
              style={{ padding: '14px 28px', fontSize: '0.95rem' }}
            >
              <Sparkles size={18} /> Enquire Now
            </button>

            <a
              href={`tel:${RESTAURANT_INFO.phones[0]}`}
              className="btn-pill-light"
              style={{ padding: '14px 24px', fontSize: '0.95rem' }}
            >
              <Phone size={18} color="#E05A47" />
              <span>Call Manager</span>
            </a>
          </div>
        </div>

      </div>

      {/* CATERING BOOKING MODAL */}
      <CateringBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
