import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
        <ScrollManager />

        {/* Navbar with menu toggle */}
        <Navbar />

        {/* Dynamic Route View */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificationsPage />} />
          <Route path="/certifications" element={<Navigate to="/certificates" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Floating Arrow Button - shows after 500px swipe/scroll */}
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}
