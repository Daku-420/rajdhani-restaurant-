import React, { useState } from 'react';
import { X, Calendar, Users, MapPin, Phone, User, MessageCircle, Sparkles, CheckCircle2, Crown, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function CateringBookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding & Reception',
    guestCount: '250',
    eventDate: '',
    venueLocation: 'Dehradun',
    dietPreference: 'Both (Veg & Non-Veg)',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = `👑 *RAJDHANI CATERING INQUIRY* 👑
--------------------------------
👤 *Name:* ${formData.name || 'Valued Guest'}
📞 *Phone:* ${formData.phone || 'N/A'}
🎉 *Event Type:* ${formData.eventType}
👥 *Estimated Guests:* ${formData.guestCount}
📅 *Event Date:* ${formData.eventDate || 'TBD'}
📍 *Venue Location:* ${formData.venueLocation}
🥗 *Dietary Choice:* ${formData.dietPreference}
💬 *Special Requests:* ${formData.specialRequests || 'None'}
--------------------------------
Please share custom menu proposals & pricing options.`;

    const waUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(26, 26, 26, 0.75)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1100,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '28px',
        maxWidth: '560px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        position: 'relative',
        animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}>
        {/* Modal Header */}
        <div style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
          color: '#FFFFFF',
          padding: '28px 28px 24px 28px',
          borderTopLeftRadius: '28px',
          borderTopRightRadius: '28px',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              color: '#FFFFFF',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={18} />
          </button>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(229, 166, 83, 0.2)',
            color: '#E5A653',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '800',
            fontFamily: 'var(--font-heading)',
            marginBottom: '10px',
            letterSpacing: '0.5px'
          }}>
            <Crown size={14} /> RAJDHANI CATERING SERVICES
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.6rem',
            fontWeight: '800',
            margin: 0,
            lineHeight: 1.2
          }}>
            Enquire About Event & Outdoor Catering
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.9rem',
            margin: '6px 0 0 0'
          }}>
            From intimate gatherings to royal weddings of 2,000+ guests in Dehradun & Uttarakhand.
          </p>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px 28px 28px 28px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#DCFCE7',
                color: '#16A34A',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '800', margin: '0 0 8px 0', color: '#1A1A1A' }}>
                Catering Inquiry Submitted!
              </h3>
              <p style={{ color: '#66635D', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '24px' }}>
                Thank you <strong>{formData.name}</strong>! Our Executive Catering Manager will review your requirements and call you shortly on <strong>{formData.phone}</strong>.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={handleWhatsAppInquiry}
                  style={{
                    backgroundColor: '#25D366',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '24px',
                    padding: '12px 24px',
                    fontWeight: '800',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 6px 18px rgba(37, 211, 102, 0.35)'
                  }}
                >
                  <MessageCircle size={18} /> Send Instant Details on WhatsApp
                </button>

                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="btn-pill-light"
                  style={{ padding: '10px 20px', width: '100%', fontSize: '0.9rem' }}
                >
                  Close & Back to Menu
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Event Type & Guests */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: '#1A1A1A', marginBottom: '6px' }}>
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '14px',
                      border: '1px solid #EAE6DF',
                      backgroundColor: '#F4F1EC',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none'
                    }}
                  >
                    <option value="Wedding & Reception">Wedding & Reception</option>
                    <option value="Corporate Gala & Conference">Corporate Gala & Conference</option>
                    <option value="Birthday & Anniversary">Birthday & Anniversary</option>
                    <option value="Family Gathering & Puja">Family Gathering & Puja</option>
                    <option value="Cocktail & Live Counters">Cocktail & Live Counters</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: '#1A1A1A', marginBottom: '6px' }}>
                    Estimated Guests
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '14px',
                      border: '1px solid #EAE6DF',
                      backgroundColor: '#F4F1EC',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none'
                    }}
                  >
                    <option value="25-50 Guests">25 – 50 Guests</option>
                    <option value="50-150 Guests">50 – 150 Guests</option>
                    <option value="150-350 Guests">150 – 350 Guests</option>
                    <option value="350-800 Guests">350 – 800 Guests</option>
                    <option value="800-2000+ Guests">800 – 2,000+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: '#1A1A1A', marginBottom: '6px' }}>
                    Your Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} color="#66635D" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Rawat"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 36px',
                        borderRadius: '14px',
                        border: '1px solid #EAE6DF',
                        backgroundColor: '#F4F1EC',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: '#1A1A1A', marginBottom: '6px' }}>
                    Phone Number *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={16} color="#66635D" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 36px',
                        borderRadius: '14px',
                        border: '1px solid #EAE6DF',
                        backgroundColor: '#F4F1EC',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Date & Location */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: '#1A1A1A', marginBottom: '6px' }}>
                    Event Date *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Calendar size={16} color="#66635D" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 36px',
                        borderRadius: '14px',
                        border: '1px solid #EAE6DF',
                        backgroundColor: '#F4F1EC',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: '#1A1A1A', marginBottom: '6px' }}>
                    Venue / Location
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={16} color="#66635D" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="text"
                      placeholder="e.g. Rajpur Road / Seemadwar"
                      value={formData.venueLocation}
                      onChange={(e) => setFormData({ ...formData, venueLocation: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 36px',
                        borderRadius: '14px',
                        border: '1px solid #EAE6DF',
                        backgroundColor: '#F4F1EC',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Dietary Choice */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: '#1A1A1A', marginBottom: '6px' }}>
                  Menu Choice
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                  {['Both (Veg & Non-Veg)', 'Pure Veg Catering', 'Jain / Satvik Options'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, dietPreference: opt })}
                      style={{
                        padding: '8px 10px',
                        borderRadius: '12px',
                        border: formData.dietPreference === opt ? '2px solid #E05A47' : '1px solid #EAE6DF',
                        backgroundColor: formData.dietPreference === opt ? '#F8ECE9' : '#FFFFFF',
                        color: formData.dietPreference === opt ? '#C84634' : '#1A1A1A',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        fontFamily: 'var(--font-heading)',
                        cursor: 'pointer'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: '#1A1A1A', marginBottom: '6px' }}>
                  Special Counter Requests (Live Tandoor, Chaat, Dessert Bar)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Live Tandoor counters, Pahadi Mutton live counter, Jalebi & Rabri station..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '14px',
                    border: '1px solid #EAE6DF',
                    backgroundColor: '#F4F1EC',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button
                  type="submit"
                  className="btn-pill-terracotta"
                  style={{ flex: 1, padding: '12px 20px', fontSize: '0.95rem' }}
                >
                  <Sparkles size={16} /> Submit Enquiry Now
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  style={{
                    backgroundColor: '#25D366',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '24px',
                    padding: '12px 18px',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)'
                  }}
                >
                  <MessageCircle size={16} /> Direct WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
