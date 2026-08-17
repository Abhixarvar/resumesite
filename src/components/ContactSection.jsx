import React, { useState } from 'react';
import { personalDetails } from '../data/resumeData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';

export default function ContactSection({ onTriggerAdvancement }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
    if (onTriggerAdvancement) {
      onTriggerAdvancement(`Copied ${type.toUpperCase()} to Clipboard!`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    if (onTriggerAdvancement) {
      onTriggerAdvancement('Sent Dispatch Signal to Abhisar!');
    }
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="contact" style={{
      padding: '100px 0',
      background: 'rgba(11, 14, 20, 0.7)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>DISPATCH & CHAT BEACON</span>
          </div>
          <h2 className="section-title">
            Connect & <span className="text-gradient-emerald">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Looking for an enthusiastic beginner game & software developer? Drop a message or reach out directly!
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }} className="contact-grid">
          
          {/* Left Column: Direct Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Email Card */}
            <div className="mc-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="mc-slot" style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--emerald-green)' }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Email Address</div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{personalDetails.email}</div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalDetails.email, 'email')}
                  style={{
                    background: 'var(--bg-slot)',
                    border: '1px solid var(--border-light)',
                    color: copiedEmail ? 'var(--emerald-green)' : 'var(--text-secondary)',
                    padding: '0.5rem 0.8rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="mc-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="mc-slot" style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--diamond-cyan)' }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Phone Number</div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{personalDetails.phone}</div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalDetails.phone, 'phone')}
                  style={{
                    background: 'var(--bg-slot)',
                    border: '1px solid var(--border-light)',
                    color: copiedPhone ? 'var(--emerald-green)' : 'var(--text-secondary)',
                    padding: '0.5rem 0.8rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Address Card */}
            <div className="mc-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="mc-slot" style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-amber)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Location & Base</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{personalDetails.address}</div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="mc-card" style={{
                flex: 1,
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                color: '#38BDF8',
                fontWeight: 700
              }}>
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>

              <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="mc-card" style={{
                flex: 1,
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                color: '#FFF',
                fontWeight: 700
              }}>
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="mc-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MessageSquare size={20} color="var(--emerald-green)" />
              <span>Send Direct Signal</span>
            </h3>

            {formSent ? (
              <div className="mc-slot" style={{ padding: '2rem', textAlign: 'center', borderColor: 'var(--emerald-green)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✉️</div>
                <h4 style={{ color: 'var(--emerald-green)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  Dispatch Delivered!
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  Thank you for reaching out! Abhisar will respond to your message as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Steve / Alex"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-slot)',
                      border: '2px solid var(--border-light)',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    YOUR EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@minecraft.net"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-slot)',
                      border: '2px solid var(--border-light)',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    MESSAGE DETAILS
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Abhisar, I'd like to discuss a project..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-slot)',
                      border: '2px solid var(--border-light)',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="mc-button mc-button-emerald" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={18} />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
