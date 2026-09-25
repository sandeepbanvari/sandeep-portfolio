import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Who I am', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#certifications' },
  { name: 'Services', href: '#services' },
  { name: 'Contacts', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Right Hamburger Menu Icon with POSITION: FIXED */}
      <div
        style={{
          position: 'fixed',
          top: '32px',
          right: '48px',
          zIndex: 90,
        }}
        className="navbar-top-right"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#0F172A',
            cursor: 'pointer',
            padding: '0',
            transition: 'transform 0.2s, opacity 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.color = '#0F766E';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#0F172A';
          }}
        >
          {isOpen ? (
            <X size={32} color="#0F172A" strokeWidth={2.4} />
          ) : (
            <Menu size={32} color="#0F172A" strokeWidth={2.4} />
          )}
        </button>
      </div>

      {/* Slide-out Menu Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '320px',
            maxWidth: '85vw',
            backgroundColor: '#FFFFFF',
            borderLeft: '1.5px solid #E2E8F0',
            padding: '36px 28px',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '-10px 0 35px rgba(15, 23, 42, 0.12)',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px' }}>
              <span style={{ fontFamily: 'var(--font-signature)', fontSize: '2.2rem', color: '#0F766E' }}>
                Banvari Sandeep
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  color: '#64748B',
                  padding: '6px',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0F172A')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
              >
                <X size={24} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#0F172A',
                    padding: '8px 0',
                    borderBottom: '1px solid #F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0F766E')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#0F172A')}
                >
                  <span>{link.name}</span>
                  <span style={{ color: '#14B8A6', fontSize: '0.85rem' }}>→</span>
                </a>
              ))}
            </nav>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onOpenResume();
            }}
            className="btn-pill"
            style={{
              width: '100%',
              marginTop: '24px',
              backgroundColor: '#0F766E',
              color: '#FFFFFF',
              borderRadius: '9999px',
              padding: '12px',
              fontWeight: 600,
              boxShadow: '0 4px 14px rgba(15, 118, 110, 0.25)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#115E59')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0F766E')}
          >
            <Download size={16} />
            <span>Download Resume</span>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .navbar-top-right {
            top: 20px !important;
            right: 20px !important;
          }
        }
      `}</style>
    </>
  );
}
