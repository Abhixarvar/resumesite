import React from 'react';
import { skillsData, softSkillsData } from '../data/resumeData';
import { Cpu, Zap, Terminal, Layout, Database, Server, HardDrive, Globe, Brain, Sparkles, MessageSquare, GitBranch, Code2, Users, RefreshCw } from 'lucide-react';

const iconMap = {
  Cpu, Zap, Terminal, Layout, Database, Server, HardDrive, Globe, Brain, Sparkles, MessageSquare, GitBranch, Code2, Users, RefreshCw
};

export default function SkillsSection() {
  return (
    <section id="skills" style={{
      padding: '100px 0',
      background: 'rgba(11, 14, 20, 0.6)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Title */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>PLAYER INVENTORY & ABILITIES</span>
          </div>
          <h2 className="section-title">
            Technical <span className="text-gradient-emerald">Competencies</span> & Toolkit
          </h2>
          <p className="section-subtitle">
            Languages, database engines, and AI tools I use to craft game logic, web applications, and database solutions.
          </p>
        </div>

        {/* 3 Skill Categories */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {skillsData.map((cat, idx) => {
            return (
              <div key={idx} className="mc-card" style={{ padding: '1.75rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.85rem',
                  borderBottom: '1px solid var(--border-light)'
                }}>
                  <div className="mc-slot" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Code2 size={20} color="var(--emerald-green)" />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                    {cat.category}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {cat.items.map((item, itemIdx) => {
                    const IconComp = iconMap[item.icon] || Code2;
                    
                    // Rarity badge styling
                    let badgeColor = 'var(--emerald-green)';
                    if (item.rarity === 'diamond') badgeColor = 'var(--diamond-cyan)';
                    if (item.rarity === 'gold') badgeColor = 'var(--gold-amber)';
                    if (item.rarity === 'purple') badgeColor = '#A855F7';

                    return (
                      <div key={itemIdx} className="mc-slot" style={{
                        padding: '0.85rem 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                          <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: badgeColor
                          }}>
                            <IconComp size={18} />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                              {item.name}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                              {item.desc}
                            </div>
                          </div>
                        </div>

                        <span style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-pixel)',
                          color: badgeColor,
                          background: 'rgba(0,0,0,0.4)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          border: `1px solid ${badgeColor}`,
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
        <div className="mc-card" style={{ padding: '2rem', background: 'linear-gradient(180deg, #131722 0%, #0F121A 100%)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Sparkles size={20} color="var(--gold-amber)" />
            <span>Soft Skills & Character Attributes</span>
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}>
            {softSkillsData.map((soft, sIdx) => {
              const IconComp = iconMap[soft.icon] || Sparkles;
              return (
                <div key={sIdx} className="mc-slot" style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                    <IconComp size={18} color="var(--gold-amber)" />
                    <h4 style={{ fontWeight: 700, fontSize: '0.95rem' }}>{soft.name}</h4>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
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
