import React from 'react';
import { AboutIllustration } from './Illustrations';
import { Code, Layers, Smartphone, Lightbulb } from 'lucide-react';

const highlightItems = [
  { title: 'Frontend Development', icon: Code, desc: 'ReactJS, JavaScript, HTML5, CSS3' },
  { title: 'Full Stack Development', icon: Layers, desc: 'Python, REST APIs & MySQL' },
  { title: 'Responsive UI', icon: Smartphone, desc: 'Mobile-first design with Tailwind & Bootstrap' },
  { title: 'Problem Solving', icon: Lightbulb, desc: 'OOP, logic building & data management' },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ paddingTop: '64px', paddingBottom: '72px', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Heading & Content */}
          <div>
            <h2 className="section-title-orange" style={{ color: '#0F172A', marginBottom: '20px' }}>
              Who I am
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#0F172A',
                lineHeight: 1.8,
                marginBottom: '20px',
              }}
            >
              Computer Science Engineering graduate with strong knowledge in Full Stack Development, Frontend Development, ReactJS, JavaScript, Python, HTML5, CSS3, Bootstrap and Tailwind CSS.
            </p>

            <p
              style={{
                fontSize: '0.95rem',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Seeking an entry-level Software Developer opportunity to apply technical, analytical, and problem-solving skills in a collaborative environment. Passionate about building modular UI components, high-performance dashboards, and robust backend integrations.
            </p>

            {/* Four Highlight Cards Mapped */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '14px',
              }}
            >
              {highlightItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: 'var(--radius-md)',
                      padding: '16px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#99F6E4';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(15, 118, 110, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(15, 23, 42, 0.04)';
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: '#ECFDF5',
                        color: '#0F766E',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.75rem', color: '#64748B' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Flat Illustration (hidden in responsive) */}
          <div className="responsive-hide-illustration" style={{ display: 'flex', justifyContent: 'center' }}>
            <AboutIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
