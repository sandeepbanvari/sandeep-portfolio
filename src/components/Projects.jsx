import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Code2, ArrowRight, X, CheckCircle2, Info, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState(null);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Sophisticated Teal & Mint header themes
  const headerThemes = [
    { bg: '#0F766E', textColor: '#FFFFFF', iconColor: '#0F766E' },
    { bg: '#115E59', textColor: '#FFFFFF', iconColor: '#115E59' },
    { bg: '#0D9488', textColor: '#FFFFFF', iconColor: '#0D9488' },
    { bg: '#0F766E', textColor: '#FFFFFF', iconColor: '#0F766E' },
    { bg: '#14B8A6', textColor: '#FFFFFF', iconColor: '#14B8A6' },
  ];

  return (
    <section id="projects" className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '64px', paddingBottom: '76px' }}>
      <div className="container">
        {/* Centered Heading */}
        <div className="section-title-center">
          <h2 className="section-title-orange" style={{ color: '#0F172A', marginBottom: '10px' }}>
            Projects
          </h2>
          <p style={{ color: '#475569', fontSize: '0.95rem' }}>
            Featured full-stack applications, interactive web tools, and responsive interfaces.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '28px',
            marginBottom: '36px',
          }}
        >
          {displayedProjects.map((project, idx) => {
            const theme = headerThemes[idx % headerThemes.length];
            return (
              <div
                key={project.id}
                className="theme-card"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
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
                {/* Visual Header Block */}
                <div
                  style={{
                    backgroundColor: theme.bg,
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '160px',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: theme.textColor,
                      letterSpacing: '-0.01em',
                      marginBottom: '12px',
                    }}
                  >
                    {project.title}
                  </span>

                  {/* Graphic Mockup illustration inside card */}
                  <div
                    style={{
                      width: '72px',
                      height: '48px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '6px',
                      border: '1.5px solid rgba(255, 255, 255, 0.6)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '3px', marginBottom: '4px', alignSelf: 'flex-start', paddingLeft: '2px' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#0F766E' }} />
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#14B8A6' }} />
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#5EEAD4' }} />
                    </div>
                    <Code2 size={18} color="#0F766E" />
                  </div>
                </div>

                {/* Card Body */}
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
                    <p style={{ fontSize: '0.85rem', color: '#0F766E', fontWeight: 600, marginBottom: '6px' }}>
                      {project.subtitle}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, marginBottom: '14px' }}>
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: '0.725rem',
                            padding: '3px 9px',
                            borderRadius: '5px',
                            backgroundColor: '#ECFDF5',
                            color: '#047857',
                            border: '1px solid #A7F3D0',
                            fontWeight: 500,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '14px',
                      borderTop: '1px solid #F1F5F9',
                    }}
                  >
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.825rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          padding: '6px 14px',
                          borderRadius: 'var(--radius-pill)',
                          backgroundColor: '#0F766E',
                          boxShadow: '0 2px 8px rgba(15, 118, 110, 0.25)',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#115E59';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#0F766E';
                        }}
                      >
                        <ExternalLink size={14} color="#FFFFFF" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <div />
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      style={{
                        marginLeft: 'auto',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.825rem',
                        fontWeight: 700,
                        color: '#047857',
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: '#ECFDF5',
                        border: '1px solid #A7F3D0',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D1FAE5')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ECFDF5')}
                    >
                      <Info size={14} />
                      <span>Overview</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Right "More →" Pill Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="btn-pill btn-pill-primary"
            style={{ padding: '8px 22px', fontSize: '0.85rem' }}
          >
            <span>{showAll ? 'Show Less' : 'More'}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
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
          onClick={() => setActiveModalProject(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '560px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1px solid #E2E8F0',
              padding: '28px',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
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
              {activeModalProject.category}
            </span>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              {activeModalProject.title}
            </h3>

            <p style={{ color: '#0F766E', fontSize: '0.9rem', fontWeight: 600, marginBottom: '14px' }}>
              {activeModalProject.subtitle}
            </p>

            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
              {activeModalProject.description}
            </p>

            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
              Features:
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {activeModalProject.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#475569' }}>
                  <CheckCircle2 size={14} color="#0F766E" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {activeModalProject.liveDemo && (
                <a
                  href={activeModalProject.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill btn-pill-primary"
                  style={{ flex: 1, minWidth: '150px', padding: '10px 16px', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <ExternalLink size={16} />
                  <span>Live Deployed Demo</span>
                </a>
              )}
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noreferrer"
                className="btn-pill btn-pill-outline"
                style={{ flex: 1, minWidth: '150px', padding: '10px 16px', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <GithubIcon size={16} />
                <span>GitHub Repository</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="btn-pill"
                style={{ padding: '10px 18px', fontSize: '0.88rem', backgroundColor: '#F1F5F9', color: '#475569', borderRadius: 'var(--radius-pill)', cursor: 'pointer' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
