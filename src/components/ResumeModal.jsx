import React from 'react';
import { X, Printer } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
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
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
          border: '1px solid #E2E8F0',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>
              Resume Preview
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#475569' }}>Banvari Sandeep • Python Full-Stack Developer</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              onClick={handlePrint}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: '#ECFDF5',
                color: '#047857',
                border: '1px solid #A7F3D0',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Printer size={15} />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#475569',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div
          style={{
            padding: '32px',
            overflowY: 'auto',
            fontSize: '0.925rem',
            lineHeight: 1.6,
            color: '#0F172A',
          }}
        >
          {/* Resume Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px', paddingBottom: '20px', borderBottom: '2px solid #E2E8F0' }}>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '8px', color: '#0F172A' }}>
              BANVARI SANDEEP
            </h1>
            <p style={{ color: '#475569', fontSize: '0.9rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <span>📞 +91 7396541134</span>
              <span>✉️ sandeepbanvari2004@gmail.com</span>
              <a
                href="https://github.com/sandeepbanvari"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#0F766E', textDecoration: 'none', fontWeight: 600 }}
              >
                🔗 github.com/sandeepbanvari
              </a>
              <a
                href="https://www.linkedin.com/in/sandeep-banvari/"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#0F766E', textDecoration: 'none', fontWeight: 600 }}
              >
                💼 linkedin.com/in/sandeep-banvari
              </a>
              <span>📍 India</span>
            </p>
          </div>

          {/* Career Objective */}
          <div style={{ marginBottom: '22px' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: '#0F766E', textTransform: 'uppercase', marginBottom: '8px', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px' }}>
              Career Objective
            </h4>
            <p style={{ color: '#475569', fontSize: '0.92rem' }}>
              Computer Science Engineering student with strong knowledge in Full Stack Development, Frontend Development, ReactJS, JavaScript, Python, HTML5, CSS3, Bootstrap, and Tailwind CSS. Skilled in building responsive web applications and reusable UI components. Seeking an entry-level Software Developer opportunity to apply technical, analytical, and problem-solving skills in a collaborative environment.
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '22px' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: '#0F766E', textTransform: 'uppercase', marginBottom: '8px', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px' }}>
              Technical Skills
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px', fontSize: '0.88rem', color: '#475569' }}>
              <div><strong style={{ color: '#0F172A' }}>Languages:</strong> Python, JavaScript</div>
              <div><strong style={{ color: '#0F172A' }}>Frontend:</strong> ReactJS, HTML5, CSS3, Tailwind, Bootstrap</div>
              <div><strong style={{ color: '#0F172A' }}>Backend & DB:</strong> Python, SQL, MySQL</div>
              <div><strong style={{ color: '#0F172A' }}>Tools:</strong> Git, GitHub, VS Code</div>
            </div>
          </div>

          {/* Internships */}
          <div style={{ marginBottom: '22px' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: '#0F766E', textTransform: 'uppercase', marginBottom: '10px', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px' }}>
              Internship Experience
            </h4>
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                <span style={{ color: '#0F172A' }}>Full Stack Development Intern</span>
                <span style={{ color: '#0F766E' }}>RINL Vizag Steel Plant</span>
              </div>
              <ul style={{ paddingLeft: '20px', marginTop: '6px', color: '#475569', fontSize: '0.88rem' }}>
                <li>Built responsive web pages using HTML5, CSS3, JavaScript, and Bootstrap.</li>
                <li>Connected frontend interfaces with backend services using REST APIs, improving performance and synchronization.</li>
                <li>Increased application usability through responsive layouts and UI optimization.</li>
              </ul>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                <span style={{ color: '#0F172A' }}>Web & App Development Intern</span>
                <span style={{ color: '#0F766E' }}>Datavalley India Pvt. Ltd.</span>
              </div>
              <ul style={{ paddingLeft: '20px', marginTop: '6px', color: '#475569', fontSize: '0.88rem' }}>
                <li>Generated responsive web interfaces and reusable UI components using ReactJS.</li>
                <li>Designed frontend layouts and interactive portfolio pages using modern web technologies.</li>
                <li>Strengthened GitHub workflow, version control, and collaborative development skills.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: '#0F766E', textTransform: 'uppercase', marginBottom: '10px', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px' }}>
              Education
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#475569' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span><strong style={{ color: '#0F172A' }}>B.Tech – Computer Science Engineering</strong>, Krishna University</span>
                <span style={{ fontWeight: 600, color: '#047857' }}>2022 – 2026 | CGPA: 7.26</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span><strong style={{ color: '#0F172A' }}>Intermediate – MPC</strong>, SAV & NVJR Junior College</span>
                <span style={{ fontWeight: 600, color: '#047857' }}>2020 – 2022 | 59.7%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span><strong style={{ color: '#0F172A' }}>SSC</strong>, Zilla Parishad High School</span>
                <span style={{ fontWeight: 600, color: '#047857' }}>2019 – 2020 | 87.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
