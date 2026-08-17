import React, { useState, useEffect } from 'react';
import { personalDetails } from '../data/resumeData';
import { Gamepad2, Shield, Code2, Sparkles, Send } from 'lucide-react';

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
      {/* Scroll XP Bar at very top */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: '#1F2937',
        zIndex: 1000
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #10B981, #55FF55, #38BDF8)',
          boxShadow: '0 0 10px #55FF55',
          transition: 'width 0.15s ease'
        }} />
      </div>

      <header style={{
        position: 'fixed',
        top: '4px',
        left: 0,
        right: 0,
        zIndex: 900,
        background: scrolled ? 'rgba(11, 14, 20, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px'
        }}>
          {/* Logo / Name & Level */}
          <a href="#hero" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <div className="mc-slot" style={{
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle, #2563EB 0%, #0F172A 100%)'
            }}>
              <Code2 size={22} color="#38BDF8" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.3px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {personalDetails.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Full-Stack Web Dev
              </div>
            </div>
          </a>

          {/* Nav Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.8rem'
          }} className="desktop-nav">
            {[
              { id: 'hero', label: 'Overview' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'quest', label: 'Education' },
              { id: 'achievements', label: 'Badges' },
              { id: 'contact', label: 'Contact' }
            ].map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: activeSection === link.id ? 'var(--diamond-cyan)' : 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                {activeSection === link.id && <span style={{ color: 'var(--emerald-green)' }}>▶</span>}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Action button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <a href="#contact" className="mc-button mc-button-emerald" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              <Send size={15} />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </header>

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
