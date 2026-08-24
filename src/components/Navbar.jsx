import React, { useState, useEffect } from 'react';
import { personalDetails } from '../data/resumeData';
import { Github, Send, ExternalLink } from 'lucide-react';

export default function Navbar({ activeSection, scrollProgress }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'var(--gh-border-muted)',
        zIndex: 1000
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #238636, #58a6ff, #bc8cff)',
          boxShadow: '0 0 8px rgba(88, 166, 255, 0.5)',
          transition: 'width 0.15s ease'
        }} />
      </div>

      <header style={{
        position: 'fixed',
        top: '3px',
        left: 0,
        right: 0,
        zIndex: 900,
        background: scrolled ? 'rgba(22, 27, 34, 0.94)' : 'var(--gh-bg-subtle)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid var(--gh-border-default)',
        transition: 'all 0.2s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '62px'
        }}>
          {/* Logo / Handle */}
          <a href="#hero" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#21262d',
              border: '1px solid var(--gh-border-default)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gh-fg-heading)'
            }}>
              <Github size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--gh-fg-heading)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                {personalDetails.name}
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--gh-blue)', fontWeight: 400 }}>
                  {personalDetails.handle}
                </span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gh-fg-muted)' }}>
                {personalDetails.role}
              </div>
            </div>
          </a>

          {/* Nav Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.4rem'
          }} className="desktop-nav">
            {[
              { id: 'hero', label: 'Overview' },
              { id: 'skills', label: 'Skills & Stack' },
              { id: 'projects', label: 'Projects' },
              { id: 'quest', label: 'Education' },
              { id: 'achievements', label: 'Certifications' },
              { id: 'contact', label: 'Contact' }
            ].map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: activeSection === link.id ? 'var(--gh-fg-heading)' : 'var(--gh-fg-muted)',
                  borderBottom: activeSection === link.id ? '2px solid #f78166' : '2px solid transparent',
                  padding: '0.5rem 0.2rem',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="gh-btn gh-btn-outline" style={{ fontSize: '0.8rem' }}>
              <Github size={15} />
              <span>GitHub</span>
              <ExternalLink size={12} />
            </a>

            <a href="#contact" className="gh-btn gh-btn-primary" style={{ fontSize: '0.8rem' }}>
              <Send size={14} />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </header>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
