import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const softSkillQuotes = [
  {
    quote: "Committed to delivering clean, scalable frontend architectures and responsive user experiences while working collaboratively in agile engineering environments.",
    author: "Banvari Sandeep",
    role: "Problem Solving & Quick Learning",
  },
  {
    quote: "Strong advocate for reusable UI components, clean code principles, and efficient REST API synchronization across the entire application stack.",
    author: "Banvari Sandeep",
    role: "Team Collaboration & Communication",
  },
  {
    quote: "Demonstrated adaptability during internships at RINL Vizag Steel Plant and Datavalley India, rapidly adopting new technologies and version control workflows.",
    author: "Banvari Sandeep",
    role: "Adaptability & Work Ethic",
  },
];

export default function SoftSkills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? softSkillQuotes.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === softSkillQuotes.length - 1 ? 0 : prev + 1));
  };

  const current = softSkillQuotes[currentIndex];

  return (
    <section
      style={{
        backgroundColor: '#F1F5F9',
        padding: '64px 0 76px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 800,
              color: '#0F172A',
              letterSpacing: '-0.01em',
              marginBottom: '6px',
            }}
          >
            Core Values & Philosophy
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', color: '#14B8A6' }}>
            <Quote size={36} />
          </div>
        </div>

        {/* Carousel Pill Card */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '18px',
          }}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous quote"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #CBD5E1',
              color: '#0F766E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.06)',
              flexShrink: 0,
              transition: 'transform 0.2s, background-color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.backgroundColor = '#F0FDFA';
              e.currentTarget.style.borderColor = '#99F6E4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.borderColor = '#CBD5E1';
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Central White Pill Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '36px',
              padding: '36px 36px 28px',
              textAlign: 'center',
              position: 'relative',
              boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
              border: '1px solid #E2E8F0',
              flex: 1,
            }}
          >
            {/* Top Avatar Ring on Card */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#0F766E',
                border: '3px solid #FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '-60px auto 14px',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.85rem',
                boxShadow: '0 4px 14px rgba(15, 118, 110, 0.3)',
              }}
            >
              BS
            </div>

            <p
              style={{
                fontSize: '0.975rem',
                lineHeight: 1.7,
                color: '#0F172A',
                marginBottom: '16px',
                fontStyle: 'italic',
              }}
            >
              "{current.quote}"
            </p>

            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#0F766E',
                marginBottom: '2px',
              }}
            >
              {current.author}
            </h4>

            <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
              {current.role}
            </p>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next quote"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #CBD5E1',
              color: '#0F766E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.06)',
              flexShrink: 0,
              transition: 'transform 0.2s, background-color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.backgroundColor = '#F0FDFA';
              e.currentTarget.style.borderColor = '#99F6E4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.borderColor = '#CBD5E1';
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
