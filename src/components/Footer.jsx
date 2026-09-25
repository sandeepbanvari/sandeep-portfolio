import React from 'react';
import { Heart, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0F2926',
        borderTop: '1px solid #133D39',
        padding: '36px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <p
          style={{
            fontSize: '0.875rem',
            color: '#A7C4BF',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            margin: 0,
          }}
        >
          <span>Made with</span>
          <Heart size={14} color="#14B8A6" fill="#14B8A6" />
          <span style={{ color: '#FFFFFF', fontWeight: 600 }}>by Banvari Sandeep</span>
          <span style={{ color: '#A7C4BF', opacity: 0.8 }}>• © 2026</span>
        </p>

        {/* Back to top / Globe icon on right */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            position: 'absolute',
            right: '24px',
            color: '#FFFFFF',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'color 0.2s, transform 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#5EEAD4';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <Globe size={18} />
        </button>
      </div>
    </footer>
  );
}
