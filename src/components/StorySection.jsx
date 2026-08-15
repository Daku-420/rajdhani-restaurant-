import React from 'react';
import { ChefHat, ShieldCheck, Award, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function StorySection() {
  return (
    <section id="story" style={{ padding: '80px 24px', backgroundColor: '#EAE6DF' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="bento-card bento-white" style={{ padding: '48px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            {/* Left Image Bento Stack */}
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                  alt="Rajdhani Restaurant Atmosphere"
                  style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '24px' }}
                />
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                  alt="Rajdhani Kitchen Preparation"
                  style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '24px', marginTop: '24px' }}
                />
              </div>

              {/* Floating Terracotta Badge */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                backgroundColor: '#E05A47',
                color: '#FFFFFF',
                padding: '14px 24px',
                borderRadius: '24px',
                boxShadow: '0 10px 25px rgba(224, 90, 71, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Sparkles size={20} />
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: '800', fontFamily: 'var(--font-heading)', opacity: 0.9 }}>DEHRADUN LEGACY</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>ESTABLISHED 2012</div>
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: '800',
                fontFamily: 'var(--font-heading)',
                color: '#E05A47',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}>
                OUR HERITAGE & PASSION
              </span>

              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: '800',
                color: '#1A1A1A',
                letterSpacing: '-1px',
                margin: '8px 0 16px 0',
                lineHeight: 1.1
              }}>
                14+ Years of Culinary Tradition in Dehradun
              </h2>

              <p style={{ fontSize: '1rem', color: '#66635D', lineHeight: 1.6, marginBottom: '20px' }}>
                Established in 2012 along ITBP Road in Indira Nagar (Near Dainik Jagran Office), <strong>Rajdhani Restaurant</strong> was created with a passion to bring authentic North Indian, Punjabi, Mughlai, Chinese, and Rajasthani dining to Dehradun.
              </p>

              <p style={{ fontSize: '0.95rem', color: '#66635D', lineHeight: 1.6, marginBottom: '28px' }}>
                Our signature dishes—the legendary <strong>Rajdhani Special Chicken</strong> and masterfully spiced <strong>Paneer Khurchan</strong>—have earned us a place in the hearts of thousands of foodies.
              </p>

              {/* Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ backgroundColor: '#F4F1EC', padding: '16px', borderRadius: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <ChefHat size={24} color="#E05A47" />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>Secret Spice Blends</div>
                    <div style={{ fontSize: '0.75rem', color: '#66635D' }}>18-spice house marinade.</div>
                  </div>
                </div>

                <div style={{ backgroundColor: '#F4F1EC', padding: '16px', borderRadius: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <ShieldCheck size={24} color="#E05A47" />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>Fresh Daily Quality</div>
                    <div style={{ fontSize: '0.75rem', color: '#66635D' }}>Pure desi ghee & farm paneer.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
