import React from 'react';
import { certifications } from '../data/certifications';
import { Award, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ backgroundColor: '#F1F5F9', paddingTop: '64px', paddingBottom: '76px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 0.9fr) minmax(320px, 1.1fr)',
            gap: '48px',
            alignItems: 'center',
          }}
          className="achievements-grid"
        >
          {/* Left Column: Heading & Narrative */}
          <div>
            <h2 className="section-title-orange" style={{ color: '#0F172A', marginBottom: '18px' }}>
              Achievements
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: '#0F172A',
                lineHeight: 1.8,
                marginBottom: '18px',
              }}
            >
              Certified by premier industrial and software organizations through intensive hands-on development programs.
            </p>

            <p
              style={{
                fontSize: '0.925rem',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '28px',
              }}
            >
              Validated expertise in building responsive single-page interfaces, optimizing database operations with MySQL, and integrating frontend components with Python RESTful microservices.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: '#ECFDF5',
                border: '1px solid #A7F3D0',
                color: '#047857',
                fontSize: '0.85rem',
                fontWeight: 700,
              }}
            >
              <ShieldCheck size={16} />
              <span>Verified Industry Credentials</span>
            </div>
          </div>

          {/* Right Column: Stacked Cards with Thumbnails on the Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="theme-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px',
                  padding: '20px 24px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 8px 25px rgba(15, 23, 42, 0.06)',
                }}
              >
                {/* Left content info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      color: '#0F766E',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    {cert.issuer}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '6px',
                    }}
                  >
                    {cert.title}
                  </h3>

                  <p style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 1.45, marginBottom: '8px' }}>
                    {cert.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {cert.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: '0.7rem',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          backgroundColor: '#ECFDF5',
                          color: '#047857',
                          border: '1px solid #A7F3D0',
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right thumbnail badge box */}
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '12px',
                    backgroundColor: '#F0FDFA',
                    border: '1.5px solid #99F6E4',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F766E',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(15, 118, 110, 0.08)',
                  }}
                >
                  <Award size={26} />
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, marginTop: '2px', color: '#0F766E' }}>
                    VERIFIED
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .achievements-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
