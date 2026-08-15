import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Utensils, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TableReservationModal({ isOpen, onClose, showToast }) {
  const [step, setStep] = useState('form');
  const [bookingDetails, setBookingDetails] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '01:00 PM',
    guests: '2 Guests',
    seating: 'Main Hall',
    name: '',
    phone: '',
    specialRequest: ''
  });
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookingDetails.name.trim() || !bookingDetails.phone.trim()) {
      showToast('Please provide your name and phone number for booking!');
      return;
    }

    const ref = `RR-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(ref);
    setStep('confirmed');

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });

    showToast(`Table Reserved! Booking ID: ${ref} 🍽️`);
  };

  const handleReset = () => {
    setStep('form');
    setBookingDetails({
      date: new Date().toISOString().split('T')[0],
      time: '01:00 PM',
      guests: '2 Guests',
      seating: 'Main Hall',
      name: '',
      phone: '',
      specialRequest: ''
    });
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(6px)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '28px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '32px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
        position: 'relative'
      }}>
        <button
          onClick={handleReset}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#F4F1EC',
            border: 'none',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} color="#1A1A1A" />
        </button>

        {step === 'form' ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#E05A47',
                color: '#FFFFFF',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '10px'
              }}>
                <Sparkles size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: '800', color: '#1A1A1A' }}>
                Reserve a Table
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#66635D', marginTop: '2px' }}>
                Rajdhani Restaurant, Indira Nagar, Seemadwar
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Date & Time */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}><Calendar size={14} color="#E05A47" /> Date *</label>
                  <input
                    type="date"
                    required
                    value={bookingDetails.date}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, date: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}><Clock size={14} color="#E05A47" /> Preferred Time *</label>
                  <select
                    value={bookingDetails.time}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, time: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="11:30 AM">11:30 AM (Lunch)</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="07:30 PM">07:30 PM (Dinner)</option>
                    <option value="08:30 PM">08:30 PM</option>
                    <option value="09:30 PM">09:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Guests & Seating */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}><Users size={14} color="#E05A47" /> Guests *</label>
                  <select
                    value={bookingDetails.guests}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, guests: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="6 Guests">6 Guests</option>
                    <option value="8+ Family">8+ Family Party</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}><Utensils size={14} color="#E05A47" /> Seating Area</label>
                  <select
                    value={bookingDetails.seating}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, seating: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="Main Hall">Main Hall</option>
                    <option value="Family Section">Family Section</option>
                    <option value="Cozy Booth">Cozy Booth</option>
                  </select>
                </div>
              </div>

              {/* Details */}
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={bookingDetails.name}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={bookingDetails.phone}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Special Requests (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Birthday, High chair"
                  value={bookingDetails.specialRequest}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, specialRequest: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <button type="submit" className="btn-pill-terracotta" style={{ width: '100%', marginTop: '8px' }}>
                Confirm Table Reservation 🍽️
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#DCFCE7',
              color: '#16A34A',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '14px'
            }}>
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '6px' }}>
              Reservation Confirmed!
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#66635D', marginBottom: '20px' }}>
              We look forward to hosting you at <strong>Rajdhani Restaurant</strong>.
            </p>

            <div style={{
              backgroundColor: '#F4F1EC',
              padding: '18px',
              borderRadius: '16px',
              textAlign: 'left',
              marginBottom: '20px',
              fontSize: '0.85rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <div><strong>Booking ID:</strong> <span style={{ color: '#E05A47', fontWeight: '800' }}>{bookingRef}</span></div>
              <div><strong>Guest Name:</strong> {bookingDetails.name}</div>
              <div><strong>Date & Time:</strong> {bookingDetails.date} at {bookingDetails.time}</div>
              <div><strong>Party Size:</strong> {bookingDetails.guests} ({bookingDetails.seating})</div>
            </div>

            <button onClick={handleReset} className="btn-pill-charcoal" style={{ width: '100%' }}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const labelStyle = {
  fontSize: '0.8rem',
  fontWeight: '800',
  fontFamily: 'var(--font-heading)',
  color: '#1A1A1A',
  marginBottom: '4px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px'
};

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '12px',
  border: '1px solid #EAE6DF',
  outline: 'none',
  fontSize: '0.85rem',
  backgroundColor: '#F4F1EC',
  fontFamily: 'var(--font-body)'
};
