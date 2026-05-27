import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { images } from '../data/images';
import { projectCategories, projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="projectsNew">
      <SEO
        title="Projects & Portfolio — Platforms, AI & Web Delivery"
        description="A portfolio of delivered platforms, AI systems, and web projects — smart irrigation, water metering, AI agents, real estate, and corporate websites."
        keywords="technology projects, IoT projects, AI projects, web development portfolio, smart water platforms"
        canonical="https://caledoniaheights.co.ke/projects"
      />
      <PageHero
        title="Projects & Portfolio"
        subtitle="A selection of platforms, AI systems, and web delivery work worldwide."
        badge="Portfolio"
        bgVariant="surface"
        backgroundImage={images.projectsHero}
        ctaText="Start a project"
        ctaLink="/contact"
        secondaryCtaText="Discuss your project"
        secondaryCtaLink="/contact"
      />

      <Section variant="dark">
        <div className="projectsNew__filters">
          {projectCategories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                type="button"
                className="btn"
                onClick={() => setActive(c)}
                style={{
                  borderColor: isActive ? 'rgba(0, 200, 255, 0.45)' : 'var(--color-border)',
                  background: isActive ? 'rgba(0, 200, 255, 0.10)' : 'rgba(255,255,255,0.02)',
                  boxShadow: isActive ? 'var(--glow-cyan)' : 'none',
                }}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="grid grid-3">
          {filtered.map((p) => (
            <Card key={p.id} className="card-hover project-card">
              <div className="projectsNew__cardTop">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="projectsNew__img" loading="lazy" decoding="async" />
                ) : (
                  <div className="projectsNew__imgPlaceholder" aria-hidden="true" />
                )}
              </div>
              <div className="projectsNew__cardBody">
                <div className="projectsNew__category mono">{p.category}</div>
                <h3 className="projectsNew__title">{p.name}</h3>
                <p style={{ lineHeight: 1.7, color: 'var(--text-bright)' }}>{p.desc}</p>
                <div className="pill-row" style={{ marginTop: '1rem' }}>
                  {p.tech.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
                <div style={{ marginTop: '1.2rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                  {p.link ? (
                    p.link.startsWith('/') ? (
                      <Button className="btn-secondary" to={p.link}>View →</Button>
                    ) : (
                      <a className="btn btn-secondary" href={p.link} target="_blank" rel="noreferrer">
                        Visit →
                      </a>
                    )
                  ) : (
                    <Button className="btn-secondary" to="/contact">Request details →</Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
