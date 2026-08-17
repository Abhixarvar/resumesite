import React from 'react';
import { personalDetails } from '../data/resumeData';
import { Gamepad2, Sparkles, GraduationCap, Award, Github, Linkedin, ArrowRight, Download, Code2, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      paddingTop: '130px',
      paddingBottom: '80px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Text Info */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: 'var(--emerald-green)',
              fontFamily: 'var(--font-pixel)',
              fontSize: '0.75rem',
              marginBottom: '1.2rem'
            }}>
              <Sparkles size={14} />
              <span>SPAWNED IN DELHI, INDIA • BCA 2024-2027</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1rem',
              letterSpacing: '-1px'
            }}>
              Hi, I'm <span className="text-gradient-diamond">{personalDetails.name}</span>
            </h1>

            <div style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--emerald-green)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <Terminal size={22} color="var(--emerald-green)" />
              <span>{personalDetails.role}</span>
            </div>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              background: 'rgba(19, 23, 34, 0.6)',
              padding: '1.25rem',
              borderRadius: '10px',
              borderLeft: '4px solid var(--diamond-cyan)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
              "{personalDetails.objective}"
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}>
              <a href="#projects" className="mc-button mc-button-emerald">
                <span>View Projects Inventory</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="mc-button mc-button-secondary">
                <span>Get In Touch</span>
              </a>

              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="mc-slot" style={{
                  width: '46px',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF',
                  textDecoration: 'none'
                }} title="GitHub Profile">
                  <Github size={20} />
                </a>

                <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="mc-slot" style={{
                  width: '46px',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38BDF8',
                  textDecoration: 'none'
                }} title="LinkedIn Profile">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Specs / Languages */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)'
            }}>
              <div><strong style={{ color: 'var(--text-primary)' }}>Languages:</strong> English, Hindi</div>
              <div>•</div>
              <div><strong style={{ color: 'var(--text-primary)' }}>Location:</strong> Rohini, Delhi</div>
            </div>
          </div>

          {/* Right Column: Player Avatar Card & Stats Grid */}
          <div>
            <div className="mc-card" style={{
              padding: '2rem',
              textAlign: 'center',
              background: 'linear-gradient(180deg, rgba(27, 32, 45, 0.95) 0%, rgba(15, 18, 26, 0.95) 100%)',
              borderColor: 'var(--border-accent)'
            }}>
              
              {/* Player Avatar Frame */}
              <div style={{
                width: '140px',
                height: '140px',
                margin: '0 auto 1.5rem auto',
                borderRadius: '20px',
                padding: '6px',
                background: 'linear-gradient(135deg, var(--emerald-green), var(--diamond-cyan), var(--gold-amber))',
                boxShadow: '0 0 25px rgba(56, 189, 248, 0.3)',
                position: 'relative'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '16px',
                  background: '#0F121A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/profile.jpg" 
                    alt="Abhisar Varshney" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }} 
                  />
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '-8px',
                  right: '-8px',
                  background: '#10B981',
                  color: '#000',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-pixel)'
                }}>
                  READY
                </div>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.3rem' }}>
                {personalDetails.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--diamond-cyan)', marginBottom: '1.5rem', fontFamily: 'var(--font-pixel)' }}>
                GAME & SOFTWARE DEVELOPER
              </p>

              {/* 4 Player Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.8rem'
              }}>
                <div className="mc-slot" style={{ padding: '0.85rem', textAlign: 'center' }}>
                  <div style={{ color: 'var(--emerald-green)', fontWeight: 800, fontSize: '1.25rem' }}>5+</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Projects Built</div>
                </div>
                
                <div className="mc-slot" style={{ padding: '0.85rem', textAlign: 'center' }}>
                  <div style={{ color: 'var(--diamond-cyan)', fontWeight: 800, fontSize: '1.25rem' }}>C++ & Web</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Core Focus</div>
                </div>

                <div className="mc-slot" style={{ padding: '0.85rem', textAlign: 'center' }}>
                  <div style={{ color: 'var(--gold-amber)', fontWeight: 800, fontSize: '1.25rem' }}>BCA</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Jagannath Univ</div>
                </div>

                <div className="mc-slot" style={{ padding: '0.85rem', textAlign: 'center' }}>
                  <div style={{ color: '#A855F7', fontWeight: 800, fontSize: '1.25rem' }}>2 Certs</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>NPTEL & Claude</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
