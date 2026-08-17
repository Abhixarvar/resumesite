import React from 'react';
import { Award } from 'lucide-react';

export default function AdvancementToast({ toastMessage }) {
  if (!toastMessage) return null;

  return (
    <div className="advancement-toast">
      <div className="mc-slot" style={{
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'var(--gold-amber)',
        background: 'radial-gradient(circle, #F59E0B 0%, #78350F 100%)'
      }}>
        <Award size={22} color="#FFF" />
      </div>

      <div>
        <div style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: '0.7rem',
          color: 'var(--gold-amber)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          ADVANCEMENT MADE!
        </div>
        <div style={{
          fontWeight: 700,
          fontSize: '0.9rem',
          color: 'var(--text-primary)',
          marginTop: '2px'
        }}>
          {toastMessage}
        </div>
      </div>
    </div>
  );
}
