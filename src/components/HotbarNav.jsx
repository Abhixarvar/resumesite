import React, { useEffect } from 'react';
import { Gamepad2, Code2, Sparkles, GraduationCap, Award, Send } from 'lucide-react';

export default function HotbarNav({ activeSection, onSelectSection }) {
  const slots = [
    { id: 'hero', number: '1', name: 'Overview', icon: Gamepad2, color: '#38BDF8' },
    { id: 'skills', number: '2', name: 'Skills Inventory', icon: Code2, color: '#10B981' },
    { id: 'projects', number: '3', name: 'Projects Vault', icon: Sparkles, color: '#F59E0B' },
    { id: 'quest', number: '4', name: 'Academic Quest', icon: GraduationCap, color: '#A855F7' },
    { id: 'achievements', number: '5', name: 'Advancements', icon: Award, color: '#EF4444' },
    { id: 'contact', number: '6', name: 'Dispatch Beacon', icon: Send, color: '#55FF55' }
  ];

  // Global Hotkey Listener (Keys 1 - 6)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing inside an input or textarea
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
      background: 'rgba(15, 18, 26, 0.92)',
      backdropFilter: 'blur(16px)',
      border: '2px solid #000',
      borderTopColor: '#2D3748',
      borderLeftColor: '#2D3748',
      borderBottomColor: '#080A0E',
      borderRightColor: '#080A0E',
      borderRadius: '12px',
      padding: '6px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
    }}>
      <div style={{ display: 'flex', gap: '6px' }}>
        {slots.map(slot => {
          const IconComp = slot.icon;
          const isActive = activeSection === slot.id;

          return (
            <a
              key={slot.id}
              href={`#${slot.id}`}
              onClick={() => onSelectSection(slot.id)}
              className="mc-slot"
              style={{
                width: '46px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                textDecoration: 'none',
                borderColor: isActive ? slot.color : undefined,
                background: isActive ? 'rgba(255,255,255,0.08)' : 'var(--bg-slot)',
                boxShadow: isActive ? `inset 0 0 10px ${slot.color}33, 0 0 12px ${slot.color}44` : undefined
              }}
              title={`[${slot.number}] ${slot.name}`}
            >
              {/* Slot Key Number */}
              <span style={{
                position: 'absolute',
                top: '2px',
                left: '4px',
                fontSize: '0.62rem',
                fontFamily: 'var(--font-pixel)',
                color: isActive ? slot.color : 'var(--text-muted)'
              }}>
                {slot.number}
              </span>

              {/* Slot Icon */}
              <IconComp size={20} color={isActive ? slot.color : 'var(--text-secondary)'} />

              {/* Active Selection Indicator Box */}
              {isActive && (
                <div style={{
                  position: 'absolute',
                  inset: '-2px',
                  border: `2px solid ${slot.color}`,
                  borderRadius: '8px',
                  pointerEvents: 'none'
                }} />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
