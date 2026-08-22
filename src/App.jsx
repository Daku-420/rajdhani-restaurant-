import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import CateringSection from './components/CateringSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TableReservationModal from './components/TableReservationModal';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import { MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from './data/menuData';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    showToast(`Added "${item.name}" to your cart! 🛒`);
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from cart');
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast('Cart cleared');
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FAF6F0', color: '#1C1917' }}>
      {/* Sticky Header Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Hero Section */}
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Interactive Menu Section */}
      <MenuSection onAddToCart={handleAddToCart} cartItems={cartItems} showToast={showToast} />

      {/* Outdoor & Grand Event Catering Section */}
      <CateringSection />

      {/* Location & Contact Section */}
      <ContactSection showToast={showToast} />

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Floating WhatsApp Quick Order Button */}
      <a
        href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Hi Rajdhani Restaurant! 👋 I would like to place a food order or inquire about your menu.')}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '28px',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          padding: '12px 20px',
          borderRadius: '30px',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 90,
          textDecoration: 'none',
          fontWeight: '800',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.9rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <MessageCircle size={20} />
        <span className="hide-mobile">Order on WhatsApp</span>
      </a>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Table Reservation Modal */}
      <TableReservationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        showToast={showToast}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}
