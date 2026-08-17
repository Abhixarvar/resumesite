import React from 'react';
import { educationData } from '../data/resumeData';
import { GraduationCap, BookOpen, CheckCircle, Sparkles, Trophy } from 'lucide-react';

const iconMap = {
  GraduationCap, BookOpen, CheckCircle, Trophy
};

export default function EducationTimeline() {
  return (
    <section id="quest" style={{
      padding: '100px 0',
      background: 'rgba(11, 14, 20, 0.6)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Title */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>PLAYER QUEST LOG</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient-gold">Academic Journey</span>
          </h2>
          <p className="section-subtitle">
            Formal education progression and academic foundation in Computer Applications.
          </p>
        </div>

        {/* Timeline Path */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          paddingLeft: '2rem'
        }}>
          {/* Vertical Connecting Quest Line */}
          <div style={{
            position: 'absolute',
            left: '11px',
            top: '20px',
            bottom: '20px',
            width: '4px',
            background: 'linear-gradient(180deg, var(--gold-amber) 0%, var(--emerald-green) 50%, var(--diamond-cyan) 100%)',
            boxShadow: '0 0 10px var(--gold-glow)'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {educationData.map((edu, idx) => {
              const IconComp = iconMap[edu.icon] || GraduationCap;

              return (
                <div key={idx} style={{ position: 'relative' }}>
                  
                  {/* Quest Marker Node */}
                  <div className="mc-slot" style={{
                    position: 'absolute',
                    left: '-2.5rem',
                    top: '1.25rem',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#0F121A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: 'var(--gold-amber)',
                    color: 'var(--gold-amber)',
                    zIndex: 2
                  }}>
                    <IconComp size={16} />
                  </div>

                  {/* Quest Card */}
                  <div className="mc-card" style={{ padding: '1.75rem' }}>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                      marginBottom: '0.75rem'
                    }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                        {edu.degree}
                      </h3>
                      
                      <span style={{
                        fontFamily: 'var(--font-pixel)',
                        fontSize: '0.75rem',
                        color: 'var(--gold-amber)',
                        background: 'rgba(245, 158, 11, 0.15)',
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '4px'
                      }}>
                        {edu.period}
                      </span>
                    </div>

                    <div style={{
                      color: 'var(--emerald-green)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem'
                    }}>
                      <span>{edu.institution}</span>
                      {edu.score && (
                        <span style={{
                          color: 'var(--diamond-cyan)',
                          background: 'rgba(56, 189, 248, 0.1)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.8rem'
                        }}>
                          Score: {edu.score}
                        </span>
                      )}
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {edu.details}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
