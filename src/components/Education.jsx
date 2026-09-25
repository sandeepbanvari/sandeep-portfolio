import React from 'react';
import { education } from '../data/education';
import { EducationIllustration } from './Illustrations';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const icons = [GraduationCap, BookOpen, Award];

export default function Education() {
  return (
    <section id="education" className="section" style={{ backgroundColor: '#F1F5F9', paddingTop: '64px', paddingBottom: '72px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
          className="education-grid"
        >
          {/* Left Column: Heading & Stacked Horizontal Cards */}
          <div>
            <h2 className="section-title-orange" style={{ color: '#0F172A', marginBottom: '24px' }}>
              Education
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {education.map((item, index) => {
                const IconComp = icons[index % icons.length];
                return (
                  <div
                    key={item.id}
                    className="theme-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '20px 24px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 8px 25px rgba(15, 23, 42, 0.06)',
                    }}
                  >
                    {/* Teal Circular Badge on the Left */}
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
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
                      <IconComp size={22} />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                          marginBottom: '4px',
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            color: '#0F172A',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {item.degree}
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
                          {item.score}
                        </span>
                      </div>

                      <p style={{ fontSize: '0.875rem', color: '#475569', marginBottom: '4px' }}>
                        {item.institution}
                      </p>

                      <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
                        {item.period} • {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Flat Illustration (hidden in responsive) */}
          <div className="responsive-hide-illustration" style={{ display: 'flex', justifyContent: 'center' }}>
            <EducationIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
