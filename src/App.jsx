import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Services from './components/Services';
import SoftSkills from './components/SoftSkills';
import TechnicalArticles from './components/TechnicalArticles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      {/* Navbar with menu toggle */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Page Flow Matching Screenshot Structure */}
      <main>
        {/* 1. Hero with signature cursive logo, orange banner, avatar & CTAs */}
        <Hero onOpenResume={handleOpenResume} />

        {/* 2. Who I am with illustration */}
        <About />

        {/* 3. Education with desk illustration */}
        <Education />

        {/* 4. Skills with dark rounded cards */}
        <Skills />

        {/* 5. Experience with workstation illustration */}
        <Experience />

        {/* 6. Projects 3-card showcase with More button */}
        <Projects />

        {/* 7. Achievements / Certifications with thumbnail badges */}
        <Certifications />

        {/* 8. Services with solid orange square cards */}
        <Services />

        {/* 9. Soft Skills & Core Values (matching orange Testimonials block in screenshot) */}
        <SoftSkills />

        {/* 10. Technical Articles (matching Blog section in screenshot) */}
        <TechnicalArticles />

        {/* 11. Contacts with dark form, circular social icons & illustration */}
        <Contact />
      </main>

      {/* 12. Footer with "Made with ❤️ by Banvari Sandeep" */}
      <Footer />

      {/* Resume Preview & PDF Print Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
