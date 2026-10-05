import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { certifications, certificationCategories } from '../data/certifications';
import CertificationIcon from '../components/CertificationIcon';
import {
  ArrowLeft,
  Search,
  X,
  ShieldCheck,
  Calendar,
  Building2,
  Sparkles,
  SlidersHorizontal,
  FileText
} from 'lucide-react';
import Footer from '../components/Footer';

export default function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: certifications.length };
    certifications.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered certifications
  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory =
        selectedCategory === 'All' || cert.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesTitle = cert.title.toLowerCase().includes(query);
      const matchesIssuer = cert.issuer.toLowerCase().includes(query);
      const matchesDate = cert.date.toLowerCase().includes(query);
      const matchesDesc = cert.description.toLowerCase().includes(query);
      const matchesType = cert.type.toLowerCase().includes(query);
      const matchesSkills = cert.skillsGained.some((skill) =>
        skill.toLowerCase().includes(query)
      );

      return (
        matchesCategory &&
        (matchesTitle ||
          matchesIssuer ||
          matchesDate ||
          matchesDesc ||
          matchesType ||
          matchesSkills)
      );
    });
  }, [selectedCategory, searchQuery]);

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header / Sticky Navigation Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 80,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #E2E8F0',
          padding: '16px 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          {/* Brand Signature */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-signature)',
                fontSize: '2rem',
                color: '#0F766E',
                lineHeight: 1,
              }}
            >
              Banvari Sandeep
            </span>
          </Link>

          {/* Action buttons on the right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="/Sandeep_Banvari_Python_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-pill"
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                backgroundColor: '#ECFDF5',
                color: '#047857',
                border: '1px solid #A7F3D0',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none',
              }}
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>

            <Link
              to="/#certifications"
              className="btn-pill btn-pill-primary"
              style={{
                padding: '8px 18px',
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
              }}
            >
              <ArrowLeft size={15} />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, paddingBottom: '80px' }}>
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)',
            borderBottom: '1px solid #E2E8F0',
            padding: '56px 0 48px',
          }}
        >
          <div className="container">
            {/* Breadcrumb */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                color: '#64748B',
                marginBottom: '16px',
              }}
            >
              <Link to="/" style={{ color: '#0F766E', fontWeight: 600 }}>
                Home
              </Link>
              <span>/</span>
              <span style={{ color: '#0F172A', fontWeight: 600 }}>Certifications</span>
            </div>

            {/* Title & Badge */}
            <div style={{ maxWidth: '820px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ECFDF5',
                  color: '#047857',
                  border: '1px solid #A7F3D0',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                <Sparkles size={13} />
                <span>Accredited Credentials</span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 800,
                  color: '#0F172A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: '14px',
                }}
              >
                All Certifications & Achievements
              </h1>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                A verified repository of technical qualifications, industry internship credentials,
                AI & cloud training certifications, and professional development programs completed by Sandeep Banvari.
              </p>
            </div>

            {/* Filter and Search Bar Container */}
            <div
              style={{
                marginTop: '36px',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid #E2E8F0',
                padding: '16px 20px',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              {/* Category Filter Pills */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#64748B',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    marginRight: '4px',
                  }}
                >
                  <SlidersHorizontal size={14} />
                  <span>Category:</span>
                </div>

                {certificationCategories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  const count = categoryCounts[cat] || 0;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      style={{
                        padding: '6px 14px',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        borderRadius: 'var(--radius-pill)',
                        border: isSelected ? '1px solid #0F766E' : '1px solid #E2E8F0',
                        backgroundColor: isSelected ? '#0F766E' : '#FFFFFF',
                        color: isSelected ? '#FFFFFF' : '#475569',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = '#F0FDFA';
                          e.currentTarget.style.borderColor = '#99F6E4';
                          e.currentTarget.style.color = '#0F766E';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = '#FFFFFF';
                          e.currentTarget.style.borderColor = '#E2E8F0';
                          e.currentTarget.style.color = '#475569';
                        }
                      }}
                    >
                      <span>{cat}</span>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          padding: '1px 6px',
                          borderRadius: '999px',
                          backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.25)' : '#F1F5F9',
                          color: isSelected ? '#FFFFFF' : '#64748B',
                        }}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div
                style={{
                  position: 'relative',
                  flex: '1',
                  minWidth: '240px',
                  maxWidth: '380px',
                }}
              >
                <Search
                  size={16}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94A3B8',
                    pointerEvents: 'none',
                  }}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search certificate, org, skills..."
                  style={{
                    width: '100%',
                    padding: '8px 36px 8px 36px',
                    fontSize: '0.85rem',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid #CBD5E1',
                    outline: 'none',
                    backgroundColor: '#F8FAFC',
                    transition: 'all 0.2s',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#0F766E';
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(15, 118, 110, 0.12)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#CBD5E1';
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#94A3B8',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2px',
                    }}
                  >
                    <X size={15} />
                  </button>
                )}
              </div>
            </div>

            {/* Results Counter Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '16px',
                fontSize: '0.85rem',
                color: '#64748B',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div>
                Showing <strong style={{ color: '#0F172A' }}>{filteredCertifications.length}</strong> of{' '}
                <strong style={{ color: '#0F172A' }}>{certifications.length}</strong> total certificates
                {selectedCategory !== 'All' && (
                  <span>
                    {' '}
                    in <strong style={{ color: '#0F766E' }}>{selectedCategory}</strong>
                  </span>
                )}
                {searchQuery && (
                  <span>
                    {' '}
                    matching &ldquo;<strong style={{ color: '#0F766E' }}>{searchQuery}</strong>&rdquo;
                  </span>
                )}
              </div>

              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  style={{
                    fontSize: '0.8rem',
                    color: '#0F766E',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Certificates Grid Section */}
        <section style={{ paddingTop: '40px' }}>
          <div className="container">
            {filteredCertifications.length === 0 ? (
              /* Empty State */
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px dashed #CBD5E1',
                  padding: '64px 24px',
                  textAlign: 'center',
                  maxWidth: '520px',
                  margin: '40px auto',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#F0FDFA',
                    color: '#0F766E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <Search size={26} />
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '8px',
                  }}
                >
                  No matching certificates found
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#64748B',
                    lineHeight: 1.5,
                    marginBottom: '20px',
                  }}
                >
                  No certificates match your search query. Try using different keywords or resetting your filters.
                </p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="btn-pill btn-pill-primary"
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* Responsive 2-to-3 Column Certificates Grid */
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
                  gap: '24px',
                }}
              >
                {filteredCertifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="theme-card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderRadius: 'var(--radius-xl)',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      padding: '26px 24px',
                      boxShadow: '0 8px 25px rgba(15, 23, 42, 0.05)',
                      transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#99F6E4';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 118, 110, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.05)';
                    }}
                  >
                    <div>
                      {/* Top Row: Icon Badge & Category Pill */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '16px',
                        }}
                      >
                        {/* Specialized Icon in Teal Circle */}
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            backgroundColor: '#ECFDF5',
                            border: '1.5px solid #A7F3D0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#0F766E',
                            boxShadow: '0 4px 10px rgba(15, 118, 110, 0.1)',
                          }}
                        >
                          <CertificationIcon iconType={cert.iconType} size={24} color="#0F766E" />
                        </div>

                        {/* Category tag */}
                        <span
                          style={{
                            fontSize: '0.725rem',
                            fontWeight: 700,
                            color: '#0F766E',
                            backgroundColor: '#F0FDFA',
                            border: '1px solid #CCFBF1',
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-pill)',
                          }}
                        >
                          {cert.category}
                        </span>
                      </div>

                      {/* Organization & Date */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                          marginBottom: '10px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            color: '#0F766E',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                          }}
                        >
                          <Building2 size={13} />
                          <span>{cert.issuer}</span>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.78rem',
                            color: '#64748B',
                            fontWeight: 500,
                          }}
                        >
                          <Calendar size={13} />
                          <span>{cert.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.18rem',
                          fontWeight: 800,
                          color: '#0F172A',
                          lineHeight: 1.35,
                          marginBottom: '8px',
                        }}
                      >
                        {cert.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: '#475569',
                          lineHeight: 1.55,
                          marginBottom: '18px',
                        }}
                      >
                        {cert.description}
                      </p>
                    </div>

                    {/* Skills Gained & Footer Verification Status */}
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '6px',
                          marginBottom: '18px',
                        }}
                      >
                        {cert.skillsGained.map((skill) => (
                          <span
                            key={skill}
                            style={{
                              fontSize: '0.725rem',
                              padding: '3px 9px',
                              borderRadius: '6px',
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

                      {/* Card Footer Bar */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: '12px',
                          borderTop: '1px solid #F1F5F9',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.75rem',
                            color: '#64748B',
                            fontWeight: 600,
                          }}
                        >
                          {cert.type}
                        </span>

                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            color: '#047857',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                          }}
                        >
                          <ShieldCheck size={15} />
                          <span>Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
