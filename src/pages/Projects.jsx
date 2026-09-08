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
  const [brokenImages, setBrokenImages] = useState({});

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="projectsNew">
      <SEO
        title="Installations & Projects — Smart Water Metering Kenya"
        description="A portfolio of smart water metering installations — STS prepaid deployments and NB-IoT smart metering for residential, commercial, and industrial properties across Kenya."
        keywords="smart water meter Kenya, prepaid water meter M-Pesa, NB-IoT water meter, water metering Kenya installations"
        canonical="https://caledoniaheights.co.ke/projects"
      />
      <PageHero
        title="Installations & Projects"
        subtitle="A selection of smart water metering installations, surveyed and commissioned by our team."
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
                {p.image && !brokenImages[p.id] ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="projectsNew__img"
                    loading="lazy"
                    decoding="async"
                    onError={() => setBrokenImages((prev) => ({ ...prev, [p.id]: true }))}
                  />
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

        <p className="text-center text-muted" style={{ marginTop: '2.5rem', lineHeight: 1.7 }}>
          Every installation is surveyed, commissioned, and supported by our team.
        </p>
      </Section>
    </div>
  );
};

export default Projects;
