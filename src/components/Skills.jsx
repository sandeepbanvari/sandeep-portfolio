import React from 'react';
import { skills } from '../data/skills';
import {
  FileCode2,
  Code2,
  Atom,
  Layout,
  Palette,
  Sparkles,
  Layers,
  Database,
  Server,
  Cpu,
  Smartphone,
  Component,
  Boxes,
  GitBranch,
  Terminal,
} from 'lucide-react';
import { GithubIcon } from './Icons';

const iconMap = {
  FileCode2,
  Code2,
  Atom,
  Layout,
  Palette,
  Sparkles,
  Layers,
  Database,
  Server,
  Cpu,
  Smartphone,
  Component,
  Boxes,
  GitBranch,
  Github: GithubIcon,
  Terminal,
};

export default function Skills() {
  // Split skills into two balanced rows for the moving marquee effect
  const half = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, half);
  const row2 = skills.slice(half);

  // Duplicate for seamless 100% infinite marquee loop
  const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

  const renderSkillCard = (skill, index) => {
    const IconComponent = iconMap[skill.icon] || Code2;
    return (
      <div
        key={`${skill.technology}-${index}`}
        className="skill-card-marquee"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 16px',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #E2E8F0',
          boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
          textAlign: 'center',
          width: '145px',
          minWidth: '145px',
          height: '125px',
          flexShrink: 0,
          transition: 'all 0.25s ease',
          cursor: 'default',
        }}
      >
        <div
          style={{
            color: '#0F766E',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '38px',
            height: '38px',
          }}
        >
          <IconComponent size={26} />
        </div>

        <span
          style={{
            fontSize: '0.825rem',
            fontWeight: 700,
            color: '#0F172A',
            lineHeight: 1.25,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '125px',
          }}
        >
          {skill.technology}
        </span>

        <span
          style={{
            fontSize: '0.675rem',
            color: '#64748B',
            marginTop: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          {skill.group.split(' ')[0]}
        </span>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="section"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '64px',
        paddingBottom: '80px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Centered Heading */}
        <div className="section-title-center">
          <h2 className="section-title-orange" style={{ color: '#0F172A', marginBottom: '10px' }}>
            Skills
          </h2>
          <p style={{ color: '#475569', fontSize: '0.95rem' }}>
            Technologies, frameworks, and tools I use to design and build full-stack web applications.
          </p>
        </div>
      </div>

      {/* Infinite Moving Marquee Container */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          position: 'relative',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
        className="marquee-wrapper"
      >
        {/* Row 1 - Moving Smoothly to the Left */}
        <div className="marquee-track marquee-track-left">
          {marqueeRow1.map((skill, index) => renderSkillCard(skill, index))}
        </div>

        {/* Row 2 - Moving Smoothly to the Right */}
        <div className="marquee-track marquee-track-right">
          {marqueeRow2.map((skill, index) => renderSkillCard(skill, index))}
        </div>
      </div>

      {/* CSS Animation Keyframes for Continuous Smooth Movement */}
      <style>{`
        .marquee-track {
          display: flex;
          gap: 18px;
          width: max-content;
          will-change: transform;
        }

        .marquee-track-left {
          animation: scrollLeft 32s linear infinite;
        }

        .marquee-track-right {
          animation: scrollRight 32s linear infinite;
        }

        /* Pause on Hover */
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        .skill-card-marquee:hover {
          border-color: #99F6E4 !important;
          background-color: #F0FDFA !important;
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 10px 24px rgba(15, 118, 110, 0.12) !important;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
