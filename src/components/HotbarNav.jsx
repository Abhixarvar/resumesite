import React, { useEffect } from 'react';
import { Github, Code2, FolderGit2, GraduationCap, Award, Send } from 'lucide-react';

export default function HotbarNav({ activeSection, onSelectSection }) {
  const slots = [
    { id: 'hero', number: '1', name: 'Overview', icon: Github, color: '#58a6ff' },
    { id: 'skills', number: '2', name: 'Skills & Stack', icon: Code2, color: '#3fb950' },
    { id: 'projects', number: '3', name: 'Repositories', icon: FolderGit2, color: '#d29922' },
    { id: 'quest', number: '4', name: 'Education', icon: GraduationCap, color: '#bc8cff' },
    { id: 'achievements', number: '5', name: 'Certifications', icon: Award, color: '#f78166' },
    { id: 'contact', number: '6', name: 'Contact', icon: Send, color: '#39d353' }
  ];

  // Global Hotkey Listener (Keys 1 - 6)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      
      const keyNum = parseInt(e.key, 10);
      if (keyNum >= 1 && keyNum <= 6) {
        const targetSlot = slots[keyNum - 1];
        if (targetSlot) {
          onSelectSection(targetSlot.id);
          const elem = document.getElementById(targetSlot.id);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSelectSection]);

  return (
    <div style={{
      position: 'fixed',
      bottom: '16px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      background: 'rgba(22, 27, 34, 0.95)',
      backdropFilter: 'blur(16px)',
      border: '1px solid var(--gh-border-default)',
      borderRadius: '24px',
      padding: '4px 8px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.6)'
    }}>
      <div style={{ display: 'flex', gap: '4px' }}>
        {slots.map(slot => {
          const IconComp = slot.icon;
          const isActive = activeSection === slot.id;

          return (
            <a
              key={slot.id}
              href={`#${slot.id}`}
              onClick={() => onSelectSection(slot.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '18px',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: isActive ? 'var(--gh-fg-heading)' : 'var(--gh-fg-muted)',
                background: isActive ? 'rgba(88, 166, 255, 0.15)' : 'transparent',
                border: isActive ? '1px solid rgba(88, 166, 255, 0.3)' : '1px solid transparent',
                transition: 'all 0.15s ease'
              }}
              title={`[${slot.number}] ${slot.name}`}
            >
              <IconComp size={16} color={isActive ? slot.color : 'var(--gh-fg-muted)'} />
              <span className="floating-nav-label" style={{ display: isActive ? 'inline' : 'none' }}>
                {slot.name}
              </span>
            </a>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .floating-nav-label {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
