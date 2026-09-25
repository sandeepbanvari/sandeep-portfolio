import React, { useState } from 'react';
import { ArrowRight, Code2, Terminal, Database, X } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Python RESTful API Architecture',
    tag: 'BACKEND',
    previewType: 'terminal',
    summary: 'Structuring modular backend services with Python, request validation, and JSON synchronization.',
    details: 'Focuses on designing scalable RESTful endpoints, separating controller logic from data models, and implementing input validation with structured exception handling.',
  },
  {
    id: 2,
    title: 'Reusable UI Systems in ReactJS',
    tag: 'FRONTEND',
    previewType: 'code',
    summary: 'Building state-driven design components with predictable props and responsive layouts.',
    details: 'Explores functional component composition, custom hooks for DOM events, and maintaining design tokens with CSS and utility classes.',
  },
  {
    id: 3,
    title: 'Relational Database Design with MySQL',
    tag: 'DATABASE',
    previewType: 'database',
    summary: 'Optimizing SQL schemas, indexing foreign keys, and managing data integrity.',
    details: 'Covers normalized table schemas, ACID transaction guarantees, and connecting client-side forms to persistent MySQL records.',
  },
];

export default function TechnicalArticles() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="articles" className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '64px', paddingBottom: '76px' }}>
      <div className="container">
        {/* Centered Heading */}
        <div className="section-title-center">
          <h2 className="section-title-orange" style={{ color: '#0F172A', marginBottom: '10px' }}>
            Technical Articles
          </h2>
          <p style={{ color: '#475569', fontSize: '0.95rem' }}>
            Insights and engineering perspectives on full-stack architecture, clean frontend code, and databases.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '26px',
            marginBottom: '32px',
          }}
        >
          {articles.map((item) => (
            <div
              key={item.id}
              className="theme-card"
              style={{
                padding: 0,
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 8px 25px rgba(15, 23, 42, 0.06)',
                transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#99F6E4';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 118, 110, 0.10)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.06)';
              }}
            >
              {/* Top Visual Graphic */}
              <div
                style={{
                  height: '140px',
                  backgroundColor: '#F8FAFC',
                  borderBottom: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  backgroundImage: 'radial-gradient(#E2E8F0 1.5px, transparent 1.5px)',
                  backgroundSize: '14px 14px',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '12px',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #99F6E4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F766E',
                    boxShadow: '0 4px 12px rgba(15, 118, 110, 0.08)',
                  }}
                >
                  {item.previewType === 'terminal' && <Terminal size={26} />}
                  {item.previewType === 'code' && <Code2 size={26} />}
                  {item.previewType === 'database' && <Database size={26} />}
                </div>

                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '14px',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    color: '#047857',
                    backgroundColor: '#ECFDF5',
                    border: '1px solid #A7F3D0',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Bottom Info Box */}
              <div
                style={{
                  padding: '22px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flex: 1,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
                    {item.summary}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(item)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    color: '#0F766E',
                    alignSelf: 'flex-start',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#115E59')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#0F766E')}
                >
                  <span>Read Breakdown</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Right "More →" Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={() => setSelectedArticle(articles[0])}
            className="btn-pill btn-pill-primary"
            style={{ padding: '8px 22px', fontSize: '0.85rem' }}
          >
            <span>More</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedArticle && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(15, 23, 42, 0.45)',
            backdropFilter: 'blur(6px)',
            padding: '20px',
          }}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '560px',
              width: '100%',
              border: '1px solid #E2E8F0',
              padding: '30px',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#F1F5F9',
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0F172A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              <X size={18} />
            </button>

            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#047857',
                backgroundColor: '#ECFDF5',
                border: '1px solid #A7F3D0',
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                display: 'inline-block',
                marginBottom: '10px',
              }}
            >
              {selectedArticle.tag}
            </span>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
              {selectedArticle.title}
            </h3>

            <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
              {selectedArticle.summary}
            </p>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '16px', marginBottom: '22px' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F766E', marginBottom: '6px' }}>
                Key Takeaways:
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6 }}>
                {selectedArticle.details}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="btn-pill btn-pill-primary"
              style={{ width: '100%', padding: '10px', fontSize: '0.88rem' }}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
