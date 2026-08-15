import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import confetti from 'canvas-confetti';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  showToast
}) {
  const [orderType, setOrderType] = useState('delivery');
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [cookingNotes, setCookingNotes] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  if (!isOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'RAJDHANI10') {
      setDiscountPercent(10);
      showToast('🎉 Code RAJDHANI10 applied! 10% discount added.');
    } else {
      showToast('Invalid coupon. Try "RAJDHANI10" for 10% off!');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const gstAmount = Math.round((subtotal - discountAmount) * 0.05);
  const finalTotal = Math.max(0, subtotal - discountAmount + gstAmount);

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;
    if (!customerName.trim()) {
      showToast('Please enter your name for the order!');
      return;
    }

    let itemsList = cartItems
      .map((item) => {
        let details = [];
        if (item.portion) details.push(item.portion);
        if (item.spiceLevelText) details.push(item.spiceLevelText);
        if (item.selectedAddons && item.selectedAddons.length > 0) {
          details.push(`Addons: ${item.selectedAddons.map(a => a.name).join(', ')}`);
        }
        if (item.customNote) details.push(`Note: ${item.customNote}`);

        const detailStr = details.length > 0 ? ` (${details.join(' | ')})` : '';
        return `• ${item.displayName || item.name}${detailStr} x${item.quantity} - ₹${item.price * item.quantity}`;
      })
      .join('%0A');

    let text = `*NEW ORDER - RAJDHANI RESTAURANT*%0A%0A`;
    text += `*Customer:* ${encodeURIComponent(customerName)}%0A`;
    text += `*Order Type:* ${orderType.toUpperCase()}%0A`;
    if (customerAddress) text += `*Address:* ${encodeURIComponent(customerAddress)}%0A`;
    if (cookingNotes) text += `*General Notes:* ${encodeURIComponent(cookingNotes)}%0A`;
    text += `%0A*CUSTOMIZED ITEMS ORDERED:*%0A${itemsList}%0A%0A`;
    text += `*Subtotal:* ₹${subtotal}%0A`;
    if (discountAmount > 0) text += `*Discount:* -₹${discountAmount}%0A`;
    text += `*GST (5%):* ₹${gstAmount}%0A`;
    text += `*TOTAL AMOUNT:* ₹${finalTotal}%0A%0A`;
    text += `Thank you! Please confirm my order.`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`, '_blank');

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 }
    });

    showToast('Redirecting to WhatsApp to complete your order! 🚀');
    onClearCart();
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(6px)',
      zIndex: 250,
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        maxWidth: '440px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 40px rgba(0,0,0,0.3)',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          backgroundColor: '#1A1A1A',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} color="#E05A47" />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '800' }}>
              Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)})
            </h3>
          </div>

          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer' }}>
            <X size={22} />
          </button>
        </div>

        {/* Cart Body */}
        {cartItems.length === 0 ? (
          <div style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              backgroundColor: '#F4F1EC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <ShoppingBag size={32} color="#E05A47" />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#1A1A1A', marginBottom: '6px' }}>Your cart is empty</h4>
            <p style={{ fontSize: '0.85rem', color: '#66635D', marginBottom: '24px' }}>
              Add Rajdhani Special Chicken, Paneer Khurchan or Thalis to get started!
            </p>
            <button onClick={onClose} className="btn-pill-terracotta">
              Explore Menu
            </button>
          </div>
        ) : (
          <div style={{ flexGrow: 1, overflowY: 'auto', padding: '20px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '14px' }}>
              <button
                onClick={onClearCart}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#DC2626',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  fontFamily: 'var(--font-heading)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Trash2 size={14} /> Clear Cart
              </button>
            </div>

            {/* Itemized List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {cartItems.map((item) => (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  backgroundColor: '#F4F1EC',
                  padding: '12px',
                  borderRadius: '16px'
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover', marginTop: '2px' }}
                  />

                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>
                      {item.displayName || item.name}
                    </div>

                    {/* Customization Details Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
                      {item.portion && (
                        <span style={badgeTagStyle}>{item.portion}</span>
                      )}
                      {item.spiceLevelText && (
                        <span style={badgeTagStyle}>{item.spiceLevelText}</span>
                      )}
                      {item.selectedAddons && item.selectedAddons.map(a => (
                        <span key={a.id} style={{ ...badgeTagStyle, backgroundColor: '#E5A653', color: '#1A1A1A' }}>
                          +{a.name.replace(/^[^\s]+\s+/, '')}
                        </span>
                      ))}
                    </div>

                    {item.customNote && (
                      <div style={{ fontSize: '0.72rem', color: '#E05A47', fontStyle: 'italic', marginTop: '4px' }}>
                        Note: "{item.customNote}"
                      </div>
                    )}

                    <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#E05A47', marginTop: '6px' }}>
                      ₹{item.price * item.quantity}
                    </div>
                  </div>

                  {/* Quantity Controller */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#FFFFFF',
                    padding: '4px 8px',
                    borderRadius: '20px'
                  }}>
                    <button onClick={() => onUpdateQuantity(item.id, -1)} style={qtyBtnStyle}>
                      <Minus size={13} />
                    </button>
                    <span style={{ fontSize: '0.85rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)} style={qtyBtnStyle}>
                      <Plus size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Type Toggle */}
            <div style={{ marginBottom: '18px' }}>
              <label style={drawerLabelStyle}>Order Type</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', marginTop: '6px' }}>
                {['delivery', 'takeaway', 'dinein'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setOrderType(type)}
                    style={{
                      padding: '8px 4px',
                      borderRadius: '12px',
                      border: 'none',
                      backgroundColor: orderType === type ? '#E05A47' : '#F4F1EC',
                      color: orderType === type ? '#FFFFFF' : '#1A1A1A',
                      fontSize: '0.8rem',
                      fontWeight: '800',
                      fontFamily: 'var(--font-heading)',
                      cursor: 'pointer',
                      textTransform: 'capitalize'
                    }}
                  >
                    {type === 'dinein' ? 'Dine-In' : type}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Your Name *"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                style={drawerInputStyle}
              />
              {orderType === 'delivery' && (
                <input
                  type="text"
                  placeholder="Delivery Address in Dehradun..."
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  style={drawerInputStyle}
                />
              )}
              <input
                type="text"
                placeholder="General Cooking Notes..."
                value={cookingNotes}
                onChange={(e) => setCookingNotes(e.target.value)}
                style={drawerInputStyle}
              />
            </div>

            {/* Coupon Code */}
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Coupon (e.g. RAJDHANI10)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                style={{ ...drawerInputStyle, flexGrow: 1 }}
              />
              <button type="submit" className="btn-pill-light" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
                Apply
              </button>
            </form>

            {/* Summary Box */}
            <div style={{
              backgroundColor: '#F4F1EC',
              padding: '16px',
              borderRadius: '16px',
              fontSize: '0.85rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#66635D' }}>Subtotal</span>
                <span style={{ fontWeight: '700' }}>₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#16A34A' }}>
                  <span>Discount (10%)</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#66635D' }}>GST (5%)</span>
                <span style={{ fontWeight: '700' }}>₹{gstAmount}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.1rem',
                fontWeight: '800',
                fontFamily: 'var(--font-heading)',
                color: '#1A1A1A',
                paddingTop: '8px',
                borderTop: '1px solid #EAE6DF'
              }}>
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer Checkout CTA */}
        {cartItems.length > 0 && (
          <div style={{ padding: '20px 24px', backgroundColor: '#FFFFFF', borderTop: '1px solid #EAE6DF' }}>
            <button
              onClick={handleCheckoutWhatsApp}
              className="btn-pill-terracotta"
              style={{ width: '100%', padding: '12px', fontSize: '0.95rem' }}
            >
              <span>Order via WhatsApp</span>
              <Send size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const badgeTagStyle = {
  fontSize: '0.7rem',
  fontWeight: '800',
  fontFamily: 'var(--font-heading)',
  backgroundColor: '#1A1A1A',
  color: '#FFFFFF',
  padding: '2px 6px',
  borderRadius: '6px'
};

const qtyBtnStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#1A1A1A',
  display: 'flex',
  alignItems: 'center'
};

const drawerLabelStyle = {
  fontSize: '0.75rem',
  fontWeight: '800',
  fontFamily: 'var(--font-heading)',
  color: '#1A1A1A',
  textTransform: 'uppercase'
};

const drawerInputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '12px',
  border: '1px solid #EAE6DF',
  outline: 'none',
  fontSize: '0.85rem',
  backgroundColor: '#F4F1EC',
  fontFamily: 'var(--font-body)'
};
