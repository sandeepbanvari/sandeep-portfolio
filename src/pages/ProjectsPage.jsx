import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects, projectCategories } from '../data/projects';
import { 
  ArrowLeft, 
  Search, 
  X, 
  ExternalLink, 
  Code2, 
  Info, 
  CheckCircle2, 
  FileText,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Theme palettes for card headers
  const headerThemes = [
    { bg: '#0F766E', textColor: '#FFFFFF', accentBg: '#115E59' },
    { bg: '#115E59', textColor: '#FFFFFF', accentBg: '#134E4A' },
    { bg: '#0D9488', textColor: '#FFFFFF', accentBg: '#0F766E' },
    { bg: '#047857', textColor: '#FFFFFF', accentBg: '#065F46' },
    { bg: '#0E7490', textColor: '#FFFFFF', accentBg: '#155E75' },
    { bg: '#14B8A6', textColor: '#FFFFFF', accentBg: '#0D9488' },
  ];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: projects.length };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesTitle = project.title.toLowerCase().includes(query);
      const matchesSubtitle = project.subtitle.toLowerCase().includes(query);
      const matchesDesc = project.description.toLowerCase().includes(query);
      const matchesCategoryText = project.category.toLowerCase().includes(query);
      const matchesTech = project.techStack.some((tech) =>
        tech.toLowerCase().includes(query)
      );
      const matchesFeatures = project.features.some((f) =>
        f.toLowerCase().includes(query)
      );

      return (
        matchesCategory &&
        (matchesTitle ||
          matchesSubtitle ||
          matchesDesc ||
          matchesCategoryText ||
          matchesTech ||
          matchesFeatures)
      );
    });
  }, [selectedCategory, searchQuery]);

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header / Sticky Bar */}
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
              to="/#projects"
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
              <span style={{ color: '#0F172A', fontWeight: 600 }}>Projects</span>
            </div>

            {/* Title & Badge */}
            <div style={{ maxWidth: '800px' }}>
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
                <span>Projects Portfolio</span>
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
                All Projects & Case Studies
              </h1>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Explore my full repository of full-stack platforms, modern interactive frontend applications,
                REST API tools, and real-time dashboards crafted with React, Python, and MySQL.
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
                  <span>Filter:</span>
                </div>

                {projectCategories.map((cat) => {
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
                  placeholder="Search title, tech, keywords..."
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
                Showing <strong style={{ color: '#0F172A' }}>{filteredProjects.length}</strong> of{' '}
                <strong style={{ color: '#0F172A' }}>{projects.length}</strong> total projects
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

        {/* Projects Grid Section */}
        <section style={{ paddingTop: '40px' }}>
          <div className="container">
            {filteredProjects.length === 0 ? (
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
                  No matching projects found
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#64748B',
                    lineHeight: 1.5,
                    marginBottom: '20px',
                  }}
                >
                  No projects match your current search criteria. Try using different keywords or
                  clearing your filters.
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
              /* 3-Column / Responsive Project Cards Grid */
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '28px',
                }}
              >
                {filteredProjects.map((project, idx) => {
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
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 118, 110, 0.12)';
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
                        {/* Top Badges */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '12px',
                            left: '12px',
                            right: '12px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.68rem',
                              fontWeight: 700,
                              backgroundColor: 'rgba(0, 0, 0, 0.25)',
                              backdropFilter: 'blur(4px)',
                              color: '#FFFFFF',
                              padding: '3px 8px',
                              borderRadius: 'var(--radius-pill)',
                            }}
                          >
                            {project.category}
                          </span>

                          {project.previewBadge && (
                            <span
                              style={{
                                fontSize: '0.68rem',
                                fontWeight: 700,
                                backgroundColor: 'rgba(255, 255, 255, 0.22)',
                                backdropFilter: 'blur(4px)',
                                color: '#FFFFFF',
                                padding: '3px 9px',
                                borderRadius: 'var(--radius-pill)',
                                border: '1px solid rgba(255, 255, 255, 0.35)',
                                letterSpacing: '0.02em',
                              }}
                            >
                              {project.previewBadge}
                            </span>
                          )}
                        </div>

                        <span
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            color: theme.textColor,
                            letterSpacing: '-0.01em',
                            marginTop: '16px',
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
                          <div
                            style={{
                              display: 'flex',
                              gap: '3px',
                              marginBottom: '4px',
                              alignSelf: 'flex-start',
                              paddingLeft: '2px',
                            }}
                          >
                            <span
                              style={{
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                backgroundColor: '#0F766E',
                              }}
                            />
                            <span
                              style={{
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                backgroundColor: '#14B8A6',
                              }}
                            />
                            <span
                              style={{
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                backgroundColor: '#5EEAD4',
                              }}
                            />
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
                          <p
                            style={{
                              fontSize: '0.85rem',
                              color: '#0F766E',
                              fontWeight: 600,
                              marginBottom: '6px',
                            }}
                          >
                            {project.subtitle}
                          </p>
                          <p
                            style={{
                              fontSize: '0.875rem',
                              color: '#475569',
                              lineHeight: 1.6,
                              marginBottom: '14px',
                              textAlign: 'justify',
                            }}
                          >
                            {project.description}
                          </p>

                          {/* Tech Badges */}
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '6px',
                              marginBottom: '16px',
                            }}
                          >
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
                            gap: '8px',
                            flexWrap: 'wrap',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {project.liveDemo && (
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
                                <ExternalLink size={13} color="#FFFFFF" />
                                <span>Demo</span>
                              </a>
                            )}

                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  fontSize: '0.825rem',
                                  fontWeight: 600,
                                  color: '#334155',
                                  padding: '6px 12px',
                                  borderRadius: 'var(--radius-pill)',
                                  backgroundColor: '#F1F5F9',
                                  border: '1px solid #CBD5E1',
                                  transition: 'all 0.2s',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#E2E8F0';
                                  e.currentTarget.style.color = '#0F172A';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = '#F1F5F9';
                                  e.currentTarget.style.color = '#334155';
                                }}
                              >
                                <GithubIcon size={14} />
                                <span>Code</span>
                              </a>
                            )}
                          </div>

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
                              padding: '6px 13px',
                              borderRadius: 'var(--radius-pill)',
                              backgroundColor: '#ECFDF5',
                              border: '1px solid #A7F3D0',
                              cursor: 'pointer',
                              transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor = '#D1FAE5')
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor = '#ECFDF5')
                            }
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
            )}
          </div>
        </section>
      </main>

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

            <div
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                marginBottom: '12px',
                flexWrap: 'wrap',
              }}
            >
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
                }}
              >
                {activeModalProject.category}
              </span>
              {activeModalProject.previewBadge && (
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#0F766E',
                    backgroundColor: '#CCFBF1',
                    border: '1px solid #99F6E4',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    display: 'inline-block',
                  }}
                >
                  {activeModalProject.previewBadge}
                </span>
              )}
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#0F172A',
                marginBottom: '4px',
              }}
            >
              {activeModalProject.title}
            </h3>

            <p
              style={{
                color: '#0F766E',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '14px',
              }}
            >
              {activeModalProject.subtitle}
            </p>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#475569',
                lineHeight: 1.6,
                marginBottom: '20px',
                textAlign: 'justify',
              }}
            >
              {activeModalProject.description}
            </p>

            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#0F172A',
                marginBottom: '8px',
              }}
            >
              Features & Highlights:
            </h4>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 20px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {activeModalProject.features.map((f, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '0.85rem',
                    color: '#475569',
                    lineHeight: 1.4,
                  }}
                >
                  <CheckCircle2 size={15} color="#0F766E" style={{ flexShrink: 0, marginTop: '2px' }} />
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
                  style={{
                    flex: 1,
                    minWidth: '150px',
                    padding: '10px 16px',
                    fontSize: '0.88rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  <ExternalLink size={16} />
                  <span>Live Deployed Demo</span>
                </a>
              )}
              {activeModalProject.github && (
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill btn-pill-outline"
                  style={{
                    flex: 1,
                    minWidth: '150px',
                    padding: '10px 16px',
                    fontSize: '0.88rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="btn-pill"
                style={{
                  padding: '10px 18px',
                  fontSize: '0.88rem',
                  backgroundColor: '#F1F5F9',
                  color: '#475569',
                  borderRadius: 'var(--radius-pill)',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
