import React, { useState } from 'react';
import { INITIAL_REVIEWS } from '../data/menuData';
import { Star, MessageSquarePlus, Quote, X, ChevronDown, ChevronUp, ThumbsUp, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReviewsSection({ showToast }) {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newDish, setNewDish] = useState('');

  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) {
      showToast('Please fill in your name and review comment!');
      return;
    }

    const reviewObj = {
      id: `rev-${Date.now()}`,
      name: newName,
      rating: newRating,
      date: 'Just now',
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80`,
      comment: newComment,
      recommendedDish: newDish || 'Rajdhani Special Chicken'
    };

    setReviews([reviewObj, ...reviews]);
    setIsModalOpen(false);
    setNewName('');
    setNewComment('');
    setNewDish('');
    
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    showToast('Thank you! Your review has been published. 🎉');
  };

  return (
    <section id="reviews" style={{ padding: '80px 24px', backgroundColor: '#F4F1EC' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: '800',
            fontFamily: 'var(--font-heading)',
            color: '#E05A47',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            TESTIMONIALS & FEEDBACK
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
            What Dehradun Says About Us
          </h2>
          <p style={{ color: '#66635D', maxWidth: '560px', margin: '8px auto 0 auto', fontSize: '1rem' }}>
            Rated 4.9★ by over 1,250+ satisfied diners at our Seemadwar branch.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-pill-terracotta"
            style={{ marginTop: '20px' }}
          >
            <MessageSquarePlus size={18} /> Write a Review
          </button>
        </div>

        {/* Rating Summary Bar */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px 28px',
          borderRadius: '24px',
          boxShadow: 'var(--shadow-bento)',
          marginBottom: '36px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>4.9</div>
            <div>
              <div style={{ display: 'flex', gap: '2px', color: '#E5A653' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#E5A653" color="#E5A653" />
                ))}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#66635D', fontWeight: '600', marginTop: '2px' }}>
                Based on 1,250+ Google & Zomato Reviews
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Award size={28} color="#E05A47" />
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>
                Top Rated Restaurant
              </div>
              <div style={{ fontSize: '0.8rem', color: '#66635D' }}>Seemadwar & Indira Nagar Area</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ThumbsUp size={28} color="#16A34A" />
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>
                98% Recommendation
              </div>
              <div style={{ fontSize: '0.8rem', color: '#66635D' }}>Authentic Spices & Fresh Food</div>
            </div>
          </div>
        </div>

        {/* Reviews Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {visibleReviews.map((rev) => (
            <div
              key={rev.id}
              className="bento-card bento-white"
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <Quote size={32} color="rgba(224, 90, 71, 0.15)" style={{ position: 'absolute', top: '20px', right: '20px' }} />

              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="#E5A653" color="#E5A653" />
                ))}
              </div>

              {/* Comment */}
              <p style={{ fontSize: '0.9rem', color: '#1A1A1A', lineHeight: 1.5, marginBottom: '20px', fontStyle: 'italic', flexGrow: 1 }}>
                "{rev.comment}"
              </p>

              {/* Recommended Tag */}
              {rev.recommendedDish && (
                <div style={{
                  backgroundColor: '#F4F1EC',
                  color: '#E05A47',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  fontFamily: 'var(--font-heading)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  width: 'fit-content',
                  marginBottom: '16px'
                }}>
                  Recommended: {rev.recommendedDish}
                </div>
              )}

              {/* User Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '12px', borderTop: '1px solid #EAE6DF' }}>
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>{rev.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#66635D' }}>{rev.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {reviews.length > 6 && (
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-pill-charcoal"
              style={{ padding: '12px 28px', fontSize: '0.95rem' }}
            >
              {showAll ? (
                <>Show Fewer Reviews <ChevronUp size={18} /></>
              ) : (
                <>View All {reviews.length} Customer Reviews <ChevronDown size={18} /></>
              )}
            </button>
          </div>
        )}

      </div>

      {/* Review Modal */}
      {isModalOpen && (
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
            maxWidth: '460px',
            width: '100%',
            padding: '32px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            position: 'relative'
          }}>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <X size={20} color="#1A1A1A" />
            </button>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '6px' }}>
              Share Your Experience
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#66635D', marginBottom: '20px' }}>
              We value your feedback on Rajdhani Restaurant!
            </p>

            <form onSubmit={handleAddReview} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={modalLabelStyle}>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  style={modalInputStyle}
                />
              </div>

              <div>
                <label style={modalLabelStyle}>Rating</label>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      <Star size={22} fill={star <= newRating ? '#E5A653' : 'none'} color="#E5A653" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={modalLabelStyle}>Recommended Dish</label>
                <input
                  type="text"
                  placeholder="e.g. Rajdhani Special Chicken, Paneer Khurchan"
                  value={newDish}
                  onChange={(e) => setNewDish(e.target.value)}
                  style={modalInputStyle}
                />
              </div>

              <div>
                <label style={modalLabelStyle}>Your Review *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your meal or dining experience..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  style={{ ...modalInputStyle, resize: 'none' }}
                />
              </div>

              <button type="submit" className="btn-pill-terracotta" style={{ width: '100%', marginTop: '8px' }}>
                Submit Review 🎉
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

const modalLabelStyle = {
  fontSize: '0.8rem',
  fontWeight: '800',
  fontFamily: 'var(--font-heading)',
  color: '#1A1A1A',
  marginBottom: '4px',
  display: 'block'
};

const modalInputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '12px',
  border: '1px solid #EAE6DF',
  outline: 'none',
  fontSize: '0.85rem',
  backgroundColor: '#F4F1EC',
  fontFamily: 'var(--font-body)'
};
