import React from 'react';
import { skillsData, softSkillsData } from '../data/resumeData';
import { Cpu, Zap, Terminal, Layout, Database, Server, HardDrive, Globe, GitBranch, Code2, Users, RefreshCw, Sparkles, Brain, Code } from 'lucide-react';

const iconMap = {
  Cpu, Zap, Terminal, Layout, Database, Server, HardDrive, Globe, GitBranch, Code2, Users, RefreshCw, Sparkles, Brain
};

export default function SkillsSection() {
  return (
    <section id="skills" style={{
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
            <Code2 size={14} />
            <span>TECHNOLOGY STACK & ECOSYSTEM</span>
          </div>
          <h2 className="section-title">
            Technical <span style={{ color: 'var(--gh-blue)' }}>Competencies</span>
          </h2>
          <p className="section-subtitle">
            Languages, relational & document databases, version control workflows, and cloud platforms I use to build scalable web applications.
          </p>
        </div>

        {/* GitHub Language Breakdown Progress Bar */}
        <div className="gh-card" style={{ padding: '1.25rem', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gh-fg-heading)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Code size={16} color="var(--gh-blue)" />
            <span>Languages & Code Composition</span>
          </div>

          {/* Progress Segment Bar */}
          <div style={{
            height: '10px',
            width: '100%',
            borderRadius: '6px',
            overflow: 'hidden',
            display: 'flex',
            marginBottom: '0.85rem',
            background: 'var(--gh-bg-inset)'
          }}>
            <div style={{ width: '45%', background: '#f1e05a' }} title="JavaScript 45%" />
            <div style={{ width: '25%', background: '#e34c26' }} title="HTML5 & CSS3 25%" />
            <div style={{ width: '20%', background: '#f34b7d' }} title="C / C++ 20%" />
            <div style={{ width: '10%', background: '#3572A5' }} title="Python 10%" />
          </div>

          {/* Legend Items */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.78rem', color: 'var(--gh-fg-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f1e05a' }} />
              <strong style={{ color: 'var(--gh-fg-heading)' }}>JavaScript</strong> 45%
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e34c26' }} />
              <strong style={{ color: 'var(--gh-fg-heading)' }}>HTML5 & CSS3</strong> 25%
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f34b7d' }} />
              <strong style={{ color: 'var(--gh-fg-heading)' }}>C / C++</strong> 20%
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3572A5' }} />
              <strong style={{ color: 'var(--gh-fg-heading)' }}>Python</strong> 10%
            </div>
          </div>
        </div>

        {/* 3 Skill Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          {skillsData.map((cat, idx) => {
            return (
              <div key={idx} className="gh-card" style={{ padding: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid var(--gh-border-default)'
                }}>
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '6px',
                    background: 'var(--gh-bg-overlay)',
                    border: '1px solid var(--gh-border-default)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gh-blue)'
                  }}>
                    <Code2 size={18} />
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--gh-fg-heading)' }}>
                    {cat.category}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {cat.items.map((item, itemIdx) => {
                    const IconComp = iconMap[item.icon] || Code2;

                    return (
                      <div key={itemIdx} style={{
                        background: 'var(--gh-bg-default)',
                        border: '1px solid var(--gh-border-muted)',
                        borderRadius: '6px',
                        padding: '0.75rem 0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.85rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '6px',
                            background: 'var(--gh-bg-inset)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: item.color || 'var(--gh-blue)'
                          }}>
                            <IconComp size={16} />
                          </div>
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--gh-fg-heading)' }}>
                              {item.name}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--gh-fg-muted)' }}>
                              {item.desc}
                            </div>
                          </div>
                        </div>

                        <span style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          color: item.color || 'var(--gh-blue)',
                          background: 'rgba(255,255,255,0.03)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          border: '1px solid var(--gh-border-default)',
                          whiteSpace: 'nowrap'
                        }}>
                          {item.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <div className="gh-card" style={{ padding: '1.75rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.2rem', color: 'var(--gh-fg-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="var(--gh-gold)" />
            <span>Developer Mindset & Collaboration</span>
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem'
          }}>
            {softSkillsData.map((soft, sIdx) => {
              const IconComp = iconMap[soft.icon] || Sparkles;
              return (
                <div key={sIdx} style={{
                  background: 'var(--gh-bg-default)',
                  border: '1px solid var(--gh-border-muted)',
                  borderRadius: '6px',
                  padding: '0.85rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <IconComp size={16} color="var(--gh-gold)" />
                    <h4 style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--gh-fg-heading)' }}>{soft.name}</h4>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--gh-fg-muted)', lineHeight: 1.4 }}>
                    {soft.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
