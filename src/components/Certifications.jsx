import React from 'react';
import { Link } from 'react-router-dom';
import { certifications } from '../data/certifications';
import CertificationIcon from './CertificationIcon';
import { Award, ShieldCheck, ArrowRight, Calendar, Building2 } from 'lucide-react';

export default function Certifications() {
  // Show only 2 featured certifications on Home page: RINL and Datavalley
  const displayedCertifications = certifications.filter(
    (c) => c.issuer.includes('RINL') || c.issuer.includes('Datavalley')
  );

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
              Certifications & Achievements
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: '#0F172A',
                lineHeight: 1.8,
                marginBottom: '18px',
              }}
            >
              Accredited and certified by premier industrial companies, tech organizations, and state skill development bodies through intensive hands-on development programs.
            </p>

            <p
              style={{
                fontSize: '0.925rem',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '28px',
              }}
            >
              Proven credentials spanning core Python programming, full-stack web engineering, modern React applications, Generative AI tools, and professional aptitude.
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
              <span>Verified Industry Credentials ({certifications.length} Total)</span>
            </div>
          </div>

          {/* Right Column: Featured Cards + More Button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {displayedCertifications.map((cert) => (
              <div
                key={cert.id}
                className="theme-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '18px',
                  padding: '20px 22px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 8px 25px rgba(15, 23, 42, 0.06)',
                  transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#99F6E4';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 118, 110, 0.10)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.06)';
                }}
              >
                {/* Left Icon Badge */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#ECFDF5',
                    border: '1.5px solid #A7F3D0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F766E',
                    flexShrink: 0,
                  }}
                >
                  <CertificationIcon iconType={cert.iconType} size={22} color="#0F766E" />
                </div>

                {/* Center Content info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                    <span
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        color: '#0F766E',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Building2 size={12} />
                      <span>{cert.issuer}</span>
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#94A3B8' }}>•</span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: '#64748B',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '3px',
                      }}
                    >
                      <Calendar size={11} />
                      <span>{cert.date}</span>
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '6px',
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.title}
                  </h3>

                  <p style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 1.45, marginBottom: '8px' }}>
                    {cert.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {cert.skillsGained.slice(0, 3).map((skill) => (
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
                    {cert.skillsGained.length > 3 && (
                      <span
                        style={{
                          fontSize: '0.7rem',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          backgroundColor: '#F1F5F9',
                          color: '#64748B',
                        }}
                      >
                        +{cert.skillsGained.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Right thumbnail badge box */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
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
                  <Award size={24} />
                  <span style={{ fontSize: '0.625rem', fontWeight: 800, marginTop: '2px', color: '#0F766E' }}>
                    VERIFIED
                  </span>
                </div>
              </div>
            ))}

            {/* Bottom Right "More →" Pill Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
              <Link
                to="/certificates"
                className="btn-pill btn-pill-primary"
                style={{
                  padding: '9px 24px',
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>More</span>
                <ArrowRight size={15} />
              </Link>
            </div>
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
