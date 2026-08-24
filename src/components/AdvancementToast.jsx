import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function AdvancementToast({ toastMessage }) {
  if (!toastMessage) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '72px',
      right: '24px',
      zIndex: 999,
      background: 'var(--gh-bg-subtle)',
      border: '1px solid var(--gh-green-text)',
      borderRadius: '6px',
      padding: '0.75rem 1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.65rem',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
      animation: 'slideInToast 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      color: 'var(--gh-fg-heading)',
      fontSize: '0.85rem'
    }}>
      <CheckCircle2 size={18} color="var(--gh-green-text)" />
      <div>
        <span style={{ fontWeight: 600 }}>{toastMessage}</span>
      </div>
    </div>
  );
}
