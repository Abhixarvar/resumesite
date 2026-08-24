import React from 'react';
import { achievementsData } from '../data/resumeData';
import { Award, Trophy, FolderGit2, CheckCircle2, ShieldCheck } from 'lucide-react';

const iconMap = {
  Award, Trophy, FolderGit2
};

export default function AchievementsSection() {
  return (
    <section id="achievements" style={{
      padding: '90px 0',
      background: 'var(--gh-bg-subtle)',
      borderTop: '1px solid var(--gh-border-default)',
      borderBottom: '1px solid var(--gh-border-default)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <span>VERIFIED BADGES & ACCOMPLISHMENTS</span>
          </div>
          <h2 className="section-title">
            Certifications & <span style={{ color: 'var(--gh-gold)' }}>Achievements</span>
          </h2>
          <p className="section-subtitle">
            Recognitions earned through structured coursework, competitive programming, and production web application deployments.
          </p>
        </div>

        {/* Achievements Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem'
        }}>
          {achievementsData.map((ach, idx) => {
            const IconComp = iconMap[ach.icon] || Award;

            return (
              <div key={idx} className="gh-card" style={{ padding: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    background: 'var(--gh-bg-default)',
                    border: '1px solid var(--gh-border-default)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: ach.badgeColor || 'var(--gh-gold)'
                  }}>
                    <IconComp size={22} />
                  </div>

                  <div>
                    <span className="font-mono" style={{
                      fontSize: '0.7rem',
                      color: ach.badgeColor || 'var(--gh-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.3px'
                    }}>
                      {ach.type}
                    </span>
                    <div style={{ fontSize: '0.82rem', color: 'var(--gh-fg-muted)' }}>
                      Issuer: {ach.issuer}
                    </div>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--gh-fg-heading)' }}>
                  {ach.title}
                </h3>

                <p style={{ fontSize: '0.86rem', color: 'var(--gh-fg-default)', lineHeight: 1.5 }}>
                  {ach.desc}
                </p>

                <div style={{
                  marginTop: '1rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--gh-border-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.78rem',
                  color: 'var(--gh-green-text)',
                  fontWeight: 600
                }}>
                  <CheckCircle2 size={15} />
                  <span>Verified Credential</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
