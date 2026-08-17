import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Terminal, Code2, Globe } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: 'rgba(5, 7, 10, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      animation: 'fadeIn 0.2s ease'
    }} onClick={onClose}>
      
      <div className="mc-card" style={{
        width: '100%',
        maxWidth: '650px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '2rem',
        background: '#131722',
        border: `2px solid ${project.rarityColor}`,
        boxShadow: `0 20px 50px rgba(0,0,0,0.8), 0 0 30px ${project.rarityColor}33`,
        position: 'relative'
      }} onClick={e => e.stopPropagation()}>
        
        {/* Close Button */}
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid var(--border-light)',
          color: 'var(--text-secondary)',
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease'
        }}>
          <X size={18} />
        </button>

        {/* Header Rarity Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-pixel)',
          color: project.rarityColor,
          background: `${project.rarityColor}15`,
          border: `1px solid ${project.rarityColor}44`,
          padding: '0.3rem 0.8rem',
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
          <Sparkles size={13} />
          <span>{project.rarity} • {project.category}</span>
        </div>

        {/* Title */}
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.4rem' }}>
          {project.title}
        </h2>
        <p style={{ color: 'var(--diamond-cyan)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '1.25rem' }}>
          {project.tagline}
        </p>

        {/* Description */}
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          {project.description}
        </p>

        {/* Key Highlights List */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
            Key Quest Highlights & Features:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.highlights.map((hl, idx) => (
              <div key={idx} className="mc-slot" style={{ padding: '0.65rem 0.85rem', display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={16} color="var(--emerald-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.6rem' }}>Tech Stack & Crafting Ingredients:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tech.map((t, idx) => (
              <span key={idx} style={{
                background: '#0F121A',
                border: '1px solid #2D3748',
                color: 'var(--text-primary)',
                fontSize: '0.8rem',
                fontWeight: 600,
                padding: '0.3rem 0.75rem',
                borderRadius: '6px'
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="mc-button mc-button-emerald">
              <Globe size={18} />
              <span>Launch Live App</span>
              <ExternalLink size={14} />
            </a>
          )}

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="mc-button mc-button-secondary">
              <Github size={18} />
              <span>GitHub Repo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
