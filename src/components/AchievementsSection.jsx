import React from 'react';
import { achievementsData } from '../data/resumeData';
import { Award, BrainCircuit, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Award, BrainCircuit, Trophy
};

export default function AchievementsSection() {
  return (
    <section id="achievements" style={{
      padding: '100px 0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>ADVANCEMENTS UNLOCKED</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="text-gradient-gold">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Recognitions earned through structured coursework, prompt engineering, and competitive programming.
          </p>
        </div>

        {/* Advancements Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {achievementsData.map((ach, idx) => {
            const IconComp = iconMap[ach.icon] || Award;

            return (
              <div key={idx} className="mc-card" style={{
                padding: '1.75rem',
                border: `2px solid ${ach.badgeColor}44`,
                background: 'linear-gradient(180deg, #181D29 0%, #0F121A 100%)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.25rem'
                }}>
                  <div className="mc-slot" style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: ach.badgeColor,
                    borderColor: ach.badgeColor
                  }}>
                    <IconComp size={24} />
                  </div>

                  <div>
                    <span style={{
                      fontFamily: 'var(--font-pixel)',
                      fontSize: '0.68rem',
                      color: ach.badgeColor,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {ach.type}
                    </span>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Issuer: {ach.issuer}
                    </div>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  {ach.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {ach.desc}
                </p>

                <div style={{
                  marginTop: '1.25rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  color: 'var(--emerald-green)',
                  fontWeight: 700
                }}>
                  <CheckCircle2 size={16} />
                  <span>Advancement Completed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
