import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Services from '../components/Services';
import SoftSkills from '../components/SoftSkills';
import TechnicalArticles from '../components/TechnicalArticles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <main>
        {/* 1. Hero with signature cursive logo, banner, avatar & CTAs */}
        <Hero />

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

        {/* 8. Services with solid square cards */}
        <Services />

        {/* 9. Soft Skills & Core Values */}
        <SoftSkills />

        {/* 10. Technical Articles */}
        <TechnicalArticles />

        {/* 11. Contacts with dark form, circular social icons & illustration */}
        <Contact />
      </main>

      {/* 12. Footer with "Made with ❤️ by Banvari Sandeep" */}
      <Footer />
    </>
  );
}
