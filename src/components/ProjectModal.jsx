import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, FolderGit2, Star, GitFork, Globe } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: 'rgba(1, 4, 9, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      animation: 'fadeIn 0.15s ease'
    }} onClick={onClose}>
      
      <div className="gh-card" style={{
        width: '100%',
        maxWidth: '650px',
        maxHeight: '90vh',
        overflowY: 'auto',
        background: 'var(--gh-bg-subtle)',
        border: '1px solid var(--gh-border-default)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
        position: 'relative',
        borderRadius: '8px'
      }} onClick={e => e.stopPropagation()}>
        
        {/* Header Box */}
        <div className="gh-box-header" style={{ padding: '1rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FolderGit2 size={18} color="var(--gh-blue)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--gh-blue)' }}>
              {project.title}
            </h3>
            <span className="gh-badge-visibility">
              {project.visibility}
            </span>
          </div>

          <button onClick={onClose} style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--gh-fg-muted)',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.5rem' }}>
          {/* Tagline */}
          <p style={{ color: 'var(--gh-blue)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '1rem' }}>
            {project.tagline}
          </p>

          {/* Description */}
          <p style={{ color: 'var(--gh-fg-default)', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            {project.description}
          </p>

          {/* Repo Highlights */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--gh-fg-heading)' }}>
              Key Features & Architecture:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.highlights.map((hl, idx) => (
                <div key={idx} style={{
                  background: 'var(--gh-bg-inset)',
                  border: '1px solid var(--gh-border-muted)',
                  padding: '0.6rem 0.85rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem'
                }}>
                  <CheckCircle2 size={16} color="var(--gh-green-text)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.84rem', color: 'var(--gh-fg-default)' }}>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--gh-fg-heading)' }}>
              Tech Stack & Dependencies:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.tech.map((t, idx) => (
                <span key={idx} style={{
                  background: 'var(--gh-bg-inset)',
                  border: '1px solid var(--gh-border-default)',
                  color: 'var(--gh-fg-default)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--gh-border-default)' }}>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="gh-btn gh-btn-primary">
                <Globe size={16} />
                <span>Launch Live App</span>
                <ExternalLink size={12} />
              </a>
            )}

            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="gh-btn gh-btn-outline">
                <Github size={16} />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
