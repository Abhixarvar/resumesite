import React, { useState } from 'react';
import { personalDetails } from '../data/resumeData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, MessageSquare, GitPullRequest } from 'lucide-react';

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
      onTriggerAdvancement(`Copied ${type.toUpperCase()} to clipboard!`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    if (onTriggerAdvancement) {
      onTriggerAdvancement('Message dispatched successfully!');
    }
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="contact" style={{
      padding: '90px 0',
      background: 'var(--gh-bg-default)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GitPullRequest size={14} />
            <span>GET IN TOUCH & DISCUSSIONS</span>
          </div>
          <h2 className="section-title">
            Connect & <span style={{ color: 'var(--gh-green-text)' }}>Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Looking for an enthusiastic full-stack web developer? Drop a message or reach out directly via email or LinkedIn!
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '2rem',
          alignItems: 'start'
        }} className="contact-grid">
          
          {/* Left Column: Direct Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Email Card */}
            <div className="gh-card" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '6px', background: 'var(--gh-bg-inset)', border: '1px solid var(--gh-border-default)', display: 'flex', alignItems: 'center', justify: 'center', color: 'var(--gh-green-text)' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--gh-fg-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Email Address</div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--gh-fg-heading)' }}>{personalDetails.email}</div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalDetails.email, 'email')}
                  className="gh-btn"
                  style={{ fontSize: '0.78rem' }}
                >
                  {copiedEmail ? <Check size={14} color="var(--gh-green-text)" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="gh-card" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '6px', background: 'var(--gh-bg-inset)', border: '1px solid var(--gh-border-default)', display: 'flex', alignItems: 'center', justify: 'center', color: 'var(--gh-blue)' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--gh-fg-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Phone Number</div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--gh-fg-heading)' }}>{personalDetails.phone}</div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalDetails.phone, 'phone')}
                  className="gh-btn"
                  style={{ fontSize: '0.78rem' }}
                >
                  {copiedPhone ? <Check size={14} color="var(--gh-green-text)" /> : <Copy size={14} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Location Tag Card (Clean - Address purged) */}
            <div className="gh-card" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '6px', background: 'var(--gh-bg-inset)', border: '1px solid var(--gh-border-default)', display: 'flex', alignItems: 'center', justify: 'center', color: 'var(--gh-gold)' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gh-fg-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Location</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--gh-fg-heading)' }}>{personalDetails.location}</div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="gh-btn" style={{ flex: 1, justifyContent: 'center', padding: '0.65rem' }}>
                <Github size={18} />
                <span>GitHub Profile</span>
              </a>

              <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="gh-btn" style={{ flex: 1, justifyContent: 'center', color: 'var(--gh-blue)', padding: '0.65rem' }}>
                <Linkedin size={18} />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* Right Column: GitHub Issue Style Message Form */}
          <div className="gh-card">
            <div className="gh-box-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--gh-fg-heading)' }}>
                <MessageSquare size={16} color="var(--gh-green-text)" />
                <span>Send Direct Message</span>
              </div>
              <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--gh-fg-muted)' }}>contact.dispatch</span>
            </div>

            <div style={{ padding: '1.5rem' }}>
              {formSent ? (
                <div style={{
                  padding: '2rem',
                  textAlign: 'center',
                  background: 'var(--gh-bg-inset)',
                  border: '1px solid var(--gh-green-text)',
                  borderRadius: '6px'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                  <h4 style={{ color: 'var(--gh-green-text)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.3rem' }}>
                    Message Dispatched Successfully!
                  </h4>
                  <p style={{ color: 'var(--gh-fg-muted)', fontSize: '0.85rem' }}>
                    Thank you for reaching out. Abhisar will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--gh-fg-muted)', marginBottom: '0.35rem' }}>
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Linus Torvalds"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--gh-bg-inset)',
                        border: '1px solid var(--gh-border-default)',
                        borderRadius: '6px',
                        padding: '0.6rem 0.85rem',
                        color: 'var(--gh-fg-default)',
                        fontSize: '0.85rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--gh-fg-muted)', marginBottom: '0.35rem' }}>
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. dev@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--gh-bg-inset)',
                        border: '1px solid var(--gh-border-default)',
                        borderRadius: '6px',
                        padding: '0.6rem 0.85rem',
                        color: 'var(--gh-fg-default)',
                        fontSize: '0.85rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--gh-fg-muted)', marginBottom: '0.35rem' }}>
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Abhisar, I'd like to discuss a web application project..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--gh-bg-inset)',
                        border: '1px solid var(--gh-border-default)',
                        borderRadius: '6px',
                        padding: '0.6rem 0.85rem',
                        color: 'var(--gh-fg-default)',
                        fontSize: '0.85rem',
                        outline: 'none',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button type="submit" className="gh-btn gh-btn-primary" style={{ justifyContent: 'center', padding: '0.65rem' }}>
                    <Send size={15} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
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
