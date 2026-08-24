import React, { useState } from 'react';
import { projectsData } from '../data/resumeData';
import ProjectModal from './ProjectModal';
import { FolderGit2, Star, GitFork, ExternalLink, Github, Search, Eye, Terminal, Keyboard, ShoppingBag } from 'lucide-react';

const iconMap = {
  Keyboard, ShoppingBag, Terminal
};

export default function ProjectsSection({ onTriggerAdvancement }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Web Apps', 'C++ & Tools'];

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
      onTriggerAdvancement(`Inspected repository: ${project.title}`);
    }
  };

  return (
    <section id="projects" style={{
      padding: '90px 0',
      position: 'relative',
      background: 'var(--gh-bg-default)'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>PINNED REPOSITORIES & CREATIONS</span>
          </div>
          <h2 className="section-title">
            Featured <span style={{ color: 'var(--gh-blue)' }}>Software Projects</span>
          </h2>
          <p className="section-subtitle">
            Curated web applications and C++ console systems engineered with HTML5, CSS3, JavaScript, MongoDB, and Vercel hosting.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  padding: '0.45rem 0.95rem',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--gh-blue)' : 'var(--gh-border-default)',
                  background: selectedCategory === cat ? 'rgba(88, 166, 255, 0.12)' : 'var(--gh-bg-subtle)',
                  color: selectedCategory === cat ? 'var(--gh-blue)' : 'var(--gh-fg-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{
            position: 'relative',
            minWidth: '260px'
          }}>
            <Search size={15} color="var(--gh-fg-muted)" style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)'
            }} />
            <input
              type="text"
              placeholder="Find a repository..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--gh-bg-subtle)',
                border: '1px solid var(--gh-border-default)',
                borderRadius: '6px',
                padding: '0.45rem 1rem 0.45rem 2.2rem',
                color: 'var(--gh-fg-default)',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Repositories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredProjects.map(project => {
            const IconComp = iconMap[project.icon] || Terminal;

            return (
              <div
                key={project.id}
                className="gh-card gh-card-interactive"
                onClick={() => handleCardClick(project)}
                style={{
                  padding: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Top Bar: Repo Name & Visibility Tag */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.6rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FolderGit2 size={18} color="var(--gh-blue)" />
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--gh-blue)' }}>
                        {project.title}
                      </h3>
                    </div>

                    <span className="gh-badge-visibility">
                      {project.visibility}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p style={{ fontSize: '0.82rem', color: 'var(--gh-fg-muted)', fontWeight: 500, marginBottom: '0.8rem' }}>
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.86rem',
                    color: 'var(--gh-fg-default)',
                    lineHeight: 1.5,
                    marginBottom: '1.25rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills & GitHub Metadata */}
                <div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem',
                    marginBottom: '1.2rem'
                  }}>
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} style={{
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        background: 'var(--gh-bg-inset)',
                        border: '1px solid var(--gh-border-muted)',
                        color: 'var(--gh-fg-muted)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Stats Line */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--gh-border-muted)',
                    fontSize: '0.78rem',
                    color: 'var(--gh-fg-muted)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      {/* Language Indicator Dot */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: project.languageColor,
                          display: 'inline-block'
                        }} />
                        <span>{project.language}</span>
                      </div>

                      {/* Star Count */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Star size={13} color="var(--gh-fg-muted)" />
                        <span>{project.stars}</span>
                      </div>

                      {/* Fork Count */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <GitFork size={13} color="var(--gh-fg-muted)" />
                        <span>{project.forks}</span>
                      </div>
                    </div>

                    <span style={{ color: 'var(--gh-blue)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      Details →
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
