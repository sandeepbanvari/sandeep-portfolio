import React from 'react';
import { services } from '../data/services';
import { Layout, Atom, FileCode2, Smartphone, Component, Network } from 'lucide-react';

const iconMap = {
  Layout,
  Atom,
  FileCode2,
  Smartphone,
  Component,
  Network,
};

export default function Services() {
  return (
    <section id="services" className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '64px', paddingBottom: '76px' }}>
      <div className="container">
        {/* Centered Heading */}
        <div className="section-title-center">
          <h2 className="section-title-orange" style={{ color: '#0F172A', marginBottom: '10px' }}>
            Services
          </h2>
          <p style={{ color: '#475569', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
            High-quality software engineering capabilities focused on responsiveness, scalability, and clean UI architecture.
          </p>
        </div>

        {/* White Square Cards - ONLY ONE ROW */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px',
            maxWidth: '1100px',
            margin: '0 auto',
            width: '100%',
          }}
          className="services-single-row"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Layout;
            return (
              <div
                key={service.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid #E2E8F0',
                  padding: '24px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: '#0F172A',
                  boxShadow: '0 8px 25px rgba(15, 23, 42, 0.06)',
                  transition: 'transform 0.25s, box-shadow 0.25s, background-color 0.25s, border-color 0.25s',
                  cursor: 'default',
                  minHeight: '135px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.backgroundColor = '#F0FDFA';
                  e.currentTarget.style.borderColor = '#99F6E4';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 118, 110, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.06)';
                }}
              >
                <div style={{ marginBottom: '12px' }}>
                  <IconComponent size={26} color="#0F766E" strokeWidth={2.2} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: '#0F172A',
                    margin: 0,
                  }}
                >
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive One-Row Styling */}
      <style>{`
        @media (max-width: 900px) {
          .services-single-row {
            display: flex !important;
            overflow-x: auto !important;
            padding-bottom: 12px !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
          }
          .services-single-row::-webkit-scrollbar {
            height: 6px;
          }
          .services-single-row::-webkit-scrollbar-thumb {
            background: #99F6E4;
            border-radius: 4px;
          }
          .services-single-row > div {
            min-width: 140px !important;
            flex-shrink: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
