import React, { useState } from 'react';
import { projectsData } from '../data/resumeData';
import ProjectModal from './ProjectModal';
import { Sparkles, Keyboard, ShoppingBag, Terminal, Smartphone, Gamepad2, Search, ExternalLink, Github, Eye } from 'lucide-react';

const iconMap = {
  Keyboard, ShoppingBag, Terminal, Smartphone, Gamepad2
};

export default function ProjectsSection({ onTriggerAdvancement }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Web Apps', 'Game & C++', 'AI Systems'];

  const filteredProjects = projectsData.filter(proj => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (project) => {
    setActiveModalProject(project);
    if (onTriggerAdvancement) {
      onTriggerAdvancement(`Discovered ${project.title}!`);
    }
  };

  return (
    <section id="projects" style={{
      padding: '100px 0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>ITEM VAULT & CREATIONS</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient-diamond">Projects</span> Inventory
          </h2>
          <p className="section-subtitle">
            All 5 major projects engineered using C++, HTML/CSS/JS, MongoDB, multi-model AI integrations, and Vercel hosting.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem',
          marginBottom: '2.5rem'
        }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '0.75rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  border: '2px solid',
                  borderColor: selectedCategory === cat ? 'var(--diamond-cyan)' : 'var(--border-light)',
                  background: selectedCategory === cat ? 'rgba(56, 189, 248, 0.15)' : 'var(--bg-slot)',
                  color: selectedCategory === cat ? 'var(--diamond-cyan)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{
            position: 'relative',
            minWidth: '240px'
          }}>
            <Search size={16} color="var(--text-muted)" style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)'
            }} />
            <input
              type="text"
              placeholder="Search by tech or title..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--bg-slot)',
                border: '2px solid var(--border-light)',
                borderRadius: '8px',
                padding: '0.55rem 1rem 0.55rem 2.2rem',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map(project => {
            const IconComp = iconMap[project.icon] || Terminal;

            return (
              <div
                key={project.id}
                className="mc-card"
                onClick={() => handleCardClick(project)}
                style={{
                  padding: '1.75rem',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: `2px solid ${project.rarityColor}33`,
                  background: 'linear-gradient(180deg, #161B26 0%, #10131D 100%)'
                }}
              >
                <div>
                  {/* Top Bar: Icon & Rarity Tag */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.2rem'
                  }}>
                    <div className="mc-slot" style={{
                      width: '46px',
                      height: '46px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: project.rarityColor
                    }}>
                      <IconComp size={24} />
                    </div>

                    <span style={{
                      fontFamily: 'var(--font-pixel)',
                      fontSize: '0.7rem',
                      color: project.rarityColor,
                      background: `${project.rarityColor}15`,
                      border: `1px solid ${project.rarityColor}44`,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '4px'
                    }}>
                      {project.rarity}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--diamond-cyan)', fontWeight: 600, marginBottom: '0.85rem' }}>
                    {project.tagline}
                  </p>

                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills & Details Button */}
                <div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.2rem'
                  }}>
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'var(--text-secondary)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid var(--border-light)'
                  }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Eye size={14} /> Click for quest log
                    </span>

                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: project.rarityColor,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      Inspect →
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Popup */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
