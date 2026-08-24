import React from 'react';
import { educationData } from '../data/resumeData';
import { GraduationCap, BookOpen, CheckCircle, GitCommit, Trophy, Award } from 'lucide-react';

const iconMap = {
  GraduationCap, BookOpen, CheckCircle, Trophy, Award
};

export default function EducationTimeline() {
  return (
    <section id="quest" style={{
      padding: '90px 0',
      background: 'var(--gh-bg-default)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Title */}
        <div className="section-header">
          <div className="section-tag">
            <GitCommit size={14} />
            <span>COMMIT HISTORY & EDUCATION LOG</span>
          </div>
          <h2 className="section-title">
            Education & <span style={{ color: 'var(--gh-blue)' }}>Academic Timeline</span>
          </h2>
          <p className="section-subtitle">
            Formal academic background and milestone history in Computer Applications.
          </p>
        </div>

        {/* Timeline Container with Pixel-Perfect Alignment */}
        <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          position: 'relative',
          paddingLeft: '3.5rem' /* 56px space for timeline line and nodes */
        }}>
          {/* Vertical Connecting Line (Centered at 21px) */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '20px',
            bottom: '20px',
            width: '2px',
            background: 'var(--gh-border-default)',
            zIndex: 1
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {educationData.map((edu, idx) => {
              const IconComp = iconMap[edu.icon] || GraduationCap;

              return (
                <div key={idx} style={{ position: 'relative' }}>
                  
                  {/* Timeline Circle Node Marker (42px wide, centered at 21px) */}
                  <div style={{
                    position: 'absolute',
                    left: '-3.5rem', /* -56px relative to card */
                    top: '14px',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--gh-bg-subtle)',
                    border: '2px solid var(--gh-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gh-blue)',
                    zIndex: 2,
                    boxShadow: '0 0 0 4px var(--gh-bg-default)' /* Masks background line cleanly */
                  }}>
                    <IconComp size={18} />
                  </div>

                  {/* Education Card */}
                  <div className="gh-card" style={{ padding: '1.5rem' }}>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                      marginBottom: '0.6rem'
                    }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--gh-fg-heading)' }}>
                        {edu.degree}
                      </h3>
                      
                      <span className="font-mono" style={{
                        fontSize: '0.75rem',
                        color: 'var(--gh-blue)',
                        background: 'rgba(88, 166, 255, 0.1)',
                        border: '1px solid rgba(88, 166, 255, 0.25)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '12px'
                      }}>
                        {edu.period}
                      </span>
                    </div>

                    <div style={{
                      color: 'var(--gh-green-text)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      marginBottom: '0.65rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      flexWrap: 'wrap'
                    }}>
                      <span>{edu.institution}</span>
                      {edu.score && (
                        <span style={{
                          color: 'var(--gh-gold)',
                          background: 'rgba(210, 153, 34, 0.12)',
                          border: '1px solid rgba(210, 153, 34, 0.3)',
                          padding: '0.1rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          Score: {edu.score}
                        </span>
                      )}
                    </div>

                    <p style={{ color: 'var(--gh-fg-default)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                      {edu.details}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          #quest .container > div {
            paddingLeft: 2.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
