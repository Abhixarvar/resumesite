import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationTimeline from './components/EducationTimeline';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import HotbarNav from './components/HotbarNav';
import AdvancementToast from './components/AdvancementToast';
import { personalDetails } from './data/resumeData';
import { Github, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  const triggerAdvancement = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      const sections = ['hero', 'skills', 'projects', 'quest', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i]);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--gh-bg-default)', paddingBottom: '80px' }}>
      
      {/* GitHub Header Navbar */}
      <Navbar activeSection={activeSection} scrollProgress={scrollProgress} />

      {/* Main Sections */}
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection onTriggerAdvancement={triggerAdvancement} />
        <EducationTimeline />
        <AchievementsSection />
        <ContactSection onTriggerAdvancement={triggerAdvancement} />
      </main>

      {/* GitHub Notification Toast */}
      <AdvancementToast toastMessage={toastMessage} />

      {/* Floating Bottom GitHub Tab Nav */}
      <HotbarNav activeSection={activeSection} onSelectSection={setActiveSection} />

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--gh-border-default)',
        background: 'var(--gh-bg-subtle)',
        padding: '2rem 0',
        marginTop: '3rem',
        fontSize: '0.85rem',
        color: 'var(--gh-fg-muted)'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Github size={18} color="var(--gh-fg-muted)" />
            <span>© {new Date().getFullYear()} {personalDetails.name} ({personalDetails.handle}). Built with React, Vite & Vercel.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--gh-green-text)' }}>
              VERCEL PRODUCTION DEPLOYMENT
            </span>
            <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gh-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              GitHub Profile <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
