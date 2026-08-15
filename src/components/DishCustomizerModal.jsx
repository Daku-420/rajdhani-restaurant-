import React, { useState } from 'react';
import { X, Plus, Minus, Crown, ShoppingBag } from 'lucide-react';

export default function DishCustomizerModal({ item, isOpen, onClose, onAddToCart, showToast }) {
  if (!isOpen || !item) return null;

  // Portion Option calculations
  const hasPortionOptions = !item.category.includes('breads') && !item.category.includes('beverages');
  
  const availablePortions = item.portions ? [
    { id: 'qtr', label: 'Quarter (Qtr)', price: item.portions.qtr },
    { id: 'half', label: 'Half Portion', price: item.portions.half },
    { id: 'full', label: 'Full Portion', price: item.portions.full }
  ] : (hasPortionOptions ? [
    { id: 'half', label: 'Half Portion', price: item.price },
    { id: 'full', label: 'Full Portion', price: Math.round(item.price * 1.75) }
  ] : null);

  const [portion, setPortion] = useState(availablePortions ? availablePortions[0].id : 'single');
  const [spiceLevel, setSpiceLevel] = useState('medium'); // 'mild', 'medium', 'spicy'
  const [customNote, setCustomNote] = useState('');
  const [quantity, setQuantity] = useState(1);

  const selectedPortion = availablePortions ? (availablePortions.find(p => p.id === portion) || availablePortions[0]) : null;
  const baseUnitPrice = selectedPortion ? selectedPortion.price : item.price;
  const totalPrice = baseUnitPrice * quantity;

  const handleConfirmAdd = () => {
    const portionLabel = selectedPortion ? selectedPortion.label : '';
    const customizedItem = {
      ...item,
      id: `${item.id}-${portion}-${spiceLevel}-${Date.now()}`,
      portion: portionLabel,
      price: baseUnitPrice,
      spiceLevelText: spiceLevel === 'mild' ? 'Mild 🌿' : spiceLevel === 'spicy' ? 'Desi Spicy 🌶️🌶️' : 'Medium 🌶️',
      customNote: customNote,
      quantity: quantity,
      displayName: portionLabel ? `${item.name} (${portionLabel})` : item.name
    };

    onAddToCart(customizedItem);
    if (showToast) showToast(`Added customized "${item.name}" to cart! 🛒`);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(26, 26, 26, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }} onClick={onClose}>
      
      <div
        className="dish-popup-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          maxWidth: '520px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Modal Header */}
        <div style={{
          position: 'relative',
          height: '180px',
          width: '100%'
        }}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(26,26,26,0.85) 0%, transparent 60%)'
          }} />

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: '#FFFFFF',
              border: 'none',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>

          <div style={{
            position: 'absolute',
            bottom: '14px',
            left: '20px',
            right: '20px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between'
          }}>
            <div>
              <span style={{
                backgroundColor: '#E05A47',
                color: '#FFF',
                fontSize: '0.75rem',
                fontWeight: '800',
                fontFamily: 'var(--font-heading)',
                padding: '3px 10px',
                borderRadius: '12px',
                marginBottom: '4px',
                display: 'inline-block'
              }}>
                DISH CUSTOMIZER
              </span>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: '800',
                lineHeight: 1.1
              }}>
                {item.name}
              </h3>
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#E5A653' }}>
              ₹{totalPrice}
            </div>
          </div>
        </div>

        {/* Customization Options Body */}
        <div style={{ padding: '20px 24px', flexGrow: 1, overflowY: 'auto' }}>
          
          {/* 1. Portion Size Option */}
          {availablePortions && (
            <div style={{ marginBottom: '20px' }}>
              <label style={sectionHeaderStyle}>1. Select Portion Size</label>
              <div style={{
                display: 'grid',
                gridTemplateColumns: availablePortions.length === 3 ? 'repeat(3, 1fr)' : '1fr 1fr',
                gap: '10px',
                marginTop: '8px'
              }}>
                {availablePortions.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPortion(p.id)}
                    style={{
                      padding: '12px 10px',
                      borderRadius: '16px',
                      border: portion === p.id ? '2px solid #E05A47' : '1px solid #EAE6DF',
                      backgroundColor: portion === p.id ? '#FDF4E7' : '#F4F1EC',
                      color: '#1A1A1A',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ fontSize: '0.82rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>{p.label}</div>
                    <div style={{ fontSize: '0.85rem', color: '#E05A47', fontWeight: '800', marginTop: '2px' }}>₹{p.price}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 2. Spice Level Selector */}
          <div style={{ marginBottom: '20px' }}>
            <label style={sectionHeaderStyle}>2. Choose Spice Preference</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '8px' }}>
              {[
                { id: 'mild', label: 'Mild 🌿', desc: 'Creamy & Gentle' },
                { id: 'medium', label: 'Medium 🌶️', desc: 'Balanced Heat' },
                { id: 'spicy', label: 'Desi Spicy 🌶️🌶️', desc: 'Authentic Punjabi' },
              ].map(sp => (
                <button
                  key={sp.id}
                  type="button"
                  onClick={() => setSpiceLevel(sp.id)}
                  style={{
                    padding: '10px 8px',
                    borderRadius: '16px',
                    border: spiceLevel === sp.id ? '2px solid #E05A47' : '1px solid #EAE6DF',
                    backgroundColor: spiceLevel === sp.id ? '#1A1A1A' : '#F4F1EC',
                    color: spiceLevel === sp.id ? '#FFFFFF' : '#1A1A1A',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontSize: '0.82rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>{sp.label}</div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.7, marginTop: '2px' }}>{sp.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Custom Cooking Notes */}
          <div style={{ marginBottom: '20px' }}>
            <label style={sectionHeaderStyle}>3. Special Instructions for Chef</label>
            <input
              type="text"
              placeholder="e.g. Less oil, extra gravy, crisp parantha..."
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '14px',
                border: '1px solid #EAE6DF',
                backgroundColor: '#FAFAFA',
                fontSize: '0.85rem',
                outline: 'none',
                marginTop: '6px'
              }}
            />
          </div>

        </div>

        {/* Footer Quantity & Confirm Button */}
        <div style={{
          padding: '16px 24px',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid #EAE6DF',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          {/* Quantity Selector */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#F4F1EC',
            padding: '8px 14px',
            borderRadius: '30px'
          }}>
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1A1A1A', display: 'flex' }}
            >
              <Minus size={16} />
            </button>
            <span style={{ fontSize: '1rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>{quantity}</span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1A1A1A', display: 'flex' }}
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={handleConfirmAdd}
            className="btn-pill-terracotta"
            style={{ flex: 1, padding: '12px 20px', fontSize: '0.95rem' }}
          >
            <ShoppingBag size={18} /> Add Custom Item — ₹{totalPrice}
          </button>
        </div>

      </div>
    </div>
  );
}

const sectionHeaderStyle = {
  fontSize: '0.85rem',
  fontWeight: '800',
  fontFamily: 'var(--font-heading)',
  color: '#1A1A1A',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};
