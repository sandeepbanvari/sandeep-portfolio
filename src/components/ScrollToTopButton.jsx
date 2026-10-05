import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show arrow button after scrolling/swiping down more than 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        border: '1px solid #CBD5E1',
        color: '#0F766E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.12)',
        zIndex: 90,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease, background-color 0.2s, color 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
        e.currentTarget.style.backgroundColor = '#0F766E';
        e.currentTarget.style.color = '#FFFFFF';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 118, 110, 0.35)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.backgroundColor = '#FFFFFF';
        e.currentTarget.style.color = '#0F766E';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.12)';
      }}
    >
      <ArrowUp size={22} color="currentColor" strokeWidth={2.6} />
    </button>
  );
}
