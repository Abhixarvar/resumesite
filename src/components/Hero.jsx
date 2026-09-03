import React from 'react';
import { personalDetails } from '../data/resumeData';
import { Github, Linkedin, MapPin, Mail, FolderGit2, Code2, GraduationCap, Award, ExternalLink, GitCommit, FileCode, Check, User } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" style={{
      paddingTop: '110px',
      paddingBottom: '70px',
      position: 'relative',
      background: 'var(--gh-bg-default)'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }} className="hero-github-grid">

          {/* Left Column: GitHub Profile Sidebar */}
          <div>
            <div className="gh-card" style={{ padding: '1.5rem', textAlign: 'left' }}>
              
              {/* Name & Handle */}
              <h1 style={{ 
                fontSize: '2.8rem', 
                fontWeight: 800, 
                color: 'var(--gh-fg-heading)', 
                lineHeight: 1.1,
                marginBottom: '0.2rem',
                letterSpacing: '-1px'
              }}>
                {personalDetails.name}
              </h1>
              <div className="font-mono" style={{ 
                fontSize: '1.1rem', 
                color: 'var(--gh-green-text)', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                {personalDetails.handle}
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3fb950', display: 'block' }} title="Available for web development roles" />
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--gh-fg-default)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                {personalDetails.role} passionate about full-stack web applications, databases & C++ systems.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--gh-fg-muted)', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} color="var(--gh-fg-muted)" />
                  <span>{personalDetails.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} color="var(--gh-fg-muted)" />
                  <a href={`mailto:${personalDetails.email}`} style={{ color: 'var(--gh-fg-muted)', textDecoration: 'none' }}>
                    {personalDetails.email}
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <GraduationCap size={16} color="var(--gh-fg-muted)" />
                  <span>BCA (2024–2027)</span>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="gh-btn" style={{ flex: 1, justifyContent: 'center' }}>
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="gh-btn" style={{ flex: 1, justifyContent: 'center', color: '#58a6ff' }}>
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Quick GitHub Profile Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.6rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--gh-border-default)'
              }}>
                {personalDetails.stats.map((st, i) => (
                  <div key={i} style={{
                    background: 'var(--gh-bg-inset)',
                    border: '1px solid var(--gh-border-muted)',
                    borderRadius: '6px',
                    padding: '0.6rem',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: st.color, fontWeight: 700, fontSize: '1.1rem' }}>{st.value}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--gh-fg-muted)' }}>{st.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: README.md Container & Contribution Overview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* README.md Container */}
            <div className="gh-card">
              {/* Header Box */}
              <div className="gh-box-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--gh-fg-heading)' }}>
                  <FileCode size={16} color="var(--gh-fg-muted)" />
                  <span className="font-mono">AbhisarVarshney / README.md</span>
                </div>
                <span className="gh-tag">Developer Overview</span>
              </div>

              {/* README Body Content */}
              <div style={{ padding: '1.75rem' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--gh-fg-heading)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  👋 Hi, I'm {personalDetails.name}
                </h2>

                <p style={{ fontSize: '0.95rem', color: 'var(--gh-fg-default)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {personalDetails.objective}
                </p>

                {/* Quick Info Matrix */}
                <div className="font-mono" style={{
                  background: 'var(--gh-bg-inset)',
                  border: '1px solid var(--gh-border-default)',
                  borderRadius: '6px',
                  padding: '1rem',
                  fontSize: '0.83rem',
                  color: 'var(--gh-fg-default)',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem'
                }}>
                  <div><span style={{ color: '#ff7b72' }}>const</span> developer = &#123;</div>
                  <div style={{ paddingLeft: '1.2rem' }}>name: <span style={{ color: '#a5d6ff' }}>"{personalDetails.name}"</span>,</div>
                  <div style={{ paddingLeft: '1.2rem' }}>role: <span style={{ color: '#a5d6ff' }}>"{personalDetails.role}"</span>,</div>
                  <div style={{ paddingLeft: '1.2rem' }}>location: <span style={{ color: '#a5d6ff' }}>"{personalDetails.location}"</span>,</div>
                  <div style={{ paddingLeft: '1.2rem' }}>education: <span style={{ color: '#a5d6ff' }}>"BCA (2024-2027) @ Jagannath University"</span>,</div>
                  <div style={{ paddingLeft: '1.2rem' }}>stack: [<span style={{ color: '#7ee787' }}>"JavaScript"</span>, <span style={{ color: '#7ee787' }}>"HTML5/CSS3"</span>, <span style={{ color: '#7ee787' }}>"C++"</span>, <span style={{ color: '#7ee787' }}>"MongoDB"</span>, <span style={{ color: '#7ee787' }}>"Vercel"</span>],</div>
                  <div style={{ paddingLeft: '1.2rem' }}>status: <span style={{ color: '#7ee787' }}>"Building & Deploying Web Apps"</span></div>
                  <div>&#125;;</div>
                </div>

                {/* Hero CTAs */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  <a href="#projects" className="gh-btn gh-btn-primary">
                    <FolderGit2 size={16} />
                    <span>Explore Projects</span>
                  </a>
                  <a href="#contact" className="gh-btn gh-btn-outline">
                    <Mail size={16} />
                    <span>Get In Touch</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 52-Week GitHub Contribution Activity Simulation Chart */}
            <div className="gh-card" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gh-fg-heading)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <GitCommit size={16} color="var(--gh-green-text)" />
                  <span>340+ Contributions in the last year</span>
                </div>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--gh-fg-muted)' }}>Continuous Activity</span>
              </div>

              {/* Grid of green squares representing contribution heatmap */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(36, 1fr)',
                gap: '3px',
                overflowX: 'auto',
                paddingBottom: '4px'
              }}>
                {Array.from({ length: 180 }).map((_, idx) => {
                  const levels = [0, 1, 1, 2, 0, 3, 1, 4, 2, 1, 3, 0, 2, 4, 1, 2];
                  const lvl = levels[idx % levels.length];
                  const bgColors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
                  
                  return (
                    <div 
                      key={idx} 
                      style={{
                        width: '100%',
                        aspectRatio: '1',
                        borderRadius: '2px',
                        background: bgColors[lvl],
                        border: '1px solid rgba(255,255,255,0.03)'
                      }} 
                      title={`Activity level ${lvl}`}
                    />
                  );
                })}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem', marginTop: '0.6rem', fontSize: '0.72rem', color: 'var(--gh-fg-muted)' }}>
                <span>Less</span>
                <span style={{ width: '10px', height: '10px', background: '#161b22', borderRadius: '2px' }} />
                <span style={{ width: '10px', height: '10px', background: '#0e4429', borderRadius: '2px' }} />
                <span style={{ width: '10px', height: '10px', background: '#006d32', borderRadius: '2px' }} />
                <span style={{ width: '10px', height: '10px', background: '#26a641', borderRadius: '2px' }} />
                <span style={{ width: '10px', height: '10px', background: '#39d353', borderRadius: '2px' }} />
                <span>More</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 880px) {
          .hero-github-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
