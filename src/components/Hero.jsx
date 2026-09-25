import React from 'react';
import { Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import profileImg from '../assets/Sandeep_Portfolio.png';

export default function Hero({ onOpenResume }) {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: '#F8FAFC',
      }}
      className="hero-fullscreen"
    >
      {/* ==================================================
          LEFT ACCENT PANEL (Sleek ~28% mint/teal accent light width)
          ================================================== */}
      <div
        style={{
          width: '28%',
          minWidth: '260px',
          backgroundColor: '#CCFBF1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px 36px',
          position: 'relative',
          zIndex: 1,
          boxSizing: 'border-box',
          borderRight: '1px solid #99F6E4',
        }}
        className="hero-left-panel"
      >
        {/* Top Left: Signature Script Logo in Dark Teal */}
        <div>
          <span
            style={{
              fontFamily: 'var(--font-signature)',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#0F766E',
              letterSpacing: '0.5px',
              display: 'inline-block',
              lineHeight: 1,
            }}
          >
            Banvari Sandeep
          </span>
        </div>

        {/* Bottom Left: Social Icons Row in Dark Teal */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
          className="hero-social-row"
        >
          <a
            href="https://www.linkedin.com/in/sandeep-banvari/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            style={{
              color: '#0F766E',
              transition: 'transform 0.2s, color 0.2s',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.color = '#115E59';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.color = '#0F766E';
            }}
          >
            <LinkedinIcon size={22} />
          </a>

          <a
            href="https://github.com/sandeepbanvari"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            style={{
              color: '#0F766E',
              transition: 'transform 0.2s, color 0.2s',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.color = '#115E59';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.color = '#0F766E';
            }}
          >
            <GithubIcon size={22} />
          </a>

          <a
            href="mailto:sandeepbanvari2004@gmail.com"
            aria-label="Email Banvari Sandeep"
            style={{
              color: '#0F766E',
              transition: 'transform 0.2s, color 0.2s',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.color = '#115E59';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.color = '#0F766E';
            }}
          >
            <Mail size={22} />
          </a>

          {/* Twitter / X SVG Icon */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter Profile"
            style={{
              color: '#0F766E',
              transition: 'transform 0.2s, color 0.2s',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.color = '#115E59';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.color = '#0F766E';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Code / Portfolio Icon */}
          <a
            href="#projects"
            aria-label="Projects"
            style={{
              color: '#0F766E',
              transition: 'transform 0.2s, color 0.2s',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.color = '#115E59';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.color = '#0F766E';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* ==================================================
          RIGHT PANEL (Expansive 72% width on desktop in #F8FAFC)
          ================================================== */}
      <div
        style={{
          width: '72%',
          flex: 1,
          backgroundColor: '#F8FAFC',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '60px 80px 60px 220px',
          position: 'relative',
          zIndex: 1,
          boxSizing: 'border-box',
        }}
        className="hero-right-panel"
      >
        {/* Content Box */}
        <div style={{ maxWidth: '560px', width: '100%' }}>
          <span
            style={{
              fontSize: '1.15rem',
              fontWeight: 600,
              color: '#0F766E',
              display: 'block',
              marginBottom: '10px',
              letterSpacing: '0.01em',
            }}
          >
            Python Full-Stack Developer
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 3.8vw, 3.6rem)',
              fontWeight: 800,
              color: '#0F172A',
              lineHeight: 1.15,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}
            className="hero-title"
          >
            Banvari Sandeep
          </h1>

          <p
            style={{
              fontSize: '0.975rem',
              color: '#475569',
              lineHeight: 1.7,
              marginBottom: '34px',
            }}
          >
            Computer Science Engineering graduate with strong knowledge in Full Stack Development and Frontend Development. Skilled in building responsive web applications and reusable UI components.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', alignItems: 'center' }}>
            {/* Secondary CTA: Download CV */}
            <button
              type="button"
              onClick={onOpenResume}
              className="btn-pill"
              style={{
                border: '1px solid #0F766E',
                color: '#0F766E',
                backgroundColor: '#FFFFFF',
                padding: '12px 32px',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: '9999px',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F0FDFA';
                e.currentTarget.style.color = '#115E59';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#0F766E';
              }}
            >
              <span>Download CV</span>
            </button>

            {/* Primary CTA: Contact */}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="btn-pill"
              style={{
                backgroundColor: '#0F766E',
                color: '#FFFFFF',
                padding: '12px 36px',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: '9999px',
                boxShadow: '0 4px 14px rgba(15, 118, 110, 0.25)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#115E59';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 118, 110, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0F766E';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(15, 118, 110, 0.25)';
              }}
            >
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* ==================================================
          CENTER OVERLAPPING CIRCULAR PROFILE PHOTO
          Sits at 28% split seam, diameter 310px
          Decorative subtle mint/teal glow (#CCFBF1)
          ================================================== */}
      <div
        style={{
          position: 'absolute',
          left: '28%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '310px',
          height: '310px',
          borderRadius: '50%',
          overflow: 'hidden',
          zIndex: 10,
          boxShadow: '0 0 45px 12px #CCFBF1, 0 16px 36px rgba(15, 23, 42, 0.08)',
          border: '4px solid #FFFFFF',
          backgroundColor: '#FFFFFF',
        }}
        className="hero-center-avatar"
      >
        <img
          src={profileImg}
          alt="Banvari Sandeep - Python Full-Stack Developer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* Responsive Breakpoint Styles */}
      <style>{`
        @media (max-width: 1200px) {
          .hero-title {
            white-space: normal !important;
          }
          .hero-right-panel {
            padding-left: 190px !important;
          }
        }
        @media (max-width: 960px) {
          .hero-fullscreen {
            flex-direction: column !important;
            min-height: auto !important;
          }
          .hero-left-panel {
            width: 100% !important;
            padding: 36px 24px !important;
          }
          .hero-center-avatar {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            margin: -60px auto 20px !important;
            width: 240px !important;
            height: 240px !important;
          }
          .hero-right-panel {
            width: 100% !important;
            padding: 30px 24px 60px !important;
            text-align: center !important;
            align-items: center !important;
          }
          .hero-right-panel .btn-pill {
            margin: 0 auto;
          }
          .hero-right-panel div[style*="display: flex"] {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
