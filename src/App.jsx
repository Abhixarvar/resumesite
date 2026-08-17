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
import { Gamepad2, Heart, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  const triggerAdvancement = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Determine current active section
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
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-main)', paddingBottom: '90px' }}>
      
      {/* Navbar with XP level bar */}
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

      {/* Advancement Toast */}
      <AdvancementToast toastMessage={toastMessage} />

      {/* Bottom Floating Hotbar Dock */}
      <HotbarNav activeSection={activeSection} onSelectSection={setActiveSection} />

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border-light)',
        background: '#090B10',
        padding: '2.5rem 0',
        marginTop: '4rem',
        fontSize: '0.88rem',
        color: 'var(--text-secondary)'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Gamepad2 size={20} color="var(--emerald-green)" />
            <span>© {new Date().getFullYear()} {personalDetails.name}. Built with React, Vite & Vercel.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-pixel)', color: 'var(--emerald-green)' }}>
              VERCEL DEPLOYMENT READY
            </span>
            <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--diamond-cyan)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              GitHub <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
