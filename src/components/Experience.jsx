import React from 'react';
import { experience } from '../data/experience';
import { ExperienceIllustration } from './Illustrations';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ backgroundColor: '#F8FAFC', paddingTop: '64px', paddingBottom: '76px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
          className="experience-grid"
        >
          {/* Left Column: Developer Workstation Illustration (hidden in responsive) */}
          <div className="responsive-hide-illustration" style={{ display: 'flex', justifyContent: 'center' }}>
            <ExperienceIllustration />
          </div>

          {/* Right Column: Heading on right + Experience Cards */}
          <div>
            <h2 className="section-title-orange" style={{ color: '#0F172A', marginBottom: '24px' }}>
              Experience
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {experience.map((item) => (
                <div
                  key={item.id}
                  className="theme-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    borderRadius: 'var(--radius-lg)',
                    padding: '22px 26px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 8px 25px rgba(15, 23, 42, 0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Circular Teal Badge */}
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        backgroundColor: '#ECFDF5',
                        color: '#0F766E',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1px solid #99F6E4',
                      }}
                    >
                      <Briefcase size={20} />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            color: '#0F172A',
                          }}
                        >
                          {item.role}
                        </h3>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: '#047857',
                            backgroundColor: '#ECFDF5',
                            border: '1px solid #A7F3D0',
                            padding: '3px 10px',
                            borderRadius: 'var(--radius-pill)',
                            flexShrink: 0,
                          }}
                        >
                          {item.period}
                        </span>
                      </div>

                      <p style={{ fontSize: '0.9rem', color: '#0F766E', fontWeight: 600 }}>
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '4px 0 0 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {item.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '0.85rem',
                          color: '#475569',
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          color="#0F766E"
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.72rem',
                          padding: '3px 10px',
                          borderRadius: '6px',
                          backgroundColor: '#ECFDF5',
                          color: '#047857',
                          border: '1px solid #A7F3D0',
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
