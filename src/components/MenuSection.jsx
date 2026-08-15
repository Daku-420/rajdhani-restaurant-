import React, { useState, useMemo, useRef } from 'react';
import { CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/menuData';
import { Search, Star, Plus, Heart, Crown, ShoppingBag, Flame, X, Sparkles, SlidersHorizontal, MessageCircle } from 'lucide-react';
import DishCustomizerModal from './DishCustomizerModal';

export default function MenuSection({ onAddToCart, cartItems, showToast }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [favorites, setFavorites] = useState([]);
  
  // Automatic Hover Dish Pop-Up State
  const [activeHoverDish, setActiveHoverDish] = useState(null);
  const leaveTimeoutRef = useRef(null);

  // Customizer Modal State
  const [customizingItem, setCustomizingItem] = useState(null);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const handleDirectWhatsAppOrder = (item, e) => {
    if (e) e.stopPropagation();
    let priceText = item.portions ? `Qtr ₹${item.portions.qtr} / Half ₹${item.portions.half} / Full ₹${item.portions.full}` : `₹${item.price}`;
    let text = `Hi Rajdhani Restaurant! 👋%0AI would like to order: *${encodeURIComponent(item.name)}* (${priceText}).%0APlease assist me with my order!`;
    window.open(`https://wa.me/918126308805?text=${text}`, '_blank');
    if (showToast) showToast(`Opening WhatsApp to order ${item.name}! 💬`);
  };

  const handleMouseEnterCard = (item) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setActiveHoverDish(item);
  };

  const handleMouseLeaveCard = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveHoverDish(null);
    }, 100);
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'non-veg' && item.isVeg) return false;

      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        return item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviews - a.reviews;
    });
  }, [selectedCategory, dietaryFilter, searchQuery, sortBy]);

  const getItemQuantity = (id) => {
    const found = cartItems.filter((item) => item.id.startsWith(id) || item.id === id);
    return found.reduce((sum, item) => sum + item.quantity, 0);
  };

  // Assign bento color themes dynamically
  const getBentoStyle = (index, isChefSpecial) => {
    if (isChefSpecial && index % 2 === 0) {
      return {
        bg: '#E05A47',
        text: '#FFFFFF',
        subtext: 'rgba(255,255,255,0.85)',
        priceColor: '#FFFFFF',
        btnClass: 'btn-pill-charcoal',
        badgeBg: 'rgba(255,255,255,0.2)',
        badgeText: '#FFFFFF'
      };
    }
    if (index % 5 === 1) {
      return {
        bg: '#E5A653',
        text: '#1A1A1A',
        subtext: '#444444',
        priceColor: '#1A1A1A',
        btnClass: 'btn-pill-charcoal',
        badgeBg: '#1A1A1A',
        badgeText: '#FFFFFF'
      };
    }
    if (index % 5 === 3) {
      return {
        bg: '#1A1A1A',
        text: '#FFFFFF',
        subtext: 'rgba(255,255,255,0.75)',
        priceColor: '#E5A653',
        btnClass: 'btn-pill-terracotta',
        badgeBg: '#E05A47',
        badgeText: '#FFFFFF'
      };
    }
    return {
      bg: '#FFFFFF',
      text: '#1A1A1A',
      subtext: '#66635D',
      priceColor: '#E05A47',
      btnClass: 'btn-pill-terracotta',
      badgeBg: '#F4F1EC',
      badgeText: '#1A1A1A'
    };
  };

  return (
    <section id="menu" style={{ padding: '80px 24px', backgroundColor: '#EAE6DF', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: '800',
            fontFamily: 'var(--font-heading)',
            color: '#E05A47',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            DELICIOUS SELECTIONS
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
            Explore Our Menu
          </h2>
          <p style={{ color: '#66635D', maxWidth: '600px', margin: '8px auto 0 auto', fontSize: '1rem' }}>
            Hover your cursor over any dish card to view instant enlarged details & customize portions, spice levels & add-ons!
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '16px 24px',
          borderRadius: '30px',
          boxShadow: 'var(--shadow-bento)',
          marginBottom: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', flex: '1 1 260px' }}>
            <Search size={18} color="#E05A47" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search Rajdhani Special Chicken, Paneer Khurchan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px 10px 42px',
                borderRadius: '30px',
                border: '1px solid #EAE6DF',
                outline: 'none',
                fontSize: '0.9rem',
                backgroundColor: '#F4F1EC',
                fontFamily: 'var(--font-body)'
              }}
            />
          </div>

          {/* Veg / Non-Veg Dietary Switch */}
          <div style={{ display: 'flex', gap: '6px', background: '#F4F1EC', padding: '4px', borderRadius: '30px' }}>
            <button
              onClick={() => setDietaryFilter('all')}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                fontSize: '0.85rem',
                fontWeight: '700',
                fontFamily: 'var(--font-heading)',
                cursor: 'pointer',
                backgroundColor: dietaryFilter === 'all' ? '#1A1A1A' : 'transparent',
                color: dietaryFilter === 'all' ? '#FFFFFF' : '#66635D',
                transition: 'all 0.2s ease'
              }}
            >
              All Dishes
            </button>

            <button
              onClick={() => setDietaryFilter('veg')}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                fontSize: '0.85rem',
                fontWeight: '700',
                fontFamily: 'var(--font-heading)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: dietaryFilter === 'veg' ? '#16A34A' : 'transparent',
                color: dietaryFilter === 'veg' ? '#FFFFFF' : '#16A34A',
                transition: 'all 0.2s ease'
              }}
            >
              <span className="badge-veg" style={{ borderColor: dietaryFilter === 'veg' ? '#FFF' : '#16A34A' }}>
                <span className="badge-veg-dot" style={{ backgroundColor: dietaryFilter === 'veg' ? '#FFF' : '#16A34A' }} />
              </span>
              Pure Veg
            </button>

            <button
              onClick={() => setDietaryFilter('non-veg')}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                fontSize: '0.85rem',
                fontWeight: '700',
                fontFamily: 'var(--font-heading)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: dietaryFilter === 'non-veg' ? '#DC2626' : 'transparent',
                color: dietaryFilter === 'non-veg' ? '#FFFFFF' : '#DC2626',
                transition: 'all 0.2s ease'
              }}
            >
              <span className="badge-nonveg" style={{ borderColor: dietaryFilter === 'non-veg' ? '#FFF' : '#DC2626' }}>
                <span className="badge-nonveg-dot" style={{ borderBottomColor: dietaryFilter === 'non-veg' ? '#FFF' : '#DC2626' }} />
              </span>
              Non-Veg
            </button>
          </div>

          {/* Sort Selector & WhatsApp Order CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', color: '#66635D', fontWeight: '600', fontFamily: 'var(--font-heading)' }}>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '20px',
                  border: '1px solid #EAE6DF',
                  backgroundColor: '#F4F1EC',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  fontFamily: 'var(--font-heading)',
                  color: '#1A1A1A',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Top Rated (★)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Hi Rajdhani Restaurant! 👋 I would like to place an order via WhatsApp.')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                padding: '8px 18px',
                borderRadius: '20px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: '800',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)'
              }}
            >
              <MessageCircle size={16} /> Quick Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          paddingBottom: '16px',
          marginBottom: '36px',
          scrollbarWidth: 'none'
        }}>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '30px',
                  border: isSelected ? 'none' : '1px solid rgba(26,26,26,0.1)',
                  backgroundColor: isSelected ? '#E05A47' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#1A1A1A',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  fontFamily: 'var(--font-heading)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 6px 15px rgba(224, 90, 71, 0.3)' : 'none'
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Bento Grid Menu Cards */}
        {filteredItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#FFFFFF', borderRadius: '28px' }}>
            <p style={{ fontSize: '1.2rem', color: '#66635D', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>
              No dishes found matching your search.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setDietaryFilter('all'); }}
              className="btn-pill-charcoal"
              style={{ marginTop: '16px' }}
            >
              Clear Search Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '28px'
          }}>
            {filteredItems.map((item, idx) => {
              const qty = getItemQuantity(item.id);
              const isFav = favorites.includes(item.id);
              const theme = getBentoStyle(idx, item.isChefSpecial);

              return (
                <div
                  key={item.id}
                  className="bento-card dish-hover-card"
                  onMouseEnter={() => handleMouseEnterCard(item)}
                  onMouseLeave={handleMouseLeaveCard}
                  style={{
                    backgroundColor: theme.bg,
                    color: theme.text,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Dish Image */}
                  <div style={{ position: 'relative', height: '210px', borderRadius: '20px', overflow: 'hidden', marginBottom: '20px' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                    />

                    {/* Top Badges Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      right: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      pointerEvents: 'none'
                    }}>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.92)', padding: '4px 6px', borderRadius: '6px' }}>
                          {item.isVeg ? (
                            <span className="badge-veg"><span className="badge-veg-dot" /></span>
                          ) : (
                            <span className="badge-nonveg"><span className="badge-nonveg-dot" /></span>
                          )}
                        </div>

                        {item.isChefSpecial && (
                          <span style={{
                            backgroundColor: theme.badgeBg,
                            color: theme.badgeText,
                            fontSize: '0.75rem',
                            fontWeight: '800',
                            fontFamily: 'var(--font-heading)',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            <Crown size={12} /> Signature
                          </span>
                        )}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => toggleFavorite(item.id, e)}
                        style={{
                          background: 'rgba(255, 255, 255, 0.92)',
                          border: 'none',
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          pointerEvents: 'auto'
                        }}
                      >
                        <Heart size={16} color={isFav ? '#DC2626' : '#1A1A1A'} fill={isFav ? '#DC2626' : 'none'} />
                      </button>
                    </div>

                    {/* Spice Indicators */}
                    {item.spiceLevel > 0 && (
                      <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '12px',
                        backgroundColor: 'rgba(26, 26, 26, 0.8)',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        fontSize: '0.75rem',
                        display: 'flex',
                        gap: '2px'
                      }}>
                        {Array.from({ length: item.spiceLevel }).map((_, i) => (
                          <span key={i}>🌶️</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Details Body */}
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.35rem',
                        fontWeight: '800',
                        lineHeight: 1.15
                      }}>
                        {item.name}
                      </h3>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        backgroundColor: 'rgba(0,0,0,0.06)',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        fontSize: '0.75rem',
                        fontWeight: '800'
                      }}>
                        <Star size={12} fill="#E5A653" color="#E5A653" />
                        <span>{item.rating}</span>
                      </div>
                    </div>

                    <p style={{
                      fontSize: '0.85rem',
                      color: theme.subtext,
                      lineHeight: 1.45,
                      marginBottom: '20px',
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {item.description}
                    </p>

                    {/* Footer Row */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '14px',
                      borderTop: `1px solid ${theme.bg === '#1A1A1A' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
                    }}>
                      <div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.5px' }}>PRICE</div>
                        <div style={{ fontSize: '1.3rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: theme.priceColor }}>
                          ₹{item.price}
                        </div>
                      </div>

                      <button
                        onClick={(e) => { e.stopPropagation(); setCustomizingItem(item); }}
                        className={theme.btnClass}
                        style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                      >
                        <SlidersHorizontal size={14} /> Customize
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* ENLARGED FLOATING AUTOMATIC HOVER POP-UP PANEL */}
        {activeHoverDish && (
          <div
            className="dish-popup-card"
            onMouseEnter={() => handleMouseEnterCard(activeHoverDish)}
            onMouseLeave={handleMouseLeaveCard}
            style={{
              position: 'fixed',
              bottom: '28px',
              right: '28px',
              width: 'min(480px, 92vw)',
              backgroundColor: '#FFFFFF',
              color: '#1A1A1A',
              borderRadius: '28px',
              padding: '24px',
              boxShadow: '0 24px 60px rgba(26, 26, 26, 0.35)',
              zIndex: 9999,
              border: '2px solid #E05A47',
              pointerEvents: 'auto',
              backdropFilter: 'blur(12px)'
            }}
          >
            {/* Pop-Up Header Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  backgroundColor: '#E05A47',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  fontFamily: 'var(--font-heading)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={12} /> HOVER DISH PREVIEW
                </span>

                <div style={{ backgroundColor: '#F4F1EC', padding: '4px 8px', borderRadius: '8px', display: 'inline-flex' }}>
                  {activeHoverDish.isVeg ? (
                    <span className="badge-veg"><span className="badge-veg-dot" /></span>
                  ) : (
                    <span className="badge-nonveg"><span className="badge-nonveg-dot" /></span>
                  )}
                </div>
              </div>

              <button
                onClick={() => setActiveHoverDish(null)}
                style={{
                  background: '#F4F1EC',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#1A1A1A'
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Large High-Res Dish Image */}
            <div style={{ position: 'relative', height: '220px', borderRadius: '20px', overflow: 'hidden', marginBottom: '16px' }}>
              <img
                src={activeHoverDish.image}
                alt={activeHoverDish.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {activeHoverDish.isChefSpecial && (
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: '#1A1A1A',
                  color: '#E5A653',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }}>
                  <Crown size={14} /> Rajdhani Chef Signature
                </span>
              )}

              {activeHoverDish.spiceLevel > 0 && (
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(26,26,26,0.85)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  color: '#FFF'
                }}>
                  {Array.from({ length: activeHoverDish.spiceLevel }).map((_, i) => (
                    <span key={i}>🌶️</span>
                  ))} Spiciness Level
                </div>
              )}
            </div>

            {/* Dish Title & Rating */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: '800',
                color: '#1A1A1A',
                lineHeight: 1.15
              }}>
                {activeHoverDish.name}
              </h3>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                backgroundColor: '#FDF4E7',
                color: '#E5A653',
                padding: '4px 10px',
                borderRadius: '14px',
                fontSize: '0.85rem',
                fontWeight: '800'
              }}>
                <Star size={14} fill="#E5A653" color="#E5A653" />
                <span>{activeHoverDish.rating} ({activeHoverDish.reviews} reviews)</span>
              </div>
            </div>

            {/* Full Multi-line Description */}
            <p style={{
              fontSize: '0.92rem',
              color: '#555555',
              lineHeight: 1.55,
              marginBottom: '20px',
              backgroundColor: '#F4F1EC',
              padding: '12px 16px',
              borderRadius: '16px'
            }}>
              {activeHoverDish.description}
            </p>

            {/* Price & Customize / Add Action */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '14px',
              borderTop: '1px solid #EAE6DF'
            }}>
              <div>
                <span style={{ fontSize: '0.7rem', color: '#66635D', textTransform: 'uppercase', letterSpacing: '0.5px' }}>PRICE</span>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#E05A47', fontFamily: 'var(--font-heading)' }}>
                  ₹{activeHoverDish.price}
                </div>
              </div>

              <button
                onClick={() => {
                  setCustomizingItem(activeHoverDish);
                  setActiveHoverDish(null);
                }}
                className="btn-pill-terracotta"
                style={{ padding: '12px 24px', fontSize: '0.95rem' }}
              >
                <SlidersHorizontal size={18} /> Customize & Add
              </button>
            </div>
          </div>
        )}

      </div>

      {/* DISH CUSTOMIZER MODAL */}
      <DishCustomizerModal
        item={customizingItem}
        isOpen={!!customizingItem}
        onClose={() => setCustomizingItem(null)}
        onAddToCart={onAddToCart}
        showToast={showToast}
      />
    </section>
  );
}
